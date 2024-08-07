export interface ICandidate {
  id: string
  name: string
  votes: number
  picture: string
  about: string
  political_party: {
    name: string
  }
}
