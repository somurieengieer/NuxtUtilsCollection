<template>
  <div>
    <content-header
      :title="'二重翻訳'"
      :description="'翻訳・再翻訳するサービスです。'"
    />

    <div class="radioArea">
      <input id="en" v-model="originLanguage" type="radio" value="en" />
      <label for="en">英語→日本語</label>
      <input id="ja" v-model="originLanguage" type="radio" value="ja" />
      <label for="ja">日本語→英語</label>
    </div>

    <div class="flexParent">
      <flex-big-text-box
        class="flexChild"
        :title="`翻訳したい文章をここに入力してください。`"
        :value="originText"
        @input="originText = $event"
      />
    </div>
    <div>
      <button class="normalButton" @click="translate">翻訳</button>
    </div>
    <div class="flexParent">
      <flex-big-text-box
        class="flexChild"
        :title="`翻訳された${targetLabel}`"
        :disabled="false"
        :value="translator.translatedText"
      />
      <flex-big-text-box
        class="flexChild"
        :title="`再翻訳された${originLabel}`"
        :disabled="false"
        :value="translator.reTranslatedText"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ContentHeader from '@/components/ContentHeader.vue'
import FlexBigTextBox from '@/components/FlexBigTextBox.vue'

export default {
  components: {
    ContentHeader,
    FlexBigTextBox
  },
  data() {
    return {
      originText: '',
      originLanguage: 'en'
    }
  },
  computed: {
    ...mapGetters({ translator: 'translator/texts' }),
    // 以下の書き方でもOK
    // translatedText: function() {
    // return this.$store.getters['translator/translatedText'] // ↓こっちでもOK
    // return this.$store.state.translator.translatedText
    // }
    originLabel() {
      return this.originLanguage === 'ja' ? '日本語' : '英語'
    },
    targetLabel() {
      return this.originLanguage !== 'ja' ? '日本語' : '英語'
    }
  },
  methods: {
    translate() {
      this.$store.dispatch('translator/translate', {
        originText: this.originText,
        originLanguage: this.originLanguage
      })
    }
  }
}
</script>

<style scoped>
.radioArea {
  margin: 0.2em 0.5em;
}
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
