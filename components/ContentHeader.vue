<template>
  <div>
    <v-container fluid fill-height>
    <v-card
      class="mx-auto"
      width="100%"
    >
      <v-card-text>
        <div>
          <p class="display-1 text--primary">
            {{ title }}
          </p>
        </div>
        <div class="text--primary">
          {{ description }}
        </div>
      </v-card-text>
    </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  }
</script>

<style>
</style>