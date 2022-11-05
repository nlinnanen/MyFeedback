export type Option = {
  name: string,
  votes: number,
}

export type PollQuestion = {
  id: string;
  question: string;
  options: Option[];
  date: Date;
}