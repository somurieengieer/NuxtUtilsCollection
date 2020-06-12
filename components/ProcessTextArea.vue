<template>
  <v-sheet
    elevation="24"
    class="pa-12"
  >
    <v-textarea
      v-model="value"
      :clearable=true
      :label="'右の値Label'"
      :no-resize=true
      :placeholder="'ここに入力してください'"
      :rounded="'rounded'"
      :rows="4"
      :outlined="true"
    ></v-textarea>
    <div class="mt-12 text-center">
      Value: {{ value }}
    </div>
  </v-sheet>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        required: false,
        default: ''
      }
    }
  }
</script>