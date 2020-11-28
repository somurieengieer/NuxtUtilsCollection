<template>
  <div>
    <content-header :title="'二重翻訳'"
      :description="'翻訳・再翻訳するサービスです。'" />

    <div class="flexParent">
      <flex-big-text-box class="flexChild" title="翻訳する日本語" :value="originText" @input="originText = $event" />
    </div>
    <div>
      <button class="normalButton" @click="translate">翻訳</button>
    </div>
    <div class="flexParent">
      <flex-big-text-box class="flexChild" title="翻訳された英語" :disabled="true" :value="translator.translatedText" />
      <flex-big-text-box class="flexChild" title="再翻訳された日本語" :disabled="true" :value="translator.reTranslatedText" />
    </div>
  </div>
</template>

<script>
import ContentHeader from '@/components/ContentHeader.vue'
import FlexBigTextBox from '@/components/FlexBigTextBox.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    ContentHeader,
    FlexBigTextBox
  },
  data: function() {
    return {
      originText: '翻訳したい文章をここに入力してください。'
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
.flexParent {
    display: flex;
    justify-content: flex-start;
}
.flexChild {
   flex-grow: 1;
}
</style>
