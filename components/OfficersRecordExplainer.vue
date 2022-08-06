<script>
import {
  parseRecord
} from "./recordTypes.ts";

export default {
  data() {
    return {
      count: 0,
      output: '',
      record: ''
    }
  },
  computed: {
    parsedRecord(){
      return parseRecord(this.record)
    },
    show(){
      return this.record.length > 0
    }
  }
}
</script>

<template>
  <input type="text" id="officers-record-explainer-input" v-model="record"/>
  <pre class="explain-object" v-if="show">{{this.parsedRecord}}</pre>
</template>

<style scoped>
#officers-record-explainer-input {
  width: 100%;
  background: #0001;
  border: 2px solid #0006;
  font-family: var(--vp-font-family-mono);
  font-size: 16px;
}

pre.explain-object{
  background: #0001;
  border-radius: 0.5rem;
  padding: 1rem;
}
</style>
