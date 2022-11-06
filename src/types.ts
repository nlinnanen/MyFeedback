export type PollQuestion = {
  id: string;
  question: string;
  options: [string, number][];
  date: Date;
}