<template>
  <h2>Filter</h2>
  <hr>
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
    <button class="btn btn-primary" @click="filter()">Search</button>
    <button v-link="'/main'" class="btn btn-danger">Cancel</button>    
    <hr>
  </div>

</template>

<script>
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
    methods: {
      filter () {
        let contact = this.contact
        // Build query
        var query = {}
        for (var index in contact) {
          var attr = contact[index]
          if (attr !== '') {
            query[index] = {$regex: attr}
          }
        }
        this.$dispatch('filterContact', query)
      }
    }
  }
</script>