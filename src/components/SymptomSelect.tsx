import React, { useState } from 'react';
import Select, { ValueType } from 'react-select';

import { Evidence } from '../types';

interface SymptomSelectProps {
  options: Option[];
  onSymptomSelect: (evidences: Evidence[]) => void;
}

type Option = {
  value: string;
  label: string;
};

const SymptomSelect = ({ options, onSymptomSelect }: SymptomSelectProps) => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  const handleChange = (selectedOptions: Option[]) => {
    setSelectedOptions(selectedOptions);
    const evidences: Evidence[] = selectedOptions.map((o: Option) => ({
      id: o.value,
      choice_id: 'present'
    }));
    onSymptomSelect(evidences);
  };

  return (
    <Select
      isMulti
      options={options}
      value={selectedOptions}
      onChange={(selectedOption: ValueType<Option>) =>
        handleChange(selectedOption as Option[])
      }
    />
  );
};

export default SymptomSelect;
