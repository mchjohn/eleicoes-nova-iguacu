import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ListCandidates } from "@/components/ListCandidates";

import { Button } from "@/components/ui/button";
import { useGetCouncilorCandidates, useGetMayoralCandidates } from "@/queries/useGetCandidates";

export function SeeVote() {
  const { data: mayoralCandidates } = useGetMayoralCandidates();
  const { data: councilorCandidates } = useGetCouncilorCandidates();

  return (
    <Tabs defaultValue="prefeito">
      <TabsList className="grid w-full grid-cols-2 ">
        <TabsTrigger value="prefeito">Prefeito</TabsTrigger>
        <TabsTrigger value="vereador">Vereador</TabsTrigger>
      </TabsList>

      <TabsContent value="prefeito">
        <p className="font-medium mt-4 text-blue-900 mb-4">1500 pessoas já votaram.</p>

        <ListCandidates candidates={mayoralCandidates} />

        <div className="flex gap-4 mb-4 mt-10 justify-center">
          <Button variant="secondary">Não vou votar</Button>
          <Button variant="secondary">Vou votar nulo</Button>
        </div>
      </TabsContent>

      <TabsContent value="vereador">
        <p className="font-medium mt-4 text-blue-900 mb-4">2500 pessoas já votaram.</p>

        <ListCandidates candidates={councilorCandidates} />

        <div className="flex gap-4 mb-4 mt-10 justify-center">
          <Button variant="secondary">Não vou votar</Button>
          <Button variant="secondary">Vou votar nulo</Button>
        </div>
      </TabsContent>
    </Tabs>
  )
}
