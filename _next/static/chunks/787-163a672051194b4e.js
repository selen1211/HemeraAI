"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [787],
  {
    11787: function (e, t, n) {
      n.d(t, {
        VY: function () {
          return nC;
        },
        ZA: function () {
          return nR;
        },
        JO: function () {
          return nb;
        },
        ck: function () {
          return nT;
        },
        wU: function () {
          return nM;
        },
        eT: function () {
          return nL;
        },
        __: function () {
          return nP;
        },
        h_: function () {
          return nS;
        },
        fC: function () {
          return ny;
        },
        $G: function () {
          return nj;
        },
        u_: function () {
          return nA;
        },
        Z0: function () {
          return nk;
        },
        xz: function () {
          return nw;
        },
        B4: function () {
          return nx;
        },
        l_: function () {
          return nE;
        },
      });
      var r,
        o = n(2265),
        l = n(54887);
      function i(e, [t, n]) {
        return Math.min(n, Math.max(t, e));
      }
      var a = n(78149),
        u = n(98324),
        s = n(1584),
        c = n(71538),
        d = n(57437),
        f = o.createContext(void 0),
        p = n(25171),
        h = n(75137),
        v = n(66486),
        m = "dismissableLayer.update",
        g = o.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        y = o.forwardRef((e, t) => {
          var n, l;
          let {
              disableOutsidePointerEvents: i = !1,
              onEscapeKeyDown: u,
              onPointerDownOutside: c,
              onFocusOutside: f,
              onInteractOutside: y,
              onDismiss: b,
              ...S
            } = e,
            C = o.useContext(g),
            [E, R] = o.useState(null),
            P =
              null !== (l = null == E ? void 0 : E.ownerDocument) &&
              void 0 !== l
                ? l
                : null === (n = globalThis) || void 0 === n
                ? void 0
                : n.document,
            [, T] = o.useState({}),
            L = (0, s.e)(t, (e) => R(e)),
            M = Array.from(C.layers),
            [A] = [...C.layersWithOutsidePointerEventsDisabled].slice(-1),
            j = M.indexOf(A),
            k = E ? M.indexOf(E) : -1,
            D = C.layersWithOutsidePointerEventsDisabled.size > 0,
            O = k >= j,
            N = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = (0, h.W)(e),
                l = o.useRef(!1),
                i = o.useRef(() => {});
              return (
                o.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !l.current) {
                        let t = function () {
                            x("dismissableLayer.pointerDownOutside", r, o, {
                              discrete: !0,
                            });
                          },
                          o = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (n.removeEventListener("click", i.current),
                            (i.current = t),
                            n.addEventListener("click", i.current, {
                              once: !0,
                            }))
                          : t();
                      } else n.removeEventListener("click", i.current);
                      l.current = !1;
                    },
                    t = window.setTimeout(() => {
                      n.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(t),
                      n.removeEventListener("pointerdown", e),
                      n.removeEventListener("click", i.current);
                  };
                }, [n, r]),
                { onPointerDownCapture: () => (l.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...C.branches].some((e) => e.contains(t));
              !O ||
                n ||
                (null == c || c(e),
                null == y || y(e),
                e.defaultPrevented || null == b || b());
            }, P),
            W = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = (0, h.W)(e),
                l = o.useRef(!1);
              return (
                o.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !l.current &&
                      x(
                        "dismissableLayer.focusOutside",
                        r,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    n.addEventListener("focusin", e),
                    () => n.removeEventListener("focusin", e)
                  );
                }, [n, r]),
                {
                  onFocusCapture: () => (l.current = !0),
                  onBlurCapture: () => (l.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...C.branches].some((e) => e.contains(t)) ||
                (null == f || f(e),
                null == y || y(e),
                e.defaultPrevented || null == b || b());
            }, P);
          return (
            (0, v.e)((e) => {
              k !== C.layers.size - 1 ||
                (null == u || u(e),
                !e.defaultPrevented && b && (e.preventDefault(), b()));
            }, P),
            o.useEffect(() => {
              if (E)
                return (
                  i &&
                    (0 === C.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = P.body.style.pointerEvents),
                      (P.body.style.pointerEvents = "none")),
                    C.layersWithOutsidePointerEventsDisabled.add(E)),
                  C.layers.add(E),
                  w(),
                  () => {
                    i &&
                      1 === C.layersWithOutsidePointerEventsDisabled.size &&
                      (P.body.style.pointerEvents = r);
                  }
                );
            }, [E, P, i, C]),
            o.useEffect(
              () => () => {
                E &&
                  (C.layers.delete(E),
                  C.layersWithOutsidePointerEventsDisabled.delete(E),
                  w());
              },
              [E, C]
            ),
            o.useEffect(() => {
              let e = () => T({});
              return (
                document.addEventListener(m, e),
                () => document.removeEventListener(m, e)
              );
            }, []),
            (0, d.jsx)(p.WV.div, {
              ...S,
              ref: L,
              style: {
                pointerEvents: D ? (O ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: (0, a.M)(e.onFocusCapture, W.onFocusCapture),
              onBlurCapture: (0, a.M)(e.onBlurCapture, W.onBlurCapture),
              onPointerDownCapture: (0, a.M)(
                e.onPointerDownCapture,
                N.onPointerDownCapture
              ),
            })
          );
        });
      function w() {
        let e = new CustomEvent(m);
        document.dispatchEvent(e);
      }
      function x(e, t, n, r) {
        let { discrete: o } = r,
          l = n.originalEvent.target,
          i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && l.addEventListener(e, t, { once: !0 }),
          o ? (0, p.jH)(l, i) : l.dispatchEvent(i);
      }
      (y.displayName = "DismissableLayer"),
        (o.forwardRef((e, t) => {
          let n = o.useContext(g),
            r = o.useRef(null),
            l = (0, s.e)(t, r);
          return (
            o.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, d.jsx)(p.WV.div, { ...e, ref: l })
          );
        }).displayName = "DismissableLayerBranch");
      var b = 0;
      function S() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.outline = "none"),
          (e.style.opacity = "0"),
          (e.style.position = "fixed"),
          (e.style.pointerEvents = "none"),
          e
        );
      }
      var C = n(80467),
        E = n(53201);
      let R = ["top", "right", "bottom", "left"],
        P = Math.min,
        T = Math.max,
        L = Math.round,
        M = Math.floor,
        A = (e) => ({ x: e, y: e }),
        j = { left: "right", right: "left", bottom: "top", top: "bottom" },
        k = { start: "end", end: "start" };
      function D(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function O(e) {
        return e.split("-")[0];
      }
      function N(e) {
        return e.split("-")[1];
      }
      function W(e) {
        return "x" === e ? "y" : "x";
      }
      function I(e) {
        return "y" === e ? "height" : "width";
      }
      function H(e) {
        return ["top", "bottom"].includes(O(e)) ? "y" : "x";
      }
      function V(e) {
        return e.replace(/start|end/g, (e) => k[e]);
      }
      function B(e) {
        return e.replace(/left|right|bottom|top/g, (e) => j[e]);
      }
      function _(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function F(e) {
        let { x: t, y: n, width: r, height: o } = e;
        return {
          width: r,
          height: o,
          top: n,
          left: t,
          right: t + r,
          bottom: n + o,
          x: t,
          y: n,
        };
      }
      function z(e, t, n) {
        let r,
          { reference: o, floating: l } = e,
          i = H(t),
          a = W(H(t)),
          u = I(a),
          s = O(t),
          c = "y" === i,
          d = o.x + o.width / 2 - l.width / 2,
          f = o.y + o.height / 2 - l.height / 2,
          p = o[u] / 2 - l[u] / 2;
        switch (s) {
          case "top":
            r = { x: d, y: o.y - l.height };
            break;
          case "bottom":
            r = { x: d, y: o.y + o.height };
            break;
          case "right":
            r = { x: o.x + o.width, y: f };
            break;
          case "left":
            r = { x: o.x - l.width, y: f };
            break;
          default:
            r = { x: o.x, y: o.y };
        }
        switch (N(t)) {
          case "start":
            r[a] -= p * (n && c ? -1 : 1);
            break;
          case "end":
            r[a] += p * (n && c ? -1 : 1);
        }
        return r;
      }
      let Y = async (e, t, n) => {
        let {
            placement: r = "bottom",
            strategy: o = "absolute",
            middleware: l = [],
            platform: i,
          } = n,
          a = l.filter(Boolean),
          u = await (null == i.isRTL ? void 0 : i.isRTL(t)),
          s = await i.getElementRects({
            reference: e,
            floating: t,
            strategy: o,
          }),
          { x: c, y: d } = z(s, r, u),
          f = r,
          p = {},
          h = 0;
        for (let n = 0; n < a.length; n++) {
          let { name: l, fn: v } = a[n],
            {
              x: m,
              y: g,
              data: y,
              reset: w,
            } = await v({
              x: c,
              y: d,
              initialPlacement: r,
              placement: f,
              strategy: o,
              middlewareData: p,
              rects: s,
              platform: i,
              elements: { reference: e, floating: t },
            });
          (c = null != m ? m : c),
            (d = null != g ? g : d),
            (p = { ...p, [l]: { ...p[l], ...y } }),
            w &&
              h <= 50 &&
              (h++,
              "object" == typeof w &&
                (w.placement && (f = w.placement),
                w.rects &&
                  (s =
                    !0 === w.rects
                      ? await i.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: o,
                        })
                      : w.rects),
                ({ x: c, y: d } = z(s, f, u))),
              (n = -1));
        }
        return { x: c, y: d, placement: f, strategy: o, middlewareData: p };
      };
      async function K(e, t) {
        var n;
        void 0 === t && (t = {});
        let { x: r, y: o, platform: l, rects: i, elements: a, strategy: u } = e,
          {
            boundary: s = "clippingAncestors",
            rootBoundary: c = "viewport",
            elementContext: d = "floating",
            altBoundary: f = !1,
            padding: p = 0,
          } = D(t, e),
          h = _(p),
          v = a[f ? ("floating" === d ? "reference" : "floating") : d],
          m = F(
            await l.getClippingRect({
              element:
                null ==
                  (n = await (null == l.isElement ? void 0 : l.isElement(v))) ||
                n
                  ? v
                  : v.contextElement ||
                    (await (null == l.getDocumentElement
                      ? void 0
                      : l.getDocumentElement(a.floating))),
              boundary: s,
              rootBoundary: c,
              strategy: u,
            })
          ),
          g =
            "floating" === d
              ? {
                  x: r,
                  y: o,
                  width: i.floating.width,
                  height: i.floating.height,
                }
              : i.reference,
          y = await (null == l.getOffsetParent
            ? void 0
            : l.getOffsetParent(a.floating)),
          w = ((await (null == l.isElement ? void 0 : l.isElement(y))) &&
            (await (null == l.getScale ? void 0 : l.getScale(y)))) || {
            x: 1,
            y: 1,
          },
          x = F(
            l.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: a,
                  rect: g,
                  offsetParent: y,
                  strategy: u,
                })
              : g
          );
        return {
          top: (m.top - x.top + h.top) / w.y,
          bottom: (x.bottom - m.bottom + h.bottom) / w.y,
          left: (m.left - x.left + h.left) / w.x,
          right: (x.right - m.right + h.right) / w.x,
        };
      }
      function X(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function q(e) {
        return R.some((t) => e[t] >= 0);
      }
      async function U(e, t) {
        let { placement: n, platform: r, elements: o } = e,
          l = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
          i = O(n),
          a = N(n),
          u = "y" === H(n),
          s = ["left", "top"].includes(i) ? -1 : 1,
          c = l && u ? -1 : 1,
          d = D(t, e),
          {
            mainAxis: f,
            crossAxis: p,
            alignmentAxis: h,
          } = "number" == typeof d
            ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: d.mainAxis || 0,
                crossAxis: d.crossAxis || 0,
                alignmentAxis: d.alignmentAxis,
              };
        return (
          a && "number" == typeof h && (p = "end" === a ? -1 * h : h),
          u ? { x: p * c, y: f * s } : { x: f * s, y: p * c }
        );
      }
      function $() {
        return "undefined" != typeof window;
      }
      function Z(e) {
        return Q(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function G(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function J(e) {
        var t;
        return null ==
          (t = (Q(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function Q(e) {
        return !!$() && (e instanceof Node || e instanceof G(e).Node);
      }
      function ee(e) {
        return !!$() && (e instanceof Element || e instanceof G(e).Element);
      }
      function et(e) {
        return (
          !!$() && (e instanceof HTMLElement || e instanceof G(e).HTMLElement)
        );
      }
      function en(e) {
        return (
          !!$() &&
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof G(e).ShadowRoot)
        );
      }
      function er(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: o } = eu(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          !["inline", "contents"].includes(o)
        );
      }
      function eo(e) {
        return [":popover-open", ":modal"].some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      function el(e) {
        let t = ei(),
          n = ee(e) ? eu(e) : e;
        return (
          "none" !== n.transform ||
          "none" !== n.perspective ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          ["transform", "perspective", "filter"].some((e) =>
            (n.willChange || "").includes(e)
          ) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (n.contain || "").includes(e)
          )
        );
      }
      function ei() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function ea(e) {
        return ["html", "body", "#document"].includes(Z(e));
      }
      function eu(e) {
        return G(e).getComputedStyle(e);
      }
      function es(e) {
        return ee(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function ec(e) {
        if ("html" === Z(e)) return e;
        let t = e.assignedSlot || e.parentNode || (en(e) && e.host) || J(e);
        return en(t) ? t.host : t;
      }
      function ed(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        let o = (function e(t) {
            let n = ec(t);
            return ea(n)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : et(n) && er(n)
              ? n
              : e(n);
          })(e),
          l = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          i = G(o);
        if (l) {
          let e = ef(i);
          return t.concat(
            i,
            i.visualViewport || [],
            er(o) ? o : [],
            e && n ? ed(e) : []
          );
        }
        return t.concat(o, ed(o, [], n));
      }
      function ef(e) {
        return e.parent && Object.getPrototypeOf(e.parent)
          ? e.frameElement
          : null;
      }
      function ep(e) {
        let t = eu(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          o = et(e),
          l = o ? e.offsetWidth : n,
          i = o ? e.offsetHeight : r,
          a = L(n) !== l || L(r) !== i;
        return a && ((n = l), (r = i)), { width: n, height: r, $: a };
      }
      function eh(e) {
        return ee(e) ? e : e.contextElement;
      }
      function ev(e) {
        let t = eh(e);
        if (!et(t)) return A(1);
        let n = t.getBoundingClientRect(),
          { width: r, height: o, $: l } = ep(t),
          i = (l ? L(n.width) : n.width) / r,
          a = (l ? L(n.height) : n.height) / o;
        return (
          (i && Number.isFinite(i)) || (i = 1),
          (a && Number.isFinite(a)) || (a = 1),
          { x: i, y: a }
        );
      }
      let em = A(0);
      function eg(e) {
        let t = G(e);
        return ei() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : em;
      }
      function ey(e, t, n, r) {
        var o;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let l = e.getBoundingClientRect(),
          i = eh(e),
          a = A(1);
        t && (r ? ee(r) && (a = ev(r)) : (a = ev(e)));
        let u = (void 0 === (o = n) && (o = !1), r && (!o || r === G(i)) && o)
            ? eg(i)
            : A(0),
          s = (l.left + u.x) / a.x,
          c = (l.top + u.y) / a.y,
          d = l.width / a.x,
          f = l.height / a.y;
        if (i) {
          let e = G(i),
            t = r && ee(r) ? G(r) : r,
            n = e,
            o = ef(n);
          for (; o && r && t !== n; ) {
            let e = ev(o),
              t = o.getBoundingClientRect(),
              r = eu(o),
              l = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              i = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            (s *= e.x),
              (c *= e.y),
              (d *= e.x),
              (f *= e.y),
              (s += l),
              (c += i),
              (o = ef((n = G(o))));
          }
        }
        return F({ width: d, height: f, x: s, y: c });
      }
      function ew(e, t) {
        let n = es(e).scrollLeft;
        return t ? t.left + n : ey(J(e)).left + n;
      }
      function ex(e, t, n) {
        void 0 === n && (n = !1);
        let r = e.getBoundingClientRect();
        return {
          x: r.left + t.scrollLeft - (n ? 0 : ew(e, r)),
          y: r.top + t.scrollTop,
        };
      }
      function eb(e, t, n) {
        let r;
        if ("viewport" === t)
          r = (function (e, t) {
            let n = G(e),
              r = J(e),
              o = n.visualViewport,
              l = r.clientWidth,
              i = r.clientHeight,
              a = 0,
              u = 0;
            if (o) {
              (l = o.width), (i = o.height);
              let e = ei();
              (!e || (e && "fixed" === t)) &&
                ((a = o.offsetLeft), (u = o.offsetTop));
            }
            return { width: l, height: i, x: a, y: u };
          })(e, n);
        else if ("document" === t)
          r = (function (e) {
            let t = J(e),
              n = es(e),
              r = e.ownerDocument.body,
              o = T(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
              l = T(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight
              ),
              i = -n.scrollLeft + ew(e),
              a = -n.scrollTop;
            return (
              "rtl" === eu(r).direction &&
                (i += T(t.clientWidth, r.clientWidth) - o),
              { width: o, height: l, x: i, y: a }
            );
          })(J(e));
        else if (ee(t))
          r = (function (e, t) {
            let n = ey(e, !0, "fixed" === t),
              r = n.top + e.clientTop,
              o = n.left + e.clientLeft,
              l = et(e) ? ev(e) : A(1),
              i = e.clientWidth * l.x;
            return {
              width: i,
              height: e.clientHeight * l.y,
              x: o * l.x,
              y: r * l.y,
            };
          })(t, n);
        else {
          let n = eg(e);
          r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
        }
        return F(r);
      }
      function eS(e) {
        return "static" === eu(e).position;
      }
      function eC(e, t) {
        if (!et(e) || "fixed" === eu(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return J(e) === n && (n = n.ownerDocument.body), n;
      }
      function eE(e, t) {
        let n = G(e);
        if (eo(e)) return n;
        if (!et(e)) {
          let t = ec(e);
          for (; t && !ea(t); ) {
            if (ee(t) && !eS(t)) return t;
            t = ec(t);
          }
          return n;
        }
        let r = eC(e, t);
        for (; r && ["table", "td", "th"].includes(Z(r)) && eS(r); )
          r = eC(r, t);
        return r && ea(r) && eS(r) && !el(r)
          ? n
          : r ||
              (function (e) {
                let t = ec(e);
                for (; et(t) && !ea(t); ) {
                  if (el(t)) return t;
                  if (eo(t)) break;
                  t = ec(t);
                }
                return null;
              })(e) ||
              n;
      }
      let eR = async function (e) {
          let t = this.getOffsetParent || eE,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: (function (e, t, n) {
              let r = et(t),
                o = J(t),
                l = "fixed" === n,
                i = ey(e, !0, l, t),
                a = { scrollLeft: 0, scrollTop: 0 },
                u = A(0);
              if (r || (!r && !l)) {
                if ((("body" !== Z(t) || er(o)) && (a = es(t)), r)) {
                  let e = ey(t, !0, l, t);
                  (u.x = e.x + t.clientLeft), (u.y = e.y + t.clientTop);
                } else o && (u.x = ew(o));
              }
              let s = !o || r || l ? A(0) : ex(o, a);
              return {
                x: i.left + a.scrollLeft - u.x - s.x,
                y: i.top + a.scrollTop - u.y - s.y,
                width: i.width,
                height: i.height,
              };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: r.width, height: r.height },
          };
        },
        eP = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: r, strategy: o } = e,
              l = "fixed" === o,
              i = J(r),
              a = !!t && eo(t.floating);
            if (r === i || (a && l)) return n;
            let u = { scrollLeft: 0, scrollTop: 0 },
              s = A(1),
              c = A(0),
              d = et(r);
            if (
              (d || (!d && !l)) &&
              (("body" !== Z(r) || er(i)) && (u = es(r)), et(r))
            ) {
              let e = ey(r);
              (s = ev(r)),
                (c.x = e.x + r.clientLeft),
                (c.y = e.y + r.clientTop);
            }
            let f = !i || d || l ? A(0) : ex(i, u, !0);
            return {
              width: n.width * s.x,
              height: n.height * s.y,
              x: n.x * s.x - u.scrollLeft * s.x + c.x + f.x,
              y: n.y * s.y - u.scrollTop * s.y + c.y + f.y,
            };
          },
          getDocumentElement: J,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: r, strategy: o } = e,
              l = [
                ...("clippingAncestors" === n
                  ? eo(t)
                    ? []
                    : (function (e, t) {
                        let n = t.get(e);
                        if (n) return n;
                        let r = ed(e, [], !1).filter(
                            (e) => ee(e) && "body" !== Z(e)
                          ),
                          o = null,
                          l = "fixed" === eu(e).position,
                          i = l ? ec(e) : e;
                        for (; ee(i) && !ea(i); ) {
                          let t = eu(i),
                            n = el(i);
                          n || "fixed" !== t.position || (o = null),
                            (
                              l
                                ? !n && !o
                                : (!n &&
                                    "static" === t.position &&
                                    !!o &&
                                    ["absolute", "fixed"].includes(
                                      o.position
                                    )) ||
                                  (er(i) &&
                                    !n &&
                                    (function e(t, n) {
                                      let r = ec(t);
                                      return (
                                        !(r === n || !ee(r) || ea(r)) &&
                                        ("fixed" === eu(r).position || e(r, n))
                                      );
                                    })(e, i))
                            )
                              ? (r = r.filter((e) => e !== i))
                              : (o = t),
                            (i = ec(i));
                        }
                        return t.set(e, r), r;
                      })(t, this._c)
                  : [].concat(n)),
                r,
              ],
              i = l[0],
              a = l.reduce((e, n) => {
                let r = eb(t, n, o);
                return (
                  (e.top = T(r.top, e.top)),
                  (e.right = P(r.right, e.right)),
                  (e.bottom = P(r.bottom, e.bottom)),
                  (e.left = T(r.left, e.left)),
                  e
                );
              }, eb(t, i, o));
            return {
              width: a.right - a.left,
              height: a.bottom - a.top,
              x: a.left,
              y: a.top,
            };
          },
          getOffsetParent: eE,
          getElementRects: eR,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let { width: t, height: n } = ep(e);
            return { width: t, height: n };
          },
          getScale: ev,
          isElement: ee,
          isRTL: function (e) {
            return "rtl" === eu(e).direction;
          },
        },
        eT = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let {
                x: n,
                y: r,
                placement: o,
                rects: l,
                platform: i,
                elements: a,
                middlewareData: u,
              } = t,
              { element: s, padding: c = 0 } = D(e, t) || {};
            if (null == s) return {};
            let d = _(c),
              f = { x: n, y: r },
              p = W(H(o)),
              h = I(p),
              v = await i.getDimensions(s),
              m = "y" === p,
              g = m ? "clientHeight" : "clientWidth",
              y = l.reference[h] + l.reference[p] - f[p] - l.floating[h],
              w = f[p] - l.reference[p],
              x = await (null == i.getOffsetParent
                ? void 0
                : i.getOffsetParent(s)),
              b = x ? x[g] : 0;
            (b && (await (null == i.isElement ? void 0 : i.isElement(x)))) ||
              (b = a.floating[g] || l.floating[h]);
            let S = b / 2 - v[h] / 2 - 1,
              C = P(d[m ? "top" : "left"], S),
              E = P(d[m ? "bottom" : "right"], S),
              R = b - v[h] - E,
              L = b / 2 - v[h] / 2 + (y / 2 - w / 2),
              M = T(C, P(L, R)),
              A =
                !u.arrow &&
                null != N(o) &&
                L !== M &&
                l.reference[h] / 2 - (L < C ? C : E) - v[h] / 2 < 0,
              j = A ? (L < C ? L - C : L - R) : 0;
            return {
              [p]: f[p] + j,
              data: {
                [p]: M,
                centerOffset: L - M - j,
                ...(A && { alignmentOffset: j }),
              },
              reset: A,
            };
          },
        }),
        eL = (e, t, n) => {
          let r = new Map(),
            o = { platform: eP, ...n },
            l = { ...o.platform, _c: r };
          return Y(e, t, { ...o, platform: l });
        };
      var eM = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;
      function eA(e, t) {
        let n, r, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!eA(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = o[r];
            if (("_owner" !== n || !e.$$typeof) && !eA(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function ej(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function ek(e, t) {
        let n = ej(e);
        return Math.round(t * n) / n;
      }
      function eD(e) {
        let t = o.useRef(e);
        return (
          eM(() => {
            t.current = e;
          }),
          t
        );
      }
      let eO = (e) => ({
          name: "arrow",
          options: e,
          fn(t) {
            let { element: n, padding: r } = "function" == typeof e ? e(t) : e;
            return n && {}.hasOwnProperty.call(n, "current")
              ? null != n.current
                ? eT({ element: n.current, padding: r }).fn(t)
                : {}
              : n
              ? eT({ element: n, padding: r }).fn(t)
              : {};
          },
        }),
        eN = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = 0),
            {
              name: "offset",
              options: n,
              async fn(e) {
                var t, r;
                let { x: o, y: l, placement: i, middlewareData: a } = e,
                  u = await U(e, n);
                return i === (null == (t = a.offset) ? void 0 : t.placement) &&
                  null != (r = a.arrow) &&
                  r.alignmentOffset
                  ? {}
                  : { x: o + u.x, y: l + u.y, data: { ...u, placement: i } };
              },
            }),
            options: [e, t],
          };
        },
        eW = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "shift",
              options: n,
              async fn(e) {
                let { x: t, y: r, placement: o } = e,
                  {
                    mainAxis: l = !0,
                    crossAxis: i = !1,
                    limiter: a = {
                      fn: (e) => {
                        let { x: t, y: n } = e;
                        return { x: t, y: n };
                      },
                    },
                    ...u
                  } = D(n, e),
                  s = { x: t, y: r },
                  c = await K(e, u),
                  d = H(O(o)),
                  f = W(d),
                  p = s[f],
                  h = s[d];
                if (l) {
                  let e = "y" === f ? "top" : "left",
                    t = "y" === f ? "bottom" : "right",
                    n = p + c[e],
                    r = p - c[t];
                  p = T(n, P(p, r));
                }
                if (i) {
                  let e = "y" === d ? "top" : "left",
                    t = "y" === d ? "bottom" : "right",
                    n = h + c[e],
                    r = h - c[t];
                  h = T(n, P(h, r));
                }
                let v = a.fn({ ...e, [f]: p, [d]: h });
                return {
                  ...v,
                  data: { x: v.x - t, y: v.y - r, enabled: { [f]: l, [d]: i } },
                };
              },
            }),
            options: [e, t],
          };
        },
        eI = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              options: n,
              fn(e) {
                let {
                    x: t,
                    y: r,
                    placement: o,
                    rects: l,
                    middlewareData: i,
                  } = e,
                  {
                    offset: a = 0,
                    mainAxis: u = !0,
                    crossAxis: s = !0,
                  } = D(n, e),
                  c = { x: t, y: r },
                  d = H(o),
                  f = W(d),
                  p = c[f],
                  h = c[d],
                  v = D(a, e),
                  m =
                    "number" == typeof v
                      ? { mainAxis: v, crossAxis: 0 }
                      : { mainAxis: 0, crossAxis: 0, ...v };
                if (u) {
                  let e = "y" === f ? "height" : "width",
                    t = l.reference[f] - l.floating[e] + m.mainAxis,
                    n = l.reference[f] + l.reference[e] - m.mainAxis;
                  p < t ? (p = t) : p > n && (p = n);
                }
                if (s) {
                  var g, y;
                  let e = "y" === f ? "width" : "height",
                    t = ["top", "left"].includes(O(o)),
                    n =
                      l.reference[d] -
                      l.floating[e] +
                      ((t && (null == (g = i.offset) ? void 0 : g[d])) || 0) +
                      (t ? 0 : m.crossAxis),
                    r =
                      l.reference[d] +
                      l.reference[e] +
                      (t ? 0 : (null == (y = i.offset) ? void 0 : y[d]) || 0) -
                      (t ? m.crossAxis : 0);
                  h < n ? (h = n) : h > r && (h = r);
                }
                return { [f]: p, [d]: h };
              },
            }),
            options: [e, t],
          };
        },
        eH = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "flip",
              options: n,
              async fn(e) {
                var t, r, o, l, i;
                let {
                    placement: a,
                    middlewareData: u,
                    rects: s,
                    initialPlacement: c,
                    platform: d,
                    elements: f,
                  } = e,
                  {
                    mainAxis: p = !0,
                    crossAxis: h = !0,
                    fallbackPlacements: v,
                    fallbackStrategy: m = "bestFit",
                    fallbackAxisSideDirection: g = "none",
                    flipAlignment: y = !0,
                    ...w
                  } = D(n, e);
                if (null != (t = u.arrow) && t.alignmentOffset) return {};
                let x = O(a),
                  b = H(c),
                  S = O(c) === c,
                  C = await (null == d.isRTL ? void 0 : d.isRTL(f.floating)),
                  E =
                    v ||
                    (S || !y
                      ? [B(c)]
                      : (function (e) {
                          let t = B(e);
                          return [V(e), t, V(t)];
                        })(c)),
                  R = "none" !== g;
                !v &&
                  R &&
                  E.push(
                    ...(function (e, t, n, r) {
                      let o = N(e),
                        l = (function (e, t, n) {
                          let r = ["left", "right"],
                            o = ["right", "left"];
                          switch (e) {
                            case "top":
                            case "bottom":
                              if (n) return t ? o : r;
                              return t ? r : o;
                            case "left":
                            case "right":
                              return t ? ["top", "bottom"] : ["bottom", "top"];
                            default:
                              return [];
                          }
                        })(O(e), "start" === n, r);
                      return (
                        o &&
                          ((l = l.map((e) => e + "-" + o)),
                          t && (l = l.concat(l.map(V)))),
                        l
                      );
                    })(c, y, g, C)
                  );
                let P = [c, ...E],
                  T = await K(e, w),
                  L = [],
                  M = (null == (r = u.flip) ? void 0 : r.overflows) || [];
                if ((p && L.push(T[x]), h)) {
                  let e = (function (e, t, n) {
                    void 0 === n && (n = !1);
                    let r = N(e),
                      o = W(H(e)),
                      l = I(o),
                      i =
                        "x" === o
                          ? r === (n ? "end" : "start")
                            ? "right"
                            : "left"
                          : "start" === r
                          ? "bottom"
                          : "top";
                    return (
                      t.reference[l] > t.floating[l] && (i = B(i)), [i, B(i)]
                    );
                  })(a, s, C);
                  L.push(T[e[0]], T[e[1]]);
                }
                if (
                  ((M = [...M, { placement: a, overflows: L }]),
                  !L.every((e) => e <= 0))
                ) {
                  let e = ((null == (o = u.flip) ? void 0 : o.index) || 0) + 1,
                    t = P[e];
                  if (t)
                    return {
                      data: { index: e, overflows: M },
                      reset: { placement: t },
                    };
                  let n =
                    null ==
                    (l = M.filter((e) => e.overflows[0] <= 0).sort(
                      (e, t) => e.overflows[1] - t.overflows[1]
                    )[0])
                      ? void 0
                      : l.placement;
                  if (!n)
                    switch (m) {
                      case "bestFit": {
                        let e =
                          null ==
                          (i = M.filter((e) => {
                            if (R) {
                              let t = H(e.placement);
                              return t === b || "y" === t;
                            }
                            return !0;
                          })
                            .map((e) => [
                              e.placement,
                              e.overflows
                                .filter((e) => e > 0)
                                .reduce((e, t) => e + t, 0),
                            ])
                            .sort((e, t) => e[1] - t[1])[0])
                            ? void 0
                            : i[0];
                        e && (n = e);
                        break;
                      }
                      case "initialPlacement":
                        n = c;
                    }
                  if (a !== n) return { reset: { placement: n } };
                }
                return {};
              },
            }),
            options: [e, t],
          };
        },
        eV = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "size",
              options: n,
              async fn(e) {
                var t, r;
                let o, l;
                let { placement: i, rects: a, platform: u, elements: s } = e,
                  { apply: c = () => {}, ...d } = D(n, e),
                  f = await K(e, d),
                  p = O(i),
                  h = N(i),
                  v = "y" === H(i),
                  { width: m, height: g } = a.floating;
                "top" === p || "bottom" === p
                  ? ((o = p),
                    (l =
                      h ===
                      ((await (null == u.isRTL ? void 0 : u.isRTL(s.floating)))
                        ? "start"
                        : "end")
                        ? "left"
                        : "right"))
                  : ((l = p), (o = "end" === h ? "top" : "bottom"));
                let y = g - f.top - f.bottom,
                  w = m - f.left - f.right,
                  x = P(g - f[o], y),
                  b = P(m - f[l], w),
                  S = !e.middlewareData.shift,
                  C = x,
                  E = b;
                if (
                  (null != (t = e.middlewareData.shift) &&
                    t.enabled.x &&
                    (E = w),
                  null != (r = e.middlewareData.shift) &&
                    r.enabled.y &&
                    (C = y),
                  S && !h)
                ) {
                  let e = T(f.left, 0),
                    t = T(f.right, 0),
                    n = T(f.top, 0),
                    r = T(f.bottom, 0);
                  v
                    ? (E =
                        m -
                        2 * (0 !== e || 0 !== t ? e + t : T(f.left, f.right)))
                    : (C =
                        g -
                        2 * (0 !== n || 0 !== r ? n + r : T(f.top, f.bottom)));
                }
                await c({ ...e, availableWidth: E, availableHeight: C });
                let R = await u.getDimensions(s.floating);
                return m !== R.width || g !== R.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }),
            options: [e, t],
          };
        },
        eB = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "hide",
              options: n,
              async fn(e) {
                let { rects: t } = e,
                  { strategy: r = "referenceHidden", ...o } = D(n, e);
                switch (r) {
                  case "referenceHidden": {
                    let n = X(
                      await K(e, { ...o, elementContext: "reference" }),
                      t.reference
                    );
                    return {
                      data: {
                        referenceHiddenOffsets: n,
                        referenceHidden: q(n),
                      },
                    };
                  }
                  case "escaped": {
                    let n = X(
                      await K(e, { ...o, altBoundary: !0 }),
                      t.floating
                    );
                    return { data: { escapedOffsets: n, escaped: q(n) } };
                  }
                  default:
                    return {};
                }
              },
            }),
            options: [e, t],
          };
        },
        e_ = (e, t) => ({ ...eO(e), options: [e, t] });
      var eF = o.forwardRef((e, t) => {
        let { children: n, width: r = 10, height: o = 5, ...l } = e;
        return (0, d.jsx)(p.WV.svg, {
          ...l,
          ref: t,
          width: r,
          height: o,
          viewBox: "0 0 30 10",
          preserveAspectRatio: "none",
          children: e.asChild
            ? n
            : (0, d.jsx)("polygon", { points: "0,0 30,0 15,10" }),
        });
      });
      eF.displayName = "Arrow";
      var ez = n(1336),
        eY = "Popper",
        [eK, eX] = (0, u.b)(eY),
        [eq, eU] = eK(eY),
        e$ = (e) => {
          let { __scopePopper: t, children: n } = e,
            [r, l] = o.useState(null);
          return (0, d.jsx)(eq, {
            scope: t,
            anchor: r,
            onAnchorChange: l,
            children: n,
          });
        };
      e$.displayName = eY;
      var eZ = "PopperAnchor",
        eG = o.forwardRef((e, t) => {
          let { __scopePopper: n, virtualRef: r, ...l } = e,
            i = eU(eZ, n),
            a = o.useRef(null),
            u = (0, s.e)(t, a);
          return (
            o.useEffect(() => {
              i.onAnchorChange((null == r ? void 0 : r.current) || a.current);
            }),
            r ? null : (0, d.jsx)(p.WV.div, { ...l, ref: u })
          );
        });
      eG.displayName = eZ;
      var eJ = "PopperContent",
        [eQ, e0] = eK(eJ),
        e1 = o.forwardRef((e, t) => {
          var n, r, i, a, u, c, f, v;
          let {
              __scopePopper: m,
              side: g = "bottom",
              sideOffset: y = 0,
              align: w = "center",
              alignOffset: x = 0,
              arrowPadding: b = 0,
              avoidCollisions: S = !0,
              collisionBoundary: C = [],
              collisionPadding: E = 0,
              sticky: R = "partial",
              hideWhenDetached: L = !1,
              updatePositionStrategy: A = "optimized",
              onPlaced: j,
              ...k
            } = e,
            D = eU(eJ, m),
            [O, N] = o.useState(null),
            W = (0, s.e)(t, (e) => N(e)),
            [I, H] = o.useState(null),
            V = (function (e) {
              let [t, n] = o.useState(void 0);
              return (
                (0, ez.b)(() => {
                  if (e) {
                    n({ width: e.offsetWidth, height: e.offsetHeight });
                    let t = new ResizeObserver((t) => {
                      let r, o;
                      if (!Array.isArray(t) || !t.length) return;
                      let l = t[0];
                      if ("borderBoxSize" in l) {
                        let e = l.borderBoxSize,
                          t = Array.isArray(e) ? e[0] : e;
                        (r = t.inlineSize), (o = t.blockSize);
                      } else (r = e.offsetWidth), (o = e.offsetHeight);
                      n({ width: r, height: o });
                    });
                    return (
                      t.observe(e, { box: "border-box" }), () => t.unobserve(e)
                    );
                  }
                  n(void 0);
                }, [e]),
                t
              );
            })(I),
            B =
              null !== (f = null == V ? void 0 : V.width) && void 0 !== f
                ? f
                : 0,
            _ =
              null !== (v = null == V ? void 0 : V.height) && void 0 !== v
                ? v
                : 0,
            F =
              "number" == typeof E
                ? E
                : { top: 0, right: 0, bottom: 0, left: 0, ...E },
            z = Array.isArray(C) ? C : [C],
            Y = z.length > 0,
            K = { padding: F, boundary: z.filter(e8), altBoundary: Y },
            {
              refs: X,
              floatingStyles: q,
              placement: U,
              isPositioned: $,
              middlewareData: Z,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = "bottom",
                  strategy: n = "absolute",
                  middleware: r = [],
                  platform: i,
                  elements: { reference: a, floating: u } = {},
                  transform: s = !0,
                  whileElementsMounted: c,
                  open: d,
                } = e,
                [f, p] = o.useState({
                  x: 0,
                  y: 0,
                  strategy: n,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [h, v] = o.useState(r);
              eA(h, r) || v(r);
              let [m, g] = o.useState(null),
                [y, w] = o.useState(null),
                x = o.useCallback((e) => {
                  e !== E.current && ((E.current = e), g(e));
                }, []),
                b = o.useCallback((e) => {
                  e !== R.current && ((R.current = e), w(e));
                }, []),
                S = a || m,
                C = u || y,
                E = o.useRef(null),
                R = o.useRef(null),
                P = o.useRef(f),
                T = null != c,
                L = eD(c),
                M = eD(i),
                A = eD(d),
                j = o.useCallback(() => {
                  if (!E.current || !R.current) return;
                  let e = { placement: t, strategy: n, middleware: h };
                  M.current && (e.platform = M.current),
                    eL(E.current, R.current, e).then((e) => {
                      let t = { ...e, isPositioned: !1 !== A.current };
                      k.current &&
                        !eA(P.current, t) &&
                        ((P.current = t),
                        l.flushSync(() => {
                          p(t);
                        }));
                    });
                }, [h, t, n, M, A]);
              eM(() => {
                !1 === d &&
                  P.current.isPositioned &&
                  ((P.current.isPositioned = !1),
                  p((e) => ({ ...e, isPositioned: !1 })));
              }, [d]);
              let k = o.useRef(!1);
              eM(
                () => (
                  (k.current = !0),
                  () => {
                    k.current = !1;
                  }
                ),
                []
              ),
                eM(() => {
                  if ((S && (E.current = S), C && (R.current = C), S && C)) {
                    if (L.current) return L.current(S, C, j);
                    j();
                  }
                }, [S, C, j, L, T]);
              let D = o.useMemo(
                  () => ({
                    reference: E,
                    floating: R,
                    setReference: x,
                    setFloating: b,
                  }),
                  [x, b]
                ),
                O = o.useMemo(() => ({ reference: S, floating: C }), [S, C]),
                N = o.useMemo(() => {
                  let e = { position: n, left: 0, top: 0 };
                  if (!O.floating) return e;
                  let t = ek(O.floating, f.x),
                    r = ek(O.floating, f.y);
                  return s
                    ? {
                        ...e,
                        transform: "translate(" + t + "px, " + r + "px)",
                        ...(ej(O.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: n, left: t, top: r };
                }, [n, s, O.floating, f.x, f.y]);
              return o.useMemo(
                () => ({
                  ...f,
                  update: j,
                  refs: D,
                  elements: O,
                  floatingStyles: N,
                }),
                [f, j, D, O, N]
              );
            })({
              strategy: "fixed",
              placement: g + ("center" !== w ? "-" + w : ""),
              whileElementsMounted: function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return (function (e, t, n, r) {
                  let o;
                  void 0 === r && (r = {});
                  let {
                      ancestorScroll: l = !0,
                      ancestorResize: i = !0,
                      elementResize: a = "function" == typeof ResizeObserver,
                      layoutShift: u = "function" ==
                        typeof IntersectionObserver,
                      animationFrame: s = !1,
                    } = r,
                    c = eh(e),
                    d = l || i ? [...(c ? ed(c) : []), ...ed(t)] : [];
                  d.forEach((e) => {
                    l && e.addEventListener("scroll", n, { passive: !0 }),
                      i && e.addEventListener("resize", n);
                  });
                  let f =
                      c && u
                        ? (function (e, t) {
                            let n,
                              r = null,
                              o = J(e);
                            function l() {
                              var e;
                              clearTimeout(n),
                                null == (e = r) || e.disconnect(),
                                (r = null);
                            }
                            return (
                              !(function i(a, u) {
                                void 0 === a && (a = !1),
                                  void 0 === u && (u = 1),
                                  l();
                                let {
                                  left: s,
                                  top: c,
                                  width: d,
                                  height: f,
                                } = e.getBoundingClientRect();
                                if ((a || t(), !d || !f)) return;
                                let p = M(c),
                                  h = M(o.clientWidth - (s + d)),
                                  v = {
                                    rootMargin:
                                      -p +
                                      "px " +
                                      -h +
                                      "px " +
                                      -M(o.clientHeight - (c + f)) +
                                      "px " +
                                      -M(s) +
                                      "px",
                                    threshold: T(0, P(1, u)) || 1,
                                  },
                                  m = !0;
                                function g(e) {
                                  let t = e[0].intersectionRatio;
                                  if (t !== u) {
                                    if (!m) return i();
                                    t
                                      ? i(!1, t)
                                      : (n = setTimeout(() => {
                                          i(!1, 1e-7);
                                        }, 1e3));
                                  }
                                  m = !1;
                                }
                                try {
                                  r = new IntersectionObserver(g, {
                                    ...v,
                                    root: o.ownerDocument,
                                  });
                                } catch (e) {
                                  r = new IntersectionObserver(g, v);
                                }
                                r.observe(e);
                              })(!0),
                              l
                            );
                          })(c, n)
                        : null,
                    p = -1,
                    h = null;
                  a &&
                    ((h = new ResizeObserver((e) => {
                      let [r] = e;
                      r &&
                        r.target === c &&
                        h &&
                        (h.unobserve(t),
                        cancelAnimationFrame(p),
                        (p = requestAnimationFrame(() => {
                          var e;
                          null == (e = h) || e.observe(t);
                        }))),
                        n();
                    })),
                    c && !s && h.observe(c),
                    h.observe(t));
                  let v = s ? ey(e) : null;
                  return (
                    s &&
                      (function t() {
                        let r = ey(e);
                        v &&
                          (r.x !== v.x ||
                            r.y !== v.y ||
                            r.width !== v.width ||
                            r.height !== v.height) &&
                          n(),
                          (v = r),
                          (o = requestAnimationFrame(t));
                      })(),
                    n(),
                    () => {
                      var e;
                      d.forEach((e) => {
                        l && e.removeEventListener("scroll", n),
                          i && e.removeEventListener("resize", n);
                      }),
                        null == f || f(),
                        null == (e = h) || e.disconnect(),
                        (h = null),
                        s && cancelAnimationFrame(o);
                    }
                  );
                })(...t, { animationFrame: "always" === A });
              },
              elements: { reference: D.anchor },
              middleware: [
                eN({ mainAxis: y + _, alignmentAxis: x }),
                S &&
                  eW({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === R ? eI() : void 0,
                    ...K,
                  }),
                S && eH({ ...K }),
                eV({
                  ...K,
                  apply: (e) => {
                    let {
                        elements: t,
                        rects: n,
                        availableWidth: r,
                        availableHeight: o,
                      } = e,
                      { width: l, height: i } = n.reference,
                      a = t.floating.style;
                    a.setProperty(
                      "--radix-popper-available-width",
                      "".concat(r, "px")
                    ),
                      a.setProperty(
                        "--radix-popper-available-height",
                        "".concat(o, "px")
                      ),
                      a.setProperty(
                        "--radix-popper-anchor-width",
                        "".concat(l, "px")
                      ),
                      a.setProperty(
                        "--radix-popper-anchor-height",
                        "".concat(i, "px")
                      );
                  },
                }),
                I && e_({ element: I, padding: b }),
                e3({ arrowWidth: B, arrowHeight: _ }),
                L && eB({ strategy: "referenceHidden", ...K }),
              ],
            }),
            [G, Q] = e4(U),
            ee = (0, h.W)(j);
          (0, ez.b)(() => {
            $ && (null == ee || ee());
          }, [$, ee]);
          let et = null === (n = Z.arrow) || void 0 === n ? void 0 : n.x,
            en = null === (r = Z.arrow) || void 0 === r ? void 0 : r.y,
            er =
              (null === (i = Z.arrow) || void 0 === i
                ? void 0
                : i.centerOffset) !== 0,
            [eo, el] = o.useState();
          return (
            (0, ez.b)(() => {
              O && el(window.getComputedStyle(O).zIndex);
            }, [O]),
            (0, d.jsx)("div", {
              ref: X.setFloating,
              "data-radix-popper-content-wrapper": "",
              style: {
                ...q,
                transform: $ ? q.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: eo,
                "--radix-popper-transform-origin": [
                  null === (a = Z.transformOrigin) || void 0 === a
                    ? void 0
                    : a.x,
                  null === (u = Z.transformOrigin) || void 0 === u
                    ? void 0
                    : u.y,
                ].join(" "),
                ...((null === (c = Z.hide) || void 0 === c
                  ? void 0
                  : c.referenceHidden) && {
                  visibility: "hidden",
                  pointerEvents: "none",
                }),
              },
              dir: e.dir,
              children: (0, d.jsx)(eQ, {
                scope: m,
                placedSide: G,
                onArrowChange: H,
                arrowX: et,
                arrowY: en,
                shouldHideArrow: er,
                children: (0, d.jsx)(p.WV.div, {
                  "data-side": G,
                  "data-align": Q,
                  ...k,
                  ref: W,
                  style: { ...k.style, animation: $ ? void 0 : "none" },
                }),
              }),
            })
          );
        });
      e1.displayName = eJ;
      var e2 = "PopperArrow",
        e5 = { top: "bottom", right: "left", bottom: "top", left: "right" },
        e7 = o.forwardRef(function (e, t) {
          let { __scopePopper: n, ...r } = e,
            o = e0(e2, n),
            l = e5[o.placedSide];
          return (0,
          d.jsx)("span", { ref: o.onArrowChange, style: { position: "absolute", left: o.arrowX, top: o.arrowY, [l]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[o.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[o.placedSide], visibility: o.shouldHideArrow ? "hidden" : void 0 }, children: (0, d.jsx)(eF, { ...r, ref: t, style: { ...r.style, display: "block" } }) });
        });
      function e8(e) {
        return null !== e;
      }
      e7.displayName = e2;
      var e3 = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var n, r, o, l, i;
          let { placement: a, rects: u, middlewareData: s } = t,
            c =
              (null === (n = s.arrow) || void 0 === n
                ? void 0
                : n.centerOffset) !== 0,
            d = c ? 0 : e.arrowWidth,
            f = c ? 0 : e.arrowHeight,
            [p, h] = e4(a),
            v = { start: "0%", center: "50%", end: "100%" }[h],
            m =
              (null !==
                (l = null === (r = s.arrow) || void 0 === r ? void 0 : r.x) &&
              void 0 !== l
                ? l
                : 0) +
              d / 2,
            g =
              (null !==
                (i = null === (o = s.arrow) || void 0 === o ? void 0 : o.y) &&
              void 0 !== i
                ? i
                : 0) +
              f / 2,
            y = "",
            w = "";
          return (
            "bottom" === p
              ? ((y = c ? v : "".concat(m, "px")), (w = "".concat(-f, "px")))
              : "top" === p
              ? ((y = c ? v : "".concat(m, "px")),
                (w = "".concat(u.floating.height + f, "px")))
              : "right" === p
              ? ((y = "".concat(-f, "px")), (w = c ? v : "".concat(g, "px")))
              : "left" === p &&
                ((y = "".concat(u.floating.width + f, "px")),
                (w = c ? v : "".concat(g, "px"))),
            { data: { x: y, y: w } }
          );
        },
      });
      function e4(e) {
        let [t, n = "center"] = e.split("-");
        return [t, n];
      }
      var e6 = o.forwardRef((e, t) => {
        var n, r;
        let { container: i, ...a } = e,
          [u, s] = o.useState(!1);
        (0, ez.b)(() => s(!0), []);
        let c =
          i ||
          (u &&
            (null === (r = globalThis) || void 0 === r
              ? void 0
              : null === (n = r.document) || void 0 === n
              ? void 0
              : n.body));
        return c
          ? l.createPortal((0, d.jsx)(p.WV.div, { ...a, ref: t }), c)
          : null;
      });
      e6.displayName = "Portal";
      var e9 = n(91715),
        te = o.forwardRef((e, t) =>
          (0, d.jsx)(p.WV.span, {
            ...e,
            ref: t,
            style: {
              position: "absolute",
              border: 0,
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              wordWrap: "normal",
              ...e.style,
            },
          })
        );
      te.displayName = "VisuallyHidden";
      var tt = n(78369),
        tn = function () {
          return (tn =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      "function" == typeof SuppressedError && SuppressedError;
      var tr = n(91584),
        to = n(28215),
        tl = (0, n(15411)._)(),
        ti = function () {},
        ta = o.forwardRef(function (e, t) {
          var n = o.useRef(null),
            r = o.useState({
              onScrollCapture: ti,
              onWheelCapture: ti,
              onTouchMoveCapture: ti,
            }),
            l = r[0],
            i = r[1],
            a = e.forwardProps,
            u = e.children,
            s = e.className,
            c = e.removeScrollBar,
            d = e.enabled,
            f = e.shards,
            p = e.sideCar,
            h = e.noIsolation,
            v = e.inert,
            m = e.allowPinchZoom,
            g = e.as,
            y = e.gapMode,
            w = (function (e, t) {
              var n = {};
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) &&
                  0 > t.indexOf(r) &&
                  (n[r] = e[r]);
              if (
                null != e &&
                "function" == typeof Object.getOwnPropertySymbols
              )
                for (
                  var o = 0, r = Object.getOwnPropertySymbols(e);
                  o < r.length;
                  o++
                )
                  0 > t.indexOf(r[o]) &&
                    Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                    (n[r[o]] = e[r[o]]);
              return n;
            })(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            x = (0, to.q)([n, t]),
            b = tn(tn({}, w), l);
          return o.createElement(
            o.Fragment,
            null,
            d &&
              o.createElement(p, {
                sideCar: tl,
                removeScrollBar: c,
                shards: f,
                noIsolation: h,
                inert: v,
                setCallbacks: i,
                allowPinchZoom: !!m,
                lockRef: n,
                gapMode: y,
              }),
            a
              ? o.cloneElement(o.Children.only(u), tn(tn({}, b), { ref: x }))
              : o.createElement(
                  void 0 === g ? "div" : g,
                  tn({}, b, { className: s, ref: x }),
                  u
                )
          );
        });
      (ta.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (ta.classNames = { fullWidth: tr.zi, zeroRight: tr.pF });
      var tu = n(48776),
        ts = n(65973),
        tc = n(18039),
        td = !1;
      if ("undefined" != typeof window)
        try {
          var tf = Object.defineProperty({}, "passive", {
            get: function () {
              return (td = !0), !0;
            },
          });
          window.addEventListener("test", tf, tf),
            window.removeEventListener("test", tf, tf);
        } catch (e) {
          td = !1;
        }
      var tp = !!td && { passive: !1 },
        th = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === n[t]
            )
          );
        },
        tv = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              tm(e, r))
            ) {
              var o = tg(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        tm = function (e, t) {
          return "v" === e ? th(t, "overflowY") : th(t, "overflowX");
        },
        tg = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        ty = function (e, t, n, r, o) {
          var l,
            i =
              ((l = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === l ? -1 : 1),
            a = i * r,
            u = n.target,
            s = t.contains(u),
            c = !1,
            d = a > 0,
            f = 0,
            p = 0;
          do {
            var h = tg(e, u),
              v = h[0],
              m = h[1] - h[2] - i * v;
            (v || m) && tm(e, u) && ((f += m), (p += v)),
              u instanceof ShadowRoot ? (u = u.host) : (u = u.parentNode);
          } while (
            (!s && u !== document.body) ||
            (s && (t.contains(u) || t === u))
          );
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && a > f))
              ? (c = !0)
              : !d && ((o && 1 > Math.abs(p)) || (!o && -a > p)) && (c = !0),
            c
          );
        },
        tw = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        tx = function (e) {
          return [e.deltaX, e.deltaY];
        },
        tb = function (e) {
          return e && "current" in e ? e.current : e;
        },
        tS = 0,
        tC = [],
        tE = (0, tu.L)(tl, function (e) {
          var t = o.useRef([]),
            n = o.useRef([0, 0]),
            r = o.useRef(),
            l = o.useState(tS++)[0],
            i = o.useState(tc.Ws)[0],
            a = o.useRef(e);
          o.useEffect(
            function () {
              a.current = e;
            },
            [e]
          ),
            o.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(l));
                  var t = (function (e, t, n) {
                    if (n || 2 == arguments.length)
                      for (var r, o = 0, l = t.length; o < l; o++)
                        (!r && o in t) ||
                          (r || (r = Array.prototype.slice.call(t, 0, o)),
                          (r[o] = t[o]));
                    return e.concat(r || Array.prototype.slice.call(t));
                  })([e.lockRef.current], (e.shards || []).map(tb), !0).filter(
                    Boolean
                  );
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(l));
                    }),
                    function () {
                      document.body.classList.remove(
                        "block-interactivity-".concat(l)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(l)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var u = o.useCallback(function (e, t) {
              if (
                ("touches" in e && 2 === e.touches.length) ||
                ("wheel" === e.type && e.ctrlKey)
              )
                return !a.current.allowPinchZoom;
              var o,
                l = tw(e),
                i = n.current,
                u = "deltaX" in e ? e.deltaX : i[0] - l[0],
                s = "deltaY" in e ? e.deltaY : i[1] - l[1],
                c = e.target,
                d = Math.abs(u) > Math.abs(s) ? "h" : "v";
              if ("touches" in e && "h" === d && "range" === c.type) return !1;
              var f = tv(d, c);
              if (!f) return !0;
              if (
                (f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = tv(d, c))),
                !f)
              )
                return !1;
              if (
                (!r.current &&
                  "changedTouches" in e &&
                  (u || s) &&
                  (r.current = o),
                !o)
              )
                return !0;
              var p = r.current || o;
              return ty(p, t, e, "h" === p ? u : s, !0);
            }, []),
            s = o.useCallback(function (e) {
              if (tC.length && tC[tC.length - 1] === i) {
                var n = "deltaY" in e ? tx(e) : tw(e),
                  r = t.current.filter(function (t) {
                    var r;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      (r = t.delta)[0] === n[0] &&
                      r[1] === n[1]
                    );
                  })[0];
                if (r && r.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!r) {
                  var o = (a.current.shards || [])
                    .map(tb)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? u(e, o[0]) : !a.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            c = o.useCallback(function (e, n, r, o) {
              var l = {
                name: e,
                delta: n,
                target: r,
                should: o,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                      (e = e.parentNode);
                  return t;
                })(r),
              };
              t.current.push(l),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== l;
                  });
                }, 1);
            }, []),
            d = o.useCallback(function (e) {
              (n.current = tw(e)), (r.current = void 0);
            }, []),
            f = o.useCallback(function (t) {
              c(t.type, tx(t), t.target, u(t, e.lockRef.current));
            }, []),
            p = o.useCallback(function (t) {
              c(t.type, tw(t), t.target, u(t, e.lockRef.current));
            }, []);
          o.useEffect(function () {
            return (
              tC.push(i),
              e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: p,
              }),
              document.addEventListener("wheel", s, tp),
              document.addEventListener("touchmove", s, tp),
              document.addEventListener("touchstart", d, tp),
              function () {
                (tC = tC.filter(function (e) {
                  return e !== i;
                })),
                  document.removeEventListener("wheel", s, tp),
                  document.removeEventListener("touchmove", s, tp),
                  document.removeEventListener("touchstart", d, tp);
              }
            );
          }, []);
          var h = e.removeScrollBar,
            v = e.inert;
          return o.createElement(
            o.Fragment,
            null,
            v
              ? o.createElement(i, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      l,
                      " {pointer-events: none;}\n  .allow-interactivity-"
                    )
                    .concat(l, " {pointer-events: all;}\n"),
                })
              : null,
            h ? o.createElement(ts.jp, { gapMode: e.gapMode }) : null
          );
        }),
        tR = o.forwardRef(function (e, t) {
          return o.createElement(ta, tn({}, e, { ref: t, sideCar: tE }));
        });
      tR.classNames = ta.classNames;
      var tP = [" ", "Enter", "ArrowUp", "ArrowDown"],
        tT = [" ", "Enter"],
        tL = "Select",
        [tM, tA, tj] = (function (e) {
          let t = e + "CollectionProvider",
            [n, r] = (0, u.b)(t),
            [l, i] = n(t, {
              collectionRef: { current: null },
              itemMap: new Map(),
            }),
            a = (e) => {
              let { scope: t, children: n } = e,
                r = o.useRef(null),
                i = o.useRef(new Map()).current;
              return (0, d.jsx)(l, {
                scope: t,
                itemMap: i,
                collectionRef: r,
                children: n,
              });
            };
          a.displayName = t;
          let f = e + "CollectionSlot",
            p = o.forwardRef((e, t) => {
              let { scope: n, children: r } = e,
                o = i(f, n),
                l = (0, s.e)(t, o.collectionRef);
              return (0, d.jsx)(c.g7, { ref: l, children: r });
            });
          p.displayName = f;
          let h = e + "CollectionItemSlot",
            v = "data-radix-collection-item",
            m = o.forwardRef((e, t) => {
              let { scope: n, children: r, ...l } = e,
                a = o.useRef(null),
                u = (0, s.e)(t, a),
                f = i(h, n);
              return (
                o.useEffect(
                  () => (
                    f.itemMap.set(a, { ref: a, ...l }),
                    () => void f.itemMap.delete(a)
                  )
                ),
                (0, d.jsx)(c.g7, { [v]: "", ref: u, children: r })
              );
            });
          return (
            (m.displayName = h),
            [
              { Provider: a, Slot: p, ItemSlot: m },
              function (t) {
                let n = i(e + "CollectionConsumer", t);
                return o.useCallback(() => {
                  let e = n.collectionRef.current;
                  if (!e) return [];
                  let t = Array.from(e.querySelectorAll("[".concat(v, "]")));
                  return Array.from(n.itemMap.values()).sort(
                    (e, n) =>
                      t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
                  );
                }, [n.collectionRef, n.itemMap]);
              },
              r,
            ]
          );
        })(tL),
        [tk, tD] = (function (e, t = []) {
          let n = [],
            r = () => {
              let t = n.map((e) => o.createContext(e));
              return function (n) {
                let r = n?.[e] || t;
                return o.useMemo(
                  () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                  [n, r]
                );
              };
            };
          return (
            (r.scopeName = e),
            [
              function (t, r) {
                let l = o.createContext(r),
                  i = n.length;
                n = [...n, r];
                let a = (t) => {
                  let { scope: n, children: r, ...a } = t,
                    u = n?.[e]?.[i] || l,
                    s = o.useMemo(() => a, Object.values(a));
                  return (0, d.jsx)(u.Provider, { value: s, children: r });
                };
                return (
                  (a.displayName = t + "Provider"),
                  [
                    a,
                    function (n, a) {
                      let u = a?.[e]?.[i] || l,
                        s = o.useContext(u);
                      if (s) return s;
                      if (void 0 !== r) return r;
                      throw Error(`\`${n}\` must be used within \`${t}\``);
                    },
                  ]
                );
              },
              (function (...e) {
                let t = e[0];
                if (1 === e.length) return t;
                let n = () => {
                  let n = e.map((e) => ({
                    useScope: e(),
                    scopeName: e.scopeName,
                  }));
                  return function (e) {
                    let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                      let o = n(e)[`__scope${r}`];
                      return { ...t, ...o };
                    }, {});
                    return o.useMemo(
                      () => ({ [`__scope${t.scopeName}`]: r }),
                      [r]
                    );
                  };
                };
                return (n.scopeName = t.scopeName), n;
              })(r, ...t),
            ]
          );
        })(tL, [tj, eX]),
        tO = eX(),
        [tN, tW] = tk(tL),
        [tI, tH] = tk(tL),
        tV = (e) => {
          let {
              __scopeSelect: t,
              children: n,
              open: r,
              defaultOpen: l,
              onOpenChange: i,
              value: a,
              defaultValue: u,
              onValueChange: s,
              dir: c,
              name: p,
              autoComplete: h,
              disabled: v,
              required: m,
              form: g,
            } = e,
            y = tO(t),
            [w, x] = o.useState(null),
            [b, S] = o.useState(null),
            [C, R] = o.useState(!1),
            P = (function (e) {
              let t = o.useContext(f);
              return e || t || "ltr";
            })(c),
            [T = !1, L] = (0, e9.T)({ prop: r, defaultProp: l, onChange: i }),
            [M, A] = (0, e9.T)({ prop: a, defaultProp: u, onChange: s }),
            j = o.useRef(null),
            k = !w || g || !!w.closest("form"),
            [D, O] = o.useState(new Set()),
            N = Array.from(D)
              .map((e) => e.props.value)
              .join(";");
          return (0, d.jsx)(e$, {
            ...y,
            children: (0, d.jsxs)(tN, {
              required: m,
              scope: t,
              trigger: w,
              onTriggerChange: x,
              valueNode: b,
              onValueNodeChange: S,
              valueNodeHasChildren: C,
              onValueNodeHasChildrenChange: R,
              contentId: (0, E.M)(),
              value: M,
              onValueChange: A,
              open: T,
              onOpenChange: L,
              dir: P,
              triggerPointerDownPosRef: j,
              disabled: v,
              children: [
                (0, d.jsx)(tM.Provider, {
                  scope: t,
                  children: (0, d.jsx)(tI, {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: o.useCallback((e) => {
                      O((t) => new Set(t).add(e));
                    }, []),
                    onNativeOptionRemove: o.useCallback((e) => {
                      O((t) => {
                        let n = new Set(t);
                        return n.delete(e), n;
                      });
                    }, []),
                    children: n,
                  }),
                }),
                k
                  ? (0, d.jsxs)(
                      nv,
                      {
                        "aria-hidden": !0,
                        required: m,
                        tabIndex: -1,
                        name: p,
                        autoComplete: h,
                        value: M,
                        onChange: (e) => A(e.target.value),
                        disabled: v,
                        form: g,
                        children: [
                          void 0 === M
                            ? (0, d.jsx)("option", { value: "" })
                            : null,
                          Array.from(D),
                        ],
                      },
                      N
                    )
                  : null,
              ],
            }),
          });
        };
      tV.displayName = tL;
      var tB = "SelectTrigger",
        t_ = o.forwardRef((e, t) => {
          let { __scopeSelect: n, disabled: r = !1, ...l } = e,
            i = tO(n),
            u = tW(tB, n),
            c = u.disabled || r,
            f = (0, s.e)(t, u.onTriggerChange),
            h = tA(n),
            v = o.useRef("touch"),
            [m, g, y] = nm((e) => {
              let t = h().filter((e) => !e.disabled),
                n = t.find((e) => e.value === u.value),
                r = ng(t, e, n);
              void 0 !== r && u.onValueChange(r.value);
            }),
            w = (e) => {
              c || (u.onOpenChange(!0), y()),
                e &&
                  (u.triggerPointerDownPosRef.current = {
                    x: Math.round(e.pageX),
                    y: Math.round(e.pageY),
                  });
            };
          return (0, d.jsx)(eG, {
            asChild: !0,
            ...i,
            children: (0, d.jsx)(p.WV.button, {
              type: "button",
              role: "combobox",
              "aria-controls": u.contentId,
              "aria-expanded": u.open,
              "aria-required": u.required,
              "aria-autocomplete": "none",
              dir: u.dir,
              "data-state": u.open ? "open" : "closed",
              disabled: c,
              "data-disabled": c ? "" : void 0,
              "data-placeholder": nh(u.value) ? "" : void 0,
              ...l,
              ref: f,
              onClick: (0, a.M)(l.onClick, (e) => {
                e.currentTarget.focus(), "mouse" !== v.current && w(e);
              }),
              onPointerDown: (0, a.M)(l.onPointerDown, (e) => {
                v.current = e.pointerType;
                let t = e.target;
                t.hasPointerCapture(e.pointerId) &&
                  t.releasePointerCapture(e.pointerId),
                  0 === e.button &&
                    !1 === e.ctrlKey &&
                    "mouse" === e.pointerType &&
                    (w(e), e.preventDefault());
              }),
              onKeyDown: (0, a.M)(l.onKeyDown, (e) => {
                let t = "" !== m.current;
                e.ctrlKey ||
                  e.altKey ||
                  e.metaKey ||
                  1 !== e.key.length ||
                  g(e.key),
                  (!t || " " !== e.key) &&
                    tP.includes(e.key) &&
                    (w(), e.preventDefault());
              }),
            }),
          });
        });
      t_.displayName = tB;
      var tF = "SelectValue",
        tz = o.forwardRef((e, t) => {
          let {
              __scopeSelect: n,
              className: r,
              style: o,
              children: l,
              placeholder: i = "",
              ...a
            } = e,
            u = tW(tF, n),
            { onValueNodeHasChildrenChange: c } = u,
            f = void 0 !== l,
            h = (0, s.e)(t, u.onValueNodeChange);
          return (
            (0, ez.b)(() => {
              c(f);
            }, [c, f]),
            (0, d.jsx)(p.WV.span, {
              ...a,
              ref: h,
              style: { pointerEvents: "none" },
              children: nh(u.value)
                ? (0, d.jsx)(d.Fragment, { children: i })
                : l,
            })
          );
        });
      tz.displayName = tF;
      var tY = o.forwardRef((e, t) => {
        let { __scopeSelect: n, children: r, ...o } = e;
        return (0, d.jsx)(p.WV.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: r || "▼",
        });
      });
      tY.displayName = "SelectIcon";
      var tK = (e) => (0, d.jsx)(e6, { asChild: !0, ...e });
      tK.displayName = "SelectPortal";
      var tX = "SelectContent",
        tq = o.forwardRef((e, t) => {
          let n = tW(tX, e.__scopeSelect),
            [r, i] = o.useState();
          return ((0, ez.b)(() => {
            i(new DocumentFragment());
          }, []),
          n.open)
            ? (0, d.jsx)(tZ, { ...e, ref: t })
            : r
            ? l.createPortal(
                (0, d.jsx)(tU, {
                  scope: e.__scopeSelect,
                  children: (0, d.jsx)(tM.Slot, {
                    scope: e.__scopeSelect,
                    children: (0, d.jsx)("div", { children: e.children }),
                  }),
                }),
                r
              )
            : null;
        });
      tq.displayName = tX;
      var [tU, t$] = tk(tX),
        tZ = o.forwardRef((e, t) => {
          let {
              __scopeSelect: n,
              position: r = "item-aligned",
              onCloseAutoFocus: l,
              onEscapeKeyDown: i,
              onPointerDownOutside: u,
              side: f,
              sideOffset: p,
              align: h,
              alignOffset: v,
              arrowPadding: m,
              collisionBoundary: g,
              collisionPadding: w,
              sticky: x,
              hideWhenDetached: E,
              avoidCollisions: R,
              ...P
            } = e,
            T = tW(tX, n),
            [L, M] = o.useState(null),
            [A, j] = o.useState(null),
            k = (0, s.e)(t, (e) => M(e)),
            [D, O] = o.useState(null),
            [N, W] = o.useState(null),
            I = tA(n),
            [H, V] = o.useState(!1),
            B = o.useRef(!1);
          o.useEffect(() => {
            if (L) return (0, tt.Ry)(L);
          }, [L]),
            o.useEffect(() => {
              var e, t;
              let n = document.querySelectorAll("[data-radix-focus-guard]");
              return (
                document.body.insertAdjacentElement(
                  "afterbegin",
                  null !== (e = n[0]) && void 0 !== e ? e : S()
                ),
                document.body.insertAdjacentElement(
                  "beforeend",
                  null !== (t = n[1]) && void 0 !== t ? t : S()
                ),
                b++,
                () => {
                  1 === b &&
                    document
                      .querySelectorAll("[data-radix-focus-guard]")
                      .forEach((e) => e.remove()),
                    b--;
                }
              );
            }, []);
          let _ = o.useCallback(
              (e) => {
                let [t, ...n] = I().map((e) => e.ref.current),
                  [r] = n.slice(-1),
                  o = document.activeElement;
                for (let n of e)
                  if (
                    n === o ||
                    (null == n || n.scrollIntoView({ block: "nearest" }),
                    n === t && A && (A.scrollTop = 0),
                    n === r && A && (A.scrollTop = A.scrollHeight),
                    null == n || n.focus(),
                    document.activeElement !== o)
                  )
                    return;
              },
              [I, A]
            ),
            F = o.useCallback(() => _([D, L]), [_, D, L]);
          o.useEffect(() => {
            H && F();
          }, [H, F]);
          let { onOpenChange: z, triggerPointerDownPosRef: Y } = T;
          o.useEffect(() => {
            if (L) {
              let e = { x: 0, y: 0 },
                t = (t) => {
                  var n, r, o, l;
                  e = {
                    x: Math.abs(
                      Math.round(t.pageX) -
                        (null !==
                          (o =
                            null === (n = Y.current) || void 0 === n
                              ? void 0
                              : n.x) && void 0 !== o
                          ? o
                          : 0)
                    ),
                    y: Math.abs(
                      Math.round(t.pageY) -
                        (null !==
                          (l =
                            null === (r = Y.current) || void 0 === r
                              ? void 0
                              : r.y) && void 0 !== l
                          ? l
                          : 0)
                    ),
                  };
                },
                n = (n) => {
                  e.x <= 10 && e.y <= 10
                    ? n.preventDefault()
                    : L.contains(n.target) || z(!1),
                    document.removeEventListener("pointermove", t),
                    (Y.current = null);
                };
              return (
                null !== Y.current &&
                  (document.addEventListener("pointermove", t),
                  document.addEventListener("pointerup", n, {
                    capture: !0,
                    once: !0,
                  })),
                () => {
                  document.removeEventListener("pointermove", t),
                    document.removeEventListener("pointerup", n, {
                      capture: !0,
                    });
                }
              );
            }
          }, [L, z, Y]),
            o.useEffect(() => {
              let e = () => z(!1);
              return (
                window.addEventListener("blur", e),
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("blur", e),
                    window.removeEventListener("resize", e);
                }
              );
            }, [z]);
          let [K, X] = nm((e) => {
              let t = I().filter((e) => !e.disabled),
                n = t.find((e) => e.ref.current === document.activeElement),
                r = ng(t, e, n);
              r && setTimeout(() => r.ref.current.focus());
            }),
            q = o.useCallback(
              (e, t, n) => {
                let r = !B.current && !n;
                ((void 0 !== T.value && T.value === t) || r) &&
                  (O(e), r && (B.current = !0));
              },
              [T.value]
            ),
            U = o.useCallback(() => (null == L ? void 0 : L.focus()), [L]),
            $ = o.useCallback(
              (e, t, n) => {
                let r = !B.current && !n;
                ((void 0 !== T.value && T.value === t) || r) && W(e);
              },
              [T.value]
            ),
            Z = "popper" === r ? tJ : tG,
            G =
              Z === tJ
                ? {
                    side: f,
                    sideOffset: p,
                    align: h,
                    alignOffset: v,
                    arrowPadding: m,
                    collisionBoundary: g,
                    collisionPadding: w,
                    sticky: x,
                    hideWhenDetached: E,
                    avoidCollisions: R,
                  }
                : {};
          return (0, d.jsx)(tU, {
            scope: n,
            content: L,
            viewport: A,
            onViewportChange: j,
            itemRefCallback: q,
            selectedItem: D,
            onItemLeave: U,
            itemTextRefCallback: $,
            focusSelectedItem: F,
            selectedItemText: N,
            position: r,
            isPositioned: H,
            searchRef: K,
            children: (0, d.jsx)(tR, {
              as: c.g7,
              allowPinchZoom: !0,
              children: (0, d.jsx)(C.M, {
                asChild: !0,
                trapped: T.open,
                onMountAutoFocus: (e) => {
                  e.preventDefault();
                },
                onUnmountAutoFocus: (0, a.M)(l, (e) => {
                  var t;
                  null === (t = T.trigger) ||
                    void 0 === t ||
                    t.focus({ preventScroll: !0 }),
                    e.preventDefault();
                }),
                children: (0, d.jsx)(y, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: i,
                  onPointerDownOutside: u,
                  onFocusOutside: (e) => e.preventDefault(),
                  onDismiss: () => T.onOpenChange(!1),
                  children: (0, d.jsx)(Z, {
                    role: "listbox",
                    id: T.contentId,
                    "data-state": T.open ? "open" : "closed",
                    dir: T.dir,
                    onContextMenu: (e) => e.preventDefault(),
                    ...P,
                    ...G,
                    onPlaced: () => V(!0),
                    ref: k,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...P.style,
                    },
                    onKeyDown: (0, a.M)(P.onKeyDown, (e) => {
                      let t = e.ctrlKey || e.altKey || e.metaKey;
                      if (
                        ("Tab" === e.key && e.preventDefault(),
                        t || 1 !== e.key.length || X(e.key),
                        ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key))
                      ) {
                        let t = I()
                          .filter((e) => !e.disabled)
                          .map((e) => e.ref.current);
                        if (
                          (["ArrowUp", "End"].includes(e.key) &&
                            (t = t.slice().reverse()),
                          ["ArrowUp", "ArrowDown"].includes(e.key))
                        ) {
                          let n = e.target,
                            r = t.indexOf(n);
                          t = t.slice(r + 1);
                        }
                        setTimeout(() => _(t)), e.preventDefault();
                      }
                    }),
                  }),
                }),
              }),
            }),
          });
        });
      tZ.displayName = "SelectContentImpl";
      var tG = o.forwardRef((e, t) => {
        let { __scopeSelect: n, onPlaced: r, ...l } = e,
          a = tW(tX, n),
          u = t$(tX, n),
          [c, f] = o.useState(null),
          [h, v] = o.useState(null),
          m = (0, s.e)(t, (e) => v(e)),
          g = tA(n),
          y = o.useRef(!1),
          w = o.useRef(!0),
          {
            viewport: x,
            selectedItem: b,
            selectedItemText: S,
            focusSelectedItem: C,
          } = u,
          E = o.useCallback(() => {
            if (a.trigger && a.valueNode && c && h && x && b && S) {
              let e = a.trigger.getBoundingClientRect(),
                t = h.getBoundingClientRect(),
                n = a.valueNode.getBoundingClientRect(),
                o = S.getBoundingClientRect();
              if ("rtl" !== a.dir) {
                let r = o.left - t.left,
                  l = n.left - r,
                  a = e.left - l,
                  u = e.width + a,
                  s = Math.max(u, t.width),
                  d = i(l, [10, Math.max(10, window.innerWidth - 10 - s)]);
                (c.style.minWidth = u + "px"), (c.style.left = d + "px");
              } else {
                let r = t.right - o.right,
                  l = window.innerWidth - n.right - r,
                  a = window.innerWidth - e.right - l,
                  u = e.width + a,
                  s = Math.max(u, t.width),
                  d = i(l, [10, Math.max(10, window.innerWidth - 10 - s)]);
                (c.style.minWidth = u + "px"), (c.style.right = d + "px");
              }
              let l = g(),
                u = window.innerHeight - 20,
                s = x.scrollHeight,
                d = window.getComputedStyle(h),
                f = parseInt(d.borderTopWidth, 10),
                p = parseInt(d.paddingTop, 10),
                v = parseInt(d.borderBottomWidth, 10),
                m = f + p + s + parseInt(d.paddingBottom, 10) + v,
                w = Math.min(5 * b.offsetHeight, m),
                C = window.getComputedStyle(x),
                E = parseInt(C.paddingTop, 10),
                R = parseInt(C.paddingBottom, 10),
                P = e.top + e.height / 2 - 10,
                T = b.offsetHeight / 2,
                L = f + p + (b.offsetTop + T);
              if (L <= P) {
                let e = l.length > 0 && b === l[l.length - 1].ref.current;
                c.style.bottom = "0px";
                let t = h.clientHeight - x.offsetTop - x.offsetHeight;
                c.style.height =
                  L + Math.max(u - P, T + (e ? R : 0) + t + v) + "px";
              } else {
                let e = l.length > 0 && b === l[0].ref.current;
                c.style.top = "0px";
                let t = Math.max(P, f + x.offsetTop + (e ? E : 0) + T);
                (c.style.height = t + (m - L) + "px"),
                  (x.scrollTop = L - P + x.offsetTop);
              }
              (c.style.margin = "".concat(10, "px 0")),
                (c.style.minHeight = w + "px"),
                (c.style.maxHeight = u + "px"),
                null == r || r(),
                requestAnimationFrame(() => (y.current = !0));
            }
          }, [g, a.trigger, a.valueNode, c, h, x, b, S, a.dir, r]);
        (0, ez.b)(() => E(), [E]);
        let [R, P] = o.useState();
        (0, ez.b)(() => {
          h && P(window.getComputedStyle(h).zIndex);
        }, [h]);
        let T = o.useCallback(
          (e) => {
            e && !0 === w.current && (E(), null == C || C(), (w.current = !1));
          },
          [E, C]
        );
        return (0, d.jsx)(tQ, {
          scope: n,
          contentWrapper: c,
          shouldExpandOnScrollRef: y,
          onScrollButtonChange: T,
          children: (0, d.jsx)("div", {
            ref: f,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: R,
            },
            children: (0, d.jsx)(p.WV.div, {
              ...l,
              ref: m,
              style: { boxSizing: "border-box", maxHeight: "100%", ...l.style },
            }),
          }),
        });
      });
      tG.displayName = "SelectItemAlignedPosition";
      var tJ = o.forwardRef((e, t) => {
        let {
            __scopeSelect: n,
            align: r = "start",
            collisionPadding: o = 10,
            ...l
          } = e,
          i = tO(n);
        return (0, d.jsx)(e1, {
          ...i,
          ...l,
          ref: t,
          align: r,
          collisionPadding: o,
          style: {
            boxSizing: "border-box",
            ...l.style,
            "--radix-select-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-select-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
        });
      });
      tJ.displayName = "SelectPopperPosition";
      var [tQ, t0] = tk(tX, {}),
        t1 = "SelectViewport",
        t2 = o.forwardRef((e, t) => {
          let { __scopeSelect: n, nonce: r, ...l } = e,
            i = t$(t1, n),
            u = t0(t1, n),
            c = (0, s.e)(t, i.onViewportChange),
            f = o.useRef(0);
          return (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsx)("style", {
                dangerouslySetInnerHTML: {
                  __html:
                    "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
                },
                nonce: r,
              }),
              (0, d.jsx)(tM.Slot, {
                scope: n,
                children: (0, d.jsx)(p.WV.div, {
                  "data-radix-select-viewport": "",
                  role: "presentation",
                  ...l,
                  ref: c,
                  style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...l.style,
                  },
                  onScroll: (0, a.M)(l.onScroll, (e) => {
                    let t = e.currentTarget,
                      { contentWrapper: n, shouldExpandOnScrollRef: r } = u;
                    if ((null == r ? void 0 : r.current) && n) {
                      let e = Math.abs(f.current - t.scrollTop);
                      if (e > 0) {
                        let r = window.innerHeight - 20,
                          o = Math.max(
                            parseFloat(n.style.minHeight),
                            parseFloat(n.style.height)
                          );
                        if (o < r) {
                          let l = o + e,
                            i = Math.min(r, l),
                            a = l - i;
                          (n.style.height = i + "px"),
                            "0px" === n.style.bottom &&
                              ((t.scrollTop = a > 0 ? a : 0),
                              (n.style.justifyContent = "flex-end"));
                        }
                      }
                    }
                    f.current = t.scrollTop;
                  }),
                }),
              }),
            ],
          });
        });
      t2.displayName = t1;
      var t5 = "SelectGroup",
        [t7, t8] = tk(t5),
        t3 = o.forwardRef((e, t) => {
          let { __scopeSelect: n, ...r } = e,
            o = (0, E.M)();
          return (0, d.jsx)(t7, {
            scope: n,
            id: o,
            children: (0, d.jsx)(p.WV.div, {
              role: "group",
              "aria-labelledby": o,
              ...r,
              ref: t,
            }),
          });
        });
      t3.displayName = t5;
      var t4 = "SelectLabel",
        t6 = o.forwardRef((e, t) => {
          let { __scopeSelect: n, ...r } = e,
            o = t8(t4, n);
          return (0, d.jsx)(p.WV.div, { id: o.id, ...r, ref: t });
        });
      t6.displayName = t4;
      var t9 = "SelectItem",
        [ne, nt] = tk(t9),
        nn = o.forwardRef((e, t) => {
          let {
              __scopeSelect: n,
              value: r,
              disabled: l = !1,
              textValue: i,
              ...u
            } = e,
            c = tW(t9, n),
            f = t$(t9, n),
            h = c.value === r,
            [v, m] = o.useState(null != i ? i : ""),
            [g, y] = o.useState(!1),
            w = (0, s.e)(t, (e) => {
              var t;
              return null === (t = f.itemRefCallback) || void 0 === t
                ? void 0
                : t.call(f, e, r, l);
            }),
            x = (0, E.M)(),
            b = o.useRef("touch"),
            S = () => {
              l || (c.onValueChange(r), c.onOpenChange(!1));
            };
          if ("" === r)
            throw Error(
              "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
            );
          return (0, d.jsx)(ne, {
            scope: n,
            value: r,
            disabled: l,
            textId: x,
            isSelected: h,
            onItemTextChange: o.useCallback((e) => {
              m((t) => {
                var n;
                return (
                  t ||
                  (null !== (n = null == e ? void 0 : e.textContent) &&
                  void 0 !== n
                    ? n
                    : ""
                  ).trim()
                );
              });
            }, []),
            children: (0, d.jsx)(tM.ItemSlot, {
              scope: n,
              value: r,
              disabled: l,
              textValue: v,
              children: (0, d.jsx)(p.WV.div, {
                role: "option",
                "aria-labelledby": x,
                "data-highlighted": g ? "" : void 0,
                "aria-selected": h && g,
                "data-state": h ? "checked" : "unchecked",
                "aria-disabled": l || void 0,
                "data-disabled": l ? "" : void 0,
                tabIndex: l ? void 0 : -1,
                ...u,
                ref: w,
                onFocus: (0, a.M)(u.onFocus, () => y(!0)),
                onBlur: (0, a.M)(u.onBlur, () => y(!1)),
                onClick: (0, a.M)(u.onClick, () => {
                  "mouse" !== b.current && S();
                }),
                onPointerUp: (0, a.M)(u.onPointerUp, () => {
                  "mouse" === b.current && S();
                }),
                onPointerDown: (0, a.M)(u.onPointerDown, (e) => {
                  b.current = e.pointerType;
                }),
                onPointerMove: (0, a.M)(u.onPointerMove, (e) => {
                  if (((b.current = e.pointerType), l)) {
                    var t;
                    null === (t = f.onItemLeave) || void 0 === t || t.call(f);
                  } else
                    "mouse" === b.current &&
                      e.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: (0, a.M)(u.onPointerLeave, (e) => {
                  if (e.currentTarget === document.activeElement) {
                    var t;
                    null === (t = f.onItemLeave) || void 0 === t || t.call(f);
                  }
                }),
                onKeyDown: (0, a.M)(u.onKeyDown, (e) => {
                  var t;
                  ((null === (t = f.searchRef) || void 0 === t
                    ? void 0
                    : t.current) !== "" &&
                    " " === e.key) ||
                    (tT.includes(e.key) && S(),
                    " " === e.key && e.preventDefault());
                }),
              }),
            }),
          });
        });
      nn.displayName = t9;
      var nr = "SelectItemText",
        no = o.forwardRef((e, t) => {
          let { __scopeSelect: n, className: r, style: i, ...a } = e,
            u = tW(nr, n),
            c = t$(nr, n),
            f = nt(nr, n),
            h = tH(nr, n),
            [v, m] = o.useState(null),
            g = (0, s.e)(
              t,
              (e) => m(e),
              f.onItemTextChange,
              (e) => {
                var t;
                return null === (t = c.itemTextRefCallback) || void 0 === t
                  ? void 0
                  : t.call(c, e, f.value, f.disabled);
              }
            ),
            y = null == v ? void 0 : v.textContent,
            w = o.useMemo(
              () =>
                (0, d.jsx)(
                  "option",
                  { value: f.value, disabled: f.disabled, children: y },
                  f.value
                ),
              [f.disabled, f.value, y]
            ),
            { onNativeOptionAdd: x, onNativeOptionRemove: b } = h;
          return (
            (0, ez.b)(() => (x(w), () => b(w)), [x, b, w]),
            (0, d.jsxs)(d.Fragment, {
              children: [
                (0, d.jsx)(p.WV.span, { id: f.textId, ...a, ref: g }),
                f.isSelected && u.valueNode && !u.valueNodeHasChildren
                  ? l.createPortal(a.children, u.valueNode)
                  : null,
              ],
            })
          );
        });
      no.displayName = nr;
      var nl = "SelectItemIndicator",
        ni = o.forwardRef((e, t) => {
          let { __scopeSelect: n, ...r } = e;
          return nt(nl, n).isSelected
            ? (0, d.jsx)(p.WV.span, { "aria-hidden": !0, ...r, ref: t })
            : null;
        });
      ni.displayName = nl;
      var na = "SelectScrollUpButton",
        nu = o.forwardRef((e, t) => {
          let n = t$(na, e.__scopeSelect),
            r = t0(na, e.__scopeSelect),
            [l, i] = o.useState(!1),
            a = (0, s.e)(t, r.onScrollButtonChange);
          return (
            (0, ez.b)(() => {
              if (n.viewport && n.isPositioned) {
                let e = function () {
                    i(t.scrollTop > 0);
                  },
                  t = n.viewport;
                return (
                  e(),
                  t.addEventListener("scroll", e),
                  () => t.removeEventListener("scroll", e)
                );
              }
            }, [n.viewport, n.isPositioned]),
            l
              ? (0, d.jsx)(nd, {
                  ...e,
                  ref: a,
                  onAutoScroll: () => {
                    let { viewport: e, selectedItem: t } = n;
                    e && t && (e.scrollTop = e.scrollTop - t.offsetHeight);
                  },
                })
              : null
          );
        });
      nu.displayName = na;
      var ns = "SelectScrollDownButton",
        nc = o.forwardRef((e, t) => {
          let n = t$(ns, e.__scopeSelect),
            r = t0(ns, e.__scopeSelect),
            [l, i] = o.useState(!1),
            a = (0, s.e)(t, r.onScrollButtonChange);
          return (
            (0, ez.b)(() => {
              if (n.viewport && n.isPositioned) {
                let e = function () {
                    let e = t.scrollHeight - t.clientHeight;
                    i(Math.ceil(t.scrollTop) < e);
                  },
                  t = n.viewport;
                return (
                  e(),
                  t.addEventListener("scroll", e),
                  () => t.removeEventListener("scroll", e)
                );
              }
            }, [n.viewport, n.isPositioned]),
            l
              ? (0, d.jsx)(nd, {
                  ...e,
                  ref: a,
                  onAutoScroll: () => {
                    let { viewport: e, selectedItem: t } = n;
                    e && t && (e.scrollTop = e.scrollTop + t.offsetHeight);
                  },
                })
              : null
          );
        });
      nc.displayName = ns;
      var nd = o.forwardRef((e, t) => {
          let { __scopeSelect: n, onAutoScroll: r, ...l } = e,
            i = t$("SelectScrollButton", n),
            u = o.useRef(null),
            s = tA(n),
            c = o.useCallback(() => {
              null !== u.current &&
                (window.clearInterval(u.current), (u.current = null));
            }, []);
          return (
            o.useEffect(() => () => c(), [c]),
            (0, ez.b)(() => {
              var e;
              let t = s().find((e) => e.ref.current === document.activeElement);
              null == t ||
                null === (e = t.ref.current) ||
                void 0 === e ||
                e.scrollIntoView({ block: "nearest" });
            }, [s]),
            (0, d.jsx)(p.WV.div, {
              "aria-hidden": !0,
              ...l,
              ref: t,
              style: { flexShrink: 0, ...l.style },
              onPointerDown: (0, a.M)(l.onPointerDown, () => {
                null === u.current && (u.current = window.setInterval(r, 50));
              }),
              onPointerMove: (0, a.M)(l.onPointerMove, () => {
                var e;
                null === (e = i.onItemLeave) || void 0 === e || e.call(i),
                  null === u.current && (u.current = window.setInterval(r, 50));
              }),
              onPointerLeave: (0, a.M)(l.onPointerLeave, () => {
                c();
              }),
            })
          );
        }),
        nf = o.forwardRef((e, t) => {
          let { __scopeSelect: n, ...r } = e;
          return (0, d.jsx)(p.WV.div, { "aria-hidden": !0, ...r, ref: t });
        });
      nf.displayName = "SelectSeparator";
      var np = "SelectArrow";
      function nh(e) {
        return "" === e || void 0 === e;
      }
      o.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e,
          o = tO(n),
          l = tW(np, n),
          i = t$(np, n);
        return l.open && "popper" === i.position
          ? (0, d.jsx)(e7, { ...o, ...r, ref: t })
          : null;
      }).displayName = np;
      var nv = o.forwardRef((e, t) => {
        let { value: n, ...r } = e,
          l = o.useRef(null),
          i = (0, s.e)(t, l),
          a = (function (e) {
            let t = o.useRef({ value: e, previous: e });
            return o.useMemo(
              () => (
                t.current.value !== e &&
                  ((t.current.previous = t.current.value),
                  (t.current.value = e)),
                t.current.previous
              ),
              [e]
            );
          })(n);
        return (
          o.useEffect(() => {
            let e = l.current,
              t = Object.getOwnPropertyDescriptor(
                window.HTMLSelectElement.prototype,
                "value"
              ).set;
            if (a !== n && t) {
              let r = new Event("change", { bubbles: !0 });
              t.call(e, n), e.dispatchEvent(r);
            }
          }, [a, n]),
          (0, d.jsx)(te, {
            asChild: !0,
            children: (0, d.jsx)("select", { ...r, ref: i, defaultValue: n }),
          })
        );
      });
      function nm(e) {
        let t = (0, h.W)(e),
          n = o.useRef(""),
          r = o.useRef(0),
          l = o.useCallback(
            (e) => {
              let o = n.current + e;
              t(o),
                (function e(t) {
                  (n.current = t),
                    window.clearTimeout(r.current),
                    "" !== t &&
                      (r.current = window.setTimeout(() => e(""), 1e3));
                })(o);
            },
            [t]
          ),
          i = o.useCallback(() => {
            (n.current = ""), window.clearTimeout(r.current);
          }, []);
        return (
          o.useEffect(() => () => window.clearTimeout(r.current), []), [n, l, i]
        );
      }
      function ng(e, t, n) {
        var r;
        let o =
            t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
          l =
            ((r = Math.max(n ? e.indexOf(n) : -1, 0)),
            e.map((t, n) => e[(r + n) % e.length]));
        1 === o.length && (l = l.filter((e) => e !== n));
        let i = l.find((e) =>
          e.textValue.toLowerCase().startsWith(o.toLowerCase())
        );
        return i !== n ? i : void 0;
      }
      nv.displayName = "BubbleSelect";
      var ny = tV,
        nw = t_,
        nx = tz,
        nb = tY,
        nS = tK,
        nC = tq,
        nE = t2,
        nR = t3,
        nP = t6,
        nT = nn,
        nL = no,
        nM = ni,
        nA = nu,
        nj = nc,
        nk = nf;
    },
  },
]);
