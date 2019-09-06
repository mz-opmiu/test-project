<template>
  <BasePopPost>
    <template #header>
      <h1 class="line">
        <img
          src="https://donginbi-event.s3.amazonaws.com/mimaskstick/images/shared/tl-post.png"
          alt="우편번호"
        />
      </h1>
    </template>

    <template #content :class="'popup__inner-con'"></template>
  </BasePopPost>
</template>

<script>
import BasePopPost from '@/shared/BasePopPost'

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
      newUserModel: {
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
  components: { BasePopPost },
  computed: {
    ...mapState(['currentPop'])
  },
  methods: {
    ...mapMutations(['closePop'])
  }
}
</script>

<style lang="scss" scoped>
@import '~@/mimaskstick/scss/popup.scss';

.input-dim {
  position: absolute;
  top: 0;
  left: 50px;
  background: #fff;
  opacity: 0;
  width: 620px;
  height: 162px;
}

.popbtn {
  &__confirm {
    width: 387px;
    height: 84px;
    margin-bottom: 50px;
    text-align: center;

    border: 1px solid $brownColor;
    background: $redColor;
  }
  &__post {
    width: 215px;
    height: 70px;
    font-size: 28px;
    color: #fff;
    vertical-align: middle;
    background: $brownColor;
  }

  &__agree-detail {
    color: $redColor;
    line-height: 20px;
    font-size: 17px;
    text-decoration: underline;
    vertical-align: top;
    cursor: pointer;
  }
  &.big {
    margin-top: 30px;
  }
}

@media screen and (min-width: 0\0) {
  .popbtn__agree-detail {
    text-decoration: underline;
  }
}

.popup__content {
  position: relative;
  width: 720px;
  padding: 0;
}
.pop-personal {
  dl {
    width: 620px;
    margin: 0 auto 20px;
    font-size: 30px;
    font-weight: 500;
    &.phone-dl {
      margin-bottom: 10px;
    }
  }
  dt {
    display: inline-block;
    width: 136px;
    text-align: left;
  }
  dd {
    display: inline-block;
    width: calc(100% - 136px);
    &.full-address {
      width: 620px;
      label {
        display: inline-block;
        width: 100%;
        margin: 10px 0;
      }
      input[type='text'] {
        max-width: 620px;
      }
    }
    .half-input {
      display: inline-block;
      width: 258px;
      margin-right: 10px;
    }
    .phone-select {
      display: inline-block;
      width: 215px;
      font-size: 25px;
      vertical-align: middle;
    }
  }

  .all-agree {
    width: 640px;
    margin: 0 auto;
    text-align: left;
    padding: 10px 0;
    margin-bottom: 20px;
    border-bottom: 1px solid #b1a795;
    label {
      margin-left: 10px;
    }
  }

  .agree-wrap {
    width: 620px;
    margin: 0 auto;
    text-align: left;
    li {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      font-size: 0;

      &.lg-only {
        display: none;
      }
    }
  }
  input[type='checkbox'] {
    position: absolute;
    opacity: 0.01;
    & ~ span {
      display: inline-block;
      width: 20px;
      height: 20px;
      @include background($image-url + '/checkbox.png');
      background-position: 0 top;
      background-size: cover;
      cursor: pointer;
    }
    &:checked ~ span {
      background-position: 0 bottom;
    }
  }
  .agree-text {
    display: inline-block;
    padding-left: 15px;
    line-height: 20px;
    vertical-align: top;
    font-size: 20px;
    color: $brownColor;
  }
  label {
    display: inline-block;
    cursor: pointer;
  }
}
</style>