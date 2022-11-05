import { usePoll } from '../hooks/usePoll'
import { POLL_ID } from '../utils/constants'

const DbTester = () => {
  const [ poll, ] = usePoll(POLL_ID)
  return (
    <>
      {poll}
    </>
  )
}

export default DbTester