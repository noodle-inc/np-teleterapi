const axios = require('../plugins/axios')
const CreateMeetingDto = require('../src/dtos/Meeting.dto')
const { userId } = require('../config')

function getUsers() {
  axios.get(
    '/users'
  ).then(res => {
    console.log(res.data)
  }).catch(err => {
    console.log(err)
  })
}

function createMeeting () {
  const dto = new CreateMeetingDto('Web Meeting Test', Date(), 60)
  axios.post(`/users/${userId}/meetings`, dto)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      // Validation'da neyin patladığını gösteriyor.
      console.log(err.response.data)
    })
}

createMeeting()
