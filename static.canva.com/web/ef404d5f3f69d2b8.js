(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [8699], {

        /***/
        95011: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(2868);
            __web_req__(12995);
            self._cdf17aa01cb7a37fe84ed76fc113a158 = self._cdf17aa01cb7a37fe84ed76fc113a158 || {};
            (function(__c) {
                "use strict";
                var $$ = function(a) {
                        setTimeout(a.Qza, 1E3 * (a.qT < Ulb.length ? Ulb[a.qT] : 10))
                    },
                    Vlb = function(a) {
                        const b = {
                            capture: !0,
                            passive: !0
                        };
                        window.addEventListener("pointermove", a.fV, b);
                        window.addEventListener("pointerdown", a.fV, b);
                        window.addEventListener("keydown", a.fV, b);
                        window.addEventListener("focus", a.fV, {
                            passive: !0
                        });
                        window.addEventListener("blur", a.dha, {
                            passive: !0
                        });
                        document.addEventListener("visibilitychange", () => {
                            "hidden" === document.visibilityState && a.dha()
                        })
                    },
                    Ulb = [1, 1, 1, 1, 2, 2, 3, 5, 8, 10],
                    Wlb = class {
                        constructor(a,
                            b, c, d) {
                            this.aa = a;
                            this.Kk = b;
                            this.ea = c;
                            this.$E = d;
                            this.sessionId = __c.Zb();
                            this.qT = 0;
                            this.fV = () => {
                                const e = this.ea.now(),
                                    f = this.EL;
                                if (2 === f.state || 1 === f.state && 12E4 <= e - f.gU) this.B4 = e;
                                0 !== f.state && $$(this);
                                this.EL = {
                                    state: 0,
                                    gU: e
                                }
                            };
                            this.dha = () => {
                                this.EL = {
                                    state: 2
                                }
                            };
                            this.Qza = async () => {
                                const e = this.ea.now(),
                                    f = this.$E.Pla({
                                        id: this.qT,
                                        sessionId: this.sessionId,
                                        aa: this.aa,
                                        Kk: this.Kk,
                                        Ic: (e - this.B4) / 1E3,
                                        Rza: 2
                                    });
                                this.qT++;
                                this.B4 = e;
                                var g = this.EL;
                                if (2 !== g.state)
                                    if (g = g.gU, 5E3 <= e - g) this.EL = {
                                        state: 1,
                                        gU: g
                                    };
                                    else {
                                        try {
                                            await f
                                        } catch (h) {
                                            if (h.code) throw h;
                                        }
                                        $$(this)
                                    }
                            };
                            a = c.now();
                            this.EL = {
                                state: 0,
                                gU: a
                            };
                            this.B4 = a
                        }
                    };
                __c.okb = {
                    TAa: function({
                        aa: a,
                        Kk: b,
                        ea: c,
                        $E: d
                    }) {
                        a = new Wlb(a, b, c, d);
                        $$(a);
                        Vlb(a)
                    }
                };
            }).call(self, self._cdf17aa01cb7a37fe84ed76fc113a158);
        }

    }
])
//# sourceMappingURL=sourcemaps/ef404d5f3f69d2b8.js.map