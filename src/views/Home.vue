<template>
  <div>
    <Article />
    <Aside />
    <Main />
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<script setup>
import Article from "@/components/Article.vue";
import Aside from "@/components/Aside.vue";
import Main from "@/components/Main.vue";
</script>

<style></style>
