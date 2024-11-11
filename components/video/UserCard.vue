<script setup lang="ts">
import {ref} from 'vue';
import {useNuxtApp} from '#app';

const followed = ref(false); // 初始状态为未关注
const nuxtApp = useNuxtApp();
const toggleFollow = () => {
  followed.value = !followed.value; // 切换关注状态

  if (followed.value) {
    nuxtApp.$toast('关注成功', {type: 'success'});
  } else {
    nuxtApp.$toast('已取消关注', {type: 'success'});
  }
};
</script>
<template>
  <div id="user-card" style="padding: 12px 16px;">
    <div class="flex flex-col flex-nowrap gap-[12px] mb-[-6px] mt-[-6px] items-stretch justify-start">
      <div
          class="flex flex-row flex-nowrap gap-[12px] ml-[-6px] mr-[-6px] items-center justify-start mb-[6px] mt-[6px]">
        <div class="ml-[6px] mr-[6px] flex-shrink-0 relative">
          <img src="/img/avatar/Akkarin.jpg"
               class="rounded-full cursor-pointer bg-[var(--color-gray-200)] h-inherit object-cover w-full inline-block max-w-full"
               style="height: 62px; width: 62px;" alt="">
        </div>
        <a href="/member/66" class="ml-[6px] mr-[6px] h-full text-[var(--text)] cursor-pointer no-underline"
           style="font-size: inherit; color: var(--themeColor);">
          <div class="mb-[-2px] mt-[-2px] items-stretch justify-around flex-nowrap flex-col flex">
            <div class="mb-[2px] mt-[2px] ml-[-2px] mr-[-2px] items-center justify-start flex-nowrap flex-row">
							<span class="ml-[2px] mr-[2px] text-[16px]">
								misaka10843
							</span>
            </div>
            <span class="mb-[2px] mt-[2px] text-[#757f87] text-[14px] font-normal">
							这个人什么都没有写哦~
						</span>
            <span class="mb-[2px] mt-[2px] text-[#757f87] text-[14px] font-normal">
							粉丝数：10843
						</span>
          </div>
        </a>
      </div>
      <div class="flex mb-[6px] mt-[6px] ml-[-6px] mr-[-6px] items-stretch justify-start flex-nowrap flex-row">
        <button
            class="ml-[6px] mr-[6px] border-0 rounded-[4px] cursor-pointer h-[34px] m-0 outline-none p-0 w-[86px] font-inherit"
            style="flex: 1 1 0;"
            @click="toggleFollow"
            :class="{
               'follow': !followed,
               'followed': followed
             }"
        >
          {{ followed ? '已关注' : '关注' }}
        </button>
        <button
            class="ml-[6px] mr-[6px] bg-white border border-[var(--themeColorLight)] rounded-[4px] text-[var(--themeColorLight)] cursor-pointer h-[34px] m-0 outline-none p-0 w-[86px] font-inherit"
            style="flex: 1 1 0;">
          私信
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.followed {
  background-color: #f4f5f5;
  color: #777c82;
}

.follow {
  background-color: var(--themeColorLight);
  color: #fff;
}
</style>