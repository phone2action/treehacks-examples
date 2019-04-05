<template>
  <div class="demo">
    <h1>This is an about page</h1>
    <div class="row">
      <div class="col-6 offset-3">
        <div class="input-group">
          <div class="custom-file">
            <input type="text" class="form-control" v-model="address">
          </div>
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" v-on:click="requestOfficials()">Go</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'Demo',
  data: function() {
    return {
      address: '',
      officials: {},
      endpoint: 'https://fmrrixuk32.execute-api.us-east-1.amazonaws.com/hacktj/legislators',
      xAPIKey: ''
    }
  },
  methods: {
    async requestOfficials() {
      let params = {
        address: this.address
      }
      let headers = {
        'X-API-Key': this.xAPIKey
      }
      let response = await Axios.get(this.endpoint, params, headers)
      this.officials = response.data.officials
    }
  }
}
</script>

