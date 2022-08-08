<script>
import {
  parseRecord, segmentRecord
} from "./recordTypes.ts";

export default {
  data() {
    return {
      count: 0,
      output: '',
      record: '',
      segment: null
    }
  },
  computed: {
    parsedRecord(){
      return parseRecord(this.record)
    },
    segmentedRecord(){
      return segmentRecord(this.record)
    },
    show(){
      return this.record.length > 0
    }
  }
}
</script>

<template>
  <input type="text" id="officers-record-explainer-input" v-model="record"/>
  <div class="record">
    <span v-for="seg in segmentedRecord" class="segment" @mouseover="segment = seg" @mouseleave="segment = null">{{seg.rawValue}}</span>
  </div>
  <div v-if="segment" class="explainer-tooltip" :class="[segment?('colour-'+(segment.index+1)):'']">
    <b>{{segment.name}}</b>
    {{segment.parsedValue}}
  </div>
  <pre class="explain-object" v-if="show">{{this.parsedRecord}}</pre>
</template>

<style lang="scss">
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

div.explainer-tooltip{
  padding: 0.25rem;
  border: 2px solid #0004;
}

div.record{
  font-family: var(--vp-font-family-mono);
  font-size: 16px;
  white-space: pre-wrap;
  cursor: default;
  line-height: 1.2;
}

$colours-list: #f3a683 #63cdda #cf6a87 #f7d794 #778beb #f8a5c2 #786fa6 #e77f67 #badc58 #ffbe76 #e056fd #1dd1a1 #54a0ff #ffda79;
@each $clr in $colours-list {
  $i: index($colours-list, $clr);
  div.record span.segment:nth-child(#{$i}) {
    background-color: adjust-color($clr, $alpha: -0.5);
  }
  div.record span.segment:nth-child(#{$i}):hover {
    background-color: adjust-color($clr, $alpha: -0.1);
  }
  .colour-#{$i}{
    background-color: adjust-color($clr, $alpha: -0.5);
  }
}
</style>
