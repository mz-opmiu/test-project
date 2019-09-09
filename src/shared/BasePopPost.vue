<template>
  <div>
    <header class="popup__header">
      <slot name="header">
        <h1>기본 타이틀</h1>
      </slot>
    </header>
    <div class="popup__content">
      <DaumPostcode :on-complete="postComplete" :animation="true" />
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import DaumPostcode from 'vuejs-daum-postcode'
import { EventBus } from '@utils/eventBus.js'
import { mapMutations } from 'vuex'

export default {
  name: 'BasePopPost',
  data() {
    return {
      userModel: {
        zipcode: '',
        address: ''
      }
    }
  },
  created() {
    console.log('basePopPost 생성')
  },
  components: { DaumPostcode },
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
      EventBus.$emit('updateUserAddress', this.userModel)
      // this.updateUserAddress(this.userModel)
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
// @import '~@/mimaskstick/scss/popup.scss';
</style>