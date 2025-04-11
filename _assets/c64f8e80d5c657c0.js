(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [49222], {

        /***/
        691050: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(983117);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var E = __c.E;
                var C = __c.C;
                var XWb = function(a, b, c, d) {
                        c = new WWb(c, d);
                        C(a.count() === 1, "Only single widget root element is supported");
                        a = a.first();
                        C(a != null && a.type === "layout", `Unexpected widget root found: ${a===null||a===void 0?void 0:a.type}`);
                        c.Pia(a, b)
                    },
                    ZWb = function(a) {
                        return { ...__c.Icb,
                            ...N5,
                            top: 0,
                            left: 0,
                            width: a.width,
                            height: a.height,
                            viewBox: {
                                top: 0,
                                left: 0,
                                width: a.Iia.width,
                                height: a.Iia.height
                            },
                            wb: a.wb.map(YWb)
                        }
                    },
                    $Wb = function(a) {
                        switch (a.DD) {
                            case 0:
                                var b = __c.uk.Qc().attrs({
                                    "font-size": a.fontSize,
                                    leading: a.lineHeight ? a.lineHeight *
                                        1E3 : void 0,
                                    "text-align": a.textAlign || "start",
                                    "font-weight": a.fontWeight,
                                    "font-family": a.fontFamily,
                                    "font-kerning": "normal",
                                    "font-feature-liga": "on",
                                    "font-feature-clig": "on",
                                    "font-feature-calt": "on",
                                    direction: a.direction
                                });
                                a.color && b.Gh("color", a.color);
                                b = b.Dc(a.text.endsWith("\n") ? a.text : `${a.text}\n`).build();
                                var c;
                                return { ...__c.WK,
                                    ...O5,
                                    ...N5,
                                    Sa: (c = a.Sa) !== null && c !== void 0 ? c : 0,
                                    text: b,
                                    jh: 2
                                };
                            case 1:
                                return b = a.text, { ...__c.WK,
                                    ...O5,
                                    ...N5,
                                    text: b,
                                    jh: 2
                                };
                            default:
                                throw new E(a);
                        }
                    },
                    S5 = function({
                        content: a,
                        fill: b,
                        border: c,
                        X: d
                    }) {
                        b = { ...__c.tcb,
                            fill: P5(b),
                            border: Q5(c),
                            X: R5(d)
                        };
                        switch (a.type) {
                            case "shape":
                                return { ...b,
                                    element: ZWb(a)
                                };
                            case "text":
                                return { ...b,
                                    element: $Wb(a)
                                };
                            case "layout":
                                return { ...b,
                                    element: aXb(a)
                                };
                            default:
                                throw new E(a);
                        }
                    },
                    aXb = function({
                        cells: a,
                        border: b,
                        fill: c,
                        X: d,
                        gridTemplateColumns: e,
                        gridTemplateRows: f,
                        columnGap: g,
                        rowGap: h
                    }) {
                        return { ...__c.ucb,
                            ...O5,
                            ...N5,
                            H: O5.width,
                            V: O5.height,
                            fill: P5(c),
                            border: Q5(b),
                            direction: 1,
                            X: R5(d),
                            cells: new Map(a.map(k => [k.id, S5(k)])),
                            behavior: {
                                rules: [{
                                    kh: void 0,
                                    grid: {
                                        gridTemplateColumns: e,
                                        gridTemplateRows: f,
                                        columnGap: g !== null && g !== void 0 ? g : 0,
                                        rowGap: h !== null && h !== void 0 ? h : 0,
                                        Ih: bXb(a)
                                    }
                                }]
                            },
                            Bf: void 0
                        }
                    },
                    bXb = function(a) {
                        return new Map(a.map(b => [b.id, cXb(b)]))
                    },
                    cXb = function(a) {
                        const b = a.placement.padding;
                        return { ...__c.RBa,
                            ...a.placement,
                            alignSelf: "center",
                            padding: { ...__c.iR,
                                ...(b != null ? typeof b === "number" ? {
                                    all: b
                                } : b : {})
                            }
                        }
                    },
                    Q5 = function(a) {
                        var b;
                        const c = (b = a === null || a === void 0 ? void 0 : a.color) !== null && b !== void 0 ? b : "#000000";
                        var d;
                        return { ...__c.cE,
                            all: a ? { ...__c.YQ,
                                weight: (d = a.weight) !== null && d !== void 0 ? d : 1,
                                color: c,
                                eg: !0
                            } : void 0
                        }
                    },
                    R5 = function(a) {
                        return { ...__c.hR,
                            ...(a != null ? typeof a === "number" ? {
                                all: a
                            } : a : {})
                        }
                    },
                    YWb = function(a) {
                        return { ...__c.Jcb,
                            ...a,
                            fill: P5(a.fill),
                            stroke: dXb(a.stroke)
                        }
                    },
                    dXb = function(a) {
                        return a ? { ...__c.YQ,
                            color: a.color,
                            weight: a.weight
                        } : void 0
                    },
                    P5 = function(a) {
                        var b;
                        const c = { ...__c.Ov,
                            Sa: (b = a === null || a === void 0 ? void 0 : a.Sa) !== null && b !== void 0 ? b : 0
                        };
                        switch (a === null || a === void 0 ? void 0 : a.type) {
                            case "color":
                                return { ...c,
                                    color: a.color
                                };
                            case "gradient":
                                return { ...c,
                                    ob: a.ob
                                };
                            case void 0:
                                return c;
                            default:
                                throw new E(a);
                        }
                    },
                    jXb = function(a, b) {
                        const c = new Map(b.cells.map(e => [e.id, e]));
                        eXb(a.cells, c, (e, f) => {
                            let g = !1;
                            fXb(e.element, f.content, () => {
                                a.cells.delete(f.id);
                                a.cells.set(f.id, S5(f));
                                g = !0
                            });
                            g || (T5(e.fill, f.fill), gXb(e.border, f.border), hXb(e.X, f.X))
                        }, e => S5(e));
                        iXb(a.behavior, b, c);
                        T5(a.fill, b.fill);
                        hXb(a.X, b.X);
                        gXb(a.border, b.border);
                        var d;
                        a.Sa = (d = b.Sa) !== null && d !== void 0 ? d : 0
                    },
                    iXb = function(a, b, c) {
                        U5(a.rules, [b], d => {
                            kXb(d.grid.gridTemplateColumns, b.gridTemplateColumns) ||
                                (d.grid.gridTemplateColumns = b.gridTemplateColumns);
                            kXb(d.grid.gridTemplateRows, b.gridTemplateRows) || (d.grid.gridTemplateRows = b.gridTemplateRows);
                            var e;
                            d.grid.columnGap = (e = b.columnGap) !== null && e !== void 0 ? e : 0;
                            var f;
                            d.grid.rowGap = (f = b.rowGap) !== null && f !== void 0 ? f : 0;
                            eXb(d.grid.Ih, c, (g, h) => {
                                const k = h.placement.padding,
                                    l = h.placement.gridColumnEnd,
                                    m = h.placement.gridRowStart,
                                    n = h.placement.gridRowEnd,
                                    p = h.placement.alignSelf;
                                g.gridColumnStart = h.placement.gridColumnStart;
                                g.gridColumnEnd = l;
                                g.gridRowStart = m;
                                g.gridRowEnd =
                                    n;
                                typeof k === "number" && g.padding.all !== k ? g.padding.all = k : typeof k !== "number" && (g.padding.Ca = k === null || k === void 0 ? void 0 : k.Ca, g.padding.La = k === null || k === void 0 ? void 0 : k.La, g.padding.Ba = k === null || k === void 0 ? void 0 : k.Ba, g.padding.Ta = k === null || k === void 0 ? void 0 : k.Ta);
                                g.alignSelf = p
                            }, g => cXb(g))
                        }, d => {
                            var e, f;
                            return {
                                kh: void 0,
                                grid: {
                                    gridTemplateColumns: b.gridTemplateColumns,
                                    gridTemplateRows: b.gridTemplateRows,
                                    columnGap: (e = b.columnGap) !== null && e !== void 0 ? e : 0,
                                    rowGap: (f = b.rowGap) !== null && f !== void 0 ? f : 0,
                                    Ih: bXb(d.cells)
                                }
                            }
                        })
                    },
                    lXb = function(a, b) {
                        U5(a.wb, b.wb, (e, f) => {
                            e.d = f.d;
                            T5(e.fill, f.fill);
                            e.stroke.ref && f.stroke ? (e = e.stroke.ref, f = f.stroke, e.color = f.color, e.weight = f.weight) : e.stroke.set(dXb(f.stroke))
                        }, e => YWb(e));
                        const {
                            viewBox: c,
                            width: d
                        } = ZWb(b);
                        a.width = d;
                        __c.Ou(a.viewBox).equals(__c.Ou(c)) || (a.viewBox = c)
                    },
                    fXb = function(a, b, c) {
                        switch (b.type) {
                            case "shape":
                                a.type === "shape" ? lXb(a, b) : c();
                                break;
                            case "text":
                                a.type === "text" && __c.uk.domain.Xb(__c.uk.va(a.text), $Wb(b).text) || c();
                                break;
                            case "layout":
                                a.type === "layout" ? jXb(a, b) : c();
                                break;
                            default:
                                throw new E(b);
                        }
                    },
                    eXb = function(a, b, c, d) {
                        const e = new Set(a.keys());
                        for (const [f, g] of b)(b = a.get(f)) ? (e.delete(f), c(b, g)) : a.set(f, d(g));
                        e.forEach(f => a.delete(f))
                    },
                    U5 = function(a, b, c, d) {
                        const e = a.toArray();
                        for (let f = 0; f < Math.max(e.length, b.length); f++)
                            if (f < e.length && f < b.length) c(e[f], b[f]);
                            else if (f < e.length && f >= b.length) a.delete(e[f]);
                        else if (f >= e.length && f < b.length) {
                            const g = d(b[f]);
                            a.append(g)
                        }
                    },
                    T5 = function(a, b) {
                        switch (b === null || b === void 0 ? void 0 : b.type) {
                            case "color":
                                a.color = b.color;
                                a.ob.set(void 0);
                                var c;
                                a.Sa = (c = b.Sa) !== null && c !== void 0 ? c : 0;
                                break;
                            case "gradient":
                                if (a.ob.ref && __c.b2a.domain.Xb(a.ob.ref, b.ob)) break;
                                a.color = void 0;
                                a.ob.set(b.ob);
                                var d;
                                a.Sa = (d = b.Sa) !== null && d !== void 0 ? d : 0;
                                break;
                            default:
                                a.color = void 0, a.ob.set(void 0)
                        }
                    },
                    hXb = function(a, b) {
                        b = R5(b);
                        a.all = b.all;
                        a.vE = b.vE;
                        a.tE = b.tE;
                        a.uE = b.uE;
                        a.sE = b.sE
                    },
                    gXb = function(a, b) {
                        b = Q5(b).all;
                        var c;
                        if (c = b) c = a.all.ref, c = !(c && b ? __c.dE.domain.Xb(__c.dE.va(c), b) : !c && !b);
                        c && a.all.set(b)
                    },
                    kXb = function(a, b) {
                        return a.length === b.length && a.every(c => b.includes(c))
                    },
                    nXb = function(a, b, c, d) {
                        let e = a.PVa.get(b);
                        if (e) return e;
                        e = {
                            Ry: new mXb(c.xA, b, d, c.Mra),
                            sGa: void 0,
                            PPa: void 0,
                            NRa: __c.ZV.mode
                        };
                        a.PVa.set(b, e);
                        return e
                    },
                    pXb = function(a, b, c, d, e) {
                        var f, g;
                        e = nXb(a, c, b, e);
                        const h = e.Ry,
                            k = e.PPa,
                            l = e.sGa,
                            m = e.NRa;
                        c = __c.ZP.va(c);
                        const n = ((f = (g = a.cB).Tqa) === null || f === void 0 ? void 0 : f.call(g, d)) || __c.ZV;
                        h.hk === k && oXb.structural(c, l) && n.mode === m || (e.sGa = c, e.PPa = h.hk, e.NRa = n.mode, b = b.render(h, n), a.oib.update(d, b), XWb(d, b, (p, q) => a.UQ.dsa.set(p, q), (p, q, r) => a.UQ.refs.set(p, {
                            ref: q,
                            key: r
                        })))
                    },
                    sXb = function(a, b) {
                        const c = [],
                            d = () => c.forEach(e => e());
                        c.push(a.$ib());
                        c.push(qXb(() => {
                            a: {
                                var e = new rXb;
                                for (const f of b)
                                    if (e.XQ(f), e.Rpa) {
                                        e = e.Rpa;
                                        break a
                                    }
                                e = void 0
                            }
                            return e && (a.mc.isLoaded(e) || a.$sa.has(e))
                        }, e => {
                            if (e) {
                                for (const f of b) C(f.type === "layout"), a.vk.Sfa(f);
                                d()
                            }
                        }));
                        return d
                    },
                    tXb = function(a, b) {
                        return {
                            aN: ({
                                zj: c
                            }) => {
                                var d;
                                const {
                                    Ry: e
                                } = nXb(a.renderer, c, b, a.R2), f = __c.aQ.create([]), g = [];
                                g.push(sXb(a.Zab, f));
                                g.push(qXb(() => {
                                    var k, l;
                                    return [(k = (l = a.cB).Tqa) === null || k === void 0 ? void 0 : k.call(l, f), __c.ZP.va(c),
                                        e.hk
                                    ]
                                }, () => {
                                    pXb(a.renderer, b, c, f, a.R2)
                                }, {
                                    fireImmediately: !0,
                                    equals: oXb.structural
                                }));
                                const h = (d = b.zua) === null || d === void 0 ? void 0 : d.call(b, {
                                    Ry: e
                                });
                                h && g.push(h);
                                return {
                                    hb: f,
                                    qx: () => {
                                        g.forEach(k => k())
                                    }
                                }
                            }
                        }
                    },
                    vXb = function(a, b) {
                        let c = a.s8.get(b);
                        c || (c = uXb("weakKey"), a.s8.set(b, c));
                        c.reportObserved()
                    },
                    V5 = __webpack_require__(519427),
                    oXb = V5.comparer,
                    wXb = V5.computed,
                    uXb = V5.createAtom,
                    W5 = V5.observable,
                    qXb = V5.reaction,
                    xXb = V5.runInAction;
                var yXb = class {
                    static A(a) {
                        __c.Q(a, {
                            Hkb: W5.ref,
                            kcb: W5.ref
                        })
                    }
                    constructor() {
                        this.Tqa = (yXb.A(this), void 0)
                    }
                };
                var zXb = class {
                        constructor() {
                            this.sources = new WeakMap
                        }
                    },
                    mXb = class {
                        static A(a) {
                            __c.Q(a, {
                                zf: wXb
                            })
                        }
                        get QPa() {
                            var a = this.R2,
                                b = this.zj,
                                c = this.Mra;
                            let d = a.sources.get(b);
                            d || (d = W5.box(c), a.sources.set(b, d));
                            return d
                        }
                        get hk() {
                            return this.QPa.get()
                        }
                        get zf() {
                            return this.xA.Nv({
                                type: "dict",
                                value: this.zj
                            })
                        }
                        Rm(a) {
                            this.QPa.set(a instanceof Function ? { ...this.hk,
                                ...a()
                            } : { ...this.hk,
                                ...a
                            })
                        }
                        constructor(a, b, c, d) {
                            this.xA = a;
                            this.zj = b;
                            this.R2 = c;
                            this.Mra = d;
                            mXb.A(this)
                        }
                    };
                var WWb = class {
                    j7(a, b) {
                        this.GVa(a, b);
                        b.ref && this.bxa(a, b.ref, b.key)
                    }
                    $Q(a, b) {
                        b.ref && this.bxa(a.text, b.ref, b.key)
                    }
                    jDa(a, b) {
                        switch (b.content.type) {
                            case "shape":
                                C(a.element.type === "shape");
                                this.j7(a.element, b.content);
                                break;
                            case "text":
                                C(a.element.type === "text");
                                this.$Q(a.element, b.content);
                                break;
                            case "layout":
                                C(a.element.type === "layout");
                                this.Pia(a.element, b.content);
                                break;
                            default:
                                throw new E(b.content);
                        }
                    }
                    Pia(a, b) {
                        this.GVa(a, b);
                        b.ref && this.bxa(a, b.ref, b.key);
                        for (const [c, d] of a.cells) a = b.cells.find(e =>
                            e.id === c), C(!!d && !!a), this.jDa(d, a)
                    }
                    constructor(a, b) {
                        this.GVa = a;
                        this.bxa = b
                    }
                };
                var N5 = {
                        locked: !0,
                        zl: {
                            ZZ: !1,
                            dX: !1
                        },
                        ij: !0
                    },
                    O5 = {
                        top: 0,
                        left: 0,
                        width: 1,
                        height: 1
                    };
                var AXb = class {
                    constructor(a) {
                        this.vk = a;
                        this.update = (b, c) => {
                            U5(b, [c], (d, e) => {
                                switch (d.type) {
                                    case "layout":
                                        jXb(d, e);
                                        break;
                                    default:
                                        throw Error(`Not supported element type: ${d.type}`);
                                }
                            }, d => {
                                a: switch (d.type) {
                                    case "layout":
                                        d = { ...aXb(d),
                                            ...N5,
                                            width: d.minWidth,
                                            height: d.minHeight,
                                            H: d.minWidth,
                                            V: d.minHeight
                                        };
                                        break a;
                                    default:
                                        throw new E(d.type);
                                }
                                return d
                            });
                            for (const d of b) C(d.type === "layout"), d.width = c.minWidth, d.height = c.minHeight, d.H = c.minWidth, d.V = c.minHeight, c.direction && (d.direction = c.direction), this.vk.Sfa(d)
                        }
                    }
                };
                var BXb = class {
                    constructor(a, b, c) {
                        this.oib = a;
                        this.UQ = b;
                        this.cB = c;
                        this.PVa = new WeakMap
                    }
                };
                var CXb = class {
                        static A(a) {
                            __c.Q(a, {
                                $sa: W5.shallow
                            })
                        }
                        constructor(a, b) {
                            this.mc = a;
                            this.vk = b;
                            this.$sa = (CXb.A(this), new Set);
                            this.bqa = new Set;
                            this.$ib = () => {
                                this.Paa || (this.Paa = __c.sga(this.mc).subscribe(d => {
                                    xXb(() => {
                                        this.$sa.add(d.id)
                                    })
                                }));
                                const c = Symbol();
                                this.bqa.add(c);
                                return () => {
                                    this.bqa.delete(c);
                                    this.bqa.size <= 0 && this.Paa && (this.Paa.unsubscribe(), this.Paa = void 0)
                                }
                            }
                        }
                    },
                    rXb = class extends __c.BC {
                        XQ(a, b) {
                            this.Rpa || super.XQ(a, b)
                        }
                        $Q(a) {
                            this.Rpa = (a = a.text.mz("font-family")["font-family"].values().next().value) &&
                                __c.js(a).id
                        }
                    };
                var DXb = !1,
                    EXb = class {
                        register(a, b) {
                            this.GE.has(a) || (this.GE.set(a, b), DXb || (__c.$P.set(a, tXb(this, b)), DXb = !0))
                        }
                        get(a) {
                            return this.GE.get(a)
                        }
                        constructor(a, b, c, d, e) {
                            this.renderer = a;
                            this.R2 = b;
                            this.cB = c;
                            this.mc = d;
                            this.vk = e;
                            this.GE = new Map;
                            this.Zab = new CXb(this.mc, this.vk)
                        }
                    };
                var FXb = class {
                    delete(a) {
                        var b;
                        const c = this.map.delete(a);
                        c && ((b = this.s8.get(a)) === null || b === void 0 || b.reportChanged());
                        return c
                    }
                    get(a) {
                        vXb(this, a);
                        return this.map.get(a)
                    }
                    has(a) {
                        vXb(this, a);
                        return this.map.has(a)
                    }
                    set(a, b) {
                        if (!this.map.has(a) || this.map.get(a) !== b) {
                            var c;
                            this.map.set(a, b);
                            (c = this.s8.get(a)) === null || c === void 0 || c.reportChanged()
                        }
                        return this
                    }
                    constructor() {
                        this.s8 = new WeakMap;
                        this.map = new WeakMap
                    }
                };
                var GXb = class {
                        constructor() {
                            this.dsa = new FXb;
                            this.refs = new FXb
                        }
                    },
                    HXb = class {
                        getContext(a) {
                            return this.UQ.refs.get(a)
                        }
                        LN(a) {
                            return this.UQ.dsa.get(a)
                        }
                        constructor(a, b, c) {
                            this.UQ = a;
                            this.R2 = b;
                            this.renderer = c
                        }
                    };
                __c.HPa = {
                    Ceb: function(a) {
                        const b = new yXb,
                            c = new GXb,
                            d = new BXb(new AXb(a.vk), c, b),
                            e = new zXb;
                        a = new EXb(d, e, b, a.mc, a.vk);
                        return {
                            cB: b,
                            YMb: new HXb(c, e, d),
                            oDa: a,
                            UQ: c
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/c64f8e80d5c657c0.js.map