import { Layout } from "@/components/Layout";
import { SchoolCard } from "@/components/SchoolCard";
import { schools } from "@/data/education";

const Formacao = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="container-wide pt-16 md:pt-24 pb-16 md:pb-20">
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
          Formação
        </h1>
      </section>

      {/* Schools Grid */}
      <section className="container-wide pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {schools.map((school) => (
            <SchoolCard key={school.id} school={school} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Formacao;