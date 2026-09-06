import { Layout } from "@/components/Layout";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <section className="container-wide py-16 md:py-24 min-h-[calc(100vh-200px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Content */}
          <div className="space-y-12">
            <div>
              <h1 className="text-display mb-8 animate-fade-in-up">
                Hello, world! 👋
              </h1>
              <div className="space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <p>
                  Sempre tive curiosidade por programação e, por ser uma pessoa que gosta de descobrir as coisas por conta própria, comecei a explorar esse universo com autonomia. Isso me fez começar a ter relações com a tecnologia antes mesmo da faculdade, pois foi nesse caminho que conheci o CS50: Introduction to Computer Science, da Universidade de Harvard, uma experiência que despertou ainda mais meu interesse pela computação e pela possibilidade de transformar problemas em soluções. Mais do que aprender programação, foi quando percebi o quanto gostava de entender a lógica por trás daquilo que estava construindo.
                </p>
                <p>
                  Essa experiência me levou a cursar Ciência da Computação na PUCPR, onde continuo ampliando essa base. Porém, mesmo com a graduação, nunca fui muito satisfeito em aprender apenas aquilo que é apresentado em sala. Por isso, busco constantemente cursos, conteúdos e novas ferramentas para aprofundar meus conhecimentos e explorar assuntos que despertam minha curiosidade. Com o tempo, essa busca me aproximou principalmente de Ciência de Dados, Machine Learning e Inteligência Artificial, áreas que considero fascinantes por unirem tecnologia, matemática, lógica e a possibilidade de extrair conhecimento de informações.
                </p>
                <p>
                  Gosto especialmente de situações em que existe algo para investigar, como analisar informações, encontrar relações que não estavam evidentes e compreender o que os dados estão tentando mostrar. Esses elementos são partes que tornam esse campo tão interessante para mim. Ao mesmo tempo, acredito que uma boa análise não termina em encontrar um resultado: é preciso questioná-lo, entender seu contexto e pensar em como aquela informação pode realmente ser utilizada. É esse processo de observar, testar diferentes possibilidades e chegar a uma conclusão que mais me desperta interesse.
                </p>
                <p>
                  Essa forma de pensar também influencia a maneira como desenvolvo minhas ideias. Gosto de experimentar abordagens diferentes, buscar alternativas e não aceitar a primeira solução simplesmente porque ela funciona. Muitas vezes, uma mudança de perspectiva é suficiente para encontrar um caminho melhor. Para mim, criatividade na tecnologia está justamente nessa capacidade de enxergar possibilidades onde, inicialmente, parece existir apenas um caminho.
                </p>
                <p>
                  Também acredito que trocar ideias pode revelar um ponto de vista que sozinho eu não teria considerado, e que compartilhar conhecimento também é uma forma de continuar aprendendo. Por isso, valorizo ambientes em que existe espaço para questionar, construir em conjunto e aprender com outras pessoas.
                </p>
                <p>
                  Fora desse universo, tenho grande interesse por matemática, física, robótica e problemas lógicos, além de gostar de leitura, ciclismo, corrida e gastronomia. No fim, vejo minha trajetória como uma busca constante por aprender, experimentar e entender melhor o mundo ao meu redor. Ainda estou construindo meu caminho na tecnologia, mas tenho cada vez mais certeza de que quero continuar explorando tudo o que dados, Machine Learning e Inteligência Artificial podem tornar possível.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <a href="mailto:vininomn@gmail.com" className="flex items-center gap-4 text-lg hover-highlight group">
                <Mail size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                <span>vininomn@gmail.com</span>
              </a>

              <a href="https://www.linkedin.com/in/vininovack" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg hover-highlight group">
                <Linkedin size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                <span>Vinícius Jimenez Novack</span>
              </a>

              <a href="https://github.com/ViniNovack" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg hover-highlight group">
                <Github size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                <span>ViniNovack</span>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:block lg:sticky lg:top-24">
            <div className="aspect-[4/5] bg-secondary overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=1000&fit=crop"
                alt="Contact"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
