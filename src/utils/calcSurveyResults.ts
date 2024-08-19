import { ISurveyResult } from "@/interfaces/survey_results";

export function calcSurveyResults(results?: ISurveyResult) {
  const total_voters = results?.total_voters ?? 0; // TOTAL DE USUÁRIO CADASTRADO NA APLICAÇÃO

  const total_votes = results?.total_votes ?? 0; // TOTAL DE VOTOS
  const percent_total_votes = (total_votes / total_voters) * 100; // PORCENTAGEM DO TOTAL DE VOTOS

  const total_null_votes = results?.total_null_votes ?? 0; // TOTAL DE VOTOS NULO
  const percent_total_null_votes = (total_null_votes / total_votes) * 100; // PORCENTAGEM DO TOTAL DE VOTOS NULO

  const total_no_votes = results?.total_no_votes ?? 0; // TOTAL DE USUÁRIOS CADASTRADO QUE NÃO VOTARAM
  const percent_total_no_votes = (total_no_votes / total_voters) * 100; // TOTAL DE USUÁRIOS CADASTRADO QUE NÃO VOTARAM

  const total_valid_votes = total_votes - total_null_votes; // TOTAL DE VOTOS VÁLIDOS
  const percent_total_valid_votes = (total_valid_votes / total_votes) * 100; // PORCENTAGEM DOS VOTOS VÁLIDO

  return {
    total_voters,
    total_votes,
    percent_total_votes,
    total_null_votes,
    percent_total_null_votes,
    total_no_votes,
    percent_total_no_votes,
    total_valid_votes,
    percent_total_valid_votes
  }
}
