import { CardPrefeito } from "@/components/CardPrefeito";
import { useGetCandidates } from "@/queries/useGetCandidates";

export function ListCandidates() {
  const { data: candidates } = useGetCandidates();

  return (
    <>
      {candidates?.map((candidate) => (
        <CardPrefeito key={candidate.id} candidate={candidate} />
      ))}
    </>
  )
}
