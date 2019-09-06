<template>
  <Popup :show="show" :top="100" animation="rotate" @hide="show = false">
    <template #header>
      <h1></h1>
    </template>

    <template #content class="popup__inner-con">
      <DaumPostcode :on-complete="postComplete" :animation="true" />
    </template>
  </Popup>
</template>

<script>
import DaumPostcode from 'vuejs-daum-postcode'
import Popup from '@/shared/Popup'

export default {
  name: 'PopPost',
  data() {
    return {
      newUserModel: {
        zipcode: '',
        address: ''
      }
    }
  },
  components: { Popup, DaumPostcode },
  methods: {
    postComplete(data) {
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
      this.newUserModel.zipcode = data.zonecode
      this.newUserModel.address = fullAddress
      this.updateUserPost(this.newUserModel)
      this.$emit('open', 'personal')

      // ie에서 우편번호 팝업 관련 버그 처리
      $('#personal-address-detail')
        .first()
        .focus()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/mimaskstick/scss/popup.scss';
</style>