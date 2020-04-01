const express = require('express')
const router = express.Router()

const meetingService = require('../services/meetings')

router.get('/', async (req, res) => {
  const meetings = await meetingService.getMeetings()
  const users = await meetingService.getUsers()

  let sum = []
  meetings.forEach(meeting => {
    sum = [
      ...sum,
      ...meeting
    ]
  })
  
  res.render('meetings', {users, meetings: sum})
})

router.get('/:userid', async (req, res) => {
  const meetings = await meetingService.getUserMeetings(req.params.userid)

  return res.json(meetings)
})

router.post('/', async (req, res) => {
  const result = await meetingService.createMeeting()

  return res.send(result)
})

module.exports = router