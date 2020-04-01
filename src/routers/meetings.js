const express = require('express')
const router = express.Router()
const { userId } = require('../../config')

const meetingService = require('../services/meeting.service')

router.get('/', async (req, res) => {
  const meetings = await meetingService.getMeetings(userId)
  res.json(meetings.meetings).end()
})

router.post('/', async (req, res) => {
  const { topic, duration, start_time } = req.body
  const result = await meetingService.createMeeting(userId, topic, start_time, duration)
  return res.send(result)
})

router.delete('/:id', async (req, res) => {
  const result = await meetingService.deleteMeeting(req.params.id)
  return res.send(result)
})

module.exports = router
