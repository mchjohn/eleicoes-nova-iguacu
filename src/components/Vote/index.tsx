import { BiLoaderCircle } from "react-icons/bi";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useAuth } from "@/contexts/AuthContext";
import { useUpdateMayorVote } from "@/mutations/useUpdateMayorVote";
import { useGetCouncilorCandidates, useGetMayoralCandidates } from "@/queries/useGetCandidates";
import { updateUser } from "@/services/supabase/users/update";

import { AmountVote } from "@/components/AmountVotes";
import { ListCandidates } from "@/components/ListCandidates";
import { Button } from "@/components/ui/button";
import { AuthForm } from "../AuthForm";

export function Vote() {
  const { user } = useAuth();
  const { mutateAsync, isPending } = useUpdateMayorVote();
  const { data: councilorCandidates } = useGetCouncilorCandidates();
  const { data: mayors, isLoading: isLoadingMayors } = useGetMayoralCandidates();

  const handleVote = async (newVote: 'vote_no_vote' | 'vote_null') => {
    await mutateAsync({ currentVote: user?.current_vote, newVote })

    await updateUser.updateCurrentVote(newVote);
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
              {user?.id ? (
                <Button
                  variant="secondary"
                  disabled={isPending || user?.current_vote === 'vote_no_vote'}
                  onClick={() => handleVote('vote_no_vote')}
                >
                  {isPending ? (
                    <>
                      <BiLoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                      Votando...
                    </>
                  ) : (
                    user?.current_vote === 'vote_no_vote' ? "Votado" : "Não votar"
                  )}
                </Button>
              ) : (
                <AuthForm>
                  <Button variant="secondary">Não votar</Button>
                </AuthForm>
              )}

              {user?.id ? (
                <Button
                  variant="secondary"
                  disabled={isPending || user?.current_vote === 'vote_null'}
                  onClick={() => handleVote('vote_null')}
                >
                  {isPending ? (
                    <>
                      <BiLoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                      Votando...
                    </>
                  ) : (
                    user?.current_vote === 'vote_null' ? "Votado" : "Votar nulo"
                  )}
                </Button>
              ) : (
                <AuthForm>
                  <Button variant="secondary">Votar nulo</Button>
                </AuthForm>
              )}
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
