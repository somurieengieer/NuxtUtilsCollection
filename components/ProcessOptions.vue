<template>
  <v-container class="px-0" fluid>
    <!-- ma-1 -> m: margin, a: 全方向, 1: 1px -->
    <v-checkbox
      v-for="(process, i) in processes"
      :key="i"
      v-model="process.value"
      :label="process.label"
      @change="onChangeCheckBox()"
    />
  </v-container>
</template>

<script lang="ts">
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

export type ProcessItemType = {
  label: string
  value: boolean
  processes: (ary: string) => string
}
const processItems: ProcessItemType[] = [
  {
    label: 'ソート',
    value: true,
    processes(ary: string) {
      return ary
        .split('\n')
        .sort()
        .join('\n')
    }
  },
  {
    label: '重複行を削除',
    value: true,
    processes(ary: string) {
      return ary + 2
    }
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
  value: {
    type: (text: string) => string
    require: true
  }
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
    value: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      processes: processItems
    }
  },
  methods: {
    onChangeCheckBox(event: any): void {
      console.log('called onChangeInput')
      // const processExecution: (text: string) => string = (text: string) => {
      const processExecution = (text: string) => {
        const accum = this.activeProcesses
          .map((p) => p.processes)
          .reduce((accum, current) => (input: string) => current(accum(input)))
        return accum(text)
      }
      // this.$emit("updated", processExecution)
      this.$emit('input', processExecution)
      // this.commitChange(event.target.value)
    },
    setActiveProcesses(): void {
      // this.$parent.activeProcessList = this.activeProcesses()
    }
  },
  computed: {
    execProcesses(): number {
      return 3
    },
    activeProcesses(): ProcessItemType[] {
      return this.processes.filter((p) => p.value)
    }
  }
}

export default options
</script>
