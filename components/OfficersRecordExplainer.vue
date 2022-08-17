<script>
import {
  parseRecord, segmentRecord, dataTypeComments
} from "./recordTypes.ts";

export default {
  data() {
    return {
      record: '',
      segment: null,
      dataTypeComments
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
      return this.record.length >= 16
    }
  }
}
</script>

<template>
  <div class="samples button-group">
    <button @click="record = 'DDDDSNAP289820210421'">Sample header record</button>
    <button @click="record = 'FC0294762301149774860001        20100316                197810          0127<MARCIN<NAKONOWSKI<<<<MOORE ST. MALL 58-66 PARNELL STREET<DUBLIN<DUBLIN<CO. DUBLIN<IRELAND<DIRECTOR<POLISH<REPUBLIC OF IRELAND<'">Sample person record</button>
    <button @click="record = 'FC0296211C                      00020039VALENCE TECHNOLOGY CAYMAN ISLANDS INC.<'">Sample company record</button>
    <button @click="record = '9999999900000048'">Sample trailer record</button>
    <button @click="record = '0495185421     0101216516300001216516300001196809                  W1J 7NJ 20161006                201610180108MR<DARRELL<BOYD<<<<105 PICCADILLY PICCADILLY<<LONDON<<ENGLAND<PROJECT DIRECTOR<BRITISH<ENGLAND<<<<<<<<<<<<<<'">Sample person update record</button>
  </div>
  <input type="text" id="officers-record-explainer-input" v-model="record"/>
  <div v-if="show">
  <p>Hover over a segment to see it</p>
  <div class="record">
    <span v-for="seg in segmentedRecord" class="segment" @mouseover="segment = seg" @mouseleave="segment = null">{{seg.rawValue}}</span>
  </div>
  <div v-if="segment" class="explainer-tooltip" :class="[segment?('colour-'+(segment.index+1)):'']">
    <p><b>{{segment.name}}</b> &nbsp;
      <code class="raw">{{JSON.stringify(segment.rawValue)}}</code>
    </p>
    <p>Data type: {{dataTypeComments[segment.dataType]}}</p>
    <p>{{segment.comment}}</p>
    <div v-if="segment.rawValue !== String(segment.parsedValue) && String(segment.parsedValue).length > 0">
      <p>Parsed value:
        <code class="explain-object" v-if="typeof segment.parsedValue !== 'object'">{{JSON.stringify(segment.parsedValue, null, 2)}}</code></p>
      <pre class="explain-object" v-if="typeof segment.parsedValue === 'object'">{{JSON.stringify(segment.parsedValue, null, 2)}}</pre>
    </div>
  </div>
  <p>Fully parsed record:</p>
  <pre class="explain-object">{{this.parsedRecord}}</pre>
  </div>
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
  transition: all 0.5s;
}

div.record{
  font-family: var(--vp-font-family-mono);
  font-size: 16px;
  white-space: pre-wrap;
  cursor: default;
  line-height: 1.8;
}
div.record span.segment {
  border: 5px solid transparent;
}
code{
  display: inline-block;

  font-family: var(--vp-font-family-mono);
  font-size: 16px;
  white-space: pre-wrap;
}
pre.parsed{
  background: #0002;
}
$colours-list: #f3a683 #63cdda #cf6a87 #f7d794 #778beb #f8a5c2 #786fa6 #e77f67 #badc58 #ffbe76 #e056fd #1dd1a1 #54a0ff #ffda79 #e6194B #3cb44b #ffe119 #4363d8 #f58231 #911eb4 #42d4f4 #f032e6 #bfef45 #fabed4 #469990 #dcbeff #9A6324 #fffac8 #800000 #aaffc3 #808000 #ffd8b1 #000075 #a9a9a9;
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

.button-group{
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin: 0.25rem 0;
}
.button-group button{
  border: 1px solid var(--vp-button-alt-border);
  color: var(--vp-button-alt-text);
  background-color: var(--vp-button-alt-bg);
  border-radius: 4px;
  padding: 0 20px;
  font-size: 14px;
  display: inline-block;
  text-align: center;
  font-weight: 500;
  white-space: nowrap;
  transition: color 0.25s, border-color 0.25s, background-color 0.25s;
}

</style>
