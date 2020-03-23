import React from 'react';

import Question from './Question';
import Conditions from './Conditions';
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
      <Question
        question={diagnosis.question}
        onAnswer={props.onNewSymptom}
        onMultipleAnswer={props.onMultiNewSymptoms}
      />
      <Conditions conditions={diagnosis.conditions} />
    </>
  );
}

export default Diagnosis;
