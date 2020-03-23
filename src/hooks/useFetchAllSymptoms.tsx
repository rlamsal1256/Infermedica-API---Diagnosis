import { useState, useEffect } from 'react';
import axios from 'axios';

import { APP_ID, APP_KEY } from '../keys';

interface Symptom {
  id: string;
  name: string;
}

interface Symptoms extends Array<Symptom> {}

type Option = {
  value: string;
  label: string;
};

const initialState: Array<Option> = [];

export function useFetchAllSymptoms() {
  const [symptomOptions, setSymptomOptions] = useState(initialState);
  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await axios.get(
          'https://api.infermedica.com/v2/symptoms',
          {
            headers: {
              'App-Id': APP_ID,
              'App-Key': APP_KEY
            }
          }
        );
        const options = (response.data as Symptoms).map(symptom => ({
          value: symptom.id,
          label: symptom.name
        }));
        setSymptomOptions(options);
      } catch (err) {
        // set error
      }
    };

    fetchInfo();
  }, []);

  return symptomOptions;
}
