import React from 'react';

import RadioGroup from './RadioGroup';
import CheckboxGroup from './CheckboxGroup';
import { Question, Evidence, ChoiceId } from '../types';

interface QuestionProps {
  question: Question;
  onAnswer?: (evidence: Evidence) => void;
  onMultipleAnswer?: (evidences: Evidence[]) => void;
}

export default ({ question, onAnswer, onMultipleAnswer }: QuestionProps) => {
  const { text, items } = question;

  return (
    <>
      <h2>{text}</h2>
      <div>
        {question.type === 'single' &&
          items.map(item => {
            return (
              <div key={item.id}>
                <RadioGroup
                  options={item.choices}
                  onChange={(choice_id: string) =>
                    onAnswer &&
                    onAnswer({ id: item.id, choice_id: choice_id as ChoiceId })
                  }
                />
              </div>
            );
          })}

        {question.type === 'group_single' && (
          <RadioGroup
            options={items}
            onChange={(id: string) =>
              onAnswer && onAnswer({ id, choice_id: 'present' })
            }
          />
        )}

        {question.type === 'group_multiple' && (
          <CheckboxGroup
            question={question}
            onEvidenceSumit={(evidences: Evidence[]) => {
              onMultipleAnswer && onMultipleAnswer(evidences);
            }}
          />
        )}
      </div>
    </>
  );
};
