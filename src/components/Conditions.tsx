import React from 'react';

import { Condition } from '../types';

interface ConditionsProps {
  conditions?: Condition[];
}

function Conditions({ conditions }: ConditionsProps) {
  return (
    <div className="bottom">
      <h2>Possible conditions:</h2>
      <ul>
        {conditions?.map(cond => (
          <li key={cond.id}>
            {cond.common_name} [{cond.probability}]
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Conditions;
