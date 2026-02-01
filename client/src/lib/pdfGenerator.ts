import jsPDF from "jspdf";

interface Story {
  title: string;
  ki: string;
  sho: string;
  ten: string;
  ketsu: string;
}

interface ActColor {
  r: number;
  g: number;
  b: number;
}

const actColors: Record<string, ActColor> = {
  ki: { r: 45, g: 122, b: 74 },      // Verde
  sho: { r: 74, g: 144, b: 226 },    // Azul
  ten: { r: 212, g: 175, b: 55 },    // Ouro
  ketsu: { r: 107, g: 76, b: 154 },  // Roxo
};

export function generateStoryPDF(story: Story): void {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - 2 * margin;
  let yPosition = margin;

  // Função auxiliar para adicionar texto com quebra de linha
  const addWrappedText = (
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    fontSize: number,
    fontStyle: "normal" | "bold" = "normal"
  ): number => {
    doc.setFontSize(fontSize);
    doc.setFont("helvetica", fontStyle);
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, x, y);
    return y + lines.length * (fontSize / 2.5);
  };

  // Função para adicionar uma seção
  const addSection = (
    title: string,
    content: string,
    color: ActColor,
    actLabel: string
  ): void => {
    // Verificar se precisa de nova página
    if (yPosition > pageHeight - 50) {
      doc.addPage();
      yPosition = margin;
    }

    // Cabeçalho colorido
    doc.setFillColor(color.r, color.g, color.b);
    doc.rect(margin, yPosition, contentWidth, 12, "F");

    // Título da seção
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(`${title} (${actLabel})`, margin + 5, yPosition + 8);

    yPosition += 15;

    // Conteúdo
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    const lines = doc.splitTextToSize(content, contentWidth - 4);
    doc.text(lines, margin + 2, yPosition);
    yPosition += lines.length * 5 + 8;
  };

  // Cabeçalho do documento
  doc.setFillColor(45, 45, 45);
  doc.rect(0, 0, pageWidth, 30, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text("Kishotenketsu", margin, 15);

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("A Arte da Narrativa sem Conflito", margin, 23);

  yPosition = 40;

  // Título da história
  if (story.title) {
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    const titleLines = doc.splitTextToSize(story.title, contentWidth);
    doc.text(titleLines, margin, yPosition);
    yPosition += titleLines.length * 7 + 10;
  }

  // Adicionar data
  const today = new Date();
  const dateStr = today.toLocaleDateString("pt-BR");
  doc.setFontSize(9);
  doc.setFont("helvetica", "italic");
  doc.setTextColor(100, 100, 100);
  doc.text(`Criado em: ${dateStr}`, margin, yPosition);
  yPosition += 8;

  // Linha separadora
  doc.setDrawColor(200, 200, 200);
  doc.line(margin, yPosition, pageWidth - margin, yPosition);
  yPosition += 8;

  // Adicionar as 4 seções
  if (story.ki) {
    addSection("KI", story.ki, actColors.ki, "Introdução");
  }

  if (story.sho) {
    addSection("SHO", story.sho, actColors.sho, "Desenvolvimento");
  }

  if (story.ten) {
    addSection("TEN", story.ten, actColors.ten, "Virada");
  }

  if (story.ketsu) {
    addSection("KETSU", story.ketsu, actColors.ketsu, "Conclusão");
  }

  // Rodapé
  yPosition = pageHeight - 15;
  doc.setFontSize(8);
  doc.setFont("helvetica", "italic");
  doc.setTextColor(150, 150, 150);
  doc.text(
    "Gerado pelo Criador de Histórias Kishotenketsu",
    pageWidth / 2,
    yPosition,
    { align: "center" }
  );

  // Salvar o PDF
  const filename = story.title
    ? `${story.title.replace(/[^a-z0-9]/gi, "_").toLowerCase()}.pdf`
    : "historia-kishotenketsu.pdf";

  doc.save(filename);
}
