const axios = require('axios')
const { headers } = require('../../config')

const instance /*;)*/ = axios.create({
  baseURL: 'https://api.zoom.us/v2',
})

instance.defaults.headers['Authorization'] = headers.authorization

module.exports = instance
