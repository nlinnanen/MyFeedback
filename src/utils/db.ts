import { ref, getDatabase, DatabaseReference, set } from 'firebase/database'
import { app } from './firebase-config'
import { PollQuestion } from '../types'
import { POLL_ID } from './constants'

const db = getDatabase(app)

export const getPollRef = (pollId: string): DatabaseReference =>
  ref(db, `pollQuestions/${pollId}`)

export const vote = (data: PollQuestion, index: number) => {
  const { question, options } = data
  const options2 = [...options]
  options2[index][1] += 1
  set(ref(db, `pollQuestions/${POLL_ID}`), {
    question, options: options2
  });
}