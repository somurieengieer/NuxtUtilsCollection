<template>
  <div>
    <div>
      duplicate
      {{firstname}}
    </div>

    <v-container>
      <v-row>
        <v-col>
          <!-- v-modelを使うと:value="param1" @input="param1 = $event"を略すことができる -->
          <!-- 子はpropのvalueとして受け取り、設定することができる -->
          <process-text-area v-model="textValue1" />
        </v-col>
        <v-col>
          <process-text-area v-model="textValue2" />
        </v-col>
      </v-row>
      <v-row>
        <process-options 
          :activeProcessList="processList"
          @updated="calledParentMethod"
        />
        {{textValue1}}
        {{textValue2}}
      </v-row>
      <v-row>
        <!-- <v-btn rounded color="primary" dark v-on:clidk="">実行</v-btn> -->
        <v-btn rounded color="secondary" dark>クリア</v-btn>
      </v-row>
      <v-row>
        <v-col>
          <process-text-area v-model="resultValue1" />
        </v-col>
        <v-col>
          <process-text-area v-model="resultValue2" />
        </v-col>
      </v-row>
    </v-container>
    <!-- <process-text-area/> と書いても動く -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProcessTextArea from '@/components/ProcessTextArea.vue'
import ProcessOptions, { ProcessItemType } from '@/components/ProcessOptions.vue'
export default Vue.extend({
  components: {
    ProcessTextArea: ProcessTextArea,
    ProcessOptions: ProcessOptions,
  },
  data: function () {
    return {
      firstname: 'test-san',
      textValue1: 'test value1',
      textValue2: 'test value2',
      processList: [],
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

  },
})
</script>

<style>

</style>