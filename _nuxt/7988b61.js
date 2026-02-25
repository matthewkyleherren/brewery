(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    106: function (t, e, n) {
      "use strict";
      (n(30), n(26), n(7), n(41), n(18), n(42));
      var o = n(12),
        r =
          (n(25),
          n(60),
          n(38),
          n(33),
          n(21),
          n(49),
          n(122),
          n(29),
          n(37),
          n(58),
          function (t) {
            return "/" !== t.substr(-1) ? t + "/" : t;
          }),
        l = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = {
              width: e.width || 1600,
              height: e.height || 900,
              format: e.format || "webp",
              quality: e.quality || 70,
            };
          return (
            !!t &&
            (t.startsWith("https") || (t = "https:".concat(t)),
            ""
              .concat(t, "?w=")
              .concat(n.width, "&h=")
              .concat(n.height, "&fm=")
              .concat(n.format, "&q=")
              .concat(n.quality))
          );
        };
      function c(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n));
        }
        return e;
      }
      function d(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? c(Object(source), !0).forEach(function (e) {
                Object(o.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(
                  t,
                  Object.getOwnPropertyDescriptors(source),
                )
              : c(Object(source)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(source, e),
                  );
                });
        }
        return t;
      }
      e.a = function (t, e, n) {
        var o,
          c,
          v,
          h,
          f,
          m,
          w,
          y,
          x,
          O,
          _,
          C,
          $,
          S = t.$config.DEV;
        ((e = d(d({}, t.$store.state.seo), e)),
          (n = {
            title: n && n.title ? n.title : "",
            description: n && n.description ? n.description : "",
            shareImage: n && n.shareImage ? n.shareImage : "",
            noindex: S,
            canonicalPath: n.canonicalPath || !1,
          }),
          S && (n.noindex = !0));
        var T,
          k,
          j = t.$store.state.seo.name,
          L = n.description || e.description || t.$store.state.seo.description,
          P = "";
        (null !== (o = t.$store) &&
          void 0 !== o &&
          null !== (c = o.state) &&
          void 0 !== c &&
          null !== (v = c.seo) &&
          void 0 !== v &&
          null !== (h = v.shareImage) &&
          void 0 !== h &&
          null !== (f = h.file) &&
          void 0 !== f &&
          f.url &&
          (P = l(t.$store.state.seo.shareImage.file.url, {
            width: 1200,
            height: 630,
          })),
        null !== (m = n.shareImage) &&
          void 0 !== m &&
          null !== (w = m.file) &&
          void 0 !== w &&
          w.url) &&
          (P = l(
            null === (T = n.shareImage) ||
              void 0 === T ||
              null === (k = T.file) ||
              void 0 === k
              ? void 0
              : k.url,
            { width: 1200, height: 630 },
          ));
        var I =
            (null === (y = t.$store.state.seo.favicon) ||
            void 0 === y ||
            null === (x = y.file) ||
            void 0 === x
              ? void 0
              : x.url) &&
            l(t.$store.state.seo.favicon.file.url, {
              width: 32,
              height: 32,
              format: "png",
            }),
          E =
            (null === (O = t.$store.state.seo.favicon) ||
            void 0 === O ||
            null === (_ = O.file) ||
            void 0 === _
              ? void 0
              : _.url) &&
            l(t.$store.state.seo.favicon.file.url, {
              width: 16,
              height: 16,
              format: "png",
            }),
          H =
            (null === (C = t.$store.state.seo.favicon) ||
            void 0 === C ||
            null === ($ = C.file) ||
            void 0 === $
              ? void 0
              : $.url) &&
            l(t.$store.state.seo.favicon.file.url, {
              width: 180,
              height: 180,
              format: "png",
            }),
          V = "@AirCoNYC",
          M = r("".concat(t.$store.state.hostname).concat(t.$route.fullPath));
        n.canonicalPath &&
          (M = r("".concat(t.$store.state.hostname).concat(n.canonicalPath)));
        var B = e.title ? "".concat(e.title, " | ").concat(j) : j;
        return (
          n.title &&
            (B =
              n.title.includes(j) || n.title.includes("Air Company")
                ? n.title
                : "".concat(n.title, " | ").concat(j)),
          P && !P.startsWith("https") && (P = "https:".concat(P)),
          (M.includes("/goods") || M.includes("/stockists")) &&
            (n.noindex = !0),
          d(
            {},
            {
              title: B,
              meta: [
                {
                  hid: "robots",
                  name: "robots",
                  content: S
                    ? "noindex, nofollow"
                    : n.noindex
                      ? "noindex"
                      : "index, follow",
                },
                { hid: "description", name: "description", content: L },
                {
                  hid: "msapplication-TileImage",
                  name: "msapplication-TileImage",
                  content: H,
                },
                {
                  hid: "application-name",
                  name: "application-name",
                  content: j,
                },
                {
                  hid: "apple-mobile-web-app-title",
                  name: "apple-mobile-web-app-title",
                  content: j,
                },
                { hid: "og:title", name: "og:title", content: B },
                { hid: "og:site_name", name: "og:site_name", content: j },
                { hid: "og:type", name: "og:type", content: "website" },
                { hid: "og:url", name: "og:url", content: M },
                { hid: "og:image", name: "og:image", content: P },
                { hid: "og:description", name: "og:description", content: L },
                { hid: "og:locale", name: "og:locale", content: "en_US" },
                {
                  hid: "twitter:card",
                  name: "twitter:card",
                  content: "summary_large_image",
                },
                { hid: "twitter:title", name: "twitter:title", content: B },
                { hid: "twitter:url", name: "twitter:url", content: M },
                {
                  hid: "twitter:description",
                  name: "twitter:description",
                  content: L,
                },
                { hid: "twitter:image", name: "twitter:image", content: P },
                { hid: "twitter:site", name: "twitter:site", content: V },
                { hid: "twitter:creator", name: "twitter:creator", content: V },
              ],
              link: [
                { hid: "link-canonical", rel: "canonical", href: M },
                {
                  hid: "link-icon-32",
                  rel: "icon",
                  type: "image/png",
                  sizes: "32x32",
                  href: I,
                },
                {
                  hid: "link-icon-16",
                  rel: "icon",
                  type: "image/png",
                  sizes: "16x16",
                  href: E,
                },
                {
                  hid: "link-apple-touch-icon",
                  rel: "apple-touch-icon",
                  type: "image/png",
                  sizes: "180x180",
                  href: H,
                },
              ],
            },
          )
        );
      };
    },
    179: function (t, e, n) {
      "use strict";
      e.a = function (t) {
        var e = t.query,
          n = t.enablePreview;
        e.preview && n();
      };
    },
    180: function (t, e, n) {
      "use strict";
      (n(26), n(7), n(315), n(66), n(37), n(58), n(33), n(241), n(50));
      var o = n(0);
      (o.a.filter("pluralize", function (t, e) {
        return 1 === e ? t : "".concat(t, "s");
      }),
        o.a.filter("pad", function (t) {
          return t < 10 ? "0".concat(t) : t;
        }),
        o.a.filter("trim", function (param) {
          return param ? param.trim() : "";
        }));
      o.a.filter("capitalize", function (param) {
        return (
          !!param &&
          ("string" != typeof (s = param)
            ? ""
            : s.charAt(0).toUpperCase() + s.slice(1))
        );
        var s;
      });
      o.a.filter("addZero", function (param) {
        return (
          !!param &&
          (function (s) {
            if (!s || "number" != typeof s) return "";
            var t = parseInt(s);
            return t < 10 ? "0" + t : "" + t;
          })(param)
        );
      });
      var r = function (text) {
        return String(text).replace(/\n/g, "<br>");
      };
      o.a.filter("nl2br", function (param) {
        return !!param && r(param);
      });
      var l = function (text) {
        return (text = String(text).trim()).length > 0
          ? "<p>" + text.replace(/[\r\n]+/g, "</p><p>") + "</p>"
          : null;
      };
      (o.a.filter("nl2p", function (param) {
        return !!param && l(param);
      }),
        o.a.filter("addDotIfNeeded", function (param) {
          return !!param && param.replace(/([^.?!])$/, "$1.");
        }));
      var c = function (text) {
          if (!text) return !1;
          var t = text.replace(/CO2/g, "CO<sub>2</sub>");
          return (t = (t = (t = (t = (t = (t = (t = t.replace(
            /O2/g,
            "O<sub>2</sub>",
          )).replace(/O3/g, "O<sub>3</sub>")).replace(
            /H2/g,
            "H<sub>2</sub>",
          )).replace(/H3/g, "H<sub>3</sub>")).replace(
            /H5/g,
            "H<sub>5</sub>",
          )).replace(/O3/g, "O<sub>3</sub>")).replace(
            /N2O/g,
            "N<sub>2</sub>O",
          ));
        },
        d = function (text) {
          return !!text && text.replace(/\*(.*?)\*/g, "<u>$1</u>");
        },
        v = function (text) {
          return text
            ? text.replace(/\[([^]*?)\]\(([^]*?)\)/g, function (t, text, e) {
                return "grey" === e
                  ? '<span class="color-'
                      .concat(e, '">')
                      .concat(text, "</span>")
                  : (e.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
                    '<span style="color: '
                      .concat(e, '">')
                      .concat(text, "</span>"));
              })
            : "";
        };
      (o.a.filter("co2", function (param) {
        return Array.isArray(param)
          ? param.map(function (t) {
              return d(c(t));
            })
          : param
            ? r(d(c(v(param))))
            : "";
      }),
        o.a.filter("co2nl2p", function (param) {
          return Array.isArray(param)
            ? param.map(function (t) {
                return d(c(t));
              })
            : param
              ? l(d(c(v(param))))
              : "";
        }));
    },
    181: function (t, e, n) {
      "use strict";
      var o = n(0),
        r = n(306),
        l = n.n(r);
      o.a.component("RichTextRenderer", l.a);
    },
    182: function (t, e, n) {
      "use strict";
      n(505);
      var o = n(134),
        r = n(135),
        l = n(307),
        c = n(314),
        d = n(104),
        v = n(313),
        h = (n(7), n(18), n(79));
      n(507);
      function f(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            o = Object(d.a)(t);
          if (e) {
            var r = Object(d.a)(this).constructor;
            n = Reflect.construct(o, arguments, r);
          } else n = o.apply(this, arguments);
          return Object(c.a)(this, n);
        };
      }
      var m = (function (t) {
        Object(l.a)(n, t);
        var e = f(n);
        function n() {
          return (Object(o.a)(this, n), e.call(this));
        }
        return (
          Object(r.a)(
            n,
            [
              {
                key: "disconnectedCallback",
                value: function () {
                  (this.hls && this.hls.destroy(),
                    (this.src = ""),
                    this.load(),
                    this.remove());
                },
              },
              {
                key: "attributeChangedCallback",
                value: function (t, e, n) {
                  var o = this;
                  if (
                    (console.log("attributeChangedCallback", t, e, n),
                    n && e !== n && !(-1 < n.indexOf("blob:http")))
                  )
                    switch (t) {
                      case "src":
                        (this.hls && this.hls.destroy(),
                          (this.hls = new h.a({
                            capLevelToPlayerSize: !0,
                            startLevel: 3,
                          })),
                          this.hls.attachMedia(this),
                          this.hls.loadSource(n));
                        break;
                      case "data-src":
                        var r = new IntersectionObserver(
                          function (t) {
                            t.forEach(function (t) {
                              t.isIntersecting &&
                                ((o.src = o.dataset.src), r.disconnect());
                            });
                          },
                          { rootMargin: window.innerHeight + "px 0px" },
                        );
                        r.observe(this);
                    }
                },
              },
            ],
            [
              {
                key: "observedAttributes",
                get: function () {
                  return ["src", "data-src"];
                },
              },
            ],
          ),
          n
        );
      })(Object(v.a)(HTMLVideoElement));
      customElements.define("hls-js", m, { extends: "video" });
    },
    183: function (t, e, n) {
      "use strict";
      var o = n(0),
        r = n(308),
        l = n.n(r);
      o.a.use(l.a);
    },
    184: function (t, e, n) {
      "use strict";
      n(158);
      function o(t, e, n) {
        var o = e.arg,
          r = n.context,
          l = n.componentInstance || n.elm;
        (r.$refs.hasOwnProperty(o) || (r.$refs[o] = []),
          -1 == r.$refs[o].indexOf(l) && n.context.$refs[o].push(l));
      }
      n(0).a.directive("multi-ref", {
        bind: o,
        update: o,
        unbind: function (t, e, n, o) {
          var r = e.arg,
            l = n.context;
          if (l.$refs.hasOwnProperty(r)) {
            var c = l.$refs[r],
              d = o.componentInstance || o.elm,
              v = c.indexOf(d);
            v && c.splice(v, 1);
          }
        },
      });
    },
    185: function (t, e, n) {
      "use strict";
      (n(30), n(25), n(26), n(7), n(41), n(18), n(42));
      var o = n(12);
      (n(21), n(49), n(158));
      function r(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n));
        }
        return e;
      }
      function l(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? r(Object(source), !0).forEach(function (e) {
                Object(o.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(
                  t,
                  Object.getOwnPropertyDescriptors(source),
                )
              : r(Object(source)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(source, e),
                  );
                });
        }
        return t;
      }
      function c() {
        ((this.positionQueue = []), (this.timeQueue = []));
      }
      (n(0).a.directive("swipe", {
        bind: function (t, e, n) {
          var o,
            r,
            d = Object.assign(
              {},
              {
                minDistance: 40,
                minVelocity: 1,
                preventDefault: !1,
                stopPropagation: !1,
                detect: ["top", "bottom", "left", "right"],
              },
              e.value,
            ),
            v = { x: null, y: null },
            h = { x: null, y: null },
            f = function (t) {
              var n;
              "function" == typeof e.value
                ? e.value(t)
                : "function" ==
                    typeof (null === (n = e.value) || void 0 === n
                      ? void 0
                      : n.handler) && e.value.handler(t);
            };
          ((t.touchStartHandler = function (t) {
            (d.preventDefault && t.preventDefault(),
              d.stopPropagation && t.stopPropagation(),
              (v.x = t.touches[0].clientX),
              (v.y = t.touches[0].clientY),
              (o = new c()),
              (r = new c()));
          }),
            (t.touchMoveHandler = function (t) {
              (d.preventDefault && t.preventDefault(),
                d.stopPropagation && t.stopPropagation(),
                (h.x = t.touches[0].clientX),
                (h.y = t.touches[0].clientY),
                o.updatePosition(h.x),
                r.updatePosition(h.y));
            }),
            (t.touchEndHandler = function (t) {
              (d.preventDefault && t.preventDefault(),
                d.stopPropagation && t.stopPropagation());
              var e = {
                distanceX: h.x - v.x,
                distanceY: h.y - v.y,
                velocityX: o.getVelocity() / 1e3,
                velocityY: r.getVelocity() / 1e3,
              };
              if (
                Math.abs(e.distanceX) >= d.minDistance &&
                Math.abs(e.velocityX) >= d.minVelocity
              ) {
                if (
                  e.distanceX > 0 &&
                  ("right" === d.detect || d.detect.includes("right"))
                )
                  return (
                    f(
                      l(
                        l({ direction: "right" }, e),
                        {},
                        { target: t.target, event: t },
                      ),
                    ),
                    !1
                  );
                if (
                  e.distanceX < 0 &&
                  ("left" === d.detect || d.detect.includes("left"))
                )
                  return (
                    f(
                      l(
                        l({ direction: "left" }, e),
                        {},
                        { target: t.target, event: t },
                      ),
                    ),
                    !1
                  );
              }
              if (
                Math.abs(e.distanceY) >= d.minDistance &&
                Math.abs(e.velocityY) >= d.minVelocity
              ) {
                if (
                  e.distanceY > 0 &&
                  ("bottom" === d.detect || d.detect.includes("bottom"))
                )
                  return (
                    f(
                      l(
                        l({ direction: "bottom" }, e),
                        {},
                        { target: t.target, event: t },
                      ),
                    ),
                    !1
                  );
                if (
                  e.distanceY < 0 &&
                  ("top" === d.detect || d.detect.includes("top"))
                )
                  return (
                    f(
                      l(
                        l({ direction: "top" }, e),
                        {},
                        { target: t.target, event: t },
                      ),
                    ),
                    !1
                  );
              }
            }),
            t.addEventListener("touchstart", t.touchStartHandler),
            t.addEventListener("touchmove", t.touchMoveHandler),
            t.addEventListener("touchend", t.touchEndHandler));
        },
        unbind: function (t) {
          (t.removeEventListener("touchstart", t.touchStartHandler),
            t.removeEventListener("touchmove", t.touchMoveHandler),
            t.removeEventListener("touchend", t.touchEndHandler));
        },
      }),
        (c.prototype.reset = function () {
          (this.positionQueue.splice(0), this.timeQueue.splice(0));
        }),
        (c.prototype.pruneQueue = function (t) {
          for (; this.timeQueue.length && this.timeQueue[0] < Date.now() - t; )
            (this.timeQueue.shift(), this.positionQueue.shift());
        }),
        (c.prototype.updatePosition = function (t) {
          (this.positionQueue.push(t),
            this.timeQueue.push(Date.now()),
            this.pruneQueue(50));
        }),
        (c.prototype.getVelocity = function () {
          this.pruneQueue(1e3);
          var t = this.timeQueue.length;
          return t < 2
            ? 0
            : (this.positionQueue[t - 1] - this.positionQueue[0]) /
                ((this.timeQueue[t - 1] - this.timeQueue[0]) / 1e3);
        }));
    },
    186: function (t, e, n) {
      "use strict";
      var o = n(0),
        r = n(309),
        l = n.n(r);
      o.a.use(l.a);
    },
    187: function (t, e, n) {
      "use strict";
      e.a = function (t) {
        var e = t.$gtm,
          n = t.$config;
        (n.GA4_ID && e.init(n.GA4_ID), n.GTM_ID && e.init(n.GTM_ID));
      };
    },
    188: function (t, e, n) {
      "use strict";
      n(0).a.directive("ignore-is", {
        bind: function (t) {
          t.hasAttribute("is") && t.removeAttribute("is");
        },
      });
    },
    189: function (t, e, n) {
      "use strict";
      n.r(e);
      (n(21), n(52), n(49));
      var o = n(79),
        r = {
          mixins: [n(22).a],
          props: {
            videoUrl: { type: String, required: !0 },
            thumbnail: { type: Object, required: !0 },
            controls: { type: Boolean, required: !1, default: !1 },
            autoHideControls: { type: Boolean, required: !1, default: !1 },
            loop: { type: Boolean, required: !1, default: !0 },
            autoplay: { type: Boolean, required: !1, default: !0 },
            showProgress: { type: Boolean, default: !1 },
            muteButton: { type: Boolean, default: !0 },
            showFullscreen: { type: Boolean, default: !1 },
          },
          data: function () {
            return {
              videoEl: null,
              canPlayThrough: !1,
              hasPlayed: !1,
              muted: !0,
              playing: !1,
              hls: null,
              isFullscreen: !1,
            };
          },
          computed: {
            defaultControlsOnMobile: function () {
              return (
                !!["sm", "md"].includes(this.$mq) &&
                this.controls &&
                this.showFullscreen
              );
            },
            videoThumbnailSrc: function () {
              var t,
                e,
                n = this.thumbnail;
              return (
                !!n &&
                this.imageThumbnail(
                  null === (t = n.fields) ||
                    void 0 === t ||
                    null === (e = t.file) ||
                    void 0 === e
                    ? void 0
                    : e.url,
                  { width: 1280 },
                )
              );
            },
            thumbnailDimensions: function () {
              var t, e, n, o, r, l, c, d;
              return (
                !!this.thumbnail && {
                  width:
                    null === (t = this.thumbnail.fields) ||
                    void 0 === t ||
                    null === (e = t.file) ||
                    void 0 === e ||
                    null === (n = e.details) ||
                    void 0 === n ||
                    null === (o = n.image) ||
                    void 0 === o
                      ? void 0
                      : o.width,
                  height:
                    null === (r = this.thumbnail.fields) ||
                    void 0 === r ||
                    null === (l = r.file) ||
                    void 0 === l ||
                    null === (c = l.details) ||
                    void 0 === c ||
                    null === (d = c.image) ||
                    void 0 === d
                      ? void 0
                      : d.height,
                }
              );
            },
          },
          mounted: function () {
            this.$nextTick(this.init);
          },
          beforeDestroy: function () {},
          destroyed: function () {
            var t = this;
            this.hls &&
              setTimeout(function () {
                var e;
                (t.hls.destroy(),
                  null === (e = t.videoEl) || void 0 === e || e.load());
              }, 1e3);
          },
          methods: {
            init: function () {
              var t = this.$el.querySelector("video");
              t &&
                this.videoUrl &&
                ((this.videoEl = t),
                this.thumbnailDimensions &&
                  ((this.videoEl.width = this.thumbnailDimensions.width),
                  (this.videoEl.height = this.thumbnailDimensions.height)),
                (this.videoEl.poster = this.videoThumbnailSrc),
                (this.videoEl.src = this.videoUrl),
                this.initHls());
            },
            initHls: function () {
              var t, e;
              if (this.videoEl && this.videoUrl) {
                if (
                  (this.hls && this.hls.destroy(),
                  null === (t = this.videoEl) ||
                    void 0 === t ||
                    null === (e = t.src) ||
                    void 0 === e ||
                    !e.includes("m3u8"))
                )
                  return !1;
                ((this.hls = new o.a({
                  capLevelToPlayerSize: !0,
                  startLevel: 3,
                })),
                  this.hls.attachMedia(this.videoEl),
                  this.hls.loadSource(this.videoUrl));
              }
            },
            onPlay: function () {
              this.playing = !0;
            },
            onPause: function () {
              this.playing = !1;
            },
            onProgress: function () {
              var t;
              if (!this.videoEl || !this.showProgress) return !1;
              var progress = this.videoEl.currentTime / this.videoEl.duration;
              null === (t = this.$refs.progress) ||
                void 0 === t ||
                t.style.setProperty(
                  "--progress",
                  "".concat(100 * progress, "%"),
                );
            },
            onClickProgress: function (t) {
              if (!this.videoEl || !this.showProgress) return !1;
              t.stopPropagation();
              var rect = t.currentTarget.getBoundingClientRect(),
                progress = (t.clientX - rect.left) / rect.width;
              this.videoEl.currentTime = this.videoEl.duration * progress;
            },
            onClickPlay: function (t) {
              if (!this.videoEl) return !1;
              (t.stopPropagation(),
                this.videoEl.paused
                  ? this.videoEl.play()
                  : this.videoEl.pause());
            },
            onClickMute: function (t) {
              if (!this.videoEl) return !1;
              (t.stopPropagation(),
                (this.videoEl.muted = !this.videoEl.muted),
                (this.muted = this.videoEl.muted));
            },
            toggleFullscreen: function (t) {
              var e = !1;
              (document.fullscreenElement ||
              document.mozFullScreenElement ||
              document.webkitFullscreenElement
                ? document.cancelFullScreen
                  ? document.cancelFullScreen()
                  : document.mozCancelFullScreen
                    ? document.mozCancelFullScreen()
                    : document.webkitCancelFullScreen &&
                      document.webkitCancelFullScreen()
                : document.documentElement.requestFullscreen
                  ? (document.documentElement.requestFullscreen(), (e = !0))
                  : document.documentElement.mozRequestFullScreen
                    ? (document.documentElement.mozRequestFullScreen(),
                      (e = !0))
                    : document.documentElement.webkitRequestFullscreen &&
                      (document.documentElement.webkitRequestFullscreen(),
                      (e = !0)),
                (this.isFullscreen = e));
            },
          },
        },
        l = (n(381), n(2)),
        component = Object(l.a)(
          r,
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "section-video" }, [
              e("div", { staticClass: "video-wrapper" }, [
                t.thumbnailDimensions && t.videoUrl
                  ? e("video", {
                      ref: "video",
                      attrs: {
                        playsinline: "",
                        muted: "",
                        preload: "true",
                        poster: t.videoThumbnailSrc,
                        width: t.thumbnailDimensions.width,
                        height: t.thumbnailDimensions.height,
                        autoplay: t.autoplay,
                        loop: t.loop,
                        controls: t.defaultControlsOnMobile,
                      },
                      domProps: { muted: !0 },
                      on: {
                        play: t.onPlay,
                        pause: t.onPause,
                        timeupdate: t.onProgress,
                      },
                    })
                  : t._e(),
                t._v(" "),
                t.controls && !t.defaultControlsOnMobile
                  ? e(
                      "aside",
                      {
                        staticClass: "video-controls",
                        class: { "is-playing": t.playing },
                      },
                      [
                        e(
                          "button",
                          {
                            staticClass:
                              "video-controls-button video-controls-play",
                            on: { click: t.onClickPlay },
                          },
                          [t.playing ? e("SvgIconPause") : e("SvgIconPlay")],
                          1,
                        ),
                        t._v(" "),
                        t.muteButton
                          ? e(
                              "button",
                              {
                                staticClass:
                                  "video-controls-button video-controls-mute",
                                on: { click: t.onClickMute },
                              },
                              [
                                t.muted
                                  ? e("SvgIconSoundOff")
                                  : e("SvgIconSoundOn"),
                              ],
                              1,
                            )
                          : t._e(),
                        t._v(" "),
                        t.showProgress
                          ? e(
                              "div",
                              {
                                ref: "progress",
                                staticClass: "video-controls-progress",
                                on: { click: t.onClickProgress },
                              },
                              [
                                e("div", {
                                  staticClass: "video-controls-progress-bar",
                                }),
                              ],
                            )
                          : t._e(),
                        t._v(" "),
                        t.showFullscreen
                          ? e(
                              "button",
                              {
                                staticClass:
                                  "video-controls-button video-controls-fullscreen",
                                on: { click: t.toggleFullscreen },
                              },
                              [
                                t.isFullscreen
                                  ? e("SvgIconFullscreenOff")
                                  : e("SvgIconFullscreen"),
                              ],
                              1,
                            )
                          : t._e(),
                      ],
                    )
                  : t._e(),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
      installComponents(component, {
        SvgIconPlay: n(514).default,
        SvgIconPause: n(515).default,
        SvgIconSoundOn: n(516).default,
        SvgIconSoundOff: n(517).default,
        SvgIconFullscreen: n(518).default,
        SvgIconFullscreenOff: n(519).default,
      });
    },
    22: function (t, e, n) {
      "use strict";
      (n(250), n(33));
      var o = "webp";
      e.a = {
        methods: {
          canUseWebP: function () {
            var t = document.createElement("canvas");
            return (
              !(!t.getContext || !t.getContext("2d")) &&
              0 === t.toDataURL("image/webp").indexOf("data:image/webp")
            );
          },
          imageRealAspectRatio: function (image) {
            if (!image || !image.fields || !image.fields.file) return !1;
            var t =
              image.fields.file.details.image.width /
              image.fields.file.details.image.height;
            return !!t && t.toFixed(2);
          },
          imageThumbnail: function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = e.format || o,
              r = e.quality || 40,
              l = e.width || 80;
            return (
              e && !1 === e.format && (n = ""),
              "".concat(t, "?fm=").concat(n, "&w=").concat(l, "&q=").concat(r)
            );
          },
          imageSized: function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = e.format || o,
              r = e.width || 1200;
            return (
              e && !1 === e.format && (n = ""),
              ""
                .concat(t, "?fm=")
                .concat(n, "&w=")
                .concat(r, "&h=")
                .concat(r, "&q=85")
            );
          },
          imageSrcset: function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = e.format || o;
            return (
              e && !1 === e.format && (n = ""),
              ""
                .concat(t, "?fm=")
                .concat(n, "&w=400&h=400&q=85 400w, ")
                .concat(t, "?fm=")
                .concat(n, "&w=768&h=768&q=85 768w, ")
                .concat(t, "?fm=")
                .concat(n, "&w=1200&h=1200&q=85 1200w, ")
                .concat(t, "?fm=")
                .concat(n, "&w=1800&h=1800&q=85 1800w, ")
                .concat(t, "?fm=")
                .concat(n, "&w=1920&h=1920&q=85 2400w")
            );
          },
          videoCloudinaryUrl: function (object, t) {
            var e = t || ("sm" === this.$mq ? 640 : 1200);
            t ||
              ((e = this.$options.filters.mq(this.$mq, {
                sm: 640,
                md: 960,
                lg: 1440,
                xl: 1680,
                xxl: 1920,
                xxxl: 1920,
              })),
              "undefined" != typeof window &&
                window.innerWidth > 1680 &&
                !t &&
                (e = 1920));
            var n = this.$options.filters.mq(this.$mq, {
              sm: "q_auto:good",
              md: "q_auto:best",
              lg: "q_auto:best",
              xl: "q_auto:best",
              xxl: "q_auto:best",
              xxxl: "q_auto:best",
            });
            return "https://res.cloudinary.com/air-company/video/upload/c_scale,"
              .concat(n, ",w_")
              .concat(e, "/v")
              .concat(object.version, "/")
              .concat(object.public_id, ".")
              .concat(object.format);
          },
          videoCloudinaryUrl916: function (object, t) {
            var e = t || ("sm" === this.$mq ? 640 : 1200);
            t ||
              ((e = this.$options.filters.mq(this.$mq, {
                sm: 640,
                md: 960,
                lg: 1440,
                xl: 1680,
                xxl: 1920,
                xxxl: 1920,
              })),
              "undefined" != typeof window &&
                window.innerWidth > 1680 &&
                !t &&
                (e = 1920));
            var n = this.$options.filters.mq(this.$mq, {
              sm: "q_auto:good",
              md: "q_auto:best",
              lg: "q_auto:best",
              xl: "q_auto:best",
              xxl: "q_auto:best",
              xxxl: "q_auto:best",
            });
            return "https://res.cloudinary.com/air-company/video/upload/w_"
              .concat(e, ",ar_9:16,")
              .concat(n, "/v")
              .concat(object.version, "/")
              .concat(object.public_id, ".")
              .concat(object.format);
          },
          videoCloudinaryUrlRotate: function (object, t) {
            var e = t || ("sm" === this.$mq ? 640 : 1200);
            t ||
              ((e = this.$options.filters.mq(this.$mq, {
                sm: 640,
                md: 960,
                lg: 1440,
                xl: 1680,
                xxl: 1920,
                xxxl: 1920,
              })),
              "undefined" != typeof window &&
                window.innerWidth > 1680 &&
                !t &&
                (e = 1920));
            var n = this.$options.filters.mq(this.$mq, {
              sm: "q_auto:good",
              md: "q_auto:best",
              lg: "q_auto:best",
              xl: "q_auto:best",
              xxl: "q_auto:best",
              xxxl: "q_auto:best",
            });
            return "https://res.cloudinary.com/air-company/video/upload/ac_none,ki_0.1,c_scale,w_"
              .concat(e, ",")
              .concat(n, "/v")
              .concat(object.version, "/")
              .concat(object.public_id, ".")
              .concat(object.format);
          },
          videoCloudinaryUrlKI: function (object) {
            var q = "";
            return (
              "sm" === this.$mq && (q = ",w_640"),
              "https://res.cloudinary.com/air-company/video/upload/ki_0.1"
                .concat(q, "/v")
                .concat(object.version, "/")
                .concat(object.public_id, ".")
                .concat(object.format)
            );
          },
          videoCloudinaryPoster: function (object, t) {
            var e = 960;
            if (!object || !object.version || !object.public_id) return !1;
            t ||
              (e = this.$options.filters.mq(this.$mq, {
                sm: 640,
                md: 960,
                lg: 1440,
                xl: 1440,
                xxl: 1440,
                xxxl: 1440,
              }));
            var q = "sm" === this.$mq ? 80 : 60;
            return "https://res.cloudinary.com/air-company/video/upload/so_0/w_"
              .concat(e, ",q_")
              .concat(q, "/v")
              .concat(object.version, "/")
              .concat(object.public_id, ".")
              .concat(o);
          },
        },
      };
    },
    245: function (t, e, n) {
      t.exports = {};
    },
    246: function (t, e, n) {
      t.exports = {};
    },
    247: function (t, e, n) {
      t.exports = {};
    },
    248: function (t, e, n) {
      t.exports = {};
    },
    249: function (t, e, n) {
      t.exports = {};
    },
    251: function (t, e, n) {
      t.exports = {};
    },
    252: function (t, e, n) {
      t.exports = {};
    },
    253: function (t, e, n) {
      t.exports = {};
    },
    254: function (t, e, n) {
      t.exports = {};
    },
    255: function (t, e, n) {
      t.exports = {};
    },
    256: function (t, e, n) {
      t.exports = {};
    },
    257: function (t, e, n) {
      t.exports = {};
    },
    258: function (t, e, n) {
      t.exports = {};
    },
    259: function (t, e, n) {
      t.exports = {};
    },
    260: function (t, e, n) {
      t.exports = {};
    },
    261: function (t, e, n) {
      t.exports = {};
    },
    262: function (t, e, n) {
      t.exports = {};
    },
    263: function (t, e, n) {
      t.exports = {};
    },
    264: function (t, e, n) {
      t.exports = {};
    },
    265: function (t, e, n) {
      t.exports = {};
    },
    282: function (t, e, n) {
      t.exports = {};
    },
    294: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = {},
        r = (n(375), n(2)),
        component = Object(r.a)(
          o,
          function () {
            var t = this._self._c;
            return t(
              "svg",
              {
                staticClass: "svg-logo",
                attrs: {
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
              },
              [
                t("path", {
                  attrs: {
                    d: "M4.31224 5.96533L2.79477 4.96587C2.92686 4.93653 3.05573 4.89653 3.18034 4.8472C3.7703 4.61307 4.26607 4.164 4.54785 3.5888C4.69247 3.2936 4.76931 2.9776 4.79653 2.65093C4.79653 2.65093 6.08505 4.2384 6.08318 4.24187C5.99486 4.52693 5.92415 4.6848 5.8305 4.80693C5.7846 4.8672 5.73124 4.9248 5.64718 5.00373C5.64718 5.00373 5.17756 5.52053 4.94142 5.6832C4.8048 5.77733 4.65351 5.8592 4.39575 5.93493C4.36587 5.94373 4.33865 5.9544 4.31224 5.96533ZM20.4221 6.42907C20.4274 6.46693 20.4392 6.50267 20.436 6.54427C20.3879 7.15333 21.0008 8.172 21.0601 8.24933C21.1561 8.3848 21.3082 8.50507 21.5188 8.67333C21.5321 8.68347 21.5396 8.6928 21.5518 8.7032L23.3604 8.11067C23.2918 8.13307 23.1453 8.0024 23.0936 7.9656C22.9767 7.8824 22.8462 7.82053 22.7294 7.7352C22.4729 7.54747 22.2664 7.304 22.1135 7.0328C21.9596 6.7592 21.8587 6.45787 21.8005 6.15013C21.773 6.00507 21.7573 5.864 21.7586 5.71813C21.7592 5.65973 21.7221 5.48533 21.7786 5.44373C21.7778 5.44453 20.4221 6.42907 20.4221 6.42907ZM2.86522 8.64773C3.11497 8.47547 3.24252 8.36133 3.32977 8.23467C3.3746 8.17067 3.41489 8.0992 3.45758 8.008C3.45758 8.008 3.83194 7.2928 3.89251 7.12267C3.95175 6.96587 3.97336 6.79147 3.96909 6.5168C3.96856 6.48747 3.9755 6.46347 3.9779 6.43627L2.20348 5.26773C2.29367 5.59173 2.32035 5.92693 2.2846 6.26133C2.21335 6.92133 1.87555 7.54133 1.36403 7.9584C1.25677 8.04587 1.14203 8.12427 1.02036 8.19227L2.81559 8.69707C2.8332 8.6808 2.84521 8.66293 2.86522 8.64773ZM3.96109 17.6685C3.95842 17.6408 3.95068 17.6163 3.95122 17.5867C3.96109 16.9168 3.52402 16.2485 3.48746 16.1712C3.43116 16.0515 3.3866 15.9568 3.32737 15.8795C3.23104 15.7437 3.07841 15.6208 2.86709 15.4523C2.84574 15.436 2.83293 15.4155 2.81425 15.3984L0.73645 16.0832C0.820501 16.1189 0.904286 16.1491 0.98727 16.1923C1.14203 16.2637 1.29599 16.3456 1.44061 16.4499C2.06366 16.8989 2.4004 17.6557 2.40627 18.3283C2.4076 18.4843 2.40734 18.664 2.39133 18.8088L3.96109 17.6685ZM0.811696 15.4453L2.63201 14.8483C2.63788 14.8208 2.63788 14.7981 2.64722 14.7696C2.68698 14.6491 2.71446 14.5429 2.7342 14.4315C2.75902 14.3256 2.76969 14.2448 2.77076 14.1613C2.77343 13.9925 2.63441 13.1072 2.58131 12.9507C2.55463 12.8717 2.51941 12.7981 2.47084 12.7179C2.40494 12.5965 2.3465 12.4899 2.27472 12.3893C2.26005 12.3685 2.25364 12.3136 2.24137 12.3136H0C1.11988 13.1136 1.26397 14.5309 0.811696 15.4453ZM2.27392 11.7027C2.43162 11.4696 2.53275 11.3115 2.58104 11.1597C2.61707 11.0579 2.68191 10.5688 2.69952 10.4363C2.71072 10.3507 2.81692 9.85947 2.65469 9.33013C2.64642 9.30453 2.64588 9.2888 2.64028 9.264L0.570215 8.69867C0.711101 8.916 0.81223 9.18933 0.897082 9.46187C1.03557 9.90613 1.0836 10.792 0.588093 11.5555C0.525388 11.6525 0.456012 11.7803 0.374095 11.7803H2.23737C2.25044 11.7803 2.25765 11.7256 2.27392 11.7027ZM18.3275 4.27173C18.4035 4.52933 18.4766 4.68747 18.5796 4.81707C18.6976 4.96933 19.3967 5.6608 19.4559 5.70533C19.5781 5.79973 19.7363 5.87013 20.0218 5.9584C20.0368 5.96373 20.0469 5.97253 20.0611 5.9784L21.6217 4.84507C20.9838 4.804 20.3962 4.5344 19.9581 4.10853C19.6093 3.7696 19.3553 3.33173 19.2456 2.83093L18.2821 4.156C18.2995 4.192 18.3149 4.22987 18.3275 4.27173ZM15.6135 2.74267C15.7856 2.992 15.8999 3.11973 16.0269 3.2072C16.0906 3.25173 16.9696 3.70933 17.1393 3.7696C17.2962 3.8288 17.4715 3.8488 17.746 3.84613C17.7626 3.84613 17.7767 3.848 17.7925 3.84853L18.9604 2.2424C18.6469 2.33147 18.3203 2.36373 17.9955 2.33413C17.5006 2.28907 17.0245 2.09387 16.6376 1.7872C16.4012 1.59973 16.1979 1.3704 16.0439 1.10827L15.5375 2.66587C15.5631 2.69093 15.5901 2.71173 15.6135 2.74267ZM9.4842 2.52453C9.60507 2.56453 9.7126 2.592 9.8244 2.61173C9.93007 2.63653 10.0115 2.6472 10.0952 2.64827C10.2631 2.648 11.1508 2.512 11.3069 2.45893C11.3862 2.43227 11.4601 2.39707 11.5404 2.34853C11.6589 2.28427 11.7592 2.22427 11.8598 2.15253C11.8755 2.1416 11.9107 2.13733 11.9107 2.12773V0C11.3771 0.594133 11.0716 0.913067 10.2116 1.0528C9.82894 1.11493 9.18268 1.07173 8.67624 0.820533L9.39081 2.50693C9.42229 2.51307 9.45138 2.51387 9.4842 2.52453ZM13.1045 2.45867C13.2065 2.49467 14.32 2.80107 14.9337 2.53387C14.9459 2.52853 14.9515 2.53173 14.9641 2.52827L15.5879 0.5736C15.3523 0.737333 14.7114 1.16213 13.6347 0.991467C13.1117 0.908267 12.4444 0.52 12.4444 0.450667V2.10613C12.4444 2.12133 12.5191 2.13147 12.5474 2.15147C12.7809 2.30933 12.9524 2.4104 13.1045 2.45867ZM6.66968 3.82827C7.305 3.8688 8.00756 3.40107 8.08494 3.36453C8.20475 3.30827 8.29921 3.26373 8.37632 3.20453C8.51214 3.10827 8.63408 2.95573 8.80298 2.74453C8.81632 2.7272 8.83153 2.71707 8.84514 2.7016L8.0708 0.876267C8.04759 0.927733 8.02544 0.978933 7.99849 1.03093C7.92591 1.1872 7.83279 1.34427 7.72499 1.48427C7.19693 2.1688 6.22861 2.44133 5.84571 2.4496C5.6776 2.45787 5.51697 2.4504 5.36114 2.43147L6.50824 3.8448C6.55921 3.8344 6.61124 3.82587 6.66968 3.82827ZM6.0597 19.8589C5.98392 19.6013 5.91081 19.4432 5.80782 19.3136C5.68934 19.1611 5.1282 18.6085 5.1282 18.6085C5.04815 18.5235 4.99078 18.4699 4.93155 18.4259C4.80881 18.3309 4.65058 18.2605 4.36587 18.1725C4.33945 18.1629 4.32104 18.1485 4.29703 18.1376L2.58024 19.3843C2.5701 19.3917 2.55863 19.3949 2.54796 19.4008C2.92739 19.4248 3.29615 19.5197 3.63209 19.7C4.01152 19.9037 4.33332 20.204 4.56786 20.5616C4.75677 20.8496 4.88885 21.1749 4.94862 21.5171L6.09146 19.9453C6.07945 19.9173 6.06878 19.8893 6.0597 19.8589ZM22.1132 12.4243C21.9558 12.6573 21.8542 12.8179 21.8064 12.9693C21.7704 13.0712 21.4835 14.3003 21.7311 14.8075C21.733 14.8115 21.7309 14.8179 21.7322 14.8219L23.484 15.3939C23.3956 15.2277 23.3364 15.0461 23.2595 14.8555C23.0898 14.4352 23.0658 13.4141 23.5741 12.7707C23.6803 12.6363 23.786 12.4717 23.9192 12.3432C23.9234 12.3387 23.9288 12.3136 23.933 12.3136H22.1655C22.1487 12.3136 22.1365 12.3917 22.1132 12.4243ZM21.5225 15.4829C21.4222 15.5523 21.3242 15.6243 21.2322 15.7043C21.1439 15.7808 21.086 15.8696 21.0235 15.9693C20.881 16.1973 20.7583 16.4371 20.646 16.6811C20.5771 16.8307 20.4802 16.9965 20.4469 17.1576C20.4162 17.3053 20.4157 17.4643 20.4178 17.6147C20.4178 17.6221 20.4157 17.6277 20.4157 17.6352L21.9086 18.7189C21.8552 18.4139 21.8568 18.0997 21.9145 17.7955C22.0271 17.2011 22.3478 16.6661 22.8086 16.2901C22.9724 16.1563 23.1542 16.0427 23.3503 15.9539L21.6167 15.3909C21.5871 15.4219 21.5601 15.4541 21.5225 15.4829ZM19.9914 18.1957C19.7342 18.2715 19.576 18.3445 19.4463 18.4475C19.2942 18.5653 18.7408 19.1267 18.7408 19.1267C18.6557 19.2064 18.602 19.264 18.5577 19.3232C18.463 19.4459 18.3923 19.604 18.3045 19.8885C18.3021 19.8955 18.2978 19.8997 18.2954 19.9064L19.3932 21.4165C19.4417 21.0739 19.5554 20.7472 19.7361 20.4515C20.0285 19.9725 20.4749 19.6027 20.9907 19.3981C21.1978 19.316 21.416 19.2608 21.6402 19.2357L20.1291 18.1387C20.0867 18.1613 20.0421 18.1808 19.9914 18.1957ZM23.1691 10.2744C23.0797 9.76187 23.1469 9.21787 23.393 8.72107L21.7605 9.2488C21.7544 9.2856 21.7525 9.32027 21.74 9.35893C21.7005 9.47973 21.673 9.58667 21.6532 9.69787C21.6284 9.80347 21.6177 9.88453 21.6164 9.9688C21.6143 10.1365 21.753 11.0232 21.8061 11.1795C21.8325 11.2576 21.8675 11.3315 21.9166 11.4123C21.9828 11.5341 22.0412 11.6368 22.1124 11.7363C22.1205 11.748 22.1231 11.7803 22.1306 11.7803H24C23.5541 11.2469 23.2673 10.8373 23.1691 10.2744ZM14.9032 21.6064C14.7824 21.5664 14.6748 21.5389 14.563 21.5192C14.4571 21.4944 14.3757 21.4837 14.2922 21.4827C14.122 21.4845 13.2361 21.6189 13.0803 21.672C13.0018 21.6984 12.9282 21.7333 12.8471 21.7824C12.7286 21.8464 12.6138 21.9067 12.5127 21.9784C12.4962 21.9899 12.4444 21.9947 12.4444 22.0048V23.9933C12.9781 23.5461 13.386 23.2469 13.9082 23.2469H13.9173C13.9277 23.2469 13.9571 23.2469 13.9587 23.2469H13.9608C14.4993 22.9803 15.0972 23.2205 15.6466 23.5339L15.0388 21.6493C14.9948 21.6435 14.9502 21.6213 14.9032 21.6064ZM11.2824 21.6723C11.1807 21.6363 9.97997 21.3861 9.44711 21.5981C9.42363 21.6075 9.39988 21.6101 9.37666 21.6155L8.74454 23.5595C8.93026 23.4531 9.12905 23.3613 9.35612 23.2997C10.2081 23.068 11.0678 23.3323 11.4446 23.6056C11.5831 23.7061 11.7309 23.8171 11.8595 23.9504C11.8761 23.9656 11.9107 23.984 11.9107 24V22.0229C11.9107 22.008 11.8526 21.9987 11.8254 21.9795C11.5916 21.8211 11.4321 21.7195 11.2824 21.6723ZM12.8911 21.2013C12.6547 21.2779 12.438 21.4211 12.2368 21.5645C12.1768 21.6069 12.1714 21.6053 12.1114 21.5629C11.9719 21.4685 11.8326 21.3723 11.6831 21.2936C11.5356 21.216 11.392 21.1779 11.2287 21.1435C10.8781 21.0699 10.5056 20.9925 10.1475 20.9757C9.85909 20.9621 9.56851 21.0264 9.29501 21.1141C9.2203 21.1381 9.21657 21.1328 9.18535 21.0912C9.08715 20.9491 8.98309 20.8091 8.86142 20.6859C8.73947 20.5624 8.58765 20.4755 8.43956 20.3864C7.90376 20.0648 7.34155 19.7771 6.70543 19.7771C6.67982 19.7771 6.65127 19.7784 6.62645 19.7776C6.59443 19.7776 6.57789 19.7768 6.57148 19.7744C6.56508 19.7651 6.55574 19.7464 6.54667 19.7157C6.44394 19.3672 6.29185 19.0944 6.0525 18.8227C5.8281 18.5675 5.58635 18.3272 5.32992 18.1043C5.08658 17.8925 4.82375 17.8029 4.52677 17.6915C4.46299 17.6685 4.45819 17.6651 4.45899 17.588C4.45579 16.9219 4.32691 16.6605 4.05928 16.1827C4.01525 16.1011 3.98003 16.0256 3.94695 15.9557C3.88317 15.82 3.82287 15.6923 3.73615 15.58C3.6046 15.3933 3.42823 15.2528 3.16754 15.0448C3.1091 15.0005 3.10937 14.9944 3.13018 14.9309C3.20222 14.7125 3.26813 14.4707 3.27747 14.24C3.28814 13.9795 3.23131 13.7219 3.19075 13.4659C3.15339 13.2304 3.12805 12.9907 3.05387 12.7629C2.97755 12.5288 2.8316 12.308 2.68938 12.1088C2.64588 12.0475 2.64989 12.0419 2.69098 11.9837C2.85294 11.7445 2.99276 11.5379 3.06267 11.3168C3.1139 11.1728 3.13258 11.0312 3.15233 10.8813C3.16247 10.804 3.17314 10.7211 3.18995 10.6304C3.30522 10.0643 3.33084 9.7904 3.13979 9.16853C3.11604 9.09467 3.12137 9.09093 3.163 9.0592C3.45518 8.8576 3.62488 8.70213 3.74709 8.52453C3.80819 8.43787 3.86263 8.34213 3.91146 8.23653L4.08063 7.92347C4.21484 7.67813 4.30183 7.48987 4.3704 7.2976C4.45205 7.0808 4.48327 6.85253 4.47794 6.50907C4.4774 6.472 4.48167 6.4496 4.47794 6.44907C4.48514 6.44373 4.50249 6.43333 4.53957 6.4224C4.90647 6.3144 5.19117 6.14853 5.47508 5.89467C5.71496 5.68027 5.93963 5.44933 6.14749 5.204C6.35375 4.96053 6.47116 4.70773 6.56535 4.4032C6.58829 4.34 6.58936 4.33493 6.66914 4.336C7.33515 4.33253 7.59691 4.20373 8.07507 3.93627C8.15672 3.89227 8.23223 3.85707 8.30214 3.824C8.43796 3.76027 8.56577 3.7 8.6781 3.61333C8.86488 3.48187 9.0055 3.3056 9.21363 3.04507C9.25792 2.98667 9.26433 2.98747 9.32757 3.00773C9.5477 3.08027 9.78705 3.14747 10.0197 3.1536C10.2671 3.16027 10.512 3.11227 10.7554 3.07467C10.9979 3.03733 11.2439 3.00907 11.4787 2.93547C11.7226 2.8592 11.9441 2.71467 12.1509 2.5672C12.2128 2.524 12.2184 2.52693 12.2766 2.56853C12.5159 2.7304 12.7227 2.87013 12.9439 2.94C13.088 2.9912 13.2297 3.00987 13.3796 3.0296C13.457 3.03973 13.54 3.0504 13.6307 3.0672C14.1969 3.18213 14.4707 3.20827 15.0932 3.01733C15.1679 2.9928 15.1717 2.99893 15.2029 3.03973C15.312 3.19813 15.4286 3.35467 15.5692 3.4872C15.7115 3.62107 15.8969 3.7208 16.0653 3.8176C16.3222 3.96533 16.5907 4.09307 16.8674 4.19947C16.9952 4.24853 17.1283 4.30453 17.2631 4.32533C17.4021 4.34693 17.5425 4.3544 17.6831 4.3544C17.7087 4.3544 17.7386 4.35493 17.7618 4.35387C17.7943 4.35387 17.8136 4.35787 17.8165 4.35707C17.8221 4.36533 17.8314 4.3824 17.8416 4.416C17.948 4.7776 18.1105 5.05947 18.3606 5.33947C18.5762 5.58373 18.8115 5.81147 19.0591 6.02293C19.3014 6.22987 19.5581 6.3464 19.8617 6.44C19.925 6.46293 19.9295 6.46613 19.929 6.54373C19.9263 6.89867 19.9794 7.24587 20.1291 7.56933C20.2108 7.7456 20.3049 7.91973 20.3933 8.0944C20.4923 8.29013 20.6025 8.48133 20.7377 8.6544C20.8701 8.82347 21.0534 8.9536 21.221 9.08693C21.2791 9.1312 21.2786 9.13707 21.2581 9.20133C21.1849 9.42373 21.1161 9.66453 21.111 9.89973C21.1057 10.1565 21.158 10.4099 21.1967 10.6624C21.2335 10.9027 21.2583 11.1477 21.3381 11.3787C21.4171 11.6067 21.5585 11.8267 21.6989 12.0219C21.7061 12.0323 21.7103 12.0395 21.7141 12.0512C21.7141 12.0693 21.7213 12.0851 21.7245 12.1024C21.7194 12.1144 21.7114 12.1277 21.697 12.1483C21.6025 12.288 21.5062 12.4277 21.4275 12.5771C21.3506 12.7232 21.3122 12.8645 21.2783 13.0264C21.2631 13.0997 21.2474 13.1741 21.2322 13.2493C21.174 13.5352 21.1212 13.8309 21.1092 14.1163C21.0972 14.4024 21.1609 14.6923 21.2485 14.9629C21.2725 15.0371 21.2671 15.0411 21.226 15.0725C20.9435 15.2669 20.7231 15.4712 20.5483 15.7669C20.3602 16.0848 20.1934 16.4155 20.0493 16.7555C19.9314 17.0339 19.9111 17.3237 19.9111 17.6229C19.9116 17.6597 19.9076 17.6797 19.9082 17.6848C19.8988 17.6909 19.8802 17.7003 19.8489 17.7096C19.5154 17.8077 19.2376 17.9512 18.9777 18.1816C18.7165 18.4131 18.4697 18.6608 18.2389 18.9224C18.0265 19.1635 17.9291 19.4296 17.8234 19.7283C17.801 19.792 17.7981 19.7955 17.7196 19.7957C17.3666 19.7971 17.0251 19.8437 16.7022 19.9917C16.5389 20.0667 16.3871 20.1568 16.2246 20.2341C16.0354 20.3237 15.8492 20.4224 15.681 20.5477C15.4804 20.6973 15.3302 20.8928 15.1751 21.0869C15.1303 21.1453 15.1244 21.1445 15.0612 21.1243C14.8389 21.0512 14.5969 20.984 14.3621 20.9779C14.1097 20.9715 13.8602 21.0213 13.6121 21.0603C13.37 21.0973 13.1248 21.1259 12.8911 21.2013ZM8.77416 21.3883C8.60152 21.1387 8.48732 21.0109 8.36031 20.9235C8.2968 20.8789 8.22529 20.8387 8.13324 20.7955C8.13324 20.7955 7.41813 20.4219 7.2479 20.3613C7.091 20.3021 6.9189 20.2803 6.64166 20.2848C6.61177 20.2856 6.58989 20.2787 6.56321 20.2765L5.32912 21.9739C5.66239 21.8952 6.00607 21.8805 6.34441 21.9341C6.96079 22.0315 7.52673 22.3597 7.91791 22.8376C8.03558 22.9813 8.13751 23.1387 8.22022 23.3072L8.82566 21.4448C8.80832 21.4259 8.79044 21.4099 8.77416 21.3883ZM17.7178 20.3027C17.1091 20.2509 16.3801 20.7301 16.3025 20.7667C16.1832 20.8229 16.0901 20.8672 16.013 20.9264C15.8777 21.0221 15.7587 21.1731 15.5914 21.3824C15.5858 21.3896 15.5834 21.3944 15.5775 21.4016L16.1798 23.2312C16.1824 23.2259 16.199 23.2203 16.2019 23.2149C16.2737 23.0597 16.3964 22.9032 16.504 22.7619C16.7964 22.3779 17.5056 21.8312 18.3835 21.7965C18.6178 21.7872 18.8091 21.8027 19.0199 21.8448L17.8578 20.2861C17.8128 20.2939 17.7685 20.3069 17.7178 20.3027Z",
                    fill: "white",
                  },
                }),
              ],
            );
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
    },
    299: function (t, e, n) {
      "use strict";
      (function (t) {
        var n = "true" === t.env.DEV,
          o = t.env.BASE_URL,
          r = "true" === t.env.LOCAL;
        e.a = {
          target: "static",
          head: {
            title: t.env.META_NAME,
            htmlAttrs: { lang: "en" },
            meta: [
              { charset: "utf-8" },
              {
                name: "viewport",
                content: "width=device-width, initial-scale=1, maximum-scale=5",
              },
              {
                hid: "mobile-web-app-capable",
                name: "mobile-web-app-capable",
                content: "yes",
              },
              { hid: "theme-color", name: "theme-color", content: "#222" },
              {
                hid: "apple-mobile-web-app-capable",
                name: "apple-mobile-web-app-capable",
                content: "yes",
              },
              {
                hid: "apple-mobile-web-app-status-bar-style",
                name: "apple-mobile-web-app-status-bar-style",
                content: "black-translucent",
              },
              {
                hid: "msapplication-TileColor",
                name: "msapplication-TileColor",
                content: "#222",
              },
              { hid: "robots", name: "robots", content: "noindex, nofollow" },
            ],
            link: [],
          },
          publicRuntimeConfig: {
            DEV: n,
            BASE_URL: o,
            LOCAL: r,
            GA4_ID: "G-6CVVQQ2LPH",
          },
          components: !0,
          css: ["~/assets/scss/main.scss"],
          router: { trailingSlash: !0 },
          loading: !1,
          plugins: [
            "~/plugins/preview.client.js",
            "~/plugins/filters.js",
            { src: "@/plugins/ctf-rich-text.js" },
            { src: "~/plugins/video-hls.client.js", ssr: !1, mode: "client" },
            { src: "~/plugins/v-hotkey.client.js", ssr: !1, mode: "client" },
            { src: "~/plugins/vue-multi-ref.js" },
            { src: "~/plugins/v-swipe.client.js", ssr: !1, mode: "client" },
            {
              src: "~/plugins/v-click-outside.client.js",
              ssr: !1,
              mode: "client",
            },
            "~/plugins/ignore-is.js",
            { src: "~/plugins/gtm.client.js", mode: "client", ssr: !1 },
          ],
          modules: [
            "@nuxtjs/style-resources",
            "@nuxtjs/redirect-module",
            "nuxt-mq",
            "cookie-universal-nuxt",
            "contentful-module",
            "nuxt-client-init-module",
            "@nuxtjs/gtm",
          ],
          gtm: { enabled: !0, debug: r, pageTracking: !0, autoInit: !1 },
          contentful: {
            default: "campaign",
            activeEnvironments: ["campaign", "master", "preview"],
            environments: {
              campaign: {
                space: "774wrlwo66l2",
                accessToken: "s_wGmJ4c38NI14ipAZBvt62yyu07aqZz4hmQv1phOEc",
                environment: "master",
                removeUnresolved: !0,
              },
              master: {
                space: "57fahiw4uj5z",
                accessToken: "fgMdozZrf3ejfTcYrKwqUCICoRyTJY9BcKy7QW0EqVw",
                environment: "master",
                removeUnresolved: !0,
              },
              preview: {
                space: "57fahiw4uj5z",
                accessToken: "gWmTwEMM822EaSYoNBTQfjyx2iDcUlbjo8_s5k2kXPY",
                environment: "master",
                host: "preview.contentful.com",
                removeUnresolved: !0,
              },
            },
          },
          styleResources: {
            scss: [
              "assets/scss/common/_variables.scss",
              "assets/scss/project/_variables.scss",
              "assets/scss/common/_breakpoints.scss",
              "assets/scss/common/_mixins.scss",
              "assets/scss/project/_mixins.scss",
              "assets/scss/common/_text.scss",
            ],
          },
          redirect: [{ from: "^(\\/[^\\?]*[^\\/])(\\?.*)?$", to: "$1/$2" }],
          mq: {
            defaultBreakpoint: "sm",
            breakpoints: {
              sm: 768,
              md: 1180,
              lg: 1440,
              xl: 1680,
              xxl: 1921,
              xxxl: 1 / 0,
            },
          },
          fontLoader: {
            url: "/webfonts/webfonts.css",
            preload: { hid: "fonts-preload" },
          },
          sitemap: { hostname: o, gzip: !0, trailingSlash: !0 },
          buildModules: [
            "nuxt-font-loader",
            "nuxt-gsap-module",
            "nuxt-lazysizes",
            "@nuxtjs/pwa",
          ],
          lazySizes: { plugins: { unveilhooks: !0 }, expand: 800 },
          pwa: {
            icon: !1,
            meta: !1,
            manifest: !1,
            workbox: {
              enabled: !r,
              dev: n,
              cachingExtensions: "@/utils/workbox-range-request.js",
            },
          },
          gsap: {
            extraPlugins: { flip: !0, scrollTo: !0, scrollTrigger: !0 },
            clubPlugins: { scrambleText: !0 },
          },
          generate: { fallback: !0, crawler: !0 },
          build: {
            extractCSS: !0,
            transpile: ["contentful-module"],
            html: {
              minify: {
                collapseBooleanAttributes: !0,
                collapseInlineTagWhitespace: !0,
                collapseWhitespace: !0,
                conservativeCollapse: !0,
                decodeEntities: !0,
                minifyCSS: !0,
                minifyJS: !0,
                processScripts: ["application/ld+json"],
                removeComments: !0,
                removeEmptyAttributes: !0,
                removeRedundantAttributes: !0,
                removeScriptTypeAttributes: !0,
                removeStyleLinkTypeAttributes: !0,
              },
            },
            babel: {
              plugins: [
                ["@babel/plugin-proposal-private-methods", { loose: !0 }],
                [
                  "@babel/plugin-proposal-private-property-in-object",
                  { loose: !0 },
                ],
              ],
              compact: !1,
            },
          },
          pageTransition: { mode: "out-in", name: "fade-page" },
        };
      }).call(this, n(97));
    },
    312: function (t, e, n) {
      "use strict";
      (n(21), n(7), n(18));
      var o = {
          data: function () {
            return {
              loader: !0,
              loaderTl: null,
              loaderRemoveTl: null,
              initialAnimationCompleted: !1,
              isNavCentered: !1,
            };
          },
          computed: {
            isTouch: function () {
              return ["sm", "md"].includes(this.$mq);
            },
            campaign: function () {
              return this.$store.state.campaign || {};
            },
            loaderText: function () {
              var t, e;
              return null === (t = this.campaign) ||
                void 0 === t ||
                null === (e = t.fields) ||
                void 0 === e
                ? void 0
                : e.loaderText;
            },
          },
          mounted: function () {
            (this.addEvents(),
              this.$gsap.config({ nullTargetWarn: !1 }),
              this.$nextTick(this.initLoader),
              (window.centerTheNavPls = this.centerTheNavPls));
          },
          destroyed: function () {
            this.removeEvents();
          },
          methods: {
            centerTheNavPls: function () {
              var t;
              (null === (t = document) ||
                void 0 === t ||
                t.documentElement.classList.toggle("is-nav-centered"),
                (this.isNavCentered = !this.isNavCentered),
                console.log("nav centered", this.isNavCentered));
            },
            addEvents: function () {
              (this.$nuxt.$on("bgvideo:pauseActive", this.onBgPauseActive),
                this.$nuxt.$on(
                  "bgvideo:restartActive",
                  this.onBgRestartActive,
                ));
            },
            removeEvents: function () {
              (this.$nuxt.$off("bgvideo:pauseActive", this.onBgPauseActive),
                this.$nuxt.$off(
                  "bgvideo:restartActive",
                  this.onBgRestartActive,
                ));
            },
            onBgPauseActive: function () {
              var t = document.querySelector(".video-bg.is-active video");
              t && (t.loop = !0);
            },
            onBgRestartActive: function () {
              var t = document.querySelector(".video-bg.is-active video");
              t && ((t.currentTime = 0), (t.loop = !1));
            },
            initLoaderOld: function () {
              var t = this;
              ((this.loaderTl = this.$gsap
                .timeline({ paused: !0, onComplete: function () {} })
                .to(this.$refs.loaderProgress, {
                  width: "100%",
                  duration: 7,
                  ease: "power4.inOut",
                })
                .to(
                  this.$refs.loaderLogo,
                  { duration: 0.5, force3D: !0, opacity: 0 },
                  1,
                )
                .to(this.$refs.loaderText, { opacity: 1, duration: 1 }, 1.66)
                .to(
                  this.$refs.loaderButton,
                  { opacity: 1, duration: 1, pointerEvents: "all" },
                  6,
                )
                .play()),
                (this.loaderRemoveTl = this.$gsap
                  .timeline({
                    paused: !0,
                    onComplete: function () {
                      t.removeLoader(!0);
                    },
                  })
                  .add(function () {
                    t.init(0);
                  })
                  .to(
                    "#loader",
                    { height: 0, duration: 0.66, ease: "expo.inOut" },
                    0.25,
                  )));
            },
            initLoader: function () {
              var t = this;
              ((this.loaderTl = this.$gsap
                .timeline({
                  paused: !0,
                  onComplete: function () {
                    t.initialAnimationCompleted = !0;
                  },
                })
                .to(this.$refs.loaderProgress, {
                  width: "100%",
                  duration: 7,
                  ease: "power4.inOut",
                })
                .from(
                  this.$refs.loaderLogo,
                  { scale: 0, ease: "expo.out", duration: 1 },
                  0.5,
                )
                .to(
                  this.$refs.loaderLogo,
                  { duration: 1.5, ease: "expo.inOut", force3D: !0, y: -100 },
                  2,
                )
                .to(this.$refs.loaderText, { opacity: 1, duration: 1 }, 3.5)
                .to(
                  this.$refs.loaderButton,
                  { opacity: 1, duration: 1, pointerEvents: "all" },
                  6,
                )
                .play()),
                (this.loaderRemoveTl = this.$gsap
                  .timeline({
                    paused: !0,
                    onComplete: function () {
                      t.removeLoader(!0);
                    },
                  })
                  .add(function () {
                    t.init(0);
                  })
                  .to(
                    "#loader",
                    { height: 0, duration: 0.66, ease: "expo.inOut" },
                    0.25,
                  )));
            },
            onClickLoader: function () {
              if (!this.initialAnimationCompleted) return !1;
              this.onClickButton();
            },
            onClickButton: function () {
              (document
                .querySelectorAll(".video-bg video")
                .forEach(function (t) {
                  t.paused && t.play();
                }),
                this.loaderRemoveTl.play());
            },
            removeLoader: function () {
              var t = this;
              this.$gsap.to(this.$refs.loader, {
                autoAlpha: 0,
                duration: 0.75,
                delay: 0.5,
                onComplete: function () {
                  t.$nextTick(function () {
                    t.loader = !1;
                  });
                },
              });
            },
            init: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0;
              this.$store.commit("activeIndex", t);
            },
          },
        },
        r = o,
        l = (n(374), n(2)),
        component = Object(l.a)(
          r,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { attrs: { id: "layout" } },
              [
                t.loader
                  ? e(
                      "div",
                      {
                        ref: "loader",
                        class: { "is-completed": t.initialAnimationCompleted },
                        attrs: { id: "loader" },
                        on: { click: t.onClickLoader },
                      },
                      [
                        e("span", {
                          ref: "loaderProgress",
                          staticClass: "loader-progress",
                        }),
                        t._v(" "),
                        e(
                          "div",
                          { ref: "loaderLogo", staticClass: "loader-logo" },
                          [e("SvgLogo")],
                          1,
                        ),
                        t._v(" "),
                        e("div", { staticClass: "loader-content" }, [
                          e("p", {
                            ref: "loaderText",
                            domProps: {
                              innerHTML: t._s(
                                t.$options.filters.nl2br(t.loaderText),
                              ),
                            },
                          }),
                          t._v(" "),
                          e(
                            "button",
                            {
                              ref: "loaderButton",
                              staticClass: "loader-button",
                              on: { click: t.onClickButton },
                            },
                            [t._v("\n        Enter The Brewery\n      ")],
                          ),
                        ]),
                      ],
                    )
                  : t._e(),
                t._v(" "),
                t.isNavCentered
                  ? e("div", { staticClass: "header-navcentered-bg" }, [
                      e("video", {
                        attrs: {
                          src: "/assets/videos/01.mp4",
                          playsinline: "",
                          _autoplay: "",
                          muted: "",
                          loop: "",
                        },
                        domProps: { muted: !0 },
                      }),
                    ])
                  : t._e(),
                t._v(" "),
                e("HeaderMain"),
                t._v(" "),
                t.isTouch ? t._e() : e("NavigationLeft"),
                t._v(" "),
                e("NavigationBottom"),
                t._v(" "),
                e("NavigationSections"),
                t._v(" "),
                e("NavigationMobileSections"),
                t._v(" "),
                e(
                  "main",
                  { attrs: { id: "main", role: "main" } },
                  [e("BackgroundVideos"), t._v(" "), e("Nuxt")],
                  1,
                ),
              ],
              1,
            );
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.a = component.exports;
      installComponents(component, {
        SvgLogo: n(294).default,
        HeaderMain: n(509).default,
        NavigationLeft: n(520).default,
        NavigationBottom: n(521).default,
        NavigationSections: n(522).default,
        NavigationMobileSections: n(524).default,
        BackgroundVideos: n(525).default,
      });
    },
    316: function (t, e, n) {
      (n(317), (t.exports = n(318)));
    },
    373: function (t, e, n) {
      t.exports = {};
    },
    374: function (t, e, n) {
      "use strict";
      n(245);
    },
    375: function (t, e, n) {
      "use strict";
      n(246);
    },
    376: function (t, e, n) {
      "use strict";
      n(247);
    },
    377: function (t, e, n) {
      "use strict";
      n(248);
    },
    378: function (t, e, n) {
      "use strict";
      n(249);
    },
    379: function (t, e, n) {
      "use strict";
      n(251);
    },
    380: function (t, e, n) {
      "use strict";
      n(252);
    },
    381: function (t, e, n) {
      "use strict";
      n(253);
    },
    382: function (t, e, n) {
      "use strict";
      n(254);
    },
    383: function (t, e, n) {
      "use strict";
      n(255);
    },
    384: function (t, e, n) {
      "use strict";
      n(256);
    },
    385: function (t, e, n) {
      "use strict";
      n(257);
    },
    386: function (t, e, n) {
      "use strict";
      n(258);
    },
    387: function (t, e, n) {
      "use strict";
      n(259);
    },
    388: function (t, e, n) {
      "use strict";
      n(260);
    },
    389: function (t, e, n) {
      "use strict";
      n(261);
    },
    390: function (t, e, n) {
      "use strict";
      n(262);
    },
    391: function (t, e, n) {
      "use strict";
      n(263);
    },
    392: function (t, e, n) {
      "use strict";
      n(264);
    },
    393: function (t, e, n) {
      "use strict";
      n(265);
    },
    467: function (t, e, n) {
      "use strict";
      n(282);
    },
    468: function (t, e, n) {
      "use strict";
      (n.r(e),
        n.d(e, "state", function () {
          return v;
        }),
        n.d(e, "getters", function () {
          return h;
        }),
        n.d(e, "actions", function () {
          return f;
        }),
        n.d(e, "mutations", function () {
          return m;
        }));
      var o = n(12),
        r = n(11),
        l =
          (n(57),
          n(7),
          n(18),
          n(283),
          n(284),
          n(51),
          n(45),
          n(30),
          n(25),
          n(26),
          n(41),
          n(42),
          n(299));
      function c(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n));
        }
        return e;
      }
      function d(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? c(Object(source), !0).forEach(function (e) {
                Object(o.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(
                  t,
                  Object.getOwnPropertyDescriptors(source),
                )
              : c(Object(source)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(source, e),
                  );
                });
        }
        return t;
      }
      var v = function () {
          return {
            hostname: l.a.sitemap.hostname,
            settings: {},
            campaign: {},
            activeIndex: null,
            bgVideos: {},
            showSectionsMobileNav: !1,
            showOverview: !1,
            isLandscape: !1,
            canAutoplay: !0,
          };
        },
        h = {
          settings: function (t) {
            return t.settings;
          },
          videos: function (t) {
            var e,
              n,
              o,
              r = [];
            return (
              null === (e = t.campaign) ||
                void 0 === e ||
                null === (n = e.fields) ||
                void 0 === n ||
                null === (o = n.videos) ||
                void 0 === o ||
                o.forEach(function (video) {
                  r.push(video.fields);
                }),
              r
            );
          },
          currentVideo: function (t) {
            var e, n, o;
            return null === (e = t.campaign) ||
              void 0 === e ||
              null === (n = e.fields) ||
              void 0 === n ||
              null === (o = n.videos[t.activeIndex]) ||
              void 0 === o
              ? void 0
              : o.fields;
          },
          currentVideoSlug: function (t) {
            var e, n, o, r;
            return null === (e = t.campaign) ||
              void 0 === e ||
              null === (n = e.fields) ||
              void 0 === n ||
              null === (o = n.videos[t.activeIndex]) ||
              void 0 === o ||
              null === (r = o.fields) ||
              void 0 === r
              ? void 0
              : r.slug;
          },
          videoBySlug: function (t) {
            return function (e) {
              var n, o, r;
              return null === (n = t.campaign) ||
                void 0 === n ||
                null === (o = n.fields) ||
                void 0 === o ||
                null ===
                  (r = o.videos.find(function (video) {
                    return video.fields.slug === e;
                  })) ||
                void 0 === r
                ? void 0
                : r.fields;
            };
          },
          bgVideoBySlug: function (t) {
            return function (e) {
              return t.bgVideos[e];
            };
          },
          currentBgVideo: function (t) {
            var e, n, o, r;
            return t.bgVideos[
              null === (e = t.campaign) ||
              void 0 === e ||
              null === (n = e.fields) ||
              void 0 === n ||
              null === (o = n.videos[t.activeIndex]) ||
              void 0 === o ||
              null === (r = o.fields) ||
              void 0 === r
                ? void 0
                : r.slug
            ];
          },
          sections: function (t) {
            var e,
              n,
              o,
              r = [];
            return (
              null === (e = t.campaign) ||
                void 0 === e ||
                null === (n = e.fields) ||
                void 0 === n ||
                null === (o = n.sections) ||
                void 0 === o ||
                o.forEach(function (section) {
                  r.push(section.fields);
                }),
              r
            );
          },
          sectionBySlug: function (t) {
            return function (e) {
              var n, o, r;
              return null === (n = t.campaign) ||
                void 0 === n ||
                null === (o = n.fields) ||
                void 0 === o ||
                null ===
                  (r = o.sections.find(function (section) {
                    return section.fields.slug === e;
                  })) ||
                void 0 === r
                ? void 0
                : r.fields;
            };
          },
          sectionIndexBySlug: function (t) {
            return function (e) {
              var n, o;
              return null === (n = t.campaign) ||
                void 0 === n ||
                null === (o = n.fields) ||
                void 0 === o
                ? void 0
                : o.sections.findIndex(function (section) {
                    return section.fields.slug === e;
                  });
            };
          },
          nextSectionBySlug: function (t) {
            return function (e) {
              var n,
                o,
                r,
                l =
                  null === (n = t.campaign) ||
                  void 0 === n ||
                  null === (o = n.fields) ||
                  void 0 === o
                    ? void 0
                    : o.sections,
                c = l.findIndex(function (section) {
                  return section.fields.slug === e;
                });
              return (
                (null === (r = l[c + 1]) || void 0 === r ? void 0 : r.fields) ||
                !1
              );
            };
          },
          previousSectionBySlug: function (t) {
            return function (e) {
              var n,
                o,
                r,
                l =
                  null === (n = t.campaign) ||
                  void 0 === n ||
                  null === (o = n.fields) ||
                  void 0 === o
                    ? void 0
                    : o.sections,
                c = l.findIndex(function (section) {
                  return section.fields.slug === e;
                });
              return (
                (null === (r = l[c - 1]) || void 0 === r ? void 0 : r.fields) ||
                !1
              );
            };
          },
          nextIndex: function (t) {
            var e,
              n,
              o = t.activeIndex + 1;
            return o >=
              (null === (e = t.campaign) ||
              void 0 === e ||
              null === (n = e.fields) ||
              void 0 === n
                ? void 0
                : n.videos
              ).length
              ? 0
              : o;
          },
        },
        f = {
          nuxtClientInit: function (t, e) {
            return Object(r.a)(
              regeneratorRuntime.mark(function e() {
                var o, r, l, c, d, v, h;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((o = t.commit),
                          (r = window.matchMedia(
                            "(orientation: landscape)",
                          ).matches),
                          o("isLandscape", r),
                          (l =
                            "undefined" != typeof window
                              ? "ontouchstart" in window ||
                                navigator.msMaxTouchPoints > 0
                              : null),
                          (c = window.innerWidth <= 1180),
                          (d = !(!l || !c)),
                          l && !d)
                        ) {
                          e.next = 11;
                          break;
                        }
                        (o("setAutoplay", !0),
                          null === (v = document) ||
                            void 0 === v ||
                            null === (h = v.documentElement) ||
                            void 0 === h ||
                            h.classList.toggle("cant-autoplay", !1),
                          (e.next = 13));
                        break;
                      case 11:
                        return (
                          (e.next = 13),
                          n
                            .e(11)
                            .then(n.bind(null, 530))
                            .then(function (t) {
                              return t.default.video({
                                muted: !0,
                                inline: !0,
                                timeout: 1e3,
                              });
                            })
                            .then(function (t) {
                              var e,
                                n,
                                r = t.result;
                              (o("setAutoplay", r),
                                null === (e = document) ||
                                  void 0 === e ||
                                  null === (n = e.documentElement) ||
                                  void 0 === n ||
                                  n.classList.toggle("cant-autoplay", !r));
                            })
                        );
                      case 13:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            )();
          },
          nuxtServerInit: function (t, e) {
            var n = this;
            return Object(r.a)(
              regeneratorRuntime.mark(function o() {
                var r, l, c, d, v, h, f, m, w, y;
                return regeneratorRuntime.wrap(function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          (f = t.commit),
                          t.dispatch,
                          e.req,
                          e.$sanity,
                          "2X1UzF6fAfwLcslVdFDOyF",
                          (o.next = 5),
                          n.$contentful.environments.campaign
                            .getEntry("2X1UzF6fAfwLcslVdFDOyF", { include: 6 })
                            .then(function (t) {
                              return t;
                            })
                        );
                      case 5:
                        ((m = o.sent),
                          f("campaign", m),
                          (w = []),
                          null === (r = m.fields) ||
                            void 0 === r ||
                            null === (l = r.videos) ||
                            void 0 === l ||
                            l.forEach(function (video) {
                              w.push(video.fields);
                            }),
                          f("createVideoObjects", w),
                          (y = {
                            description:
                              null === (c = m.fields) || void 0 === c
                                ? void 0
                                : c.seoDescription,
                            name:
                              null === (d = m.fields) || void 0 === d
                                ? void 0
                                : d.seoTitle,
                            shareImage:
                              null === (v = m.fields) || void 0 === v
                                ? void 0
                                : v.seoImage,
                            favicon:
                              null === (h = m.fields) || void 0 === h
                                ? void 0
                                : h.seoFavicon,
                          }),
                          f("seo/setSeo", y));
                      case 12:
                      case "end":
                        return o.stop();
                    }
                }, o);
              }),
            )();
          },
        },
        m = {
          generalSettings: function (t, data) {
            t.settings = data;
          },
          campaign: function (t, data) {
            t.campaign = data;
          },
          activeIndex: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            t.activeIndex = e;
          },
          createVideoObjects: function (t, e) {
            e.forEach(function (video) {
              null != video &&
                video.bgVideo &&
                (t.bgVideos[video.slug] = {
                  url: null == video ? void 0 : video.bgVideo,
                  currentTime: 0,
                  duration: 0,
                });
            });
          },
          updateVideoObject: function (t, data) {
            var e = data.slug;
            t.bgVideos[e] && (t.bgVideos[e] = d(d({}, t.bgVideos[e]), data));
          },
          showSectionsMobileNav: function (t, e) {
            t.showSectionsMobileNav = e;
          },
          showOverview: function (t, e) {
            t.showOverview = e;
          },
          isLandscape: function (t, e) {
            t.isLandscape = e;
          },
          setAutoplay: function (t, e) {
            t.canAutoplay = e;
          },
        };
    },
    469: function (t, e, n) {
      "use strict";
      (n.r(e),
        n.d(e, "state", function () {
          return o;
        }),
        n.d(e, "mutations", function () {
          return r;
        }));
      var o = function () {
          return { appleTouchIcon: "", favicon: "" };
        },
        r = {
          setFavicons: function (t, data) {
            ((t.appleTouchIcon = data ? data.appleTouchIcon : ""),
              (t.favicon = data ? data.favicon : ""));
          },
        };
    },
    470: function (t, e, n) {
      "use strict";
      (n.r(e),
        n.d(e, "state", function () {
          return o;
        }),
        n.d(e, "mutations", function () {
          return r;
        }));
      (n(7), n(18), n(284));
      var o = function () {
          return { pages: [], home: {} };
        },
        r = {
          setData: function (t, data) {
            t.pages = data || [];
          },
          setPreviewData: function (t, data) {
            data.forEach(function (e) {
              var n = t.pages.findIndex(function (p) {
                return p.slug === e.slug;
              });
              n >= 0 ? (t.pages[n] = e) : t.pages.push(e);
            });
          },
          setHome: function (t, data) {
            t.home = data || {};
          },
        };
    },
    471: function (t, e, n) {
      "use strict";
      (n.r(e),
        n.d(e, "state", function () {
          return o;
        }),
        n.d(e, "mutations", function () {
          return r;
        }));
      (n(25), n(60), n(38));
      var o = function () {
          return { description: "", name: "", shareImage: "", favicon: "" };
        },
        r = {
          setSeo: function (t, data) {
            var e, n;
            ((t.description = data.description || ""),
              (t.name = data.name || ""),
              (t.shareImage =
                (null === (e = data.shareImage) || void 0 === e
                  ? void 0
                  : e.fields) || ""),
              (t.favicon =
                (null === (n = data.favicon) || void 0 === n
                  ? void 0
                  : n.fields) || ""));
          },
        };
    },
    472: function (t, e, n) {
      "use strict";
      (n.r(e),
        n.d(e, "socialQuery", function () {
          return o;
        }),
        n.d(e, "state", function () {
          return r;
        }),
        n.d(e, "mutations", function () {
          return l;
        }));
      var o =
          "\n  *[_type == \"settingsSocial\" && !(_id in path('drafts.**'))]{\n    socialSites,\n    twitterHandle\n  }[0]\n",
        r = function () {
          return { socialSites: [], twitterHandle: "" };
        },
        l = {
          setData: function (t, data) {
            ((t.socialSites = data ? data.socialSites : []),
              (t.twitterHandle = data ? data.twitterHandle : ""));
          },
        };
    },
    498: function (t, e) {},
    508: function (t, e, n) {
      "use strict";
      n.r(e);
      (n(30), n(25), n(26), n(7), n(41), n(18), n(42));
      var o = n(12),
        r = n(106);
      function l(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n));
        }
        return e;
      }
      var c = {
          data: function () {
            return { page: { title: "Page Not Found" } };
          },
          head: function () {
            var t = { title: this.page.title };
            return (function (t) {
              for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2
                  ? l(Object(source), !0).forEach(function (e) {
                      Object(o.a)(t, e, source[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        t,
                        Object.getOwnPropertyDescriptors(source),
                      )
                    : l(Object(source)).forEach(function (e) {
                        Object.defineProperty(
                          t,
                          e,
                          Object.getOwnPropertyDescriptor(source, e),
                        );
                      });
              }
              return t;
            })({}, Object(r.a)(this, t, this.page.pageMetaData || {}));
          },
        },
        d = c,
        v = n(2),
        component = Object(v.a)(
          d,
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "container container--small" }, [
              e(
                "h1",
                {
                  staticClass: "text-30 text-grey-light-c opacity-0 sm:text-36",
                },
                [t._v("\n    Page Not Found\n  ")],
              ),
              t._v(" "),
              e("div", [
                e("p", { staticClass: "mt-20 opacity-0 sm:mt-25" }, [
                  t._v(
                    "\n      Sorry, but the page you were trying to view does not exist.\n    ",
                  ),
                ]),
                t._v(" "),
                e(
                  "p",
                  { staticClass: "mt-20 opacity-0 sm:mt-25" },
                  [
                    e("NuxtLink", { attrs: { to: "/" } }, [
                      t._v("» Go Back Home"),
                    ]),
                  ],
                  1,
                ),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
    },
    509: function (t, e, n) {
      "use strict";
      n.r(e);
      n(21);
      var o = {
          computed: {
            settings: function () {
              return this.$store.state.settings || {};
            },
            isTouch: function () {
              return ["sm", "md"].includes(this.$mq);
            },
            isOverview: function () {
              return this.$store.state.showOverview;
            },
          },
          methods: {
            onCLickOverview: function () {
              this.$store.commit("showOverview", !this.isOverview);
            },
          },
        },
        r = (n(376), n(2)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t._self._c;
            return e("transition", { attrs: { name: "fade" } }, [
              e(
                "header",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !t.isOverview,
                      expression: "!isOverview",
                    },
                  ],
                  staticClass: "header header-main",
                },
                [
                  e("HeaderMenu"),
                  t._v(" "),
                  t.isTouch
                    ? t._e()
                    : e(
                        "div",
                        { staticClass: "header-main-right" },
                        [
                          e(
                            "a",
                            {
                              attrs: {
                                href: "https://www.sir-bier.ch/bier",
                                target: "_blank",
                                rel: "noopener",
                              },
                            },
                            [
                              t._v("\n        SHOP BIER"),
                              e("span", { staticClass: "arrow" }, [
                                e(
                                  "svg",
                                  {
                                    attrs: {
                                      width: "8",
                                      height: "8",
                                      viewBox: "0 0 8 8",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                    },
                                  },
                                  [
                                    e("path", {
                                      attrs: {
                                        d: "M0.987672 0.0559993H7.87567V6.68L6.89167 7.592V4.208C6.89167 3.368 6.89167 2.54 6.90367 1.7L0.807672 7.616L0.123672 6.872L6.24367 0.956C5.40367 0.968 4.56367 0.968 3.72367 0.968H0.123672L0.987672 0.0559993Z",
                                        fill: "white",
                                      },
                                    }),
                                  ],
                                ),
                              ]),
                            ],
                          ),
                          
                          e(
                            "a",
                            {
                              attrs: {
                                href: "https://www.sir-bier.ch/",
                                target: "_blank",
                                rel: "noopener",
                              },
                            },
                            [
                              t._v("\n        SIR BIER"),
                              e("span", { staticClass: "arrow" }, [
                                e(
                                  "svg",
                                  {
                                    attrs: {
                                      width: "8",
                                      height: "8",
                                      viewBox: "0 0 8 8",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                    },
                                  },
                                  [
                                    e("path", {
                                      attrs: {
                                        d: "M0.987672 0.0559993H7.87567V6.68L6.89167 7.592V4.208C6.89167 3.368 6.89167 2.54 6.90367 1.7L0.807672 7.616L0.123672 6.872L6.24367 0.956C5.40367 0.968 4.56367 0.968 3.72367 0.968H0.123672L0.987672 0.0559993Z",
                                        fill: "white",
                                      },
                                    }),
                                  ],
                                ),
                              ]),
                            ],
                          ),
                        ],
                        1,
                      ),
                  t._v(" "),
                  ["sm", "md"].includes(t.$mq)
                    ? t._e()
                    : e(
                        "button",
                        {
                          staticClass: "button-overview",
                          on: { click: t.onCLickOverview },
                        },
                        [t._v("\n      Overview\n    ")],
                      ),
                  t._v(" "),
                  "sm" === t.$mq
                    ? e(
                        "a",
                        {
                          staticClass: "button-sm-airco",
                          attrs: {
                            href: "https://www.sir-bier.ch/",
                            target: "_blank",
                            rel: "noopener",
                          },
                        },
                        [
                          t._v("\n      SIR BIER"),
                          e("span", { staticClass: "arrow" }, [
                            e(
                              "svg",
                              {
                                attrs: {
                                  width: "8",
                                  height: "8",
                                  viewBox: "0 0 8 8",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                },
                              },
                              [
                                e("path", {
                                  attrs: {
                                    d: "M0.987672 0.0559993H7.87567V6.68L6.89167 7.592V4.208C6.89167 3.368 6.89167 2.54 6.90367 1.7L0.807672 7.616L0.123672 6.872L6.24367 0.956C5.40367 0.968 4.56367 0.968 3.72367 0.968H0.123672L0.987672 0.0559993Z",
                                    fill: "white",
                                  },
                                }),
                              ],
                            ),
                          ]),
                        ],
                      )
                    : t._e(),
                ],
                1,
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
      installComponents(component, { HeaderMenu: n(510).default });
    },
    510: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n(40),
        r =
          (n(50),
          n(33),
          {
            data: function () {
              return { open: !1, contentHeight: 0, openTl: null };
            },
            computed: {
              campaign: function () {
                return this.$store.state.campaign || {};
              },
              sections: function () {
                return this.$store.getters.sections || !1;
              },
              menuText: function () {
                var t, e;
                return null === (t = this.campaign) ||
                  void 0 === t ||
                  null === (e = t.fields) ||
                  void 0 === e
                  ? void 0
                  : e.menuText;
              },
              currentYear: function () {
                return new Date().getFullYear();
              },
            },
            watch: {
              open: function (t, e) {
                t ? this.openMenu() : this.closeMenu();
              },
              $route: function () {
                this.open && (this.open = !1);
              },
            },
            mounted: function () {
              var t = this;
              this.$nextTick(function () {
                (window.addEventListener("resize", t.onResize),
                  t.updateSizes(),
                  t.initTimeline());
              });
            },
            destroyed: function () {
              window.removeEventListener("resize", this.onResize);
            },
            methods: {
              onResize: function () {
                this.updateSizes();
              },
              updateSizes: function () {
                var t,
                  e =
                    null === (t = this.$refs.content) || void 0 === t
                      ? void 0
                      : t.scrollHeight;
                e && (this.contentHeight = e);
              },
              toggleMenu: function () {
                this.open = !this.open;
              },
              initTimeline: function () {
                var t;
                null === (t = this.openTl) || void 0 === t || t.destroy();
                var e = this.$refs.card.map(function (t) {
                    return t.$el;
                  }),
                  n = [].concat(
                    Object(o.a)(this.$refs.stagger),
                    Object(o.a)(e),
                  ),
                  r = this.$refs.content;
                this.openTl = this.$gsap
                  .timeline({ paused: !0 })
                  .set(this.$refs.content, { scrollTo: 0 })
                  .to(this.$refs.content, {
                    duration: 0.66,
                    maxHeight: function () {
                      var t =
                        null == r ? void 0 : r.getBoundingClientRect().top;
                      return window.innerHeight - 10 - t;
                    },
                    ease: "expo.inOut",
                  })
                  .from(
                    n,
                    {
                      duration: 0.5,
                      opacity: 0,
                      y: 50,
                      stagger: 0.05,
                      scale: 0.95,
                      ease: "power4.out",
                    },
                    0.25,
                  );
              },
              openMenu: function () {
                var t;
                null === (t = this.openTl) || void 0 === t || t.play();
              },
              closeMenu: function () {
                var t;
                null === (t = this.openTl) || void 0 === t || t.reverse();
              },
              onClickOutside: function () {
                this.open = !1;
              },
            },
          }),
        l = (n(377), n(2)),
        component = Object(l.a)(
          r,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "nav",
              {
                directives: [
                  {
                    name: "click-outside",
                    rawName: "v-click-outside",
                    value: t.onClickOutside,
                    expression: "onClickOutside",
                  },
                ],
                staticClass: "header-menu",
                class: { "is-open": t.open },
                on: { click: t.toggleMenu },
              },
              [
                e("div", { ref: "main", staticClass: "header-menu-main" }, [
                  e(
                    "button",
                    { staticClass: "header-menu-trigger" },
                    [
                      e(
                        "transition",
                        { attrs: { name: "fade", mode: "out-in" } },
                        [
                          t.open
                            ? e(
                                "span",
                                {
                                  key: "triggerClose",
                                  ref: "triggerText",
                                  staticClass: "header-menu-trigger-text",
                                },
                                [t._v("\n          Close\n        ")],
                              )
                            : e(
                                "span",
                                {
                                  key: "triggerMenu",
                                  ref: "triggerText",
                                  staticClass: "header-menu-trigger-text",
                                },
                                [t._v("\n          Menu\n        ")],
                              ),
                        ],
                      ),
                    ],
                    1,
                  ),
                  t._v(" "),
                  e(
                    "h1",
                    { staticClass: "header-menu-title" },
                    [
                      e("SvgAirmadeLogo", {
                        attrs: { "aria-label": "AIRMADE™" },
                      }),
                      t._v(" System\n    "),
                    ],
                    1,
                  ),
                  t._v(" "),
                  e(
                    "div",
                    { staticClass: "header-menu-logo" },
                    [e("SvgLogo")],
                    1,
                  ),
                ]),
                t._v(" "),
                e(
                  "div",
                  { ref: "content", staticClass: "header-menu-content" },
                  [
                    e(
                      "div",
                      { ref: "inner", staticClass: "header-menu-inner" },
                      [
                        e("div", { staticClass: "header-menu-intro" }, [
                          e(
                            "div",
                            {
                              directives: [
                                {
                                  name: "multi-ref",
                                  rawName: "v-multi-ref:stagger",
                                  arg: "stagger",
                                },
                              ],
                              staticClass: "title",
                              attrs: { "aria-hidden": "true" },
                            },
                            [
                              e("SvgAirmadeLogo", {
                                attrs: { "aria-label": "AIRMADE™" },
                              }),
                              t._v(" System\n        "),
                            ],
                            1,
                          ),
                          t._v(" "),
                          t.menuText
                            ? e(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "multi-ref",
                                      rawName: "v-multi-ref:stagger",
                                      arg: "stagger",
                                    },
                                  ],
                                  staticClass: "text",
                                },
                                [
                                  e("p", {
                                    domProps: {
                                      innerHTML: t._s(
                                        t.$options.filters.nl2br(t.menuText),
                                      ),
                                    },
                                  }),
                                ],
                              )
                            : t._e(),
                        ]),
                        t._v(" "),
                        t.sections
                          ? e(
                              "div",
                              { staticClass: "header-menu-cards" },
                              [
                                e("CardFilm", {
                                  directives: [
                                    {
                                      name: "multi-ref",
                                      rawName: "v-multi-ref:card",
                                      arg: "card",
                                    },
                                  ],
                                }),
                                t._v(" "),
                                t._l(t.sections, function (section, t) {
                                  return e("CardSection", {
                                    directives: [
                                      {
                                        name: "multi-ref",
                                        rawName: "v-multi-ref:card",
                                        arg: "card",
                                      },
                                    ],
                                    key: "section".concat(t),
                                    attrs: { slug: section.slug, index: t },
                                  });
                                }),
                              ],
                              2,
                            )
                          : t._e(),
                        t._v(" "),
                        e(
                          "a",
                          {
                            staticClass: "header-menu-footer",
                            attrs: {
                              rel: "noopener",
                              href: "https://www.wrk.inc",
                              target: "_blank",
                            },
                          },
                          [
                            e("SvgLogo"),
                            t._v(" "),
                            e("p", [
                              t._v("SITE BY WRK, INC. (" + t._s(t.currentYear) + ")"),
                            ]),
                          ],
                          1,
                        ),
                      ],
                    ),
                  ],
                ),
              ],
            );
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
      installComponents(component, {
        SvgAirmadeLogo: n(511).default,
        SvgLogo: n(294).default,
        CardFilm: n(512).default,
        CardSection: n(513).default,
      });
    },
    511: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = {},
        r = (n(378), n(2)),
        component = Object(r.a)(
          o,
          function () {
            var t = this._self._c;
            return t(
              "svg",
              {
                staticClass: "svg-airmade",
                attrs: {
                  width: "60",
                  height: "9",
                  viewBox: "0 0 60 9",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
              },
              [
                t("path", {
                  attrs: {
                    d: "M5.01563 2.62926C4.98153 2.28551 4.83523 2.01847 4.5767 1.82812C4.31818 1.63778 3.96733 1.54261 3.52415 1.54261C3.22301 1.54261 2.96875 1.58523 2.76136 1.67045C2.55398 1.75284 2.39489 1.8679 2.28409 2.01562C2.17614 2.16335 2.12216 2.33097 2.12216 2.51847C2.11648 2.67472 2.14915 2.81108 2.22017 2.92756C2.29403 3.04403 2.39489 3.14489 2.52273 3.23011C2.65057 3.3125 2.7983 3.38494 2.96591 3.44744C3.13352 3.5071 3.3125 3.55824 3.50284 3.60085L4.28693 3.78835C4.66761 3.87358 5.01705 3.98722 5.33523 4.12926C5.65341 4.27131 5.92898 4.44602 6.16193 4.65341C6.39489 4.8608 6.57528 5.10511 6.70313 5.38636C6.83381 5.66761 6.90057 5.99006 6.90341 6.35369C6.90057 6.88778 6.7642 7.35085 6.49432 7.7429C6.22727 8.1321 5.84091 8.43466 5.33523 8.65057C4.83239 8.86364 4.22585 8.97017 3.51563 8.97017C2.81108 8.97017 2.19744 8.86222 1.67472 8.64631C1.15483 8.4304 0.74858 8.1108 0.455966 7.6875C0.166193 7.26136 0.0142046 6.73438 0 6.10653H1.78551C1.8054 6.39915 1.8892 6.64347 2.03693 6.83949C2.1875 7.03267 2.38778 7.17898 2.63778 7.27841C2.89062 7.375 3.17614 7.4233 3.49432 7.4233C3.80682 7.4233 4.07813 7.37784 4.30824 7.28693C4.54119 7.19602 4.72159 7.0696 4.84943 6.90767C4.97727 6.74574 5.04119 6.55966 5.04119 6.34943C5.04119 6.15341 4.98295 5.98864 4.86648 5.85511C4.75284 5.72159 4.58523 5.60795 4.36364 5.5142C4.14489 5.42045 3.87642 5.33523 3.55824 5.25852L2.60795 5.01989C1.87216 4.84091 1.29119 4.56108 0.865057 4.1804C0.43892 3.79972 0.227273 3.28693 0.230114 2.64205C0.227273 2.11364 0.367898 1.65199 0.651989 1.2571C0.93892 0.862216 1.33239 0.553977 1.83239 0.332386C2.33239 0.110795 2.90057 0 3.53693 0C4.18466 0 4.75 0.110795 5.23295 0.332386C5.71875 0.553977 6.09659 0.862216 6.36648 1.2571C6.63636 1.65199 6.77557 2.10938 6.78409 2.62926H5.01563Z M9.9897 0.119318V8.84659H8.14453V0.119318H9.9897Z M11.5078 8.84659V0.119318H14.951C15.6101 0.119318 16.1726 0.237216 16.6385 0.473011C17.1072 0.705966 17.4638 1.03693 17.7081 1.46591C17.9553 1.89205 18.0788 2.39347 18.0788 2.97017C18.0788 3.54972 17.9538 4.0483 17.7038 4.46591C17.4538 4.88068 17.0916 5.19886 16.6172 5.42045C16.1456 5.64205 15.5746 5.75284 14.9041 5.75284H12.5987V4.26989H14.6058C14.9581 4.26989 15.2507 4.22159 15.4837 4.125C15.7166 4.02841 15.8899 3.88352 16.0036 3.69034C16.12 3.49716 16.1783 3.2571 16.1783 2.97017C16.1783 2.6804 16.12 2.43608 16.0036 2.23722C15.8899 2.03835 15.7152 1.88778 15.4794 1.78551C15.2464 1.6804 14.9524 1.62784 14.5973 1.62784H13.353V8.84659H11.5078ZM16.2209 4.875L18.3899 8.84659H16.353L14.2308 4.875H16.2209Z M19.6811 8.84659V0.119318H22.7322C23.3402 0.119318 23.8416 0.224432 24.2365 0.434659C24.6314 0.642045 24.9254 0.921875 25.1186 1.27415C25.3118 1.62358 25.4084 2.01136 25.4084 2.4375C25.4084 2.8125 25.3416 3.12216 25.2081 3.36648C25.0774 3.6108 24.9041 3.80398 24.6882 3.94602C24.4751 4.08807 24.2436 4.19318 23.9936 4.26136V4.34659C24.2607 4.36364 24.5291 4.45739 24.799 4.62784C25.0689 4.7983 25.2947 5.04261 25.4766 5.3608C25.6584 5.67898 25.7493 6.06818 25.7493 6.52841C25.7493 6.96591 25.6499 7.35938 25.451 7.70881C25.2521 8.05824 24.9382 8.33523 24.5092 8.53977C24.0803 8.74432 23.522 8.84659 22.8345 8.84659H19.6811ZM20.7379 7.90909H22.8345C23.5249 7.90909 24.0149 7.77557 24.3047 7.50852C24.5973 7.23864 24.7436 6.91193 24.7436 6.52841C24.7436 6.23295 24.6683 5.96023 24.5178 5.71023C24.3672 5.45739 24.1527 5.25568 23.8743 5.10511C23.5959 4.9517 23.2663 4.875 22.8857 4.875H20.7379V7.90909ZM20.7379 3.95455H22.6982C23.0163 3.95455 23.3033 3.89205 23.5589 3.76705C23.8175 3.64205 24.022 3.46591 24.1726 3.23864C24.326 3.01136 24.4027 2.74432 24.4027 2.4375C24.4027 2.05398 24.2692 1.72869 24.0021 1.46165C23.7351 1.19176 23.3118 1.05682 22.7322 1.05682H20.7379V3.95455Z M27.4858 8.84659V0.119318H30.4347C31.1165 0.119318 31.6761 0.235795 32.1136 0.46875C32.5511 0.698864 32.875 1.01562 33.0852 1.41903C33.2955 1.82244 33.4006 2.28125 33.4006 2.79545C33.4006 3.30966 33.2955 3.76563 33.0852 4.16335C32.875 4.56108 32.5526 4.87358 32.1179 5.10085C31.6832 5.32528 31.1278 5.4375 30.4517 5.4375H28.0653V4.48295H30.4176C30.8835 4.48295 31.2585 4.41477 31.5426 4.27841C31.8295 4.14205 32.0369 3.94886 32.1648 3.69886C32.2955 3.44602 32.3608 3.14489 32.3608 2.79545C32.3608 2.44602 32.2955 2.14062 32.1648 1.87926C32.0341 1.6179 31.8253 1.41619 31.5384 1.27415C31.2514 1.12926 30.8722 1.05682 30.4006 1.05682H28.5426V8.84659H27.4858ZM31.5938 4.92614L33.7415 8.84659H32.5142L30.4006 4.92614H31.5938Z M35.1616 8.84659V0.119318H40.4286V1.05682H36.2184V4.00568H40.1559V4.94318H36.2184V7.90909H40.4968V8.84659H35.1616Z M43.9187 8.84659L41.5323 0.119318H42.6062L44.43 7.22727H44.5153L46.3732 0.119318H47.5664L49.4244 7.22727H49.5096L51.3335 0.119318H52.4073L50.021 8.84659H48.93L47.0039 1.89205H46.9357L45.0096 8.84659H43.9187Z M57.6634 3.1875L56.5057 0.573864H56.9744L57.7841 2.49148L58.5938 0.573864H59.0625L57.9048 3.1875H57.6634ZM56.4205 3.1875V0.573864H56.875V3.1875H56.4205ZM58.6932 3.1875V0.573864H59.1477V3.1875H58.6932ZM54.7159 3.1875V0.801136H55.1705V3.1875H54.7159ZM53.9205 0.971591V0.573864H55.9659V0.971591H53.9205Z",
                    fill: "white",
                  },
                }),
              ],
            );
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
    },
    512: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = {
          mixins: [n(22).a],
          computed: {
            campaign: function () {
              return this.$store.state.campaign || {};
            },
            thumbnail: function () {
              var t, e, n, o;
              return (
                (null === (t = this.campaign) ||
                void 0 === t ||
                null === (e = t.fields) ||
                void 0 === e
                  ? void 0
                  : e.filmCardImage) ||
                (null === (n = this.campaign) ||
                void 0 === n ||
                null === (o = n.fields) ||
                void 0 === o
                  ? void 0
                  : o.filmThumbnail)
              );
            },
          },
        },
        r = (n(379), n(2)),
        component = Object(r.a)(
          o,
          function () {
            var t,
              e,
              n = this,
              o = n._self._c;
            return n.thumbnail
              ? o(
                  "NuxtLink",
                  { staticClass: "card card-film", attrs: { to: "/film/" } },
                  [
                    o("div", { staticClass: "card-image" }, [
                      o("img", {
                        attrs: {
                          src: n.imageThumbnail(
                            null === (t = n.thumbnail.fields) ||
                              void 0 === t ||
                              null === (e = t.file) ||
                              void 0 === e
                              ? void 0
                              : e.url,
                            { width: 1280, quality: 80 },
                          ),
                          alt: "",
                        },
                      }),
                    ]),
                    n._v(" "),
                    o("button", { staticClass: "card-button" }, [
                      n._v("Watch the film"),
                    ]),
                  ],
                )
              : n._e();
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
    },
    513: function (t, e, n) {
      "use strict";
      n.r(e);
      (n(21), n(138));
      var o = {
          mixins: [n(22).a],
          props: {
            slug: { type: String, required: !0 },
            index: { type: Number, required: !0 },
          },
          computed: {
            section: function () {
              return this.$store.getters.sectionBySlug(this.slug) || !1;
            },
            campaign: function () {
              return this.$store.state.campaign || {};
            },
            thumbnail: function () {
              var t, e;
              return (
                (null === (t = this.section) || void 0 === t
                  ? void 0
                  : t.cardThumbnail) ||
                (null === (e = this.section) || void 0 === e
                  ? void 0
                  : e.videoThumbnail)
              );
            },
            realIndex: function () {
              return this.index + 1;
            },
            title: function () {
              var t;
              return null === (t = this.section) || void 0 === t
                ? void 0
                : t.title;
            },
            removeStep: function () {
              var t;
              return null === (t = this.section) || void 0 === t
                ? void 0
                : t.removeStep;
            },
          },
          methods: {
            onVideoMouseEnter: function (t) {
              if (!["sm", "md"].includes(this.$mq)) {
                var video = t.target.querySelector("video");
                video && video.play();
              }
            },
            onVideoMouseLeave: function (t) {
              if (!["sm", "md"].includes(this.$mq)) {
                var video = t.target.querySelector("video");
                video && video.pause();
              }
            },
          },
        },
        r = (n(380), n(2)),
        component = Object(r.a)(
          o,
          function () {
            var t,
              e,
              n = this,
              o = n._self._c;
            return n.section && n.thumbnail
              ? o(
                  "NuxtLink",
                  {
                    staticClass: "card card-section",
                    attrs: { to: "/".concat(n.slug, "/") },
                    nativeOn: {
                      mouseenter: function (t) {
                        return n.onVideoMouseEnter.apply(null, arguments);
                      },
                      mouseleave: function (t) {
                        return n.onVideoMouseLeave.apply(null, arguments);
                      },
                    },
                  },
                  [
                    o(
                      "div",
                      { staticClass: "card-image" },
                      [
                        ["sm", "md"].includes(n.$mq) || !n.section.video
                          ? o("img", {
                              attrs: {
                                src: n.imageThumbnail(
                                  null === (t = n.thumbnail.fields) ||
                                    void 0 === t ||
                                    null === (e = t.file) ||
                                    void 0 === e
                                    ? void 0
                                    : e.url,
                                  { width: 1280, quality: 80 },
                                ),
                                alt: "",
                              },
                            })
                          : o("SectionVideo", {
                              attrs: {
                                "video-url": n.section.video,
                                autoplay: !1,
                                thumbnail: n.section.videoThumbnail,
                                loop: !0,
                                controls: !1,
                              },
                            }),
                      ],
                      1,
                    ),
                    n._v(" "),
                    o("button", { staticClass: "card-button" }, [
                      n.removeStep
                        ? n._e()
                        : o("span", [n._v("Step 0" + n._s(n.realIndex) + ":")]),
                      n._v(" "),
                      o("span", {
                        domProps: {
                          innerHTML: n._s(n.$options.filters.co2(n.title)),
                        },
                      }),
                    ]),
                  ],
                )
              : n._e();
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
      installComponents(component, { SectionVideo: n(189).default });
    },
    514: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = {},
        r = (n(382), n(2)),
        component = Object(r.a)(
          o,
          function () {
            var t = this._self._c;
            return t(
              "svg",
              {
                staticClass: "icon-media icon-play",
                attrs: {
                  width: "12",
                  height: "12",
                  viewBox: "0 0 12 12",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
              },
              [
                t("path", {
                  attrs: {
                    d: "M1.5 0.5L11.5 6L1.5 11.5V0.5Z",
                    stroke: "black",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  },
                }),
              ],
            );
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
    },
    515: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = {},
        r = (n(383), n(2)),
        component = Object(r.a)(
          o,
          function () {
            var t = this._self._c;
            return t(
              "svg",
              {
                staticClass: "icon-media icon-pause",
                attrs: {
                  width: "12",
                  height: "12",
                  viewBox: "0 0 12 12",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
              },
              [
                t("path", {
                  attrs: {
                    d: "M11.5 0.5H8.5V11.5H11.5V0.5Z",
                    stroke: "black",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  },
                }),
                this._v(" "),
                t("path", {
                  attrs: {
                    d: "M3.5 0.5H0.5V11.5H3.5V0.5Z",
                    stroke: "black",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  },
                }),
              ],
            );
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
    },
    516: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = {},
        r = (n(384), n(2)),
        component = Object(r.a)(
          o,
          function () {
            var t = this._self._c;
            return t(
              "svg",
              {
                staticClass: "icon-media icon-soundon",
                attrs: {
                  width: "12",
                  height: "12",
                  viewBox: "0 0 12 12",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
              },
              [
                t("path", {
                  attrs: {
                    d: "M3.5 3.5H1.5C1.23478 3.5 0.98043 3.60536 0.792893 3.79289C0.605357 3.98043 0.5 4.23478 0.5 4.5V7.5C0.5 7.76522 0.605357 8.01957 0.792893 8.20711C0.98043 8.39464 1.23478 8.5 1.5 8.5H3.5L7.5 11.5V0.5L3.5 3.5Z",
                    stroke: "black",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  },
                }),
                this._v(" "),
                t("path", {
                  attrs: {
                    d: "M10.1465 3C10.5721 3.37537 10.913 3.83701 11.1465 4.35425C11.38 4.87149 11.5007 5.4325 11.5007 6C11.5007 6.5675 11.38 7.12851 11.1465 7.64575C10.913 8.16299 10.5721 8.62463 10.1465 9",
                    stroke: "black",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  },
                }),
              ],
            );
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
    },
    517: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = {},
        r = (n(385), n(2)),
        component = Object(r.a)(
          o,
          function () {
            var t = this._self._c;
            return t(
              "svg",
              {
                staticClass: "icon-media icon-soundoff",
                attrs: {
                  width: "12",
                  height: "12",
                  viewBox: "0 0 12 12",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
              },
              [
                t("path", {
                  attrs: {
                    d: "M3.5 3.5H1.5C1.23478 3.5 0.98043 3.60536 0.792893 3.79289C0.605357 3.98043 0.5 4.23478 0.5 4.5V7.5C0.5 7.76522 0.605357 8.01957 0.792893 8.20711C0.98043 8.39464 1.23478 8.5 1.5 8.5H3.5L7.5 11.5V0.5L3.5 3.5Z",
                    stroke: "black",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  },
                }),
              ],
            );
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
    },
    518: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = {},
        r = (n(386), n(2)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "svg",
              {
                staticClass: "icon-media icon-fullscreen",
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                },
              },
              [
                e(
                  "g",
                  {
                    attrs: {
                      "stroke-width": "1",
                      fill: "none",
                      stroke: "#000000",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                    },
                  },
                  [
                    e("rect", {
                      attrs: {
                        x: "4.5",
                        y: "4.5",
                        width: "7",
                        height: "7",
                        stroke: "#000000",
                      },
                    }),
                    t._v(" "),
                    e("path", {
                      attrs: { d: "M.5,5V2c0-.828,.672-1.5,1.5-1.5h3" },
                    }),
                    t._v(" "),
                    e("path", {
                      attrs: { d: "M11,.5h3c.828,0,1.5,.672,1.5,1.5v3" },
                    }),
                    t._v(" "),
                    e("path", {
                      attrs: { d: "M15.5,11v3c0,.828-.672,1.5-1.5,1.5h-3" },
                    }),
                    t._v(" "),
                    e("path", {
                      attrs: { d: "M5,15.5H2c-.828,0-1.5-.672-1.5-1.5v-3" },
                    }),
                  ],
                ),
              ],
            );
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
    },
    519: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = {},
        r = (n(387), n(2)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "svg",
              {
                staticClass: "icon-media icon-fullscreen",
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                },
              },
              [
                e(
                  "g",
                  {
                    attrs: {
                      "stroke-width": "1",
                      fill: "none",
                      stroke: "#000000",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                    },
                  },
                  [
                    e("path", { attrs: { d: "M.5,5V2A1.5,1.5,0,0,1,2,.5H5" } }),
                    t._v(" "),
                    e("path", {
                      attrs: { d: "M11,.5h3A1.5,1.5,0,0,1,15.5,2V5" },
                    }),
                    t._v(" "),
                    e("path", {
                      attrs: { d: "M15.5,11v3A1.5,1.5,0,0,1,14,15.5H11" },
                    }),
                    t._v(" "),
                    e("path", {
                      attrs: { d: "M5,15.5H2A1.5,1.5,0,0,1,.5,14V11" },
                    }),
                    t._v(" "),
                    e("rect", {
                      attrs: {
                        x: "4.5",
                        y: "6.5",
                        width: "7",
                        height: "3",
                        stroke: "#000000",
                      },
                    }),
                  ],
                ),
              ],
            );
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
    },
    520: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = {
          mixins: [n(22).a],
          computed: {
            sections: function () {
              return this.$store.getters.sections;
            },
          },
          methods: {
            onClickItem: function (t) {
              null != t && this.$store.commit("activeIndex", t);
            },
            videoThumbnailByIndex: function (t) {
              var e, n;
              return null === (e = this.sections) ||
                void 0 === e ||
                null === (n = e[t]) ||
                void 0 === n
                ? void 0
                : n.videoThumbnail;
            },
            videoThumbnailSrcByIndex: function (t) {
              var e,
                n,
                o = this.videoThumbnailByIndex(t);
              return (
                !!o &&
                this.imageThumbnail(
                  null === (e = o.fields) ||
                    void 0 === e ||
                    null === (n = e.file) ||
                    void 0 === n
                    ? void 0
                    : n.url,
                  { width: 800 },
                )
              );
            },
            videoThumbnailDimensionsByIndex: function (t) {
              return (
                !!this.videoThumbnailByIndex(t) && {
                  width:
                    this.videoThumbnailByIndex(t).fields.file.details.image
                      .width,
                  height:
                    this.videoThumbnailByIndex(t).fields.file.details.image
                      .height,
                }
              );
            },
          },
        },
        r = (n(388), n(2)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t._self._c;
            return e("nav", { staticClass: "navleft" }, [
              e(
                "ul",
                { staticClass: "navleft-list" },
                [
                  t._m(0),
                  t._v(" "),
                  t._l(t.sections, function (section, n) {
                    return e(
                      "li",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !section.removeStep,
                            expression: "!section.removeStep",
                          },
                        ],
                        key: section.slug,
                        staticClass: "navleft-item",
                      },
                      [
                        e(
                          "NuxtLink",
                          { attrs: { to: "/".concat(section.slug, "/") } },
                          [
                            e("span", { staticClass: "index" }, [
                              t._v(t._s(t._f("pad")(n + 1))),
                            ]),
                            t._v(" "),
                            e("span", {
                              staticClass: "title",
                              domProps: {
                                innerHTML: t._s(
                                  t.$options.filters.co2(section.title),
                                ),
                              },
                            }),
                            t._v(" "),
                            e(
                              "span",
                              { staticClass: "video-thumbnail" },
                              [
                                section.video
                                  ? e("SectionVideo", {
                                      attrs: {
                                        "video-url": section.video,
                                        autoplay: !0,
                                        thumbnail: section.videoThumbnail,
                                        loop: !0,
                                        controls: !1,
                                      },
                                    })
                                  : e("img", {
                                      attrs: {
                                        src: t.videoThumbnailSrcByIndex(n),
                                        width:
                                          t.videoThumbnailDimensionsByIndex(n)
                                            .width,
                                        height:
                                          t.videoThumbnailDimensionsByIndex(n)
                                            .height,
                                        alt: section.title,
                                      },
                                    }),
                              ],
                              1,
                            ),
                          ],
                        ),
                      ],
                      1,
                    );
                  }),
                ],
                2,
              ),
            ]);
          },
          [
            function () {
              var t = this._self._c;
              return t("li", { staticClass: "navleft-heading" }, [
                t("h2", [this._v("System Process")]),
              ]);
            },
          ],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
      installComponents(component, { SectionVideo: n(189).default });
    },
    521: function (t, e, n) {
      "use strict";
      n.r(e);
      n(33);
      var o = n(40),
        r =
          (n(52),
          n(26),
          n(7),
          n(21),
          {
            mixins: [n(22).a],
            computed: {
              videos: function () {
                return this.$store.getters.videos || [];
              },
              activeIndex: function () {
                return this.$store.state.activeIndex;
              },
              isOverview: function () {
                return this.$store.state.showOverview;
              },
              nextIndex: function () {
                return this.activeIndex + 1 > this.videos.length - 1
                  ? 0
                  : this.activeIndex + 1;
              },
              prevIndex: function () {
                return this.activeIndex - 1 < 0
                  ? this.videos.length - 1
                  : this.activeIndex - 1;
              },
            },
            data: function () {
              return {
                hasPositionedOnce: !1,
                flip: { flip: null, state: null },
                isFlippingOut: !1,
                overview: { flip: null, state: null },
                isFullThumbnail: !1,
              };
            },
            watch: {
              activeIndex: function (t, e) {
                var n = this,
                  o = t > e;
                setTimeout(function () {
                  n.positionList(!0, o);
                }, 50);
              },
              isOverview: function (t) {
                this.toggleOverview(t);
              },
            },
            mounted: function () {
              var t = this;
              window.addEventListener("resize", function () {
                t.positionList(!1);
              });
            },
            destroyed: function () {
              var t = this;
              window.removeEventListener("resize", function () {
                t.positionList(!1);
              });
            },
            methods: {
              toggleOverview: function () {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  ? this.openOverview()
                  : this.closeOverview();
              },
              openOverview: function () {
                var q = this.$gsap.utils.selector(this.$el),
                  t = [this.$el].concat(Object(o.a)(q(".f")));
                ((this.flip.state = this.$Flip.getState(t)),
                  this.$el.classList.add("is-overview"),
                  this.$gsap.set(t, { clearProps: "all" }),
                  (this.flip.flip = this.$Flip.from(this.flip.state, {
                    duration: 1,
                    ease: "expo.out",
                    absolute: !0,
                    nested: !0,
                    simple: !0,
                    toggleClass: "is-flipping",
                  })));
              },
              closeOverview: function () {
                var t = this,
                  q = this.$gsap.utils.selector(this.$el),
                  e = [this.$el].concat(Object(o.a)(q(".f")));
                this.$gsap.to(this.$el, {
                  opacity: 0,
                  duration: 0.75,
                  onComplete: function () {
                    var n, o;
                    (t.$Flip.killFlipsOf(e),
                      null === (n = t.flip.flip) || void 0 === n || n.kill(),
                      null === (o = t.overview.flip) ||
                        void 0 === o ||
                        o.kill(),
                      t.$el.classList.remove("is-overview"),
                      setTimeout(function () {
                        (t.positionList(!1),
                          t.$gsap.to(t.$el, {
                            opacity: 1,
                            duration: 0.5,
                            overwrite: !0,
                          }));
                      }, 250));
                  },
                });
              },
              onClickOverviewItem: function (t, e) {
                var n = this;
                (this.$store.commit("activeIndex", t),
                  setTimeout(function () {
                    var r = e.target.closest(".navbottom-item"),
                      l = n.$refs.list,
                      c = Object(o.a)(
                        l.querySelectorAll(".navbottom-item"),
                      ).filter(function (t) {
                        return t !== r;
                      }),
                      q = n.$gsap.utils.selector(n.$el),
                      d = [n.$el, r].concat(Object(o.a)(q(".f")));
                    ((n.overview.state = n.$Flip.getState(d)),
                      r.classList.add("is-flip-full"),
                      n.$gsap.to(c, { opacity: 0, duration: 0.2 }),
                      n.$Flip.from(n.overview.state, {
                        duration: 1,
                        ease: "expo.inOut",
                        nested: !0,
                        absolute: !0,
                        simple: !0,
                        toggleClass: "is-flipping",
                        onComplete: function () {
                          (n.$nuxt.$emit("overview:closing"),
                            n.$gsap.to(n.$el, {
                              opacity: 0,
                              duration: 0.66,
                              delay: 0.2,
                              onComplete: function () {
                                n.$store.commit("showOverview", !1);
                              },
                            }));
                          var e = document.querySelector(
                            '[data-index="'.concat(t, '"] video'),
                          );
                          e && (e.currentTime = 0);
                        },
                      }));
                  }, 100));
              },
              positionList: function () {
                var animate =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0],
                  t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                this.hasPositionedOnce = !0;
                var e = this.$refs.list,
                  n = null == e ? void 0 : e.querySelector(".is-active");
                if (!n) return !1;
                var o = n.getBoundingClientRect(),
                  r =
                    o.left +
                    o.width / 2 -
                    window.innerWidth / 2 +
                    (t ? -10 : 10),
                  l = animate && !this.isFullThumbnail ? 1 : 0;
                this.$gsap.to(e, {
                  x: "-=".concat(r),
                  duration: l,
                  ease: "power3.out",
                });
              },
              onClickItem: function (t, e) {
                if (this.isOverview)
                  return (this.onClickOverviewItem(t, e), !1);
                null != t && this.$store.commit("activeIndex", t);
              },
              getThumbnail: function (t) {
                var video = this.$store.getters.videoBySlug(t);
                return !!video && video.videoThumbnail;
              },
              getThumbnailSrc: function (t) {
                var e,
                  n,
                  o = this.getThumbnail(t);
                return (
                  !!o &&
                  this.imageThumbnail(
                    null === (e = o.fields) ||
                      void 0 === e ||
                      null === (n = e.file) ||
                      void 0 === n
                      ? void 0
                      : n.url,
                    {
                      width: ["sm", "md"].includes(this.$mq) ? 1280 : 1920,
                      quality: 80,
                    },
                  )
                );
              },
              getVideoObject: function (t) {
                var e;
                return (
                  (null === (e = this.$store.state.bgVideos) || void 0 === e
                    ? void 0
                    : e[t]) || {}
                );
              },
              getStyleAttr: function (t) {
                var e = this.getVideoObject(t);
                if (!e) return !1;
                var progress = e.progress || 0,
                  n = e.duration || 0;
                return { "--progress": "".concat(1e3 * (progress / n), "%") };
              },
              onMouseEnter: function (t) {
                if (!this.isOverview || ["sm", "md"].includes(this.$mq))
                  return !1;
                this.$gsap.to(t.target, {
                  "--w": 15,
                  "--h": 9,
                  duration: 0.33,
                });
              },
              onMouseLeave: function (t) {
                if (!this.isOverview || ["sm", "md"].includes(this.$mq))
                  return !1;
                this.$gsap.to(t.target, {
                  "--w": 10,
                  "--h": 6,
                  duration: 0.33,
                });
              },
              onMouseMove: function (t) {},
              onClickParent: function () {
                this.isOverview && this.$store.commit("showOverview", !1);
              },
              onMobileSwipe: function (t) {
                "sm" === this.$mq &&
                  (this.isOverview ||
                    ("left" === t.direction
                      ? void 0 !== this.nextIndex &&
                        this.$store.commit("activeIndex", this.nextIndex)
                      : "right" === t.direction &&
                        void 0 !== this.prevIndex &&
                        this.$store.commit("activeIndex", this.prevIndex)));
              },
            },
          }),
        l = r,
        c = (n(389), n(2)),
        component = Object(c.a)(
          l,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "transition",
              { attrs: { name: "fade", mode: "out-in" } },
              [
                e(
                  "nav",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !t.isFlippingOut,
                        expression: "!isFlippingOut",
                      },
                      {
                        name: "swipe",
                        rawName: "v-swipe",
                        value: {
                          detect: ["left", "right"],
                          handler: t.onMobileSwipe,
                        },
                        expression:
                          "{ detect: ['left', 'right'], handler: onMobileSwipe }",
                      },
                    ],
                    staticClass: "navbottom f",
                    class: { "is-full-thumb": t.isFullThumbnail },
                    on: {
                      click: function (e) {
                        return e.target !== e.currentTarget
                          ? null
                          : t.onClickParent.apply(null, arguments);
                      },
                    },
                  },
                  [
                    e(
                      "ul",
                      { ref: "list", staticClass: "navbottom-list f" },
                      t._l(t.videos, function (video, n) {
                        return e(
                          "li",
                          {
                            key: "".concat(n).concat(video.slug),
                            class: "navbottom-item f "
                              .concat(video.slug)
                              .concat(
                                t.activeIndex === n ? " is-active" : "",
                                " ",
                              )
                              .concat(t.isOverview ? " is-overview" : ""),
                            attrs: {
                              "data-index": n,
                              "data-ref": "item",
                              "aria-label": "View ".concat(n + 1),
                            },
                            on: {
                              click: function (e) {
                                return t.onClickItem(n, e);
                              },
                              mouseenter: function (e) {
                                return e.target !== e.currentTarget
                                  ? null
                                  : t.onMouseEnter.apply(null, arguments);
                              },
                              mouseleave: function (e) {
                                return e.target !== e.currentTarget
                                  ? null
                                  : t.onMouseLeave.apply(null, arguments);
                              },
                              mousemove: t.onMouseMove,
                            },
                          },
                          [
                            t.getThumbnail(video.slug)
                              ? e("div", { staticClass: "thumbnail f" }, [
                                  e(
                                    "svg",
                                    {
                                      staticClass: "f",
                                      attrs: {
                                        width: "22",
                                        height: "21",
                                        viewBox: "0 0 22 21",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                      },
                                    },
                                    [
                                      e("line", {
                                        attrs: {
                                          x1: "11.2009",
                                          y1: "2.18557e-08",
                                          x2: "11.2009",
                                          y2: "21",
                                          stroke: "white",
                                        },
                                      }),
                                      t._v(" "),
                                      e("line", {
                                        attrs: {
                                          x1: "0.200867",
                                          y1: "10",
                                          x2: "21.2009",
                                          y2: "10",
                                          stroke: "white",
                                        },
                                      }),
                                    ],
                                  ),
                                  t._v(" "),
                                  e("img", {
                                    staticClass: "f",
                                    attrs: {
                                      src: t.getThumbnailSrc(video.slug),
                                      alt: "",
                                      width: t.getThumbnail(video.slug).fields
                                        .file.details.image.width,
                                      height: t.getThumbnail(video.slug).fields
                                        .file.details.image.height,
                                    },
                                  }),
                                ])
                              : t._e(),
                          ],
                        );
                      }),
                      0,
                    ),
                  ],
                ),
              ],
            );
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
    },
    522: function (t, e, n) {
      "use strict";
      n.r(e);
      (n(7), n(18));
      var o = {
          mixins: [n(22).a],
          data: function () {
            return {};
          },
          computed: {
            show: function () {
              return "sm" !== this.$mq && this.activeSlug;
            },
            activeSlug: function () {
              var t;
              return null === (t = this.$route.params) || void 0 === t
                ? void 0
                : t.slug;
            },
            keymap: function () {
              var t = this;
              return {
                Escape: function () {
                  return t.$router.push("/");
                },
                Right: function () {
                  var e;
                  null !== (e = t.nextSection) &&
                    void 0 !== e &&
                    e.slug &&
                    t.$router.push("/".concat(t.nextSection.slug, "/"));
                },
                Left: function () {
                  var e;
                  null !== (e = t.prevSection) &&
                    void 0 !== e &&
                    e.slug &&
                    t.$router.push("/".concat(t.prevSection.slug, "/"));
                },
              };
            },
            section: function () {
              return this.$store.getters.sectionBySlug(this.$route.params.slug);
            },
            sectionMedia: function () {
              var t;
              return (
                (null === (t = this.section) || void 0 === t
                  ? void 0
                  : t.media) || []
              );
            },
            nextSection: function () {
              return this.$store.getters.nextSectionBySlug(
                this.$route.params.slug,
              );
            },
            prevSection: function () {
              return this.$store.getters.previousSectionBySlug(
                this.$route.params.slug,
              );
            },
            sections: function () {
              return this.$store.getters.sections;
            },
            firstSection: function () {
              var t;
              return null === (t = this.sections) || void 0 === t
                ? void 0
                : t[0];
            },
            lastSection: function () {
              var t;
              return null === (t = this.sections) || void 0 === t
                ? void 0
                : t[this.sections.length - 1];
            },
            videoUrl: function () {
              var t;
              return null === (t = this.section) || void 0 === t
                ? void 0
                : t.video;
            },
            videoThumbnail: function () {
              var t;
              return null === (t = this.section) || void 0 === t
                ? void 0
                : t.videoThumbnail;
            },
            content: function () {
              var t;
              return null === (t = this.section) || void 0 === t
                ? void 0
                : t.content;
            },
            removeStep: function () {
              var t;
              return null === (t = this.section) || void 0 === t
                ? void 0
                : t.removeStep;
            },
          },
          mounted: function () {
            this.$nextTick(this.preloadThumbnails);
          },
          methods: {
            getStepIndex: function (t) {
              var e = this.$store.getters.sectionIndexBySlug(t);
              return null != e && e;
            },
            getStepText: function (t) {
              var e = this.$store.getters.sectionIndexBySlug(t);
              return null != e && "Step 0".concat(e + 1);
            },
            preloadThumbnails: function () {
              var t = this;
              this.sections.forEach(function (section) {
                var e,
                  n,
                  o,
                  r,
                  l,
                  c,
                  d = section.videoThumbnail;
                if (
                  null == d ||
                  null === (e = d.fields) ||
                  void 0 === e ||
                  null === (n = e.file) ||
                  void 0 === n ||
                  !n.url
                )
                  return !1;
                ((new Image().src = t.imageThumbnail(
                  null === (o = d.fields) ||
                    void 0 === o ||
                    null === (r = o.file) ||
                    void 0 === r
                    ? void 0
                    : r.url,
                  { width: 300 },
                )),
                  (new Image().src = t.imageThumbnail(
                    null === (l = d.fields) ||
                      void 0 === l ||
                      null === (c = l.file) ||
                      void 0 === c
                      ? void 0
                      : c.url,
                    { width: 1280 },
                  )));
              });
            },
          },
        },
        r = (n(390), n(2)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "transition",
              { attrs: { name: "sections-nav-slideup" } },
              [
                t.show
                  ? e(
                      "nav",
                      { staticClass: "sections-nav" },
                      [
                        e(
                          "transition",
                          { attrs: { name: "sections-nav", mode: "out-in" } },
                          [
                            t.prevSection
                              ? e("SectionNavItem", {
                                  key: "prevSection".concat(t.prevSection.slug),
                                  staticClass: "is-prev",
                                  attrs: {
                                    section: t.prevSection,
                                    "is-prev": !0,
                                  },
                                })
                              : t._e(),
                          ],
                          1,
                        ),
                        t._v(" "),
                        e(
                          "transition",
                          { attrs: { name: "sections-nav", mode: "out-in" } },
                          [
                            t.nextSection
                              ? e("SectionNavItem", {
                                  key: "nextSection".concat(t.nextSection.slug),
                                  staticClass: "is-next",
                                  attrs: { section: t.nextSection },
                                })
                              : t._e(),
                          ],
                          1,
                        ),
                      ],
                      1,
                    )
                  : t._e(),
              ],
            );
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
      installComponents(component, { SectionNavItem: n(523).default });
    },
    523: function (t, e, n) {
      "use strict";
      n.r(e);
      n(33);
      var o = {
          mixins: [n(22).a],
          props: {
            section: { type: Object, required: !0 },
            isPrev: { type: Boolean, required: !1, default: !1 },
          },
          computed: {
            heading: function () {
              return this.isPrev ? "Prev" : "Next";
            },
            headingHtml: function () {
              return ""
                .concat(this.heading, ": <br />")
                .concat(this.$options.filters.co2(this.title));
            },
            title: function () {
              var t;
              return null === (t = this.section) || void 0 === t
                ? void 0
                : t.title;
            },
            thumbnail: function () {
              var t;
              return null === (t = this.section) || void 0 === t
                ? void 0
                : t.videoThumbnail;
            },
            thumbnailSrc: function () {
              var t,
                e,
                n = this.thumbnail;
              return (
                !!n &&
                this.imageThumbnail(
                  null === (t = n.fields) ||
                    void 0 === t ||
                    null === (e = t.file) ||
                    void 0 === e
                    ? void 0
                    : e.url,
                  { width: 300 },
                )
              );
            },
            thumbnailDimensions: function () {
              var t, e, n, o, r, l, c, d;
              return (
                !!this.thumbnail && {
                  width:
                    null === (t = this.thumbnail.fields) ||
                    void 0 === t ||
                    null === (e = t.file) ||
                    void 0 === e ||
                    null === (n = e.details) ||
                    void 0 === n ||
                    null === (o = n.image) ||
                    void 0 === o
                      ? void 0
                      : o.width,
                  height:
                    null === (r = this.thumbnail.fields) ||
                    void 0 === r ||
                    null === (l = r.file) ||
                    void 0 === l ||
                    null === (c = l.details) ||
                    void 0 === c ||
                    null === (d = c.image) ||
                    void 0 === d
                      ? void 0
                      : d.height,
                }
              );
            },
          },
        },
        r = (n(391), n(2)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t._self._c;
            return t.section
              ? e(
                  "NuxtLink",
                  {
                    staticClass: "section-nav-item",
                    attrs: { to: "/".concat(t.section.slug, "/") },
                  },
                  [
                    e("div", { staticClass: "section-nav-item-inner" }, [
                      e("p", {
                        staticClass: "section-nav-item-heading",
                        domProps: { innerHTML: t._s(t.headingHtml) },
                      }),
                      t._v(" "),
                      t.thumbnailSrc && t.thumbnailDimensions
                        ? e("div", { staticClass: "section-nav-item-image" }, [
                            e("img", {
                              attrs: {
                                src: t.thumbnailSrc,
                                alt: t.isPrev ? "Previous" : "Next",
                                width: t.thumbnailDimensions.width,
                                height: t.thumbnailDimensions.height,
                              },
                            }),
                          ])
                        : t._e(),
                    ]),
                  ],
                )
              : t._e();
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
    },
    524: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = {
          computed: {
            show: function () {
              return (
                "sm" === this.$mq &&
                this.$store.state.showSectionsMobileNav &&
                this.activeSlug
              );
            },
            sections: function () {
              return this.$store.getters.sections || [];
            },
            activeSlug: function () {
              var t;
              return null === (t = this.$route.params) || void 0 === t
                ? void 0
                : t.slug;
            },
          },
        },
        r = (n(392), n(2)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t._self._c;
            return e("transition", { attrs: { name: "fade" } }, [
              t.show
                ? e(
                    "nav",
                    { staticClass: "sm-sections-nav" },
                    t._l(t.sections, function (section, n) {
                      return e("NuxtLink", {
                        key: "smNav".concat(n),
                        class: { "is-active": section.slug === t.activeSlug },
                        attrs: {
                          "aria-label": section.title,
                          to: "/".concat(section.slug, "/"),
                        },
                      });
                    }),
                    1,
                  )
                : t._e(),
            ]);
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
    },
    525: function (t, e, n) {
      "use strict";
      n.r(e);
      n(52);
      var o = {
          computed: {
            videos: function () {
              return this.$store.getters.videos || [];
            },
            isOverview: function () {
              return this.$store.state.showOverview;
            },
          },
          data: function () {
            return { hideOverviewBg: !1 };
          },
          created: function () {
            this.$nuxt.$on("overview:closing", this.onOverviewClosing);
          },
          destroyed: function () {
            this.$nuxt.$off("overview:closing", this.onOverviewClosing);
          },
          methods: {
            onOverviewClosing: function () {
              var t = this;
              ((this.hideOverviewBg = !0),
                setTimeout(function () {
                  t.hideOverviewBg = !1;
                }, 1e3));
            },
            onClickOverviewBg: function () {
              this.isOverview && this.$store.commit("showOverview", !1);
            },
            onBgEnter: function () {
              this.$nuxt.$emit("bgvideo:pauseActive");
            },
            onBgLeave: function () {
              this.$nuxt.$emit("bgvideo:restartActive");
            },
          },
        },
        r = (n(393), n(2)),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "bgvideos" },
              [
                t._l(t.videos, function (video, t) {
                  return e("SectionVideoBg", {
                    key: video.slug,
                    attrs: { slug: video.slug, index: t },
                  });
                }),
                t._v(" "),
                e(
                  "transition",
                  {
                    attrs: { name: "fade-only-in" },
                    on: { enter: t.onBgEnter, beforeLeave: t.onBgLeave },
                  },
                  [
                    t.isOverview && !t.hideOverviewBg
                      ? e("div", {
                          directives: [
                            {
                              name: "hotkey",
                              rawName: "v-hotkey",
                              value: { esc: "onClickOverviewBg" },
                              expression: "{ esc: 'onClickOverviewBg' }",
                            },
                          ],
                          staticClass: "bgvideos-overview",
                          on: {
                            click: function (e) {
                              return e.target !== e.currentTarget
                                ? null
                                : t.onClickOverviewBg.apply(null, arguments);
                            },
                          },
                        })
                      : t._e(),
                  ],
                ),
              ],
              2,
            );
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
      installComponents(component, { SectionVideoBg: n(526).default });
    },
    526: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n(40),
        r =
          (n(138),
          n(52),
          n(21),
          n(49),
          n(250),
          n(139),
          n(394),
          n(7),
          n(123),
          n(18),
          n(298)),
        l = n.n(r),
        c = n(79),
        d = {
          mixins: [n(22).a],
          props: {
            slug: { type: String, required: !0 },
            index: { type: Number, required: !0 },
          },
          data: function () {
            return {
              videoEl: null,
              canPlayThrough: !1,
              hasPlayed: !1,
              hotspots: [],
              currentTimeFormatted: "00:00:000",
              timeInterval: null,
              hls: null,
              hasInit: !1,
            };
          },
          computed: {
            isOverview: function () {
              return this.$store.state.showOverview;
            },
            video: function () {
              return this.$store.getters.videoBySlug(this.slug) || !1;
            },
            videoUrl: function () {
              var t, e, n;
              return this.isLandscape ||
                null === (t = this.video) ||
                void 0 === t ||
                !t.bgVideoMobile
                ? null === (n = this.video) || void 0 === n
                  ? void 0
                  : n.bgVideo
                : null === (e = this.video) || void 0 === e
                  ? void 0
                  : e.bgVideoMobile;
            },
            videoThumbnail: function () {
              var t, e, n;
              return this.isLandscape ||
                null === (t = this.video) ||
                void 0 === t ||
                !t.videoThumbnailMobile
                ? null === (n = this.video) || void 0 === n
                  ? void 0
                  : n.videoThumbnail
                : null === (e = this.video) || void 0 === e
                  ? void 0
                  : e.videoThumbnailMobile;
            },
            videoThumbnailSrc: function () {
              var t,
                e,
                n = this.videoThumbnail;
              return (
                !!n &&
                this.imageThumbnail(
                  null === (t = n.fields) ||
                    void 0 === t ||
                    null === (e = t.file) ||
                    void 0 === e
                    ? void 0
                    : e.url,
                  { width: this.isLandscape ? 1280 : 1080, quality: 80 },
                )
              );
            },
            activeIndex: function () {
              return this.$store.state.activeIndex;
            },
            nextIndex: function () {
              return this.$store.getters.nextIndex;
            },
            isActive: function () {
              return this.index === this.activeIndex;
            },
            hotspotsObject: function () {
              var t, e, n, r, l, c, d, v, h;
              return !this.isLandscape &&
                (null === (t = this.video) ||
                void 0 === t ||
                null === (e = t.hotspotsMobile) ||
                void 0 === e ||
                null === (n = e.hotspots) ||
                void 0 === n
                  ? void 0
                  : n.length) > 0
                ? null === (h = this.video) || void 0 === h
                  ? void 0
                  : h.hotspotsMobile.hotspots
                : (null === (r = this.video) ||
                  void 0 === r ||
                  null === (l = r.hotspots) ||
                  void 0 === l ||
                  null === (c = l.hotspots) ||
                  void 0 === c
                    ? void 0
                    : c.length) > 0 &&
                    Object(o.a)(
                      null === (d = this.video) ||
                        void 0 === d ||
                        null === (v = d.hotspots) ||
                        void 0 === v
                        ? void 0
                        : v.hotspots,
                    );
            },
            isLandscape: function () {
              return this.$store.state.isLandscape;
            },
            videoDimensions: function () {
              return this.isLandscape
                ? { width: 1920, height: 1326 }
                : { width: 1080, height: 1920 };
            },
            canAutoplay: function () {
              return this.$store.state.canAutoplay;
            },
          },
          watch: {
            isActive: function (t) {
              !1 === t
                ? (this.animateHide(), this.pauseAndReset(0.66))
                : (this.animateReveal(),
                  this.initScramble(),
                  this.playFromStart());
            },
          },
          mounted: function () {
            (this.addEvents(),
              this.$nextTick(this.init),
              (window.c = this.calculateHotspotPositions));
          },
          beforeDestroy: function () {
            (this.removeEvents(),
              this.timeInterval && clearInterval(this.timeInterval));
          },
          destroyed: function () {
            var t = this;
            this.hls &&
              setTimeout(function () {
                var e;
                (t.hls.destroy(),
                  null === (e = t.videoEl) || void 0 === e || e.load());
              }, 1e3);
          },
          methods: {
            isHotspotLinkOrView: function (t, e) {
              return null != t && t.content && parseInt(t.content)
                ? "view"
                : "link";
            },
            isHotspotRightSide: function (t) {
              return (null == t ? void 0 : t.effectiveX) && t.effectiveX > 70;
            },
            onHotspotClick: function (t, e) {
              if ("view" === this.isHotspotLinkOrView(t)) {
                var content = null == t ? void 0 : t.content;
                if (!!parseInt(content))
                  return (
                    this.$store.commit("activeIndex", parseInt(content)),
                    e.preventDefault(),
                    e.stopPropagation(),
                    !1
                  );
              }
            },
            animateReveal: function () {
              var t = this,
                e = this.$el.querySelector("video");
              this.$gsap
                .timeline()
                .fromTo(
                  this.$el,
                  { autoAlpha: 0 },
                  { autoAlpha: 1, duration: 0.66 },
                  0,
                )
                .fromTo(
                  e,
                  { scale: 1.1, force3D: !0 },
                  { scale: 1, force3D: !0, duration: 0.66 },
                  0,
                )
                .add(function () {
                  t.calculateHotspotPositions();
                });
            },
            animateHide: function () {
              var t = this.$el.querySelector("video");
              this.$gsap
                .timeline()
                .to(this.$el, { autoAlpha: 0, duration: 0.66 }, 0)
                .to(t, { scale: 1.1, force3D: !0, duration: 0.75 }, 0);
            },
            initScramble: function () {
              var t = this.hasInit ? 0 : 0.5,
                e = this.$el.querySelectorAll(".hotspots-item"),
                n = this.$el.querySelectorAll("span.step");
              if (!n.length) return !1;
              (this.$gsap.from(e, {
                scale: 0,
                force3D: !0,
                duration: 0.66,
                ease: "power4.out",
                stagger: 0.1,
                delay: t,
              }),
                this.$gsap.to(n, {
                  scrambleText: { text: "{original}", revealDelay: 0.5 },
                  duration: 0.5,
                  delay: t,
                  ease: "none",
                }));
            },
            init: function () {
              var t = this,
                e = this.$el.querySelector("video");
              e &&
                this.videoUrl &&
                ((this.videoEl = e),
                (this.videoEl.src = this.videoUrl),
                this.initHls(),
                this.timeInterval && clearInterval(this.timeInterval),
                (this.timeInterval = setInterval(function () {
                  t.updateTimeFormatted();
                }, 10)));
            },
            initHls: function () {
              var t, e;
              if (this.videoEl && this.videoUrl) {
                if (
                  (this.hls && this.hls.destroy(),
                  null === (t = this.videoEl) ||
                    void 0 === t ||
                    null === (e = t.src) ||
                    void 0 === e ||
                    !e.includes("m3u8"))
                )
                  return !1;
                ((this.hls = new c.a({})),
                  this.hls.attachMedia(this.videoEl),
                  this.hls.loadSource(this.videoUrl));
              }
            },
            pauseAndReset: function () {
              var t = this,
                e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0;
              (this.videoEl.pause(),
                setTimeout(function () {
                  t.videoEl.currentTime = 0;
                }, 1e3 * e),
                this.$store.commit("updateVideoObject", {
                  slug: this.video.slug,
                  currentTime: 0,
                }));
            },
            playFromStart: function () {
              var t = this;
              ((this.hasInit = !0),
                this.pauseAndReset(),
                this.$nextTick(function () {
                  t.videoEl.play();
                }));
            },
            addEvents: function () {
              var t = this;
              window.addEventListener("resize", function () {
                return setTimeout(t.calculateHotspotPositions);
              });
            },
            removeEvents: function () {
              var t = this;
              window.removeEventListener("resize", function () {
                return setTimeout(t.calculateHotspotPositions);
              });
            },
            onVideoPlay: function (t) {
              this.hasPlayed ||
                ((this.hasPlayed = !0),
                this.pauseAndReset(),
                this.onVideoTimeUpdate(t));
            },
            onVideoCanPlayThrough: function (t) {
              ((this.canPlayThrough = !0), this.$emit("canplaythrough", t));
            },
            onVideoTimeUpdate: function (t) {
              var e = {
                slug: this.video.slug,
                currentTime: t.target.currentTime,
                duration: t.target.duration,
                progress: (t.target.currentTime / t.target.duration).toFixed(2),
              };
              if (
                (this.$store.commit("updateVideoObject", e), !this.isOverview)
              ) {
                var n = document.querySelector(
                  ".navbottom-item.".concat(this.video.slug),
                );
                n && (n.style = "--progress: ".concat(100 * e.progress, "%"));
              }
            },
            updateTimeFormatted: function () {
              var t, e, n, o;
              if (
                this.videoEl &&
                0 !==
                  (null === (t = this.videoEl) || void 0 === t
                    ? void 0
                    : t.currentTime)
              ) {
                var r = Math.floor(
                    (null === (e = this.videoEl) || void 0 === e
                      ? void 0
                      : e.currentTime) / 60,
                  ),
                  l = Math.floor(
                    (null === (n = this.videoEl) || void 0 === n
                      ? void 0
                      : n.currentTime) % 60,
                  ),
                  c = Math.floor(
                    ((null === (o = this.videoEl) || void 0 === o
                      ? void 0
                      : o.currentTime) %
                      1) *
                      100,
                  ),
                  d = [
                    r.toString().padStart(2, "0"),
                    l.toString().padStart(2, "0"),
                    c.toString().padStart(2, "0"),
                  ].join(":");
                this.currentTimeFormatted = d;
              } else this.currentTimeFormatted = "00:00:000";
            },
            onVideoLoadedMetadata: function (t) {
              if (
                (this.$store.commit("updateVideoObject", {
                  slug: this.video.slug,
                  duration: t.target.duration,
                  currentTime: t.target.currentTime,
                }),
                this.hotspotsObject)
              ) {
                var e = l()(this.hotspotsObject);
                this.hotspots = Object(o.a)(e);
              }
              this.calculateHotspotPositions();
            },
            onVideoEnded: function (t) {
              this.isActive &&
                this.$store.commit("activeIndex", this.nextIndex);
            },
            calculateHotspotPositions: function () {
              var t;
              if (null !== (t = this.hotspots) && void 0 !== t && t.length) {
                var e = this.videoDimensions.width,
                  n = this.videoDimensions.height,
                  o = e / n,
                  r = this.videoEl.clientWidth,
                  l = this.videoEl.clientHeight,
                  c = r / l;
                this.hotspots.forEach(function (t) {
                  var d = t.percentageX,
                    v = t.percentageY;
                  if (c < o) {
                    var h = r / (l / n),
                      f = (e - h) / 2;
                    ((t.effectiveX = (((d * e) / 100 - f) / h) * 100),
                      (t.effectiveY = v));
                  } else {
                    var m = l / (r / e),
                      w = (n - m) / 2;
                    ((t.effectiveX = d),
                      (t.effectiveY = (((v * n) / 100 - w) / m) * 100));
                  }
                });
              }
            },
            getStepNumber: function (t) {
              var e = this.$store.getters.sectionIndexBySlug(t);
              return null != e && e + 1;
            },
            getStepText: function (t) {
              var e = this.$store.getters.sectionIndexBySlug(t);
              return null != e && "Step 0".concat(e + 1);
            },
          },
        },
        v = d,
        h = (n(467), n(2)),
        component = Object(h.a)(
          v,
          function () {
            var t = this,
              e = t._self._c;
            return t.video
              ? e(
                  "div",
                  {
                    staticClass: "video-bg",
                    class: { "is-active": t.isActive },
                    attrs: { "data-slug": t.video.slug, "data-index": t.index },
                  },
                  [
                    e("div", { staticClass: "video-wrapper" }, [
                      e("video", {
                        ref: "video",
                        staticClass: "video-bg-video",
                        attrs: {
                          autoplay: "",
                          playsinline: "",
                          muted: "",
                          preload: "true",
                        },
                        domProps: { muted: !0 },
                        on: {
                          play: t.onVideoPlay,
                          canplaythrough: t.onVideoCanPlayThrough,
                          timeupdate: t.onVideoTimeUpdate,
                          loadedmetadata: t.onVideoLoadedMetadata,
                          ended: t.onVideoEnded,
                        },
                      }),
                      t._v(" "),
                      t.canAutoplay
                        ? t._e()
                        : e("img", {
                            staticClass: "video-bg-fallback",
                            attrs: { src: t.videoThumbnailSrc, alt: "" },
                          }),
                    ]),
                    t._v(" "),
                    t.hotspots && t.hotspots.length
                      ? e(
                          "div",
                          { staticClass: "hotspots-wrapper" },
                          t._l(t.hotspots, function (n, i) {
                            return e(
                              "link" === t.isHotspotLinkOrView(n)
                                ? "nuxt-link"
                                : "div",
                              {
                                key: "h".concat(i),
                                tag: "component",
                                staticClass: "hotspots-item",
                                class: {
                                  "is-alt": "link" === t.isHotspotLinkOrView(n),
                                  "is-right": t.isHotspotRightSide(n),
                                },
                                style: {
                                  "--ey": n.effectiveY,
                                  "--ex": n.effectiveX,
                                  "--px": n.percentageX,
                                  "--py": n.percentageY,
                                },
                                attrs: {
                                  to:
                                    "link" === t.isHotspotLinkOrView(n) &&
                                    "/".concat(n.title, "/"),
                                },
                                on: {
                                  click: function (e) {
                                    return t.onHotspotClick(n, e);
                                  },
                                },
                              },
                              [
                                e(
                                  "span",
                                  {
                                    staticClass: "hotspots-item-xhair",
                                    attrs: { "aria-hidden": "true" },
                                  },
                                  [e("div", { staticClass: "glass" })],
                                ),
                                t._v(" "),
                                n.content
                                  ? e(
                                      "p",
                                      { staticClass: "hotspots-item-text" },
                                      [
                                        t.getStepText(n.title)
                                          ? e("span", { staticClass: "step" }, [
                                              t._v(
                                                t._s(t.getStepText(n.title)),
                                              ),
                                            ])
                                          : t._e(),
                                        t._v(" "),
                                        "link" === t.isHotspotLinkOrView(n)
                                          ? e("span", {
                                              staticClass: "text",
                                              domProps: {
                                                innerHTML: t._s(
                                                  t.$options.filters.co2(
                                                    n.content,
                                                  ),
                                                ),
                                              },
                                            })
                                          : t._e(),
                                      ],
                                    )
                                  : t._e(),
                              ],
                            );
                          }),
                          1,
                        )
                      : t._e(),
                    t._v(" "),
                    e("transition", { attrs: { name: "fade" } }, [
                      e(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !t.isOverview,
                              expression: "!isOverview",
                            },
                          ],
                          staticClass: "video-time",
                        },
                        [
                          t._v(
                            "\n      " +
                              t._s(t.currentTimeFormatted) +
                              "\n    ",
                          ),
                        ],
                      ),
                    ]),
                  ],
                  1,
                )
              : t._e();
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
    },
    59: function (t, e, n) {
      "use strict";
      (n(30), n(25), n(26), n(7), n(41), n(18), n(42));
      var o = n(12),
        r = n(106);
      function l(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n));
        }
        return e;
      }
      var c = {
          props: { error: { type: Object, default: null } },
          head: function () {
            return (function (t) {
              for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2
                  ? l(Object(source), !0).forEach(function (e) {
                      Object(o.a)(t, e, source[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        t,
                        Object.getOwnPropertyDescriptors(source),
                      )
                    : l(Object(source)).forEach(function (e) {
                        Object.defineProperty(
                          t,
                          e,
                          Object.getOwnPropertyDescriptor(source, e),
                        );
                      });
              }
              return t;
            })({}, Object(r.a)(this, "Page Not Found"));
          },
        },
        d = c,
        v = n(2),
        component = Object(v.a)(
          d,
          function () {
            return (0, this._self._c)("ErrorScreen");
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.a = component.exports;
      installComponents(component, { ErrorScreen: n(508).default });
    },
  },
  [[316, 8, 1, 9]],
]);
