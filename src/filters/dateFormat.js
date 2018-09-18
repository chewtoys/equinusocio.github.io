import Vue from 'vue'
import moment from 'moment'

export default Vue.filter('formatDate', function (value, format) {
  if (value) {
    return moment(String(value)).format(format || 'MMMM Do YYYY')
  }
})
