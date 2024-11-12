<script setup lang="ts">

</script>

<template>
  <div class="px-3 py-4">
    <div class="flex flex-col gap-[12px]">
      <figure class="w-full flex mb-[16px]">
        <nuxt-link to="/video/1"
                   class="text-inherit h-[78.75px] mr-[8px] relative w-[140px] block text-black cursor-pointer no-underline">
          <img class="h-[78.75px] rounded-[8px] object-cover bg-[#e5e7eb] h-inherit w-full"
               src="https://cdn2.mfuns.net/static/6a369b363b74f66adacf5bdf2dda5252954437d9514adf6623774c3dd0ee05d6.jpg"
               alt=""/>
          <div
              class="text-white text-[12px] leading-[12px] p-[4px] absolute bg-[rgba(0,0,0,0.5)] rounded-[4px] bottom-[4px] box-border right-[4px] text-center z-[1]">
            1:30
          </div>
        </nuxt-link>
        <figcaption class="flex flex-1 flex-col h-[78.75px] ml-[8px] p-[1px_0] w-0">
          <nuxt-link class="text-inherit !text-[#9ca3af] cursor-pointer no-underline mb-auto" to="/video/2">
            <h3 class="line-clamp-2 text-[12px] !important leading-[1.2] mb-0 text-[18px] overflow-hidden text-ellipsis inline-block text-[#000000de] font-normal">
              qwq
            </h3>
          </nuxt-link>
          <div class="items-center text-[#6b7280] flex text-[12px] pr-[12px] pt-[2px]">
            <i class="fa-regular fa-user"></i>
            <span
                class="text-[12px] line-clamp-1 ml-[4px] mr-[12px] overflow-hidden text-ellipsis break-all break-words">
                    misaka10843
                  </span>
          </div>
          <div class="items-center text-[#6b7280] flex text-[12px] pr-[12px] pt-[2px]">
            <i class="fa-regular fa-thumbs-up"></i>
            <div class="ml-[4px] mr-[12px]">111</div>
            <i class="fa-regular fa-circle-play"></i>
            <div class="ml-[4px] mr-[12px]">222</div>
          </div>
        </figcaption>
      </figure>
    </div>
  </div>

</template>

<style scoped>

</style>