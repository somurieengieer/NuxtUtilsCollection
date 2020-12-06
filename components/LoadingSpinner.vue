<template>
  <div v-if="isBusy" id="loading">
    <div class="spinner"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('loading', ['isBusy'])
  }
}
</script>

<style scoped>
/* ローディング画面 */
#loading {
  width: 100vw;
  height: 100vh;
  transition: all 1s;
  background-color: #0bd;

  /* 以下のコードを追加 */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  opacity: 0.5;
}
.spinner {
  width: 100px;
  height: 100px;
  margin: 200px auto;
  background-color: #fff;
  border-radius: 100%;
  animation: sk-scaleout 1s infinite ease-in-out;
}
/* ローディングアニメーション */
@keyframes sk-scaleout {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
