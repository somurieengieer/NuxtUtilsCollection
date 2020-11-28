<template>
<textarea :rows="rows" :cols="cols" v-model="text" class="textarea">
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
    text: {
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