import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { MAYORAL_CANDIDATES, MAYORS_SURVEY_RESULTS, USER } from '@/constants/queryKeys';
import { VotedType } from "@/interfaces/user";

import { queryClient } from "@/services/reactQuery/query-client";
import { updateMayorVote } from "@/services/supabase/mutates/mayors/updateVote";

type Props = {
  currentVote?: VotedType,
  newVote?: VotedType
}

export function useUpdateMayorVote() {
  return useMutation({
    mutationFn: (data: Props) => {
      return updateMayorVote(data.currentVote, data.newVote);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [USER]});
      queryClient.invalidateQueries({queryKey: [MAYORAL_CANDIDATES]});
      queryClient.invalidateQueries({queryKey: [MAYORS_SURVEY_RESULTS]});

      toast("Voto computado com sucesso", {
        description: "Você pode mudar o voto votando em outro candidato",
      })
    },
    onError: () => {
      toast("Não foi possível votar no monto", {
        description: "Tente novamente",
      })
    },
  });
}
