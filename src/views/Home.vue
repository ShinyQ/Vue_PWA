<template>
  <div class="row">
    <div class="col-lg-6 col-xs-12 media" v-for="(item, index) in news" :key="index">
      <img class="mr-3 mt-2" width="40%" :src="item.urlToImage" alt="Generic placeholder image">
      <div class="media-body">
        <h6 class="mt-0"><b>{{item.title}}</b></h6>
        {{item.description}}
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  mounted () {
    this.$store.dispatch('home/getNews')
  },
  computed: {
    news () {
      return this.$store.state.home.data.news
    }
  }
}
</script>
