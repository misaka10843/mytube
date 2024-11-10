<script setup lang="ts">

import UserCard from "~/components/video/UserCard.vue";
// 获取 .player 容器的引用
const playerContainer = ref(null);

const setPlayerHeight = () => {
  if (playerContainer.value) {
    const width = playerContainer.value.offsetWidth;
    const height = width * (9 / 16);
    playerContainer.value.style.height = `${height}px`;
  }
};
onMounted(() => {
  setPlayerHeight();
  // 监听窗口大小变化
  window.addEventListener('resize', setPlayerHeight);
});

</script>

<template>
  <VideoPlayer/>
  <div class="relative flex flex-col md:flex-row md:justify-between mx-auto w-6/6 lg:w-5/6 top-8">
    <div class="w-full md:w-5/6 bg-opacity-75">
      <div id="mfunsPlayer" class="rounded-lg bg-white overflow-hidden">
        {{ $route.params.id }}
        <nuxt-link to="/video/1">1</nuxt-link>
        <nuxt-link to="/video/2">2</nuxt-link>
        <nuxt-link to="/video/3">3</nuxt-link>
        <div id="playerContainer" class="" ref="playerContainer"></div>
      </div>
    </div>
    <div class="flex flex-col w-full md:w-3/12 mt-4 md:mt-0 px-4">
      <div class="w-full rounded-lg mb-3 bg-white">
        <UserCard/>
      </div>


      <div class="h-[345px] bg-white rounded-lg">
        <div class="content-center border-b-1 border-b-[#ebebeb] px-2.5 py-2.5"
             style="border-bottom: 1px solid #ebebeb;">
          <span class="text-[#111827]">弹幕列表</span>
        </div>
        <div id="mfunsPlayer-video-danmaku-list" class="h-[300px]"></div>
      </div>

    </div>

  </div>
</template>

<style scoped>

</style>