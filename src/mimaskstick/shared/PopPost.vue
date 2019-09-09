<template>
  <Popup
    :show="this.currentPop == 'Post'"
    :top="100"
    animation="rotate"
    @hide="openPop('Personal')"
  >
    <BasePopPost>
      <template #header>
        <h1 class="line">
          <img
            src="https://donginbi-event.s3.amazonaws.com/mimaskstick/images/shared/tl-post.png"
            alt="우편번호"
          />
        </h1>
      </template>
    </BasePopPost>
  </Popup>
</template>

<script>
import Popup from '@/shared/Popup'
import BasePopPost from '@/shared/BasePopPost'

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'PopPost',
  data() {
    return {}
  },
  components: { Popup, BasePopPost },
  computed: {
    ...mapState(['currentPop'])
  },
  methods: {
    ...mapMutations(['openPop']),
    clearForm() {}
  }
}
</script>

<style lang="scss" scoped>
</style>