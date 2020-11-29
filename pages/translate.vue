<template>
  <div>
    <content-header
      :title="'二重翻訳'"
      :description="'翻訳・再翻訳するサービスです。'"
    />

    <div>
      <input type="radio" id="ja" value="ja" v-model="originLanguage" />
      <label for="ja">日本語→英語</label>
      <input type="radio" id="en" value="en" v-model="originLanguage" />
      <label for="en">英語→日本語</label>
    </div>

    <div class="flexParent">
      <flex-big-text-box
        class="flexChild"
        :title="`翻訳する${originLabel}`"
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
        :disabled="true"
        :value="translator.translatedText"
      />
      <flex-big-text-box
        class="flexChild"
        :title="`再翻訳された${originLabel}`"
        :disabled="true"
        :value="translator.reTranslatedText"
      />
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
      originText: '翻訳したい文章をここに入力してください。',
      originLanguage: 'ja'
    }
  },
  computed: {
    ...mapGetters({ translator: 'translator/texts' }),
    // 以下の書き方でもOK
    // translatedText: function() {
    // return this.$store.getters['translator/translatedText'] // ↓こっちでもOK
    // return this.$store.state.translator.translatedText
    // }
    originLabel: function() {
      return this.originLanguage === 'ja' ? '日本語' : '英語'
    },
    targetLabel: function() {
      return this.originLanguage !== 'ja' ? '日本語' : '英語'
    }
  },
  methods: {
    translate: function() {
      this.$store.dispatch('translator/translate', {
        originText: this.originText,
        originLanguage: this.originLanguage
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
