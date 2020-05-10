/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {
  news: null,
  content: null,
  contentEndpoint: 'https://dka.dgtek.net/api/frontend/posts',
  newsEndpoint: 'https://dka.dgtek.net/api/frontend/news',
  defaultPicture: '/img/default-article-picture.jpg',
  defaultAvatar: '/img/default-avatar.png'
}

const mutations = {
  BLOG_NEWS: (state, payload) => { state.news = payload },
  BLOG_CONTENT: (state, content) => { state.content = JSON.parse(JSON.stringify(content)) }
}

const actions = {
  async GET_BLOG_NEWS ({ state, commit }) {
    const response = (await (await fetch(`${state.newsEndpoint}`)).json()).data
    commit('BLOG_NEWS', response)
    return state.news
  },

  async GET_BLOG_CONTENT ({
    state, getters, commit, dispatch
  }) {
    const response = await (await fetch(getters.contentEndpoint)).json()
    const content = response.data.map(
      post => ({
        date: post.published_at,
        previewTitle: post.title,
        // author: post.author,
        imageSrc: post.logo || getters.defaultPicture,
        avatar: post.logo_user || this.defaultAvatar,
        text: post.text,
        id: post.id
      })
    )
    commit('BLOG_CONTENT', content.reverse())
    return state.content
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
