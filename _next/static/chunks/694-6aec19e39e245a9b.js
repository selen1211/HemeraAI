"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [694],
  {
    44694: function (e, t, n) {
      n.d(t, {
        x8: function () {
          return e_;
        },
        VY: function () {
          return ek;
        },
        dk: function () {
          return eA;
        },
        $N: function () {
          return eE;
        },
        aV: function () {
          return eI;
        },
        h_: function () {
          return eS;
        },
        fC: function () {
          return eT;
        },
        Dx: function () {
          return eW;
        },
        xz: function () {
          return eL;
        },
      });
      var r,
        o = n(2265),
        a = n(78149),
        i = n(1584),
        l = n(98324),
        u = n(53201),
        s = n(91715),
        c = n(25171),
        d = n(75137),
        f = n(66486),
        v = n(57437),
        p = "dismissableLayer.update",
        m = o.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        h = o.forwardRef((e, t) => {
          var n, l;
          let {
              disableOutsidePointerEvents: u = !1,
              onEscapeKeyDown: s,
              onPointerDownOutside: h,
              onFocusOutside: b,
              onInteractOutside: E,
              onDismiss: w,
              ...C
            } = e,
            R = o.useContext(m),
            [N, O] = o.useState(null),
            D =
              null !== (l = null == N ? void 0 : N.ownerDocument) &&
              void 0 !== l
                ? l
                : null === (n = globalThis) || void 0 === n
                ? void 0
                : n.document,
            [, P] = o.useState({}),
            x = (0, i.e)(t, (e) => O(e)),
            j = Array.from(R.layers),
            [M] = [...R.layersWithOutsidePointerEventsDisabled].slice(-1),
            T = j.indexOf(M),
            L = N ? j.indexOf(N) : -1,
            S = R.layersWithOutsidePointerEventsDisabled.size > 0,
            I = L >= T,
            k = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = (0, d.W)(e),
                a = o.useRef(!1),
                i = o.useRef(() => {});
              return (
                o.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !a.current) {
                        let t = function () {
                            y("dismissableLayer.pointerDownOutside", r, o, {
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
                      a.current = !1;
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
                { onPointerDownCapture: () => (a.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...R.branches].some((e) => e.contains(t));
              !I ||
                n ||
                (null == h || h(e),
                null == E || E(e),
                e.defaultPrevented || null == w || w());
            }, D),
            W = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = (0, d.W)(e),
                a = o.useRef(!1);
              return (
                o.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !a.current &&
                      y(
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
                  onFocusCapture: () => (a.current = !0),
                  onBlurCapture: () => (a.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...R.branches].some((e) => e.contains(t)) ||
                (null == b || b(e),
                null == E || E(e),
                e.defaultPrevented || null == w || w());
            }, D);
          return (
            (0, f.e)((e) => {
              L !== R.layers.size - 1 ||
                (null == s || s(e),
                !e.defaultPrevented && w && (e.preventDefault(), w()));
            }, D),
            o.useEffect(() => {
              if (N)
                return (
                  u &&
                    (0 === R.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = D.body.style.pointerEvents),
                      (D.body.style.pointerEvents = "none")),
                    R.layersWithOutsidePointerEventsDisabled.add(N)),
                  R.layers.add(N),
                  g(),
                  () => {
                    u &&
                      1 === R.layersWithOutsidePointerEventsDisabled.size &&
                      (D.body.style.pointerEvents = r);
                  }
                );
            }, [N, D, u, R]),
            o.useEffect(
              () => () => {
                N &&
                  (R.layers.delete(N),
                  R.layersWithOutsidePointerEventsDisabled.delete(N),
                  g());
              },
              [N, R]
            ),
            o.useEffect(() => {
              let e = () => P({});
              return (
                document.addEventListener(p, e),
                () => document.removeEventListener(p, e)
              );
            }, []),
            (0, v.jsx)(c.WV.div, {
              ...C,
              ref: x,
              style: {
                pointerEvents: S ? (I ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: (0, a.M)(e.onFocusCapture, W.onFocusCapture),
              onBlurCapture: (0, a.M)(e.onBlurCapture, W.onBlurCapture),
              onPointerDownCapture: (0, a.M)(
                e.onPointerDownCapture,
                k.onPointerDownCapture
              ),
            })
          );
        });
      function g() {
        let e = new CustomEvent(p);
        document.dispatchEvent(e);
      }
      function y(e, t, n, r) {
        let { discrete: o } = r,
          a = n.originalEvent.target,
          i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && a.addEventListener(e, t, { once: !0 }),
          o ? (0, c.jH)(a, i) : a.dispatchEvent(i);
      }
      (h.displayName = "DismissableLayer"),
        (o.forwardRef((e, t) => {
          let n = o.useContext(m),
            r = o.useRef(null),
            a = (0, i.e)(t, r);
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
            (0, v.jsx)(c.WV.div, { ...e, ref: a })
          );
        }).displayName = "DismissableLayerBranch");
      var b = n(80467),
        E = n(54887),
        w = n(1336),
        C = o.forwardRef((e, t) => {
          var n, r;
          let { container: a, ...i } = e,
            [l, u] = o.useState(!1);
          (0, w.b)(() => u(!0), []);
          let s =
            a ||
            (l &&
              (null === (r = globalThis) || void 0 === r
                ? void 0
                : null === (n = r.document) || void 0 === n
                ? void 0
                : n.body));
          return s
            ? E.createPortal((0, v.jsx)(c.WV.div, { ...i, ref: t }), s)
            : null;
        });
      C.displayName = "Portal";
      var R = (e) => {
        var t, n;
        let r, a;
        let { present: l, children: u } = e,
          s = (function (e) {
            var t, n;
            let [r, a] = o.useState(),
              i = o.useRef({}),
              l = o.useRef(e),
              u = o.useRef("none"),
              [s, c] =
                ((t = e ? "mounted" : "unmounted"),
                (n = {
                  mounted: {
                    UNMOUNT: "unmounted",
                    ANIMATION_OUT: "unmountSuspended",
                  },
                  unmountSuspended: {
                    MOUNT: "mounted",
                    ANIMATION_END: "unmounted",
                  },
                  unmounted: { MOUNT: "mounted" },
                }),
                o.useReducer((e, t) => {
                  let r = n[e][t];
                  return null != r ? r : e;
                }, t));
            return (
              o.useEffect(() => {
                let e = N(i.current);
                u.current = "mounted" === s ? e : "none";
              }, [s]),
              (0, w.b)(() => {
                let t = i.current,
                  n = l.current;
                if (n !== e) {
                  let r = u.current,
                    o = N(t);
                  e
                    ? c("MOUNT")
                    : "none" === o ||
                      (null == t ? void 0 : t.display) === "none"
                    ? c("UNMOUNT")
                    : n && r !== o
                    ? c("ANIMATION_OUT")
                    : c("UNMOUNT"),
                    (l.current = e);
                }
              }, [e, c]),
              (0, w.b)(() => {
                if (r) {
                  let e = (e) => {
                      let t = N(i.current).includes(e.animationName);
                      e.target === r &&
                        t &&
                        E.flushSync(() => c("ANIMATION_END"));
                    },
                    t = (e) => {
                      e.target === r && (u.current = N(i.current));
                    };
                  return (
                    r.addEventListener("animationstart", t),
                    r.addEventListener("animationcancel", e),
                    r.addEventListener("animationend", e),
                    () => {
                      r.removeEventListener("animationstart", t),
                        r.removeEventListener("animationcancel", e),
                        r.removeEventListener("animationend", e);
                    }
                  );
                }
                c("ANIMATION_END");
              }, [r, c]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(s),
                ref: o.useCallback((e) => {
                  e && (i.current = getComputedStyle(e)), a(e);
                }, []),
              }
            );
          })(l),
          c =
            "function" == typeof u
              ? u({ present: s.isPresent })
              : o.Children.only(u),
          d = (0, i.e)(
            s.ref,
            (r =
              null === (t = Object.getOwnPropertyDescriptor(c.props, "ref")) ||
              void 0 === t
                ? void 0
                : t.get) &&
              "isReactWarning" in r &&
              r.isReactWarning
              ? c.ref
              : (r =
                  null === (n = Object.getOwnPropertyDescriptor(c, "ref")) ||
                  void 0 === n
                    ? void 0
                    : n.get) &&
                "isReactWarning" in r &&
                r.isReactWarning
              ? c.props.ref
              : c.props.ref || c.ref
          );
        return "function" == typeof u || s.isPresent
          ? o.cloneElement(c, { ref: d })
          : null;
      };
      function N(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      R.displayName = "Presence";
      var O = 0;
      function D() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.cssText =
            "outline: none; opacity: 1; position: fixed; pointer-events: none"),
          e
        );
      }
      var P = function () {
        return (P =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      "function" == typeof SuppressedError && SuppressedError;
      var x = n(91584),
        j = n(28215),
        M = (0, n(15411)._)(),
        T = function () {},
        L = o.forwardRef(function (e, t) {
          var n = o.useRef(null),
            r = o.useState({
              onScrollCapture: T,
              onWheelCapture: T,
              onTouchMoveCapture: T,
            }),
            a = r[0],
            i = r[1],
            l = e.forwardProps,
            u = e.children,
            s = e.className,
            c = e.removeScrollBar,
            d = e.enabled,
            f = e.shards,
            v = e.sideCar,
            p = e.noIsolation,
            m = e.inert,
            h = e.allowPinchZoom,
            g = e.as,
            y = e.gapMode,
            b = (function (e, t) {
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
            E = (0, j.q)([n, t]),
            w = P(P({}, b), a);
          return o.createElement(
            o.Fragment,
            null,
            d &&
              o.createElement(v, {
                sideCar: M,
                removeScrollBar: c,
                shards: f,
                noIsolation: p,
                inert: m,
                setCallbacks: i,
                allowPinchZoom: !!h,
                lockRef: n,
                gapMode: y,
              }),
            l
              ? o.cloneElement(o.Children.only(u), P(P({}, w), { ref: E }))
              : o.createElement(
                  void 0 === g ? "div" : g,
                  P({}, w, { className: s, ref: E }),
                  u
                )
          );
        });
      (L.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (L.classNames = { fullWidth: x.zi, zeroRight: x.pF });
      var S = n(48776),
        I = n(65973),
        k = n(18039),
        W = !1;
      if ("undefined" != typeof window)
        try {
          var A = Object.defineProperty({}, "passive", {
            get: function () {
              return (W = !0), !0;
            },
          });
          window.addEventListener("test", A, A),
            window.removeEventListener("test", A, A);
        } catch (e) {
          W = !1;
        }
      var _ = !!W && { passive: !1 },
        F = function (e, t) {
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
        B = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              U(e, r))
            ) {
              var o = V(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        U = function (e, t) {
          return "v" === e ? F(t, "overflowY") : F(t, "overflowX");
        },
        V = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        Y = function (e, t, n, r, o) {
          var a,
            i =
              ((a = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === a ? -1 : 1),
            l = i * r,
            u = n.target,
            s = t.contains(u),
            c = !1,
            d = l > 0,
            f = 0,
            v = 0;
          do {
            var p = V(e, u),
              m = p[0],
              h = p[1] - p[2] - i * m;
            (m || h) && U(e, u) && ((f += h), (v += m)),
              u instanceof ShadowRoot ? (u = u.host) : (u = u.parentNode);
          } while (
            (!s && u !== document.body) ||
            (s && (t.contains(u) || t === u))
          );
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && l > f))
              ? (c = !0)
              : !d && ((o && 1 > Math.abs(v)) || (!o && -l > v)) && (c = !0),
            c
          );
        },
        z = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        X = function (e) {
          return [e.deltaX, e.deltaY];
        },
        Z = function (e) {
          return e && "current" in e ? e.current : e;
        },
        q = 0,
        H = [],
        K = (0, S.L)(M, function (e) {
          var t = o.useRef([]),
            n = o.useRef([0, 0]),
            r = o.useRef(),
            a = o.useState(q++)[0],
            i = o.useState(k.Ws)[0],
            l = o.useRef(e);
          o.useEffect(
            function () {
              l.current = e;
            },
            [e]
          ),
            o.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(a));
                  var t = (function (e, t, n) {
                    if (n || 2 == arguments.length)
                      for (var r, o = 0, a = t.length; o < a; o++)
                        (!r && o in t) ||
                          (r || (r = Array.prototype.slice.call(t, 0, o)),
                          (r[o] = t[o]));
                    return e.concat(r || Array.prototype.slice.call(t));
                  })([e.lockRef.current], (e.shards || []).map(Z), !0).filter(
                    Boolean
                  );
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(a));
                    }),
                    function () {
                      document.body.classList.remove(
                        "block-interactivity-".concat(a)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(a)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var u = o.useCallback(function (e, t) {
              if ("touches" in e && 2 === e.touches.length)
                return !l.current.allowPinchZoom;
              var o,
                a = z(e),
                i = n.current,
                u = "deltaX" in e ? e.deltaX : i[0] - a[0],
                s = "deltaY" in e ? e.deltaY : i[1] - a[1],
                c = e.target,
                d = Math.abs(u) > Math.abs(s) ? "h" : "v";
              if ("touches" in e && "h" === d && "range" === c.type) return !1;
              var f = B(d, c);
              if (!f) return !0;
              if (
                (f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = B(d, c))), !f)
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
              var v = r.current || o;
              return Y(v, t, e, "h" === v ? u : s, !0);
            }, []),
            s = o.useCallback(function (e) {
              if (H.length && H[H.length - 1] === i) {
                var n = "deltaY" in e ? X(e) : z(e),
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
                  var o = (l.current.shards || [])
                    .map(Z)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? u(e, o[0]) : !l.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            c = o.useCallback(function (e, n, r, o) {
              var a = {
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
              t.current.push(a),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== a;
                  });
                }, 1);
            }, []),
            d = o.useCallback(function (e) {
              (n.current = z(e)), (r.current = void 0);
            }, []),
            f = o.useCallback(function (t) {
              c(t.type, X(t), t.target, u(t, e.lockRef.current));
            }, []),
            v = o.useCallback(function (t) {
              c(t.type, z(t), t.target, u(t, e.lockRef.current));
            }, []);
          o.useEffect(function () {
            return (
              H.push(i),
              e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: v,
              }),
              document.addEventListener("wheel", s, _),
              document.addEventListener("touchmove", s, _),
              document.addEventListener("touchstart", d, _),
              function () {
                (H = H.filter(function (e) {
                  return e !== i;
                })),
                  document.removeEventListener("wheel", s, _),
                  document.removeEventListener("touchmove", s, _),
                  document.removeEventListener("touchstart", d, _);
              }
            );
          }, []);
          var p = e.removeScrollBar,
            m = e.inert;
          return o.createElement(
            o.Fragment,
            null,
            m
              ? o.createElement(i, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      a,
                      " {pointer-events: none;}\n  .allow-interactivity-"
                    )
                    .concat(a, " {pointer-events: all;}\n"),
                })
              : null,
            p ? o.createElement(I.jp, { gapMode: e.gapMode }) : null
          );
        }),
        $ = o.forwardRef(function (e, t) {
          return o.createElement(L, P({}, e, { ref: t, sideCar: K }));
        });
      $.classNames = L.classNames;
      var G = n(78369),
        J = n(71538),
        Q = "Dialog",
        [ee, et] = (0, l.b)(Q),
        [en, er] = ee(Q),
        eo = (e) => {
          let {
              __scopeDialog: t,
              children: n,
              open: r,
              defaultOpen: a,
              onOpenChange: i,
              modal: l = !0,
            } = e,
            c = o.useRef(null),
            d = o.useRef(null),
            [f = !1, p] = (0, s.T)({ prop: r, defaultProp: a, onChange: i });
          return (0, v.jsx)(en, {
            scope: t,
            triggerRef: c,
            contentRef: d,
            contentId: (0, u.M)(),
            titleId: (0, u.M)(),
            descriptionId: (0, u.M)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: o.useCallback(() => p((e) => !e), [p]),
            modal: l,
            children: n,
          });
        };
      eo.displayName = Q;
      var ea = "DialogTrigger",
        ei = o.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = er(ea, n),
            l = (0, i.e)(t, o.triggerRef);
          return (0, v.jsx)(c.WV.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": eO(o.open),
            ...r,
            ref: l,
            onClick: (0, a.M)(e.onClick, o.onOpenToggle),
          });
        });
      ei.displayName = ea;
      var el = "DialogPortal",
        [eu, es] = ee(el, { forceMount: void 0 }),
        ec = (e) => {
          let {
              __scopeDialog: t,
              forceMount: n,
              children: r,
              container: a,
            } = e,
            i = er(el, t);
          return (0, v.jsx)(eu, {
            scope: t,
            forceMount: n,
            children: o.Children.map(r, (e) =>
              (0, v.jsx)(R, {
                present: n || i.open,
                children: (0, v.jsx)(C, {
                  asChild: !0,
                  container: a,
                  children: e,
                }),
              })
            ),
          });
        };
      ec.displayName = el;
      var ed = "DialogOverlay",
        ef = o.forwardRef((e, t) => {
          let n = es(ed, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            a = er(ed, e.__scopeDialog);
          return a.modal
            ? (0, v.jsx)(R, {
                present: r || a.open,
                children: (0, v.jsx)(ev, { ...o, ref: t }),
              })
            : null;
        });
      ef.displayName = ed;
      var ev = o.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = er(ed, n);
          return (0, v.jsx)($, {
            as: J.g7,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, v.jsx)(c.WV.div, {
              "data-state": eO(o.open),
              ...r,
              ref: t,
              style: { pointerEvents: "auto", ...r.style },
            }),
          });
        }),
        ep = "DialogContent",
        em = o.forwardRef((e, t) => {
          let n = es(ep, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            a = er(ep, e.__scopeDialog);
          return (0, v.jsx)(R, {
            present: r || a.open,
            children: a.modal
              ? (0, v.jsx)(eh, { ...o, ref: t })
              : (0, v.jsx)(eg, { ...o, ref: t }),
          });
        });
      em.displayName = ep;
      var eh = o.forwardRef((e, t) => {
          let n = er(ep, e.__scopeDialog),
            r = o.useRef(null),
            l = (0, i.e)(t, n.contentRef, r);
          return (
            o.useEffect(() => {
              let e = r.current;
              if (e) return (0, G.Ry)(e);
            }, []),
            (0, v.jsx)(ey, {
              ...e,
              ref: l,
              trapFocus: n.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, a.M)(e.onCloseAutoFocus, (e) => {
                var t;
                e.preventDefault(),
                  null === (t = n.triggerRef.current) ||
                    void 0 === t ||
                    t.focus();
              }),
              onPointerDownOutside: (0, a.M)(e.onPointerDownOutside, (e) => {
                let t = e.detail.originalEvent,
                  n = 0 === t.button && !0 === t.ctrlKey;
                (2 === t.button || n) && e.preventDefault();
              }),
              onFocusOutside: (0, a.M)(e.onFocusOutside, (e) =>
                e.preventDefault()
              ),
            })
          );
        }),
        eg = o.forwardRef((e, t) => {
          let n = er(ep, e.__scopeDialog),
            r = o.useRef(!1),
            a = o.useRef(!1);
          return (0, v.jsx)(ey, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              var o, i;
              null === (o = e.onCloseAutoFocus) || void 0 === o || o.call(e, t),
                t.defaultPrevented ||
                  (r.current ||
                    null === (i = n.triggerRef.current) ||
                    void 0 === i ||
                    i.focus(),
                  t.preventDefault()),
                (r.current = !1),
                (a.current = !1);
            },
            onInteractOutside: (t) => {
              var o, i;
              null === (o = e.onInteractOutside) ||
                void 0 === o ||
                o.call(e, t),
                t.defaultPrevented ||
                  ((r.current = !0),
                  "pointerdown" !== t.detail.originalEvent.type ||
                    (a.current = !0));
              let l = t.target;
              (null === (i = n.triggerRef.current) || void 0 === i
                ? void 0
                : i.contains(l)) && t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  a.current &&
                  t.preventDefault();
            },
          });
        }),
        ey = o.forwardRef((e, t) => {
          let {
              __scopeDialog: n,
              trapFocus: r,
              onOpenAutoFocus: a,
              onCloseAutoFocus: l,
              ...u
            } = e,
            s = er(ep, n),
            c = o.useRef(null),
            d = (0, i.e)(t, c);
          return (
            o.useEffect(() => {
              var e, t;
              let n = document.querySelectorAll("[data-radix-focus-guard]");
              return (
                document.body.insertAdjacentElement(
                  "afterbegin",
                  null !== (e = n[0]) && void 0 !== e ? e : D()
                ),
                document.body.insertAdjacentElement(
                  "beforeend",
                  null !== (t = n[1]) && void 0 !== t ? t : D()
                ),
                O++,
                () => {
                  1 === O &&
                    document
                      .querySelectorAll("[data-radix-focus-guard]")
                      .forEach((e) => e.remove()),
                    O--;
                }
              );
            }, []),
            (0, v.jsxs)(v.Fragment, {
              children: [
                (0, v.jsx)(b.M, {
                  asChild: !0,
                  loop: !0,
                  trapped: r,
                  onMountAutoFocus: a,
                  onUnmountAutoFocus: l,
                  children: (0, v.jsx)(h, {
                    role: "dialog",
                    id: s.contentId,
                    "aria-describedby": s.descriptionId,
                    "aria-labelledby": s.titleId,
                    "data-state": eO(s.open),
                    ...u,
                    ref: d,
                    onDismiss: () => s.onOpenChange(!1),
                  }),
                }),
                (0, v.jsxs)(v.Fragment, {
                  children: [
                    (0, v.jsx)(ej, { titleId: s.titleId }),
                    (0, v.jsx)(eM, {
                      contentRef: c,
                      descriptionId: s.descriptionId,
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        eb = "DialogTitle",
        eE = o.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = er(eb, n);
          return (0, v.jsx)(c.WV.h2, { id: o.titleId, ...r, ref: t });
        });
      eE.displayName = eb;
      var ew = "DialogDescription",
        eC = o.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = er(ew, n);
          return (0, v.jsx)(c.WV.p, { id: o.descriptionId, ...r, ref: t });
        });
      eC.displayName = ew;
      var eR = "DialogClose",
        eN = o.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = er(eR, n);
          return (0, v.jsx)(c.WV.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: (0, a.M)(e.onClick, () => o.onOpenChange(!1)),
          });
        });
      function eO(e) {
        return e ? "open" : "closed";
      }
      eN.displayName = eR;
      var eD = "DialogTitleWarning",
        [eP, ex] = (0, l.k)(eD, {
          contentName: ep,
          titleName: eb,
          docsSlug: "dialog",
        }),
        ej = (e) => {
          let { titleId: t } = e,
            n = ex(eD),
            r = "`"
              .concat(n.contentName, "` requires a `")
              .concat(
                n.titleName,
                "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `"
              )
              .concat(
                n.titleName,
                "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/"
              )
              .concat(n.docsSlug);
          return (
            o.useEffect(() => {
              t && !document.getElementById(t) && console.error(r);
            }, [r, t]),
            null
          );
        },
        eM = (e) => {
          let { contentRef: t, descriptionId: n } = e,
            r = ex("DialogDescriptionWarning"),
            a =
              "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(
                r.contentName,
                "}."
              );
          return (
            o.useEffect(() => {
              var e;
              let r =
                null === (e = t.current) || void 0 === e
                  ? void 0
                  : e.getAttribute("aria-describedby");
              n && r && !document.getElementById(n) && console.warn(a);
            }, [a, t, n]),
            null
          );
        },
        eT = eo,
        eL = ei,
        eS = ec,
        eI = ef,
        ek = em,
        eW = eE,
        eA = eC,
        e_ = eN;
    },
  },
]);
