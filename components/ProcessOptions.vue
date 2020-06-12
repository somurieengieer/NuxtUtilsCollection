<template>
    <v-container class="px-0" fluid>
      <!-- ma-1 -> m: margin, a: 全方向, 1: 1px -->
      <v-checkbox v-for="(process, i) in processes" 
        v-model="process.value"
        :key="i"
        :label="process.label"
        />
      <!-- <v-checkbox
        v-model="sort"
        label="ソート"
      ></v-checkbox>
      <v-checkbox
        v-model="distinct"
        class="ma-1" 
        label="重複行を削除"
      ></v-checkbox> -->
    </v-container>
</template>

<script>
  const processItems = [
    {
      label: 'ソート',
      value: true,
      processes: function(ary) { return ary },
    },
    {
      label: '重複行を削除',
      value: true,
      processes: function(ary) { return ary },
    }
  ]
  export default {
    data () {
      return {
        processes: processItems
      }
    },
  }
</script>

