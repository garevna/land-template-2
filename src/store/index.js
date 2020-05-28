import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    host: 'https://dka.dgtek.net',
    frontend: 'https://dka.dgtek.net/api/frontend',
    resellers: 'https://dka.dgtek.net/api/frontend/resellers',
    faqEndpoint: 'https://dka.dgtek.net/api/frontend/faqs',
    // socket: 'wss://ws-with-routes.glitch.me',
    mail: 'https://dka.dgtek.net/api/frontend/mail',
    officeAddress: '15/105 Cochranes Road Moorabbin VIC',
    officePhone: '1800 359 602',
    officeEmail: 'info@dgtek.net',
    client: null,
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight
  },
  modules,

  getters: {
    // clientInfoURL: state => (`${state.hostForClientInfo}?api-key=${state.keyForClientInfo}`)
  },

  mutations: {
    SET_LARGE_BUTTON: (state, val) => {
      state.buttonLarge = val
    },
    SET_VIEWPORT: (state) => {
      state.viewport = window.innerWidth
    }
  },

  actions: {

    async CONTACT_MESSAGE ({ state }, data) {
      const response = await (await fetch(state.mail, {
        method: 'POST',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: data.name || data.username,
          email: data.email,
          phone: data.phone,
          message: data.message
        })
      })).json()

      return response.status
    }
  }
})
