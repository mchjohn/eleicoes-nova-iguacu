import { useQuery } from '@tanstack/react-query';

import { CANDIDATES } from '@/constants/queryKeys';
import { ICandidate } from '@/interfaces/candidate';

const BASEURL = 'http://localhost:3000/candidates'

async function getCandidates() {
  const response = await fetch(`${BASEURL}`);
  const candidates = await response.json();

  return candidates as ICandidate[];
}

export function useGetCandidates() {
  const query = useQuery({
    queryKey: [CANDIDATES],
    queryFn: () => getCandidates(),
  });

  return query;
}
