<template>
  <div class="root">
    <div>
      <span>{{ title }}</span>
    </div>
  <textarea :rows="rows" 
  @input="$emit('input', $event.target.value)"
  :placeholder="title"
  :disabled="disabled"
  class="textarea" >
  {{ value }}
  </textarea>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default {
  data: function() {
    return {

    rows: 8,
    cols: 20,
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    }
  }
}
</script>

<style scoped>
.root {
  padding: 0.4em;
}
.textarea {
  border: 1px solid #AAA;
  width: 100%;
}
</style>