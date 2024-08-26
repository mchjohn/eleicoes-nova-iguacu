import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useAuth } from "@/contexts/AuthContext";
import { useUpdateMayorVote } from "@/mutations/useUpdateMayorVote";
import { useGetCouncilorCandidates, useGetMayoralCandidates } from "@/queries/useGetCandidates";

import { AmountVote } from "@/components/AmountVotes";
import { ListCandidates } from "@/components/ListCandidates";
import { Button } from "@/components/ui/button";
import { updateCurrentVote } from "@/services/supabase/mutates/users/updateUser";

export function Vote() {
  const { user } = useAuth();
  const { mutateAsync, isPending } = useUpdateMayorVote();
  const { data: councilorCandidates } = useGetCouncilorCandidates();
  const { data: mayors, isLoading: isLoadingMayors } = useGetMayoralCandidates();

  const handleVote = (newVote: 'vote_no_vote' | 'vote_null') => {
    mutateAsync({ currentVote: user?.current_vote, newVote })

    if (user?.id) {
      updateCurrentVote(newVote, user.id);
    }
  }

  return (
    <Tabs defaultValue="prefeito">
      <TabsList className="grid w-full grid-cols-2 ">
        <TabsTrigger value="prefeito">Prefeito</TabsTrigger>
        <TabsTrigger value="vereador">Vereador</TabsTrigger>
      </TabsList>

      <TabsContent value="prefeito">
        {mayors && mayors.length > 0 ? (
          <>
            <AmountVote />

            <ListCandidates candidates={mayors} isLoading={isLoadingMayors} />

            <div className="flex gap-4 mb-4 mt-10 justify-center">
              <Button
                variant="secondary"
                disabled={isPending}
                onClick={() => handleVote('vote_no_vote')}
              >
                Não vou votar
              </Button>
              <Button
                variant="secondary"
                disabled={isPending}
                onClick={() => handleVote('vote_null')}
              >
                Vou votar nulo
              </Button>
            </div>
          </>
        ) : (
          <p className="text-zinc-600 text-lg mt-72 text-center">Nenhum candidato encontrado</p>
        )}
      </TabsContent>

      <TabsContent value="vereador">
        <AmountVote />

        <ListCandidates candidates={councilorCandidates} />

        <div className="flex gap-4 mb-4 mt-10 justify-center">
          <Button variant="secondary">Não vou votar</Button>
          <Button variant="secondary">Vou votar nulo</Button>
        </div>
      </TabsContent>
    </Tabs>
  )
}
