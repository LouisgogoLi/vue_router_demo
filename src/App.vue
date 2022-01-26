<template>
  <div>
    <HeaderComponent />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  font-family: "Microsoft JhengHei", "Heiti TC", "sans-serif";
}
img {
  display: block;
}
html,
body {
  width: 100%;
  height: 100%;
}
</style>
