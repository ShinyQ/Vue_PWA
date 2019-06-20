<template>
  <div class="row">
    <div v-for="(item, index) in news" :key="index">
      <div class="col-md-12 card" style="max-height:500px; margin-bottom:5%; padding:2%">
        <img class="image" style="max-width:500px; max-height:300px" :src="item.urlToImage" alt="Image News"><br>
        <div>
          <h3><b>{{item.title}}</b></h3>
          {{item.description}}
        </div>
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
<style>
  .image {
        display:block;
        margin-left: auto;
        margin-right: auto;
    }
</style>
