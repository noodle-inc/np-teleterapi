const axios = require('../plugins/axios')

async function getUsers () {
  const result = axios.get('/users')
  return result.data
}

module.exports = {
  getUsers
}
