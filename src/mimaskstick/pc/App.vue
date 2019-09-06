<template>
  <div>
    <Navi></Navi>
    <Visual></Visual>
    <button @click="openPop('Personal')">개인정보팝업</button>

    <PopPersonal></PopPersonal>
    <PopPost></PopPost>
  </div>
</template>

<script>
import Navi from '@/mimaskstick/pc/Navi'
import Visual from '@/mimaskstick/shared/Visual'
import PopPersonal from '@/mimaskstick/shared/PopPersonal'
import PopPost from '@/shared/PopPost'

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Pc',
  data() {
    return {}
  },
  components: { Navi, Visual, PopPersonal, PopPost },
  created() {
    console.log('pc:created')
  },
  methods: {
    ...mapMutations(['openPop', 'loading'])
  }
}
</script>

<style lang="scss">
@import '@/scss/vars/_variables.scss';
@import '@/scss/page/_layout.scss';
</style>