(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [361], {

        /***/
        57226: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(2868);
            __web_req__(82247);
            __web_req__(12995);
            __web_req__(61368);
            __web_req__(69676);
            __web_req__(39673);
            __web_req__(9344);
            __web_req__(4252);
            __web_req__(90682);
            __web_req__(2114);
            __web_req__(22599);
            __web_req__(35096);
            __web_req__(83890);
            __web_req__(53189);
            __web_req__(54920);
            __web_req__(97924);
            self._cdf17aa01cb7a37fe84ed76fc113a158 = self._cdf17aa01cb7a37fe84ed76fc113a158 || {};
            (function(__c) {
                "use strict";
                var Sr = __c.Sr,
                    u = __c.u,
                    v = __c.v,
                    uC = __c.uC,
                    rC = __c.rC,
                    sC = __c.sC,
                    qC = __c.qC,
                    ME = __c.ME,
                    ja = __c.ja,
                    H = __c.H,
                    Wy = __c.Wy,
                    RP = __c.RP,
                    ON = __c.ON,
                    Gd = __c.Gd,
                    mw = __c.mw,
                    b_ = __c.b_,
                    uW = __c.uW,
                    ol = __c.ol,
                    tW = __c.tW,
                    gw = __c.gw,
                    E = __c.E,
                    w = __c.w;
                var W8 = function(a) {
                        return Sr({
                            design_id: a.wd,
                            doctype_id: a.Oa,
                            category_id: a.Hc,
                            mode: a.mode,
                            access_role: a.rc,
                            num_pages_in_design: a.aq,
                            current_page_index: a.aK,
                            location: a.location
                        })
                    },
                    X8 = function(a, b) {
                        return {
                            wd: a.aa,
                            Oa: a.Oa,
                            mode: a.mode,
                            rc: a.rc.toString(),
                            aq: a.Ga,
                            aK: b
                        }
                    },
                    agb = function(a, {
                        jb: b,
                        Y: c
                    }) {
                        var d;
                        __c.mF(a);
                        null === (d = a.IV) || void 0 === d ? void 0 : d.im(() => {});
                        const e = __c.nF({
                                jb: b,
                                Y: c
                            }),
                            f = a.Ah.filter((g) => g.jb < e && __c.nF(g) > b);
                        a.HV = (0, __c.NI)(() => !!a.context.get() &&
                            f.every((g) => !g.loading), () => {
                                for (const g of f) {
                                    g.jb >= b && g.jb < e && g.cm();
                                    const h = 2 === g.track.loop;
                                    a.jc.play(g, {
                                        when: Math.abs(Math.min(((h ? b % g.Y : b) - g.jb) / 1E6, 0)),
                                        loop: h,
                                        Mka: a.jC,
                                        cAa: !0
                                    })
                                }
                                a.startTime = u(a.context.get()).currentTime;
                                a.playing = !0
                            })
                    },
                    bgb = function(a) {
                        switch (a) {
                            case 1:
                                return 1;
                            case 2:
                                return 2;
                            case 3:
                                return 3;
                            case 4:
                                return 4;
                            default:
                                throw new v(a);
                        }
                    },
                    cgb = function(a) {
                        switch (a) {
                            case 1:
                                return 1;
                            case 2:
                                return 2;
                            case 3:
                                return 3;
                            case 4:
                                return 4;
                            default:
                                throw new v(a);
                        }
                    },
                    dgb = function(a) {
                        switch (a) {
                            case 4:
                                return "px";
                            case 2:
                                return "in";
                            case 1:
                                return "cm";
                            case 3:
                                return "mm";
                            default:
                                throw new v(a);
                        }
                    },
                    egb = async function(a, b) {
                        const c = uC(["reaction", "reactions", "summaries"]);
                        rC(c, {
                            parentArtifactType: b.gq,
                            source: __c.QD.O(b.source),
                            reactedObjectType: __c.VD.O(b.qN),
                            limit: u(b.limit, "FindReactionSummaryApiRequest#limit required"),
                            continuation: b.Hb
                        });
                        switch (b.gq) {
                            case "DOCUMENT":
                                rC(c, {
                                    documentId: u(b.aa, "FindReactionSummaryApiRequest#documentId required"),
                                    documentExtension: b.we
                                });
                                break;
                            case "FOLDER":
                                rC(c, {
                                    folderId: u(b.jj, "FindReactionSummaryApiRequest#folderId required")
                                });
                                break;
                            default:
                                throw new v(b);
                        }
                        b = sC(c);
                        const [d, {
                            Ypa: e
                        }] = await Promise.all([a.Qa.get(b), __webpack_require__.me(41727).then(() => ({
                            Ypa: __c.pwa
                        }))]);
                        return e.P(d)
                    },
                    fgb = async function(a, b) {
                        const c = uC(["reaction", "reactions"]);
                        rC(c, {
                            parentArtifactType: b.gq,
                            source: b.source.map((f) => __c.QD.O(f))
                        });
                        switch (b.gq) {
                            case "DOCUMENT":
                                rC(c, {
                                    documentId: u(b.aa, "DeleteReactionsApiRequest#documentId required"),
                                    documentExtension: b.we
                                });
                                break;
                            case "FOLDER":
                                rC(c, {
                                    folderId: u(b.jj, "DeleteReactionsApiRequest#folderId required")
                                });
                                break;
                            default:
                                throw new v(b);
                        }
                        b = sC(c);
                        const [d, {
                            Fpa: e
                        }] = await Promise.all([a.Qa.delete(b), __webpack_require__.me(41727).then(() => ({
                            Fpa: __c.Awa
                        }))]);
                        return e.P(d)
                    },
                    ggb = async function(a, b) {
                        const c = sC(uC(["reaction", "config"])),
                            [d, {
                                Ara: e
                            }] = await Promise.all([a.Qa.post(c, __c.bE.O(b)), __webpack_require__.me(41727).then(() => ({
                                Ara: __c.Bwa
                            }))]);
                        return e.P(d)
                    },
                    hgb = async function(a, b) {
                        __c.t(null != b.aa && /^(D)[a-zA-Z0-9_-]{10}$/.test(b.aa), "GetReactionConfigApiRequest#documentId does not match: (D)[a-zA-Z0-9_-]{10}");
                        const c = uC(["reaction", "config", b.aa]);
                        rC(c, {
                            documentExtension: b.we
                        });
                        b = sC(c);
                        const [d, {
                            kqa: e
                        }] = await Promise.all([a.Qa.get(b), __webpack_require__.me(41727).then(() => ({
                            kqa: __c.Dwa
                        }))]);
                        return e.P(d)
                    },
                    igb = function(a) {
                        __c.t(__c.mX.has(a), `Invalid viewer reaction code: ${a}`);
                        return a
                    },
                    Y8 = function(a) {
                        return sC(qC(qC(qC(uC(["signup"]),
                            "signupRedirect", a), "loginRedirect", void 0), "referrer", void 0)).replace("signup", "signup/")
                    },
                    jgb = function(a) {
                        var b = Object.assign({}, a),
                            c = a.mj;
                        a = (delete b.mj, b);
                        return Y(__c.pPa, Object.assign({}, a, {
                            children: (d, e, f) => Z8("div", {
                                role: "none",
                                className: "tVatxw",
                                onClick: e,
                                children: [Y("input", Object.assign({}, f, {
                                    className: $8("_-pFsfA", "_1uKbqg")
                                })), Y("div", {
                                    className: $8("KRuAxw VI7aNw", c && "rZxoQQ"),
                                    children: Y("div", {
                                        style: {
                                            transform: `translateX(${d}%)`
                                        },
                                        className: "g17AjQ _0Km9sA"
                                    })
                                })]
                            })
                        }))
                    },
                    kgb = function(a) {
                        a =
                            Object.assign({}, a);
                        a = (delete a.L, a);
                        return Y(a9, Object.assign({}, a))
                    },
                    lgb = function(a) {
                        switch (a) {
                            case b9:
                                return "B_8qfg";
                            case c9:
                                return "_S0jgw";
                            case d9:
                                return "Tb4XJQ";
                            case e9:
                            case f9:
                                return "wVgv6A";
                            default:
                                throw new v(a);
                        }
                    },
                    mgb = function(a) {
                        return {
                            store: g9(() => null !== a && void 0 !== a ? a : new h9, [a]),
                            Provider: i9.Provider
                        }
                    },
                    ngb = function({
                        disabled: a
                    } = {}) {
                        const b = j9(i9),
                            c = k9(null),
                            d = null === b || void 0 === b ? void 0 : b.gk;
                        return l9((e) => {
                            m9(() => {
                                d && (c.current && c.current !== e && d.delete(c.current), a || (e && c.current !==
                                    e && d.add(e), c.current = e))
                            })
                        }, [d, c, a])
                    },
                    pgb = function({
                        store: a,
                        onExit: b
                    }) {
                        var c;
                        n9(() => o9(() => a.gk.size, (d) => {
                            null != a && 0 !== d && (d = [...a.gk], a.gk.clear(), d.sort(ogb).forEach(a.gk.add, a.gk))
                        }), [a]);
                        return __c.rZ(null !== (c = null === a || void 0 === a ? void 0 : a.gk.size) && void 0 !== c ? c : 0, {
                            kh: !0,
                            mode: "cycle",
                            onChange: (d) => {
                                var e;
                                const f = null === a || void 0 === a ? void 0 : a.gk.values();
                                let g;
                                for (let h = 0; h <= d; h++) g = null === f || void 0 === f ? void 0 : f.next().value;
                                null === g || void 0 === g ? void 0 : g.focus();
                                null === (e = a.xR) || void 0 === e ? void 0 :
                                    e.call(a)
                            },
                            onExit: b
                        })
                    },
                    qgb = function(a) {
                        const b = k9(null),
                            c = k9(!1);
                        n9(() => {
                            a || (c.current ? setTimeout(() => {
                                var d;
                                return null === (d = b.current) || void 0 === d ? void 0 : d.focus()
                            }, 0) : c.current = !0)
                        }, [b, a]);
                        return {
                            ref: b
                        }
                    },
                    rgb = function({
                        tBa: a,
                        open: b,
                        close: c,
                        PB: d,
                        CG: e
                    }) {
                        var f = g9(() => {
                            const h = [
                                ["Enter", (k) => {
                                    k.preventDefault();
                                    b();
                                    setTimeout(d, 0)
                                }],
                                [" ", (k) => {
                                    k.preventDefault();
                                    b();
                                    setTimeout(d, 0)
                                }]
                            ];
                            return a ? [...h, ["next", (k) => {
                                k.preventDefault();
                                b();
                                setTimeout(d, 0)
                            }]] : [...h, ["ArrowUp", (k) => {
                                    k.preventDefault();
                                    b();
                                    setTimeout(e,
                                        0)
                                }],
                                ["ArrowDown", (k) => {
                                    k.preventDefault();
                                    b();
                                    setTimeout(d, 0)
                                }]
                            ]
                        }, [a, b, d, e]);
                        ({
                            ref: f
                        } = __c.VM(f, {
                            kh: !1
                        }));
                        var g = g9(() => a ? [
                            ["previous", (h) => {
                                h.preventDefault();
                                h.stopPropagation();
                                c()
                            }]
                        ] : [], [a, c]);
                        ({
                            ref: g
                        } = __c.VM(g, {
                            kh: !1
                        }));
                        return {
                            UKa: f,
                            OCa: g
                        }
                    },
                    sgb = function({
                        store: a,
                        Og: b,
                        close: c
                    }) {
                        const d = j9(i9);
                        n9(() => {
                            d && m9(() => {
                                d.xR = b ? c : void 0
                            })
                        }, [b, c, d]);
                        return {
                            ref: l9((e) => {
                                null === e || void 0 === e ? void 0 : e.addEventListener("mousemove", () => {
                                    var f;
                                    null === (f = a.xR) || void 0 === f ? void 0 : f.call(a)
                                })
                            }, [a])
                        }
                    },
                    tgb = function({
                        Og: a
                    }) {
                        const b =
                            k9();
                        b.current = a;
                        return {
                            ref: l9((c) => {
                                null === c || void 0 === c ? void 0 : c.addEventListener("mousemove", (d) => {
                                    b.current && d.stopPropagation()
                                })
                            }, [])
                        }
                    },
                    ugb = function({
                        store: a,
                        No: b,
                        onClose: c
                    }) {
                        n9(() => o9(() => a.open, (d) => {
                            null != d && (d ? null === b || void 0 === b ? void 0 : b() : null === c || void 0 === c ? void 0 : c())
                        }), [a, b, c])
                    },
                    vgb = function(a) {
                        return {
                            onClick: a.Qu,
                            Lh: !0,
                            ariaHasPopup: "menu",
                            active: a.open,
                            id: a.id,
                            Cr: a.Cr,
                            disabled: a.disabled,
                            fd: a.fd,
                            ariaLabel: a.ariaLabel,
                            Na: a.Na,
                            icon: a.icon,
                            xo: a.xo,
                            children: a.label
                        }
                    },
                    ogb = function(a, b) {
                        var c;
                        return (null === (c = a.compareDocumentPosition) || void 0 === c ? NaN : c.call(a, b)) & Node.DOCUMENT_POSITION_PRECEDING ? 1 : -1
                    },
                    Agb = function(a) {
                        var b;
                        const c = mgb(a.store);
                        var d = j9(i9);
                        const e = ngb();
                        d = null != d;
                        const f = c.store,
                            g = wgb(() => {
                                var z;
                                return null !== (z = a.open) && void 0 !== z ? z : f.open
                            }),
                            h = g9(() => p9(() => f.open = !f.open), [f]);
                        var k = l9(() => {
                                g || h()
                            }, [g, h]),
                            l = l9(() => {
                                g && h()
                            }, [g, h]);
                        const m = pgb({
                                store: f,
                                onExit: a.Kt ? void 0 : h
                            }),
                            {
                                UKa: n,
                                OCa: q
                            } = rgb({
                                tBa: d,
                                open: k,
                                close: l,
                                PB: m.PB,
                                CG: m.CG
                            });
                        ({
                            ref: k
                        } = qgb(g));
                        ({
                            ref: l
                        } = sgb({
                            store: f,
                            Og: g,
                            close: l
                        }));
                        ugb({
                            store: f,
                            No: a.No,
                            onClose: a.onClose
                        });
                        const {
                            Pq: r = d ? xgb : ygb
                        } = a, x = ME(), y = ME();
                        return Y(c.Provider, {
                            value: f,
                            children: Y(zgb, {
                                Pq: r,
                                open: g,
                                disabled: a.disabled,
                                aP: q9(n, a.aP),
                                poa: q9(k, e, a.poa),
                                lM: q9(q, l, a.lM, m.ref),
                                Qu: h,
                                SA: y,
                                Zt: d ? "right-start" : a.Zt,
                                SK: a.SK,
                                gs: a.gs,
                                zQ: a.zQ,
                                label: a.label,
                                icon: a.icon,
                                tagName: d ? "li" : "div",
                                className: a.className,
                                xo: a.xo,
                                Kt: a.Kt,
                                id: null !== (b = a.id) && void 0 !== b ? b : x,
                                role: d ? "none" : void 0,
                                ariaLabel: a.ariaLabel,
                                Na: a.Na,
                                children: a.children
                            })
                        })
                    },
                    Cgb = async function(a) {
                        var b =
                            window.navigator.clipboard;
                        try {
                            await b.writeText(a)
                        } catch (c) {
                            return Bgb(a)
                        }
                    },
                    Bgb = async function(a) {
                        var b = document;
                        const c = b.createElement("input");
                        c.setAttribute("data-focus-lock-excepted", "true");
                        c.style.position = "absolute";
                        c.style.left = "-9999px";
                        c.value = a;
                        c.readOnly = !0;
                        try {
                            b.body.appendChild(c);
                            const d = b.createRange();
                            d.selectNodeContents(c);
                            const e = b.getSelection();
                            e.removeAllRanges();
                            e.addRange(d);
                            c.select();
                            c.setSelectionRange(0, a.length);
                            ja(b.execCommand("copy"), "Copy must be successful")
                        } finally {
                            c.remove()
                        }
                    },
                    Dgb = function() {
                        return (a) => null != window.navigator.clipboard ? Cgb(a) : Bgb(a)
                    },
                    Fgb = function(a) {
                        const b = new Egb(a.Qk);
                        __c.FE(b, a.ua.dj);
                        return b.Nza
                    },
                    Hgb = function(a) {
                        var {
                            ya: b,
                            pG: c,
                            xd: d,
                            fb: e,
                            ua: f,
                            Gj: g,
                            Qk: h,
                            VC: k,
                            GD: l,
                            AS: m
                        } = a;
                        const n = () => f.Hd(0, "restart"),
                            q = () => {
                                z.BJ("action_button_click")
                            },
                            r = () => {
                                z.BJ("keyboard")
                            },
                            x = () => {
                                e.pd({
                                    Wc: "canva_logo",
                                    Ye: "farewell"
                                });
                                if (l.Zc) {
                                    var B = __c.PR(b),
                                        F = b.F,
                                        J = bgb(F.units);
                                    null == B ? d.Zp(new __c.Yx(Object.assign({}, F, {
                                        units: dgb(J)
                                    }))) : d.jn(new __c.Xx({
                                        CA: B
                                    }))
                                } else B = __c.PR(b),
                                    F = b.F, J = bgb(F.units), null != c && (c.TU ? (B = __c.CQ({
                                        mode: "relative",
                                        Oa: B,
                                        F: Object.assign({}, F, {
                                            units: cgb(J)
                                        })
                                    }), B = __c.mZ(B), c.TU({
                                        o8: B
                                    })) : c.Sga())
                            },
                            y = Dgb(),
                            z = new r9(e, f, h, () => y(k.oq), m);
                        return {
                            Vpa: s9(function() {
                                return z.hX ? Y(Ggb, {
                                    nT: z.nT,
                                    UEa: n,
                                    IIa: l.Zc || !!c && !!c.Tga,
                                    kEa: x,
                                    JM: z.JM,
                                    pk: q,
                                    tEa: r
                                }) : null
                            }),
                            zf: (B) => {
                                f.sj ? f.zf(B) : !z.hX && 1 < f.Ga && (g.stop(), z.U6(B))
                            },
                            Of: (B) => {
                                z.hX ? (g.start(), z.BJ(B)) : f.Of(B)
                            },
                            STa: z
                        }
                    },
                    Ggb = function(a) {
                        const b = a.nT,
                            c = a.UEa,
                            d = a.IIa,
                            e = a.kEa,
                            f = a.JM;
                        return Y(__c.fe, {
                            open: !0,
                            children: Y(__c.LN, {
                                xCa: !0,
                                G6: a.tEa,
                                children: Y("div", {
                                    className: "uiLSjw",
                                    children: Y(__c.jw, {
                                        open: !0,
                                        placement: "right-start",
                                        content: Y(Igb, {
                                            pk: a.pk
                                        }),
                                        children: Z8(__c.Ty, {
                                            spacing: {
                                                default: "xlarge",
                                                vg: "xxlarge"
                                            },
                                            EJ: "small",
                                            align: "center",
                                            children: [Y(__c.Sy, {
                                                width: "content",
                                                children: Y(Jgb, {
                                                    za: __c.VL,
                                                    label: H("GWrcpQ"),
                                                    onClick: c
                                                })
                                            }), d ? Y(__c.Sy, {
                                                width: "content",
                                                children: Y(Kgb, {
                                                    label: H("QGkSXg"),
                                                    onClick: e
                                                })
                                            }) : void 0, Y(__c.Sy, {
                                                width: "content",
                                                children: Y(Jgb, {
                                                    za: __c.NB,
                                                    label: b ? H("Ga3kGA") : H("ZjD/cg"),
                                                    onClick: f
                                                })
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    },
                    Igb = function(a) {
                        return Y(__c.JO, {
                            size: "small",
                            onClick: a.pk,
                            ariaLabel: H("WXn0wQ"),
                            children: Y(__c.Iw, {
                                size: "medium",
                                tone: "primary"
                            })
                        })
                    },
                    Mgb = function(a, b, c) {
                        switch (a) {
                            case "standard":
                                a = Math.floor((c.getTime() - b.getTime()) / 6E4);
                                if (1 > a) b = H("LLo84w");
                                else if (60 > a) b = Wy("oiJopQ", [a]);
                                else {
                                    a = Lgb(c);
                                    var d = Lgb(b);
                                    b = a === d ? Wy("QH0RfQ", [b]) : a === d + 1 ? Wy("Ln3Y0Q", [b]) : c.getFullYear() === b.getFullYear() ? Wy("phDHhQ", [b]) : Wy("DN8Wbw", [b])
                                }
                                return b;
                            case "relative":
                                b = Math.floor((c.getTime() -
                                    b.getTime()) / 6E4);
                                c = Math.floor(b / 60);
                                a = Math.floor(c / 24);
                                d = Math.floor(a / 30);
                                const e = Math.floor(d / 12);
                                return 1 > b ? H("HW2pcg") : 5 > b ? H("VTBjfA") : 60 > b ? Wy("oiJopQ", [b]) : 2 > c ? Wy("RU0X4A", [1]) : 24 > c ? Wy("RU0X4A", [c]) : 2 > a ? Wy("eKn6eg", [1]) : 30 > a ? Wy("eKn6eg", [a]) : 2 > d ? Wy("qbhwHA", [1]) : 12 > d ? Wy("qbhwHA", [d]) : 2 > e ? Wy("2ygTwQ", [1]) : Wy("2ygTwQ", [e]);
                            case "absolute":
                                return Wy("DN8Wbw", [b]);
                            default:
                                throw new v(a);
                        }
                    },
                    Lgb = function(a) {
                        return Math.floor(new Date(a.getFullYear(),
                            a.getMonth(), a.getDate()).getTime() / 864E5)
                    },
                    Ngb = function(a) {
                        return a.reduce((b, c) => {
                            b.set(c, !1);
                            return b
                        }, t9.map(new Map))
                    },
                    Pgb = function(a) {
                        return g9(() => ({
                            store: new Ogb(a),
                            la: new u9
                        }), [...a.sort()])
                    },
                    Rgb = function(a, b, c) {
                        return b ? "string" === typeof a ? Z8("div", {
                            className: "qDL-WQ ywvVuA",
                            children: [Y("div", {
                                className: "EsGUyw",
                                dangerouslySetInnerHTML: {
                                    __html: Qgb
                                }
                            }), Y("img", {
                                className: "s-qJDA _3b6rwA _F1xeQ",
                                src: a,
                                alt: c,
                                draggable: "false"
                            })]
                        }) : Y("div", {}) : "string" === typeof a ? Y("img", {
                            className: "_F1xeQ",
                            src: a,
                            alt: c,
                            draggable: "false"
                        }) : "front" in a ? Z8("div", {
                            className: "ywvVuA",
                            children: [Y("img", {
                                className: "XV8L5Q _3b6rwA _F1xeQ",
                                src: a.tya,
                                alt: c
                            }), Y("img", {
                                className: "s-qJDA _3b6rwA _F1xeQ",
                                src: a.back,
                                alt: c
                            })]
                        }) : "icon" in a ? Z8("div", {
                            className: "yOMbLA ywvVuA",
                            children: [Y("img", {
                                className: "_F1xeQ",
                                src: a.Ch,
                                alt: c,
                                draggable: "false"
                            }), Y("div", {
                                className: "Q71qTA",
                                children: a.icon
                            })]
                        }) : a
                    },
                    Ugb = function({
                        Dp: a,
                        Ex: b,
                        B: c,
                        fe: d,
                        zb: e,
                        Oc: f,
                        Dc: g,
                        Sk: h
                    }) {
                        const k = new v9({
                            Dp: a,
                            Ex: b,
                            B: c,
                            fe: d,
                            zb: e,
                            Oc: f,
                            Dc: g
                        });
                        w9(h, () => k.pf);
                        const l = s9(({
                            SA: m,
                            tg: n
                        }) => Y(Sgb, {
                            id: m,
                            Dp: k.Dp,
                            vJ: k.vJ,
                            Th: k.Th,
                            Ex: b,
                            zb: e,
                            tg: n,
                            rEa: k.Rt,
                            mEa: k.AA,
                            lEa: k.kr
                        }));
                        return {
                            WD: s9(function() {
                                const m = ME(),
                                    n = g9(() => ({
                                        tg: q
                                    }) => Y(l, {
                                        SA: m,
                                        tg: q
                                    }), [m]);
                                return Y(__c.eP, {
                                    Bc: n,
                                    placement: "top-end",
                                    padding: "none",
                                    theme: "dark",
                                    open: k.pf,
                                    ad: k.Si,
                                    gs: !0,
                                    children: Y(RP, {
                                        active: k.pf,
                                        fd: m,
                                        Lh: !0,
                                        label: H("pw/TlA"),
                                        za: Tgb,
                                        onClick: k.Si
                                    })
                                })
                            })
                        }
                    },
                    Sgb = function(a) {
                        const b = a.Dp,
                            c = a.vJ,
                            d = a.Th,
                            e = a.Ex,
                            f = a.zb,
                            g = a.lEa,
                            h = a.mEa,
                            k = a.rEa;
                        return Y(ON, {
                            id: a.id,
                            borderRadius: "standard",
                            className: $8("KSxJKA", {
                                uKJp6g: "fixed" === a.tg
                            }),
                            children: Z8(__c.uY, {
                                children: [Y(Vgb, {
                                    Ex: e,
                                    zb: f
                                }), Y(__c.sY, {}), b && d ? Y(__c.tY, {
                                    icon: Wgb,
                                    onClick: h,
                                    children: H("qdBoLQ")
                                }) : null, b && !d ? Y(__c.tY, {
                                    icon: Xgb,
                                    onClick: k,
                                    children: H("ckun+A")
                                }) : null, Y(__c.tY, {
                                    icon: Ygb,
                                    onClick: g,
                                    disabled: !c,
                                    children: H("LpF/lw")
                                })]
                            })
                        })
                    },
                    x9 = function(a) {
                        return ({
                            size: b
                        }) => Y("img", {
                            "aria-label": a.xl,
                            className: $8("ygGKTQ", Zgb[b]),
                            src: a.svg
                        })
                    },
                    ahb = function() {
                        const a = /\.svg/i;
                        Object.values(__c.y9).forEach(({
                            Nq: b
                        }) => {
                            const {
                                type: c,
                                props: d
                            } = b({
                                size: "small"
                            });
                            ja("img" === c && a.test(d.src), "Expected react element <img src=\"xxx.svg\"/>");
                            $gb({
                                crossOrigin: d.crossOrigin,
                                href: d.src,
                                referrerPolicy: d.referrerPolicy
                            })
                        })
                    },
                    $gb = function({
                        crossOrigin: a,
                        href: b,
                        referrerPolicy: c
                    }) {
                        const d = document.createElement("link");
                        d.rel = "preload";
                        d.as = "image";
                        d.href = b;
                        a && (d.crossOrigin = a);
                        c && (d.referrerPolicy = c);
                        document.head.appendChild(d)
                    },
                    chb = function({
                        Bc: a,
                        Ga: b,
                        vC: c
                    }) {
                        const d = new z9({
                            Ga: b,
                            vC: c
                        });
                        b = s9(function() {
                            return d.cX ? Y(bhb, {
                                open: d.rGa,
                                style: d.style,
                                onMouseEnter: d.uV,
                                onMouseLeave: d.yR,
                                children: Y(a, {
                                    L: d.L
                                })
                            }) : null
                        });
                        return {
                            tla: d,
                            hZ: b
                        }
                    },
                    bhb = function({
                        children: a,
                        open: b,
                        style: c,
                        onMouseEnter: d,
                        onMouseLeave: e
                    }) {
                        return Y(A9, { in: b,
                            timeout: dhb,
                            mountOnEnter: !0,
                            unmountOnExit: !0,
                            children: (f) => {
                                var g = {
                                    isXD7Q: Gd.ma
                                };
                                a: switch (f) {
                                    case c9:
                                    case b9:
                                        f = "_526Mkg";
                                        break a;
                                    case d9:
                                    case e9:
                                    case f9:
                                        f = "arS0-w";
                                        break a;
                                    default:
                                        throw new v(f);
                                }
                                return Y("div", {
                                    className: "JpPNJw",
                                    style: c,
                                    onMouseEnter: d,
                                    onMouseLeave: e,
                                    children: Y("div", {
                                        className: $8(g, f),
                                        children: a
                                    })
                                })
                            }
                        })
                    },
                    ihb = function({
                        ya: a,
                        Vj: b,
                        Kf: c,
                        Dc: d,
                        lp: e
                    }) {
                        const f = ehb({
                                Kf: c,
                                yna: b && e ? {
                                    ya: a,
                                    Vj: b,
                                    lp: e
                                } : void 0
                            }),
                            g = fhb(() => a.Ha.toArray());
                        return {
                            Rv: s9(function({
                                L: h
                            }) {
                                const k = Array.from(d.ZS(h).sO.values()).filter((l) => 0 < l.count).map((l) => ({
                                    code: l.code,
                                    count: l.count
                                }));
                                return Y(ghb, {
                                    ya: a,
                                    w1: k,
                                    page: g()[h],
                                    zk: h + 1,
                                    Cj: f
                                })
                            }),
                            jt: hhb
                        }
                    },
                    ghb = function(a) {
                        const b = a.w1,
                            c = a.page,
                            d = a.zk,
                            e = a.ya;
                        a = a.Cj;
                        const f = g9(() => {
                            var g;
                            const {
                                height: h,
                                width: k
                            } = __c.KE(null !== (g = c.F) && void 0 !== g ? g : e.F);
                            g = k > h ? jhb / k : khb / h;
                            return {
                                height: h * g,
                                width: k * g,
                                scale: g
                            }
                        }, [e, c]);
                        return Z8("article", {
                            className: "_13F1uA",
                            children: [Y(lhb, {
                                w1: b,
                                zk: d
                            }), Y("div", {
                                className: "mwyoZg",
                                children: Y("div", {
                                    className: "xcPQBQ",
                                    children: Y(a, {
                                        F: f,
                                        page: c,
                                        wj: !0,
                                        o_: "none",
                                        n_: "thick"
                                    })
                                })
                            })]
                        })
                    },
                    lhb = function({
                        w1: a,
                        zk: b
                    }) {
                        const c = k9(null),
                            d = k9(null);
                        mhb(() => {
                            c.current && d.current && (c.current.classList.remove("lhj1_g"), d.current.classList.remove("dbKeew"), c.current.offsetWidth < c.current.scrollWidth && (c.current.classList.add("lhj1_g"), d.current.classList.add("dbKeew")))
                        }, [a, b]);
                        return Z8("header", {
                            className: "GHKeOg",
                            children: [Y("div", {
                                className: $8("g_8BvQ"),
                                ref: c,
                                children: Y(mw.YD, {
                                    color: "monoWhite",
                                    Yb: "start",
                                    tagName: "span",
                                    La: "legacy",
                                    children: Wy("UcSIEQ", [b])
                                })
                            }), Y("div", {
                                className: "bIUEeQ",
                                ref: d,
                                children: a.map((e) => Y(nhb, {
                                    count: e.count,
                                    code: e.code
                                }, e.code))
                            })]
                        })
                    },
                    phb = function({
                        ya: a,
                        Vj: b,
                        Ga: c,
                        Kf: d,
                        ua: e,
                        Dc: f,
                        lp: g
                    }) {
                        const {
                            Rv: h,
                            jt: k
                        } = ihb({
                            ya: a,
                            Vj: b,
                            Kf: d,
                            Dc: f,
                            lp: g
                        }), {
                            tla: l,
                            hZ: m
                        } = chb({
                            Bc: h,
                            Ga: c,
                            vC: k
                        }), n = new B9({
                            Ga: c,
                            ua: e
                        }), q = s9(function() {
                            return Y(__c.f_, {
                                Ga: n.Ga,
                                selectedIndex: n.L,
                                Zx: n.Hd,
                                mj: n.mj
                            })
                        }), r = p9(() => {
                            n.w3();
                            l.yR()
                        });
                        a = s9(function({
                            Measure: x
                        }) {
                            return Y(ohb, {
                                Measure: x,
                                hZ: m,
                                iZ: q,
                                onMouseEnter: n.y3,
                                onMouseLeave: r,
                                EEa: l.saa,
                                onResize: l.w9
                            })
                        });
                        return {
                            tla: l,
                            xP: a
                        }
                    },
                    ohb = function({
                        Measure: a = qhb,
                        hZ: b,
                        iZ: c,
                        onMouseEnter: d,
                        onMouseLeave: e,
                        EEa: f,
                        onResize: g
                    }) {
                        const h = l9((l) => {
                                var m, n, q, r;
                                const x = null !== (n = null === (m = l.bounds) || void 0 === m ? void 0 : m.left) && void 0 !== n ? n : 0;
                                l = null !== (r = null === (q = l.bounds) || void 0 === q ? void 0 : q.width) && void 0 !== r ? r : 0;
                                g({
                                    left: x,
                                    width: l
                                })
                            }, [g]),
                            k = l9((l) => {
                                f(l.nativeEvent.clientX)
                            }, [f]);
                        return Y(a, {
                            bounds: !0,
                            onResize: h,
                            children: ({
                                measureRef: l
                            }) => Z8("div", {
                                className: "JC6sYg",
                                ref: l,
                                children: [Y("div", {
                                    onMouseEnter: d,
                                    onMouseLeave: e,
                                    onMouseMove: k,
                                    children: Y(c, {})
                                }), Y(b, {})]
                            })
                        })
                    },
                    thb = function({
                        Oc: a,
                        Dc: b
                    }) {
                        const c = new C9({
                            Oc: a,
                            Dc: b
                        });
                        a = s9(function() {
                            const d = ME();
                            n9(() => {
                                c.YV !== d && c.A9(d)
                            }, [d]);
                            return c.isEnabled ? Y(rhb, {
                                active: c.pf,
                                count: c.count,
                                YV: d,
                                onClick: c.Si
                            }) : null
                        });
                        b = s9(function({
                            g8: d
                        }) {
                            return c.isEnabled ? Y(shb, {
                                id: c.YV,
                                open: c.pf,
                                g8: d
                            }) : null
                        });
                        return {
                            Cy: {
                                Az: a,
                                Sqa: b
                            },
                            cHa: c
                        }
                    },
                    rhb = function({
                        active: a,
                        count: b,
                        YV: c,
                        onClick: d
                    }) {
                        if (0 === b) a = Y(RP, {
                            active: a,
                            fd: c,
                            Lh: !0,
                            za: uhb,
                            label: H("qF760w"),
                            onClick: d
                        });
                        else {
                            var e = H("qF760w");
                            b = 99 < b ? Wy("h1m75g", [99]) : Wy("xYwu7g", [b]);
                            a = Y(__c.TP, {
                                active: a,
                                fd: c,
                                ariaLabel: e,
                                Lh: !0,
                                za: uhb,
                                label: b,
                                onClick: d
                            })
                        }
                        return a
                    },
                    shb = function({
                        id: a,
                        open: b,
                        g8: c
                    }) {
                        return Y(vhb, {
                            gG: b ? "show" : "hide",
                            children: b && Y("div", {
                                className: "X29YHQ",
                                id: a,
                                children: c
                            })
                        })
                    },
                    whb = async function(a) {
                        if (!a.Z8 && 0 < a.queue.length) {
                            a.Z8 = !0;
                            const b = u(a.queue.shift());
                            try {
                                await b.callback()
                            } catch (c) {} finally {
                                a.Z8 = !1, whb(a)
                            }
                        }
                    },
                    xhb = async function(a, b) {
                        m9(() => a.xp = b);
                        try {
                            b ? a.fb.YO() : a.fb.XO(), await a.Sc.zoa({
                                isEnabled: b
                            })
                        } catch (c) {
                            a.B.Yc(c), m9(() => a.xp = !b), b ? b_(a.fe, {
                                LB: H("xlnvTg")
                            }) : b_(a.fe, {
                                LB: H("tzpFpg")
                            })
                        }
                    },
                    yhb = async function(a) {
                        try {
                            const {
                                isEnabled: b
                            } = await a.Sc.Lga();
                            m9(() => {
                                a.xp = b
                            })
                        } catch (b) {
                            a.B.Yc(b), m9(() => {
                                a.xp = !1
                            })
                        }
                    },
                    Bhb = function({
                        Ga: a,
                        Oc: b,
                        Dc: c
                    }) {
                        if (1 !== a) return {
                            zt: void 0,
                            Ila: void 0
                        };
                        const d = new D9(c);
                        return {
                            zt: s9(function() {
                                if (!b.Th ||
                                    0 === d.Jk) return null;
                                const e = c.Jk,
                                    f = d.pf,
                                    g = d.Si,
                                    h = d.iO;
                                return Y(__c.eZ, {
                                    children: (k) => Y(__c.eP, {
                                        Bc: () => Y(zhb, {
                                            id: k,
                                            iO: h,
                                            onClose: g
                                        }),
                                        placement: "top-end",
                                        padding: "none",
                                        theme: "dark",
                                        open: f,
                                        ad: g,
                                        children: Y(Ahb, {
                                            SA: k,
                                            Jk: e,
                                            active: f,
                                            onClick: g
                                        })
                                    })
                                })
                            }),
                            Ila: d
                        }
                    },
                    zhb = function({
                        id: a,
                        iO: b,
                        onClose: c
                    }) {
                        return Z8("div", {
                            id: a,
                            children: [Y("ul", {
                                className: "KRfyGA",
                                children: b.map(([d, e]) => {
                                    const {
                                        Nq: f
                                    } = u(__c.y9[d]);
                                    return Z8("li", {
                                        className: "XGRrMg",
                                        children: [Y(f, {
                                            size: "small"
                                        }), Y(mw, {
                                            variant: "regular",
                                            size: "small",
                                            children: Chb(e)
                                        })]
                                    }, d)
                                })
                            }), Y(__c.aw, {
                                children: Y("button", {
                                    onClick: c,
                                    children: H("foyvWw")
                                })
                            })]
                        })
                    },
                    Ahb = function({
                        SA: a,
                        Jk: b,
                        active: c,
                        onClick: d
                    }) {
                        return Y(__c.TP, {
                            za: Dhb,
                            label: Chb(b),
                            ariaLabel: H("DGeOrg"),
                            active: c,
                            fd: a,
                            Lh: !0,
                            onClick: d
                        })
                    },
                    Chb = function(a) {
                        return 99 < a ? Wy("h1m75g", [99]) : Wy("xYwu7g", [a])
                    },
                    Ehb = function(a) {
                        return Array.from(a.vA.values()).filter((b) => !a.Ir.has(b.Yn))
                    },
                    Fhb = function(a) {
                        return Ehb(a).map((b) => b.code)
                    },
                    E9 = function(a) {
                        return `${"local"}-${a.Zza++}`
                    },
                    F9 = function(a, b) {
                        let c =
                            a.Gma.get(b);
                        null == c && (c = new Ghb(Hhb), a.Gma.set(b, c));
                        return c
                    },
                    Ihb = function(a) {
                        a.Rh = [];
                        a.Ir.clear();
                        a.vA.forEach((b) => {
                            a.Ir.add(b.Yn)
                        })
                    },
                    Jhb = function(a, b) {
                        a.QR = b.reduce((c, d) => {
                            c.set(d.code, {
                                code: d.code,
                                count: d.count,
                                Sw: d.Sw
                            });
                            return c
                        }, new Map)
                    },
                    Khb = function(a, b) {
                        a.PR = b.map((c) => ({
                            kind: "db",
                            localId: E9(a),
                            code: c.code,
                            timestamp: c.timestamp,
                            L: a.L,
                            Yn: c.id
                        }))
                    },
                    Lhb = function(a, b) {
                        a.vA = b.reduce((c, d) => {
                            c.set(d.code, {
                                kind: "db",
                                localId: E9(a),
                                code: d.code,
                                timestamp: d.timestamp,
                                L: a.L,
                                Yn: d.id
                            });
                            return c
                        }, new Map)
                    },
                    Hhb = function(a) {
                        if (2 <= a.length) {
                            const b = "delete" === a[a.length - 1].meta;
                            if ("create" === a[a.length - 2].meta && b) return a.slice(0, a.length - 2)
                        }
                        return a
                    },
                    Mhb = async function(a) {
                        if (a.Zc) try {
                            const b = (await a.Sc.IS()).reduce((c, d) => {
                                let e = c.get(d.L);
                                null == e && (e = [], c.set(d.L, e));
                                e.push(d);
                                return c
                            }, new Map);
                            m9(() => {
                                b.forEach((c, d) => {
                                    Lhb(u(a.Xl.get(d)), c)
                                })
                            })
                        } catch (b) {
                            a.B.Yc(b)
                        }
                    },
                    Nhb = async function(a) {
                        try {
                            let b;
                            const c = [];
                            do {
                                const {
                                    SM: d,
                                    Hb: e
                                } = await a.Sc.mga(b);
                                c.push(...d);
                                b = e
                            } while (null != b);
                            m9(() => {
                                c.filter((d) =>
                                    a.Xl.has(d.L)).forEach((d) => {
                                    Jhb(u(a.Xl.get(d.L)), Array.from(d.z0.values()))
                                })
                            })
                        } catch (b) {
                            a.B.Yc(b)
                        }
                    },
                    Ohb = async function(a) {
                        try {
                            const b = Array.from(a.Xl.keys()).filter((e) => 0 < a.ZS(e).Jk),
                                c = [];
                            for (let e = 0; e < b.length; e += 20) {
                                const f = b.slice(e, e + 20);
                                c.push(a.Sc.XS(f))
                            }
                            const d = await Promise.all(c);
                            m9(() => {
                                d.forEach((e) => {
                                    e.reduce((f, g) => {
                                        let h = f.get(g.L);
                                        null == h && (h = [], f.set(g.L, h));
                                        h.push(g);
                                        return f
                                    }, new Map).forEach((f, g) => {
                                        Khb(u(a.Xl.get(g)), f)
                                    })
                                })
                            })
                        } catch (b) {
                            a.B.Yc(b)
                        }
                    },
                    Phb = async function(a) {
                        a.Zc &&
                            Mhb(a);
                        await Nhb(a);
                        Ohb(a)
                    },
                    Thb = async function(a) {
                        var {
                            Qb: b,
                            J: c,
                            B: d,
                            Sc: e,
                            fb: f,
                            rc: g,
                            ya: h,
                            Vj: k,
                            HI: l,
                            fe: m,
                            Ga: n,
                            zb: q,
                            ua: r,
                            Sk: x,
                            zc: y,
                            $C: z,
                            GD: B,
                            Kf: F,
                            lp: J,
                            nh: N
                        } = a, K = B.Zc;
                        const L = new G9({
                                B: d,
                                fe: m,
                                Sc: e,
                                fb: f
                            }),
                            O = new H9({
                                ea: __c.ec,
                                Zc: K,
                                Ga: n,
                                B: d,
                                Sc: e,
                                fb: f,
                                fe: m,
                                Oc: L
                            });
                        a = K && (5 === g || 6 === g);
                        const U = new I9({
                                Zc: K
                            }),
                            da = Qhb({
                                Qb: b,
                                $C: z,
                                zb: q,
                                zc: y,
                                J: c,
                                B: d,
                                Ns: U,
                                Sk: x,
                                nh: N
                            }),
                            Z = K ? Rhb() : !1,
                            X = __webpack_require__.me(37813).then(() => __c.J9).then((Va) => {
                                ({
                                    Kua: Va
                                } = Va);
                                const {
                                    ZGa: lb,
                                    Pv: jb
                                } = Va({
                                    fb: f,
                                    TG: Z,
                                    ua: r,
                                    Ns: U,
                                    Oc: L,
                                    Dc: O
                                });
                                m9(() => {
                                    w9(x, () => lb.tV)
                                });
                                return jb
                            });
                        K = K9(async () => ({
                            default: await X
                        }));
                        const {
                            cHa: ha,
                            Cy: la
                        } = thb({
                            Oc: L,
                            Dc: O
                        }), {
                            xP: ma
                        } = phb({
                            ya: h,
                            Vj: k,
                            Ga: n,
                            ua: r,
                            Dc: O,
                            Kf: F,
                            lp: J
                        }), {
                            zt: Ha,
                            Ila: na
                        } = Bhb({
                            Ga: n,
                            Oc: L,
                            Dc: O
                        });
                        w9(x, () => ha.pf);
                        na && w9(x, () => na.pf);
                        const Da = Shb({
                            Ga: n,
                            Oc: L,
                            Dc: O
                        });
                        return {
                            enabled: !0,
                            Dp: a,
                            HI: l,
                            fe: m,
                            xP: ma,
                            Pv: K,
                            $ba: da,
                            Cy: la,
                            Oc: L,
                            Dc: O,
                            zP: Da,
                            zt: Ha,
                            QHa: async (Va) => {
                                ({
                                    Cb: Va
                                } = Va);
                                ahb();
                                const lb = yhb(L),
                                    jb = Phb(O);
                                Z && "compact" === Va && ha.Si();
                                await Promise.allSettled([lb, jb])
                            }
                        }
                    },
                    Shb = function(a) {
                        var {
                            Ga: b,
                            Oc: c,
                            Dc: d
                        } = a;
                        if (!(1 >=
                                b)) return K9(async () => {
                            var {
                                Mua: e
                            } = await __webpack_require__.me(33151).then(() => __c.L9);
                            ({
                                zP: e
                            } = e({
                                Ga: b,
                                Oc: c,
                                Dc: d
                            }));
                            return {
                                default: e
                            }
                        })
                    },
                    Qhb = function(a) {
                        var {
                            Qb: b,
                            $C: c,
                            zb: d,
                            zc: e,
                            J: f,
                            B: g,
                            Ns: h,
                            Sk: k,
                            nh: l
                        } = a;
                        if (c.enabled && !h.Zc) return w9(k, () => h.pK), K9(async () => {
                            const {
                                Lua: m
                            } = await __webpack_require__.me(15527).then(() => __c.Uhb);
                            return {
                                default: await m({
                                    Qb: b,
                                    zb: d,
                                    zc: e,
                                    J: f,
                                    B: g,
                                    Go: c.Go,
                                    yu: c.yu,
                                    Ns: h,
                                    Ewa: Vhb,
                                    nh: l
                                })
                            }
                        })
                    },
                    Vhb = function() {
                        try {
                            sessionStorage.setItem("dv_quick_reactions_show_react_onboarding", __c.ec.now().toString())
                        } catch (a) {}
                    },
                    Rhb = function() {
                        var a = null;
                        try {
                            a = sessionStorage.getItem("dv_quick_reactions_show_react_onboarding")
                        } catch (c) {}
                        var b = !1;
                        if (null != a) {
                            a = parseInt(a, 10);
                            !isNaN(a) && 0 < a && (b = __c.ec.now() - a, b = 0 <= b && 6E4 >= b);
                            try {
                                sessionStorage.removeItem("dv_quick_reactions_show_react_onboarding")
                            } catch (c) {}
                        }
                        return b
                    },
                    K9 = function(a) {
                        const b = M9(a);
                        return (c) => Y(N9, {
                            fallback: null,
                            children: Y(b, Object.assign({}, c))
                        })
                    },
                    Whb = function(a) {
                        switch (a) {
                            case c9:
                                return "ZQMJDw";
                            case b9:
                                return "A-7TQg";
                            case d9:
                                return "zYwzoQ";
                            case e9:
                                return "WRshfA";
                            case f9:
                                return "WRshfA";
                            default:
                                throw new v(a);
                        }
                    },
                    Xhb = function(a) {
                        return [{
                            XT: "Escape",
                            callback: () => {
                                "grid" === a.mode && a.Ji("page")
                            }
                        }]
                    },
                    Yhb = function() {
                        switch (document.location.hostname.replace(/^www\./, "")) {
                            case "canva.com":
                                return "www.canva.com";
                            case "canva.cn":
                                return "www.canva.cn";
                            case "canva-staging.com":
                                return "www.canva-staging.com";
                            case "canva-staging.cn":
                                return "www.canva-staging.cn";
                            case "canva-dev.com":
                                return "www.canva-dev.com";
                            default:
                                return "www.canva.com";
                        }
                    },
                    Zhb = function(a) {
                        const b = M9(a);
                        return (c) => Y(N9, {
                            fallback: null,
                            children: Y(b, Object.assign({}, c))
                        })
                    },
                    w9 = function(a, b) {
                        a.C2.push(b)
                    },
                    eib = async function({
                        zc: a,
                        Qb: b,
                        B: c,
                        J: d,
                        pG: e,
                        xd: f,
                        Sc: g,
                        Lv: h,
                        Vl: k,
                        Jc: l,
                        Fi: m,
                        P9: n,
                        aa: q,
                        Vj: r,
                        ya: x,
                        rc: y,
                        extensions: z,
                        Kk: B,
                        lastModifiedDate: F,
                        lp: J,
                        cc: N,
                        UN: K,
                        Gh: L,
                        Qk: O,
                        TZ: U,
                        DB: da,
                        JA: Z,
                        ura: X,
                        cd: ha,
                        zb: la,
                        eHa: ma,
                        $C: Ha,
                        MO: na,
                        GD: Da,
                        nh: Va,
                        I1: lb,
                        HK: jb
                    }) {
                        const mb = __c.PR(x),
                            qb = x.Ha.count(),
                            nb = new uW({
                                J: d,
                                mode: "viewer2",
                                aa: q,
                                Oa: mb,
                                Ga: qb,
                                rc: y,
                                Kk: B
                            }),
                            $a = new __c.yY({
                                ya: x,
                                fb: nb
                            }),
                            db = new O9($a, N),
                            fb = Da.Zc ? Da.Pc : void 0,
                            eb = x.title || H("9jHqsQ"),
                            pb = new P9({
                                aa: q,
                                extensions: z,
                                UN: K,
                                fb: nb,
                                Lv: h
                            }),
                            ob = new Q9({
                                aa: q,
                                uK: z,
                                ui: x.title,
                                role: y,
                                ua: $a,
                                fb: nb,
                                xd: f
                            }),
                            rb = new __c.lX(new __c.vPa(), [{
                                name: "large",
                                minWidth: __c.cw,
                                minHeight: 450
                            }, {
                                name: "small-landscape",
                                minWidth: 0,
                                orientation: "landscape"
                            }], "small"),
                            gb = new R9;
                        w9(gb, () => ob.pf);
                        w9(gb, () => pb.pf);
                        const Oa = await (ma.enabled ? Thb({
                            Qb: b,
                            J: d,
                            B: c,
                            Sc: g,
                            fb: nb,
                            rc: y,
                            ya: x,
                            Vj: r,
                            HI: ma.HI,
                            fe: ma.fe,
                            Ga: qb,
                            zb: la,
                            ua: $a,
                            Sk: gb,
                            zc: a,
                            $C: Ha,
                            GD: Da,
                            lp: J,
                            Kf: X,
                            nh: Va
                        }) : {
                            enabled: !1,
                            xP: void 0,
                            Pv: void 0,
                            Cy: void 0,
                            zt: void 0,
                            Oc: void 0,
                            Dc: void 0
                        });
                        Oa.enabled && Oa.QHa({
                            Cb: "large" === rb.N ? "comfortable" : "compact"
                        });
                        const {
                            WD: Pa
                        } = Da.Zc && Oa.enabled ? Ugb({
                            Dp: Oa.Dp,
                            Ex: new Date(F),
                            B: c,
                            fe: Oa.fe,
                            zb: la,
                            Oc: Oa.Oc,
                            Dc: Oa.Dc,
                            Sk: gb
                        }) : {
                            WD: void 0
                        }, oc = ehb({
                            Kf: X,
                            yna: {
                                ya: x,
                                Vj: r,
                                lp: J
                            }
                        }), wb = (g = 1 < $a.Ga) ? Oa.enabled ? Y(Oa.xP, {}) : Y($hb, {
                            Jc: l,
                            ua: $a,
                            ya: x,
                            Cj: oc,
                            variant: "ftb",
                            mode: "multiple"
                        }) : void 0;
                        h = s9(({
                            store: Ud
                        }) => Y(jgb, {
                            Ga: Ud.Ga,
                            selectedIndex: Ud.L,
                            Zx: (gf) => Ud.Hd(gf, "progress_bar")
                        }));
                        const Tb = g ? Y(h, {
                                store: $a
                            }) : void 0,
                            gc = new S9(N, L, T9(() => x),
                                T9(() => $a.dj), jb);
                        e = Hgb({
                            ya: x,
                            Qk: O,
                            pG: e,
                            xd: f,
                            fb: nb,
                            ua: $a,
                            Gj: gc,
                            VC: pb,
                            GD: Da,
                            AS: 3E4
                        });
                        const rd = Y(e.Vpa, {}),
                            rc = e.zf,
                            ie = e.Of,
                            je = Y(aib, {
                                F: x.F,
                                ua: $a,
                                cd: ha,
                                BFa: rc,
                                CFa: ie
                            }),
                            zc = new U9(x),
                            Gc = new bib,
                            Ff = (Ud) => {
                                $a.Hd(Ud, "grid_thumbnail");
                                gb.Ji("page")
                            },
                            Mh = (Ud) => {
                                "grid" === gb.mode && (Ud.stopPropagation(), gb.Ji("page"))
                            },
                            Cm = ({
                                state: Ud,
                                MC: gf
                            }) => Y(__c.mN, {
                                pg: Mh,
                                children: Y(V9, {
                                    uu: rb,
                                    selectedIndex: $a.L,
                                    animation: Ud === c9 ? "in" : Ud === d9 ? "out" : "none",
                                    onClick: Ff,
                                    MC: gf,
                                    store: zc,
                                    vz: Gc,
                                    Cj: oc
                                })
                            }),
                            aj = t9.box(!1),
                            cj = __c.q_.create(a,
                                b, k),
                            Am = new W9({
                                B: c,
                                fb: nb,
                                ua: $a,
                                Zc: Da.Zc,
                                variant: 1 === na ? U : 1,
                                Oa: mb
                            }),
                            Yo = 1 === a ? {
                                isEnabled: !0,
                                YDa: () => nb.pd({
                                    Wc: "canva_logo",
                                    Ye: "player"
                                }),
                                DB: da
                            } : {
                                isEnabled: !1
                            },
                            ff = !Da.Zc && na && 1 !== na ? await cib({
                                $C: Ha,
                                zb: la,
                                zc: a,
                                Qb: b,
                                ua: $a,
                                Sk: gb,
                                Oa: mb,
                                J: d,
                                fb: nb,
                                xd: f,
                                B: c,
                                MO: na,
                                nh: Va
                            }) : {
                                enabled: !1
                            },
                            Ck = Oa.enabled && Oa.zP ? Y(Oa.zP, {}) : void 0,
                            Zo = lb && Ha.enabled ? dib({
                                Qb: b,
                                Hj: Ha.yu.Hj,
                                J: d,
                                Go: Ha.Go,
                                B: c
                            }) : void 0,
                            Hh = [...__c.QV({
                                Of: () => ie("keyboard"),
                                zf: () => rc("keyboard")
                            }), ...Xhb(gb)];
                        return {
                            fb: nb,
                            ua: $a,
                            Sk: gb,
                            Fra: () => {
                                const Ud = Y(__c.eZ, {
                                    count: 2,
                                    children: (gf, Ih) => {
                                        var Sb;
                                        return Z8(X9, {
                                            children: [Y(__c.PV, {
                                                rootElement: n,
                                                O9: Hh
                                            }), Oa.enabled && Y(Oa.HI, {}), Oa.enabled && Oa.$ba && Y(Oa.$ba, {}), ff.enabled && ff.rZ && Y(ff.rZ, {}), Y(Y9, {
                                                Gj: gc,
                                                Fj: aj,
                                                cu: gf,
                                                lC: Ih,
                                                ui: eb,
                                                Sk: gb,
                                                DI: Cm,
                                                jc: je,
                                                toolbar: Y(Z9, {
                                                    Gj: gc,
                                                    Nsa: db,
                                                    Sk: gb,
                                                    VC: pb,
                                                    Bw: ob,
                                                    Jc: l,
                                                    ua: $a,
                                                    uu: rb,
                                                    QA: cj,
                                                    RZ: Am,
                                                    WD: Pa,
                                                    Pv: Oa.Pv,
                                                    Cy: Oa.Cy,
                                                    zt: Oa.zt,
                                                    Fj: aj,
                                                    cu: gf,
                                                    lC: Ih,
                                                    aa: q,
                                                    ui: eb,
                                                    Ao: null != mb && __c.v_.includes(mb),
                                                    fb: nb,
                                                    extension: z,
                                                    rc: y,
                                                    s_: Yo,
                                                    JA: Z
                                                }),
                                                k8: Ck,
                                                uu: rb,
                                                bta: wb,
                                                xKa: Tb,
                                                Sv: ff.enabled ? ff.Sv : void 0,
                                                Fi: m,
                                                appearance: __c.iV(null === (
                                                    Sb = null === fb || void 0 === fb ? void 0 : fb.user.Hv) || void 0 === Sb ? void 0 : Sb.qE),
                                                e2: rd,
                                                nqa: Zo
                                            })]
                                        })
                                    }
                                });
                                return 3 === a ? Y(__c.mN, {
                                    pg: cj.pg,
                                    children: Ud
                                }) : Ud
                            }
                        }
                    },
                    fib = function({
                        aa: a,
                        extensions: b,
                        Sc: c
                    }) {
                        function d(f) {
                            ja("PAGE" === f.pN.j8);
                            const g = f.pN.L;
                            return {
                                id: f.id,
                                code: igb(f.rN),
                                L: g,
                                timestamp: f.timestamp
                            }
                        }
                        class e {
                            constructor(f, g, h) {
                                this.aa = f;
                                this.we = g;
                                this.Sc = h
                            }
                            async Lga() {
                                const {
                                    configuration: {
                                        Jfa: f
                                    }
                                } = await hgb(this.Sc, new __c.Cwa({
                                    aa: this.aa,
                                    we: this.we
                                }));
                                return {
                                    isEnabled: f
                                }
                            }
                            async zoa({
                                isEnabled: f
                            }) {
                                await ggb(this.Sc,
                                    new __c.bE({
                                        aa: this.aa,
                                        we: this.we,
                                        config: {
                                            Jfa: f
                                        }
                                    }))
                            }
                            async mga(f) {
                                ({
                                    body: f
                                } = await egb(this.Sc, new __c.lwa({
                                    source: 1,
                                    aa: this.aa,
                                    we: this.we,
                                    qN: 1,
                                    Hb: f
                                })));
                                switch (f.summary) {
                                    case "FOLDER_SUMMARY":
                                        throw Error("Unexpected folder summary");
                                    case "DOCUMENT_SUMMARY":
                                        return {
                                            Hb: f.Hb,
                                            SM: f.SM.map((g) => ({
                                                L: g.L,
                                                z0: g.Fla.reduce((h, k) => {
                                                    const l = igb(k.rN);
                                                    h.set(l, {
                                                        code: l,
                                                        count: k.count,
                                                        Sw: k.Sw
                                                    });
                                                    return h
                                                }, new Map)
                                            }))
                                        };
                                    default:
                                        throw new v(f);
                                }
                            }
                            async XS(f) {
                                ({
                                    Cf: f
                                } = await this.Sc.XS(new __c.Ewa({
                                    aa: this.aa,
                                    we: this.we,
                                    source: 1,
                                    h7: f
                                })));
                                return f.map(d)
                            }
                            async IS() {
                                const {
                                    Cf: f
                                } = await this.Sc.IS(new __c.Jwa({
                                    aa: this.aa,
                                    we: this.we,
                                    source: 1,
                                    qN: 1
                                }));
                                return f.map(d)
                            }
                            async KR(f, g) {
                                f = await this.Sc.WJ(new __c.UD({
                                    body: new __c.TD({
                                        source: 1,
                                        PFa: new __c.RD({
                                            id: this.aa,
                                            extension: this.we
                                        }),
                                        L: g,
                                        rN: f
                                    })
                                }));
                                switch (f.type) {
                                    case "SUCCESS":
                                        return {
                                            kind: "success",
                                            Ms: f.id
                                        };
                                    case "ERROR":
                                        return {
                                            kind: "error",
                                            errorCode: f.errorCode
                                        };
                                    default:
                                        throw new v(f);
                                }
                            }
                            async lK(f) {
                                f = await this.Sc.jK(new __c.Nwa({
                                    id: f
                                }));
                                switch (f.type) {
                                    case "SUCCESS":
                                        return {
                                            kind: "success"
                                        };
                                    case "ERROR":
                                        return {
                                            kind: "error",
                                            errorCode: f.errorCode
                                        };
                                    default:
                                        throw new v(f);
                                }
                            }
                            async kr() {
                                const f = await fgb(this.Sc, {
                                    aa: this.aa,
                                    we: this.we,
                                    gq: "DOCUMENT",
                                    source: [1]
                                });
                                switch (f.type) {
                                    case "SUCCESS":
                                        return {
                                            kind: "success"
                                        };
                                    case "ERROR":
                                        return {
                                            kind: "error",
                                            errorCode: f.errorCode
                                        };
                                    default:
                                        throw new v(f);
                                }
                            }
                        }
                        return new e(a, b.default || b.view, c)
                    },
                    hib = function({
                        aa: a,
                        extensions: b,
                        Qa: c
                    }) {
                        return fib({
                            aa: a,
                            extensions: b,
                            Sc: new gib(c)
                        })
                    },
                    lib = async function(a) {
                        var {
                            aa: b,
                            j1: c,
                            ui: d,
                            extensions: e,
                            kf: f,
                            B: g,
                            Zc: h,
                            Bk: k
                        } = a;
                        switch (f.mode) {
                            case "REAL":
                                let L;
                                var l;
                                let O;
                                let U;
                                var m = f.Zo ? __c.sW.create(__c.iv(f.J.Id), f.Zo) : void 0;
                                var n = __c.BV(k);
                                var q = __c.ZQ(f.UG || "/_online", f.RF || 1);
                                switch (f.zc) {
                                    case 3:
                                        var r = await __c.EZ(f.Qa);
                                        ({
                                            Qb: a,
                                            Qa: L,
                                            Qh: l
                                        } = r);
                                        var x = r.Vm;
                                        n = r.G.$;
                                        var y = r.G.sE;
                                        var z = r.G.vl;
                                        var B = r.G.Mw;
                                        var F = r.G.PU;
                                        var J = r.G.orientation;
                                        var N = r.G.performance;
                                        var K = r.G.sx;
                                        if (null == z) throw new __c.n_("documentNavigation");
                                        if (null == B) throw new __c.n_("externalNavigation");
                                        K && (O = new __c.x_(new __c.y_(x, K)));
                                        K = __c.WQ({
                                            Id: f.J.Id,
                                            md: f.J.md,
                                            oc: O,
                                            Ge: f.J.Ge
                                        });
                                        m = __c.yV(f.J, f.commit, void 0, K, r.Vm, m, void 0, n);
                                        r = new __c.X_(new __c.Y_(r.Vm, B));
                                        ({
                                            Jc: B,
                                            Fi: n
                                        } = __c.TQ());
                                        q = y ? __c.FZ(x, y) : {};
                                        y = q.login ? new $9(q.login) : void 0;
                                        z = new __c.m_(x, z);
                                        z = q.home && q.Cw ? new __c.gW(Object.assign({}, q.home, q.Cw), z, g) : z;
                                        F = null != F ? new __c.B_(new iib(x, F), window.navigator) : void 0;
                                        J = (J = J ? new __c.z_(x, J) : void 0) ? new __c.ZY(J) : void 0;
                                        x = N ? new __c.A_(x, N) : void 0;
                                        break;
                                    case 2:
                                        r = await __c.DZ(f.Qa);
                                        ({
                                            Qb: a,
                                            Qa: L
                                        } = r);
                                        N = r.Vm;
                                        y = r.G.sE;
                                        z = r.G.vl;
                                        B = r.G.Mw;
                                        F = r.G.PU;
                                        K = r.G.sx;
                                        if (null == z) throw new __c.n_("documentNavigation");
                                        if (null == B) throw new __c.n_("externalNavigation");
                                        K && (O = new __c.x_(new __c.y_(N, K)));
                                        K = __c.WQ({
                                            Id: f.J.Id,
                                            md: f.J.md,
                                            oc: O,
                                            Ge: f.J.Ge
                                        });
                                        m = __c.yV(f.J, f.commit, new __c.kW(L), K, void 0, m, void 0, void 0, void 0, q, n);
                                        r = new __c.X_(new __c.Y_(r.Vm, B));
                                        ({
                                            Jc: B,
                                            Fi: n
                                        } = __c.SQ());
                                        q = y ? __c.FZ(N, y) : {};
                                        y = q.login ? new $9(q.login) : void 0;
                                        z = new __c.m_(N, z);
                                        z = q.Cw && q.home ? new __c.gW(Object.assign({}, q.Cw, q.home), z, g) : z;
                                        F = (N = F ? new iib(N, F) : void 0) ? new __c.B_(N, window.navigator) :
                                            void 0;
                                        break;
                                    case 1:
                                        L = new __c.oW(f.Qa, new __c.GV());
                                        a = new __c.w_;
                                        K = __c.WQ({
                                            Id: f.J.Id,
                                            md: f.J.md,
                                            oc: void 0,
                                            Ge: f.J.Ge
                                        });
                                        m = __c.yV(f.J, f.commit, new __c.kW(L), K, void 0, m, void 0, void 0, void 0, q, n);
                                        y = (r = new __c.dW(__c.fZ()), new jib(r));
                                        z = new __c.gW(r, new __c.hW({
                                            B: g,
                                            Js: __c.fZ()
                                        }), g);
                                        r = new __c.jW(__c.fZ());
                                        F = new __c.B_(void 0, window.navigator);
                                        J = new __c.by;
                                        ({
                                            Jc: B,
                                            Fi: n
                                        } = __c.SQ());
                                        h || (U = {
                                            Rg: new __c.yPa(L),
                                            bB: new __c.CPa,
                                            og: __c.r_.create(),
                                            vb: new __c.s_(L),
                                            tf: new __c.t_(L),
                                            hm: new __c.BPa
                                        });
                                        break;
                                    default:
                                        throw new v(f.zc);
                                }
                                N = hib({
                                    aa: b,
                                    extensions: e,
                                    Qa: L
                                });
                                return {
                                    ea: __c.pQ(f.timestamp),
                                    Qb: a,
                                    J: m,
                                    gf: new __c.lW(L),
                                    Vc: K,
                                    Qh: l,
                                    oc: O,
                                    $E: new kib(L),
                                    ac: new __c.aW(L, new __c.bW(L)),
                                    pG: y,
                                    xd: z,
                                    gh: r,
                                    Go: U,
                                    Sc: N,
                                    Lv: F,
                                    Vl: J,
                                    Jc: B,
                                    vy: x,
                                    Fi: n
                                };
                            case "FAKE":
                                return ({
                                    NAa: l
                                } = await __webpack_require__.me(94721).then(() => __c.g4a)), l({
                                    kf: f,
                                    j1: c,
                                    ui: d,
                                    Zc: h,
                                    B: g
                                });
                            default:
                                throw new v(f);
                        }
                    },
                    mib = function(a, b) {
                        setTimeout(() => {
                            __c.MR(b);
                            a.Wq()
                        })
                    },
                    nib = function(a) {
                        if (a) {
                            const {
                                oca: c,
                                fe: d
                            } = __c.oPa();
                            a = c;
                            var b = d;
                            return {
                                enabled: !0,
                                HI: a,
                                fe: b
                            }
                        }
                        return {
                            enabled: !1
                        }
                    };
                uW.prototype.dY = ol(95, function(a) {
                    this.eb.mp({
                        Fs: a.Fs,
                        VB: a.VB,
                        EG: "farewell",
                        mode: this.mode,
                        wd: this.aa,
                        Oa: this.Oa,
                        aq: this.Ga
                    })
                });
                uW.prototype.UO = ol(94, function(a) {
                    this.eb.mp({
                        Fs: a.Fs,
                        wC: a.wC,
                        EG: "farewell",
                        mode: this.mode,
                        wd: this.aa,
                        Oa: this.Oa,
                        aq: this.Ga
                    })
                });
                tW.prototype.XO = ol(93, function(a) {
                    this.J.track("reactions_disabled", Sr({
                        viewing_context: null == a.sm ? void 0 : W8(a.sm)
                    }))
                });
                uW.prototype.XO = ol(92, function() {
                    this.eb.XO({
                        sm: X8(this)
                    })
                });
                tW.prototype.YO = ol(91, function(a) {
                    this.J.track("reactions_enabled", Sr({
                        viewing_context: null == a.sm ? void 0 : W8(a.sm)
                    }))
                });
                uW.prototype.YO = ol(90, function() {
                    this.eb.YO({
                        sm: X8(this)
                    })
                });
                tW.prototype.OO = ol(89, function(a) {
                    this.J.track("all_user_reactions_deleted", Sr({
                        viewing_context: null == a.sm ? void 0 : W8(a.sm)
                    }))
                });
                uW.prototype.OO = ol(88, function() {
                    this.eb.OO({
                        sm: X8(this)
                    })
                });
                tW.prototype.WO = ol(87, function(a) {
                    var b = this.J,
                        c = b.track;
                    a = Sr({
                        viewing_context: null == a.sm ? void 0 : W8(a.sm),
                        reaction_name: a.Hla,
                        reaction_code: a.AC
                    });
                    c.call(b, "reaction_deleted", a)
                });
                uW.prototype.WO = ol(86, function(a) {
                    var {
                        AC: b,
                        aK: c
                    } = a;
                    this.eb.WO({
                        sm: X8(this, c),
                        AC: b
                    })
                });
                tW.prototype.VO = ol(85, function(a) {
                    var b = this.J,
                        c = b.track;
                    a = Sr({
                        editing_context: null == a.Ot ? void 0 : __c.OR(a.Ot),
                        viewing_context: null == a.sm ? void 0 : W8(a.sm),
                        folder_id: a.jj,
                        page_index: a.L,
                        comment_id: a.aea,
                        source: a.source,
                        reaction_target: a.aHa,
                        reaction_type: a.bHa,
                        reaction_name: a.Hla,
                        reaction_code: a.AC,
                        live_session_id: a.fXa
                    });
                    c.call(b, "reaction_applied", a)
                });
                uW.prototype.VO = ol(84, function(a) {
                    var {
                        AC: b,
                        aK: c
                    } = a;
                    this.eb.VO({
                        source: this.mode,
                        aHa: "page",
                        bHa: "quick_reaction",
                        sm: X8(this, c),
                        Hla: "",
                        AC: b
                    })
                });
                __c.FJ.prototype.SC = ol(64, function(a) {
                    this.Es = a;
                    this.jC && this.playing && (this.jC.gain.value = a)
                });
                __c.wM.prototype.SC = ol(63, function(a) {
                    this.store.Es = a
                });
                __c.Yr.prototype.Qm = ol(52, async function() {
                    return this.bk()
                });
                __c.xV.prototype.Qm = ol(51, async function() {
                    return this.bk()
                });
                __c.uV.prototype.Qm = ol(50, async function() {
                    return this.bk()
                });
                __c.tV.prototype.Qm = ol(49, function() {
                    return Promise.resolve(this.user.bk())
                });
                __c.wV.prototype.Qm = ol(48, async function() {});
                __c.vV.prototype.Qm = ol(47, async function() {
                    return this.Eb[0].Qm()
                });
                __c.So.prototype.NF = ol(17, function(a) {
                    return this.dh[__c.Km(this, a)].id
                });
                __c.To.prototype.NF = ol(16, function(a) {
                    const b = this.predicate;
                    __c.t(b(a));
                    return this.base.NF(a)
                });
                var kib = class {
                        constructor(a) {
                            this.Qa = a
                        }
                        async Pla(a) {
                            const b = sC(uC(["designinsight", "heartbeats"])),
                                [c, {
                                    Yqa: d
                                }] = await Promise.all([this.Qa.post(b, __c.eva.O(a)), __webpack_require__.me(12995).then(() => ({
                                    Yqa: __c.xk
                                }))]);
                            return d.P(c)
                        }
                    },
                    gib = class {
                        constructor(a) {
                            this.Qa = a
                        }
                        async WJ(a) {
                            const b = sC(uC(["reaction", ""])),
                                [c, {
                                    Cpa: d
                                }] = await Promise.all([this.Qa.post(b, __c.UD.O(a)), __webpack_require__.me(41727).then(() => ({
                                    Cpa: __c.kwa
                                }))]);
                            return d.P(c)
                        }
                        async jK(a) {
                            const b = uC(["reaction", "reaction"]);
                            rC(b, {
                                id: u(a.id, "DeleteReactionApiRequest#id required")
                            });
                            a = sC(b);
                            const [c, {
                                Epa: d
                            }] = await Promise.all([this.Qa.delete(a), __webpack_require__.me(41727).then(() => ({
                                Epa: __c.wwa
                            }))]);
                            return d.P(c)
                        }
                        async IS(a) {
                            const b = uC(["reaction", "reactions"]);
                            rC(b, {
                                parentArtifactType: a.gq,
                                source: __c.QD.O(a.source),
                                reactedObjectType: __c.VD.O(a.qN),
                                continuation: a.Hb
                            });
                            switch (a.gq) {
                                case "DOCUMENT":
                                    rC(b, {
                                        documentId: u(a.aa, "FindUserReactionsApiRequest#documentId required"),
                                        documentExtension: a.we
                                    });
                                    break;
                                case "FOLDER":
                                    rC(b, {
                                        folderId: u(a.jj, "FindUserReactionsApiRequest#folderId required")
                                    });
                                    break;
                                default:
                                    throw new v(a);
                            }
                            a = sC(b);
                            const [c, {
                                Zpa: d
                            }] = await Promise.all([this.Qa.get(a), __webpack_require__.me(41727).then(() => ({
                                Zpa: __c.Kwa
                            }))]);
                            return d.P(c)
                        }
                        async XS(a) {
                            const b = uC(["reaction", "reactions", "latest"]);
                            rC(b, {
                                parentArtifactType: a.gq,
                                source: __c.QD.O(a.source)
                            });
                            switch (a.gq) {
                                case "DOCUMENT":
                                    rC(b, {
                                        documentId: u(a.aa,
                                            "GetLatestReactionsApiRequest#documentId required"),
                                        documentExtension: a.we,
                                        pageIndexes: a.h7,
                                        commentIds: a.aj
                                    });
                                    break;
                                case "FOLDER":
                                    rC(b, {
                                        folderId: u(a.jj, "GetLatestReactionsApiRequest#folderId required"),
                                        commentIds: a.aj
                                    });
                                    break;
                                default:
                                    throw new v(a);
                            }
                            a = sC(b);
                            const [c, {
                                iqa: d
                            }] = await Promise.all([this.Qa.get(a), __webpack_require__.me(41727).then(() => ({
                                iqa: __c.Iwa
                            }))]);
                            return d.P(c)
                        }
                    },
                    oib = (a) => {
                        var {
                            children: b,
                            disabled: c,
                            htmlFor: d,
                            id: e,
                            variant: f = "bold",
                            size: g = "medium",
                            FX: h,
                            marker: k,
                            theme: l
                        } = a;
                        a = (0, __c.QW)(() => "string" === typeof b ? "span" : "div", [b]);
                        if (null == b) return null;
                        const m = (n) => n.stopPropagation();
                        return (0, __c.MW)("label", {
                            id: e,
                            htmlFor: d,
                            onClick: h ? m : void 0,
                            children: [(0, __c.LW)(mw, {
                                tagName: a,
                                size: g,
                                variant: f,
                                className: (0, __c.cX)("Uc1_7g", {
                                    z2dDaQ: c,
                                    Rkqp9g: "dark" === l
                                }),
                                tone: c ? "tertiary" : "primary",
                                children: b
                            }), "optional" === k && (0, __c.LW)(mw, {
                                tagName: "span",
                                size: g,
                                variant: f,
                                tone: "tertiary",
                                children: ` ${H("lkTH3g")}`
                            })]
                        })
                    };
                __webpack_require__(66337);
                var a$ = __webpack_require__(22188),
                    p9 = a$.aD,
                    o9 = a$.U5,
                    m9 = a$.z,
                    t9 = a$.LO,
                    T9 = a$.Fl,
                    pib = a$.N7;
                var b$ = __webpack_require__(70655).gn;
                var c$ = __webpack_require__(85893),
                    Y = c$.jsx,
                    Z8 = c$.jsxs,
                    X9 = c$.Fragment;
                var qib = __webpack_require__,
                    rib = qib(94184),
                    $8 = qib.n_x(rib)();
                var d$ = __webpack_require__(67294),
                    e$ = d$.Component,
                    f$ = d$.memo,
                    sib = d$.createContext,
                    j9 = d$.useContext,
                    g9 = d$.useMemo,
                    k9 = d$.useRef,
                    l9 = d$.useCallback,
                    n9 = d$.useEffect,
                    tib = d$.createElement,
                    uib = d$.forwardRef,
                    M9 = d$.lazy,
                    N9 = d$.Suspense,
                    mhb = d$.useLayoutEffect,
                    g$ = d$.createRef;
                var vib = __webpack_require__(29323),
                    s9 = vib.Pi,
                    wib = vib.b4;
                var h$ = __webpack_require__(96630),
                    b9 = h$.cn,
                    c9 = h$.d0,
                    d9 = h$.Ix,
                    e9 = h$.Wj,
                    f9 = h$.$r,
                    A9 = h$.ZP;
                var q9 = __webpack_require__(99601).Z;
                var xib = __webpack_require__(33581),
                    wgb = xib.SZ,
                    yib = xib.Qj;
                var zib = __webpack_require__(27661),
                    Aib = zib.zO,
                    fhb = zib.Om;
                var qhb = __webpack_require__(5527).Z;
                var bib = class {
                    constructor() {
                        this.Ur = new Map;
                        this.yEa = (a) => {
                            for (const b of a)(a = this.Ur.get(b.target)) && a(b.isIntersecting)
                        }
                    }
                    observe(a, b) {
                        this.Ur.set(a, b);
                        this.observer && this.observer.observe(a);
                        return () => {
                            this.Ur.delete(a);
                            this.observer && this.observer.unobserve(a)
                        }
                    }
                };
                var S9 = class {
                    constructor(a, b, c, d, e) {
                        this.cc = a;
                        this.Gh = b;
                        this.ya = c;
                        this.dj = d;
                        this.HK = e;
                        this.yx = 0;
                        this.AY = this.hs = !1;
                        this.onVolumeChange = p9((f) => {
                            f ? (this.hs = !1, this.volume = f) : (this.hs = !0, this.volume = 100);
                            this.Gh.SC(+!this.hs * this.yx)
                        });
                        this.O6 = p9(() => {
                            this.hs = !this.hs;
                            this.Gh.SC(+!this.hs * this.yx)
                        });
                        p9(() => this.AY = !this.AY);
                        this.IFa = (f) => {
                            var g = this.ya.get();
                            if (g) {
                                var h = __c.$S(this.cc, f);
                                g = g.Ha.toArray();
                                f = g.indexOf(f);
                                if (!(0 > f)) return {
                                    jb: g.slice(0, f).reduce((k, l) => k + __c.$S(this.cc, l), 0),
                                    Y: h
                                }
                            }
                        }
                    }
                    get Oza() {
                        return this.Gh.d3
                    }
                    start() {
                        this.Gh.resume().then(this.play);
                        this.yx = this.Gh.Es || 1;
                        this.hs = 0 === this.yx
                    }
                    play() {
                        if (this.HK) {
                            var a;
                            this.eGa = o9(() => this.dj.get(), (b) => {
                                if (b) {
                                    var c = this.IFa(b);
                                    if (c) {
                                        if (a && a !== b) {
                                            var d = this.Gh;
                                            if (d.playing) {
                                                var e = __c.nF(c);
                                                for (const f of d.Ah) d = __c.nF(f), f.jb < e && d > c.jb || f.cm()
                                            }
                                        }
                                        a = b;
                                        agb(this.Gh, c)
                                    }
                                }
                            }, {
                                fireImmediately: !0
                            })
                        } else this.Gh.restart()
                    }
                    get loading() {
                        return this.Gh.loading
                    }
                    stop() {
                        var a;
                        null === (a = this.eGa) || void 0 === a ? void 0 : a.call(this);
                        this.Gh.stop()
                    }
                    get volume() {
                        return +!this.hs * Math.floor(100 * this.yx)
                    }
                    set volume(a) {
                        m9(() => {
                            this.yx = a / 100
                        })
                    }
                };
                __c.p = S9.prototype;
                _dmr(S9, "yx");
                _dmr(S9, "hs");
                _dmr(S9, "AY");
                _dma(S9, "start", null);
                _dmb(S9, "play", null);
                _dmc(S9, "loading");
                _dma(S9, "stop", null);
                _dmc(S9, "volume");
                var Bib = 2 * __c.bw,
                    Dib = (a) => {
                        var {
                            onMouseMove: b,
                            onMouseEnter: c,
                            onMouseLeave: d,
                            items: e,
                            RL: f,
                            position: g,
                            iFa: h,
                            jg: k,
                            mode: l,
                            L: m
                        } = a;
                        const n = "multiple" === l;
                        a = e.map((q, r) => Y(Cib, {
                            onClick: () => h(r),
                            RL: f,
                            item: q,
                            L: r,
                            jg: k,
                            yL: !n,
                            show: m === r
                        }, r));
                        return Z8(X9, {
                            children: [Y("div", {
                                className: $8({
                                    oEuZEg: n
                                })
                            }), Y("div", {
                                className: $8("_1YE50w", {
                                    lpFKUQ: n,
                                    qM0gdQ: !n
                                }),
                                onMouseMove: b,
                                onMouseEnter: c,
                                onMouseLeave: d,
                                children: Y("div", {
                                    className: "VWQR3A",
                                    style: {
                                        transform: `translateX(${g}px)`
                                    },
                                    children: a
                                })
                            })]
                        })
                    },
                    Cib = class extends e$ {
                        constructor() {
                            super(...arguments);
                            this.la = new __c.pw;
                            this.Bq = new __c.ow({
                                open: this.props.yL
                            });
                            this.onMouseEnter = () => {
                                !this.props.yL && this.la.YC({
                                    state: this.Bq
                                }, 200)
                            };
                            this.onMouseLeave = () => {
                                !this.props.yL && this.la.ox({
                                    state: this.Bq
                                }, 200)
                            };
                            this.onMouseMove = (a) => {
                                this.props.yL && a.stopPropagation()
                            }
                        }
                        render() {
                            const a = this.props.onClick,
                                b = this.props.RL,
                                c = this.props.item,
                                d = this.props.L,
                                e = this.props.yL;
                            return Y("button", {
                                className: $8("i2MVqA _0REFbg", {
                                    cjcAew: !e,
                                    dKW8fw: !this.props.show && e
                                }),
                                "aria-label": Wy("f5q3ew", [d + 1]),
                                onClick: a,
                                onMouseEnter: this.onMouseEnter,
                                onMouseLeave: this.onMouseLeave,
                                onMouseMove: this.onMouseMove,
                                style: {
                                    width: b
                                },
                                children: c
                            })
                        }
                    },
                    i$ = class extends e$ {
                        constructor() {
                            super(...arguments);
                            this.position = 0;
                            this.i4 = 2 === Gd.direction;
                            this.onMouseEnter = (a) => {
                                "single" === this.props.mode ? this.WW(a) : this.RW(a)
                            }
                        }
                        get r0() {
                            return this.props.RL * this.props.items.length
                        }
                        onMouseLeave() {
                            this.L = void 0
                        }
                        WW(a) {
                            var b = this.props.items,
                                c = this.props.RL;
                            const d = a.currentTarget.getBoundingClientRect();
                            a = a.clientX;
                            const e = this.L;
                            let f =
                                a - d.left;
                            this.i4 && (f = d.width - f);
                            this.L = Math.floor(f / (d.width / b.length));
                            e !== this.L && (b = this.i4, a -= d.left, b && (a = d.width - a), c = a - (this.L * c + c / 2), b && (c *= -1), this.position = c)
                        }
                        RW(a) {
                            var b = a.currentTarget.getBoundingClientRect(),
                                c = this.props.items.length,
                                d = this.i4;
                            a = a.clientX - b.left;
                            d && (a = b.width - a);
                            b = c * a / b.width / c * (this.r0 + 2 * Bib) - a - Bib;
                            d || (b *= -1);
                            this.position = b
                        }
                        render() {
                            return Y(Dib, Object.assign({}, this.props, {
                                onMouseMove: "single" === this.props.mode ? this.WW : this.RW,
                                onMouseEnter: this.onMouseEnter,
                                onMouseLeave: this.onMouseLeave,
                                position: this.position,
                                L: this.L
                            }))
                        }
                    };
                __c.p = i$.prototype;
                _dmr(i$, "position");
                _dmr(i$, "L");
                _dmc(i$, "r0");
                _dmb(i$, "onMouseLeave", null);
                _dmb(i$, "WW", null);
                _dmb(i$, "RW", null);
                i$ = b$([s9], i$);
                var j$ = 11 * __c.bw,
                    Eib = class extends e$ {
                        constructor() {
                            super(...arguments);
                            this.hC = (a) => this.props.Zx(a)
                        }
                        shouldComponentUpdate(a) {
                            return a.jg !== this.props.jg || a.L !== this.props.L
                        }
                        render() {
                            const {
                                L: a,
                                ya: b,
                                jg: c,
                                Cj: d,
                                Rv: e = kgb,
                                mode: f = "multiple"
                            } = this.props, g = b.F.width / b.F.height, h = b.Ha.toArray().map((k, l) => Y(e, {
                                ya: b,
                                page: k,
                                L: l,
                                selected: a === l,
                                Cj: d
                            }));
                            return Y(i$, {
                                items: h,
                                RL: j$ * g,
                                iFa: this.hC,
                                jg: c,
                                mode: f
                            })
                        }
                    },
                    a9 = class extends e$ {
                        constructor() {
                            super(...arguments);
                            this.wj = !1
                        }
                        componentDidMount() {
                            this.Ac = window.setTimeout(p9(() => {
                                this.wj = !0
                            }), 400)
                        }
                        componentWillUnmount() {
                            this.Ac && window.clearTimeout(this.Ac)
                        }
                        render() {
                            const a = this.props.page,
                                b = this.props.ya,
                                c = this.props.Cj,
                                d = this.props.selected;
                            var e = __c.KE(b.F);
                            e = {
                                width: e.width / e.height * (j$ - 10),
                                height: j$ - 10,
                                scale: (j$ - 10) / e.height
                            };
                            return Z8("div", {
                                className: "YrHRng",
                                children: [Y("div", {
                                    className: $8(!d && "_PmymQ Ut-ecQ"),
                                    children: Y(c, {
                                        F: e,
                                        page: a,
                                        wj: this.wj,
                                        o_: d ? "selected" : "none",
                                        n_: "thick"
                                    })
                                }), Y("div", {
                                    className: "XcPNZw"
                                })]
                            }, b.Ha.NF(a))
                        }
                    };
                _dmr(a9, "wj");
                a9 = b$([s9], a9);
                var Fib = ({
                        ya: a,
                        L: b,
                        cEa: c,
                        MEa: d,
                        mj: e,
                        XC: f,
                        onMouseEnter: g,
                        c6: h,
                        dC: k,
                        jg: l,
                        JH: m,
                        Cj: n,
                        Rv: q,
                        variant: r,
                        mode: x
                    }) => Z8("div", {
                        className: "sfHAgg",
                        onMouseEnter: g,
                        children: [Y("div", {
                            onMouseLeave: k,
                            children: Y("ftb" === r ? __c.f_ : jgb, {
                                Ga: a.Ha.count(),
                                selectedIndex: b,
                                Zx: d,
                                mj: e
                            })
                        }), m && Y(A9, { in: f,
                            timeout: 350,
                            children: (y) => Y("div", {
                                className: $8("OCmowg", lgb(y)),
                                onMouseLeave: h,
                                children: Y(Eib, {
                                    L: b,
                                    ya: a,
                                    Zx: c,
                                    jg: l,
                                    Cj: n,
                                    Rv: q,
                                    mode: x
                                })
                            })
                        })]
                    }),
                    k$ = class extends e$ {
                        constructor() {
                            super(...arguments);
                            this.JH = this.XC = this.mj = !1;
                            this.clearTimeout =
                                () => {
                                    window.clearTimeout(this.Gta)
                                };
                            this.dC = () => {
                                this.XC || this.RN(!1);
                                this.clearTimeout()
                            };
                            this.c6 = () => {
                                this.RN(!1);
                                this.clearTimeout();
                                this.VW(!1)
                            };
                            this.qza = (a) => this.props.Hd(a, "progress_bar");
                            this.pza = (a) => this.props.Hd(a, "carousel")
                        }
                        RN(a) {
                            this.mj = a
                        }
                        VW(a) {
                            this.XC = a
                        }
                        onMouseEnter() {
                            this.JH = !0;
                            this.RN(!0);
                            this.Gta = window.setTimeout(() => {
                                this.VW(!0)
                            }, 600)
                        }
                        render() {
                            const a = this.props.jg,
                                b = this.props.Cj,
                                c = this.props.Rv,
                                d = this.props.variant,
                                e = this.props.mode;
                            return Y(Fib, {
                                ya: this.props.ya,
                                L: this.props.L,
                                MEa: this.qza,
                                cEa: this.pza,
                                mj: this.mj,
                                XC: __c.pv() && this.XC,
                                onMouseEnter: this.onMouseEnter,
                                dC: this.dC,
                                c6: this.c6,
                                jg: a,
                                JH: this.JH,
                                Cj: b,
                                Rv: c,
                                variant: d,
                                mode: e
                            })
                        }
                    };
                __c.p = k$.prototype;
                _dmr(k$, "mj");
                _dmr(k$, "XC");
                _dmr(k$, "JH");
                _dmb(k$, "RN", null);
                _dmb(k$, "VW", null);
                _dmb(k$, "onMouseEnter", null);
                k$ = b$([s9], k$);
                var $hb = s9(function({
                    ya: a,
                    Jc: b,
                    mode: c,
                    ua: d,
                    variant: e,
                    Cj: f,
                    Rv: g
                }) {
                    return Y(k$, {
                        ya: a,
                        Hd: d.Hd,
                        jg: b.active,
                        mode: c,
                        L: d.L,
                        Cj: f,
                        Rv: g,
                        variant: e
                    })
                });
                var Gib = f$((a) => a.Ska ? Z8("div", {
                    className: "DRqayg",
                    children: [Y("div", {
                        className: "_3CtCww",
                        children: a.children
                    }), Y(__c.hY, {
                        className: "g75y1A",
                        size: "medium"
                    })]
                }) : Y(X9, {
                    children: a.children
                }));
                var ehb = ({
                        Kf: a,
                        yna: b
                    }) => {
                        let c = () => {};
                        if (b) {
                            const d = b.Vj,
                                e = b.lp,
                                f = new Map,
                                g = b.ya.Ha.toArray();
                            e.images.forEach((h, k) => {
                                f.set(g[k], h)
                            });
                            c = (h) => d === e.version ? f.get(h) : void 0
                        }
                        return function({
                            borderRadius: d,
                            n_: e,
                            o_: f,
                            F: g,
                            page: h,
                            Ska: k,
                            OFa: l,
                            wj: m
                        }) {
                            const n = c(h);
                            return Y("div", {
                                className: $8({
                                    tK5tJQ: "thin" === e,
                                    cV87iQ: "thick" === e,
                                    wuS14Q: "selected" === f,
                                    mfk4Fg: "selected" === f && l,
                                    jPZnow: "focused" === f,
                                    SNSh0g: "focused" === f && l,
                                    YVm1_w: "round" === d,
                                    Sy5OHg: "none" === f,
                                    dVODvA: "shadow" ===
                                        f
                                }),
                                children: Y(Gib, {
                                    Ska: !!k,
                                    children: n ? Y(Hib, {
                                        F: g,
                                        KFa: n
                                    }) : Y(Iib, {
                                        wj: m,
                                        page: h,
                                        F: g,
                                        Kf: a,
                                        xF: l ? "contain" : void 0
                                    })
                                })
                            })
                        }
                    },
                    Hib = f$((a) => Y("img", {
                        className: "vV0w_Q",
                        style: {
                            width: a.F.width,
                            height: a.F.height
                        },
                        src: a.KFa.url,
                        alt: ""
                    })),
                    Jib = {
                        z8: 0
                    },
                    Iib = s9(({
                        Kf: a,
                        F: b,
                        page: c,
                        wj: d,
                        xF: e
                    }) => d ? Y(a, {
                        page: c,
                        Nd: Jib,
                        De: !1,
                        Zb: b.width,
                        Dg: b.height,
                        xF: e
                    }) : Y("div", {
                        className: "_71E5cA",
                        style: {
                            width: b.width,
                            height: b.height,
                            background: c.background.color
                        }
                    }));
                var O9 = class {
                    constructor(a, b) {
                        this.ua = a;
                        this.cc = b;
                        this.xm = !1;
                        this.Fma = () => {
                            if (!this.fQ) {
                                var c = __c.$S(this.cc, this.Tra[this.ua.L], 2);
                                this.fQ = window.setTimeout(() => {
                                    this.fQ = void 0;
                                    this.ua.sj ? this.ua.zf("autoplay") : this.ua.Hd(0, "autoplay")
                                }, c)
                            }
                        };
                        this.Tda = () => {
                            window.clearTimeout(this.fQ);
                            this.fQ = void 0
                        };
                        this.Tra = this.ua.ya.Ha.toArray();
                        pib(T9(() => this.ua.L), () => {
                            this.xm && (this.Tda(), this.Fma())
                        })
                    }
                    get kb() {
                        return this.xm
                    }
                    toggle() {
                        this.xm ? (this.xm = !1, this.Tda()) : (this.xm = !0, this.Fma())
                    }
                };
                _dmr(O9, "xm");
                _dmb(O9, "toggle", null);
                var i9 = sib(null),
                    h9 = class {
                        constructor() {
                            this.open = !1;
                            this.gk = new Set
                        }
                    };
                _dmr(h9, "open");
                _dp([t9.shallow], h9.prototype, "gk", void 0);
                _dmr(h9, "xR");
                var zgb = class extends e$ {
                    constructor() {
                        super(...arguments);
                        this.aqa = (a) => {
                            ({
                                tg: a
                            } = a);
                            a = "function" === typeof this.props.children ? this.props.children({
                                tg: a
                            }) : this.props.children;
                            return Y(__c.oP, {
                                role: "menu",
                                ref: this.props.lM,
                                className: "wH3crA",
                                Na: this.props.id,
                                children: a
                            })
                        }
                    }
                    render() {
                        const {
                            Pq: a = ygb,
                            label: b,
                            disabled: c,
                            open: d,
                            id: e,
                            role: f,
                            ariaLabel: g,
                            Na: h,
                            tagName: k = "div",
                            poa: l,
                            aP: m,
                            SA: n,
                            SK: q,
                            Zt: r = "bottom-start",
                            gs: x,
                            zQ: y = !0,
                            icon: z,
                            xo: B,
                            Kt: F = !1,
                            Qu: J
                        } = this.props, N = $8("xKFbPg", this.props.className);
                        return tib(k, {
                            ref: m,
                            className: N,
                            role: f
                        }, Y(__c.eP, {
                            id: n,
                            animate: y,
                            gs: x,
                            mode: q,
                            placement: r,
                            XU: "right-start" === r,
                            Bc: this.aqa,
                            open: d,
                            padding: "none",
                            ad: J,
                            fq: "window",
                            Kt: F,
                            IH: !0,
                            children: Y(a, {
                                id: e,
                                label: b,
                                disabled: c,
                                icon: z,
                                xo: B,
                                open: d,
                                ariaLabel: g,
                                Na: h,
                                fd: d ? n : void 0,
                                Cr: l,
                                Qu: J
                            })
                        }))
                    }
                };
                uib(function(a, b) {
                    const c = mgb(a.store),
                        d = pgb({
                            store: c.store,
                            onExit: a.Qu
                        }),
                        e = $8("wH3crA", a.className),
                        {
                            ref: f
                        } = sgb({
                            store: c.store
                        });
                    n9(d.PB, []);
                    return Y(c.Provider, {
                        value: c.store,
                        children: Y(__c.oP, {
                            role: "menu",
                            className: e,
                            ref: q9(b, f, d.ref),
                            children: a.children
                        })
                    })
                }).displayName = "DropdownMenu";
                var ygb = f$(function(a) {
                        return Y(__c.lA, Object.assign({}, {
                            variant: "secondary"
                        }, vgb(a)))
                    }),
                    xgb = f$(function(a) {
                        const b = k9(),
                            c = a.open,
                            d = a.Qu,
                            e = l9(() => {
                                clearTimeout(b.current);
                                c || (b.current = setTimeout(d, 400))
                            }, [c, d]),
                            f = l9(() => {
                                clearTimeout(b.current)
                            }, []),
                            g = l9(() => {
                                clearTimeout(b.current);
                                d()
                            }, [d]),
                            {
                                ref: h
                            } = tgb({
                                Og: a.open
                            });
                        return Y(__c.qP, {
                            onClick: g,
                            onMouseEnter: e,
                            onMouseLeave: f,
                            Yz: q9(h, a.Cr),
                            active: a.open,
                            disabled: a.disabled,
                            Lh: !0,
                            ariaHasPopup: "menu",
                            id: a.id,
                            fd: a.fd,
                            ariaLabel: a.ariaLabel,
                            Na: a.Na,
                            tabIndex: -1,
                            start: "end" !== a.xo && a.icon && Y(a.icon, {
                                size: "medium"
                            }),
                            end: Z8(X9, {
                                children: [Y(__c.iW, {
                                    direction: "horizontal",
                                    size: "xlarge"
                                }), "end" === a.xo && a.icon && Y(a.icon, {
                                    size: "medium"
                                }), Y(__c.Py, {
                                    size: "medium"
                                })]
                            }),
                            children: a.label
                        })
                    }),
                    l$ = f$(function(a) {
                        const b = ngb({
                                disabled: a.disabled
                            }),
                            c = a.href ? {
                                href: a.href
                            } : {
                                onClick: a.onClick
                            };
                        return Y(__c.qP, Object.assign({}, {
                            tabIndex: -1,
                            Yz: b,
                            className: a.className,
                            disabled: a.disabled,
                            onFocus: a.onFocus,
                            onBlur: a.onBlur,
                            onMouseEnter: a.onMouseEnter,
                            onMouseLeave: a.onMouseLeave,
                            start: a.start,
                            end: Z8(X9, {
                                children: [Y(__c.iW, {
                                    direction: "horizontal",
                                    size: "xlarge"
                                }), a.end]
                            })
                        }, c, {
                            children: a.children
                        }))
                    });
                l$.displayName = "DropdownItem";
                var Q9 = class {
                    constructor(a) {
                        var {
                            aa: b,
                            uK: c,
                            ui: d,
                            role: e,
                            ua: f,
                            fb: g,
                            xd: h
                        } = a;
                        this.yG = new h9;
                        this.aa = b;
                        this.uK = c;
                        this.ui = d;
                        this.ua = f;
                        this.fb = g;
                        this.xd = h;
                        this.qta = 5 <= e
                    }
                    get pf() {
                        return this.yG.open
                    }
                    re() {
                        this.yG.open = !1
                    }
                    xk() {
                        this.yG.open = !0
                    }
                    aaa() {
                        this.fb.pd({
                            Wc: "edit",
                            Ye: "player",
                            xw: this.ua.L
                        })
                    }
                    MM(a) {
                        a = void 0 === a ? {} : a;
                        this.re();
                        this.fb.pd(Object.assign({}, {
                            Wc: "use_as_template",
                            Ye: "player",
                            xw: this.ua.L
                        }, a));
                        if (null == this.xd.rj) throw new __c.o_("navigateToRemixDesign2");
                        this.xd.rj(new __c.gv({
                            id: this.aa,
                            extensions: __c.lZ(this.uK),
                            title: Wy("6/nUOQ", [this.ui || H("yKs6+A")]).substring(0, 255)
                        }))
                    }
                    get $va() {
                        return this.qta ? {
                            enabled: !0,
                            Yx: this.Yx
                        } : {
                            enabled: !1
                        }
                    }
                    Yx() {
                        this.re();
                        this.fb.pd({
                            Wc: "edit_design",
                            Ye: "player",
                            xw: this.ua.L
                        });
                        if (null == this.xd.hn) throw new __c.o_("navigateToEditDesign2");
                        this.xd.hn(new __c.Zx({
                            id: this.aa,
                            extensions: this.uK
                        }))
                    }
                };
                __c.p = Q9.prototype;
                _dmr(Q9, "yG");
                _dmc(Q9, "pf");
                _dmb(Q9, "re", null);
                _dmb(Q9, "xk", null);
                _dmb(Q9, "aaa", null);
                _dmb(Q9, "MM", null);
                _dmb(Q9, "Yx", null);
                var r9 = class {
                    constructor(a, b, c, d, e) {
                        this.UI = this.Iz = !1;
                        this.oT = this.NK = null;
                        this.aka = () => {
                            Fgb(this) ? this.NK = setTimeout(this.aka, this.AS) : m9(() => {
                                this.Iz = !0;
                                this.UO("autodelay")
                            })
                        };
                        this.fb = a;
                        this.ua = b;
                        this.Qk = c;
                        this.Sra = d;
                        this.AS = e;
                        1 >= b.Ga || null == this.AS || (o9(() => this.ua.Hl, (f) => {
                            f ? this.NK = setTimeout(this.aka, e) : m9(() => {
                                this.Iz = !1;
                                this.qw()
                            })
                        }, {
                            fireImmediately: !0
                        }), o9(() => this.hX, (f) => {
                            f || this.qw()
                        }))
                    }
                    get hX() {
                        return this.Iz
                    }
                    get nT() {
                        return this.UI
                    }
                    qw() {
                        null != this.NK && (clearTimeout(this.NK), this.NK = null);
                        this.oT && (clearTimeout(this.oT), this.oT = null)
                    }
                    JM() {
                        this.nT || (this.UI = !0, this.oT = setTimeout(() => {
                            m9(() => {
                                this.UI = !1
                            })
                        }, 3E3), this.Sra(), this.fb.pd({
                            Wc: "share",
                            Ye: "farewell"
                        }))
                    }
                    UO(a) {
                        this.fb.UO({
                            Fs: a,
                            wC: this.ua.L
                        })
                    }
                    dY(a) {
                        this.fb.dY({
                            Fs: a,
                            VB: this.ua.L
                        })
                    }
                    U6(a) {
                        this.Iz = !0;
                        this.UO(a)
                    }
                    BJ(a) {
                        this.Iz = !1;
                        this.qw();
                        this.dY(a)
                    }
                };
                __c.p = r9.prototype;
                _dmr(r9, "Iz");
                _dmr(r9, "UI");
                _dmb(r9, "JM", null);
                _dmb(r9, "U6", null);
                _dmb(r9, "BJ", null);
                var Egb = class extends __c.HI {
                    constructor(a) {
                        super();
                        this.Qk = a;
                        this.uca = !1
                    }
                    Saa(a) {
                        this.Qk.kb(a) && (this.uca = !0)
                    }
                    get Nza() {
                        return this.uca
                    }
                };
                var Jgb = f$(function(a) {
                        var {
                            label: b,
                            za: c,
                            onClick: d
                        } = a;
                        return Z8(__c.JO, {
                            "aria-label": b,
                            onClick: d,
                            children: [Y(c, {
                                className: "_00ENLg",
                                size: "large",
                                tone: "primary"
                            }), Y(ON, {
                                QM: "xxxsmall",
                                children: Y(mw.Rba, {
                                    Yb: "center",
                                    color: "monoWhite",
                                    children: b
                                })
                            })]
                        })
                    }),
                    Kgb = f$(function(a) {
                        var {
                            label: b,
                            onClick: c
                        } = a;
                        return Z8(__c.JO, {
                            stretch: !0,
                            "aria-label": b,
                            onClick: c,
                            children: [Y("div", {
                                className: "_4f6jg",
                                children: Y(__c.rva, {})
                            }), Y(ON, {
                                QM: "xxxsmall",
                                children: Y(mw.Rba, {
                                    tagName: "span",
                                    Yb: "center",
                                    color: "monoWhite",
                                    children: b
                                })
                            })]
                        })
                    });
                var dib = (a) => {
                    const b = M9(() => __webpack_require__.me(6066).then(() => __c.Kib).then(({
                        Fua: c
                    }) => ({
                        default: c(a)
                    })));
                    return () => Y(N9, {
                        fallback: null,
                        children: Y(b, {})
                    })
                };
                var Lib = s9(({
                    time: a,
                    now: b = new Date(Aib(6E4)),
                    mode: c = "standard",
                    children: d = (e) => Y(mw, {
                        tagName: "span",
                        children: e
                    })
                }) => Y(__c.tw, {
                    label: Wy("DN8Wbw", [a]),
                    children: d(Y("time", {
                        dateTime: a.toISOString(),
                        children: Mgb(c, a, b)
                    }))
                }));
                var Mib = "<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.238 11.652c.958 4.06 7.656 9.366 9.81 9.348 2.155-.018 8.829-5.814 9.687-9.348.824-3.39-1.244-7.657-5.505-7.638-1.865.008-3.108 1.13-3.832 1.784-.134.121-.25.226-.35.305a12.065 12.065 0 0 1-.26-.235C11.062 5.204 9.751 4 7.906 4c-4.298 0-6.474 4.245-5.67 7.652zm18.04-.354c-.31 1.275-1.853 3.333-3.92 5.246-1.85 1.713-3.791 2.951-4.322 2.956-.57.005-2.522-1.148-4.346-2.767-2.102-1.866-3.638-3.927-3.992-5.425C3.02 8.438 4.958 5.5 7.907 5.5c.73 0 1.414.29 2.127.837a8.821 8.821 0 0 1 .554.467c.058.053.387.354.48.435a1.5 1.5 0 0 0 1.914.038c.024-.019.114-.098.235-.204.268-.235.688-.604.872-.744.698-.532 1.374-.812 2.148-.815 2.882-.013 4.74 2.908 4.04 5.784z\" fill=\"currentColor\"/></svg>";
                var Xgb = gw({
                    medium: Mib
                });
                var Nib = "<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.272 19.789a.75.75 0 0 1-1.061-.017l-15-15.5A.75.75 0 0 1 3.29 3.228l15 15.5a.75.75 0 0 1-.017 1.061z\" fill=\"currentColor\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.32 16.727c1.656-1.691 3.053-3.584 3.415-5.075.824-3.39-1.244-7.657-5.505-7.638-1.865.008-3.108 1.13-3.833 1.784-.134.121-.25.226-.35.305a17.633 17.633 0 0 1-.26-.235C11.063 5.204 9.75 4 7.907 4c-.601 0-1.16.083-1.676.235l1.245 1.286a4.34 4.34 0 0 1 .43-.021c.731 0 1.414.29 2.128.837.176.136.346.28.545.46l.009.007c.057.053.387.354.48.435a1.5 1.5 0 0 0 1.914.038c.024-.019.114-.098.235-.204.268-.235.687-.604.872-.744.697-.532 1.373-.812 2.147-.815 2.883-.013 4.74 2.908 4.041 5.784-.262 1.078-1.405 2.715-3 4.351l1.043 1.079zm-1.079 1.042-1.043-1.078c-1.802 1.637-3.647 2.805-4.163 2.809-.569.005-2.521-1.148-4.345-2.767-2.102-1.866-3.639-3.927-3.993-5.425-.505-2.138.442-4.314 2.177-5.285L4.79 4.903c-2.173 1.43-3.13 4.305-2.553 6.75.959 4.059 7.657 9.365 9.81 9.347 1.054-.009 3.188-1.4 5.194-3.23z\" fill=\"currentColor\"/></svg>";
                var Wgb = gw({
                    medium: Nib
                });
                var Oib = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M3.25 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z\" fill-rule=\"evenodd\"/></svg>";
                var Pib = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z\"/></svg>";
                var Tgb = gw({
                    medium: Pib,
                    small: Oib
                });
                var Qib = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"m6.05 7.25 2.22-2.22A.75.75 0 0 0 7.2 3.97L4.43 6.75c-.69.68-.69 1.8 0 2.48l2.83 2.83A.75.75 0 0 0 8.32 11L6.07 8.75H16a4.25 4.25 0 1 1 0 8.5h-4a.75.75 0 1 0 0 1.5h4a5.75 5.75 0 0 0 0-11.5H6.05z\"/></svg>";
                var Ygb = gw({
                    medium: Qib
                }, !0);
                var Rib = "<svg fill=\"none\" height=\"16\" viewBox=\"0 0 16 16\" width=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"currentColor\" d=\"M12.667 2H3.333C2.597 2 2 2.597 2 3.333v9.334A1.335 1.335 0 0 0 3.333 14h9.334c.736 0 1.333-.597 1.333-1.333V3.333C14 2.597 13.403 2 12.667 2zM3.333 13H8.33L5.891 9.696a.333.333 0 0 0-.537.002l-2.296 3.157c.06.087.16.145.275.145zm9.334 0a.334.334 0 0 0 .333-.333v-1.815l-2.457-3.294a.333.333 0 0 0-.536.002l-2.22 3.02L9.572 13zm-1.323-6.04L13 9.18V3.333A.333.333 0 0 0 12.667 3H3.333A.333.333 0 0 0 3 3.333v7.901L4.545 9.11a1.333 1.333 0 0 1 2.151-.007l.469.635L9.2 6.968a1.333 1.333 0 0 1 2.143-.008zM4.667 5.667a1 1 0 1 0 2 0 1 1 0 0 0-2 0z\" fill-rule=\"evenodd\"/></svg>";
                var Sib = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 1.5a.5.5 0 0 0-.5.5v14c0 .28.22.5.5.5h14a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5H5zm5.75 10.1 3.05-4.15a2 2 0 0 1 3.22-.01L21 15.78V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-.09l3.82-5.25a2 2 0 0 1 3.22 0l.7.95zm3.6 4.9H19a.5.5 0 0 0 .5-.5v-2.72l-3.69-4.94a.5.5 0 0 0-.8 0l-3.33 4.53 2.68 3.63zm-5.51-4.96a.5.5 0 0 0-.81 0l-3.44 4.74a.5.5 0 0 0 .41.22h7.5l-3.66-4.96zM8.5 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z\"/></svg>";
                var Tib = gw({
                    small: Rib,
                    medium: Sib
                });
                var Ogb = class {
                        constructor(a) {
                            this.urls = a;
                            this.U4 = Ngb(a);
                            this.xS = Ngb(a)
                        }
                        get loading() {
                            return this.urls.length ? this.urls.some((a) => !this.U4.get(a) && !this.xS.get(a)) : !1
                        }
                        get errored() {
                            return this.urls.length ? this.urls.some((a) => this.xS.get(a)) : !1
                        }
                    },
                    u9 = class {
                        vaa(a, b) {
                            a.U4.has(b) && a.U4.set(b, !0)
                        }
                        uaa(a, b) {
                            a.xS.has(b) && a.xS.set(b, !0)
                        }
                    };
                _dma(u9, "vaa", null);
                _dma(u9, "uaa", null);
                var Uib = s9(function({
                    kJa: a,
                    theme: b,
                    fga: c = Y(Tib, {
                        size: "medium"
                    }),
                    children: d
                }) {
                    const {
                        store: e,
                        la: f
                    } = Pgb(a);
                    n9(() => {
                        for (const g of a) {
                            const h = new Image;
                            h.src = g;
                            h.onload = () => f.vaa(e, g);
                            h.onerror = () => f.uaa(e, g)
                        }
                    }, [a, e, f]);
                    return e.loading ? Y(__c.KI, {
                        shape: "rectangle",
                        theme: b
                    }) : e.errored ? c : Y(X9, {
                        children: d
                    })
                });
                var Qgb = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"56\" height=\"56\" viewBox=\"0 0 56 56\"><g fill-rule=\"evenodd\"><path fill-rule=\"nonzero\" d=\"M17 14a3 3 0 0 0-3 3v34.465A3.998 3.998 0 0 1 12 48V16a4 4 0 0 1 4-4h32c1.48 0 2.773.804 3.465 2H17Z\"/><path fill-rule=\"nonzero\" d=\"M9 6a3 3 0 0 0-3 3v34.465A3.998 3.998 0 0 1 4 40V8a4 4 0 0 1 4-4h32c1.48 0 2.773.804 3.465 2H9Z\"/><path fill-rule=\"nonzero\" d=\"M5 2a3 3 0 0 0-3 3v34.465A3.998 3.998 0 0 1 0 36V4a4 4 0 0 1 4-4h32c1.48 0 2.773.804 3.465 2H5Z\"/><path fill-rule=\"nonzero\" d=\"M13 10a3 3 0 0 0-3 3v34.465A3.998 3.998 0 0 1 8 44V12a4 4 0 0 1 4-4h32c1.48 0 2.773.804 3.465 2H13Z\"/><rect width=\"40\" height=\"40\" x=\"16\" y=\"16\" fill=\"#0E1318\" rx=\"4\"/></g></svg>";
                var Vib = (a) => {
                    const {
                        media: b,
                        dYa: c = !1,
                        title: d,
                        D5a: e,
                        body: f,
                        XNa: g,
                        theme: h = "light",
                        ZMa: k = "start",
                        alignContent: l = "center",
                        m7a: m = 2,
                        n7a: n = 1,
                        size: q = 1,
                        AUa: r = !1,
                        alt: x,
                        fga: y
                    } = a;
                    a = g9(() => "string" === typeof b ? [b] : "object" === typeof b && "front" in b ? [b.tya, b.back] : "object" === typeof b && "icon" in b ? [b.Ch] : [], [b]);
                    return Z8("div", {
                        className: $8("yt8-Ew", {
                            Sq5okQ: "dark" === h,
                            SyS2zg: 0 === q,
                            "p7-0Zw": 2 === q,
                            bKjJuQ: r
                        }),
                        children: [b && Y("div", {
                            className: $8("C8Hfcw", {
                                _0aRDtw: "start" === k,
                                yO5LLQ: !c && "string" === typeof b
                            }),
                            children: Y(Uib, {
                                kJa: a,
                                theme: h,
                                fga: y,
                                children: Rgb(b, c, x)
                            })
                        }), Z8("div", {
                            className: $8("wuAAeg", {
                                _0aRDtw: "start" === l
                            }),
                            children: [Y("div", {
                                title: e,
                                className: $8("DeeYsQ fFOiLQ", {
                                    _2nNFCw: 1 === n,
                                    uujxwg: 2 === n,
                                    GojIug: 0 === n
                                }),
                                children: d
                            }), f && Y("div", {
                                title: g,
                                className: $8("anLOmg _5RSqIg", {
                                    _2nNFCw: 1 === m,
                                    uujxwg: 2 === m,
                                    GojIug: 0 === m
                                }),
                                children: f
                            })]
                        })]
                    })
                };
                var v9 = class {
                    constructor({
                        Dp: a,
                        Ex: b,
                        B: c,
                        fe: d,
                        zb: e,
                        Oc: f,
                        Dc: g
                    }) {
                        this.rd = !1;
                        this.Dp = a;
                        this.Ex = b;
                        this.B = c;
                        this.fe = d;
                        this.zb = e;
                        this.Oc = f;
                        this.Dc = g
                    }
                    get pf() {
                        return this.rd
                    }
                    re() {
                        this.rd = !1
                    }
                    Si() {
                        this.rd = !this.rd
                    }
                    get Th() {
                        return this.Oc.Th
                    }
                    AA() {
                        this.Dp && this.Oc.AA()
                    }
                    Rt() {
                        this.Dp && this.Oc.Rt()
                    }
                    get vJ() {
                        return 0 < this.Dc.wD
                    }
                    async kr() {
                        this.re();
                        let a = !1;
                        try {
                            a = await this.Dc.kr()
                        } catch (b) {
                            this.B.Yc(b)
                        }
                        a ? b_(this.fe, {
                            LB: H("yMxW4w")
                        }) : b_(this.fe, {
                            LB: H("ZfdHUg")
                        })
                    }
                };
                __c.p = v9.prototype;
                _dmr(v9, "rd");
                _dmb(v9, "re", null);
                _dmb(v9, "Si", null);
                _dmc(v9, "Th");
                _dmb(v9, "AA", null);
                _dmb(v9, "Rt", null);
                _dmc(v9, "vJ");
                _dmb(v9, "kr", null);
                var Vgb = f$(function({
                    Ex: a,
                    zb: b
                }) {
                    const c = b.displayName;
                    return Y(ON, {
                        Qka: "xxxsmall",
                        QM: "xxxsmall",
                        children: Y(Vib, {
                            media: Y(__c.cPa, {
                                size: "x5",
                                e_: b.bw
                            }),
                            title: null != c ? Wy("jWIe+Q", [c]) : H("S0d2Lg"),
                            body: Y(Lib, {
                                time: a,
                                mode: "relative",
                                children: (d) => Z8(mw, {
                                    size: "small",
                                    color: "monoWhiteA100",
                                    children: [H("KGV94A"), " ", d]
                                })
                            })
                        })
                    })
                });
                var aib = s9(function({
                    F: a,
                    ua: b,
                    cd: c,
                    BFa: d,
                    CFa: e
                }) {
                    return Y(__c.kV, {
                        children: Y("div", {
                            className: "uCyaRg",
                            children: Y(__c.xY, {
                                cd: c,
                                F: a,
                                ua: {
                                    zf: d,
                                    Of: e,
                                    sj: b.sj,
                                    Yl: b.Yl,
                                    L: b.L
                                },
                                gX: !1
                            })
                        })
                    })
                });
                var Zgb = {
                    gridBaseline: "8px",
                    xsmallSpace: "12px",
                    xsmallSize: "12px",
                    smallSize: "16px",
                    mediumSize: "24px",
                    largeSize: "32px",
                    root: "ygGKTQ",
                    xsmall: "_61VRqQ",
                    small: "abulbg",
                    medium: "dR8M7g",
                    large: "_1aCkfA"
                };
                __c.y9 = {
                    "1F44F": {
                        Nq: x9({
                            xl: "\uD83D\uDC4F",
                            svg: __webpack_require__.p + "images/9abc2241bf1479263a0a039f3d1e5b5c.svg"
                        }),
                        label: "\uD83D\uDC4F"
                    },
                    "1F602": {
                        Nq: x9({
                            xl: "\uD83D\uDE02",
                            svg: __webpack_require__.p + "images/3e78ef31f2928a74c6d7ba19b91d0570.svg"
                        }),
                        label: "\uD83D\uDE02"
                    },
                    "1F62E": {
                        Nq: x9({
                            xl: "\uD83D\uDE32",
                            svg: __webpack_require__.p + "images/3a05dbf1cdd156fcd1677a0b444cc36f.svg"
                        }),
                        label: "\uD83D\uDE32"
                    },
                    "2764": {
                        Nq: x9({
                            xl: "\u2764",
                            svg: __webpack_require__.p + "images/0483f2b648dcc986d01385062052ae1c.svg"
                        }),
                        label: "\u2764"
                    },
                    "1F914": {
                        Nq: x9({
                            xl: "\uD83E\uDD14",
                            svg: __webpack_require__.p + "images/8777e8ed572c4159d71b08cca2972b15.svg"
                        }),
                        label: "\uD83E\uDD14"
                    },
                    "1F44D": {
                        Nq: x9({
                            xl: "\uD83D\uDC4D",
                            svg: __webpack_require__.p + "images/aba10b640f15bb01b8e5f0b804eefc7f.svg"
                        }),
                        label: "\uD83D\uDC4D"
                    },
                    "2B50": {
                        Nq: x9({
                            xl: "\u2B50",
                            svg: __webpack_require__.p + "images/e5c5a4d109aeb5234e4405032dfd4800.svg"
                        }),
                        label: "\u2B50\uFE0F"
                    }
                };
                var z9 = class {
                    constructor({
                        Ga: a,
                        vC: b
                    }) {
                        this.OZ = !1;
                        this.To = [];
                        this.kC = 0;
                        this.qla = void 0;
                        this.cJ = !1;
                        this.Qq = {
                            left: 0,
                            width: 0
                        };
                        this.yg = 0;
                        this.Ga = a;
                        this.vC = b
                    }
                    w9(a) {
                        this.Qq = a;
                        this.kC = 0 === this.Ga ? 0 : 1 === this.Ga ? this.Qq.width : this.Qq.width / this.Ga;
                        this.To = [];
                        if (0 < this.kC) {
                            a = .5 * this.vC;
                            var b = .5 * this.kC;
                            for (var c = 0; c < this.Ga; c++) this.To.push({
                                jq: c * this.kC + b - a
                            });
                            a = this.To.findIndex(({
                                jq: d
                            }) => 0 <= d && d + this.kC <= this.Qq.width);
                            if (0 < a)
                                for (b = this.To[a].jq / a, c = 0; c < a; c++) this.To[c].jq = b * c, this.To[this.Ga - 1 - c].jq = this.Qq.width -
                                    this.vC - b * c;
                            if (a = this.To.find((d, e) => e < this.To.length - 1 && d.jq > this.To[e + 1].jq)) b = a.jq, c = this.To[this.To.indexOf(a) + 1], a.jq = c.jq, c.jq = b
                        }
                    }
                    saa(a) {
                        a = Math.max(0, a - this.Qq.left);
                        this.yg = 0 === a || 1 === this.Ga || 0 === this.kC ? 0 : Math.floor(a / this.kC);
                        this.uV()
                    }
                    get L() {
                        return this.yg
                    }
                    get rGa() {
                        return this.cJ
                    }
                    get style() {
                        var a;
                        const b = 0 < this.Qq.width && 0 < this.Ga ? this.To[this.L].jq : 0;
                        var c = 0;
                        this.OZ && Gd.ma && (c = null !== (a = this.qla) && void 0 !== a ? a : b, a = Math.max(b, c) - Math.min(b, c), c = 0 < a ? Math.max(Math.round(a / 3), 150) :
                            150);
                        this.qla = b;
                        this.OZ = !0;
                        return {
                            transform: `translateX(${b}px)`,
                            transitionDuration: `${c}ms`
                        }
                    }
                    uV() {
                        clearTimeout(this.zR);
                        this.zR = void 0;
                        this.cJ = !0
                    }
                    yR() {
                        clearTimeout(this.zR);
                        this.zR = void 0;
                        this.zR = setTimeout(() => {
                            this.OZ = !1;
                            m9(() => {
                                this.cJ = !1
                            })
                        }, 250)
                    }
                    get cX() {
                        const a = this.Qq.width;
                        return a >= this.Ga && a >= this.vC
                    }
                };
                __c.p = z9.prototype;
                _dmr(z9, "cJ");
                _dp([t9.struct], z9.prototype, "Qq", void 0);
                _dmr(z9, "yg");
                _dmb(z9, "w9", null);
                _dmb(z9, "saa", null);
                _dp([T9.struct], z9.prototype, "style", null);
                _dmb(z9, "uV", null);
                _dmb(z9, "yR", null);
                _dmc(z9, "cX");
                var dhb = Gd.ma ? parseInt("150ms", 10) || 150 : 0;
                var B9 = class {
                    constructor({
                        Ga: a,
                        ua: b
                    }) {
                        this.WI = !1;
                        this.Ga = a;
                        this.ua = b
                    }
                    get mj() {
                        return this.WI
                    }
                    w3() {
                        this.WI = !1
                    }
                    y3() {
                        this.WI = !0
                    }
                    get L() {
                        return this.ua.L
                    }
                    Hd(a) {
                        this.ua.Hd(a, "progress_bar")
                    }
                };
                _dmr(B9, "WI");
                _dmb(B9, "w3", null);
                _dmb(B9, "y3", null);
                _dmb(B9, "Hd", null);
                var hhb = parseInt("317px", 10) || 317,
                    jhb = parseInt("305px", 10) || 305,
                    khb = parseInt("172px", 10) || 172;
                var nhb = (a) => {
                    const b = a.count;
                    ({
                        Nq: a
                    } = u(__c.y9[a.code]));
                    return Z8("div", {
                        className: "ZqXFaA",
                        children: [Y(a, {
                            size: "xsmall"
                        }), Y("div", {
                            className: "B7AKgg",
                            children: Y(mw.YD, {
                                Yb: "start",
                                color: "monoWhite",
                                La: "legacy",
                                children: 99 < b ? H("I/BqjA") : Wy("VBPQwg", [b])
                            })
                        })]
                    })
                };
                var I9 = class {
                    constructor({
                        Zc: a
                    }) {
                        this.wp = !1;
                        this.Zc = a
                    }
                    get pK() {
                        return this.wp
                    }
                    fA() {
                        this.wp = !1
                    }
                    openDialog() {
                        this.wp = !0
                    }
                };
                _dmr(I9, "wp");
                _dmb(I9, "fA", null);
                _dmb(I9, "openDialog", null);
                var Wib = "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.125 2.625a.625.625 0 1 0-1.25 0v1.25h-1.25a.625.625 0 1 0 0 1.25h1.25v1.25a.625.625 0 1 0 1.25 0v-1.25h1.25a.625.625 0 1 0 0-1.25h-1.25v-1.25Z\" fill=\"currentColor\"/><path d=\"M8.75 3.047a.569.569 0 0 0-.47-.571A6.3 6.3 0 1 0 13.6 8.7a.457.457 0 0 0-.466-.45h-.353a.442.442 0 0 0-.431.45 5.05 5.05 0 1 1-4.395-5.008c.402.052.795-.239.795-.645Z\" fill=\"currentColor\"/><path d=\"M10.8 8.35a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0ZM4.85 9.4a1.05 1.05 0 1 0 0-2.1 1.05 1.05 0 0 0 0 2.1ZM5.433 10.45a.233.233 0 0 0-.233.233c0 1.031.836 1.867 1.867 1.867h.466c1.031 0 1.867-.836 1.867-1.867a.233.233 0 0 0-.233-.233H5.433Z\" fill=\"currentColor\"/></svg>";
                var Xib = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18.75 3.75a.75.75 0 0 0-1.5 0v1.5h-1.5a.75.75 0 0 0 0 1.5h1.5v1.5a.75.75 0 0 0 1.5 0v-1.5h1.5a.75.75 0 0 0 0-1.5h-1.5v-1.5Z\" fill=\"currentColor\"/><path d=\"M13.5 4.899a.69.69 0 0 0-.53-.683 9 9 0 1 0 6.813 6.813.69.69 0 0 0-.682-.529c-.501 0-.854.498-.753.99a7.5 7.5 0 1 1-5.838-5.838c.492.1.99-.252.99-.753Z\" fill=\"currentColor\"/><path d=\"M16 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM7.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM8.333 15.5a.333.333 0 0 0-.333.333 2.667 2.667 0 0 0 2.667 2.667h.666A2.667 2.667 0 0 0 14 15.833a.333.333 0 0 0-.333-.333H8.333Z\" fill=\"currentColor\"/></svg>";
                var uhb = gw({
                    small: Wib,
                    medium: Xib
                });
                var Yib = Number.parseInt("300ms", 10),
                    Zib = {
                        enter: "gWeP3g",
                        enterActive: "YL-ApQ",
                        enterDone: void 0,
                        exitActive: "qqCHKg",
                        exitDone: "gum40Q"
                    },
                    vhb = f$(function({
                        eh: a = !1,
                        children: b,
                        gG: c,
                        MH: d,
                        ariaLive: e,
                        UL: f
                    }) {
                        a = Gd.ma && !a;
                        return __c.tZ({
                            children: b,
                            gG: c,
                            MH: d,
                            ariaLive: e,
                            UL: f,
                            Ica: a ? Yib : 0,
                            wfa: $8({
                                _4C1vIA: a
                            }),
                            noa: Zib
                        })
                    });
                var C9 = class {
                    constructor({
                        Oc: a,
                        Dc: b
                    }) {
                        this.rd = !1;
                        this.dQ = void 0;
                        this.Oc = a;
                        this.Dc = b
                    }
                    get isEnabled() {
                        return this.Oc.Th
                    }
                    get count() {
                        return this.Dc.Jk
                    }
                    get YV() {
                        return this.dQ
                    }
                    A9(a) {
                        this.dQ = a
                    }
                    get pf() {
                        return this.rd
                    }
                    re() {
                        this.rd = !1
                    }
                    Si() {
                        this.rd = !this.rd
                    }
                };
                __c.p = C9.prototype;
                _dmr(C9, "rd");
                _dmr(C9, "dQ");
                _dmb(C9, "A9", null);
                _dmb(C9, "re", null);
                _dmb(C9, "Si", null);
                var Ghb = class {
                    constructor(a) {
                        this.Gka = a;
                        this.Z8 = !1;
                        this.queue = []
                    }
                    schedule(a, b) {
                        this.queue.push({
                            callback: a,
                            meta: b
                        });
                        this.Gka && (this.queue = [...this.Gka(this.queue)]);
                        whb(this)
                    }
                };
                var G9 = class {
                    constructor({
                        B: a,
                        fe: b,
                        Sc: c,
                        fb: d
                    }) {
                        this.xp = !1;
                        this.scheduler = new Ghb;
                        this.B = a;
                        this.fe = b;
                        this.Sc = c;
                        this.fb = d
                    }
                    get Th() {
                        return this.xp
                    }
                    Rt() {
                        this.xp || (this.xp = !0, this.scheduler.schedule(() => xhb(this, !0)))
                    }
                    AA() {
                        this.xp && (this.ZR(), this.scheduler.schedule(() => xhb(this, !1)))
                    }
                    ZR() {
                        this.xp = !1
                    }
                };
                _dmr(G9, "xp");
                _dmb(G9, "Rt", null);
                _dmb(G9, "AA", null);
                _dmb(G9, "ZR", null);
                var $ib = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19.5 12a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm1.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM8.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm8.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-8 3.333c0-.184.15-.333.333-.333h5.334c.184 0 .333.15.333.333a2.667 2.667 0 0 1-2.667 2.667h-.666A2.667 2.667 0 0 1 9 14.833Z\" fill=\"currentColor\"/></svg>";
                var Dhb = gw({
                    medium: $ib
                });
                var D9 = class {
                    constructor(a) {
                        this.Dc = a;
                        this.rd = !1
                    }
                    get pf() {
                        return this.rd
                    }
                    get Jk() {
                        return Array.from(this.Dc.cY.values()).reduce((a, b) => a + b, 0)
                    }
                    get iO() {
                        return Array.from(this.Dc.cY.entries()).sort(([, a], [, b]) => b - a)
                    }
                    Si() {
                        this.rd = !this.rd
                    }
                    re() {
                        this.rd = !1
                    }
                };
                __c.p = D9.prototype;
                _dmr(D9, "rd");
                _dmc(D9, "Jk");
                _dmc(D9, "iO");
                _dmb(D9, "Si", null);
                _dmb(D9, "re", null);
                var ajb = class {
                    constructor(a, b) {
                        this.Jla = a;
                        this.NEa = b
                    }
                    async KR(a, b) {
                        a = await this.Jla.KR(a, b);
                        "error" === a.kind && 2 === a.errorCode && this.NEa();
                        return a
                    }
                    lK(a) {
                        return this.Jla.lK(a)
                    }
                };
                var m$ = class {
                    constructor(a) {
                        var {
                            ea: b,
                            L: c,
                            B: d,
                            Sc: e
                        } = a;
                        this.Zza = 0;
                        this.Gma = new Map;
                        this.QR = new Map;
                        this.vA = new Map;
                        this.PR = [];
                        this.Ir = new Set;
                        this.Rh = [];
                        this.ea = b;
                        this.L = c;
                        this.B = d;
                        this.Sc = e
                    }
                    get sO() {
                        const a = new Map(this.QR);
                        this.Rh.forEach((b) => {
                            const c = a.get(b.code);
                            null != c ? a.set(b.code, Object.assign({}, c, {
                                count: c.count + 1
                            })) : a.set(b.code, {
                                code: b.code,
                                count: 1,
                                Sw: b.timestamp
                            })
                        });
                        this.vA.forEach((b) => {
                            if (this.Ir.has(b.Yn)) {
                                const c = a.get(b.code);
                                c && (1 === c.count ? a.delete(b.code) : a.set(b.code, Object.assign({},
                                    c, {
                                        count: c.count - 1
                                    })))
                            }
                        });
                        return a
                    }
                    get Jk() {
                        return Array.from(this.sO.values()).reduce((a, b) => a + b.count, 0)
                    }
                    get wD() {
                        return [...this.Rh, ...Ehb(this)].length
                    }
                    get F4() {
                        const a = this.PR.filter((b) => !this.Ir.has(b.Yn));
                        return [...this.Rh, ...a].sort((b, c) => c.timestamp - b.timestamp).slice(0, 5)
                    }
                    get h9() {
                        return new Set([...this.Rh.map((a) => a.code), ...Fhb(this)])
                    }
                    async WJ(a) {
                        ja(null == this.Rh.find((c) => c.code === a), `A reaction for ${a} already exists`);
                        this.Rh.push({
                            kind: "in-memory",
                            localId: E9(this),
                            code: a,
                            timestamp: this.ea.now(),
                            L: this.L
                        });
                        const b = this.Rh[this.Rh.length - 1];
                        F9(this, a).schedule(async () => {
                            try {
                                const c = await this.Sc.KR(a, this.L);
                                switch (c.kind) {
                                    case "success":
                                        b.Yn = c.Ms;
                                        break;
                                    case "error":
                                        switch (c.errorCode) {
                                            case 2:
                                                this.AN(b.localId);
                                                break;
                                            case 1:
                                                this.AN(b.localId);
                                                break;
                                            default:
                                                throw new v(c.errorCode);
                                        }
                                        break;
                                    default:
                                        throw new v(c);
                                }
                            } catch (c) {
                                this.B.Yc(c), this.AN(b.localId)
                            }
                        }, "create")
                    }
                    async jK(a) {
                        const b = this.Rh.findIndex((c) => c.code === a);
                        if (0 <= b) {
                            const c = this.Rh[b];
                            this.Rh.splice(b, 1);
                            F9(this, a).schedule(async () => {
                                if (null != c.Yn) try {
                                    const d = await this.Sc.lK(c.Yn);
                                    switch (d.kind) {
                                        case "success":
                                            break;
                                        case "error":
                                            this.tW(c);
                                            break;
                                        default:
                                            throw new v(d);
                                    }
                                } catch (d) {
                                    this.B.Yc(d), this.tW(c)
                                }
                            }, "delete")
                        } else {
                            const c = u(this.vA.get(a), `There is no existing DB user reaction for ${a}`);
                            this.Ir.add(c.Yn);
                            F9(this, a).schedule(async () => {
                                try {
                                    const d = await this.Sc.lK(c.Yn);
                                    switch (d.kind) {
                                        case "success":
                                            break;
                                        case "error":
                                            switch (d.errorCode) {
                                                case 1:
                                                case 2:
                                                    this.Ir.delete(c.Yn);
                                                    break;
                                                default:
                                                    throw new v(d.errorCode);
                                            }
                                            break;
                                        default:
                                            throw new v(d);
                                    }
                                } catch (d) {
                                    this.B.Yc(d), m9(() => {
                                        this.Ir.delete(c.Yn)
                                    })
                                }
                            }, "delete")
                        }
                    }
                    AN(a) {
                        const b = this.Rh.findIndex((c) => c.localId === a);
                        0 <= b && this.Rh.splice(b, 1)
                    }
                    tW(a) {
                        null == this.Rh.find((b) => b.code === a.code) && this.Rh.push(a)
                    }
                };
                __c.p = m$.prototype;
                _dmr(m$, "QR");
                _dmr(m$, "vA");
                _dmr(m$, "PR");
                _dp([t9.shallow], m$.prototype, "Ir", void 0);
                _dp([t9.deep], m$.prototype, "Rh", void 0);
                _dmc(m$, "sO");
                _dmc(m$, "Jk");
                _dmc(m$, "wD");
                _dmc(m$, "F4");
                _dmc(m$, "h9");
                _dmb(m$, "WJ", null);
                _dmb(m$, "jK", null);
                _dma(m$, "AN", null);
                _dma(m$, "tW", null);
                var H9 = class {
                    constructor({
                        ea: a,
                        Zc: b,
                        Ga: c,
                        B: d,
                        Sc: e,
                        fb: f,
                        fe: g,
                        Oc: h
                    }) {
                        this.Zc = b;
                        this.B = d;
                        this.Sc = e;
                        this.fb = f;
                        this.fe = g;
                        this.Oc = h;
                        const k = new ajb(e, () => {
                            m9(() => {
                                this.Oc.ZR();
                                b_(this.fe, {
                                    LB: H("aRCSaQ")
                                })
                            })
                        });
                        this.Xl = __c.pO(c).reduce((l, m) => {
                            l.set(m, new m$({
                                ea: a,
                                L: m,
                                B: d,
                                Sc: k
                            }));
                            return l
                        }, new Map)
                    }
                    ZS(a) {
                        return u(this.Xl.get(a))
                    }
                    get Jk() {
                        return Array.from(this.Xl.values()).reduce((a, b) => a + b.Jk, 0)
                    }
                    get wD() {
                        return Array.from(this.Xl.values()).reduce((a, b) => a + b.wD, 0)
                    }
                    get cY() {
                        return Array.from(this.Xl.values()).reduce((a,
                            b) => {
                            Array.from(b.sO.values()).forEach((c) => {
                                a.set(c.code, c.count + (a.get(c.code) || 0))
                            });
                            return a
                        }, new Map)
                    }
                    rA(a, b) {
                        this.fb.VO({
                            AC: b,
                            aK: a
                        });
                        u(this.Xl.get(a)).WJ(b)
                    }
                    xA(a, b) {
                        this.fb.WO({
                            AC: b,
                            aK: a
                        });
                        u(this.Xl.get(a)).jK(b)
                    }
                    async kr() {
                        this.fb.OO();
                        try {
                            const {
                                kind: a
                            } = await this.Sc.kr();
                            if ("success" === a) return m9(() => {
                                this.Xl.forEach((b) => {
                                    Ihb(b)
                                })
                            }), !0
                        } catch (a) {
                            this.B.Yc(a)
                        }
                        return !1
                    }
                };
                __c.p = H9.prototype;
                _dp([t9.shallow], H9.prototype, "Xl", void 0);
                _dmc(H9, "Jk");
                _dmc(H9, "wD");
                _dmc(H9, "cY");
                _dmb(H9, "rA", null);
                _dmb(H9, "xA", null);
                _dmb(H9, "kr", null);
                var P9 = class {
                    constructor({
                        UN: a,
                        aa: b,
                        extensions: c,
                        fb: d,
                        Lv: e
                    }) {
                        this.rd = !1;
                        this.Pra = Dgb();
                        this.SI = !1;
                        a = new __c.hh({
                            default: 2 === a ? null === c || void 0 === c ? void 0 : c.view : null === c || void 0 === c ? void 0 : c.default
                        });
                        c = {
                            content: b,
                            Zz: "designshare",
                            medium: "link",
                            source: "viewer"
                        };
                        this.oq = location.origin + sC(qC(qC(qC(qC(qC(__c.uQ(b, "view", a && a.default), "utm_content", c.content), "utm_campaign", c.Zz), "utm_medium", c.medium), "utm_source", c.source), "utlId", c.P6a));
                        this.fb = d;
                        this.Lv = e
                    }
                    Si() {
                        this.rd = !this.rd
                    }
                    re() {
                        this.rd = !1
                    }
                    get pf() {
                        return this.rd
                    }
                    async No() {
                        var a;
                        this.fb.pd({
                            Wc: "share",
                            Ye: "player"
                        });
                        var b;
                        if (!(b = null == (null === (a = this.Lv) || void 0 === a ? void 0 : a.oq))) {
                            var {
                                userAgent: c,
                                maxTouchPoints: d
                            } = navigator;
                            b = !__c.RQ(c) || /iphone|ipad/i.test(c) ? !1 : 1 >= d
                        }
                        b ? this.Si() : "SHARED" === (await this.Lv.oq({
                            url: this.oq
                        })).status && this.fb.pd({
                            Wc: "share_link_copy",
                            Ye: "player"
                        })
                    }
                    get xua() {
                        return this.SI
                    }
                    onCopy() {
                        this.fb.pd({
                            Wc: "share_link_copy",
                            Ye: "player"
                        });
                        this.Pra(this.oq);
                        this.SI = !0;
                        this.vZ = window.setTimeout(p9(() => this.SI = !1),
                            2E3)
                    }
                    qw() {
                        this.vZ && window.clearTimeout(this.vZ);
                        this.vZ = void 0
                    }
                };
                __c.p = P9.prototype;
                _dmr(P9, "rd");
                _dmb(P9, "Si", null);
                _dmb(P9, "re", null);
                _dmc(P9, "pf");
                _dmb(P9, "No", null);
                _dmr(P9, "SI");
                _dmb(P9, "onCopy", null);
                var bjb = class extends e$ {
                        constructor() {
                            super(...arguments);
                            this.MC = g$()
                        }
                        componentDidUpdate() {
                            this.MC.current && this.props.state === c9 && this.MC.current.scrollIntoView({
                                block: "center",
                                behavior: "smooth"
                            })
                        }
                        render() {
                            const a = this.props.state,
                                b = this.props.ova,
                                c = this.props.DI;
                            return Y("div", {
                                id: this.props.cu,
                                className: $8("_9JLaWg", Whb(a), b && "MJP0OA"),
                                children: Y(c, {
                                    state: a,
                                    MC: this.MC
                                })
                            })
                        }
                    },
                    cjb = ({
                        mode: a,
                        page: b,
                        cu: c,
                        lC: d,
                        DI: e
                    }) => {
                        const f = "page" === a;
                        return Z8("main", {
                            className: "p62QJw",
                            "aria-label": "page" === a ?
                                H("rnsyAg") : H("Sf4/yg"),
                            children: [Y(A9, { in: "page" === a,
                                timeout: 1800,
                                children: (g) => Y("div", {
                                    id: d,
                                    className: $8("nvme4A", Whb(g), f && "MJP0OA"),
                                    children: b
                                })
                            }), Y(A9, { in: "grid" === a,
                                timeout: 1800,
                                children: (g) => Y(bjb, {
                                    cu: c,
                                    state: g,
                                    ova: f,
                                    DI: e
                                })
                            })]
                        })
                    };
                var djb = ({
                    title: a
                }) => Y(mw.Jba, {
                    color: "monoWhite",
                    Yb: "center",
                    lineClamp: 1,
                    tagName: "h1",
                    La: "legacy",
                    children: a
                });
                var n$ = class extends e$ {
                    constructor() {
                        super(...arguments);
                        this.rla = this.sla = this.ola = !1
                    }
                    componentDidUpdate() {
                        const a = this.props.ena,
                            b = this.props.Zma;
                        this.ola = "comfortable" === this.props.Cb && a;
                        this.sla = a;
                        this.rla = b
                    }
                    render() {
                        const a = this.props.title,
                            b = this.props.ena,
                            c = this.props.pk,
                            d = this.props.Cb,
                            e = this.props.MIa,
                            f = this.ola && !b,
                            g = b || f && this.sla,
                            h = this.props.Zma || f && this.rla,
                            k = Z8("div", {
                                className: $8("qXJ6ug", {
                                    ec6TNw: !g
                                }),
                                children: [Y(djb, {
                                    title: a
                                }), e && Y(__c.xPa, {})]
                            });
                        return Y(A9, { in: f,
                            timeout: 1200,
                            children: (l) => Z8("div", {
                                className: $8("xd8l4g", {
                                    sZPYrQ: "comfortable" === d,
                                    OZfE8A: l === c9 || l === b9,
                                    vBPq0w: !h,
                                    ECf6Mw: !g
                                }),
                                children: [g ? k : Y(__c.aw, {
                                    children: k
                                }), h && Y(__c.lA, {
                                    variant: "tertiary",
                                    className: "lL3_sg",
                                    icon: __c.Iw,
                                    onClick: c,
                                    size: "small",
                                    od: H("Sn4nMA")
                                })]
                            })
                        })
                    }
                };
                n$ = b$([s9], n$);
                var Y9 = class extends e$ {
                    render() {
                        const a = this.props.DI,
                            b = this.props.cu,
                            c = this.props.lC,
                            d = this.props.ui,
                            e = this.props.uu,
                            f = this.props.Sk,
                            g = this.props.e2,
                            h = this.props.nqa;
                        return Y(__c.HQa, {
                            backgroundColor: "rgb(14, 19, 24)",
                            children: Z8(__c.xW, {
                                appearance: this.props.appearance,
                                children: [h && Y(__c.fe, {
                                    level: 1,
                                    open: !0,
                                    children: Y(h, {})
                                }), Y(__c.Od, {
                                    light: "dark",
                                    Hm: "dark",
                                    children: (k) => Z8("div", {
                                        className: $8("WbWDug", k.className),
                                        children: [Y("div", {
                                            role: "navigation",
                                            children: Y(n$, {
                                                title: d,
                                                ena: "grid" === f.mode,
                                                Zma: "grid" === f.mode,
                                                MIa: "small" !== e.N,
                                                pk: this.c0,
                                                Cb: "comfortable"
                                            })
                                        }), Y(cjb, {
                                            page: this.gGa,
                                            mode: f.mode,
                                            cu: b,
                                            lC: c,
                                            DI: a
                                        }), g]
                                    })
                                })]
                            })
                        })
                    }
                    c0() {
                        this.props.Sk.Ji("page")
                    }
                    get gGa() {
                        const {
                            Gj: a,
                            Fj: b,
                            jc: c,
                            toolbar: d,
                            uu: {
                                N: e
                            },
                            Sk: f,
                            k8: g,
                            bta: h,
                            xKa: k,
                            Sv: l,
                            Fi: m
                        } = this.props, n = f.D2;
                        return Y(__c.eE, {
                            m6: m,
                            children: "large" === e ? Y(ejb, {
                                hg: n,
                                Gj: a,
                                Fj: b,
                                jc: c,
                                toolbar: d,
                                k8: g,
                                a8: h,
                                Sv: l
                            }) : Y(fjb, {
                                hg: n,
                                Gj: a,
                                Fj: b,
                                jc: c,
                                toolbar: d,
                                N: e,
                                a8: k,
                                Sv: l
                            })
                        })
                    }
                };
                _dmb(Y9, "c0", null);
                Y9 = b$([s9], Y9);
                var fjb = class extends e$ {
                        constructor() {
                            super(...arguments);
                            this.lFa = (a) => {
                                a.stopPropagation()
                            };
                            this.KEa = (a) => {
                                a.stopPropagation()
                            }
                        }
                        render() {
                            const a = this.props.Gj,
                                b = this.props.Fj,
                                c = this.props.toolbar,
                                d = this.props.N,
                                e = this.props.a8,
                                f = this.props.Sv,
                                g = this.props.hg,
                                h = this.props.jc;
                            return Z8(X9, {
                                children: [Y(__c.p_, {
                                    jB: !0,
                                    hg: g,
                                    children: (k, l) => Z8("div", {
                                        role: "none",
                                        onClick: this.KEa,
                                        className: $8(l, "LeAlXw"),
                                        children: [e, f && "small-landscape" !== d ? Y(f, {
                                            TD: () => Y(o$, {
                                                Gj: a,
                                                Fj: b,
                                                wKa: !0
                                            })
                                        }) : Y(o$, {
                                            Gj: a,
                                            Fj: b
                                        })]
                                    })
                                }), Y("div", {
                                    className: "w7aXqQ",
                                    children: h
                                }), Y(__c.GW, {
                                    jB: !0,
                                    hg: g,
                                    children: (k, l) => Y("div", {
                                        role: "none",
                                        onClick: this.lFa,
                                        className: $8("EA7tKA", l),
                                        children: Y(__c.PP.Provider, {
                                            value: {
                                                ei: k
                                            },
                                            children: c
                                        })
                                    })
                                })]
                            })
                        }
                    },
                    ejb = s9(function({
                        Gj: a,
                        Fj: b,
                        toolbar: c,
                        k8: d,
                        a8: e,
                        hg: f,
                        jc: g,
                        Sv: h
                    }) {
                        const k = {
                            Vwa: 100,
                            gxa: 250,
                            oK: {
                                top: !0,
                                bottom: !0
                            }
                        };
                        return Z8(X9, {
                            children: [Y("div", {
                                className: "w7aXqQ",
                                children: g
                            }), Y(__c.p_, {
                                hg: f,
                                bna: !1,
                                Yna: k,
                                children: (l, m) => Y(X9, {
                                    children: h ? Y("div", {
                                        className: $8("lVG4UA", m),
                                        children: Y(h, {
                                            TD: () => Y(o$, {
                                                Gj: a,
                                                Fj: b
                                            })
                                        })
                                    }) : Y("div", {
                                        className: $8("OjXkFw", m),
                                        children: Y(o$, {
                                            Gj: a,
                                            Fj: b
                                        })
                                    })
                                })
                            }), Y(__c.GW, {
                                hg: f,
                                bna: !1,
                                IBa: !1,
                                Yna: k,
                                children: (l, m) => Z8("div", {
                                    className: $8("EA7tKA", m),
                                    children: [Y("div", {
                                        className: "Skd6-A",
                                        children: d
                                    }), Y("div", {
                                        className: "nm73nw",
                                        children: e
                                    }), Y(__c.PP.Provider, {
                                        value: {
                                            ei: l
                                        },
                                        children: c
                                    })]
                                })
                            })]
                        })
                    }),
                    o$ = class extends e$ {
                        e6() {
                            this.props.Gj.start();
                            this.props.Fj.set(!0)
                        }
                        render() {
                            const a = this.props.Gj,
                                b = this.props.Fj,
                                c = this.props.wKa;
                            return a.Oza && (a.loading || !b.get()) && Y(ON, {
                                padding: "small",
                                children: Y(__c.lA, {
                                    variant: "primary",
                                    icon: __c.ML,
                                    onClick: this.e6,
                                    loading: a.loading,
                                    children: !c && (__c.pv() ? H("hrWYVQ") : H("9Xt6Qw"))
                                })
                            })
                        }
                    };
                _dmb(o$, "e6", null);
                o$ = b$([s9], o$);
                var p$ = class extends e$ {
                    constructor() {
                        super(...arguments);
                        this.visible = !1;
                        this.Tka = g$();
                        this.onClick = () => {
                            const a = this.props.onClick;
                            a(this.props.L)
                        }
                    }
                    componentDidMount() {
                        const a = this.props.vz,
                            b = u(this.Tka.current);
                        this.props.sf && ("ScrollIntoViewOptions" in window ? b.scrollIntoView({
                            block: "center",
                            inline: "center"
                        }) : b.scrollIntoView(!1));
                        this.dispose = a.observe(b, this.SG)
                    }
                    SG(a) {
                        a && (this.visible = !0, this.dispose && this.dispose())
                    }
                    render() {
                        const a = this.props.sf,
                            b = this.props.page,
                            c = this.props.Cj,
                            d = this.props.F,
                            e = this.props.animation,
                            f = this.props.$Ja,
                            g = {
                                height: d.height,
                                animationDelay: `${this.props.animationDelay}s`
                            },
                            h = this.props.L + 1;
                        return Z8("div", {
                            children: [Y("button", {
                                "aria-label": Wy("5MgONw", [h]),
                                ref: f,
                                style: g,
                                className: $8("PvPkoQ _0REFbg", {
                                    _2ruRYg: a && "in" === e,
                                    j0qNWw: !a && "in" === e,
                                    X4sQaw: a && "out" === e,
                                    "e-moGQ": !a && "out" === e
                                }),
                                onClick: this.onClick,
                                children: Z8("div", {
                                    className: $8("Ozjo7g", {
                                        U2G1HA: this.visible,
                                        "UXOK0g Ut-ecQ": !a
                                    }),
                                    ref: this.Tka,
                                    children: [Y(c, {
                                        F: d,
                                        page: b,
                                        OFa: !1,
                                        wj: this.visible,
                                        o_: "selected",
                                        n_: "thick"
                                    }), Y("div", {
                                        className: "gX4pyg"
                                    })]
                                })
                            }), Y("div", {
                                className: "_1_MWww",
                                children: Y(mw.rra, {
                                    color: "monoWhite",
                                    La: "legacy",
                                    children: h
                                })
                            })]
                        })
                    }
                };
                _dmr(p$, "visible");
                _dmb(p$, "SG", null);
                p$ = b$([s9], p$);
                var q$ = class extends e$ {
                    constructor() {
                        super(...arguments);
                        this.onResize = ({
                            bounds: a
                        }) => {
                            const b = this.props.onResize;
                            b(a.width)
                        }
                    }
                    render() {
                        return Y(qhb, {
                            bounds: !0,
                            onResize: this.onResize,
                            children: ({
                                measureRef: a
                            }) => Y("div", {
                                ref: a
                            })
                        })
                    }
                };
                q$ = b$([s9], q$);
                var V9 = class extends e$ {
                    constructor() {
                        super(...arguments);
                        this.$na = g$()
                    }
                    componentDidMount() {
                        var a = this.props.vz,
                            b = this.$na.current;
                        ja(!a.observer, "root element already set");
                        a.observer = new IntersectionObserver(a.yEa, {
                            root: b,
                            rootMargin: "50%",
                            threshold: void 0
                        });
                        for (const c of a.Ur.keys()) a.observer.observe(c)
                    }
                    render() {
                        const a = this.props.selectedIndex,
                            b = this.props.animation,
                            c = this.props.onClick,
                            d = this.props.MC,
                            e = this.props.store,
                            f = this.props.Cj,
                            g = this.props.vz,
                            h = e.width,
                            k = e.height,
                            l = e.scale,
                            m = e.Ha,
                            n = e.V5,
                            q = "large" === this.props.uu.N ? "comfortable" : "compact";
                        return Y("div", {
                            ref: this.$na,
                            className: "HR9Jvw",
                            children: Z8("div", {
                                className: $8("JlhL9A", {
                                    RCBkwQ: "compact" === q,
                                    R8vuQw: "comfortable" === q
                                }),
                                style: {
                                    gridTemplateColumns: `repeat(${n}, 1fr)`
                                },
                                children: [0 < k && m.toArray().map((r, x) => {
                                    const y = m.NF(r),
                                        z = x === a;
                                    if ("none" !== b) {
                                        var B = m.count();
                                        let F, J;
                                        const N = Math.min(.5, .5 / (B / 10));
                                        "out" === b ? (F = z ? 1.2 : .8, J = z ? .4 : .2) : (F = z ? .2 : .8, J = z ? .2 : .4);
                                        B = Math.min(F, J + N * (z ? B : x))
                                    } else B = 0;
                                    return Y(p$, {
                                        L: x,
                                        page: r,
                                        Cj: f,
                                        sf: z,
                                        F: {
                                            width: h,
                                            height: k,
                                            scale: l
                                        },
                                        animation: b,
                                        animationDelay: B,
                                        $Ja: z ? d : void 0,
                                        onClick: c,
                                        vz: g
                                    }, y)
                                }), Y(q$, {
                                    onResize: e.M6
                                })]
                            })
                        })
                    }
                };
                V9 = b$([s9], V9);
                var U9 = class {
                    constructor(a, b = window) {
                        this.ya = a;
                        this.Xd = b;
                        this.Dda = () => {
                            var c = this.ya.F,
                                d = this.ya.Ha;
                            let e = Math.ceil(this.Xd.innerWidth / (c.width > c.height ? 300 : 300 / this.aspectRatio));
                            c = Math.floor(this.Xd.innerHeight / (c.height > c.width ? 300 : 300 * this.aspectRatio));
                            d.count() / e < c && (d = d.count() / c, e = Math.ceil((e + d) / 2));
                            return e
                        };
                        this.YP = this.Dda()
                    }
                    get V5() {
                        return this.YP
                    }
                    get Ha() {
                        return this.ya.Ha
                    }
                    get aspectRatio() {
                        const a = this.ya.F;
                        return a.height / a.width
                    }
                    get scale() {
                        return this.jt ? this.jt / __c.KE(this.ya.F).width :
                            1
                    }
                    get height() {
                        return this.jt ? this.jt * this.aspectRatio : 0
                    }
                    get width() {
                        return this.jt || 0
                    }
                    M6(a) {
                        this.YP = this.Dda();
                        this.jt = a
                    }
                };
                __c.p = U9.prototype;
                _dmr(U9, "jt");
                _dmr(U9, "YP");
                _dmc(U9, "V5");
                _dmc(U9, "scale");
                _dmc(U9, "height");
                _dmb(U9, "M6", null);
                var gjb = ({
                    TD: a,
                    Hea: b,
                    IG: c
                }) => {
                    const d = "button" === b.type ? Y(__c.lA, {
                        variant: "contrast",
                        onClick: () => {
                            c();
                            b.$Da()
                        },
                        children: b.C0
                    }) : Y(__c.rO, {
                        variant: "contrast",
                        href: b.Vua,
                        onClick: c,
                        children: b.C0
                    });
                    return Z8("div", {
                        className: "FhIxoQ",
                        children: [Y(ON, {
                            padding: "small",
                            children: d
                        }), Y(a, {})]
                    })
                };
                var r$ = class {
                    constructor() {
                        this.wp = !1
                    }
                    get pK() {
                        return this.wp
                    }
                    fA() {
                        this.wp = !1
                    }
                    openDialog() {
                        this.wp = !0
                    }
                };
                _dmr(r$, "wp");
                _dmb(r$, "fA", null);
                _dmb(r$, "openDialog", null);
                var cib = async (a) => {
                    var {
                        $C: b,
                        zb: c,
                        zc: d,
                        Qb: e,
                        ua: f,
                        Sk: g,
                        Oa: h,
                        J: k,
                        fb: l,
                        xd: m,
                        B: n,
                        MO: q,
                        nh: r
                    } = a;
                    const x = () => l.pd({
                        Wc: "top_bar_cta",
                        Ye: "player",
                        xw: f.L
                    });
                    if (3 === q || 4 === q) {
                        a = await k.Qm();
                        var y = "https://" + Yhb() + "/design?create&type=" + h;
                        y = new URLSearchParams({
                            $canonical_url: y
                        });
                        a && y.append("uid", encodeURIComponent(a));
                        a = "https://fhbw.app.link?" + y;
                        const F = {
                            type: "link",
                            C0: 4 === q ? H("bRk/UA") : H("qXP1rg"),
                            Vua: a
                        };
                        return {
                            enabled: !0,
                            Sv: (J) => {
                                ({
                                    TD: J
                                } = J);
                                return Y(gjb, {
                                    TD: J,
                                    Hea: F,
                                    IG: x
                                })
                            },
                            rZ: void 0
                        }
                    }
                    if (!b.enabled) return {
                        enabled: !1
                    };
                    const z = new r$;
                    w9(g, () => z.pK);
                    a = Zhb(async () => {
                        const {
                            Pua: F
                        } = await __webpack_require__.me(92626).then(() => __c.kfb);
                        return {
                            default: await F({
                                zb: c,
                                Oa: h,
                                zc: d,
                                Qb: e,
                                J: k,
                                xd: m,
                                B: n,
                                Go: b.Go,
                                yu: b.yu,
                                vKa: z,
                                nh: r
                            })
                        }
                    });
                    const B = {
                        type: "button",
                        C0: H("qXP1rg"),
                        $Da: z.openDialog
                    };
                    return {
                        enabled: !0,
                        Sv: (F) => {
                            ({
                                TD: F
                            } = F);
                            return Y(gjb, {
                                TD: F,
                                Hea: B,
                                IG: x
                            })
                        },
                        rZ: a
                    }
                };
                var R9 = class {
                    constructor() {
                        this.C2 = t9.array();
                        this.mode = "page";
                        this.R$ = () => {
                            this.mode = "page" === this.mode ? "grid" : "page"
                        };
                        this.Ji = (a) => {
                            this.mode = a
                        }
                    }
                    get D2() {
                        return 0 < this.C2.length && this.C2.some((a) => a())
                    }
                };
                _dmr(R9, "mode");
                _dma(R9, "R$", void 0);
                _dma(R9, "Ji", void 0);
                _dmc(R9, "D2");
                var W9 = class {
                    constructor({
                        B: a,
                        fb: b,
                        ua: c,
                        Zc: d,
                        variant: e,
                        Oa: f
                    }) {
                        this.fb = b;
                        this.ua = c;
                        this.Zc = d;
                        this.variant = e;
                        switch (e) {
                            case 1:
                                break;
                            case 2:
                                a.warning("Unexpected \"MAKE_A_COPY\" variant");
                                break;
                            case 3:
                                this.Gea = H("P/54Dw");
                                this.Iea = __c.xQ({
                                    Oa: f
                                });
                                break;
                            case 4:
                                this.Gea = H("P/54Dw");
                                this.Iea = Y8();
                                break;
                            default:
                                throw new v(e);
                        }
                    }
                    IG() {
                        this.fb.pd({
                            Wc: "anon_editor_cta",
                            Ye: "player",
                            xw: this.ua.L
                        })
                    }
                };
                _dmb(W9, "IG", null);
                var hjb = f$((a) => {
                    const b = 2 === a.DB;
                    return Y(__c.xA, {
                        onClick: a.onClick,
                        href: a.href,
                        target: "_blank",
                        className: $8("hf7rcA", {
                            MgjgMw: b
                        }),
                        variant: "unstyled",
                        children: b ? Y(__c.sva, {}) : Y(__c.qva, {})
                    })
                });
                var ijb = "<svg width=\"32\" height=\"32\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"currentColor\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M28.384 4.616a4.078 4.078 0 0 0-5.768 0l-13.8 13.8a9.251 9.251 0 0 0-2.092 3.22l-1.89 4.915a1.25 1.25 0 0 0 1.615 1.616l4.915-1.89a9.25 9.25 0 0 0 3.22-2.094l13.8-13.8a4.078 4.078 0 0 0 0-5.767zm-4 1.768a1.578 1.578 0 1 1 2.232 2.232L25.5 9.732 23.268 7.5l1.116-1.116zM21.5 9.268 12.768 18 15 20.232l8.732-8.732L21.5 9.268zM10.584 20.183l.416-.415L13.232 22l-.415.416a6.75 6.75 0 0 1-2.35 1.527l-1.013.39-.786-.787.39-1.013a6.75 6.75 0 0 1 1.526-2.35z\"/></svg>";
                var jjb = "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M14.192 2.308a2.04 2.04 0 0 0-2.884 0l-6.9 6.9a4.625 4.625 0 0 0-1.046 1.61l-.945 2.458a.625.625 0 0 0 .807.807l2.458-.945a4.625 4.625 0 0 0 1.61-1.046l6.9-6.9a2.04 2.04 0 0 0 0-2.884zm-2 .884a.79.79 0 1 1 1.116 1.116l-.558.558-1.116-1.116.558-.558zM10.75 4.634 6.384 9 7.5 10.116l4.366-4.366-1.116-1.116zm-5.458 5.458.208-.208L6.616 11l-.208.208a3.375 3.375 0 0 1-1.175.763l-.761.293-.236-.236.293-.761c.17-.441.43-.841.763-1.175z\"/></svg>";
                var kjb = "<svg width=\"12\" height=\"12\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M10.645 1.73a1.53 1.53 0 0 0-2.165 0L3.305 6.906c-.34.344-.61.754-.782 1.207l-.71 1.844a.474.474 0 0 0 .105.5.474.474 0 0 0 .5.105l1.844-.71a3.475 3.475 0 0 0 1.207-.782l5.176-5.175a1.53 1.53 0 0 0 0-2.165Zm-1.5.665a.59.59 0 0 1 1.011.253.59.59 0 0 1-.176.582l-.418.418-.835-.836ZM8.063 3.477 4.788 6.75l.836.836 3.273-3.274ZM3.968 7.57l.156-.156.836.836-.156.156c-.25.25-.551.446-.88.57l-.57.223-.18-.18.223-.57a2.51 2.51 0 0 1 .57-.879Zm0 0\"/></svg>";
                var ljb = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"m6.1 17.8.73.73 1.3-.49a4.5 4.5 0 0 0 1.48-.91L7.5 15.01c-.4.43-.7.94-.91 1.48L6.1 17.8zm2.46-3.85 2.12 2.12 7.39-7.4-2.12-2.11-7.4 7.4zM17 5.5l2.12 2.12.83-.83a1.5 1.5 0 0 0-2.12-2.12L17 5.5zm4.01-1.9a3 3 0 0 1 0 4.25L10.8 18.07a6 6 0 0 1-2.14 1.38l-4 1.49a.75.75 0 0 1-.97-.97l1.5-4a6 6 0 0 1 1.37-2.15L16.78 3.61a3 3 0 0 1 4.24 0z\"/></svg>";
                var mjb = gw({
                    En: kjb,
                    small: jjb,
                    medium: ljb,
                    vc: ijb
                });
                var njb = (a) => Y(RP, Object.assign({}, {
                        label: H("RHKCfg"),
                        za: mjb
                    }, vgb(a))),
                    ojb = s9((a) => {
                        const b = a.Bw.MM,
                            c = a.Bw.$va;
                        return Z8(Agb, {
                            Pq: njb,
                            store: a.Bw.yG,
                            No: a.Bw.aaa,
                            className: "_1kRGMg",
                            children: [Y(l$, {
                                onClick: () => b(),
                                children: H("h5S1zw")
                            }), c.enabled && Y(l$, {
                                onClick: c.Yx,
                                children: H("R6iRpg")
                            })]
                        })
                    });
                var pjb = "<svg viewBox=\"0 0 12 12\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2.94.44a.625.625 0 1 0 0 1.25h7c.207 0 .375.168.375.375v7a.625.625 0 1 0 1.25 0v-7c0-.897-.728-1.625-1.625-1.625h-7z\" fill=\"currentColor\"/><path d=\"M.44 3.565a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-7zm1.25 6.75v-6.5h6.5v6.5h-6.5z\" clip-rule=\"evenodd\" fill-rule=\"evenodd\" fill=\"currentColor\"/></svg>";
                var qjb = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"1.75\" y=\"4.75\" width=\"17.5\" height=\"17.5\" rx=\"1.25\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M4.75 1a.75.75 0 0 0 0 1.5H19.4c1.16 0 2.1.94 2.1 2.1v14.65a.75.75 0 0 0 1.5 0V4.2A3.2 3.2 0 0 0 19.8 1H4.75Z\" fill=\"currentColor\"/></svg>";
                var rjb = gw({
                    En: pjb,
                    medium: qjb
                });
                var sjb = ({
                    Vh: a,
                    active: b = !1,
                    fd: c,
                    onClick: d
                }) => Z8("div", {
                    className: "zZle9w",
                    children: [Y("span", {
                        className: $8("_8sSKEQ", {
                            gG8yRQ: 99 < a
                        }),
                        children: a
                    }), Y("div", {
                        className: "xNzJlA",
                        children: Y(RP, {
                            za: () => Y(rjb, {
                                className: "b_yNIQ",
                                size: "medium"
                            }),
                            label: H("/lE2mQ"),
                            active: b,
                            Lh: !0,
                            fd: c,
                            onClick: d
                        })
                    })]
                });
                f$((a) => Y(s$, Object.assign({}, {
                    Az: __c.k_,
                    Xz: "cB9-EQ"
                }, a)));
                var tjb = f$((a) => {
                        const b = $8("cB9-EQ", "_55Hvnw");
                        return Y(s$, Object.assign({}, {
                            Az: __c.l_,
                            Xz: b
                        }, a))
                    }),
                    s$ = class extends e$ {
                        constructor() {
                            super(...arguments);
                            this.K_ = (a) => {
                                this.Kr = a
                            };
                            this.onFocus = () => {
                                this.Kr && this.Kr.select()
                            };
                            this.onChange = (a) => {
                                const b = this.props.onChange;
                                b && b(a.currentTarget.value)
                            };
                            this.onKeyPress = (a) => {
                                "Enter" === a.key && this.props.onEnter && (a.preventDefault(), this.props.onEnter())
                            }
                        }
                        componentDidMount() {
                            wib(this, o9(() => this.Kr && this.props.iIa, (a) => {
                                this.Kr && a && this.Kr.select()
                            }, {
                                fireImmediately: !0
                            }))
                        }
                        render() {
                            const a =
                                this.props.KAa,
                                b = this.props.mOa,
                                c = this.props.nOa,
                                d = this.props.Az,
                                e = this.props.Xz,
                                f = this.props.title,
                                g = this.props.readOnly;
                            return Z8("div", {
                                className: "pZymHA",
                                children: [Y("input", {
                                    ref: this.K_,
                                    id: this.props.TF,
                                    "aria-label": this.props.ariaLabel,
                                    "aria-describedby": this.props.Pe,
                                    className: "Ov0w8A s-JGcg fFOiLQ",
                                    readOnly: !a && g,
                                    disabled: a,
                                    placeholder: this.props.placeholder,
                                    spellCheck: this.props.spellCheck,
                                    type: this.props.type,
                                    value: this.props.value,
                                    onBlur: this.props.onBlur,
                                    onChange: this.onChange,
                                    onKeyPress: this.onKeyPress,
                                    onFocus: this.onFocus
                                }), Y(d, {
                                    className: e,
                                    disabled: b,
                                    onClick: this.props.onClick,
                                    loading: c,
                                    children: f
                                })]
                            })
                        }
                    };
                _dmr(s$, "Kr");
                _dma(s$, "K_", void 0);
                s$ = b$([s9], s$);
                var vjb = s9((a) => {
                        const b = a.VC;
                        a = a.Ao;
                        const c = ME(),
                            d = l9(() => {
                                b.re()
                            }, [b]);
                        n9(() => () => b.qw(), [b]);
                        return Y(ujb, {
                            oq: b.oq,
                            open: b.pf,
                            Ao: a,
                            iBa: b.xua,
                            SA: c,
                            pk: d,
                            FEa: b.No,
                            i6: b.onCopy
                        })
                    }),
                    wjb = f$(({
                        oq: a,
                        i6: b,
                        kta: c,
                        yua: d
                    }) => {
                        const e = ME();
                        return Z8("div", {
                            className: "y9MgZg",
                            children: [Y(oib, {
                                htmlFor: e,
                                size: "small",
                                variant: "regular",
                                children: d
                            }), Y(tjb, {
                                TF: e,
                                readOnly: !0,
                                KAa: !1,
                                spellCheck: !1,
                                title: c,
                                value: a,
                                iIa: !0,
                                onClick: b
                            })]
                        })
                    }),
                    ujb = class extends e$ {
                        constructor() {
                            super(...arguments);
                            this.mra = () => {
                                var a = this.props.iBa;
                                const b = this.props.Ao ? H("D88teg") : H("6ikrhA");
                                a = a ? H("ZMvuWg") : H("QJYZQw");
                                return Y(wjb, {
                                    oq: this.props.oq,
                                    i6: this.props.i6,
                                    kta: a,
                                    yua: b
                                })
                            }
                        }
                        render() {
                            const a = this.props.SA,
                                b = this.props.open,
                                c = this.props.FEa;
                            return Y(__c.eP, {
                                id: a,
                                Bc: this.mra,
                                padding: "none",
                                placement: "top",
                                role: "menu",
                                ad: this.props.pk,
                                open: b,
                                gs: !0,
                                children: Y(RP, {
                                    label: H("LYInOg"),
                                    za: __c.gP,
                                    fd: a,
                                    ariaHasPopup: "menu",
                                    active: b,
                                    Lh: !0,
                                    onClick: c
                                })
                            })
                        }
                    };
                var t$ = (a) => {
                    switch (a.Cb) {
                        case "comfortable":
                            return Z8("div", {
                                className: $8("MvaaMw", "_2cFE7Q", {
                                    _1QljpA: null != a.qR
                                }),
                                children: [a.L4, a.qR, a.T8]
                            });
                        case "compact-spaced":
                            return Z8("div", {
                                className: $8("MvaaMw", "BcUVow", "_5YqDNg"),
                                children: [a.l8, Z8("div", {
                                    className: $8("MvaaMw", "huDT0A", "aJyF3A"),
                                    children: [a.L4, a.T8]
                                })]
                            });
                        case "compact-centered":
                            return Z8("div", {
                                className: $8("MvaaMw", "BcUVow", "_5YqDNg"),
                                children: [a.l8, Y("div", {
                                    className: $8("MvaaMw", "_5YqDNg", "huDT0A"),
                                    children: a.qR
                                })]
                            });
                        default:
                            throw new v(a);
                    }
                };
                var u$ = ({
                    children: a,
                    Cb: b
                }) => Y("div", {
                    className: $8("bfevPQ", "compact" === b ? "R4mBtg" : "EHNHww"),
                    children: a
                });
                var xjb = () => Y(__c.Oy, {
                        size: "medium"
                    }),
                    Z9 = class extends e$ {
                        constructor() {
                            super(...arguments);
                            this.w6 = () => {
                                const a = this.props.Jc,
                                    b = this.props.ua,
                                    c = this.props.fb;
                                this.props.Sk.R$();
                                a.enabled && a.active && a.exit();
                                c.pd({
                                    Wc: "grid_view",
                                    Ye: "player",
                                    xw: b.L
                                })
                            };
                            this.xEa = () => {
                                const a = this.props.fb,
                                    b = this.props.ua;
                                this.props.Jc.toggle();
                                a.pd({
                                    Wc: "fullscreen",
                                    Ye: "player",
                                    xw: b.L
                                })
                            }
                        }
                        render() {
                            const a = this.props.Gj,
                                b = this.props.Fj,
                                c = this.props.Nsa,
                                d = this.props.VC,
                                e = this.props.Bw,
                                f = this.props.Sk,
                                g = this.props.QA,
                                h = this.props.RZ,
                                k = this.props.cu,
                                l = this.props.lC,
                                m = this.props.aa,
                                n = this.props.ui,
                                q = this.props.Ao,
                                r = this.props.extension,
                                x = this.props.rc,
                                y = this.props.uu,
                                z = this.props.Jc,
                                B = this.props.WD,
                                F = this.props.Pv,
                                J = this.props.Cy,
                                N = this.props.zt,
                                K = this.props.s_,
                                L = this.props.JA,
                                O = this.props.ua.Ga,
                                U = z.enabled ? this.xEa : void 0,
                                da = 0 === a.volume,
                                Z = a.volume / 100,
                                X = 1 < O ? this.w6 : void 0,
                                ha = (la) => a.onVolumeChange(100 * la);
                            return Y(yib, {
                                children: () => Y(yjb, {
                                    Vh: O,
                                    Hsa: da,
                                    Fj: b.get(),
                                    Isa: Z,
                                    cu: k,
                                    lC: l,
                                    aa: m,
                                    ui: n,
                                    extension: r,
                                    rc: x,
                                    Lr: c.kb,
                                    jg: z.active,
                                    rBa: "large" ===
                                        y.N,
                                    Ao: q,
                                    oBa: "grid" === f.mode,
                                    VC: d,
                                    Bw: e,
                                    QA: g,
                                    RZ: h,
                                    WD: B,
                                    Pv: F,
                                    Cy: J,
                                    zt: N,
                                    oKa: c.toggle,
                                    qKa: U,
                                    w6: X,
                                    O6: a.O6,
                                    onVolumeChange: ha,
                                    s_: K,
                                    JA: L
                                })
                            })
                        }
                    };
                Z9 = b$([s9], Z9);
                var yjb = ({
                    Lr: a,
                    rBa: b,
                    jg: c,
                    oBa: d,
                    Hsa: e,
                    Fj: f,
                    Isa: g,
                    VC: h,
                    Bw: k,
                    QA: l,
                    RZ: m,
                    WD: n,
                    Pv: q,
                    Cy: r,
                    zt: x,
                    Ao: y,
                    Vh: z,
                    oKa: B,
                    qKa: F,
                    w6: J,
                    O6: N,
                    onVolumeChange: K,
                    cu: L,
                    lC: O,
                    aa: U,
                    extension: da,
                    rc: Z,
                    s_: X,
                    JA: ha
                }) => {
                    h = Y(vjb, {
                        VC: h,
                        aa: U,
                        Ao: y,
                        extension: da
                    });
                    var la;
                    Z && 5 <= Z && (la = Y(ojb, {
                        Bw: k
                    }));
                    var ma;
                    F && (ma = Y(c ? __c.XP : __c.WP, {
                        fd: O,
                        onClick: F
                    }));
                    c = X.isEnabled ? Y(hjb, {
                        href: location.origin,
                        onClick: X.YDa,
                        DB: X.DB
                    }) : void 0;
                    d = J ? Y(sjb, {
                        Vh: z,
                        active: d,
                        fd: L,
                        onClick: J
                    }) : void 0;
                    const Ha = e ? __c.ML : __c.LL,
                        na = e ? H("JbRXMg") : H("btMc3Q");
                    J = () =>
                        Y(RP, {
                            label: na,
                            onClick: N,
                            za: Ha
                        });
                    e = {
                        volume: g,
                        muted: e
                    };
                    K = {
                        onVolumeChange: K,
                        Mo: N
                    };
                    z = ha && 1 < z && Y(__c.yFa, {
                        playing: a,
                        onClick: B
                    });
                    a = l.pv() ? Y(__c.uFa, {
                        za: xjb,
                        label: H("oVS9oQ"),
                        onClick: l.pg
                    }) : null;
                    n = null != n ? Y(n, {}) : null;
                    if (b) return l = null != q ? Y(q, {
                        Cb: "comfortable"
                    }) : null, m = m.Zc || 1 === m.variant ? null : Y(__c.vFa, {
                        href: u(m.Iea),
                        target: "_blank",
                        label: u(m.Gea),
                        onClick: m.IG
                    }), la = Z8(u$, {
                        Cb: "comfortable",
                        children: [a, z, h, la, f && Y(__c.MQa, {
                            Az: J,
                            store: e,
                            controller: K,
                            Ufa: !0
                        }), m]
                    }), f = null != l ? Y(u$, {
                        Cb: "comfortable",
                        children: l
                    }) : null, ma = Z8(u$, {
                        Cb: "comfortable",
                        children: [x ? Y(x, {}) : null, n, d, ma, c]
                    }), Y(t$, {
                        Cb: "comfortable",
                        L4: la,
                        qR: f,
                        T8: ma
                    });
                    x = null != r && null != q ? Y(r.Sqa, {
                        g8: Y(q, {
                            Cb: "compact"
                        })
                    }) : null;
                    f = null != r ? Y(r.Az, {}) : null;
                    if (l.pv()) return l = Y(u$, {
                        Cb: "compact",
                        children: a
                    }), ma = Z8(u$, {
                        Cb: "compact",
                        children: [f, h, la, d, ma, n]
                    }), Y(t$, {
                        Cb: "compact-spaced",
                        L4: l,
                        T8: ma,
                        l8: x
                    });
                    ma = Z8(u$, {
                        Cb: "compact",
                        children: [f, h, la, d, ma, n]
                    });
                    return Y(t$, {
                        Cb: "compact-centered",
                        qR: ma,
                        l8: x
                    })
                };
                var zjb = E(() => ({}));
                var Ajb = __c.G(() => [1, "WHATSAPP", 2, "INSTAGRAM", 3, "AR_PREVIEW", 4, "ANIMATED_PHOTO", 5, "FACEBOOK_PROFILE", 6, "FILE", 7, "GOOGLE_PHOTOS", 8, "FACEBOOK_MESSENGER", 9, "GOOGLE_DRIVE", 10, "GMAIL", 11, "WHATSAPP_BUSINESS", 12, "LINE_MESSENGER", 13, "FACEBOOK_PAGES", 14, "TELEGRAM_MESSENGER", 15, "FACEBOOK_LITE", 16, "VIBER", 17, "SNAPCHAT", 18, "EMAIL", 19, "IMESSAGE", 20, "CLIPBOARD", 21, "ICLOUD_DRIVE", 22, "VIDEO", 23, "INSTAGRAM_POST", 24, "INSTAGRAM_STORY", 25, "QQ", 26, "WECHAT", 27, "WECHAT_MOMENTS", 28, "WEIBO", 29, "TIKTOK", 30, "DOUYIN", 31, "FACEBOOK_STORY"]);
                var Bjb = E(() => ({
                    hYa: __c.La("nativeEndpoints", 1, Ajb),
                    QYa: __c.Q("oauthAvailable", 2)
                }));
                var v$ = () => ({
                    YTa: __c.I("fileToken", 1),
                    aa: __c.M("documentId", 31),
                    rg: __c.Ka("schema", 32, __c.tj)
                });
                var Cjb = E(() => Object.assign({}, v$(), {
                    target: w("target", "SHARE_SHEET", 2, "SHARE_SHEET")
                }));
                var Djb = E(() => Object.assign({}, v$(), {
                    target: w("target", "INSTAGRAM", 3, "INSTAGRAM")
                }));
                var Ejb = E(() => Object.assign({}, v$(), {
                    target: w("target", "WHATSAPP", 4, "WHATSAPP")
                }));
                var Fjb = E(() => Object.assign({}, v$(), {
                    target: w("target", "AR_PREVIEW", 5, "AR_PREVIEW")
                }));
                var Gjb = E(() => Object.assign({}, v$(), {
                    target: w("target", "ANIMATED_PHOTO", 6, "ANIMATED_PHOTO")
                }));
                var Hjb = E(() => Object.assign({}, v$(), {
                    target: w("target", "FACEBOOK_PROFILE", 7, "FACEBOOK_PROFILE")
                }));
                var Ijb = E(() => Object.assign({}, v$(), {
                    target: w("target", "FILE", 8, "FILE")
                }));
                var Jjb = E(() => Object.assign({}, v$(), {
                    target: w("target", "GOOGLE_PHOTOS", 9, "GOOGLE_PHOTOS")
                }));
                var Kjb = E(() => Object.assign({}, v$(), {
                    target: w("target", "FACEBOOK_MESSENGER", 10, "FACEBOOK_MESSENGER")
                }));
                var Ljb = E(() => Object.assign({}, v$(), {
                    target: w("target", "GOOGLE_DRIVE", 11, "GOOGLE_DRIVE")
                }));
                var Mjb = E(() => Object.assign({}, v$(), {
                    target: w("target", "GMAIL", 12, "GMAIL")
                }));
                var Njb = E(() => Object.assign({}, v$(), {
                    target: w("target", "WHATSAPP_BUSINESS", 13, "WHATSAPP_BUSINESS")
                }));
                var Ojb = E(() => Object.assign({}, v$(), {
                    target: w("target", "LINE_MESSENGER", 14, "LINE_MESSENGER")
                }));
                var Pjb = E(() => Object.assign({}, v$(), {
                    target: w("target", "FACEBOOK_PAGES", 15, "FACEBOOK_PAGES")
                }));
                var Qjb = E(() => Object.assign({}, v$(), {
                    target: w("target", "TELEGRAM_MESSENGER", 16, "TELEGRAM_MESSENGER")
                }));
                var Rjb = E(() => Object.assign({}, v$(), {
                    target: w("target", "FACEBOOK_LITE", 17, "FACEBOOK_LITE")
                }));
                var Sjb = E(() => Object.assign({}, v$(), {
                    target: w("target", "VIBER", 18, "VIBER")
                }));
                var Tjb = E(() => Object.assign({}, v$(), {
                    target: w("target", "SNAPCHAT", 19, "SNAPCHAT")
                }));
                var Ujb = E(() => Object.assign({}, v$(), {
                    target: w("target", "EMAIL", 20, "EMAIL")
                }));
                var Vjb = E(() => Object.assign({}, v$(), {
                    target: w("target", "IMESSAGE", 21, "IMESSAGE")
                }));
                var Wjb = E(() => Object.assign({}, v$(), {
                    target: w("target", "CLIPBOARD", 22, "CLIPBOARD")
                }));
                var Xjb = E(() => Object.assign({}, v$(), {
                    target: w("target", "ICLOUD_DRIVE", 23, "ICLOUD_DRIVE")
                }));
                var Yjb = E(() => Object.assign({}, v$(), {
                    target: w("target", "VIDEO", 24, "VIDEO")
                }));
                var Zjb = E(() => Object.assign({}, v$(), {
                    target: w("target", "INSTAGRAM_POST", 25, "INSTAGRAM_POST")
                }));
                var $jb = E(() => Object.assign({}, v$(), {
                    target: w("target", "INSTAGRAM_STORY", 26, "INSTAGRAM_STORY")
                }));
                var akb = E(() => Object.assign({}, v$(), {
                    target: w("target", "QQ", 27, "QQ")
                }));
                var bkb = E(() => Object.assign({}, v$(), {
                    target: w("target", "WECHAT", 28, "WECHAT"),
                    uK: __c.C("documentExtensions", 36, __c.hh)
                }));
                var ckb = E(() => Object.assign({}, v$(), {
                    target: w("target", "WECHAT_MOMENTS", 29, "WECHAT_MOMENTS")
                }));
                var dkb = E(() => Object.assign({}, v$(), {
                    target: w("target", "WEIBO", 30, "WEIBO")
                }));
                var ekb = E(() => Object.assign({}, v$(), {
                    target: w("target", "TIKTOK", 33, "TIKTOK")
                }));
                var fkb = E(() => Object.assign({}, v$(), {
                    target: w("target", "DOUYIN", 34, "DOUYIN")
                }));
                var gkb = E(() => Object.assign({}, v$(), {
                    target: w("target", "FACEBOOK_STORY", 35, "FACEBOOK_STORY")
                }));
                var hkb = __c.Ra(() => ({
                    target: [2, Cjb, 3, Djb, 4, Ejb, 5, Fjb, 6, Gjb, 7, Hjb, 8, Ijb, 9, Jjb, 10, Kjb, 11, Ljb, 12, Mjb, 13, Njb, 14, Ojb, 15, Pjb, 16, Qjb, 17, Rjb, 18, Sjb, 19, Tjb, 20, Ujb, 21, Vjb, 22, Wjb, 23, Xjb, 24, Yjb, 25, Zjb, 26, $jb, 27, akb, 28, bkb, 29, ckb, 30, dkb, 33, ekb, 34, fkb, 35, gkb]
                }), v$);
                var ikb = E(() => Object.assign({}, {}, {
                    type: w("type", "RESULT", 1, "RESULT")
                }));
                var jkb = __c.G(() => [2, "PERMISSIONS_DENIED", 1, "UNKNOWN_PUBLISH_ERROR"]);
                var kkb = E(() => Object.assign({}, {}, {
                    type: w("type", "ERROR", 2, "ERROR"),
                    code: __c.Ja("code", 1, jkb),
                    message: __c.I("message", 2)
                }));
                var lkb = E(() => Object.assign({}, {}, {
                    type: w("type", "DRAFT", 3, "DRAFT")
                }));
                var mkb = __c.Ra(() => ({
                    type: [1, ikb, 2, kkb, 3, lkb]
                }), () => ({}));
                var nkb = E(() => ({
                    error: __c.M(1)
                }));
                var iib = class {
                    constructor(a, b) {
                        this.Sa = a;
                        this.G = b;
                        this.yC = null != this.G.yC ? (c) => {
                            const d = u(this.G.yC, "Expected 'publishUrl' to have been specified in capabilities");
                            return this.Sa.exec(this.G.H, d, __c.$Y.O(c)).then(nkb.P)
                        } : void 0
                    }
                    L2(a) {
                        return this.Sa.exec(this.G.H, this.G.L2, zjb.O(a)).then(Bjb.P)
                    }
                    publish(a) {
                        return this.Sa.exec(this.G.H, this.G.publish, hkb.O(a)).then(mkb.P)
                    }
                };
                var $9 = class {
                    constructor(a) {
                        this.fc = a
                    }
                    Sga() {
                        this.fc.YA({
                            path: Y8()
                        }, void 0)
                    }
                };
                var jib = class extends $9 {
                    async TU(a, b) {
                        await this.fc.qs({
                            path: Y8(a.o8)
                        }, b)
                    }
                    Tga(a, b) {
                        return this.fc.YA({
                            path: Y8(a.o8)
                        }, b)
                    }
                };
                __c.dba = {
                    UAa: async function({
                        zp: a,
                        gi: b,
                        kf: c,
                        Kaa: d,
                        B: e,
                        GD: f,
                        nh: g,
                        Rt: h,
                        Bk: k
                    }) {
                        const l = d.I1,
                            m = d.document,
                            n = d.UN,
                            q = d.JA,
                            r = d.DB,
                            x = d.yu,
                            y = d.TZ,
                            z = d.MO,
                            B = d.F1,
                            F = m.aa,
                            J = m.extensions,
                            N = m.Vj,
                            K = m.zb,
                            L = m.rc,
                            O = m.ya,
                            U = m.lastModifiedDate,
                            da = m.lp;
                        window.__testHooks && (window.__testHooks.getDocumentContent = () => {
                            const rc = __c.gh.O(O);
                            return JSON.stringify(rc)
                        });
                        const {
                            ea: Z,
                            Qb: X,
                            J: ha,
                            gf: la,
                            Vc: ma,
                            Qh: Ha,
                            oc: na,
                            $E: Da,
                            ac: Va,
                            pG: lb,
                            xd: jb,
                            gh: mb,
                            Go: qb,
                            Sc: nb,
                            Lv: $a,
                            Vl: db,
                            Jc: fb,
                            vy: eb,
                            Fi: pb
                        } = await lib({
                            aa: F,
                            j1: O.Ha.length,
                            ui: O.title,
                            extensions: J,
                            kf: c,
                            B: e,
                            Zc: f.Zc,
                            Bk: k
                        }), ob = __c.VQ();
                        null === db || void 0 === db ? void 0 : db.bP();
                        __c.EV({
                            gi: b,
                            nz: c.Lk,
                            gf: la,
                            Vc: ma,
                            B: e,
                            J: ha,
                            Qh: Ha,
                            oc: na
                        });
                        ha.page();
                        b = __c.rW.create({
                            J: ha,
                            Rm: eb ? () => eb.Rm({}) : void 0
                        });
                        b.start("design_viewer_viewer");
                        if (0 === O.Ha.length) {
                            const rc = () => Y(__c.uPa, {});
                            m9(() => a.set(rc));
                            mib(X, b)
                        } else {
                            var {
                                ya: rb,
                                cc: gb,
                                Qk: Oa,
                                Gh: Pa,
                                Kf: oc,
                                cd: wb
                            } = __c.JV({
                                ea: Z,
                                document: m,
                                B: e,
                                ac: Va,
                                rc: L,
                                gh: mb,
                                OA: !0,
                                F1: B
                            });
                            h = nib(h);
                            var {
                                fb: Tb,
                                ua: gc,
                                Fra: rd
                            } = await eib({
                                P9: window.document.body,
                                zc: c.zc,
                                Qb: X,
                                B: e,
                                J: ha,
                                pG: lb,
                                xd: jb,
                                Sc: nb,
                                Lv: $a,
                                Vl: db,
                                Jc: fb,
                                Fi: pb,
                                aa: F,
                                Vj: N,
                                ya: rb,
                                rc: L,
                                extensions: J,
                                Kk: ob,
                                lastModifiedDate: U,
                                lp: da,
                                cc: gb,
                                UN: n,
                                Gh: Pa,
                                Qk: Oa,
                                TZ: y || 3,
                                DB: r,
                                JA: q,
                                ura: oc,
                                cd: wb,
                                zb: K,
                                GD: f,
                                eHa: h,
                                $C: qb && x ? {
                                    enabled: !0,
                                    yu: x,
                                    Go: qb
                                } : {
                                    enabled: !1
                                },
                                MO: z || 1,
                                nh: g,
                                I1: l,
                                HK: d.HK
                            });
                            m9(() => a.set(rd));
                            __c.WV({
                                store: gc
                            });
                            __c.TV(F, gc, Tb);
                            Tb.nI({
                                VR: rb.Ha.count(),
                                IL: f.Zc ? 6 === L : void 0,
                                mK: K.id
                            });
                            d.Kwa && __webpack_require__.me(95011).then(() => __c.okb).then(({
                                TAa: rc
                            }) => {
                                rc({
                                    aa: F,
                                    Kk: ob,
                                    ea: Z,
                                    $E: Da
                                })
                            });
                            mib(X, b);
                            __c.KR(b)
                        }
                    }
                };
            }).call(self, self._cdf17aa01cb7a37fe84ed76fc113a158);
        }

    }
])
//# sourceMappingURL=sourcemaps/48226df24b397080.js.map