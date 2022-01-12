<template>
  <div class="courses">
    <!-- 用來判斷非同步處理資料的作法
    <div v-if="Object.keys(oCourse.data).length !== 0"></div> -->
    <div v-if="bHasCourse">
      <h1>{{ oCourse.data.name }}</h1>
      <h2>NTD:{{ oCourse.data.money }}</h2>
      <img :src="oCourse.data.photo" alt="" />
      <div>
        <img :src="oCourse.data.img" alt="" />
        <p>{{ oCourse.data.teacher.name }}</p>
      </div>
    </div>
    <!-- error_message -->
    <h1 v-if="!bHasCourse">{{ sErrorMessage }}</h1>
  </div>
</template>

<script>
export default {
  name: "_courseId",
};
</script>

<script setup>
import courses from "@/api/json/courses.json";
import { useRoute, useRouter } from "vue-router";
import { ref, reactive, onUnmounted } from "vue";

const route = useRoute();
const router = useRouter();
const bHasCourse = ref(false);
const sErrorMessage = ref("沒有此課程");
const oCourse = reactive({ data: {} });

let timer = null;

courses.forEach((item) => {
  if (item.id === parseInt(route.params.courseId)) {
    bHasCourse.value = true;
    oCourse.data = item;
  }
});

if (!bHasCourse.value) {
  timer = setTimeout(() => {
    router.push({ name: "Home" });
    //回到上一頁
    //router.go(-1);
  }, 3000);
}

onUnmounted(() => {
  clearTimeout(timer);
});
</script>

<style scoped>
.courses {
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
