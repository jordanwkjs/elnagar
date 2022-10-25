(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [8751], {

        /***/
        37813: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(2868);
            __web_req__(61368);
            __web_req__(39673);
            __web_req__(9344);
            __web_req__(82247);
            self._cdf17aa01cb7a37fe84ed76fc113a158 = self._cdf17aa01cb7a37fe84ed76fc113a158 || {};
            (function(__c) {
                "use strict";
                var Gd = __c.Gd,
                    H = __c.H;
                var xkb = function(a) {
                        return a.matches("button:enabled,select:enabled,textarea:enabled,input:enabled,a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable],[autofocus]") && !a.hasAttribute("data-focus-guard")
                    },
                    ykb = function(a) {
                        if (null == a) return null;
                        let b = a.nextElementSibling;
                        for (; b;) {
                            if (xkb(b)) return b;
                            const c = b.querySelector("button:enabled,select:enabled,textarea:enabled,input:enabled,a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable],[autofocus]");
                            if (c) return c;
                            b = b.nextElementSibling
                        }
                        return ykb(a.parentElement)
                    },
                    w$ = function(a) {
                        if (null == a) return null;
                        let b = a.previousElementSibling;
                        for (; b;) {
                            if (xkb(b)) return b;
                            var c = b.querySelectorAll("button:enabled,select:enabled,textarea:enabled,input:enabled,a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable],[autofocus]");
                            if (c = 0 < c.length ? c.item(c.length - 1) : null) return c;
                            b = b.previousElementSibling
                        }
                        return w$(a.parentElement)
                    },
                    zkb = function() {
                        function a() {
                            var e;
                            d.current && (null === (e = ykb(d.current)) || void 0 === e ? void 0 : e.focus())
                        }

                        function b() {
                            var e;
                            c.current && (null === (e = w$(c.current)) || void 0 === e ? void 0 : e.focus())
                        }
                        const c = x$(),
                            d = x$();
                        return {
                            kca: () => y$("div", Object.assign({}, {
                                tabIndex: 0,
                                ref: c,
                                onFocus: a
                            }, {
                                "data-focus-guard": !0
                            })),
                            wba: () => y$("div", Object.assign({}, {
                                tabIndex: 0,
                                ref: d,
                                onFocus: b
                            }, {
                                "data-focus-guard": !0
                            })),
                            tJa: c,
                            nTa: d
                        }
                    },
                    Bkb = function() {
                        const a = zkb(),
                            b = zkb();
                        let c = !1;
                        return {
                            Uqa: () => z$(A$, {
                                children: [y$(a.kca, {}), y$(b.wba, {})]
                            }),
                            Lra: (d) => {
                                ({
                                        children: d
                                    } =
                                    d);
                                const e = B$(null),
                                    f = C$(() => {
                                        setTimeout(() => {
                                            var g, h;
                                            c = null !== (h = null === (g = e.current) || void 0 === g ? void 0 : g.contains(document.activeElement)) && void 0 !== h ? h : !1
                                        }, 0)
                                    }, []);
                                Akb(() => {
                                    const g = w$(a.tJa.current);
                                    return () => {
                                        c && (null === g || void 0 === g ? void 0 : g.focus())
                                    }
                                }, []);
                                return z$("div", {
                                    ref: e,
                                    onFocus: f,
                                    onBlur: f,
                                    children: [y$(a.wba, {}), d, y$(b.kca, {})]
                                })
                            }
                        }
                    },
                    Ckb = function(a) {
                        var b = a.children;
                        const c = B$();
                        null == c.current && (c.current = Bkb());
                        return b.call(a, c.current)
                    },
                    Dkb = function(a, b) {
                        const {
                            top: c,
                            left: d,
                            right: e,
                            bottom: f
                        } = b || {};
                        if (a.startsWith("bottom") && c && 0 < c) return {
                            pJ: {
                                marginTop: c
                            },
                            PJ: {
                                marginTop: c
                            }
                        };
                        if (a.startsWith("top") && f && 0 < f) return {
                            pJ: {
                                marginTop: f
                            },
                            PJ: {
                                marginBottom: f
                            }
                        };
                        b = 2 === Gd.direction;
                        return a.startsWith("left") && e && 0 < e ? {
                            pJ: {
                                marginTop: 2 * e
                            },
                            PJ: b ? {
                                marginLeft: e
                            } : {
                                marginRight: e
                            }
                        } : a.startsWith("right") && d && 0 < d ? {
                            pJ: {
                                marginTop: 2 * d
                            },
                            PJ: b ? {
                                marginRight: d
                            } : {
                                marginLeft: d
                            }
                        } : {
                            pJ: {},
                            PJ: {}
                        }
                    },
                    Ekb = function(a) {
                        return y$(D$, Object.assign({}, {
                            content: H("gk/BMg"),
                            placement: "top",
                            title: H("/rdpRw")
                        }, a))
                    },
                    F$ = function(a) {
                        var {
                            xl: b,
                            UD: c
                        } = a;
                        return {
                            Ui: E$(function(d) {
                                return y$(c, Object.assign({}, {
                                    className: "U7joaw",
                                    ariaLabel: b
                                }, d))
                            }),
                            label: b
                        }
                    },
                    G$ = function(a, b) {
                        const c = B$([]);
                        Akb(() => {
                            b && Gd.ma && (0 === c.current.length || c.current.every((d) => "finished" === d.playState)) && (c.current = a(), Promise.allSettled(c.current.map((d) => d.finished)).finally(() => {
                                c.current = []
                            }))
                        }, [a, b, () => {}])
                    },
                    Fkb = function({
                        ariaLabel: a,
                        className: b,
                        animate: c
                    }) {
                        const d = B$(null),
                            e = B$(null),
                            f = B$(null);
                        G$(() => {
                            const g = [];
                            d.current && e.current && f.current && (
                                g.push(d.current.animate([{
                                    offset: 0,
                                    transform: "rotate(0deg) translateX(0%)"
                                }, {
                                    offset: .18,
                                    transform: "rotate(2deg) translateX(8.3%)"
                                }, {
                                    offset: .58,
                                    transform: "rotate(0deg) translateX(0%)"
                                }, {
                                    offset: .7,
                                    transform: "rotate(1deg) translateX(4.1%)"
                                }, {
                                    offset: .83,
                                    transform: "rotate(0deg) translateX(0%)"
                                }, {
                                    offset: 1,
                                    transform: "rotate(0deg) translateX(0%)"
                                }], {
                                    duration: 600,
                                    delay: 0,
                                    easing: "ease-out"
                                })), g.push(e.current.animate([{
                                        offset: 0,
                                        transform: "rotate(0deg) translateX(0%)"
                                    }, {
                                        offset: .18,
                                        transform: "rotate(-2deg) translateX(-8.3%)"
                                    },
                                    {
                                        offset: .58,
                                        transform: "rotate(0deg) translateX(0%)"
                                    }, {
                                        offset: .7,
                                        transform: "rotate(-1deg) translateX(-4.1%)"
                                    }, {
                                        offset: .83,
                                        transform: "rotate(0deg) translateX(0%)"
                                    }, {
                                        offset: 1,
                                        transform: "rotate(0deg) translateX(0%)"
                                    }
                                ], {
                                    duration: 600,
                                    delay: 0,
                                    easing: "ease-out"
                                })), g.push(f.current.animate([{
                                    offset: 0,
                                    transform: "scale(1)",
                                    opacity: 1
                                }, {
                                    offset: .1,
                                    transform: "scale(0)",
                                    opacity: 0
                                }, {
                                    offset: .4,
                                    transform: "scale(0)",
                                    opacity: 0
                                }, {
                                    offset: .63,
                                    transform: "scale(1.2)",
                                    opacity: 1
                                }, {
                                    offset: .9,
                                    transform: "scale(1)",
                                    opacity: 1
                                }, {
                                    offset: 1,
                                    transform: "scale(1)",
                                    opacity: 1
                                }], {
                                    duration: 600,
                                    easing: "ease-out"
                                })));
                            return g
                        }, c);
                        return z$("svg", {
                            viewBox: "0 0 24 24",
                            className: b,
                            "aria-label": a,
                            children: [y$("path", {
                                ref: e,
                                className: "RboMwQ",
                                d: "M21.5347 16.2313C21.0713 15.558 21.33 14.5847 21.2147 13.51C21.096 11.7567 20.3427 10.058 18.8813 8.69935L13.904 4.07135C13.904 4.07135 12.9233 3.15868 12.01 4.14002C11.098 5.12068 12.0793 6.03335 12.0793 6.03335L14.182 7.98935L16.0047 9.68402C16.0047 9.68402 15.548 10.1747 13.5307 8.29868L6.71734 1.96135C6.71734 1.96135 5.73534 1.04935 4.82268 2.03068C3.91068 3.01135 4.89134 3.92402 4.89134 3.92402L11.334 9.91668C11.32 9.90335 10.8467 10.378 10.838 10.37L3.94468 3.95868C3.94468 3.95868 2.96334 3.04602 2.05068 4.02735C1.13801 5.00868 2.11934 5.92068 2.11934 5.92068L9.01334 12.3334C9.02134 12.3414 8.57734 12.8427 8.59068 12.8554L2.64401 7.32335C2.64401 7.32335 1.66268 6.41068 0.750009 7.39202C-0.162657 8.37335 0.818676 9.28602 0.818676 9.28602L7.14134 15.166C7.19934 15.22 6.80801 15.7713 6.88068 15.8387L2.32468 11.6014C2.32468 11.6014 1.34334 10.6887 0.430676 11.6707C-0.481991 12.652 0.499343 13.5647 0.499343 13.5647L7.93068 20.4733C9.17134 21.6273 10.4453 22.2113 11.9813 22.4254C12.294 22.4687 12.694 22.4687 12.858 22.4894C13.376 22.5547 13.8307 22.7387 14.4393 23.112C15.2227 23.592 16.398 23.792 17.0733 23.07L19.376 20.6067L21.502 18.332C22.1767 17.6107 22.056 16.988 21.5347 16.2313Z",
                                fill: "#EF9645"
                            }), y$("path", {
                                ref: f,
                                className: "_8B9gGQ",
                                d: "M1.304 23.3507C1.13334 23.3507 0.962669 23.2853 0.832669 23.1553C0.572003 22.8947 0.572003 22.4733 0.832669 22.2127L3.2 19.8467C3.46067 19.586 3.882 19.586 4.14267 19.8467C4.40334 20.1073 4.40334 20.5287 4.14267 20.7893L1.77534 23.156C1.64534 23.286 1.47467 23.3507 1.304 23.3507ZM5.80134 23.9653C5.72867 23.9653 5.654 23.9533 5.58067 23.928C5.23334 23.8067 5.05 23.4267 5.172 23.0787L5.81934 21.23C5.94067 20.8827 6.32134 20.7 6.66867 20.8207C7.016 20.9427 7.19934 21.3227 7.07734 21.67L6.43 23.5187C6.334 23.7933 6.07667 23.9653 5.80134 23.9653ZM0.690003 18.854C0.415336 18.854 0.158003 18.6827 0.0613362 18.4093C-0.0613304 18.062 0.12067 17.6813 0.468003 17.5587L2.13134 16.9713C2.48 16.8513 2.85934 17.032 2.982 17.378C3.10467 17.7253 2.92267 18.106 2.57534 18.2287L0.912003 18.816C0.838003 18.842 0.763336 18.854 0.690003 18.854ZM20.33 4.34267C20.1593 4.34267 19.9887 4.27733 19.8587 4.14733C19.598 3.88667 19.598 3.46467 19.8587 3.204L22.2267 0.837334C22.4873 0.577334 22.9087 0.577334 23.1693 0.837334C23.43 1.09733 23.43 1.52 23.1693 1.78067L20.8013 4.14733C20.6713 4.278 20.5007 4.34267 20.33 4.34267ZM17.554 3.21133C17.4813 3.21133 17.4067 3.19867 17.334 3.17333C16.9867 3.052 16.8033 2.672 16.9247 2.324L17.5713 0.475334C17.6933 0.128 18.0727 -0.0553331 18.4207 0.0660003C18.768 0.187334 18.9513 0.567334 18.83 0.915334L18.1833 2.764C18.0873 3.03933 17.8293 3.21133 17.554 3.21133ZM21.6493 7.06067C21.3747 7.06067 21.1173 6.88933 21.0207 6.616C20.898 6.26867 21.0807 5.888 21.4273 5.76533L23.09 5.178C23.438 5.05467 23.818 5.238 23.9407 5.58467C24.0633 5.932 23.8807 6.31267 23.534 6.43533L21.8713 7.02267C21.7973 7.04867 21.7227 7.06067 21.6493 7.06067Z",
                                fill: "#FA743E"
                            }), y$("path", {
                                ref: d,
                                className: "_0zQ9hw",
                                d: "M23.5933 15.8813C23.1527 15.1933 23.444 14.2287 23.3653 13.1507C23.3053 11.3947 22.61 9.67134 21.1953 8.264L16.3767 3.47134C16.3767 3.47134 15.4273 2.52667 14.4813 3.47667C13.5367 4.426 14.4867 5.37134 14.4867 5.37134L16.5227 7.39734L18.2867 9.152C18.2867 9.152 17.8133 9.62667 15.8607 7.684C13.9067 5.74067 9.26465 1.12067 9.26465 1.12067C9.26465 1.12067 8.31465 0.176002 7.36932 1.126C6.42399 2.07534 7.37399 3.02 7.37399 3.02L13.6113 9.22667C13.598 9.21334 13.1087 9.67134 13.1 9.66267L6.42665 3.02267C6.42665 3.02267 5.47665 2.07734 4.53132 3.02734C3.58665 3.97734 4.53599 4.922 4.53599 4.922L11.21 11.5633C11.218 11.5713 10.7567 12.0573 10.77 12.0707L5.01332 6.342C5.01332 6.342 4.06332 5.39734 3.11799 6.34734C2.17265 7.29734 3.12265 8.24267 3.12265 8.24267L9.24332 14.3327C9.29932 14.388 8.88999 14.9267 8.95999 14.9967L4.54932 10.608C4.54932 10.608 3.59932 9.66334 2.65399 10.6133C1.70865 11.5633 2.65865 12.5087 2.65865 12.5087L9.85199 19.6633C11.0533 20.8587 12.3067 21.4847 13.8347 21.7507C14.146 21.8047 14.546 21.818 14.7087 21.844C15.224 21.9267 15.672 22.126 16.2687 22.52C17.0353 23.026 18.2033 23.2653 18.9027 22.5667L21.2873 20.1827L23.4887 17.9813C24.188 17.2813 24.0887 16.6547 23.5933 15.8813Z",
                                fill: "#FFDB5E"
                            })]
                        })
                    },
                    Gkb = function({
                        ariaLabel: a,
                        className: b,
                        animate: c
                    }) {
                        const d = B$(null),
                            e = B$(null),
                            f = B$(null);
                        G$(() => {
                            const g = [];
                            d.current && e.current && f.current && (g.push(d.current.animate([{
                                offset: 0,
                                transform: "scale(1) translate(0px, 0px)"
                            }, {
                                offset: .25,
                                transform: "scale(0.9) translate(0px, 2px)"
                            }, {
                                offset: .5,
                                transform: "scale(1) translate(1px, -1px)"
                            }, {
                                offset: .75,
                                transform: "scale(0.9) translate(2px, 2px)"
                            }, {
                                offset: 1,
                                transform: "scale(1) translate(0px, 0px)"
                            }], {
                                duration: 1400,
                                easing: "ease-out"
                            })), g.push(e.current.animate([{
                                offset: 0,
                                transform: "scale(1) translateY(0px)"
                            }, {
                                offset: .5,
                                transform: "scale(0) translateY(10px)"
                            }, {
                                offset: .7,
                                transform: "scale(0) translateY(10px)"
                            }, {
                                offset: .9,
                                transform: "scale(1) translateY(0px)"
                            }, {
                                offset: 1,
                                transform: "scale(1) translateY(0px)"
                            }], {
                                duration: 1400
                            })), g.push(f.current.animate([{
                                offset: 0,
                                transform: "scale(1) translateY(0px)"
                            }, {
                                offset: .5,
                                transform: "scale(1) translateY(0px)"
                            }, {
                                offset: .7,
                                transform: "scale(0) translateY(10px)"
                            }, {
                                offset: .9,
                                transform: "scale(1) translateY(0px)"
                            }, {
                                offset: 1,
                                transform: "scale(1) translateY(0px)"
                            }], {
                                duration: 1400
                            })));
                            return g
                        }, c);
                        c = __c.ME();
                        return z$("svg", {
                            viewBox: "0 0 24 24",
                            className: b,
                            "aria-label": a,
                            children: [y$("path", {
                                d: "M24 12C24 18.6275 18.6275 24 12 24C5.37318 24 0 18.6275 0 12C0 5.37318 5.37318 -9.53674e-07 12 -9.53674e-07C18.6275 -9.53674e-07 24 5.37318 24 12Z",
                                fill: `url(#${c})`
                            }), z$("g", {
                                ref: d,
                                children: [y$("path", {
                                    d: "M19.3812 11.8565C19.3396 11.7612 18.3231 9.52919 16.2351 9.52919C14.1478 9.52919 13.1314 11.7612 13.089 11.8565C13.0241 12.0026 13.0664 12.1734 13.1906 12.2737C13.3142 12.3739 13.4914 12.3774 13.6219 12.2835C13.6304 12.2772 14.5128 11.6468 16.2351 11.6468C17.9476 11.6468 18.8285 12.2687 18.8483 12.2828C18.9104 12.3294 18.9852 12.3527 19.0586 12.3527C19.1363 12.3527 19.2146 12.3266 19.2789 12.2758C19.4038 12.1755 19.4469 12.0033 19.3812 11.8565Z",
                                    fill: "#664500"
                                }), y$("path", {
                                    d: "M10.9107 11.8565C10.8683 11.7612 9.85254 9.52919 7.76454 9.52919C5.67724 9.52919 4.66077 11.7612 4.61842 11.8565C4.55348 12.0026 4.59583 12.1734 4.72007 12.2737C4.8443 12.3739 5.02148 12.3774 5.15066 12.2835C5.15983 12.2772 6.04148 11.6468 7.76454 11.6468C9.47701 11.6468 10.358 12.2687 10.3777 12.2828C10.4398 12.3294 10.5147 12.3527 10.5881 12.3527C10.6657 12.3527 10.7441 12.3266 10.8083 12.2758C10.934 12.1755 10.9756 12.0033 10.9107 11.8565Z",
                                    fill: "#664500"
                                }), y$("path", {
                                    d: "M21.1766 10.5886C20.8971 10.5886 20.6317 10.4206 20.5209 10.1446C19.2658 7.00698 16.1288 6.34627 16.0971 6.33921C15.7152 6.26298 15.4667 5.89098 15.5437 5.50909C15.6199 5.12651 15.9912 4.88015 16.3738 4.95568C16.5333 4.98674 20.2957 5.78015 21.8324 9.62015C21.9771 9.98227 21.8006 10.3931 21.4385 10.5378C21.3531 10.5724 21.2641 10.5886 21.1766 10.5886Z",
                                    fill: "#664500"
                                }), y$("path", {
                                    d: "M2.82301 10.5886C2.73548 10.5886 2.64724 10.5724 2.56113 10.5378C2.19901 10.3931 2.02324 9.98227 2.16795 9.62015C3.70395 5.78015 7.46701 4.98674 7.62583 4.95568C8.00983 4.88015 8.38042 5.12651 8.45665 5.50909C8.53289 5.89027 8.28583 6.26156 7.90536 6.33921C7.77477 6.36604 4.72395 7.03098 3.47877 10.1446C3.36795 10.4206 3.10324 10.5879 2.82301 10.5886Z",
                                    fill: "#664500"
                                }), y$("path", {
                                    d: "M11.9999 14.8236C9.44246 14.8236 7.74552 14.5257 5.64693 14.1177C5.16764 14.0253 4.23517 14.1177 4.23517 15.5295C4.23517 18.353 7.4787 21.8824 11.9999 21.8824C16.5203 21.8824 19.7646 18.353 19.7646 15.5295C19.7646 14.1177 18.8321 14.0246 18.3528 14.1177C16.2542 14.5257 14.5573 14.8236 11.9999 14.8236Z",
                                    fill: "#664500"
                                }), y$("path", {
                                    d: "M5.64697 15.5294C5.64697 15.5294 7.76462 16.2353 11.9999 16.2353C16.2352 16.2353 18.3529 15.5294 18.3529 15.5294C18.3529 15.5294 16.9411 18.3529 11.9999 18.3529C7.05874 18.3529 5.64697 15.5294 5.64697 15.5294Z",
                                    fill: "white"
                                }), y$("path", {
                                    ref: e,
                                    d: "M6.95091 19.2208C6.47091 21.1105 4.55091 22.2526 2.66127 21.7726C0.772325 21.294 -0.370498 19.3733 0.109502 17.4837C0.588796 15.594 4.58268 11.3368 5.26738 11.5105C5.95068 11.6841 7.43021 17.3312 6.95091 19.2208Z",
                                    fill: "#5DADEC",
                                    className: "F2yPtQ"
                                }), y$("path", {
                                    ref: f,
                                    d: "M17.035 19.2208C17.515 21.1105 19.435 22.2526 21.3247 21.7726C23.2143 21.294 24.3571 19.3733 23.8771 17.4837C23.3978 15.594 19.4033 11.3368 18.7193 11.5105C18.0353 11.6841 16.5557 17.3312 17.035 19.2208Z",
                                    fill: "#5DADEC",
                                    className: "ssNaFg"
                                })]
                            }), y$("defs", {
                                children: z$("linearGradient", {
                                    id: c,
                                    x1: "12",
                                    y1: "24",
                                    x2: "12",
                                    y2: "-9.53674e-07",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [y$("stop", {
                                        stopColor: "#FFCC4D"
                                    }), y$("stop", {
                                        offset: "1",
                                        stopColor: "#FFDF8E"
                                    })]
                                })
                            })]
                        })
                    },
                    Hkb = function({
                        ariaLabel: a,
                        className: b,
                        animate: c
                    }) {
                        const d = B$(null),
                            e = B$(null),
                            f = B$(null);
                        G$(() => {
                            const g = [];
                            if (d.current && e.current && f.current) {
                                const h = [{
                                        offset: 0,
                                        easing: "ease",
                                        opacity: 0,
                                        transform: "scale(0)"
                                    }, {
                                        offset: .5,
                                        easing: "ease",
                                        opacity: 1,
                                        transform: "scale(1)"
                                    },
                                    {
                                        offset: 1,
                                        easing: "ease",
                                        opacity: 0,
                                        transform: "scale(0)"
                                    }
                                ];
                                g.push(d.current.animate(h, {
                                    duration: 700,
                                    delay: 0
                                }));
                                g.push(e.current.animate(h, {
                                    duration: 700,
                                    delay: 700
                                }));
                                g.push(f.current.animate(h, {
                                    duration: 700,
                                    delay: 1005
                                }))
                            }
                            return g
                        }, c);
                        return z$("svg", {
                            viewBox: "0 0 24 24",
                            className: b,
                            "aria-label": a,
                            children: [y$("path", {
                                d: "M23.9,7.9c0-3.6-2.9-6.6-6.6-6.6c-2.2,0-4.2,1.1-5.3,2.8c-1.2-1.7-3.1-2.8-5.3-2.8C3,1.3,0.1,4.3,0.1,7.9\n      c0,0.5,0.1,1,0.2,1.5C1.2,15.1,7.5,21,12,22.7c4.5-1.6,10.8-7.6,11.7-13.3C23.9,8.9,23.9,8.4,23.9,7.9z",
                                fill: "#dd2e44"
                            }), y$("path", {
                                ref: d,
                                className: "PgGTHw",
                                d: "M20.3,16.6c0.6,0.2,1.1,0.4,1.7,0.6c0.3,0.1,0.4,0.3,0.5,0.5c0.1,0.3-0.1,0.6-0.5,0.7\n      c-0.7,0.3-1.5,0.6-2.2,0.8c-0.2,0.1-0.2,0.1-0.3,0.3c-0.3,0.7-0.5,1.5-0.8,2.2c-0.1,0.4-0.3,0.5-0.6,0.5c-0.3,0-0.5-0.2-0.6-0.5\n      c-0.2-0.5-0.3-0.9-0.5-1.4c-0.3-1-0.3-1-1.3-1.4c-0.5-0.2-1-0.4-1.5-0.5c-0.3-0.1-0.5-0.3-0.5-0.6c0-0.3,0.2-0.5,0.5-0.6\n      c0.7-0.3,1.5-0.6,2.2-0.8c0.1-0.1,0.2-0.1,0.3-0.3c0.3-0.7,0.5-1.5,0.8-2.2c0.1-0.3,0.3-0.5,0.6-0.5c0.3,0,0.5,0.2,0.6,0.5\n      c0.3,0.7,0.5,1.4,0.8,2.1c0.1,0.2,0.2,0.3,0.4,0.4C20,16.5,20.1,16.6,20.3,16.6z",
                                fill: "#fcca58"
                            }), y$("path", {
                                ref: e,
                                className: "ECHGyA",
                                d: "M7.1,10.1c0,0.2-0.1,0.4-0.4,0.5C6.3,10.7,6,10.9,5.6,11c-0.1,0-0.2,0.1-0.3,0.3c-0.1,0.4-0.3,0.7-0.4,1.1\n      c-0.1,0.3-0.3,0.5-0.6,0.4c-0.2,0-0.4-0.2-0.5-0.4c-0.1-0.4-0.3-0.7-0.4-1.1c0-0.1-0.1-0.2-0.2-0.2c-0.4-0.1-0.7-0.3-1.1-0.4\n      c-0.3-0.1-0.4-0.3-0.4-0.5c0-0.3,0.1-0.4,0.4-0.6c0.4-0.1,0.8-0.3,1.1-0.4C3.3,9,3.4,9,3.4,8.9c0.1-0.4,0.3-0.7,0.4-1.1\n      c0.1-0.3,0.3-0.4,0.5-0.4c0.2,0,0.4,0.1,0.5,0.4c0.1,0.4,0.3,0.7,0.4,1.1C5.4,9,5.5,9,5.6,9.1C6,9.2,6.3,9.4,6.7,9.5\n      C7,9.6,7.1,9.8,7.1,10.1z",
                                fill: "#fcca58"
                            }), y$("path", {
                                ref: f,
                                className: "UYeOvQ",
                                d: "M19,2.7c0,0.2-0.1,0.4-0.3,0.4c-0.3,0.1-0.6,0.2-0.9,0.3c-0.1,0-0.2,0.1-0.2,0.2c-0.1,0.3-0.2,0.6-0.3,0.9\n      c-0.1,0.2-0.3,0.4-0.5,0.4c-0.2,0-0.4-0.1-0.5-0.4C16.1,4.3,16,4,15.9,3.6c0-0.1-0.1-0.2-0.2-0.2c-0.3-0.1-0.6-0.2-0.9-0.3\n      c-0.2-0.1-0.3-0.2-0.3-0.4c0-0.2,0.1-0.4,0.3-0.5c0.3-0.1,0.6-0.2,0.9-0.4c0.1,0,0.2-0.1,0.2-0.2C16,1.4,16.1,1,16.3,0.7\n      c0.1-0.2,0.2-0.3,0.5-0.3c0.2,0,0.4,0.1,0.5,0.3c0.1,0.3,0.2,0.6,0.3,0.9c0,0.1,0.1,0.2,0.2,0.2C18,2,18.3,2.1,18.7,2.2\n      C18.9,2.3,19,2.5,19,2.7z",
                                fill: "#fcca58"
                            })]
                        })
                    },
                    Ikb = function({
                        ariaLabel: a,
                        className: b,
                        animate: c
                    }) {
                        const d = B$(null),
                            e = B$(null),
                            f = B$(null);
                        G$(() => {
                            const g = [];
                            d.current && e.current && f.current && (g.push(e.current.animate([{
                                offset: 0,
                                transform: "rotate(0deg) translateX(0px)"
                            }, {
                                offset: .3,
                                transform: "rotate(-10deg) translateX(-2px)"
                            }, {
                                offset: .6,
                                transform: "rotate(-10deg) translateX(-2px)"
                            }, {
                                offset: 1,
                                transform: "rotate(0deg) translateX(0px)"
                            }], {
                                duration: 1E3
                            })), g.push(d.current.animate([{
                                    offset: 0,
                                    transform: "rotate(0deg)"
                                }, {
                                    offset: .3,
                                    transform: "rotate(-10deg)"
                                },
                                {
                                    offset: .6,
                                    transform: "rotate(-10deg)"
                                }, {
                                    offset: 1,
                                    transform: "rotate(0deg)"
                                }
                            ], {
                                duration: 1E3
                            })), g.push(f.current.animate([{
                                offset: 0,
                                transform: "rotate(0deg) translateY(0px)"
                            }, {
                                offset: .2,
                                transform: "rotate(0deg) translateY(0px)"
                            }, {
                                offset: .4,
                                transform: "rotate(10deg) translateY(-2px)"
                            }, {
                                offset: .6,
                                transform: "rotate(0deg) translateY(0px)"
                            }, {
                                offset: 1,
                                transform: "rotate(0deg) translateY(0px)"
                            }], {
                                duration: 1E3
                            })));
                            return g
                        }, c);
                        return z$("svg", {
                            viewBox: "0 0 24 24",
                            className: b,
                            "aria-label": a,
                            children: [y$("path", {
                                d: "M12 22.6788C18.2592 22.6788 23.3333 17.6046 23.3333 11.3454C23.3333 5.08619 18.2592 0.012085 12 0.012085C5.74076 0.012085 0.666656 5.08619 0.666656 11.3454C0.666656 17.6046 5.74076 22.6788 12 22.6788Z",
                                fill: "#FFCB4C"
                            }), z$("g", {
                                ref: d,
                                className: "_6TAFYg",
                                children: [y$("path", {
                                    d: "M9.68266 14.024C9.58599 13.9467 9.51066 13.8414 9.47466 13.7147C9.38533 13.408 9.56133 13.1027 9.86799 13.034C12.8867 12.3534 14.9193 13.9427 15.0053 14.0107C15.2613 14.2147 15.3113 14.574 15.1207 14.814C14.93 15.0527 14.5687 15.0814 14.3133 14.8787C14.24 14.8227 12.6313 13.5967 10.192 14.1467C10.0093 14.1874 9.82266 14.136 9.68266 14.024V14.024Z",
                                    fill: "#65471B"
                                }), y$("path", {
                                    d: "M8.74601 9.22004C9.52842 9.22004 10.1627 8.42729 10.1627 7.44938C10.1627 6.47147 9.52842 5.67871 8.74601 5.67871C7.96361 5.67871 7.32935 6.47147 7.32935 7.44938C7.32935 8.42729 7.96361 9.22004 8.74601 9.22004Z",
                                    fill: "#65471B"
                                }), y$("path", {
                                    d: "M16.25 9.92805C17.0324 9.92805 17.6667 9.1353 17.6667 8.15739C17.6667 7.17947 17.0324 6.38672 16.25 6.38672C15.4676 6.38672 14.8333 7.17947 14.8333 8.15739C14.8333 9.1353 15.4676 9.92805 16.25 9.92805Z",
                                    fill: "#65471B"
                                }), y$("path", {
                                    ref: f,
                                    className: "JHp4rQ",
                                    d: "M6.19733 4.23406C6.088 4.1754 5.99533 4.08473 5.93666 3.96806C5.79266 3.68273 5.91 3.35006 6.19866 3.22673C9.04266 2.00606 11.3313 3.19806 11.4273 3.2494C11.716 3.4034 11.8327 3.7474 11.688 4.01873C11.544 4.28873 11.1947 4.38273 10.906 4.23073C10.824 4.18873 9.018 3.27606 6.72066 4.26206C6.54933 4.33473 6.356 4.31873 6.19733 4.23406V4.23406ZM14.2873 6.73406C14.1833 6.66873 14.0967 6.57206 14.046 6.4514C13.9213 6.15673 14.0613 5.8334 14.358 5.72873C17.2787 4.70473 19.4813 6.04873 19.5733 6.10673C19.85 6.28006 19.9433 6.6314 19.7813 6.89206C19.62 7.15206 19.264 7.22206 18.9873 7.05073C18.9073 7.00273 17.1693 5.97006 14.8093 6.79806C14.632 6.85873 14.4407 6.82873 14.2873 6.73406V6.73406Z",
                                    fill: "#65471B"
                                })]
                            }), y$("path", {
                                ref: e,
                                className: "_9G_fHA",
                                d: "M11.5173 23.4327C11.5173 23.4327 12.3607 23.1587 12.47 22.5314C12.5853 21.8834 12.054 21.7534 12.054 21.7534C12.054 21.7534 12.748 21.6147 12.8353 20.836C12.9173 20.102 12.2613 19.9274 12.2613 19.9274C12.2613 19.9274 12.908 19.6607 12.9387 18.9014C12.964 18.262 12.2753 17.9494 12.2753 17.9494C12.2753 17.9494 15.634 17.1354 15.9793 17.0554C16.3233 16.9754 16.8593 16.6454 16.692 15.926C16.526 15.206 15.8893 15.1807 15.5607 15.2574C15.2313 15.334 11.0647 16.3014 9.62734 16.636L8.66801 16.8587C8.30801 16.9434 8.14468 16.7854 8.39868 16.5174C8.73734 16.16 8.95401 15.7647 9.02934 15.1087C9.10868 14.4187 8.87468 13.5667 8.74068 13.236C8.49134 12.622 8.07068 12.1367 7.58468 11.97C6.82668 11.71 6.28801 12.184 6.55668 13.0107C6.95934 14.2467 6.69534 15.2607 6.00134 15.8727C4.36868 17.3107 3.60934 18.336 4.11468 20.5214C4.66668 22.9047 7.03268 24.4387 9.41601 23.8867L11.5173 23.4327Z",
                                fill: "#F19020"
                            })]
                        })
                    },
                    Jkb = function({
                        ariaLabel: a,
                        className: b,
                        animate: c
                    }) {
                        const d = B$(null),
                            e = B$(null);
                        G$(() => {
                            if (!e.current || !d.current) return [];
                            const f = d.current.animate([{
                                offset: 0,
                                easing: "ease",
                                transform: "rotate(0deg) translate(0px, 0px)"
                            }, {
                                offset: .375,
                                easing: "ease",
                                transform: "rotate(-10deg) translate(-12.5%, -12.5%)"
                            }, {
                                offset: .65,
                                easing: "ease-out",
                                transform: "rotate(6deg) translate(12.5%, 12.5%)"
                            }, {
                                offset: 1,
                                easing: "ease",
                                transform: "rotate(0deg) translate(0px, 0px)"
                            }], 800);
                            "beginElement" in e.current &&
                                e.current.beginElement();
                            return [f]
                        }, c);
                        return z$("svg", {
                            viewBox: "0 0 24 24",
                            className: b,
                            "aria-label": a,
                            ref: d,
                            children: [y$("path", {
                                    d: "M23.1 11C22.2 8.1 18 8.3 12.1 8.2C11.1 8.2 11.7 7 12 4.4C12.2 2.7 11.1 0.1 9.3 0.1C6.3 0.1 9.2 2.5 6.5 8.3C5.1 11.5 5.5 10.8 5.5 14C8.70649 15.3566 13.5 14 23.1 11Z",
                                    fill: "#FFDB5E",
                                    children: y$("animate", {
                                        ref: e,
                                        begin: "indefinite",
                                        dur: "0.7s",
                                        attributeName: "d",
                                        keyTimes: "0; 0.2; 0.9; 1",
                                        restart: "whenNotActive",
                                        values: "\n              M23.1 11C22.2 8.1 18 8.3 12.1 8.2C11.1 8.2 11.7 7 12 4.4C12.2 2.7 11.1 0.1 9.3 0.1C6.3 0.1 9.2 2.5 6.5 8.3C5.1 11.5 5.5 10.8 5.5 14C8.70649 15.3566 13.5 14 23.1 11Z;\n              M23.1 11C22.2 8.1 14 8.3 14 8.3C14 8.3 20 9.54951 20 7C20 6 19.5 5.5 18.5 5.5C10 5.5 8.5 5 6.5 8C5.1 11.2 5.5 10.8 5.5 14C8.70649 15.3566 13.5 14 23.1 11Z;\n              M23.1 11C22.2 8.1 14 8.3 14 8.3C14 8.3 20 9.54951 20 7C20 6 19.5 5.5 18.5 5.5C10 5.5 8.5 5 6.5 8C5.1 11.2 5.5 10.8 5.5 14C8.70649 15.3566 13.5 14 23.1 11Z;\n              M23.1 11C22.2 8.1 18 8.3 12.1 8.2C11.1 8.2 11.7 7 12 4.4C12.2 2.7 11.1 0.1 9.3 0.1C6.3 0.1 9.2 2.5 6.5 8.3C5.1 11.5 5.5 10.8 5.5 14C8.70649 15.3566 13.5 14 23.1 11Z\n              "
                                    })
                                }),
                                y$("path", {
                                    d: "M23.3 11.9C23.3 11.6 23.2 11.2 23.1 11C22.2 8.1 18 8.3 12.1 8.2C10.4955 8.2 12.1 8.2 6.5 8.3C5.1 11.5 2 9.7 2 12.9V20C2 21.2 2.1 22.4 3.8 22.6C5.5 22.8 5.1 24 7.5 24H19.5C20.7 24 21.7 23 21.7 21.8C21.7 21.3 21.5 20.8 21.2 20.5C21.9 20.1 22.3 19.4 22.3 18.6C22.3 18.1 22.1 17.6 21.8 17.3C22.5 16.9 23 16.2 23 15.4C23 14.8 22.8 14.2 22.4 13.8C23 13.3 23.3 12.6 23.3 11.9Z",
                                    fill: "#FFDB5E"
                                }), y$("path", {
                                    d: "M15.3467 14.166H21.0827C21.8627 14.166 22.5947 13.7487 22.9934 13.0773C23.1574 12.8007 23.066 12.4427 22.7887 12.278C22.512 12.1133 22.154 12.206 21.9894 12.4827C21.8007 12.802 21.452 12.9993 21.082 12.9993H15.2087C14.6267 12.9993 14.1534 12.526 14.1534 11.944C14.1534 11.362 14.6267 10.8887 15.2087 10.8887H19.1334C19.4554 10.8887 19.7167 10.6273 19.7167 10.3053C19.7167 9.98332 19.4554 9.72198 19.1334 9.72198H15.208C13.9827 9.72198 12.986 10.7187 12.986 11.944C12.986 12.6273 13.3027 13.232 13.7894 13.64C13.3794 14.0433 13.124 14.6033 13.124 15.222C13.124 15.9073 13.4427 16.514 13.932 16.9213C13.5247 17.324 13.272 17.882 13.272 18.4993C13.272 19.246 13.6447 19.9047 14.2114 20.308C13.862 20.7007 13.6434 21.212 13.6434 21.7773C13.6434 23.0027 14.64 23.9993 15.8654 23.9993H19.5214C20.3014 23.9993 21.034 23.5827 21.4327 22.9113C21.5974 22.6347 21.506 22.2767 21.2294 22.112C20.952 21.9487 20.594 22.0387 20.43 22.3153C20.24 22.6347 19.8914 22.8327 19.5214 22.8327H15.8654C15.2834 22.8327 14.81 22.3593 14.81 21.7773C14.81 21.1953 15.2834 20.722 15.8654 20.722H20.2027C20.9827 20.722 21.716 20.3047 22.114 19.6333C22.2787 19.356 22.1874 18.998 21.9107 18.834C21.6314 18.6667 21.2747 18.7607 21.1114 19.0373C20.9187 19.362 20.5787 19.5553 20.2027 19.5553H15.494C14.912 19.5553 14.4387 19.0813 14.4387 18.4993C14.4387 17.9173 14.912 17.444 15.494 17.444H20.888C21.668 17.444 22.4007 17.0273 22.7994 16.356C22.964 16.0793 22.8727 15.7213 22.596 15.5567C22.318 15.3927 21.9607 15.4833 21.7967 15.76C21.604 16.084 21.264 16.2773 20.888 16.2773H15.3467C14.7647 16.2773 14.2914 15.804 14.2914 15.222C14.2914 14.64 14.764 14.166 15.3467 14.166Z",
                                    fill: "#EE9547"
                                })
                            ]
                        })
                    },
                    Kkb = function({
                        ariaLabel: a,
                        className: b,
                        animate: c
                    }) {
                        const d = B$(null),
                            e = B$(null),
                            f = B$(null),
                            g = B$(null);
                        G$(() => {
                            const h = [];
                            d.current && e.current && f.current && g.current && (h.push(d.current.animate([{
                                offset: 0,
                                transform: "matrix(1, 0, 0, 1, 0, 0)"
                            }, {
                                offset: .13,
                                transform: "matrix(0.85, 0, 0, 0.85, -0.277323, 2.85882)"
                            }, {
                                offset: .33,
                                transform: "matrix(1, 0, 0, 1, 0, -2)"
                            }, {
                                offset: .8,
                                transform: "matrix(1, 0, 0, 1, 0, -2)"
                            }, {
                                offset: 1,
                                transform: "matrix(1, 0, 0, 1, 0, 0)"
                            }], {
                                duration: 1500
                            })), h.push(e.current.animate([{
                                offset: 0,
                                transform: "matrix(1, 0, 0, 1, 0, 0)"
                            }, {
                                offset: .13,
                                transform: "matrix(0.85, 0, 0, 0.85, 1.02354, 2.85881)"
                            }, {
                                offset: .33,
                                transform: "matrix(1, 0, 0, 1, 0, -2)"
                            }, {
                                offset: .8,
                                transform: "matrix(1, 0, 0, 1, 0, -2)"
                            }, {
                                offset: 1,
                                transform: "matrix(1, 0, 0, 1, 0, 0)"
                            }], {
                                duration: 1500
                            })), h.push(f.current.animate([{
                                    offset: 0,
                                    transform: "matrix(1, 0, 0, 1, 0, 0)"
                                }, {
                                    offset: .13,
                                    transform: "matrix(0.85, 0, 0, 0.85, 0.176454, 3.81177)"
                                }, {
                                    offset: .33,
                                    transform: "matrix(1.5, 0, 0, 1.5, -0.0881801, -2.7059)"
                                }, {
                                    offset: .8,
                                    transform: "matrix(1.5, 0, 0, 1.5, -0.0881801, -2.7059)"
                                },
                                {
                                    offset: 1,
                                    transform: "matrix(1, 0, 0, 1, 0, 0)"
                                }
                            ], {
                                duration: 1500
                            })), h.push(g.current.animate([{
                                offset: 0,
                                easing: "ease-out",
                                transform: "matrix(1, 0, 0, 1, 0, 0)"
                            }, {
                                offset: .33,
                                easing: "ease-out",
                                transform: "matrix(1, 0, 0, 1, 2, 1)"
                            }, {
                                offset: .66,
                                easing: "ease-out",
                                transform: "matrix(1, 0, 0, 1, -2, 1)"
                            }, {
                                offset: 1,
                                easing: "ease-out",
                                transform: "matrix(1, 0, 0, 1, 0, 0)"
                            }], {
                                duration: 900,
                                delay: 600
                            })));
                            return h
                        }, c);
                        c = __c.ME();
                        return z$("svg", {
                            viewBox: "0 0 24 24",
                            className: b,
                            "aria-label": a,
                            children: [y$("path", {
                                d: "M24 12C24 18.6275 18.6275 24 12 24C5.37247 24 0 18.6275 0 12C0 5.37247 5.37247 -9.53674e-07 12 -9.53674e-07C18.6275 -9.53674e-07 24 5.37247 24 12Z",
                                fill: `url(#${c})`
                            }), z$("g", {
                                ref: g,
                                children: [y$("path", {
                                    ref: d,
                                    className: "YMeamw",
                                    d: "M9.1766 9.17642C9.1766 10.3461 8.49895 11.2941 7.66389 11.2941C6.82813 11.2941 6.15118 10.3461 6.15118 9.17642C6.15118 8.00677 6.82813 7.05877 7.66389 7.05877C8.49895 7.05877 9.1766 8.00677 9.1766 9.17642Z",
                                    fill: "#664500"
                                }), y$("path", {
                                    ref: e,
                                    className: "ZxhS9w",
                                    d: "M17.6472 9.03519C17.6472 10.1272 17.0154 11.0117 16.2354 11.0117C15.4561 11.0117 14.8236 10.1272 14.8236 9.03519C14.8236 7.94389 15.4561 7.05872 16.2354 7.05872C17.0154 7.05872 17.6472 7.94389 17.6472 9.03519Z",
                                    fill: "#664500"
                                }), y$("path", {
                                    ref: f,
                                    className: "I7JiRA",
                                    d: "M14.8234 16.9412C14.8234 18.8915 13.5585 20.4706 11.9999 20.4706C10.4399 20.4706 9.17636 18.8915 9.17636 16.9412C9.17636 14.9922 10.4399 13.4118 11.9999 13.4118C13.5585 13.4118 14.8234 14.9922 14.8234 16.9412Z",
                                    fill: "#664500"
                                })]
                            }), y$("defs", {
                                children: z$("linearGradient", {
                                    id: c,
                                    x1: "12",
                                    y1: "24",
                                    x2: "12",
                                    y2: "-9.53674e-07",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [y$("stop", {
                                        stopColor: "#FFCC4D"
                                    }), y$("stop", {
                                        offset: "1",
                                        stopColor: "#FFDF8E"
                                    })]
                                })
                            })]
                        })
                    },
                    Mkb = function() {
                        const [a, b] = Lkb(!1), c = C$(() => {
                            b(!0)
                        }, []), d = C$(() => {
                            b(!1)
                        }, []);
                        return {
                            animate: a,
                            onMouseEnter: c,
                            onMouseLeave: d
                        }
                    },
                    Nkb = function() {
                        return y$("svg", {
                            className: "NKbMiw",
                            viewBox: "0 0 5 5",
                            "aria-hidden": "true",
                            children: y$("circle", {
                                cx: 2.5,
                                cy: 2.5,
                                r: 2.5,
                                fill: "currentColor",
                                strokeWidth: 0
                            })
                        })
                    },
                    Okb = function(a, b) {
                        return (...c) => {
                            a.Ns.Zc ? b(...c) : a.Ns.openDialog()
                        }
                    },
                    Wkb = function(a) {
                        var {
                            Cb: b,
                            Vqa: c,
                            dHa: d,
                            Cf: e,
                            j6: f,
                            k6: g
                        } = a;
                        if (!d) return null;
                        const h = "compact" === b ? "large" : "medium";
                        a = (k) => ({
                            on: e[k],
                            reaction: k,
                            size: h,
                            j6: f,
                            k6: g
                        });
                        return z$("div", {
                            className: H$("SAIpHg", Pkb[b]),
                            role: "group",
                            children: [null != c ? y$(c, {
                                Cb: b
                            }) : null, y$(I$, Object.assign({}, {
                                Ui: Qkb.Ui,
                                ariaLabel: H("k2hlvA")
                            }, a("2764"))), y$(I$, Object.assign({}, {
                                Ui: Rkb.Ui,
                                ariaLabel: H("BXjIaA")
                            }, a("1F44D"))), y$(I$, Object.assign({}, {
                                Ui: Skb.Ui,
                                ariaLabel: H("PWHebA")
                            }, a("1F44F"))), y$(I$, Object.assign({}, {
                                Ui: Tkb.Ui,
                                ariaLabel: H("yegrcw")
                            }, a("1F602"))), y$(I$, Object.assign({}, {
                                Ui: Ukb.Ui,
                                ariaLabel: H("tGtwzw")
                            }, a("1F62E"))), y$(I$, Object.assign({}, {
                                Ui: Vkb.Ui,
                                ariaLabel: H("1HAq0w")
                            }, a("1F914")))]
                        })
                    },
                    Ykb = function(a) {
                        var {
                            Cb: b,
                            open: c,
                            onClose: d
                        } = a;
                        return y$("div", {
                            className: "IUsUQQ",
                            "aria-hidden": !0,
                            children: y$(Ekb, {
                                open: c,
                                offset: Xkb[b],
                                onClose: d,
                                Pu: d,
                                kka: d,
                                children: y$("div", {})
                            })
                        })
                    },
                    J$ = __webpack_require__(85893),
                    y$ = J$.jsx,
                    z$ = J$.jsxs,
                    A$ = J$.Fragment;
                var Zkb = __webpack_require__,
                    $kb = Zkb(94184),
                    H$ = Zkb.n_x($kb)();
                var alb = __webpack_require__(22188),
                    blb = alb.U5,
                    clb = alb.Fl;
                var K$ = __webpack_require__(67294),
                    dlb = K$.PureComponent,
                    x$ = K$.createRef,
                    elb = K$.forwardRef,
                    B$ = K$.useRef,
                    C$ = K$.useCallback,
                    Akb = K$.useEffect,
                    L$ = K$.Component,
                    E$ = K$.memo,
                    Lkb = K$.useState;
                var flb = __webpack_require__(29323),
                    glb = flb.b4,
                    M$ = flb.Pi;
                var N$ = __webpack_require__(70655).gn;
                var hlb = __webpack_require__(99601).Z;
                var ilb = __webpack_require__(5527).Z;
                var jlb = new Map([
                    ["1:1", "_6Do-2g"],
                    ["4:3", "_1DZa4Q"],
                    ["5:2", "_3LlxGA"],
                    ["16:9", "E4hVnw"],
                    ["16:10", "tnzHhg"],
                    ["20:13", "eASRmA"]
                ]);
                var O$ = class extends dlb {
                    constructor() {
                        super(...arguments);
                        this.hla = !1;
                        this.ila = x$();
                        this.Mda = (a) => {
                            var b, c;
                            this.hla && void 0 !== a && (null === (c = null === (b = this.ila.current) || void 0 === b ? void 0 : b.contentWindow) || void 0 === c ? void 0 : c.postMessage({
                                method: a ? "play" : "pause"
                            }, "https://player.vimeo.com"))
                        };
                        this.onLoad = () => {
                            this.hla = !0;
                            this.Mda(this.props.play)
                        }
                    }
                    componentDidMount() {
                        glb(this, blb(() => this.props.play, (a) => this.Mda(a), {
                            fireImmediately: !0
                        }))
                    }
                    get FLa() {
                        const {
                            Woa: a,
                            background: b = !1,
                            autoplay: c = !1,
                            iDa: d = !1,
                            loop: e = !1,
                            HNa: f = !1,
                            iVa: g = !1,
                            fTa: h = !1
                        } = this.props, k = new URL(`${"https://player.vimeo.com"}/video/${a}`);
                        k.searchParams.append("background", String(b));
                        k.searchParams.append("autoplay", String(c));
                        k.searchParams.append("muted", String(d));
                        k.searchParams.append("loop", String(e));
                        k.searchParams.append("autopause", String(f));
                        k.searchParams.append("dnt", String(!h));
                        k.searchParams.append("controls", String(!g));
                        return k
                    }
                    render() {
                        const {
                            aspectRatio: a,
                            title: b = H("7hydPA")
                        } = this.props, c = y$(klb, {
                            src: this.FLa.toString(),
                            title: b,
                            ref: this.ila,
                            onLoad: this.onLoad
                        });
                        return "fill-parent" === a ? c : y$("div", {
                            className: H$("Nx9_bg", jlb.get(a)),
                            children: c
                        })
                    }
                };
                O$ = N$([M$], O$);
                var klb = elb(({
                    src: a,
                    title: b,
                    onLoad: c
                }, d) => y$("iframe", {
                    src: a,
                    ref: d,
                    className: "Nt7f9A",
                    frameBorder: 0,
                    title: b,
                    onLoad: c
                }));
                var mlb = class extends L$ {
                        constructor() {
                            super(...arguments);
                            this.y7 = x$();
                            this.vd = x$();
                            this.nY = void 0;
                            this.v4 = [
                                ["Escape", (a) => {
                                    this.ad();
                                    a.preventDefault()
                                }]
                            ];
                            this.ad = () => {
                                var a, b;
                                null === (b = (a = this.props).onClose) || void 0 === b ? void 0 : b.call(a)
                            };
                            this.Yga = () => {
                                var a, b;
                                try {
                                    return null === (b = (a = this.props).Yga) || void 0 === b ? void 0 : b.call(a, this.vd)
                                } catch (c) {}
                            };
                            this.update = () => {
                                var a;
                                null === (a = this.y7.current) || void 0 === a ? void 0 : a.update()
                            };
                            this.No = () => {
                                window.setTimeout(() => {
                                    var a;
                                    return this.props.autoFocus && (
                                        null === (a = this.vd.current) || void 0 === a ? void 0 : a.focus())
                                }, 500);
                                this.nY = window.setInterval(() => this.update(), 100)
                            };
                            this.onClose = () => {
                                this.nY && (window.clearInterval(this.nY), this.nY = void 0)
                            }
                        }
                        componentDidMount() {
                            const a = this.props.vk,
                                b = this.props.open;
                            a && a();
                            if (b) this.No();
                            else this.onClose()
                        }
                        componentDidUpdate(a) {
                            ({
                                open: a
                            } = a);
                            if (!a && this.props.open) this.No();
                            else this.onClose()
                        }
                        componentWillUnmount() {
                            const a = this.props.P6;
                            this.onClose();
                            a && a()
                        }
                        render() {
                            const {
                                iNa: a = !0,
                                d5a: b,
                                d4a: c,
                                placement: d,
                                open: e,
                                children: f,
                                aC: g,
                                Pu: h,
                                onMouseEnter: k,
                                onMouseLeave: l,
                                content: m,
                                offset: n,
                                Ae: q,
                                positionFixed: r,
                                WG: x,
                                fq: y
                            } = this.props, {
                                pJ: z,
                                PJ: B
                            } = Dkb(d, n), F = e ? void 0 : this.Yga(), J = (null !== c && void 0 !== c ? c : 1) ? y$("div", {
                                style: Object.assign({}, z, F || {}),
                                className: H$({
                                    [Gd.ma ? `${"nE4ESQ"} ${{top:"fYU2dg","top-start":"fYU2dg","top-end":"fYU2dg",bottom:"KwMkJw","bottom-start":"KwMkJw","bottom-end":"KwMkJw",right:"A-HvfQ","right-start":"A-HvfQ","right-end":"A-HvfQ",left:"zCv9sg","left-start":"zCv9sg",
"left-end":"zCv9sg"}[d]||""}` : "nE4ESQ"]: !e && !F,
                                    [Gd.ma && a ? `${"nE4ESQ"} ${{top:"QfNK_Q","top-start":"QfNK_Q","top-end":"QfNK_Q",bottom:"PFWkFw","bottom-start":"PFWkFw","bottom-end":"PFWkFw",right:"USBUDQ","right-start":"USBUDQ","right-end":"USBUDQ",left:"QmE7jw","left-start":"QmE7jw","left-end":"QmE7jw"}[d]||""}` : "nE4ESQ"]: e
                                })
                            }) : void 0, N = y$(__c.HW, {
                                kh: !1,
                                map: this.v4,
                                children: (K) => {
                                    ({
                                        ref: K
                                    } = K);
                                    return y$("div", {
                                        style: Object.assign({}, B, F || {}),
                                        className: H$("DuAI1w", {
                                            top: "dLA4JA",
                                            "top-start": "dLA4JA",
                                            "top-end": "dLA4JA",
                                            bottom: "wUI4Uw",
                                            "bottom-start": "wUI4Uw",
                                            "bottom-end": "uwlOow",
                                            right: "ktujDA",
                                            "right-start": "ktujDA",
                                            "right-end": "ktujDA",
                                            left: "Qr1B8Q",
                                            "left-start": "Qr1B8Q",
                                            "left-end": "Qr1B8Q"
                                        }[d], {
                                            [Gd.ma ? {
                                                top: "_0iI4Ig",
                                                "top-start": "_0iI4Ig",
                                                "top-end": "_0iI4Ig",
                                                bottom: "MBNi-Q",
                                                "bottom-start": "MBNi-Q",
                                                "bottom-end": "s67XcQ",
                                                right: "cR7ZPA",
                                                "right-start": "cR7ZPA",
                                                "right-end": "cR7ZPA",
                                                left: "Wwf57Q",
                                                "left-start": "Wwf57Q",
                                                "left-end": "Wwf57Q"
                                            }[d] || "" : ""]: e && a,
                                            [Gd.ma ? {
                                                top: "_6OTXiw",
                                                "top-start": "_6OTXiw",
                                                "top-end": "_6OTXiw",
                                                bottom: "_HfhZw",
                                                "bottom-start": "_HfhZw",
                                                "bottom-end": "HkTJ-g",
                                                right: "BwDNdg",
                                                "right-start": "BwDNdg",
                                                "right-end": "BwDNdg",
                                                left: "uWvA7g",
                                                "left-start": "uWvA7g",
                                                "left-end": "uWvA7g"
                                            }[d] || "" : ""]: !e && !F
                                        }),
                                        onMouseEnter: k,
                                        onMouseLeave: l,
                                        ref: hlb(this.vd, K),
                                        tabIndex: -1,
                                        children: m
                                    })
                                }
                            });
                            return b ? y$(Ckb, {
                                children: (K) => {
                                    var {
                                        Uqa: L,
                                        Lra: O
                                    } = K;
                                    return z$(A$, {
                                        children: [y$(__c.jw, {
                                            open: e,
                                            arrow: J,
                                            placement: d,
                                            content: y$(O, {
                                                children: N
                                            }),
                                            WG: null !== x && void 0 !== x ? x : !0,
                                            fq: null !== y && void 0 !== y ? y : "viewport",
                                            aC: g,
                                            Pu: h,
                                            tP: llb,
                                            Ae: q,
                                            positionFixed: r,
                                            ref: this.y7,
                                            children: f
                                        }), e && y$(L, {})]
                                    })
                                }
                            }) : y$(__c.jw, {
                                open: e,
                                arrow: J,
                                placement: d,
                                content: N,
                                WG: null !== x && void 0 !== x ? x : !0,
                                fq: null !== y && void 0 !== y ? y : "viewport",
                                aC: g,
                                Pu: h,
                                tP: llb,
                                Ae: q,
                                positionFixed: r,
                                ref: this.y7,
                                children: f
                            })
                        }
                    },
                    llb = __c.iw({
                        T1: {
                            opacity: 1
                        },
                        K4: {
                            opacity: 0,
                            transition: "opacity 500ms ease-in-out"
                        },
                        style: {},
                        zK: 500
                    });
                var P$ = class extends L$ {
                    constructor() {
                        super(...arguments);
                        this.error = void 0
                    }
                    componentDidCatch(a, b) {
                        var c, d;
                        this.error = a;
                        null === (d = null === (c = this.props) || void 0 === c ? void 0 : c.onError) || void 0 === d ? void 0 : d.call(c, a, b)
                    }
                    render() {
                        var a = this.props,
                            b = Object.assign({}, a);
                        const c = a.children;
                        a = a.iba;
                        b = (delete b.children, delete b.iba, delete b.onError, b);
                        return this.error ? y$(A$, {
                            children: c
                        }) : y$(a, Object.assign({}, b, {
                            children: c
                        }))
                    }
                };
                _dmr(P$, "error");
                _dma(P$, "componentDidCatch", null);
                P$ = N$([M$], P$);
                var nlb = parseInt("288px", 10) || 0,
                    olb = (a) => {
                        ({
                            image: a
                        } = a);
                        return y$("img", {
                            alt: a.alt,
                            src: a.src,
                            className: a.style || "UtHHiw"
                        })
                    },
                    plb = (a) => {
                        ({
                            video: a
                        } = a);
                        return y$(__c.SJ, {
                            autoPlay: !0,
                            muted: !0,
                            loop: !0,
                            playsInline: !0,
                            src: a.src,
                            className: "E-o7vg"
                        })
                    },
                    qlb = (a) => {
                        ({
                            Voa: a
                        } = a);
                        return y$("div", {
                            className: "_8_DcbA",
                            children: y$(O$, {
                                Woa: a.Woa,
                                iDa: !0,
                                loop: !0,
                                background: !0,
                                autoplay: !0,
                                aspectRatio: "4:3"
                            })
                        })
                    },
                    rlb = E$((a) => {
                        ({
                            zL: a
                        } = a);
                        switch (a.type) {
                            case "image":
                                return y$(olb, {
                                    image: a.image
                                });
                            case "video":
                                return y$(plb, {
                                    video: a.video
                                });
                            case "vimeo":
                                return y$(qlb, {
                                    Voa: a.Voa
                                });
                            default:
                                throw Error("invalid illustration type");
                        }
                    }),
                    Q$ = class extends L$ {
                        constructor() {
                            super(...arguments);
                            this.TH = !0
                        }
                        onResize(a) {
                            ({
                                offset: a
                            } = a);
                            this.TH && a && a.width > nlb && (this.TH = !1)
                        }
                        onClose(a) {
                            var b, c;
                            a.stopPropagation();
                            null === (c = (b = this.props).onClose) || void 0 === c ? void 0 : c.call(b)
                        }
                        Gi(a) {
                            var b, c;
                            a.stopPropagation();
                            null === (c = (b = this.props).kka) || void 0 === c ? void 0 : c.call(b)
                        }
                        render() {
                            var a = this.props.kQ;
                            const b = this.props.fua,
                                c = this.props.title,
                                d = this.props.content;
                            var e = this.props.zL;
                            const f = this.props.children;
                            var g = this.props.zQa,
                                h = this.props.L5a;
                            const k = this.props.Dva;
                            var l = this.props.bZ,
                                m = this.props.Nv;
                            const n = void 0 !== h && void 0 !== g && 1 < h,
                                q = !n || g === h;
                            h = n && void 0 !== g && z$(__c.mw, {
                                size: "small",
                                variant: "bold",
                                className: H$("u7b7kQ", "P1EUow"),
                                color: __c.uv,
                                children: [g, " / ", h]
                            });
                            g = this.props.onClose && (!k || !this.TH) && y$("div", {
                                className: "u7b7kQ",
                                children: y$(__c.lA, {
                                    variant: "primary",
                                    ariaLabel: H("Lr5rKw"),
                                    icon: __c.Iw,
                                    Mg: "small",
                                    className: "yZjnJA",
                                    onClick: (z) =>
                                        this.onClose(z)
                                })
                            });
                            h = h && z$("div", {
                                className: "oUBUIQ",
                                children: [h, g]
                            });
                            l = l && z$("div", {
                                className: "oUBUIQ",
                                children: [y$(l, {}), !h && g]
                            });
                            const r = e && "above-content" === e.position && y$("div", {
                                className: "wsq7Ug",
                                children: y$(rlb, {
                                    zL: e.zL
                                })
                            });
                            e = e && "below-content" === e.position && y$("div", {
                                className: "mnV5vQ",
                                children: y$(rlb, {
                                    zL: e.zL
                                })
                            });
                            m = m && y$(m, {
                                Gi: (z) => this.Gi(z),
                                onClose: (z) => this.onClose(z),
                                kQ: a,
                                fua: b,
                                Dva: k,
                                fWa: n,
                                dWa: q
                            });
                            const x = y$(__c.lA, {
                                    variant: "primary",
                                    className: "nhsafA",
                                    onClick: (z) => this.Gi(z),
                                    children: null !==
                                        a && void 0 !== a ? a : q ? null !== b && void 0 !== b ? b : H("0Elkyw") : H("sgCJZw")
                                }),
                                y = k && n && !q && this.props.onClose && this.TH && y$(__c.lA, {
                                    variant: "primary",
                                    className: "xdLHUA",
                                    onClick: (z) => this.onClose(z),
                                    children: H("iJ6kHA")
                                });
                            a = z$("div", {
                                className: "OoKsfA",
                                children: [z$("div", {
                                    className: "a9a9Hw",
                                    children: [h, l, z$("div", {
                                        className: "oUBUIQ",
                                        children: [y$(__c.nw, {
                                            size: "small",
                                            className: "_41WnJg",
                                            color: __c.uv,
                                            La: "legacy",
                                            children: c
                                        }), !h && !l && g]
                                    })]
                                }), z$("div", {
                                    className: "A-MgSw",
                                    children: [r, y$(__c.mw, {
                                        className: "GhUjmw",
                                        color: __c.uv,
                                        La: "legacy",
                                        children: d
                                    }), e]
                                }), m || y$(ilb, {
                                    offset: !0,
                                    onResize: this.onResize,
                                    children: (z) => {
                                        ({
                                            measureRef: z
                                        } = z);
                                        return z$("div", {
                                            ref: z,
                                            className: "AonwXw",
                                            children: [x, y]
                                        })
                                    }
                                })]
                            });
                            return y$(mlb, Object.assign({}, this.props, {
                                content: a,
                                children: f
                            }))
                        }
                    };
                _dmr(Q$, "TH");
                _dmb(Q$, "onResize", null);
                Q$ = N$([M$], Q$);
                var D$ = ((a) => (b) => {
                    var c = Object.assign({}, b),
                        d = b.children;
                    b = b.onError;
                    c = (delete c.children, delete c.onError, c);
                    return y$(P$, Object.assign({}, {
                        iba: a,
                        onError: b
                    }, c, {
                        children: d
                    }))
                })(Q$);
                M$((a) => y$(D$, Object.assign({}, {
                    title: H("3jjW9A"),
                    content: H("rBgyFQ"),
                    placement: "bottom-end",
                    kQ: H("0Elkyw")
                }, a)));
                M$((a) => {
                    var b = Object.assign({}, a);
                    a = a.bGa;
                    b = (delete b.bGa, b);
                    return y$(D$, Object.assign({}, {
                        title: H("o73P9Q"),
                        content: __c.Wy("/Mj0NQ", [__c.MV(a)]),
                        kQ: H("0Elkyw"),
                        placement: "bottom-end"
                    }, b))
                });
                M$((a) => y$(D$, Object.assign({}, {
                    title: H("274cQg"),
                    content: H("Yn2nNg"),
                    aC: a.kka,
                    Pu: a.onClose,
                    placement: "bottom-end",
                    WG: !1
                }, a, {
                    children: y$("div", {
                        className: "RjiTBQ"
                    })
                })));
                M$((a) => y$(D$, Object.assign({}, {
                    title: H("jGuLSA"),
                    content: H("n8jgXg"),
                    placement: "bottom-end"
                }, a, {
                    children: y$("div", {
                        className: "RjiTBQ"
                    })
                })));
                M$((a) => y$(D$, Object.assign({}, {
                    title: H("2MVPNQ"),
                    content: H("RDEfLg"),
                    placement: "bottom-end",
                    kQ: H("0Elkyw")
                }, a)));
                M$((a) => {
                    var b = Object.assign({}, a);
                    a = a.PM;
                    b = (delete b.PM, b);
                    return y$(D$, Object.assign({}, {
                        title: H("OW1+3Q"),
                        content: __c.Wy("nOcxgw", [a]),
                        placement: "bottom-end"
                    }, b, {
                        children: y$("div", {
                            className: "_2wGBPg"
                        })
                    }))
                });
                var Skb = F$({
                    xl: "\uD83D\uDC4F",
                    UD: Fkb
                });
                var Tkb = F$({
                    xl: "\uD83D\uDE02",
                    UD: Gkb
                });
                var Qkb = F$({
                    xl: "\u2764",
                    UD: Hkb
                });
                var Vkb = F$({
                    xl: "\uD83E\uDD14",
                    UD: Ikb
                });
                var Rkb = F$({
                    xl: "\uD83D\uDC4D",
                    UD: Jkb
                });
                var Ukb = F$({
                    xl: "\uD83D\uDE32",
                    UD: Kkb
                });
                var slb = {
                    gridBaseline: "8px",
                    xsmallSpace: "12px",
                    xsmallSize: "12px",
                    smallSize: "16px",
                    mediumSize: "24px",
                    largeSize: "32px",
                    root: "eS3gPQ",
                    xsmall: "DQksrA",
                    small: "vqq4PQ",
                    medium: "W8jZBQ",
                    large: "_93CUSw",
                    wrapper: "yByonw",
                    grow: "FPw0Ug",
                    buttonAnimate: "M0ylpQ",
                    active: "_7ROpvw"
                };
                var tlb = E$(function(a) {
                    var b = Object.assign({}, a),
                        c = a.size;
                    a = a.Ui;
                    b = (delete b.size, delete b.Ui, b);
                    var d = Mkb(),
                        e = Object.assign({}, d);
                    d = d.animate;
                    e = (delete e.animate, e);
                    return y$("span", {
                        className: H$("eS3gPQ", slb[c]),
                        children: y$(__c.JO, Object.assign({}, {
                            className: H$({
                                M0ylpQ: Gd.ma
                            }),
                            WU: !0
                        }, b, e, {
                            children: y$("span", {
                                className: H$("yByonw", {
                                    FPw0Ug: Gd.ma
                                }),
                                children: y$("span", {
                                    className: H$("yByonw", {
                                        _7ROpvw: Gd.ma
                                    }),
                                    children: y$(a, {
                                        animate: d
                                    })
                                })
                            })
                        }))
                    })
                });
                var I$ = E$(function({
                    Ui: a,
                    ariaLabel: b,
                    on: c,
                    reaction: d,
                    size: e,
                    j6: f,
                    k6: g
                }) {
                    const h = C$(() => {
                            f(d)
                        }, [f, d]),
                        k = C$(() => {
                            g(d)
                        }, [g, d]);
                    return z$("span", {
                        className: "Dsopig",
                        children: [y$(tlb, {
                            Ui: a,
                            ariaLabel: b,
                            ariaPressed: c,
                            size: e,
                            onClick: c ? k : h
                        }), c ? y$(Nkb, {}) : null]
                    })
                });
                var Pkb = {
                    largeSpace: "32px",
                    mediumSpace: "24px",
                    smallSpace: "16px",
                    colorBackground1Semitransparent: "var(--Kw6g7g)",
                    panel: "SAIpHg",
                    compact: "_-mKfkg",
                    comfortable: "LtSCTA",
                    onboardingTooltip: "IUsUQQ"
                };
                var R$ = class {
                    constructor({
                        TG: a,
                        ua: b,
                        Ns: c,
                        Oc: d,
                        Dc: e
                    }) {
                        this.rA = Okb(this, (f) => {
                            this.Dc.rA(this.ua.L, f)
                        });
                        this.xA = Okb(this, (f) => {
                            this.Dc.xA(this.ua.L, f)
                        });
                        this.TG = a;
                        this.ua = b;
                        this.Ns = c;
                        this.Oc = d;
                        this.Dc = e;
                        this.$P = a
                    }
                    get Th() {
                        return this.Oc.Th
                    }
                    get yaa() {
                        const a = this.i7.h9;
                        return {
                            "1F44F": a.has("1F44F"),
                            "1F602": a.has("1F602"),
                            "1F62E": a.has("1F62E"),
                            "2764": a.has("2764"),
                            "1F914": a.has("1F914"),
                            "1F44D": a.has("1F44D")
                        }
                    }
                    get i7() {
                        return this.Dc.ZS(this.ua.L)
                    }
                    get tV() {
                        return this.Th && this.TG && this.$P
                    }
                    e0() {
                        this.$P = !1
                    }
                };
                __c.p = R$.prototype;
                _dmr(R$, "$P");
                _dp([clb.struct], R$.prototype, "yaa", null);
                _dmc(R$, "i7");
                _dma(R$, "rA", void 0);
                _dmb(R$, "xA", void 0);
                _dmc(R$, "tV");
                _dmb(R$, "e0", null);
                var Xkb;
                Xkb = {
                    APa: {
                        bottom: 4 * __c.bw
                    },
                    compact: {
                        bottom: __c.bw
                    }
                };
                __c.J9 = {};
                __c.J9.cMa = Wkb;
                __c.J9.dMa = Ykb;
                __c.J9.Kua = function(a) {
                    var {
                        fb: b,
                        TG: c,
                        ua: d,
                        Ns: e,
                        Oc: f,
                        Dc: g
                    } = a;
                    const h = new R$({
                            TG: c,
                            ua: d,
                            Ns: e,
                            Oc: f,
                            Dc: g
                        }),
                        k = () => {
                            b.pd({
                                Wc: "reaction",
                                Ye: "player",
                                xw: d.L
                            })
                        },
                        l = (q) => {
                            k();
                            h.rA(q)
                        },
                        m = (q) => {
                            k();
                            h.xA(q)
                        },
                        n = h.TG ? M$(function(q) {
                            ({
                                Cb: q
                            } = q);
                            return y$(Ykb, {
                                Cb: q,
                                open: h.tV,
                                onClose: h.e0
                            })
                        }) : void 0;
                    return {
                        Pv: M$(function(q) {
                            ({
                                Cb: q
                            } = q);
                            return y$(Wkb, {
                                Cb: q,
                                Vqa: n,
                                Cf: h.yaa,
                                dHa: h.Th,
                                j6: l,
                                k6: m
                            })
                        }),
                        ZGa: h
                    }
                };
            }).call(self, self._cdf17aa01cb7a37fe84ed76fc113a158);
        }

    }
])
//# sourceMappingURL=sourcemaps/35c8fed43d2aee84.js.map