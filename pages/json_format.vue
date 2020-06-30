<template>
  <div>
    <div>
      <v-container fluid fill-height>
      <v-card
        class="mx-auto"
        width="100%"
        outlined
        color="primary"
        dark
      >
        <v-card-text>
          <div>
            <p class="display-1 text--primary">
              JSONフォーマット
            </p>
          </div>
          <div class="text--primary">
            JSONのフォーマットを行うサービスです。<br />
          </div>
        </v-card-text>
      </v-card>
      </v-container>
    </div>

    <v-container>
      <v-row>
        <v-col>
          <!-- v-model（糖衣構文）を使うと:value="param1" @input="param1 = $event"を略すことができる -->
          <!-- 子はpropのvalueとして受け取り、設定することができる -->
          <process-text-area v-model="textValue1"
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
        <v-container class="px-0" fluid>
          <v-text-field
            v-model="indent"
            label="インデント"
            type="number"
          ></v-text-field>
        </v-container>
      </v-row>
      <v-row>
        <v-btn color="accent" rounded v-on:click="executeProcess">実行</v-btn>
        <v-btn color="accent" rounded v-on:click="clear">クリア</v-btn>
      </v-row>
      <v-row>
        <v-col>
          <process-text-area v-model="executedValue1"
            :label="'加工結果'"
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
  processes: (obj: object) => object,
}
const processOptions: ProcessOptionType[] = [
  {
    label: 'ソート',
    value: true,
    processes: function(obj: object): object { 
      function objectSort(obj: object): object {
        // まずキーのみをソートする
        function objectSortKeys<O extends object>(obj: O): Array<keyof O> {
          return Object.keys(obj).sort() as Array<keyof O>;
        }
        // var keys = Object.keys(obj).sort();
        const keys = objectSortKeys(obj)
  
    
        // 返却する空のオブジェクトを作る
        const map = Object.assign({}); // {}にするとmap[key]が存在しないことになりエラー
    
        // ソート済みのキー順に返却用のオブジェクトに値を格納する
        keys.forEach(function(key){
            var val: object | string = obj[key];
    
            // 中身がオブジェクトの場合は再帰呼び出しを行う
            if(typeof val === "object"){
                val = objectSort(val);
            }
    
            map[key] = val;
        });
  
        return map;
      }
      return objectSort(obj);
    }
  },
]
export default Vue.extend({
  components: {
    ProcessTextArea: ProcessTextArea,
  },
  data: function () {
    return {
      textValue1: '',
      executedValue1: '',
      processesOptions: processOptions,
      resultValue1: '',
      indent: '2',
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
      if (!this.isJSON) {
        alert('不正なJSONフォーマットです')
        return
      }
      const processExecution = (obj: object) => {
        if (this.activeProcesses.length === 0) return obj
        const accum = this.activeProcesses
            .map(p => p.processes)
            .reduce((accum, current) => (obj: object): object => current(accum(obj)))
        return accum(obj)
      }
      this.executedValue1 = JSON.stringify(processExecution(JSON.parse(this.textValue1)), null, this.indentSize)
    },
    clear() {
      this.textValue1 = ''
      this.executedValue1 = ''
    },
  },
  computed: {
    activeProcesses(): ProcessOptionType[] {
      return this.processesOptions.filter(p => p.value)
    },
    isJSON(): boolean {
      try {
        JSON.parse(this.textValue1)
      } catch {
        return false
      }
      return true
    },
    indentSize(): number {
      try {
        Number(this.indent)
        return Number(this.indent)
      } catch {
        return 2
      }
    }
  }
})
</script>

<style>
</style>