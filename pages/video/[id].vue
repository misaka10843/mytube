<script setup lang="ts">
import UserCard from "~/components/video/UserCard.vue";
import RecommendVideo from "~/components/video/RecommendVideo.vue";
import VideoCard from "~/components/video/VideoCard.vue";
import api from "~/utils/api";
import {useNuxtApp} from "#app";

const route = useRoute()

//设置播放器高度，防止4：3画幅导致播放器变形
const playerContainer = ref(null);

const setPlayerHeight = () => {
  if (playerContainer.value) {
    const width = playerContainer.value.offsetWidth;
    const height = width * (9 / 16);
    playerContainer.value.style.height = `${height}px`;
  }
};

//获取视频信息
const video = ref([]);
const fetchVideo = async () => {
  try {
    const {data} = await api.getVideo(route.params.id);
    video.value = data;
  } catch (error) {
    useNuxtApp().$toast('视频获取失败:' + error, {type: 'error'});
  }
};

onMounted(() => {
  fetchVideo();
  setPlayerHeight();
  // 监听窗口大小变化
  window.addEventListener('resize', setPlayerHeight);
});

</script>

<template>
  <VideoPlayer v-if="video.bv" :data="video"/>
  <div class="relative flex flex-col md:flex-row md:justify-between mx-auto w-6/6 lg:w-5/6 top-8">
    <div class="w-full md:w-5/6 bg-opacity-75 px-4 md:px-0">
      <div id="mfunsPlayer" class="rounded-lg bg-white overflow-hidden mb-3">
        {{ $route.params.id }}
        <nuxt-link to="/video/1">1</nuxt-link>
        <nuxt-link to="/video/2">2</nuxt-link>
        <nuxt-link to="/video/3">3</nuxt-link>
        <div id="playerContainer" class="" ref="playerContainer"></div>
      </div>
      <div class="rounded-lg bg-white mb-3" style="padding: 12px 16px;">
        <VideoCard v-if="video.bv" :data="video" />
      </div>
      <div class="rounded-lg bg-white mb-3" style="padding: 12px 16px;">
        <div class="!p-0 mb-3">
          <div class="px-[22px]">
            <div class="items-center text-[#111827] flex text-[18px] font-bold justify-between leading-[50px] w-full">
              <div>全部评论(0)</div>
            </div>
            <div class="items-center text-[#9ca3af] flex h-[84px] justify-center">
              <span>没有更多了</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-full 2xl:w-[28%] md:w-5/12 mt-4 md:mt-0 px-4">
      <div class="w-full rounded-lg mb-3 bg-white">
        <UserCard v-if="video.bv" :data="video"/>
      </div>
      <div class="h-[345px] bg-white rounded-lg mb-3">
        <div class="items-center border-b border-[#ebebeb] flex justify-between p-[10px_16px] w-full">
          <span class="text-[16px] text-[#111827]">弹幕列表</span>
        </div>
        <div id="mfunsPlayer-video-danmaku-list" class="h-[300px]"></div>
      </div>
      <div class="bg-white rounded-lg mb-3">
        <div class="items-center border-b border-[#ebebeb] flex justify-between p-[10px_16px] w-full">
          <span class="text-[16px] text-[#111827]">推荐视频</span>
        </div>
        <RecommendVideo/>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>