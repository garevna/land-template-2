<template>
  <v-container fill-height>
    <v-card flat class="transparent mx-auto" max-width="900">
      <v-card-title><h2>Stay connected</h2></v-card-title>
      <v-card-text>
        <p>Send us an enquiry and a member of our team will get back to you as soon as possible to answer any questions you may have or guide you through the connection process</p>
      </v-card-text>
      <v-row align="center" justify="center" class="py-3 py-md-12">
        <v-col cols="12">
          <v-row align="center" justify="center">
            <v-col cols="12" lg="4">
              <v-text-field
                    placeholder="Name*"
                    outlined
                    filled
                    height="48"
                    v-model="name"
                    color="#656565"
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="4">
              <v-text-field
                    placeholder="Email*"
                    outlined
                    filled
                    height="48"
                    v-model="email"
                    :color="emailColor"
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="4">
              <v-text-field
                    placeholder="Phone*"
                    outlined
                    filled
                    height="48"
                    v-model="phone"
                    color="#656565"
              ></v-text-field>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12">
            <v-textarea
              filled
              placeholder="Your Message"
              auto-grow
              v-model="message"
              color="#656565"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row align="center" justify="center" class="py-3">
          <v-col cols="12" class="submit">
            <v-btn
              dark
              class="buttons"
              width="220"
              height="48"
              @click="sendData"
            >Submit</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <Popup :opened.sync="popupOpened" />
  </v-card>
</v-container>
</template>

<style scoped>
h2 {
  width: 100%;
  text-align: center;
}
p {
  font-weight: bold;
  width: 100%;
  text-align: center;
  color: #757575;
}

@media screen and (max-width: 900px) {
  .submit {
    width: 100%;
    text-align: center;
  }
  .v-text-field.v-text-field--enclosed {
    margin-bottom: -32px!important;
  }
}
</style>

<script>

import Popup from '@/components/Popup.vue'

const emailValidator = require('email-validator')

export default {
  components: {
    Popup
  },
  data () {
    return {
      name: '',
      phone: '',
      email: '',
      message: '',
      popupOpened: false,
      emailError: false,
      emailColor: '',
      normalColor: '#454545',
      errorColor: '#FF0E00'
    }
  },
  watch: {
    email (val) {
      this.emailError = !emailValidator.validate(val)
      this.emailColor = this.emailError ? this.errorColor : this.normalColor
    }
  },
  methods: {
    initFields () {
      ['name', 'phone', 'email', 'message'].forEach((item) => { this[item] = '' })
      this.emailError = false
      this.emailColor = this.normalColor
    },
    async sendData () {
      if (this.emailError) return
      this.popupOpened = true
      await (await fetch('https://dka.dgtek.net/api/frontend/mail', {
        method: 'POST',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          phone: this.phone,
          subject: 'DGTek',
          message: this.message
        })
      })).json()

      this.initFields()
    }
  },
  mounted () {
    this.initFields()
  }
}
</script>
