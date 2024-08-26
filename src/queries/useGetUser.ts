import { useQuery } from '@tanstack/react-query';

import { USER } from '@/constants/queryKeys';
import { getUser } from '@/services/supabase/queries/users/users';

export function useGetUser() {
  const query = useQuery({
    queryKey: [USER],
    queryFn: () => getUser(1),
  });

  return query;
}
