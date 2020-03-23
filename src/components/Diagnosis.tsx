import React from 'react';

import Question from './Question';
import Conditions from './Conditions';
import Triage from './Triage';
import { usePostSymptomsAndFetchDiagnosis } from '../hooks/usePostSymptomsAndFetchDiagnosis';

import { Evidence } from '../types';

interface DiagnosisProps {
  sex: 'male' | 'female';
  age: number;
  evidences: any;
  onNewSymptom?: (evidence: Evidence) => void;
  onMultiNewSymptoms?: any;
}

function Diagnosis(props: DiagnosisProps) {
  const diagnosis = usePostSymptomsAndFetchDiagnosis(props);

  return (
    <>
      {!diagnosis.should_stop ? (
        <Question
          question={diagnosis.question}
          onAnswer={props.onNewSymptom}
          onMultipleAnswer={props.onMultiNewSymptoms}
        />
      ) : (
        <Triage evidences={props.evidences} />
      )}
      <Conditions conditions={diagnosis.conditions} />
    </>
  );
}

export default Diagnosis;
