(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [9491], {

        /***/
        22599: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(2868);
            __web_req__(4252);
            __web_req__(97924);
            __web_req__(60628);
            __web_req__(53189);
            self._cdf17aa01cb7a37fe84ed76fc113a158 = self._cdf17aa01cb7a37fe84ed76fc113a158 || {};
            (function(__c) {
                "use strict";
                var vl = __c.vl,
                    sl = __c.sl,
                    v = __c.v,
                    wl = __c.wl,
                    zq = __c.zq,
                    E = __c.E,
                    Ja = __c.Ja,
                    P = __c.P,
                    M = __c.M,
                    C = __c.C,
                    pd = __c.pd,
                    I = __c.I,
                    md = __c.md,
                    Ka = __c.Ka,
                    G = __c.G,
                    A = __c.A,
                    D = __c.D,
                    jd = __c.jd,
                    w = __c.w,
                    id = __c.id;
                var ppa, qpa, rpa, ot, spa, pt, qt, rt, vpa, wpa, st, tpa, tt, upa, wt, vt, ypa, ut, xt, yt, zpa, zt, At, Bt, Apa, xpa, Bpa, Cpa, Dpa, Epa, Ct, Dt, Et, Ft, Gt, It, Ht, Fpa, Jt, Gpa, Jpa, Kpa, Kt, Hpa, Lt, Ipa, Mt, Mpa, Nt, Ot, Pt, Npa, Qt, Rt, St, Opa, Lpa, Ppa, Qpa, Rpa, Spa, Tt, Ut, Vt, Wt, Xt, Zt, Yt, Tpa, Upa;
                ppa = function(a) {
                    var b = __c.Zp;
                    const c = {},
                        d = {};
                    for (const e of a) {
                        const [f, g] = e;
                        b.Or(f) && (d[f] = g, c[f] = vl(b.attributes[f], g))
                    }
                    return {
                        fg: c,
                        Ig: d
                    }
                };
                qpa = function(a) {
                    var b = __c.Zp;
                    const c = new Map;
                    for (const d of Object.entries(a)) {
                        const [e, f] = d;
                        b.Or(e) && c.set(e, f)
                    }
                    return c
                };
                rpa = function(a, b) {
                    var c = __c.bq;
                    const d = {},
                        e = {};
                    if (a)
                        for (const f of Object.entries(a)) {
                            const [g, h] = f;
                            if (null != h)
                                if (c.vv.has(g)) d[g] = vl(c.attributes[g], a[g]), e[g] = a[g];
                                else if (c.o1.has(g))
                                for (const k of a[g]) {
                                    const l = `${g}/${k}`;
                                    d[l] = vl(c.attributes[l], k);
                                    e[l] = k
                                }
                        }
                    if (b)
                        for (const f of Object.entries(b)) {
                            const [g, h] = f;
                            if (null != h)
                                if (c.vv.has(g)) d[g] = void 0, e[g] = void 0;
                                else if (c.o1.has(g))
                                for (const k of b[g]) a = `${g}/${k}`, d[a] = void 0, e[a] = void 0
                        }
                    return {
                        fg: d,
                        Ig: e
                    }
                };
                __c.nt = function(a) {
                    return -1 === a.width && -1 === a.height && 4 === a.units
                };
                ot = function(a) {
                    const b = new Map;
                    return new __c.xf({
                        V: a.cells.map(a.length, Object.assign({}, __c.Jn, {
                            V: (c) => new __c.sf({
                                V: c
                            }),
                            Pb: (c) => new __c.tf({
                                Pb: c
                            })
                        })),
                        attributes: a.attrs.map(a.length, {
                            qL: (c, d) => new __c.vf({
                                attributes: sl(qpa(d), (e, f) => {
                                    const g = b.get(f);
                                    b.set(f, e);
                                    return new __c.uf({
                                        ye: g,
                                        r: e
                                    })
                                })
                            }),
                            Nc: (c) => new __c.wf({
                                length: c
                            })
                        })
                    })
                };
                spa = function(a) {
                    const b = __c.Tq.domain.attrs.Kd();
                    for (const c of a) switch (c.type) {
                        case "CHANGE":
                            a = sl(c.attributes, (f) => f.r);
                            const {
                                fg: d,
                                Ig: e
                            } = ppa(a);
                            b.attrs(d, e);
                            break;
                        case "RETAIN":
                            b.Nc(c.length);
                            break;
                        default:
                            throw new v(c);
                    }
                    return b.ba()
                };
                pt = function(a) {
                    var b = __c.Tq.domain,
                        c = b.Jh;
                    var d = a.V;
                    const e = __c.up.Kd();
                    for (const f of d) switch (f.type) {
                        case "CHARACTERS":
                            e.tb(f.V);
                            break;
                        case "TOMBSTONES":
                            e.zv(f.Pb);
                            break;
                        default:
                            throw new v(f);
                    }
                    d = e.ba();
                    return c.call(b, d, spa(a.attributes))
                };
                qt = function(a) {
                    let b = 0,
                        c = 0;
                    const d = a.filter(() => !0),
                        e = [];
                    a.forEach((f, g) => {
                        if (f = g - c) b && (e.push(b), b = 0), e.push(-f);
                        b++;
                        c = g + 1
                    });
                    return [d, e]
                };
                rt = function(a, b) {
                    const c = [];
                    let d = 0;
                    for (const e of b) 0 > e ? d += -e : 0 < e && (a.slice(0, e).forEach((f) => c[d++] = f), a = a.slice(e));
                    a.length && a.forEach((e) => c[d++] = e);
                    return c
                };
                vpa = function(a, b) {
                    const c = b.doctype,
                        d = b.F,
                        [e, f] = qt(b.cB),
                        g = b.language,
                        h = b.title,
                        k = b.description,
                        l = b.Da,
                        m = b.Oi,
                        n = b.Ty,
                        q = b.audio,
                        r = b.va,
                        x = b.X,
                        [y, z] = qt(b.Ha);
                    return new __c.gh({
                        doctype: c,
                        F: d,
                        cB: e.map((B) => new __c.Oe(B)),
                        iha: f,
                        language: g,
                        title: h,
                        description: k,
                        Da: l,
                        Ty: n,
                        Oi: st(m),
                        audio: q.Dv.length ? tpa(q) : void 0,
                        va: r && tt(r),
                        X: x && tt(x),
                        Ha: y.map((B) => upa(a, B)),
                        Uka: z
                    })
                };
                wpa = function(a, b) {
                    const c = b.Tn;
                    return new __c.gh({
                        doctype: b.doctype,
                        F: b.F,
                        language: b.language,
                        title: b.title,
                        Oi: st(b.Oi),
                        Tn: c.map((d) => a.serializeBody(d))
                    })
                };
                st = function(a) {
                    return sl(a, (b) => new __c.Pe(b))
                };
                tpa = function(a) {
                    const [b, c] = qt(a.Dv);
                    return new __c.Ue({
                        Dv: b.map((d) => new __c.Te(Object.assign({}, d, {
                            trim: d.trim && new __c.Qe(d.trim),
                            Wt: d.Wt && new __c.Se(d.Wt),
                            Xt: d.Xt && new __c.Se(d.Xt)
                        }))),
                        ioa: c
                    })
                };
                tt = function(a) {
                    switch (a.type) {
                        case "CHOP":
                            return new __c.bf(a);
                        case "COLOR_WIPE":
                            return new __c.cf(a);
                        case "CROSS_DISSOLVE":
                            return new __c.We(a);
                        case "FLOW":
                            return new __c.df(a);
                        case "MATCH":
                            return new __c.$e(a);
                        case "SLIDE":
                            return new __c.Xe(a);
                        case "STACK":
                            return new __c.af(a);
                        case "WIPE_CIRCLE":
                            return new __c.Ye(a);
                        case "WIPE_LINE":
                            return new __c.Ze(a);
                        default:
                            throw new v(a);
                    }
                };
                upa = function(a, b) {
                    const c = b.type,
                        d = b.title,
                        e = b.un,
                        f = b.Hg,
                        g = b.locked,
                        h = b.Kn,
                        k = b.Tg,
                        l = b.animation,
                        m = b.zg,
                        n = b.Y,
                        q = b.aj,
                        r = b.anchor,
                        x = b.Mj,
                        y = b.F,
                        z = b.template,
                        B = b.transition,
                        [F, J] = qt(b.elements);
                    return new __c.fh({
                        type: c,
                        title: d,
                        un: e,
                        Hg: f,
                        locked: g,
                        Kn: h && new __c.Bg(h),
                        Tg: k,
                        animation: l,
                        zg: m && new __c.Cg(m),
                        Y: n,
                        aj: q,
                        anchor: r,
                        Mj: x,
                        F: y,
                        template: z,
                        EE: sl(b.EE, (N) => new __c.Dg(N)),
                        transition: B && tt(B),
                        background: ut(b.background),
                        elements: F.map((N) => xpa(a, N)),
                        yfa: J
                    })
                };
                wt = function(a, b) {
                    const c = [];
                    b.forEach({
                        V: (d, e) => {
                            d = new __c.hf({
                                state: d
                            });
                            c.push(vt(d, e))
                        },
                        item: (d, e) => {
                            d = new __c.ug({
                                state: ypa(a, d)
                            });
                            c.push(vt(d, e))
                        },
                        Pb: (d, e) => {
                            d = new __c.vg({
                                state: d
                            });
                            c.push(vt(d, e))
                        }
                    });
                    b = b.Aa && sl(b.Aa.qc, (d) => {
                        const e = d.from;
                        d = d.to;
                        return new __c.zg({
                            from: e,
                            to: d === e ? void 0 : d
                        })
                    });
                    return new __c.Af({
                        Rda: c,
                        Aa: b
                    })
                };
                vt = function(a, b) {
                    var c = __c.bq;
                    const d = {},
                        e = {};
                    var f = {};
                    const g = {};
                    for (const l of Object.entries(b)) {
                        const [m, n] = l;
                        if (c.vv.has(m)) null != n ? d[m] = wl(c.attributes[m], n) : f[m] = !0;
                        else if (c.JT(m)) {
                            const [q, r] = m.split("/");
                            null != n ? (e[q] || (e[q] = []), e[q].push(n)) : (g[q] || (g[q] = []), g[q].push(r))
                        }
                    }
                    b = 0 !== Object.keys(d).length || 0 !== Object.keys(e).length ? Object.assign({}, d, e) : void 0;
                    f = 0 !== Object.keys(f).length || 0 !== Object.keys(g).length ? Object.assign({}, f, g) : void 0;
                    const {
                        set: h,
                        CD: k
                    } = {
                        set: b,
                        CD: f
                    };
                    return new __c.yg({
                        $b: a,
                        Ry: h && new __c.wg(h),
                        xoa: k && new __c.xg(k)
                    })
                };
                ypa = function(a, b) {
                    switch (b.type) {
                        case "rect":
                            return new __c.rf({
                                width: b.width,
                                fill: ut(b.fill)
                            });
                        case "table":
                            return new __c.Nf({
                                width: b.width,
                                cells: sl(b.cells, (c) => xt(a, c)),
                                N: yt(a, b.N)
                            });
                        case "separator":
                            return new __c.Of({
                                width: b.width
                            });
                        case "embed":
                            return new __c.Pf({
                                width: b.width,
                                url: b.url,
                                ra: b.ra,
                                Ca: b.Ca
                            });
                        case "chart":
                            return zpa(b);
                        default:
                            throw new v(b);
                    }
                };
                ut = function(a) {
                    const b = a.image,
                        c = a.video;
                    return new __c.qf({
                        wl: a.wl,
                        Pa: a.Pa,
                        locked: a.locked,
                        Tg: a.Tg,
                        hl: a.hl,
                        flipX: a.flipX,
                        flipY: a.flipY,
                        color: a.color,
                        image: b && new __c.nf({
                            media: b.media,
                            wG: b.wG,
                            ZE: b.ZE,
                            Pa: b.Pa,
                            Rd: b.Rd,
                            filter: b.filter,
                            Ec: b.Ec
                        }),
                        video: c && new __c.pf(c)
                    })
                };
                xt = function(a, b) {
                    const c = b.Cp,
                        d = b.borderColor,
                        e = b.Un,
                        f = b.Dd,
                        g = !e.Ob && !e.Nb && !e.Ub && !e.Sb;
                    var h = b.fill;
                    a: switch (b = b.content, b.type) {
                        case "TEXT":
                            a = new __c.zf({
                                text: ot(b.text),
                                Cd: new __c.yf(b.Cd)
                            });
                            break a;
                        case "TEXT3":
                            a = new __c.Bf({
                                text: wt(a, b.text)
                            });
                            break a;
                        default:
                            throw new v(b);
                    }
                    return new __c.If({
                        fill: h,
                        content: a,
                        Cp: c,
                        borderColor: d,
                        Un: g ? void 0 : e,
                        Dd: f
                    })
                };
                yt = function(a, b) {
                    const c = b.direction,
                        d = b.Xe,
                        e = b.cellPadding,
                        f = b.borderStyle,
                        [g, h] = qt(b.rows),
                        [k, l] = qt(b.columns);
                    return new __c.Mf({
                        direction: c,
                        rows: g.map(a.nIa),
                        Bma: h,
                        columns: k.map(a.mIa),
                        $da: l,
                        Xe: d,
                        cellPadding: e,
                        borderStyle: new __c.Lf(f)
                    })
                };
                zpa = function(a) {
                    const b = a.width,
                        c = a.config,
                        d = a.ql,
                        e = a.Lg,
                        f = a.ek,
                        g = a.Ek,
                        h = a.tq,
                        k = a.lm,
                        l = a.bd,
                        [m, n] = qt(a.data);
                    return new __c.tg({
                        width: b,
                        config: zt(c),
                        ql: d && At(d),
                        data: m.map((q) => Bt(q)),
                        gK: n,
                        Lg: e,
                        ek: f,
                        Ek: g,
                        tq: h,
                        lm: k,
                        bd: Apa(l)
                    })
                };
                zt = function(a) {
                    switch (a.type) {
                        case "GROUPED_COLUMN":
                            return new __c.Qf(a);
                        case "STACKED_COLUMN":
                            return new __c.Rf(a);
                        case "GROUPED_ROW":
                            return new __c.Sf(a);
                        case "STACKED_ROW":
                            return new __c.Tf(a);
                        case "PIE":
                            return new __c.Uf(a);
                        case "DONUT":
                            return new __c.Vf(a);
                        case "LINE":
                            return new __c.Xf(a);
                        case "STACKED_AREA":
                            return new __c.Yf(a);
                        case "SCATTERPLOT":
                            return new __c.Zf(a);
                        case "PACKED_CIRCLES":
                            return new __c.$f(a);
                        case "TREEMAP":
                            return new __c.ag(a);
                        case "HISTOGRAM":
                            return new __c.bg(a);
                        case "RADAR":
                            return new __c.cg(a);
                        case "POPULATION_PYRAMID":
                            return new __c.dg(a);
                        case "FUNNEL":
                            return new __c.eg(a);
                        case "DUMBBELL":
                            return new __c.fg(a);
                        case "LOLLIPOP":
                            return new __c.gg(a);
                        case "SUNBURST":
                            return new __c.hg(a);
                        case "TIME_SERIES":
                            return new __c.jg(a);
                        case "PROGRESS":
                            return new __c.kg(a);
                        case "PICTOGRAM":
                            return new __c.lg(a);
                        default:
                            throw new v(a);
                    }
                };
                At = function(a) {
                    switch (a.type) {
                        case "GOOGLE_SHEETS":
                            return new __c.ng({
                                url: a.url,
                                Il: a.Il,
                                range: a.range
                            });
                        default:
                            throw new v(a.type);
                    }
                };
                Bt = function(a) {
                    const [b, c] = qt(a.values);
                    var d = a.id;
                    a: {
                        var e = a.Cg;
                        switch (e.type) {
                            case "PALETTE":
                                var f = new __c.pg(e);
                                break a;
                            case "INTERPOLATE":
                                f = e.from;
                                var g = e.to;
                                b: switch (e = e.colorSpace, e) {
                                    case 1:
                                        e = 1;
                                        break b;
                                    case 2:
                                        e = 2;
                                        break b;
                                    default:
                                        throw new v(e);
                                }
                                f = new __c.qg({
                                    from: f,
                                    to: g,
                                    colorSpace: e
                                });
                                break a;
                            default:
                                throw new v(e);
                        }
                    }
                    return new __c.rg({
                        id: d,
                        values: b,
                        Hoa: c,
                        Cg: f,
                        label: a.label,
                        Yw: a.Yw
                    })
                };
                Apa = function(a) {
                    if (!Object.values(a).every((b) => null == b)) return new __c.sg({
                        fontFamily: wl(zq.fontFamily, a.fontFamily),
                        fontSize: wl(zq.fontSize, a.fontSize),
                        fontWeight: wl(zq.fontWeight, a.fontWeight),
                        fontStyle: wl(zq.fontStyle, a.fontStyle),
                        color: wl(zq.color, a.color),
                        Lm: wl(zq.Lm, a.Lm)
                    })
                };
                xpa = function(a, b) {
                    switch (b.type) {
                        case "group":
                            return Bpa(a, b);
                        case "chart":
                            return Cpa(a, b);
                        case "grid":
                            return Dpa(b);
                        case "table":
                            return Epa(a, b);
                        case "line":
                            return Ct(b);
                        case "rect":
                            return Dt(b);
                        case "shape":
                            return Et(b);
                        case "text":
                            return Ft(b);
                        case "embed":
                            return Gt(b);
                        default:
                            throw new v(b);
                    }
                };
                Bpa = function(a, b) {
                    a = b.ra;
                    const c = b.Ca,
                        d = b.Nz,
                        [e, f] = qt(b.$b);
                    return new __c.Kg(Object.assign({}, Ht(b), {
                        ra: a,
                        Ca: c,
                        Nz: d && new __c.Ig(d),
                        $b: e.map((g) => It(g)),
                        QJ: f
                    }))
                };
                Cpa = function(a, b) {
                    a = b.bd;
                    const c = b.ra,
                        d = b.Ca,
                        e = b.Ta,
                        f = b.Lg,
                        g = b.ek,
                        h = b.Ek,
                        k = b.tq,
                        l = b.lm,
                        [m, n] = qt(b.$b),
                        [q, r] = qt(b.data),
                        [x, y] = qt(b.labels);
                    return new __c.Lg(Object.assign({}, Ht(b), {
                        labels: x,
                        Cia: y,
                        bd: a,
                        ra: c,
                        Ca: d,
                        Ta: e,
                        Lg: f,
                        ek: g,
                        Ek: h,
                        tq: k,
                        lm: l,
                        data: q.map((z) => Bt(z)),
                        gK: r,
                        config: zt(b.config),
                        ql: b.ql && At(b.ql),
                        $b: m.map((z) => It(z)),
                        QJ: n
                    }))
                };
                Dpa = function(a) {
                    const b = a.cells,
                        c = a.N;
                    return new __c.Pg(Object.assign({}, Ht(a), {
                        cells: sl(b, (d) => new __c.Mg({
                            fill: ut(d.fill)
                        })),
                        N: Fpa(c)
                    }))
                };
                Epa = function(a, b) {
                    const c = b.cells,
                        d = b.N,
                        e = b.Ca,
                        f = b.ra;
                    return new __c.Qg(Object.assign({}, Ht(b), {
                        Ca: e,
                        ra: f,
                        cells: sl(c, (g) => xt(a, g)),
                        N: yt(a, d)
                    }))
                };
                Ct = function(a) {
                    const b = a.weight,
                        c = a.start,
                        d = a.end,
                        e = a.color,
                        f = a.Re,
                        g = a.oo;
                    return new __c.Sg(Object.assign({}, Ht(a), {
                        weight: b,
                        start: Jt(c),
                        end: Jt(d),
                        color: e,
                        Re: f,
                        oo: g
                    }))
                };
                Dt = function(a) {
                    const b = a.fill;
                    return new __c.Tg(Object.assign({}, Ht(a), {
                        fill: ut(b)
                    }))
                };
                Et = function(a) {
                    const b = a.viewBox,
                        c = a.slice,
                        d = a.FA,
                        e = a.resizeMode,
                        [f, g] = qt(a.Va),
                        [h, k] = qt(a.Ni);
                    return new __c.$g(Object.assign({}, Ht(a), {
                        viewBox: b,
                        slice: c,
                        Va: f.map((l) => {
                            const m = l.stroke,
                                n = l.Gb;
                            return new __c.Xg({
                                d: l.d,
                                fill: ut(l.fill),
                                stroke: m,
                                Gb: n
                            })
                        }),
                        Yka: g,
                        FA: d,
                        Ni: h.map((l) => {
                            const m = l.Cd;
                            return new __c.Zg({
                                Dd: l.Dd,
                                box: l.box,
                                Vz: l.Vz,
                                text: ot(l.text),
                                Cd: new __c.yf(m)
                            })
                        }),
                        Sna: k,
                        Tna: e
                    }))
                };
                Ft = function(a) {
                    const b = a.text,
                        c = a.Cd,
                        d = a.Xa,
                        e = a.placeholder,
                        f = a.Am,
                        g = a.writingMode,
                        h = a.ra,
                        k = a.Ca,
                        l = a.AE,
                        m = a.CC;
                    return new __c.dh(Object.assign({}, Ht(a), {
                        Am: f,
                        writingMode: g,
                        ra: h,
                        Ca: k,
                        AE: l,
                        CC: m,
                        placeholder: e && new __c.ch(e),
                        text: ot(b),
                        Cd: new __c.yf(c),
                        Xa: d && Gpa(d)
                    }))
                };
                Gt = function(a) {
                    const b = a.url,
                        c = a.ra,
                        d = a.Ca;
                    return new __c.eh(Object.assign({}, Ht(a), {
                        url: b,
                        ra: c,
                        Ca: d
                    }))
                };
                It = function(a) {
                    switch (a.type) {
                        case "line":
                            return Ct(a);
                        case "rect":
                            return Dt(a);
                        case "shape":
                            return Et(a);
                        case "text":
                            return Ft(a);
                        case "embed":
                            return Gt(a);
                        default:
                            throw new v(a);
                    }
                };
                Ht = function(a) {
                    var b = a.Kn;
                    const c = a.animation;
                    var d = a.anchor,
                        e = a.Mj,
                        f = a.top,
                        g = a.left,
                        h = a.width,
                        k = a.height,
                        l = a.rotation,
                        m = a.Pa,
                        n = a.jb,
                        q = a.Y,
                        r = a.link,
                        x = a.locked,
                        y = a.Tg,
                        z = a.hl,
                        B = a.jE,
                        F = a.aj;
                    a = a.tH;
                    b = b && new __c.Bg(b);
                    var J;
                    if (J = c) a: switch (c.type) {
                        case "NONE":
                            J = new __c.Eg;
                            break a;
                        case "SEQUENCED":
                            J = c.zg;
                            J = new __c.Fg({
                                animation: c.animation,
                                zg: J && new __c.Cg(J)
                            });
                            break a;
                        case "INDEPENDENT":
                            J = c.zg;
                            J = new __c.Gg({
                                animation: c.animation,
                                zg: J && new __c.Cg(J)
                            });
                            break a;
                        default:
                            throw new v(c);
                    }
                    return {
                        anchor: d,
                        Mj: e,
                        top: f,
                        left: g,
                        width: h,
                        height: k,
                        rotation: l,
                        Pa: m,
                        jb: n,
                        Y: q,
                        link: r,
                        locked: x,
                        Tg: y,
                        hl: z,
                        jE: B,
                        aj: F,
                        tH: a,
                        Kn: b,
                        animation: J
                    }
                };
                Fpa = function(a) {
                    const b = a.template,
                        c = a.Qs;
                    return new __c.Og({
                        Yq: a.Yq,
                        Rs: a.Rs,
                        Zq: a.Zq.map((d) => d || ""),
                        Qs: c.map((d) => d || ""),
                        template: b.map((d) => new __c.Ng({
                            $i: d
                        }))
                    })
                };
                Jt = function(a) {
                    return new __c.Rg({
                        anchor: a.anchor,
                        marker: a.marker,
                        position: a.position
                    })
                };
                Gpa = function(a) {
                    const [b, c] = qt(a.Xa);
                    return new __c.bh({
                        Xa: b.map((d) => new __c.ah({
                            type: d.type,
                            parameters: d.parameters
                        })),
                        ufa: c
                    })
                };
                Jpa = function(a, b) {
                    const c = b.language,
                        d = b.title,
                        e = b.description,
                        f = b.Da,
                        g = b.Oi,
                        h = b.Ty,
                        k = b.audio,
                        l = b.va,
                        m = b.X,
                        n = b.Ha,
                        q = b.Uka;
                    return {
                        Je: "fixed",
                        doctype: b.doctype,
                        F: b.F,
                        cB: rt(b.cB, b.iha).map((r) => r),
                        language: c,
                        title: d,
                        description: e,
                        Da: f,
                        Ty: h,
                        Oi: Kt(g),
                        audio: k ? Hpa(k) : Object.assign({}, __c.Mr),
                        va: l && Lt(l),
                        X: m && Lt(m),
                        Ha: rt(n, q).map((r) => Ipa(a, r))
                    }
                };
                Kpa = function(a, b) {
                    const c = b.Tn,
                        d = b.$sa;
                    return {
                        Je: "responsive",
                        doctype: b.doctype,
                        F: b.F,
                        language: b.language,
                        title: b.title,
                        Oi: Kt(b.Oi),
                        Tn: rt(c, d).map((e) => ({
                            text: Mt(a, e.text)
                        }))
                    }
                };
                Kt = function(a) {
                    return sl(a, (b) => b)
                };
                Hpa = function(a) {
                    return {
                        Dv: rt(a.Dv, a.ioa).map((b) => b)
                    }
                };
                Lt = function(a) {
                    const b = a.Y;
                    if (!a.type) return {
                        type: "WIPE_LINE",
                        direction: 2,
                        Y: b
                    };
                    switch (a.type) {
                        case "CHOP":
                            return {
                                type: "CHOP",
                                Y: b,
                                origin: a.origin,
                                direction: a.direction
                            };
                        case "COLOR_WIPE":
                            return {
                                type: "COLOR_WIPE",
                                Y: b,
                                Fe: a.Fe,
                                direction: a.direction
                            };
                        case "CROSS_DISSOLVE":
                            return {
                                type: "CROSS_DISSOLVE",
                                Y: b
                            };
                        case "FLOW":
                            return {
                                type: "FLOW",
                                Y: b,
                                direction: a.direction
                            };
                        case "MATCH":
                            return {
                                type: "MATCH",
                                Y: b
                            };
                        case "SLIDE":
                            return {
                                type: "SLIDE",
                                Y: b,
                                direction: a.direction
                            };
                        case "STACK":
                            return {
                                type: "STACK",
                                Y: b,
                                direction: a.direction
                            };
                        case "WIPE_LINE":
                            return {
                                type: "WIPE_LINE",
                                Y: b,
                                direction: a.direction
                            };
                        case "WIPE_CIRCLE":
                            return {
                                type: "WIPE_CIRCLE",
                                Y: b,
                                direction: a.direction
                            };
                        case "RESERVED_36":
                        case "RESERVED_37":
                        case "RESERVED_38":
                        case "RESERVED_39":
                        case "RESERVED_40":
                        case "RESERVED_41":
                        case "RESERVED_42":
                        case "RESERVED_43":
                        case "RESERVED_44":
                        case "RESERVED_45":
                        case "RESERVED_46":
                            throw Error(`unsupported transition type: ${a.type}`);
                        default:
                            throw new v(a);
                    }
                };
                Ipa = function(a, b) {
                    const c = b.Kn,
                        d = b.zg,
                        e = b.transition;
                    return {
                        type: b.type,
                        title: b.title,
                        un: b.un,
                        Hg: b.Hg,
                        locked: b.locked,
                        Kn: c && c,
                        Tg: b.Tg,
                        animation: b.animation,
                        zg: d && d,
                        Y: b.Y,
                        aj: b.aj,
                        anchor: b.anchor,
                        Mj: b.Mj,
                        F: b.F,
                        template: b.template,
                        EE: sl(b.EE, (f) => f),
                        transition: e && Lt(e),
                        background: Nt(b.background),
                        elements: rt(b.elements, b.yfa).map((f) => Lpa(a, f))
                    }
                };
                Mt = function(a, b) {
                    const c = __c.xr.domain.Kd();
                    for (const d of b.Rda) {
                        const {
                            fg: e,
                            Ig: f
                        } = rpa(d.Ry, d.xoa);
                        c.attrs(e, f);
                        const g = d.$b;
                        switch (g.type) {
                            case "CHARACTER":
                                c.tb(g.state);
                                break;
                            case "ITEM":
                                c.item(Mpa(a, g.state));
                                break;
                            case "TOMBSTONE":
                                c.zv(g.state);
                                break;
                            default:
                                throw new v(g);
                        }
                    }
                    c.NC(sl(b.Aa, (d) => {
                        const e = d.from;
                        d = d.to;
                        return {
                            from: e,
                            to: null !== d && void 0 !== d ? d : e
                        }
                    }));
                    return c.ba()
                };
                Mpa = function(a, b) {
                    switch (b.type) {
                        case "RECT":
                            return {
                                type: "rect",
                                width: b.width,
                                fill: Nt(b.fill)
                            };
                        case "TABLE":
                            return {
                                type: "table",
                                width: b.width,
                                cells: sl(b.cells, (c) => Ot(a, c)),
                                N: Pt(a, b.N)
                            };
                        case "SEPARATOR":
                            return {
                                type: "separator",
                                width: b.width
                            };
                        case "EMBED":
                            return {
                                type: "embed",
                                width: b.width,
                                Ca: b.Ca,
                                ra: b.ra,
                                url: b.url
                            };
                        case "CHART":
                            return Npa(b);
                        default:
                            throw new v(b);
                    }
                };
                Nt = function(a) {
                    const b = a.image,
                        c = a.video;
                    return {
                        wl: a.wl,
                        Pa: a.Pa,
                        locked: a.locked,
                        Tg: a.Tg,
                        hl: a.hl,
                        flipX: a.flipX,
                        flipY: a.flipY,
                        color: a.color,
                        image: b && {
                            media: b.media,
                            wG: b.wG,
                            ZE: b.ZE,
                            Pa: b.Pa,
                            Rd: b.Rd,
                            filter: b.filter,
                            Ec: b.Ec
                        },
                        video: c && c
                    }
                };
                Ot = function(a, b) {
                    const c = b.Cp,
                        d = b.borderColor,
                        e = b.Un,
                        f = b.Dd;
                    var g = Nt(b.fill);
                    a: switch (b = b.content, b.type) {
                        case "TEXT":
                            a = {
                                type: "TEXT",
                                text: pt(b.text),
                                Cd: b.Cd
                            };
                            break a;
                        case "TEXT3":
                            a = {
                                type: "TEXT3",
                                text: Mt(a, b.text)
                            };
                            break a;
                        default:
                            throw new v(b);
                    }
                    return {
                        fill: g,
                        content: a,
                        Cp: c,
                        borderColor: d,
                        Un: e ? e : Object.assign({}, __c.Xna.Un),
                        Dd: f
                    }
                };
                Pt = function(a, b) {
                    const c = b.columns,
                        d = b.$da,
                        e = b.Xe,
                        f = b.cellPadding,
                        g = b.borderStyle;
                    return {
                        direction: b.direction,
                        rows: rt(b.rows, b.Bma).map(a.tva),
                        columns: rt(c, d).map(a.sva),
                        Xe: e,
                        cellPadding: f,
                        borderStyle: g
                    }
                };
                Npa = function(a) {
                    const b = a.Lg,
                        c = a.ek,
                        d = a.Ek,
                        e = a.tq,
                        f = a.lm,
                        g = a.bd;
                    return {
                        type: "chart",
                        width: a.width,
                        config: Qt(a.config),
                        ql: a.ql && Rt(a.ql),
                        data: rt(a.data, a.gK).map((h) => St(h)),
                        Lg: b,
                        ek: c,
                        Ek: d,
                        tq: e,
                        lm: f,
                        bd: Opa(g)
                    }
                };
                Qt = function(a) {
                    switch (a.type) {
                        case "RESERVED_22":
                        case "RESERVED_23":
                        case "RESERVED_24":
                        case "RESERVED_25":
                        case "RESERVED_26":
                            throw Error(`unsupported chart type: ${a.type}`);
                        default:
                            return a;
                    }
                };
                Rt = function(a) {
                    switch (a.type) {
                        case "GOOGLE_SHEETS":
                            return a;
                        default:
                            throw new v(a.type);
                    }
                };
                St = function(a) {
                    var b = a.id,
                        c = rt(a.values, a.Hoa);
                    a: {
                        var d = a.Cg;
                        switch (d.type) {
                            case "PALETTE":
                                var e = {
                                    type: "PALETTE",
                                    Fe: d.Fe
                                };
                                break a;
                            case "INTERPOLATE":
                                e = d.from;
                                var f = d.to;
                                b: switch (d = d.colorSpace, d) {
                                    case 1:
                                        d = 1;
                                        break b;
                                    case 2:
                                        d = 2;
                                        break b;
                                    default:
                                        throw new v(d);
                                }
                                e = {
                                    type: "INTERPOLATE",
                                    from: e,
                                    to: f,
                                    colorSpace: d
                                };
                                break a;
                            default:
                                throw new v(d);
                        }
                    }
                    return {
                        id: b,
                        values: c,
                        Cg: e,
                        label: a.label,
                        Yw: a.Yw
                    }
                };
                Opa = function(a) {
                    return a ? {
                        fontFamily: vl(zq.fontFamily, a.fontFamily),
                        fontSize: vl(zq.fontSize, a.fontSize),
                        fontWeight: vl(zq.fontWeight, a.fontWeight),
                        fontStyle: vl(zq.fontStyle, a.fontStyle),
                        color: vl(zq.color, a.color),
                        Lm: vl(zq.Lm, a.Lm)
                    } : __c.tl(__c.Or, () => {})
                };
                Lpa = function(a, b) {
                    switch (b.type) {
                        case "GROUP":
                            return Ppa(a, b);
                        case "CHART":
                            return Qpa(a, b);
                        case "GRID":
                            return Rpa(b);
                        case "TABLE":
                            return Spa(a, b);
                        case "LINE":
                            return Tt(b);
                        case "RECT":
                            return Ut(b);
                        case "SHAPE":
                            return Vt(b);
                        case "TEXT":
                            return Wt(b);
                        case "EMBED":
                            return Xt(b);
                        default:
                            throw new v(b);
                    }
                };
                Ppa = function(a, b) {
                    a = b.ra;
                    const c = b.Ca,
                        d = b.Nz,
                        e = b.$b,
                        f = b.QJ;
                    return Object.assign({}, {
                        type: "group"
                    }, Yt(b), {
                        ra: a,
                        Ca: c,
                        Nz: d && d,
                        $b: rt(e, f).map((g) => Zt(g))
                    })
                };
                Qpa = function(a, b) {
                    a = b.bd;
                    const c = b.ra,
                        d = b.Ca,
                        e = b.Ta,
                        f = b.Lg,
                        g = b.ek,
                        h = b.Ek,
                        k = b.tq,
                        l = b.lm;
                    return Object.assign({}, {
                        type: "chart"
                    }, Yt(b), {
                        labels: rt(b.labels, b.Cia),
                        bd: a,
                        ra: c,
                        Ca: d,
                        Ta: e,
                        Lg: f,
                        ek: g,
                        Ek: h,
                        tq: k,
                        lm: l,
                        ql: b.ql && Rt(b.ql),
                        data: rt(b.data, b.gK).map((m) => St(m)),
                        config: Qt(b.config),
                        $b: rt(b.$b, b.QJ).map((m) => Zt(m))
                    })
                };
                Rpa = function(a) {
                    const b = a.cells,
                        c = a.N;
                    return Object.assign({}, {
                        type: "grid"
                    }, Yt(a), {
                        cells: sl(b, (d) => ({
                            fill: Nt(d.fill)
                        })),
                        N: Tpa(c)
                    })
                };
                Spa = function(a, b) {
                    const c = b.cells,
                        d = b.N,
                        e = b.Ca,
                        f = b.ra;
                    return Object.assign({}, {
                        type: "table"
                    }, Yt(b), {
                        cells: sl(c, (g) => Ot(a, g)),
                        N: Pt(a, d),
                        Ca: e,
                        ra: f
                    })
                };
                Tt = function(a) {
                    const b = a.weight,
                        c = a.start,
                        d = a.end,
                        e = a.color,
                        f = a.Re,
                        g = a.oo;
                    return Object.assign({}, {
                        type: "line"
                    }, Yt(a), {
                        weight: b,
                        start: {
                            anchor: c.anchor,
                            marker: c.marker,
                            position: c.position
                        },
                        end: {
                            anchor: d.anchor,
                            marker: d.marker,
                            position: d.position
                        },
                        color: e,
                        Re: f,
                        oo: g,
                        Kg: void 0
                    })
                };
                Ut = function(a) {
                    return Object.assign({}, {
                        type: "rect"
                    }, Yt(a), {
                        fill: Nt(a.fill)
                    })
                };
                Vt = function(a) {
                    const b = a.viewBox,
                        c = a.Va,
                        d = a.Yka,
                        e = a.slice,
                        f = a.FA,
                        g = a.Ni,
                        h = a.Sna,
                        k = a.Tna;
                    return Object.assign({}, {
                        type: "shape"
                    }, Yt(a), {
                        viewBox: b,
                        slice: e,
                        FA: f,
                        Va: rt(c, d).map((l) => {
                            const m = l.stroke;
                            return {
                                d: l.d,
                                fill: Nt(l.fill),
                                Gb: l.Gb,
                                stroke: m && m
                            }
                        }),
                        Ni: rt(g, h).map((l) => {
                            const m = l.Cd;
                            return {
                                Dd: l.Dd,
                                box: l.box,
                                Vz: l.Vz,
                                text: pt(l.text),
                                Cd: m
                            }
                        }),
                        resizeMode: k
                    })
                };
                Wt = function(a) {
                    const b = a.text,
                        c = a.Cd,
                        d = a.Xa,
                        e = a.placeholder,
                        f = a.Am,
                        g = a.writingMode,
                        h = a.ra,
                        k = a.Ca,
                        l = a.AE,
                        m = a.CC;
                    return Object.assign({}, {
                        type: "text"
                    }, Yt(a), {
                        placeholder: e,
                        Am: f,
                        writingMode: g,
                        ra: h,
                        Ca: k,
                        AE: l,
                        CC: m,
                        text: pt(b),
                        Cd: c,
                        Xa: d && Upa(d)
                    })
                };
                Xt = function(a) {
                    const b = a.url,
                        c = a.ra,
                        d = a.Ca;
                    return Object.assign({}, {
                        type: "embed"
                    }, Yt(a), {
                        url: b,
                        ra: c,
                        Ca: d
                    })
                };
                Zt = function(a) {
                    switch (a.type) {
                        case "LINE":
                            return Tt(a);
                        case "RECT":
                            return Ut(a);
                        case "SHAPE":
                            return Vt(a);
                        case "TEXT":
                            return Wt(a);
                        case "EMBED":
                            return Xt(a);
                        case "GROUP":
                        case "CHART":
                        case "GRID":
                        case "TABLE":
                            throw Error(`invalid simple element type: ${a.type}`);
                        default:
                            throw new v(a);
                    }
                };
                Yt = function(a) {
                    var b = a.Kn;
                    const c = a.animation;
                    var d = a.anchor,
                        e = a.Mj,
                        f = a.top,
                        g = a.left,
                        h = a.width,
                        k = a.height,
                        l = a.rotation,
                        m = a.Pa,
                        n = a.jb,
                        q = a.Y,
                        r = a.link,
                        x = a.locked,
                        y = a.Tg,
                        z = a.hl,
                        B = a.jE,
                        F = a.aj;
                    a = a.tH;
                    b = b && b;
                    var J;
                    if (J = c) a: switch (c.type) {
                        case "NONE":
                            J = {
                                type: "NONE"
                            };
                            break a;
                        case "SEQUENCED":
                            J = c.zg;
                            J = {
                                type: "SEQUENCED",
                                animation: c.animation,
                                zg: J && J
                            };
                            break a;
                        case "INDEPENDENT":
                            J = c.zg;
                            J = {
                                type: "INDEPENDENT",
                                animation: c.animation,
                                zg: J && J
                            };
                            break a;
                        default:
                            throw new v(c);
                    }
                    return {
                        anchor: d,
                        Mj: e,
                        top: f,
                        left: g,
                        width: h,
                        height: k,
                        rotation: l,
                        Pa: m,
                        jb: n,
                        Y: q,
                        link: r,
                        locked: x,
                        Tg: y,
                        hl: z,
                        jE: B,
                        aj: F,
                        tH: a,
                        Kn: b,
                        animation: J
                    }
                };
                Tpa = function(a) {
                    const b = a.template,
                        c = a.Qs;
                    return {
                        Yq: a.Yq,
                        Rs: a.Rs,
                        Zq: a.Zq.map((d) => d || void 0),
                        Qs: c.map((d) => d || void 0),
                        template: b.map((d) => d.$i)
                    }
                };
                Upa = function(a) {
                    return {
                        Xa: rt(a.Xa, a.ufa).map((b) => ({
                            type: b.type,
                            parameters: b.parameters
                        }))
                    }
                };
                __c.Sp.prototype.NC = __c.ol(31, function(a) {
                    var b;
                    null === (b = this.NN) || void 0 === b ? void 0 : b.qc(a);
                    return this
                });
                __c.Up.prototype.NC = __c.ol(30, function(a) {
                    var b;
                    null === (b = this.NN) || void 0 === b ? void 0 : b.qc(a);
                    return this
                });
                __c.$t = __webpack_require__(27661).Om;
                __c.Vpa = E(() => ({
                    rg: Ja("schema", 1, __c.tj, 7),
                    openSession: P("openSession", 2),
                    ib: M("analyticsCorrelationId", 6),
                    body: C("body", 3, __c.gh),
                    jma: pd("resourceOrigins", 7),
                    template: I("template", 4, "\"-\""),
                    duplicate: I("duplicate", 5, "\"-\""),
                    type: M("type", 8),
                    F: M("dimensions", 9)
                }));
                __c.au = E(() => ({
                    title: M("title", 1),
                    zPa: (0, __c.wd)("colorReplacements", 2)
                }));
                E(() => ({
                    duplicate: M("duplicate", 1),
                    extension: M("extension", 9),
                    template: M("template", 2),
                    media: M("media", 6),
                    Bn: md("revision", 7),
                    rg: Ka("schema", 3, __c.tj),
                    body: C("body", 4, __c.au),
                    openSession: P("openSession", 5),
                    ib: M("analyticsCorrelationId", 8)
                }));
                __c.bu = E(() => ({
                    id: I("id", 1),
                    extension: M("extension", 8),
                    Pc: md("session", 2),
                    Bn: md("revision", 3),
                    bxa: __c.Q("excludePages", 4),
                    AL: __c.Q("includePages", 5),
                    Rfa: __c.Q("excludeDraftPages", 12),
                    qAa: P("includeResources", 11),
                    rja: __c.La("mediaQualities", 7, __c.Eh),
                    rg: Ka("schema", 9, __c.tj),
                    Hma: __c.La("schemas", 10, __c.tj)
                }));
                E(() => ({
                    U5a: P("trash", 1),
                    id: I("id", 2)
                }));
                E(() => ({
                    d6a: P("untrash", 1),
                    id: I("id", 2)
                }));
                E(() => ({
                    delete: P("delete", 1),
                    id: I("id", 2),
                    reason: M("reason", 3)
                }));
                E(() => ({
                    b6a: P("unsoftDelete", 1),
                    id: I("id", 2)
                }));
                var cu = G(() => [1, "SET", 2, "DOWNGRADE", 3, "UPGRADE"]);
                var du = E(() => ({
                    op: Ja("op", 1, cu),
                    role: Ja("role", 2, __c.ih)
                }));
                var Wpa = E(() => ({
                    op: Ja("op", 1, cu),
                    role: Ja("role", 2, __c.ih),
                    EFa: P("owningBrandOnly", 3),
                    isa: P("allowAnonymousEditAccess", 4)
                }));
                var eu = E(() => ({
                    Zl: A("principal", 1, __c.Ti),
                    origin: A("origin", 2, __c.Ui),
                    w0a: A("roleChange", 3, du),
                    timestamp: __c.nd("timestamp", 4)
                }));
                var Xpa = E(() => ({
                    identifier: I(2),
                    display: M(6),
                    role: Ja(3, __c.ih)
                }));
                var Ypa = G(() => [1, 2]);
                var Zpa = E(() => ({
                    identifier: M(5),
                    token: M(1),
                    O4a: Ka(2, Ypa),
                    y0a: Ka(3, cu),
                    role: Ka(4, __c.ih)
                }));
                var $pa = E(() => ({
                    document: I("document", 1),
                    extension: M("extension", 2),
                    KQa: C("defaultRoleChange", 3, du),
                    bXa: C("linkRoleChange", 4, Wpa),
                    wZa: C("ownerChange", 8, eu),
                    f_a: D("principalRoleChanges", 5, eu),
                    X_a: __c.Q("removeTosRestriction", 10),
                    yKa: Ka("tosRestriction", 11, __c.ej),
                    iia: D("invites", 6, Xpa),
                    QVa: C("inviteChange", 7, Zpa),
                    W3a: M("shareToken", 9)
                }));
                E(() => ({
                    id: I("id", 1),
                    body: A("body", 4, $pa)
                }));
                var aqa = G(() => [1, "REPLACE", 2, "UPDATE", 3, "RESTORE"]);
                E(() => ({
                    mode: Ja("mode", 6, aqa, 1),
                    id: I("id", 1),
                    extension: M("extension", 4),
                    version: jd("version", 2),
                    Pc: md("session", 3),
                    Bn: jd("revision", 5)
                }));
                __c.bqa = E(() => ({
                    id: I("id", 1),
                    extension: M("extension", 17),
                    version: md("version", 2),
                    Ha: __c.od("pages", 3),
                    lB: P("includeFonts", 4),
                    mB: P("includeMedia", 5, !0),
                    nB: P("includeVideos", 8),
                    kB: P("includeAudio", 9),
                    tx: P("includeEmbeds", 15),
                    Jr: P("includeOrphaned", 14),
                    fonts: pd("fonts", 10),
                    media: pd("media", 11),
                    mc: pd("videos", 12),
                    audio: pd("audio", 13),
                    embeds: pd("embeds", 16),
                    Hb: M("continuation", 6),
                    limit: jd("limit", 7, 100)
                }));
                __c.cqa = E(() => ({
                    VV: P("publicify", 1),
                    id: I("id", 2),
                    extension: M("extension", 3)
                }));
                __c.dqa = E(() => ({
                    gY: P("unpublicify", 1),
                    id: I("id", 2),
                    extension: M("extension", 3)
                }));
                __c.eqa = E(() => ({
                    OX: P("templatify", 1),
                    id: I("id", 2),
                    extension: M("extension", 3)
                }));
                __c.fu = E(() => ({
                    Uj: I("doc", 1),
                    extension: M("extension", 6),
                    Pd: I("contentUrl", 3)
                }));
                __c.fqa = E(() => ({
                    id: I("id", 1),
                    body: A("body", 2, __c.fu)
                }));
                var gqa = E(() => ({
                    newValue: A(1, __c.Me)
                }));
                var hqa = E(() => ({
                    newValue: A(1, __c.Ne)
                }));
                var iqa = E(() => ({
                    newValue: D(1, __c.Oe)
                }));
                var gu = E(() => ({
                    newValue: M(1)
                }));
                var jqa = E(() => ({
                    newValue: pd(1)
                }));
                var kqa = E(() => ({
                    newValue: (0, __c.Ad)(1, __c.Pe)
                }));
                var lqa = E(() => ({
                    newValue: C(1, __c.Ue)
                }));
                var hu = E(() => ({
                    newValue: C(1, __c.ef)
                }));
                var mqa = E(() => Object.assign({}, {}, {
                    type: w("A?", 1, "RETAIN"),
                    length: jd(1)
                }));
                var nqa = E(() => Object.assign({}, {}, {
                    type: w("A?", 2, "UPDATE"),
                    values: D(1, __c.Ag)
                }));
                var oqa = E(() => Object.assign({}, {}, {
                    type: w("A?", 3, "INSERT"),
                    values: D(1, __c.Ag)
                }));
                var pqa = E(() => Object.assign({}, {}, {
                    type: w("A?", 4, "DELETE"),
                    length: jd(1)
                }));
                var qqa = __c.Ra(() => ({
                    type: [1, mqa, 2, nqa, 3, oqa, 4, pqa]
                }), () => ({}));
                var rqa = E(() => ({
                    xa: D(1, qqa)
                }));
                var sqa = E(() => Object.assign({}, {}, {
                    type: w("A?", 1, "RETAIN"),
                    length: jd(1)
                }));
                var tqa = E(() => Object.assign({}, {}, {
                    type: w("A?", 2, "UPDATE"),
                    values: D(1, __c.fh)
                }));
                var uqa = E(() => Object.assign({}, {}, {
                    type: w("A?", 3, "INSERT"),
                    values: D(1, __c.fh)
                }));
                var vqa = E(() => Object.assign({}, {}, {
                    type: w("A?", 4, "DELETE"),
                    length: jd(1)
                }));
                var wqa = __c.Ra(() => ({
                    type: [1, sqa, 2, tqa, 3, uqa, 4, vqa]
                }), () => ({}));
                var xqa = E(() => ({
                    xa: D(1, wqa)
                }));
                E(() => ({
                    doctype: C(2, gqa),
                    F: C(3, hqa),
                    cB: C(17, iqa),
                    language: C(16, gu),
                    title: C(4, gu),
                    description: C(5, gu),
                    Da: C(6, jqa),
                    Oi: C(7, kqa),
                    audio: C(10, lqa),
                    va: C(19, hu),
                    X: C(20, hu),
                    Tn: C(22, rqa),
                    Ha: C(1, xqa)
                }));
                E(() => ({
                    title: I("title", 1)
                }));
                E(() => ({
                    extension: M(3),
                    version: md(1),
                    reason: M(2)
                }));
                E(() => ({
                    Uj: I("doc", 1),
                    extension: M("extension", 4),
                    add: pd("add", 2),
                    remove: pd("remove", 3)
                }));
                __c.iu = E(() => ({
                    id: I("id", 1)
                }));
                __c.ju = E(() => ({
                    id: I("id", 1)
                }));
                var yqa = E(() => ({
                    Uj: I("doc", 1),
                    extension: M("extension", 2),
                    Bn: md("revision", 3)
                }));
                E(() => ({
                    Uj: I(1),
                    extension: M(8),
                    fonts: D(3, __c.bs),
                    media: D(2, __c.Ai),
                    mc: D(4, __c.iu),
                    audio: D(5, __c.ju),
                    embeds: pd(9),
                    jma: D(7, yqa)
                }));
                var zqa;
                zqa = class {
                    O(a) {
                        switch (a.Je) {
                            case "fixed":
                                return vpa(this, a);
                            case "responsive":
                                return wpa(this, a);
                            default:
                                throw new v(a);
                        }
                    }
                    serializeBody(a) {
                        return new __c.Ag({
                            text: wt(this, a.text)
                        })
                    }
                    nIa(a) {
                        return new __c.Jf(a)
                    }
                    mIa(a) {
                        return new __c.Kf(a)
                    }
                    P(a) {
                        const b = a.Tn.length ? "responsive" : "fixed";
                        switch (b) {
                            case "fixed":
                                return Jpa(this, a);
                            case "responsive":
                                return __c.t(__c.nt(a.F)), Kpa(this, a);
                            default:
                                throw new v(b);
                        }
                    }
                    tva(a) {
                        return a
                    }
                    sva(a) {
                        return a
                    }
                };
                __c.ku = new zqa;
                __c.lu = E(() => ({
                    url: I("url", 1),
                    width: id("width", 2),
                    height: id("height", 3)
                }));
                __c.mu = E(() => ({
                    locale: I("locale", 1),
                    name: I("name", 2),
                    mv: I("sentenceName", 3),
                    zZa: (0, __c.wd)("pageNameTemplates", 4)
                }));
                __c.nu = E(() => ({
                    lower: jd("lower", 1),
                    upper: md("upper", 2)
                }));
                __c.ou = E(() => ({
                    L_: A(1, __c.nu)
                }));
                var Aqa = G(() => [1, "CENTIMETERS", 2, "INCHES", 3, "MILLIMETERS", 4, "PIXELS"]);
                __c.pu = E(() => ({
                    width: id("width", 1),
                    minWidth: __c.ld("minWidth", 4),
                    maxWidth: __c.ld("maxWidth", 5),
                    height: id("height", 2),
                    minHeight: __c.ld("minHeight", 6),
                    maxHeight: __c.ld("maxHeight", 7),
                    units: Ja("units", 3, Aqa)
                }));
                var Bqa = G(() => [1, "ENCLOSING_BOX", 2, "CENTER_X", 3, "CENTER_Y"]);
                __c.qu = E(() => ({
                    url: M("url", 7),
                    qz: P("underlay", 9),
                    top: id("top", 2),
                    left: id("left", 3),
                    width: id("width", 4),
                    height: id("height", 5),
                    Pa: id("transparency", 6),
                    A4a: Ka("snapTarget", 8, Bqa)
                }));
                __c.ru = E(() => ({
                    type: M("type", 1),
                    F: A("dimensions", 2, __c.pu),
                    JS: D("fixedElements", 3, __c.qu),
                    kDa: M("nameTemplate", 4),
                    L_: A("cardinality", 5, __c.nu)
                }));
                var Cqa = E(() => ({
                    TXa: __c.nd(1),
                    EXa: __c.nd(2)
                }));
                __c.su = E(() => ({
                    bTa: P(1),
                    iTa: P(2),
                    XSa: P(3),
                    MSa: P(4)
                }));
                var Dqa = G(() => [1, "DEFAULT", 2, "GROUP", 3, "PAGE"]);
                var Eqa = E(() => Object.assign({}, {}, {
                    type: w("type", "SHARE", 1, "SHARE"),
                    n5a: Ka("targetType", 2, Dqa)
                }));
                var Fqa = G(() => [1, "PDF", 2, "PNG", 3, "JPG"]);
                var Gqa = E(() => Object.assign({}, {}, {
                    type: w("type", "DOWNLOAD", 2, "DOWNLOAD"),
                    ZTa: Ka("fileType", 1, Fqa),
                    aQa: M("compression", 2),
                    oSa: md("dpi", 3),
                    wWa: md("jpgQuality", 4),
                    xWa: md("jpgTargetFileSizeKb", 5)
                }));
                __c.tu = __c.Ra(() => ({
                    type: [1, Eqa, 2, Gqa]
                }), () => ({}));
                __c.uu = E(() => ({
                    id: I("id", 1),
                    version: jd("version", 2),
                    name: M("name", 3),
                    mv: M("sentenceName", 4),
                    visible: P("visible", 5),
                    Ch: C("thumbnail", 6, __c.lu),
                    YH: M("syncId", 11),
                    cja: D("localizedDescriptions", 7, __c.mu),
                    oda: D("bodyFormats", 13, __c.ou),
                    Uu: D("pageFormats", 8, __c.ru),
                    Y6a: C("videoFormat", 12, Cqa),
                    gga: C("featureConfig", 14, __c.su),
                    Dla: D("publishHints", 9, __c.tu)
                }));
                E(() => ({
                    doctype: A("doctype", 1, __c.uu)
                }));
                E(() => ({
                    Gxa: jd(1)
                }));
                E(() => ({
                    cSa: D("doctypes", 1, __c.uu),
                    Hb: M("continuation", 2)
                }));
                E(() => ({
                    UTa: __c.od(1),
                    VTa: D(2, __c.su),
                    Hb: M(3)
                }));
                __c.vu = E(() => ({
                    doctype: A("doctype", 1, __c.uu)
                }));
                E(() => ({}));
                E(() => ({
                    updated: P(1)
                }));
                __c.wu = E(() => ({
                    Uj: I("doc", 1),
                    extension: M("extension", 17),
                    version: md("version", 2),
                    Ha: __c.od("pages", 3),
                    lB: P("includeFonts", 4),
                    mB: P("includeMedia", 5),
                    nB: P("includeVideos", 8),
                    kB: P("includeAudio", 9),
                    tx: P("includeEmbeds", 15),
                    Jr: P("includeOrphaned", 14),
                    fonts: D("fonts", 10, __c.bs),
                    media: D("media", 11, __c.Ai),
                    mc: D("videos", 12, __c.iu),
                    audio: D("audio", 13, __c.ju),
                    embeds: pd("embeds", 16),
                    Hb: M("continuation", 6),
                    limit: jd("limit", 7, 100)
                }));
            }).call(self, self._cdf17aa01cb7a37fe84ed76fc113a158);
        }

    }
])
//# sourceMappingURL=sourcemaps/71d79546e06eea7a.js.map