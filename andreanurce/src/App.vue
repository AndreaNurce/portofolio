<template>
  <div id="app">
    <home/>
    <navBar/>
  </div>
</template>

<script>
import navBar from './components/nav'
import home from './components/home'
export default {
  components :  {
    navBar,
    home
  }
}
</script>

<style>

</style>
