<script setup lang="ts">
import api from "~/utils/api";
import {useNuxtApp} from "#app";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  }
});
const videos = ref([]);
const fetchVideoList = async () => {
  try {
    const {data} = await api.getVideoList(8, props.category ?? '', false);
    videos.value = data;
  } catch (error) {
    useNuxtApp().$toast('视频列表获取失败:' + error, {type: 'error'});
  }
};
onMounted(() => {
  fetchVideoList();
});
</script>

<template>
  <div
      class="w-full container-min-width mx-auto px-[calc(1.5rem * 0.5)] relative border-b border-[#ebebeb] mb-8">
    <div class="mb-[-10px] mt-[-10px] items-stretch justify-start flex-nowrap flex-col">
      <div class="mb-[10px] mt-[10px]">
        <h2 class="line-clamp-1 text-[20px] text-[#000000de] font-normal mb-[15px] break-words">
          {{ props.title }}
        </h2>
        <div
            class="grid gap-[16px] grid-cols-[repeat(auto-fill,_minmax(140px,_1fr))] md:grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] grid-rows-[repeat(2,_1fr)] overflow-hidden">
          <figure v-for="video in videos" class="flex flex-col mb-[16px] w-full">
            <nuxt-link class="mb-auto text-black cursor-pointer no-underline"
                       :to="{ name: 'video-id', params: { id: video.bv } }">
                <span class="h-0 mr-[8px] pb-[56.25%] relative w-full block text-black cursor-pointer no-underline">
                  <img
                      class="rounded-[8px] absolute bottom-0 h-full object-cover right-0 w-full bg-[#e5e7eb] inline-block max-w-full"
                      :src="'/img/cover/'+video.bv+'.jpg'"
                      alt="">
                  <span
                      class="bg-[#00000080] rounded-[4px] absolute bottom-[4px] box-border text-white text-[12px] leading-[12px] p-[4px] right-[4px] text-center z-[1]">
                    {{ secondsToTimeString(video.duration) }}
                  </span>
                </span>
              <figcaption class="flex flex-1 flex-col py-[1px]">
                <h3 class="mp-2 text-[14px] leading-[1.2] mb-[8px] mt-[12px]  text-[#000000de] font-normal break-words line-clamp-2">
                  {{ video.title }}
                </h3>

                <div class="flex items-center text-[#6b7280] text-[12px] pr-[12px] pt-[2px]">
                  <i class="fa-regular fa-user"></i>
                  <div class="ml-[4px] mr-[12px]">
                    {{ video.uploader }}
                  </div>
                </div>
                <div class="flex items-center text-[#6b7280] text-[12px] pr-[12px] pt-[2px]">
                  <i class="fa-regular fa-circle-play"></i>
                  <div class="ml-[4px] mr-[12px]">
                    {{ formatNumber(video.likes) }}
                  </div>
                  <i class="fa-regular fa-calendar"></i>
                  <div class="ml-[4px] mr-[12px]">
                    {{ formatNumber(video.play_count) }}
                  </div>
                </div>
              </figcaption>
            </nuxt-link>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>