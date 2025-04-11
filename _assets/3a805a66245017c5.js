(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [4143], {

        /***/
        314668: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(59534);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var E = __c.E;
                var Q = __c.Q;
                var yUb = function(a, b = "medium") {
                        if (a !== null && a !== void 0 && a.length) {
                            var c = window.devicePixelRatio || 1,
                                d = (typeof b === "number" ? b : xUb(b)) * c;
                            return [...a].sort((e, f) => {
                                e = e.width;
                                f = f.width;
                                return e > d && f < d ? -1 : e < d && f > d ? 1 : Math.abs(e - d) - Math.abs(f - d)
                            })[0].url
                        }
                    },
                    EUb = function(a, b) {
                        class c {
                            static A(d) {
                                Q(d, {
                                    Ve: P4,
                                    Xka: P4
                                })
                            }
                            get Ve() {
                                switch (this.Xka) {
                                    case "date":
                                        return new zUb(this.qo, b.language || "en-AU");
                                    case "select":
                                        return new AUb(this.qo);
                                    case "mention":
                                        return new BUb(this.qo);
                                    case "embed":
                                        return new CUb(this.qo);
                                    case "plain_number":
                                    case "currency":
                                    case "percentage":
                                    case void 0:
                                        break;
                                    default:
                                        throw new E(this.Xka);
                                }
                            }
                            get Xka() {
                                var d;
                                return (d = this.qo.jr) === null || d === void 0 ? void 0 : d.type
                            }
                            constructor(d) {
                                this.context = d;
                                this.qo = (c.A(this), void 0);
                                this.qo = __c.D(a.Kw(d.sheet, d.ya, d.column))
                            }
                        }
                        return DUb(d => (new c(d)).Ve)
                    },
                    GUb = function() {
                        const a = Q4(() => new Map, []);
                        return {
                            qcb: b => {
                                if (a.has(b)) return __c.D(a.get(b));
                                const c = FUb();
                                a.set(b, c);
                                return c
                            }
                        }
                    },
                    HUb = function(a, b) {
                        return Q4(() => {
                            const c = new Map;
                            return d => {
                                if (c.has(d)) return __c.D(c.get(d));
                                const e = a(d);
                                c.set(d, e);
                                return e
                            }
                        }, b)
                    },
                    OUb = function({
                        children: a,
                        keyFrame: b,
                        kYa: c,
                        ariaLive: d,
                        $Oa: e = !1,
                        p4a: f,
                        sna: g,
                        U9a: h,
                        BAb: k,
                        AIa: l,
                        xKa: m,
                        zAb: n,
                        Nrb: p
                    }) {
                        const {
                            qcb: q
                        } = GUb(), {
                            sbb: r,
                            Qmb: t
                        } = IUb(b, a), v = HUb(u => () => {
                            (e === !1 || typeof e === "function" && !e(u)) && t(u)
                        }, [t, e]);
                        return R4("div", {
                            className: S4(g, "_9GxJfQ", {
                                KwB0XQ: l === "hidden",
                                WV1Mmw: c === "fill-height",
                                _2uSJxw: c === "flex-grow"
                            }),
                            children: R4("div", {
                                className: S4("m2VaAA", h),
                                "aria-live": d,
                                style: k,
                                role: "region",
                                children: [...r.map(({
                                    key: u,
                                    element: x
                                }) => R4(JUb, { in: u === b,
                                    timeout: f,
                                    classNames: p,
                                    mountOnEnter: !0,
                                    unmountOnExit: !e,
                                    nodeRef: q(u),
                                    onExited: v(u),
                                    children: y => R4(KUb.Provider, {
                                        value: y,
                                        children: R4("div", {
                                            className: S4("KxXR9g", n, {
                                                KwB0XQ: m === "hidden"
                                            }),
                                            ref: q(u),
                                            "aria-hidden": y === LUb || y === MUb || y === NUb,
                                            children: u === b ? a : x
                                        })
                                    })
                                }, u)), r.every(u => u.key !== b) && R4(JUb, { in: !1,
                                    timeout: f,
                                    classNames: p,
                                    mountOnEnter: !0,
                                    unmountOnExit: !e,
                                    nodeRef: q(b),
                                    onExited: e ? void 0 : v(b),
                                    children: u => R4(KUb.Provider, {
                                        value: u,
                                        children: R4("div", {
                                            className: S4("KxXR9g", n),
                                            ref: q(b),
                                            "aria-hidden": u === LUb || u === MUb || u === NUb,
                                            children: a
                                        })
                                    })
                                }, b)]
                            })
                        })
                    },
                    IUb = function(a,
                        b) {
                        const [c, d] = PUb(() => [{
                            key: a,
                            element: b
                        }]);
                        QUb(() => {
                            d(f => f.every(g => g.key !== a) ? f.concat({
                                key: a,
                                element: b
                            }) : f.map(g => g.key === a ? {
                                key: a,
                                element: b
                            } : g))
                        }, [a, b]);
                        const e = T4(f => {
                            d(g => g.filter(h => h.key !== f))
                        }, []);
                        return {
                            sbb: c,
                            Qmb: e
                        }
                    },
                    RUb = function(a) {
                        switch (a.type) {
                            case "mention":
                                return "bCAtqw";
                            case "embed":
                                return "BTcT3w";
                            case "date":
                                return "McKQgg";
                            case "select":
                                return "V2E5nQ";
                            default:
                                throw new E(a);
                        }
                    },
                    VUb = function(a, b) {
                        switch (a.type) {
                            case "mention":
                                return R4(SUb, {
                                    Rr: a.user ? b.F0(a.user) : void 0,
                                    text: a.text,
                                    backgroundColor: a.user ? b.Jbb(a.user).background : void 0
                                });
                            case "embed":
                                const c = !a.url;
                                a = b.AKa.N_.get(a.url);
                                return R4(TUb, {
                                    icon: a,
                                    ufb: c
                                });
                            case "date":
                                return a.text ? void 0 : R4(UUb, {});
                            case "select":
                                break;
                            default:
                                throw new E(a);
                        }
                    },
                    XUb = function(a, b) {
                        switch (a.type) {
                            case "mention":
                            case "embed":
                            case "date":
                                break;
                            case "select":
                                return R4(WUb, {
                                    selected: !!b.jWa
                                });
                            default:
                                throw new E(a);
                        }
                    },
                    U4 = function(a) {
                        return (/Mac/.test(navigator.platform) ? a.metaKey : a.ctrlKey) ? !0 : a instanceof KeyboardEvent ? a.key === "Meta" || ["91",
                            "224"
                        ].includes(a.code) : !1
                    },
                    YUb = function(a) {
                        __c.w(!0, "chunkLength must be positive");
                        const b = [];
                        for (let c = 0; c < a.length; c += 50) b.push(a.slice(c, c + 50));
                        return b
                    },
                    ZUb = function(a, b, c) {
                        if (c) {
                            var d = yUb(c.images, "medium"),
                                e = yUb(c.images, "xxxlarge");
                            if (d && e) {
                                c = new Image;
                                c.src = d;
                                var f = new Image;
                                f.src = e;
                                f.onload = V4(() => a.U6.set(b, e));
                                f.onerror = V4(() => a.U6.set(b, void 0));
                                !f.complete && c.complete ? a.U6.set(b, d) : c.src = ""
                            }
                        } else a.U6.set(b, void 0)
                    },
                    aVb = function(a, {
                        url: b,
                        id: c,
                        extension: d
                    }) {
                        if (!a.promises.has(b)) {
                            const e =
                                new Promise(f => {
                                    a.dh ? a.dh.sDb(new $Ub({
                                        id: c,
                                        extension: d
                                    })).then(({
                                        document: g
                                    }) => {
                                        const h = g.Tf.content.title;
                                        h ? (W4(() => a.uZa.set(b, {
                                            status: 1,
                                            title: h
                                        })), f(h)) : f(void 0)
                                    }).catch(() => {
                                        W4(() => a.uZa.set(b, {
                                            status: 2
                                        }));
                                        f(void 0)
                                    }) : f(void 0)
                                });
                            a.promises.set(b, e)
                        }
                        return a.promises.get(b)
                    },
                    xUb = a => a.endsWith("rem") ? parseFloat(a) * 10 : __c.Cy * __c.MCb[a],
                    bVb = __webpack_require__(443763),
                    R4 = bVb.jsx,
                    cVb = bVb.jsxs;
                var X4 = __webpack_require__(214645).Pi;
                var Y4 = __webpack_require__(875604),
                    dVb = Y4.createContext,
                    FUb = Y4.createRef,
                    Z4 = Y4.memo,
                    T4 = Y4.useCallback,
                    QUb = Y4.useEffect,
                    eVb = Y4.useLayoutEffect,
                    Q4 = Y4.useMemo,
                    PUb = Y4.useState;
                var $4 = __webpack_require__(519427),
                    V4 = $4.action,
                    fVb = $4.comparer,
                    P4 = $4.computed,
                    gVb = $4.observable,
                    a5 = $4.ObservableMap,
                    W4 = $4.runInAction;
                var DUb = __webpack_require__(635872).Om;
                var hVb = __webpack_require__,
                    iVb = hVb(993864),
                    S4 = hVb.n_x(iVb)();
                var JUb = __webpack_require__(489212).Z;
                var b5 = __webpack_require__(92009),
                    NUb = b5.Wj,
                    LUb = b5.Ix,
                    MUb = b5.$r;
                var jVb = class {
                        static A(a) {
                            Q(a, {
                                text: P4,
                                user: P4,
                                brand: P4
                            })
                        }
                        get text() {
                            return this.Ve.text
                        }
                        get user() {
                            return this.Ve.user
                        }
                        get brand() {
                            return this.Ve.brand
                        }
                        constructor(a) {
                            this.Ve = a;
                            this.type = (jVb.A(this), "mention")
                        }
                    },
                    kVb = class {
                        static A(a) {
                            Q(a, {
                                text: P4,
                                url: P4
                            })
                        }
                        get text() {
                            return this.Ve.text
                        }
                        get url() {
                            return this.Ve.url
                        }
                        constructor(a) {
                            this.Ve = a;
                            this.type = (kVb.A(this), "embed")
                        }
                    },
                    lVb = class {
                        static A(a) {
                            Q(a, {
                                text: P4,
                                language: P4,
                                style: P4,
                                date: P4
                            })
                        }
                        get text() {
                            return this.Ve.text
                        }
                        get language() {
                            return this.Ve.language
                        }
                        get style() {
                            return this.Ve.style
                        }
                        get date() {
                            return this.Ve.date
                        }
                        constructor(a) {
                            this.Ve =
                                a;
                            this.type = (lVb.A(this), "date")
                        }
                    },
                    mVb = class {
                        static A(a) {
                            Q(a, {
                                text: P4,
                                options: P4,
                                Gf: P4,
                                IS: P4
                            })
                        }
                        get text() {
                            return this.Ve.text
                        }
                        get options() {
                            return this.Ve.options.map(a => a)
                        }
                        get Gf() {
                            return this.Ve.Gf
                        }
                        get IS() {
                            var a;
                            return (a = this.Ve.options.first(b => b.id === this.Ve.Gf)) === null || a === void 0 ? void 0 : a.fill.color
                        }
                        constructor(a) {
                            this.Ve = a;
                            this.type = (mVb.A(this), "select")
                        }
                    },
                    nVb = DUb(a => {
                        switch (a.type) {
                            case "mention":
                                return new jVb(a);
                            case "embed":
                                return new kVb(a);
                            case "date":
                                return new lVb(a);
                            case "select":
                                return new mVb(a);
                            default:
                                throw new E(a);
                        }
                    });
                var zUb = class {
                        static A(a) {
                            Q(a, {
                                style: P4,
                                date: P4,
                                text: P4
                            })
                        }
                        get style() {
                            return 2
                        }
                        get date() {
                            var a;
                            (a = this.mp.Tk.type === 2 ? this.mp.Tk.date : void 0) || (a = new Date, a = __c.MA(a), a = {
                                year: a.getFullYear(),
                                month: a.getMonth() + 1,
                                day: a.getDate(),
                                vdb: a.getHours(),
                                kib: a.getMinutes()
                            });
                            return a
                        }
                        get text() {
                            return this.mp.rB
                        }
                        constructor(a, b) {
                            this.mp = a;
                            this.language = b;
                            this.type = (zUb.A(this), "date")
                        }
                    },
                    oVb = class {
                        get label() {
                            return this.option.label
                        }
                        get fill() {
                            return this.option.fill
                        }
                        constructor(a, b) {
                            this.option = a;
                            this.id =
                                b
                        }
                    },
                    AUb = class {
                        static A(a) {
                            Q(a, {
                                options: P4,
                                Gf: P4,
                                IS: P4,
                                text: P4,
                                aMa: P4({
                                    equals: fVb.shallow
                                })
                            })
                        }
                        get options() {
                            return this.aMa.map((a, b) => new oVb(a, b))
                        }
                        get Gf() {
                            var a;
                            return (a = this.options.find(b => b.label === this.text)) === null || a === void 0 ? void 0 : a.id
                        }
                        get IS() {
                            var a;
                            return (a = this.options.find(b => b.id === this.Gf)) === null || a === void 0 ? void 0 : a.fill.color
                        }
                        get text() {
                            return this.mp.rB
                        }
                        get aMa() {
                            var a, b;
                            __c.C(((a = this.mp.jr) === null || a === void 0 ? void 0 : a.type) === "select");
                            return (b = this.mp.jr) === null || b === void 0 ?
                                void 0 : b.options
                        }
                        constructor(a) {
                            this.mp = a;
                            this.type = (AUb.A(this), "select")
                        }
                    },
                    BUb = class {
                        static A(a) {
                            Q(a, {
                                CN: P4
                            })
                        }
                        get text() {
                            return this.CN ? this.CN.text : ""
                        }
                        get user() {
                            return this.CN ? this.CN.user : ""
                        }
                        get brand() {
                            return this.CN ? this.CN.brand : ""
                        }
                        get CN() {
                            if (this.mp.Tk.type !== 9) return __c.C(this.mp.Tk.type === 7), this.mp.Tk ? this.mp.Tk.value[0] : void 0
                        }
                        constructor(a) {
                            this.mp = a;
                            this.type = (BUb.A(this), "mention")
                        }
                    },
                    CUb = class {
                        static A(a) {
                            Q(a, {
                                i0: P4
                            })
                        }
                        get text() {
                            return this.i0 ? this.i0.embed.text : ""
                        }
                        get url() {
                            return this.i0 ?
                                this.i0.embed.url : ""
                        }
                        get i0() {
                            if (this.mp.Tk.type !== 9) return __c.C(this.mp.Tk.type === 8), this.mp.Tk ? this.mp.Tk.value[0] : void 0
                        }
                        constructor(a) {
                            this.mp = a;
                            this.type = (CUb.A(this), "embed")
                        }
                    };
                var pVb = class {
                    Kpa(a) {
                        this.Lla.Kpa(a)
                    }
                    g5(a, b) {
                        this.Lla.g5(a, b)
                    }
                    F0(a) {
                        return this.Lla.F0(a)
                    }
                    Hpa(a) {
                        this.AKa.Hpa(a)
                    }
                    constructor(a, b, c, d) {
                        this.Lla = a;
                        this.AKa = b;
                        this.zb = c;
                        this.QI = d;
                        this.FCa = new __c.Ysb;
                        this.Jbb = e => __c.fJa(this.FCa, e)
                    }
                };
                var KUb = dVb(void 0);
                var qVb = Number.parseInt("300ms", 10),
                    rVb = {
                        enter: "_QukmA",
                        enterActive: "_5_06KQ",
                        enterDone: void 0,
                        exitActive: "a952jg",
                        exitDone: "orZOEA"
                    },
                    sVb = Z4(function({
                        Ns: a = !1,
                        children: b,
                        keyFrame: c,
                        kYa: d,
                        AIa: e = "hidden",
                        xKa: f = "hidden",
                        ariaLive: g,
                        $Oa: h,
                        YDb: k = "none"
                    }) {
                        a = __c.tb() && !a;
                        return OUb({
                            children: b,
                            keyFrame: c,
                            kYa: d,
                            ariaLive: g,
                            AIa: e,
                            xKa: f,
                            $Oa: h,
                            p4a: a ? qVb : 0,
                            U9a: S4({
                                _1niDPQ: a,
                                Q6kGbg: k === "none",
                                _9j7ODw: k === "layout"
                            }),
                            Nrb: rVb
                        })
                    });
                var tVb = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 3.5a.75.75 0 0 0-1.5 0V5H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-.75V3.5a.75.75 0 0 0-1.5 0V5h-5.5V3.5Zm5.5 4v-1h-5.5v1a.75.75 0 0 1-1.5 0v-1H7A2.5 2.5 0 0 0 4.5 9v1h15V9A2.5 2.5 0 0 0 17 6.5h-.75v1a.75.75 0 0 1-1.5 0Zm4.75 4h-15V17A2.5 2.5 0 0 0 7 19.5h10a2.5 2.5 0 0 0 2.5-2.5v-5.5Z" fill="currentColor"/></svg>';
                var uVb = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-1.288-.244-2.52-.687-3.65v-.1h-.04A10.003 10.003 0 0 0 12 2C6.477 2 2 6.477 2 12Zm12.653-8.078A8.526 8.526 0 0 1 19.63 8.25h-3.457c-.317-1.74-.848-3.236-1.52-4.328ZM20.2 9.75h-3.813c.075.723.114 1.476.114 2.25s-.04 1.527-.114 2.25h3.813A8.51 8.51 0 0 0 20.5 12a8.51 8.51 0 0 0-.301-2.25Zm-.569 6h-3.457c-.317 1.74-.848 3.236-1.52 4.328a8.526 8.526 0 0 0 4.977-4.328Zm-4.755-1.5a20.109 20.109 0 0 0 0-4.5h-5.75a20.116 20.116 0 0 0 0 4.5h5.75Zm-5.519 1.5h5.288C14.08 18.593 12.953 20.5 12 20.5c-.953 0-2.081-1.907-2.644-4.75Zm-1.529 0c.317 1.74.848 3.236 1.52 4.328A8.526 8.526 0 0 1 4.37 15.75h3.457Zm-.213-1.5H3.801A8.51 8.51 0 0 1 3.5 12c0-.779.105-1.533.301-2.25h3.813A21.9 21.9 0 0 0 7.5 12c0 .774.04 1.527.114 2.25ZM12 3.5c.953 0 2.081 1.907 2.644 4.75H9.356C9.92 5.407 11.047 3.5 12 3.5ZM4.37 8.25h3.457c.317-1.74.848-3.236 1.52-4.328A8.525 8.525 0 0 0 4.37 8.25Z" fill="currentColor"/></svg>';
                var vVb = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M8.64 16.5a4.87 4.87 0 0 0 4.11 2.25h4.5a4.88 4.88 0 0 0 0-9.75h-4.5a4.88 4.88 0 0 0-4.5 3h1.7c.6-.9 1.63-1.5 2.8-1.5h4.5a3.38 3.38 0 0 1 0 6.75h-4.5c-.8 0-1.54-.28-2.12-.75H8.64zm7.1-9a4.87 4.87 0 0 0-4.12-2.25h-4.5a4.87 4.87 0 1 0 0 9.75h4.5a4.88 4.88 0 0 0 4.5-3h-1.69c-.6.9-1.63 1.5-2.8 1.5h-4.5a3.38 3.38 0 0 1 0-6.75h4.5c.8 0 1.54.28 2.12.75h1.98z"/></svg>';
                var wVb = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.374 7.572A3.5 3.5 0 1 0 5.6 7.548a5.365 5.365 0 0 0-2.928 3.968 1.5 1.5 0 0 0 .592 1.441 7.9 7.9 0 0 0 4.7 1.543 7.9 7.9 0 0 0 4.698-1.542 1.5 1.5 0 0 0 .592-1.442 5.364 5.364 0 0 0-2.88-3.944ZM10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5.847 6.75a3.858 3.858 0 0 1 7.62 0A6.4 6.4 0 0 1 7.963 13a6.4 6.4 0 0 1-3.81-1.25Z" fill="currentColor"/></svg>';
                var xVb = Z4(a => {
                        const b = a.link,
                            c = a.className,
                            d = a.ariaLabel,
                            e = a.IS,
                            f = a.e9a,
                            g = a.J2a,
                            h = a.k3a,
                            k = a.measureRef,
                            l = a.onPointerDown,
                            m = a.onMouseEnter,
                            n = a.onMouseLeave,
                            p = S4({
                                EdewNw: !!g,
                                _6ZpPrw: !!h,
                                pzXyUA: a.text.length > 0
                            });
                        a = a.text.length > 0 ? a.text : "\ufeff";
                        return cVb("span", {
                            className: S4(c, "FedJ0Q"),
                            "aria-label": d || a,
                            children: [R4("span", {
                                className: S4("_2Lr6pQ", p),
                                children: R4("span", {
                                    className: "Z_WvzQ",
                                    children: a
                                })
                            }), cVb("span", {
                                className: S4("XemTdQ", p),
                                ref: k,
                                style: e ? {
                                    color: e
                                } : void 0,
                                onPointerDown: l,
                                onMouseEnter: m,
                                onMouseLeave: n,
                                children: [g, R4("span", {
                                    className: S4("U_QH_A", {
                                        C9XL8g: !f
                                    }),
                                    children: b ? R4("a", {
                                        className: "vgTP5Q",
                                        ...b,
                                        children: a
                                    }) : a
                                }), h]
                            })]
                        })
                    }),
                    SUb = Z4(a => {
                        const b = a.backgroundColor,
                            c = a.Rr;
                        a = a.text;
                        const d = {
                            width: "0.9em",
                            height: "0.9em"
                        };
                        return R4(sVb, {
                            keyFrame: c ? "show" : "hide",
                            children: a ? R4(__c.QCb, {
                                name: a,
                                style: d,
                                backgroundColor: b,
                                Rr: c,
                                borderColor: c ? void 0 : b
                            }) : R4("span", {
                                "aria-hidden": "true",
                                className: "_tFJqA",
                                dangerouslySetInnerHTML: {
                                    __html: wVb
                                }
                            })
                        })
                    }),
                    TUb = Z4(a => {
                        const b = a.icon;
                        a = a.ufb;
                        return R4(sVb, {
                            keyFrame: b ? "favicon" : "placeholder",
                            children: b ? R4("span", {
                                className: "_tFJqA",
                                children: R4("img", {
                                    src: b,
                                    className: "qpbYdw"
                                })
                            }) : R4("span", {
                                "aria-hidden": "true",
                                className: "_tFJqA",
                                dangerouslySetInnerHTML: {
                                    __html: a ? vVb : uVb
                                }
                            })
                        })
                    }),
                    UUb = Z4(() => R4("span", {
                        "aria-hidden": "true",
                        className: "_tFJqA",
                        dangerouslySetInnerHTML: {
                            __html: tVb
                        }
                    })),
                    WUb = Z4(({
                        selected: a
                    }) => R4("div", {
                        className: S4("whph4A", {
                            zgzjww: a
                        }),
                        children: R4(__c.IL, {
                            size: "medium",
                            style: {
                                width: "0.9em",
                                height: "0.9em"
                            },
                            className: "_tFJqA"
                        })
                    })),
                    yVb = X4(a => {
                        const {
                            Ve: b,
                            jWa: c,
                            fwa: d,
                            mode: e = "viewable",
                            measureRef: f,
                            gq: g,
                            onPointerDown: h
                        } = a;
                        a = b.text || "\u00a0".repeat(16);
                        const k = b.type === "embed" ? d.zb(b.url) : void 0,
                            [l, m] = PUb(!1),
                            n = T4(t => m(U4(t)), [m]),
                            p = T4(t => m(!U4(t)), [m]),
                            q = T4(t => {
                                m(U4(t.nativeEvent));
                                document.addEventListener("keydown", n);
                                document.addEventListener("keyup", p)
                            }, [m, n, p]),
                            r = T4(() => {
                                m(!1);
                                document.removeEventListener("keydown", n);
                                document.removeEventListener("keyup", p)
                            }, [m, n, p]);
                        QUb(() => {
                            W4(() => {
                                switch (b.type) {
                                    case "mention":
                                        b.user && d.Kpa(b.user);
                                        break;
                                    case "embed":
                                        d.Hpa(b.url)
                                }
                            })
                        }, [b, d]);
                        eVb(() => {
                            g === null || g === void 0 || g()
                        }, [b.type, a, g]);
                        return R4(xVb, {
                            text: a,
                            link: e === "viewable" || l ? k : void 0,
                            e9a: b.text.length === 0,
                            ariaLabel: b.text || "",
                            className: RUb(b),
                            IS: b.IS,
                            J2a: VUb(b, d),
                            k3a: XUb(b, {
                                jWa: c
                            }),
                            measureRef: f,
                            onPointerDown: h,
                            onMouseEnter: b.type === "embed" && e === "editable" ? q : void 0,
                            onMouseLeave: b.type === "embed" && e === "editable" ? r : void 0
                        })
                    });
                var zVb = __c.L(() => ({
                    FEb: __c.QM(11),
                    mode: __c.G("A?", 1, "BY_USER_IDS"),
                    htb: __c.PM(1)
                }));
                var AVb = class {
                        static A(a) {
                            Q(a, {
                                QQ: gVb.shallow,
                                oLa: V4
                            })
                        }
                        F0(a) {
                            return this.KGa.F0(a)
                        }
                        Kpa(a) {
                            this.ECa.has(a) || this.QQ.has(a) || (this.QQ.add(a), this.I8a())
                        }
                        g5(a, b) {
                            this.ECa.has(a) || (this.ECa.set(a, b), this.QQ.delete(a), ZUb(this.KGa, a, b))
                        }
                        async oLa() {
                            if (this.QQ.size !== 0) {
                                var a = [...this.QQ.values()];
                                this.QQ.clear();
                                if (this.LGa) {
                                    var b = await this.LGa;
                                    await Promise.all(YUb(a).map(async c => {
                                        const d = new zVb({
                                                htb: c
                                            }),
                                            {
                                                Hxb: e
                                            } = await b.UCb(d);
                                        W4(() => c.forEach(f => this.g5(f, e.get(f))))
                                    }))
                                } else a.forEach(c => this.g5(c))
                            }
                        }
                        constructor(a,
                            b) {
                            this.LGa = a;
                            this.ECa = (AVb.A(this), new a5);
                            this.QQ = new Set;
                            this.KGa = new BVb;
                            this.I8a = __c.Oc(() => this.oLa(), 200);
                            W4(() => {
                                b === null || b === void 0 || b.forEach((c, d) => this.g5(d, c))
                            })
                        }
                    },
                    BVb = class {
                        F0(a) {
                            return this.U6.get(a)
                        }
                        constructor() {
                            this.U6 = new a5
                        }
                    };
                var $Ub = __c.L(() => ({
                    id: __c.X("id", 1),
                    extension: __c.Y("extension", 3),
                    cWa: __c.LM("revision", 5),
                    version: __c.LM("version", 2),
                    mEb: __c.LM("imagesetsLimit", 6)
                }));
                var CVb = class {
                    static A(a) {
                        Q(a, {
                            wab: V4
                        })
                    }
                    async wab(a) {
                        if (this.dh) {
                            var b = (new URL(a)).pathname; {
                                const c = /design\/(D[a-zA-Z0-9_-]{10})\/?([a-zA-Z0-9_-]+)?/g.exec(b);
                                c == null || c.length < 2 ? b = void 0 : (b = c[2], (new Set(["edit", "remix", "view", "watch"])).has(c[2]) && (b = void 0), b = {
                                    id: c[1],
                                    extension: b
                                })
                            }
                            if (b) return await aVb(this, {
                                url: a,
                                ...b
                            })
                        }
                    }
                    constructor(a) {
                        this.dh = a;
                        this.uZa = (CVb.A(this), new a5);
                        this.promises = new Map
                    }
                };
                var DVb = class {
                    static A(a) {
                        Q(a, {
                            N_: gVb.shallow
                        })
                    }
                    async Hpa(a) {
                        const b = new Image;
                        let c;
                        try {
                            var d;
                            const e = await ((d = this.QI) === null || d === void 0 ? void 0 : d.l8(a));
                            c = e === null || e === void 0 ? void 0 : e.vab
                        } catch (e) {}
                        c ? (b.src = c, b.onload = V4(() => this.N_.set(a, c)), b.onerror = V4(() => this.N_.set(a, void 0))) : W4(() => this.N_.set(a, void 0))
                    }
                    constructor(a) {
                        this.QI = a;
                        this.N_ = (DVb.A(this), new Map)
                    }
                };
                __c.TFa = {
                    xeb: function(a) {
                        const b = a.document,
                            c = a.dh,
                            d = a.zb,
                            e = a.QI;
                        var f = a.B8;
                        const g = a.vd,
                            h = a.BA,
                            k = a.KX;
                        a = a.zEb;
                        f = new AVb(a === null || a === void 0 ? void 0 : a(), f);
                        a = new DVb(e);
                        new CVb(c);
                        const l = new pVb(f, a, d, e),
                            m = EUb(k, b);
                        g.Qq.gka = X4(({
                            item: p,
                            measureRef: q
                        }) => {
                            const r = Q4(() => nVb(p.Ve), [p.Ve]);
                            return R4(yVb, {
                                Ve: r,
                                fwa: l,
                                measureRef: q
                            })
                        });
                        const n = X4(({
                            context: p,
                            gq: q
                        }) => {
                            const r = Q4(() => __c.D(m(p.container)), [p]);
                            eVb(q, [q, p.container.column.width]);
                            return R4(yVb, {
                                Ve: r,
                                fwa: l,
                                gq: q
                            })
                        });
                        h.YEa = ({
                                context: p,
                                gq: q
                            }) =>
                            ({
                                type: "react",
                                node: R4(n, {
                                    context: p,
                                    gq: q
                                })
                            });
                        return {
                            fwa: l
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/3a805a66245017c5.js.map