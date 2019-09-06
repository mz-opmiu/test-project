<template>
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
</template>

<script>
import Navi from '@/mimaskstick/pc/Navi'

export default {
  name: 'Navi',
  extends: Navi,
  created() {
    console.log('여기는 모바일 네비')
    console.log(this.sectionList)
  }
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  width: 100%;
  padding: 10px 20px;
  justify-content: space-between;
  background: rgb(237, 100, 100);
  a {
    font-size: 20px;
  }
}
</style>