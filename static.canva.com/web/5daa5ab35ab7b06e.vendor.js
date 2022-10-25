/*! For license information please see 5daa5ab35ab7b06e.vendor.js.LICENSE.txt */
(self.webpackChunk_canva_web = self.webpackChunk_canva_web || []).push([
    [9642], {
        99601: (t, e) => {
            "use strict";
            e.Z = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                if (2 === t.length) return r(t[0], t[1]) || null;
                var n = t.slice(1).reduce((function(t, e) {
                    return r(t, e)
                }), t[0]);
                return n || null
            };
            var n = new WeakMap;

            function r(t, e) {
                if (t && e) {
                    var r = n.get(t) || new WeakMap;
                    n.set(t, r);
                    var i = r.get(e) || function(n) {
                        o(t, n), o(e, n)
                    };
                    return r.set(e, i), i
                }
                return t || e
            }

            function o(t, e) {
                "function" == typeof t ? t(e) : t.current = e
            }
        },
        28981: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => pt
            });
            for (var r = "undefined" != typeof window && "undefined" != typeof document, o = ["Edge", "Trident", "Firefox"], i = 0, s = 0; s < o.length; s += 1)
                if (r && navigator.userAgent.indexOf(o[s]) >= 0) {
                    i = 1;
                    break
                }
            var a = r && window.Promise ? function(t) {
                var e = !1;
                return function() {
                    e || (e = !0, window.Promise.resolve().then((function() {
                        e = !1, t()
                    })))
                }
            } : function(t) {
                var e = !1;
                return function() {
                    e || (e = !0, setTimeout((function() {
                        e = !1, t()
                    }), i))
                }
            };

            function f(t) {
                return t && "[object Function]" === {}.toString.call(t)
            }

            function u(t, e) {
                if (1 !== t.nodeType) return [];
                var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
                return e ? n[e] : n
            }

            function c(t) {
                return "HTML" === t.nodeName ? t : t.parentNode || t.host
            }

            function p(t) {
                if (!t) return document.body;
                switch (t.nodeName) {
                    case "HTML":
                    case "BODY":
                        return t.ownerDocument.body;
                    case "#document":
                        return t.body
                }
                var e = u(t),
                    n = e.overflow,
                    r = e.overflowX,
                    o = e.overflowY;
                return /(auto|scroll|overlay)/.test(n + o + r) ? t : p(c(t))
            }
            var l = r && !(!window.MSInputMethodContext || !document.documentMode),
                h = r && /MSIE 10/.test(navigator.userAgent);

            function d(t) {
                return 11 === t ? l : 10 === t ? h : l || h
            }

            function m(t) {
                if (!t) return document.documentElement;
                for (var e = d(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling;) n = (t = t.nextElementSibling).offsetParent;
                var r = n && n.nodeName;
                return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === u(n, "position") ? m(n) : n : t ? t.ownerDocument.documentElement : document.documentElement
            }

            function v(t) {
                return null !== t.parentNode ? v(t.parentNode) : t
            }

            function b(t, e) {
                if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
                var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
                    r = n ? t : e,
                    o = n ? e : t,
                    i = document.createRange();
                i.setStart(r, 0), i.setEnd(o, 0);
                var s, a, f = i.commonAncestorContainer;
                if (t !== f && e !== f || r.contains(o)) return "BODY" === (a = (s = f).nodeName) || "HTML" !== a && m(s.firstElementChild) !== s ? m(f) : f;
                var u = v(t);
                return u.host ? b(u.host, e) : b(t, v(e).host)
            }

            function g(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                    n = "top" === e ? "scrollTop" : "scrollLeft",
                    r = t.nodeName;
                if ("BODY" === r || "HTML" === r) {
                    var o = t.ownerDocument.documentElement,
                        i = t.ownerDocument.scrollingElement || o;
                    return i[n]
                }
                return t[n]
            }

            function w(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = g(e, "top"),
                    o = g(e, "left"),
                    i = n ? -1 : 1;
                return t.top += r * i, t.bottom += r * i, t.left += o * i, t.right += o * i, t
            }

            function y(t, e) {
                var n = "x" === e ? "Left" : "Top",
                    r = "Left" === n ? "Right" : "Bottom";
                return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + r + "Width"], 10)
            }

            function E(t, e, n, r) {
                return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], d(10) ? parseInt(n["offset" + t]) + parseInt(r["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(r["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0)
            }

            function _(t) {
                var e = t.body,
                    n = t.documentElement,
                    r = d(10) && getComputedStyle(n);
                return {
                    height: E("Height", e, n, r),
                    width: E("Width", e, n, r)
                }
            }
            var O = function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                },
                x = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                T = function(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                },
                M = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                };

            function R(t) {
                return M({}, t, {
                    right: t.left + t.width,
                    bottom: t.top + t.height
                })
            }

            function k(t) {
                var e = {};
                try {
                    if (d(10)) {
                        e = t.getBoundingClientRect();
                        var n = g(t, "top"),
                            r = g(t, "left");
                        e.top += n, e.left += r, e.bottom += n, e.right += r
                    } else e = t.getBoundingClientRect()
                } catch (l) {}
                var o = {
                        left: e.left,
                        top: e.top,
                        width: e.right - e.left,
                        height: e.bottom - e.top
                    },
                    i = "HTML" === t.nodeName ? _(t.ownerDocument) : {},
                    s = i.width || t.clientWidth || o.right - o.left,
                    a = i.height || t.clientHeight || o.bottom - o.top,
                    f = t.offsetWidth - s,
                    c = t.offsetHeight - a;
                if (f || c) {
                    var p = u(t);
                    f -= y(p, "x"), c -= y(p, "y"), o.width -= f, o.height -= c
                }
                return R(o)
            }

            function D(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = d(10),
                    o = "HTML" === e.nodeName,
                    i = k(t),
                    s = k(e),
                    a = p(t),
                    f = u(e),
                    c = parseFloat(f.borderTopWidth, 10),
                    l = parseFloat(f.borderLeftWidth, 10);
                n && o && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
                var h = R({
                    top: i.top - s.top - c,
                    left: i.left - s.left - l,
                    width: i.width,
                    height: i.height
                });
                if (h.marginTop = 0, h.marginLeft = 0, !r && o) {
                    var m = parseFloat(f.marginTop, 10),
                        v = parseFloat(f.marginLeft, 10);
                    h.top -= c - m, h.bottom -= c - m, h.left -= l - v, h.right -= l - v, h.marginTop = m, h.marginLeft = v
                }
                return (r && !n ? e.contains(a) : e === a && "BODY" !== a.nodeName) && (h = w(h, e)), h
            }

            function C(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = t.ownerDocument.documentElement,
                    r = D(t, n),
                    o = Math.max(n.clientWidth, window.innerWidth || 0),
                    i = Math.max(n.clientHeight, window.innerHeight || 0),
                    s = e ? 0 : g(n),
                    a = e ? 0 : g(n, "left"),
                    f = {
                        top: s - r.top + r.marginTop,
                        left: a - r.left + r.marginLeft,
                        width: o,
                        height: i
                    };
                return R(f)
            }

            function S(t) {
                var e = t.nodeName;
                if ("BODY" === e || "HTML" === e) return !1;
                if ("fixed" === u(t, "position")) return !0;
                var n = c(t);
                return !!n && S(n)
            }

            function L(t) {
                if (!t || !t.parentElement || d()) return document.documentElement;
                for (var e = t.parentElement; e && "none" === u(e, "transform");) e = e.parentElement;
                return e || document.documentElement
            }

            function N(t, e, n, r) {
                var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    i = {
                        top: 0,
                        left: 0
                    },
                    s = o ? L(t) : b(t, e);
                if ("viewport" === r) i = C(s, o);
                else {
                    var a = void 0;
                    "scrollParent" === r ? "BODY" === (a = p(c(e))).nodeName && (a = t.ownerDocument.documentElement) : a = "window" === r ? t.ownerDocument.documentElement : r;
                    var f = D(a, s, o);
                    if ("HTML" !== a.nodeName || S(s)) i = f;
                    else {
                        var u = _(t.ownerDocument),
                            l = u.height,
                            h = u.width;
                        i.top += f.top - f.marginTop, i.bottom = l + f.top, i.left += f.left - f.marginLeft, i.right = h + f.left
                    }
                }
                var d = "number" == typeof(n = n || 0);
                return i.left += d ? n : n.left || 0, i.top += d ? n : n.top || 0, i.right -= d ? n : n.right || 0, i.bottom -= d ? n : n.bottom || 0, i
            }

            function A(t) {
                return t.width * t.height
            }

            function F(t, e, n, r, o) {
                var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                if (-1 === t.indexOf("auto")) return t;
                var s = N(n, r, i, o),
                    a = {
                        top: {
                            width: s.width,
                            height: e.top - s.top
                        },
                        right: {
                            width: s.right - e.right,
                            height: s.height
                        },
                        bottom: {
                            width: s.width,
                            height: s.bottom - e.bottom
                        },
                        left: {
                            width: e.left - s.left,
                            height: s.height
                        }
                    },
                    f = Object.keys(a).map((function(t) {
                        return M({
                            key: t
                        }, a[t], {
                            area: A(a[t])
                        })
                    })).sort((function(t, e) {
                        return e.area - t.area
                    })),
                    u = f.filter((function(t) {
                        var e = t.width,
                            r = t.height;
                        return e >= n.clientWidth && r >= n.clientHeight
                    })),
                    c = u.length > 0 ? u[0].key : f[0].key,
                    p = t.split("-")[1];
                return c + (p ? "-" + p : "")
            }

            function W(t, e, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    o = r ? L(e) : b(e, n);
                return D(n, o, r)
            }

            function P(t) {
                var e = t.ownerDocument.defaultView.getComputedStyle(t),
                    n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
                    r = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
                return {
                    width: t.offsetWidth + r,
                    height: t.offsetHeight + n
                }
            }

            function H(t) {
                var e = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };
                return t.replace(/left|right|bottom|top/g, (function(t) {
                    return e[t]
                }))
            }

            function z(t, e, n) {
                n = n.split("-")[0];
                var r = P(t),
                    o = {
                        width: r.width,
                        height: r.height
                    },
                    i = -1 !== ["right", "left"].indexOf(n),
                    s = i ? "top" : "left",
                    a = i ? "left" : "top",
                    f = i ? "height" : "width",
                    u = i ? "width" : "height";
                return o[s] = e[s] + e[f] / 2 - r[f] / 2, o[a] = n === a ? e[a] - r[u] : e[H(a)], o
            }

            function j(t, e) {
                return Array.prototype.find ? t.find(e) : t.filter(e)[0]
            }

            function I(t, e, n) {
                return (void 0 === n ? t : t.slice(0, function(t, e, n) {
                    if (Array.prototype.findIndex) return t.findIndex((function(t) {
                        return t[e] === n
                    }));
                    var r = j(t, (function(t) {
                        return t[e] === n
                    }));
                    return t.indexOf(r)
                }(t, "name", n))).forEach((function(t) {
                    t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                    var n = t.function || t.fn;
                    t.enabled && f(n) && (e.offsets.popper = R(e.offsets.popper), e.offsets.reference = R(e.offsets.reference), e = n(e, t))
                })), e
            }

            function B() {
                if (!this.state.isDestroyed) {
                    var t = {
                        instance: this,
                        styles: {},
                        arrowStyles: {},
                        attributes: {},
                        flipped: !1,
                        offsets: {}
                    };
                    t.offsets.reference = W(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = F(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = z(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = I(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
                }
            }

            function Z(t, e) {
                return t.some((function(t) {
                    var n = t.name;
                    return t.enabled && n === e
                }))
            }

            function U(t) {
                for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), r = 0; r < e.length; r++) {
                    var o = e[r],
                        i = o ? "" + o + n : t;
                    if (void 0 !== document.body.style[i]) return i
                }
                return null
            }

            function V() {
                return this.state.isDestroyed = !0, Z(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[U("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
            }

            function q(t) {
                var e = t.ownerDocument;
                return e ? e.defaultView : window
            }

            function G(t, e, n, r) {
                var o = "BODY" === t.nodeName,
                    i = o ? t.ownerDocument.defaultView : t;
                i.addEventListener(e, n, {
                    passive: !0
                }), o || G(p(i.parentNode), e, n, r), r.push(i)
            }

            function Y(t, e, n, r) {
                n.updateBound = r, q(t).addEventListener("resize", n.updateBound, {
                    passive: !0
                });
                var o = p(t);
                return G(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
            }

            function X() {
                this.state.eventsEnabled || (this.state = Y(this.reference, this.options, this.state, this.scheduleUpdate))
            }

            function $() {
                var t, e;
                this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, q(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach((function(t) {
                    t.removeEventListener("scroll", e.updateBound)
                })), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e))
            }

            function J(t) {
                return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
            }

            function K(t, e) {
                Object.keys(e).forEach((function(n) {
                    var r = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && J(e[n]) && (r = "px"), t.style[n] = e[n] + r
                }))
            }
            var Q = r && /Firefox/i.test(navigator.userAgent);

            function tt(t, e, n) {
                var r = j(t, (function(t) {
                        return t.name === e
                    })),
                    o = !!r && t.some((function(t) {
                        return t.name === n && t.enabled && t.order < r.order
                    }));
                if (!o) {
                    var i = "`" + e + "`",
                        s = "`" + n + "`";
                    console.warn(s + " modifier is required by " + i + " modifier in order to work, be sure to include it before " + i + "!")
                }
                return o
            }
            var et = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                nt = et.slice(3);

            function rt(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = nt.indexOf(t),
                    r = nt.slice(n + 1).concat(nt.slice(0, n));
                return e ? r.reverse() : r
            }
            var ot = "flip",
                it = "clockwise",
                st = "counterclockwise";

            function at(t, e, n, r) {
                var o = [0, 0],
                    i = -1 !== ["right", "left"].indexOf(r),
                    s = t.split(/(\+|\-)/).map((function(t) {
                        return t.trim()
                    })),
                    a = s.indexOf(j(s, (function(t) {
                        return -1 !== t.search(/,|\s/)
                    })));
                s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                var f = /\s*,\s*|\s+/,
                    u = -1 !== a ? [s.slice(0, a).concat([s[a].split(f)[0]]), [s[a].split(f)[1]].concat(s.slice(a + 1))] : [s];
                return u = u.map((function(t, r) {
                    var o = (1 === r ? !i : i) ? "height" : "width",
                        s = !1;
                    return t.reduce((function(t, e) {
                        return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, s = !0, t) : s ? (t[t.length - 1] += e, s = !1, t) : t.concat(e)
                    }), []).map((function(t) {
                        return function(t, e, n, r) {
                            var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                i = +o[1],
                                s = o[2];
                            if (!i) return t;
                            if (0 === s.indexOf("%")) {
                                return R("%p" === s ? n : r)[e] / 100 * i
                            }
                            if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * i;
                            return i
                        }(t, o, e, n)
                    }))
                })), u.forEach((function(t, e) {
                    t.forEach((function(n, r) {
                        J(n) && (o[e] += n * ("-" === t[r - 1] ? -1 : 1))
                    }))
                })), o
            }
            var ft = {
                    shift: {
                        order: 100,
                        enabled: !0,
                        fn: function(t) {
                            var e = t.placement,
                                n = e.split("-")[0],
                                r = e.split("-")[1];
                            if (r) {
                                var o = t.offsets,
                                    i = o.reference,
                                    s = o.popper,
                                    a = -1 !== ["bottom", "top"].indexOf(n),
                                    f = a ? "left" : "top",
                                    u = a ? "width" : "height",
                                    c = {
                                        start: T({}, f, i[f]),
                                        end: T({}, f, i[f] + i[u] - s[u])
                                    };
                                t.offsets.popper = M({}, s, c[r])
                            }
                            return t
                        }
                    },
                    offset: {
                        order: 200,
                        enabled: !0,
                        fn: function(t, e) {
                            var n = e.offset,
                                r = t.placement,
                                o = t.offsets,
                                i = o.popper,
                                s = o.reference,
                                a = r.split("-")[0],
                                f = void 0;
                            return f = J(+n) ? [+n, 0] : at(n, i, s, a), "left" === a ? (i.top += f[0], i.left -= f[1]) : "right" === a ? (i.top += f[0], i.left += f[1]) : "top" === a ? (i.left += f[0], i.top -= f[1]) : "bottom" === a && (i.left += f[0], i.top += f[1]), t.popper = i, t
                        },
                        offset: 0
                    },
                    preventOverflow: {
                        order: 300,
                        enabled: !0,
                        fn: function(t, e) {
                            var n = e.boundariesElement || m(t.instance.popper);
                            t.instance.reference === n && (n = m(n));
                            var r = U("transform"),
                                o = t.instance.popper.style,
                                i = o.top,
                                s = o.left,
                                a = o[r];
                            o.top = "", o.left = "", o[r] = "";
                            var f = N(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
                            o.top = i, o.left = s, o[r] = a, e.boundaries = f;
                            var u = e.priority,
                                c = t.offsets.popper,
                                p = {
                                    primary: function(t) {
                                        var n = c[t];
                                        return c[t] < f[t] && !e.escapeWithReference && (n = Math.max(c[t], f[t])), T({}, t, n)
                                    },
                                    secondary: function(t) {
                                        var n = "right" === t ? "left" : "top",
                                            r = c[n];
                                        return c[t] > f[t] && !e.escapeWithReference && (r = Math.min(c[n], f[t] - ("right" === t ? c.width : c.height))), T({}, n, r)
                                    }
                                };
                            return u.forEach((function(t) {
                                var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                                c = M({}, c, p[e](t))
                            })), t.offsets.popper = c, t
                        },
                        priority: ["left", "right", "top", "bottom"],
                        padding: 5,
                        boundariesElement: "scrollParent"
                    },
                    keepTogether: {
                        order: 400,
                        enabled: !0,
                        fn: function(t) {
                            var e = t.offsets,
                                n = e.popper,
                                r = e.reference,
                                o = t.placement.split("-")[0],
                                i = Math.floor,
                                s = -1 !== ["top", "bottom"].indexOf(o),
                                a = s ? "right" : "bottom",
                                f = s ? "left" : "top",
                                u = s ? "width" : "height";
                            return n[a] < i(r[f]) && (t.offsets.popper[f] = i(r[f]) - n[u]), n[f] > i(r[a]) && (t.offsets.popper[f] = i(r[a])), t
                        }
                    },
                    arrow: {
                        order: 500,
                        enabled: !0,
                        fn: function(t, e) {
                            var n;
                            if (!tt(t.instance.modifiers, "arrow", "keepTogether")) return t;
                            var r = e.element;
                            if ("string" == typeof r) {
                                if (!(r = t.instance.popper.querySelector(r))) return t
                            } else if (!t.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                            var o = t.placement.split("-")[0],
                                i = t.offsets,
                                s = i.popper,
                                a = i.reference,
                                f = -1 !== ["left", "right"].indexOf(o),
                                c = f ? "height" : "width",
                                p = f ? "Top" : "Left",
                                l = p.toLowerCase(),
                                h = f ? "left" : "top",
                                d = f ? "bottom" : "right",
                                m = P(r)[c];
                            a[d] - m < s[l] && (t.offsets.popper[l] -= s[l] - (a[d] - m)), a[l] + m > s[d] && (t.offsets.popper[l] += a[l] + m - s[d]), t.offsets.popper = R(t.offsets.popper);
                            var v = a[l] + a[c] / 2 - m / 2,
                                b = u(t.instance.popper),
                                g = parseFloat(b["margin" + p], 10),
                                w = parseFloat(b["border" + p + "Width"], 10),
                                y = v - t.offsets.popper[l] - g - w;
                            return y = Math.max(Math.min(s[c] - m, y), 0), t.arrowElement = r, t.offsets.arrow = (T(n = {}, l, Math.round(y)), T(n, h, ""), n), t
                        },
                        element: "[x-arrow]"
                    },
                    flip: {
                        order: 600,
                        enabled: !0,
                        fn: function(t, e) {
                            if (Z(t.instance.modifiers, "inner")) return t;
                            if (t.flipped && t.placement === t.originalPlacement) return t;
                            var n = N(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                                r = t.placement.split("-")[0],
                                o = H(r),
                                i = t.placement.split("-")[1] || "",
                                s = [];
                            switch (e.behavior) {
                                case ot:
                                    s = [r, o];
                                    break;
                                case it:
                                    s = rt(r);
                                    break;
                                case st:
                                    s = rt(r, !0);
                                    break;
                                default:
                                    s = e.behavior
                            }
                            return s.forEach((function(a, f) {
                                if (r !== a || s.length === f + 1) return t;
                                r = t.placement.split("-")[0], o = H(r);
                                var u = t.offsets.popper,
                                    c = t.offsets.reference,
                                    p = Math.floor,
                                    l = "left" === r && p(u.right) > p(c.left) || "right" === r && p(u.left) < p(c.right) || "top" === r && p(u.bottom) > p(c.top) || "bottom" === r && p(u.top) < p(c.bottom),
                                    h = p(u.left) < p(n.left),
                                    d = p(u.right) > p(n.right),
                                    m = p(u.top) < p(n.top),
                                    v = p(u.bottom) > p(n.bottom),
                                    b = "left" === r && h || "right" === r && d || "top" === r && m || "bottom" === r && v,
                                    g = -1 !== ["top", "bottom"].indexOf(r),
                                    w = !!e.flipVariations && (g && "start" === i && h || g && "end" === i && d || !g && "start" === i && m || !g && "end" === i && v),
                                    y = !!e.flipVariationsByContent && (g && "start" === i && d || g && "end" === i && h || !g && "start" === i && v || !g && "end" === i && m),
                                    E = w || y;
                                (l || b || E) && (t.flipped = !0, (l || b) && (r = s[f + 1]), E && (i = function(t) {
                                    return "end" === t ? "start" : "start" === t ? "end" : t
                                }(i)), t.placement = r + (i ? "-" + i : ""), t.offsets.popper = M({}, t.offsets.popper, z(t.instance.popper, t.offsets.reference, t.placement)), t = I(t.instance.modifiers, t, "flip"))
                            })), t
                        },
                        behavior: "flip",
                        padding: 5,
                        boundariesElement: "viewport",
                        flipVariations: !1,
                        flipVariationsByContent: !1
                    },
                    inner: {
                        order: 700,
                        enabled: !1,
                        fn: function(t) {
                            var e = t.placement,
                                n = e.split("-")[0],
                                r = t.offsets,
                                o = r.popper,
                                i = r.reference,
                                s = -1 !== ["left", "right"].indexOf(n),
                                a = -1 === ["top", "left"].indexOf(n);
                            return o[s ? "left" : "top"] = i[n] - (a ? o[s ? "width" : "height"] : 0), t.placement = H(e), t.offsets.popper = R(o), t
                        }
                    },
                    hide: {
                        order: 800,
                        enabled: !0,
                        fn: function(t) {
                            if (!tt(t.instance.modifiers, "hide", "preventOverflow")) return t;
                            var e = t.offsets.reference,
                                n = j(t.instance.modifiers, (function(t) {
                                    return "preventOverflow" === t.name
                                })).boundaries;
                            if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                                if (!0 === t.hide) return t;
                                t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                            } else {
                                if (!1 === t.hide) return t;
                                t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                            }
                            return t
                        }
                    },
                    computeStyle: {
                        order: 850,
                        enabled: !0,
                        fn: function(t, e) {
                            var n = e.x,
                                r = e.y,
                                o = t.offsets.popper,
                                i = j(t.instance.modifiers, (function(t) {
                                    return "applyStyle" === t.name
                                })).gpuAcceleration;
                            void 0 !== i && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                            var s = void 0 !== i ? i : e.gpuAcceleration,
                                a = m(t.instance.popper),
                                f = k(a),
                                u = {
                                    position: o.position
                                },
                                c = function(t, e) {
                                    var n = t.offsets,
                                        r = n.popper,
                                        o = n.reference,
                                        i = Math.round,
                                        s = Math.floor,
                                        a = function(t) {
                                            return t
                                        },
                                        f = i(o.width),
                                        u = i(r.width),
                                        c = -1 !== ["left", "right"].indexOf(t.placement),
                                        p = -1 !== t.placement.indexOf("-"),
                                        l = e ? c || p || f % 2 == u % 2 ? i : s : a,
                                        h = e ? i : a;
                                    return {
                                        left: l(f % 2 == 1 && u % 2 == 1 && !p && e ? r.left - 1 : r.left),
                                        top: h(r.top),
                                        bottom: h(r.bottom),
                                        right: l(r.right)
                                    }
                                }(t, window.devicePixelRatio < 2 || !Q),
                                p = "bottom" === n ? "top" : "bottom",
                                l = "right" === r ? "left" : "right",
                                h = U("transform"),
                                d = void 0,
                                v = void 0;
                            if (v = "bottom" === p ? "HTML" === a.nodeName ? -a.clientHeight + c.bottom : -f.height + c.bottom : c.top, d = "right" === l ? "HTML" === a.nodeName ? -a.clientWidth + c.right : -f.width + c.right : c.left, s && h) u[h] = "translate3d(" + d + "px, " + v + "px, 0)", u[p] = 0, u[l] = 0, u.willChange = "transform";
                            else {
                                var b = "bottom" === p ? -1 : 1,
                                    g = "right" === l ? -1 : 1;
                                u[p] = v * b, u[l] = d * g, u.willChange = p + ", " + l
                            }
                            var w = {
                                "x-placement": t.placement
                            };
                            return t.attributes = M({}, w, t.attributes), t.styles = M({}, u, t.styles), t.arrowStyles = M({}, t.offsets.arrow, t.arrowStyles), t
                        },
                        gpuAcceleration: !0,
                        x: "bottom",
                        y: "right"
                    },
                    applyStyle: {
                        order: 900,
                        enabled: !0,
                        fn: function(t) {
                            var e, n;
                            return K(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach((function(t) {
                                !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t)
                            })), t.arrowElement && Object.keys(t.arrowStyles).length && K(t.arrowElement, t.arrowStyles), t
                        },
                        onLoad: function(t, e, n, r, o) {
                            var i = W(o, e, t, n.positionFixed),
                                s = F(n.placement, i, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                            return e.setAttribute("x-placement", s), K(e, {
                                position: n.positionFixed ? "fixed" : "absolute"
                            }), n
                        },
                        gpuAcceleration: void 0
                    }
                },
                ut = {
                    placement: "bottom",
                    positionFixed: !1,
                    eventsEnabled: !0,
                    removeOnDestroy: !1,
                    onCreate: function() {},
                    onUpdate: function() {},
                    modifiers: ft
                },
                ct = function() {
                    function t(e, n) {
                        var r = this,
                            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        O(this, t), this.scheduleUpdate = function() {
                            return requestAnimationFrame(r.update)
                        }, this.update = a(this.update.bind(this)), this.options = M({}, t.Defaults, o), this.state = {
                            isDestroyed: !1,
                            isCreated: !1,
                            scrollParents: []
                        }, this.reference = e && e.jquery ? e[0] : e, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(M({}, t.Defaults.modifiers, o.modifiers)).forEach((function(e) {
                            r.options.modifiers[e] = M({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {})
                        })), this.modifiers = Object.keys(this.options.modifiers).map((function(t) {
                            return M({
                                name: t
                            }, r.options.modifiers[t])
                        })).sort((function(t, e) {
                            return t.order - e.order
                        })), this.modifiers.forEach((function(t) {
                            t.enabled && f(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state)
                        })), this.update();
                        var i = this.options.eventsEnabled;
                        i && this.enableEventListeners(), this.state.eventsEnabled = i
                    }
                    return x(t, [{
                        key: "update",
                        value: function() {
                            return B.call(this)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            return V.call(this)
                        }
                    }, {
                        key: "enableEventListeners",
                        value: function() {
                            return X.call(this)
                        }
                    }, {
                        key: "disableEventListeners",
                        value: function() {
                            return $.call(this)
                        }
                    }]), t
                }();
            ct.Utils = ("undefined" != typeof window ? window : n.g).PopperUtils, ct.placements = et, ct.Defaults = ut;
            const pt = ct
        },
        92703: (t, e, n) => {
            "use strict";
            var r = n(50414);

            function o() {}

            function i() {}
            i.resetWarningCache = o, t.exports = function() {
                function t(t, e, n, o, i, s) {
                    if (s !== r) {
                        var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw a.name = "Invariant Violation", a
                    }
                }

                function e() {
                    return t
                }
                t.isRequired = t;
                var n = {
                    array: t,
                    bool: t,
                    func: t,
                    number: t,
                    object: t,
                    string: t,
                    symbol: t,
                    any: t,
                    arrayOf: e,
                    element: t,
                    elementType: t,
                    instanceOf: e,
                    node: t,
                    objectOf: e,
                    oneOf: e,
                    oneOfType: e,
                    shape: e,
                    exact: e,
                    checkPropTypes: i,
                    resetWarningCache: o
                };
                return n.PropTypes = n, n
            }
        },
        45697: (t, e, n) => {
            t.exports = n(92703)()
        },
        50414: t => {
            "use strict";
            t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        5527: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => v,
                x: () => d
            });
            var r = n(87462),
                o = n(63366),
                i = n(94578),
                s = n(67294),
                a = n(45697),
                f = n.n(a),
                u = n(91033),
                c = ["client", "offset", "scroll", "bounds", "margin"];

            function p(t) {
                var e = [];
                return c.forEach((function(n) {
                    t[n] && e.push(n)
                })), e
            }

            function l(t, e) {
                var n = {};
                if (e.indexOf("client") > -1 && (n.client = {
                        top: t.clientTop,
                        left: t.clientLeft,
                        width: t.clientWidth,
                        height: t.clientHeight
                    }), e.indexOf("offset") > -1 && (n.offset = {
                        top: t.offsetTop,
                        left: t.offsetLeft,
                        width: t.offsetWidth,
                        height: t.offsetHeight
                    }), e.indexOf("scroll") > -1 && (n.scroll = {
                        top: t.scrollTop,
                        left: t.scrollLeft,
                        width: t.scrollWidth,
                        height: t.scrollHeight
                    }), e.indexOf("bounds") > -1) {
                    var r = t.getBoundingClientRect();
                    n.bounds = {
                        top: r.top,
                        right: r.right,
                        bottom: r.bottom,
                        left: r.left,
                        width: r.width,
                        height: r.height
                    }
                }
                if (e.indexOf("margin") > -1) {
                    var o = getComputedStyle(t);
                    n.margin = {
                        top: o ? parseInt(o.marginTop) : 0,
                        right: o ? parseInt(o.marginRight) : 0,
                        bottom: o ? parseInt(o.marginBottom) : 0,
                        left: o ? parseInt(o.marginLeft) : 0
                    }
                }
                return n
            }

            function h(t) {
                return t && t.ownerDocument && t.ownerDocument.defaultView || window
            }

            function d(t) {
                return function(e) {
                    var n, a;
                    return a = n = function(n) {
                        function a() {
                            for (var e, r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                            return (e = n.call.apply(n, [this].concat(o)) || this).state = {
                                contentRect: {
                                    entry: {},
                                    client: {},
                                    offset: {},
                                    scroll: {},
                                    bounds: {},
                                    margin: {}
                                }
                            }, e._animationFrameID = null, e._resizeObserver = null, e._node = null, e._window = null, e.measure = function(n) {
                                var r = l(e._node, t || p(e.props));
                                n && (r.entry = n[0].contentRect), e._animationFrameID = e._window.requestAnimationFrame((function() {
                                    null !== e._resizeObserver && (e.setState({
                                        contentRect: r
                                    }), "function" == typeof e.props.onResize && e.props.onResize(r))
                                }))
                            }, e._handleRef = function(t) {
                                null !== e._resizeObserver && null !== e._node && e._resizeObserver.unobserve(e._node), e._node = t, e._window = h(e._node);
                                var n = e.props.innerRef;
                                n && ("function" == typeof n ? n(e._node) : n.current = e._node), null !== e._resizeObserver && null !== e._node && e._resizeObserver.observe(e._node)
                            }, e
                        }(0, i.Z)(a, n);
                        var f = a.prototype;
                        return f.componentDidMount = function() {
                            this._resizeObserver = null !== this._window && this._window.ResizeObserver ? new this._window.ResizeObserver(this.measure) : new u.Z(this.measure), null !== this._node && (this._resizeObserver.observe(this._node), "function" == typeof this.props.onResize && this.props.onResize(l(this._node, t || p(this.props))))
                        }, f.componentWillUnmount = function() {
                            null !== this._window && this._window.cancelAnimationFrame(this._animationFrameID), null !== this._resizeObserver && (this._resizeObserver.disconnect(), this._resizeObserver = null)
                        }, f.render = function() {
                            var t = this.props,
                                n = (t.innerRef, t.onResize, (0, o.Z)(t, ["innerRef", "onResize"]));
                            return (0, s.createElement)(e, (0, r.Z)({}, n, {
                                measureRef: this._handleRef,
                                measure: this.measure,
                                contentRect: this.state.contentRect
                            }))
                        }, a
                    }(s.Component), n.propTypes = {
                        client: f().bool,
                        offset: f().bool,
                        scroll: f().bool,
                        bounds: f().bool,
                        margin: f().bool,
                        innerRef: f().oneOfType([f().object, f().func]),
                        onResize: f().func
                    }, a
                }
            }
            var m = d()((function(t) {
                var e = t.measure,
                    n = t.measureRef,
                    r = t.contentRect;
                return (0, t.children)({
                    measure: e,
                    measureRef: n,
                    contentRect: r
                })
            }));
            m.displayName = "Measure", m.propTypes.children = f().func;
            const v = m
        },
        96630: (t, e, n) => {
            "use strict";
            n.d(e, {
                $r: () => u,
                Wj: () => c,
                d0: () => p,
                cn: () => l,
                Ix: () => h,
                ZP: () => v
            });
            var r = n(63366),
                o = n(94578),
                i = (n(45697), n(67294)),
                s = n(73935),
                a = n(6035),
                f = n(220),
                u = "unmounted",
                c = "exited",
                p = "entering",
                l = "entered",
                h = "exiting",
                d = function(t) {
                    function e(e, n) {
                        var r;
                        r = t.call(this, e, n) || this;
                        var o, i = n && !n.isMounting ? e.enter : e.appear;
                        return r.appearStatus = null, e.in ? i ? (o = c, r.appearStatus = p) : o = l : o = e.unmountOnExit || e.mountOnEnter ? u : c, r.state = {
                            status: o
                        }, r.nextCallback = null, r
                    }(0, o.Z)(e, t), e.getDerivedStateFromProps = function(t, e) {
                        return t.in && e.status === u ? {
                            status: c
                        } : null
                    };
                    var n = e.prototype;
                    return n.componentDidMount = function() {
                        this.updateStatus(!0, this.appearStatus)
                    }, n.componentDidUpdate = function(t) {
                        var e = null;
                        if (t !== this.props) {
                            var n = this.state.status;
                            this.props.in ? n !== p && n !== l && (e = p) : n !== p && n !== l || (e = h)
                        }
                        this.updateStatus(!1, e)
                    }, n.componentWillUnmount = function() {
                        this.cancelNextCallback()
                    }, n.getTimeouts = function() {
                        var t, e, n, r = this.props.timeout;
                        return t = e = n = r, null != r && "number" != typeof r && (t = r.exit, e = r.enter, n = void 0 !== r.appear ? r.appear : e), {
                            exit: t,
                            enter: e,
                            appear: n
                        }
                    }, n.updateStatus = function(t, e) {
                        void 0 === t && (t = !1), null !== e ? (this.cancelNextCallback(), e === p ? this.performEnter(t) : this.performExit()) : this.props.unmountOnExit && this.state.status === c && this.setState({
                            status: u
                        })
                    }, n.performEnter = function(t) {
                        var e = this,
                            n = this.props.enter,
                            r = this.context ? this.context.isMounting : t,
                            o = this.props.nodeRef ? [r] : [s.findDOMNode(this), r],
                            i = o[0],
                            f = o[1],
                            u = this.getTimeouts(),
                            c = r ? u.appear : u.enter;
                        !t && !n || a.Z.disabled ? this.safeSetState({
                            status: l
                        }, (function() {
                            e.props.onEntered(i)
                        })) : (this.props.onEnter(i, f), this.safeSetState({
                            status: p
                        }, (function() {
                            e.props.onEntering(i, f), e.onTransitionEnd(c, (function() {
                                e.safeSetState({
                                    status: l
                                }, (function() {
                                    e.props.onEntered(i, f)
                                }))
                            }))
                        })))
                    }, n.performExit = function() {
                        var t = this,
                            e = this.props.exit,
                            n = this.getTimeouts(),
                            r = this.props.nodeRef ? void 0 : s.findDOMNode(this);
                        e && !a.Z.disabled ? (this.props.onExit(r), this.safeSetState({
                            status: h
                        }, (function() {
                            t.props.onExiting(r), t.onTransitionEnd(n.exit, (function() {
                                t.safeSetState({
                                    status: c
                                }, (function() {
                                    t.props.onExited(r)
                                }))
                            }))
                        }))) : this.safeSetState({
                            status: c
                        }, (function() {
                            t.props.onExited(r)
                        }))
                    }, n.cancelNextCallback = function() {
                        null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
                    }, n.safeSetState = function(t, e) {
                        e = this.setNextCallback(e), this.setState(t, e)
                    }, n.setNextCallback = function(t) {
                        var e = this,
                            n = !0;
                        return this.nextCallback = function(r) {
                            n && (n = !1, e.nextCallback = null, t(r))
                        }, this.nextCallback.cancel = function() {
                            n = !1
                        }, this.nextCallback
                    }, n.onTransitionEnd = function(t, e) {
                        this.setNextCallback(e);
                        var n = this.props.nodeRef ? this.props.nodeRef.current : s.findDOMNode(this),
                            r = null == t && !this.props.addEndListener;
                        if (n && !r) {
                            if (this.props.addEndListener) {
                                var o = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                                    i = o[0],
                                    a = o[1];
                                this.props.addEndListener(i, a)
                            }
                            null != t && setTimeout(this.nextCallback, t)
                        } else setTimeout(this.nextCallback, 0)
                    }, n.render = function() {
                        var t = this.state.status;
                        if (t === u) return null;
                        var e = this.props,
                            n = e.children,
                            o = (e.in, e.mountOnEnter, e.unmountOnExit, e.appear, e.enter, e.exit, e.timeout, e.addEndListener, e.onEnter, e.onEntering, e.onEntered, e.onExit, e.onExiting, e.onExited, e.nodeRef, (0, r.Z)(e, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
                        return i.createElement(f.Z.Provider, {
                            value: null
                        }, "function" == typeof n ? n(t, o) : i.cloneElement(i.Children.only(n), o))
                    }, e
                }(i.Component);

            function m() {}
            d.contextType = f.Z, d.propTypes = {}, d.defaultProps = { in: !1,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1,
                enter: !0,
                exit: !0,
                onEnter: m,
                onEntering: m,
                onEntered: m,
                onExit: m,
                onExiting: m,
                onExited: m
            }, d.UNMOUNTED = u, d.EXITED = c, d.ENTERING = p, d.ENTERED = l, d.EXITING = h;
            const v = d
        },
        220: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => r
            });
            const r = n(67294).createContext(null)
        },
        6035: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => r
            });
            const r = {
                disabled: !1
            }
        },
        91033: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => x
            });
            var r = function() {
                    if ("undefined" != typeof Map) return Map;

                    function t(t, e) {
                        var n = -1;
                        return t.some((function(t, r) {
                            return t[0] === e && (n = r, !0)
                        })), n
                    }
                    return function() {
                        function e() {
                            this.__entries__ = []
                        }
                        return Object.defineProperty(e.prototype, "size", {
                            get: function() {
                                return this.__entries__.length
                            },
                            enumerable: !0,
                            configurable: !0
                        }), e.prototype.get = function(e) {
                            var n = t(this.__entries__, e),
                                r = this.__entries__[n];
                            return r && r[1]
                        }, e.prototype.set = function(e, n) {
                            var r = t(this.__entries__, e);
                            ~r ? this.__entries__[r][1] = n : this.__entries__.push([e, n])
                        }, e.prototype.delete = function(e) {
                            var n = this.__entries__,
                                r = t(n, e);
                            ~r && n.splice(r, 1)
                        }, e.prototype.has = function(e) {
                            return !!~t(this.__entries__, e)
                        }, e.prototype.clear = function() {
                            this.__entries__.splice(0)
                        }, e.prototype.forEach = function(t, e) {
                            void 0 === e && (e = null);
                            for (var n = 0, r = this.__entries__; n < r.length; n++) {
                                var o = r[n];
                                t.call(e, o[1], o[0])
                            }
                        }, e
                    }()
                }(),
                o = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
                i = void 0 !== n.g && n.g.Math === Math ? n.g : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
                s = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(i) : function(t) {
                    return setTimeout((function() {
                        return t(Date.now())
                    }), 1e3 / 60)
                };
            var a = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                f = "undefined" != typeof MutationObserver,
                u = function() {
                    function t() {
                        this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(t, e) {
                            var n = !1,
                                r = !1,
                                o = 0;

                            function i() {
                                n && (n = !1, t()), r && f()
                            }

                            function a() {
                                s(i)
                            }

                            function f() {
                                var t = Date.now();
                                if (n) {
                                    if (t - o < 2) return;
                                    r = !0
                                } else n = !0, r = !1, setTimeout(a, e);
                                o = t
                            }
                            return f
                        }(this.refresh.bind(this), 20)
                    }
                    return t.prototype.addObserver = function(t) {
                        ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
                    }, t.prototype.removeObserver = function(t) {
                        var e = this.observers_,
                            n = e.indexOf(t);
                        ~n && e.splice(n, 1), !e.length && this.connected_ && this.disconnect_()
                    }, t.prototype.refresh = function() {
                        this.updateObservers_() && this.refresh()
                    }, t.prototype.updateObservers_ = function() {
                        var t = this.observers_.filter((function(t) {
                            return t.gatherActive(), t.hasActive()
                        }));
                        return t.forEach((function(t) {
                            return t.broadcastActive()
                        })), t.length > 0
                    }, t.prototype.connect_ = function() {
                        o && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), f ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                    }, t.prototype.disconnect_ = function() {
                        o && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                    }, t.prototype.onTransitionEnd_ = function(t) {
                        var e = t.propertyName,
                            n = void 0 === e ? "" : e;
                        a.some((function(t) {
                            return !!~n.indexOf(t)
                        })) && this.refresh()
                    }, t.getInstance = function() {
                        return this.instance_ || (this.instance_ = new t), this.instance_
                    }, t.instance_ = null, t
                }(),
                c = function(t, e) {
                    for (var n = 0, r = Object.keys(e); n < r.length; n++) {
                        var o = r[n];
                        Object.defineProperty(t, o, {
                            value: e[o],
                            enumerable: !1,
                            writable: !1,
                            configurable: !0
                        })
                    }
                    return t
                },
                p = function(t) {
                    return t && t.ownerDocument && t.ownerDocument.defaultView || i
                },
                l = g(0, 0, 0, 0);

            function h(t) {
                return parseFloat(t) || 0
            }

            function d(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                return e.reduce((function(e, n) {
                    return e + h(t["border-" + n + "-width"])
                }), 0)
            }

            function m(t) {
                var e = t.clientWidth,
                    n = t.clientHeight;
                if (!e && !n) return l;
                var r = p(t).getComputedStyle(t),
                    o = function(t) {
                        for (var e = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
                            var o = r[n],
                                i = t["padding-" + o];
                            e[o] = h(i)
                        }
                        return e
                    }(r),
                    i = o.left + o.right,
                    s = o.top + o.bottom,
                    a = h(r.width),
                    f = h(r.height);
                if ("border-box" === r.boxSizing && (Math.round(a + i) !== e && (a -= d(r, "left", "right") + i), Math.round(f + s) !== n && (f -= d(r, "top", "bottom") + s)), ! function(t) {
                        return t === p(t).document.documentElement
                    }(t)) {
                    var u = Math.round(a + i) - e,
                        c = Math.round(f + s) - n;
                    1 !== Math.abs(u) && (a -= u), 1 !== Math.abs(c) && (f -= c)
                }
                return g(o.left, o.top, a, f)
            }
            var v = "undefined" != typeof SVGGraphicsElement ? function(t) {
                return t instanceof p(t).SVGGraphicsElement
            } : function(t) {
                return t instanceof p(t).SVGElement && "function" == typeof t.getBBox
            };

            function b(t) {
                return o ? v(t) ? function(t) {
                    var e = t.getBBox();
                    return g(0, 0, e.width, e.height)
                }(t) : m(t) : l
            }

            function g(t, e, n, r) {
                return {
                    x: t,
                    y: e,
                    width: n,
                    height: r
                }
            }
            var w = function() {
                    function t(t) {
                        this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = g(0, 0, 0, 0), this.target = t
                    }
                    return t.prototype.isActive = function() {
                        var t = b(this.target);
                        return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
                    }, t.prototype.broadcastRect = function() {
                        var t = this.contentRect_;
                        return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
                    }, t
                }(),
                y = function(t, e) {
                    var n, r, o, i, s, a, f, u = (r = (n = e).x, o = n.y, i = n.width, s = n.height, a = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, f = Object.create(a.prototype), c(f, {
                        x: r,
                        y: o,
                        width: i,
                        height: s,
                        top: o,
                        right: r + i,
                        bottom: s + o,
                        left: r
                    }), f);
                    c(this, {
                        target: t,
                        contentRect: u
                    })
                },
                E = function() {
                    function t(t, e, n) {
                        if (this.activeObservations_ = [], this.observations_ = new r, "function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
                        this.callback_ = t, this.controller_ = e, this.callbackCtx_ = n
                    }
                    return t.prototype.observe = function(t) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(t instanceof p(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var e = this.observations_;
                            e.has(t) || (e.set(t, new w(t)), this.controller_.addObserver(this), this.controller_.refresh())
                        }
                    }, t.prototype.unobserve = function(t) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(t instanceof p(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var e = this.observations_;
                            e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this))
                        }
                    }, t.prototype.disconnect = function() {
                        this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                    }, t.prototype.gatherActive = function() {
                        var t = this;
                        this.clearActive(), this.observations_.forEach((function(e) {
                            e.isActive() && t.activeObservations_.push(e)
                        }))
                    }, t.prototype.broadcastActive = function() {
                        if (this.hasActive()) {
                            var t = this.callbackCtx_,
                                e = this.activeObservations_.map((function(t) {
                                    return new y(t.target, t.broadcastRect())
                                }));
                            this.callback_.call(t, e, t), this.clearActive()
                        }
                    }, t.prototype.clearActive = function() {
                        this.activeObservations_.splice(0)
                    }, t.prototype.hasActive = function() {
                        return this.activeObservations_.length > 0
                    }, t
                }(),
                _ = "undefined" != typeof WeakMap ? new WeakMap : new r,
                O = function t(e) {
                    if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function.");
                    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                    var n = u.getInstance(),
                        r = new E(e, n, this);
                    _.set(this, r)
                };
            ["observe", "unobserve", "disconnect"].forEach((function(t) {
                O.prototype[t] = function() {
                    var e;
                    return (e = _.get(this))[t].apply(e, arguments)
                }
            }));
            const x = void 0 !== i.ResizeObserver ? i.ResizeObserver : O
        },
        87462: (t, e, n) => {
            "use strict";

            function r() {
                return r = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, r.apply(this, arguments)
            }
            n.d(e, {
                Z: () => r
            })
        },
        94578: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => o
            });
            var r = n(89611);

            function o(t, e) {
                t.prototype = Object.create(e.prototype), t.prototype.constructor = t, (0, r.Z)(t, e)
            }
        },
        63366: (t, e, n) => {
            "use strict";

            function r(t, e) {
                if (null == t) return {};
                var n, r, o = {},
                    i = Object.keys(t);
                for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                return o
            }
            n.d(e, {
                Z: () => r
            })
        },
        89611: (t, e, n) => {
            "use strict";

            function r(t, e) {
                return r = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, r(t, e)
            }
            n.d(e, {
                Z: () => r
            })
        }
    }
]);
//# sourceMappingURL=sourcemaps/5daa5ab35ab7b06e.vendor.js.map