(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [2623], {

        /***/
        35096: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(2868);
            __web_req__(39673);
            self._cdf17aa01cb7a37fe84ed76fc113a158 = self._cdf17aa01cb7a37fe84ed76fc113a158 || {};
            (function(__c) {
                "use strict";
                var Ay, Ey, Gy, Ry;
                var yta, uy, vy, wy, xy, yy, Ata, Dy, Cta, Hy, Dta;
                yta = function(a) {
                    let b = ["auto"];
                    for (const c of a) {
                        if (c.includes("none")) return ["none"];
                        c.includes("auto") || (b.includes("auto") && (b = c), b = b.filter((d) => c.includes(d)))
                    }
                    return 0 === b.length ? ["none"] : b
                };
                uy = function(a, b) {
                    return {
                        timestamp: Date.now(),
                        id: "mouse",
                        button: a.button,
                        target: a.target,
                        currentTarget: b,
                        x: a.clientX,
                        y: a.clientY,
                        Yy: a,
                        pointerType: "mouse"
                    }
                };
                vy = function(a, b) {
                    return {
                        timestamp: Date.now(),
                        id: `touch_${b.identifier}`,
                        target: b.target,
                        currentTarget: a.currentTarget,
                        x: b.clientX,
                        y: b.clientY,
                        Yy: a,
                        pointerType: "touch"
                    }
                };
                wy = function(a, b) {
                    return (c) => {
                        a: {
                            var d;
                            if (null === (d = c.Yy.sourceCapabilities) || void 0 === d ? 0 : d.firesTouchEvents) var e = !0;
                            else {
                                for (e of a.n8)
                                    if (d = Math.abs(c.y - e.y), 25 >= Math.abs(c.x - e.x) && 25 >= d) {
                                        e = !0;
                                        break a
                                    }
                                e = void 0
                            }
                        }
                        e || b(c)
                    }
                };
                xy = function(a, b) {
                    return (c) => {
                        a.n8.add(c);
                        setTimeout(() => a.n8.delete(c), 2500);
                        b(c)
                    }
                };
                yy = function(a, b, c) {
                    a = a.has("pinch-zoom") || a.has("auto");
                    2 <= c.size && !a && b.Yy.preventDefault()
                };
                __c.zy = function(a, b = a) {
                    return {
                        target: a.target,
                        currentTarget: a.currentTarget,
                        Q_: b.x,
                        Lda: b.y,
                        altKey: a.Yy.altKey,
                        ctrlKey: a.Yy.ctrlKey,
                        metaKey: a.Yy.metaKey,
                        shiftKey: a.Yy.shiftKey,
                        pointerType: a.pointerType
                    }
                };
                Ay = __c.Ay = function(a, b, c) {
                    return Object.fromEntries(Object.entries("string" === typeof b || "number" === typeof b || "boolean" === typeof b ? {
                        default: b
                    } : b).map(([d, e]) => [a[d], c ? c(e) : e]))
                };
                Ata = function(a, b) {
                    return By.map(a, (c) => c ? Cy(c) && c.type === zta ? By.map(c.props.children, (d) => Dy(d, b)) : Dy(c, b) : null)
                };
                Dy = function(a, b) {
                    return "li" === b && Cy(a) && "li" === a.type ? Bta(a, {
                        className: Ey(a.props.className, "r7sYbA")
                    }) : Fy(b, {
                        className: "r7sYbA"
                    }, a)
                };
                __c.So.prototype.Ug = __c.ol(15, function(a, b) {
                    const c = this.dh;
                    for (a = __c.Km(this, a) - 1; 0 <= a; a--) {
                        const d = c[a];
                        if (d && (!b || b(d.value))) return d.value
                    }
                });
                __c.To.prototype.Ug = __c.ol(14, function(a, b) {
                    __c.t(this.has(a));
                    const c = this.predicate;
                    return this.base.Ug(a, (d) => c(d) && (!b || b(d)))
                });
                Cta = {
                    gridBaseline: "8px",
                    noneSpace: "0",
                    xxxsmallSpace: "4px",
                    xxsmallSpace: "8px",
                    xsmallSpace: "12px",
                    smallSpace: "16px",
                    mediumSpace: "24px",
                    largeSpace: "32px",
                    xlargeSpace: "48px",
                    xxlargeSpace: "64px",
                    xxxlargeSpace: "96px",
                    smallBreakpoint: "600px",
                    mediumBreakpoint: "900px",
                    largeBreakpoint: "1200px",
                    defaultDown: "(max-width: 599px)",
                    smallUp: "(min-width: 600px)",
                    smallDown: "(max-width: 899px)",
                    mediumUp: "(min-width: 900px)",
                    mediumDown: "(max-width: 1199px)",
                    largeUp: "(min-width: 1200px)",
                    borderRadius: "4px",
                    textBold: "600",
                    touchRadius: "20px"
                };
                Gy = __c.Gy = (a) => Cta[`${a}Space`];
                Hy = __webpack_require__(85893);
                __c.Iy = Hy.jsx;
                Dta = Hy.jsxs;
                var Jy, Eta;
                Jy = __webpack_require__;
                Eta = Jy(94184);
                Ey = __c.Ey = Jy.n_x(Eta)();
                var Ky = __webpack_require__(67294),
                    Fta = Ky.PureComponent,
                    Ly = Ky.forwardRef,
                    Fy = Ky.createElement,
                    By = Ky.Children,
                    Cy = Ky.isValidElement,
                    zta = Ky.Fragment,
                    Bta = Ky.cloneElement;
                __c.Gta = (0, Ky.memo)(({
                    id: a,
                    text: b,
                    children: c,
                    theme: d
                }) => Dta("div", {
                    className: Ey("LNeUZQ", {
                        "GD-iEA": "dark" === d
                    }),
                    id: a,
                    children: [(0, __c.Iy)("span", {
                        className: "nMpC2A _5NHXTA",
                        children: b
                    }), c]
                }));
                var Hta = class {
                    constructor(a, b, c, d) {
                        this.element = a;
                        this.onPointerDown = b;
                        this.onPointerMove = c;
                        this.onPointerUp = d;
                        this.type = "mouse";
                        this.onMouseDown = (e) => {
                            const f = this.element.ownerDocument;
                            f.addEventListener("mousemove", this.onMouseMove, {
                                capture: !0
                            });
                            f.addEventListener("mouseup", this.onMouseUp, {
                                capture: !0
                            });
                            this.onPointerDown(uy(e, this.element))
                        };
                        this.onMouseMove = (e) => {
                            this.onPointerMove(uy(e, this.element))
                        };
                        this.onMouseUp = (e) => {
                            this.stop();
                            this.onPointerUp(uy(e, this.element))
                        };
                        a.addEventListener("mousedown",
                            this.onMouseDown)
                    }
                    disconnect() {
                        this.element.removeEventListener("mousedown", this.onMouseDown);
                        this.stop()
                    }
                    stop() {
                        const a = this.element.ownerDocument;
                        a.removeEventListener("mousemove", this.onMouseMove, {
                            capture: !0
                        });
                        a.removeEventListener("mouseup", this.onMouseUp, {
                            capture: !0
                        })
                    }
                };
                var Jta = class {
                        constructor(a, b, c, d, e) {
                            this.element = a;
                            this.onPointerDown = b;
                            this.onPointerMove = c;
                            this.onPointerUp = d;
                            this.onPointerCancel = e;
                            this.$O = new Set;
                            this.onTouchStart = (f) => {
                                for (let g = 0; g < f.changedTouches.length; ++g) {
                                    const h = f.changedTouches[g],
                                        k = new Ita(h.identifier, h.target, this.onPointerMove, (l) => {
                                            this.$O.delete(k);
                                            this.onPointerUp(l)
                                        }, (l) => {
                                            this.$O.delete(k);
                                            this.onPointerCancel(l)
                                        });
                                    this.$O.add(k);
                                    this.onPointerDown(vy(f, h))
                                }
                            };
                            a.addEventListener("touchstart", this.onTouchStart)
                        }
                        disconnect() {
                            this.element.removeEventListener("touchstart",
                                this.onTouchStart);
                            for (const a of this.$O) a.disconnect();
                            this.$O.clear()
                        }
                    },
                    Ita = class {
                        constructor(a, b, c, d, e) {
                            this.identifier = a;
                            this.target = b;
                            this.onPointerMove = c;
                            this.onPointerUp = d;
                            this.onPointerCancel = e;
                            this.onTouchMove = (f) => {
                                const g = this.DF(f);
                                if (g) this.onPointerMove(vy(f, g))
                            };
                            this.onTouchEnd = (f) => {
                                const g = this.DF(f);
                                g && (this.disconnect(), this.onPointerUp(vy(f, g)))
                            };
                            this.onTouchCancel = (f) => {
                                const g = this.DF(f);
                                g && (this.disconnect(), this.onPointerCancel(vy(f, g)))
                            };
                            b.addEventListener("touchmove", this.onTouchMove);
                            b.addEventListener("touchend", this.onTouchEnd);
                            b.addEventListener("touchcancel", this.onTouchCancel)
                        }
                        disconnect() {
                            this.target.removeEventListener("touchmove", this.onTouchMove);
                            this.target.removeEventListener("touchend", this.onTouchEnd);
                            this.target.removeEventListener("touchcancel", this.onTouchEnd)
                        }
                        DF(a) {
                            for (const b of a.changedTouches)
                                if (b.identifier === this.identifier) return b
                        }
                    };
                var Kta = class {
                    constructor(a, b, c, d, e) {
                        this.n8 = new Set;
                        this.gDa = new Hta(a, wy(this, b), wy(this, c), wy(this, d));
                        this.GKa = new Jta(a, xy(this, b), xy(this, c), xy(this, d), xy(this, e))
                    }
                    disconnect() {
                        this.gDa.disconnect();
                        this.GKa.disconnect()
                    }
                };
                __c.My = class {
                    constructor(a, b, c) {
                        this.h8 = b;
                        this.eR = c;
                        this.element = null;
                        this.Vk = new Map;
                        this.MR = new Set;
                        this.rM = 0;
                        this.actions = new Set;
                        this.Vra = (d) => {
                            var e, f;
                            if (this.element) {
                                this.eN();
                                for (const g of this.Vf) null === (e = g.P6) || void 0 === e ? void 0 : e.call(g, this.Vk);
                                this.element.style.touchAction = ""
                            }
                            null === (f = this.Gn) || void 0 === f ? void 0 : f.disconnect();
                            this.Gn = void 0;
                            if (this.element = d) this.Gn = new Kta(this.element, this.onPointerDown, this.onPointerMove, this.onPointerUp, this.onPointerCancel), d = yta(this.Vf.map((g) =>
                                g.US())), this.element.classList.add("_682gpw"), this.element.style.touchAction = d.join(" "), this.actions = new Set(d)
                        };
                        this.onPointerDown = (d) => {
                            const e = {
                                start: d,
                                Ug: d,
                                current: d
                            };
                            this.Vk.set(d.id, e);
                            yy(this.actions, d, this.Vk);
                            this.eN();
                            for (const f of this.Vf) f.onPointerDown(e, this.Vk)
                        };
                        this.onPointerMove = (d) => {
                            var e;
                            const f = this.Vk.get(d.id);
                            f && (f.current = d, yy(this.actions, d, this.Vk), this.MR.add(d.id), this.rM = this.rM || (null === (e = this.h8) || void 0 === e ? void 0 : e.call(this, this.eN)) || requestAnimationFrame(this.eN))
                        };
                        this.onPointerUp = (d) => {
                            this.mka(d, "up")
                        };
                        this.onPointerCancel = (d) => {
                            this.mka(d, "cancel")
                        };
                        this.mka = (d, e) => {
                            const f = this.Vk.get(d.id);
                            if (f) {
                                this.eN();
                                f.current = d;
                                yy(this.actions, d, this.Vk);
                                this.Vk.delete(d.id);
                                for (const g of this.Vf) switch (e) {
                                    case "up":
                                        g.onPointerUp(f, this.Vk);
                                        break;
                                    case "cancel":
                                        g.onPointerCancel ? g.onPointerCancel(f, this.Vk) : g.onPointerUp(f, this.Vk);
                                }
                            }
                        };
                        this.eN = () => {
                            var d;
                            if (this.rM) {
                                var {
                                    eR: e = window.cancelAnimationFrame
                                } = this;
                                e(this.rM)
                            }
                            this.rM = 0;
                            if (this.MR.size) {
                                e = Array.from(this.MR,
                                    (f) => this.Vk.get(f)).filter(__c.pl);
                                this.MR.clear();
                                for (const f of this.Vf) null === (d = f.onPointerMove) || void 0 === d ? void 0 : d.call(f, e, this.Vk);
                                for (const f of e) f.Ug = f.current
                            }
                        };
                        this.Vf = a.slice();
                        this.nq = this.Vf.length ? this.Vra : void 0
                    }
                };
                __c.Ny = class extends Fta {
                    constructor() {
                        super(...arguments);
                        this.inner = new __c.My(this.props.Vf, this.props.h8, this.props.eR);
                        this.Qp = (a) => {
                            var b, c;
                            null === (c = (b = this.inner).nq) || void 0 === c ? void 0 : c.call(b, a)
                        }
                    }
                    render() {
                        return this.props.children({
                            Qp: this.Qp
                        })
                    }
                    componentDidUpdate(a) {
                        __c.t(a.Vf === this.props.Vf, "Recognizers can not change after initial render.")
                    }
                };
                var Lta = "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.06 5.94a1.5 1.5 0 0 1 0 2.12l-6.878 6.88a1.5 1.5 0 0 0 0 2.12l6.879 6.88a1.5 1.5 0 0 1-2.122 2.12l-6.878-6.878a4.5 4.5 0 0 1 0-6.364l6.878-6.879a1.5 1.5 0 0 1 2.122 0Z\" fill=\"currentColor\"/></svg>";
                var Mta = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M9.53 11.71 5.99 8.18a.25.25 0 0 1 0-.36L9.53 4.3a.75.75 0 1 0-1.06-1.06L4.93 6.76c-.68.69-.68 1.8 0 2.48l3.54 3.53a.75.75 0 0 0 1.06-1.06z\"/></svg>";
                var Nta = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\"><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"1.25\" d=\"M7 3.17 4.88 5.3a1 1 0 0 0 0 1.42L7 8.83\"/></svg>";
                var Ota = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M15.45 17.97 9.5 12.01a.25.25 0 0 1 0-.36l5.87-5.87a.75.75 0 0 0-1.06-1.06l-5.87 5.87c-.69.68-.69 1.8 0 2.48l5.96 5.96a.75.75 0 0 0 1.06-1.06z\"/></svg>";
                __c.Oy = __c.gw({
                    En: Nta,
                    small: Mta,
                    medium: Ota,
                    vc: Lta
                }, !0);
                var Pta = "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.94 26.06a1.5 1.5 0 0 1 0-2.12l6.878-6.88a1.5 1.5 0 0 0 0-2.12l-6.879-6.88a1.5 1.5 0 1 1 2.122-2.12l6.878 6.878a4.5 4.5 0 0 1 0 6.364l-6.878 6.879a1.5 1.5 0 0 1-2.122 0Z\" fill=\"currentColor\"/></svg>";
                var Qta = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z\"/></svg>";
                var Rta = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\"><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"1.25\" d=\"M5 8.83 7.12 6.7a1 1 0 0 0 0-1.42L5 3.17\"/></svg>";
                var Sta = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"m8.55 5.78 5.96 5.97c.1.1.1.25 0 .35l-5.87 5.87a.75.75 0 0 0 1.06 1.06l5.87-5.87c.69-.68.69-1.79 0-2.47L9.61 4.72a.75.75 0 0 0-1.06 1.06z\"/></svg>";
                __c.Py = __c.gw({
                    En: Rta,
                    small: Qta,
                    medium: Sta,
                    vc: Pta
                }, !0);
                var Tta = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"m5.72 12.53-3.26-3.3c-.7-.72.36-1.77 1.06-1.06l2.73 2.77 6.35-6.35a.75.75 0 0 1 1.06 1.06l-6.88 6.88a.78.78 0 0 1-.5.23.83.83 0 0 1-.56-.23z\"/></svg>";
                var Uta = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M4.53 11.9 9 16.38 19.44 5.97a.75.75 0 0 1 1.06 1.06L9.53 17.97c-.3.29-.77.29-1.06 0l-5-5c-.7-.71.35-1.77 1.06-1.07z\"/></svg>";
                __c.Qy = __c.gw({
                    small: Tta,
                    medium: Uta
                });
                Ry = __c.Ry = (a) => ({
                    role: a.role,
                    id: a.id,
                    "aria-label": a.ariaLabel,
                    "aria-labelledby": a.Na,
                    "aria-describedby": a.Pe,
                    "aria-expanded": a.ariaExpanded,
                    "aria-disabled": a.ariaDisabled,
                    "aria-selected": a.ariaSelected,
                    "aria-activedescendant": a.Ap,
                    "aria-multiselectable": a.ariaMultiSelectable
                });
                var Wta, Xta, Yta, Zta, $ta;
                __c.Sy = Ly((a, b) => {
                    var {
                        width: c,
                        children: d,
                        tagName: e = "div",
                        role: f
                    } = a;
                    return Fy(e, {
                        className: Ey("yYw_FA", c ? Vta[c] : "VgLiiA"),
                        children: d,
                        role: f,
                        ref: b
                    })
                });
                __c.Sy.displayName = "Column";
                Wta = {
                    default: "--75cQpg",
                    vg: "--4ghcgw",
                    rh: "--Dt4gzQ",
                    ph: "--zkf92g"
                };
                Xta = {
                    default: "--O2ZAJA",
                    vg: "--bnwfcQ",
                    rh: "--UrGl2A",
                    ph: "--BFG-fg"
                };
                Yta = {
                    default: "--lTA5VA",
                    vg: "--HGHj3Q",
                    rh: "--xpVLyg",
                    ph: "--Ge58dw"
                };
                Zta = (a) => {
                    switch (a) {
                        case "start":
                            return "flex-start";
                        case "center":
                            return "center";
                        case "end":
                            return "flex-end";
                        case "spaceBetween":
                            return "space-between";
                        default:
                            throw new __c.v(a);
                    }
                };
                $ta = (a) => "start" === a || "end" === a ? `flex-${a}` : a;
                __c.Ty = Ly((a, b) => {
                    var c = Object.assign({}, a),
                        d = a.children,
                        e = a.spacing,
                        f = a.align,
                        g = a.lE,
                        h = void 0 === a.tagName ? "div" : a.tagName,
                        k = a.reversed,
                        l = a.EJ;
                    a = a.collapsed;
                    c = (delete c.children, delete c.spacing, delete c.align, delete c.lE, delete c.tagName, delete c.reversed, delete c.EJ, delete c.collapsed, c);
                    return Fy(h, Object.assign({}, {
                        className: Ey("JyB_vw", k && (a || l) && "iOQN1A", l && aua[l], a && "puSleg"),
                        style: Object.assign({}, e && Ay(Wta, e, Gy), f && Ay(Xta, f, Zta), g && Ay(Yta, g, $ta)),
                        children: !k || a || l ?
                            d : By.toArray(d).reverse(),
                        ref: b
                    }, Ry(c)))
                });
                __c.Ty.displayName = "Columns";
                var aua = {
                        small: "_1Cc5_A",
                        medium: "HwJ50w",
                        vc: "hTnQ1g"
                    },
                    Vta = {
                        content: "Zxv8Qg",
                        "1/2": "LDT63w",
                        "1/3": "mPgCSQ",
                        "2/3": "Qjx7bA",
                        "1/4": "AbPZ4Q",
                        "3/4": "YWYl0g",
                        "1/5": "_0u5N-g",
                        "2/5": "g1FRrg",
                        "3/5": "qIs8zw",
                        "4/5": "Vjjmgg"
                    };
                var bua = {
                    gridBaseline: "8px",
                    container: "J0BMlA",
                    medium: "_8P-pCw",
                    large: "zpMpeQ"
                };
                Ly((a, b) => {
                    var c = Object.assign({}, a),
                        d = a.children,
                        e = a.width;
                    a = void 0 === a.tagName ? "div" : a.tagName;
                    c = (delete c.children, delete c.width, delete c.tagName, c);
                    return Fy(a, Object.assign({}, {
                        className: Ey("J0BMlA", bua[e]),
                        children: d,
                        ref: b
                    }, Ry(c)))
                }).displayName = "Container";
                var cua = {
                        default: "--CyPAHw",
                        vg: "--vBysyw",
                        rh: "--Q_Ypgg",
                        ph: "--J3Gxbw"
                    },
                    dua = {
                        default: "--uO6qOA",
                        vg: "--HMnpqA",
                        rh: "--hp4Wmg",
                        ph: "--1eZRQw"
                    },
                    eua = {
                        default: "--PL0egg",
                        vg: "--cZjJug",
                        rh: "--BZKKEA",
                        ph: "--5erHCQ"
                    },
                    fua = {
                        default: "--lBE9wA",
                        vg: "--uK7KPg",
                        rh: "--9qFopA",
                        ph: "--Keo8WA"
                    };
                Ly((a, b) => {
                    var c = Object.assign({}, a),
                        d = a.children,
                        e = a.spacing,
                        f = a.fJa,
                        g = a.gJa,
                        h = a.columns;
                    a = void 0 === a.tagName ? "div" : a.tagName;
                    c = (delete c.children, delete c.spacing, delete c.fJa, delete c.gJa, delete c.columns, delete c.tagName, c);
                    return Fy(a, Object.assign({}, {
                        className: Ey("Ey7S7w"),
                        style: Object.assign({}, e && Ay(cua, e, Gy), f && Ay(dua, f, Gy), g && Ay(eua, g, Gy), h && Ay(fua, h)),
                        children: d,
                        ref: b
                    }, Ry(c)))
                }).displayName = "Grid";
                var gua, hua, iua, jua, kua;
                gua = {
                    default: "--gx58Mg",
                    vg: "--ZjxV6Q",
                    rh: "--pxHDKg",
                    ph: "--pA2fxQ"
                };
                hua = {
                    default: "--fiFOWA",
                    vg: "--HacuPw",
                    rh: "--dpzVKQ",
                    ph: "--KEBArQ"
                };
                iua = {
                    default: "--MgpMsA",
                    vg: "--DPDPEQ",
                    rh: "--pWmzUg",
                    ph: "--hKmTzg"
                };
                jua = (a) => "spaceBetween" !== a ? a : "space-between";
                kua = (a) => "start" === a || "end" === a ? `flex-${a}` : a;
                __c.Uy = Ly((a, b) => {
                    var c = Object.assign({}, a),
                        d = a.children,
                        e = a.spacing,
                        f = a.align,
                        g = a.lE,
                        h = a.EJ,
                        k = a.collapsed;
                    a = void 0 === a.tagName ? "div" : a.tagName;
                    c = (delete c.children, delete c.spacing, delete c.align, delete c.lE, delete c.EJ, delete c.collapsed, delete c.tagName, c);
                    const l = "ul" === a || "ol" === a ? "li" : "span";
                    return Fy("span" === a ? "span" : "div", {
                        className: "k3zO6A",
                        ref: b
                    }, Fy(a, Object.assign({}, {
                        className: Ey("YTRpDQ", h && lua[h], k && "zNjj3w"),
                        children: Ata(d, l),
                        style: Object.assign({}, e && Ay(gua, e, Gy),
                            f && Ay(hua, f, jua), g && Ay(iua, g, kua))
                    }, Ry(c))))
                });
                __c.Uy.displayName = "Inline";
                var lua = {
                    small: "uL7Tkw",
                    medium: "eQVXow",
                    vc: "PxCQMw"
                };
                var mua, nua;
                mua = {
                    default: "--zX6m4Q",
                    vg: "--J1XsiA",
                    rh: "--t5aQ1A",
                    ph: "--UsUcKw"
                };
                nua = {
                    default: "--8fDECA",
                    vg: "--7a0kOg",
                    rh: "--RF2POA",
                    ph: "--DfH7SA"
                };
                __c.Vy = Ly(function(a, b) {
                    var c = Object.assign({}, a),
                        d = a.children,
                        e = a.spacing,
                        f = a.align;
                    a = void 0 === a.tagName ? "div" : a.tagName;
                    c = (delete c.children, delete c.spacing, delete c.align, delete c.tagName, c);
                    return Fy(a, Object.assign({}, {
                        className: Ey("x6XCCg"),
                        style: Object.assign({}, e && Ay(mua, e, Gy), f && Ay(nua, f)),
                        children: d,
                        ref: b
                    }, Ry(c)))
                });
                __c.Vy.displayName = "Rows";
            }).call(self, self._cdf17aa01cb7a37fe84ed76fc113a158);
        }

    }
])
//# sourceMappingURL=sourcemaps/45a21faef897821c.js.map