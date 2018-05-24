<template>
  <div id="form-generator" class="form-generator">
    <form v-for="item in dataJson">
      <input
        :type="item.type"
        :name="item.name"
        :disabled="item.disabled"
        :placeholder="item.name">
    </form>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'

  export default {
    data() {
      return {

      }
    },
    computed:{
      ...mapState({dataJson: 'dataJson'})
    }
  }
</script>

<style lang="scss">
  .form-generator {
    width: 49%;
    height: 100vh;
  }
</style>
