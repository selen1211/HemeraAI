(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [620],
  {
    91626: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 17099)),
        Promise.resolve().then(s.bind(s, 74909));
    },
    17099: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return p;
        },
      });
      var a = s(57437),
        l = s(66648),
        i = s(2265),
        r = {
          src: "/_next/static/media/agentListImg.4a8a5e1c.png",
          height: 163,
          width: 809,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAABlBMVEUSUEIAQEBk0ku3AAAAAnRSTlMCBEPIa6MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAASSURBVHicY2AEAQYGRgYQCaIBAHgACmBOriAAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 2,
        },
        n = s(85097),
        c = s(72655),
        d = s(88726),
        o = s(97118),
        x = s(14536),
        A = s(62408),
        h = s(62640),
        u = s(28730),
        m = s(87138),
        g = (e) => {
          let { agent: t } = e,
            s = "text-white sm:text-lg flex-1";
          return (0, a.jsxs)("div", {
            className: "flex items-center justify-between py-3",
            children: [
              (0, a.jsx)("h1", { className: s, children: t.agentName }),
              (0, a.jsx)("h1", {
                className: "".concat(s, " text-center"),
                children: t.category,
              }),
              (0, a.jsx)(m.default, {
                href: "/interact-agent?id="
                  .concat(t.secret, "&creator=")
                  .concat(t.userId.walletAddress),
                className: "".concat(s, " pr-2"),
                children: (0, a.jsx)(c.Ma9, {
                  className:
                    "!text-[#46B2A3] ml-auto block text-xl  sm:text-2xl cursor-pointer",
                }),
              }),
            ],
          });
        },
        f = s(66676),
        p = () => {
          let e = "text-[#46B2A3] sm:text-lg flex-1",
            { userId: t, agents: s, setAgents: m } = (0, o.Z)(),
            { address: p, isConnected: j } = (0, x.Zc)(),
            [C, w] = (0, i.useState)(""),
            [v, b] = (0, i.useState)(!1),
            [N, y] = (0, i.useState)(1),
            [B, S] = (0, i.useState)(!1),
            [I, k] = (0, i.useState)(""),
            E = async () => {
              try {
                b(!0);
                let e = await A.Z.getAllAgent();
                (null == e ? void 0 : e.agents) ? m(e.agents) : m([]), b(!1);
              } catch (e) {
                b(!1),
                  console.error("Failed to list agents", e),
                  d.ZP.error("Failed to list agents.");
              } finally {
                b(!1);
              }
            },
            M = (0, i.useCallback)(
              async (e) => {
                if (!v)
                  try {
                    let t = { page: N, limit: 10 },
                      s = await A.Z.searchAgents(e, t.page, t.limit);
                    200 === s.status && m(s.agents);
                  } catch (e) {
                    console.error("Error fetching music:", e);
                  } finally {
                    b(!1);
                  }
              },
              [N]
            ),
            _ = async (e) => {
              try {
                k(e);
                let t = await A.Z.agentByCategory(e);
                (null == t ? void 0 : t.agents) ? m(t.agents) : m([]), b(!1);
              } catch (e) {
                b(!1),
                  console.error("Failed to list agents", e),
                  d.ZP.error("Failed to list agents.");
              } finally {
                b(!1);
              }
            };
          return (
            (0, i.useEffect)(() => {
              B || E();
            }, [B]),
            (0, i.useEffect)(() => {
              E();
            }, [t]),
            (0, a.jsxs)("div", {
              className: "relative",
              children: [
                v && (0, a.jsx)(f.Z, {}),
                (0, a.jsx)("div", {
                  className:
                    "absolute top-12 sm:top-8 left-1/2 -translate-x-1/2 z-[-1] w-full mx-auto block",
                  children: (0, a.jsx)(l.default, {
                    src: r,
                    alt: "agentListImg",
                    className: "select-none max-xl:w-[800px] mx-auto block ",
                    draggable: !1,
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "container pt-16 lg:pt-28",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "flex items-center flex-wrap gap-y-4 justify-between",
                      children: [
                        (0, a.jsx)("p", {
                          className:
                            "text-white text-xl sm:text-2xl  lg:text-3xl",
                          children: "Agents List",
                        }),
                        (0, a.jsx)("div", {
                          className: "lg:ml-40",
                          children: (0, a.jsx)("div", {
                            className:
                              "bg-[#FFFFFF05] md:mx-auto flex items-center justify-center w-fit gap-3 rounded-full px-4 py-3 shadow-heroInnerShadow",
                            children: (0, a.jsxs)("p", {
                              className:
                                "text-white sm:text-lg flex items-center justify-center gap-2",
                              children: [
                                (0, a.jsxs)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "26",
                                  height: "26",
                                  viewBox: "0 0 26 26",
                                  fill: "none",
                                  children: [
                                    (0, a.jsx)("g", {
                                      clipPath: "url(#clip0_264_213)",
                                      children: (0, a.jsx)("g", {
                                        filter: "url(#filter0_i_264_213)",
                                        children: (0, a.jsx)("path", {
                                          d: "M20.6879 3.93201H5.31289C4.90512 3.93201 4.51405 4.09399 4.22571 4.38233C3.93738 4.67067 3.77539 5.06174 3.77539 5.46951V20.8445C3.77539 21.2523 3.93738 21.6433 4.22571 21.9317C4.51405 22.22 4.90512 22.382 5.31289 22.382H20.6879C21.0957 22.382 21.4867 22.22 21.7751 21.9317C22.0634 21.6433 22.2254 21.2523 22.2254 20.8445V5.46951C22.2254 5.06174 22.0634 4.67067 21.7751 4.38233C21.4867 4.09399 21.0957 3.93201 20.6879 3.93201ZM19.1504 18.5383H6.85039C6.64651 18.5383 6.45097 18.4573 6.3068 18.3131C6.16263 18.1689 6.08164 17.9734 6.08164 17.7695C6.08164 17.5656 6.16263 17.3701 6.3068 17.2259C6.45097 17.0817 6.64651 17.0008 6.85039 17.0008H19.1504C19.3543 17.0008 19.5498 17.0817 19.694 17.2259C19.8381 17.3701 19.9191 17.5656 19.9191 17.7695C19.9191 17.9734 19.8381 18.1689 19.694 18.3131C19.5498 18.4573 19.3543 18.5383 19.1504 18.5383ZM19.1504 13.9258H6.85039C6.64651 13.9258 6.45097 13.8448 6.3068 13.7006C6.16263 13.5564 6.08164 13.3609 6.08164 13.157C6.08164 12.9531 6.16263 12.7576 6.3068 12.6134C6.45097 12.4692 6.64651 12.3883 6.85039 12.3883H19.1504C19.3543 12.3883 19.5498 12.4692 19.694 12.6134C19.8381 12.7576 19.9191 12.9531 19.9191 13.157C19.9191 13.3609 19.8381 13.5564 19.694 13.7006C19.5498 13.8448 19.3543 13.9258 19.1504 13.9258ZM19.1504 9.31326H6.85039C6.64651 9.31326 6.45097 9.23226 6.3068 9.0881C6.16263 8.94393 6.08164 8.74839 6.08164 8.54451C6.08164 8.34062 6.16263 8.14509 6.3068 8.00092C6.45097 7.85675 6.64651 7.77576 6.85039 7.77576H19.1504C19.3543 7.77576 19.5498 7.85675 19.694 8.00092C19.8381 8.14509 19.9191 8.34062 19.9191 8.54451C19.9191 8.74839 19.8381 8.94393 19.694 9.0881C19.5498 9.23226 19.3543 9.31326 19.1504 9.31326Z",
                                          fill: "#46B2A3",
                                        }),
                                      }),
                                    }),
                                    (0, a.jsxs)("defs", {
                                      children: [
                                        (0, a.jsxs)("filter", {
                                          id: "filter0_i_264_213",
                                          x: "3.77539",
                                          y: "3.93201",
                                          width: "18.5585",
                                          height: "18.6665",
                                          filterUnits: "userSpaceOnUse",
                                          "color-interpolation-filters": "sRGB",
                                          children: [
                                            (0, a.jsx)("feFlood", {
                                              "flood-opacity": "0",
                                              result: "BackgroundImageFix",
                                            }),
                                            (0, a.jsx)("feBlend", {
                                              mode: "normal",
                                              in: "SourceGraphic",
                                              in2: "BackgroundImageFix",
                                              result: "shape",
                                            }),
                                            (0, a.jsx)("feColorMatrix", {
                                              in: "SourceAlpha",
                                              type: "matrix",
                                              values:
                                                "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                              result: "hardAlpha",
                                            }),
                                            (0, a.jsx)("feOffset", {
                                              dx: "0.108255",
                                              dy: "0.21651",
                                            }),
                                            (0, a.jsx)("feGaussianBlur", {
                                              stdDeviation: "2.70638",
                                            }),
                                            (0, a.jsx)("feComposite", {
                                              in2: "hardAlpha",
                                              operator: "arithmetic",
                                              k2: "-1",
                                              k3: "1",
                                            }),
                                            (0, a.jsx)("feColorMatrix", {
                                              type: "matrix",
                                              values:
                                                "0 0 0 0 0.9125 0 0 0 0 0.927083 0 0 0 0 1 0 0 0 0.7 0",
                                            }),
                                            (0, a.jsx)("feBlend", {
                                              mode: "normal",
                                              in2: "shape",
                                              result:
                                                "effect1_innerShadow_264_213",
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("clipPath", {
                                          id: "clip0_264_213",
                                          children: (0, a.jsx)("rect", {
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
                                }),
                                "Agents List",
                              ],
                            }),
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "w-[256px] h-10 relative ",
                              children: [
                                (0, a.jsx)("input", {
                                  type: "text",
                                  placeholder: "Search agent",
                                  className:
                                    "w-full h-full focus:outline-none rounded-full placeholder:text-[#46B2A34D] bg-[#0C1A1F] border border-[#3A464A] text-white  px-4 ps-12",
                                  value: C,
                                  onChange: (e) => {
                                    w(e.target.value), M(e.target.value);
                                  },
                                }),
                                (0, a.jsx)("div", {
                                  className:
                                    "absolute top-1/2 -translate-y-1/2 left-4",
                                  children: (0, a.jsx)(n.eaK, {
                                    className: "text-[#46B2A34D] text-2xl ",
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "border border-[#3A464A] rounded-full bg-[#0C1A1F] cursor-pointer size-10  flex items-center justify-center ".concat(
                                  B ? "bg-[#46B2A3]" : ""
                                ),
                              onClick: () => {
                                S(!B);
                              },
                              children: (0, a.jsx)(c.a9n, {
                                className: "text-xl text-[#46B2A3] ".concat(
                                  B && "text-white"
                                ),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "".concat(B ? "flex gap-5" : "hidden"),
                      children: h.S.map((e, t) =>
                        (0, a.jsx)(
                          "div",
                          {
                            className:
                              "flex items-center gap-2 cursor-pointer border border-[#46B2A3] px-5 py-2 rounded-lg ".concat(
                                e === I ? "bg-[#46B2A3]" : ""
                              ),
                            onClick: () => _(e),
                            children: (0, a.jsx)("p", {
                              className: "text-white text-sm",
                              children: e,
                            }),
                          },
                          t
                        )
                      ),
                    }),
                    (0, a.jsx)("div", {
                      className: "mt-5 sm:mt-8",
                      children: (0, a.jsx)("div", {
                        className:
                          "bg-[#46B2A30A] rounded-xl shadow-heroInnerShadow pr-2 pl-3 sm:pl-8 py-6",
                        children: (0, a.jsxs)("div", {
                          className:
                            "max-h-[450px] overflow-y-auto table-scrollbar",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "flex items-center justify-between",
                              children: [
                                (0, a.jsx)("h1", {
                                  className: e,
                                  children: "Agent Name",
                                }),
                                (0, a.jsx)("h1", {
                                  className: "".concat(e, " text-center"),
                                  children: "Category",
                                }),
                                (0, a.jsx)("div", { className: "flex-1" }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              children:
                                (null == s ? void 0 : s.length) > 0
                                  ? null == s
                                    ? void 0
                                    : s.map((e, t) =>
                                        (0, a.jsx)(g, { agent: e }, t)
                                      )
                                  : (0, a.jsx)("div", {
                                      className:
                                        "min-h-[300px] flex items-center justify-center",
                                      children: (0, a.jsx)(u.Z, {}),
                                    }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        };
    },
    66676: function (e, t, s) {
      "use strict";
      var a = s(57437),
        l = s(66648);
      s(2265);
      var i = s(76854);
      t.Z = () =>
        (0, a.jsx)("div", {
          className:
            "fixed bg-black bg-opacity-60 backdrop-blur-sm inset-0 w-full h-full z-50 flex flex-col justify-center items-center",
          children: (0, a.jsx)("div", {
            className: "animate-spin transition-all duration-1000",
            children: (0, a.jsx)(l.default, {
              src: i.default,
              alt: "loaderImg",
            }),
          }),
        });
    },
    28730: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return r;
        },
      });
      var a = s(57437),
        l = s(66648);
      s(2265);
      var i = {
          src: "/_next/static/media/noDataImg.a7d4ceeb.svg",
          height: 60,
          width: 61,
          blurWidth: 0,
          blurHeight: 0,
        },
        r = () =>
          (0, a.jsxs)("div", {
            className: "flex items-center justify-center flex-col gap-2",
            children: [
              (0, a.jsx)(l.default, { src: i, alt: "noDataImg" }),
              (0, a.jsx)("p", {
                className: "text-white text-lg",
                children: "No data found",
              }),
            ],
          });
    },
    62640: function (e, t, s) {
      "use strict";
      s.d(t, {
        S: function () {
          return a;
        },
      });
      let a = ["Medical Assistant", "Programmer Assistant", "Crypto Assistant"];
    },
    76854: function (e, t, s) {
      "use strict";
      s.r(t),
        (t.default = {
          src: "/_next/static/media/loaderImg.4a681d1e.png",
          height: 94,
          width: 94,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAQlBMVEUziodMaXEDJ0IAIiIXUV4eXmgpd3oPQlUxiIQVS1kKMkkja3A4lY5Cq547nJM/ppolcXQug4FApps5lo8vf4FAppvOpEylAAAAFXRSTlMdABwFW3OcM7dHEIfK3uHLZX6ikys0buOlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVR4nAXBhxHAIAwAsQdcqSmX/VeNROEamr2A2VCVzh02VMSJCJPMJOac7u68ey+qVzjfotdG4Tm0Vn5CnwHYWx6R9wAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
  },
  function (e) {
    e.O(
      0,
      [
        522, 452, 764, 840, 665, 706, 950, 173, 78, 494, 935, 816, 534, 971, 23,
        744,
      ],
      function () {
        return e((e.s = 91626));
      }
    ),
      (_N_E = e.O());
  },
]);
