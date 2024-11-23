<script setup lang="ts">

import RecommendVideo from "~/components/video/RecommendVideo.vue";
</script>

<template>
  
  

  <div class=" flex flex-row flex-wrap ml-[calc(1.5rem * -0.5)] mr-[calc(1.5rem * -0.5)] relative">
    
    <div class="w-full md:w-[75%] px-3">


      <VideoList title="最新视频" category="生活"/>

      <VideoList title="科技视频" category="科技"/>


    </div>


    <div class="w-full md:w-[25%] px-3">
      <div class="w-full container-min-width relative">
        <h2 class="line-clamp-1 text-[20px] text-[#000000de] font-normal mb-[15px] break-words">
          热门视频
        </h2>
        <div>
          <RecommendVideo class="!p-0" :count="20" :random="false"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>