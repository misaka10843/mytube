<script setup lang="ts">
import {formatNumber, formatTextToParagraphs} from "~/utils/converter";

const isExpanded = ref(false);
const contentRef = ref(null);

const toggle = () => {
  isExpanded.value = !isExpanded.value;
};
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const formattedText = computed(() => {
  if (props.data && props.data.description) {
    return formatTextToParagraphs(props.data.description);
  }
  return '';
});

const pTagCount = ref(0);

const updatePTagCount = () => {
  if (contentRef.value) {
    const pTags = contentRef.value.querySelectorAll('p');
    pTagCount.value = pTags.length;
  }
};

onMounted(() => {
  updatePTagCount();
});

watch(formattedText, () => {
  updatePTagCount();
});
</script>

<template>
  <h1 class="text-[22px] overflow-hidden text-ellipsis line-clamp-2 mb-[15px] break-words">
    {{ props.data.title }}
  </h1>
  <div class="text-[#9ca3af] flex flex-wrap my-[12px]">
    <div class="items-center cursor-default flex mr-[16px]">
      <a href="" class="link">{{ props.data.name }}</a>
    </div>
    <div class="items-center cursor-default flex mr-[16px]">
      <div class="mr-1">
        <a href="" class="text-inherit inline !text-[#9ca3af] cursor-pointer no-underline">{{ props.data.category }}</a>
      </div>
    </div>
    <time class="items-center cursor-default flex mr-[16px]">{{ props.data.time }}</time>
    <span class="items-center cursor-default flex mr-[16px]">
            <i class="fa-regular fa-eye mr-1"></i>
            <span>{{ formatNumber(props.data.play_count) }}</span>
          </span>
  </div>
  <div
      class="line-clamp-3 overflow-hidden text-ellipsis whitespace-pre-wrap break-words"
      :class="{ block: isExpanded }"
      ref="contentRef"
      v-html="formattedText"
  >
  </div>
  <span class="cursor-pointer text-[var(--themeColor)]" v-if="pTagCount>3" @click="toggle">{{
      isExpanded ? '收起' : '展开'
    }}</span>
</template>

<style scoped>

</style>