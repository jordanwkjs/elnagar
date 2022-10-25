(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [4235], {

        /***/
        53189: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(2868);
            __web_req__(97924);
            self._cdf17aa01cb7a37fe84ed76fc113a158 = self._cdf17aa01cb7a37fe84ed76fc113a158 || {};
            (function(__c) {
                "use strict";
                var Yr, G = __c.G,
                    E = __c.E,
                    Ja = __c.Ja,
                    I = __c.I,
                    D = __c.D,
                    A = __c.A,
                    jd = __c.jd,
                    kd = __c.kd,
                    P = __c.P,
                    Ka = __c.Ka,
                    w = __c.w,
                    M = __c.M,
                    pd = __c.pd,
                    Ra = __c.Ra,
                    nl = __c.nl,
                    jk = __c.jk,
                    C = __c.C,
                    Q = __c.Q,
                    La = __c.La,
                    md = __c.md,
                    lh = __c.lh,
                    Nj = __c.Nj;
                var Tr;
                __c.Rr = function(a) {
                    return a.every((b) => "object" !== typeof b)
                };
                __c.Sr = function(a) {
                    const b = {};
                    for (const d of Object.keys(a)) {
                        var c = a[d];
                        null != c && (Array.isArray(c) ? (c = __c.Rr(c) ? c : c.map(__c.Sr), c = c.filter(() => !0), b[d] = c) : b[d] = "object" === typeof c ? __c.Sr(c) : c)
                    }
                    return b
                };
                Tr = function(a) {
                    return {
                        experience: a.Zj,
                        country_code: a.ab,
                        locale: a.locale,
                        cohort: a.DJ,
                        brand: a.brand,
                        experience_brand: a.$j,
                        external_app_platform: a.Vt
                    }
                };
                __c.Ur = function(a) {
                    const b = {};
                    for (const c of Object.keys(a)) {
                        const d = a[c];
                        b[c] = d instanceof Object ? JSON.stringify(d) : d
                    }
                    console.table(b);
                    console.log("View non-truncated properties:");
                    console.dir(a)
                };
                var Vr;
                Vr = {
                    product_variant: "web-2"
                };
                __c.Wr = class {
                    constructor(a, b, c) {
                        this.appName = a;
                        this.pp = b;
                        this.Zha = {};
                        this.cia = {};
                        this.aia = {};
                        this.$ha = {};
                        this.bia = new Map;
                        if (c) {
                            var {
                                appName: d,
                                pp: e,
                                Tt: f
                            } = {
                                appName: this.appName,
                                pp: this.pp,
                                Tt: c
                            };
                            a = __c.Sr(Object.assign({}, {
                                app_name: d
                            }, Vr, e && Tr(e)));
                            b = {};
                            const l = {};
                            if (f)
                                for (var g of f) {
                                    const [r, x] = g;
                                    b[`Experiment_${r}`] = x;
                                    l[r] = x
                                }
                            const {
                                Mt: m,
                                Lw: n,
                                vS: q
                            } = {
                                Mt: a,
                                Lw: b,
                                vS: l
                            };
                            this.Zha = m;
                            this.cia = n;
                            this.aia = q;
                            var {
                                pp: h,
                                Tt: k
                            } = {
                                pp: this.pp,
                                Tt: c
                            };
                            g = Object;
                            a = g.assign;
                            if (b = h) b = Tr(h), delete b.cohort, delete b.country_code,
                                b = Object.assign({}, b, {
                                    location: {
                                        country_code: h.ab
                                    },
                                    app: {
                                        variant: Vr.product_variant
                                    }
                                });
                            g = __c.Sr(a.call(g, {}, b));
                            a = {};
                            if (k)
                                for (const r of k) {
                                    const [x, y] = r;
                                    a[x] = y
                                }
                            g.experiments = a;
                            this.$ha = g;
                            this.bia = c
                        }
                    }
                    get Mt() {
                        return this.Zha
                    }
                    get Lw() {
                        return this.cia
                    }
                    get vS() {
                        return this.aia
                    }
                    get lxa() {
                        return this.bia
                    }
                    get Twa() {
                        return this.$ha
                    }
                };
                __c.Xr = class {
                    constructor(a, b) {
                        this.context = a;
                        this.Lo = b;
                        this.Qn = null !== a && void 0 !== a ? a : new __c.Wr
                    }
                    get Mt() {
                        return this.Qn.Mt
                    }
                    get Lw() {
                        return this.Qn.Lw
                    }
                    get vS() {
                        return this.Qn.vS
                    }
                    get AR() {
                        if (null != this.Lo) {
                            var a = this.Lo.status;
                            switch (a) {
                                case 1:
                                    a = "online";
                                    break;
                                case 2:
                                    a = "offline";
                                    break;
                                default:
                                    throw new __c.v(a);
                            }
                            a = {
                                network: {
                                    status: a
                                }
                            }
                        } else a = {};
                        return a
                    }
                    get Rb() {
                        return this.Qn.Twa
                    }
                    initialize() {}
                };
                Yr = __c.Yr = class extends __c.Xr {
                    initialize() {
                        console.log("[ConsoleAnalyticsClient]: initialize")
                    }
                    page() {
                        console.groupCollapsed("[ConsoleAnalyticsClient]: page view tracked");
                        __c.Ur(Object.assign({}, this.Mt, this.AR, this.Lw));
                        console.groupEnd()
                    }
                    identify(a, b) {
                        var {
                            locale: c,
                            ab: d,
                            LH: e
                        } = b;
                        console.groupCollapsed(`[ConsoleAnalyticsClient]: identified user ${a}`);
                        __c.Ur(Object.assign({}, {
                            locale: c,
                            country_code: d,
                            signup_referrer: e
                        }, this.Mt, this.AR));
                        console.groupEnd()
                    }
                    track(a, b) {
                        console.groupCollapsed(`[ConsoleAnalyticsClient]: triggered event ${a}`);
                        __c.Ur(Object.assign({}, this.Mt, this.AR, this.Lw, b));
                        console.groupEnd()
                    }
                    reset() {
                        console.info("[ConsoleAnalyticsClient]: anonymous ID reset")
                    }
                };
                Yr.prototype.ki = __c.ba(53);
                Yr.prototype.Qm = __c.ba(52);
                Yr.prototype.bk = __c.ba(46);
                Yr.prototype.Bv = __c.ba(45);
                __c.Zr = {};
                __c.Zr.zI = Yr;
                var ioa = G(() => [1, "SOURCE", 2, "REMOTE"]);
                __c.$r = E(() => ({
                    type: Ja(1, ioa),
                    id: I(2)
                }));
                __c.joa = E(() => ({
                    Sp: D(1, __c.$r)
                }));
                __c.koa = E(() => ({
                    id: A(1, __c.$r)
                }));
                __c.as = G(() => [1, "VIDEO", 2, "STICKER", 4, "VECTOR_STICKER", 3, "CLIP", 5, "UNKNOWN"]);
                __c.bs = E(() => ({
                    id: I("id", 1),
                    version: jd("version", 2)
                }));
                var loa = E(() => ({
                    version: jd("version", 1),
                    timestamp: kd("timestamp", 2)
                }));
                var moa = E(() => ({
                    id: I("id", 2),
                    Hg: A("draft", 1, loa),
                    version: jd("version", 3)
                }));
                E(() => ({
                    document: A("document", 1, moa),
                    Pc: jd("session", 2),
                    M3a: kd("sessionExpiresAt", 4),
                    token: I("token", 5),
                    throttle: P("throttle", 3)
                }));
                E(() => ({
                    user: I("user", 1),
                    detailed: P("detailed", 2),
                    Q6a: P("v2", 3, !0)
                }));
                E(() => ({
                    userId: I("userId", 1),
                    email: I("email", 2),
                    Fna: Ka("suggestedProductVariant", 4, __c.ll)
                }));
                var noa = E(() => Object.assign({}, {}, {
                    type: w("A?", 2, "LTIV11"),
                    platform: Ja(1, __c.el)
                }));
                var ooa = E(() => Object.assign({}, {}, {
                    type: w("A?", 3, "LTIV13"),
                    platform: Ja(1, __c.el),
                    messageType: I(2),
                    HQa: M(3),
                    email: M(4),
                    BMa: pd(5),
                    EQa: M(7),
                    GQa: M(8),
                    FQa: M(9),
                    m5a: M(6)
                }));
                __c.cs = Ra(() => ({
                    type: [2, noa, 3, ooa]
                }), () => ({}));
                __c.hs = E(() => Object.assign({}, {}, {
                    type: w("type", "SUCCESS", 1, "SUCCESS"),
                    user: A("user", 1, nl),
                    brand: A("brand", 2, jk),
                    Coa: P("userReactivated", 3),
                    Vca: C("authenticationSource", 5, __c.cs)
                }));
                __c.is = E(() => ({}));
                E(() => ({
                    version: jd("version", 1),
                    wUa: I("formPostUrl", 2),
                    rya: (0, __c.wd)("formFields", 3)
                }));
                E(() => ({
                    codes: pd(1)
                }));
                E(() => ({
                    GBa: I("joinUrl", 1),
                    token: I("token", 3),
                    Ut: __c.nd("expiry", 2)
                }));
                E(() => ({}));
                var poa = E(() => ({
                    dma: kd(1),
                    Oea: __c.nd(2),
                    Zea: __c.nd(3),
                    E8: M(4)
                }));
                __c.js = E(() => ({
                    enabled: Q("enabled", 1),
                    eNa: pd("allowedReferrers", 2)
                }));
                __c.ks = E(() => ({
                    bea: M("companyName", 1),
                    BPa: M("companyAddress", 2),
                    QNa: pd("billingContacts", 3)
                }));
                var ls = E(() => ({
                    id: I("id", 1),
                    Gg: kd("creationDate", 2),
                    status: Ja("status", 16, __c.ek),
                    qva: C("deletionDetails", 18, __c.$k),
                    dOa: C("brandDeletionDetails", 19, poa),
                    Gt: M("brandname", 3),
                    mla: P("portfolio", 17),
                    c8: Ka("publicDesignLinks", 23, __c.bk),
                    displayName: M("displayName", 4),
                    vAa: M("industry", 14),
                    Uaa: M("websiteUrl", 21),
                    $G: P("personal", 5),
                    SJ: P("contributor", 6),
                    ZL: P("layoutContributor", 7),
                    yCa: Ka("managementStatus", 20, __c.Wj),
                    GR: Q("contributorAutoapprove",
                        9),
                    eI: P("thirdParty", 10),
                    ew: M("brandColor", 15),
                    ysa: C("apiSettings", 12, __c.js),
                    hda: C("billingInfo", 13, __c.ks),
                    address: C("address", 22, __c.Vj)
                }));
                E(() => ({
                    brand: A("brand", 1, ls),
                    type: M("type", 2)
                }));
                __c.ms = G(() => [0, "ADMIN", 1, "MEMBER"]);
                __c.ns = E(() => ({
                    user: I("user", 1),
                    role: Ja("role", 2, __c.ms)
                }));
                E(() => Object.assign({}, {}, {
                    type: w("type", "SUCCESS", 1, "SUCCESS"),
                    Axa: D("failedDueToMaxMembershipsExceeded", 1, __c.ns)
                }));
                var qoa = E(() => ({
                    BOa: P(1),
                    tOa: P(3),
                    msa: La(4, __c.ms),
                    sta: P(5),
                    yOa: P(6),
                    uOa: P(7)
                }));
                __c.os = E(() => ({
                    id: I("id", 1),
                    brand: I("brand", 2),
                    displayName: I("displayName", 3),
                    description: M("description", 4),
                    W7: P("private", 6),
                    YJ: kd("createdDate", 7),
                    G: C("capabilities", 5, qoa)
                }));
                E(() => Object.assign({}, {}, {
                    type: w("type", "SUCCESS", 1, "SUCCESS"),
                    group: A("group", 1, __c.os),
                    Axa: D("failedDueToMaxMembershipsExceeded", 2, __c.ns)
                }));
                E(() => ({
                    credentials: A("credentials", 1, __c.Nk)
                }));
                E(() => ({
                    Lma: I(1),
                    uri: I(2),
                    token: I(3)
                }));
                E(() => Object.assign({}, {}, {
                    type: w("type", "SUCCESS", 1, "SUCCESS"),
                    user: A("user", 1, nl),
                    TIa: kd("signupDate", 3),
                    vNa: D("associatedBrands", 5, jk),
                    brand: C("brand", 6, jk)
                }));
                E(() => ({}));
                E(() => Object.assign({}, {}, {
                    type: w("type", "SUCCESS", 1, "SUCCESS")
                }));
                E(() => ({}));
                E(() => Object.assign({}, {}, {
                    type: w("type", "SUCCESS", 1, "SUCCESS"),
                    NZ: I("analyticsId", 2),
                    brands: pd("brands", 3)
                }));
                var ps = () => ({
                    brand: I("brand", 1)
                });
                __c.qs = E(() => Object.assign({}, ps(), {
                    type: w("type", "SINGLE_USE", 2, "SINGLE_USE"),
                    email: M("email", 2),
                    role: Ja("role", 3, __c.Aj)
                }));
                var roa = E(() => Object.assign({}, ps(), {
                    type: w("type", "MULTI_USE", 3, "MULTI_USE"),
                    GBa: M("joinUrl", 2)
                }));
                var soa = E(() => Object.assign({}, ps(), {
                    type: w("type", "MULTI_USE_SHORT_TOKEN", 4, "MULTI_USE_SHORT_TOKEN"),
                    token: I("token", 2),
                    Ut: kd("expiry", 3)
                }));
                var rs = Ra(() => ({
                    type: [2, __c.qs, 3, roa, 4, soa]
                }), ps);
                E(() => ({
                    aBa: D("invitations", 1, rs),
                    count: md("count", 2),
                    Hb: M("continuation", 3)
                }));
                __c.ss = E(() => ({
                    user: A("user", 1, lh),
                    email: M("email", 2),
                    locale: I("locale", 3),
                    role: Ja("role", 4, __c.Aj),
                    groups: pd("groups", 5)
                }));
                E(() => ({
                    members: D("members", 1, __c.ss),
                    Hb: M("continuation", 2),
                    count: md("count", 3)
                }));
                var toa = G(() => [1, "ADD", 2, "REMOVE"]);
                var uoa = E(() => ({
                    id: kd("id", 5),
                    brand: I("brand", 1),
                    user: I("user", 2),
                    type: Ja("type", 3, toa),
                    hPa: kd("changeDate", 4)
                }));
                E(() => ({
                    events: D("events", 1, uoa),
                    Hb: M("continuation", 2)
                }));
                __c.ts = G(() => [1, 2, 3]);
                __c.us = G(() => [1, "DEFAULT", 2, "EDUCATION", 3, "EDUCATION_SCHOOL", 4, "EDUCATION_DISTRICT", 5, "CAMPUS_STUDENT", {
                    Aj: !0
                }]);
                var voa = E(() => ({
                    brand: I(1),
                    status: Ja(2, __c.ts),
                    eOa: I(3),
                    YJ: kd(4),
                    vda: Ja(5, __c.us)
                }));
                E(() => ({
                    ema: D(1, voa),
                    Hb: M(2)
                }));
                var woa = E(() => Object.assign({}, {}, {
                    type: w("A?", 1, "SELF_REQUESTED"),
                    user: A(1, lh),
                    status: Ja(2, __c.ts)
                }));
                var xoa = E(() => Object.assign({}, {}, {
                    type: w("A?", 2, "MEMBER_INITIATED"),
                    E8: A(1, lh),
                    status: Ja(2, __c.ts),
                    email: I(3)
                }));
                var yoa = Ra(() => ({
                    type: [1, woa, 2, xoa]
                }), () => ({}));
                E(() => ({
                    b0a: D(3, yoa),
                    Hb: M(2)
                }));
                E(() => ({
                    brands: D("brands", 2, jk),
                    Hb: M("continuation", 3)
                }));
                E(() => ({
                    brands: D(1, jk),
                    uW: (0, __c.xd)(4, __c.Aj),
                    count: md(2),
                    Hb: M(3)
                }));
                var vs = E(() => ({
                    brand: I("brand", 4),
                    group: I("group", 1),
                    user: I("user", 2),
                    role: Ja("role", 3, __c.ms)
                }));
                E(() => ({
                    sja: D("memberships", 1, vs),
                    Hb: M("continuation", 2)
                }));
                E(() => ({
                    groups: D("groups", 1, __c.os),
                    count: md("count", 2),
                    Hb: M("continuation", 3)
                }));
                E(() => ({
                    jwa: pd("emails", 1),
                    zaa: D("users", 2, lh),
                    Hb: M("continuation", 3)
                }));
                E(() => ({}));
                __c.ws = E(() => Object.assign({}, {}, {
                    type: w("A?", 1, "EMAIL_PASSWORD")
                }));
                __c.xs = E(() => Object.assign({}, {}, {
                    type: w("A?", 2, "EMAIL_OTP_CODE")
                }));
                var zoa = E(() => Object.assign({}, {}, {
                    type: w("A?", 3, "EMAIL_OTP_LINK")
                }));
                __c.ys = E(() => Object.assign({}, {}, {
                    type: w("A?", 4, "EMAIL_SSO"),
                    vT: I(1),
                    Uc: P(2),
                    jS: P(3)
                }));
                __c.zs = E(() => Object.assign({}, {}, {
                    type: w("A?", 5, "PHONE_NUMBER_OTP_CODE")
                }));
                __c.As = E(() => Object.assign({}, {}, {
                    type: w("A?", 6, "PHONE_NUMBER_PASSWORD")
                }));
                var Aoa = E(() => Object.assign({}, {}, {
                    type: w("A?", 7, "OAUTH"),
                    z7: La(1, __c.ei)
                }));
                var Boa = Ra(() => ({
                    type: [1, __c.ws, 2, __c.xs, 3, zoa, 4, __c.ys, 5, __c.zs, 6, __c.As, 7, Aoa]
                }), () => ({}));
                __c.Bs = E(() => Object.assign({}, {}, {
                    type: w("A?", 1, "LOGIN")
                }));
                __c.Cs = E(() => Object.assign({}, {}, {
                    type: w("A?", 2, "SIGNUP"),
                    mH: P(1)
                }));
                var Coa = Ra(() => ({
                    type: [1, __c.Bs, 2, __c.Cs]
                }), () => ({}));
                __c.Ds = E(() => ({
                    Ij: D(1, Boa),
                    Yk: A(2, Coa)
                }));
                E(() => ({
                    bw: A("avatar", 1, __c.jh)
                }));
                E(() => ({
                    brand: A("brand", 1, ls)
                }));
                var Doa = G(() => [1, 2, 3]);
                var Eoa = E(() => ({
                    vOa: P(1),
                    wOa: P(6),
                    AOa: P(2),
                    SVa: Ja(11, Doa, 1),
                    msa: La(4, __c.Aj),
                    sta: P(5),
                    COa: P(7),
                    MOa: P(8),
                    UOa: P(9),
                    JOa: P(10, !0),
                    KOa: P(13)
                }));
                E(() => ({
                    brand: A("brand", 1, jk),
                    hda: C("billingInfo", 3, __c.ks),
                    G: C("capabilities", 4, Eoa)
                }));
                var Foa = G(() => [1, 2, 3]);
                E(() => ({
                    domain: I(1),
                    mPa: Ja(2, Foa)
                }));
                E(() => ({
                    domain: I(1),
                    gN: Ka(2, __c.ll),
                    rva: P(3)
                }));
                E(() => ({
                    group: A("group", 1, __c.os)
                }));
                var Goa = E(() => ({
                    platform: Ja("platform", 1, __c.ei),
                    yr: M("externalUserId", 9),
                    valid: P("valid", 2),
                    Dl: La("grantedPermissions", 4, __c.fi),
                    Q0: La("deniedPermissions", 5, __c.fi),
                    username: M("username", 6),
                    $ca: M("avatarUrl", 7),
                    pHa: Q("refreshRecommended", 8)
                }));
                E(() => ({
                    summary: A("summary", 1, Goa)
                }));
                E(() => ({
                    G: A(1, __c.il)
                }));
                E(() => ({
                    user: A("user", 1, nl)
                }));
                E(() => ({
                    user: A("user", 1, lh)
                }));
                E(() => ({
                    ok: P("ok", 1)
                }));
                __c.Es = E(() => ({
                    Ua: I("phoneNumber", 1),
                    ab: I("countryCode", 2),
                    U0: jd("dialingCode", 3),
                    H5: M("nationalNumber", 4)
                }));
                __c.Fs = E(() => Object.assign({}, {}, {
                    type: w("type", "SUCCESS", 1, "SUCCESS"),
                    user: M("user", 2),
                    email: I("email", 1),
                    CK: P("emailVerified", 3)
                }));
                __c.Gs = E(() => ({
                    CK: P("emailVerified", 1)
                }));
                E(() => Object.assign({}, {}, {
                    type: w("type", "SUCCESS", 1, "SUCCESS"),
                    aBa: D("invitations", 1, rs)
                }));
                __c.Hs = E(() => ({
                    token: M(1)
                }));
                __c.Is = E(() => ({
                    token: I("token", 1)
                }));
                E(() => Object.assign({}, {}, {
                    type: w("type", "SUCCESS", 1, "SUCCESS")
                }));
                E(() => ({}));
                __c.Js = E(() => Object.assign({}, {}, {
                    type: w("type", "SUCCESS", 1, "SUCCESS"),
                    token: I("token", 1)
                }));
                E(() => ({}));
                E(() => ({}));
                E(() => Object.assign({}, {}, {
                    type: w("type", "ERROR", 2, "ERROR"),
                    message: I("message", 1),
                    MVa: P("invalidSamlIdpCertificate", 2),
                    Tva: M("domainDnsToken", 3),
                    INa: P("awaitingTokenVerification", 4),
                    iSa: P("domainAlreadyOwned", 5),
                    NVa: P("invalidSamlIdpIssuer", 6),
                    qSa: P("duplicateSamlIdpIssuer", 7)
                }));
                E(() => ({
                    $Aa: C("invitation", 1, rs)
                }));
                E(() => Object.assign({}, {}, {
                    type: w("type", "SUCCESS", 1, "SUCCESS"),
                    j6a: A("updatedBrand", 1, jk),
                    members: D("members", 2, __c.ss)
                }));
                E(() => ({}));
                E(() => Object.assign({}, {}, {
                    type: w("type", "SUCCESS", 1, "SUCCESS"),
                    brand: A("brand", 1, ls)
                }));
                E(() => Object.assign({}, {}, {
                    type: w("type", "SUCCESS", 1, "SUCCESS"),
                    l6a: C("updatedMembership", 1, vs)
                }));
                E(() => Object.assign({}, {}, {
                    type: w("type", "SUCCESS", 1, "SUCCESS"),
                    group: A("group", 1, __c.os)
                }));
                E(() => Object.assign({}, {}, {
                    type: w("type", "SUCCESS", 1, "SUCCESS"),
                    user: A("user", 1, nl),
                    S6a: P("verificationEmailSent", 2),
                    LZa: P("passwordUpdated", 15),
                    RZa: P("phoneNumberUpdated", 13),
                    O6a: P("usernameUpdated", 5),
                    ZRa: P("displayNameUpdated", 6),
                    hUa: P("firstNameUpdated", 9),
                    JWa: P("lastNameUpdated", 10),
                    hXa: P("localeUpdated", 7),
                    j_a: P("professionUpdated", 8),
                    k_a: P("professionalRoleUpdated", 11),
                    NXa: P("mfaEnabledUpdated", 14),
                    P5a: P("totpUpdated", 17),
                    uWa: P("journeyRoleUpdated",
                        12),
                    zMa: P("a11ySettingsUpdated", 16)
                }));
                E(() => Object.assign({}, {}, {
                    type: w("A?", 1, "SUCCESS")
                }));
                E(() => Object.assign({}, {}, {
                    type: w("A?", 1, "SUCCESS"),
                    userId: M(3),
                    email: M(4),
                    Fna: Ka(5, __c.ll)
                }));
                __c.Ks = E(() => ({}));
                E(() => ({
                    token: I("token", 1)
                }));
                __c.Ls = E(() => Object.assign({}, {}, {
                    type: w("A?", 1, "SUCCESS"),
                    token: I(1)
                }));
                __c.Ms = E(() => Object.assign({}, {}, {
                    type: w("type", "ERROR", 2, "ERROR"),
                    endUserMessage: M("endUserMessage", 1),
                    h$: M("ssoRedirectPath", 2),
                    Xb: M("ssoBrand", 4),
                    zfa: P("emailNotAvailable", 3)
                }));
                __c.Ns = E(() => Object.assign({}, {}, {
                    type: w("type", "SUCCESS", 1, "SUCCESS"),
                    user: A("user", 1, nl),
                    redirect: M("redirect", 3),
                    brand: A("brand", 4, jk),
                    PLa: M("xatToken", 5),
                    Dsa: M("attToken", 7),
                    aa: M("documentId", 6),
                    Vj: md("documentVersion", 8)
                }));
                __c.Os = E(() => ({
                    Xu: I(1),
                    LAa: I(2),
                    aha: I(4),
                    bha: I(5),
                    yVa: M(6),
                    eUa: M(7)
                }));
                var Hoa = E(() => ({
                    iz: jd(1),
                    hz: jd(2),
                    Ux: jd(7),
                    Ju: jd(3),
                    Sx: jd(4),
                    Oy: __c.id(5),
                    url: I(6),
                    Eh: __c.nd(8)
                }));
                __c.Ioa = E(() => ({
                    id: I(1),
                    status: I(2),
                    uh: pd(3),
                    Dh: D(13, Hoa),
                    Haa: pd(5),
                    title: M(6),
                    Ic: md(7),
                    Mh: __c.ld(12),
                    width: jd(8),
                    height: jd(9),
                    contentType: I(10),
                    description: M(11)
                }));
                var Joa = G(() => [1, 2], 1);
                __c.Koa = E(() => Object.assign({}, {
                    nAa: Q("includeFiles", 31),
                    zVa: Q("includeAnimatedPreviews", 32),
                    DVa: Q("includeSourceFile", 33),
                    pAa: Q("includePosterframes", 34),
                    rAa: Q("includeTimelines", 37),
                    BVa: Q("includeColorInfo", 38),
                    UXa: Q("mintAccessTokens", 39),
                    wca: pd("accessTokens", 40),
                    XTa: La("fileRefModes", 35, Joa),
                    nua: La("containers", 36, __c.ki)
                }, {
                    type: w("type", "IDS", 2, "IDS"),
                    Sp: pd("ids", 1),
                    qg: Q("restrictedAccess", 2),
                    Fv: Q("trashed", 3),
                    WXa: P("mintVideoUrls",
                        4),
                    VXa: P("mintVideoFiles", 5)
                }));
                E(() => ({
                    video: A(1, Nj)
                }));
                __c.Ps = E(() => ({
                    params: (0, __c.wd)(1),
                    OV: I(2),
                    iGa: I(3)
                }));
                var Loa = E(() => ({
                    GZa: jd(1),
                    sOa: kd(2),
                    rOa: kd(3),
                    OV: I(4)
                }));
                var Moa = E(() => ({
                    JZa: D(1, Loa)
                }));
                E(() => ({
                    video: A(1, Nj),
                    gLa: C(2, __c.Ps),
                    cYa: C(3, Moa)
                }));
                E(() => ({
                    mc: D(1, Nj),
                    Hb: M(2)
                }));
                E(() => ({
                    mc: D(1, Nj)
                }));
                E(() => ({
                    video: A(1, Nj)
                }));
                E(() => ({
                    brand: I(1),
                    user: I(2),
                    H5a: kd(3),
                    K5a: jd(4)
                }));
                E(() => ({
                    video: A(1, Nj)
                }));
                E(() => ({
                    video: A(1, Nj)
                }));
                E(() => ({
                    video: A(1, Nj)
                }));
            }).call(self, self._cdf17aa01cb7a37fe84ed76fc113a158);
        }

    }
])
//# sourceMappingURL=sourcemaps/038ae732124fcbcb.js.map