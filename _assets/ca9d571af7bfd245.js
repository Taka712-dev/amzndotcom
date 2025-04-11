(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [26489], {

        /***/
        59534: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var ACb = function(a) {
                        var b = ["rgb(255, 255, 255)", "rgb(13, 18, 22)"];
                        try {
                            const c = __c.ot(a),
                                d = c instanceof __c.pt ? c.rs() : c;
                            return __c.es(b, e => {
                                e = __c.ot(e);
                                e = e instanceof __c.pt ? __c.LH(e, d) : e;
                                return Math.abs(__c.Ht(e, d))
                            })
                        } catch (c) {
                            if (c instanceof Error && c.message === `unrecognized color: ${b[0]}`) return b[0];
                            throw c;
                        }
                    },
                    BCb = function(a) {
                        return a.trim().split(/\s+/, 2).map(b => __c.Fs(b)[0]).join("")
                    },
                    ECb = function(a = "") {
                        a = CCb(a);
                        a = Math.floor(a() * DCb.length);
                        return DCb[a]
                    },
                    FCb = __webpack_require__(875604),
                    GCb =
                    FCb.memo,
                    HCb = FCb.useId;
                var CCb = __webpack_require__(503216);
                var ICb = __webpack_require__(443763),
                    SY = ICb.jsx,
                    JCb = ICb.jsxs;
                var KCb = __webpack_require__,
                    LCb = KCb(993864),
                    TY = KCb.n_x(LCb)();
                __c.MCb = {
                    xxsmall: 2,
                    xsmall: 3,
                    small: 4,
                    medium: 5,
                    large: 6,
                    xlarge: 8,
                    xxlarge: 10,
                    xxxlarge: 20
                };
                var DCb = ["rgb(0, 126, 182)", "rgb(248, 72, 86)", "rgb(251, 190, 40)", "rgb(68, 133, 25)", "rgb(125, 42, 232)"].map(a => {
                    try {
                        return __c.qt(__c.jt(a))
                    } catch (b) {
                        return "#8e8e8e"
                    }
                });
                var NCb = GCb(a => {
                    const {
                        name: b,
                        borderColor: c,
                        backgroundColor: d,
                        mS: e,
                        role: f,
                        ariaLabel: g,
                        className: h,
                        style: k,
                        shape: l = "circle",
                        ...m
                    } = a;
                    d ? (a = __c.ot(d), a = a instanceof __c.pt ? __c.rt(a) : __c.qt(a)) : a = e ? ECb(e) : "#8e8e8e";
                    var n = HCb();
                    let p;
                    switch (l) {
                        case "circle":
                            p = SY("defs", {
                                children: SY("clipPath", {
                                    id: n,
                                    children: SY("circle", {
                                        id: `${n}-path`,
                                        cx: "50%",
                                        cy: "50%",
                                        r: "50%"
                                    })
                                })
                            });
                            break;
                        case "square":
                            p = SY("defs", {
                                children: SY("clipPath", {
                                    id: n,
                                    children: SY("rect", {
                                        id: `${n}-path`,
                                        width: "100%",
                                        height: "100%"
                                    })
                                })
                            });
                            break;
                        default:
                            throw new __c.E(l);
                    }
                    switch (l) {
                        case "circle":
                            n = SY("circle", {
                                cx: "50%",
                                cy: "50%",
                                fill: a,
                                shapeRendering: "geometricPrecision",
                                clipPath: `url(#${n})`,
                                stroke: c,
                                className: TY("yCT70Q", {
                                    _2LVP_g: c
                                })
                            });
                            break;
                        case "square":
                            n = SY("rect", {
                                width: "100%",
                                height: "100%",
                                fill: a,
                                shapeRendering: "geometricPrecision",
                                clipPath: `url(#${n})`,
                                stroke: c,
                                className: TY("cUFFRA", {
                                    _2LVP_g: c
                                })
                            });
                            break;
                        default:
                            throw new __c.E(l);
                    }
                    return SY("span", {
                        role: f,
                        "aria-label": g,
                        className: TY("VaW8_A", {
                            cUFFRA: l === "square"
                        }),
                        ...m,
                        children: JCb("svg", {
                            className: h,
                            style: k,
                            children: [p, n, SY("text", {
                                x: "50%",
                                y: "50%",
                                "aria-hidden": "true",
                                textAnchor: "middle",
                                fill: ACb(a),
                                fontWeight: "500",
                                fontSize: "50%",
                                dominantBaseline: "central",
                                letterSpacing: "0.01rem",
                                dy: "-0.04em",
                                children: BCb(b).toUpperCase()
                            })]
                        })
                    })
                });
                var OCb = __webpack_require__.p + "images/5c0e58707f218438bf0f73d47db2ce50.svg";
                var PCb = ({
                    borderColor: a,
                    yUa: b,
                    ariaLabel: c,
                    className: d,
                    style: e,
                    role: f,
                    ...g
                }) => SY("span", {
                    className: TY(d, {
                        JwH6AA: a,
                        QJpRHw: !a
                    }),
                    style: {
                        backgroundImage: `url(${b})`,
                        borderColor: a && `${a}`,
                        ...e
                    },
                    role: f,
                    "aria-label": f === "img" ? c : void 0,
                    ...g
                });
                __c.QCb = ({
                    name: a,
                    G4a: b,
                    ariaLabel: c,
                    mS: d,
                    backgroundColor: e,
                    borderColor: f,
                    Rr: g,
                    className: h,
                    style: k,
                    shape: l = "circle",
                    ...m
                }) => {
                    h = TY("n8XGZg", "f4qJng fs-hide", h, {
                        P3N3Pw: l === "square"
                    });
                    b = b || "presentation";
                    return g ? SY(PCb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        yUa: g,
                        ariaLabel: c,
                        role: b,
                        ...m
                    }) : a ? SY(NCb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        name: a,
                        shape: l,
                        mS: d,
                        backgroundColor: e,
                        role: b,
                        ariaLabel: c,
                        ...m
                    }) : SY(PCb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        yUa: OCb,
                        ariaLabel: c,
                        role: b,
                        ...m
                    })
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/ca9d571af7bfd245.js.map