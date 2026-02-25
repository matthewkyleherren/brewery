(window.webpackJsonp = window.webpackJsonp || []).push([
  [6, 4],
  {
    532: function (t, e, n) {
      t.exports = {};
    },
    533: function (t, e, n) {
      "use strict";
      n(532);
    },
    536: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = {},
        r = (n(533), n(2)),
        component = Object(r.a)(
          o,
          function () {
            var t = this._self._c;
            return t(
              "svg",
              {
                staticClass: "icon icon-x",
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                },
              },
              [
                t(
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
                    t("line", {
                      attrs: { x1: "13.5", y1: "2.5", x2: "2.5", y2: "13.5" },
                    }),
                    this._v(" "),
                    t("line", {
                      attrs: { x1: "2.5", y1: "2.5", x2: "13.5", y2: "13.5" },
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
    539: function (t, e, n) {
      t.exports = {};
    },
    544: function (t, e, n) {
      "use strict";
      n(539);
    },
    555: function (t, e, n) {
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
          scrollToTop: !1,
          head: function () {
            var t = this.$store.state.seo || {};
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
            })({}, Object(r.a)(this, { title: !1 }, t));
          },
          transition: function (t, e) {
            return {
              mode: "out-in",
              css: !1,
              enter: function (t, e) {
                var n = t.querySelector(".page-film-inner");
                this.$gsap
                  .timeline({
                    onComplete: function () {
                      e();
                    },
                  })
                  .from(t, { autoAlpha: 0, duration: 0.5 }, 0)
                  .from(
                    n,
                    {
                      scale: 0.925,
                      opacity: 0,
                      duration: 0.5,
                      ease: "expo.out",
                      force3D: !0,
                    },
                    0.25,
                  );
              },
              leave: function (t, e) {
                var n = t.querySelector(".page-film-inner");
                this.$gsap
                  .timeline({ onComplete: e })
                  .to(n, { scale: 0.925, duration: 0.5, ease: "expo.out" }, 0)
                  .to(t, { autoAlpha: 0, duration: 0.5 }, 0);
              },
            };
          },
          computed: {
            keymap: function () {
              var t = this;
              return {
                Escape: function () {
                  return t.$router.push("/");
                },
              };
            },
            campaign: function () {
              var t;
              return null === (t = this.$store.state.campaign) || void 0 === t
                ? void 0
                : t.fields;
            },
            videoUrl: function () {
              var t;
              return null === (t = this.campaign) || void 0 === t
                ? void 0
                : t.filmVideo;
            },
            videoThumbnail: function () {
              var t;
              return null === (t = this.campaign) || void 0 === t
                ? void 0
                : t.filmThumbnail;
            },
          },
          data: function () {
            return {};
          },
          methods: {
            onClickClose: function () {
              this.$router.push("/");
            },
          },
        },
        f = c,
        d = (n(544), n(2)),
        component = Object(d.a)(
          f,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                directives: [
                  {
                    name: "hotkey",
                    rawName: "v-hotkey",
                    value: t.keymap,
                    expression: "keymap",
                  },
                ],
                staticClass: "page-film",
                on: {
                  click: function (e) {
                    return e.target !== e.currentTarget
                      ? null
                      : t.onClickPage.apply(null, arguments);
                  },
                },
              },
              [
                e(
                  "div",
                  { staticClass: "page-film-inner" },
                  [
                    e(
                      "button",
                      {
                        staticClass: "film-close",
                        on: { click: t.onClickClose },
                      },
                      [e("SvgIconX")],
                      1,
                    ),
                    t._v(" "),
                    t.videoUrl && t.videoThumbnail
                      ? e("SectionVideo", {
                          staticClass: "film-video",
                          attrs: {
                            "video-url": t.videoUrl,
                            thumbnail: t.videoThumbnail,
                            controls: !0,
                            loop: !1,
                            "show-progress": !0,
                            "auto-hide-controls": !0,
                            "show-fullscreen": !0,
                          },
                        })
                      : t._e(),
                  ],
                  1,
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
        SvgIconX: n(536).default,
        SectionVideo: n(189).default,
      });
    },
  },
]);
