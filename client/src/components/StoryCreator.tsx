import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Copy, RotateCcw, Eye, EyeOff, Lightbulb, FileText } from "lucide-react";
import StoryExamples, { type StoryExample } from "./StoryExamples";
import { generateStoryPDF } from "@/lib/pdfGenerator";

interface Story {
  title: string;
  ki: string;
  sho: string;
  ten: string;
  ketsu: string;
}

export default function StoryCreator() {
  const [story, setStory] = useState<Story>({
    title: "",
    ki: "",
    sho: "",
    ten: "",
    ketsu: "",
  });

  const [showPreview, setShowPreview] = useState(true);
  const [copied, setCopied] = useState(false);
  const [showExamples, setShowExamples] = useState(false);

  const handleInputChange = (field: keyof Story, value: string) => {
    setStory((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleReset = () => {
    setStory({
      title: "",
      ki: "",
      sho: "",
      ten: "",
      ketsu: "",
    });
  };

  const handleCopy = () => {
    const storyText = formatStoryText();
    navigator.clipboard.writeText(storyText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadTxt = () => {
    const storyText = formatStoryText();
    const element = document.createElement("a");
    const file = new Blob([storyText], { type: "text/plain;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = `${story.title || "historia-kishotenketsu"}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleDownloadPDF = () => {
    generateStoryPDF(story);
  };

  const handleLoadExample = (example: StoryExample) => {
    setStory(example);
    setShowExamples(false);
  };

  const formatStoryText = () => {
    return `HISTÓRIA KISHOTENKETSU
${story.title ? `Título: ${story.title}` : ""}

KI (Introdução)
${story.ki || "[Preencha a introdução]"}

SHO (Desenvolvimento)
${story.sho || "[Preencha o desenvolvimento]"}

TEN (Virada/Surpresa)
${story.ten || "[Preencha a virada]"}

KETSU (Conclusão)
${story.ketsu || "[Preencha a conclusão]"}`;
  };

  const isComplete = story.title && story.ki && story.sho && story.ten && story.ketsu;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground mb-4">Crie Sua História</h3>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Título da História
            </label>
            <input
              type="text"
              value={story.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              placeholder="Ex: A Jornada do Pescador"
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ki-color bg-white text-foreground"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-ki-color mb-2">
              Ki (Introdução)
            </label>
            <p className="text-xs text-muted-foreground mb-2">
              Apresente o cenário, personagens e situação inicial
            </p>
            <textarea
              value={story.ki}
              onChange={(e) => handleInputChange("ki", e.target.value)}
              placeholder="Descreva a introdução da sua história..."
              rows={4}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ki-color bg-white text-foreground resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-sho-color mb-2">
              Sho (Desenvolvimento)
            </label>
            <p className="text-xs text-muted-foreground mb-2">
              Expanda a história, explore personagens e relacionamentos
            </p>
            <textarea
              value={story.sho}
              onChange={(e) => handleInputChange("sho", e.target.value)}
              placeholder="Descreva o desenvolvimento da sua história..."
              rows={4}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-sho-color bg-white text-foreground resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-ten-color mb-2">
              Ten (Virada/Surpresa)
            </label>
            <p className="text-xs text-muted-foreground mb-2">
              Introduza um elemento inesperado que muda a narrativa
            </p>
            <textarea
              value={story.ten}
              onChange={(e) => handleInputChange("ten", e.target.value)}
              placeholder="Descreva a reviravolta da sua história..."
              rows={4}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ten-color bg-white text-foreground resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-ketsu-color mb-2">
              Ketsu (Conclusão)
            </label>
            <p className="text-xs text-muted-foreground mb-2">
              Reconcilie os elementos e conclua a história
            </p>
            <textarea
              value={story.ketsu}
              onChange={(e) => handleInputChange("ketsu", e.target.value)}
              placeholder="Descreva a conclusão da sua história..."
              rows={4}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ketsu-color bg-white text-foreground resize-none"
            />
          </div>

          <div className="space-y-2">
            <div className="flex gap-2 pt-4">
              <Button
                onClick={handleReset}
                variant="outline"
                className="flex-1 flex items-center justify-center gap-2"
              >
                <RotateCcw size={16} />
                Limpar
              </Button>
              <Button
                onClick={handleCopy}
                variant="outline"
                className="flex-1 flex items-center justify-center gap-2"
                disabled={!isComplete}
              >
                <Copy size={16} />
                {copied ? "Copiado!" : "Copiar"}
              </Button>
            </div>

            <div className="flex gap-2">
              <Button
                onClick={handleDownloadTxt}
                variant="outline"
                className="flex-1 flex items-center justify-center gap-2 text-sho-color"
                disabled={!isComplete}
              >
                <Download size={16} />
                TXT
              </Button>
              <Button
                onClick={handleDownloadPDF}
                className="flex-1 bg-ki-color text-white hover:opacity-90 flex items-center justify-center gap-2"
                disabled={!isComplete}
              >
                <FileText size={16} />
                PDF
              </Button>
            </div>
            
            <Button
              onClick={() => setShowExamples(!showExamples)}
              variant="outline"
              className="w-full flex items-center justify-center gap-2 text-sho-color"
            >
              <Lightbulb size={16} />
              {showExamples ? "Ocultar Exemplos" : "Ver Exemplos"}
            </Button>
          </div>

          {showExamples && (
            <div className="mt-6 pt-6 border-t border-border">
              <StoryExamples onLoadExample={handleLoadExample} />
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-foreground">Visualização</h3>
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
              title={showPreview ? "Ocultar visualização" : "Mostrar visualização"}
            >
              {showPreview ? (
                <Eye size={20} className="text-foreground" />
              ) : (
                <EyeOff size={20} className="text-muted-foreground" />
              )}
            </button>
          </div>

          {showPreview && (
            <div className="space-y-4 max-h-[800px] overflow-y-auto">
              {story.title && (
                <Card className="p-4 bg-secondary border-0">
                  <h2 className="text-2xl font-bold text-foreground">{story.title}</h2>
                </Card>
              )}

              {story.ki && (
                <Card className="p-4 border-l-4 border-l-[#2D7A4A] bg-white">
                  <h4 className="text-sm font-bold text-ki-color mb-2">KI (Introdução)</h4>
                  <p className="text-sm text-foreground whitespace-pre-wrap">{story.ki}</p>
                </Card>
              )}

              {story.sho && (
                <Card className="p-4 border-l-4 border-l-[#4A90E2] bg-white">
                  <h4 className="text-sm font-bold text-sho-color mb-2">SHO (Desenvolvimento)</h4>
                  <p className="text-sm text-foreground whitespace-pre-wrap">{story.sho}</p>
                </Card>
              )}

              {story.ten && (
                <Card className="p-4 border-l-4 border-l-[#D4AF37] bg-white">
                  <h4 className="text-sm font-bold text-ten-color mb-2">TEN (Virada)</h4>
                  <p className="text-sm text-foreground whitespace-pre-wrap">{story.ten}</p>
                </Card>
              )}

              {story.ketsu && (
                <Card className="p-4 border-l-4 border-l-[#6B4C9A] bg-white">
                  <h4 className="text-sm font-bold text-ketsu-color mb-2">KETSU (Conclusão)</h4>
                  <p className="text-sm text-foreground whitespace-pre-wrap">{story.ketsu}</p>
                </Card>
              )}

              {!story.title && !story.ki && !story.sho && !story.ten && !story.ketsu && (
                <Card className="p-8 text-center bg-secondary border-0">
                  <p className="text-muted-foreground">
                    Comece a preencher o formulário para ver a visualização da sua história aqui
                  </p>
                </Card>
              )}
            </div>
          )}
        </div>
      </div>

      <Card className="p-6 bg-secondary border-0">
        <h4 className="font-bold text-foreground mb-3">Dicas para Criar uma Boa História Kishotenketsu</h4>
        <ul className="space-y-2 text-sm text-foreground">
          <li className="flex gap-2">
            <span className="text-ki-color font-bold">•</span>
            <span><strong>Ki:</strong> Crie uma atmosfera clara. Quem são seus personagens? Onde estão?</span>
          </li>
          <li className="flex gap-2">
            <span className="text-sho-color font-bold">•</span>
            <span><strong>Sho:</strong> Desenvolva naturalmente. Adicione detalhes que enriqueçam o mundo.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-ten-color font-bold">•</span>
            <span><strong>Ten:</strong> Surpreenda! Introduza algo inesperado que recontextualiza tudo.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-ketsu-color font-bold">•</span>
            <span><strong>Ketsu:</strong> Harmonize. Mostre como a surpresa se conecta com o início.</span>
          </li>
        </ul>
      </Card>
    </div>
  );
}
