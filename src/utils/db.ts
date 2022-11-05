import { ref, getDatabase, DatabaseReference } from 'firebase/database'
import { app } from './firebase-config'

const db = getDatabase(app)

export const getPollRef = (pollId: string): DatabaseReference =>
  ref(db, `pollQuestions/${pollId}`)