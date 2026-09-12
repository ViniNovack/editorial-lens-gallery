import { GraduationCap } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SchoolCard } from "@/components/SchoolCard";
import { schools } from "@/data/education";

const Formacao = () => {
  return (
    <Layout>
      <div className="relative overflow-hidden">
        {/* Símbolo decorativo de fundo da página */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[8vw] top-[8vh] z-0 rotate-[-12deg] text-foreground opacity-[0.06]"
        >
          <GraduationCap
            strokeWidth={1}
            className="h-[45vw] w-[45vw] max-h-[720px] max-w-[720px]"
          />
        </div>

        {/* Segundo símbolo decorativo no canto inferior esquerdo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[9vw] bottom-[2vh] z-0 rotate-[14deg] text-foreground opacity-[0.045]"
        >
          <GraduationCap
            strokeWidth={1}
            className="h-[32vw] w-[32vw] max-h-[520px] max-w-[520px]"
          />
        </div>

        {/* Header */}
        <section className="container-wide relative z-10 pt-16 md:pt-24 pb-16 md:pb-20">
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
            Formação
          </h1>
        </section>

        {/* Schools Grid */}
        <section className="container-wide relative z-10 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {schools.map((school) => (
              <SchoolCard key={school.id} school={school} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Formacao;
