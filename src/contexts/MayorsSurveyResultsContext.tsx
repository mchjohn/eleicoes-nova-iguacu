import {
  createContext,
  ReactNode,
  useContext,
} from 'react';

import { calcSurveyResults } from '@/utils/calcSurveyResults';

import { useGetMayorsSurveyResults } from '@/queries/useGetMayorsSurveyResults';

interface IMayorsSurveyResultsContextStates {
  surveyResult: ReturnType<typeof calcSurveyResults>;
  isLoadingSurveyResults: boolean;
}

interface IMayorsSurveyResultsContextActions {

}

const MayorsSurveyResultsContext = createContext(
  {} as IMayorsSurveyResultsContextStates & IMayorsSurveyResultsContextActions,
);

export function MayorsSurveyResultsProvider({ children }: { children: ReactNode }) {
  const { data: mayorsSurveyResults, isLoading: isLoadingSurveyResults } = useGetMayorsSurveyResults()

  const surveyResult = calcSurveyResults(mayorsSurveyResults);

  return (
    <MayorsSurveyResultsContext.Provider
      value={{
        surveyResult,
        isLoadingSurveyResults,
      }}
    >
      {children}
    </MayorsSurveyResultsContext.Provider>
  );
}

export function useMayorsSurveyResults() {
  const context = useContext(MayorsSurveyResultsContext);

  if (!context) {
    throw new Error('useMayorsSurveyResults must be used within an MayorsSurveyResultsProvider');
  }

  return context;
}
