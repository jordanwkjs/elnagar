(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [909], {

        /***/
        2114: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(2868);
            __web_req__(39673);
            __web_req__(9344);
            __web_req__(35096);
            __web_req__(82247);
            __web_req__(12995);
            self._cdf17aa01cb7a37fe84ed76fc113a158 = self._cdf17aa01cb7a37fe84ed76fc113a158 || {};
            (function(__c) {
                "use strict";
                var Vd = __c.Vd,
                    H = __c.H,
                    uO, xO, OO, QO, gw = __c.gw,
                    Gd = __c.Gd,
                    aw = __c.aw,
                    Wy = __c.Wy,
                    lA = __c.lA,
                    PP, RP;
                var PDa, aEa, BO, FO, HO, qO, MO, GO, yO;
                __c.pO = function(a, b) {
                    const c = null != b ? a : 0;
                    return Array(Math.max(0, null != b ? Math.ceil(b - c) : Math.floor(a))).fill(0).map((d, e) => c + e)
                };
                __c.rO = function(a) {
                    return qO(a)
                };
                PDa = function(a) {
                    switch (a) {
                        case "list":
                            return {
                                ZQ: void 0,
                                aR: void 0
                            };
                        case "menu":
                        case "menubar":
                            return {
                                ZQ: "none",
                                aR: "menuitem"
                            };
                        case "listbox":
                            return {
                                ZQ: "option",
                                aR: void 0
                            };
                        default:
                            return {
                                ZQ: void 0,
                                aR: void 0
                            };
                    }
                };
                aEa = function(a, b) {
                    const c = a.Qo,
                        d = a.GX;
                    a = `${__c.sO[__c.sO.length-1]}`;
                    const e = (f) => b ? Vd(f) : f;
                    return {
                        timer: {
                            za: QDa,
                            rq: [e(`${__c.sO[0]}`), e(a)],
                            label: H("kCJlrA"),
                            onClick: () => void c.timer.toggle("legend", {
                                Us: 60
                            })
                        },
                        blur: {
                            za: RDa,
                            rq: b ? Vd("b") : "b",
                            label: H("uro5mA"),
                            onClick: () => void c.blur.toggle("legend")
                        },
                        mN: {
                            za: SDa,
                            rq: b ? Vd("q") : "q",
                            label: H("enXwmA"),
                            onClick: () => void c.mN.toggle("legend")
                        },
                        bubbles: {
                            za: TDa,
                            rq: b ? Vd("o") : "o",
                            label: H("unwCJw"),
                            onClick: () => void c.bubbles.trigger("legend")
                        },
                        ME: {
                            za: UDa,
                            rq: b ? Vd("c") : "c",
                            label: H("3JtHQw"),
                            onClick: () => void c.ME.trigger("legend")
                        },
                        wK: {
                            za: VDa,
                            rq: b ? Vd("d") : "d",
                            label: H("qso+5Q"),
                            onClick: () => void c.wK.toggle("legend")
                        },
                        dK: {
                            za: WDa,
                            rq: b ? Vd("u") : "u",
                            label: H("uq2EBw"),
                            onClick: () => c.dK.toggle("legend")
                        },
                        mM: {
                            za: XDa,
                            rq: b ? Vd("m") : "m",
                            label: H("RS32iw"),
                            onClick: () => void c.mM.toggle("legend")
                        },
                        eD: c.eD && {
                            za: YDa,
                            rq: b ? Vd("s") : "s",
                            label: H("6FAH0w"),
                            onClick: () => void c.eD.toggle("legend")
                        },
                        $A: c.$A && {
                            za: ZDa,
                            rq: b ? Vd("g") : "g",
                            label: H("tqkhwA"),
                            onClick: () => void c.$A.toggle("legend")
                        },
                        close: {
                            za: $Da,
                            rq: b ? Vd("x") : "x",
                            label: H("8Gn/GQ"),
                            onClick: () => void d()
                        }
                    }
                };
                __c.zO = function(a) {
                    const b = tO(() => ({
                        render: a,
                        xIa: bEa((c) => b.render = c)
                    }));
                    uO(() => {
                        b.xIa(a)
                    }, [a, b]);
                    return vO(wO((c) => xO(yO, {
                        children: b.render(c)
                    }))).current
                };
                __c.EO = function({
                    nextPage: a,
                    T7: b,
                    eV: c,
                    X6: d
                }) {
                    const e = AO(() => {
                        const f = [];
                        f.push(["Escape", {
                            Kl: c
                        }]);
                        f.push(...BO(__c.CO, a));
                        f.push(...BO(__c.DO, b));
                        return d ? f.concat(d) : f
                    }, [a, c, d, b]);
                    return __c.VM(e, {
                        kh: !1
                    })
                };
                BO = function(a, b) {
                    return a.map((c) => [c, (d) => {
                        var e;
                        if (e = d.target) d = d.target, e = d.tagName.toLowerCase(), e = ("button" === e || "input" === e && "button" === d.type) && (" " === c || "Enter" === c) || "link" === d.tagName.toLowerCase() && "Enter" === c || "tab" === d.getAttribute("role") && FO(c) || "separator" === d.getAttribute("role") && FO(c);
                        e || (null === b || void 0 === b ? void 0 : b())
                    }])
                };
                FO = function(a) {
                    return ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"].includes(a)
                };
                HO = function(a) {
                    var b = Object.assign({}, a);
                    a = a.za;
                    b = (delete b.za, b);
                    switch (b.badge) {
                        case "notification":
                            return b.VQ ? xO(cEa, {
                                za: a,
                                size: "medium",
                                children: xO(dEa, {
                                    tone: "critical",
                                    text: 99 < b.VQ ? "99+" : b.VQ.toString()
                                })
                            }) : GO("div", {
                                className: "gOs2EA",
                                children: [xO(a, {
                                    size: "medium"
                                }), xO("div", {
                                    className: "xHkWNg"
                                })]
                            });
                        case "warning":
                            return GO("div", {
                                className: "gOs2EA",
                                children: [xO(a, {
                                    size: "medium"
                                }), xO("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: eEa
                                    },
                                    className: "w3SV4A"
                                })]
                            });
                        default:
                            throw new __c.v(b);
                    }
                };
                qO = (a) => null != a.od && 0 < a.od.length ? (0, __c.Hv)(__c.Lsa, Object.assign({}, a, {
                    od: a.od
                })) : (0, __c.Hv)(__c.Gw, Object.assign({}, a, {
                    od: void 0
                }));
                __c.IO = (a) => "link" === a.type ? qO(a) : __c.kA(a);
                __c.JO = (a) => __c.IO(Object.assign({}, a, {
                    variant: "basic"
                }));
                __c.KO = ({
                    direction: a,
                    theme: b
                }) => (0, __c.Iy)("hr", {
                    className: (0, __c.Ey)("jj2gEQ", {
                        KGTzhA: "vertical" === a,
                        "GD-iEA": "dark" === b
                    })
                });
                __c.LO = (a) => (0, __c.gN)(__c.VN, Object.assign({}, a, {
                    window,
                    layers: __c.tDa,
                    createPortal: __c.eDa,
                    NA: !1
                }));
                MO = __webpack_require__(85893);
                xO = __c.xO = MO.jsx;
                GO = MO.jsxs;
                yO = MO.Fragment;
                var NO, fEa;
                NO = __webpack_require__;
                fEa = NO(94184);
                OO = __c.OO = NO.n_x(fEa)();
                var PO, RO, SO, gEa, AO, TO, iEa, UO, jEa, kEa, lEa, VO, WO, XO, vO;
                PO = __webpack_require__(67294);
                QO = __c.QO = PO.useContext;
                RO = PO.useCallback;
                SO = PO.createContext;
                uO = __c.uO = PO.useEffect;
                gEa = PO.createRef;
                __c.hEa = PO.useState;
                AO = PO.useMemo;
                TO = PO.Component;
                iEa = PO.forwardRef;
                UO = PO.memo;
                jEa = PO.isValidElement;
                kEa = PO.Fragment;
                lEa = PO.Children;
                VO = PO.PureComponent;
                WO = PO.lazy;
                XO = PO.Suspense;
                vO = PO.useRef;
                var YO = __webpack_require__(33581),
                    mEa = YO.Qj,
                    nEa = YO.SZ,
                    tO = YO.hN;
                __webpack_require__(91033);
                var ZO = __webpack_require__(29697).Z;
                var $O = __webpack_require__(70655).gn;
                var wO = __webpack_require__(29323).Pi;
                var bEa = __webpack_require__(22188).aD;
                var aP = __webpack_require__(96630),
                    oEa = aP.d0,
                    pEa = aP.Ix;
                __c.bP = __webpack_require__(99601).Z;
                var cP = {
                    hoverTransition: "0.15s ease-in-out",
                    colorBlack: "rgb(13, 18, 22)",
                    colorBlackA07: "rgba(64, 87, 109, 0.07)",
                    colorBlue02: "rgb(194, 222, 255)",
                    colorBlueDark: "rgb(0, 126, 182)",
                    colorGoldDark: "rgb(161, 107, 0)",
                    colorGreen02: "rgb(193, 231, 194)",
                    colorGreenDark: "rgb(68, 133, 25)",
                    colorPurple: "rgb(125, 42, 232)",
                    colorPurpleDark: "rgb(103, 24, 207)",
                    colorRed02: "rgb(255, 209, 211)",
                    colorRedDark: "rgb(204, 40, 54)",
                    colorWhiteA10: "rgba(255, 255, 255, 0.1)",
                    colorYellow02: "rgb(255, 215, 168)",
                    monoBlack: "rgb(14, 19, 24)",
                    monoBlackA100: "rgba(14, 19, 24, 0.7)",
                    monoBlackA250: "rgba(43, 59, 74, 0.3)",
                    monoBlackA300: "rgba(53, 71, 90, 0.2)",
                    monoBlackA400: "rgba(57, 76, 96, 0.15)",
                    monoBlackA500: "rgba(64, 87, 109, 0.07)",
                    monoWhite: "rgb(255, 255, 255)",
                    monoWhiteA300: "rgba(255, 255, 255, 0.15)",
                    largeMultiplier: "4",
                    mediumMultiplier: "3",
                    smallMultiplier: "2",
                    tinyMultiplier: "1.5",
                    gridBaseline: "8px",
                    touchRadius: "20px",
                    colorContrast: "var(--S_zKBQ)",
                    colorContrastDisabled: "var(--VGxehA)",
                    colorContrastFore: "var(--QErhlg)",
                    colorContrastForeDisabled: "var(--6kDNlA)",
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
                    colorPrimary: "var(--_mHLrA)",
                    colorPrimaryActive: "var(--t-i8hw)",
                    colorPrimaryFore: "var(--4Yobmg)",
                    colorSecondary: "var(--K12xjw)",
                    colorSecondaryActive: "var(--QYA_-A)",
                    colorSecondaryDisabled: "var(--ctGD3w)",
                    colorSecondaryFore: "var(--_T63JA)",
                    colorSecondaryForeDisabled: "var(--oXjekw)",
                    colorSecondaryHover: "var(--B2THfg)",
                    colorWarn: "var(--xQOmAw)",
                    colorWarnFore: "var(--XPPBAg)",
                    colorWarnForeLow: "var(--a01w0A)",
                    colorWarnLow: "var(--wpHozg)",
                    themeDark: ":global(.dark)",
                    themeLight: ":global(.light)",
                    unthemed: "body:not(:global(.theme))",
                    fontSizeSmall: "1.2rem",
                    fontSizeTiny: "1.1rem",
                    fontWeightBold: "700",
                    textMicro: "UXYZvg",
                    gridBaselineNegative: "-8px",
                    lineHeight: "16px",
                    letterSpacing: ".6px",
                    badgeHorizontalPadding: "6px",
                    badge: "USE2Rg UXYZvg",
                    primary: "csXuXg",
                    neutral: "aPnZTg",
                    contrast: "_-H6mgQ",
                    critical: "oB4juw",
                    info: "fCvkaQ",
                    positive: "HvECIA",
                    warn: "hoi_lQ",
                    neutralLow: "jYa8kg",
                    criticalLow: "_XLAIw",
                    infoLow: "qCQ4DQ",
                    positiveLow: "_9JQmJw",
                    warnLow: "ndHP7A",
                    iconSpacingLeft: "b9wLqA",
                    iconSpacingRight: "_8UfsNA",
                    clickableBadge: "ZQcUXA USE2Rg UXYZvg",
                    hideOutline: "xjABfw",
                    buttonBadge: "sgyq_w ZQcUXA USE2Rg UXYZvg",
                    primaryButton: "_3_6cwQ",
                    hoverSupported: "_1A_EVw",
                    disabled: "jwHgCQ",
                    expanded: "A-u04w",
                    secondaryButton: "L0XojQ",
                    touchableActive: "ssb6Dw",
                    circle: "vCLpaw",
                    tiny: "AUzScw",
                    iconContainer: "_2ZzutA",
                    small: "JsFowg",
                    medium: "rIbqKA",
                    large: "w2emFw",
                    badgeContainerMainIcon: "_4UgBoQ"
                };
                var dEa = (a) => {
                        var {
                            className: b,
                            za: c,
                            xo: d = "start",
                            text: e,
                            shape: f = "regular",
                            tone: g,
                            ariaLabel: h,
                            size: k = "small"
                        } = a;
                        return GO("span", {
                            className: OO("USE2Rg UXYZvg", cP[g], {
                                vCLpaw: "circle" === f,
                                AUzScw: "tiny" === k
                            }, b),
                            "aria-label": h,
                            children: [c && "start" === d && xO(c, {
                                size: k,
                                className: OO({
                                    _8UfsNA: !!e
                                })
                            }), e, c && "end" === d && xO(c, {
                                size: k,
                                className: OO({
                                    b9wLqA: !!e
                                })
                            })]
                        })
                    },
                    cEa = (a) => {
                        var {
                            className: b,
                            za: c,
                            size: d,
                            children: e
                        } = a;
                        return GO("div", {
                            className: OO("_2ZzutA",
                                cP[d], b),
                            children: [xO(c, {
                                size: d,
                                className: "_4UgBoQ"
                            }), e]
                        })
                    };
                var qEa = SO(void 0),
                    rEa = (a) => {
                        ({
                            Bc: a
                        } = a);
                        uO(() => {
                            const b = document.body.style.overflow;
                            document.body.style.overflow = "hidden";
                            return () => {
                                document.body.style.overflow = b
                            }
                        }, []);
                        return xO(a, {
                            tg: "fill"
                        })
                    },
                    tEa = (a) => {
                        var {
                            id: b,
                            role: c,
                            ariaRoleDescription: d,
                            gs: e,
                            Bc: f,
                            Kt: g = !0,
                            arrow: h,
                            Yba: k,
                            placement: l,
                            zd: m,
                            children: n,
                            open: q,
                            positionFixed: r = !1,
                            persist: x = !1,
                            padding: y,
                            XU: z,
                            width: B,
                            className: F,
                            aC: J,
                            ad: N,
                            vE: K,
                            WG: L,
                            fq: O,
                            animate: U = !1,
                            uTa: da = !1,
                            $pa: Z,
                            mode: X,
                            Oka: ha = "default",
                            $3a: la,
                            Uma: ma = "auto",
                            Z3a: Ha = "66vh",
                            a4a: na,
                            pMa: Da,
                            IH: Va = !1,
                            VN: lb = !1,
                            theme: jb = "light",
                            Pr: mb,
                            cZa: qb,
                            Mra: nb,
                            Ora: $a,
                            R0a: db
                        } = a;
                        const fb = !g || x && !q,
                            eb = x ? sEa : U ? dP : void 0;
                        return xO(qEa.Consumer, {
                            children: (pb) => {
                                pb = X || pb || (__c.OE() ? "sheet" : "pin");
                                switch (pb) {
                                    case "pin":
                                        const ob = gEa();
                                        return xO(nb, {
                                            ref: ob,
                                            gs: e,
                                            level: m,
                                            placement: l,
                                            positionFixed: r,
                                            open: q,
                                            kxa: da,
                                            aC: J,
                                            Pu: N,
                                            vE: K,
                                            WG: L,
                                            fq: O,
                                            tP: eb,
                                            arrow: h,
                                            content: xO(Z, {
                                                width: B,
                                                padding: y,
                                                XU: z,
                                                className: F,
                                                $Ya: () => {
                                                    if (ob.current) {
                                                        var rb = ob.current;
                                                        rb.popper && rb.props.open && rb.popper.update()
                                                    }
                                                },
                                                theme: jb,
                                                id: b,
                                                role: c,
                                                ariaRoleDescription: d,
                                                children: xO(__c.LN, {
                                                    O8: g,
                                                    className: "fbXtUA",
                                                    disabled: fb,
                                                    G6: N,
                                                    Pr: mb,
                                                    children: xO(f, {
                                                        tg: "fixed"
                                                    })
                                                })
                                            }),
                                            children: n
                                        });
                                    case "sheet":
                                        return GO(yO, {
                                            children: [xO($a, {
                                                id: b,
                                                role: c,
                                                ariaRoleDescription: d,
                                                content: () => xO("div", {
                                                    className: OO("kvjQMQ", {
                                                        VjXFQw: lb,
                                                        uoCbFA: "dark" === jb
                                                    }),
                                                    style: {
                                                        maxHeight: Ha
                                                    },
                                                    ref: db,
                                                    children: xO(__c.LN, {
                                                        O8: g,
                                                        className: "fbXtUA",
                                                        disabled: fb,
                                                        G6: N,
                                                        Pr: mb,
                                                        children: xO(rEa, {
                                                            Bc: f
                                                        })
                                                    })
                                                }),
                                                placeholder: k && (
                                                    () => xO(k, {
                                                        tg: "fill"
                                                    })),
                                                from: "bottom",
                                                pg: (rb) => {
                                                    q && N && (rb.stopPropagation(), N())
                                                },
                                                ad: N,
                                                open: q,
                                                yk: !1 !== la,
                                                Oka: ha,
                                                size: ma,
                                                j5: Ha,
                                                vW: na,
                                                Lka: Da,
                                                VN: lb,
                                                d9: !1,
                                                NS: Va,
                                                kU: m,
                                                qV: qb
                                            }), n]
                                        });
                                    default:
                                        throw new __c.v(pb);
                                }
                            }
                        })
                    },
                    dP = __c.iw({
                        T1: {
                            opacity: 1
                        },
                        K4: {
                            opacity: 0
                        },
                        jxa: {
                            display: "none",
                            opacity: 0
                        },
                        style: {
                            transition: "opacity 150ms ease-in-out"
                        },
                        zK: 150
                    }),
                    sEa = (a) => xO(dP, Object.assign({}, {
                        persist: !0
                    }, a));
                var uEa;
                SO(void 0);
                uEa = (a) => {
                    var {
                        children: b,
                        width: c = "auto",
                        className: d,
                        padding: e = "wide",
                        XU: f = !1,
                        theme: g = "light",
                        id: h,
                        role: k,
                        ariaRoleDescription: l
                    } = a;
                    a = OO({
                        na9pxA: "fixed" === c,
                        rO2wYg: "fixed-or-wider" === c,
                        _7jffaw: "none" === e,
                        LJxGDg: "compact" === e,
                        IknS7A: "wide" === e,
                        r51uOw: f,
                        uoCbFA: "dark" === g
                    }, "BOORbA TfRV3Q", d);
                    return xO("div", {
                        className: a,
                        id: h,
                        role: k,
                        "aria-roledescription": l,
                        children: b
                    })
                };
                __c.eP = (a) => {
                    var b = Object.assign({}, a);
                    a = a.children;
                    b = (delete b.children, b);
                    return xO(tEa, Object.assign({}, {
                        $pa: uEa
                    }, b, {
                        Mra: __c.jw,
                        Ora: __c.LO,
                        children: a
                    }))
                };
                var vEa = "<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.5 7.5a5.167 5.167 0 0 1 5.167-5.167h2.667a5.167 5.167 0 0 1 .042 10.333.703.703 0 0 0-.056.028c-.074.04-.172.104-.292.192-.239.176-.522.417-.8.665a33.143 33.143 0 0 0-.827.771l-.138.132a3.84 3.84 0 0 1-.12.106.531.531 0 0 1-.08.051.5.5 0 0 1-.73-.445v-1.51A5.167 5.167 0 0 1 1.5 7.5Zm5.833 5.514c.074-.068.15-.138.229-.208.285-.255.596-.52.873-.725.138-.101.278-.196.41-.267.11-.06.292-.147.489-.147a4.167 4.167 0 1 0 0-8.334H6.667a4.167 4.167 0 1 0 0 8.334h.666v1.347Z\" fill=\"currentColor\"/></svg>";
                var wEa = "<svg width=\"12\" height=\"12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.124 2.625a2.709 2.709 0 0 0-.143 5.413l.593.031v.912l1.168-.934.21-.006a2.709 2.709 0 0 0-.074-5.416H5.124ZM1.165 5.334a3.959 3.959 0 0 1 3.959-3.959h1.754a3.959 3.959 0 0 1 .324 7.904l-1.44 1.152a.885.885 0 0 1-1.438-.69v-.53a3.96 3.96 0 0 1-3.159-3.877Z\" fill=\"currentColor\"/></svg>";
                var xEa = "<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.25 11.25A7.75 7.75 0 0 1 10 3.5h4a7.75 7.75 0 0 1 .063 15.5l-.084.04a4 4 0 0 0-.438.29c-.358.263-.782.624-1.198.996-.414.37-.805.74-1.097 1.018l-.146.14-.206.196a5.317 5.317 0 0 1-.18.16l-.001.001c-.009.007-.055.043-.118.075l-.002.001a.756.756 0 0 1-.875-.137.75.75 0 0 1-.22-.53v-2.266A7.75 7.75 0 0 1 2.25 11.25zm8.748 8.27c.112-.102.227-.206.344-.31.428-.384.894-.782 1.31-1.088.207-.153.417-.294.614-.4.166-.09.438-.222.734-.222A6.25 6.25 0 1 0 14 5h-4a6.25 6.25 0 1 0 0 12.5h.998v2.02z\" fill=\"currentColor\"/></svg>";
                var yEa = gw({
                    medium: xEa,
                    small: vEa,
                    En: wEa
                });
                var zEa = "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.436 4.659a2.218 2.218 0 0 1 3.155 0l4.91 4.95c.483.488.483 1.28 0 1.768a1.233 1.233 0 0 1-1.754 0l-3.543-3.573v13.032a1.25 1.25 0 1 1-2.5 0V7.924l-3.424 3.452a1.232 1.232 0 0 1-1.753 0 1.257 1.257 0 0 1 0-1.767l4.909-4.95ZM6.449 16.204c0-.665-.548-1.204-1.225-1.204C4.548 15 4 15.539 4 16.204v8.666C4 26.6 5.425 28 7.184 28h17.632C26.575 28 28 26.599 28 24.87v-8.666c0-.665-.548-1.204-1.224-1.204-.677 0-1.225.539-1.225 1.204v8.666a.729.729 0 0 1-.735.723H7.184a.729.729 0 0 1-.735-.723v-8.666Z\" fill=\"currentColor\"/></svg>";
                var AEa = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4.5 11.75V19a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-7.25a.75.75 0 1 1 1.5 0V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7.25a.75.75 0 1 1 1.5 0Zm8.323-6.19v9.69a.75.75 0 0 1-1.5 0l-.001-9.69-3.037 3.215a.751.751 0 0 1-1.062-1.06l4.318-4.495a.751.751 0 0 1 1.062 0l4.18 4.495a.749.749 0 1 1-1.06 1.06l-2.9-3.216Z\" fill=\"currentColor\" fill-rule=\"nonzero\"/></svg>";
                __c.gP = gw({
                    medium: AEa,
                    vc: zEa
                });
                var BEa = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M5.5 4h4c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 0 1 4 9.5v-4C4 4.67 4.67 4 5.5 4zm9 0h4c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 0 1 13 9.5v-4c0-.83.67-1.5 1.5-1.5zm0 9h4c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-4c0-.83.67-1.5 1.5-1.5zm-9 0h4c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 0 1 4 18.5v-4c0-.83.67-1.5 1.5-1.5zm0-7.5v4h4v-4h-4zm9 0v4h4v-4h-4zm0 9v4h4v-4h-4zm-9 0v4h4v-4h-4z\"/></svg>";
                var CEa = gw({
                    medium: BEa
                });
                var DEa = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.778 9.606a.828.828 0 1 1 0-1.656.828.828 0 0 1 0 1.656ZM8.889 9.606a.828.828 0 1 1 0-1.656.828.828 0 0 1 0 1.656ZM11.172 8.778a.828.828 0 1 0 1.656 0 .828.828 0 0 0-1.656 0ZM15.111 9.606a.828.828 0 1 1 0-1.656.828.828 0 0 1 0 1.656ZM17.395 8.778a.828.828 0 1 0 1.655 0 .828.828 0 0 0-1.655 0ZM7.278 12.606a.828.828 0 1 1 0-1.656.828.828 0 0 1 0 1.656ZM9.561 11.778a.828.828 0 1 0 1.656 0 .828.828 0 0 0-1.656 0ZM13.5 12.606a.828.828 0 1 1 0-1.656.828.828 0 0 1 0 1.656ZM15.783 11.778a.828.828 0 1 0 1.656 0 .828.828 0 0 0-1.656 0ZM6 15.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75Z\" fill=\"currentColor\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8Zm3-1.5h14A1.5 1.5 0 0 1 20.5 8v8a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 16V8A1.5 1.5 0 0 1 5 6.5Z\" fill=\"currentColor\"/></svg>";
                var lP = gw({
                    medium: DEa
                });
                var EEa = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20.291 7.267a9 9 0 0 0-2.963-2.947c-.353-.216-.806-.064-.992.306-.185.37-.033.818.316 1.04a7.498 7.498 0 0 1 .024 12.653c-.348.223-.499.671-.312 1.04.188.37.64.52.994.303A9 9 0 0 0 20.29 7.267ZM3.709 7.267A9 9 0 0 1 6.672 4.32c.353-.216.806-.064.992.306.185.37.033.818-.316 1.04a7.5 7.5 0 0 0-.025 12.653c.35.223.5.671.313 1.04-.188.37-.64.52-.994.303A9 9 0 0 1 3.71 7.267Z\" fill=\"currentColor\"/><path d=\"M17.308 9.203a6 6 0 0 0-1.392-1.748c-.313-.27-.783-.174-1.012.172-.229.345-.13.806.173 1.09a4.501 4.501 0 0 1-.098 6.655c-.31.275-.423.733-.204 1.084.22.352.685.463 1.007.202a6 6 0 0 0 1.526-7.455ZM6.69 9.203a6 6 0 0 1 1.392-1.748c.314-.27.783-.174 1.012.172.23.345.13.806-.172 1.09a4.5 4.5 0 0 0 .097 6.655c.31.275.423.733.205 1.084-.22.352-.686.463-1.007.202A6 6 0 0 1 6.69 9.203Z\" fill=\"currentColor\"/></svg>";
                var mP = gw({
                    medium: EEa
                });
                var FEa = "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.75 7.25A3.25 3.25 0 0 1 9 4h19a3.25 3.25 0 0 1 3.25 3.25v12A3.25 3.25 0 0 1 28 22.5h-.5a1.25 1.25 0 1 1 0-2.5h.5a.75.75 0 0 0 .75-.75v-12A.75.75 0 0 0 28 6.5H9a.75.75 0 0 0-.75.75v2a1.25 1.25 0 1 1-2.5 0v-2ZM22 14.5H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5V15a.5.5 0 0 0-.5-.5ZM3 12a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h19a3 3 0 0 0 3-3V15a3 3 0 0 0-3-3H3Zm13 8-6-3v6l6-3Z\" fill=\"currentColor\"/></svg>";
                var GEa = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><defs><path id=\"_2287347613__a\" d=\"M10 2.5H8.5V2a.5.5 0 0 0-.5-.5H2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h1.5V16H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v.5Zm-3 3a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5H7ZM7 4h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm1 9.76 1.98-3.562 1.978 3.562H8Z\"/></defs><use fill=\"currentColor\" transform=\"rotate(90 8.75 13.25)\" xlink:href=\"#_2287347613__a\"/></svg>";
                __c.HEa = gw({
                    medium: GEa,
                    vc: FEa
                });
                var nP;
                nP = SO(void 0);
                __c.oP = iEa(function(a, b) {
                    var c = nEa(() => __c.mv.lh),
                        d = "navigation" === a.role;
                    c = OO("YxrMgA", !d && a.className, {
                        vCeYsQ: c,
                        EiK6Eg: "rounded" === a.variant,
                        uansVw: "listbox" !== a.role && "horizontal" === a.direction
                    });
                    b = xO(__c.ON, {
                        id: a.id,
                        Ap: a.Ap,
                        ariaMultiSelectable: a.ariaMultiSelectable,
                        ariaLabel: a.ariaLabel,
                        Na: a.Na,
                        tagName: "ul",
                        role: "navigation" === a.role ? void 0 : a.role,
                        ref: b,
                        className: c,
                        children: a.children
                    });
                    d = d ? xO("nav", {
                        className: d && a.className,
                        children: b
                    }) : b;
                    b = AO(() => ({
                        PCa: a.role,
                        tja: "listbox" !== a.role ? a.direction : void 0
                    }), [a.role, a.direction]);
                    return xO(nP.Provider, {
                        value: b,
                        children: d
                    })
                });
                __c.oP.displayName = "Menu";
                __c.qP = UO(function(a) {
                    var b = Object.assign({}, a),
                        c = a.id,
                        d = a.children,
                        e = a.className,
                        f = a.active,
                        g = a.disabled,
                        h = a.Lh,
                        k = a.onFocus,
                        l = a.onBlur,
                        m = a.onMouseEnter,
                        n = a.onMouseLeave,
                        q = a.tabIndex,
                        r = a.start,
                        x = a.end,
                        y = a.Yz,
                        z = a.Cr,
                        B = a.ariaLabel,
                        F = a.Na,
                        J = a.ariaHasPopup,
                        N = a.fd,
                        K = a.ariaDisabled;
                    a = a.ariaSelected;
                    b = (delete b.id, delete b.children, delete b.className, delete b.active, delete b.disabled, delete b.Lh, delete b.onFocus, delete b.onBlur, delete b.onMouseEnter, delete b.onMouseLeave, delete b.tabIndex, delete b.start,
                        delete b.end, delete b.Yz, delete b.Cr, delete b.ariaLabel, delete b.Na, delete b.ariaHasPopup, delete b.fd, delete b.ariaDisabled, delete b.ariaSelected, b);
                    e = OO("k--oiw YPTJew Qkd66A tYI0Vw", e);
                    const L = __c.u(QO(nP), "MenuItem should not be used outside of a Menu");
                    b = b.href ? {
                        type: "link",
                        href: b.href
                    } : {
                        onClick: b.onClick,
                        ariaDisabled: K
                    };
                    const {
                        ZQ: O,
                        aR: U
                    } = PDa(L.PCa);
                    d = "string" === typeof d || "number" === typeof d ? xO(__c.mw, {
                        tagName: "span",
                        color: __c.uv,
                        Yb: "horizontal" === L.tja ? "center" : "start",
                        children: d
                    }) : d;
                    return xO(__c.ON, {
                        className: "oFe3sg",
                        tagName: "li",
                        id: c,
                        role: O,
                        ariaDisabled: K,
                        ariaSelected: a,
                        children: xO(__c.JO, Object.assign({}, {
                            role: U,
                            tabIndex: q,
                            Yz: y,
                            Cr: z,
                            className: e,
                            WU: !0,
                            Yb: "start",
                            active: f,
                            disabled: g,
                            Lh: h,
                            onFocus: k,
                            onBlur: l,
                            onMouseEnter: m,
                            onMouseLeave: n,
                            ariaLabel: B,
                            Na: F,
                            ariaHasPopup: J,
                            fd: N
                        }, b, {
                            children: r || x ? GO(__c.Ty, {
                                tagName: "span",
                                lE: "center",
                                spacing: "xxsmall",
                                children: [r ? pP("function" === typeof r ? r() : r) : null, xO(__c.Sy, {
                                    tagName: "span",
                                    children: d
                                }), x ? pP("function" ===
                                    typeof x ? x() : x) : null]
                            }) : d
                        }))
                    })
                });
                __c.qP.displayName = "MenuItem";
                var pP = (a) => jEa(a) && a.type === kEa ? xO(yO, {
                    children: lEa.map(a.props.children, (b, c) => b && xO(__c.Sy, {
                        tagName: "span",
                        width: "content",
                        children: b
                    }, c))
                }) : xO(__c.Sy, {
                    tagName: "span",
                    width: "content",
                    children: a
                });
                UO(function(a) {
                    ({
                        children: a
                    } = a);
                    const b = __c.u(QO(nP), "MenuDivider should not be used outside of a Menu");
                    return a ? xO("li", {
                        role: "none",
                        children: xO("div", {
                            role: "separator",
                            className: "_5cRYUw",
                            children: "string" === typeof a ? xO(__c.mw, {
                                size: "small",
                                variant: "bold",
                                tagName: "span",
                                color: "monoBlackA100",
                                children: a
                            }) : a
                        })
                    }) : (a = "horizontal" === b.tja ? "vertical" : "horizontal", xO(__c.ON, {
                        tagName: "li",
                        role: "none",
                        QM: "horizontal" === a ? "xxsmall" : "none",
                        className: "Ccp0-A",
                        children: xO(__c.KO, {
                            direction: a
                        })
                    }))
                }).displayName = "MenuDivider";
                var rP = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18.718 11.804 11.77 0 5.335 11.723c-1.499 2.484-1.63 5.714-.055 8.39 2.238 3.803 7.06 5.023 10.771 2.73 3.71-2.294 4.905-7.234 2.667-11.04Z\" fill=\"#33BFFF\"/><path d=\"M13.898 20.294c2.292-1.566 3.284-3.54 3.265-5.549\" stroke=\"#D1EEFC\" stroke-width=\"1.502\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>";
                var RDa = gw({
                    medium: rP,
                    vc: rP
                });
                var sP = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.914 24a6.914 6.914 0 1 0 0-13.828 6.914 6.914 0 0 0 0 13.828ZM18.5 13a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z\" fill=\"#00D9E1\"/><path d=\"M19.425 10.473c1.859-.87 2.5-2.213 2.228-3.713\" stroke=\"#D1EEFC\" stroke-width=\"2.403\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M7.442 6.871a3.436 3.436 0 1 0 0-6.871 3.436 3.436 0 0 0 0 6.871Z\" fill=\"#BBF3F4\"/><path d=\"M18.466 22.048a3.436 3.436 0 1 0 0-6.871 3.436 3.436 0 0 0 0 6.87Z\" fill=\"#00C4CC\"/><path d=\"M8.62 18.396a2.86 2.86 0 1 0 0-5.719 2.86 2.86 0 0 0 0 5.72Z\" fill=\"#BBF3F4\"/></svg>";
                var TDa = gw({
                    medium: sP,
                    vc: sP
                });
                var tP = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.75 4.992a.942.942 0 0 0-.178.263l-.006-.005L.09 22.094l.007.008c-.138.268.094.815.57 1.29.474.476 1.021.708 1.29.57l.006.006 16.845-7.478-.006-.006a.922.922 0 0 0 .264-.18c1.04-1.04-.648-4.417-3.771-7.541-3.125-3.124-6.502-4.812-7.544-3.77Z\" fill=\"#F84856\"/><path d=\"M8.666 8 .277 21.67l-.188.424.007.007c-.138.269.094.816.57 1.291.154.155.314.273.472.372l10.195-12.43L8.666 8Z\" fill=\"#FF6673\"/><path d=\"M15.34 8.71c3.114 3.115 4.843 6.435 3.86 7.416-.982.983-4.302-.745-7.417-3.858C8.669 9.153 6.94 5.832 7.923 4.85c.982-.982 4.302.746 7.418 3.86Z\" fill=\"#CC2836\"/><path d=\"M12.393 9.072a.66.66 0 0 1-.49.144c-.578-.063-1.065-.264-1.405-.582-.361-.337-.54-.789-.49-1.242.085-.794.882-1.524 2.242-1.377.528.057.764-.113.772-.195.01-.08-.184-.297-.713-.354-.579-.063-1.065-.264-1.407-.582-.36-.337-.54-.789-.49-1.242.087-.794.884-1.524 2.242-1.376.385.041.588-.038.674-.09.069-.042.096-.082.099-.105.008-.08-.183-.297-.713-.355a.666.666 0 1 1 .143-1.325c1.358.146 1.982 1.028 1.896 1.823-.087.796-.883 1.524-2.243 1.378-.385-.042-.586.038-.673.09-.069.041-.097.082-.1.104-.008.082.185.298.715.355 1.358.147 1.982 1.028 1.896 1.823-.086.795-.883 1.524-2.242 1.377-.385-.041-.588.039-.674.09-.07.042-.096.082-.1.105-.008.08.185.297.714.354a.666.666 0 0 1 .347 1.182Z\" fill=\"#E5CCFD\"/><path d=\"M20.44 15.238c1.316-.371 2.223.215 2.44.985.215.77-.253 1.744-1.567 2.114-.514.144-.668.39-.647.467.023.079.283.208.795.063 1.315-.37 2.222.217 2.438.986.218.77-.252 1.743-1.567 2.114-.513.144-.667.39-.645.468.022.078.282.207.795.063a.667.667 0 1 1 .36 1.283c-1.314.37-2.222-.215-2.44-.986-.215-.769.253-1.742 1.57-2.112.513-.145.667-.39.644-.468-.021-.078-.281-.208-.793-.064-1.316.37-2.223-.215-2.44-.986-.216-.77.252-1.742 1.568-2.114.512-.143.666-.39.644-.467-.022-.079-.282-.208-.794-.064a.666.666 0 1 1-.36-1.282Z\" fill=\"#6BCA2C\"/><path d=\"M15.334 13.44a.667.667 0 0 1-.417-1.188c.145-.116 3.612-2.839 8.511-2.138a.666.666 0 1 1-.188 1.32c-4.329-.615-7.458 1.835-7.489 1.86a.666.666 0 0 1-.417.146Z\" fill=\"#E5CCFD\"/><path d=\"M3.837 10.666a.666.666 0 0 1-.639-.858c.756-2.515 1.44-6.529.599-7.575-.094-.12-.236-.236-.561-.211-.626.048-.566 1.367-.566 1.38a.666.666 0 1 1-1.33.1c-.068-.92.218-2.69 1.796-2.81.704-.053 1.288.192 1.7.705 1.582 1.968-.023 7.67-.36 8.795a.667.667 0 0 1-.64.474Z\" fill=\"#6BCA2C\"/><path d=\"M17 7.333a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z\" fill=\"#448519\"/><path d=\"M1.333 13.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666Z\" fill=\"#8D39FA\"/><path d=\"M21.666 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-5.999 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z\" fill=\"#448519\"/><path d=\"M18.668 4a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667Zm2.998 2.666a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2 2.668a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5 16.667a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z\" fill=\"#FFD25E\"/></svg>";
                var UDa = gw({
                    medium: tP,
                    vc: tP
                });
                var uP = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><mask id=\"_4110047368__a\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"1\" width=\"24\" height=\"22\"><rect y=\"1.2\" width=\"24\" height=\"21.6\" rx=\"4\" fill=\"#C4C4C4\"/></mask><g mask=\"url(#_4110047368__a)\"><path d=\"M24 20.4c0 1.766-.717 3.2-1.6 3.2H1.6c-.883 0-1.6-1.434-1.6-3.2L.8 1.2h22.4l.8 19.2Z\" fill=\"#F84856\"/><path d=\"M16 23.2H8S9.6 15.262 9.6 6h4.8c0 9.261 1.6 17.2 1.6 17.2ZM10.8-3.923h2.4l-.4-7.277h-1.6l-.4 7.277Z\" fill=\"#293039\"/><path d=\"M.8 7.663c.355.455.847.737 1.39.737 1.084 0 1.962-1.119 1.962-2.5 0-.565-.153-1.081-.4-1.5h-2.74L.8 7.663Zm22.4 0L22.987 4.4h-2.738a2.947 2.947 0 0 0-.401 1.5c0 1.381.878 2.5 1.961 2.5.544 0 1.035-.282 1.391-.737ZM8.8 8.4c.884 0 1.6-.895 1.6-2s-.716-2-1.6-2c-.884 0-1.6.895-1.6 2s.716 2 1.6 2Zm6.4 0c.884 0 1.6-.895 1.6-2s-.716-2-1.6-2c-.884 0-1.6.895-1.6 2s.716 2 1.6 2Z\" fill=\"#BE1931\"/><path d=\"M5.6 8.4c.884 0 1.6-.895 1.6-2s-.716-2-1.6-2c-.884 0-1.6.895-1.6 2s.716 2 1.6 2Zm12.8 0c.884 0 1.6-.895 1.6-2s-.716-2-1.6-2c-.884 0-1.6.895-1.6 2s.716 2 1.6 2Z\" fill=\"#BE1931\"/><path d=\"m12-9.2-.065.115C6.35 1.049 0-.786 0 2.933v2.334C0 6.556.895 7.6 2 7.6c.968 0 1.774-.802 1.96-1.867H7.2c0 1.03.717 1.867 1.6 1.867.883 0 1.6-.836 1.6-1.867h3.2c0 1.03.717 1.867 1.6 1.867.883 0 1.6-.836 1.6-1.867h3.24C20.226 6.798 21.032 7.6 22 7.6c1.105 0 2-1.044 2-2.333V2.933C24-.8 17.6 1.067 12-9.2Z\" fill=\"#CC2836\"/><path d=\"m11.958-9.128-.024.042C11.306-3.995 6.25.18 4 1.916V5.62c0 1.023.717 1.853 1.6 1.853.883 0 1.6-.83 1.6-1.853V1.916c.786-.91 4.65-6.287 4.787-10.868-.008-.059-.021-.116-.029-.176Zm.064.369c.237 4.537 4.003 9.777 4.778 10.675V5.62c0 1.023.717 1.853 1.6 1.853.883 0 1.6-.83 1.6-1.853V1.916C17.8.218 12.838-3.818 12.022-8.76Z\" fill=\"#FF6673\"/><path d=\"M11.987-8.95c-.05 1.923-.302 9.378-1.587 10.866V5.62c0 1.023.717 1.853 1.6 1.853.883 0 1.6-.83 1.6-1.853V1.916c-1.251-1.45-1.524-8.56-1.583-10.708-.009-.052-.022-.104-.03-.158Z\" fill=\"#FF6673\"/><path d=\"M20.087 10.8s.194 2.872.817 6.037 2.164 8.273 2.164 8.273M3.821 10.8s-.194 2.872-.817 6.037S.84 25.11.84 25.11M16.845 9.168s-.108 2.877.18 6.09c.289 3.213 1.287 8.454 1.287 8.454M7.064 9.168s.107 2.877-.181 6.09c-.289 3.213-1.286 8.454-1.286 8.454\" stroke=\"#FF6673\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></g></svg>";
                var WDa = gw({
                    medium: uP,
                    vc: uP
                });
                var vP = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 12H0v6h24v-6Z\" fill=\"#7D2AE8\"/><path d=\"M12 23.333c-6.627 0-12-2.686-12-6s5.373-6 12-6 12 2.686 12 6-5.373 6-12 6Z\" fill=\"#7D2AE8\"/><path d=\"M12 24c-6.627 0-12-2.687-12-6 0-3.314 5.373-6 12-6s12 2.686 12 6c0 3.313-5.373 6-12 6Z\" fill=\"#7D2AE8\"/><path d=\"M24 6.667v10.667h-.078c-.664 3-5.746 5.333-11.922 5.333S.742 20.333.078 17.334H0V6.667h24Z\" fill=\"#00AFB5\"/><path d=\"M12 13.334c-6.627 0-12-2.686-12-6s5.373-6 12-6 12 2.686 12 6-5.373 6-12 6Z\" fill=\"#7D2AE8\"/><path d=\"M12 14C5.373 14 0 11.314 0 8s5.373-6 12-6 12 2.686 12 6-5.373 6-12 6Z\" fill=\"#7D2AE8\"/><path d=\"M24 6.667h-.667v1.334H24V6.667Zm-23.333 0H0v1.334h.667V6.667Z\" fill=\"#7D2AE8\"/><path d=\"M12 12.668c-6.627 0-12-2.686-12-6s5.373-6 12-6 12 2.686 12 6-5.373 6-12 6Z\" fill=\"#8D39FA\"/><path d=\"M12 12C5.742 12 .668 9.614.668 6.668c0-2.945 5.074-5.333 11.334-5.333 6.259 0 11.333 2.388 11.333 5.333 0 2.946-5.074 5.334-11.333 5.334Z\" fill=\"#EDF0F2\"/><path d=\"M12 2C5.98 2 1.07 4.211.704 7 .69 6.89.667 6.78.667 6.667c0-2.945 5.074-5.333 11.334-5.333 6.259 0 11.333 2.388 11.333 5.333 0 .113-.021.223-.036.333C22.93 4.211 18.02 2 12 2Z\" fill=\"#FFEDBD\"/><path d=\"M4.933 1.733A.669.669 0 0 1 4.8.799l.4-.533a.669.669 0 0 1 .933-.133l8.43 6.696c.515-.112 1.19.055 1.781.5.884.662 1.242 1.676.8 2.266-.442.59-1.516.53-2.4-.134-.556-.417-.903-.974-.974-1.476L4.933 1.733ZM1.021 3.679l.34-.574a.668.668 0 0 1 .913-.235l9.275 5.834c.48-.094 1.084.015 1.648.35.95.561 1.418 1.53 1.043 2.165-.374.634-1.449.692-2.4.13-.67-.396-1.092-.993-1.156-1.534L1.256 4.592a.669.669 0 0 1-.235-.913Zm21.646 14.987c.367 0 .667-.3.667-.666v-6c0-.367-.3-.667-.667-.667-.366 0-.666.3-.666.666v6c0 .367.3.667.666.667Zm-6 2.667c.367 0 .667-.3.667-.667v-6c0-.367-.3-.667-.667-.667-.366 0-.666.3-.666.667v6c0 .367.3.667.666.667Zm-8 0c.367 0 .667-.3.667-.667v-6c0-.367-.3-.667-.667-.667-.366 0-.666.3-.666.667v6c0 .367.3.667.666.667Zm-7.333-2.667c.367 0 .667-.3.667-.666v-6c0-.367-.3-.667-.667-.667-.367 0-.667.3-.667.666v6c0 .367.3.667.667.667Z\" fill=\"#FBBE28\"/></svg>";
                var VDa = gw({
                    medium: vP,
                    vc: vP
                });
                var wP = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z\" fill=\"#E5CCFD\"/><path d=\"m13.174 12.002 4.078-4.078a.833.833 0 0 0-1.178-1.178l-4.078 4.078-4.078-4.078a.833.833 0 1 0-1.179 1.178l4.078 4.078L6.73 16.09a.833.833 0 1 0 1.179 1.178l4.087-4.087 4.078 4.078a.83.83 0 0 0 1.179 0 .833.833 0 0 0 0-1.179l-4.079-4.078Z\" fill=\"#8D39FA\"/></svg>";
                var $Da = gw({
                    medium: wP,
                    vc: wP
                });
                var IEa = Gd.ma ? parseInt("500ms", 10) : 0,
                    xP = class extends TO {
                        constructor() {
                            super(...arguments);
                            this.Yta = () => {
                                this.props.Ve.stop()
                            }
                        }
                        render() {
                            return xO(ZO, {
                                timeout: IEa,
                                in: this.props.Ve.isActive,
                                mountOnEnter: !0,
                                unmountOnExit: !0,
                                appear: !0,
                                classNames: {
                                    enter: "U0fZ3A",
                                    enterActive: "zMVN9w",
                                    enterDone: "zMVN9w",
                                    exit: "H-C1jA",
                                    exitActive: "w_3ykA"
                                },
                                children: xO("button", {
                                    className: "_7nMBOw",
                                    onClick: this.Yta,
                                    "aria-label": H("r/ivVA")
                                })
                            })
                        }
                    };
                xP = $O([wO], xP);
                var yP = __webpack_require__.p + "images/01cf2367a387ebdfe4ad838295c940da.png";
                var JEa = __webpack_require__.p + "images/f4f35403151e4e28ee59873239388fa4.png";
                var KEa = class extends VO {
                    render() {
                        return GO("div", {
                            className: OO("agJzYA", {
                                qaEEyw: this.props.visible,
                                mNz3mA: Gd.ma
                            }),
                            children: [xO("img", {
                                className: "kB3c7g",
                                src: yP,
                                alt: "",
                                draggable: !1
                            }), xO("img", {
                                className: "Tzbhhw",
                                src: yP,
                                alt: "",
                                draggable: !1
                            }), xO("img", {
                                className: "X-HVqw",
                                src: JEa,
                                alt: H("ng4GAA"),
                                draggable: !1
                            })]
                        })
                    }
                };
                var LEa = Gd.ma ? parseInt("2000ms", 10) : 0,
                    zP = class extends TO {
                        constructor() {
                            super(...arguments);
                            this.BJa = () => {
                                this.props.Ve.stop()
                            }
                        }
                        render() {
                            const a = this.props.Ve;
                            return xO(ZO, {
                                timeout: LEa,
                                in: a.isActive,
                                mountOnEnter: !0,
                                unmountOnExit: !0,
                                appear: !0,
                                classNames: {
                                    appearActive: "_ZyxCQ",
                                    enter: "_3WuOGw",
                                    enterActive: "_ZyxCQ",
                                    exit: "j_Dv-g",
                                    exitActive: "XireNQ"
                                },
                                children: xO("button", {
                                    className: "IoLrLQ",
                                    onClick: this.BJa,
                                    "aria-label": H("j9W7Cg"),
                                    children: xO(KEa, {
                                        visible: a.isActive
                                    })
                                })
                            })
                        }
                    };
                zP = $O([wO], zP);
                var MEa = __webpack_require__.p + "images/ab8d3745ae5194143a4c787d2099ea52.png";
                var NEa = __webpack_require__.p + "images/e79b53e03f16de9d9239f40b9cc0457a.png";
                var OEa = __webpack_require__.p + "images/a01ad30577857b27d2567fe514e5e926.png";
                var PEa = __webpack_require__.p + "images/4b3c4f99c12fcb153b4dd0ec858c7630.png";
                var QEa = __webpack_require__.p + "images/47da0081a7fd2b393bf12ebf12e6b0b7.png";
                var REa = class extends VO {
                    render() {
                        return xO("div", {
                            className: OO("WGjl2g", {
                                NQYcqw: Gd.ma
                            }),
                            children: GO("div", {
                                className: "E7yuug",
                                children: [xO("img", {
                                    className: "_2nRqyQ",
                                    src: MEa,
                                    alt: ""
                                }), xO("img", {
                                    className: "Wl_xqA gKK3Ug",
                                    src: NEa,
                                    alt: ""
                                }), xO("img", {
                                    className: "oMi4wg gKK3Ug",
                                    src: OEa,
                                    alt: ""
                                }), xO("img", {
                                    className: "_3fVe6A Jvrf7w",
                                    src: PEa,
                                    alt: ""
                                }), xO("img", {
                                    className: "Azy5Jw Jvrf7w",
                                    src: QEa,
                                    alt: ""
                                })]
                            })
                        })
                    }
                };
                var SEa = Gd.ma ? parseInt("500ms", 10) : 0,
                    AP = class extends TO {
                        constructor() {
                            super(...arguments);
                            this.CJa = () => {
                                this.props.Ve.stop()
                            }
                        }
                        render() {
                            return xO(ZO, {
                                timeout: SEa,
                                in: this.props.Ve.isActive,
                                mountOnEnter: !0,
                                unmountOnExit: !0,
                                appear: !0,
                                classNames: {
                                    enter: "_U1Baw",
                                    enterActive: "yXMDzQ",
                                    enterDone: "yXMDzQ",
                                    exit: "K2UdIw",
                                    exitActive: "PQ5OxQ"
                                },
                                children: xO("button", {
                                    className: "gfT9RA",
                                    onClick: this.CJa,
                                    "aria-label": H("ujcMeA"),
                                    children: xO("div", {
                                        className: "cMw8jQ",
                                        children: xO(REa, {})
                                    })
                                })
                            })
                        }
                    };
                AP = $O([wO], AP);
                var TEa = Gd.ma ? parseInt("500ms", 10) : 0,
                    BP = class extends TO {
                        constructor() {
                            super(...arguments);
                            this.FJa = () => {
                                this.props.Ve.stop()
                            }
                        }
                        render() {
                            return xO(ZO, {
                                timeout: TEa,
                                in: this.props.Ve.isActive,
                                mountOnEnter: !0,
                                unmountOnExit: !0,
                                appear: !0,
                                classNames: {
                                    enter: "_5PoYJQ",
                                    enterActive: "acG5Mw",
                                    enterDone: "acG5Mw",
                                    exit: "EVXI2g",
                                    exitActive: "NPeTSA"
                                },
                                children: xO("button", {
                                    className: "_7pTlNg",
                                    onClick: this.FJa,
                                    "aria-label": this.props.Cna,
                                    children: this.props.children
                                })
                            })
                        }
                    };
                BP = $O([wO], BP);
                var UEa = WO(async () => ({
                        default: (await __webpack_require__.me(6996).then(() => __c.CP)).lqa
                    })),
                    VEa = class extends TO {
                        render() {
                            return xO(BP, {
                                Ve: this.props.Ve,
                                Cna: H("MCl4OA"),
                                children: xO(XO, {
                                    fallback: xO(__c.hw, {
                                        size: "large"
                                    }),
                                    children: xO(UEa, {
                                        HG: this.props.Ve.stop
                                    })
                                })
                            })
                        }
                    };
                var WEa = __webpack_require__.p + "images/700d6a5233b3c75522208a4342c7ee4f.svg";
                var XEa = __webpack_require__.p + "images/7430468583a744b170b98f1e04b09b06.svg";
                var YEa = __webpack_require__.p + "images/a29612b6213c46a035d447a4dc38b739.svg";
                var ZEa = class extends VO {
                    render() {
                        return GO("div", {
                            className: OO("xp8MuQ", {
                                cc1P8Q: Gd.ma
                            }),
                            children: [xO("img", {
                                className: "bsczPA",
                                src: WEa,
                                alt: "",
                                draggable: !1
                            }), xO("div", {
                                className: "_5U7P6w",
                                children: xO("img", {
                                    className: "_8bs-Iw",
                                    src: XEa,
                                    alt: "",
                                    draggable: !1
                                })
                            }), xO("img", {
                                className: "tC_9Cw",
                                src: YEa,
                                alt: H("wYU7Gw"),
                                draggable: !1
                            })]
                        })
                    }
                };
                var $Ea = Gd.ma ? parseInt("500ms", 10) : 0,
                    DP = class extends TO {
                        constructor() {
                            super(...arguments);
                            this.GJa = () => {
                                this.props.Ve.stop()
                            }
                        }
                        render() {
                            return xO(ZO, {
                                timeout: $Ea,
                                in: this.props.Ve.isActive,
                                mountOnEnter: !0,
                                unmountOnExit: !0,
                                appear: !0,
                                classNames: {
                                    enter: "_dTQAg",
                                    enterActive: "KrDcTQ",
                                    enterDone: "KrDcTQ",
                                    exit: "_-2zYJw",
                                    exitActive: "qFm57w"
                                },
                                children: xO("button", {
                                    className: "RI0Z2Q",
                                    onClick: this.GJa,
                                    "aria-label": H("24/B0Q"),
                                    children: xO("div", {
                                        className: "eNCwGA",
                                        children: xO(ZEa, {})
                                    })
                                })
                            })
                        }
                    };
                DP = $O([wO], DP);
                var aFa = wO(function({
                    TFa: a
                }) {
                    const b = AO(() => new __c.VB({
                            tG: 1500
                        }), []),
                        c = AO(() => [b], [b]),
                        d = AO(() => [new __c.TB], []);
                    uO(() => {
                        a.forEach((e) => e.FZ(b));
                        return () => a.forEach((e) => e.t8(b))
                    }, [a, b]);
                    return GO("div", {
                        className: "C6ifyg",
                        children: [a.map((e) => xO(mEa, {
                            children: () => e.isActive ? xO(aw, {
                                ariaLive: "assertive",
                                children: e.title
                            }, e.title) : null
                        }, e.title)), xO(__c.UB, {
                            ariaHidden: !0,
                            mode: "dynamic",
                            resolution: "matchViewPixels",
                            Gx: .6,
                            className: "C6ifyg",
                            Kj: d,
                            elements: c
                        })]
                    })
                });
                var EP = __webpack_require__.p + "images/f560943aa1b95237430fdf216b790868.png";
                var bFa = __webpack_require__.p + "images/8de0036d9c159fef2826d39e41e41e0d.png";
                var cFa = __webpack_require__.p + "images/692e0a08e1eec70086d96611501ab27c.png";
                var dFa = __webpack_require__.p + "images/4e56e4a569e82e82432bc1f681b4a381.png";
                var eFa = __webpack_require__.p + "images/1b4e4c4c31dc2d8daf633c3445fd2044.png";
                var fFa = class extends VO {
                    render() {
                        return xO("div", {
                            className: OO("oz2UKw", {
                                VDeMbA: Gd.ma
                            }),
                            children: GO("div", {
                                className: "_-N5sgQ",
                                children: [xO("img", {
                                    alt: H("mTdshw"),
                                    className: "sFdfpA",
                                    src: bFa,
                                    draggable: !1
                                }), xO("img", {
                                    alt: "",
                                    className: "b0N6fA _3Qr9Jg",
                                    src: EP,
                                    draggable: !1
                                }), xO("img", {
                                    alt: "",
                                    className: "_7EJ0fg _3Qr9Jg",
                                    src: EP,
                                    draggable: !1
                                }), xO("img", {
                                    alt: "",
                                    className: "_-nO3ZA",
                                    src: cFa,
                                    draggable: !1
                                }), xO("img", {
                                    alt: "",
                                    className: "RAfBIg",
                                    src: dFa,
                                    draggable: !1
                                }), xO("img", {
                                    alt: "",
                                    className: "_7u9W2g",
                                    src: eFa,
                                    draggable: !1
                                })]
                            })
                        })
                    }
                };
                var gFa = Gd.ma ? parseInt("500ms", 10) : 0,
                    FP = class extends TO {
                        constructor() {
                            super(...arguments);
                            this.HJa = () => {
                                this.props.Ve.stop()
                            }
                        }
                        render() {
                            return xO(ZO, {
                                timeout: gFa,
                                in: this.props.Ve.isActive,
                                mountOnEnter: !0,
                                unmountOnExit: !0,
                                appear: !0,
                                classNames: {
                                    enter: "YwNBVw",
                                    enterActive: "eKOqdA",
                                    enterDone: "eKOqdA",
                                    exit: "XDqkJA",
                                    exitActive: "bArFXw"
                                },
                                children: xO("button", {
                                    className: "gLExCA",
                                    onClick: this.HJa,
                                    "aria-label": H("N+zewA"),
                                    children: xO("div", {
                                        className: "fpJajw",
                                        children: xO(fFa, {})
                                    })
                                })
                            })
                        }
                    };
                FP = $O([wO], FP);
                var hFa = WO(async () => ({
                        default: (await __webpack_require__.me(91142).then(() => __c.GP)).sra
                    })),
                    iFa = class extends TO {
                        render() {
                            return xO(BP, {
                                Ve: this.props.Ve,
                                Cna: H("MBo60g"),
                                children: xO(XO, {
                                    fallback: xO(__c.hw, {
                                        size: "large"
                                    }),
                                    children: xO(hFa, {
                                        HG: this.props.Ve.stop
                                    })
                                })
                            })
                        }
                    };
                var jFa = __webpack_require__.p + "images/d618e0411cc404d20a60d6b17ca98b99.svg";
                var kFa = __webpack_require__.p + "images/c650f897d78e73fb945700b09f831975.svg";
                var lFa = __webpack_require__.p + "images/ba9e1d6f2cb4cb3a717ea8c5b88b8a05.svg";
                var HP = __webpack_require__.p + "images/50547a1d9284d80dec1083fd0f0918f6.svg";
                var nFa = wO(function({
                        hKa: a,
                        ea: b
                    }) {
                        var c = a.progress;
                        a = 15 <= a.progress;
                        b = new Date(b.now());
                        return xO(mFa, {
                            progress: c,
                            NIa: a,
                            GIa: 11 === b.getMonth() && 13 < b.getDate() || 0 === b.getMonth() && 6 > b.getDate()
                        })
                    }),
                    mFa = UO(function({
                        progress: a,
                        NIa: b = !1,
                        GIa: c = !1
                    }) {
                        const d = 0 === a ? "transform 0.3s ease" : void 0;
                        return xO("div", {
                            className: OO("Xc5Fkw", {
                                eTCsYg: Gd.ma
                            }),
                            children: GO("div", {
                                className: "L65CfQ",
                                style: {
                                    transition: d,
                                    transform: `translateY(${a}%)`
                                },
                                children: [xO("img", {
                                    src: lFa,
                                    alt: "",
                                    className: OO("Az4mDw", "b1KSzQ")
                                }), xO("img", {
                                    src: HP,
                                    alt: "",
                                    className: OO("Az4mDw", "PfzxDQ")
                                }), b && GO(yO, {
                                    children: [xO(oFa, {
                                        MLa: c
                                    }), xO("img", {
                                        src: HP,
                                        alt: "",
                                        className: OO("Az4mDw", "HRSMMA")
                                    })]
                                })]
                            })
                        })
                    }),
                    oFa = UO(function({
                        MLa: a
                    }) {
                        return xO("div", {
                            className: OO("_2OsR4A", {
                                kc56Ig: Gd.ma
                            }),
                            children: xO("div", {
                                className: "_5dYfA",
                                children: GO("div", {
                                    className: "_5KGtbA",
                                    children: [xO("img", {
                                        src: kFa,
                                        alt: "",
                                        className: "SQlfdQ"
                                    }), a && xO("img", {
                                        src: jFa,
                                        alt: "",
                                        className: "_8WDXyA"
                                    })]
                                })
                            })
                        })
                    });
                var IP = class extends VO {
                    constructor() {
                        super(...arguments);
                        this.onPause = () => {
                            const a = this.props.onPause,
                                b = this.props.Hy;
                            this.mV = 60 > b ? Wy("ssVZuQ", [b]) : Wy("GiTizQ", [Math.floor(b / 60), b % 60]);
                            a()
                        };
                        this.onPlay = () => {
                            const a = this.props.onPlay,
                                b = this.props.Hy;
                            this.oV = 60 > b ? Wy("L2qZMA", [b]) : Wy("TcphGg", [Math.floor(b / 60), b % 60]);
                            a()
                        }
                    }
                    get sBa() {
                        return 3600 <= this.props.Hy
                    }
                    render() {
                        const a = this.props.Ssa,
                            b = this.props.onReset,
                            c = this.props.Hy;
                        var d = this.props.state;
                        const e = "playing" === d;
                        d = "completed" ===
                            d;
                        var f = OO("xPlhtQ", this.sBa && "BvwN4w"); {
                            var g = c % 60,
                                h = Math.floor(c / 60);
                            const k = Math.floor(h / 60);
                            0 < k ? (h %= 60, g = `${k}:${10>h?"0"+h:h}:${10>g?"0"+g:g}`) : g = `${10>h?"0"+h:h}:${10>g?"0"+g:g}`
                        }
                        return GO("div", {
                            className: "KPrwLw",
                            children: [GO("div", {
                                className: "mCEVqg",
                                children: [xO(__c.nw, {
                                    size: "xlarge",
                                    color: "monoWhite",
                                    La: "legacy",
                                    children: xO("div", {
                                        className: f,
                                        children: g
                                    })
                                }), 0 === c && xO(aw, {
                                    ariaLive: "polite",
                                    children: H("Df0GgQ")
                                }), this.mV && xO(aw, {
                                    ariaLive: "polite",
                                    children: this.mV
                                }), this.oV && xO(aw, {
                                    ariaLive: "polite",
                                    children: this.oV
                                })]
                            }), xO("div", {
                                className: "AEqJtA",
                                children: a
                            }), GO("div", {
                                className: "cyRA3Q",
                                children: [xO(lA, {
                                    variant: "tertiary",
                                    icon: e ? __c.FL : __c.GL,
                                    className: OO("_5AICsw", "YN2acw"),
                                    onClick: e ? this.onPause : this.onPlay,
                                    disabled: d,
                                    size: "small",
                                    od: e ? H("drIEIQ") : H("wXGXXA")
                                }), xO(lA, {
                                    variant: "tertiary",
                                    icon: __c.VL,
                                    className: OO("_5AICsw", "gsigAQ"),
                                    onClick: b,
                                    size: "small",
                                    od: H("KAcj/w")
                                })]
                            })]
                        })
                    }
                };
                _dmr(IP, "mV");
                _dmr(IP, "oV");
                _dma(IP, "onPause", void 0);
                var JP = class {
                    constructor(a) {
                        this.window = a;
                        this.On = void 0;
                        this.wZ = this.Ez = this.gE = this.aE = 0
                    }
                    get progress() {
                        return Math.min(this.Ez / this.aE * 100, 100)
                    }
                    get state() {
                        return 100 === this.progress ? "completed" : this.On ? "playing" : "paused"
                    }
                    get Hy() {
                        return Math.ceil(this.gE / 1E3)
                    }
                    x9(a) {
                        this.aE = a;
                        this.reset()
                    }
                    play() {
                        if (void 0 === this.On) return this.xZ = this.window.performance.now(), this.On = this.window.requestAnimationFrame(this.update), this.dispose
                    }
                    pause() {
                        void 0 !== this.On && (this.window.cancelAnimationFrame(this.On),
                            this.xZ = this.On = void 0, this.wZ = this.Ez)
                    }
                    reset() {
                        this.dispose();
                        this.wZ = this.Ez = 0;
                        this.gE = this.aE;
                        this.xZ = void 0
                    }
                    dispose() {
                        this.On && (this.window.cancelAnimationFrame(this.On), this.On = void 0)
                    }
                    update(a) {
                        const b = __c.u(this.xZ, "this._resumeTimestamp must be set before performing update");
                        this.Ez = this.wZ + a - b;
                        this.gE = Math.max(this.aE - this.Ez, 0);
                        this.On = 0 < this.gE ? this.window.requestAnimationFrame(this.update) : void 0
                    }
                };
                __c.p = JP.prototype;
                _dmr(JP, "On");
                _dmr(JP, "aE");
                _dmr(JP, "gE");
                _dmr(JP, "Ez");
                _dmc(JP, "progress");
                _dmc(JP, "state");
                _dmc(JP, "Hy");
                _dmb(JP, "x9", null);
                _dmb(JP, "play", null);
                _dmb(JP, "pause", null);
                _dmb(JP, "reset", null);
                _dmb(JP, "dispose", null);
                _dmb(JP, "update", null);
                var pFa = Gd.ma ? parseInt("300ms", 10) : 0,
                    qFa = wO(function({
                        ea: a,
                        zK: b,
                        pk: c,
                        open: d,
                        window: e
                    }) {
                        const f = tO(() => new JP(e));
                        uO(() => {
                            if (d) return f.x9(b), f.play()
                        }, [b, f, d]);
                        const g = vO(null),
                            h = vO(null),
                            k = RO((z) => {
                                const {
                                    left: B,
                                    top: F,
                                    width: J
                                } = h.current.getBoundingClientRect(), N = J / 2, K = B + N, L = F + N, O = z.clientX;
                                z = z.clientY;
                                Math.sqrt((O - K) * (O - K) + (z - L) * (z - L)) > N && c()
                            }, [c]),
                            l = f.pause,
                            m = f.play,
                            n = f.Hy,
                            q = f.reset,
                            r = f.state,
                            x = AO(() => xO(nFa, {
                                hKa: f,
                                ea: a
                            }), [a, f]),
                            y = b / 1E3;
                        return xO(ZO, {
                            timeout: pFa,
                            in: d,
                            mountOnEnter: !0,
                            unmountOnExit: !0,
                            appear: !0,
                            nodeRef: g,
                            children: (z) => GO("div", {
                                className: "JlsPFA",
                                ref: g,
                                children: [xO(aw, {
                                    ariaLive: "assertive",
                                    ariaAtomic: !0,
                                    children: 60 < y ? Wy("WwdX8A", [Math.floor(y / 60), y % 60]) : Wy("R4SSJw", [y])
                                }), xO(__c.JI, {
                                    variant: "contrast",
                                    onClick: c,
                                    className: "SenkCw",
                                    ariaLabel: H("yJA10A"),
                                    icon: __c.Iw,
                                    size: "xsmall"
                                }), xO("div", {
                                    ref: h,
                                    role: "none",
                                    tabIndex: -1,
                                    onClick: k,
                                    className: OO("pBfkmg", {
                                        IZq4Yg: z === oEa && Gd.ma,
                                        kgaEbQ: z === pEa && Gd.ma
                                    }),
                                    children: xO(IP, {
                                        Ssa: x,
                                        onPause: l,
                                        onPlay: m,
                                        onReset: q,
                                        Hy: n,
                                        state: r
                                    })
                                })]
                            })
                        })
                    });
                var rFa = wO(function({
                    Ve: a,
                    ea: b = __c.ec
                }) {
                    const c = QO(__c.OM);
                    return xO(qFa, {
                        ea: b,
                        pk: a.stop,
                        open: a.isActive,
                        zK: 1E3 * a.duration,
                        window: c
                    })
                });
                __c.sFa = wO(function({
                    ea: a,
                    Nl: b
                }) {
                    const c = RO((e) => {
                            e.preventDefault()
                        }, []),
                        d = b.Qo;
                    b = AO(() => [d.ME, d.bubbles].filter(__c.pl), [d.ME, d.bubbles]);
                    return GO("div", {
                        role: "none",
                        onMouseDown: c,
                        className: "ZnVPdg",
                        children: [xO(zP, {
                            Ve: d.dK
                        }), xO(AP, {
                            Ve: d.wK
                        }), xO(xP, {
                            Ve: d.blur
                        }), xO(aFa, {
                            TFa: b
                        }), xO(FP, {
                            Ve: d.mN
                        }), xO(rFa, {
                            Ve: d.timer,
                            ea: a || __c.ec
                        }), xO(DP, {
                            Ve: d.mM
                        }), d.eD && xO(iFa, {
                            Ve: d.eD
                        }), d.$A && xO(VEa, {
                            Ve: d.$A
                        })]
                    })
                });
                var KP = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2.486 6.103A4.264 4.264 0 0 1 8.19 8.07a4.27 4.27 0 0 1-1.979 5.704 4.264 4.264 0 0 1-5.703-1.966 4.27 4.27 0 0 1 1.978-5.705Z\" fill=\"#8D39FA\"/><path d=\"M7.06 6.083c.278.096.425.4.328.678l-2.623 7.562a.535.535 0 0 1-.68.33l-1.007-.348a.532.532 0 0 1-.33-.678l2.624-7.562a.535.535 0 0 1 .679-.33l1.008.348Zm1.718 3.345-1.244 3.584c-.224.645.13 1.31.792 1.487l8.377 2.232c1.116.297 2.267-.096 2.832-.888l4.07 1.403.404-1.167-4.04-1.394c.095-.997-.584-2.065-1.678-2.532l-7.97-3.406a1.136 1.136 0 0 0-1.543.68Z\" fill=\"#CA95FC\"/><path stroke=\"#fff\" stroke-opacity=\".65\" stroke-width=\"3\" stroke-linecap=\"round\" d=\"m11.656 11.176 5.773 2.251\"/><path d=\"M10.802 10.58a1.02 1.02 0 0 1 .348-.532l.266-.7a1.401 1.401 0 0 1 1.714-.823l7.968 2.907c.647.2 1.06.834.979 1.507l-1.379 3.799a1.587 1.587 0 0 1-1.786 1.044 24.223 24.223 0 0 0-.516-.09l-3.365-.483c.095.194.216.435.172.66l-.003.018c-.108.555-.831.955-1.387.847l-2.56-.496c-.267-.052-.496-.242-.648-.468l-1.25-1.873a1.046 1.046 0 0 1-.14-.845l1.587-4.472Z\" fill=\"#FFDC5D\"/><path d=\"M18.445 17.67a.358.358 0 0 0 .401-.221l1.497-3.843a.358.358 0 0 0-.668-.26l-1.496 3.843a.358.358 0 0 0 .266.481Zm-2.173-.42a.358.358 0 0 0 .413-.258l1.275-4.637a.358.358 0 0 0-.69-.19l-1.275 4.637a.358.358 0 0 0 .277.447Zm-2.608-.103c.178.034.266.051.406-.309l.016.002a.342.342 0 0 0 .005-.058c.134-.363.318-1.057.662-2.358.32-1.21.685-2.621.748-2.95a.358.358 0 1 0-.703-.135c-.104.538-1.187 4.63-1.376 5.257a.39.39 0 0 0 .015.387.374.374 0 0 0 .227.164Z\" fill=\"#EF9645\"/><path d=\"m12.342 17.24 2.34.453a.358.358 0 1 0 .137-.703l-2.34-.454a.948.948 0 0 1-.75-1.11l.875-4.513a.358.358 0 1 0-.703-.136l-.875 4.513c-.174.9.417 1.775 1.316 1.95Z\" fill=\"#EF9645\"/></svg>";
                var XDa = gw({
                    medium: KP,
                    vc: KP
                });
                var LP = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M.667 11.333c0 6.26 5.074 11.334 11.333 11.334 6.26 0 11.333-5.074 11.333-11.334C23.333 5.074 18.26 0 12 0S.667 5.074.667 11.333Z\" fill=\"#FFCB4C\"/><path d=\"M12.125 16.703c-1.495 0-2.708-.576-2.708-1.287 0-.71 1.213-1.287 2.708-1.287 1.496 0 2.708.577 2.708 1.287s-1.212 1.287-2.708 1.287Z\" fill=\"#464C53\"/><path d=\"m7.1 17.321.021-.013a1.197 1.197 0 0 1 1.642.392l.1.164c.362-.375.834-.65 1.38-.761l.932-.19-.848-4.15a1.197 1.197 0 0 1 .93-1.408l.025-.005a1.197 1.197 0 0 1 1.408.93l1.116 5.455.01.05.208 1.02v.007l.753 3.688c.147.719-.18 1.5-1.263 1.5h-2.181c-1.87 0-2.424-.673-2.799-2.062l-1.827-2.975a1.198 1.198 0 0 1 .392-1.642Z\" fill=\"#F19020\"/><path d=\"M9.06 20.496a.225.225 0 0 0 .222-.269.685.685 0 0 1 .125-.559c.393-.538 1.526-.783 1.93-.832a.226.226 0 0 0 .197-.251.222.222 0 0 0-.252-.197c-.067.007-1.649.206-2.24 1.014a1.132 1.132 0 0 0-.204.912.227.227 0 0 0 .222.182Zm2.173 3.154c.169 0 .353-.021.555-.068.407-.096.694-.333.787-.65a.768.768 0 0 0-.193-.757c-.258-.268-.668-.356-1.13-.239a.227.227 0 0 0 .112.439c.297-.076.55-.033.692.114a.321.321 0 0 1 .085.315c-.046.158-.213.28-.457.338-.786.184-1.222-.124-1.449-.417-.339-.435-.379-1.025-.258-1.257.281-.541 1.366-.661 1.76-.662a.226.226 0 0 0 0-.452c-.069 0-1.695.01-2.161.906-.204.39-.146 1.168.302 1.743.206.263.63.647 1.355.647Zm3.285-14.834c0 .927.564 1.679 1.26 1.679.695 0 1.26-.751 1.26-1.68 0-.927-.564-1.679-1.26-1.679-.696 0-1.26.752-1.26 1.68ZM4.076 6.848a.708.708 0 0 1-.566-1.133c2.31-3.081 5.394-3.117 5.524-3.117a.708.708 0 0 1 .003 1.417c-.11.001-2.528.06-4.395 2.55a.706.706 0 0 1-.566.283ZM9.48 8.816c0 .927-.564 1.679-1.26 1.679-.695 0-1.259-.751-1.259-1.68 0-.927.564-1.679 1.26-1.679.696 0 1.26.752 1.26 1.68Zm10.443-1.968a.708.708 0 0 0 .566-1.133c-2.31-3.081-5.395-3.117-5.525-3.117a.708.708 0 0 0-.003 1.417c.111.001 2.528.06 4.395 2.55a.706.706 0 0 0 .567.283Z\" fill=\"#464C53\"/></svg>";
                var SDa = gw({
                    medium: LP,
                    vc: LP
                });
                var MP = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.332 4.028c0 .742-.602 1.343-1.333 1.343a1.341 1.341 0 0 1-1.333-1.343V1.343c0-.742.602-1.343 1.333-1.343s1.333.601 1.333 1.343v2.685ZM6.121 24a.991.991 0 0 1-.444-.107 1.012 1.012 0 0 1-.444-1.35l5.96-12.085a.991.991 0 0 1 .888-.557c.377 0 .721.215.889.556l5.96 12.085a1.014 1.014 0 0 1-.443 1.351.988.988 0 0 1-1.333-.45l-5.072-10.284-5.071 10.284a.993.993 0 0 1-.89.556Z\" fill=\"#FBBE28\"/><path d=\"M12.079 13.601a.657.657 0 0 1-.468-.197L2.339 4.005a.678.678 0 0 1 0-.95.656.656 0 0 1 .936 0l8.804 8.925 8.802-8.925a.656.656 0 0 1 .936 0 .678.678 0 0 1 0 .95l-9.27 9.4a.661.661 0 0 1-.468.196Z\" fill=\"#11171D\" fill-opacity=\".6\"/><path d=\"M22.678 12.928c0 5.932-4.743 10.741-10.596 10.741-5.851 0-10.595-4.809-10.595-10.74 0-5.934 4.744-10.743 10.595-10.743 5.852 0 10.596 4.81 10.596 10.742Z\" fill=\"#F84856\"/><path d=\"M20.025 12.926c0 4.45-3.556 8.056-7.946 8.056-4.389 0-7.946-3.607-7.946-8.056 0-4.45 3.557-8.056 7.946-8.056 4.39-.001 7.946 3.606 7.946 8.056Z\" fill=\"#EDF0F2\"/><path d=\"M20.027.842c-1.098 0-2.09.45-2.81 1.18l5.62 5.696A4.043 4.043 0 0 0 24 4.87C24 2.646 22.22.842 20.027.842Zm-16.054 0c1.097 0 2.09.45 2.81 1.18l-5.62 5.696A4.043 4.043 0 0 1 0 4.87C0 2.646 1.779.842 3.973.842Z\" fill=\"#FBBE28\"/><path d=\"M15.332 13.337h-3.333a.666.666 0 0 1-.667-.667v-6a.667.667 0 0 1 1.333 0v5.334h2.667a.667.667 0 1 1 0 1.333Z\" fill=\"#293039\"/></svg>";
                var QDa = gw({
                    medium: MP,
                    vc: MP
                });
                __c.sO = __c.pO(0, 10);
                var YDa = WO(() => __webpack_require__.me(70597).then(() => __c.NP).then((a) => ({
                        default: a.tra
                    }))),
                    ZDa = WO(() => __webpack_require__.me(5777).then(() => __c.OP).then((a) => ({
                        default: a.mqa
                    }))),
                    tFa = wO(function({
                        Pl: a,
                        KIa: b,
                        Nl: c
                    }) {
                        const d = c.xU,
                            e = AO(() => aEa(c, a), [a, c]);
                        return d.Og ? GO("div", {
                            className: "Bl4a_w",
                            children: [b && GO("div", {
                                className: "_5VfETw",
                                children: [xO(lP, {
                                    size: "medium",
                                    tone: "primary"
                                }), xO(__c.mw, {
                                    tone: "primary",
                                    lineClamp: 1,
                                    children: H("jdPy5g")
                                }), xO(lA, {
                                    variant: "tertiary",
                                    ariaLabel: H("8Gn/GQ"),
                                    icon: __c.Iw,
                                    onClick: d.gA,
                                    size: "small",
                                    Mg: "medium"
                                })]
                            }), xO(__c.oP, {
                                role: "list",
                                children: Object.entries(e).filter(([, f]) => void 0 !== f).map(([f, g]) => g && xO(__c.qP, {
                                    start: xO(XO, {
                                        fallback: xO(__c.hw, {
                                            size: "medium"
                                        }),
                                        children: xO("span", {
                                            className: "Yy2waQ",
                                            children: xO(g.za, {
                                                size: "medium"
                                            })
                                        })
                                    }),
                                    end: xO("span", {
                                        className: "_5PUDBg",
                                        children: xO(__c.lw, {
                                            Hp: g.rq,
                                            compact: !0
                                        })
                                    }),
                                    onClick: g.onClick,
                                    className: "dg44yg",
                                    children: g.label
                                }, f))
                            })]
                        }) : null
                    });
                var SP;
                PP = __c.PP = SO({
                    ei: !1,
                    pointerEvents: "all"
                });
                __c.QP = UO(function(a) {
                    ({
                        children: a
                    } = a);
                    return xO(__c.mw, {
                        size: "small",
                        tone: "primary",
                        children: xO("span", {
                            className: "vI0QHg",
                            children: a
                        })
                    })
                });
                RP = __c.RP = UO(function(a) {
                    var b = Object.assign({}, a),
                        c = a.label,
                        d = a.za;
                    a = a.variant;
                    b = (delete b.label, delete b.za, delete b.variant, b);
                    const {
                        ei: e,
                        pointerEvents: f
                    } = QO(PP);
                    return xO(lA, Object.assign({}, b, {
                        variant: "highlight" === a ? "secondary" : "tertiary",
                        className: "none" === f ? "guItPA" : "h0eHNA",
                        icon: d,
                        size: "small",
                        od: c,
                        ei: e
                    }))
                });
                SP = UO(function(a) {
                    var b = Object.assign({}, a),
                        c = a.label,
                        d = a.Fn,
                        e = a.za;
                    a = a.variant;
                    b = (delete b.label, delete b.Fn, delete b.za, delete b.variant, b);
                    const {
                        ei: f,
                        pointerEvents: g
                    } = QO(PP);
                    return xO(lA, Object.assign({}, b, {
                        variant: "highlight" === a ? "secondary" : "tertiary",
                        className: "none" === g ? "guItPA" : "h0eHNA",
                        icon: e,
                        size: "small",
                        od: c,
                        Fn: d,
                        ei: f
                    }))
                });
                __c.uFa = UO(function(a) {
                    var b = Object.assign({}, a),
                        c = a.za;
                    a = a.label;
                    b = (delete b.za, delete b.label, b);
                    const {
                        pointerEvents: d
                    } = QO(PP);
                    return xO(lA, Object.assign({}, {
                        variant: "tertiary"
                    }, b, {
                        className: "none" === d ? "guItPA" : "h0eHNA",
                        icon: c,
                        size: "small",
                        children: a
                    }))
                });
                __c.vFa = UO(function(a) {
                    var b = Object.assign({}, a),
                        c = a.label;
                    a = a.za;
                    b = (delete b.label, delete b.za, b);
                    const {
                        pointerEvents: d
                    } = QO(PP);
                    return xO(__c.rO, Object.assign({}, {
                        variant: "tertiary"
                    }, b, {
                        className: "none" === d ? "guItPA" : "h0eHNA",
                        icon: a,
                        size: "small",
                        children: c
                    }))
                });
                __c.TP = UO(function(a) {
                    var b = Object.assign({}, a),
                        c = a.za;
                    a = a.label;
                    b = (delete b.za, delete b.label, b);
                    const {
                        pointerEvents: d
                    } = QO(PP);
                    return xO(lA, Object.assign({}, {
                        variant: "tertiary"
                    }, b, {
                        className: "none" === d ? "guItPA" : "h0eHNA",
                        icon: c,
                        size: "small",
                        children: a
                    }))
                });
                __c.UP = UO(function(a) {
                    var {
                        children: b,
                        pointerEvents: c = "all",
                        Yma: d,
                        ei: e = !1
                    } = a;
                    a = AO(() => ({
                        pointerEvents: c,
                        ei: e
                    }), [c, e]);
                    return xO("div", {
                        className: OO("_19jksw", {
                            "rBFyDg Ut-ecQ": d,
                            guItPA: "all" !== a.pointerEvents
                        }),
                        children: xO(PP.Provider, {
                            value: a,
                            children: b
                        })
                    })
                });
                var wFa = Vd(__c.Td("p"));
                __c.CO = ["ArrowDown", "Enter", "PageDown", " ", "next"];
                __c.DO = ["PageUp", "ArrowUp", "previous"];
                wO(function(a) {
                    var b = a.nextPage;
                    const c = a.eV,
                        d = a.X6,
                        e = a.T7,
                        f = a.Cr,
                        g = vO(null);
                    uO(() => {
                        var h;
                        null === (h = g.current) || void 0 === h ? void 0 : h.focus()
                    }, []);
                    ({
                        ref: b
                    } = __c.EO({
                        nextPage: b,
                        eV: c,
                        X6: d,
                        T7: e
                    }));
                    return xO("div", {
                        tabIndex: -1,
                        ref: (0, __c.bP)(g, b, f),
                        children: a.children
                    })
                });
                var eEa = "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"8\" cy=\"8\" r=\"8\" fill=\"#EBA800\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9 4.25a1 1 0 0 0-2 0v3.5a1 1 0 0 0 2 0v-3.5Zm.25 7a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z\" fill=\"#fff\"/></svg>";
                var xFa;
                xFa = UO(() => xO(__c.UL, {
                    size: "medium",
                    className: "dIUp9g"
                }));
                __c.VP = UO(function(a) {
                    var {
                        $$: b,
                        L: c
                    } = a;
                    a = c + 1;
                    return GO("div", {
                        className: "Wd_0FQ",
                        children: [xO(__c.QP, {
                            children: xO("span", {
                                "aria-hidden": !0,
                                className: "_3V4QEA",
                                children: Wy("YsJd7Q", [a, b])
                            })
                        }), xO(aw, {
                            ariaLive: "polite",
                            ariaAtomic: !0,
                            children: Wy("sw+stg", [a, b])
                        })]
                    })
                });
                __c.WP = UO(function(a) {
                    var {
                        onClick: b,
                        $W: c,
                        fd: d
                    } = a;
                    return xO(RP, {
                        label: H("Q5EQOg"),
                        Fn: c ? wFa : void 0,
                        za: __c.DL,
                        active: !1,
                        Lh: !0,
                        fd: d,
                        ariaHasPopup: "dialog",
                        onClick: b
                    })
                });
                __c.XP = UO(function(a) {
                    var {
                        onClick: b,
                        fd: c
                    } = a;
                    return xO(RP, {
                        label: H("SjaqRg"),
                        Fn: "Escape",
                        za: __c.EL,
                        fd: c,
                        active: !0,
                        Lh: !0,
                        ariaHasPopup: "dialog",
                        onClick: b
                    })
                });
                __c.YP = UO(function(a) {
                    var {
                        disabled: b,
                        onClick: c
                    } = a;
                    return xO("div", {
                        className: "JRehAg",
                        children: xO(RP, {
                            label: H("umVUwA"),
                            za: xFa,
                            onClick: c,
                            disabled: b
                        })
                    })
                });
                __c.yFa = UO(function(a) {
                    var {
                        playing: b,
                        onClick: c
                    } = a;
                    return xO(RP, {
                        label: b ? H("laV+eg") : H("4wxcrQ"),
                        za: b ? __c.FL : __c.GL,
                        onClick: c
                    })
                });
                UO(function(a) {
                    var {
                        active: b,
                        badge: c,
                        VQ: d,
                        onClick: e,
                        label: f,
                        loading: g
                    } = a;
                    return xO(SP, {
                        active: b,
                        Lh: !0,
                        label: f,
                        za: void 0 === c ? mP : "notification" === c ? () => xO(HO, {
                            badge: "notification",
                            VQ: d,
                            za: mP
                        }) : () => xO(HO, {
                            badge: "warning",
                            za: mP
                        }),
                        onClick: e,
                        loading: g
                    })
                });
                UO(function(a) {
                    ({
                        onClick: a
                    } = a);
                    return xO(RP, {
                        label: H("UpbIwg"),
                        za: __c.gP,
                        onClick: a
                    })
                });
                UO(function(a) {
                    ({
                        onClick: a
                    } = a);
                    return xO(RP, {
                        label: H("nhc/4g"),
                        za: yEa,
                        onClick: a
                    })
                });
                UO(function(a) {
                    ({
                        onClick: a
                    } = a);
                    return xO(RP, {
                        label: H("ctIE0w"),
                        za: CEa,
                        onClick: a
                    })
                });
                UO(function(a) {
                    var {
                        disabled: b,
                        onClick: c,
                        Fn: d
                    } = a;
                    return xO(RP, {
                        disabled: b,
                        label: H("MrgF4w"),
                        za: __c.Py,
                        onClick: c,
                        Fn: d
                    })
                });
                UO(function(a) {
                    var {
                        disabled: b,
                        onClick: c,
                        Fn: d
                    } = a;
                    return xO(RP, {
                        disabled: b,
                        label: H("iaHyog"),
                        za: __c.Oy,
                        onClick: c,
                        Fn: d
                    })
                });
                __c.ZP = wO(function(a) {
                    var {
                        Pl: b,
                        G5a: c,
                        variant: d = "toolbar",
                        Nl: e
                    } = a;
                    a = __c.ME();
                    const f = "controls" === d;
                    var g = RO(() => xO(tFa, {
                        Pl: b,
                        KIa: !f,
                        Nl: e
                    }), [f, e, b]);
                    g = __c.zO(g);
                    const {
                        xU: {
                            Og: h,
                            aY: k,
                            gA: l
                        }
                    } = e, m = RO(() => k("legend"), [k]);
                    return xO(__c.eP, {
                        Bc: g,
                        Kt: !0,
                        className: c ? "yxgcxw" : void 0,
                        id: a,
                        ad: l,
                        open: h,
                        padding: "none",
                        placement: "controls" === d ? "bottom-end" : "top-end",
                        children: f ? xO(lA, {
                            variant: "secondary",
                            active: h,
                            fd: a,
                            od: H("jdPy5g"),
                            ariaLabel: H("jdPy5g"),
                            Lh: !0,
                            icon: lP,
                            onClick: m,
                            theme: "dark",
                            Fn: "?"
                        }) : xO(SP, {
                            za: lP,
                            active: h,
                            fd: a,
                            Lh: !0,
                            label: H("jdPy5g"),
                            onClick: m,
                            Fn: "?"
                        })
                    })
                });
            }).call(self, self._cdf17aa01cb7a37fe84ed76fc113a158);
        }

    }
])
//# sourceMappingURL=sourcemaps/3695d31397757030.js.map