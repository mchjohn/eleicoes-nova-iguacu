import { VotedType } from "@/interfaces/user";

import { mayorsSurveyResults } from "./mayors_survey_results";
import { mayors } from "./mayors_votes";

export async function updateMayorVote(currentVote?: VotedType, newVote?: VotedType) {
  if (currentVote === 'vote_null') {
    await mayorsSurveyResults.decrementTotalNullVotes();
  }

  if (currentVote === 'vote_no_vote') {
    await mayorsSurveyResults.decrementTotalNoVotes();
  }

  if (typeof currentVote === 'number') {
    await mayors.decrementAmountVotes(currentVote);
  }

  if (newVote === 'vote_null') {
    await mayorsSurveyResults.incrementTotalNullVotes();
  }

  if (newVote === 'vote_no_vote') {
    await mayorsSurveyResults.incrementTotalNoVotes();
  }

  if (typeof newVote === 'number') {
    await mayors.incrementAmountVotes(newVote);
  }

  if (!currentVote) {
    await mayorsSurveyResults.incrementTotalVotes();
  }
}
