<template>
  <div id="app" class="app">
    <redactor></redactor>
    <formgenerator></formgenerator>
  </div>
</template>

<script>
  import redactor from './components/Redactor'
  import formgenerator from './components/ForfmGenerator'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    redactor,
    formgenerator
  }
}
</script>

<style lang="scss">
  .app {
    display: flex;
    justify-content: space-between;
  }
</style>
