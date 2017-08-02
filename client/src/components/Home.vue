<template>
  <div>
    <router-view></router-view>
    <div class="contact-entries">
      <p v-if="!contactEntries.length"><strong>No contact yet</strong></p>
      <div class="list-group">
        <div class="row">
          <div v-for="contactEntry in contactEntries">
            <div class='col-xs-12 col-sm-4 col-md-3 col-lg-3'>
              <div class="card">
                  <h3 class="card-header primary-color white-text">{{ contactEntry.name }}</h3>
                  <div class="card-block">
                      <h4 class="card-title">{{ contactEntry.title }}</h4>
                      <p class="card-text">{{ contactEntry.company}}</p>
                      <a class="btn btn-primary" @click="showContact(contactEntry)">View</a>
                      <a class="btn btn-secondary" @click="editContact(contactEntry)">Edit</a>
                      <a class="btn btn-danger" @click="deleteContact(contactEntry)">Delete</a>                      
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
  </div>
</template>
<script>
  import contactService from '../services/contact'
  export default {
    data () {
      return {
        contactEntries: []
      }
    },
    route: {
      data () {
        return contactService.list(this).then((response) => {
          return {contactEntries: response.body}
        }, (err) => {
          alert('Error load contact')
          this.error = err
        })
      }
    },
    methods: {
      loadContact () {
        contactService.list(this).then((response) => {
          this.$set('contactEntries', response.body)
        }, (err) => {
          this.error = err
        })
      },
      deleteContact (contactEntry) {
        if (window.confirm('Are you sure you want to delete this contact?')) {
          contactService.remove(this, contactEntry._id).then((response) => {
            alert('Contact successfully deleted')
            this.$dispatch('reloadContact')
          }, () => {
            alert('Failed to delete contact')
          })
        }
      },
      showContact (contactEntry) {
        this.$router.go('/main/view/' + contactEntry._id)
      },
      editContact (contactEntry) {
        this.$router.go('/main/edit/' + contactEntry._id)
      }
    },
    events: {
      reloadContact () {
        this.loadContact()
      },
      filterContact (query) {
        contactService.filterList(this, query).then((response) => {
          this.$set('contactEntries', response.body)
        }, (err) => {
          this.error = err
        })
      }
    }
  }
</script>
