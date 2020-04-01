const chance = require('chance').Chance()

// Yeni bir Meeting oluşturulurken kullanılacak data.
class MeetingDTO {
  constructor(topic, start_time, duration) {
    this.topic = topic
    this.start_time = start_time
    this.duration = this.duration || 60
    this.password = chance.string({
      length: 8,
      symbols: false,
      pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    })

    this.type = 2,
    this.settings = {
      host_video: false,
      participant_video: true
    }
  }
}

module.exports = MeetingDTO
