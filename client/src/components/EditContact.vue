<template>
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-4">
        <label>Name</label>
        <input 
          type="text"
          class="form-control"
          v-model="contact.name"
          placeholder="Name"
          required="true"          
        />
      </div>
      <div class="col-sm-4">
        <label>Title</label>
        <input 
          type="text" 
          class="form-control"
          v-model="contact.title"
          placeholder="Title"
          required="true"
        />
      </div>
      <div class="col-sm-4">
        <label>Company</label>
        <input 
          type="text" 
          class="form-control"
          v-model="contact.company"
          placeholder="Company"
          required="true"
        />
      </div>       
    </div>    
    <div class="form-group">
      <div class="col-sm-6">
        <label>Phone</label>
        <input 
          type="text" 
          class="form-control"
          v-model="contact.phone"
          placeholder="Phone"
          required="true"
        />
      </div> 
      <div class="col-sm-6">
        <label>Email</label>
        <input 
          type="email" 
          class="form-control"
          v-model="contact.email"
          placeholder="Email"
          required="true"
        />
      </div>        
    </div> 
    <div class="form-group">
      <div class="col-sm-12">
        <label>Address</label>
        <input 
          type="text" 
          class="form-control"
          v-model="contact.address"
          placeholder="Address"
          required="true"
        />
      </div>         
    </div>    
    <button class="btn btn-primary" @click="save()">Save</button>
    <button v-link="'/main'" class="btn btn-danger">Cancel</button>    
    <hr>
  </div>

</template>

<script>
  import contactService from '../services/contact'
  export default {
    data () {
      return {
        contact: {
          name: '',
          title: '',
          company: '',
          phone: '',
          email: '',
          address: ''
        }
      }
    },
    route: {
      data ({to: {params: {id}}}) {
        return contactService.load(this, id).then((response) => {
          return {contact: response.body}
        }, () => {
          alert('Error load contact')
        })
      }
    },
    methods: {
      save () {
        let contact = this.contact
        // Do save
        contactService.edit(this, contact._id, contact).then((response) => {
          alert('Contact Save')
          this.$dispatch('reloadContact')
          this.$router.go('/main')
        }, () => {
          alert('Failed to edit contact')
        })
        this.contact = {}
      }
    }
  }
</script>