<template>
  <div id="app">
    <home/>
    <navBar/>
    <services/>
    <about/>
    <resume/>
    <projects/>
  </div>
</template>

<script>
import navBar from './components/nav'
import home from './components/home'
import services from './components/services'
import About from './components/about'
import resume from './components/resume'
import projects from './components/projects'


export default {
  components :  {
    navBar,
    home,
    services,
    About,
    resume,
    projects
  }
}
</script>

<style>

</style>
