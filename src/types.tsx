export interface Diagnosis {
  question: Question;
  conditions?: Array<Condition>;
  should_stop?: Boolean;
  extras?: Object;
}

export type Question = {
  type: 'single' | 'group_single' | 'group_multiple';
  text: string;
  items: Array<Item>;
  extras?: Object;
};

export type Item = {
  id: string;
  name: string;
  choices: Array<Choice>;
};

export type Choice = {
  id: string;
  label: string;
};

export type Condition = {
  id: string;
  name: string;
  common_name: string;
  probability: number;
};

export type Evidence = {
  id: string;
  choice_id: ChoiceId;
};

export type ChoiceId = 'present' | 'absent';

export interface TriageResponse {
  triage_level: TriageLevel;
  label: string;
  description: string;
  serious: Serious[];
}

export type TriageLevel =
  | 'no_risk'
  | 'self_monitoring'
  | 'quarantine'
  | 'isolation_call'
  | 'isolation_ambulance';

export type Serious = {
  common_name: string;
  id: string;
  is_emergency: boolean;
  name: string;
};
