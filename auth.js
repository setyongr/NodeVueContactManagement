const auth = require('http-auth');

const basic = auth.basic({
  realm: 'SUPERSECRETPIXELHOUSE'
}, (username, password, callback) => {
  // console.log('Loging In:' + username + ":" + password)
  callback(username==='admin' && password==='admin');
});

module.exports = auth.connect(basic)