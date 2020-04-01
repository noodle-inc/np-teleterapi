var request = require("request");
const {headers} = require('./config')

var options = {
  method: 'GET',
  // A non-existing sample userId is used in the example below. 
  url: 'https://api.zoom.us/v2/users',
  headers
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  var users = JSON.parse(body)
  const userIds = users.users.map(user => user.id)

  userIds.forEach(user => {
    request({
      method: 'GET',
      url: `https://api.zoom.us/v2/users/${user}/meetings`,
      headers
    }, (err, response, body) => {
      if (err) {
        return 0
      }

      const res = JSON.parse(body)
      console.log(res)
    })
  })

})