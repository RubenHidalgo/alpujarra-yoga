<template>
<div id="app">
  <b-navbar type="light" variant="light" fixed="top">
    <b-navbar-nav>
      <b-navbar-brand href="/">
        <img src="./assets/logo.png" alt="Alpujarra Yoga">
      </b-navbar-brand>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
      <b-nav-item href="blog">Blog</b-nav-item>
      <b-nav-item href="calendario">Calendario</b-nav-item>
      <b-nav-item-dropdown text="Mi Cuenta" right>
          <b-dropdown-item href="registro">Registrarse</b-dropdown-item>
          <b-dropdown-item href="users">Identificarse</b-dropdown-item>
        </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  data:()=>({
    activeItem: 0
  })
}
</script>

<style>
body { 
  padding-top: 200px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1050px;
  padding-bottom: 200px;
}

</style>
