<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <!-- v-model（糖衣構文）を使うと:value="param1" @input="param1 = $event"を略すことができる -->
          <!-- 子はpropのvalueとして受け取り、設定することができる -->
          <process-text-area v-model="textValue1"
            :placeholder="'値を入力してください'"
          />
        </v-col>
        <v-col>
          <process-text-area v-model="textValue2"
            :placeholder="'値を入力してください'"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-container class="px-0" fluid>
          <!-- ma-1 -> m: margin, a: 全方向, 1: 1px -->
          <v-checkbox v-for="(processOption, i) in processesOptions" 
            v-model="processOption.value"
            :key="i"
            :label="processOption.label"
            />
        </v-container>
      </v-row>
      <v-row>
        <v-btn rounded v-on:click="executeProcess">実行</v-btn>
        <v-btn rounded v-on:click="clear">クリア</v-btn>
      </v-row>
      <v-row>
        <v-col>
          <process-text-area v-model="executedValue1"
            :label="'加工結果'"
          />
        </v-col>
        <v-col>
          <process-text-area v-model="executedValue2"
            :label="'加工結果'"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <process-text-area v-model="resultValue1"
            :label="'左にのみ存在する値'"
          />
        </v-col>
        <v-col>
          <process-text-area v-model="resultValue2"
            :label="'右にのみ存在する値'"
          />
        </v-col>
      </v-row>
    </v-container>
    <!-- <process-text-area/> と書いても動く -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProcessTextArea from '@/components/ProcessTextArea.vue'
export type ProcessOptionType = {
  label: string,
  value: boolean,
  processes: (ary: string) => string,
}
const processOptions: ProcessOptionType[] = [
  {
    label: 'ソート',
    value: true,
    processes: function(ary: string) { 
     return ary.split('\n').sort().join('\n')
    },
  },
  {
    label: '行頭・行末の空白をトリミング',
    value: true,
    processes: function(ary: string) { 
     return ary.split('\n').map(s => s.trim()).join('\n')
    },
  },
  {
    label: '重複行を削除',
    value: true,
    processes: function(aryStr: string) { 
      const ary = aryStr.split('\n')
      const resultAry: string[] = []
      ary.forEach(text => !resultAry.includes(text) ? resultAry.push(text) : null)
      console.log(resultAry)
      return resultAry.join('\n')
    },
  },
]
export default Vue.extend({
  components: {
    ProcessTextArea: ProcessTextArea,
  },
  data: function () {
    return {
      firstname: 'test-san',
      textValue1: 'test value1',
      textValue2: 'test value2',
      executedValue1: '',
      executedValue2: '',
      processesOptions: processOptions,
      resultValue1: '',
      resultValue2: '',
    }
  },
  methods: {
    calledParentMethod(processes: (text: string) => string) {
      const input = "abc, def  "
      const result = processes(this.textValue1)
      this.resultValue1 = result
      console.log("called Parent Method", result)
    },
    executeProcess() {
      const processExecution = (text: string) => {
        const accum = this.activeProcesses
            .map(p => p.processes)
            .reduce((accum, current) => (input: string) => current(accum(input)))
        return accum(text)
      }
      const existsOnlyOneSide = (aryStr: string, aryStrBase: string): string => {
        const aryBase = aryStrBase.split('\n')
        return aryStr.split('\n')
            .filter(str => !aryBase.includes(str))
            .join('\n')
      }
      this.executedValue1 = processExecution(this.textValue1)
      this.executedValue2 = processExecution(this.textValue2)
      this.resultValue1 = existsOnlyOneSide(this.executedValue1, this.executedValue2)
      this.resultValue2 = existsOnlyOneSide(this.executedValue2, this.executedValue1)
    },
    clear() {
      this.textValue1 = ''
      this.textValue2 = ''
      this.resultValue1 = ''
      this.resultValue2 = ''
    },
  },
  computed: {
    activeProcesses(): ProcessOptionType[] {
      return this.processesOptions.filter(p => p.value)
    }
  }
})
</script>

<style>

</style>