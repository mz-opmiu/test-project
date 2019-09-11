<template>
  <form action="">
    <dl>
      <dt><label for="personalName">이름</label></dt>
      <dd>
        <input
          type="text"
          name="name"
          id="personalName"
          v-model="userModel.name"
        />
        <select
          name="phoneCorp"
          id="phoneCorp"
          class="phone-corp"
          @change="changeCorp($event)"
          v-if="phoneCorpAuth == true"
        >
          <option value="null" selected disabled>통신사 선택</option>
          <option value="SKT">SKT</option>
          <option value="KTF">KT</option>
          <option value="LGT">LG U+</option>
          <option value="SKM">SKT 알뜰폰</option>
          <option value="KTF">KT 알뜰폰</option>
          <option value="LGT">LG U+ 알뜰폰</option>
        </select>
      </dd>
    </dl>

    <dl class="phone">
      <dt><label for="personalPhone">연락처</label></dt>
      <dd>
        <input
          type="tel"
          name="phone"
          maxlength="11"
          placeholder="'-'없이 입력해주세요"
          id="personalPhone"
          v-model="userModel.phone"
        />
        <button
          type="button"
          class="popbtn popbtn__phone-auth"
          @click="sendKmcAuth()"
          v-if="phoneCorpAuth == true"
        >
          <label for="personal-zipcode">인증번호 발송</label>
        </button>
      </dd>
    </dl>

    <dl class="zipcode" v-if="address == true">
      <dt><label for="personalAddress">주소</label></dt>
      <dd>
        <input
          type="text"
          name="zipcode"
          readonly
          id="personalZipcode"
          v-model="userModel.zipcode"
        />
        <button
          type="button"
          @click="openPop('Post')"
          class="popbtn popbtn__zipcode"
        >
          <label for="personalZipcode">우편번호 찾기</label>
        </button>
      </dd>
    </dl>
    <dl class="address" v-if="address == true">
      <dd>
        <label for="personalAddress"
          ><input
            type="text"
            name="address"
            id="personal-address"
            readonly
            v-model="userModel.address"
        /></label>
        <input
          type="text"
          name="addressDetail"
          id="personalAddress"
          placeholder="상세주소를 입력해주세요"
          v-model="userModel.addressDetail"
        />
      </dd>
    </dl>
  </form>
</template>

<script>
import { EventBus } from '@utils/eventBus.js'

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'PersonalForm',
  props: {
    name: {
      type: Boolean,
      default: true
    },
    phone: {
      type: Boolean,
      default: true
    },
    phoneCorpAuth: {
      type: Boolean,
      default: false
    },
    address: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      userModel: {
        name: '',
        phoneCorp: null,
        phone: '',
        zipcode: '',
        address: '',
        addressDetail: '',
        agree: false,
        agree2: false,
        agree3: false,
        agree4: false
      }
    }
  },
  mounted() {
    EventBus.$on('updateUserAddress', userAddress => {
      this.userModel.zipcode = userAddress.zipcode
      this.userModel.address = userAddress.address
      console.log(this.userModel)
    })
  },
  methods: {
    ...mapMutations(['openPop']),
    sendKmcAuth() {},

    confirmKmcAuth() {
      //인증번호 확인
      // let kcmNum = new FormData()
      // kcmNum.append('authNo', this.kmcAuth.number)
      // this.$axios
      //   .post('/api/kmc/save', kcmNum)
      //   .then(res => {
      //     if (res.data.result === true) {
      //       alert('인증이 완료되었습니다.')
      //       //인증번호 입력칸 hide, dimm show
      //       this.kmcAuth.isAuth = true
      //     } else {
      //       alert(res.data.message)
      //     }
      //   })
      //   .catch(err => {
      //     console.log(err.error)
      //   })
    }
  },
  destroyed() {}
}
</script>