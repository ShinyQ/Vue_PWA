import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const Home = {
  namespaced: true,
  state: {
    data: {
      apiKey: 'f8fd87d48cf746e0a817a4f7a21bafe4',
      news: []
    }
  },
  actions: {
    getNews ({ state }) {
      axios.get(`https://newsapi.org/v2/everything?q=social&sortBy=publishedAt&apiKey=${state.data.apiKey}`)
        .then(response => {
          state.data.news = response.data.articles
        })
    }
  }
}

export default new Vuex.Store({
  modules: {
    home: Home
  }
})
