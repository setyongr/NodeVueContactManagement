
import Vue from 'vue'
import App from './App'
import Home from './components/Home.vue'
import AddContact from './components/AddContact'
import EditContact from './components/EditContact'
import ViewContact from './components/ViewContact'
import SearchContact from './components/SearchContact'
import Login from './components/Login'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import auth from './services/auth'

Vue.use(VueResource)
Vue.use(VueRouter)

var router = new VueRouter()

router.map({
  '/main': {
    component: Home,
    auth: true,
    subRoutes: {
      '/add': {
        component: AddContact
      },
      '/view/:id': {
        component: ViewContact
      },
      '/edit/:id': {
        component: EditContact
      },
      '/search': {
        component: SearchContact
      }
    }
  },
  '/login': {
    component: Login
  }
})

router.beforeEach((transition) => {
  if (transition.to.auth && !auth.checkAuth()) {
    transition.redirect('/login')
  } else {
    transition.next()
  }
})

router.redirect({
  '*': '/main'
})

router.start(App, '#app')
