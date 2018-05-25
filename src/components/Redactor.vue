<template>
  <div id="redactor" class="redactor">
    <textarea class="redactor__textarea" v-model="json" @blur="updateJson">

    </textarea>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        json: ''
      }
    },
    computed: {
      ...mapGetters({dataJson: 'getJson'})
    },
    methods: {
      updateJson(e) {
        this.$store.commit('updateJson', e.target.value)
      }
    },
    mounted() {
      this.json = this.dataJson
    },
    watch: {
      json: function (newValue) {
        if (newValue) {
          this.$store.commit('updateJson', this.json)
        }
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
