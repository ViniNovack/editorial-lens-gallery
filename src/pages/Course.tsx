import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Youtube, BookOpen } from "lucide-react";
import { Layout } from "@/components/Layout";
import { RevealText } from "@/components/RevealText";
import { schools } from "@/data/education";

const Course = () => {
  const { schoolId, courseId } = useParams();
  const school = schools.find((s) => s.id === schoolId);
  const course = school?.courses.find((c) => c.id === courseId);

  if (!school || !course) {
    return <Navigate to="/formacao" replace />;
  }

  const hasHighlights = course.highlights && course.highlights.length > 0;

  return (
    <Layout noPadding headerRevealMode>
      {/* Hero - Split */}
      <section className="relative min-h-[70vh] pt-20 md:pt-24 flex flex-col md:flex-row">
        <div className="flex-1 bg-background flex flex-col justify-center px-6 md:px-12 py-12 md:py-0 order-2 md:order-1">
          <div className="flex items-center gap-3 mb-8">
            {school.logo && <img src={school.logo} alt="" className="w-8 h-8 object-contain" />}
            <span className="font-display text-base font-semibold text-muted-foreground">{school.title}</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {course.title}
          </h1>
          <div className="flex flex-wrap gap-3">
            {course.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] md:text-xs uppercase tracking-widest px-3 py-1 border border-separator text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-1 order-1 md:order-2">
          <img
            src={course.coverImage}
            alt={course.title}
            className="w-full h-64 md:h-full object-cover"
          />
        </div>
      </section>

      {/* Facts + Highlights */}
      <section className="container-wide py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Facts column */}
          <div className="md:col-span-1 space-y-8">
            <RevealText>
              <div>
                <p className="text-label mb-2">Nome</p>
                <p>{course.title}</p>
              </div>
            </RevealText>
            {course.modality && (
              <RevealText>
                <div>
                  <p className="text-label mb-2">Modalidade</p>
                  <p>{course.modality}</p>
                </div>
              </RevealText>
            )}
            {(course.duration || course.year) && (
              <RevealText>
                <div>
                  <p className="text-label mb-2">Duração</p>
                  <p>{course.duration || course.year}</p>
                </div>
              </RevealText>
            )}
            {school.website && (
              <RevealText>
                <a href={school.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-foreground px-5 py-2.5 text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors">
                  Site oficial
                  <ExternalLink size={14} />
                </a>
              </RevealText>
            )}

            {(course.github || course.youtube) && (
              <RevealText>
                <div className="space-y-3">
                  <p className="text-label mb-2">Acesso ao curso</p>
                  {course.github && (
                    <a href={course.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-base hover-highlight group">
                      <Github size={18} className="text-muted-foreground group-hover:text-accent transition-colors" />
                      <span>Repositório do curso</span>
                    </a>
                  )}
                  {course.youtube && (
                    <a href={course.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-base hover-highlight group">
                      <Youtube size={18} className="text-muted-foreground group-hover:text-accent transition-colors" />
                      <span>Vídeo do curso</span>
                    </a>
                  )}
                </div>
              </RevealText>
            )}
          </div>

          {/* Highlights (novo formato) ou descrição simples (formato antigo) */}
          {hasHighlights ? (
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12">
              {course.highlights!.map((highlight, index) => (
                <RevealText key={index}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <BookOpen size={18} className="text-muted-foreground" />
                      <h3 className="text-sm uppercase tracking-widest font-medium">
                        {highlight.title}
                      </h3>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {highlight.text}
                    </p>
                    <img src={highlight.image} alt={highlight.title} className="w-full" />
                  </div>
                </RevealText>
              ))}
            </div>
          ) : (
            <div className="md:col-span-3 space-y-6">
              {course.description.split("\n\n").map((paragraph, index) => (
                <RevealText key={index}>
                  <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                </RevealText>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Gallery (só aparece no formato antigo, sem highlights) */}
      {!hasHighlights && (
        <section className="container-wide pb-16 md:pb-24">
          <div className="space-y-8 md:space-y-12">
            {course.images.map((image, index) => (
              <div
                key={index}
                className="image-reveal animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {Array.isArray(image) ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {image.map((src, subIndex) => (
                      <img
                        key={subIndex}
                        src={src}
                        alt={`${course.title} - ${subIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    ))}
                  </div>
                ) : (
                  <img src={image} alt={`${course.title} - ${index + 1}`} className="w-full" />
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Back Link */}
      <section className="container-wide pb-24">
        <Link
          to={`/formacao/${school.id}`}
          className="inline-flex items-center gap-3 text-muted-foreground hover-highlight group"
        >
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          <span>Voltar</span>
        </Link>
      </section>
    </Layout>
  );
};

export default Course;