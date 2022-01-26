<template>
  <div class="NODEJSPage">
    <h1>NODEJS</h1>
  </div>
</template>

<script>
export default {
  name: "NodejsView",
};
</script>

<script setup>
import { onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";
import { onBeforeMount, onMounted } from "vue";

onBeforeRouteLeave((to, from) => {
  console.log(to, from, 1);
});
onBeforeRouteUpdate((to, from) => {
  console.log(to, from, 9);
});
console.log(6);
onBeforeMount(() => {
  console.log(7);
});
onMounted(() => {
  console.log(8);
});
</script>

<style scoped>
.NODEJSPage {
  width: 100%;
  height: 300px;
  background-color: rgb(0, 255, 106);
}
</style>
