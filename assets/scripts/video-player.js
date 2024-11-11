import * as MfunsPlayer from "assets/scripts/mytube-player/video-page-player.es.js";

export function VideoPlayer(videoParams) {
    console.log(videoParams); // 打印传递的视频参数

    let player;
    const container = document.querySelector("#playerContainer");
    const playerExtra = document.querySelector("#mfunsPlayer-video-danmaku-list");
    //读取数据
    const cfg = JSON.parse(localStorage.getItem("MfunsPlayerConfig") || "{}") || {};

    function setStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    function getStorage(key) {
        const s = localStorage.getItem(key);
        return s && JSON.parse(s);
    }

    function setConfig(key, value) {
        cfg[key] = value;
        localStorage.setItem("MfunsPlayerConfig", JSON.stringify(cfg));
    }

    function getConfig(key) {
        return cfg[key];
    }

    // 使用 videoParams 对象中的数据初始化播放器配置
    const mfunsPlayerConfig = {
        container,
        video: {
            url: videoParams.url ?? '',
            title: videoParams.title ?? '',
            hasPrev: videoParams.hasPrev ?? '',
            hasNext: videoParams.hasNext ?? '',
            danmaku: videoParams.danmaku ?? '',
            author: videoParams.author ?? '',
            part: videoParams.part ?? '',
            qualities: videoParams.qualities ?? '',
        },
        danmaku: {
            type: "bilibili-xml",
            opacity: getConfig("danmaku:opacity") ?? 1,
            area: getConfig("danmaku:area") ?? 1,
            speed: getConfig("danmaku:speed") ?? 1,
            scale: getConfig("danmaku:scale") ?? 1,
            blockType: getConfig("danmaku:blockType") || [],
        },
        danmakuBar: {
            loginRequired: false
        },
        danmakuList: {
            autoScroll: true
        },
        danmakuStyle: {
            fontSizeList: [
                [12, "极小"],
                [18, "小"],
                [25, "中"],
                [36, "大"],
                [45, "加大"],
                [64, "特大"],
            ],
            modeList: [1, 5, 4, 6],
        },
        invokes: {
            danmakuSend: async (danmaku, { danmakuId }) => {
                console.log(
                    `向 id:${danmakuId}@${danmaku.time}s 发送一条弹幕: \n${danmaku.content}\n模式${danmaku.mode} 颜色${danmaku.color} 字号${danmaku.size}`
                );
                player.plugins.danmakuBar.setCoolDown(5);
                player.plugins.danmakuList.add([
                    {
                        id: `send:${Date.now()}`,
                        date: Math.floor(Date.now() / 1000),
                        user: player.userId || 0,
                        ...danmaku,
                    },
                ]);
            },
            danmakuRecall: async () => {
                console.log("撤回成功");
                useNuxtApp().$toast("撤回成功！",{"type": "success"})
                return {
                    success: true,
                    message: "撤回成功",
                };
            },
            danmakuReport: async () => {
                console.log("举报成功");
                useNuxtApp().$toast("举报成功！",{"type": "success"})
                return {
                    success: true,
                    message: "举报成功",
                };
            },
            danmakuBlockUser: async () => {
                console.log("屏蔽成功");
                useNuxtApp().$toast("屏蔽成功！",{"type": "success"})
                return {
                    success: true,
                    message: "屏蔽成功",
                };
            },
            widescreenToggle: (flag) => {
                console.log(flag);
                playerExtra.style.display = flag ? "none" : "";
            },
        },

        loadingMask: {
            getTips: async () => {
                const data = await fetch("https://v1.hitokoto.cn?c=a&c=b&c=c").then((res) =>
                    res.json()
                );
                if (data.hitokoto) {
                    return `${data.hitokoto}　——${data.from}`;
                }
            },
            delay: 500,
        },
        autoSeek: getConfig("autoSeek") ?? '',
        autoPart: getConfig("autoPart") ?? '',
        lastPosition: getConfig("lastPosition") ?? '',
        autoplay: getConfig("autoplay") ?? '',
        mini: getConfig("mini") ?? '',
        contextMenu: {
            list: [
                {
                    content: "快捷键说明",
                    onClick: (player) => {
                        player.plugins.hotkeyInfo?.toggle(true);
                    },
                },
                {
                    content: `Mfuns Player v${MfunsPlayer.version}`,
                    onClick: (player) => {
                        player.plugins.about?.toggle(true);
                    },
                },
            ],
        },
        modal: {
            panels: ["about", "hotkeyInfo"],
        },
    };
    console.log(mfunsPlayerConfig);
    // 创建播放器实例
    player = new MfunsPlayer.Player(mfunsPlayerConfig);
    window.player = player; // 将播放器实例挂载到 window 对象上，以便全局访问
    // 监听播放器事件
    player.on("play", () => {
        console.log("play");
    });
    player.on("pause", () => {
        console.log("pause");
    });
    player.on("danmaku:areaChange", () => {
        console.log("areaChange");
    });
    player.on("ended", () => {
        console.log("视频播放结束");
    });

    // 挂载弹幕列表和弹幕条
    player.plugins.danmakuList.mount(playerExtra);
    // 监听全屏和网页屏幕切换事件
    player.on("webscreen:enter", () => {
        player.plugins.side.mount(player.plugins.danmakuList);
    });
    player.on("fullscreen:enter", () => {
        player.plugins.side.mount(player.plugins.danmakuList);
    });
    player.on("webscreenExit", () => {
        player.plugins.danmakuList.mount(playerExtra);
    });
    player.on("fullscreenExit", () => {
        player.plugins.danmakuList.mount(playerExtra);
    });
    player.on("widescreenExit", () => {
        player.plugins.danmakuList.mount(playerExtra);
    });
    player.on("widescreen:enter", () => {
        player.plugins.side.mount(player.plugins.danmakuList);
    });
    //存储设置
    player.on("timeupdate", (t) => {
        setStorage("lastPosition", t);
    });
    player.on("seeking", (t) => {
        setStorage("lastPosition", t);
    });
    player.on("setValue", (k, v) => {
        setConfig(k, v);
    });
}