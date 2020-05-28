<template>
  <v-card class="user-info mx-auto pa-6 homefone" max-width="480">
    <v-card-title>
      <h4>{{ userForm.title }}</h4>
    </v-card-title>
    <v-card-text class="mx-0 px-0" width="100%">
      <div v-for="(field, fieldName) in fields" :key="fieldName">
        <InputWithValidation
              :label="field.placeholder"
              :fieldName="fieldName"
              :validator="field.validator"
              v-if="field.show && field.type === 'input-with-validation'"
        />
        <ComboBoxInput
              label="State*"
              :values="field.available"
              fieldName="state"
              v-if="field.show && fieldName === 'state'"
        />
        <InputPhoneNumber v-if="field.show && fieldName === 'phone'" />
        <ComboBoxInput
              :label="field.placeholder"
              :values="field.available"
              :fieldName="fieldName"
              v-if="field.show && fieldName === 'list'"
        />

        <!-- <InputWithValidation
              :label="field.placeholder"
              :fieldName="fieldName"
              :validator="field.validator"
              v-if="field.show && fieldName === 'number'"
        />

        <InputWithValidation
              :label="field.placeholder"
              :fieldName="fieldName"
              :validator="val => promocodes.indexOf(val) !== -1"
              v-if="field.show && fieldName === 'combo'"
        /> -->

        <InputMessage
              :label="field.placeholder"
              v-if="field.show && fieldName === 'message'"
        />
      </div>
    </v-card-text>

    <v-card-actions class="text-center">
      <v-btn
          color="buttons"
          dark
          class="submit-button px-auto mx-auto"
          @click="sendUserRequest"
      >
        {{ userForm.button }}
      </v-btn>
    </v-card-actions>

    <Popup :opened.sync="popupOpened" />
    <PopupError :opened.sync="popupErrorOpened" />
  </v-card>
</template>

<style scoped>

.user-info {
  width: 640px;
  padding-left: 80px;
  border-radius: 15px!important;
}
h4 {
  width: 100%;
  text-align: center;
  margin-top: 0;
  margin-bottom: 8px;
}

@media screen and (max-width: 600px) {
  .v-btn__content {
    font-size: 16px!important;
  }
  .user-info {
    width: 100%!important;
    /* padding-left: 40px; */
  }
}
@media screen and (max-width: 320px) {
  .user-info {
    width: 300px!important;
    padding-left: 0px;
    padding-right: 0px;
  }
}
</style>

<script>

import { mapState, mapActions } from 'vuex'

import InputWithValidation from '@/components/contact/InputWithValidation.vue'
import InputPhoneNumber from '@/components/contact/InputPhoneNumber.vue'
import ComboBoxInput from '@/components/contact/ComboBoxInput.vue'
import InputMessage from '@/components/contact/InputMessage.vue'

import Popup from '@/components/contact/Popup.vue'
import PopupError from '@/components/contact/PopupError.vue'

// const emailValidator = require('email-validator')

export default {
  name: 'UserContact',
  components: {
    InputPhoneNumber,
    InputWithValidation,
    ComboBoxInput,
    InputMessage,
    Popup,
    PopupError
  },
  data () {
    return {
      popupOpened: false,
      popupErrorOpened: false,
      fields: null
    }
  },
  computed: {
    ...mapState('content', ['userForm']),
    ...mapState('contact', ['contactFormFields'])
  },
  watch: {
    contactFormFields: {
      deep: true,
      handler (val) {
        this.fields = val
      }
    }
  },
  methods: {
    ...mapActions('contact', {
      sendEmail: 'SEND_EMAIL'
    }),
    getAvailability (propName) {
      // return this.userForm.fieldsToShow.indexOf(propName) !== -1
    },
    initFields () {
      this.$store.commit('contact/CLEAR_ALL_FIELDS')
    },

    async sendUserRequest () {
      if (await this.sendEmail()) this.popupOpened = true
      else this.popupErrorOpened = true
    }
  },
  mounted () {
    const fields = this.userForm.fieldsToShow
    this.selected = []
    for (const field in fields) {
      for (const prop in fields[field]) {
        this.$store.commit('contact/UPDATE_FIELD', {
          field,
          prop,
          value: fields[field][prop]
        })
      }
    }
  }
}

</script>
