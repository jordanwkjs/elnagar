(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [1707], {

        /***/
        60628: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(2868);
            __web_req__(4252);
            __web_req__(97924);
            __web_req__(53189);
            self._cdf17aa01cb7a37fe84ed76fc113a158 = self._cdf17aa01cb7a37fe84ed76fc113a158 || {};
            (function(__c) {
                "use strict";
                var ol = __c.ol,
                    G = __c.G,
                    E = __c.E,
                    M = __c.M,
                    D = __c.D,
                    P = __c.P,
                    A = __c.A,
                    Ka = __c.Ka,
                    Q = __c.Q,
                    I = __c.I,
                    Eh = __c.Eh,
                    nd = __c.nd,
                    jd = __c.jd,
                    C = __c.C,
                    La = __c.La,
                    pd = __c.pd,
                    zr = __c.zr;
                __c.tp.prototype.Jh = ol(27, function(a) {
                    return "string" === typeof a ? a ? new __c.ip([new __c.fp(a)], a.length, 0, 0) : __c.jp : new __c.ip([new __c.Ym(a)], 0, 1, 0)
                });
                __c.Pp.prototype.Jh = ol(26, function(a, b) {
                    return this.Kd().range(a, b).ba()
                });
                __c.Vp.prototype.Jh = ol(25, function(a, b) {
                    var c;
                    void 0 === a && (a = this.cells.EK());
                    void 0 === b && (b = this.attrs.EK());
                    if (void 0 === d) var d = null === (c = this.Aa) || void 0 === c ? void 0 : c.EK;
                    __c.t(!this.Aa === !d);
                    "string" === typeof a && (a = this.cells.Jh(a));
                    return new __c.Rp(a, b, d)
                });
                __c.$p.prototype.Jh = ol(24, function(a) {
                    return this.domain.Jh(a)
                });
                __c.cq.prototype.Jh = ol(23, function(a) {
                    return this.domain.Jh(a)
                });
                var Qs = {
                    width: -1,
                    height: -1,
                    units: 4
                };
                __c.Rs = G(() => [13, "A", 12, "I", 4, "C", 9, "D", 15, "B", 16, "H", 11, "E", 1, "F", 5, "M", 14, "G", 2, "K", 7, "R", 10, "X", 6, "S", 8, "T"]);
                var Noa = G(() => [1, "A", 2, "R"]);
                var Ss = G(() => [1, "MERGE", 2, "REPLACE"]);
                E(() => ({
                    Hb: M("continuation", 1),
                    media: D("media", 2, __c.Ri)
                }));
                var Ooa = E(() => ({
                    background: P("background", 1),
                    Pea: P("cutout", 2),
                    isolated: P("isolated", 3),
                    ela: P("photoholder", 4),
                    Vna: P("textholder", 5),
                    Yla: P("repeating", 6),
                    Nla: P("recolorable", 7),
                    colorSpace: M("colorSpace", 8)
                }));
                var Poa = E(() => ({
                    data: A("data", 1, __c.Di),
                    AWa: Ka("keywordsUpdatePolicy", 2, Ss),
                    c5a: Ka("superKeywordsUpdatePolicy", 3, Ss),
                    b5a: Ka("superKeywords2UpdatePolicy", 4, Ss),
                    rTa: Ka("ethnicitiesUpdatePolicy", 5, Ss),
                    PTa: Ka("facesUpdatePolicy", 6, Ss),
                    bQa: Ka("conceptUpdatePolicy", 7, Ss)
                }));
                var Qoa = E(() => ({
                    data: A("data", 1, __c.Fi),
                    nPa: Q("clearFeatured", 2)
                }));
                var Roa = E(() => ({
                    tU: (0, __c.Ad)("localizedMetadata", 1, __c.Gi)
                }));
                var Soa = E(() => ({
                    data: A("data", 1, __c.Hi)
                }));
                var Toa = E(() => ({
                    id: M(9),
                    mimeType: M(10),
                    tc: I(1),
                    key: I(2),
                    quality: __c.Ja(3, Eh),
                    W: P(4),
                    width: __c.md(5),
                    height: __c.md(6),
                    uF: nd(7),
                    dc: Q(8)
                }));
                var Uoa = E(() => ({
                    Oxa: D("files_", 2, Toa)
                }));
                var Voa = E(() => ({
                    id: M(3),
                    mimeType: M(4),
                    tc: I(1),
                    key: I(2)
                }));
                var Woa = E(() => ({
                    xla: D("processedFiles", 1, __c.yi),
                    yGa: D("processedFiles_", 2, Voa)
                }));
                E(() => ({
                    id: I("id", 1),
                    version: jd("version", 2),
                    commit: Q("commit", 3),
                    reset: Q("reset", 4),
                    BYa: Q("newImport", 5),
                    Mha: Ka("importState", 7, __c.Bh),
                    jAa: M("importMessage", 8),
                    status: Ka("status", 9, __c.ui),
                    hAa: Ka("importFailureType", 38, __c.vi),
                    Sla: M("rejectionReason", 10),
                    quality: __c.md("quality", 11),
                    lJ: Ka("ageRating", 12, __c.wi),
                    QF: M("importVersion", 13),
                    xVa: nd("importSize", 14),
                    style: C("style", 15, Ooa),
                    RR: Q("deactivated", 17),
                    wu: Q("listed", 19),
                    Gk: C("spritesheetMetadata",
                        24, __c.Oh),
                    aDa: La("mintUrls", 25, Eh),
                    locale: M("locale", 26),
                    BN: M("reviewedBy", 27),
                    O3a: Ka("setOperation", 28, Noa),
                    set: M("set", 29),
                    Ed: C("contentMetadata", 30, Poa),
                    $q: C("colorInfo", 31, __c.Ei),
                    files: C("files", 32, Uoa),
                    yGa: C("processedFiles_", 33, Woa),
                    zC: C("qualityMetadata", 35, Qoa),
                    tU: C("localizedMetadata", 36, Roa),
                    Qca: C("artistMetadata", 37, Soa),
                    pE: M("anonToken", 39)
                }));
                __c.Ts = E(() => ({
                    media: D("media", 1, __c.Ri)
                }));
                E(() => ({
                    media: I("media", 1),
                    add: D("add", 2, __c.Qi),
                    remove: D("remove", 3, __c.Pi),
                    w4a: Q("skipUnrestricted", 4)
                }));
                E(() => ({
                    media: I("media", 1),
                    rules: D("rules", 2, __c.Qi),
                    x4a: Q("skippedUnrestricted", 3)
                }));
                E(() => ({
                    OV: I("postUrl", 1),
                    rya: (0, __c.wd)("formFields", 2)
                }));
                E(() => ({
                    id: I(1),
                    pE: I(2)
                }));
                var Us = G(() => [0, "LOSSLESS", 1, "EDITING_AFFECTED", 2, "RENDERING_AFFECTED", 3, "UNREPRESENTABLE"]);
                var Xoa = G(() => [1, "SINGLE", 2, "COLLAB"]);
                __c.Vs = E(() => ({}));
                E(() => ({
                    xja: P("modified", 1)
                }));
                E(() => ({
                    xja: P("modified", 1)
                }));
                E(() => ({}));
                E(() => ({
                    document: A("document", 1, __c.mj),
                    rc: __c.Ja("accessRole", 3, __c.ih)
                }));
                E(() => ({
                    Wi: A("acl", 1, __c.gj)
                }));
                var Yoa = E(() => ({
                    Uj: I(1),
                    image: A(2, __c.mh)
                }));
                E(() => ({
                    images: D(1, Yoa),
                    Hb: M(2)
                }));
                E(() => ({
                    Aw: D("documents", 1, __c.mj),
                    CMa: (0, __c.xd)("accessRoles", 3, __c.ih),
                    Hb: M("continuation", 2)
                }));
                var Zoa = G(() => [1, 2]);
                var $oa = E(() => ({
                    id: I(1),
                    zb: A(2, __c.Ti),
                    origin: __c.Ja(3, Zoa),
                    C4a: __c.kd(4),
                    aVa: nd(7),
                    reason: M(5),
                    IOa: P(6)
                }));
                E(() => ({
                    Aw: D(1, $oa),
                    Hb: M(2)
                }));
                E(() => ({
                    Wi: A("acl", 1, __c.gj)
                }));
                __c.Ws = E(() => ({
                    timestamp: __c.kd(2),
                    version: jd(3),
                    zb: A(4, __c.Ti),
                    reason: M(5)
                }));
                E(() => ({
                    t0a: D(1, __c.Ws)
                }));
                E(() => ({
                    Bn: A(1, __c.Ws)
                }));
                E(() => ({
                    tags: pd("tags", 1)
                }));
                E(() => ({}));
                E(() => ({}));
                E(() => ({}));
                Object.assign({}, __c.coa, {
                    top: 0,
                    left: 0,
                    width: 100,
                    height: 100,
                    url: "https://www.youtube.com/watch?v=J---aiyznGQ",
                    ra: 100,
                    Ca: 100
                });
                Object.assign({}, __c.foa, {
                    url: "https://www.youtube.com/watch?v=J---aiyznGQ",
                    ra: 360,
                    Ca: 360
                });
                var apa = Object.assign({}, __c.Zna, {
                        app: {
                            id: "AAAAAAAAAA1",
                            version: 1
                        }
                    }),
                    bpa = Object.assign({}, __c.Sna, {
                        $b: [Object.assign({}, __c.Jr, {
                            top: 0,
                            left: 0,
                            width: 100,
                            height: 100,
                            fill: Object.assign({}, zr, {
                                color: "#000000"
                            })
                        })],
                        top: 0,
                        left: 0,
                        width: 100,
                        height: 100,
                        Ca: 100,
                        ra: 100
                    });
                Object.assign({}, bpa, {
                    Nz: apa
                });
                Object.assign({}, __c.Gr, {
                    $b: [],
                    top: 0,
                    left: 0,
                    width: 100,
                    height: 100,
                    Ca: 100,
                    ra: 100,
                    Ta: {
                        top: 0,
                        left: 0,
                        width: 100,
                        height: 100
                    },
                    bd: new Map,
                    data: [],
                    labels: [],
                    config: Object.assign({}, __c.Yna)
                });
                Object.assign({}, __c.Una, {
                    cells: new Map([
                        ["a", {
                            fill: zr
                        }]
                    ]),
                    N: Object.assign({}, __c.Tna, {
                        template: [
                            ["a"]
                        ],
                        Zq: ["1fr"],
                        Qs: ["1fr"]
                    }),
                    top: 0,
                    left: 0,
                    width: 100,
                    height: 100
                });
                var cpa = {
                        type: "TEXT",
                        text: __c.Tq.Jh("\n"),
                        Cd: __c.Dr
                    },
                    dpa = {
                        type: "TEXT3",
                        text: __c.xr.domain.Jh("\n")
                    },
                    Xs = {
                        fill: zr,
                        content: Object.assign({}, cpa),
                        Cp: {
                            Ob: void 0,
                            Nb: void 0,
                            Ub: void 0,
                            Sb: void 0
                        },
                        borderColor: {
                            Ob: void 0,
                            Nb: void 0,
                            Ub: void 0,
                            Sb: void 0
                        },
                        Un: {
                            Ob: void 0,
                            Nb: void 0,
                            Ub: void 0,
                            Sb: void 0
                        },
                        Dd: 2
                    },
                    Ys = {
                        $i: new Map,
                        height: 32,
                        minHeight: 0
                    },
                    epa = Object.assign({}, __c.Wna, {
                        columns: [{
                            id: "A",
                            width: 48
                        }, {
                            id: "B",
                            width: 48
                        }, {
                            id: "C",
                            width: 48
                        }, {
                            id: "D",
                            width: 48
                        }],
                        rows: [Object.assign({}, Ys, {
                            $i: new Map([
                                ["A", "A1"],
                                ["B",
                                    "B1"
                                ],
                                ["C", "C1"],
                                ["D", "D1"]
                            ])
                        }), Object.assign({}, Ys, {
                            $i: new Map([
                                ["A", "A2"],
                                ["B", "B2"],
                                ["C", "C2"],
                                ["D", "D2"]
                            ])
                        }), Object.assign({}, Ys, {
                            $i: new Map([
                                ["A", "A3"],
                                ["B", "B3"],
                                ["C", "C3"],
                                ["D", "D3"]
                            ])
                        })],
                        cellPadding: 12,
                        borderStyle: {
                            color: "#000000",
                            weight: 4,
                            Re: []
                        }
                    }),
                    Zs = {
                        cells: new Map([
                            ["A1", Xs],
                            ["B1", Xs],
                            ["C1", Xs],
                            ["D1", Xs],
                            ["A2", Xs],
                            ["B2", Xs],
                            ["C2", Xs],
                            ["D2", Xs],
                            ["A3", Xs],
                            ["B3", Xs],
                            ["C3", Xs],
                            ["D3", Xs]
                        ]),
                        N: epa
                    };
                Object.assign({}, __c.Vna, Zs, {
                    top: 0,
                    left: 0,
                    width: 308,
                    height: 184,
                    ra: 308,
                    Ca: 184
                });
                Object.assign({}, __c.eoa, Zs, {
                    cells: new Map(Array.from(Zs.cells, (a) => {
                        var [b, c] = a;
                        return [b, Object.assign({}, c, {
                            content: dpa
                        })]
                    }))
                });
                Object.assign({}, __c.Kr, {
                    top: 0,
                    left: 0,
                    height: 16,
                    width: 16,
                    text: __c.Tq.Jh("\n"),
                    Am: 1
                });
                var $s = Object.assign({}, __c.Br, {
                    media: {
                        id: "MAAAAAAAAA1",
                        version: 1
                    },
                    Rd: {
                        top: 0,
                        left: 0,
                        width: 100,
                        height: 100,
                        rotation: 0
                    }
                });
                Object.assign({}, __c.Rna, {
                    video: "VAAAAAAAAA1",
                    Rd: {
                        top: 0,
                        left: 0,
                        width: 100,
                        height: 100,
                        rotation: 0
                    }
                });
                var at = Object,
                    fpa = at.assign,
                    gpa = new Map,
                    bt, ct = {},
                    dt = Object.assign({}, ct),
                    hpa = void 0 === ct.Cg ? {
                        type: "INTERPOLATE",
                        colorSpace: 1,
                        from: "#ff0000",
                        to: "#00ff00"
                    } : ct.Cg,
                    ipa = void 0 === ct.label ? "" : ct.label,
                    jpa = void 0 === ct.values ? ["10", "20", "30"] : ct.values,
                    kpa = (delete dt.Cg, delete dt.label, delete dt.values, dt);
                bt = Object.assign({}, __c.Er, {
                    Cg: hpa,
                    label: ipa,
                    values: jpa
                }, kpa);
                fpa.call(at, {}, __c.Gr, {
                    top: 450,
                    left: 200,
                    height: 100,
                    width: 400,
                    Ta: {
                        top: 450,
                        left: 200,
                        height: 100,
                        width: 400
                    },
                    Ca: 100,
                    ra: 400,
                    labels: ["A", "B", "C"],
                    bd: gpa,
                    data: [bt],
                    config: __c.Hr,
                    $b: []
                });
                Object.assign({}, __c.$na, {
                    top: 0,
                    left: 0,
                    width: 100,
                    height: 3,
                    weight: 3,
                    color: "#00c4cc"
                });
                Object.assign({}, __c.Jr, {
                    top: 0,
                    left: 0,
                    width: 100,
                    height: 100,
                    fill: Object.assign({}, zr, {
                        image: $s
                    })
                });
                new __c.Fh({
                    url: "fake.png",
                    width: 200,
                    height: 200,
                    W: !1,
                    dc: !1
                });
                var lpa = Object.assign({}, __c.boa, {
                    fill: Object.assign({}, zr, {
                        color: "#3b5bdb"
                    }),
                    d: "M50 0 L100 100 L0 100 Z"
                });
                Object.assign({}, __c.aoa, {
                    top: 0,
                    left: 0,
                    width: 100,
                    height: 100,
                    viewBox: {
                        top: 0,
                        left: 0,
                        width: 100,
                        height: 100
                    },
                    Va: [lpa]
                });
                new __c.Ug({
                    top: 0,
                    left: 0,
                    width: 100,
                    height: 100
                });
                __c.Tq.Jh("\n");
                __c.xr.domain.Jh("\n");
                var mpa = Object.assign({}, __c.Lr, {
                    elements: []
                });
                Object.assign({}, mpa, {
                    F: Qs
                });
                var npa = Object.assign({}, __c.Qr, {
                    doctype: Object.assign({}, __c.Pr, {
                        width: 800,
                        height: 600,
                        units: 4
                    }),
                    title: "My document",
                    F: {
                        width: 800,
                        height: 600,
                        units: 4
                    }
                });
                Object.assign({}, npa, {
                    doctype: Object.assign({}, __c.Pr, {
                        width: -1,
                        height: -1,
                        units: 4
                    }),
                    F: Qs
                });
                Object.assign({}, __c.hoa, {
                    doctype: Object.assign({}, __c.Pr, {
                        width: -1,
                        height: -1,
                        units: 4
                    }),
                    title: "My document",
                    F: {
                        width: -1,
                        height: -1,
                        units: 4
                    },
                    Oi: new Map
                });
                Object.assign({}, __c.Mr);
                Object.assign({}, __c.doa, {
                    audio: "aAAAAAAAAA1"
                });
                Object.assign({}, __c.goa, {
                    bd: Object.assign({}, __c.Or),
                    type: "chart",
                    data: [],
                    config: __c.Hr
                });
                Object.assign({}, zr, {
                    image: $s
                });
                __c.et = E(() => ({
                    gda: P("batch", 1),
                    refs: pd("refs", 2),
                    Sp: pd("ids", 3),
                    j$: Q("staging", 4),
                    Ks: M("projection", 5),
                    lN: La("qualities", 6, Eh),
                    aa: M("documentId", 7),
                    OF: Q("ignoreForbidden", 8),
                    wca: pd("accessTokens", 9),
                    YFa: Q("pendingHighRes", 11)
                }));
                __c.opa = E(() => ({
                    id: I("id", 1),
                    j$: Q("staging", 2),
                    Ks: M("projection", 3),
                    lN: La("qualities", 4, Eh),
                    Oha: Q("includeImportFileUrl", 5),
                    lAa: Q("includeAllLocales", 6),
                    Lf: M("accessToken", 7),
                    pE: M("anonToken", 8)
                }));
                __c.ft = E(() => ({
                    Lha: M("importBucket", 1),
                    importKey: M("importKey", 2),
                    AT: M("importFilename", 3),
                    QF: M("importVersion", 4),
                    TR: M("design", 5),
                    uva: __c.md("designVersion", 6),
                    type: Ka("type", 7, __c.ti),
                    qg: Q("restrictedAccess", 8),
                    wu: Q("listed", 9),
                    aDa: La("mintUrls", 10, Eh),
                    locale: M("locale", 11),
                    vxa: C("externalRef", 13, __c.Ki),
                    dJa: M("sourceMedia", 14),
                    Lf: M("accessToken", 16),
                    appId: M("appId", 15)
                }));
                E(() => ({
                    fileSize: nd("fileSize", 1),
                    file: M("file", 2),
                    p0a: Q("restricted", 3),
                    wu: Q("listed", 4),
                    lN: La("qualities", 5, Eh),
                    KTa: Ka("externalRefProvider", 6, __c.Ji),
                    LTa: M("externalRefProviderGroupId", 9),
                    JTa: M("externalRefId", 7),
                    dJa: M("sourceMedia", 10),
                    Lf: M("accessToken", 12),
                    pE: M("anonToken", 13),
                    appId: M("appId", 11),
                    body: C("body", 8, __c.ft)
                }));
                E(() => ({
                    QF: I("importVersion", 1),
                    mimeType: M("mimeType", 2),
                    gWa: Q("isPaid", 3),
                    t4a: Q("skipReview", 5),
                    y_a: M("rasterizationColor", 6),
                    cRa: Q("disableRemoveBackground", 7),
                    g_a: Q("prioritiseColorExtraction", 8),
                    pE: M("anonToken", 9)
                }));
                E(() => ({
                    media: A("media", 1, __c.Ri)
                }));
                E(() => ({
                    token: I("token", 1)
                }));
                E(() => ({
                    ref: C(1, __c.Ai)
                }));
                E(() => ({}));
                E(() => ({}));
                E(() => ({}));
                E(() => ({}));
                __c.gt = E(() => ({
                    rg: I("schema", 10),
                    content: A("content", 1, __c.gh),
                    version: jd("version", 2),
                    timestamp: __c.kd("timestamp", 3),
                    $Ka: P("untouched", 13),
                    nda: jd("bodyCount", 14),
                    Vh: jd("pageCount", 5),
                    xZa: __c.od("pageHashes", 16),
                    Hr: A("imageSets", 8, __c.kj),
                    Sca: M("associatedMedia", 9),
                    xPa: Ka("collaborationMode", 15, Xoa)
                }));
                __c.ht = E(() => ({
                    id: I("id", 1),
                    yV: I("owningBrand", 10),
                    Gg: __c.kd("creationDate", 2),
                    origin: C("origin", 9, __c.Si),
                    extensions: A("extensions", 3, __c.hh),
                    tags: pd("tags", 5),
                    Wi: A("acl", 6, __c.gj),
                    Wz: P("brandTemplate", 13),
                    gYa: M("narrationId", 15),
                    Hg: A("draft", 4, __c.gt),
                    version: jd("version", 7),
                    timestamp: nd("timestamp", 8),
                    qua: (0, __c.vd)("contributors", 12)
                }));
                __c.it = E(() => ({
                    document: A("document", 1, __c.ht),
                    Pc: jd("session", 4),
                    uua: Ka("conversionResult", 5, Us)
                }));
                __c.jt = E(() => ({
                    document: A("document", 1, __c.ht),
                    fonts: D("fonts", 2, __c.bs),
                    IXa: D("mediaMap", 3, __c.Qh),
                    mc: D("videos", 4, __c.Xh),
                    audio: D("audio", 5, __c.bi),
                    embeds: D("embeds", 6, __c.ci),
                    rc: __c.Ja("accessRole", 7, __c.ih),
                    oQa: M("conversionLoss", 8),
                    uua: Ka("conversionResult", 9, Us)
                }));
                __c.kt = E(() => ({
                    fonts: D("fonts", 2, __c.bs),
                    VK: D("fontFiles", 7, __c.xh),
                    media: D("media", 3, __c.Qh),
                    mc: D("videos", 4, __c.Xh),
                    audio: D("audio", 5, __c.bi),
                    embeds: D("embeds", 6, __c.ci),
                    Hb: M("continuation", 1)
                }));
                __c.lt = E(() => ({}));
                __c.mt = E(() => ({}));
            }).call(self, self._cdf17aa01cb7a37fe84ed76fc113a158);
        },

        /***/
        3424:
            (_, __, r) => r(60628),

        /***/
        19280:
            (_, __, r) => r(60628),

        /***/
        78025:
            (_, __, r) => r(60628),

        /***/
        87820:
            (_, __, r) => r(60628)

    }
])
//# sourceMappingURL=sourcemaps/4335f69780c96d79.js.map