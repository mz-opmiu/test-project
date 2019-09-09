<template>
  <div class="popup__inner">
    <header class="popup__header">
      <slot name="header">
        <h1>기본 타이틀</h1>
      </slot>
    </header>
    <div class="popup__content">
      <slot name="content">
        <p>기본 컨텐츠</p>
      </slot>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'BasePopPersonal',
  props: {},
  data() {
    return {}
  },
  // components: { Popup },
  computed: {
    ...mapState(['currentPop'])
  },
  methods: {
    ...mapMutations(['closePop'])
  }
}
</script>

<style lang="scss" scoped>
</style>