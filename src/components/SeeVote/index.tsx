import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useGetCouncilorCandidates, useGetMayoralCandidates } from "@/queries/useGetCandidates";

import { AmountVote } from "@/components/AmountVotes";
import { ListCandidatesMin } from "@/components/ListCandidatesMin";
import { MoreDetails } from './MoreDetails';

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
        <MoreDetails>
          <AmountVote candidates={mayoralCandidates} />
        </MoreDetails>

        <ListCandidatesMin candidates={mayoralCandidates} />
      </TabsContent>

      <TabsContent value="vereador">
        <MoreDetails>
          <AmountVote candidates={mayoralCandidates} />
        </MoreDetails>

        <ListCandidatesMin candidates={councilorCandidates} />
      </TabsContent>
    </Tabs>
  )
}
