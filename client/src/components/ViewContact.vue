<template>
    <div class="row">
        <table class="table">
            <tr>
                <td>
                    Name
                </td>
                <td>
                    {{contact.name}}
                </td>
            </tr>
            <tr>
                <td>
                    Title
                </td>
                <td>
                    {{contact.title}}
                </td>
            </tr>
            <tr>
                <td>
                    Company
                </td>
                <td>
                    {{contact.company}}
                </td>
            </tr>
            <tr>
                <td>
                    Email
                </td>
                <td>
                    {{contact.email}}
                </td>
            </tr>
            <tr>
                <td>
                    Phone
                </td>
                <td>
                    {{contact.phone}}
                </td>
            </tr>
            <tr>
                <td>
                    Address
                </td>
                <td>
                    {{contact.address}}
                </td>
            </tr>
        </table>
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
    }
  }
</script>