(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [7653], {

        /***/
        4252: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(2868);
            self._cdf17aa01cb7a37fe84ed76fc113a158 = self._cdf17aa01cb7a37fe84ed76fc113a158 || {};
            (function(__c) {
                "use strict";
                var rl, tl, t = __c.t,
                    v = __c.v,
                    ja = __c.ja,
                    Wl, u = __c.u,
                    Km, Ym, Jn, Pn, ba = __c.ba,
                    p, fp, Rp, Xp, aq, Fq, Gq;
                var ql, ul, xl, Al, Yja, Zja, Bl, Cl, Dl, El, Fl, Gl, Hl, Il, Kl, Ll, Ml, Nl, Ol, Pl, Ql, Rl, Sl, Tl, Ul, Vl, Yl, Zl, $l, bm, cm, em, fm, hm, im, jm, km, lm, om, mm, nm, qm, rm, sm, tm, um, vm, wm, xm, ym, zm, Em, Fm, Gm, Hm, Im, Jm, Lm, Mm, Nm, Om, Pm, Qm, Sm, Tm, Um, Vm, Wm, Xm, $m, an, Zm, bn, cn, dn, en, fn, pka, hn, kn, ln, qka, nn, rka, on, pn, rn, sn, tn, un, vn, wn, xn, yn, Cn, Dn, En, Fn, Gn, uka, Kn, vka, wka, Ln, Mn, Nn, yka, On, zka, Qn, Rn, Sn, Tn, Un, ao, bo, co;
                __c.ol = function(a, b) {
                    return __c.aa[a] = b
                };
                __c.pl = function(a) {
                    return null != a
                };
                ql = function(a) {
                    if (null == a || "symbol" === typeof a) return String(a);
                    try {
                        return JSON.stringify(a)
                    } catch (b) {
                        return String(a)
                    }
                };
                rl = __c.rl = function(a, b) {
                    if (a !== b) throw Error(__c.ia("{} != {}", ql(a), ql(b)))
                };
                __c.sl = function(a, b) {
                    const c = new Map;
                    for (const [d, e] of a) c.set(d, b(e, d));
                    return c
                };
                tl = __c.tl = function(a, b) {
                    t(Object.getPrototypeOf(a) === Object.prototype);
                    const c = {};
                    for (const d in a) c[d] = b(a[d], d);
                    return c
                };
                ul = function(a) {
                    rl(a.normalize(a.defaultValue), a.defaultValue)
                };
                __c.vl = function(a, b) {
                    return null != b ? a.decode(b) : void 0
                };
                __c.wl = function(a, b) {
                    return null != b ? a.encode(b) : void 0
                };
                xl = function(a) {
                    return a.includes("/") ? a.split("/")[0] : void 0
                };
                __c.yl = function(a, b) {
                    if ("function" === typeof b) return b;
                    switch (b) {
                        case "all":
                            return () => !0;
                        case "block":
                            return a.cBa;
                        case "inline":
                            return a.qBa;
                        case "dynamic":
                            return a.JT;
                        default:
                            throw new v(b);
                    }
                };
                __c.zl = function(a, b, c, d) {
                    c = __c.yl(a, c);
                    for (const e of Object.entries(b)) {
                        const [f, g] = e;
                        a.Or(f) && c(f) && d(g, f)
                    }
                };
                Al = function(a, b, c, d) {
                    const e = __c.yl(a, "all");
                    for (const f of Object.keys(b)) a.Or(f) && e(f) && d(f, b[f], c[f])
                };
                Yja = function(a, b) {
                    const c = Object.assign({}, a.SR.as),
                        d = Object.assign({}, a.SR.ss);
                    Al(a, b.as, b.ss, (e, f, g) => {
                        null != f && (c[e] = f);
                        null != g && (d[e] = g)
                    });
                    return {
                        as: c,
                        ss: d
                    }
                };
                Zja = function(a, b, c) {
                    const d = {};
                    __c.zl(a, b, "all", (e, f) => d[f] = c(e, f));
                    return d
                };
                Bl = function(a, b) {
                    var c = void 0 === c ? "throw" : c;
                    const d = {};
                    for (const e of Object.entries(b)) {
                        const [f, g] = e;
                        try {
                            t(a.Or(f)), d[f] = null != g ? a.attributes[f].normalize(g) : void 0
                        } catch (h) {
                            switch (c) {
                                case "throw":
                                    throw h;
                                case "drop":
                                    continue;
                                default:
                                    throw new v(c);
                            }
                        }
                    }
                    return d
                };
                Cl = function(a, b) {
                    return new $ja(a, b)
                };
                Dl = function(a, b, c) {
                    return new aka(a, b, c)
                };
                El = function(a, b) {
                    return new bka(a, b)
                };
                Fl = function(a, b) {
                    const c = new Proxy(a, {
                        get: (d, e) => {
                            if ("string" === typeof e) {
                                var f;
                                return d[e] || (f = xl(e)) && b[f]
                            }
                        },
                        has: (d, e) => {
                            if ("string" !== typeof e) return !1;
                            let f;
                            return e in d || !!((f = xl(e)) && f in b)
                        },
                        ownKeys: (d) => Object.keys(d)
                    });
                    return new cka(c, new Set(Object.keys(a)), new Set(Object.keys(b)))
                };
                Gl = function(a) {
                    const b = {};
                    for (const c in a) b[c] = a[c].domain;
                    return b
                };
                Hl = function(a, b) {
                    t(a.Qf(b), "invalid value: {}", b);
                    return b
                };
                Il = function(a, b, c) {
                    if (!a.Dj(b, c)) throw Error(`Invalid argument: ${a.stringify(b)} != ${a.stringify(c)}`)
                };
                Kl = function(a, b, c) {
                    return new Jl(a, b, c)
                };
                Ll = function(a, b) {
                    return Kl((c) => c.every((d) => a.Qf(d)) && (!b || b(c)), (c, d) => c.length === d.length && c.every((e, f) => f in d && a.Dj(e, d[f])) && c.reduce((e) => e + 1, 0) === d.reduce((e) => e + 1, 0), (c) => c.length ? "[ " + c.map((d) => a.stringify(d)).join(", ") + " ]" : "[]")
                };
                Ml = function(a, b) {
                    return Kl((c) => [...c].every(([d, e]) => a.Qf(d) && b.Qf(e)), (c, d) => {
                        if (c.size !== d.size) return !1;
                        for (const [e, f] of c)
                            if (c = d.get(e), null == c || !b.Dj(f, c)) return !1;
                        return !0
                    }, (c) => c.size ? `{ ${[...c].map(([d,e])=>`${a.stringify(d)} => ${b.stringify(e)}`).join(", ")} }` : "{}")
                };
                Nl = function(a, b) {
                    const c = Object.keys(a);
                    return Kl((d) => c.every((e) => a[e].Qf(d[e])) && (!b || b(d)), (d, e) => c.every((f) => a[f].Dj(d[f], e[f])), (d) => c.length ? "{ " + c.map((e) => `${e}: ${a[e].stringify(d[e])}`).join(", ") + " }" : "{}")
                };
                Ol = function(a, b) {
                    return Kl((c) => a[b(c)].Qf(c), (c, d) => {
                        const e = b(c),
                            f = b(d);
                        return e === f && a[e].Dj(c, d)
                    }, (c) => a[b(c)].stringify(c))
                };
                Pl = function(...a) {
                    if (1 === arguments.length) {
                        const c = a[0];
                        return Kl((d) => c === d)
                    }
                    const b = new Set(a);
                    return Kl((c) => b.has(c))
                };
                Ql = function(a) {
                    return Kl((b) => "string" === typeof b && a.test(b))
                };
                Rl = function(a, b) {
                    t(Number.isInteger(a) && Number.isInteger(b) && a <= b);
                    return Kl((c) => Number.isInteger(c) && a <= c && c <= b)
                };
                Sl = function(a, b) {
                    t(Number.isFinite(a) && Number.isFinite(b) && a <= b);
                    return Kl((c) => Number.isFinite(c) && a <= c && c <= b)
                };
                Tl = function(a, b, c) {
                    t(a.ld(b, c), "{} != {}", b, c)
                };
                Ul = function(a, b) {
                    ja(null != a.rO, "mutable is not connected");
                    try {
                        a.Gv(b)
                    } catch (c) {
                        throw a.error(c), c
                    }
                };
                Vl = function(a, b) {
                    return b.subscribe(a.yn)
                };
                Wl = __c.Wl = function(a, b) {
                    Ul(a, b);
                    a.domain.isIdentity(b) || a.yn.next(b)
                };
                Yl = function(a, b) {
                    b = a.Fg(b);
                    const c = new Xl;
                    a = a.connect(b, c);
                    return {
                        mutable: b,
                        Tp: c,
                        yn: a
                    }
                };
                Zl = function(a, b, c, d, e) {
                    a.destroy(e, b);
                    c.unsubscribe();
                    d.complete()
                };
                $l = function(a) {
                    return a instanceof Jl ? new dka(a) : new eka(a)
                };
                bm = function(a, b, c) {
                    return null == c || a.component.isIdentity(c) ? am : new Map([
                        [b, c]
                    ])
                };
                cm = function(a, b) {
                    return a.size ? b.size ? new Set([...a.keys(), ...b.keys()]) : a.keys() : b.keys()
                };
                em = function(a, b, c) {
                    const {
                        mutable: d,
                        Tp: e,
                        yn: f
                    } = Yl(a.type, c);
                    return {
                        Bea: {
                            to: e,
                            from: Vl(a, f.pipe(dm((g) => a.domain.update(b, g))))
                        },
                        value: d
                    }
                };
                fm = function(a, b) {
                    return {
                        ie: a,
                        Ad: b
                    }
                };
                hm = function(a) {
                    return 1 === a ? gm : {
                        type: 0,
                        length: a
                    }
                };
                im = function(a) {
                    return 1 === a ? fka : {
                        type: 1,
                        length: a
                    }
                };
                jm = function(a) {
                    return 1 === a ? gka : {
                        type: 2,
                        length: a
                    }
                };
                km = function(a, b) {
                    return {
                        type: 3,
                        state: a,
                        shift: b
                    }
                };
                lm = function(a, b) {
                    return {
                        type: 4,
                        delta: a,
                        shift: b
                    }
                };
                om = function(a) {
                    switch (a.type) {
                        case 0:
                            return `R(${a.length})`;
                        case 1:
                            return `X(${a.length})`;
                        case 2:
                            return `T(${a.length})`;
                        case 3:
                            return `I(${mm(a.state)})${nm(a.shift)}`;
                        case 4:
                            return `U(${mm(a.delta)})${nm(a.shift)}`;
                        default:
                            throw new v(a);
                    }
                };
                mm = function(a) {
                    return null != a ? a : "\u22A5"
                };
                nm = function(a) {
                    return null != a ? `[${a.ie},${a.Ad}]` : ""
                };
                qm = function(a, b) {
                    return b && a.DC ? new pm(a.xa.map((c) => 3 === c.type && c.shift ? km(c.state, fm(c.shift.ie + b, c.shift.Ad + b)) : 4 === c.type && c.shift ? lm(c.delta, fm(c.shift.ie + b, c.shift.Ad + b)) : c), a.pre, a.post, a.DC) : a
                };
                rm = function(a, b, c = 1) {
                    const d = u(a.ed);
                    if (d.type !== b) throw Error();
                    const e = d.length;
                    t(0 < c && c <= e, "{} \u2209 (0, {}]", c, e);
                    if (c < e) switch (b) {
                        case 0:
                            return a.ed = hm(e - c), hm(c);
                        case 1:
                            return a.ed = im(e - c), im(c);
                        case 2:
                            return a.ed = jm(e - c), jm(c);
                        default:
                            throw new v(b);
                    } else return a.ed = a.xa[a.i++], d
                };
                sm = function(a, b) {
                    const c = u(a.ed);
                    if (0 === c.type) return rm(a, 0, 1), hka;
                    if (1 === c.type) return rm(a, 1, 1), ika;
                    if (2 === c.type) return rm(a, 2, 1), jka;
                    if (c.type !== b) throw Error();
                    a.ed = a.xa[a.i++];
                    return c
                };
                tm = function(a) {
                    return a.every(() => !1)
                };
                um = function(a, b) {
                    t(0 < b.length);
                    const c = a.length;
                    b.forEach((d, e) => a.list[c + e] = d);
                    a.length += b.length
                };
                vm = function(a, b) {
                    a.length < b && (a = a.slice(), a.length = b);
                    return new kka(a)
                };
                wm = function(a) {
                    t(a.hB < a.input.length, "{} >= {}", a.hB, a.input.length);
                    return a.input[a.hB++]
                };
                xm = function(a, b) {
                    b = a.hB + b;
                    t(b <= a.input.length);
                    const c = a.input.slice(a.hB, b);
                    a.hB = b;
                    return c
                };
                ym = function(a, b) {
                    a.pM || (a.pM = new Set);
                    t(!a.pM.has(b), "duplicate modification: {}", b);
                    a.pM.add(b)
                };
                zm = function(a, b, c) {
                    ym(a, b);
                    (a.v8 || (a.v8 = new Map)).set(b, c)
                };
                Em = function(a, b, c) {
                    ym(a, b);
                    (a.u8 || (a.u8 = new Map)).set(b, c)
                };
                Fm = function(a, b) {
                    let {
                        ie: c,
                        Ad: d
                    } = b;
                    var e = a.v8;
                    a = a.u8;
                    if (e) {
                        const f = e.get(c);
                        null != f && (c = f, e.delete(c))
                    }
                    a && (e = a.get(d), null != e && (d = e, a.delete(d)));
                    return c !== b.ie || d !== b.Ad ? fm(c, d) : b
                };
                Gm = function(a, b, c) {
                    ym(a, b);
                    null != c && (a.qI || (a.qI = new Map)).set(b, c)
                };
                Hm = function(a, b, c) {
                    (a.kD || (a.kD = new Map)).set(b, c)
                };
                Im = function(a, b, c) {
                    (a.TC || (a.TC = new Map)).set(c, b)
                };
                Jm = function({
                    ie: a,
                    Ad: b
                }) {
                    return fm(b, a)
                };
                Km = __c.Km = function(a, b) {
                    return u(a.BL.get(b), "ref not found")
                };
                Lm = function(a, b) {
                    a = a.dh;
                    for (let c = 0; c < a.length; c++) {
                        const d = a[c];
                        if (d && (!b || b(d.value))) return d.value
                    }
                };
                Mm = function(a) {
                    return new lka(a)
                };
                Nm = function(a) {
                    return a instanceof Jl ? new mka(a) : new nka(a)
                };
                Om = function(a, b) {
                    return a ? b ? (...c) => {
                        a(...c);
                        b(...c)
                    } : a : b
                };
                Pm = function(a, b) {
                    a = a.length;
                    t(0 <= b && b < a, "{} \u2209 [0, {})", b, a)
                };
                Qm = function(a, b) {
                    a = a.length;
                    t(0 < b && b < a, "{} \u2209 (0, {})", b, a)
                };
                __c.Rm = function(a, b) {
                    return a ? b ? {
                        V: Om(a.V, b.V),
                        item: Om(a.item, b.item),
                        Pb: Om(a.Pb, b.Pb)
                    } : a : b
                };
                Sm = function(a, b) {
                    a = a.bq;
                    t(0 < b && b < a, "{} \u2209 (0, {})", 0, a)
                };
                Tm = function(a, b) {
                    a = a.rn;
                    t(0 < b && b < a, "{} \u2209 (0, {})", 0, a)
                };
                Um = function(a, b, c) {
                    switch (b.type) {
                        case 0:
                        case 1:
                            switch (c.type) {
                                case 0:
                                case 1:
                                    return a.change(b.state, c.state);
                                case 2:
                                    return a.Mp(b.state);
                                default:
                                    throw new v(c);
                            }
                        case 2:
                            switch (c.type) {
                                case 0:
                                case 1:
                                    return a.oI(c.state);
                                case 2:
                                    return a.fv(b.state);
                                default:
                                    throw new v(c);
                            }
                        default:
                            throw new v(b);
                    }
                };
                Vm = function(a) {
                    const b = u(a.ed);
                    a.ed = a.xa[a.i++];
                    return b
                };
                Wm = function(a, b) {
                    const c = u(a.ed),
                        d = c.bq;
                    t(0 < b && b <= d);
                    if (b < d) {
                        const [e, f] = c.uX(b);
                        a.ed = f;
                        return e
                    }
                    a.ed = a.xa[a.i++];
                    return c
                };
                Xm = function(a, b) {
                    const c = u(a.ed),
                        d = c.rn;
                    t(0 < b && b <= d);
                    if (b < d) {
                        const [e, f] = c.tX(b);
                        a.ed = f;
                        return e
                    }
                    a.ed = a.xa[a.i++];
                    return c
                };
                $m = function(a, b, c) {
                    switch (c.type) {
                        case 0:
                            return b;
                        case 1:
                            return t(1 === b.type), new Ym(a.component.apply(b.state, c.delta));
                        case 3:
                            return Zm(a, b, c.Cc), c.xc;
                        default:
                            throw new v(c);
                    }
                };
                an = function(a, b, c) {
                    switch (c.type) {
                        case 0:
                            return b;
                        case 1:
                            return t(1 === b.type), new Ym(a.component.Ld(b.state, c.delta));
                        case 3:
                            return Zm(a, b, c.xc), c.Cc;
                        default:
                            throw new v(c);
                    }
                };
                Zm = function(a, b, c) {
                    t(bn(a, b, c), "{} != {}", b, c)
                };
                bn = function(a, b, c) {
                    switch (b.type) {
                        case 0:
                            return 0 === c.type && b.state === c.state;
                        case 1:
                            return 1 === c.type && a.component.ld(b.state, c.state);
                        case 2:
                            return 2 === c.type && b.state === c.state;
                        default:
                            throw new v(b);
                    }
                };
                cn = function(a, b) {
                    const c = a.rb || {},
                        d = a.attributes || {},
                        e = b ? b.rb : {},
                        f = b ? b.attributes : {};
                    return new oka(Object.assign({}, b ? b.values : {}, a.values || {}), Object.assign({}, e, c), Object.assign({}, f, d))
                };
                dn = function(a) {
                    return Object.keys(a)
                };
                en = function(a, b, c) {
                    for (const d of Object.entries(a)) {
                        const [e, f] = d;
                        c(e, f, b[e])
                    }
                };
                fn = function(a, b) {
                    return a.length ? b.length ? [...new Set([...a, ...b])] : a : b
                };
                pka = function(a, b) {
                    const c = dn(a),
                        d = dn(b),
                        e = fn(c, d);
                    return e.length === c.length && e.length === d.length && e.every((f) => a[f] === b[f])
                };
                hn = function(a, b) {
                    return {
                        type: gn,
                        fg: a,
                        Ig: b
                    }
                };
                kn = function(a) {
                    return {
                        type: jn,
                        length: a
                    }
                };
                ln = function(a, b) {
                    return a && b ? a.so === b.so && a.sn === b.sn : !a && !b
                };
                qka = function(a) {
                    return a && {
                        ao: a.an,
                        so: a.sn,
                        an: a.ao,
                        sn: a.so
                    }
                };
                __c.mn = function(a, b) {
                    Object.entries(a).forEach((c) => {
                        var [d, e] = c;
                        return null != e && b(e, d)
                    })
                };
                nn = function(a) {
                    var b = qka;
                    const c = {};
                    __c.mn(a, (d, e) => {
                        ({
                            r: d
                        } = d);
                        return c[e] = {
                            r: b(d, e)
                        }
                    });
                    return c
                };
                rka = function(a, b) {
                    const c = dn(a),
                        d = dn(b);
                    if (a === b || !c.length && !d.length) return !0;
                    if (c.length !== d.length) return !1;
                    const e = fn(c, d);
                    return c.length === e.length && d.length === e.length && e.every((f) => ln(a[f].r, b[f].r))
                };
                on = function(a, b, c, d) {
                    const e = {};
                    for (const f of fn(dn(c), dn(d))) c = a[f], d = b[f], c ? d && (rl(c.an, d.ao), rl(c.sn, d.so), c = {
                        ao: c.ao,
                        so: c.so,
                        an: d.an,
                        sn: d.sn
                    }) : c = d, e[f] = {
                        r: c
                    };
                    return e
                };
                pn = function(a, b, c, d) {
                    const e = {},
                        f = {};
                    for (const g of fn(dn(c), dn(d))) {
                        c = a[g];
                        d = b[g];
                        c && d ? (rl(c.ao, d.ao), rl(c.so, d.so), c = [void 0, {
                            ao: d.an,
                            so: d.sn,
                            an: c.an,
                            sn: c.sn
                        }]) : c = [d, c];
                        const [h, k] = c;
                        f[g] = {
                            r: h
                        };
                        e[g] = {
                            r: k
                        }
                    }
                    return [f, e]
                };
                rn = function(a, b) {
                    b = void 0 === b ? {} : b;
                    return {
                        type: qn,
                        length: a,
                        bl: b
                    }
                };
                sn = function(a, b, c, d, e) {
                    const f = {};
                    if (a.GO.size) {
                        for (const g of a.GO) f[g] = {
                            r: void 0
                        }, delete a.$I[g], delete a.aJ[g];
                        a.GO.clear()
                    }
                    Object.keys(a.HO).length && (en(a.HO, a.ZX, (g, h, k) => {
                        f[g] = {
                            r: {
                                ao: d[g],
                                so: e[g],
                                an: h,
                                sn: k
                            }
                        };
                        a.$I[g] = h;
                        a.aJ[g] = k
                    }), a.HO = {}, a.ZX = {});
                    b && c && en(b, c, (g, h, k) => {
                        g in a.$I && (f[g] = {
                            r: {
                                ao: h,
                                so: k,
                                an: a.$I[g],
                                sn: a.aJ[g]
                            }
                        })
                    });
                    return f
                };
                tn = function(a) {
                    const b = a.ed;
                    if (!b || b.type === jn) return ska;
                    a.ed = a.input[a.i++];
                    a.apply(b);
                    return b
                };
                un = function(a, b, c) {
                    return c && {
                        ao: c.o,
                        an: c.n,
                        so: null != c.o ? a.mF.encode(b, c.o) : void 0,
                        sn: null != c.n ? a.mF.encode(b, c.n) : void 0
                    }
                };
                vn = function(a, b) {
                    const c = {};
                    for (const d of Object.entries(b)) {
                        const [e, f] = d;
                        f && (c[e] = {
                            r: un(a, e, f.r)
                        })
                    }
                    return c
                };
                wn = function(a, b) {
                    __c.mn(b, (c, d) => {
                        ({
                            r: c
                        } = c);
                        c ? ("apply" === a.mode ? a.sp.Yi(d, c.an, c.sn) : a.sp.Yi(d, c.ao, c.so), a.open.add(d)) : (a.sp.Yi(d, a.hb.vj[d], a.hb.Zu[d]), a.open.delete(d))
                    })
                };
                xn = function(a, b) {
                    return a ? !!b && a.from === b.from && a.to === b.to : !b
                };
                yn = function(a, b) {
                    let c = 0,
                        d = 0;
                    for (const e of a.xJ) switch (a = e.length, e.type) {
                        case 0:
                            b.M && b.M(a, c, d);
                            c += a;
                            d += a;
                            break;
                        case 1:
                            b.Ka && b.Ka(a, c, d);
                            d += a;
                            break;
                        default:
                            throw new v(e.type);
                    }
                };
                __c.Bn = function(a, b, c, d) {
                    c = new zn(c && An.from(c), d && An.from(d));
                    a.qc.set(b, c);
                    return a
                };
                Cn = function(a, b, c) {
                    let {
                        from: d,
                        to: e
                    } = a;
                    d += d > b ? c : 0;
                    e += e > b ? c : 0;
                    return a.from !== d || a.to !== e ? new An(d, e) : a
                };
                Dn = function(a, b, c) {
                    for (const [d, e] of a) {
                        const f = Cn(e, b, c);
                        f !== e && a.set(d, f)
                    }
                };
                En = function(a, b, c, d) {
                    for (const [e, f] of a) {
                        const g = f.Lu,
                            h = f.Hu,
                            k = g && (null != b ? Cn(g, b, d) : g),
                            l = h && (null != c ? Cn(h, c, d) : h);
                        k === g && l === h || a.set(e, new zn(k, l))
                    }
                };
                Fn = function(a, b) {
                    return a ? b ? new Set([...a.keys(), ...b.keys()]) : a.keys() : b.keys()
                };
                Gn = function(a) {
                    return "string" === typeof a ? a.length : 1
                };
                __c.In = function(a, b, c, d) {
                    var e;
                    void 0 === b && (b = a.cells.id());
                    void 0 === c && (c = a.attrs.id());
                    void 0 === d && (d = null === (e = a.Aa) || void 0 === e ? void 0 : e.id());
                    t(!a.Aa === !d);
                    return new Hn(b, c, d)
                };
                uka = function(a, b) {
                    const c = a.cells.cursor(a.length),
                        d = new tka;
                    a = (k) => {
                        throw Error(String(k))
                    };
                    const e = Object.assign({}, Jn, {
                            V: a
                        }),
                        f = Object.assign({}, Jn, {
                            V: () => 0,
                            Pb: a
                        }),
                        g = Object.assign({}, Jn, {
                            V: (k) => d.M(k.length),
                            Pb: () => 0
                        }),
                        h = Object.assign({}, Jn, {
                            V: (k) => d.delete(k.length),
                            Pb: a
                        });
                    b.forEach({
                        M: (k, l) => {
                            d.change(l);
                            c.Du(k, g)
                        },
                        Ka: (k, l) => {
                            d.change(l);
                            2 !== k.type && d.Ka(k.state)
                        },
                        change: (k, l, m) => {
                            d.change(m);
                            2 === k.type ? (c.Du(k.length, e), 2 !== l.type && d.Ka(l.state)) : 2 === l.type ? c.Du(k.length, h) : (t(k.state ===
                                l.state, "non-reflexive change: {} != {}", k, l), c.Du(k.length, f), d.M(k.length))
                        }
                    });
                    return d.ba()
                };
                Kn = function(a, b) {
                    Wl(a, __c.In(a.domain, void 0, b))
                };
                vka = function(a, b, c) {
                    return (d, e) => {
                        const f = a.IJ.get(c[a.bp] || e || a.Mb.defaults[a.bp]) || a.Mb.SR;
                        e = Zja(a.Mb, c, (g, h) => g === f.as[h] ? void 0 : g);
                        b.Su(Bl(a.Mb, e));
                        b.M(d);
                        b.Nj(e)
                    }
                };
                wka = function(a, b) {
                    t(a.cells.V().endsWith("\n"), "character stream must be terminated with a \\n");
                    a.forEach(Object.assign({}, Jn, {
                        V: (c, d) => b.$f(d),
                        Pb: (c, d) => b.$f(d)
                    }))
                };
                Ln = function(a, b) {
                    rl(a, b);
                    return a
                };
                Mn = function(a, b) {
                    return {
                        key: a.bF(b),
                        value: b
                    }
                };
                Nn = function(a, b, c) {
                    return new xka(a, b, c)
                };
                yka = function(a, b) {
                    return a === b || a.size === b.size && Array.from(a.keys()).every((c) => a.get(c) === b.get(c))
                };
                On = function(a, b) {
                    if (!a.size) return b;
                    if (!b.size) return a;
                    const c = new Map;
                    for (const [e, f] of a) {
                        var d = b.get(e) || 0;
                        (d = f + d) && c.set(e, d)
                    }
                    for (const [e, f] of b) a.has(e) || c.set(e, f);
                    return c
                };
                zka = function(a, b) {
                    const c = new Map;
                    for (const [d, e] of a) b(e) && c.set(d, e);
                    return c
                };
                Qn = function(a) {
                    var b = Aka.path;
                    try {
                        return !b(a).s
                    } catch (c) {
                        if (c === Pn) return !1;
                        throw c
                    }
                };
                Rn = function(a) {
                    return (b) => {
                        const c = a.exec(b);
                        if (!c) throw Pn;
                        return {
                            s: b.substring(c[0].length),
                            value: c[0]
                        }
                    }
                };
                Sn = function(a) {
                    return (b) => {
                        const c = [];
                        try {
                            for (;;) {
                                const d = a(b);
                                c.push(d.value);
                                b = d.s
                            }
                        } catch (d) {
                            if (d === Pn) return {
                                s: b,
                                value: c
                            };
                            throw d
                        }
                    }
                };
                Tn = function(a, ...b) {
                    return (c) => {
                        const d = [];
                        for (const e of b) {
                            const f = e(c);
                            c = f.s;
                            d.push(f.value)
                        }
                        return {
                            s: c,
                            value: a(...d)
                        }
                    }
                };
                Un = function(a) {
                    return "A" <= a && "Z" >= a ? "absolute" : "relative"
                };
                ao = function(a) {
                    const b = a.oba,
                        c = a.rba,
                        d = a.ica,
                        e = a.hba,
                        f = a.Sba,
                        g = a.Lba,
                        h = a.Fba,
                        k = a.qca,
                        l = a.qba,
                        m = a.hca,
                        n = a.gba,
                        q = a.mba,
                        r = a.Xba;
                    var x = Tn((O, U, da) => b(O, da), Vn, Wn, Vn),
                        y = Tn((O, U) => U, Wn, x);
                    a = Tn((O, U, da, Z) => f(Un(O), da, ...Z), Rn(/^[Mm]/), Xn, x, Sn(y));
                    const z = Tn((O, U, da, Z) => g(Un(O), da, ...Z), Rn(/^[Ll]/), Xn, x, Sn(y)),
                        B = Tn((O, U, da, Z) => h(Un(O), da, ...Z), Rn(/^[Hh]/), Xn, Vn, Sn(Yn)),
                        F = Tn((O, U, da, Z) => k(Un(O), da, ...Z), Rn(/^[Vv]/), Xn, Vn, Sn(Yn));
                    y = Tn((O, U, da, Z, X) => c(O, da, X), x, Wn, x, Wn, x);
                    const J = Tn((O, U, da, Z) => l(Un(O), da, ...Z),
                        Rn(/^[Cc]/), Xn, y, Sn(Tn((O, U) => U, Wn, y)));
                    y = Tn((O, U, da) => d(O, da), x, Wn, x);
                    const N = Tn((O, U, da, Z) => m(Un(O), da, ...Z), Rn(/^[Ss]/), Xn, y, Sn(Tn((O, U) => U, Wn, y)));
                    x = Tn((O, U, da, Z, X, ha, la, ma, Ha, na, Da) => e(O, da, X, la, Ha, Da), Zn, Wn, Zn, Wn, Vn, Bka, $n, Wn, $n, Wn, x);
                    const K = Tn((O, U, da, Z) => n(Un(O), da, ...Z), Rn(/^[Aa]/), Xn, x, Sn(Tn((O, U) => U, Wn, x))),
                        L = Tn((O) => q(Un(O)), Rn(/[Zz]/));
                    return {
                        moveTo: a,
                        lineTo: z,
                        nVa: B,
                        U6a: F,
                        CQa: J,
                        y4a: N,
                        arcTo: K,
                        closePath: L,
                        path: Tn((O) => r([].concat(...O)), Sn(Tn((O, U) => U, Xn, Tn((O, U) => [O, ...U], a, Sn(Tn((O, U) =>
                            U, Xn, (O) => {
                                if (!O) throw Pn;
                                switch (O[0].toUpperCase()) {
                                    case "L":
                                        return z(O);
                                    case "H":
                                        return B(O);
                                    case "V":
                                        return F(O);
                                    case "C":
                                        return J(O);
                                    case "S":
                                        return N(O);
                                    case "A":
                                        return K(O);
                                    case "Z":
                                        return L(O);
                                    default:
                                        throw Pn;
                                }
                            }))))))
                    }
                };
                bo = function(a) {
                    return (b, ...c) => {
                        a: switch (b) {
                            case "absolute":
                                b = 0;
                                break a;
                            case "relative":
                                b = 1;
                                break a;
                            default:
                                throw new v(b);
                        }
                        return new a(b, ...c)
                    }
                };
                co = __webpack_require__(83720).C;
                var Xl = __webpack_require__(70211).xQ;
                var Cka = __webpack_require__(61244).y;
                var Dka = __webpack_require__(98760).w;
                __c.eo = __webpack_require__(66008).h;
                var fo = __webpack_require__(22188),
                    go = fo.LO,
                    ho = fo.Fl,
                    Eka = fo.p6,
                    Fka = fo.vP;
                __webpack_require__(70655);
                var dm = __webpack_require__(55709).U;
                var Gka = __webpack_require__(13068).b;
                var io = class {
                        constructor(a, b) {
                            this.scope = a;
                            this.defaultValue = b
                        }
                        encode(a) {
                            return String(a)
                        }
                        decode(a) {
                            switch (typeof this.defaultValue) {
                                case "string":
                                    return a;
                                case "number":
                                    return Number(a);
                                case "boolean":
                                    return "false" !== a;
                                default:
                                    throw Error();
                            }
                        }
                        validate(a) {
                            t(this.TT(a), "invalid value: {}", a)
                        }
                        normalize(a) {
                            this.validate(a);
                            return this.jfa(a)
                        }
                        jfa(a) {
                            return a
                        }
                    },
                    cka = class {
                        constructor(a, b, c) {
                            this.attributes = a;
                            this.vv = b;
                            this.o1 = c;
                            this.defaults = tl(this.attributes, (d) => d.defaultValue);
                            this.SR = {
                                as: this.defaults,
                                ss: tl(this.defaults, (d, e) => null != d ? this.encode(e, d) : void 0)
                            };
                            this.Or = (d) => d in this.attributes;
                            this.cBa = (d) => "block" === this.getScope(d);
                            this.qBa = (d) => "inline" === this.getScope(d);
                            this.JT = (d) => {
                                d = xl(d);
                                return !(!d || !this.o1.has(d))
                            }
                        }
                        getScope(a) {
                            return this.attributes[a].scope
                        }
                        copy(a, b, c) {
                            __c.zl(this, b, a, (d, e) => c[e] = d)
                        }
                        $f(a) {
                            for (const b of Object.entries(a)) {
                                const [c, d] = b;
                                t(this.Or(c));
                                null != d && this.attributes[c].validate(d)
                            }
                        }
                        validate(a, b) {
                            a = u(this.attributes[a]);
                            null != b && a.validate(b)
                        }
                        normalize(a,
                            b) {
                            a = u(this.attributes[a]);
                            return null != b ? a.normalize(b) : void 0
                        }
                        encode(a, b) {
                            return __c.wl(this.attributes[a], b)
                        }
                        decode(a, b) {
                            return __c.vl(this.attributes[a], b)
                        }
                    },
                    jo = class extends io {
                        constructor() {
                            var a = {
                                    min: 0
                                },
                                {
                                    min: b = -2147483648,
                                    max: c = 2147483647,
                                    defaultValue: d = 0,
                                    units: e = ""
                                } = void 0 === a ? {} : a;
                            super("block", d);
                            t(Number.isInteger(b) && -2147483648 <= b);
                            t(Number.isInteger(c) && 2147483647 >= c);
                            t(Number.isInteger(d));
                            t(b <= d && d <= c);
                            this.min = b;
                            this.max = c;
                            this.units = e;
                            ul(this)
                        }
                        TT(a) {
                            return Number.isInteger(a) &&
                                this.min <= a && a <= this.max
                        }
                        encode(a) {
                            return `${a.toFixed(1)}${this.units}`
                        }
                        decode(a) {
                            if (!a.endsWith(this.units)) return NaN;
                            a = a.substring(0, a.length - this.units.length);
                            return super.decode(a)
                        }
                    },
                    $ja = class extends io {
                        constructor(a, b) {
                            var {
                                min: c = -Number.MAX_VALUE,
                                max: d = Number.MAX_VALUE,
                                fna: e = 6,
                                vx: f = "integer",
                                defaultValue: g = 0,
                                units: h = ""
                            } = void 0 === b ? {} : b;
                            super(a, g);
                            t(Number.isFinite(c) && c >= -Number.MAX_VALUE);
                            t(Number.isFinite(d) && d <= Number.MAX_VALUE);
                            t(Number.isInteger(e) && 1 <= e && 15 >= e);
                            this.min =
                                c;
                            this.max = d;
                            this.units = h;
                            this.fna = e;
                            this.vx = f;
                            ul(this)
                        }
                        TT(a) {
                            return Number.isFinite(a) && this.min <= a && a <= this.max
                        }
                        jfa(a) {
                            return 0 === a ? a : Number(a.toPrecision(this.fna))
                        }
                        encode(a) {
                            return `${"fixed"===this.vx&&Number.isInteger(a)?a.toFixed(1):String(a)}${this.units}`
                        }
                        decode(a) {
                            if (!a.endsWith(this.units)) return NaN;
                            a = a.substring(0, a.length - this.units.length);
                            return super.decode(a)
                        }
                    },
                    aka = class extends io {
                        constructor(a, b, c) {
                            super(a, c);
                            this.qHa = b;
                            ul(this)
                        }
                        TT(a) {
                            return this.qHa.test(a)
                        }
                    },
                    bka = class extends io {
                        constructor(a,
                            b) {
                            super(a, b[0]);
                            this.vLa = new Set(b);
                            ul(this)
                        }
                        TT(a) {
                            return this.vLa.has(a)
                        }
                    };
                var Hka = class {};
                var ko = class extends Hka {
                    create(a, b = co, c) {
                        a = this.Fg(a);
                        this.connect(a, b).subscribe(c);
                        return a
                    }
                };
                var Ika = (a, b) => a === b,
                    Jka = (a) => JSON.stringify(a),
                    Jl = class {
                        constructor(a, b = Ika, c = Jka) {
                            this.Qf = a;
                            this.Dj = b;
                            this.stringify = c
                        }
                    },
                    mka = class extends Jl {
                        constructor(a) {
                            super((b) => null == b || a.Qf(b), (b, c) => null != b ? null != c && a.Dj(b, c) : null == c, (b) => null != b ? a.stringify(b) : "undefined")
                        }
                    },
                    lo = Kl((a) => "string" === typeof a),
                    mo = Kl((a) => 1 === a.length),
                    no = Kl((a) => "boolean" === typeof a),
                    Kka = Rl(-2147483648, 2147483647),
                    Lka = Rl(-Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER),
                    oo = Sl(-Number.MAX_VALUE, Number.MAX_VALUE),
                    po = Rl(0, 2147483647),
                    qo =
                    Rl(0, Number.MAX_SAFE_INTEGER),
                    ro = Sl(0, Number.MAX_VALUE),
                    Mka = Ll(ro),
                    so = Ll(lo);
                var to = class {
                    static equals(a, b) {
                        return a ? !!b && a.equals(b) : !b
                    }
                };
                var uo = class extends to {
                    constructor(a) {
                        super();
                        this.Dj = a
                    }
                    isIdentity() {
                        return !0
                    }
                    hd() {}
                    transform() {
                        return [void 0, void 0]
                    }
                    Sd() {}
                    identity() {}
                    apply(a) {
                        return a
                    }
                    Ld(a) {
                        return a
                    }
                    ld(a, b) {
                        return this.Dj(a, b)
                    }
                    equals(a) {
                        return this === a
                    }
                };
                var vo = class {
                        constructor(a) {
                            this.delta = a;
                            this.type = 0
                        }
                        toString() {
                            return `U(${this.delta})`
                        }
                    },
                    wo = class {
                        constructor(a, b) {
                            this.Cc = a;
                            this.xc = b;
                            this.type = 1
                        }
                        toString() {
                            return `R(${this.Cc}, ${this.xc})`
                        }
                    },
                    xo = class extends to {
                        constructor(a) {
                            super();
                            this.component = a
                        }
                        update(a) {
                            return this.component.isIdentity(a) ? void 0 : new vo(a)
                        }
                        replace(a, b) {
                            return new wo(a, b)
                        }
                        isIdentity(a) {
                            return null == a || 0 === a.type && this.component.isIdentity(a.delta)
                        }
                        hd(a, b) {
                            if (null == a) return b;
                            if (null == b) return a;
                            switch (a.type) {
                                case 0:
                                    switch (b.type) {
                                        case 0:
                                            return this.update(this.component.hd(a.delta,
                                                b.delta));
                                        case 1:
                                            return this.replace(this.component.Ld(b.Cc, a.delta), b.xc);
                                        default:
                                            throw new v(b);
                                    }
                                case 1:
                                    switch (b.type) {
                                        case 0:
                                            return this.replace(a.Cc, this.component.apply(a.xc, b.delta));
                                        case 1:
                                            return Tl(this.component, a.xc, b.Cc), this.replace(a.Cc, b.xc);
                                        default:
                                            throw new v(b);
                                    }
                                default:
                                    throw new v(a);
                            }
                        }
                        transform(a, b) {
                            if (null == a || null == b) return [b, a];
                            switch (a.type) {
                                case 0:
                                    switch (b.type) {
                                        case 0:
                                            const [c, d] = this.component.transform(a.delta, b.delta);
                                            return [this.update(c), this.update(d)];
                                        case 1:
                                            return [this.replace(this.component.apply(b.Cc,
                                                a.delta), b.xc), void 0];
                                        default:
                                            throw new v(b);
                                    }
                                case 1:
                                    switch (b.type) {
                                        case 0:
                                            return [void 0, this.replace(this.component.apply(a.Cc, b.delta), a.xc)];
                                        case 1:
                                            return Tl(this.component, a.Cc, b.Cc), [void 0, this.replace(b.xc, a.xc)];
                                        default:
                                            throw new v(b);
                                    }
                                default:
                                    throw new v(a);
                            }
                        }
                        Sd(a) {
                            if (null == a) return a;
                            switch (a.type) {
                                case 0:
                                    return this.update(this.component.Sd(a.delta));
                                case 1:
                                    return this.replace(a.xc, a.Cc);
                                default:
                                    throw new v(a);
                            }
                        }
                        identity() {}
                        apply(a, b) {
                            if (null == b) return a;
                            switch (b.type) {
                                case 0:
                                    return this.component.apply(a,
                                        b.delta);
                                case 1:
                                    return Tl(this.component, a, b.Cc), b.xc;
                                default:
                                    throw new v(b);
                            }
                        }
                        Ld(a, b) {
                            if (null == b) return a;
                            switch (b.type) {
                                case 0:
                                    return this.component.Ld(a, b.delta);
                                case 1:
                                    return Tl(this.component, a, b.xc), b.Cc;
                                default:
                                    throw new v(b);
                            }
                        }
                        ld(a, b) {
                            return this.component.ld(a, b)
                        }
                        equals(a) {
                            return this === a || a instanceof xo && this.component.equals(a.component)
                        }
                    };
                var yo = class {
                    constructor() {
                        this.yn = new Xl
                    }
                    connect(a) {
                        return new Cka((b) => {
                            ja(null == this.rO);
                            const c = new Dka;
                            c.add(this.yn.subscribe(b));
                            c.add(a.subscribe({
                                next: (d) => Ul(this, d),
                                error: () => this.complete(),
                                complete: () => this.complete()
                            }));
                            c.add(() => this.rO = void 0);
                            return this.rO = c
                        })
                    }
                    complete() {
                        null != this.rO && this.yn.complete()
                    }
                    error(a) {
                        null != this.rO && this.yn.error(a)
                    }
                };
                var zo = class extends yo {
                    constructor(a, b, c) {
                        super();
                        this.Foa = a;
                        this.domain = b;
                        this._value = c
                    }
                    Gv(a) {
                        if (null != a) switch (a.type) {
                            case 1:
                                t(this._value === a.Cc);
                                this._value = a.xc;
                                break;
                            case 0:
                                t(null == a.delta);
                                break;
                            default:
                                throw new v(a);
                        }
                    }
                    get value() {
                        return this._value
                    }
                    set value(a) {
                        Hl(this.Foa, a);
                        const b = this._value;
                        this.Foa.Dj(b, a) || Wl(this, this.domain.replace(b, a))
                    }
                };
                _dmr(zo, "_value");
                var dka = class extends ko {
                        constructor(a) {
                            super();
                            this.type = a;
                            this.domain = new xo(new uo(this.type.Dj))
                        }
                        Fg(a) {
                            a = Hl(this.type, a);
                            return new zo(this.type, this.domain, a)
                        }
                        connect(a, b) {
                            return a.connect(b)
                        }
                        mb(a) {
                            return a.value
                        }
                        destroy(a, b) {
                            Il(this.type, a.value, b)
                        }
                    },
                    Ao = class extends yo {
                        constructor(a, b, c) {
                            super();
                            this.type = a;
                            this.domain = b;
                            const {
                                mutable: d,
                                Tp: e,
                                yn: f
                            } = Yl(this.type, c);
                            this.fE = d;
                            this.L$ = e;
                            this.Ega = Vl(this, f.pipe(dm((g) => new vo(g))))
                        }
                        instantiate(a) {
                            const {
                                mutable: b,
                                Tp: c,
                                yn: d
                            } = Yl(this.type, a);
                            this.fE =
                                b;
                            this.L$ = c;
                            this.Ega = Vl(this, d.pipe(dm((e) => new vo(e))))
                        }
                        destroy(a) {
                            Zl(this.type, a, this.Ega, this.L$, this.fE)
                        }
                        Gv(a) {
                            if (null != a) switch (a.type) {
                                case 0:
                                    this.L$.next(a.delta);
                                    break;
                                case 1:
                                    this.destroy(a.Cc);
                                    this.instantiate(a.xc);
                                    break;
                                default:
                                    throw Error();
                            }
                        }
                        get ref() {
                            return this.fE
                        }
                        set(a) {
                            Wl(this, new wo(this.type.mb(this.fE), a))
                        }
                    };
                _dmr(Ao, "fE");
                var eka = class extends ko {
                        constructor(a) {
                            super();
                            this.type = a;
                            this.domain = new xo(this.type.domain)
                        }
                        Fg(a) {
                            return new Ao(this.type, this.domain, a)
                        }
                        connect(a, b) {
                            return a.connect(b)
                        }
                        mb(a) {
                            return this.type.mb(a.ref)
                        }
                        destroy(a, b) {
                            this.type.destroy(a.ref, b)
                        }
                    },
                    Nka = $l(lo);
                var Bo = class extends to {
                        isIdentity(a) {
                            return 0 === a
                        }
                        hd(a, b) {
                            return a + b
                        }
                        transform(a, b) {
                            return [b, a]
                        }
                        identity() {
                            return 0
                        }
                        apply(a, b) {
                            return a + b
                        }
                        Ld(a, b) {
                            return a - b
                        }
                        ld(a, b) {
                            return a === b
                        }
                    },
                    Co = class extends Bo {
                        Sd(a) {
                            return 0 - a
                        }
                        equals(a) {
                            return this === a || a instanceof Co
                        }
                    },
                    Do = class extends Bo {
                        hd(a, b) {
                            t(0 <= a);
                            t(0 <= b);
                            return super.hd(a, b)
                        }
                        transform(a, b) {
                            t(0 <= a);
                            t(0 <= b);
                            return super.transform(a, b)
                        }
                        Sd(a) {
                            t(0 <= a);
                            return 0
                        }
                        apply(a, b) {
                            t(0 <= b);
                            return super.apply(a, b)
                        }
                        Ld(a, b) {
                            t(0 <= b);
                            return super.Ld(a,
                                b)
                        }
                        equals(a) {
                            return this === a || a instanceof Do
                        }
                    },
                    Oka = new Co,
                    Pka = new Do;
                var Eo = class extends yo {
                    constructor(a, b) {
                        super();
                        this.domain = a;
                        this._value = b
                    }
                    Gv(a) {
                        this._value = this.domain.apply(this._value, a)
                    }
                    get value() {
                        return this._value
                    }
                };
                _dmr(Eo, "_value");
                var Fo = class extends ko {
                        Fg(a) {
                            return new Eo(this.domain, a)
                        }
                        connect(a, b) {
                            return a.connect(b)
                        }
                        mb(a) {
                            return a.value
                        }
                        destroy(a, b) {
                            Tl(this.domain, a.value, b)
                        }
                    },
                    Qka = class extends Fo {
                        constructor() {
                            super(...arguments);
                            this.domain = Oka
                        }
                    },
                    Rka = class extends Fo {
                        constructor() {
                            super(...arguments);
                            this.domain = Pka
                        }
                    };
                new Qka;
                new Rka;
                var Go = class extends to {
                    constructor(a) {
                        super();
                        this.component = a;
                        t(!(a instanceof Go))
                    }
                    isIdentity(a) {
                        return null == a || this.component.isIdentity(a)
                    }
                    hd(a, b) {
                        t(null == a === (null == b));
                        return null != a && null != b ? this.component.hd(a, b) : void 0
                    }
                    transform(a, b) {
                        t(null == a === (null == b));
                        return null != a && null != b ? this.component.transform(a, b) : [void 0, void 0]
                    }
                    Sd(a) {
                        return null != a ? this.component.Sd(a) : void 0
                    }
                    identity(a) {
                        return null != a ? this.component.identity(a) : void 0
                    }
                    apply(a, b) {
                        t(null == a === (null == b));
                        return null !=
                            a && null != b ? this.component.apply(a, b) : void 0
                    }
                    Ld(a, b) {
                        t(null == a === (null == b));
                        return null != a && null != b ? this.component.Ld(a, b) : void 0
                    }
                    ld(a, b) {
                        return null != a && null != b && this.component.ld(a, b) || null == a && null == b
                    }
                    equals(a) {
                        return this === a || a instanceof Go && this.component.equals(a.component)
                    }
                };
                var am = new Map,
                    Ho = class extends to {
                        constructor(a) {
                            super();
                            this.component = new xo(new Go(a))
                        }
                        create(a, b) {
                            return bm(this, a, this.component.replace(void 0, b))
                        }
                        update(a, b) {
                            return bm(this, a, this.component.update(b))
                        }
                        replace(a, b, c) {
                            return bm(this, a, this.component.replace(b, c))
                        }
                        delete(a, b) {
                            return bm(this, a, this.component.replace(b, void 0))
                        }
                        identity() {
                            return am
                        }
                        isIdentity(a) {
                            return !a.size || Array.from(a.values()).every((b) => this.component.isIdentity(b))
                        }
                        Sd(a) {
                            if (!a.size) return a;
                            const b = new Map;
                            for (const [c, d] of a) a =
                                this.component.Sd(d), null != a && b.set(c, a);
                            return b
                        }
                        hd(a, b) {
                            if (!a.size) return b;
                            if (!b.size) return a;
                            const c = new Map;
                            for (const d of cm(a, b)) {
                                const e = this.component.hd(a.get(d), b.get(d));
                                null != e && c.set(d, e)
                            }
                            return c
                        }
                        transform(a, b) {
                            if (!a.size || !b.size) return [b, a];
                            const c = new Map,
                                d = new Map;
                            for (const e of cm(a, b)) {
                                const [f, g] = this.component.transform(a.get(e), b.get(e));
                                null != g && c.set(e, g);
                                null != f && d.set(e, f)
                            }
                            return [d, c]
                        }
                        apply(a, b) {
                            if (!b.size) return a;
                            const c = new Map(a);
                            b.forEach((d, e) => {
                                d = this.component.apply(a.get(e),
                                    d);
                                null != d ? c.set(e, d) : c.delete(e)
                            });
                            return c
                        }
                        Ld(a, b) {
                            if (!b.size) return a;
                            const c = new Map(a);
                            b.forEach((d, e) => {
                                d = this.component.Ld(a.get(e), d);
                                null != d ? c.set(e, d) : c.delete(e)
                            });
                            return c
                        }
                        ld(a, b) {
                            return a === b || a.size === b.size && Array.from(cm(a, b)).every((c) => {
                                const d = a.get(c);
                                c = b.get(c);
                                return null != d && null != c && this.component.ld(d, c)
                            })
                        }
                        equals(a) {
                            return this === a || a instanceof Ho && this.component.equals(a)
                        }
                    };
                __c.Io = class extends yo {
                    constructor(a, b, c) {
                        super();
                        this.type = a;
                        this.domain = b;
                        this.refs = new Map;
                        this.oA = new Map;
                        c.forEach((d, e) => {
                            const {
                                Bea: f,
                                value: g
                            } = em(this, e, d);
                            this.refs.set(e, g);
                            this.oA.set(e, f)
                        })
                    }
                    get size() {
                        return this.refs.size
                    }
                    set(a, b) {
                        var c = this.refs.get(a);
                        c = null != c ? this.domain.replace(a, this.type.mb(c), b) : this.domain.create(a, b);
                        Wl(this, c);
                        c = this.get(a);
                        if (null == c) throw Error(`Unable to set key "${a}" to value "${b}"`);
                        return c
                    }
                    get(a) {
                        return this.refs.get(a)
                    }
                    has(a) {
                        return this.refs.has(a)
                    }
                    delete(a) {
                        const b =
                            this.refs.get(a);
                        null != b && (a = this.domain.delete(a, this.type.mb(b)), Wl(this, a))
                    }
                    forEach(a) {
                        this.refs.forEach(a)
                    }
                    map(a) {
                        return [...this.refs].map(([b, c]) => a(c, b))
                    }
                    every(a) {
                        return [...this.refs.entries()].every(([b, c]) => a(c, b))
                    }
                    entries() {
                        return this.refs.entries()
                    }
                    keys() {
                        return this.refs.keys()
                    }
                    values() {
                        return this.refs.values()
                    }[Symbol.iterator]() {
                        return this.refs[Symbol.iterator]()
                    }
                    mb() {
                        return __c.sl(this.refs, (a) => this.type.mb(a))
                    }
                    destroy(a) {
                        t(this.refs.size === a.size);
                        this.forEach((b, c) => {
                            t(a.has(c));
                            const d = a.get(c);
                            t(this.type.domain.ld(d, this.type.mb(b)));
                            c = u(this.oA.get(c));
                            Zl(this.type, this.type.mb(b), c.from, c.to, b)
                        })
                    }
                    Gv(a) {
                        a.forEach((b, c) => {
                            if (null != b) switch (b.type) {
                                case 0:
                                    null != b.delta && u(this.oA.get(c)).to.next(b.delta);
                                    break;
                                case 1:
                                    if (null != b.Cc) {
                                        var d = b.Cc;
                                        const e = u(this.refs.get(c)),
                                            f = u(this.oA.get(c));
                                        Zl(this.type, d, f.from, f.to, e);
                                        this.refs.delete(c);
                                        this.oA.delete(c)
                                    } else t(!this.refs.has(c)), t(!this.oA.has(c));
                                    if (null != b.xc) {
                                        const {
                                            Bea: e,
                                            value: f
                                        } = em(this,
                                            c, b.xc);
                                        this.refs.set(c, f);
                                        this.oA.set(c, e)
                                    }
                                    break;
                                default:
                                    throw new v(b);
                            }
                        })
                    }
                };
                __c.Io.prototype.tD = ba(13);
                _dp([go.shallow], __c.Io.prototype, "refs", void 0);
                var Jo = class extends ko {
                    constructor(a) {
                        super();
                        this.type = a;
                        this.domain = new Ho(this.type.domain)
                    }
                    Fg(a) {
                        return new __c.Io(this.type, this.domain, a)
                    }
                    connect(a, b) {
                        return a.connect(b)
                    }
                    mb(a) {
                        return a.mb()
                    }
                    destroy(a, b) {
                        return a.destroy(b)
                    }
                };
                var Ko = class extends ko {
                    constructor(a) {
                        super();
                        this.type = a;
                        this.domain = new uo(this.type.Dj)
                    }
                    Fg(a) {
                        return Hl(this.type, a)
                    }
                    connect() {
                        return co
                    }
                    mb(a) {
                        return a
                    }
                    destroy(a, b) {
                        Il(this.type, a, b)
                    }
                };
                var gm = {
                        type: 0,
                        length: 1
                    },
                    fka = {
                        type: 1,
                        length: 1
                    },
                    gka = {
                        type: 2,
                        length: 1
                    },
                    ika = km(void 0),
                    hka = lm(void 0),
                    jka = lm(new wo(void 0, void 0)),
                    pm = class {
                        constructor(a, b, c, d) {
                            this.xa = a;
                            this.pre = b;
                            this.post = c;
                            this.DC = d
                        }
                        toString() {
                            return this.xa.map(om).join("")
                        }
                    },
                    Ska = new pm([], 0, 0, 0),
                    Lo = class {
                        constructor(a) {
                            this.component = a;
                            this.xa = [];
                            this.acc = this.post = this.pre = 0;
                            this.Dy = this.bv = this.mode = void 0
                        }
                        xv(a) {
                            if (this.mode !== a) {
                                switch (this.mode) {
                                    case void 0:
                                        break;
                                    case 0:
                                        this.xa.push(hm(this.acc));
                                        this.pre += this.acc;
                                        this.post +=
                                            this.acc;
                                        this.acc = 0;
                                        break;
                                    case 1:
                                        this.xa.push(im(this.acc));
                                        this.post += this.acc;
                                        this.acc = 0;
                                        break;
                                    case 2:
                                        this.xa.push(jm(this.acc));
                                        this.pre += this.acc;
                                        this.post += this.acc;
                                        this.acc = 0;
                                        break;
                                    case 3:
                                    case 4:
                                        break;
                                    default:
                                        throw new v(this.mode);
                                }
                                this.mode = a
                            }
                        }
                        accumulate(a, b = 1) {
                            t(0 <= b, "{} < 0", b);
                            b && (this.xv(a), this.acc += b);
                            return this
                        }
                        cW({
                            ie: a,
                            Ad: b
                        }) {
                            const c = this.xa.length,
                                d = this.bv || (this.bv = new Map),
                                e = this.Dy || (this.Dy = new Map);
                            t(!d.has(a), "duplicate record: {}", a);
                            t(!e.has(b), "duplicate recall: {}",
                                b);
                            d.set(a, c);
                            e.set(b, c)
                        }
                        append(a, b) {
                            switch (a.type) {
                                case 0:
                                    return this.M(a.length);
                                case 1:
                                    return this.expand(a.length);
                                case 2:
                                    return this.fv(a.length);
                                case 3:
                                    var c = a.shift;
                                    if (!b && (b = a.state, c && c.ie === c.Ad && (c = void 0, a = km(b)), null == b && null == c)) return this.expand();
                                    this.xv(a.type);
                                    c && this.cW(c);
                                    this.xa.push(a);
                                    this.post++;
                                    return this;
                                case 4:
                                    c = a.shift;
                                    if (!b)
                                        if (b = a.delta, c && c.ie === c.Ad && (c = void 0, a = lm(b)), null == b) {
                                            if (null == c) return this.M()
                                        } else if (1 === b.type && null == b.Cc && null == b.xc && null == c) return this.fv();
                                    this.xv(a.type);
                                    c && this.cW(c);
                                    this.xa.push(a);
                                    this.pre++;
                                    this.post++;
                                    return this;
                                default:
                                    throw new v(a);
                            }
                        }
                        M(a) {
                            return null == a || "number" === typeof a ? this.accumulate(0, a) : this.append(lm(void 0, a))
                        }
                        expand(a) {
                            return null == a || "number" === typeof a ? this.accumulate(1, a) : this.append(km(void 0, a))
                        }
                        fv(a) {
                            return null == a || "number" === typeof a ? this.accumulate(2, a) : this.append(lm(this.component.replace(void 0, void 0), a))
                        }
                        Ka(a, b) {
                            return this.append(km(a, b))
                        }
                        update(a, b) {
                            return this.append(lm(null != a ? this.component.update(a) :
                                void 0, b))
                        }
                        oI(a) {
                            return this.append(lm(this.component.replace(void 0, a)))
                        }
                        Mp(a) {
                            return this.append(lm(this.component.replace(a, void 0), void 0))
                        }
                        change(a, b, c) {
                            return this.append(lm(this.component.replace(a, b), c))
                        }
                        ba(a) {
                            0 !== this.mode && this.xv(void 0);
                            if (a && a.Waa()) return a.r2(this.xa);
                            if (!this.bv && !this.Dy) return new pm(this.xa, this.pre, this.post, 0);
                            a = this.xa;
                            const b = u(this.bv);
                            var c = [...b.keys()];
                            if (c.some((g, h) => g !== h)) {
                                const g = new Map;
                                c.forEach((h, k) => g.set(h, k));
                                for (const h of b.values()) switch (c =
                                    a[h], c.type) {
                                    case 3:
                                        var d = c.shift,
                                            e = g.get(d.ie),
                                            f = g.get(d.Ad);
                                        if (e !== d.ie || f !== d.Ad) a[h] = km(c.state, fm(e, f));
                                        break;
                                    case 4:
                                        d = c.shift;
                                        e = g.get(d.ie);
                                        f = g.get(d.Ad);
                                        if (e !== d.ie || f !== d.Ad) a[h] = lm(c.delta, fm(e, f));
                                        break;
                                    case 0:
                                    case 1:
                                    case 2:
                                        throw Error(`INSERT | UPDATE expected: ${om(c)}`);
                                    default:
                                        throw new v(c);
                                }
                            }
                            return new pm(a, this.pre, this.post, b.size)
                        }
                    },
                    Mo = class {
                        constructor(a) {
                            this.xa = a;
                            this.i = 0;
                            this.ed = a[this.i++]
                        }
                        static create(a, b, c) {
                            t(0 <= b, "{} < 0", b);
                            t(0 <= c, "{} < 0", c);
                            a = (b = Math.max(0,
                                b - a.pre, c - a.post)) ? [...a.xa, hm(b)] : a.xa;
                            return new Mo(a)
                        }
                        get head() {
                            return this.ed
                        }
                    },
                    No = class {
                        constructor(a) {
                            this.Vfa = a;
                            this.list = [];
                            this.length = 0;
                            this.Dy = this.bv = void 0
                        }
                        cW(a, {
                            ie: b,
                            Ad: c
                        }) {
                            const d = this.bv || (this.bv = new Map),
                                e = this.Dy || (this.Dy = new Map);
                            ja(!d.has(b), "already recorded: {}", b);
                            ja(!e.has(c), "already recalled: {}", c);
                            d.set(b, a);
                            e.set(c, this.length)
                        }
                        append(a, b) {
                            b ? this.cW(a, b) : null != a && (this.list[this.length] = a);
                            this.length++;
                            return this
                        }
                        expand(a = 1) {
                            t(0 <= a, "{} < 0", a);
                            this.length +=
                                a;
                            return this
                        }
                        ba() {
                            const a = this.list;
                            if (this.bv || this.Dy) {
                                const c = u(this.bv);
                                var b = u(this.Dy);
                                rl(c.size, b.size);
                                for (const [d, e] of b) ja(c.has(d), "recall has no record: {}", d), b = c.get(d), null != b && (a[e] = b)
                            }
                            null != this.Vfa && rl(this.length, this.Vfa);
                            return a
                        }
                    },
                    kka = class {
                        constructor(a) {
                            this.input = a;
                            this.hB = 0
                        }
                        finish() {
                            rl(this.hB, this.input.length)
                        }
                    },
                    Oo = class {
                        constructor(a) {
                            this.component = a;
                            this.u8 = this.v8 = this.pM = void 0
                        }
                        Waa() {
                            return !!this.pM
                        }
                        r2(a) {
                            const b = new Lo(this.component);
                            for (const c of a) switch (c.type) {
                                case 3:
                                    b.append(this.qga(c));
                                    break;
                                case 4:
                                    b.append(this.rga(c));
                                    break;
                                case 0:
                                case 1:
                                case 2:
                                    b.append(c);
                                    break;
                                default:
                                    throw new v(c);
                            }
                            return b.ba()
                        }
                    },
                    Po = class extends Oo {
                        constructor() {
                            super(...arguments);
                            this.qI = void 0
                        }
                        qga(a) {
                            if (!a.shift) return a;
                            const b = a.state,
                                c = a.shift;
                            var d = this.qI && this.qI.get(c.ie);
                            d = this.component.apply(b, d);
                            const e = Fm(this, c);
                            return d !== b || e !== c ? km(d, e) : a
                        }
                        rga(a) {
                            if (!a.shift) return a;
                            const b = a.delta,
                                c = a.shift;
                            var d = this.qI && this.qI.get(c.ie);
                            d = this.component.hd(b, d);
                            const e = Fm(this, c);
                            return d !== b ||
                                e !== c ? lm(d, e) : a
                        }
                    },
                    Qo = class extends Oo {
                        constructor() {
                            super(...arguments);
                            this.kD = this.TC = void 0
                        }
                        Waa() {
                            return super.Waa() || !!this.TC || !!this.kD
                        }
                        qga(a) {
                            if (!a.shift) return a;
                            const b = a.shift,
                                c = Fm(this, b);
                            if (c !== b) throw Error(`${JSON.stringify(c)} != ${JSON.stringify(b)}`);
                            return a
                        }
                        rga(a) {
                            const b = a.delta,
                                c = a.shift;
                            var d = this.TC;
                            if (d) {
                                var e = d.get(a);
                                if (null == e) e = a.delta;
                                else {
                                    d.delete(a);
                                    d = u(this.kD);
                                    var f = d.get(e);
                                    d.delete(e);
                                    e = f
                                }
                            } else e = a.delta;
                            d = c && Fm(this, c);
                            return e !== b || d !== c ? lm(e, d) : a
                        }
                        r2(a) {
                            a =
                                super.r2(a);
                            if (this.TC && this.TC.size) throw Error(`unconsumed setSurrogates: ${[...this.TC.values()]}`);
                            if (this.kD && this.kD.size) throw Error(`unconsumed subSurrogates: ${[...this.kD.keys()]}`);
                            return a
                        }
                    },
                    Ro = class extends to {
                        constructor(a) {
                            super();
                            this.component = new xo(new Go(a))
                        }
                        ic() {
                            return new Lo(this.component)
                        }
                        isIdentity(a) {
                            return !a.xa.length || a.xa.every((b) => {
                                switch (b.type) {
                                    case 0:
                                        return !0;
                                    case 4:
                                        return !b.shift && this.component.isIdentity(b.delta);
                                    case 2:
                                    case 1:
                                    case 3:
                                        return !1;
                                }
                                throw new v(b);
                            })
                        }
                        hd(a, b) {
                            if (!a.xa.length) return b;
                            if (!b.xa.length) return a;
                            const c = this.component,
                                d = this.ic(),
                                e = new Po(c),
                                f = Mo.create(a, 0, b.pre),
                                g = Mo.create(qm(b, a.DC), a.post, 0);
                            for (var h = f.head, k = g.head; h || k;) {
                                if (k) {
                                    if (1 === k.type) d.append(rm(g, k.type, k.length));
                                    else if (3 === k.type) d.append(sm(g, k.type));
                                    else if (h) {
                                        if (1 === h.type) switch (k.type) {
                                            case 2:
                                            case 0:
                                                var l = Math.min(h.length, k.length);
                                                rm(f, h.type, l);
                                                rm(g, k.type, l);
                                                d.append(im(l));
                                                break;
                                            case 4:
                                                l = sm(f, h.type);
                                                k = sm(g, k.type);
                                                h = k.shift;
                                                d.append(km(c.apply(l.state,
                                                    k.delta), h));
                                                break;
                                            default:
                                                throw new v(k);
                                        } else if (3 === h.type) {
                                            l = sm(f, h.type);
                                            k = sm(g, k.type);
                                            h = l.shift;
                                            var m = k.shift;
                                            null == h ? d.append(km(c.apply(l.state, k.delta), m)) : null == m ? (d.append(l), Gm(e, h.Ad, k.delta)) : (d.append(km(l.state, fm(h.ie, m.Ad))), Gm(e, h.Ad, k.delta), Em(e, m.ie, h.Ad))
                                        } else 4 === h.type || 4 === k.type ? (k = sm(f, 4), l = sm(g, 4), h = k.shift, m = l.shift, null == h ? d.append(lm(c.hd(k.delta, l.delta), m)) : null == m ? (d.append(k), Gm(e, h.Ad, l.delta)) : (d.append(lm(k.delta, fm(h.ie, m.Ad))), Gm(e, h.Ad, l.delta), Em(e,
                                            m.ie, h.Ad))) : (l = Math.min(h.length, k.length), h = rm(f, h.type, l), k = rm(g, k.type, l), d.append(2 === h.type || 2 === k.type ? jm(l) : hm(l)));
                                    } else throw Error(`length mismatch: ${a} ; ${b}`);
                                } else throw Error(`length mismatch: ${a} ; ${b}`);
                                h = f.head;
                                k = g.head
                            }
                            return d.ba(e)
                        }
                        transform(a, b) {
                            if (!a.xa.length || !b.xa.length) return [b, a];
                            const c = this.component,
                                d = Mo.create(a, b.pre, 0),
                                e = Mo.create(qm(b, a.DC), a.pre, 0),
                                f = this.ic(),
                                g = this.ic(),
                                h = new Qo(c),
                                k = new Qo(c);
                            for (var l = d.head, m = e.head; l || m;) {
                                if (l && 3 === l.type) {
                                    if (m = sm(d, l.type),
                                        m.shift) {
                                        var n = m.shift;
                                        l = lm(void 0);
                                        g.append(l, "nocollapse");
                                        f.append(m);
                                        Im(h, n.Ad, l);
                                        Hm(h, n.ie, void 0)
                                    } else g.append(gm), f.append(m);
                                } else if (l && 1 === l.type) m = rm(d, l.type, l.length), g.append(hm(m.length)), f.append(m);
                                else if (m && 3 === m.type) {
                                    if (m = sm(e, m.type), m.shift) {
                                        l = m.shift;
                                        n = l.ie;
                                        l = l.Ad;
                                        var q = -n - 1,
                                            r = lm(void 0, fm(-l - 1, l));
                                        g.append(m);
                                        f.append(r);
                                        Im(k, l, r);
                                        Hm(k, n, void 0);
                                        zm(k, q, n)
                                    } else g.append(m), f.append(gm);
                                } else if (m && 1 === m.type) n = rm(e, m.type, m.length), g.append(n), f.append(hm(m.length));
                                else if (l &&
                                    m) {
                                    if (4 === l.type || 4 === m.type) {
                                        n = sm(d, l.type);
                                        l = sm(e, m.type);
                                        const [x, y] = c.transform(n.delta, l.delta);
                                        m = n.shift;
                                        l = l.shift;
                                        if (m) {
                                            if (l) {
                                                n = l.ie;
                                                l = l.Ad;
                                                q = m.ie;
                                                m = m.Ad;
                                                r = -n - 1;
                                                const z = lm(void 0, fm(-l - 1, l)),
                                                    B = lm(void 0, fm(n, l));
                                                g.append(B);
                                                f.append(z);
                                                Im(h, m, B);
                                                Im(k, l, z);
                                                Hm(h, q, x);
                                                Hm(k, n, y);
                                                zm(k, r, q);
                                                Em(k, n, m)
                                            } else n = m.ie, l = m.Ad, q = lm(void 0), g.append(q, "nocollapse"), f.append(lm(y, m)), Im(h, l, q), Hm(h, n, x);
                                        } else l ? (m = l.ie, n = l.Ad, q = -m - 1, r = lm(void 0, fm(-n - 1, n)), g.append(lm(x, l)), f.append(r), Im(k, n, r), Hm(k, m, y), zm(k,
                                            q, m)) : (g.append(lm(x)), f.append(lm(y)))
                                    } else n = Math.min(l.length, m.length), l = rm(d, l.type, n), m = rm(e, m.type, n), 2 === l.type && 2 === m.type ? g.append(hm(m.length)) : g.append(m), f.append(l);
                                } else throw Error(`length mismatch (${a} x ${b})`);
                                l = d.head;
                                m = e.head
                            }
                            return [g.ba(h), f.ba(k)]
                        }
                        Sd(a) {
                            if (!a.xa.length) return a;
                            const b = this.ic(),
                                c = new Po(this.component);
                            for (const d of a.xa) switch (d.type) {
                                case 0:
                                case 1:
                                case 2:
                                    b.M(d.length);
                                    break;
                                case 4:
                                    a = this.component.Sd(d.delta);
                                    const e = d.shift && Jm(d.shift);
                                    e ? (b.M(e), Gm(c,
                                        e.Ad, a)) : b.append(lm(a));
                                    break;
                                case 3:
                                    a = d.shift && Jm(d.shift);
                                    null != d.state ? a ? (b.M(a), Gm(c, a.Ad, this.component.replace(d.state, void 0))) : b.Mp(d.state) : b.M(a);
                                    break;
                                default:
                                    throw new v(d);
                            }
                            return b.ba(c)
                        }
                        Kd(a) {
                            return new No(a)
                        }
                        identity() {
                            return Ska
                        }
                        apply(a, b) {
                            if (!b.xa.length) return a;
                            const c = vm(a, b.pre),
                                d = new No(Math.max(a.length, b.pre) + (b.post - b.pre));
                            a = b.pre < a.length ? [...b.xa, hm(a.length - b.pre)] : b.xa;
                            for (const e of a) switch (e.type) {
                                case 0:
                                    um(d, xm(c, e.length));
                                    break;
                                case 1:
                                    d.expand(e.length);
                                    break;
                                case 2:
                                    ja(tm(xm(c, e.length)));
                                    d.expand(e.length);
                                    break;
                                case 3:
                                    d.append(e.state, e.shift);
                                    break;
                                case 4:
                                    d.append(this.component.apply(wm(c), e.delta), e.shift);
                                    break;
                                default:
                                    throw new v(e);
                            }
                            c.finish();
                            return d.ba()
                        }
                        Ld(a, b) {
                            if (!b.xa.length) return a;
                            const {
                                unshift: c,
                                ZKa: d
                            } = this.unshift(b);
                            b = d;
                            a = this.apply(a, c);
                            const e = vm(a, b.post),
                                f = new No(Math.max(a.length, b.post) + (b.pre - b.post));
                            a = b.post < a.length ? [...b.xa, hm(a.length - b.post)] : b.xa;
                            for (const g of a) switch (g.type) {
                                case 0:
                                    um(f, xm(e, g.length));
                                    break;
                                case 1:
                                    ja(tm(xm(e, g.length)));
                                    break;
                                case 2:
                                    ja(tm(xm(e, g.length)));
                                    f.expand(g.length);
                                    break;
                                case 3:
                                    Tl(this.component, g.state, wm(e));
                                    break;
                                case 4:
                                    f.append(this.component.Ld(wm(e), g.delta));
                                    break;
                                default:
                                    throw new v(g);
                            }
                            e.finish();
                            return f.ba()
                        }
                        unshift(a) {
                            const b = this.ic(),
                                c = this.ic();
                            for (const d of a.xa) switch (d.type) {
                                case 0:
                                    b.append(d);
                                    c.append(d);
                                    break;
                                case 1:
                                case 2:
                                    b.append(hm(d.length));
                                    c.append(d);
                                    break;
                                case 4:
                                    d.shift ? (b.M(Jm(d.shift)), c.append(lm(d.delta))) : (b.M(), c.append(d));
                                    break;
                                case 3:
                                    d.shift ? (b.M(Jm(d.shift)), c.append(km(d.state))) : (b.M(), c.append(d));
                                    break;
                                default:
                                    throw new v(d);
                            }
                            return {
                                unshift: b.ba(),
                                ZKa: c.ba()
                            }
                        }
                        ld(a, b) {
                            if (a === b) return !0;
                            if (a.length !== b.length) return !1;
                            const c = Object.keys(a),
                                d = Object.keys(b);
                            if (c.length !== d.length) return !1;
                            for (let e = 0; e < c.length; e++)
                                if (c[e] !== d[e] || !this.component.ld(a[c[e]], b[d[e]])) return !1;
                            return !0
                        }
                        equals(a) {
                            return this === a || a instanceof Ro && this.component.equals(a.component)
                        }
                    };
                var lka;
                __c.So = class extends yo {
                    constructor(a, b, c) {
                        super();
                        this.type = a;
                        this.domain = b;
                        this.DG = 0;
                        t(!c.length || null != c[c.length - 1]);
                        this.dh = go.array(c.map((d) => this.UB(d)), {
                            deep: !1
                        })
                    }
                    UB(a) {
                        const {
                            mutable: b,
                            Tp: c,
                            yn: d
                        } = Yl(this.type, a);
                        return {
                            id: String(this.DG++),
                            value: b,
                            to: c,
                            from: Vl(this, d.pipe(dm((e) => this.domain.ic().M(Km(this, b)).update(e).ba()))),
                            toString: () => `${b}`
                        }
                    }
                    R0(a, b) {
                        Zl(this.type, a, b.from, b.to, b.value)
                    }
                    get BL() {
                        const a = new Map;
                        this.dh.forEach((b, c) => b && a.set(b.value, c));
                        return a
                    }
                    Gv(a) {
                        const b = this.dh,
                            c = new Map,
                            d = new Map;
                        var e = 0;
                        b.length < a.pre && (b.length = a.pre);
                        for (var f of a.xa) switch (f.type) {
                            case 0:
                            case 2:
                                e += f.length;
                                break;
                            case 1:
                                b.spliceWithArray(e, 0, Array(f.length));
                                e += f.length;
                                break;
                            case 3:
                                var g = f.state,
                                    h = f.shift;
                                b.splice(e, 0, null != g ? this.UB(g) : void 0);
                                h && (d.set(h.ie, b[e]), c.set(h.Ad, e));
                                e++;
                                break;
                            case 4:
                                var k = f.delta;
                                g = f.shift;
                                if (k) switch (k.type) {
                                    case 0:
                                        h = k.delta;
                                        null != h && u(b[e]).to.next(h);
                                        break;
                                    case 1:
                                        h = k.Cc;
                                        k = k.xc;
                                        null == h ? ja(null == b[e]) : this.R0(h, u(b[e]));
                                        b[e] = null != k ? this.UB(k) :
                                            void 0;
                                        break;
                                    default:
                                        throw new v(k);
                                }
                                g && (d.set(g.ie, b[e]), c.set(g.Ad, e));
                                e++;
                                break;
                            default:
                                throw new v(f);
                        }
                        ja(d.size === a.DC);
                        ja(c.size === a.DC);
                        for (e = 0; e < a.DC; e++) ja(d.has(e)), f = u(c.get(e)), b[f] = d.get(e);
                        for (; b.length && null == b[b.length - 1];) b.length--
                    }
                    mb() {
                        const a = [];
                        this.dh.forEach((b, c) => {
                            null != b && (a[c] = this.type.mb(b.value))
                        });
                        return a
                    }
                    count() {
                        return this.BL.size
                    }
                    toArray() {
                        return this.dh.filter(__c.pl).map((a) => a.value)
                    }[Symbol.iterator]() {
                        return this.toArray()[Symbol.iterator]()
                    }
                    get q2() {
                        return Lm(this)
                    }
                    first(a) {
                        return a ?
                            Lm(this, a) : this.q2
                    }
                    last(a) {
                        const b = this.dh;
                        for (let c = b.length - 1; 0 <= c; c--) {
                            const d = b[c];
                            if (d && (!a || a(d.value))) return d.value
                        }
                    }
                    next(a, b) {
                        const c = this.dh;
                        for (a = Km(this, a) + 1; a < c.length; a++) {
                            const d = c[a];
                            if (d && (!b || b(d.value))) return d.value
                        }
                    }
                    has(a) {
                        return this.BL.has(a)
                    }
                    J3(a, b) {
                        Wl(this, this.domain.ic().M(a).Ka(b).ba());
                        return this.dh[a].value
                    }
                    append(a) {
                        return this.insertBefore(void 0, a)
                    }
                    prepend(a) {
                        return this.J3(0, a)
                    }
                    insertBefore(a, b) {
                        return this.J3(a ? Km(this, a) : this.dh.length, b)
                    }
                    delete(a) {
                        a =
                            this.domain.ic().M(Km(this, a)).Mp(this.type.mb(a)).ba();
                        Wl(this, a)
                    }
                    moveTo(a, b) {
                        const c = Km(this, b);
                        if (c === a) return b;
                        Wl(this, c < a ? this.domain.ic().M(c).M(fm(0, 1)).M(a - c - 1).expand(fm(1, 0)).ba() : this.domain.ic().M(a).expand(fm(0, 1)).M(c - a).M(fm(1, 0)).ba());
                        return b
                    }
                    map(a) {
                        return this.dh.filter(__c.pl).map(({
                            value: b,
                            id: c
                        }) => a(b, c))
                    }
                    flatMap(a) {
                        return this.dh.filter(__c.pl).flatMap(({
                            value: b,
                            id: c
                        }) => a(b, c))
                    }
                    filter(a) {
                        return this.dh.filter((b) => null != b && a(b.value, b.id)).map((b) => b.value)
                    }
                    forEach(a) {
                        this.dh.forEach((b,
                            c) => null != b && a(b.value, b.id, c))
                    }
                    reduce(a, b) {
                        return this.dh.reduce((c, d) => null != d ? a(c, d.value, d.id) : c, b)
                    }
                    some(a) {
                        return this.dh.some((b) => null != b && a(b.value, b.id))
                    }
                    every(a) {
                        return this.dh.every((b) => null == b || a(b.value, b.id))
                    }
                };
                p = __c.p = __c.So.prototype;
                p.Rw = ba(22);
                p.Jx = ba(20);
                p.NF = ba(17);
                p.Ug = ba(15);
                p.tD = ba(12);
                _dmc(__c.So, "BL");
                _dmc(__c.So, "q2");
                lka = class extends ko {
                    constructor(a) {
                        super();
                        this.type = a;
                        this.domain = new Ro(this.type.domain)
                    }
                    ic() {
                        return this.domain.ic()
                    }
                    Fg(a) {
                        return new __c.So(this.type, this.domain, a)
                    }
                    connect(a, b) {
                        return a.connect(b)
                    }
                    mb(a) {
                        return a.mb()
                    }
                    destroy(a, b) {
                        let c = 0;
                        a.forEach((d, e, f) => {
                            t(f in b);
                            this.type.destroy(d, b[f]);
                            c++
                        });
                        a = b.reduce((d) => d + 1, 0);
                        t(c === a)
                    }
                };
                __c.To = class {
                    constructor(a, b) {
                        this.base = a;
                        this.predicate = b
                    }
                    count() {
                        return this.reduce((a) => a + 1, 0)
                    }
                    toArray() {
                        return this.base.filter(this.predicate)
                    }[Symbol.iterator]() {
                        return this.toArray()[Symbol.iterator]()
                    }
                    first(a) {
                        const b = this.predicate;
                        return this.base.first((c) => b(c) && (!a || a(c)))
                    }
                    last(a) {
                        const b = this.predicate;
                        return this.base.last((c) => b(c) && (!a || a(c)))
                    }
                    next(a, b) {
                        t(this.has(a));
                        const c = this.predicate;
                        return this.base.next(a, (d) => c(d) && (!b || b(d)))
                    }
                    has(a) {
                        const b = this.predicate;
                        return b(a) && this.base.has(a)
                    }
                    map(a) {
                        const b =
                            this.predicate,
                            c = [];
                        this.base.forEach((d, e) => {
                            b(d) && c.push(a(d, e))
                        });
                        return c
                    }
                    flatMap(a) {
                        const b = this.predicate,
                            c = [];
                        this.base.forEach((d, e) => {
                            b(d) && c.push(...a(d, e))
                        });
                        return c
                    }
                    filter(a) {
                        const b = this.predicate;
                        return this.base.filter((c, d) => b(c) && a(c, d))
                    }
                    forEach(a) {
                        const b = this.predicate;
                        this.base.forEach((c, d) => b(c) && a(c, d))
                    }
                    reduce(a, b) {
                        const c = this.predicate;
                        return this.base.reduce((d, e) => c(e) ? a(d, e) : d, b)
                    }
                    some(a) {
                        const b = this.predicate;
                        return this.base.some((c) => b(c) && a(c))
                    }
                    every(a) {
                        const b = this.predicate;
                        return this.base.every((c) => b(c) && a(c))
                    }
                };
                __c.To.prototype.Rw = ba(21);
                __c.To.prototype.NF = ba(16);
                __c.To.prototype.Ug = ba(14);
                __c.To.prototype.tD = ba(11);
                var nka = class extends ko {
                        constructor(a) {
                            super();
                            this.type = a;
                            this.domain = new Go(this.type.domain)
                        }
                        Fg(a) {
                            return null != a ? this.type.Fg(a) : void 0
                        }
                        connect(a, b) {
                            return null == a ? b.pipe(Gka((c) => t(null == c)), (0, __c.eo)(() => !1)) : this.type.connect(a, b.pipe(dm((c) => u(c))))
                        }
                        mb(a) {
                            return null != a ? this.type.mb(a) : void 0
                        }
                        destroy(a, b) {
                            if (null != a && null != b) this.type.destroy(a, b);
                            else if (null != a || null != b) throw Error(`${this.mb(a)} != ${b}`)
                        }
                    },
                    Uo = Nm(lo),
                    Vo = Nm(no);
                Nm(Kka);
                Nm(Lka);
                var Wo = Nm(oo),
                    Xo = Nm(po);
                Nm(qo);
                var bp = Nm(ro);
                var cp = class extends to {
                        isIdentity(a) {
                            throw new v(a)
                        }
                        hd(a) {
                            throw new v(a)
                        }
                        transform(a) {
                            throw new v(a)
                        }
                        Sd(a) {
                            throw new v(a)
                        }
                        identity(a) {
                            throw new v(a)
                        }
                        apply(a) {
                            throw new v(a)
                        }
                        Ld(a) {
                            throw new v(a)
                        }
                        ld(a) {
                            throw new v(a)
                        }
                        equals(a) {
                            return this === a || a instanceof cp
                        }
                    },
                    dp = new cp;
                var ep, gp, kp, Tka, lp, mp, np, op, pp, qp, rp, sp, Uka;
                ep = class {};
                fp = __c.fp = class extends ep {
                    constructor(a) {
                        super();
                        this.state = a;
                        this.type = 0;
                        t(!!a)
                    }
                    get length() {
                        return this.state.length
                    }
                    tY(a) {
                        Pm(this, a);
                        return this.state.charAt(a)
                    }
                    xj(a) {
                        Qm(this, a);
                        return [new fp(this.state.substring(0, a)), new fp(this.state.substring(a))]
                    }
                    Ei() {
                        return this
                    }
                    toString() {
                        return this.state
                    }
                };
                Ym = __c.Ym = class extends ep {
                    constructor(a) {
                        super();
                        this.state = a;
                        this.type = 1
                    }
                    get length() {
                        return 1
                    }
                    tY(a) {
                        Pm(this, a);
                        return this.state
                    }
                    xj(a) {
                        Qm(this, a);
                        throw Error()
                    }
                    Ei(a) {
                        return new Ym(a(this.state))
                    }
                    toString() {
                        return `[${this.state}]`
                    }
                };
                gp = class extends ep {
                    constructor(a) {
                        super();
                        this.state = a;
                        this.type = 2;
                        t(!!a)
                    }
                    get length() {
                        return this.state
                    }
                    tY(a) {
                        Pm(this, a)
                    }
                    xj(a) {
                        Qm(this, a);
                        return [new gp(a), new gp(this.state - a)]
                    }
                    Ei() {
                        return this
                    }
                    toString() {
                        return 7 >= this.state ? "\xB7".repeat(this.state) : `\u00b7\u00b7(${this.state})\u00b7\u00b7`
                    }
                };
                __c.ip = class {
                    constructor(a, b, c, d) {
                        this.Vg = a;
                        this.R_ = b;
                        this.VT = c;
                        this.eoa = d;
                        a = a.length ? a[a.length - 1] : void 0;
                        t(!a || 2 !== a.type)
                    }
                    get length() {
                        return this.R_ + this.VT + this.eoa
                    }
                    hb(a) {
                        return new Tka(this, a)
                    }
                    cursor(a, b) {
                        return new __c.hp(this, a, b)
                    }
                    r4(a) {
                        for (const b of this.Vg) {
                            const c = b.length;
                            if (a < c) return b.tY(a);
                            a -= c
                        }
                    }
                    Ei(a) {
                        const b = this.Vg.map((c) => c.Ei(a));
                        return new __c.ip(b, this.R_, this.VT, this.eoa)
                    }
                    V() {
                        return this.Vg.map((a) => 0 === a.type ? a.state : "").join("")
                    }
                    forEach(a, b) {
                        for (const c of this.Vg) switch (c.type) {
                            case 0:
                                b.V &&
                                    b.V(c.state);
                                break;
                            case 1:
                                b.item(c.state);
                                break;
                            case 2:
                                b.Pb && b.Pb(c.state);
                                break;
                            default:
                                throw new v(c);
                        }(a = Math.max(0, a - this.length)) && b.Pb && b.Pb(a)
                    }
                    map(a, b) {
                        const c = this.Vg.map((d) => {
                            switch (d.type) {
                                case 0:
                                    return b.V(d.state);
                                case 1:
                                    return b.item(d.state);
                                case 2:
                                    return b.Pb(d.state);
                                default:
                                    throw new v(d);
                            }
                        });
                        (a = Math.max(0, a - this.length)) && c.push(b.Pb(a));
                        return c
                    }
                    reduce(a, b) {
                        return this.Vg.reduce((c, d) => {
                            switch (d.type) {
                                case 0:
                                    return a.V(c, d.state);
                                case 1:
                                    return a.item(c, d.state);
                                case 2:
                                    return a.Pb ?
                                        a.Pb(c, d.state) : c;
                                default:
                                    throw new v(d);
                            }
                        }, b)
                    }
                    slice(a, b) {
                        t(0 <= a && a <= b, "invalid range: [{}, {})", a, b);
                        var c = this.length;
                        if (0 === a && b >= c) return this;
                        if (a === b || a >= c) return __c.jp;
                        const d = new kp;
                        c = this.cursor(b);
                        c.Du(a);
                        c.Du(b - a, {
                            item: (e) => d.item(e),
                            V: (e) => d.tb(e),
                            Pb: (e) => d.zv(e)
                        });
                        return d.ba()
                    }
                    toString() {
                        return this.Vg.join("")
                    }
                };
                __c.jp = new __c.ip([], 0, 0, 0);
                kp = class {
                    constructor() {
                        this.Vg = [];
                        this.mode = void 0;
                        this.uN = "";
                        this.bY = this.q4 = this.sR = this.vN = 0
                    }
                    Ys(a) {
                        this.mode !== a && (this.flush(), this.mode = a)
                    }
                    flush() {
                        if (null != this.mode) {
                            switch (this.mode) {
                                case 0:
                                    this.Vg.push(new fp(this.uN));
                                    this.sR += this.uN.length;
                                    this.uN = "";
                                    break;
                                case 2:
                                    this.Vg.push(new gp(this.vN));
                                    this.bY += this.vN;
                                    this.vN = 0;
                                    break;
                                default:
                                    throw new v(this.mode);
                            }
                            this.mode = void 0
                        }
                    }
                    region(a) {
                        switch (a.type) {
                            case 0:
                                return this.tb(a.state);
                            case 1:
                                return this.item(a.state);
                            case 2:
                                return this.zv(a.state);
                            default:
                                throw new v(a);
                        }
                    }
                    tb(a) {
                        a && (this.Ys(0), this.uN += a);
                        return this
                    }
                    item(a) {
                        this.flush();
                        this.Vg.push(new Ym(a));
                        this.q4++;
                        return this
                    }
                    zv(a) {
                        0 < a && (this.Ys(2), this.vN += a);
                        return this
                    }
                    append(a, b = 0) {
                        a.forEach(b, {
                            V: (c) => this.tb(c),
                            item: (c) => this.item(c),
                            Pb: (c) => this.zv(c)
                        });
                        return this
                    }
                    get length() {
                        return this.sR + this.q4 + this.bY
                    }
                    ba() {
                        2 !== this.mode && this.flush();
                        return this.length ? new __c.ip(this.Vg, this.sR, this.q4, this.bY) : __c.jp
                    }
                };
                Tka = class {
                    constructor(a, b = 0) {
                        this.i = 0;
                        this.bN = void 0;
                        this.Vg = (b = Math.max(0, b - a.length)) ? [...a.Vg, new gp(b)] : a.Vg;
                        this.ed = this.Vg.length ? this.Vg[this.i++] : void 0
                    }
                    get head() {
                        return this.ed
                    }
                    get prevValue() {
                        return this.bN && this.bN.tY(this.bN.length - 1)
                    }
                    Jm(a) {
                        const b = u(this.ed),
                            c = b.length;
                        t(0 < a && a <= c, "{} \u2209 (0, {}]", a, c);
                        if (a < c) return a = b.xj(a), this.ed = a[1], this.bN = a[0];
                        this.ed = this.Vg[this.i++];
                        return this.bN = b
                    }
                    finish() {
                        ja(null == this.ed, "unconsumed reader head: {}", this.ed)
                    }
                };
                __c.hp = class {
                    constructor(a, b, c) {
                        this.rG = c;
                        this.hb = a.hb(b)
                    }
                    get prevValue() {
                        return this.hb.prevValue
                    }
                    move(a, b, c) {
                        for (c = __c.Rm(this.rG, c); a;) {
                            var d = this.hb.head;
                            if (d) switch (d = this.hb.Jm(b || 2 !== d.type ? Math.min(d.length, a) : d.length), d.type) {
                                case 0:
                                    c && c.V && c.V(d.state);
                                    a -= d.length;
                                    break;
                                case 1:
                                    c && c.item && c.item(d.state);
                                    a -= d.length;
                                    break;
                                case 2:
                                    c && c.Pb && c.Pb(d.state);
                                    b && (a -= d.length);
                                    break;
                                default:
                                    throw new v(d);
                            } else t(b, "not enough characters or items: {}", a), c && c.Pb && c.Pb(a), a -= a
                        }
                    }
                    Du(a, b) {
                        this.move(a, !0, b)
                    }
                    $c(a, b) {
                        this.move(a, !1, b)
                    }
                    BG() {
                        const a = __c.Rm(this.rG, void 0),
                            b = this.hb.head;
                        b && 2 === b.type && (this.hb.Jm(b.length), a && a.Pb && a.Pb(b.length))
                    }
                    finish() {
                        this.hb.finish()
                    }
                };
                __c.hp.prototype.Jx = ba(19);
                lp = class {};
                mp = class extends lp {
                    constructor(a) {
                        super();
                        this.length = a;
                        this.type = 0
                    }
                    get bq() {
                        return this.length
                    }
                    get rn() {
                        return this.length
                    }
                    uX(a) {
                        Sm(this, a);
                        return this.xj(a)
                    }
                    tX(a) {
                        Tm(this, a);
                        return this.xj(a)
                    }
                    xj(a) {
                        return [new mp(a), new mp(this.length - a)]
                    }
                    map() {
                        return this
                    }
                    toString() {
                        return `R${this.length}`
                    }
                };
                np = class extends lp {
                    constructor(a) {
                        super();
                        this.delta = a;
                        this.type = 1
                    }
                    get bq() {
                        return 1
                    }
                    get rn() {
                        return 1
                    }
                    uX(a) {
                        Sm(this, a);
                        throw Error()
                    }
                    tX(a) {
                        Tm(this, a);
                        throw Error()
                    }
                    map(a) {
                        return new np(a(this.delta))
                    }
                    toString() {
                        return `U[${this.delta}]`
                    }
                };
                op = class extends lp {
                    constructor(a) {
                        super();
                        this.state = a;
                        this.type = 2
                    }
                    get bq() {
                        return 0
                    }
                    get rn() {
                        return this.state.length
                    }
                    uX(a) {
                        Sm(this, a);
                        throw Error()
                    }
                    tX(a) {
                        Tm(this, a);
                        const [b, c] = this.state.xj(a);
                        return [new op(b), new op(c)]
                    }
                    map(a, b) {
                        return new op(this.state.Ei(b))
                    }
                    toString() {
                        switch (this.state.type) {
                            case 0:
                            case 1:
                                return `I${this.state}`;
                            case 2:
                                return `X${this.state.length}`;
                            default:
                                throw new v(this.state);
                        }
                    }
                };
                pp = class extends lp {
                    constructor(a, b) {
                        super();
                        this.Cc = a;
                        this.xc = b;
                        this.type = 3;
                        rl(a.length, b.length)
                    }
                    get bq() {
                        return this.Cc.length
                    }
                    get rn() {
                        return this.xc.length
                    }
                    uX(a) {
                        Sm(this, a);
                        return this.xj(a)
                    }
                    tX(a) {
                        Tm(this, a);
                        return this.xj(a)
                    }
                    xj(a) {
                        const [b, c] = this.Cc.xj(a), [d, e] = this.xc.xj(a);
                        return [new pp(b, d), new pp(c, e)]
                    }
                    map(a, b) {
                        return new pp(this.Cc.Ei(b), this.xc.Ei(b))
                    }
                    toString() {
                        return 2 === this.Cc.type ? 2 === this.xc.type ? `\u25e0${this.Cc.state}` : `\u2191${this.xc}` : 2 === this.xc.type ? `\u2193${this.Cc}` :
                            `\u25e1[${this.Cc}|${this.xc}]`
                    }
                };
                qp = class {
                    constructor(a, b, c) {
                        this.xa = a;
                        this.pre = b;
                        this.post = c
                    }
                    hb(a, b) {
                        return new Uka(this, a, b)
                    }
                    forEach(a, b = this.pre, c = this.post) {
                        for (const d of this.xa) switch (d.type) {
                            case 0:
                                a.M && a.M(d.length);
                                break;
                            case 1:
                                a.update && a.update(d.delta);
                                break;
                            case 2:
                                a.Ka && a.Ka(d.state);
                                break;
                            case 3:
                                a.change && a.change(d.Cc, d.xc);
                                break;
                            default:
                                throw new v(d);
                        }(b = Math.max(0, b - this.pre, c - this.post)) && a.M && a.M(b)
                    }
                    map(a) {
                        return this.xa.map((b) => {
                            switch (b.type) {
                                case 0:
                                    return a.M(b.length);
                                case 1:
                                    return a.update(b.delta);
                                case 2:
                                    return a.Ka(b.state);
                                case 3:
                                    return a.change(b.Cc, b.xc);
                                default:
                                    throw new v(b);
                            }
                        })
                    }
                    Ei(a, b) {
                        const c = this.xa.map((d) => d.map(a, b));
                        return new qp(c, this.pre, this.post)
                    }
                    toString() {
                        return `[${this.xa.toString()}]`
                    }
                };
                rp = new qp([], 0, 0);
                sp = class {
                    constructor(a) {
                        this.isIdentity = a;
                        this.xa = [];
                        this.post = this.pre = 0;
                        this.S5 = this.X5 = this.xn = void 0;
                        this.acc = 0;
                        this.Rl = this.Vx = void 0
                    }
                    Ys(a, b, c) {
                        if (this.xn !== a || this.X5 !== b || this.S5 !== c) switch (this.flush(), this.xn = a, this.X5 = b, this.S5 = c, a) {
                            case 0:
                                break;
                            case 2:
                                0 === c && (this.Rl = "");
                                break;
                            case 3:
                                0 === b && (this.Vx = "");
                                0 === c && (this.Rl = "");
                                break;
                            default:
                                throw new v(a);
                        }
                    }
                    flush() {
                        if (null != this.xn) {
                            switch (this.xn) {
                                case 0:
                                    this.push(new mp(this.acc));
                                    this.acc = 0;
                                    break;
                                case 2:
                                    var a = null != this.Rl ? new fp(this.Rl) :
                                        new gp(this.acc);
                                    this.push(new op(a));
                                    this.Rl = void 0;
                                    this.acc = 0;
                                    break;
                                case 3:
                                    a = null != this.Vx ? new fp(this.Vx) : new gp(this.acc);
                                    const b = null != this.Rl ? new fp(this.Rl) : new gp(this.acc);
                                    this.push(new pp(a, b));
                                    this.Rl = this.Vx = void 0;
                                    this.acc = 0;
                                    break;
                                default:
                                    throw new v(this.xn);
                            }
                            this.S5 = this.X5 = this.xn = void 0
                        }
                    }
                    push(a) {
                        this.xa.push(a);
                        this.pre += a.bq;
                        this.post += a.rn
                    }
                    op(a) {
                        switch (a.type) {
                            case 0:
                                return this.M(a.length);
                            case 1:
                                return this.update(a.delta);
                            case 2:
                                return this.ux(a.state);
                            case 3:
                                return Um(this,
                                    a.Cc, a.xc);
                            default:
                                throw new v(a);
                        }
                    }
                    ux(a) {
                        switch (a.type) {
                            case 0:
                                return this.Ka(a.state);
                            case 1:
                                return this.Ka(a.state);
                            case 2:
                                return this.expand(a.state);
                            default:
                                throw new v(a);
                        }
                    }
                    M(a) {
                        t(0 <= a);
                        a && (this.Ys(0, void 0, void 0), this.acc += a);
                        return this
                    }
                    update(a) {
                        if (this.isIdentity(a)) return this.M(1);
                        this.flush();
                        this.xa.push(new np(a));
                        this.pre++;
                        this.post++;
                        return this
                    }
                    expand(a) {
                        t(0 <= a);
                        a && (this.Ys(2, void 0, 2), this.acc += a);
                        return this
                    }
                    Ka(a) {
                        "string" === typeof a ? a && (this.Ys(2, void 0, 0), this.Rl +=
                            a) : (this.flush(), this.push(new op(new Ym(a))));
                        return this
                    }
                    fv(a) {
                        t(0 <= a);
                        a && (this.Ys(3, 2, 2), this.acc += a);
                        return this
                    }
                    oI(a) {
                        "string" === typeof a ? a && (this.Ys(3, 2, 0), this.acc += a.length, this.Rl += a) : (this.flush(), this.push(new pp(new gp(1), new Ym(a))));
                        return this
                    }
                    Mp(a) {
                        "string" === typeof a ? a && (this.Ys(3, 0, 2), this.acc += a.length, this.Vx += a) : (this.flush(), this.push(new pp(new Ym(a), new gp(1))));
                        return this
                    }
                    change(a, b) {
                        "string" === typeof a ? "string" === typeof b ? (rl(a.length, b.length), a && (this.Ys(3,
                            0, 0), this.Vx += a, this.Rl += b)) : (rl(a.length, 1), this.flush(), this.push(new pp(new fp(a), new Ym(b)))) : "string" === typeof b ? (rl(1, b.length), this.flush(), this.push(new pp(new Ym(a), new fp(b)))) : (this.flush(), this.push(new pp(new Ym(a), new Ym(b))));
                        return this
                    }
                    ba() {
                        0 !== this.xn && this.flush();
                        return new qp(this.xa, this.pre, this.post)
                    }
                };
                Uka = class {
                    constructor(a, b = 0, c = 0) {
                        this.xa = (b = Math.max(0, b - a.pre, c - a.post)) ? [...a.xa, new mp(b)] : a.xa;
                        this.i = 0;
                        this.ed = this.xa[this.i++]
                    }
                    get head() {
                        return this.ed
                    }
                    finish() {
                        ja(null == this.ed)
                    }
                };
                __c.tp = class extends to {
                    constructor(a) {
                        super();
                        this.component = a
                    }
                    ic() {
                        return new sp((a) => this.component.isIdentity(a))
                    }
                    Kd() {
                        return new kp
                    }
                    id() {
                        return rp
                    }
                    EK() {
                        return __c.jp
                    }
                    isIdentity(a) {
                        return !a.xa.length || a.xa.every((b) => 0 === b.type)
                    }
                    hd(a, b) {
                        if (!a.xa.length) return b;
                        if (!b.xa.length) return a;
                        const c = a.hb(0, b.pre),
                            d = b.hb(a.post, 0),
                            e = this.ic();
                        for (;;) {
                            let g = c.head;
                            var f = d.head;
                            if (!f) break;
                            2 === f.type ? (g = void 0, f = Vm(d)) : g && (f = Math.min(g.rn, f.bq), g = Xm(c, f), f = Wm(d, f));
                            if (2 === f.type) e.ux(f.state);
                            else if (g) 2 ===
                                g.type ? e.ux($m(this, g.state, f)) : 0 === f.type ? e.op(g) : 0 === g.type ? e.op(f) : 1 === g.type ? 1 === f.type ? e.update(this.component.hd(g.delta, f.delta)) : Um(e, an(this, f.Cc, g), f.xc) : Um(e, g.Cc, $m(this, g.xc, f));
                            else throw Error(`length mismatch: ${a} ; ${b}`)
                        }
                        c.finish();
                        d.finish();
                        return e.ba()
                    }
                    transform(a, b) {
                        if (!a.xa.length || !b.xa.length) return [b, a];
                        const c = this.ic(),
                            d = this.ic(),
                            e = a.hb(b.pre, 0),
                            f = b.hb(a.pre, 0);
                        for (;;) {
                            let h = e.head;
                            var g = f.head;
                            if (!h && !g) break;
                            h && 2 === h.type ? (h = Vm(e), g = void 0) : g && 2 === g.type ? (h = void 0,
                                g = Vm(f)) : h && g && (g = Math.min(h.bq, g.bq), h = Wm(e, g), g = Wm(f, g));
                            if (h && 2 === h.type) d.M(h.rn), c.op(h);
                            else if (g && 2 === g.type) d.op(g), c.M(g.rn);
                            else if (h && g) {
                                if (0 === h.type || 0 === g.type) d.op(g), c.op(h);
                                else if (3 === h.type) d.M(h.rn), Um(c, $m(this, h.Cc, g), h.xc);
                                else if (3 === g.type) Um(d, $m(this, g.Cc, h), g.xc), c.M(g.rn);
                                else {
                                    const [k, l] = this.component.transform(h.delta, g.delta);
                                    d.update(k);
                                    c.update(l)
                                }
                            } else throw Error(`length mismatch (${a} x ${b})`)
                        }
                        e.finish();
                        f.finish();
                        return [d.ba(), c.ba()]
                    }
                    Sd(a) {
                        if (!a.xa.length) return a;
                        const b = this.ic();
                        for (const c of a.xa) switch (c.type) {
                            case 0:
                                b.M(c.length);
                                break;
                            case 1:
                                b.update(this.component.Sd(c.delta));
                                break;
                            case 2:
                                a = c.state;
                                2 === a.type ? b.M(a.length) : b.Mp(a.state);
                                break;
                            case 3:
                                a = c.Cc;
                                const d = c.xc;
                                2 === a.type && 2 === d.type ? b.M(a.length) : Um(b, d, a);
                                break;
                            default:
                                throw new v(c);
                        }
                        return b.ba()
                    }
                    identity() {
                        return rp
                    }
                    apply(a, b) {
                        const c = this.Kd(),
                            d = a.hb(b.pre);
                        for (a = b.hb(a.length, 0);;) {
                            b = d.head;
                            var e = a.head;
                            if (!e) break;
                            2 === e.type ? (b = void 0, e = Vm(a)) : b && (e = Math.min(b.length, e.bq), b = d.Jm(e),
                                e = Wm(a, e));
                            if (2 === e.type) c.region(e.state);
                            else if (b) c.region($m(this, b, e));
                            else break
                        }
                        d.finish();
                        a.finish();
                        return c.ba()
                    }
                    Ld(a, b) {
                        const c = this.Kd(),
                            d = a.hb(b.post);
                        for (a = b.hb(0, a.length);;) {
                            b = d.head;
                            var e = a.head;
                            if (!b || !e) break;
                            2 === e.type ? (b = d.Jm(e.rn), e = Vm(a)) : (e = Math.min(b.length, e.rn), b = d.Jm(e), e = Xm(a, e));
                            if (2 === e.type) Zm(this, b, e.state);
                            else if (b) c.region(an(this, b, e));
                            else break
                        }
                        d.finish();
                        a.finish();
                        return c.ba()
                    }
                    ld(a, b) {
                        if (a === b) return !0;
                        if (a.length !== b.length) return !1;
                        a = a.hb();
                        b = b.hb();
                        let c =
                            a.head,
                            d = b.head;
                        for (; c || d;) {
                            if (!c || !d || !bn(this, c, d)) return !1;
                            a.Jm(c.length);
                            b.Jm(d.length);
                            c = a.head;
                            d = b.head
                        }
                        return !0
                    }
                    equals(a) {
                        return this === a || a instanceof __c.tp && this.component.equals(a.component)
                    }
                };
                __c.tp.prototype.Jh = ba(27);
                __c.up = new __c.tp(dp);
                Jn = __c.Jn = {
                    item: (a) => {
                        throw new v(a)
                    }
                };
                var Vka = class {
                        constructor(a, b, c) {
                            this.pre = a;
                            this.post = b;
                            this.xa = c
                        }
                        forEach(a, b = this.pre, c = this.post) {
                            this.xa.forEach((d) => {
                                switch (d.type) {
                                    case 0:
                                        a.M && a.M(d.V);
                                        break;
                                    case 2:
                                        a.Ka && a.Ka(d.V);
                                        break;
                                    case 1:
                                        a.delete && a.delete(d.V);
                                        break;
                                    default:
                                        throw new v(d);
                                }
                            });
                            (b = Math.max(0, b - this.pre, c - this.post)) && a.M && a.M(b)
                        }
                        static builder() {
                            return new vp
                        }
                    },
                    vp = class {
                        constructor() {
                            this.xa = [];
                            this.post = this.pre = 0;
                            this.mode = void 0;
                            this.pH = 0;
                            this.DL = "";
                            this.YE = 0
                        }
                        M(a) {
                            t(0 <= a);
                            0 < a && (this.xv(0), this.pH += a);
                            return this
                        }
                        Ka(a) {
                            0 <
                                a.length && (this.xv(2), this.DL += a);
                            return this
                        }
                        delete(a) {
                            0 < a && (this.xv(1), this.YE += a);
                            return this
                        }
                        xv(a) {
                            if (this.mode !== a) {
                                switch (this.mode) {
                                    case 0:
                                        var b = this.xa,
                                            c = b.push,
                                            d = this.pH;
                                        t(0 < d);
                                        c.call(b, {
                                            type: 0,
                                            V: d
                                        });
                                        this.pre += this.pH;
                                        this.post += this.pH;
                                        this.pH = 0;
                                        break;
                                    case 2:
                                        b = this.xa;
                                        c = b.push;
                                        d = this.DL;
                                        t(0 < d.length);
                                        c.call(b, {
                                            type: 2,
                                            V: d
                                        });
                                        this.post += this.DL.length;
                                        this.DL = "";
                                        break;
                                    case 1:
                                        b = this.xa;
                                        c = b.push;
                                        d = this.YE;
                                        t(0 < d);
                                        c.call(b, {
                                            type: 1,
                                            V: d
                                        });
                                        this.pre += this.YE;
                                        this.post += this.YE;
                                        this.YE =
                                            0;
                                        break;
                                    case void 0:
                                        break;
                                    default:
                                        throw new v(this.mode);
                                }
                                this.mode = a
                            }
                        }
                        ba() {
                            0 !== this.mode && this.xv(void 0);
                            return new Vka(this.pre, this.post, this.xa)
                        }
                    };
                var wp = class extends to {
                    constructor() {
                        super();
                        this.zZ = void 0
                    }
                    K9(a) {
                        ja(!this.zZ);
                        this.zZ = a
                    }
                    get target() {
                        return u(this.zZ)
                    }
                    isIdentity(a) {
                        return this.target.isIdentity(a)
                    }
                    hd(a, b) {
                        return this.target.hd(a, b)
                    }
                    transform(a, b) {
                        return this.target.transform(a, b)
                    }
                    Sd(a) {
                        return this.target.Sd(a)
                    }
                    identity(a) {
                        return this.target.identity(a)
                    }
                    apply(a, b) {
                        return this.target.apply(a, b)
                    }
                    Ld(a, b) {
                        return this.target.Ld(a, b)
                    }
                    ld(a, b) {
                        return this.target.ld(a, b)
                    }
                    equals(a) {
                        return this === a || a instanceof wp && this.target.equals(a.target)
                    }
                };
                var Wka = class extends ko {
                    constructor() {
                        super();
                        this._type = void 0;
                        this.domain = new wp
                    }
                    K9(a) {
                        ja(!this._type);
                        this._type = a;
                        this.domain.K9(a.domain)
                    }
                    get type() {
                        return u(this._type)
                    }
                    Fg(a) {
                        return this.type.Fg(a)
                    }
                    connect(a, b) {
                        return this.type.connect(a, b)
                    }
                    mb(a) {
                        return this.type.mb(a)
                    }
                    destroy(a, b) {
                        this.type.destroy(a, b)
                    }
                };
                var xp = class extends to {
                    constructor(a) {
                        super();
                        this.ue = a;
                        this.id = {}
                    }
                    static of (a) {
                        return new xp(a)
                    }
                    update(a, b) {
                        const c = {};
                        u(this.ue[a]).isIdentity(b) || (c[a] = b);
                        return c
                    }
                    identity() {
                        return this.id
                    }
                    isIdentity(a) {
                        return a === this.id || Object.entries(a).every(([b, c]) => null == c || this.ue[b].isIdentity(c))
                    }
                    Sd(a) {
                        const b = {};
                        var c = Object.keys(a);
                        if (!c.length) return a;
                        for (const d of c) {
                            c = this.ue[d];
                            const e = c.Sd(a[d]);
                            c.isIdentity(e) || (b[d] = e)
                        }
                        return b
                    }
                    hd(a, b) {
                        const c = {};
                        var d = Object.keys(a),
                            e = Object.keys(b);
                        if (!d.length) return b;
                        if (!e.length) return a;
                        for (const f of new Set([...d, ...e])) {
                            e = a[f];
                            const g = b[f];
                            null != e && null != g ? (d = this.ue[f], e = d.hd(e, g), d.isIdentity(e) || (c[f] = e)) : null != e ? c[f] = e : null != g && (c[f] = g)
                        }
                        return c
                    }
                    transform(a, b) {
                        const c = {},
                            d = {};
                        var e = Object.keys(a),
                            f = Object.keys(b);
                        if (!e.length || !f.length) return [b, a];
                        for (const g of new Set([...e, ...f]))
                            if (e = a[g], f = b[g], null != e && null != f) {
                                const h = this.ue[g],
                                    [k, l] = h.transform(e, f);
                                h.isIdentity(l) || (c[g] = l);
                                h.isIdentity(k) || (d[g] = k)
                            } else null != e ? c[g] =
                                e : null != f && (d[g] = f);
                        return [d, c]
                    }
                    apply(a, b) {
                        var c = Object.keys(b);
                        if (!c.length) return a;
                        const d = Object.assign({}, a);
                        for (const e of c) c = b[e], null != c && (d[e] = this.ue[e].apply(a[e], c));
                        return d
                    }
                    Ld(a, b) {
                        var c = Object.keys(b);
                        if (!c.length) return a;
                        const d = Object.assign({}, a);
                        for (const e of c) c = b[e], null != c && (d[e] = this.ue[e].Ld(a[e], c));
                        return d
                    }
                    ld(a, b) {
                        return a === b || Object.keys(this.ue).every((c) => this.ue[c].ld(a[c], b[c]))
                    }
                    equals(a) {
                        return this === a ? !0 : a instanceof xp ? Object.keys(this.ue).length === Object.keys(a.ue).length &&
                            Object.keys(this.ue).every((b) => b in a.ue && this.ue[b].equals(a.ue[b])) : !1
                    }
                };
                var Xka = class extends yo {
                        constructor(a, b, c, d, e) {
                            super();
                            this.domain = a;
                            this.Goa = b;
                            this.dW = c;
                            this.GQ = d;
                            a = {};
                            const f = {},
                                g = {},
                                h = {},
                                k = {};
                            for (const l in b) g[l] = Hl(b[l], e[l]);
                            for (const l in c) {
                                const {
                                    Tp: m,
                                    yn: n,
                                    mutable: q
                                } = Yl(c[l], e[l]);
                                h[l] = q;
                                a[l] = m;
                                f[l] = n.pipe(dm((r) => ({
                                    [l]: r
                                }))).subscribe(this.yn)
                            }
                            for (const l in d) k[l] = Hl(d[l], e[l]);
                            this.values = g;
                            this.rb = h;
                            this.attributes = go.object(k, {}, {
                                deep: !1
                            });
                            this.Rla = a;
                            this.mHa = f
                        }
                        mb() {
                            const a = {};
                            for (const b in this.Goa) a[b] = this.values[b];
                            for (const b in this.dW) a[b] =
                                this.dW[b].mb(this.rb[b]);
                            for (const b in this.GQ) a[b] = this.attributes[b];
                            return a
                        }
                        destroy(a) {
                            const b = this.Goa,
                                c = this.dW,
                                d = this.GQ;
                            for (const e in b) Il(b[e], this.values[e], a[e]);
                            for (const e in c) Zl(c[e], a[e], this.mHa[e], this.Rla[e], this.rb[e]);
                            for (const e in d) Il(d[e], this.attributes[e], a[e])
                        }
                        Gv(a) {
                            for (const f in a)
                                if (null != a[f])
                                    if (f in this.dW) this.Rla[f].next(a[f]);
                                    else if (f in this.GQ) {
                                var b = this.attributes;
                                a: {
                                    var c = this.GQ[f];
                                    var d = this.attributes[f],
                                        e = a[f];
                                    if (null == e) c = d;
                                    else switch (e.type) {
                                        case 0:
                                            c =
                                                d;
                                            break a;
                                        case 1:
                                            Il(c, d, e.Cc);
                                            Hl(c, e.xc);
                                            c = e.xc;
                                            break a;
                                        default:
                                            throw new v(e);
                                    }
                                }
                                b[f] = c
                            }
                        }
                        setAttribute(a, b) {
                            Wl(this, {
                                [a]: new wo(this.attributes[a], b)
                            });
                            return !0
                        }
                    },
                    oka = class extends ko {
                        constructor(a, b, c) {
                            super();
                            this.values = a;
                            this.rb = b;
                            this.attributes = c;
                            var d = xp,
                                e = d.of,
                                f = Object,
                                g = f.assign,
                                h = this.values;
                            const k = {};
                            for (var l in h) k[l] = new uo(h[l].Dj);
                            h = Gl(this.rb);
                            l = this.attributes;
                            const m = {};
                            for (const n in l) m[n] = new xo(new uo(l[n].Dj));
                            this.domain = e.call(d, g.call(f, {}, k, h, m));
                            a = [b, c, a];
                            b = new Set;
                            for (const n of a)
                                for (const q in n) t(!b.has(q), "duplicate key: \"{}\"", q), b.add(q)
                        }
                        Fg(a) {
                            a = new Xka(this.domain, this.values, this.rb, this.attributes, a);
                            return new Proxy({
                                Jq: a
                            }, this)
                        }
                        connect(a, b) {
                            return a.Jq.connect(b)
                        }
                        mb(a) {
                            return a.Jq.mb()
                        }
                        destroy(a, b) {
                            a.Jq.destroy(b)
                        }
                        get(a, b) {
                            return b in this.values ? a.Jq.values[b] : b in this.rb ? a.Jq.rb[b] : b in this.attributes ? a.Jq.attributes[b] : a[b]
                        }
                        set(a, b, c) {
                            if ("string" !== typeof b || !(b in this.attributes)) return !1;
                            Hl(this.attributes[b], c);
                            return a.Jq.setAttribute(b,
                                c)
                        }
                        has(a, b) {
                            return b in this.values || b in this.rb || b in this.attributes
                        }
                        ownKeys() {
                            return [...Object.keys(this.values), ...Object.keys(this.rb), ...Object.keys(this.attributes)]
                        }
                        getOwnPropertyDescriptor(a, b) {
                            if (b in this.values) return Object.getOwnPropertyDescriptor(a.Jq.values, b);
                            if (b in this.rb) return Object.getOwnPropertyDescriptor(a.Jq.rb, b);
                            if (b in this.attributes) return Object.getOwnPropertyDescriptor(a.Jq.attributes, b)
                        }
                    };
                var Gp, gn, jn, ska, Ip, Cp, qn, Ep, Jp, Dp, yp, ala, Hp, $ka, Bp, Yka, Zka;
                Gp = class extends to {
                    constructor() {
                        super()
                    }
                    ic(a) {
                        const b = new yp;
                        return a ? new Yka(b, a) : b
                    }
                    Jp(a, b, c) {
                        a = new __c.zp(a, b);
                        return c ? new __c.Ap(a, c) : a
                    }
                    Kd(a) {
                        const b = new Bp;
                        return a ? new Zka(b, a) : b
                    }
                    EK() {
                        return Cp
                    }
                    id() {
                        return Dp
                    }
                    isIdentity(a) {
                        return a === Dp || !a.xa.length
                    }
                    hd(a, b) {
                        if (!a.xa.length) return b;
                        if (!b.xa.length) return a;
                        const c = this.ic(),
                            d = a.hb(0, b.pre);
                        a = b.hb(a.post, 0);
                        b = d.next;
                        for (var e = a.next; e;) {
                            if (e.type === Ep) b = e.length, e = a.cr(b), e = on(d.Zh, a.Zh, {}, e), c.Ka(b, e);
                            else if (b) {
                                if (b.type === Ep) {
                                    b = Math.min(b.length,
                                        e.length);
                                    e = d.cr(b);
                                    var f = a.fl(b);
                                    e = on(d.Zh, a.Zh, e, f);
                                    c.Ka(b, e)
                                } else b = Math.min(b.length, e.length), e = d.fl(b), f = a.fl(b), e = on(d.Zh, a.Zh, e, f), c.M(b, e);
                            } else throw Error("length mismatch");
                            b = d.next;
                            e = a.next
                        }
                        d.finish();
                        a.finish();
                        return c.ba()
                    }
                    transform(a, b) {
                        if (!a.xa.length || !b.xa.length) return [b, a];
                        var c = a.hb(b.pre, 0);
                        const d = b.hb(a.pre, 0);
                        var e = this.ic();
                        const f = this.ic();
                        for (var g = c.next, h = d.next; g || h;) {
                            if (g && g.type === Ep) {
                                g = g.length;
                                h = c.cr(g);
                                h = pn(c.Zh, d.Zh, h, {});
                                const [k, l] = h;
                                f.M(g, k);
                                e.Ka(g, l)
                            } else if (h &&
                                h.type === Ep) {
                                g = h.length;
                                h = d.cr(g);
                                h = pn(c.Zh, d.Zh, {}, h);
                                const [k, l] = h;
                                f.Ka(g, k);
                                e.M(g, l)
                            } else if (g && h) {
                                g = Math.min(g.length, h.length);
                                h = c.fl(g);
                                const k = d.fl(g);
                                h = pn(c.Zh, d.Zh, h, k);
                                const [l, m] = h;
                                f.M(g, l);
                                e.M(g, m)
                            } else throw Error(`unreachable case: ${g} x ${h}`);
                            g = c.next;
                            h = d.next
                        }
                        c.finish();
                        d.finish();
                        c = f.ba();
                        e = e.ba();
                        rl(c.post - c.pre, b.post - b.pre);
                        rl(e.post - e.pre, a.post - a.pre);
                        return [c, e]
                    }
                    Sd(a) {
                        if (!a.xa.length) return a;
                        const b = this.ic();
                        for (const c of a.xa) switch (c.type) {
                            case qn:
                                b.M(c.length,
                                    nn(c.bl));
                                break;
                            case Ep:
                                b.M(c.length, nn(c.bl));
                                break;
                            default:
                                throw new v(c);
                        }
                        return b.ba()
                    }
                    identity() {
                        return Dp
                    }
                    apply(a, b) {
                        if (!b.xa.length) return a;
                        a = new Fp("apply", a, b.pre);
                        b.forEach(a);
                        return a.result()
                    }
                    Ld(a, b) {
                        if (!b.xa.length) return a;
                        a = new Fp("unapply", a, b.post);
                        b.forEach(a);
                        return a.result()
                    }
                    ld(a, b) {
                        if (a === b) return !0;
                        if (a.length !== b.length) return !1;
                        a = a.hb();
                        b = b.hb();
                        let c = a.head,
                            d = b.head;
                        for (; c || d;) {
                            if (!c || !d) return !1;
                            switch (c.type) {
                                case jn:
                                    if (d.type !== jn || c.length !== d.length) return !1;
                                    a.Jm(c.length);
                                    b.Jm(d.length);
                                    break;
                                case gn:
                                    if (d.type !== gn || !pka(c.Ig, d.Ig)) return !1;
                                    tn(a);
                                    tn(b);
                                    break;
                                default:
                                    throw new v(c);
                            }
                            c = a.head;
                            d = b.head
                        }
                        return !0
                    }
                    equals(a) {
                        return this === a || a instanceof Gp
                    }
                };
                gn = 0;
                jn = 1;
                ska = hn({}, {});
                Ip = class {
                    constructor(a, b) {
                        this.items = a;
                        this.length = b;
                        a = a.length ? a[a.length - 1] : void 0;
                        t(!a || a.type !== jn)
                    }
                    hb(a) {
                        return new Hp(this, a)
                    }
                    cursor(a, b) {
                        return new $ka(this, a, b)
                    }
                    forEach(a, b) {
                        var {
                            qL: c,
                            Nc: d
                        } = b;
                        for (const e of this.items) switch (e.type) {
                            case gn:
                                c && c(e.fg, e.Ig);
                                break;
                            case jn:
                                d && d(e.length);
                                break;
                            default:
                                throw new v(e);
                        }(a = Math.max(0, a - this.length)) && d && d(a)
                    }
                    map(a, b) {
                        var {
                            qL: c,
                            Nc: d
                        } = b;
                        b = this.items.map((e) => {
                            switch (e.type) {
                                case gn:
                                    return c(e.fg, e.Ig);
                                case jn:
                                    return d(e.length);
                                default:
                                    throw new v(e);
                            }
                        });
                        (a = Math.max(0, a - this.length)) && b.push(d(a));
                        return b
                    }
                    reduce(a, b) {
                        var {
                            qL: c,
                            Nc: d
                        } = a;
                        return this.items.reduce((e, f) => {
                            switch (f.type) {
                                case gn:
                                    return c ? c(e, f.fg, f.Ig) : e;
                                case jn:
                                    return d ? d(e, f.length) : e;
                                default:
                                    throw new v(f);
                            }
                        }, b)
                    }
                    slice(a, b) {
                        t(0 <= a && a <= b, "invalid range: [{}, {})", a, b);
                        var c = this.length;
                        if (0 === a && b >= c) return this;
                        if (a === b || a >= c) return Cp;
                        const d = new Bp;
                        c = this.cursor(b);
                        c.move(a);
                        d.attrs(c.vj, c.Zu);
                        c.move(b - a, {
                            cells: (e, f, g, h) => d.attrs(f, h).Nc(e)
                        });
                        return d.ba()
                    }
                    toString() {
                        return `${this.items.map((a)=>
{switch(a.type){case gn:const b=[];for(const c of Object.entries(a.Ig)){const[d,e]=c;b.push(`${d}:${null!=e?`<${e}|`:""}`)}return`
                        G {
                            $ {
                                b.join(",")
                            }
                        }
                        `;case jn:return`
                        R$ {
                            a.length
                        }
                        `;default:throw new v(a);}}).join("")}`
                    }
                };
                Cp = new Ip([], 0);
                qn = 0;
                Ep = 1;
                Jp = class {
                    constructor(a, b, c) {
                        this.xa = a;
                        this.pre = b;
                        this.post = c
                    }
                    hb(a, b) {
                        return new ala(this, a, b)
                    }
                    forEach(a) {
                        for (const b of this.xa) switch (b.type) {
                            case qn:
                                a.M(b.length, b.bl);
                                break;
                            case Ep:
                                a.Ka(b.length, b.bl);
                                break;
                            default:
                                throw new v(b);
                        }
                    }
                    map(a) {
                        return this.xa.map((b) => {
                            switch (b.type) {
                                case qn:
                                    return a.M(b.length, b.bl);
                                case Ep:
                                    return a.Ka(b.length, b.bl);
                                default:
                                    throw new v(b);
                            }
                        })
                    }
                    equals(a) {
                        if (this === a) return !0;
                        if (this.pre !== a.pre || this.post !== a.post || this.xa.length !== a.xa.length) return !1;
                        for (let b =
                                0; b < this.xa.length; b++) {
                            const c = this.xa[b],
                                d = a.xa[b];
                            if (c !== d) switch (c.type) {
                                case qn:
                                case Ep:
                                    if (c.type !== d.type || c.length !== d.length || !rka(c.bl, d.bl)) return !1;
                                    break;
                                default:
                                    throw new v(c);
                            }
                        }
                        return !0
                    }
                    toString() {
                        return `[${this.xa.map((a)=>{let b;switch(a.type){case qn:b="R";break;case Ep:b="I";break;default:throw new v(a);}const c=[];__c.mn(a.bl,(e,f)=>{({r:e}=e);e?c.push(` + "${f.toString()}": $ {
                            null != e.so ? `"${e.so}"` : "null"
                        } => $ {
                            null != e.sn ? `"${e.sn}"` : "null"
                        }
                        `):c.push(` - "${f.toString()}"
                        `)});const d=
c.length?` {
                            $ {
                                c.join(",")
                            }
                        }
                        `:"";return`
                        $ {
                            b
                        }
                        $ {
                            a.length
                        }
                        $ {
                            d
                        }
                        `}).toString()}]`
                    }
                };
                Dp = new Jp([], 0, 0);
                yp = class {
                    constructor() {
                        this.xa = [];
                        this.open = {};
                        this.WX = {};
                        this.post = this.pre = 0
                    }
                    append(a, b) {
                        t(0 <= b, "{} < 0", b);
                        if (!b) return this;
                        var c = this.WX;
                        this.op && this.op.type === a && !dn(c).length ? this.op = Object.assign({}, this.op, {
                            length: this.op.length + b
                        }) : (null != this.op && this.xa.push(this.op), this.op = {
                            type: a,
                            length: b,
                            bl: c
                        }, this.WX = {});
                        for (const d of Object.entries(c)) {
                            const [e, f] = d;
                            (c = f && f.r) ? this.open[e] = c: delete this.open[e]
                        }
                        switch (a) {
                            case qn:
                                this.pre += b;
                                this.post += b;
                                break;
                            case Ep:
                                this.post += b;
                                break;
                            default:
                                throw new v(a);
                        }
                        return this
                    }
                    change(a, b) {
                        if (null == a) return this;
                        if ("object" === typeof a)
                            for (const c of Object.entries(a)) {
                                const [d, e] = c;
                                this.change(d, e && e.r)
                            } else ln(this.open[a], b) ? delete this.WX[a] : this.WX[a] = {
                                r: b
                            };
                        return this
                    }
                    M(a, b, c) {
                        this.change(b, c);
                        return this.append(qn, a)
                    }
                    Ka(a, b, c) {
                        this.change(b, c);
                        return this.append(Ep, a)
                    }
                    ba() {
                        const a = this.op;
                        null != a && (!Object.keys(this.open).length && a.type === qn && [...Object.values(a.bl)].every((b) => !b || !b.r) ? (this.pre -= a.length, this.post -= a.length) : this.xa.push(a), this.op = void 0);
                        return new Jp(this.xa, this.pre, this.post)
                    }
                };
                ala = class {
                    constructor(a, b, c) {
                        this.i = 0;
                        this.cQ = {};
                        this.input = a.xa;
                        this._next = this.i < this.input.length ? this.input[this.i++] : void 0;
                        this.$H = Math.max(0, (void 0 === b ? 0 : b) - a.pre, (void 0 === c ? 0 : c) - a.post);
                        !this._next && this.$H && (this._next = rn(this.$H), this.$H = 0)
                    }
                    get Zh() {
                        return this.cQ
                    }
                    get next() {
                        return this._next
                    }
                    LJ(a, b) {
                        const c = u(this._next);
                        ja(c.type === a, "{} != {}", c.type, a);
                        t(0 < b && b <= c.length, "{} \u2209 ({}, {}]", b, 0, c.length);
                        for (const d of Object.entries(c.bl)) {
                            const [e, f] = d, g = f && f.r;
                            g ? this.cQ[e] =
                                g : delete this.cQ[e]
                        }
                        b < c.length ? this._next = {
                            type: a,
                            length: c.length - b,
                            bl: {}
                        } : (this._next = this.i < this.input.length ? this.input[this.i++] : void 0, !this._next && this.$H && (this._next = rn(this.$H, tl(this.cQ, () => ({
                            r: void 0
                        }))), this.$H = 0));
                        return c.bl
                    }
                    fl(a) {
                        return this.LJ(qn, a)
                    }
                    cr(a) {
                        return this.LJ(Ep, a)
                    }
                    finish() {
                        ja(!this._next)
                    }
                };
                __c.zp = class {
                    constructor(a, b) {
                        this.sp = new yp;
                        this.$I = {};
                        this.aJ = {};
                        this.GO = new Set;
                        this.HO = {};
                        this.ZX = {};
                        this.right = a.cursor(b, {
                            cells: (c, d, e, f, g) => this.sp.M(c, sn(this, d, f, e, g))
                        })
                    }
                    M(a) {
                        this.right.move(a);
                        return this
                    }
                    Ka(a) {
                        const b = sn(this, {}, {}, this.right.vj, this.right.Zu);
                        this.sp.Ka(a, b);
                        return this
                    }
                    open(a, b, c) {
                        this.GO.delete(a);
                        a in this.aJ && this.aJ[a] === c || (this.HO[a] = b, this.ZX[a] = c);
                        return this
                    }
                    close(a) {
                        delete this.HO[a];
                        delete this.ZX[a];
                        a in this.$I && this.GO.add(a);
                        return this
                    }
                    Su(a, b) {
                        en(a, b,
                            (c, d, e) => this.open(c, d, e))
                    }
                    Nj(a) {
                        for (const b of dn(a)) this.close(b);
                        return this
                    }
                    ba() {
                        return this.sp.ba()
                    }
                };
                __c.zp.prototype.nJ = ba(29);
                Hp = class {
                    constructor(a, b) {
                        this.i = 0;
                        this.uZ = {};
                        this.yZ = {};
                        b = Math.max(0, (void 0 === b ? 0 : b) - a.length);
                        this.length = a.length + b;
                        this.input = b ? [...a.items, kn(b)] : a.items;
                        this.ed = this.input.length ? this.input[this.i++] : void 0
                    }
                    get head() {
                        return this.ed
                    }
                    get vj() {
                        return this.uZ
                    }
                    get Zu() {
                        return this.yZ
                    }
                    Jm(a) {
                        var b = this.ed;
                        if (!b || b.type !== jn) throw Error(`expected cell, found: ${b&&b.type}`);
                        b = b.length;
                        a = Math.min(a, b);
                        this.ed = a < b ? kn(b - a) : this.input[this.i++];
                        return a
                    }
                    apply(a) {
                        en(a.fg, a.Ig, (b, c, d) => {
                            null != c && null !=
                                d ? (this.uZ[b] = c, this.yZ[b] = d) : (delete this.uZ[b], delete this.yZ[b])
                        })
                    }
                    finish() {
                        ja(!this.ed)
                    }
                };
                $ka = class {
                    constructor(a, b, c) {
                        this.rG = c;
                        this.dE = 0;
                        this.hb = new Hp(a, b)
                    }
                    get Gy() {
                        return this.hb.length - this.dE
                    }
                    get vj() {
                        return this.hb.vj
                    }
                    get Zu() {
                        return this.hb.Zu
                    }
                    move(a, b) {
                        var c = this.rG;
                        b = c ? b ? {
                            cells: Om(c.cells, b.cells)
                        } : c : b;
                        t(0 <= a, "{} < 0", a);
                        a = this.dE + a;
                        for (t(a <= this.hb.length, "{} > {}", a, this.hb.length); this.dE < a;) {
                            c = tn(this.hb);
                            const d = this.hb.Jm(a - this.dE);
                            this.dE += d;
                            b && b.cells && b.cells(d, c.fg, this.vj, c.Ig, this.Zu)
                        }
                    }
                    finish() {
                        tn(this.hb);
                        this.hb.finish()
                    }
                };
                Bp = class {
                    constructor() {
                        this.items = [];
                        this.as = {};
                        this.ss = {};
                        this.length = this.NO = 0;
                        this.fg = {};
                        this.Ig = {}
                    }
                    Yi(a, b, c) {
                        this.ss[a] !== c ? (this.fg[a] = b, this.Ig[a] = c) : (delete this.fg[a], delete this.Ig[a]);
                        return this
                    }
                    attrs(a, b) {
                        en(a, b, (c, d, e) => this.Yi(c, d, e));
                        return this
                    }
                    Nc(a) {
                        0 < a && (Object.keys(this.fg).length && (this.length && (this.items.push(kn(this.length)), this.length = 0), this.items.push(hn(this.fg, this.Ig)), en(this.fg, this.Ig, (b, c, d) => {
                                null != c ? (this.as[b] = c, this.ss[b] = d) : (delete this.as[b], delete this.ss[b])
                            }),
                            this.fg = {}, this.Ig = {}), this.length += a, this.NO += a);
                        return this
                    }
                    append(a, b) {
                        a.forEach(void 0 === b ? 0 : b, {
                            qL: (c, d) => this.attrs(c, d),
                            Nc: (c) => this.Nc(c)
                        });
                        return this
                    }
                    ba() {
                        for (const a of dn(this.as)) this.Yi(a, void 0, void 0);
                        for (const a of dn(this.fg)) this.Yi(a, void 0, void 0);
                        Object.keys(this.fg).length ? (ja(!!this.length, "attributes still open: {}", this.fg), this.items.push(kn(this.length)), this.items.push(hn(this.fg, this.Ig)), this.length = 0, this.fg = {}, this.Ig = {}) : this.NO -= this.length;
                        return new Ip(this.items,
                            this.NO)
                    }
                };
                Yka = class {
                    constructor(a, b) {
                        this.builder = a;
                        this.mF = b
                    }
                    M(a, b, c) {
                        if (null == b) return this.builder.M(a), this;
                        "object" === typeof b ? this.builder.M(a, vn(this, b)) : this.builder.M(a, b, un(this, b, c));
                        return this
                    }
                    Ka(a, b, c) {
                        if (null == b) return this.builder.Ka(a), this;
                        "object" === typeof b ? this.builder.Ka(a, vn(this, b)) : this.builder.Ka(a, b, un(this, b, c));
                        return this
                    }
                    change(a, b) {
                        if (null == a) return this;
                        "object" === typeof a ? this.builder.change(vn(this, a)) : this.builder.change(a, un(this, a, b));
                        return this
                    }
                    ba() {
                        return this.builder.ba()
                    }
                };
                Zka = class {
                    constructor(a, b) {
                        this.builder = a;
                        this.mF = b
                    }
                    encode(a, b) {
                        return null != b ? this.mF.encode(a, b) : void 0
                    }
                    Yi(a, b) {
                        this.builder.Yi(a, b, this.encode(a, b));
                        return this
                    }
                    attrs(a) {
                        this.builder.attrs(a, tl(a, (b, c) => this.encode(c, b)));
                        return this
                    }
                    Nc(a) {
                        this.builder.Nc(a);
                        return this
                    }
                    append(a, b) {
                        this.builder.append(a, b);
                        return this
                    }
                    ba() {
                        return this.builder.ba()
                    }
                };
                __c.Ap = class {
                    constructor(a, b) {
                        this.UA = a;
                        this.mF = b
                    }
                    encode(a, b) {
                        return null != b ? this.mF.encode(a, b) : void 0
                    }
                    M(a) {
                        this.UA.M(a);
                        return this
                    }
                    Ka(a) {
                        this.UA.Ka(a);
                        return this
                    }
                    open(a, b, c) {
                        this.UA.open(a, b, null != c ? c : this.encode(a, b));
                        return this
                    }
                    close(a) {
                        this.UA.close(a);
                        return this
                    }
                    Su(a) {
                        this.UA.Su(a, tl(a, (b, c) => this.encode(c, b)))
                    }
                    Nj(a) {
                        this.UA.Nj(a);
                        return this
                    }
                    ba() {
                        return this.UA.ba()
                    }
                };
                __c.Ap.prototype.nJ = ba(28);
                var Fp = class {
                    constructor(a, b, c) {
                        this.mode = a;
                        this.sp = new Bp;
                        this.open = new Set;
                        this.laa = !1;
                        this.hb = b.cursor(c, {
                            cells: (d, e, f, g) => {
                                en(e, g, (h, k, l) => {
                                    this.open.has(h) || this.sp.Yi(h, k, l)
                                });
                                this.laa || this.sp.Nc(d)
                            }
                        })
                    }
                    M(a, b) {
                        b = void 0 === b ? {} : b;
                        t(0 < a);
                        wn(this, b);
                        this.hb.move(a);
                        return this
                    }
                    Ka(a, b) {
                        b = void 0 === b ? {} : b;
                        t(0 < a);
                        wn(this, b);
                        "apply" === this.mode ? this.sp.Nc(a) : (this.laa = !0, this.hb.move(a), this.laa = !1);
                        return this
                    }
                    result() {
                        for (const a of this.open) this.sp.Yi(a, this.hb.vj[a], this.hb.Zu[a]);
                        this.open.clear();
                        this.hb.move(this.hb.Gy);
                        this.hb.finish();
                        return this.sp.ba()
                    }
                };
                var An, Kp, Lp, bla, zn, Mp, cla, Np, Op, ela, dla;
                An = class {
                    constructor(a, b) {
                        this.from = a;
                        this.to = b
                    }
                    static from(a) {
                        if (a instanceof An) return a;
                        if (Array.isArray(a)) {
                            const [b, c] = a;
                            return new An(b, c)
                        }
                        return new An(a.from, a.to)
                    }
                    toString() {
                        return `[${this.from},${this.to}]`
                    }
                };
                Kp = class {
                    constructor(a = new Map) {
                        this.qc = a
                    }
                    get isEmpty() {
                        return !this.qc.size
                    }
                    slice(a, b) {
                        t(0 <= a && a <= b, "invalid range: [{}, {})", a, b);
                        const c = new Map;
                        for (const [e, f] of this.qc) {
                            var d = b < f.from || f.to < a ? void 0 : new An(Math.max(f.from, a) - a, Math.min(f.to, b) - a);
                            d && c.set(e, d)
                        }
                        return new Kp(c)
                    }
                    toString() {
                        return [...this.qc].map(([a, b]) => `"${a}":${b}`).join(",")
                    }
                };
                Lp = new Kp;
                bla = class {
                    constructor() {
                        this.dJ = new Map
                    }
                    range(a, b) {
                        b ? this.dJ.set(a, An.from(b)) : this.dJ.delete(a);
                        return this
                    }
                    qc(a) {
                        a.forEach((b, c) => this.dJ.set(c, An.from(b)));
                        return this
                    }
                    ba() {
                        return this.dJ.size ? new Kp(this.dJ) : Lp
                    }
                };
                zn = class {
                    constructor(a, b) {
                        this.Lu = a;
                        this.Hu = b
                    }
                    toString() {
                        return `${this.Lu||"_"}->${this.Hu||"_"}`
                    }
                };
                Mp = class {
                    constructor(a, b) {
                        this.type = a;
                        this.length = b
                    }
                    toString() {
                        return `${cla[this.type]}${this.length}`
                    }
                };
                cla = {
                    [0]: "R",
                    [1]: "I"
                };
                Np = class {
                    constructor(a, b, c, d) {
                        this.xJ = a;
                        this.qc = b;
                        this.pre = c;
                        this.post = d
                    }
                    hb(a, b) {
                        return new dla(this, a, b)
                    }
                    toString() {
                        const a = this.xJ.join(""),
                            b = [...this.qc].map(([c, d]) => `"${c}":${d}`).join(",");
                        return `{${a}|${b}}`
                    }
                };
                Op = new Np([], new Map(), 0, 0);
                ela = class {
                    constructor() {
                        this.xa = [];
                        this.xn = void 0;
                        this.post = this.pre = this.length = 0;
                        this.qc = new Map
                    }
                    append(a, b) {
                        t(0 <= b, "{} < 0", b);
                        if (!b) return this;
                        this.xn === a ? this.length += b : (null != this.xn && this.xa.push(new Mp(this.xn, this.length)), this.xn = a, this.length = b);
                        switch (a) {
                            case 0:
                                this.pre += b;
                                this.post += b;
                                break;
                            case 1:
                                this.post += b;
                                break;
                            default:
                                throw new v(a);
                        }
                        return this
                    }
                    M(a) {
                        return this.append(0, a)
                    }
                    Ka(a) {
                        return this.append(1, a)
                    }
                    createRange(a, b) {
                        return __c.Bn(this, a, void 0, b)
                    }
                    EC(a) {
                        a.forEach((b,
                            c) => this.qc.set(c, b));
                        return this
                    }
                    ba() {
                        const a = this.xn,
                            b = this.length;
                        0 === a ? (this.pre -= b, this.post -= b) : null != a && this.xa.push(new Mp(a, b));
                        return this.xa.length || this.qc.size ? new Np(this.xa, this.qc, this.pre, this.post) : Op
                    }
                };
                dla = class {
                    constructor(a, b = 0, c = 0) {
                        this.eE = this.bQ = this.i = 0;
                        this.input = (b = Math.max(0, b - a.pre, c - a.post)) ? [...a.xJ, new Mp(0, b)] : a.xJ;
                        this._next = this.i < this.input.length ? this.input[this.i++] : void 0
                    }
                    get next() {
                        return this._next
                    }
                    get J7() {
                        return this.bQ
                    }
                    get NV() {
                        return this.eE
                    }
                    get oB() {
                        return this.eE - this.bQ
                    }
                    LJ(a, b) {
                        const c = u(this._next);
                        ja(c.type === a, "{} != {}", c.type, a);
                        t(0 < b && b <= c.length, "{} \u2209 ({}, {}]", b, 0, c.length);
                        this._next = b < c.length ? new Mp(a, c.length - b) : this.i < this.input.length ?
                            this.input[this.i++] : void 0
                    }
                    fl(a) {
                        this.LJ(0, a);
                        this.bQ += a;
                        this.eE += a
                    }
                    cr(a) {
                        this.LJ(1, a);
                        this.eE += a
                    }
                    finish() {
                        ja(!this._next)
                    }
                };
                __c.Pp = class extends to {
                    constructor() {
                        super(...arguments);
                        this.EK = Lp
                    }
                    Kd() {
                        return new bla
                    }
                    ic() {
                        return new ela
                    }
                    isIdentity(a) {
                        return !a.xJ.length && !a.qc.size
                    }
                    hd(a, b) {
                        if (this.isIdentity(a)) return b;
                        if (this.isIdentity(b)) return a;
                        const c = new Map,
                            d = new Map,
                            e = new Map;
                        for (var f of Fn(a.qc, b.qc)) {
                            var g = a.qc.get(f),
                                h = b.qc.get(f);
                            g && h ? (t(xn(g.Hu, h.Lu)), e.set(f, new zn(g.Lu, h.Hu))) : g ? c.set(f, g) : h && d.set(f, h)
                        }
                        f = this.ic();
                        g = a.hb(0, b.pre);
                        a = b.hb(a.post, 0);
                        b = g.next;
                        for (h = a.next; h;) {
                            if (1 === h.type) b = h.length, En(c,
                                void 0, g.NV + a.oB, b), a.cr(b), f.Ka(b);
                            else if (b) 1 === b.type ? (b = Math.min(b.length, h.length), En(d, a.J7 - g.oB, void 0, -b), g.cr(b), a.fl(b), f.Ka(b)) : (b = Math.min(b.length, h.length), g.fl(b), a.fl(b), f.M(b));
                            else throw Error("length mismatch");
                            b = g.next;
                            h = a.next
                        }
                        g.finish();
                        a.finish();
                        f.EC(e);
                        f.EC(c);
                        f.EC(d);
                        return f.ba()
                    }
                    transform(a, b) {
                        if (this.isIdentity(a) || this.isIdentity(b)) return [b, a];
                        var c = new Map,
                            d = new Map;
                        const e = new Map;
                        for (var f of Fn(a.qc, b.qc)) {
                            var g = a.qc.get(f),
                                h = b.qc.get(f);
                            g && h ? (t(xn(g.Lu, h.Lu)),
                                e.set(f, new zn(h.Hu, g.Hu))) : g ? c.set(f, g) : h && d.set(f, h)
                        }
                        g = a.hb(b.pre, 0);
                        h = b.hb(a.pre, 0);
                        f = this.ic();
                        const k = this.ic();
                        var l = g.next;
                        let m = h.next;
                        for (; l || m;) {
                            if (l && 1 === l.type) l = l.length, En(d, h.J7 + g.oB, h.NV + g.oB, l), g.cr(l), k.M(l), f.Ka(l);
                            else if (m && 1 === m.type) l = m.length, En(c, g.J7 + h.oB, g.NV + h.oB, l), En(e, void 0, g.NV + h.oB, l), h.cr(l), k.Ka(l), f.M(l);
                            else if (l && m) l = Math.min(l.length, m.length), g.fl(l), h.fl(l), k.M(l), f.M(l);
                            else throw Error(`unreachable case: ${l} x ${m}`);
                            l = g.next;
                            m = h.next
                        }
                        g.finish();
                        h.finish();
                        d = k.EC(d).ba();
                        c = f.EC(c).EC(e).ba();
                        rl(d.post - d.pre, b.post - b.pre);
                        rl(c.post - c.pre, a.post - a.pre);
                        return [d, c]
                    }
                    Sd(a) {
                        if (!a.qc.size) return Op;
                        const b = new Map(a.qc);
                        yn(a, {
                            Ka: (c, d, e) => En(b, e, void 0, c)
                        });
                        a = __c.sl(b, (c) => new zn(c.Hu, c.Lu));
                        return new Np([], a, 0, 0)
                    }
                    id() {
                        return Op
                    }
                    identity() {
                        return Op
                    }
                    apply(a, b) {
                        if (this.isIdentity(b) || !a.qc.size && !b.qc.size) return a;
                        const c = this.Kd(),
                            d = new Map(a.qc);
                        for (const [e, f] of b.qc) t(xn(a.qc.get(e), f.Lu)), d.delete(e), c.range(e, f.Hu);
                        yn(b, {
                            Ka: (e, f, g) => Dn(d, g,
                                e)
                        });
                        return c.qc(d).ba()
                    }
                    Ld(a, b) {
                        if (this.isIdentity(b) || !a.qc.size && !b.qc.size) return a;
                        const c = this.Kd(),
                            d = new Map(a.qc);
                        for (const [e, f] of b.qc) t(xn(a.qc.get(e), f.Hu)), d.delete(e), c.range(e, f.Lu);
                        yn(b, {
                            Ka: (e, f) => Dn(d, f, -e)
                        });
                        return c.qc(d).ba()
                    }
                    ld(a, b) {
                        const c = a.qc,
                            d = b.qc;
                        return a === b || c === d ? !0 : c.size === c.size && [...c.keys()].every((e) => xn(c.get(e), d.get(e)))
                    }
                    equals(a) {
                        return this === a || a instanceof __c.Pp
                    }
                };
                __c.Pp.prototype.Jh = ba(26);
                var fla = new __c.Pp;
                var Hn, gla, Tp, hla;
                Rp = __c.Rp = class {
                    constructor(a, b, c) {
                        this.cells = a;
                        this.attrs = b;
                        this.Aa = c;
                        this.length = Math.max(a.length, b.length)
                    }
                    r4(a) {
                        return this.cells.r4(a)
                    }
                    cursor(a, b) {
                        return new __c.Qp(this, a, b)
                    }
                    forEach(a) {
                        this.cursor(0, a).Du(this.length)
                    }
                    Ei(a) {
                        return new Rp(this.cells.Ei(a), this.attrs, this.Aa)
                    }
                    slice(a, b) {
                        var c;
                        t(0 <= a && a <= b, "invalid range: [{}, {})", a, b);
                        if (0 === a && b >= this.length) return this;
                        const d = this.cells.slice(a, b),
                            e = this.attrs.slice(a, b);
                        a = null === (c = this.Aa) || void 0 === c ? void 0 : c.slice(a, b);
                        return new Rp(d,
                            e, a)
                    }
                    toString() {
                        return `${this.cells.toString()}|${this.attrs.toString()}`
                    }
                };
                __c.Sp = class {
                    constructor(a, b, c) {
                        this.Fp = a;
                        this.Ej = b;
                        this.NN = c
                    }
                    items(a) {
                        return this.tb(a)
                    }
                    tb(a) {
                        this.Fp.tb(a);
                        this.Ej.Nc(a.length);
                        return this
                    }
                    item(a) {
                        this.Fp.item(a);
                        this.Ej.Nc(1);
                        return this
                    }
                    zv(a) {
                        this.Fp.zv(a);
                        this.Ej.Nc(a);
                        return this
                    }
                    Yi(a, b, c) {
                        this.Ej.Yi(a, b, c);
                        return this
                    }
                    attrs(a, b) {
                        this.Ej.attrs(a, b);
                        return this
                    }
                    append(a, b = 0) {
                        this.Fp.append(a.cells, b);
                        this.Ej.append(a.attrs, b);
                        return this
                    }
                    ba() {
                        var a;
                        return new Rp(this.Fp.ba(), this.Ej.ba(), null === (a = this.NN) || void 0 === a ? void 0 : a.ba())
                    }
                };
                __c.Sp.prototype.NC = ba(31);
                __c.Qp = class {
                    constructor(a, b = 0, c) {
                        b = Math.max(a.length, b);
                        let d, e;
                        this.a = a.attrs.cursor(b, {
                            cells: (g, h, k, l, m) => {
                                var n = u(d);
                                const q = n.length;
                                t(0 < g && g <= q);
                                g < q ? (n = n.xj(g), g = n[0], d = n[1]) : (g = n, d = void 0);
                                if (e) switch (g.type) {
                                    case 0:
                                        e.V && e.V(g.state, h, k, l, m);
                                        break;
                                    case 1:
                                        e.item && e.item(g.state, h, k, l, m);
                                        break;
                                    case 2:
                                        e.Pb && e.Pb(g.state, h, k, l, m);
                                        break;
                                    default:
                                        throw new v(g);
                                }
                            }
                        });
                        const f = (g) => {
                            d = g;
                            var h = this.Kx;
                            e = h ? c ? {
                                V: Om(h.V, c.V),
                                item: Om(h.item, c.item),
                                Pb: Om(h.Pb, c.Pb)
                            } : h : c;
                            this.a.move(g.length);
                            ja(null ==
                                d);
                            e = void 0
                        };
                        this.c = a.cells.cursor(b, {
                            V: (g) => f(new fp(g)),
                            item: (g) => f(new Ym(g)),
                            Pb: (g) => f(new gp(g))
                        })
                    }
                    get prevValue() {
                        return this.c.prevValue
                    }
                    get vj() {
                        return this.a.vj
                    }
                    get Zu() {
                        return this.a.Zu
                    }
                    Du(a, b) {
                        this.Kx = b;
                        this.c.Du(a);
                        this.Kx = void 0
                    }
                    $c(a, b) {
                        this.Kx = b;
                        this.c.$c(a);
                        this.Kx = void 0
                    }
                    BG() {
                        this.Kx = void 0;
                        this.c.BG();
                        this.Kx = void 0
                    }
                    finish() {
                        this.c.finish();
                        this.a.finish()
                    }
                };
                __c.Qp.prototype.Jx = ba(18);
                Hn = class {
                    constructor(a, b, c) {
                        this.al = a;
                        this.Uk = b;
                        this.sd = c;
                        this.pre = Math.max(this.al.pre, this.Uk.pre);
                        this.post = Math.max(this.al.post, this.Uk.post)
                    }
                    forEach(a) {
                        const b = this.Uk.hb(this.pre, this.post);
                        this.al.forEach({
                            M: (c) => {
                                for (; 0 < c;) {
                                    var d = u(b.next);
                                    switch (d.type) {
                                        case Ep:
                                            throw Error("op mismatch: retain|insert");
                                        case qn:
                                            d = Math.min(d.length, c);
                                            const e = b.fl(d);
                                            a.M && a.M(d, e, b.Zh);
                                            c -= d;
                                            break;
                                        default:
                                            throw new v(d);
                                    }
                                }
                            },
                            update: (c) => {
                                var d = u(b.next);
                                switch (d.type) {
                                    case Ep:
                                        throw Error("op mismatch: retain|insert");
                                    case qn:
                                        d = b.fl(1);
                                        a.update && a.update(c, d, b.Zh);
                                        break;
                                    default:
                                        throw new v(d);
                                }
                            },
                            Ka: (c) => {
                                for (;;) {
                                    var d = u(b.next);
                                    switch (d.type) {
                                        case Ep:
                                            d = Math.min(d.length, c.length);
                                            const e = b.cr(d);
                                            if (d === c.length) {
                                                a.Ka && a.Ka(c, e, b.Zh);
                                                return
                                            }
                                            const [f, g] = c.xj(d);
                                            a.Ka && a.Ka(f, e, b.Zh);
                                            c = g;
                                            break;
                                        case qn:
                                            throw Error("op mismatch: insert|retain");
                                        default:
                                            throw new v(d);
                                    }
                                }
                            },
                            change: (c, d) => {
                                for (;;) {
                                    var e = u(b.next);
                                    switch (e.type) {
                                        case Ep:
                                            throw Error("op mismatch: change|insert");
                                        case qn:
                                            e = Math.min(e.length, c.length);
                                            const f = b.fl(e);
                                            if (e === c.length) {
                                                a.change && a.change(c, d, f, b.Zh);
                                                return
                                            }
                                            const [g, h] = c.xj(e), [k, l] = d.xj(e);
                                            a.change && a.change(g, k, f, b.Zh);
                                            c = h;
                                            d = l;
                                            break;
                                        default:
                                            throw new v(e);
                                    }
                                }
                            }
                        }, this.pre, this.post);
                        b.finish()
                    }
                    Ei(a, b) {
                        return new Hn(this.al.Ei(a, b), this.Uk, this.sd)
                    }
                    toString() {
                        var a;
                        return `${this.al.toString()}|${this.Uk.toString()}|${null===(a=this.sd)||void 0===a?void 0:a.toString()}}`
                    }
                };
                gla = class {
                    constructor(a, b, c) {
                        this.cells = a;
                        this.attrs = b;
                        this.Aa = c
                    }
                    ux(a) {
                        var b;
                        this.cells.ux(a);
                        this.attrs.Ka(a.length, void 0);
                        null === (b = this.Aa) || void 0 === b ? void 0 : b.Ka(a.length);
                        return this
                    }
                    M(a, b) {
                        var c;
                        this.cells.M(a);
                        this.attrs.M(a, b);
                        null === (c = this.Aa) || void 0 === c ? void 0 : c.M(a);
                        return this
                    }
                    update(a) {
                        var b;
                        this.cells.update(a);
                        this.attrs.M(1);
                        null === (b = this.Aa) || void 0 === b ? void 0 : b.M(1);
                        return this
                    }
                    expand(a) {
                        var b;
                        this.cells.expand(a);
                        this.attrs.Ka(a);
                        null === (b = this.Aa) || void 0 === b ? void 0 : b.Ka(a);
                        return this
                    }
                    Ka(a, b) {
                        var c;
                        const d = Gn(a);
                        this.cells.Ka(a);
                        this.attrs.Ka(d, b);
                        null === (c = this.Aa) || void 0 === c ? void 0 : c.Ka(d);
                        return this
                    }
                    fv(a) {
                        var b;
                        this.cells.fv(a);
                        this.attrs.M(a);
                        null === (b = this.Aa) || void 0 === b ? void 0 : b.M(a);
                        return this
                    }
                    oI(a) {
                        var b;
                        const c = Gn(a);
                        this.cells.oI(a);
                        this.attrs.M(c);
                        null === (b = this.Aa) || void 0 === b ? void 0 : b.M(c);
                        return this
                    }
                    Mp(a) {
                        var b;
                        const c = Gn(a);
                        this.cells.Mp(a);
                        this.attrs.M(c);
                        null === (b = this.Aa) || void 0 === b ? void 0 : b.M(c);
                        return this
                    }
                    replace(a, b) {
                        var c;
                        const d = Gn(a);
                        this.cells.change(a, b);
                        this.attrs.M(d);
                        null === (c = this.Aa) || void 0 === c ? void 0 : c.M(d);
                        return this
                    }
                    ba() {
                        var a;
                        return new Hn(this.cells.ba(), this.attrs.ba(), null === (a = this.Aa) || void 0 === a ? void 0 : a.ba())
                    }
                };
                Tp = class {
                    constructor(a, b, c) {
                        this.tb = a;
                        this.attrs = b;
                        this.Aa = c
                    }
                    M(a) {
                        var b;
                        this.tb.M(a);
                        this.attrs.M(a);
                        null === (b = this.Aa) || void 0 === b ? void 0 : b.M(a);
                        return this
                    }
                    Ka(a) {
                        var b;
                        const c = "string" === typeof a ? a.length : 1;
                        this.tb.Ka(a);
                        this.attrs.Ka(c);
                        null === (b = this.Aa) || void 0 === b ? void 0 : b.Ka(c);
                        return this
                    }
                    delete(a) {
                        var b;
                        const c = "string" === typeof a ? a.length : 1;
                        this.tb.Mp(a);
                        this.attrs.M(c);
                        null === (b = this.Aa) || void 0 === b ? void 0 : b.M(c);
                        return this
                    }
                    open(a, b, c) {
                        this.attrs.open(a, b, c);
                        return this
                    }
                    Su(a) {
                        this.attrs.Su(a)
                    }
                    close(a) {
                        this.attrs.close(a);
                        return this
                    }
                    Nj(a) {
                        this.attrs.Nj(a);
                        return this
                    }
                    ba() {
                        var a;
                        return new Hn(this.tb.ba(), this.attrs.ba(), null === (a = this.Aa) || void 0 === a ? void 0 : a.ba())
                    }
                };
                hla = class {
                    constructor(a, b, c) {
                        this.cells = a;
                        this.attrs = b;
                        this.Aa = c
                    }
                    ux(a) {
                        var b;
                        const c = a.length;
                        this.cells.ux(a);
                        this.attrs.Ka(c, void 0);
                        null === (b = this.Aa) || void 0 === b ? void 0 : b.Ka(c);
                        return this
                    }
                    M(a, b) {
                        var c;
                        this.cells.M(a);
                        this.attrs.M(a, b);
                        null === (c = this.Aa) || void 0 === c ? void 0 : c.M(a);
                        return this
                    }
                    update(a) {
                        var b;
                        this.cells.update(a);
                        this.attrs.M(1);
                        null === (b = this.Aa) || void 0 === b ? void 0 : b.M(1);
                        return this
                    }
                    expand(a) {
                        var b;
                        this.cells.expand(a);
                        this.attrs.Ka(a);
                        null === (b = this.Aa) || void 0 === b ? void 0 : b.Ka(a);
                        return this
                    }
                    Ka(a, b) {
                        var c;
                        const d = Gn(a);
                        this.cells.Ka(a);
                        this.attrs.Ka(d, b);
                        null === (c = this.Aa) || void 0 === c ? void 0 : c.Ka(d);
                        return this
                    }
                    fv(a) {
                        var b;
                        this.cells.fv(a);
                        this.attrs.M(a);
                        null === (b = this.Aa) || void 0 === b ? void 0 : b.M(a);
                        return this
                    }
                    oI(a) {
                        var b;
                        const c = Gn(a);
                        this.cells.oI(a);
                        this.attrs.M(c);
                        null === (b = this.Aa) || void 0 === b ? void 0 : b.M(c);
                        return this
                    }
                    Mp(a) {
                        var b;
                        const c = Gn(a);
                        this.cells.Mp(a);
                        this.attrs.M(c);
                        null === (b = this.Aa) || void 0 === b ? void 0 : b.M(c);
                        return this
                    }
                    replace(a, b) {
                        var c;
                        const d = Gn(a);
                        this.cells.change(a, b);
                        this.attrs.M(d);
                        null === (c = this.Aa) || void 0 === c ? void 0 : c.M(d);
                        return this
                    }
                    ba() {
                        var a;
                        return new Hn(this.cells.ba(), this.attrs.ba(), null === (a = this.Aa) || void 0 === a ? void 0 : a.ba())
                    }
                };
                __c.Up = class {
                    constructor(a, b, c) {
                        this.Fp = a;
                        this.Ej = b;
                        this.NN = c
                    }
                    items(a) {
                        return this.tb(a)
                    }
                    tb(a) {
                        this.Fp.tb(a);
                        this.Ej.Nc(a.length);
                        return this
                    }
                    item(a) {
                        this.Fp.item(a);
                        this.Ej.Nc(1);
                        return this
                    }
                    zv(a) {
                        this.Fp.zv(a);
                        this.Ej.Nc(a);
                        return this
                    }
                    Yi(a, b) {
                        this.Ej.Yi(a, b);
                        return this
                    }
                    attrs(a) {
                        this.Ej.attrs(a);
                        return this
                    }
                    append(a, b = 0) {
                        this.Fp.append(a.cells, b);
                        this.Ej.append(a.attrs, b);
                        return this
                    }
                    ba() {
                        var a;
                        return new Rp(this.Fp.ba(), this.Ej.ba(), null === (a = this.NN) || void 0 === a ? void 0 : a.ba())
                    }
                };
                __c.Up.prototype.NC = ba(30);
                __c.Vp = class extends to {
                    constructor(a, b) {
                        super();
                        this.Aa = b;
                        this.cells = new __c.tp(a);
                        this.attrs = new Gp;
                        this.id = __c.In(this)
                    }
                    ic(a) {
                        var b;
                        const c = this.cells.ic(),
                            d = null === (b = this.Aa) || void 0 === b ? void 0 : b.ic();
                        return a ? new hla(c, this.attrs.ic(a), d) : new gla(c, this.attrs.ic(), d)
                    }
                    Jp(a, b) {
                        var c;
                        return new Tp(this.cells.ic(), this.attrs.Jp(a.attrs, a.length, b), null === (c = this.Aa) || void 0 === c ? void 0 : c.ic())
                    }
                    Kd(a) {
                        var b;
                        const c = this.cells.Kd(),
                            d = null === (b = this.Aa) || void 0 === b ? void 0 : b.Kd();
                        return a ? new __c.Up(c,
                            this.attrs.Kd(a), d) : new __c.Sp(c, this.attrs.Kd(), d)
                    }
                    FQ(a, b) {
                        return this.attrs.Jp(a.attrs, a.length, b)
                    }
                    isIdentity(a) {
                        t(!this.Aa === !a.sd);
                        return this.cells.isIdentity(a.al) && this.attrs.isIdentity(a.Uk) && (!this.Aa || this.Aa.isIdentity(a.sd))
                    }
                    hd(a, b) {
                        var c;
                        t(!this.Aa === !a.sd);
                        t(!this.Aa === !b.sd);
                        return new Hn(this.cells.hd(a.al, b.al), this.attrs.hd(a.Uk, b.Uk), null === (c = this.Aa) || void 0 === c ? void 0 : c.hd(a.sd, b.sd))
                    }
                    transform(a, b) {
                        var c;
                        t(!this.Aa === !a.sd);
                        t(!this.Aa === !a.sd);
                        const d = this.cells.transform(a.al,
                                b.al),
                            e = this.attrs.transform(a.Uk, b.Uk);
                        a = (null === (c = this.Aa) || void 0 === c ? void 0 : c.transform(a.sd, b.sd)) || [void 0, void 0];
                        return [new Hn(d[0], e[0], a[0]), new Hn(d[1], e[1], a[1])]
                    }
                    Sd(a) {
                        var b;
                        t(!this.Aa === !a.sd);
                        return new Hn(this.cells.Sd(a.al), this.attrs.Sd(a.Uk), null === (b = this.Aa) || void 0 === b ? void 0 : b.Sd(a.sd))
                    }
                    identity() {
                        return this.id
                    }
                    apply(a, b) {
                        var c;
                        t(!this.Aa === !a.Aa);
                        t(!this.Aa === !b.sd);
                        return new Rp(this.cells.apply(a.cells, b.al), this.attrs.apply(a.attrs, b.Uk), null === (c = this.Aa) ||
                            void 0 === c ? void 0 : c.apply(a.Aa, b.sd))
                    }
                    Ld(a, b) {
                        var c;
                        t(!this.Aa === !a.Aa);
                        t(!this.Aa === !b.sd);
                        return new Rp(this.cells.Ld(a.cells, b.al), this.attrs.Ld(a.attrs, b.Uk), null === (c = this.Aa) || void 0 === c ? void 0 : c.Ld(a.Aa, b.sd))
                    }
                    ld(a, b) {
                        t(!this.Aa === !a.Aa);
                        t(!this.Aa === !b.Aa);
                        return this.cells.ld(a.cells, b.cells) && this.attrs.ld(a.attrs, b.attrs) && (!this.Aa || this.Aa.ld(a.Aa, b.Aa))
                    }
                    equals(a) {
                        return this === a ? !0 : a instanceof __c.Vp ? this.cells.equals(a.cells) && this.attrs.equals(a.attrs) && to.equals(this.Aa,
                            a.Aa) : !1
                    }
                };
                __c.Vp.prototype.Jh = ba(25);
                var Wp = class {
                    constructor(a, b) {
                        this.tb = a;
                        this.attrs = b;
                        this.pre = Math.max(this.tb.pre, this.attrs.pre);
                        this.post = Math.max(this.tb.post, this.attrs.post)
                    }
                    forEach(a) {
                        const b = __c.up.ic();
                        this.tb.forEach({
                            M: (c) => b.M(c),
                            Ka: (c) => b.Ka(c),
                            delete: (c) => b.fv(c)
                        }, this.pre, this.post);
                        new Hn(b.ba(), this.attrs, void 0).forEach({
                            M: (c, d) => a.M && a.M(c, d),
                            Ka: (c, d) => 2 !== c.type && a.Ka && a.Ka(c.state, d),
                            change: (c, d, e) => a.delete && a.delete(c.length, e)
                        })
                    }
                };
                var ila, tka, jla;
                Xp = __c.Xp = class extends yo {
                    constructor(a, b, c, d) {
                        super();
                        this.domain = b;
                        this.Mb = c;
                        this.bp = d;
                        this.subject = new Xl;
                        this.n0 = 0;
                        this._state = a
                    }
                    pw(a) {
                        if (!a) return {
                            index: 0,
                            length: this.charLength
                        };
                        const b = a.index,
                            c = a.index + a.length,
                            d = this.charLength;
                        t(b <= c, "invalid range: {}, {}", b, c);
                        t(0 <= b && c <= d, "range out of bounds: [{}, {}) \u2288 [{}, {})", b, c, 0, d);
                        return a
                    }
                    get charLength() {
                        return this.V.length
                    }
                    get V() {
                        return this._state.cells.V()
                    }
                    get a_() {
                        const a = [];
                        this._state.forEach(Object.assign({}, Jn, {
                            V: (b,
                                c, d) => a.push({
                                V: b,
                                attributes: Object.assign({}, d)
                            })
                        }));
                        return a
                    }
                    FQ() {
                        const a = this._state;
                        return this.domain.attrs.Jp(a.attrs, a.length, this.Mb)
                    }
                    setAttribute(a, b, c) {
                        const d = {};
                        d[a] = b;
                        this.Ry(d, c)
                    }
                    Ry(a, b) {
                        b = this.pw(b);
                        if (0 !== b.length && 0 !== Object.keys(a).length) {
                            a = Bl(this.Mb, a);
                            var c = this._state,
                                d = this.FQ();
                            c = c.cells.cursor(c.length, Object.assign({}, Jn, {
                                V: (e) => d.M(e.length),
                                Pb: (e) => d.M(e)
                            }));
                            c.$c(b.index);
                            c.BG();
                            d.Su(a);
                            c.$c(b.length);
                            c.BG();
                            d.Nj(a);
                            Kn(this, d.ba())
                        }
                    }
                    Jp() {
                        return this.domain.Jp(this._state,
                            this.Mb)
                    }
                    Gv(a) {
                        const b = uka(this._state, a);
                        this._state = this.domain.apply(this._state, a);
                        this.subject.next(b)
                    }
                    EC(a) {
                        if (a.length) {
                            t(a.every((e, f) => {
                                f = a[f + 1];
                                return 0 < e.length && (null == f || e.index + e.length <= f.index)
                            }));
                            var b = this.Jp(),
                                c = 0,
                                d = this._state.cursor();
                            for (const e of a) {
                                const f = e.index,
                                    g = e.length,
                                    h = f + g;
                                d.$c(f - c, Object.assign({}, Jn, {
                                    V: (l) => b.M(l.length),
                                    Pb: (l) => b.M(l)
                                }));
                                let k = !1;
                                d.$c(g, Object.assign({}, Jn, {
                                    V: (l, m, n) => {
                                        k || (b.Su(n), b.Ka(void 0), b.Nj(n), k = !0);
                                        b.delete(l)
                                    },
                                    Pb: (l) => b.M(l)
                                }));
                                c = h
                            }
                            Wl(this, b.ba())
                        }
                    }
                    complete() {
                        super.complete();
                        this.subject.complete()
                    }
                    error(a) {
                        super.error(a);
                        this.subject.error(a)
                    }
                    get state() {
                        return this._state
                    }
                    destroy(a) {
                        t(this.domain.ld(this._state, a))
                    }
                };
                p = __c.p = Xp.prototype;
                p.Sm = ba(43);
                p.ZA = ba(41);
                p.ex = ba(39);
                p.Bl = ba(37);
                p.WA = ba(35);
                p.lA = ba(33);
                _dmr(Xp, "_state");
                _dmc(Xp, "charLength");
                _dmc(Xp, "V");
                _dmc(Xp, "a_");
                __c.Yp = class {
                    constructor(a, b) {
                        this.specified = a;
                        this.at = b;
                        this.Mb = a.Mb;
                        this.bp = a.bp
                    }
                    get charLength() {
                        return this.specified.charLength
                    }
                    get V() {
                        return this.specified.V
                    }
                    pw(a) {
                        return this.specified.pw(a)
                    }
                    setAttribute(a, b, c) {
                        const d = {};
                        d[a] = b;
                        this.Ry(d, c)
                    }
                    Ry(a, b) {
                        b = this.pw(b);
                        if (0 !== b.length && 0 !== Object.keys(a).length) {
                            var c = this.specified.state.cursor(),
                                d = this.specified.FQ();
                            c.$c(b.index, Object.assign({}, Jn, {
                                V: (f) => d.M(f.length),
                                Pb: (f) => d.M(f)
                            }));
                            var e = vka(this, d, a);
                            c.$c(b.length, Object.assign({}, Jn, {
                                V: (f, g, h) => e(f.length, h[this.bp]),
                                Pb: (f, g, h) => e(f, h[this.bp])
                            }));
                            Kn(this.specified, d.ba())
                        }
                    }
                    mb() {
                        let a = !0;
                        const b = this.Mb.defaults[this.bp];
                        let c = b;
                        const d = new Set,
                            e = (g, h) => {
                                const k = {},
                                    l = {};
                                var m = g[this.bp];
                                m = this.bp in g ? m || b : c;
                                const n = this.IJ.get(m) || this.Mb.SR;
                                if (a || c !== m) Al(this.Mb, n.as, n.ss, (q, r, x) => {
                                    d.has(q) || (k[q] = r, l[q] = x)
                                }), a = !1, c = m;
                                Al(this.Mb, g, h, (q, r, x) => {
                                    null != r ? (k[q] = r, l[q] = x, d.add(q)) : (k[q] = n.as[q], l[q] = n.ss[q], d.delete(q))
                                });
                                return {
                                    dea: k,
                                    fea: l
                                }
                            },
                            f = this.specified.domain.Kd();
                        this.specified.state.forEach(Object.assign({},
                            Jn, {
                                V: (g, h, k, l) => {
                                    const {
                                        dea: m,
                                        fea: n
                                    } = e(h, l);
                                    return f.attrs(m, n).tb(g)
                                },
                                Pb: (g, h, k, l) => {
                                    const {
                                        dea: m,
                                        fea: n
                                    } = e(h, l);
                                    return f.attrs(m, n)
                                }
                            }));
                        return f.ba()
                    }
                    destroy() {}
                    get IJ() {
                        return __c.sl(this.at.styles, (a) => Yja(this.Mb, a))
                    }
                };
                p = __c.p = __c.Yp.prototype;
                p.Sm = ba(42);
                p.ZA = ba(40);
                p.ex = ba(38);
                p.Bl = ba(36);
                p.WA = ba(34);
                p.lA = ba(32);
                _dmc(__c.Yp, "IJ");
                ila = class {
                    constructor(a, b) {
                        this.builder = a;
                        this.Mb = b;
                        this.Qfa = !1
                    }
                    tb(a) {
                        0 < a.length && (this.Qfa = a.endsWith("\n"), this.builder.tb(a));
                        return this
                    }
                    Yi(a, b) {
                        this.builder.Yi(a, this.Mb.normalize(a, b));
                        return this
                    }
                    attrs(a) {
                        this.builder.attrs(Bl(this.Mb, a));
                        return this
                    }
                    ba() {
                        const a = this.builder.ba();
                        ja(0 === a.length || this.Qfa);
                        return a
                    }
                };
                tka = class {
                    constructor() {
                        this.tb = new vp;
                        this.attrs = new yp
                    }
                    change(a) {
                        this.attrs.change(a);
                        return this
                    }
                    M(a, b) {
                        this.tb.M(a);
                        this.attrs.M(a, b);
                        return this
                    }
                    Ka(a, b) {
                        this.tb.Ka(a);
                        this.attrs.Ka(a.length, b);
                        return this
                    }
                    delete(a, b) {
                        this.tb.delete(a);
                        this.attrs.M(a, b);
                        return this
                    }
                    ba() {
                        return new Wp(this.tb.ba(), this.attrs.ba())
                    }
                };
                jla = class {
                    constructor(a, b) {
                        this.Mb = a;
                        this.attrs = b;
                        this.tb = new vp
                    }
                    M(a) {
                        this.tb.M(a);
                        this.attrs.M(a);
                        return this
                    }
                    Ka(a) {
                        this.tb.Ka(a);
                        this.attrs.Ka(a.length);
                        return this
                    }
                    delete(a) {
                        this.tb.delete(a);
                        this.attrs.M(a);
                        return this
                    }
                    open(a, b) {
                        this.attrs.open(a, this.Mb.normalize(a, b));
                        return this
                    }
                    Su(a) {
                        this.attrs.Su(Bl(this.Mb, a))
                    }
                    close(a) {
                        this.attrs.close(a);
                        return this
                    }
                    Nj(a) {
                        this.attrs.Nj(a);
                        return this
                    }
                    ba() {
                        return new Wp(this.tb.ba(), this.attrs.ba())
                    }
                };
                __c.$p = class extends ko {
                    constructor() {
                        var a = __c.Zp;
                        super();
                        this.Mb = a;
                        this.bp = "style";
                        this.domain = new __c.Vp(dp, void 0)
                    }
                    Kd() {
                        return new ila(this.domain.Kd(this.Mb), this.Mb)
                    }
                    Jp(a) {
                        a = this.domain.FQ(a, this.Mb);
                        return new jla(this.Mb, a)
                    }
                    Fg(a) {
                        wka(a, this.Mb);
                        return new Xp(a, this.domain, this.Mb, this.bp)
                    }
                    connect(a, b) {
                        return a.connect(b)
                    }
                    mb(a) {
                        return a.state
                    }
                    destroy(a, b) {
                        return a.destroy(b)
                    }
                };
                __c.$p.prototype.Jh = ba(24);
                aq = __c.aq = class extends yo {
                    constructor(a, b, c, d) {
                        super();
                        this.Mb = a;
                        this.type = b;
                        this.domain = c;
                        this.t6 = new Xl;
                        u(c.Aa);
                        this.cells = d.cells.Ei((e) => this.UB(e));
                        this.attrs = d.attrs;
                        this.Aa = u(d.Aa);
                        d.attrs.forEach(0, {
                            qL: (e) => a.$f(e)
                        })
                    }
                    get NC() {
                        return this.Aa.qc
                    }
                    get isEmpty() {
                        var a = this.cells.R_,
                            b;
                        if ((b = 0 === this.cells.VT) && !(b = 0 === a)) {
                            if (a = 1 === a) a: {
                                a = this.cells;t(!0);
                                for (const c of a.Vg) switch (c.type) {
                                    case 0:
                                        a = c.state.startsWith("\n");
                                        break a;
                                    case 2:
                                        break;
                                    case 1:
                                        a = !1;
                                        break a;
                                    default:
                                        throw new v(c);
                                }
                                a = !1
                            }
                            b = a
                        }
                        return b
                    }
                    get items() {
                        const a = new Set;
                        this.cells.forEach(0, {
                            item: (b) => a.add(b.mutable)
                        });
                        return a
                    }
                    get length() {
                        return Math.max(this.cells.length, this.attrs.length)
                    }
                    Jp() {
                        var a;
                        return new Tp(new sp(() => !0), this.domain.attrs.Jp(this.attrs, this.cells.length, this.Mb), null === (a = this.domain.Aa) || void 0 === a ? void 0 : a.ic())
                    }
                    UB(a) {
                        const {
                            mutable: b,
                            Tp: c,
                            yn: d
                        } = Yl(this.type, a), e = {
                            mutable: b,
                            to: c,
                            from: Vl(this, d.pipe(dm((f) => {
                                a: {
                                    var g = 0;
                                    for (const h of this.cells.Vg) {
                                        if (1 === h.type && h.state === e) break a;
                                        g += h.length
                                    }
                                    g = -1
                                }
                                ja(0 <= g, "cell not found");
                                return this.domain.ic().M(g).update(f).ba()
                            }))),
                            toString: () => `${b}`
                        };
                        return e
                    }
                    R0(a, b) {
                        Zl(this.type, b, a.from, a.to, a.mutable)
                    }
                    J3(a, b) {
                        a = a.resolve(this.cells);
                        t(0 <= a && a <= Math.max(0, this.cells.length - 1), "Position {} is not in range [0, {}]", a, Math.max(0, this.cells.length - 1));
                        a === this.cells.length && t("string" === typeof b && b.endsWith("\n"));
                        Wl(this, this.domain.ic().M(a).Ka(b).ba());
                        if ("string" !== typeof b) {
                            b = this.cells.r4(a);
                            if (null == b || "string" === typeof b) throw Error(`item expected at ${a}, found: ${b}`);
                            return b.mutable
                        }
                    }
                    cursor(a, b) {
                        return new Rp(this.cells, this.attrs, this.Aa).Ei((c) => c.mutable).cursor(a, b)
                    }
                    forEach(a) {
                        new Rp(this.cells, this.attrs, this.Aa).forEach(Object.assign({}, a, {
                            item: (b, c, d, e, f) => a.item(b.mutable, c, d, e, f)
                        }))
                    }
                    Gv(a) {
                        var b = a.al,
                            c = a.Uk;
                        a = a.sd;
                        const d = new kp,
                            e = new sp((k) => k),
                            f = this.cells.hb(b.pre);
                        for (b = b.hb(this.cells.length, 0);;) {
                            let k = f.head;
                            var g = b.head;
                            if (!g) break;
                            if (2 === g.type) k = void 0, g = Vm(b);
                            else if (k) {
                                var h = Math.min(k.length, g.bq);
                                k = f.Jm(h);
                                g = Wm(b, h)
                            }
                            if (2 === g.type) k =
                                g.state.Ei((l) => this.UB(l)), d.region(k), e.ux(k);
                            else if (k) switch (g.type) {
                                case 0:
                                    d.region(k);
                                    e.M(g.length);
                                    break;
                                case 1:
                                    t(1 === k.type);
                                    k.state.to.next(g.delta);
                                    d.region(k);
                                    e.M(1);
                                    break;
                                case 3:
                                    h = g.Cc;
                                    g = g.xc;
                                    1 === k.type ? (t(k.type === h.type, "{} != {}", k.type, h.type), this.R0(k.state, h.state)) : Zm(this.domain.cells, k, h);
                                    h = k;
                                    k = g.Ei((l) => this.UB(l));
                                    d.region(k);
                                    Um(e, h, k);
                                    break;
                                default:
                                    throw new v(g);
                            } else throw Error("reader exhausted prematurely")
                        }
                        f.finish();
                        b.finish();
                        this.cells = d.ba();
                        this.attrs =
                            this.domain.attrs.apply(this.attrs, c);
                        this.Aa = this.domain.Aa.apply(this.Aa, u(a));
                        c = new Hn(e.ba(), c, a);
                        this.t6.next(c)
                    }
                    complete() {
                        super.complete();
                        this.t6.complete()
                    }
                    error(a) {
                        super.error(a);
                        this.t6.error(a)
                    }
                    destroy(a) {
                        t(this.domain.ld(this.mb(), a))
                    }
                    mb() {
                        return new Rp(this.cells, this.attrs, this.Aa).Ei((a) => this.type.mb(a.mutable))
                    }
                };
                p = __c.p = aq.prototype;
                p.E9 = ba(44);
                _dmr(aq, "cells");
                _dmr(aq, "attrs");
                _dmr(aq, "Aa");
                _dp([ho.struct], aq.prototype, "NC", null);
                _dmc(aq, "isEmpty");
                _dp([ho({
                    equals: Eka.shallow
                })], aq.prototype, "items", null);
                __c.cq = class extends ko {
                    constructor() {
                        var a = __c.bq,
                            b = kla;
                        super();
                        this.Mb = a;
                        this.type = b;
                        this.domain = new __c.Vp(this.type.domain, fla)
                    }
                    ic() {
                        return this.domain.ic(this.Mb)
                    }
                    Kd() {
                        return this.domain.Kd(this.Mb)
                    }
                    Fg(a) {
                        return new aq(this.Mb, this.type, this.domain, a)
                    }
                    connect(a, b) {
                        return a.connect(b)
                    }
                    create(a) {
                        return super.create(a)
                    }
                    destroy(a, b) {
                        return a.destroy(b)
                    }
                    mb(a) {
                        return a.mb()
                    }
                };
                __c.cq.prototype.Jh = ba(23);
                var lla = class extends to {
                    constructor(a) {
                        super();
                        this.ue = a
                    }
                    isIdentity(a) {
                        return this.ue[a.key].isIdentity(a.value)
                    }
                    hd(a, b) {
                        const c = Ln(a.key, b.key);
                        return {
                            key: c,
                            value: this.ue[c].hd(a.value, b.value)
                        }
                    }
                    transform(a, b) {
                        const c = Ln(a.key, b.key),
                            [d, e] = this.ue[c].transform(a.value, b.value);
                        return [{
                            key: c,
                            value: d
                        }, {
                            key: c,
                            value: e
                        }]
                    }
                    Sd(a) {
                        return {
                            key: a.key,
                            value: this.ue[a.key].Sd(a.value)
                        }
                    }
                    identity(a) {
                        return {
                            key: a.key,
                            value: this.ue[a.key].identity(a.value)
                        }
                    }
                    apply(a, b) {
                        const c = Ln(a.key, b.key);
                        return {
                            key: c,
                            value: this.ue[c].apply(a.value,
                                b.value)
                        }
                    }
                    Ld(a, b) {
                        const c = Ln(a.key, b.key);
                        return {
                            key: c,
                            value: this.ue[c].Ld(a.value, b.value)
                        }
                    }
                    ld(a, b) {
                        return a.key === b.key && this.ue[a.key].ld(a.value, b.value)
                    }
                    equals(a) {
                        if (this === a) return !0;
                        const b = this.ue,
                            c = a.ue;
                        a = Object.keys(b);
                        const d = Object.keys(c);
                        return a.length === d.length && a.every((e) => e in c && b[e].equals(c[e]))
                    }
                };
                var dq = class extends to {
                    constructor(a, b) {
                        super();
                        this.ue = a;
                        this.bF = b;
                        this.bt = new lla(this.ue)
                    }
                    isIdentity(a) {
                        return this.bt.isIdentity(a)
                    }
                    hd(a, b) {
                        return this.bt.hd(a, b)
                    }
                    transform(a, b) {
                        return this.bt.transform(a, b)
                    }
                    Sd(a) {
                        return this.bt.Sd(a)
                    }
                    identity(a) {
                        return this.bt.identity(Mn(this, a))
                    }
                    apply(a, b) {
                        return this.bt.apply(Mn(this, a), b).value
                    }
                    Ld(a, b) {
                        return this.bt.Ld(Mn(this, a), b).value
                    }
                    ld(a, b) {
                        return this.bt.ld(Mn(this, a), Mn(this, b))
                    }
                    equals(a) {
                        return this === a || a instanceof dq && this.bt.equals(a.bt)
                    }
                };
                var xka = class extends ko {
                    constructor(a, b, c) {
                        super();
                        this.wE = a;
                        this.bF = b;
                        this.Z0 = c;
                        this.domain = new dq(Gl(this.wE), this.bF)
                    }
                    create(a, b, c) {
                        const d = this.bF(a);
                        return this.wE[d].create(a, b, c)
                    }
                    Fg(a) {
                        const b = this.bF(a);
                        return this.wE[b].Fg(a)
                    }
                    connect(a, b) {
                        const c = this.Z0(a);
                        return this.wE[c].connect(a, b.pipe(dm((d) => {
                            t(d.key === c);
                            return d.value
                        }))).pipe(dm((d) => ({
                            key: c,
                            value: d
                        })))
                    }
                    mb(a) {
                        const b = this.Z0(a);
                        return this.wE[b].mb(a)
                    }
                    destroy(a, b) {
                        const c = this.Z0(a),
                            d = this.bF(b);
                        t(c === d);
                        this.wE[c].destroy(a,
                            b)
                    }
                };
                var eq = class extends to {
                        constructor() {
                            super(...arguments);
                            this.unit = 1
                        }
                        isIdentity() {
                            return !0
                        }
                        hd() {
                            return 1
                        }
                        transform() {
                            return [1, 1]
                        }
                        Sd() {
                            return 1
                        }
                        identity() {
                            return 1
                        }
                        apply() {
                            return 1
                        }
                        Ld() {
                            return 1
                        }
                        ld() {
                            return !0
                        }
                        equals(a) {
                            return this === a || a instanceof eq
                        }
                    },
                    mla = new eq;
                var nla = class extends ko {
                    constructor() {
                        super(...arguments);
                        this.domain = mla
                    }
                    Fg(a) {
                        return a
                    }
                    connect(a, b) {
                        return b.pipe((0, __c.eo)(() => !1))
                    }
                    mb(a) {
                        return a
                    }
                    destroy() {}
                };
                new nla;
                var ola = new Map,
                    fq = class extends to {
                        constructor() {
                            super()
                        }
                        isIdentity(a) {
                            return !a.size || Array.from(a.values()).every((b) => 0 === b)
                        }
                        hd(a, b) {
                            return On(a, b)
                        }
                        transform(a, b) {
                            return [b, a]
                        }
                        Sd(a) {
                            return a.size ? __c.sl(a, (b) => -b) : a
                        }
                        identity() {
                            return ola
                        }
                        apply(a, b) {
                            return On(a, b)
                        }
                        Ld(a, b) {
                            return On(a, this.Sd(b))
                        }
                        ld(a, b) {
                            return yka(a, b)
                        }
                        equals(a) {
                            return this === a || a instanceof fq
                        }
                    };
                var gq = class extends yo {
                    constructor(a, b) {
                        super();
                        this.domain = a;
                        this.map = new Fka(b)
                    }
                    Gv(a) {
                        for (const [b, c] of a)(a = (this.map.get(b) || 0) + c) ? this.map.set(b, a) : this.map.delete(b)
                    }
                    mb() {
                        return new Map(this.map)
                    }
                    add(a) {
                        const b = this.map.get(a) || 0;
                        0 < b || Wl(this, new Map([
                            [a, -b + 1]
                        ]))
                    }
                    delete(a) {
                        const b = this.map.get(a) || 0;
                        b && Wl(this, new Map([
                            [a, -b]
                        ]))
                    }
                    has(a) {
                        return 0 < (this.map.get(a) || 0)
                    }
                    get values() {
                        return [...zka(this.map, (a) => 0 < a).keys()]
                    }[Symbol.iterator]() {
                        return this.values[Symbol.iterator]()
                    }
                };
                _dp([ho.struct], gq.prototype, "values", null);
                var pla = class extends ko {
                        constructor() {
                            super(...arguments);
                            this.domain = new fq
                        }
                        Fg(a) {
                            return new gq(this.domain, a)
                        }
                        connect(a, b) {
                            return a.connect(b)
                        }
                        mb(a) {
                            return a.mb()
                        }
                        destroy(a, b) {
                            t(this.domain.ld(a.mb(), b))
                        }
                    },
                    qla = new pla;
                var rla;
                __c.hq = class {
                    constructor(a, b) {
                        this.x = a;
                        this.y = b
                    }
                };
                __c.iq = class {
                    constructor(a, ...b) {
                        this.mode = a;
                        this.type = 0;
                        this.params = b
                    }
                };
                __c.jq = class {
                    constructor(a, ...b) {
                        this.mode = a;
                        this.type = 1;
                        this.params = b
                    }
                };
                __c.kq = class {
                    constructor(a, ...b) {
                        this.mode = a;
                        this.type = 2;
                        this.params = b
                    }
                };
                __c.lq = class {
                    constructor(a, ...b) {
                        this.mode = a;
                        this.type = 3;
                        this.params = b
                    }
                };
                __c.mq = class {
                    constructor(a, b, c) {
                        this.ww = a;
                        this.Pj = b;
                        this.end = c
                    }
                };
                __c.nq = class {
                    constructor(a, ...b) {
                        this.mode = a;
                        this.type = 4;
                        this.params = b
                    }
                };
                __c.oq = class {
                    constructor(a, b) {
                        this.Pj = a;
                        this.end = b
                    }
                };
                __c.pq = class {
                    constructor(a, ...b) {
                        this.mode = a;
                        this.type = 5;
                        this.params = b
                    }
                };
                __c.qq = class {
                    constructor(a, b, c, d, e, f) {
                        this.iP = a;
                        this.jP = b;
                        this.FY = c;
                        this.$T = d;
                        this.KX = e;
                        this.end = f
                    }
                };
                __c.rq = class {
                    constructor(a, ...b) {
                        this.mode = a;
                        this.type = 6;
                        this.params = b
                    }
                };
                rla = class {
                    constructor(a = 0) {
                        this.mode = a;
                        this.type = 7
                    }
                };
                var Zn, Vn, $n, Bka, Wn, Xn, Yn, sq, Aka;
                Pn = __c.Pn = Error("no match");
                Zn = Tn(parseFloat, Rn(/^(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][-+]?\d+)?/));
                Vn = Tn((a, b) => ("-" === a ? -1 : 1) * b, Rn(/^[-+]?/), Zn);
                $n = Tn((a) => 1 === parseInt(a, 10), Rn(/^[01]/));
                Bka = Rn(/^(?:\s+,?\s*|,\s*)/);
                Wn = Rn(/^\s*,?\s*/);
                Xn = Rn(/^\s*/);
                Yn = Tn((a, b) => b, Wn, Vn);
                sq = () => !0;
                Aka = ao({
                    oba: sq,
                    rba: sq,
                    ica: sq,
                    hba: sq,
                    Sba: sq,
                    Lba: sq,
                    Fba: sq,
                    qca: sq,
                    qba: sq,
                    hca: sq,
                    gba: sq,
                    mba: sq,
                    Xba: sq
                });
                __c.sla = ao({
                    oba: (a, b) => new __c.hq(a, b),
                    rba: (a, b, c) => new __c.mq(a, b, c),
                    ica: (a, b) => new __c.oq(a, b),
                    hba: (a, b, c, d, e, f) => new __c.qq(a, b, c, d ? 1 : 0, e ? 1 : 0, f),
                    Sba: bo(__c.iq),
                    Lba: bo(__c.jq),
                    Fba: bo(__c.kq),
                    qca: bo(__c.lq),
                    qba: bo(__c.nq),
                    hca: bo(__c.pq),
                    gba: bo(__c.rq),
                    mba: bo(rla),
                    Xba: (a) => a
                });
                var tq, uq, tla, vq, wq, xq, yq, Aq, Bq, Cq, Dq, Eq, Hq, Iq, ula, vla, Jq, wla, xla, yla, zla, Kq, Lq, Mq, Ala, Bla, Nq, Oq, Pq, Qq, Cla, Dla, Ela, Fla, Gla, Hla, Ila, Rq, Sq, Uq, Jla, Vq, Kla, Lla, Mla, Wq, Xq, Nla, Ola, Pla, Qla, Rla, Sla, Yq, Tla, Ula, ar, br, Vla, Wla, cr, Xla, Yla, $la, dr, Zla, ama, bma, gr, cma, dma, ema, fma, gma, hma, ima, jma, kma, lma, hr, mma, nma, ir, oma, pma, qma, rma, sma, tma, uma, vma, wma, jr, xma, yma, zma, Ama, Bma, kr, lr, Cma, Dma, Ema, Fma, Gma, Hma, Ima, Jma, Kma, Lma, Mma, Nma, Oma, Pma, Qma, Rma, Sma, Tma, Uma, Vma, Wma, Xma, Yma, Zma, $ma, ana, nr, bna, cna, dna, ena, fna, or, pr, gna,
                    hna, qr, ina, jna, kna, lna, mna, nna, ona, pna, qna, rna, rr, sna, tna, una, vna, sr, wna, xna, kla, Kna, Lna, Mna, Nna, Ona, Pna, Qna;
                tq = /^#[0-9a-f]{6}$/;
                uq = /^$|^(https?|ftp|tel|mailto):(\/\/|[^/])[^ ]+(\/|$)|^[^: ]+(\/|$)|^[\w.]+:\d+(\/|$)/;
                tla = {
                    "font-weight": El("inline", "normal thin extralight light medium semibold bold ultrabold heavy".split(" ")),
                    "font-style": El("inline", ["normal", "italic"]),
                    color: Dl("inline", /^#[0-9a-fA-F]{6}$/, "#000000"),
                    decoration: El("inline", ["none", "underline"]),
                    kerning: Cl("inline", {
                        min: -1E3,
                        max: 1E3,
                        vx: "fixed"
                    }),
                    link: Dl("inline", uq, ""),
                    "font-family": Dl("block", /^Y[A-Za-z0-9_-]{10},\d+$/, "YACgEZ1cb1Q,0"),
                    "font-size": Cl("block", {
                        min: 0,
                        defaultValue: 16,
                        vx: "fixed"
                    }),
                    leading: Cl("block", {
                        min: 500,
                        max: 2500,
                        defaultValue: 1400,
                        vx: "fixed"
                    }),
                    spacing: Cl("block", {
                        min: 0,
                        max: 5E3,
                        vx: "fixed"
                    }),
                    direction: El("block", ["ltr", "rtl"]),
                    tracking: Cl("block", {
                        min: -200,
                        max: 800,
                        vx: "fixed"
                    }),
                    "text-transform": El("block", ["none", "uppercase"]),
                    "text-align": El("block", ["start", "center", "end", "justify"]),
                    "head-indent": Cl("block", {
                        min: 0,
                        vx: "fixed"
                    }),
                    "list-marker": El("block", "none disc circle square decimal lower-alpha lower-roman".split(" ")),
                    "list-level": new jo,
                    style: El("block", "body pretitle title subtitle heading1 heading2 heading3 details caption header footer".split(" "))
                };
                __c.Zp = Fl(tla, {});
                vq = "normal thin extralight light medium semibold bold ultrabold heavy".split(" ");
                wq = /^Y[A-Za-z0-9_-]{10},\d+$/;
                xq = ["normal", "italic"];
                yq = ["none", "underline"];
                __c.zq = {
                    fontFamily: Dl("inline", wq, "YACgEZ1cb1Q,0"),
                    fontSize: Cl("inline", {
                        min: 0,
                        defaultValue: 16,
                        units: "px"
                    }),
                    fontWeight: El("inline", vq),
                    fontStyle: El("inline", xq),
                    color: Dl("inline", tq, "#000000"),
                    Lm: El("inline", yq),
                    link: Dl("inline", uq, ""),
                    letterSpacing: Cl("inline", {
                        min: -.2,
                        max: .8,
                        units: "em"
                    }),
                    lineHeight: Cl("block", {
                        min: .5,
                        max: 2.5,
                        defaultValue: 1.4
                    }),
                    direction: El("block", ["ltr", "rtl"]),
                    textAlign: El("block", ["start", "center", "end", "justify"]),
                    Tia: El("block", "none disc circle square decimal lower-alpha lower-roman checked unchecked".split(" ")),
                    Sia: new jo,
                    maa: Dl("inline", /^$/, ""),
                    naa: Dl("inline", /^$/, ""),
                    oaa: Dl("inline", /^$/, "")
                };
                __c.bq = Fl(__c.zq, {
                    h0: Dl("inline", /^(K[a-zA-Z0-9_-]{10}|)$/, "")
                });
                Object.keys({
                    h0: 0
                });
                Aq = new Wka;
                Bq = Pl(1, 3, 2, 4);
                Cq = Nl({
                    id: lo,
                    version: po
                });
                Dq = Kl((a) => Number.isFinite(a) && 0 <= a && 1 >= a);
                Eq = Kl((a) => Number.isFinite(a) && -180 <= a && 180 >= a);
                Fq = __c.Fq = Kl((a) => Number.isFinite(a) && 0 <= a && 100 >= a);
                Gq = __c.Gq = Kl((a) => Number.isFinite(a) && -100 <= a && 100 >= a);
                Hq = new Jo(new Ko(lo));
                Iq = Pl(1, 2, 3);
                ula = Nl({
                    Y: bp
                });
                vla = Nl({
                    Y: bp,
                    reverse: Vo
                });
                Jq = Nl({
                    Vb: Wo,
                    scale: Wo,
                    direction: Nm(Pl(1, 2, 3, 4, 5)),
                    ec: Nm(Pl(1, 2, 3, 4, 5)),
                    color: Uo,
                    va: Nm(ula),
                    X: Nm(vla)
                });
                wla = cn({
                    values: {
                        type: Pl("NONE")
                    },
                    attributes: {}
                });
                xla = cn({
                    values: {
                        type: Pl("SEQUENCED")
                    },
                    attributes: {
                        animation: po,
                        zg: Nm(Jq)
                    }
                });
                yla = cn({
                    values: {
                        type: Pl("INDEPENDENT")
                    },
                    attributes: {
                        animation: po,
                        zg: Nm(Jq)
                    }
                });
                zla = Nn({
                    NONE: wla,
                    SEQUENCED: xla,
                    INDEPENDENT: yla
                }, (a) => a.type, (a) => a.type);
                Kq = Nl({
                    vea: no
                });
                Lq = cn({
                    attributes: {
                        top: oo,
                        left: oo,
                        width: ro,
                        height: ro,
                        rotation: Eq,
                        Pa: Dq,
                        jb: bp,
                        Y: bp,
                        link: Nm(Ql(uq)),
                        locked: no,
                        Kn: Nm(Kq),
                        Tg: no,
                        hl: Uo,
                        jE: Uo,
                        aj: so,
                        anchor: Uo
                    },
                    rb: {
                        tH: qla,
                        Mj: Hq,
                        animation: $l(Nm(zla))
                    }
                });
                Mq = Nl({
                    top: oo,
                    left: oo,
                    width: ro,
                    height: ro,
                    rotation: Eq
                });
                Ala = Nl({
                    id: lo,
                    Vb: oo
                });
                Bla = cn({
                    attributes: {
                        O7: Nm(Ala),
                        brightness: Gq,
                        contrast: Gq,
                        saturation: Gq,
                        Ri: Gq,
                        sD: Fq,
                        blur: Gq,
                        tp: Gq,
                        qp: Gq,
                        Gm: Fq,
                        Mn: Fq,
                        Um: Gq,
                        Cn: Gq,
                        mi: Fq,
                        ho: Fq
                    }
                });
                Nq = Ql(tq);
                Oq = Nm(Nq);
                Pq = $l(Nm(Bla));
                Qq = Pl(1, 2, 3);
                Cla = cn({
                    values: {
                        direction: Pl(1, 2)
                    },
                    attributes: {
                        position: oo
                    }
                });
                Dla = Mm(Cla);
                Ela = cn({
                    values: {
                        media: Cq
                    },
                    rb: {
                        filter: Pq
                    },
                    attributes: {
                        wG: Nm(Qq),
                        ZE: Nm(Cq),
                        Rd: Nm(Mq),
                        Pa: Dq,
                        Ec: Ml(Nq, Nq)
                    }
                });
                Fla = $l(Nm(Ela));
                Gla = Nl({
                    jb: ro,
                    Yj: ro
                });
                Hla = cn({
                    values: {
                        video: lo,
                        Soa: Nm(Qq)
                    },
                    rb: {
                        filter: Pq
                    },
                    attributes: {
                        Rd: Mq,
                        Pa: Dq,
                        Ec: Ml(Nq, Nq),
                        trim: Nm(Gla),
                        M7: Pl(1, 2),
                        autoplay: no,
                        playbackRate: Nm(Sl(.25, 4)),
                        volume: Sl(0, 1)
                    }
                });
                Ila = $l(Nm(Hla));
                Rq = cn({
                    rb: {
                        image: Fla,
                        video: Ila
                    },
                    attributes: {
                        wl: Vo,
                        color: Oq,
                        Pa: Dq,
                        locked: no,
                        Tg: no,
                        hl: Uo,
                        flipX: no,
                        flipY: no
                    }
                });
                Sq = cn({
                    values: {
                        type: Pl("rect")
                    },
                    rb: {
                        fill: Rq
                    }
                }, Lq);
                __c.Tq = new __c.$p;
                Uq = Nl({
                    $d: Ll(po)
                });
                Jla = Kl((a) => /^\$\d:[a-zA-Z0-9_-]+$/.test(a) || Qn(a));
                Vq = Ll(Kl((a) => Number.isInteger(a) && 0 < a && 10 >= a), (a) => 10 >= a.length);
                Kla = cn({
                    attributes: {
                        weight: ro,
                        color: Nq,
                        Re: Vq,
                        oo: no
                    }
                });
                Lla = cn({
                    rb: {
                        fill: Rq,
                        stroke: $l(Nm(Kla))
                    },
                    attributes: {
                        d: Jla,
                        Gb: ro
                    }
                });
                Mla = Mm(Lla);
                Wq = Nl({
                    top: oo,
                    left: oo,
                    height: ro,
                    width: ro
                });
                Xq = Nm(Pl(1, 2));
                Nla = cn({
                    values: {
                        wL: Xq,
                        vertical: Xq
                    },
                    attributes: {
                        source: Wq,
                        Li: bp,
                        Ki: bp
                    }
                });
                Ola = cn({
                    rb: {
                        text: __c.Tq
                    },
                    attributes: {
                        box: Wq,
                        Cd: Uq,
                        Dd: Iq,
                        Vz: Mka
                    }
                });
                Pla = Mm(Ola);
                Qla = cn({
                    values: {
                        type: Pl("BLOCK")
                    },
                    attributes: {
                        minBlockSize: ro
                    }
                });
                Rla = Nn({
                    BLOCK: Qla
                }, (a) => a.type, (a) => a.type);
                Sla = Nl({
                    dfa: no,
                    cfa: no
                });
                Yq = cn({
                    values: {
                        type: Pl("shape")
                    },
                    rb: {
                        Va: Mla,
                        slice: Nm(Nla),
                        Ni: Pla,
                        resizeMode: Nm(Rla)
                    },
                    attributes: {
                        viewBox: Wq,
                        FA: Nm(Sla)
                    }
                }, Lq);
                Tla = Nl({
                    text: lo,
                    style: Uo
                });
                __c.Zq = cn({
                    values: {
                        type: lo
                    },
                    rb: {
                        parameters: new Jo(new Ko(lo))
                    }
                });
                __c.$q = Mm(__c.Zq);
                Ula = cn({
                    rb: {
                        Xa: __c.$q
                    }
                });
                ar = cn({
                    values: {
                        type: Pl("text")
                    },
                    rb: {
                        text: __c.Tq,
                        Xa: $l(Nm(Ula))
                    },
                    attributes: {
                        Cd: Uq,
                        ra: bp,
                        Ca: bp,
                        placeholder: Nm(Tla),
                        AE: Vo,
                        Am: Pl(1, 2, 3),
                        writingMode: Nm(Pl(1, 2, 3)),
                        CC: Nm(Pl(1, 2))
                    }
                }, Lq);
                br = cn({
                    values: {
                        type: Pl("embed"),
                        url: lo
                    },
                    attributes: {
                        ra: ro,
                        Ca: ro
                    }
                }, Lq);
                Vla = Nl({
                    wQ: lo,
                    top: Dq,
                    left: Dq,
                    ZM: Nm(Pl(1, 2))
                });
                Wla = Nl({
                    top: oo,
                    left: oo
                });
                cr = cn({
                    attributes: {
                        marker: Nm(Pl(1, 2, 3, 4, 5, 6, 7, 8, 9)),
                        anchor: Nm(Vla),
                        position: Nm(Wla)
                    }
                });
                Xla = cn({
                    values: {
                        type: Pl("ELBOWED")
                    },
                    attributes: {
                        path: Ll(oo, (a) => 3 <= a.length),
                        Gb: ro
                    }
                });
                Yla = Nn({
                    ELBOWED: Xla
                }, (a) => a.type, (a) => a.type);
                $la = class extends ko {
                    constructor() {
                        var a = Zla;
                        super();
                        this.type = a;
                        this.domain = a.domain
                    }
                    get(a, b, c) {
                        return b === dr ? a : this.handler && this.handler.get ? this.handler.get(a, b, c) : Reflect.get(a, b, c)
                    }
                    Fg(a) {
                        return new Proxy(this.type.Fg(a), this)
                    }
                    connect(a, b) {
                        return this.type.connect(a, b)
                    }
                    destroy(a, b) {
                        a = a[dr];
                        if (this.handler) {
                            const c = this.type.mb(a);
                            Tl(this.domain, b, this.handler.map(a, c));
                            this.type.destroy(a, c)
                        } else this.type.destroy(a, b)
                    }
                    mb(a) {
                        a = a[dr];
                        const b = this.type.mb(a);
                        return this.handler ? this.handler.map(a,
                            b) : b
                    }
                };
                dr = Symbol("target");
                Zla = cn({
                    values: {
                        type: Pl("line")
                    },
                    rb: {
                        start: cr,
                        end: cr,
                        Kg: $l(Nm(Yla))
                    },
                    attributes: {
                        weight: po,
                        color: Nq,
                        Re: Vq,
                        oo: no
                    }
                }, Lq);
                __c.er = new $la;
                ama = Nn({
                    line: __c.er,
                    rect: Sq,
                    shape: Yq,
                    text: ar,
                    embed: br
                }, (a) => a.type, (a) => a.type);
                __c.fr = Mm(ama);
                bma = Ll(Ll(Ql(/^[a-zA-Z][a-zA-Z0-9_-]*$/)), (a) => {
                    if (0 === a.length || 0 === a[0].length || !a.every((c) => c.length === a[0].length)) return !1;
                    const b = new Map;
                    for (let c = 0; c < a.length; c++)
                        for (let d = 0; d < a[c].length; d++) {
                            const e = a[c][d],
                                f = b.get(e);
                            f ? b.set(e, {
                                count: f.count + 1,
                                SD: Math.min(f.SD, d),
                                $aa: Math.max(f.$aa, d + 1),
                                qd: Math.min(f.qd, c),
                                Od: Math.max(f.Od, c + 1)
                            }) : b.set(e, {
                                count: 1,
                                SD: d,
                                $aa: d + 1,
                                qd: c,
                                Od: c + 1
                            })
                        }
                    return Array.from(b.values()).every((c) => {
                        var {
                            count: d,
                            SD: e,
                            $aa: f,
                            qd: g,
                            Od: h
                        } = c;
                        return d === (f - e) * (h - g)
                    })
                });
                gr = Ll(Nm(Ql(/^[0-9]+(\.[0-9]+)?fr$/)));
                cma = Nl({
                    template: bma,
                    Zq: gr,
                    Qs: gr,
                    Yq: ro,
                    Rs: ro
                }, (a) => a.Qs.length === a.template.length && a.Zq.length === a.template[0].length);
                dma = cn({
                    rb: {
                        fill: Rq
                    }
                });
                ema = new Jo(dma);
                fma = cn({
                    values: {
                        type: Pl("grid")
                    },
                    rb: {
                        cells: ema
                    },
                    attributes: {
                        N: cma
                    }
                }, Lq);
                gma = cn({
                    rb: {
                        $i: Hq
                    },
                    attributes: {
                        height: ro,
                        minHeight: ro
                    }
                });
                hma = cn({
                    values: {
                        id: lo
                    },
                    attributes: {
                        width: ro
                    }
                });
                ima = Mm(gma);
                jma = Mm(hma);
                kma = cn({
                    attributes: {
                        Ob: bp,
                        Nb: bp,
                        Ub: bp,
                        Sb: bp
                    }
                });
                lma = Nl({
                    color: Oq
                });
                hr = Nm(lma);
                mma = cn({
                    attributes: {
                        Ob: hr,
                        Nb: hr,
                        Ub: hr,
                        Sb: hr
                    }
                });
                nma = Nl({
                    Re: Vq
                });
                ir = Nm(nma);
                oma = cn({
                    attributes: {
                        Ob: ir,
                        Nb: ir,
                        Ub: ir,
                        Sb: ir
                    }
                });
                pma = cn({
                    values: {
                        type: Pl("TEXT")
                    },
                    attributes: {
                        Cd: Uq
                    },
                    rb: {
                        text: __c.Tq
                    }
                });
                qma = cn({
                    values: {
                        type: Pl("TEXT3")
                    }
                });
                rma = cn({
                    rb: {
                        text: Aq
                    }
                }, qma);
                sma = Nn({
                    TEXT: pma,
                    TEXT3: rma
                }, (a) => a.type, (a) => a.type);
                tma = cn({
                    rb: {
                        content: sma,
                        fill: Rq,
                        Cp: kma,
                        borderColor: mma,
                        Un: oma
                    },
                    attributes: {
                        Dd: Iq
                    }
                });
                uma = cn({
                    attributes: {
                        weight: ro,
                        color: Oq,
                        Re: Vq
                    }
                });
                vma = cn({
                    rb: {
                        rows: ima,
                        columns: jma,
                        borderStyle: uma
                    },
                    attributes: {
                        direction: Nm(Pl(1, 2)),
                        Xe: ro,
                        cellPadding: ro
                    }
                });
                wma = new Jo(tma);
                jr = cn({
                    rb: {
                        cells: wma,
                        N: vma
                    }
                });
                xma = cn({
                    values: Object.assign({}, jr.values, {
                        type: Pl("table")
                    }),
                    rb: jr.rb,
                    attributes: Object.assign({}, jr.attributes, {
                        Ca: ro,
                        ra: ro
                    })
                }, Lq);
                yma = Pl(1, 2);
                zma = Nl({
                    type: Pl("PALETTE"),
                    Fe: Ll(Nq)
                });
                Ama = Nl({
                    type: Pl("INTERPOLATE"),
                    colorSpace: yma,
                    from: Nq,
                    to: Nq
                });
                Bma = Ol({
                    PALETTE: zma,
                    INTERPOLATE: Ama
                }, (a) => a.type);
                kr = Pl(1, 2, 3, 4, 5);
                lr = Mm(Nka);
                Cma = Nl({
                    format: lo,
                    xza: Nm(mo),
                    iva: Nm(mo)
                });
                __c.mr = cn({
                    rb: {
                        values: lr
                    },
                    attributes: {
                        id: Uo,
                        Cg: Bma,
                        label: Uo,
                        Yw: Nm(Cma)
                    }
                });
                Dma = cn({
                    values: {
                        type: Pl("GROUPED_COLUMN")
                    },
                    attributes: {
                        spacing: oo,
                        yd: no,
                        Zd: Nm(ro),
                        Gb: Nm(ro)
                    }
                });
                Ema = cn({
                    values: {
                        type: Pl("STACKED_COLUMN")
                    },
                    attributes: {
                        spacing: oo,
                        yd: no,
                        Zd: Nm(ro),
                        Gb: Nm(ro)
                    }
                });
                Fma = cn({
                    values: {
                        type: Pl("GROUPED_ROW")
                    },
                    attributes: {
                        spacing: oo,
                        yd: no,
                        Zd: Nm(ro),
                        Gb: Nm(ro)
                    }
                });
                Gma = cn({
                    values: {
                        type: Pl("STACKED_ROW")
                    },
                    attributes: {
                        spacing: oo,
                        yd: no,
                        Zd: Nm(ro),
                        Gb: Nm(ro)
                    }
                });
                Hma = cn({
                    values: {
                        type: Pl("PIE")
                    },
                    attributes: {
                        spacing: Nm(ro),
                        Zd: Nm(ro),
                        Gb: Nm(ro)
                    }
                });
                Ima = cn({
                    values: {
                        type: Pl("DONUT")
                    },
                    attributes: {
                        spacing: Nm(ro),
                        Zd: Nm(ro),
                        Gb: Nm(ro)
                    }
                });
                Jma = cn({
                    values: {
                        type: Pl("LINE")
                    },
                    attributes: {
                        yd: no,
                        Pg: Nm(ro),
                        Tf: Nm(ro),
                        Sf: Nm(kr),
                        Di: no
                    }
                });
                Kma = cn({
                    values: {
                        type: Pl("STACKED_AREA")
                    },
                    attributes: {
                        yd: no,
                        Pg: Nm(ro),
                        Tf: Nm(ro),
                        Sf: Nm(kr),
                        Di: no
                    }
                });
                Lma = cn({
                    values: {
                        type: Pl("SCATTERPLOT")
                    },
                    attributes: {
                        yd: no,
                        Tf: Nm(ro),
                        Sf: Nm(kr)
                    }
                });
                Mma = cn({
                    values: {
                        type: Pl("PACKED_CIRCLES")
                    },
                    attributes: {
                        cO: so,
                        groupBy: so
                    }
                });
                Nma = cn({
                    values: {
                        type: Pl("TREEMAP")
                    },
                    attributes: {
                        cO: so,
                        groupBy: so
                    }
                });
                Oma = cn({
                    values: {
                        type: Pl("HISTOGRAM")
                    },
                    attributes: {
                        spacing: Nm(ro),
                        Zd: Nm(ro),
                        Gb: Nm(ro),
                        wda: Nm(ro)
                    }
                });
                Pma = cn({
                    values: {
                        type: Pl("RADAR")
                    },
                    attributes: {
                        Pg: Nm(ro),
                        Tf: Nm(ro),
                        Sf: Nm(kr),
                        Di: no
                    }
                });
                Qma = cn({
                    values: {
                        type: Pl("POPULATION_PYRAMID")
                    },
                    attributes: {
                        yd: no,
                        spacing: Nm(ro),
                        Zd: Nm(ro),
                        Gb: Nm(ro)
                    }
                });
                Rma = cn({
                    values: {
                        type: Pl("FUNNEL")
                    },
                    attributes: {
                        spacing: Nm(ro),
                        Zd: Nm(ro),
                        Gb: Nm(ro),
                        Di: no
                    }
                });
                Sma = cn({
                    values: {
                        type: Pl("DUMBBELL")
                    },
                    attributes: {
                        yd: no,
                        Pg: Nm(ro),
                        Tf: Nm(ro),
                        Sf: Nm(kr)
                    }
                });
                Tma = cn({
                    values: {
                        type: Pl("LOLLIPOP")
                    },
                    attributes: {
                        yd: no,
                        Pg: Nm(ro),
                        Tf: Nm(ro),
                        Sf: Nm(kr)
                    }
                });
                Uma = cn({
                    values: {
                        type: Pl("SUNBURST")
                    },
                    attributes: {
                        spacing: Nm(ro),
                        Zd: Nm(ro)
                    }
                });
                Vma = cn({
                    values: {
                        type: Pl("TIME_SERIES")
                    },
                    attributes: {
                        Pg: Nm(ro),
                        Di: no
                    }
                });
                Wma = cn({
                    values: {
                        type: Pl("PROGRESS")
                    },
                    attributes: {
                        Ala: Pl(1, 2, 3, 4),
                        endpoint: Pl(1, 2),
                        Wna: oo
                    }
                });
                Xma = cn({
                    values: {
                        type: Pl("PICTOGRAM")
                    },
                    attributes: {
                        Eha: so,
                        spacing: oo
                    }
                });
                Yma = Nn({
                    GROUPED_COLUMN: Dma,
                    STACKED_COLUMN: Ema,
                    GROUPED_ROW: Fma,
                    STACKED_ROW: Gma,
                    PIE: Hma,
                    DONUT: Ima,
                    LINE: Jma,
                    STACKED_AREA: Kma,
                    SCATTERPLOT: Lma,
                    PACKED_CIRCLES: Mma,
                    TREEMAP: Nma,
                    HISTOGRAM: Oma,
                    RADAR: Pma,
                    POPULATION_PYRAMID: Qma,
                    FUNNEL: Rma,
                    DUMBBELL: Sma,
                    LOLLIPOP: Tma,
                    SUNBURST: Uma,
                    TIME_SERIES: Vma,
                    PROGRESS: Wma,
                    PICTOGRAM: Xma
                }, (a) => a.type, (a) => a.type);
                Zma = Nl({
                    type: Pl("GOOGLE_SHEETS"),
                    url: lo,
                    Il: lo,
                    range: Uo
                });
                $ma = Ol({
                    GOOGLE_SHEETS: Zma
                }, (a) => a.type);
                ana = Mm(__c.mr);
                nr = cn({
                    rb: {
                        config: $l(Yma),
                        data: ana
                    },
                    attributes: {
                        ql: Nm($ma),
                        ek: no,
                        Lg: no,
                        Ek: no,
                        tq: no,
                        lm: no
                    }
                });
                bna = cn({
                    values: Object.assign({}, nr.values, {
                        type: Pl("chart")
                    }),
                    rb: Object.assign({}, nr.rb, {
                        $b: __c.fr,
                        labels: lr
                    }),
                    attributes: Object.assign({}, nr.attributes, {
                        Ta: Wq,
                        Ca: ro,
                        ra: ro,
                        bd: Ml(lo, lo)
                    })
                }, Lq);
                cna = cn({
                    values: {
                        app: Cq
                    },
                    rb: {
                        Yda: Hq
                    },
                    attributes: {
                        Tca: Ml(lo, lo)
                    }
                });
                dna = cn({
                    values: {
                        type: Pl("group")
                    },
                    rb: {
                        Nz: Nm(cna),
                        $b: __c.fr
                    },
                    attributes: {
                        Ca: ro,
                        ra: ro
                    }
                }, Lq);
                ena = Nn({
                    group: dna,
                    chart: bna,
                    grid: fma,
                    table: xma,
                    line: __c.er,
                    rect: Sq,
                    shape: Yq,
                    text: ar,
                    embed: br
                }, (a) => a.type, (a) => a.type);
                fna = Mm(ena);
                or = Kl((a) => -1 === a || ro.Qf(a));
                pr = Nl({
                    width: or,
                    height: or,
                    units: Bq
                }, (a) => -1 === a.width === (-1 === a.height));
                gna = cn({
                    attributes: {
                        rotation: Nm(Eq)
                    }
                });
                hna = new Jo(gna);
                qr = cn({
                    attributes: {
                        Y: ro
                    }
                });
                ina = cn({
                    values: {
                        type: Pl("CHOP")
                    },
                    attributes: {
                        direction: Pl(1, 2),
                        origin: Pl(1, 2, 3, 4)
                    }
                }, qr);
                jna = cn({
                    values: {
                        type: Pl("COLOR_WIPE")
                    },
                    attributes: {
                        Fe: Ll(Nq, (a) => 6 >= a.length),
                        direction: Pl(1, 2, 3, 4, 5, 6, 7, 8)
                    }
                }, qr);
                kna = cn({
                    values: {
                        type: Pl("CROSS_DISSOLVE")
                    }
                }, qr);
                lna = cn({
                    values: {
                        type: Pl("MATCH")
                    }
                }, qr);
                mna = cn({
                    values: {
                        type: Pl("FLOW")
                    },
                    attributes: {
                        direction: Pl(1, 2, 3, 4)
                    }
                }, qr);
                nna = cn({
                    values: {
                        type: Pl("SLIDE")
                    },
                    attributes: {
                        direction: Pl(1, 2, 3, 4)
                    }
                }, qr);
                ona = cn({
                    values: {
                        type: Pl("STACK")
                    },
                    attributes: {
                        direction: Pl(1, 2, 3, 4)
                    }
                }, qr);
                pna = cn({
                    values: {
                        type: Pl("WIPE_CIRCLE")
                    },
                    attributes: {
                        direction: Pl(1, 2)
                    }
                }, qr);
                qna = cn({
                    values: {
                        type: Pl("WIPE_LINE")
                    },
                    attributes: {
                        direction: Pl(1, 2, 3, 4)
                    }
                }, qr);
                rna = Nn({
                    CHOP: ina,
                    COLOR_WIPE: jna,
                    CROSS_DISSOLVE: kna,
                    FLOW: mna,
                    MATCH: lna,
                    SLIDE: nna,
                    STACK: ona,
                    WIPE_CIRCLE: pna,
                    WIPE_LINE: qna
                }, (a) => a.type, (a) => a.type);
                rr = $l(Nm(rna));
                sna = Nl({
                    id: lo,
                    version: po,
                    zk: Xo
                });
                tna = cn({
                    values: {
                        type: Uo
                    },
                    rb: {
                        background: Rq,
                        elements: fna,
                        transition: rr,
                        EE: hna,
                        Mj: Hq
                    },
                    attributes: {
                        title: Uo,
                        un: Uo,
                        Hg: no,
                        locked: no,
                        Kn: Nm(Kq),
                        Tg: no,
                        animation: Xo,
                        zg: Nm(Jq),
                        Y: bp,
                        aj: so,
                        anchor: Uo,
                        F: Nm(pr),
                        template: Nm(sna)
                    }
                });
                una = Nl({
                    type: Pl("REFERENCE"),
                    id: lo,
                    version: po
                });
                vna = Nl({
                    type: Pl("INLINE"),
                    width: or,
                    height: or,
                    units: Bq,
                    u5: Xo,
                    f5: Xo,
                    JU: Xo,
                    AU: Xo
                }, (a) => {
                    var b, c;
                    if (-1 === a.width !== (-1 === a.height)) return !1;
                    const d = null != a.JU || null != a.AU;
                    return null == a.u5 && null == a.f5 || !d ? (null !== (b = a.JU) && void 0 !== b ? b : 0) <= (null !== (c = a.AU) && void 0 !== c ? c : Infinity) : !1
                });
                sr = Ol({
                    INLINE: vna,
                    REFERENCE: una
                }, (a) => a.type);
                wna = new Jo(new Ko(Kl(function(a) {
                    return Qn(a)
                })));
                xna = cn({
                    rb: {
                        attributes: Hq
                    }
                });
                __c.tr = new Jo(xna);
                Nl({
                    Fe: Ll(Nq, (a) => 6 >= a.length)
                });
                var yna = Mm(tna),
                    zna = Nl({
                        jb: ro,
                        Yj: ro
                    }),
                    Ana = Nl({
                        type: Pl("LOGISTIC_SIGMOID")
                    }),
                    ur = Nl({
                        Y: ro,
                        easing: Ol({
                            LOGISTIC_SIGMOID: Ana
                        }, (a) => a.type)
                    }),
                    Bna = cn({
                        values: {
                            audio: lo
                        },
                        attributes: {
                            trim: Nm(zna),
                            loop: Pl(1, 2),
                            volume: Sl(0, 4),
                            jb: bp,
                            Y: bp,
                            Wt: Nm(ur),
                            Xt: Nm(ur)
                        }
                    }),
                    Cna = Mm(Bna),
                    Dna = cn({
                        rb: {
                            Dv: Cna
                        }
                    }),
                    vr = cn({
                        attributes: {
                            width: Ql(/^[0-9]+(\.[0-9]+)?%$/)
                        }
                    }),
                    Ena = cn({
                        values: {
                            type: Pl("rect")
                        },
                        rb: {
                            fill: Rq
                        }
                    }, vr),
                    Fna = cn({
                        values: Object.assign({}, jr.values, {
                            type: Pl("table")
                        }),
                        rb: jr.rb,
                        attributes: jr.attributes
                    }, vr),
                    Gna = cn({
                            values: {
                                type: Pl("separator")
                            }
                        },
                        vr),
                    Hna = cn({
                        values: {
                            type: Pl("embed"),
                            url: lo
                        },
                        attributes: {
                            ra: ro,
                            Ca: ro
                        }
                    }, vr),
                    Ina = cn({
                        attributes: {
                            fontFamily: Nm(Ql(wq)),
                            fontSize: Nm(oo),
                            fontWeight: Nm(Pl(...vq)),
                            fontStyle: Nm(Pl(...xq)),
                            color: Nm(Nq),
                            Lm: Nm(Pl(...yq))
                        }
                    }),
                    Jna = cn({
                        values: Object.assign({}, nr.values, {
                            type: Pl("chart")
                        }),
                        attributes: Object.assign({}, nr.attributes),
                        rb: Object.assign({}, nr.rb, {
                            bd: Ina
                        })
                    }, vr),
                    wr = {
                        rect: Ena,
                        embed: Hna,
                        separator: Gna,
                        chart: Jna
                    };
                Nn(wr, (a) => a.type, (a) => a.type);
                kla = Nn(Object.assign({}, wr, {
                    table: Fna
                }), (a) => a.type, (a) => a.type);
                __c.xr = new __c.cq;
                Aq.K9(__c.xr);
                Kna = cn({
                    rb: {
                        text: __c.xr
                    }
                });
                Lna = Mm(Kna);
                Mna = cn({
                    values: {
                        Je: Pl("fixed")
                    },
                    rb: {
                        cB: Dla,
                        Ty: wna,
                        Oi: __c.tr,
                        audio: Dna,
                        va: rr,
                        X: rr,
                        Ha: yna
                    },
                    attributes: {
                        doctype: sr,
                        F: pr,
                        language: Uo,
                        title: Uo,
                        description: Uo,
                        Da: so
                    }
                });
                Nna = cn({
                    values: {
                        Je: Pl("responsive")
                    },
                    rb: {
                        Oi: __c.tr,
                        Tn: Lna
                    },
                    attributes: {
                        doctype: sr,
                        F: pr,
                        language: Nm(lo),
                        title: Nm(lo)
                    }
                });
                __c.yr = Nn({
                    fixed: Mna,
                    responsive: Nna
                }, (a) => a.Je, (a) => a.Je);
                Ona = Nl({
                    brand: lo,
                    user: lo
                });
                Pna = cn({
                    values: {
                        id: lo,
                        zb: Ona,
                        rc: Nm(Pl(1, 2, 3, 4, 5, 6)),
                        SE: qo
                    },
                    attributes: {
                        GWa: qo
                    }
                });
                Qna = new Jo(Pna);
                cn({
                    rb: {
                        content: __c.yr,
                        clients: Qna
                    }
                });
                var Cr, Fr, Nr;
                __c.zr = Object.freeze({
                    wl: void 0,
                    color: void 0,
                    image: void 0,
                    video: void 0,
                    Pa: 0,
                    locked: !1,
                    Tg: !1,
                    hl: void 0,
                    flipX: !1,
                    flipY: !1
                });
                Object.freeze({
                    rotation: 0
                });
                Object.freeze({
                    Vb: 50
                });
                __c.Ar = Object.freeze({
                    O7: void 0,
                    brightness: 0,
                    contrast: 0,
                    saturation: 0,
                    Ri: 0,
                    sD: 50,
                    blur: 0,
                    tp: 0,
                    qp: 0,
                    Gm: 0,
                    Mn: 0,
                    Um: 0,
                    Cn: 0,
                    mi: 0,
                    ho: 0
                });
                __c.Br = Object.freeze({
                    wG: void 0,
                    ZE: void 0,
                    Ec: new Map,
                    filter: void 0,
                    Pa: 0
                });
                __c.Rna = Object.freeze({
                    Soa: void 0,
                    Ec: new Map,
                    filter: void 0,
                    Pa: 0,
                    trim: void 0,
                    M7: 1,
                    autoplay: !0,
                    playbackRate: void 0,
                    volume: 1
                });
                Cr = Object.freeze({
                    rotation: 0,
                    Pa: 0,
                    jb: void 0,
                    Y: void 0,
                    animation: void 0,
                    link: void 0,
                    locked: !1,
                    Kn: void 0,
                    Tg: !1,
                    hl: void 0,
                    jE: void 0,
                    aj: [],
                    tH: new Map,
                    anchor: void 0,
                    Mj: new Map
                });
                Object.freeze({
                    type: "SEQUENCED",
                    animation: 1,
                    zg: void 0
                });
                Object.freeze({
                    vea: !1
                });
                __c.Sna = Object.freeze(Object.assign({}, Cr, {
                    type: "group",
                    Nz: void 0
                }));
                __c.Tna = Object.freeze({
                    Yq: 0,
                    Rs: 0
                });
                __c.Una = Object.freeze(Object.assign({}, Cr, {
                    type: "grid"
                }));
                __c.Vna = Object.freeze(Object.assign({}, Cr, {
                    type: "table"
                }));
                __c.Wna = Object.freeze({
                    direction: void 0,
                    Xe: 0,
                    cellPadding: 0,
                    borderStyle: {
                        weight: 1,
                        color: "#ffffff",
                        Re: []
                    }
                });
                __c.Dr = Object.freeze({
                    $d: []
                });
                Object.freeze({
                    type: "TEXT",
                    Cd: __c.Dr
                });
                Object.freeze({
                    type: "TEXT3"
                });
                __c.Xna = Object.freeze({
                    fill: Object.assign({}, __c.zr),
                    Cp: {
                        Ob: void 0,
                        Nb: void 0,
                        Ub: void 0,
                        Sb: void 0
                    },
                    borderColor: {
                        Ob: void 0,
                        Nb: void 0,
                        Ub: void 0,
                        Sb: void 0
                    },
                    Un: {
                        Ob: void 0,
                        Nb: void 0,
                        Ub: void 0,
                        Sb: void 0
                    },
                    Dd: 2
                });
                __c.Er = Object.freeze({
                    id: void 0,
                    label: "",
                    Yw: void 0
                });
                Fr = Object.freeze({
                    ql: void 0,
                    ek: !1,
                    Lg: !1,
                    Ek: !1,
                    tq: !1,
                    lm: !1
                });
                __c.Gr = Object.freeze(Object.assign({}, Cr, Fr, {
                    type: "chart"
                }));
                Object.freeze({
                    type: "GROUPED_COLUMN",
                    spacing: .075,
                    yd: !1,
                    Zd: void 0,
                    Gb: void 0
                });
                __c.Yna = Object.freeze({
                    type: "STACKED_COLUMN",
                    spacing: .075,
                    yd: !1,
                    Zd: void 0,
                    Gb: void 0
                });
                Object.freeze({
                    type: "GROUPED_ROW",
                    spacing: .075,
                    yd: !1,
                    Zd: void 0,
                    Gb: void 0
                });
                Object.freeze({
                    type: "STACKED_ROW",
                    spacing: .075,
                    yd: !1,
                    Zd: void 0,
                    Gb: void 0
                });
                __c.Hr = Object.freeze({
                    type: "PIE",
                    spacing: .075,
                    Zd: void 0,
                    Gb: void 0
                });
                Object.freeze({
                    type: "DONUT",
                    spacing: .075,
                    Zd: void 0,
                    Gb: void 0
                });
                Object.freeze({
                    type: "LINE",
                    yd: !1,
                    Pg: void 0,
                    Tf: void 0,
                    Sf: void 0,
                    Di: !1
                });
                Object.freeze({
                    type: "STACKED_AREA",
                    yd: !1,
                    Pg: void 0,
                    Tf: void 0,
                    Sf: void 0,
                    Di: !1
                });
                Object.freeze({
                    type: "SCATTERPLOT",
                    yd: !1,
                    Tf: void 0,
                    Sf: void 0
                });
                Object.freeze({
                    type: "PACKED_CIRCLES",
                    groupBy: [],
                    cO: []
                });
                Object.freeze({
                    type: "TREEMAP",
                    groupBy: [],
                    cO: []
                });
                Object.freeze({
                    type: "HISTOGRAM",
                    spacing: .075,
                    Zd: void 0,
                    Gb: void 0,
                    wda: void 0
                });
                Object.freeze({
                    type: "RADAR",
                    Pg: void 0,
                    Tf: void 0,
                    Sf: void 0,
                    Di: !1
                });
                Object.freeze({
                    type: "POPULATION_PYRAMID",
                    yd: !1,
                    spacing: .075,
                    Zd: void 0,
                    Gb: void 0
                });
                Object.freeze({
                    type: "FUNNEL",
                    spacing: .075,
                    Zd: void 0,
                    Gb: void 0,
                    Di: !1
                });
                Object.freeze({
                    type: "DUMBBELL",
                    yd: !1,
                    Pg: void 0,
                    Tf: void 0,
                    Sf: void 0
                });
                Object.freeze({
                    type: "LOLLIPOP",
                    yd: !1,
                    Pg: void 0,
                    Tf: void 0,
                    Sf: void 0
                });
                Object.freeze({
                    type: "SUNBURST",
                    spacing: .075,
                    Zd: void 0
                });
                Object.freeze({
                    type: "TIME_SERIES",
                    Pg: void 0,
                    Di: !1
                });
                Object.freeze({
                    type: "PROGRESS",
                    Ala: 1,
                    endpoint: 1,
                    Wna: .1
                });
                Object.freeze({
                    type: "PICTOGRAM",
                    Eha: [],
                    spacing: .05
                });
                var Ir = Object.freeze({
                    marker: void 0,
                    anchor: void 0,
                    position: void 0
                });
                Object.freeze({
                    wQ: "ref",
                    top: .5,
                    left: .5,
                    ZM: 2
                });
                __c.Zna = Object.freeze({
                    Tca: new Map,
                    Yda: new Map
                });
                __c.$na = Object.freeze(Object.assign({}, Cr, {
                    type: "line",
                    start: Ir,
                    end: Ir,
                    Re: [],
                    oo: !1,
                    Kg: void 0
                }));
                __c.Jr = Object.freeze(Object.assign({}, Cr, {
                    type: "rect"
                }));
                __c.aoa = Object.freeze(Object.assign({}, Cr, {
                    type: "shape",
                    slice: void 0,
                    Ni: [],
                    resizeMode: void 0,
                    FA: void 0
                }));
                __c.boa = Object.freeze({
                    stroke: void 0,
                    Gb: 0
                });
                Object.freeze({
                    weight: 0,
                    color: "#000000",
                    Re: [],
                    oo: !1
                });
                __c.Kr = Object.freeze(Object.assign({}, Cr, {
                    type: "text",
                    Cd: __c.Dr,
                    Xa: void 0,
                    placeholder: void 0,
                    writingMode: void 0,
                    ra: void 0,
                    Ca: void 0,
                    AE: void 0,
                    CC: void 0
                }));
                __c.coa = Object.freeze(Object.assign({}, Cr, {
                    type: "embed"
                }));
                __c.Lr = Object.freeze({
                    type: void 0,
                    title: void 0,
                    un: void 0,
                    Hg: !1,
                    locked: !1,
                    Kn: void 0,
                    Tg: !1,
                    animation: void 0,
                    zg: void 0,
                    Y: void 0,
                    transition: void 0,
                    aj: [],
                    anchor: void 0,
                    Mj: new Map,
                    EE: new Map,
                    F: void 0,
                    template: void 0,
                    background: Object.freeze(Object.assign({}, __c.zr, {
                        color: "#ffffff"
                    })),
                    elements: []
                });
                __c.doa = Object.freeze({
                    trim: void 0,
                    loop: 2,
                    volume: 1,
                    jb: void 0,
                    Y: void 0,
                    Wt: void 0,
                    Xt: void 0
                });
                __c.Mr = Object.freeze({
                    Dv: []
                });
                Nr = Object.freeze({
                    width: "100%"
                });
                Object.freeze(Object.assign({}, Nr, {
                    type: "rect"
                }));
                __c.eoa = Object.freeze(Object.assign({}, Nr, {
                    type: "table"
                }));
                Object.freeze(Object.assign({}, Nr, {
                    type: "separator"
                }));
                __c.foa = Object.freeze(Object.assign({}, Nr, {
                    type: "embed"
                }));
                __c.Or = Object.freeze({
                    fontFamily: void 0,
                    fontSize: void 0,
                    fontWeight: void 0,
                    fontStyle: void 0,
                    color: void 0,
                    Lm: void 0
                });
                __c.goa = Object.freeze(Object.assign({}, Nr, Fr, {
                    type: "chart",
                    bd: Object.assign({}, __c.Or)
                }));
                __c.Pr = Object.freeze({
                    type: "INLINE",
                    u5: void 0,
                    f5: void 0,
                    JU: void 0,
                    AU: void 0
                });
                __c.Qr = Object.freeze({
                    Je: "fixed",
                    language: void 0,
                    title: void 0,
                    description: void 0,
                    Da: [],
                    Oi: new Map,
                    Ty: new Map,
                    cB: [],
                    audio: __c.Mr,
                    va: void 0,
                    X: void 0,
                    Ha: []
                });
                __c.hoa = Object.freeze({
                    Je: "responsive",
                    language: void 0,
                    title: void 0,
                    description: void 0,
                    Tn: []
                });
                Object.freeze({
                    clients: new Map
                });
                new __c.Ui({
                    type: 1
                });
            }).call(self, self._cdf17aa01cb7a37fe84ed76fc113a158);
        }

    }
])
//# sourceMappingURL=sourcemaps/c541f90421439d26.js.map