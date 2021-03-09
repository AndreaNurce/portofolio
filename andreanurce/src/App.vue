<template>
  <div id="app">
    <home/>
    <navBar/>
    <services/>
    <about/>
  </div>
</template>

<script>
import navBar from './components/nav'
import home from './components/home'
import services from './components/services'
import About from './components/about'

export default {
  components :  {
    navBar,
    home,
    services,
    About,
  }
}
</script>

<style>

</style>
