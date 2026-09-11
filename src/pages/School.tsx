import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft, Sparkles, GraduationCap } from "lucide-react";
import { Layout } from "@/components/Layout";
import { RevealText } from "@/components/RevealText";
import { schools } from "@/data/education";

const School = () => {
  const { schoolId } = useParams();
  const school = schools.find((s) => s.id === schoolId);

  if (!school) {
    return <Navigate to="/formacao" replace />;
  }

  const hasHighlights = school.highlights && school.highlights.length > 0;
  const isPucpr = school.id === "pucpr";

  return (
    <Layout noPadding headerRevealMode>
      {isPucpr ? (
        <>
          {/* PUCPR: Hero full-width com logo sobreposta */}
          <section className="relative w-full" style={{ height: "80vh", minHeight: "480px" }}>
            <img
              src={school.coverImage}
              alt={school.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay gradiente para melhor legibilidade */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />

            {/* Logo no canto superior esquerdo */}
            {school.logo && (
              <div className="absolute top-24 left-6 md:left-12">
                <img
                  src={school.logo}
                  alt="PUCPR - Logo"
                  className="h-28 md:h-40 object-contain drop-shadow-2xl"
                  style={{ filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.7))" }}
                />
              </div>
            )}

            {/* Título no canto inferior esquerdo */}
            <div className="absolute bottom-10 left-6 md:left-12 right-6 md:right-12">
              <div className="flex flex-wrap gap-3 mb-4">
                {school.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] md:text-xs uppercase tracking-widest px-3 py-1 border border-white/40 text-white/80 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
                {school.fullName || school.title}
              </h1>
            </div>
          </section>
        </>
      ) : (
        /* Layout padrão para outras escolas */
        <section className="relative min-h-[70vh] pt-20 md:pt-24 flex flex-col md:flex-row">
          <div className="flex-1 bg-background flex flex-col justify-center px-6 md:px-12 py-12 md:py-0 order-2 md:order-1">
            {school.logo && (
              <div className="flex items-center gap-3 mb-8">
                <img src={school.logo} alt="" className="w-10 h-10 object-contain" />
                <span className="font-display text-lg font-semibold">{school.title}</span>
              </div>
            )}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {school.fullName || school.title}
            </h1>
            <div className="flex flex-wrap gap-3">
              {school.tags.map((tag) => (
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
              src={school.coverImage}
              alt={school.title}
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
        </section>
      )}

      {/* Facts + Highlights */}
      <section className="container-wide py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Facts column */}
          <div className="md:col-span-1 space-y-8">
            {school.campus && (
              <RevealText>
                <div>
                  <p className="text-label mb-2">Campus</p>
                  <p>{school.campus}</p>
                </div>
              </RevealText>
            )}
            <RevealText>
              <div>
                <p className="text-label mb-2">Período de estudo</p>
                <p>{school.year}</p>
              </div>
            </RevealText>
            {school.website && (
              <RevealText>
                <div>
                  <p className="text-label mb-2">Página oficial</p>
                  <a
                    href={school.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(school.website, "_blank", "noopener,noreferrer");
                    }}
                    className="flex items-center gap-4 text-lg hover-highlight group"
                  >
                    <GraduationCap size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                    <span>Página Oficial</span>
                  </a>
                </div>
              </RevealText>
            )}
          </div>

          {/* Highlights (novo formato) ou descrição simples (formato antigo) */}
          {hasHighlights ? (
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12">
              {school.highlights!.map((highlight, index) => (
                <RevealText key={index}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Sparkles size={18} className="text-muted-foreground" />
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
              {school.description.split("\n\n").map((paragraph, index) => (
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

      {/* PUCPR: Galeria abaixo do texto e dos tópicos */}
      {isPucpr && school.images.length > 0 && (
        <section className="pb-0">
          <div className="grid grid-cols-2 gap-1">
            {school.images.flatMap((img, rowIdx) =>
              Array.isArray(img)
                ? img.map((src, colIdx) => (
                    <div
                      key={`${rowIdx}-${colIdx}`}
                      className="overflow-hidden"
                      style={{ aspectRatio: "16/9" }}
                    >
                      <img
                        src={src}
                        alt={`${school.title} - campus ${rowIdx * 2 + colIdx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  ))
                : [
                    <div
                      key={rowIdx}
                      className="col-span-2 overflow-hidden"
                      style={{ aspectRatio: "21/9" }}
                    >
                      <img
                        src={img}
                        alt={`${school.title} - ${rowIdx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>,
                  ]
            )}
          </div>
        </section>
      )}

      {/* Gallery (só aparece para escolas sem highlights e sem layout especial) */}
      {!hasHighlights && !isPucpr && (
        <section className="container-wide pb-16 md:pb-24">
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
      )}

      {/* Courses */}
      {school.courses.length > 0 && (
        <section className="container-wide pt-12 md:pt-16 pb-16 md:pb-24">
          <RevealText>
            <div>
              <p className="text-label mb-4">Cursos</p>
              <div className="space-y-2">
                {school.courses.map((course) => (
                  <Link
                    key={course.id}
                    to={`/formacao/${school.id}/${course.id}`}
                    className="block text-lg hover-highlight"
                  >
                    {course.title}
                  </Link>
                ))}
              </div>
            </div>
          </RevealText>
        </section>
      )}

      {/* Back Link */}
      <section className="container-wide pb-24">
        <Link
          to="/formacao"
          className="inline-flex items-center gap-3 text-muted-foreground hover-highlight group"
        >
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          <span>Voltar</span>
        </Link>
      </section>
    </Layout>
  );
};

export default School;