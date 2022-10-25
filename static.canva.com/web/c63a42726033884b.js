(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [1569], {

        /***/
        39673: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(2868);
            __web_req__(53189);
            __web_req__(90682);
            __web_req__(97924);
            self._cdf17aa01cb7a37fe84ed76fc113a158 = self._cdf17aa01cb7a37fe84ed76fc113a158 || {};
            (function(__c) {
                "use strict";
                var mv, v = __c.v,
                    wv, Hv, Jv, Vv, E = __c.E,
                    I = __c.I,
                    M = __c.M,
                    C = __c.C,
                    w = __c.w;
                var hv, kv, lv, Fra, Gra, Hra, qv, Kra, sv, tv, Lra, Mra, Nra, xv, yv, zv, Av, Qra, Rra, Sra, Tra, Ura, Cv, Vra, Dv, Wra;
                hv = function(a, b) {
                    const c = Math.floor(b / 32);
                    b = 1 << b % 32;
                    return c < a.length && (a[c] & b) === b
                };
                __c.iv = function(a) {
                    const b = hv(a, 0),
                        c = hv(a, 1),
                        d = hv(a, 2);
                    return {
                        cL: b,
                        performance: c,
                        cI: d,
                        gO: hv(a, 3),
                        Gza: hv(a, 10),
                        yza: hv(a, 11),
                        Cza: hv(a, 12),
                        Eza: hv(a, 13),
                        Dza: hv(a, 14),
                        Fza: hv(a, 15),
                        Aza: hv(a, 44),
                        Bza: hv(a, 45),
                        zza: hv(a, 46),
                        Jj: hv(a, 4) || d,
                        Hka: hv(a, 5) || b,
                        hha: hv(a, 6) || d,
                        Fga: hv(a, 7) || c,
                        l9: hv(a, 36) || c
                    }
                };
                __c.jv = function(a) {
                    if (null == a || "object" !== typeof a) throw new TypeError(`expected an object, found: ${a}`);
                    return a
                };
                kv = function(a, b) {
                    b = void 0 === b ? /Mac/.test(navigator.platform) ? "mac" : "other" : b;
                    var c = "mac" === b ? __c.Lba : __c.Mba;
                    if ("string" === typeof a && __c.Kba.has(a)) return [c[a]];
                    if (__c.Ab(a)) return [...("mac" === b ? [a.HY ? c.Alt : null, a.mZ ? c.Shift : null, a.command ? c.Command : null] : [a.command ? c.Command : null, a.HY ? c.Alt : null, a.mZ ? c.Shift : null]), ...kv(a.key)].filter(__c.pl);
                    if (Array.isArray(a)) return [`${lv(a[0])}\u2013${lv(a[1])}`];
                    a = a in __c.Cb ? __c.Cb[a] : a;
                    c = c[a];
                    return [c ? c : a.toLocaleUpperCase()]
                };
                lv = function(a, b) {
                    b = void 0 === b ? /Mac/.test(navigator.platform) ? "mac" : "other" : b;
                    const c = "mac" === b ? "" : "+";
                    return kv(a, b).join(c)
                };
                Fra = function(a, b) {
                    return a.map((c, d) => c & ~b[d])
                };
                Gra = function(a) {
                    return a.every((b) => 0 === b)
                };
                Hra = function() {
                    var a = document;
                    a.addEventListener("keydown", (b) => {
                        "Tab" === b.key && mv.ci("keyboard")
                    }, !0);
                    a.addEventListener("mousedown", () => mv.ci("mouse"), !0);
                    a.addEventListener("touchstart", () => mv.ci("mouse"), !0)
                };
                __c.ov = function(a) {
                    a = void 0 === a ? __c.nv : a;
                    return null == a || null == a.matchMedia ? !1 : a.matchMedia("(pointer:coarse), (-moz-touch-enabled:1)").matches
                };
                __c.pv = function() {
                    var a = void 0 === a ? __c.nv : a;
                    return null == a ? !1 : null != a.matchMedia && __c.ov(a) ? !a.matchMedia("(hover: none)").matches : !0
                };
                qv = function(a) {
                    const b = Ira(null);
                    Jra(a, () => ({
                        focus: () => {
                            var c;
                            return null === (c = b.current) || void 0 === c ? void 0 : c.focus()
                        },
                        blur: () => {
                            var c;
                            return null === (c = b.current) || void 0 === c ? void 0 : c.blur()
                        }
                    }), []);
                    return b
                };
                Kra = function(a, b) {
                    switch (a) {
                        case "tiny":
                            return [b.En, "R3BUpw dkWypw"];
                        case "small":
                            return [b.small, "uRWxVA dkWypw"];
                        case "medium":
                            return [b.medium, "NA_Img dkWypw"];
                        case "large":
                            return [b.vc, "JRkz2A dkWypw"];
                        default:
                            throw new v(a);
                    }
                };
                sv = function(a) {
                    const b = __c.u(a.props.Ura);
                    var c = a.props.open;
                    const d = a.props.Ey;
                    var e = a.props.positionFixed;
                    const f = a.props.direction;
                    let {
                        placement: g
                    } = a.props;
                    if (!a.popper && c && a.oi && (a.BQ || null == a.props.arrow)) {
                        if (d) __c.ja(!a.pD, "Pin must not contain children when refObj is specified"), c = d;
                        else if (a.pD) __c.ja(1 === a.pD.children.length, "Pin must contain exactly one child"), c = a.pD.children[0];
                        else return;
                        g && 2 === f && rv.has(g) && (g = rv.get(g));
                        e = {
                            placement: g,
                            positionFixed: e,
                            modifiers: {
                                arrow: {
                                    element: a.BQ ||
                                        void 0,
                                    enabled: null != a.BQ
                                },
                                offset: {
                                    enabled: !!a.props.vE,
                                    fn: (h) => {
                                        const k = a.props.vE();
                                        h.offsets.popper.left = Math.round(k.left);
                                        h.offsets.popper.top = Math.round(k.top);
                                        return h
                                    }
                                },
                                preventOverflow: {
                                    escapeWithReference: a.props.WG,
                                    boundariesElement: a.props.fq || "scrollParent"
                                }
                            }
                        };
                        a.props.GEa && (e.onUpdate = a.props.GEa);
                        a.popper = b(c, a.oi, e)
                    }
                };
                tv = function(a) {
                    a.popper && (a.popper.disableEventListeners(), a.popper = void 0)
                };
                Lra = function(a) {
                    switch (a) {
                        case "monoBlack":
                        case "monoWhite":
                            return "primary";
                        case "monoBlackA100":
                            return "secondary";
                        case "monoBlackA150":
                        case "monoBlackA200":
                        case "monoBlackA250":
                        case "monoWhiteA100":
                            return "tertiary";
                        case "colorRedDark":
                        case "colorRedLight":
                            return "critical";
                        case __c.uv:
                            break;
                        default:
                            throw new v(a);
                    }
                };
                Mra = function(a) {
                    switch (a) {
                        case "xxlarge":
                            return "ExtraExtraLarge";
                        case "xlarge":
                            return "ExtraLarge";
                        case "large":
                            return "Large";
                        case "medium":
                            return "Medium";
                        case "small":
                            return "Small";
                        case "micro":
                            return "Micro";
                        default:
                            throw new v(a);
                    }
                };
                Nra = function(a) {
                    var {
                        variant: b,
                        size: c
                    } = a;
                    if ("title" !== b) return "p";
                    switch (c) {
                        case "xxlarge":
                            return "h1";
                        case "xlarge":
                            return "h1";
                        case "large":
                            return "h2";
                        case "medium":
                            return "h3";
                        case "small":
                            return "h4";
                        case "micro":
                            return "h5";
                        default:
                            throw new v(c);
                    }
                };
                xv = function(a) {
                    const {
                        id: b,
                        Yb: c = "start",
                        color: d = "monoBlack",
                        tone: e = Lra(d),
                        La: f = "none",
                        $Oa: g = "default",
                        variant: h = "regular",
                        size: k = "medium",
                        tagName: l = Nra({
                            variant: h,
                            size: k
                        }),
                        lineClamp: m,
                        children: n,
                        dNa: q,
                        className: r
                    } = a;
                    if ("" === n || null == n) return null;
                    var x = m && (1 === m ? "GHIRjw" : "KZvVOQ");
                    a = m && 1 < m ? {
                        WebkitLineClamp: m
                    } : {};
                    var {
                        variant: y,
                        size: z
                    } = {
                        variant: h,
                        size: k
                    };
                    a: switch (y) {
                        case "regular":
                            var B = "";
                            break a;
                        case "title":
                            B = "Title";
                            break a;
                        case "bold":
                            B = "Bold";
                            break a;
                        default:
                            throw new v(y);
                    }
                    B = vv[`text${B}${Mra(z)}`];
                    x = wv(B, "legacy" === f && "_2xcaIA", vv[c], vv[d === __c.uv ? "inheritColor" : d], e && vv[e], x, q && "upnMoA", "uppercase" === g && "_07xgLQ", r);
                    return Ora(l, {
                        id: b,
                        className: x,
                        style: a
                    }, n)
                };
                yv = function({
                    state: a
                }, b, c) {
                    a.Ac = window.setTimeout(c, b)
                };
                zv = function(a, b) {
                    var c, d;
                    a.props.disabled || (null === (d = (c = a.props).onClick) || void 0 === d ? void 0 : d.call(c, b))
                };
                Av = function(a) {
                    const b = {
                        tabIndex: a.tabIndex
                    };
                    b["aria-label"] = a.Na ? void 0 : a.ariaLabel;
                    b["aria-labelledby"] = a.Na;
                    a.role && (b.role = a.role, b["aria-roledescription"] = a.ariaRoleDescription);
                    a.ariaHidden && (b["aria-hidden"] = a.ariaHidden, b.tabIndex = -1);
                    b["aria-describedby"] = a.Pe;
                    b["aria-controls"] = a.fd;
                    b["aria-owns"] = a.rNa;
                    b["aria-activedescendant"] = a.Ap;
                    a.Lh ? (b["aria-expanded"] = !!a.active, b["aria-haspopup"] = a.ariaHasPopup, b["aria-haspopup"] && !a.role && (b.role = "button")) : "tab" === a.role ? b["aria-selected"] = !!a.active :
                        Pra.includes(a.role) ? b["aria-checked"] = !!a.active : "link" !== a.type && null != a.active && (b["aria-pressed"] = a.active);
                    "link" !== a.type && null != a.ariaPressed && (b["aria-pressed"] = a.ariaPressed);
                    "link" === a.type && a.disabled && (b["aria-disabled"] = !0);
                    return b
                };
                __c.Bv = function(a) {
                    var {
                        children: b,
                        Mg: c,
                        size: d,
                        variant: e
                    } = a;
                    if (-1 === ["subtleLinkButton"].indexOf(e)) {
                        if (d && "default" !== d) return d;
                        if ("basic" !== e) return !b && c && -1 !== ["tiny", "small", "large"].indexOf(c) ? c : "medium"
                    }
                };
                Qra = function(a, b, c, d) {
                    return new Promise((e, f) => {
                        a.cordova.exec((g) => e(g), (g) => f(g), b, c, d)
                    })
                };
                Rra = function(a) {
                    try {
                        if (a instanceof Error) return [a.message, 1];
                        const b = JSON.parse(decodeURIComponent(String(a))),
                            c = __c.Lb.P(b);
                        switch (c.type) {
                            case "ERROR":
                                return [c.message || "", c.gj];
                            case "SUCCESS":
                                return [`[SUCCESS] ${c.Bo}`, 1];
                            default:
                                throw new v(c);
                        }
                    } catch (b) {
                        return [String(a), 1]
                    }
                };
                Sra = function(a, b) {
                    try {
                        return encodeURI(JSON.stringify(a))
                    } catch (c) {
                        throw a = new __c.Ub(1, b, `Cordova RPC encoding error: "${c.message}"`), c instanceof Error && (a.stack = c.stack), a
                    }
                };
                Tra = function(a, b) {
                    try {
                        return __c.jv(JSON.parse(decodeURIComponent(a)))
                    } catch (c) {
                        throw a = new __c.Ub(1, b, `Cordova RPC decoding error: "${c.message}"`), c instanceof Error && (a.stack = c.stack), a
                    }
                };
                Ura = function() {
                    var a = window.orientation;
                    a = "string" === typeof a ? parseInt(a, 10) : a;
                    switch (a) {
                        case -90:
                            return 3;
                        case 0:
                            return 1;
                        case 90:
                            return 4;
                        case 180:
                            return 2;
                        default:
                            throw Error(`Invalid window orientation value ${a}`);
                    }
                };
                Cv = __webpack_require__(22188);
                Vra = Cv.LO;
                Dv = Cv.U5;
                __c.Ev = Cv.EH;
                Wra = Cv.z;
                var Fv = __webpack_require__(70655).gn;
                var Gv;
                Gv = __webpack_require__(85893);
                Hv = __c.Hv = Gv.jsx;
                __c.Iv = Gv.Fragment;
                Jv = __c.Jv = Gv.jsxs;
                var Kv, Xra, Ira, Jra, Nv, Ov, Ora, Zra;
                Kv = __webpack_require__(67294);
                Xra = Kv.useLayoutEffect;
                __c.Lv = Kv.useEffect;
                __c.Mv = Kv.useState;
                Ira = Kv.useRef;
                Jra = Kv.useImperativeHandle;
                __c.Yra = Kv.useContext;
                Nv = Kv.Component;
                Ov = Kv.memo;
                Ora = Kv.createElement;
                Zra = Kv.forwardRef;
                var Pv, $ra;
                Pv = __webpack_require__;
                $ra = Pv(94184);
                wv = __c.wv = Pv.n_x($ra)();
                var Qv = __webpack_require__(96630),
                    asa = Qv.ZP,
                    bsa = Qv.d0,
                    csa = Qv.cn,
                    dsa = Qv.$r,
                    esa = Qv.Wj,
                    fsa = Qv.Ix;
                var gsa = __webpack_require__(28981).Z;
                var Rv = __webpack_require__(29323),
                    Sv = Rv.b4,
                    Tv = Rv.Pi;
                var Uv = __webpack_require__(99601).Z;
                Vv = __c.Vv = class {
                    constructor(a) {
                        var b, c;
                        this.Jz = a.Uha;
                        this.YI = null !== (b = a.wia) && void 0 !== b ? b : !0;
                        this.Rra = null !== (c = a.Ge) && void 0 !== c ? c : !1
                    }
                    setStatus(a) {
                        this.Jz = a;
                        this.Rra && localStorage.setItem("consent", JSON.stringify(a.bj))
                    }
                    get t7() {
                        return !this.YI && !Gra(this.Jz.md)
                    }
                    get lF() {
                        return this.YI ? this.Jz.bj : Fra(this.Jz.bj, this.Jz.md)
                    }
                    get Lk() {
                        return __c.iv(this.lF)
                    }
                };
                __c.p = Vv.prototype;
                __c.p.kF = __c.ba(54);
                _dmr(Vv, "Jz");
                _dmr(Vv, "YI");
                _dma(Vv, "setStatus", null);
                _dma(Vv, "kF", null);
                _dmc(Vv, "t7");
                _dmc(Vv, "lF");
                _dmc(Vv, "Lk");
                var Zv = class {
                    constructor() {
                        this.Dz = "mouse"
                    }
                    get lh() {
                        return "mouse" === this.Dz
                    }
                    get Bx() {
                        return "keyboard" === this.Dz
                    }
                    get AZ() {
                        return this.Dz
                    }
                    ci(a) {
                        return this.Dz = a
                    }
                };
                __c.p = Zv.prototype;
                _dmr(Zv, "Dz");
                _dmc(Zv, "lh");
                _dmc(Zv, "Bx");
                _dmc(Zv, "AZ");
                _dma(Zv, "ci", null);
                mv = __c.mv = new Zv;
                "undefined" !== typeof document && Hra();
                __c.$v = new __c.Pb("__a11yId");
                __c.hsa = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement ? Xra : __c.Lv;
                __c.aw = ({
                    children: a,
                    ariaLive: b,
                    ariaAtomic: c,
                    id: d,
                    tagName: e = "div",
                    role: f
                }) => Hv(e, {
                    id: d,
                    role: f,
                    "aria-live": b,
                    "aria-atomic": c,
                    className: "_-pFsfA",
                    children: a
                });
                var isa, jsa;
                __c.bw = parseInt("8px", 10) || 8;
                __c.cw = parseInt("600px", 10) || 600;
                isa = parseInt("900px", 10) || 900;
                jsa = parseInt("1200px", 10) || 1200;
                __c.dw = (a) => a >= jsa ? 3 : a >= isa ? 2 : a >= __c.cw ? 1 : 0;
                Vra.box(__c.dw("undefined" === typeof window ? 0 : window.innerWidth));
                __c.nv = "undefined" !== typeof window ? window : void 0;
                __c.ew = "undefined" !== typeof navigator ? navigator : void 0;
                var ksa = {
                    colorBlack: "rgb(13, 18, 22)",
                    colorBlackA70: "rgba(13, 18, 22, 0.7)",
                    colorBlackA86: "rgba(13, 18, 22, 0.86)",
                    colorGreen06: "rgb(0, 128, 9)",
                    colorRed06: "rgb(219, 20, 54)",
                    gridBaseline: "8px",
                    colorTypographyCritical: "var(--05tvjQ)",
                    colorTypographyPositive: "var(---VkLcA)",
                    colorTypographyPrimary: "var(--pUV7hA)",
                    colorTypographySecondary: "var(--FTyzZQ)",
                    colorTypographyTertiary: "var(--fSfh3A)",
                    unthemed: "body:not(:global(.theme))",
                    tinyMultiplier: "1.5",
                    smallMultiplier: "2",
                    mediumMultiplier: "3",
                    largeMultiplier: "4",
                    tinySize: "12px",
                    smallSize: "16px",
                    mediumSize: "24px",
                    largeSize: "32px",
                    icon: "dkWypw",
                    tiny: "R3BUpw dkWypw",
                    small: "uRWxVA dkWypw",
                    medium: "NA_Img dkWypw",
                    large: "JRkz2A dkWypw",
                    spinning: "_6ti9-A",
                    spin: "_vsOSw",
                    followDirection: "lmfTqA",
                    primary: "RMcv3A",
                    secondary: "M1IlTw",
                    tertiary: "EpS93g",
                    positive: "_7_8FQQ",
                    critical: "Tb7P_g"
                };
                __c.fw = (a, b) => {
                    var {
                        bga: c,
                        zF: d
                    } = void 0 === b ? {} : b;
                    b = (e) => {
                        var f = Object.assign({}, e),
                            g = e.className;
                        const h = e.size;
                        e = e.tone;
                        f = (delete f.className, delete f.size, delete f.tone, f);
                        const [k, l] = Kra(h, a);
                        g = wv(g, l, c, e ? ksa[e] : void 0, {
                            lmfTqA: d
                        });
                        g = Object.assign({}, f, {
                            lza: k,
                            className: g
                        });
                        var {
                            className: m,
                            style: n,
                            lza: q
                        } = g;
                        return Hv("span", {
                            "aria-hidden": "true",
                            className: m,
                            style: n,
                            dangerouslySetInnerHTML: {
                                __html: q
                            }
                        })
                    };
                    b.sizes = a;
                    b.zF = d;
                    return b
                };
                __c.gw = (a, b) => __c.fw(a, {
                    zF: b
                });
                var lsa = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\"><path fill=\"currentColor\" d=\"M16 4a1 1 0 0 1 0 2 10 10 0 1 0 0 20 1 1 0 0 1 0 2 12 12 0 1 1 0-24z\"/></svg>";
                var msa = "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9 2.7c0-.356-.257-.665-.612-.688a6 6 0 1 0 0 11.975c.355-.022.612-.33.612-.686 0-.468-.437-.812-.904-.802L8 12.5a4.5 4.5 0 1 1 .096-8.999c.467.01.904-.334.904-.802Z\" fill=\"currentColor\"/></svg>";
                var nsa = "<svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6 3.5a2.5 2.5 0 0 0 0 5A.75.75 0 0 1 6 10a4 4 0 1 1 0-8 .75.75 0 0 1 0 1.5Z\" fill=\"currentColor\"/></svg>";
                var osa = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><defs><path id=\"_4132734882__a\" d=\"M4 21A9 9 0 0 0 4 3a1 1 0 1 0 0 2 7 7 0 1 1 0 14 1 1 0 0 0 0 2z\"/></defs><use fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(-1 0 0 1 16 0)\" xlink:href=\"#_4132734882__a\"/></svg>";
                __c.hw = __c.fw({
                    En: nsa,
                    small: msa,
                    medium: osa,
                    vc: lsa
                }, {
                    bga: "_6ti9-A",
                    zF: void 0
                });
                var psa;
                psa = (a) => {
                    var {
                        children: b,
                        show: c
                    } = a;
                    return b({
                        style: {},
                        ana: c
                    })
                };
                __c.iw = (a) => {
                    function b(k) {
                        switch (k) {
                            case bsa:
                                return Object.assign({}, g, c);
                            case csa:
                                return Object.assign({}, g, d);
                            case dsa:
                            case esa:
                                return Object.assign({}, g, f);
                            case fsa:
                                return Object.assign({}, g, e);
                            default:
                                throw new v(k);
                        }
                    }
                    var {
                        T1: c,
                        Xwa: d = c,
                        K4: e,
                        jxa: f = e,
                        style: g,
                        zK: h
                    } = a;
                    return function(k) {
                        var {
                            children: l,
                            show: m,
                            persist: n = !1
                        } = k;
                        return Hv(asa, { in: m,
                            timeout: h,
                            mountOnEnter: !n,
                            unmountOnExit: !n,
                            children: (q) => l({
                                style: b(q),
                                ana: !0
                            })
                        })
                    }
                };
                var rv;
                rv = new Map([
                    ["top-start", "top-end"],
                    ["top-end", "top-start"],
                    ["right-start", "left-start"],
                    ["right", "left"],
                    ["right-end", "left-end"],
                    ["bottom-end", "bottom-start"],
                    ["bottom-start", "bottom-end"],
                    ["left-end", "right-end"],
                    ["left", "right"],
                    ["left-start", "right-start"]
                ]);
                __c.jw = class extends Nv {
                    constructor(a) {
                        super(a);
                        this.s0 = 0;
                        this.MG = (b) => {
                            var c = this.props.open;
                            const d = this.props.Pu,
                                e = this.props.aC;
                            (d || e) && c && ((c = b && b.target) && c instanceof this.AV.Node && this.pD && this.pD.contains(c) ? e && e(b) : d && d(b))
                        };
                        this.fLa = (b) => this.pD = b;
                        this.bLa = (b) => {
                            this.BQ !== b && (this.BQ = b, sv(this), this.update())
                        };
                        this.cLa = (b) => {
                            this.oi !== b && (this.oi = b, sv(this), this.update())
                        };
                        this.DEa = () => {
                            this.props.Pu && window.setTimeout(this.props.Pu, 0)
                        };
                        Sv(this, [Dv(() => this.props.open, (b) => b && (this.s0 = 1 - this.s0)),
                            Dv(() => this.props.placement, () => {
                                tv(this);
                                sv(this)
                            })
                        ])
                    }
                    componentDidUpdate(a) {
                        __c.ja(a.Ey === this.props.Ey, "refObj must never be changed");
                        this.popper && !this.props.open ? tv(this) : this.update()
                    }
                    componentWillUnmount() {
                        tv(this)
                    }
                    update() {
                        this.popper && this.props.open && this.popper.scheduleUpdate()
                    }
                    get AV() {
                        var a, b;
                        return (null === (b = null === (a = this.pD) || void 0 === a ? void 0 : a.ownerDocument) || void 0 === b ? void 0 : b.defaultView) || window
                    }
                    render() {
                        const {
                            open: a,
                            level: b,
                            children: c,
                            content: d,
                            arrow: e,
                            tP: f = psa,
                            kxa: g,
                            IDa: h,
                            Pu: k,
                            aC: l,
                            Ae: m,
                            gs: n,
                            XXa: q,
                            FYa: r
                        } = this.props, x = (k || l) && a ? this.MG : void 0;
                        return Jv(__c.Iv, {
                            children: [c && Hv("div", {
                                className: wv({
                                    _8VoL_g: h,
                                    HJPvcg: g
                                }),
                                ref: this.fLa,
                                children: c
                            }), Hv(f, {
                                show: a,
                                children: ({
                                    style: y,
                                    ana: z
                                }) => Jv(__c.fe, {
                                    open: z,
                                    level: b,
                                    Ae: m,
                                    MG: x,
                                    children: [n && a && Hv("div", {
                                        className: wv("AKR7Dg", {
                                            KKk0xQ: "dark" === q
                                        }),
                                        onMouseDown: this.DEa
                                    }), Jv("div", {
                                        ref: this.cLa,
                                        className: wv("_1aH35Q", {
                                            qHnBdw: !a,
                                            yoNTzg: r
                                        }),
                                        style: y,
                                        children: [d, e && Hv("div", {
                                            ref: this.bLa,
                                            className: "cLQw1w",
                                            children: e
                                        })]
                                    }, this.s0)]
                                })
                            })]
                        })
                    }
                };
                __c.jw.defaultProps = {
                    placement: "top",
                    positionFixed: !1,
                    open: !0,
                    Ura: (a, b, c) => new gsa(a, b, c),
                    content: "",
                    direction: __c.Gd.direction
                };
                __c.jw = Fv([Tv], __c.jw);
                var qsa = {
                    colorBlack: "rgb(13, 18, 22)",
                    colorBlackA07: "rgba(64, 87, 109, 0.07)",
                    borderRadius: "4px",
                    gridBaseline: "8px",
                    colorNeutralForeLow: "var(--Do4LcA)",
                    colorNeutralLow: "var(--COXgsg)",
                    unthemed: "body:not(:global(.theme))",
                    textSmall: "_5RSqIg",
                    keygroup: "OnooSw",
                    key: "c-8JMw _5RSqIg",
                    small: "pYax-Q",
                    medium: "fO2LDQ",
                    square: "v3ioMw"
                };
                __c.lw = Ov(({
                    Hp: a,
                    platform: b,
                    compact: c = !1,
                    size: d = "medium",
                    className: e
                }) => {
                    const f = wv("c-8JMw _5RSqIg", qsa[d]);
                    if (c) return Hv(kw, {
                        className: wv(e, f),
                        children: lv(a, b)
                    });
                    a = kv(a, b);
                    return 1 === a.length ? Hv(kw, {
                        className: wv(e, f),
                        children: a[0]
                    }) : Hv("kbd", {
                        className: wv(e, "OnooSw"),
                        children: a.map((g) => Hv(kw, {
                            className: f,
                            children: g
                        }, g))
                    })
                });
                __c.lw.displayName = "Shortcut";
                var kw = ({
                    className: a,
                    children: b
                }) => Hv("kbd", {
                    className: wv(a, 1 === b.length && "v3ioMw"),
                    children: b
                });
                var vv = {
                    colorBlackA86: "rgba(13, 18, 22, 0.86)",
                    colorRed06: "rgb(219, 20, 54)",
                    vColorRedDark: "rgb(204, 40, 54)",
                    vColorRedLight: "rgb(255, 102, 115)",
                    vMonoBlack: "rgb(14, 19, 24)",
                    vMonoBlackA100: "rgba(14, 19, 24, 0.7)",
                    vMonoBlackA150: "rgba(17, 23, 29, 0.6)",
                    vMonoBlackA200: "rgba(30, 41, 51, 0.45)",
                    vMonoBlackA250: "rgba(43, 59, 74, 0.3)",
                    vMonoWhite: "rgb(255, 255, 255)",
                    vMonoWhiteA100: "rgba(255, 255, 255, 0.65)",
                    defaultDown: "(max-width: 599px)",
                    gridBaseline: "8px",
                    colorTypographyCritical: "var(--05tvjQ)",
                    colorTypographyPrimary: "var(--pUV7hA)",
                    colorTypographySecondary: "var(--FTyzZQ)",
                    colorTypographyTertiary: "var(--fSfh3A)",
                    unthemed: "body:not(:global(.theme))",
                    fontWeightRegular: "400",
                    fontWeightSemiBold: "600",
                    fontWeightBold: "700",
                    fontSizeTitleExtraExtraLarge: "6.4rem",
                    mobileFontSizeTitleExtraExtraLarge: "4.8rem",
                    fontSizeTitleExtraLarge: "4.8rem",
                    mobileFontSizeTitleExtraLarge: "3.2rem",
                    fontSizeTitleLarge: "3.2rem",
                    mobileFontSizeTitleLarge: "2.4rem",
                    fontSizeTitleMedium: "2.4rem",
                    mobileFontSizeTitleMedium: "2.0rem",
                    fontSizeTitleSmall: "1.8rem",
                    fontSizeTitleMicro: "1.2rem",
                    fontSizeExtraExtraLarge: "2.4rem",
                    mobileFontSizeExtraExtraLarge: "2.1rem",
                    fontSizeExtraLarge: "2.1rem",
                    mobileFontSizeExtraLarge: "1.8rem",
                    fontSizeLarge: "1.6rem",
                    fontSizeMedium: "1.4rem",
                    fontSizeSmall: "1.2rem",
                    fontSizeTiny: "1.1rem",
                    fontSizeMicro: "1.0rem",
                    textTitleExtraExtraLargeLineHeight: "1.3",
                    textTitleExtraLargeLineHeight: "1.3",
                    textTitleLargeLineHeight: "1.3",
                    textTitleMediumLineHeight: "1.3",
                    textTitleSmallLineHeight: "1.3",
                    textTitleMicroLineHeight: "1.6",
                    textExtraExtraLargeLineHeight: "1.6",
                    textExtraLargeLineHeight: "1.6",
                    textLargeLineHeight: "1.6",
                    textMediumLineHeight: "1.6",
                    textSmallLineHeight: "1.6",
                    textTinyLineHeight: "1.6",
                    textMicroLineHeight: "1.6",
                    systemFontStack: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif",
                    defaultFontStack: "\"Canva Sans\", \"Noto Sans Variable\", \"Noto Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif",
                    vietnameseFontStack: "\"Noto Sans Vietnamese\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif",
                    fontSmoothing: "fP4ZCw",
                    base: "l864gg",
                    lineClamp: "KZvVOQ",
                    ellipsis: "GHIRjw",
                    allowUserSelect: "upnMoA",
                    uppercase: "_07xgLQ",
                    textTitleExtraExtraLarge: "Kq7YBg",
                    textTitleExtraLarge: "_5b_6kw",
                    textTitleLarge: "_7jXbVQ",
                    textTitleMedium: "wp6-yg",
                    textTitleSmall: "lnCPoA",
                    textTitleMicro: "wa_T_A",
                    textExtraExtraLarge: "ohuHrQ",
                    textExtraLarge: "WjysGQ",
                    textLarge: "rNuqRA",
                    textMedium: "fFOiLQ",
                    textSmall: "_5RSqIg",
                    textTiny: "Qzh6AA",
                    textMicro: "UXYZvg",
                    textBoldLarge: "fT3APQ",
                    textBoldMedium: "tYI0Vw",
                    textBoldSmall: "_5NHXTA",
                    textBoldMicro: "J7-ayA",
                    textBoldExtraExtraLarge: "wvzwYA",
                    textBoldExtraLarge: "XcVJeA",
                    margin: "_2xcaIA",
                    inherit: "IjX3ng",
                    start: "_5Ob-nQ",
                    center: "ZSdr0w",
                    end: "IEHv4A",
                    primary: "fM_HdA",
                    secondary: "KzArew",
                    tertiary: "_-bsk3w",
                    critical: "_4BwarQ",
                    colorRedDark: "b_DPeA",
                    colorRedLight: "BUV09A",
                    monoBlack: "I-IZwQ",
                    monoBlackA100: "hSXbcQ",
                    monoBlackA150: "v0t5tg",
                    monoBlackA200: "_8FeN8Q",
                    monoBlackA250: "aCNZ7Q",
                    monoWhite: "siXeyA",
                    monoWhiteA100: "ARTIYw",
                    inheritColor: "CCfw7w"
                };
                var rsa, ssa, tsa, usa, vsa, wsa, xsa, ysa, zsa, Asa, Bsa, Csa, Dsa, Esa;
                __c.uv = Symbol("inherit");
                rsa = Ov(function(a) {
                    return Hv(xv, Object.assign({}, {
                        size: "xlarge",
                        variant: "title"
                    }, a))
                });
                ssa = Ov(function(a) {
                    return Hv(xv, Object.assign({}, {
                        size: "large",
                        variant: "title"
                    }, a))
                });
                tsa = Ov(function(a) {
                    return Hv(xv, Object.assign({}, {
                        size: "medium",
                        variant: "title"
                    }, a))
                });
                usa = Ov(function(a) {
                    return Hv(xv, Object.assign({}, {
                        size: "small",
                        variant: "title"
                    }, a))
                });
                vsa = Ov(function(a) {
                    return Hv(xv, Object.assign({}, {
                        size: "micro",
                        variant: "title"
                    }, a))
                });
                wsa = Ov(function(a) {
                    return Hv(xv, Object.assign({}, {
                        variant: "regular",
                        size: "xlarge"
                    }, a))
                });
                xsa = Ov(function(a) {
                    return Hv(xv, Object.assign({}, {
                        variant: "regular",
                        size: "large"
                    }, a))
                });
                ysa = Ov(function(a) {
                    return Hv(xv, Object.assign({}, {
                        variant: "bold",
                        size: "large"
                    }, a))
                });
                zsa = Ov(function(a) {
                    return Hv(xv, Object.assign({}, {
                        variant: "regular",
                        size: "medium"
                    }, a))
                });
                Asa = Ov(function(a) {
                    return Hv(xv, Object.assign({}, {
                        variant: "bold",
                        size: "medium"
                    }, a))
                });
                Bsa = Ov(function(a) {
                    return Hv(xv, Object.assign({}, {
                        variant: "regular",
                        size: "small"
                    }, a))
                });
                Csa = Ov(function(a) {
                    return Hv(xv, Object.assign({}, {
                        variant: "bold",
                        size: "small"
                    }, a))
                });
                Dsa = Ov(function(a) {
                    return Hv(xv, Object.assign({}, {
                        variant: "regular",
                        size: "micro"
                    }, a))
                });
                Esa = {
                    qMa: rsa,
                    nca: ssa,
                    rMa: tsa,
                    vra: usa,
                    sMa: vsa,
                    ZLa: wsa,
                    fMa: xsa,
                    Jba: ysa,
                    GI: zsa,
                    Rba: Asa,
                    YD: Bsa,
                    rra: Csa,
                    iMa: Dsa
                };
                __c.mw = Object.assign(Ov((a) => xv(a)), Esa);
                __c.mw.displayName = "Text";
                __c.nw = Ov((a) => xv(Object.assign({}, a, {
                    variant: "title"
                })));
                __c.nw.displayName = "Title";
                __c.ow = class {
                    constructor({
                        open: a = !1
                    } = {}) {
                        this.Ac = 0;
                        this.open = a
                    }
                };
                _dmr(__c.ow, "open");
                __c.pw = class {
                    YC(a, b) {
                        this.$_(a);
                        return new Promise((c) => {
                            yv(a, b, () => {
                                this.TW(a, !0);
                                c()
                            })
                        })
                    }
                    ox(a, b) {
                        this.$_(a);
                        yv(a, b, () => this.TW(a, !1))
                    }
                    TW({
                        state: a
                    }, b) {
                        a.open = b
                    }
                    $_({
                        state: a
                    }) {
                        window.clearTimeout(a.Ac)
                    }
                };
                _dma(__c.pw, "TW", null);
                var qw, rw;
                __c.tw = Zra((a, b) => Hv(sw, Object.assign({}, a, {
                    Al: b
                })));
                __c.tw.displayName = "Tooltip";
                var sw = qw = class extends Nv {
                    constructor() {
                        super(...arguments);
                        this.Bq = new __c.ow;
                        this.la = new __c.pw;
                        this.YC = () => !this.props.disabled && this.la.YC({
                            state: this.Bq
                        }, qw.zxa);
                        this.ox = () => this.la.ox({
                            state: this.Bq
                        }, qw.c2)
                    }
                    componentDidMount() {
                        this.dispose = Dv(() => this.props.disabled, (a) => {
                            a && this.ox()
                        })
                    }
                    componentWillUnmount() {
                        this.dispose && this.dispose()
                    }
                    render() {
                        const a = this.props.Al;
                        return this.props.$ta ? Hv("div", {
                            onMouseEnter: this.YC,
                            onMouseLeave: this.ox,
                            onMouseDown: this.ox,
                            ref: a,
                            children: Hv(uw,
                                Object.assign({}, this.props, {
                                    open: this.Bq.open
                                }))
                        }) : Hv("div", {
                            onMouseEnter: this.YC,
                            onMouseLeave: this.ox,
                            ref: a,
                            children: Hv(uw, Object.assign({}, this.props, {
                                open: this.Bq.open
                            }))
                        })
                    }
                };
                sw.defaultProps = {
                    disabled: !1,
                    $ta: !0
                };
                sw.zxa = 250;
                sw.c2 = 0;
                sw = qw = Fv([Tv], sw);
                __c.vw = rw = class extends Nv {
                    constructor() {
                        super(...arguments);
                        this.la = new __c.pw
                    }
                    render() {
                        var a = this.props,
                            b = Object.assign({}, a);
                        a = a.state;
                        b = (delete b.state, b);
                        return Hv(uw, Object.assign({}, b, {
                            open: a.open
                        }))
                    }
                    componentDidMount() {
                        Sv(this, (0, __c.Ev)(() => {
                            this.props.Yca && this.props.state.open && this.la.ox(this.props, rw.c2)
                        }))
                    }
                };
                __c.vw.defaultProps = {
                    Yca: !0
                };
                __c.vw.c2 = 2E3;
                __c.vw = rw = Fv([Tv], __c.vw);
                var ww = class extends Nv {
                    constructor() {
                        super(...arguments);
                        this.Ey = new Fsa(this);
                        this.info = this.props
                    }
                    componentDidMount() {
                        this.dispose = Dv(() => this.props, (a) => {
                            var {
                                open: b,
                                label: c,
                                placement: d,
                                direction: e,
                                x: f,
                                y: g
                            } = a;
                            return b && (this.info = {
                                label: c,
                                placement: d,
                                direction: e,
                                x: f,
                                y: g
                            })
                        })
                    }
                    componentWillUnmount() {
                        this.dispose && this.dispose()
                    }
                    render() {
                        const {
                            Ey: a,
                            props: {
                                arrow: b,
                                open: c
                            },
                            info: {
                                label: d,
                                placement: e = "right-end",
                                direction: f
                            }
                        } = this;
                        return Hv(uw, {
                            label: d,
                            open: c,
                            arrow: !!b,
                            Ey: a,
                            placement: e,
                            direction: f
                        })
                    }
                };
                _dmr(ww, "info");
                ww = Fv([Tv], ww);
                var Fsa = class {
                        constructor(a) {
                            this.kt = a
                        }
                        get left() {
                            return this.kt.info.x - xw
                        }
                        get top() {
                            return this.kt.info.y - zw
                        }
                        get width() {
                            return 2 * xw
                        }
                        get height() {
                            return 2 * zw
                        }
                        get right() {
                            return this.left + this.width
                        }
                        get bottom() {
                            return this.top + this.height
                        }
                        get clientWidth() {
                            return this.width
                        }
                        get clientHeight() {
                            return this.height
                        }
                        get x() {
                            return this.kt.info.x
                        }
                        get y() {
                            return this.kt.info.y
                        }
                        toJSON() {
                            return {
                                bottom: this.bottom,
                                height: this.height,
                                left: this.left,
                                right: this.right,
                                top: this.top,
                                width: this.width,
                                x: this.x,
                                y: this.y
                            }
                        }
                        getBoundingClientRect() {
                            return this
                        }
                    },
                    xw = 3 * __c.bw,
                    zw = 8 * __c.bw,
                    Gsa = class extends Nv {
                        render() {
                            const {
                                Yaa: a,
                                label: b,
                                textAlign: c = "start",
                                $W: d,
                                lineClamp: e
                            } = this.props, f = d ? Hv(__c.lw, {
                                className: "PuJTSg",
                                Hp: d,
                                size: "small"
                            }) : null, g = e ? [b] : b.trim().split("\n"), h = 1 === g.length ? Hv(__c.mw, {
                                size: "small",
                                tagName: "div",
                                lineClamp: e,
                                tone: "primary",
                                color: "monoWhite",
                                className: "_4GM3oQ",
                                Yb: c,
                                children: b
                            }) : Hv("div", {
                                className: "_4GM3oQ",
                                children: g.map((k, l) => Hv(__c.mw, {
                                        size: "small",
                                        Yb: c,
                                        tone: "primary",
                                        color: "monoWhite",
                                        children: k
                                    },
                                    l))
                            });
                            return Hv(__c.Od, {
                                light: "dark",
                                dark: "dark",
                                Hm: "dark",
                                AJ: "dark",
                                children: (k) => {
                                    ({
                                        className: k
                                    } = k);
                                    return Jv("div", {
                                        className: wv(k, "_69rf1g", {
                                            pHFEwQ: a
                                        }),
                                        role: "tooltip",
                                        children: [h, f]
                                    })
                                }
                            })
                        }
                    },
                    Hsa = class extends Nv {
                        render() {
                            return Jv("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                className: wv("lgzgPw", {
                                    eLup6g: this.props.Yaa
                                }),
                                children: [Hv("path", {
                                    d: "M15 9L10.3972 4.67335C9.04995 3.40695 6.95006 3.40695 5.60282 4.67335L1 9L15 9Z",
                                    className: "eDd_fA"
                                }), Hv("path", {
                                    d: "M15 9L10.3972 4.67335C9.04995 3.40695 6.95006 3.40695 5.60282 4.67335L1 9L2.46004 9L6.28773 5.40198C7.25004 4.4974 8.74996 4.4974 9.71228 5.40198L13.54 9L15 9Z",
                                    className: "U1qCZw"
                                })]
                            })
                        }
                    },
                    uw = class extends Nv {
                        render() {
                            var a = this.props,
                                b = Object.assign({}, a);
                            const c = a.children,
                                d = void 0 === a.placement ? "bottom" : a.placement,
                                e = a.open;
                            var f = void 0 === a.arrow ? !0 : a.arrow;
                            const g = a.Ey,
                                h = a.fq;
                            a = a.direction;
                            b = (delete b.children, delete b.placement, delete b.open, delete b.arrow,
                                delete b.Ey, delete b.fq, delete b.direction, b);
                            b = Hv(Gsa, Object.assign({}, {
                                Yaa: !0
                            }, b));
                            f = f ? Hv(Hsa, {
                                Yaa: !0
                            }) : null;
                            return Hv(__c.jw, {
                                placement: d,
                                level: 6,
                                fq: h,
                                content: b,
                                arrow: f,
                                tP: Isa,
                                open: e,
                                IDa: !0,
                                Ey: g,
                                direction: a,
                                children: c
                            })
                        }
                    },
                    Isa = __c.iw({
                        T1: {
                            opacity: 0
                        },
                        Xwa: {
                            opacity: 1
                        },
                        K4: {
                            opacity: 0
                        },
                        style: {
                            transition: "opacity 150ms ease-in-out"
                        },
                        zK: 150
                    });
                var Aw = {
                    fadeTransition: "0.15s ease-in-out",
                    colorBlackA60: "rgba(17, 23, 29, 0.6)",
                    colorBlackA70: "rgba(13, 18, 22, 0.7)",
                    colorBlackA86: "rgba(13, 18, 22, 0.86)",
                    colorPurple: "rgb(125, 42, 232)",
                    colorPurpleDark: "rgb(103, 24, 207)",
                    colorPurpleLight: "rgb(141, 57, 250)",
                    colorRed05: "rgb(255, 71, 87)",
                    colorRed06: "rgb(219, 20, 54)",
                    colorRed07: "rgb(179, 0, 36)",
                    monoBlack: "rgb(14, 19, 24)",
                    monoBlackA100: "rgba(14, 19, 24, 0.7)",
                    monoBlackA150: "rgba(17, 23, 29, 0.6)",
                    monoBlackA250: "rgba(43, 59, 74, 0.3)",
                    monoBlackA300: "rgba(53, 71, 90, 0.2)",
                    monoBlackA400: "rgba(57, 76, 96, 0.15)",
                    monoBlackA500: "rgba(64, 87, 109, 0.07)",
                    monoGrey: "rgb(41, 48, 57)",
                    monoWhite: "rgb(255, 255, 255)",
                    monoWhiteA100: "rgba(255, 255, 255, 0.65)",
                    monoWhiteA250: "rgba(255, 255, 255, 0.2)",
                    monoWhiteA300: "rgba(255, 255, 255, 0.15)",
                    monoWhiteA400: "rgba(255, 255, 255, 0.1)",
                    monoWhiteA50: "rgba(255, 255, 255, 0.95)",
                    monoWhiteA75: "rgba(255, 255, 255, 0.85)",
                    largeSize: "32px",
                    mediumSize: "24px",
                    smallSize: "16px",
                    tinySize: "12px",
                    borderRadius: "4px",
                    gridBaseline: "8px",
                    mediumShadow: "TfRV3Q",
                    colorBackground4: "var(--0NEIBA)",
                    colorContrast: "var(--S_zKBQ)",
                    colorContrastActive: "var(--voBvjA)",
                    colorContrastDisabled: "var(--VGxehA)",
                    colorContrastFore: "var(--QErhlg)",
                    colorContrastForeDisabled: "var(--6kDNlA)",
                    colorContrastHover: "var(--fPN_wg)",
                    colorCritical: "var(--IKngdQ)",
                    colorCriticalActive: "var(--9xoqAg)",
                    colorCriticalDisabled: "var(--rxOvlQ)",
                    colorCriticalFore: "var(--6hn8OQ)",
                    colorCriticalForeDisabled: "var(--pEA5jw)",
                    colorCriticalHover: "var(--IIHy3Q)",
                    colorPrimary: "var(--_mHLrA)",
                    colorPrimaryActive: "var(--t-i8hw)",
                    colorPrimaryDisabled: "var(--6899sQ)",
                    colorPrimaryFore: "var(--4Yobmg)",
                    colorPrimaryForeDisabled: "var(--9QR_hg)",
                    colorPrimaryHover: "var(--s0dOYA)",
                    colorSecondary: "var(--K12xjw)",
                    colorSecondaryActive: "var(--QYA_-A)",
                    colorSecondaryDisabled: "var(--ctGD3w)",
                    colorSecondaryFore: "var(--_T63JA)",
                    colorSecondaryForeDisabled: "var(--oXjekw)",
                    colorSecondaryHover: "var(--B2THfg)",
                    colorTertiary: "var(--sz5W9A)",
                    colorTertiaryActive: "var(--H8nEqw)",
                    colorTertiaryDisabled: "var(--zuehrg)",
                    colorTertiaryFore: "var(--fgALUw)",
                    colorTertiaryForeDisabled: "var(--n4L1sw)",
                    colorTertiaryHover: "var(--8ZR-UA)",
                    colorTypographyLink: "var(--tkbyNg)",
                    colorTypographyLinkActive: "var(--3zRlag)",
                    colorTypographyLinkHover: "var(--elFFpw)",
                    colorTypographyPrimary: "var(--pUV7hA)",
                    colorTypographySecondary: "var(--FTyzZQ)",
                    colorTypographyTertiary: "var(--fSfh3A)",
                    unthemed: "body:not(:global(.theme))",
                    fontWeightRegular: "400",
                    textBoldMedium: "tYI0Vw",
                    textTiny: "Qzh6AA",
                    borderWidth: "2px",
                    googleBgSize: "20px",
                    circleShapeButtonSizeXsmall: "32px",
                    circleShapeButtonSizeSmall: "40px",
                    circleShapeButtonSizeMedium: "48px",
                    circleShapeButtonSizeLarge: "56px",
                    circleShapeButtonWrapperWidthXsmall: "48px",
                    circleShapeButtonWrapperWidthSmall: "56px",
                    circleShapeButtonWrapperWidthMedium: "64px",
                    circleShapeButtonWrapperWidthLarge: "72px",
                    minTouchableArea: "44px",
                    base: "_1QoxDw",
                    basic: "CA2Rbg",
                    button: "Qkd66A tYI0Vw",
                    animate: "uRvRjQ",
                    expandClickableAreaContainer: "cAKTHA CA2Rbg",
                    hideOutline: "o4TrkA",
                    noMinWidth: "cclg9A",
                    tiny: "q3o1Qw",
                    tinyWidth: "IS_6ew",
                    xsmall: "bpNGqA",
                    xsmallWidth: "L21ACg",
                    small: "HySjhA",
                    smallWidth: "pgaA2w",
                    text: "_38oWvQ",
                    medium: "lsXp-w",
                    mediumWidth: "_3AH3gw",
                    large: "bo4Vsg",
                    largeWidth: "_b-1Qw",
                    stretchWrapper: "Z1EmlA",
                    stretch: "ubW6qw",
                    startAlign: "fgQwew",
                    centerAlign: "cwOZMg",
                    endAlign: "_dzQow",
                    disabled: "ZivLog",
                    startIcon: "Eph8Hg",
                    endIcon: "jQBr6A",
                    iconWrapper: "TcNIhA",
                    elevatedWrapper: "_-nVMrw TfRV3Q",
                    tinyIcon: "Hp1Ddg",
                    smallIcon: "z6Gm7g",
                    mediumIcon: "VvwWbQ",
                    largeIcon: "h7OXmQ",
                    loading: "vTpjSg",
                    loadingIconWrapper: "_1oCVHg TcNIhA",
                    primary: "zKTE_w Qkd66A tYI0Vw",
                    on: "Di-DSA",
                    hoverSupported: "zQlusQ",
                    active: "Fdttyw",
                    dark: "Ro5rvA",
                    primaryNeutral: "EQcUPw",
                    secondary: "NT2yCg Qkd66A tYI0Vw",
                    secondaryNeutral: "N5T7iw",
                    tertiary: "YPTJew Qkd66A tYI0Vw",
                    topIcon: "uxzGww Qzh6AA",
                    tertiaryNeutral: "sdp-vQ",
                    contrast: "vwGvLA Qkd66A tYI0Vw",
                    critical: "JJl3MA Qkd66A tYI0Vw",
                    linkButton: "_8GAfQw Qkd66A tYI0Vw",
                    subtleLinkButton: "Q-VY-g Qkd66A tYI0Vw",
                    circleShape: "G97FoQ",
                    circleShapeWrapper: "sqQRZQ",
                    circleShapeWrapperXsmall: "cy_gNg",
                    circleShapeWrapperSmall: "ukOaGA",
                    circleShapeWrapperMedium: "R4mVEg",
                    circleShapeWrapperLarge: "rPqAFA",
                    circleButtonLabel: "RPdvnA",
                    anchor: "DNpAZA",
                    disabledContainer: "ae5JRAg"
                };
                var Bw = class extends Nv {
                    constructor() {
                        super(...arguments);
                        this.onPointerUp = (a) => {
                            this.kH || zv(this, a);
                            this.CE();
                            a.preventDefault()
                        };
                        this.onPointerLeave = (a) => {
                            this.CE();
                            a.preventDefault()
                        };
                        this.pGa = (a) => {
                            a.preventDefault();
                            return !1
                        }
                    }
                    componentWillUnmount() {
                        this.CE()
                    }
                    CE() {
                        this.xN && (window.clearTimeout(this.xN), this.xN = void 0);
                        this.kH && (window.clearInterval(this.kH), this.kH = void 0)
                    }
                    onPointerDown(a) {
                        var b = this.props.iW;
                        const c = "fast" === b ? 40 : 100;
                        b = "fast" === b ? 350 : 450;
                        this.CE();
                        this.xN = window.setTimeout(() => {
                            Wra(() => {
                                zv(this, a);
                                this.kH = window.setInterval(() => {
                                    zv(this, a)
                                }, c)
                            })
                        }, b)
                    }
                    render() {
                        return "none" !== this.props.iW && window && "PointerEvent" in window ? this.props.children({
                            onPointerDown: this.onPointerDown,
                            onPointerUp: this.onPointerUp,
                            onPointerLeave: this.onPointerLeave,
                            onContextMenu: this.pGa,
                            onClick: void 0
                        }) : this.props.children({
                            onClick: this.props.onClick
                        })
                    }
                };
                Bw.defaultProps = {
                    iW: "none"
                };
                _dmr(Bw, "xN");
                _dmr(Bw, "kH");
                _dmb(Bw, "CE", null);
                _dmb(Bw, "onPointerDown", null);
                Bw = Fv([Tv], Bw);
                var Cw = class {
                    constructor() {
                        this.aX = !0
                    }
                    enable() {
                        this.aX = !1
                    }
                };
                _dmr(Cw, "aX");
                _dma(Cw, "enable", null);
                var Dw, Ew, Pra, Jsa;
                Dw = (a) => {
                    const {
                        children: b,
                        xo: c = "start",
                        WU: d,
                        icon: e
                    } = a, f = [];
                    let g = null;
                    const h = {
                        "aria-hidden": a.loading || void 0
                    };
                    e && (g = Hv("span", Object.assign({}, {
                        className: "TcNIhA"
                    }, h, {
                        children: Hv(e, {
                            size: a.Mg || "medium"
                        })
                    }), "icon"));
                    "start" !== c && "top" !== c || f.push(g);
                    b && f.push(d ? b : Hv("span", Object.assign({}, {
                        className: "_38oWvQ"
                    }, h, {
                        children: b
                    }), "content"));
                    "end" === c && f.push(g);
                    a.loading && f.push(Jv("span", {
                        className: "_1oCVHg TcNIhA",
                        children: [Hv(__c.hw, {
                                size: a.Mg || "medium"
                            }),
                            Hv(__c.aw, {
                                ariaLive: "assertive",
                                children: a.kCa || __c.H("2I+oCQ")
                            })
                        ]
                    }, "loading"));
                    return f
                };
                Ew = (a, b) => {
                    var {
                        children: c,
                        Yb: d = "center",
                        on: e,
                        loading: f,
                        disabled: g,
                        stretch: h,
                        variant: k,
                        wha: l,
                        xo: m,
                        theme: n,
                        shape: q,
                        size: r,
                        icon: x,
                        Mg: y
                    } = b;
                    b = __c.Bv({
                        children: c,
                        Mg: y,
                        size: r,
                        variant: k
                    });
                    var {
                        children: z,
                        stretch: B,
                        variant: F,
                        icon: J
                    } = {
                        children: c,
                        variant: k,
                        stretch: h,
                        icon: x
                    };
                    var N = !z && !!J && !B && -1 === ["subtleLinkButton"].indexOf(F);
                    return wv("_1QoxDw", {
                        DNpAZA: a,
                        "Qkd66A tYI0Vw": "basic" !== k,
                        o4TrkA: l,
                        "uxzGww Qzh6AA": "top" === m,
                        Hp1Ddg: "tiny" === y,
                        z6Gm7g: "small" === y,
                        VvwWbQ: x && !y || "medium" ===
                            y,
                        h7OXmQ: "large" === y,
                        Eph8Hg: x && (!m || "start" === m),
                        jQBr6A: x && "end" === m,
                        cclg9A: N,
                        G97FoQ: "circle" === q
                    }, Aw[k], b && Aw[b], {
                        "Di-DSA": e,
                        ubW6qw: h,
                        vTpjSg: f,
                        ZivLog: g,
                        fgQwew: "start" === d,
                        cwOZMg: "center" === d,
                        _dzQow: "end" === d,
                        zQlusQ: __c.pv(),
                        Ro5rvA: "dark" === n,
                        uRvRjQ: __c.Gd.ma,
                        IS_6ew: "tiny" === b && N,
                        pgaA2w: "small" === b && N,
                        _3AH3gw: "medium" === b && N,
                        "_b-1Qw": "large" === b && N
                    })
                };
                Pra = ["menuitemradio", "menuitemcheckbox", "radio", "switch"];
                __c.Fw = Tv(function(a) {
                    const b = a.yMa || Jsa,
                        c = Uv(qv(a.Cr), a.Yz);
                    (0, __c.Lv)(() => b.enable(), [b]);
                    const d = a.disabled || a.ariaDisabled || "submit" === a.type && b.aX,
                        e = d || a.loading,
                        f = Ew(!1, Object.assign({}, a, {
                            wha: mv.lh,
                            on: a.active,
                            disabled: d
                        })),
                        g = a.X1 ? Hv("span", {
                            className: f,
                            children: Dw(a)
                        }) : Dw(a);
                    return Hv(Bw, {
                        onClick: (h) => {
                            var k;
                            d || (null === (k = a.onClick) || void 0 === k ? void 0 : k.call(a, h))
                        },
                        iW: a.iW,
                        disabled: e,
                        children: (h) => Hv("button", Object.assign({}, {
                            id: a.id,
                            onMouseDown: (k) => {
                                var l;
                                return mv.ci("mouse") && (
                                    null === (l = a.onMouseDown) || void 0 === l ? void 0 : l.call(a, k))
                            },
                            className: wv(a.X1 ? "cAKTHA CA2Rbg" : f, a.className),
                            form: a.form,
                            onMouseUp: a.onMouseUp,
                            onMouseEnter: a.onMouseEnter,
                            onMouseLeave: a.onMouseLeave,
                            onContextMenu: a.onContextMenu,
                            onBlur: a.onBlur,
                            onFocus: a.onFocus,
                            onDragStart: a.onDragStart,
                            onDragEnd: a.onDragEnd,
                            "aria-disabled": a.ariaDisabled ? e : void 0,
                            disabled: a.ariaDisabled ? void 0 : e,
                            type: a.type || "button"
                        }, Av(a), h, {
                            ref: c,
                            children: g
                        }))
                    })
                });
                __c.Gw = Tv(function(a) {
                    const b = Uv(qv(a.Cr), a.Yz),
                        c = "_blank" === a.target,
                        d = c && !a.rel ? "noopener" : a.rel,
                        e = Ew(!0, Object.assign({}, a, {
                            wha: mv.lh,
                            on: a.active
                        })),
                        f = a.X1 ? Hv("span", {
                            className: e,
                            children: Dw(a)
                        }) : Dw(a);
                    let g;
                    a.disabled || (g = {
                        onClick: a.onClick,
                        onDragStart: a.onDragStart,
                        onDragEnd: a.onDragEnd,
                        onFocus: a.onFocus,
                        onBlur: a.onBlur,
                        onContextMenu: a.onContextMenu,
                        onMouseEnter: a.onMouseEnter,
                        onMouseLeave: a.onMouseLeave,
                        href: a.href,
                        target: a.target,
                        rel: d,
                        download: a.download,
                        draggable: a.draggable
                    });
                    return Jv("a", Object.assign({}, {
                        id: a.id,
                        ref: b
                    }, g, {
                        className: wv(a.X1 ? "cAKTHA CA2Rbg" : e, a.className)
                    }, Av(Object.assign({}, {
                        type: "link"
                    }, a)), {
                        children: [f, c && Hv(__c.aw, {
                            tagName: "span",
                            children: __c.H("VSJwUw")
                        })]
                    }))
                });
                __c.Ksa = Tv(function(a) {
                    var b = a.disabled ? Hv("div", {
                        className: "ae5JRAg",
                        children: Hv(__c.Fw, Object.assign({}, a, {
                            od: void 0,
                            ariaLabel: a.ariaLabel || a.od
                        }))
                    }) : Hv(__c.Fw, Object.assign({}, a, {
                        od: void 0,
                        ariaLabel: a.ariaLabel || a.od
                    }));
                    b = Hv(__c.tw, {
                        label: a.od,
                        $W: a.Fn,
                        disabled: a.ei,
                        placement: a.X$,
                        children: b
                    });
                    return a.stretch ? Hv("div", {
                        className: "Z1EmlA",
                        children: b
                    }) : b
                });
                __c.Lsa = Tv(function(a) {
                    const b = a.disabled ? Hv("div", {
                        className: "ae5JRAg",
                        children: Hv(__c.Gw, Object.assign({}, a, {
                            od: void 0,
                            ariaLabel: a.ariaLabel || a.od
                        }))
                    }) : Hv(__c.Gw, Object.assign({}, a, {
                        od: void 0,
                        ariaLabel: a.ariaLabel || a.od
                    }));
                    return Hv(__c.tw, {
                        label: a.od,
                        $W: a.Fn,
                        disabled: a.ei,
                        placement: a.X$,
                        children: b
                    })
                });
                __c.Hw = Tv(function(a) {
                    return a.gwa && "circle" === a.shape && "contrast" !== a.variant ? Hv("div", {
                        className: wv("_-nVMrw TfRV3Q", a.MJ),
                        children: a.children
                    }) : Hv(__c.Iv, {
                        children: a.children
                    })
                });
                Jsa = new Cw;
                var Msa = "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.06 5.94a1.5 1.5 0 0 1 0 2.12l-18 18a1.5 1.5 0 1 1-2.12-2.12l18-18a1.5 1.5 0 0 1 2.12 0Z\" fill=\"currentColor\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.94 5.94a1.5 1.5 0 0 1 2.12 0l18 18a1.5 1.5 0 1 1-2.12 2.12l-18-18a1.5 1.5 0 0 1 0-2.12Z\" fill=\"currentColor\"/></svg>";
                var Nsa = "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.818 4.05a.75.75 0 0 0-1.06 1.06l3.181 3.183-3.182 3.182a.75.75 0 1 0 1.061 1.06L8 9.355l3.182 3.182a.75.75 0 1 0 1.06-1.061L9.062 8.293l3.182-3.182a.75.75 0 0 0-1.061-1.06L8 7.231 4.818 4.05Z\" fill=\"currentColor\"/></svg>";
                var Osa = "<svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.525 2.464a.75.75 0 0 0-1.06 1.061L4.938 6 2.464 8.475a.75.75 0 1 0 1.061 1.06L6 7.062l2.475 2.475a.75.75 0 1 0 1.06-1.061L7.062 6l2.475-2.475a.75.75 0 0 0-1.061-1.06L6 4.938 3.525 2.464Z\" fill=\"currentColor\"/></svg>";
                var Psa = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"m13.06 12.15 5.02-5.03a.75.75 0 1 0-1.06-1.06L12 11.1 6.62 5.7a.75.75 0 1 0-1.06 1.06l5.38 5.38-5.23 5.23a.75.75 0 1 0 1.06 1.06L12 13.2l4.88 4.87a.75.75 0 1 0 1.06-1.06l-4.88-4.87z\"/></svg>";
                __c.Iw = __c.gw({
                    En: Osa,
                    small: Nsa,
                    medium: Psa,
                    vc: Msa
                });
                __c.Jw = E(() => ({}));
                __c.Kw = E(() => ({}));
                __c.Lw = E(() => ({}));
                __c.Mw = E(() => ({}));
                __c.Nw = E(() => ({}));
                __c.Ow = E(() => ({}));
                __c.Qsa = E(() => ({
                    H: I(1, "WebviewCapabilities"),
                    getCapabilities: I(2, "getCapabilities")
                }));
                __c.Rsa = E(() => ({
                    H: I(1, "HostCapabilitiesService"),
                    getCapabilities: I(2, "getCapabilities")
                }));
                __c.Pw = E(() => ({}));
                __c.Qw = E(() => ({
                    Xu: I(1, "CanvaApiService"),
                    request: I(2, "request"),
                    cma: M(3)
                }));
                __c.Rw = E(() => ({
                    H: I(1),
                    fN: I(2)
                }));
                __c.Sw = E(() => ({
                    H: I(1),
                    sU: I(2),
                    fza: M(4),
                    JUa: M(6),
                    XOa: M(7)
                }));
                __c.Tw = E(() => ({
                    H: I(1),
                    L2: I(2),
                    publish: I(3),
                    yC: M(4)
                }));
                __c.Uw = E(() => ({
                    H: I(1),
                    exit: I(2),
                    Wq: I(3),
                    reload: I(4)
                }));
                __c.Vw = E(() => ({
                    H: I(1),
                    yN: I(2),
                    bza: M(3)
                }));
                __c.Ww = E(() => ({
                    H: I(1),
                    download: I(2),
                    upload: I(3),
                    lSa: M(4),
                    mSa: M(5)
                }));
                __c.Xw = E(() => ({
                    Xu: I("pluginName", 1),
                    LJa: I("subscribeToC4w", 2)
                }));
                __c.Yw = E(() => ({
                    H: I(1),
                    jn: I(2),
                    Zp: I(3),
                    us: M(19),
                    QB: I(4),
                    Fu: I(5),
                    RB: I(6),
                    Px: I(7),
                    Nx: I(9),
                    Ox: I(10),
                    ls: M(17),
                    rj: M(11),
                    Yp: M(12),
                    Eu: M(18),
                    QU: M(20),
                    hn: M(13),
                    vs: M(14),
                    gL: M(15),
                    rs: M(16)
                }));
                __c.Zw = E(() => ({
                    H: I(1),
                    PIa: I(3),
                    RJa: I(4),
                    EPa: M(5),
                    DPa: M(6)
                }));
                __c.$w = E(() => ({
                    Xu: I(1),
                    Hxa: I(2),
                    Ixa: M(3)
                }));
                __c.ax = E(() => ({
                    H: I(1),
                    zIa: I(2)
                }));
                var Ssa = E(() => ({
                    H: I(1),
                    aPa: M(11),
                    rQa: I(2),
                    sQa: M(10),
                    UUa: I(3),
                    vPa: I(4),
                    ij: I(5),
                    $Xa: M(7),
                    aYa: M(12),
                    bYa: M(13),
                    JYa: M(9),
                    hZa: M(8)
                }));
                var Tsa = E(() => ({
                    H: I(1),
                    yN: I(2),
                    RUa: I(3),
                    ZOa: M(4),
                    bza: M(5)
                }));
                var Usa = E(() => ({
                    H: I(1),
                    N3a: I(2),
                    KYa: M(3)
                }));
                var Vsa = E(() => ({
                    H: I(1),
                    LYa: I(2)
                }));
                __c.bx = E(() => ({
                    H: I(1),
                    Qya: I(2),
                    NUa: M(3),
                    kZa: M(4),
                    jZa: M(5),
                    getCapabilities: M(6)
                }));
                __c.cx = E(() => ({
                    H: I(1),
                    UJa: I(2),
                    getCapabilities: M(3),
                    k5a: M(4)
                }));
                var Wsa = E(() => ({
                    H: I(1),
                    $la: I(2)
                }));
                __c.dx = E(() => ({
                    H: I(1),
                    Rx: I(2),
                    SU: M(3)
                }));
                __c.ex = E(() => ({
                    H: I(1),
                    aza: I(2),
                    notifyComplete: I(3)
                }));
                __c.fx = E(() => ({
                    H: I(1),
                    qDa: M(2),
                    rDa: M(3),
                    pDa: M(4),
                    tYa: M(7),
                    O5: M(8),
                    AYa: M(9),
                    jn: I(5),
                    Zp: I(6),
                    pYa: M(10),
                    oYa: M(11),
                    sYa: M(12),
                    nYa: M(13),
                    yYa: M(14),
                    zYa: M(15)
                }));
                __c.gx = E(() => ({
                    H: I(1),
                    XGa: I(2),
                    WBa: I(3),
                    WGa: I(4),
                    VGa: I(5),
                    bsa: I(6),
                    kua: I(7),
                    SUa: M(8),
                    u_a: M(9),
                    w_a: M(10),
                    v_a: M(11),
                    UWa: M(12)
                }));
                __c.hx = E(() => ({
                    H: I(1),
                    Jxa: I(2),
                    d8: I(3),
                    UGa: I(4),
                    o2: I(5),
                    M2: I(6),
                    fUa: M(7)
                }));
                __c.ix = E(() => ({
                    H: I(1),
                    CHa: I(2),
                    Fya: I(3),
                    uta: I(4),
                    QUa: M(5),
                    g6a: M(6)
                }));
                __c.jx = E(() => ({
                    H: I(1),
                    KDa: I(2)
                }));
                __c.kx = E(() => ({
                    H: I(1),
                    post: I(2)
                }));
                __c.lx = E(() => ({
                    H: I(1),
                    nDa: I(2),
                    oDa: I(3)
                }));
                __c.mx = E(() => ({
                    H: I(1),
                    login: I(2),
                    Xya: I(3),
                    xta: M(4)
                }));
                var Xsa = E(() => ({
                    H: I(1),
                    Q3a: I(2)
                }));
                __c.nx = E(() => ({
                    H: I(1),
                    kd: I(2),
                    sM: I(3),
                    N5: I(4),
                    K5: I(5),
                    Fja: M(18),
                    Gja: M(6),
                    J5: M(7),
                    L5: M(8),
                    Hja: M(9),
                    Nja: M(11),
                    Lja: M(12),
                    O5: M(13),
                    Mja: M(14),
                    RU: M(15),
                    Ija: M(17),
                    Jja: M(16)
                }));
                __c.ox = E(() => ({
                    H: I(1),
                    FAa: I(2),
                    xGa: I(3),
                    Jya: I(4),
                    vta: I(5),
                    KUa: M(6)
                }));
                __c.px = E(() => ({
                    H: I(1),
                    Vya: I(2)
                }));
                __c.qx = E(() => ({
                    H: I(1),
                    DDa: I(2),
                    sM: I(3),
                    iYa: M(8),
                    BDa: I(4),
                    xYa: M(15),
                    qYa: M(10),
                    mYa: M(17),
                    CDa: I(5),
                    RU: M(14),
                    mDa: I(6),
                    vYa: M(7),
                    uYa: M(9),
                    kYa: M(11),
                    jYa: M(12),
                    lYa: M(13),
                    wYa: M(16),
                    rYa: M(18)
                }));
                __c.rx = E(() => ({
                    H: I(1),
                    pJa: I(2),
                    Gya: I(3)
                }));
                __c.sx = E(() => ({
                    H: I(1),
                    tDa: I(2),
                    sDa: I(3),
                    wDa: I(5),
                    vDa: I(4),
                    uDa: M(6)
                }));
                __c.tx = E(() => ({
                    H: I(1),
                    Vva: I(2),
                    Uva: M(3),
                    FUa: M(4),
                    IUa: M(5),
                    N4a: M(6),
                    nSa: M(7)
                }));
                __c.ux = E(() => ({
                    H: I(1),
                    rJa: I(2),
                    cza: I(3)
                }));
                var Ysa = E(() => ({
                    H: I(1),
                    I3a: I(2)
                }));
                __c.vx = E(() => ({
                    H: I(1),
                    OGa: I(2),
                    getBlob: I(3),
                    pva: I(4)
                }));
                var Zsa = E(() => ({
                    H: I(1),
                    capture: I(2),
                    finish: I(3),
                    cancel: I(4)
                }));
                __c.wx = E(() => ({
                    H: I(1),
                    hHa: I(2),
                    baa: I(3)
                }));
                __c.xx = E(() => ({
                    H: I(1),
                    kd: M(2),
                    Ze: M(3),
                    Qx: M(6),
                    $p: M(4),
                    ns: M(5),
                    Ql: M(7),
                    qs: M(9),
                    Mx: M(10),
                    Lx: M(11)
                }));
                __c.yx = E(() => ({
                    H: I(1),
                    cGa: M(2),
                    dGa: M(3)
                }));
                __c.zx = E(() => ({
                    H: I(1),
                    JF: M(2),
                    cT: M(3)
                }));
                __c.Ax = E(() => ({
                    H: I(1),
                    fN: I(2),
                    Y7: M(3),
                    Z7: M(4)
                }));
                __c.Bx = E(() => ({
                    H: I(1),
                    fN: I(2),
                    Y7: M(3),
                    Z7: M(4)
                }));
                __c.Cx = E(() => ({
                    H: I(1),
                    LV: I(2),
                    VS: I(3),
                    zH: I(4)
                }));
                __c.Dx = E(() => ({
                    H: I(1),
                    qJ: I(2),
                    Pga: I(3)
                }));
                __c.Ex = E(() => ({
                    H: I(1),
                    Rua: M(2)
                }));
                __c.Fx = E(() => ({
                    H: I(1),
                    hx: I(2),
                    ow: I(3),
                    GC: I(4),
                    mL: M(5),
                    lH: I(6),
                    lL: M(7)
                }));
                __c.Gx = E(() => ({
                    H: I(1),
                    dL: I(2),
                    NKa: M(3)
                }));
                __c.Hx = E(() => ({
                    H: I(1),
                    tFa: I(2),
                    EGa: M(3),
                    DGa: M(4)
                }));
                __c.Ix = E(() => ({
                    H: I(1),
                    AIa: I(2)
                }));
                __c.Jx = E(() => ({
                    H: I(1),
                    Rm: I(2)
                }));
                __c.Kx = E(() => ({
                    H: I(1),
                    BIa: I(2),
                    showNotification: M(3)
                }));
                __c.Lx = E(() => ({
                    H: I(1),
                    Ota: I(2),
                    MAa: I(3)
                }));
                __c.Mx = E(() => ({
                    H: I(1),
                    LQ: I(2),
                    Wya: I(3)
                }));
                __c.Nx = E(() => ({
                    H: I(1),
                    sKa: I(2)
                }));
                __c.Ox = E(() => ({
                    H: I(1),
                    Iua: I(2),
                    wva: I(3),
                    dIa: M(4),
                    DYa: M(5),
                    CYa: M(6)
                }));
                __c.Px = E(() => ({
                    H: I(1),
                    oxa: I(2)
                }));
                __c.Qx = E(() => ({
                    H: I(1),
                    tIa: I(2),
                    MYa: M(3),
                    kVa: M(4),
                    j4a: M(5)
                }));
                __c.Rx = E(() => ({
                    H: I(1),
                    LDa: I(2)
                }));
                __c.Sx = E(() => ({
                    H: I(1),
                    Kxa: I(2),
                    d8: I(3),
                    YGa: I(4),
                    o2: I(5),
                    M2: I(6),
                    Pya: I(7),
                    Iya: I(8)
                }));
                __c.Tx = E(() => ({
                    H: I(1),
                    hGa: I(2)
                }));
                var $sa = E(() => ({
                    $: C(1, __c.ok),
                    uo: C(2, __c.Qw),
                    Nha: C(3, __c.Rw),
                    sU: C(4, __c.Sw),
                    PU: C(5, __c.Tw),
                    Qb: __c.A(6, __c.Uw),
                    YB: C(7, __c.Vw),
                    Ula: C(8, __c.Ww),
                    Eja: C(9, __c.Xw),
                    vl: C(10, __c.Yw),
                    Pc: C(11, __c.Zw),
                    Rca: C(13, __c.$w),
                    Koa: C(14, __c.Os),
                    zna: C(15, __c.ax),
                    SJa: C(16, Ssa),
                    Wza: C(17, Tsa),
                    NCa: C(18, Usa),
                    QDa: C(19, Vsa),
                    aja: C(20, __c.bx),
                    D_: C(21, __c.cx),
                    KLa: C(22, Wsa),
                    Mw: C(23, __c.dx),
                    bja: C(24, __c.ex),
                    kja: C(25, __c.fx),
                    eha: C(26,
                        __c.gx),
                    Lca: C(27, __c.hx),
                    Xfa: C(28, __c.ix),
                    auth: C(29, __c.jx),
                    Uca: C(30, __c.kx),
                    sda: C(31, __c.lx),
                    pna: C(32, __c.mx),
                    localization: C(33, Xsa),
                    Bha: C(34, __c.nx),
                    aga: C(35, __c.ox),
                    Dja: C(37, __c.px),
                    Rma: C(38, __c.qx),
                    cga: C(39, __c.rx),
                    uha: C(40, __c.sx),
                    download: C(41, __c.tx),
                    Ima: C(42, __c.ux),
                    Wsa: C(43, Ysa),
                    jda: C(44, __c.vx),
                    uCa: C(45, Zsa),
                    Nca: C(46, __c.wx),
                    sE: C(47, __c.xx),
                    pha: C(48, __c.yx),
                    tT: C(49, __c.zx),
                    Dca: C(50, __c.Ax),
                    $oa: C(52,
                        __c.Bx),
                    orientation: C(53, __c.Cx),
                    Cha: C(54, __c.Dx),
                    Roa: C(55, __c.Ex),
                    sx: C(56, __c.Fx),
                    Gca: C(57, __c.Gx),
                    Kca: C(58, __c.Hx),
                    theme: C(59, __c.Ix),
                    performance: C(60, __c.Jx),
                    notification: C(61, __c.Kx),
                    VZ: C(62, __c.Lx),
                    Zfa: C(63, __c.Mx),
                    wakeLock: C(64, __c.Nx),
                    Qoa: C(65, __c.Ox),
                    Ona: C(66, __c.Px),
                    Jca: C(67, __c.Qx),
                    pea: C(68, __c.Rx),
                    Mca: C(69, __c.Sx),
                    jga: C(70, __c.Tx)
                }));
                __c.Ux = E(() => ({
                    Eb: __c.A(1, $sa)
                }));
                __c.Vx = class {
                    constructor(a) {
                        this.cordova = a
                    }
                    async exec(a, b, c) {
                        c = Sra(c, b);
                        c = await Qra(this, a, b, [c]).catch((d) => {
                            const [e, f] = Rra(d), g = new __c.Ub(f, b, `Error ${a}: ${e}`);
                            d instanceof Error && (g.stack = d.stack);
                            throw g
                        });
                        return Tra(c, b)
                    }
                };
                __c.Wx = {};
                __c.Wx.VLa = __c.Vx;
                __c.Wx.bMa = {};
                __c.Xx = E(() => ({
                    CA: M(1),
                    Hc: M(2),
                    Ja: M(3),
                    ib: M(4),
                    locale: M(5)
                }));
                __c.ata = E(() => ({
                    CA: M(1),
                    Hc: M(2),
                    dI: M(5),
                    Ja: M(3),
                    J4: M(7),
                    ib: M(4),
                    locale: M(6)
                }));
                __c.Yx = E(() => ({
                    width: __c.id(1),
                    height: __c.id(2),
                    units: I(3),
                    Ja: M(4),
                    ib: M(5),
                    locale: M(6)
                }));
                __c.bta = E(() => ({
                    Ja: M(1),
                    ib: M(2),
                    locale: M(3)
                }));
                __c.cta = E(() => ({
                    id: I(1),
                    Ja: M(2),
                    ib: M(3)
                }));
                __c.dta = E(() => ({
                    id: I(1),
                    Ja: M(2),
                    ib: M(3)
                }));
                __c.Zx = E(() => ({
                    id: I(1),
                    extensions: C(2, __c.ev),
                    Ja: M(3),
                    ib: M(4)
                }));
                __c.eta = E(() => ({
                    id: I(1),
                    Ja: M(2),
                    ib: M(3)
                }));
                __c.fta = E(() => ({
                    id: I(1),
                    extensions: C(2, __c.ev),
                    Ja: M(3),
                    ib: M(4)
                }));
                __c.gta = E(() => ({
                    id: I(1),
                    title: I(2),
                    extensions: C(3, __c.ev),
                    Ja: M(4),
                    ib: M(5)
                }));
                __c.$x = E(() => ({}));
                __c.hta = E(() => ({
                    actions: __c.D(1, __c.gv)
                }));
                __c.ita = __c.Ra(() => ({
                    type: [1, __c.Vu, 2, __c.Wu]
                }), () => ({}));
                var jta = E(() => Object.assign({}, {}, {
                    type: w("A?", 1, "BACKGROUND")
                }));
                var kta = E(() => Object.assign({}, {}, {
                    type: w("A?", 2, "ELEMENT"),
                    imageWidth: __c.md(1),
                    imageHeight: __c.md(2),
                    videoWidth: __c.md(3),
                    videoHeight: __c.md(4)
                }));
                var ay = __c.Ra(() => ({
                    type: [1, jta, 2, kta]
                }), () => ({}));
                __c.lta = E(() => ({
                    doctype: __c.A(1, __c.fv),
                    yT: M(2),
                    Daa: M(7),
                    Hk: C(3, ay),
                    category: M(4),
                    ib: M(5),
                    Ja: M(6)
                }));
                var mta = E(() => Object.assign({}, {}, {
                    type: w("A?", 1, "UPLOAD_IMAGE"),
                    yT: I(1)
                }));
                var nta = E(() => Object.assign({}, {}, {
                    type: w("A?", 2, "UPLOAD_VIDEO"),
                    Daa: I(1)
                }));
                var ota = E(() => Object.assign({}, {}, {
                    type: w("A?", 3, "CREATE_DEVICE_VIDEO"),
                    xva: I(1)
                }));
                var pta = __c.Ra(() => ({
                    type: [1, mta, 2, nta, 3, ota]
                }), () => ({}));
                __c.qta = E(() => ({
                    doctype: __c.A(1, __c.fv),
                    media: __c.D(2, pta),
                    Hk: C(3, ay),
                    category: M(4),
                    ib: M(5),
                    Ja: M(6)
                }));
                __c.rta = E(() => ({}));
                __c.sta = E(() => ({
                    media: I(1),
                    category: M(2),
                    doctype: M(3),
                    Ja: M(4),
                    ib: M(5)
                }));
                __c.tta = E(() => ({
                    template: I(1),
                    category: M(2),
                    doctype: M(3),
                    ib: M(4),
                    C$: M(6),
                    B$: __c.pd(5),
                    Ja: M(7),
                    locale: M(8)
                }));
                __c.uta = E(() => ({
                    id: I(1),
                    token: I(2)
                }));
                __c.vta = E(() => ({}));
                __c.by = class {
                    constructor() {
                        this.Mm = this.NR;
                        "orientation" in window.screen ? "addEventListener" in window.screen.orientation ? window.screen.orientation.addEventListener("change", () => {
                            this.Dq(this.NR)
                        }) : "onchange" in window.screen.orientation && (window.screen.orientation.onchange = () => {
                            this.Dq(this.NR)
                        }) : window.addEventListener("orientationchange", () => {
                            this.Dq(this.NR)
                        })
                    }
                    get NR() {
                        if ("orientation" in window.screen) return wta[window.screen.orientation.type];
                        if ("orientation" in window) return Ura()
                    }
                    unlock() {
                        if ("orientation" in
                            window.screen && "unlock" in window.screen.orientation) try {
                            window.screen.orientation.unlock()
                        } catch (a) {
                            if (a instanceof DOMException && ["NotSupportedError", "SecurityError"].includes(a.name)) return Promise.resolve();
                            throw a
                        }
                        return Promise.resolve()
                    }
                    Dq(a) {
                        this.Mm && this.Mm !== a && (this.Mm = a)
                    }
                };
                __c.p = __c.by.prototype;
                __c.p.qW = __c.ba(60);
                __c.p.uU = __c.ba(58);
                __c.p.bP = __c.ba(56);
                _dmr(__c.by, "Mm");
                _dmb(__c.by, "Dq", null);
                var wta = {
                    "landscape-primary": 4,
                    "landscape-secondary": 3,
                    "portrait-primary": 1,
                    "portrait-secondary": 2
                };
                E(() => ({}));
                __c.cy = E(() => ({
                    bj: __c.od(1),
                    md: __c.od(2)
                }));
                var xta = __c.G(() => [1, 2, {
                    Aj: !0
                }, 3, {
                    Aj: !0
                }, 4, 5]);
                E(() => ({
                    prompt: __c.Ja(1, xta)
                }));
                E(() => ({
                    eQa: __c.P("consentRequired", 5),
                    I_a: __c.P("rejectAllRequired", 6),
                    aSa: __c.P("doNotSellMyDataMessageRequired", 10),
                    IQa: __c.od("defaultConsented", 9),
                    SXa: __c.od("minInformed", 8)
                }));
                __c.dy = E(() => ({
                    supported: __c.P(1)
                }));
                __c.ey = E(() => ({}));
                __c.fy = E(() => ({}));
                __c.gy = E(() => ({}));
                __c.hy = E(() => ({}));
                __c.iy = E(() => ({}));
                __c.jy = E(() => ({}));
                __c.ky = E(() => ({}));
                __c.ly = E(() => ({}));
                __c.my = E(() => ({}));
                __c.ny = E(() => ({}));
                __c.oy = E(() => ({}));
                __c.py = E(() => ({}));
                __c.qy = E(() => ({}));
                __c.ry = E(() => ({}));
                __c.sy = E(() => ({}));
                __c.ty = E(() => ({}));
            }).call(self, self._cdf17aa01cb7a37fe84ed76fc113a158);
        }

    }
])
//# sourceMappingURL=sourcemaps/c63a42726033884b.js.map