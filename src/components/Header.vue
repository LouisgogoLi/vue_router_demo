<template>
  <header :class="{ openMenu: isOpen }">
    <nav>
      <router-link class="title" :to="{ name: 'Home' }">Louis</router-link>
      <a id="moblie_menu" href="javascript:;" @click="handManuOpen"></a>
      <div>
        <router-link
          :to="{ name: 'rwd' }"
          :class="{ active: nRouteIndex === 1 }"
          >RWD</router-link
        >
        <router-link
          :to="{ name: 'vuejs_index' }"
          :class="{ active: nRouteIndex === 2 }"
          >VUEJS</router-link
        >
        <router-link
          :to="{ name: 'reactjs' }"
          :class="{ active: nRouteIndex === 3 }"
          >REACTJS</router-link
        >
        <router-link
          :to="{ name: 'html5' }"
          :class="{ active: nRouteIndex === 4 }"
          >HTML5</router-link
        >
        <router-link
          :to="{ name: 'nodejs' }"
          :class="{ active: nRouteIndex === 5 }"
          >NODEJS</router-link
        >
        <router-link
          :to="{ name: 'courses' }"
          :class="{ active: nRouteIndex === 6 }"
          >COURSES</router-link
        >
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<script setup>
import { useRoute } from "vue-router";
import { ref, watch } from "vue";

let aRouterList = ["", "rwd", "vuejs", "reactjs", "html5", "nodejs", "courses"];

const route = useRoute();
const nRouteIndex = ref(0);
watch(
  () => route.path,
  () => {
    const sNowMainPath = route.path.split("/")[1];

    aRouterList.forEach((item, index) => {
      if (item === sNowMainPath) {
        nRouteIndex.value = index;
      }
    });
  }
);

const isOpen = ref(false);
const handManuOpen = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style lang="scss" scoped>
header {
  background-color: #373c3f;
  width: 100%;
  height: 97px;
  @media screen and (max-width: 640px) {
    transition: height 0.2s;
    height: 37px;
    overflow: hidden;
    &.openMenu {
      height: 232px;
    }
  }
  > nav {
    position: relative;
    width: 1024px;
    height: 100%;
    margin: 0 auto;
    @media screen and (max-width: 1044px) {
      width: 100%;
    }
    @media screen and (max-width: 640px) {
      width: 100%;
      height: 232px;
    }
    > .title {
      line-height: 97px;
      font-size: 18px;
      float: left;
      color: #fff;
      margin-right: 20px;
      @media screen and (max-width: 1044px) {
        margin-left: 5%;
      }
      @media screen and (max-width: 640px) {
        line-height: 37px;
      }
    }
    > div {
      width: 100%;
      height: 100%;
      @media screen and (max-width: 640px) {
        clear: both;
        width: 100%;
        height: 195px;
      }
      > a {
        display: block;
        line-height: 97px;
        font-size: 15px;
        float: left;
        color: #fff;
        padding: 0 10px;
        &.active {
          color: goldenrod;
        }
        @media screen and (max-width: 640px) {
          width: 100%;
          height: auto;
          overflow: hidden;
          line-height: 37px;
          text-align: center;
        }
      }
    }
  }
}
a#moblie_menu {
  display: none;
  @media screen and (max-width: 640px) {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 37px;
    height: 37px;
    background-image: url("~@/assets/images/menu.jpg");
    background-position: 50% 50%;
    background-size: 95% auto;
    background-repeat: no-repeat;
  }
}
</style>
