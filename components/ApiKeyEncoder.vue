<template>
  <input placeholder="paste your key here" v-model="key" class="key-input"/>
  <code v-if="show" class="header">Authorization: Basic {{ encoded }}</code>
</template>

<script>
export default {
  name: "ApiKeyEncoder",
  data(){
    return {
      key: ''
    }
  },
  computed : {
      show(){
        return this.key.trim().length === 36
      },
    encoded(){
        return window.btoa(this.key.trim()+':')
    }
  }
};
</script>

<style scoped>
.key-input{
  width: 100%;
  background: #0001;
  border: 2px solid #0006;
  font-family: var(--vp-font-family-mono);
  font-size: 16px;
}
code.header{
  background: #0002;
  border-radius: 4px;
  padding: 4px;
  margin: 1rem 0;
}
</style>
