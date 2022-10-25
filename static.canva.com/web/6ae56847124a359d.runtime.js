(() => {
    "use strict";
    var e, t, r, s, c, a, d, n = {},
        f = {};

    function o(e) {
        var t = f[e];
        if (void 0 !== t) return t.exports;
        var r = f[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return n[e].call(r.exports, r, r.exports, o), r.loaded = !0, r.exports
    }
    o.m = n, o.amdD = function() {
        throw new Error("define cannot be used indirect")
    }, o.amdO = {}, e = [], o.O = (t, r, s, c) => {
        if (!r) {
            var a = 1 / 0;
            for (l = 0; l < e.length; l++) {
                for (var [r, s, c] = e[l], d = !0, n = 0; n < r.length; n++)(!1 & c || a >= c) && Object.keys(o.O).every((e => o.O[e](r[n]))) ? r.splice(n--, 1) : (d = !1, c < a && (a = c));
                if (d) {
                    e.splice(l--, 1);
                    var f = s();
                    void 0 !== f && (t = f)
                }
            }
            return t
        }
        c = c || 0;
        for (var l = e.length; l > 0 && e[l - 1][2] > c; l--) e[l] = e[l - 1];
        e[l] = [r, s, c]
    }, o.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return o.d(t, {
            a: t
        }), t
    }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, o.t = function(e, s) {
        if (1 & s && (e = this(e)), 8 & s) return e;
        if ("object" == typeof e && e) {
            if (4 & s && e.__esModule) return e;
            if (16 & s && "function" == typeof e.then) return e
        }
        var c = Object.create(null);
        o.r(c);
        var a = {};
        t = t || [null, r({}), r([]), r(r)];
        for (var d = 2 & s && e;
            "object" == typeof d && !~t.indexOf(d); d = r(d)) Object.getOwnPropertyNames(d).forEach((t => a[t] = () => e[t]));
        return a.default = () => e, o.d(c, a), c
    }, o.d = (e, t) => {
        for (var r in t) o.o(t, r) && !o.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, o.f = {}, o.e = e => Promise.all(Object.keys(o.f).reduce(((t, r) => (o.f[r](e, t), t)), [])), o.u = e => 9642 === e ? "5daa5ab35ab7b06e.vendor.js" : 7599 === e ? "0216c82269aec4af.vendor.js" : 7653 === e ? "c541f90421439d26.js" : 3675 === e ? "cca4455eeaddf811.js" : 4235 === e ? "038ae732124fcbcb.js" : 1707 === e ? "4335f69780c96d79.js" : 9491 === e ? "71d79546e06eea7a.js" : 191 === e ? "b3b70fa6f8175727.js" : 1569 === e ? "c63a42726033884b.js" : 2623 === e ? "45a21faef897821c.js" : 698 === e ? "33255789839df0c1.vendor.js" : 7351 === e ? "da7dc860d325212f.js" : 4813 === e ? "f9f05c26fca29cc8.vendor.js" : 4174 === e ? "2ee389f13c804c3b.js" : 5602 === e ? "026d25f90a1d93a7.vendor.js" : 7651 === e ? "4460f195f7a54847.js" : 1926 === e ? "57fae7a671c9c5fa.js" : 3724 === e ? "06b545263fc19ee1.js" : 7444 === e ? "db27cc17bc319ea5.js" : 909 === e ? "3695d31397757030.js" : 7611 === e ? "744f449a15aa9407.js" : 7597 === e ? "6a3374edb0667891.js" : 8189 === e ? "f845cde67774c7b8.js" : 3792 === e ? "7e9d940912375aeb.vendor.js" : 6026 === e ? "edbde91da3fc9268.vendor.js" : 6887 === e ? "7c94827a97572afe.js" : 361 === e ? "48226df24b397080.js" : 3582 === e ? "224b41464aad1e75.js" : 7758 === e ? "70a1f0c56207666c.js" : 9728 === e ? "eae61fecebe63634.js" : 6582 === e ? "bb7e9fd346184844.js" : 5760 === e ? "79b8ee509be19b49.js" : 4204 === e ? "e3ea73e15d369c32.js" : 3857 === e ? "68953b681821d7a7.js" : 4302 === e ? "d760390128346ee9.js" : 208 === e ? "7d35ebe6809e509f.js" : 6128 === e ? "b3be3064f3bb1626.js" : 4408 === e ? "39bb16045cdeac1c.js" : 1108 === e ? "a3de390f2595ba07.js" : 8769 === e ? "b61bdac352e807fa.js" : 3741 === e ? "17368a82f7787a4d.js" : 7891 === e ? "e7165d07317dd8de.js" : 8432 === e ? "c1ae8d20d09afc7f.js" : 4968 === e ? "34a9d0873b44ce19.js" : 7197 === e ? "cf4fe29dcf91195f.vendor.js" : 5548 === e ? "ed45d22a8f5fb577.vendor.js" : 7894 === e ? "686caf6d133e3992.js" : 8699 === e ? "ef404d5f3f69d2b8.js" : 6127 === e ? "c25d5f4c754523e4.js" : 8751 === e ? "35c8fed43d2aee84.js" : 5789 === e ? "498af3a2bb111a41.js" : 783 === e ? "28987e184cde9ebc.js" : 4159 === e ? "34bfd578f8c59c6e.js" : 8586 === e ? "f68c7e0dc525e53b.js" : 9634 === e ? "7c747f12a50c7074.vendor.js" : 5042 === e ? "c5a4d98d1140e882.js" : 2398 === e ? "d219d57bc52b9dc0.js" : void 0, o.miniCssF = e => ({
        9642: 1,
        7599: 1,
        698: 1,
        4813: 1,
        5602: 1,
        3792: 1,
        6026: 1,
        7197: 1,
        5548: 1,
        9634: 1
    }[e] ? "ef46db3751d8e999.vendor.ltr.css" : {
        7653: 1,
        3675: 1,
        4235: 1,
        1707: 1,
        9491: 1,
        191: 1,
        4174: 1,
        3857: 1,
        4302: 1,
        208: 1,
        6128: 1,
        4408: 1,
        8769: 1,
        8432: 1,
        4968: 1,
        7894: 1,
        8699: 1,
        8586: 1,
        5042: 1
    }[e] ? "ef46db3751d8e999.ltr.css" : 1569 === e ? "7283bbc382065869.ltr.css" : 2623 === e ? "0009282b03e2cfe4.ltr.css" : 7351 === e ? "c035a3cf5bd529fb.ltr.css" : 7651 === e ? "58953c8aa7718482.ltr.css" : 1926 === e ? "1afeb5223fb7fa69.ltr.css" : 3724 === e ? "6c37105f7f51c77f.ltr.css" : 7444 === e ? "235fd8a911cd2158.ltr.css" : 909 === e ? "3e76c662aeb7e672.ltr.css" : 7611 === e ? "c67723ac423b12c5.ltr.css" : 7597 === e ? "cdd3a7c9c94d539b.ltr.css" : 8189 === e ? "810667cd9ab0581d.ltr.css" : 6887 === e ? "684c339c50466939.ltr.css" : 361 === e ? "8a480c51761c1e2e.ltr.css" : 3582 === e ? "550cddbf56e61273.ltr.css" : 7758 === e ? "9f47776ea5f90aaf.ltr.css" : 9728 === e ? "c930ea33bf63ff45.ltr.css" : 6582 === e ? "ebdc351874608219.ltr.css" : 5760 === e ? "a42813b530b3767a.ltr.css" : 4204 === e ? "2c60d546fd614709.ltr.css" : 1108 === e ? "6c98b23ddcc274c9.ltr.css" : 3741 === e ? "de4bbe88d8bf929d.ltr.css" : 7891 === e ? "7bdd7522c63e5bd4.ltr.css" : 6127 === e ? "6ea60036b0cd7af4.ltr.css" : 8751 === e ? "64100321f1f4a8a9.ltr.css" : 5789 === e ? "af80f1e017e54d64.ltr.css" : 783 === e ? "44120d0e86f58fdd.ltr.css" : 4159 === e ? "a9ccdd492d38b4ab.ltr.css" : 2398 === e ? "bb2f862d10be4351.ltr.css" : void 0), o.miniCssFRtl = e => 1414 === e ? "c166e5d20ad58f4e.runtime.rtl.css" : {
        6190: 1,
        3413: 1,
        9642: 1,
        7599: 1,
        698: 1,
        4813: 1,
        5602: 1,
        3792: 1,
        6026: 1,
        7197: 1,
        5548: 1,
        9634: 1
    }[e] ? "c166e5d20ad58f4e.vendor.rtl.css" : 7002 === e ? "708383017419b94a.rtl.css" : {
        7653: 1,
        3675: 1,
        4235: 1,
        1707: 1,
        9491: 1,
        191: 1,
        4174: 1,
        3857: 1,
        4302: 1,
        208: 1,
        6128: 1,
        4408: 1,
        8769: 1,
        8432: 1,
        4968: 1,
        7894: 1,
        8699: 1,
        8586: 1,
        5042: 1
    }[e] ? "c166e5d20ad58f4e.rtl.css" : 1569 === e ? "ae4d80faaff253c7.rtl.css" : 2623 === e ? "9c8c54d161fd35e1.rtl.css" : 7351 === e ? "686be0b412089c31.rtl.css" : 7651 === e ? "2d83201b59c75b60.rtl.css" : 1926 === e ? "b90e7c19a6f6d21d.rtl.css" : 3724 === e ? "59d54b5764ae45fa.rtl.css" : 7444 === e ? "6ff78bb34a55b0f8.rtl.css" : 909 === e ? "1bebbaec88afdabf.rtl.css" : 7611 === e ? "381b028e76197464.rtl.css" : 7597 === e ? "62f4d7df2388ab80.rtl.css" : 8189 === e ? "0b9a29d982028cbd.rtl.css" : 6887 === e ? "bdafbaf2f329fd2a.rtl.css" : 361 === e ? "a509df8561c08032.rtl.css" : 3582 === e ? "18fe20412b62425b.rtl.css" : 7758 === e ? "ab86a24369d05a88.rtl.css" : 9728 === e ? "db9690f5bea684d0.rtl.css" : 6582 === e ? "1d8e1419ca2156d8.rtl.css" : 5760 === e ? "9664f7eac027d667.rtl.css" : 4204 === e ? "4248cb79c192b2d9.rtl.css" : 1108 === e ? "d15390feaa861cdb.rtl.css" : 3741 === e ? "09e3f75340b4387d.rtl.css" : 7891 === e ? "47e2ae422d83af20.rtl.css" : 6127 === e ? "ece16e4c6eff2116.rtl.css" : 8751 === e ? "70b10dadeaba021d.rtl.css" : 5789 === e ? "5137f4f979b98ff5.rtl.css" : 783 === e ? "cd628b3d96bc1f8e.rtl.css" : 4159 === e ? "4b978262f9673551.rtl.css" : 2398 === e ? "463d2178dddf5459.rtl.css" : void 0, o.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), o.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
        }
    }), e), o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), s = {}, c = "@canva/web:", o.l = (e, t, r, a) => {
        if (s[e]) s[e].push(t);
        else {
            var d, n;
            if (void 0 !== r)
                for (var f = document.getElementsByTagName("script"), l = 0; l < f.length; l++) {
                    var i = f[l];
                    if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == c + r) {
                        d = i;
                        break
                    }
                }
            d || (n = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, o.nc && d.setAttribute("nonce", o.nc), d.setAttribute("data-webpack", c + r), d.src = e), s[e] = [t];
            var b = (t, r) => {
                    d.onerror = d.onload = null, clearTimeout(u);
                    var c = s[e];
                    if (delete s[e], d.parentNode && d.parentNode.removeChild(d), c && c.forEach((e => e(r))), t) return t(r)
                },
                u = setTimeout(b.bind(null, void 0, {
                    type: "timeout",
                    target: d
                }), 12e4);
            d.onerror = b.bind(null, d.onerror), d.onload = b.bind(null, d.onload), n && document.head.appendChild(d)
        }
    }, o.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
        const e = o.e,
            t = function e(t, r, s) {
                return t().catch((function(c) {
                    return 0 === s ? Promise.reject(c) : (a = r, new Promise((function(e) {
                        setTimeout(e, a)
                    }))).then((function() {
                        return e(t, r, s - 1)
                    }));
                    var a
                }))
            };
        o.e = function(r) {
            return t((function() {
                return e(r)
            }), 1e3, 5)
        }
    })(), o.p = "", (() => {
        const e = JSON.parse('{"942":8432,"3366":9728,"3424":1707,"4908":8432,"5777":4302,"6066":6127,"6489":6887,"6996":208,"12995":1926,"15527":783,"15573":7891,"19280":1707,"19931":8432,"21233":8432,"21322":9634,"21734":4968,"24646":8432,"28412":8432,"28812":8432,"29821":7611,"30378":8432,"31895":8432,"31937":4968,"32342":4968,"32871":5548,"33031":4968,"33151":5789,"36491":4408,"37813":8751,"39673":1569,"40308":4204,"40459":4968,"41727":7651,"41866":5760,"42171":8432,"42469":7197,"45362":8586,"45820":3582,"48264":1108,"49349":4968,"50222":8432,"53189":4235,"53989":7197,"54920":7597,"57226":361,"60329":7651,"60628":1707,"61368":7611,"62493":7444,"62532":7891,"65430":8432,"66501":8432,"68239":3741,"69625":8432,"69676":7444,"70597":3857,"70799":8769,"73978":4968,"77917":5042,"78025":1707,"78602":2398,"79019":8432,"80224":7651,"82001":7894,"83890":7651,"85888":8432,"86161":8432,"86838":8432,"86878":8432,"87820":1707,"88755":6582,"89512":4968,"90394":8432,"91007":8189,"91142":6128,"92592":6026,"92626":4159,"94721":8432,"95011":8699,"97762":3792}'),
            t = JSON.parse('{"191":[9491],"208":[1926],"361":[7597],"698":[9642,7599],"783":[7758],"909":[7351,3724],"1108":[4174],"1569":[9642,191],"1707":[7653,4235],"1926":[2623,5602,4174],"2398":[7597],"2623":[1569],"3413":[],"3582":[7597],"3675":[],"3724":[698,7651,1926],"3741":[7651],"3792":[4813],"3857":[1569],"4159":[7758],"4174":[7653],"4204":[7597],"4235":[3675],"4302":[1569],"4408":[1926],"4813":[9642],"4968":[7651],"5042":[7599],"5548":[],"5602":[],"5760":[7611],"5789":[361],"6026":[4813],"6127":[7597],"6128":[1926],"6190":[],"6582":[7611],"6887":[7597],"7002":[],"7197":[],"7351":[2623,698],"7444":[3724],"7597":[4813,7611],"7599":[],"7611":[7444,909],"7651":[1569],"7653":[7599],"7758":[7597],"7891":[1926],"7894":[7651],"8189":[7597],"8432":[7597],"8586":[1926],"8699":[1926],"8751":[7611],"8769":[7651],"9491":[1707],"9634":[],"9642":[],"9728":[7758]}'),
            r = (e, s, c) => {
                if (!c.has(e)) return c.add(e), t[e].forEach((e => r(e, s, c))), s.push(e), s
            };
        o.me = function(t) {
            const s = e[t];
            if (null == s) return Promise.resolve(o(t));
            const c = r(s, [], new Set);
            return Promise.all(c.map((e => o.e(e)))).then((() => o(t)))
        }
    })(), (() => {
        const e = {};
        o.f.locale = function(t, r) {
            ! function(e, t, r) {
                if (null == t[e]) {
                    const r = self.cmsg;
                    if (!r || !r.assets) return;
                    const s = r.locale || "en",
                        c = r.assets[s] && r.assets[s][e] && r.assets[s][e].js;
                    if (!c) return;
                    t[e] = Promise.all(c.map((r => new Promise(((s, c) => {
                        const a = document.createElement("script");
                        a.onerror = () => {
                            delete t[e], c(new Error(`Fail to load message files@${r}`))
                        }, a.onload = () => {
                            t[e] = 0, s()
                        }, a.src = o.p + r, document.head.appendChild(a)
                    })))))
                }
                const s = t[e];
                s && r.push(s)
            }(t, e, r)
        }
    })(), (() => {
        let e = "undefined" != typeof self && void 0 !== self.document ? self.document.body.parentElement.getAttribute("dir") : "ltr";
        "ltr" !== e && "rtl" !== e && (console.warn("Could not determine the direction of text, please check that the dir attribute is set on the html tag"), e = "ltr"), "rtl" === e && (o.miniCssF = o.miniCssFRtl)
    })(), a = e => new Promise(((t, r) => {
        var s = o.miniCssF(e),
            c = o.p + s;
        if (((e, t) => {
                for (var r = document.getElementsByTagName("link"), s = 0; s < r.length; s++) {
                    var c = (d = r[s]).getAttribute("data-href") || d.getAttribute("href");
                    if ("stylesheet" === d.rel && (c === e || c === t)) return d
                }
                var a = document.getElementsByTagName("style");
                for (s = 0; s < a.length; s++) {
                    var d;
                    if ((c = (d = a[s]).getAttribute("data-href")) === e || c === t) return d
                }
            })(s, c)) return t();
        ((e, t, r, s) => {
            var c = document.createElement("link");
            c.rel = "stylesheet", c.type = "text/css", c.onerror = c.onload = a => {
                if (c.onerror = c.onload = null, "load" === a.type) r();
                else {
                    var d = a && ("load" === a.type ? "missing" : a.type),
                        n = a && a.target && a.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                    f.code = "CSS_CHUNK_LOAD_FAILED", f.type = d, f.request = n, c.parentNode.removeChild(c), s(f)
                }
            }, c.href = t, (e => {
                document.querySelector(".css-link") ? document.body.appendChild(e) : document.head.appendChild(e)
            })(c)
        })(e, c, t, r)
    })), d = {
        1414: 0
    }, o.f.miniCss = (e, t) => {
        d[e] ? t.push(d[e]) : 0 !== d[e] && {
            361: 1,
            783: 1,
            909: 1,
            1108: 1,
            1569: 1,
            1926: 1,
            2398: 1,
            2623: 1,
            3582: 1,
            3724: 1,
            3741: 1,
            4159: 1,
            4204: 1,
            5760: 1,
            5789: 1,
            6127: 1,
            6582: 1,
            6887: 1,
            7351: 1,
            7444: 1,
            7597: 1,
            7611: 1,
            7651: 1,
            7758: 1,
            7891: 1,
            8189: 1,
            8751: 1,
            9728: 1
        }[e] && t.push(d[e] = a(e).then((() => {
            d[e] = 0
        }), (t => {
            throw delete d[e], t
        })))
    }, (() => {
        var e = {
            1414: 0
        };
        o.f.j = (t, r) => {
            var s = o.o(e, t) ? e[t] : void 0;
            if (0 !== s)
                if (s) r.push(s[2]);
                else if (1414 != t) {
                var c = new Promise(((r, c) => s = e[t] = [r, c]));
                r.push(s[2] = c);
                var a = o.p + o.u(t),
                    d = new Error;
                o.l(a, (r => {
                    if (o.o(e, t) && (0 !== (s = e[t]) && (e[t] = void 0), s)) {
                        var c = r && ("load" === r.type ? "missing" : r.type),
                            a = r && r.target && r.target.src;
                        d.message = "Loading chunk " + t + " failed.\n(" + c + ": " + a + ")", d.name = "ChunkLoadError", d.type = c, d.request = a, s[1](d)
                    }
                }), "chunk-" + t, t)
            } else e[t] = 0
        }, o.O.j = t => 0 === e[t];
        var t = (t, r) => {
                var s, c, [a, d, n] = r,
                    f = 0;
                if (a.some((t => 0 !== e[t]))) {
                    for (s in d) o.o(d, s) && (o.m[s] = d[s]);
                    if (n) var l = n(o)
                }
                for (t && t(r); f < a.length; f++) c = a[f], o.o(e, c) && e[c] && e[c][0](), e[a[f]] = 0;
                return o.O(l)
            },
            r = self.webpackChunk_canva_web = self.webpackChunk_canva_web || [];
        r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
    })()
})();
//# sourceMappingURL=sourcemaps/6ae56847124a359d.runtime.js.map