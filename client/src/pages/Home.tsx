import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, Download, BookOpen, Lightbulb, Zap, CheckCircle2 } from "lucide-react";
import StoryCreator from "@/components/StoryCreator";

export default function Home() {
  const [expandedSection, setExpandedSection] = useState<string | null>("introducao");
  const [showStoryCreator, setShowStoryCreator] = useState(false);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white border-r border-border p-8 sticky top-0 h-screen overflow-y-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Kishotenketsu</h2>
          <p className="text-sm text-muted-foreground">A Arte da Narrativa sem Conflito</p>
        </div>

        <nav className="space-y-2">
          <NavLink 
            href="#introducao" 
            label="Introdução"
            active={expandedSection === "introducao"}
            onClick={() => toggleSection("introducao")}
          />
          <NavLink 
            href="#quatro-atos" 
            label="Os Quatro Atos"
            active={expandedSection === "quatro-atos"}
            onClick={() => toggleSection("quatro-atos")}
          />
          <NavLink 
            href="#diferenca-ocidental" 
            label="vs Estrutura Ocidental"
            active={expandedSection === "diferenca-ocidental"}
            onClick={() => toggleSection("diferenca-ocidental")}
          />
          <NavLink 
            href="#exemplos" 
            label="Exemplos Práticos"
            active={expandedSection === "exemplos"}
            onClick={() => toggleSection("exemplos")}
          />
          <NavLink 
            href="#aplicacoes" 
            label="Aplicações Modernas"
            active={expandedSection === "aplicacoes"}
            onClick={() => toggleSection("aplicacoes")}
          />
          <NavLink 
            href="#exercicios" 
            label="Exercícios"
            active={expandedSection === "exercicios"}
            onClick={() => toggleSection("exercicios")}
          />
          <NavLink 
            href="#criador" 
            label="Criador de Histórias"
            active={showStoryCreator}
            onClick={() => setShowStoryCreator(!showStoryCreator)}
          />
        </nav>

        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-sm font-semibold text-foreground mb-4">Recursos</h3>
          <div className="space-y-3">
            <a 
              href="/Kishotenketsu_Aula_Completa.pdf" 
              download
              className="flex items-center gap-2 text-sm text-sho-color hover:text-primary transition-colors"
            >
              <Download size={16} />
              <span>Aula Completa (PDF)</span>
            </a>
            <a 
              href="/Kishotenketsu_Exemplos_Analises.pdf" 
              download
              className="flex items-center gap-2 text-sm text-sho-color hover:text-primary transition-colors"
            >
              <Download size={16} />
              <span>Exemplos & Análises (PDF)</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12 max-w-4xl">
        {/* Hero Section */}
        <section className="mb-16">
          <img 
            src="/images/hero-banner.png" 
            alt="Kishotenketsu - A Arte da Narrativa" 
            className="w-full rounded-lg shadow-lg mb-8 object-cover h-96"
          />
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Kishotenketsu
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Descubra a estrutura narrativa oriental que revoluciona a forma como contamos histórias. Diferentemente das estruturas ocidentais baseadas em conflito, o Kishotenketsu oferece uma abordagem alternativa focada em harmonia, surpresa e conexão.
          </p>
        </section>

        {/* Introdução */}
        <Section
          id="introducao"
          title="Introdução"
          expanded={expandedSection === "introducao"}
          onToggle={() => toggleSection("introducao")}
        >
          <p className="text-foreground mb-4">
            <strong>Kishotenketsu</strong> (起承転結) é uma estrutura narrativa de quatro atos originária das tradições literárias do Leste Asiático, especialmente da China, Coreia e Japão. Diferentemente das estruturas narrativas ocidentais, que frequentemente se baseiam em conflito e confrontação, o Kishotenketsu oferece uma abordagem alternativa que enfatiza a harmonia, a surpresa e a conexão entre elementos aparentemente desconectados.
          </p>
          <p className="text-foreground mb-4">
            A palavra "Kishotenketsu" é composta por quatro caracteres chineses, cada um representando uma fase distinta da narrativa. Essa estrutura tem sido utilizada há séculos em obras clássicas asiáticas e continua sendo amplamente empregada em mangás, animes, filmes e literatura contemporânea.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <BenefitCard 
              icon={<Lightbulb className="text-ki-color" size={24} />}
              title="Diversidade Criativa"
              description="Expande seu repertório de técnicas de contação de histórias"
            />
            <BenefitCard 
              icon={<Zap className="text-sho-color" size={24} />}
              title="Narrativas Sutis"
              description="Crie histórias através de nuances e revelação"
            />
            <BenefitCard 
              icon={<CheckCircle2 className="text-ketsu-color" size={24} />}
              title="Aplicação Universal"
              description="Use em literatura, cinema, quadrinhos e jogos"
            />
          </div>
        </Section>

        {/* Os Quatro Atos */}
        <Section
          id="quatro-atos"
          title="Os Quatro Atos"
          expanded={expandedSection === "quatro-atos"}
          onToggle={() => toggleSection("quatro-atos")}
        >
          <img 
            src="/images/kishotenketsu-diagram.png" 
            alt="Diagrama dos Quatro Atos" 
            className="w-full rounded-lg shadow-md mb-8"
          />

          <div className="space-y-8">
            <ActCard
              color="ki-color"
              title="Ki (起) - Introdução"
              description="O primeiro ato estabelece o mundo da história. Aqui, o narrador apresenta o cenário, os personagens e a situação inicial."
              details={[
                "Apresentação do cenário e da atmosfera",
                "Introdução dos personagens e suas circunstâncias",
                "Estabelecimento do tom e do mundo narrativo",
                "Sem necessidade de um conflito central"
              ]}
            />

            <ActCard
              color="sho-color"
              title="Sho (承) - Desenvolvimento"
              description="O segundo ato expande e aprofunda o que foi estabelecido no Ki. A história se desenvolve naturalmente, explorando os personagens e suas relações."
              details={[
                "Exploração mais profunda dos personagens",
                "Desenvolvimento das relações interpessoais",
                "Expansão do mundo narrativo",
                "Criação de atmosfera e contexto"
              ]}
            />

            <ActCard
              color="ten-color"
              title="Ten (転) - Virada/Surpresa"
              description="O terceiro ato é o ponto crucial. Aqui ocorre uma reviravolta, uma mudança de perspectiva ou um elemento inesperado que altera o curso da narrativa."
              details={[
                "Elemento de surpresa ou reviravolta",
                "Mudança de perspectiva ou direção narrativa",
                "Recontextualização dos elementos anteriores",
                "Pode ser sutil ou dramático"
              ]}
            />

            <ActCard
              color="ketsu-color"
              title="Ketsu (結) - Conclusão"
              description="O quarto ato reconcilia todos os elementos da narrativa, trazendo coerência e significado ao todo."
              details={[
                "Reconciliação dos elementos narrativos",
                "Resolução que conecta todos os atos anteriores",
                "Conclusão que traz significado e harmonia",
                "Pode ser reflexiva, ambígua ou aberta"
              ]}
            />
          </div>
        </Section>

        {/* Diferença com Estrutura Ocidental */}
        <Section
          id="diferenca-ocidental"
          title="vs Estrutura Ocidental"
          expanded={expandedSection === "diferenca-ocidental"}
          onToggle={() => toggleSection("diferenca-ocidental")}
        >
          <img 
            src="/images/comparison-chart.png" 
            alt="Comparação com Estrutura Ocidental" 
            className="w-full rounded-lg shadow-md mb-8"
          />
          <p className="text-foreground mb-6">
            A estrutura de três atos ocidental (Setup, Confrontation, Resolution) difere fundamentalmente do Kishotenketsu em vários aspectos:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left p-3 font-semibold text-foreground">Aspecto</th>
                  <th className="text-left p-3 font-semibold text-ki-color">Kishotenketsu</th>
                  <th className="text-left p-3 font-semibold text-sho-color">Estrutura Ocidental</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-secondary">
                  <td className="p-3 font-semibold">Número de Atos</td>
                  <td className="p-3">Quatro (Ki, Sho, Ten, Ketsu)</td>
                  <td className="p-3">Três (Setup, Confrontation, Resolution)</td>
                </tr>
                <tr className="border-b border-border hover:bg-secondary">
                  <td className="p-3 font-semibold">Foco Principal</td>
                  <td className="p-3">Harmonia, surpresa e conexão</td>
                  <td className="p-3">Conflito e resolução</td>
                </tr>
                <tr className="border-b border-border hover:bg-secondary">
                  <td className="p-3 font-semibold">Motor da Narrativa</td>
                  <td className="p-3">Surpresa e contraste</td>
                  <td className="p-3">Conflito externo</td>
                </tr>
                <tr className="border-b border-border hover:bg-secondary">
                  <td className="p-3 font-semibold">Desenvolvimento</td>
                  <td className="p-3">Gradual e contemplativo</td>
                  <td className="p-3">Rápido e ascendente</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        {/* Exemplos Práticos */}
        <Section
          id="exemplos"
          title="Exemplos Práticos"
          expanded={expandedSection === "exemplos"}
          onToggle={() => toggleSection("exemplos")}
        >
          <img 
            src="/images/manga-example.png" 
            alt="Exemplo de Yonkoma" 
            className="w-full rounded-lg shadow-md mb-8"
          />

          <div className="space-y-8">
            <ExampleCard
              title="A Viagem de Chihiro (Hayao Miyazaki)"
              acts={{
                ki: "Chihiro e seus pais entram em um mundo espiritual após atravessarem um túnel misterioso.",
                sho: "Chihiro trabalha em um banho público para espíritos, conhece Haku e Yubaba.",
                ten: "Chihiro descobre que seus pais foram transformados em porcos.",
                ketsu: "Ela consegue recuperar a identidade de seus pais e sair do mundo espiritual."
              }}
            />

            <ExampleCard
              title="Parasita (Bong Joon-ho)"
              acts={{
                ki: "A família Kim se infiltra na casa da rica família Park, fingindo ser empregados.",
                sho: "A relação entre as duas famílias se desenvolve, explorando diferenças sociais.",
                ten: "Moon-gwang, a antiga empregada, aparece no porão, revelando a complexidade da situação.",
                ketsu: "O filme culmina em violência e morte, uma reconciliação brutal da realidade social."
              }}
            />
          </div>
        </Section>

        {/* Aplicações Modernas */}
        <Section
          id="aplicacoes"
          title="Aplicações Modernas"
          expanded={expandedSection === "aplicacoes"}
          onToggle={() => toggleSection("aplicacoes")}
        >
          <p className="text-foreground mb-6">
            O Kishotenketsu é cada vez mais utilizado em diversas formas de mídia contemporânea:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ApplicationCard
              title="Mangás e Quadrinhos"
              description="Especialmente no formato yonkoma (4 painéis), onde cada painel corresponde a um ato da estrutura."
              examples={["Yonkoma de humor", "Mangás narrativos", "Webcomics"]}
            />
            <ApplicationCard
              title="Animes"
              description="Muitos animes utilizam a estrutura em episódios individuais ou arcos narrativos."
              examples={["Studio Ghibli", "Slice-of-life", "Dramas psicológicos"]}
            />
            <ApplicationCard
              title="Literatura"
              description="Autores contemporâneos utilizam Kishotenketsu para criar narrativas sofisticadas."
              examples={["Convenience Store Woman", "Station Eleven", "The Hole"]}
            />
            <ApplicationCard
              title="Conteúdo Digital"
              description="Vídeos virais, anúncios e conteúdo educacional utilizam a estrutura de surpresa."
              examples={["Vídeos de redes sociais", "Anúncios", "Educação online"]}
            />
          </div>
        </Section>

        {/* Exercícios */}
        <Section
          id="exercicios"
          title="Exercícios Práticos"
          expanded={expandedSection === "exercicios"}
          onToggle={() => toggleSection("exercicios")}
        >
          <p className="text-foreground mb-6">
            Pratique a estrutura Kishotenketsu com estes exercícios:
          </p>

          <div className="space-y-6">
            <ExerciseCard
              number={1}
              title="Análise de Estrutura"
              description="Escolha uma história que você conhece bem e analise-a através da lente do Kishotenketsu."
              tasks={[
                "Identifique o Ki: Como o mundo e os personagens são apresentados?",
                "Identifique o Sho: Como a história se desenvolve?",
                "Identifique o Ten: Qual é o elemento de surpresa?",
                "Identifique o Ketsu: Como a história conclui?"
              ]}
            />

            <ExerciseCard
              number={2}
              title="Criação de Histórias Curtas"
              description="Escreva uma história de 3-5 parágrafos seguindo a estrutura Kishotenketsu."
              tasks={[
                "Ki: Descreva uma situação cotidiana e apresente um personagem",
                "Sho: Desenvolva a situação, adicione detalhes",
                "Ten: Introduza um elemento de surpresa",
                "Ketsu: Conclua harmonizando todos os elementos"
              ]}
            />

            <ExerciseCard
              number={3}
              title="Adaptação de Estrutura"
              description="Pegue uma história que segue a estrutura ocidental e reescreva-a em Kishotenketsu."
              tasks={[
                "Mantenha os elementos principais",
                "Remova o foco no conflito central",
                "Adicione mais detalhes descritivos",
                "Crie uma surpresa que recontextualiza a narrativa"
              ]}
            />
          </div>
        </Section>

        {/* Story Creator Section */}
        {showStoryCreator && (
          <section id="criador" className="mt-12 pt-8 border-t border-border">
            <h2 className="text-3xl font-bold text-foreground mb-2">Criador de Histórias Kishotenketsu</h2>
            <p className="text-foreground text-muted-foreground mb-8">
              Use nossa ferramenta interativa para criar sua própria história seguindo a estrutura Kishotenketsu. Preencha os quatro atos e veja sua história ganhar vida em tempo real.
            </p>
            <StoryCreator />
          </section>
        )}

        {/* CTA Section */}
        <section className="mt-16 pt-12 border-t border-border">
          <h2 className="text-3xl font-bold text-foreground mb-6">Aprofunde Seu Conhecimento</h2>
          <p className="text-foreground mb-8">
            Baixe nossos PDFs educativos completos com análises detalhadas, exemplos práticos e exercícios para dominar a estrutura Kishotenketsu.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a 
              href="/Kishotenketsu_Aula_Completa.pdf" 
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-ki-color text-white rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              <Download size={20} />
              Aula Completa (PDF)
            </a>
            <a 
              href="/Kishotenketsu_Exemplos_Analises.pdf" 
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-sho-color text-white rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              <Download size={20} />
              Exemplos & Análises (PDF)
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

/* Components */

function NavLink({ href, label, active, onClick }: { href: string; label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
        active 
          ? "bg-ki-color text-white" 
          : "text-foreground hover:bg-secondary"
      }`}
    >
      {label}
    </button>
  );
}

function Section({ id, title, expanded, onToggle, children }: { id: string; title: string; expanded: boolean; onToggle: () => void; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-12">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 bg-secondary rounded-lg hover:bg-border transition-colors mb-4"
      >
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        <ChevronDown 
          size={24} 
          className={`text-foreground transition-transform ${expanded ? "rotate-180" : ""}`}
        />
      </button>
      {expanded && (
        <div className="animate-in fade-in slide-in-from-top-2 duration-300">
          {children}
        </div>
      )}
    </section>
  );
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="p-6 border border-border hover:shadow-md transition-shadow">
      <div className="mb-3">{icon}</div>
      <h3 className="font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Card>
  );
}

function ActCard({ color, title, description, details }: { color: string; title: string; description: string; details: string[] }) {
  return (
    <Card className="border-l-4 border-l-[var(--ki-color)] p-6">
      <style>{`
        .act-card-${color} {
          border-left-color: var(--${color});
        }
      `}</style>
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-foreground mb-4">{description}</p>
      <ul className="space-y-2">
        {details.map((detail, i) => (
          <li key={i} className="flex gap-2 text-sm text-muted-foreground">
            <span className="text-ki-color font-bold">•</span>
            {detail}
          </li>
        ))}
      </ul>
    </Card>
  );
}

function ExampleCard({ title, acts }: { title: string; acts: { ki: string; sho: string; ten: string; ketsu: string } }) {
  return (
    <Card className="p-6 border border-border">
      <h3 className="text-xl font-bold text-foreground mb-4">{title}</h3>
      <div className="space-y-3">
        <div className="pl-4 border-l-4 border-l-[#2D7A4A]">
          <p className="text-sm font-semibold text-ki-color">Ki (Introdução)</p>
          <p className="text-sm text-foreground">{acts.ki}</p>
        </div>
        <div className="pl-4 border-l-4 border-l-[#4A90E2]">
          <p className="text-sm font-semibold text-sho-color">Sho (Desenvolvimento)</p>
          <p className="text-sm text-foreground">{acts.sho}</p>
        </div>
        <div className="pl-4 border-l-4 border-l-[#D4AF37]">
          <p className="text-sm font-semibold text-ten-color">Ten (Virada)</p>
          <p className="text-sm text-foreground">{acts.ten}</p>
        </div>
        <div className="pl-4 border-l-4 border-l-[#6B4C9A]">
          <p className="text-sm font-semibold text-ketsu-color">Ketsu (Conclusão)</p>
          <p className="text-sm text-foreground">{acts.ketsu}</p>
        </div>
      </div>
    </Card>
  );
}

function ApplicationCard({ title, description, examples }: { title: string; description: string; examples: string[] }) {
  return (
    <Card className="p-6 border border-border hover:shadow-md transition-shadow">
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <ul className="space-y-1">
        {examples.map((example, i) => (
          <li key={i} className="text-sm text-foreground flex gap-2">
            <span className="text-ki-color">✓</span>
            {example}
          </li>
        ))}
      </ul>
    </Card>
  );
}

function ExerciseCard({ number, title, description, tasks }: { number: number; title: string; description: string; tasks: string[] }) {
  return (
    <Card className="p-6 border border-border">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-ki-color text-white flex items-center justify-center font-bold">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <ul className="space-y-2">
            {tasks.map((task, i) => (
              <li key={i} className="text-sm text-foreground flex gap-2">
                <span className="text-sho-color font-bold">→</span>
                {task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
