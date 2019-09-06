<template>
  <header>
    <div class="section__inner">
      <nav class="nav" role="navigation">
        <a
          v-for="(section, i) in sectionList"
          class="nav__btn"
          :class="{ on: currentSection == section.name }"
          :href="section.hash"
          :key="i"
          @click.prevent="goSection(section.hash)"
        >
          {{ section.text }}
          <span class="line"></span>
        </a>
      </nav>
    </div>
  </header>
</template>

<script>
import { deviceKind } from '@utils/device'
export default {
  name: 'Navi',
  data() {
    return {
      deviceKind,
      sectionList: [
        { name: 'visual', hash: '#visual', area: null, text: 'MAIN' },
        { name: 'event1', hash: '#event1', area: null, text: 'EVENT01' },
        { name: 'event2', hash: '#event2', area: null, text: 'EVENT02' },
        {
          name: 'realReview',
          hash: '#real-review',
          area: null,
          text: 'REAL REVIEW'
        },
        { name: 'tutorial', hash: '#tutorial', area: null, text: 'TUTORIAL' }
      ],
      currentSection: null
      // scrollTop: Math.ceil($(window).scrollTop())
    }
  },
  created() {
    if (deviceKind == 'pc') {
      console.log('navi:created')
    }
  }
  // mounted() {
  //   this.setSectionArea()
  //   this.currentSection = this.getCurrentSection()

  //   window.addEventListener('scroll', this.handleScroll)
  // },
  // methods: {
  //   handleScroll(e) {
  //     this.scrollTop = Math.ceil($(window).scrollTop())
  //     this.currentSection = this.getCurrentSection()
  //   },
  //   goSection(section) {
  //     $('html, body').animate(
  //       {
  //         scrollTop: Math.ceil($(section).offset().top)
  //       },
  //       500
  //     )
  //   },
  //   getCurrentSection() {
  //     for (let section of this.sectionList) {
  //       if (this.scrollTop < section.area - 10) {
  //         return section.name
  //       }
  //     }
  //   },
  //   setSectionArea() {
  //     return this.sectionList.map(section => {
  //       section.area = Math.ceil(
  //         $(section.hash).offset().top + $(section.hash).height()
  //       )
  //     })
  //   }
  // },
  // destroyed() {
  //   window.removeEventListener('scroll', this.handleScroll)
  // }
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  width: 100%;
  padding: 10px 20px;
  justify-content: flex-end;
  background: cornflowerblue;
  a {
    font-size: 16px;
    margin-right: 20px;
  }
}
</style>