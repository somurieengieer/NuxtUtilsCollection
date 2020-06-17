<template>
  <v-app>
    <div class="appContainer">
      <div class="naviContainer">
        <side-menu/>
      </div>
      <div class="mainContainer">
        <nuxt />
      </div>
    </div>
  </v-app>
</template>

<script>
import SideMenu from '@/components/SideMenu'

export default {
  name: 'app',
  components: {
    SideMenu
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.app {
  max-width: 1440px;
  margin: 0 auto;
}

.appContainer {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: auto
}

.naviContainer {
  grid-column: 1/2;
  position: fixed;
  top: 0;
  overflow-y: auto;
  width: 240px;
  height: 100%;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
  overscroll-behavior: contain;
}

.mainContainer {
  grid-column: 2/3;
  padding: 30px;
}

</style>
