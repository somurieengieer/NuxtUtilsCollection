<template>
    <v-container class="px-0" fluid>
      <!-- ma-1 -> m: margin, a: 全方向, 1: 1px -->
      <v-checkbox v-for="(process, i) in processes" 
        v-model="process.value"
        :key="i"
        :label="process.label"
        v-on:change="onChangeCheckBox()"
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

<script lang="ts">
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

export type ProcessItemType = {
  label: string,
  value: boolean,
  processes: (ary: string[]) => string[],
}
const processItems: ProcessItemType[] = [
  {
    label: 'ソート',
    value: true,
    processes: function(ary: string[]) { return ary },
  },
  {
    label: '重複行を削除',
    value: true,
    processes: function(ary: string[]) { return ary },
  }
]

type Data = {
  processes: ProcessItemType[]
}
type Methods = {
  onChangeCheckBox: (event: any) => void
  setActiveProcesses: () => void
}

type Computed = {
  execProcesses: number
  activeProcesses: ProcessItemType[]

}
type Props = {
  activeProcessList: ((text: string) => string)[]
}

const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  created() {
    // this.canvas = process.browser
  },
  props: {
    activeProcessList: {
      type: Object,
      required: true,
    },
      // type: any[],
      // type: ((text: string) => string)[],
      // required: true,
      // default: ''
    // },
  },
  data() {
    return {
      processes: processItems
    }
  },
  methods: {
    onChangeCheckBox(event: any): void {
      console.log('called onChangeInput')
      this.$emit("updated", this.activeProcesses)
      // this.commitChange(event.target.value)
    },
    setActiveProcesses(): void {
      // this.$parent.activeProcessList = this.activeProcesses()
    },
  },
  computed: {
    execProcesses(): number {
      return 3
    },
    activeProcesses(): ProcessItemType[] {
      return this.processes.filter(p => p.value)
    }
  }
}


export default options
</script>

