var app = new Vue({
  el: '#app',
  data: {
    meetings: [],
    error: null,
    topic: 'Test Meeting',
    duration: 15,
    startTime: moment().format('YYYY-MM-DD')
  },
  mounted: function () {
    var _this = this
    axios
      .get('/api/meetings')
      .then(function (res) {
        _this.meetings = res.data
      })
      .catch(function (err) {
        _this.error = err
      })
  },
  methods: {
    parsedDate: function (date) {
      return date.toLocaleString()
    },
    createMeeting: function (event) {
      var _this = this

      event.preventDefault()
      event.stopPropagation()

      axios
        .post('/api/meetings', {
          topic: this.topic,
          duration: this.duration,
          start_time: this.startTime
        })
        .then(function (res) {
          _this.meetings.push(res.data)
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    deleteMeeting: function (id) {
      var _this = this
      axios
        .delete(`/api/meetings/${id}`)
        .then(function (res) {
          _this.meetings = _.filter(_this.meetings, function (meeting) {
            return meeting.id !== id
          })
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  }
})
