<script setup lang="ts">
/* Todo
评论API：https://api.bilibili.com/x/v2/reply?type=1&oid=<av号>




 */
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
      <div id="mfunsPlayer" class="rounded-lg bg-white overflow-hidden mb-3">
        {{ $route.params.id }}
        <nuxt-link to="/video/1">1</nuxt-link>
        <nuxt-link to="/video/2">2</nuxt-link>
        <nuxt-link to="/video/3">3</nuxt-link>
        <div id="playerContainer" class="" ref="playerContainer"></div>
      </div>
      <div class="rounded-lg bg-white mb-3" style="padding: 12px 16px;">
        <h1 class="text-[22px] overflow-hidden text-ellipsis line-clamp-2 mb-[15px] break-words">
          电磁炮真是太可爱了
        </h1>
        <div class="text-[#9ca3af] flex flex-wrap my-[12px]">
          <div class="items-center cursor-default flex mr-[16px]">
            <a href="/member/16514" class="link">misaka10843</a>
          </div>
          <div class="items-center cursor-default flex mr-[16px]">
            <div class="mr-1">
              <a href="" class="text-inherit inline !text-[#9ca3af] cursor-pointer no-underline">鬼畜</a>
            </div>
          </div>
        </div>
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
      <div class="bg-white rounded-lg">
        <h2 class="font-medium text-[18px] mb-4 break-words">推荐视频</h2>
        <div>
          <figure class="flex mb-[16px] w-full">
            <span
                class="text-inherit h-[78.75px] mr-[8px] relative w-[140px] block text-black cursor-pointer no-underline">
              <img class="rounded-[8px] object-cover bg-[var(--color-gray-200)] h-inherit w-full inline-block max-w-full" src="https://cdn2.mfuns.net/static/4e0432c199ae022055bc08cc0ffaa6fc3f38ddf6f144ce6818ea920183d8f59d.jpg" alt="">
            <div class="text-white text-[12px] leading-[12px] p-[4px] absolute bg-[rgba(0,0,0,0.5)] rounded-[4px] bottom-[4px] box-border right-[4px] text-center z-[1]"></div>
            </span>
          </figure>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>