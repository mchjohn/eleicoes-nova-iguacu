import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { MAYORAL_CANDIDATES, MAYORS_SURVEY_RESULTS } from '@/constants/queryKeys';
import { queryClient } from "@/services/reactQuery/query-client";
import { updateMayorVote } from "@/services/supabase/queries/mayors_votes";

type Props = {
  id: number;
  oldId?: number;
}

export function useUpdateMayorVote() {
  return useMutation({
    mutationFn: (data: Props) => {
      return updateMayorVote(data.id, data.oldId);
    },
    onSuccess: () => {
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
