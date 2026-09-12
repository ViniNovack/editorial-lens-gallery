import { Layout } from "@/components/Layout";
import { Mail, Linkedin, Github, Sigma, Pi } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealText } from "@/components/RevealText";
import profileAsset from "@/assets/foto-de-perfil-azul.jpeg.asset.json";

const Contact = () => {
  const { scrollY } = useScroll();
  const sigmaY = useTransform(scrollY, [0, 1200], [0, 180]);
  const piY = useTransform(scrollY, [0, 1200], [0, -160]);

  return (
    <Layout>
      <section className="relative overflow-hidden container-wide py-16 md:py-24 min-h-[calc(100vh-200px)]">
        {/* Símbolo matemático de fundo com movimento de parallax e rotação */}
        <motion.div
          aria-hidden="true"
          style={{ y: sigmaY, rotate: 24 }}
          className="absolute -left-16 -top-16 w-[28rem] h-[28rem] md:w-[38rem] md:h-[38rem] text-foreground/[0.05] pointer-events-none select-none"
        >
          <Sigma className="w-full h-full" strokeWidth={1} />
        </motion.div>

        {/* Segundo símbolo matemático de fundo com movimento de parallax e rotação */}
        <motion.div
          aria-hidden="true"
          style={{ y: piY, rotate: -24 }}
          className="absolute -right-16 bottom-0 w-[20rem] h-[20rem] md:w-[28rem] md:h-[28rem] text-foreground/[0.035] pointer-events-none select-none"
        >
          <Pi className="w-full h-full" strokeWidth={1} />
        </motion.div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-12">
            <div>
              <RevealText delay={0}>
                <h1 className="text-display mb-8">Hello, world! 👋</h1>
              </RevealText>
              <div className="space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
                <RevealText><p>Sempre tive curiosidade por programação. Por gostar de descobrir as coisas por conta própria, comecei a explorar esse universo de forma independente. Meu contato com a tecnologia começou antes mesmo da faculdade, quando conheci o CS50, Introduction to Computer Science, da Universidade de Harvard. A experiência despertou ainda mais meu interesse pela computação, principalmente pela lógica por trás daquilo que estava construindo. Foi nesse momento que percebi que não queria apenas aprender a programar, mas entender como e por que as coisas funcionavam.</p></RevealText>
                <RevealText><p>Essa curiosidade me levou a cursar Ciência da Computação na PUCPR, onde continuo construindo e ampliando minha base. Mesmo durante a graduação, percebi que queria ir além do que era apresentado em sala de aula. Por isso, procuro constantemente novos cursos, conteúdos e ferramentas que me permitam aprofundar meus conhecimentos e explorar assuntos que despertam meu interesse.</p></RevealText>
                <RevealText><p>Foi nesse processo que me aproximei principalmente de Ciência de Dados, Machine Learning e Inteligência Artificial. São áreas que me fascinam por reunirem tecnologia, matemática e lógica, além de possibilitarem transformar informações em conhecimento e soluções. Gosto especialmente da parte investigativa, que envolve analisar dados, encontrar relações que não são imediatamente evidentes e tentar compreender o que aquelas informações realmente estão mostrando.</p></RevealText>
                <RevealText><p>Para mim, o processo não termina quando um primeiro resultado é encontrado. Não gosto de aceitar uma solução apenas porque ela funciona. Prefiro questionar o contexto, testar abordagens diferentes e observar o problema por outras perspectivas. Acredito que a criatividade na tecnologia está, em grande parte, nessa capacidade investigativa de enxergar novas possibilidades e encontrar caminhos que inicialmente não eram evidentes. É dessa forma que busco construir conclusões que realmente façam sentido.</p></RevealText>
                <RevealText><p>Ao mesmo tempo, valorizo muito a troca de ideias. Conversar com outras pessoas pode revelar perspectivas que talvez eu não tivesse considerado sozinho. Compartilhar conhecimento também é uma forma de continuar aprendendo. Por isso, gosto de ambientes em que existe espaço para questionar, colaborar, construir em conjunto e aprender com diferentes experiências.</p></RevealText>
                <RevealText><p>Fora da tecnologia, tenho grande interesse por matemática, física, robótica e problemas lógicos. Também gosto de leitura, ciclismo, corrida e gastronomia. No fim, vejo minha trajetória como uma busca constante por aprender, experimentar e compreender melhor aquilo que desperta minha curiosidade. Ainda estou construindo meu caminho na tecnologia, mas tenho cada vez mais certeza de que quero continuar explorando tudo o que dados, Machine Learning e Inteligência Artificial podem tornar possível.</p></RevealText>
              </div>
            </div>

            <RevealText delay={0.2} className="space-y-6">
              <a href="mailto:vininomn@gmail.com" className="flex items-center gap-4 text-lg hover-highlight group"><Mail size={20} className="text-muted-foreground group-hover:text-accent transition-colors" /><span>vininomn@gmail.com</span></a>
              <a href="https://www.linkedin.com/in/vininovack" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg hover-highlight group"><Linkedin size={20} className="text-muted-foreground group-hover:text-accent transition-colors" /><span>Vinícius Jimenez Novack</span></a>
              <a href="https://github.com/ViniNovack" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg hover-highlight group"><Github size={20} className="text-muted-foreground group-hover:text-accent transition-colors" /><span>ViniNovack</span></a>
            </RevealText>

            <RevealText delay={0.3}>
              <p className="text-label mb-2">Local</p>
              <p className="text-lg">Curitiba, Brasil</p>
            </RevealText>
          </div>

          <div className="hidden lg:block lg:sticky lg:top-24">
            <div className="aspect-[4/5] bg-secondary overflow-hidden">
              <img src={profileAsset.url} alt="Vinícius Jimenez Novack" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
