
<template>
  <div id="app" class="bg-gray-50">
    <MobileHeader/>
    <DesktopHeader/>

    <MobileMain/>
    <DesktopMain/>

    <Footer/>
    <DesktopFooter/>
  </div>
</template>

<script>
  import MobileHeader from '@/components/MobileHeader'
  import DesktopHeader from '@/components/DesktopHeader'
  import MobileMain from '@/components/MobileMain'
  import DesktopMain from '@/components/DesktopMain'
  import Footer from '@/components/Footer'
  import DesktopFooter from '@/components/DesktopFooter'

  export default {
    name: 'App',
    data() {
      return {}
    },
    components: {
      MobileHeader,
      DesktopHeader,
      MobileMain,
      DesktopMain,
      Footer,
      DesktopFooter,
    },
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }
</style>
