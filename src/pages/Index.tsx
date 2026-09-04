import { useState, useRef } from "react";
import { Layout } from "@/components/Layout";
import { Linkedin, Github } from "lucide-react";
import workspaceAsset from "@/assets/workspace-setup-v2.jpg.asset.json";

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
    <Layout hideFooter noPadding>
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
        <div className="absolute inset-0 bg-background/30" />

        {/* Centered Title - Overlaid */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-foreground text-center px-4">
            Vinícius Jimenez Novack
          </h1>
        </div>

        {/* Bio - Bottom Left */}
        <div className="absolute bottom-8 md:bottom-12 left-6 md:left-12 z-10 max-w-xs md:max-w-sm">
          <p className="text-sm md:text-base font-sans text-foreground/80 leading-relaxed">
            Hi! I'm Jordan, an independent artist and designer specializing in brand identity, illustration, and visual design. I help brands tell their stories through thoughtful, distinctive creative work.
          </p>
        </div>

        {/* Social Links - Bottom Right */}
        <div className="absolute bottom-8 md:bottom-12 right-6 md:right-12 z-10 flex flex-col gap-3">
          <a
            href="https://www.linkedin.com/in/vininovack"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/20 backdrop-blur-sm border border-foreground/10 text-foreground hover:bg-background/40 transition-colors"
          >
            <Linkedin size={18} />
            <span className="text-sm font-medium">Vinícius Jimenez Novack</span>
          </a>
          <a
            href="https://github.com/ViniNovack"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/20 backdrop-blur-sm border border-foreground/10 text-foreground hover:bg-background/40 transition-colors"
          >
            <Github size={18} />
            <span className="text-sm font-medium">ViniNovack</span>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
