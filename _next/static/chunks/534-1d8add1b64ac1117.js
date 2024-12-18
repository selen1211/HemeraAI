(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [534],
  {
    35883: function () {},
    46601: function () {},
    89214: function () {},
    85568: function () {},
    52361: function () {},
    94616: function () {},
    74909: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return H;
        },
      });
      var a,
        r,
        s,
        i = n(57437),
        l = n(2265),
        o = {
          src: "/_next/static/media/logo.63fa83f1.png",
          height: 50,
          width: 26,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAMAAADp7a43AAAAHlBMVEVY4MBb6dRb59JX5dBe79pe6dRd7Nhc6NNd7Ndc6tbE9lOFAAAACnRSTlMCNVArzh2EZuulDaoUIQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACNJREFUeJwVxrcRACAQACA+GfZf2JMKbERj/tygzhKVSw8SDwXxAEu0JLLFAAAAAElFTkSuQmCC",
          blurWidth: 4,
          blurHeight: 8,
        },
        d = n(66648),
        c = n(37692),
        p = n(14536),
        u = n(58171),
        h = n.n(u);
      let { WAValidator: x } = n(26826);
      ((a = r || (r = {})).addressConvertor = (e) =>
        (e || "").length < 10
          ? e || ""
          : "".concat(e.slice(0, 4), "...").concat(e.slice(e.length - 4))),
        (a.contract = (e, t, n) => new e.eth.Contract(t, n)),
        (a.isEthereumAddress = (e) =>
          !!("string" == typeof e && /^(0x)?[0-9a-f]{40}$/i.test(e))),
        (a.addZeros = (e) => (0 === e ? "1" : "1" + "0".repeat(e))),
        (a.zero = new (h())(0)),
        (a.negative1 = new (h())(-1)),
        (a.getValueOfUnit = (e) => {
          var t = a.addZeros(e);
          if ("string" != typeof t)
            throw Error(
              "[ethjs-unit] the unit provided " +
                e +
                " doesn't exists, please use the one of the following units " +
                JSON.stringify(t, null, 2)
            );
          return new (h())(t, 10);
        }),
        (a.numberToString = (e) => {
          if ("string" == typeof e) {
            if (!e.match(/^-?[0-9.]+$/))
              throw Error(
                "while converting number to string, invalid number value '" +
                  e +
                  "', should be a number matching (^-?[0-9.]+)."
              );
            return e;
          }
          if ("number" == typeof e) return String(e);
          if (
            "object" == typeof e &&
            e.toString &&
            (e.toTwos || e.dividedToIntegerBy)
          )
            return e.toPrecision ? String(e.toPrecision()) : e.toString(10);
          throw Error(
            "while converting number to string, invalid number value '" +
              e +
              "' type " +
              typeof e +
              "."
          );
        }),
        (a.toWei = (e) => {
          switch (e) {
            case "1":
              return "wei";
            case "3":
              return "Kwei";
            case "6":
              return "mwei";
            case "9":
              return "gwei";
            case "12":
              return "szabo";
            case "18":
            default:
              return "ether";
            case "21":
              return "kether";
            case "24":
              return "mether";
            case "27":
              return "gether";
            case "30":
              return "tether";
          }
        }),
        (a.getEtherBalance = async (e, t) =>
          +e.utils.fromWei(await e.eth.getBalance(t), "ether")),
        (a.validateAddress = (e, t) => x.validate(e, t)),
        (a.truncateAddress = (e) => {
          if (!e) return "No Account";
          let t = e.match(/^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{2})$/);
          return t ? "".concat(t[1], "…").concat(t[2]) : e;
        }),
        (a.truncateEthAddress = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
          if (e.length < 2 + 2 * t)
            throw Error("Address too short to truncate");
          if ("0x" !== e.substring(0, 2))
            throw Error("Invalid Ethereum address");
          return ""
            .concat(e.substring(0, 2 + t), "...")
            .concat(e.substring(e.length - t));
        });
      var C = r,
        g = n(13632),
        f = n(6952);
      (s || (s = {})).authenticateUser = async (e) => {
        try {
          return await g.Z.post(f.q.AUTH, { walletAddress: e });
        } catch (e) {
          throw (console.error("Error authenticating user:", e), e);
        }
      };
      var m = s,
        y = n(88726),
        w = n(97118),
        j = n(15263),
        v = n(16463),
        A = n(87138),
        b = n(75775),
        _ = n(34446),
        E = n(23051),
        k = n(69824),
        T = (e) => {
          let { setShowDrawer: t } = e,
            n = (0, v.usePathname)(),
            a = (0, p.k_)(),
            { address: r, isConnected: s } = (0, p.Zc)();
          return (0, i.jsx)(b.E.div, {
            className:
              "fixed flex justify-end items-center inset-0 w-full h-screen bg-black bg-opacity-40 backdrop-blur-sm z-[200]",
            onClick: () => t(!1),
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.15 },
            children: (0, i.jsxs)(b.E.div, {
              initial: { x: "100%" },
              animate: { x: 0 },
              exit: { x: "100%" },
              transition: { duration: 0.25 },
              className:
                "h-full bg-[#0C1A1F]  border-l-2 border-[#3A464A]  p-4 w-60 ",
              onClick: (e) => e.stopPropagation(),
              children: [
                (0, i.jsx)(k.QAE, {
                  className: "text-white text-2xl cursor-pointer",
                  onClick: () => t(!1),
                }),
                "/interact-agent" !== n &&
                  (0, i.jsxs)("div", {
                    className: "flex flex-col mt-8 gap-4",
                    children: [
                      (0, i.jsx)(A.default, {
                        href: "/deploy-agent",
                        children: (0, i.jsxs)("div", {
                          className: "relative rounded-lg py-3 px-3 isolate",
                          onClick: () => t(!1),
                          children: [
                            (0, i.jsxs)("p", {
                              className:
                                "text-white flex items-center cursor-pointer justify-center flex-col gap-2 ",
                              children: [
                                "/deploy-agent" === n
                                  ? (0, i.jsxs)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "26",
                                      height: "26",
                                      viewBox: "0 0 26 26",
                                      fill: "none",
                                      children: [
                                        (0, i.jsx)("g", {
                                          clipPath: "url(#clip0_264_184)",
                                          children: (0, i.jsx)("g", {
                                            filter: "url(#filter0_i_264_184)",
                                            children: (0, i.jsx)("path", {
                                              d: "M22.544 7.90749L18.2496 3.61402C18.1068 3.47121 17.9373 3.35793 17.7508 3.28064C17.5642 3.20335 17.3642 3.16357 17.1623 3.16357C16.9604 3.16357 16.7604 3.20335 16.5738 3.28064C16.3873 3.35793 16.2178 3.47121 16.075 3.61402L4.22568 15.4633C4.08229 15.6056 3.96861 15.7749 3.89124 15.9615C3.81387 16.1481 3.77436 16.3482 3.775 16.5502V20.8446C3.775 21.2524 3.93699 21.6434 4.22532 21.9318C4.51366 22.2201 4.90473 22.3821 5.3125 22.3821H21.4563C21.6601 22.3821 21.8557 22.3011 21.9998 22.1569C22.144 22.0128 22.225 21.8172 22.225 21.6133C22.225 21.4095 22.144 21.2139 21.9998 21.0698C21.8557 20.9256 21.6601 20.8446 21.4563 20.8446H14.395C13.4306 20.8446 12.9476 19.6785 13.6296 18.9966L22.544 10.0821C22.6868 9.93932 22.8001 9.76981 22.8774 9.58325C22.9547 9.39669 22.9945 9.19673 22.9945 8.99479C22.9945 8.79285 22.9547 8.5929 22.8774 8.40633C22.8001 8.21977 22.6868 8.05027 22.544 7.90749ZM19.9156 10.536C19.4928 10.9588 18.8073 10.9587 18.3845 10.5359L15.6218 7.77257C15.1992 7.34979 15.1992 6.66443 15.6219 6.2417L16.3972 5.46641C16.82 5.04361 17.5055 5.04365 17.9283 5.46649L20.6909 8.22979C21.1136 8.65257 21.1136 9.33794 20.6909 9.76066L19.9156 10.536Z",
                                              fill: "#46B2A3",
                                            }),
                                          }),
                                        }),
                                        (0, i.jsxs)("defs", {
                                          children: [
                                            (0, i.jsxs)("filter", {
                                              id: "filter0_i_264_184",
                                              x: "3.77499",
                                              y: "3.16357",
                                              width: "19.3277",
                                              height: "19.435",
                                              filterUnits: "userSpaceOnUse",
                                              "color-interpolation-filters":
                                                "sRGB",
                                              children: [
                                                (0, i.jsx)("feFlood", {
                                                  "flood-opacity": "0",
                                                  result: "BackgroundImageFix",
                                                }),
                                                (0, i.jsx)("feBlend", {
                                                  mode: "normal",
                                                  in: "SourceGraphic",
                                                  in2: "BackgroundImageFix",
                                                  result: "shape",
                                                }),
                                                (0, i.jsx)("feColorMatrix", {
                                                  in: "SourceAlpha",
                                                  type: "matrix",
                                                  values:
                                                    "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                                  result: "hardAlpha",
                                                }),
                                                (0, i.jsx)("feOffset", {
                                                  dx: "0.108255",
                                                  dy: "0.21651",
                                                }),
                                                (0, i.jsx)("feGaussianBlur", {
                                                  stdDeviation: "2.70638",
                                                }),
                                                (0, i.jsx)("feComposite", {
                                                  in2: "hardAlpha",
                                                  operator: "arithmetic",
                                                  k2: "-1",
                                                  k3: "1",
                                                }),
                                                (0, i.jsx)("feColorMatrix", {
                                                  type: "matrix",
                                                  values:
                                                    "0 0 0 0 0.9125 0 0 0 0 0.927083 0 0 0 0 1 0 0 0 0.7 0",
                                                }),
                                                (0, i.jsx)("feBlend", {
                                                  mode: "normal",
                                                  in2: "shape",
                                                  result:
                                                    "effect1_innerShadow_264_184",
                                                }),
                                              ],
                                            }),
                                            (0, i.jsx)("clipPath", {
                                              id: "clip0_264_184",
                                              children: (0, i.jsx)("rect", {
                                                width: "24.6",
                                                height: "24.6",
                                                fill: "white",
                                                transform:
                                                  "translate(0.700012 0.857056)",
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    })
                                  : (0, i.jsxs)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "25",
                                      height: "26",
                                      viewBox: "0 0 25 26",
                                      fill: "none",
                                      children: [
                                        (0, i.jsxs)("g", {
                                          clipPath: "url(#clip0_264_207)",
                                          children: [
                                            (0, i.jsx)("path", {
                                              d: "M9.42495 21.6133H4.81245C4.60857 21.6133 4.41303 21.5323 4.26886 21.3881C4.12469 21.2439 4.0437 21.0484 4.0437 20.8445V16.5501C4.0438 16.3465 4.12466 16.1512 4.26856 16.0071L16.1188 4.15687C16.263 4.01281 16.4585 3.93188 16.6623 3.93188C16.8661 3.93188 17.0615 4.01281 17.2057 4.15687L21.5001 8.44841C21.6442 8.59257 21.7251 8.78803 21.7251 8.99183C21.7251 9.19562 21.6442 9.39108 21.5001 9.53524L9.42495 21.6133Z",
                                              stroke: "white",
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                            }),
                                            (0, i.jsx)("path", {
                                              d: "M20.9563 21.6133H9.42505",
                                              stroke: "white",
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                            }),
                                            (0, i.jsx)("path", {
                                              d: "M13.2688 7.00708L18.65 12.3883",
                                              stroke: "white",
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                            }),
                                          ],
                                        }),
                                        (0, i.jsx)("defs", {
                                          children: (0, i.jsx)("clipPath", {
                                            id: "clip0_264_207",
                                            children: (0, i.jsx)("rect", {
                                              width: "24.6",
                                              height: "24.6",
                                              fill: "white",
                                              transform:
                                                "translate(0.199951 0.857056)",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                "Create Agents",
                              ],
                            }),
                            "/deploy-agent" === n &&
                              (0, i.jsx)(b.E.span, {
                                layoutId: "navbox",
                                transition: { type: "spring", damping: 12 },
                                className:
                                  "bg-[#3C3B414D] z-[-1]  w-full rounded-lg h-full absolute top-0 left-0",
                              }),
                            "/" === n &&
                              (0, i.jsx)(b.E.span, {
                                layoutId: "navLine",
                                transition: {
                                  type: "spring",
                                  delay: 0.2,
                                  damping: 11,
                                },
                                className:
                                  "bg-navGradient h-[3px] z-[-1]  w-full rounded-lg  absolute bottom-0 left-0",
                              }),
                          ],
                        }),
                      }),
                      (0, i.jsx)(A.default, {
                        href: "/my-agents",
                        children: (0, i.jsxs)("div", {
                          className: "relative rounded-lg py-3 px-3 isolate",
                          onClick: () => t(!1),
                          children: [
                            (0, i.jsxs)("p", {
                              className:
                                "text-white flex items-center cursor-pointer justify-center flex-col gap-2 ",
                              children: [
                                "/my-agents" === n
                                  ? (0, i.jsx)(c.irA, {
                                      className: "text-2xl !text-[#46B2A3]",
                                    })
                                  : (0, i.jsx)(c.lb0, {
                                      className: "text-2xl",
                                    }),
                                "My Agents",
                              ],
                            }),
                            "/my-agents" === n &&
                              (0, i.jsx)(b.E.span, {
                                layoutId: "navbox",
                                transition: { type: "spring", damping: 12 },
                                className:
                                  "bg-[#3C3B414D] z-[-1]  w-full rounded-lg h-full absolute top-0 left-0",
                              }),
                            "/my-agents" === n &&
                              (0, i.jsx)(b.E.span, {
                                layoutId: "navLine",
                                transition: {
                                  type: "spring",
                                  delay: 0.2,
                                  damping: 11,
                                },
                                className:
                                  "bg-navGradient h-[3px] z-[-1]  w-full rounded-lg  absolute bottom-0 left-0",
                              }),
                          ],
                        }),
                      }),
                      (0, i.jsx)(A.default, {
                        href: "/agents-list",
                        children: (0, i.jsxs)("div", {
                          className: "relative rounded-lg py-3 px-3 isolate",
                          onClick: () => t(!1),
                          children: [
                            (0, i.jsxs)("p", {
                              className:
                                "text-white flex items-center cursor-pointer justify-center flex-col gap-2 ",
                              children: [
                                "/agents-list" === n
                                  ? (0, i.jsxs)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "20",
                                      height: "20",
                                      viewBox: "0 0 20 20",
                                      fill: "none",
                                      children: [
                                        (0, i.jsx)("g", {
                                          filter: "url(#filter0_i_264_215)",
                                          children: (0, i.jsx)("path", {
                                            d: "M17.6879 0.932007H2.31289C1.90512 0.932007 1.51405 1.09399 1.22571 1.38233C0.937377 1.67067 0.775391 2.06174 0.775391 2.46951V17.8445C0.775391 18.2523 0.937377 18.6433 1.22571 18.9317C1.51405 19.22 1.90512 19.382 2.31289 19.382H17.6879C18.0957 19.382 18.4867 19.22 18.7751 18.9317C19.0634 18.6433 19.2254 18.2523 19.2254 17.8445V2.46951C19.2254 2.06174 19.0634 1.67067 18.7751 1.38233C18.4867 1.09399 18.0957 0.932007 17.6879 0.932007ZM16.1504 15.5383H3.85039C3.64651 15.5383 3.45097 15.4573 3.3068 15.3131C3.16263 15.1689 3.08164 14.9734 3.08164 14.7695C3.08164 14.5656 3.16263 14.3701 3.3068 14.2259C3.45097 14.0817 3.64651 14.0008 3.85039 14.0008H16.1504C16.3543 14.0008 16.5498 14.0817 16.694 14.2259C16.8381 14.3701 16.9191 14.5656 16.9191 14.7695C16.9191 14.9734 16.8381 15.1689 16.694 15.3131C16.5498 15.4573 16.3543 15.5383 16.1504 15.5383ZM16.1504 10.9258H3.85039C3.64651 10.9258 3.45097 10.8448 3.3068 10.7006C3.16263 10.5564 3.08164 10.3609 3.08164 10.157C3.08164 9.95312 3.16263 9.75759 3.3068 9.61342C3.45097 9.46925 3.64651 9.38826 3.85039 9.38826H16.1504C16.3543 9.38826 16.5498 9.46925 16.694 9.61342C16.8381 9.75759 16.9191 9.95312 16.9191 10.157C16.9191 10.3609 16.8381 10.5564 16.694 10.7006C16.5498 10.8448 16.3543 10.9258 16.1504 10.9258ZM16.1504 6.31326H3.85039C3.64651 6.31326 3.45097 6.23226 3.3068 6.0881C3.16263 5.94393 3.08164 5.74839 3.08164 5.54451C3.08164 5.34062 3.16263 5.14509 3.3068 5.00092C3.45097 4.85675 3.64651 4.77576 3.85039 4.77576H16.1504C16.3543 4.77576 16.5498 4.85675 16.694 5.00092C16.8381 5.14509 16.9191 5.34062 16.9191 5.54451C16.9191 5.74839 16.8381 5.94393 16.694 6.0881C16.5498 6.23226 16.3543 6.31326 16.1504 6.31326Z",
                                            fill: "#46B2A3",
                                          }),
                                        }),
                                        (0, i.jsx)("defs", {
                                          children: (0, i.jsxs)("filter", {
                                            id: "filter0_i_264_215",
                                            x: "0.775391",
                                            y: "0.932007",
                                            width: "18.5585",
                                            height: "18.6665",
                                            filterUnits: "userSpaceOnUse",
                                            "color-interpolation-filters":
                                              "sRGB",
                                            children: [
                                              (0, i.jsx)("feFlood", {
                                                "flood-opacity": "0",
                                                result: "BackgroundImageFix",
                                              }),
                                              (0, i.jsx)("feBlend", {
                                                mode: "normal",
                                                in: "SourceGraphic",
                                                in2: "BackgroundImageFix",
                                                result: "shape",
                                              }),
                                              (0, i.jsx)("feColorMatrix", {
                                                in: "SourceAlpha",
                                                type: "matrix",
                                                values:
                                                  "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                                result: "hardAlpha",
                                              }),
                                              (0, i.jsx)("feOffset", {
                                                dx: "0.108255",
                                                dy: "0.21651",
                                              }),
                                              (0, i.jsx)("feGaussianBlur", {
                                                stdDeviation: "2.70638",
                                              }),
                                              (0, i.jsx)("feComposite", {
                                                in2: "hardAlpha",
                                                operator: "arithmetic",
                                                k2: "-1",
                                                k3: "1",
                                              }),
                                              (0, i.jsx)("feColorMatrix", {
                                                type: "matrix",
                                                values:
                                                  "0 0 0 0 0.9125 0 0 0 0 0.927083 0 0 0 0 1 0 0 0 0.7 0",
                                              }),
                                              (0, i.jsx)("feBlend", {
                                                mode: "normal",
                                                in2: "shape",
                                                result:
                                                  "effect1_innerShadow_264_215",
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    })
                                  : (0, i.jsxs)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "26",
                                      height: "26",
                                      viewBox: "0 0 26 26",
                                      fill: "none",
                                      children: [
                                        (0, i.jsxs)("g", {
                                          clipPath: "url(#clip0_264_221)",
                                          children: [
                                            (0, i.jsx)("path", {
                                              d: "M4.5437 13.1571H21.4562",
                                              stroke: "white",
                                              "stroke-width": "2",
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                            }),
                                            (0, i.jsx)("path", {
                                              d: "M4.5437 7.00708H21.4562",
                                              stroke: "white",
                                              "stroke-width": "2",
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                            }),
                                            (0, i.jsx)("path", {
                                              d: "M4.5437 19.307H21.4562",
                                              stroke: "white",
                                              "stroke-width": "2",
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                            }),
                                          ],
                                        }),
                                        (0, i.jsx)("defs", {
                                          children: (0, i.jsx)("clipPath", {
                                            id: "clip0_264_221",
                                            children: (0, i.jsx)("rect", {
                                              width: "24.6",
                                              height: "24.6",
                                              fill: "white",
                                              transform:
                                                "translate(0.699951 0.857056)",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                "Agents List",
                              ],
                            }),
                            "/agents-list" === n &&
                              (0, i.jsx)(b.E.span, {
                                layoutId: "navbox",
                                transition: { type: "spring", damping: 12 },
                                className:
                                  "bg-[#3C3B414D] z-[-1]  w-full rounded-lg h-full absolute top-0 left-0",
                              }),
                            "/agents-list" === n &&
                              (0, i.jsx)(b.E.span, {
                                layoutId: "navLine",
                                transition: {
                                  type: "spring",
                                  delay: 0.2,
                                  damping: 11,
                                },
                                className:
                                  "bg-navGradient h-[3px] z-[-1]  w-full rounded-lg  absolute bottom-0 left-0",
                              }),
                          ],
                        }),
                      }),
                      (0, i.jsx)(A.default, {
                        href: "/rewards",
                        children: (0, i.jsxs)("div", {
                          className: "relative rounded-lg py-3 px-3 isolate",
                          onClick: () => t(!1),
                          children: [
                            (0, i.jsxs)("p", {
                              className:
                                "text-white flex items-center cursor-pointer justify-center flex-col gap-2 ",
                              children: [
                                "/rewards" === n
                                  ? (0, i.jsxs)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "26",
                                      height: "26",
                                      viewBox: "0 0 26 26",
                                      fill: "none",
                                      children: [
                                        (0, i.jsx)("g", {
                                          "clip-path": "url(#clip0_308_459)",
                                          children: (0, i.jsx)("g", {
                                            filter: "url(#filter0_i_308_459)",
                                            children: (0, i.jsx)("path", {
                                              d: "M13.0088 6.3709C13.0519 5.77431 13.2489 5.19908 13.5807 4.70137C13.9124 4.20365 14.3676 3.80046 14.9016 3.53114C15.4357 3.26183 16.0305 3.13559 16.6279 3.16476C17.2254 3.19393 17.805 3.37751 18.3103 3.69757C18.3681 3.73537 18.4146 3.78803 18.445 3.85002C18.4754 3.91202 18.4885 3.98105 18.483 4.04987C18.4775 4.11869 18.4536 4.18475 18.4137 4.24113C18.3739 4.2975 18.3196 4.34209 18.2565 4.37023C17.3781 4.76543 16.6325 5.40582 16.1092 6.21449C15.5858 7.02315 15.3071 7.9657 15.3064 8.92892C15.3064 9.04135 15.3064 9.15377 15.318 9.26428C15.3233 9.33413 15.3094 9.4041 15.2778 9.46663C15.2462 9.52915 15.1982 9.58186 15.1388 9.61906C15.0795 9.65626 15.0111 9.67653 14.941 9.67768C14.871 9.67883 14.802 9.66082 14.7414 9.6256C14.1751 9.30167 13.7119 8.8242 13.4054 8.24831C13.0988 7.67242 12.9613 7.02157 13.0088 6.3709ZM23.7627 16.2907C23.7641 16.7299 23.6424 17.1608 23.4114 17.5345C23.1804 17.9081 22.8494 18.2096 22.4558 18.4047L22.4135 18.4239L18.6822 20.0133C18.6453 20.0296 18.6071 20.0424 18.5679 20.0518L12.4179 21.5893C12.357 21.6049 12.2943 21.613 12.2314 21.6133H2.2377C1.82992 21.6133 1.43886 21.4513 1.15052 21.163C0.862181 20.8746 0.700195 20.4836 0.700195 20.0758V16.232C0.700195 15.8243 0.862181 15.4332 1.15052 15.1449C1.43886 14.8565 1.82992 14.6945 2.2377 14.6945H4.54608C4.83327 14.6945 5.10869 14.5804 5.31173 14.3773L7.16827 12.5199C7.45329 12.2336 7.79221 12.0067 8.16546 11.8521C8.53871 11.6976 8.93889 11.6185 9.34287 11.6195H14.1533C14.5594 11.6195 14.9602 11.7114 15.3257 11.8883C15.6912 12.0651 16.012 12.3225 16.2639 12.6409C16.5158 12.9594 16.6923 13.3308 16.7803 13.7272C16.9014 14.2728 17.4094 14.7834 17.9541 14.6582L20.7924 14.0055C21.1424 13.9129 21.5091 13.9018 21.864 13.9732C22.219 14.0445 22.5529 14.1965 22.8398 14.4173C23.1268 14.638 23.3593 14.9218 23.5193 15.2466C23.6793 15.5714 23.7625 15.9286 23.7627 16.2907ZM22.2252 16.2907C22.2251 16.1636 22.1957 16.0382 22.1393 15.9243C22.0829 15.8104 22.001 15.711 21.8999 15.6339C21.7989 15.5567 21.6815 15.5039 21.5567 15.4795C21.432 15.4551 21.3033 15.4597 21.1807 15.4931L21.1509 15.5008L14.7126 16.9816C14.6561 16.9942 14.5984 17.0006 14.5406 17.0008H11.4627C11.2588 17.0008 11.0633 16.9198 10.9191 16.7756C10.7749 16.6315 10.6939 16.4359 10.6939 16.232C10.6939 16.0282 10.7749 15.8326 10.9191 15.6885C11.0633 15.5443 11.2588 15.4633 11.4627 15.4633H14.1533C14.4591 15.4633 14.7524 15.3418 14.9687 15.1255C15.185 14.9093 15.3064 14.616 15.3064 14.3102C15.3064 14.0043 15.185 13.711 14.9687 13.4948C14.7524 13.2785 14.4591 13.157 14.1533 13.157H9.34287C9.14089 13.1564 8.94079 13.1959 8.75421 13.2733C8.56764 13.3506 8.3983 13.4643 8.25605 13.6077L6.39869 15.4643C6.19557 15.6673 6.08145 15.9427 6.08145 16.2299V18.9932C6.08145 19.5911 6.56612 20.0758 7.164 20.0758H12.0021C12.0906 20.0758 12.1788 20.0649 12.2647 20.0435L18.0516 18.5965C18.1068 18.5827 18.1608 18.5646 18.2131 18.5423L21.786 17.021C21.919 16.9509 22.0302 16.8459 22.1076 16.7171C22.185 16.5884 22.2257 16.4409 22.2252 16.2907ZM16.8439 8.92892C16.8439 9.61312 17.0468 10.2819 17.427 10.8508C17.8071 11.4197 18.3474 11.8631 18.9795 12.125C19.6116 12.3868 20.3072 12.4553 20.9782 12.3218C21.6493 12.1883 22.2657 11.8589 22.7495 11.3751C23.2333 10.8913 23.5627 10.2749 23.6962 9.60381C23.8297 8.93275 23.7612 8.23719 23.4994 7.60507C23.2375 6.97295 22.7941 6.43267 22.2252 6.05255C21.6564 5.67243 20.9875 5.46954 20.3033 5.46954C19.3858 5.46954 18.5059 5.83401 17.8572 6.48277C17.2084 7.13153 16.8439 8.01143 16.8439 8.92892Z",
                                              fill: "#46B2A3",
                                            }),
                                          }),
                                        }),
                                        (0, i.jsxs)("defs", {
                                          children: [
                                            (0, i.jsxs)("filter", {
                                              id: "filter0_i_308_459",
                                              x: "0.700195",
                                              y: "3.16064",
                                              width: "23.1708",
                                              height: "18.6691",
                                              filterUnits: "userSpaceOnUse",
                                              "color-interpolation-filters":
                                                "sRGB",
                                              children: [
                                                (0, i.jsx)("feFlood", {
                                                  "flood-opacity": "0",
                                                  result: "BackgroundImageFix",
                                                }),
                                                (0, i.jsx)("feBlend", {
                                                  mode: "normal",
                                                  in: "SourceGraphic",
                                                  in2: "BackgroundImageFix",
                                                  result: "shape",
                                                }),
                                                (0, i.jsx)("feColorMatrix", {
                                                  in: "SourceAlpha",
                                                  type: "matrix",
                                                  values:
                                                    "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                                  result: "hardAlpha",
                                                }),
                                                (0, i.jsx)("feOffset", {
                                                  dx: "0.108255",
                                                  dy: "0.21651",
                                                }),
                                                (0, i.jsx)("feGaussianBlur", {
                                                  stdDeviation: "2.70638",
                                                }),
                                                (0, i.jsx)("feComposite", {
                                                  in2: "hardAlpha",
                                                  operator: "arithmetic",
                                                  k2: "-1",
                                                  k3: "1",
                                                }),
                                                (0, i.jsx)("feColorMatrix", {
                                                  type: "matrix",
                                                  values:
                                                    "0 0 0 0 0.9125 0 0 0 0 0.927083 0 0 0 0 1 0 0 0 0.7 0",
                                                }),
                                                (0, i.jsx)("feBlend", {
                                                  mode: "normal",
                                                  in2: "shape",
                                                  result:
                                                    "effect1_innerShadow_308_459",
                                                }),
                                              ],
                                            }),
                                            (0, i.jsx)("clipPath", {
                                              id: "clip0_308_459",
                                              children: (0, i.jsx)("rect", {
                                                width: "24.6",
                                                height: "24.6",
                                                fill: "white",
                                                transform:
                                                  "translate(0.700195 0.857056)",
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    })
                                  : (0, i.jsxs)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "32",
                                      height: "32",
                                      viewBox: "0 0 32 32",
                                      fill: "none",
                                      children: [
                                        (0, i.jsxs)("g", {
                                          "clip-path": "url(#clip0_308_450)",
                                          children: [
                                            (0, i.jsx)("path", {
                                              d: "M25.5 14C27.433 14 29 12.433 29 10.5C29 8.567 27.433 7 25.5 7C23.567 7 22 8.567 22 10.5C22 12.433 23.567 14 25.5 14Z",
                                              stroke: "white",
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                            }),
                                            (0, i.jsx)("path", {
                                              d: "M6 26H2C1.73478 26 1.48043 25.8946 1.29289 25.7071C1.10536 25.5196 1 25.2652 1 25V20C1 19.7348 1.10536 19.4804 1.29289 19.2929C1.48043 19.1054 1.73478 19 2 19H6",
                                              stroke: "white",
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                            }),
                                            (0, i.jsx)("path", {
                                              d: "M14 20H18L26.375 18.0738C26.6829 17.9894 27.0061 17.9771 27.3195 18.038C27.6329 18.0989 27.9281 18.2312 28.182 18.4247C28.436 18.6181 28.6419 18.8676 28.7838 19.1536C28.9256 19.4396 28.9996 19.7545 29 20.0738C29.0002 20.4592 28.8929 20.8371 28.6902 21.165C28.4875 21.4929 28.1974 21.7578 27.8525 21.93L23 24L15 26H6V19L9.125 15.875C9.40432 15.5967 9.73577 15.3761 10.1004 15.226C10.465 15.0758 10.8557 14.999 11.25 15H17.5C18.163 15 18.7989 15.2634 19.2678 15.7322C19.7366 16.2011 20 16.837 20 17.5C20 18.1631 19.7366 18.7989 19.2678 19.2678C18.7989 19.7366 18.163 20 17.5 20H14Z",
                                              stroke: "white",
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                            }),
                                            (0, i.jsx)("path", {
                                              d: "M22.0003 10.6613C21.321 10.9826 20.5564 11.0767 19.8194 10.9297C19.0825 10.7828 18.4124 10.4026 17.9083 9.8453C17.4042 9.28804 17.0929 8.58334 17.0203 7.83541C16.9477 7.08749 17.1177 6.33606 17.5053 5.69227C17.8928 5.04847 18.4773 4.5465 19.1722 4.26058C19.8671 3.97466 20.6356 3.91998 21.364 4.10463C22.0924 4.28929 22.742 4.70346 23.2168 5.2859C23.6916 5.86835 23.9663 6.58813 24.0003 7.33879",
                                              stroke: "white",
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                            }),
                                          ],
                                        }),
                                        (0, i.jsx)("defs", {
                                          children: (0, i.jsx)("clipPath", {
                                            id: "clip0_308_450",
                                            children: (0, i.jsx)("rect", {
                                              width: "32",
                                              height: "32",
                                              fill: "white",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                "Rewards",
                              ],
                            }),
                            "/rewards" === n &&
                              (0, i.jsx)(b.E.span, {
                                layoutId: "navbox",
                                transition: { type: "spring", damping: 12 },
                                className:
                                  "bg-[#3C3B414D] z-[-1]  w-full rounded-lg h-full absolute top-0 left-0",
                              }),
                            "/rewards" === n &&
                              (0, i.jsx)(b.E.span, {
                                layoutId: "navLine",
                                transition: {
                                  type: "spring",
                                  delay: 0.2,
                                  damping: 11,
                                },
                                className:
                                  "bg-navGradient h-[3px] z-[-1]  w-full rounded-lg  absolute bottom-0 left-0",
                              }),
                          ],
                        }),
                      }),
                    ],
                  }),
                (0, i.jsx)("button", {
                  className: "rounded-full ".concat(
                    s ? "bg-transparent" : "bg-[#0E6057]",
                    " w-full h-12 mt-4 shadow-buttonInnerShadow text-white   font-medium "
                  ),
                  onClick: () => {
                    a.open(), t(!1);
                  },
                  children: s && r ? C.addressConvertor(r) : "Connect Wallet",
                }),
              ],
            }),
          });
        },
        B = n(62408),
        N = n(85097),
        L = n(12599),
        S =
          (n(12028),
          n(19267),
          n(30625),
          n(7422),
          () => {
            let e = (0, v.useSearchParams)(),
              [t, n] = (0, l.useState)(""),
              [a, r] = (0, l.useState)(!1),
              { chat: s, setChat: o, updateChat: u } = (0, w.Z)((e) => e),
              [h, x] = (0, l.useState)(null),
              [C, g] = (0, l.useState)(""),
              f = (0, l.useRef)(null),
              { address: m, isConnected: j, chainId: A } = (0, p.Zc)(),
              { walletProvider: b } = (0, p.B0)(),
              [_, E] = (0, l.useState)(!0),
              k = e.get("id"),
              T =
                (e.get("creator"),
                async () => {
                  r(!0);
                  let e = new FormData();
                  e.append("secret", k), e.append("prompt", t);
                  try {
                    var a, i, l, d;
                    if (!k) {
                      y.ZP.error("Secret is Missing");
                      return;
                    }
                    if (!t) {
                      y.ZP.error("Please enter a prompt");
                      return;
                    }
                    h && e.append("image", h),
                      o({
                        id: s.length + 1,
                        type: "user",
                        text: t,
                        image: C,
                        secret: k,
                        walletAddress: m,
                      });
                    let c = s.length + 2;
                    o({
                      id: c,
                      type: "agent",
                      text: "",
                      secret: k,
                      walletAddress: m,
                      isThinking: !0,
                    });
                    let p = await B.Z.chatWithAi(e),
                      f =
                        null === (a = p.body) || void 0 === a
                          ? void 0
                          : a.getReader(),
                      w = new TextDecoder();
                    for (;;) {
                      let { done: e, value: t } = await f.read();
                      if (e) break;
                      for (let e of w.decode(t).split("\n"))
                        if (e.startsWith("data:"))
                          try {
                            let t = JSON.parse(e.substring(6));
                            if (
                              null == t
                                ? void 0
                                : null === (d = t.content) || void 0 === d
                                ? void 0
                                : null === (l = d[0]) || void 0 === l
                                ? void 0
                                : null === (i = l.text) || void 0 === i
                                ? void 0
                                : i.value
                            ) {
                              let e = t.content[0].text.value;
                              u(c, e, !1), n(""), g(null);
                            }
                          } catch (e) {
                            r(!1),
                              console.error("Error parsing JSON:", e),
                              n(""),
                              g(null),
                              x(null);
                          }
                    }
                    r(!1);
                  } catch (e) {
                    r(!1),
                      y.ZP.error("Please Try again"),
                      n(""),
                      g(null),
                      x(null);
                  } finally {
                    r(!1);
                  }
                });
            return (
              (0, l.useEffect)(() => {}, [m, j, A, b]),
              (0, i.jsxs)("div", {
                className:
                  "relative max-[450px]:w-[320px] w-[350px] sm:w-[400px] lg:w-[553px] h-12",
                children: [
                  (0, i.jsx)("div", {
                    className: "absolute left-2 top-[-1.5rem] ",
                    children:
                      C &&
                      (0, i.jsxs)("div", {
                        className: " p-1 rounded-xl size-12 relative",
                        children: [
                          (0, i.jsx)(N.IOM, {
                            className:
                              "absolute -top-1  -right-2 cursor-pointer text-black text-lg bg-white rounded-full",
                            onClick: () => {
                              x(null),
                                g(null),
                                f.current && (f.current.value = "");
                            },
                          }),
                          (0, i.jsx)("div", {
                            children: (0, i.jsx)(d.default, {
                              src: C,
                              alt: "uploaded image",
                              width: 50,
                              height: 50,
                              className: "rounded-xl",
                            }),
                          }),
                        ],
                      }),
                  }),
                  (0, i.jsx)("input", {
                    type: "text",
                    placeholder: "Message Agent",
                    className:
                      "bg-transparent border ps-12 pr-10 border-white  border-opacity-20 px-4 focus:outline-none placeholder:text-[#46B2A34D] w-full h-full rounded-lg text-white",
                    value: t,
                    onChange: (e) => n(e.target.value),
                    onKeyDown: (e) => {
                      "Enter" === e.key && t && j && m && k && _ && T();
                    },
                  }),
                  (0, i.jsxs)("div", {
                    className: "absolute left-4 top-1/2 -translate-y-1/2 ",
                    onClick: () => {
                      var e;
                      return null === (e = f.current) || void 0 === e
                        ? void 0
                        : e.click();
                    },
                    children: [
                      (0, i.jsx)("input", {
                        hidden: !0,
                        type: "file",
                        ref: f,
                        onChange: (e) => {
                          var t;
                          let n =
                            null === (t = e.target.files) || void 0 === t
                              ? void 0
                              : t[0];
                          n && (x(n), g(URL.createObjectURL(n)));
                        },
                        accept: ".jpeg, .jpg, .png, .gif, .webp",
                      }),
                      (0, i.jsx)(c.umS, {
                        className: "text-2xl text-[#46B2A3] cursor-pointer",
                      }),
                    ],
                  }),
                  (0, i.jsx)(L.Z, {
                    title:
                      j && m
                        ? _
                          ? ""
                          : "You are not eligible"
                        : "Please connect wallet",
                    children: (0, i.jsx)("button", {
                      className:
                        "absolute right-4 top-1/2 -translate-y-1/2 ".concat(
                          _ && !a && t && k && j && m
                            ? "cursor-pointer"
                            : "cursor-not-allowed opacity-50"
                        ),
                      disabled: !_ || a || !t || !k || !j || !m,
                      onClick: T,
                      children: (0, i.jsx)(c.Hh6, {
                        className: "text-2xl text-[#46B2A3] cursor-pointer",
                      }),
                    }),
                  }),
                ],
              })
            );
          });
      let M = new j.Z();
      var H = () => {
        let e = (0, v.usePathname)(),
          t = (0, p.k_)(),
          { address: n, isConnected: a } = (0, p.Zc)(),
          r = (0, w.Z)((e) => e.setUserId);
        (0, l.useEffect)(() => {
          r(null), a && n ? s() : r("");
        }, [a, n]);
        let s = async () => {
            try {
              var e;
              if (!n) {
                y.ZP.error("Please connect your wallet first.");
                return;
              }
              let t = await m.authenticateUser(n),
                a =
                  null == t
                    ? void 0
                    : null === (e = t.data) || void 0 === e
                    ? void 0
                    : e._id;
              a && (r(a), M.set("ai-agent-marketplace", t.token));
            } catch (e) {
              console.error("Authentication failed:", e);
            }
          },
          [u, h] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(
            () => (
              u
                ? (document.body.style.overflow = "hidden")
                : (document.body.style.overflow = "auto"),
              () => {
                document.body.style.overflow = "auto";
              }
            ),
            [u]
          ),
          (0, i.jsx)("div", {
            className: "container [@media(max-height:768px)]:pb-5 pb-8 ",
            children: (0, i.jsx)("div", {
              className: "bg-whiteBorderGradient rounded-2xl p-[1px]",
              children: (0, i.jsxs)("div", {
                className:
                  "bg-[#0C1A1F] rounded-2xl px-2 sm:px-5 h-20 lg:h-24 2xl:h-28 flex items-center max-lg:gap-2 justify-between",
                children: [
                  (0, i.jsx)(A.default, {
                    href: "/",
                    children: (0, i.jsxs)("div", {
                      className: "flex items-center flex-shrink-0 gap-2",
                      children: [
                        (0, i.jsx)(d.default, {
                          src: o,
                          alt: "logo",
                          className: "max-sm:w-[30px]",
                        }),
                        (0, i.jsx)("h1", {
                          className: "text-white text-2xl ".concat(
                            "/interact-agent" === e ? "max-lg:hidden" : "",
                            " "
                          ),
                          children: "Hemera",
                        }),
                      ],
                    }),
                  }),
                  "/interact-agent" === e
                    ? (0, i.jsx)(S, {})
                    : (0, i.jsxs)("div", {
                        className: "hidden lg:flex items-center gap-4",
                        children: [
                          (0, i.jsx)(A.default, {
                            href: "/deploy-agent",
                            children: (0, i.jsxs)("div", {
                              className:
                                "relative rounded-lg py-3 px-3 isolate",
                              children: [
                                (0, i.jsxs)("p", {
                                  className:
                                    "text-white flex items-center cursor-pointer justify-center flex-col gap-2 ",
                                  children: [
                                    "/deploy-agent" === e
                                      ? (0, i.jsxs)("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "26",
                                          height: "26",
                                          viewBox: "0 0 26 26",
                                          fill: "none",
                                          children: [
                                            (0, i.jsx)("g", {
                                              clipPath: "url(#clip0_264_184)",
                                              children: (0, i.jsx)("g", {
                                                filter:
                                                  "url(#filter0_i_264_184)",
                                                children: (0, i.jsx)("path", {
                                                  d: "M22.544 7.90749L18.2496 3.61402C18.1068 3.47121 17.9373 3.35793 17.7508 3.28064C17.5642 3.20335 17.3642 3.16357 17.1623 3.16357C16.9604 3.16357 16.7604 3.20335 16.5738 3.28064C16.3873 3.35793 16.2178 3.47121 16.075 3.61402L4.22568 15.4633C4.08229 15.6056 3.96861 15.7749 3.89124 15.9615C3.81387 16.1481 3.77436 16.3482 3.775 16.5502V20.8446C3.775 21.2524 3.93699 21.6434 4.22532 21.9318C4.51366 22.2201 4.90473 22.3821 5.3125 22.3821H21.4563C21.6601 22.3821 21.8557 22.3011 21.9998 22.1569C22.144 22.0128 22.225 21.8172 22.225 21.6133C22.225 21.4095 22.144 21.2139 21.9998 21.0698C21.8557 20.9256 21.6601 20.8446 21.4563 20.8446H14.395C13.4306 20.8446 12.9476 19.6785 13.6296 18.9966L22.544 10.0821C22.6868 9.93932 22.8001 9.76981 22.8774 9.58325C22.9547 9.39669 22.9945 9.19673 22.9945 8.99479C22.9945 8.79285 22.9547 8.5929 22.8774 8.40633C22.8001 8.21977 22.6868 8.05027 22.544 7.90749ZM19.9156 10.536C19.4928 10.9588 18.8073 10.9587 18.3845 10.5359L15.6218 7.77257C15.1992 7.34979 15.1992 6.66443 15.6219 6.2417L16.3972 5.46641C16.82 5.04361 17.5055 5.04365 17.9283 5.46649L20.6909 8.22979C21.1136 8.65257 21.1136 9.33794 20.6909 9.76066L19.9156 10.536Z",
                                                  fill: "#46B2A3",
                                                }),
                                              }),
                                            }),
                                            (0, i.jsxs)("defs", {
                                              children: [
                                                (0, i.jsxs)("filter", {
                                                  id: "filter0_i_264_184",
                                                  x: "3.77499",
                                                  y: "3.16357",
                                                  width: "19.3277",
                                                  height: "19.435",
                                                  filterUnits: "userSpaceOnUse",
                                                  "color-interpolation-filters":
                                                    "sRGB",
                                                  children: [
                                                    (0, i.jsx)("feFlood", {
                                                      "flood-opacity": "0",
                                                      result:
                                                        "BackgroundImageFix",
                                                    }),
                                                    (0, i.jsx)("feBlend", {
                                                      mode: "normal",
                                                      in: "SourceGraphic",
                                                      in2: "BackgroundImageFix",
                                                      result: "shape",
                                                    }),
                                                    (0, i.jsx)(
                                                      "feColorMatrix",
                                                      {
                                                        in: "SourceAlpha",
                                                        type: "matrix",
                                                        values:
                                                          "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                                        result: "hardAlpha",
                                                      }
                                                    ),
                                                    (0, i.jsx)("feOffset", {
                                                      dx: "0.108255",
                                                      dy: "0.21651",
                                                    }),
                                                    (0, i.jsx)(
                                                      "feGaussianBlur",
                                                      {
                                                        stdDeviation: "2.70638",
                                                      }
                                                    ),
                                                    (0, i.jsx)("feComposite", {
                                                      in2: "hardAlpha",
                                                      operator: "arithmetic",
                                                      k2: "-1",
                                                      k3: "1",
                                                    }),
                                                    (0, i.jsx)(
                                                      "feColorMatrix",
                                                      {
                                                        type: "matrix",
                                                        values:
                                                          "0 0 0 0 0.9125 0 0 0 0 0.927083 0 0 0 0 1 0 0 0 0.7 0",
                                                      }
                                                    ),
                                                    (0, i.jsx)("feBlend", {
                                                      mode: "normal",
                                                      in2: "shape",
                                                      result:
                                                        "effect1_innerShadow_264_184",
                                                    }),
                                                  ],
                                                }),
                                                (0, i.jsx)("clipPath", {
                                                  id: "clip0_264_184",
                                                  children: (0, i.jsx)("rect", {
                                                    width: "24.6",
                                                    height: "24.6",
                                                    fill: "white",
                                                    transform:
                                                      "translate(0.700012 0.857056)",
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        })
                                      : (0, i.jsxs)("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "25",
                                          height: "26",
                                          viewBox: "0 0 25 26",
                                          fill: "none",
                                          children: [
                                            (0, i.jsxs)("g", {
                                              clipPath: "url(#clip0_264_207)",
                                              children: [
                                                (0, i.jsx)("path", {
                                                  d: "M9.42495 21.6133H4.81245C4.60857 21.6133 4.41303 21.5323 4.26886 21.3881C4.12469 21.2439 4.0437 21.0484 4.0437 20.8445V16.5501C4.0438 16.3465 4.12466 16.1512 4.26856 16.0071L16.1188 4.15687C16.263 4.01281 16.4585 3.93188 16.6623 3.93188C16.8661 3.93188 17.0615 4.01281 17.2057 4.15687L21.5001 8.44841C21.6442 8.59257 21.7251 8.78803 21.7251 8.99183C21.7251 9.19562 21.6442 9.39108 21.5001 9.53524L9.42495 21.6133Z",
                                                  stroke: "white",
                                                  "stroke-linecap": "round",
                                                  "stroke-linejoin": "round",
                                                }),
                                                (0, i.jsx)("path", {
                                                  d: "M20.9563 21.6133H9.42505",
                                                  stroke: "white",
                                                  "stroke-linecap": "round",
                                                  "stroke-linejoin": "round",
                                                }),
                                                (0, i.jsx)("path", {
                                                  d: "M13.2688 7.00708L18.65 12.3883",
                                                  stroke: "white",
                                                  "stroke-linecap": "round",
                                                  "stroke-linejoin": "round",
                                                }),
                                              ],
                                            }),
                                            (0, i.jsx)("defs", {
                                              children: (0, i.jsx)("clipPath", {
                                                id: "clip0_264_207",
                                                children: (0, i.jsx)("rect", {
                                                  width: "24.6",
                                                  height: "24.6",
                                                  fill: "white",
                                                  transform:
                                                    "translate(0.199951 0.857056)",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                    "Create Agents",
                                  ],
                                }),
                                "/deploy-agent" === e &&
                                  (0, i.jsx)(b.E.span, {
                                    layoutId: "navbox",
                                    transition: { type: "spring", damping: 12 },
                                    className:
                                      "bg-[#3C3B414D] z-[-1]  w-full rounded-lg h-full absolute top-0 left-0",
                                  }),
                                "/deploy-agent" === e &&
                                  (0, i.jsx)(b.E.span, {
                                    layoutId: "navLine",
                                    transition: {
                                      type: "spring",
                                      delay: 0.2,
                                      damping: 11,
                                    },
                                    className:
                                      "bg-navGradient h-[3px] z-[-1]  w-full rounded-lg  absolute bottom-0 left-0",
                                  }),
                              ],
                            }),
                          }),
                          (0, i.jsx)(A.default, {
                            href: "/my-agents",
                            children: (0, i.jsxs)("div", {
                              className:
                                "relative rounded-lg py-3 px-3 isolate",
                              children: [
                                (0, i.jsxs)("p", {
                                  className:
                                    "text-white flex items-center cursor-pointer justify-center flex-col gap-2 ",
                                  children: [
                                    "/my-agents" === e
                                      ? (0, i.jsx)(c.irA, {
                                          className: "text-2xl !text-[#46B2A3]",
                                        })
                                      : (0, i.jsx)(c.lb0, {
                                          className: "text-2xl",
                                        }),
                                    "My Agents",
                                  ],
                                }),
                                "/my-agents" === e &&
                                  (0, i.jsx)(b.E.span, {
                                    layoutId: "navbox",
                                    transition: { type: "spring", damping: 12 },
                                    className:
                                      "bg-[#3C3B414D] z-[-1]  w-full rounded-lg h-full absolute top-0 left-0",
                                  }),
                                "/my-agents" === e &&
                                  (0, i.jsx)(b.E.span, {
                                    layoutId: "navLine",
                                    transition: {
                                      type: "spring",
                                      delay: 0.2,
                                      damping: 11,
                                    },
                                    className:
                                      "bg-navGradient h-[3px] z-[-1]  w-full rounded-lg  absolute bottom-0 left-0",
                                  }),
                              ],
                            }),
                          }),
                          (0, i.jsx)(A.default, {
                            href: "/agents-list",
                            children: (0, i.jsxs)("div", {
                              className:
                                "relative rounded-lg py-3 px-3 isolate",
                              children: [
                                (0, i.jsxs)("p", {
                                  className:
                                    "text-white flex items-center cursor-pointer justify-center flex-col gap-2 ",
                                  children: [
                                    "/agents-list" === e
                                      ? (0, i.jsxs)("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "26",
                                          height: "26",
                                          viewBox: "0 0 26 26",
                                          fill: "none",
                                          children: [
                                            (0, i.jsx)("g", {
                                              clipPath: "url(#clip0_264_213)",
                                              children: (0, i.jsx)("g", {
                                                filter:
                                                  "url(#filter0_i_264_213)",
                                                children: (0, i.jsx)("path", {
                                                  d: "M20.6879 3.93201H5.31289C4.90512 3.93201 4.51405 4.09399 4.22571 4.38233C3.93738 4.67067 3.77539 5.06174 3.77539 5.46951V20.8445C3.77539 21.2523 3.93738 21.6433 4.22571 21.9317C4.51405 22.22 4.90512 22.382 5.31289 22.382H20.6879C21.0957 22.382 21.4867 22.22 21.7751 21.9317C22.0634 21.6433 22.2254 21.2523 22.2254 20.8445V5.46951C22.2254 5.06174 22.0634 4.67067 21.7751 4.38233C21.4867 4.09399 21.0957 3.93201 20.6879 3.93201ZM19.1504 18.5383H6.85039C6.64651 18.5383 6.45097 18.4573 6.3068 18.3131C6.16263 18.1689 6.08164 17.9734 6.08164 17.7695C6.08164 17.5656 6.16263 17.3701 6.3068 17.2259C6.45097 17.0817 6.64651 17.0008 6.85039 17.0008H19.1504C19.3543 17.0008 19.5498 17.0817 19.694 17.2259C19.8381 17.3701 19.9191 17.5656 19.9191 17.7695C19.9191 17.9734 19.8381 18.1689 19.694 18.3131C19.5498 18.4573 19.3543 18.5383 19.1504 18.5383ZM19.1504 13.9258H6.85039C6.64651 13.9258 6.45097 13.8448 6.3068 13.7006C6.16263 13.5564 6.08164 13.3609 6.08164 13.157C6.08164 12.9531 6.16263 12.7576 6.3068 12.6134C6.45097 12.4692 6.64651 12.3883 6.85039 12.3883H19.1504C19.3543 12.3883 19.5498 12.4692 19.694 12.6134C19.8381 12.7576 19.9191 12.9531 19.9191 13.157C19.9191 13.3609 19.8381 13.5564 19.694 13.7006C19.5498 13.8448 19.3543 13.9258 19.1504 13.9258ZM19.1504 9.31326H6.85039C6.64651 9.31326 6.45097 9.23226 6.3068 9.0881C6.16263 8.94393 6.08164 8.74839 6.08164 8.54451C6.08164 8.34062 6.16263 8.14509 6.3068 8.00092C6.45097 7.85675 6.64651 7.77576 6.85039 7.77576H19.1504C19.3543 7.77576 19.5498 7.85675 19.694 8.00092C19.8381 8.14509 19.9191 8.34062 19.9191 8.54451C19.9191 8.74839 19.8381 8.94393 19.694 9.0881C19.5498 9.23226 19.3543 9.31326 19.1504 9.31326Z",
                                                  fill: "#46B2A3",
                                                }),
                                              }),
                                            }),
                                            (0, i.jsxs)("defs", {
                                              children: [
                                                (0, i.jsxs)("filter", {
                                                  id: "filter0_i_264_213",
                                                  x: "3.77539",
                                                  y: "3.93201",
                                                  width: "18.5585",
                                                  height: "18.6665",
                                                  filterUnits: "userSpaceOnUse",
                                                  "color-interpolation-filters":
                                                    "sRGB",
                                                  children: [
                                                    (0, i.jsx)("feFlood", {
                                                      "flood-opacity": "0",
                                                      result:
                                                        "BackgroundImageFix",
                                                    }),
                                                    (0, i.jsx)("feBlend", {
                                                      mode: "normal",
                                                      in: "SourceGraphic",
                                                      in2: "BackgroundImageFix",
                                                      result: "shape",
                                                    }),
                                                    (0, i.jsx)(
                                                      "feColorMatrix",
                                                      {
                                                        in: "SourceAlpha",
                                                        type: "matrix",
                                                        values:
                                                          "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                                        result: "hardAlpha",
                                                      }
                                                    ),
                                                    (0, i.jsx)("feOffset", {
                                                      dx: "0.108255",
                                                      dy: "0.21651",
                                                    }),
                                                    (0, i.jsx)(
                                                      "feGaussianBlur",
                                                      {
                                                        stdDeviation: "2.70638",
                                                      }
                                                    ),
                                                    (0, i.jsx)("feComposite", {
                                                      in2: "hardAlpha",
                                                      operator: "arithmetic",
                                                      k2: "-1",
                                                      k3: "1",
                                                    }),
                                                    (0, i.jsx)(
                                                      "feColorMatrix",
                                                      {
                                                        type: "matrix",
                                                        values:
                                                          "0 0 0 0 0.9125 0 0 0 0 0.927083 0 0 0 0 1 0 0 0 0.7 0",
                                                      }
                                                    ),
                                                    (0, i.jsx)("feBlend", {
                                                      mode: "normal",
                                                      in2: "shape",
                                                      result:
                                                        "effect1_innerShadow_264_213",
                                                    }),
                                                  ],
                                                }),
                                                (0, i.jsx)("clipPath", {
                                                  id: "clip0_264_213",
                                                  children: (0, i.jsx)("rect", {
                                                    width: "24.6",
                                                    height: "24.6",
                                                    fill: "white",
                                                    transform:
                                                      "translate(0.700195 0.857056)",
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        })
                                      : (0, i.jsxs)("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "25",
                                          height: "26",
                                          viewBox: "0 0 25 26",
                                          fill: "none",
                                          children: [
                                            (0, i.jsxs)("g", {
                                              clipPath: "url(#clip0_264_193)",
                                              children: [
                                                (0, i.jsx)("path", {
                                                  d: "M4.04376 13.1571H20.9563",
                                                  stroke: "white",
                                                  "stroke-width": "2",
                                                  "stroke-linecap": "round",
                                                  "stroke-linejoin": "round",
                                                }),
                                                (0, i.jsx)("path", {
                                                  d: "M4.04376 7.00708H20.9563",
                                                  stroke: "white",
                                                  "stroke-width": "2",
                                                  "stroke-linecap": "round",
                                                  "stroke-linejoin": "round",
                                                }),
                                                (0, i.jsx)("path", {
                                                  d: "M4.04376 19.307H20.9563",
                                                  stroke: "white",
                                                  "stroke-width": "2",
                                                  "stroke-linecap": "round",
                                                  "stroke-linejoin": "round",
                                                }),
                                              ],
                                            }),
                                            (0, i.jsx)("defs", {
                                              children: (0, i.jsx)("clipPath", {
                                                id: "clip0_264_193",
                                                children: (0, i.jsx)("rect", {
                                                  width: "24.6",
                                                  height: "24.6",
                                                  fill: "white",
                                                  transform:
                                                    "translate(0.200012 0.857056)",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                    "Agents List",
                                  ],
                                }),
                                "/agents-list" === e &&
                                  (0, i.jsx)(b.E.span, {
                                    layoutId: "navbox",
                                    transition: { type: "spring", damping: 12 },
                                    className:
                                      "bg-[#3C3B414D] z-[-1]  w-full rounded-lg h-full absolute top-0 left-0",
                                  }),
                                "/agents-list" === e &&
                                  (0, i.jsx)(b.E.span, {
                                    layoutId: "navLine",
                                    transition: {
                                      type: "spring",
                                      delay: 0.2,
                                      damping: 11,
                                    },
                                    className:
                                      "bg-navGradient h-[3px] z-[-1]  w-full rounded-lg  absolute bottom-0 left-0",
                                  }),
                              ],
                            }),
                          }),
                          (0, i.jsx)(A.default, {
                            href: "/rewards",
                            children: (0, i.jsxs)("div", {
                              className:
                                "relative rounded-lg py-3 px-3 isolate",
                              children: [
                                (0, i.jsxs)("p", {
                                  className:
                                    "text-white flex items-center cursor-pointer justify-center flex-col gap-2 ",
                                  children: [
                                    "/rewards" === e
                                      ? (0, i.jsxs)("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "26",
                                          height: "26",
                                          viewBox: "0 0 26 26",
                                          fill: "none",
                                          children: [
                                            (0, i.jsx)("g", {
                                              "clip-path":
                                                "url(#clip0_308_459)",
                                              children: (0, i.jsx)("g", {
                                                filter:
                                                  "url(#filter0_i_308_459)",
                                                children: (0, i.jsx)("path", {
                                                  d: "M13.0088 6.3709C13.0519 5.77431 13.2489 5.19908 13.5807 4.70137C13.9124 4.20365 14.3676 3.80046 14.9016 3.53114C15.4357 3.26183 16.0305 3.13559 16.6279 3.16476C17.2254 3.19393 17.805 3.37751 18.3103 3.69757C18.3681 3.73537 18.4146 3.78803 18.445 3.85002C18.4754 3.91202 18.4885 3.98105 18.483 4.04987C18.4775 4.11869 18.4536 4.18475 18.4137 4.24113C18.3739 4.2975 18.3196 4.34209 18.2565 4.37023C17.3781 4.76543 16.6325 5.40582 16.1092 6.21449C15.5858 7.02315 15.3071 7.9657 15.3064 8.92892C15.3064 9.04135 15.3064 9.15377 15.318 9.26428C15.3233 9.33413 15.3094 9.4041 15.2778 9.46663C15.2462 9.52915 15.1982 9.58186 15.1388 9.61906C15.0795 9.65626 15.0111 9.67653 14.941 9.67768C14.871 9.67883 14.802 9.66082 14.7414 9.6256C14.1751 9.30167 13.7119 8.8242 13.4054 8.24831C13.0988 7.67242 12.9613 7.02157 13.0088 6.3709ZM23.7627 16.2907C23.7641 16.7299 23.6424 17.1608 23.4114 17.5345C23.1804 17.9081 22.8494 18.2096 22.4558 18.4047L22.4135 18.4239L18.6822 20.0133C18.6453 20.0296 18.6071 20.0424 18.5679 20.0518L12.4179 21.5893C12.357 21.6049 12.2943 21.613 12.2314 21.6133H2.2377C1.82992 21.6133 1.43886 21.4513 1.15052 21.163C0.862181 20.8746 0.700195 20.4836 0.700195 20.0758V16.232C0.700195 15.8243 0.862181 15.4332 1.15052 15.1449C1.43886 14.8565 1.82992 14.6945 2.2377 14.6945H4.54608C4.83327 14.6945 5.10869 14.5804 5.31173 14.3773L7.16827 12.5199C7.45329 12.2336 7.79221 12.0067 8.16546 11.8521C8.53871 11.6976 8.93889 11.6185 9.34287 11.6195H14.1533C14.5594 11.6195 14.9602 11.7114 15.3257 11.8883C15.6912 12.0651 16.012 12.3225 16.2639 12.6409C16.5158 12.9594 16.6923 13.3308 16.7803 13.7272C16.9014 14.2728 17.4094 14.7834 17.9541 14.6582L20.7924 14.0055C21.1424 13.9129 21.5091 13.9018 21.864 13.9732C22.219 14.0445 22.5529 14.1965 22.8398 14.4173C23.1268 14.638 23.3593 14.9218 23.5193 15.2466C23.6793 15.5714 23.7625 15.9286 23.7627 16.2907ZM22.2252 16.2907C22.2251 16.1636 22.1957 16.0382 22.1393 15.9243C22.0829 15.8104 22.001 15.711 21.8999 15.6339C21.7989 15.5567 21.6815 15.5039 21.5567 15.4795C21.432 15.4551 21.3033 15.4597 21.1807 15.4931L21.1509 15.5008L14.7126 16.9816C14.6561 16.9942 14.5984 17.0006 14.5406 17.0008H11.4627C11.2588 17.0008 11.0633 16.9198 10.9191 16.7756C10.7749 16.6315 10.6939 16.4359 10.6939 16.232C10.6939 16.0282 10.7749 15.8326 10.9191 15.6885C11.0633 15.5443 11.2588 15.4633 11.4627 15.4633H14.1533C14.4591 15.4633 14.7524 15.3418 14.9687 15.1255C15.185 14.9093 15.3064 14.616 15.3064 14.3102C15.3064 14.0043 15.185 13.711 14.9687 13.4948C14.7524 13.2785 14.4591 13.157 14.1533 13.157H9.34287C9.14089 13.1564 8.94079 13.1959 8.75421 13.2733C8.56764 13.3506 8.3983 13.4643 8.25605 13.6077L6.39869 15.4643C6.19557 15.6673 6.08145 15.9427 6.08145 16.2299V18.9932C6.08145 19.5911 6.56612 20.0758 7.164 20.0758H12.0021C12.0906 20.0758 12.1788 20.0649 12.2647 20.0435L18.0516 18.5965C18.1068 18.5827 18.1608 18.5646 18.2131 18.5423L21.786 17.021C21.919 16.9509 22.0302 16.8459 22.1076 16.7171C22.185 16.5884 22.2257 16.4409 22.2252 16.2907ZM16.8439 8.92892C16.8439 9.61312 17.0468 10.2819 17.427 10.8508C17.8071 11.4197 18.3474 11.8631 18.9795 12.125C19.6116 12.3868 20.3072 12.4553 20.9782 12.3218C21.6493 12.1883 22.2657 11.8589 22.7495 11.3751C23.2333 10.8913 23.5627 10.2749 23.6962 9.60381C23.8297 8.93275 23.7612 8.23719 23.4994 7.60507C23.2375 6.97295 22.7941 6.43267 22.2252 6.05255C21.6564 5.67243 20.9875 5.46954 20.3033 5.46954C19.3858 5.46954 18.5059 5.83401 17.8572 6.48277C17.2084 7.13153 16.8439 8.01143 16.8439 8.92892Z",
                                                  fill: "#46B2A3",
                                                }),
                                              }),
                                            }),
                                            (0, i.jsxs)("defs", {
                                              children: [
                                                (0, i.jsxs)("filter", {
                                                  id: "filter0_i_308_459",
                                                  x: "0.700195",
                                                  y: "3.16064",
                                                  width: "23.1708",
                                                  height: "18.6691",
                                                  filterUnits: "userSpaceOnUse",
                                                  "color-interpolation-filters":
                                                    "sRGB",
                                                  children: [
                                                    (0, i.jsx)("feFlood", {
                                                      "flood-opacity": "0",
                                                      result:
                                                        "BackgroundImageFix",
                                                    }),
                                                    (0, i.jsx)("feBlend", {
                                                      mode: "normal",
                                                      in: "SourceGraphic",
                                                      in2: "BackgroundImageFix",
                                                      result: "shape",
                                                    }),
                                                    (0, i.jsx)(
                                                      "feColorMatrix",
                                                      {
                                                        in: "SourceAlpha",
                                                        type: "matrix",
                                                        values:
                                                          "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                                        result: "hardAlpha",
                                                      }
                                                    ),
                                                    (0, i.jsx)("feOffset", {
                                                      dx: "0.108255",
                                                      dy: "0.21651",
                                                    }),
                                                    (0, i.jsx)(
                                                      "feGaussianBlur",
                                                      {
                                                        stdDeviation: "2.70638",
                                                      }
                                                    ),
                                                    (0, i.jsx)("feComposite", {
                                                      in2: "hardAlpha",
                                                      operator: "arithmetic",
                                                      k2: "-1",
                                                      k3: "1",
                                                    }),
                                                    (0, i.jsx)(
                                                      "feColorMatrix",
                                                      {
                                                        type: "matrix",
                                                        values:
                                                          "0 0 0 0 0.9125 0 0 0 0 0.927083 0 0 0 0 1 0 0 0 0.7 0",
                                                      }
                                                    ),
                                                    (0, i.jsx)("feBlend", {
                                                      mode: "normal",
                                                      in2: "shape",
                                                      result:
                                                        "effect1_innerShadow_308_459",
                                                    }),
                                                  ],
                                                }),
                                                (0, i.jsx)("clipPath", {
                                                  id: "clip0_308_459",
                                                  children: (0, i.jsx)("rect", {
                                                    width: "24.6",
                                                    height: "24.6",
                                                    fill: "white",
                                                    transform:
                                                      "translate(0.700195 0.857056)",
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        })
                                      : (0, i.jsxs)("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "32",
                                          height: "32",
                                          viewBox: "0 0 32 32",
                                          fill: "none",
                                          children: [
                                            (0, i.jsxs)("g", {
                                              "clip-path":
                                                "url(#clip0_308_450)",
                                              children: [
                                                (0, i.jsx)("path", {
                                                  d: "M25.5 14C27.433 14 29 12.433 29 10.5C29 8.567 27.433 7 25.5 7C23.567 7 22 8.567 22 10.5C22 12.433 23.567 14 25.5 14Z",
                                                  stroke: "white",
                                                  "stroke-linecap": "round",
                                                  "stroke-linejoin": "round",
                                                }),
                                                (0, i.jsx)("path", {
                                                  d: "M6 26H2C1.73478 26 1.48043 25.8946 1.29289 25.7071C1.10536 25.5196 1 25.2652 1 25V20C1 19.7348 1.10536 19.4804 1.29289 19.2929C1.48043 19.1054 1.73478 19 2 19H6",
                                                  stroke: "white",
                                                  "stroke-linecap": "round",
                                                  "stroke-linejoin": "round",
                                                }),
                                                (0, i.jsx)("path", {
                                                  d: "M14 20H18L26.375 18.0738C26.6829 17.9894 27.0061 17.9771 27.3195 18.038C27.6329 18.0989 27.9281 18.2312 28.182 18.4247C28.436 18.6181 28.6419 18.8676 28.7838 19.1536C28.9256 19.4396 28.9996 19.7545 29 20.0738C29.0002 20.4592 28.8929 20.8371 28.6902 21.165C28.4875 21.4929 28.1974 21.7578 27.8525 21.93L23 24L15 26H6V19L9.125 15.875C9.40432 15.5967 9.73577 15.3761 10.1004 15.226C10.465 15.0758 10.8557 14.999 11.25 15H17.5C18.163 15 18.7989 15.2634 19.2678 15.7322C19.7366 16.2011 20 16.837 20 17.5C20 18.1631 19.7366 18.7989 19.2678 19.2678C18.7989 19.7366 18.163 20 17.5 20H14Z",
                                                  stroke: "white",
                                                  "stroke-linecap": "round",
                                                  "stroke-linejoin": "round",
                                                }),
                                                (0, i.jsx)("path", {
                                                  d: "M22.0003 10.6613C21.321 10.9826 20.5564 11.0767 19.8194 10.9297C19.0825 10.7828 18.4124 10.4026 17.9083 9.8453C17.4042 9.28804 17.0929 8.58334 17.0203 7.83541C16.9477 7.08749 17.1177 6.33606 17.5053 5.69227C17.8928 5.04847 18.4773 4.5465 19.1722 4.26058C19.8671 3.97466 20.6356 3.91998 21.364 4.10463C22.0924 4.28929 22.742 4.70346 23.2168 5.2859C23.6916 5.86835 23.9663 6.58813 24.0003 7.33879",
                                                  stroke: "white",
                                                  "stroke-linecap": "round",
                                                  "stroke-linejoin": "round",
                                                }),
                                              ],
                                            }),
                                            (0, i.jsx)("defs", {
                                              children: (0, i.jsx)("clipPath", {
                                                id: "clip0_308_450",
                                                children: (0, i.jsx)("rect", {
                                                  width: "32",
                                                  height: "32",
                                                  fill: "white",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                    "Rewards",
                                  ],
                                }),
                                "/rewards" === e &&
                                  (0, i.jsx)(b.E.span, {
                                    layoutId: "navbox",
                                    transition: { type: "spring", damping: 12 },
                                    className:
                                      "bg-[#3C3B414D] z-[-1]  w-full rounded-lg h-full absolute top-0 left-0",
                                  }),
                                "/rewards" === e &&
                                  (0, i.jsx)(b.E.span, {
                                    layoutId: "navLine",
                                    transition: {
                                      type: "spring",
                                      delay: 0.2,
                                      damping: 11,
                                    },
                                    className:
                                      "bg-navGradient h-[3px] z-[-1]  w-full rounded-lg  absolute bottom-0 left-0",
                                  }),
                              ],
                            }),
                          }),
                        ],
                      }),
                  (0, i.jsx)("button", {
                    className: "rounded-full ".concat(
                      a ? "bg-transparent" : "bg-[#0E6057]",
                      " w-[190px] h-14 shadow-buttonInnerShadow text-white text-lg max-lg:hidden font-medium "
                    ),
                    onClick: () => t.open(),
                    children: a && n ? C.addressConvertor(n) : "Connect Wallet",
                  }),
                  (0, i.jsx)(E.cFv, {
                    className:
                      "text-white flex-shrink-0 text-3xl sm:text-4xl lg:hidden ",
                    onClick: () => h(!u),
                  }),
                  (0, i.jsx)(_.M, {
                    mode: "wait",
                    initial: !1,
                    children: u && (0, i.jsx)(T, { setShowDrawer: h }),
                  }),
                ],
              }),
            }),
          })
        );
      };
    },
    7422: function (e, t) {
      "use strict";
      t.Z = [
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "allowance", type: "uint256" },
            { internalType: "uint256", name: "needed", type: "uint256" },
          ],
          name: "ERC20InsufficientAllowance",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "sender", type: "address" },
            { internalType: "uint256", name: "balance", type: "uint256" },
            { internalType: "uint256", name: "needed", type: "uint256" },
          ],
          name: "ERC20InsufficientBalance",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "approver", type: "address" },
          ],
          name: "ERC20InvalidApprover",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "receiver", type: "address" },
          ],
          name: "ERC20InvalidReceiver",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "sender", type: "address" },
          ],
          name: "ERC20InvalidSender",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "ERC20InvalidSpender",
          type: "error",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
      ];
    },
    6952: function (e, t, n) {
      "use strict";
      n.d(t, {
        q: function () {
          return r;
        },
      });
      let a = "https://api.agora-ai.market",
        r = {
          AUTH: "".concat(a, "/api/auth"),
          USER: "".concat(a, "/api/user"),
          THREAD: "".concat(a, "/agents/thread"),
          MESSAGE: "".concat(a, "/agents/message"),
          UPDATE_SYSTEM: "".concat(a, "/agents/update-system"),
          AGENTS: "".concat(a, "/agents/agents"),
          ALL_AGENTS: "".concat(a, "/agents/all-agents"),
          SEARCH: "".concat(a, "/agents/search-agent"),
          CATEGORY: "".concat(a, "/agents/agents-by-category"),
          DELETE_AGENT: "".concat(a, "/agents/agent"),
          RUN_ASSISTANT: "".concat(a, "/agents/run-assistant"),
          UPLOAD_FILE: "".concat(a, "/agents/upload-file"),
          CHAT: "".concat(a, "/agents/chat"),
          RESET: "".concat(a, "/api/reset-requests"),
        };
    },
    12028: function (e, t) {
      "use strict";
      var n, a;
      ((a = n || (n = {})).RPC = {
        1: "https://mainnet.infura.io/v3/".concat(
          "bcc22e7a745044b38d4e53d067b9f543"
        ),
        11155111: "https://sepolia.infura.io/v3/".concat(
          "bcc22e7a745044b38d4e53d067b9f543"
        ),
      }),
        (a.DEFAULT_CHAIN = 1),
        (a.TOKEN_ADDRESS = {
          1: "0x0000000000000000000000000000000000000000000000",
          11155111: "0x2DC08c8E731a66C6FFB5e47187CfC9e8E7FDBd22",
        }),
        (a.PAIR_ADDRESS = {
          1: "0x505cA67eC935eE3ae49Ef9Dc2e1DAeb0896A2F73",
          11155111: "0x0000000000000000000000000000000000000000",
        }),
        (a.REWARD_CONTRACT = {
          1: "0xa220aB7a33593145E342a59aaEeD164c114b10A6",
          11155111: "0x6Ae66A32E27270C894b3a49Bc1B7026d1C81B9Fa",
        }),
        (a.REWARDS_PER_HIT = 1200),
        (a.REQUIRED_PERCENTAGE_FOR_CREATOR = 5),
        (a.REQUIRED_PERCENTAGE_FOR_USER = 10),
        (a.MAX_AGENTS_PER_WALLET = 10),
        (a.TOKEN_DECIMALS = 18),
        (a.TOKEN_SYMBOL = "AGAI"),
        (a.ACTION_REJECTED = "ACTION_REJECTED"),
        (a.SIGNER_PRIVATE_KEY =
          "f51a5b3025e0e2d29ca14ff488e747b990c40a7256fcb5da983eb2fd8a8b5d88"),
        (t.Z = n);
    },
    62408: function (e, t, n) {
      "use strict";
      var a,
        r,
        s = n(15263),
        i = n(6952),
        l = n(13632),
        o = n(12028);
      let d = new s.Z();
      ((a = r || (r = {})).createAgent = async (e, t) => {
        try {
          let n = d.get("ai-agent-marketplace"),
            a = o.Z.MAX_AGENTS_PER_WALLET;
          return await l.Z.post(
            i.q.THREAD,
            { assistantName: e, category: t, agentlimit: a },
            {
              "Content-Type": "application/json",
              Authorization: "Bearer ".concat(n),
            }
          );
        } catch (e) {
          throw (console.error("Error authenticating user:", e), e);
        }
      }),
        (a.getAgents = async () => {
          try {
            let e = d.get("ai-agent-marketplace");
            return await l.Z.get(i.q.AGENTS, {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(e),
              },
            });
          } catch (e) {
            throw (console.error("Error authenticating user:", e), e);
          }
        }),
        (a.getAllAgent = async () => {
          try {
            return await l.Z.get(i.q.ALL_AGENTS, {
              headers: { "Content-Type": "application/json" },
            });
          } catch (e) {
            throw (console.error("Error authenticating user:", e), e);
          }
        }),
        (a.chatWithAi = async (e) => {
          try {
            let t = d.get("ai-agent-marketplace");
            return await fetch("".concat(i.q.CHAT), {
              method: "POST",
              headers: { Authorization: "Bearer ".concat(t) },
              body: e,
            });
          } catch (e) {
            throw (console.error("Error authenticating user:", e), e);
          }
        }),
        (a.searchAgents = async (e, t, n) => {
          try {
            return await l.Z.get(
              ""
                .concat(i.q.SEARCH, "?search=")
                .concat(e, "&page=")
                .concat(t, "&limit=")
                .concat(n),
              { headers: { "Content-Type": "application/json" } }
            );
          } catch (e) {
            throw (console.error("Error authenticating user:", e), e);
          }
        }),
        (a.agentByCategory = async (e) => {
          try {
            let t = d.get("ai-agent-marketplace");
            return await l.Z.get(
              "".concat(i.q.CATEGORY, "?category=").concat(e),
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer ".concat(t),
                },
              }
            );
          } catch (e) {
            throw (console.error("Error authenticating user:", e), e);
          }
        }),
        (a.trainAgent = async (e, t, n, a) => {
          try {
            let r = d.get("ai-agent-marketplace"),
              s = new FormData();
            return (
              s.append("file", e),
              s.append("userId", t),
              s.append("threadId", n),
              s.append("systemInfo", a),
              console.log("file", e),
              await l.Z.post(i.q.UPLOAD_FILE, s, {
                Authorization: "Bearer ".concat(r),
              })
            );
          } catch (e) {
            throw (console.error("Error authenticating user:", e), e);
          }
        }),
        (a.resetRequest = async (e, t, n) => {
          try {
            return await l.Z.get(
              ""
                .concat(i.q.RESET, "?address=")
                .concat(e, "&transactionHash=")
                .concat(t, "&blockNumber=")
                .concat(n)
            );
          } catch (e) {
            throw e;
          }
        }),
        (a.getUser = async () => {
          try {
            let e = d.get("ai-agent-marketplace");
            return await l.Z.get("".concat(i.q.USER), {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(e),
              },
            });
          } catch (e) {
            throw e;
          }
        }),
        (a.deleteAgent = async (e) => {
          try {
            let t = d.get("ai-agent-marketplace");
            return await l.Z.del(
              "".concat(i.q.DELETE_AGENT, "?assistantId=").concat(e),
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer ".concat(t),
                },
              }
            );
          } catch (e) {
            throw (console.error("Error authenticating user:", e), e);
          }
        }),
        (t.Z = r);
    },
    13632: function (e, t, n) {
      "use strict";
      var a,
        r,
        s = n(38472);
      ((a = r || (r = {})).post = async (e, t, n) => {
        try {
          return (await s.Z.post(e, t, n && { headers: n })).data;
        } catch (e) {
          throw e;
        }
      }),
        (a.put = async (e, t) => {
          try {
            return (await s.Z.put(e, t)).data;
          } catch (e) {
            throw e;
          }
        }),
        (a.del = async (e, t) => {
          try {
            return (await s.Z.delete(e, t)).data;
          } catch (e) {
            throw e;
          }
        }),
        (a.get = async (e, t) => {
          try {
            return (await s.Z.get(e, t)).data;
          } catch (e) {
            throw e;
          }
        }),
        (t.Z = r);
    },
    97118: function (e, t, n) {
      "use strict";
      let a = (0, n(39099).Ue)((e) => ({
        userId: null,
        threadId: null,
        agents: [],
        api: null,
        chat: [],
        setChat: (t) => e((e) => ({ chat: [...e.chat, t] })),
        updateChat: (t, n, a) =>
          e((e) => ({
            chat: e.chat.map((e) =>
              e.id === t ? { ...e, text: e.text + n, isThinking: a } : e
            ),
          })),
        setApi: (t) => e({ api: t }),
        setUserId: (t) => e({ userId: t }),
        setThreadId: (t) => e({ threadId: t }),
        setAgents: (t) => e({ agents: t }),
      }));
      t.Z = a;
    },
  },
]);
