(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [195],
  {
    66145: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 31670)),
        Promise.resolve().then(s.bind(s, 74909));
    },
    31670: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return R;
        },
      });
      var n,
        a = s(57437),
        i = s(66648),
        r = s(2265),
        l = {
          src: "/_next/static/media/Rewards.9193b3c5.png",
          height: 127,
          width: 679,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAABlBMVEUAQEAATk6ZHrenAAAAAnRSTlMEBvucrQkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAARSURBVHicY2BkYGBgZGBkAAAAFwAE5sTYrgAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 1,
        },
        d = s(23051),
        o = s(12028),
        c = (e) => {
          let { item: t } = e,
            s = "text-white sm:text-lg flex-1 text-sm";
          return (0, a.jsx)("div", {
            children: (0, a.jsxs)("div", {
              className: "flex items-center justify-between py-3",
              children: [
                (0, a.jsx)("h1", {
                  className: s,
                  children: t.agentId.agentName,
                }),
                (0, a.jsx)("h1", {
                  className: "".concat(s, " text-center"),
                  children: t.agentId.category,
                }),
                (0, a.jsx)("h1", {
                  className: "".concat(s, " text-center"),
                  children: t.noOfRequests
                    ? t.noOfRequests * o.Z.REWARDS_PER_HIT
                    : 0,
                }),
              ],
            }),
          });
        },
        u = s(62408),
        p = s(88726),
        m = s(97118),
        x = s(14536),
        h = s(66676),
        y = s(28730),
        g = s(19267),
        A = s(30625),
        f = s(71581);
      let w = [
        {
          inputs: [
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "uint256", name: "timestamp", type: "uint256" },
            { internalType: "bytes", name: "signature", type: "bytes" },
          ],
          name: "claim",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        { inputs: [], stateMutability: "nonpayable", type: "constructor" },
        {
          inputs: [{ internalType: "address", name: "owner", type: "address" }],
          name: "OwnableInvalidOwner",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "OwnableUnauthorizedAccount",
          type: "error",
        },
        { inputs: [], name: "ReentrancyGuardReentrantCall", type: "error" },
        {
          inputs: [{ internalType: "address", name: "token", type: "address" }],
          name: "SafeERC20FailedOperation",
          type: "error",
        },
        { inputs: [], name: "insufficientBalance", type: "error" },
        { inputs: [], name: "invalidSignature", type: "error" },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "RewardsClaimed",
          type: "event",
        },
        {
          inputs: [
            { internalType: "address", name: "_signer", type: "address" },
          ],
          name: "setSigner",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "user", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "uint256", name: "timestamp", type: "uint256" },
          ],
          name: "getHash",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "getSigner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "user", type: "address" }],
          name: "getUserClaimedReward",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
          name: "isSignUsed",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "signer",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "token",
          outputs: [
            { internalType: "contract IERC20", name: "", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
        },
      ];
      var C = s(86860),
        b = s(89859);
      (n || (n = {})).signMessage = async (e) => {
        try {
          let t = new C.w(o.Z.SIGNER_PRIVATE_KEY),
            s = await t.signMessage(b.Pw(e));
          return console.log("Signed Message:", s), s;
        } catch (e) {
          console.log("error ", e);
        }
      };
      var j = n,
        v = s(12599),
        R = () => {
          var e, t, s, n;
          let C = "text-[#46B2A3] sm:text-lg flex-1 text-xs",
            [b, R] = (0, r.useState)([]),
            [N, E] = (0, r.useState)(!1),
            { userId: T } = (0, m.Z)(),
            { address: M, isConnected: O, chainId: _ } = (0, x.Zc)(),
            { walletProvider: S } = (0, x.B0)(),
            [I, B] = (0, r.useState)(BigInt(0)),
            Z = async () => {
              if (T && M && O)
                try {
                  E(!0);
                  let e = await u.Z.getUser();
                  200 === e.success && (R(e.user), E(!1));
                } catch (e) {
                  console.error("Failed to list agents", e),
                    p.ZP.error("We suspect Something Wrong please try again!"),
                    E(!1);
                } finally {
                  E(!1);
                }
            };
          (0, r.useEffect)(() => {
            R([]), Z();
          }, [T]);
          let k = (e) =>
              Array.isArray(e) && 0 !== e.length
                ? e.reduce((e, t) => e + (t.noOfRequests || 0), 0)
                : 0,
            U = async () => {
              try {
                if (!T || !M || !O) return;
                let e = new g.Q(S),
                  t = new A.CH(o.Z.REWARD_CONTRACT[o.Z.DEFAULT_CHAIN], w, e),
                  s = await t.getUserClaimedReward(M);
                B(s);
              } catch (e) {
                console.log("error in getting user rewards", e);
              }
            };
          (0, r.useEffect)(() => {
            B(BigInt(0)), U();
          }, [T, O, M]);
          let H = async () => {
            try {
              if (!T || !M || !O) return;
              E(!0);
              let e = new g.Q(S),
                t = await e.getSigner(),
                s = new A.CH(o.Z.REWARD_CONTRACT[o.Z.DEFAULT_CHAIN], w, t);
              await Z(), E(!0);
              let n = k(null == b ? void 0 : b.noOfAgents);
              console.log("totalRquests", n);
              let a = n * o.Z.REWARDS_PER_HIT,
                i = f.vz(a.toString(), o.Z.TOKEN_DECIMALS),
                r = Math.ceil(Date.now() / 1e3),
                l = await s.getHash(M, i, r),
                d = await j.signMessage(l);
              if ((console.log("SIGN", d), await s.isSignUsed(d)))
                throw Error("Signature already used");
              let c = await s.claim(i, r, d),
                m = await c.wait();
              console.log(
                "receipt",
                null == m ? void 0 : m.blockNumber,
                m.hash
              ),
                await u.Z.resetRequest(
                  M.toLowerCase(),
                  m.hash,
                  m.blockNumber.toString()
                ),
                await Z(),
                await U(),
                E(!1),
                p.ZP.success("Rewards claimed successfully");
            } catch (e) {
              console.log("error in claiming rewards", e),
                E(!1),
                e.code === o.Z.ACTION_REJECTED
                  ? p.ZP.error("User denied transaction")
                  : e.message && p.ZP.error(e.message);
            }
          };
          return (0, a.jsxs)("div", {
            className: "relative",
            children: [
              N && (0, a.jsx)(h.Z, {}),
              (0, a.jsx)("div", {
                className:
                  "absolute top-12 sm:top-8 left-1/2 -translate-x-1/2 z-[-1] w-full mx-auto block",
                children: (0, a.jsx)(i.default, {
                  src: l,
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
                        children: "Rewards",
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
                                height: "25",
                                viewBox: "0 0 26 25",
                                fill: "none",
                                children: [
                                  (0, a.jsx)("g", {
                                    "clip-path": "url(#clip0_308_463)",
                                    children: (0, a.jsx)("g", {
                                      filter: "url(#filter0_i_308_463)",
                                      children: (0, a.jsx)("path", {
                                        d: "M12.8067 5.5114C12.8498 4.91481 13.0468 4.33959 13.3785 3.84187C13.7103 3.34416 14.1654 2.94096 14.6995 2.67164C15.2336 2.40233 15.8284 2.27609 16.4258 2.30526C17.0232 2.33443 17.6029 2.51801 18.1082 2.83807C18.166 2.87587 18.2125 2.92854 18.2429 2.99053C18.2733 3.05252 18.2864 3.12155 18.2809 3.19037C18.2754 3.25919 18.2514 3.32526 18.2116 3.38163C18.1717 3.438 18.1174 3.4826 18.0544 3.51073C17.176 3.90594 16.4303 4.54633 15.907 5.35499C15.3837 6.16365 15.105 7.1062 15.1043 8.06942C15.1043 8.18185 15.1043 8.29428 15.1158 8.40479C15.1211 8.47463 15.1072 8.5446 15.0757 8.60713C15.0441 8.66966 14.996 8.72237 14.9367 8.75956C14.8773 8.79676 14.8089 8.81703 14.7389 8.81818C14.6688 8.81933 14.5998 8.80132 14.5393 8.7661C13.973 8.44217 13.5098 7.96471 13.2032 7.38881C12.8967 6.81292 12.7592 6.16208 12.8067 5.5114ZM23.5605 15.4312C23.5619 15.8704 23.4402 16.3013 23.2092 16.675C22.9783 17.0486 22.6472 17.3501 22.2537 17.5452L22.2114 17.5644L18.4801 19.1538C18.4432 19.1701 18.4049 19.1829 18.3657 19.1923L12.2157 20.7298C12.1548 20.7454 12.0922 20.7535 12.0293 20.7538H2.03555C1.62778 20.7538 1.23671 20.5918 0.94837 20.3035C0.660033 20.0151 0.498047 19.6241 0.498047 19.2163V15.3725C0.498047 14.9648 0.660033 14.5737 0.94837 14.2854C1.23671 13.997 1.62778 13.835 2.03555 13.835H4.34393C4.63112 13.835 4.90655 13.7209 5.10958 13.5178L6.96612 11.6604C7.25114 11.3741 7.59006 11.1472 7.96331 10.9926C8.33656 10.8381 8.73674 10.759 9.14072 10.76H13.9512C14.3572 10.76 14.758 10.8519 15.1236 11.0288C15.4891 11.2056 15.8098 11.463 16.0617 11.7815C16.3136 12.0999 16.4902 12.4713 16.5782 12.8677C16.6993 13.4133 17.2073 13.9239 17.7519 13.7987L20.5903 13.1461C20.9403 13.0534 21.3069 13.0423 21.6619 13.1137C22.0169 13.185 22.3507 13.337 22.6377 13.5578C22.9247 13.7785 23.1571 14.0623 23.3171 14.3871C23.4771 14.7119 23.5604 15.0691 23.5605 15.4312ZM22.023 15.4312C22.0229 15.3041 21.9935 15.1787 21.9371 15.0648C21.8807 14.9509 21.7988 14.8515 21.6978 14.7744C21.5968 14.6972 21.4793 14.6444 21.3546 14.62C21.2298 14.5956 21.1012 14.6002 20.9785 14.6336L20.9487 14.6413L14.5104 16.1221C14.454 16.1347 14.3963 16.1411 14.3384 16.1413H11.2605C11.0567 16.1413 10.8611 16.0603 10.717 15.9161C10.5728 15.772 10.4918 15.5764 10.4918 15.3725C10.4918 15.1687 10.5728 14.9731 10.717 14.829C10.8611 14.6848 11.0567 14.6038 11.2605 14.6038H13.9512C14.257 14.6038 14.5503 14.4823 14.7666 14.2661C14.9828 14.0498 15.1043 13.7565 15.1043 13.4507C15.1043 13.1448 14.9828 12.8515 14.7666 12.6353C14.5503 12.419 14.257 12.2975 13.9512 12.2975H9.14072C8.93874 12.2969 8.73864 12.3364 8.55206 12.4138C8.36549 12.4911 8.19615 12.6048 8.0539 12.7482L6.19654 14.6048C5.99342 14.8078 5.8793 15.0832 5.8793 15.3704V18.1337C5.8793 18.7316 6.36397 19.2163 6.96185 19.2163H11.7999C11.8884 19.2163 11.9766 19.2054 12.0625 19.184L17.8494 17.737C17.9046 17.7232 17.9586 17.7051 18.0109 17.6828L21.5839 16.1615C21.7168 16.0915 21.828 15.9864 21.9054 15.8576C21.9828 15.7289 22.0235 15.5814 22.023 15.4312ZM16.6418 8.06942C16.6418 8.75362 16.8447 9.42245 17.2248 9.99134C17.6049 10.5602 18.1452 11.0036 18.7773 11.2655C19.4094 11.5273 20.105 11.5958 20.7761 11.4623C21.4471 11.3288 22.0635 10.9994 22.5473 10.5156C23.0311 10.0318 23.3606 9.41536 23.4941 8.74431C23.6276 8.07326 23.559 7.37769 23.2972 6.74557C23.0354 6.11345 22.592 5.57317 22.0231 5.19305C21.4542 4.81293 20.7854 4.61004 20.1012 4.61004C19.1837 4.61004 18.3038 4.97451 17.655 5.62327C17.0063 6.27203 16.6418 7.15194 16.6418 8.06942Z",
                                        fill: "#46B2A3",
                                      }),
                                    }),
                                  }),
                                  (0, a.jsxs)("defs", {
                                    children: [
                                      (0, a.jsxs)("filter", {
                                        id: "filter0_i_308_463",
                                        x: "0.498047",
                                        y: "2.30115",
                                        width: "23.1708",
                                        height: "18.6691",
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
                                              "effect1_innerShadow_308_463",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsx)("clipPath", {
                                        id: "clip0_308_463",
                                        children: (0, a.jsx)("rect", {
                                          width: "24.6",
                                          height: "24.6",
                                          fill: "white",
                                          transform:
                                            "translate(0.498047 -0.00244141)",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              "Rewards",
                            ],
                          }),
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-2 flex-col",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "rounded-[30px] bg-[#0E605733] w-[300px] lg:w-[309px] h-[39px] flex justify-center items-center",
                            children: (0, a.jsxs)("p", {
                              className: "text-[#5CE8D4]  text-sm",
                              children: [
                                "Total Claimed:",
                                " ",
                                (0, a.jsxs)("span", {
                                  className: "font-semibold text-white",
                                  children: [
                                    " ",
                                    I > 0 ? f.bM(I, "ether") : 0,
                                    " ",
                                    o.Z.TOKEN_SYMBOL,
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)(v.Z, {
                            title: "Rewards claimable after every 12 hours",
                            children: (0, a.jsxs)("button", {
                              className:
                                "w-[300px] lg:w-[309px] h-12 lg:h-14 bg-[#0E6057] rounded-full text-sm lg:text-base flex items-center \n                justify-center text-white shadow-buttonInnerShadow gap-1.5 font-semibold disabled:cursor-not-allowed disabled:opacity-50",
                              disabled: !0,
                              onClick: () => H(),
                              children: [
                                (0, a.jsx)(d.QyB, {
                                  className: "text-xl lg:text-2xl",
                                }),
                                b &&
                                (null === (e = b.noOfAgents) || void 0 === e
                                  ? void 0
                                  : e.length) != 0
                                  ? "Claim Rewards (".concat(
                                      k(b.noOfAgents) * o.Z.REWARDS_PER_HIT,
                                      ")"
                                    )
                                  : "Claim Rewards",
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
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
                                className: C,
                                children: "Agent Name",
                              }),
                              (0, a.jsx)("h1", {
                                className: "".concat(C, " text-center"),
                                children: "Category",
                              }),
                              (0, a.jsx)("h1", {
                                className: "".concat(C, " text-center"),
                                children: "Rewards",
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            children:
                              (null == b
                                ? void 0
                                : null === (t = b.noOfAgents) || void 0 === t
                                ? void 0
                                : t.length) > 0 &&
                              (null == b
                                ? void 0
                                : null === (s = b.noOfAgents) || void 0 === s
                                ? void 0
                                : s.filter((e) => e.noOfRequests > 0).length) >
                                0
                                ? null == b
                                  ? void 0
                                  : null === (n = b.noOfAgents) || void 0 === n
                                  ? void 0
                                  : n
                                      .filter((e) => e.noOfRequests > 0)
                                      .map((e, t) =>
                                        (0, a.jsx)(c, { item: e }, t)
                                      )
                                : (0, a.jsx)("div", {
                                    className:
                                      "min-h-[300px] flex items-center justify-center",
                                    children: (0, a.jsx)(y.Z, {}),
                                  }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        };
    },
    66676: function (e, t, s) {
      "use strict";
      var n = s(57437),
        a = s(66648);
      s(2265);
      var i = s(76854);
      t.Z = () =>
        (0, n.jsx)("div", {
          className:
            "fixed bg-black bg-opacity-60 backdrop-blur-sm inset-0 w-full h-full z-50 flex flex-col justify-center items-center",
          children: (0, n.jsx)("div", {
            className: "animate-spin transition-all duration-1000",
            children: (0, n.jsx)(a.default, {
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
      var n = s(57437),
        a = s(66648);
      s(2265);
      var i = {
          src: "/_next/static/media/noDataImg.a7d4ceeb.svg",
          height: 60,
          width: 61,
          blurWidth: 0,
          blurHeight: 0,
        },
        r = () =>
          (0, n.jsxs)("div", {
            className: "flex items-center justify-center flex-col gap-2",
            children: [
              (0, n.jsx)(a.default, { src: i, alt: "noDataImg" }),
              (0, n.jsx)("p", {
                className: "text-white text-lg",
                children: "No data found",
              }),
            ],
          });
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
        522, 452, 764, 840, 665, 706, 173, 78, 494, 935, 816, 274, 534, 971, 23,
        744,
      ],
      function () {
        return e((e.s = 66145));
      }
    ),
      (_N_E = e.O());
  },
]);
