const axios = require('../plugins/axios')
const MeetingDTO = require('../dtos/Meeting.dto')

// Kullanıcıya ait tüm meeting'leri çeker.
async function getMeetings (userId) {
  const result = await axios.get(`/users/${userId}/meetings`)
  return result.data
}

// Bir kullanıcı tarafından yeni bir meeting oluşturur.
async function createMeeting (userId, topic, date, duration) {
  const dto = new MeetingDTO(topic, date, duration)
  const result = await axios.post(`/users/${userId}/meetings`, dto)
  return result.data
}

async function deleteMeeting (meetingId) {
  const result = await axios.delete(`/meetings/${meetingId}`)
  return result.data
}

module.exports = {
  getMeetings,
  createMeeting,
  deleteMeeting
}
