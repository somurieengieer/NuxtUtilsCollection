<template>
  <button :class="buttonStyle" @click="$emit('click')">
    {{ name }}
  </button>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: false,
      default: 'middle'
    }
  },
  computed: {
    buttonStyle() {
      if (this.size === 'big') return 'big'
      if (this.size === 'small') return 'small'
      return 'normal'
    }
  }
}
</script>

<style scoped lang="scss">
.small {
  border: 1px solid #ccccff;
  padding: 0.2em 0.6em;
  border-radius: 8px;
  &:hover {
    background-color: #eeeeff;
  }
}
.normal {
  background-color: #ccccff;
  padding: 0.4em 1em;
  border-radius: 10px;
}
.big {
  background-color: #ccccff;
  padding: 0.6em 1.2em;
  border-radius: 10px;
}
</style>
