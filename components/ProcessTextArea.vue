<template>
  <v-sheet
    elevation="24"
    class="pa-12"
  >
    <v-textarea
      v-model="value"
      :clearable=true
      :label="label"
      :no-resize=true
      :placeholder="placeholder"
      :rounded="'rounded'"
      :rows="4"
      :outlined="true"
      v-on:change="onChangeText()"
    ></v-textarea>
  </v-sheet>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        required: false,
        default: ''
      },
      label: {
        type: String,
        required: false,
        default: 'ここに入力してください'
      },
      placeholder: {
        type: String,
        required: false,
        default: ''
      }
    },
    methods: {
      onChangeText() {
        console.log("call onChangeText")
        this.$emit("input", this.value)
      },
    }
  }
</script>