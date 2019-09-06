<template>
  <form action="">
    <dl>
      <dt><label for="personalName">이름</label></dt>
      <dd>
        <input type="text" name="name" id="personalName" class="half-input" />
        <select
          name="phoneCorp"
          id="phone-corp"
          class="phone-select"
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

    <dl class="phone-dl">
      <dt><label for="personalPhone">연락처</label></dt>
      <dd>
        <input
          type="tel"
          name="phone"
          maxlength="11"
          placeholder="'-'없이 입력해주세요"
          id="personalPhone"
          class="half-input"
        />
        <button
          type="button"
          class="popbtn popbtn__post"
          @click="sendKmcAuth()"
        >
          <label for="personal-zipcode">인증번호 발송</label>
        </button>
      </dd>
    </dl>

    <dl>
      <dt><label for="personalAddress">주소</label></dt>
      <dd>
        <input
          type="text"
          name="zipcode"
          readonly
          id="personalZipcode"
          class="half-input"
        />
        <button
          type="button"
          @click="openPop('Post')"
          class="popbtn popbtn__post"
        >
          <label for="personalZipcode">우편번호 찾기</label>
        </button>
      </dd>
      <dd class="full-address">
        <label for="personal-address"
          ><input type="text" name="address" id="personal-address" readonly
        /></label>
        <input
          type="text"
          name="addressDetail"
          id="personalAddress"
          placeholder="상세주소를 입력해주세요"
        />
      </dd>
    </dl>
  </form>
</template>

<script>
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
    }
  },
  methods: {
    ...mapMutations(['openPop'])
  }
}
</script>