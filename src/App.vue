<template>
  <div id="app" :class="deviceKind">
    <router-view />
  </div>
</template>

<script>
import { deviceKind } from '@utils/device'
export default {
  name: 'Navi',
  data() {
    return {
      deviceKind
    }
  }
}
</script>

<style lang="scss">
// 전 components에 적용되어야 할 scss
@import '@/scss/global.scss';
</style>
