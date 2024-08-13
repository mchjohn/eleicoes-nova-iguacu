import { ICandidate } from "@/interfaces/candidate";

import { CardCandidateMin } from "@/components/CardCandidateMin";

export function ListCandidatesMin({ candidates }: { candidates: ICandidate[] }) {
  const orderedCandidates = candidates?.sort((a, b) => b.votes - a.votes);

  return (
    <div className="space-y-2 gap-4">
      {orderedCandidates?.map((candidate) => (
        <CardCandidateMin key={candidate.id} candidate={candidate} />
      ))}
    </div>
  )
}
