(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [4968], {

        /***/
        40459: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(2868);
            __web_req__(97924);
            __web_req__(83890);
            self._cdf17aa01cb7a37fe84ed76fc113a158 = self._cdf17aa01cb7a37fe84ed76fc113a158 || {};
            (function(__c) {
                "use strict";
                var yYa = function(a) {
                        return __c.Sr({
                            anonymous_id: a.yp,
                            app_name: a.appName,
                            brand: a.brand,
                            cohort: a.DJ,
                            country_code: a.ab,
                            created_at: a.SE,
                            current_subscriptions: a.AQa,
                            dispatch_group: a.XRa,
                            display_name: a.displayName,
                            email: a.email,
                            email_confirmed: a.xSa,
                            email_validated: a.FSa,
                            experience: a.Zj,
                            experience_brand: a.$j,
                            external_app_platform: a.Vt,
                            id: a.id,
                            identification_token: a.rVa,
                            is_education_user: a.bWa,
                            is_c4ed_teacher: a.XVa,
                            is_district_teacher: a.aWa,
                            journey: a.Jl,
                            large_avatar_url: a.DWa,
                            last_brand_display_name: a.HWa,
                            last_opened_design: a.KWa,
                            last_tier: a.SWa,
                            locale: a.locale,
                            marketing_email_consent: a.jja,
                            name: a.name,
                            open_id: a.iZa,
                            personal_brand: a.u7,
                            product_variant: a.gN,
                            profession: a.yla,
                            roles: a.uW,
                            signup_date: a.TIa,
                            signup_referrer: a.LH,
                            trialing_subscriptions: a.W5a,
                            user_created: a.G6a,
                            user_cohort: a.F6a,
                            user_id: a.userId,
                            username: a.username,
                            onboarding: a.pFa,
                            is_element_creator_brand_owner: a.cWa
                        })
                    },
                    zYa = function(a, b) {
                        var c, d, e;
                        return {
                            app_name: null === (c = b.app) || void 0 === c ? void 0 : c.name,
                            product_variant: null === (d = b.app) || void 0 === d ? void 0 : d.variant,
                            experience: a.Zj,
                            country_code: null === (e = a.location) || void 0 === e ? void 0 : e.ab,
                            locale: a.locale,
                            brand: a.Ft,
                            experience_brand: a.$j
                        }
                    },
                    L2 = function(a) {
                        return new Date(a.ea.now()).toISOString()
                    },
                    BYa = async function(a, b, c) {
                        await c.handleEvent(new __c.fE({
                            event: b
                        })).catch(async () => {
                            await AYa(a,
                                b)
                        })
                    },
                    AYa = async function(a, b) {
                        b = new __c.PD({
                            event: b,
                            hBa: a.eBa()
                        });
                        await a.MZ.jHa(b)
                    },
                    CYa = function(a, b) {
                        return new Promise((c, d) => {
                            const e = a.createElement("script");
                            e.onload = () => c();
                            e.onerror = () => d(Error("Failed to load URL: " + b));
                            e.src = b;
                            a.body.appendChild(e)
                        })
                    },
                    EYa = function(a) {
                        if (!a.hk) {
                            const b = __c.sC(__c.qC(__c.uC(["hm.js"]), a.config.Rn, !0));
                            a.hk = a.Xia(a.document, `${DYa}${b}`).catch(() => {
                                a.hk = void 0
                            })
                        }
                    },
                    N2 = function(a, b) {
                        a.dataLayer.push({
                            event: "consent_state",
                            consent: {
                                essential: "yes",
                                functionality: M2(b.cL),
                                performance: M2(b.performance),
                                targeting: M2(b.cI),
                                social_media: M2(b.gO),
                                gtm_yandex: M2(b.Gza),
                                gtm_amazon: M2(b.yza),
                                gtm_outbrain: M2(b.Cza),
                                gtm_spotify: M2(b.Eza),
                                gtm_qs: M2(b.Dza),
                                gtm_tiktok_session: M2(b.Fza),
                                gtm_fpc_engagement_event: M2(b.Aza),
                                gtm_innovid: M2(b.Bza),
                                gtm_ben_605: M2(b.zza)
                            }
                        })
                    },
                    GYa = function(a) {
                        if (!a.global.document.getElementById(FYa)) {
                            a.dataLayer.push({
                                event: "gtm.js",
                                "gtm.start": a.ea.now()
                            });
                            var b = a.global.document.createElement("script");
                            b.id = FYa;
                            b.src = `https://www.googletagmanager.com/gtm.js?id=${a.config.containerId}&l=dataLayer`;
                            b.async = !0;
                            b.onerror = () => {
                                a.stop()
                            };
                            a.global.document.head.appendChild(b)
                        }
                    },
                    M2 = function(a) {
                        return a ? "yes" : "no"
                    },
                    HYa = function(a) {
                        const b = {};
                        Object.entries(a).forEach((c) => {
                            var [d, e] = c;
                            void 0 !== e && (b[d] = e)
                        });
                        return b
                    },
                    O2 = function(a) {
                        const b = {};
                        for (const [c, d] of Object.entries(a))
                            if (Array.isArray(d)) 0 !== d.length && (__c.Rr(d) ? b[c] = d : b[c] = d.map((e) => JSON.stringify(O2(e))));
                            else if ("object" === typeof d) b[c] = O2(d);
                        else
                        if ("string" === typeof d) b[c] = d;
                        else if ("number" === typeof d) b[c] = d;
                        else if ("boolean" === typeof d) b[c] = d;
                        else throw new __c.v(d);
                        return b
                    },
                    IYa = function(a) {
                        const b = {};
                        for (const c of Object.entries(a)) {
                            const [d, e] = c;
                            Array.isArray(e) ? "string" === typeof e[0] ? b[d] = e : b[d] = e.map((f) => JSON.stringify(f)) : b[d] = "object" === typeof e ? JSON.stringify(e) : e
                        }
                        return b
                    },
                    JYa = function(a) {
                        var b, c, d;
                        if (null === (b = a.wM) || void 0 === b ? 0 : b.status) {
                            switch (null === (c = a.wM) || void 0 === c ? void 0 : c.status) {
                                case 2:
                                    a = "online";
                                    break;
                                case 1:
                                    a =
                                        "offline";
                                    break;
                                case 3:
                                    return {};
                                default:
                                    throw new __c.v(null === (d = a.wM) || void 0 === d ? void 0 : d.status);
                            }
                            return {
                                network: {
                                    status: a
                                }
                            }
                        }
                        return {}
                    },
                    KYa = __webpack_require__(22188).EH;
                var LYa = new Set("design_create design_first_edited design_open design_opened design_publish editor_template_applied mobile_design_create_enriched new_event_partnership_artwork_created partnership_artwork_created post_publish_dialog_clicked printegration_page_content_selected printegration_page_loaded publish_button_clicked publish_completed publish_endpoint_clicked publish_print_confirm_bleed_continue_clicked publish_print_confirm_order_details_continue_clicked publish_print_funnel_step_selected publish_print_funnel_step_selected_v2 publish_print_margin_check_continue_clicked publish_print_panel_shown publish_print_proof_pdf_download publish_print_proof_review_continue_clicked publish_print_resolution_check_continue_clicked publish_print_shipping_details_continue_clicked signup_completed".split(" "));
                var MYa;
                MYa = class {
                    constructor(a, b, c, d, e, f) {
                        f = void 0 === f ? __c.ec : f;
                        this.MZ = a;
                        this.rJ = b;
                        this.nS = c;
                        this.Lo = d;
                        this.eBa = e;
                        this.ea = f;
                        KYa(async () => {
                            if (this.Lo) {
                                var g = new __c.hE({
                                        uBa: 1 === this.Lo.status
                                    }),
                                    h = await this.rJ;
                                await (null === h || void 0 === h ? void 0 : h.raa(g))
                            }
                        })
                    }
                    static create(a, b, c, d, e) {
                        return new MYa(a, c, b, d, e)
                    }
                    identify(a) {
                        var b, c, d;
                        const e = Object.assign({}, {
                            appName: null === (b = a.gg.app) || void 0 === b ? void 0 : b.name,
                            gN: null === (c = a.gg.app) || void 0 === c ? void 0 : c.variant,
                            Zj: a.Rb.Zj,
                            ab: null === (d = a.Rb.location) || void 0 ===
                                d ? void 0 : d.ab,
                            locale: a.Rb.locale,
                            brand: a.Rb.Ft,
                            $j: a.Rb.$j
                        }, a.rY);
                        a = new __c.LD(Object.assign({}, a, {
                            Rb: new __c.ED(Object.assign({}, a.Rb, {
                                n9: L2(this)
                            })),
                            rY: JSON.stringify(yYa(e))
                        }));
                        return this.dispatchEvent(a)
                    }
                    page(a) {
                        const b = Object.assign({}, zYa(a.Rb, a.gg), a.$h);
                        a = new __c.MD(Object.assign({}, a, {
                            Rb: new __c.ED(Object.assign({}, a.Rb, {
                                n9: L2(this)
                            })),
                            $h: JSON.stringify(b)
                        }));
                        return this.dispatchEvent(a)
                    }
                    track(a) {
                        var b = Object,
                            c = b.assign;
                        var d = a.Rb;
                        d = LYa.has(a.event) ? d.$j : void 0;
                        b = c.call(b, {}, {
                                experience_brand: d
                            },
                            a.$h);
                        a = new __c.ND(Object.assign({}, a, {
                            Rb: new __c.ED(Object.assign({}, a.Rb, {
                                n9: L2(this)
                            })),
                            $h: JSON.stringify(b)
                        }));
                        return this.dispatchEvent(a)
                    }
                    async reset() {
                        const a = await this.rJ;
                        a && this.nS && (await a.m$(new __c.gE({
                            Tta: !0
                        })))
                    }
                    async dispatchEvent(a) {
                        const b = await this.rJ;
                        b && this.nS ? await BYa(this, a, b) : await AYa(this, a)
                    }
                    ki() {}
                };
                __c.lV = {};
                __c.lV.mpa = MYa;
                __c.lV.fBa = function(a) {
                    a = a.split(";");
                    for (let b = 0; b < a.length; b++)
                        if (0 === a[b].trim().indexOf("CAI=")) return !1;
                    return !0
                };
                var NYa, DYa;
                NYa = class {
                    constructor(a, b, c = CYa) {
                        this.document = a;
                        this.config = b;
                        this.Xia = c
                    }
                    async track() {}
                    async identify() {}
                    async page() {}
                    async reset() {}
                    static create(a, b, c) {
                        a = new NYa(a, b);
                        a.ki(c);
                        return a
                    }
                    ki(a) {
                        a.cI && EYa(this)
                    }
                };
                DYa = "https://hm.baidu.com";
                __c.mV = {};
                __c.mV.qpa = NYa;
                var OYa;
                OYa = class {
                    constructor(a, b, c) {
                        this.config = a;
                        this.getUserId = b;
                        this.v_ = c
                    }
                    static async create(a, b, c, d) {
                        d.start();
                        return new OYa(b, c, d)
                    }
                    ki(a) {
                        this.v_.ki(a)
                    }
                    async identify(a) {
                        this.v_.isActive() && a.Rb.userId && this.v_.changeUser(a.Rb.userId)
                    }
                    async page() {}
                    async track() {}
                    async reset() {}
                };
                __c.oV = {};
                __c.oV.rpa = OYa;
                var PYa, FYa;
                PYa = class {
                    constructor(a, b, c) {
                        this.config = a;
                        this.ea = b;
                        this.global = c;
                        this.active = !1;
                        this.dataLayer = [];
                        __c.t(void 0 === c.dataLayer, "dataLayer is already initialized. You might be creating more than 1 instance of GoogleTagManagerPlugin.");
                        c.dataLayer = this.dataLayer
                    }
                    static create(a, b, c, d) {
                        d = void 0 === d ? __c.ec : d;
                        a = new PYa(a, d, c);
                        b.hha && (a.start(), N2(a, b));
                        return a
                    }
                    async identify() {}
                    async page(a) {
                        if (this.active) {
                            var b = {
                                type: "TRACK",
                                Rb: a.Rb,
                                gg: a.gg,
                                xr: a.xr,
                                event: "Loaded a Page",
                                $h: {}
                            };
                            this.track(b);
                            if (a = a.name) b =
                                Object.assign({}, b, {
                                    event: `Viewed ${a} Page`,
                                    $h: {
                                        name: a
                                    }
                                }), this.track(b)
                        }
                    }
                    async track(a) {
                        if (this.active) {
                            var b = Object.assign({}, zYa(a.Rb, a.gg), a.$h, {
                                userId: a.Rb.userId,
                                segmentAnonymousId: a.Rb.yp
                            });
                            a = Object.assign({}, HYa(b), {
                                event: a.event
                            });
                            this.dataLayer.push(a)
                        }
                    }
                    async reset() {}
                    ki(a) {
                        a.hha ? (this.start(), N2(this, a)) : (N2(this, a), this.stop())
                    }
                    start() {
                        this.active = !0;
                        GYa(this)
                    }
                    stop() {
                        this.active = !1
                    }
                };
                FYa = "gtm-plugin-script-tag";
                __c.pV = {};
                __c.pV.oqa = PYa;
                var QYa;
                QYa = class {
                    constructor(a) {
                        this.xH = a
                    }
                    static create(a) {
                        return new QYa(a)
                    }
                    identify() {
                        return Promise.resolve()
                    }
                    page() {
                        return Promise.resolve()
                    }
                    async track(a) {
                        const b = O2(a.$h);
                        this.xH.baa(a.event, b)
                    }
                    async reset() {}
                    ki(a) {
                        a.Fga || this.xH.stop()
                    }
                };
                __c.qV = {};
                __c.qV.vqa = QYa;
                var RYa, VYa, TYa, UYa, SYa;
                RYa = class {
                    constructor(a, b, c, d, e = __c.Zb, f = __c.ec) {
                        this.config = a;
                        this.global = c;
                        this.du = d;
                        this.sLa = e;
                        this.ea = f;
                        this.active = b.Hka
                    }
                    static create(a, b, c, d) {
                        return new RYa(a, b, c, d)
                    }
                    identify() {
                        return Promise.resolve(void 0)
                    }
                    page() {
                        return Promise.resolve(void 0)
                    }
                    async track(a) {
                        if (this.active) {
                            var b;
                            if (b = "undefined" === typeof URLSearchParams ? null : new URLSearchParams(this.global.location.search).get("ovid")) {
                                a = a.event;
                                var c = SYa.get(a);
                                c && (b = {
                                    account_id: this.config.Zra,
                                    project_id: this.config.projectId,
                                    client_name: TYa,
                                    client_version: UYa,
                                    anonymize_ip: !0,
                                    enrich_decisions: !0,
                                    visitors: [{
                                        visitor_id: b,
                                        snapshots: [{
                                            decisions: [],
                                            events: [{
                                                timestamp: this.ea.now(),
                                                uuid: this.sLa(),
                                                key: a,
                                                entity_id: c,
                                                tags: []
                                            }]
                                        }]
                                    }]
                                }, this.sendEvent(b))
                            }
                        }
                    }
                    async reset() {}
                    sendEvent(a) {
                        a = {
                            url: VYa,
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(a)
                        };
                        return this.du.lW(a).then(() => {}).catch(() => {})
                    }
                    ki(a) {
                        this.active = a.Hka
                    }
                };
                VYa = "https://logx.optimizely.com/v1/events";
                TYa = "canva/optimizely-analytics-plugin";
                UYa = "0.0.1";
                SYa = new Map([
                    ["signup_submitted", "17936623469"],
                    ["signup_completed", "17963771082"],
                    ["login_submitted", "17924893243"],
                    ["login_success", "17971061254"],
                    ["password_changed", "17929437843"],
                    ["authenticating_item_clicked", "17971740897"],
                    ["homepage_visit", "17953652549"],
                    ["pre_signup_step_clicked", "17904425976"]
                ]);
                __c.rV = {};
                __c.rV.Rqa = RYa;
                var WYa;
                WYa = class {
                    constructor(a, b, c) {
                        this.OC = b;
                        this.global = c;
                        this.active = !1;
                        a.l9 && (this.active = !0)
                    }
                    static create(a, b, c) {
                        return new WYa(a, b, c)
                    }
                    async identify(a) {
                        var b, c, d, e;
                        if (this.active) {
                            var f = await this.OC.bT();
                            null != f && f.login && f.setProfile && (f.login(null !== (b = a.Rb.userId) && void 0 !== b ? b : ""), b = __c.vC(yYa(a.rY)), f.setProfile(IYa(__c.Sr(Object.assign({}, {
                                app_name: null === (c = a.gg.app) || void 0 === c ? void 0 : c.name,
                                experience: a.Rb.Zj,
                                country_code: null === (d = a.Rb.location) || void 0 === d ? void 0 : d.ab,
                                locale: a.Rb.locale,
                                brand: a.Rb.Ft,
                                experience_brand: a.Rb.$j,
                                product_variant: null === (e = a.gg.app) || void 0 === e ? void 0 : e.variant
                            }, JYa(a.gg), b)))))
                        }
                    }
                    async page(a) {
                        var b, c, d, e;
                        if (this.active) {
                            var f = await this.OC.bT();
                            if (f) {
                                const g = ["utm_source", "utm_medium", "utm_term", "utm_content", "utm_campaign"];
                                if (f.registerPage) {
                                    const h = new URLSearchParams(this.global.location.search),
                                        k = {};
                                    g.forEach((l) => {
                                        const m = h.get(l);
                                        m && (k[l] = m)
                                    });
                                    f.registerPage(Object.assign({}, k, {
                                        referrer: null === (b = a.Rb.page) || void 0 === b ? void 0 : b.referrer,
                                        title: "",
                                        url: null === (c = a.Rb.page) || void 0 === c ? void 0 : c.url,
                                        path: null === (d = a.Rb.page) || void 0 === d ? void 0 : d.path,
                                        search: null === (e = a.Rb.page) || void 0 === e ? void 0 : e.search,
                                        userAgent: a.gg.userAgent
                                    }))
                                }
                                return this.track({
                                    type: "TRACK",
                                    event: "page_visit",
                                    Rb: a.Rb,
                                    gg: a.gg,
                                    $h: {},
                                    xr: a.xr
                                })
                            }
                        }
                    }
                    async track(a) {
                        var b, c, d;
                        if (this.active) {
                            var e = await this.OC.bT();
                            if (null != e) {
                                const f = __c.vC(a.$h);
                                e.track && e.track(a.event, IYa(__c.Sr(Object.assign({}, {
                                    app_name: null === (b = a.gg.app) || void 0 === b ? void 0 : b.name,
                                    experience: a.Rb.Zj,
                                    country_code: null === (c = a.Rb.location) || void 0 === c ? void 0 : c.ab,
                                    locale: a.Rb.locale,
                                    brand: a.Rb.Ft,
                                    experience_brand: a.Rb.$j,
                                    product_variant: null === (d = a.gg.app) || void 0 === d ? void 0 : d.variant
                                }, JYa(a.gg), f))))
                            }
                        }
                    }
                    async reset() {
                        const a = await this.OC.bT();
                        null != a && a.logout && a.logout(!0)
                    }
                    ki(a) {
                        this.active = a.l9;
                        this.OC.ki(a)
                    }
                };
                __c.sV = {};
                __c.sV.jra = WYa;
            }).call(self, self._cdf17aa01cb7a37fe84ed76fc113a158);
        },

        /***/
        89512:
            (_, __, r) => r(40459),

        /***/
        33031:
            (_, __, r) => r(40459),

        /***/
        73978:
            (_, __, r) => r(40459),

        /***/
        49349:
            (_, __, r) => r(40459),

        /***/
        32342:
            (_, __, r) => r(40459),

        /***/
        21734:
            (_, __, r) => r(40459),

        /***/
        31937:
            (_, __, r) => r(40459)

    }
])
//# sourceMappingURL=sourcemaps/34a9d0873b44ce19.js.map