<template>
  <div class="root">
    <div>
      <span>{{ title }}</span>
      <common-button :name="'コピー'" :size="'small'" @click="copyText" />
    </div>
    <textarea
      ref="textElm"
      :value="value"
      :rows="rows"
      :placeholder="title"
      :disabled="disabled"
      class="textarea"
      @input="$emit('input', $event.target.value)"
    >
    </textarea>
  </div>
</template>

<script>
import CommonButton from '@/components/CommonButton.vue'
export default {
  components: {
    CommonButton
  },
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      rows: 8,
      cols: 20
    }
  },
  methods: {
    copyText() {
      this.$refs.textElm.select()
      document.execCommand('Copy')
    }
  }
}
</script>

<style scoped>
.root {
  padding: 0.4em;
}
.textarea {
  border: 1px solid #aaa;
  width: 100%;
}
</style>
