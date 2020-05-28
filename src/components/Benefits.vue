<template>
    <v-container fluid class="homefone">
      <v-row align="center">
        <v-col cols="12" md="5">
          <v-card flat class="transparent mx-auto" width="100%">
            <v-card-text class="text-center text-md-left">
              <h2>{{ benefits.header }}</h2>
            </v-card-text>
            <v-card-text>
              <p>{{ benefits.text }}</p>
            </v-card-text>
            <v-card-text class="text-center text-md-left">
              <v-btn
                  color="buttons"
                  dark
                  height="48"
                  min-width="180"
                  class="submit-button px-auto mx-auto"
                  @click="$emit('update:page', benefits.goto)"
              >
                  {{ benefits.button }}
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="7">
          <v-card flat class="d-flex flex-wrap transparent">
            <v-row align="center" class="mx-auto">
              <v-col cols="3">
                <!-- <v-card-text class="mx-auto text-center" width="50"> -->
                  <v-img :src="benefits.items[0].icon" contain class="benefit-image mx-auto"></v-img>
                <!-- </v-card-text> -->
              </v-col>
              <v-col cols="9">
                <v-card flat class="card--offer transparent text-center mx-auto" width="100%">
                  <v-card-title>
                    <h3>{{ benefits.items[0].title }}</h3>
                  </v-card-title>
                  <v-card-text>
                    <p>{{ benefits.items[0].text }}</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <v-row align="center" class="mx-auto">
              <v-col cols="3">
                <!-- <v-card-text class="mx-auto text-center" width="50"> -->
                  <v-img :src="benefits.items[1].icon" contain class="benefit-image mx-auto"></v-img>
                <!-- </v-card-text> -->
              </v-col>
              <v-col cols="9">
                <v-card flat class="card--offer transparent text-center mx-0" width="100%">
                  <v-card-text class="text-left">
                    <h3>{{ benefits.items[1].title }}</h3>
                  </v-card-text>
                  <v-card-text class="text-left">
                    <p>{{ benefits.items[1].text }}</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <v-row align="center" class="mx-auto">
              <v-col cols="3">
                <!-- <v-card-text class="mx-auto text-center" width="50"> -->
                  <v-img :src="benefits.items[2].icon" contain class="benefit-image mx-auto"></v-img>
                <!-- </v-card-text> -->
              </v-col>
              <v-col cols="9">
                <v-card flat class="card--offer transparent text-center mx-auto" width="100%">
                  <v-card-title>
                    <h3>{{ benefits.items[2].title }}</h3>
                  </v-card-title>
                  <v-card-text>
                    <p>{{ benefits.items[2].text }}</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
h3, p {
  width: 100%;
  text-align: left;
  color: #000;
}
.card--offer {
  /* width: 240px; */
}
.benefit-image {
  width: 80px;
}

@media (max-width: 420px), (max-height: 420px) {
  .card--offer {
    width: 90%!important;
  }
}
</style>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Benefits',
  props: ['page'],
  data () {
    return {
      contact: false
    }
  },
  computed: {
    ...mapState('content', ['benefits'])
  },
  watch: {
    contact (val) {
      if (!val) return
      this.$emit('update:page', 'contact')
      this.contact = false
    }
  }
}
</script>
