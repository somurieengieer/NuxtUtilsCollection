<template>
  <div class="container">
    <div>
      <h1 class="title">
        Text Processor
      </h1>
      <h2 class="subtitle">
        Powerful Processor to make your work easy
      </h2>
      <br />
      <h2 class="subtitle">
        テキストの加工・比較をするサービスです<br />
        サイドメニューからサービスを選んでください
      </h2>
      <!-- <div class="links">
        <nuxt-link ="@/duplicate"
          class="button--grey">
          duplicate check nuxt
        </nuxt-link>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {
  }
})
</script>

<!-- scopedでスコープ指定しないと他の資源の同一class名の要素にも影響する -->
<style scoped> 
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
