<template>
  <v-container fluid>
    <v-row akign="center" justify="space-around" class="mx-auto">
      <!-- <v-col cols="12" sm="6" md="4" lg="2"> -->
      <v-card flat width="100%" class="transparent mx-auto" v-if="articles">
        <v-card-text class="text-center my-8">
          <h2>
            {{ blog.header }}
          </h2>
        </v-card-text>
      </v-card>
        <v-card
            width="300"
            height="320"
            v-for="article in articles"
            :key="article.id"
            class="pa-8 ma-2"
            hover
        >
          <v-img
                :src="article.logo"
                width="50%"
                height="70"
                contain
                position="left"
                @click="$openExternalLink(article.ref)"
          ></v-img>
          <v-card-text>
            <h5 @click="$openExternalLink(article.ref)">
              {{ article.title }}
            </h5>
          </v-card-text>
          <v-card-text>
            <p @click="$openExternalLink(article.ref)">
              <small>
                {{ article.published_at }}
              </small>
            </p>
          </v-card-text>
        </v-card>
      <!-- </v-col> -->
    </v-row>
  </v-container>
</template>

<style scoped>
  h5 {
    margin: 16px 0;
    font-size: 16px;
  }
  p {
    position: absolute;
    bottom: 16px;
  }
</style>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Articles',
  data () {
    return {
      //
    }
  },
  computed: {
    ...mapState('content', ['blog']),
    ...mapState('blog', ['news']),
    articles () {
      if (!this.news) return null
      const articles = this.news.filter(article => this.blog.articles.indexOf(article.id) !== -1)
      return articles
    }
  }
}
</script>
