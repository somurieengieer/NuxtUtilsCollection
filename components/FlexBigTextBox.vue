<template>
  <textarea :rows="rows" :cols="cols" 
  @input="$emit('input', $event.target.value)"
  class="textarea" >
  {{ value }}
  </textarea>
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
    value: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped>
.textarea {
  border: 1px solid #AAA;
}
</style>