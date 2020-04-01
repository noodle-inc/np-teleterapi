const { headers, userId } = require('../../config')
const request = require('request')
const axios = require('axios')

function createMeeting () {
  // axios.default.headers['Authorization'] = headers.authorization
  axios.default.post(
    `https://api.zoom.us/v2/users/${userId}/meetings`,
    {
      headers: { 'Authorization': headers.authorization },
      topic: 'Web Meeting Test',
      type: 2,
      start_time: Date(),
      duration: 60,
      password: 'web_meeting_test'
    }
  ).then((result) => {
    console.log(result)
  }).catch(err => {
    console.log(err)
  })
}

function getUsers () {
  return new Promise((resolve, reject) => {
    var options = {
      method: 'GET',
      // A non-existing sample userId is used in the example below. 
      url: 'https://api.zoom.us/v2/users',
      headers
    }

    request(options, (err, response, body) => {
      if (err) {
        reject('Hata oluştu')
      }
      const { users } = JSON.parse(body)

      resolve(users)
    })
  })
}

function getUserMeetings (id) {
  return new Promise((resolve, reject) => {
    var options = {
      method: 'GET',
      // A non-existing sample userId is used in the example below. 
      url: `https://api.zoom.us/v2/users/${id}/meetings`,
      headers
    }

    request(options, (err, response, body) => {
      if (err) {
        reject('Hata oluştu')
      }
      const { meetings } = JSON.parse(body)

      resolve({[user.id]: meetings})
    })
  })
}

async function getMeetings () {
  const users = await this.getUsers()

  const promises = users.map(user => {
    return new Promise((resolve, reject) => {
      var options = {
        method: 'GET',
        // A non-existing sample userId is used in the example below. 
        url: `https://api.zoom.us/v2/users/${user.id}/meetings`,
        headers
      }
  
      request(options, (err, response, body) => {
        if (err) {
          reject('Hata oluştu')
        }
        const { meetings } = JSON.parse(body)
  
        resolve(meetings)
      })
    })
  })

  return Promise.all(promises)
    .then(values => {
      return values
    })
    .catch(err => {
      console.log('err')
    })
}

module.exports = {
  getMeetings,
  getUsers,
  getUserMeetings,
  createMeeting
}