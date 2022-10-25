(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [4174], {

        /***/
        65146: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(2868);
            __web_req__(4252);
            self._cdf17aa01cb7a37fe84ed76fc113a158 = self._cdf17aa01cb7a37fe84ed76fc113a158 || {};
            (function(__c) {
                "use strict";
                var t = __c.t,
                    kz, mz, oz, rz, tz, Dz, bA, zq = __c.zq,
                    ld = __c.ld;
                var pua, qua, $y, rua, cz, sua, tua, uua, oua, Qz;
                pua = function(a, b) {
                    return new __c.Bba(a, `${"en-psaccent"===b?"en":b}-u-nu-latn`, oua, {
                        ignoreTag: !0
                    })
                };
                __c.Wy = function(a, b, c, d = __c.xb(), e = __c.yb[d], f = __c.Jba, g = pua) {
                    const h = {};
                    for (let k = 0; k < b.length; ++k) h[k] = b[k];
                    if (b = f.get(a)) return f = b.format(h), __c.zb ? "\u2062" + f + __c.vb(a) : f;
                    e = e && e[a];
                    null == e && (e = c);
                    if (null == e) throw Error(`Could not find string for ${d} ${a}`);
                    c = g(e, d);
                    f.set(a, c);
                    f = c.format(h);
                    return __c.zb ? "\u2062" + f + __c.vb(a) : f
                };
                __c.Xy = function(a, b, c) {
                    t(a.length === b.length);
                    const d = [];
                    for (let e = 0; e < a.length; e++) d.push(c(a[e], b[e]));
                    return d
                };
                qua = function(a) {
                    const b = [],
                        c = [];
                    a.forEach(([d, e]) => {
                        b.push(d);
                        c.push(e)
                    });
                    return [b, c]
                };
                __c.Yy = function(a) {
                    const b = [];
                    for (let c = 0; c < a.length; c++)
                        for (let d = 0; d < a[c].length; d++) b[d] = b[d] || [], b[d][c] = a[c][d];
                    return b
                };
                __c.Zy = function(a) {
                    var b = a.flat().filter((k) => Number.isFinite(k));
                    a = b.length ? Math.max(...b) : 0;
                    b = b.length ? Math.min(...b) : 0;
                    const c = Math.max(Math.abs(a), Math.abs(b)),
                        d = 0 === a && 0 === b ? 100 : 10 ** Math.floor(Math.log10(c)),
                        {
                            bound: e,
                            Qha: f
                        } = [
                            [1, 4],
                            [1.25, 5],
                            [1.5, 3],
                            [2, 4],
                            [2.5, 5],
                            [3, 3],
                            [4, 4],
                            [5, 5],
                            [6, 3],
                            [7.5, 3],
                            [8, 4],
                            [10, 4]
                        ].map((k) => {
                            var [l, m] = k;
                            return {
                                bound: Number((l * d).toPrecision(3)),
                                Qha: m
                            }
                        }).filter((k) => k.bound >= c).filter((k) => 3 > c || 0 === k.bound % k.Qha || 10 === k.bound).sort((k, l) => l.bound - k.bound).pop();
                    if (null == e || !Number.isFinite(e)) throw Error();
                    const g = e / f;
                    a = Number((0 === a && 0 === b ? 100 : Math.max(0, Math.ceil(a / g) * g)).toPrecision(3));
                    const h = Number(Math.min(0, Math.floor(b / g) * g).toPrecision(3));
                    if (!Number.isFinite(a) || !Number.isFinite(h) || a < h) throw Error();
                    b = Array.from({
                        length: Math.round((a - h) / g + 1)
                    }, (k, l) => Number((l * g + h).toPrecision(3)));
                    if (2 > b.length || 12 < b.length) throw Error();
                    return {
                        upperBound: a,
                        lowerBound: h,
                        ju: b
                    }
                };
                __c.bz = function(a) {
                    let b = "",
                        c = "";
                    a = __c.Yy(a).flat();
                    for (const e of a) {
                        var d = e.trim();
                        a = $y(d);
                        if ((d = az.exec(d)) && isFinite(a) && (b = d[1], (c = d[3]) || b)) break
                    }
                    return (e) => isNaN(e) ? "" : b + __c.Wy("9IkXrg", [e]) + c
                };
                $y = function(a) {
                    return (a = az.exec(a)) ? parseFloat(a[2].replace(/[,\s]*/g, "")) : NaN
                };
                __c.dz = function(a, b, c) {
                    a = rua(a, b);
                    for (const f of c) a = f(a);
                    const [d, e] = cz(a);
                    return {
                        labels: d,
                        Jd: e
                    }
                };
                rua = function(a, b) {
                    return __c.Xy(a, __c.Yy(b), (c, d) => [c, d.map((e) => $y(e))])
                };
                cz = function(a) {
                    const [b, c] = qua(a);
                    return [b, __c.Yy(c)]
                };
                __c.ez = function(a) {
                    return a.map((b) => {
                        var [c, d] = b;
                        return [c, d.map((e) => Math.max(0, e))]
                    })
                };
                __c.fz = function(a) {
                    return a.map((b) => {
                        var [c, d] = b;
                        return [c, d.map((e) => Number.isFinite(e) ? e : 0)]
                    })
                };
                __c.gz = function(a) {
                    return a.filter((b) => {
                        var [c, d] = b;
                        return 0 < c.trim().length || d.some(Number.isFinite)
                    })
                };
                __c.hz = function(a) {
                    const [b, c] = cz(a);
                    a = c.filter((d) => d.some(Number.isFinite));
                    return 0 === a.length ? [] : __c.Xy(b, __c.Yy(a), (d, e) => [d, e])
                };
                __c.iz = function(a) {
                    const b = [],
                        c = [];
                    a.forEach((d) => {
                        const e = d.values.map((f) => f.value);
                        sua(e) && (b.push(e), c.push(d))
                    });
                    return {
                        Jd: b,
                        Ti: c
                    }
                };
                sua = function(a) {
                    return a.map($y).some((b) => Number.isFinite(b))
                };
                kz = __c.kz = function(a) {
                    return a * __c.jz / 180
                };
                __c.nz = function(a, b) {
                    return __c.lz(mz(b, a))
                };
                __c.lz = function(a) {
                    return Math.sqrt(a.x * a.x + a.y * a.y)
                };
                mz = __c.mz = function(a, b) {
                    return new oz(a.x - b.x, a.y - b.y)
                };
                __c.pz = function(a, b, c) {
                    return new oz(a.x + c * (b.x - a.x), a.y + c * (b.y - a.y))
                };
                rz = __c.rz = function(a, b) {
                    return new qz(1, 1, 0, a, 0, 1, b)
                };
                __c.sz = function(a) {
                    t(Number.isFinite(a) && 0 !== a, "invalid scale: {}", a);
                    return new qz(a, a, 0, 0, 0, a, 0)
                };
                tz = __c.tz = function(a) {
                    let b = Math.cos(a);
                    a = Math.sin(a);
                    1 === Math.abs(b) ? a = 0 : 1 === Math.abs(a) && (b = 0);
                    return new qz(1, b, -a, 0, a, b, 0)
                };
                __c.uz = function(a, b) {
                    return rz(-a.x, -a.y).then(tz(b)).then(rz(a.x, a.y))
                };
                __c.vz = function(a) {
                    const b = 1 / a.s,
                        c = b * b;
                    return new qz(b, c * a.ft, c * -a.ct, c * (a.ct * a.ez - a.cz * a.ft), c * -a.kp, c * a.jp, c * (a.cz * a.kp - a.jp * a.ez))
                };
                __c.xz = function(...a) {
                    t(0 < a.length);
                    const b = a.map((c) => c.x);
                    a = a.map((c) => c.y);
                    return __c.wz(Math.min(...b), Math.min(...a), Math.max(...b), Math.max(...a))
                };
                __c.wz = function(a, b, c, d) {
                    t(c >= a);
                    t(d >= b);
                    return new __c.yz(b, a, d - b, c - a, 0)
                };
                __c.zz = function({
                    top: a,
                    left: b,
                    width: c,
                    height: d,
                    rotation: e
                }) {
                    return new __c.yz(a, b, d, c, e)
                };
                __c.Az = function({
                    $a: a,
                    width: b,
                    height: c,
                    rotation: d
                }) {
                    return new __c.yz(a.y - c / 2, a.x - b / 2, c, b, d)
                };
                __c.Bz = function(a) {
                    return 1e-10 >= Math.abs(a - 1) ? 1 : a
                };
                __c.Cz = function(a) {
                    if ("number" === typeof a) {
                        const b = Math.round(1E3 * a) / 1E3;
                        return 1e-10 > Math.abs(a - b) ? b : a
                    }
                    return new oz(__c.Cz(a.x), __c.Cz(a.y))
                };
                Dz = __c.Dz = function(a) {
                    if (null == a.QP) {
                        const b = a.left,
                            c = a.top,
                            d = a.left + a.width,
                            e = a.top + a.height;
                        if (0 === a.rotation) a.QP = [new oz(b, c), new oz(d, c), new oz(b, e), new oz(d, e)];
                        else {
                            const f = __c.uz(a.$a(), kz(a.rotation));
                            a.QP = [f.transform(b, c), f.transform(d, c), f.transform(b, e), f.transform(d, e)]
                        }
                    }
                    return a.QP
                };
                __c.Ez = function(a, b) {
                    function c(d, e) {
                        var f = d.$a();
                        f = Dz(e.transform(rz(-f.x, -f.y).then(tz(kz(-d.rotation)))));
                        e = f.map((g) => g.x);
                        f = f.map((g) => g.y);
                        return Math.min(...e) < d.width / 2 && Math.max(...e) > -d.width / 2 && Math.min(...f) < d.height / 2 && Math.max(...f) > -d.height / 2
                    }
                    return c(a, b) && c(b, a)
                };
                __c.Gz = function(a, b) {
                    const c = __c.Fz(a),
                        d = a.width + 1e-10,
                        e = a.height + 1e-10;
                    return b.every((f) => {
                        f = c.transformPoint(f);
                        return -1e-10 <= f.x && f.x <= d && -1e-10 <= f.y && f.y <= e
                    })
                };
                __c.Fz = function(a) {
                    const b = a.$a();
                    return rz(-b.x, -b.y).then(tz(kz(-a.rotation))).then(rz(b.x - a.left, b.y - a.top))
                };
                tua = function(a) {
                    const b = a.$a();
                    return rz(-b.x, -b.y).then(tz(kz(-a.rotation)))
                };
                __c.Hz = function({
                    x: a,
                    y: b
                }, c) {
                    const d = c / 2;
                    return ["M", a + d, b, "a", d, d, 0, 0, 0, -c, 0, "a", d, d, 0, 0, 0, c, 0, "Z"].join(" ")
                };
                __c.Iz = function({
                    x: a,
                    y: b
                }, c, d) {
                    c /= 2;
                    d = d || 0;
                    return ["M", a + c, b + c - d, "L", a + c, b - c + d, "A", d, d, 0, 0, 0, a + c - d, b - c, "L", a - c + d, b - c, "A", d, d, 0, 0, 0, a - c, b - c + d, "L", a - c, b + c - d, "A", d, d, 0, 0, 0, a - c + d, b + c, "L", a + c - d, b + c, "A", d, d, 0, 0, 0, a + c, b + c - d, "Z"].join(" ")
                };
                __c.Jz = function(a) {
                    return `#${(256+Math.round(a.r)).toString(16).slice(-2)}${(256+Math.round(a.g)).toString(16).slice(-2)}${(256+Math.round(a.b)).toString(16).slice(-2)}`
                };
                __c.Kz = function(a) {
                    return "INTERPOLATE" === a.Cg.type
                };
                uua = function({
                    text: a,
                    fontSize: b,
                    fontFamily: c
                }) {
                    return `${a}.${b.toFixed(1)}.${c}`
                };
                __c.Pz = function({
                    text: a,
                    fontSize: b,
                    fontFamily: c,
                    Bm: d
                }) {
                    __c.ja((0, __c.Lz)(), "baseMeasureText should only be called from within a reactive context");
                    const e = uua({
                        text: a,
                        fontSize: b,
                        fontFamily: c
                    });
                    var f = Mz.get(e);
                    if (f) return {
                        kM: f.get(),
                        Bm: d
                    };
                    f = (0, __c.Nz)(() => {
                        var g;
                        (g = d) || (g = document.createElement("canvas"), g = __c.u(g.getContext("2d"), "could not initialize measuring canvas context"), g.font = `${b}px '${c}'`);
                        d = g;
                        const {
                            actualBoundingBoxLeft: h,
                            actualBoundingBoxRight: k,
                            actualBoundingBoxAscent: l,
                            actualBoundingBoxDescent: m
                        } =
                        d.measureText(a);
                        return {
                            width: h + k,
                            height: l + m
                        }
                    });
                    Mz.set(e, f);
                    (0, __c.Oz)(f, () => {
                        Mz.delete(e)
                    });
                    return {
                        kM: f.get(),
                        Bm: d
                    }
                };
                oua = {
                    date: {
                        weekday: {
                            weekday: "long"
                        },
                        mediumNoYear: {
                            month: "short",
                            day: "numeric"
                        },
                        mediumNoYearUTC: {
                            month: "short",
                            day: "numeric",
                            timeZone: "UTC"
                        },
                        monthUTC: {
                            month: "long",
                            timeZone: "UTC"
                        },
                        shortMonthUTC: {
                            month: "short",
                            timeZone: "UTC"
                        },
                        monthYear: {
                            month: "long",
                            year: "numeric"
                        },
                        monthYearUTC: {
                            month: "long",
                            year: "numeric",
                            timeZone: "UTC"
                        },
                        longNoYear: {
                            month: "long",
                            day: "numeric"
                        },
                        longUTC: {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                            timeZone: "UTC"
                        }
                    }
                };
                Qz = __webpack_require__(22188);
                __c.Nz = Qz.Fl;
                __c.Lz = Qz.SW;
                __c.Oz = Qz.pA;
                __webpack_require__(70655);
                __c.Rz = Object.assign({}, __c.Kr, {
                    hl: "detail",
                    Am: 2,
                    CC: 2
                });
                var az = /([^\-0-9,.]*)([\-0-9,.\s]*\d(?:\s*[Ee][+-]?\d+)?)(\D*)/;
                __c.jz = Math.PI;
                __c.Sz = 2 * __c.jz;
                oz = __c.oz = class {
                    constructor(a, b) {
                        this.x = a;
                        this.y = b
                    }
                    static of ({
                        x: a,
                        y: b
                    }) {
                        return new oz(a, b)
                    }
                    toString() {
                        return `(${this.x},${this.y})`
                    }
                };
                var qz = class {
                    constructor(a, b, c, d, e, f, g) {
                        this.s = a;
                        this.jp = b;
                        this.ct = c;
                        this.cz = d;
                        this.kp = e;
                        this.ft = f;
                        this.ez = g
                    }
                    static identity() {
                        return new qz(1, 1, 0, 0, 0, 1, 0)
                    }
                    transform(a, b) {
                        return new oz(this.jp * a + this.ct * b + this.cz, this.kp * a + this.ft * b + this.ez)
                    }
                    transformPoint(a) {
                        return new oz(this.jp * a.x + this.ct * a.y + this.cz, this.kp * a.x + this.ft * a.y + this.ez)
                    }
                    multiply(a) {
                        return new qz(this.s * a.s, this.jp * a.jp + this.ct * a.kp, this.jp * a.ct + this.ct * a.ft, this.jp * a.cz + this.ct * a.ez + this.cz, this.kp * a.jp + this.ft * a.kp, this.kp *
                            a.ct + this.ft * a.ft, this.kp * a.cz + this.ft * a.ez + this.ez)
                    }
                    then(a) {
                        return a.multiply(this)
                    }
                    rotation(a = !1, b = !1) {
                        t((a ? -1 : 1) * (b ? -1 : 1) === Math.sign(this.s), "invalid flip configuration: {}, {}, {}", a, b, this.s);
                        return a ? Math.atan2(-this.kp, -this.jp) : Math.atan2(+this.kp, +this.jp)
                    }
                    scale(a = !1, b = !1) {
                        a = (a ? -1 : 1) * (b ? -1 : 1) * this.s;
                        t(0 < a);
                        return a
                    }
                    toString() {
                        return `[ ${this.jp.toPrecision(3)} ${this.ct.toPrecision(3)} ${this.cz.toPrecision(3)} ` + `| ${this.kp.toPrecision(3)} ${this.ft.toPrecision(3)} ${this.ez.toPrecision(3)} ` +
                            "| 0.00 0.00 1.00 ]"
                    }
                };
                __c.yz = class {
                    constructor(a, b, c, d, e = 0) {
                        this.top = a;
                        this.left = b;
                        this.height = c;
                        this.width = d;
                        this.QP = void 0; - 180 <= e && 180 > e ? a = e : 180 <= e && 360 > e ? a = e - 360 : (a = (e % 360 + 360) % 360, a = 180 <= a ? a - 360 : a);
                        this.rotation = a
                    }
                    get tl() {
                        const [a] = Dz(this);
                        return a
                    }
                    get tr() {
                        const [, a] = Dz(this);
                        return a
                    }
                    get dw() {
                        const [, , a] = Dz(this);
                        return a
                    }
                    get br() {
                        const [, , , a] = Dz(this);
                        return a
                    }
                    get t() {
                        const [a, b] = Dz(this);
                        return __c.pz(a, b, .5)
                    }
                    get r() {
                        const [, a, , b] = Dz(this);
                        return __c.pz(a, b, .5)
                    }
                    get b() {
                        const [, , a, b] =
                        Dz(this);
                        return __c.pz(a, b, .5)
                    }
                    get ye() {
                        const [a, , b] = Dz(this);
                        return __c.pz(a, b, .5)
                    }
                    get c() {
                        return this.$a()
                    }
                    $a() {
                        return new oz(this.left + this.width / 2, this.top + this.height / 2)
                    }
                    equals(a) {
                        return this.top === a.top && this.left === a.left && this.width === a.width && this.height === a.height && this.rotation === a.rotation
                    }
                    transform(a) {
                        const b = a.transformPoint(this.$a());
                        var c = a.scale();
                        const d = this.width * c;
                        c *= this.height;
                        a = this.rotation + 180 * a.rotation() / __c.jz;
                        return __c.Az({
                            $a: b,
                            width: d,
                            height: c,
                            rotation: a
                        })
                    }
                    scale(a) {
                        return this.transform(__c.sz(a))
                    }
                    translate(a,
                        b) {
                        return this.transform(rz(a, b))
                    }
                    rotate(a) {
                        return this.transform(tz(a))
                    }
                    resize(a, b, c, d) {
                        const e = tua(this);
                        var f = __c.vz(e);
                        const [g, h, k, l] = [a, b, c, d].map((m) => e.transformPoint(m));
                        a = mz(h, g);
                        c = mz(l, k);
                        t(0 !== a.x && 0 !== a.y);
                        b = __c.Bz(c.x / a.x);
                        c = __c.Bz(c.y / a.y);
                        t(0 <= b);
                        t(0 <= c);
                        b *= this.width;
                        c *= this.height;
                        f = __c.Cz(f.transformPoint(new oz((k.x * h.x - g.x * l.x) / a.x, (k.y * h.y - g.y * l.y) / a.y)));
                        return __c.Az({
                            $a: f,
                            width: b,
                            height: c,
                            rotation: this.rotation
                        })
                    }
                    resizeTo(a, b, c) {
                        __c.ja(0 !== this.width &&
                            0 !== this.height);
                        const d = this.rotation;
                        var e = b / this.width,
                            f = c / this.height;
                        const g = kz(d),
                            h = Math.cos(g);
                        var k = h * h;
                        const l = 1 - k,
                            m = e * k + f * l;
                        k = e * l + f * k;
                        e = (e - f) * h * Math.sin(g);
                        f = mz(a, this.$a());
                        return __c.Az({
                            $a: mz(a, new oz(m * f.x + e * f.y, e * f.x + k * f.y)),
                            width: b,
                            height: c,
                            rotation: d
                        })
                    }
                };
                __c.yz.prototype.Pz = __c.ba(61);
                var Tz;
                Tz = Math.PI / 5;
                __c.Uz = Math.cos(Tz);
                __c.Vz = Math.sin(Tz);
                __c.Wz = Math.cos(Tz / 2);
                __c.Xz = Math.sin(Tz / 2);
                __c.vua = Math.atan(Math.PI / 2 - 2 * Tz);
                var wua;
                __c.Yz = class {
                    constructor(a, b, c) {
                        this.r = a;
                        this.g = b;
                        this.b = c;
                        t(0 <= a && 255 >= a, "invalid r: {}", a);
                        t(0 <= b && 255 >= b, "invalid g: {}", b);
                        t(0 <= c && 255 >= c, "invalid b: {}", c)
                    }
                    static kj(a) {
                        const b = wua.exec(a);
                        if (!b) throw Error(`invalid hexadecimal color: ${a}`);
                        return new __c.Yz(parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16))
                    }
                };
                __c.Zz = class {
                    constructor(a, b, c) {
                        this.x = a;
                        this.y = b;
                        this.z = c
                    }
                };
                __c.$z = Object.freeze({
                    sba: new __c.Zz(96.42, 100, 82.51),
                    ipa: 24389 / 27,
                    hpa: 216 / 24389
                });
                wua = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i;
                Object.freeze({
                    top: 0,
                    left: 0,
                    width: 0,
                    height: 0
                });
                __c.aA = Object.freeze({
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                });
                bA = __c.bA = class {
                    constructor() {
                        this.eQ = this.OP = this.WP = this.gQ = 0
                    }
                    get top() {
                        return Math.round(this.gQ)
                    }
                    set top(a) {
                        this.gQ = a
                    }
                    get left() {
                        return Math.round(this.WP)
                    }
                    set left(a) {
                        this.WP = a
                    }
                    get bottom() {
                        return Math.round(this.OP)
                    }
                    set bottom(a) {
                        this.OP = a
                    }
                    get right() {
                        return Math.round(this.eQ)
                    }
                    set right(a) {
                        this.eQ = a
                    }
                };
                __c.p = bA.prototype;
                _dmr(bA, "gQ");
                _dmr(bA, "WP");
                _dmr(bA, "OP");
                _dmr(bA, "eQ");
                _dmc(bA, "top");
                _dmc(bA, "left");
                _dmc(bA, "bottom");
                _dmc(bA, "right");
                __c.cA = Object.freeze({
                    fontFamily: zq.fontFamily.defaultValue,
                    fontSize: zq.fontSize.defaultValue,
                    fontWeight: zq.fontWeight.defaultValue,
                    fontStyle: zq.fontStyle.defaultValue,
                    color: zq.color.defaultValue,
                    Lm: zq.Lm.defaultValue
                });
                var Mz;
                Mz = new Map;
                __c.dA = ({
                    text: a,
                    fontSize: b,
                    fontFamily: c
                }) => __c.Pz({
                    text: a,
                    fontSize: b,
                    fontFamily: c
                }).kM;
                __c.eA = new Map;
                var xua = __c.G(() => [0, "JPG", 1, "PNG", 2, "SVG"]);
                __c.fA = __c.E(() => ({
                    url: __c.I("url", 1),
                    gPa: __c.Q("cdnUrl", 20),
                    brightness: ld("brightness", 2),
                    contrast: ld("contrast", 3),
                    saturation: ld("saturation", 4),
                    qp: ld("warmth", 12),
                    Ri: ld("tint", 5),
                    sD: ld("tintAmount", 6),
                    blur: ld("blur", 7),
                    Gm: ld("clarity", 13),
                    Um: ld("highlights", 15),
                    Cn: ld("shadows", 16),
                    Mn: ld("vibrance", 17),
                    ho: ld("fade", 14),
                    tp: ld("xpro", 8),
                    uZa: __c.Ka("outputFormat", 9, xua),
                    vWa: __c.md("jpegQuality", 10),
                    EYa: __c.Q("noCache", 11),
                    width: __c.md("width", 18),
                    height: __c.md("height", 19)
                }));
                __c.yua = __c.E(() => ({
                    ema: __c.D("requests", 1, __c.fA)
                }));
            }).call(self, self._cdf17aa01cb7a37fe84ed76fc113a158);
        }

    }
])
//# sourceMappingURL=sourcemaps/2ee389f13c804c3b.js.map