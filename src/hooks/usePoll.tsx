import { useObjectVal } from "react-firebase-hooks/database"
import { PollQuestion } from "../types"
import { getPollRef } from "../utils/db"

type PollQuestionRequest = [
  PollQuestion,
  boolean,
  Error | null,
]

export const usePoll = (pollId: string): PollQuestionRequest => {
  console.log("pollId:", pollId)
  const asdfasdf = useObjectVal(
    getPollRef(pollId)
  ) as unknown as PollQuestionRequest
  console.log("asdfasdf", asdfasdf)
  return asdfasdf
}