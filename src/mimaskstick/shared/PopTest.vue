<template>
  <Popup
    :show="this.currentPop == 'Test'"
    :top="300"
    animation="rotate"
    @hide="closePop()"
    >>
    <p>여기에 내용이 들어가겠지</p>
  </Popup>
</template>

<script>
import Popup from '@/shared/Popup'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'PopTest',
  components: { Popup },
  computed: {
    ...mapState(['currentPop'])
  },
  methods: {
    ...mapMutations(['closePop'])
  }
}
</script>