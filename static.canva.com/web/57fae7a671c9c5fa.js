(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [1926], {

        /***/
        12995: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(2868);
            __web_req__(4252);
            __web_req__(22599);
            __web_req__(35096);
            __web_req__(65146);
            __web_req__(97924);
            __web_req__(39673);
            __web_req__(90682);
            self._cdf17aa01cb7a37fe84ed76fc113a158 = self._cdf17aa01cb7a37fe84ed76fc113a158 || {};
            (function(__c) {
                "use strict";
                var uA, yA, zA, FA, VA, v = __c.v,
                    zy = __c.zy,
                    DB, E = __c.E,
                    I = __c.I,
                    M = __c.M,
                    gC, mC;
                var jA, mA, oA, pA, qA, vA, Dua, BA, CA, DA, HA, KA, Gua, MA, OA, QA, Hua, Iua, PA, Nua, Oua, Rua, Pua, Qua, WA, bB, Sua, fB, zua, Aua, gB, hB, Tua, Uua, iB;
                __c.gA = function(a) {
                    return {
                        top: a.top,
                        left: a.left,
                        width: a.width,
                        height: a.height,
                        rotation: a.rotation
                    }
                };
                __c.hA = function(a) {
                    const b = a.$a();
                    return __c.rz(-b.x + a.left, -b.y + a.top).then(__c.tz(__c.kz(a.rotation))).then(__c.rz(b.x, b.y))
                };
                __c.iA = function(a, b) {
                    __c.t(0 < b.length);
                    var c = b[0].$a();
                    const d = __c.rz(-c.x, -c.y).then(__c.tz(__c.kz(-a))),
                        e = __c.vz(d);
                    var f = 0;
                    let g = 0,
                        h = c = 0;
                    for (var k of b)
                        for (const l of __c.Dz(k)) b = d.transformPoint(l), f = Math.min(f, b.x), g = Math.max(g, b.x), c = Math.min(c, b.y), h = Math.max(h, b.y);
                    k = e.transformPoint(new __c.oz((f + g) / 2, (c + h) / 2));
                    f = g - f;
                    c = h - c;
                    return __c.zz({
                        top: __c.Cz(k.y - c / 2),
                        left: __c.Cz(k.x - f / 2),
                        width: __c.Cz(f),
                        height: __c.Cz(c),
                        rotation: a
                    })
                };
                jA = function(a) {
                    return a instanceof HTMLElement && __c.Eb(a) && null != a.getAttribute("data-hidden-input")
                };
                __c.lA = function(a) {
                    return __c.kA(a)
                };
                mA = function(a) {
                    var b;
                    if (!a.state) return !1;
                    const c = a.state.iq.start,
                        d = a.state.iq.current;
                    return (d.x - c.x) ** 2 + (d.y - c.y) ** 2 <= (null !== (b = a.D.maxDistance) && void 0 !== b ? b : 9) ** 2
                };
                __c.nA = function() {
                    const a = zua.box(null);
                    return Object.create({}, {
                        current: {
                            get: () => a.get(),
                            set: Aua((b) => a.set(b))
                        }
                    })
                };
                oA = function(a) {
                    const b = a.props.page,
                        c = a.props.qb,
                        d = a.props.parent,
                        e = a.props.element;
                    if ("precise" === (null === c || void 0 === c ? void 0 : c.CS) || !(a.props.Fca || b.F && __c.nt(b.F))) return !1;
                    a = null != d ? d.width / d.ra : 1;
                    return 4 > e.width * a * c.scale * e.height * a * c.scale
                };
                pA = function(a, b) {
                    var c, d, e, f;
                    a.style.top = null != b.top ? `${b.top}px` : "";
                    a.style.left = null != b.left ? `${b.left}px` : "";
                    a.style.width = `${b.width}px`;
                    a.style.height = `${b.height}px`;
                    a.style.transform = null !== (c = b.transform) && void 0 !== c ? c : "";
                    a.style.opacity = null !== (d = b.opacity) && void 0 !== d ? d : "";
                    a.style.display = null !== (e = b.display) && void 0 !== e ? e : "";
                    a.style.backgroundColor = null !== (f = b.backgroundColor) && void 0 !== f ? f : ""
                };
                qA = function(a, b) {
                    return a ? a.get() : b
                };
                __c.rA = function(a) {
                    var b;
                    return a.De ? !0 : null !== (b = a.modifier) && void 0 !== b && b.bO ? a.modifier.bO({
                        page: a.page,
                        element: a.element,
                        parent: a.parent
                    }) : !1
                };
                vA = function(a, b) {
                    const {
                        href: c,
                        target: d,
                        children: e,
                        className: f,
                        id: g,
                        title: h,
                        variant: k = "regular",
                        draggable: l = !1,
                        onClick: m,
                        role: n,
                        ariaLabel: q,
                        ariaChecked: r,
                        ariaCurrent: x,
                        disabled: y,
                        k7a: z = !1
                    } = a;
                    ({
                        rel: a
                    } = a);
                    const B = "_blank" === d;
                    B && !a && (a = "noopener");
                    return sA("a", {
                        className: (0, __c.tA)(f, Bua[k], {
                            "qN-0PQ": __c.pv(),
                            OhvLCw: y
                        }),
                        id: g,
                        href: y ? void 0 : c,
                        ref: b,
                        draggable: l,
                        onClick: y ? void 0 : m,
                        target: d,
                        title: h,
                        rel: a,
                        role: n,
                        "aria-label": q,
                        "aria-checked": r,
                        "aria-current": x,
                        "aria-disabled": y || void 0,
                        children: [e,
                            z && uA(Cua, {
                                size: "small",
                                className: "fwM8qA"
                            }), B && uA(__c.aw, {
                                tagName: "span",
                                children: __c.H("VSJwUw")
                            })
                        ]
                    })
                };
                Dua = function(a, b) {
                    var c = Object.assign({}, a),
                        d = a.onClick;
                    a = (delete c.onClick, c);
                    c = wA((e) => {
                        e.preventDefault();
                        d && d(e)
                    }, [d]);
                    return uA(__c.xA, Object.assign({}, {
                        role: "button"
                    }, a, {
                        ref: b,
                        href: a.href || "#",
                        onClick: c
                    }))
                };
                __c.AA = function(a, b, c) {
                    return new yA(zA(a.x, b.x, c), zA(a.y, b.y, c))
                };
                zA = __c.zA = function(a, b, c) {
                    return 0 > c ? a : 1 < c ? b : a + (b - a) * c
                };
                BA = function(a, b) {
                    return 0 <= a ? a % b : a % b + b
                };
                CA = function(a, b) {
                    return [a[0] * b[0] + a[1] * b[2], a[0] * b[1] + a[1] * b[3], a[2] * b[0] + a[3] * b[2], a[2] * b[1] + a[3] * b[3]]
                };
                DA = function(a, b) {
                    return a.r === b.r && a.g === b.g && a.b === b.b && a.a === b.a
                };
                __c.GA = function(a, b) {
                    return DA(a, __c.EA) ? b : DA(b, __c.EA) ? a : new FA(a.r * b.r, a.g * b.g, a.b * b.b, a.a * b.a)
                };
                HA = function(a) {
                    if (a.startsWith("rgba")) {
                        var b = Eua.exec(a);
                        if (!b) throw Error(`invalid rgba color: ${a}`);
                        a = new FA(+b[1] / 255, +b[2] / 255, +b[3] / 255, +b[4])
                    } else if (a.startsWith("rgb")) {
                        b = Fua.exec(a);
                        if (!b) throw Error(`invalid rgb color: ${a}`);
                        a = new FA(+b[1] / 255, +b[2] / 255, +b[3] / 255, 1)
                    } else a = parseInt(a.startsWith("#") ? a.substr(1) : a, 16), a = new FA(Math.floor(a / 65536) % 256 / 255, Math.floor(a / 256) % 256 / 255, a % 256 / 255, 1);
                    return a
                };
                __c.IA = function(a) {
                    if (null == a.dR) {
                        const b = Math.round(255 * a.r).toString(16).padStart(2, "0"),
                            c = Math.round(255 * a.g).toString(16).padStart(2, "0"),
                            d = Math.round(255 * a.b).toString(16).padStart(2, "0");
                        a.dR = `#${b}${c}${d}`
                    }
                    return a.dR
                };
                KA = function(a, b) {
                    b = b.Rk;
                    a.Rk = new JA((a.viewport.x + a.origin.x) * b.width, (a.viewport.y + a.origin.y) * b.height, b.width * a.viewport.width, b.height * a.viewport.height)
                };
                Gua = function(a, b) {
                    const c = b.Kh;
                    var d = b.Ep,
                        e = b.Rk;
                    KA(a, b);
                    b = new JA(a.viewport.x * d.width, a.viewport.y * d.height, a.viewport.width * d.width, a.viewport.height * d.height);
                    a.scale = new yA(d.width / e.width, d.height / e.height);
                    a.position = new yA(-a.origin.x * e.width, -a.origin.y * e.height);
                    c.setTransform(1, 0, 0, 1, 0, 0);
                    a.clear && c.clearRect(b.x, b.y, b.width, b.height);
                    d = a.clearColor;
                    if (null == d.Bda) {
                        e = Math.round(255 * d.r).toString(16).padStart(2, "0");
                        const f = Math.round(255 * d.g).toString(16).padStart(2, "0"),
                            g = Math.round(255 *
                                d.b).toString(16).padStart(2, "0"),
                            h = Math.round(255 * d.a).toString(16).padStart(2, "0");
                        d.Bda = `#${e}${f}${g}${h}`
                    }
                    c.fillStyle = d.Bda;
                    c.fillRect(b.x, b.y, b.width, b.height);
                    d = new Path2D;
                    d.rect(b.x, b.y, b.width, b.height);
                    c.clip(d);
                    c.setTransform(1, 0, 0, 1, 0, 0);
                    c.transform(a.scale.x, 0, 0, a.scale.y, 0, 0);
                    c.translate(a.position.x, a.position.y)
                };
                MA = function(a) {
                    var b;
                    return sA(LA, {
                        children: ["Mode: ", a.mode, uA("br", {}), "IsLooping: ", a.Cx.toString(), uA("br", {}), "Resolution: ", null === (b = a.resolution) || void 0 === b ? void 0 : b.toString(), uA("br", {}), "FPS: ", a.Cx ? a.Zwa.toFixed(2) : "N/A"]
                    })
                };
                OA = function(a, b = !1) {
                    if (null != a.Lj && null != a.Ep) {
                        var c = a.Lj.container,
                            d = a.Lj.canvas,
                            {
                                resolution: e,
                                Gx: f = 1
                            } = a.Ep,
                            g = a.UBa;
                        if (b || null == g || g.width !== c.offsetWidth || g.height !== c.offsetHeight) {
                            g = new NA(c.offsetWidth, c.offsetHeight);
                            switch (e) {
                                case "matchView":
                                    b = new NA(Math.floor(g.width * f), Math.floor(g.height * f));
                                    break;
                                case "matchViewPixels":
                                    b = new NA(Math.floor(g.width * f * a.nF.window.devicePixelRatio), Math.floor(g.height * f * a.nF.window.devicePixelRatio));
                                    break;
                                default:
                                    b = e;
                            }
                            c = g.width / b.width;
                            var h = g.height / b.height;
                            d.width = b.width;
                            d.height = b.height;
                            d.style.transformOrigin = "top left";
                            d.style.transform = `scale(${c}, ${h})`;
                            a.UBa = g
                        }
                    }
                };
                QA = function(a) {
                    if (a.Q9(!0) && null == a.iY) {
                        a.ZK.splice(0, a.ZK.length);
                        var b = a.nF.window.requestAnimationFrame,
                            c = (d) => {
                                PA(a, d ? 0 : void 0, !0);
                                a.render();
                                a.Q9(!1) ? a.iY = b(() => c(!1)) : a.iY = void 0
                            };
                        a.iY = b(() => c(!0))
                    }
                };
                Hua = function(a, b) {
                    __c.ja(null == a.Lj, "Cannot set 'HTMLElements' is not undefined, please dispose setHTMLElements");
                    a.Lj = b;
                    OA(a, !0);
                    QA(a);
                    return () => {
                        a.Lj = void 0
                    }
                };
                Iua = function(a, b) {
                    a.Ep = b;
                    OA(a, !0);
                    QA(a);
                    return () => {
                        a.Ep === b && (a.Ep = void 0)
                    }
                };
                PA = function(a, b, c) {
                    if (null != a.Lj && null != a.Ep) {
                        var d = a.Lj.canvas,
                            e = a.Lj.container,
                            f = a.nF.Sya();
                        null == a.G4 && (a.G4 = f);
                        var g = c ? null != b ? b : Math.min(.001 * (f - a.G4), a.nF.FCa) : b || 0;
                        OA(a);
                        var h = {
                            lr: g,
                            totalTime: a.totalTime,
                            Ep: new JA(0, 0, d.width, d.height),
                            Rk: new JA(0, 0, e.offsetWidth, e.offsetHeight),
                            Kj: a.Kj
                        };
                        a.Kj.forEach((k) => k.update(h));
                        a.elements.forEach((k) => k.update(h));
                        a.totalTime += g;
                        c && (null == b && a.ZK.push(g), a.G4 = f)
                    }
                };
                Nua = function(a) {
                    var b = Object.assign({}, a),
                        c = a.type,
                        d = a.className,
                        e = a.resolution,
                        f = void 0 === a.Gx ? 1 : a.Gx,
                        g = a.mode,
                        h = a.elements,
                        k = a.Kj,
                        l = a.twa;
                    a = a.Aea;
                    b = (delete b.type, delete b.className, delete b.resolution, delete b.Gx, delete b.mode, delete b.elements, delete b.Kj, delete b.twa, delete b.Aea, b);
                    const m = RA(null),
                        n = RA(null),
                        q = Jua(() => new Kua(c), [c]);
                    SA(() => q.Ji(g), [q, g]);
                    SA(() => Iua(q, {
                        Gx: f,
                        resolution: e
                    }), [q, f, e]);
                    SA(() => {
                        if (null != m.current && null != n.current) return Hua(q, {
                            container: m.current,
                            canvas: n.current
                        })
                    }, [q, m, n]);
                    SA(() => {
                        h.forEach((r) => q.addElement(r));
                        return () => h.forEach((r) => {
                            r = q.elements.indexOf(r);
                            if (0 <= r) {
                                const x = q.elements[r];
                                q.elements.splice(r, 1);
                                x.DH(void 0)
                            }
                            q.yJ()
                        })
                    }, [q, h]);
                    SA(() => {
                        k.forEach((r) => {
                            q.Kj.push(r);
                            QA(q)
                        });
                        return () => k.forEach((r) => {
                            r = q.Kj.indexOf(r);
                            0 <= r && (q.Kj.splice(r, 1), QA(q))
                        })
                    }, [q, k]);
                    Lua(a, () => ({
                        update: (r) => q.update(r),
                        render: () => q.render()
                    }), [q]);
                    return sA("div", {
                        className: d,
                        dir: "ltr",
                        ref: m,
                        "aria-hidden": b.ariaHidden,
                        role: b.role,
                        "aria-label": null != b.role ? b.ariaLabel : void 0,
                        children: [uA("canvas", {
                            ref: n
                        }), l && uA(Mua, {
                            yta: q
                        })]
                    })
                };
                __c.TA = function(a, b, c) {
                    b = {
                        Bfa: b,
                        module: c,
                        id: ++a.counter,
                        Ll: 0
                    };
                    a.Dw.push(b);
                    a.setActive(!0)
                };
                Oua = function(a, b) {
                    for (let c = 0; c < a.Uo.length; ++c) {
                        const d = a.Uo[c];
                        a.Ln(d, b);
                        d.TM.KZ || a.yA(d, b)
                    }
                    a.Uo = a.Uo.filter((c) => {
                        ({
                            TM: c
                        } = c);
                        return c.KZ
                    })
                };
                Rua = function(a, b) {
                    for (let c = 0; c < a.Dw.length; ++c) {
                        const d = a.Dw[c],
                            e = Pua(d.Bfa, d.Ll, b.lr);
                        "none" !== e.type && a.emit(e.type, e.count, d, b);
                        d.Ll += b.lr
                    }
                    a.Dw = a.Dw.filter((c) => {
                        var {
                            Bfa: d,
                            Ll: e
                        } = c;
                        return !Qua(d, e)
                    })
                };
                Pua = function(a, b, c) {
                    a = a.Cfa.reduce((d, e) => {
                        switch (e.type) {
                            case "burst":
                                return (e.delay || 0) >= b && (e.delay || 0) < b + c ? {
                                    count: e.count + d.count,
                                    type: "burst"
                                } : d;
                            case "gradual":
                                return {
                                    count: d.count + (Math.floor(Math.max(0, Math.min(b - (e.delay || 0) + c, e.length)) * e.XG) - Math.floor(Math.max(0, Math.min(b - (e.delay || 0), e.length)) * e.XG)),
                                    type: d.type
                                };
                            default:
                                return d;
                        }
                    }, {
                        count: 0,
                        type: "gradual"
                    });
                    return 0 < a.count ? a : {
                        type: "none"
                    }
                };
                Qua = function(a, b) {
                    return a.Cfa.every((c) => {
                        a: switch (c.type) {
                            case "burst":
                                c = (c.delay || 0) < b;
                                break a;
                            case "gradual":
                                c = (c.delay || 0) + c.length <= b;
                                break a;
                            default:
                                c = !1;
                        }
                        return c
                    })
                };
                __c.UA = function(a, b, c) {
                    for (let d = 0; d < b.length; d++) {
                        const e = b[d],
                            f = b[d + 1];
                        if (null == f) return e.value;
                        if (f.time > a) return b = e.time, c(e.value, f.value, (a - b) / (f.time - b))
                    }
                    return b[0].value
                };
                VA = __c.VA = function(a, b) {
                    return "number" === typeof a ? a : Array.isArray(a) ? VA(a[Math.floor(a.length * b.random())], b) : a.min + (a.max - a.min) * b.random()
                };
                WA = function(a, b) {
                    return null != a.min && null != a.max ? FA.Pia(a.min, a.max, b.random()) : Array.isArray(a) ? WA(a[Math.floor(a.length * b.random())], b) : a
                };
                __c.XA = function(a, b) {
                    var c = a.rect;
                    const d = a.size;
                    a = a.W0;
                    return null != c ? c : null != d ? (b = VA(d, b), new JA(-.5 * b, -.5 * b, b, b)) : null != a ? (c = VA(a.width, b), b = VA(a.height, b), new JA(-.5 * c, -.5 * b, c, b)) : new JA
                };
                __c.ZA = function(a, b) {
                    const c = b.position;
                    var d = b.scale,
                        e = b.pF;
                    b = [1, 0, 0, 1];
                    .01 < BA(e.x, 360) && (b = CA(b, [1, 0, 0, Math.cos(e.x * YA)]));
                    .01 < BA(e.y, 360) && (b = CA(b, [-Math.sin((e.y + 90) * YA), 0, 0, 1]));
                    if (.01 < BA(e.z, 360)) {
                        const f = Math.sin(e.z * YA);
                        e = Math.cos(e.z * YA);
                        b = CA(b, [e, -f, f, e])
                    }
                    d = CA(b, [d.x, 0, 0, d.y]);
                    a.transform(d[0], d[1], d[2], d[3], c.x, c.y)
                };
                __c.aB = function(a, b) {
                    a = __c.$A(a);
                    b = __c.$A(b);
                    return {
                        fixed: a.fixed + b.fixed,
                        Be: a.Be + b.Be
                    }
                };
                __c.$A = function(a) {
                    return "number" === typeof a ? {
                        fixed: a,
                        Be: 0
                    } : a
                };
                bB = function(a, b) {
                    Array.isArray(b) ? b.forEach((c) => bB(a, c)) : null != b.min && null != b.max || __c.IA(b)
                };
                __c.cB = function(a) {
                    if ("string" === typeof a) switch (a) {
                        case "small":
                            return [HA("rgb(0, 196, 204)"), HA("rgb(0, 196, 204)"), HA("rgb(125, 42, 232)"), HA("rgb(125, 42, 232)"), HA("rgb(255, 168, 173)"), HA("rgb(117, 179, 118)")];
                        case "large":
                            return [HA("rgb(0, 196, 204)"), HA("rgb(0, 196, 204)"), HA("rgb(115, 0, 230)"), HA("rgb(115, 0, 230)"), HA("rgb(117, 179, 118)"), HA("rgb(26, 98, 255)"), HA("rgb(97, 168, 255)"), HA("rgb(174, 155, 228)"), HA("rgb(247, 177, 85)"), HA("rgb(255, 168, 173)")];
                        default:
                            throw new v(a);
                    }
                    return a.map((b) => "string" === typeof b ? HA(b) : b)
                };
                __c.dB = function(a) {
                    return {
                        type: "image",
                        element: a
                    }
                };
                __c.Xb.prototype.qh = __c.ol(10, function() {
                    return this
                });
                __c.Yb.prototype.qh = __c.ol(9, function(a) {
                    return new __c.Yb(a(this.error))
                });
                __c.kA = (a) => null != a.od && 0 < a.od.length ? (0, __c.Hv)(__c.Ksa, Object.assign({}, a, {
                    od: a.od
                })) : (0, __c.Hv)(__c.Fw, Object.assign({}, a, {
                    od: void 0
                }));
                Sua = class {
                    constructor(a) {
                        this.D = a;
                        this.timeout = () => {
                            var b, c;
                            this.state && (this.state.av = !0, null === (c = (b = this.D).onStart) || void 0 === c ? void 0 : c.call(b, zy(this.state.iq.start)))
                        };
                        this.DIa = (b) => {
                            b.currentTarget.addEventListener("contextmenu", this.onContextMenu)
                        };
                        this.Sda = (b) => {
                            b.currentTarget.removeEventListener("contextmenu", this.onContextMenu)
                        };
                        this.onContextMenu = (b) => {
                            const c = b && (b.explicitOriginalTarget || b.target);
                            document.activeElement && __c.Eb(document.activeElement) && !jA(document.activeElement) || c &&
                                __c.Eb(c) && !jA(c) || b.preventDefault()
                        }
                    }
                    US() {
                        return ["auto"]
                    }
                    onPointerDown(a, b) {
                        var c;
                        if (null == a.start.button || 0 === a.start.button) 1 === b.size ? (this.DIa(a.start), b = window.setTimeout(this.timeout, null !== (c = this.D.XCa) && void 0 !== c ? c : 251), this.state = {
                            iq: a,
                            Ac: b,
                            av: !1
                        }) : 1 < b.size && this.state && (window.clearTimeout(this.state.Ac), this.state = void 0)
                    }
                    onPointerMove() {
                        var a, b;
                        if (this.state && !mA(this)) {
                            const c = this.state;
                            this.state = void 0;
                            window.clearTimeout(c.Ac);
                            this.Sda(c.iq.start);
                            c.av && (null === (b = (a = this.D).b6) ||
                                void 0 === b ? void 0 : b.call(a, zy(c.iq.current)))
                        }
                    }
                    onPointerUp(a) {
                        var b, c, d, e;
                        if (this.state) {
                            const f = this.state,
                                g = mA(this);
                            this.state = void 0;
                            window.clearTimeout(f.Ac);
                            this.Sda(f.iq.start);
                            f.av && (g ? null === (c = (b = this.D).onEnd) || void 0 === c ? void 0 : c.call(b, zy(a.current)) : null === (e = (d = this.D).b6) || void 0 === e ? void 0 : e.call(d, zy(a.current)))
                        }
                    }
                    P6() {
                        var a, b, c;
                        if (null === (a = this.state) || void 0 === a ? 0 : a.av) null === (c = (b = this.D).b6) || void 0 === c ? void 0 : c.call(b, zy(this.state.iq.current))
                    }
                };
                __c.eB = class {
                    constructor(a) {
                        this.D = a
                    }
                    US() {
                        return ["pan-x", "pan-y", "pinch-zoom"]
                    }
                    onPointerDown(a, b) {
                        var c;
                        if (null == a.start.button || 0 === a.start.button) null !== (c = this.D.disabled) && void 0 !== c && c.get() || (this.state = 1 === b.size ? a : void 0)
                    }
                    onPointerUp(a) {
                        var b, c;
                        if (this.state) {
                            var d = this.state.start;
                            a = a.current;
                            var e = (a.x - d.x) ** 2 + (a.y - d.y) ** 2;
                            250 >= a.timestamp - d.timestamp && 81 >= e && (null === (c = (b = this.D).Ds) || void 0 === c ? void 0 : c.call(b, zy(d)));
                            this.state = void 0
                        }
                    }
                    onPointerCancel() {
                        this.state = void 0
                    }
                };
                fB = __webpack_require__(22188);
                zua = fB.LO;
                Aua = fB.aD;
                gB = fB.EH;
                hB = fB.Fl;
                Tua = fB.U5;
                Uua = fB.p6;
                iB = fB.z;
                var jB, sA, LA;
                jB = __webpack_require__(85893);
                uA = __c.uA = jB.jsx;
                sA = jB.jsxs;
                LA = jB.Fragment;
                var kB, RA, SA, mB, nB, wA, qB, Jua, Lua;
                kB = __webpack_require__(67294);
                __c.lB = kB.memo;
                RA = kB.useRef;
                SA = kB.useLayoutEffect;
                mB = kB.Component;
                nB = kB.createRef;
                __c.oB = kB.useState;
                __c.pB = kB.useEffect;
                wA = kB.useCallback;
                qB = kB.forwardRef;
                Jua = kB.useMemo;
                Lua = kB.useImperativeHandle;
                __c.Vua = kB.PureComponent;
                var Wua = __webpack_require__(99601).Z;
                var rB, Xua;
                rB = __webpack_require__;
                Xua = rB(94184);
                __c.tA = rB.n_x(Xua)();
                var sB = __webpack_require__(29323),
                    tB = sB.Pi,
                    uB = sB.b4;
                var vB = __webpack_require__(70655).gn;
                var Yua = __webpack_require__(27661).Om;
                var Zua = __webpack_require__(5527).Z;
                var wB = __webpack_require__,
                    $ua = wB(98234),
                    ava = wB.n_x($ua);
                __c.xB = (0, __c.lB)((a) => {
                    const b = a.oa;
                    a = a.children;
                    const c = RA(null);
                    SA(() => gB(() => {
                        const d = c.current;
                        d && b && (d.style.transform = `scale(${b.get()})`, d.style.transformOrigin = "0 0")
                    }), [b]);
                    return null == b ? a : uA("div", {
                        ref: c,
                        children: a
                    })
                });
                var yB;
                yB = hB(() => 1);
                __c.zB = tB((a) => {
                    const b = a.mode,
                        c = a.config,
                        d = a.modifier,
                        e = a.animation,
                        f = a.element,
                        g = a.page,
                        h = a.qb,
                        k = a.Nd,
                        l = a.De,
                        m = a.zo,
                        n = a.oa,
                        q = a.Oz,
                        r = a.Fca,
                        {
                            Kba: x,
                            Dba: y,
                            lca: z,
                            Eba: B,
                            jba: F,
                            aca: J,
                            eca: N,
                            mca: K,
                            vba: L
                        } = c.fwa[b];
                    switch (f.type) {
                        case "grid":
                            return uA(y, Object.assign({}, Object.assign({}, a, {
                                element: f,
                                animation: "grid" === (null === e || void 0 === e ? void 0 : e.type) ? e : void 0
                            })));
                        case "line":
                            return uA(x, Object.assign({}, Object.assign({}, a, {
                                element: f,
                                animation: "line" === (null === e || void 0 === e ? void 0 : e.type) ? e : void 0
                            })));
                        case "table":
                            return uA(z, Object.assign({}, Object.assign({}, a, {
                                element: f,
                                animation: "table" === (null === e || void 0 === e ? void 0 : e.type) ? e : void 0
                            })));
                        case "group":
                            return uA(B, Object.assign({}, Object.assign({}, a, {
                                element: f,
                                animation: "group" === (null === e || void 0 === e ? void 0 : e.type) ? e : void 0
                            }), {
                                children: f.$b.map((O, U) => {
                                    var da;
                                    return uA(__c.zB, Object.assign({}, {
                                        mode: b,
                                        config: c,
                                        modifier: d,
                                        animation: "group" === (null === e || void 0 === e ? void 0 : e.type) ? null === (da = e.children) || void 0 === da ?
                                            void 0 : da.get(O) : void 0,
                                        element: O,
                                        key: U,
                                        page: g,
                                        qb: h,
                                        Oz: q,
                                        Nd: k,
                                        parent: f,
                                        De: l,
                                        zo: m,
                                        oa: n,
                                        Fca: r
                                    }))
                                })
                            }));
                        case "chart":
                            return uA(F, Object.assign({}, Object.assign({}, a, {
                                element: f,
                                animation: "chart" === (null === e || void 0 === e ? void 0 : e.type) ? e : void 0
                            })));
                        case "rect":
                            return uA(J, Object.assign({}, Object.assign({}, a, {
                                element: f,
                                animation: "rect" === (null === e || void 0 === e ? void 0 : e.type) ? e : void 0
                            })));
                        case "shape":
                            return uA(N, Object.assign({}, Object.assign({}, a, {
                                element: f,
                                animation: "shape" === (null ===
                                    e || void 0 === e ? void 0 : e.type) ? e : void 0
                            })));
                        case "text":
                            return uA(K, Object.assign({}, Object.assign({}, a, {
                                element: f,
                                animation: "text" === (null === e || void 0 === e ? void 0 : e.type) ? e : void 0
                            })));
                        case "embed":
                            return uA(L, Object.assign({}, Object.assign({}, a, {
                                element: f,
                                animation: "embed" === (null === e || void 0 === e ? void 0 : e.type) ? e : void 0
                            })));
                        default:
                            throw new v(f);
                    }
                });
                DB = __c.DB = class extends mB {
                    constructor(a) {
                        super(a);
                        this.ej = __c.nA();
                        this.vfa = __c.nA();
                        this.error = !1;
                        this.AEa = (b) => {
                            const c = this.props.config;
                            __c.ja(!this.GL);
                            __c.u(c.dk)(__c.u(this.oz)) && b.preventDefault()
                        };
                        this.bX = oA(this)
                    }
                    componentDidCatch(a) {
                        this.error = !0;
                        var b;
                        null === (b = this.props.config.B) || void 0 === b ? void 0 : b.error(a, {
                            Rc: "Unexpected error rendering element"
                        })
                    }
                    render() {
                        if (this.bX) return null;
                        const {
                            animation: a,
                            oa: b = yB,
                            config: c,
                            qb: d,
                            tS: e = !1
                        } = this.props, f = this.props.parent, g = this.props.element, h = this.Pm.onClick,
                            k = this.Pm.onMouseDown, l = this.Pm.onMouseUp, m = this.Pm.onMouseOver, n = this.Pm.onMouseOut, q = this.Pm.onTouchStart, r = this.Pm.onTouchEnd, x = !(!a || !(a.pu || a.Ng || a.IAa)), y = e && !!a, z = this.error ? null : this.props.children;
                        return sA(LA, {
                            children: [sA("div", Object.assign({}, {
                                ref: Wua(this.ej, this.$w.nq)
                            }, {
                                className: (0, __c.tA)({
                                    _18tjaw: !0,
                                    QzPv0g: this.active,
                                    _6yImBA: y,
                                    BgMazg: x,
                                    IVKCLA: this.pointerEvents
                                }),
                                onClick: h,
                                onMouseDown: k,
                                onMouseUp: l,
                                onMouseOver: m,
                                onMouseOut: n,
                                onTouchStart: q,
                                onTouchEnd: r
                            }, {
                                children: [0 !==
                                    this.zG && uA(AB, {
                                        zG: this.zG,
                                        element: g,
                                        parent: f,
                                        qb: d,
                                        oa: b
                                    }), x ? uA("div", {
                                        ref: this.vfa,
                                        className: "_18tjaw",
                                        children: z
                                    }) : z, this.bO && this.oz && uA("a", {
                                        className: "D_RfTw",
                                        href: this.oz,
                                        rel: "nofollow",
                                        target: this.GL ? "_self" : "_blank",
                                        onClick: !this.GL && this.oz && c.dk ? this.AEa : void 0
                                    })
                                ]
                            })), a && a.yk && uA(BB, {
                                animation: a,
                                element: g,
                                oa: b
                            })]
                        })
                    }
                    componentDidMount() {
                        const a = this.props.Oz;
                        uB(this, [gB(() => {
                            var {
                                oa: b = yB
                            } = this.props;
                            b = CB(this.props.element, this.props.animation, b.get(), this.T6);
                            const c = this.ej.current;
                            c && pA(c, b)
                        }, {
                            scheduler: a
                        }), gB(() => {
                            const b = this.vfa.current;
                            b && pA(b, this.I3)
                        }), Tua(() => oA(this), (b) => this.bX = b, {
                            scheduler: a
                        })])
                    }
                    get I3() {
                        const {
                            animation: a,
                            oa: b = yB
                        } = this.props, c = this.props.element.width, d = this.props.element.height, e = a && qA(a.Ng, 0), f = a && qA(a.pu, 0), g = a && qA(a.IAa, 1);
                        return {
                            width: c * b.get(),
                            height: d * b.get(),
                            transform: null != f && null != e ? `translate(${f*b.get()}px, ${e*b.get()}px) scale(${g})` : ""
                        }
                    }
                    get modifier() {
                        return this.props.modifier
                    }
                    get MB() {
                        return {
                            element: this.props.element,
                            page: this.props.page,
                            parent: this.props.parent
                        }
                    }
                    get active() {
                        var a, b, c;
                        return null !== (c = null === (b = null === (a = this.modifier) || void 0 === a ? void 0 : a.isActive) || void 0 === b ? void 0 : b.call(a, this.MB)) && void 0 !== c ? c : !1
                    }
                    get T6() {
                        var a, b, c;
                        return null !== (c = null === (b = null === (a = this.modifier) || void 0 === a ? void 0 : a.PUa) || void 0 === b ? void 0 : b.call(a, this.MB)) && void 0 !== c ? c : 1
                    }
                    get bO() {
                        return __c.rA(this.props)
                    }
                    get pointerEvents() {
                        var a, b, c;
                        return null !== (c = null === (b = null === (a = this.modifier) || void 0 === a ? void 0 : a.fNa) ||
                            void 0 === b ? void 0 : b.call(a, this.MB)) && void 0 !== c ? c : !0
                    }
                    get zG() {
                        var a, b, c;
                        return null !== (c = null === (b = null === (a = this.modifier) || void 0 === a ? void 0 : a.OUa) || void 0 === b ? void 0 : b.call(a, this.MB)) && void 0 !== c ? c : 0
                    }
                    get Pm() {
                        const a = this.modifier;
                        if (!a) return {};
                        const b = (c) => c && ((d) => c.call(a, d, this.MB));
                        return {
                            onClick: b(a.onClick),
                            onMouseDown: b(a.onMouseDown),
                            onMouseUp: b(a.onMouseUp),
                            onMouseOver: b(a.onMouseOver),
                            onMouseOut: b(a.onMouseOut),
                            onTouchStart: b(a.onTouchStart),
                            onTouchEnd: b(a.onTouchEnd),
                            gka: b(a.gka),
                            fka: b(a.fka),
                            eka: b(a.eka),
                            Ds: b(a.Ds)
                        }
                    }
                    get $w() {
                        const a = this.Pm.gka,
                            b = this.Pm.fka,
                            c = this.Pm.eka,
                            d = this.Pm.Ds,
                            e = [];
                        (a || b || c) && e.push(new Sua({
                            XCa: 750,
                            onStart: a,
                            onEnd: b,
                            b6: c
                        }));
                        d && e.push(new __c.eB({
                            Ds: d
                        }));
                        return new __c.My(e)
                    }
                    get oz() {
                        const {
                            element: {
                                link: a
                            },
                            config: {
                                Mk: b
                            }
                        } = this.props;
                        if (a) return b ? b(a) : a
                    }
                    get GL() {
                        return null != this.oz && this.oz.startsWith("#")
                    }
                };
                __c.p = DB.prototype;
                _dmr(DB, "error");
                _dmr(DB, "bX");
                _dma(DB, "componentDidCatch", null);
                _dp([hB.struct], DB.prototype, "I3", null);
                _dmc(DB, "modifier");
                _dp([hB({
                    equals: Uua.shallow
                })], DB.prototype, "MB", null);
                _dmc(DB, "active");
                _dmc(DB, "T6");
                _dmc(DB, "bO");
                _dmc(DB, "pointerEvents");
                _dmc(DB, "zG");
                _dmc(DB, "Pm");
                _dmc(DB, "$w");
                _dmc(DB, "oz");
                _dmc(DB, "GL");
                DB = __c.DB = vB([tB], DB);
                var AB = class extends mB {
                    constructor() {
                        super(...arguments);
                        this.ej = __c.nA()
                    }
                    componentDidMount() {
                        uB(this, gB(() => {
                            this.ej.current && this.box && pA(this.ej.current, __c.gA(this.box))
                        }))
                    }
                    render() {
                        return this.e3 && uA("div", {
                            className: "n9SN2w",
                            ref: this.ej
                        })
                    }
                    get box() {
                        const a = this.props.zG,
                            b = this.props.oa;
                        var c = this.props.parent;
                        const d = this.props.element;
                        c = (null != c ? c.width / c.ra : 1) * this.props.qb.scale;
                        const e = d.height * c;
                        if (!(d.width * c >= a && e >= a)) return __c.Az({
                            $a: __c.oz.of({
                                x: d.width / 2,
                                y: d.height / 2
                            }),
                            width: Math.round(Math.max(d.width,
                                a / c)),
                            height: Math.round(Math.max(d.height, a / c))
                        }).scale(b.get())
                    }
                    get e3() {
                        return null != this.box
                    }
                };
                _dp([hB.struct], AB.prototype, "box", null);
                _dmc(AB, "e3");
                AB = vB([tB], AB);
                var BB = class extends mB {
                    constructor() {
                        super(...arguments);
                        this.lda = nB();
                        this.mda = nB()
                    }
                    render() {
                        const {
                            width: a,
                            height: b,
                            transform: c
                        } = CB(this.props.element, this.props.animation, this.props.oa.get(), void 0);
                        return uA("div", {
                            ref: this.lda,
                            style: {
                                width: a,
                                height: b,
                                transform: c
                            },
                            className: "JZ59Kw",
                            children: uA("div", {
                                ref: this.mda,
                                className: "wEhAKg"
                            })
                        })
                    }
                    componentDidMount() {
                        uB(this, [gB(() => {
                            const a = this.mda.current;
                            a && pA(a, this.l_)
                        }), gB(() => {
                            const a = this.lda.current,
                                {
                                    width: b,
                                    height: c,
                                    transform: d
                                } =
                                CB(this.props.element, this.props.animation, this.props.oa.get(), void 0);
                            a && pA(a, {
                                width: b,
                                height: c,
                                transform: d
                            })
                        })])
                    }
                    get l_() {
                        var a = __c.u(this.props.animation.yk);
                        const b = this.props.element.width,
                            c = this.props.element.height,
                            d = this.props.oa.get(),
                            e = qA(a.Ea, 0),
                            f = qA(a.qa, 0),
                            g = qA(a.r, 255),
                            h = qA(a.g, 255),
                            k = qA(a.b, 255);
                        a = qA(a.display, 1);
                        return {
                            width: b * d,
                            height: c * d,
                            transform: `translate3d(${f*d}px, ${e*d}px, 0px)`,
                            backgroundColor: `rgb(${g}, ${h}, ${k})`,
                            display: .5 > a ? "none" : void 0
                        }
                    }
                };
                _dp([hB.struct], BB.prototype, "l_", null);
                BB = vB([tB], BB);
                var CB = Yua((a, b, c, d) => {
                    const e = a.width,
                        f = a.height;
                    var g = a.Pa;
                    let {
                        top: h,
                        left: k,
                        rotation: l
                    } = a, m = a = 1, n = 1;
                    g = 1 - g;
                    c = c || 1;
                    b && (h += qA(b.Ea, 0), k += qA(b.qa, 0), l += qA(b.rotate, 0), g *= qA(b.opacity, 1), a *= qA(b.scale, 1), m *= qA(b.Ss, 1), n *= qA(b.Ts, 1));
                    null != d && (g *= d);
                    return {
                        width: e * c,
                        height: f * c,
                        opacity: 1 > g ? `${g}` : void 0,
                        transform: `translate(${k*c}px, ${h*c}px)` + (0 !== l ? ` rotate(${l}deg)` : "") + (1 !== a || 1 !== m || 1 !== n ? ` scale(${a*m},${a*n})` : "")
                    }
                });
                (function(a) {
                    function b(c) {
                        return null != c ? {
                            state: "invalid",
                            error: c
                        } : {
                            state: "invalid",
                            error: !0
                        }
                    }
                    a.valid = function() {
                        return {
                            state: "valid"
                        }
                    };
                    a.invalid = b;
                    a.all = (c) => (d) => {
                        for (const e of c) {
                            const f = e(d);
                            if ("invalid" === f.state) return f
                        }
                        return a.valid()
                    };
                    a.wsa = (c) => (d) => {
                        for (const e of c) {
                            const f = e(d);
                            if ("valid" === f.state) return f
                        }
                        return a.invalid()
                    };
                    a.qh = function(c, d) {
                        return (e) => {
                            e = c(e);
                            return "invalid" === e.state ? b(d(e.error)) : e
                        }
                    };
                    a.aUa = (c) => c.reduce((d, e) => {
                        "invalid" === e.state && d.push(e.error);
                        return d
                    }, [])
                })(__c.EB || (
                    __c.EB = {}));
                __c.FB = (a) => (b) => a.test(b) ? __c.EB.valid() : __c.EB.invalid();
                __c.bva = __c.FB(/^[^@\s:]+@[^@^.]+\.[^@]+$/);
                __c.cva = __c.FB(/^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i);
                E(() => ({
                    userId: I(1),
                    vFa: __c.P(2)
                }));
                var dva = __c.G(() => [1, 2]);
                E(() => ({
                    aa: I(1),
                    label: I(2),
                    rxa: M(3)
                }));
                E(() => ({
                    aa: I(1),
                    Ria: I(2),
                    label: I(3),
                    rxa: M(4)
                }));
                __c.eva = E(() => ({
                    id: __c.kd(1),
                    sessionId: I(2),
                    aa: I(3),
                    Kk: M(4),
                    Ic: __c.jd(5),
                    Rza: __c.Ka(7, dva)
                }));
                (function(a) {
                    a.PGa = (b, c, d, e) => {
                        d /= e;
                        return b + (c - b) * d * d
                    };
                    a.RGa = (b, c, d, e) => {
                        d /= e;
                        return b + (c - b) * d * (2 - d)
                    };
                    a.QGa = (b, c, d, e) => {
                        d /= e;
                        return b + (c - b) * (.5 > d ? 2 * d * d : (4 - 2 * d) * d - 1)
                    };
                    a.Sr = (b, c, d, e) => b + d / e * (c - b);
                    a.Wua = (b, c, d, e) => b + (c - b) * Math.pow(d / e, 3);
                    a.Yua = (b, c, d, e) => b + (c - b) * (Math.pow(d / e - 1, 3) + 1);
                    a.Xua = (b, c, d, e) => {
                        d /= e;
                        return b + (c - b) * (.5 > d ? 4 * Math.pow(d, 3) : 1 - Math.pow(-2 * d + 2, 3) / 2)
                    };
                    a.SGa = (b, c, d, e) => b + (c - b) * Math.pow(d / e, 4);
                    a.TGa = (b, c, d, e) => b - (c - b) * (Math.pow(d / e - 1, 4) - 1);
                    a.nxa = (b, c, d, e) => b + (c - b) * (-Math.pow(2, d / e * -10) +
                        1);
                    a.ZIa = (b, c, d, e) => {
                        c -= b;
                        return b + c - c * Math.cos(d / e * (Math.PI / 2))
                    }
                })(__c.GB || (__c.GB = {}));
                var fva = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-1.25a5.75 5.75 0 1 0 0-11.5 5.75 5.75 0 0 0 0 11.5zM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-.75 2.06a.75.75 0 1 1 1.5 0v3a.75.75 0 0 1-1.5 0v-3z\"/></svg>";
                var gva = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-1.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17zm0-10a1 1 0 0 1 1 1V16a1 1 0 0 1-2 0v-4.5a1 1 0 0 1 1-1zm0-1.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z\"/></svg>";
                var hva = __c.gw({
                    small: fva,
                    medium: gva
                });
                var HB = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"m13.8 4.15 6.86 13.97a2 2 0 0 1-1.8 2.88H5.14a2 2 0 0 1-1.8-2.88L10.2 4.15a2 2 0 0 1 3.6 0zm-1.35.66a.5.5 0 0 0-.9 0L4.7 18.78a.5.5 0 0 0 .45.72h13.72a.5.5 0 0 0 .45-.72L12.45 4.81zM12 18.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zM12 9a1 1 0 0 1 1 1v3.5a1 1 0 0 1-2 0V10a1 1 0 0 1 1-1z\"/></svg>";
                __c.IB = __c.gw({
                    small: HB,
                    medium: HB
                });
                var iva = {
                    colorBlack: "rgb(13, 18, 22)",
                    colorBlueUltraLight: "rgb(209, 238, 252)",
                    colorGoldUltraLight: "rgb(255, 237, 189)",
                    colorGreenUltraLight: "rgb(219, 243, 204)",
                    colorRedUltraLight: "rgb(255, 214, 218)",
                    linkAlert: "Ekl2FA",
                    borderRadius: "4px",
                    gridBaseline: "8px",
                    smallSpace: "16px",
                    xsmallSpace: "12px",
                    xxxsmallSpace: "4px",
                    colorCriticalForeLow: "var(--XRo-NQ)",
                    colorCriticalLow: "var(--k8LaaQ)",
                    colorInfoForeLow: "var(--ypAvbQ)",
                    colorInfoLow: "var(--axckVg)",
                    colorPositiveForeLow: "var(--7Jsj3A)",
                    colorPositiveLow: "var(--1GR_Og)",
                    colorWarnForeLow: "var(--a01w0A)",
                    colorWarnLow: "var(--wpHozg)",
                    unthemed: "body:not(:global(.theme))",
                    fontWeightSemiBold: "600",
                    textMedium: "fFOiLQ",
                    textSmall: "_5RSqIg",
                    alert: "RNFNIA Ekl2FA fFOiLQ",
                    small: "_8vlbIg _5RSqIg",
                    global: "_2l-hHA",
                    content: "eCRvjw",
                    iconAlignmentSpacer: "NXeakQ",
                    title: "czV2Sw",
                    close: "_2E9Y8A",
                    positive: "HAo7AQ RNFNIA Ekl2FA fFOiLQ",
                    warn: "wJUTbg RNFNIA Ekl2FA fFOiLQ",
                    critical: "SSiHbw RNFNIA Ekl2FA fFOiLQ",
                    info: "_9y-BYQ RNFNIA Ekl2FA fFOiLQ"
                };
                var jva;
                jva = (a) => {
                    ({
                        tone: a
                    } = a);
                    switch (a) {
                        case "critical":
                        case "warn":
                            return uA(__c.IB, {
                                size: "medium"
                            });
                        case "info":
                            return uA(hva, {
                                size: "medium"
                            });
                        case "positive":
                            return uA(__c.Qy, {
                                size: "medium"
                            });
                        default:
                            throw Error("Unknown icon type");
                    }
                };
                __c.JB = (a) => {
                    var {
                        children: b,
                        className: c,
                        title: d,
                        tone: e,
                        dismissible: f,
                        nEa: g,
                        size: h = "medium",
                        V8: k = !0,
                        f4a: l = !0,
                        za: m
                    } = a;
                    a = "small" !== h && l;
                    return uA("div", Object.assign({}, {
                        className: (0, __c.tA)(c, iva[e], {
                            "_2l-hHA": !k,
                            "_8vlbIg _5RSqIg": "small" === h
                        })
                    }, "critical" === e ? {
                        role: "alert"
                    } : {
                        "aria-live": "polite"
                    }, {
                        children: sA(__c.Ty, {
                            spacing: "small" === h ? "none" : "xxsmall",
                            children: [a && uA(__c.Sy, {
                                width: "content",
                                children: m ? uA(m, {
                                    size: "medium"
                                }) : uA(jva, {
                                    tone: e
                                })
                            }), sA(__c.Sy, {
                                children: [a &&
                                    uA("div", {
                                        className: "NXeakQ"
                                    }), d && sA("strong", {
                                        className: "czV2Sw",
                                        children: [d, "\xA0"]
                                    }), b
                                ]
                            }), f && uA(__c.Sy, {
                                width: "content",
                                children: uA(__c.lA, {
                                    variant: "tertiary",
                                    className: "_2E9Y8A",
                                    onClick: g,
                                    icon: __c.Iw,
                                    ariaLabel: __c.H("LW7DHQ"),
                                    size: "small",
                                    Mg: h
                                })
                            })]
                        })
                    }))
                };
                var kva = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\"><path d=\"M3.625 4.25a.375.375 0 0 0-.375.375v7.75c0 .207.168.375.375.375h7.75a.375.375 0 0 0 .375-.375V10.04a.625.625 0 1 1 1.25 0v2.335c0 .898-.727 1.625-1.625 1.625h-7.75A1.625 1.625 0 0 1 2 12.375v-7.75C2 3.728 2.728 3 3.625 3h2.336a.625.625 0 0 1 0 1.25H3.625z\"/><path d=\"M14.817 1.183a.625.625 0 0 1 0 .884l-6.75 6.75a.625.625 0 1 1-.884-.884l6.75-6.75a.625.625 0 0 1 .884 0z\"/><path d=\"M9.25 1.625c0-.345.28-.625.625-.625h4.5c.345 0 .625.28.625.625v4.5a.625.625 0 1 1-1.25 0V2.25H9.875a.625.625 0 0 1-.625-.625z\"/></svg>";
                var lva = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"currentColor\"><path d=\"M5.25 5.5a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h11.5a.75.75 0 0 0 .75-.75V14a.75.75 0 0 1 1.5 0v3.75A2.25 2.25 0 0 1 16.75 20H5.25A2.25 2.25 0 0 1 3 17.75V6.25A2.25 2.25 0 0 1 5.25 4H9a.75.75 0 0 1 0 1.5H5.25z\"/><path d=\"M20.78 2.22a.75.75 0 0 1 0 1.06l-10 10a.75.75 0 1 1-1.06-1.06l10-10a.75.75 0 0 1 1.06 0z\"/><path d=\"M13 2.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0V3.5h-5.75a.75.75 0 0 1-.75-.75z\"/></svg>";
                var Cua = __c.gw({
                    small: kva,
                    medium: lva
                }, !0);
                var Bua = {
                    colorPurple: "rgb(125, 42, 232)",
                    colorPurpleLight: "rgb(141, 57, 250)",
                    colorRed: "rgb(248, 72, 86)",
                    colorRedDark: "rgb(204, 40, 54)",
                    monoBlack: "rgb(14, 19, 24)",
                    monoBlackA150: "rgba(17, 23, 29, 0.6)",
                    monoWhite: "rgb(255, 255, 255)",
                    monoWhiteA50: "rgba(255, 255, 255, 0.95)",
                    xxxsmallSpace: "4px",
                    colorTypographyCritical: "var(--05tvjQ)",
                    colorTypographyCriticalActive: "var(--gIHunw)",
                    colorTypographyCriticalHover: "var(--U8IpiA)",
                    colorTypographyLink: "var(--tkbyNg)",
                    colorTypographyLinkActive: "var(--3zRlag)",
                    colorTypographyLinkHover: "var(--elFFpw)",
                    colorTypographyTertiary: "var(--fSfh3A)",
                    unthemed: "body:not(:global(.theme))",
                    fontWeightSemiBold: "600",
                    regular: "ovm4pQ",
                    semiBold: "T26_6Q",
                    subtle: "oUJMcQ",
                    muted: "oCRJNQ",
                    critical: "Pi-rpQ",
                    htmlMessageRegularLink: "z2oZFw",
                    htmlMessageSemiBoldLink: "wL6vqQ",
                    htmlMessageSubtleLink: "_5JgSIQ",
                    htmlMessageMutedLink: "_6pE-dQ",
                    htmlMessageCriticalLink: "_2AY7TA",
                    hoverSupported: "qN-0PQ",
                    disabled: "OhvLCw",
                    darkOnLinks: "iKXEbw",
                    subtleDarkOnLinks: "Sgn4mw",
                    unstyled: "aiE6Dw",
                    htmlMessageUnstyledLink: "l__qeA",
                    alert: "Ekl2FA",
                    openInNewIcon: "fwM8qA"
                };
                __c.KB = qB(function(a, b) {
                    return vA(a, b)
                });
                __c.xA = qB(function(a, b) {
                    return vA(Object.assign({}, a), b)
                });
                __c.LB = qB(function(a, b) {
                    return Dua(a, b)
                });
                var mva;
                mva = ({
                    message: a = __c.H("QCLTSw"),
                    eC: b
                }) => {
                    const c = wA((d) => {
                        d.preventDefault();
                        null === b || void 0 === b ? void 0 : b()
                    }, [b]);
                    return uA(__c.JB, {
                        tone: "critical",
                        size: "small",
                        children: sA("span", {
                            className: "WoE5Nw",
                            children: [uA("span", {
                                children: a
                            }), b && sA("span", {
                                children: ["\xA0", uA(__c.xA, {
                                    href: "#",
                                    onClick: c,
                                    children: __c.H("XoXDGA")
                                })]
                            })]
                        })
                    })
                };
                __c.MB = class extends mB {
                    constructor() {
                        super(...arguments);
                        this.error = void 0;
                        this.eC = () => {
                            const a = this.props.eC,
                                b = this.error;
                            this.error = void 0;
                            a && b && a(b)
                        }
                    }
                    componentDidCatch(a, b) {
                        const c = this.props.Kw;
                        this.error = a;
                        c(a, b)
                    }
                    render() {
                        const a = this.props.message;
                        var b = this.props.jWa;
                        const c = this.props.eC;
                        return this.error ? (b = (!b || b(this.error)) && c, uA(mva, {
                            message: a,
                            eC: b ? this.eC : void 0
                        })) : this.props.children
                    }
                };
                _dmr(__c.MB, "error");
                _dma(__c.MB, "componentDidCatch", null);
                _dma(__c.MB, "eC", void 0);
                __c.MB = vB([tB], __c.MB);
                var nva = "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.865 16h2.564A4.985 4.985 0 0 1 17 14.5h6.667a5 5 0 0 1 0 10H17a4.978 4.978 0 0 1-3-1h-2.845A7.494 7.494 0 0 0 17.5 27h6a7.5 7.5 0 0 0 0-15h-6a7.5 7.5 0 0 0-6.635 4Z\" fill=\"currentColor\"/><path d=\"M9.5 6a7.5 7.5 0 1 0 0 15h6a7.5 7.5 0 0 0 6.635-4h-2.898a4.985 4.985 0 0 1-3.57 1.5H9a5 5 0 0 1 0-10h6.667c1.126 0 2.164.372 3 1h3.178A7.494 7.494 0 0 0 15.5 6h-6Z\" fill=\"currentColor\"/></svg>";
                var ova = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M8.64 16.5a4.87 4.87 0 0 0 4.11 2.25h4.5a4.88 4.88 0 0 0 0-9.75h-4.5a4.88 4.88 0 0 0-4.5 3h1.7c.6-.9 1.63-1.5 2.8-1.5h4.5a3.38 3.38 0 0 1 0 6.75h-4.5c-.8 0-1.54-.28-2.12-.75H8.64zm7.1-9a4.87 4.87 0 0 0-4.12-2.25h-4.5a4.87 4.87 0 1 0 0 9.75h4.5a4.88 4.88 0 0 0 4.5-3h-1.69c-.6.9-1.63 1.5-2.8 1.5h-4.5a3.38 3.38 0 0 1 0-6.75h4.5c.8 0 1.54.28 2.12.75h1.98z\"/></svg>";
                __c.NB = __c.gw({
                    vc: nva,
                    medium: ova
                });
                __c.OB = "<svg width=\"139\" height=\"30\" viewBox=\"0 0 139 30\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" d=\"M90.2 7.3c-.5.7-1.7 2.8-1.6 6.1 0 4.5 6 6.2 9.5 2.1 3.6-4.2 1.7-8.4-1.6-8.6a6 6 0 0 0-4.9 2c.7-1.7-.8-2.6-1.4-1.6zm6 2c3.4 1.1 1.2 7-2.5 6.3-2.5-.3-3-2.2-2.8-4 .7-1.6 3.5-3 5.2-2.3zm12.7-6.7c-.8 0-3-.3-4.7-.3.7 1.5 2.2 5.4 2 11.2-.2 8-4.8 12.5-11 12.5-5.8 0-9-3.7-9.4-5-.4-1.3.5-1.3.9-.9.7.8 1.4 1.5 2.7 2.2 4.6 2 12.8 1 13.6-7 .8-6.8-1.2-11.5-2-13A47 47 0 0 0 86.9 5C84.4 6 84 4.4 84 3.7a2 2 0 0 1 1.6-1.8c10-2.7 21-1 22.5-.8 1.6.3 1.5 1.5.7 1.5zm6.8 1.8a54 54 0 0 1 6.5-1.7c-3.4 2.4-8 9-4.5 14.2 4 6 15.3 3.5 15.6-4.2.2-7.5-8.7-8-11-3.8-2 3.5.8 5.8 2.4 5.9.3.6.6 1 .9 1 .5-.1.4-.6.2-1.2.5-.2 2.1-1 2.5-2.7.4-2-2.2-2.8-3.4-.3a4.5 4.5 0 0 0-.4 1.8c-3-1-.6-6.5 4.1-4.5 4.3 1.7 1.5 10.2-5.8 8-7-2.3-1.6-14 4.7-15 2.3 0 5 .1 6.8.4 1.6.2 1.6-1.1.6-1.4-3-1-13.4-1.6-19.5.4-1 .3-1.7 1-1.8 2 0 1 .9 1.5 2 1.1zm11.1 6.5c1.1 0 .2 2-1.2 2.5 0-1 .4-2.6 1.2-2.5zM138.7 21a11.8 11.8 0 0 1-1.4-1.5 8.8 8.8 0 0 0 1.2-5c-.4-3-3.4-2.7-3.6.8a9.7 9.7 0 0 0 .4 3.6 13.4 13.4 0 0 1-10.7 4.5c-4.7-.1-9.4-1.8-11.8-5.8-.6-1-1.4-1-1.4 0 0 1.8 4.1 8.6 13 8.8 6.2.1 10-2.5 12-5.5.4.5 1 .9 1.4 1.2 1 .6 1.5-.5.9-1zm-2-7.5c.6 0 .8 1.8-.4 4l-.1-.2c-.5-1.6-.3-3.9.4-3.9zm-57.2 4.6c-.2 0-.3.1-.4.3-.8 2.3-1.9 3.7-2.8 3.7-.5 0-.7-.6-.7-1.5a44.6 44.6 0 0 1 2.2-10c0-.7-.4-1-1.3-1s-2 .3-2.9 2c-.3-1.5-1.4-2.1-2.8-2.1-1.7 0-3.3 1-4.6 2.8-1.3 1.7-2.9 2.3-4 2a13 13 0 0 0 1.1-4.7c0-1.8-.9-2.9-2.3-2.9-2.2 0-3.4 2-3.4 4.3 0 1.6.7 3.4 2.4 4.2-1.4 3.2-3.4 6-4.2 6-1 0-1.3-4.8-1.3-8.4 0-2 .2-2.1.2-2.7 0-.4-.2-.6-1.1-.6-2.1 0-2.8 1.8-3 3.9 0 .8 0 1.6-.3 2.3-.9 3.2-2.7 5.6-4 5.6-.5 0-.6-.5-.6-1.3 0-2.3 1.3-5.1 1.3-7.6 0-1.8-.8-3-2.3-3-1.7 0-4 2.2-6.3 6 .8-3 1-5.8-1-5.8a2.9 2.9 0 0 0-1.4.3.8.8 0 0 0-.4.8C35.8 13.9 33 22 30.4 22c-.5 0-.7-.5-.7-1.4a44.7 44.7 0 0 1 2.2-10c0-.7-.4-1-1.3-1s-2 .4-2.9 2c-.3-1.4-1.4-2-2.8-2-2.4 0-5 2.4-6.1 5.7-1.6 4.3-4.7 8.5-9 8.5-3.7 0-5.7-3.2-5.7-8.2C4 8.3 9.4 2.4 13.3 2.4c2 0 2.8 1.2 2.8 3 0 2.3-1.2 3.3-1.2 4.2 0 .2.2.5.6.5 1.7 0 3.7-2 3.7-4.8S17 .6 13.1.6C6.6.6 0 7 0 15.6c0 6.6 3.3 10.6 9 10.6 3.9 0 7.3-3 9.1-6.5.2 2.9 1.6 4.4 3.6 4.4 1.8 0 3.2-1 4.4-3 .4 2 1.5 3 3 3 1.7 0 3-1 4.4-3 0 1.5.4 3 1.7 3 .7 0 1.4-.2 1.6-.7 1.4-6 5-10.8 6-10.8.3 0 .4.3.4.7 0 1.6-1.1 4.9-1.1 7 0 2.3 1 3.8 3 3.8 2.2 0 4.4-2.7 6-6.7.4 3.7 1.4 6.7 3 6.7 2 0 5.4-4.1 7.5-8.5.8.1 2 .1 3.2-.7a11 11 0 0 0-.8 4c0 4 2 5.2 3.6 5.2 1.8 0 3.2-1 4.3-3 .4 1.7 1.3 3 3 3 2.8 0 5.1-2.8 5.1-5 0-.6-.2-1-.5-1zm-56.2 3.8c-1 0-1.5-1.1-1.5-2.7 0-2.9 2-7.6 4-7.6.9 0 1.2 1 1.2 2.3 0 2.9-1.8 8-3.7 8zm37.4-8.5a4.3 4.3 0 0 1-.9-2.8c0-1.1.5-2.1 1-2.1s.7.5.7 1.2c0 1.1-.5 2.8-.8 3.7zm8.5 8.5c-1 0-1.5-1.3-1.5-2.7 0-2.8 2-7.6 4-7.6 1 0 1.2 1 1.2 2.3 0 2.9-1.8 8-3.7 8z\"/></svg>";
                var pva = "<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19.808 31.921c0 .963.252 1.612.895 1.612 1.102 0 2.189-2.995 2.189-4.692 0-.762-.202-1.387-.729-1.387-1.211 0-2.355 2.797-2.355 4.467zm22.347-5.011c0 .55.139 1.172.521 1.629.172-.501.415-1.502.415-2.184 0-.408-.09-.701-.388-.701-.3 0-.548.574-.548 1.255zm4.603 5.011c0 .868.252 1.612.891 1.612 1.12 0 2.19-2.995 2.19-4.692 0-.77-.19-1.387-.717-1.387-1.221 0-2.364 2.853-2.364 4.467z\" fill=\"#fff\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M60 30c0 16.569-13.431 30-30 30C13.431 60 0 46.569 0 30 0 13.431 13.431 0 30 0c16.569 0 30 13.431 30 30zm-6.515 1.462c.035-.106.106-.16.186-.16.178 0 .329.217.329.569 0 1.333-1.38 2.956-2.968 2.956-1.016 0-1.567-.726-1.783-1.724-.655 1.108-1.51 1.736-2.568 1.736-.972 0-2.097-.66-2.097-3.024 0-.818.174-1.638.468-2.388-.694.492-1.42.507-1.9.445-1.228 2.547-3.258 4.95-4.4 4.95-.928 0-1.524-1.751-1.799-3.92-.88 2.323-2.198 3.91-3.495 3.91-1.17 0-1.736-.88-1.736-2.215 0-.658.189-1.514.365-2.313.154-.699.298-1.353.298-1.793 0-.216-.05-.394-.236-.394-.634 0-2.71 2.832-3.546 6.3-.08.33-.53.415-.907.415-.796 0-1.007-.864-.995-1.783-.79 1.17-1.62 1.801-2.615 1.801-.868 0-1.535-.569-1.787-1.727-.654 1.108-1.51 1.736-2.568 1.736-1.188 0-1.967-.895-2.088-2.616-1.078 2.077-3.075 3.851-5.359 3.851C8.937 36.074 7 33.708 7 29.783 7 24.85 10.85 21 14.675 21c2.316 0 3.623 1.182 3.623 2.793 0 1.612-1.182 2.794-2.19 2.794-.251 0-.376-.151-.376-.303 0-.19.106-.395.238-.65.212-.413.491-.954.491-1.764 0-1.08-.527-1.786-1.635-1.786-2.314 0-5.436 3.472-5.436 7.725 0 2.942 1.182 4.805 3.422 4.805 2.467 0 4.3-2.459 5.21-5.006.678-1.91 2.228-3.374 3.61-3.374.842 0 1.446.391 1.648 1.286.578-1.013 1.173-1.224 1.724-1.224.5 0 .72.184.72.54-.004.15-.031.299-.08.44-.403 1.307-1.206 4.157-1.206 5.501 0 .492.133.794.415.794 1.54 0 3.163-4.778 3.045-6.647a.44.44 0 0 1 .252-.426 1.71 1.71 0 0 1 .779-.202c1.25 0 1.078 1.698.654 3.448 1.286-2.287 2.645-3.51 3.67-3.51.874 0 1.336.667 1.336 1.724 0 .728-.194 1.522-.385 2.302-.185.756-.367 1.5-.367 2.162 0 .427.086.755.415.755.705 0 1.783-1.419 2.31-3.29a6.29 6.29 0 0 0 .216-1.37c.057-1.22.448-2.283 1.7-2.283.537 0 .673.142.673.347 0 .133-.014.225-.032.348-.03.21-.075.512-.086 1.263-.036 2.073.139 4.97.731 4.97.46 0 1.668-1.691 2.494-3.56-.989-.495-1.436-1.514-1.436-2.503 0-1.28.734-2.497 2.011-2.497.838 0 1.357.634 1.357 1.685 0 .67-.181 1.573-.676 2.779.688.166 1.597-.172 2.373-1.188.776-1.016 1.718-1.644 2.693-1.644.844 0 1.448.391 1.65 1.286.574-1.013 1.21-1.233 1.723-1.233.513 0 .72.187.72.566a1.417 1.417 0 0 1-.08.418c-.403 1.303-1.212 4.159-1.212 5.503 0 .54.125.883.433.883.536 0 1.188-.82 1.67-2.195z\" fill=\"#fff\"/></svg>";
                __c.PB = "<svg width=\"80\" height=\"30\" viewBox=\"0 0 80 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M79.444 18.096c-.136 0-.26.088-.324.272-.82 2.34-1.928 3.732-2.84 3.732-.524 0-.736-.584-.736-1.5 0-2.292 1.372-7.152 2.064-9.368.08-.268.132-.508.132-.712 0-.644-.352-.96-1.224-.96-.94 0-1.952.368-2.936 2.092-.34-1.52-1.368-2.184-2.804-2.184-1.66 0-3.264 1.068-4.584 2.8-1.32 1.732-2.872 2.3-4.04 2.02.84-2.056 1.152-3.592 1.152-4.732 0-1.788-.884-2.868-2.312-2.868-2.172 0-3.424 2.072-3.424 4.252 0 1.684.764 3.416 2.444 4.256-1.408 3.184-3.464 6.064-4.244 6.064-1.008 0-1.304-4.932-1.248-8.46.036-2.024.204-2.128.204-2.74 0-.352-.228-.592-1.144-.592-2.136 0-2.796 1.808-2.896 3.884a10.233 10.233 0 0 1-.368 2.332c-.892 3.184-2.732 5.6-3.932 5.6-.556 0-.708-.556-.708-1.284 0-2.292 1.284-5.156 1.284-7.6 0-1.796-.788-2.932-2.272-2.932-1.748 0-4.06 2.08-6.248 5.976.72-2.984 1.016-5.872-1.116-5.872A2.886 2.886 0 0 0 36 9.916a.752.752 0 0 0-.432.728c.204 3.176-2.56 11.312-5.18 11.312-.476 0-.708-.516-.708-1.348 0-2.296 1.368-7.144 2.056-9.364.088-.288.136-.536.136-.752 0-.608-.376-.92-1.228-.92-.936 0-1.952.356-2.932 2.08-.344-1.52-1.372-2.184-2.808-2.184-2.356 0-4.988 2.492-6.144 5.74-1.548 4.336-4.668 8.524-8.868 8.524-3.812 0-5.824-3.172-5.824-8.184C4.068 8.312 9.38 2.4 13.32 2.4c1.884 0 2.784 1.2 2.784 3.04 0 2.228-1.244 3.264-1.244 4.112 0 .26.216.516.644.516 1.712 0 3.728-2.012 3.728-4.756S17.004.56 13.064.56C6.552.56 0 7.112 0 15.508c0 6.68 3.296 10.708 8.996 10.708 3.888 0 7.284-3.024 9.116-6.552.208 2.924 1.536 4.452 3.56 4.452 1.8 0 3.256-1.072 4.368-2.956.428 1.972 1.564 2.936 3.04 2.936 1.692 0 3.108-1.072 4.456-3.064-.02 1.564.336 3.036 1.692 3.036.64 0 1.404-.148 1.54-.708 1.428-5.904 4.956-10.724 6.036-10.724.32 0 .408.308.408.672 0 1.604-1.132 4.892-1.132 6.992 0 2.268.964 3.768 2.956 3.768 2.208 0 4.452-2.704 5.948-6.656.468 3.692 1.48 6.672 3.064 6.672 1.944 0 5.396-4.092 7.488-8.424.82.104 2.052.076 3.236-.76-.504 1.276-.8 2.672-.8 4.068 0 4.02 1.92 5.148 3.572 5.148 1.796 0 3.252-1.072 4.368-2.956.368 1.7 1.308 2.932 3.036 2.932 2.704 0 5.052-2.764 5.052-5.032 0-.6-.256-.964-.556-.964zM23.32 21.888c-1.092 0-1.52-1.1-1.52-2.74 0-2.848 1.948-7.604 4.008-7.604.9 0 1.24 1.06 1.24 2.356 0 2.892-1.852 7.988-3.728 7.988zm37.404-8.5c-.652-.776-.888-1.832-.888-2.772 0-1.16.424-2.14.932-2.14s.664.5.664 1.196c0 1.164-.416 2.864-.708 3.716zm8.468 8.5c-1.092 0-1.52-1.264-1.52-2.74 0-2.748 1.948-7.604 4.024-7.604.9 0 1.22 1.052 1.22 2.356 0 2.892-1.82 7.988-3.724 7.988z\" fill=\"#fff\"/></svg>";
                __c.QB = (a) => () => uA("span", {
                    className: "_8aslVA",
                    dangerouslySetInnerHTML: {
                        __html: a
                    }
                });
                __c.qva = __c.QB(__c.PB);
                __c.rva = __c.QB(pva);
                __c.sva = __c.QB(__c.OB);
                var RB, NA, JA;
                yA = __c.yA = class {
                    constructor(a = 0, b = 0) {
                        this.x = a;
                        this.y = b
                    }
                    multiply(a, b) {
                        return "number" === typeof a ? new yA(this.x * a, this.y * (null != b ? b : a)) : new yA(this.x * a.x, this.y * a.y)
                    }
                    add(a, b = 0) {
                        return "number" === typeof a ? new yA(this.x + a, this.y + b) : new yA(this.x + a.x, this.y + a.y)
                    }
                    bM() {
                        return this.x * this.x + this.y * this.y
                    }
                    normalize() {
                        return this.multiply(1 / Math.sqrt(this.bM()))
                    }
                    toString() {
                        return `{ x: ${this.x}, y: ${this.y} }`
                    }
                    static bM(a, b) {
                        const c = a.x - b.x;
                        a = a.y - b.y;
                        return c * c + a * a
                    }
                    static get Iq() {
                        return new yA
                    }
                    static get one() {
                        return new yA(1, 1)
                    }
                };
                RB = class {
                    constructor(a = 0, b = 0, c = 0) {
                        this.x = a;
                        this.y = b;
                        this.z = c
                    }
                    multiply(a, b, c) {
                        return "number" === typeof a ? new RB(this.x * a, this.y * (null != b ? b : a), this.z * (null != c ? c : a)) : new RB(this.x * a.x, this.y * a.y, this.z * a.z)
                    }
                    add(a, b = 0, c = 0) {
                        return "number" === typeof a ? new RB(this.x + a, this.y + b, this.z + c) : new RB(this.x + a.x, this.y + a.y, this.z + a.z)
                    }
                    bM() {
                        return this.x * this.x + this.y * this.y + this.x * this.x
                    }
                    normalize() {
                        return this.multiply(1 / Math.sqrt(this.bM()))
                    }
                    toString() {
                        return `{ x: ${this.x}, y: ${this.y}, z: ${this.z} }`
                    }
                    static get Iq() {
                        return new RB
                    }
                    static get one() {
                        return new RB(1,
                            1, 1)
                    }
                };
                NA = class {
                    constructor(a = 0, b = 0) {
                        this.width = a;
                        this.height = b
                    }
                    scale(a) {
                        return new NA(this.width * a, this.height * a)
                    }
                    toString() {
                        return `{ width: ${this.width}, height: ${this.height} }`
                    }
                };
                JA = class {
                    constructor(a = 0, b = 0, c = 0, d = 0) {
                        this.x = a;
                        this.y = b;
                        this.width = c;
                        this.height = d
                    }
                    get position() {
                        return new yA(this.x, this.y)
                    }
                    get W0() {
                        return new NA(this.width, this.height)
                    }
                    toString() {
                        return `{ x: ${this.x}, y: ${this.y}, width: ${this.width}, height: ${this.height} }`
                    }
                };
                var Fua, Eua;
                FA = __c.FA = class {
                    constructor(a = 0, b = 0, c = 0, d = 0) {
                        this.r = a;
                        this.g = b;
                        this.b = c;
                        this.a = d
                    }
                    static Pia(a, b, c) {
                        return 0 >= c ? a : 1 <= c ? b : DA(a, b) ? a : new FA(zA(a.r, b.r, c), zA(a.g, b.g, c), zA(a.b, b.b, c), zA(a.a, b.a, c))
                    }
                };
                __c.SB = new FA(1, 1, 1, 0);
                __c.EA = new FA(1, 1, 1, 1);
                Fua = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/;
                Eua = /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([0-9]*\.?[0-9]+)\)$/;
                __c.TB = class {
                    constructor() {
                        var {
                            origin: a = new yA(0, 0),
                            viewport: b = new JA(0, 0, 1, 1),
                            clearColor: c = __c.SB,
                            clear: d = !1
                        } = {};
                        this.origin = new yA(0, 0);
                        this.viewport = new JA(0, 0, 1, 1);
                        this.clearColor = __c.SB;
                        this.clear = !1;
                        this.scale = new yA(0, 0);
                        this.position = new yA(0, 0);
                        this.Rk = new JA;
                        this.origin = a;
                        this.viewport = b;
                        this.clearColor = c;
                        this.clear = d
                    }
                    get yFa() {
                        return this.Rk
                    }
                    update(a) {
                        KA(this, a)
                    }
                };
                var Mua = (0, __c.lB)(function({
                    yta: a
                }) {
                    const [b, c] = (0, __c.oB)(() => uA(LA, {}));
                    (0, __c.pB)(() => {
                        c(MA(a));
                        const d = window.setInterval(() => {
                            c(MA(a))
                        }, 300);
                        return () => window.clearInterval(d)
                    }, [a]);
                    return uA("div", {
                        className: "bPNiCw",
                        children: uA("div", {
                            className: "hyEEhg",
                            children: b
                        })
                    })
                });
                var tva = window,
                    Kua = class {
                        constructor(a) {
                            var b = {
                                Sta: !0,
                                FCa: .33,
                                Sya: () => Date.now(),
                                window: tva
                            };
                            this.type = a;
                            this.nF = b;
                            this.Kj = [];
                            this.elements = [];
                            this.Oda = !1;
                            this.totalTime = 0;
                            this.ZK = [];
                            switch (this.type) {
                                case "2d":
                                    this.oua = new uva;
                                    break;
                                case "webgl":
                                    throw Error("Not implemented yet!");
                                default:
                                    throw new v(this.type);
                            }
                        }
                        get mode() {
                            return this.lR || "manual"
                        }
                        get Cx() {
                            return null != this.iY
                        }
                        get resolution() {
                            return this.Lj && new NA(this.Lj.canvas.width, this.Lj.canvas.height)
                        }
                        get Zwa() {
                            const a = Math.min(this.ZK.length,
                                    20),
                                b = 1 / a;
                            return this.ZK.slice(-a).reduce((c, d) => c + b / d, 0)
                        }
                        Ji(a) {
                            this.lR = a;
                            QA(this)
                        }
                        addElement(a) {
                            this.elements.push(a);
                            a.DH(this);
                            this.yJ()
                        }
                        yJ() {
                            this.Oda = this.elements.some((a) => a.active);
                            QA(this)
                        }
                        Q9(a) {
                            return null != this.lR && null != this.Lj && null != this.Ep && ("constant" === this.lR || "dynamic" === this.lR && (a || this.Oda))
                        }
                        update(a) {
                            PA(this, a, !1)
                        }
                        render() {
                            if (null != this.Lj && null != this.Ep) {
                                OA(this);
                                var a = this.Lj.canvas,
                                    b = this.Lj.container,
                                    c = new JA(0, 0, a.width, a.height),
                                    d = new JA(0, 0, b.offsetWidth, b.offsetHeight);
                                if (!(0 >= c.width * c.height)) {
                                    var e = a.getContext(this.type);
                                    a = this.oua;
                                    this.nF.Sta && a.clearCanvas(e, c);
                                    this.Kj.forEach((f) => {
                                        e.save();
                                        Gua(f, {
                                            Kh: e,
                                            Ep: c,
                                            Rk: d
                                        });
                                        const g = {
                                            Kh: e,
                                            D_: f,
                                            Ep: c,
                                            Rk: d
                                        };
                                        this.elements.forEach((h) => {
                                            e.save();
                                            h.render(g);
                                            e.restore()
                                        });
                                        e.restore()
                                    })
                                }
                            }
                        }
                    },
                    uva = class {
                        clearCanvas(a, b) {
                            a.clearRect(b.x, b.y, b.width, b.height)
                        }
                    };
                __c.UB = (0, __c.lB)((a) => uA(Nua, Object.assign({}, a, {
                    type: "2d"
                })));
                var vva = class {
                    constructor() {
                        this.i9 = !0
                    }
                    get active() {
                        return this.i9
                    }
                    setActive(a) {
                        var b;
                        this.i9 !== a && (this.i9 = a, null === (b = this.parent) || void 0 === b ? void 0 : b.yJ())
                    }
                    DH(a) {
                        var b;
                        __c.ja(a !== this.parent && (null == a || null == this.parent), "Cannot assign parent when a parent is already assigned.");
                        this.parent = a;
                        null === (b = this.parent) || void 0 === b ? void 0 : b.yJ()
                    }
                    yJ() {
                        throw Error("CanvasElement does not have children")
                    }
                };
                var wva = class extends vva {
                    constructor(a) {
                        super();
                        this.Uo = [];
                        this.Dw = [];
                        this.counter = 0;
                        this.tG = a.tG;
                        this.Vka = a.Vka || "stopNew";
                        this.Ela = a.Ela || {
                            random: () => Math.random()
                        };
                        this.setActive(!1)
                    }
                    stop(a) {
                        a = void 0 === a ? !1 : a;
                        this.Dw.splice(0, this.Dw.length);
                        a && this.Uo.splice(0, this.Uo.length);
                        this.setActive(a)
                    }
                    update(a) {
                        a = {
                            lr: a.lr,
                            Rk: a.Rk,
                            Kj: a.Kj,
                            random: () => this.Ela.random()
                        };
                        Oua(this, a);
                        Rua(this, a);
                        this.setActive(0 < this.Dw.length || 0 < this.Uo.length)
                    }
                    Ln(a, b) {
                        const c = a.TM,
                            d = a.module;
                        a = a.NB;
                        null === d || void 0 === d ?
                            void 0 : d.Ln(b, c, a)
                    }
                    yA(a, b) {
                        const c = a.TM,
                            d = a.module;
                        a = a.NB;
                        null === d || void 0 === d ? void 0 : d.yA(b, c, a)
                    }
                    emit(a, b, c, d) {
                        let e = Math.min(b, this.tG);
                        if (this.Uo.length + e > this.tG) {
                            var f = this.Uo.length + e - this.tG;
                            switch (this.Vka) {
                                case "removeOldest":
                                    this.Uo.splice(0, f);
                                    break;
                                case "stopNew":
                                    e = b - f;
                                    if (0 >= e) return;
                                    break;
                                default:
                                    return;
                            }
                        }
                        b = Object.assign({}, d, {
                            lr: 0
                        });
                        for (f = 0; f < e; f++) {
                            const g = Object.assign({}, {
                                    position: yA.Iq,
                                    pF: RB.Iq,
                                    scale: yA.one,
                                    color: __c.EA,
                                    Ll: 0,
                                    xD: 0,
                                    Md: yA.Iq
                                }, {
                                    id: ++this.counter,
                                    GSa: c.id
                                }, {
                                    KZ: !0
                                }),
                                h = c.module.Eg(Object.assign({}, d, {
                                    index: f,
                                    hJa: a,
                                    count: e
                                }), g);
                            c.module.Ln(b, g, h);
                            this.Uo.push({
                                TM: g,
                                NB: h,
                                module: c.module
                            })
                        }
                    }
                    render(a) {
                        const b = {
                            Kh: a.Kh,
                            Rk: a.Rk,
                            random: () => Math.random()
                        };
                        this.Uo.forEach((c) => this.$l(c, b))
                    }
                    $l(a, b) {
                        const c = a.TM,
                            d = a.module;
                        a = a.NB;
                        null != d.$l && (b.Kh.save(), d.$l(b, {
                            position: c.position,
                            pF: c.pF,
                            scale: c.scale,
                            color: c.color,
                            hW: !1
                        }, c, a), b.Kh.restore())
                    }
                };
                __c.VB = class extends wva {
                    constructor() {
                        super(...arguments);
                        this.$U = !1
                    }
                    get active() {
                        return this.$U
                    }
                    setActive(a) {
                        iB(() => this.$U = a);
                        super.setActive(a)
                    }
                };
                _dmr(__c.VB, "$U");
                __c.WB = class {
                    constructor(a) {
                        this.Cfa = a
                    }
                };
                __c.XB = class {
                    constructor(a) {
                        this.D = [...a]
                    }
                    Eg(a, b) {
                        return this.D.map((c) => c.Eg(a, b))
                    }
                    Ln(a, b, c) {
                        this.D.forEach((d, e) => {
                            var f;
                            null === (f = d.Ln) || void 0 === f ? void 0 : f.call(d, a, b, c[e])
                        })
                    }
                    $l(a, b, c, d) {
                        this.D.forEach((e, f) => {
                            var g;
                            null === (g = e.$l) || void 0 === g ? void 0 : g.call(e, a, b, c, d[f])
                        })
                    }
                    yA(a, b, c) {
                        this.D.forEach((d, e) => {
                            var f;
                            null === (f = d.yA) || void 0 === f ? void 0 : f.call(d, a, b, c[e])
                        })
                    }
                };
                __c.YB = class {
                    constructor(a) {
                        this.D = a
                    }
                    Eg(a, b) {
                        var c = this.D.Md;
                        const d = this.D.acceleration,
                            e = this.D.drag;
                        if (c) {
                            const f = VA(c.x, a);
                            c = VA(c.y, a);
                            b.Md = b.Md.add(f, c)
                        }
                        b = d && new yA(VA(d.x, a), VA(d.y, a));
                        return {
                            drag: e && VA(e, a),
                            acceleration: b
                        }
                    }
                    Ln(a, b, c) {
                        const d = c.acceleration ? c.acceleration.multiply(a.lr) : yA.Iq;
                        c = c.drag ? 1 - Math.min(1, c.drag * a.lr * .5) : 1;
                        b.Md = b.Md.multiply(c).add(d).multiply(c);
                        this.D.oJ && (b.position = b.position.add(b.Md.multiply(a.lr)))
                    }
                };
                __c.ZB = class {
                    constructor(a) {
                        this.D = a
                    }
                    Eg(a, b) {
                        a = VA(this.D, a);
                        b.xD += a
                    }
                    Ln(a, b) {
                        b.Ll += a.lr;
                        b.Ll >= b.xD && (b.KZ = !1)
                    }
                };
                __c.$B = class {
                    constructor(a) {
                        this.D = a
                    }
                    Eg() {}
                    $l(a, b, c) {
                        a = __c.UA(c.Ll / c.xD, this.D, __c.AA);
                        b.scale = b.scale.multiply(a);
                        return b
                    }
                };
                var YA = Math.PI / 180;
                __c.aC = class {
                    constructor(a) {
                        this.options = a
                    }
                    Ln(a, b, c) {
                        var d, e;
                        if (null == c.offset || "everyFrame" === this.options.rz) {
                            a: {
                                var f = this.options.Fy;
                                switch (f) {
                                    case "viewSpace":
                                        a = new yA(a.Rk.x + c.x.fixed + c.x.Be * a.Rk.width, a.Rk.y + c.y.fixed + c.y.Be * a.Rk.height);
                                        break a;
                                    case "camera":
                                        if (a.Kj[0]) {
                                            a = a.Kj[0].yFa;
                                            a = new yA(a.x + c.x.fixed + c.x.Be * a.width, a.y + c.y.fixed + c.y.Be * a.height);
                                            break a
                                        }
                                        a = new yA(c.x.fixed, c.y.fixed);
                                        break a;
                                    case "none":
                                        a = new yA(c.x.fixed, c.y.fixed);
                                        break a;
                                    default:
                                        throw new v(f);
                                }
                            }
                            b.position = new yA(b.position.x + a.x - ((null === (d = c.offset) || void 0 === d ? void 0 : d.x) || 0), b.position.y + a.y - ((null === (e = c.offset) || void 0 === e ? void 0 : e.y) || 0));c.offset = a
                        }
                    }
                };
                __c.xva = __webpack_require__.p + "images/33e64812f39de35b5eba538deda0dd69.png";
                __c.bC = class {
                    constructor(a) {
                        this.D = a
                    }
                    Eg(a) {
                        const [b, ...c] = this.D;
                        return {
                            psa: [Object.assign({}, b, {
                                value: VA(b.value, a)
                            }), ...c.map((d) => Object.assign({}, d, {
                                value: VA(d.value, a)
                            }))]
                        }
                    }
                    $l(a, b, c, d) {
                        c = __c.UA(c.Ll / c.xD, d.psa, zA);
                        a = b.color;
                        1 !== c && (c = new FA(a.r, a.g, a.b, a.a * c), c.dR = a.dR, a = c);
                        b.color = a;
                        return b
                    }
                };
                __c.cC = class {
                    constructor(a) {
                        this.D = a;
                        bB(this, this.D.Fe)
                    }
                    Eg(a, b) {
                        const c = this.D.type;
                        a = WA(this.D.Fe, a);
                        switch (c) {
                            case "override":
                                b.color = a;
                                break;
                            case "multiply":
                                b.color = __c.GA(b.color, a);
                                break;
                            default:
                                throw new v(c);
                        }
                        return a
                    }
                };
                __c.dC = class {
                    constructor(a) {
                        this.D = a
                    }
                    Eg(a, b) {
                        const c = this.D.Md,
                            d = this.D.AX,
                            e = VA(c.x || 0, a),
                            f = VA(c.y || 0, a),
                            g = VA(c.z || 0, a);
                        d && (b.pF = "boolean" === typeof d ? new RB(null != c.x ? 360 * a.random() : 0, null != c.y ? 360 * a.random() : 0, null != c.z ? 360 * a.random() : 0) : new RB(VA(d.x || 0, a), VA(d.y || 0, a), VA(d.z || 0, a)));
                        return {
                            Md: new RB(e, f, g)
                        }
                    }
                    Ln(a, b, c) {
                        b.pF = b.pF.add(c.Md.multiply(a.lr))
                    }
                };
                __c.eC = class {
                    constructor(a) {
                        this.D = a
                    }
                    Eg(a) {
                        return __c.XA(this.D, a)
                    }
                    $l(a, b, c, d) {
                        a = a.Kh;
                        __c.ZA(a, b);
                        a.globalAlpha *= b.color.a;
                        a.fillStyle = __c.IA(b.color);
                        a.fillRect(d.x, d.y, d.width, d.height);
                        b.hW = !0
                    }
                };
                __c.fC = class extends __c.aC {
                    constructor(a) {
                        super(a);
                        this.D = a
                    }
                    Eg(a, b) {
                        const {
                            offset: c,
                            LQa: d = {
                                min: 0,
                                max: 360
                            },
                            radius: e = 0,
                            Md: f = 0,
                            ita: g
                        } = this.D;
                        if ("burst" === a.hJa && null != g) {
                            const m = 1 / a.count;
                            var h = VA(d, {
                                random: () => BA((a.index + g.nva * a.random()) * m, 1)
                            }) * Math.PI * 2 / 360
                        } else h = VA(d, a) * Math.PI * 2 / 360;
                        var k = VA(e, a);
                        h = new yA(Math.sin(h), Math.cos(h));
                        k = h.multiply(k);
                        const l = VA(f, a);
                        b.Md = b.Md.add(h.multiply(l));
                        return {
                            x: __c.aB(c.x, k.x),
                            y: __c.aB(c.y, k.y),
                            offset: void 0
                        }
                    }
                };
                gC = __c.gC = class extends mB {
                    onResize(a) {
                        var {
                            offset: b
                        } = a;
                        a = b.width;
                        b = b.height;
                        null != a && null != b && (this.width = a, this.height = b)
                    }
                    fC(a) {
                        a && (this.width = a.offsetWidth, this.height = a.offsetHeight, this.forceUpdate())
                    }
                    get A4() {
                        if (null != this.width && null != this.height) return {
                            width: this.width,
                            height: this.height
                        }
                    }
                    get style() {
                        return {
                            display: "height" === this.props.Tfa ? "inline-block" : void 0,
                            height: "width" === this.props.Tfa ? void 0 : "100%",
                            width: "height" === this.props.Tfa ? void 0 : "100%"
                        }
                    }
                    render() {
                        const a = this.A4,
                            b = this.style;
                        return uA(Zua, {
                            offset: !0,
                            onResize: this.onResize,
                            innerRef: this.fC,
                            children: (c) => {
                                ({
                                    measureRef: c
                                } = c);
                                return uA("div", {
                                    ref: c,
                                    style: b,
                                    children: a && this.props.children(a)
                                })
                            }
                        })
                    }
                };
                __c.p = gC.prototype;
                _dmr(gC, "width");
                _dmr(gC, "height");
                _dmb(gC, "onResize", null);
                _dmb(gC, "fC", null);
                _dp([hB.struct], gC.prototype, "A4", null);
                _dp([hB.struct], gC.prototype, "style", null);
                gC = __c.gC = vB([tB], gC);
                var hC, iC, jC, kC;
                hC = {
                    fullscreenEnabled: "fullscreenEnabled",
                    fullscreenElement: "fullscreenElement",
                    requestFullscreen: "requestFullscreen",
                    exitFullscreen: "exitFullscreen",
                    aL: "fullscreenchange"
                };
                iC = {
                    fullscreenEnabled: "webkitFullscreenEnabled",
                    fullscreenElement: "webkitFullscreenElement",
                    requestFullscreen: "webkitRequestFullscreen",
                    exitFullscreen: "webkitExitFullscreen",
                    aL: "webkitfullscreenchange"
                };
                jC = {
                    fullscreenEnabled: "mozFullScreenEnabled",
                    fullscreenElement: "mozFullScreenElement",
                    requestFullscreen: "mozRequestFullScreen",
                    exitFullscreen: "mozCancelFullScreen",
                    aL: "mozfullscreenchange"
                };
                kC = {
                    fullscreenEnabled: "msFullscreenEnabled",
                    fullscreenElement: "msFullscreenElement",
                    requestFullscreen: "msRequestFullscreen",
                    exitFullscreen: "msExitFullscreen",
                    aL: "MSFullscreenChange"
                };
                __c.lC = class {
                    constructor(a) {
                        this.document = a;
                        this.vendor = hC.fullscreenEnabled in this.document && hC || iC.fullscreenEnabled in this.document && iC || jC.fullscreenEnabled in this.document && jC || kC.fullscreenEnabled in this.document && kC || hC
                    }
                    async requestFullscreen(a) {
                        return a[this.vendor.requestFullscreen]()
                    }
                    exitFullscreen() {
                        return this.document[this.vendor.exitFullscreen]()
                    }
                    addEventListener(a, b) {
                        this.document.addEventListener(this.vendor.aL, a, b)
                    }
                    removeEventListener(a) {
                        this.document.removeEventListener(this.vendor.aL,
                            a)
                    }
                    get fullscreenEnabled() {
                        return !!this.document[this.vendor.fullscreenEnabled]
                    }
                    get fullscreenElement() {
                        return this.document[this.vendor.fullscreenElement]
                    }
                };
                mC = __c.mC = class {
                    constructor(a) {
                        this.jh = a;
                        this.$g = !1;
                        this.BH = (b) => {
                            this.fullscreenElement = b
                        };
                        this.toggle = () => {
                            this.$g ? this.exit() : this.enter()
                        }
                    }
                    static create(a) {
                        return new mC(new __c.lC(a))
                    }
                    get active() {
                        return this.$g
                    }
                    get enabled() {
                        return this.jh.fullscreenEnabled
                    }
                    async enter() {
                        this.fullscreenElement && (this.jh.addEventListener(this.onChange, !1), await this.jh.requestFullscreen(this.fullscreenElement), iB(() => {
                            this.$g = !0
                        }))
                    }
                    async exit() {
                        null != this.jh.fullscreenElement && (await this.jh.exitFullscreen(),
                            this.jh.removeEventListener(this.onChange));
                        iB(() => {
                            this.$g = !1
                        })
                    }
                    onChange() {
                        this.$g = null != this.jh.fullscreenElement
                    }
                };
                __c.p = mC.prototype;
                _dmr(mC, "$g");
                _dmc(mC, "active");
                _dmb(mC, "enter", null);
                _dmb(mC, "exit", null);
                _dmb(mC, "onChange", null);
                __c.nC = class extends mB {
                    constructor() {
                        super(...arguments);
                        this.hja = nB()
                    }
                    componentDidMount() {
                        var a;
                        const b = __c.u(this.hja.current);
                        this.jf = ava().loadAnimation({
                            autoplay: __c.Gd.ma,
                            path: this.props.qG,
                            container: b,
                            renderer: "svg",
                            loop: null !== (a = this.props.loop) && void 0 !== a ? a : !1,
                            rendererSettings: this.props.rendererSettings
                        });
                        this.props.loop || this.jf.addEventListener("complete", () => {
                            var c, d;
                            null === (d = (c = this.props).HG) || void 0 === d ? void 0 : d.call(c)
                        })
                    }
                    render() {
                        return uA("div", {
                            className: "BmXofw",
                            ref: this.hja
                        })
                    }
                    componentWillUnmount() {
                        this.jf &&
                            this.jf.destroy()
                    }
                };
                __c.oC = E(() => ({}));
                __c.pC = E(() => ({}));
                var yva = __c.G(() => [1, 2]);
                __c.zva = E(() => ({
                    types: __c.La("types", 1, __c.Ej),
                    status: __c.La("status", 2, __c.Fj),
                    brand: I("brand", 3),
                    user: M("user", 11),
                    document: M("document", 4),
                    r0a: __c.Q("retrieveDocumentOwnedLicenses", 15),
                    ZBa: __c.pd("licenses", 5),
                    media: __c.pd("media", 6),
                    resources: __c.pd("resources", 13),
                    Xo: __c.Ka("resourceType", 14, __c.Dj),
                    a_a: __c.La("prerequisites", 16, __c.Gj),
                    R6a: __c.nd("validAt", 7),
                    RXa: __c.nd("minCreatedDate", 17),
                    fHa: __c.Ka("readConsistency", 18, yva),
                    Hb: M("continuation", 9),
                    limit: __c.jd("limit",
                        10, 100)
                }));
            }).call(self, self._cdf17aa01cb7a37fe84ed76fc113a158);
        }

    }
])
//# sourceMappingURL=sourcemaps/57fae7a671c9c5fa.js.map