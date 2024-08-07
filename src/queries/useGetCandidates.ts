import { useQuery } from '@tanstack/react-query';

import { ICandidate } from '@/interfaces/candidate';

import { COUNCILOR_CANDIDATES, MAYORAL_CANDIDATES } from '@/constants/queryKeys';

const BASEURL = 'http://localhost:3000'

async function getCandidates(endpoint: string) {
  const response = await fetch(`${BASEURL}/${endpoint}`);
  const candidates = await response.json();

  return candidates as ICandidate[];
}

export function useGetMayoralCandidates() {
  const query = useQuery({
    queryKey: [MAYORAL_CANDIDATES],
    queryFn: () => getCandidates('mayoral_candidates'),
  });

  return query;
}

export function useGetCouncilorCandidates() {
  const query = useQuery({
    queryKey: [COUNCILOR_CANDIDATES],
    queryFn: () => getCandidates('councilor_candidates'),
  });

  return query;
}
