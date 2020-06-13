<template>
  <div>
    <div>
      duplicate
      {{firstname}}
    </div>

    <v-container>
      <v-row>
        <v-col>
          <process-text-area :value="textValue1" />
        </v-col>
        <v-col>
          <process-text-area :value="textValue2" />
        </v-col>
      </v-row>
      <v-row>
        <process-options 
          :activeProcessList="processList"
          @updated="calledParentMethod"
        />
        {{processList}}
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
    }
  },
  methods: {
    calledParentMethod(processes: ProcessItemType[]) {
      console.log("called Parent Method", processes)
    },

  },
})
</script>

<style>

</style>