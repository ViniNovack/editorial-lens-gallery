import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft, Sparkles, GraduationCap, Youtube, Linkedin, Instagram } from "lucide-react";
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

  return (
    <Layout noPadding headerRevealMode>
      {/* Hero padronizado para todas as escolas */}
      <section className="relative w-full" style={{ height: "80vh", minHeight: "480px" }}>
        <img src={school.coverImage} alt={school.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />

        {/* Logo grande da instituição na lateral esquerda */}
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

        {/* Faixa inferior do título sobre a própria imagem */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-10 md:pb-12 pt-24 bg-gradient-to-t from-black/70 via-black/25 to-transparent">
          <div className="flex flex-wrap gap-3 mb-4">
            {school.tags.map((tag) => (
              <span key={tag} className="text-[10px] md:text-xs uppercase tracking-widest px-3 py-1 border border-white/40 text-white/80 backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
            {school.fullName || school.title}
          </h1>
        </div>
      </section>

      {/* Facts + Highlights */}
      <section className="container-wide py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1 space-y-8">
            {school.campus && (
              <RevealText><div><p className="text-label mb-2">Campus</p><p>{school.campus}</p></div></RevealText>
            )}
            <RevealText><div><p className="text-label mb-2">Período de estudo</p><p>{school.year}</p></div></RevealText>
            {school.website && (
              <RevealText>
                <div>
                  <p className="text-label mb-2">Página oficial</p>
                  <a href={school.website} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open(school.website, "_blank", "noopener,noreferrer"); }} className="flex items-center gap-4 text-lg hover-highlight group">
                    <GraduationCap size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                    <span>Página Oficial</span>
                  </a>
                </div>
              </RevealText>
            )}
            {school.socialLinks && (
              <RevealText>
                <div>
                  <p className="text-label mb-2">Redes sociais</p>
                  <div className="space-y-3">
                    {school.socialLinks.youtube && (
                      <a href={school.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg hover-highlight group">
                        <Youtube size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                        <span>YouTube</span>
                      </a>
                    )}
                    {school.socialLinks.linkedin && (
                      <a href={school.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg hover-highlight group">
                        <Linkedin size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                        <span>LinkedIn</span>
                      </a>
                    )}
                    {school.socialLinks.instagram && (
                      <a href={school.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg hover-highlight group">
                        <Instagram size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                        <span>Instagram</span>
                      </a>
                    )}
                  </div>
                </div>
              </RevealText>
            )}
          </div>

          {hasHighlights ? (
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12">
              {school.highlights!.map((highlight, index) => (
                <RevealText key={index}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2"><Sparkles size={18} className="text-muted-foreground" /><h3 className="text-sm uppercase tracking-widest font-medium">{highlight.title}</h3></div>
                    <p className="text-base text-muted-foreground leading-relaxed">{highlight.text}</p>
                    <img src={highlight.image} alt={highlight.title} className="w-full" />
                  </div>
                </RevealText>
              ))}
            </div>
          ) : (
            <div className="md:col-span-3 space-y-6">
              {school.description.split("\n\n").map((paragraph, index) => (
                <RevealText key={index}><p className="text-xl md:text-2xl leading-relaxed text-muted-foreground">{paragraph}</p></RevealText>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* PUCPR: Galeria abaixo do texto e dos tópicos */}
      {school.id === "pucpr" && school.images.length > 0 && (
        <section className="pb-0">
          <div className="grid grid-cols-2 gap-1">
            {school.images.flatMap((img, rowIdx) => Array.isArray(img)
              ? img.map((src, colIdx) => (
                  <div key={`${rowIdx}-${colIdx}`} className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
                    <img src={src} alt={`${school.title} - campus ${rowIdx * 2 + colIdx + 1}`} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                  </div>
                ))
              : [<div key={rowIdx} className="col-span-2 overflow-hidden" style={{ aspectRatio: "21/9" }}><img src={img} alt={`${school.title} - ${rowIdx + 1}`} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" /></div>]
            )}
          </div>
        </section>
      )}

      {/* Data ICMC: imagens das aulas abaixo do conteúdo */}
      {school.id === "cursos-especializacao-rapida" && school.images.length > 0 && (
        <section className="pb-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {school.images.map((img, index) => (
              <div key={index} className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <img
                  src={img as string}
                  alt={`${school.title} - aula ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {school.courses.length > 0 && (
        <section className="container-wide pt-12 md:pt-16 pb-16 md:pb-24">
          <RevealText>
            <div>
              <p className="text-label mb-4">Cursos</p>
              <div className="space-y-2">
                {school.courses.map((course) => <Link key={course.id} to={`/formacao/${school.id}/${course.id}`} className="block text-lg hover-highlight">{course.title}</Link>)}
              </div>
            </div>
          </RevealText>
        </section>
      )}

      <section className="container-wide pb-24">
        <Link to="/formacao" className="inline-flex items-center gap-3 text-muted-foreground hover-highlight group">
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          <span>Voltar</span>
        </Link>
      </section>
    </Layout>
  );
};

export default School;