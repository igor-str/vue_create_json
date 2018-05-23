<template>
  <div id="redactor" class="redactor">
    <textarea class="redactor__textarea" v-model="dataJson" @blur="changeJson">

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
      ...mapGetters({dataJson: 'getJson'}),
    },
    methods: {
      ...mapMutations(['changeJson'])
    }
  }
</script>

<style lang="scss" scoped>
  .redactor {
    width: 50%;
    height: 100vh;
    &__textarea {
      width: 100%;
      height: 100%;
    }
  }
</style>
