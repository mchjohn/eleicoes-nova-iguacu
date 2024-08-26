export type VotedType = number | 'vote_null' | 'vote_no_vote';

export interface IUser {
  id: number;
  name: string;
  email: string | null;
  current_vote: VotedType;
}
