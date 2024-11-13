<script setup lang="ts">
const isExpanded = ref(false);
const toggle = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<template>
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
    <time class="items-center cursor-default flex mr-[16px]">2024-11-11 20:03</time>
    <span class="items-center cursor-default flex mr-[16px]">
            <i class="fa-regular fa-eye mr-1"></i>
            <span>111222</span>
          </span>
  </div>
  <div
      class="line-clamp-3 overflow-hidden text-ellipsis whitespace-pre-wrap break-words"
      :class="{ block: isExpanded }"
      ref="contentRef"
  >
    <!-- 这里是您的内容 -->
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <!-- 更多内容 -->
  </div>
  <span class="cursor-pointer text-[var(--themeColor)]" @click="toggle">{{ isExpanded ? '收起' : '展开' }}</span>
</template>

<style scoped>

</style>