import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ListCandidatesMin } from "@/components/ListCandidatesMin";

import { AmountVote } from "@/components/AmountVotes";
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
        <AmountVote candidates={mayoralCandidates} />

        <ListCandidatesMin candidates={mayoralCandidates} />

        <div className="flex gap-4 mb-4 mt-10 justify-center">
          <Button variant="secondary">Não vou votar</Button>
          <Button variant="secondary">Vou votar nulo</Button>
        </div>
      </TabsContent>

      <TabsContent value="vereador">
        <AmountVote candidates={councilorCandidates} />

        <ListCandidatesMin candidates={councilorCandidates} />

        <div className="flex gap-4 mb-4 mt-10 justify-center">
          <Button variant="secondary">Não vou votar</Button>
          <Button variant="secondary">Vou votar nulo</Button>
        </div>
      </TabsContent>
    </Tabs>
  )
}
