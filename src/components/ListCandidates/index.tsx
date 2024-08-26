import { ICandidate } from "@/interfaces/candidate";

import { useAuth } from "@/contexts/AuthContext";

import { useUpdateMayorVote } from "@/mutations/useUpdateMayorVote";
import { updateCurrentVote } from "@/services/supabase/mutates/users/updateUser";

import { CardCandidate } from "@/components/CardCandidate";
import { SkeletonCard } from "../SkeletonCard";

interface ListCandidatesProps {
  isLoading: boolean;
  candidates?: ICandidate[];
}

export function ListCandidates({ isLoading, candidates }: ListCandidatesProps) {
  const { user } = useAuth();
  const { mutateAsync, isPending } = useUpdateMayorVote();

  const handleVote = (newVote: number) => {
    if (user?.id) {
      updateCurrentVote(newVote, user.id);
    }

    mutateAsync({ currentVote: user?.current_vote, newVote })
  }

  return (
    <div className="space-y-2 md:flex md:flex-wrap gap-4 mt-4">
      {isLoading ? (
          <SkeletonCard />
        ) : (
          candidates?.map((candidate) => (
            <CardCandidate
              key={candidate.id}
              candidate={candidate}
              isLoading={isPending}
              handleVote={handleVote}
              currentVote={user?.current_vote}
            />
          ))
        )}
    </div>
  )
}
