import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import SymptomSelect from '../components/SymptomSelect';
import Diagnosis from '../components/Diagnosis';

import { useFetchAllSymptoms } from '../hooks/useFetchAllSymptoms';
import { useHandleEvidence } from '../hooks/useHandleEvidence';

import { Evidence } from '../types';

function Main() {
  const options = useFetchAllSymptoms();
  const {
    evidences,
    setEvidences,
    addEvidence,
    addEvidences
  } = useHandleEvidence();
  const [diagnoseReady, setDiagnoseReady] = useState(true); // Switch to false for general med and not just Covid-19

  return (
    <div className="main">
      <div>
        {!diagnoseReady && (
          <>
            <h1 className="center v-padding">
              Start by selecting some of your symptoms
            </h1>
            <SymptomSelect
              options={options}
              onSymptomSelect={(evidences: Evidence[]) =>
                setEvidences(evidences)
              }
            />
            <div className="center padding">
              <Button
                variant="contained"
                color="primary"
                onClick={() => setDiagnoseReady(true)}
              >
                Start
              </Button>
            </div>
          </>
        )}
      </div>
      <div>
        {diagnoseReady && (
          <Diagnosis
            sex="male"
            age={30}
            evidences={evidences}
            onNewSymptom={addEvidence}
            onMultiNewSymptoms={addEvidences}
          />
        )}
      </div>
    </div>
  );
}

export default Main;
