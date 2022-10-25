(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [7651], {

        /***/
        83890: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(2868);
            __web_req__(4252);
            __web_req__(97924);
            __web_req__(39673);
            self._cdf17aa01cb7a37fe84ed76fc113a158 = self._cdf17aa01cb7a37fe84ed76fc113a158 || {};
            (function(__c) {
                "use strict";
                var t = __c.t,
                    G = __c.G,
                    E = __c.E,
                    M = __c.M,
                    I = __c.I,
                    C = __c.C,
                    Ja = __c.Ja,
                    Q = __c.Q,
                    A = __c.A,
                    w = __c.w,
                    od = __c.od,
                    Ra = __c.Ra,
                    D = __c.D,
                    kd = __c.kd,
                    jd = __c.jd,
                    P = __c.P;
                var Ava, Bva, yC, xC, zC, AC, BC, DC, EC, HC, JC, KC, LC, MC, Dva, RC, TC, UC, VC, WC;
                __c.rC = function(a, b) {
                    if (!b) return a;
                    if (b instanceof Map)
                        for (const [c, d] of b) __c.qC(a, c, d);
                    else
                        for (const c in b) __c.qC(a, c, b[c]);
                    return a
                };
                __c.qC = function(a, b, c) {
                    t(0 < b.length);
                    t(!a.params.has(b));
                    if (null != c)
                        if (Array.isArray(c)) {
                            c = c.filter(__c.pl);
                            if (0 === c.length) return a;
                            t(c.every((d) => "number" === typeof d || "string" === typeof d));
                            a.params.set(b, c)
                        } else if ("boolean" === typeof c) a.params.set(b, c || String(c));
                    else if ("number" === typeof c || "string" === typeof c) a.params.set(b, String(c));
                    else throw Error(`invalid param value type: ${typeof c}`);
                    return a
                };
                __c.sC = function(a) {
                    if (0 === a.params.size) return a.path;
                    const b = Array.from(a.params.entries()).map(([c, d]) => !0 === d ? `${encodeURIComponent(c)}` : Array.isArray(d) ? d.map((e) => `${encodeURIComponent(c)}=${encodeURIComponent(e)}`).join("&") : `${encodeURIComponent(c)}=${encodeURIComponent(d)}`).join("&");
                    return `${a.path}?${b}`
                };
                __c.uC = function(a, b) {
                    t(0 < a.length);
                    t(a.every((c) => 0 > c.indexOf("?")));
                    return __c.rC(new __c.tC(["", ...a.map(encodeURIComponent)].join("/")), b)
                };
                Ava = function(a) {
                    return Object.entries(a).reduce((b, [c, d]) => {
                        "name" !== c && null != d && (c = c.replace(/[-.]/g, "_"), b[c] = d);
                        return b
                    }, {})
                };
                Bva = function(a) {
                    return Object.entries(a).reduce((b, [c, d]) => {
                        if ("name" !== c && null != d) {
                            const f = typeof d;
                            var e = f;
                            e = __c.mk.has(c) && __c.mk.get(c) !== e;
                            b[`${c}${e?`_${f}`:""}`] = d
                        }
                        return b
                    }, {})
                };
                __c.vC = function(a) {
                    a = Ava(a);
                    return Bva(a)
                };
                __c.wC = function(a) {
                    return [a.brightness + 100, a.contrast + 100, a.saturation + 100, a.Ri + 100, a.blur + 100, a.mi, a.tp + 100, a.sD, a.qp + 100, a.Gm, a.Mn, a.Um + 100, a.Cn + 100, a.ho].map(function(b) {
                        t(0 <= b && 255 >= b);
                        b = Math.round(b).toString(16);
                        return 1 === b.length ? `0${b}` : b
                    }).join("")
                };
                yC = function(a) {
                    var {
                        h: b,
                        s: c,
                        ye: d
                    } = a;
                    if (0 === c) return {
                        r: b,
                        g: b,
                        b
                    };
                    a = .5 > d ? d * (1 + c) : d + c - d * c;
                    const e = 2 * d - a;
                    return {
                        r: xC(e, a, b + 1 / 3),
                        g: xC(e, a, b),
                        b: xC(e, a, b - 1 / 3)
                    }
                };
                xC = function(a, b, c) {
                    0 > c && (c += 1);
                    1 < c && --c;
                    return c < 1 / 6 ? a + 6 * (b - a) * c : .5 > c ? b : c < 2 / 3 ? a + (b - a) * (2 / 3 - c) * 6 : a
                };
                zC = function(a) {
                    return Math.min(1, Math.max(a, 0))
                };
                AC = function(a) {
                    const b = a.create();
                    b.DM = () => {
                        var c;
                        null === (c = a.DM) || void 0 === c ? void 0 : c.call(a)
                    };
                    return b
                };
                BC = function(a, b) {
                    return {
                        width: "fixed" === a.size ? a.width || b.width : (a.width || 1) * b.width,
                        height: "fixed" === a.size ? a.height || b.height : (a.height || 1) * b.height
                    }
                };
                DC = function(a, b) {
                    if (!b) return Array(a.meta.length).fill(0);
                    if (b.length !== a.meta.length) throw new CC(`Could not set uniform '${a.meta.type} ${a.name}'. Expected data with a length of ${a.meta.length} but your data has a length of ${b.length}.`);
                    return b
                };
                EC = function(a, b) {
                    const c = b.meta,
                        d = b.name,
                        e = b.location;
                    b = b.data;
                    if ("int" === c.type) switch (c.length) {
                        case 1:
                            a.uniform1iv(e, b);
                            break;
                        case 2:
                            a.uniform2iv(e, b);
                            break;
                        case 3:
                            a.uniform3iv(e, b);
                            break;
                        case 4:
                            a.uniform4iv(e, b);
                            break;
                        default:
                            throw new CC(`Could not set the value for uniform '${d}'. Make sure its length is between 1 and 4 (inclusive).`);
                    } else if ("float" === c.type) switch (c.length) {
                        case 1:
                            a.uniform1fv(e, b);
                            break;
                        case 2:
                            a.uniform2fv(e, b);
                            break;
                        case 3:
                            a.uniform3fv(e, b);
                            break;
                        case 4:
                            a.uniform4fv(e,
                                b);
                            break;
                        default:
                            throw new CC(`Could not set the value for uniform '${d}'. Make sure its length is between 1 and 4 (inclusive).`);
                    } else switch (c.length) {
                        case 4:
                            a.uniformMatrix2fv(e, !1, b);
                            break;
                        case 9:
                            a.uniformMatrix3fv(e, !1, b);
                            break;
                        case 16:
                            a.uniformMatrix4fv(e, !1, b);
                            break;
                        default:
                            throw new CC(`Could not set the value for uniform '${d}'. Make sure its length is between 2 and 4 (inclusive).`);
                    }
                };
                HC = function(a, b, c) {
                    var d = a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT);
                    d && 10 < d.precision && (c = c.replace("precision mediump float;", "precision highp float;"));
                    d = a.createShader(b);
                    if (!d) throw new FC("Could not create shader");
                    a.shaderSource(d, c);
                    a.compileShader(d);
                    if (a.getShaderParameter(d, a.COMPILE_STATUS)) return d;
                    c = a.getShaderInfoLog(d);
                    a.deleteShader(d);
                    throw new GC(`Could not compile ${b===a.VERTEX_SHADER?"vertex":"fragment"} shader. Details: ${c}`)
                };
                JC = function(a, b, c) {
                    if (a instanceof WebGLRenderingContext && "f32" === b.numberFormat && !a.getExtension("OES_texture_float")) throw new IC("No support for floating point textures");
                    c = c || a.createTexture();
                    if (!c) throw new FC(`Could not create WebGLTexture for texture with ID: '${b.id}'.`);
                    a.bindTexture(a.TEXTURE_2D, c);
                    a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL, "premultiply" === b.alpha);
                    const d = "rgb" === b.GJ ? a.RGB : a.RGBA,
                        e = "f32" === b.numberFormat ? a.FLOAT : a.UNSIGNED_BYTE,
                        f = "f32" === b.numberFormat ? a.NEAREST :
                        a.LINEAR;
                    if ("image" !== b.E$) {
                        var g = a instanceof WebGLRenderingContext ? d : d === a.RGB ? e === a.FLOAT ? a.RGB32F : a.RGB : e === a.FLOAT ? a.RGBA32F : a.RGBA;
                        const {
                            width: h,
                            height: k
                        } = BC(b, {
                            width: a.drawingBufferWidth,
                            height: a.drawingBufferHeight
                        });
                        a.texImage2D(a.TEXTURE_2D, 0, g, h, k, 0, d, e, b.source)
                    } else {
                        g = b.source;
                        if (g = "tagName" in g && "IMG" === g.tagName) {
                            g = b.source.src;
                            const h = document.createElement("a");
                            h.href = g;
                            g = "data:" === h.protocol || "blob:" === h.protocol ? !1 : !0
                        }
                        g && !b.source.crossOrigin && console.warn(`Fragl warning: ${b.source.src} image may come from a different origin but you did not set the crossOrigin attribute.`);
                        a.texImage2D(a.TEXTURE_2D, 0, d, d, e, b.source)
                    }
                    a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, f);
                    a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, f);
                    a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE);
                    a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE);
                    a.bindTexture(a.TEXTURE_2D, null);
                    return c
                };
                KC = function(a) {
                    return `
attribute vec2 aPosition;
varying vec2 vTexCoord;

void main()
{
    gl_Position = vec4(aPosition, 0.0, 1.0);
    vTexCoord = aPosition * 0.5 + 0.5;
    ${a?"vTexCoord.y = 1.0 - vTexCoord.y;":""}
}
  `
                };
                LC = function(a) {
                    return Array.isArray(a) ? a : [a]
                };
                MC = function(a, b, c, d) {
                    return new Cva({
                        name: a,
                        width: b,
                        height: c,
                        size: d || "relative",
                        GJ: "rgba",
                        numberFormat: "u8"
                    })
                };
                Dva = function(a, b, c, d) {
                    var e;
                    b.forEach((f) => {
                        var g = Object.assign({}, c.Bh);
                        const h = new NC({
                            Kg: OC,
                            Bh: g,
                            attributes: PC,
                            wg: a.wg,
                            GH: new QC({
                                wY: KC(),
                                QS: f.Ph
                            })
                        });
                        if (f.inputs)
                            for (const k of f.inputs) {
                                const l = d.get(k);
                                if (!l) throw new CC(`Unable to assign texture input. Could not find texture '${k}'.`);
                                g[k] = l
                            }
                        if (f.output) {
                            g = d.get(f.output);
                            if (!g) throw new CC(`Unable to assign texture output. Could not find texture '${f.output}'.`);
                            h.vh = g
                        }
                        a.A8.set(h, f);
                        a.mE.push(h)
                    });
                    (null === (e = c.options) || void 0 === e ? 0 : e.vh) || a.mE.push(new NC({
                        Kg: OC,
                        GH: new QC({
                            wY: KC(!0),
                            QS: "precision mediump float;\n\nuniform sampler2D uPrevResult;\nvarying vec2 vTexCoord;\n\nvoid main()\n{\n    gl_FragColor = texture2D(uPrevResult, vTexCoord);\n    gl_FragColor.rgb *= gl_FragColor.a;\n}\n  "
                        }),
                        attributes: PC,
                        Bh: {
                            uPrevResult: a.Ht[a.Zk]
                        },
                        wg: a.wg
                    }));
                    RC(a, a.mE)
                };
                RC = function(a, b) {
                    b.forEach((c, d) => {
                        if (d === b.length - 1) c.Bh.uPrevResult = a.Ht[a.Zk], a.vh && (c.vh = a.vh);
                        else {
                            var e;
                            c.Bh.uPrevResult = a.Ht[a.Zk];
                            null !== (e = a.A8.get(c)) && void 0 !== e && e.output || (a.Zk = (a.Zk + 1) % a.Ht.length, c.vh = a.Ht[a.Zk])
                        }
                    })
                };
                __c.SC = function() {
                    return !!window.createImageBitmap && "undefined" !== typeof ImageBitmapRenderingContext
                };
                __c.Yr.prototype.ki = __c.ol(53, function(a) {
                    a = __c.iv(a);
                    console.groupCollapsed("[ConsoleAnalyticsClient]: updateConsent");
                    __c.Ur({
                        functionality: a.cL,
                        performance: a.performance,
                        targeting: a.cI,
                        socialMedia: a.gO
                    })
                });
                __c.Bc.prototype.gP = __c.ol(8, function(a) {
                    this.console.warn(...__c.Wb(this, "warning", a, void 0))
                });
                __c.Cc.prototype.gP = __c.ol(7, function(a) {
                    __c.uc(this, __c.Xc.Warning, a, void 0)
                });
                __c.tC = class {
                    constructor(a) {
                        this.path = a;
                        this.params = new Map
                    }
                };
                TC = __webpack_require__(85893);
                UC = TC.jsx;
                VC = TC.jsxs;
                WC = TC.Fragment;
                var XC = __webpack_require__(67294),
                    YC = XC.Component,
                    ZC = XC.memo;
                var $C = __webpack_require__(70655).gn;
                var aD = __webpack_require__(29323).Pi;
                var bD = __webpack_require__(27661).kq;
                __webpack_require__(22188);
                __c.cD = __c.wC(__c.Ar);
                __c.dD = new __c.Pb;
                var eD = class {
                    constructor(a, b) {
                        this.ps = a;
                        this.bba = b
                    }
                    static Pp(a) {
                        t(a.every((e, f) => 0 === f ? !0 : e.x > a[f - 1].x), "Points must be ordered strictly monotonically increasing in x");
                        var b = a.length;
                        const c = new Float64Array(b),
                            d = new Float64Array(b);
                        for (let e = 1; e < b - 1; e++) {
                            const f = a[e - 1],
                                g = a[e],
                                h = a[e + 1],
                                k = h.x - f.x,
                                l = (g.x - f.x) / k,
                                m = l * d[e - 1] + 2;
                            c[e] = (6 * ((h.y - g.y) / (h.x - g.x) - (g.y - f.y) / (g.x - f.x)) / k - l * c[e - 1]) / m;
                            d[e] = (l - 1) / m
                        }
                        for (b -= 2; 0 <= b; --b) d[b] = d[b] * d[b + 1] + c[b];
                        return new eD(a, d)
                    }
                    El(a) {
                        var b = this.ps;
                        const c = this.bba;
                        let d = 0,
                            e = this.ps.length - 1;
                        for (; 1 < e - d;) {
                            var f = e + d >> 1;
                            b[f].x > a ? e = f : d = f
                        }
                        f = b[e];
                        b = b[d];
                        const g = f.x - b.x,
                            h = (f.x - a) / g;
                        a = (a - b.x) / g;
                        return h * b.y + a * f.y + (c[d] * (h ** 3 - h) + c[e] * (a ** 3 - a)) * g ** 2 / 6
                    }
                };
                var Fva, Gva, Hva, Iva, fD, Jva, Kva, Lva, Mva, Rva, Nva, iD, jD, Ova, Pva, kD, Qva, Eva, lD, mD, Sva;
                __c.hD = class extends YC {
                    constructor() {
                        super(...arguments);
                        this.PJa = `filter${__c.dD.next()}`
                    }
                    render() {
                        var a, b = this.props.image;
                        const c = this.props.filter,
                            d = this.props.alt,
                            e = this.props.il,
                            f = this.props.preserveAspectRatio;
                        var g = __c.wC(Object.assign({}, c, {
                                mi: 0
                            })),
                            h = b.Ar !== g && g !== __c.cD;
                        __c.ja(!h || null == b.Ar);
                        const k = b.width,
                            l = b.height;
                        b = b.url;
                        let m;
                        const n = [];
                        if (h) {
                            h = Eva(c);
                            m = `${this.PJa}_${g}`;
                            g = null !== (a = this.props.eB) && void 0 !== a ? a : !0;
                            a = Math.max(k, l) / 800;
                            const q = h.brightness,
                                r = h.contrast,
                                x = h.saturation,
                                y = h.Ri,
                                z = h.blur,
                                B = h.YKa,
                                F = h.fK,
                                J = h.qp,
                                N = h.Gm,
                                K = h.Mn,
                                L = h.Um,
                                O = h.Cn;
                            h = h.ho;
                            q && n.push(UC(Fva, {
                                Vd: q
                            }, "0"));
                            r && n.push(UC(Gva, {
                                Vd: r
                            }, "1"));
                            x && n.push(UC(Hva, {
                                Vd: x
                            }, "2"));
                            y && n.push(UC(Iva, {
                                Vd: y
                            }, "3"));
                            z && n.push(UC(fD, {
                                Vd: z,
                                scale: a,
                                WK: !g
                            }, "4"));
                            B && n.push(UC(Jva, {
                                Vd: B,
                                scale: a,
                                WK: !g
                            }, "5"));
                            F && n.push(UC(Kva, {
                                Vd: F
                            }, "6"));
                            J && n.push(UC(Lva, {
                                Vd: J
                            }, "7"));
                            N && n.push(UC(Mva, {
                                Vd: N,
                                scale: a
                            }, "8"));
                            K && n.push(UC(Nva, {
                                Vd: K
                            }, "9"));
                            L && n.push(UC(Ova, {
                                Vd: L
                            }, "10"));
                            O && n.push(UC(Pva, {
                                Vd: O
                            }, "11"));
                            h && n.push(UC(Qva, {
                                Vd: h
                            }, "12"))
                        }
                        return VC(WC, {
                            children: [VC("svg", {
                                className: "RyPhbg",
                                viewBox: `0 0 ${k} ${l}`,
                                preserveAspectRatio: f ? "xMidYMid slice" : "none",
                                role: "img",
                                "aria-label": d,
                                children: [m && 0 < n.length && UC("defs", {
                                    children: UC("filter", {
                                        id: m,
                                        colorInterpolationFilters: "sRGB",
                                        children: n
                                    })
                                }), UC("image", {
                                    crossOrigin: "anonymous",
                                    filter: m && `url(#${m})`,
                                    xlinkHref: b,
                                    width: k,
                                    height: l
                                })]
                            }), UC(__c.gD, {
                                mi: c.mi,
                                il: e
                            })]
                        })
                    }
                };
                __c.hD = $C([aD], __c.hD);
                Fva = ZC((a) => {
                    ({
                        Vd: a
                    } = a);
                    a = a.amount / 200;
                    return 0 === a ? null : VC("feComponentTransfer", {
                        children: [UC("feFuncR", {
                            type: "linear",
                            slope: "1",
                            intercept: a
                        }), UC("feFuncG", {
                            type: "linear",
                            slope: "1",
                            intercept: a
                        }), UC("feFuncB", {
                            type: "linear",
                            slope: "1",
                            intercept: a
                        })]
                    })
                });
                Gva = ZC((a) => {
                    ({
                        Vd: a
                    } = a);
                    a = a.amount / 100 * .6;
                    if (0 === a) return null;
                    a = 0 < a ? 1 / (1 - a) : 1 + a;
                    const b = -(.5 * a) + .5;
                    return VC("feComponentTransfer", {
                        children: [UC("feFuncR", {
                            type: "linear",
                            slope: a,
                            intercept: b
                        }), UC("feFuncG", {
                            type: "linear",
                            slope: a,
                            intercept: b
                        }), UC("feFuncB", {
                            type: "linear",
                            slope: a,
                            intercept: b
                        })]
                    })
                });
                Hva = ZC((a) => {
                    ({
                        Vd: a
                    } = a); {
                        const d = a.amount / 100 + 1;
                        if (1 === d) a = null;
                        else {
                            a = .3086 * (1 - d);
                            var b = .6094 * (1 - d),
                                c = .082 * (1 - d);
                            a = [a + d, b, c, 0, 0, a, b + d, c, 0, 0, a, b, c + d, 0, 0, 0, 0, 0, 1, 0].join(" ")
                        }
                    }
                    return null != a ? UC("feColorMatrix", {
                        type: "matrix",
                        values: a
                    }) : null
                });
                Iva = ZC((a) => {
                    ({
                        Vd: a
                    } = a);
                    const b = a.amount / 500,
                        {
                            r: c,
                            g: d,
                            b: e
                        } = yC({
                            h: ((a.Ri / 200 + .5 - 1 / 7) % 1 + 1) % 1,
                            s: 1,
                            ye: .5
                        });
                    return VC("feComponentTransfer", {
                        children: [UC("feFuncR", {
                            type: "linear",
                            slope: 1 - b,
                            intercept: c * b
                        }), UC("feFuncG", {
                            type: "linear",
                            slope: 1 - b,
                            intercept: d * b
                        }), UC("feFuncB", {
                            type: "linear",
                            slope: 1 - b,
                            intercept: e * b
                        })]
                    })
                });
                fD = ZC((a) => {
                    var {
                        Vd: b,
                        scale: c,
                        WK: d
                    } = a;
                    return VC(WC, {
                        children: [UC("feGaussianBlur", {
                            stdDeviation: b.radius / 2.5 * c
                        }), d && UC("feComponentTransfer", {
                            children: UC("feFuncA", {
                                type: "linear",
                                slope: 0,
                                intercept: 1
                            })
                        })]
                    })
                });
                Jva = ZC((a) => {
                    var {
                        Vd: b,
                        scale: c,
                        WK: d
                    } = a;
                    a = b.amount / 100 * 6;
                    return VC(WC, {
                        children: [UC("feComponentTransfer", {
                            result: "preblur"
                        }), UC(fD, {
                            Vd: {
                                radius: 3
                            },
                            scale: c,
                            WK: d
                        }), UC("feComposite", {
                            operator: "arithmetic",
                            k1: "0",
                            k2: -a,
                            k3: a + 1,
                            k4: "0",
                            in2: "preblur"
                        })]
                    })
                });
                Kva = ZC((a) => {
                    var {
                        Vd: b
                    } = a;
                    const c = b.amount / 100;
                    var d = (h) => {
                        var {
                            x: k,
                            y: l
                        } = h;
                        return {
                            x: k,
                            y: (1 - c) * k + l * c
                        }
                    };
                    a = eD.Pp(b.fK.r.map(d));
                    const e = eD.Pp(b.fK.g.map(d));
                    b = eD.Pp(b.fK.b.map(d));
                    d = Array(32);
                    const f = Array(32),
                        g = Array(32);
                    for (let h = 0; 32 > h; h++) {
                        const k = 255 * h / 31;
                        d[h] = Math.max(0, Math.min(255, a.El(k))) / 255;
                        f[h] = Math.max(0, Math.min(255, e.El(k))) / 255;
                        g[h] = Math.max(0, Math.min(255, b.El(k))) / 255
                    }
                    return VC("feComponentTransfer", {
                        children: [UC("feFuncR", {
                            type: "table",
                            tableValues: d.join(" ")
                        }), UC("feFuncG", {
                            type: "table",
                            tableValues: f.join(" ")
                        }), UC("feFuncB", {
                            type: "table",
                            tableValues: g.join(" ")
                        })]
                    })
                });
                Lva = ZC((a) => {
                    ({
                        Vd: a
                    } = a);
                    return UC("feColorMatrix", {
                        type: "matrix",
                        values: [1, 0, 0, 0, a.amount / 100 * .1, 0, 1, 0, 0, 0, 0, 0, 1, 0, -a.amount / 100 * .1, 0, 0, 0, 1, 0].join(" ")
                    })
                });
                Mva = ZC((a) => {
                    var {
                        Vd: b,
                        scale: c
                    } = a;
                    a = b.amount / 100;
                    return VC(WC, {
                        children: [UC("feComponentTransfer", {
                            result: "clarity-input"
                        }), UC("feColorMatrix", {
                            type: "luminanceToAlpha"
                        }), UC("feComponentTransfer", {
                            children: UC("feFuncA", {
                                type: "table",
                                tableValues: "0 0.75 1 1 1 1 0.75 0"
                            })
                        }), UC("feComposite", {
                            operator: "in",
                            in: "clarity-input",
                            result: "preblur"
                        }), UC(fD, {
                            Vd: {
                                radius: 15
                            },
                            scale: c,
                            WK: !0
                        }), UC("feComposite", {
                            operator: "arithmetic",
                            k1: "0",
                            k2: -a,
                            k3: a + 1,
                            k4: "0",
                            result: "clarity-clip",
                            in2: "preblur"
                        }), UC("feComposite", {
                            operator: "atop",
                            in: "clarity-clip",
                            in2: "clarity-input"
                        })]
                    })
                });
                Rva = [.334, .333, .333, 0, 0, 0, .434, -.433, 0, .5, -.5, .25, .251, 0, .5, 0, 0, 0, 1, 0].join(" ");
                Nva = ZC((a) => {
                    ({
                        Vd: a
                    } = a);
                    a = a.amount / 100;
                    var b = new Float32Array(256);
                    for (var c = 0; 256 > c; c++) {
                        var d = c / 255 * 2 - 1;
                        b[c] = d * d
                    }
                    b = b.join(" ");
                    c = new Float32Array(256);
                    for (d = 0; 256 > d; d++) {
                        var e = d / 255 * 2 - 1;
                        e = 0 < e ? .75 * e : 1.25 * e;
                        c[d] = e * e
                    }
                    c = c.join(" ");
                    d = new Float32Array(256);
                    for (e = 0; 256 > e; e++) d[e] = zC(Math.pow(1 - Math.sqrt(e / 255), 3));
                    d = d.join(" ");
                    return VC(WC, {
                        children: [UC("feComponentTransfer", {
                            result: "vibrance-input"
                        }), UC("feColorMatrix", {
                            type: "matrix",
                            values: Rva
                        }), VC("feComponentTransfer", {
                            children: [UC("feFuncG", {
                                type: "discrete",
                                tableValues: b
                            }), UC("feFuncB", {
                                type: "discrete",
                                tableValues: c
                            })]
                        }), UC("feColorMatrix", {
                            type: "matrix",
                            values: "0 1 1 0 0 0 1 1 0 0 0 1 1 0 0 0 0 0 1 0"
                        }), VC("feComponentTransfer", {
                            children: [UC("feFuncR", {
                                type: "discrete",
                                tableValues: d
                            }), UC("feFuncG", {
                                type: "discrete",
                                tableValues: d
                            }), UC("feFuncB", {
                                type: "discrete",
                                tableValues: d
                            })]
                        }), UC("feColorMatrix", {
                            type: "luminanceToAlpha"
                        }), UC("feComposite", {
                            operator: "in",
                            in: "vibrance-input"
                        }), UC("feColorMatrix", {
                            type: "saturate",
                            values: `${1+a}`
                        }), UC("feComposite", {
                            operator: "atop",
                            in2: "vibrance-input"
                        })]
                    })
                });
                iD = [.255, .652, .093, 0, 0, .341, -.465, .125, 0, .5, .105, .319, -.424, 0, .5, 0, 0, 0, 1, 0].join(" ");
                jD = [1, 1.944, .793, 0, -1.368, 1, -.748, 0, 0, .374, 1, -.08, -2.161, 0, 1.121, 0, 0, 0, 1, 0].join(" ");
                Ova = ZC((a) => {
                    ({
                        Vd: a
                    } = a);
                    a = a.amount / 100;
                    const b = 0 > a ? .2 : 1,
                        c = new Float32Array(256);
                    for (let e = 0; 256 > e; e++) {
                        const f = e / 255;
                        var d = zC(Math.pow(f, 3));
                        c[e] = f * (1 - d) + zC(f * (1 + a * b)) * d
                    }
                    a = c.join(" ");
                    return VC(WC, {
                        children: [UC("feColorMatrix", {
                            type: "matrix",
                            values: iD
                        }), UC("feComponentTransfer", {
                            children: UC("feFuncR", {
                                type: "discrete",
                                tableValues: a
                            })
                        }), UC("feColorMatrix", {
                            type: "matrix",
                            values: jD
                        })]
                    })
                });
                Pva = ZC((a) => {
                    ({
                        Vd: a
                    } = a);
                    a = a.amount / 100;
                    const b = new Float32Array(256);
                    for (let d = 0; 256 > d; d++) {
                        const e = d / 255;
                        var c = zC(Math.pow(1 - e, 3));
                        b[d] = e * (1 - c) + zC(e * (1 + a)) * c
                    }
                    a = b.join(" ");
                    return VC(WC, {
                        children: [UC("feColorMatrix", {
                            type: "matrix",
                            values: iD
                        }), UC("feComponentTransfer", {
                            children: UC("feFuncR", {
                                type: "discrete",
                                tableValues: a
                            })
                        }), UC("feColorMatrix", {
                            type: "matrix",
                            values: jD
                        })]
                    })
                });
                kD = [{
                    x: 0,
                    y: 69
                }, {
                    x: 79,
                    y: 96
                }, {
                    x: 127,
                    y: 127
                }, {
                    x: 255,
                    y: 225
                }];
                Qva = ZC((a) => {
                    ({
                        Vd: a
                    } = a);
                    const b = a.amount / 100;
                    a = eD.Pp(kD.map((d) => {
                        var {
                            x: e,
                            y: f
                        } = d;
                        return {
                            x: e,
                            y: (1 - b) * e + f * b
                        }
                    }));
                    const c = new Float32Array(256);
                    for (let d = 0; 256 > d; d++) c[d] = a.El(d) / 255;
                    a = c.join(" ");
                    return VC("feComponentTransfer", {
                        children: [UC("feFuncR", {
                            type: "table",
                            tableValues: a
                        }), UC("feFuncG", {
                            type: "table",
                            tableValues: a
                        }), UC("feFuncB", {
                            type: "table",
                            tableValues: a
                        })]
                    })
                });
                Eva = bD((a) => {
                    const b = a.brightness,
                        c = a.contrast,
                        d = a.saturation,
                        e = a.Ri,
                        f = a.sD,
                        g = a.blur,
                        h = a.qp,
                        k = a.Gm,
                        l = a.Mn,
                        m = a.Um,
                        n = a.Cn,
                        q = a.ho;
                    return {
                        brightness: 0 !== b ? {
                            amount: b
                        } : void 0,
                        contrast: 0 !== c ? {
                            amount: c
                        } : void 0,
                        saturation: 0 !== d ? {
                            amount: d
                        } : void 0,
                        Ri: 0 !== e && 0 !== f ? {
                            Ri: e,
                            amount: f
                        } : void 0,
                        blur: 0 < g ? {
                            radius: g
                        } : void 0,
                        YKa: 0 > g ? {
                            amount: -g
                        } : void 0,
                        fK: 0 !== a.tp ? Sva(a) : void 0,
                        qp: 0 !== h ? {
                            amount: h
                        } : void 0,
                        Gm: 0 !== k ? {
                            amount: k
                        } : void 0,
                        Mn: 0 !== l ? {
                            amount: l
                        } : void 0,
                        Um: 0 !== m ? {
                            amount: m
                        } : void 0,
                        Cn: 0 !== n ? {
                            amount: n
                        } : void 0,
                        ho: 0 !== q ? {
                            amount: q
                        } : void 0
                    }
                });
                lD = {
                    r: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 77,
                        y: 26
                    }, {
                        x: 179,
                        y: 204
                    }, {
                        x: 255,
                        y: 255
                    }],
                    g: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 64,
                        y: 38
                    }, {
                        x: 191,
                        y: 217
                    }, {
                        x: 255,
                        y: 255
                    }],
                    b: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 85,
                        y: 102
                    }, {
                        x: 170,
                        y: 153
                    }, {
                        x: 255,
                        y: 204
                    }]
                };
                mD = {
                    r: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 77,
                        y: 26
                    }, {
                        x: 179,
                        y: 51
                    }, {
                        x: 242,
                        y: 255
                    }],
                    g: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 64,
                        y: 102
                    }, {
                        x: 153,
                        y: 153
                    }, {
                        x: 255,
                        y: 255
                    }],
                    b: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 77,
                        y: 79
                    }, {
                        x: 153,
                        y: 153
                    }, {
                        x: 255,
                        y: 255
                    }]
                };
                Sva = bD((a) => ({
                    amount: Math.abs(a.tp),
                    fK: 0 <= a.tp ? lD : mD
                }));
                __c.gD = class extends YC {
                    render() {
                        if (!this.props.mi) return null;
                        const a = this.props.il,
                            b = `rgba(0, 0, 0, ${this.props.mi/100*.7})`;
                        if (a) {
                            const c = a.c;
                            return UC("div", {
                                className: "rngOhg",
                                style: {
                                    background: `radial-gradient(${`${Math.max(a.width/2,a.height/2)}px circle at ${c.x}px ${c.y}px`}, ${"rgba(0, 0, 0, 0)"} 70%, ${b} 130%)`
                                }
                            })
                        }
                        return UC("div", {
                            className: "rngOhg",
                            style: {
                                background: `radial-gradient(${"circle farthest-side at center"}, ${"rgba(0, 0, 0, 0)"} 70%, ${b} 130%)`
                            }
                        })
                    }
                };
                __c.gD = $C([aD], __c.gD);
                var nD = class extends Error {},
                    GC = class extends nD {},
                    FC = class extends nD {},
                    oD = class extends nD {},
                    IC = class extends nD {},
                    CC = class extends nD {},
                    pD = class extends nD {};
                var qD = 0;
                var Tva = class {
                    constructor() {
                        var a = {
                            jJ: {
                                position: {
                                    type: "f32",
                                    offset: 0,
                                    buffer: new Float32Array([-1, -1, -1, 1, 1, -1, 1, 1])
                                }
                            },
                            lu: new Uint16Array([0, 3, 1, 0, 2, 3])
                        };
                        this.id = qD++;
                        this.Xo = "geometry";
                        for (const [b, c] of Object.entries(a.jJ)) c.name = b;
                        this.jJ = a.jJ;
                        this.lu = a.lu;
                        this.K3 = a.K3
                    }
                };
                var NC = class {
                    constructor(a) {
                        this.Kg = a.Kg;
                        this.GH = a.GH;
                        this.attributes = a.attributes;
                        this.Bh = a.Bh;
                        this.wg = a.wg;
                        this.vh = a.vh
                    }
                };
                __c.rD = class {
                    constructor(a) {
                        this.resources = new Map;
                        this.create = a;
                        this.Sn = AC(this)
                    }
                    load(a) {
                        this.Sn.load(a);
                        a = Array.isArray(a) ? a : a.resources;
                        for (const b of a) this.resources.set(b.id, b)
                    }
                    update(a) {
                        this.Sn.update(a)
                    }
                    clear(a, b) {
                        this.Sn.clear(a, b)
                    }
                    render(a) {
                        this.Sn.render(a)
                    }
                    release(a) {
                        this.Sn.release(a);
                        a = Array.isArray(a) ? a : a.resources;
                        for (const b of a) this.resources.delete(b.id)
                    }
                    dispose() {
                        this.Sn.dispose();
                        this.resources.clear()
                    }
                    restore() {
                        this.Sn.dispose();
                        this.Sn = AC(this);
                        this.Sn.load(Array.from(this.resources.values()))
                    }
                    resize(a,
                        b) {
                        if (a !== this.canvas.width || b !== this.canvas.height) this.Sn.resize(a, b), a = Array.from(this.resources.values()).filter((c) => "texture" === c.Xo && !c.source && "relative" === c.size), this.Sn.update(a)
                    }
                    get canvas() {
                        return this.Sn.canvas
                    }
                };
                var QC = class {
                    constructor(a) {
                        this.id = qD++;
                        this.Xo = "shader";
                        this.wY = a.wY;
                        this.QS = a.QS
                    }
                };
                var Cva;
                __c.sD = class {
                    constructor(a) {
                        this.id = qD++;
                        this.Xo = "texture";
                        this.E$ = "image";
                        this.size = "fixed";
                        this.GJ = "rgba";
                        this.numberFormat = "u8";
                        this.source = a.source;
                        this.name = a.name;
                        this.alpha = a.alpha || "preserve"
                    }
                    get width() {
                        return this.source.width
                    }
                    get height() {
                        return this.source.height
                    }
                };
                __c.tD = class {
                    constructor(a) {
                        this.id = qD++;
                        this.Xo = "texture";
                        this.E$ = "binary";
                        this.size = "fixed";
                        this.source = a.source;
                        this.name = a.name;
                        this.alpha = a.alpha || "preserve";
                        this.width = a.width;
                        this.height = a.height
                    }
                    get GJ() {
                        const a = this.source.length / (this.width * this.height);
                        if (3 === a) return "rgb";
                        if (4 === a) return "rgba";
                        throw new CC(`Invalid number of color channels for binary texture with ID: ${this.id}. Number of channels must be 3 (RGB) or 4 (RGBA) but the provided data has ${a} channels.`)
                    }
                    get numberFormat() {
                        return this.source instanceof
                        Uint8Array ? "u8" : "f32"
                    }
                };
                Cva = class {
                    constructor(a) {
                        this.id = qD++;
                        this.Xo = "texture";
                        this.E$ = "render";
                        this.source = null;
                        this.name = a.name;
                        this.alpha = a.alpha || "preserve";
                        this.width = a.width || 0;
                        this.height = a.height || 0;
                        this.size = a.size || "fixed";
                        this.GJ = a.GJ;
                        this.numberFormat = a.numberFormat
                    }
                };
                var Uva = new Map([
                        ["i8", 5120],
                        ["i16", 5122],
                        ["u8", 5121],
                        ["u16", 5123],
                        ["f32", 5126]
                    ]),
                    uD = new Map([
                        [5126, {
                            type: "float",
                            name: "float",
                            length: 1
                        }],
                        [35664, {
                            type: "float",
                            name: "vec2",
                            length: 2
                        }],
                        [35665, {
                            type: "float",
                            name: "vec3",
                            length: 3
                        }],
                        [35666, {
                            type: "float",
                            name: "vec4",
                            length: 4
                        }],
                        [35674, {
                            type: "matrix",
                            name: "mat2",
                            length: 4
                        }],
                        [35675, {
                            type: "matrix",
                            name: "mat3",
                            length: 9
                        }],
                        [35676, {
                            type: "matrix",
                            name: "mat4",
                            length: 16
                        }],
                        [5124, {
                            type: "int",
                            name: "int",
                            length: 1
                        }],
                        [35667, {
                            type: "int",
                            name: "ivec2",
                            length: 2
                        }],
                        [35668, {
                            type: "int",
                            name: "ivec3",
                            length: 3
                        }],
                        [35669, {
                            type: "int",
                            name: "ivec4",
                            length: 4
                        }],
                        [35678, {
                            type: "int",
                            name: "sampler2D",
                            length: 1
                        }]
                    ]);
                var vD = class {
                    constructor(a, b, c) {
                        this.name = a.name;
                        this.location = b;
                        b = uD.get(a.type);
                        if (!b) throw new CC(`Type of uniform '${a.name}' is not supported.`);
                        this.meta = b;
                        this._data = DC(this, c)
                    }
                    equals(a) {
                        const b = this._data;
                        if (b.length !== a.length) return !1;
                        for (let c = 0; c < b.length; c++)
                            if (b[c] !== a[c]) return !1;
                        return !0
                    }
                    get data() {
                        return this._data
                    }
                    set data(a) {
                        this._data = DC(this, a)
                    }
                };
                __c.wD = class {
                    constructor(a, b) {
                        var c, d;
                        this.VA = new Map;
                        this.UC = new Map;
                        this.gt = new Map;
                        this.jha = () => {
                            this.DM && this.DM()
                        };
                        this.container = a;
                        this.env = (null === b || void 0 === b ? void 0 : b.env) || window;
                        this.canvas = document.createElement("canvas");
                        this.container.appendChild(this.canvas);
                        this.canvas.style.width = "100%";
                        this.canvas.style.height = "100%";
                        this.canvas.width = ((null === b || void 0 === b ? void 0 : b.width) || this.canvas.clientWidth) * this.env.devicePixelRatio;
                        this.canvas.height = ((null === b || void 0 === b ? void 0 : b.height) ||
                            this.canvas.clientHeight) * this.env.devicePixelRatio;
                        this.canvas.addEventListener("webglcontextlost", this.jha, {
                            once: !0
                        });
                        let e = "Unknown";
                        a = (g) => {
                            g.statusMessage && (e = g.statusMessage)
                        };
                        this.canvas.addEventListener("webglcontextcreationerror", a);
                        const f = {
                            alpha: null !== (c = null === b || void 0 === b ? void 0 : b.alpha) && void 0 !== c ? c : !0,
                            antialias: null !== (d = null === b || void 0 === b ? void 0 : b.antialias) && void 0 !== d ? d : !0,
                            depth: !1,
                            stencil: !1,
                            preserveDrawingBuffer: !(null === b || void 0 === b || !b.preserveDrawingBuffer),
                            powerPreference: "high-performance"
                        };
                        b = (null === b || void 0 === b ? 0 : b.v6a) ? this.canvas.getContext("webgl2", f) : this.canvas.getContext("webgl", f);
                        this.canvas.removeEventListener("webglcontextcreationerror", a);
                        if (!b) throw new FC(`A WebGL context could not be created. Reason: ${e}`);
                        this.gl = b;
                        this.f2 = b.createFramebuffer()
                    }
                    resize(a, b) {
                        this.canvas.width = (a || this.canvas.clientWidth) * this.env.devicePixelRatio;
                        this.canvas.height = (b || this.canvas.clientHeight) * this.env.devicePixelRatio
                    }
                    load(a) {
                        const b = this.gl;
                        a = Array.isArray(a) ? a : a.resources;
                        for (const r of a)
                            if ("shader" ===
                                r.Xo) {
                                if (!this.UC.has(r.id)) {
                                    a = this.UC;
                                    var c = a.set,
                                        d = r.id,
                                        e = b;
                                    var f = e;
                                    var g = r.wY,
                                        h = r.QS,
                                        k = f.createProgram();
                                    if (!k) throw new FC("Could not create program");
                                    g = HC(f, f.VERTEX_SHADER, g);
                                    h = HC(f, f.FRAGMENT_SHADER, h);
                                    f.attachShader(k, g);
                                    f.attachShader(k, h);
                                    f.linkProgram(k);
                                    f.deleteShader(g);
                                    f.deleteShader(h);
                                    if (f.getProgramParameter(k, f.LINK_STATUS)) f = k;
                                    else throw new GC(`Could not link program. Details: ${f.getProgramInfoLog(k)}`);
                                    e.useProgram(f);
                                    h = e.getProgramParameter(f, e.ACTIVE_ATTRIBUTES);
                                    k = new Map;
                                    for (g = 0; g < h; g++) {
                                        var l = e.getActiveAttrib(f, g),
                                            m = l ? e.getAttribLocation(f, l.name) : -1;
                                        if (!l || -1 === m) throw new pD(`Could not cache attribute. Could not find attribute or location at index ${g}. This is likely a bug with the renderer.`);
                                        var n = uD.get(l.type);
                                        if (!n) throw new CC(`Type of attribute '${l.name}' is not supported.`);
                                        e.enableVertexAttribArray(m);
                                        k.set(l.name, {
                                            location: m,
                                            meta: n
                                        })
                                    }
                                    h = e.getProgramParameter(f, e.ACTIVE_UNIFORMS);
                                    g = new Map;
                                    l = new Map;
                                    m = 0;
                                    for (n = 0; n < h; n++) {
                                        var q = e.getActiveUniform(f, n);
                                        const x = q ? e.getUniformLocation(f, q.name) : null;
                                        if (!q || !x) throw new pD(`Could not cache uniform. Could not find uniform or location at index ${n}. This is likely a bug with the renderer.`);
                                        q.type === e.SAMPLER_2D || q.type === e.SAMPLER_CUBE ? (q = new vD(q, x, [m]), g.set(q.name, q), EC(e, q), m++) : (q = new vD(q, x), l.set(q.name, q), EC(e, q))
                                    }
                                    e.useProgram(null);
                                    c.call(a, d, {
                                        zla: f,
                                        attributes: k,
                                        Bh: g,
                                        wg: l
                                    })
                                }
                            } else if ("geometry" === r.Xo) {
                            if (!this.VA.has(r.id)) {
                                a = this.VA;
                                c = a.set;
                                d = r.id;
                                e = b;
                                h = r;
                                f = e.createBuffer();
                                e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,
                                    f);
                                e.bufferData(e.ELEMENT_ARRAY_BUFFER, h.lu, e.STATIC_DRAW);
                                k = new Map;
                                for (const [x, y] of Object.entries(h.jJ)) h = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, h), e.bufferData(e.ARRAY_BUFFER, y.buffer, e.STATIC_DRAW), k.set(x, h);
                                e.bindBuffer(e.ARRAY_BUFFER, null);
                                e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null);
                                c.call(a, d, {
                                    lu: f,
                                    Ht: k
                                })
                            }
                        } else this.gt.has(r.id) || this.gt.set(r.id, JC(b, r))
                    }
                    update(a) {
                        const b = this.gl;
                        a = Array.isArray(a) ? a : a.resources;
                        for (const c of a)
                            if ("texture" === c.Xo) {
                                a = this.gt.get(c.id);
                                if (!a) throw new oD(`Could not update texture with ID: '${c.id}'. Did you remember to use load()?`);
                                JC(b, c, a)
                            }
                    }
                    clear(a, b) {
                        const c = this.gl;
                        if (b) {
                            const d = this.gt.get(b.id);
                            if (!d) throw new oD(`Could not find render target with ID: ${b.id}. Did you remember to use load()?`);
                            c.bindFramebuffer(c.FRAMEBUFFER, this.f2);
                            c.framebufferTexture2D(c.FRAMEBUFFER, c.COLOR_ATTACHMENT0, c.TEXTURE_2D, d, 0)
                        } else c.bindFramebuffer(c.FRAMEBUFFER, null);
                        c.clearColor(...a);
                        c.clear(c.COLOR_BUFFER_BIT)
                    }
                    render(a) {
                        var b, c;
                        const d = this.gl;
                        a = Array.isArray(a) ? a : a.Wla;
                        for (const h of a) {
                            var e = this.UC.get(h.GH.id);
                            if (!e) throw new oD(`Could not find shader with ID: ${h.GH.id}. Did you remember to use load()?`);
                            d.useProgram(e.zla);
                            var f = this.VA.get(h.Kg.id);
                            if (!f) throw new oD(`Could not find geometry with ID: ${h.Kg.id}. Did you remember to use load()?`);
                            d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, f.lu);
                            const k = (a = !!h.Kg.K3) ? d.getExtension("ANGLE_instanced_arrays") : null;
                            if (a && !k) throw new IC("Instancing is required but not supported on this device");
                            for (const l of e.attributes.entries()) {
                                const [m, {
                                    location: n,
                                    meta: q
                                }] = l;
                                var g = h.attributes[m];
                                const r = Uva.get(g.type);
                                if (!r) throw new pD(`Could not determine type for attribute ${m}. This is likely a bug with the renderer.`);
                                const x = f.Ht.get(g.name);
                                if (!x) throw new pD(`Could not locate geometry buffer "${g.name}. This is likely a bug with the renderer`);
                                d.bindBuffer(d.ARRAY_BUFFER, x);
                                d.vertexAttribPointer(n, q.length, r, null !== (b = g.IYa) && void 0 !== b ? b : !1, null !== (c = g.S4a) && void 0 !== c ? c : 0, g.offset);
                                a && g.divisor && k.vertexAttribDivisorANGLE(n, g.divisor)
                            }
                            f = Object.assign({}, h.wg, this.dua);
                            for (const l of e.wg.entries()) {
                                const [m, n] = l;
                                g = f[m];
                                if (!g) throw new CC(`Could not find a value for uniform '${m}'. Make sure you provide a value.`);
                                n.equals(g) || (n.data = g, EC(d, n))
                            }
                            for (const l of e.Bh.entries()) {
                                const [m, n] = l;
                                d.activeTexture(d.TEXTURE0 + n.data[0]);
                                d.bindTexture(d.TEXTURE_2D, null);
                                e = h.Bh[m];
                                if (!e) throw new CC(`Could not find a texture associated with uniform '${m}'. Make sure you provide a value.`);
                                f = this.gt.get(e.id);
                                if (!f) throw new oD(`Could not find texture with ID: ${e.id}. Did you remember to use load()?`);
                                d.bindTexture(d.TEXTURE_2D, f)
                            }
                            if (h.vh) {
                                e = this.gt.get(h.vh.id);
                                if (!e) throw new oD(`Could not find render target with ID: ${h.vh.id}. Did you remember to use load()?`);
                                const {
                                    width: l,
                                    height: m
                                } = BC(h.vh, {
                                    width: d.drawingBufferWidth,
                                    height: d.drawingBufferHeight
                                });
                                d.bindFramebuffer(d.FRAMEBUFFER, this.f2);
                                d.framebufferTexture2D(d.FRAMEBUFFER, d.COLOR_ATTACHMENT0, d.TEXTURE_2D, e, 0);
                                d.viewport(0, 0, l, m)
                            } else d.bindFramebuffer(d.FRAMEBUFFER, null), d.viewport(0, 0, d.drawingBufferWidth, d.drawingBufferHeight);
                            a ? k.drawElementsInstancedANGLE(d.TRIANGLES, h.Kg.lu.length, d.UNSIGNED_SHORT, 0, h.Kg.K3) : d.drawElements(d.TRIANGLES, h.Kg.lu.length, d.UNSIGNED_SHORT, 0)
                        }
                    }
                    release(a) {
                        a = Array.isArray(a) ?
                            a : a.resources;
                        for (const b of a) this.kK(b.id, b.Xo)
                    }
                    dispose() {
                        var a;
                        const b = this.gl;
                        for (var c of this.VA.keys()) this.kK(c, "geometry");
                        for (var d of this.UC.keys()) this.kK(d, "shader");
                        for (const e of this.gt.keys()) this.kK(e, "texture");
                        this.VA.clear();
                        this.UC.clear();
                        this.gt.clear();
                        b.deleteFramebuffer(this.f2);
                        b.bindBuffer(b.ARRAY_BUFFER, null);
                        b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, null);
                        b.bindRenderbuffer(b.RENDERBUFFER, null);
                        b.bindFramebuffer(b.FRAMEBUFFER, null);
                        c = b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS);
                        for (d = 0; d < c; d++) b.activeTexture(b.TEXTURE0 + d), b.bindTexture(b.TEXTURE_2D, null), b.bindTexture(b.TEXTURE_CUBE_MAP, null);
                        this.canvas.width = 1;
                        this.canvas.height = 1;
                        this.canvas.removeEventListener("webglcontextlost", this.jha);
                        this.canvas.remove();
                        null === (a = b.getExtension("WEBGL_lose_context")) || void 0 === a ? void 0 : a.loseContext()
                    }
                    kK(a, b) {
                        const c = this.gl;
                        if ("shader" === b) {
                            var d = this.UC.get(a);
                            c.deleteProgram((null === d || void 0 === d ? void 0 : d.zla) || null);
                            this.UC.delete(a)
                        } else if ("geometry" === b) {
                            if (b = this.VA.get(a) ||
                                null) {
                                for (d of Object.values(b.Ht)) c.bindBuffer(c.ARRAY_BUFFER, d), c.bufferData(c.ARRAY_BUFFER, 1, c.STATIC_DRAW), c.deleteBuffer(d);
                                c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, b.lu);
                                c.bufferData(c.ELEMENT_ARRAY_BUFFER, 1, c.STATIC_DRAW);
                                c.deleteBuffer(b.lu)
                            }
                            this.VA.delete(a)
                        } else d = this.gt.get(a), c.deleteTexture(d || null), this.gt.delete(a)
                    }
                    get dua() {
                        return {
                            uResolution: [this.gl.drawingBufferWidth, this.gl.drawingBufferHeight],
                            uViewSize: [this.canvas.clientWidth, this.canvas.clientHeight],
                            uDevicePixelRatio: [this.env.devicePixelRatio]
                        }
                    }
                };
                var OC, PC;
                OC = new Tva;
                PC = {
                    aPosition: OC.jJ.position
                };
                __c.xD = class {
                    constructor(a) {
                        var b, c, d, e, f, g, h, k, l;
                        this.mE = [];
                        this.A8 = new Map;
                        this.Zk = 0;
                        this.wg = {};
                        this.vh = null === (b = a.options) || void 0 === b ? void 0 : b.vh;
                        if (a.wg)
                            for (var m of Object.entries(a.wg)) {
                                const [y, z] = m;
                                this.wg[y] = LC(z)
                            }
                        b = [];
                        for (m = 0; m < a.BV.length; m++) {
                            const y = a.BV[m];
                            "string" === typeof y ? b.push({
                                Ph: y
                            }) : b.push(y)
                        }
                        if (!(m = null === (c = a.options) || void 0 === c ? void 0 : c.Ht)) {
                            c = null === (d = a.options) || void 0 === d ? void 0 : d.vh;
                            var {
                                width: n,
                                height: q,
                                size: r
                            } = void 0 === c ? {} : c;
                            m = [MC("bufferA", n, q, r), MC("bufferB",
                                n, q, r)]
                        }
                        this.Ht = m;
                        d = new Set;
                        for (var x of b)
                            if (x.inputs) {
                                for (const y of x.inputs) {
                                    if ("uPrevResult" === y) throw new CC("Your render pass should not define uPrevResult. This will be automatically added.");
                                    d.add(y)
                                }
                                x.output && d.add(x.output)
                            }
                        x = new Map;
                        for (const y of d) x.set(y, MC(y, null === (f = null === (e = a.options) || void 0 === e ? void 0 : e.vh) || void 0 === f ? void 0 : f.width, null === (h = null === (g = a.options) || void 0 === g ? void 0 : g.vh) || void 0 === h ? void 0 : h.height, null === (l = null === (k = a.options) || void 0 === k ? void 0 : k.vh) || void 0 ===
                            l ? void 0 : l.size));
                        Dva(this, b, a, x)
                    }
                    update(a) {
                        if (a.Bh)
                            for (const b of Object.entries(a.Bh)) {
                                const [c, d] = b;
                                if (d)
                                    for (const e of this.mE) e.Bh[c] = d
                            }
                        if (a.wg)
                            for (const b of Object.entries(a.wg)) {
                                const [c, d] = b;
                                this.wg[c] && (this.wg[c] = LC(d))
                            }
                    }
                    get resources() {
                        const a = new Set,
                            b = new Set,
                            c = new Set;
                        for (const d of this.mE) {
                            a.add(d.Kg);
                            b.add(d.GH);
                            for (const e of Object.values(d.Bh)) c.add(e);
                            d.vh && c.add(d.vh)
                        }
                        return [...a, ...b, ...c]
                    }
                    get Wla() {
                        const a = Object.fromEntries(Object.entries(this.wg).map((c) => {
                                var [d, e] = c;
                                return [d,
                                    1 === e.length ? e[0] : e
                                ]
                            })),
                            b = this.mE.filter((c) => {
                                var d;
                                return (c = null === (d = this.A8.get(c)) || void 0 === d ? void 0 : d.cX) ? c(a) : !0
                            });
                        RC(this, b);
                        return b
                    }
                };
                var Vva, zD, AD, yD;
                Vva = class {
                    constructor(a, b) {
                        this.B = a;
                        this.onError = b;
                        this.ou = !1;
                        this.src = ""
                    }
                    initialize() {
                        try {
                            __c.ja(!this.ou);
                            const a = this.renderer = new __c.rD(() => {
                                    var d;
                                    this.container = null !== (d = this.container) && void 0 !== d ? d : document.createElement("div");
                                    return new __c.wD(this.container, {
                                        width: 0,
                                        height: 0,
                                        env: {
                                            devicePixelRatio: 1
                                        }
                                    })
                                }),
                                b = this.Bh = {
                                    U: new __c.sD({
                                        source: new ImageData(1, 1)
                                    }),
                                    A: yD(lD),
                                    z: yD(mD),
                                    B: yD({
                                        r: kD,
                                        g: kD,
                                        b: kD
                                    })
                                },
                                c = this.effect = new __c.xD({
                                    BV: zD,
                                    Bh: b,
                                    wg: AD({
                                        filter: __c.Ar,
                                        width: 0,
                                        height: 0
                                    })
                                });
                            a.DM = () => {
                                var d;
                                null === (d = this.B) || void 0 === d ? void 0 : d.warning("CONTEXT_LOST_WEBGL");
                                try {
                                    a.restore()
                                } catch (e) {
                                    this.errorHandler(e)
                                }
                            };
                            a.load(c.resources);
                            this.Ac && clearTimeout(this.Ac);
                            this.Ac = setTimeout(this.dispose, 6E4);
                            this.ou = !0;
                            this.src = ""
                        } catch (a) {
                            this.errorHandler(a)
                        }
                    }
                    filter(a, b, c, d) {
                        this.ou || this.initialize();
                        const e = this.renderer,
                            f = this.effect,
                            g = this.Bh;
                        if (e && f && g) try {
                            return c = null !== c && void 0 !== c ? c : a.naturalWidth, d = null !== d && void 0 !== d ? d : a.naturalHeight, c === (null === e || void 0 === e ? void 0 : e.canvas.width) &&
                                d === (null === e || void 0 === e ? void 0 : e.canvas.height) || e.resize(c, d), a.src !== this.src && (g.U.source = a, e.update([g.U])), f.update({
                                    wg: AD({
                                        filter: b,
                                        width: c,
                                        height: d
                                    })
                                }), e.render(f.Wla), this.Ac && clearTimeout(this.Ac), this.Ac = setTimeout(this.dispose, 6E4), this.src = a.src, e.canvas
                        } catch (h) {
                            this.errorHandler(h)
                        }
                    }
                    async transfer(a, b, c, d) {
                        try {
                            __c.ja(this.ou);
                            const e = __c.u(this.renderer).canvas;
                            c = null !== c && void 0 !== c ? c : e.width;
                            d = null !== d && void 0 !== d ? d : e.height;
                            if (__c.SC() && b instanceof ImageBitmapRenderingContext) {
                                const f =
                                    await createImageBitmap(e, 0, 0, e.width, e.height, {
                                        resizeWidth: c,
                                        resizeHeight: d
                                    });
                                a.width = c;
                                a.height = d;
                                b.transferFromImageBitmap(f)
                            } else if (b instanceof CanvasRenderingContext2D) a.width = c, a.height = d, b.clearRect(0, 0, c, d), b.drawImage(e, 0, 0, c, d);
                            else if (a instanceof HTMLImageElement) e.toBlob((f) => {
                                if (f) a.src = URL.createObjectURL(f), a.onload = () => {
                                    URL.revokeObjectURL(a.src)
                                };
                                else throw Error("Failed to convert from source canvas to blob")
                            });
                            else throw Error("Invalid blitting context")
                        } catch (e) {
                            this.errorHandler(e)
                        }
                    }
                    dispose() {
                        var a;
                        this.ou = !1;
                        this.src = "";
                        this.Ac && clearTimeout(this.Ac);
                        null === (a = this.renderer) || void 0 === a ? void 0 : a.dispose();
                        this.Ac = this.Bh = this.effect = this.renderer = void 0
                    }
                    errorHandler(a) {
                        var b, c;
                        null === (b = this.B) || void 0 === b ? void 0 : b.gP(a);
                        null === (c = this.onError) || void 0 === c ? void 0 : c.call(this, a)
                    }
                };
                zD = ["precision mediump float;uniform float D,E,F;uniform vec3 G;uniform sampler2D U;varying vec2 vTexCoord;vec4 V(vec4 a,float b){return vec4(a.rgb+b,a.a);}vec4 W(vec4 b,float a){float c=a>0.?1./(1.-a):1.+a;return vec4((b.rgb-.5)*c+.5,b.a);}vec4 X(vec4 c,float a){vec3 d=vec3(.3086,.6094,.082),b=vec3(1.-a)*d;mat3 e=mat3(vec3(b.x)+vec3(a,0,0),vec3(b.y)+vec3(0,a,0),vec3(b.z)+vec3(0,0,a));return vec4(max(vec3(0),e*c.rgb),c.a);}vec4 Y(vec4 a,vec3 b){return vec4(a.rgb-(a.rgb-b)*.1,a.a);}void main(){gl_FragColor=texture2D(U,vTexCoord);if(D!=0.)gl_FragColor=clamp(V(gl_FragColor,D),0.,1.);if(E!=0.)gl_FragColor=clamp(W(gl_FragColor,E),0.,1.);if(F!=1.)gl_FragColor=clamp(X(gl_FragColor,F),0.,1.);if(G!=vec3(0.,0.,0.))gl_FragColor=Y(gl_FragColor,G);}", {
                    Ph: "precision mediump float;uniform float s;uniform vec2 uResolution;uniform sampler2D uPrevResult;varying vec2 vTexCoord;float h(float b,float a){return .39894*exp(-.5*pow(b/a,2.))/a;}vec4 t(sampler2D d,vec2 e,vec2 q,float b){float f=0.;vec4 g=vec4(0.);vec2 r=1./uResolution;float c=h(0.,b);vec4 k=texture2D(d,e);k.rgb*=k.a,g+=k*c,f+=c;float u=b*2.5;for(float a=1.;a<=200.;a+=2.){if(a>u)break;float i=a+1.,l=h(a,b),m=h(i,b);c=l+m;vec2 j=q*(a*l+i*m)/c*r;vec4 n=texture2D(d,e+j),o=texture2D(d,e-j);n.rgb*=n.a,o.rgb*=o.a,g+=(n+o)*c,f+=c*2.;}vec4 p=g/f;p.rgb/=p.a;return p;}void main(){if(s==0.){gl_FragColor=texture2D(uPrevResult,vTexCoord);return;}gl_FragColor=t(uPrevResult,vTexCoord,vec2(1.,0.),s);}",
                    output: "C"
                }, {
                    Ph: "precision mediump float;uniform float s;uniform vec2 uResolution;uniform sampler2D C,uPrevResult;varying vec2 vTexCoord;float h(float b,float a){return .39894*exp(-.5*pow(b/a,2.))/a;}vec4 t(sampler2D d,vec2 e,vec2 q,float b){float f=0.;vec4 g=vec4(0.);vec2 r=1./uResolution;float c=h(0.,b);vec4 k=texture2D(d,e);k.rgb*=k.a,g+=k*c,f+=c;float u=b*2.5;for(float a=1.;a<=200.;a+=2.){if(a>u)break;float i=a+1.,l=h(a,b),m=h(i,b);c=l+m;vec2 j=q*(a*l+i*m)/c*r;vec4 n=texture2D(d,e+j),o=texture2D(d,e-j);n.rgb*=n.a,o.rgb*=o.a,g+=(n+o)*c,f+=c*2.;}vec4 p=g/f;p.rgb/=p.a;return p;}void main(){if(s==0.){gl_FragColor=texture2D(uPrevResult,vTexCoord);return;}gl_FragColor=t(C,vTexCoord,vec2(0.,1.),s);}",
                    inputs: ["C"],
                    output: "x"
                }, {
                    Ph: "precision mediump float;uniform float s,H,I,J;uniform sampler2D x,uPrevResult,z,A;varying vec2 vTexCoord;vec4 Z(vec4 a,vec4 c,float b){return b<=0.?a:mix(c,a,1.+b/20.);}vec4 _(vec4 a,float b){a.rgb=b>0.?mix(a.rgb,vec3(texture2D(A,vec2(a.r,.5)).r,texture2D(A,vec2(a.g,.5)).g,texture2D(A,vec2(a.b,.5)).b),b):mix(a.rgb,vec3(texture2D(z,vec2(a.r,.5)).r,texture2D(z,vec2(a.g,.5)).g,texture2D(z,vec2(a.b,.5)).b),-b);return a;}vec4 aa(vec4 a,float b){return vec4(a.r+b,a.g,a.b-b,a.a);}void main(){gl_FragColor=s==0.?texture2D(uPrevResult,vTexCoord):texture2D(x,vTexCoord);if(H!=0.){vec4 a=texture2D(uPrevResult,vTexCoord);gl_FragColor=clamp(Z(a,gl_FragColor,H),0.,1.);}if(J!=0.)gl_FragColor=clamp(_(gl_FragColor,J),0.,1.);if(I!=0.)gl_FragColor=aa(gl_FragColor,I);}",
                    inputs: ["x"]
                }, {
                    Ph: "precision mediump float;uniform float v;uniform vec2 uResolution;uniform sampler2D uPrevResult;varying vec2 vTexCoord;float h(float b,float a){return .39894*exp(-.5*pow(b/a,2.))/a;}vec4 t(sampler2D d,vec2 e,vec2 q,float b){float f=0.;vec4 g=vec4(0.);vec2 r=1./uResolution;float c=h(0.,b);vec4 k=texture2D(d,e);k.rgb*=k.a,g+=k*c,f+=c;float u=b*2.5;for(float a=1.;a<=200.;a+=2.){if(a>u)break;float i=a+1.,l=h(a,b),m=h(i,b);c=l+m;vec2 j=q*(a*l+i*m)/c*r;vec4 n=texture2D(d,e+j),o=texture2D(d,e-j);n.rgb*=n.a,o.rgb*=o.a,g+=(n+o)*c,f+=c*2.;}vec4 p=g/f;p.rgb/=p.a;return p;}void main(){if(v==0.){gl_FragColor=texture2D(uPrevResult,vTexCoord);return;}gl_FragColor=t(uPrevResult,vTexCoord,vec2(1.,0.),15.);}",
                    output: "C"
                }, {
                    Ph: "precision mediump float;uniform float v;uniform vec2 uResolution;uniform sampler2D C,uPrevResult;varying vec2 vTexCoord;float h(float b,float a){return .39894*exp(-.5*pow(b/a,2.))/a;}vec4 t(sampler2D d,vec2 e,vec2 q,float b){float f=0.;vec4 g=vec4(0.);vec2 r=1./uResolution;float c=h(0.,b);vec4 k=texture2D(d,e);k.rgb*=k.a,g+=k*c,f+=c;float u=b*2.5;for(float a=1.;a<=200.;a+=2.){if(a>u)break;float i=a+1.,l=h(a,b),m=h(i,b);c=l+m;vec2 j=q*(a*l+i*m)/c*r;vec4 n=texture2D(d,e+j),o=texture2D(d,e-j);n.rgb*=n.a,o.rgb*=o.a,g+=(n+o)*c,f+=c*2.;}vec4 p=g/f;p.rgb/=p.a;return p;}void main(){if(v==0.){gl_FragColor=texture2D(uPrevResult,vTexCoord);return;}gl_FragColor=t(C,vTexCoord,vec2(0.,1.),15.);}",
                    inputs: ["C"],
                    output: "x"
                }, {
                    Ph: "precision mediump float;uniform float v,K,L,M,N;uniform sampler2D B,x,uPrevResult;varying vec2 vTexCoord;const mat4 y=mat4(.255,.341,.105,0.,.652,-.465,.319,0.,.093,.125,-.424,0.,0.,.5,.5,1.),O=mat4(1.,1.,1.,0.,1.944,-.748,-.08,0.,.793,0.,-2.161,0.,-1.368,.374,1.121,1.);float P(vec3 a){vec3 b=vec3(.2125,.7154,.0721);return dot(a,b);}float Q(in vec2 a){a=a*2.-1.,a.y*=1.25-.5*step(0.,a.y),a.xy*=a.xy,a.xy=clamp(a.xy,0.,1.),a*=255.,a=floor(a);return sqrt(clamp(a.x+a.y,0.,255.)/255.);}vec4 R(vec4 c,float a){vec3 d=vec3(.2125,.7154,.0721),b=vec3(1.-a)*d;mat3 e=mat3(vec3(b.x)+vec3(a,0,0),vec3(b.y)+vec3(0,a,0),vec3(b.z)+vec3(0,0,a));return vec4(clamp(e*c.rgb,0.,1.),c.a);}float S(in float a){return pow(1.-a,3.);}vec4 ba(vec4 a,float c){const mat3 d=mat3(.334,0,-.5,.333,.434,.25,.333,-.433,.251);vec3 b=d*a.rgb;b.gb+=.5;float e=Q(b.gb),f=S(clamp(e,0.,1.));vec4 g=f*a,i=R(g,1.+c);return a.a*i+(1.-i.a)*a;}float w(float c,float a,float d,float b,float e){return b+(e-b)*(c-a)/(d-a);}float T(float a){float c=1.-step(.1429,a),d=step(.1429,a)-step(.2857,a),e=step(.2857,a)-step(.7143,a),f=step(.7143,a)-step(.8571,a),g=step(.8571,a),b=w(a,0.,.1429,0.,.75)*c;b+=w(a,.1429,.2857,.75,1.)*d,b+=w(a,.2857,.7143,1.,1.)*e,b+=w(a,.7143,.8571,1.,.75)*f,b+=w(a,.8571,1.,.75,0.)*g;return b;}vec4 ca(vec4 a,vec2 e,float f){float g=P(a.rgb);vec4 b=vec4(a.rgb,a.a*T(g)),d=texture2D(x,e);b.rgb*=b.a,a.rgb*=a.a,d.a=1.;vec4 c=mix(d,b,1.+f);c=clamp(c,0.,1.),a=a.a*c+(1.-c.a)*a,a.rgb/=a.a;return a;}vec4 da(vec4 b,float c){vec4 a=y*b;float d=.8*step(0.,c)+.2,e=pow(a.r,3.),f=clamp(a.r*(1.+c*d),0.,1.);a.r=mix(a.r,f,e),b=O*a,b.r=clamp(b.r,0.,1.);return b;}vec4 ea(vec4 b,float c){vec4 a=y*b;float d=pow(1.-a.r,3.),e=clamp(a.r*(1.+c),0.,1.);a.r=mix(a.r,e,d),b=O*a,b.r=clamp(b.r,0.,1.);return b;}vec4 fa(vec4 a,float b){return vec4(mix(a.rgb,vec3(texture2D(B,vec2(a.r,.5)).r,texture2D(B,vec2(a.g,.5)).g,texture2D(B,vec2(a.b,.5)).b),b),a.a);}void main(){gl_FragColor=texture2D(uPrevResult,vTexCoord);if(v!=0.)gl_FragColor=clamp(ca(gl_FragColor,vTexCoord,v),0.,1.);if(N!=0.)gl_FragColor=clamp(ba(gl_FragColor,N),0.,1.);if(L!=0.)gl_FragColor=clamp(da(gl_FragColor,L),0.,1.);if(M!=0.)gl_FragColor=clamp(ea(gl_FragColor,M),0.,1.);if(K!=0.)gl_FragColor=fa(gl_FragColor,K);}",
                    inputs: ["x"]
                }];
                AD = bD((a) => {
                    const b = a.filter,
                        c = a.width;
                    a = a.height;
                    const {
                        r: d,
                        g: e,
                        b: f
                    } = 0 !== b.Ri ? yC({
                        h: ((b.Ri / 200 + .5 - 1 / 7) % 1 + 1) % 1,
                        s: 1,
                        ye: .5
                    }) : {
                        r: 0,
                        g: 0,
                        b: 0
                    };
                    return {
                        D: b.brightness / 200,
                        E: b.contrast / 100 * .6,
                        F: b.saturation / 100 + 1,
                        G: [d, e, f],
                        s: (0 <= b.blur ? b.blur : 3) * Math.max(c, a) / 2E3,
                        H: Math.min(Math.max(-b.blur, 0), 100),
                        J: b.tp / 100,
                        I: b.qp / 100 * .1,
                        N: b.Mn / 100,
                        v: b.Gm / 100,
                        L: b.Um / 100,
                        M: b.Cn / 100,
                        K: b.ho / 100
                    }
                });
                yD = (a) => {
                    const b = eD.Pp(a.r),
                        c = eD.Pp(a.g);
                    a = eD.Pp(a.b);
                    const d = new Uint8Array(768);
                    for (let e = 0; 256 > e; e++) d[3 * e] = Math.max(0, Math.min(255, b.El(e))), d[3 * e + 1] = Math.max(0, Math.min(255, c.El(e))), d[3 * e + 2] = Math.max(0, Math.min(255, a.El(e)));
                    return new __c.tD({
                        width: 256,
                        height: 1,
                        source: d
                    })
                };
                __c.BD = {};
                __c.BD.Ira = Vva;
                __c.BD.BV = zD;
                __c.BD.S5a = AD;
                var Wva = G(() => [1, 2], 1);
                var Xva = G(() => [1, 2, 3], 1);
                var Yva = E(() => ({
                    ab: M(1)
                }));
                __c.CD = E(() => ({
                    content: M(1),
                    medium: M(2),
                    name: M(3),
                    source: M(4),
                    XJa: M(5)
                }));
                __c.DD = E(() => ({
                    path: M(2),
                    referrer: M(3),
                    search: M(4),
                    url: M(6)
                }));
                __c.ED = E(() => ({
                    eventId: I(1),
                    userId: M(2),
                    yp: M(3),
                    Ft: M(4),
                    SE: I(5),
                    n9: I(6),
                    kKa: M(7),
                    locale: M(8),
                    location: C(9, Yva),
                    Zj: M(10),
                    Tt: (0, __c.wd)(11),
                    integrations: __c.pd(12),
                    channel: Ja(13, Wva),
                    Zz: C(14, __c.CD),
                    page: C(15, __c.DD)
                }));
                __c.FD = E(() => ({
                    ba: M(1),
                    name: M(2),
                    Cja: M(3),
                    store: M(4),
                    variant: M(5),
                    version: M(6),
                    h7a: M(7),
                    g7a: M(8),
                    mGa: M(9)
                }));
                __c.GD = E(() => ({
                    NMa: Q(1),
                    WMa: M(2),
                    id: M(3),
                    manufacturer: M(4),
                    model: M(5),
                    name: M(6),
                    token: M(7),
                    type: M(8),
                    version: M(9)
                }));
                __c.HD = E(() => ({
                    name: I(1),
                    version: I(2)
                }));
                __c.ID = E(() => ({
                    Hta: M(1),
                    Kta: Q(2),
                    status: __c.Ka(3, Xva),
                    JLa: Q(4)
                }));
                var Zva = E(() => ({
                    xsa: M(1),
                    name: M(2),
                    version: M(3)
                }));
                __c.JD = E(() => ({
                    $ea: __c.ld(1),
                    height: __c.md(2),
                    width: __c.md(3)
                }));
                __c.KD = E(() => ({
                    app: C(1, __c.FD),
                    S0: C(2, __c.GD),
                    Rf: A(3, __c.HD),
                    wM: C(4, __c.ID),
                    os: C(5, Zva),
                    screen: C(6, __c.JD),
                    userAgent: M(7)
                }));
                __c.LD = E(() => Object.assign({}, {}, {
                    type: w("A?", 1, "IDENTIFY"),
                    Rb: A(1, __c.ED),
                    gg: A(2, __c.KD),
                    xr: od(5),
                    rY: I(6)
                }));
                __c.MD = E(() => Object.assign({}, {}, {
                    type: w("A?", 2, "PAGE"),
                    Rb: A(1, __c.ED),
                    gg: A(2, __c.KD),
                    xr: od(6),
                    name: M(4),
                    $h: M(5)
                }));
                var $va = E(() => Object.assign({}, {}, {
                    type: w("A?", 3, "SCREEN"),
                    Rb: A(1, __c.ED),
                    gg: A(2, __c.KD),
                    xr: od(6),
                    name: M(4),
                    $h: M(5)
                }));
                __c.ND = E(() => Object.assign({}, {}, {
                    type: w("A?", 4, "TRACK"),
                    Rb: A(1, __c.ED),
                    gg: A(2, __c.KD),
                    xr: od(6),
                    event: I(4),
                    $h: I(5)
                }));
                var OD = Ra(() => ({
                    type: [1, __c.LD, 2, __c.MD, 3, $va, 4, __c.ND]
                }), () => ({}));
                __c.PD = E(() => ({
                    event: A(1, OD),
                    hBa: Q(2)
                }));
                E(() => ({
                    events: D(1, OD)
                }));
                __c.awa = E(() => ({}));
                E(() => ({}));
                var bwa = E(() => ({
                    time: kd(1),
                    value: __c.id(2)
                }));
                E(() => ({
                    M4a: kd(1),
                    mTa: kd(2),
                    interval: kd(3),
                    points: D(4, bwa)
                }));
                __c.QD = G(() => [1, 2, 3, 4, 5, 6]);
                var cwa = G(() => [1, 2]);
                __c.RD = E(() => Object.assign({}, {}, {
                    type: w("A?", 1, "DOCUMENT"),
                    id: I(1),
                    extension: M(2)
                }));
                var dwa = E(() => Object.assign({}, {}, {
                    type: w("A?", 2, "FOLDER"),
                    id: I(1)
                }));
                var ewa = Ra(() => ({
                    type: [1, __c.RD, 2, dwa]
                }), () => ({}));
                var SD = () => ({
                    source: Ja(1, __c.QD),
                    rN: I(2),
                    b7a: __c.Ka(5, cwa),
                    PFa: A(6, ewa)
                });
                __c.TD = E(() => Object.assign({}, SD(), {
                    pN: w("A?", 3, "REACTED_PAGE"),
                    L: jd(31)
                }));
                var fwa = E(() => Object.assign({}, SD(), {
                    pN: w("A?", 4, "REACTED_COMMENT"),
                    id: I(31)
                }));
                var gwa = Ra(() => ({
                    pN: [3, __c.TD, 4, fwa]
                }), SD);
                __c.UD = E(() => ({
                    body: A(1, gwa)
                }));
                var hwa = E(() => Object.assign({}, {}, {
                    type: w("A?", 1, "SUCCESS"),
                    id: I(1)
                }));
                var iwa = G(() => [1, 2]);
                var jwa = E(() => Object.assign({}, {}, {
                    type: w("A?", 2, "ERROR"),
                    errorCode: Ja(1, iwa),
                    id: M(2)
                }));
                __c.kwa = Ra(() => ({
                    type: [1, hwa, 2, jwa]
                }), () => ({}));
                __c.VD = G(() => [1, 2]);
                __c.lwa = E(() => Object.assign({}, {
                    source: Ja(1, __c.QD),
                    qN: Ja(2, __c.VD),
                    limit: jd(5, 100),
                    Hb: M(6)
                }, {
                    gq: w("A?", 3, "DOCUMENT"),
                    aa: I(31),
                    we: M(32)
                }));
                var WD = () => ({
                    Hb: M(3)
                });
                var XD = E(() => ({
                    rN: I(1),
                    count: jd(2),
                    Sw: kd(3)
                }));
                var YD = E(() => ({
                    L: jd(1),
                    Fla: D(2, XD)
                }));
                var ZD = E(() => ({
                    aea: I(1),
                    Fla: D(2, XD)
                }));
                var mwa = E(() => Object.assign({}, WD(), {
                    summary: w("A?", 1, "DOCUMENT_SUMMARY"),
                    SM: D(1, YD),
                    i0: D(2, ZD)
                }));
                var nwa = E(() => Object.assign({}, WD(), {
                    summary: w("A?", 2, "FOLDER_SUMMARY"),
                    i0: D(1, ZD)
                }));
                var owa = Ra(() => ({
                    summary: [1, mwa, 2, nwa]
                }), WD);
                __c.pwa = E(() => ({
                    body: A(1, owa)
                }));
                var $D = () => ({
                    J5a: D(3, XD)
                });
                var qwa = E(() => Object.assign({}, $D(), {
                    summary: w("A?", 1, "DOCUMENT_SUMMARY"),
                    SM: D(1, YD),
                    i0: D(2, ZD)
                }));
                var rwa = E(() => Object.assign({}, $D(), {
                    summary: w("A?", 2, "FOLDER_SUMMARY"),
                    i0: D(1, ZD)
                }));
                var swa = Ra(() => ({
                    summary: [1, qwa, 2, rwa]
                }), $D);
                E(() => ({
                    body: A(1, swa)
                }));
                var twa = E(() => Object.assign({}, {}, {
                    type: w("A?", 1, "SUCCESS")
                }));
                var uwa = G(() => [1, 2]);
                var vwa = E(() => Object.assign({}, {}, {
                    type: w("A?", 2, "ERROR"),
                    errorCode: Ja(1, uwa)
                }));
                __c.wwa = Ra(() => ({
                    type: [1, twa, 2, vwa]
                }), () => ({}));
                var xwa = E(() => Object.assign({}, {}, {
                    type: w("A?", 1, "SUCCESS")
                }));
                var ywa = G(() => [1]);
                var zwa = E(() => Object.assign({}, {}, {
                    type: w("A?", 2, "ERROR"),
                    errorCode: Ja(1, ywa)
                }));
                __c.Awa = Ra(() => ({
                    type: [1, xwa, 2, zwa]
                }), () => ({}));
                var aE = E(() => ({
                    Jfa: P(1)
                }));
                __c.bE = E(() => ({
                    aa: I(1),
                    we: M(2),
                    config: A(3, aE)
                }));
                __c.Bwa = E(() => ({}));
                __c.Cwa = E(() => ({
                    aa: I(1),
                    we: M(2)
                }));
                __c.Dwa = E(() => ({
                    configuration: A(1, aE)
                }));
                __c.Ewa = E(() => Object.assign({}, {
                    source: Ja(3, __c.QD)
                }, {
                    gq: w("A?", 1, "DOCUMENT"),
                    aa: I(31),
                    we: M(32),
                    h7: od(33),
                    aj: __c.pd(34)
                }));
                var Fwa = E(() => Object.assign({}, {}, {
                    j8: w("A?", 1, "PAGE"),
                    L: jd(1)
                }));
                var Gwa = E(() => Object.assign({}, {}, {
                    j8: w("A?", 2, "COMMENT"),
                    aea: I(1)
                }));
                var Hwa = Ra(() => ({
                    j8: [1, Fwa, 2, Gwa]
                }), () => ({}));
                var cE = E(() => ({
                    id: I(1),
                    rN: I(2),
                    timestamp: kd(3),
                    pN: A(4, Hwa),
                    user: M(5),
                    brand: M(6)
                }));
                __c.Iwa = E(() => ({
                    Cf: D(1, cE)
                }));
                __c.Jwa = E(() => Object.assign({}, {
                    source: Ja(3, __c.QD),
                    qN: Ja(4, __c.VD),
                    Hb: M(5)
                }, {
                    gq: w("A?", 1, "DOCUMENT"),
                    aa: I(31),
                    we: M(32)
                }));
                __c.Kwa = E(() => ({
                    Cf: D(1, cE),
                    Hb: M(2)
                }));
                var Lwa = E(() => ({
                    user: I(1),
                    brand: I(2)
                }));
                E(() => ({
                    zaa: D(1, Lwa),
                    Hb: M(2)
                }));
                __c.dE = E(() => ({
                    cL: P(1),
                    performance: P(2),
                    cI: P(3),
                    gO: P(4),
                    $M: M(5)
                }));
                __c.Mwa = E(() => ({
                    body: A(5, __c.dE)
                }));
                __c.eE = class extends YC {
                    fC(a) {
                        a && (this.el = a, this.props.m6(a))
                    }
                    render() {
                        const a = this.props.children,
                            b = this.props.disabled;
                        return UC("div", {
                            ref: this.fC,
                            className: "FQgJpw",
                            children: this.el && !b ? UC(__c.fe, {
                                open: !0,
                                Ae: this.el,
                                children: UC("div", {
                                    className: "LIVYXQ",
                                    children: a
                                })
                            }) : a
                        })
                    }
                };
                _dmr(__c.eE, "el");
                _dmb(__c.eE, "fC", null);
                __c.eE = $C([aD], __c.eE);
                __c.Nwa = E(() => ({
                    id: I(1)
                }));
                __c.fE = E(() => ({
                    event: A(1, OD)
                }));
                __c.gE = E(() => ({
                    Tta: Q(1)
                }));
                __c.hE = E(() => ({
                    uBa: P(1)
                }));
            }).call(self, self._cdf17aa01cb7a37fe84ed76fc113a158);
        },

        /***/
        60329:
            (_, __, r) => r(83890),

        /***/
        41727:
            (_, __, r) => r(83890),

        /***/
        80224:
            (_, __, r) => r(83890)

    }
])
//# sourceMappingURL=sourcemaps/4460f195f7a54847.js.map