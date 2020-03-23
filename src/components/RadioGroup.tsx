import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import { Choice, Item } from '../types';

interface RadioGroupProps {
  options?: (Choice | Item)[];
  onChange: (value: string) => void;
}

export default function RadioButtonsGroup({
  options,
  onChange
}: RadioGroupProps) {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    onChange(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup value={value} onChange={handleChange}>
        {options?.map((option: Choice | Item) => (
          <FormControlLabel
            key={option.id}
            value={option.id}
            label={'label' in option ? option.label : option.name}
            control={<Radio />}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
