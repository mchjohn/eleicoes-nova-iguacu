import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ListCandidates } from "./components/ListCandidates";

import { useGetCouncilorCandidates, useGetMayoralCandidates } from "./queries/useGetCandidates";

export function App() {
  const { data: mayoralCandidates } = useGetMayoralCandidates();
  const { data: councilorCandidates } = useGetCouncilorCandidates();

  return (
    <main className="flex min-h-screen flex-col p-5 gap-6 text-stone-900">
      <h2 className={`text-xl text-orange-500`}>Nova Iguaçu Eleições 2024</h2>

      <Tabs defaultValue="prefeito">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="prefeito">Prefeito</TabsTrigger>
          <TabsTrigger value="vereador">Vereador</TabsTrigger>
        </TabsList>

        <TabsContent value="prefeito">
          <p className="font-medium mb-6 mt-4">1500 pessoas já votaram.</p>

          <ListCandidates candidates={mayoralCandidates} />
        </TabsContent>

        <TabsContent value="vereador">
          <p className="font-medium mb-6 mt-4">2500 pessoas já votaram.</p>
          <ListCandidates candidates={councilorCandidates}  />
        </TabsContent>
      </Tabs>
    </main>
  )
}
