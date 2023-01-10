import participants from '../db/participants.json' assert { type: 'json' }

export const getParticipants = () => {
  return participants
}
