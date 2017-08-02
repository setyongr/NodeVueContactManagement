import auth from '../services/auth'

const API_URL = 'http://localhost:3000/contact'

export default {
  add (context, data) {
    return context.$http.post(API_URL, data, {headers: auth.getAuthHeader()})
  },
  list (context) {
    return context.$http.get(API_URL, {headers: auth.getAuthHeader()})
  },
  filterList (context, filter) {
    return context.$http.get(API_URL, {
      headers: auth.getAuthHeader(),
      params: {
        filter: JSON.stringify(filter)
      }
    })
  },
  load (context, id) {
    return context.$http.get(API_URL + '/' + id, {headers: auth.getAuthHeader()})
  },
  remove (context, id) {
    return context.$http.delete(API_URL + '/' + id, {headers: auth.getAuthHeader()})
  },
  edit (context, id, data) {
    return context.$http.put(API_URL + '/' + id, data, {headers: auth.getAuthHeader()})
  }
}
