import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { MAYORAL_CANDIDATES, MAYORS_SURVEY_RESULTS, USER } from '@/constants/queryKeys';
import { VotedType } from "@/interfaces/user";
import { SignInData } from "@/validations/signInSchema";
import { SignUpData } from "@/validations/signUpUserSchema";

import { queryClient } from "@/services/reactQuery/query-client";
import { mayorsSurveyResults } from "@/services/supabase/mutates/mayors/mayors_survey_results";
import { auth } from "@/services/supabase/users/auth";
import { updateUser } from "@/services/supabase/users/update";
import { AuthApiError } from "@supabase/supabase-js";

export function useSignIn() {
  return useMutation({
    mutationFn: (params: SignInData) => {
      return auth.signIn(params);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [USER]});
      queryClient.invalidateQueries({queryKey: [MAYORAL_CANDIDATES]});
      queryClient.invalidateQueries({queryKey: [MAYORS_SURVEY_RESULTS]});
    },
    onError: (error: AuthApiError) => {
      const errorMessage = error.message === 'Invalid login credentials' ?
        'E-mail e ou senha incorretos' :
        'Não foi possível entrar com sua conta no momento';

      toast(errorMessage, {
        description: "Tente novamente",
      })
    },
  });
}

export function useSignUp() {
  return useMutation({
    mutationFn: (params: SignUpData) => {
      return auth.signUp(params);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [USER]});
      queryClient.invalidateQueries({queryKey: [MAYORAL_CANDIDATES]});
      queryClient.invalidateQueries({queryKey: [MAYORS_SURVEY_RESULTS]});

      toast("Conta criada com sucesso", {
        description: "Agora você já pode votar",
      })

      mayorsSurveyResults.incrementTotalVoters();
    },
    onError: () => {
      toast("Não foi possível criar sua conta no momento", {
        description: "Tente novamente",
      })
    },
  });
}

export function useSignOut() {
  return useMutation({
    mutationFn: () => {
      return auth.signOut();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [USER]});
      queryClient.invalidateQueries({queryKey: [MAYORAL_CANDIDATES]});
      queryClient.invalidateQueries({queryKey: [MAYORS_SURVEY_RESULTS]});
    },
    onError: () => {
      toast("Não foi sair da sua conta no momento", {
        description: "Tente novamente",
      })
    },
  });
}

export function useUpdateCurrentVote() {
  return useMutation({
    mutationFn: (vote: VotedType) => {
      return updateUser.updateCurrentVote(vote);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [USER]});
      queryClient.invalidateQueries({queryKey: [MAYORAL_CANDIDATES]});
      queryClient.invalidateQueries({queryKey: [MAYORS_SURVEY_RESULTS]});
    },
    onError: () => {
      toast("Não foi sair da sua conta no momento", {
        description: "Tente novamente",
      })
    },
  });
}
