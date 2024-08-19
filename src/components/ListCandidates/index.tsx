import { ICandidate } from "@/interfaces/candidate";

import { CardCandidate } from "@/components/CardCandidate";
import { SkeletonCard } from "../SkeletonCard";

interface ListCandidatesProps {
  isLoading: boolean;
  candidates?: ICandidate[];
}

export function ListCandidates({ isLoading, candidates }: ListCandidatesProps) {
  return (
    <div className="space-y-2 md:flex md:flex-wrap gap-4">
      {isLoading ? (
          <SkeletonCard />
        ) : (
          candidates?.map((candidate) => (
            <CardCandidate key={candidate.id} candidate={candidate} />
          ))
        )}
    </div>
  )
}
