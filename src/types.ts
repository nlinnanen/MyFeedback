export type PollResponse = {
  id: string;
  userId: string;
  questionId: string;
  responseOptionIndex: number;
}

export interface Poll {
  id: string;
  question: string;
  options: Array<string|number>;
}

export type NumericPoll = Poll & {
  options: Array<number>;
}

export type TextPoll = Poll & {
  options: Array<string>;
}
