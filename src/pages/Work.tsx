import { BriefcaseBusiness } from "lucide-react";
import { Layout } from "@/components/Layout";
import { ProjectListItem } from "@/components/ProjectListItem";
import { projects } from "@/data/projects";

const Work = () => {
  return (
    <Layout>
      <div className="relative overflow-hidden">
        {/* Símbolo decorativo de fundo da página */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[10vw] top-[12vh] z-0 rotate-[12deg] text-foreground opacity-[0.06]"
        >
          <BriefcaseBusiness
            strokeWidth={1}
            className="h-[45vw] w-[45vw] max-h-[720px] max-w-[720px]"
          />
        </div>

        {/* Segundo símbolo decorativo no canto superior direito */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[8vw] top-[2vh] z-0 rotate-[-14deg] text-foreground opacity-[0.045]"
        >
          <BriefcaseBusiness
            strokeWidth={1}
            className="h-[32vw] w-[32vw] max-h-[520px] max-w-[520px]"
          />
        </div>

        {/* Header */}
        <section className="container-wide relative z-10 pt-16 md:pt-24 pb-16 md:pb-20">
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
            Projetos
          </h1>
        </section>

        {/* Project List */}
        <section className="relative z-10 pb-24">
          {projects.map((project, index) => (
            <ProjectListItem
              key={project.id}
              id={project.id}
              title={project.title}
              tags={project.tags}
              year={project.year}
              image={project.hoverImage || project.coverImage}
              index={index}
            />
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default Work;
