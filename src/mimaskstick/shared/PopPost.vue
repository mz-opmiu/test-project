<template>
  <Popup
    class="post"
    :type="'Post'"
    :show="this.currentPop == 'Post'"
    :top="100"
    animation="rotate"
    @hide="openPop('Personal')"
  >
    <template #header>
      <h1 class="line">
        <img
          src="https://donginbi-event.s3.amazonaws.com/mimaskstick/images/shared/tl-post.png"
          alt="우편번호"
        />
      </h1>
    </template>
  </Popup>
</template>

<script>
import Popup from '@/shared/Popup'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'PopPost',
  data() {
    return {}
  },
  components: { Popup },
  computed: {
    ...mapState(['currentPop'])
  },
  methods: {
    ...mapMutations(['openPop']),
    clearForm() {}
  }
}
</script>

<style lang="scss" >
.mimaskstick .popup.post .popup__content .popup__inner {
  padding: 0;
}
</style>