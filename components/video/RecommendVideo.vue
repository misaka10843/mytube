<script setup lang="ts">
import api from '~/utils/api';
import {useNuxtApp} from "#app";
import {formatNumber,secondsToTimeString} from "~/utils/number-converter";

const videos = ref([]);

const fetchVideoList = async () => {
  try {
    const {data} = await api.getVideoList(5, '', true);
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
  <div class="px-3 py-4">
    <div class="flex flex-col gap-[12px]">
      <figure v-for="video in videos" class="w-full flex mb-[16px]">
        <nuxt-link :to="{ name: 'video-id', params: { id: video.bv } }"
          class="text-inherit h-[78.75px] mr-[8px] relative w-[140px] block text-black cursor-pointer no-underline">
          <img class="h-[78.75px] rounded-[8px] object-cover bg-[#e5e7eb] h-inherit w-full"
               :src="'/img/cover/'+video.bv+'.jpg'"
               alt=""/>
          <div
              class="text-white text-[12px] leading-[12px] p-[4px] absolute bg-[rgba(0,0,0,0.5)] rounded-[4px] bottom-[4px] box-border right-[4px] text-center z-[1]">
            {{ secondsToTimeString(video.duration) }}
          </div>
        </nuxt-link>
        <figcaption class="flex flex-1 flex-col h-[78.75px] ml-[8px] p-[1px_0] w-0">
          <nuxt-link class="text-inherit !text-[#9ca3af] cursor-pointer no-underline mb-auto" :to="{ name: 'video-id', params: { id: video.bv } }">
            <h3 class="line-clamp-2 text-[14px] !important leading-[1.2] mb-0 overflow-hidden text-ellipsis text-[#000000de] font-normal">
              {{ video.title }}
            </h3>
          </nuxt-link>
          <div class="items-center text-[#6b7280] flex text-[12px] pr-[12px] pt-[2px]">
            <i class="fa-regular fa-user"></i>
            <span
                class="text-[12px] line-clamp-1 ml-[4px] mr-[12px] overflow-hidden text-ellipsis break-all break-words">
                    {{ video.uploader }}
                  </span>
          </div>
          <div class="items-center text-[#6b7280] flex text-[12px] pr-[12px] pt-[2px]">
            <i class="fa-regular fa-thumbs-up"></i>
            <div class="ml-[4px] mr-[12px]">{{ formatNumber(video.likes) }}</div>
            <i class="fa-regular fa-circle-play"></i>
            <div class="ml-[4px] mr-[12px]">{{ formatNumber(video.play_count) }}</div>
          </div>
        </figcaption>
      </figure>
    </div>
  </div>

</template>

<style scoped>

</style>