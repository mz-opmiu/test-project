<template>
  <section class="section visual">
    <div class="section__inner">
      <div class="a11y-hidden">
        <h1>당신의 피부가 힘내야 하는 날은 언제인가요?</h1>
        <p>피부가 힘내야 하는 특별한 날, 동인비 #홍삼가득 #하루전팩</p>
      </div>

      <div class="video">
        <div class="video__box">
          <!-- <youtube
            class="youtube"
            :video-id="mainVideo.vId"
            ref="youtube"
            width="100%"
            height="100%"
            :player-vars="playerVars"
            @ready="ready"
            @playing="playing"
            @buffering="buffering"
            @paused="paused"
            @ended="ended"
          ></youtube> -->
        </div>

        <div class="video__list">
          <button
            class="video__thumb"
            :class="(video.keyword, { on: mainVideo == video })"
            v-for="(video, i) in videoList"
            :key="i"
            gac="MAIN"
            @click="changeVideo(video.keyword)"
          >
            {{ video.title }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { find, trim } from 'lodash'
// import { youtubeEmbedMixin } from '@mixin/youtube'

export default {
  name: 'Visual',
  data() {
    return {
      mainVideo: '',
      videoList: [
        { keyword: 'wedding', title: '결혼식편', vId: 'zPg2fCYHwfQ' },
        { keyword: 'travel', title: '여행편', vId: '959ecSmAr0k' },
        { keyword: 'work', title: '미팅편', vId: '3j0uM_FyY_A' }
      ]
    }
  },
  // mixins: [youtubeEmbedMixin],
  mounted() {
    // mounted() {
    if (!location.hash) {
      this.mainVideo = this.videoList[0]
    } else {
      this.setVideo()
    }
    // setTimeout(() => {
    //   this.play()
    // }, 500)
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    }
  },
  methods: {
    setVideo(keyword) {
      this.mainVideo = find(this.videoList, {
        keyword: keyword ? keyword : trim(location.hash.split('?')[0], '#')
      })

      if (!this.mainVideo) {
        this.mainVideo = this.videoList[0]
        return
      }
    },
    changeVideo(keyword) {
      this.setVideo(keyword)
      // setTimeout(() => {
      //   this.play()
      // }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile {
  $image-url: 'https://donginbi-event.s3.amazonaws.com/mimaskstick/images/mobile';

  .section {
    padding-top: 200px;
    height: 982px + 200px;
    @include background(
      $image-url + '/bg-visual.jpg',
      $position: bottom center,
      $color: #f4e8cb
    );

    .video {
      padding-top: 400px;
      &__box {
        width: 640px;
        height: 360px;
      }
      &__list {
        width: inherit;
        font-size: 0;
      }
      &__thumb {
        width: 640/3 + px;
        height: 192px;
        @include background($image-url + '/img-thumb.jpg', $position: top left);
        @for $i from 1 through 6 {
          &:nth-child(#{$i}) {
            background-position-x: -(($i - 1) * 212) + px;
          }
        }
        &.on {
          background-position-y: bottom;
        }
      }
    }
  }
}

.pc {
  $image-url: 'https://donginbi-event.s3.amazonaws.com/mimaskstick/images/pc';

  .section {
    height: 907px;
    @include background(
      $image-url + '/bg-visual.jpg',
      $position: top center,
      $color: #f4e8cb
    );

    .video {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 298px;

      &__box {
        flex: none;
        width: 940px;
        height: 529px;
      }
      &__list {
        width: 260px;
        font-size: 0;
      }
      &__thumb {
        width: inherit;
        height: 176px;
        @include background($image-url + '/img-thumb.jpg', $position: top left);
        @for $i from 1 through 6 {
          &:nth-child(#{$i}) {
            background-position-y: -(($i - 1) * 176) + px;
          }
        }
        font-size: 0;
        cursor: pointer;
        &.on {
          background-position-x: right;
        }
      }
    }
  }
}
</style>

