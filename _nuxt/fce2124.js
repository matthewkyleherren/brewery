(window.webpackJsonp = window.webpackJsonp || []).push([
  [5, 2, 4],
  {
    532: function (e, t, n) {
      e.exports = {};
    },
    533: function (e, t, n) {
      "use strict";
      n(532);
    },
    534: function (e, t, n) {
      e.exports = {};
    },
    535: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BLOCKS = void 0),
        (function (e) {
          ((e.DOCUMENT = "document"),
            (e.PARAGRAPH = "paragraph"),
            (e.HEADING_1 = "heading-1"),
            (e.HEADING_2 = "heading-2"),
            (e.HEADING_3 = "heading-3"),
            (e.HEADING_4 = "heading-4"),
            (e.HEADING_5 = "heading-5"),
            (e.HEADING_6 = "heading-6"),
            (e.OL_LIST = "ordered-list"),
            (e.UL_LIST = "unordered-list"),
            (e.LIST_ITEM = "list-item"),
            (e.HR = "hr"),
            (e.QUOTE = "blockquote"),
            (e.EMBEDDED_ENTRY = "embedded-entry-block"),
            (e.EMBEDDED_ASSET = "embedded-asset-block"),
            (e.TABLE = "table"),
            (e.TABLE_ROW = "table-row"),
            (e.TABLE_CELL = "table-cell"),
            (e.TABLE_HEADER_CELL = "table-header-cell"));
        })(t.BLOCKS || (t.BLOCKS = {})));
    },
    536: function (e, t, n) {
      "use strict";
      n.r(t);
      var o = {},
        r = (n(533), n(2)),
        component = Object(r.a)(
          o,
          function () {
            var e = this._self._c;
            return e(
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
                    e("line", {
                      attrs: { x1: "13.5", y1: "2.5", x2: "2.5", y2: "13.5" },
                    }),
                    this._v(" "),
                    e("line", {
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
      t.default = component.exports;
    },
    537: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.INLINES = void 0),
        (function (e) {
          ((e.HYPERLINK = "hyperlink"),
            (e.ENTRY_HYPERLINK = "entry-hyperlink"),
            (e.ASSET_HYPERLINK = "asset-hyperlink"),
            (e.EMBEDDED_ENTRY = "embedded-entry-inline"));
        })(t.INLINES || (t.INLINES = {})));
    },
    538: function (e, t, n) {
      "use strict";
      n(534);
    },
    540: function (e, t, n) {
      "use strict";
      var o;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e) {
          ((e.BOLD = "bold"),
            (e.ITALIC = "italic"),
            (e.UNDERLINE = "underline"),
            (e.CODE = "code"),
            (e.SUPERSCRIPT = "superscript"),
            (e.SUBSCRIPT = "subscript"));
        })(o || (o = {})),
        (t.default = o));
    },
    541: function (e, t, n) {
      e.exports = {};
    },
    543: function (e, t, n) {
      "use strict";
      n.r(t);
      (n(315), n(25), n(60), n(138), n(7), n(45));
      var o = {
          mixins: [n(22).a],
          props: {
            media: { type: Object, required: !0 },
            sizes: { required: !1, default: "50vw" },
            forceVideoSize: { type: Number, required: !1, default: null },
            lazyVideo: { type: Boolean, required: !1, default: !1 },
            preload: { type: Boolean, required: !1, default: !1 },
            blur: { type: Boolean, required: !1, default: !1 },
          },
          computed: {
            image: function () {
              return !!this.media.fields.image && this.media.fields.image;
            },
            videoDesktop: function () {
              return !!this.media.fields.video && this.media.fields.video[0];
            },
            videoMobile: function () {
              var e, t;
              return (
                !(
                  null === (e = this.media) ||
                  void 0 === e ||
                  null === (t = e.fields) ||
                  void 0 === t ||
                  !t.videoMobile
                ) && this.media.fields.videoMobile[0]
              );
            },
            video: function () {
              return (
                ("sm" === this.$mq && this.videoMobile) || this.videoDesktop
              );
            },
            description: function () {
              return this.media.fields.description
                ? this.media.fields.description
                : this.image.fields.description || "";
            },
          },
          methods: {
            onLazyVideoIntersect: function (e) {
              if (e.isIntersecting && e.entries.length) {
                var t = e.entries[0].target,
                  n = null == t ? void 0 : t.dataset.src;
                n &&
                  ((t.src = n),
                  t.removeAttribute("data-src"),
                  t.classList.add("was-lazy"));
              }
            },
          },
        },
        r = (n(538), n(2)),
        component = Object(r.a)(
          o,
          function () {
            var e = this,
              t = e._self._c;
            return e.video && !e.lazyVideo
              ? t("video", {
                  attrs: {
                    src:
                      !!e.canAutoplay &&
                      (e.forceVideoSize
                        ? e.videoCloudinaryUrlWidth(e.video, e.forceVideoSize)
                        : e.videoCloudinaryUrl(e.video)),
                    autoplay: e.canAutoplay,
                    poster: !e.canAutoplay && e.videoCloudinaryPoster(e.video),
                    playsinline: "",
                    loop: "",
                    muted: "",
                    type: "video/mp4",
                  },
                  domProps: { muted: !0 },
                })
              : e.video && e.lazyVideo && e.canAutoplay
                ? t("video", {
                    directives: [
                      {
                        name: "intersect",
                        rawName: "v-intersect",
                        value: {
                          callback: e.onLazyVideoIntersect,
                          once: !0,
                          options: { rootMargin: "0px 0px 1200px 0px" },
                        },
                        expression:
                          "{\n    callback: onLazyVideoIntersect,\n    once: true,\n    options: { rootMargin: '0px 0px 1200px 0px' },\n  }",
                      },
                    ],
                    attrs: {
                      "data-src": e.forceVideoSize
                        ? e.videoCloudinaryUrlWidth(e.video, e.forceVideoSize)
                        : e.videoCloudinaryUrl(e.video),
                      poster: e.videoCloudinaryPoster(e.video),
                      autoplay: "",
                      playsinline: "",
                      loop: "",
                      muted: "",
                      type: "video/mp4",
                      width: e.video.width,
                      height: e.video.height,
                    },
                    domProps: { muted: !0 },
                  })
                : e.image && !e.preload
                  ? t("img", {
                      class: { lazyload: !0, lazypreload: e.preload },
                      attrs: {
                        src: e.imageThumbnail(e.image.fields.file.url),
                        "data-srcset": e.imageSrcset(e.image.fields.file.url),
                        alt: e.$options.filters.trim(e.description),
                        sizes: e.sizes,
                        width: e.image.fields.file.details.image.width,
                        height: e.image.fields.file.details.image.height,
                      },
                    })
                  : e.image && e.preload
                    ? t("img", {
                        attrs: {
                          src: e.imageThumbnail(e.image.fields.file.url),
                          srcset: e.imageSrcset(e.image.fields.file.url),
                          alt: e.$options.filters.trim(e.description),
                          sizes: e.sizes,
                          width: e.image.fields.file.details.image.width,
                          height: e.image.fields.file.details.image.height,
                        },
                      })
                    : e._e();
          },
          [],
          !1,
          null,
          "3264e886",
          null,
        );
      t.default = component.exports;
    },
    545: function (e, t, n) {
      "use strict";
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, o) {
                void 0 === o && (o = n);
                var desc = Object.getOwnPropertyDescriptor(t, n);
                ((desc &&
                  !("get" in desc
                    ? !t.__esModule
                    : desc.writable || desc.configurable)) ||
                  (desc = {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }),
                  Object.defineProperty(e, o, desc));
              }
            : function (e, t, n, o) {
                (void 0 === o && (o = n), (e[o] = t[n]));
              }),
        r =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        l =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var p in e)
              "default" === p ||
                Object.prototype.hasOwnProperty.call(t, p) ||
                o(t, e, p);
          },
        c =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  o(t, e, n);
            return (r(t, e), t);
          },
        d =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.helpers =
          t.EMPTY_DOCUMENT =
          t.MARKS =
          t.INLINES =
          t.BLOCKS =
            void 0));
      var f = n(535);
      Object.defineProperty(t, "BLOCKS", {
        enumerable: !0,
        get: function () {
          return f.BLOCKS;
        },
      });
      var S = n(537);
      Object.defineProperty(t, "INLINES", {
        enumerable: !0,
        get: function () {
          return S.INLINES;
        },
      });
      var v = n(540);
      (Object.defineProperty(t, "MARKS", {
        enumerable: !0,
        get: function () {
          return d(v).default;
        },
      }),
        l(n(546), t),
        l(n(547), t),
        l(n(548), t));
      var L = n(549);
      Object.defineProperty(t, "EMPTY_DOCUMENT", {
        enumerable: !0,
        get: function () {
          return d(L).default;
        },
      });
      var O = c(n(550));
      t.helpers = O;
    },
    546: function (e, t, n) {
      "use strict";
      var o,
        r =
          (this && this.__spreadArray) ||
          function (e, t, n) {
            if (n || 2 === arguments.length)
              for (var o, i = 0, r = t.length; i < r; i++)
                (!o && i in t) ||
                  (o || (o = Array.prototype.slice.call(t, 0, i)),
                  (o[i] = t[i]));
            return e.concat(o || Array.prototype.slice.call(t));
          },
        l =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.V1_MARKS =
          t.V1_NODE_TYPES =
          t.TEXT_CONTAINERS =
          t.HEADINGS =
          t.CONTAINERS =
          t.VOID_BLOCKS =
          t.TABLE_BLOCKS =
          t.LIST_ITEM_BLOCKS =
          t.TOP_LEVEL_BLOCKS =
            void 0));
      var c = n(535),
        d = n(537),
        f = l(n(540));
      ((t.TOP_LEVEL_BLOCKS = [
        c.BLOCKS.PARAGRAPH,
        c.BLOCKS.HEADING_1,
        c.BLOCKS.HEADING_2,
        c.BLOCKS.HEADING_3,
        c.BLOCKS.HEADING_4,
        c.BLOCKS.HEADING_5,
        c.BLOCKS.HEADING_6,
        c.BLOCKS.OL_LIST,
        c.BLOCKS.UL_LIST,
        c.BLOCKS.HR,
        c.BLOCKS.QUOTE,
        c.BLOCKS.EMBEDDED_ENTRY,
        c.BLOCKS.EMBEDDED_ASSET,
        c.BLOCKS.TABLE,
      ]),
        (t.LIST_ITEM_BLOCKS = [
          c.BLOCKS.PARAGRAPH,
          c.BLOCKS.HEADING_1,
          c.BLOCKS.HEADING_2,
          c.BLOCKS.HEADING_3,
          c.BLOCKS.HEADING_4,
          c.BLOCKS.HEADING_5,
          c.BLOCKS.HEADING_6,
          c.BLOCKS.OL_LIST,
          c.BLOCKS.UL_LIST,
          c.BLOCKS.HR,
          c.BLOCKS.QUOTE,
          c.BLOCKS.EMBEDDED_ENTRY,
          c.BLOCKS.EMBEDDED_ASSET,
        ]),
        (t.TABLE_BLOCKS = [
          c.BLOCKS.TABLE,
          c.BLOCKS.TABLE_ROW,
          c.BLOCKS.TABLE_CELL,
          c.BLOCKS.TABLE_HEADER_CELL,
        ]),
        (t.VOID_BLOCKS = [
          c.BLOCKS.HR,
          c.BLOCKS.EMBEDDED_ENTRY,
          c.BLOCKS.EMBEDDED_ASSET,
        ]),
        (t.CONTAINERS =
          (((o = {})[c.BLOCKS.OL_LIST] = [c.BLOCKS.LIST_ITEM]),
          (o[c.BLOCKS.UL_LIST] = [c.BLOCKS.LIST_ITEM]),
          (o[c.BLOCKS.LIST_ITEM] = t.LIST_ITEM_BLOCKS),
          (o[c.BLOCKS.QUOTE] = [c.BLOCKS.PARAGRAPH]),
          (o[c.BLOCKS.TABLE] = [c.BLOCKS.TABLE_ROW]),
          (o[c.BLOCKS.TABLE_ROW] = [
            c.BLOCKS.TABLE_CELL,
            c.BLOCKS.TABLE_HEADER_CELL,
          ]),
          (o[c.BLOCKS.TABLE_CELL] = [c.BLOCKS.PARAGRAPH]),
          (o[c.BLOCKS.TABLE_HEADER_CELL] = [c.BLOCKS.PARAGRAPH]),
          o)),
        (t.HEADINGS = [
          c.BLOCKS.HEADING_1,
          c.BLOCKS.HEADING_2,
          c.BLOCKS.HEADING_3,
          c.BLOCKS.HEADING_4,
          c.BLOCKS.HEADING_5,
          c.BLOCKS.HEADING_6,
        ]),
        (t.TEXT_CONTAINERS = r([c.BLOCKS.PARAGRAPH], t.HEADINGS, !0)),
        (t.V1_NODE_TYPES = [
          c.BLOCKS.DOCUMENT,
          c.BLOCKS.PARAGRAPH,
          c.BLOCKS.HEADING_1,
          c.BLOCKS.HEADING_2,
          c.BLOCKS.HEADING_3,
          c.BLOCKS.HEADING_4,
          c.BLOCKS.HEADING_5,
          c.BLOCKS.HEADING_6,
          c.BLOCKS.OL_LIST,
          c.BLOCKS.UL_LIST,
          c.BLOCKS.LIST_ITEM,
          c.BLOCKS.HR,
          c.BLOCKS.QUOTE,
          c.BLOCKS.EMBEDDED_ENTRY,
          c.BLOCKS.EMBEDDED_ASSET,
          d.INLINES.HYPERLINK,
          d.INLINES.ENTRY_HYPERLINK,
          d.INLINES.ASSET_HYPERLINK,
          d.INLINES.EMBEDDED_ENTRY,
          "text",
        ]),
        (t.V1_MARKS = [
          f.default.BOLD,
          f.default.CODE,
          f.default.ITALIC,
          f.default.UNDERLINE,
        ]));
    },
    547: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    548: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    549: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(535),
        r = {
          nodeType: o.BLOCKS.DOCUMENT,
          data: {},
          content: [
            {
              nodeType: o.BLOCKS.PARAGRAPH,
              data: {},
              content: [{ nodeType: "text", value: "", marks: [], data: {} }],
            },
          ],
        };
      t.default = r;
    },
    550: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isText = t.isBlock = t.isInline = void 0));
      var o = n(535),
        r = n(537);
      function l(e, t) {
        for (var n = 0, o = Object.keys(e); n < o.length; n++) {
          if (t === e[o[n]]) return !0;
        }
        return !1;
      }
      ((t.isInline = function (e) {
        return l(r.INLINES, e.nodeType);
      }),
        (t.isBlock = function (e) {
          return l(o.BLOCKS, e.nodeType);
        }),
        (t.isText = function (e) {
          return "text" === e.nodeType;
        }));
    },
    551: function (e, t, n) {
      "use strict";
      n(541);
    },
    554: function (e, t, n) {
      "use strict";
      n.r(t);
      (n(30), n(25), n(26), n(7), n(41), n(18), n(42));
      var o = n(12),
        r = (n(38), n(106));
      function l(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          (e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, n));
        }
        return t;
      }
      function c(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? l(Object(source), !0).forEach(function (t) {
                Object(o.a)(e, t, source[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(source),
                )
              : l(Object(source)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(source, t),
                  );
                });
        }
        return e;
      }
      function d(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          (e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, n));
        }
        return t;
      }
      var f = {
          mixins: [
            {
              methods: {
                renderNodes: function () {
                  var e,
                    t = this,
                    r = n(545),
                    l = r.BLOCKS,
                    c = r.INLINES;
                  return (
                    (e = {}),
                    Object(o.a)(e, l.PARAGRAPH, function (e, n, o, r) {
                      if ("paragraph" === e.nodeType && e.content.length) {
                        if (1 === e.content.length) {
                          if (!e.content[0].value) return;
                          return o("p", {
                            key: n,
                            class: "t-normal",
                            domProps: {
                              innerHTML: t.$options.filters.co2(
                                e.content[0].value,
                              ),
                            },
                          });
                        }
                        return o(
                          "p",
                          { key: n, class: "t-normal has-entries" },
                          r(e.content, n, r),
                        );
                      }
                    }),
                    Object(o.a)(e, c.HYPERLINK, function (e, t, n) {
                      var o = e.content[0].value || "",
                        r = e.data.uri || "",
                        l = r && "/" == r[0] ? "" : "_blank";
                      return n(
                        "a",
                        {
                          key: t,
                          attrs: { href: r, target: l, rel: "" },
                          text: o,
                        },
                        o,
                      );
                    }),
                    Object(o.a)(e, l.EMBEDDED_ENTRY, function (e, n, o) {
                      if ("media" === e.data.target.sys.contentType.sys.id)
                        return o("div", { class: "media-wrapper" }, [
                          o("media", {
                            key: n,
                            props: {
                              media: e.data.target,
                              lazyVideo: !0,
                              blur: !0,
                              sizes: "sm" === t.$mq ? "100vw" : "50vw",
                            },
                          }),
                        ]);
                    }),
                    e
                  );
                },
              },
            },
            {
              transition: function (e, t) {
                var n =
                    "slug" === (null == e ? void 0 : e.name) &&
                    "slug" === (null == t ? void 0 : t.name),
                  o = document.querySelector(".video-bg.is-active video");
                if (o)
                  return (
                    "slug" !== (null == e ? void 0 : e.name) ||
                      n ||
                      (o.loop = !0),
                    "slug" === (null == t ? void 0 : t.name) &&
                      "index" === (null == e ? void 0 : e.name) &&
                      ((o.currentTime = 0), (o.loop = !1)),
                    {
                      mode: "out-in",
                      css: !1,
                      enter: function (e, o) {
                        ((window.AC_PREV_SLUG = window.AC_CURRENT_SLUG || null),
                          (window.AC_CURRENT_SLUG = e.dataset.stepIndex));
                        var r = e.querySelector(".page-section-inner"),
                          l = e.querySelector(".section-nav-item.is-prev"),
                          d = e.querySelector(".section-nav-item.is-next"),
                          f = "slug" === (null == t ? void 0 : t.name) ? 1 : 0,
                          S =
                            "slug" === (null == t ? void 0 : t.name) ? 0 : 0.25,
                          v = {
                            scale: n ? 1.1 : 0.9,
                            autoAlpha: 0,
                            duration: n ? 0.5 : 0.75,
                            ease: "expo.out",
                          };
                        this.$gsap
                          .timeline({
                            onComplete: function () {
                              o();
                            },
                          })
                          .from(e, { opacity: f, duration: S })
                          .from(r, c({}, v), 0.25)
                          .from(l, c({}, v), "<")
                          .from(d, c(c({}, v), {}, { ease: "expo.out" }), "<");
                      },
                      leave: function (t, n) {
                        var o = t.querySelector(".page-section-inner"),
                          r = t.querySelector(".section-nav-item.is-prev"),
                          l = t.querySelector(".section-nav-item.is-next"),
                          d = "slug" === (null == e ? void 0 : e.name) ? 1 : 0,
                          f = {
                            duration: 0.5,
                            opacity: 0,
                            scale: 0.9,
                            ease: "expo.out",
                          };
                        this.$gsap
                          .timeline({ onComplete: n })
                          .to(o, c({}, f))
                          .to(t, { autoAlpha: d, duration: 0.5 }, ">-=0.5")
                          .to(r, c({}, f), 0)
                          .to(l, c({}, f), 0);
                      },
                    }
                  );
              },
            },
          ],
          scrollToTop: !1,
          head: function () {
            var e,
              t,
              n = {
                title:
                  (null === (e = this.section) || void 0 === e
                    ? void 0
                    : e.title) || !1,
              },
              l =
                (null === (t = this.page) || void 0 === t ? void 0 : t.seo) ||
                {};
            return (function (e) {
              for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2
                  ? d(Object(source), !0).forEach(function (t) {
                      Object(o.a)(e, t, source[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(source),
                      )
                    : d(Object(source)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(source, t),
                        );
                      });
              }
              return e;
            })({}, Object(r.a)(this, n, l));
          },
          computed: {
            keymap: function () {
              var e = this;
              return {
                Escape: function () {
                  return e.$router.push("/");
                },
                Right: function () {
                  var t;
                  null !== (t = e.nextSection) &&
                    void 0 !== t &&
                    t.slug &&
                    e.$router.push("/".concat(e.nextSection.slug, "/"));
                },
                Left: function () {
                  var t;
                  null !== (t = e.prevSection) &&
                    void 0 !== t &&
                    t.slug &&
                    e.$router.push("/".concat(e.prevSection.slug, "/"));
                },
              };
            },
            section: function () {
              return this.$store.getters.sectionBySlug(this.$route.params.slug);
            },
            sectionMedia: function () {
              var e;
              return (
                (null === (e = this.section) || void 0 === e
                  ? void 0
                  : e.media) || []
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
              var e;
              return null === (e = this.sections) || void 0 === e
                ? void 0
                : e[0];
            },
            lastSection: function () {
              var e;
              return null === (e = this.sections) || void 0 === e
                ? void 0
                : e[this.sections.length - 1];
            },
            videoUrl: function () {
              var e;
              return null === (e = this.section) || void 0 === e
                ? void 0
                : e.video;
            },
            videoThumbnail: function () {
              var e;
              return null === (e = this.section) || void 0 === e
                ? void 0
                : e.videoThumbnail;
            },
            content: function () {
              var e;
              return null === (e = this.section) || void 0 === e
                ? void 0
                : e.content;
            },
            removeStep: function () {
              var e;
              return null === (e = this.section) || void 0 === e
                ? void 0
                : e.removeStep;
            },
          },
          data: function () {
            return {};
          },
          mounted: function () {
            var e = this;
            this.$nextTick(function () {
              e.$store.commit("showSectionsMobileNav", !0);
            });
          },
          watch: {
            $route: function (e, t) {
              "slug" !== (null == e ? void 0 : e.name) &&
                this.$store.commit("showSectionsMobileNav", !0);
            },
          },
          methods: {
            onClickClose: function () {
              this.$router.push("/");
            },
            onClickPage: function (e) {
              this.$router.push("/");
            },
            getStepIndex: function (e) {
              var t = this.$store.getters.sectionIndexBySlug(e);
              return null != t && t;
            },
            getStepText: function (e) {
              var t = this.$store.getters.sectionIndexBySlug(e);
              return null != t && "Step 0".concat(t + 1);
            },
            onMobileSwipe: function (e) {
              var t, n;
              if ("sm" === this.$mq)
                if ("left" === e.direction)
                  null !== (t = this.nextSection) && void 0 !== t && t.slug
                    ? this.$router.push("/".concat(this.nextSection.slug, "/"))
                    : null !== (n = this.firstSection) &&
                      void 0 !== n &&
                      n.slug &&
                      this.$router.push(
                        "/".concat(this.firstSection.slug, "/"),
                      );
                else if ("right" === e.direction) {
                  var o, r;
                  null !== (o = this.prevSection) && void 0 !== o && o.slug
                    ? this.$router.push("/".concat(this.prevSection.slug, "/"))
                    : null !== (r = this.lastSection) &&
                      void 0 !== r &&
                      r.slug &&
                      this.$router.push("/".concat(this.lastSection.slug, "/"));
                } else "bottom" === e.direction && this.$router.push("/");
            },
          },
        },
        S = f,
        v = (n(551), n(2)),
        component = Object(v.a)(
          S,
          function () {
            var e = this,
              t = e._self._c;
            return e.section
              ? t(
                  "div",
                  {
                    directives: [
                      {
                        name: "hotkey",
                        rawName: "v-hotkey",
                        value: e.keymap,
                        expression: "keymap",
                      },
                    ],
                    staticClass: "page-section",
                    attrs: {
                      "data-step-index": e.getStepIndex(e.section.slug),
                    },
                    on: {
                      click: function (t) {
                        return t.target !== t.currentTarget
                          ? null
                          : e.onClickPage.apply(null, arguments);
                      },
                    },
                  },
                  [
                    t(
                      "div",
                      {
                        directives: [
                          {
                            name: "swipe",
                            rawName: "v-swipe",
                            value: {
                              detect: ["left", "right"],
                              handler: e.onMobileSwipe,
                            },
                            expression:
                              "{ detect: ['left', 'right'], handler: onMobileSwipe }",
                          },
                        ],
                        staticClass: "page-section-inner",
                      },
                      [
                        t(
                          "button",
                          {
                            staticClass: "section-close",
                            on: { click: e.onClickClose },
                          },
                          [t("SvgIconX")],
                          1,
                        ),
                        e._v(" "),
                        t("div", { staticClass: "section-header" }, [
                          t("div", {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !e.removeStep,
                                expression: "!removeStep",
                              },
                            ],
                            staticClass: "section-step",
                            domProps: {
                              innerHTML: e._s(e.getStepText(e.section.slug)),
                            },
                          }),
                          e._v(" "),
                          t("h1", {
                            staticClass: "section-title",
                            domProps: {
                              innerHTML: e._s(
                                e.$options.filters.co2(e.section.title),
                              ),
                            },
                          }),
                          e._v(" "),
                          e.section.subtitle
                            ? t("p", {
                                staticClass: "section-subtitle",
                                domProps: {
                                  innerHTML: e._s(
                                    e.$options.filters.co2(e.section.subtitle),
                                  ),
                                },
                              })
                            : e._e(),
                        ]),
                        e._v(" "),
                        e.content
                          ? t(
                              "div",
                              { staticClass: "section-richtext" },
                              [
                                t("RichTextRenderer", {
                                  attrs: {
                                    document: e.content,
                                    "node-renderers": e.renderNodes(),
                                  },
                                }),
                              ],
                              1,
                            )
                          : e._e(),
                        e._v(" "),
                        (e.videoUrl && e.videoThumbnail) ||
                        e.sectionMedia.length
                          ? t(
                              "div",
                              { staticClass: "section-media" },
                              [
                                e.videoUrl && e.videoThumbnail
                                  ? t("SectionVideo", {
                                      attrs: {
                                        "video-url": e.videoUrl,
                                        thumbnail: e.videoThumbnail,
                                        controls: !0,
                                        "mute-button": !1,
                                        loop: !0,
                                      },
                                    })
                                  : e._e(),
                                e._v(" "),
                                e._l(e.sectionMedia, function (n, o) {
                                  return t(
                                    "div",
                                    {
                                      key: "media".concat(o),
                                      staticClass: "section-media-item",
                                    },
                                    [
                                      t("Media", {
                                        attrs: {
                                          media: n,
                                          sizes:
                                            "sm" === e.$mq ? "100vw" : "50vw",
                                          blur: !0,
                                          preload: !0,
                                          alt: e.section.title,
                                        },
                                      }),
                                    ],
                                    1,
                                  );
                                }),
                              ],
                              2,
                            )
                          : e._e(),
                      ],
                    ),
                  ],
                )
              : e._e();
          },
          [],
          !1,
          null,
          null,
          null,
        );
      t.default = component.exports;
      installComponents(component, {
        SvgIconX: n(536).default,
        SectionVideo: n(189).default,
        Media: n(543).default,
      });
    },
  },
]);
