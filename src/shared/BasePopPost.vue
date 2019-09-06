<template>
  <Popup
    :show="this.currentPop == 'Post'"
    :top="100"
    animation="rotate"
    @hide="openPop('Personal')"
  >
    <header class="popup__header">
      <slot name="header">
        <h1>기본 타이틀</h1>
      </slot>
    </header>
    <div class="popup__content">
      <slot name="content">기본 영역</slot>
      <DaumPostcode :on-complete="postComplete" :animation="true" />
    </div>
  </Popup>
</template>

<script>
import DaumPostcode from 'vuejs-daum-postcode'
import Popup from '@/shared/Popup'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'PopPost',
  data() {
    return {
      userModel: {
        zipcode: '',
        address: ''
      }
    }
  },
  components: { Popup, DaumPostcode },
  computed: {
    ...mapState(['currentPop'])
  },

  methods: {
    ...mapMutations(['openPop']),
    postComplete(data) {
      console.log(data)
      let fullAddress = data.address
      let extraAddress = ''
      if (data.addressType === 'R') {
        if (data.bname !== '') {
          extraAddress += data.bname
        }
        if (data.buildingName !== '') {
          extraAddress +=
            extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName
        }
        fullAddress += extraAddress !== '' ? ` (${extraAddress})` : ''
      }
      this.userModel.zipcode = data.zonecode
      this.userModel.address = fullAddress
      this.updateUserPost(this.userModel)
      this.openPop('Personal')

      // ie에서 우편번호 팝업 관련 버그 처리
      $('#personalAddressDetail')
        .first()
        .focus()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/mimaskstick/scss/popup.scss';
</style>