import React from 'react';
import Button from '@material-ui/core/Button';

import useTriage from '../hooks/useTriage';
import { Evidence } from '../types';

interface Props {
  evidences: Evidence[];
}

export default function Triage({ evidences }: Props) {
  const triage = useTriage({ evidences });
  return (
    <>
      {triage && (
        <>
          <h2>Results:</h2>
          <p>{triage.label}</p>
          <p>{triage.description}</p>
          <div style={{ marginTop: '1rem' }}>
            <Button
              onClick={() => window.location.reload()}
              variant="contained"
              color="primary"
            >
              Restart
            </Button>
          </div>
        </>
      )}
    </>
  );
}
