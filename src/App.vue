<template>
  <Header></Header>
  <tab></tab>
  <router-view/>
</template>

<script>
import Header from '@/components/header'
import tab from '@/components/tab'
export default {
  components: {
    Header,
    tab
  }
}
</script>

<style lang="stylus">

</style>
