<template>
  <div id="redactor" class="redactor">
    <textarea class="redactor__textarea" v-model="dataJson" @blur="updateJson">

    </textarea>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapMutations} from 'vuex'

  export default {
    data() {
      return {}
    },
    computed: {
      ...mapGetters({dataJson: 'getJson'})
    },
    methods: {
      updateJson (e) {
        this.$store.commit('updateJson', e.target.value)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .redactor {
    width: 49%;
    height: 100vh;

    &__textarea {
      width: 100%;
      height: 100%;
      padding: 0;
    }
  }
</style>
