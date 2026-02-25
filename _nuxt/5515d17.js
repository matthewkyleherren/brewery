(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    556: function (t, e, r) {
      "use strict";
      r.r(e);
      (r(30), r(25), r(26), r(7), r(41), r(18), r(42));
      var n = r(12),
        o = r(106);
      function c(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          (t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, r));
        }
        return e;
      }
      function f(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? c(Object(source), !0).forEach(function (e) {
                Object(n.a)(t, e, source[e]);
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
      var l = {
          head: function () {
            var t,
              e = {
                title:
                  (null === (t = this.seo) || void 0 === t
                    ? void 0
                    : t.title) || !1,
              },
              r = this.seo || {};
            return f({}, Object(o.a)(this, e, r));
          },
          data: function () {
            return {};
          },
          computed: {
            page: function () {
              return this.$store.state.pages.home;
            },
            seo: function () {
              return f({}, this.$store.state.seo);
            },
          },
        },
        O = r(2),
        component = Object(O.a)(
          l,
          function () {
            return (0, this._self._c)("div");
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
    },
  },
]);
