(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [7351], {

        /***/
        9344: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(2868);
            __web_req__(35096);
            __web_req__(39673);
            self._cdf17aa01cb7a37fe84ed76fc113a158 = self._cdf17aa01cb7a37fe84ed76fc113a158 || {};
            (function(__c) {
                "use strict";
                var gN, Ay = __c.Ay,
                    Gy = __c.Gy,
                    VN;
                var FCa, SM, JCa, aN, bN, cN, KCa, LCa, dN, MCa, hN, iN, nN, RCa, SCa, TCa, qN, sN;
                FCa = function({
                    Ae: a,
                    children: b
                }) {
                    return (0, __c.Sc)(__c.ee.Provider, {
                        value: {
                            Ae: a
                        },
                        children: b
                    })
                };
                __c.RM = function() {
                    var a = void 0 === a ? __c.ew : a;
                    return !a.userAgent.match(/CriOS/ig)
                };
                SM = function(a, b, c) {
                    const d = c.x - b.x,
                        e = c.y - b.y,
                        f = c.x - b.x,
                        g = c.y - b.y,
                        h = c.timestamp - b.timestamp;
                    return Object.assign({}, __c.zy(a, c), {
                        velocityX: f / h,
                        velocityY: g / h,
                        Md: Math.sqrt(f ** 2 + g ** 2) / h,
                        $Ra: d,
                        d1: e,
                        b1: Math.sqrt(d ** 2 + e ** 2),
                        direction: f === g ? "none" : Math.abs(f) >= Math.abs(g) ? 0 > f ? "left" : "right" : 0 > g ? "up" : "down",
                        button: b.button
                    })
                };
                __c.VM = function(a, {
                    kh: b
                }) {
                    const [c, d] = TM(null);
                    UM(() => {
                        if (c) {
                            var e = new __c.ce(c, {
                                xT: !b
                            });
                            a.forEach(([f, g, h]) => {
                                f = __c.Db(f);
                                f.Gha = null === h || void 0 === h ? void 0 : h.Gha;
                                "function" === typeof g ? e.addListener("keydown", f, g) : (g.NBa && e.addListener("keydown", f, g.NBa), g.Kl && e.addListener("keyup", f, g.Kl), g.OBa && e.addListener("keypress", f, g.OBa))
                            });
                            return () => {
                                e.reset()
                            }
                        }
                    }, [b, a, c]);
                    return {
                        ref: d
                    }
                };
                __c.WM = function(a) {
                    return Array.from(a.querySelectorAll("button:enabled,select:enabled,textarea:enabled,input:enabled,a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable],[autofocus]")).filter(GCa).filter(HCa)
                };
                JCa = function({
                    Xd: a,
                    disabled: b
                }) {
                    const c = XM(YM),
                        d = ICa(() => new ZM(c));
                    $M(() => {
                        d.M9(a);
                        if (b) d.UW();
                        else return c.CZ(d, a), d.UW(), () => {
                            c.r8(d, a)
                        }
                    }, [a, b, d, c]);
                    return {
                        zCa: d
                    }
                };
                aN = function(a) {
                    return "hasAttribute" in a ? a.hasAttribute("data-focus-lock-excepted") : !1
                };
                bN = function(a) {
                    a.preventDefault()
                };
                cN = function(a, b) {
                    if (null != b) {
                        var {
                            props: {
                                NA: c
                            },
                            fm: d
                        } = b;
                        return c ? a.Vf : null === d || void 0 === d ? void 0 : d.Vf
                    }
                };
                KCa = function(a) {
                    var b = a.props.zd;
                    const c = b.current,
                        d = b.from;
                    b = b.ma;
                    const e = c && !cN(a, c) ? a.N9 : void 0,
                        f = e && e.style.backgroundColor,
                        g = dN(a);
                    a.Naa = g;
                    var h = a.Laa - a.Dma;
                    h = a.DU ? `${Math.min(h,a.DU)}px` : h;
                    const k = 0 < g;
                    a = eN(null === e || void 0 === e ? void 0 : e.className, null === c || void 0 === c ? void 0 : c.F$, {
                        I4lX8Q: (null === c || void 0 === c ? void 0 : c.XZ) && !(null === c || void 0 === c ? 0 : c.props.VN),
                        Zj6Pqg: null === c || void 0 === c ? void 0 : c.props.VN,
                        vHVgfg: !b,
                        S_i1pg: !a.V0 && k,
                        zkaqtg: !a.V0 && !k
                    });
                    switch (d) {
                        case "top":
                            return {
                                style: {
                                    transform: `translateY(${g}px)`,
                                    backgroundColor: f
                                },
                                className: eN("KNWKWQ nEJRyA", a)
                            };
                        case "bottom":
                            return {
                                style: !b && (null === c || void 0 === c ? 0 : c.jg) ? {
                                    top: 0,
                                    backgroundColor: f
                                } : {
                                    transform: `translateY(-${g}px)`,
                                    backgroundColor: f,
                                    maxHeight: h
                                },
                                className: eN("v8cOJw nEJRyA", a)
                            };
                        case "left":
                            return {
                                style: {
                                    transform: `translateX(${g}px)`,
                                    backgroundColor: f
                                },
                                className: eN("lQ45vw nEJRyA", a)
                            };
                        case "right":
                            return {
                                style: {
                                    transform: `translateX(-${g}px)`,
                                    backgroundColor: f
                                },
                                className: eN("lM02mw nEJRyA", a)
                            };
                        default:
                            throw new __c.v(d);
                    }
                };
                LCa = function(a) {
                    const b = a.props.zd.from,
                        c = dN(a);
                    return a.props.zd.LL ? {
                        width: `calc(100% - ${c}px)`,
                        top: 0,
                        bottom: 0,
                        left: "left" === b ? void 0 : 0,
                        right: "right" === b ? void 0 : 0
                    } : {
                        height: `calc(100% - ${c}px)`,
                        left: 0,
                        right: 0,
                        top: "top" === b ? void 0 : 0,
                        bottom: "bottom" === b ? void 0 : 0
                    }
                };
                dN = function(a) {
                    var b, c = a.props.zd;
                    if (!c.current || !c.current.show) return 0;
                    const d = a.n5;
                    if (0 >= d) return 0;
                    const e = c.LL ? a.Laa : a.Laa - a.Dma;
                    if (c.current.props.NA && 0 < a.fP) return Math.min(e, Math.max(a.joa, d));
                    c = null !== (b = c.current && c.current.fm && c.current.fm.pq && c.current.fm.pq.MZa) && void 0 !== b ? b : 0;
                    return 0 < c ? c : null != a.DU ? Math.min(e, Math.min(d, a.DU)) : Math.min(e, d)
                };
                MCa = function(a) {
                    return a instanceof HTMLTextAreaElement || a instanceof HTMLInputElement && "submit" !== a.type
                };
                hN = function(a, b) {
                    var c;
                    if (!a.LZ.has(b)) {
                        var d = b.from,
                            e = b.Vja,
                            f = a.layers.filter((g) => g.Og);
                        f = e ? f[f.length - 1] : f[0];
                        if (!f || f.qya || f.from !== d || b.props.NS) f = a.nta(e, null !== (c = b.props.kU) && void 0 !== c ? c : 1), f = new fN(d, !!b.props.NS, f), NCa(gN(OCa, {
                            zd: f,
                            gV: a.gV,
                            window: b.window
                        }), f.element), e ? (c = a.layers[a.layers.length - 1], b.window.document.body.insertBefore(f.element, c && c.element), a.layers.push(f)) : (b.window.document.body.appendChild(f.element), a.layers.unshift(f));
                        f.add(b);
                        a.LZ.add(b)
                    }
                };
                iN = function(a, b) {
                    const c = a.layers.find((d) => d.Uy.includes(b));
                    c && (c.remove(b), a.LZ.delete(b), !b.ma && a.gV(c))
                };
                __c.mN = function({
                    pg: a,
                    children: b
                }) {
                    const [c] = TM(() => new PCa(a)), d = XM(kN);
                    UM(() => d ? (d.X_.unshift(c), () => {
                        const e = d.X_,
                            f = e.indexOf(c); - 1 < f && e.splice(f, 1)
                    }) : QCa(() => lN(c)), []);
                    return gN(kN.Provider, {
                        value: c,
                        children: b
                    })
                };
                nN = function(a, b, c) {
                    if (!b) return null;
                    b = "function" === typeof b ? b() : b;
                    return a.props.createPortal(b, c)
                };
                RCa = function(a) {
                    const {
                        placeholder: b = oN,
                        z5: c
                    } = a.props;
                    return null != b && a.jr === b ? !1 : a.show || "eager" === c
                };
                SCa = function(a, b) {
                    let c;
                    return pN(a, (d, e) => {
                        b(d, c, e);
                        c = d
                    }, {
                        fireImmediately: !0
                    })
                };
                TCa = class {
                    constructor(a) {
                        this.D = a
                    }
                    US() {
                        const a = ["pinch-zoom"];
                        this.D.direction && (this.D.direction in ["up", "down", "vertical"] ? a.push("pan-x") : this.D.direction in ["left", "right", "horizontal"] && a.push("pan-y"));
                        return a
                    }
                    onPointerDown(a, b) {
                        var c;
                        (null == a.start.button || 0 === a.start.button || 1 === a.start.button && null !== (c = this.D.QXa) && void 0 !== c && c) && this.BE(b)
                    }
                    onPointerUp(a, b) {
                        this.BE(b)
                    }
                    onPointerMove() {
                        if (this.state) {
                            var {
                                start: a,
                                iq: {
                                    current: b
                                }
                            } = this.state, c = SM(b, a, b);
                            this.state.av ? this.D.ika && this.D.ika(c) :
                                this.shouldStart(c) && (this.state.av = !0, this.D.onStart && this.D.onStart(c))
                        }
                    }
                    P6() {
                        var a;
                        if (this.D.onEnd && (null === (a = this.state) || void 0 === a ? 0 : a.av)) {
                            const {
                                start: b,
                                iq: {
                                    current: c
                                }
                            } = this.state;
                            this.D.onEnd(SM(c, b, c))
                        }
                    }
                    BE(a) {
                        if (1 !== a.size && this.state) {
                            const {
                                av: b,
                                start: c,
                                iq: {
                                    current: d
                                }
                            } = this.state;
                            this.state = void 0;
                            if (b && this.D.onEnd) this.D.onEnd(SM(d, c, d))
                        }
                        1 !== a.size || this.state || (a = a.values().next().value, this.state = {
                            av: !1,
                            iq: a,
                            start: a.current
                        })
                    }
                    shouldStart(a) {
                        var b;
                        return a.b1 < (null !== (b = this.D.VCa) &&
                            void 0 !== b ? b : 10) ? !1 : this.D.direction ? "vertical" === this.D.direction ? "up" === a.direction || "down" === a.direction : "horizontal" === this.D.direction ? "left" === a.direction || "right" === a.direction : this.D.direction === this.D.direction : !0
                    }
                };
                qN = __webpack_require__(85893);
                gN = __c.gN = qN.jsx;
                __c.rN = qN.Fragment;
                sN = qN.jsxs;
                var tN = __webpack_require__(67294),
                    TM = tN.useState,
                    UM = tN.useEffect,
                    uN = tN.createContext,
                    XM = tN.useContext,
                    $M = tN.useLayoutEffect,
                    vN = tN.forwardRef,
                    wN = tN.useRef,
                    xN = tN.useCallback,
                    UCa = tN.useMemo,
                    VCa = tN.createElement,
                    yN = tN.memo,
                    zN = tN.Component,
                    WCa = tN.createRef;
                var AN = __webpack_require__(22188),
                    BN = AN.LO,
                    CN = AN.aD,
                    XCa = AN.z,
                    YCa = AN.EH,
                    pN = AN.U5;
                var DN = __webpack_require__(70655).gn;
                var ICa = __webpack_require__(33581).hN;
                var ZCa = __webpack_require__(99601).Z;
                var EN = __webpack_require__(29323),
                    FN = EN.Pi,
                    GN = EN.b4;
                var HN = __webpack_require__,
                    $Ca = HN(94184),
                    eN = HN.n_x($Ca)();
                var aDa = __webpack_require__(29697).Z;
                var IN = __webpack_require__(5527),
                    bDa = IN.Z,
                    cDa = IN.x;
                var JN, dDa, NCa;
                JN = __webpack_require__(73935);
                dDa = JN.unmountComponentAtNode;
                NCa = JN.render;
                __c.eDa = JN.createPortal;
                var GCa = (a) => !a.hasAttribute("data-focus-guard"),
                    HCa = (a) => "-1" !== a.getAttribute("tabIndex");
                var ZM = class {
                    constructor(a) {
                        this.m7 = a;
                        this.Mv = new Map;
                        this.Xd = window;
                        this.VP = !1
                    }
                    get GT() {
                        if (!this.m7) return !0;
                        const a = this.m7.Mv.get(this.Xd);
                        return a ? a[a.length - 1] === this ? this.m7.GT : !1 : !0
                    }
                    get UH() {
                        if (!this.isReady || !this.GT) return !0;
                        const a = this.Mv.get(this.Xd);
                        return a && 0 !== a.length ? !0 : !1
                    }
                    get isReady() {
                        return this.VP
                    }
                    UW() {
                        this.VP = !0
                    }
                    M9(a) {
                        this.Xd = a
                    }
                    CZ(a, b) {
                        var c;
                        const d = null !== (c = this.Mv.get(b)) && void 0 !== c ? c : [];
                        this.Mv.set(b, [...d, a])
                    }
                    r8(a, b) {
                        var c = this.Mv.get(b);
                        c && (c = c.filter((d) => d !== a), 0 === c.length ?
                            this.Mv.delete(b) : this.Mv.set(b, c))
                    }
                };
                __c.p = ZM.prototype;
                _dp([BN.shallow], ZM.prototype, "Mv", void 0);
                _dmr(ZM, "Xd");
                _dmr(ZM, "VP");
                _dmc(ZM, "GT");
                _dmc(ZM, "UH");
                _dmc(ZM, "isReady");
                _dmb(ZM, "UW", null);
                _dmb(ZM, "M9", null);
                _dmb(ZM, "CZ", null);
                _dmb(ZM, "r8", null);
                var YM = uN(new ZM),
                    fDa = YM.Provider;
                var KN;
                KN = {
                    "data-focus-guard": !0
                };
                __c.LN = FN(vN(function(a, b) {
                    var {
                        autoFocus: c = !0,
                        children: d,
                        className: e,
                        disabled: f = !1,
                        mCa: g,
                        O8: h = !0,
                        preventScroll: k = !1,
                        xCa: l = !1,
                        G6: m,
                        Pr: n = [],
                        $Ua: q = !0
                    } = a;
                    const [r, x] = TM(window), y = wN(window.document.activeElement), z = wN(null), B = wN([]), F = wN(!0);
                    $M(() => {
                        var Z;
                        const X = null === (Z = z.current) || void 0 === Z ? void 0 : Z.ownerDocument.defaultView;
                        X && X !== window && (x(X), y.current = X.document.activeElement)
                    }, []);
                    $M(() => {
                        f || (y.current = r.document.activeElement, F.current = !0)
                    }, [f, r]);
                    const {
                        zCa: J
                    } = JCa({
                            Xd: r,
                            disabled: f
                        }), N = f ||
                        J.UH;
                    $M(() => {
                        if (z.current && !N) {
                            var Z = new MutationObserver(() => {
                                F.current = !0
                            });
                            Z.observe(z.current, {
                                childList: !0,
                                subtree: !0
                            });
                            return () => {
                                Z.disconnect()
                            }
                        }
                    }, [N]);
                    const K = xN(() => {
                            F.current && z.current && (F.current = !1, B.current = __c.WM(z.current))
                        }, []),
                        L = xN(() => {
                            K();
                            0 < B.current.length && B.current[0].focus({
                                preventScroll: k
                            })
                        }, [k, K]);
                    a = xN(() => {
                        K();
                        0 < B.current.length && B.current[B.current.length - 1].focus({
                            preventScroll: k
                        })
                    }, [k, K]);
                    const O = xN((Z) => {
                            z.current && null != Z.target && (aN(Z.target) || null != Z.relatedTarget ||
                                z.current.contains(Z.target) || L())
                        }, [L]),
                        U = xN((Z) => {
                            z.current && !J.UH && (!Z.relatedTarget || z.current.contains(Z.relatedTarget) || aN(Z.relatedTarget) || (Z.target && z.current.contains(Z.target) ? Z.target.focus({
                                preventScroll: k
                            }) : L()))
                        }, [L, J, k]);
                    $M(() => {
                        if (!N) return r.document.addEventListener("focusout", U, !0), r.document.addEventListener("focusin", O, !0), () => {
                            r.document.removeEventListener("focusout", U, !0);
                            r.document.removeEventListener("focusin", O, !0)
                        }
                    }, [r.document, N, O, U]);
                    $M(() => {
                        if (J.isReady && !f && !J.UH && z.current) {
                            var Z =
                                r.document.activeElement;
                            z.current.contains(Z) || (c ? ((Z = z.current.querySelector("[data-focus-lock-autofocus='true']")) ? (Z = Array.from(Z.querySelectorAll("button:enabled,select:enabled,textarea:enabled,input:enabled,a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable],[autofocus]")), Z = 0 < Z.length ? Z[0] : null) : Z = null, Z ? Z.focus({
                                preventScroll: k
                            }) : L()) : null === Z || void 0 === Z ? void 0 : Z.blur())
                        }
                    }, [c, r.document, L, J.isReady, J, k, f]);
                    wN(h && !N).current = h && !N;
                    UM(() => {
                        if (!f) {
                            const Z = y.current;
                            return () => {
                                !J.UH && Z && Z.focus({
                                    preventScroll: k
                                })
                            }
                        }
                    }, [f]);
                    var da = UCa(() => [m && !N ? ["Escape", (Z) => {
                        Z.stopPropagation();
                        m()
                    }] : void 0, ...n].filter(__c.pl), [N, n, m]);
                    ({
                        ref: da
                    } = __c.VM(da, {
                        kh: q
                    }));
                    return gN(fDa, {
                        value: J,
                        children: sN("div", Object.assign({}, g, {
                            className: e,
                            ref: ZCa(z, b, da),
                            tabIndex: l ? -1 : void 0,
                            children: [gN("div", Object.assign({}, {
                                onFocus: N ? void 0 : a,
                                tabIndex: N ? void 0 : 0
                            }, KN)), d, gN("div", Object.assign({}, {
                                onFocus: N ? void 0 : L,
                                tabIndex: N ? void 0 : 0
                            }, KN))]
                        }))
                    })
                }));
                var MN = {
                    checkeredPattern: "_6hNByg",
                    colorBlack: "rgb(13, 18, 22)",
                    colorBlackA07: "rgba(64, 87, 109, 0.07)",
                    colorBlackA15: "rgba(57, 76, 96, 0.15)",
                    colorBlackA60: "rgba(17, 23, 29, 0.6)",
                    colorBlue02: "rgb(194, 222, 255)",
                    colorBlue06: "rgb(26, 98, 255)",
                    colorGreen02: "rgb(193, 231, 194)",
                    colorGreen06: "rgb(0, 128, 9)",
                    colorGreyLight: "rgb(235, 236, 240)",
                    colorGreyUltraLight: "rgb(244, 244, 246)",
                    colorRed02: "rgb(255, 209, 211)",
                    colorRed06: "rgb(219, 20, 54)",
                    colorWhite: "rgb(255, 255, 255)",
                    colorYellow02: "rgb(255, 215, 168)",
                    colorYellow06: "rgb(173, 90, 0)",
                    colorBackground1: "var(--fhO9-Q)",
                    colorBackground2: "var(--vfdmBg)",
                    colorBackground3: "var(--Rij56g)",
                    colorBackground4: "var(--0NEIBA)",
                    colorContrast: "var(--S_zKBQ)",
                    colorContrastFore: "var(--QErhlg)",
                    colorCritical: "var(--IKngdQ)",
                    colorCriticalFore: "var(--6hn8OQ)",
                    colorCriticalForeLow: "var(--XRo-NQ)",
                    colorCriticalLow: "var(--k8LaaQ)",
                    colorInfo: "var(--DP6qqQ)",
                    colorInfoFore: "var(--TjZ4gg)",
                    colorInfoForeLow: "var(--ypAvbQ)",
                    colorInfoLow: "var(--axckVg)",
                    colorNeutral: "var(--pyoCYg)",
                    colorNeutralFore: "var(--GZwQFw)",
                    colorNeutralForeLow: "var(--Do4LcA)",
                    colorNeutralLow: "var(--COXgsg)",
                    colorPositive: "var(--cqkW_A)",
                    colorPositiveFore: "var(--P3bemg)",
                    colorPositiveForeLow: "var(--7Jsj3A)",
                    colorPositiveLow: "var(--1GR_Og)",
                    colorTypographyPrimary: "var(--pUV7hA)",
                    colorWarn: "var(--xQOmAw)",
                    colorWarnFore: "var(--XPPBAg)",
                    colorWarnForeLow: "var(--a01w0A)",
                    colorWarnLow: "var(--wpHozg)",
                    unthemed: "body:not(:global(.theme))",
                    level1Background: "NRNQiA",
                    level2Background: "MRidQg",
                    level3Background: "_6oSc7w",
                    level4Background: "gBIvEQ",
                    contrastBackground: "h_-gXw",
                    neutralBackground: "wBo5Rg",
                    positiveBackground: "I1h30A",
                    infoBackground: "hexUkw",
                    warnBackground: "_22NbMQ",
                    criticalBackground: "NgbqGg",
                    neutralLowBackground: "KPbOuA",
                    positiveLowBackground: "m4tMzw",
                    infoLowBackground: "psKiqQ",
                    warnLowBackground: "x-5b0w",
                    criticalLowBackground: "_2Z172g",
                    checkeredBackground: "zjPCFw _6hNByg"
                };
                var NN = {
                    colorBlackA15: "rgba(57, 76, 96, 0.15)",
                    colorBlackA30: "rgba(43, 59, 74, 0.3)",
                    colorRed06: "rgb(219, 20, 54)",
                    borderRadius: "4px",
                    colorBorder: "var(--7hnsIg)",
                    colorBorderCritical: "var(--CgOmqg)",
                    colorBorderLow: "var(--OHlWbw)",
                    unthemed: "body:not(:global(.theme))",
                    standardBorderRadius: "t0mv6A",
                    largeBorderRadius: "qu_Biw",
                    standardBorder: "OtBNHw",
                    criticalBorder: "hrsBOw",
                    lowBorder: "EC6hTQ"
                };
                var gDa = {
                    fullWidth: "taawPg"
                };
                var hDa = {
                        default: "--IDRMrA",
                        vg: "--HcbBGQ",
                        rh: "--fFzrcw",
                        ph: "--DBU1SA"
                    },
                    iDa = {
                        default: "--W1UNIg",
                        vg: "--dT7Izg",
                        rh: "--XpVh8w",
                        ph: "--T08ngA"
                    },
                    jDa = {
                        default: "--WM1TpQ",
                        vg: "--laZWoA",
                        rh: "--rek3Qg",
                        ph: "--FwtKUw"
                    },
                    kDa = {
                        default: "--gfRKFg",
                        vg: "--1TZOrg",
                        rh: "--Pj52hg",
                        ph: "--Ecy8kA"
                    },
                    lDa = {
                        default: "--Z87cwA",
                        vg: "--MnjhxA",
                        rh: "--HLgPWQ",
                        ph: "--b-6BaA"
                    },
                    mDa = {
                        default: "--WIk9NA",
                        vg: "--ZGZYgw",
                        rh: "--J4WSww",
                        ph: "--fvJIMQ"
                    },
                    nDa = {
                        default: "--hrDFvw",
                        vg: "--awWmsg",
                        rh: "--BXpvUQ",
                        ph: "--mmXynA"
                    };
                __c.ON = vN(function(a, b) {
                    var c = Object.assign({}, a);
                    const d = void 0 === a.tagName ? "div" : a.tagName,
                        e = a.children;
                    var f = a.className,
                        g = a.background,
                        h = a.border;
                    const k = a.borderRadius;
                    var l = a.padding;
                    const m = a.Qka,
                        n = a.QM,
                        q = a.paddingTop,
                        r = a.paddingBottom,
                        x = a.HFa,
                        y = a.GFa,
                        z = a.width;
                    c = (delete c.tagName, delete c.children, delete c.className, delete c.background, delete c.border, delete c.borderRadius, delete c.padding, delete c.Qka, delete c.QM, delete c.paddingTop, delete c.paddingBottom, delete c.HFa, delete c.GFa, delete c.width,
                        c);
                    a = Object;
                    var B = a.assign;
                    f = eN(f, "_9Mb_-A", g ? "number" === typeof g ? MN[`level${g}Background`] : MN[`${g}Background`] : null, h && "none" !== h ? NN[`${h}Border`] : null, k && "none" !== k ? NN[`${k}BorderRadius`] : null, z && "unset" !== z ? gDa[`${z}Width`] : null, ...[(l || m || n || q || r || x || y) && "iBrz7Q"]);
                    g = Object;
                    h = g.assign;
                    l = Object.assign({}, l && Ay(hDa, l, Gy), m && Ay(iDa, m, Gy), n && Ay(jDa, n, Gy), q && Ay(kDa, q, Gy), r && Ay(lDa, r, Gy), x && Ay(mDa, x, Gy), y && Ay(nDa, y, Gy));
                    return VCa(d, B.call(a, {}, {
                        className: f,
                        style: h.call(g, {}, l),
                        ref: b
                    }, __c.Ry(c)), e)
                });
                var oDa = {
                        enter: "mIaqZA",
                        enterActive: "bSzq3g",
                        exit: "hheo0g"
                    },
                    pDa = yN((a) => {
                        var {
                            ariaLabel: b,
                            show: c,
                            opacity: d = "default",
                            SKa: e = 0,
                            onClick: f
                        } = a;
                        const g = wN(null);
                        a = xN((k) => {
                            var l;
                            null === k || void 0 === k ? void 0 : k.addEventListener("touchmove", bN, {
                                passive: !1
                            });
                            null === (l = g.current) || void 0 === l ? void 0 : l.removeEventListener("touchmove", bN);
                            g.current = k
                        }, []);
                        const h = f ? {
                            tabIndex: 0,
                            "aria-label": b,
                            role: "button",
                            onClick: f
                        } : {};
                        return gN(aDa, { in: c,
                            timeout: e,
                            unmountOnExit: !0,
                            mountOnEnter: !0,
                            classNames: oDa,
                            children: gN("div",
                                Object.assign({}, {
                                    ref: a,
                                    className: eN("aXUJ1A", {
                                        nEyXsQ: 0 !== e,
                                        yVX3jg: "transparent" === d
                                    })
                                }, h))
                        })
                    });
                var PN = parseInt("300ms", 10),
                    qDa = parseInt("30px", 10),
                    SN = class extends zN {
                        constructor() {
                            super(...arguments);
                            this.vd = WCa();
                            this.MD = {
                                width: this.props.window.innerWidth,
                                height: this.props.window.innerHeight,
                                top: 0,
                                left: 0
                            };
                            this.Naa = this.joa = this.fP = 0;
                            this.Tha = this.Vha = "";
                            this.qEa = () => {
                                var a;
                                null !== (a = this.props.zd.current) && void 0 !== a && a.props.NA && this.vd.current && (this.Vha = this.vd.current.style.transform, this.Tha = this.vd.current.style.maxHeight, this.vd.current.style.maxHeight = "", this.vd.current.style.transition =
                                    "none")
                            };
                            this.pEa = (a) => {
                                var b;
                                null !== (b = this.props.zd.current) && void 0 !== b && b.props.NA && this.vd.current && ("up" === a.direction || "down" === a.direction || "none" === a.direction) && (this.vd.current.style.transform = `translateY(-${Math.max(0,Math.min(this.n5,this.Naa-a.d1))}px)`)
                            };
                            this.oEa = (a) => {
                                var b;
                                if (null !== (b = this.props.zd.current) && void 0 !== b && b.props.NA && this.vd.current) {
                                    this.vd.current.style.transition = "";
                                    this.vd.current.style.transform = this.Vha;
                                    this.vd.current.style.maxHeight = this.Tha;
                                    b = this.props.zd.current.props.bZa;
                                    var c = 0 > a.d1 ? "opening" : "closing",
                                        d = 1 < Math.abs(a.velocityY);
                                    (Math.abs(a.d1) > .2 * this.Naa || d) && b && b({
                                        direction: c
                                    })
                                }
                            };
                            this.Vf = "bottom" === this.props.zd.from ? [new TCa({
                                VCa: 4,
                                direction: "vertical",
                                onStart: this.qEa,
                                ika: this.pEa,
                                onEnd: this.oEa
                            })] : void 0;
                            this.sGa = (a) => {
                                const b = this.props.zd.Ug;
                                var c = b && b.dr;
                                a && c && (c = cN(this, b) ? QN(c, this.N9) : c, a.appendChild(c), b && b.props.qV && b.props.qV(!1))
                            };
                            this.rea = document.createElement("div");
                            this.$ua = (a) => {
                                const b = this.props.zd,
                                    c = this.props.measureRef,
                                    d = b.current;
                                var e = d && d.dr;
                                a && e && (e = cN(this, d) ? QN(e, this.N9) : e, a.appendChild(this.rea), a.appendChild(e), XCa(() => {
                                    d.l7 = this.rea
                                }), d && d.props.qV && d.props.qV(!0));
                                c(a);
                                b.J0 = !!a;
                                this.Kea = a || void 0
                            };
                            this.tGa = (a) => {
                                const b = this.props.zd.Ug && this.props.zd.Ug.jy;
                                a && b && a.appendChild(b)
                            };
                            this.ava = (a) => {
                                const b = this.props.zd.current && this.props.zd.current.jy;
                                a && b && a.appendChild(b)
                            };
                            this.B6 = () => {
                                this.props.zd.Ug = void 0
                            };
                            this.f6 = () => {
                                this.props.gV(this.props.zd)
                            };
                            this.VEa = () => {
                                const a = this.props.measure;
                                this.props.zd.J0 && a()
                            }
                        }
                        get V0() {
                            return 0 !==
                                this.fP
                        }
                        get Dma() {
                            var a = this.props.zd.current;
                            var b = !!cN(this, a);
                            null == a || a.XZ || b ? (a = getComputedStyle(document.body), b = parseInt(a.getPropertyValue("--safe-area-inset-top"), 10) || 0, a.getPropertyValue("--safe-area-inset-bottom"), a.getPropertyValue("--safe-area-inset-left"), a.getPropertyValue("--safe-area-inset-right"), a = b) : a = 0;
                            return a
                        }
                        get DU() {
                            const a = this.props.zd.current;
                            if (null !== a && void 0 !== a && a.props.NA) return a.props.DXa
                        }
                        get n5() {
                            var a, b = this.props.contentRect,
                                c = b.bounds.width;
                            b = b.bounds.height;
                            c = null !== (a = this.props.zd.LL ? c : b) && void 0 !== a ? a : 0;
                            return Math.max(0, c)
                        }
                        get Laa() {
                            const {
                                props: {
                                    zd: a
                                },
                                MD: {
                                    width: b,
                                    height: c
                                }
                            } = this;
                            return a.LL ? b : c
                        }
                        render() {
                            var a = this.props.contentRect,
                                b = this.props.zd;
                            const c = b.current,
                                d = b.Ug,
                                e = b.Lza;
                            b = b.ma;
                            const {
                                style: f,
                                className: g
                            } = KCa(this), h = LCa(this);
                            var k = c && c.fm && c.fm.pq;
                            k = (null === k || void 0 === k ? 0 : k.T5a) ? "transparent" : null === c || void 0 === c ? void 0 : c.props.Oka;
                            a = c && c.show && c.props.yk && a && a.bounds && null != a.bounds.width;
                            return sN(__c.rN, {
                                children: [gN(pDa, {
                                    ariaLabel: (null === c || void 0 === c ? void 0 : c.props.uPa) || __c.H("60VG2w"),
                                    show: !!a,
                                    opacity: k,
                                    SKa: b ? PN : 0,
                                    onClick: null === c || void 0 === c ? void 0 : c.props.ad
                                }), sN("div", {
                                    id: null === c || void 0 === c ? void 0 : c.props.id,
                                    role: (null === c || void 0 === c ? void 0 : c.props.role) || void 0,
                                    "aria-roledescription": null === c || void 0 === c ? void 0 : c.props.ariaRoleDescription,
                                    className: "_2XGiLw",
                                    style: this.MD,
                                    children: [e && sN("div", {
                                        className: eN("q-Mi8Q", !b && "vHVgfg"),
                                        style: h,
                                        children: [d && gN("div", {
                                            className: c ? "EsF7tg BB_TDQ" : "l7fLgw BB_TDQ",
                                            ref: this.tGa
                                        }, d.id), c && gN("div", {
                                            className: d ? "EsF7tg BB_TDQ" : "l7fLgw BB_TDQ",
                                            ref: this.ava
                                        }, c.id)]
                                    }), sN("div", {
                                        className: g,
                                        style: f,
                                        onTransitionEnd: this.f6,
                                        ref: this.vd,
                                        children: [d && gN("div", {
                                            className: c ? "EsF7tg BB_TDQ" : "l7fLgw BB_TDQ",
                                            style: d.uea,
                                            onTransitionEnd: this.B6,
                                            ref: this.sGa,
                                            children: gN(RN, {
                                                Vf: cN(this, d),
                                                xea: d.props.yk
                                            })
                                        }, d.id), c && gN("div", {
                                                className: d ? "EsF7tg BB_TDQ" : "l7fLgw BB_TDQ",
                                                tabIndex: -1,
                                                style: c.uea,
                                                ref: this.$ua,
                                                children: gN(RN, {
                                                    Vf: cN(this, c),
                                                    xea: c.props.yk
                                                })
                                            },
                                            c.id), (null === c || void 0 === c ? void 0 : c.XZ) && !c.props.VN && gN(bDa, {
                                            bounds: !0,
                                            onResize: this.VEa,
                                            children: ({
                                                measureRef: l
                                            }) => gN("div", {
                                                ref: l,
                                                className: "BpH0Jg"
                                            })
                                        })]
                                    })]
                                })]
                            })
                        }
                        componentDidMount() {
                            const a = this.props.window.visualViewport;
                            a && (this.FD(), a.addEventListener("resize", this.FD), a.addEventListener("scroll", this.FD), GN(this, () => {
                                a.removeEventListener("resize", this.FD);
                                a.removeEventListener("scroll", this.FD)
                            }));
                            GN(this, [YCa(() => {
                                var b, {
                                    zd: {
                                        current: c
                                    }
                                } = this.props;
                                c = null === (b = null === c ||
                                    void 0 === c ? void 0 : c.fm) || void 0 === b ? void 0 : b.pq;
                                b = this.vd.current;
                                c && b && (b.style.transform = c.iQa, b.style.transition = c.jQa)
                            }, {
                                scheduler: requestAnimationFrame
                            }), pN(() => {
                                var b;
                                return null === (b = this.props.zd.current) || void 0 === b ? void 0 : b.show
                            }, (b) => {
                                const c = this.vd.current;
                                !b && c && (c.style.transition = "")
                            }), pN(() => {
                                var b, c, d;
                                return null === (d = null === (c = null === (b = this.props.zd.current) || void 0 === b ? void 0 : b.fm) || void 0 === c ? void 0 : c.pq) || void 0 === d ? void 0 : d.lua
                            }, (b) => {
                                const c = this.vd.current;
                                !b && c && (c.style.maxHeight =
                                    "")
                            }, {
                                scheduler: requestAnimationFrame
                            }), pN(() => {
                                var b, c, d;
                                return null === (d = null === (c = null === (b = this.props.zd.current) || void 0 === b ? void 0 : b.fm) || void 0 === c ? void 0 : c.pq) || void 0 === d ? void 0 : d.lua
                            }, (b) => {
                                const c = this.vd.current;
                                b && c && (c.style.maxHeight = b)
                            }, {
                                delay: PN
                            })])
                        }
                        FD() {
                            const a = __c.u(this.props.window.visualViewport);
                            this.fP = this.props.zd.LL ? a.width - this.MD.width : a.height - this.MD.height;
                            0 > this.fP && (this.joa = this.n5);
                            this.MD = {
                                left: a.offsetLeft,
                                top: a.offsetTop,
                                width: a.width,
                                height: a.height
                            };
                            var {
                                zd: {
                                    current: b
                                }
                            } =
                            this.props;
                            (b = b && b.fm && b.fm.pq) && b.gZa(a.height)
                        }
                        componentDidUpdate() {
                            var a, b;
                            const {
                                zd: {
                                    current: c,
                                    Ug: d
                                },
                                contentRect: {
                                    bounds: e
                                },
                                window: f
                            } = this.props, g = !d && c && c.props.YYa, h = (null === c || void 0 === c ? 0 : c.props.NA) ? qDa : 0;
                            g && e && e.height !== h && g(e);
                            this.V0 && c && c.show && c.props.yk && MCa(f.document.activeElement) && (null === (b = null === (a = f.document.activeElement) || void 0 === a ? void 0 : a.scrollIntoView) || void 0 === b ? void 0 : b.call(a, {
                                block: "center",
                                inline: "center"
                            }));
                            f.requestAnimationFrame(() => this.fP = 0);
                            this.Kea && c &&
                                c.Ksa && this.Jea !== c.id ? (this.Jea = c.id, this.Kea.focus()) : c && c.props.open || (this.Jea = void 0);
                            c && c.fm && (a = c.fm.pq) && e && a.cQa(e, !!c.props.open)
                        }
                        get N9() {
                            const {
                                zd: {
                                    current: a
                                }
                            } = this.props, b = null === a || void 0 === a ? void 0 : a.props.backgroundColor, c = null === a || void 0 === a ? void 0 : a.jg;
                            return {
                                className: eN("H0iAEg", {
                                    _2plQfw: !c && "small" === (null === a || void 0 === a ? void 0 : a.vW),
                                    GtE9QQ: !c && "large" === (null === a || void 0 === a ? void 0 : a.vW),
                                    "_-DkWCw": null === a || void 0 === a ? void 0 : a.props.eVa,
                                    _8vzjAg: !!cN(this, a)
                                }),
                                style: {
                                    backgroundColor: b
                                }
                            }
                        }
                    };
                _dp([BN.struct], SN.prototype, "MD", void 0);
                _dmb(SN, "FD", null);
                _dma(SN, "B6", void 0);
                _dma(SN, "f6", void 0);
                SN = DN([FN], SN);
                var RN = yN(({
                        Vf: a,
                        xea: b
                    }) => a ? gN(__c.Ny, {
                        Vf: a,
                        children: ({
                            Qp: c
                        }) => gN("div", {
                            ref: c,
                            className: "k1uShw",
                            children: gN("div", {
                                className: eN("KgOpXA", {
                                    QsOWCQ: b
                                })
                            })
                        })
                    }) : null),
                    QN = (a, b) => {
                        var c;
                        const d = b.style;
                        a.className = eN(a.className, b.className);
                        a.style.backgroundColor = null !== (c = d.backgroundColor) && void 0 !== c ? c : "";
                        return a
                    },
                    OCa = cDa("bounds")(SN);
                var rDa = class {
                        constructor() {
                            this.layers = [];
                            this.LZ = new Set;
                            this.nta = (a, b) => {
                                if (0 === this.layers.length) return b;
                                if (a) return a = this.layers[this.layers.length - 1].kU, b > a ? a : b;
                                a = this.layers[0].kU;
                                return b < a ? a : b
                            };
                            this.gV = (a) => {
                                0 === a.Uy.length && (dDa(a.element), a.element.remove(), this.layers.splice(this.layers.indexOf(a), 1))
                            }
                        }
                    },
                    fN = class {
                        constructor(a, b, c = 1) {
                            this.from = a;
                            this.qya = b;
                            this.kU = c;
                            this.Uy = [];
                            this.element = document.createElement("div");
                            this.J0 = !1;
                            this.LL = "left" === a || "right" === a;
                            this.element.addEventListener("click",
                                () => 0);
                            this.element.style.position = "relative";
                            this.element.style.zIndex = String(c)
                        }
                        remove(a) {
                            this.Uy.splice(this.Uy.indexOf(a), 1);
                            this.update()
                        }
                        add(a) {
                            a.Vja ? this.Uy.push(a) : this.Uy.unshift(a);
                            this.update()
                        }
                        get Og() {
                            return this.Uy.some((a) => a.show)
                        }
                        update() {
                            const a = this.Uy[0],
                                b = this.current;
                            a !== b && (this.Ug = this.Ug || !this.J0 ? void 0 : b && !b.ma ? void 0 : b, this.current = a)
                        }
                        get ma() {
                            const a = this.current,
                                b = this.Ug;
                            return a ? a.ma : b ? b.ma : !1
                        }
                        get Lza() {
                            const a = this.current,
                                b = this.Ug;
                            return !(!a || !a.jy.hasChildNodes()) ||
                                !(!b || !b.jy.hasChildNodes())
                        }
                    };
                _dmr(fN, "current");
                _dmr(fN, "Ug");
                _dma(fN, "update", null);
                var PCa = class {
                        constructor(a) {
                            this.handler = a;
                            this.X_ = []
                        }
                    },
                    kN = uN(void 0),
                    QCa = (a) => {
                        document.addEventListener("backbutton", a);
                        return () => document.removeEventListener("backbutton", a)
                    },
                    lN = ({
                        X_: a,
                        handler: b
                    }) => {
                        let c = !1;
                        for (const d of a)
                            if (c = lN(d)) break;
                        c || b({
                            stopPropagation: () => c = !0
                        });
                        return c
                    };
                var TN, UN, sDa, oN;
                UN = __c.Gd.direction;
                sDa = __c.RM();
                oN = () => null;
                VN = __c.VN = TN = class extends zN {
                    constructor(a) {
                        super(a);
                        this.id = TN.Sp.next();
                        this.dr = document.createElement("div");
                        this.jy = document.createElement("div");
                        this.Wda = 0;
                        this.pg = (b) => {
                            const c = this.props.pg,
                                d = this.props.open;
                            c && d && c(b)
                        };
                        a.pq && (this.fm = {
                            pq: a.pq
                        });
                        this.dr.className = eN("mLOe-Q", {
                            AFEg4Q: a.d9
                        });
                        this.jy.className = eN("mLOe-Q", "AFEg4Q");
                        this.show = !!this.props.open;
                        this.dr.style.display = this.props.open ? "" : "none";
                        if (this.show || "eager" === a.z5) this.jr = a.content, this.UE = a.Lka
                    }
                    get F$() {
                        var a;
                        return null === (
                            a = this.RX) || void 0 === a ? void 0 : a.className
                    }
                    get window() {
                        return this.props.window
                    }
                    render() {
                        return sN(__c.rN, {
                            children: [gN(__c.Pd, {
                                children: this.L9
                            }), gN(__c.mN, {
                                pg: this.pg,
                                children: sN(FCa, {
                                    Ae: this.l7,
                                    children: [nN(this, this.jr, this.dr), nN(this, this.UE, this.jy)]
                                })
                            })]
                        })
                    }
                    L9(a) {
                        this.RX = a;
                        return null
                    }
                    componentDidMount() {
                        this.jr && hN(this.props.layers, this);
                        GN(this, [SCa(() => {
                            var a, b;
                            return null !== (b = null === (a = this.RX) || void 0 === a ? void 0 : a.classNames) && void 0 !== b ? b : []
                        }, (a, b) => {
                            null != b && (this.dr.classList.remove(...b),
                                this.jy.classList.remove(...b));
                            this.dr.classList.add(...a);
                            this.jy.classList.add(...a)
                        })])
                    }
                    componentWillUnmount() {
                        iN(this.props.layers, this);
                        this.props.open && this.props.nk && this.props.window.setTimeout(this.props.nk, this.ma ? PN : 0)
                    }
                    componentDidUpdate(a) {
                        var b, c;
                        const {
                            open: d,
                            content: e,
                            Lka: f,
                            layers: g,
                            placeholder: h = oN,
                            d9: k,
                            nk: l,
                            window: m
                        } = this.props;
                        this.dr.classList.toggle("AFEg4Q", k);
                        d && !a.open ? (this.show = !0, this.dr.style.display = "", m.clearTimeout(this.Wda), this.jr || (this.jr = h, this.UE = f, m.setTimeout(CN(() => {
                            this.jr = e
                        }))), hN(g, this)) : !d && a.open && (this.show = !1, null === (c = null === (b = this.fm) || void 0 === b ? void 0 : b.pq) || void 0 === c ? void 0 : c.tPa(), this.Wda = m.setTimeout(CN(() => {
                            this.woa && (this.UE = this.jr = void 0);
                            this.dr.style.display = "none";
                            l && l()
                        }), this.ma ? PN : 0), this.woa && iN(g, this));
                        RCa(this) && (this.jr = e, this.UE = f)
                    }
                    get woa() {
                        return !this.props.z5 || "open" === this.props.z5
                    }
                    get XZ() {
                        const {
                            Y1: a = !1,
                            VN: b = !1
                        } = this.props;
                        return sDa && !a && !b
                    }
                    get from() {
                        const a = this.props.from;
                        return "right" === a && 2 === UN ? "left" : "left" ===
                            a && 2 === UN ? "right" : a || "bottom"
                    }
                    get Vja() {
                        return "bottom" === this.props.position
                    }
                    get vW() {
                        const {
                            vW: a = !0,
                            EWa: b = !1
                        } = this.props;
                        return a && b ? "large" : a ? "small" : "none"
                    }
                    get Ksa() {
                        const {
                            yk: a,
                            open: b,
                            FNa: c = !0
                        } = this.props;
                        return !!(a && b && c)
                    }
                    get ma() {
                        var a;
                        return (null !== (a = this.props.ma) && void 0 !== a ? a : !0) && __c.Gd.ma
                    }
                    get jg() {
                        var a = this.props.size;
                        const b = this.props.WCa;
                        if (!a) return !1;
                        a = a || b;
                        return "100%" === a || "100vh" === a
                    }
                    get uea() {
                        const a = this.props.from;
                        var b = this.props.size;
                        const c = this.props.WCa;
                        var d = this.props.j5;
                        b = null == c && null == d || null != b ? b : "inherit";
                        d = d || "100%";
                        return "left" === a || "right" === a ? {
                            width: b,
                            minWidth: c,
                            maxWidth: d
                        } : {
                            height: b,
                            minHeight: c,
                            maxHeight: d
                        }
                    }
                };
                VN.defaultProps = {
                    d9: !0
                };
                VN.Sp = new __c.Pb("sheet__");
                __c.p = VN.prototype;
                _dmr(VN, "l7");
                _dmr(VN, "show");
                _dmr(VN, "jr");
                _dmr(VN, "UE");
                _dmr(VN, "RX");
                _dmc(VN, "F$");
                _dmb(VN, "L9", null);
                _dma(VN, "componentDidUpdate", null);
                VN = __c.VN = TN = DN([FN], VN);
                __c.tDa = new rDa;
            }).call(self, self._cdf17aa01cb7a37fe84ed76fc113a158);
        }

    }
])
//# sourceMappingURL=sourcemaps/da7dc860d325212f.js.map