import { useState } from 'react';

import { Evidence } from '../types';

export function useHandleEvidence() {
  const [evidences, setEvidences] = useState<Evidence[]>([]);

  const addEvidence = (newEvidence: Evidence) => {
    setEvidences([...evidences, newEvidence]);
  };

  const addEvidences = (evds: Evidence[]) => {
    setEvidences([...evidences, ...evds]);
  };

  return {
    evidences,
    setEvidences,
    addEvidence,
    addEvidences
  };
}
