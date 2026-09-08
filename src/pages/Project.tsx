import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft, GraduationCap, Database, Brain, Github, Youtube, Coffee } from "lucide-react";
import { Layout } from "@/components/Layout";
import { RevealText } from "@/components/RevealText";
import { projects } from "@/data/projects";

// Ícones de marca (via Simple Icons) para ferramentas com logo oficial
const brandIconSlugs: Record<string, string> = {
  PYTHON: "python",
  HTML: "html5",
  CSS: "css",
  JAVASCRIPT: "javascript",
};

// Ícones genéricos para ferramentas/conceitos sem uma logo única
const genericIcons: Record<string, typeof Database> = {
  SQL: Database,
  "INTELIGÊNCIA ARTIFICIAL": Brain,
  JAVA: Coffee,
};

const ToolIcon = ({ tool }: { tool: string }) => {
  const slug = brandIconSlugs[tool];
  if (slug) {
    return (
      <img
        src={`https://cdn.simpleicons.org/${slug}`}
        alt=""
        className="w-4 h-4"
      />
    );
  }

  const GenericIcon = genericIcons[tool];
  if (GenericIcon) {
    return <GenericIcon size={16} className="text-muted-foreground" />;
  }

  return null;
};

const Project = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  return (
    <Layout noPadding headerRevealMode>
      {/* Hero - Full Screen */}
      <section className="relative h-screen overflow-hidden">
        <img
          src={project.coverImage}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/50" />
        
        {/* Centered Title */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-foreground text-center px-4 animate-fade-in">
            {project.title}
          </h1>
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-8 left-0 right-0 z-10 container-wide">
          <div className="flex justify-between items-end">
            {/* Date */}
            <div className="text-label">
              {project.year}
            </div>

            {/* Tags */}
            <div className="flex gap-3">
              {project.tags.map((tag) => (
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

      {/* Project Info */}
      <section className="container-wide py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
          {/* Details */}
          <div className="space-y-8">
            <RevealText>
              <div>
                <p className="text-label mb-2">Instituição</p>
                <div className="flex items-center gap-2">
                  <GraduationCap size={18} className="text-muted-foreground" />
                  <p>{project.client}</p>
                </div>
              </div>
            </RevealText>
            <RevealText>
              <div>
                <p className="text-label mb-2">Ano</p>
                <p>{project.year}</p>
              </div>
            </RevealText>
            <RevealText>
              <div>
                <p className="text-label mb-2">Categorias</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
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
            {project.tools && project.tools.length > 0 && (
              <RevealText>
                <div>
                  <p className="text-label mb-2">Ferramentas</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="flex items-center gap-1.5 text-sm border border-separator px-3 py-1"
                      >
                        <ToolIcon tool={tool} />
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealText>
            )}

            {project.github && (
              <RevealText>
                <div>
                  <p className="text-label mb-2">Repositório</p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(project.github, "_blank", "noopener,noreferrer");
                    }}
                    className="flex items-center gap-4 text-lg hover-highlight group"
                  >
                    <Github size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                    <span>Repositório</span>
                  </a>
                </div>
              </RevealText>
            )}

            {project.youtube && (
              <RevealText>
                <div>
                  <p className="text-label mb-2">Demonstração</p>
                  <a
                    href={project.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(project.youtube, "_blank", "noopener,noreferrer");
                    }}
                    className="flex items-center gap-4 text-lg hover-highlight group"
                  >
                    <Youtube size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                    <span>Demonstração</span>
                  </a>
                </div>
              </RevealText>
            )}

            {project.demonstrations && project.demonstrations.length > 0 && (
              <RevealText>
                <div>
                  <p className="text-label mb-2">Demonstrações</p>
                  <div className="space-y-3">
                    {project.demonstrations.map((demo, index) => (
                      <a
                        key={index}
                        href={demo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(demo.url, "_blank", "noopener,noreferrer");
                        }}
                        className="flex items-center gap-4 text-lg hover-highlight group"
                      >
                        <Youtube size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                        <span>{demo.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </RevealText>
            )}
          </div>

          {/* Description */}
          <div className="md:col-span-2 space-y-6">
            {project.description.split("\n\n").map((paragraph, index) => (
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
          {project.images.map((image, index) => (
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
                      alt={`${project.title} - ${index + 1}.${subIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ))}
                </div>
              ) : (
                <img
                  src={image}
                  alt={`${project.title} - ${index + 1}`}
                  className="w-full"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Back Link */}
      <section className="container-wide pb-24">
        <Link
          to="/work"
          className="inline-flex items-center gap-3 text-muted-foreground hover-highlight group"
        >
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          <span>Voltar</span>
        </Link>
      </section>
    </Layout>
  );
};

export default Project;