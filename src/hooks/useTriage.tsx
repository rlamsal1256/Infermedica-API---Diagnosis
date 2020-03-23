import { useState, useEffect } from 'react';
import axios from 'axios';

import { APP_ID, APP_KEY } from '../keys';
import { Evidence, TriageResponse } from '../types';

interface Props {
  evidences: Evidence[];
}

export default function useTriage({ evidences }: Props): TriageResponse | null {
  const [triage, setTriage] = useState<TriageResponse | null>(null);

  const body = JSON.stringify({
    sex: 'male',
    age: 30,
    evidence: evidences
  });

  useEffect(() => {
    const fetchDiagnosis = async () => {
      try {
        const response = await axios.post(
          'https://api.infermedica.com/covid19/triage',
          body,
          {
            headers: {
              'App-Id': APP_ID,
              'App-Key': APP_KEY,
              'Content-Type': 'application/json'
            }
          }
        );
        setTriage(response.data);
      } catch (err) {
        // set error
      }
    };

    fetchDiagnosis();
  }, [body]);

  return triage;
}
