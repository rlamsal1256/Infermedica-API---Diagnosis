import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import { Question, Evidence } from '../types';

interface Props {
  question: Question;
  onEvidenceSumit: (evidences: Evidence[]) => void;
}

interface State {
  [key: string]: boolean;
}

export default function CheckboxLabels({ question, onEvidenceSumit }: Props) {
  const [state, setState] = useState<State>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleEvidenceSubmit = () => {
    const symptomsPresentFromState = Object.keys(state).filter(
      key => state[key]
    );
    const evidences: Evidence[] = question.items.map(item => {
      const exists = symptomsPresentFromState.includes(item.id);
      return { id: item.id, choice_id: exists ? 'present' : 'absent' };
    });
    onEvidenceSumit(evidences);
  };

  return (
    <FormGroup>
      {question.items.map(item => {
        const key = item.id;
        return (
          <FormControlLabel
            key={item.id}
            control={
              <Checkbox
                checked={state[key]}
                onChange={handleChange}
                name={item.id}
                color="primary"
              />
            }
            label={item.name}
          />
        );
      })}
      <div style={{ marginTop: '1rem' }}>
        <Button
          onClick={handleEvidenceSubmit}
          variant="contained"
          color="primary"
        >
          Next
        </Button>
      </div>
    </FormGroup>
  );
}
