<script setup>
import {onMounted} from "vue";
import {VideoPlayer} from "assets/scripts/video-player.js";

useHead({
  script: [
    {
      type: "text/javascript",
      src: 'https://fastly.jsdelivr.net/npm/flv.js@1.6.2/dist/flv.min.js',
      body: true
    },
    {
      type: "text/javascript",
      src: 'https://cdn.jsdelivr.net/npm/hls.js@1.1.5/dist/hls.min.js',
      body: true
    }
  ]
})

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
console.log(props.data);
const videoParams = {
  //url:`https://jx.91vrchat.com/bl/?url=${props.data.bv}`,
  pic: `/img/cover/${props.data.bv}.jpg`, //视频预览图链接地址（不传默认为视频第1帧）
  qualities: [
    {
      url: `https://jx.91vrchat.com/bl/?url=${props.data.bv}?tag=1080P`,
      type: "mp4",
      quality: "1080P",
      label: "1080P 高清",
    },
    {
      url: `https://jx.91vrchat.com/bl/?url=${props.data.bv}?tag=720P`,
      type: "mp4",
      quality: "720P",
      label: "720P 高清",
    },
  ],
  type: 'mp4', //视频类型
  title: props.data.title, //视频标题（必传）
  danmaku: [  // 附加弹幕文件
    {
      url: `/danmuku/${props.data.bv}.xml`,
      type: 'bilibili-xml',
      origin: 'bilibili',
    }
  ]
}

//console.log(props.params);
onMounted(() => {

  VideoPlayer(videoParams)

});
onUnmounted(() => {
  player.destroy();
})
</script>