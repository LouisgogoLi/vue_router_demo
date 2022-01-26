<template>
  <div>
    <ArticleComponent />
    <AsideComponent />
    <MainComponent />
  </div>
</template>

<script>
export default {
  name: "HomeViewView",
};
</script>

<script setup>
import ArticleComponent from "@/components/ArticleComponent.vue";
import AsideComponent from "@/components/AsideComponent.vue";
import MainComponent from "@/components/MainComponent.vue";
</script>

<style></style>
