<template>
  <div>
    <Navi></Navi>
    <Visual></Visual>
  </div>
</template>

<script>
import Navi from '@/mimaskstick/mobile/Navi'
import Visual from '@/mimaskstick/shared/Visual'

export default {
  name: 'Mobile',
  components: { Navi, Visual },
  created() {
    console.log('mobile:created')
  }
}
</script>


<style lang="scss">
@import '@/scss/vars/_variables-m.scss';
@import '@/scss/page/_layout.scss';
</style>