parcelRequire = function(e, r, t, n) {
    var i,
        o = "function" == typeof parcelRequire && parcelRequire,
        u = "function" == typeof require && require;
    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i)
                    return i(t, !0);
                if (o)
                    return o(t, !0);
                if (u && "string" == typeof t)
                    return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            p.resolve = function(r) {
                return e[t][1][r] || r
            },
            p.cache = {};
            var l = r[t] = new f.Module(t);
            e[t][0].call(l.exports, p, l, l.exports, this)
        }
        return r[t].exports;
        function p(e) {
            return f(p.resolve(e))
        }
    }
    f.isParcelRequire = !0,
    f.Module = function(e) {
        this.id = e,
        this.bundle = f,
        this.exports = {}
    },
    f.modules = e,
    f.cache = r,
    f.parent = o,
    f.register = function(r, t) {
        e[r] = [function(e, r) {
            r.exports = t
        }, {}]
    };
    for (var c = 0; c < t.length; c++)
        try {
            f(t[c])
        } catch (e) {
            i || (i = e)
        }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function() {
            return l
        }) : n && (this[n] = l)
    }
    if (parcelRequire = f, i)
        throw i;
    return f
}({
    "pBGv": [function(require, module, exports) {

        var t,
            e,
            n = module.exports = {};
        function r() {
            throw new Error("setTimeout has not been defined")
        }
        function o() {
            throw new Error("clearTimeout has not been defined")
        }
        function i(e) {
            if (t === setTimeout)
                return setTimeout(e, 0);
            if ((t === r || !t) && setTimeout)
                return t = setTimeout, setTimeout(e, 0);
            try {
                return t(e, 0)
            } catch (n) {
                try {
                    return t.call(null, e, 0)
                } catch (n) {
                    return t.call(this, e, 0)
                }
            }
        }
        function u(t) {
            if (e === clearTimeout)
                return clearTimeout(t);
            if ((e === o || !e) && clearTimeout)
                return e = clearTimeout, clearTimeout(t);
            try {
                return e(t)
            } catch (n) {
                try {
                    return e.call(null, t)
                } catch (n) {
                    return e.call(this, t)
                }
            }
        }
        !function() {
            try {
                t = "function" == typeof setTimeout ? setTimeout : r
            } catch (n) {
                t = r
            }
            try {
                e = "function" == typeof clearTimeout ? clearTimeout : o
            } catch (n) {
                e = o
            }
        }();
        var c,
            s = [],
            l = !1,
            a = -1;
        function f() {
            l && c && (l = !1, c.length ? s = c.concat(s) : a = -1, s.length && h())
        }
        function h() {
            if (!l) {
                var t = i(f);
                l = !0;
                for (var e = s.length; e;) {
                    for (c = s, s = []; ++a < e;)
                        c && c[a].run();
                    a = -1,
                    e = s.length
                }
                c = null,
                l = !1,
                u(t)
            }
        }
        function m(t, e) {
            this.fun = t,
            this.array = e
        }
        function p() {}
        n.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
            s.push(new m(t, e)),
            1 !== s.length || l || i(h)
        },
        m.prototype.run = function() {
            this.fun.apply(null, this.array)
        },
        n.title = "browser",
        n.env = {},
        n.argv = [],
        n.version = "",
        n.versions = {},
        n.on = p,
        n.addListener = p,
        n.once = p,
        n.off = p,
        n.removeListener = p,
        n.removeAllListeners = p,
        n.emit = p,
        n.prependListener = p,
        n.prependOnceListener = p,
        n.listeners = function(t) {
            return []
        },
        n.binding = function(t) {
            throw new Error("process.binding is not supported")
        },
        n.cwd = function() {
            return "/"
        },
        n.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        },
        n.umask = function() {
            return 0
        };
    }, {}],
    "juYr": [function(require, module, exports) {
        var global = arguments[3];
        var process = require("process");
        var define;
        var e,
            t = arguments[3],
            n = require("process");
        !function(e, t) {
            "use strict";
            "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
                if (!e.document)
                    throw new Error("jQuery requires a window with a document");
                return t(e)
            } : t(e)
        }("undefined" != typeof window ? window : this, function(t, n) {
            "use strict";
            var r = [],
                i = t.document,
                o = Object.getPrototypeOf,
                a = r.slice,
                s = r.concat,
                u = r.push,
                l = r.indexOf,
                c = {},
                f = c.toString,
                p = c.hasOwnProperty,
                d = p.toString,
                h = d.call(Object),
                g = {},
                v = function(e) {
                    return "function" == typeof e && "number" != typeof e.nodeType
                },
                y = function(e) {
                    return null != e && e === e.window
                },
                m = {
                    type: !0,
                    src: !0,
                    nonce: !0,
                    noModule: !0
                };
            function x(e, t, n) {
                var r,
                    o,
                    a = (n = n || i).createElement("script");
                if (a.text = e, t)
                    for (r in m)
                        (o = t[r] || t.getAttribute && t.getAttribute(r)) && a.setAttribute(r, o);
                n.head.appendChild(a).parentNode.removeChild(a)
            }
            function b(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[f.call(e)] || "object" : typeof e
            }
            var w = function(e, t) {
                    return new w.fn.init(e, t)
                },
                T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            function C(e) {
                var t = !!e && "length" in e && e.length,
                    n = b(e);
                return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }
            w.fn = w.prototype = {
                jquery: "3.4.1",
                constructor: w,
                length: 0,
                toArray: function() {
                    return a.call(this)
                },
                get: function(e) {
                    return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
                },
                pushStack: function(e) {
                    var t = w.merge(this.constructor(), e);
                    return t.prevObject = this, t
                },
                each: function(e) {
                    return w.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(w.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function() {
                    return this.pushStack(a.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: u,
                sort: r.sort,
                splice: r.splice
            },
            w.extend = w.fn.extend = function() {
                var e,
                    t,
                    n,
                    r,
                    i,
                    o,
                    a = arguments[0] || {},
                    s = 1,
                    u = arguments.length,
                    l = !1;
                for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || v(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
                    if (null != (e = arguments[s]))
                        for (t in e)
                            r = e[t],
                            "__proto__" !== t && a !== r && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || w.isPlainObject(n) ? n : {}, i = !1, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
                return a
            },
            w.extend({
                expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isPlainObject: function(e) {
                    var t,
                        n;
                    return !(!e || "[object Object]" !== f.call(e)) && (!(t = o(e)) || "function" == typeof (n = p.call(t, "constructor") && t.constructor) && d.call(n) === h)
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e)
                        return !1;
                    return !0
                },
                globalEval: function(e, t) {
                    x(e, {
                        nonce: t && t.nonce
                    })
                },
                each: function(e, t) {
                    var n,
                        r = 0;
                    if (C(e))
                        for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                            ;
                    else
                        for (r in e)
                            if (!1 === t.call(e[r], r, e[r]))
                                break;
                    return e
                },
                trim: function(e) {
                    return null == e ? "" : (e + "").replace(T, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : l.call(t, e, n)
                },
                merge: function(e, t) {
                    for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                        e[i++] = t[r];
                    return e.length = i, e
                },
                grep: function(e, t, n) {
                    for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                        !t(e[i], i) !== a && r.push(e[i]);
                    return r
                },
                map: function(e, t, n) {
                    var r,
                        i,
                        o = 0,
                        a = [];
                    if (C(e))
                        for (r = e.length; o < r; o++)
                            null != (i = t(e[o], o, n)) && a.push(i);
                    else
                        for (o in e)
                            null != (i = t(e[o], o, n)) && a.push(i);
                    return s.apply([], a)
                },
                guid: 1,
                support: g
            }),
            "function" == typeof Symbol && (w.fn[Symbol.iterator] = r[Symbol.iterator]),
            w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                c["[object " + t + "]"] = t.toLowerCase()
            });
            var E = function(e) {
                var t,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c,
                    f,
                    p,
                    d,
                    h,
                    g,
                    v,
                    y,
                    m,
                    x,
                    b = "sizzle" + 1 * new Date,
                    w = e.document,
                    T = 0,
                    C = 0,
                    E = ue(),
                    k = ue(),
                    S = ue(),
                    N = ue(),
                    A = function(e, t) {
                        return e === t && (f = !0), 0
                    },
                    D = {}.hasOwnProperty,
                    j = [],
                    q = j.pop,
                    L = j.push,
                    H = j.push,
                    O = j.slice,
                    P = function(e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] === t)
                                return n;
                        return -1
                    },
                    R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    M = "[\\x20\\t\\r\\n\\f]",
                    I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
                    $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
                    F = new RegExp(M + "+", "g"),
                    B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
                    _ = new RegExp("^" + M + "*," + M + "*"),
                    z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
                    U = new RegExp(M + "|>"),
                    X = new RegExp($),
                    V = new RegExp("^" + I + "$"),
                    G = {
                        ID: new RegExp("^#(" + I + ")"),
                        CLASS: new RegExp("^\\.(" + I + ")"),
                        TAG: new RegExp("^(" + I + "|[*])"),
                        ATTR: new RegExp("^" + W),
                        PSEUDO: new RegExp("^" + $),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + R + ")$", "i"),
                        needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
                    },
                    Y = /HTML$/i,
                    Q = /^(?:input|select|textarea|button)$/i,
                    J = /^h\d$/i,
                    K = /^[^{]+\{\s*\[native \w/,
                    Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ee = /[+~]/,
                    te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
                    ne = function(e, t, n) {
                        var r = "0x" + t - 65536;
                        return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    },
                    re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    ie = function(e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    oe = function() {
                        p()
                    },
                    ae = be(function(e) {
                        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    H.apply(j = O.call(w.childNodes), w.childNodes),
                    j[w.childNodes.length].nodeType
                } catch (ke) {
                    H = {
                        apply: j.length ? function(e, t) {
                            L.apply(e, O.call(t))
                        } : function(e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];)
                                ;
                            e.length = n - 1
                        }
                    }
                }
                function se(e, t, r, i) {
                    var o,
                        s,
                        l,
                        c,
                        f,
                        h,
                        y,
                        m = t && t.ownerDocument,
                        T = t ? t.nodeType : 9;
                    if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T)
                        return r;
                    if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                        if (11 !== T && (f = Z.exec(e)))
                            if (o = f[1]) {
                                if (9 === T) {
                                    if (!(l = t.getElementById(o)))
                                        return r;
                                    if (l.id === o)
                                        return r.push(l), r
                                } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o)
                                    return r.push(l), r
                            } else {
                                if (f[2])
                                    return H.apply(r, t.getElementsByTagName(e)), r;
                                if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
                                    return H.apply(r, t.getElementsByClassName(o)), r
                            }
                        if (n.qsa && !N[e + " "] && (!v || !v.test(e)) && (1 !== T || "object" !== t.nodeName.toLowerCase())) {
                            if (y = e, m = t, 1 === T && U.test(e)) {
                                for ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = b), s = (h = a(e)).length; s--;)
                                    h[s] = "#" + c + " " + xe(h[s]);
                                y = h.join(","),
                                m = ee.test(e) && ye(t.parentNode) || t
                            }
                            try {
                                return H.apply(r, m.querySelectorAll(y)), r
                            } catch (C) {
                                N(e, !0)
                            } finally {
                                c === b && t.removeAttribute("id")
                            }
                        }
                    }
                    return u(e.replace(B, "$1"), t, r, i)
                }
                function ue() {
                    var e = [];
                    return function t(n, i) {
                        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
                    }
                }
                function le(e) {
                    return e[b] = !0, e
                }
                function ce(e) {
                    var t = d.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (ke) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t),
                        t = null
                    }
                }
                function fe(e, t) {
                    for (var n = e.split("|"), i = n.length; i--;)
                        r.attrHandle[n[i]] = t
                }
                function pe(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r)
                        return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t)
                                return -1;
                    return e ? 1 : -1
                }
                function de(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }
                function he(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }
                function ge(e) {
                    return function(t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }
                function ve(e) {
                    return le(function(t) {
                        return t = +t, le(function(n, r) {
                            for (var i, o = e([], n.length, t), a = o.length; a--;)
                                n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }
                function ye(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (t in n = se.support = {}, o = se.isXML = function(e) {
                    var t = e.namespaceURI,
                        n = (e.ownerDocument || e).documentElement;
                    return !Y.test(t || n && n.nodeName || "HTML")
                }, p = se.setDocument = function(e) {
                    var t,
                        i,
                        a = e ? e.ownerDocument || e : w;
                    return a !== d && 9 === a.nodeType && a.documentElement ? (h = (d = a).documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.attributes = ce(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), n.getElementsByTagName = ce(function(e) {
                        return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
                    }), n.getElementsByClassName = K.test(d.getElementsByClassName), n.getById = ce(function(e) {
                        return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
                    }), n.getById ? (r.filter.ID = function(e) {
                        var t = e.replace(te, ne);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }, r.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && g) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }) : (r.filter.ID = function(e) {
                        var t = e.replace(te, ne);
                        return function(e) {
                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }, r.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && g) {
                            var n,
                                r,
                                i,
                                o = t.getElementById(e);
                            if (o) {
                                if ((n = o.getAttributeNode("id")) && n.value === e)
                                    return [o];
                                for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                    if ((n = o.getAttributeNode("id")) && n.value === e)
                                        return [o]
                            }
                            return []
                        }
                    }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                    } : function(e, t) {
                        var n,
                            r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[i++];)
                                1 === n.nodeType && r.push(n);
                            return r
                        }
                        return o
                    }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                        if (void 0 !== t.getElementsByClassName && g)
                            return t.getElementsByClassName(e)
                    }, y = [], v = [], (n.qsa = K.test(d.querySelectorAll)) && (ce(function(e) {
                        h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                        e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"),
                        e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="),
                        e.querySelectorAll(":checked").length || v.push(":checked"),
                        e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]")
                    }), ce(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = d.createElement("input");
                        t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                        h.appendChild(e).disabled = !0,
                        2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        v.push(",.*:")
                    })), (n.matchesSelector = K.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce(function(e) {
                        n.disconnectedMatch = m.call(e, "*"),
                        m.call(e, "[s!='']:x"),
                        y.push("!=", $)
                    }), v = v.length && new RegExp(v.join("|")), y = y.length && new RegExp(y.join("|")), t = K.test(h.compareDocumentPosition), x = t || K.test(h.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e)
                                    return !0;
                        return !1
                    }, A = t ? function(e, t) {
                        if (e === t)
                            return f = !0, 0;
                        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? P(c, e) - P(c, t) : 0 : 4 & r ? -1 : 1)
                    } : function(e, t) {
                        if (e === t)
                            return f = !0, 0;
                        var n,
                            r = 0,
                            i = e.parentNode,
                            o = t.parentNode,
                            a = [e],
                            s = [t];
                        if (!i || !o)
                            return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? P(c, e) - P(c, t) : 0;
                        if (i === o)
                            return pe(e, t);
                        for (n = e; n = n.parentNode;)
                            a.unshift(n);
                        for (n = t; n = n.parentNode;)
                            s.unshift(n);
                        for (; a[r] === s[r];)
                            r++;
                        return r ? pe(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
                    }, d) : d
                }, se.matches = function(e, t) {
                    return se(e, null, null, t)
                }, se.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== d && p(e), n.matchesSelector && g && !N[t + " "] && (!y || !y.test(t)) && (!v || !v.test(t)))
                        try {
                            var r = m.call(e, t);
                            if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                return r
                        } catch (ke) {
                            N(t, !0)
                        }
                    return se(t, d, null, [e]).length > 0
                }, se.contains = function(e, t) {
                    return (e.ownerDocument || e) !== d && p(e), x(e, t)
                }, se.attr = function(e, t) {
                    (e.ownerDocument || e) !== d && p(e);
                    var i = r.attrHandle[t.toLowerCase()],
                        o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                    return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                }, se.escape = function(e) {
                    return (e + "").replace(re, ie)
                }, se.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, se.uniqueSort = function(e) {
                    var t,
                        r = [],
                        i = 0,
                        o = 0;
                    if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(A), f) {
                        for (; t = e[o++];)
                            t === e[o] && (i = r.push(o));
                        for (; i--;)
                            e.splice(r[i], 1)
                    }
                    return c = null, e
                }, i = se.getText = function(e) {
                    var t,
                        n = "",
                        r = 0,
                        o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent)
                                return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling)
                                n += i(e)
                        } else if (3 === o || 4 === o)
                            return e.nodeValue
                    } else
                        for (; t = e[r++];)
                            n += i(t);
                    return n
                }, (r = se.selectors = {
                    cacheLength: 50,
                    createPseudo: le,
                    match: G,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t,
                                n = !e[6] && e[2];
                            return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(te, ne).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = E[e + " "];
                            return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function(e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                })
                        },
                        ATTR: function(e, t, n) {
                            return function(r) {
                                var i = se.attr(r, e);
                                return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                            }
                        },
                        CHILD: function(e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === r && 0 === i ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, u) {
                                var l,
                                    c,
                                    f,
                                    p,
                                    d,
                                    h,
                                    g = o !== a ? "nextSibling" : "previousSibling",
                                    v = t.parentNode,
                                    y = s && t.nodeName.toLowerCase(),
                                    m = !u && !s,
                                    x = !1;
                                if (v) {
                                    if (o) {
                                        for (; g;) {
                                            for (p = t; p = p[g];)
                                                if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType)
                                                    return !1;
                                            h = g = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? v.firstChild : v.lastChild], a && m) {
                                        for (x = (d = (l = (c = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();)
                                            if (1 === p.nodeType && ++x && p === t) {
                                                c[e] = [T, d, x];
                                                break
                                            }
                                    } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
                                        for (; (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++x || (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p !== t));)
                                            ;
                                    return (x -= i) === r || x % r == 0 && x / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var n,
                                i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                            return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, n) {
                                for (var r, o = i(e, t), a = o.length; a--;)
                                    e[r = P(e, o[a])] = !(n[r] = o[a])
                            }) : function(e) {
                                return i(e, 0, n)
                            }) : i
                        }
                    },
                    pseudos: {
                        not: le(function(e) {
                            var t = [],
                                n = [],
                                r = s(e.replace(B, "$1"));
                            return r[b] ? le(function(e, t, n, i) {
                                for (var o, a = r(e, null, i, []), s = e.length; s--;)
                                    (o = a[s]) && (e[s] = !(t[s] = o))
                            }) : function(e, i, o) {
                                return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                            }
                        }),
                        has: le(function(e) {
                            return function(t) {
                                return se(e, t).length > 0
                            }
                        }),
                        contains: le(function(e) {
                            return e = e.replace(te, ne), function(t) {
                                return (t.textContent || i(t)).indexOf(e) > -1
                            }
                        }),
                        lang: le(function(e) {
                            return V.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), function(t) {
                                var n;
                                do {
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                        return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === h
                        },
                        focus: function(e) {
                            return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: ge(!1),
                        disabled: ge(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6)
                                    return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !r.pseudos.empty(e)
                        },
                        header: function(e) {
                            return J.test(e.nodeName)
                        },
                        input: function(e) {
                            return Q.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: ve(function() {
                            return [0]
                        }),
                        last: ve(function(e, t) {
                            return [t - 1]
                        }),
                        eq: ve(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: ve(function(e, t) {
                            for (var n = 0; n < t; n += 2)
                                e.push(n);
                            return e
                        }),
                        odd: ve(function(e, t) {
                            for (var n = 1; n < t; n += 2)
                                e.push(n);
                            return e
                        }),
                        lt: ve(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;)
                                e.push(r);
                            return e
                        }),
                        gt: ve(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t;)
                                e.push(r);
                            return e
                        })
                    }
                }).pseudos.nth = r.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                })
                    r.pseudos[t] = de(t);
                for (t in {
                    submit: !0,
                    reset: !0
                })
                    r.pseudos[t] = he(t);
                function me() {}
                function xe(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++)
                        r += e[t].value;
                    return r
                }
                function be(e, t, n) {
                    var r = t.dir,
                        i = t.next,
                        o = i || r,
                        a = n && "parentNode" === o,
                        s = C++;
                    return t.first ? function(t, n, i) {
                        for (; t = t[r];)
                            if (1 === t.nodeType || a)
                                return e(t, n, i);
                        return !1
                    } : function(t, n, u) {
                        var l,
                            c,
                            f,
                            p = [T, s];
                        if (u) {
                            for (; t = t[r];)
                                if ((1 === t.nodeType || a) && e(t, n, u))
                                    return !0
                        } else
                            for (; t = t[r];)
                                if (1 === t.nodeType || a)
                                    if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase())
                                        t = t[r] || t;
                                    else {
                                        if ((l = c[o]) && l[0] === T && l[1] === s)
                                            return p[2] = l[2];
                                        if (c[o] = p, p[2] = e(t, n, u))
                                            return !0
                                    }
                        return !1
                    }
                }
                function we(e) {
                    return e.length > 1 ? function(t, n, r) {
                        for (var i = e.length; i--;)
                            if (!e[i](t, n, r))
                                return !1;
                        return !0
                    } : e[0]
                }
                function Te(e, t, n, r, i) {
                    for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
                    return a
                }
                function Ce(e, t, n, r, i, o) {
                    return r && !r[b] && (r = Ce(r)), i && !i[b] && (i = Ce(i, o)), le(function(o, a, s, u) {
                        var l,
                            c,
                            f,
                            p = [],
                            d = [],
                            h = a.length,
                            g = o || function(e, t, n) {
                                for (var r = 0, i = t.length; r < i; r++)
                                    se(e, t[r], n);
                                return n
                            }(t || "*", s.nodeType ? [s] : s, []),
                            v = !e || !o && t ? g : Te(g, p, e, s, u),
                            y = n ? i || (o ? e : h || r) ? [] : a : v;
                        if (n && n(v, y, s, u), r)
                            for (l = Te(y, d), r(l, [], s, u), c = l.length; c--;)
                                (f = l[c]) && (y[d[c]] = !(v[d[c]] = f));
                        if (o) {
                            if (i || e) {
                                if (i) {
                                    for (l = [], c = y.length; c--;)
                                        (f = y[c]) && l.push(v[c] = f);
                                    i(null, y = [], l, u)
                                }
                                for (c = y.length; c--;)
                                    (f = y[c]) && (l = i ? P(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                            }
                        } else
                            y = Te(y === a ? y.splice(h, y.length) : y),
                            i ? i(null, a, y, u) : H.apply(a, y)
                    })
                }
                function Ee(e) {
                    for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = be(function(e) {
                            return e === t
                        }, s, !0), f = be(function(e) {
                            return P(t, e) > -1
                        }, s, !0), p = [function(e, n, r) {
                            var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                            return t = null, i
                        }]; u < o; u++)
                        if (n = r.relative[e[u].type])
                            p = [be(we(p), n)];
                        else {
                            if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                                for (i = ++u; i < o && !r.relative[e[i].type]; i++)
                                    ;
                                return Ce(u > 1 && we(p), u > 1 && xe(e.slice(0, u - 1).concat({
                                    value: " " === e[u - 2].type ? "*" : ""
                                })).replace(B, "$1"), n, u < i && Ee(e.slice(u, i)), i < o && Ee(e = e.slice(i)), i < o && xe(e))
                            }
                            p.push(n)
                        }
                    return we(p)
                }
                return me.prototype = r.filters = r.pseudos, r.setFilters = new me, a = se.tokenize = function(e, t) {
                    var n,
                        i,
                        o,
                        a,
                        s,
                        u,
                        l,
                        c = k[e + " "];
                    if (c)
                        return t ? 0 : c.slice(0);
                    for (s = e, u = [], l = r.preFilter; s;) {
                        for (a in n && !(i = _.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = z.exec(s)) && (n = i.shift(), o.push({
                            value: n,
                            type: i[0].replace(B, " ")
                        }), s = s.slice(n.length)), r.filter)
                            !(i = G[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                                value: n,
                                type: a,
                                matches: i
                            }), s = s.slice(n.length));
                        if (!n)
                            break
                    }
                    return t ? s.length : s ? se.error(e) : k(e, u).slice(0)
                }, s = se.compile = function(e, t) {
                    var n,
                        i = [],
                        o = [],
                        s = S[e + " "];
                    if (!s) {
                        for (t || (t = a(e)), n = t.length; n--;)
                            (s = Ee(t[n]))[b] ? i.push(s) : o.push(s);
                        (s = S(e, function(e, t) {
                            var n = t.length > 0,
                                i = e.length > 0,
                                o = function(o, a, s, u, c) {
                                    var f,
                                        h,
                                        v,
                                        y = 0,
                                        m = "0",
                                        x = o && [],
                                        b = [],
                                        w = l,
                                        C = o || i && r.find.TAG("*", c),
                                        E = T += null == w ? 1 : Math.random() || .1,
                                        k = C.length;
                                    for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                                        if (i && f) {
                                            for (h = 0, a || f.ownerDocument === d || (p(f), s = !g); v = e[h++];)
                                                if (v(f, a || d, s)) {
                                                    u.push(f);
                                                    break
                                                }
                                            c && (T = E)
                                        }
                                        n && ((f = !v && f) && y--, o && x.push(f))
                                    }
                                    if (y += m, n && m !== y) {
                                        for (h = 0; v = t[h++];)
                                            v(x, b, a, s);
                                        if (o) {
                                            if (y > 0)
                                                for (; m--;)
                                                    x[m] || b[m] || (b[m] = q.call(u));
                                            b = Te(b)
                                        }
                                        H.apply(u, b),
                                        c && !o && b.length > 0 && y + t.length > 1 && se.uniqueSort(u)
                                    }
                                    return c && (T = E, l = w), x
                                };
                            return n ? le(o) : o
                        }(o, i))).selector = e
                    }
                    return s
                }, u = se.select = function(e, t, n, i) {
                    var o,
                        u,
                        l,
                        c,
                        f,
                        p = "function" == typeof e && e,
                        d = !i && a(e = p.selector || e);
                    if (n = n || [], 1 === d.length) {
                        if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                            if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0]))
                                return n;
                            p && (t = t.parentNode),
                            e = e.slice(u.shift().value.length)
                        }
                        for (o = G.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o], !r.relative[c = l.type]);)
                            if ((f = r.find[c]) && (i = f(l.matches[0].replace(te, ne), ee.test(u[0].type) && ye(t.parentNode) || t))) {
                                if (u.splice(o, 1), !(e = i.length && xe(u)))
                                    return H.apply(n, i), n;
                                break
                            }
                    }
                    return (p || s(e, d))(i, t, !g, n, !t || ee.test(e) && ye(t.parentNode) || t), n
                }, n.sortStable = b.split("").sort(A).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ce(function(e) {
                    return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
                }), ce(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || fe("type|href|height|width", function(e, t, n) {
                    if (!n)
                        return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), n.attributes && ce(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || fe("value", function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase())
                        return e.defaultValue
                }), ce(function(e) {
                    return null == e.getAttribute("disabled")
                }) || fe(R, function(e, t, n) {
                    var r;
                    if (!n)
                        return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), se
            }(t);
            w.find = E,
            w.expr = E.selectors,
            w.expr[":"] = w.expr.pseudos,
            w.uniqueSort = w.unique = E.uniqueSort,
            w.text = E.getText,
            w.isXMLDoc = E.isXML,
            w.contains = E.contains,
            w.escapeSelector = E.escape;
            var k = function(e, t, n) {
                    for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (i && w(e).is(n))
                                break;
                            r.push(e)
                        }
                    return r
                },
                S = function(e, t) {
                    for (var n = []; e; e = e.nextSibling)
                        1 === e.nodeType && e !== t && n.push(e);
                    return n
                },
                N = w.expr.match.needsContext;
            function A(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }
            var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function j(e, t, n) {
                return v(t) ? w.grep(e, function(e, r) {
                    return !!t.call(e, r, e) !== n
                }) : t.nodeType ? w.grep(e, function(e) {
                    return e === t !== n
                }) : "string" != typeof t ? w.grep(e, function(e) {
                    return l.call(t, e) > -1 !== n
                }) : w.filter(t, e, n)
            }
            w.filter = function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            },
            w.fn.extend({
                find: function(e) {
                    var t,
                        n,
                        r = this.length,
                        i = this;
                    if ("string" != typeof e)
                        return this.pushStack(w(e).filter(function() {
                            for (t = 0; t < r; t++)
                                if (w.contains(i[t], this))
                                    return !0
                        }));
                    for (n = this.pushStack([]), t = 0; t < r; t++)
                        w.find(e, i[t], n);
                    return r > 1 ? w.uniqueSort(n) : n
                },
                filter: function(e) {
                    return this.pushStack(j(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(j(this, e || [], !0))
                },
                is: function(e) {
                    return !!j(this, "string" == typeof e && N.test(e) ? w(e) : e || [], !1).length
                }
            });
            var q,
                L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (w.fn.init = function(e, t, n) {
                var r,
                    o;
                if (!e)
                    return this;
                if (n = n || q, "string" == typeof e) {
                    if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !r[1] && t)
                        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), D.test(r[1]) && w.isPlainObject(t))
                            for (r in t)
                                v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this
                    }
                    return (o = i.getElementById(r[2])) && (this[0] = o, this.length = 1), this
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
            }).prototype = w.fn,
            q = w(i);
            var H = /^(?:parents|prev(?:Until|All))/,
                O = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            function P(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType;)
                    ;
                return e
            }
            w.fn.extend({
                has: function(e) {
                    var t = w(e, this),
                        n = t.length;
                    return this.filter(function() {
                        for (var e = 0; e < n; e++)
                            if (w.contains(this, t[e]))
                                return !0
                    })
                },
                closest: function(e, t) {
                    var n,
                        r = 0,
                        i = this.length,
                        o = [],
                        a = "string" != typeof e && w(e);
                    if (!N.test(e))
                        for (; r < i; r++)
                            for (n = this[r]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                                    o.push(n);
                                    break
                                }
                    return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? l.call(w(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }),
            w.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return k(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return k(e, "parentNode", n)
                },
                next: function(e) {
                    return P(e, "nextSibling")
                },
                prev: function(e) {
                    return P(e, "previousSibling")
                },
                nextAll: function(e) {
                    return k(e, "nextSibling")
                },
                prevAll: function(e) {
                    return k(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return k(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return k(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return S((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return S(e.firstChild)
                },
                contents: function(e) {
                    return void 0 !== e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
                }
            }, function(e, t) {
                w.fn[e] = function(n, r) {
                    var i = w.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i)
                }
            });
            var R = /[^\x20\t\r\n\f]+/g;
            function M(e) {
                return e
            }
            function I(e) {
                throw e
            }
            function W(e, t, n, r) {
                var i;
                try {
                    e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
                } catch (e) {
                    n.apply(void 0, [e])
                }
            }
            w.Callbacks = function(e) {
                e = "string" == typeof e ? function(e) {
                    var t = {};
                    return w.each(e.match(R) || [], function(e, n) {
                        t[n] = !0
                    }), t
                }(e) : w.extend({}, e);
                var t,
                    n,
                    r,
                    i,
                    o = [],
                    a = [],
                    s = -1,
                    u = function() {
                        for (i = i || e.once, r = t = !0; a.length; s = -1)
                            for (n = a.shift(); ++s < o.length;)
                                !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                        e.memory || (n = !1),
                        t = !1,
                        i && (o = n ? [] : "")
                    },
                    l = {
                        add: function() {
                            return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                                w.each(n, function(n, r) {
                                    v(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== b(r) && t(r)
                                })
                            }(arguments), n && !t && u()), this
                        },
                        remove: function() {
                            return w.each(arguments, function(e, t) {
                                for (var n; (n = w.inArray(t, o, n)) > -1;)
                                    o.splice(n, 1),
                                    n <= s && s--
                            }), this
                        },
                        has: function(e) {
                            return e ? w.inArray(e, o) > -1 : o.length > 0
                        },
                        empty: function() {
                            return o && (o = []), this
                        },
                        disable: function() {
                            return i = a = [], o = n = "", this
                        },
                        disabled: function() {
                            return !o
                        },
                        lock: function() {
                            return i = a = [], n || t || (o = n = ""), this
                        },
                        locked: function() {
                            return !!i
                        },
                        fireWith: function(e, n) {
                            return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
                        },
                        fire: function() {
                            return l.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!r
                        }
                    };
                return l
            },
            w.extend({
                Deferred: function(e) {
                    var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
                        r = "pending",
                        i = {
                            state: function() {
                                return r
                            },
                            always: function() {
                                return o.done(arguments).fail(arguments), this
                            },
                            catch: function(e) {
                                return i.then(null, e)
                            },
                            pipe: function() {
                                var e = arguments;
                                return w.Deferred(function(t) {
                                    w.each(n, function(n, r) {
                                        var i = v(e[r[4]]) && e[r[4]];
                                        o[r[1]](function() {
                                            var e = i && i.apply(this, arguments);
                                            e && v(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                        })
                                    }),
                                    e = null
                                }).promise()
                            },
                            then: function(e, r, i) {
                                var o = 0;
                                function a(e, n, r, i) {
                                    return function() {
                                        var s = this,
                                            u = arguments,
                                            l = function() {
                                                var t,
                                                    l;
                                                if (!(e < o)) {
                                                    if ((t = r.apply(s, u)) === n.promise())
                                                        throw new TypeError("Thenable self-resolution");
                                                    l = t && ("object" == typeof t || "function" == typeof t) && t.then,
                                                    v(l) ? i ? l.call(t, a(o, n, M, i), a(o, n, I, i)) : (o++, l.call(t, a(o, n, M, i), a(o, n, I, i), a(o, n, M, n.notifyWith))) : (r !== M && (s = void 0, u = [t]), (i || n.resolveWith)(s, u))
                                                }
                                            },
                                            c = i ? l : function() {
                                                try {
                                                    l()
                                                } catch (t) {
                                                    w.Deferred.exceptionHook && w.Deferred.exceptionHook(t, c.stackTrace),
                                                    e + 1 >= o && (r !== I && (s = void 0, u = [t]), n.rejectWith(s, u))
                                                }
                                            };
                                        e ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), t.setTimeout(c))
                                    }
                                }
                                return w.Deferred(function(t) {
                                    n[0][3].add(a(0, t, v(i) ? i : M, t.notifyWith)),
                                    n[1][3].add(a(0, t, v(e) ? e : M)),
                                    n[2][3].add(a(0, t, v(r) ? r : I))
                                }).promise()
                            },
                            promise: function(e) {
                                return null != e ? w.extend(e, i) : i
                            }
                        },
                        o = {};
                    return w.each(n, function(e, t) {
                        var a = t[2],
                            s = t[5];
                        i[t[1]] = a.add,
                        s && a.add(function() {
                            r = s
                        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock),
                        a.add(t[3].fire),
                        o[t[0]] = function() {
                            return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                        },
                        o[t[0] + "With"] = a.fireWith
                    }), i.promise(o), e && e.call(o, o), o
                },
                when: function(e) {
                    var t = arguments.length,
                        n = t,
                        r = Array(n),
                        i = a.call(arguments),
                        o = w.Deferred(),
                        s = function(e) {
                            return function(n) {
                                r[e] = this,
                                i[e] = arguments.length > 1 ? a.call(arguments) : n,
                                --t || o.resolveWith(r, i)
                            }
                        };
                    if (t <= 1 && (W(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || v(i[n] && i[n].then)))
                        return o.then();
                    for (; n--;)
                        W(i[n], s(n), o.reject);
                    return o.promise()
                }
            });
            var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            w.Deferred.exceptionHook = function(e, n) {
                t.console && t.console.warn && e && $.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
            },
            w.readyException = function(e) {
                t.setTimeout(function() {
                    throw e
                })
            };
            var F = w.Deferred();
            function B() {
                i.removeEventListener("DOMContentLoaded", B),
                t.removeEventListener("load", B),
                w.ready()
            }
            w.fn.ready = function(e) {
                return F.then(e).catch(function(e) {
                    w.readyException(e)
                }), this
            },
            w.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(e) {
                    (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(i, [w]))
                }
            }),
            w.ready.then = F.then,
            "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? t.setTimeout(w.ready) : (i.addEventListener("DOMContentLoaded", B), t.addEventListener("load", B));
            var _ = function(e, t, n, r, i, o, a) {
                    var s = 0,
                        u = e.length,
                        l = null == n;
                    if ("object" === b(n))
                        for (s in i = !0, n)
                            _(e, t, s, n[s], !0, o, a);
                    else if (void 0 !== r && (i = !0, v(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                        return l.call(w(e), n)
                    })), t))
                        for (; s < u; s++)
                            t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
                },
                z = /^-ms-/,
                U = /-([a-z])/g;
            function X(e, t) {
                return t.toUpperCase()
            }
            function V(e) {
                return e.replace(z, "ms-").replace(U, X)
            }
            var G = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
            function Y() {
                this.expando = w.expando + Y.uid++
            }
            Y.uid = 1,
            Y.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                },
                set: function(e, t, n) {
                    var r,
                        i = this.cache(e);
                    if ("string" == typeof t)
                        i[V(t)] = n;
                    else
                        for (r in t)
                            i[V(r)] = t[r];
                    return i
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
                },
                access: function(e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                },
                remove: function(e, t) {
                    var n,
                        r = e[this.expando];
                    if (void 0 !== r) {
                        if (void 0 !== t) {
                            n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length;
                            for (; n--;)
                                delete r[t[n]]
                        }
                        (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !w.isEmptyObject(t)
                }
            };
            var Q = new Y,
                J = new Y,
                K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                Z = /[A-Z]/g;
            function ee(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType)
                    if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                        try {
                            n = function(e) {
                                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : K.test(e) ? JSON.parse(e) : e)
                            }(n)
                        } catch (i) {}
                        J.set(e, t, n)
                    } else
                        n = void 0;
                return n
            }
            w.extend({
                hasData: function(e) {
                    return J.hasData(e) || Q.hasData(e)
                },
                data: function(e, t, n) {
                    return J.access(e, t, n)
                },
                removeData: function(e, t) {
                    J.remove(e, t)
                },
                _data: function(e, t, n) {
                    return Q.access(e, t, n)
                },
                _removeData: function(e, t) {
                    Q.remove(e, t)
                }
            }),
            w.fn.extend({
                data: function(e, t) {
                    var n,
                        r,
                        i,
                        o = this[0],
                        a = o && o.attributes;
                    if (void 0 === e) {
                        if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                            for (n = a.length; n--;)
                                a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r]));
                            Q.set(o, "hasDataAttrs", !0)
                        }
                        return i
                    }
                    return "object" == typeof e ? this.each(function() {
                        J.set(this, e)
                    }) : _(this, function(t) {
                        var n;
                        if (o && void 0 === t)
                            return void 0 !== (n = J.get(o, e)) ? n : void 0 !== (n = ee(o, e)) ? n : void 0;
                        this.each(function() {
                            J.set(this, e, t)
                        })
                    }, null, t, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each(function() {
                        J.remove(this, e)
                    })
                }
            }),
            w.extend({
                queue: function(e, t, n) {
                    var r;
                    if (e)
                        return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, w.makeArray(n)) : r.push(n)), r || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = w.queue(e, t),
                        r = n.length,
                        i = n.shift(),
                        o = w._queueHooks(e, t);
                    "inprogress" === i && (i = n.shift(), r--),
                    i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                        w.dequeue(e, t)
                    }, o)),
                    !r && o && o.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return Q.get(e, n) || Q.access(e, n, {
                            empty: w.Callbacks("once memory").add(function() {
                                Q.remove(e, [t + "queue", n])
                            })
                        })
                }
            }),
            w.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = w.queue(this, e, t);
                        w._queueHooks(this, e),
                        "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        w.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n,
                        r = 1,
                        i = w.Deferred(),
                        o = this,
                        a = this.length,
                        s = function() {
                            --r || i.resolveWith(o, [o])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)
                        (n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                    return s(), i.promise(t)
                }
            });
            var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
                re = ["Top", "Right", "Bottom", "Left"],
                ie = i.documentElement,
                oe = function(e) {
                    return w.contains(e.ownerDocument, e)
                },
                ae = {
                    composed: !0
                };
            ie.getRootNode && (oe = function(e) {
                return w.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
            });
            var se = function(e, t) {
                    return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === w.css(e, "display")
                },
                ue = function(e, t, n, r) {
                    var i,
                        o,
                        a = {};
                    for (o in t)
                        a[o] = e.style[o],
                        e.style[o] = t[o];
                    for (o in i = n.apply(e, r || []), t)
                        e.style[o] = a[o];
                    return i
                };
            function le(e, t, n, r) {
                var i,
                    o,
                    a = 20,
                    s = r ? function() {
                        return r.cur()
                    } : function() {
                        return w.css(e, t, "")
                    },
                    u = s(),
                    l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
                    c = e.nodeType && (w.cssNumber[t] || "px" !== l && +u) && ne.exec(w.css(e, t));
                if (c && c[3] !== l) {
                    for (u /= 2, l = l || c[3], c = +u || 1; a--;)
                        w.style(e, t, c + l),
                        (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                        c /= o;
                    c *= 2,
                    w.style(e, t, c + l),
                    n = n || []
                }
                return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
            }
            var ce = {};
            function fe(e) {
                var t,
                    n = e.ownerDocument,
                    r = e.nodeName,
                    i = ce[r];
                return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), ce[r] = i, i)
            }
            function pe(e, t) {
                for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
                    (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = Q.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && se(r) && (i[o] = fe(r))) : "none" !== n && (i[o] = "none", Q.set(r, "display", n)));
                for (o = 0; o < a; o++)
                    null != i[o] && (e[o].style.display = i[o]);
                return e
            }
            w.fn.extend({
                show: function() {
                    return pe(this, !0)
                },
                hide: function() {
                    return pe(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        se(this) ? w(this).show() : w(this).hide()
                    })
                }
            });
            var de = /^(?:checkbox|radio)$/i,
                he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                ge = /^$|^module$|\/(?:java|ecma)script/i,
                ve = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
            function ye(e, t) {
                var n;
                return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? w.merge([e], n) : n
            }
            function me(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
            }
            ve.optgroup = ve.option,
            ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead,
            ve.th = ve.td;
            var xe,
                be,
                we = /<|&#?\w+;/;
            function Te(e, t, n, r, i) {
                for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
                    if ((o = e[d]) || 0 === o)
                        if ("object" === b(o))
                            w.merge(p, o.nodeType ? [o] : o);
                        else if (we.test(o)) {
                            for (a = a || f.appendChild(t.createElement("div")), s = (he.exec(o) || ["", ""])[1].toLowerCase(), u = ve[s] || ve._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0]; c--;)
                                a = a.lastChild;
                            w.merge(p, a.childNodes),
                            (a = f.firstChild).textContent = ""
                        } else
                            p.push(t.createTextNode(o));
                for (f.textContent = "", d = 0; o = p[d++];)
                    if (r && w.inArray(o, r) > -1)
                        i && i.push(o);
                    else if (l = oe(o), a = ye(f.appendChild(o), "script"), l && me(a), n)
                        for (c = 0; o = a[c++];)
                            ge.test(o.type || "") && n.push(o);
                return f
            }
            xe = i.createDocumentFragment().appendChild(i.createElement("div")),
            (be = i.createElement("input")).setAttribute("type", "radio"),
            be.setAttribute("checked", "checked"),
            be.setAttribute("name", "t"),
            xe.appendChild(be),
            g.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked,
            xe.innerHTML = "<textarea>x</textarea>",
            g.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue;
            var Ce = /^key/,
                Ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                ke = /^([^.]*)(?:\.(.+)|)/;
            function Se() {
                return !0
            }
            function Ne() {
                return !1
            }
            function Ae(e, t) {
                return e === function() {
                    try {
                        return i.activeElement
                    } catch (e) {}
                }() == ("focus" === t)
            }
            function De(e, t, n, r, i, o) {
                var a,
                    s;
                if ("object" == typeof t) {
                    for (s in "string" != typeof n && (r = r || n, n = void 0), t)
                        De(e, s, n, r, t[s], o);
                    return e
                }
                if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i)
                    i = Ne;
                else if (!i)
                    return e;
                return 1 === o && (a = i, (i = function(e) {
                    return w().off(e), a.apply(this, arguments)
                }).guid = a.guid || (a.guid = w.guid++)), e.each(function() {
                    w.event.add(this, t, i, r, n)
                })
            }
            function je(e, t, n) {
                n ? (Q.set(e, t, !1), w.event.add(e, t, {
                    namespace: !1,
                    handler: function(e) {
                        var r,
                            i,
                            o = Q.get(this, t);
                        if (1 & e.isTrigger && this[t]) {
                            if (o.length)
                                (w.event.special[t] || {}).delegateType && e.stopPropagation();
                            else if (o = a.call(arguments), Q.set(this, t, o), r = n(this, t), this[t](), o !== (i = Q.get(this, t)) || r ? Q.set(this, t, !1) : i = {}, o !== i)
                                return e.stopImmediatePropagation(), e.preventDefault(), i.value
                        } else
                            o.length && (Q.set(this, t, {
                                value: w.event.trigger(w.extend(o[0], w.Event.prototype), o.slice(1), this)
                            }), e.stopImmediatePropagation())
                    }
                })) : void 0 === Q.get(e, t) && w.event.add(e, t, Se)
            }
            w.event = {
                global: {},
                add: function(e, t, n, r, i) {
                    var o,
                        a,
                        s,
                        u,
                        l,
                        c,
                        f,
                        p,
                        d,
                        h,
                        g,
                        v = Q.get(e);
                    if (v)
                        for (n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(ie, i), n.guid || (n.guid = w.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(t) {
                            return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                        }), l = (t = (t || "").match(R) || [""]).length; l--;)
                            d = g = (s = ke.exec(t[l]) || [])[1],
                            h = (s[2] || "").split(".").sort(),
                            d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
                                type: d,
                                origType: g,
                                data: r,
                                handler: n,
                                guid: n.guid,
                                selector: i,
                                needsContext: i && w.expr.match.needsContext.test(i),
                                namespace: h.join(".")
                            }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0)
                },
                remove: function(e, t, n, r, i) {
                    var o,
                        a,
                        s,
                        u,
                        l,
                        c,
                        f,
                        p,
                        d,
                        h,
                        g,
                        v = Q.hasData(e) && Q.get(e);
                    if (v && (u = v.events)) {
                        for (l = (t = (t || "").match(R) || [""]).length; l--;)
                            if (d = g = (s = ke.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                                for (f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;)
                                    c = p[o],
                                    !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                                a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || w.removeEvent(e, d, v.handle), delete u[d])
                            } else
                                for (d in u)
                                    w.event.remove(e, d + t[l], n, r, !0);
                        w.isEmptyObject(u) && Q.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var t,
                        n,
                        r,
                        i,
                        o,
                        a,
                        s = w.event.fix(e),
                        u = new Array(arguments.length),
                        l = (Q.get(this, "events") || {})[s.type] || [],
                        c = w.event.special[s.type] || {};
                    for (u[0] = s, t = 1; t < arguments.length; t++)
                        u[t] = arguments[t];
                    if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                        for (a = w.event.handlers.call(this, s, l), t = 0; (i = a[t++]) && !s.isPropagationStopped();)
                            for (s.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();)
                                s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((w.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, s), s.result
                    }
                },
                handlers: function(e, t) {
                    var n,
                        r,
                        i,
                        o,
                        a,
                        s = [],
                        u = t.delegateCount,
                        l = e.target;
                    if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                        for (; l !== this; l = l.parentNode || this)
                            if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                                for (o = [], a = {}, n = 0; n < u; n++)
                                    void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length),
                                    a[i] && o.push(r);
                                o.length && s.push({
                                    elem: l,
                                    handlers: o
                                })
                            }
                    return l = this, u < t.length && s.push({
                        elem: l,
                        handlers: t.slice(u)
                    }), s
                },
                addProp: function(e, t) {
                    Object.defineProperty(w.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: v(t) ? function() {
                            if (this.originalEvent)
                                return t(this.originalEvent)
                        } : function() {
                            if (this.originalEvent)
                                return this.originalEvent[e]
                        },
                        set: function(t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                    })
                },
                fix: function(e) {
                    return e[w.expando] ? e : new w.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        setup: function(e) {
                            var t = this || e;
                            return de.test(t.type) && t.click && A(t, "input") && je(t, "click", Se), !1
                        },
                        trigger: function(e) {
                            var t = this || e;
                            return de.test(t.type) && t.click && A(t, "input") && je(t, "click"), !0
                        },
                        _default: function(e) {
                            var t = e.target;
                            return de.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            },
            w.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            },
            w.Event = function(e, t) {
                if (!(this instanceof w.Event))
                    return new w.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se : Ne, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e,
                t && w.extend(this, t),
                this.timeStamp = e && e.timeStamp || Date.now(),
                this[w.expando] = !0
            },
            w.Event.prototype = {
                constructor: w.Event,
                isDefaultPrevented: Ne,
                isPropagationStopped: Ne,
                isImmediatePropagationStopped: Ne,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = Se,
                    e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = Se,
                    e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = Se,
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation()
                }
            },
            w.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function(e) {
                    var t = e.button;
                    return null == e.which && Ce.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ee.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                }
            }, w.event.addProp),
            w.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                w.event.special[e] = {
                    setup: function() {
                        return je(this, e, Ae), !1
                    },
                    trigger: function() {
                        return je(this, e), !0
                    },
                    delegateType: t
                }
            }),
            w.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e, t) {
                w.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n,
                            r = e.relatedTarget,
                            i = e.handleObj;
                        return r && (r === this || w.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }),
            w.fn.extend({
                on: function(e, t, n, r) {
                    return De(this, e, t, n, r)
                },
                one: function(e, t, n, r) {
                    return De(this, e, t, n, r, 1)
                },
                off: function(e, t, n) {
                    var r,
                        i;
                    if (e && e.preventDefault && e.handleObj)
                        return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" == typeof e) {
                        for (i in e)
                            this.off(i, t, e[i]);
                        return this
                    }
                    return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ne), this.each(function() {
                        w.event.remove(this, e, n, t)
                    })
                }
            });
            var qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                Le = /<script|<style|<link/i,
                He = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function Pe(e, t) {
                return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
            }
            function Re(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }
            function Me(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
            }
            function Ie(e, t) {
                var n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l;
                if (1 === t.nodeType) {
                    if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events))
                        for (i in delete a.handle, a.events = {}, l)
                            for (n = 0, r = l[i].length; n < r; n++)
                                w.event.add(t, i, l[i][n]);
                    J.hasData(e) && (s = J.access(e), u = w.extend({}, s), J.set(t, u))
                }
            }
            function We(e, t, n, r) {
                t = s.apply([], t);
                var i,
                    o,
                    a,
                    u,
                    l,
                    c,
                    f = 0,
                    p = e.length,
                    d = p - 1,
                    h = t[0],
                    y = v(h);
                if (y || p > 1 && "string" == typeof h && !g.checkClone && He.test(h))
                    return e.each(function(i) {
                        var o = e.eq(i);
                        y && (t[0] = h.call(this, i, o.html())),
                        We(o, t, n, r)
                    });
                if (p && (o = (i = Te(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                    for (u = (a = w.map(ye(i, "script"), Re)).length; f < p; f++)
                        l = i,
                        f !== d && (l = w.clone(l, !0, !0), u && w.merge(a, ye(l, "script"))),
                        n.call(e[f], l, f);
                    if (u)
                        for (c = a[a.length - 1].ownerDocument, w.map(a, Me), f = 0; f < u; f++)
                            l = a[f],
                            ge.test(l.type || "") && !Q.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && !l.noModule && w._evalUrl(l.src, {
                                nonce: l.nonce || l.getAttribute("nonce")
                            }) : x(l.textContent.replace(Oe, ""), l, c))
                }
                return e
            }
            function $e(e, t, n) {
                for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
                    n || 1 !== r.nodeType || w.cleanData(ye(r)),
                    r.parentNode && (n && oe(r) && me(ye(r, "script")), r.parentNode.removeChild(r));
                return e
            }
            w.extend({
                htmlPrefilter: function(e) {
                    return e.replace(qe, "<$1></$2>")
                },
                clone: function(e, t, n) {
                    var r,
                        i,
                        o,
                        a,
                        s,
                        u,
                        l,
                        c = e.cloneNode(!0),
                        f = oe(e);
                    if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                        for (a = ye(c), r = 0, i = (o = ye(e)).length; r < i; r++)
                            s = o[r],
                            u = a[r],
                            l = void 0,
                            "input" === (l = u.nodeName.toLowerCase()) && de.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
                    if (t)
                        if (n)
                            for (o = o || ye(e), a = a || ye(c), r = 0, i = o.length; r < i; r++)
                                Ie(o[r], a[r]);
                        else
                            Ie(e, c);
                    return (a = ye(c, "script")).length > 0 && me(a, !f && ye(e, "script")), c
                },
                cleanData: function(e) {
                    for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                        if (G(n)) {
                            if (t = n[Q.expando]) {
                                if (t.events)
                                    for (r in t.events)
                                        i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                                n[Q.expando] = void 0
                            }
                            n[J.expando] && (n[J.expando] = void 0)
                        }
                }
            }),
            w.fn.extend({
                detach: function(e) {
                    return $e(this, e, !0)
                },
                remove: function(e) {
                    return $e(this, e)
                },
                text: function(e) {
                    return _(this, function(e) {
                        return void 0 === e ? w.text(this) : this.empty().each(function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function() {
                    return We(this, arguments, function(e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Pe(this, e).appendChild(e)
                    })
                },
                prepend: function() {
                    return We(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = Pe(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return We(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return We(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++)
                        1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map(function() {
                        return w.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return _(this, function(e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType)
                            return t.innerHTML;
                        if ("string" == typeof e && !Le.test(e) && !ve[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = w.htmlPrefilter(e);
                            try {
                                for (; n < r; n++)
                                    1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (i) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return We(this, arguments, function(t) {
                        var n = this.parentNode;
                        w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this))
                    }, e)
                }
            }),
            w.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                w.fn[e] = function(e) {
                    for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++)
                        n = a === o ? this : this.clone(!0),
                        w(i[a])[t](n),
                        u.apply(r, n.get());
                    return this.pushStack(r)
                }
            });
            var Fe = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
                Be = function(e) {
                    var n = e.ownerDocument.defaultView;
                    return n && n.opener || (n = t), n.getComputedStyle(e)
                },
                _e = new RegExp(re.join("|"), "i");
            function ze(e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s = e.style;
                return (n = n || Be(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = w.style(e, t)), !g.pixelBoxStyles() && Fe.test(a) && _e.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
            }
            function Ue(e, t) {
                return {
                    get: function() {
                        if (!e())
                            return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }
            !function() {
                function e() {
                    if (c) {
                        l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                        c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                        ie.appendChild(l).appendChild(c);
                        var e = t.getComputedStyle(c);
                        r = "1%" !== e.top,
                        u = 12 === n(e.marginLeft),
                        c.style.right = "60%",
                        s = 36 === n(e.right),
                        o = 36 === n(e.width),
                        c.style.position = "absolute",
                        a = 12 === n(c.offsetWidth / 3),
                        ie.removeChild(l),
                        c = null
                    }
                }
                function n(e) {
                    return Math.round(parseFloat(e))
                }
                var r,
                    o,
                    a,
                    s,
                    u,
                    l = i.createElement("div"),
                    c = i.createElement("div");
                c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(g, {
                    boxSizingReliable: function() {
                        return e(), o
                    },
                    pixelBoxStyles: function() {
                        return e(), s
                    },
                    pixelPosition: function() {
                        return e(), r
                    },
                    reliableMarginLeft: function() {
                        return e(), u
                    },
                    scrollboxSize: function() {
                        return e(), a
                    }
                }))
            }();
            var Xe = ["Webkit", "Moz", "ms"],
                Ve = i.createElement("div").style,
                Ge = {};
            function Ye(e) {
                var t = w.cssProps[e] || Ge[e];
                return t || (e in Ve ? e : Ge[e] = function(e) {
                        for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--;)
                            if ((e = Xe[n] + t) in Ve)
                                return e
                    }(e) || e)
            }
            var Qe = /^(none|table(?!-c[ea]).+)/,
                Je = /^--/,
                Ke = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Ze = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };
            function et(e, t, n) {
                var r = ne.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
            }
            function tt(e, t, n, r, i, o) {
                var a = "width" === t ? 1 : 0,
                    s = 0,
                    u = 0;
                if (n === (r ? "border" : "content"))
                    return 0;
                for (; a < 4; a += 2)
                    "margin" === n && (u += w.css(e, n + re[a], !0, i)),
                    r ? ("content" === n && (u -= w.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + re[a] + "Width", !0, i))) : (u += w.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += w.css(e, "border" + re[a] + "Width", !0, i) : s += w.css(e, "border" + re[a] + "Width", !0, i));
                return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
            }
            function nt(e, t, n) {
                var r = Be(e),
                    i = (!g.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, r),
                    o = i,
                    a = ze(e, t, r),
                    s = "offset" + t[0].toUpperCase() + t.slice(1);
                if (Fe.test(a)) {
                    if (!n)
                        return a;
                    a = "auto"
                }
                return (!g.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === w.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === w.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + tt(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
            }
            function rt(e, t, n, r, i) {
                return new rt.prototype.init(e, t, n, r, i)
            }
            w.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = ze(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function(e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var i,
                            o,
                            a,
                            s = V(t),
                            u = Je.test(t),
                            l = e.style;
                        if (u || (t = Ye(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n)
                            return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                        "string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"),
                        null != n && n == n && ("number" !== o || u || (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
                    }
                },
                css: function(e, t, n, r) {
                    var i,
                        o,
                        a,
                        s = V(t);
                    return Je.test(t) || (t = Ye(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = ze(e, t, r)), "normal" === i && t in Ze && (i = Ze[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
                }
            }),
            w.each(["height", "width"], function(e, t) {
                w.cssHooks[t] = {
                    get: function(e, n, r) {
                        if (n)
                            return !Qe.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? nt(e, t, r) : ue(e, Ke, function() {
                                return nt(e, t, r)
                            })
                    },
                    set: function(e, n, r) {
                        var i,
                            o = Be(e),
                            a = !g.scrollboxSize() && "absolute" === o.position,
                            s = (a || r) && "border-box" === w.css(e, "boxSizing", !1, o),
                            u = r ? tt(e, t, r, s, o) : 0;
                        return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - tt(e, t, "border", !1, o) - .5)), u && (i = ne.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), et(0, n, u)
                    }
                }
            }),
            w.cssHooks.marginLeft = Ue(g.reliableMarginLeft, function(e, t) {
                if (t)
                    return (parseFloat(ze(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
                        marginLeft: 0
                    }, function() {
                        return e.getBoundingClientRect().left
                    })) + "px"
            }),
            w.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                w.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                            i[e + re[r] + t] = o[r] || o[r - 2] || o[0];
                        return i
                    }
                },
                "margin" !== e && (w.cssHooks[e + t].set = et)
            }),
            w.fn.extend({
                css: function(e, t) {
                    return _(this, function(e, t, n) {
                        var r,
                            i,
                            o = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = Be(e), i = t.length; a < i; a++)
                                o[t[a]] = w.css(e, t[a], !1, r);
                            return o
                        }
                        return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
                    }, e, t, arguments.length > 1)
                }
            }),
            w.Tween = rt,
            rt.prototype = {
                constructor: rt,
                init: function(e, t, n, r, i, o) {
                    this.elem = e,
                    this.prop = n,
                    this.easing = i || w.easing._default,
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = r,
                    this.unit = o || (w.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = rt.propHooks[this.prop];
                    return e && e.get ? e.get(this) : rt.propHooks._default.get(this)
                },
                run: function(e) {
                    var t,
                        n = rt.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rt.propHooks._default.set(this), this
                }
            },
            rt.prototype.init.prototype = rt.prototype,
            rt.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    },
                    set: function(e) {
                        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !w.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            },
            rt.propHooks.scrollTop = rt.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            },
            w.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            },
            w.fx = rt.prototype.init,
            w.fx.step = {};
            var it,
                ot,
                at = /^(?:toggle|show|hide)$/,
                st = /queueHooks$/;
            function ut() {
                ot && (!1 === i.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(ut) : t.setTimeout(ut, w.fx.interval), w.fx.tick())
            }
            function lt() {
                return t.setTimeout(function() {
                    it = void 0
                }), it = Date.now()
            }
            function ct(e, t) {
                var n,
                    r = 0,
                    i = {
                        height: e
                    };
                for (t = t ? 1 : 0; r < 4; r += 2 - t)
                    i["margin" + (n = re[r])] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e), i
            }
            function ft(e, t, n) {
                for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                    if (r = i[o].call(n, t, e))
                        return r
            }
            function pt(e, t, n) {
                var r,
                    i,
                    o = 0,
                    a = pt.prefilters.length,
                    s = w.Deferred().always(function() {
                        delete u.elem
                    }),
                    u = function() {
                        if (i)
                            return !1;
                        for (var t = it || lt(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++)
                            l.tweens[o].run(r);
                        return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
                    },
                    l = s.promise({
                        elem: e,
                        props: w.extend({}, t),
                        opts: w.extend(!0, {
                            specialEasing: {},
                            easing: w.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: it || lt(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                            return l.tweens.push(r), r
                        },
                        stop: function(t) {
                            var n = 0,
                                r = t ? l.tweens.length : 0;
                            if (i)
                                return this;
                            for (i = !0; n < r; n++)
                                l.tweens[n].run(1);
                            return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                        }
                    }),
                    c = l.props;
                for (!function(e, t) {
                    var n,
                        r,
                        i,
                        o,
                        a;
                    for (n in e)
                        if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a)
                            for (n in o = a.expand(o), delete e[r], o)
                                n in e || (e[n] = o[n], t[n] = i);
                        else
                            t[r] = i
                }(c, l.opts.specialEasing); o < a; o++)
                    if (r = pt.prefilters[o].call(l, e, c, l.opts))
                        return v(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
                return w.map(c, ft, l), v(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
                    elem: e,
                    anim: l,
                    queue: l.opts.queue
                })), l
            }
            w.Animation = w.extend(pt, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return le(n.elem, e, ne.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    v(e) ? (t = e, e = ["*"]) : e = e.match(R);
                    for (var n, r = 0, i = e.length; r < i; r++)
                        n = e[r],
                        pt.tweeners[n] = pt.tweeners[n] || [],
                        pt.tweeners[n].unshift(t)
                },
                prefilters: [function(e, t, n) {
                    var r,
                        i,
                        o,
                        a,
                        s,
                        u,
                        l,
                        c,
                        f = "width" in t || "height" in t,
                        p = this,
                        d = {},
                        h = e.style,
                        g = e.nodeType && se(e),
                        v = Q.get(e, "fxshow");
                    for (r in n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                        a.unqueued || s()
                    }), a.unqueued++, p.always(function() {
                        p.always(function() {
                            a.unqueued--,
                            w.queue(e, "fx").length || a.empty.fire()
                        })
                    })), t)
                        if (i = t[r], at.test(i)) {
                            if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                                if ("show" !== i || !v || void 0 === v[r])
                                    continue;
                                g = !0
                            }
                            d[r] = v && v[r] || w.style(e, r)
                        }
                    if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d))
                        for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Q.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (pe([e], !0), l = e.style.display || l, c = w.css(e, "display"), pe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function() {
                            h.display = l
                        }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                            h.overflow = n.overflow[0],
                            h.overflowX = n.overflow[1],
                            h.overflowY = n.overflow[2]
                        })), u = !1, d)
                            u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", {
                                display: l
                            }), o && (v.hidden = !g), g && pe([e], !0), p.done(function() {
                                for (r in g || pe([e]), Q.remove(e, "fxshow"), d)
                                    w.style(e, r, d[r])
                            })),
                            u = ft(g ? v[r] : 0, r, p),
                            r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
                }],
                prefilter: function(e, t) {
                    t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
                }
            }),
            w.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? w.extend({}, e) : {
                    complete: n || !n && t || v(e) && e,
                    duration: e,
                    easing: n && t || t && !v(t) && t
                };
                return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    v(r.old) && r.old.call(this),
                    r.queue && w.dequeue(this, r.queue)
                }, r
            },
            w.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(se).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var i = w.isEmptyObject(e),
                        o = w.speed(t, n, r),
                        a = function() {
                            var t = pt(this, w.extend({}, e), o);
                            (i || Q.get(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function(e, t, n) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop,
                        t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            o = w.timers,
                            a = Q.get(this);
                        if (i)
                            a[i] && a[i].stop && r(a[i]);
                        else
                            for (i in a)
                                a[i] && a[i].stop && st.test(i) && r(a[i]);
                        for (i = o.length; i--;)
                            o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                        !t && n || w.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each(function() {
                        var t,
                            n = Q.get(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            o = w.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)
                            o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < a; t++)
                            r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
                }
            }),
            w.each(["toggle", "show", "hide"], function(e, t) {
                var n = w.fn[t];
                w.fn[t] = function(e, r, i) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ct(t, !0), e, r, i)
                }
            }),
            w.each({
                slideDown: ct("show"),
                slideUp: ct("hide"),
                slideToggle: ct("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                w.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }),
            w.timers = [],
            w.fx.tick = function() {
                var e,
                    t = 0,
                    n = w.timers;
                for (it = Date.now(); t < n.length; t++)
                    (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || w.fx.stop(),
                it = void 0
            },
            w.fx.timer = function(e) {
                w.timers.push(e),
                w.fx.start()
            },
            w.fx.interval = 13,
            w.fx.start = function() {
                ot || (ot = !0, ut())
            },
            w.fx.stop = function() {
                ot = null
            },
            w.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            },
            w.fn.delay = function(e, n) {
                return e = w.fx && w.fx.speeds[e] || e, n = n || "fx", this.queue(n, function(n, r) {
                    var i = t.setTimeout(n, e);
                    r.stop = function() {
                        t.clearTimeout(i)
                    }
                })
            },
            function() {
                var e = i.createElement("input"),
                    t = i.createElement("select").appendChild(i.createElement("option"));
                e.type = "checkbox",
                g.checkOn = "" !== e.value,
                g.optSelected = t.selected,
                (e = i.createElement("input")).value = "t",
                e.type = "radio",
                g.radioValue = "t" === e.value
            }();
            var dt,
                ht = w.expr.attrHandle;
            w.fn.extend({
                attr: function(e, t) {
                    return _(this, w.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        w.removeAttr(this, e)
                    })
                }
            }),
            w.extend({
                attr: function(e, t, n) {
                    var r,
                        i,
                        o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o)
                        return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!g.radioValue && "radio" === t && A(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n,
                        r = 0,
                        i = t && t.match(R);
                    if (i && 1 === e.nodeType)
                        for (; n = i[r++];)
                            e.removeAttribute(n)
                }
            }),
            dt = {
                set: function(e, t, n) {
                    return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            },
            w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var n = ht[t] || w.find.attr;
                ht[t] = function(e, t, r) {
                    var i,
                        o,
                        a = t.toLowerCase();
                    return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i
                }
            });
            var gt = /^(?:input|select|textarea|button)$/i,
                vt = /^(?:a|area)$/i;
            function yt(e) {
                return (e.match(R) || []).join(" ")
            }
            function mt(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }
            function xt(e) {
                return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
            }
            w.fn.extend({
                prop: function(e, t) {
                    return _(this, w.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each(function() {
                        delete this[w.propFix[e] || e]
                    })
                }
            }),
            w.extend({
                prop: function(e, t, n) {
                    var r,
                        i,
                        o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o)
                        return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = w.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : gt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }),
            g.optSelected || (w.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }),
            w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                w.propFix[this.toLowerCase()] = this
            }),
            w.fn.extend({
                addClass: function(e) {
                    var t,
                        n,
                        r,
                        i,
                        o,
                        a,
                        s,
                        u = 0;
                    if (v(e))
                        return this.each(function(t) {
                            w(this).addClass(e.call(this, t, mt(this)))
                        });
                    if ((t = xt(e)).length)
                        for (; n = this[u++];)
                            if (i = mt(n), r = 1 === n.nodeType && " " + yt(i) + " ") {
                                for (a = 0; o = t[a++];)
                                    r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                i !== (s = yt(r)) && n.setAttribute("class", s)
                            }
                    return this
                },
                removeClass: function(e) {
                    var t,
                        n,
                        r,
                        i,
                        o,
                        a,
                        s,
                        u = 0;
                    if (v(e))
                        return this.each(function(t) {
                            w(this).removeClass(e.call(this, t, mt(this)))
                        });
                    if (!arguments.length)
                        return this.attr("class", "");
                    if ((t = xt(e)).length)
                        for (; n = this[u++];)
                            if (i = mt(n), r = 1 === n.nodeType && " " + yt(i) + " ") {
                                for (a = 0; o = t[a++];)
                                    for (; r.indexOf(" " + o + " ") > -1;)
                                        r = r.replace(" " + o + " ", " ");
                                i !== (s = yt(r)) && n.setAttribute("class", s)
                            }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e,
                        r = "string" === n || Array.isArray(e);
                    return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each(function(n) {
                        w(this).toggleClass(e.call(this, n, mt(this), t), t)
                    }) : this.each(function() {
                        var t,
                            i,
                            o,
                            a;
                        if (r)
                            for (i = 0, o = w(this), a = xt(e); t = a[i++];)
                                o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                        else
                            void 0 !== e && "boolean" !== n || ((t = mt(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(e) {
                    var t,
                        n,
                        r = 0;
                    for (t = " " + e + " "; n = this[r++];)
                        if (1 === n.nodeType && (" " + yt(mt(n)) + " ").indexOf(t) > -1)
                            return !0;
                    return !1
                }
            });
            var bt = /\r/g;
            w.fn.extend({
                val: function(e) {
                    var t,
                        n,
                        r,
                        i = this[0];
                    return arguments.length ? (r = v(e), this.each(function(n) {
                        var i;
                        1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function(e) {
                            return null == e ? "" : e + ""
                        })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    })) : i ? (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n : void 0
                }
            }),
            w.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = w.find.attr(e, "value");
                            return null != t ? t : yt(w.text(e))
                        }
                    },
                    select: {
                        get: function(e) {
                            var t,
                                n,
                                r,
                                i = e.options,
                                o = e.selectedIndex,
                                a = "select-one" === e.type,
                                s = a ? null : [],
                                u = a ? o + 1 : i.length;
                            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                                if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                                    if (t = w(n).val(), a)
                                        return t;
                                    s.push(t)
                                }
                            return s
                        },
                        set: function(e, t) {
                            for (var n, r, i = e.options, o = w.makeArray(t), a = i.length; a--;)
                                ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1), o
                        }
                    }
                }
            }),
            w.each(["radio", "checkbox"], function() {
                w.valHooks[this] = {
                    set: function(e, t) {
                        if (Array.isArray(t))
                            return e.checked = w.inArray(w(e).val(), t) > -1
                    }
                },
                g.checkOn || (w.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            }),
            g.focusin = "onfocusin" in t;
            var wt = /^(?:focusinfocus|focusoutblur)$/,
                Tt = function(e) {
                    e.stopPropagation()
                };
            w.extend(w.event, {
                trigger: function(e, n, r, o) {
                    var a,
                        s,
                        u,
                        l,
                        c,
                        f,
                        d,
                        h,
                        g = [r || i],
                        m = p.call(e, "type") ? e.type : e,
                        x = p.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (s = h = u = r = r || i, 3 !== r.nodeType && 8 !== r.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (x = m.split("."), m = x.shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, (e = e[w.expando] ? e : new w.Event(m, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = x.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : w.makeArray(n, [e]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(r, n))) {
                        if (!o && !d.noBubble && !y(r)) {
                            for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode)
                                g.push(s),
                                u = s;
                            u === (r.ownerDocument || i) && g.push(u.defaultView || u.parentWindow || t)
                        }
                        for (a = 0; (s = g[a++]) && !e.isPropagationStopped();)
                            h = s,
                            e.type = a > 1 ? l : d.bindType || m,
                            (f = (Q.get(s, "events") || {})[e.type] && Q.get(s, "handle")) && f.apply(s, n),
                            (f = c && s[c]) && f.apply && G(s) && (e.result = f.apply(s, n), !1 === e.result && e.preventDefault());
                        return e.type = m, o || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(g.pop(), n) || !G(r) || c && v(r[m]) && !y(r) && ((u = r[c]) && (r[c] = null), w.event.triggered = m, e.isPropagationStopped() && h.addEventListener(m, Tt), r[m](), e.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (r[c] = u)), e.result
                    }
                },
                simulate: function(e, t, n) {
                    var r = w.extend(new w.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    w.event.trigger(r, null, t)
                }
            }),
            w.fn.extend({
                trigger: function(e, t) {
                    return this.each(function() {
                        w.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n)
                        return w.event.trigger(e, t, n, !0)
                }
            }),
            g.focusin || w.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var n = function(e) {
                    w.event.simulate(t, e.target, w.event.fix(e))
                };
                w.event.special[t] = {
                    setup: function() {
                        var r = this.ownerDocument || this,
                            i = Q.access(r, t);
                        i || r.addEventListener(e, n, !0),
                        Q.access(r, t, (i || 0) + 1)
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this,
                            i = Q.access(r, t) - 1;
                        i ? Q.access(r, t, i) : (r.removeEventListener(e, n, !0), Q.remove(r, t))
                    }
                }
            });
            var Ct = t.location,
                Et = Date.now(),
                kt = /\?/;
            w.parseXML = function(e) {
                var n;
                if (!e || "string" != typeof e)
                    return null;
                try {
                    n = (new t.DOMParser).parseFromString(e, "text/xml")
                } catch (r) {
                    n = void 0
                }
                return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + e), n
            };
            var St = /\[\]$/,
                Nt = /\r?\n/g,
                At = /^(?:submit|button|image|reset|file)$/i,
                Dt = /^(?:input|select|textarea|keygen)/i;
            function jt(e, t, n, r) {
                var i;
                if (Array.isArray(t))
                    w.each(t, function(t, i) {
                        n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
                    });
                else if (n || "object" !== b(t))
                    r(e, t);
                else
                    for (i in t)
                        jt(e + "[" + i + "]", t[i], n, r)
            }
            w.param = function(e, t) {
                var n,
                    r = [],
                    i = function(e, t) {
                        var n = v(t) ? t() : t;
                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                    };
                if (null == e)
                    return "";
                if (Array.isArray(e) || e.jquery && !w.isPlainObject(e))
                    w.each(e, function() {
                        i(this.name, this.value)
                    });
                else
                    for (n in e)
                        jt(n, e[n], t, i);
                return r.join("&")
            },
            w.fn.extend({
                serialize: function() {
                    return w.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = w.prop(this, "elements");
                        return e ? w.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !w(this).is(":disabled") && Dt.test(this.nodeName) && !At.test(e) && (this.checked || !de.test(e))
                    }).map(function(e, t) {
                        var n = w(this).val();
                        return null == n ? null : Array.isArray(n) ? w.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(Nt, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(Nt, "\r\n")
                        }
                    }).get()
                }
            });
            var qt = /%20/g,
                Lt = /#.*$/,
                Ht = /([?&])_=[^&]*/,
                Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Pt = /^(?:GET|HEAD)$/,
                Rt = /^\/\//,
                Mt = {},
                It = {},
                Wt = "*/".concat("*"),
                $t = i.createElement("a");
            function Ft(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r,
                        i = 0,
                        o = t.toLowerCase().match(R) || [];
                    if (v(n))
                        for (; r = o[i++];)
                            "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }
            function Bt(e, t, n, r) {
                var i = {},
                    o = e === It;
                function a(s) {
                    var u;
                    return i[s] = !0, w.each(e[s] || [], function(e, s) {
                        var l = s(t, n, r);
                        return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
                    }), u
                }
                return a(t.dataTypes[0]) || !i["*"] && a("*")
            }
            function _t(e, t) {
                var n,
                    r,
                    i = w.ajaxSettings.flatOptions || {};
                for (n in t)
                    void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                return r && w.extend(!0, e, r), e
            }
            $t.href = Ct.href,
            w.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Ct.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ct.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Wt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": w.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? _t(_t(e, w.ajaxSettings), t) : _t(w.ajaxSettings, e)
                },
                ajaxPrefilter: Ft(Mt),
                ajaxTransport: Ft(It),
                ajax: function(e, n) {
                    "object" == typeof e && (n = e, e = void 0),
                    n = n || {};
                    var r,
                        o,
                        a,
                        s,
                        u,
                        l,
                        c,
                        f,
                        p,
                        d,
                        h = w.ajaxSetup({}, n),
                        g = h.context || h,
                        v = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                        y = w.Deferred(),
                        m = w.Callbacks("once memory"),
                        x = h.statusCode || {},
                        b = {},
                        T = {},
                        C = "canceled",
                        E = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (c) {
                                    if (!s)
                                        for (s = {}; t = Ot.exec(a);)
                                            s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                    t = s[e.toLowerCase() + " "]
                                }
                                return null == t ? null : t.join(", ")
                            },
                            getAllResponseHeaders: function() {
                                return c ? a : null
                            },
                            setRequestHeader: function(e, t) {
                                return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this
                            },
                            overrideMimeType: function(e) {
                                return null == c && (h.mimeType = e), this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (c)
                                        E.always(e[E.status]);
                                    else
                                        for (t in e)
                                            x[t] = [x[t], e[t]];
                                return this
                            },
                            abort: function(e) {
                                var t = e || C;
                                return r && r.abort(t), k(0, t), this
                            }
                        };
                    if (y.promise(E), h.url = ((e || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(R) || [""], null == h.crossDomain) {
                        l = i.createElement("a");
                        try {
                            l.href = h.url,
                            l.href = l.href,
                            h.crossDomain = $t.protocol + "//" + $t.host != l.protocol + "//" + l.host
                        } catch (S) {
                            h.crossDomain = !0
                        }
                    }
                    if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), Bt(Mt, h, n, E), c)
                        return E;
                    for (p in (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Pt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Wt + "; q=0.01" : "") : h.accepts["*"]), h.headers)
                        E.setRequestHeader(p, h.headers[p]);
                    if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c))
                        return E.abort();
                    if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), r = Bt(It, h, n, E)) {
                        if (E.readyState = 1, f && v.trigger("ajaxSend", [E, h]), c)
                            return E;
                        h.async && h.timeout > 0 && (u = t.setTimeout(function() {
                            E.abort("timeout")
                        }, h.timeout));
                        try {
                            c = !1,
                            r.send(b, k)
                        } catch (S) {
                            if (c)
                                throw S;
                            k(-1, S)
                        }
                    } else
                        k(-1, "No Transport");
                    function k(e, n, i, s) {
                        var l,
                            p,
                            d,
                            b,
                            T,
                            C = n;
                        c || (c = !0, u && t.clearTimeout(u), r = void 0, a = s || "", E.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, i && (b = function(e, t, n) {
                            for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0];)
                                u.shift(),
                                void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (r)
                                for (i in s)
                                    if (s[i] && s[i].test(r)) {
                                        u.unshift(i);
                                        break
                                    }
                            if (u[0] in n)
                                o = u[0];
                            else {
                                for (i in n) {
                                    if (!u[0] || e.converters[i + " " + u[0]]) {
                                        o = i;
                                        break
                                    }
                                    a || (a = i)
                                }
                                o = o || a
                            }
                            if (o)
                                return o !== u[0] && u.unshift(o), n[o]
                        }(h, E, i)), b = function(e, t, n, r) {
                            var i,
                                o,
                                a,
                                s,
                                u,
                                l = {},
                                c = e.dataTypes.slice();
                            if (c[1])
                                for (a in e.converters)
                                    l[a.toLowerCase()] = e.converters[a];
                            for (o = c.shift(); o;)
                                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                                    if ("*" === o)
                                        o = u;
                                    else if ("*" !== u && u !== o) {
                                        if (!(a = l[u + " " + o] || l["* " + o]))
                                            for (i in l)
                                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                                    break
                                                }
                                        if (!0 !== a)
                                            if (a && e.throws)
                                                t = a(t);
                                            else
                                                try {
                                                    t = a(t)
                                                } catch (S) {
                                                    return {
                                                        state: "parsererror",
                                                        error: a ? S : "No conversion from " + u + " to " + o
                                                    }
                                                }
                                    }
                            return {
                                state: "success",
                                data: t
                            }
                        }(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === e || "HEAD" === h.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !e && C || (C = "error", e < 0 && (e = 0))), E.status = e, E.statusText = (n || C) + "", l ? y.resolveWith(g, [p, C, E]) : y.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && v.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (v.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")))
                    }
                    return E
                },
                getJSON: function(e, t, n) {
                    return w.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return w.get(e, void 0, t, "script")
                }
            }),
            w.each(["get", "post"], function(e, t) {
                w[t] = function(e, n, r, i) {
                    return v(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
                        url: e,
                        type: t,
                        dataType: i,
                        data: n,
                        success: r
                    }, w.isPlainObject(e) && e))
                }
            }),
            w._evalUrl = function(e, t) {
                return w.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: {
                        "text script": function() {}
                    },
                    dataFilter: function(e) {
                        w.globalEval(e, t)
                    }
                })
            },
            w.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return this[0] && (v(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstElementChild;)
                            e = e.firstElementChild;
                        return e
                    }).append(this)), this
                },
                wrapInner: function(e) {
                    return v(e) ? this.each(function(t) {
                        w(this).wrapInner(e.call(this, t))
                    }) : this.each(function() {
                        var t = w(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = v(e);
                    return this.each(function(n) {
                        w(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function(e) {
                    return this.parent(e).not("body").each(function() {
                        w(this).replaceWith(this.childNodes)
                    }), this
                }
            }),
            w.expr.pseudos.hidden = function(e) {
                return !w.expr.pseudos.visible(e)
            },
            w.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            },
            w.ajaxSettings.xhr = function() {
                try {
                    return new t.XMLHttpRequest
                } catch (e) {}
            };
            var zt = {
                    0: 200,
                    1223: 204
                },
                Ut = w.ajaxSettings.xhr();
            g.cors = !!Ut && "withCredentials" in Ut,
            g.ajax = Ut = !!Ut,
            w.ajaxTransport(function(e) {
                var n,
                    r;
                if (g.cors || Ut && !e.crossDomain)
                    return {
                        send: function(i, o) {
                            var a,
                                s = e.xhr();
                            if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                                for (a in e.xhrFields)
                                    s[a] = e.xhrFields[a];
                            for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i)
                                s.setRequestHeader(a, i[a]);
                            n = function(e) {
                                return function() {
                                    n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(zt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                        binary: s.response
                                    } : {
                                        text: s.responseText
                                    }, s.getAllResponseHeaders()))
                                }
                            },
                            s.onload = n(),
                            r = s.onerror = s.ontimeout = n("error"),
                            void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                                4 === s.readyState && t.setTimeout(function() {
                                    n && r()
                                })
                            },
                            n = n("abort");
                            try {
                                s.send(e.hasContent && e.data || null)
                            } catch (u) {
                                if (n)
                                    throw u
                            }
                        },
                        abort: function() {
                            n && n()
                        }
                    }
            }),
            w.ajaxPrefilter(function(e) {
                e.crossDomain && (e.contents.script = !1)
            }),
            w.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return w.globalEval(e), e
                    }
                }
            }),
            w.ajaxPrefilter("script", function(e) {
                void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET")
            }),
            w.ajaxTransport("script", function(e) {
                var t,
                    n;
                if (e.crossDomain || e.scriptAttrs)
                    return {
                        send: function(r, o) {
                            t = w("<script>").attr(e.scriptAttrs || {}).prop({
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", n = function(e) {
                                t.remove(),
                                n = null,
                                e && o("error" === e.type ? 404 : 200, e.type)
                            }),
                            i.head.appendChild(t[0])
                        },
                        abort: function() {
                            n && n()
                        }
                    }
            });
            var Xt,
                Vt = [],
                Gt = /(=)\?(?=&|$)|\?\?/;
            w.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Vt.pop() || w.expando + "_" + Et++;
                    return this[e] = !0, e
                }
            }),
            w.ajaxPrefilter("json jsonp", function(e, n, r) {
                var i,
                    o,
                    a,
                    s = !1 !== e.jsonp && (Gt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(e.data) && "data");
                if (s || "jsonp" === e.dataTypes[0])
                    return i = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Gt, "$1" + i) : !1 !== e.jsonp && (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                        return a || w.error(i + " was not called"), a[0]
                    }, e.dataTypes[0] = "json", o = t[i], t[i] = function() {
                        a = arguments
                    }, r.always(function() {
                        void 0 === o ? w(t).removeProp(i) : t[i] = o,
                        e[i] && (e.jsonpCallback = n.jsonpCallback, Vt.push(i)),
                        a && v(o) && o(a[0]),
                        a = o = void 0
                    }), "script"
            }),
            g.createHTMLDocument = ((Xt = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Xt.childNodes.length),
            w.parseHTML = function(e, t, n) {
                return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((r = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(r)) : t = i), a = !n && [], (o = D.exec(e)) ? [t.createElement(o[1])] : (o = Te([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes)));
                var r,
                    o,
                    a
            },
            w.fn.load = function(e, t, n) {
                var r,
                    i,
                    o,
                    a = this,
                    s = e.indexOf(" ");
                return s > -1 && (r = yt(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    o = arguments,
                    a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
                }).always(n && function(e, t) {
                    a.each(function() {
                        n.apply(this, o || [e.responseText, t, e])
                    })
                }), this
            },
            w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                w.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }),
            w.expr.pseudos.animated = function(e) {
                return w.grep(w.timers, function(t) {
                    return e === t.elem
                }).length
            },
            w.offset = {
                setOffset: function(e, t, n) {
                    var r,
                        i,
                        o,
                        a,
                        s,
                        u,
                        l = w.css(e, "position"),
                        c = w(e),
                        f = {};
                    "static" === l && (e.style.position = "relative"),
                    s = c.offset(),
                    o = w.css(e, "top"),
                    u = w.css(e, "left"),
                    ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0),
                    v(t) && (t = t.call(e, n, w.extend({}, s))),
                    null != t.top && (f.top = t.top - s.top + a),
                    null != t.left && (f.left = t.left - s.left + i),
                    "using" in t ? t.using.call(e, f) : c.css(f)
                }
            },
            w.fn.extend({
                offset: function(e) {
                    if (arguments.length)
                        return void 0 === e ? this : this.each(function(t) {
                            w.offset.setOffset(this, e, t)
                        });
                    var t,
                        n,
                        r = this[0];
                    return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0
                },
                position: function() {
                    if (this[0]) {
                        var e,
                            t,
                            n,
                            r = this[0],
                            i = {
                                top: 0,
                                left: 0
                            };
                        if ("fixed" === w.css(r, "position"))
                            t = r.getBoundingClientRect();
                        else {
                            for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");)
                                e = e.parentNode;
                            e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
                        }
                        return {
                            top: t.top - i.top - w.css(r, "marginTop", !0),
                            left: t.left - i.left - w.css(r, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent; e && "static" === w.css(e, "position");)
                            e = e.offsetParent;
                        return e || ie
                    })
                }
            }),
            w.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, t) {
                var n = "pageYOffset" === t;
                w.fn[e] = function(r) {
                    return _(this, function(e, r, i) {
                        var o;
                        if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i)
                            return o ? o[t] : e[r];
                        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                    }, e, r, arguments.length)
                }
            }),
            w.each(["top", "left"], function(e, t) {
                w.cssHooks[t] = Ue(g.pixelPosition, function(e, n) {
                    if (n)
                        return n = ze(e, t), Fe.test(n) ? w(e).position()[t] + "px" : n
                })
            }),
            w.each({
                Height: "height",
                Width: "width"
            }, function(e, t) {
                w.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function(n, r) {
                    w.fn[r] = function(i, o) {
                        var a = arguments.length && (n || "boolean" != typeof i),
                            s = n || (!0 === i || !0 === o ? "margin" : "border");
                        return _(this, function(t, n, i) {
                            var o;
                            return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
                        }, t, a ? i : void 0, a)
                    }
                })
            }),
            w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
                w.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }),
            w.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }),
            w.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            }),
            w.proxy = function(e, t) {
                var n,
                    r,
                    i;
                if ("string" == typeof t && (n = e[t], t = e, e = n), v(e))
                    return r = a.call(arguments, 2), (i = function() {
                        return e.apply(t || this, r.concat(a.call(arguments)))
                    }).guid = e.guid = e.guid || w.guid++, i
            },
            w.holdReady = function(e) {
                e ? w.readyWait++ : w.ready(!0)
            },
            w.isArray = Array.isArray,
            w.parseJSON = JSON.parse,
            w.nodeName = A,
            w.isFunction = v,
            w.isWindow = y,
            w.camelCase = V,
            w.type = b,
            w.now = Date.now,
            w.isNumeric = function(e) {
                var t = w.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            },
            "function" == typeof e && e.amd && e("jquery", [], function() {
                return w
            });
            var Yt = t.jQuery,
                Qt = t.$;
            return w.noConflict = function(e) {
                return t.$ === w && (t.$ = Qt), e && t.jQuery === w && (t.jQuery = Yt), w
            }, n || (t.jQuery = t.$ = w), w
        });
    }, {
        "process": "pBGv"
    }],
    "lo/u": [function(require, module, exports) {
        var global = arguments[3];
        var e = arguments[3];
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.default = void 0;
        for (var t = "undefined" != typeof window && "undefined" != typeof document, n = ["Edge", "Trident", "Firefox"], o = 0, r = 0; r < n.length; r += 1)
            if (t && navigator.userAgent.indexOf(n[r]) >= 0) {
                o = 1;
                break
            }
        function i(e) {
            var t = !1;
            return function() {
                t || (t = !0, window.Promise.resolve().then(function() {
                    t = !1,
                    e()
                }))
            }
        }
        function a(e) {
            var t = !1;
            return function() {
                t || (t = !0, setTimeout(function() {
                    t = !1,
                    e()
                }, o))
            }
        }
        var s = t && window.Promise,
            f = s ? i : a;
        function p(e) {
            return e && "[object Function]" === {}.toString.call(e)
        }
        function l(e, t) {
            if (1 !== e.nodeType)
                return [];
            var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
            return t ? n[t] : n
        }
        function u(e) {
            return "HTML" === e.nodeName ? e : e.parentNode || e.host
        }
        function d(e) {
            if (!e)
                return document.body;
            switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body
            }
            var t = l(e),
                n = t.overflow,
                o = t.overflowX,
                r = t.overflowY;
            return /(auto|scroll|overlay)/.test(n + r + o) ? e : d(u(e))
        }
        var c = t && !(!window.MSInputMethodContext || !document.documentMode),
            h = t && /MSIE 10/.test(navigator.userAgent);
        function m(e) {
            return 11 === e ? c : 10 === e ? h : c || h
        }
        function v(e) {
            if (!e)
                return document.documentElement;
            for (var t = m(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;)
                n = (e = e.nextElementSibling).offsetParent;
            var o = n && n.nodeName;
            return o && "BODY" !== o && "HTML" !== o ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === l(n, "position") ? v(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
        }
        function g(e) {
            var t = e.nodeName;
            return "BODY" !== t && ("HTML" === t || v(e.firstElementChild) === e)
        }
        function b(e) {
            return null !== e.parentNode ? b(e.parentNode) : e
        }
        function w(e, t) {
            if (!(e && e.nodeType && t && t.nodeType))
                return document.documentElement;
            var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                o = n ? e : t,
                r = n ? t : e,
                i = document.createRange();
            i.setStart(o, 0),
            i.setEnd(r, 0);
            var a = i.commonAncestorContainer;
            if (e !== a && t !== a || o.contains(r))
                return g(a) ? a : v(a);
            var s = b(e);
            return s.host ? w(s.host, t) : w(e, b(t).host)
        }
        function y(e) {
            var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
                n = e.nodeName;
            if ("BODY" === n || "HTML" === n) {
                var o = e.ownerDocument.documentElement;
                return (e.ownerDocument.scrollingElement || o)[t]
            }
            return e[t]
        }
        function E(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                o = y(t, "top"),
                r = y(t, "left"),
                i = n ? -1 : 1;
            return e.top += o * i, e.bottom += o * i, e.left += r * i, e.right += r * i, e
        }
        function x(e, t) {
            var n = "x" === t ? "Left" : "Top",
                o = "Left" === n ? "Right" : "Bottom";
            return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + o + "Width"], 10)
        }
        function O(e, t, n, o) {
            return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], m(10) ? parseInt(n["offset" + e]) + parseInt(o["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(o["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
        }
        function L(e) {
            var t = e.body,
                n = e.documentElement,
                o = m(10) && getComputedStyle(n);
            return {
                height: O("Height", t, n, o),
                width: O("Width", t, n, o)
            }
        }
        var T = function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            },
            M = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1,
                        o.configurable = !0,
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            C = function(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            },
            D = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            };
        function N(e) {
            return D({}, e, {
                right: e.left + e.width,
                bottom: e.top + e.height
            })
        }
        function F(e) {
            var t = {};
            try {
                if (m(10)) {
                    t = e.getBoundingClientRect();
                    var n = y(e, "top"),
                        o = y(e, "left");
                    t.top += n,
                    t.left += o,
                    t.bottom += n,
                    t.right += o
                } else
                    t = e.getBoundingClientRect()
            } catch (d) {}
            var r = {
                    left: t.left,
                    top: t.top,
                    width: t.right - t.left,
                    height: t.bottom - t.top
                },
                i = "HTML" === e.nodeName ? L(e.ownerDocument) : {},
                a = i.width || e.clientWidth || r.right - r.left,
                s = i.height || e.clientHeight || r.bottom - r.top,
                f = e.offsetWidth - a,
                p = e.offsetHeight - s;
            if (f || p) {
                var u = l(e);
                f -= x(u, "x"),
                p -= x(u, "y"),
                r.width -= f,
                r.height -= p
            }
            return N(r)
        }
        function k(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                o = m(10),
                r = "HTML" === t.nodeName,
                i = F(e),
                a = F(t),
                s = d(e),
                f = l(t),
                p = parseFloat(f.borderTopWidth, 10),
                u = parseFloat(f.borderLeftWidth, 10);
            n && r && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
            var c = N({
                top: i.top - a.top - p,
                left: i.left - a.left - u,
                width: i.width,
                height: i.height
            });
            if (c.marginTop = 0, c.marginLeft = 0, !o && r) {
                var h = parseFloat(f.marginTop, 10),
                    v = parseFloat(f.marginLeft, 10);
                c.top -= p - h,
                c.bottom -= p - h,
                c.left -= u - v,
                c.right -= u - v,
                c.marginTop = h,
                c.marginLeft = v
            }
            return (o && !n ? t.contains(s) : t === s && "BODY" !== s.nodeName) && (c = E(c, t)), c
        }
        function S(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = e.ownerDocument.documentElement,
                o = k(e, n),
                r = Math.max(n.clientWidth, window.innerWidth || 0),
                i = Math.max(n.clientHeight, window.innerHeight || 0),
                a = t ? 0 : y(n),
                s = t ? 0 : y(n, "left");
            return N({
                top: a - o.top + o.marginTop,
                left: s - o.left + o.marginLeft,
                width: r,
                height: i
            })
        }
        function W(e) {
            var t = e.nodeName;
            if ("BODY" === t || "HTML" === t)
                return !1;
            if ("fixed" === l(e, "position"))
                return !0;
            var n = u(e);
            return !!n && W(n)
        }
        function H(e) {
            if (!e || !e.parentElement || m())
                return document.documentElement;
            for (var t = e.parentElement; t && "none" === l(t, "transform");)
                t = t.parentElement;
            return t || document.documentElement
        }
        function P(e, t, n, o) {
            var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                i = {
                    top: 0,
                    left: 0
                },
                a = r ? H(e) : w(e, t);
            if ("viewport" === o)
                i = S(a, r);
            else {
                var s = void 0;
                "scrollParent" === o ? "BODY" === (s = d(u(t))).nodeName && (s = e.ownerDocument.documentElement) : s = "window" === o ? e.ownerDocument.documentElement : o;
                var f = k(s, a, r);
                if ("HTML" !== s.nodeName || W(a))
                    i = f;
                else {
                    var p = L(e.ownerDocument),
                        l = p.height,
                        c = p.width;
                    i.top += f.top - f.marginTop,
                    i.bottom = l + f.top,
                    i.left += f.left - f.marginLeft,
                    i.right = c + f.left
                }
            }
            var h = "number" == typeof (n = n || 0);
            return i.left += h ? n : n.left || 0, i.top += h ? n : n.top || 0, i.right -= h ? n : n.right || 0, i.bottom -= h ? n : n.bottom || 0, i
        }
        function B(e) {
            return e.width * e.height
        }
        function A(e, t, n, o, r) {
            var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            if (-1 === e.indexOf("auto"))
                return e;
            var a = P(n, o, i, r),
                s = {
                    top: {
                        width: a.width,
                        height: t.top - a.top
                    },
                    right: {
                        width: a.right - t.right,
                        height: a.height
                    },
                    bottom: {
                        width: a.width,
                        height: a.bottom - t.bottom
                    },
                    left: {
                        width: t.left - a.left,
                        height: a.height
                    }
                },
                f = Object.keys(s).map(function(e) {
                    return D({
                        key: e
                    }, s[e], {
                        area: B(s[e])
                    })
                }).sort(function(e, t) {
                    return t.area - e.area
                }),
                p = f.filter(function(e) {
                    var t = e.width,
                        o = e.height;
                    return t >= n.clientWidth && o >= n.clientHeight
                }),
                l = p.length > 0 ? p[0].key : f[0].key,
                u = e.split("-")[1];
            return l + (u ? "-" + u : "")
        }
        function I(e, t, n) {
            var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return k(n, o ? H(t) : w(t, n), o)
        }
        function j(e) {
            var t = e.ownerDocument.defaultView.getComputedStyle(e),
                n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
                o = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
            return {
                width: e.offsetWidth + o,
                height: e.offsetHeight + n
            }
        }
        function R(e) {
            var t = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };
            return e.replace(/left|right|bottom|top/g, function(e) {
                return t[e]
            })
        }
        function U(e, t, n) {
            n = n.split("-")[0];
            var o = j(e),
                r = {
                    width: o.width,
                    height: o.height
                },
                i = -1 !== ["right", "left"].indexOf(n),
                a = i ? "top" : "left",
                s = i ? "left" : "top",
                f = i ? "height" : "width",
                p = i ? "width" : "height";
            return r[a] = t[a] + t[f] / 2 - o[f] / 2, r[s] = n === s ? t[s] - o[p] : t[R(s)], r
        }
        function Y(e, t) {
            return Array.prototype.find ? e.find(t) : e.filter(t)[0]
        }
        function V(e, t, n) {
            if (Array.prototype.findIndex)
                return e.findIndex(function(e) {
                    return e[t] === n
                });
            var o = Y(e, function(e) {
                return e[t] === n
            });
            return e.indexOf(o)
        }
        function q(e, t, n) {
            return (void 0 === n ? e : e.slice(0, V(e, "name", n))).forEach(function(e) {
                e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                var n = e.function || e.fn;
                e.enabled && p(n) && (t.offsets.popper = N(t.offsets.popper), t.offsets.reference = N(t.offsets.reference), t = n(t, e))
            }), t
        }
        function K() {
            if (!this.state.isDestroyed) {
                var e = {
                    instance: this,
                    styles: {},
                    arrowStyles: {},
                    attributes: {},
                    flipped: !1,
                    offsets: {}
                };
                e.offsets.reference = I(this.state, this.popper, this.reference, this.options.positionFixed),
                e.placement = A(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
                e.originalPlacement = e.placement,
                e.positionFixed = this.options.positionFixed,
                e.offsets.popper = U(this.popper, e.offsets.reference, e.placement),
                e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
                e = q(this.modifiers, e),
                this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
            }
        }
        function _(e, t) {
            return e.some(function(e) {
                var n = e.name;
                return e.enabled && n === t
            })
        }
        function z(e) {
            for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), o = 0; o < t.length; o++) {
                var r = t[o],
                    i = r ? "" + r + n : e;
                if (void 0 !== document.body.style[i])
                    return i
            }
            return null
        }
        function G() {
            return this.state.isDestroyed = !0, _(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[z("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
        }
        function X(e) {
            var t = e.ownerDocument;
            return t ? t.defaultView : window
        }
        function J(e, t, n, o) {
            var r = "BODY" === e.nodeName,
                i = r ? e.ownerDocument.defaultView : e;
            i.addEventListener(t, n, {
                passive: !0
            }),
            r || J(d(i.parentNode), t, n, o),
            o.push(i)
        }
        function Q(e, t, n, o) {
            n.updateBound = o,
            X(e).addEventListener("resize", n.updateBound, {
                passive: !0
            });
            var r = d(e);
            return J(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
        }
        function Z() {
            this.state.eventsEnabled || (this.state = Q(this.reference, this.options, this.state, this.scheduleUpdate))
        }
        function $(e, t) {
            return X(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
                e.removeEventListener("scroll", t.updateBound)
            }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
        }
        function ee() {
            this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = $(this.reference, this.state))
        }
        function te(e) {
            return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
        }
        function ne(e, t) {
            Object.keys(t).forEach(function(n) {
                var o = "";
                -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && te(t[n]) && (o = "px"),
                e.style[n] = t[n] + o
            })
        }
        function oe(e, t) {
            Object.keys(t).forEach(function(n) {
                !1 !== t[n] ? e.setAttribute(n, t[n]) : e.removeAttribute(n)
            })
        }
        function re(e) {
            return ne(e.instance.popper, e.styles), oe(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && ne(e.arrowElement, e.arrowStyles), e
        }
        function ie(e, t, n, o, r) {
            var i = I(r, t, e, n.positionFixed),
                a = A(n.placement, i, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
            return t.setAttribute("x-placement", a), ne(t, {
                position: n.positionFixed ? "fixed" : "absolute"
            }), n
        }
        function ae(e, t) {
            var n = e.offsets,
                o = n.popper,
                r = n.reference,
                i = Math.round,
                a = Math.floor,
                s = function(e) {
                    return e
                },
                f = i(r.width),
                p = i(o.width),
                l = -1 !== ["left", "right"].indexOf(e.placement),
                u = -1 !== e.placement.indexOf("-"),
                d = t ? l || u || f % 2 == p % 2 ? i : a : s,
                c = t ? i : s;
            return {
                left: d(f % 2 == 1 && p % 2 == 1 && !u && t ? o.left - 1 : o.left),
                top: c(o.top),
                bottom: c(o.bottom),
                right: d(o.right)
            }
        }
        var se = t && /Firefox/i.test(navigator.userAgent);
        function fe(e, t) {
            var n = t.x,
                o = t.y,
                r = e.offsets.popper,
                i = Y(e.instance.modifiers, function(e) {
                    return "applyStyle" === e.name
                }).gpuAcceleration;
            void 0 !== i && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
            var a = void 0 !== i ? i : t.gpuAcceleration,
                s = v(e.instance.popper),
                f = F(s),
                p = {
                    position: r.position
                },
                l = ae(e, window.devicePixelRatio < 2 || !se),
                u = "bottom" === n ? "top" : "bottom",
                d = "right" === o ? "left" : "right",
                c = z("transform"),
                h = void 0,
                m = void 0;
            if (m = "bottom" === u ? "HTML" === s.nodeName ? -s.clientHeight + l.bottom : -f.height + l.bottom : l.top, h = "right" === d ? "HTML" === s.nodeName ? -s.clientWidth + l.right : -f.width + l.right : l.left, a && c)
                p[c] = "translate3d(" + h + "px, " + m + "px, 0)",
                p[u] = 0,
                p[d] = 0,
                p.willChange = "transform";
            else {
                var g = "bottom" === u ? -1 : 1,
                    b = "right" === d ? -1 : 1;
                p[u] = m * g,
                p[d] = h * b,
                p.willChange = u + ", " + d
            }
            var w = {
                "x-placement": e.placement
            };
            return e.attributes = D({}, w, e.attributes), e.styles = D({}, p, e.styles), e.arrowStyles = D({}, e.offsets.arrow, e.arrowStyles), e
        }
        function pe(e, t, n) {
            var o = Y(e, function(e) {
                    return e.name === t
                }),
                r = !!o && e.some(function(e) {
                    return e.name === n && e.enabled && e.order < o.order
                });
            if (!r) {
                var i = "`" + t + "`",
                    a = "`" + n + "`";
                console.warn(a + " modifier is required by " + i + " modifier in order to work, be sure to include it before " + i + "!")
            }
            return r
        }
        function le(e, t) {
            var n;
            if (!pe(e.instance.modifiers, "arrow", "keepTogether"))
                return e;
            var o = t.element;
            if ("string" == typeof o) {
                if (!(o = e.instance.popper.querySelector(o)))
                    return e
            } else if (!e.instance.popper.contains(o))
                return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
            var r = e.placement.split("-")[0],
                i = e.offsets,
                a = i.popper,
                s = i.reference,
                f = -1 !== ["left", "right"].indexOf(r),
                p = f ? "height" : "width",
                u = f ? "Top" : "Left",
                d = u.toLowerCase(),
                c = f ? "left" : "top",
                h = f ? "bottom" : "right",
                m = j(o)[p];
            s[h] - m < a[d] && (e.offsets.popper[d] -= a[d] - (s[h] - m)),
            s[d] + m > a[h] && (e.offsets.popper[d] += s[d] + m - a[h]),
            e.offsets.popper = N(e.offsets.popper);
            var v = s[d] + s[p] / 2 - m / 2,
                g = l(e.instance.popper),
                b = parseFloat(g["margin" + u], 10),
                w = parseFloat(g["border" + u + "Width"], 10),
                y = v - e.offsets.popper[d] - b - w;
            return y = Math.max(Math.min(a[p] - m, y), 0), e.arrowElement = o, e.offsets.arrow = (C(n = {}, d, Math.round(y)), C(n, c, ""), n), e
        }
        function ue(e) {
            return "end" === e ? "start" : "start" === e ? "end" : e
        }
        var de = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
            ce = de.slice(3);
        function he(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = ce.indexOf(e),
                o = ce.slice(n + 1).concat(ce.slice(0, n));
            return t ? o.reverse() : o
        }
        var me = {
            FLIP: "flip",
            CLOCKWISE: "clockwise",
            COUNTERCLOCKWISE: "counterclockwise"
        };
        function ve(e, t) {
            if (_(e.instance.modifiers, "inner"))
                return e;
            if (e.flipped && e.placement === e.originalPlacement)
                return e;
            var n = P(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                o = e.placement.split("-")[0],
                r = R(o),
                i = e.placement.split("-")[1] || "",
                a = [];
            switch (t.behavior) {
            case me.FLIP:
                a = [o, r];
                break;
            case me.CLOCKWISE:
                a = he(o);
                break;
            case me.COUNTERCLOCKWISE:
                a = he(o, !0);
                break;
            default:
                a = t.behavior
            }
            return a.forEach(function(s, f) {
                if (o !== s || a.length === f + 1)
                    return e;
                o = e.placement.split("-")[0],
                r = R(o);
                var p = e.offsets.popper,
                    l = e.offsets.reference,
                    u = Math.floor,
                    d = "left" === o && u(p.right) > u(l.left) || "right" === o && u(p.left) < u(l.right) || "top" === o && u(p.bottom) > u(l.top) || "bottom" === o && u(p.top) < u(l.bottom),
                    c = u(p.left) < u(n.left),
                    h = u(p.right) > u(n.right),
                    m = u(p.top) < u(n.top),
                    v = u(p.bottom) > u(n.bottom),
                    g = "left" === o && c || "right" === o && h || "top" === o && m || "bottom" === o && v,
                    b = -1 !== ["top", "bottom"].indexOf(o),
                    w = !!t.flipVariations && (b && "start" === i && c || b && "end" === i && h || !b && "start" === i && m || !b && "end" === i && v),
                    y = !!t.flipVariationsByContent && (b && "start" === i && h || b && "end" === i && c || !b && "start" === i && v || !b && "end" === i && m),
                    E = w || y;
                (d || g || E) && (e.flipped = !0, (d || g) && (o = a[f + 1]), E && (i = ue(i)), e.placement = o + (i ? "-" + i : ""), e.offsets.popper = D({}, e.offsets.popper, U(e.instance.popper, e.offsets.reference, e.placement)), e = q(e.instance.modifiers, e, "flip"))
            }), e
        }
        function ge(e) {
            var t = e.offsets,
                n = t.popper,
                o = t.reference,
                r = e.placement.split("-")[0],
                i = Math.floor,
                a = -1 !== ["top", "bottom"].indexOf(r),
                s = a ? "right" : "bottom",
                f = a ? "left" : "top",
                p = a ? "width" : "height";
            return n[s] < i(o[f]) && (e.offsets.popper[f] = i(o[f]) - n[p]), n[f] > i(o[s]) && (e.offsets.popper[f] = i(o[s])), e
        }
        function be(e, t, n, o) {
            var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                i = +r[1],
                a = r[2];
            if (!i)
                return e;
            if (0 === a.indexOf("%")) {
                var s = void 0;
                switch (a) {
                case "%p":
                    s = n;
                    break;
                case "%":
                case "%r":
                default:
                    s = o
                }
                return N(s)[t] / 100 * i
            }
            if ("vh" === a || "vw" === a) {
                return ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * i
            }
            return i
        }
        function we(e, t, n, o) {
            var r = [0, 0],
                i = -1 !== ["right", "left"].indexOf(o),
                a = e.split(/(\+|\-)/).map(function(e) {
                    return e.trim()
                }),
                s = a.indexOf(Y(a, function(e) {
                    return -1 !== e.search(/,|\s/)
                }));
            a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
            var f = /\s*,\s*|\s+/,
                p = -1 !== s ? [a.slice(0, s).concat([a[s].split(f)[0]]), [a[s].split(f)[1]].concat(a.slice(s + 1))] : [a];
            return (p = p.map(function(e, o) {
                var r = (1 === o ? !i : i) ? "height" : "width",
                    a = !1;
                return e.reduce(function(e, t) {
                    return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, a = !0, e) : a ? (e[e.length - 1] += t, a = !1, e) : e.concat(t)
                }, []).map(function(e) {
                    return be(e, r, t, n)
                })
            })).forEach(function(e, t) {
                e.forEach(function(n, o) {
                    te(n) && (r[t] += n * ("-" === e[o - 1] ? -1 : 1))
                })
            }), r
        }
        function ye(e, t) {
            var n = t.offset,
                o = e.placement,
                r = e.offsets,
                i = r.popper,
                a = r.reference,
                s = o.split("-")[0],
                f = void 0;
            return f = te(+n) ? [+n, 0] : we(n, i, a, s), "left" === s ? (i.top += f[0], i.left -= f[1]) : "right" === s ? (i.top += f[0], i.left += f[1]) : "top" === s ? (i.left += f[0], i.top -= f[1]) : "bottom" === s && (i.left += f[0], i.top += f[1]), e.popper = i, e
        }
        function Ee(e, t) {
            var n = t.boundariesElement || v(e.instance.popper);
            e.instance.reference === n && (n = v(n));
            var o = z("transform"),
                r = e.instance.popper.style,
                i = r.top,
                a = r.left,
                s = r[o];
            r.top = "",
            r.left = "",
            r[o] = "";
            var f = P(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
            r.top = i,
            r.left = a,
            r[o] = s,
            t.boundaries = f;
            var p = t.priority,
                l = e.offsets.popper,
                u = {
                    primary: function(e) {
                        var n = l[e];
                        return l[e] < f[e] && !t.escapeWithReference && (n = Math.max(l[e], f[e])), C({}, e, n)
                    },
                    secondary: function(e) {
                        var n = "right" === e ? "left" : "top",
                            o = l[n];
                        return l[e] > f[e] && !t.escapeWithReference && (o = Math.min(l[n], f[e] - ("right" === e ? l.width : l.height))), C({}, n, o)
                    }
                };
            return p.forEach(function(e) {
                var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                l = D({}, l, u[t](e))
            }), e.offsets.popper = l, e
        }
        function xe(e) {
            var t = e.placement,
                n = t.split("-")[0],
                o = t.split("-")[1];
            if (o) {
                var r = e.offsets,
                    i = r.reference,
                    a = r.popper,
                    s = -1 !== ["bottom", "top"].indexOf(n),
                    f = s ? "left" : "top",
                    p = s ? "width" : "height",
                    l = {
                        start: C({}, f, i[f]),
                        end: C({}, f, i[f] + i[p] - a[p])
                    };
                e.offsets.popper = D({}, a, l[o])
            }
            return e
        }
        function Oe(e) {
            if (!pe(e.instance.modifiers, "hide", "preventOverflow"))
                return e;
            var t = e.offsets.reference,
                n = Y(e.instance.modifiers, function(e) {
                    return "preventOverflow" === e.name
                }).boundaries;
            if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                if (!0 === e.hide)
                    return e;
                e.hide = !0,
                e.attributes["x-out-of-boundaries"] = ""
            } else {
                if (!1 === e.hide)
                    return e;
                e.hide = !1,
                e.attributes["x-out-of-boundaries"] = !1
            }
            return e
        }
        function Le(e) {
            var t = e.placement,
                n = t.split("-")[0],
                o = e.offsets,
                r = o.popper,
                i = o.reference,
                a = -1 !== ["left", "right"].indexOf(n),
                s = -1 === ["top", "left"].indexOf(n);
            return r[a ? "left" : "top"] = i[n] - (s ? r[a ? "width" : "height"] : 0), e.placement = R(t), e.offsets.popper = N(r), e
        }
        var Te = {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: xe
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: ye,
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: Ee,
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: ge
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: le,
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: ve,
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                    flipVariations: !1,
                    flipVariationsByContent: !1
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: Le
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: Oe
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: fe,
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: re,
                    onLoad: ie,
                    gpuAcceleration: void 0
                }
            },
            Me = {
                placement: "bottom",
                positionFixed: !1,
                eventsEnabled: !0,
                removeOnDestroy: !1,
                onCreate: function() {},
                onUpdate: function() {},
                modifiers: Te
            },
            Ce = function() {
                function e(t, n) {
                    var o = this,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    T(this, e),
                    this.scheduleUpdate = function() {
                        return requestAnimationFrame(o.update)
                    },
                    this.update = f(this.update.bind(this)),
                    this.options = D({}, e.Defaults, r),
                    this.state = {
                        isDestroyed: !1,
                        isCreated: !1,
                        scrollParents: []
                    },
                    this.reference = t && t.jquery ? t[0] : t,
                    this.popper = n && n.jquery ? n[0] : n,
                    this.options.modifiers = {},
                    Object.keys(D({}, e.Defaults.modifiers, r.modifiers)).forEach(function(t) {
                        o.options.modifiers[t] = D({}, e.Defaults.modifiers[t] || {}, r.modifiers ? r.modifiers[t] : {})
                    }),
                    this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                        return D({
                            name: e
                        }, o.options.modifiers[e])
                    }).sort(function(e, t) {
                        return e.order - t.order
                    }),
                    this.modifiers.forEach(function(e) {
                        e.enabled && p(e.onLoad) && e.onLoad(o.reference, o.popper, o.options, e, o.state)
                    }),
                    this.update();
                    var i = this.options.eventsEnabled;
                    i && this.enableEventListeners(),
                    this.state.eventsEnabled = i
                }
                return M(e, [{
                    key: "update",
                    value: function() {
                        return K.call(this)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        return G.call(this)
                    }
                }, {
                    key: "enableEventListeners",
                    value: function() {
                        return Z.call(this)
                    }
                }, {
                    key: "disableEventListeners",
                    value: function() {
                        return ee.call(this)
                    }
                }]), e
            }();
        Ce.Utils = ("undefined" != typeof window ? window : e).PopperUtils,
        Ce.placements = de,
        Ce.Defaults = Me;
        var De = Ce;
        exports.default = De;
    }, {}],
    "BQpi": [function(require, module, exports) {
        var define;
        var global = arguments[3];
        var t,
            e = arguments[3];
        function n(t) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        !function(e, i) {
            "object" === ("undefined" == typeof exports ? "undefined" : n(exports)) && "undefined" != typeof module ? i(exports, require("jquery"), require("popper.js")) : "function" == typeof t && t.amd ? t(["exports", "jquery", "popper.js"], i) : i((e = e || self).bootstrap = {}, e.jQuery, e.Popper)
        }(this, function(t, e, i) {
            "use strict";
            function o(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
                }
            }
            function s(t, e, n) {
                return e && o(t.prototype, e), n && o(t, n), t
            }
            function r(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))),
                    i.forEach(function(e) {
                        r(t, e, n[e])
                    })
                }
                return t
            }
            e = e && e.hasOwnProperty("default") ? e.default : e,
            i = i && i.hasOwnProperty("default") ? i.default : i;
            var l = "transitionend";
            function c(t) {
                var n = this,
                    i = !1;
                return e(this).one(h.TRANSITION_END, function() {
                    i = !0
                }), setTimeout(function() {
                    i || h.triggerTransitionEnd(n)
                }, t), this
            }
            var h = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function(t) {
                    do {
                        t += ~~(1e6 * Math.random())
                    } while (document.getElementById(t));
                    return t
                },
                getSelectorFromElement: function(t) {
                    var e = t.getAttribute("data-target");
                    if (!e || "#" === e) {
                        var n = t.getAttribute("href");
                        e = n && "#" !== n ? n.trim() : ""
                    }
                    try {
                        return document.querySelector(e) ? e : null
                    } catch (i) {
                        return null
                    }
                },
                getTransitionDurationFromElement: function(t) {
                    if (!t)
                        return 0;
                    var n = e(t).css("transition-duration"),
                        i = e(t).css("transition-delay"),
                        o = parseFloat(n),
                        s = parseFloat(i);
                    return o || s ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
                },
                reflow: function(t) {
                    return t.offsetHeight
                },
                triggerTransitionEnd: function(t) {
                    e(t).trigger(l)
                },
                supportsTransitionEnd: function() {
                    return Boolean(l)
                },
                isElement: function(t) {
                    return (t[0] || t).nodeType
                },
                typeCheckConfig: function(t, e, n) {
                    for (var i in n)
                        if (Object.prototype.hasOwnProperty.call(n, i)) {
                            var o = n[i],
                                s = e[i],
                                r = s && h.isElement(s) ? "element" : (a = s, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                            if (!new RegExp(o).test(r))
                                throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + r + '" but expected type "' + o + '".')
                        }
                    var a
                },
                findShadowRoot: function(t) {
                    if (!document.documentElement.attachShadow)
                        return null;
                    if ("function" == typeof t.getRootNode) {
                        var e = t.getRootNode();
                        return e instanceof ShadowRoot ? e : null
                    }
                    return t instanceof ShadowRoot ? t : t.parentNode ? h.findShadowRoot(t.parentNode) : null
                }
            };
            e.fn.emulateTransitionEnd = c,
            e.event.special[h.TRANSITION_END] = {
                bindType: l,
                delegateType: l,
                handle: function(t) {
                    if (e(t.target).is(this))
                        return t.handleObj.handler.apply(this, arguments)
                }
            };
            var u = e.fn.alert,
                f = {
                    CLOSE: "close.bs.alert",
                    CLOSED: "closed.bs.alert",
                    CLICK_DATA_API: "click.bs.alert.data-api"
                },
                d = "alert",
                g = "fade",
                _ = "show",
                m = function() {
                    function t(t) {
                        this._element = t
                    }
                    var n = t.prototype;
                    return n.close = function(t) {
                        var e = this._element;
                        t && (e = this._getRootElement(t)),
                        this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
                    }, n.dispose = function() {
                        e.removeData(this._element, "bs.alert"),
                        this._element = null
                    }, n._getRootElement = function(t) {
                        var n = h.getSelectorFromElement(t),
                            i = !1;
                        return n && (i = document.querySelector(n)), i || (i = e(t).closest("." + d)[0]), i
                    }, n._triggerCloseEvent = function(t) {
                        var n = e.Event(f.CLOSE);
                        return e(t).trigger(n), n
                    }, n._removeElement = function(t) {
                        var n = this;
                        if (e(t).removeClass(_), e(t).hasClass(g)) {
                            var i = h.getTransitionDurationFromElement(t);
                            e(t).one(h.TRANSITION_END, function(e) {
                                return n._destroyElement(t, e)
                            }).emulateTransitionEnd(i)
                        } else
                            this._destroyElement(t)
                    }, n._destroyElement = function(t) {
                        e(t).detach().trigger(f.CLOSED).remove()
                    }, t._jQueryInterface = function(n) {
                        return this.each(function() {
                            var i = e(this),
                                o = i.data("bs.alert");
                            o || (o = new t(this), i.data("bs.alert", o)),
                            "close" === n && o[n](this)
                        })
                    }, t._handleDismiss = function(t) {
                        return function(e) {
                            e && e.preventDefault(),
                            t.close(this)
                        }
                    }, s(t, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.3.1"
                        }
                    }]), t
                }();
            e(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', m._handleDismiss(new m)),
            e.fn.alert = m._jQueryInterface,
            e.fn.alert.Constructor = m,
            e.fn.alert.noConflict = function() {
                return e.fn.alert = u, m._jQueryInterface
            };
            var p = e.fn.button,
                v = "active",
                E = "btn",
                b = "focus",
                y = '[data-toggle^="button"]',
                T = '[data-toggle="buttons"]',
                C = 'input:not([type="hidden"])',
                S = ".active",
                I = ".btn",
                D = {
                    CLICK_DATA_API: "click.bs.button.data-api",
                    FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
                },
                A = function() {
                    function t(t) {
                        this._element = t
                    }
                    var n = t.prototype;
                    return n.toggle = function() {
                        var t = !0,
                            n = !0,
                            i = e(this._element).closest(T)[0];
                        if (i) {
                            var o = this._element.querySelector(C);
                            if (o) {
                                if ("radio" === o.type)
                                    if (o.checked && this._element.classList.contains(v))
                                        t = !1;
                                    else {
                                        var s = i.querySelector(S);
                                        s && e(s).removeClass(v)
                                    }
                                if (t) {
                                    if (o.hasAttribute("disabled") || i.hasAttribute("disabled") || o.classList.contains("disabled") || i.classList.contains("disabled"))
                                        return;
                                    o.checked = !this._element.classList.contains(v),
                                    e(o).trigger("change")
                                }
                                o.focus(),
                                n = !1
                            }
                        }
                        n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(v)),
                        t && e(this._element).toggleClass(v)
                    }, n.dispose = function() {
                        e.removeData(this._element, "bs.button"),
                        this._element = null
                    }, t._jQueryInterface = function(n) {
                        return this.each(function() {
                            var i = e(this).data("bs.button");
                            i || (i = new t(this), e(this).data("bs.button", i)),
                            "toggle" === n && i[n]()
                        })
                    }, s(t, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.3.1"
                        }
                    }]), t
                }();
            e(document).on(D.CLICK_DATA_API, y, function(t) {
                t.preventDefault();
                var n = t.target;
                e(n).hasClass(E) || (n = e(n).closest(I)),
                A._jQueryInterface.call(e(n), "toggle")
            }).on(D.FOCUS_BLUR_DATA_API, y, function(t) {
                var n = e(t.target).closest(I)[0];
                e(n).toggleClass(b, /^focus(in)?$/.test(t.type))
            }),
            e.fn.button = A._jQueryInterface,
            e.fn.button.Constructor = A,
            e.fn.button.noConflict = function() {
                return e.fn.button = p, A._jQueryInterface
            };
            var w = "carousel",
                N = ".bs.carousel",
                O = e.fn[w],
                k = {
                    interval: 5e3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0,
                    touch: !0
                },
                L = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean",
                    touch: "boolean"
                },
                P = "next",
                R = "prev",
                j = "left",
                H = "right",
                M = {
                    SLIDE: "slide.bs.carousel",
                    SLID: "slid.bs.carousel",
                    KEYDOWN: "keydown.bs.carousel",
                    MOUSEENTER: "mouseenter.bs.carousel",
                    MOUSELEAVE: "mouseleave.bs.carousel",
                    TOUCHSTART: "touchstart.bs.carousel",
                    TOUCHMOVE: "touchmove.bs.carousel",
                    TOUCHEND: "touchend.bs.carousel",
                    POINTERDOWN: "pointerdown.bs.carousel",
                    POINTERUP: "pointerup.bs.carousel",
                    DRAG_START: "dragstart.bs.carousel",
                    LOAD_DATA_API: "load.bs.carousel.data-api",
                    CLICK_DATA_API: "click.bs.carousel.data-api"
                },
                W = "carousel",
                F = "active",
                U = "slide",
                x = "carousel-item-right",
                K = "carousel-item-left",
                q = "carousel-item-next",
                V = "carousel-item-prev",
                Q = "pointer-event",
                B = {
                    ACTIVE: ".active",
                    ACTIVE_ITEM: ".active.carousel-item",
                    ITEM: ".carousel-item",
                    ITEM_IMG: ".carousel-item img",
                    NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                    INDICATORS: ".carousel-indicators",
                    DATA_SLIDE: "[data-slide], [data-slide-to]",
                    DATA_RIDE: '[data-ride="carousel"]'
                },
                Y = {
                    TOUCH: "touch",
                    PEN: "pen"
                },
                G = function() {
                    function t(t, e) {
                        this._items = null,
                        this._interval = null,
                        this._activeElement = null,
                        this._isPaused = !1,
                        this._isSliding = !1,
                        this.touchTimeout = null,
                        this.touchStartX = 0,
                        this.touchDeltaX = 0,
                        this._config = this._getConfig(e),
                        this._element = t,
                        this._indicatorsElement = this._element.querySelector(B.INDICATORS),
                        this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0,
                        this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
                        this._addEventListeners()
                    }
                    var i = t.prototype;
                    return i.next = function() {
                        this._isSliding || this._slide(P)
                    }, i.nextWhenVisible = function() {
                        !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
                    }, i.prev = function() {
                        this._isSliding || this._slide(R)
                    }, i.pause = function(t) {
                        t || (this._isPaused = !0),
                        this._element.querySelector(B.NEXT_PREV) && (h.triggerTransitionEnd(this._element), this.cycle(!0)),
                        clearInterval(this._interval),
                        this._interval = null
                    }, i.cycle = function(t) {
                        t || (this._isPaused = !1),
                        this._interval && (clearInterval(this._interval), this._interval = null),
                        this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                    }, i.to = function(t) {
                        var n = this;
                        this._activeElement = this._element.querySelector(B.ACTIVE_ITEM);
                        var i = this._getItemIndex(this._activeElement);
                        if (!(t > this._items.length - 1 || t < 0))
                            if (this._isSliding)
                                e(this._element).one(M.SLID, function() {
                                    return n.to(t)
                                });
                            else {
                                if (i === t)
                                    return this.pause(), void this.cycle();
                                var o = t > i ? P : R;
                                this._slide(o, this._items[t])
                            }
                    }, i.dispose = function() {
                        e(this._element).off(N),
                        e.removeData(this._element, "bs.carousel"),
                        this._items = null,
                        this._config = null,
                        this._element = null,
                        this._interval = null,
                        this._isPaused = null,
                        this._isSliding = null,
                        this._activeElement = null,
                        this._indicatorsElement = null
                    }, i._getConfig = function(t) {
                        return t = a({}, k, t), h.typeCheckConfig(w, t, L), t
                    }, i._handleSwipe = function() {
                        var t = Math.abs(this.touchDeltaX);
                        if (!(t <= 40)) {
                            var e = t / this.touchDeltaX;
                            e > 0 && this.prev(),
                            e < 0 && this.next()
                        }
                    }, i._addEventListeners = function() {
                        var t = this;
                        this._config.keyboard && e(this._element).on(M.KEYDOWN, function(e) {
                            return t._keydown(e)
                        }),
                        "hover" === this._config.pause && e(this._element).on(M.MOUSEENTER, function(e) {
                            return t.pause(e)
                        }).on(M.MOUSELEAVE, function(e) {
                            return t.cycle(e)
                        }),
                        this._config.touch && this._addTouchEventListeners()
                    }, i._addTouchEventListeners = function() {
                        var t = this;
                        if (this._touchSupported) {
                            var n = function(e) {
                                    t._pointerEvent && Y[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX)
                                },
                                i = function(e) {
                                    t._pointerEvent && Y[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                                    t._handleSwipe(),
                                    "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function(e) {
                                        return t.cycle(e)
                                    }, 500 + t._config.interval))
                                };
                            e(this._element.querySelectorAll(B.ITEM_IMG)).on(M.DRAG_START, function(t) {
                                return t.preventDefault()
                            }),
                            this._pointerEvent ? (e(this._element).on(M.POINTERDOWN, function(t) {
                                return n(t)
                            }), e(this._element).on(M.POINTERUP, function(t) {
                                return i(t)
                            }), this._element.classList.add(Q)) : (e(this._element).on(M.TOUCHSTART, function(t) {
                                return n(t)
                            }), e(this._element).on(M.TOUCHMOVE, function(e) {
                                return function(e) {
                                    e.originalEvent.touches && e.originalEvent.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX
                                }(e)
                            }), e(this._element).on(M.TOUCHEND, function(t) {
                                return i(t)
                            }))
                        }
                    }, i._keydown = function(t) {
                        if (!/input|textarea/i.test(t.target.tagName))
                            switch (t.which) {
                            case 37:
                                t.preventDefault(),
                                this.prev();
                                break;
                            case 39:
                                t.preventDefault(),
                                this.next()
                            }
                    }, i._getItemIndex = function(t) {
                        return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(B.ITEM)) : [], this._items.indexOf(t)
                    }, i._getItemByDirection = function(t, e) {
                        var n = t === P,
                            i = t === R,
                            o = this._getItemIndex(e),
                            s = this._items.length - 1;
                        if ((i && 0 === o || n && o === s) && !this._config.wrap)
                            return e;
                        var r = (o + (t === R ? -1 : 1)) % this._items.length;
                        return -1 === r ? this._items[this._items.length - 1] : this._items[r]
                    }, i._triggerSlideEvent = function(t, n) {
                        var i = this._getItemIndex(t),
                            o = this._getItemIndex(this._element.querySelector(B.ACTIVE_ITEM)),
                            s = e.Event(M.SLIDE, {
                                relatedTarget: t,
                                direction: n,
                                from: o,
                                to: i
                            });
                        return e(this._element).trigger(s), s
                    }, i._setActiveIndicatorElement = function(t) {
                        if (this._indicatorsElement) {
                            var n = [].slice.call(this._indicatorsElement.querySelectorAll(B.ACTIVE));
                            e(n).removeClass(F);
                            var i = this._indicatorsElement.children[this._getItemIndex(t)];
                            i && e(i).addClass(F)
                        }
                    }, i._slide = function(t, n) {
                        var i,
                            o,
                            s,
                            r = this,
                            a = this._element.querySelector(B.ACTIVE_ITEM),
                            l = this._getItemIndex(a),
                            c = n || a && this._getItemByDirection(t, a),
                            u = this._getItemIndex(c),
                            f = Boolean(this._interval);
                        if (t === P ? (i = K, o = q, s = j) : (i = x, o = V, s = H), c && e(c).hasClass(F))
                            this._isSliding = !1;
                        else if (!this._triggerSlideEvent(c, s).isDefaultPrevented() && a && c) {
                            this._isSliding = !0,
                            f && this.pause(),
                            this._setActiveIndicatorElement(c);
                            var d = e.Event(M.SLID, {
                                relatedTarget: c,
                                direction: s,
                                from: l,
                                to: u
                            });
                            if (e(this._element).hasClass(U)) {
                                e(c).addClass(o),
                                h.reflow(c),
                                e(a).addClass(i),
                                e(c).addClass(i);
                                var g = parseInt(c.getAttribute("data-interval"), 10);
                                g ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = g) : this._config.interval = this._config.defaultInterval || this._config.interval;
                                var _ = h.getTransitionDurationFromElement(a);
                                e(a).one(h.TRANSITION_END, function() {
                                    e(c).removeClass(i + " " + o).addClass(F),
                                    e(a).removeClass(F + " " + o + " " + i),
                                    r._isSliding = !1,
                                    setTimeout(function() {
                                        return e(r._element).trigger(d)
                                    }, 0)
                                }).emulateTransitionEnd(_)
                            } else
                                e(a).removeClass(F),
                                e(c).addClass(F),
                                this._isSliding = !1,
                                e(this._element).trigger(d);
                            f && this.cycle()
                        }
                    }, t._jQueryInterface = function(i) {
                        return this.each(function() {
                            var o = e(this).data("bs.carousel"),
                                s = a({}, k, e(this).data());
                            "object" === n(i) && (s = a({}, s, i));
                            var r = "string" == typeof i ? i : s.slide;
                            if (o || (o = new t(this, s), e(this).data("bs.carousel", o)), "number" == typeof i)
                                o.to(i);
                            else if ("string" == typeof r) {
                                if (void 0 === o[r])
                                    throw new TypeError('No method named "' + r + '"');
                                o[r]()
                            } else
                                s.interval && s.ride && (o.pause(), o.cycle())
                        })
                    }, t._dataApiClickHandler = function(n) {
                        var i = h.getSelectorFromElement(this);
                        if (i) {
                            var o = e(i)[0];
                            if (o && e(o).hasClass(W)) {
                                var s = a({}, e(o).data(), e(this).data()),
                                    r = this.getAttribute("data-slide-to");
                                r && (s.interval = !1),
                                t._jQueryInterface.call(e(o), s),
                                r && e(o).data("bs.carousel").to(r),
                                n.preventDefault()
                            }
                        }
                    }, s(t, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.3.1"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return k
                        }
                    }]), t
                }();
            e(document).on(M.CLICK_DATA_API, B.DATA_SLIDE, G._dataApiClickHandler),
            e(window).on(M.LOAD_DATA_API, function() {
                for (var t = [].slice.call(document.querySelectorAll(B.DATA_RIDE)), n = 0, i = t.length; n < i; n++) {
                    var o = e(t[n]);
                    G._jQueryInterface.call(o, o.data())
                }
            }),
            e.fn[w] = G._jQueryInterface,
            e.fn[w].Constructor = G,
            e.fn[w].noConflict = function() {
                return e.fn[w] = O, G._jQueryInterface
            };
            var X = "collapse",
                z = e.fn[X],
                $ = {
                    toggle: !0,
                    parent: ""
                },
                J = {
                    toggle: "boolean",
                    parent: "(string|element)"
                },
                Z = {
                    SHOW: "show.bs.collapse",
                    SHOWN: "shown.bs.collapse",
                    HIDE: "hide.bs.collapse",
                    HIDDEN: "hidden.bs.collapse",
                    CLICK_DATA_API: "click.bs.collapse.data-api"
                },
                tt = "show",
                et = "collapse",
                nt = "collapsing",
                it = "collapsed",
                ot = "width",
                st = "height",
                rt = {
                    ACTIVES: ".show, .collapsing",
                    DATA_TOGGLE: '[data-toggle="collapse"]'
                },
                at = function() {
                    function t(t, e) {
                        this._isTransitioning = !1,
                        this._element = t,
                        this._config = this._getConfig(e),
                        this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                        for (var n = [].slice.call(document.querySelectorAll(rt.DATA_TOGGLE)), i = 0, o = n.length; i < o; i++) {
                            var s = n[i],
                                r = h.getSelectorFromElement(s),
                                a = [].slice.call(document.querySelectorAll(r)).filter(function(e) {
                                    return e === t
                                });
                            null !== r && a.length > 0 && (this._selector = r, this._triggerArray.push(s))
                        }
                        this._parent = this._config.parent ? this._getParent() : null,
                        this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
                        this._config.toggle && this.toggle()
                    }
                    var i = t.prototype;
                    return i.toggle = function() {
                        e(this._element).hasClass(tt) ? this.hide() : this.show()
                    }, i.show = function() {
                        var n,
                            i,
                            o = this;
                        if (!this._isTransitioning && !e(this._element).hasClass(tt) && (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(rt.ACTIVES)).filter(function(t) {
                            return "string" == typeof o._config.parent ? t.getAttribute("data-parent") === o._config.parent : t.classList.contains(et)
                        })).length && (n = null), !(n && (i = e(n).not(this._selector).data("bs.collapse")) && i._isTransitioning))) {
                            var s = e.Event(Z.SHOW);
                            if (e(this._element).trigger(s), !s.isDefaultPrevented()) {
                                n && (t._jQueryInterface.call(e(n).not(this._selector), "hide"), i || e(n).data("bs.collapse", null));
                                var r = this._getDimension();
                                e(this._element).removeClass(et).addClass(nt),
                                this._element.style[r] = 0,
                                this._triggerArray.length && e(this._triggerArray).removeClass(it).attr("aria-expanded", !0),
                                this.setTransitioning(!0);
                                var a = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                                    l = h.getTransitionDurationFromElement(this._element);
                                e(this._element).one(h.TRANSITION_END, function() {
                                    e(o._element).removeClass(nt).addClass(et).addClass(tt),
                                    o._element.style[r] = "",
                                    o.setTransitioning(!1),
                                    e(o._element).trigger(Z.SHOWN)
                                }).emulateTransitionEnd(l),
                                this._element.style[r] = this._element[a] + "px"
                            }
                        }
                    }, i.hide = function() {
                        var t = this;
                        if (!this._isTransitioning && e(this._element).hasClass(tt)) {
                            var n = e.Event(Z.HIDE);
                            if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                                var i = this._getDimension();
                                this._element.style[i] = this._element.getBoundingClientRect()[i] + "px",
                                h.reflow(this._element),
                                e(this._element).addClass(nt).removeClass(et).removeClass(tt);
                                var o = this._triggerArray.length;
                                if (o > 0)
                                    for (var s = 0; s < o; s++) {
                                        var r = this._triggerArray[s],
                                            a = h.getSelectorFromElement(r);
                                        if (null !== a)
                                            e([].slice.call(document.querySelectorAll(a))).hasClass(tt) || e(r).addClass(it).attr("aria-expanded", !1)
                                    }
                                this.setTransitioning(!0);
                                this._element.style[i] = "";
                                var l = h.getTransitionDurationFromElement(this._element);
                                e(this._element).one(h.TRANSITION_END, function() {
                                    t.setTransitioning(!1),
                                    e(t._element).removeClass(nt).addClass(et).trigger(Z.HIDDEN)
                                }).emulateTransitionEnd(l)
                            }
                        }
                    }, i.setTransitioning = function(t) {
                        this._isTransitioning = t
                    }, i.dispose = function() {
                        e.removeData(this._element, "bs.collapse"),
                        this._config = null,
                        this._parent = null,
                        this._element = null,
                        this._triggerArray = null,
                        this._isTransitioning = null
                    }, i._getConfig = function(t) {
                        return (t = a({}, $, t)).toggle = Boolean(t.toggle), h.typeCheckConfig(X, t, J), t
                    }, i._getDimension = function() {
                        return e(this._element).hasClass(ot) ? ot : st
                    }, i._getParent = function() {
                        var n,
                            i = this;
                        h.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                        var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                            s = [].slice.call(n.querySelectorAll(o));
                        return e(s).each(function(e, n) {
                            i._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n])
                        }), n
                    }, i._addAriaAndCollapsedClass = function(t, n) {
                        var i = e(t).hasClass(tt);
                        n.length && e(n).toggleClass(it, !i).attr("aria-expanded", i)
                    }, t._getTargetFromElement = function(t) {
                        var e = h.getSelectorFromElement(t);
                        return e ? document.querySelector(e) : null
                    }, t._jQueryInterface = function(i) {
                        return this.each(function() {
                            var o = e(this),
                                s = o.data("bs.collapse"),
                                r = a({}, $, o.data(), "object" === n(i) && i ? i : {});
                            if (!s && r.toggle && /show|hide/.test(i) && (r.toggle = !1), s || (s = new t(this, r), o.data("bs.collapse", s)), "string" == typeof i) {
                                if (void 0 === s[i])
                                    throw new TypeError('No method named "' + i + '"');
                                s[i]()
                            }
                        })
                    }, s(t, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.3.1"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return $
                        }
                    }]), t
                }();
            e(document).on(Z.CLICK_DATA_API, rt.DATA_TOGGLE, function(t) {
                "A" === t.currentTarget.tagName && t.preventDefault();
                var n = e(this),
                    i = h.getSelectorFromElement(this),
                    o = [].slice.call(document.querySelectorAll(i));
                e(o).each(function() {
                    var t = e(this),
                        i = t.data("bs.collapse") ? "toggle" : n.data();
                    at._jQueryInterface.call(t, i)
                })
            }),
            e.fn[X] = at._jQueryInterface,
            e.fn[X].Constructor = at,
            e.fn[X].noConflict = function() {
                return e.fn[X] = z, at._jQueryInterface
            };
            var lt = "dropdown",
                ct = e.fn[lt],
                ht = new RegExp("38|40|27"),
                ut = {
                    HIDE: "hide.bs.dropdown",
                    HIDDEN: "hidden.bs.dropdown",
                    SHOW: "show.bs.dropdown",
                    SHOWN: "shown.bs.dropdown",
                    CLICK: "click.bs.dropdown",
                    CLICK_DATA_API: "click.bs.dropdown.data-api",
                    KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
                    KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
                },
                ft = "disabled",
                dt = "show",
                gt = "dropup",
                _t = "dropright",
                mt = "dropleft",
                pt = "dropdown-menu-right",
                vt = "position-static",
                Et = '[data-toggle="dropdown"]',
                bt = ".dropdown form",
                yt = ".dropdown-menu",
                Tt = ".navbar-nav",
                Ct = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                St = "top-start",
                It = "top-end",
                Dt = "bottom-start",
                At = "bottom-end",
                wt = "right-start",
                Nt = "left-start",
                Ot = {
                    offset: 0,
                    flip: !0,
                    boundary: "scrollParent",
                    reference: "toggle",
                    display: "dynamic"
                },
                kt = {
                    offset: "(number|string|function)",
                    flip: "boolean",
                    boundary: "(string|element)",
                    reference: "(string|element)",
                    display: "string"
                },
                Lt = function() {
                    function t(t, e) {
                        this._element = t,
                        this._popper = null,
                        this._config = this._getConfig(e),
                        this._menu = this._getMenuElement(),
                        this._inNavbar = this._detectNavbar(),
                        this._addEventListeners()
                    }
                    var o = t.prototype;
                    return o.toggle = function() {
                        if (!this._element.disabled && !e(this._element).hasClass(ft)) {
                            var n = t._getParentFromElement(this._element),
                                o = e(this._menu).hasClass(dt);
                            if (t._clearMenus(), !o) {
                                var s = {
                                        relatedTarget: this._element
                                    },
                                    r = e.Event(ut.SHOW, s);
                                if (e(n).trigger(r), !r.isDefaultPrevented()) {
                                    if (!this._inNavbar) {
                                        if (void 0 === i)
                                            throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                        var a = this._element;
                                        "parent" === this._config.reference ? a = n : h.isElement(this._config.reference) && (a = this._config.reference, void 0 !== this._config.reference.jquery && (a = this._config.reference[0])),
                                        "scrollParent" !== this._config.boundary && e(n).addClass(vt),
                                        this._popper = new i(a, this._menu, this._getPopperConfig())
                                    }
                                    "ontouchstart" in document.documentElement && 0 === e(n).closest(Tt).length && e(document.body).children().on("mouseover", null, e.noop),
                                    this._element.focus(),
                                    this._element.setAttribute("aria-expanded", !0),
                                    e(this._menu).toggleClass(dt),
                                    e(n).toggleClass(dt).trigger(e.Event(ut.SHOWN, s))
                                }
                            }
                        }
                    }, o.show = function() {
                        if (!(this._element.disabled || e(this._element).hasClass(ft) || e(this._menu).hasClass(dt))) {
                            var n = {
                                    relatedTarget: this._element
                                },
                                i = e.Event(ut.SHOW, n),
                                o = t._getParentFromElement(this._element);
                            e(o).trigger(i),
                            i.isDefaultPrevented() || (e(this._menu).toggleClass(dt), e(o).toggleClass(dt).trigger(e.Event(ut.SHOWN, n)))
                        }
                    }, o.hide = function() {
                        if (!this._element.disabled && !e(this._element).hasClass(ft) && e(this._menu).hasClass(dt)) {
                            var n = {
                                    relatedTarget: this._element
                                },
                                i = e.Event(ut.HIDE, n),
                                o = t._getParentFromElement(this._element);
                            e(o).trigger(i),
                            i.isDefaultPrevented() || (e(this._menu).toggleClass(dt), e(o).toggleClass(dt).trigger(e.Event(ut.HIDDEN, n)))
                        }
                    }, o.dispose = function() {
                        e.removeData(this._element, "bs.dropdown"),
                        e(this._element).off(".bs.dropdown"),
                        this._element = null,
                        this._menu = null,
                        null !== this._popper && (this._popper.destroy(), this._popper = null)
                    }, o.update = function() {
                        this._inNavbar = this._detectNavbar(),
                        null !== this._popper && this._popper.scheduleUpdate()
                    }, o._addEventListeners = function() {
                        var t = this;
                        e(this._element).on(ut.CLICK, function(e) {
                            e.preventDefault(),
                            e.stopPropagation(),
                            t.toggle()
                        })
                    }, o._getConfig = function(t) {
                        return t = a({}, this.constructor.Default, e(this._element).data(), t), h.typeCheckConfig(lt, t, this.constructor.DefaultType), t
                    }, o._getMenuElement = function() {
                        if (!this._menu) {
                            var e = t._getParentFromElement(this._element);
                            e && (this._menu = e.querySelector(yt))
                        }
                        return this._menu
                    }, o._getPlacement = function() {
                        var t = e(this._element.parentNode),
                            n = Dt;
                        return t.hasClass(gt) ? (n = St, e(this._menu).hasClass(pt) && (n = It)) : t.hasClass(_t) ? n = wt : t.hasClass(mt) ? n = Nt : e(this._menu).hasClass(pt) && (n = At), n
                    }, o._detectNavbar = function() {
                        return e(this._element).closest(".navbar").length > 0
                    }, o._getOffset = function() {
                        var t = this,
                            e = {};
                        return "function" == typeof this._config.offset ? e.fn = function(e) {
                            return e.offsets = a({}, e.offsets, t._config.offset(e.offsets, t._element) || {}), e
                        } : e.offset = this._config.offset, e
                    }, o._getPopperConfig = function() {
                        var t = {
                            placement: this._getPlacement(),
                            modifiers: {
                                offset: this._getOffset(),
                                flip: {
                                    enabled: this._config.flip
                                },
                                preventOverflow: {
                                    boundariesElement: this._config.boundary
                                }
                            }
                        };
                        return "static" === this._config.display && (t.modifiers.applyStyle = {
                            enabled: !1
                        }), t
                    }, t._jQueryInterface = function(i) {
                        return this.each(function() {
                            var o = e(this).data("bs.dropdown"),
                                s = "object" === n(i) ? i : null;
                            if (o || (o = new t(this, s), e(this).data("bs.dropdown", o)), "string" == typeof i) {
                                if (void 0 === o[i])
                                    throw new TypeError('No method named "' + i + '"');
                                o[i]()
                            }
                        })
                    }, t._clearMenus = function(n) {
                        if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which))
                            for (var i = [].slice.call(document.querySelectorAll(Et)), o = 0, s = i.length; o < s; o++) {
                                var r = t._getParentFromElement(i[o]),
                                    a = e(i[o]).data("bs.dropdown"),
                                    l = {
                                        relatedTarget: i[o]
                                    };
                                if (n && "click" === n.type && (l.clickEvent = n), a) {
                                    var c = a._menu;
                                    if (e(r).hasClass(dt) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && e.contains(r, n.target))) {
                                        var h = e.Event(ut.HIDE, l);
                                        e(r).trigger(h),
                                        h.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), i[o].setAttribute("aria-expanded", "false"), e(c).removeClass(dt), e(r).removeClass(dt).trigger(e.Event(ut.HIDDEN, l)))
                                    }
                                }
                            }
                    }, t._getParentFromElement = function(t) {
                        var e,
                            n = h.getSelectorFromElement(t);
                        return n && (e = document.querySelector(n)), e || t.parentNode
                    }, t._dataApiKeydownHandler = function(n) {
                        if ((/input|textarea/i.test(n.target.tagName) ? !(32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || e(n.target).closest(yt).length)) : ht.test(n.which)) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !e(this).hasClass(ft))) {
                            var i = t._getParentFromElement(this),
                                o = e(i).hasClass(dt);
                            if (o && (!o || 27 !== n.which && 32 !== n.which)) {
                                var s = [].slice.call(i.querySelectorAll(Ct));
                                if (0 !== s.length) {
                                    var r = s.indexOf(n.target);
                                    38 === n.which && r > 0 && r--,
                                    40 === n.which && r < s.length - 1 && r++,
                                    r < 0 && (r = 0),
                                    s[r].focus()
                                }
                            } else {
                                if (27 === n.which) {
                                    var a = i.querySelector(Et);
                                    e(a).trigger("focus")
                                }
                                e(this).trigger("click")
                            }
                        }
                    }, s(t, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.3.1"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return Ot
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return kt
                        }
                    }]), t
                }();
            e(document).on(ut.KEYDOWN_DATA_API, Et, Lt._dataApiKeydownHandler).on(ut.KEYDOWN_DATA_API, yt, Lt._dataApiKeydownHandler).on(ut.CLICK_DATA_API + " " + ut.KEYUP_DATA_API, Lt._clearMenus).on(ut.CLICK_DATA_API, Et, function(t) {
                t.preventDefault(),
                t.stopPropagation(),
                Lt._jQueryInterface.call(e(this), "toggle")
            }).on(ut.CLICK_DATA_API, bt, function(t) {
                t.stopPropagation()
            }),
            e.fn[lt] = Lt._jQueryInterface,
            e.fn[lt].Constructor = Lt,
            e.fn[lt].noConflict = function() {
                return e.fn[lt] = ct, Lt._jQueryInterface
            };
            var Pt = e.fn.modal,
                Rt = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0,
                    show: !0
                },
                jt = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean",
                    show: "boolean"
                },
                Ht = {
                    HIDE: "hide.bs.modal",
                    HIDDEN: "hidden.bs.modal",
                    SHOW: "show.bs.modal",
                    SHOWN: "shown.bs.modal",
                    FOCUSIN: "focusin.bs.modal",
                    RESIZE: "resize.bs.modal",
                    CLICK_DISMISS: "click.dismiss.bs.modal",
                    KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
                    MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
                    MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
                    CLICK_DATA_API: "click.bs.modal.data-api"
                },
                Mt = "modal-dialog-scrollable",
                Wt = "modal-scrollbar-measure",
                Ft = "modal-backdrop",
                Ut = "modal-open",
                xt = "fade",
                Kt = "show",
                qt = {
                    DIALOG: ".modal-dialog",
                    MODAL_BODY: ".modal-body",
                    DATA_TOGGLE: '[data-toggle="modal"]',
                    DATA_DISMISS: '[data-dismiss="modal"]',
                    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                    STICKY_CONTENT: ".sticky-top"
                },
                Vt = function() {
                    function t(t, e) {
                        this._config = this._getConfig(e),
                        this._element = t,
                        this._dialog = t.querySelector(qt.DIALOG),
                        this._backdrop = null,
                        this._isShown = !1,
                        this._isBodyOverflowing = !1,
                        this._ignoreBackdropClick = !1,
                        this._isTransitioning = !1,
                        this._scrollbarWidth = 0
                    }
                    var i = t.prototype;
                    return i.toggle = function(t) {
                        return this._isShown ? this.hide() : this.show(t)
                    }, i.show = function(t) {
                        var n = this;
                        if (!this._isShown && !this._isTransitioning) {
                            e(this._element).hasClass(xt) && (this._isTransitioning = !0);
                            var i = e.Event(Ht.SHOW, {
                                relatedTarget: t
                            });
                            e(this._element).trigger(i),
                            this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(Ht.CLICK_DISMISS, qt.DATA_DISMISS, function(t) {
                                return n.hide(t)
                            }), e(this._dialog).on(Ht.MOUSEDOWN_DISMISS, function() {
                                e(n._element).one(Ht.MOUSEUP_DISMISS, function(t) {
                                    e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                                })
                            }), this._showBackdrop(function() {
                                return n._showElement(t)
                            }))
                        }
                    }, i.hide = function(t) {
                        var n = this;
                        if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
                            var i = e.Event(Ht.HIDE);
                            if (e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                                this._isShown = !1;
                                var o = e(this._element).hasClass(xt);
                                if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(Ht.FOCUSIN), e(this._element).removeClass(Kt), e(this._element).off(Ht.CLICK_DISMISS), e(this._dialog).off(Ht.MOUSEDOWN_DISMISS), o) {
                                    var s = h.getTransitionDurationFromElement(this._element);
                                    e(this._element).one(h.TRANSITION_END, function(t) {
                                        return n._hideModal(t)
                                    }).emulateTransitionEnd(s)
                                } else
                                    this._hideModal()
                            }
                        }
                    }, i.dispose = function() {
                        [window, this._element, this._dialog].forEach(function(t) {
                            return e(t).off(".bs.modal")
                        }),
                        e(document).off(Ht.FOCUSIN),
                        e.removeData(this._element, "bs.modal"),
                        this._config = null,
                        this._element = null,
                        this._dialog = null,
                        this._backdrop = null,
                        this._isShown = null,
                        this._isBodyOverflowing = null,
                        this._ignoreBackdropClick = null,
                        this._isTransitioning = null,
                        this._scrollbarWidth = null
                    }, i.handleUpdate = function() {
                        this._adjustDialog()
                    }, i._getConfig = function(t) {
                        return t = a({}, Rt, t), h.typeCheckConfig("modal", t, jt), t
                    }, i._showElement = function(t) {
                        var n = this,
                            i = e(this._element).hasClass(xt);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
                        this._element.style.display = "block",
                        this._element.removeAttribute("aria-hidden"),
                        this._element.setAttribute("aria-modal", !0),
                        e(this._dialog).hasClass(Mt) ? this._dialog.querySelector(qt.MODAL_BODY).scrollTop = 0 : this._element.scrollTop = 0,
                        i && h.reflow(this._element),
                        e(this._element).addClass(Kt),
                        this._config.focus && this._enforceFocus();
                        var o = e.Event(Ht.SHOWN, {
                                relatedTarget: t
                            }),
                            s = function() {
                                n._config.focus && n._element.focus(),
                                n._isTransitioning = !1,
                                e(n._element).trigger(o)
                            };
                        if (i) {
                            var r = h.getTransitionDurationFromElement(this._dialog);
                            e(this._dialog).one(h.TRANSITION_END, s).emulateTransitionEnd(r)
                        } else
                            s()
                    }, i._enforceFocus = function() {
                        var t = this;
                        e(document).off(Ht.FOCUSIN).on(Ht.FOCUSIN, function(n) {
                            document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus()
                        })
                    }, i._setEscapeEvent = function() {
                        var t = this;
                        this._isShown && this._config.keyboard ? e(this._element).on(Ht.KEYDOWN_DISMISS, function(e) {
                            27 === e.which && (e.preventDefault(), t.hide())
                        }) : this._isShown || e(this._element).off(Ht.KEYDOWN_DISMISS)
                    }, i._setResizeEvent = function() {
                        var t = this;
                        this._isShown ? e(window).on(Ht.RESIZE, function(e) {
                            return t.handleUpdate(e)
                        }) : e(window).off(Ht.RESIZE)
                    }, i._hideModal = function() {
                        var t = this;
                        this._element.style.display = "none",
                        this._element.setAttribute("aria-hidden", !0),
                        this._element.removeAttribute("aria-modal"),
                        this._isTransitioning = !1,
                        this._showBackdrop(function() {
                            e(document.body).removeClass(Ut),
                            t._resetAdjustments(),
                            t._resetScrollbar(),
                            e(t._element).trigger(Ht.HIDDEN)
                        })
                    }, i._removeBackdrop = function() {
                        this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
                    }, i._showBackdrop = function(t) {
                        var n = this,
                            i = e(this._element).hasClass(xt) ? xt : "";
                        if (this._isShown && this._config.backdrop) {
                            if (this._backdrop = document.createElement("div"), this._backdrop.className = Ft, i && this._backdrop.classList.add(i), e(this._backdrop).appendTo(document.body), e(this._element).on(Ht.CLICK_DISMISS, function(t) {
                                n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                            }), i && h.reflow(this._backdrop), e(this._backdrop).addClass(Kt), !t)
                                return;
                            if (!i)
                                return void t();
                            var o = h.getTransitionDurationFromElement(this._backdrop);
                            e(this._backdrop).one(h.TRANSITION_END, t).emulateTransitionEnd(o)
                        } else if (!this._isShown && this._backdrop) {
                            e(this._backdrop).removeClass(Kt);
                            var s = function() {
                                n._removeBackdrop(),
                                t && t()
                            };
                            if (e(this._element).hasClass(xt)) {
                                var r = h.getTransitionDurationFromElement(this._backdrop);
                                e(this._backdrop).one(h.TRANSITION_END, s).emulateTransitionEnd(r)
                            } else
                                s()
                        } else
                            t && t()
                    }, i._adjustDialog = function() {
                        var t = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                        this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                    }, i._resetAdjustments = function() {
                        this._element.style.paddingLeft = "",
                        this._element.style.paddingRight = ""
                    }, i._checkScrollbar = function() {
                        var t = document.body.getBoundingClientRect();
                        this._isBodyOverflowing = t.left + t.right < window.innerWidth,
                        this._scrollbarWidth = this._getScrollbarWidth()
                    }, i._setScrollbar = function() {
                        var t = this;
                        if (this._isBodyOverflowing) {
                            var n = [].slice.call(document.querySelectorAll(qt.FIXED_CONTENT)),
                                i = [].slice.call(document.querySelectorAll(qt.STICKY_CONTENT));
                            e(n).each(function(n, i) {
                                var o = i.style.paddingRight,
                                    s = e(i).css("padding-right");
                                e(i).data("padding-right", o).css("padding-right", parseFloat(s) + t._scrollbarWidth + "px")
                            }),
                            e(i).each(function(n, i) {
                                var o = i.style.marginRight,
                                    s = e(i).css("margin-right");
                                e(i).data("margin-right", o).css("margin-right", parseFloat(s) - t._scrollbarWidth + "px")
                            });
                            var o = document.body.style.paddingRight,
                                s = e(document.body).css("padding-right");
                            e(document.body).data("padding-right", o).css("padding-right", parseFloat(s) + this._scrollbarWidth + "px")
                        }
                        e(document.body).addClass(Ut)
                    }, i._resetScrollbar = function() {
                        var t = [].slice.call(document.querySelectorAll(qt.FIXED_CONTENT));
                        e(t).each(function(t, n) {
                            var i = e(n).data("padding-right");
                            e(n).removeData("padding-right"),
                            n.style.paddingRight = i || ""
                        });
                        var n = [].slice.call(document.querySelectorAll("" + qt.STICKY_CONTENT));
                        e(n).each(function(t, n) {
                            var i = e(n).data("margin-right");
                            void 0 !== i && e(n).css("margin-right", i).removeData("margin-right")
                        });
                        var i = e(document.body).data("padding-right");
                        e(document.body).removeData("padding-right"),
                        document.body.style.paddingRight = i || ""
                    }, i._getScrollbarWidth = function() {
                        var t = document.createElement("div");
                        t.className = Wt,
                        document.body.appendChild(t);
                        var e = t.getBoundingClientRect().width - t.clientWidth;
                        return document.body.removeChild(t), e
                    }, t._jQueryInterface = function(i, o) {
                        return this.each(function() {
                            var s = e(this).data("bs.modal"),
                                r = a({}, Rt, e(this).data(), "object" === n(i) && i ? i : {});
                            if (s || (s = new t(this, r), e(this).data("bs.modal", s)), "string" == typeof i) {
                                if (void 0 === s[i])
                                    throw new TypeError('No method named "' + i + '"');
                                s[i](o)
                            } else
                                r.show && s.show(o)
                        })
                    }, s(t, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.3.1"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return Rt
                        }
                    }]), t
                }();
            e(document).on(Ht.CLICK_DATA_API, qt.DATA_TOGGLE, function(t) {
                var n,
                    i = this,
                    o = h.getSelectorFromElement(this);
                o && (n = document.querySelector(o));
                var s = e(n).data("bs.modal") ? "toggle" : a({}, e(n).data(), e(this).data());
                "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
                var r = e(n).one(Ht.SHOW, function(t) {
                    t.isDefaultPrevented() || r.one(Ht.HIDDEN, function() {
                        e(i).is(":visible") && i.focus()
                    })
                });
                Vt._jQueryInterface.call(e(n), s, this)
            }),
            e.fn.modal = Vt._jQueryInterface,
            e.fn.modal.Constructor = Vt,
            e.fn.modal.noConflict = function() {
                return e.fn.modal = Pt, Vt._jQueryInterface
            };
            var Qt = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
                Bt = {
                    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                    a: ["target", "href", "title", "rel"],
                    area: [],
                    b: [],
                    br: [],
                    col: [],
                    code: [],
                    div: [],
                    em: [],
                    hr: [],
                    h1: [],
                    h2: [],
                    h3: [],
                    h4: [],
                    h5: [],
                    h6: [],
                    i: [],
                    img: ["src", "alt", "title", "width", "height"],
                    li: [],
                    ol: [],
                    p: [],
                    pre: [],
                    s: [],
                    small: [],
                    span: [],
                    sub: [],
                    sup: [],
                    strong: [],
                    u: [],
                    ul: []
                },
                Yt = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
                Gt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
            function Xt(t, e, n) {
                if (0 === t.length)
                    return t;
                if (n && "function" == typeof n)
                    return n(t);
                for (var i = (new window.DOMParser).parseFromString(t, "text/html"), o = Object.keys(e), s = [].slice.call(i.body.querySelectorAll("*")), r = function(t, n) {
                        var i = s[t],
                            r = i.nodeName.toLowerCase();
                        if (-1 === o.indexOf(i.nodeName.toLowerCase()))
                            return i.parentNode.removeChild(i), "continue";
                        var a = [].slice.call(i.attributes),
                            l = [].concat(e["*"] || [], e[r] || []);
                        a.forEach(function(t) {
                            (function(t, e) {
                                var n = t.nodeName.toLowerCase();
                                if (-1 !== e.indexOf(n))
                                    return -1 === Qt.indexOf(n) || Boolean(t.nodeValue.match(Yt) || t.nodeValue.match(Gt));
                                for (var i = e.filter(function(t) {
                                        return t instanceof RegExp
                                    }), o = 0, s = i.length; o < s; o++)
                                    if (n.match(i[o]))
                                        return !0;
                                return !1
                            })(t, l) || i.removeAttribute(t.nodeName)
                        })
                    }, a = 0, l = s.length; a < l; a++)
                    r(a);
                return i.body.innerHTML
            }
            var zt = "tooltip",
                $t = e.fn.tooltip,
                Jt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
                Zt = ["sanitize", "whiteList", "sanitizeFn"],
                te = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(number|string|function)",
                    container: "(string|element|boolean)",
                    fallbackPlacement: "(string|array)",
                    boundary: "(string|element)",
                    sanitize: "boolean",
                    sanitizeFn: "(null|function)",
                    whiteList: "object"
                },
                ee = {
                    AUTO: "auto",
                    TOP: "top",
                    RIGHT: "right",
                    BOTTOM: "bottom",
                    LEFT: "left"
                },
                ne = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: 0,
                    container: !1,
                    fallbackPlacement: "flip",
                    boundary: "scrollParent",
                    sanitize: !0,
                    sanitizeFn: null,
                    whiteList: Bt
                },
                ie = "show",
                oe = "out",
                se = {
                    HIDE: "hide.bs.tooltip",
                    HIDDEN: "hidden.bs.tooltip",
                    SHOW: "show.bs.tooltip",
                    SHOWN: "shown.bs.tooltip",
                    INSERTED: "inserted.bs.tooltip",
                    CLICK: "click.bs.tooltip",
                    FOCUSIN: "focusin.bs.tooltip",
                    FOCUSOUT: "focusout.bs.tooltip",
                    MOUSEENTER: "mouseenter.bs.tooltip",
                    MOUSELEAVE: "mouseleave.bs.tooltip"
                },
                re = "fade",
                ae = "show",
                le = ".tooltip-inner",
                ce = ".arrow",
                he = "hover",
                ue = "focus",
                fe = "click",
                de = "manual",
                ge = function() {
                    function t(t, e) {
                        if (void 0 === i)
                            throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                        this._isEnabled = !0,
                        this._timeout = 0,
                        this._hoverState = "",
                        this._activeTrigger = {},
                        this._popper = null,
                        this.element = t,
                        this.config = this._getConfig(e),
                        this.tip = null,
                        this._setListeners()
                    }
                    var o = t.prototype;
                    return o.enable = function() {
                        this._isEnabled = !0
                    }, o.disable = function() {
                        this._isEnabled = !1
                    }, o.toggleEnabled = function() {
                        this._isEnabled = !this._isEnabled
                    }, o.toggle = function(t) {
                        if (this._isEnabled)
                            if (t) {
                                var n = this.constructor.DATA_KEY,
                                    i = e(t.currentTarget).data(n);
                                i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)),
                                i._activeTrigger.click = !i._activeTrigger.click,
                                i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                            } else {
                                if (e(this.getTipElement()).hasClass(ae))
                                    return void this._leave(null, this);
                                this._enter(null, this)
                            }
                    }, o.dispose = function() {
                        clearTimeout(this._timeout),
                        e.removeData(this.element, this.constructor.DATA_KEY),
                        e(this.element).off(this.constructor.EVENT_KEY),
                        e(this.element).closest(".modal").off("hide.bs.modal"),
                        this.tip && e(this.tip).remove(),
                        this._isEnabled = null,
                        this._timeout = null,
                        this._hoverState = null,
                        this._activeTrigger = null,
                        null !== this._popper && this._popper.destroy(),
                        this._popper = null,
                        this.element = null,
                        this.config = null,
                        this.tip = null
                    }, o.show = function() {
                        var t = this;
                        if ("none" === e(this.element).css("display"))
                            throw new Error("Please use show on visible elements");
                        var n = e.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            e(this.element).trigger(n);
                            var o = h.findShadowRoot(this.element),
                                s = e.contains(null !== o ? o : this.element.ownerDocument.documentElement, this.element);
                            if (n.isDefaultPrevented() || !s)
                                return;
                            var r = this.getTipElement(),
                                a = h.getUID(this.constructor.NAME);
                            r.setAttribute("id", a),
                            this.element.setAttribute("aria-describedby", a),
                            this.setContent(),
                            this.config.animation && e(r).addClass(re);
                            var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                                c = this._getAttachment(l);
                            this.addAttachmentClass(c);
                            var u = this._getContainer();
                            e(r).data(this.constructor.DATA_KEY, this),
                            e.contains(this.element.ownerDocument.documentElement, this.tip) || e(r).appendTo(u),
                            e(this.element).trigger(this.constructor.Event.INSERTED),
                            this._popper = new i(this.element, r, {
                                placement: c,
                                modifiers: {
                                    offset: this._getOffset(),
                                    flip: {
                                        behavior: this.config.fallbackPlacement
                                    },
                                    arrow: {
                                        element: ce
                                    },
                                    preventOverflow: {
                                        boundariesElement: this.config.boundary
                                    }
                                },
                                onCreate: function(e) {
                                    e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                                },
                                onUpdate: function(e) {
                                    return t._handlePopperPlacementChange(e)
                                }
                            }),
                            e(r).addClass(ae),
                            "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);
                            var f = function() {
                                t.config.animation && t._fixTransition();
                                var n = t._hoverState;
                                t._hoverState = null,
                                e(t.element).trigger(t.constructor.Event.SHOWN),
                                n === oe && t._leave(null, t)
                            };
                            if (e(this.tip).hasClass(re)) {
                                var d = h.getTransitionDurationFromElement(this.tip);
                                e(this.tip).one(h.TRANSITION_END, f).emulateTransitionEnd(d)
                            } else
                                f()
                        }
                    }, o.hide = function(t) {
                        var n = this,
                            i = this.getTipElement(),
                            o = e.Event(this.constructor.Event.HIDE),
                            s = function() {
                                n._hoverState !== ie && i.parentNode && i.parentNode.removeChild(i),
                                n._cleanTipClass(),
                                n.element.removeAttribute("aria-describedby"),
                                e(n.element).trigger(n.constructor.Event.HIDDEN),
                                null !== n._popper && n._popper.destroy(),
                                t && t()
                            };
                        if (e(this.element).trigger(o), !o.isDefaultPrevented()) {
                            if (e(i).removeClass(ae), "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), this._activeTrigger[fe] = !1, this._activeTrigger[ue] = !1, this._activeTrigger[he] = !1, e(this.tip).hasClass(re)) {
                                var r = h.getTransitionDurationFromElement(i);
                                e(i).one(h.TRANSITION_END, s).emulateTransitionEnd(r)
                            } else
                                s();
                            this._hoverState = ""
                        }
                    }, o.update = function() {
                        null !== this._popper && this._popper.scheduleUpdate()
                    }, o.isWithContent = function() {
                        return Boolean(this.getTitle())
                    }, o.addAttachmentClass = function(t) {
                        e(this.getTipElement()).addClass("bs-tooltip-" + t)
                    }, o.getTipElement = function() {
                        return this.tip = this.tip || e(this.config.template)[0], this.tip
                    }, o.setContent = function() {
                        var t = this.getTipElement();
                        this.setElementContent(e(t.querySelectorAll(le)), this.getTitle()),
                        e(t).removeClass(re + " " + ae)
                    }, o.setElementContent = function(t, i) {
                        "object" !== n(i) || !i.nodeType && !i.jquery ? this.config.html ? (this.config.sanitize && (i = Xt(i, this.config.whiteList, this.config.sanitizeFn)), t.html(i)) : t.text(i) : this.config.html ? e(i).parent().is(t) || t.empty().append(i) : t.text(e(i).text())
                    }, o.getTitle = function() {
                        var t = this.element.getAttribute("data-original-title");
                        return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
                    }, o._getOffset = function() {
                        var t = this,
                            e = {};
                        return "function" == typeof this.config.offset ? e.fn = function(e) {
                            return e.offsets = a({}, e.offsets, t.config.offset(e.offsets, t.element) || {}), e
                        } : e.offset = this.config.offset, e
                    }, o._getContainer = function() {
                        return !1 === this.config.container ? document.body : h.isElement(this.config.container) ? e(this.config.container) : e(document).find(this.config.container)
                    }, o._getAttachment = function(t) {
                        return ee[t.toUpperCase()]
                    }, o._setListeners = function() {
                        var t = this;
                        this.config.trigger.split(" ").forEach(function(n) {
                            if ("click" === n)
                                e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function(e) {
                                    return t.toggle(e)
                                });
                            else if (n !== de) {
                                var i = n === he ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                    o = n === he ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                                e(t.element).on(i, t.config.selector, function(e) {
                                    return t._enter(e)
                                }).on(o, t.config.selector, function(e) {
                                    return t._leave(e)
                                })
                            }
                        }),
                        e(this.element).closest(".modal").on("hide.bs.modal", function() {
                            t.element && t.hide()
                        }),
                        this.config.selector ? this.config = a({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                    }, o._fixTitle = function() {
                        var t = n(this.element.getAttribute("data-original-title"));
                        (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                    }, o._enter = function(t, n) {
                        var i = this.constructor.DATA_KEY;
                        (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)),
                        t && (n._activeTrigger["focusin" === t.type ? ue : he] = !0),
                        e(n.getTipElement()).hasClass(ae) || n._hoverState === ie ? n._hoverState = ie : (clearTimeout(n._timeout), n._hoverState = ie, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function() {
                            n._hoverState === ie && n.show()
                        }, n.config.delay.show) : n.show())
                    }, o._leave = function(t, n) {
                        var i = this.constructor.DATA_KEY;
                        (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)),
                        t && (n._activeTrigger["focusout" === t.type ? ue : he] = !1),
                        n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = oe, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function() {
                            n._hoverState === oe && n.hide()
                        }, n.config.delay.hide) : n.hide())
                    }, o._isWithActiveTrigger = function() {
                        for (var t in this._activeTrigger)
                            if (this._activeTrigger[t])
                                return !0;
                        return !1
                    }, o._getConfig = function(t) {
                        var i = e(this.element).data();
                        return Object.keys(i).forEach(function(t) {
                            -1 !== Zt.indexOf(t) && delete i[t]
                        }), "number" == typeof (t = a({}, this.constructor.Default, i, "object" === n(t) && t ? t : {})).delay && (t.delay = {
                            show: t.delay,
                            hide: t.delay
                        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), h.typeCheckConfig(zt, t, this.constructor.DefaultType), t.sanitize && (t.template = Xt(t.template, t.whiteList, t.sanitizeFn)), t
                    }, o._getDelegateConfig = function() {
                        var t = {};
                        if (this.config)
                            for (var e in this.config)
                                this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                        return t
                    }, o._cleanTipClass = function() {
                        var t = e(this.getTipElement()),
                            n = t.attr("class").match(Jt);
                        null !== n && n.length && t.removeClass(n.join(""))
                    }, o._handlePopperPlacementChange = function(t) {
                        var e = t.instance;
                        this.tip = e.popper,
                        this._cleanTipClass(),
                        this.addAttachmentClass(this._getAttachment(t.placement))
                    }, o._fixTransition = function() {
                        var t = this.getTipElement(),
                            n = this.config.animation;
                        null === t.getAttribute("x-placement") && (e(t).removeClass(re), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                    }, t._jQueryInterface = function(i) {
                        return this.each(function() {
                            var o = e(this).data("bs.tooltip"),
                                s = "object" === n(i) && i;
                            if ((o || !/dispose|hide/.test(i)) && (o || (o = new t(this, s), e(this).data("bs.tooltip", o)), "string" == typeof i)) {
                                if (void 0 === o[i])
                                    throw new TypeError('No method named "' + i + '"');
                                o[i]()
                            }
                        })
                    }, s(t, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.3.1"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return ne
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return zt
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return "bs.tooltip"
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return se
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return ".bs.tooltip"
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return te
                        }
                    }]), t
                }();
            e.fn.tooltip = ge._jQueryInterface,
            e.fn.tooltip.Constructor = ge,
            e.fn.tooltip.noConflict = function() {
                return e.fn.tooltip = $t, ge._jQueryInterface
            };
            var _e = "popover",
                me = e.fn.popover,
                pe = new RegExp("(^|\\s)bs-popover\\S+", "g"),
                ve = a({}, ge.Default, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                }),
                Ee = a({}, ge.DefaultType, {
                    content: "(string|element|function)"
                }),
                be = "fade",
                ye = "show",
                Te = ".popover-header",
                Ce = ".popover-body",
                Se = {
                    HIDE: "hide.bs.popover",
                    HIDDEN: "hidden.bs.popover",
                    SHOW: "show.bs.popover",
                    SHOWN: "shown.bs.popover",
                    INSERTED: "inserted.bs.popover",
                    CLICK: "click.bs.popover",
                    FOCUSIN: "focusin.bs.popover",
                    FOCUSOUT: "focusout.bs.popover",
                    MOUSEENTER: "mouseenter.bs.popover",
                    MOUSELEAVE: "mouseleave.bs.popover"
                },
                Ie = function(t) {
                    var i,
                        o;
                    function r() {
                        return t.apply(this, arguments) || this
                    }
                    o = t,
                    (i = r).prototype = Object.create(o.prototype),
                    i.prototype.constructor = i,
                    i.__proto__ = o;
                    var a = r.prototype;
                    return a.isWithContent = function() {
                        return this.getTitle() || this._getContent()
                    }, a.addAttachmentClass = function(t) {
                        e(this.getTipElement()).addClass("bs-popover-" + t)
                    }, a.getTipElement = function() {
                        return this.tip = this.tip || e(this.config.template)[0], this.tip
                    }, a.setContent = function() {
                        var t = e(this.getTipElement());
                        this.setElementContent(t.find(Te), this.getTitle());
                        var n = this._getContent();
                        "function" == typeof n && (n = n.call(this.element)),
                        this.setElementContent(t.find(Ce), n),
                        t.removeClass(be + " " + ye)
                    }, a._getContent = function() {
                        return this.element.getAttribute("data-content") || this.config.content
                    }, a._cleanTipClass = function() {
                        var t = e(this.getTipElement()),
                            n = t.attr("class").match(pe);
                        null !== n && n.length > 0 && t.removeClass(n.join(""))
                    }, r._jQueryInterface = function(t) {
                        return this.each(function() {
                            var i = e(this).data("bs.popover"),
                                o = "object" === n(t) ? t : null;
                            if ((i || !/dispose|hide/.test(t)) && (i || (i = new r(this, o), e(this).data("bs.popover", i)), "string" == typeof t)) {
                                if (void 0 === i[t])
                                    throw new TypeError('No method named "' + t + '"');
                                i[t]()
                            }
                        })
                    }, s(r, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.3.1"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return ve
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return _e
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return "bs.popover"
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return Se
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return ".bs.popover"
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return Ee
                        }
                    }]), r
                }(ge);
            e.fn.popover = Ie._jQueryInterface,
            e.fn.popover.Constructor = Ie,
            e.fn.popover.noConflict = function() {
                return e.fn.popover = me, Ie._jQueryInterface
            };
            var De = "scrollspy",
                Ae = e.fn[De],
                we = {
                    offset: 10,
                    method: "auto",
                    target: ""
                },
                Ne = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                },
                Oe = {
                    ACTIVATE: "activate.bs.scrollspy",
                    SCROLL: "scroll.bs.scrollspy",
                    LOAD_DATA_API: "load.bs.scrollspy.data-api"
                },
                ke = "dropdown-item",
                Le = "active",
                Pe = {
                    DATA_SPY: '[data-spy="scroll"]',
                    ACTIVE: ".active",
                    NAV_LIST_GROUP: ".nav, .list-group",
                    NAV_LINKS: ".nav-link",
                    NAV_ITEMS: ".nav-item",
                    LIST_ITEMS: ".list-group-item",
                    DROPDOWN: ".dropdown",
                    DROPDOWN_ITEMS: ".dropdown-item",
                    DROPDOWN_TOGGLE: ".dropdown-toggle"
                },
                Re = "offset",
                je = "position",
                He = function() {
                    function t(t, n) {
                        var i = this;
                        this._element = t,
                        this._scrollElement = "BODY" === t.tagName ? window : t,
                        this._config = this._getConfig(n),
                        this._selector = this._config.target + " " + Pe.NAV_LINKS + "," + this._config.target + " " + Pe.LIST_ITEMS + "," + this._config.target + " " + Pe.DROPDOWN_ITEMS,
                        this._offsets = [],
                        this._targets = [],
                        this._activeTarget = null,
                        this._scrollHeight = 0,
                        e(this._scrollElement).on(Oe.SCROLL, function(t) {
                            return i._process(t)
                        }),
                        this.refresh(),
                        this._process()
                    }
                    var i = t.prototype;
                    return i.refresh = function() {
                        var t = this,
                            n = this._scrollElement === this._scrollElement.window ? Re : je,
                            i = "auto" === this._config.method ? n : this._config.method,
                            o = i === je ? this._getScrollTop() : 0;
                        this._offsets = [],
                        this._targets = [],
                        this._scrollHeight = this._getScrollHeight(),
                        [].slice.call(document.querySelectorAll(this._selector)).map(function(t) {
                            var n,
                                s = h.getSelectorFromElement(t);
                            if (s && (n = document.querySelector(s)), n) {
                                var r = n.getBoundingClientRect();
                                if (r.width || r.height)
                                    return [e(n)[i]().top + o, s]
                            }
                            return null
                        }).filter(function(t) {
                            return t
                        }).sort(function(t, e) {
                            return t[0] - e[0]
                        }).forEach(function(e) {
                            t._offsets.push(e[0]),
                            t._targets.push(e[1])
                        })
                    }, i.dispose = function() {
                        e.removeData(this._element, "bs.scrollspy"),
                        e(this._scrollElement).off(".bs.scrollspy"),
                        this._element = null,
                        this._scrollElement = null,
                        this._config = null,
                        this._selector = null,
                        this._offsets = null,
                        this._targets = null,
                        this._activeTarget = null,
                        this._scrollHeight = null
                    }, i._getConfig = function(t) {
                        if ("string" != typeof (t = a({}, we, "object" === n(t) && t ? t : {})).target) {
                            var i = e(t.target).attr("id");
                            i || (i = h.getUID(De), e(t.target).attr("id", i)),
                            t.target = "#" + i
                        }
                        return h.typeCheckConfig(De, t, Ne), t
                    }, i._getScrollTop = function() {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                    }, i._getScrollHeight = function() {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }, i._getOffsetHeight = function() {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                    }, i._process = function() {
                        var t = this._getScrollTop() + this._config.offset,
                            e = this._getScrollHeight(),
                            n = this._config.offset + e - this._getOffsetHeight();
                        if (this._scrollHeight !== e && this.refresh(), t >= n) {
                            var i = this._targets[this._targets.length - 1];
                            this._activeTarget !== i && this._activate(i)
                        } else {
                            if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
                                return this._activeTarget = null, void this._clear();
                            for (var o = this._offsets.length; o--;) {
                                this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                            }
                        }
                    }, i._activate = function(t) {
                        this._activeTarget = t,
                        this._clear();
                        var n = this._selector.split(",").map(function(e) {
                                return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                            }),
                            i = e([].slice.call(document.querySelectorAll(n.join(","))));
                        i.hasClass(ke) ? (i.closest(Pe.DROPDOWN).find(Pe.DROPDOWN_TOGGLE).addClass(Le), i.addClass(Le)) : (i.addClass(Le), i.parents(Pe.NAV_LIST_GROUP).prev(Pe.NAV_LINKS + ", " + Pe.LIST_ITEMS).addClass(Le), i.parents(Pe.NAV_LIST_GROUP).prev(Pe.NAV_ITEMS).children(Pe.NAV_LINKS).addClass(Le)),
                        e(this._scrollElement).trigger(Oe.ACTIVATE, {
                            relatedTarget: t
                        })
                    }, i._clear = function() {
                        [].slice.call(document.querySelectorAll(this._selector)).filter(function(t) {
                            return t.classList.contains(Le)
                        }).forEach(function(t) {
                            return t.classList.remove(Le)
                        })
                    }, t._jQueryInterface = function(i) {
                        return this.each(function() {
                            var o = e(this).data("bs.scrollspy"),
                                s = "object" === n(i) && i;
                            if (o || (o = new t(this, s), e(this).data("bs.scrollspy", o)), "string" == typeof i) {
                                if (void 0 === o[i])
                                    throw new TypeError('No method named "' + i + '"');
                                o[i]()
                            }
                        })
                    }, s(t, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.3.1"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return we
                        }
                    }]), t
                }();
            e(window).on(Oe.LOAD_DATA_API, function() {
                for (var t = [].slice.call(document.querySelectorAll(Pe.DATA_SPY)), n = t.length; n--;) {
                    var i = e(t[n]);
                    He._jQueryInterface.call(i, i.data())
                }
            }),
            e.fn[De] = He._jQueryInterface,
            e.fn[De].Constructor = He,
            e.fn[De].noConflict = function() {
                return e.fn[De] = Ae, He._jQueryInterface
            };
            var Me = e.fn.tab,
                We = {
                    HIDE: "hide.bs.tab",
                    HIDDEN: "hidden.bs.tab",
                    SHOW: "show.bs.tab",
                    SHOWN: "shown.bs.tab",
                    CLICK_DATA_API: "click.bs.tab.data-api"
                },
                Fe = "dropdown-menu",
                Ue = "active",
                xe = "disabled",
                Ke = "fade",
                qe = "show",
                Ve = ".dropdown",
                Qe = ".nav, .list-group",
                Be = ".active",
                Ye = "> li > .active",
                Ge = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
                Xe = ".dropdown-toggle",
                ze = "> .dropdown-menu .active",
                $e = function() {
                    function t(t) {
                        this._element = t
                    }
                    var n = t.prototype;
                    return n.show = function() {
                        var t = this;
                        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(Ue) || e(this._element).hasClass(xe))) {
                            var n,
                                i,
                                o = e(this._element).closest(Qe)[0],
                                s = h.getSelectorFromElement(this._element);
                            if (o) {
                                var r = "UL" === o.nodeName || "OL" === o.nodeName ? Ye : Be;
                                i = (i = e.makeArray(e(o).find(r)))[i.length - 1]
                            }
                            var a = e.Event(We.HIDE, {
                                    relatedTarget: this._element
                                }),
                                l = e.Event(We.SHOW, {
                                    relatedTarget: i
                                });
                            if (i && e(i).trigger(a), e(this._element).trigger(l), !l.isDefaultPrevented() && !a.isDefaultPrevented()) {
                                s && (n = document.querySelector(s)),
                                this._activate(this._element, o);
                                var c = function() {
                                    var n = e.Event(We.HIDDEN, {
                                            relatedTarget: t._element
                                        }),
                                        o = e.Event(We.SHOWN, {
                                            relatedTarget: i
                                        });
                                    e(i).trigger(n),
                                    e(t._element).trigger(o)
                                };
                                n ? this._activate(n, n.parentNode, c) : c()
                            }
                        }
                    }, n.dispose = function() {
                        e.removeData(this._element, "bs.tab"),
                        this._element = null
                    }, n._activate = function(t, n, i) {
                        var o = this,
                            s = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? e(n).children(Be) : e(n).find(Ye))[0],
                            r = i && s && e(s).hasClass(Ke),
                            a = function() {
                                return o._transitionComplete(t, s, i)
                            };
                        if (s && r) {
                            var l = h.getTransitionDurationFromElement(s);
                            e(s).removeClass(qe).one(h.TRANSITION_END, a).emulateTransitionEnd(l)
                        } else
                            a()
                    }, n._transitionComplete = function(t, n, i) {
                        if (n) {
                            e(n).removeClass(Ue);
                            var o = e(n.parentNode).find(ze)[0];
                            o && e(o).removeClass(Ue),
                            "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                        }
                        if (e(t).addClass(Ue), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), h.reflow(t), t.classList.contains(Ke) && t.classList.add(qe), t.parentNode && e(t.parentNode).hasClass(Fe)) {
                            var s = e(t).closest(Ve)[0];
                            if (s) {
                                var r = [].slice.call(s.querySelectorAll(Xe));
                                e(r).addClass(Ue)
                            }
                            t.setAttribute("aria-expanded", !0)
                        }
                        i && i()
                    }, t._jQueryInterface = function(n) {
                        return this.each(function() {
                            var i = e(this),
                                o = i.data("bs.tab");
                            if (o || (o = new t(this), i.data("bs.tab", o)), "string" == typeof n) {
                                if (void 0 === o[n])
                                    throw new TypeError('No method named "' + n + '"');
                                o[n]()
                            }
                        })
                    }, s(t, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.3.1"
                        }
                    }]), t
                }();
            e(document).on(We.CLICK_DATA_API, Ge, function(t) {
                t.preventDefault(),
                $e._jQueryInterface.call(e(this), "show")
            }),
            e.fn.tab = $e._jQueryInterface,
            e.fn.tab.Constructor = $e,
            e.fn.tab.noConflict = function() {
                return e.fn.tab = Me, $e._jQueryInterface
            };
            var Je = e.fn.toast,
                Ze = {
                    CLICK_DISMISS: "click.dismiss.bs.toast",
                    HIDE: "hide.bs.toast",
                    HIDDEN: "hidden.bs.toast",
                    SHOW: "show.bs.toast",
                    SHOWN: "shown.bs.toast"
                },
                tn = "fade",
                en = "hide",
                nn = "show",
                on = "showing",
                sn = {
                    animation: "boolean",
                    autohide: "boolean",
                    delay: "number"
                },
                rn = {
                    animation: !0,
                    autohide: !0,
                    delay: 500
                },
                an = '[data-dismiss="toast"]',
                ln = function() {
                    function t(t, e) {
                        this._element = t,
                        this._config = this._getConfig(e),
                        this._timeout = null,
                        this._setListeners()
                    }
                    var i = t.prototype;
                    return i.show = function() {
                        var t = this;
                        e(this._element).trigger(Ze.SHOW),
                        this._config.animation && this._element.classList.add(tn);
                        var n = function() {
                            t._element.classList.remove(on),
                            t._element.classList.add(nn),
                            e(t._element).trigger(Ze.SHOWN),
                            t._config.autohide && t.hide()
                        };
                        if (this._element.classList.remove(en), this._element.classList.add(on), this._config.animation) {
                            var i = h.getTransitionDurationFromElement(this._element);
                            e(this._element).one(h.TRANSITION_END, n).emulateTransitionEnd(i)
                        } else
                            n()
                    }, i.hide = function(t) {
                        var n = this;
                        this._element.classList.contains(nn) && (e(this._element).trigger(Ze.HIDE), t ? this._close() : this._timeout = setTimeout(function() {
                            n._close()
                        }, this._config.delay))
                    }, i.dispose = function() {
                        clearTimeout(this._timeout),
                        this._timeout = null,
                        this._element.classList.contains(nn) && this._element.classList.remove(nn),
                        e(this._element).off(Ze.CLICK_DISMISS),
                        e.removeData(this._element, "bs.toast"),
                        this._element = null,
                        this._config = null
                    }, i._getConfig = function(t) {
                        return t = a({}, rn, e(this._element).data(), "object" === n(t) && t ? t : {}), h.typeCheckConfig("toast", t, this.constructor.DefaultType), t
                    }, i._setListeners = function() {
                        var t = this;
                        e(this._element).on(Ze.CLICK_DISMISS, an, function() {
                            return t.hide(!0)
                        })
                    }, i._close = function() {
                        var t = this,
                            n = function() {
                                t._element.classList.add(en),
                                e(t._element).trigger(Ze.HIDDEN)
                            };
                        if (this._element.classList.remove(nn), this._config.animation) {
                            var i = h.getTransitionDurationFromElement(this._element);
                            e(this._element).one(h.TRANSITION_END, n).emulateTransitionEnd(i)
                        } else
                            n()
                    }, t._jQueryInterface = function(i) {
                        return this.each(function() {
                            var o = e(this),
                                s = o.data("bs.toast"),
                                r = "object" === n(i) && i;
                            if (s || (s = new t(this, r), o.data("bs.toast", s)), "string" == typeof i) {
                                if (void 0 === s[i])
                                    throw new TypeError('No method named "' + i + '"');
                                s[i](this)
                            }
                        })
                    }, s(t, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.3.1"
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return sn
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return rn
                        }
                    }]), t
                }();
            e.fn.toast = ln._jQueryInterface,
            e.fn.toast.Constructor = ln,
            e.fn.toast.noConflict = function() {
                return e.fn.toast = Je, ln._jQueryInterface
            },
            function() {
                if (void 0 === e)
                    throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                var t = e.fn.jquery.split(" ")[0].split(".");
                if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4)
                    throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
            }(),
            t.Util = h,
            t.Alert = m,
            t.Button = A,
            t.Carousel = G,
            t.Collapse = at,
            t.Dropdown = Lt,
            t.Modal = Vt,
            t.Popover = Ie,
            t.Scrollspy = He,
            t.Tab = $e,
            t.Toast = ln,
            t.Tooltip = ge,
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        });
    }, {
        "jquery": "juYr",
        "popper.js": "lo/u"
    }],
    "GUIk": [function(require, module, exports) {
        var define;
        var t;
        !function(e, n) {
            "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof t && t.amd ? t([], n) : "object" == typeof exports ? exports.clipboard = n() : e.clipboard = n()
        }("undefined" != typeof self ? self : this, function() {
            return e = [function(t, e, n) {
                "use strict";
                var r = this && this.__awaiter || function(t, e, n, r) {
                        return new (n || (n = Promise))(function(o, i) {
                            function a(t) {
                                try {
                                    c(r.next(t))
                                } catch (e) {
                                    i(e)
                                }
                            }
                            function u(t) {
                                try {
                                    c(r.throw(t))
                                } catch (e) {
                                    i(e)
                                }
                            }
                            function c(t) {
                                t.done ? o(t.value) : new n(function(e) {
                                    e(t.value)
                                }).then(a, u)
                            }
                            c((r = r.apply(t, e || [])).next())
                        })
                    },
                    o = this && this.__generator || function(t, e) {
                        var n,
                            r,
                            o,
                            i,
                            a = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0])
                                        throw o[1];
                                    return o[1]
                                },
                                trys: [],
                                ops: []
                            };
                        return i = {
                            next: u(0),
                            throw: u(1),
                            return: u(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;
                        function u(i) {
                            return function(u) {
                                return function(i) {
                                    if (n)
                                        throw new TypeError("Generator is already executing.");
                                    for (; a;)
                                        try {
                                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)
                                                return o;
                                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                o = i;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++,
                                                r = i[1],
                                                i = [0];
                                                continue;
                                            case 7:
                                                i = a.ops.pop(),
                                                a.trys.pop();
                                                continue;
                                            default:
                                                if (!(o = 0 < (o = a.trys).length && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                    a.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && a.label < o[1]) {
                                                    a.label = o[1],
                                                    o = i;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2],
                                                    a.ops.push(i);
                                                    break
                                                }
                                                o[2] && a.ops.pop(),
                                                a.trys.pop();
                                                continue
                                            }
                                            i = e.call(t, a)
                                        } catch (u) {
                                            i = [6, u],
                                            r = 0
                                        } finally {
                                            n = o = 0
                                        }
                                    if (5 & i[0])
                                        throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, u])
                            }
                        }
                    };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var i = n(1);
                e.DT = i.DT;
                var a = function(t) {},
                    u = !0,
                    c = function() {
                        (console.warn || console.log).apply(console, arguments)
                    }.bind("[clipboard-polyfill]"),
                    s = "text/plain";
                function l(t) {
                    a = t
                }
                function d() {
                    u = !1,
                    i.suppressDTWarnings()
                }
                function f(t) {
                    return r(this, void 0, void 0, function() {
                        var e;
                        return o(this, function(n) {
                            if (u && !t.getData(s) && c("clipboard.write() was called without a `text/plain` data type. On some platforms, this may result in an empty clipboard. Call clipboard.suppressWarnings() to suppress this warning."), O()) {
                                if (function(t) {
                                    var e = t.getData(s);
                                    if (void 0 === e)
                                        throw "No `text/plain` value was specified.";
                                    return window.clipboardData.setData("Text", e)
                                }(t))
                                    return [2];
                                throw "Copying failed, possibly because the user rejected it."
                            }
                            if (w(t))
                                return a("regular execCopy worked"), [2];
                            if (-1 < navigator.userAgent.indexOf("Edge"))
                                return a('UA "Edge" => assuming success'), [2];
                            if (x(document.body, t))
                                return a("copyUsingTempSelection worked"), [2];
                            if (function(t) {
                                var e = document.createElement("div");
                                e.setAttribute("style", "-webkit-user-select: text !important"),
                                e.textContent = "temporary element",
                                document.body.appendChild(e);
                                var n = x(e, t);
                                return document.body.removeChild(e), n
                            }(t))
                                return a("copyUsingTempElem worked"), [2];
                            if (void 0 !== (e = t.getData(s)) && function(t) {
                                a("copyTextUsingDOM");
                                var e = document.createElement("div");
                                e.setAttribute("style", "-webkit-user-select: text !important");
                                var n = e;
                                e.attachShadow && (a("Using shadow DOM."), n = e.attachShadow({
                                    mode: "open"
                                }));
                                var r = document.createElement("span");
                                r.innerText = t,
                                n.appendChild(r),
                                document.body.appendChild(e),
                                D(r);
                                var o = document.execCommand("copy");
                                return T(), document.body.removeChild(e), o
                            }(e))
                                return a("copyTextUsingDOM worked"), [2];
                            throw "Copy command failed."
                        })
                    })
                }
                function p(t) {
                    return r(this, void 0, void 0, function() {
                        return o(this, function(e) {
                            return navigator.clipboard && navigator.clipboard.writeText ? (a("Using `navigator.clipboard.writeText()`."), [2, navigator.clipboard.writeText(t)]) : [2, f(C(t))]
                        })
                    })
                }
                function v() {
                    return r(this, void 0, void 0, function() {
                        var t;
                        return o(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return t = C, [4, b()];
                            case 1:
                                return [2, t.apply(void 0, [e.sent()])]
                            }
                        })
                    })
                }
                function b() {
                    return r(this, void 0, void 0, function() {
                        return o(this, function(t) {
                            if (navigator.clipboard && navigator.clipboard.readText)
                                return a("Using `navigator.clipboard.readText()`."), [2, navigator.clipboard.readText()];
                            if (O())
                                return a("Reading text using IE strategy."), [2, function() {
                                    return r(this, void 0, void 0, function() {
                                        var t;
                                        return o(this, function(e) {
                                            if ("" === (t = window.clipboardData.getData("Text")))
                                                throw "Empty clipboard or could not read plain text from clipboard";
                                            return [2, t]
                                        })
                                    })
                                }()];
                            throw "Read is not supported in your browser."
                        })
                    })
                }
                e.setDebugLog = l,
                e.suppressWarnings = d,
                e.write = f,
                e.writeText = p,
                e.read = v,
                e.readText = b;
                var h = !1;
                function y() {
                    h || (u && c('The deprecated default object of `clipboard-polyfill` was called. Please switch to `import * as clipboard from "clipboard-polyfill"` and see https://github.com/lgarron/clipboard-polyfill/issues/101 for more info.'), h = !0)
                }
                var m = function() {
                    function t() {}
                    return t.setDebugLog = function(t) {
                        return y(), l(t)
                    }, t.suppressWarnings = function() {
                        return y(), d()
                    }, t.write = function(t) {
                        return r(this, void 0, void 0, function() {
                            return o(this, function(e) {
                                return y(), [2, f(t)]
                            })
                        })
                    }, t.writeText = function(t) {
                        return r(this, void 0, void 0, function() {
                            return o(this, function(e) {
                                return y(), [2, p(t)]
                            })
                        })
                    }, t.read = function() {
                        return r(this, void 0, void 0, function() {
                            return o(this, function(t) {
                                return y(), [2, v()]
                            })
                        })
                    }, t.readText = function() {
                        return r(this, void 0, void 0, function() {
                            return o(this, function(t) {
                                return y(), [2, b()]
                            })
                        })
                    }, t.DT = i.DT, t
                }();
                e.default = m;
                var g = function() {
                    this.success = !1
                };
                function w(t) {
                    var e = new g,
                        n = function(t, e, n) {
                            a("listener called"),
                            t.success = !0,
                            e.forEach(function(e, r) {
                                var o = n.clipboardData;
                                o.setData(r, e),
                                r === s && o.getData(r) != e && (a("setting text/plain failed"), t.success = !1)
                            }),
                            n.preventDefault()
                        }.bind(this, e, t);
                    document.addEventListener("copy", n);
                    try {
                        document.execCommand("copy")
                    } finally {
                        document.removeEventListener("copy", n)
                    }
                    return e.success
                }
                function x(t, e) {
                    D(t);
                    var n = w(e);
                    return T(), n
                }
                function D(t) {
                    var e = document.getSelection();
                    if (e) {
                        var n = document.createRange();
                        n.selectNodeContents(t),
                        e.removeAllRanges(),
                        e.addRange(n)
                    }
                }
                function T() {
                    var t = document.getSelection();
                    t && t.removeAllRanges()
                }
                function C(t) {
                    var e = new i.DT;
                    return e.setData(s, t), e
                }
                function O() {
                    return "undefined" == typeof ClipboardEvent && void 0 !== window.clipboardData && void 0 !== window.clipboardData.setData
                }
            }, function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var r = ["text/plain", "text/html"],
                    o = function() {
                        (console.warn || console.log).call(arguments)
                    }.bind(console, "[clipboard-polyfill]"),
                    i = !0;
                e.suppressDTWarnings = function() {
                    i = !1
                };
                var a = function() {
                    function t() {
                        this.m = {}
                    }
                    return t.prototype.setData = function(t, e) {
                        i && -1 === r.indexOf(t) && o("Unknown data type: " + t, "Call clipboard.suppressWarnings() to suppress this warning."),
                        this.m[t] = e
                    }, t.prototype.getData = function(t) {
                        return this.m[t]
                    }, t.prototype.forEach = function(t) {
                        for (var e in this.m)
                            t(this.m[e], e)
                    }, t
                }();
                e.DT = a
            }], n = {}, t.m = e, t.c = n, t.d = function(e, n, r) {
                t.o(e, n) || Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: r
                })
            }, t.r = function(t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }, t.t = function(e, n) {
                if (1 & n && (e = t(e)), 8 & n)
                    return e;
                if (4 & n && "object" == typeof e && e && e.__esModule)
                    return e;
                var r = Object.create(null);
                if (t.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & n && "string" != typeof e)
                    for (var o in e)
                        t.d(r, o, function(t) {
                            return e[t]
                        }.bind(null, o));
                return r
            }, t.n = function(e) {
                var n = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return t.d(n, "a", n), n
            }, t.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }, t.p = "", t(t.s = 0);
            function t(r) {
                if (n[r])
                    return n[r].exports;
                var o = n[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
            }
            var e,
                n
        });
    }, {}],
    "R7gn": [function(require, module, exports) {
        var define;
        var global = arguments[3];
        var e,
            n = arguments[3];
        !function(n) {
            var t = "object" == typeof window && window || "object" == typeof self && self;
            "undefined" != typeof exports ? n(exports) : t && (t.hljs = n({}), "function" == typeof e && e.amd && e([], function() {
                return t.hljs
            }))
        }(function(e) {
            var n,
                t = [],
                r = Object.keys,
                a = {},
                i = {},
                s = /^(no-?highlight|plain|text)$/i,
                o = /\blang(?:uage)?-([\w-]+)\b/i,
                l = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
                c = "</span>",
                u = {
                    classPrefix: "hljs-",
                    tabReplace: null,
                    useBR: !1,
                    languages: void 0
                };
            function g(e) {
                return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }
            function f(e) {
                return e.nodeName.toLowerCase()
            }
            function d(e, n) {
                var t = e && e.exec(n);
                return t && 0 === t.index
            }
            function E(e) {
                return s.test(e)
            }
            function v(e) {
                var n,
                    t = {},
                    r = Array.prototype.slice.call(arguments, 1);
                for (n in e)
                    t[n] = e[n];
                return r.forEach(function(e) {
                    for (n in e)
                        t[n] = e[n]
                }), t
            }
            function m(e) {
                var n = [];
                return function e(t, r) {
                    for (var a = t.firstChild; a; a = a.nextSibling)
                        3 === a.nodeType ? r += a.nodeValue.length : 1 === a.nodeType && (n.push({
                            event: "start",
                            offset: r,
                            node: a
                        }), r = e(a, r), f(a).match(/br|hr|img|input/) || n.push({
                            event: "stop",
                            offset: r,
                            node: a
                        }));
                    return r
                }(e, 0), n
            }
            function p(e) {
                if (n && !e.langApiRestored) {
                    for (var t in e.langApiRestored = !0, n)
                        e[t] && (e[n[t]] = e[t]);
                    (e.contains || []).concat(e.variants || []).forEach(p)
                }
            }
            function h(e) {
                function n(e) {
                    return e && e.source || e
                }
                function t(t, r) {
                    return new RegExp(n(t), "m" + (e.case_insensitive ? "i" : "") + (r ? "g" : ""))
                }
                !function a(i, s) {
                    if (!i.compiled) {
                        if (i.compiled = !0, i.keywords = i.keywords || i.beginKeywords, i.keywords) {
                            var o = {},
                                l = function(n, t) {
                                    e.case_insensitive && (t = t.toLowerCase()),
                                    t.split(" ").forEach(function(e) {
                                        var t = e.split("|");
                                        o[t[0]] = [n, t[1] ? Number(t[1]) : 1]
                                    })
                                };
                            "string" == typeof i.keywords ? l("keyword", i.keywords) : r(i.keywords).forEach(function(e) {
                                l(e, i.keywords[e])
                            }),
                            i.keywords = o
                        }
                        i.lexemesRe = t(i.lexemes || /\w+/, !0),
                        s && (i.beginKeywords && (i.begin = "\\b(" + i.beginKeywords.split(" ").join("|") + ")\\b"), i.begin || (i.begin = /\B|\b/), i.beginRe = t(i.begin), i.endSameAsBegin && (i.end = i.begin), i.end || i.endsWithParent || (i.end = /\B|\b/), i.end && (i.endRe = t(i.end)), i.terminator_end = n(i.end) || "", i.endsWithParent && s.terminator_end && (i.terminator_end += (i.end ? "|" : "") + s.terminator_end)),
                        i.illegal && (i.illegalRe = t(i.illegal)),
                        null == i.relevance && (i.relevance = 1),
                        i.contains || (i.contains = []),
                        i.contains = Array.prototype.concat.apply([], i.contains.map(function(e) {
                            return function(e) {
                                return e.variants && !e.cached_variants && (e.cached_variants = e.variants.map(function(n) {
                                    return v(e, {
                                        variants: null
                                    }, n)
                                })), e.cached_variants || e.endsWithParent && [v(e)] || [e]
                            }("self" === e ? i : e)
                        })),
                        i.contains.forEach(function(e) {
                            a(e, i)
                        }),
                        i.starts && a(i.starts, s);
                        var c = i.contains.map(function(e) {
                            return e.beginKeywords ? "\\.?(?:" + e.begin + ")\\.?" : e.begin
                        }).concat([i.terminator_end, i.illegal]).map(n).filter(Boolean);
                        i.terminators = c.length ? t(function(e, t) {
                            for (var r = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./, a = 0, i = "", s = 0; s < e.length; s++) {
                                var o = a,
                                    l = n(e[s]);
                                for (s > 0 && (i += t); l.length > 0;) {
                                    var c = r.exec(l);
                                    if (null == c) {
                                        i += l;
                                        break
                                    }
                                    i += l.substring(0, c.index),
                                    l = l.substring(c.index + c[0].length),
                                    "\\" == c[0][0] && c[1] ? i += "\\" + String(Number(c[1]) + o) : (i += c[0], "(" == c[0] && a++)
                                }
                            }
                            return i
                        }(c, "|"), !0) : {
                            exec: function() {
                                return null
                            }
                        }
                    }
                }(e)
            }
            function b(e, n, t, r) {
                function i(e, n) {
                    var t = E.case_insensitive ? n[0].toLowerCase() : n[0];
                    return e.keywords.hasOwnProperty(t) && e.keywords[t]
                }
                function s(e, n, t, r) {
                    var a = '<span class="' + (r ? "" : u.classPrefix);
                    return e ? (a += e + '">') + n + (t ? "" : c) : n
                }
                function o() {
                    _ += null != m.subLanguage ? function() {
                        var e = "string" == typeof m.subLanguage;
                        if (e && !a[m.subLanguage])
                            return g(N);
                        var n = e ? b(m.subLanguage, N, !0, p[m.subLanguage]) : R(N, m.subLanguage.length ? m.subLanguage : void 0);
                        return m.relevance > 0 && (w += n.relevance), e && (p[m.subLanguage] = n.top), s(n.language, n.value, !1, !0)
                    }() : function() {
                        var e,
                            n,
                            t,
                            r;
                        if (!m.keywords)
                            return g(N);
                        for (r = "", n = 0, m.lexemesRe.lastIndex = 0, t = m.lexemesRe.exec(N); t;)
                            r += g(N.substring(n, t.index)),
                            (e = i(m, t)) ? (w += e[1], r += s(e[0], g(t[0]))) : r += g(t[0]),
                            n = m.lexemesRe.lastIndex,
                            t = m.lexemesRe.exec(N);
                        return r + g(N.substr(n))
                    }(),
                    N = ""
                }
                function l(e) {
                    _ += e.className ? s(e.className, "", !0) : "",
                    m = Object.create(e, {
                        parent: {
                            value: m
                        }
                    })
                }
                function f(e, n) {
                    if (N += e, null == n)
                        return o(), 0;
                    var r = function(e, n) {
                        var t,
                            r,
                            a;
                        for (t = 0, r = n.contains.length; t < r; t++)
                            if (d(n.contains[t].beginRe, e))
                                return n.contains[t].endSameAsBegin && (n.contains[t].endRe = (a = n.contains[t].beginRe.exec(e)[0], new RegExp(a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "m"))), n.contains[t]
                    }(n, m);
                    if (r)
                        return r.skip ? N += n : (r.excludeBegin && (N += n), o(), r.returnBegin || r.excludeBegin || (N = n)), l(r), r.returnBegin ? 0 : n.length;
                    var a = function e(n, t) {
                        if (d(n.endRe, t)) {
                            for (; n.endsParent && n.parent;)
                                n = n.parent;
                            return n
                        }
                        if (n.endsWithParent)
                            return e(n.parent, t)
                    }(m, n);
                    if (a) {
                        var i = m;
                        i.skip ? N += n : (i.returnEnd || i.excludeEnd || (N += n), o(), i.excludeEnd && (N = n));
                        do {
                            m.className && (_ += c),
                            m.skip || m.subLanguage || (w += m.relevance),
                            m = m.parent
                        } while (m !== a.parent);
                        return a.starts && (a.endSameAsBegin && (a.starts.endRe = a.endRe), l(a.starts)), i.returnEnd ? 0 : n.length
                    }
                    if (function(e, n) {
                        return !t && d(n.illegalRe, e)
                    }(n, m))
                        throw new Error('Illegal lexeme "' + n + '" for mode "' + (m.className || "<unnamed>") + '"');
                    return N += n, n.length || 1
                }
                var E = x(e);
                if (!E)
                    throw new Error('Unknown language: "' + e + '"');
                h(E);
                var v,
                    m = r || E,
                    p = {},
                    _ = "";
                for (v = m; v !== E; v = v.parent)
                    v.className && (_ = s(v.className, "", !0) + _);
                var N = "",
                    w = 0;
                try {
                    for (var M, O, S = 0; m.terminators.lastIndex = S, M = m.terminators.exec(n);)
                        O = f(n.substring(S, M.index), M[0]),
                        S = M.index + O;
                    for (f(n.substr(S)), v = m; v.parent; v = v.parent)
                        v.className && (_ += c);
                    return {
                        relevance: w,
                        value: _,
                        language: e,
                        top: m
                    }
                } catch (y) {
                    if (y.message && -1 !== y.message.indexOf("Illegal"))
                        return {
                            relevance: 0,
                            value: g(n)
                        };
                    throw y
                }
            }
            function R(e, n) {
                n = n || u.languages || r(a);
                var t = {
                        relevance: 0,
                        value: g(e)
                    },
                    i = t;
                return n.filter(x).filter(M).forEach(function(n) {
                    var r = b(n, e, !1);
                    r.language = n,
                    r.relevance > i.relevance && (i = r),
                    r.relevance > t.relevance && (i = t, t = r)
                }), i.language && (t.second_best = i), t
            }
            function _(e) {
                return u.tabReplace || u.useBR ? e.replace(l, function(e, n) {
                    return u.useBR && "\n" === e ? "<br>" : u.tabReplace ? n.replace(/\t/g, u.tabReplace) : ""
                }) : e
            }
            function N(e) {
                var n,
                    r,
                    a,
                    s,
                    l,
                    c = function(e) {
                        var n,
                            t,
                            r,
                            a,
                            i = e.className + " ";
                        if (i += e.parentNode ? e.parentNode.className : "", t = o.exec(i))
                            return x(t[1]) ? t[1] : "no-highlight";
                        for (n = 0, r = (i = i.split(/\s+/)).length; n < r; n++)
                            if (E(a = i[n]) || x(a))
                                return a
                    }(e);
                E(c) || (u.useBR ? (n = document.createElementNS("http://www.w3.org/1999/xhtml", "div")).innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n") : n = e, l = n.textContent, a = c ? b(c, l, !0) : R(l), (r = m(n)).length && ((s = document.createElementNS("http://www.w3.org/1999/xhtml", "div")).innerHTML = a.value, a.value = function(e, n, r) {
                    var a = 0,
                        i = "",
                        s = [];
                    function o() {
                        return e.length && n.length ? e[0].offset !== n[0].offset ? e[0].offset < n[0].offset ? e : n : "start" === n[0].event ? e : n : e.length ? e : n
                    }
                    function l(e) {
                        i += "<" + f(e) + t.map.call(e.attributes, function(e) {
                            return " " + e.nodeName + '="' + g(e.value).replace('"', "&quot;") + '"'
                        }).join("") + ">"
                    }
                    function c(e) {
                        i += "</" + f(e) + ">"
                    }
                    function u(e) {
                        ("start" === e.event ? l : c)(e.node)
                    }
                    for (; e.length || n.length;) {
                        var d = o();
                        if (i += g(r.substring(a, d[0].offset)), a = d[0].offset, d === e) {
                            s.reverse().forEach(c);
                            do {
                                u(d.splice(0, 1)[0]),
                                d = o()
                            } while (d === e && d.length && d[0].offset === a);
                            s.reverse().forEach(l)
                        } else
                            "start" === d[0].event ? s.push(d[0].node) : s.pop(),
                            u(d.splice(0, 1)[0])
                    }
                    return i + g(r.substr(a))
                }(r, m(s), l)), a.value = _(a.value), e.innerHTML = a.value, e.className = function(e, n, t) {
                    var r = n ? i[n] : t,
                        a = [e.trim()];
                    return e.match(/\bhljs\b/) || a.push("hljs"), -1 === e.indexOf(r) && a.push(r), a.join(" ").trim()
                }(e.className, c, a.language), e.result = {
                    language: a.language,
                    re: a.relevance
                }, a.second_best && (e.second_best = {
                    language: a.second_best.language,
                    re: a.second_best.relevance
                }))
            }
            function w() {
                if (!w.called) {
                    w.called = !0;
                    var e = document.querySelectorAll("pre code");
                    t.forEach.call(e, N)
                }
            }
            function x(e) {
                return e = (e || "").toLowerCase(), a[e] || a[i[e]]
            }
            function M(e) {
                var n = x(e);
                return n && !n.disableAutodetect
            }
            return e.highlight = b, e.highlightAuto = R, e.fixMarkup = _, e.highlightBlock = N, e.configure = function(e) {
                u = v(u, e)
            }, e.initHighlighting = w, e.initHighlightingOnLoad = function() {
                addEventListener("DOMContentLoaded", w, !1),
                addEventListener("load", w, !1)
            }, e.registerLanguage = function(n, t) {
                var r = a[n] = t(e);
                p(r),
                r.aliases && r.aliases.forEach(function(e) {
                    i[e] = n
                })
            }, e.listLanguages = function() {
                return r(a)
            }, e.getLanguage = x, e.autoDetection = M, e.inherit = v, e.IDENT_RE = "[a-zA-Z]\\w*", e.UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*", e.NUMBER_RE = "\\b\\d+(\\.\\d+)?", e.C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BINARY_NUMBER_RE = "\\b(0b[01]+)", e.RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BACKSLASH_ESCAPE = {
                begin: "\\\\[\\s\\S]",
                relevance: 0
            }, e.APOS_STRING_MODE = {
                className: "string",
                begin: "'",
                end: "'",
                illegal: "\\n",
                contains: [e.BACKSLASH_ESCAPE]
            }, e.QUOTE_STRING_MODE = {
                className: "string",
                begin: '"',
                end: '"',
                illegal: "\\n",
                contains: [e.BACKSLASH_ESCAPE]
            }, e.PHRASAL_WORDS_MODE = {
                begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
            }, e.COMMENT = function(n, t, r) {
                var a = e.inherit({
                    className: "comment",
                    begin: n,
                    end: t,
                    contains: []
                }, r || {});
                return a.contains.push(e.PHRASAL_WORDS_MODE), a.contains.push({
                    className: "doctag",
                    begin: "(?:TODO|FIXME|NOTE|BUG|XXX):",
                    relevance: 0
                }), a
            }, e.C_LINE_COMMENT_MODE = e.COMMENT("//", "$"), e.C_BLOCK_COMMENT_MODE = e.COMMENT("/\\*", "\\*/"), e.HASH_COMMENT_MODE = e.COMMENT("#", "$"), e.NUMBER_MODE = {
                className: "number",
                begin: e.NUMBER_RE,
                relevance: 0
            }, e.C_NUMBER_MODE = {
                className: "number",
                begin: e.C_NUMBER_RE,
                relevance: 0
            }, e.BINARY_NUMBER_MODE = {
                className: "number",
                begin: e.BINARY_NUMBER_RE,
                relevance: 0
            }, e.CSS_NUMBER_MODE = {
                className: "number",
                begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
                relevance: 0
            }, e.REGEXP_MODE = {
                className: "regexp",
                begin: /\//,
                end: /\/[gimuy]*/,
                illegal: /\n/,
                contains: [e.BACKSLASH_ESCAPE, {
                    begin: /\[/,
                    end: /\]/,
                    relevance: 0,
                    contains: [e.BACKSLASH_ESCAPE]
                }]
            }, e.TITLE_MODE = {
                className: "title",
                begin: e.IDENT_RE,
                relevance: 0
            }, e.UNDERSCORE_TITLE_MODE = {
                className: "title",
                begin: e.UNDERSCORE_IDENT_RE,
                relevance: 0
            }, e.METHOD_GUARD = {
                begin: "\\.\\s*" + e.UNDERSCORE_IDENT_RE,
                relevance: 0
            }, e
        });
    }, {}],
    "ElH3": [function(require, module, exports) {
        module.exports = function(e) {
            var n = {
                endsWithParent: !0,
                illegal: /</,
                relevance: 0,
                contains: [{
                    className: "attr",
                    begin: "[A-Za-z0-9\\._:-]+",
                    relevance: 0
                }, {
                    begin: /=\s*/,
                    relevance: 0,
                    contains: [{
                        className: "string",
                        endsParent: !0,
                        variants: [{
                            begin: /"/,
                            end: /"/
                        }, {
                            begin: /'/,
                            end: /'/
                        }, {
                            begin: /[^\s"'=<>`]+/
                        }]
                    }]
                }]
            };
            return {
                aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist"],
                case_insensitive: !0,
                contains: [{
                    className: "meta",
                    begin: "<!DOCTYPE",
                    end: ">",
                    relevance: 10,
                    contains: [{
                        begin: "\\[",
                        end: "\\]"
                    }]
                }, e.COMMENT("\x3c!--", "--\x3e", {
                    relevance: 10
                }), {
                    begin: "<\\!\\[CDATA\\[",
                    end: "\\]\\]>",
                    relevance: 10
                }, {
                    className: "meta",
                    begin: /<\?xml/,
                    end: /\?>/,
                    relevance: 10
                }, {
                    begin: /<\?(php)?/,
                    end: /\?>/,
                    subLanguage: "php",
                    contains: [{
                        begin: "/\\*",
                        end: "\\*/",
                        skip: !0
                    }, {
                        begin: 'b"',
                        end: '"',
                        skip: !0
                    }, {
                        begin: "b'",
                        end: "'",
                        skip: !0
                    }, e.inherit(e.APOS_STRING_MODE, {
                        illegal: null,
                        className: null,
                        contains: null,
                        skip: !0
                    }), e.inherit(e.QUOTE_STRING_MODE, {
                        illegal: null,
                        className: null,
                        contains: null,
                        skip: !0
                    })]
                }, {
                    className: "tag",
                    begin: "<style(?=\\s|>|$)",
                    end: ">",
                    keywords: {
                        name: "style"
                    },
                    contains: [n],
                    starts: {
                        end: "</style>",
                        returnEnd: !0,
                        subLanguage: ["css", "xml"]
                    }
                }, {
                    className: "tag",
                    begin: "<script(?=\\s|>|$)",
                    end: ">",
                    keywords: {
                        name: "script"
                    },
                    contains: [n],
                    starts: {
                        end: "<\/script>",
                        returnEnd: !0,
                        subLanguage: ["actionscript", "javascript", "handlebars", "xml"]
                    }
                }, {
                    className: "tag",
                    begin: "</?",
                    end: "/?>",
                    contains: [{
                        className: "name",
                        begin: /[^\/><\s]+/,
                        relevance: 0
                    }, n]
                }]
            }
        };
    }, {}],
    "WjSg": [function(require, module, exports) {
        "use strict";
        var t = i(require("jquery"));
        require("bootstrap");
        var e = a(require("clipboard-polyfill")),
            r = i(require("highlight.js/lib/highlight")),
            n = i(require("highlight.js/lib/languages/xml"));
        function a(t) {
            if (t && t.__esModule)
                return t;
            var e = {};
            if (null != t)
                for (var r in t)
                    if (Object.prototype.hasOwnProperty.call(t, r)) {
                        var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, r) : {};
                        n.get || n.set ? Object.defineProperty(e, r, n) : e[r] = t[r]
                    }
            return e.default = t, e
        }
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        r.default.registerLanguage("xml", n.default),
        (0, t.default)(document).on("click", 'a[href="#"]', function(t) {
            return t.preventDefault()
        }),
        (0, t.default)(document).on("click", "[data-toggle=copy]", function() {
            var r = (0, t.default)(this);
            e.writeText(r.data("text"));
            var n = r.html();
            r.text("Copied!"),
            setTimeout(function() {
                return r.html(n)
            }, 2e3)
        }),
        (0, t.default)(document).on("submit", "form:not([target])", function(t) {
            return t.preventDefault()
        });
        var o = function(t) {
                return t.split("\n").map(function(t) {
                    return "  ".concat(t)
                }).join("\n")
            },
            l = function(t) {
                var e = document.createElement("template");
                return e.innerHTML = t, [].map.call(e.content.childNodes, function t(e) {
                    switch (e.nodeType) {
                    case Node.ELEMENT_NODE:
                        var r = e.tagName.toLowerCase(),
                            n = "input" === r,
                            a = "<".concat(r),
                            i = !0,
                            l = !1,
                            u = void 0;
                        try {
                            for (var c, d = e.getAttributeNames()[Symbol.iterator](); !(i = (c = d.next()).done); i = !0) {
                                var f = c.value,
                                    h = e.getAttribute(f);
                                a += h ? " ".concat(f, '="').concat(h, '"') : " ".concat(f)
                            }
                        } catch (w) {
                            l = !0,
                            u = w
                        } finally {
                            try {
                                i || null == d.return || d.return()
                            } finally {
                                if (l)
                                    throw u
                            }
                        }
                        if (a += ">", n)
                            return a;
                        var s = !0,
                            g = !1,
                            v = void 0;
                        try {
                            for (var p, m = e.childNodes[Symbol.iterator](); !(s = (p = m.next()).done); s = !0) {
                                var y = p.value;
                                a += "\n" + o(t(y))
                            }
                        } catch (w) {
                            g = !0,
                            v = w
                        } finally {
                            try {
                                s || null == m.return || m.return()
                            } finally {
                                if (g)
                                    throw v
                            }
                        }
                        return a += "\n</".concat(r, ">");
                    case Node.TEXT_NODE:
                        return e.textContent.trim();
                    default:
                        return ""
                    }
                }).join("\n")
            },
            u = (0, t.default)("#code");
        (0, t.default)(".snippet").each(function() {
            var e = l((0, t.default)(this).html());
            (0, t.default)('\n    <div class="show-code">\n      <svg width="16" height="16" fill="'.concat(window.config.isBackgroundLight ? "var(--dark)" : "var(--light)", '" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">\n        <path d="M.7 9.3l4.8-4.8 1.4 1.42L2.84 10l4.07 4.07-1.41 1.42L0 10l.7-.7zm18.6 1.4l.7-.7-5.49-5.49-1.4 1.42L17.16 10l-4.07 4.07 1.41 1.42 4.78-4.78z">\n      </svg>\n    </div>\n  ')).on("click", function() {
                r.default.highlightBlock(u.find("pre code").text(e)[0]),
                u.find(".copy").data("text", e),
                u.modal("show")
            }).appendTo(this)
        }),
        (0, t.default)("a[data-href]").each(function() {
            var e = (0, t.default)(this);
            e.attr("href", e.data("href"))
        });
    }, {
        "jquery": "juYr",
        "bootstrap": "BQpi",
        "clipboard-polyfill": "GUIk",
        "highlight.js/lib/highlight": "R7gn",
        "highlight.js/lib/languages/xml": "ElH3"
    }]
}, {}, ["WjSg"], null)
