<template>
  <transition name="popup--fade">
    <div
      v-show="show"
      tabindex="-1"
      :style="customDuration"
      :class="['popup', className]"
      @keyup.esc="onEsc"
    >
      <div
        class="popup__mask"
        v-if="mask"
        @click="onClickMask"
        :style="customMaskStyles"
      />
      <transition :name="`popup-${animation}`">
        <div class="popup__dialog" v-show="show" :style="dialogStyle">
          <!-- basic -->
          <slot></slot>

          <!-- 기존 팝업 형식 ( type: Personal, Post ) -->
          <header
            class="popup__header"
            v-if="type == 'Personal' || type == 'Post'"
          >
            <div class="popup__inner">
              <slot name="header">
                <h1>기본 타이틀</h1>
              </slot>
            </div>
          </header>
          <div
            class="popup__content"
            v-if="type == 'Personal' || type == 'Post'"
          >
            <div class="popup__inner">
              <slot name="content">
                <p>기본 컨텐츠</p>
                <!-- 우편번호 팝업 -->
                <DaumPostcode
                  v-if="type == 'Post'"
                  :on-complete="postComplete"
                  :animation="true"
                />
              </slot>
            </div>
          </div>
          <span class="popup__close" v-if="closeButton" @click="$emit('hide')"
            >닫기</span
          >
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import DaumPostcode from 'vuejs-daum-postcode'

export default {
  name: 'popup',
  props: {
    show: {
      type: Boolean,
      required: true
    },
    type: {
      type: String,
      default: 'dialog'
    },
    top: {
      type: Number,
      default: 50
    },
    width: {
      type: Number,
      default: 640
    },
    // height: {
    //   type: Number,
    //   default: '240'
    // },
    duration: {
      type: Number,
      default: 300
    },
    measure: {
      type: String,
      default: 'px'
    },
    animation: {
      type: String,
      default: 'zoom'
    },
    mask: {
      type: Boolean,
      default: true
    },
    closeButton: {
      type: Boolean,
      default: true
    },
    closeOnEsc: {
      type: Boolean,
      default: false
    },
    closeOnClickMask: {
      type: Boolean,
      default: true
    },
    className: {
      type: String,
      default: ''
    },
    customStyles: {
      type: Object,
      default: () => ({})
    },
    customMaskStyles: {
      type: Object,
      default: () => ({})
    }
  },
  components: { DaumPostcode },
  computed: {
    customDuration() {
      return {
        animationDuration: `${this.duration}ms`
      }
    },
    dialogStyle() {
      return {
        width: this.width + this.measure,
        top: this.top + this.measure,
        // height: this.height + this.measure,
        animationDuration: `${this.duration}ms`,
        ...this.customStyles
      }
    }
  },
  watch: {
    show(isShow) {
      isShow &&
        this.$nextTick(() => {
          this.$el.focus()
        })
    }
  },
  methods: {
    onEsc() {
      if (this.show && this.closeOnEsc) {
        this.$emit('hide')
      }
    },
    onClickMask() {
      this.$emit('clickMask')
      if (this.closeOnClickMask) {
        this.$emit('hide')
      }
    },
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
@import '~@/scss/popup/common.scss';
</style>