import { SeeVote } from "@/components/SeeVote";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Vote } from "@/components/Vote";

export function App() {
  return (
    <main className="flex min-h-screen flex-col p-5 gap-6 text-stone-900">
      <h2 className={`text-xl text-orange-500`}>Pesquisa eleitoral Nova Iguaçu 2024</h2>

      <Tabs  defaultValue="vote">
        <TabsList className="grid w-full grid-cols-2 ">
          <TabsTrigger value="vote">Votar</TabsTrigger>
          <TabsTrigger value="see-vote">Acompanhar Votos</TabsTrigger>
        </TabsList>

        <TabsContent value="vote">
          <Vote />
        </TabsContent>

        <TabsContent value="see-vote">
          <SeeVote />
        </TabsContent>
      </Tabs>
    </main>
  )
}
