import { useState, useEffect } from 'react';
import axios from 'axios';

import { APP_ID, APP_KEY } from '../keys';
import { Diagnosis } from '../types';

const initialDiagnosis: Diagnosis = {
  question: { type: 'single', text: '', items: [] }
};

interface DiagnosisProps {
  sex: 'male' | 'female';
  age: number;
  evidences: any;
}

export function usePostSymptomsAndFetchDiagnosis({
  sex,
  age,
  evidences
}: DiagnosisProps) {
  const [diagnosis, setDiagnosis] = useState(initialDiagnosis);

  const body = JSON.stringify({
    sex,
    age,
    evidence: evidences
  });

  useEffect(() => {
    const fetchDiagnosis = async () => {
      try {
        const response = await axios.post(
          'https://api.infermedica.com/v2/diagnosis',
          // 'https://api.infermedica.com/covid19/diagnosis',
          body,
          {
            headers: {
              'App-Id': APP_ID,
              'App-Key': APP_KEY,
              'Content-Type': 'application/json'
            }
          }
        );
        setDiagnosis(response.data as Diagnosis);
      } catch (err) {
        // set error
      }
    };

    fetchDiagnosis();
  }, [body]);

  return diagnosis;
}
