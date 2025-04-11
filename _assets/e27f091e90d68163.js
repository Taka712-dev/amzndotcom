(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [35024], {

        /***/
        839579: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var PH = __c.PH;
                var Jc = __c.Jc;
                var Q = __c.Q;
                var Ou = __c.Ou;
                var P = __c.P;
                var zx = __c.zx;
                var qu = __c.qu;
                var D = __c.D;
                var E = __c.E;
                var c5 = function(a, b) {
                        switch (b.reference.type) {
                            case 0:
                                const c = a.GS(b.reference.Fi);
                                a = a.pW(b.reference.Oi);
                                return c != null && a != null;
                            case 1:
                                return a.GS(b.reference.Fi) != null;
                            case 2:
                                return a.pW(b.reference.Oi) != null;
                            case 3:
                                return !1;
                            default:
                                throw new E(b.reference);
                        }
                    },
                    EVb = function(a, b, c) {
                        switch (c.type) {
                            case "invalid":
                                return !1;
                            case "canonical":
                                if (c.na.length > 0) return !1;
                                a = a.yG(c.xZ.slice(1).trim());
                                return a.result !== "success" ? !1 : __c.TD(new __c.WD, a.GI).filter(d => {
                                    switch (d.type) {
                                        case 0:
                                            return c5(b, d);
                                        case 1:
                                            return c5(b,
                                                d.start) && c5(b, d.end);
                                        default:
                                            throw new E(d);
                                    }
                                }).length > 0;
                            default:
                                throw new E(c);
                        }
                    },
                    FVb = function(a, b, c, d) {
                        const e = [];
                        for (const k of c)
                            for (const l of d) {
                                c = k.ya;
                                var f = l.column,
                                    g = a.layout.cells.get(c, f);
                                if (!g || (k.boundary === "start" ? g.span.cc === c : g.span.bd === c))
                                    if (c = b.get(`${f.id}:${c.id}`), c = k.boundary === "start" ? c === null || c === void 0 ? void 0 : c.Ca : c === null || c === void 0 ? void 0 : c.La) {
                                        g = e[e.length - 1];
                                        f = (f = a.layout.cols.next(f)) ? {
                                            column: f,
                                            boundary: "start"
                                        } : {
                                            column: D(a.layout.cols.last()),
                                            boundary: "end"
                                        };
                                        var h;
                                        if (h = g) h = g.tpa, h = h.column === l.column && h.boundary === l.boundary;
                                        h && (h = g.mWa, h = h.ya === k.ya && h.boundary === k.boundary);
                                        h && g.color === c.color && g.weight === c.weight && g.yc === c.yc && g.yc === 0 ? g.tpa = f : e.push({
                                            mWa: k,
                                            dqb: l,
                                            tpa: f,
                                            color: c.color,
                                            weight: c.weight,
                                            yc: c.yc
                                        })
                                    }
                            }
                        return e
                    },
                    GVb = function(a, b, c, d, e) {
                        const f = [];
                        for (const l of d)
                            for (const m of c) {
                                var g = m.ya,
                                    h = l.column;
                                d = a.layout.cells.get(g, h);
                                if (!d || (l.boundary === "start" ? d.span.Wb === h : d.span.Rc === h))
                                    if (d = b.get(`${h.id}:${g.id}`), (d = l.boundary === "start" ? d === null ||
                                            d === void 0 ? void 0 : d.Ba : d === null || d === void 0 ? void 0 : d.Ta) && (l.boundary !== "start" || e(g, h) !== 1)) {
                                        h = f[f.length - 1];
                                        g = (g = a.layout.rows.next(g)) ? {
                                            ya: g,
                                            boundary: "start"
                                        } : {
                                            ya: D(a.layout.rows.last()),
                                            boundary: "end"
                                        };
                                        var k;
                                        if (k = h) k = h.$Ha, k = k.column === l.column && k.boundary === l.boundary;
                                        k && (k = h.wpa, k = k.ya === m.ya && k.boundary === m.boundary);
                                        k && h.color === d.color && h.weight === d.weight && h.yc === d.yc && h.yc === 0 ? h.wpa = g : f.push({
                                            $Ha: l,
                                            nqb: m,
                                            wpa: g,
                                            color: d.color,
                                            weight: d.weight,
                                            yc: d.yc
                                        })
                                    }
                            }
                        return f
                    },
                    HVb = function(a, b, c, d, e) {
                        const f =
                            a.GXa.G7a(c, b.layout.rows.last(), b.layout.cols.last());
                        a = (q, r) => {
                            const t = f.get(q) || 0,
                                v = f.get(r) || 0;
                            return t <= v ? q : r
                        };
                        const g = new Map;
                        if (d.length === 0 || e.length === 0) return g;
                        var h = [],
                            k = b.layout.cols.vc(e[0].column);
                        k && h.push({
                            column: k,
                            boundary: "start"
                        });
                        h.push(...e);
                        (e = b.layout.cols.next(e[e.length - 1].column)) && h.push({
                            column: e,
                            boundary: "start"
                        });
                        e = [];
                        (k = b.layout.rows.vc(d[0].ya)) && e.push({
                            ya: k,
                            boundary: "start"
                        });
                        e.push(...d);
                        (d = b.layout.rows.next(d[d.length - 1].ya)) && e.push({
                            ya: d,
                            boundary: "start"
                        });
                        for (const q of h) {
                            h = (d = q.boundary === "start" ? q.column : void 0) ? b.layout.cols.vc(d) : b.layout.cols.last();
                            for (const r of e) {
                                var l = r.boundary === "start" ? r.ya : void 0;
                                k = l ? b.layout.rows.vc(l) : b.layout.rows.last();
                                var m = d && l && c.get(`${d.id}:${l.id}`),
                                    n = d && k && c.get(`${d.id}:${k.id}`);
                                l = h && l && c.get(`${h.id}:${l.id}`);
                                var p = h && k && c.get(`${h.id}:${k.id}`);
                                k = q.boundary === "end" ? l === null || l === void 0 ? void 0 : l.Ta : m === null || m === void 0 ? void 0 : m.Ba;
                                m = r.boundary === "end" ? n === null || n === void 0 ? void 0 : n.La : m === null || m === void 0 ?
                                    void 0 : m.Ca;
                                n = q.boundary === "end" ? p === null || p === void 0 ? void 0 : p.Ta : n === null || n === void 0 ? void 0 : n.Ba;
                                l = r.boundary === "end" ? p === null || p === void 0 ? void 0 : p.La : l === null || l === void 0 ? void 0 : l.Ca;
                                p = __c.ZCa({
                                    Ca: n,
                                    La: k,
                                    Ba: l,
                                    Ta: m
                                }, a);
                                let t;
                                switch (p) {
                                    case "blockStart":
                                        t = n;
                                        break;
                                    case "blockEnd":
                                        t = k;
                                        break;
                                    case "inlineStart":
                                        t = l;
                                        break;
                                    case "inlineEnd":
                                        t = m;
                                        break;
                                    default:
                                        t = void 0
                                }
                                const {
                                    height: v,
                                    width: u
                                } = (t === null || t === void 0 ? void 0 : t.yc) === 1 ? {
                                    height: t.weight,
                                    width: t.weight
                                } : {
                                    height: Math.max((l === null || l === void 0 ? void 0 :
                                        l.weight) || 0, (m === null || m === void 0 ? void 0 : m.weight) || 0),
                                    width: Math.max((n === null || n === void 0 ? void 0 : n.weight) || 0, (k === null || k === void 0 ? void 0 : k.weight) || 0)
                                };
                                g.set(d5(q, r), __c.wE(p, v / 2, u / 2))
                            }
                        }
                        return g
                    },
                    IVb = function(a, b, c, d, e, f) {
                        if (d.length === 0 || e.length === 0) return [];
                        const g = FVb(b, c, d, e);
                        f = GVb(b, c, d, e, f);
                        const h = HVb(a, b, c, d, e),
                            k = a.tcb(b),
                            l = a.Pbb(b),
                            m = b.direction === "rtl";
                        a = g.map(n => {
                            var p, q, r = n.dqb,
                                t = n.tpa,
                                v = n.mWa;
                            const u = n.color,
                                x = n.weight;
                            n = n.yc;
                            const y = m ? -1 : 1,
                                z = (p = h.get(d5(r, v))) === null || p === void 0 ?
                                void 0 : p.Ta;
                            p = (q = h.get(d5(t, v))) === null || q === void 0 ? void 0 : q.Ba;
                            if (z != null && p != null) {
                                q = D(k.get(v.ya));
                                var A = D(l.get(r.column));
                                r = D(l.get(t.column));
                                v = v.boundary === "start" ? q.start : q.end;
                                q = A.start;
                                t = t.boundary === "start" ? r.start : r.end;
                                return {
                                    color: u,
                                    weight: x,
                                    yc: n,
                                    p1: new qu(q + z * y, v),
                                    p2: new qu(t + p * y, v),
                                    ...__c.BE((t - q) * y, n * x, z)
                                }
                            }
                        }).filter(__c.xb);
                        return [...f.map(n => {
                            var p, q, r = n.$Ha,
                                t = n.nqb,
                                v = n.wpa;
                            const u = n.color,
                                x = n.weight;
                            n = n.yc;
                            const y = (p = h.get(d5(r, t))) === null || p === void 0 ? void 0 : p.La;
                            p = (q = h.get(d5(r,
                                v))) === null || q === void 0 ? void 0 : q.Ca;
                            if (y != null && p != null) {
                                q = D(l.get(r.column));
                                var z = D(k.get(t.ya));
                                t = D(k.get(v.ya));
                                r = r.boundary === "start" ? q.start : q.end;
                                q = z.start;
                                v = v.boundary === "start" ? t.start : t.end;
                                return {
                                    color: u,
                                    weight: x,
                                    yc: n,
                                    p1: new qu(r, q + y),
                                    p2: new qu(r, v + p),
                                    ...__c.BE(v - q, n * x, y)
                                }
                            }
                        }).filter(__c.xb), ...a]
                    },
                    JVb = function(a) {
                        const b = [];
                        a = a.filter(c => c.weight !== 0 && c.color != null);
                        a = __c.Bd(a, c => c.weight);
                        a = Array.from(a.entries()).sort(([c], [d]) => c - d);
                        for (const [c, d] of a) {
                            a = __c.Bd(d, e => `${e.Ok}_${e.Pk}`);
                            for (const [, e] of a) {
                                const {
                                    Pk: f,
                                    Ok: g
                                } = e[0];
                                a = __c.Bd(e, h => h.color);
                                for (const [h, k] of a) b.push({
                                    weight: c,
                                    color: h,
                                    lines: k,
                                    Ok: g,
                                    Pk: f
                                })
                            }
                        }
                        return b
                    },
                    KVb = function(a, b, c, d) {
                        var e = __c.lrb;
                        const f = b.get().flatMap(k => a.layout.rows.last() === k ? [{
                                ya: k,
                                boundary: "start"
                            }, {
                                ya: k,
                                boundary: "end"
                            }] : [{
                                ya: k,
                                boundary: "start"
                            }]),
                            g = c.get().flatMap(k => a.layout.cols.last() === k ? [{
                                column: k,
                                boundary: "start"
                            }, {
                                column: k,
                                boundary: "end"
                            }] : [{
                                column: k,
                                boundary: "start"
                            }]),
                            h = new Map;
                        for (const k of b.get())
                            for (const l of c.get()) b = l && k ?
                                e.GXa.lnb(a, l, k) : void 0, b && h.set(`${l.id}:${k.id}`, b);
                        c = IVb(e, a, h, f, g, d);
                        return JVb(c)
                    },
                    e5 = function() {
                        const [a] = (0, __c.gc)(() => zx());
                        return a
                    },
                    LVb = function(a) {
                        switch (a) {
                            case 2:
                                return P("ibdecg");
                            case 7:
                                return P("446quA");
                            case 5:
                                return P("j1fbqg");
                            case 1:
                                return P("O5i4AQ");
                            case 6:
                                return P("C0VHsg");
                            case 4:
                                return P("9ND0kg");
                            case -1:
                                return P("RWqnLA");
                            case 9:
                                return P("nQR/7w");
                            case -2:
                                return P("P23rtA");
                            case 3:
                                return P("+IXmVg");
                            default:
                                throw new E(a);
                        }
                    },
                    MVb = function(a, b, c) {
                        const d = [a];
                        for (; a != null &&
                            a !== b;)(a = c.next(a)) && d.push(a);
                        return d
                    },
                    NVb = function(a) {
                        const b = a.direction === "rtl" ? -(0, __c.orb)(a) / 2 : -(0, __c.mrb)(a) / 2,
                            c = -(0, __c.nrb)(a) / 2,
                            d = a.width + (0, __c.mrb)(a) / 2 + (0, __c.orb)(a) / 2;
                        a = a.height + (0, __c.nrb)(a) / 2 + (0, __c.prb)(a) / 2;
                        return Ou({
                            top: 0,
                            left: 0,
                            width: d,
                            height: a,
                            rotation: 0
                        }).translate(b, c)
                    },
                    OVb = function(a) {
                        return b => ({
                            type: "react",
                            node: (0, __c.M)(a, { ...b
                            })
                        })
                    },
                    QVb = function(a) {
                        var b;
                        const c = a.BA;
                        var d = a.content;
                        const e = a.context;
                        a = a.gq;
                        __c.C((d === null || d === void 0 ? void 0 : (b = d.yg) === null || b ===
                            void 0 ? void 0 : b.type) === "formula");
                        b = d.Tk;
                        const f = {
                            type: "dom",
                            render: h => h.innerText = ""
                        };
                        switch (b.type) {
                            case 9:
                                d = f;
                                break;
                            case 6:
                                var g;
                                d = (g = c.eka) === null || g === void 0 ? void 0 : g.call(c, {
                                    content: __c.me(__c.B3a, { ...__c.vcb,
                                        value: b.value
                                    }),
                                    context: e,
                                    gq: a
                                });
                                break;
                            case 1:
                            case 3:
                            case 4:
                            case 2:
                            case 7:
                            case 8:
                                d = PVb(c, e, d.rB, d.Tk.type);
                                break;
                            case 0:
                                d = {
                                    type: "react",
                                    node: f5(__c.VR, {
                                        label: LVb(b.error),
                                        children: f5(__c.By, {
                                            width: "full",
                                            display: "flex",
                                            justifyContent: "center",
                                            children: f5(__c.Jyb, {
                                                tone: "critical"
                                            })
                                        })
                                    })
                                };
                                break;
                            default:
                                throw new E(b);
                        }
                        return d !== null && d !== void 0 ? d : f
                    },
                    PVb = function(a, b, c, d) {
                        var e;
                        return (e = a.hka) === null || e === void 0 ? void 0 : e.call(a, {
                            context: b,
                            value: c,
                            valueType: d
                        })
                    },
                    TVb = function(a) {
                        const b = a.BA,
                            c = a.Pf,
                            d = a.Yqb,
                            e = a.zb;
                        b.hka = f => __c.XJa({ ...f,
                            zb: e
                        });
                        b.XEa = f => QVb({ ...f,
                            BA: b
                        });
                        b.eka = OVb(RVb({
                            Pf: c,
                            vR: void 0
                        }));
                        b.ZEa = SVb(d, e);
                        b.$Ea = OVb(f => f5(g5, { ...f,
                            zb: e
                        }))
                    },
                    UVb = function({
                        label: a,
                        cb: b,
                        width: c,
                        height: d,
                        scale: e,
                        iIa: f
                    }) {
                        return f5("div", {
                            style: {
                                width: c,
                                height: d,
                                transform: `scale(${e})`
                            },
                            className: "bx74uQ",
                            children: h5(__c.yy, {
                                className: i5("ivlMMQ", j5(f)),
                                size: "small",
                                alignment: "center",
                                children: [b && f5(b, {
                                    size: "small"
                                }), a]
                            })
                        })
                    },
                    j5 = function(a) {
                        return {
                            _2BX0vg: a === "primary-default",
                            JfW_Cg: a === "primary-low",
                            isMgNg: a === "primary-active",
                            xwWDeQ: a === "secondary-default",
                            w0EyUQ: a === "secondary-low",
                            _8p5AIA: a === "secondary-active"
                        }
                    },
                    WVb = function({
                        Ed: a,
                        iNa: b,
                        scale: c,
                        Qp: d,
                        Rp: e,
                        I0a: f
                    }) {
                        const g = k5(() => {
                                const m = d === null || d === void 0 ? void 0 : d.get();
                                if (m != null && m.length !== 0) return new __c.kE(m)
                            }, [d]),
                            h = e(1),
                            k = e(c),
                            l = {
                                ssE9Tg: !a,
                                OkifGQ: a
                            };
                        return f5(__c.zy, {
                            Yq: "light",
                            light: "light",
                            ju: "light",
                            dark: "light",
                            children: m => f5("div", {
                                className: i5("ze9QCQ", l, m.className),
                                style: {
                                    width: k,
                                    height: k
                                },
                                children: f5("div", {
                                    style: {
                                        width: h,
                                        height: h,
                                        transform: `scale(${c})`
                                    },
                                    className: i5("N7J3UA", l),
                                    ref: g === null || g === void 0 ? void 0 : g.Sm,
                                    children: f5(__c.$R, {
                                        className: i5("m8CFdg", l, {
                                            G6wL4w: f,
                                            W_E0wA: b
                                        }),
                                        ariaLabel: P("ruWN9A"),
                                        children: f5(VVb, {
                                            size: "tiny"
                                        })
                                    })
                                })
                            })
                        })
                    },
                    YVb = function() {
                        const a = new XVb,
                            b = new __c.wS,
                            c = l5(f => {
                                const {
                                    scale: g = 1,
                                    dNa: h,
                                    size: k =
                                        "small",
                                    I0a: l = !0
                                } = f, m = m5(n => a.Rp({
                                    scale: n,
                                    size: k,
                                    Sta: h
                                }), [k, h]);
                                return f5(WVb, { ...f,
                                    scale: h ? Math.max(g, h) : g,
                                    Ed: f.sheet.direction === "rtl",
                                    iNa: f.selection != null && a.Bfb(f.sheet, f.selection),
                                    Rp: m,
                                    I0a: l
                                })
                            }),
                            d = l5(f => {
                                const {
                                    scale: g = 1,
                                    dNa: h,
                                    size: k = "small",
                                    sheet: l,
                                    selection: m,
                                    Qnb: n
                                } = f, p = m5(u => a.Rp({
                                    scale: u,
                                    size: k,
                                    Sta: h
                                }), [k, h]), q = h ? Math.max(g, h) : g, r = m5(u => m != null && a.Txa(m).has(u), [m]), t = m5(u => m != null && a.rdb(l, m).has(u), [l, m]), v = m5(u => {
                                    const x = n != null && l.layout.cols.nf(u, n.Wb) >= 0 && l.layout.cols.nf(u, n.Rc) <=
                                        0;
                                    return r(u) ? x ? "secondary-active" : "primary-active" : t(u) ? x ? "secondary-low" : "primary-low" : x ? "secondary-default" : "primary-default"
                                }, [l, n, t, r]);
                                return f5(n5, { ...f,
                                    Ld: g,
                                    we: q,
                                    Rp: p,
                                    pF: v,
                                    iG: b
                                })
                            }),
                            e = l5(f => {
                                const {
                                    scale: g = 1,
                                    dNa: h,
                                    size: k = "small",
                                    sheet: l,
                                    selection: m,
                                    Qnb: n
                                } = f, p = m5(u => a.Rp({
                                    scale: u,
                                    size: k,
                                    Sta: h
                                }), [k, h]), q = h ? Math.max(g, h) : g, r = m5(u => m != null && a.Vxa(m).has(u), [m]), t = m5(u => m != null && a.sdb(l, m).has(u), [l, m]), v = m5(u => {
                                    const x = n != null && l.layout.rows.nf(u, n.cc) >= 0 && l.layout.rows.nf(u, n.bd) <= 0;
                                    return r(u) ?
                                        x ? "secondary-active" : "primary-active" : t(u) ? x ? "secondary-low" : "primary-low" : x ? "secondary-default" : "primary-default"
                                }, [l, n, t, r]);
                                return f5(o5, { ...f,
                                    Ld: q,
                                    we: g,
                                    Rp: p,
                                    pF: v,
                                    iG: b
                                })
                            });
                        return {
                            i1a: c,
                            h1a: d,
                            j1a: e
                        }
                    },
                    ZVb = function(a) {
                        const b = a.Iq,
                            c = () => null;
                        return __c.Jx(d => f5(p5, { ...d,
                            Iq: b,
                            $h: c
                        }))
                    },
                    $Vb = function({
                        sheet: a,
                        aa: b,
                        range: c,
                        ge: d
                    }) {
                        q5(() => r5(() => {
                            if (d.current != null) {
                                var e, f = (e = b === null || b === void 0 ? void 0 : b.get()) !== null && e !== void 0 ? e : 1;
                                e = a.direction === "rtl";
                                e = c ? a.Ba(c.Wb) * f * (e ? 1 : -1) : 0;
                                var g = c ? -a.Ca(c.cc) *
                                    f : 0;
                                d.current.style.transform = `translate(${e}px, ${g}px)`;
                                d.current.style.width = `${a.width*f}px`;
                                d.current.style.height = `${a.height*f}px`
                            }
                        }), [a, c, d, b])
                    },
                    cWb = function({
                        onScroll: a
                    }) {
                        const b = new aWb(a);
                        return {
                            oD: b,
                            Rja: l5(c => f5(bWb, {
                                sheet: c.sheet,
                                oD: b,
                                children: c.children
                            }))
                        }
                    },
                    fWb = function(a) {
                        const b = a.Iq,
                            c = a.Af,
                            d = a.HXa,
                            e = ({
                                children: k
                            }) => k,
                            {
                                oD: f,
                                Rja: g
                            } = cWb({
                                onScroll: a.onScroll
                            });
                        class h extends dWb {
                            get jM() {
                                const k = this.props.ua.yu;
                                switch (k) {
                                    case "screen":
                                        return g;
                                    case "print":
                                        return e;
                                    default:
                                        throw new E(k);
                                }
                            }
                            componentDidMount() {
                                d.vXa(this.props.item, {
                                    $b: this.props.$b,
                                    ua: this.props.ua
                                })
                            }
                            componentWillUnmount() {
                                d.y6a(this.props.item, {
                                    $b: this.props.$b,
                                    ua: this.props.ua
                                })
                            }
                            render() {
                                d.vXa(this.props.item, {
                                    $b: this.props.$b,
                                    ua: this.props.ua
                                });
                                return f5(eWb, { ...this.props,
                                    aa: this.aa,
                                    Iq: b,
                                    jM: this.jM,
                                    $h: this.$h,
                                    HXa: d,
                                    oD: f
                                })
                            }
                            constructor(...k) {
                                super(...k);
                                this.aa = s5(() => {
                                    const l = this.props.item;
                                    var m = this.props.ua,
                                        n = m.yu;
                                    m = m.zoom;
                                    switch (n) {
                                        case "screen":
                                            return m;
                                        case "print":
                                            n = d.xcb(l);
                                            if (!n) return 1;
                                            ({
                                                width: n
                                            } = new __c.LE(l,
                                                n.$b, {
                                                    zoom: m
                                                }));
                                            return n / l.config.width;
                                        default:
                                            throw new E(n);
                                    }
                                });
                                this.$h = l5(l => f5("div", {
                                    className: "wKvivQ",
                                    children: f5(__c.eKa, { ...this.props,
                                        ...l,
                                        Af: c
                                    })
                                }))
                            }
                        }
                        return {
                            b3a: h,
                            oD: f
                        }
                    },
                    gWb = function(a, b) {
                        if (b != null && b.Wb != null && b.cc != null && b.Rc != null && b.bd != null) {
                            var c = a.Ba(b.Wb),
                                d = a.Ca(b.cc),
                                e = a.Ba(b.Rc) + b.Rc.width - c;
                            a = a.Ca(b.bd) + b.bd.height - d;
                            return Ou({
                                top: d,
                                left: c,
                                width: e,
                                height: a
                            })
                        }
                    },
                    iWb = function(a) {
                        const b = a.Iq,
                            c = () => null;
                        return d => f5(hWb, { ...d,
                            Iq: b,
                            $h: c
                        })
                    },
                    lWb = function(a) {
                        const b = {
                                transform: "translate(-1000px, -1000px) scale(0)"
                            },
                            c = {
                                yHa: b,
                                Es: b,
                                Qa: {},
                                qo: {}
                            },
                            d = t5(() => a.JA.style || c, h => {
                                var k;
                                Object.assign(a.l9.style, h.yHa);
                                Object.assign(a.CM.style, h.Es);
                                Object.assign(a.BE.style, h.Qa);
                                Object.assign(a.HE.style, h.qo);
                                h = h === null || h === void 0 ? void 0 : (k = h.Qa) === null || k === void 0 ? void 0 : k.textDecoration;
                                a.BE.classList.toggle("OQx3PQ", h === "underline");
                                a.BE.classList.toggle("_99ezUA", h === "line-through");
                                a.BE.classList.toggle("kppAqQ", h === "underline line-through")
                            }, {
                                fireImmediately: !0,
                                equals: jWb
                            }),
                            e = t5(() => a.Ksa, h => {
                                a.BE.classList.toggle("_84KvRA", !h);
                                a.l9.classList.toggle("_84KvRA", !h);
                                a.CM.classList.toggle("TL_RLA", !h)
                            }, {
                                fireImmediately: !0
                            }),
                            f = t5(() => a.renderer, h => {
                                a.Z9 && (h === null || h === void 0 ? void 0 : h.type) !== "react" ? (a.Z9 = void 0, a.o4.remove()) : a.HE.innerHTML = "";
                                switch (h === null || h === void 0 ? void 0 : h.type) {
                                    case "react":
                                        a.Z9 = kWb(h.node, a.o4);
                                        a.HE.appendChild(a.o4);
                                        break;
                                    case "dom":
                                        h.render(a.HE);
                                        break;
                                    case void 0:
                                        break;
                                    default:
                                        throw new E(h);
                                }
                                a.Hua()
                            }, {
                                fireImmediately: !0
                            }),
                            g = t5(() => a.gra, h => {
                                a.BE.classList.toggle("qxD1GA", h)
                            }, {
                                fireImmediately: !0
                            });
                        return () => {
                            d();
                            e();
                            f();
                            g()
                        }
                    },
                    jWb = function(a, b) {
                        return JSON.stringify(a) === JSON.stringify(b)
                    },
                    nWb = function(a) {
                        const b = a.CA,
                            c = a.tD,
                            d = a.RD,
                            e = a.f0a,
                            f = a.Eo,
                            g = new mWb(c),
                            h = (k, l) => f ? EVb(f, k, l) : !1;
                        return k => f5(u5, { ...k,
                            qO: h,
                            RD: d,
                            tD: c,
                            CA: b,
                            hsa: g,
                            f0a: e === null || e === void 0 ? void 0 : e.get()
                        })
                    },
                    d5 = (a, b) => `${a.column.id}-${a.boundary}:${b.ya.id}-${b.boundary}`,
                    RVb = ({
                        Pf: a,
                        vR: b
                    }) => c => (0, __c.M)(__c.rrb, { ...c,
                        Pf: a,
                        vR: b
                    }),
                    v5 = __webpack_require__(443763),
                    oWb = v5.Fragment,
                    f5 = v5.jsx,
                    h5 = v5.jsxs;
                var l5 = __webpack_require__(214645).Pi;
                var w5 = __webpack_require__(875604),
                    x5 = w5.Component,
                    dWb = w5.PureComponent,
                    m5 = w5.useCallback,
                    q5 = w5.useEffect,
                    pWb = w5.useLayoutEffect,
                    k5 = w5.useMemo,
                    y5 = w5.useRef,
                    qWb = w5.useState;
                var z5 = __webpack_require__(519427),
                    A5 = z5.action,
                    r5 = z5.autorun,
                    B5 = z5.comparer,
                    s5 = z5.computed,
                    rWb = z5.createAtom,
                    C5 = z5.observable,
                    t5 = z5.reaction,
                    sWb = z5.untracked;
                var D5 = __webpack_require__(46239).gn;
                var tWb = __webpack_require__,
                    uWb = tWb(993864),
                    i5 = tWb.n_x(uWb)();
                var vWb = __webpack_require__(358579).Z;
                var E5 = __webpack_require__(635872),
                    F5 = E5.Om,
                    wWb = E5.kq,
                    xWb = E5.YN;
                var kWb = __webpack_require__(204358).createPortal;
                var yWb = l5(a => {
                        var b, c, d = a.sheet.direction === "rtl";
                        d = {
                            H2wykw: !d,
                            UweldA: d
                        };
                        const [e] = qWb(() => zx()), f = {
                            get: m5(() => {
                                var g;
                                const h = e === null || e === void 0 ? void 0 : (g = e.current) === null || g === void 0 ? void 0 : g.getBoundingClientRect();
                                var k, l;
                                g = {
                                    top: 0,
                                    left: 0,
                                    width: (k = h === null || h === void 0 ? void 0 : h.width) !== null && k !== void 0 ? k : 0,
                                    height: (l = h === null || h === void 0 ? void 0 : h.height) !== null && l !== void 0 ? l : 0
                                };
                                return Ou(g)
                            }, [e])
                        };
                        return h5("div", {
                            className: i5("nMvVqA", d),
                            children: [h5("div", {
                                ref: vWb(a.ge, e),
                                className: "_0YOFPg",
                                children: [f5(a.Iq, { ...a,
                                    viewport: f
                                }), f5("div", {
                                    className: i5("Gdl7fQ", d),
                                    children: (c = a.rEa) === null || c === void 0 ? void 0 : (b = c.get()) === null || b === void 0 ? void 0 : b.map((g, h) => f5(g, {}, h))
                                })]
                            }), a.XDb === "visible" && h5(oWb, {
                                children: [f5("div", {
                                    className: i5("_32sKQw", d),
                                    children: f5(a.Z2a, { ...a
                                    })
                                }), f5("div", {
                                    className: i5("xdIsTQ", d),
                                    children: f5(a.c3a, { ...a
                                    })
                                }), f5("div", {
                                    className: i5("rsTRSA", d),
                                    children: f5(a.a3a, { ...a
                                    })
                                })]
                            })]
                        })
                    }),
                    zWb = l5(a => {
                        a = a.content;
                        __c.w(a.type === "text2" || a.type === "text3");
                        switch (a.type) {
                            case "text2":
                                return a.value.ba;
                            case "text3":
                                return __c.lr.va(a.value).cells.ba();
                            default:
                                throw new E(a);
                        }
                    });
                var SVb = (a, b) => __c.JJa((c, d) => {
                        const e = c.content;
                        c = c.context;
                        if (e.value.isEmpty)
                            for (; d.lastChild;) d.lastChild.remove();
                        else({
                            nh: c
                        } = __c.qg(__c.Yg, c.attrs)), c === "wrap" && (d = d.appendChild(document.createElement("div")), d.className = "dt4Dlg"), a.render({
                            container: d,
                            text: e.value,
                            Pa: void 0,
                            writingMode: 1,
                            Jd: "start",
                            Vg: AWb(e, c),
                            zb: b
                        })
                    }),
                    AWb = F5((a, b) => {
                        if (b === "wrap") return [];
                        a = a.value.ba.split("\n").map(c => c.length + 1);
                        a.pop();
                        return a
                    }, {
                        equals: B5.structural
                    });
                var g5 = class extends x5 {
                    static A(a) {
                        Q(a, {
                            nh: s5
                        })
                    }
                    get nh() {
                        return __c.qg(__c.Yg, this.props.context.attrs).nh
                    }
                    render() {
                        var a = this.props.content;
                        const b = this.props.context;
                        if (a.value.isEmpty) return null;
                        a = f5(this.props.$h, {
                            content: a,
                            ya: b.container.ya,
                            col: b.container.column,
                            nh: this.nh
                        });
                        return this.nh === "wrap" ? f5("div", {
                            className: "dt4Dlg",
                            children: a
                        }) : a
                    }
                    constructor(...a) {
                        super(...a);
                        g5.A(this)
                    }
                };
                g5 = D5([Jc], g5);
                var XVb = class {
                    Rp({
                        size: a,
                        scale: b,
                        Sta: c
                    }) {
                        b = c ? Math.max(c, b) : b;
                        return a === "large" ? __c.eW * b : __c.Dxb * b
                    }
                    constructor() {
                        this.Bfb = F5((a, b) => {
                            var c, d;
                            b = b.get();
                            return b != null && a.layout.rows.count() === (((c = b.rows) === null || c === void 0 ? void 0 : c.size) || 0) && a.layout.cols.count() === (((d = b.columns) === null || d === void 0 ? void 0 : d.size) || 0)
                        });
                        this.Txa = wWb(a => {
                            var b;
                            return new Set(((b = a.get()) === null || b === void 0 ? void 0 : b.columns) || [])
                        }, {
                            equals: __c.Zr
                        });
                        this.Vxa = wWb(a => {
                            var b;
                            return new Set(((b = a.get()) === null || b === void 0 ?
                                void 0 : b.rows) || [])
                        }, {
                            equals: __c.Zr
                        });
                        this.rdb = F5((a, b) => {
                            var {
                                cells: c
                            } = b.get() || {};
                            if (!c) return new Set;
                            if (this.Vxa(b).size > 0) return new Set(a.layout.cols);
                            b = this.Txa(b);
                            const d = new Set;
                            for (const e of c) {
                                c = a.layout.cells.get(e.ya, e.column);
                                for (const f of MVb(c ? c.span.Wb : e.column, c ? c.span.Rc : e.column, a.layout.cols))(b.size === 0 || b.has(f)) && d.add(f)
                            }
                            return d
                        }, {
                            equals: __c.Zr
                        });
                        this.sdb = F5((a, b) => {
                            var {
                                cells: c
                            } = b.get() || {};
                            if (!c) return new Set;
                            if (this.Txa(b).size > 0) return new Set(a.layout.rows);
                            b = this.Vxa(b);
                            const d = new Set;
                            for (const e of c) {
                                c = a.layout.cells.get(e.ya, e.column);
                                for (const f of MVb(c ? c.span.cc : e.ya, c ? c.span.bd : e.ya, a.layout.rows))(b.size === 0 || b.has(f)) && d.add(f)
                            }
                            return d
                        }, {
                            equals: __c.Zr
                        })
                    }
                };
                var BWb = parseInt("4px", 10) || 4,
                    n5 = class extends x5 {
                        static A(a) {
                            Q(a, {
                                Ed: s5,
                                wr: s5,
                                G5: s5
                            })
                        }
                        get Ed() {
                            return this.props.sheet.direction === "rtl"
                        }
                        get wr() {
                            var a;
                            const b = (a = this.props.Qp) === null || a === void 0 ? void 0 : a.get();
                            if (b != null && b.length !== 0) return new __c.kE(b)
                        }
                        get G5() {
                            var a, b, c;
                            return (b = (c = this.props).Cqa) === null || b === void 0 ? void 0 : (a = b.call(c)) === null || a === void 0 ? void 0 : a.get()
                        }
                        render() {
                            return f5(__c.zy, {
                                Yq: "light",
                                light: "light",
                                ju: "light",
                                dark: "light",
                                children: this.N6a
                            })
                        }
                        constructor(...a) {
                            super(...a);
                            this.onMouseMove = (n5.A(this), A5(b => {
                                const {
                                    onMouseMove: c,
                                    sheet: d,
                                    Ld: e = 1
                                } = this.props;
                                c === null || c === void 0 || c(b, d, "column", e)
                            }));
                            this.onMouseLeave = A5(b => {
                                var c, d;
                                (c = (d = this.props).onMouseLeave) === null || c === void 0 || c.call(d, b)
                            });
                            this.NVa = (b, c, d) => {
                                const {
                                    sheet: e,
                                    Rp: f,
                                    pF: g,
                                    gEb: h,
                                    Ld: k = 1,
                                    we: l = 1
                                } = this.props, m = {
                                    jNbTIg: !this.Ed,
                                    gtA7Dw: this.Ed
                                }, n = (d === null || d === void 0 ? 0 : d.sticky) ? this.Ed ? {
                                    right: 0
                                } : {
                                    left: 0
                                } : void 0;
                                var p;
                                const q = (d === null || d === void 0 ? 0 : d.sticky) ? (p = this.G5) !== null && p !== void 0 ? p : n : void 0;
                                let r = -1;
                                return h5("div", {
                                    style: q,
                                    className: i5("Vt2_4w", m, {
                                        Tn3nUw: d === null || d === void 0 ? void 0 : d.sticky
                                    }),
                                    onMouseMove: this.onMouseMove,
                                    onMouseLeave: this.onMouseLeave,
                                    children: [e.layout.cols.map(t => {
                                        var v;
                                        r++;
                                        if (!(b && e.layout.cols.nf(t, b) < 0 || c && e.layout.cols.nf(t, c) > 0)) return f5(CWb, {
                                            col: t,
                                            label: __c.KA(r),
                                            cb: h === null || h === void 0 ? void 0 : (v = h.get()) === null || v === void 0 ? void 0 : v.get(t),
                                            Rp: f,
                                            pF: g,
                                            Ld: k,
                                            we: l
                                        }, t.id)
                                    }), (d === null || d === void 0 ? void 0 : d.sticky) && f5("div", {
                                        style: {
                                            width: BWb * k
                                        },
                                        className: i5("HBvlug", "ru3tFQ",
                                            m)
                                    })]
                                })
                            };
                            this.N6a = b => {
                                var c;
                                const d = this.props.sheet,
                                    e = d.view.freeze.qI ? d.layout.Rd.get(d.view.freeze.qI) : void 0,
                                    f = {
                                        jNbTIg: !this.Ed,
                                        gtA7Dw: this.Ed
                                    };
                                return h5("div", {
                                    ref: (c = this.wr) === null || c === void 0 ? void 0 : c.Sm,
                                    className: i5("xhBZaw", f, b.className),
                                    children: [e && this.NVa(void 0, e, {
                                        sticky: !0
                                    }), this.NVa(e ? d.cols.next(e) : void 0)]
                                })
                            }
                        }
                    };
                n5 = D5([Jc], n5);
                var o5 = class extends x5 {
                    static A(a) {
                        Q(a, {
                            Ed: s5,
                            wr: s5,
                            G5: s5
                        })
                    }
                    get Ed() {
                        return this.props.sheet.direction === "rtl"
                    }
                    get wr() {
                        var a;
                        const b = (a = this.props.Qp) === null || a === void 0 ? void 0 : a.get();
                        if (b != null && b.length !== 0) return new __c.kE(b)
                    }
                    get G5() {
                        var a, b, c;
                        return (b = (c = this.props).Cqa) === null || b === void 0 ? void 0 : (a = b.call(c)) === null || a === void 0 ? void 0 : a.get()
                    }
                    render() {
                        return f5(__c.zy, {
                            Yq: "light",
                            light: "light",
                            ju: "light",
                            dark: "light",
                            children: this.Anb
                        })
                    }
                    constructor(...a) {
                        super(...a);
                        this.onMouseMove = (o5.A(this),
                            A5(b => {
                                const {
                                    onMouseMove: c,
                                    sheet: d,
                                    we: e = 1
                                } = this.props;
                                c === null || c === void 0 || c(b, d, "row", e)
                            }));
                        this.onMouseLeave = A5(b => {
                            var c, d;
                            (c = (d = this.props).onMouseLeave) === null || c === void 0 || c.call(d, b)
                        });
                        this.RVa = (b, c, d) => {
                            const {
                                sheet: e,
                                Rp: f,
                                pF: g,
                                Ld: h = 1,
                                we: k = 1
                            } = this.props, l = {
                                jNbTIg: !this.Ed,
                                gtA7Dw: this.Ed
                            }, m = (d === null || d === void 0 ? 0 : d.sticky) ? {
                                top: 0
                            } : void 0;
                            var n;
                            const p = (d === null || d === void 0 ? 0 : d.sticky) ? (n = this.G5) !== null && n !== void 0 ? n : m : void 0;
                            let q = -1;
                            return h5("div", {
                                style: p,
                                className: i5("_93roJg", l, {
                                    Tn3nUw: d ===
                                        null || d === void 0 ? void 0 : d.sticky
                                }),
                                onMouseMove: this.onMouseMove,
                                onMouseLeave: this.onMouseLeave,
                                children: [e.rows.map(r => {
                                    q++;
                                    if (!(b && e.rows.nf(r, b) < 0 || c && e.rows.nf(r, c) > 0)) return f5(DWb, {
                                        ya: r,
                                        label: `${q+1}`,
                                        pF: g,
                                        Rp: f,
                                        Ld: h,
                                        we: k
                                    }, r.id)
                                }), (d === null || d === void 0 ? void 0 : d.sticky) && f5("div", {
                                    style: {
                                        height: BWb * k
                                    },
                                    className: i5("HBvlug", "koz2Hg")
                                })]
                            })
                        };
                        this.Anb = b => {
                            var c;
                            const d = this.props.sheet,
                                e = d.view.freeze.qW ? d.layout.re.get(d.view.freeze.qW) : void 0,
                                f = {
                                    jNbTIg: !this.Ed,
                                    gtA7Dw: this.Ed
                                };
                            return h5("div", {
                                ref: (c =
                                    this.wr) === null || c === void 0 ? void 0 : c.Sm,
                                className: i5("An9VeA", f, b.className),
                                children: [e && this.RVa(void 0, e, {
                                    sticky: !0
                                }), this.RVa(e ? d.rows.next(e) : void 0)]
                            })
                        }
                    }
                };
                o5 = D5([Jc], o5);
                var CWb = l5(a => {
                        const b = a.label,
                            c = a.cb,
                            d = a.col,
                            e = a.pF,
                            f = a.Rp,
                            g = a.Ld;
                        a = a.we;
                        const h = f(a),
                            k = xWb(() => e(d));
                        return f5("div", {
                            className: i5("_83Rssw", "d2uLIA", j5(k)),
                            style: {
                                width: d.width * g,
                                height: h
                            },
                            children: f5(UVb, {
                                label: b,
                                cb: c,
                                width: d.width,
                                height: f(1),
                                scale: a,
                                iIa: k
                            })
                        })
                    }),
                    DWb = l5(a => {
                        const b = a.label,
                            c = a.ya,
                            d = a.Rp,
                            e = a.pF,
                            f = a.Ld;
                        a = a.we;
                        const g = d(f),
                            h = xWb(() => e(c));
                        return f5("div", {
                            className: i5("_83Rssw", "JhBzyw", j5(h)),
                            style: {
                                width: g,
                                height: c.height * a
                            },
                            children: f5(UVb, {
                                label: b,
                                width: d(1),
                                height: c.height,
                                scale: f,
                                iIa: h
                            })
                        })
                    });
                var EWb = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
                var FWb = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
                var VVb = __c.OR({
                    hp: EWb,
                    medium: FWb
                });
                var p5 = class extends x5 {
                    static A(a) {
                        Q(a, {
                            Ee: s5.struct
                        })
                    }
                    render() {
                        const a = this.props.element,
                            b = this.props.Qp,
                            c = this.props.Ku,
                            d = this.props.Nu,
                            e = this.props.aa;
                        return f5(this.props.Iq, {
                            sheet: a.config,
                            container: this.props.container.ei(a),
                            M8: "visible",
                            Qp: b,
                            Ku: c,
                            Nu: d,
                            aa: e,
                            Ee: this.Ee,
                            $h: this.props.$h,
                            NH: void 0
                        })
                    }
                    get Ee() {
                        return __c.ZA(this.props.element.Ya, this.props.We)
                    }
                    constructor(...a) {
                        super(...a);
                        p5.A(this)
                    }
                };
                p5 = D5([Jc], p5);
                var GWb = class {
                    constructor() {
                        this.Jga = new WeakMap;
                        this.xcb = a => this.Jga.get(a);
                        this.vXa = (a, b) => {
                            this.Jga.set(a, b)
                        };
                        this.y6a = (a, b) => {
                            const c = this.Jga.get(a);
                            c && c.ua === b.ua && c.$b === b.$b && this.Jga.delete(a)
                        }
                    }
                };
                var G5 = parseInt("4px", 10) || 4,
                    HWb = l5(({
                        sheet: a,
                        aa: b,
                        range: c,
                        Iw: d,
                        Jw: e
                    }) => {
                        if (c != null && (d || e)) {
                            var f;
                            b = (f = b === null || b === void 0 ? void 0 : b.get()) !== null && f !== void 0 ? f : 1;
                            f = a.direction === "rtl";
                            var g = {
                                ZJ0G6w: !f,
                                dOI_jA: f
                            };
                            if (d && e) return d = a.Ca(c.bd) + c.bd.height, a = a.Ba(c.Rc) + c.Rc.width, f5("div", {
                                style: {
                                    top: d * b,
                                    width: a * b,
                                    height: G5 * b
                                },
                                className: i5("aX8dhQ", "VGcLng")
                            });
                            if (d) return c = a.Ba(c.Rc) + c.Rc.width, f5("div", {
                                style: {
                                    width: G5 * b,
                                    height: a.height * b,
                                    ...(f ? {
                                        right: c * b
                                    } : {
                                        left: c * b
                                    })
                                },
                                className: i5("aX8dhQ", "gl1RPg",
                                    g)
                            });
                            if (e) return c = a.Ca(c.bd) + c.bd.height, f5("div", {
                                style: {
                                    top: c * b,
                                    width: a.width * b,
                                    height: G5 * b
                                },
                                className: i5("aX8dhQ", "VGcLng")
                            })
                        }
                    });
                var H5 = ({
                        sheet: a,
                        range: b,
                        aa: c,
                        children: d
                    }) => {
                        const e = e5();
                        $Vb({
                            sheet: a,
                            aa: c,
                            range: b,
                            ge: e
                        });
                        return f5("div", {
                            ref: e,
                            className: i5("nstn2A", a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ"),
                            children: d
                        })
                    },
                    IWb = ({
                        sheet: a,
                        range: b,
                        aa: c,
                        children: d
                    }) => {
                        const e = e5();
                        $Vb({
                            sheet: a,
                            aa: c,
                            range: b,
                            ge: e
                        });
                        a = a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ";
                        return f5("div", {
                            className: i5("nstn2A", a, "_9sodyg"),
                            children: f5("div", {
                                ref: e,
                                className: i5("nstn2A", a),
                                children: d
                            })
                        })
                    };
                var bWb = l5(({
                        sheet: a,
                        children: b,
                        oD: c
                    }) => {
                        const d = m5(f => {
                                c.qya(a, f)
                            }, [c, a]),
                            e = m5(f => {
                                f != null ? c.pD.set(a, f) : c.pD.delete(a)
                            }, [c, a]);
                        return f5(__c.Ctb, {
                            direction: a.config.direction === "rtl" ? "rtl" : "ltr",
                            onScroll: d,
                            wv: e,
                            children: b
                        })
                    }),
                    aWb = class {
                        qya(a, b) {
                            this.onScroll && this.onScroll(a);
                            this.U4.set(a, b)
                        }
                        constructor(a) {
                            this.onScroll = a;
                            this.pD = new WeakMap;
                            this.U4 = C5.map(new Map, {
                                deep: !1
                            });
                            this.scrollTo = A5((b, c) => {
                                b = this.pD.get(b);
                                b === null || b === void 0 || b.scrollTo({
                                    left: Math.floor(c)
                                })
                            })
                        }
                    };
                var eWb = l5(a => {
                    const b = a.item,
                        c = a.Qp,
                        d = a.gg,
                        e = a.measureRef,
                        f = a.aa,
                        g = a.dOa,
                        h = a.$b,
                        k = a.Ku,
                        l = a.Nu,
                        m = a.Iq,
                        n = a.jM,
                        p = a.$h,
                        q = a.We,
                        r = a.oD;
                    a = k5(() => __c.ZA(b.Ya, q), [b, q]);
                    const t = k5(() => l5(({
                            sheet: y,
                            range: z,
                            Iw: A,
                            Jw: B
                        }) => f5(H5, {
                            sheet: y,
                            range: z,
                            aa: f,
                            children: f5(HWb, {
                                sheet: y,
                                aa: f,
                                range: z,
                                Iw: A,
                                Jw: B
                            })
                        })), [f]),
                        v = NVb(b.config),
                        u = f.get(),
                        x = Math.min(v.width * u, h.width);
                    q5(() => r5(() => {
                        var y = b.config.view.freeze.qI ? b.config.layout.Rd.get(b.config.view.freeze.qI) : void 0;
                        if (y != null)
                            if (b.config.Ba(y) + y.width > x) {
                                if (y = r.pD.get(b)) y.style.overflowX =
                                    "hidden"
                            } else if (y = r.pD.get(b)) y.style.overflowX = "scroll"
                    }), [b, h.width, r, u, x]);
                    return f5("div", {
                        ref: e,
                        className: "E8r86A",
                        style: {
                            width: x
                        },
                        children: f5(n, {
                            sheet: b,
                            children: f5("div", {
                                ref: g,
                                className: "cXTiJA",
                                style: {
                                    width: v.width * u,
                                    height: v.height * u
                                },
                                children: f5("div", {
                                    className: "W1ir5A",
                                    children: f5(m, {
                                        container: d.ck(b),
                                        sheet: b.config,
                                        M8: "visible",
                                        Qp: c,
                                        aa: f,
                                        Ku: k,
                                        Nu: l,
                                        Ee: a,
                                        $h: p,
                                        NH: t
                                    })
                                })
                            })
                        })
                    })
                });
                var JWb = l5(({
                    page: a,
                    range: b,
                    gD: c
                }) => {
                    const d = gWb(a.sheet, b);
                    return f5("div", {
                        className: "Gi9pfA",
                        children: a.elements.map((e, f) => d == null ? c(e, f) : __c.Mu(Ou(e)).Wp(d) && c(e, f))
                    })
                });
                var KWb = new __c.wS,
                    I5 = a => __c.eW * a,
                    LWb = () => "primary-default",
                    hWb = l5(({
                        container: a,
                        Qp: b,
                        Ku: c,
                        Nu: d,
                        P0: e,
                        aa: f,
                        viewport: g,
                        Fpb: h,
                        Iq: k,
                        $h: l,
                        gD: m,
                        bga: n,
                        rwb: p,
                        cvb: q,
                        bvb: r
                    }) => {
                        const t = a.page,
                            v = k5(() => l5(({
                                sheet: u,
                                range: x,
                                Iw: y,
                                Jw: z
                            }) => h5(oWb, {
                                children: [f5(H5, {
                                    sheet: t.sheet,
                                    range: x,
                                    aa: f,
                                    children: f5(HWb, {
                                        sheet: u,
                                        aa: f,
                                        range: x,
                                        Iw: y,
                                        Jw: z
                                    })
                                }), h5(IWb, {
                                    sheet: t.sheet,
                                    range: x,
                                    aa: f,
                                    children: [p && f5(p, {}), m && f5(JWb, {
                                        page: t,
                                        gD: m,
                                        range: x
                                    }), r && f5(r, {}), n && n()]
                                }), q && x && f5(H5, {
                                    sheet: t.sheet,
                                    range: x,
                                    aa: f,
                                    children: f5(q, {
                                        range: x
                                    })
                                })]
                            })), [t, f, p, m, r, n, q]);
                        return h ? f5(MWb, {
                            container: a,
                            viewport: g,
                            aa: f,
                            Qp: b,
                            Ku: c,
                            Nu: d,
                            Iq: k,
                            $h: l,
                            NH: v
                        }) : f5(k, {
                            sheet: t.sheet,
                            container: a,
                            M8: "hidden",
                            Qp: b,
                            Ku: c,
                            Nu: d,
                            P0: e,
                            aa: f,
                            viewport: g,
                            $h: l,
                            NH: v
                        })
                    }),
                    MWb = l5(a => {
                        const b = a.container,
                            c = a.aa,
                            d = a.viewport,
                            e = a.Qp,
                            f = a.Ku,
                            g = a.Nu,
                            h = a.Iq,
                            k = a.$h;
                        a = a.NH;
                        const l = b.page,
                            m = l.sheet.direction === "rtl",
                            n = y5(null),
                            p = y5(null),
                            q = y5(null);
                        q5(() => {
                            const y = J5({
                                sheet: l.sheet,
                                nha: !0,
                                oha: !0,
                                aa: c,
                                viewport: d
                            });
                            return t5(() => y === null || y === void 0 ? void 0 : y.get(), z => {
                                const A = n.current;
                                if (z &&
                                    A) {
                                    var B = l.sheet.direction === "rtl",
                                        F;
                                    A.style.position = (F = z.position) !== null && F !== void 0 ? F : "sticky";
                                    var H;
                                    A.style.top = (H = z.top) !== null && H !== void 0 ? H : "0px";
                                    var K, I;
                                    B ? A.style.right = (K = z.right) !== null && K !== void 0 ? K : "0px" : A.style.left = (I = z.left) !== null && I !== void 0 ? I : "0px";
                                    var N;
                                    A.style.transform = (N = z.transform) !== null && N !== void 0 ? N : ""
                                }
                            })
                        }, [l.sheet, c, d]);
                        q5(() => {
                            const y = J5({
                                sheet: l.sheet,
                                nha: !1,
                                oha: !0,
                                aa: c,
                                viewport: d
                            });
                            return t5(() => y === null || y === void 0 ? void 0 : y.get(), z => {
                                const A = q.current;
                                if (z && A) {
                                    var B;
                                    A.style.position = (B = z.position) !== null && B !== void 0 ? B : "sticky";
                                    var F;
                                    A.style.top = (F = z.top) !== null && F !== void 0 ? F : "0px";
                                    var H;
                                    A.style.transform = (H = z.transform) !== null && H !== void 0 ? H : ""
                                }
                            })
                        }, [l.sheet, c, d]);
                        q5(() => {
                            const y = J5({
                                sheet: l.sheet,
                                nha: !0,
                                oha: !1,
                                aa: c,
                                viewport: d
                            });
                            return t5(() => y === null || y === void 0 ? void 0 : y.get(), z => {
                                const A = p.current;
                                if (z && A) {
                                    var B = l.sheet.direction === "rtl",
                                        F;
                                    A.style.position = (F = z.position) !== null && F !== void 0 ? F : "sticky";
                                    var H, K;
                                    B ? A.style.right = (H = z.right) !== null && H !== void 0 ? H : "0px" :
                                        A.style.left = (K = z.left) !== null && K !== void 0 ? K : "0px";
                                    var I;
                                    A.style.transform = (I = z.transform) !== null && I !== void 0 ? I : ""
                                }
                            })
                        }, [l.sheet, c, d]);
                        const r = m5((y, z, A) => J5({
                                sheet: y,
                                nha: z,
                                oha: A,
                                aa: c,
                                viewport: d
                            }), [c, d]),
                            t = k5(() => r ? () => r(l.sheet, !0, !1) : void 0, [r, l.sheet]),
                            v = k5(() => r ? () => r(l.sheet, !1, !0) : void 0, [r, l.sheet]);
                        var u;
                        const x = (u = c === null || c === void 0 ? void 0 : c.get()) !== null && u !== void 0 ? u : 1;
                        return h5("div", {
                            className: i5("OsKKIQ", "cbOp6Q"),
                            children: [f5("div", {
                                className: "VDFv_A",
                                children: f5(h, {
                                    sheet: l.sheet,
                                    container: b,
                                    M8: "hidden",
                                    Qp: e,
                                    Ku: f,
                                    Nu: g,
                                    P0: r,
                                    aa: c,
                                    viewport: d,
                                    $h: k,
                                    NH: a
                                })
                            }), f5("div", {
                                ref: n,
                                className: "_688KWg",
                                children: f5(WVb, {
                                    Ed: m,
                                    iNa: !1,
                                    Rp: I5,
                                    scale: x
                                })
                            }), f5("div", {
                                ref: q,
                                className: "m0cT1w",
                                children: f5(n5, {
                                    sheet: l.sheet,
                                    Ld: x,
                                    we: x,
                                    Rp: I5,
                                    pF: LWb,
                                    iG: KWb,
                                    Cqa: t
                                })
                            }), f5("div", {
                                ref: p,
                                className: "zm537g",
                                children: f5(o5, {
                                    sheet: l.sheet,
                                    Ld: x,
                                    we: x,
                                    Rp: I5,
                                    pF: LWb,
                                    iG: KWb,
                                    Cqa: v
                                })
                            })]
                        })
                    }),
                    J5 = ({
                        sheet: a,
                        nha: b,
                        oha: c,
                        aa: d,
                        viewport: e
                    }) => s5(() => {
                        var f = e === null || e === void 0 ? void 0 : __c.Wu(e.get()),
                            g;
                        const h = (g = d === null || d ===
                            void 0 ? void 0 : d.get()) !== null && g !== void 0 ? g : 1;
                        if (!f) return {};
                        g = {};
                        f = new qu(f.left, f.top);
                        const k = a.direction === "rtl";
                        g.position = "relative";
                        c && (g.top = "0px");
                        b && (k ? g.right = "0px" : g.left = "0px");
                        g.transform = `translate(${b?f.x*h:0}px, ${c?f.y*h:0}px)`;
                        return g
                    });
                var mWb = class {
                    constructor(a) {
                        this.tD = a;
                        this.k6a = __c.jU;
                        this.dcb = F5((b, c, d, e) => {
                            d = d.get();
                            const f = new WeakMap;
                            for (let t = 0; t < d.length; t++) {
                                var g = d[t],
                                    h = this.Ybb(b, c, g);
                                if (h) {
                                    switch (h) {
                                        case "start":
                                        case "justify":
                                            var k = d[t + 1];
                                            if (k == null || !PH(b, c, k)) continue;
                                            break;
                                        case "center":
                                            k = d[t + 1];
                                            if (k == null || !PH(b, c, k)) continue;
                                            k = d[t - 1];
                                            if (k == null || !PH(b, c, k)) continue;
                                            break;
                                        case "end":
                                            k = d[t - 1];
                                            if (k == null || !PH(b, c, k)) continue;
                                            break;
                                        default:
                                            throw new E(h);
                                    }
                                    if (k = e(c, g)) {
                                        var l = k.width + (h === "center" ? 0 : this.k6a);
                                        if (!(g.width >
                                                l)) {
                                            switch (h) {
                                                case "start":
                                                case "justify":
                                                    h = b.Ba(g);
                                                    k = h + l;
                                                    break;
                                                case "center":
                                                    k = b.Ba(g) + g.width / 2;
                                                    h = k - l / 2;
                                                    k += l / 2;
                                                    break;
                                                case "end":
                                                    k = b.Ba(g) + g.width;
                                                    h = k - l;
                                                    break;
                                                default:
                                                    throw new E(h);
                                            }
                                            for (l = d.indexOf(g); l >= 0; l--) {
                                                var m = d[l],
                                                    n = l - 1 < 0 || PH(b, c, d[l - 1]),
                                                    p;
                                                if (p = m === g || PH(b, c, m)) {
                                                    p = h;
                                                    var q = k,
                                                        r = b.Ba(m);
                                                    p = p < r && r < q
                                                }
                                                if (p && n) f.set(m, 1);
                                                else break
                                            }
                                            for (g = d.indexOf(g) + 1; g < d.length; g++) {
                                                l = d[g];
                                                if (m = PH(b, c, l)) m = h, n = k, p = b.Ba(l), m = m < p && p < n;
                                                if (m) f.set(l, 1);
                                                else break
                                            }
                                        }
                                    }
                                }
                            }
                            return f
                        });
                        this.Ybb = (b, c, d) => {
                            var e, f;
                            const g =
                                b.layout.cells.get(c, d);
                            if (g && (g.ref.content.ref || g.ref.Fa.ref) && g.span.cc === g.span.bd && g.span.Wb === g.span.Rc) {
                                var h = this.tD.Kw(b, c, d);
                                b = this.tD.vqa(b, c, d, __c.Zg({
                                    nh: void 0,
                                    textAlign: void 0
                                }));
                                var {
                                    nh: k,
                                    textAlign: l
                                } = __c.qg(__c.Yg, b);
                                if (k === "overflow") return __c.KJa(l, (e = g.ref.content.ref) === null || e === void 0 ? void 0 : e.type, (f = g.ref.Fa.ref) === null || f === void 0 ? void 0 : f.type, h ? () => h.Tk.type : void 0)
                            }
                        }
                    }
                };
                var NWb = l5(function(a) {
                    const b = a.sheet;
                    var c = a.wj;
                    const d = a.Ctb,
                        e = a.aa,
                        f = a.hsa,
                        g = a.Nbb;
                    a = a.overflow;
                    const h = e5();
                    pWb(() => r5(() => {
                        const p = D(h.current);
                        var q;
                        const r = (q = e === null || e === void 0 ? void 0 : e.get()) !== null && q !== void 0 ? q : 1;
                        q = b.height;
                        p.style.width = `${b.width*r}px`;
                        p.style.height = `${q*r}px`
                    }), [h, e, b]);
                    const k = m5(p => f.dcb(b, p, d, g), [f, b, d, g]);
                    var l = m5((p, q) => {
                        var r, t;
                        return (t = (r = k(p)) === null || r === void 0 ? void 0 : r.get(q)) !== null && t !== void 0 ? t : 0
                    }, [k]);
                    c = KVb(b, c, d, l);
                    l = b.width;
                    const m = b.height,
                        n = b.direction ===
                        "rtl";
                    return f5("svg", {
                        ref: h,
                        role: "presentation",
                        className: i5("c6a1eQ", {
                            H_CtIQ: !n,
                            _8_56PQ: n,
                            _3NnFzw: a === "visible",
                            JMH1ng: a === "hidden"
                        }),
                        viewBox: `0 0 ${l} ${m}`,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        children: c.map(({
                            lines: p,
                            color: q,
                            weight: r,
                            Ok: t,
                            Pk: v
                        }) => f5("path", {
                            stroke: q,
                            strokeDasharray: t,
                            strokeDashoffset: v,
                            strokeWidth: r,
                            d: p.map(({
                                p1: u,
                                p2: x
                            }) => `M ${u.x} ${u.y} L ${x.x} ${x.y}`).join(" ")
                        }, `${q}-${r}-${t}-${v}`))
                    })
                });
                var OWb = class {
                    get size() {
                        return this.Wga
                    }
                    get([a, b]) {
                        return (a = this.QF.get(a)) ? a.get(b) : void 0
                    }
                    has([a, b]) {
                        a = this.QF.get(a);
                        return a == null ? !1 : a.has(b)
                    }
                    set([a, b], c) {
                        let d = this.QF.get(a);
                        d == null && (d = new Map, this.QF.set(a, d));
                        d.set(b, c);
                        this.Wga++;
                        return this
                    }
                    clear() {
                        this.QF.clear();
                        this.Wga = 0
                    }
                    delete([a, b]) {
                        const c = this.QF.get(a);
                        if (c == null || !c.delete(b)) return !1;
                        this.Wga--;
                        c.size === 0 && this.QF.delete(a);
                        return !0
                    }
                    forEach(a) {
                        for (const [b, c] of this.QF)
                            for (const [d, e] of c) a([b, d], e)
                    }*[Symbol.iterator]() {
                        for (const [a,
                                b
                            ] of this.QF)
                            for (const [c, d] of b) yield [
                                [a, c], d
                            ]
                    }
                    constructor() {
                        this.Wga = 0;
                        this.QF = new Map
                    }
                };
                var L5 = class extends x5 {
                    render() {
                        const {
                            Zaa: a,
                            ...b
                        } = this.props, c = this.props.sheet;
                        return h5("div", {
                            ref: this.JXa,
                            className: i5("ZTz_iA", c.direction === "ltr" ? "TA4X7w" : "WvuqMw"),
                            children: [(a === null || a === void 0 ? void 0 : a.QGa) && f5(K5, { ...b,
                                    sheet: c,
                                    range: a.QGa.range,
                                    Iw: !0,
                                    Jw: !0,
                                    className: "_0C8M3w"
                                }), (a === null || a === void 0 ? void 0 : a.p0a) && f5(K5, { ...b,
                                    sheet: c,
                                    range: a.p0a.range,
                                    Iw: !1,
                                    Jw: !0,
                                    className: "_7n44yg"
                                }), (a === null || a === void 0 ? void 0 : a.lNa) && f5(K5, { ...b,
                                    sheet: c,
                                    range: a.lNa.range,
                                    Iw: !0,
                                    Jw: !1,
                                    className: "fF5r6w"
                                }),
                                (a === null || a === void 0 ? void 0 : a.z_a) && f5(K5, { ...b,
                                    sheet: c,
                                    range: a.z_a.range,
                                    Iw: !1,
                                    Jw: !1,
                                    className: "llILYw"
                                })
                            ]
                        })
                    }
                    componentDidMount() {
                        const a = r5(() => {
                            var b = this.props,
                                c = b.aa;
                            b = b.sheet;
                            const d = this.JXa.current;
                            d && (c = c ? c.get() : 1, d.style.width = `${b.width*c}px`, d.style.height = `${b.height*c}px`)
                        });
                        __c.vc(this, [a])
                    }
                    constructor(...a) {
                        super(...a);
                        this.JXa = zx()
                    }
                };
                L5 = D5([Jc], L5);
                var K5 = class extends x5 {
                    static A(a) {
                        Q(a, {
                            Dya: s5,
                            bounds: s5
                        })
                    }
                    get Dya() {
                        const a = this.props.viewport,
                            b = this.props.Iw,
                            c = this.props.Jw;
                        return a == null || !b && !c ? a : s5(() => {
                            const d = __c.Wu(a.get());
                            return Ou({
                                top: c ? 0 : d.top,
                                left: b ? 0 : d.left,
                                width: d.width,
                                height: d.height
                            })
                        })
                    }
                    render() {
                        const a = this.props.qO,
                            b = this.props.sheet,
                            c = this.props.container,
                            d = this.props.range,
                            e = this.props.NH,
                            f = this.props.Iw,
                            g = this.props.Jw;
                        return h5("div", {
                            ref: this.Sva,
                            className: i5("i0YQww", this.props.className),
                            children: [f5("div", {
                                ref: this.cUa,
                                className: "vUKoKg",
                                children: f5("div", {
                                    ref: this.dUa,
                                    children: f5(M5, {
                                        qO: a,
                                        sheet: b,
                                        container: c,
                                        bounds: d,
                                        Qp: this.props.Qp,
                                        RD: this.props.RD,
                                        $h: this.props.$h,
                                        f_: this.props.f_,
                                        aa: this.props.aa,
                                        wj: this.wj,
                                        i7: this.i7,
                                        QS: this.QS
                                    })
                                })
                            }), f5(this.Tja, {}), e && f5(e, {
                                sheet: b,
                                range: d,
                                Iw: f,
                                Jw: g
                            })]
                        })
                    }
                    componentDidMount() {
                        const a = r5(() => {
                                var g = this.props,
                                    h = g.aa,
                                    k = g.sheet;
                                const l = g.range;
                                var m = this.Sva.current;
                                const n = this.cUa.current;
                                g = this.dUa.current;
                                h = h ? h.get() : 1;
                                const p = l ? k.Ba(l.Rc) + l.Rc.width - k.Ba(l.Wb) : k.width,
                                    q =
                                    l ? k.Ca(l.bd) + l.bd.height - k.Ca(l.cc) : k.height;
                                m && (m.style.width = `${p*h}px`, m.style.height = `${q*h}px`);
                                n && (n.style.width = `${p*h}px`, n.style.height = `${q*h}px`);
                                m = k.direction === "rtl";
                                m = l ? k.Ba(l.Wb) * h * (m ? 1 : -1) : 0;
                                k = l ? -k.Ca(l.cc) * h : 0;
                                g && (g.style.transform = `translate(${m}px, ${k}px)`)
                            }),
                            b = this.props.sheet;
                        var c = this.props.P0;
                        const d = this.props.Iw,
                            e = this.props.Jw,
                            f = d || e ? c === null || c === void 0 ? void 0 : c(b, d, e) : void 0;
                        c = r5(() => {
                            const g = this.Sva.current;
                            if (g != null) {
                                var h = d || e ? "sticky" : "relative",
                                    k = e ? "0px" : "unset",
                                    l = d ? "0px" : "unset",
                                    m = d ? "0px" : "unset",
                                    n = b.direction === "rtl";
                                if (f == null) g.style.position = h, g.style.top = k, g.style.left = n ? "unset" : l, g.style.right = n ? m : "unset";
                                else {
                                    const u = f.get();
                                    var p;
                                    g.style.position = (p = u.position) !== null && p !== void 0 ? p : h;
                                    var q;
                                    g.style.top = (q = u.top) !== null && q !== void 0 ? q : k;
                                    var r;
                                    g.style.left = n ? "unset" : (r = u.left) !== null && r !== void 0 ? r : l;
                                    var t;
                                    g.style.right = n ? (t = u.right) !== null && t !== void 0 ? t : m : "unset";
                                    var v;
                                    g.style.transform = (v = u.transform) !== null && v !== void 0 ? v : "unset"
                                }
                            }
                        });
                        __c.vc(this, [a,
                            c
                        ])
                    }
                    get bounds() {
                        const a = this.props.sheet,
                            b = this.props.range;
                        if (a.layout.cols.empty || a.layout.rows.empty) return {
                            Wb: void 0,
                            Rc: void 0,
                            cc: void 0,
                            bd: void 0
                        };
                        var c, d, e, f;
                        return {
                            Wb: (c = b === null || b === void 0 ? void 0 : b.Wb) !== null && c !== void 0 ? c : a.layout.cols.first(),
                            Rc: (d = b === null || b === void 0 ? void 0 : b.Rc) !== null && d !== void 0 ? d : a.layout.cols.last(),
                            cc: (e = b === null || b === void 0 ? void 0 : b.cc) !== null && e !== void 0 ? e : a.layout.rows.first(),
                            bd: (f = b === null || b === void 0 ? void 0 : b.bd) !== null && f !== void 0 ? f : a.layout.rows.last()
                        }
                    }
                    constructor(...a) {
                        super(...a);
                        this.Sva = (K5.A(this), zx());
                        this.cUa = zx();
                        this.dUa = zx();
                        this.QS = new PWb;
                        this.Dtb = s5(() => [...this.wj.get().keys()].sort((b, c) => this.props.sheet.layout.rows.nf(b, c)), {
                            equals: __c.$r()
                        });
                        this.Btb = s5(() => [...this.i7.get().keys()].sort((b, c) => this.props.sheet.layout.cols.nf(b, c)), {
                            equals: __c.$r()
                        });
                        this.Tja = l5(() => f5(this.props.Y2a, {
                            wj: this.Dtb,
                            Ctb: this.Btb,
                            Nbb: this.QS.Vbb,
                            range: this.props.range
                        }));
                        this.wj = s5(() => {
                            var b;
                            const c = this.props.sheet;
                            var d = this.props.aa,
                                e = (b = this.Dya) === null || b === void 0 ? void 0 :
                                b.get();
                            if (e && (e.height <= 0 || e.width <= 0)) return new Map;
                            b = this.bounds;
                            d = d.get();
                            var f = 50 * d;
                            const g = e ? e.tl.y - f : b.cc ? c.Ca(b.cc) : 0;
                            e = e ? e.br.y + f : b.bd ? c.Ca(b.bd) + b.bd.height : 0;
                            f = new Map;
                            for (let h = b.cc; h != null && b.bd != null && c.layout.rows.nf(h, b.bd) <= 0; h = c.layout.rows.next(h)) {
                                const k = c.Ca(h);
                                if (!(k + h.height < g)) {
                                    if (k > e) break;
                                    f.set(h, k * d)
                                }
                            }
                            return f
                        }, {
                            equals: B5.shallow
                        });
                        this.i7 = s5(() => {
                            var b;
                            const c = this.props.sheet;
                            var d = this.props.aa,
                                e = (b = this.Dya) === null || b === void 0 ? void 0 : b.get();
                            if (e && (e.height <= 0 || e.width <=
                                    0)) return new Map;
                            b = this.bounds;
                            d = d.get();
                            var f = 50 * d;
                            const g = e ? e.tl.x - f : b.Wb ? c.Ba(b.Wb) : 0;
                            e = e ? e.br.x + f : b.Rc ? c.Ba(b.Rc) + b.Rc.width : 0;
                            f = new Map;
                            for (let h = b.Wb; h != null && b.Rc != null && c.layout.cols.nf(h, b.Rc) <= 0; h = c.layout.cols.next(h)) {
                                const k = c.Ba(h);
                                if (!(k + h.width < g)) {
                                    if (k > e) break;
                                    f.set(h, k * d)
                                }
                            }
                            return f
                        }, {
                            equals: B5.shallow
                        })
                    }
                };
                K5 = D5([Jc], K5);
                var PWb = class {
                        constructor() {
                            this.cells = new OWb;
                            this.axa = (a, b, c) => {
                                let d = this.cells.get([a, b]);
                                d == null && (d = C5.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], d));
                                d.set(c);
                                return () => {
                                    const e = this.cells.get([a, b]);
                                    e === d && (e.set(void 0), this.cells.delete([a, b]))
                                }
                            };
                            this.Vbb = (a, b) => {
                                var c;
                                let d = this.cells.get([a, b]);
                                d == null && (d = C5.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], d));
                                return (c = d.get()) === null || c === void 0 ? void 0 : c.GIa
                            }
                        }
                    },
                    M5 = class extends x5 {
                        static A(a) {
                            Q(a, {
                                UL: C5.shallow,
                                wr: s5,
                                zGa: A5,
                                e$: A5.bound
                            })
                        }
                        get wr() {
                            var a;
                            const b = (a = this.props.Qp) === null || a === void 0 ? void 0 : a.get();
                            if (b != null && b.length !== 0) return new __c.kE(b)
                        }
                        render() {
                            var a;
                            return h5("div", {
                                ref: vWb(this.ge, (a = this.wr) === null || a === void 0 ? void 0 : a.Sm),
                                children: [f5("div", {
                                    ref: this.Hma,
                                    className: "_5YlOqQ"
                                }), f5("div", {
                                    ref: this.Jma,
                                    className: "_XCmKw"
                                }), this.UL.map(b => b.Rlb)]
                            })
                        }
                        componentDidMount() {
                            const a = t5(() => [this.props.sheet, this.props.i7.get(), this.props.wj.get()], ([d, e, f], g) => {
                                    [g] = g || [];
                                    d !== g && (d = D(this.Hma.current), g = D(this.Jma.current), d.innerHTML =
                                        "", g.innerHTML = "", this.WCa.length = 0, this.UL.length = 0);
                                    this.zGa(e, f)
                                }, {
                                    fireImmediately: !0
                                }),
                                b = r5(() => {
                                    var d = this.props,
                                        e = d.aa;
                                    d = d.sheet;
                                    const f = this.ge.current;
                                    f && (e = e ? e.get() : 1, f.style.width = `${d.width*e}px`, f.style.height = `${d.height*e}px`)
                                }),
                                c = this.UL.map(d => lWb(d));
                            __c.vc(this, [b, a, ...c])
                        }
                        zGa(a, b) {
                            const c = D(this.Hma.current),
                                d = D(this.Jma.current),
                                e = [],
                                f = new Map;
                            for (const g of this.WCa) b.has(g.ya) ? f.set(g.ya, g) : e.push(g);
                            for (const [g, h] of b) b = f.get(g) || e.pop(), b || (b = new QWb(this.e$, g), c.appendChild(b.m9),
                                d.appendChild(b.o9), this.WCa.push(b)), b.update(h, g, a);
                            for (const g of e) g.hide()
                        }
                        e$(a, b) {
                            const c = this.props.f_,
                                d = this.props.sheet,
                                e = this.props.container,
                                f = this.props.QS;
                            a = new RWb(this.props.qO, this.props.RD, this.props.$h, c(a, b), d, a, b, e, f.axa, this.oba, this.nba);
                            __c.vc(this, lWb(a));
                            this.UL.push(a);
                            return a
                        }
                        constructor(...a) {
                            super(...a);
                            this.ge = (M5.A(this), zx());
                            this.Hma = zx();
                            this.Jma = zx();
                            this.WCa = [];
                            this.UL = [];
                            this.oba = F5(b => {
                                const c = this.props.wj.get();
                                return b === "first" ? c.keys().next().value : [...c.keys()].pop()
                            });
                            this.nba = F5(b => {
                                const c = this.props.i7.get();
                                return b === "first" ? c.keys().next().value : [...c.keys()].pop()
                            })
                        }
                    };
                M5 = D5([Jc], M5);
                var QWb = class {
                        static A(a) {
                            Q(a, {
                                update: A5
                            })
                        }
                        update(a, b, c) {
                            [this.m9, this.o9].forEach(d => {
                                d.style.transform = `translateY(${a}px)`;
                                d.classList.add("FPpqvg")
                            });
                            this.ya = b;
                            for (const [d] of c) c = this.UL.get(d), c || (c = this.e$(d, b), this.UL.set(d, c), this.m9.appendChild(c.l9), this.o9.appendChild(c.CM)), c.update(b)
                        }
                        hide() {
                            [this.m9, this.o9].forEach(a => {
                                a.style.transform = "translate(-1000px, -1000px) scale(0)"
                            })
                        }
                        constructor(a, b) {
                            this.e$ = a;
                            this.ya = b;
                            this.m9 = (QWb.A(this), document.createElement("div"));
                            this.o9 = document.createElement("div");
                            this.UL = new Map
                        }
                    },
                    RWb = class {
                        static A(a) {
                            Q(a, {
                                Z9: C5.ref,
                                ya: C5.ref,
                                gra: s5,
                                update: A5,
                                du: s5,
                                attrs: s5.struct,
                                Ksa: s5,
                                Es: s5,
                                renderer: s5,
                                GIa: s5.struct
                            })
                        }
                        get gra() {
                            if (!__c.Uw("285688d5", !1)) return !1;
                            const a = this.du;
                            return a == null || a.content.ref == null || a.content.ref.type !== "formula" ? !1 : this.qO(this.sheet, a.content.ref.value)
                        }
                        update(a) {
                            a !== this.ya && (this.ya = a, this.JA.ya = a, this.Goa && this.Goa(), this.Goa = this.axa(this.ya, this.col, this))
                        }
                        get Rlb() {
                            return this.Z9
                        }
                        get du() {
                            const a = this.sheet.layout.cells.get(this.ya,
                                this.col);
                            return a ? a.ref : void 0
                        }
                        get attrs() {
                            const a = this.JA.attrs;
                            return {
                                nh: a === null || a === void 0 ? void 0 : a.nh,
                                textAlign: a === null || a === void 0 ? void 0 : a.textAlign,
                                direction: a === null || a === void 0 ? void 0 : a.direction,
                                link: a === null || a === void 0 ? void 0 : a.link
                            }
                        }
                        get Ksa() {
                            var a = this.JA.span;
                            if (!a) return !1;
                            if (a.cc === a.bd && a.Wb === a.Rc) return !0;
                            var b = this.oba("first");
                            const c = this.oba("last"),
                                d = this.nba("first"),
                                e = this.nba("last");
                            if (!(b && c && d && e)) return !1;
                            b = this.sheet.layout.rows.nf(a.cc, b) >= 0 && this.sheet.layout.rows.nf(a.cc,
                                c) <= 0 ? a.cc : b;
                            a = this.sheet.layout.cols.nf(a.Wb, d) >= 0 && this.sheet.layout.cols.nf(a.Wb, e) <= 0 ? a.Wb : d;
                            return b === this.ya && a === this.col
                        }
                        get Es() {
                            const a = this.sheet,
                                b = this.ya,
                                c = this.col;
                            if (!this.container) return {
                                type: void 0,
                                sheet: a,
                                ya: b,
                                column: c
                            };
                            switch (this.container.type) {
                                case "fixed-page":
                                    return this.container.glb.Kd(c, b);
                                case "sheet-item":
                                    return this.container.Cya.Kd(c, b);
                                case "sheet-element":
                                    return this.container.vpb.Kd(c, b);
                                default:
                                    throw new E(this.container);
                            }
                        }
                        get renderer() {
                            const a = this.du;
                            if (a &&
                                this.Ksa && (a.content.ref || a.Fa.ref)) return this.RD({
                                context: {
                                    container: this.Es,
                                    attrs: this.attrs
                                },
                                gq: this.Hua,
                                $h: this.$h
                            })
                        }
                        get GIa() {
                            this.HIa.reportObserved();
                            var a = sWb(() => this.renderer);
                            if (a && (a = a.type === "react" ? this.o4 : this.HE, a.childNodes.length !== 0 && (a = a.childNodes[0], a instanceof HTMLElement))) return {
                                width: a.clientWidth,
                                height: a.clientHeight
                            }
                        }
                        constructor(a, b, c, d, e, f, g, h, k, l, m) {
                            var n, p, q, r, t, v;
                            this.qO = a;
                            this.RD = b;
                            this.JA = d;
                            this.sheet = e;
                            this.col = f;
                            this.container = h;
                            this.axa = k;
                            this.oba = l;
                            this.nba =
                                m;
                            this.l9 = (RWb.A(this), document.createElement("div"));
                            this.CM = document.createElement("div");
                            this.BE = document.createElement("div");
                            this.HE = document.createElement("div");
                            this.o4 = document.createElement("div");
                            this.HIa = rWb("content size atom");
                            this.Hua = A5(() => this.HIa.reportChanged());
                            this.ya = g;
                            this.l9.className = "_2JFriw";
                            this.CM.className = "imy9ug";
                            this.BE.className = i5("pDMp7w", {
                                _0yZ6Qg: ((p = this.du) === null || p === void 0 ? void 0 : (n = p.content.ref) === null || n === void 0 ? void 0 : n.type) !== "text3",
                                qhF5uA: ((r = this.du) ===
                                    null || r === void 0 ? void 0 : (q = r.content.ref) === null || q === void 0 ? void 0 : q.type) !== "text3" && ((v = this.du) === null || v === void 0 ? void 0 : (t = v.content.ref) === null || t === void 0 ? void 0 : t.type) !== "text2",
                                qxD1GA: this.gra
                            });
                            this.HE.className = "_30B9pw";
                            this.BE.appendChild(this.HE);
                            this.CM.appendChild(this.BE);
                            this.o4.className = "G7zH2w";
                            this.Goa = k(this.ya, this.col, this);
                            this.$h = u => f5(c, { ...u,
                                gq: this.Hua
                            })
                        }
                    };
                var u5 = class extends x5 {
                    static A(a) {
                        Q(a, {
                            Zaa: s5
                        })
                    }
                    render() {
                        const {
                            qO: a,
                            sheet: b,
                            container: c,
                            Qp: d,
                            P0: e,
                            RD: f,
                            Ee: g,
                            $h: h,
                            viewport: k,
                            NH: l,
                            f0a: m = !1
                        } = this.props;
                        if (!b.layout.cols.empty && !b.layout.rows.empty) return f5("div", {
                            className: i5("SNkrHw", b.direction === "ltr" ? "TA4X7w" : "WvuqMw", {
                                RaA0Nw: m
                            }),
                            ...g,
                            children: f5(L5, {
                                qO: a,
                                RD: f,
                                $h: h,
                                Y2a: this.Tja,
                                f_: this.f_,
                                sheet: b,
                                container: c,
                                Qp: d,
                                P0: e,
                                aa: this.aa,
                                viewport: k,
                                NH: l,
                                Zaa: this.Zaa
                            })
                        })
                    }
                    get Zaa() {
                        var a = this.props.sheet;
                        const b = {},
                            c = a.view.freeze.qW ? a.layout.re.get(a.view.freeze.qW) :
                            void 0,
                            d = a.view.freeze.qI ? a.layout.Rd.get(a.view.freeze.qI) : void 0,
                            e = a.layout.rows.first(),
                            f = a.layout.rows.last(),
                            g = a.layout.cols.first(),
                            h = a.layout.cols.last();
                        if (e != null && f != null && g != null && h != null) {
                            var k = d ? a.layout.cols.next(d) : g;
                            a = c ? a.layout.rows.next(c) : e;
                            c && d && (b.QGa = {
                                range: {
                                    Wb: g,
                                    cc: e,
                                    Rc: d,
                                    bd: c
                                }
                            });
                            c && k && (b.p0a = {
                                range: {
                                    Wb: k,
                                    cc: e,
                                    Rc: h,
                                    bd: c
                                }
                            });
                            d && a && (b.lNa = {
                                range: {
                                    Wb: g,
                                    cc: a,
                                    Rc: d,
                                    bd: f
                                }
                            });
                            a && k && (b.z_a = {
                                range: {
                                    Wb: k,
                                    cc: a,
                                    Rc: h,
                                    bd: f
                                }
                            });
                            return b
                        }
                    }
                    get aa() {
                        return this.props.aa ? this.props.aa : s5(() => 1)
                    }
                    constructor(...a) {
                        super(...a);
                        this.Tja = (u5.A(this), l5(b => {
                            const {
                                sheet: c,
                                hsa: d,
                                aa: e,
                                M8: f = "hidden"
                            } = this.props;
                            return f5(H5, {
                                sheet: c,
                                range: b.range,
                                aa: e,
                                children: f5(NWb, { ...b,
                                    sheet: c,
                                    aa: this.aa,
                                    hsa: d,
                                    overflow: f
                                })
                            })
                        }));
                        this.f_ = (b, c) => new __c.cKa(this.props.tD, this.props.CA, this.props.sheet, b, c, this.aa, this.Ku, this.Nu);
                        this.Ku = (b, c) => {
                            var d, e;
                            return (d = (e = this.props).Ku) === null || d === void 0 ? void 0 : d.call(e, this.props.sheet, b, c)
                        };
                        this.Nu = (b, c) => {
                            var d, e;
                            return (d = (e = this.props).Nu) === null || d === void 0 ? void 0 : d.call(e, this.props.sheet,
                                b, c)
                        }
                    }
                };
                u5 = D5([Jc], u5);
                __c.jKa = {
                    zeb: function(a) {
                        const b = a.Do,
                            c = a.Se,
                            d = a.vd,
                            e = a.Qm,
                            f = a.tD,
                            g = a.CA,
                            h = a.jY;
                        TVb({
                            BA: a.BA,
                            Pf: a.Pf,
                            Yqb: a.NP,
                            zb: a.zb
                        });
                        const k = nWb({
                            RD: h,
                            tD: f,
                            CA: g,
                            Eo: void 0
                        });
                        b.lka = iWb({
                            Iq: k
                        });
                        c.Uja = ZVb({
                            Iq: k
                        });
                        ({
                            b3a: a
                        } = fWb({
                            Iq: k,
                            Af: e(),
                            HXa: new GWb
                        }));
                        d.Qq.kka = a;
                        const {
                            i1a: l,
                            j1a: m,
                            h1a: n
                        } = YVb();
                        return {
                            LEa: l5(p => f5(yWb, { ...p,
                                container: void 0,
                                Iq: k,
                                a3a: l,
                                c3a: m,
                                Z2a: n,
                                $h: zWb
                            }))
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/e27f091e90d68163.js.map