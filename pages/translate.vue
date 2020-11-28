<template>
  <div>
    <flex-big-text-box :value="originText" @input="originText = $event" />
    <flex-big-text-box :value="translator.translatedText" />
    <flex-big-text-box :value="translator.reTranslatedText" />
    <div>
      <button class="normalButton" @click="translate">Translate</button>
    </div>
  </div>
</template>

<script>
import FlexBigTextBox from '@/components/FlexBigTextBox.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    FlexBigTextBox
  },
  data: function() {
    return {
      originText: '初期値はこんにちは'
    }
  },
  updated: function() {
    console.log('updated')
  },
  computed: {
    ...mapGetters({ translator: 'translator/texts' })
    // 以下の書き方でもOK
    // translatedText: function() {
    // return this.$store.getters['translator/translatedText'] // ↓こっちでもOK
    // return this.$store.state.translator.translatedText
    // }
  },
  methods: {
    translate: function() {
      console.log('this', this)
      this.$store.dispatch('translator/translate', {
        originText: this.originText
      })
    }
  }
}
</script>

<style scoped>
.normalButton {
  background-color: #ccccff;
  padding: 0.4em 1em;
  border-radius: 10px;
}
</style>
