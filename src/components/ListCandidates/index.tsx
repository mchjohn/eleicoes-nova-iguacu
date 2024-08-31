import { ICandidate } from "@/interfaces/candidate";

import { useAuth } from "@/contexts/AuthContext";

import { useUpdateMayorVote } from "@/mutations/useUpdateMayorVote";
import { useUpdateCurrentVote } from "@/mutations/useUser";

import { CardCandidate } from "@/components/CardCandidate";
import { SkeletonCard } from "../SkeletonCard";

interface ListCandidatesProps {
  isLoading: boolean;
  candidates?: ICandidate[];
}

export function ListCandidates({ isLoading, candidates }: ListCandidatesProps) {
  const { user } = useAuth();
  const { mutateAsync, isPending } = useUpdateMayorVote();
  const { mutateAsync: updateUserCurrentVote, isPending: isPendingUpdateUserCurrentVote } = useUpdateCurrentVote();

  const handleVote = async (newVote: number) => {
    await mutateAsync({ currentVote: user?.current_vote, newVote })
    await updateUserCurrentVote(newVote);
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
            isLoading={isPending || isPendingUpdateUserCurrentVote}
            handleVote={handleVote}
            currentVote={user?.current_vote}
            isAuthenticated={!!user?.id}
          />
        ))
      )}
    </div>
  )
}
