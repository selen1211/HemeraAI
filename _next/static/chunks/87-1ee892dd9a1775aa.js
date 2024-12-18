"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [87],
  {
    77451: function (e, t, n) {
      n.d(t, {
        I: function () {
          return o;
        },
      });
      var r = n(19047);
      function o(e, t, n) {
        var o;
        if ("string" == typeof e) {
          let i = document;
          t &&
            ((0, r.k)(!!t.current, "Scope provided, but no element detected."),
            (i = t.current)),
            n
              ? ((null !== (o = n[e]) && void 0 !== o) ||
                  (n[e] = i.querySelectorAll(e)),
                (e = n[e]))
              : (e = i.querySelectorAll(e));
        } else e instanceof Element && (e = [e]);
        return Array.from(e || []);
      }
    },
    37476: function (e, t, n) {
      n.d(t, {
        Y: function () {
          return l;
        },
      });
      var r = n(2265),
        o = n(77451);
      let i = { some: 0, all: 1 };
      function l(e, { root: t, margin: n, amount: l, once: s = !1 } = {}) {
        let [f, c] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            if (!e.current || (s && f)) return;
            let r = { root: (t && t.current) || void 0, margin: n, amount: l };
            return (function (
              e,
              t,
              { root: n, margin: r, amount: l = "some" } = {}
            ) {
              let s = (0, o.I)(e),
                f = new WeakMap(),
                c = new IntersectionObserver(
                  (e) => {
                    e.forEach((e) => {
                      let n = f.get(e.target);
                      if (!!n !== e.isIntersecting) {
                        if (e.isIntersecting) {
                          let n = t(e);
                          "function" == typeof n
                            ? f.set(e.target, n)
                            : c.unobserve(e.target);
                        } else n && (n(e), f.delete(e.target));
                      }
                    });
                  },
                  {
                    root: n,
                    rootMargin: r,
                    threshold: "number" == typeof l ? l : i[l],
                  }
                );
              return s.forEach((e) => c.observe(e)), () => c.disconnect();
            })(e.current, () => (c(!0), s ? void 0 : () => c(!1)), r);
          }, [t, e, n, s, l]),
          f
        );
      }
    },
    61871: function (e, t, n) {
      let r, o;
      n.d(t, {
        v: function () {
          return Y;
        },
      });
      var i = n(20804),
        l = n(30458),
        s = n(2265),
        f = n(19047),
        c = n(77451);
      let u = new WeakMap();
      function a({ target: e, contentRect: t, borderBoxSize: n }) {
        var r;
        null === (r = u.get(e)) ||
          void 0 === r ||
          r.forEach((r) => {
            r({
              target: e,
              contentSize: t,
              get size() {
                return (function (e, t) {
                  if (t) {
                    let { inlineSize: e, blockSize: n } = t[0];
                    return { width: e, height: n };
                  }
                  return e instanceof SVGElement && "getBBox" in e
                    ? e.getBBox()
                    : { width: e.offsetWidth, height: e.offsetHeight };
                })(e, n);
              },
            });
          });
      }
      function d(e) {
        e.forEach(a);
      }
      let g = new Set();
      var h = n(33217),
        p = n(83476);
      let v = () => ({
          current: 0,
          offset: [],
          progress: 0,
          scrollLength: 0,
          targetOffset: 0,
          targetLength: 0,
          containerLength: 0,
          velocity: 0,
        }),
        m = () => ({ time: 0, x: v(), y: v() }),
        y = {
          x: { length: "Width", position: "Left" },
          y: { length: "Height", position: "Top" },
        };
      function w(e, t, n, r) {
        let o = n[t],
          { length: i, position: l } = y[t],
          s = o.current,
          f = n.time;
        (o.current = e[`scroll${l}`]),
          (o.scrollLength = e[`scroll${i}`] - e[`client${i}`]),
          (o.offset.length = 0),
          (o.offset[0] = 0),
          (o.offset[1] = o.scrollLength),
          (o.progress = (0, h.Y)(0, o.scrollLength, o.current));
        let c = r - f;
        o.velocity = c > 50 ? 0 : (0, p.R)(o.current - s, c);
      }
      let E = [
          [0, 0],
          [1, 1],
        ],
        W = { start: 0, center: 0.5, end: 1 };
      function x(e, t, n = 0) {
        let r = 0;
        if ((e in W && (e = W[e]), "string" == typeof e)) {
          let t = parseFloat(e);
          e.endsWith("px")
            ? (r = t)
            : e.endsWith("%")
            ? (e = t / 100)
            : e.endsWith("vw")
            ? (r = (t / 100) * document.documentElement.clientWidth)
            : e.endsWith("vh")
            ? (r = (t / 100) * document.documentElement.clientHeight)
            : (e = t);
        }
        return "number" == typeof e && (r = t * e), n + r;
      }
      let L = [0, 0];
      var b = n(42548),
        B = n(40839);
      let S = { x: 0, y: 0 };
      var H = n(86219);
      let k = new WeakMap(),
        z = new WeakMap(),
        O = new WeakMap(),
        A = (e) => (e === document.documentElement ? window : e);
      var X = n(9033);
      function N(e, t) {
        (0, f.K)(
          !!(!t || t.current),
          `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`
        );
      }
      let P = () => ({
        scrollX: (0, i.BX)(0),
        scrollY: (0, i.BX)(0),
        scrollXProgress: (0, i.BX)(0),
        scrollYProgress: (0, i.BX)(0),
      });
      function Y({ container: e, target: t, layoutEffect: n = !0, ...i } = {}) {
        let f = (0, l.h)(P);
        return (
          (n ? X.L : s.useEffect)(
            () => (
              N("target", t),
              N("container", e),
              (function (
                e,
                { container: t = document.documentElement, ...n } = {}
              ) {
                let i = O.get(t);
                i || ((i = new Set()), O.set(t, i));
                let l = (function (e, t, n, r = {}) {
                  return {
                    measure: () =>
                      (function (e, t = e, n) {
                        if (
                          ((n.x.targetOffset = 0),
                          (n.y.targetOffset = 0),
                          t !== e)
                        ) {
                          let r = t;
                          for (; r && r !== e; )
                            (n.x.targetOffset += r.offsetLeft),
                              (n.y.targetOffset += r.offsetTop),
                              (r = r.offsetParent);
                        }
                        (n.x.targetLength =
                          t === e ? t.scrollWidth : t.clientWidth),
                          (n.y.targetLength =
                            t === e ? t.scrollHeight : t.clientHeight),
                          (n.x.containerLength = e.clientWidth),
                          (n.y.containerLength = e.clientHeight);
                      })(e, r.target, n),
                    update: (t) => {
                      w(e, "x", n, t),
                        w(e, "y", n, t),
                        (n.time = t),
                        (r.offset || r.target) &&
                          (function (e, t, n) {
                            let { offset: r = E } = n,
                              { target: o = e, axis: i = "y" } = n,
                              l = "y" === i ? "height" : "width",
                              s =
                                o !== e
                                  ? (function (e, t) {
                                      let n = { x: 0, y: 0 },
                                        r = e;
                                      for (; r && r !== t; )
                                        if (r instanceof HTMLElement)
                                          (n.x += r.offsetLeft),
                                            (n.y += r.offsetTop),
                                            (r = r.offsetParent);
                                        else if ("svg" === r.tagName) {
                                          let e = r.getBoundingClientRect(),
                                            t = (r =
                                              r.parentElement).getBoundingClientRect();
                                          (n.x += e.left - t.left),
                                            (n.y += e.top - t.top);
                                        } else if (
                                          r instanceof SVGGraphicsElement
                                        ) {
                                          let { x: e, y: t } = r.getBBox();
                                          (n.x += e), (n.y += t);
                                          let o = null,
                                            i = r.parentNode;
                                          for (; !o; )
                                            "svg" === i.tagName && (o = i),
                                              (i = r.parentNode);
                                          r = o;
                                        } else break;
                                      return n;
                                    })(o, e)
                                  : S,
                              f =
                                o === e
                                  ? {
                                      width: e.scrollWidth,
                                      height: e.scrollHeight,
                                    }
                                  : "getBBox" in o && "svg" !== o.tagName
                                  ? o.getBBox()
                                  : {
                                      width: o.clientWidth,
                                      height: o.clientHeight,
                                    },
                              c = {
                                width: e.clientWidth,
                                height: e.clientHeight,
                              };
                            t[i].offset.length = 0;
                            let u = !t[i].interpolate,
                              a = r.length;
                            for (let e = 0; e < a; e++) {
                              let n = (function (e, t, n, r) {
                                let o = Array.isArray(e) ? e : L,
                                  i = 0;
                                return (
                                  "number" == typeof e
                                    ? (o = [e, e])
                                    : "string" == typeof e &&
                                      (o = (e = e.trim()).includes(" ")
                                        ? e.split(" ")
                                        : [e, W[e] ? e : "0"]),
                                  x(o[0], n, r) - x(o[1], t)
                                );
                              })(r[e], c[l], f[l], s[i]);
                              u ||
                                n === t[i].interpolatorOffsets[e] ||
                                (u = !0),
                                (t[i].offset[e] = n);
                            }
                            u &&
                              ((t[i].interpolate = (0, b.s)(
                                t[i].offset,
                                (0, B.Y)(r)
                              )),
                              (t[i].interpolatorOffsets = [...t[i].offset])),
                              (t[i].progress = t[i].interpolate(t[i].current));
                          })(e, n, r);
                    },
                    notify: () => t(n),
                  };
                })(t, e, m(), n);
                if ((i.add(l), !k.has(t))) {
                  let e = () => {
                      for (let e of i) e.measure();
                    },
                    n = () => {
                      for (let e of i) e.update(H.frameData.timestamp);
                    },
                    l = () => {
                      for (let e of i) e.notify();
                    },
                    s = () => {
                      H.Wi.read(e, !1, !0),
                        H.Wi.read(n, !1, !0),
                        H.Wi.update(l, !1, !0);
                    };
                  k.set(t, s);
                  let f = A(t);
                  window.addEventListener("resize", s, { passive: !0 }),
                    t !== document.documentElement &&
                      z.set(
                        t,
                        "function" == typeof t
                          ? (g.add(t),
                            o ||
                              ((o = () => {
                                let e = {
                                    width: window.innerWidth,
                                    height: window.innerHeight,
                                  },
                                  t = {
                                    target: window,
                                    size: e,
                                    contentSize: e,
                                  };
                                g.forEach((e) => e(t));
                              }),
                              window.addEventListener("resize", o)),
                            () => {
                              g.delete(t), !g.size && o && (o = void 0);
                            })
                          : (function (e, t) {
                              r ||
                                "undefined" == typeof ResizeObserver ||
                                (r = new ResizeObserver(d));
                              let n = (0, c.I)(e);
                              return (
                                n.forEach((e) => {
                                  let n = u.get(e);
                                  n || ((n = new Set()), u.set(e, n)),
                                    n.add(t),
                                    null == r || r.observe(e);
                                }),
                                () => {
                                  n.forEach((e) => {
                                    let n = u.get(e);
                                    null == n || n.delete(t),
                                      (null == n ? void 0 : n.size) ||
                                        null == r ||
                                        r.unobserve(e);
                                  });
                                }
                              );
                            })(t, s)
                      ),
                    f.addEventListener("scroll", s, { passive: !0 });
                }
                let s = k.get(t);
                return (
                  H.Wi.read(s, !1, !0),
                  () => {
                    var e;
                    (0, H.Pn)(s);
                    let n = O.get(t);
                    if (!n || (n.delete(l), n.size)) return;
                    let r = k.get(t);
                    k.delete(t),
                      r &&
                        (A(t).removeEventListener("scroll", r),
                        null === (e = z.get(t)) || void 0 === e || e(),
                        window.removeEventListener("resize", r));
                  }
                );
              })(
                ({ x: e, y: t }) => {
                  f.scrollX.set(e.current),
                    f.scrollXProgress.set(e.progress),
                    f.scrollY.set(t.current),
                    f.scrollYProgress.set(t.progress);
                },
                {
                  ...i,
                  container: (null == e ? void 0 : e.current) || void 0,
                  target: (null == t ? void 0 : t.current) || void 0,
                }
              )
            ),
            [e, t, JSON.stringify(i.offset)]
          ),
          f
        );
      }
    },
    30031: function (e, t, n) {
      n.d(t, {
        H: function () {
          return g;
        },
      });
      var r = n(42548);
      let o = (e) => e && "object" == typeof e && e.mix,
        i = (e) => (o(e) ? e.mix : void 0);
      var l = n(2265),
        s = n(20804),
        f = n(29791),
        c = n(30458),
        u = n(9033),
        a = n(86219);
      function d(e, t) {
        let n = (function (e) {
            let t = (0, c.h)(() => (0, s.BX)(e)),
              { isStatic: n } = (0, l.useContext)(f._);
            if (n) {
              let [, n] = (0, l.useState)(e);
              (0, l.useEffect)(() => t.on("change", n), []);
            }
            return t;
          })(t()),
          r = () => n.set(t());
        return (
          r(),
          (0, u.L)(() => {
            let t = () => a.Wi.preRender(r, !1, !0),
              n = e.map((e) => e.on("change", t));
            return () => {
              n.forEach((e) => e()), (0, a.Pn)(r);
            };
          }),
          n
        );
      }
      function g(e, t, n, o) {
        if ("function" == typeof e)
          return (function (e) {
            (s.S1.current = []), e();
            let t = d(s.S1.current, e);
            return (s.S1.current = void 0), t;
          })(e);
        let l =
          "function" == typeof t
            ? t
            : (function (...e) {
                let t = !Array.isArray(e[0]),
                  n = t ? 0 : -1,
                  o = e[0 + n],
                  l = e[1 + n],
                  s = e[2 + n],
                  f = e[3 + n],
                  c = (0, r.s)(l, s, { mixer: i(s[0]), ...f });
                return t ? c(o) : c;
              })(t, n, o);
        return Array.isArray(e) ? h(e, l) : h([e], ([e]) => l(e));
      }
      function h(e, t) {
        let n = (0, c.h)(() => []);
        return d(e, () => {
          n.length = 0;
          let r = e.length;
          for (let t = 0; t < r; t++) n[t] = e[t].get();
          return t(n);
        });
      }
    },
  },
]);