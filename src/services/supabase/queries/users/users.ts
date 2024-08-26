import { supabase } from "../../config";

import { IUser } from '@/interfaces/user';

export async function getUser(userId: number) {
  const { data: user, error } = await supabase
    .from('users')
    .select()
    .eq('id', userId);

  if (error) throw error;

  return user[0] as IUser;
}
