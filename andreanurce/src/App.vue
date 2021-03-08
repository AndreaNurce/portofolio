<template>
  <div id="app">
    <home/>
    <navBar/>
    <services/>
  </div>
</template>

<script>
import navBar from './components/nav'
import home from './components/home'
import services from './components/services'
export default {
  components :  {
    navBar,
    home,
    services
  }
}
</script>

<style>

</style>
