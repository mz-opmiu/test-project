<template>
  <div class="mimaskstick">
    <Navi></Navi>
    <Visual></Visual>
    <button @click="openPop('Personal')">개인정보팝업</button>

    <PopTest></PopTest>

    <PopPersonal class="personal"></PopPersonal>
    <PopPost></PopPost>
  </div>
</template>

<script>
import Navi from '@/mimaskstick/pc/Navi'
import Visual from '@/mimaskstick/shared/Visual'
import PopPersonal from '@/mimaskstick/shared/PopPersonal'
import PopPost from '@/mimaskstick/shared/PopPost'
import PopTest from '@/mimaskstick/shared/PopTest'

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Pc',
  data() {
    return {}
  },
  components: { Navi, Visual, PopTest, PopPersonal, PopPost },
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

@import '~@/mimaskstick/scss/popup.scss';
</style>