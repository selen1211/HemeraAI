"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [935],
  {
    66648: function (t, e, i) {
      i.d(e, {
        default: function () {
          return r.a;
        },
      });
      var n = i(55601),
        r = i.n(n);
    },
    87138: function (t, e, i) {
      i.d(e, {
        default: function () {
          return r.a;
        },
      });
      var n = i(231),
        r = i.n(n);
    },
    16463: function (t, e, i) {
      var n = i(71169);
      i.o(n, "usePathname") &&
        i.d(e, {
          usePathname: function () {
            return n.usePathname;
          },
        }),
        i.o(n, "useRouter") &&
          i.d(e, {
            useRouter: function () {
              return n.useRouter;
            },
          }),
        i.o(n, "useSearchParams") &&
          i.d(e, {
            useSearchParams: function () {
              return n.useSearchParams;
            },
          });
    },
    844: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "addLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        i(18157);
      let n = function (t) {
        for (
          var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1;
          n < e;
          n++
        )
          i[n - 1] = arguments[n];
        return t;
      };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    25944: function (t, e, i) {
      function n(t, e, i, n) {
        return !1;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        i(18157),
        ("function" == typeof e.default ||
          ("object" == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    231: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return P;
          },
        });
      let n = i(99920),
        r = i(57437),
        s = n._(i(2265)),
        o = i(98016),
        a = i(18029),
        l = i(41142),
        u = i(43461),
        h = i(844),
        c = i(60291),
        d = i(44467),
        p = i(53106),
        f = i(25944),
        m = i(4897),
        v = i(51507),
        g = new Set();
      function y(t, e, i, n, r, s) {
        if ("undefined" != typeof window && (s || (0, a.isLocalURL)(e))) {
          if (!n.bypassPrefetchedCheck) {
            let r =
              e +
              "%" +
              i +
              "%" +
              (void 0 !== n.locale
                ? n.locale
                : "locale" in t
                ? t.locale
                : void 0);
            if (g.has(r)) return;
            g.add(r);
          }
          (async () => (s ? t.prefetch(e, r) : t.prefetch(e, i, n)))().catch(
            (t) => {}
          );
        }
      }
      function x(t) {
        return "string" == typeof t ? t : (0, l.formatUrl)(t);
      }
      let P = s.default.forwardRef(function (t, e) {
        let i, n;
        let {
          href: l,
          as: g,
          children: P,
          prefetch: b = null,
          passHref: w,
          replace: S,
          shallow: T,
          scroll: A,
          locale: E,
          onClick: R,
          onMouseEnter: C,
          onTouchStart: M,
          legacyBehavior: j = !1,
          ...V
        } = t;
        (i = P),
          j &&
            ("string" == typeof i || "number" == typeof i) &&
            (i = (0, r.jsx)("a", { children: i }));
        let D = s.default.useContext(c.RouterContext),
          k = s.default.useContext(d.AppRouterContext),
          O = null != D ? D : k,
          L = !D,
          F = !1 !== b,
          B = null === b ? v.PrefetchKind.AUTO : v.PrefetchKind.FULL,
          { href: I, as: W } = s.default.useMemo(() => {
            if (!D) {
              let t = x(l);
              return { href: t, as: g ? x(g) : t };
            }
            let [t, e] = (0, o.resolveHref)(D, l, !0);
            return { href: t, as: g ? (0, o.resolveHref)(D, g) : e || t };
          }, [D, l, g]),
          N = s.default.useRef(I),
          U = s.default.useRef(W);
        j && (n = s.default.Children.only(i));
        let _ = j ? n && "object" == typeof n && n.ref : e,
          [$, z, K] = (0, p.useIntersection)({ rootMargin: "200px" }),
          Y = s.default.useCallback(
            (t) => {
              (U.current !== W || N.current !== I) &&
                (K(), (U.current = W), (N.current = I)),
                $(t),
                _ &&
                  ("function" == typeof _
                    ? _(t)
                    : "object" == typeof _ && (_.current = t));
            },
            [W, _, I, K, $]
          );
        s.default.useEffect(() => {
          O && z && F && y(O, I, W, { locale: E }, { kind: B }, L);
        }, [W, I, z, E, F, null == D ? void 0 : D.locale, O, L, B]);
        let H = {
          ref: Y,
          onClick(t) {
            j || "function" != typeof R || R(t),
              j &&
                n.props &&
                "function" == typeof n.props.onClick &&
                n.props.onClick(t),
              O &&
                !t.defaultPrevented &&
                (function (t, e, i, n, r, o, l, u, h) {
                  let { nodeName: c } = t.currentTarget;
                  if (
                    "A" === c.toUpperCase() &&
                    ((function (t) {
                      let e = t.currentTarget.getAttribute("target");
                      return (
                        (e && "_self" !== e) ||
                        t.metaKey ||
                        t.ctrlKey ||
                        t.shiftKey ||
                        t.altKey ||
                        (t.nativeEvent && 2 === t.nativeEvent.which)
                      );
                    })(t) ||
                      (!h && !(0, a.isLocalURL)(i)))
                  )
                    return;
                  t.preventDefault();
                  let d = () => {
                    let t = null == l || l;
                    "beforePopState" in e
                      ? e[r ? "replace" : "push"](i, n, {
                          shallow: o,
                          locale: u,
                          scroll: t,
                        })
                      : e[r ? "replace" : "push"](n || i, { scroll: t });
                  };
                  h ? s.default.startTransition(d) : d();
                })(t, O, I, W, S, T, A, E, L);
          },
          onMouseEnter(t) {
            j || "function" != typeof C || C(t),
              j &&
                n.props &&
                "function" == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(t),
              O &&
                (F || !L) &&
                y(
                  O,
                  I,
                  W,
                  { locale: E, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: B },
                  L
                );
          },
          onTouchStart: function (t) {
            j || "function" != typeof M || M(t),
              j &&
                n.props &&
                "function" == typeof n.props.onTouchStart &&
                n.props.onTouchStart(t),
              O &&
                (F || !L) &&
                y(
                  O,
                  I,
                  W,
                  { locale: E, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: B },
                  L
                );
          },
        };
        if ((0, u.isAbsoluteUrl)(W)) H.href = W;
        else if (!j || w || ("a" === n.type && !("href" in n.props))) {
          let t = void 0 !== E ? E : null == D ? void 0 : D.locale,
            e =
              (null == D ? void 0 : D.isLocaleDomain) &&
              (0, f.getDomainLocale)(
                W,
                t,
                null == D ? void 0 : D.locales,
                null == D ? void 0 : D.domainLocales
              );
          H.href =
            e ||
            (0, m.addBasePath)(
              (0, h.addLocale)(W, t, null == D ? void 0 : D.defaultLocale)
            );
        }
        return j
          ? s.default.cloneElement(n, H)
          : (0, r.jsx)("a", { ...V, ...H, children: i });
      });
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    49189: function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          cancelIdleCallback: function () {
            return n;
          },
          requestIdleCallback: function () {
            return i;
          },
        });
      let i =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (t) {
            let e = Date.now();
            return self.setTimeout(function () {
              t({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - e));
                },
              });
            }, 1);
          },
        n =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (t) {
            return clearTimeout(t);
          };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    98016: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "resolveHref", {
          enumerable: !0,
          get: function () {
            return c;
          },
        });
      let n = i(18323),
        r = i(41142),
        s = i(45519),
        o = i(43461),
        a = i(18157),
        l = i(18029),
        u = i(59195),
        h = i(80020);
      function c(t, e, i) {
        let c;
        let d = "string" == typeof e ? e : (0, r.formatWithValidation)(e),
          p = d.match(/^[a-zA-Z]{1,}:\/\//),
          f = p ? d.slice(p[0].length) : d;
        if ((f.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              d +
              "' passed to next/router in page: '" +
              t.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href."
          );
          let e = (0, o.normalizeRepeatedSlashes)(f);
          d = (p ? p[0] : "") + e;
        }
        if (!(0, l.isLocalURL)(d)) return i ? [d] : d;
        try {
          c = new URL(d.startsWith("#") ? t.asPath : t.pathname, "http://n");
        } catch (t) {
          c = new URL("/", "http://n");
        }
        try {
          let t = new URL(d, c);
          t.pathname = (0, a.normalizePathTrailingSlash)(t.pathname);
          let e = "";
          if ((0, u.isDynamicRoute)(t.pathname) && t.searchParams && i) {
            let i = (0, n.searchParamsToUrlQuery)(t.searchParams),
              { result: o, params: a } = (0, h.interpolateAs)(
                t.pathname,
                t.pathname,
                i
              );
            o &&
              (e = (0, r.formatWithValidation)({
                pathname: o,
                hash: t.hash,
                query: (0, s.omit)(i, a),
              }));
          }
          let o =
            t.origin === c.origin ? t.href.slice(t.origin.length) : t.href;
          return i ? [o, e || o] : o;
        } catch (t) {
          return i ? [d] : d;
        }
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    53106: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "useIntersection", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = i(2265),
        r = i(49189),
        s = "function" == typeof IntersectionObserver,
        o = new Map(),
        a = [];
      function l(t) {
        let { rootRef: e, rootMargin: i, disabled: l } = t,
          u = l || !s,
          [h, c] = (0, n.useState)(!1),
          d = (0, n.useRef)(null),
          p = (0, n.useCallback)((t) => {
            d.current = t;
          }, []);
        return (
          (0, n.useEffect)(() => {
            if (s) {
              if (u || h) return;
              let t = d.current;
              if (t && t.tagName)
                return (function (t, e, i) {
                  let {
                    id: n,
                    observer: r,
                    elements: s,
                  } = (function (t) {
                    let e;
                    let i = {
                        root: t.root || null,
                        margin: t.rootMargin || "",
                      },
                      n = a.find(
                        (t) => t.root === i.root && t.margin === i.margin
                      );
                    if (n && (e = o.get(n))) return e;
                    let r = new Map();
                    return (
                      (e = {
                        id: i,
                        observer: new IntersectionObserver((t) => {
                          t.forEach((t) => {
                            let e = r.get(t.target),
                              i = t.isIntersecting || t.intersectionRatio > 0;
                            e && i && e(i);
                          });
                        }, t),
                        elements: r,
                      }),
                      a.push(i),
                      o.set(i, e),
                      e
                    );
                  })(i);
                  return (
                    s.set(t, e),
                    r.observe(t),
                    function () {
                      if ((s.delete(t), r.unobserve(t), 0 === s.size)) {
                        r.disconnect(), o.delete(n);
                        let t = a.findIndex(
                          (t) => t.root === n.root && t.margin === n.margin
                        );
                        t > -1 && a.splice(t, 1);
                      }
                    }
                  );
                })(t, (t) => t && c(t), {
                  root: null == e ? void 0 : e.current,
                  rootMargin: i,
                });
            } else if (!h) {
              let t = (0, r.requestIdleCallback)(() => c(!0));
              return () => (0, r.cancelIdleCallback)(t);
            }
          }, [u, i, e, h, d.current]),
          [
            p,
            h,
            (0, n.useCallback)(() => {
              c(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    81943: function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "escapeStringRegexp", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let i = /[|\\{}()[\]^$+*?.-]/,
        n = /[|\\{}()[\]^$+*?.-]/g;
      function r(t) {
        return i.test(t) ? t.replace(n, "\\$&") : t;
      }
    },
    55601: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return a;
          },
        });
      let n = i(99920),
        r = i(80497),
        s = i(38173),
        o = n._(i(21241));
      function a(t) {
        let { props: e } = (0, r.getImgProps)(t, {
          defaultLoader: o.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [t, i] of Object.entries(e)) void 0 === i && delete e[t];
        return { props: e };
      }
      let l = s.Image;
    },
    41142: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          formatUrl: function () {
            return s;
          },
          formatWithValidation: function () {
            return a;
          },
          urlObjectKeys: function () {
            return o;
          },
        });
      let n = i(41452)._(i(18323)),
        r = /https?|ftp|gopher|file/;
      function s(t) {
        let { auth: e, hostname: i } = t,
          s = t.protocol || "",
          o = t.pathname || "",
          a = t.hash || "",
          l = t.query || "",
          u = !1;
        (e = e ? encodeURIComponent(e).replace(/%3A/i, ":") + "@" : ""),
          t.host
            ? (u = e + t.host)
            : i &&
              ((u = e + (~i.indexOf(":") ? "[" + i + "]" : i)),
              t.port && (u += ":" + t.port)),
          l &&
            "object" == typeof l &&
            (l = String(n.urlQueryToSearchParams(l)));
        let h = t.search || (l && "?" + l) || "";
        return (
          s && !s.endsWith(":") && (s += ":"),
          t.slashes || ((!s || r.test(s)) && !1 !== u)
            ? ((u = "//" + (u || "")), o && "/" !== o[0] && (o = "/" + o))
            : u || (u = ""),
          a && "#" !== a[0] && (a = "#" + a),
          h && "?" !== h[0] && (h = "?" + h),
          "" +
            s +
            u +
            (o = o.replace(/[?#]/g, encodeURIComponent)) +
            (h = h.replace("#", "%23")) +
            a
        );
      }
      let o = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function a(t) {
        return s(t);
      }
    },
    59195: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          getSortedRoutes: function () {
            return n.getSortedRoutes;
          },
          isDynamicRoute: function () {
            return r.isDynamicRoute;
          },
        });
      let n = i(49089),
        r = i(28083);
    },
    80020: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "interpolateAs", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = i(41533),
        r = i(63169);
      function s(t, e, i) {
        let s = "",
          o = (0, r.getRouteRegex)(t),
          a = o.groups,
          l = (e !== t ? (0, n.getRouteMatcher)(o)(e) : "") || i;
        s = t;
        let u = Object.keys(a);
        return (
          u.every((t) => {
            let e = l[t] || "",
              { repeat: i, optional: n } = a[t],
              r = "[" + (i ? "..." : "") + t + "]";
            return (
              n && (r = (e ? "" : "/") + "[" + r + "]"),
              i && !Array.isArray(e) && (e = [e]),
              (n || t in l) &&
                (s =
                  s.replace(
                    r,
                    i
                      ? e.map((t) => encodeURIComponent(t)).join("/")
                      : encodeURIComponent(e)
                  ) || "/")
            );
          }) || (s = ""),
          { params: u, result: s }
        );
      }
    },
    28083: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "isDynamicRoute", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = i(82269),
        r = /\/\[[^/]+?\](?=\/|$)/;
      function s(t) {
        return (
          (0, n.isInterceptionRouteAppPath)(t) &&
            (t = (0, n.extractInterceptionRouteInformation)(
              t
            ).interceptedRoute),
          r.test(t)
        );
      }
    },
    18029: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = i(43461),
        r = i(49404);
      function s(t) {
        if (!(0, n.isAbsoluteUrl)(t)) return !0;
        try {
          let e = (0, n.getLocationOrigin)(),
            i = new URL(t, e);
          return i.origin === e && (0, r.hasBasePath)(i.pathname);
        } catch (t) {
          return !1;
        }
      }
    },
    45519: function (t, e) {
      function i(t, e) {
        let i = {};
        return (
          Object.keys(t).forEach((n) => {
            e.includes(n) || (i[n] = t[n]);
          }),
          i
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "omit", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
    },
    18323: function (t, e) {
      function i(t) {
        let e = {};
        return (
          t.forEach((t, i) => {
            void 0 === e[i]
              ? (e[i] = t)
              : Array.isArray(e[i])
              ? e[i].push(t)
              : (e[i] = [e[i], t]);
          }),
          e
        );
      }
      function n(t) {
        return "string" != typeof t &&
          ("number" != typeof t || isNaN(t)) &&
          "boolean" != typeof t
          ? ""
          : String(t);
      }
      function r(t) {
        let e = new URLSearchParams();
        return (
          Object.entries(t).forEach((t) => {
            let [i, r] = t;
            Array.isArray(r)
              ? r.forEach((t) => e.append(i, n(t)))
              : e.set(i, n(r));
          }),
          e
        );
      }
      function s(t) {
        for (
          var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1;
          n < e;
          n++
        )
          i[n - 1] = arguments[n];
        return (
          i.forEach((e) => {
            Array.from(e.keys()).forEach((e) => t.delete(e)),
              e.forEach((e, i) => t.append(i, e));
          }),
          t
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          assign: function () {
            return s;
          },
          searchParamsToUrlQuery: function () {
            return i;
          },
          urlQueryToSearchParams: function () {
            return r;
          },
        });
    },
    41533: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getRouteMatcher", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let n = i(43461);
      function r(t) {
        let { re: e, groups: i } = t;
        return (t) => {
          let r = e.exec(t);
          if (!r) return !1;
          let s = (t) => {
              try {
                return decodeURIComponent(t);
              } catch (t) {
                throw new n.DecodeError("failed to decode param");
              }
            },
            o = {};
          return (
            Object.keys(i).forEach((t) => {
              let e = i[t],
                n = r[e.pos];
              void 0 !== n &&
                (o[t] = ~n.indexOf("/")
                  ? n.split("/").map((t) => s(t))
                  : e.repeat
                  ? [s(n)]
                  : s(n));
            }),
            o
          );
        };
      }
    },
    63169: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          getNamedMiddlewareRegex: function () {
            return d;
          },
          getNamedRouteRegex: function () {
            return c;
          },
          getRouteRegex: function () {
            return l;
          },
        });
      let n = i(82269),
        r = i(81943),
        s = i(67741);
      function o(t) {
        let e = t.startsWith("[") && t.endsWith("]");
        e && (t = t.slice(1, -1));
        let i = t.startsWith("...");
        return i && (t = t.slice(3)), { key: t, repeat: i, optional: e };
      }
      function a(t) {
        let e = (0, s.removeTrailingSlash)(t).slice(1).split("/"),
          i = {},
          a = 1;
        return {
          parameterizedRoute: e
            .map((t) => {
              let e = n.INTERCEPTION_ROUTE_MARKERS.find((e) => t.startsWith(e)),
                s = t.match(/\[((?:\[.*\])|.+)\]/);
              if (e && s) {
                let { key: t, optional: n, repeat: l } = o(s[1]);
                return (
                  (i[t] = { pos: a++, repeat: l, optional: n }),
                  "/" + (0, r.escapeStringRegexp)(e) + "([^/]+?)"
                );
              }
              if (!s) return "/" + (0, r.escapeStringRegexp)(t);
              {
                let { key: t, repeat: e, optional: n } = o(s[1]);
                return (
                  (i[t] = { pos: a++, repeat: e, optional: n }),
                  e ? (n ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)"
                );
              }
            })
            .join(""),
          groups: i,
        };
      }
      function l(t) {
        let { parameterizedRoute: e, groups: i } = a(t);
        return { re: RegExp("^" + e + "(?:/)?$"), groups: i };
      }
      function u(t) {
        let {
            interceptionMarker: e,
            getSafeRouteKey: i,
            segment: n,
            routeKeys: s,
            keyPrefix: a,
          } = t,
          { key: l, optional: u, repeat: h } = o(n),
          c = l.replace(/\W/g, "");
        a && (c = "" + a + c);
        let d = !1;
        (0 === c.length || c.length > 30) && (d = !0),
          isNaN(parseInt(c.slice(0, 1))) || (d = !0),
          d && (c = i()),
          a ? (s[c] = "" + a + l) : (s[c] = l);
        let p = e ? (0, r.escapeStringRegexp)(e) : "";
        return h
          ? u
            ? "(?:/" + p + "(?<" + c + ">.+?))?"
            : "/" + p + "(?<" + c + ">.+?)"
          : "/" + p + "(?<" + c + ">[^/]+?)";
      }
      function h(t, e) {
        let i;
        let o = (0, s.removeTrailingSlash)(t).slice(1).split("/"),
          a =
            ((i = 0),
            () => {
              let t = "",
                e = ++i;
              for (; e > 0; )
                (t += String.fromCharCode(97 + ((e - 1) % 26))),
                  (e = Math.floor((e - 1) / 26));
              return t;
            }),
          l = {};
        return {
          namedParameterizedRoute: o
            .map((t) => {
              let i = n.INTERCEPTION_ROUTE_MARKERS.some((e) => t.startsWith(e)),
                s = t.match(/\[((?:\[.*\])|.+)\]/);
              if (i && s) {
                let [i] = t.split(s[0]);
                return u({
                  getSafeRouteKey: a,
                  interceptionMarker: i,
                  segment: s[1],
                  routeKeys: l,
                  keyPrefix: e ? "nxtI" : void 0,
                });
              }
              return s
                ? u({
                    getSafeRouteKey: a,
                    segment: s[1],
                    routeKeys: l,
                    keyPrefix: e ? "nxtP" : void 0,
                  })
                : "/" + (0, r.escapeStringRegexp)(t);
            })
            .join(""),
          routeKeys: l,
        };
      }
      function c(t, e) {
        let i = h(t, e);
        return {
          ...l(t),
          namedRegex: "^" + i.namedParameterizedRoute + "(?:/)?$",
          routeKeys: i.routeKeys,
        };
      }
      function d(t, e) {
        let { parameterizedRoute: i } = a(t),
          { catchAll: n = !0 } = e;
        if ("/" === i) return { namedRegex: "^/" + (n ? ".*" : "") + "$" };
        let { namedParameterizedRoute: r } = h(t, !1);
        return { namedRegex: "^" + r + (n ? "(?:(/.*)?)" : "") + "$" };
      }
    },
    49089: function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getSortedRoutes", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      class i {
        insert(t) {
          this._insert(t.split("/").filter(Boolean), [], !1);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(t) {
          void 0 === t && (t = "/");
          let e = [...this.children.keys()].sort();
          null !== this.slugName && e.splice(e.indexOf("[]"), 1),
            null !== this.restSlugName && e.splice(e.indexOf("[...]"), 1),
            null !== this.optionalRestSlugName &&
              e.splice(e.indexOf("[[...]]"), 1);
          let i = e
            .map((e) => this.children.get(e)._smoosh("" + t + e + "/"))
            .reduce((t, e) => [...t, ...e], []);
          if (
            (null !== this.slugName &&
              i.push(
                ...this.children
                  .get("[]")
                  ._smoosh(t + "[" + this.slugName + "]/")
              ),
            !this.placeholder)
          ) {
            let e = "/" === t ? "/" : t.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  e +
                  '" and "' +
                  e +
                  "[[..." +
                  this.optionalRestSlugName +
                  ']]").'
              );
            i.unshift(e);
          }
          return (
            null !== this.restSlugName &&
              i.push(
                ...this.children
                  .get("[...]")
                  ._smoosh(t + "[..." + this.restSlugName + "]/")
              ),
            null !== this.optionalRestSlugName &&
              i.push(
                ...this.children
                  .get("[[...]]")
                  ._smoosh(t + "[[..." + this.optionalRestSlugName + "]]/")
              ),
            i
          );
        }
        _insert(t, e, n) {
          if (0 === t.length) {
            this.placeholder = !1;
            return;
          }
          if (n) throw Error("Catch-all must be the last part of the URL.");
          let r = t[0];
          if (r.startsWith("[") && r.endsWith("]")) {
            let i = r.slice(1, -1),
              o = !1;
            if (
              (i.startsWith("[") &&
                i.endsWith("]") &&
                ((i = i.slice(1, -1)), (o = !0)),
              i.startsWith("...") && ((i = i.substring(3)), (n = !0)),
              i.startsWith("[") || i.endsWith("]"))
            )
              throw Error(
                "Segment names may not start or end with extra brackets ('" +
                  i +
                  "')."
              );
            if (i.startsWith("."))
              throw Error(
                "Segment names may not start with erroneous periods ('" +
                  i +
                  "')."
              );
            function s(t, i) {
              if (null !== t && t !== i)
                throw Error(
                  "You cannot use different slug names for the same dynamic path ('" +
                    t +
                    "' !== '" +
                    i +
                    "')."
                );
              e.forEach((t) => {
                if (t === i)
                  throw Error(
                    'You cannot have the same slug name "' +
                      i +
                      '" repeat within a single dynamic path'
                  );
                if (t.replace(/\W/g, "") === r.replace(/\W/g, ""))
                  throw Error(
                    'You cannot have the slug names "' +
                      t +
                      '" and "' +
                      i +
                      '" differ only by non-word symbols within a single dynamic path'
                  );
              }),
                e.push(i);
            }
            if (n) {
              if (o) {
                if (null != this.restSlugName)
                  throw Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      t[0] +
                      '" ).'
                  );
                s(this.optionalRestSlugName, i),
                  (this.optionalRestSlugName = i),
                  (r = "[[...]]");
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      t[0] +
                      '").'
                  );
                s(this.restSlugName, i), (this.restSlugName = i), (r = "[...]");
              }
            } else {
              if (o)
                throw Error(
                  'Optional route parameters are not yet supported ("' +
                    t[0] +
                    '").'
                );
              s(this.slugName, i), (this.slugName = i), (r = "[]");
            }
          }
          this.children.has(r) || this.children.set(r, new i()),
            this.children.get(r)._insert(t.slice(1), e, n);
        }
        constructor() {
          (this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null);
        }
      }
      function n(t) {
        let e = new i();
        return t.forEach((t) => e.insert(t)), e.smoosh();
      }
    },
    43461: function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          DecodeError: function () {
            return f;
          },
          MiddlewareNotFoundError: function () {
            return y;
          },
          MissingStaticPage: function () {
            return g;
          },
          NormalizeError: function () {
            return m;
          },
          PageNotFoundError: function () {
            return v;
          },
          SP: function () {
            return d;
          },
          ST: function () {
            return p;
          },
          WEB_VITALS: function () {
            return i;
          },
          execOnce: function () {
            return n;
          },
          getDisplayName: function () {
            return l;
          },
          getLocationOrigin: function () {
            return o;
          },
          getURL: function () {
            return a;
          },
          isAbsoluteUrl: function () {
            return s;
          },
          isResSent: function () {
            return u;
          },
          loadGetInitialProps: function () {
            return c;
          },
          normalizeRepeatedSlashes: function () {
            return h;
          },
          stringifyError: function () {
            return x;
          },
        });
      let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function n(t) {
        let e,
          i = !1;
        return function () {
          for (var n = arguments.length, r = Array(n), s = 0; s < n; s++)
            r[s] = arguments[s];
          return i || ((i = !0), (e = t(...r))), e;
        };
      }
      let r = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        s = (t) => r.test(t);
      function o() {
        let { protocol: t, hostname: e, port: i } = window.location;
        return t + "//" + e + (i ? ":" + i : "");
      }
      function a() {
        let { href: t } = window.location,
          e = o();
        return t.substring(e.length);
      }
      function l(t) {
        return "string" == typeof t ? t : t.displayName || t.name || "Unknown";
      }
      function u(t) {
        return t.finished || t.headersSent;
      }
      function h(t) {
        let e = t.split("?");
        return (
          e[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (e[1] ? "?" + e.slice(1).join("?") : "")
        );
      }
      async function c(t, e) {
        let i = e.res || (e.ctx && e.ctx.res);
        if (!t.getInitialProps)
          return e.ctx && e.Component
            ? { pageProps: await c(e.Component, e.ctx) }
            : {};
        let n = await t.getInitialProps(e);
        if (i && u(i)) return n;
        if (!n)
          throw Error(
            '"' +
              l(t) +
              '.getInitialProps()" should resolve to an object. But found "' +
              n +
              '" instead.'
          );
        return n;
      }
      let d = "undefined" != typeof performance,
        p =
          d &&
          ["mark", "measure", "getEntriesByName"].every(
            (t) => "function" == typeof performance[t]
          );
      class f extends Error {}
      class m extends Error {}
      class v extends Error {
        constructor(t) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + t);
        }
      }
      class g extends Error {
        constructor(t, e) {
          super(),
            (this.message =
              "Failed to load static file for page: " + t + " " + e);
        }
      }
      class y extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      }
      function x(t) {
        return JSON.stringify({ message: t.message, stack: t.stack });
      }
    },
    2685: function (t, e, i) {
      var n = i(2265),
        r =
          "function" == typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
                );
              },
        s = n.useState,
        o = n.useEffect,
        a = n.useLayoutEffect,
        l = n.useDebugValue;
      function u(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
          var i = e();
          return !r(t, i);
        } catch (t) {
          return !0;
        }
      }
      var h =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (t, e) {
              return e();
            }
          : function (t, e) {
              var i = e(),
                n = s({ inst: { value: i, getSnapshot: e } }),
                r = n[0].inst,
                h = n[1];
              return (
                a(
                  function () {
                    (r.value = i), (r.getSnapshot = e), u(r) && h({ inst: r });
                  },
                  [t, i, e]
                ),
                o(
                  function () {
                    return (
                      u(r) && h({ inst: r }),
                      t(function () {
                        u(r) && h({ inst: r });
                      })
                    );
                  },
                  [t]
                ),
                l(i),
                i
              );
            };
      e.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : h;
    },
    44959: function (t, e, i) {
      var n = i(2265),
        r = i(14239),
        s =
          "function" == typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
                );
              },
        o = r.useSyncExternalStore,
        a = n.useRef,
        l = n.useEffect,
        u = n.useMemo,
        h = n.useDebugValue;
      e.useSyncExternalStoreWithSelector = function (t, e, i, n, r) {
        var c = a(null);
        if (null === c.current) {
          var d = { hasValue: !1, value: null };
          c.current = d;
        } else d = c.current;
        var p = o(
          t,
          (c = u(
            function () {
              function t(t) {
                if (!l) {
                  if (
                    ((l = !0), (o = t), (t = n(t)), void 0 !== r && d.hasValue)
                  ) {
                    var e = d.value;
                    if (r(e, t)) return (a = e);
                  }
                  return (a = t);
                }
                if (((e = a), s(o, t))) return e;
                var i = n(t);
                return void 0 !== r && r(e, i) ? e : ((o = t), (a = i));
              }
              var o,
                a,
                l = !1,
                u = void 0 === i ? null : i;
              return [
                function () {
                  return t(e());
                },
                null === u
                  ? void 0
                  : function () {
                      return t(u());
                    },
              ];
            },
            [e, i, n, r]
          ))[0],
          c[1]
        );
        return (
          l(
            function () {
              (d.hasValue = !0), (d.value = p);
            },
            [p]
          ),
          h(p),
          p
        );
      };
    },
    14239: function (t, e, i) {
      t.exports = i(2685);
    },
    81290: function (t, e, i) {
      t.exports = i(44959);
    },
    34446: function (t, e, i) {
      i.d(e, {
        M: function () {
          return g;
        },
      });
      var n = i(57437),
        r = i(2265),
        s = i(67797),
        o = i(30458),
        a = i(29791);
      class l extends r.Component {
        getSnapshotBeforeUpdate(t) {
          let e = this.props.childRef.current;
          if (e && t.isPresent && !this.props.isPresent) {
            let t = this.props.sizeRef.current;
            (t.height = e.offsetHeight || 0),
              (t.width = e.offsetWidth || 0),
              (t.top = e.offsetTop),
              (t.left = e.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function u(t) {
        let { children: e, isPresent: i } = t,
          s = (0, r.useId)(),
          o = (0, r.useRef)(null),
          u = (0, r.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: h } = (0, r.useContext)(a._);
        return (
          (0, r.useInsertionEffect)(() => {
            let { width: t, height: e, top: n, left: r } = u.current;
            if (i || !o.current || !t || !e) return;
            o.current.dataset.motionPopId = s;
            let a = document.createElement("style");
            return (
              h && (a.nonce = h),
              document.head.appendChild(a),
              a.sheet &&
                a.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      s,
                      '"] {\n            position: absolute !important;\n            width: '
                    )
                    .concat(t, "px !important;\n            height: ")
                    .concat(e, "px !important;\n            top: ")
                    .concat(n, "px !important;\n            left: ")
                    .concat(r, "px !important;\n          }\n        ")
                ),
              () => {
                document.head.removeChild(a);
              }
            );
          }, [i]),
          (0, n.jsx)(l, {
            isPresent: i,
            childRef: o,
            sizeRef: u,
            children: r.cloneElement(e, { ref: o }),
          })
        );
      }
      let h = (t) => {
        let {
            children: e,
            initial: i,
            isPresent: a,
            onExitComplete: l,
            custom: h,
            presenceAffectsLayout: d,
            mode: p,
          } = t,
          f = (0, o.h)(c),
          m = (0, r.useId)(),
          v = (0, r.useMemo)(
            () => ({
              id: m,
              initial: i,
              isPresent: a,
              custom: h,
              onExitComplete: (t) => {
                for (let e of (f.set(t, !0), f.values())) if (!e) return;
                l && l();
              },
              register: (t) => (f.set(t, !1), () => f.delete(t)),
            }),
            d ? [Math.random()] : [a]
          );
        return (
          (0, r.useMemo)(() => {
            f.forEach((t, e) => f.set(e, !1));
          }, [a]),
          r.useEffect(() => {
            a || f.size || !l || l();
          }, [a]),
          "popLayout" === p &&
            (e = (0, n.jsx)(u, { isPresent: a, children: e })),
          (0, n.jsx)(s.O.Provider, { value: v, children: e })
        );
      };
      function c() {
        return new Map();
      }
      var d = i(5050),
        p = i(19047);
      let f = (t) => t.key || "";
      function m(t) {
        let e = [];
        return (
          r.Children.forEach(t, (t) => {
            (0, r.isValidElement)(t) && e.push(t);
          }),
          e
        );
      }
      var v = i(9033);
      let g = (t) => {
        let {
          children: e,
          exitBeforeEnter: i,
          custom: s,
          initial: a = !0,
          onExitComplete: l,
          presenceAffectsLayout: u = !0,
          mode: c = "sync",
        } = t;
        (0, p.k)(!i, "Replace exitBeforeEnter with mode='wait'");
        let g = (0, r.useMemo)(() => m(e), [e]),
          y = g.map(f),
          x = (0, r.useRef)(!0),
          P = (0, r.useRef)(g),
          b = (0, o.h)(() => new Map()),
          [w, S] = (0, r.useState)(g),
          [T, A] = (0, r.useState)(g);
        (0, v.L)(() => {
          (x.current = !1), (P.current = g);
          for (let t = 0; t < T.length; t++) {
            let e = f(T[t]);
            y.includes(e) ? b.delete(e) : !0 !== b.get(e) && b.set(e, !1);
          }
        }, [T, y.length, y.join("-")]);
        let E = [];
        if (g !== w) {
          let t = [...g];
          for (let e = 0; e < T.length; e++) {
            let i = T[e],
              n = f(i);
            y.includes(n) || (t.splice(e, 0, i), E.push(i));
          }
          "wait" === c && E.length && (t = E), A(m(t)), S(g);
          return;
        }
        let { forceRender: R } = (0, r.useContext)(d.p);
        return (0, n.jsx)(n.Fragment, {
          children: T.map((t) => {
            let e = f(t),
              i = g === T || y.includes(e);
            return (0, n.jsx)(
              h,
              {
                isPresent: i,
                initial: (!x.current || !!a) && void 0,
                custom: i ? void 0 : s,
                presenceAffectsLayout: u,
                mode: c,
                onExitComplete: i
                  ? void 0
                  : () => {
                      if (!b.has(e)) return;
                      b.set(e, !0);
                      let t = !0;
                      b.forEach((e) => {
                        e || (t = !1);
                      }),
                        t && (null == R || R(), A(P.current), l && l());
                    },
                children: t,
              },
              e
            );
          }),
        });
      };
    },
    5050: function (t, e, i) {
      i.d(e, {
        p: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)({});
    },
    29791: function (t, e, i) {
      i.d(e, {
        _: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    67797: function (t, e, i) {
      i.d(e, {
        O: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)(null);
    },
    2981: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return s;
        },
      });
      var n = i(565);
      let r = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function s(t, e) {
        let i = !1,
          s = !0,
          o = { delta: 0, timestamp: 0, isProcessing: !1 },
          a = () => (i = !0),
          l = r.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new Set(),
                  i = new Set(),
                  n = !1,
                  r = !1,
                  s = new WeakSet(),
                  o = { delta: 0, timestamp: 0, isProcessing: !1 };
                function a(e) {
                  s.has(e) && (l.schedule(e), t()), e(o);
                }
                let l = {
                  schedule: (t, r = !1, o = !1) => {
                    let a = o && n ? e : i;
                    return r && s.add(t), a.has(t) || a.add(t), t;
                  },
                  cancel: (t) => {
                    i.delete(t), s.delete(t);
                  },
                  process: (t) => {
                    if (((o = t), n)) {
                      r = !0;
                      return;
                    }
                    (n = !0),
                      ([e, i] = [i, e]),
                      i.clear(),
                      e.forEach(a),
                      (n = !1),
                      r && ((r = !1), l.process(t));
                  },
                };
                return l;
              })(a)),
              t
            ),
            {}
          ),
          {
            read: u,
            resolveKeyframes: h,
            update: c,
            preRender: d,
            render: p,
            postRender: f,
          } = l,
          m = () => {
            let r = n.c.useManualTiming ? o.timestamp : performance.now();
            (i = !1),
              (o.delta = s
                ? 1e3 / 60
                : Math.max(Math.min(r - o.timestamp, 40), 1)),
              (o.timestamp = r),
              (o.isProcessing = !0),
              u.process(o),
              h.process(o),
              c.process(o),
              d.process(o),
              p.process(o),
              f.process(o),
              (o.isProcessing = !1),
              i && e && ((s = !1), t(m));
          },
          v = () => {
            (i = !0), (s = !0), o.isProcessing || t(m);
          };
        return {
          schedule: r.reduce((t, e) => {
            let n = l[e];
            return (
              (t[e] = (t, e = !1, r = !1) => (i || v(), n.schedule(t, e, r))), t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < r.length; e++) l[r[e]].cancel(t);
          },
          state: o,
          steps: l,
        };
      }
    },
    86219: function (t, e, i) {
      i.d(e, {
        Pn: function () {
          return s;
        },
        S6: function () {
          return a;
        },
        Wi: function () {
          return r;
        },
        frameData: function () {
          return o;
        },
      });
      var n = i(69276);
      let {
        schedule: r,
        cancel: s,
        state: o,
        steps: a,
      } = (0, i(2981).Z)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : n.Z,
        !0
      );
    },
    59993: function (t, e, i) {
      let n;
      i.d(e, {
        X: function () {
          return a;
        },
      });
      var r = i(565),
        s = i(86219);
      function o() {
        n = void 0;
      }
      let a = {
        now: () => (
          void 0 === n &&
            a.set(
              s.frameData.isProcessing || r.c.useManualTiming
                ? s.frameData.timestamp
                : performance.now()
            ),
          n
        ),
        set: (t) => {
          (n = t), queueMicrotask(o);
        },
      };
    },
    75775: function (t, e, i) {
      function n(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      i.d(e, {
        E: function () {
          return rb;
        },
      });
      let r = (t) => Array.isArray(t);
      function s(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function o(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function a(t) {
        let e = [{}, {}];
        return (
          null == t ||
            t.values.forEach((t, i) => {
              (e[0][i] = t.get()), (e[1][i] = t.getVelocity());
            }),
          e
        );
      }
      function l(t, e, i, n) {
        if ("function" == typeof e) {
          let [r, s] = a(n);
          e = e(void 0 !== i ? i : t.custom, r, s);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [r, s] = a(n);
          e = e(void 0 !== i ? i : t.custom, r, s);
        }
        return e;
      }
      function u(t, e, i) {
        let n = t.getProps();
        return l(n, e, void 0 !== i ? i : n.custom, t);
      }
      let h = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        c = ["initial", ...h],
        d = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        p = new Set(d),
        f = (t) => 1e3 * t,
        m = (t) => t / 1e3,
        v = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        g = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        y = { type: "keyframes", duration: 0.8 },
        x = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        P = (t, { keyframes: e }) =>
          e.length > 2
            ? y
            : p.has(t)
            ? t.startsWith("scale")
              ? g(e[1])
              : v
            : x;
      function b(t, e) {
        return t[e] || t.default || t;
      }
      var w,
        S,
        T,
        A = i(565);
      let E = { current: !1 },
        R = (t) => null !== t;
      function C(t, { repeat: e, repeatType: i = "loop" }, n) {
        let r = t.filter(R),
          s = e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
        return s && void 0 !== n ? n : r[s];
      }
      var M = i(86219);
      let j = (t) => /^0[^.\s]+$/u.test(t);
      var V = i(19047);
      let D = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
      var k = i(61534);
      let O = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var L = i(40783),
        F = i(75480);
      let B = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        I = (t) => t === L.Rx || t === F.px,
        W = (t, e) => parseFloat(t.split(", ")[e]),
        N =
          (t, e) =>
          (i, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let r = n.match(/^matrix3d\((.+)\)$/u);
            if (r) return W(r[1], e);
            {
              let e = n.match(/^matrix\((.+)\)$/u);
              return e ? W(e[1], t) : 0;
            }
          },
        U = new Set(["x", "y", "z"]),
        _ = d.filter((t) => !U.has(t)),
        $ = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: N(4, 13),
          y: N(5, 14),
        };
      ($.translateX = $.x), ($.translateY = $.y);
      let z = (t) => (e) => e.test(t),
        K = [
          L.Rx,
          F.px,
          F.aQ,
          F.RW,
          F.vw,
          F.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        Y = (t) => K.find(z(t)),
        H = new Set(),
        X = !1,
        q = !1;
      function Z() {
        if (q) {
          let t = Array.from(H).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (function (t) {
              let e = [];
              return (
                _.forEach((i) => {
                  let n = t.getValue(i);
                  void 0 !== n &&
                    (e.push([i, n.get()]),
                    n.set(i.startsWith("scale") ? 1 : 0));
                }),
                e
              );
            })(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  var n;
                  null === (n = t.getValue(e)) || void 0 === n || n.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (q = !1), (X = !1), H.forEach((t) => t.complete()), H.clear();
      }
      function G() {
        H.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (q = !0);
        });
      }
      class Q {
        constructor(t, e, i, n, r, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = n),
            (this.element = r),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (H.add(this),
                X || ((X = !0), M.Wi.read(G), M.Wi.resolveKeyframes(Z)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: n,
          } = this;
          for (let r = 0; r < t.length; r++)
            if (null === t[r]) {
              if (0 === r) {
                let r = null == n ? void 0 : n.get(),
                  s = t[t.length - 1];
                if (void 0 !== r) t[0] = r;
                else if (i && e) {
                  let n = i.readValue(e, s);
                  null != n && (t[0] = n);
                }
                void 0 === t[0] && (t[0] = s), n && void 0 === r && n.set(t[0]);
              } else t[r] = t[r - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            H.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), H.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
      var J = i(83646),
        tt = i(47292);
      let te = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function ti(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(tt.KP) || [];
        if (!n) return t;
        let r = i.replace(n, ""),
          s = te.has(e) ? 1 : 0;
        return n !== i && (s *= 100), e + "(" + s + r + ")";
      }
      let tn = /\b([a-z-]*)\(.*?\)/gu,
        tr = {
          ...J.P,
          getAnimatableNone: (t) => {
            let e = t.match(tn);
            return e ? e.map(ti).join(" ") : t;
          },
        };
      var ts = i(50146);
      let to = { ...L.Rx, transform: Math.round },
        ta = {
          borderWidth: F.px,
          borderTopWidth: F.px,
          borderRightWidth: F.px,
          borderBottomWidth: F.px,
          borderLeftWidth: F.px,
          borderRadius: F.px,
          radius: F.px,
          borderTopLeftRadius: F.px,
          borderTopRightRadius: F.px,
          borderBottomRightRadius: F.px,
          borderBottomLeftRadius: F.px,
          width: F.px,
          maxWidth: F.px,
          height: F.px,
          maxHeight: F.px,
          size: F.px,
          top: F.px,
          right: F.px,
          bottom: F.px,
          left: F.px,
          padding: F.px,
          paddingTop: F.px,
          paddingRight: F.px,
          paddingBottom: F.px,
          paddingLeft: F.px,
          margin: F.px,
          marginTop: F.px,
          marginRight: F.px,
          marginBottom: F.px,
          marginLeft: F.px,
          rotate: F.RW,
          rotateX: F.RW,
          rotateY: F.RW,
          rotateZ: F.RW,
          scale: L.bA,
          scaleX: L.bA,
          scaleY: L.bA,
          scaleZ: L.bA,
          skew: F.RW,
          skewX: F.RW,
          skewY: F.RW,
          distance: F.px,
          translateX: F.px,
          translateY: F.px,
          translateZ: F.px,
          x: F.px,
          y: F.px,
          z: F.px,
          perspective: F.px,
          transformPerspective: F.px,
          opacity: L.Fq,
          originX: F.$C,
          originY: F.$C,
          originZ: F.px,
          zIndex: to,
          backgroundPositionX: F.px,
          backgroundPositionY: F.px,
          fillOpacity: L.Fq,
          strokeOpacity: L.Fq,
          numOctaves: to,
        },
        tl = {
          ...ta,
          color: ts.$,
          backgroundColor: ts.$,
          outlineColor: ts.$,
          fill: ts.$,
          stroke: ts.$,
          borderColor: ts.$,
          borderTopColor: ts.$,
          borderRightColor: ts.$,
          borderBottomColor: ts.$,
          borderLeftColor: ts.$,
          filter: tr,
          WebkitFilter: tr,
        },
        tu = (t) => tl[t];
      function th(t, e) {
        let i = tu(t);
        return (
          i !== tr && (i = J.P),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let tc = new Set(["auto", "none", "0"]);
      class td extends Q {
        constructor(t, e, i, n, r) {
          super(t, e, i, n, r, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let n = t[i];
            if ("string" == typeof n && ((n = n.trim()), (0, k.t)(n))) {
              let r = (function t(e, i, n = 1) {
                (0, V.k)(
                  n <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [r, s] = (function (t) {
                  let e = O.exec(t);
                  if (!e) return [,];
                  let [, i, n, r] = e;
                  return [`--${null != i ? i : n}`, r];
                })(e);
                if (!r) return;
                let o = window.getComputedStyle(i).getPropertyValue(r);
                if (o) {
                  let t = o.trim();
                  return D(t) ? parseFloat(t) : t;
                }
                return (0, k.t)(s) ? t(s, i, n + 1) : s;
              })(n, e.current);
              void 0 !== r && (t[i] = r),
                i === t.length - 1 && (this.finalKeyframe = n);
            }
          }
          if ((this.resolveNoneKeyframes(), !B.has(i) || 2 !== t.length))
            return;
          let [n, r] = t,
            s = Y(n),
            o = Y(r);
          if (s !== o) {
            if (I(s) && I(o))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var n;
            ("number" == typeof (n = t[e])
              ? 0 === n
              : null === n || "none" === n || "0" === n || j(n)) && i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let n,
                r = 0;
              for (; r < t.length && !n; ) {
                let e = t[r];
                "string" == typeof e &&
                  !tc.has(e) &&
                  (0, J.V)(e).values.length &&
                  (n = t[r]),
                  r++;
              }
              if (n && i) for (let r of e) t[r] = th(i, n);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = $[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let n = e[e.length - 1];
          void 0 !== n && t.getValue(i, n).jump(n, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: n } = this;
          if (!e || !e.current) return;
          let r = e.getValue(i);
          r && r.jump(this.measuredOrigin, !1);
          let s = n.length - 1,
            o = n[s];
          (n[s] = $[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== o &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = o),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
      function tp(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      var tf = i(69276),
        tm = i(59993);
      let tv = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t &&
            (J.P.test(t) || "0" === t) &&
            !t.startsWith("url("))
        );
      class tg {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: s = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = tm.X.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: n,
              repeatDelay: r,
              repeatType: s,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (G(), Z()),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          (this.resolvedAt = tm.X.now()), (this.hasAttemptedResolve = !0);
          let {
            name: i,
            type: n,
            velocity: r,
            delay: s,
            onComplete: o,
            onUpdate: a,
            isGenerator: l,
          } = this.options;
          if (
            !l &&
            !(function (t, e, i, n) {
              let r = t[0];
              if (null === r) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let s = t[t.length - 1],
                o = tv(r, e),
                a = tv(s, e);
              return (
                (0, V.K)(
                  o === a,
                  `You are trying to animate ${e} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`
                ),
                !!o &&
                  !!a &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    ("spring" === i && n))
              );
            })(t, i, n, r)
          ) {
            if (E.current || !s) {
              null == a || a(C(t, this.options, e)),
                null == o || o(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(t, e);
          !1 !== u &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...u }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
      var ty = i(83476);
      function tx(t, e, i) {
        let n = Math.max(e - 5, 0);
        return (0, ty.R)(i - t(n), e - n);
      }
      var tP = i(51506);
      function tb(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let tw = ["duration", "bounce"],
        tS = ["stiffness", "damping", "mass"];
      function tT(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function tA({ keyframes: t, restDelta: e, restSpeed: i, ...n }) {
        let r;
        let s = t[0],
          o = t[t.length - 1],
          a = { done: !1, value: s },
          {
            stiffness: l,
            damping: u,
            mass: h,
            duration: c,
            velocity: d,
            isResolvedFromDuration: p,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!tT(t, tS) && tT(t, tw)) {
              let i = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: i = 0,
                mass: n = 1,
              }) {
                let r, s;
                (0, V.K)(
                  t <= f(10),
                  "Spring duration must be 10 seconds or less"
                );
                let o = 1 - e;
                (o = (0, tP.u)(0.05, 1, o)),
                  (t = (0, tP.u)(0.01, 10, m(t))),
                  o < 1
                    ? ((r = (e) => {
                        let n = e * o,
                          r = n * t;
                        return 0.001 - ((n - i) / tb(e, o)) * Math.exp(-r);
                      }),
                      (s = (e) => {
                        let n = e * o * t,
                          s = Math.pow(o, 2) * Math.pow(e, 2) * t,
                          a = tb(Math.pow(e, 2), o);
                        return (
                          ((n * i + i - s) *
                            Math.exp(-n) *
                            (-r(e) + 0.001 > 0 ? -1 : 1)) /
                          a
                        );
                      }))
                    : ((r = (e) =>
                        -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                      (s = (e) => t * t * (i - e) * Math.exp(-e * t)));
                let a = (function (t, e, i) {
                  let n = i;
                  for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                  return n;
                })(r, s, 5 / t);
                if (((t = f(t)), isNaN(a)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(a, 2) * n;
                  return {
                    stiffness: e,
                    damping: 2 * o * Math.sqrt(n * e),
                    duration: t,
                  };
                }
              })(t);
              (e = { ...e, ...i, mass: 1 }).isResolvedFromDuration = !0;
            }
            return e;
          })({ ...n, velocity: -m(n.velocity || 0) }),
          v = d || 0,
          g = u / (2 * Math.sqrt(l * h)),
          y = o - s,
          x = m(Math.sqrt(l / h)),
          P = 5 > Math.abs(y);
        if ((i || (i = P ? 0.01 : 2), e || (e = P ? 0.005 : 0.5), g < 1)) {
          let t = tb(x, g);
          r = (e) =>
            o -
            Math.exp(-g * x * e) *
              (((v + g * x * y) / t) * Math.sin(t * e) + y * Math.cos(t * e));
        } else if (1 === g)
          r = (t) => o - Math.exp(-x * t) * (y + (v + x * y) * t);
        else {
          let t = x * Math.sqrt(g * g - 1);
          r = (e) => {
            let i = Math.exp(-g * x * e),
              n = Math.min(t * e, 300);
            return (
              o -
              (i * ((v + g * x * y) * Math.sinh(n) + t * y * Math.cosh(n))) / t
            );
          };
        }
        return {
          calculatedDuration: (p && c) || null,
          next: (t) => {
            let n = r(t);
            if (p) a.done = t >= c;
            else {
              let s = 0;
              g < 1 && (s = 0 === t ? f(v) : tx(r, t, n));
              let l = Math.abs(s) <= i,
                u = Math.abs(o - n) <= e;
              a.done = l && u;
            }
            return (a.value = a.done ? o : n), a;
          },
        };
      }
      function tE({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: n = 325,
        bounceDamping: r = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let c, d;
        let p = t[0],
          f = { done: !1, value: p },
          m = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          v = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          g = i * e,
          y = p + g,
          x = void 0 === o ? y : o(y);
        x !== y && (g = x - p);
        let P = (t) => -g * Math.exp(-t / n),
          b = (t) => x + P(t),
          w = (t) => {
            let e = P(t),
              i = b(t);
            (f.done = Math.abs(e) <= u), (f.value = f.done ? x : i);
          },
          S = (t) => {
            m(f.value) &&
              ((c = t),
              (d = tA({
                keyframes: [f.value, v(f.value)],
                velocity: tx(b, t, f.value),
                damping: r,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          S(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (d || void 0 !== c || ((e = !0), w(t), S(t)),
              void 0 !== c && t >= c)
                ? d.next(t - c)
                : (e || w(t), f);
            },
          }
        );
      }
      let tR = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function tC(t, e, i, n) {
        if (t === e && i === n) return tf.Z;
        let r = (e) =>
          (function (t, e, i, n, r) {
            let s, o;
            let a = 0;
            do
              (s = tR((o = e + (i - e) / 2), n, r) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : tR(r(t), e, n));
      }
      let tM = tC(0.42, 0, 1, 1),
        tj = tC(0, 0, 0.58, 1),
        tV = tC(0.42, 0, 0.58, 1),
        tD = (t) => Array.isArray(t) && "number" != typeof t[0],
        tk = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        tO = (t) => (e) => 1 - t(1 - e),
        tL = (t) => 1 - Math.sin(Math.acos(t)),
        tF = tO(tL),
        tB = tk(tL),
        tI = tC(0.33, 1.53, 0.69, 0.99),
        tW = tO(tI),
        tN = tk(tW),
        tU = {
          linear: tf.Z,
          easeIn: tM,
          easeInOut: tV,
          easeOut: tj,
          circIn: tL,
          circInOut: tB,
          circOut: tF,
          backIn: tW,
          backInOut: tN,
          backOut: tI,
          anticipate: (t) =>
            (t *= 2) < 1 ? 0.5 * tW(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        },
        t_ = (t) => {
          if (Array.isArray(t)) {
            (0, V.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, n, r] = t;
            return tC(e, i, n, r);
          }
          return "string" == typeof t
            ? ((0, V.k)(void 0 !== tU[t], `Invalid easing type '${t}'`), tU[t])
            : t;
        };
      var t$ = i(42548),
        tz = i(40839);
      function tK({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: n = "easeInOut",
      }) {
        let r = tD(n) ? n.map(t_) : t_(n),
          s = { done: !1, value: e[0] },
          o = (i && i.length === e.length ? i : (0, tz.Y)(e)).map((e) => e * t),
          a = (0, t$.s)(o, e, {
            ease: Array.isArray(r)
              ? r
              : e.map(() => r || tV).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = a(e)), (s.done = e >= t), s),
        };
      }
      var tY = i(89654),
        tH = i(5389);
      let tX = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => M.Wi.update(e, !0),
            stop: () => (0, M.Pn)(e),
            now: () =>
              M.frameData.isProcessing ? M.frameData.timestamp : tm.X.now(),
          };
        },
        tq = { decay: tE, inertia: tE, tween: tK, keyframes: tK, spring: tA },
        tZ = (t) => t / 100;
      class tG extends tg {
        constructor(t) {
          super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let {
              name: e,
              motionValue: i,
              element: n,
              keyframes: r,
            } = this.options,
            s = (null == n ? void 0 : n.KeyframeResolver) || Q;
          (this.resolver = new s(
            r,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            n
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t) {
          let e, i;
          let {
              type: n = "keyframes",
              repeat: r = 0,
              repeatDelay: s = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = tq[n] || tK;
          l !== tK &&
            "number" != typeof t[0] &&
            ((e = (0, tY.z)(tZ, (0, tH.C)(t[0], t[1]))), (t = [0, 100]));
          let u = l({ ...this.options, keyframes: t });
          "mirror" === o &&
            (i = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a,
            })),
            null === u.calculatedDuration &&
              (u.calculatedDuration = (function (t) {
                let e = 0,
                  i = t.next(e);
                for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
                return e >= 2e4 ? 1 / 0 : e;
              })(u));
          let { calculatedDuration: h } = u,
            c = h + s;
          return {
            generator: u,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: h,
            resolvedDuration: c,
            totalDuration: c * (r + 1) - s,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: n,
            generator: r,
            mirroredGenerator: s,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: h,
          } = i;
          if (null === this.startTime) return r.next(0);
          let {
            delay: c,
            repeat: d,
            repeatType: p,
            repeatDelay: f,
            onUpdate: m,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - u / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let v = this.currentTime - c * (this.speed >= 0 ? 1 : -1),
            g = this.speed >= 0 ? v < 0 : v > u;
          (this.currentTime = Math.max(v, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let y = this.currentTime,
            x = r;
          if (d) {
            let t = Math.min(this.currentTime, u) / h,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, d + 1)) % 2 &&
                ("reverse" === p
                  ? ((i = 1 - i), f && (i -= f / h))
                  : "mirror" === p && (x = s)),
              (y = (0, tP.u)(0, 1, i) * h);
          }
          let P = g ? { done: !1, value: a[0] } : x.next(y);
          o && (P.value = o(P.value));
          let { done: b } = P;
          g ||
            null === l ||
            (b =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let w =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && b));
          return (
            w && void 0 !== n && (P.value = C(a, this.options, n)),
            m && m(P.value),
            w && this.finish(),
            P
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? m(t.calculatedDuration) : 0;
        }
        get time() {
          return m(this.currentTime);
        }
        set time(t) {
          (t = f(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t), e && (this.time = m(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = tX, onPlay: e, startTime: i } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let n = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = n - this.holdTime)
            : this.startTime
            ? "finished" === this.state && (this.startTime = n)
            : (this.startTime = null != i ? i : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      let tQ = new Set(["opacity", "clipPath", "filter", "transform"]),
        tJ = (t) => Array.isArray(t) && "number" == typeof t[0],
        t0 = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        t1 = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: t0([0, 0.65, 0.55, 1]),
          circOut: t0([0.55, 0, 1, 0.45]),
          backIn: t0([0.31, 0.01, 0.66, -0.59]),
          backOut: t0([0.33, 1.53, 0.69, 0.99]),
        };
      function t5(t) {
        return t2(t) || t1.easeOut;
      }
      function t2(t) {
        if (t) return tJ(t) ? t0(t) : Array.isArray(t) ? t.map(t5) : t1[t];
      }
      let t9 = tp(() =>
        Object.hasOwnProperty.call(Element.prototype, "animate")
      );
      class t3 extends tg {
        constructor(t) {
          super(t);
          let {
            name: e,
            motionValue: i,
            element: n,
            keyframes: r,
          } = this.options;
          (this.resolver = new td(
            r,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            n
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i, n;
          let {
            duration: r = 300,
            times: s,
            ease: o,
            type: a,
            motionValue: l,
            name: u,
            startTime: h,
          } = this.options;
          if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current))
            return !1;
          if (
            "spring" === (n = this.options).type ||
            !(function t(e) {
              return !!(
                !e ||
                ("string" == typeof e && e in t1) ||
                tJ(e) ||
                (Array.isArray(e) && e.every(t))
              );
            })(n.ease)
          ) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: n,
                element: l,
                ...u
              } = this.options,
              h = (function (t, e) {
                let i = new tG({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  n = { done: !1, value: t[0] },
                  r = [],
                  s = 0;
                for (; !n.done && s < 2e4; )
                  r.push((n = i.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: r,
                  duration: s - 10,
                  ease: "linear",
                };
              })(t, u);
            1 === (t = h.keyframes).length && (t[1] = t[0]),
              (r = h.duration),
              (s = h.times),
              (o = h.ease),
              (a = "keyframes");
          }
          let c = (function (
            t,
            e,
            i,
            {
              delay: n = 0,
              duration: r = 300,
              repeat: s = 0,
              repeatType: o = "loop",
              ease: a,
              times: l,
            } = {}
          ) {
            let u = { [e]: i };
            l && (u.offset = l);
            let h = t2(a);
            return (
              Array.isArray(h) && (u.easing = h),
              t.animate(u, {
                delay: n,
                duration: r,
                easing: Array.isArray(h) ? "linear" : h,
                fill: "both",
                iterations: s + 1,
                direction: "reverse" === o ? "alternate" : "normal",
              })
            );
          })(l.owner.current, u, t, {
            ...this.options,
            duration: r,
            times: s,
            ease: o,
          });
          return (
            (c.startTime = null != h ? h : this.calcStartTime()),
            this.pendingTimeline
              ? ((c.timeline = this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (c.onfinish = () => {
                  let { onComplete: i } = this.options;
                  l.set(C(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: c,
              duration: r,
              times: s,
              type: a,
              ease: o,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return m(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return m(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = f(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        get startTime() {
          let { resolved: t } = this;
          if (!t) return null;
          let { animation: e } = t;
          return e.startTime;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return tf.Z;
            let { animation: i } = e;
            (i.timeline = t), (i.onfinish = null);
          } else this.pendingTimeline = t;
          return tf.Z;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: i,
            duration: n,
            type: r,
            ease: s,
            times: o,
          } = t;
          if ("idle" === e.playState || "finished" === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: a,
                element: l,
                ...u
              } = this.options,
              h = new tG({
                ...u,
                keyframes: i,
                duration: n,
                type: r,
                ease: s,
                times: o,
                isGenerator: !0,
              }),
              c = f(this.time);
            t.setWithVelocity(h.sample(c - 10).value, h.sample(c).value, 10);
          }
          let { onStop: a } = this.options;
          a && a(), this.cancel();
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: n,
            repeatType: r,
            damping: s,
            type: o,
          } = t;
          return (
            t9() &&
            i &&
            tQ.has(i) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !n &&
            "mirror" !== r &&
            0 !== s &&
            "inertia" !== o
          );
        }
      }
      let t4 = tp(() => void 0 !== window.ScrollTimeline);
      class t6 {
        constructor(t) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
        }
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let i = 0; i < this.animations.length; i++)
            this.animations[i][t] = e;
        }
        attachTimeline(t) {
          let e = this.animations.map((e) => {
            if (!t4() || !e.attachTimeline)
              return (
                e.pause(),
                (function (t, e) {
                  let i;
                  let n = () => {
                    let { currentTime: n } = e,
                      r = (null === n ? 0 : n.value) / 100;
                    i !== r && t(r), (i = r);
                  };
                  return M.Wi.update(n, !0), () => (0, M.Pn)(n);
                })((t) => {
                  e.time = e.duration * t;
                }, t)
              );
            e.attachTimeline(t);
          });
          return () => {
            e.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      let t8 =
          (t, e, i, n = {}, r, s, o) =>
          (a) => {
            let l = b(n, t) || {},
              u = l.delay || n.delay || 0,
              { elapsed: h = 0 } = n;
            h -= f(u);
            let c = {
              keyframes: Array.isArray(i) ? i : [null, i],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...l,
              delay: -h,
              onUpdate: (t) => {
                e.set(t), l.onUpdate && l.onUpdate(t);
              },
              onComplete: () => {
                a(), l.onComplete && l.onComplete(), o && o();
              },
              onStop: o,
              name: t,
              motionValue: e,
              element: s ? void 0 : r,
            };
            !(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: n,
              staggerDirection: r,
              repeat: s,
              repeatType: o,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(l) && (c = { ...c, ...P(t, c) }),
              c.duration && (c.duration = f(c.duration)),
              c.repeatDelay && (c.repeatDelay = f(c.repeatDelay)),
              void 0 !== c.from && (c.keyframes[0] = c.from);
            let d = !1;
            if (
              ((!1 !== c.type && (0 !== c.duration || c.repeatDelay)) ||
                ((c.duration = 0), 0 !== c.delay || (d = !0)),
              (E.current || A.c.skipAnimations) &&
                ((d = !0), (c.duration = 0), (c.delay = 0)),
              d && !s && void 0 !== e.get())
            ) {
              let t = C(c.keyframes, l);
              if (void 0 !== t)
                return (
                  M.Wi.update(() => {
                    c.onUpdate(t), c.onComplete();
                  }),
                  new t6([])
                );
            }
            return !s && t3.supports(c) ? new t3(c) : new tG(c);
          },
        t7 = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        et = (t) => (r(t) ? t[t.length - 1] || 0 : t);
      var ee = i(20804);
      let ei = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        en = "data-" + ei("framerAppearId");
      function er(t) {
        return p.has(t) ? "transform" : tQ.has(t) ? ei(t) : void 0;
      }
      var es = i(28746);
      class eo extends ee.Hg {
        constructor() {
          super(...arguments), (this.output = []), (this.counts = new Map());
        }
        add(t) {
          let e = er(t);
          if (!e) return;
          let i = this.counts.get(e) || 0;
          this.counts.set(e, i + 1),
            0 === i && (this.output.push(e), this.update());
          let n = !1;
          return () => {
            if (n) return;
            n = !0;
            let t = this.counts.get(e) - 1;
            this.counts.set(e, t),
              0 === t && ((0, es.cl)(this.output, e), this.update());
          };
        }
        update() {
          this.set(this.output.length ? this.output.join(", ") : "auto");
        }
      }
      let ea = (t) => !!(t && t.getVelocity);
      function el(t, e) {
        var i, n;
        if (!t.applyWillChange) return;
        let r = t.getValue("willChange");
        if (
          (r ||
            (null === (i = t.props.style) || void 0 === i
              ? void 0
              : i.willChange) ||
            ((r = new eo("auto")), t.addValue("willChange", r)),
          ea((n = r)) && n.add)
        )
          return r.add(e);
      }
      function eu(t, e, { delay: i = 0, transitionOverride: n, type: r } = {}) {
        var s;
        let {
          transition: o = t.getDefaultTransition(),
          transitionEnd: a,
          ...l
        } = e;
        n && (o = n);
        let h = [],
          c = r && t.animationState && t.animationState.getState()[r];
        for (let e in l) {
          let n = t.getValue(
              e,
              null !== (s = t.latestValues[e]) && void 0 !== s ? s : null
            ),
            r = l[e];
          if (
            void 0 === r ||
            (c &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let n = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), n;
              })(c, e))
          )
            continue;
          let a = { delay: i, ...b(o || {}, e) },
            u = !1;
          if (window.MotionHandoffAnimation) {
            let i = t.props[en];
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, M.Wi);
              null !== t && ((a.startTime = t), (u = !0));
            }
          }
          n.start(
            t8(
              e,
              n,
              r,
              t.shouldReduceMotion && p.has(e) ? { type: !1 } : a,
              t,
              u,
              el(t, e)
            )
          );
          let d = n.animation;
          d && h.push(d);
        }
        return (
          a &&
            Promise.all(h).then(() => {
              M.Wi.update(() => {
                a &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: n = {},
                      ...r
                    } = u(t, e) || {};
                    for (let e in (r = { ...r, ...i })) {
                      let i = et(r[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, (0, ee.BX)(i));
                    }
                  })(t, a);
              });
            }),
          h
        );
      }
      function eh(t, e, i = {}) {
        var n;
        let r = u(
            t,
            e,
            "exit" === i.type
              ? null === (n = t.presenceContext) || void 0 === n
                ? void 0
                : n.custom
              : void 0
          ),
          { transition: s = t.getDefaultTransition() || {} } = r || {};
        i.transitionOverride && (s = i.transitionOverride);
        let o = r ? () => Promise.all(eu(t, r, i)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: r = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = s;
                  return (function (t, e, i = 0, n = 0, r = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * n,
                      l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                    return (
                      Array.from(t.variantChildren)
                        .sort(ec)
                        .forEach((t, n) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              eh(t, e, { ...s, delay: i + l(n) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, r + n, o, a, i);
                }
              : () => Promise.resolve(),
          { when: l } = s;
        if (!l) return Promise.all([o(), a(i.delay)]);
        {
          let [t, e] = "beforeChildren" === l ? [o, a] : [a, o];
          return t().then(() => e());
        }
      }
      function ec(t, e) {
        return t.sortNodePosition(e);
      }
      let ed = c.length,
        ep = [...h].reverse(),
        ef = h.length;
      function em(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function ev() {
        return {
          animate: em(!0),
          whileInView: em(),
          whileHover: em(),
          whileTap: em(),
          whileDrag: em(),
          whileFocus: em(),
          exit: em(),
        };
      }
      class eg {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      class ey extends eg {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let n;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            n = Promise.all(e.map((e) => eh(t, e, i)));
                          else if ("string" == typeof e) n = eh(t, e, i);
                          else {
                            let r =
                              "function" == typeof e ? u(t, e, i.custom) : e;
                            n = Promise.all(eu(t, r, i));
                          }
                          return n.then(() => {
                            t.notify("AnimationComplete", e);
                          });
                        })(t, e, i)
                      )
                    ),
                  i = ev(),
                  a = !0,
                  l = (e) => (i, n) => {
                    var r;
                    let s = u(
                      t,
                      n,
                      "exit" === e
                        ? null === (r = t.presenceContext) || void 0 === r
                          ? void 0
                          : r.custom
                        : void 0
                    );
                    if (s) {
                      let { transition: t, transitionEnd: e, ...n } = s;
                      i = { ...i, ...n, ...e };
                    }
                    return i;
                  };
                function h(u) {
                  let { props: h } = t,
                    d =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let i = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (i.initial = e.props.initial),
                            i
                          );
                        }
                        let i = {};
                        for (let t = 0; t < ed; t++) {
                          let n = c[t],
                            r = e.props[n];
                          (o(r) || !1 === r) && (i[n] = r);
                        }
                        return i;
                      })(t.parent) || {},
                    p = [],
                    f = new Set(),
                    m = {},
                    v = 1 / 0;
                  for (let e = 0; e < ef; e++) {
                    var g;
                    let c = ep[e],
                      y = i[c],
                      x = void 0 !== h[c] ? h[c] : d[c],
                      P = o(x),
                      b = c === u ? y.isActive : null;
                    !1 === b && (v = e);
                    let w = x === d[c] && x !== h[c] && P;
                    if (
                      (w && a && t.manuallyAnimateOnMount && (w = !1),
                      (y.protectedKeys = { ...m }),
                      (!y.isActive && null === b) ||
                        (!x && !y.prevProp) ||
                        n(x) ||
                        "boolean" == typeof x)
                    )
                      continue;
                    let S =
                        ((g = y.prevProp),
                        "string" == typeof x
                          ? x !== g
                          : !!Array.isArray(x) && !s(x, g)),
                      T =
                        S || (c === u && y.isActive && !w && P) || (e > v && P),
                      A = !1,
                      E = Array.isArray(x) ? x : [x],
                      R = E.reduce(l(c), {});
                    !1 === b && (R = {});
                    let { prevResolvedValues: C = {} } = y,
                      M = { ...C, ...R },
                      j = (e) => {
                        (T = !0),
                          f.has(e) && ((A = !0), f.delete(e)),
                          (y.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in M) {
                      let e = R[t],
                        i = C[t];
                      if (!m.hasOwnProperty(t))
                        (r(e) && r(i) ? s(e, i) : e === i)
                          ? void 0 !== e && f.has(t)
                            ? j(t)
                            : (y.protectedKeys[t] = !0)
                          : null != e
                          ? j(t)
                          : f.add(t);
                    }
                    (y.prevProp = x),
                      (y.prevResolvedValues = R),
                      y.isActive && (m = { ...m, ...R }),
                      a && t.blockInitialAnimation && (T = !1);
                    let V = !(w && S) || A;
                    T &&
                      V &&
                      p.push(
                        ...E.map((t) => ({
                          animation: t,
                          options: { type: c },
                        }))
                      );
                  }
                  if (f.size) {
                    let e = {};
                    f.forEach((i) => {
                      let n = t.getBaseTarget(i),
                        r = t.getValue(i);
                      r && (r.liveStyle = !0), (e[i] = null != n ? n : null);
                    }),
                      p.push({ animation: e });
                  }
                  let y = !!p.length;
                  return (
                    a &&
                      (!1 === h.initial || h.initial === h.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (y = !1),
                    (a = !1),
                    y ? e(p) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: h,
                  setActive: function (e, n) {
                    var r;
                    if (i[e].isActive === n) return Promise.resolve();
                    null === (r = t.variantChildren) ||
                      void 0 === r ||
                      r.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, n);
                      }),
                      (i[e].isActive = n);
                    let s = h(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return s;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    (i = ev()), (a = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          n(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var t;
          this.node.animationState.reset(),
            null === (t = this.unmountControls) || void 0 === t || t.call(this);
        }
      }
      let ex = 0;
      class eP extends eg {
        constructor() {
          super(...arguments), (this.id = ex++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let n = this.node.animationState.setActive("exit", !t);
          e && !t && n.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let eb = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function ew(t, e = "page") {
        return { point: { x: t[`${e}X`], y: t[`${e}Y`] } };
      }
      let eS = (t) => (e) => eb(e) && t(e, ew(e));
      function eT(t, e, i, n = { passive: !0 }) {
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i);
      }
      function eA(t, e, i, n) {
        return eT(t, e, eS(i), n);
      }
      let eE = (t, e) => Math.abs(t - e);
      class eR {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: n,
            dragSnapToOrigin: r = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let i = ej(this.lastMoveEventInfo, this.history),
                n = null !== this.startEvent,
                r =
                  ((t = i.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(eE(t.x, e.x) ** 2 + eE(t.y, e.y) ** 2) >= 3);
              if (!n && !r) return;
              let { point: s } = i,
                { timestamp: o } = M.frameData;
              this.history.push({ ...s, timestamp: o });
              let { onStart: a, onMove: l } = this.handlers;
              n ||
                (a && a(this.lastMoveEvent, i),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, i);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = eC(e, this.transformPagePoint)),
                M.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: n,
                resumeAnimation: r,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && r && r(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = ej(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : eC(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, s), n && n(t, s);
            }),
            !eb(t))
          )
            return;
          (this.dragSnapToOrigin = r),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = n || window);
          let s = eC(ew(t), this.transformPagePoint),
            { point: o } = s,
            { timestamp: a } = M.frameData;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, ej(s, this.history)),
            (this.removeListeners = (0, tY.z)(
              eA(this.contextWindow, "pointermove", this.handlePointerMove),
              eA(this.contextWindow, "pointerup", this.handlePointerUp),
              eA(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, M.Pn)(this.updatePoint);
        }
      }
      function eC(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function eM(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function ej({ point: t }, e) {
        return {
          point: t,
          delta: eM(t, eV(e)),
          offset: eM(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              n = null,
              r = eV(t);
            for (
              ;
              i >= 0 && ((n = t[i]), !(r.timestamp - n.timestamp > f(0.1)));

            )
              i--;
            if (!n) return { x: 0, y: 0 };
            let s = m(r.timestamp - n.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (r.x - n.x) / s, y: (r.y - n.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function eV(t) {
        return t[t.length - 1];
      }
      function eD(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      let ek = eD("dragHorizontal"),
        eO = eD("dragVertical");
      function eL(t) {
        let e = !1;
        if ("y" === t) e = eO();
        else if ("x" === t) e = ek();
        else {
          let t = ek(),
            i = eO();
          t && i
            ? (e = () => {
                t(), i();
              })
            : (t && t(), i && i());
        }
        return e;
      }
      function eF() {
        let t = eL(!0);
        return !t || (t(), !1);
      }
      function eB(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      var eI = i(33217),
        eW = i(75004);
      function eN(t) {
        return t.max - t.min;
      }
      function eU(t, e, i, n = 0.5) {
        (t.origin = n),
          (t.originPoint = (0, eW.t)(e.min, e.max, t.origin)),
          (t.scale = eN(i) / eN(e)),
          (t.translate = (0, eW.t)(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function e_(t, e, i, n) {
        eU(t.x, e.x, i.x, n ? n.originX : void 0),
          eU(t.y, e.y, i.y, n ? n.originY : void 0);
      }
      function e$(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + eN(e));
      }
      function ez(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + eN(e));
      }
      function eK(t, e, i) {
        ez(t.x, e.x, i.x), ez(t.y, e.y, i.y);
      }
      function eY(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function eH(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, n] = [n, i]), { min: i, max: n }
        );
      }
      function eX(t, e, i) {
        return { min: eq(t, e), max: eq(t, i) };
      }
      function eq(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let eZ = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        eG = () => ({ x: eZ(), y: eZ() }),
        eQ = () => ({ min: 0, max: 0 }),
        eJ = () => ({ x: eQ(), y: eQ() });
      function e0(t) {
        return [t("x"), t("y")];
      }
      function e1({ top: t, left: e, right: i, bottom: n }) {
        return { x: { min: e, max: i }, y: { min: t, max: n } };
      }
      function e5(t) {
        return void 0 === t || 1 === t;
      }
      function e2({ scale: t, scaleX: e, scaleY: i }) {
        return !e5(t) || !e5(e) || !e5(i);
      }
      function e9(t) {
        return (
          e2(t) ||
          e3(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function e3(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function e4(t, e, i, n, r) {
        return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e;
      }
      function e6(t, e = 0, i = 1, n, r) {
        (t.min = e4(t.min, e, i, n, r)), (t.max = e4(t.max, e, i, n, r));
      }
      function e8(t, { x: e, y: i }) {
        e6(t.x, e.translate, e.scale, e.originPoint),
          e6(t.y, i.translate, i.scale, i.originPoint);
      }
      function e7(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function it(t, e, i, n, r = 0.5) {
        let s = (0, eW.t)(t.min, t.max, r);
        e6(t, e, i, s, n);
      }
      function ie(t, e) {
        it(t.x, e.x, e.scaleX, e.scale, e.originX),
          it(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
      function ii(t, e) {
        return e1(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              n = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: n.y, right: n.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let ir = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        is = new WeakMap();
      class io {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = eJ()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: n } = this.getProps();
          this.panSession = new eR(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(ew(t, "page").point);
              },
              onStart: (t, e) => {
                var i;
                let {
                  drag: n,
                  dragPropagation: r,
                  onDragStart: s,
                } = this.getProps();
                if (
                  n &&
                  !r &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = eL(n)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  e0((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (F.aQ.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let n = i.layout.layoutBox[t];
                        if (n) {
                          let t = eN(n);
                          e = (parseFloat(e) / 100) * t;
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  s && M.Wi.postRender(() => s(t, e)),
                  null === (i = this.removeWillChange) ||
                    void 0 === i ||
                    i.call(this),
                  (this.removeWillChange = el(this.visualElement, "transform"));
                let { animationState: o } = this.visualElement;
                o && o.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: n,
                  onDirectionLock: r,
                  onDrag: s,
                } = this.getProps();
                if (!i && !this.openGlobalLock) return;
                let { offset: o } = e;
                if (n && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      r &&
                      r(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  s && s(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                e0((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: n,
              contextWindow: ir(this.visualElement),
            }
          );
        }
        stop(t, e) {
          var i;
          null === (i = this.removeWillChange) || void 0 === i || i.call(this);
          let n = this.isDragging;
          if ((this.cancel(), !n)) return;
          let { velocity: r } = e;
          this.startAnimation(r);
          let { onDragEnd: s } = this.getProps();
          s && M.Wi.postRender(() => s(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: n } = this.getProps();
          if (!i || !ia(t, n, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: i }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? (0, eW.t)(e, t, n.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = n ? (0, eW.t)(i, t, n.max) : Math.min(t, i)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            r.set(s);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            n =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            r = this.constraints;
          e && eB(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && n
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: n, right: r }
              ) {
                return { x: eY(t.x, i, r), y: eY(t.y, e, n) };
              })(n.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: eX(t, "left", "right"), y: eX(t, "top", "bottom") }
              );
            })(i)),
            r !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              e0((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(n.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !eB(e)) return !1;
          let n = e.current;
          (0, V.k)(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let s = (function (t, e, i) {
              let n = ii(t, i),
                { scroll: r } = e;
              return r && (e7(n.x, r.offset.x), e7(n.y, r.offset.y)), n;
            })(n, r.root, this.visualElement.getTransformPagePoint()),
            o = { x: eH((t = r.layout.layoutBox).x, s.x), y: eH(t.y, s.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = e1(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: n,
              dragTransition: r,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            e0((o) => {
              if (!ia(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return i.start(
            t8(t, i, 0, e, this.visualElement, !1, el(this.visualElement, t))
          );
        }
        stopAnimation() {
          e0((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          e0((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          e0((e) => {
            let { drag: i } = this.getProps();
            if (!ia(e, i, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: i, max: s } = n.layout.layoutBox[e];
              r.set(t[e] - (0, eW.t)(i, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!eB(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          e0((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              n[t] = (function (t, e) {
                let i = 0.5,
                  n = eN(t),
                  r = eN(e);
                return (
                  r > n
                    ? (i = (0, eI.Y)(e.min, e.max - n, t.min))
                    : n > r && (i = (0, eI.Y)(t.min, t.max - r, e.min)),
                  (0, tP.u)(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            e0((e) => {
              if (!ia(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: r, max: s } = this.constraints[e];
              i.set((0, eW.t)(r, s, n[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          is.set(this.visualElement, this);
          let t = eA(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              eB(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            n = i.addEventListener("measure", e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            M.Wi.read(e);
          let r = eT(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            s = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (e0((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            r(), t(), n(), s && s();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: r = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: r,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function ia(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class il extends eg {
        constructor(t) {
          super(t),
            (this.removeGroupControls = tf.Z),
            (this.removeListeners = tf.Z),
            (this.controls = new io(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || tf.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let iu = (t) => (e, i) => {
        t && M.Wi.postRender(() => t(e, i));
      };
      class ih extends eg {
        constructor() {
          super(...arguments), (this.removePointerDownListener = tf.Z);
        }
        onPointerDown(t) {
          this.session = new eR(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: ir(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: n,
          } = this.node.getProps();
          return {
            onSessionStart: iu(t),
            onStart: iu(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, n && M.Wi.postRender(() => n(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = eA(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var ic = i(57437),
        id = i(2265),
        ip = i(67797),
        im = i(5050);
      let iv = (0, id.createContext)({}),
        ig = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function iy(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let ix = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!F.px.test(t)) return t;
              t = parseFloat(t);
            }
            let i = iy(t, e.target.x),
              n = iy(t, e.target.y);
            return `${i}% ${n}%`;
          },
        },
        iP = {},
        { schedule: ib, cancel: iw } = (0, i(2981).Z)(queueMicrotask, !1);
      class iS extends id.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: n,
            } = this.props,
            { projection: r } = t;
          Object.assign(iP, iA),
            r &&
              (e.group && e.group.add(r),
              i && i.register && n && i.register(r),
              r.root.didUpdate(),
              r.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (ig.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: n,
              isPresent: r,
            } = this.props,
            s = i.projection;
          return (
            s &&
              ((s.isPresent = r),
              n || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? s.promote()
                  : s.relegate() ||
                    M.Wi.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            ib.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: n } = t;
          n &&
            (n.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(n),
            i && i.deregister && i.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function iT(t) {
        let [e, i] = (function () {
            let t = (0, id.useContext)(ip.O);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: n } = t,
              r = (0, id.useId)();
            (0, id.useEffect)(() => n(r), []);
            let s = (0, id.useCallback)(() => i && i(r), [r, i]);
            return !e && i ? [!1, s] : [!0];
          })(),
          n = (0, id.useContext)(im.p);
        return (0, ic.jsx)(iS, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, id.useContext)(iv),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let iA = {
        borderRadius: {
          ...ix,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: ix,
        borderTopRightRadius: ix,
        borderBottomLeftRadius: ix,
        borderBottomRightRadius: ix,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let n = J.P.parse(t);
            if (n.length > 5) return t;
            let r = J.P.createTransformer(t),
              s = "number" != typeof n[0] ? 1 : 0,
              o = i.x.scale * e.x,
              a = i.y.scale * e.y;
            (n[0 + s] /= o), (n[1 + s] /= a);
            let l = (0, eW.t)(o, a, 0.5);
            return (
              "number" == typeof n[2 + s] && (n[2 + s] /= l),
              "number" == typeof n[3 + s] && (n[3 + s] /= l),
              r(n)
            );
          },
        },
      };
      var iE = i(72428);
      let iR = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        iC = iR.length,
        iM = (t) => ("string" == typeof t ? parseFloat(t) : t),
        ij = (t) => "number" == typeof t || F.px.test(t);
      function iV(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let iD = iO(0, 0.5, tF),
        ik = iO(0.5, 0.95, tf.Z);
      function iO(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i((0, eI.Y)(t, e, n)));
      }
      function iL(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function iF(t, e) {
        iL(t.x, e.x), iL(t.y, e.y);
      }
      function iB(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      function iI(t, e, i, n, r) {
        return (
          (t -= e),
          (t = n + (1 / i) * (t - n)),
          void 0 !== r && (t = n + (1 / r) * (t - n)),
          t
        );
      }
      function iW(t, e, [i, n, r], s, o) {
        !(function (t, e = 0, i = 1, n = 0.5, r, s = t, o = t) {
          if (
            (F.aQ.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, eW.t)(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = (0, eW.t)(s.min, s.max, n);
          t === s && (a -= e),
            (t.min = iI(t.min, e, i, a, r)),
            (t.max = iI(t.max, e, i, a, r));
        })(t, e[i], e[n], e[r], e.scale, s, o);
      }
      let iN = ["x", "scaleX", "originX"],
        iU = ["y", "scaleY", "originY"];
      function i_(t, e, i, n) {
        iW(t.x, e, iN, i ? i.x : void 0, n ? n.x : void 0),
          iW(t.y, e, iU, i ? i.y : void 0, n ? n.y : void 0);
      }
      function i$(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function iz(t) {
        return i$(t.x) && i$(t.y);
      }
      function iK(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function iY(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function iH(t, e) {
        return iY(t.x, e.x) && iY(t.y, e.y);
      }
      function iX(t) {
        return eN(t.x) / eN(t.y);
      }
      function iq(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class iZ {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, es.y4)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, es.cl)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: n } = t.options;
            !1 === n && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let iG = (t, e) => t.depth - e.depth;
      class iQ {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, es.y4)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, es.cl)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(iG),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      function iJ(t) {
        let e = ea(t) ? t.get() : t;
        return t7(e) ? e.toValue() : e;
      }
      let i0 = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        i1 = "undefined" != typeof window && void 0 !== window.MotionDebug,
        i5 = ["", "X", "Y", "Z"],
        i2 = { visibility: "hidden" },
        i9 = 0;
      function i3(t, e, i, n) {
        let { latestValues: r } = e;
        r[t] && ((i[t] = r[t]), e.setStaticValue(t, 0), n && (n[t] = 0));
      }
      function i4({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: r,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = i9++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  i1 &&
                    (i0.totalNodes =
                      i0.resolvedTargetDeltas =
                      i0.recalculatedProjection =
                        0),
                  this.nodes.forEach(i7),
                  this.nodes.forEach(no),
                  this.nodes.forEach(na),
                  this.nodes.forEach(nt),
                  i1 && window.MotionDebug.record(i0);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new iQ());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new iE.L()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: n, layout: r, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (r || n) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let n = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = tm.X.now(),
                      n = ({ timestamp: e }) => {
                        let r = e - i;
                        r >= 250 && ((0, M.Pn)(n), t(r - 250));
                      };
                    return M.Wi.read(n, !0), () => (0, M.Pn)(n);
                  })(n, 0)),
                  ig.hasAnimatedSinceResize &&
                    ((ig.hasAnimatedSinceResize = !1), this.nodes.forEach(ns));
              });
            }
            n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                s &&
                (n || r) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let r =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        np,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !iH(this.targetLayout, n) || i,
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = { ...b(r, "layout"), onPlay: o, onComplete: a };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || ns(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = n;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, M.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(nl),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let n = i.props[en];
                  if (window.MotionHasOptimisedAnimation(n, "transform")) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      n,
                      "transform",
                      M.Wi,
                      !(t || i)
                    );
                  }
                  let { parent: r } = e;
                  r && !r.hasCheckedOptimisedAppear && t(r);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(ni);
              return;
            }
            this.isUpdating || this.nodes.forEach(nn),
              (this.isUpdating = !1),
              this.nodes.forEach(nr),
              this.nodes.forEach(i6),
              this.nodes.forEach(i8),
              this.clearAllSnapshots();
            let t = tm.X.now();
            (M.frameData.delta = (0, tP.u)(
              0,
              1e3 / 60,
              t - M.frameData.timestamp
            )),
              (M.frameData.timestamp = t),
              (M.frameData.isProcessing = !0),
              M.S6.update.process(M.frameData),
              M.S6.preRender.process(M.frameData),
              M.S6.render.process(M.frameData),
              (M.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), ib.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(ne), this.sharedNodes.forEach(nu);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              M.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            M.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = eJ()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e)
            ) {
              let e = n(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!r) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !iz(this.projectionDelta),
              i = this.getTransformTemplate(),
              n = i ? i(this.latestValues, "") : void 0,
              s = n !== this.prevTransformTemplateValue;
            t &&
              (e || e9(this.latestValues) || s) &&
              (r(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return (
              t && (n = this.removeTransform(n)),
              nv((e = n).x),
              nv(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var t;
            let { visualElement: e } = this.options;
            if (!e) return eJ();
            let i = e.measureViewportBox();
            if (
              !(
                (null === (t = this.scroll) || void 0 === t
                  ? void 0
                  : t.wasRoot) || this.path.some(ny)
              )
            ) {
              let { scroll: t } = this.root;
              t && (e7(i.x, t.offset.x), e7(i.y, t.offset.y));
            }
            return i;
          }
          removeElementScroll(t) {
            var e;
            let i = eJ();
            if (
              (iF(i, t),
              null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
            )
              return i;
            for (let e = 0; e < this.path.length; e++) {
              let n = this.path[e],
                { scroll: r, options: s } = n;
              n !== this.root &&
                r &&
                s.layoutScroll &&
                (r.wasRoot && iF(i, t),
                e7(i.x, r.offset.x),
                e7(i.y, r.offset.y));
            }
            return i;
          }
          applyTransform(t, e = !1) {
            let i = eJ();
            iF(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              !e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                ie(i, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                e9(n.latestValues) && ie(i, n.latestValues);
            }
            return e9(this.latestValues) && ie(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = eJ();
            iF(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !e9(i.latestValues)) continue;
              e2(i.latestValues) && i.updateSnapshot();
              let n = eJ();
              iF(n, i.measurePageBox()),
                i_(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  n
                );
            }
            return e9(this.latestValues) && i_(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                M.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, n, r;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = M.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = eJ()),
                    (this.relativeTargetOrigin = eJ()),
                    eK(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    iF(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = eJ()), (this.targetWithTransforms = eJ())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (n = this.relativeTarget),
                      (r = this.relativeParent.target),
                      e$(i.x, n.x, r.x),
                      e$(i.y, n.y, r.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : iF(this.target, this.layout.layoutBox),
                      e8(this.target, this.targetDelta))
                    : iF(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = eJ()),
                      (this.relativeTargetOrigin = eJ()),
                      eK(this.relativeTargetOrigin, this.target, t.target),
                      iF(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                i1 && i0.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              e2(this.parent.latestValues) ||
              e3(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (n = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === M.frameData.timestamp &&
                (n = !1),
              n)
            )
              return;
            let { layout: r, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(r || s))
            )
              return;
            iF(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, i, n = !1) {
              let r, s;
              let o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  s = (r = i[a]).projectionDelta;
                  let { visualElement: o } = r.options;
                  (!o ||
                    !o.props.style ||
                    "contents" !== o.props.style.display) &&
                    (n &&
                      r.options.layoutScroll &&
                      r.scroll &&
                      r !== r.root &&
                      ie(t, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                    s && ((e.x *= s.x.scale), (e.y *= s.y.scale), e8(t, s)),
                    n && e9(r.latestValues) && ie(t, r.latestValues));
                }
                e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = eJ()));
            let { target: l } = e;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (iB(this.prevProjectionDelta.x, this.projectionDelta.x),
                iB(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              e_(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues
              ),
              (this.treeScale.x === o &&
                this.treeScale.y === a &&
                iq(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                iq(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              i1 && i0.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e;
            if (
              (null === (e = this.options.visualElement) ||
                void 0 === e ||
                e.scheduleRender(),
              t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = eG()),
              (this.projectionDelta = eG()),
              (this.projectionDeltaWithTransform = eG());
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let n = this.snapshot,
              r = n ? n.latestValues : {},
              s = { ...this.latestValues },
              o = eG();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = eJ(),
              l =
                (n ? n.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              c = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(nd)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let n = e / 1e3;
                if (
                  (nh(o.x, t.x, n),
                  nh(o.y, t.y, n),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, d, p, f;
                  eK(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (f = this.relativeTargetOrigin),
                    nc(p.x, f.x, a.x, n),
                    nc(p.y, f.y, a.y, n),
                    i &&
                      ((u = this.relativeTarget),
                      (d = i),
                      iK(u.x, d.x) && iK(u.y, d.y)) &&
                      (this.isProjectionDirty = !1),
                    i || (i = eJ()),
                    iF(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = s),
                  (function (t, e, i, n, r, s) {
                    r
                      ? ((t.opacity = (0, eW.t)(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          iD(n)
                        )),
                        (t.opacityExit = (0, eW.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          ik(n)
                        )))
                      : s &&
                        (t.opacity = (0, eW.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          n
                        ));
                    for (let r = 0; r < iC; r++) {
                      let s = `border${iR[r]}Radius`,
                        o = iV(e, s),
                        a = iV(i, s);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || ij(o) === ij(a)
                          ? ((t[s] = Math.max((0, eW.t)(iM(o), iM(a), n), 0)),
                            (F.aQ.test(a) || F.aQ.test(o)) && (t[s] += "%"))
                          : (t[s] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = (0, eW.t)(e.rotate || 0, i.rotate || 0, n));
                  })(s, r, this.latestValues, n, c, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, M.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = M.Wi.update(() => {
                (ig.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let n = ea(0) ? 0 : (0, ee.BX)(0);
                    return n.start(t8("", n, 1e3, i)), n.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: n,
                latestValues: r,
              } = t;
            if (e && i && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                ng(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                i = this.target || eJ();
                let e = eN(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let n = eN(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + n);
              }
              iF(e, i),
                ie(e, r),
                e_(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new iZ()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let n = {};
            i.z && i3("z", t, n, this.animationValues);
            for (let e = 0; e < i5.length; e++)
              i3(`rotate${i5[e]}`, t, n, this.animationValues),
                i3(`skew${i5[e]}`, t, n, this.animationValues);
            for (let e in (t.render(), n))
              t.setStaticValue(e, n[e]),
                this.animationValues && (this.animationValues[e] = n[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return i2;
            let n = { visibility: "" },
              r = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ""),
                (n.pointerEvents =
                  iJ(null == t ? void 0 : t.pointerEvents) || ""),
                (n.transform = r ? r(this.latestValues, "") : "none"),
                n
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    iJ(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !e9(this.latestValues) &&
                  ((e.transform = r ? r({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (n.transform = (function (t, e, i) {
                let n = "",
                  r = t.x.translate / e.x,
                  s = t.y.translate / e.y,
                  o = (null == i ? void 0 : i.z) || 0;
                if (
                  ((r || s || o) &&
                    (n = `translate3d(${r}px, ${s}px, ${o}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (n += `scale(${1 / e.x}, ${1 / e.y}) `),
                  i)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: r,
                    rotateY: s,
                    skewX: o,
                    skewY: a,
                  } = i;
                  t && (n = `perspective(${t}px) ${n}`),
                    e && (n += `rotate(${e}deg) `),
                    r && (n += `rotateX(${r}deg) `),
                    s && (n += `rotateY(${s}deg) `),
                    o && (n += `skewX(${o}deg) `),
                    a && (n += `skewY(${a}deg) `);
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (
                  (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`),
                  n || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, o)),
              r && (n.transform = r(o, n.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((n.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (n.opacity =
                  s === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (n.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            iP)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = iP[t],
                r = "none" === n.transform ? o[t] : e(o[t], s);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) n[i[e]] = r;
              } else n[t] = r;
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  s === this
                    ? iJ(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              n
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(ni),
              this.root.sharedNodes.clear();
          }
        };
      }
      function i6(t) {
        t.updateLayout();
      }
      function i8(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: n } = t.layout,
            { animationType: r } = t.options,
            s = i.source !== t.layout.source;
          "size" === r
            ? e0((t) => {
                let n = s ? i.measuredBox[t] : i.layoutBox[t],
                  r = eN(n);
                (n.min = e[t].min), (n.max = n.min + r);
              })
            : ng(r, i.layoutBox, e) &&
              e0((n) => {
                let r = s ? i.measuredBox[n] : i.layoutBox[n],
                  o = eN(e[n]);
                (r.max = r.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + o));
              });
          let o = eG();
          e_(o, e, i.layoutBox);
          let a = eG();
          s
            ? e_(a, t.applyTransform(n, !0), i.measuredBox)
            : e_(a, e, i.layoutBox);
          let l = !iz(o),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: r, layout: s } = n;
              if (r && s) {
                let o = eJ();
                eK(o, i.layoutBox, r.layoutBox);
                let a = eJ();
                eK(a, e, s.layoutBox),
                  iH(o, a) || (u = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = n));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function i7(t) {
        i1 && i0.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function nt(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function ne(t) {
        t.clearSnapshot();
      }
      function ni(t) {
        t.clearMeasurements();
      }
      function nn(t) {
        t.isLayoutDirty = !1;
      }
      function nr(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function ns(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function no(t) {
        t.resolveTargetDelta();
      }
      function na(t) {
        t.calcProjection();
      }
      function nl(t) {
        t.resetSkewAndRotation();
      }
      function nu(t) {
        t.removeLeadSnapshot();
      }
      function nh(t, e, i) {
        (t.translate = (0, eW.t)(e.translate, 0, i)),
          (t.scale = (0, eW.t)(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function nc(t, e, i, n) {
        (t.min = (0, eW.t)(e.min, i.min, n)),
          (t.max = (0, eW.t)(e.max, i.max, n));
      }
      function nd(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let np = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        nf = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        nm = nf("applewebkit/") && !nf("chrome/") ? Math.round : tf.Z;
      function nv(t) {
        (t.min = nm(t.min)), (t.max = nm(t.max));
      }
      function ng(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(iX(e) - iX(i))))
        );
      }
      function ny(t) {
        var e;
        return (
          t !== t.root &&
          (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        );
      }
      let nx = i4({
          attachResizeListener: (t, e) => eT(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        nP = { current: void 0 },
        nb = i4({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!nP.current) {
              let t = new nx({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (nP.current = t);
            }
            return nP.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      function nw(t, e) {
        let i = e ? "onHoverStart" : "onHoverEnd";
        return eA(
          t.current,
          e ? "pointerenter" : "pointerleave",
          (n, r) => {
            if ("touch" === n.pointerType || eF()) return;
            let s = t.getProps();
            t.animationState &&
              s.whileHover &&
              t.animationState.setActive("whileHover", e);
            let o = s[i];
            o && M.Wi.postRender(() => o(n, r));
          },
          { passive: !t.getProps()[i] }
        );
      }
      class nS extends eg {
        mount() {
          this.unmount = (0, tY.z)(nw(this.node, !0), nw(this.node, !1));
        }
        unmount() {}
      }
      class nT extends eg {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, tY.z)(
            eT(this.node.current, "focus", () => this.onFocus()),
            eT(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      let nA = (t, e) => !!e && (t === e || nA(t, e.parentElement));
      function nE(t, e) {
        if (!e) return;
        let i = new PointerEvent("pointer" + t);
        e(i, ew(i));
      }
      class nR extends eg {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = tf.Z),
            (this.removeEndListeners = tf.Z),
            (this.removeAccessibleListeners = tf.Z),
            (this.startPointerPress = (t, e) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let i = this.node.getProps(),
                n = eA(
                  window,
                  "pointerup",
                  (t, e) => {
                    if (!this.checkPressEnd()) return;
                    let {
                        onTap: i,
                        onTapCancel: n,
                        globalTapTarget: r,
                      } = this.node.getProps(),
                      s = r || nA(this.node.current, t.target) ? i : n;
                    s && M.Wi.update(() => s(t, e));
                  },
                  { passive: !(i.onTap || i.onPointerUp) }
                ),
                r = eA(
                  window,
                  "pointercancel",
                  (t, e) => this.cancelPress(t, e),
                  { passive: !(i.onTapCancel || i.onPointerCancel) }
                );
              (this.removeEndListeners = (0, tY.z)(n, r)),
                this.startPress(t, e);
            }),
            (this.startAccessiblePress = () => {
              let t = eT(this.node.current, "keydown", (t) => {
                  "Enter" !== t.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = eT(
                      this.node.current,
                      "keyup",
                      (t) => {
                        "Enter" === t.key &&
                          this.checkPressEnd() &&
                          nE("up", (t, e) => {
                            let { onTap: i } = this.node.getProps();
                            i && M.Wi.postRender(() => i(t, e));
                          });
                      }
                    )),
                    nE("down", (t, e) => {
                      this.startPress(t, e);
                    }));
                }),
                e = eT(this.node.current, "blur", () => {
                  this.isPressing &&
                    nE("cancel", (t, e) => this.cancelPress(t, e));
                });
              this.removeAccessibleListeners = (0, tY.z)(t, e);
            });
        }
        startPress(t, e) {
          this.isPressing = !0;
          let { onTapStart: i, whileTap: n } = this.node.getProps();
          n &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            i && M.Wi.postRender(() => i(t, e));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !eF()
          );
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: i } = this.node.getProps();
          i && M.Wi.postRender(() => i(t, e));
        }
        mount() {
          let t = this.node.getProps(),
            e = eA(
              t.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(t.onTapStart || t.onPointerStart) }
            ),
            i = eT(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = (0, tY.z)(e, i);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let nC = new WeakMap(),
        nM = new WeakMap(),
        nj = (t) => {
          let e = nC.get(t.target);
          e && e(t);
        },
        nV = (t) => {
          t.forEach(nj);
        },
        nD = { some: 0, all: 1 };
      class nk extends eg {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: n = "some", once: r } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof n ? n : nD[n],
            };
          return (function (t, e, i) {
            let n = (function ({ root: t, ...e }) {
              let i = t || document;
              nM.has(i) || nM.set(i, {});
              let n = nM.get(i),
                r = JSON.stringify(e);
              return (
                n[r] ||
                  (n[r] = new IntersectionObserver(nV, { root: t, ...e })),
                n[r]
              );
            })(e);
            return (
              nC.set(t, i),
              n.observe(t),
              () => {
                nC.delete(t), n.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), r && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: n } =
                this.node.getProps(),
              s = e ? i : n;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      var nO = i(29791);
      let nL = (0, id.createContext)({});
      var nF = i(9033);
      let nB = (0, id.createContext)({ strict: !1 }),
        nI = !1;
      function nW() {
        window.MotionHandoffIsComplete = !0;
      }
      function nN(t) {
        return n(t.animate) || c.some((e) => o(t[e]));
      }
      function nU(t) {
        return !!(nN(t) || t.variants);
      }
      function n_(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let n$ = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        nz = {};
      for (let t in n$) nz[t] = { isEnabled: (e) => n$[t].some((t) => !!e[t]) };
      var nK = i(77282);
      let nY = Symbol.for("motionComponentSymbol"),
        nH = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function nX(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (nH.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      function nq(t, { style: e, vars: i }, n, r) {
        for (let s in (Object.assign(t.style, e, r && r.getProjectionStyles(n)),
        i))
          t.style.setProperty(s, i[s]);
      }
      let nZ = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function nG(t, e, i, n) {
        for (let i in (nq(t, e, void 0, n), e.attrs))
          t.setAttribute(nZ.has(i) ? i : ei(i), e.attrs[i]);
      }
      function nQ(t, { layout: e, layoutId: i }) {
        return (
          p.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!iP[t] || "opacity" === t))
        );
      }
      function nJ(t, e, i) {
        var n;
        let { style: r } = t,
          s = {};
        for (let o in r)
          (ea(r[o]) ||
            (e.style && ea(e.style[o])) ||
            nQ(o, t) ||
            (null === (n = null == i ? void 0 : i.getValue(o)) || void 0 === n
              ? void 0
              : n.liveStyle) !== void 0) &&
            (s[o] = r[o]);
        return (
          i && r && "string" == typeof r.willChange && (i.applyWillChange = !1),
          s
        );
      }
      function n0(t, e, i) {
        let n = nJ(t, e, i);
        for (let i in t)
          (ea(t[i]) || ea(e[i])) &&
            (n[
              -1 !== d.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return n;
      }
      var n1 = i(30458);
      let n5 = (t) => (e, i) => {
        let r = (0, id.useContext)(nL),
          s = (0, id.useContext)(ip.O),
          o = () =>
            (function (
              {
                applyWillChange: t = !1,
                scrapeMotionValuesFromProps: e,
                createRenderState: i,
                onMount: r,
              },
              s,
              o,
              a,
              l
            ) {
              let u = {
                latestValues: (function (t, e, i, r, s) {
                  var o;
                  let a = {},
                    l = [],
                    u =
                      r &&
                      (null === (o = t.style) || void 0 === o
                        ? void 0
                        : o.willChange) === void 0,
                    h = s(t, {});
                  for (let t in h) a[t] = iJ(h[t]);
                  let { initial: c, animate: d } = t,
                    p = nN(t),
                    f = nU(t);
                  e &&
                    f &&
                    !p &&
                    !1 !== t.inherit &&
                    (void 0 === c && (c = e.initial),
                    void 0 === d && (d = e.animate));
                  let m = !!i && !1 === i.initial,
                    v = (m = m || !1 === c) ? d : c;
                  return (
                    v &&
                      "boolean" != typeof v &&
                      !n(v) &&
                      n2(t, v, (t, e) => {
                        for (let e in t) {
                          let i = t[e];
                          if (Array.isArray(i)) {
                            let t = m ? i.length - 1 : 0;
                            i = i[t];
                          }
                          null !== i && (a[e] = i);
                        }
                        for (let t in e) a[t] = e[t];
                      }),
                    u &&
                      (d &&
                        !1 !== c &&
                        !n(d) &&
                        n2(t, d, (t) => {
                          for (let e in t)
                            !(function (t, e) {
                              let i = er(e);
                              i && (0, es.y4)(t, i);
                            })(l, e);
                        }),
                      l.length && (a.willChange = l.join(","))),
                    a
                  );
                })(s, o, a, !l && t, e),
                renderState: i(),
              };
              return r && (u.mount = (t) => r(s, t, u)), u;
            })(t, e, r, s, i);
        return i ? o() : (0, n1.h)(o);
      };
      function n2(t, e, i) {
        let n = Array.isArray(e) ? e : [e];
        for (let e = 0; e < n.length; e++) {
          let r = l(t, n[e]);
          if (r) {
            let { transitionEnd: t, transition: e, ...n } = r;
            i(n, t);
          }
        }
      }
      let n9 = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        }),
        n3 = () => ({ ...n9(), attrs: {} }),
        n4 = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        n6 = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        n8 = d.length;
      function n7(t, e, i) {
        let { style: n, vars: r, transformOrigin: s } = t,
          o = !1,
          a = !1;
        for (let t in e) {
          let i = e[t];
          if (p.has(t)) {
            o = !0;
            continue;
          }
          if ((0, k.f)(t)) {
            r[t] = i;
            continue;
          }
          {
            let e = n4(i, ta[t]);
            t.startsWith("origin") ? ((a = !0), (s[t] = e)) : (n[t] = e);
          }
        }
        if (
          (!e.transform &&
            (o || i
              ? (n.transform = (function (t, e, i) {
                  let n = "",
                    r = !0;
                  for (let s = 0; s < n8; s++) {
                    let o = d[s],
                      a = t[o];
                    if (void 0 === a) continue;
                    let l = !0;
                    if (
                      !(l =
                        "number" == typeof a
                          ? a === (o.startsWith("scale") ? 1 : 0)
                          : 0 === parseFloat(a)) ||
                      i
                    ) {
                      let t = n4(a, ta[o]);
                      if (!l) {
                        r = !1;
                        let e = n6[o] || o;
                        n += `${e}(${t}) `;
                      }
                      i && (e[o] = t);
                    }
                  }
                  return (
                    (n = n.trim()),
                    i ? (n = i(e, r ? "" : n)) : r && (n = "none"),
                    n
                  );
                })(e, t.transform, i))
              : n.transform && (n.transform = "none")),
          a)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = s;
          n.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      function rt(t, e, i) {
        return "string" == typeof t ? t : F.px.transform(e + i * t);
      }
      let re = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        ri = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function rn(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: n,
          originX: r,
          originY: s,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        h,
        c
      ) {
        if ((n7(t, u, c), h)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: d, style: p, dimensions: f } = t;
        d.transform && (f && (p.transform = d.transform), delete d.transform),
          f &&
            (void 0 !== r || void 0 !== s || p.transform) &&
            (p.transformOrigin = (function (t, e, i) {
              let n = rt(e, t.x, t.width),
                r = rt(i, t.y, t.height);
              return `${n} ${r}`;
            })(f, void 0 !== r ? r : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== e && (d.x = e),
          void 0 !== i && (d.y = i),
          void 0 !== n && (d.scale = n),
          void 0 !== o &&
            (function (t, e, i = 1, n = 0, r = !0) {
              t.pathLength = 1;
              let s = r ? re : ri;
              t[s.offset] = F.px.transform(-n);
              let o = F.px.transform(e),
                a = F.px.transform(i);
              t[s.array] = `${o} ${a}`;
            })(d, o, a, l, !1);
      }
      let rr = (t) => "string" == typeof t && "svg" === t.toLowerCase(),
        rs = {
          useVisualState: n5({
            scrapeMotionValuesFromProps: n0,
            createRenderState: n3,
            onMount: (t, e, { renderState: i, latestValues: n }) => {
              M.Wi.read(() => {
                try {
                  i.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                M.Wi.render(() => {
                  rn(i, n, rr(e.tagName), t.transformTemplate), nG(e, i);
                });
            },
          }),
        },
        ro = {
          useVisualState: n5({
            applyWillChange: !0,
            scrapeMotionValuesFromProps: nJ,
            createRenderState: n9,
          }),
        };
      function ra(t, e, i) {
        for (let n in e) ea(e[n]) || nQ(n, i) || (t[n] = e[n]);
      }
      let rl = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function ru(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          rl.has(t)
        );
      }
      let rh = (t) => !ru(t);
      try {
        (w = require("@emotion/is-prop-valid").default) &&
          (rh = (t) => (t.startsWith("on") ? !ru(t) : w(t)));
      } catch (t) {}
      let rc = { current: null },
        rd = { current: !1 },
        rp = new WeakMap(),
        rf = [...K, ts.$, J.P],
        rm = (t) => rf.find(z(t)),
        rv = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
      class rg {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
            blockInitialAnimation: r,
            visualState: s,
          },
          o = {}
        ) {
          (this.applyWillChange = !1),
            (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = Q),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = tm.X.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t),
                M.Wi.render(this.render, !1, !0));
            });
          let { latestValues: a, renderState: l } = s;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = o),
            (this.blockInitialAnimation = !!r),
            (this.isControllingVariants = nN(e)),
            (this.isVariantNode = nU(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: u, ...h } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in h) {
            let e = h[t];
            void 0 !== a[t] && ea(e) && e.set(a[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            rp.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            rd.current ||
              (function () {
                if (((rd.current = !0), nK.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (rc.current = t.matches);
                    t.addListener(e), e();
                  } else rc.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || rc.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (rp.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, M.Pn)(this.notifyUpdate),
          (0, M.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let n = p.has(t),
            r = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && M.Wi.preRender(this.notifyUpdate),
                n && this.projection && (this.projection.isTransformDirty = !0);
            }),
            s = e.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              r(), s(), i && i(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in nz) {
            let e = nz[t];
            if (!e) continue;
            let { isEnabled: i, Feature: n } = e;
            if (
              (!this.features[t] &&
                n &&
                i(this.props) &&
                (this.features[t] = new n(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : eJ();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < rv.length; e++) {
            let i = rv[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let n = t["on" + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n));
          }
          (this.prevMotionValues = (function (t, e, i) {
            for (let n in e) {
              let r = e[n],
                s = i[n];
              if (ea(r)) t.addValue(n, r);
              else if (ea(s)) t.addValue(n, (0, ee.BX)(r, { owner: t }));
              else if (s !== r) {
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r);
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, (0, ee.BX)(void 0 !== e ? e : r, { owner: t }));
                }
              }
            }
            for (let n in i) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = (0, ee.BX)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let n =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != n &&
              ("string" == typeof n && (D(n) || j(n))
                ? (n = parseFloat(n))
                : !rm(n) && J.P.test(e) && (n = th(t, e)),
              this.setBaseTarget(t, ea(n) ? n.get() : n)),
            ea(n) ? n.get() : n
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let i;
          let { initial: n } = this.props;
          if ("string" == typeof n || "object" == typeof n) {
            let r = l(
              this.props,
              n,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom
            );
            r && (i = r[t]);
          }
          if (n && void 0 !== i) return i;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || ea(r)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new iE.L()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class ry extends rg {
        constructor() {
          super(...arguments), (this.KeyframeResolver = td);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
      }
      class rx extends ry {
        constructor() {
          super(...arguments),
            (this.type = "html"),
            (this.applyWillChange = !0),
            (this.renderInstance = nq);
        }
        readValueFromInstance(t, e) {
          if (p.has(e)) {
            let t = tu(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              n = ((0, k.f)(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return ii(t, e);
        }
        build(t, e, i) {
          n7(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return nJ(t, e, i);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          ea(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      class rP extends ry {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = eJ);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (p.has(e)) {
            let t = tu(e);
            return (t && t.default) || 0;
          }
          return (e = nZ.has(e) ? e : ei(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return n0(t, e, i);
        }
        build(t, e, i) {
          rn(t, e, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, i, n) {
          nG(t, e, i, n);
        }
        mount(t) {
          (this.isSVGTag = rr(t.tagName)), super.mount(t);
        }
      }
      let rb = (function (t) {
        if ("undefined" == typeof Proxy) return t;
        let e = new Map();
        return new Proxy((...e) => t(...e), {
          get: (i, n) =>
            "create" === n ? t : (e.has(n) || e.set(n, t(n)), e.get(n)),
        });
      })(
        ((S = {
          animation: { Feature: ey },
          exit: { Feature: eP },
          inView: { Feature: nk },
          tap: { Feature: nR },
          focus: { Feature: nT },
          hover: { Feature: nS },
          pan: { Feature: ih },
          drag: { Feature: il, ProjectionNode: nb, MeasureLayout: iT },
          layout: { ProjectionNode: nb, MeasureLayout: iT },
        }),
        (T = (t, e) =>
          nX(t)
            ? new rP(e)
            : new rx(e, { allowProjection: t !== id.Fragment })),
        function (t, { forwardMotionProps: e } = { forwardMotionProps: !1 }) {
          return (function (t) {
            let {
              preloadedFeatures: e,
              createVisualElement: i,
              useRender: n,
              useVisualState: r,
              Component: s,
            } = t;
            e &&
              (function (t) {
                for (let e in t) nz[e] = { ...nz[e], ...t[e] };
              })(e);
            let a = (0, id.forwardRef)(function (t, e) {
              var a;
              let l;
              let u = {
                  ...(0, id.useContext)(nO._),
                  ...t,
                  layoutId: (function (t) {
                    let { layoutId: e } = t,
                      i = (0, id.useContext)(im.p).id;
                    return i && void 0 !== e ? i + "-" + e : e;
                  })(t),
                },
                { isStatic: h } = u,
                c = (function (t) {
                  let { initial: e, animate: i } = (function (t, e) {
                    if (nN(t)) {
                      let { initial: e, animate: i } = t;
                      return {
                        initial: !1 === e || o(e) ? e : void 0,
                        animate: o(i) ? i : void 0,
                      };
                    }
                    return !1 !== t.inherit ? e : {};
                  })(t, (0, id.useContext)(nL));
                  return (0, id.useMemo)(
                    () => ({ initial: e, animate: i }),
                    [n_(e), n_(i)]
                  );
                })(t),
                d = r(t, h);
              if (!h && nK.j) {
                (0, id.useContext)(nB).strict;
                let t = (function (t) {
                  let { drag: e, layout: i } = nz;
                  if (!e && !i) return {};
                  let n = { ...e, ...i };
                  return {
                    MeasureLayout:
                      (null == e ? void 0 : e.isEnabled(t)) ||
                      (null == i ? void 0 : i.isEnabled(t))
                        ? n.MeasureLayout
                        : void 0,
                    ProjectionNode: n.ProjectionNode,
                  };
                })(u);
                (l = t.MeasureLayout),
                  (c.visualElement = (function (t, e, i, n, r) {
                    var s;
                    let { visualElement: o } = (0, id.useContext)(nL),
                      a = (0, id.useContext)(nB),
                      l = (0, id.useContext)(ip.O),
                      u = (0, id.useContext)(nO._).reducedMotion,
                      h = (0, id.useRef)();
                    (n = n || a.renderer),
                      !h.current &&
                        n &&
                        (h.current = n(t, {
                          visualState: e,
                          parent: o,
                          props: i,
                          presenceContext: l,
                          blockInitialAnimation: !!l && !1 === l.initial,
                          reducedMotionConfig: u,
                        }));
                    let c = h.current,
                      d = (0, id.useContext)(iv);
                    c &&
                      !c.projection &&
                      r &&
                      ("html" === c.type || "svg" === c.type) &&
                      (function (t, e, i, n) {
                        let {
                          layoutId: r,
                          layout: s,
                          drag: o,
                          dragConstraints: a,
                          layoutScroll: l,
                          layoutRoot: u,
                        } = e;
                        (t.projection = new i(
                          t.latestValues,
                          e["data-framer-portal-id"]
                            ? void 0
                            : (function t(e) {
                                if (e)
                                  return !1 !== e.options.allowProjection
                                    ? e.projection
                                    : t(e.parent);
                              })(t.parent)
                        )),
                          t.projection.setOptions({
                            layoutId: r,
                            layout: s,
                            alwaysMeasureLayout: !!o || (a && eB(a)),
                            visualElement: t,
                            animationType: "string" == typeof s ? s : "both",
                            initialPromotionConfig: n,
                            layoutScroll: l,
                            layoutRoot: u,
                          });
                      })(h.current, i, r, d),
                      (0, id.useInsertionEffect)(() => {
                        c && c.update(i, l);
                      });
                    let p = i[en],
                      f = (0, id.useRef)(
                        !!p &&
                          !window.MotionHandoffIsComplete &&
                          (null === (s = window.MotionHasOptimisedAnimation) ||
                          void 0 === s
                            ? void 0
                            : s.call(window, p))
                      );
                    return (
                      (0, nF.L)(() => {
                        c &&
                          (c.updateFeatures(),
                          ib.render(c.render),
                          f.current &&
                            c.animationState &&
                            c.animationState.animateChanges());
                      }),
                      (0, id.useEffect)(() => {
                        c &&
                          (!f.current &&
                            c.animationState &&
                            c.animationState.animateChanges(),
                          (f.current = !1),
                          nI || ((nI = !0), queueMicrotask(nW)));
                      }),
                      c
                    );
                  })(s, d, u, i, t.ProjectionNode));
              }
              return (0, ic.jsxs)(nL.Provider, {
                value: c,
                children: [
                  l && c.visualElement
                    ? (0, ic.jsx)(l, { visualElement: c.visualElement, ...u })
                    : null,
                  n(
                    s,
                    t,
                    ((a = c.visualElement),
                    (0, id.useCallback)(
                      (t) => {
                        t && d.mount && d.mount(t),
                          a && (t ? a.mount(t) : a.unmount()),
                          e &&
                            ("function" == typeof e
                              ? e(t)
                              : eB(e) && (e.current = t));
                      },
                      [a]
                    )),
                    d,
                    h,
                    c.visualElement
                  ),
                ],
              });
            });
            return (a[nY] = s), a;
          })({
            ...(nX(t) ? rs : ro),
            preloadedFeatures: S,
            useRender: (function (t = !1) {
              return (e, i, n, { latestValues: r }, s) => {
                let o = (
                    nX(e)
                      ? function (t, e, i, n) {
                          let r = (0, id.useMemo)(() => {
                            let i = n3();
                            return (
                              rn(i, e, rr(n), t.transformTemplate),
                              { ...i.attrs, style: { ...i.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            ra(e, t.style, t), (r.style = { ...e, ...r.style });
                          }
                          return r;
                        }
                      : function (t, e) {
                          let i = {},
                            n = (function (t, e) {
                              let i = t.style || {},
                                n = {};
                              return (
                                ra(n, i, t),
                                Object.assign(
                                  n,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, id.useMemo)(() => {
                                      let i = n9();
                                      return (
                                        n7(i, e, t),
                                        Object.assign({}, i.vars, i.style)
                                      );
                                    }, [e]);
                                  })(t, e)
                                ),
                                n
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((i.draggable = !1),
                              (n.userSelect =
                                n.WebkitUserSelect =
                                n.WebkitTouchCallout =
                                  "none"),
                              (n.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (i.tabIndex = 0),
                            (i.style = n),
                            i
                          );
                        }
                  )(i, r, s, e),
                  a = (function (t, e, i) {
                    let n = {};
                    for (let r in t)
                      ("values" !== r || "object" != typeof t.values) &&
                        (rh(r) ||
                          (!0 === i && ru(r)) ||
                          (!e && !ru(r)) ||
                          (t.draggable && r.startsWith("onDrag"))) &&
                        (n[r] = t[r]);
                    return n;
                  })(i, "string" == typeof e, t),
                  l = e !== id.Fragment ? { ...a, ...o, ref: n } : {},
                  { children: u } = i,
                  h = (0, id.useMemo)(() => (ea(u) ? u.get() : u), [u]);
                return (0, id.createElement)(e, { ...l, children: h });
              };
            })(e),
            createVisualElement: T,
            Component: t,
          });
        })
      );
    },
    61534: function (t, e, i) {
      i.d(e, {
        f: function () {
          return r;
        },
        t: function () {
          return o;
        },
      });
      let n = (t) => (e) => "string" == typeof e && e.startsWith(t),
        r = n("--"),
        s = n("var(--"),
        o = (t) => !!s(t) && a.test(t.split("/*")[0].trim()),
        a =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    565: function (t, e, i) {
      i.d(e, {
        c: function () {
          return n;
        },
      });
      let n = { skipAnimations: !1, useManualTiming: !1 };
    },
    28746: function (t, e, i) {
      function n(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function r(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      i.d(e, {
        cl: function () {
          return r;
        },
        y4: function () {
          return n;
        },
      });
    },
    51506: function (t, e, i) {
      i.d(e, {
        u: function () {
          return n;
        },
      });
      let n = (t, e, i) => (i > e ? e : i < t ? t : i);
    },
    19047: function (t, e, i) {
      i.d(e, {
        K: function () {
          return r;
        },
        k: function () {
          return s;
        },
      });
      var n = i(69276);
      let r = n.Z,
        s = n.Z;
    },
    42548: function (t, e, i) {
      i.d(e, {
        s: function () {
          return u;
        },
      });
      var n = i(19047),
        r = i(51506),
        s = i(89654),
        o = i(33217),
        a = i(69276),
        l = i(5389);
      function u(t, e, { clamp: i = !0, ease: u, mixer: h } = {}) {
        let c = t.length;
        if (
          ((0, n.k)(
            c === e.length,
            "Both input and output ranges must be the same length"
          ),
          1 === c)
        )
          return () => e[0];
        if (2 === c && t[0] === t[1]) return () => e[1];
        t[0] > t[c - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let d = (function (t, e, i) {
            let n = [],
              r = i || l.C,
              o = t.length - 1;
            for (let i = 0; i < o; i++) {
              let o = r(t[i], t[i + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[i] || a.Z : e;
                o = (0, s.z)(t, o);
              }
              n.push(o);
            }
            return n;
          })(e, u, h),
          p = d.length,
          f = (e) => {
            let i = 0;
            if (p > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
            let n = (0, o.Y)(t[i], t[i + 1], e);
            return d[i](n);
          };
        return i ? (e) => f((0, r.u)(t[0], t[c - 1], e)) : f;
      }
    },
    77282: function (t, e, i) {
      i.d(e, {
        j: function () {
          return n;
        },
      });
      let n = "undefined" != typeof window;
    },
    5389: function (t, e, i) {
      i.d(e, {
        C: function () {
          return A;
        },
      });
      var n = i(75004),
        r = i(19047);
      function s(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      var o = i(45778),
        a = i(91583),
        l = i(598);
      function u(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let h = (t, e, i) => {
          let n = t * t,
            r = i * (e * e - n) + n;
          return r < 0 ? 0 : Math.sqrt(r);
        },
        c = [o.$, a.m, l.J],
        d = (t) => c.find((e) => e.test(t));
      function p(t) {
        let e = d(t);
        if (
          ((0, r.K)(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === l.J &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
              (t /= 360), (i /= 100);
              let r = 0,
                o = 0,
                a = 0;
              if ((e /= 100)) {
                let n = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  l = 2 * i - n;
                (r = s(l, n, t + 1 / 3)),
                  (o = s(l, n, t)),
                  (a = s(l, n, t - 1 / 3));
              } else r = o = a = i;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * o),
                blue: Math.round(255 * a),
                alpha: n,
              };
            })(i)),
          i
        );
      }
      let f = (t, e) => {
        let i = p(t),
          r = p(e);
        if (!i || !r) return u(t, e);
        let s = { ...i };
        return (t) => (
          (s.red = h(i.red, r.red, t)),
          (s.green = h(i.green, r.green, t)),
          (s.blue = h(i.blue, r.blue, t)),
          (s.alpha = (0, n.t)(i.alpha, r.alpha, t)),
          a.m.transform(s)
        );
      };
      var m = i(89654),
        v = i(50146),
        g = i(83646),
        y = i(61534);
      let x = new Set(["none", "hidden"]);
      function P(t, e) {
        return (i) => (0, n.t)(t, e, i);
      }
      function b(t) {
        return "number" == typeof t
          ? P
          : "string" == typeof t
          ? (0, y.t)(t)
            ? u
            : v.$.test(t)
            ? f
            : T
          : Array.isArray(t)
          ? w
          : "object" == typeof t
          ? v.$.test(t)
            ? f
            : S
          : u;
      }
      function w(t, e) {
        let i = [...t],
          n = i.length,
          r = t.map((t, i) => b(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < n; e++) i[e] = r[e](t);
          return i;
        };
      }
      function S(t, e) {
        let i = { ...t, ...e },
          n = {};
        for (let r in i)
          void 0 !== t[r] && void 0 !== e[r] && (n[r] = b(t[r])(t[r], e[r]));
        return (t) => {
          for (let e in n) i[e] = n[e](t);
          return i;
        };
      }
      let T = (t, e) => {
        let i = g.P.createTransformer(e),
          n = (0, g.V)(t),
          s = (0, g.V)(e);
        return n.indexes.var.length === s.indexes.var.length &&
          n.indexes.color.length === s.indexes.color.length &&
          n.indexes.number.length >= s.indexes.number.length
          ? (x.has(t) && !s.values.length) || (x.has(e) && !n.values.length)
            ? x.has(t)
              ? (i) => (i <= 0 ? t : e)
              : (i) => (i >= 1 ? e : t)
            : (0, m.z)(
                w(
                  (function (t, e) {
                    var i;
                    let n = [],
                      r = { color: 0, var: 0, number: 0 };
                    for (let s = 0; s < e.values.length; s++) {
                      let o = e.types[s],
                        a = t.indexes[o][r[o]],
                        l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                      (n[s] = l), r[o]++;
                    }
                    return n;
                  })(n, s),
                  s.values
                ),
                i
              )
          : ((0, r.K)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            u(t, e));
      };
      function A(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? (0, n.t)(t, e, i)
          : b(t)(t, e);
      }
    },
    75004: function (t, e, i) {
      i.d(e, {
        t: function () {
          return n;
        },
      });
      let n = (t, e, i) => t + (e - t) * i;
    },
    69276: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return n;
        },
      });
      let n = (t) => t;
    },
    40839: function (t, e, i) {
      i.d(e, {
        Y: function () {
          return s;
        },
      });
      var n = i(75004),
        r = i(33217);
      function s(t) {
        let e = [0];
        return (
          !(function (t, e) {
            let i = t[t.length - 1];
            for (let s = 1; s <= e; s++) {
              let o = (0, r.Y)(0, e, s);
              t.push((0, n.t)(i, 1, o));
            }
          })(e, t.length - 1),
          e
        );
      }
    },
    89654: function (t, e, i) {
      i.d(e, {
        z: function () {
          return r;
        },
      });
      let n = (t, e) => (i) => e(t(i)),
        r = (...t) => t.reduce(n);
    },
    33217: function (t, e, i) {
      i.d(e, {
        Y: function () {
          return n;
        },
      });
      let n = (t, e, i) => {
        let n = e - t;
        return 0 === n ? 1 : (i - t) / n;
      };
    },
    72428: function (t, e, i) {
      i.d(e, {
        L: function () {
          return r;
        },
      });
      var n = i(28746);
      class r {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, n.y4)(this.subscriptions, t),
            () => (0, n.cl)(this.subscriptions, t)
          );
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let r = 0; r < n; r++) {
                let n = this.subscriptions[r];
                n && n(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    30458: function (t, e, i) {
      i.d(e, {
        h: function () {
          return r;
        },
      });
      var n = i(2265);
      function r(t) {
        let e = (0, n.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    9033: function (t, e, i) {
      i.d(e, {
        L: function () {
          return r;
        },
      });
      var n = i(2265);
      let r = i(77282).j ? n.useLayoutEffect : n.useEffect;
    },
    83476: function (t, e, i) {
      i.d(e, {
        R: function () {
          return n;
        },
      });
      function n(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
    },
    20804: function (t, e, i) {
      i.d(e, {
        BX: function () {
          return h;
        },
        Hg: function () {
          return u;
        },
        S1: function () {
          return l;
        },
      });
      var n = i(72428),
        r = i(83476),
        s = i(59993),
        o = i(86219);
      let a = (t) => !isNaN(parseFloat(t)),
        l = { current: void 0 };
      class u {
        constructor(t, e = {}) {
          (this.version = "11.5.6"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = s.X.now();
              this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = s.X.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = a(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new n.L());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  o.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = s.X.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, r.R)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function h(t, e) {
        return new u(t, e);
      }
    },
    45778: function (t, e, i) {
      i.d(e, {
        $: function () {
          return r;
        },
      });
      var n = i(91583);
      let r = {
        test: (0, i(93338).i)("#"),
        parse: function (t) {
          let e = "",
            i = "",
            n = "",
            r = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (i = t.substring(3, 5)),
                (n = t.substring(5, 7)),
                (r = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (i = t.substring(2, 3)),
                (n = t.substring(3, 4)),
                (r = t.substring(4, 5)),
                (e += e),
                (i += i),
                (n += n),
                (r += r)),
            {
              red: parseInt(e, 16),
              green: parseInt(i, 16),
              blue: parseInt(n, 16),
              alpha: r ? parseInt(r, 16) / 255 : 1,
            }
          );
        },
        transform: n.m.transform,
      };
    },
    598: function (t, e, i) {
      i.d(e, {
        J: function () {
          return a;
        },
      });
      var n = i(40783),
        r = i(75480),
        s = i(47292),
        o = i(93338);
      let a = {
        test: (0, o.i)("hsl", "hue"),
        parse: (0, o.d)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: i, alpha: o = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          r.aQ.transform((0, s.Nw)(e)) +
          ", " +
          r.aQ.transform((0, s.Nw)(i)) +
          ", " +
          (0, s.Nw)(n.Fq.transform(o)) +
          ")",
      };
    },
    50146: function (t, e, i) {
      i.d(e, {
        $: function () {
          return a;
        },
      });
      var n = i(47292),
        r = i(45778),
        s = i(598),
        o = i(91583);
      let a = {
        test: (t) => o.m.test(t) || r.$.test(t) || s.J.test(t),
        parse: (t) =>
          o.m.test(t)
            ? o.m.parse(t)
            : s.J.test(t)
            ? s.J.parse(t)
            : r.$.parse(t),
        transform: (t) =>
          (0, n.HD)(t)
            ? t
            : t.hasOwnProperty("red")
            ? o.m.transform(t)
            : s.J.transform(t),
      };
    },
    91583: function (t, e, i) {
      i.d(e, {
        m: function () {
          return u;
        },
      });
      var n = i(51506),
        r = i(40783),
        s = i(47292),
        o = i(93338);
      let a = (t) => (0, n.u)(0, 255, t),
        l = { ...r.Rx, transform: (t) => Math.round(a(t)) },
        u = {
          test: (0, o.i)("rgb", "red"),
          parse: (0, o.d)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(i) +
            ", " +
            (0, s.Nw)(r.Fq.transform(n)) +
            ")",
        };
    },
    93338: function (t, e, i) {
      i.d(e, {
        d: function () {
          return s;
        },
        i: function () {
          return r;
        },
      });
      var n = i(47292);
      let r = (t, e) => (i) =>
          !!(
            ((0, n.HD)(i) && n.mj.test(i) && i.startsWith(t)) ||
            (e && !(0, n.Rw)(i) && Object.prototype.hasOwnProperty.call(i, e))
          ),
        s = (t, e, i) => (r) => {
          if (!(0, n.HD)(r)) return r;
          let [s, o, a, l] = r.match(n.KP);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(o),
            [i]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    83646: function (t, e, i) {
      i.d(e, {
        P: function () {
          return d;
        },
        V: function () {
          return l;
        },
      });
      var n = i(50146),
        r = i(47292);
      let s = "number",
        o = "color",
        a =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function l(t) {
        let e = t.toString(),
          i = [],
          r = { color: [], number: [], var: [] },
          l = [],
          u = 0,
          h = e
            .replace(
              a,
              (t) => (
                n.$.test(t)
                  ? (r.color.push(u), l.push(o), i.push(n.$.parse(t)))
                  : t.startsWith("var(")
                  ? (r.var.push(u), l.push("var"), i.push(t))
                  : (r.number.push(u), l.push(s), i.push(parseFloat(t))),
                ++u,
                "${}"
              )
            )
            .split("${}");
        return { values: i, split: h, indexes: r, types: l };
      }
      function u(t) {
        return l(t).values;
      }
      function h(t) {
        let { split: e, types: i } = l(t),
          a = e.length;
        return (t) => {
          let l = "";
          for (let u = 0; u < a; u++)
            if (((l += e[u]), void 0 !== t[u])) {
              let e = i[u];
              e === s
                ? (l += (0, r.Nw)(t[u]))
                : e === o
                ? (l += n.$.transform(t[u]))
                : (l += t[u]);
            }
          return l;
        };
      }
      let c = (t) => ("number" == typeof t ? 0 : t),
        d = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              (0, r.HD)(t) &&
              ((null === (e = t.match(r.KP)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(r.dA)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: u,
          createTransformer: h,
          getAnimatableNone: function (t) {
            let e = u(t);
            return h(t)(e.map(c));
          },
        };
    },
    40783: function (t, e, i) {
      i.d(e, {
        Fq: function () {
          return s;
        },
        Rx: function () {
          return r;
        },
        bA: function () {
          return o;
        },
      });
      var n = i(51506);
      let r = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        s = { ...r, transform: (t) => (0, n.u)(0, 1, t) },
        o = { ...r, default: 1 };
    },
    75480: function (t, e, i) {
      i.d(e, {
        $C: function () {
          return h;
        },
        RW: function () {
          return s;
        },
        aQ: function () {
          return o;
        },
        px: function () {
          return a;
        },
        vh: function () {
          return l;
        },
        vw: function () {
          return u;
        },
      });
      var n = i(47292);
      let r = (t) => ({
          test: (e) =>
            (0, n.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        s = r("deg"),
        o = r("%"),
        a = r("px"),
        l = r("vh"),
        u = r("vw"),
        h = {
          ...o,
          parse: (t) => o.parse(t) / 100,
          transform: (t) => o.transform(100 * t),
        };
    },
    47292: function (t, e, i) {
      i.d(e, {
        HD: function () {
          return a;
        },
        KP: function () {
          return r;
        },
        Nw: function () {
          return n;
        },
        Rw: function () {
          return l;
        },
        dA: function () {
          return s;
        },
        mj: function () {
          return o;
        },
      });
      let n = (t) => Math.round(1e5 * t) / 1e5,
        r = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        s =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        o =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      function a(t) {
        return "string" == typeof t;
      }
      function l(t) {
        return null == t;
      }
    },
    91810: function (t, e, i) {
      i.d(e, {
        w_: function () {
          return h;
        },
      });
      var n = i(2265),
        r = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        s = n.createContext && n.createContext(r),
        o = ["attr", "size", "title"];
      function a() {
        return (a = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i)
                  Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function l(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function u(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(i), !0).forEach(function (e) {
                var n, r;
                (n = e),
                  (r = i[e]),
                  (n = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != typeof t || !t) return t;
                      var i = t[Symbol.toPrimitive];
                      if (void 0 !== i) {
                        var n = i.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == typeof e ? e : e + "";
                  })(n)) in t
                    ? Object.defineProperty(t, n, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[n] = r);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : l(Object(i)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(i, e)
                );
              });
        }
        return t;
      }
      function h(t) {
        return (e) =>
          n.createElement(
            c,
            a({ attr: u({}, t.attr) }, e),
            (function t(e) {
              return (
                e &&
                e.map((e, i) =>
                  n.createElement(e.tag, u({ key: i }, e.attr), t(e.child))
                )
              );
            })(t.child)
          );
      }
      function c(t) {
        var e = (e) => {
          var i,
            { attr: r, size: s, title: l } = t,
            h = (function (t, e) {
              if (null == t) return {};
              var i,
                n,
                r = (function (t, e) {
                  if (null == t) return {};
                  var i = {};
                  for (var n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                      if (e.indexOf(n) >= 0) continue;
                      i[n] = t[n];
                    }
                  return i;
                })(t, e);
              if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                for (n = 0; n < s.length; n++)
                  (i = s[n]),
                    !(e.indexOf(i) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(t, i) &&
                      (r[i] = t[i]);
              }
              return r;
            })(t, o),
            c = s || e.size || "1em";
          return (
            e.className && (i = e.className),
            t.className && (i = (i ? i + " " : "") + t.className),
            n.createElement(
              "svg",
              a(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                e.attr,
                r,
                h,
                {
                  className: i,
                  style: u(u({ color: t.color || e.color }, e.style), t.style),
                  height: c,
                  width: c,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              l && n.createElement("title", null, l),
              t.children
            )
          );
        };
        return void 0 !== s
          ? n.createElement(s.Consumer, null, (t) => e(t))
          : e(r);
      }
    },
    39099: function (t, e, i) {
      i.d(e, {
        Ue: function () {
          return d;
        },
      });
      let n = (t) => {
          let e;
          let i = new Set(),
            n = (t, n) => {
              let r = "function" == typeof t ? t(e) : t;
              if (!Object.is(r, e)) {
                let t = e;
                (e = (null != n ? n : "object" != typeof r || null === r)
                  ? r
                  : Object.assign({}, e, r)),
                  i.forEach((i) => i(e, t));
              }
            },
            r = () => e,
            s = {
              setState: n,
              getState: r,
              getInitialState: () => o,
              subscribe: (t) => (i.add(t), () => i.delete(t)),
              destroy: () => {
                console.warn(
                  "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
                ),
                  i.clear();
              },
            },
            o = (e = t(n, r, s));
          return s;
        },
        r = (t) => (t ? n(t) : n);
      var s = i(2265),
        o = i(81290);
      let { useDebugValue: a } = s,
        { useSyncExternalStoreWithSelector: l } = o,
        u = !1,
        h = (t) => t,
        c = (t) => {
          "function" != typeof t &&
            console.warn(
              "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
            );
          let e = "function" == typeof t ? r(t) : t,
            i = (t, i) =>
              (function (t, e = h, i) {
                i &&
                  !u &&
                  (console.warn(
                    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
                  ),
                  (u = !0));
                let n = l(
                  t.subscribe,
                  t.getState,
                  t.getServerState || t.getInitialState,
                  e,
                  i
                );
                return a(n), n;
              })(e, t, i);
          return Object.assign(i, e), i;
        },
        d = (t) => (t ? c(t) : c);
    },
  },
]);
