var hi = (i, t, e) => {
  if (!t.has(i))
    throw TypeError("Cannot " + e);
};
var M = (i, t, e) => (hi(i, t, "read from private field"), e ? e.call(i) : t.get(i)), R = (i, t, e) => {
  if (t.has(i))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(i) : t.set(i, e);
}, E = (i, t, e, s) => (hi(i, t, "write to private field"), s ? s.call(i, e) : t.set(i, e), e);
const Ki = /mobile/i.test(window.navigator.userAgent), Hi = document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || !1, _i = document.pictureInPictureEnabled || !1;
function u(i, t, e) {
  const s = document.createElement(i);
  if (t)
    for (const n in t)
      s.setAttribute(n, t[n]);
  return typeof e == "string" ? s.innerHTML = e : e instanceof Node && s.appendChild(e), s;
}
function Gi(i, t) {
  typeof t == "string" ? i.innerHTML = t : (i.innerHTML = "", i.appendChild(t));
}
const _t = (i, t, e = !1) => {
  let s = null, n = !1;
  return function(...l) {
    s && clearTimeout(s), e && !n ? (i.apply(this, l), n = !0) : s = setTimeout(() => {
      i.apply(this, l), clearTimeout(s), s = null, n = !1;
    }, t);
  };
}, Mi = (i, t) => {
  let e = null;
  return function(...s) {
    e || (e = setTimeout(() => {
      i.apply(this, s), clearTimeout(e), e = null;
    }, t));
  };
};
function Zi(i, t) {
  return i + Math.random() * (t - i);
}
function Ot(i, t, e) {
  return i > t ? i < e ? i : e : t;
}
function Vt(i) {
  const t = i.split(":").slice(-3), e = parseInt(t[t.length - 1]) || 0, s = parseInt(t[t.length - 2]) || 0, n = parseInt(t[t.length - 3]) || 0, r = parseInt(t[t.length - 4]) || 0;
  return e + s * 60 + n * 3600 + r * 86400;
}
function ft(i, t = 6) {
  if (i = Number.isFinite(i) ? Math.floor(i) : 0, !(t & 15))
    return i.toString();
  const e = (...l) => l.map((h) => h < 10 ? `0${h}` : `${h}`).join(":");
  let s, n, r;
  return t & 1 && i < 60 ? i.toString() : (s = Math.floor(i / 60), i = i % 60, t & 2 && s < 60 ? e(s, i) : (n = Math.floor(s / 60), s = s % 60, t & 4 && n < 24 ? e(n, s, i) : (r = Math.floor(n / 60), n = n % 24, e(r, n, s, i))));
}
function Fi(i) {
  return i[0] === "#" && (i = i.substring(1)), i.length === 3 && (i = `${i[0]}${i[0]}${i[1]}${i[1]}${i[2]}${i[2]}`), parseInt(i, 16) + 0 & 16777215;
}
function Pi(i) {
  return `#${`00000${i.toString(16)}`.slice(-6)}`;
}
const Pt = {
  yyyy: (i) => i.getFullYear().toString(),
  yy: (i) => i.getFullYear().toString().slice(-2),
  MM: (i) => (i.getMonth() + 1).toString().padStart(2, "0"),
  dd: (i) => i.getDate().toString().padStart(2, "0"),
  HH: (i) => i.getHours().toString().padStart(2, "0"),
  mm: (i) => i.getMinutes().toString().padStart(2, "0"),
  ss: (i) => i.getSeconds().toString().padStart(2, "0")
};
function Ze(i, t) {
  return t.replace(
    /yyyy|yy|MM|dd|HH|mm|ss/g,
    (e) => {
      var s;
      return (s = Pt[e]) == null ? void 0 : s.call(Pt, i);
    }
  );
}
function Et(i) {
  return Object.getPrototypeOf(i) === Object.prototype;
}
function Je(...i) {
  if (i.length < 2)
    return i[0];
  let t = i[0];
  return i.shift(), i.forEach((e) => {
    if (Et(e)) {
      Et(t) || (t = {});
      for (const s in e)
        t[s] && Et(e[s]) ? t[s] = Je(t[s], e[s]) : t[s] = e[s];
    }
  }), t;
}
function Ri(...i) {
  let t = { ...i[0] }, e = i[0].plugins || [];
  return i.shift(), i.forEach((s) => {
    s.plugins && (e = e.concat(e, s.plugins)), Je(t, s);
  }), t.plugins = e, t;
}
const Wa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  HexColorToNumber: Fi,
  assignDeep: Je,
  clamp: Ot,
  createElement: u,
  dateFormat: Ze,
  debounce: _t,
  fullScreenEnabled: Hi,
  isMobile: Ki,
  isPlainObject: Et,
  mergeOptions: Ri,
  numberToHexColor: Pi,
  pictureInPictureEnabled: _i,
  random: Zi,
  replaceChildren: Gi,
  secondToTime: ft,
  throttle: Mi,
  timeToSecond: Vt
}, Symbol.toStringTag, { value: "Module" })), a = "mfuns-player", Ji = "3.0.0-alpha.13", Qi = "916b486", tn = "https://github.com/Mfuns-cn/mfunsPlayer/tree/v3-beta", en = [
  { name: "Minteea", id: "Minteea", link: "https://github.com/Minteea" },
  { name: "鲁迪钨丝", id: "Rudiusu", link: "https://github.com/Rudiusu" }
], ci = {
  play: () => [],
  pause: () => [],
  ended: () => [],
  loadeddata: () => [],
  loadedmetadata: () => [],
  waiting: () => [],
  playing: () => [],
  canplay: () => [],
  canplaythrough: () => [],
  timeupdate: (i) => [i.currentTime],
  durationchange: (i) => [i.duration],
  progress: (i) => [i.buffered],
  seeking: (i) => [i.currentTime],
  seeked: (i) => [i.currentTime],
  volumechange: (i) => [i.volume, i.muted],
  ratechange: (i) => [i.playbackRate],
  enterpictureinpicture: () => [],
  leavepictureinpicture: () => []
};
class sn {
  constructor(t, e) {
    this.ratio = null, this.info = {}, this.mediaController = null, this.player = t, this.$el = this.player.$content.appendChild(
      u("video", { class: `${a}-video` })
    ), this.$el.volume = e.volume ?? 1, this.$el.loop = e.loop ?? !1, this.$el.playbackRate = e.playbackRate ?? 1, this.$el.autoplay = e.autoplay ?? !1, this._attachEvent(this.$el), this.player.on("ended", () => {
      this.player.hook.call("end").then((s) => {
        s && this.player.emit("end");
      });
    });
  }
  /** 设置视频 */
  set(t, e, s) {
    this.player.hook.call("video.set", t).then(async (n) => {
      var r, l;
      if (n) {
        (l = (r = this.mediaController) == null ? void 0 : r.destroy) == null || l.call(r), this.mediaController = null, this.info = t, this.player.emit("videoChange", { ...t });
        let { url: h, type: o, live: c } = t;
        const p = { url: h, type: o, play: e, time: s, live: c };
        this.player.hook.call("video.beforeLoad", p).then(() => {
          p.url ? this.load(p) : this.player.throw(new Error("缺少视频播放信息"));
        });
      }
    });
  }
  /** 加载视频 */
  load(t) {
    this.player.hook.call("video.load", t).then((e) => {
      e ? (this.mediaController = this.player.loader.create(t, this.$el), this.player.emit("videoLoad", t)) : this.player.throw(new Error("视频加载失败"));
    });
  }
  /** 添加视频事件 */
  _attachEvent(t) {
    this.detachEventController = new AbortController();
    for (const e in ci) {
      const s = ci[e];
      t.addEventListener(
        e,
        () => {
          this.player.emit(
            e,
            ...s(t)
          );
        },
        { signal: this.detachEventController.signal }
      );
    }
  }
  bind(t) {
    var e;
    this.$el = t, (e = this.detachEventController) == null || e.abort(), this._attachEvent(t);
  }
  /** 获取播放信息 */
  getVideoInfo() {
    return {
      ...this.info
    };
  }
  /** 获取媒体信息 */
  getMediaInfo() {
    var t, e, s;
    return {
      url: (t = this.mediaController) == null ? void 0 : t.url,
      type: ((e = this.mediaController) == null ? void 0 : e.type) || "",
      live: ((s = this.mediaController) == null ? void 0 : s.live) || !1
    };
  }
}
class nn {
  constructor(t) {
    this.isInit = !1, this.isReady = !1, this.isMounted = !1, this.player = t;
  }
  get list() {
    return this.player.plugins;
  }
  /** 插件模块初始化 @internal */
  init(t) {
    var e;
    this.isInit || (this.isInit = !0, (e = t.plugins) == null || e.forEach((s) => {
      this.register(s, t);
    }), this.pluginsReady(), this.player.emit("ready"), this.player.once("mounted", () => {
      this.playerMounted();
    }));
  }
  /** 注册插件 */
  register(t, e) {
    var n, r, l, h;
    const s = typeof t == "function" ? new t(this.player) : t;
    t.pluginName && (this.list[t.pluginName] = s), !s.initialized && ((n = s.init) == null || n.call(s, this.player), (r = s.apply) == null || r.call(s, this.player, e), this.isReady && ((l = s.ready) == null || l.call(s, this.player)), this.isMounted && ((h = s.mounted) == null || h.call(s, this.player)), s.initialized = !0);
  }
  /** 访问已安装插件实例 */
  get(t) {
    return this.list[t];
  }
  /** 获取插件实例 */
  from(t) {
    switch (typeof t) {
      case "object":
        return t;
      case "function":
        return this.build(t);
      default:
        return this.list[t];
    }
  }
  /** 初始化插件实例 */
  build(t, e = {}) {
    var n, r, l, h;
    const s = typeof t == "function" ? new t(this.player) : t;
    return s.initialized || ((n = s.init) == null || n.call(s, this.player), (r = s.apply) == null || r.call(s, this.player, e), this.isReady ? (l = s.ready) == null || l.call(s, this.player) : this.player.once("ready", () => {
      var o;
      return (o = s.mounted) == null ? void 0 : o.call(s, this.player);
    }), this.isMounted ? (h = s.mounted) == null || h.call(s, this.player) : this.player.once("mounted", () => {
      var o;
      return (o = s.mounted) == null ? void 0 : o.call(s, this.player);
    }), s.initialized = !0), s;
  }
  /** 所有插件注册完毕后执行 @internal */
  pluginsReady() {
    var t;
    if (!this.isReady) {
      for (const e in this.list) {
        const s = this.list[e];
        (t = s.ready) == null || t.call(s, this.player);
      }
      this.isReady = !0;
    }
  }
  /** 播放器挂载后执行 @internal */
  playerMounted() {
    var t;
    if (!this.isMounted)
      for (const e in this.list) {
        const s = this.list[e];
        (t = s.mounted) == null || t.call(s, this.player);
      }
  }
  /** 销毁所有插件 @internal */
  destroy() {
    var t;
    for (const e in this.list) {
      const s = this.list[e];
      (t = s.destroy) == null || t.call(s);
    }
  }
}
class an {
  constructor() {
    this.hooks = {};
  }
  /** 注册钩子 */
  register(t, e, s = !1) {
    let n = this.hooks[t];
    n || (n = [], this.hooks[t] = n), s ? n.unshift(e) : n.push(e);
  }
  /** 移除钩子 */
  unregister(t, e) {
    let s = this.hooks[t];
    s || (s = [], this.hooks[t] = s);
    const n = s.indexOf(e);
    n > -1 && s.splice(n, 1);
  }
  /** 调用钩子函数
   * @param name 钩子名称
   * @param ctx 钩子上下文
   * @param defaultFunc 钩子在正常遍历完毕后最终执行的钩子函数
   */
  async call(t, e, s) {
    const n = this.hooks[t];
    if (n != null && n.length)
      for (const r of n) {
        const l = await r(e);
        if (l == !0)
          return console.log(`钩子提前结束调用: ${t}`), console.log(r), !0;
        if (l == !1)
          return console.log(`钩子被拦截: ${t}`), console.log(r), !1;
      }
    return console.log(`钩子调用完毕: ${t}`), console.log(e), (s == null ? void 0 : s(e)) ?? !0;
  }
}
class rn {
  constructor(t) {
    this.list = /* @__PURE__ */ new Map(), this.player = t;
  }
  /** 注册加载器 */
  register(t, e) {
    this.list.set(t, e);
  }
  /** 移除加载器 */
  unregister(t) {
    this.list.delete(t);
  }
  /** 创建媒体控制实例 */
  create(t, e) {
    for (const [s, n] of this.list)
      if (n.check(t))
        return n.create(t, e);
    return this.createDefault(t, e);
  }
  /** 常规方式创建实例 */
  createDefault(t, e) {
    const { type: s, url: n, live: r, play: l, time: h } = t, o = {
      type: s || "",
      url: n,
      live: r || !1,
      mediaElement: e,
      destroy() {
        this.mediaElement.src = "";
      }
    }, c = h === !0 ? this.player.currentTime : h;
    return e.src = n, e.addEventListener(
      "loadeddata",
      () => {
        c && this.player.seek(c), l && this.player.play();
      },
      { once: !0 }
    ), o;
  }
}
class ln {
  constructor() {
    this.listeners = {}, this.onceListeners = {}, this.customEventList = [];
  }
  /** 添加监听 */
  on(t, e) {
    this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push(e);
  }
  /** 添加一次性监听 */
  once(t, e) {
    this.onceListeners[t] || (this.onceListeners[t] = []), this.onceListeners[t].push(e);
  }
  /** 移除监听 */
  off(t, e) {
    this.listeners[t] || (this.listeners[t] = []);
    const s = this.listeners[t].indexOf(e);
    s > -1 && this.listeners[t].splice(s, 1);
  }
  /** 触发事件 */
  emit(t, ...e) {
    var s, n;
    if ((s = this.listeners[t]) != null && s.length)
      for (let r = 0; r < this.listeners[t].length; r++)
        this.listeners[t][r](...e);
    if ((n = this.onceListeners[t]) != null && n.length) {
      for (let r = 0; r < this.onceListeners[t].length; r++)
        this.onceListeners[t][r](...e);
      this.onceListeners[t] = [];
    }
  }
}
var Z;
let ut = (Z = class {
  constructor(t) {
    this.hook = new an(), this.plugins = {}, this.invokes = {}, this._eventEmitter = new ln(), this.Player = Z, this.container = t.container, this.$el = u("div", { class: `${a} mpui` }), this.$main = this.$el.appendChild(u("div", { class: `${a}-main` })), this.$area = this.$main.appendChild(u("div", { class: `${a}-area` })), this.$content = this.$area.appendChild(
      u("div", { class: `${a}-content` })
    ), this.invokes = t.invokes ?? {}, this.plugin = new nn(this), this._videoController = new sn(this, t), this.loader = new rn(this), this.init(t);
  }
  /** 初始化播放器 */
  async init(t) {
    var e;
    this.on("videoChange", () => {
      this.$el.classList.add("is-start");
    }), this.$el.classList.add("is-paused"), this.on("play", () => {
      this.$el.classList.remove("is-start"), this.$el.classList.remove("is-paused");
    }), this.on("pause", () => {
      this.$el.classList.add("is-paused");
    }), this.on("waiting", () => {
      this.$el.classList.add("is-loading");
    }), this.on("playing", () => {
      this.$el.classList.remove("is-loading");
    }), this.plugin.init(t), (e = this.container) == null || e.appendChild(this.$el), this.emit("mounted"), this._videoController.set(t.video || {}, t.autoplay, t.time);
  }
  /** 播放器视频元素 */
  get $video() {
    return this._videoController.$el;
  }
  /** 获取视频信息 */
  getVideoInfo() {
    return this._videoController.getVideoInfo();
  }
  /** 获取媒体信息 */
  getMediaInfo() {
    return this._videoController.getMediaInfo();
  }
  /** 获取播放器的媒体元素 */
  getMediaElement() {
    return this._videoController.$el;
  }
  /** 绑定媒体元素 */
  attachMediaElement(t) {
    this._videoController.bind(t);
  }
  /** 获取媒体控制实例 */
  getMediaController() {
    return this._videoController.mediaController;
  }
  /** 绑定媒体控制实例 */
  attachMediaController(t) {
    this._videoController.mediaController = t, this._videoController.bind(t.mediaElement);
  }
  /** 设置视频内容 */
  setVideo(t, e, s) {
    return this._videoController.set(t, e, s);
  }
  /** 加载视频源 */
  loadVideo(t) {
    return this._videoController.load(t);
  }
  // --- 播放切换控制 --- //
  /** 切换上一个 */
  prev() {
    this.hook.call("prev");
  }
  /** 切换下一个 */
  next() {
    this.hook.call("next");
  }
  // --- 视频播放控制 --- //
  /** 当前播放器暂停状态 */
  get paused() {
    return this.$video.paused;
  }
  /** 当前播放时间 */
  get currentTime() {
    return this.$video.currentTime;
  }
  /** 当前播放总时间 */
  get duration() {
    return this.$video.duration;
  }
  /** 当前播放音量 */
  get volume() {
    return this.$video.volume;
  }
  /** 当前静音状态 */
  get muted() {
    return this.$video.muted;
  }
  /** 当前播放速度 */
  get playbackRate() {
    return this.$video.playbackRate;
  }
  /** 当前视频循环 */
  get loop() {
    return this.$video.loop;
  }
  /** 当前自动播放 */
  get autoplay() {
    return this.$video.autoplay;
  }
  /** 开始播放 */
  play() {
    this.hook.call("play").then((t) => {
      t && this.$video.play();
    });
  }
  /** 暂停播放 */
  pause() {
    this.hook.call("pause").then((t) => {
      t && this.$video.pause();
    });
  }
  /** 跳转
   * @param time 跳转时间点（秒）
   */
  seek(t) {
    this.hook.call("seek").then((e) => {
      e && (this.$video.currentTime = Ot(t, 0, this.$video.duration));
    });
  }
  /** 设置音量
   * @param volume 音量（0-1）
   */
  setVolume(t) {
    this.$video.volume = Ot(t, 0, 1);
  }
  /** 静音 */
  setMuted(t) {
    this.$video.muted = t;
  }
  /** 设置倍速 */
  setPlaybackRate(t) {
    this.$video.playbackRate = t;
  }
  /** 设置视频循环 */
  setLoop(t) {
    this.$video.loop = t, this.emit("loopChange", t);
  }
  /** 设置自动播放 */
  setAutoplay(t) {
    this.$video.autoplay = t, this.emit("autoplayChange", t);
  }
  // --- 事件 --- //
  /** 监听事件 */
  on(t, e) {
    this._eventEmitter.on(t, e);
  }
  /** 取消监听事件 */
  off(t, e) {
    this._eventEmitter.off(t, e);
  }
  /** 一次性监听事件 */
  once(t, e) {
    this._eventEmitter.once(t, e);
  }
  /** 发送事件 */
  emit(t, ...e) {
    this._eventEmitter.emit(t, ...e);
  }
  define(t, e) {
    Object.defineProperty(this, t, typeof e == "function" ? { value: e } : e);
  }
  /** 抛出错误 */
  throw(t) {
    console.error(t), this.emit("error", t);
  }
  /** 播放器销毁 */
  destroy() {
    this.plugin.destroy();
  }
}, Z.version = Ji, Z.gitHash = Qi, Z);
class f {
  constructor(t) {
    this.player = t, this.plugins = t.plugins, this.throw = t.throw;
  }
}
class yt extends f {
  $(t) {
    return this.$el.querySelector(t);
  }
  constructor(t, e) {
    super(t), this.$el = e;
  }
}
var st;
class Ni extends yt {
  constructor() {
    super(...arguments);
    R(this, st, void 0);
  }
  /** 挂载 */
  mount(e, s) {
    e.appendChild(this.$el), this.unmount(), E(this, st, s == null ? void 0 : s.onUnmount);
  }
  /** 卸载 */
  unmount() {
    var e;
    (e = M(this, st)) == null || e.call(this), E(this, st, void 0);
  }
  show() {
    this.$el.style.display = "";
  }
  hide() {
    this.$el.style.display = "none";
  }
}
st = new WeakMap();
class F extends Ni {
}
var it;
class bt extends Ni {
  constructor(e, s) {
    super(e, s);
    R(this, it, void 0);
    this.shown = !1;
  }
  /** 挂载 */
  mount(e, s) {
    super.mount(e, { onUnmount: s == null ? void 0 : s.onUnmount }), E(this, it, s == null ? void 0 : s.onToggle);
  }
  /** 卸载 */
  unmount() {
    this.toggle(!1), super.unmount(), E(this, it, void 0);
  }
  /** 切换显示隐藏状态 */
  toggle(e) {
    var s;
    this.shown = e ?? !this.shown, (s = M(this, it)) == null || s.call(this, this.shown);
  }
}
it = new WeakMap();
class Ua extends f {
}
const on = ({ divider: i }) => (
  /*html*/
  `
  <div
    class="mpui-slider-track"
    style="
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
  "
  >
    <div class="mpui-slider-bar" style="position: absolute; left: 0; height: 100%"></div>
    <div class="mpui-slider-thumb-track" style="height: 0px">
      <div
        class="mpui-slider-thumb"
        style="position: absolute; transform: translate(-50%, -50%)"
      ></div>
      ${i ? (
    /*html*/
    `
            <div class="mpui-slider-divider">
              ${new Array(i).fill(
      /*html*/
      '<div class="mpui-slider-divider-dot"></div>'
    ).join("")}
            </div>
          `
  ) : ""}
    </div>
  </div>
`
);
class ct {
  constructor({
    container: t,
    min: e,
    max: s,
    step: n,
    divider: r = 0,
    value: l = 0,
    onChange: h,
    onDragStart: o,
    onDragEnd: c,
    onDrag: p
  }) {
    this.container = t, this.min = e, this.max = s, this.step = n || 0, this.divider = r ? typeof r == "boolean" ? this.step : r : 0, this.value = isNaN(l) ? l : Number(l), this.onChange = h, this.onDragStart = o, this.onDragEnd = c, this.onDrag = p, this.$el = this.container.appendChild(
      u(
        "div",
        {
          class: "mpui-slider mpui-slider-horizontal",
          style: "position: relative; width: 100%; height: 100%"
        },
        on({ divider: this.divider })
      )
    ), this.$track = this.$el.querySelector(".mpui-slider-track"), this.$bar = this.$track.querySelector(".mpui-slider-bar"), this.$thumbTrack = this.$track.querySelector(".mpui-slider-thumb-track"), this.$thumb = this.$track.querySelector(".mpui-slider-thumb"), this.$el.addEventListener("mousedown", ($) => {
      var w;
      const b = $, { clientX: S } = b, T = this.$track.offsetWidth;
      let m = this.$thumbTrack.offsetWidth;
      m = m || T;
      const v = (T - m) / 2, d = this.$el.getBoundingClientRect().left;
      let g = S - d - v;
      g = g >= m ? m : g <= 0 ? 0 : g;
      const L = this.step ? Math.round(g / m * (this.max - this.min) / this.step) * this.step + this.min : g / m * (this.max - this.min) + this.min;
      (w = this.onDragStart) == null || w.call(this, L), this.value != L && this.drag(L);
      const k = (x) => {
        var ot;
        const H = x, { clientX: y } = H;
        H.preventDefault(), H.stopPropagation();
        let _ = y - d - v;
        _ = _ >= m ? m : _ <= 0 ? 0 : _;
        const N = this.step ? Math.round(_ / m * (this.max - this.min) / this.step) * this.step + this.min : _ / m * (this.max - this.min) + this.min;
        this.value != N && this.drag(N), (ot = window.getSelection()) == null || ot.removeAllRanges();
      }, A = (x) => {
        var y, _;
        x.stopPropagation(), (y = window.getSelection()) == null || y.removeAllRanges(), document.removeEventListener("mousemove", k), document.removeEventListener("mouseup", A), (_ = this.onDragEnd) == null || _.call(this, L);
      };
      document.addEventListener("mousemove", k), document.addEventListener("mouseup", A);
    }), this.setValue(this.value);
  }
  /** 设置滑动条值 */
  setValue(t) {
    var s;
    this.value = t <= this.min ? this.min : t >= this.max ? this.max : t;
    const e = (this.value - this.min) / (this.max - this.min);
    this.$thumb.style.left = `${e * 100}%`, this.$bar.style.width = `${e * 100}%`, (s = this.onChange) == null || s.call(this, this.value);
  }
  /** 拖动滑动条到特定的值 */
  drag(t) {
    var e;
    this.setValue(t), (e = this.onDrag) == null || e.call(this, this.value);
  }
}
const hn = (
  /*html*/
  `
  <div
    class="mpui-slider-track"
    style="
      position: absolute;
      height: 100%;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: center;
      align-items: center
    "
  >
    <div class="mpui-slider-bar" style="position: absolute; bottom: 0; width: 100%"></div>
    <div class="mpui-slider-thumb-track" style="width: 0px">
      <div
        class="mpui-slider-thumb"
        style="position: absolute; transform: translate(-50%, -50%)"
      ></div>
    </div>
  </div>
`
);
class Di {
  constructor({
    container: t,
    min: e,
    max: s,
    step: n,
    value: r = 0,
    onChange: l,
    onDragStart: h,
    onDragEnd: o,
    onDrag: c
  }) {
    this.container = t, this.min = e, this.max = s, this.step = n || 0, this.value = isNaN(r) ? r : Number(r), this.onChange = l, this.onDragStart = h, this.onDragEnd = o, this.onDrag = c, this.$el = u(
      "div",
      {
        class: "mpui-slider mpui-slider-vertical",
        style: "position: relative; width: 100%; height: 100%"
      },
      hn
    ), this.$track = this.$el.querySelector(".mpui-slider-track"), this.$bar = this.$track.querySelector(".mpui-slider-bar"), this.$thumbTrack = this.$track.querySelector(".mpui-slider-thumb-track"), this.$thumb = this.$track.querySelector(".mpui-slider-thumb"), this.container.appendChild(this.$el), this.$el.addEventListener("mousedown", (p) => {
      var A;
      const $ = p, { clientY: b } = $, S = this.$track.offsetHeight;
      let T = this.$thumbTrack.offsetHeight;
      T = T || S;
      const m = (S - T) / 2, v = this.$el.getBoundingClientRect().top;
      let d = T - (b - v - m);
      d = d >= T ? T : d <= 0 ? 0 : d;
      const g = this.step ? Math.round(d / T * (this.max - this.min) / this.step) * this.step + this.min : d / T * (this.max - this.min) + this.min;
      (A = this.onDragStart) == null || A.call(this, g), this.value != g && this.drag(g);
      const L = (w) => {
        var N;
        const x = w, { clientY: H } = x;
        x.preventDefault(), x.stopPropagation();
        let y = T - (H - v - m);
        y = y >= T ? T : y <= 0 ? 0 : y;
        const _ = this.step ? Math.round(y / T * (this.max - this.min) / this.step) * this.step + this.min : y / T * (this.max - this.min) + this.min;
        this.value != _ && this.drag(_), (N = window.getSelection()) == null || N.removeAllRanges();
      }, k = (w) => {
        var H, y;
        w.stopPropagation(), (H = window.getSelection()) == null || H.removeAllRanges(), document.removeEventListener("mousemove", L), document.removeEventListener("mouseup", k), (y = this.onDragEnd) == null || y.call(this, g);
      };
      document.addEventListener("mousemove", L), document.addEventListener("mouseup", k);
    }), this.setValue(this.value);
  }
  /** 设置滑动条值 */
  setValue(t) {
    var s;
    this.value = Math.max(Math.min(t, this.max), this.min);
    const e = (this.value - this.min) / (this.max - this.min);
    this.$thumb.style.top = `${(1 - e) * 100}%`, this.$bar.style.height = `${Math.max(Math.min(e, 1), 0) * 100}%`, (s = this.onChange) == null || s.call(this, t);
  }
  /** 拖动滑动条到特定的值 */
  drag(t) {
    var e;
    this.setValue(t), (e = this.onDrag) == null || e.call(this, this.value);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Rt;
const At = window, rt = At.trustedTypes, di = rt ? rt.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, Bt = "$lit$", V = `lit$${(Math.random() + "").slice(9)}$`, Ii = "?" + V, cn = `<${Ii}>`, J = document, pt = () => J.createComment(""), mt = (i) => i === null || typeof i != "object" && typeof i != "function", zi = Array.isArray, dn = (i) => zi(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", Nt = `[ 	
\f\r]`, ht = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ui = /-->/g, pi = />/g, j = RegExp(`>|${Nt}(?:([^\\s"'>=/]+)(${Nt}*=${Nt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), mi = /'/g, vi = /"/g, Oi = /^(?:script|style|textarea|title)$/i, un = (i) => (t, ...e) => ({ _$litType$: i, strings: t, values: e }), O = un(1), vt = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), gi = /* @__PURE__ */ new WeakMap(), U = J.createTreeWalker(J, 129, null, !1);
function Vi(i, t) {
  if (!Array.isArray(i) || !i.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return di !== void 0 ? di.createHTML(t) : t;
}
const pn = (i, t) => {
  const e = i.length - 1, s = [];
  let n, r = t === 2 ? "<svg>" : "", l = ht;
  for (let h = 0; h < e; h++) {
    const o = i[h];
    let c, p, $ = -1, b = 0;
    for (; b < o.length && (l.lastIndex = b, p = l.exec(o), p !== null); )
      b = l.lastIndex, l === ht ? p[1] === "!--" ? l = ui : p[1] !== void 0 ? l = pi : p[2] !== void 0 ? (Oi.test(p[2]) && (n = RegExp("</" + p[2], "g")), l = j) : p[3] !== void 0 && (l = j) : l === j ? p[0] === ">" ? (l = n ?? ht, $ = -1) : p[1] === void 0 ? $ = -2 : ($ = l.lastIndex - p[2].length, c = p[1], l = p[3] === void 0 ? j : p[3] === '"' ? vi : mi) : l === vi || l === mi ? l = j : l === ui || l === pi ? l = ht : (l = j, n = void 0);
    const S = l === j && i[h + 1].startsWith("/>") ? " " : "";
    r += l === ht ? o + cn : $ >= 0 ? (s.push(c), o.slice(0, $) + Bt + o.slice($) + V + S) : o + V + ($ === -2 ? (s.push(void 0), h) : S);
  }
  return [Vi(i, r + (i[e] || "<?>") + (t === 2 ? "</svg>" : "")), s];
};
class gt {
  constructor({ strings: t, _$litType$: e }, s) {
    let n;
    this.parts = [];
    let r = 0, l = 0;
    const h = t.length - 1, o = this.parts, [c, p] = pn(t, e);
    if (this.el = gt.createElement(c, s), U.currentNode = this.el.content, e === 2) {
      const $ = this.el.content, b = $.firstChild;
      b.remove(), $.append(...b.childNodes);
    }
    for (; (n = U.nextNode()) !== null && o.length < h; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) {
          const $ = [];
          for (const b of n.getAttributeNames())
            if (b.endsWith(Bt) || b.startsWith(V)) {
              const S = p[l++];
              if ($.push(b), S !== void 0) {
                const T = n.getAttribute(S.toLowerCase() + Bt).split(V), m = /([.?@])?(.*)/.exec(S);
                o.push({ type: 1, index: r, name: m[2], strings: T, ctor: m[1] === "." ? vn : m[1] === "?" ? $n : m[1] === "@" ? fn : Mt });
              } else
                o.push({ type: 6, index: r });
            }
          for (const b of $)
            n.removeAttribute(b);
        }
        if (Oi.test(n.tagName)) {
          const $ = n.textContent.split(V), b = $.length - 1;
          if (b > 0) {
            n.textContent = rt ? rt.emptyScript : "";
            for (let S = 0; S < b; S++)
              n.append($[S], pt()), U.nextNode(), o.push({ type: 2, index: ++r });
            n.append($[b], pt());
          }
        }
      } else if (n.nodeType === 8)
        if (n.data === Ii)
          o.push({ type: 2, index: r });
        else {
          let $ = -1;
          for (; ($ = n.data.indexOf(V, $ + 1)) !== -1; )
            o.push({ type: 7, index: r }), $ += V.length - 1;
        }
      r++;
    }
  }
  static createElement(t, e) {
    const s = J.createElement("template");
    return s.innerHTML = t, s;
  }
}
function lt(i, t, e = i, s) {
  var n, r, l, h;
  if (t === vt)
    return t;
  let o = s !== void 0 ? (n = e._$Co) === null || n === void 0 ? void 0 : n[s] : e._$Cl;
  const c = mt(t) ? void 0 : t._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== c && ((r = o == null ? void 0 : o._$AO) === null || r === void 0 || r.call(o, !1), c === void 0 ? o = void 0 : (o = new c(i), o._$AT(i, e, s)), s !== void 0 ? ((l = (h = e)._$Co) !== null && l !== void 0 ? l : h._$Co = [])[s] = o : e._$Cl = o), o !== void 0 && (t = lt(i, o._$AS(i, t.values), o, s)), t;
}
class mn {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    var e;
    const { el: { content: s }, parts: n } = this._$AD, r = ((e = t == null ? void 0 : t.creationScope) !== null && e !== void 0 ? e : J).importNode(s, !0);
    U.currentNode = r;
    let l = U.nextNode(), h = 0, o = 0, c = n[0];
    for (; c !== void 0; ) {
      if (h === c.index) {
        let p;
        c.type === 2 ? p = new kt(l, l.nextSibling, this, t) : c.type === 1 ? p = new c.ctor(l, c.name, c.strings, this, t) : c.type === 6 && (p = new yn(l, this, t)), this._$AV.push(p), c = n[++o];
      }
      h !== (c == null ? void 0 : c.index) && (l = U.nextNode(), h++);
    }
    return U.currentNode = J, r;
  }
  v(t) {
    let e = 0;
    for (const s of this._$AV)
      s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class kt {
  constructor(t, e, s, n) {
    var r;
    this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = n, this._$Cp = (r = n == null ? void 0 : n.isConnected) === null || r === void 0 || r;
  }
  get _$AU() {
    var t, e;
    return (e = (t = this._$AM) === null || t === void 0 ? void 0 : t._$AU) !== null && e !== void 0 ? e : this._$Cp;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = lt(this, t, e), mt(t) ? t === P || t == null || t === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : t !== this._$AH && t !== vt && this._(t) : t._$litType$ !== void 0 ? this.g(t) : t.nodeType !== void 0 ? this.$(t) : dn(t) ? this.T(t) : this._(t);
  }
  k(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  $(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
  }
  _(t) {
    this._$AH !== P && mt(this._$AH) ? this._$AA.nextSibling.data = t : this.$(J.createTextNode(t)), this._$AH = t;
  }
  g(t) {
    var e;
    const { values: s, _$litType$: n } = t, r = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = gt.createElement(Vi(n.h, n.h[0]), this.options)), n);
    if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === r)
      this._$AH.v(s);
    else {
      const l = new mn(r, this), h = l.u(this.options);
      l.v(s), this.$(h), this._$AH = l;
    }
  }
  _$AC(t) {
    let e = gi.get(t.strings);
    return e === void 0 && gi.set(t.strings, e = new gt(t)), e;
  }
  T(t) {
    zi(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, n = 0;
    for (const r of t)
      n === e.length ? e.push(s = new kt(this.k(pt()), this.k(pt()), this, this.options)) : s = e[n], s._$AI(r), n++;
    n < e.length && (this._$AR(s && s._$AB.nextSibling, n), e.length = n);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var s;
    for ((s = this._$AP) === null || s === void 0 || s.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const n = t.nextSibling;
      t.remove(), t = n;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cp = t, (e = this._$AP) === null || e === void 0 || e.call(this, t));
  }
}
class Mt {
  constructor(t, e, s, n, r) {
    this.type = 1, this._$AH = P, this._$AN = void 0, this.element = t, this.name = e, this._$AM = n, this.options = r, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = P;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, e = this, s, n) {
    const r = this.strings;
    let l = !1;
    if (r === void 0)
      t = lt(this, t, e, 0), l = !mt(t) || t !== this._$AH && t !== vt, l && (this._$AH = t);
    else {
      const h = t;
      let o, c;
      for (t = r[0], o = 0; o < r.length - 1; o++)
        c = lt(this, h[s + o], e, o), c === vt && (c = this._$AH[o]), l || (l = !mt(c) || c !== this._$AH[o]), c === P ? t = P : t !== P && (t += (c ?? "") + r[o + 1]), this._$AH[o] = c;
    }
    l && !n && this.j(t);
  }
  j(t) {
    t === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class vn extends Mt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === P ? void 0 : t;
  }
}
const gn = rt ? rt.emptyScript : "";
class $n extends Mt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    t && t !== P ? this.element.setAttribute(this.name, gn) : this.element.removeAttribute(this.name);
  }
}
class fn extends Mt {
  constructor(t, e, s, n, r) {
    super(t, e, s, n, r), this.type = 5;
  }
  _$AI(t, e = this) {
    var s;
    if ((t = (s = lt(this, t, e, 0)) !== null && s !== void 0 ? s : P) === vt)
      return;
    const n = this._$AH, r = t === P && n !== P || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, l = t !== P && (n === P || r);
    r && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e, s;
    typeof this._$AH == "function" ? this._$AH.call((s = (e = this.options) === null || e === void 0 ? void 0 : e.host) !== null && s !== void 0 ? s : this.element, t) : this._$AH.handleEvent(t);
  }
}
class yn {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    lt(this, t);
  }
}
const $i = At.litHtmlPolyfillSupport;
$i == null || $i(gt, kt), ((Rt = At.litHtmlVersions) !== null && Rt !== void 0 ? Rt : At.litHtmlVersions = []).push("2.8.0");
const Ft = (i, t, e) => {
  var s, n;
  const r = (s = e == null ? void 0 : e.renderBefore) !== null && s !== void 0 ? s : t;
  let l = r._$litPart$;
  if (l === void 0) {
    const h = (n = e == null ? void 0 : e.renderBefore) !== null && n !== void 0 ? n : null;
    r._$litPart$ = l = new kt(t.insertBefore(pt(), h), h, void 0, e ?? {});
  }
  return l._$AI(i), l;
}, bn = ({
  list: i,
  template: t
}) => O`
  <ul class="mpui-picker">
    ${i.map(
  (e, s) => O`
        <li class="mpui-picker-item" data-value="${e.value}">
          ${(t == null ? void 0 : t(e, s)) || e.label || e.value}
        </li>
      `
)}
  </ul>
`;
class tt {
  constructor({ container: t, value: e, onChange: s, onPick: n, list: r, template: l, condition: h }) {
    this.container = t, this.list = r, this.value = e, this.onChange = s, this.onPick = n, this.template = l, this.condition = h, this.reload();
  }
  /** 重载，一般用于列表项更改 */
  reload(t) {
    Ft(bn({ list: this.list, template: this.template }), this.container), this.$el = this.container.querySelector(".mpui-picker"), this.$items = this.$el.querySelectorAll(".mpui-picker-item"), this.$items.forEach((e) => {
      e.addEventListener("click", () => {
        this.pick(e.getAttribute("data-value") || void 0);
      });
    }), this.setValue(t ?? this.value);
  }
  /** 设置值 */
  setValue(t) {
    var e;
    this.$items.forEach((s, n) => {
      (this.condition ? this.condition(s.getAttribute("data-value"), t) : s.getAttribute("data-value") == t) ? s.classList.add("is-checked") : s.classList.remove("is-checked");
    }), this.value = t, (e = this.onChange) == null || e.call(this, t);
  }
  /** 点选一个选项 */
  pick(t) {
    var e;
    this.setValue(t), (e = this.onPick) == null || e.call(this, t);
  }
}
const kn = ({
  list: i,
  template: t
}) => O`
  <ul class="mpui-picker">
    ${i.map(
  (e, s) => O`
        <li class="mpui-picker-item" data-value="${e.value}">
          ${(t == null ? void 0 : t(e, s)) || e.label || e.value}
        </li>
      `
)}
  </ul>
`;
class Bi {
  /** 已选值 */
  get value() {
    return [...this.valueSet];
  }
  constructor({ container: t, value: e = [], list: s, onChange: n, onToggle: r }) {
    this.container = t, this.list = s, this.valueSet = new Set(e), this.onChange = n, this.onToggle = r, this.reload();
  }
  /** 重载，一般用于列表项更改 */
  reload(t) {
    Ft(kn({ list: this.list, template: this.template }), this.container), this.$el = this.container.querySelector(".mpui-picker"), this.$items = this.$el.querySelectorAll(".mpui-picker-item"), this.$items.forEach((e) => {
      e.addEventListener("click", () => {
        this.toggle(e.getAttribute("data-value"));
      });
    }), this.setValue(t ?? this.value);
  }
  /** 设置值 */
  setValue(t) {
    var e;
    this.valueSet = new Set(t), this.$items.forEach((s, n) => {
      this.valueSet.has(s.getAttribute("data-value")) ? s.classList.add("is-checked") : s.classList.remove("is-checked");
    }), (e = this.onChange) == null || e.call(this, t);
  }
  /** 切换一个选项的选择状态 */
  toggle(t, e) {
    var n, r;
    const s = e ?? !this.valueSet.has(t);
    s ? this.valueSet.add(t) : this.valueSet.delete(t), this.$items.forEach((l, h) => {
      l.getAttribute("data-value") == t && l.classList.toggle("is-checked", s);
    }), (n = this.onChange) == null || n.call(this, this.value), (r = this.onToggle) == null || r.call(this, t, s);
  }
}
class wn {
  constructor({ container: t, value: e = !1, onChange: s, onToggle: n }) {
    this.container = t, this.value = e, this.onChange = s, this.onToggle = n, this.$el = u("div", { class: "mpui-switch" }, this.label), this.$el = this.container.querySelector(".mpui-switch"), this.$el.addEventListener("click", () => {
      this.toggle(!this.value);
    }), this.setValue(this.value);
  }
  /** 设置开关状态 */
  setValue(t) {
    var e;
    this.value = t, this.$el.classList.toggle("is-checked", t), (e = this.onChange) == null || e.call(this, t);
  }
  /** 点按开关 */
  toggle(t = !this.value) {
    var e;
    this.setValue(t), (e = this.onToggle) == null || e.call(this, t);
  }
}
class Q {
  constructor({ container: t, value: e = !1, onChange: s, onToggle: n, label: r }) {
    this.container = t, this.value = e, this.onChange = s, this.onToggle = n, this.label = r, this.$el = this.container.appendChild(
      u(
        "div",
        { class: "mpui-checkbox" },
        /*html*/
        `
          <div class="mpui-checkbox-icon"></div>
          <div class="mpui-checkbox-label">${r}</div>
        `
      )
    ), this.$el.addEventListener("click", () => {
      this.toggle();
    }), this.setValue(this.value);
  }
  /** 设置开关状态 */
  setValue(t) {
    var e;
    this.value = t, this.$el.classList.toggle("is-checked", t), (e = this.onChange) == null || e.call(this, t);
  }
  /** 点按开关 */
  toggle(t = !this.value) {
    var e;
    this.setValue(t), (e = this.onToggle) == null || e.call(this, t);
  }
}
const Xa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Checkbox: Q,
  MultiPicker: Bi,
  Picker: tt,
  Slider: ct,
  SliderVertical: Di,
  Switch: wn
}, Symbol.toStringTag, { value: "Module" }));
console.log(
  `
 %c mfunsPlayer v${ut.version} ${ut.gitHash} %c https://github.com/Mfuns-cn 

`,
  "color: #fff; background: #7b7ff7; padding:5px 0;",
  "background: #f5f5f5; padding:5px 0;"
);
class xn {
  constructor({
    el: t,
    getData: e,
    itemHeight: s,
    createItem: n,
    overflow: r = 0
  }) {
    this.data = [], this.scrollTop = 0, this.renderStart = -1, this.renderEnd = -1, this.viewStart = 0, this.viewEnd = 0, this.throttle = !1, this.cleared = !1, this.$el = t, this.getData = e, this.itemHeight = s, this.createItem = n, this.overflow = r, this.renderStart = -1, this.renderEnd = -1, this.viewStart = 0, this.viewEnd = 0, this.throttle = !1, this.cleared = !1, this.$el.classList.add("vlist-container"), this.$content = document.createElement("div"), this.$content.classList.add("vlist-content"), this.$el.appendChild(this.$content), this.$el.addEventListener("scroll", () => {
      this.cleared || this.handleScroll();
    }), this.reload();
  }
  /** 重载列表 */
  reload() {
    this.clear(), this.data = this.getData(), console.log(this.data), this.renderStart = -1, this.renderEnd = -1, this.viewStart = 0, this.viewEnd = 0, this.throttle = !1, this.handleScroll(), this.cleared = !1;
  }
  /** 更新列表 */
  update() {
    this.data = this.getData(), this.handleScroll();
  }
  handleScroll() {
    if (!this.throttle) {
      const t = this.$el.clientHeight, e = this.$el.scrollTop;
      t && (this.scrollTop = e), this.viewStart = this.getViewStart(e), this.viewEnd = this.getViewEnd(e, t), (this.viewStart <= this.renderStart || this.viewEnd >= this.renderEnd) && this.render(t, e);
    }
  }
  render(t, e) {
    const s = this.renderStart, n = this.renderEnd;
    if (this.renderStart = this.getViewStart(e) - this.overflow, this.renderEnd = this.getViewEnd(e, t) + this.overflow, this.renderStart < s) {
      const r = document.createDocumentFragment(), l = Math.max(this.renderStart, 0), h = Math.min(s - 1, this.renderEnd, this.data.length - 1);
      for (let o = l; o <= h; o++)
        r.appendChild(this.createItem(this.data[o], o, this.data));
      this.$content.insertBefore(r, this.$content.firstElementChild);
    } else {
      const r = Math.max(s, 0), l = Math.min(this.renderStart - 1, n);
      for (let h = r; h <= l; h++) {
        const o = this.$content.firstElementChild;
        o && this.$content.removeChild(o);
      }
    }
    if (this.renderEnd > n) {
      const r = document.createDocumentFragment(), l = Math.max(n + 1, this.renderStart), h = Math.min(this.renderEnd, this.data.length - 1);
      for (let o = l; o <= h; o++)
        r.appendChild(this.createItem(this.data[o], o, this.data));
      this.$content.appendChild(r);
    } else {
      const r = Math.min(n, this.data.length - 1), l = Math.max(this.renderEnd + 1, s);
      for (let h = r; h >= l; h--) {
        const o = this.$content.lastElementChild;
        o && this.$content.removeChild(o);
      }
    }
    this.$content.style.paddingTop = `${this.renderStart > 0 ? this.renderStart * this.itemHeight : 0}px`, this.$content.style.paddingBottom = `${this.renderEnd < this.data.length - 1 ? (this.data.length - this.renderEnd - 1) * this.itemHeight : 0}px`;
  }
  getViewStart(t) {
    return Math.floor(t / this.itemHeight);
  }
  getViewEnd(t, e) {
    return Math.ceil((t + e) / this.itemHeight) - 1;
  }
  /** 清空列表 */
  clear() {
    this.data = [], this.$content.innerHTML = "", this.$content.style.paddingTop = "0px", this.$content.style.paddingBottom = "0px", this.cleared = !0;
  }
  /** 开头定位到某项 */
  locateStart(t) {
    this.scrollTo(t * this.itemHeight);
  }
  /** 末尾定位到某项 */
  locateEnd(t) {
    this.scrollTo(t * this.itemHeight - this.$el.clientHeight);
  }
  /** 滚动到高度 */
  scrollTo(t) {
    this.$el.scrollTo({
      top: t,
      behavior: "auto"
    });
  }
}
const Ln = (
  /*html*/
  `
  <div class="${a}-danmakulist-main">
    <div class="${a}-danmakulist-head">
      <div class="list-column col-time">时间</div>
      <div class="list-column col-content">弹幕内容</div>
      <div class="list-column col-date">发送时间</div>
    </div>
    <div class="${a}-danmakulist-select">
      <div class="${a}-danmakulist-select-info"></div>
      <div class="${a}-danmakulist-select-operate">
        <div class="list-operate-btn" data-action="clearSelect">取消选择</div>
      </div>
    </div>
    <div class="${a}-danmakulist-container"></div>
    <div class="${a}-danmakulist-status">
      <div class="status-loading-text">弹幕列表装填中……</div>
      <div class="status-failed-text">弹幕加载失败 X_X</div>
      <div class="status-empty-text">还没有弹幕哦，快来发弹幕^_^</div>
    </div>
  </div>
  <div class="${a}-danmakulist-foot">
    <div class="${a}-danmakulist-foot-left">
      <span class="${a}-danmakulist-autoscroll">列表滚动[关]</span>
    </div>
    <div class="${a}-danmakulist-foot-right"></div>
  </div>
`
), En = (i, t, {
  operation: e,
  onClick: s,
  onDblclick: n,
  selected: r,
  focused: l,
  title: h
}) => {
  const o = u(
    "div",
    {
      class: "list-row",
      "data-index": t.toString(),
      "data-mode": i.mode.toString(),
      title: h
    },
    /* html */
    `
      <div class="list-cell col-time">${ft(i.time)}</div>
      <div class="list-cell col-content">${i.content}</div>
      <div class="list-cell col-date">
        ${i.date ? Ze(new Date(i.date * 1e3), "yy-MM-dd HH:mm") : "-"}
      </div>
    `
  );
  r && o.classList.add("is-selected"), l && o.classList.add("is-focused"), o.ondblclick = n, o.onclick = s;
  const c = e;
  if (c.length) {
    const p = u("div", { class: "list-operate" });
    c.forEach(([$, b, S]) => {
      if (!S)
        return;
      const T = u("div", { class: "list-operate-btn" }, $);
      T.onclick = (m) => {
        m.stopPropagation(), b(i);
      }, p.appendChild(T);
    }), o.appendChild(p);
  }
  return o;
}, ts = class ts extends bt {
  constructor(t) {
    super(t, u("div", { class: `${a}-danmakulist` }, Ln)), this.title = "弹幕列表", this.data = [], this.selected = [], this.focused = null, this.sortedBy = "time", this.sortOrder = 1, this.autoScroll = !0, this.frozen = !1, this.danmaku = t.plugins.danmaku, this.$main = this.$(`.${a}-danmakulist-main`), this.$container = this.$(`.${a}-danmakulist-container`), this.$status = this.$(`.${a}-danmakulist-status`), this.$colTime = this.$(".col-time"), this.$colDate = this.$(".col-date"), this.$colContent = this.$(".col-content"), this.$autoscroll = this.$(`.${a}-danmakulist-autoscroll`), this.$select = this.$(`.${a}-danmakulist-select`), this.$selectInfo = this.$(`.${a}-danmakulist-select-info`), this.$clearSelect = this.$('.list-operate-btn[data-action="clearSelect"]'), this.$clearSelect.onclick = () => {
      this.select([]);
    }, this.$colTime.onclick = () => {
      this.setAutoScroll(!1), this.sortedBy == "time" ? this.sort("time", -this.sortOrder) : this.sort("time", 1);
    }, this.$colDate.onclick = () => {
      this.setAutoScroll(!1), this.sortedBy == "date" ? this.sort("date", -this.sortOrder) : this.sort("date", 1);
    }, this.$colContent.onclick = () => {
      this.setAutoScroll(!1), this.sortedBy == "content" ? this.sort("content", -this.sortOrder) : this.sort("content", 1);
    }, this.$autoscroll.onclick = () => {
      this.setAutoScroll(!this.autoScroll), this.player.emit("setValue", "danmakuList:autoScroll", !this.autoScroll);
    }, this.player.on("danmakuList:autoScrollChange", (e) => {
      e ? this.$autoscroll.innerText = "列表滚动[开]" : this.$autoscroll.innerText = "列表滚动[关]";
    }), this.autoScroll && this.player.emit("danmakuList:autoScrollChange", !0), this.player.on("danmakuList:select", (e) => {
      const s = e.length;
      this.$selectInfo.innerText = s ? `已选择${s}条弹幕` : "", this.$select.classList.toggle("is-show", s > 1);
    });
  }
  mount(t, e) {
    var n;
    super.mount(t, e);
    const s = (n = this.list) == null ? void 0 : n.scrollTop;
    console.log("mountpos: " + s), requestAnimationFrame(() => {
      var r;
      s != null && ((r = this.list) == null || r.scrollTo(s)), -this.autoScroll && this.locateByTime(this.player.currentTime);
    });
  }
  toggle(t) {
    var e, s;
    if (super.toggle(t), this.shown) {
      const n = (e = this.list) == null ? void 0 : e.scrollTop;
      n != null && ((s = this.list) == null || s.scrollTo(n)), this.autoScroll && this.locateByTime(this.player.currentTime);
    }
  }
  init() {
    const t = this.player.invokes, e = this.plugins.danmakuOperate;
    this.list = new xn({
      el: this.$container,
      getData: () => this.data,
      itemHeight: 24,
      createItem: (n, r) => En(n, r, {
        operation: ((l) => {
          const h = this.player.userId && l.user == this.player.userId;
          return [
            [
              "举报",
              () => {
                e == null || e.report(l);
              },
              !h && (t == null ? void 0 : t.danmakuReport)
            ],
            [
              "屏蔽",
              (o) => {
                e == null || e.blockUser(o.user, !0);
              },
              !h && (t == null ? void 0 : t.danmakuBlockUser)
            ],
            [
              "撤回",
              (o) => {
                e == null || e.recall(o);
              },
              h && (t == null ? void 0 : t.danmakuRecall)
            ]
          ].filter((o) => o[2]);
        })(n),
        onClick: (l) => {
          this.clickSelect(n, l.shiftKey, l.ctrlKey);
        },
        onDblclick: () => {
          this.player.seek(n.time);
        },
        selected: this.selected.includes(n),
        focused: this.focused == n,
        title: `${n.content}
${n.date ? Ze(new Date(n.date * 1e3), "yyyy-MM-dd HH:mm:ss") : "--"} @ ${ft(n.time, 2)}`
      }),
      overflow: 5
    });
    const s = _t(() => {
      this.frozen = !1;
    }, 5e3);
    this.list.$el.addEventListener("wheel", () => {
      this.frozen = !0, s();
    }), this.list.$el.addEventListener("mousedown", () => {
      this.frozen = !0, s();
    }), this.$main.addEventListener("mouseleave", () => {
      this.frozen = !1;
    }), this.player.on("videoChange", () => {
      this.clear();
    }), this.player.on("danmaku:add", (n) => {
      this.fill(n), this.autoScroll && this.sort("time");
    }), this.player.on("timeupdate", (n) => {
      this.autoScroll && !this.frozen && this.locateByTime(n);
    }), this.player.on("danmaku:select", (n) => {
      this.locateByDanmaku(n), this.select([n]);
    });
  }
  apply(t, e) {
    var s;
    this.setAutoScroll(!!((s = e.danmakuList) != null && s.autoScroll));
  }
  /** 弹幕列表排序 */
  sort(t, e = 1) {
    this.sortedBy = t, this.sortOrder = e, this.data.sort((s, n) => {
      const r = s[this.sortedBy], l = n[this.sortedBy];
      return r > l ? e : r == l ? 0 : -e;
    }), this.list.reload();
  }
  /** 装填弹幕(重载列表) */
  fill(t) {
    this.data = this.data.concat(t), this.data.length ? (this.reload(), this.setStatus()) : this.setStatus("empty");
  }
  /** 添加弹幕(不重载列表) */
  add(t) {
    this.data = this.data.concat(t), this.data.length ? (this.list.update(), this.setStatus()) : this.setStatus("empty");
  }
  /** 重载弹幕列表 */
  reload() {
    this.sort(this.sortedBy, this.sortOrder), this.autoScroll && this.locateByTime(this.player.currentTime);
  }
  clear() {
    this.list.clear(), this.data = [], this.setStatus("loading");
  }
  setStatus(t = "") {
    this.$status.dataset.status = t, console.log("弹幕加载状态" + t);
  }
  /** 根据播放时间定位 */
  locateByTime(t) {
    var s, n;
    let e = this.list.viewEnd;
    for (((s = this.data[e]) == null ? void 0 : s.time) > t && (e = 0); ((n = this.data[e + 1]) == null ? void 0 : n.time) <= t; )
      e++;
    this.list.locateEnd(e);
  }
  /** 定位弹幕 */
  locateByDanmaku(t) {
    const e = this.data.indexOf(t);
    e > -1 && (this.list.locateStart(e), this.frozen = !0);
  }
  setAutoScroll(t) {
    this.player.emit("danmakuList:autoScrollChange", t), this.autoScroll = t, t && (this.frozen = !1, this.sort("time"), this.locateByTime(this.player.currentTime), this.list.handleScroll());
  }
  /** 设置选定状态 */
  select(t, e) {
    this.selected = t;
    const s = [];
    this.focused = e || (t.length == 1 ? t[0] : null);
    const n = this.data.indexOf(this.focused);
    t.forEach((r) => {
      const l = this.data.indexOf(r);
      s.push(l);
    });
    for (const r of this.list.$content.children)
      r.classList.toggle(
        "is-selected",
        s.includes(Number(r.dataset.index))
      ), r.classList.toggle(
        "is-focused",
        n == Number(r.dataset.index)
      );
    this.player.emit("danmakuList:select", this.selected);
  }
  /** 设置某条弹幕的选定状态，若选定则聚焦弹幕，否则取消聚焦 */
  toggleSelect(t, e) {
    const s = this.list.$content.querySelector(
      `[data-index="${this.data.indexOf(this.focused)}"]`
    ), n = this.list.$content.querySelector(`[data-index="${this.data.indexOf(t)}"]`);
    if (e)
      this.selected.includes(t) || this.selected.push(t), this.focused = t, n == null || n.classList.add("is-selected"), n == null || n.classList.add("is-focused");
    else if (!e) {
      const r = this.selected.indexOf(t);
      r > -1 && this.selected.splice(r, 1), n == null || n.classList.remove("is-selected"), s == null || s.classList.remove("is-focused");
    }
    this.player.emit("danmakuList:select", this.selected);
  }
  /** 单击选定弹幕 */
  clickSelect(t, e, s) {
    if (e)
      if (this.focused) {
        const n = this.data.indexOf(t), r = this.data.indexOf(this.focused);
        if (n == -1 || r == -1)
          this.select([t]);
        else {
          const l = n < r ? n : r, h = (n < r ? r : n) + 1;
          this.select(this.data.slice(l, h), this.focused);
        }
      } else
        this.select([t]);
    else
      s ? this.toggleSelect(t, !this.selected.includes(t)) : this.selected.length == 1 && this.selected[0] == t ? this.select([]) : this.select([t]);
  }
};
ts.pluginName = "danmakuList";
let qt = ts;
const es = class es extends f {
  constructor(t) {
    var e;
    if (super(t), this.padding = "", t.plugins.buttonSettings) {
      const s = document.createElement("div");
      this.checkbox = new Q({
        container: s,
        value: !this.status,
        onToggle: (n) => {
          this.toggle(!n), this.player.emit("setValue", "blackBorder", !n);
        },
        label: "隐藏黑边"
      }), (e = t.plugins.settings) == null || e.$others.appendChild(s);
    }
  }
  apply(t, e) {
    this.padding = e.blackBorderPadding || "8px", e.blackBorder && this.toggle(!0);
  }
  toggle(t) {
    t ? this.player.$content.style.setProperty("--padding", this.padding) : this.player.$content.style.setProperty("--padding", ""), this.player.emit("blackBorderChange", t);
  }
  get status() {
    return !!this.player.$content.style.getPropertyValue("--padding");
  }
};
es.pluginName = "blackBorder";
let Ct = es;
const ss = class ss extends f {
  get invokeToggle() {
    return this.player.invokes.widescreenToggle;
  }
  init() {
    this.player.define("isWidescreen", {
      get: () => this.status
    }), this.player.define("enterWidescreen", () => this.enter()), this.player.define("exitWidescreen", () => this.exit());
  }
  apply(t, e) {
    e.widescreen && this.enter();
  }
  enter() {
    var t;
    this.status || (this.player.$el.classList.add("is-widescreen"), (t = this.invokeToggle) == null || t.call(this, !0), this.player.emit("widescreenEnter"));
  }
  exit() {
    var t;
    this.status && (this.player.$el.classList.remove("is-widescreen"), (t = this.invokeToggle) == null || t.call(this, !1), this.player.emit("widescreenExit"));
  }
  get status() {
    return this.player.$el.classList.contains("is-widescreen");
  }
};
ss.pluginName = "widescreen";
let jt = ss;
const Sn = (
  /*html*/
  `
  <div class="${a}-controls-button-icon">
    <i class="mpicon-play"></i>
    <i class="mpicon-pause"></i>
  </div>
  <div class="mpui-tooltip">播放</div>
`
), is = class is extends F {
  constructor(t) {
    super(
      t,
      u(
        "div",
        { class: `${a}-controls-button ${a}-button-play is-paused` },
        Sn
      )
    ), this.$icon = this.$(`.${a}-controls-button-icon`), this.$tooltip = this.$(".mpui-tooltip");
  }
  init() {
    this.player.on("pause", () => {
      this._change(!1);
    }), this.player.on("play", () => {
      this._change(!0);
    }), this.player.on("videoChange", () => {
      this._change(!1);
    }), this.$icon.addEventListener("click", () => {
      this.player.paused ? this.player.play() : this.player.pause();
    });
  }
  /** 设置按钮状态 */
  _change(t) {
    this.$el.classList.toggle("is-on", t), this.$tooltip.innerText = t ? "暂停" : "播放";
  }
};
is.pluginName = "buttonPlay";
let Wt = is;
const Tn = (
  /*html*/
  `
  <div class="${a}-controls-button-icon">
    <i class="mpicon-prev"></i>
  </div>
  <div class="mpui-tooltip">上一P</div>
`
), ns = class ns extends F {
  constructor(t) {
    super(
      t,
      u(
        "div",
        {
          class: `${a}-controls-button ${a}-button-prev is-autohide is-disabled`
        },
        Tn
      )
    ), this.singleHide = !0, this.$icon = this.$(`.${a}-controls-button-icon`), this.$tooltip = this.$(".mpui-tooltip");
  }
  apply(t, e) {
    var s;
    this.singleHide = ((s = e.switchButton) == null ? void 0 : s.singleHide) ?? !0;
  }
  init() {
    this.$icon.addEventListener("click", () => {
      this.player.prev();
    }), this.player.on("videoChange", (t) => {
      const { hasNext: e, hasPrev: s } = t;
      this.setDisabled(!s), this.$el.classList.toggle("is-hidden", this.singleHide && !s && !e);
    });
  }
  setDisabled(t) {
    this.$el.classList.toggle("is-disabled", t);
  }
  /** 自动隐藏上一个/下一个按钮 */
  setAutoHide(t) {
    this.$el.classList.toggle("is-autohide", t);
  }
  get disabled() {
    return this.$el.classList.contains("is-disabled");
  }
};
ns.pluginName = "buttonPrev";
let Ut = ns;
const An = (
  /*html*/
  `
  <div class="${a}-controls-button-icon">
    <i class="mpicon-next"></i>
  </div>
  <div class="mpui-tooltip">下一P</div>
`
), as = class as extends F {
  constructor(t) {
    super(
      t,
      u(
        "div",
        { class: `${a}-controls-button ${a}-button-next` },
        An
      )
    ), this.singleHide = !0, this.$icon = this.$(`.${a}-controls-button-icon`), this.$tooltip = this.$(".mpui-tooltip");
  }
  apply(t, e) {
    var s;
    this.singleHide = ((s = e.switchButton) == null ? void 0 : s.singleHide) ?? !0;
  }
  init(t) {
    this.$icon.addEventListener("click", () => {
      this.player.next();
    }), this.player.on("videoChange", (e) => {
      const { hasNext: s, hasPrev: n } = e;
      this.setDisabled(!s), this.$el.classList.toggle("is-hidden", this.singleHide && !n && !s);
    });
  }
  setDisabled(t) {
    this.$el.classList.toggle("is-disabled", t);
  }
  /** 自动隐藏上一个/下一个按钮 */
  setAutoHide(t) {
    this.$el.classList.toggle("is-autohide", t);
  }
  get disabled() {
    return this.$el.classList.contains("is-disabled");
  }
};
as.pluginName = "buttonNext";
let Xt = as;
const Hn = (
  /*html*/
  `
  <div class="${a}-videotime-label">
    <span class="${a}-videotime-current">00:00</span>
    <span class="${a}-videotime-divider">/</span>
    <span class="${a}-videotime-total">00:00</span>
  </div>
  <input class="${a}-videotime-input mpui-input" />
`
), rs = class rs extends F {
  constructor(t) {
    super(t, u("div", { class: `${a}-videotime` }, Hn)), this.valueBeforeEdited = "", this.timeFormat = 2, this.$label = this.$(`.${a}-videotime-label`), this.$current = this.$(`.${a}-videotime-current`), this.$total = this.$(`.${a}-videotime-total`), this.$input = this.$(`.${a}-videotime-input`);
  }
  init() {
    this.player.on("timeupdate", (t) => {
      this.$current.innerText = this.format(t);
    }), this.player.on("seeking", (t) => {
      this.$current.innerText = this.format(t);
    }), this.player.on("durationchange", (t) => {
      this.timeFormat = t > 3600 ? 4 : 2, this.$total.innerText = this.format(t);
    }), this.$label.addEventListener("click", () => {
      this.$el.classList.add("is-input"), this.$input.value = this.format(this.player.currentTime), this.valueBeforeEdited = this.$input.value, this.$input.focus();
    }), this.$input.addEventListener("blur", () => {
      const t = this.$input.value;
      t != this.valueBeforeEdited && (this.player.seek(Vt(t)), this.player.play()), this.exitInput();
    }), this.$input.addEventListener("keydown", (t) => {
      const e = t || window.event;
      e.keyCode == 13 && (this.player.seek(Vt(this.$input.value)), this.player.play(), this.exitInput()), e.keyCode == 27 && this.exitInput();
    });
  }
  /** 退出输入模式 */
  exitInput() {
    this.$el.classList.remove("is-input"), this.$input.value = "", this.valueBeforeEdited = "";
  }
  /** 格式化时间 */
  format(t) {
    return ft(t, this.timeFormat);
  }
};
rs.pluginName = "videoTime";
let Yt = rs;
const _n = (
  /*html*/
  `
  <div class="${a}-controls-button-icon">
    <i class="mpicon-loop-off"></i>
    <i class="mpicon-loop"></i>
  </div>
  <div class="mpui-tooltip">洗脑循环</div>
`
), ls = class ls extends F {
  constructor(t) {
    super(
      t,
      u(
        "div",
        { class: `${a}-controls-button ${a}-button-loop` },
        _n
      )
    ), this.$icon = this.$(`.${a}-controls-button-icon`), this.$tooltip = this.$(".mpui-tooltip");
  }
  init() {
    this.player.on("loopChange", (t) => {
      this.$el.classList.toggle("is-on", t), this.$tooltip.innerText = t ? "关闭洗脑循环" : "洗脑循环";
    }), this.$icon.addEventListener("click", () => {
      this.player.loop ? this.player.setLoop(!1) : this.player.setLoop(!0);
    });
  }
};
ls.pluginName = "buttonLoop";
let Kt = ls;
const Mn = (
  /*html*/
  `
  <div class="${a}-controls-button-icon">
    <div class="${a}-controls-button-text">P0</div>
  </div>
  <div class="mpui-tooltip">分P列表</div>
`
), os = class os extends F {
  constructor(t) {
    super(
      t,
      u(
        "div",
        { class: `${a}-controls-button ${a}-button-part` },
        Mn
      )
    ), this.$icon = this.$(`.${a}-controls-button-icon`), this.$text = this.$(`.${a}-controls-button-text`), this.$tooltip = this.$(".mpui-tooltip");
  }
  init() {
    this.$icon.addEventListener("click", () => {
      var t;
      (t = this.plugins.partList) == null || t.toggle();
    }), this.player.on("videoChange", (t) => {
      var e;
      this.$text.innerText = `P${t.part}`, this.$el.classList.toggle("is-show", (((e = t.list) == null ? void 0 : e.length) || 1) > 1);
    });
  }
};
os.pluginName = "buttonPart";
let Gt = os;
const Fn = (
  /*html*/
  `
  <div class="${a}-controls-button-icon">
    <i class="mpicon-volume"></i>
    <i class="mpicon-volume-off"></i>
  </div>

  <div class="${a}-controls-panel-wrap">
    <div class="${a}-controls-panel">
      <div class="${a}-button-volume-value">0</div>
      <div class="${a}-button-volume-slider"></div>
    </div>
  </div>
`
), hs = class hs extends F {
  constructor(t) {
    super(
      t,
      u(
        "div",
        { class: `${a}-controls-button ${a}-button-volume` },
        Fn
      )
    ), this.$icon = this.$(`.${a}-controls-button-icon`), this.$slider = this.$(`.${a}-button-volume-slider`), this.$value = this.$(`.${a}-button-volume-value`);
  }
  init() {
    this.slider = new Di({
      container: this.$slider,
      min: 0,
      max: 100,
      step: 1,
      value: this.player.volume * 100,
      onChange: (t) => {
        this.$value.innerText = t.toString();
      },
      onDrag: (t) => {
        this.player.setVolume(t / 100), this.player.emit("setValue", "volume", t / 100);
      },
      onDragStart: (t) => {
        this.player.muted && t != 0 && this.player.setMuted(!1), this.$el.classList.add("is-control"), this.player.isControlled = !0;
      },
      onDragEnd: () => {
        this.$el.classList.remove("is-control"), this.player.isControlled = !1;
      }
    }), this.player.on("volumechange", (t, e) => {
      e ? (this.$el.classList.add("is-muted"), this.slider.setValue(0)) : (this.$el.classList.remove("is-muted"), this.slider.setValue(Math.round(t * 100))), t == 0 && this.$el.classList.add("is-muted");
    }), this.$icon.addEventListener("click", () => {
      this.player.muted || this.player.volume == 0 ? (this.player.volume == 0 && this.player.setVolume(0.1), this.player.setMuted(!1), this.player.emit("setValue", "muted", !1)) : (this.player.setMuted(!0), this.player.emit("setValue", "muted", !0));
    });
  }
};
hs.pluginName = "buttonVolume";
let Zt = hs;
const Pn = (
  /*html*/
  `
  <div class="${a}-controls-button-icon">
    <i class="mpicon-settings"></i>
  </div>
  <div class="${a}-controls-panel-wrap">
    <div class="${a}-controls-panel"></div>
  </div>
`
), cs = class cs extends F {
  constructor(t) {
    super(
      t,
      u(
        "div",
        { class: `${a}-controls-button ${a}-button-settings` },
        Pn
      )
    ), this.controls = [], this.$icon = this.$(`.${a}-controls-button-icon`), this.$panel = this.$(`.${a}-controls-panel`);
  }
  apply(t, e) {
    var s;
    this.controls = ((s = e.buttonSettings) == null ? void 0 : s.controls) || [];
  }
  ready() {
    var t;
    this.build(this.$panel, this.controls), (t = this.player.plugins.settings) == null || t.mount(this.$panel);
  }
  setControls(t) {
    this.controls = t, this.build(this.$panel, t);
  }
  build(t, e) {
    t.innerHTML = "";
    const s = new DocumentFragment();
    e == null || e.forEach((n) => {
      var l;
      const r = (l = this.player.plugin.from(n)) == null ? void 0 : l.$el;
      r && s.appendChild(r);
    }), t.appendChild(s);
  }
};
cs.pluginName = "buttonSettings";
let Jt = cs;
const Rn = (
  /*html*/
  `
  <div class="${a}-controls-button-icon">
    <i class="mpicon-pip"></i>
    <i class="mpicon-pip-exit"></i>
  </div>
  <div class="mpui-tooltip">画中画</div>
`
), ds = class ds extends F {
  constructor(t) {
    super(
      t,
      u(
        "div",
        { class: `${a}-controls-button ${a}-button-pip` },
        Rn
      )
    ), this.$icon = this.$(`.${a}-controls-button-icon`), this.$tooltip = this.$(".mpui-tooltip");
  }
  init() {
    this.player.on("enterpictureinpicture", () => {
      this.$el.classList.add("is-on"), this.$tooltip.innerText = "退出画中画";
    }), this.player.on("leavepictureinpicture", () => {
      this.$el.classList.remove("is-on"), this.$tooltip.innerText = "画中画";
    }), this.$icon.addEventListener("click", () => {
      var t, e, s, n;
      this.player.isPip ? (e = (t = this.player).exitPip) == null || e.call(t) : (n = (s = this.player).enterPip) == null || n.call(s);
    });
  }
  get ignored() {
    return !this.player.enterPip || !_i;
  }
};
ds.pluginName = "buttonPip";
let Qt = ds;
const Nn = (
  /*html*/
  `
  <div class="${a}-controls-button-icon">
    <i class="mpicon-widescreen"></i>
    <i class="mpicon-widescreen-exit"></i>
  </div>
  <div class="mpui-tooltip">宽屏模式</div>
`
), us = class us extends F {
  constructor(t) {
    super(
      t,
      u(
        "div",
        { class: `${a}-controls-button ${a}-button-widescreen` },
        Nn
      )
    ), this.$icon = this.$(`.${a}-controls-button-icon`), this.$tooltip = this.$(".mpui-tooltip");
  }
  init() {
    this.player.on("widescreenEnter", () => {
      this.$el.classList.add("is-on"), this.$tooltip.innerText = "退出宽屏模式";
    }), this.player.on("widescreenExit", () => {
      this.$el.classList.remove("is-on"), this.$tooltip.innerText = "宽屏模式";
    }), this.$icon.addEventListener("click", () => {
      var t, e, s, n;
      this.player.isWidescreen ? (n = (s = this.player).exitWidescreen) == null || n.call(s) : (e = (t = this.player).enterWidescreen) == null || e.call(t);
    });
  }
  get ignored() {
    return !this.player.enterWidescreen;
  }
};
us.pluginName = "buttonWidescreen";
let te = us;
const Dn = (
  /*html*/
  `
  <div class="${a}-controls-button-icon">
    <i class="mpicon-webscreen"></i>
    <i class="mpicon-webscreen-exit"></i>
  </div>
  <div class="mpui-tooltip">网页全屏</div>
`
), ps = class ps extends F {
  constructor(t) {
    super(
      t,
      u(
        "div",
        { class: `${a}-controls-button ${a}-button-webscreen` },
        Dn
      )
    ), this.$icon = this.$(`.${a}-controls-button-icon`), this.$tooltip = this.$(".mpui-tooltip");
  }
  init() {
    this.player.on("webscreenEnter", () => {
      this.$el.classList.add("is-on"), this.$tooltip.innerText = "退出网页全屏";
    }), this.player.on("webscreenExit", () => {
      this.$el.classList.remove("is-on"), this.$tooltip.innerText = "网页全屏";
    }), this.$icon.addEventListener("click", () => {
      var t, e, s, n;
      this.player.isWebscreen ? (n = (s = this.player).exitWebscreen) == null || n.call(s) : (e = (t = this.player).enterWebscreen) == null || e.call(t);
    });
  }
  get ignored() {
    return !this.player.enterWebscreen;
  }
};
ps.pluginName = "buttonWebscreen";
let ee = ps;
const In = (
  /*html*/
  `
  <div class="${a}-controls-button-icon">
    <i class="mpicon-fullscreen"></i>
    <i class="mpicon-fullscreen-exit"></i>
  </div>
  <div class="mpui-tooltip">进入全屏</div>
`
), ms = class ms extends F {
  constructor(t) {
    super(
      t,
      u(
        "div",
        { class: `${a}-controls-button ${a}-button-fullscreen` },
        In
      )
    ), this.$icon = this.$(`.${a}-controls-button-icon`), this.$tooltip = this.$(".mpui-tooltip");
  }
  init() {
    this.player.on("fullscreenEnter", () => {
      this.$el.classList.add("is-on"), this.$tooltip.innerText = "退出全屏";
    }), this.player.on("fullscreenExit", () => {
      this.$el.classList.remove("is-on"), this.$tooltip.innerText = "进入全屏";
    }), this.$icon.addEventListener("click", () => {
      var t, e, s, n;
      this.player.isFullscreen ? (n = (s = this.player).exitFullscreen) == null || n.call(s) : (e = (t = this.player).enterFullscreen) == null || e.call(t);
    });
  }
  get ignored() {
    return !this.player.enterFullscreen || !Hi;
  }
};
ms.pluginName = "buttonFullscreen";
let se = ms;
const zn = (
  /*html*/
  `
  <div class="${a}-about-logo"></div>
  <div class="${a}-about-version">version ${ut.version}-${ut.gitHash}</div>
  <div>github：<a href="${tn}" target="_blank">mfuns-cn/mfunsPlayer</a></div>
  <div>开发者：</div>
  <ul class="${a}-about-developers">
    ${en.map(
    ({ name: i, link: t }) => (
      /*html*/
      `
        <li>
          <a href="${t}" target="_blank">${i}</a>
        </li>
      `
    )
  ).join("")}
    <li></li>
  </ul>
`
), vs = class vs extends bt {
  constructor(t) {
    super(t, u("div", { class: `${a}-about` }, zn)), this.title = "关于";
  }
};
vs.pluginName = "about";
let ie = vs;
const On = (i) => (
  /*html*/
  `
  <div class="${a}-hotkeys-list">
    ${i.map(
    ({ key: t, description: e }) => (
      /*html*/
      `
        <div class="${a}-hotkeys-list-item">
          <div class="${a}-hotkeys-list-key">${t}</div>
          <div class="${a}-hotkeys-list-description">${e}</div>
        </div>
      `
    )
  ).join("")}
  </div>
`
), gs = class gs extends bt {
  constructor(t) {
    const e = [
      { key: "Space", description: "播放/暂停" },
      { key: "→", description: "快进5秒" },
      { key: "←", description: "快退5秒" },
      { key: "↑", description: "音量增加10%" },
      { key: "↓", description: "音量降低10%" }
    ];
    super(
      t,
      u("div", { class: `${a}-hotkeys` }, On(e))
    ), this.title = "快捷键说明";
  }
};
gs.pluginName = "hotkeyInfo";
let ne = gs;
const $s = class $s extends f {
  constructor(t) {
    super(t), this.list = [], this.isShow = !1, this.player = t, this.container = u(
      "div",
      { class: `${a}-contextmenu-wrap` },
      /*html*/
      `
      <div class="${a}-contextmenu">
        <ul class="${a}-contextmenu-list mpui-black"></ul>
      </div>
      `
    ), this.$el = this.container.querySelector(`.${a}-contextmenu`), this.$list = this.$el.querySelector(`.${a}-contextmenu-list`), this.player.$main.appendChild(this.container);
  }
  apply(t, e) {
    var s;
    this.list = ((s = e.contextMenu) == null ? void 0 : s.list) || [];
  }
  ready() {
    this.setMenu(this.list);
  }
  setMenu(t) {
    this.$list.innerHTML = "";
    const e = new DocumentFragment();
    t.forEach((s) => {
      const n = this.player.plugin.from(s);
      if (!n)
        return;
      const r = u("li", { class: `${a}-contextmenu-item` });
      n.onClick && (r.onclick = () => {
        var h;
        (h = n.onClick) == null || h.call(n, this.player);
      });
      let l;
      typeof n.content == "function" ? l = n.content(this.player) : l = n.content, typeof l == "object" ? r.appendChild(l) : r.innerText = l, e.appendChild(r);
    }), this.$list.appendChild(e);
  }
  init() {
    this.player.$area.addEventListener("contextmenu", (t) => {
      t.preventDefault();
      const e = this.player.$area.getBoundingClientRect(), s = t.clientX - e.left, n = t.clientY - e.top;
      this.show(s, n);
    }), this.container.addEventListener("contextmenu", (t) => {
      t.preventDefault();
      const e = this.container.getBoundingClientRect(), s = t.clientX - e.left, n = t.clientY - e.top;
      this.show(s, n);
    }), document.addEventListener("click", () => {
      this.isShow && this.hide();
    });
  }
  show(t, e) {
    this.container.classList.add("is-show");
    const s = this.player.$area.getBoundingClientRect();
    t + this.$el.offsetWidth >= s.width ? (this.$el.style.right = s.width - t + "px", this.$el.style.left = "initial") : (this.$el.style.left = t + "px", this.$el.style.right = "initial"), e + this.$el.offsetHeight >= s.height ? (this.$el.style.bottom = s.height - e + "px", this.$el.style.top = "initial") : (this.$el.style.top = e + "px", this.$el.style.bottom = "initial"), this.isShow = !0, this.player.emit("contextMenuShow", t, e);
  }
  hide() {
    this.container.classList.remove("is-show"), this.isShow = !1, this.player.emit("contextMenuHide");
  }
};
$s.pluginName = "contextMenu";
let ae = $s;
const Vn = (
  /*html*/
  `
  <div class="${a}-controller-mask"></div>
  <div class="${a}-controller mpui-black">
    <div class="${a}-controller-top"></div>
    <div class="${a}-controller-content">
      <div class="${a}-controller-left"></div>
      <div class="${a}-controller-center"></div>
      <div class="${a}-controller-right"></div>
    </div>
  </div>
`
), fs = class fs extends f {
  constructor(t) {
    super(t), this.isHover = !1, this.controls = {}, this.player = t, this.container = u(
      "div",
      { class: `${a}-controller-wrap` },
      Vn
    ), this.$el = this.container.querySelector(`.${a}-controller`), this.$top = this.$el.querySelector(`.${a}-controller-top`), this.$content = this.$el.querySelector(`.${a}-controller-content`), this.$left = this.$el.querySelector(`.${a}-controller-left`), this.$center = this.$el.querySelector(`.${a}-controller-center`), this.$right = this.$el.querySelector(`.${a}-controller-right`), this.player.$main.append(this.container), this.inactiveHook = () => !this.isHover && void 0, this.mouseEnterHandler = () => {
      this.isHover = !0;
    }, this.mouseLeaveHandler = () => {
      this.isHover = !1;
    };
  }
  init() {
    this.player.hook.register("inactive", this.inactiveHook), this.container.addEventListener("mouseenter", this.mouseEnterHandler), this.container.addEventListener("mouseleave", this.mouseLeaveHandler);
  }
  apply(t, e) {
    var s;
    this.controls = ((s = e.controller) == null ? void 0 : s.controls) || {};
  }
  ready() {
    this.setControls(this.controls);
  }
  /** 更新控制组件 */
  setControls(t) {
    this.controls = t;
    const { left: e, center: s, right: n, top: r } = t;
    this.build(this.$left, e), this.build(this.$center, s), this.build(this.$right, n), this.build(this.$top, r);
  }
  build(t, e) {
    t.innerHTML = "";
    const s = new DocumentFragment();
    e == null || e.forEach((n) => {
      var l;
      const r = (l = this.player.plugin.from(n)) == null ? void 0 : l.$el;
      r && s.appendChild(r);
    }), t.appendChild(s);
  }
  destroy() {
    this.player.hook.unregister("inactive", this.inactiveHook), this.container.removeEventListener("mouseenter", this.mouseEnterHandler), this.container.removeEventListener("mouseleave", this.mouseLeaveHandler);
  }
};
fs.pluginName = "controller";
let re = fs;
var W = /* @__PURE__ */ ((i) => (i[i.Backspace = 8] = "Backspace", i[i.Tab = 9] = "Tab", i[i.Enter = 13] = "Enter", i[i.Shift = 16] = "Shift", i[i.Ctrl = 17] = "Ctrl", i[i.Alt = 18] = "Alt", i[i.PauseBreak = 19] = "PauseBreak", i[i.CapsLock = 20] = "CapsLock", i[i.Escape = 27] = "Escape", i[i.Space = 32] = "Space", i[i.PageUp = 33] = "PageUp", i[i.PageDown = 34] = "PageDown", i[i.End = 35] = "End", i[i.Home = 36] = "Home", i[i.LeftArrow = 37] = "LeftArrow", i[i.UpArrow = 38] = "UpArrow", i[i.RightArrow = 39] = "RightArrow", i[i.DownArrow = 40] = "DownArrow", i[i.Insert = 45] = "Insert", i[i.Delete = 46] = "Delete", i[i.Zero = 48] = "Zero", i[
  i.ClosedParen = 48
  /* Zero */
] = "ClosedParen", i[i.One = 49] = "One", i[
  i.ExclamationMark = 49
  /* One */
] = "ExclamationMark", i[i.Two = 50] = "Two", i[
  i.AtSign = 50
  /* Two */
] = "AtSign", i[i.Three = 51] = "Three", i[
  i.PoundSign = 51
  /* Three */
] = "PoundSign", i[
  i.Hash = 51
  /* PoundSign */
] = "Hash", i[i.Four = 52] = "Four", i[
  i.DollarSign = 52
  /* Four */
] = "DollarSign", i[i.Five = 53] = "Five", i[
  i.PercentSign = 53
  /* Five */
] = "PercentSign", i[i.Six = 54] = "Six", i[
  i.Caret = 54
  /* Six */
] = "Caret", i[
  i.Hat = 54
  /* Caret */
] = "Hat", i[i.Seven = 55] = "Seven", i[
  i.Ampersand = 55
  /* Seven */
] = "Ampersand", i[i.Eight = 56] = "Eight", i[
  i.Star = 56
  /* Eight */
] = "Star", i[
  i.Asterik = 56
  /* Star */
] = "Asterik", i[i.Nine = 57] = "Nine", i[
  i.OpenParen = 57
  /* Nine */
] = "OpenParen", i[i.A = 65] = "A", i[i.B = 66] = "B", i[i.C = 67] = "C", i[i.D = 68] = "D", i[i.E = 69] = "E", i[i.F = 70] = "F", i[i.G = 71] = "G", i[i.H = 72] = "H", i[i.I = 73] = "I", i[i.J = 74] = "J", i[i.K = 75] = "K", i[i.L = 76] = "L", i[i.M = 77] = "M", i[i.N = 78] = "N", i[i.O = 79] = "O", i[i.P = 80] = "P", i[i.Q = 81] = "Q", i[i.R = 82] = "R", i[i.S = 83] = "S", i[i.T = 84] = "T", i[i.U = 85] = "U", i[i.V = 86] = "V", i[i.W = 87] = "W", i[i.X = 88] = "X", i[i.Y = 89] = "Y", i[i.Z = 90] = "Z", i[i.LeftWindowKey = 91] = "LeftWindowKey", i[i.RightWindowKey = 92] = "RightWindowKey", i[i.SelectKey = 93] = "SelectKey", i[i.Numpad0 = 96] = "Numpad0", i[i.Numpad1 = 97] = "Numpad1", i[i.Numpad2 = 98] = "Numpad2", i[i.Numpad3 = 99] = "Numpad3", i[i.Numpad4 = 100] = "Numpad4", i[i.Numpad5 = 101] = "Numpad5", i[i.Numpad6 = 102] = "Numpad6", i[i.Numpad7 = 103] = "Numpad7", i[i.Numpad8 = 104] = "Numpad8", i[i.Numpad9 = 105] = "Numpad9", i[i.Multiply = 106] = "Multiply", i[i.Add = 107] = "Add", i[i.Subtract = 109] = "Subtract", i[i.DecimalPoint = 110] = "DecimalPoint", i[i.Divide = 111] = "Divide", i[i.F1 = 112] = "F1", i[i.F2 = 113] = "F2", i[i.F3 = 114] = "F3", i[i.F4 = 115] = "F4", i[i.F5 = 116] = "F5", i[i.F6 = 117] = "F6", i[i.F7 = 118] = "F7", i[i.F8 = 119] = "F8", i[i.F9 = 120] = "F9", i[i.F10 = 121] = "F10", i[i.F11 = 122] = "F11", i[i.F12 = 123] = "F12", i[i.NumLock = 144] = "NumLock", i[i.ScrollLock = 145] = "ScrollLock", i[i.SemiColon = 186] = "SemiColon", i[i.Equals = 187] = "Equals", i[i.Comma = 188] = "Comma", i[i.Dash = 189] = "Dash", i[i.Period = 190] = "Period", i[
  i.UnderScore = 189
  /* Dash */
] = "UnderScore", i[
  i.PlusSign = 187
  /* Equals */
] = "PlusSign", i[i.ForwardSlash = 191] = "ForwardSlash", i[i.Tilde = 192] = "Tilde", i[
  i.GraveAccent = 192
  /* Tilde */
] = "GraveAccent", i[i.OpenBracket = 219] = "OpenBracket", i[i.ClosedBracket = 221] = "ClosedBracket", i[i.Quote = 222] = "Quote", i))(W || {});
const ys = class ys {
  constructor(t) {
    this.player = t, this.controlMask = this.player.$area;
  }
  apply() {
    this.initKey(), this.initMask();
  }
  /** 初始化键盘事件 */
  initKey() {
    document.addEventListener("keydown", (t) => {
      var n, r;
      const e = (n = document.activeElement) == null ? void 0 : n.tagName.toUpperCase(), s = (r = document.activeElement) == null ? void 0 : r.getAttribute("contenteditable");
      if (this.player.isFocused) {
        if (e == "INPUT" || e == "TEXTAREA" || s == "" || s == "true")
          return;
        switch (t.keyCode) {
          case W.Space:
            t.preventDefault(), this.player.paused ? this.player.play() : this.player.pause();
            break;
          case W.LeftArrow:
            t.preventDefault(), this.player.seek(this.player.currentTime - 5);
            break;
          case W.RightArrow:
            t.preventDefault(), this.player.seek(this.player.currentTime + 5);
            break;
          case W.UpArrow:
            t.preventDefault(), this.player.setVolume(this.player.volume + 0.1), this.player.emit("hotkeyVolume");
            break;
          case W.DownArrow:
            t.preventDefault(), this.player.setVolume(this.player.volume - 0.1), this.player.emit("hotkeyVolume");
            break;
        }
      }
    });
  }
  /** 初始化遮罩事件 */
  initMask() {
    const t = Mi((e) => {
      this.player.setVolume(this.player.volume + (e > 0 ? -0.05 : 0.05));
    }, 50);
    this.controlMask.addEventListener("click", () => {
      this.player.paused ? this.player.play() : this.player.pause();
    }), this.controlMask.addEventListener("wheel", (e) => {
      (this.player.isWebscreen || this.player.isFullscreen) && (e.preventDefault(), this.player.muted && this.player.setMuted(!1), t(e.deltaY), this.player.emit("hotkeyVolume"));
    });
  }
};
ys.pluginName = "hotkey";
let le = ys;
const Bn = (
  /*html*/
  `
  <div class="${a}-modal-mask"></div>
  <div class="${a}-modal">
    <div class="${a}-modal-head">
      <div class="${a}-modal-title"></div>
      <div class="${a}-modal-close">
        <i class="mpicon-close"></i>
      </div>
    </div>
    <div class="${a}-modal-content"></div>
  </div>
`
);
var X;
const bs = class bs extends f {
  constructor(e) {
    super(e);
    R(this, X, void 0);
    this.current = null, E(this, X, []), this.container = u("div", { class: `${a}-modal-wrap` }, Bn), this.$el = this.container.querySelector(`.${a}-modal`), this.$mask = this.container.querySelector(`.${a}-modal-mask`), this.$content = this.$el.querySelector(`.${a}-modal-content`), this.$title = this.$el.querySelector(`.${a}-modal-title`), this.$close = this.$el.querySelector(`.${a}-modal-close`), this.player.$main.appendChild(this.container);
  }
  get isShow() {
    return this.container.classList.contains("is-show");
  }
  init() {
    this.$mask.addEventListener("click", () => {
      this.hide();
    }), this.$close.addEventListener("click", () => {
      this.hide();
    });
  }
  apply(e, s) {
    var n;
    E(this, X, ((n = s.modal) == null ? void 0 : n.panels) || []);
  }
  ready() {
    M(this, X).forEach((e) => {
      const s = this.player.plugin.from(e);
      s && this.append(s);
    }), E(this, X, []);
  }
  /** 关闭模态框 */
  hide() {
    var e, s;
    (s = (e = this.current) == null ? void 0 : e.toggle) == null || s.call(e, !1);
  }
  /** 挂载一个面板 */
  append(e) {
    e.mount(this.$content, {
      onToggle: (s) => {
        if (s) {
          for (const n of this.$content.children)
            n.classList.toggle("is-show", n == e.$el);
          this.container.classList.add("is-show"), this.$title.innerText = e.title || "", this.current = e;
        } else
          this.current == e && (this.container.classList.remove("is-show"), e.$el.classList.remove("is-show"), this.$title.innerText = "", this.current = null);
      }
    });
  }
};
X = new WeakMap(), bs.pluginName = "modal";
let oe = bs;
const qn = (
  /*html*/
  `
  <div class="${a}-progress-bar">
    <div class="${a}-progress-buffered"></div>
    <div class="${a}-progress-played"></div>
    <div class="${a}-progress-thumb-track">
      <div class="${a}-progress-thumb"></div>
    </div>
    <div class="${a}-progress-preview">
      <div class="${a}-progress-thumbnail"></div>
      <div class="${a}-progress-time"></div>
    </div>
    <div class="${a}-progress-tip"></div>
  </div>
`
), ks = class ks extends F {
  constructor(t) {
    super(t, u("div", { class: `${a}-progress` }, qn)), this.trackLength = 0, this.distance = 0, this.nMax = 0, this.nLeft = 0, this.isDragging = !1, this.isHover = !1, this.isActive = !1, this.$bar = this.$(`.${a}-progress-bar`), this.$buffered = this.$(`.${a}-progress-buffered`), this.$played = this.$(`.${a}-progress-played`), this.$thumbTrack = this.$(`.${a}-progress-thumb-track`), this.$thumb = this.$(`.${a}-progress-thumb`), this.$preview = this.$(`.${a}-progress-preview`), this.$thumbnail = this.$(`.${a}-progress-thumbnail`), this.$time = this.$(`.${a}-progress-time`), this.$tip = this.$(`.${a}-progress-tip`), this.$el.addEventListener("mousedown", (n) => {
      const { clientX: r } = n;
      this.trackLength = this.$el.offsetWidth, this.nMax = this.$thumbTrack.offsetWidth || this.trackLength, this.nLeft = this.$el.getBoundingClientRect().left, this.distance = r - this.nLeft, this.setPlayed(this.nValue), this.$el.classList.add(`${a}-progress-dragging`), this.isDragging = !0, document.addEventListener("mousemove", e), document.addEventListener("mouseup", s);
    });
    const e = (n) => {
      var l;
      const { clientX: r } = n;
      n.preventDefault(), n.stopPropagation(), this.distance = r - this.nLeft, this.setPlayed(this.nValue), this.updateTip(), (l = window.getSelection()) == null || l.removeAllRanges();
    }, s = (n) => {
      var r;
      n.stopPropagation(), (r = window.getSelection()) == null || r.removeAllRanges(), document.removeEventListener("mousemove", e), document.removeEventListener("mouseup", s), this.$el.classList.remove(`${a}-progress-dragging`), this.isDragging = !1, this.isHover || this.setActive(!1), this.player.seek(this.nValue), this.player.play();
    };
    this.$el.addEventListener("mouseenter", () => {
      this.isHover = !0, this.isDragging || this.updateTip();
    }), this.$el.addEventListener("mousemove", (n) => {
      if (this.isDragging)
        return;
      const { clientX: r } = n;
      this.trackLength = this.$el.offsetWidth, this.nMax = this.$thumbTrack.offsetWidth || this.trackLength, this.nLeft = this.$el.getBoundingClientRect().left, this.distance = r - this.nLeft, this.updateTip();
    }), this.$el.addEventListener("mouseleave", () => {
      this.isHover = !1, this.isDragging || this.setActive(!1);
    }), this.player.on("timeupdate", (n) => {
      this.isDragging || this.setPlayed(n);
    }), this.player.on("progress", (n) => {
      this.setBuffered(n.length ? n.end(n.length - 1) : 0);
    });
  }
  /** 滑动距离 */
  get nLength() {
    const t = this.distance - this.thumbTrackX;
    return t >= this.nMax ? this.nMax : t <= 0 ? 0 : t;
  }
  /** 滑块轨道与总轨道距离差 */
  get thumbTrackX() {
    return (this.trackLength - this.nMax) / 2;
  }
  /** 滑动值 */
  get nValue() {
    return this.nLength / this.nMax * this.player.duration;
  }
  /** 设置已播放进度条位置 */
  setPlayed(t) {
    const e = t / this.player.duration || 0;
    this.$thumb.style.left = `${e * 100}%`, this.$played.style.width = `${e * 100}%`;
  }
  /** 设置已播放进度条位置 */
  setBuffered(t) {
    const e = t / this.player.duration || 0;
    this.$buffered.style.width = `${e * 100}%`;
  }
  /** 设置进度条活跃状态 */
  setActive(t) {
    this.isActive = t, this.$el.classList.toggle(`${a}-progress-active`, t), t ? this.player.isControlled = !0 : this.player.isControlled = !1;
  }
  /** 更新指针位置 */
  updateTip() {
    this.isActive || this.setActive(!0);
    let t = this.distance / this.trackLength;
    t = t >= 1 ? 1 : t <= 0 ? 0 : t, this.$tip.style.left = `${t * 100}%`, this.$preview.style.left = `${t * 100}%`, this.$time.innerText = ft(this.nValue);
  }
};
ks.pluginName = "progress";
let he = ks;
const Cn = (
  /*html*/
  `
  <div class="${a}-settings-slot">
    <div class="${a}-panel-row">
      <div class="${a}-row-label">播放倍速</div>
      <div class="${a}-settings-rate-picker"></div>
    </div>
    <div class="${a}-panel-row">
      <div class="${a}-row-label">视频比例</div>
      <div class="${a}-settings-ratio-picker"></div>
    </div>
  </div>
  <div class="${a}-panel-row">
    <div class="${a}-row-label">播放方式</div>
    <div class="${a}-settings-play"></div>
  </div>
  <div class="${a}-panel-row">
    <div class="${a}-row-label">其他设置</div>
    <div class="${a}-settings-others"></div>
  </div>
`
), ws = class ws extends bt {
  constructor(t) {
    super(t, u("div", { class: `${a}-settings` }, Cn)), this.title = "设置", this.$slot = this.$(`.${a}-settings-slot`), this.$play = this.$(`.${a}-settings-play`), this.$others = this.$(`.${a}-settings-others`), this.$ratePicker = this.$(`.${a}-settings-rate-picker`), this.$ratioPicker = this.$(`.${a}-settings-ratio-picker`);
  }
  init() {
    this.pickerRate = new tt({
      container: this.$ratePicker,
      list: [
        { value: 0.5, label: "0.5" },
        { value: 0.75, label: "0.75" },
        { value: 1, label: "1.0" },
        { value: 1.25, label: "1.25" },
        { value: 1.5, label: "1.5" },
        { value: 2, label: "2.0" }
      ],
      value: this.player.playbackRate || 1,
      onPick: (t) => {
        this.player.setPlaybackRate(Number(t));
      }
    }), this.player.on("ratechange", (t) => {
      this.pickerRate.setValue(t);
    }), this.pickerRatio = new tt({
      container: this.$ratioPicker,
      list: [
        { value: "", label: "自动" },
        { value: "16/9", label: "16:9" },
        { value: "4/3", label: "4:3" }
      ],
      value: this.player.aspectRatio || "",
      onPick: (t) => {
        var e, s;
        (s = (e = this.player).setAspectRatio) == null || s.call(e, t || "");
      }
    }), this.player.on("aspectRatioChange", (t) => {
      this.pickerRatio.setValue(t);
    });
  }
};
ws.pluginName = "settings";
let ce = ws;
const jn = (
  /*html*/
  `
  <div class="${a}-side-mask"></div>
  <div class="${a}-side">
    <div class="${a}-side-head">
      <div class="${a}-side-title"></div>
      <div class="${a}-side-close">
        <i class="mpicon-close"></i>
      </div>
    </div>
    <div class="${a}-side-content"></div>
  </div>
`
);
var Y;
const xs = class xs extends f {
  constructor(e) {
    super(e);
    R(this, Y, void 0);
    this.current = null, E(this, Y, []), this.container = u("div", { class: `${a}-side-wrap` }, jn), this.$el = this.container.querySelector(`.${a}-side`), this.$mask = this.container.querySelector(`.${a}-side-mask`), this.$content = this.$el.querySelector(`.${a}-side-content`), this.$title = this.$el.querySelector(`.${a}-side-title`), this.$close = this.$el.querySelector(`.${a}-side-close`), this.player.$main.appendChild(this.container);
  }
  get isShow() {
    return this.container.classList.contains("is-show");
  }
  init() {
    this.$mask.addEventListener("click", () => {
      this.hide();
    }), this.$close.addEventListener("click", () => {
      this.hide();
    });
  }
  apply(e, s) {
    var n;
    E(this, Y, ((n = s.side) == null ? void 0 : n.panels) || []);
  }
  ready() {
    M(this, Y).forEach((e) => {
      const s = this.player.plugin.from(e);
      s && this.append(s);
    }), E(this, Y, []);
  }
  hide() {
    var e, s;
    (s = (e = this.current) == null ? void 0 : e.toggle) == null || s.call(e, !1);
  }
  append(e) {
    e.mount(this.$content, {
      onToggle: (s) => {
        var n, r;
        if (s) {
          (r = (n = this.current) == null ? void 0 : n.toggle) == null || r.call(n, !1);
          for (const l of this.$content.children)
            l.classList.toggle("is-show", l == e.$el);
          this.container.classList.add("is-show"), this.$title.innerText = e.title || "", this.current = e;
        } else
          this.current == e && (this.container.classList.remove("is-show"), e.$el.classList.remove("is-show"), this.$title.innerText = "", this.current = null);
      }
    });
  }
};
Y = new WeakMap(), xs.pluginName = "side";
let de = xs;
const Ls = class Ls extends f {
  constructor(t) {
    super(t), this.player.define("isPip", {
      get: () => this.status
    }), this.player.define("enterPip", () => this.enter()), this.player.define("exitPip", () => this.exit()), this.player.on("enterpictureinpicture", () => {
      this.player.$el.classList.add("is-pip");
    }), this.player.on("leavepictureinpicture", () => {
      this.player.$el.classList.remove("is-pip");
    }), this.player.on("enterpictureinpicture", () => {
      var e, s;
      (s = (e = this.player).exitFullscreen) == null || s.call(e);
    }), this.player.on("fullscreenEnter", () => {
      this.exit();
    });
  }
  enter() {
    this.status || this.player.$video.requestPictureInPicture();
  }
  exit() {
    this.status && document.exitPictureInPicture();
  }
  get status() {
    return document.pictureInPictureElement == this.player.$video;
  }
};
Ls.pluginName = "pip";
let ue = Ls;
const Es = class Es extends f {
  constructor(t) {
    super(t), this.$el = this.player.$main, this.player.define("isFullscreen", {
      get: () => this.status
    }), this.player.define("enterFullscreen", () => this.enter()), this.player.define("exitFullscreen", () => this.exit());
    const e = () => {
      this.status ? (this.player.$el.classList.add("is-fullscreen"), this.player.emit("fullscreenEnter")) : (this.player.$el.classList.remove("is-fullscreen"), this.player.emit("fullscreenExit"));
    };
    this.$el.addEventListener("fullscreenchange", e), this.$el.addEventListener("webkitfullscreenchange", e), this.$el.addEventListener("mozfullscreenchange", e), this.$el.addEventListener("msfullscreenchange", e);
  }
  enter() {
    if (this.status)
      return;
    const t = this.$el;
    t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.webkitEnterFullscreen ? t.webkitEnterFullscreen() : t.webkitEnterFullScreen ? t.webkitEnterFullScreen() : t.msRequestFullscreen && t.msRequestFullscreen();
  }
  exit() {
    if (!this.status)
      return;
    const t = document;
    document.exitFullscreen ? document.exitFullscreen() : t.mozCancelFullScreen ? t.mozCancelFullScreen() : t.webkitExitFullscreen ? t.webkitExitFullscreen() : t.webkitExitFullScreen ? t.webkitExitFullScreen() : this.$el.msExitFullscreen && this.$el.msExitFullscreen();
  }
  get status() {
    return !!(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement == this.$el);
  }
};
Es.pluginName = "fullscreen";
let pe = Es;
const Ss = class Ss extends f {
  constructor() {
    super(...arguments), this._userId = 0, this._authorId = 0;
  }
  get invokeLogin() {
    return this.player.invokes.login;
  }
  init() {
    this.player.define("userId", { get: () => this._userId }), this.player.define("authorId", { get: () => this._authorId }), this.player.define("login", () => this.login()), this.player.on("videoChange", ({ author: t }) => {
      (t == null ? void 0 : t.id) != null && (this._authorId = t.id || 0);
    });
  }
  apply(t, e) {
    this._userId = e.userId || 0;
  }
  /** 调用页面登录 */
  async login() {
    var t;
    await ((t = this.invokeLogin) == null ? void 0 : t.call(this).then((e) => {
      e != null && this.setUser(e);
    }));
  }
  /** 设置用户 */
  async setUser(t) {
    this._userId = t, this.player.emit("login", t);
  }
};
Ss.pluginName = "user";
let me = Ss;
var I, B;
const Ts = class Ts extends f {
  constructor(e) {
    super(e);
    R(this, I, void 0);
    R(this, B, void 0);
    E(this, I, !1), E(this, B, !1), this.activeDuration = 3e3, this.player.define("isActive", {
      get: () => M(this, I)
    });
    const s = _t(() => {
      E(this, B, !1), this.remove();
    }, this.activeDuration);
    this.player.$main.addEventListener("mousemove", () => {
      E(this, B, !0), this.set(), s();
    }), this.player.$main.addEventListener("mouseleave", () => {
      E(this, B, !1), this.remove();
    });
  }
  apply(e, s) {
    this.activeDuration = s.activeDuration ?? 3e3;
  }
  /** 设置播放器活跃状态 */
  set() {
    M(this, I) || (this.player.$el.classList.add("is-active"), E(this, I, !0), this.player.emit("active"));
  }
  /** 移除播放器活跃状态 */
  remove() {
    !M(this, I) || M(this, B) || this.player.isControlled || this.player.hook.call("inactive").then((e) => {
      e && (this.player.$el.classList.remove("is-active"), E(this, I, !1), this.player.emit("inactive"));
    });
  }
};
I = new WeakMap(), B = new WeakMap(), Ts.pluginName = "stateActive";
let ve = Ts;
const As = class As extends f {
  constructor(t) {
    super(t), this.player.define("isFocused", {
      get: () => this.status
    }), document.addEventListener(
      "click",
      () => {
        this.toggle(!1);
      },
      !0
    ), this.player.$el.addEventListener(
      "click",
      () => {
        this.toggle(!0);
      },
      !0
    );
  }
  /** 设置播放器聚焦状态 */
  toggle(t) {
    this.status != t && (this.player.$el.classList.toggle("is-focus", t), this.player.emit(t ? "focus" : "blur"));
  }
  get status() {
    return this.player.$el.classList.contains("is-focus");
  }
};
As.pluginName = "stateFocus";
let ge = As;
var K = [], Wn = function() {
  return K.some(function(i) {
    return i.activeTargets.length > 0;
  });
}, Un = function() {
  return K.some(function(i) {
    return i.skippedTargets.length > 0;
  });
}, fi = "ResizeObserver loop completed with undelivered notifications.", Xn = function() {
  var i;
  typeof ErrorEvent == "function" ? i = new ErrorEvent("error", {
    message: fi
  }) : (i = document.createEvent("Event"), i.initEvent("error", !1, !1), i.message = fi), window.dispatchEvent(i);
}, $t;
(function(i) {
  i.BORDER_BOX = "border-box", i.CONTENT_BOX = "content-box", i.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})($t || ($t = {}));
var G = function(i) {
  return Object.freeze(i);
}, Yn = /* @__PURE__ */ function() {
  function i(t, e) {
    this.inlineSize = t, this.blockSize = e, G(this);
  }
  return i;
}(), qi = function() {
  function i(t, e, s, n) {
    return this.x = t, this.y = e, this.width = s, this.height = n, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, G(this);
  }
  return i.prototype.toJSON = function() {
    var t = this, e = t.x, s = t.y, n = t.top, r = t.right, l = t.bottom, h = t.left, o = t.width, c = t.height;
    return { x: e, y: s, top: n, right: r, bottom: l, left: h, width: o, height: c };
  }, i.fromRect = function(t) {
    return new i(t.x, t.y, t.width, t.height);
  }, i;
}(), Qe = function(i) {
  return i instanceof SVGElement && "getBBox" in i;
}, Ci = function(i) {
  if (Qe(i)) {
    var t = i.getBBox(), e = t.width, s = t.height;
    return !e && !s;
  }
  var n = i, r = n.offsetWidth, l = n.offsetHeight;
  return !(r || l || i.getClientRects().length);
}, yi = function(i) {
  var t;
  if (i instanceof Element)
    return !0;
  var e = (t = i == null ? void 0 : i.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(e && i instanceof e.Element);
}, Kn = function(i) {
  switch (i.tagName) {
    case "INPUT":
      if (i.type !== "image")
        break;
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return !0;
  }
  return !1;
}, dt = typeof window < "u" ? window : {}, wt = /* @__PURE__ */ new WeakMap(), bi = /auto|scroll/, Gn = /^tb|vertical/, Zn = /msie|trident/i.test(dt.navigator && dt.navigator.userAgent), D = function(i) {
  return parseFloat(i || "0");
}, et = function(i, t, e) {
  return i === void 0 && (i = 0), t === void 0 && (t = 0), e === void 0 && (e = !1), new Yn((e ? t : i) || 0, (e ? i : t) || 0);
}, ki = G({
  devicePixelContentBoxSize: et(),
  borderBoxSize: et(),
  contentBoxSize: et(),
  contentRect: new qi(0, 0, 0, 0)
}), ji = function(i, t) {
  if (t === void 0 && (t = !1), wt.has(i) && !t)
    return wt.get(i);
  if (Ci(i))
    return wt.set(i, ki), ki;
  var e = getComputedStyle(i), s = Qe(i) && i.ownerSVGElement && i.getBBox(), n = !Zn && e.boxSizing === "border-box", r = Gn.test(e.writingMode || ""), l = !s && bi.test(e.overflowY || ""), h = !s && bi.test(e.overflowX || ""), o = s ? 0 : D(e.paddingTop), c = s ? 0 : D(e.paddingRight), p = s ? 0 : D(e.paddingBottom), $ = s ? 0 : D(e.paddingLeft), b = s ? 0 : D(e.borderTopWidth), S = s ? 0 : D(e.borderRightWidth), T = s ? 0 : D(e.borderBottomWidth), m = s ? 0 : D(e.borderLeftWidth), v = $ + c, d = o + p, g = m + S, L = b + T, k = h ? i.offsetHeight - L - i.clientHeight : 0, A = l ? i.offsetWidth - g - i.clientWidth : 0, w = n ? v + g : 0, x = n ? d + L : 0, H = s ? s.width : D(e.width) - w - A, y = s ? s.height : D(e.height) - x - k, _ = H + v + A + g, N = y + d + k + L, ot = G({
    devicePixelContentBoxSize: et(Math.round(H * devicePixelRatio), Math.round(y * devicePixelRatio), r),
    borderBoxSize: et(_, N, r),
    contentBoxSize: et(H, y, r),
    contentRect: new qi($, o, H, y)
  });
  return wt.set(i, ot), ot;
}, Wi = function(i, t, e) {
  var s = ji(i, e), n = s.borderBoxSize, r = s.contentBoxSize, l = s.devicePixelContentBoxSize;
  switch (t) {
    case $t.DEVICE_PIXEL_CONTENT_BOX:
      return l;
    case $t.BORDER_BOX:
      return n;
    default:
      return r;
  }
}, Jn = /* @__PURE__ */ function() {
  function i(t) {
    var e = ji(t);
    this.target = t, this.contentRect = e.contentRect, this.borderBoxSize = G([e.borderBoxSize]), this.contentBoxSize = G([e.contentBoxSize]), this.devicePixelContentBoxSize = G([e.devicePixelContentBoxSize]);
  }
  return i;
}(), Ui = function(i) {
  if (Ci(i))
    return 1 / 0;
  for (var t = 0, e = i.parentNode; e; )
    t += 1, e = e.parentNode;
  return t;
}, Qn = function() {
  var i = 1 / 0, t = [];
  K.forEach(function(l) {
    if (l.activeTargets.length !== 0) {
      var h = [];
      l.activeTargets.forEach(function(c) {
        var p = new Jn(c.target), $ = Ui(c.target);
        h.push(p), c.lastReportedSize = Wi(c.target, c.observedBox), $ < i && (i = $);
      }), t.push(function() {
        l.callback.call(l.observer, h, l.observer);
      }), l.activeTargets.splice(0, l.activeTargets.length);
    }
  });
  for (var e = 0, s = t; e < s.length; e++) {
    var n = s[e];
    n();
  }
  return i;
}, wi = function(i) {
  K.forEach(function(e) {
    e.activeTargets.splice(0, e.activeTargets.length), e.skippedTargets.splice(0, e.skippedTargets.length), e.observationTargets.forEach(function(n) {
      n.isActive() && (Ui(n.target) > i ? e.activeTargets.push(n) : e.skippedTargets.push(n));
    });
  });
}, ta = function() {
  var i = 0;
  for (wi(i); Wn(); )
    i = Qn(), wi(i);
  return Un() && Xn(), i > 0;
}, Dt, Xi = [], ea = function() {
  return Xi.splice(0).forEach(function(i) {
    return i();
  });
}, sa = function(i) {
  if (!Dt) {
    var t = 0, e = document.createTextNode(""), s = { characterData: !0 };
    new MutationObserver(function() {
      return ea();
    }).observe(e, s), Dt = function() {
      e.textContent = "".concat(t ? t-- : t++);
    };
  }
  Xi.push(i), Dt();
}, ia = function(i) {
  sa(function() {
    requestAnimationFrame(i);
  });
}, St = 0, na = function() {
  return !!St;
}, aa = 250, ra = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, xi = [
  "resize",
  "load",
  "transitionend",
  "animationend",
  "animationstart",
  "animationiteration",
  "keyup",
  "keydown",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout",
  "blur",
  "focus"
], Li = function(i) {
  return i === void 0 && (i = 0), Date.now() + i;
}, It = !1, la = function() {
  function i() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return i.prototype.run = function(t) {
    var e = this;
    if (t === void 0 && (t = aa), !It) {
      It = !0;
      var s = Li(t);
      ia(function() {
        var n = !1;
        try {
          n = ta();
        } finally {
          if (It = !1, t = s - Li(), !na())
            return;
          n ? e.run(1e3) : t > 0 ? e.run(t) : e.start();
        }
      });
    }
  }, i.prototype.schedule = function() {
    this.stop(), this.run();
  }, i.prototype.observe = function() {
    var t = this, e = function() {
      return t.observer && t.observer.observe(document.body, ra);
    };
    document.body ? e() : dt.addEventListener("DOMContentLoaded", e);
  }, i.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), xi.forEach(function(e) {
      return dt.addEventListener(e, t.listener, !0);
    }));
  }, i.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), xi.forEach(function(e) {
      return dt.removeEventListener(e, t.listener, !0);
    }), this.stopped = !0);
  }, i;
}(), $e = new la(), Ei = function(i) {
  !St && i > 0 && $e.start(), St += i, !St && $e.stop();
}, oa = function(i) {
  return !Qe(i) && !Kn(i) && getComputedStyle(i).display === "inline";
}, ha = function() {
  function i(t, e) {
    this.target = t, this.observedBox = e || $t.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return i.prototype.isActive = function() {
    var t = Wi(this.target, this.observedBox, !0);
    return oa(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, i;
}(), ca = /* @__PURE__ */ function() {
  function i(t, e) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = e;
  }
  return i;
}(), xt = /* @__PURE__ */ new WeakMap(), Si = function(i, t) {
  for (var e = 0; e < i.length; e += 1)
    if (i[e].target === t)
      return e;
  return -1;
}, Lt = function() {
  function i() {
  }
  return i.connect = function(t, e) {
    var s = new ca(t, e);
    xt.set(t, s);
  }, i.observe = function(t, e, s) {
    var n = xt.get(t), r = n.observationTargets.length === 0;
    Si(n.observationTargets, e) < 0 && (r && K.push(n), n.observationTargets.push(new ha(e, s && s.box)), Ei(1), $e.schedule());
  }, i.unobserve = function(t, e) {
    var s = xt.get(t), n = Si(s.observationTargets, e), r = s.observationTargets.length === 1;
    n >= 0 && (r && K.splice(K.indexOf(s), 1), s.observationTargets.splice(n, 1), Ei(-1));
  }, i.disconnect = function(t) {
    var e = this, s = xt.get(t);
    s.observationTargets.slice().forEach(function(n) {
      return e.unobserve(t, n.target);
    }), s.activeTargets.splice(0, s.activeTargets.length);
  }, i;
}(), Yi = function() {
  function i(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Lt.connect(this, t);
  }
  return i.prototype.observe = function(t, e) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!yi(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Lt.observe(this, t, e);
  }, i.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!yi(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Lt.unobserve(this, t);
  }, i.prototype.disconnect = function() {
    Lt.disconnect(this);
  }, i.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, i;
}();
const Hs = class Hs extends f {
  constructor(t) {
    super(t);
    const e = window.ResizeObserver || Yi;
    e && (this.observer = new e(([s]) => {
      const { width: n, height: r } = s.contentRect;
      this.player.emit("resize", [n, r]);
    }));
  }
  mounted() {
    var t;
    (t = this.observer) == null || t.observe(this.player.$el);
  }
};
Hs.pluginName = "stateResize";
let fe = Hs;
const _s = class _s extends f {
  constructor(t) {
    super(t), this._status = !1, this.player.define("isIntersecting", {
      get: () => this._status
    }), window.IntersectionObserver && (this.observer = new window.IntersectionObserver(([e]) => {
      const { isIntersecting: s } = e;
      this._status = s, this.player.emit("intersection", s);
    })), this.player.once("mounted", () => {
      var e;
      (e = this.observer) == null || e.observe(this.player.$el);
    });
  }
};
_s.pluginName = "stateIntersecting";
let ye = _s;
const Ms = class Ms extends yt {
  constructor(t) {
    super(t, u("div", { class: `${a}-toast` })), this.defaultDuration = 5e3, this.player.$area.appendChild(this.$el);
  }
  init() {
    this.player.define(
      "toast",
      (t, e, s) => this.append(t, e, s)
    );
  }
  /** 添加toast消息
   * @param content 要发送的消息
   * @param duration 持续时间(ms)
   * @returns 消息id
   */
  append(t, e, s) {
    const n = this.createToastItem({ content: t, duration: e, close: s });
    return this.$el.appendChild(n.el), n;
  }
  /** 创建一个toast元素 */
  createToastItem(t) {
    const e = u("div", { class: `${a}-toast-item` });
    e.appendChild(
      u("div", { class: `${a}-toast-item-content` })
    ).appendChild(typeof t.content == "object" ? t.content : new Text(t.content));
    const n = {
      el: e,
      close() {
        this.el.remove();
      }
    };
    if (t.close) {
      const h = e.appendChild(
        u(
          "div",
          { class: `${a}-toast-item-close` },
          /*html*/
          `
            <i class="mpicon-close"></i>
          `
        )
      );
      h.onclick = () => {
        n.close();
      };
    }
    let r = 0;
    const l = () => {
      n.close(), window.clearTimeout(r);
    };
    return r = window.setTimeout(l, t.duration || this.defaultDuration), n;
  }
  /** 移除toast消息 */
  remove(t) {
    t.close();
  }
  /** 清除所有toast消息 */
  clear() {
    this.$el.innerHTML = "";
  }
};
Ms.pluginName = "toast";
let be = Ms;
const da = [
  ve,
  ge,
  fe,
  ye,
  ue,
  pe
], ua = [oe, de, re, be, ce, le, ae, me], pa = [
  he,
  Wt,
  Ut,
  Xt,
  Yt,
  Kt,
  Gt,
  Zt,
  Jt,
  Qt,
  se
], ma = [...da, ...ua, ...pa], Fs = class Fs extends f {
  constructor() {
    super(...arguments), this._status = !1;
  }
  init() {
    this.player.hook.register("end", () => {
      if (this.status) {
        const { part: t, list: e } = this.player.getVideoInfo();
        if (t != (e == null ? void 0 : e.length))
          return this.player.next(), !1;
      }
    });
  }
  apply(t, e) {
    e.autoPart && this.toggle(!0);
  }
  ready() {
    if (this.plugins.settings) {
      const t = document.createElement("div");
      this.checkbox = new Q({
        container: t,
        value: this.status,
        onToggle: (e) => {
          this.toggle(e), this.player.emit("setValue", "autoPart", e);
        },
        label: "分P连播"
      }), this.plugins.settings.$play.appendChild(t);
    }
  }
  toggle(t) {
    t ? this._status = !0 : this._status = !1, this.player.emit("autoPartChange", t);
  }
  get status() {
    return this._status;
  }
};
Fs.pluginName = "autoPart";
let ke = Fs;
const Ps = class Ps extends f {
  apply(t, e) {
    e.autoplay && this.toggle(!0);
  }
  ready() {
    if (this.plugins.settings) {
      const t = document.createElement("div");
      this.checkbox = new Q({
        container: t,
        value: this.player.autoplay,
        onToggle: (e) => {
          this.toggle(e), this.player.emit("setValue", "autoplay", e);
        },
        label: "自动播放"
      }), this.plugins.settings.$play.appendChild(t), this.player.on("autoplayChange", (e) => {
        var s;
        (s = this.checkbox) == null || s.setValue(e);
      });
    }
  }
  toggle(t) {
    t ? this.player.setAutoplay(!0) : this.player.setAutoplay(!1);
  }
};
Ps.pluginName = "autoPlay";
let we = Ps;
const Rs = class Rs extends f {
  constructor() {
    super(...arguments), this._status = !1;
  }
  apply(t, e) {
    if (e.autoSeek) {
      if (this.toggle(!0), !e.lastPosition)
        return;
      this.player.once("loadedmetadata", () => {
        console.log(`ok: ${e.time} ${e.lastPosition}`), !e.time && this.player.seek(Math.floor(e.lastPosition));
      });
    }
  }
  ready() {
    if (this.plugins.settings) {
      const t = document.createElement("div");
      this.checkbox = new Q({
        container: t,
        value: this.status,
        onToggle: (e) => {
          this.toggle(e), this.player.emit("setValue", "autoSeek", e);
        },
        label: "断点续播"
      }), this.plugins.settings.$play.appendChild(t);
    }
  }
  toggle(t) {
    t ? this._status = !0 : this._status = !1, this.player.emit("autoSeekChange", t);
  }
  get status() {
    return this._status;
  }
};
Rs.pluginName = "autoSeek";
let xe = Rs;
const zt = {
  primaryColor: "--mp-primary-color",
  secondaryColor: "--mp-secondary-color",
  borderRadius: "--mp-border-radius",
  bgLight: "--mp-bg-light",
  bgDark: "--mp-bg-dark",
  bgBlack: "--mp-bg-black"
}, Ns = class Ns extends f {
  constructor(t) {
    super(t), this.properties = {}, this._matchDarkScheme = window.matchMedia("(prefers-color-scheme: dark)"), this.themeElement = this.player.container ? [this.player.container] : [], this._handleDarkScheme = (e) => {
      this.player.$el.classList.toggle("mpui-dark", e.matches);
    };
  }
  init() {
    this.player.define("theme", { value: this });
  }
  apply(t, e) {
    this.setTheme(e.theme || {});
  }
  /** 设置主题 */
  setTheme(t) {
    Object.assign(this.properties, t), this.themeElement.forEach((e) => {
      let s;
      for (s in t)
        e.style.setProperty(zt[s], t[s]);
    });
  }
  /** 设置某个主题属性 */
  set(t, e) {
    this.properties[t] = e, this.themeElement.forEach((s) => {
      s.style.setProperty(zt[t], e);
    });
  }
  get(t) {
    return this.properties[t];
  }
  /** 为元素绑定主题变量 */
  bind(t) {
    this.themeElement.push(t);
    let e;
    for (e in this.properties) {
      const s = this.properties[e];
      s && t.style.setProperty(zt[e], s);
    }
  }
  setColorScheme(t) {
    this.player.$el.classList.toggle("mpui-dark", t == "dark"), t == "auto" ? this._matchDarkScheme.addEventListener("change", this._handleDarkScheme) : this._matchDarkScheme.removeEventListener("change", this._handleDarkScheme);
  }
};
Ns.pluginName = "theme";
let Le = Ns;
const Ds = class Ds extends f {
  constructor(t) {
    super(t), this.baseVideoInfo = null;
  }
  init() {
    this.player.hook.register(
      "video.set",
      (t) => {
        var e, s;
        (!((e = this.baseVideoInfo) != null && e.list) || ((s = this.baseVideoInfo) == null ? void 0 : s.list) != t.list) && (this.baseVideoInfo = { ...t }, this.player.emit("partListChange", [])), t.list ? (t.part || (t.part = 1), Object.assign(t, t.list[t.part - 1]), t.hasNext || (t.hasNext = t.part < t.list.length), t.hasPrev || (t.hasPrev = t.part > 1), this.player.emit("partChange", t.part)) : this.player.emit("partChange", 1);
      },
      !0
    ), this.player.hook.register("next", () => {
      if (this.list && this.part < this.num)
        return this.set(this.part + 1), !1;
    }), this.player.hook.register("prev", () => {
      if (this.list && this.part > 1)
        return this.set(this.part - 1), !1;
    });
  }
  /** 设置分P */
  set(t, e) {
    var n;
    const s = this.player.getVideoInfo();
    t > 0 && t <= (((n = s.list) == null ? void 0 : n.length) || 0) && this.player.setVideo(
      {
        ...this.baseVideoInfo,
        part: t
      },
      e ?? !this.player.paused
    );
  }
  get num() {
    var t;
    return ((t = this.player.getVideoInfo().list) == null ? void 0 : t.length) || 0;
  }
  get list() {
    return this.player.getVideoInfo().list || [];
  }
  get part() {
    return this.player.getVideoInfo().part || 1;
  }
};
Ds.pluginName = "part";
let Ee = Ds;
const Is = class Is extends f {
  constructor(t) {
    super(t);
  }
  /** 无缝加载视频 */
  load(t) {
    this.player.emit("videoLoad", t);
    const { url: e, type: s, play: n, time: r } = t, l = this.player.$video, h = l.cloneNode(), o = this.player.loader.create(t, h);
    h.addEventListener(
      "loadedmetadata",
      () => {
        this.player.$content.insertBefore(h, l);
        const c = r === !0 ? this.player.currentTime : r || 0;
        h.currentTime = c, !this.player.paused && h.play(), h.addEventListener(
          "canplay",
          () => {
            this.player.emit("videoLoad", t), this.player.isPip && h.requestPictureInPicture(), this.player.attachMediaController(o), l.remove(), n == !0 && this.player.paused && this.player.play(), n == !1 && !this.player.paused && this.player.pause();
          },
          { once: !0 }
        );
      },
      { once: !0 }
    );
  }
  ready() {
    this.player.hook.register("video.load", (t) => {
      if (t.time === !0)
        return this.load(t), this.player.emit("videoLoad", t), !1;
    });
  }
};
Is.pluginName = "seamless";
let Se = Is;
const va = (i, t) => i.map(
  ({ title: e }, s) => O`
      <li
        class="${a}-partlist-item"
        @click=${() => {
    t(s + 1);
  }}
        data-part="${s + 1}"
      >
        <div class="${a}-partlist-item-id">P${s + 1}</div>
        <div class="${a}-partlist-item-title">${e}</div>
      </li>
    `
), zs = class zs extends bt {
  constructor(t) {
    super(t, u("div", { class: `${a}-partlist` })), this.title = "分P列表", this._part = 0, this._list = [], this.$list = this.$el.appendChild(
      u("ul", { class: `${a}-partlist-list mpui-list` })
    );
  }
  init() {
    this.player.on("videoChange", (t) => {
      this._update(t.list), this._select(t.part || 1);
    });
  }
  _update(t) {
    t != this._list && (this._list = t, Ft(
      va(t || [], (e) => {
        var s;
        (s = this.plugins.part) == null || s.set(e);
      }),
      this.$list
    ));
  }
  _select(t) {
    var e, s;
    (e = this.$list.querySelector(`li[data-part="${this._part}"]`)) == null || e.classList.remove("is-selected"), this._part = t, (s = this.$list.querySelector(`li[data-part="${t}"]`)) == null || s.classList.add("is-selected");
  }
};
zs.pluginName = "partList";
let Te = zs;
const ga = (
  /*html*/
  `
  <div class="">
    <div class="${a}-controls-button-icon">
      <div class="${a}-controls-button-text">弹幕列表</div>
    </div>
    <div class="mpui-tooltip">弹幕列表</div>
  </div>
`
), Os = class Os extends F {
  constructor(t) {
    super(
      t,
      u(
        "div",
        { class: `${a}-controls-button ${a}-button-danmakulist` },
        ga
      )
    ), this.$icon = this.$(`.${a}-controls-button-icon`), this.$text = this.$(`.${a}-controls-button-text`), this.$tooltip = this.$(".mpui-tooltip");
  }
  init() {
    this.$icon.addEventListener("click", () => {
      var t;
      (t = this.plugins.danmakuList) == null || t.toggle();
    });
  }
};
Os.pluginName = "buttonDanmakuList";
let Ae = Os;
const Vs = class Vs extends f {
  constructor() {
    super(...arguments), this.current = null, this.target = null, this.list = [];
  }
  init() {
    this.player.hook.register("video.set", () => {
      this.current = null, this.target = null, this.list = [];
    });
  }
  apply() {
    this.player.define("quality", { value: this });
  }
  /** 切换视频质量 */
  set(t) {
    let e;
    if (typeof t == "string") {
      const s = this.list.find((n) => e === n.quality);
      if (!s) {
        this._emitChangeFailed({});
        return;
      }
      e = s;
    } else
      e = t;
    e.change ? e.change(e.url).then(
      () => {
        this.updateCurrent(e);
      },
      () => {
        this._emitChangeFailed(e);
      }
    ) : e.url && (this.player.loadVideo({ url: e.url, type: e.type, play: !0, time: !0 }), this.player.once("canplay", () => {
      this.updateCurrent(e);
    }));
  }
  _emitChangeFailed(t) {
    this.target = null, this.player.emit("qualityChangeFailed", t);
  }
  /** 更新当前视频质量 */
  async updateCurrent(t) {
    this.current = t, this.target = null, this.player.emit("qualityChanged", t);
  }
  /** 更新视频质量列表 */
  async updateList(t) {
    this.list = t, this.player.emit("qualityListUpdate", t);
  }
};
Vs.pluginName = "quality";
let He = Vs;
const $a = (
  /*html*/
  `
  <div class="${a}-controls-button-icon">
    <div class="${a}-controls-button-text">自动</div>
  </div>
  <div class="${a}-controls-panel-wrap">
    <div class="${a}-controls-panel">
      <ul class="${a}-button-quality-list"></ul>
    </div>
  </div>
`
), Bs = class Bs extends F {
  constructor(t) {
    super(
      t,
      u(
        "div",
        { class: `${a}-controls-button ${a}-button-quality` },
        $a
      )
    ), this._itemMap = /* @__PURE__ */ new Map(), this.$icon = this.$(`.${a}-controls-button-icon`), this.$text = this.$(`.${a}-controls-button-text`), this.$panel = this.$(`.${a}-controls-panel`), this.$list = this.$(`.${a}-button-quality-list`);
  }
  init() {
    this.player.on("qualityListUpdate", (t) => {
      this._updateList(t);
    }), this.player.on("qualityChanging", (t) => {
      this._updateItem(t);
    }), this.player.on("qualityChanged", (t) => {
      this._updateItem(t);
    }), this.player.on("qualityChangeFailed", () => {
      this._updateItem(this.player.quality.current || {});
    });
  }
  _updateList(t) {
    this._itemMap = /* @__PURE__ */ new Map(), t.length ? (this.$panel.style.display = "", this.$icon.style.cursor = "") : (this.$panel.style.display = "none", this.$icon.style.cursor = "default"), this.$list.innerHTML = "";
    const e = new DocumentFragment();
    t == null || t.forEach((s) => {
      var r;
      const n = s.label || ((r = this.getLabel) == null ? void 0 : r.call(this, s)) || s.quality;
      if (n) {
        const l = u(
          "li",
          {
            class: `${a}-button-quality-item`,
            "data-value": s.quality || ""
          },
          typeof n == "string" ? new Text(n) : n
        );
        l.onclick = () => {
          var h;
          (h = this.player.quality) == null || h.set(s);
        }, this._itemMap.set(s, l), e.appendChild(l);
      }
    }), this.$list.appendChild(e);
  }
  _updateItem(t) {
    var s, n;
    const e = t.buttonLabel || ((s = this.getButtonLabel) == null ? void 0 : s.call(this, t)) || (typeof t.label == "object" ? t.label.cloneNode(!0) : t.label) || ((n = this.getLabel) == null ? void 0 : n.call(this, t)) || t.quality;
    e ? (this.show(), typeof e == "string" ? this.$text.innerText = e : (this.$text.innerHTML = "", this.$text.appendChild(e))) : this.hide(), this.$list.querySelectorAll("li").forEach((r) => {
      r.classList.toggle("is-checked", r == this._itemMap.get(t));
    });
  }
  get ignored() {
    return !this.player.quality;
  }
};
Bs.pluginName = "buttonQuality";
let _e = Bs;
const fa = (
  /*html*/
  `
  <div class="${a}-videostatus-paused"></div>
  <div class="${a}-videostatus-loading">
    <div class="${a}-videostatus-loading-icon">
      <span>L</span>
      <span>O</span>
      <span>A</span>
      <span>D</span>
      <span>I</span>
      <span>N</span>
      <span>G</span>
    </div>
    <div class="${a}-videostatus-loading-content">正在缓冲</div>
    <div class="${a}-videostatus-loading-speed"></div>
  </div>
  <div class="${a}-videostatus-volume"></div>
`
), qs = class qs extends yt {
  constructor(t) {
    super(t, u("div", { class: `${a}-videostatus` }, fa)), this.$paused = this.$(`.${a}-videostatus-paused`), this.$loading = this.$(`.${a}-videostatus-loading`), this.$volume = this.$(`.${a}-videostatus-volume`), this.player.$area.appendChild(this.$el), this.player.on("volumechange", (s, n) => {
      n && s > 0 ? this.$volume.innerText = "已静音" : this.$volume.innerText = `音量 | ${Math.round(s * 100)}%`;
    });
    const e = _t(() => this.hideVolume(), 3e3);
    this.player.on("hotkeyVolume", () => {
      this.showVolume(), e();
    });
  }
  ready(t) {
    this.$volume.innerText = t.muted ? "已静音" : `音量 | ${Math.round(t.volume * 100)}%`;
  }
  showVolume() {
    this.$volume.classList.add("is-show");
  }
  hideVolume() {
    this.$volume.classList.remove("is-show");
  }
};
qs.pluginName = "videoStatus";
let Me = qs;
const ya = (
  /*html*/
  `
  <div class="${a}-loadingmask-icon">
    <div class="${a}-loadingmask-image"></div>
  </div>
  <div class="${a}-loadingmask-info"></div>
  <div class="${a}-loadingmask-tips">Loading...</div>
`
), Cs = class Cs extends yt {
  constructor(t) {
    super(t, u("div", { class: `${a}-loadingmask` }, ya)), this.delay = 0, this.$info = this.$(`.${a}-loadingmask-info`), this.$tips = this.$(`.${a}-loadingmask-tips`), this.player.$main.appendChild(this.$el);
  }
  apply(t, e) {
    var s, n;
    this.getTips = (s = e.loadingMask) == null ? void 0 : s.getTips, this.delay = ((n = e.loadingMask) == null ? void 0 : n.delay) || 0;
  }
  init() {
    this._toggle(!0), this._add("init", "播放器初始化…"), this.player.on("danmaku:loading", () => {
      this._add("danmaku", "请求弹幕数据中…");
    }), this.player.on("danmaku:loaded", (t) => {
      this._change("danmaku", (e) => {
        e.innerText = "请求弹幕数据中… [完成]";
      });
    }), this.player.on("danmaku:loadFailed", (t) => {
      this._change("danmaku", (e) => {
        e.innerText = `请求弹幕数据中… [失败] ${t}`;
      });
    }), this.player.on("videoChange", async () => {
      var t;
      this._toggle(!0), this._tips(await ((t = this.getTips) == null ? void 0 : t.call(this)));
    }), this.player.on("videoLoad", () => {
      this._add("video", "请求视频数据中…"), this.player.once("canplay", () => {
        this._change("video", (t) => {
          t.innerText = "请求视频数据中… [完成]";
          let e = 0;
          const s = () => {
            this._toggle(!1), this._tips("Loading..."), this._clear(), window.clearTimeout(e);
          };
          this.delay ? e = window.setTimeout(s, this.delay) : s();
        });
      }), this.player.$video.addEventListener(
        "error",
        (t) => {
          this._change("video", (e) => {
            e.innerText = `请求视频数据中… [失败] ${t}`;
          });
        },
        { once: !0 }
      );
    }), this.player.on("error", (t) => {
      this._add("error", `${t}`);
    });
  }
  ready() {
    this._change("init", (t) => {
      t.innerText = "播放器初始化… [完成]";
    });
  }
  _clear() {
    this.$info.innerHTML = "";
  }
  _add(t, e) {
    const s = u("div", { class: `${a}-loadingmask-info-item` });
    s.dataset.id = t, s.append(e), this.$info.appendChild(s);
  }
  _change(t, e) {
    const s = this.$info.querySelector(`[data-id="${t}"]`);
    s && e(s);
  }
  _toggle(t) {
    this.$el.classList.toggle("is-show", t);
  }
  _tips(t) {
    this.$tips.innerHTML = "", t && this.$tips.append(t);
  }
};
Cs.pluginName = "loadingMask";
let Fe = Cs;
const js = class js extends F {
  get count() {
    var t;
    return ((t = this.player.plugins.danmakuEngine) == null ? void 0 : t.count) || 0;
  }
  constructor(t) {
    super(
      t,
      u(
        "div",
        { class: `${a}-danmakucount`, title: "已装填弹幕总数" },
        /*html*/
        `弹幕数 <span class="${a}-danmakucount-value">0</span>`
      )
    ), this.$value = this.$(`.${a}-danmakucount-value`);
  }
  init() {
    this.player.on("danmaku:clear", () => {
      this.updateCount(0);
    }), this.player.on("danmaku:add", () => {
      this.updateCount(this.count);
    }), this.player.on("danmaku:remove", () => {
      this.updateCount(this.count);
    });
  }
  updateCount(t) {
    this.$value.innerText = `${t}`, this.$el.title = `已装填弹幕总数：${t}`;
  }
};
js.pluginName = "danmakuCount";
let Ht = js;
const ba = (
  /*html*/
  `
  <div class="${a}-header-mask"></div>
  <div class="${a}-header-main mpui-crystal">
    <div class="${a}-header-left"></div>
    <div class="${a}-header-center"></div>
    <div class="${a}-header-right"></div>
  </div>
`
), Ws = class Ws extends f {
  constructor(t) {
    super(t), this.isHover = !1, this.controls = {}, this.player = t, this.$el = u("div", { class: `${a}-header` }, ba), this.$main = this.$el.querySelector(`.${a}-header-main`), this.$left = this.$el.querySelector(`.${a}-header-left`), this.$center = this.$el.querySelector(`.${a}-header-center`), this.$right = this.$el.querySelector(`.${a}-header-right`), this.player.$main.append(this.$el), this.inactiveHook = () => !this.isHover, this.mouseEnterHandler = () => {
      this.isHover = !0;
    }, this.mouseLeaveHandler = () => {
      this.isHover = !1;
    };
  }
  init() {
    this.player.hook.register("inactive", this.inactiveHook), this.$el.addEventListener("mouseenter", this.mouseEnterHandler), this.$el.addEventListener("mouseleave", this.mouseLeaveHandler);
  }
  apply(t, e) {
    var s;
    this.controls = ((s = e.header) == null ? void 0 : s.controls) || {};
  }
  ready() {
    this.setControls(this.controls);
  }
  /** 更新控制组件 */
  setControls(t) {
    this.controls = t;
    const { left: e, center: s, right: n } = t;
    this.build(this.$left, e), this.build(this.$center, s), this.build(this.$right, n);
  }
  build(t, e) {
    t.innerHTML = "";
    const s = new DocumentFragment();
    e == null || e.forEach((n) => {
      var l;
      const r = (l = this.player.plugin.from(n)) == null ? void 0 : l.$el;
      r && s.appendChild(r);
    }), t.appendChild(s);
  }
  destroy() {
    this.player.hook.unregister("inactive", this.inactiveHook), this.$el.removeEventListener("mouseenter", this.mouseEnterHandler), this.$el.removeEventListener("mouseleave", this.mouseLeaveHandler);
  }
};
Ws.pluginName = "header";
let Pe = Ws;
var q, nt, at;
const Us = class Us extends f {
  constructor(e) {
    var s;
    super(e);
    /** 播放器小窗显示状态 */
    R(this, q, !1);
    /** 播放器小窗拖动状态 */
    R(this, nt, !1);
    /** 播放器小窗启用状态 */
    R(this, at, !1);
    if (this.$el = u("div", { class: `${a}-mini` }), this.player.$el.appendChild(this.$el), this.player.on("intersection", (n) => {
      const r = !M(this, at) || this.player.isPip;
      n ? !r && this._hide() : !r && this._show(), console.log(n);
    }), e.plugins.buttonSettings) {
      const n = document.createElement("div");
      this.checkbox = new Q({
        container: n,
        value: this.enabled,
        onToggle: (r) => {
          this.toggle(r), this.player.emit("setValue", "mini", r);
        },
        label: "小窗模式"
      }), (s = e.plugins.settings) == null || s.$others.appendChild(n), e.on("miniChange", (r) => {
        var l;
        return (l = this.checkbox) == null ? void 0 : l.setValue(r);
      });
    }
  }
  apply(e, s) {
    s.mini && this.toggle(!0);
  }
  init() {
    this.$el.addEventListener("click", () => {
      !M(this, nt) && (this.player.paused ? this.player.play : this.player.pause());
    }), this.$el.addEventListener("mousedown", (e) => {
      const { clientX: s, clientY: n } = e, { offsetLeft: r, offsetTop: l } = this.$el;
      console.log([r, l]);
      const h = s - r, o = n - l, c = ($) => {
        E(this, nt, !0);
        const { clientX: b, clientY: S } = $;
        this.$el.style.left = `${b - h}px`, this.$el.style.top = `${S - o}px`;
      }, p = () => {
        this.$el.removeEventListener("mousemove", c), document.removeEventListener("mouseup", p), requestAnimationFrame(() => {
          E(this, nt, !1);
        });
      };
      this.$el.addEventListener("mousemove", c), document.addEventListener("mouseup", p);
    }), this.player.on("enterpictureinpicture", () => this._hide()), this.player.on("leavepictureinpicture", () => !this.player.isIntersecting && this._show());
  }
  ready() {
    this.enabled && this.toggle(!0);
  }
  _show() {
    M(this, q) || (this.player.$area.style.height = `${this.player.$area.clientHeight}px`, this.$el.append(...this.player.$area.children), this.$el.classList.add("is-show"), E(this, q, !0));
  }
  _hide() {
    M(this, q) && (this.player.$area.style.height = "", this.player.$area.append(...this.$el.children), this.$el.classList.remove("is-show"), E(this, q, !1));
  }
  /** 播放器小窗启用状态 */
  get enabled() {
    return M(this, at);
  }
  /** 播放器小窗显示状态 */
  get shown() {
    return M(this, q);
  }
  toggle(e) {
    if (e) {
      if (this.enabled)
        return;
      this.player.isIntersecting == !1 && this._show(), this.player.emit("miniChange", !0);
    } else {
      if (!this.enabled)
        return;
      this._hide(), this.player.emit("miniChange", !1);
    }
    E(this, at, e);
  }
};
q = new WeakMap(), nt = new WeakMap(), at = new WeakMap(), Us.pluginName = "mini";
let Re = Us;
const Xs = class Xs extends f {
  constructor(t) {
    var e;
    if (super(t), this.status = !1, this.$mask = u("div", { class: `${a}-lightoff-mask` }), t.plugins.buttonSettings) {
      const s = document.createElement("div");
      this.checkbox = new Q({
        container: s,
        value: this.status,
        onToggle: (n) => {
          this.toggle(n);
        },
        label: "关灯模式"
      }), (e = t.plugins.settings) == null || e.$others.appendChild(s), t.on("lightOffChange", (n) => {
        var r;
        return (r = this.checkbox) == null ? void 0 : r.setValue(n);
      });
    }
  }
  ready() {
    this.player.$el.append(this.$mask);
  }
  toggle(t) {
    t ? this.player.$el.classList.add("is-lightoff") : this.player.$el.classList.remove("is-lightoff"), this.player.emit("lightOffChange", t);
  }
};
Xs.pluginName = "lightOff";
let Ne = Xs;
const Ys = class Ys extends f {
  init() {
    this.player.define("isWebscreen", {
      get: () => this.status
    }), this.player.define("enterWebscreen", () => this.enter()), this.player.define("exitWebscreen", () => this.exit()), this.player.on("fullscreenEnter", () => {
      this.exit();
    }), this.player.on("webscreenEnter", () => {
      var t, e;
      (e = (t = this.player).exitFullscreen) == null || e.call(t);
    });
  }
  // --- 内置方法 --- //
  /** 进入网页全屏 */
  enter() {
    this.status || (this.player.$el.classList.add("is-webscreen"), this.player.emit("webscreenEnter"));
  }
  /** 退出网页全屏 */
  exit() {
    this.status && (this.player.$el.classList.remove("is-webscreen"), this.player.emit("webscreenExit"));
  }
  /** 当前状态 */
  get status() {
    return this.player.$el.classList.contains("is-webscreen");
  }
};
Ys.pluginName = "webscreen";
let De = Ys;
const Ks = class Ks extends f {
  constructor(t) {
    super(t), this.handler = {}, this._status = !0, this.$el = u("div", { class: `${a}-danmaku-wrap` }), this.player.$content.after(this.$el);
  }
  get status() {
    return this._status;
  }
  init() {
    this.player.define("danmaku", { value: this });
  }
  apply(t, e) {
    var s;
    this._status = !((s = e.danmaku) != null && s.hidden);
  }
  /**
   * 添加弹幕到弹幕池
   * @param dan 要添加的弹幕
   * @param play 是否播放超时弹幕
   * */
  add(t, e) {
    this.player.emit("danmaku:add", t, e || !1);
  }
  /**
   * 绘制一条弹幕
   * @param dm 要绘制的弹幕
   * */
  draw(t) {
    this.player.emit("danmaku:draw", t);
  }
  /**
   * 从弹幕池中移除弹幕
   * @param ids 要移除的弹幕id
   * */
  remove(t) {
    this.player.emit("danmaku:remove", t);
  }
  /** 清空弹幕池 */
  clear() {
    this.player.emit("danmaku:clear");
  }
  /** 切换弹幕显示 */
  toggle(t) {
    t ? (this._status = !0, this.player.emit("danmaku:on")) : t != null ? (this._status = !1, this.player.emit("danmaku:off")) : this.toggle(!this._status);
  }
  // 弹幕屏蔽
  /**
   * 弹幕类型屏蔽
   * @param type 类型
   * @param flag 设置是否屏蔽
   */
  blockType(t, e) {
    this.player.emit("danmaku:blockType", t, e);
  }
};
Ks.pluginName = "danmaku";
let Ie = Ks;
var Tt = /* @__PURE__ */ ((i) => (i[i.roll = 1] = "roll", i[i.bottom = 4] = "bottom", i[i.top = 5] = "top", i[i.reverse = 6] = "reverse", i[i.special = 7] = "special", i[i.advanced = 9] = "advanced", i))(Tt || {});
class ka {
  constructor(t, e) {
    this.paused = !1, this.hidden = !1, this.time = 0, this.list = [], this.currentIndex = 0, this.measureContext = null, this.startDistance = 2, this.timeOffset = 0, this.baseSpeed = 100, this.baseDuration = 5, this.deltaSpeed = 2e-3, this.trackHeights = {
      roll: [],
      reverse: [],
      top: [],
      bottom: []
    }, this.danmakuTracks = {
      roll: [],
      reverse: [],
      top: [],
      bottom: []
    }, this.container = t, this.fontScale = e.fontScale ?? 1, this.baseTrackHeight = 28, this.trackPadding = 6, this.speed = e.speed ?? 1, this.opacity = e.opacity ?? 1, this.limitArea = 1, this.overlap = !1, this.fontFamily = e.fontFamily ?? "SimHei", this.fontWeight = e.fontWeight ?? "bold", this.classPrefix = e.classPrefix ?? "meon", this.colorFilter = e.colorFilter || !1, this.trackFilter = Object.assign(
      {
        roll: !1,
        reverse: !1,
        top: !1,
        bottom: !1
      },
      e.trackFilter
    ), this.userFilter = e.userFilter || [], this.contentFilter = e.contentFilter || [], this.getTime = e.getTime, this.container.classList.add(`${this.classPrefix}-danmaku`), this.checkDanmaku();
  }
  /** 弹幕池弹幕总数 */
  get count() {
    return this.list.length;
  }
  /** 屏幕弹幕总数 */
  get screenCount() {
    let t = 0;
    for (const e in this.danmakuTracks)
      this.danmakuTracks[e].forEach((s) => {
        t += s.length;
      });
    return t;
  }
  play() {
    this.paused = !1, this.container.classList.remove("is-paused");
  }
  pause() {
    this.paused = !0, this.container.classList.add("is-paused");
  }
  /** 发生跳转 */
  seek() {
    this.clear(), this.time = this.getTime();
    const t = this.list.findIndex((e) => this.time <= e.time);
    this.currentIndex = t === -1 ? this.list.length : t;
  }
  /** 设置弹幕池 */
  setPool(t) {
    this.list = [...t], this.list.sort((s, n) => s.time - n.time);
    const e = this.list.findIndex((s) => this.time <= s.time);
    this.currentIndex = e === -1 ? this.list.length : e;
  }
  /** 重置弹幕池 */
  reset() {
    this.clear(), this.list = [], this.currentIndex = 0;
  }
  /** 弹幕池添加弹幕 */
  add(t, e) {
    t.forEach((s) => {
      const n = this.list.findIndex((r) => s.time <= r.time);
      this.list.splice(n === -1 ? this.list.length : n, 0, s), s.time < this.time && (this.currentIndex += 1, e && this.draw(t));
    });
  }
  /** 弹幕池移除弹幕 */
  remove(t) {
    const e = [
      ...this.container.querySelectorAll(`.${this.classPrefix}-danmaku-item`)
    ];
    t.forEach((s) => {
      const n = this.list.indexOf(s);
      if (n === -1)
        return;
      this.list.splice(n, 1), n < this.currentIndex && (this.currentIndex -= 1);
      const r = e.find((l) => l.dataset.id === s.id.toString());
      r && (r.innerHTML = "");
    });
  }
  /** 弹幕清屏 */
  clear(t) {
    if (t) {
      this.danmakuTracks[t] = [];
      return;
    }
    this.danmakuTracks = {
      roll: [],
      reverse: [],
      top: [],
      bottom: []
    }, this.trackHeights = {
      roll: [],
      reverse: [],
      top: [],
      bottom: []
    }, this.container.innerHTML = "";
  }
  /** 检查弹幕是否需要进入弹幕池 */
  checkDanmaku() {
    if (this.list.length && !this.paused && !this.hidden) {
      let t = this.list[this.currentIndex];
      const e = [];
      for (this.time = this.getTime(); t && t.time < this.time; )
        this.checkTrackFilter(t) && this.checkColorFilter(t) && this.checkUserFilter(t) && this.checkContentFilter(t) && e.push(t), this.currentIndex += 1, t = this.list[this.currentIndex];
      this.draw(e);
    }
    window.requestAnimationFrame(() => {
      this.checkDanmaku();
    });
  }
  /** 设置弹幕类型过滤 */
  setTrackFilter(t, e) {
    this.trackFilter[t] = e, e && this.container.querySelectorAll(`.${this.classPrefix}-danmaku-${t}`).forEach((s) => {
      s.innerHTML = "";
    });
  }
  /** 检查弹幕类型过滤 */
  checkTrackFilter(t) {
    return !this.trackFilter[Tt[t.mode]];
  }
  /** 设置弹幕颜色过滤 */
  setColorFilter(t) {
    this.colorFilter = t, t && this.container.querySelectorAll(
      `.${this.classPrefix}-danmaku-item`
    ).forEach((s) => {
      s.style.color !== "rgb(255, 255, 255)" && (s.innerHTML = "");
    });
  }
  /** 检查弹幕颜色过滤 */
  checkColorFilter(t) {
    return !this.colorFilter || t.color === 16777215;
  }
  /** 设置内容过滤 */
  setContentFilter(t, e) {
    const s = this.contentFilter.indexOf(t);
    if (e) {
      if (s > -1)
        return;
      this.contentFilter.push(t);
      const n = this.container.querySelectorAll(
        `.${this.classPrefix}-danmaku-item`
      );
      typeof t == "string" ? n.forEach((r) => {
        r.innerText.includes(t) && (r.innerHTML = "");
      }) : n.forEach((r) => {
        t.test(r.innerText) && (r.innerHTML = "");
      });
    } else
      s > -1 && this.contentFilter.splice(s, 1);
  }
  /** 检查弹幕内容过滤 */
  checkContentFilter(t) {
    for (const e of this.contentFilter)
      if (typeof e == "string") {
        if (t.content.search(e))
          return !1;
      } else if (e.test(t.content))
        return !1;
    return !0;
  }
  /** 设置用户过滤 */
  setUserFilter(t, e) {
    const s = this.userFilter.indexOf(t);
    if (e) {
      if (s > -1)
        return;
      this.userFilter.push(t), this.container.querySelectorAll(
        `.${this.classPrefix}-danmaku-item`
      ).forEach((r) => {
        r.dataset.user == t && (r.innerHTML = "");
      });
    } else
      s > -1 && this.userFilter.splice(s, 1);
  }
  /** 检查用户过滤 */
  checkUserFilter(t) {
    return this.userFilter.indexOf(t.user) == -1;
  }
  /** 绘制弹幕 */
  draw(t) {
    var b, S, T;
    const e = this.baseTrackHeight * this.fontScale, s = this.container.offsetWidth, n = this.container.offsetHeight * this.limitArea, r = Math.floor(n / e);
    this.trackHeights.roll.length !== r && (this.trackHeights.roll = new Array(r).fill(e)), this.trackHeights.reverse.length !== r && (this.trackHeights.reverse = new Array(r).fill(e)), this.trackHeights.top.length !== r && (this.trackHeights.top = new Array(r).fill(e)), this.trackHeights.bottom.length !== r && (this.trackHeights.bottom = new Array(r).fill(e));
    const l = (m) => {
      const v = this.container.getBoundingClientRect().right, d = m.getBoundingClientRect().right;
      return v - d;
    }, h = (m) => {
      const v = this.container.getBoundingClientRect().left;
      return m.getBoundingClientRect().left - v;
    }, o = (m) => this.baseSpeed * (1 + this.deltaSpeed * m) * this.speed, c = (m, v) => [
      ...this.container.querySelectorAll(`.${this.classPrefix}-danmaku-${m}`)
    ].filter((d) => d.dataset.track === `${v}`), p = (m, v, d) => {
      t:
        for (let g = 0; this.overlap || g < r; g++) {
          const L = c(v, g);
          let k = this.danmakuTracks[v][g];
          if (this.danmakuTracks[v][g] = L, k && k.length) {
            if (v === "roll") {
              const A = s / o(d);
              k.length !== L.length && (k = L);
              for (const w of k) {
                const x = l(w) - 10;
                if (this.trackHeights[v][g] = parseInt(w.style.fontSize) + this.trackPadding, x <= s - A * o(w.getBoundingClientRect().width) || x <= 0)
                  continue t;
              }
            } else if (v === "reverse") {
              const A = s / o(d);
              k.length !== L.length && (k = L);
              for (const w of k) {
                const x = h(w) - 10;
                if (this.trackHeights[v][g] = parseInt(w.style.fontSize) + this.trackPadding, x <= s - A * o(w.getBoundingClientRect().width) || x <= 0)
                  continue t;
              }
            } else
              continue t;
            return this.danmakuTracks[v][g].push(m), m.addEventListener("animationend", () => {
              var w, x;
              const A = (w = this.danmakuTracks[v][g]) == null ? void 0 : w.indexOf(m);
              A && ((x = this.danmakuTracks[v][g]) == null || x.splice(A, 1));
            }), g;
          } else
            return Array.isArray(this.danmakuTracks[v][g]) ? this.danmakuTracks[v][g].push(m) : this.danmakuTracks[v][g] = [m], m.addEventListener("animationend", () => {
              var w, x;
              const A = (w = this.danmakuTracks[v][g]) == null ? void 0 : w.indexOf(m);
              A && ((x = this.danmakuTracks[v][g]) == null || x.splice(A, 1));
            }), g;
        }
      return -1;
    }, $ = document.createDocumentFragment();
    for (let m = 0; m < t.length; m++) {
      const v = t[m];
      if (v.mode >= 7)
        continue;
      const d = document.createElement("div");
      d.classList.add(`${this.classPrefix}-danmaku-item`), d.classList.add(`${this.classPrefix}-danmaku-${Tt[v.mode]}`), d.innerHTML = `${v.content.replace(/(\\n)/g, `
`)}`, typeof v.color == "number" ? d.style.color = Pi(v.color) : d.style.color = v.color, d.style.opacity = this.opacity.toString(), d.style.fontSize = +v.size * this.fontScale + "px", v.fromHere && (d.style.border = "2px solid white"), d.addEventListener("animationend", () => {
        [...this.container.children].indexOf(d) > -1 && this.container.removeChild(d);
      });
      const g = this.measureTextWidth(
        v.content,
        `${this.fontWeight} ${+v.size * this.fontScale}px ${this.fontFamily}`
      );
      let L = Tt[v.mode], k, A;
      switch (L) {
        case "roll":
        case "reverse":
          if (A = p(d, L, g), k = A % r, k >= 0) {
            const w = this.trackHeights[L].slice(0, r).reduce((_, N) => _ + N, 0), x = this.trackHeights[L].slice(0, k).reduce((_, N) => _ + N, 0) % w;
            if (x + parseInt(d.style.fontSize) + this.trackPadding > n) {
              (b = this.danmakuTracks[L][m]) == null || b.pop();
              return;
            }
            const H = o(g), y = g + s + this.startDistance * 2;
            d.dataset.track = A.toString(), d.style.width = g + 1 + "px", d.style.top = x + "px", d.style.fontFamily = this.fontFamily, d.style.fontWeight = this.fontWeight, d.style.setProperty("--duration", `${y / H}s`), d.style.setProperty("--offset", `${s + this.startDistance}px`), d.style.setProperty("--translateX", `${-y}px`);
          }
          break;
        case "top":
          if (k = p(d, L, 0) % r, k >= 0) {
            const w = [], x = this.danmakuTracks.top;
            for (const y of x)
              w.push(...y);
            const H = w.map((y) => parseInt(y.style.fontSize) + this.trackPadding).slice(0, k).reduce((y, _) => y + _, 0);
            if (H + parseInt(d.style.fontSize) + this.trackPadding > n) {
              (S = this.danmakuTracks[L][m]) == null || S.pop();
              return;
            }
            d.dataset.track = k.toString(), d.style.width = g + 1 + "px", d.style.marginLeft = `-${(g + 1) * 0.5}px`, d.style.top = H + "px", d.style.fontFamily = this.fontFamily, d.style.fontWeight = this.fontWeight, d.style.setProperty("--duration", `${this.baseDuration / this.speed}s`);
          }
          break;
        case "bottom":
          if (L = "bottom", k = p(d, L, 0) % r, k >= 0) {
            const w = [], x = this.danmakuTracks.bottom;
            for (const y of x)
              w.push(...y);
            const H = w.map((y) => parseInt(y.style.fontSize) + this.trackPadding).slice(0, k).reduce((y, _) => y + _, 0);
            if (H + parseInt(d.style.fontSize) + this.trackPadding > n) {
              (T = this.danmakuTracks[L][m]) == null || T.pop();
              return;
            }
            d.dataset.track = k.toString(), d.style.width = g + 1 + "px", d.style.marginLeft = `-${(g + 1) * 0.5}px`, d.style.bottom = H + "px", d.style.fontFamily = this.fontFamily, d.style.fontWeight = this.fontWeight, d.style.setProperty("--duration", `${this.baseDuration / this.speed}s`);
          }
          break;
        default:
          k = -1, console.error(`无法处理的弹幕模式: ${v.mode}`);
      }
      k >= 0 && (d.dataset.id = v.id.toString(), d.dataset.user = v.user.toString(), this.container.appendChild(d));
    }
    return $;
  }
  /** 测量字体宽度 */
  measureTextWidth(t, e) {
    return this.measureContext || (this.measureContext = document.createElement("canvas").getContext("2d")), this.measureContext.font = e, this.measureContext.measureText(t).width;
  }
  /** 根据某一坐标捕获弹幕DOM */
  captureDanmakuDOM(t, e, s, n = !1) {
    const r = [], l = this.container.querySelectorAll(`.${this.classPrefix}-danmaku-item`);
    for (const h of l)
      if (h.innerHTML) {
        const o = h.getBoundingClientRect(), c = this.container.getBoundingClientRect(), p = o.left - c.left, $ = o.right - c.left, b = o.top - c.top, S = o.bottom - c.top;
        if (t >= p - s && t <= $ + s && e >= b - s && e <= S + s && (r.push(h), n))
          return r;
      }
    return r;
  }
  /** 根据某一坐标捕获弹幕 */
  captureDanmaku(t, e, s, n = !1) {
    const r = this.captureDanmakuDOM(t, e, s, n), l = [];
    for (const h of r) {
      const o = this.getDanmakuById(h.dataset.id);
      o && l.push(o);
    }
    return l;
  }
  /** 根据id获取弹幕 */
  getDanmakuById(t) {
    return this.list.find((e) => e.id.toString() === t.toString());
  }
  /** 显示弹幕 */
  show() {
    this.hidden = !1;
  }
  /** 隐藏弹幕 */
  hide() {
    this.hidden = !0, this.clear();
  }
}
const Gs = class Gs extends f {
  constructor(t) {
    super(t), this.$el = this.plugins.danmaku.$el.appendChild(
      u("div", { class: `${a}-rowdanmaku` })
    ), this.core = new ka(this.$el, {
      getTime: () => this.player.currentTime,
      classPrefix: a
    });
  }
  init() {
    this.player.on("play", () => {
      this.core.play();
    }), this.player.on("pause", () => {
      this.core.pause();
    }), this.player.on("seeking", () => {
      this.core.pause(), this.core.seek();
    }), this.player.on("seeked", () => {
      !this.player.paused && this.core.play();
    }), this.player.on("danmaku:blockType", (t, e) => {
      switch (t) {
        case "top":
        case "bottom":
        case "roll":
        case "reverse":
          this.core.setTrackFilter(t, e);
          return;
        case "color":
          this.core.setColorFilter(e);
      }
    }), this.player.on("danmaku:add", (t, e) => {
      this.core.add(t, e);
    }), this.player.on("danmaku:remove", (t) => {
      this.core.remove(t);
    }), this.player.on("danmaku:draw", (t) => {
      this.core.draw([t]);
    }), this.player.on("danmaku:blockUser", (t, e) => {
      this.core.setUserFilter(t, e);
    }), this.player.on("danmaku:blockContent", (t, e) => {
      this.core.setContentFilter(t, e);
    }), this.player.on("danmaku:clear", () => {
      this.core.clear();
    }), this.player.on("danmaku:on", () => {
      this.core.show();
    }), this.player.on("danmaku:off", () => {
      this.core.hide();
    });
  }
  apply(t, e) {
    if (e.danmaku) {
      const { scale: s, area: n, font: r, bold: l, speed: h, opacity: o, blockType: c } = e.danmaku;
      s && this.setScale(s), r && this.setFont(r), l != null && this.setBold(l), n != null && this.setArea(n), h && this.setSpeed(h), o && this.setOpacity(o), c == null || c.forEach((p) => this.player.emit("danmaku:blockType", p, !0));
    }
  }
  // 弹幕播放属性
  /** 弹幕不透明度 */
  get opacity() {
    return this.core.opacity;
  }
  /** 弹幕速度 */
  get speed() {
    return this.core.speed;
  }
  /** 弹幕区域 */
  get area() {
    return this.core.limitArea == 1 && this.core.overlap ? 1 / 0 : this.core.limitArea;
  }
  /** 设置弹幕大小 */
  get scale() {
    return this.core.fontScale;
  }
  /** 设置弹幕字体 */
  get font() {
    return this.core.fontFamily;
  }
  /** 弹幕加粗 */
  get bold() {
    return this.core.fontWeight == "bold";
  }
  /** 弹幕数 */
  get count() {
    return this.core.count;
  }
  /** 屏幕弹幕数 */
  get screenCount() {
    return this.core.screenCount;
  }
  /** 类型屏蔽列表 */
  getTypeBlockList() {
    const t = ["roll", "reverse", "top", "bottom"].filter(
      (e) => this.core.trackFilter[e]
    );
    return this.core.colorFilter && t.push("color"), t;
  }
  // 弹幕播放属性设置
  /** 设置弹幕不透明度 */
  setOpacity(t) {
    this.core.opacity = t, this.player.emit("danmaku:opacityChange", t);
  }
  /** 设置弹幕速度 */
  setSpeed(t) {
    this.core.speed = t, this.player.emit("danmaku:speedChange", t);
  }
  /** 设置弹幕区域 */
  setArea(t) {
    //因为不知道为什么会重置为0.25,所以就直接赋值诬陷
    //t > 1 ? (this.core.limitArea = 1, this.core.overlap = !0) : (this.core.limitArea = t, this.core.overlap = !1), this.player.emit("danmaku:areaChange", t);
    if (t === 0.25) {
      this.core.limitArea = 1;
      this.core.overlap = true;
    } else if (t > 1) {
      this.core.limitArea = 1;
      this.core.overlap = true;
    } else {
      this.core.limitArea = t;
      this.core.overlap = false;
    }
  }
  /** 设置弹幕大小 */
  setScale(t) {
    this.core.fontScale = t, this.player.emit("danmaku:scaleChange", t);
  }
  /** 设置弹幕字体 */
  setFont(t) {
    this.core.fontFamily = t, this.player.emit("danmaku:fontChange", t);
  }
  /** 设置弹幕加粗 */
  setBold(t) {
    this.core.fontWeight = t ? "bold" : "", this.player.emit("danmaku:boldChange", t);
  }
  /** 根据坐标捕获弹幕 */
  capture(t, e, s) {
    return this.core.captureDanmaku(t, e, s);
  }
};
Gs.pluginName = "danmakuEngine";
let ze = Gs, Ti = 1e3;
const Ai = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
function wa() {
  const i = [], t = Ai.length;
  for (let e = 0; e < 8; e++)
    i.push(Ai[Math.floor(Math.random() * t)]);
  return Ti++, i.join("") + `${Ti}`;
}
const Zs = class Zs extends f {
  constructor() {
    super(...arguments), this.type = "", this.parser = xa;
  }
  get danmaku() {
    return this.player.danmaku;
  }
  get invokes() {
    return this.player.invokes;
  }
  init() {
    this.player.on("videoChange", (t) => {
      this.reload(t);
    });
  }
  apply(t, e) {
    var s;
    this.type = ((s = e.danmaku) == null ? void 0 : s.type) || "", this.parser = Object.assign(this.parser, e.danmakuParser);
  }
  /** 从响应中获取数据 */
  async getResponseData(t, e) {
    return e == "json" ? await t.json() : e == "xml" ? new DOMParser().parseFromString(await t.text(), "text/xml") : await t.text();
  }
  parse(t, e) {
    if (e) {
      const s = this.parser[e];
      if (!s)
        throw "未知弹幕格式";
      try {
        return s.parse(t);
      } catch (n) {
        throw n || "无法正确解析弹幕格式";
      }
    } else
      return t;
  }
  /** 加载附加弹幕文件 */
  loadSource({ url: t, type: e }) {
    fetch(t).then((s) => this.getResponseData(s, this.parser[e].type)).then((s) => this.parse(s, e)).then((s) => {
      s && this.add(s), this.player.emit("danmaku:loaded", s, { url: t });
    }).catch((s) => {
      this.player.emit("danmaku:loadFailed", s, { url: t }), console.error(s);
    });
  }
  /** 加载弹幕 */
  load(t) {
    var e, s;
    console.log("this.invokes"), console.log(this.invokes), (s = (e = this.invokes).danmakuGet) == null || s.call(e, t).then((n) => this.parse(n, this.type)).then((n) => {
      n && this.add(n), this.player.emit("danmaku:loaded", n, t);
    }).catch((n) => {
      this.player.throw(new Error(n)), this.player.emit("danmaku:loadFailed", n, t);
    });
  }
  add(t) {
    this.danmaku.add(t);
  }
  /** 重载弹幕 */
  async reload(t) {
    var e;
    this.danmaku.clear(), this.player.emit("danmaku:loading"), this.load(t), (e = t.danmaku) == null || e.forEach((s) => {
      this.loadSource(s);
    });
  }
};
Zs.pluginName = "danmakuLoader";
let Oe = Zs;
const xa = {
  "bilibili-xml": {
    type: "xml",
    parse: (i) => {
      console.log(i);
      const t = [], e = i.childNodes, s = (n) => {
        var r;
        for (let l = 0; l < n.length; l++) {
          const h = n[l];
          if ((r = h == null ? void 0 : h.attributes) != null && r.length && l > 0) {
            const o = h.attributes[0].nodeValue.split(","), c = h.innerHTML;
            t.push([c, o]);
          } else
            h.childNodes.length > 0 && s(h.childNodes);
        }
      };
      return s(e), t.map(([n, r]) => ({
        time: +r[0],
        mode: +r[1],
        color: +r[3],
        user: r[6],
        content: n,
        size: +r[2] || 25,
        date: +r[4] || 0,
        id: +r[7]
      }));
    }
  },
  dplayer: {
    type: "json",
    parse: (i) => i.map((t, e) => ({
      time: t[0],
      mode: [1, 5, 4, 6][t[1]],
      color: t[2],
      user: t[3],
      content: t[4],
      size: 25,
      date: 0,
      id: wa()
    }))
  },
  mfuns: {
    type: "json",
    parse: (i) => i.map((t) => ({
      time: t[0],
      mode: t[1],
      color: t[2],
      user: t[3],
      content: t[4],
      size: t[5],
      date: t[6] > 1 ? t[6] : 0,
      id: t[7]
    }))
  }
}, Js = class Js extends f {
  get danmaku() {
    return this.player.danmaku;
  }
  get invokes() {
    return this.player.invokes || {};
  }
  /**
   * 发送弹幕
   * @param danmaku 要发送的弹幕
   * @return 操作结果
   * */
  async send(t) {
    if (!this.invokes.danmakuSend)
      throw "发送失败";
    return await this.invokes.danmakuSend(t, this.player.getVideoInfo()).then((e) => {
      const s = Object.assign(
        {
          id: `send:${Date.now()}`,
          date: Math.floor(Date.now() / 1e3),
          user: this.player.userId || 0,
          fromHere: !0
        },
        e || t
      );
      return this.danmaku.add([s], !0), s;
    }).catch((e) => {
      throw e;
    });
  }
  /**
   * 举报弹幕
   * @param danmaku 要举报的弹幕
   * @return 操作结果
   * */
  async report(t) {
    if (!this.invokes.danmakuReport)
      throw "操作失败";
    return await this.invokes.danmakuReport(t, this.player.getVideoInfo()).then((e) => (this.danmaku.remove([t]), e)).catch((e) => {
      throw e;
    });
  }
  /**
   * 删除弹幕
   * @param danmaku 要删除的弹幕
   * @return 操作结果
   * */
  async delete(t) {
    if (!this.invokes.danmakuDelete)
      throw "操作失败";
    return await this.invokes.danmakuDelete(t, this.player.getVideoInfo()).then((e) => (this.danmaku.remove(t), e)).catch((e) => {
      throw e;
    });
  }
  /**
   * 删除自己发送的弹幕
   * @param danmaku 要删除的弹幕
   * @return 操作结果
   * */
  async recall(t) {
    if (!this.invokes.danmakuRecall)
      throw "操作失败";
    return await this.invokes.danmakuRecall(t, this.player.getVideoInfo()).then((e) => (this.danmaku.remove([t]), e)).catch((e) => {
      throw e;
    });
  }
  /**
   * 屏蔽用户
   * @param user 用户id
   * @param flag 设置屏蔽状态
   * @return 操作结果
   * */
  async blockUser(t, e) {
    if (!this.invokes.danmakuBlockUser)
      throw "操作失败";
    return await this.invokes.danmakuBlockUser(t, e).then(() => {
      this.player.emit("danmaku:blockUser", t, e);
    }).catch((s) => {
      throw s;
    });
  }
  /**
   * 屏蔽关键词
   * @param content 关键词内容
   * @param flag 设置屏蔽状态
   * @return 操作结果
   * */
  async blockContent(t, e) {
    if (!this.invokes.danmakuBlockContent)
      throw "操作失败";
    return await this.invokes.danmakuBlockContent(t, e).then((s) => {
      this.player.emit("danmaku:blockContent", t, e);
    }).catch((s) => {
      throw s;
    });
  }
};
Js.pluginName = "danmakuOperate";
let Ve = Js;
const La = (
  /*html*/
  `
  <div class="${a}-controls-button-icon">
    <i class="mpicon-danmaku-off"></i>
    <i class="mpicon-danmaku"></i>
  </div>
  <div class="mpui-tooltip">关闭弹幕</div>
`
), Qs = class Qs extends F {
  constructor(t) {
    super(
      t,
      u(
        "div",
        { class: `${a}-controls-button ${a}-button-danmakutoggle is-on` },
        La
      )
    ), this.$icon = this.$(`.${a}-controls-button-icon`), this.$tooltip = this.$(".mpui-tooltip");
  }
  init() {
    this.player.on("danmaku:on", () => {
      this._change(!0);
    }), this.player.on("danmaku:off", () => {
      this._change(!1);
    }), this.$icon.addEventListener("click", () => {
      this.plugins.danmaku && (this.plugins.danmaku.toggle(), this.player.emit("setValue", "danmaku:hidden", !this.plugins.danmaku.status));
    });
  }
  /** 设置按钮状态 */
  _change(t) {
    this.$el.classList.toggle("is-on", t), this.$tooltip.innerText = t ? "关闭弹幕" : "开启弹幕";
  }
};
Qs.pluginName = "buttonDanmakuToggle";
let Be = Qs;
const Ea = (
  /*html*/
  `
  <div class="${a}-danmakubar-outer"></div>
  <div class="${a}-danmakubar-input-wrap">
    <div class="${a}-danmakubar-left"></div>
    <input type="text" autocompleted="new-password" class="${a}-danmakubar-input" />
    <div class="${a}-danmakubar-status-loading">弹幕功能加载中...</div>
    <div class="${a}-danmakubar-status-login">需要<a>登录</a>后才能发送弹幕哦~</div>
    <div class="${a}-danmakubar-right"></div>
    <div class="${a}-danmakubar-send">发送</div>
  </div>
`
);
var C;
const ti = class ti extends F {
  constructor(e) {
    super(e, u("div", { class: `${a}-danmakubar` }, Ea));
    R(this, C, void 0);
    this.danmakuColor = 16777215, this.danmakuMode = 1, this.danmakuSize = 25, E(this, C, !1), this.coolDownTimer = 0, this.controls = {}, this.controller = this.plugins.controller, this.danmaku = this.plugins.danmaku, this.$send = this.$el.querySelector(`.${a}-danmakubar-send`), this.$input = this.$el.querySelector(`.${a}-danmakubar-input`), this.$outer = this.$el.querySelector(`.${a}-danmakubar-outer`), this.$left = this.$el.querySelector(`.${a}-danmakubar-left`), this.$right = this.$el.querySelector(`.${a}-danmakubar-right`), this.$logina = this.$el.querySelector(`.${a}-danmakubar-status-login a`), this.$logina.onclick = () => {
      var s, n;
      return (n = (s = this.player).login) == null ? void 0 : n.call(s);
    }, this.player.on("videoChange", () => {
      this.setLoadingStatus(!0);
    }), this.player.on("loadeddata", () => {
      this.setLoadingStatus(!1);
    }), this.player.on("login", (s) => {
      M(this, C) && this.setLoginStatus(!s);
    }), this.$input.addEventListener("keydown", (s) => {
      s.keyCode == W.Enter && this.send();
    }), this.$send.onclick = () => {
      this.send();
    };
  }
  get loginRequired() {
    return M(this, C);
  }
  get loginStatus() {
    return this.$el.classList.contains("is-login");
  }
  apply(e, s) {
    var n, r, l;
    (n = s.danmakuBar) != null && n.loginRequired && E(this, C, !0), this.setPlaceHolder(((r = s.danmakuBar) == null ? void 0 : r.placeholder) || Sa), this.controls = ((l = s.danmakuBar) == null ? void 0 : l.controls) || {};
  }
  ready() {
    M(this, C) && !this.player.userId && this.setLoginStatus(!0), this.setControls(this.controls);
  }
  /** 更新控制组件 */
  setControls(e) {
    this.controls = e;
    const { outer: s, left: n, right: r } = e;
    this.build(this.$outer, s), this.build(this.$left, n), this.build(this.$right, r);
  }
  setPlaceHolder(e) {
    this.$input.placeholder = e;
  }
  build(e, s) {
    e.innerHTML = "";
    const n = new DocumentFragment();
    s == null || s.forEach((r) => {
      var h;
      const l = (h = this.player.plugin.from(r)) == null ? void 0 : h.$el;
      l && n.appendChild(l);
    }), e.appendChild(n);
  }
  /** 执行弹幕发送操作 */
  send() {
    var e;
    !this.$input.value.trim() || this.coolDownTimer || ((e = this.plugins.danmakuOperate) == null || e.send(this.generateDanmaku()), this.$input.value = "");
  }
  /** 设置弹幕发送冷却 */
  setCoolDown(e) {
    this.coolDownTimer && window.clearInterval(this.coolDownTimer);
    let s = Math.round(e);
    this.$send.classList.add("is-disabled"), this.$send.innerText = `${s}秒`, this.coolDownTimer = window.setInterval(() => {
      s -= 1, s ? this.$send.innerText = `${s}秒` : (this.$send.innerText = "发送", this.$send.classList.remove("is-disabled"), window.clearInterval(this.coolDownTimer), this.coolDownTimer = 0);
    }, 1e3);
  }
  generateDanmaku() {
    return {
      time: this.player.currentTime,
      content: this.$input.value,
      mode: this.danmakuMode,
      color: this.danmakuColor,
      size: this.danmakuSize
    };
  }
  /** 设置登录状态 */
  setLoginStatus(e) {
    e ? this.$el.classList.add("is-login") : this.$el.classList.remove("is-login");
  }
  /** 设置加载状态 */
  setLoadingStatus(e) {
    e ? this.$el.classList.add("is-loading") : this.$el.classList.remove("is-loading");
  }
};
C = new WeakMap(), ti.pluginName = "danmakuBar";
let qe = ti;
const Sa = "发条弹幕吧~", Ta = (
  /*html*/
  `
  <div class="${a}-controls-button-icon">
    <i class="mpicon-danmaku-settings"></i>
  </div>
  <div class="${a}-controls-panel-wrap">
    <div class="${a}-controls-panel ${a}-controls-panel-danmaku-settings">
      <div class="${a}-panel-row">
        <div class="${a}-row-label">类型屏蔽</div>
        <div class="${a}-danmaku-settings-filter-picker"></div>
      </div>
      <div class="${a}-panel-row">
        <div class="${a}-row-label">不透明度</div>
        <div
          class="${a}-danmaku-settings-opacity-slider ${a}-slider-wrap"
        ></div>
        <div class="${a}-danmaku-settings-opacity-value ${a}-row-value"></div>
      </div>
      <div class="${a}-panel-row">
        <div class="${a}-row-label">显示区域</div>
        <div class="${a}-danmaku-settings-area-slider ${a}-slider-wrap"></div>
        <div class="${a}-danmaku-settings-area-value ${a}-row-value"></div>
      </div>
      <div class="${a}-panel-row">
        <div class="${a}-row-label">文字大小</div>
        <div class="${a}-danmaku-settings-size-slider ${a}-slider-wrap"></div>
        <div class="${a}-danmaku-settings-size-value ${a}-row-value"></div>
      </div>
      <div class="${a}-panel-row">
        <div class="${a}-row-label">弹幕速度</div>
        <div
          class="${a}-danmaku-settings-speed-slider  ${a}-slider-wrap"
        ></div>
        <div class="${a}-danmaku-settings-speed-value ${a}-row-value"></div>
      </div>
    </div>
  </div>
`
), ei = class ei extends F {
  get danmaku() {
    return this.plugins.danmaku;
  }
  get danmakuEngine() {
    return this.plugins.danmakuEngine;
  }
  constructor(t) {
    super(
      t,
      u(
        "div",
        { class: `${a}-controls-button ${a}-button-danmakusettings` },
        Ta
      )
    ), this.$icon = this.$(`.${a}-controls-button-icon`), this.$filterPicker = this.$(`.${a}-danmaku-settings-filter-picker`), this.$opacitySlider = this.$(`.${a}-danmaku-settings-opacity-slider`), this.$areaSlider = this.$(`.${a}-danmaku-settings-area-slider`), this.$sizeSlider = this.$(`.${a}-danmaku-settings-size-slider`), this.$speedSlider = this.$(`.${a}-danmaku-settings-speed-slider`), this.$opacityValue = this.$(`.${a}-danmaku-settings-opacity-value`), this.$areaValue = this.$(`.${a}-danmaku-settings-area-value`), this.$sizeValue = this.$(`.${a}-danmaku-settings-size-value`), this.$speedValue = this.$(`.${a}-danmaku-settings-speed-value`);
  }
  init() {
    var t, e, s, n, r, l, h;
    this.pickerFilter = new Bi({
      container: this.$filterPicker,
      value: ((t = this.danmakuEngine) == null ? void 0 : t.getTypeBlockList()) || [],
      list: [
        { value: "roll", label: "滚动" },
        { value: "top", label: "顶部" },
        { value: "bottom", label: "底部" },
        { value: "color", label: "彩色" },
        { value: "special", label: "特殊" }
      ],
      onToggle: (o, c) => {
        this.danmaku.blockType(o, c), this.player.emit("setValue", "danmaku:blockType", this.pickerFilter.value);
      }
    }), this.sliderOpacity = new ct({
      container: this.$opacitySlider,
      min: 10,
      max: 100,
      step: 1,
      value: ((e = this.danmakuEngine) == null ? void 0 : e.opacity) * 100 || 100,
      onDrag: (o) => {
        this.danmakuEngine.setOpacity(o / 100), this.player.emit("setValue", "danmaku:opacity", o / 100);
      },
      onChange: (o) => {
        this.$opacityValue.innerText = `${o}%`;
      }
    }), this.sliderArea = new ct({
      container: this.$areaSlider,
      min: 20,
      max: 105,
      step: 5,
      value: ((s = this.danmakuEngine) == null ? void 0 : s.area) == null ? ((n = this.danmakuEngine) == null ? void 0 : n.area) > 1 ? 105 : ((r = this.danmakuEngine) == null ? void 0 : r.area) * 100 : 25,
      onDrag: (o) => {
        const c = o > 100 ? 20 : o / 100;
        this.danmakuEngine.setArea(c), this.player.emit("setValue", "danmaku:area", c);
      },
      onChange: (o) => {
        this.$areaValue.innerText = o < 100 ? `${o}%` : o == 100 ? "不重叠" : "无限";
      }
    }), this.sliderArea.drag(25), this.sliderSize = new ct({
      container: this.$sizeSlider,
      min: 50,
      max: 200,
      step: 1,
      value: ((l = this.danmakuEngine) == null ? void 0 : l.scale) * 100 || 100,
      onDrag: (o) => {
        this.danmakuEngine.setScale(o / 100), this.player.emit("setValue", "danmaku:scale", o / 100);
      },
      onChange: (o) => {
        this.$sizeValue.innerText = `${o}%`;
      }
    }), this.sliderSpeed = new ct({
      container: this.$speedSlider,
      min: 20,
      max: 180,
      step: 10,
      value: ((h = this.danmakuEngine) == null ? void 0 : h.speed) * 100 || 100,
      divider: 5,
      onDrag: (o) => {
        this.danmakuEngine.setSpeed(o / 100), this.player.emit("setValue", "danmaku:speed", o / 100);
      },
      onChange: (o) => {
        this.$speedValue.innerText = `${o}%`;
      }
    });
  }
};
ei.pluginName = "buttonDanmakuSettings";
let Ce = ei;
const Aa = (i, t, e, s) => O`
  ${i.map(
  (n) => O`
      <li
        class="${a}-contextmenu-danmaku-item"
        @click=${() => {
    e(n);
  }}
      >
        <div class="${a}-contextmenu-danmaku-item-content">${n.content}</div>
        <div class="${a}-contextmenu-danmaku-item-operate">
          ${t(n).map(
    ([r, l]) => O`<div
                class="${a}-contextmenu-danmaku-item-operate-btn"
                @click=${(h) => {
      h.stopPropagation(), l(n), s();
    }}
              >
                ${r}
              </div>`
  )}
        </div>
      </li>
    `
)}
`, Ha = (i) => navigator.clipboard.writeText(i), si = class si extends f {
  constructor(t) {
    super(t), this.$el = u("ul", { class: `${a}-contextmenu-danmaku mpui-black` });
  }
  init() {
    this.player.on("contextMenuShow", (t, e) => {
      var n;
      const s = (n = this.plugins.danmakuEngine) == null ? void 0 : n.capture(t, e, 4);
      this.update(s || []);
    });
  }
  ready() {
    var t;
    (t = this.plugins.contextMenu) == null || t.$list.before(this.$el);
  }
  update(t) {
    const e = this.player.invokes, s = this.plugins.danmakuOperate;
    t != null && t.length ? this.$el.style.display = "" : this.$el.style.display = "none", Ft(
      Aa(
        t,
        (n) => {
          const r = this.player.userId && n.user == this.player.userId;
          return [
            [
              "举报",
              (l) => {
                s == null || s.report(l);
              },
              !r && (e == null ? void 0 : e.danmakuReport)
            ],
            [
              "屏蔽",
              (l) => {
                s == null || s.blockUser(l.user, !0);
              },
              !r && (e == null ? void 0 : e.danmakuBlockUser)
            ],
            [
              "撤回",
              (l) => {
                s == null || s.recall(l);
              },
              r && (e == null ? void 0 : e.danmakuRecall)
            ],
            [
              "复制",
              (l) => {
                Ha(l.content);
              },
              !0
            ]
          ].filter((l) => l[2]);
        },
        (n) => {
          this.player.emit("danmaku:select", n);
        },
        () => {
          var n;
          (n = this.plugins.contextMenu) == null || n.hide();
        }
      ),
      this.$el
    );
  }
};
si.pluginName = "danmakuMenu";
let je = si;
const _a = (
  /*html*/
  `
  <div class="${a}-controls-button-icon">
    <i class="mpicon-text"></i>
  </div>
  <div class="${a}-controls-panel-wrap">
    <div class="${a}-controls-panel ${a}-controls-panel-danmaku-style">
      <div class="${a}-panel-row">
        <div class="${a}-row-label">字号</div>
        <div class="${a}-danmaku-style-fontsize-picker"></div>
      </div>
      <div class="${a}-panel-row">
        <div class="${a}-row-label">模式</div>
        <div class="${a}-danmaku-style-mode-picker"></div>
      </div>
      <div class="${a}-panel-row">
        <div class="${a}-row-label">颜色</div>
        <input
          class="${a}-danmaku-style-color-input mpui-input"
          type="text"
          value="#"
        />
        <div class="${a}-danmaku-style-color-preview"></div>
        ${window.EyeDropper ? (
    /*html*/
    `<button class="${a}-danmaku-style-color-dropper mpui-button">
              拾取
            </button>`
  ) : ""}
      </div>
      <div class="${a}-danmaku-style-color-picker"></div>
    </div>
  </div>
`
), ii = class ii extends F {
  constructor(t) {
    super(
      t,
      u(
        "div",
        { class: `${a}-controls-button ${a}-button-danmakustyle` },
        _a
      )
    ), this.colorList = [], this.sizeList = [], this.modeList = [], this.$icon = this.$(`.${a}-controls-button-icon`), this.$tooltip = this.$(".mpui-tooltip"), this.$sizePicker = this.$(`.${a}-danmaku-style-fontsize-picker`), this.$modePicker = this.$(`.${a}-danmaku-style-mode-picker`), this.$colorPicker = this.$(`.${a}-danmaku-style-color-picker`), this.$colorInput = this.$(`.${a}-danmaku-style-color-input`), this.$colorPreview = this.$(`.${a}-danmaku-style-color-preview`), this.$colorDropper = this.$(`.${a}-danmaku-style-color-dropper`);
  }
  get danmakuBar() {
    return this.player.plugins.danmakuBar;
  }
  apply(t, e) {
    if (e.danmakuStyle) {
      const { sizeList: s, colorList: n, modeList: r, defaultSize: l, defaultColor: h, defaultMode: o } = e.danmakuStyle;
      s && (this.pickerSize.list = s.map(([c, p]) => ({ value: c, label: p })), this.pickerSize.reload(l)), n && (this.pickerSize.list = n.map((c) => ({ value: c })), this.pickerSize.reload(h)), r && (this.pickerMode.list = [
        { value: 1, label: "滚动" },
        { value: 5, label: "顶部" },
        { value: 4, label: "底部" },
        { value: 6, label: "逆向" }
      ].filter((c) => r.indexOf(c.value) > -1), this.pickerMode.reload(o));
    }
  }
  init(t) {
    this.pickerSize = new tt({
      container: this.$sizePicker,
      value: 25,
      list: Ma.map(([e, s]) => ({
        value: e,
        label: s
      })),
      onPick: (e) => {
        this.danmakuBar.danmakuSize = Number(e);
      }
    }), this.pickerMode = new tt({
      container: this.$modePicker,
      value: 1,
      list: [
        { value: 1, label: "滚动" },
        { value: 5, label: "顶部" },
        { value: 4, label: "底部" },
        { value: 6, label: "逆向" }
      ].filter((e) => Fa.indexOf(e.value) > -1),
      onChange: (e) => {
        this.danmakuBar.danmakuMode = Number(e) || 1;
      }
    }), this.pickerColor = new tt({
      container: this.$colorPicker,
      value: "#FFFFFF",
      list: Pa.map((e) => ({ value: e })),
      onPick: (e) => {
        this.danmakuBar.danmakuColor = Fi(e);
      },
      onChange: (e) => {
        this.$colorInput.value = e, this.$colorPreview.style.backgroundColor = e;
      },
      template: (e) => O` <div style="background-color: ${e.value}"></div> `,
      condition: (e, s) => e.toLowerCase() == s.toLowerCase()
    }), this.$colorInput.addEventListener("input", () => {
      const e = this.$colorInput.value;
      this.$colorInput.value = "#" + e.replace(/[^0-9A-Fa-f]/g, "").slice(0, 6), /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/.test(e) && this.pickerColor.pick(e);
    }), this.$colorDropper && (this.$colorDropper.onclick = () => {
      window.EyeDropper && new window.EyeDropper().open().then(({ sRGBHex: s }) => {
        this.pickerColor.pick(s);
      });
    });
  }
};
ii.pluginName = "buttonDanmakuStyle";
let We = ii;
const Ma = [
  [18, "小"],
  [25, "中"],
  [36, "大"]
], Fa = [1, 5, 4], Pa = [
  "#FE0302",
  "#FFFF00",
  "#00CD00",
  "#00FF00",
  "#4E6EF2",
  "#89D5FF",
  "#7B7FF7",
  "#757575",
  "#FFFFFF",
  "#FB7229"
], Ra = [
  Ie,
  ze,
  Oe,
  Ve,
  qe,
  je
], Na = [
  Be,
  Ce,
  We,
  Ht
], Da = [...Ra, ...Na];
class Ia extends f {
  init() {
    this.player.on("videoChange", (t) => {
      var e;
      t.qualities && (this.compare && t.qualities.sort((s, n) => this.compare(s, n)), (e = this.player.quality) == null || e.updateList(t.qualities));
    }), this.player.hook.register("video.beforeLoad", (t) => {
      var n;
      const e = this.player.getVideoInfo().qualities;
      let s = {};
      e && (t.url ? s = e.find((r) => r.url == t.url) || { url: t.url, type: t.type } : (s = e.find((r) => r.isDefault) || (this.prior ? this.prior(e) : e[0]), t.url = s.url, t.type = s.type)), (n = this.player.quality) == null || n.updateCurrent(s);
    });
  }
}
const ni = class ni extends f {
  constructor(t) {
    super(t);
  }
  apply(t, e) {
    var s;
    this._getHlsjs = (s = e.externals) == null ? void 0 : s.hlsjs, this.player.loader.register("hls", this);
  }
  check(t) {
    return t.type == "hls" || t.type == "m3u8";
  }
  create(t, e) {
    const { type: s, url: n, live: r, play: l, time: h } = t, o = {
      kernel: null,
      type: s || "",
      url: n,
      live: r || !1,
      mediaElement: e,
      destroy() {
        var c;
        (c = this.kernel) == null || c.destroy(), this.kernel = null;
      }
    };
    return this.initHls().then(() => {
      const c = new this.Hls();
      o.kernel = c;
      const p = h === !0 ? this.player.currentTime : h;
      return c.attachMedia(e), c.on(this.Hls.Events.MEDIA_ATTACHED, () => {
        c.loadSource(n);
      }), this.player.once("loadedmetadata", () => {
        p && this.player.seek(p), l && this.player.play();
      }), !0;
    }), o;
  }
  /** 初始化hls.js */
  async initHls() {
    var t;
    if (this._supported != !0) {
      if (this._supported == !1)
        throw new Error("播放器不支持hls加载");
      if (this.Hls ?? (this.Hls = window.Hls), !this.Hls) {
        if (!this._getHlsjs)
          this.throw(new Error("hls.js初始化失败: 播放器未引入hls.js"));
        else if (this.Hls = await this._getHlsjs().catch((e) => {
          this.throw(new Error(`hls.js初始化失败: ${e}`));
        }) || void 0, this._supported = ((t = this.Hls) == null ? void 0 : t.isSupported()) || !1, this._supported == !1)
          throw new Error("播放器不支持hls加载");
      }
    }
  }
};
ni.pluginName = "hlsLoader";
let Ue = ni;
const ai = class ai extends f {
  constructor(t) {
    super(t);
  }
  apply(t, e) {
    var s;
    this._getDashjs = (s = e.externals) == null ? void 0 : s.dashjs, this.player.loader.register("dash", this);
  }
  check(t) {
    return t.type == "dash" || t.type == "m3u8";
  }
  create(t, e) {
    const { type: s, url: n, live: r, play: l, time: h } = t, o = {
      kernel: null,
      type: s || "",
      url: n,
      live: r || !1,
      mediaElement: e,
      destroy() {
        var c;
        (c = this.kernel) == null || c.destroy(), this.kernel = null;
      }
    };
    return this.initDash().then(() => {
      const c = this.dashjs.MediaPlayer().create();
      o.kernel = c;
      const p = h === !0 ? this.player.currentTime : h === !1 ? 0 : h;
      c.initialize(e, n, l, p);
    }), o;
  }
  /** 初始化dash.js */
  async initDash() {
    var t;
    if (this._supported != !0) {
      if (this._supported == !1)
        throw new Error("播放器不支持dash加载");
      if (this.dashjs ?? (this.dashjs = window.dashjs), !this.dashjs)
        if (this._getDashjs) {
          if (this.dashjs = await this._getDashjs().catch((e) => {
            throw new Error(`dash.js初始化失败: ${e}`);
          }) || void 0, this._supported = ((t = this.dashjs) == null ? void 0 : t.supportsMediaSource()) || !1, this._supported == !1)
            throw new Error("播放器不支持dash加载");
        } else
          throw new Error("dash.js初始化失败: 播放器未引入dash.js");
    }
  }
};
ai.pluginName = "dashLoader";
let Xe = ai;
const ri = class ri extends f {
  constructor(t) {
    super(t);
  }
  apply(t, e) {
    var s;
    this._getFlvjs = (s = e.externals) == null ? void 0 : s.flvjs, this.player.loader.register("flv", this);
  }
  check(t) {
    return t.type == "flv";
  }
  create(t, e) {
    const { type: s, url: n, live: r, play: l, time: h } = t, o = {
      kernel: null,
      type: s || "",
      url: n,
      live: r || !1,
      mediaElement: e,
      destroy() {
        var c;
        (c = this.kernel) == null || c.destroy(), this.kernel = null;
      }
    };
    return this.initFlv().then(() => {
      const c = this.flvjs.createPlayer({
        type: s || "flv",
        url: n,
        cors: !0,
        isLive: r
      });
      o.kernel = c;
      const p = h === !0 ? this.player.currentTime : h === !1 ? 0 : h;
      c.attachMediaElement(e), c.load(), p && (c.currentTime = p), l && c.play();
    }), o;
  }
  /** 初始化flvjs */
  async initFlv() {
    var t;
    if (this._supported != !0) {
      if (this._supported == !1)
        throw new Error("播放器不支持flv加载");
      if (this.flvjs ?? (this.flvjs = window.flvjs), !this.flvjs)
        if (this._getFlvjs) {
          if (this.flvjs = await this._getFlvjs().catch((e) => {
            throw new Error(`flv.js初始化失败: ${e}`);
          }) || void 0, this._supported = ((t = this.flvjs) == null ? void 0 : t.isSupported()) || !1, this._supported == !1)
            throw new Error("播放器不支持flv加载");
        } else
          throw new Error("flv.js初始化失败: 播放器未引入flv.js");
    }
  }
};
ri.pluginName = "flvLoader";
let Ye = ri;
var z;
const li = class li extends f {
  constructor(e) {
    super(e);
    R(this, z, null);
    const s = window.ResizeObserver || Yi;
    s && (this.observer = new s(([n]) => {
      const { width: r, height: l } = n.contentRect;
      this._keepRatio(r, l);
    }));
  }
  apply(e, s) {
    E(this, z, this._parse(s.aspectRatio || ""));
  }
  init() {
    this.player.define("aspectRatio", { get: () => this._stringify(M(this, z)) }), this.player.define("setAspectRatio", (e) => {
      this.set(e);
    });
  }
  mounted() {
    var e;
    (e = this.observer) == null || e.observe(this.player.$area), this._setRatio(M(this, z));
  }
  set(e) {
    const s = this._parse(e);
    E(this, z, s), this._setRatio(s), this.player.emit("aspectRatioChange", this._stringify(s));
  }
  /** 设置视频比例 */
  _setRatio(e) {
    const s = this.player.$video;
    if (s.style.width = "", s.style.height = "", e) {
      const [n, r] = e;
      s.style.aspectRatio = `${n}/${r}`, s.style.objectFit = "fill";
      const { width: l, height: h } = s.getBoundingClientRect(), { width: o, height: c } = this.player.$area.getBoundingClientRect();
      l == o && h == c && this._rescale(l, h, n, r);
    } else
      s.style.aspectRatio = "", s.style.objectFit = "";
  }
  /** 保持视频比例 */
  _keepRatio(e, s) {
    if (M(this, z)) {
      const n = this.player.$video;
      n.style.width = "", n.style.height = "";
      const [r, l] = M(this, z), { width: h, height: o } = n.getBoundingClientRect();
      console.log(`${h} x ${o} -- ${e} x ${s}`), Math.abs(h - e) < 1 && Math.abs(o - s) < 1 && this._rescale(e, s, r, l);
    }
  }
  /** 根据当前视频宽高重新维持视频比例 */
  _rescale(e, s, n, r) {
    const l = n * s, h = r * e, o = this.player.$video;
    l < h ? (o.style.width = `${l / h * 100}%`, o.style.height = "100%") : (o.style.width = "100%", o.style.height = `${h / l * 100}%`);
  }
  _parse(e) {
    const [s, n] = e.split("/").map((r) => parseFloat(r));
    return s && n && isFinite(s) && isFinite(n) ? [s, n] : null;
  }
  _stringify(e) {
    return e ? e.join("/") : "";
  }
};
z = new WeakMap(), li.pluginName = "aspectRatio";
let Ke = li;
const za = (
  /*html*/
  `
    <div class="${a}-footbar-left"></div>
    <div class="${a}-footbar-right"></div>
`
), oi = class oi extends yt {
  constructor(t) {
    super(t, u("div", { class: `${a}-footbar` }, za)), this.controls = {}, this.$left = this.$(`.${a}-footbar-left`), this.$right = this.$(`.${a}-footbar-right`);
  }
  apply(t, e) {
    var s;
    this.controls = ((s = e.footbar) == null ? void 0 : s.controls) || {}, this.player.$el.append(this.$el);
  }
  ready() {
    this.setControls(this.controls);
  }
  /** 更新控制组件 */
  setControls(t) {
    this.controls = t;
    const { left: e, right: s } = t;
    this.build(this.$left, e), this.build(this.$right, s);
  }
  build(t, e) {
    t.innerHTML = "";
    const s = new DocumentFragment();
    e == null || e.forEach((n) => {
      var l;
      const r = (l = this.player.plugin.from(n)) == null ? void 0 : l.$el;
      r && s.appendChild(r);
    }), t.appendChild(s);
  }
};
oi.pluginName = "footbar";
let Ge = oi;
const Oa = [
  He,
  Ia,
  Pe,
  Ee,
  Se,
  qt,
  Ct,
  Ke,
  De,
  jt,
  we,
  ke,
  xe,
  Le,
  Me,
  Fe,
  Re,
  Ne,
  Ge
], Va = [ie, ne, Te], Ba = [ee, te, Ae, _e, Ht], qa = [Ye, Ue, Xe], Ca = [
  ...Da,
  ...ma,
  ...Oa,
  ...Va,
  ...Ba,
  ...qa
];
class Ya extends ut {
  constructor(t) {
    super(
      Ri(
        {
          autoPart: !0,
          header: { controls: { left: ["videoTitle"] } },
          controller: {
            controls: {
              top: ["progress"],
              center: [],
              left: ["buttonPrev", "buttonPlay", "buttonNext", "videoTime", "buttonLoop"],
              right: [
                "buttonQuality",
                "buttonPart",
                "buttonVolume",
                "buttonSettings",
                "buttonPip",
                "buttonWidescreen",
                "buttonWebscreen",
                "buttonFullscreen"
              ]
            }
          },
          danmakuBar: {
            controls: {
              outer: ["buttonDanmakuToggle", "buttonDanmakuSettings"],
              left: ["buttonDanmakuStyle"]
            }
          },
          footbar: {
            controls: {
              left: ["danmakuCount"],
              right: ["danmakuBar"]
            }
          },
          side: {
            panels: ["partList"]
          },
          plugins: [...Ca]
        },
        t
      )
    );
  }
}
export {
  f as BasePlugin,
  Xa as Components,
  F as ControlsPlugin,
  Ua as MenuPlugin,
  Ni as MountablePlugin,
  bt as PanelPlugin,
  Ya as Player,
  yt as UIPlugin,
  Wa as Utils,
  a as classPrefix,
  en as developers,
  Qi as gitHash,
  tn as repositoryLink,
  Ji as version
};
//# sourceMappingURL=video-page-player.es.js.map
(function(){"use strict";try{if(typeof document<"u"){var A=document.createElement("style");A.appendChild(document.createTextNode(`@charset "UTF-8";@font-face{font-family:mfunsPlayerIcon;src:url(data:application/vnd.ms-fontobject;base64,tBUAAPAUAAABAAIAAAAAAAAAAAAAAAAAAAABAJABAAAAAExQAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAN9qYFwAAAAAAAAAAAAAAAAAAAAAAAB4AbQBmAHUAbgBzAFAAbABhAHkAZQByAEkAYwBvAG4AAAAOAFIAZQBnAHUAbABhAHIAAAAWAFYAZQByAHMAaQBvAG4AIAAxAC4AMAAAAB4AbQBmAHUAbgBzAFAAbABhAHkAZQByAEkAYwBvAG4AAAAAAAABAAAACwCAAAMAME9TLzIPEgZdAAAAvAAAAGBjbWFwjnSPEAAAARwAAACcZ2FzcAAAABAAAAG4AAAACGdseWYxqeQfAAABwAAAD/BoZWFkHuI72gAAEbAAAAA2aGhlYQezA+AAABHoAAAAJGhtdHhyAAnlAAASDAAAAHxsb2NhMvg2/AAAEogAAABAbWF4cAAnALwAABLIAAAAIG5hbWX4ZmaxAAAS6AAAAeZwb3N0AAMAAAAAFNAAAAAgAAMD7gGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6UUDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEAIAAAAAcABAAAwAMAAEAIOkF6QzpFekh6SPpKOkq6THpQelF//3//wAAAAAAIOkA6QzpD+ke6SPpKOkq6S/pQOlF//3//wAB/+MXBBb+FvwW9BbzFu8W7hbqFtwW2QADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQCrACQDgANcACIAABM4ATEiBhU4ATkBETgBMRQWMzI2NzEBPgE1NCYnMQEuASMx1REZGREGCwUCgAkMDAn9gAULBgNcGRH9HBEZAwMBcQYTDAwTBgFxAwMAAAACAKsAKwNVA1UAEAAhAAABMzIWFREUBisBIiY1ETQ2MyEzMhYVERQGKwEiJjURNDYzAtVWERkZEVYRGRkR/gBWERkZEVYRGRkRA1UZEf0qERkZEQLWERkZEf0qERkZEQLWERkAAgCAADMDgANNACYANgAAATgBMTIWFTgBOQEROAExFAYjOAE5ASImJzEBLgE1NDY3MQE+ATMxBTMyFhURFAYrASImNRE0NgNVEhkZEgcOBf5EBwkJBwG8BQ4H/VZVEhkZElUSGRkDTRkR/ToRGQUEAWMGEQoKEQYBYwQFDRkS/VYSGRkSAqoSGQAAAAACAIAAMwOAA00AJgA2AAATOAExIgYVOAE5ARE4ATEUFjM4ATkBMjY3MQE+ATU0JicxAS4BIzEFMzIWFREUBisBIiY1ETQ2qxIZGRIHDgUBvAcJCQf+RAUOBwJVVRIZGRJVEhkZA00ZEf06ERkFBAFjBhEKChEGAWMEBQ0ZEv1WEhkZEgKqEhkAAgAZAGsD5wMVABQAKQAAEyEVJwcXNycHETQmIzEhIgYVMRUzASE1FzcnBxc3ERQWMzEhMjY1MTUj1QJWKzyRkjwrGRL9VhIZVQJW/aorPJGSPCsZEgKqEhlVAsDuKjySkjwqARkRGRkRVv4r7io8kpI8Kv7nERkZEVYAAAMAGQBNA+cDNAAOAB0AIgAAAQcRNCYjMSEVIRUnBxc3ATUXNycHFzcRFBYzMSE1ATcBBwEDqysZEv4rAasrPJGS/O4rPJGSPCsZEgHV/gw9Aqs9/VUB/CoBGREZVe4qPJKS/wDuKjySkjwq/ucRGVUCNzz9VjwCqgAAAAADACsAGwPJA2UACwARAB0AAAEjIgYVERQWOwEFEQMnIxEzNwUnBycHFwcXNxc3JwEeyREZGRHJATdVyLi4yAHJPGJiPWJiPWJiPGIClRkR/qoRGdADSv1VhgEAhqQ8YmI8YmI8YmI8YgAAAAAEACsAGwPVA2UACwARACkASQAAASMiBhURFBY7AQURAycjETM3EzgBMRQGBzEXPgE1NCYnMQceARU4ATkBMzgBMRQGBzEXNjc+ATc2NTQnLgEnJicxBx4BFTgBOQEBHskRGRkRyQE3Vci4uMjVIR08KS8vKTwdIas8NT0gGRojCgkJCiMaGSA9NTwClRkR/qoRGdADSv1VhgEAhv76LE4dPChtPj5tKDwdTixQizQ9ICYlVC4uMTEuLlQlJiA9NItQAAAABABVAEADqwNAAAMAFwAeACUAAAERIRElISIGFTERFBYzMSEyNjUxETQmIwEnNxcHFwchJzcnNxcHA1X9VgLV/QASGRkSAwASGRkS/gCSkjxVVTwBADxVVTySkgLr/aoCVlUZEv1WEhkZEgKqEhn97pKSPVVVPT1VVT2SkgAAAAAEAFUAQAOrA0AAAwAXAB4AJQAAAREhESUhIgYVMREUFjMxITI2NTERNCYjATcnBxcHFyE3JzcnBxcDVf1WAtX9ABIZGRIDABIZGRL9q5GRPVZWPQGqPVZWPZGRAuv9qgJWVRkS/VYSGRkSAqoSGf3ukpI9VVU9PVVVPZKSAAAAAAQAVQBAA6sDQAADABcAHgAkAAABESERJSEiBhUxERQWMzEhMjY1MRE0JiMBNTM1IxUzIRUjFTM1A1X9VgLV/QASGRkSAwASGRkS/dWA1VUBVoDVAuv9qgJWVRkS/VYSGRkSAqoSGf6AgFXVgFXVAAAEAFUAQAOrA0AAAwAXAB4AJQAAAREhESUhIgYVMREUFjMxITI2NTERNCYjBRUjFTM1IwE1MzUjFTMDVf1WAtX9ABIZGRIDABIZGRL+AIDVVQEAgNVVAuv9qgJWVRkS/VYSGRkSAqoSGatVVar+VlVVqgAAAAQAVQBAA6sDQAAVABkALQA3AAAlIREhETMRNCYjMSEiBhUxERQWMzEhARUhNSUhIgYVMREUFjMxITI2NTERNCYjARUnBxcjFTM1IwGr/wACqlYZEv0AEhkZEgErAar/AAEr/qsSGRkSAVUSGRkS/gBiPGJE1VWVAlb/AAEqEhkZEv1WEhkBAKurVRkR/wASGRkSAQARGQEAQ2I9YlXVAAAEAFUAQAOrA0AAFQAZAC0ANwAAJSERIREzETQmIzEhIgYVMREUFjMxIQEVITUlISIGFTERFBYzMSEyNjUxETQmIyU1FzcnMzUjFTMBq/8AAqpWGRL9ABIZGRIBKwGq/wABK/6rEhkZEgFVEhkZEv3VYj1iQ9VVlQJW/wABKhIZGRL9VhIZAQCrq1UZEf8AEhkZEgEAERkrRGI8YlXVAAAABABVAEADqwNAAAUACwARABcAABM1MzUhESUzFTMRIQEjNSMRIQEVIxUhEauq/wACVqpW/wD+qqpWAQACAKoBAAJAq1X/AKurAQD9Vav/AAEAq1UBAAAAAAQAVQBAA6sDQAAGAA0AFAAaAAABFSMVIREjBSM1IxEhNQEzFTMRIRUFNTM1IREBAKsBAFUCq6tVAQD8qqtV/wACq6v/AANAq1UBAKur/wBV/larAQBVq6tV/wAABgBVAAADqwNAAA8AFAAZAB4AIwAoAAABISIGFRE3ITI2NRE0JiMxAyEHESEFMxUjNTsBFSM1ByEVITUhMxUjNQOA/QASGbsCcBIZGRIr/Z1HAqr9q4CA1dbW1QEA/wABVaurA0AZEvzrlRkSAlUSGf2rOQI5VlVVVVWqVlZWVgAHAFUAAAPVA0AAEQAvAD8ATwBUAFkAXgAAJSEHESERMxE0JiMhIgYVETczASIHDgEHBhUUFx4BFxYzMjc+ATc2NTE0Jy4BJyYjFxQGBzUnPgEzMhYVOAE5ASE0NjcxFw4BIyImNTA0OQEBMxUjNTsBFSM1ByEVITUCAP7yRwKqVhkS/QASGbvwAQAsJyc6ERAQETonJywsJyc6ERAQETonJyyABwaqDBwPNUv/AAcGqgwcDzVL/oCAgNXW1tUBAP8A6zkCOf8AASoSGRkS/OuVASsRETknJywtJic6ERERETonJi0sJyc5ERHVDxwNAaoGB0s1DxwMqwYGSjUBAapVVVVVqlZWAAAGAFUAAAPOA0AAEQBDAFIAVwBcAGEAACUhBxEhETMRNCYjISIGFRE3MyU0JicVNycHLgEvATUjFQ4BBzEnBxcOARUUFhc1Bxc3HgEXMxUzNT4BNzEXNyc+ATUxByImNTQ2MzIWFTEUBiMxATMVIzU7ARUjNQchFSE1AgD+8kcCqlYZEv0AEhm78AGrBAMqKykQKBYBVhcoECkrKgMEBAMqKykQKBYBVhcoECkrKgMEqyMyMiMjMjIj/gCAgNXW1tUBAP8A6zkCOf8AASoSGRkS/OuVVgwXCwEYShgQGAUBMDAGGBAYShgKFwwNFwsBGEoYEBcGMTEGFxAYShgKFw1WMiQjMjIjJDICAFVVVVWqVlYAAAAGAFX/+QPxA0AAEQAhAEMASABNAFIAACUjBxEhETMRNCYjISIGFRE3MyUeAR8BDgEPAS4BLwE+ATc3MQYHDgEHBg8BFhceARcWHwE2Nz4BNzY/ASYnLgEnJi8BJTMVIzU7ARUjNQchFSE1AdXjRwKqVhkS/QASGbvFASsWLxkBGi8VARYvGQEaLxUBFxobPCEhJAMlIiI8GhoWAhcaGzwhISQDJSIiPBoaFgL+AICA1dbW1QEA/wDrOQI5/wABKhIZGRL865W1Gi8VARYvGQEaLhYBFi8ZkyUiIjwaGxYBFxobPCEhJQMmIiE9GhoWAhYbGjwhIiQDuVVVVVWqVlYAAwCrAEADVQM+AAQADAAPAAA3IRUhNSU3ASMBFzchJRsBqwKq/VYCWkz+1Uz+1UxKAXb+tZCQlVVVLSYCVv2qJpNWASD+4AAAAgCAAA8DlANxAB4AJQAACQEuASMiBhU4ATkBETgBMRQWMzI2NxUBPgE1NCYnMQERITUhEQEDif0XAwUDCQwMCQMFAwLpBQYGBf1MAQD/AAIlAdMBnAEBDAn8yAkMAQIBAZwDCgYGCgP+vgEEVgEE/tEAAAAEAGUAFQObA2sAVACbAKoAuQAAARwBFRQGIyImJzMOAQ8BHgEVFAYHMR4BFzE+ATMyFhUcARUxHgEzMjY3BzwBNTQ2MzIWFyM+AT8BLgE1NDY3MS4BJzEOASMiJjU8ATUxLgEjIgYHNxceATMyNjcjHgEfAQ4BFRQWFzEOAQc3LgEjIgYHFQYiIyoBJy4BIyIGBzMuAS8BPgE1NCYnMT4BNwceATMyNjc1NjIzOgEXBzIWFRQGIyImNTE0NjMxNSIGFRQWMzI2NTE0JiMxAZVLNRMkDwElNw4BHycnHw83JQ8jEzVLGDccHDgaA0s1EyQPASU3DgEfJycfDzclDyMTNUsYNxwcOBoDixZuRwsXCwIJEAYBGR0dGQcQCgEKFgtHbhYIEAgIEAgWbkcLFwoBCRAGARkdHRkHEAoBChYLR24WCBAICBAIICMyMiMjMjIjR2RkR0dkZEcDXQEEAjVLCwomXDQDED0lJT0QNl0mCgtLNQIEAQcHCAcBAQQCNUsLCiZcNAMQPSUlPRA2XSYKC0s1AgQBBwcIBwFJQVIDAgwbDwIcSSkpSRwQHA0BAwJSPwIBAUFSAwIMGw8CHEkpKUkcEBwNAQMCUj8CAQH/MiMjMjIjIzJWZEdHZGRHR2QAAAAABABVAEADqwNAAAMAFwA7AF8AAAERIRElISIGFTERFBYzMSEyNjUxETQmIwE4ATEiJjU0NjMyFhcxNy4BIyIGFRQWMzI2NzEnDgEjOAE5ASE4ATEiJjU0NjMyFhcxNy4BIyIGFRQWMzI2NzEnDgEjOAE5AQNV/VYC1f0AEhkZEgMAEhkZEv4AIzIyIxIfCz0XPyNHZGRHIz8XPQsfEgErJDIyJBEfDDwXPiNHZGRHIz4XPAwfEQLr/aoCVlUZEv1WEhkZEgKqEhn+KzIjIzINDD0XG2RHR2QbFz0MDTIjIzINDD0XG2RHR2QbFz0MDQAAAQBEAAQDqwN8AAkAAAEXASEVIQEHCQECADz+qwLE/TwBVTz+RAG8A3w8/qtW/qs8AbwBvAAAAAABAFUABAO8A3wACQAAAQcBIRUhARcJAQIAPAFV/TwCxP6rPAG8/kQDfDz+q1b+qzwBvAG8AAAAAAEAjQBNA3MDMwALAAABJwkBBwkBFwkBNwEDczz+yf7JPAE3/sk8ATcBNzz+yQL3PP7JATc8/sn+yTwBN/7JPAE3AAAAAQAAAAEAABeY2jdfDzz1AAsEAAAAAADd6Pu0AAAAAN3o+7QAAP/5A/EDfAAAAAgAAgAAAAAAAAABAAADwP/AAAAEAAAAAAAD8QABAAAAAAAAAAAAAAAAAAAAHwQAAAAAAAAAAAAAAAIAAAAEAACrBAAAqwQAAIAEAACABAAAGQQAABkEAAArBAAAKwQAAFUEAABVBAAAVQQAAFUEAABVBAAAVQQAAFUEAABVBAAAVQQAAFUEAABVBAAAVQQAAKsEAACABAAAZQQAAFUEAABEBAAAVQQAAI0AAAAAAAoAFAAeAEwAfgDEAQgBRgGEAboCHAJcApwC1AMOA14DrgPaBAgESATMBVYF1gX6BjQHJgeeB7oH1gf4AAEAAAAfALoABwAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAPAAAAAQAAAAAAAgAHAKgAAQAAAAAAAwAPAE4AAQAAAAAABAAPAL0AAQAAAAAABQALAC0AAQAAAAAABgAPAHsAAQAAAAAACgAaAOoAAwABBAkAAQAeAA8AAwABBAkAAgAOAK8AAwABBAkAAwAeAF0AAwABBAkABAAeAMwAAwABBAkABQAWADgAAwABBAkABgAeAIoAAwABBAkACgA0AQRtZnVuc1BsYXllckljb24AbQBmAHUAbgBzAFAAbABhAHkAZQByAEkAYwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBtZnVuc1BsYXllckljb24AbQBmAHUAbgBzAFAAbABhAHkAZQByAEkAYwBvAG5tZnVuc1BsYXllckljb24AbQBmAHUAbgBzAFAAbABhAHkAZQByAEkAYwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJtZnVuc1BsYXllckljb24AbQBmAHUAbgBzAFAAbABhAHkAZQByAEkAYwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA);src:url(data:application/vnd.ms-fontobject;base64,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) format("embedded-opentype"),url(data:font/ttf;base64,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) format("truetype"),url(data:font/woff;base64,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) format("woff"),url("data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%20%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%3e%3cmetadata%3eGenerated%20by%20IcoMoon%3c/metadata%3e%3cdefs%3e%3cfont%20id='mfunsPlayerIcon'%20horiz-adv-x='1024'%3e%3cfont-face%20units-per-em='1024'%20ascent='960'%20descent='-64'%20/%3e%3cmissing-glyph%20horiz-adv-x='1024'%20/%3e%3cglyph%20unicode='&%23x20;'%20horiz-adv-x='512'%20d=''%20/%3e%3cglyph%20unicode='&%23xe900;'%20glyph-name='play'%20d='M213.398%20860.235c-0.004%200-0.008%200-0.013%200-23.593%200-42.719-19.126-42.719-42.719%200-0.004%200-0.008%200-0.012v0.001-739.009c0-0.045%200-0.098%200-0.151%200-23.516%2019.064-42.58%2042.58-42.58%207.892%200%2015.282%202.147%2021.619%205.889l-0.198-0.108%20640%20369.504c12.843%207.515%2021.333%2021.241%2021.333%2036.951s-8.49%2029.436-21.132%2036.842l-0.201%200.109-640%20369.504c-6.092%203.619-13.428%205.764-21.264%205.78h-0.005z'%20/%3e%3cglyph%20unicode='&%23xe901;'%20glyph-name='pause'%20d='M725.333%20853.333h85.333c23.564%200%2042.667-19.103%2042.667-42.667v-725.333c0-23.564-19.103-42.667-42.667-42.667h-85.333c-23.564%200-42.667%2019.103-42.667%2042.667v725.333c0%2023.564%2019.103%2042.667%2042.667%2042.667zM213.333%20853.333h85.333c23.564%200%2042.667-19.103%2042.667-42.667v-725.333c0-23.564-19.103-42.667-42.667-42.667h-85.333c-23.564%200-42.667%2019.103-42.667%2042.667v725.333c0%2023.564%2019.103%2042.667%2042.667%2042.667z'%20/%3e%3cglyph%20unicode='&%23xe902;'%20glyph-name='prev'%20d='M853.13%20845.42c0.053%200%200.116%200%200.179%200%2023.577%200%2042.691-19.113%2042.691-42.691%200-0.020%200-0.040%200-0.060v0.003-709.345c0-0.016%200-0.035%200-0.054%200-23.579-19.115-42.693-42.693-42.693-0.062%200-0.124%200-0.186%200h0.010c-10.061%200.016-19.29%203.568-26.513%209.479l0.075-0.059-443.669%20354.673c-9.804%207.885-16.025%2019.879-16.025%2033.327s6.221%2025.442%2015.943%2033.262l0.083%200.064%20443.669%20354.673c7.149%205.852%2016.377%209.403%2026.435%209.42h0.004zM170.666%20832h85.333c23.564%200%2042.667-19.103%2042.667-42.667v-682.666c0-23.564-19.103-42.667-42.667-42.667h-85.333c-23.564%200-42.667%2019.103-42.667%2042.667v682.666c0%2023.564%2019.103%2042.667%2042.667%2042.667z'%20/%3e%3cglyph%20unicode='&%23xe903;'%20glyph-name='next'%20d='M170.87%20845.42c-0.053%200-0.116%200-0.179%200-23.577%200-42.691-19.113-42.691-42.691%200-0.020%200-0.040%200-0.060v0.003-709.345c0-0.016%200-0.035%200-0.054%200-23.579%2019.115-42.693%2042.693-42.693%200.062%200%200.124%200%200.186%200h-0.010c10.061%200.016%2019.29%203.568%2026.513%209.479l-0.075-0.059%20443.669%20354.673c9.804%207.885%2016.025%2019.879%2016.025%2033.327s-6.221%2025.442-15.943%2033.262l-0.083%200.064-443.669%20354.673c-7.149%205.852-16.377%209.403-26.435%209.42h-0.004zM768%20832h85.333c23.564%200%2042.667-19.103%2042.667-42.667v-682.667c0-23.564-19.103-42.667-42.667-42.667h-85.333c-23.564%200-42.667%2019.103-42.667%2042.667v682.667c0%2023.564%2019.103%2042.667%2042.667%2042.667z'%20/%3e%3cglyph%20unicode='&%23xe904;'%20glyph-name='repeat'%20d='M213.333%20704h597.333v-238.325l-42.667%2042.667-60.342-60.342%20145.675-145.675%20145.675%20145.675-60.342%2060.342-42.667-42.667v280.992c0%2023.564-19.103%2042.667-42.667%2042.667v0h-682.667c-23.564%200-42.667-19.103-42.667-42.667v0-85.333h85.333zM810.667%20192h-597.333v238.325l42.667-42.667%2060.342%2060.342-145.675%20145.675-145.675-145.675%2060.342-60.342%2042.667%2042.667v-280.992c0-23.564%2019.103-42.667%2042.667-42.667v0h682.667c23.564%200%2042.667%2019.103%2042.667%2042.667v0%2085.333h-85.333z'%20/%3e%3cglyph%20unicode='&%23xe905;'%20glyph-name='repeat-off'%20d='M938.667%20508.342l-42.667-42.667v280.992c0%2023.564-19.103%2042.667-42.667%2042.667v0h-469.333v-85.333h426.667v-238.325l-42.667%2042.667-60.342-60.342%20145.675-145.675%20145.675%20145.675zM213.333%20192v238.325l42.667-42.667%2060.342%2060.342-145.675%20145.675-145.675-145.675%2060.342-60.342%2042.667%2042.667v-280.992c0-23.564%2019.103-42.667%2042.667-42.667v0h469.333v85.333zM140.496%20759.162l60.337%2060.338%20682.671-682.662-60.337-60.338-682.671%20682.662z'%20/%3e%3cglyph%20unicode='&%23xe90c;'%20glyph-name='volume-off'%20d='M285.781%20661.333h-200.448c-23.561-0.009-42.658-19.106-42.667-42.666v-341.334c0.009-23.561%2019.106-42.658%2042.666-42.667h200.449l311.552-207.701v842.069zM512%20186.368l-200.448%20133.632h-183.552v256h183.552l200.448%20133.632zM968.832%20545.826l-60.331%2060.348-97.835-97.835-97.835%2097.835-60.331-60.348%2097.826-97.826-97.826-97.835%2060.331-60.331%2097.835%2097.835%2097.835-97.835%2060.331%2060.331-97.826%2097.835%2097.826%2097.826z'%20/%3e%3cglyph%20unicode='&%23xe90f;'%20glyph-name='volume'%20d='M285.781%20661.333h-200.448c-23.561-0.009-42.658-19.106-42.667-42.666v-341.334c0.009-23.561%2019.106-42.658%2042.666-42.667h200.449l311.552-207.701v842.069zM512%20186.368l-200.448%20133.632h-183.552v256h183.552l200.448%20133.632zM725.333%20448c0-0.040%200-0.087%200-0.134%200-58.859-23.911-112.133-62.549-150.639l-0.006-0.006%2060.41-60.41c54.048%2054.048%2087.478%20128.715%2087.478%20211.189s-33.429%20157.141-87.478%20211.189v0l-60.41-60.41c38.644-38.512%2062.555-91.786%2062.555-150.645%200-0.047%200-0.094%200-0.141v0.007zM896%20448c0-0.071%200-0.156%200-0.241%200-105.946-43.039-201.839-112.588-271.15l-0.011-0.011%2060.467-60.467c84.933%2084.933%20137.465%20202.266%20137.465%20331.869s-52.532%20246.936-137.465%20331.869v0l-60.467-60.467c69.559-69.321%20112.598-165.215%20112.598-271.16%200-0.085%200-0.17%200-0.254v0.013z'%20/%3e%3cglyph%20unicode='&%23xe910;'%20glyph-name='widescreen'%20d='M853.333%20746.667v-597.333h-682.667v597.333h682.667zM896%20832h-768c-23.564%200-42.667-19.103-42.667-42.667v0-682.667c0-23.564%2019.103-42.667%2042.667-42.667v0h768c23.564%200%2042.667%2019.103%2042.667%2042.667v0%20682.667c0%2023.564-19.103%2042.667-42.667%2042.667v0zM384%20302.327l-145.673%20145.673%20145.673%20145.673%2060.339-60.339-85.333-85.333%2085.333-85.333-60.339-60.339zM640%20302.327l-60.339%2060.339%2085.333%2085.333-85.333%2085.333%2060.339%2060.339%20145.673-145.673-145.673-145.673z'%20/%3e%3cglyph%20unicode='&%23xe911;'%20glyph-name='widescreen-exit'%20d='M853.333%20746.667v-597.333h-682.667v597.333h682.667zM896%20832h-768c-23.564%200-42.667-19.103-42.667-42.667v0-682.667c0-23.564%2019.103-42.667%2042.667-42.667v0h768c23.564%200%2042.667%2019.103%2042.667%2042.667v0%20682.667c0%2023.564-19.103%2042.667-42.667%2042.667v0zM298.667%20302.327l145.673%20145.673-145.673%20145.673-60.339-60.339%2085.333-85.333-85.333-85.333%2060.339-60.339zM725.333%20302.327l60.339%2060.339-85.333%2085.333%2085.333%2085.333-60.339%2060.339-145.673-145.673%20145.673-145.673z'%20/%3e%3cglyph%20unicode='&%23xe912;'%20glyph-name='web-fullscreen'%20d='M853.333%20746.667v-597.333h-682.667v597.333h682.667zM896%20832h-768c-23.564%200-42.667-19.103-42.667-42.667v0-682.667c0-23.564%2019.103-42.667%2042.667-42.667v0h768c23.564%200%2042.667%2019.103%2042.667%2042.667v0%20682.667c0%2023.564-19.103%2042.667-42.667%2042.667v0zM341.333%20448v128h128v85.333h-213.333v-213.333h85.333zM682.667%20448v-128h-128v-85.333h213.333v213.333h-85.333z'%20/%3e%3cglyph%20unicode='&%23xe913;'%20glyph-name='web-fullscreen-exit'%20d='M853.333%20746.667v-597.333h-682.667v597.333h682.667zM896%20832h-768c-23.564%200-42.667-19.103-42.667-42.667v0-682.667c0-23.564%2019.103-42.667%2042.667-42.667v0h768c23.564%200%2042.667%2019.103%2042.667%2042.667v0%20682.667c0%2023.564-19.103%2042.667-42.667%2042.667v0zM384%20661.333v-85.333h-128v-85.333h213.333v170.667h-85.333zM640%20234.667v85.333h128v85.333h-213.333v-170.667h85.333z'%20/%3e%3cglyph%20unicode='&%23xe914;'%20glyph-name='picture-in-picture'%20d='M426.667%20149.333h-256v597.333h682.667v-256h85.333v298.667c0%2023.564-19.103%2042.667-42.667%2042.667v0h-768c-23.564%200-42.667-19.103-42.667-42.667v0-682.667c0-23.564%2019.103-42.667%2042.667-42.667v0h298.667zM853.333%20320v-170.667h-256v170.667h256zM896%20405.333h-341.333c-23.564%200-42.667-19.103-42.667-42.667v0-256c0-23.564%2019.103-42.667%2042.667-42.667v0h341.333c23.564%200%2042.667%2019.103%2042.667%2042.667v0%20256c0%2023.564-19.103%2042.667-42.667%2042.667v0zM384%20661.333v-67.661l-97.826%2097.835-60.348-60.348%2097.835-97.826h-67.661v-85.333h213.333v213.333h-85.333z'%20/%3e%3cglyph%20unicode='&%23xe915;'%20glyph-name='picture-in-picture-exit'%20d='M426.667%20149.333h-256v597.333h682.667v-256h85.333v298.667c0%2023.564-19.103%2042.667-42.667%2042.667v0h-768c-23.564%200-42.667-19.103-42.667-42.667v0-682.667c0-23.564%2019.103-42.667%2042.667-42.667v0h298.667zM853.333%20320v-170.667h-256v170.667h256zM896%20405.333h-341.333c-23.564%200-42.667-19.103-42.667-42.667v0-256c0-23.564%2019.103-42.667%2042.667-42.667v0h341.333c23.564%200%2042.667%2019.103%2042.667%2042.667v0%20256c0%2023.564-19.103%2042.667-42.667%2042.667v0zM341.333%20448v67.661l97.826-97.835%2060.348%2060.348-97.835%2097.826h67.661v85.333h-213.333v-213.333h85.333z'%20/%3e%3cglyph%20unicode='&%23xe91e;'%20glyph-name='fullscreen'%20d='M170.667%20576v170.667h170.667v85.333h-256v-256h85.333zM682.667%20746.667h170.667v-170.667h85.333v256h-256v-85.333zM341.333%20149.333h-170.667v170.667h-85.333v-256h256v85.333zM853.333%20320v-170.667h-170.667v-85.333h256v256h-85.333z'%20/%3e%3cglyph%20unicode='&%23xe91f;'%20glyph-name='fullscreen-exit'%20d='M256%20832v-170.667h-170.667v-85.333h256v256h-85.333zM938.667%20661.333h-170.667v170.667h-85.333v-256h256v85.333zM85.333%20234.667h170.667v-170.667h85.333v256h-256v-85.333zM768%2064v170.667h170.667v85.333h-256v-256h85.333z'%20/%3e%3cglyph%20unicode='&%23xe920;'%20glyph-name='danmaku'%20d='M896%20832h-768c-23.561-0.009-42.658-19.106-42.667-42.666v-789.334l186.709%20149.333h623.957c23.561%200.009%2042.658%2019.106%2042.667%2042.666v597.334c-0.009%2023.561-19.106%2042.658-42.666%2042.667h-0.001zM853.333%20234.667h-611.328l-71.339-57.088v569.088h682.667zM256%20661.333h128v-85.333h-128v85.333zM469.333%20661.333h213.333v-85.333h-213.333v85.333zM256%20490.667h256v-85.333h-256v85.333zM597.333%20490.667h170.667v-85.333h-170.667v85.333z'%20/%3e%3cglyph%20unicode='&%23xe921;'%20glyph-name='danmaku-off'%20d='M512%20234.667h-269.995l-71.339-57.088v569.088h682.667v-256h85.333v298.667c-0.009%2023.561-19.106%2042.658-42.666%2042.667h-768.001c-23.561-0.009-42.658-19.106-42.667-42.666v-789.334l186.709%20149.333h239.957zM768%20448c-117.821%200-213.333-95.513-213.333-213.333s95.513-213.333%20213.333-213.333c117.821%200%20213.333%2095.513%20213.333%20213.333v0c0%20117.821-95.513%20213.333-213.333%20213.333v0zM896%20234.667c-0.023-20.025-4.677-38.957-12.948-55.791l0.332%200.747-170.428%20170.428c16.18%207.96%2035.219%2012.616%2055.345%2012.616%2070.527%200%20127.7-57.173%20127.7-127.7%200-0.106%200-0.211%200-0.317v0.016zM640%20234.667c0.023%2020.025%204.677%2038.957%2012.948%2055.791l-0.332-0.747%20170.428-170.428c-16.18-7.961-35.219-12.617-55.346-12.617-70.526%200-127.698%2057.172-127.698%20127.698%200%200.106%200%200.212%200%200.319v-0.016zM256%20661.333h128v-85.333h-128v85.333zM469.333%20661.333h213.333v-85.333h-213.333v85.333zM256%20490.667h256v-85.333h-256v85.333z'%20/%3e%3cglyph%20unicode='&%23xe923;'%20glyph-name='danmaku-settings'%20d='M512%20234.667h-269.995l-71.339-57.088v569.088h682.667v-256h85.333v298.667c-0.009%2023.561-19.106%2042.658-42.666%2042.667h-768.001c-23.561-0.009-42.658-19.106-42.667-42.666v-789.334l186.709%20149.333h239.957zM938.667%20234.667c-0.047%2016.253-2.363%2031.946-6.646%2046.804l0.297-1.203%2041.767%2024.115-42.667%2073.901-41.703-24.078c-21.129%2021.473-47.877%2037.355-77.862%2045.267l-1.187%200.266v48.261h-85.333v-48.261c-31.172-8.178-57.92-24.060-79.027-45.51l-0.022-0.022-41.703%2024.078-42.667-73.901%2041.768-24.115c-4.030-13.664-6.349-29.362-6.349-45.602s2.319-31.938%206.643-46.781l-0.294%201.18-41.768-24.115%2042.667-73.901%2041.703%2024.078c21.129-21.473%2047.877-37.355%2077.862-45.267l1.187-0.266v-48.261h85.333v48.261c31.172%208.177%2057.92%2024.060%2079.027%2045.51l0.022%200.023%2041.703-24.078%2042.667%2073.901-41.768%2024.115c3.986%2013.656%206.302%2029.349%206.349%2045.575v0.026zM768%20149.333c-47.128%200-85.333%2038.205-85.333%2085.333s38.205%2085.333%2085.333%2085.333c47.128%200%2085.333-38.205%2085.333-85.333v0c-0.055-47.106-38.227-85.279-85.329-85.333h-0.005zM256%20661.333h128v-85.333h-128v85.333zM469.333%20661.333h213.333v-85.333h-213.333v85.333zM256%20490.667h256v-85.333h-256v85.333z'%20/%3e%3cglyph%20unicode='&%23xe928;'%20glyph-name='advanced-danmaku'%20d='M469.333%20234.667h-227.328l-71.339-57.088v569.088h682.667v-256h85.333v298.667c-0.009%2023.561-19.106%2042.658-42.666%2042.667h-768.001c-23.561-0.009-42.658-19.106-42.667-42.666v-789.334l186.709%20149.333h197.291zM768%20329.788c29.345-34.657%2060.463-65.776%2093.965-94.166l1.156-0.955c-34.658-29.345-65.776-60.463-94.167-93.966l-0.954-1.155c-29.345%2034.657-60.463%2065.776-93.965%2094.166l-1.156%200.955c34.658%2029.346%2065.776%2060.464%2094.167%2093.967l0.954%201.154zM768%20476.026v0c-60.461-99.627-141.732-180.898-238.245-239.6l-3.114-1.759c99.627-60.462%20180.898-141.733%20239.6-238.245l1.759-3.113c60.462%2099.627%20141.733%20180.898%20238.245%20239.6l3.113%201.759c-99.627%2060.462-180.898%20141.733-239.6%20238.245l-1.759%203.113zM768-6.692v0zM256%20661.333h128v-85.333h-128v85.333zM469.333%20661.333h213.333v-85.333h-213.333v85.333zM256%20490.667h256v-85.333h-256v85.333z'%20/%3e%3cglyph%20unicode='&%23xe92a;'%20glyph-name='text'%20d='M170.667%20149.333h682.667v-85.333h-682.667v85.333zM772.508%20194.25l76.317%2038.167-298.667%20597.329h-76.321l-298.667-597.329%2076.325-38.167%2073.541%20147.083h373.929zM367.703%20426.667l144.297%20288.596%20144.299-288.596z'%20/%3e%3cglyph%20unicode='&%23xe92f;'%20glyph-name='send-danmaku'%20d='M904.88%20466.672l-745.228%20411.837c-2.985%201.694-6.557%202.692-10.363%202.692-11.758%200-21.289-9.532-21.289-21.289%200-0.026%200-0.053%200-0.079v0.004-823.673c0-0.022%200-0.048%200-0.074%200-11.758%209.532-21.289%2021.289-21.289%203.805%200%207.377%200.998%2010.469%202.748l-0.106-0.055%20745.228%20411.836c6.617%203.708%2011.015%2010.676%2011.015%2018.672s-4.398%2014.963-10.907%2018.616l-0.107%200.055zM213.333%20144.655v260.678h256v85.333h-256v260.679l548.91-303.345z'%20/%3e%3cglyph%20unicode='&%23xe930;'%20glyph-name='settings'%20d='M405.163%20861.099c0.11-1.989%200.173-4.317%200.173-6.659%200-70.685-57.302-127.987-127.987-127.987-25.858%200-49.924%207.668-70.050%2020.854l0.487-0.3c-49.397-50.063-86.486-112.394-106.279-182.005l-0.729-2.997c41.806-21.62%2069.888-64.533%2069.888-114.005s-28.082-92.386-69.175-113.67l-0.713-0.336c20.522-72.609%2057.611-134.94%20107.054-185.050l-0.046%200.047c19.639%2012.887%2043.705%2020.555%2069.563%2020.555%2070.685%200%20127.987-57.302%20127.987-127.987%200-2.342-0.063-4.67-0.187-6.981l0.014%200.322c32.061-8.618%2068.871-13.568%20106.837-13.568s74.776%204.95%20109.819%2014.24l-2.982-0.672c-0.11%201.989-0.173%204.316-0.173%206.658%200%2070.685%2057.302%20127.987%20127.987%20127.987%2025.858%200%2049.924-7.668%2070.050-20.854l-0.487%200.3c49.397%2050.064%2086.485%20112.394%20106.279%20182.006l0.729%202.997c-41.806%2021.62-69.888%2064.533-69.888%20114.005s28.082%2092.386%2069.175%20113.67l0.713%200.336c-20.523%2072.609-57.611%20134.94-107.054%20185.050l0.046-0.047c-19.638-12.886-43.705-20.554-69.562-20.554-70.685%200-127.987%2057.302-127.987%20127.987%200%202.342%200.063%204.669%200.187%206.98l-0.014-0.322c-32.061%208.618-68.871%2013.568-106.837%2013.568s-74.776-4.95-109.82-14.241l2.982%200.672zM544%20787.797c28.86-85.883%20108.63-146.651%20202.592-146.651%2015.406%200%2030.43%201.634%2044.909%204.737l-1.4-0.251c11.636-16.023%2022.368-34.224%2031.316-53.425l0.855-2.042c-33.68-37.56-54.272-87.458-54.272-142.165s20.592-104.606%2054.449-142.366l-0.177%200.2c-9.803-21.242-20.535-39.444-32.837-56.434l0.667%200.967c-13.079%202.852-28.103%204.485-43.509%204.485-93.963%200-173.732-60.768-202.153-145.147l-0.439-1.504c-10.496-1.024-21.248-1.536-32-1.536s-21.504%200.512-32%201.536c-28.86%2085.883-108.63%20146.651-202.592%20146.651-15.406%200-30.43-1.634-44.909-4.737l1.4%200.251c-11.636%2016.023-22.368%2034.224-31.316%2053.425l-0.855%202.042c33.68%2037.56%2054.272%2087.458%2054.272%20142.165s-20.592%20104.606-54.449%20142.366l0.177-0.2c9.803%2021.242%2020.535%2039.444%2032.837%2056.434l-0.667-0.967c13.079-2.852%2028.103-4.485%2043.509-4.485%2093.963%200%20173.732%2060.768%20202.153%20145.147l0.44%201.504c10.496%201.024%2021.248%201.536%2032%201.536s21.504-0.512%2032-1.536zM512%20533.333c47.128%200%2085.333-38.205%2085.333-85.333s-38.205-85.333-85.333-85.333c-47.128%200-85.333%2038.205-85.333%2085.333v0c0.055%2047.106%2038.227%2085.278%2085.328%2085.333h0.005zM512%20618.667c-94.257%200-170.667-76.41-170.667-170.667s76.41-170.667%20170.667-170.667c94.257%200%20170.667%2076.41%20170.667%20170.667v0c0%2094.257-76.41%20170.667-170.667%20170.667v0z'%20/%3e%3cglyph%20unicode='&%23xe931;'%20glyph-name='caption'%20d='M853.333%20746.667v-597.333h-682.667v597.333h682.667zM896%20832h-768c-23.564%200-42.667-19.103-42.667-42.667v0-682.667c0-23.564%2019.103-42.667%2042.667-42.667v0h768c23.564%200%2042.667%2019.103%2042.667%2042.667v0%20682.667c0%2023.564-19.103%2042.667-42.667%2042.667v0zM384%20362.667c-0.017%200-0.037%200-0.057%200-47.128%200-85.333%2038.205-85.333%2085.333s38.205%2085.333%2085.333%2085.333c23.578%200%2044.923-9.563%2060.367-25.021l0.001-0.001%2060.368%2060.368c-30.885%2030.885-73.551%2049.987-120.679%2049.987-94.257%200-170.667-76.41-170.667-170.667s76.41-170.667%20170.667-170.667c47.128%200%2089.795%2019.103%20120.68%2049.987v0l-60.368%2060.368c-15.405-15.458-36.715-25.022-60.258-25.022-0.019%200-0.037%200-0.056%200h0.003zM682.667%20362.667c-0.017%200-0.037%200-0.057%200-47.128%200-85.333%2038.205-85.333%2085.333s38.205%2085.333%2085.333%2085.333c23.578%200%2044.923-9.563%2060.367-25.021l0.001-0.001%2060.368%2060.368c-30.885%2030.885-73.551%2049.987-120.679%2049.987-94.257%200-170.667-76.41-170.667-170.667s76.41-170.667%20170.667-170.667c47.128%200%2089.795%2019.103%20120.68%2049.987v0l-60.368%2060.368c-15.405-15.458-36.715-25.022-60.258-25.022-0.019%200-0.037%200-0.056%200h0.003z'%20/%3e%3cglyph%20unicode='&%23xe940;'%20glyph-name='left-arrow'%20d='M512%20892.339l60.339-60.339-341.333-341.333h707.661v-85.333h-707.661l341.333-341.333-60.339-60.339-444.339%20444.339%20444.339%20444.339z'%20/%3e%3cglyph%20unicode='&%23xe941;'%20glyph-name='right-arrow'%20d='M512%20892.339l-60.339-60.339%20341.333-341.333h-707.661v-85.333h707.661l-341.333-341.333%2060.339-60.339%20444.339%20444.339-444.339%20444.339z'%20/%3e%3cglyph%20unicode='&%23xe945;'%20glyph-name='close'%20d='M883.499%20759.159l-60.331%2060.339-311.168-311.159-311.159%20311.159-60.339-60.339%20311.159-311.159-311.159-311.168%2060.339-60.331%20311.159%20311.159%20311.168-311.159%2060.331%2060.331-311.159%20311.168%20311.159%20311.159z'%20/%3e%3c/font%3e%3c/defs%3e%3c/svg%3e") format("svg");font-weight:400;font-style:normal;font-display:block}[class^=mpicon-],[class*=" mpicon-"]{font-family:mfunsPlayerIcon!important;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.mpicon-play:before{content:""}.mpicon-pause:before{content:""}.mpicon-prev:before{content:""}.mpicon-next:before{content:""}.mpicon-loop:before{content:""}.mpicon-loop-off:before{content:""}.mpicon-volume-off:before{content:""}.mpicon-volume:before{content:""}.mpicon-widescreen:before{content:""}.mpicon-widescreen-exit:before{content:""}.mpicon-webscreen:before{content:""}.mpicon-webscreen-exit:before{content:""}.mpicon-pip:before{content:""}.mpicon-pip-exit:before{content:""}.mpicon-fullscreen:before{content:""}.mpicon-fullscreen-exit:before{content:""}.mpicon-danmaku:before{content:""}.mpicon-danmaku-off:before{content:""}.mpicon-danmaku-settings:before{content:""}.mpicon-advanced-danmaku:before{content:""}.mpicon-text:before{content:""}.mpicon-send-danmaku:before{content:""}.mpicon-settings:before{content:""}.mpicon-caption:before{content:""}.mpicon-left-arrow:before{content:""}.mpicon-right-arrow:before{content:""}.mpicon-close:before{content:""}.mfuns-player{-webkit-user-select:none;user-select:none;width:100%;height:100%;font-size:12px;display:flex;flex-direction:column}.mfuns-player-main{position:relative;width:100%;flex-grow:1;overflow:hidden}.mfuns-player-area{position:relative;width:100%;height:100%}.mfuns-player-content{width:100%;height:100%;position:relative;display:flex;justify-content:center;align-items:center;background:#000;box-sizing:border-box}.mfuns-player-content video{display:block;width:100%;height:100%}.mfuns-player-head-wrap{position:absolute}.mfuns-player-side-wrap,.mfuns-player-modal-wrap,.mfuns-player-contextmenu-wrap{position:absolute;width:100%;height:100%;top:0;left:0}.mfuns-player-danmaku-wrap{position:absolute;left:0;top:0;width:100%;height:100%}.mfuns-player-danmaku-wrap>div{position:absolute;left:0;top:0;width:100%;height:100%}.mfuns-player-tooltip{position:absolute;left:50%;top:-30px;transform:translate(-50%);white-space:nowrap;display:none;height:20px;line-height:20px;padding:0 4px;font-size:12px;background-color:var(--mp-bg-black, rgba(32, 32, 32, .8784313725));color:#ffffffe0;border-radius:var(--mp-border-radius, 4px)}.mfuns-player li{list-style:none}.mfuns-player.is-webscreen{z-index:233333}.mfuns-player.is-webscreen .mfuns-player-main{position:fixed;top:0;bottom:0;left:0;right:0;z-index:233333;height:100%}.mpui{color:#404040}.mpui-input{font-family:inherit;font-size:inherit;height:20px;line-height:20px;border-radius:var(--mp-border-radius, 4px);padding:0 4px;outline:none;border:1px solid;background-color:transparent;color:#404040;border-color:#e6e6e6;transition:all .2s}.mpui-input:hover{border-color:gray}.mpui-input:focus{border-color:var(--mp-primary-color, #7b7ff7)}.mpui-button{font-family:inherit;font-size:inherit;height:22px;line-height:22px;border-radius:var(--mp-border-radius, 4px);padding:0 4px;outline:none;border:1px solid;background-color:transparent;color:#404040;border-color:gray;cursor:pointer;transition:all .2s}.mpui-button:hover{color:var(--mp-primary-color, #7b7ff7);border-color:var(--mp-primary-color, #7b7ff7)}.mpui-tooltip{position:absolute;left:50%;top:-30px;transform:translate(-50%);white-space:nowrap;display:none;height:20px;line-height:20px;padding:0 4px;font-size:12px;background-color:var(--mp-bg-black, rgba(32, 32, 32, .8784313725));color:#ffffffe0;border-radius:var(--mp-border-radius, 4px)}.mpui-slider{position:relative}.mpui-slider-track{width:4px;height:4px;border-radius:2px;margin:0 auto;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;cursor:pointer;background:gray}.mpui-slider-bar{background:var(--mp-primary-color, #7b7ff7);border-radius:2px}.mpui-slider-thumb-track{position:relative;width:calc(100% - 12px);height:calc(100% - 12px)}.mpui-slider-thumb{z-index:1;width:12px;height:12px;border-radius:100%;background:var(--mp-primary-color, #7b7ff7)}.mpui-slider-divider{position:absolute;width:100%;display:flex;justify-content:space-between}.mpui-slider-divider-dot{height:4px;width:1px;background-color:#404040;transform:translateY(-50%)}.mpui-picker-item{display:inline-block;padding:0 5px;height:20px;line-height:20px;border-radius:var(--mp-border-radius, 4px);border:transparent solid 1px;transition:color .2s;cursor:pointer}.mpui-picker-item.is-checked{border:transparent solid 1px;border-color:var(--mp-primary-color, #7b7ff7);color:var(--mp-primary-color, #7b7ff7)}.mpui-picker-item:hover,.mpui-picker-item:active{color:var(--mp-primary-color, #7b7ff7)}.mpui-checkbox{height:22px;cursor:pointer}.mpui-checkbox-icon{position:relative;display:inline-block;vertical-align:middle;margin:4px 0;width:13px;height:13px;border-radius:var(--mp-border-radius, 4px);border:solid;border-width:1px;border-color:gray;box-sizing:border-box;transition:all .2s}.mpui-checkbox-label{position:relative;display:inline-block;vertical-align:middle;line-height:22px;margin:0 2px;transition:all .2s}.mpui-checkbox:hover .mpui-checkbox-icon{border-color:var(--mp-primary-color, #7b7ff7)}.mpui-checkbox:hover .mpui-checkbox-label{color:var(--mp-primary-color, #7b7ff7)}.mpui-checkbox:active .mpui-checkbox-icon{border-color:var(--mp-primary-color, #7b7ff7)}.mpui-checkbox:active .mpui-checkbox-label{color:var(--mp-primary-color, #7b7ff7)}.mpui-checkbox.is-checked .mpui-checkbox-icon{background-color:var(--mp-primary-color, #7b7ff7);border-color:var(--mp-primary-color, #7b7ff7);background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MCA1MCI+DQogICAgPHBvbHlnb24gcG9pbnRzPSI0MCA3LjkyOSAyMCAyNy45MjkgMTAgMTcuOTI5IDIuOTI5IDI1IDIwIDQyLjA3MSA0Ny4wNzEgMTUgNDAgNy45MjkiIGZpbGw9IiNGRkYiLz4NCjwvc3ZnPg==);background-repeat:no-repeat;background-size:contain}.mpui-background,.mfuns-player-controls-panel{background-color:var(--mp-bg-light, #ffffff)}.mpui-black,.mfuns-player-danmakubar .mfuns-player-controls-panel,.mpui-dark,.mfuns-player.is-lightoff{color:#ffffffe0}.mpui-black .mpui-input,.mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-input,.mpui-dark .mpui-input,.mfuns-player.is-lightoff .mpui-input{background-color:transparent;color:#ffffffe0;border-color:#ffffff40}.mpui-black .mpui-input:hover,.mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-input:hover,.mpui-dark .mpui-input:hover,.mfuns-player.is-lightoff .mpui-input:hover{border-color:#ffffff80}.mpui-black .mpui-input:focus,.mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-input:focus,.mpui-dark .mpui-input:focus,.mfuns-player.is-lightoff .mpui-input:focus{border-color:var(--mp-primary-color, #7b7ff7)}.mpui-black .mpui-button,.mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-button,.mpui-dark .mpui-button,.mfuns-player.is-lightoff .mpui-button{background-color:transparent;color:#ffffffe0;border-color:#ffffff80}.mpui-black .mpui-button:hover,.mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-button:hover,.mpui-dark .mpui-button:hover,.mfuns-player.is-lightoff .mpui-button:hover{color:var(--mp-primary-color, #7b7ff7);border-color:var(--mp-primary-color, #7b7ff7)}.mpui-black .mpui-slider-track,.mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-slider-track,.mpui-dark .mpui-slider-track,.mfuns-player.is-lightoff .mpui-slider-track{background:#ffffff80}.mpui-black .mpui-slider-divider-dot,.mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-slider-divider-dot,.mpui-dark .mpui-slider-divider-dot,.mfuns-player.is-lightoff .mpui-slider-divider-dot{background-color:#ffffffe0}.mpui-black .mpui-checkbox,.mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-checkbox,.mpui-dark .mpui-checkbox,.mfuns-player.is-lightoff .mpui-checkbox{border-color:#ffffff80}.mpui-black .mpui-checkbox:hover .mpui-black .mpui-checkbox-icon,.mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-checkbox:hover .mpui-black .mpui-checkbox-icon,.mpui-black .mpui-checkbox:hover .mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-checkbox-icon,.mfuns-player-danmakubar .mpui-black .mpui-checkbox:hover .mfuns-player-controls-panel .mpui-checkbox-icon,.mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-checkbox:hover .mfuns-player-controls-panel .mpui-checkbox-icon,.mpui-black .mpui-checkbox:hover .mpui-dark .mpui-checkbox-icon,.mpui-black .mpui-checkbox:hover .mfuns-player.is-lightoff .mpui-checkbox-icon,.mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-checkbox:hover .mpui-dark .mpui-checkbox-icon,.mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-checkbox:hover .mfuns-player.is-lightoff .mpui-checkbox-icon,.mpui-dark .mpui-checkbox:hover .mpui-black .mpui-checkbox-icon,.mfuns-player.is-lightoff .mpui-checkbox:hover .mpui-black .mpui-checkbox-icon,.mpui-dark .mpui-checkbox:hover .mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-checkbox-icon,.mfuns-player.is-lightoff .mpui-checkbox:hover .mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-checkbox-icon,.mfuns-player-danmakubar .mpui-dark .mpui-checkbox:hover .mfuns-player-controls-panel .mpui-checkbox-icon,.mfuns-player-danmakubar .mfuns-player.is-lightoff .mpui-checkbox:hover .mfuns-player-controls-panel .mpui-checkbox-icon,.mpui-dark .mpui-checkbox:hover .mpui-dark .mpui-checkbox-icon,.mfuns-player.is-lightoff .mpui-checkbox:hover .mpui-dark .mpui-checkbox-icon,.mpui-dark .mpui-checkbox:hover .mfuns-player.is-lightoff .mpui-checkbox-icon,.mfuns-player.is-lightoff .mpui-checkbox:hover .mfuns-player.is-lightoff .mpui-checkbox-icon{border-color:var(--mp-primary-color, #7b7ff7)}.mpui-black .mpui-checkbox:hover .mpui-black .mpui-checkbox-label,.mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-checkbox:hover .mpui-black .mpui-checkbox-label,.mpui-black .mpui-checkbox:hover .mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-checkbox-label,.mfuns-player-danmakubar .mpui-black .mpui-checkbox:hover .mfuns-player-controls-panel .mpui-checkbox-label,.mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-checkbox:hover .mfuns-player-controls-panel .mpui-checkbox-label,.mpui-black .mpui-checkbox:hover .mpui-dark .mpui-checkbox-label,.mpui-black .mpui-checkbox:hover .mfuns-player.is-lightoff .mpui-checkbox-label,.mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-checkbox:hover .mpui-dark .mpui-checkbox-label,.mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-checkbox:hover .mfuns-player.is-lightoff .mpui-checkbox-label,.mpui-dark .mpui-checkbox:hover .mpui-black .mpui-checkbox-label,.mfuns-player.is-lightoff .mpui-checkbox:hover .mpui-black .mpui-checkbox-label,.mpui-dark .mpui-checkbox:hover .mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-checkbox-label,.mfuns-player.is-lightoff .mpui-checkbox:hover .mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-checkbox-label,.mfuns-player-danmakubar .mpui-dark .mpui-checkbox:hover .mfuns-player-controls-panel .mpui-checkbox-label,.mfuns-player-danmakubar .mfuns-player.is-lightoff .mpui-checkbox:hover .mfuns-player-controls-panel .mpui-checkbox-label,.mpui-dark .mpui-checkbox:hover .mpui-dark .mpui-checkbox-label,.mfuns-player.is-lightoff .mpui-checkbox:hover .mpui-dark .mpui-checkbox-label,.mpui-dark .mpui-checkbox:hover .mfuns-player.is-lightoff .mpui-checkbox-label,.mfuns-player.is-lightoff .mpui-checkbox:hover .mfuns-player.is-lightoff .mpui-checkbox-label{color:var(--mp-primary-color, #7b7ff7)}.mpui-black .mpui-checkbox:active .mpui-black .mpui-checkbox-icon,.mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-checkbox:active .mpui-black .mpui-checkbox-icon,.mpui-black .mpui-checkbox:active .mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-checkbox-icon,.mfuns-player-danmakubar .mpui-black .mpui-checkbox:active .mfuns-player-controls-panel .mpui-checkbox-icon,.mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-checkbox:active .mfuns-player-controls-panel .mpui-checkbox-icon,.mpui-black .mpui-checkbox:active .mpui-dark .mpui-checkbox-icon,.mpui-black .mpui-checkbox:active .mfuns-player.is-lightoff .mpui-checkbox-icon,.mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-checkbox:active .mpui-dark .mpui-checkbox-icon,.mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-checkbox:active .mfuns-player.is-lightoff .mpui-checkbox-icon,.mpui-dark .mpui-checkbox:active .mpui-black .mpui-checkbox-icon,.mfuns-player.is-lightoff .mpui-checkbox:active .mpui-black .mpui-checkbox-icon,.mpui-dark .mpui-checkbox:active .mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-checkbox-icon,.mfuns-player.is-lightoff .mpui-checkbox:active .mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-checkbox-icon,.mfuns-player-danmakubar .mpui-dark .mpui-checkbox:active .mfuns-player-controls-panel .mpui-checkbox-icon,.mfuns-player-danmakubar .mfuns-player.is-lightoff .mpui-checkbox:active .mfuns-player-controls-panel .mpui-checkbox-icon,.mpui-dark .mpui-checkbox:active .mpui-dark .mpui-checkbox-icon,.mfuns-player.is-lightoff .mpui-checkbox:active .mpui-dark .mpui-checkbox-icon,.mpui-dark .mpui-checkbox:active .mfuns-player.is-lightoff .mpui-checkbox-icon,.mfuns-player.is-lightoff .mpui-checkbox:active .mfuns-player.is-lightoff .mpui-checkbox-icon{border-color:var(--mp-primary-color, #7b7ff7)}.mpui-black .mpui-checkbox:active .mpui-black .mpui-checkbox-label,.mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-checkbox:active .mpui-black .mpui-checkbox-label,.mpui-black .mpui-checkbox:active .mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-checkbox-label,.mfuns-player-danmakubar .mpui-black .mpui-checkbox:active .mfuns-player-controls-panel .mpui-checkbox-label,.mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-checkbox:active .mfuns-player-controls-panel .mpui-checkbox-label,.mpui-black .mpui-checkbox:active .mpui-dark .mpui-checkbox-label,.mpui-black .mpui-checkbox:active .mfuns-player.is-lightoff .mpui-checkbox-label,.mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-checkbox:active .mpui-dark .mpui-checkbox-label,.mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-checkbox:active .mfuns-player.is-lightoff .mpui-checkbox-label,.mpui-dark .mpui-checkbox:active .mpui-black .mpui-checkbox-label,.mfuns-player.is-lightoff .mpui-checkbox:active .mpui-black .mpui-checkbox-label,.mpui-dark .mpui-checkbox:active .mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-checkbox-label,.mfuns-player.is-lightoff .mpui-checkbox:active .mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-checkbox-label,.mfuns-player-danmakubar .mpui-dark .mpui-checkbox:active .mfuns-player-controls-panel .mpui-checkbox-label,.mfuns-player-danmakubar .mfuns-player.is-lightoff .mpui-checkbox:active .mfuns-player-controls-panel .mpui-checkbox-label,.mpui-dark .mpui-checkbox:active .mpui-dark .mpui-checkbox-label,.mfuns-player.is-lightoff .mpui-checkbox:active .mpui-dark .mpui-checkbox-label,.mpui-dark .mpui-checkbox:active .mfuns-player.is-lightoff .mpui-checkbox-label,.mfuns-player.is-lightoff .mpui-checkbox:active .mfuns-player.is-lightoff .mpui-checkbox-label{color:var(--mp-primary-color, #7b7ff7)}.mpui-dark .mpui-background,.mfuns-player.is-lightoff .mpui-background,.mpui-dark .mfuns-player-controls-panel,.mfuns-player.is-lightoff .mfuns-player-controls-panel,.mpui-dark.mpui-background,.mpui-background.mfuns-player.is-lightoff,.mpui-dark.mfuns-player-controls-panel,.mfuns-player-controls-panel.mfuns-player.is-lightoff{background-color:var(--mp-bg-dark, #202020)}.mpui-black .mpui-background,.mfuns-player-danmakubar .mfuns-player-controls-panel .mpui-background,.mpui-black .mfuns-player-controls-panel,.mpui-black.mpui-background,.mpui-black.mfuns-player-controls-panel,.mfuns-player-danmakubar .mfuns-player-controls-panel{background-color:var(--mp-bg-black, rgba(32, 32, 32, .8784313725))}.mfuns-player-danmaku{position:absolute;left:0;right:0;top:0;bottom:0;color:#fff}.mfuns-player-danmaku.is-paused .mfuns-player-danmaku-item{animation-play-state:paused}.mfuns-player-danmaku-top,.mfuns-player-danmaku-bottom{position:absolute;left:50%;text-align:center;visibility:hidden;white-space:pre;will-change:visibility;animation:danmaku-show var(--duration) linear;animation-play-state:running}.mfuns-player-danmaku-item{display:inline-block;-webkit-user-select:none;user-select:none;white-space:pre;text-shadow:rgb(0,0,0) 1px 0px 1px,rgb(0,0,0) 0px 1px 1px,rgb(0,0,0) 0px -1px 1px,rgb(0,0,0) -1px 0px 1px;cursor:default}.mfuns-player-danmaku-roll{position:absolute;left:var(--offset);white-space:pre;will-change:transform;animation:danmaku-roll var(--duration) linear;animation-play-state:running}.mfuns-player-danmaku-reverse{position:absolute;right:var(--offset);white-space:pre;will-change:transform;animation:danmaku-reverse var(--duration) linear;animation-play-state:running}@keyframes danmaku-roll{0%{transform:translate(0)}to{transform:translate(var(--translateX))}}@keyframes danmaku-reverse{0%{transform:translate(0)}to{transform:translate(calc(var(--translateX) * -1))}}@keyframes danmaku-show{0%{visibility:visible}to{visibility:visible}}.mfuns-player-controller-wrap{position:absolute;bottom:-50px;left:0;right:0;height:50px;transition:bottom .4s ease}.mfuns-player-controller-mask{opacity:0;position:absolute;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;bottom:0;left:0;right:0;height:100px;pointer-events:none;transition:opacity .4s ease}.mfuns-player-controller{position:absolute;bottom:0;left:0;right:0;height:50px;margin:0 15px}.mfuns-player-controller-content{height:calc(100% - 20px);position:relative;margin:15px 0 5px;display:flex;justify-content:space-between;align-items:center;gap:20px}.mfuns-player-controller-left{height:100%;display:flex;align-items:center;flex-shrink:0}.mfuns-player-controller-right{height:100%;display:flex;justify-content:flex-end;align-items:center;flex-shrink:0}.mfuns-player-controller-center{flex-grow:1;display:flex;align-items:center;justify-content:center}.mfuns-player-controller-top{width:100%;height:14px;position:absolute;top:0;display:flex;align-items:center;cursor:pointer;box-sizing:border-box}.mfuns-player.is-active .mfuns-player-controller-wrap,.mfuns-player.is-start .mfuns-player-controller-wrap{bottom:0}.mfuns-player.is-active .mfuns-player-controller-mask,.mfuns-player.is-start .mfuns-player-controller-mask{opacity:1}.mfuns-player-header{position:absolute;top:-50px;left:0;right:0;height:50px;transition:top .4s ease;pointer-events:none}.mfuns-player-header-mask{opacity:0;position:absolute;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x top;bottom:-30px;left:0;right:0;height:100px;pointer-events:none;transition:opacity .4s ease}.mfuns-player-header-main{position:relative;bottom:0;left:0;right:0;height:50px;margin:0 15px;color:#ffffffe0;display:flex;justify-content:space-between;align-items:center}.mfuns-player-header-left{height:100%;max-width:200px;display:flex;align-items:center;flex-shrink:0}.mfuns-player-header-right{height:100%;min-width:200px;display:flex;justify-content:flex-end;align-items:center;flex-shrink:0}.mfuns-player-header-center{flex-grow:1}.mfuns-player.is-active .mfuns-player-header,.mfuns-player.is-start .mfuns-player-header{top:0}.mfuns-player.is-active .mfuns-player-header-mask,.mfuns-player.is-start .mfuns-player-header-mask{opacity:1}.mfuns-player-controls-button{position:relative;height:30px;font-size:12px;display:flex;justify-content:center;cursor:pointer}.mfuns-player-controls-button-icon{padding:0 7px;transition:transform .3s ease}.mfuns-player-controls-button-icon i{font-size:21px;line-height:30px;display:none}.mfuns-player-controls-button-icon i:nth-child(1){display:block}.mfuns-player-controls-button.is-on .mfuns-player-controls-button-icon i:nth-child(1){display:none}.mfuns-player-controls-button.is-on .mfuns-player-controls-button-icon i:nth-child(2){display:block}.mfuns-player-controls-button-text{font-weight:700;font-size:14px;line-height:30px}.mfuns-player-controls-button:hover .mpui-tooltip,.mfuns-player-controls-button:hover .mfuns-player-controls-panel-wrap{display:block}.mfuns-player-controls-button:hover .mfuns-player-controls-button-icon{transform:translateY(-2px)}.mfuns-player-controls-button:hover .mfuns-player-controls-button-icon:active{transform:translateY(1px)}.mfuns-player-controls-button.is-control .mfuns-player-controls-panel-wrap{display:block}.mfuns-player-controls-button.is-control .mfuns-player-controls-icon{transform:translateY(-2px)}.mfuns-player-controls-panel-wrap{position:absolute;left:50%;bottom:100%;transform:translate(-50%);display:none;cursor:default}.mfuns-player-controls-panel{margin-bottom:20px;border-radius:var(--mp-border-radius, 4px);overflow:hidden}.mfuns-player-videotime{width:90px;text-align:center;font-size:13px;margin:0 5px;cursor:pointer}.mfuns-player-videotime-label{width:100%;white-space:nowrap;text-align:center}.mfuns-player-videotime-input{display:none;width:60px;margin:auto;font-size:13px;text-align:center}.mfuns-player-videotime.is-input .mfuns-player-videotime-label{display:none}.mfuns-player-videotime.is-input .mfuns-player-videotime-input{display:block}.mfuns-player-videotitle{font-size:16px;white-space:nowrap}.mfuns-player-progress{position:relative;width:100%;height:4px;background-color:#ffffff40;transition:height .2s ease}.mfuns-player-progress-played{position:absolute;top:0;left:0;height:100%;background-color:var(--mp-primary-color, #7b7ff7)}.mfuns-player-progress-buffered{position:absolute;top:0;left:0;height:100%;background-color:#ffffff80}.mfuns-player-progress-thumb-track{position:absolute;top:50%;left:0;width:100%;height:0}.mfuns-player-progress-thumb{position:absolute;transform:translate(-50%,-50%) scale(0);width:14px;height:14px;background-color:var(--mp-primary-color, #7b7ff7);border-radius:7px;transition:transform,border;transition-timing-function:ease;transition-duration:.2s;box-sizing:border-box;border:4px solid white}.mfuns-player-progress-preview{position:absolute;top:-12px;width:0;height:0}.mfuns-player-progress-time{position:absolute;left:50%;bottom:0;transform:translate(-50%);display:none;height:20px;line-height:20px;padding:0 4px;font-size:12px;background-color:var(--mp-bg-black, rgba(32, 32, 32, .8784313725));color:#ffffffe0;border-radius:var(--mp-border-radius, 4px)}.mfuns-player-progress-tip{display:none;position:absolute;top:-10px}.mfuns-player-progress-tip:after{content:"";display:block;position:absolute;bottom:-10px;left:50%;transform:translate(-50%);border:5px solid;border-color:var(--mp-primary-color, #7b7ff7) transparent transparent transparent}.mfuns-player-progress.mfuns-player-progress-active{height:6px}.mfuns-player-progress.mfuns-player-progress-active .mfuns-player-progress-thumb{transform:translate(-50%,-50%) scale(1)}.mfuns-player-progress.mfuns-player-progress-active .mfuns-player-progress-tip{display:block}.mfuns-player-progress.mfuns-player-progress-active .mfuns-player-progress-time{display:inline-block}.mfuns-player-progress.mfuns-player-progress-dragging .mfuns-player-progress-thumb{border-width:2px}.mfuns-player.mode-solid .mfuns-player-progress{background-color:#e6e6e680}.mfuns-player.mode-solid .mfuns-player-progress-buffered{background-color:var(--mp-primary-color, #7b7ff7);opacity:.25}.mfuns-player.mode-solid .mfuns-player-progress-time{background-color:var(--mp-bg-light, #ffffff);color:#404040}.mfuns-player-side-wrap{display:none}.mfuns-player-side-wrap.is-show{display:block}.mfuns-player-side{position:absolute;right:20px;width:300px;top:50px;height:calc(100% - 120px);background-color:var(--mp-bg-black, rgba(32, 32, 32, .8784313725));border-radius:var(--mp-border-radius, 4px);color:#ffffffe0}.mfuns-player-side-mask{position:absolute;width:100%;height:100%}.mfuns-player-side-head{height:36px;padding:0 8px;font-size:14px;display:flex;justify-content:space-between}.mfuns-player-side-title{line-height:36px}.mfuns-player-side-content{height:calc(100% - 36px);overflow:hidden}.mfuns-player-side-content>*{position:relative;width:100%;height:100%;display:none}.mfuns-player-side-content>*.is-show{display:block}.mfuns-player-side-close{position:absolute;right:0;cursor:pointer}.mfuns-player-side-close i{padding:0 8px;font-size:21px;line-height:36px}.mfuns-player-side-panel{position:relative;width:100%;height:100%}.mfuns-player-side .mfuns-player-side-panel{display:none}.mfuns-player-side .mfuns-player-side-panel.is-show{display:block}.mfuns-player-modal-wrap{display:none}.mfuns-player-modal-wrap.is-show{display:block}.mfuns-player-modal{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);min-width:200px;min-height:150px;background-color:var(--mp-bg-black, rgba(32, 32, 32, .8784313725));border-radius:var(--mp-border-radius, 4px);color:#ffffffe0}.mfuns-player-modal-mask{position:absolute;width:100%;height:100%}.mfuns-player-modal-head{position:relative;height:30px;font-size:14px}.mfuns-player-modal-title{position:absolute;width:100%;text-align:center;line-height:36px}.mfuns-player-modal-close{position:absolute;right:0;cursor:pointer}.mfuns-player-modal-close i{padding:0 8px;font-size:21px;line-height:36px}.mfuns-player-modal-content>*{position:relative;width:100%;height:100%;display:none}.mfuns-player-modal-content>*.is-show{display:block}.mfuns-player-modal .mfuns-player-controller-icon{cursor:pointer;font-size:21px;line-height:30px}.mfuns-player-contextmenu-wrap{display:none}.mfuns-player-contextmenu-wrap.is-show{display:block}.mfuns-player-contextmenu{-webkit-user-select:none;user-select:none;position:absolute;min-width:200px;color:#ffffffe0}.mfuns-player-contextmenu li{height:36px;line-height:36px;cursor:pointer;padding:0 10px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mfuns-player-contextmenu li+li{border-top:1px solid rgba(255,255,255,.2509803922)}.mfuns-player-contextmenu li:hover{background-color:#ffffff40}.mfuns-player-contextmenu>ul{background-color:var(--mp-bg-black, rgba(32, 32, 32, .8784313725));border-radius:var(--mp-border-radius, 4px);overflow:hidden;margin-bottom:4px}.mfuns-player-contextmenu>ul:last-child{margin-bottom:0}.mfuns-player-contextmenu-danmaku{max-width:400px}.mfuns-player-contextmenu-danmaku-item{display:flex;justify-content:space-between}.mfuns-player-contextmenu-danmaku-item-content{flex-grow:1}.mfuns-player-contextmenu-danmaku-item-operate{display:flex;flex-shrink:0}.mfuns-player-contextmenu-danmaku-item-operate-btn{padding:0 4px}.mfuns-player-contextmenu-danmaku-item-operate-btn:hover{background-color:#ffffff40}.mfuns-player-footbar{height:40px;width:100%;display:flex;position:relative;bottom:0;left:0;justify-content:space-between;align-items:center;background-color:var(--mp-bg-light, #ffffff);border-top:none;box-sizing:border-box;color:#404040}.mfuns-player-footbar-left{display:flex;flex-shrink:0;height:100%;align-items:center}.mfuns-player-footbar-left :first-child{padding-left:4px}.mfuns-player-footbar-right{display:flex;flex-grow:1;height:100%;justify-content:flex-end}.mpui-dark .mfuns-player-footbar,.mfuns-player.is-lightoff .mfuns-player-footbar{background-color:var(--mp-bg-dark, #202020);color:#ffffffe0}.mfuns-player-button-volume .mpicon-volume-off,.mfuns-player-button-volume.is-muted .mpicon-volume{display:none}.mfuns-player-button-volume.is-muted .mpicon-volume-off{display:block}.mfuns-player-button-volume-value{width:100%;text-align:center;padding-bottom:4px}.mfuns-player-button-volume-slider{width:100%;height:60px}.mfuns-player-button-volume .mfuns-player-controls-panel{width:30px;padding:4px 0 6px}.mfuns-player-button-settings .mfuns-player-controls-panel{width:250px;padding:5px 15px}.mfuns-player-button-part{display:none}.mfuns-player-button-part.is-show{display:flex}.mfuns-player-button-quality-list{min-width:50px;height:100%}.mfuns-player-button-quality-item{white-space:nowrap;padding:0 8px;height:30px;line-height:30px;display:flex;cursor:pointer}.mfuns-player-button-quality-item:hover{background-color:#ffffff40}.mfuns-player-button-quality-item.is-selected{color:var(--mp-primary-color, #7b7ff7)}.mfuns-player-button-next:hover .mfuns-player-controls-button-icon{transform:translate(2px)}.mfuns-player-button-next:hover .mfuns-player-controls-button-icon:active{transform:translate(-1px)}.mfuns-player-button-prev:hover .mfuns-player-controls-button-icon{transform:translate(-2px)}.mfuns-player-button-prev:hover .mfuns-player-controls-button-icon:active{transform:translate(1px)}.mfuns-player-button-next,.mfuns-player-button-prev{display:flex}.mfuns-player-button-next.is-disabled,.mfuns-player-button-prev.is-disabled{color:#ffffff80;cursor:not-allowed}.mfuns-player-button-next.is-disabled.is-autohide,.mfuns-player-button-prev.is-disabled.is-autohide{display:none}.mfuns-player-button-next.is-disabled:hover .mfuns-player-controls-button-icon,.mfuns-player-button-prev.is-disabled:hover .mfuns-player-controls-button-icon,.mfuns-player-button-next.is-disabled:hover .mfuns-player-controls-button-icon:active,.mfuns-player-button-prev.is-disabled:hover .mfuns-player-controls-button-icon:active{transform:unset}.mfuns-player-button-next.is-hidden,.mfuns-player-button-prev.is-hidden{display:none}.mfuns-player-button-next .mfuns-player-controls-button-icon i,.mfuns-player-button-prev .mfuns-player-controls-button-icon i{font-size:16px}.mfuns-player.is-webscreen .mfuns-player-button-widescreen,.mfuns-player.is-fullscreen .mfuns-player-button-widescreen,.mfuns-player-button-danmakutoggle .mpicon-danmaku{display:none}.mfuns-player-button-danmakutoggle.is-on{color:var(--mp-primary-color, #7b7ff7)}.mfuns-player-button-danmakusettings .mfuns-player-controls-panel{width:270px;padding:5px 15px}.mfuns-player-button-danmakusettings .mfuns-player-slider-wrap{width:160px}.mfuns-player-button-danmakustyle .mfuns-player-controls-panel{width:250px;padding:5px 15px}.mfuns-player-danmaku-style-color-input{width:60px}.mfuns-player-danmaku-style-color-preview{width:36px;height:18px;border:2px solid rgba(255,255,255,.6274509804);border-radius:var(--mp-border-radius, 4px);margin-left:8px}.mfuns-player-danmaku-style-color-dropper{margin-left:5px}.mfuns-player-danmaku-style-color-picker{margin-top:8px;margin-left:30px}.mfuns-player-danmaku-style-color-picker .mpui-picker-item{border:none;padding:0}.mfuns-player-danmaku-style-color-picker .mpui-picker-item>div{width:12px;height:12px;border:2px solid rgba(0,0,0,.2509803922);border-radius:var(--mp-border-radius, 4px)}.mfuns-player-danmaku-style-color-picker .mpui-picker-item.is-checked{border:none}.mfuns-player-danmaku-style-color-picker .mpui-picker-item.is-checked>div{border-color:#fff}.mode-solid .mfuns-player-danmaku-style-color-preview{border-color:#00000040}.mode-solid .mfuns-player-danmaku-style-color-picker .mfuns-player-picker-item>div{border-color:#00000020;border-radius:var(--mp-border-radius, 4px)}.mode-solid .mfuns-player-danmaku-style-color-picker .mfuns-player-picker-item.is-checked>div{border-color:#00000080}.mfuns-player-hotkeys-list{padding:5px 0;max-height:200px;overflow-y:auto}.mfuns-player-hotkeys-list-item{height:30px;line-height:30px;text-align:center}.mfuns-player-hotkeys-list-key{display:inline-block;width:80px}.mfuns-player-hotkeys-list-description{display:inline-block;width:180px}.mfuns-player-about{padding:10px}.mfuns-player-about-logo{width:360px;height:60px;background-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20120%2020'%3e%3cpath%20d='M.896,13.75977v-11.52H3.45605L7.35986,6.896,11.248,2.23975h2.57617v11.52H11.32813v-7.728L7.35986,10.76758,3.376,6.04785v7.71192Z'%20style='fill:%23fff'/%3e%3cpath%20d='M15.69629,13.75977v-10a2.18059,2.18059,0,0,1,.31982-1.15186,2.48209,2.48209,0,0,1,.84815-.84814,2.20945,2.20945,0,0,1,1.168-.31983H21.584V3.90381H18.144V4.48H21.584V6.92773H18.144v6.832Z'%20style='fill:%23fff'/%3e%3cpath%20d='M24.04736,13.43994a2.41285,2.41285,0,0,1-.83984-.84814,2.22332,2.22332,0,0,1-.312-1.15186V4.48h2.44775v6.83154h4.51221V4.48h2.44775v6.96a2.22332,2.22332,0,0,1-.312,1.15186,2.41285,2.41285,0,0,1-.83984.84814,2.21068,2.21068,0,0,1-1.168.31983H25.21533A2.20945,2.20945,0,0,1,24.04736,13.43994Z'%20style='fill:%23fff'/%3e%3cpath%20d='M34.03125,13.75977V4.48h7.08838a2.21076,2.21076,0,0,1,1.168.31982,2.41288,2.41288,0,0,1,.83984.84815,2.22331,2.22331,0,0,1,.312,1.15185v6.96H40.9917v-6.832H36.47949v6.832Z'%20style='fill:%23fff'/%3e%3cpath%20d='M45.91992,13.43994a2.48215,2.48215,0,0,1-.84814-.84814,2.1806,2.1806,0,0,1-.31983-1.15186v-.46435h2.44776v.33593h4.5122v-.96H47.07178a2.18059,2.18059,0,0,1-1.15186-.31982,2.48218,2.48218,0,0,1-.84814-.84815A2.18059,2.18059,0,0,1,44.752,8.03174V6.7998A2.18059,2.18059,0,0,1,45.07178,5.648a2.48218,2.48218,0,0,1,.84814-.84815A2.18068,2.18068,0,0,1,47.07178,4.48h4.76806a2.20953,2.20953,0,0,1,1.168.31982A2.48221,2.48221,0,0,1,53.856,5.648a2.18058,2.18058,0,0,1,.31982,1.15185v.46387H51.71191V6.92773h-4.5122v.96h4.64013a2.20985,2.20985,0,0,1,1.168.32031,2.48077,2.48077,0,0,1,.84815.84765,2.18228,2.18228,0,0,1,.31982,1.15235v1.23193A2.18059,2.18059,0,0,1,53.856,12.5918a2.48218,2.48218,0,0,1-.84815.84814,2.20945,2.20945,0,0,1-1.168.31983H47.07178A2.1806,2.1806,0,0,1,45.91992,13.43994Z'%20style='fill:%23fff'/%3e%3cpath%20d='M61.00732,13.75977V2.25586h9.6001a1.84742,1.84742,0,0,1,.96778.26367,1.9812,1.9812,0,0,1,.69628.69629,1.85,1.85,0,0,1,.25586.96v3.376a1.85,1.85,0,0,1-.25586.96,1.98128,1.98128,0,0,1-.69628.69629,1.84742,1.84742,0,0,1-.96778.26367h-8.3042v4.28809Zm1.91993-5.6001h7.68017a.61483.61483,0,0,0,.43994-.17578.5747.5747,0,0,0,.18409-.43213v-3.376a.62856.62856,0,0,0-.624-.624H62.92725a.62854.62854,0,0,0-.624.624v3.376a.57473.57473,0,0,0,.18408.43213A.614.614,0,0,0,62.92725,8.15967Z'%20style='fill:%23fff'/%3e%3cpath%20d='M74.56689,13.49561a2.01455,2.01455,0,0,1-.70361-.70362,1.845,1.845,0,0,1-.26416-.96826V1.43994h1.312V11.82373a.62854.62854,0,0,0,.624.624H77.103v1.312H75.53516A1.845,1.845,0,0,1,74.56689,13.49561Z'%20style='fill:%23fff'/%3e%3cpath%20d='M80.207,13.75977a1.845,1.845,0,0,1-.96826-.26416,2.01446,2.01446,0,0,1-.70361-.70362,1.845,1.845,0,0,1-.26416-.96826V8.46387h8.12793V6.41553a.62773.62773,0,0,0-.624-.62354H78.271V4.48h7.5039a1.877,1.877,0,0,1,.98389.26367,2.02128,2.02128,0,0,1,.7041.7041,1.84453,1.84453,0,0,1,.26416.96778v7.34424Zm0-1.312h6.1919V9.77588H79.583v2.04785a.62854.62854,0,0,0,.624.624Z'%20style='fill:%23fff'/%3e%3cpath%20d='M90.92627,17.43994V16.11182h5.792a.62772.62772,0,0,0,.624-.624v-1.728h-6.1919a1.842,1.842,0,0,1-.96777-.26416,2.01585,2.01585,0,0,1-.7041-.70362,1.845,1.845,0,0,1-.26416-.96826v-7.312h1.312v7.312a.62854.62854,0,0,0,.624.624h5.56787a.62771.62771,0,0,0,.624-.624v-7.312h1.312V15.48779a1.92385,1.92385,0,0,1-.25586.98389,1.95831,1.95831,0,0,1-.6958.7041,1.8791,1.8791,0,0,1-.98438.26416Z'%20style='fill:%23fff'/%3e%3cpath%20d='M100.96729,13.49561a2.01587,2.01587,0,0,1-.70411-.70362,1.845,1.845,0,0,1-.26416-.96826V6.41553a1.84453,1.84453,0,0,1,.26416-.96778,2.02131,2.02131,0,0,1,.70411-.7041,1.84611,1.84611,0,0,1,.96777-.26367h5.56787a1.87868,1.87868,0,0,1,.98437.26367,2.024,2.024,0,0,1,.70362.7041,1.84453,1.84453,0,0,1,.26416.96778V9.77588h-8.144v2.04785a.62854.62854,0,0,0,.624.624h7.52v1.312h-7.52A1.842,1.842,0,0,1,100.96729,13.49561Zm.34375-5.03174H108.127V6.41553a.62771.62771,0,0,0-.624-.62354h-5.56787a.62771.62771,0,0,0-.624.62354Z'%20style='fill:%23fff'/%3e%3cpath%20d='M111.00684,13.75977V6.41553a1.84453,1.84453,0,0,1,.26416-.96778,2.01989,2.01989,0,0,1,.70361-.7041,1.8491,1.8491,0,0,1,.96826-.26367h5.21582V5.792h-5.21582a.62771.62771,0,0,0-.624.62354v7.34424Z'%20style='fill:%23fff'/%3e%3c/svg%3e");background-size:cover}.mfuns-player-about a{color:var(--mp-primary-color, #7b7ff7)}.mfuns-player-about-developers li{display:inline}.mfuns-player-partlist-list{scrollbar-width:thin;height:100%;overflow-y:auto}.mfuns-player-partlist-list::-webkit-scrollbar{width:5px}.mfuns-player-partlist-list::-webkit-scrollbar-thumb{background-color:gray}.mfuns-player-partlist-item{padding:0 8px;height:30px;line-height:30px;display:flex;cursor:pointer}.mfuns-player-partlist-item:hover{background-color:#ffffff40}.mfuns-player-partlist-item.is-selected{color:var(--mp-primary-color, #7b7ff7)}.mfuns-player-partlist-item-id{display:inline-block;width:40px;flex-shrink:0}.mfuns-player-partlist-item-title{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mfuns-player-panel-row{display:flex;padding:5px 0}.mfuns-player-row-label{flex-shrink:0;height:22px;line-height:22px;padding-right:10px}.mfuns-player-row-value{height:22px;line-height:22px;padding-left:10px}.mfuns-player-videostatus{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mfuns-player-videostatus-paused{display:none;position:absolute;bottom:60px;right:20px;width:65px;height:55px;background:url(data:image/png;base64,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);background-size:100% 100%}.mfuns-player-videostatus-loading{display:none;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:100px}.mfuns-player-videostatus-loading-icon{width:100%;display:flex;justify-content:center;align-items:center;font-size:16px;font-weight:700;height:35px}.mfuns-player-videostatus-loading-icon>span{width:20px;height:35px;font-size:16px;text-align:center;line-height:16px;color:var(--mp-primary-color, #7b7ff7);animation:loading-float 1.4s ease-in-out infinite;text-shadow:1px 1px #666}.mfuns-player-videostatus-loading-icon>span:nth-child(2){animation-delay:-1.2s}.mfuns-player-videostatus-loading-icon>span:nth-child(3){animation-delay:-1s}.mfuns-player-videostatus-loading-icon>span:nth-child(4){animation-delay:-.8s}.mfuns-player-videostatus-loading-icon>span:nth-child(5){animation-delay:-.6s}.mfuns-player-videostatus-loading-icon>span:nth-child(6){animation-delay:-.4s}.mfuns-player-videostatus-loading-icon>span:nth-child(7){animation-delay:-.2s}.mfuns-player-videostatus-loading-content{width:100%;text-align:center;font-size:14px;font-weight:700;color:#fff;text-shadow:1px 1px #666}.mfuns-player-videostatus-volume{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);display:none;color:#fff;background-color:var(--mp-bg-black, rgba(32, 32, 32, .8784313725));border-radius:var(--mp-border-radius, 4px);padding:0 8px;height:40px;text-align:center;line-height:40px;font-size:16px}.mfuns-player-videostatus-volume.is-show,.mfuns-player.is-paused .mfuns-player-videostatus-paused,.mfuns-player.is-loading .mfuns-player-videostatus-loading{display:block}@keyframes loading-float{0%,to{height:35px}50%{height:20px}}.mfuns-player-danmakubar{display:flex;flex-grow:1;justify-content:space-between;align-items:center;height:100%;max-width:600px}.mfuns-player-danmakubar .mfuns-player-danmakubar-status-loading,.mfuns-player-danmakubar .mfuns-player-danmakubar-status-login{display:none;padding-left:10px}.mfuns-player-danmakubar .mfuns-player-danmakubar-status-login a{color:var(--mp-primary-color, #7b7ff7);cursor:pointer}.mfuns-player-danmakubar .mfuns-player-controller-icon-wrap{padding:0 5px}.mfuns-player-danmakubar.is-login .mfuns-player-danmakubar-input,.mfuns-player-danmakubar.is-login .mfuns-player-danmakubar-input-slot{display:none}.mfuns-player-danmakubar.is-login .mfuns-player-danmakubar-input-wrap{background-color:#ffffff80}.mfuns-player-danmakubar.is-login .mfuns-player-danmakubar-status-login{display:block}.mfuns-player-danmakubar.is-login .mfuns-player-danmakubar-send{background-color:#aaa;pointer-events:none;cursor:not-allowed}.mfuns-player-danmakubar.is-loading .mfuns-player-controls-button{pointer-events:none}.mfuns-player-danmakubar.is-loading .mfuns-player-danmakubar-input-wrap{background-image:linear-gradient(90deg,#e6e6e680 10%,#f0f0f080 24%,#f6f6f680 32%,#f6f6f680 68%,#f0f0f080 76%,#e6e6e680 90%);background-size:200% 100%;background-position:0% 0%;animation:skeleton-loading 1.4s linear infinite;cursor:not-allowed}.mfuns-player-danmakubar.is-loading .mfuns-player-danmakubar-input,.mfuns-player-danmakubar.is-loading .mfuns-player-danmakubar-input-slot{display:none}.mfuns-player-danmakubar.is-loading .mfuns-player-danmakubar-status-loading{display:block}.mfuns-player-danmakubar.is-loading .mfuns-player-danmakubar-status-login{display:none!important}.mfuns-player-danmakubar.is-loading .mfuns-player-danmakubar-send{background-color:#aaa;pointer-events:none;cursor:not-allowed}.mfuns-player-danmakubar-outer,.mfuns-player-danmakubar-left,.mfuns-player-danmakubar-right{display:flex;flex-shrink:0}.mfuns-player-danmakubar-input-wrap{display:flex;flex-grow:1;align-items:center;position:relative;height:100%;background-color:#ffffff40;border-radius:var(--mp-border-radius, 4px)}.mfuns-player-danmakubar-input{font-size:13px;flex:5;height:30px;outline:none;border:none;margin-left:5px;color:#ffffffe0;background-color:transparent;box-sizing:border-box;width:0}.mfuns-player-danmakubar-input::-webkit-input-placeholder{color:#ffffff80}.mfuns-player-danmakubar-status-loading{font-size:13px;flex:5;height:32px;line-height:32px;color:#999;box-sizing:border-box;display:none}.mfuns-player-danmakubar-status-login{font-size:13px;flex:5;height:32px;line-height:32px;box-sizing:border-box;display:none}.mfuns-player-danmakubar-send{width:60px;display:flex;align-items:center;justify-content:center;height:30px;font-size:12px;color:#fff;background:var(--mp-primary-color, #7b7ff7);border-radius:0 var(--mp-border-radius, 4px) var(--mp-border-radius, 4px) 0;cursor:pointer}.mfuns-player-footbar{height:40px}.mfuns-player-footbar .mfuns-player-danmakubar{max-width:unset}.mfuns-player-footbar .mfuns-player-danmakubar .mfuns-player-controller-icon-wrap{padding:0 7px}.mfuns-player-footbar .mfuns-player-danmakubar-input-wrap{height:100%;border-left:1px solid #e6e6e6;border-radius:0;background-color:transparent}.mfuns-player-footbar .mfuns-player-danmakubar-input{font-family:inherit;height:100%;margin-left:5px;color:#404040}.mfuns-player-footbar .mfuns-player-danmakubar-input::-webkit-input-placeholder{color:gray}.mfuns-player-footbar .mfuns-player-danmakubar-send{background:var(--mp-primary-color, #7b7ff7);border-radius:var(--mp-border-radius, 4px);margin-right:6px}.mfuns-player-footbar .mfuns-player-danmakubar-send.is-disabled{background:#e6e6e6;color:gray;cursor:not-allowed}.mfuns-player-footbar .mfuns-player-danmakubar.is-login .mfuns-player-danmakubar-input,.mfuns-player-footbar .mfuns-player-danmakubar.is-login .mfuns-player-danmakubar-input-slot{display:none}.mfuns-player-footbar .mfuns-player-danmakubar.is-login .mfuns-player-danmakubar-input-wrap{background-color:#e6e6e6}.mfuns-player-footbar .mfuns-player-danmakubar.is-login .mfuns-player-danmakubar-status-login{display:block}.mpui-dark .mfuns-player-danmakubar-input-wrap,.mfuns-player.is-lightoff .mfuns-player-danmakubar-input-wrap{border-left:1px solid rgba(255,255,255,.2509803922)}.mpui-dark .mfuns-player-danmakubar.is-login .mfuns-player-danmakubar-input-wrap,.mfuns-player.is-lightoff .mfuns-player-danmakubar.is-login .mfuns-player-danmakubar-input-wrap{background-color:#ffffff40}.mfuns-player-footbar .mfuns-player-danmakubar.is-loading .mfuns-player-danmakubar-input-wrap{background-image:linear-gradient(90deg,#e6e6e6 10%,#f0f0f0 24%,#f6f6f6 32%,#f6f6f6 68%,#f0f0f0 76%,#e6e6e6 90%);background-size:200% 100%;background-position:0% 0%;animation:skeleton-loading 1.4s linear infinite}.mpui-dark .mfuns-player-danmakubar.is-loading .mfuns-player-danmakubar-input-wrap,.mfuns-player.is-lightoff .mfuns-player-danmakubar.is-loading .mfuns-player-danmakubar-input-wrap{background-image:linear-gradient(90deg,#555 10%,#444 24%,#333 32%,#333 68%,#444 76%,#555 90%);background-size:200% 100%;background-position:0% 0%;animation:skeleton-loading 1.4s linear infinite}.mfuns-player-danmakucount{margin:4px;min-width:80px}@keyframes skeleton-loading{0%{background-position:200% 0%}to{background-position:0% 100%}}.mfuns-player-settings-play,.mfuns-player-settings-others{display:flex;flex-wrap:wrap;gap:0 10px}.mfuns-player-loadingmask{position:absolute;width:100%;height:100%;left:0;top:0;display:none;background:#000;flex-direction:column;overflow:hidden;color:#ffffffe0}.mfuns-player-loadingmask.is-show{display:flex}.mfuns-player-loadingmask-info{display:flex;flex-direction:column;justify-content:end;flex-grow:1;padding:8px}.mfuns-player-loadingmask-tips{flex-shrink:0;height:24px;padding:0 8px}.mfuns-player-loadingmask-icon{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.mfuns-player-loadingmask-image{width:96px;height:96px;background:url(data:image/gif;base64,R0lGODdhQABAAHcAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAQABAAIAAAAAAAAAC/4SPqcvtD6OctNqLs94w+M85H0iNY7iYp6SS6NG6Tby+AO09uMztOdO6qV4mYRF4DIaGxhqCaVBujlEqzFrFWqBZnu9b0X7HZB35jNY+0+yzqB2b4N4+25qrkNrNvxlvTxfAJwgY4ZTyV4jYh8So2Ejo5xiW2FF5NQl5F1ly2YXJ2cV5yOLZBDoKRWpoWmMltWqZuYlKSNMUWjoLupl2Ectb67bVKgOHAfzZu3L7Wzyph0e5q/womZuQbK2t/chtqhEXfE0M16ypa75DzqoOtoidZ467Lk8t2t2+2q3Xo8afr1wmgOCQJSJ4z9m+b+cE/mNYZlkdewndRaRoMWOgjBlt0nGcE46NtZEkS5o8iTKlypUsW7p8qagAACH5BAkKAAAALAAAAABAAEAAgAAAAAAAAAL/hI+py+0Po5y02otl2Dxk3VHd+EGjF51kyajb44asEqNtzc0J3pzHqgPgbDufwajzIX9AZi65Wh6bU1lpiaU6XyxpMxu7WrfDchlmTqtV6LVb3X7zEOl4LXjj9rT4vT7/1xdnJwgSSDNW6Ee0wKdYdAgZ+Uj3tFg52ZeI+LcJeOGJSTT2FTroQGoplKo6YVo1KsO2+nqJqkriApt5y0sb+4ZRmxgs3MrJWAx6LCmZO2vMvOXc6ej6Wktp/UtpIg07sybay2gnF2brfX6WTr7OjqwOD3gXb/6dgt7s7lsBPc6vEJ9h2TJ4Iojvw8CEUsIt9PVPTMNf5aj122Wm0buNHro0cvyYCeRHeXXOdTuJMqXKlSxbunwJM6bMmRAKAAAh+QQJCgAAACwAAAAAQABAAIAAAAAAAAAC/4SPqcvtD6OctNqLZdg8T95pYOg94xadYOmoqOm+bBIHcD0rtc3sZO7j6UaGU+5gNA5XSCLQCVA2oVFpiapCWIvUjDQI9lHC5DKzZU6DIer2jv0+arNwmbxu7/3u6P3izNeX9+cXSDi4JGTYAKiHuDj3GKkImYjnVXh5I9QI1SUiOcV59tUISnk4SqK0dapZteICm7n52oZhailKhksrOhmGGcqVJzub61pLw9o65kuMOruIPFnJ+CxtnfoqLFat7OzWvDwMLD7+i3ceI6iO4+i9LUjX+5l+bV+PTA1dXjHO71igfAEDdouWDR/CKwSfoftnLNHCYw93xSO3LuNCjRoa53Hk9aGMuSDaSpo8iTKlypUsW7p8CXNRAQAh+QQJCgAAACwAAAAAQABAAIAAAAAAAAAC/4SPqcvtD6OctNqLs5ah++mFGxSKZPmNDGqubKsib7rMcGx3bh7EcglAKVgGok8YBCaQReZI2YQ5o7SN83o7TDFQLe/LA4HH5O2wjCaf0uzc+uvzZs+6uLjumNt3vYd+T9eXVwXY8CcnWGhIWMOouOQIiffYOFlpSfmDKYnXVXiYRNPVAjq4qZkIpRoZASplQuRJ4VqlBMfFSsUZ6oZ7isgJpkFriTacyxscdvyrq9xnVkGcmLlrSl0NfG2lhuqHfNkWrd0q3rvYjGpug44d/nJ9HvhWGi/rbH9kZN2efmE2zd+/OQEBAUR2j9u9gO4GwptnT+C7fc/Wretn0dy3jBfi7ozh1TGbyJEkS5o8iTKlypUsW1IoAAA7) center/contain no-repeat;filter:invert(25%) drop-shadow(2px 2px #222);image-rendering:pixelated}.mfuns-player.mpui-white .mfuns-player-loadingmask{background:#fff;color:#404040}.mfuns-player.mpui-white .mfuns-player-loadingmask-image{filter:invert(10%) drop-shadow(2px 2px #aaa)}.mfuns-player-mini{background-color:#000;position:fixed;width:400px;height:225px;right:40px;bottom:40px;display:none;overflow:hidden}.mfuns-player-mini.is-show{display:block}.mfuns-player.is-lightoff{position:relative;z-index:233333}.mfuns-player-lightoff-mask{display:none;z-index:-10;opacity:.9;background-color:#000;position:fixed;top:0;bottom:0;left:0;right:0}.mfuns-player.is-lightoff .mfuns-player-lightoff-mask{display:block}.mfuns-player .mfuns-player-content{padding:var(--padding, 0)}.mfuns-player.is-widescreen .mfuns-player-video-wrap,.mfuns-player.is-webscreen .mfuns-player-video-wrap,.mfuns-player.is-fullscreen .mfuns-player-video-wrap{padding:0}.mfuns-player-toast{position:absolute;bottom:60px;left:20px}.mfuns-player-toast-item{font-size:14px;border-radius:var(--mp-border-radius, 4px);background-color:var(--mp-bg-black, rgba(32, 32, 32, .8784313725));color:#ffffffe0;height:30px;margin-bottom:4px;width:fit-content;display:flex;align-items:center}.mfuns-player-toast-item-content{line-height:30px;padding:0 8px}.mfuns-player-toast-item-close{padding:0 8px}.mfuns-player-toast a{color:var(--mp-primary-color, #7b7ff7)}.mfuns-player-danmakulist{-webkit-user-select:none;user-select:none;width:100%;height:100%;box-sizing:border-box;font-size:12px}.mfuns-player-danmakulist .list-row,.mfuns-player-danmakulist .mfuns-player-danmakulist-head{position:relative;line-height:24px;height:24px;white-space:nowrap}.mfuns-player-danmakulist-head{box-shadow:1px 0 2px #ccc}.mfuns-player-danmakulist-head :hover{background-color:#e6e6e633}.mfuns-player-danmakulist-select{position:absolute;box-sizing:border-box;line-height:24px;height:24px;width:100%;top:0;padding:0 8px;justify-content:space-between;display:none;background:#fff}.mfuns-player-danmakulist-select.is-show{display:flex}.mfuns-player-danmakulist-container .list-row:hover,.mfuns-player-danmakulist-container .mfuns-player-danmakulist-head:hover{background-color:#e6e6e633}.mfuns-player-danmakulist-container .list-row:hover .list-operate,.mfuns-player-danmakulist-container .mfuns-player-danmakulist-head:hover .list-operate{display:flex}.mfuns-player-danmakulist-container .list-row:hover .col-date,.mfuns-player-danmakulist-container .mfuns-player-danmakulist-head:hover .col-date{visibility:hidden}.mfuns-player-danmakulist-container .list-row.is-selected,.mfuns-player-danmakulist-container .is-selected.mfuns-player-danmakulist-head{color:var(--mp-primary-color, #7b7ff7);background-color:#e6e6e680}.mfuns-player-danmakulist-container .list-row.is-focus,.mfuns-player-danmakulist-container .is-focus.mfuns-player-danmakulist-head{color:var(--mp-primary-color, #7b7ff7);background-color:#e6e6e6}.mfuns-player-danmakulist .list-column,.mfuns-player-danmakulist .list-cell{box-sizing:content-box;display:inline-block;height:100%;padding:0 4px;overflow:hidden}.mfuns-player-danmakulist .list-column.col-time,.mfuns-player-danmakulist .list-cell.col-time{padding-left:8px;width:40px}.mfuns-player-danmakulist .list-column.col-date,.mfuns-player-danmakulist .list-cell.col-date{padding-right:8px;width:90px;text-align:center}.mfuns-player-danmakulist .list-column.col-content,.mfuns-player-danmakulist .list-cell.col-content{width:calc(100% - 162px);text-overflow:ellipsis;white-space:overflow}.mfuns-player-danmakulist .list-operate{position:absolute;right:0;top:0;width:100px;height:100%;display:none;justify-content:flex-end;align-items:center}.mfuns-player-danmakulist .list-operate-btn{cursor:pointer;line-height:20px;margin-left:4px;padding:0 8px;border:1px solid var(--mp-primary-color, #7b7ff7);border-radius:var(--mp-border-radius, 4px);color:var(--mp-primary-color, #7b7ff7)}.mfuns-player-danmakulist-main{position:relative;overflow:hidden;width:100%;height:calc(100% - 40px)}.mfuns-player-danmakulist-container{overflow:hidden;position:absolute;overflow-y:auto;scrollbar-width:thin;top:24px;left:0;width:100%;height:calc(100% - 24px)}.mfuns-player-danmakulist-container::-webkit-scrollbar{width:5px}.mfuns-player-danmakulist-container::-webkit-scrollbar-thumb{background-color:gray}.mfuns-player-danmakulist-status{position:absolute;top:50%;width:100%}.mfuns-player-danmakulist-status div{text-align:center;display:none;color:gray}.mfuns-player-danmakulist-status[data-status=loading] .status-loading-text,.mfuns-player-danmakulist-status[data-status=failed] .status-failed-text,.mfuns-player-danmakulist-status[data-status=empty] .status-empty-text{display:block}.mfuns-player-danmakulist-foot{border-top:1px solid #e6e6e6;display:flex;justify-content:space-between;height:40px}.mfuns-player-danmakulist-foot-left,.mfuns-player-danmakulist-foot-right{display:flex;align-items:center}.mfuns-player-danmakulist-autoscroll{cursor:pointer;padding:4px;margin:0 4px;color:#404040}`)),document.head.appendChild(A)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
