<template>
  <div class="VUEJSPage">
    <nav>
      <router-link :to="{ name: 'vuejs_guide' }">Guide</router-link>
      <router-link :to="{ name: 'vuejs_reference' }">API Reference</router-link>
      <router-link :to="{ name: 'vuejs_changelog' }">Changelog </router-link>
      <router-link :to="{ name: 'vuejs_gitHub' }">GitHub</router-link>
    </nav>
    <main class="mainClass">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.VUEJSPage {
  width: 100%;
  height: 350px;
  > nav {
    display: flex;
    justify-content: center;
    align-items: center;
    > a {
      margin: 0 10px;
      color: #2c3e50;
      font-weight: bold;
      &.router-link-exact-active {
        color: red;
      }
    }
  }
}
.mainClass {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
