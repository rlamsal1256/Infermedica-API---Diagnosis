import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { APP_ID, APP_KEY } from '../keys';

interface Info {
  updated_at: String;
  conditions_count: Number;
  symptoms_count: Number;
  risk_factors_count: Number;
  lab_tests_count: Number;
}

const initialInfo: Info = {
  updated_at: '',
  conditions_count: 0,
  symptoms_count: 0,
  risk_factors_count: 0,
  lab_tests_count: 0
};

// Currently not used anywhere
function Info() {
  const [info, setInfo] = useState(initialInfo);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await axios.get(
          'https://api.infermedica.com/v2/info',
          {
            headers: {
              'App-Id': APP_ID,
              'App-Key': APP_KEY
            }
          }
        );
        setInfo(response.data as Info);
      } catch (err) {
        // set error
      }
    };

    fetchInfo();
  }, []);

  return (
    <>
      <div>
        <strong>Updated at:</strong> {info.updated_at}
      </div>
      <div>
        <strong>Conditions count:</strong> {info.conditions_count}
      </div>
      <div>
        <strong>Symptoms count:</strong> {info.symptoms_count}
      </div>
      <div>
        <strong>Risk factors count:</strong> {info.risk_factors_count}
      </div>
      <div>
        <strong>Lab tests count:</strong> {info.lab_tests_count}
      </div>
    </>
  );
}

export default Info;
