<template>
  <div class="demo container">
    <h1>Who are your legislators?</h1>
    <div class="row">
      <div class="col-8 offset-2">
        <div class="input-group">
          <div class="custom-file">
            <input type="text" class="form-control" v-model="address" v-on:keyup.enter="requestOfficials()">
          </div>
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" v-on:click="requestOfficials()">Go</button>
          </div>
        </div>
      </div>
    </div>
    <br>
    <div class="list-group">
      <div class="list-group-item flex-column align-items-start" v-for="official in officials" v-bind:key="official.id">
        <div class="row">
          <div class="col-md-3">
            <img class="official-photo" v-bind:src="official.photo">
          </div>
          <div class="col-md-9">
            <h5 class="d-flex w-100 justify-content-between">
              <span>{{official.first_name + ' ' + official.last_name}}<span class="badge ml-2" v-bind:class="'badge' + partyColor(official.party)">{{official.party}}</span></span>
              <span class="badge badge-info">
                <span v-if="official.office_details.district.type.includes('STATE') && !official.office_details.district.type.includes('EXEC')">State </span>
                {{official.office_details.position}}
              </span>
            </h5>
            <br>
            <div v-bind:id="'bio-' + official.id" v-if="official.bio.length > 1">
              <div class="card">
                <div class="card-header py-1" v-bind:id="'heading-' + official.id">
                  <h5 class="mb-0">
                    <button class="btn btn-link text-left w-100" data-toggle="collapse" v-bind:data-target="'#collapse-' + official.id" aria-expanded="false">
                      Bio
                    </button>
                  </h5>
                </div>
                <div v-bind:id="'collapse-' + official.id" class="collapse" v-bind:aria-labelledby="'heading-' + official.id" v-bind:data-parent="'#bio-' + official.id">
                  <div class="row w-100 m-0">
                    <div class="col-12">
                      <p class="pt-2">{{official.bio[0]}}</p>
                    </div>
                  </div>
                </div>
              </div>
              <br>
            </div>
            <ul class="list-group">
              <list-element title="Address">
                <p class="m-0">
                  <span v-if="official.office_location.address_3">{{official.office_location.address_3}}, </span>
                  <span>{{official.office_location.address_1}}</span>
                  <span v-if="official.office_location.address_2">, {{official.office_location.address_2}}</span>
                  <span>, {{official.office_location.city}} {{official.office_location.state}} {{official.office_location.postal_code}}</span>
                </p>
              </list-element>
              <list-element v-if="official.office_location.fax_1" title="Fax">
                <p class="m-0">{{official.office_location.fax_1}}</p>
              </list-element>
              <list-element v-if="official.office_location.phone_1" title="Phone">
                <p class="m-0">{{official.office_location.phone_1}}</p>
              </list-element>
              <list-element v-for="social in official.socials" v-bind:key="social.identifier_type" v-bind:title="social.identifier_type">
                <p class="m-0">{{social.identifier_value}}</p>
              </list-element>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'

import ListElement from '../components/ListElement'

export default {
  name: 'Demo',
  components: {ListElement},
  data: function() {
    return {
      address: '5650 Braddock Rd',
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
      try {
        let response = await Axios.get(this.endpoint, {params, headers})
        this.officials = response.data.officials
      } catch(error) {
        console.error(error)
      }
    },
    partyColor(party) {
      let partyFormatted = party.toUpperCase()
      if (partyFormatted.includes('DEM')) {
        return '-primary'
      } else if (partyFormatted.includes('REPUB')) {
        return '-danger'
      } else {
        return '-success'
      }
    }
  }
}
</script>

<style>
.official-photo {
  max-width: 100%;
}
</style>
