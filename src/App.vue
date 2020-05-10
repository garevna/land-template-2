<template>
  <v-app light>
    <AppHeader :page="page"/>
    <v-container fluid class="pa-0 my-0 mx-auto" style="max-width: 1000px">
      <Top />
      <v-row justify="center" class="pa-0 ma-0">
        <v-sheet
          width="100%"
          color="homefone"
          tile
          class="mx-auto"
        >
          <v-row class="mx-0 px-0" align="center">
            <v-col cols="12" md="6" class="aside-col">
              <!-- <v-card
                      flat
                      class="aside-card transparent"
              >
                <Aside />
              </v-card> -->
              <v-card flat width="100%" max-width="500" class="transparent">
                <v-img :src="require('@/assets/pictures/man_with_building.svg')" max-width="500" contain class="mx-auto"></v-img>
              </v-card>
            </v-col>
            <v-col cols="12" md="6" class="mx-0 px-0">
              <v-card flat class="transparent mx-0">
                <v-img src="@/img/map-picture.svg" height="800" contain style="opacity:0.2;"></v-img>
                <v-card
                        :width="viewport.width > 600 ? 450 : 340"
                        flat
                        class="user-contact transparent mx-auto pa-0"
                        style="margin-bottom: 120px"
                >
                  <UserContact/>
                </v-card>
              </v-card>
            </v-col>
          </v-row>
        </v-sheet>
      </v-row>
      <v-row class="mx-0 px-0">
        <Benefits />
      </v-row>
      <!-- <v-row class="mx-0 px-0">
        <Testimonials />
      </v-row> -->
      <v-row class="mx-0 px-0">
        <FAQ/>
      </v-row>
      <!-- <v-row class="mx-0 px-0">
        <StayConnected/>
      </v-row> -->
      <v-row class="mx-0 px-0">
        <Articles />
      </v-row>
      <v-row>
        <section id="footer" class="mx-auto">
        <div class="base-title">
          <a href="#footer" class="core-goto"></a>
          <Footer />
        </div>
      </section>
      </v-row>
    </v-container>
  </v-app>
</template>

<style>

html, body {
  margin: 0;
  padding: 0;
}
body {
  background: #E5E5E5;
  overflow-x:hidden;
}

.theme--light.v-application {
  background: #FBFBFB!important;
}

.user-contact {
  margin-top: -720px;
}

h1, h2, h3, h4, h5, p {
  font-family: 'Gilroy';
  letter-spacing: 0.02rem;
  line-height: 150%;
  font-style: normal;
  color: #000;
}

h1 {
  font-size: 54px;
  font-weight: 900;
}
h2 {
  font-size: 42px;
  font-weight: 600;
}
h3 {
  font-size: 24px;
  font-weight: 600;
}
h4 {
  font-size: 24px;
  font-weight: bold;
}
h5 {
  font-size: 24px;
  font-weight: medium;
}
p {
  font-weight: normal;
  font-size: 18px;
  color: #665566;
}

@media screen and (max-width: 900px) {
  h1 {
    font-size: 36px;
  }
  h2 { font-size: 28px; }
  h3 { font-size: 24px; }
  h4, h5 { font-size: 18px; }
  p { font-size: 16px; }
}

@media screen and (max-width: 360px) {
  p { font-size: 14px; }
}

.v-card__title, h1, h4, h3, h4, h5, p {
  word-break: normal!important;
}

</style>

<style scoped>

@media screen and (max-width: 900px) {
  h1, h4 { text-align: center; }
  .header-card {
    margin-left: 0!important;
    margin-top: 90px;
    width: 100%;
  }
  .picture {
    width: 50%;
    right: 25%;
    top: -100px;
  }
}
@media screen and (max-width: 599px) {
  h1, h4 { text-align: center; }
  .header-card {
    margin-left: 0!important;
    margin-top: 100px;
    width: 100%;
  }
  .picture {
    width: 80%;
    right: 10%;
    top: -100px;
  }
}

@media screen and (max-width: 320px) {
  h1, h4 { width: 100%; text-align: center; }
  .header-card {
    margin-left: 0px;
    margin-top: 130px;
  }
  .picture {
    width: 80%;
    right: 10%;
    top: -50px;
  }
}

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #FF0E00;
}
::-webkit-scrollbar-thumb {
  background: #E5E5E5;
}
::-webkit-scrollbar-thumb:hover {
  background: #72BF44;
}

@media screen and (max-width: 600px) {
  .user-contact {
    margin-top: -900px;
  }
  .aside-col {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .aside-card {
    width: 100%;
    margin-left: -10px;
    padding: 0;
  }
}

@media screen and (max-width: 320px) {
  .user-contact {
    margin-top: -900px;
  }
  .aside-col {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .aside-card {
    width: 100%;
    margin-left: -10px;
    padding: 0;
  }
}
</style>

<script>

import AppHeader from '@/components/AppHeader.vue'
import Top from '@/components/Top.vue'
// import Aside from '@/components/Aside.vue'
import UserContact from '@/components/UserContact.vue'
import Benefits from '@/components/Benefits.vue'
// import Testimonials from '@/components/Testimonials.vue'
import FAQ from '@/components/FAQ.vue'
// import StayConnected from '@/components/StayConnected.vue'
import Articles from '@/components/Articles.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  created () {
    document.title = '...'
  },
  components: {
    AppHeader,
    Top,
    // Aside,
    UserContact,
    Benefits,
    // Testimonials,
    FAQ,
    // StayConnected,
    Articles,
    Footer
  },
  data: function () {
    return {
      page: 0,
      cards: null,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }
  },
  computed: {
    headerHeight () {
      return this.viewport.width >= 1440 ? 810 : 770
    }
  },
  watch: {
    page (val) {
      console.log(val)
    }
  },
  methods: {
    clickHandler (url) {
      window.open(url)
    },
    onResize () {
      this.viewport.width = window.innerWidth
      this.viewport.height = window.innerHeight
    }
  },
  beforeMount () {
    //
  },
  mounted () {
    this.$store.dispatch('blog/GET_BLOG_NEWS')
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  beforeDestroy () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  }
}
</script>
