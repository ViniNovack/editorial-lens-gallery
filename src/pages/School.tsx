import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/Layout";
import { RevealText } from "@/components/RevealText";
import { schools } from "@/data/education";

const School = () => {
  const { schoolId } = useParams();
  const school = schools.find((s) => s.id === schoolId);

  if (!school) {
    return <Navigate to="/formacao" replace />;
  }

  return (
    <Layout noPadding headerRevealMode>
      {/* Hero - Full Screen */}
      <section className="relative h-screen overflow-hidden">
        <img
          src={school.coverImage}
          alt={school.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/50" />

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-foreground text-center px-4 animate-fade-in">
            {school.title}
          </h1>
        </div>

        <div className="absolute bottom-8 left-0 right-0 z-10 container-wide">
          <div className="flex justify-between items-end">
            <div className="text-label">{school.year}</div>
            <div className="flex gap-3">
              {school.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] md:text-xs uppercase tracking-widest px-3 py-1 border border-foreground/30 text-foreground/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="container-wide py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
          {/* Details */}
          <div className="space-y-8">
            <RevealText>
              <div>
                <p className="text-label mb-2">Ano</p>
                <p>{school.year}</p>
              </div>
            </RevealText>
            <RevealText>
              <div>
                <p className="text-label mb-2">Categorias</p>
                <div className="flex flex-wrap gap-2">
                  {school.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm border border-separator px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </RevealText>
            {school.courses.length > 0 && (
              <RevealText>
                <div>
                  <p className="text-label mb-2">Cursos</p>
                  <div className="space-y-2">
                    {school.courses.map((course) => (
                      <Link
                        key={course.id}
                        to={`/formacao/${school.id}/${course.id}`}
                        className="block hover-highlight"
                      >
                        {course.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </RevealText>
            )}
          </div>

          {/* Description */}
          <div className="md:col-span-2 space-y-6">
            {school.description.split("\n\n").map((paragraph, index) => (
              <RevealText key={index}>
                <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="container-wide pb-24">
        <div className="space-y-8 md:space-y-12">
          {school.images.map((image, index) => (
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
                      alt={`${school.title} - ${subIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ))}
                </div>
              ) : (
                <img src={image} alt={`${school.title} - ${index + 1}`} className="w-full" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Back Link */}
      <section className="container-wide pb-24">
        <Link
          to="/formacao"
          className="inline-flex items-center gap-3 text-muted-foreground hover-highlight group"
        >
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          <span>Voltar para Formação</span>
        </Link>
      </section>
    </Layout>
  );
};

export default School;