import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Home } from "lucide-react";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-4 max-w-md">
        <h1 className="text-8xl font-bold text-ki-color mb-4">404</h1>
        <h2 className="text-3xl font-bold text-foreground mb-4">Página não encontrada</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Desculpe, a página que você está procurando não existe. Volte para a página inicial para continuar explorando a estrutura Kishotenketsu.
        </p>
        <Button 
          onClick={() => setLocation("/")}
          className="bg-ki-color text-white hover:opacity-90 inline-flex items-center gap-2"
        >
          <Home size={20} />
          Voltar para Início
        </Button>
      </div>
    </div>
  );
}
