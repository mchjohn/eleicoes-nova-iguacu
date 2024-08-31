export type VotedType = number | 'vote_null' | 'vote_no_vote';

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  current_vote: VotedType;
}
