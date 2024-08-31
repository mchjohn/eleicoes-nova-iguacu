import { useQuery } from '@tanstack/react-query';

import { USER } from '@/constants/queryKeys';
import { auth } from '@/services/supabase/users/auth';

export function useGetUserData() {
  const query = useQuery({
    queryKey: [USER],
    queryFn: () => auth.userData(),
  });

  return query;
}
