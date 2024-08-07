import { useQuery } from '@tanstack/react-query';

import { CANDIDATES } from '@/constants/queryKeys';

export function useGetCandidates() {
  const query = useQuery({
    queryKey: [CANDIDATES],
    queryFn: () => getCandidates(),
  });

  return query;
}
