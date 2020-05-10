<template>
  <v-app light>
    <AppHeader :page="page"/>
    <v-container fluid class="pa-0 my-0 mx-auto" style="max-width: 1000px">
      <Top />
      <v-row class="mx-0 px-0 my-12" align="center" justify="space-between">
        <v-col cols="12" md="6">
          <v-card flat width="100%" max-width="450" class="transparent">
            <v-img
                  :src="require('@/assets/pictures/man_with_building.svg')"
                  max-width="420"
                  contain
                  position="left"
            ></v-img>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" class="mx-0 px-0">
          <section id="contact" class="mx-auto">
            <div class="base-title">
              <a href="#contact" class="core-goto"></a>
                <UserContact />
            </div>
          </section>
        </v-col>
      </v-row>

      <section id="benefits" class="mx-auto">
        <div class="base-title">
          <a href="#benefits" class="core-goto"></a>
          <Benefits />
        </div>
      </section>

      <!-- <section id="testimonials" class="mx-auto">
        <div class="base-title">
          <a href="#testimonials" class="core-goto"></a>
          <Testimonials />
        </div>
      </section> -->

      <section id="faq" class="mx-auto">
        <div class="base-title">
          <a href="#faq" class="core-goto"></a>
          <FAQ />
        </div>
      </section>

      <!-- <section id="stay-connected" class="mx-auto">
        <div class="base-title">
          <a href="#stay-connected" class="core-goto"></a>
          <StayConnected />
        </div>
      </section> -->

      <section id="articles" class="mx-auto">
        <div class="base-title">
          <a href="#articles" class="core-goto"></a>
          <Articles />
        </div>
      </section>

      <section id="footer" class="mx-auto">
        <div class="base-title">
          <a href="#footer" class="core-goto"></a>
          <Footer />
        </div>
      </section>

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
.container {
  padding: 0!important;
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

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #83332C;
}
::-webkit-scrollbar-thumb {
  background: #E15240;
}
::-webkit-scrollbar-thumb:hover {
  background: #E5E5E5;
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
    document.title = 'DGtek'
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
  watch: {
    page (val) {
      console.log(val)
    }
  },
  methods: {
    onResize () {
      this.viewport.width = window.innerWidth
      this.viewport.height = window.innerHeight
    }
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
