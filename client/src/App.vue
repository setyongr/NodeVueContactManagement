<template>
  <div id="wrapper">
    <header>
        <!--Navbar-->
        <nav class="navbar navbar-dark primary-color-dark">

            <!-- Collapse button-->
            <button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#collapseEx">
            <i class="fa fa-bars"></i>
        </button>

            <div class="container">

                <!--Collapse content-->
                <div class="collapse navbar-toggleable-xs" id="collapseEx">
                    <!--Navbar Brand-->
                    <a class="navbar-brand" href="" target="_blank">Contact</a>
                    <!--Links-->
                    <ul class="nav navbar-nav">
                        <li class="nav-item" v-link-active>
                            <a class="nav-link" v-link="{ path: '/main', exact:true, activeClass: 'active' }">Main</a>
                        </li>
                        <li class="nav-item" v-link-active>
                            <a class="nav-link" v-link="{ path: '/main/add', exact:true, activeClass: 'active' }">Add</a>
                        </li>
                        <li class="nav-item" v-link-active>
                            <a class="nav-link" v-link="{ path: '/main/search', exact:true, activeClass: 'active' }">Search</a>
                        </li>
                        <li class="nav-item" v-if="authenticated">
                            <a class="nav-link" @click="logout()">Logout</a>
                        </li>
                    </ul>
                </div>
                <!--/.Collapse content-->

            </div>

        </nav>
        <!--/.Navbar-->
    </header>
      <main>
        <!--Main layout-->
        <div class="container">

            <!--Page heading-->
            <div class="row">
                <div class="col-md-12">
                    <h1 class="h1-responsive">Contact Management
                    </h1>
                </div>
            </div>
            <!--/.Page heading-->
            <hr>

            <router-view></router-view>
        </div>
      </main>
  </div>
</template>
<style>
  main {
    margin-top: 3em;
  }
</style>
<script>
  import auth from './services/auth'
  export default {
    data () {
      return {
        authenticated: false
      }
    },
    ready () {
      this.$set('authenticated', auth.checkAuth())
    },
    methods: {
      logout () {
        auth.logout()
        this.$router.go('/login')
        this.$set('authenticated', false)
      }
    },
    events: {
      setAuth (val) {
        this.$set('authenticated', val)
      }
    }
  }
</script>