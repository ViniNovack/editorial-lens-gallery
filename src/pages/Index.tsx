import { useState, useRef } from "react";
import { Layout } from "@/components/Layout";
import { Linkedin, Github } from "lucide-react";
import { RevealText } from "@/components/RevealText";
import workspaceAsset from "@/assets/workspace-setup-v2.jpg.asset.json";
import welcomeBgAsset from "@/assets/welcome-bg.jpg.asset.json";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate offset from center (normalized to -1 to 1)
    const x = (e.clientX - rect.left - centerX) / centerX;
    const y = (e.clientY - rect.top - centerY) / centerY;
    
    setMousePosition({ x, y });
  };

  return (
    <Layout noPadding>
      <section 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative h-screen overflow-hidden"
      >
        {/* Workspace Background Image with Parallax */}
        <div 
          className="absolute inset-[-40px] transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${-mousePosition.x * 30}px, ${-mousePosition.y * 30}px) scale(1.05)`,
          }}
        >
          <img
            src={workspaceAsset.url}
            alt="Workspace setup"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-primary/15" />

        {/* Gradient blend into the welcome section */}
        <div className="absolute bottom-0 left-0 right-0 h-48 md:h-64 bg-gradient-to-b from-transparent via-primary/20 to-primary/35 z-[5] pointer-events-none" />

        {/* Centered Title - Overlaid */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-foreground text-center px-4">
            Vinícius Jimenez Novack
          </h1>
        </div>

        {/* Social Links - Bottom Right */}
        <div className="absolute bottom-8 md:bottom-12 right-6 md:right-12 z-10 flex flex-row gap-3">
          <a
            href="https://www.linkedin.com/in/vininovack"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://www.linkedin.com/in/vininovack", "_blank", "noopener,noreferrer");
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-foreground/10 text-foreground/70 hover:bg-background/30 hover:text-foreground transition-colors cursor-pointer"
          >
            <Linkedin size={18} />
            <span className="text-sm font-medium">Vinícius Jimenez Novack</span>
          </a>
          <a
            href="https://github.com/ViniNovack"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://github.com/ViniNovack", "_blank", "noopener,noreferrer");
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-foreground/10 text-foreground/70 hover:bg-background/30 hover:text-foreground transition-colors cursor-pointer"
          >
            <Github size={18} />
            <span className="text-sm font-medium">ViniNovack</span>
          </a>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="relative min-h-[80vh] py-24 md:py-40 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={welcomeBgAsset.url}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/30" />
          {/* Blend edges with surrounding sections */}
          <div className="absolute top-0 left-0 right-0 h-40 md:h-56 bg-gradient-to-b from-primary/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-40 md:h-56 bg-gradient-to-t from-primary/30 to-transparent" />
        </div>

        {/* Glass Panel */}
        <div className="relative z-10 container-wide flex justify-center px-6">
          <div className="max-w-4xl w-full bg-primary/15 backdrop-blur-md border border-primary/20 rounded-2xl px-8 py-10 md:px-14 md:py-14 shadow-2xl">
            <RevealText className="mb-6" delay={0}>
              <h2 className="text-2xl md:text-4xl font-bold text-white text-center">
                Olá, seja bem-vindo ao meu portfólio! 👋
              </h2>
            </RevealText>

            <div className="space-y-5 text-base md:text-lg font-sans text-white/85 leading-relaxed text-center">
              <RevealText delay={0.15}>
                <p>
                  Este é um espaço onde compartilho um pouco sobre mim, minha trajetória e alguns dos trabalhos que venho desenvolvendo ao longo da minha formação.
                </p>
              </RevealText>

              <RevealText delay={0.3}>
                <p>
                  Aqui você poderá conhecer melhor minhas experiências, projetos e aprendizados, acompanhando um pouco da minha evolução e dos caminhos que venho construindo na área de tecnologia.
                </p>
              </RevealText>

              <RevealText delay={0.45}>
                <p>
                  Fique à vontade para explorar a página e conhecer um pouco mais sobre o meu trabalho! 🚀
                </p>
              </RevealText>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
