<template>
  <Popup
    :top="100"
    :show="this.currentPop == 'Personal'"
    animation="rotate"
    @hide="closePop()"
    :customStyles="this.customStyles"
    :type="'Personal'"
  >
    <template #header>
      <h1 class="line">
        <img
          src="https://donginbi-event.s3.amazonaws.com/mimaskstick/images/shared/tl-personal.png"
          alt="정보입력"
        />
      </h1>
    </template>
    <template #content>
      <PersonalForm :phoneCorpAuth="true"></PersonalForm>
    </template>
  </Popup>
</template>

<script>
import Popup from '@/shared/Popup'
import PersonalForm from '@/shared/PersonalForm'

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'PopPersonal',
  data() {
    return {
      allAgree: false,
      kmcAuth: {
        isAuth: null,
        number: ''
      },

      customStyles: {
        background: '#eee2cf'
      }
    }
  },

  components: { Popup, PersonalForm },
  computed: {
    ...mapState(['currentPop'])
  },
  methods: {
    ...mapMutations(['closePop'])
  }
}
</script>

<style lang="scss">
@import '~@/mimaskstick/scss/_variables.scss';

.mimaskstick .popup.personal {
  .phone-corp,
  .popbtn__phone-auth,
  .popbtn__zipcode {
    width: 190px;
    flex: 0 0 190px;
    margin-left: 8px;
    font-size: 25px;
    vertical-align: middle;
  }

  .phone-corp {
    display: inline-block;
  }

  .popbtn__phone-auth,
  .popbtn__zipcode {
    color: #fff;
    background: $colorBrown;
  }
}
</style>