
// URL and endpoint constants
const API_URL = 'http://localhost:3000/'
const LOGIN_URL = API_URL + 'checkauth'

export default {

  // Send a request to the login URL and save the returned JWT
  login (context, creds, redirect) {
    var token = btoa(creds.username + ':' + creds.password)
    context.$http.get(LOGIN_URL, {headers: {Authorization: 'Basic ' + token}}).then((data) => {
      localStorage.setItem('id_token', token)

      // Redirect to a specified route
      if (redirect) {
        context.$dispatch('setAuth', true)
        context.$router.go(redirect)
      }
    }, () => {
      context.error = 'Unauthorized'
    })
  },

  // To log out, we just need to remove the token
  logout () {
    localStorage.removeItem('id_token')
  },

  checkAuth () {
    var auth = localStorage.getItem('id_token')
    if (auth) {
      return true
    } else {
      return false
    }
  },

  // The object to be passed as a header for authenticated requests
  getAuthHeader () {
    return {
      'Authorization': 'Basic ' + localStorage.getItem('id_token')
    }
  }
}
