import { CardPrefeito } from "@/components/CardPrefeito";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function App() {
  return (
    <main className="flex min-h-screen flex-col p-5 gap-6">
      <h2 className={`text-6xl text-orange-500`}>Nova Iguaçu Eleições 2024</h2>

      <Tabs defaultValue="prefeito">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="prefeito">Prefeito</TabsTrigger>
          <TabsTrigger value="vereador">Vereador</TabsTrigger>
        </TabsList>

        <TabsContent value="prefeito">
          <p className="font-medium mb-6 mt-4">1500 pessoas já votaram.</p>

          <CardPrefeito />
        </TabsContent>

        <TabsContent value="vereador">
          <p className="font-medium">2500 pessoas já votaram.</p>
          Vereadores
        </TabsContent>
      </Tabs>
    </main>
  )
}
