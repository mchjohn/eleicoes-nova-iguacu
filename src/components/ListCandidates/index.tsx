import { ICandidate } from "@/interfaces/candidate";

import { CardPrefeito } from "@/components/CardPrefeito";

export function ListCandidates({ candidates }: { candidates: ICandidate[] }) {
  return (
    <>
      {candidates?.map((candidate) => (
        <CardPrefeito key={candidate.id} candidate={candidate} />
      ))}
    </>
  )
}
