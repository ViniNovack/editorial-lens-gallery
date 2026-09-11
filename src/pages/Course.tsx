import { useParams, Navigate, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Github, Youtube, BookOpen, GraduationCap } from "lucide-react";
import { Layout } from "@/components/Layout";
import { RevealText } from "@/components/RevealText";
import { schools } from "@/data/education";

const Course = () => {
  const { schoolId, courseId } = useParams();
  const navigate = useNavigate();
  const school = schools.find((s) => s.id === schoolId);
  const course = school?.courses.find((c) => c.id === courseId);

  if (!school || !course) {
    return <Navigate to="/formacao" replace />;
  }

  const hasHighlights = course.highlights && course.highlights.length > 0;
  const isPucBcc = school.id === "pucpr" && course.id === "bacharelado-ciencia-da-computacao";

  return (
    <Layout noPadding headerRevealMode>
      {/* Hero */}
      <section className="relative w-full" style={{ height: "80vh", minHeight: "480px" }}>
        <img
          src={school.coverImage}
          alt={school.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />

        {/* Logo da instituição */}
        {school.logo && (
          <div className="absolute top-24 left-6 md:left-12">
            <img
              src={school.logo}
              alt={`${school.title} - Logo`}
              className="h-36 md:h-56 lg:h-64 w-auto max-w-[42vw] object-contain drop-shadow-2xl"
              style={{ filter: "drop-shadow(0 4px 18px rgba(0,0,0,0.75))" }}
            />
          </div>
        )}

        {/* Título do curso */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-10 md:pb-12 pt-24 bg-gradient-to-t from-black/70 via-black/25 to-transparent">
          <div className="flex flex-wrap gap-3 mb-4">
            {course.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] md:text-xs uppercase tracking-widest px-3 py-1 border border-white/40 text-white/80 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
            {course.title}
          </h1>
        </div>
      </section>

      {/* Facts + Highlights */}
      <section className="container-wide py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Facts column */}
          <div className="md:col-span-1 space-y-8">
            {course.modality && (
              <RevealText>
                <div>
                  <p className="text-label mb-2">Modalidade</p>
                  <p>{course.modality}</p>
                </div>
              </RevealText>
            )}
            <RevealText>
              <div>
                <p className="text-label mb-2">Período de estudo</p>
                <p>{course.year || "2026 - 2029"}</p>
              </div>
            </RevealText>
            {course.website && (
              <RevealText>
                <a
                  href={course.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base hover-highlight group"
                >
                  <GraduationCap size={18} className="text-muted-foreground group-hover:text-accent transition-colors" />
                  <span>Página Oficial</span>
                </a>
              </RevealText>
            )}
            {course.studyRepositories && course.studyRepositories.length > 0 && (
              <RevealText>
                <div className="space-y-3">
                  <p className="text-label mb-2">Repositórios de estudos:</p>
                  {course.studyRepositories.map((repository) => (
                    <a
                      key={repository.url}
                      href={repository.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-44 min-h-10 items-center gap-3 px-3 py-2 text-base hover-highlight group"
                    >
                      <Github size={18} className="shrink-0 text-muted-foreground group-hover:text-accent transition-colors" />
                      <span className="min-w-0 whitespace-normal break-words leading-tight">{repository.title}</span>
                    </a>
                  ))}
                </div>
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
          {isPucBcc ? (
            <div className="space-y-4 md:space-y-6">
              {/* Logo centralizada acima das duas imagens, formando uma composição triangular */}
              <div className="flex justify-center image-reveal animate-fade-in-up">
                <img
                  src={course.images[0] as string}
                  alt={`${course.title} - Logo PUCPR Ciência da Computação`}
                  className="w-full max-w-2xl object-contain"
                />
              </div>

              {Array.isArray(course.images[1]) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 image-reveal animate-fade-in-up">
                  {course.images[1].map((src, subIndex) => (
                    <img
                      key={subIndex}
                      src={src}
                      alt={`${course.title} - ${subIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
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
          )}
        </section>
      )}

      {/* Back Link */}
      <section className="container-wide pb-24">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-3 text-muted-foreground hover-highlight group"
        >
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          <span>Voltar</span>
        </button>
      </section>
    </Layout>
  );
};

export default Course;