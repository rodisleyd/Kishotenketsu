import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface StoryExample {
  title: string;
  ki: string;
  sho: string;
  ten: string;
  ketsu: string;
}

const examples: StoryExample[] = [
  {
    title: "O Café da Manhã Inesperado",
    ki: "Maria acorda em seu apartamento pequeno em São Paulo. Como todos os dias, ela prepara um café simples e senta à mesa para trabalhar em seu laptop. Fora, a cidade acordava com o barulho dos carros e buzinas.",
    sho: "Ela trabalha como tradutora freelancer. Naquele dia, recebeu um projeto interessante: traduzir um livro antigo de poesia japonesa. Enquanto lia os poemas, ficava cada vez mais imersa nas palavras, esquecendo do tempo passando.",
    ten: "Ao meio-dia, ela encontra uma anotação manuscrita entre as páginas do livro: uma carta de amor em português, datada de 1985, de alguém que havia lido o mesmo livro décadas atrás.",
    ketsu: "Maria passa a tarde pesquisando sobre o autor da carta. Descobre que era um professor de literatura que vivia no mesmo bairro. Ela decide procurá-lo, e assim começa uma amizade que a transforma, trazendo novas perspectivas sobre a vida e a literatura."
  },
  {
    title: "A Última Aula",
    ki: "Professor João ensina história há 35 anos na mesma escola. Neste dia, é sua última aula antes da aposentadoria. Ele entra na sala de aula com seu jeito habitual, carregando uma pilha de livros antigos.",
    sho: "Durante a aula, ele compartilha histórias de seus anos como professor, fala sobre seus alunos favoritos, sobre como a educação mudou ao longo dos anos. Os alunos ouvem atentamente, alguns com lágrimas nos olhos.",
    ten: "Uma aluna levanta a mão e diz: 'Professor, você não sabe, mas você mudou minha vida. Eu era um aluno problema, e você foi o único que acreditou em mim. Agora sou historiador porque você me inspirou.'",
    ketsu: "João percebe que sua vida de professor foi muito mais significativa do que ele jamais havia imaginado. Ele se aposenta não com tristeza, mas com a certeza de que deixou um legado duradouro. Seus alunos o abraçam, e ele sabe que sempre será parte de suas histórias."
  },
  {
    title: "A Pintura Esquecida",
    ki: "Ana é uma restauradora de arte que trabalha em um museu pequeno. Um dia, ela recebe uma pintura antiga para restaurar. É uma tela simples, aparentemente sem importância, de um paisagem rural.",
    sho: "Enquanto trabalha na restauração, Ana fica fascinada pelos detalhes da pintura. Ela pesquisa a história do artista, encontra documentos antigos, descobre que era um pintor esquecido do século XIX que nunca alcançou fama.",
    ten: "Durante a restauração, Ana descobre uma assinatura escondida no canto da tela, junto com uma data e um nome feminino. Ela percebe que a pintura era um presente de amor, e que o artista havia deixado uma mensagem cifrada na obra.",
    ketsu: "Ana consegue rastrear os descendentes do artista e da mulher retratada. Organiza uma exposição especial sobre o pintor esquecido, trazendo sua história de volta à vida. A pintura se torna uma das mais visitadas do museu, e Ana realiza seu sonho de dar voz aos artistas silenciados pela história."
  }
];

interface StoryExamplesProps {
  onLoadExample?: (example: StoryExample) => void;
}

export default function StoryExamples({ onLoadExample }: StoryExamplesProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-foreground">Exemplos de Histórias</h3>
      <p className="text-sm text-muted-foreground">
        Clique em "Usar Exemplo" para carregar uma história no formulário e adaptá-la
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {examples.map((example, index) => (
          <Card key={index} className="p-4 border border-border hover:shadow-md transition-shadow">
            <h4 className="font-bold text-foreground mb-2">{example.title}</h4>
            <p className="text-xs text-muted-foreground mb-4 line-clamp-2">{example.ki}</p>
            {onLoadExample && (
              <Button
                onClick={() => onLoadExample(example)}
                variant="outline"
                size="sm"
                className="w-full text-ki-color hover:bg-secondary"
              >
                Usar Exemplo
              </Button>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}

export { type StoryExample };
