<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  color: $brand-color-light-1;
}

#nav {
  padding: 30px;

  a {
    // font-weight: bold;
    font-family: Heebo-Bold;
  }
}
</style>
