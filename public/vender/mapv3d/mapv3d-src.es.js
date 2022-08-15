function R(i, n) {
  if (!(i instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function vr(i, n) {
  for (var e = 0; e < n.length; e++) {
    var t = n[e];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(i, t.key, t);
  }
}
function D(i, n, e) {
  return n && vr(i.prototype, n), e && vr(i, e), Object.defineProperty(i, "prototype", {
    writable: !1
  }), i;
}
var Cn = function() {
  return "V0.1.29";
}, On = function() {
  return new Date().toLocaleString();
}, ci = "DEV", fi = function() {
  var n = `%c \u{1F312}%c MapV3D %c \u56FE\u6D0B\u4E09\u7EF4\u5730\u56FE\u5E73\u53F0 %c

\u7248 \u672C \u53F7\uFF1A`.concat(Cn(), `
\u7F16\u8BD1\u65E5\u671F\uFF1A`).concat(On(), `
\u7248\u6743\u58F0\u660E\uFF1A
1. MapV3D\u7248\u6743\u5B8C\u5168\u5C5E\u4E8E "\u676D\u5DDE\u56FE\u6D0B\u4FE1\u606F\u79D1\u6280\u6709\u9650\u516C\u53F8"\u3002
2. MapV3D\u4E2Dmapv3d-src.*.js\u7A0B\u5E8F\u5305\uFF0C\u4EFB\u4F55\u4E2A\u4EBA\u548C\u673A\u6784\u5728\u9075\u5B88\u4E0B\u5217\u6761\u4EF6\u7684\u524D\u63D0\u4E0B\u6388\u6743\u6C38\u4E45\u4F7F\u7528\uFF1A
    1\uFF09\u4E0D\u8FDB\u884C\u4EFB\u4F55\u5F62\u5F0F\u7684\u7834\u89E3\u548C\u88C1\u526A\uFF0C\u7A0B\u5E8F\u5305\u5B8C\u6574\u5F15\u7528
    2\uFF09\u4FDD\u7559\u6B64\u7248\u6743\u4FE1\u606F\u5728\u63A7\u5236\u53F0\u8F93\u51FA
\u6211\u4EEC\u4FDD\u7559\u5BF9\u6B64\u7248\u6743\u4FE1\u606F\u7684\u6700\u7EC8\u89E3\u91CA\u6743\u3002
`), e = 'font-size: 17px;line-height: 1.5;font-weight: 1000;font-family: "\u5FAE\u8F6F\u96C5\u9ED1";color: rgb(240, 133, 25);', t = 'font-size: 12px;line-height: 1.5;font-family: "\u5FAE\u8F6F\u96C5\u9ED1";color: rgb(0, 138, 255);', r = 'font-size: 15px;line-height: 1.5;font-family: "\u5FAE\u8F6F\u96C5\u9ED1";font-style: italic;color: rgb(240, 133, 25);padding-bottom: 5px;', a = 'font-size: 12px;line-height: 1.5;font-family: "\u5FAE\u8F6F\u96C5\u9ED1";color: rgb(0, 138, 255);';
  console.log(n, e, t, r, a);
};
function hr(i, n, e, t, r, a, o) {
  try {
    var u = i[a](o), s = u.value;
  } catch (l) {
    e(l);
    return;
  }
  u.done ? n(s) : Promise.resolve(s).then(t, r);
}
function W(i) {
  return function() {
    var n = this, e = arguments;
    return new Promise(function(t, r) {
      var a = i.apply(n, e);
      function o(s) {
        hr(a, t, r, o, u, "next", s);
      }
      function u(s) {
        hr(a, t, r, o, u, "throw", s);
      }
      o(void 0);
    });
  };
}
function ne(i) {
  return ne = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ne(i);
}
function di(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var kn = { exports: {} }, _n = { exports: {} };
(function(i) {
  function n(e) {
    return i.exports = n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
      return typeof t;
    } : function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, i.exports.__esModule = !0, i.exports.default = i.exports, n(e);
  }
  i.exports = n, i.exports.__esModule = !0, i.exports.default = i.exports;
})(_n);
(function(i) {
  var n = _n.exports.default;
  function e() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
    i.exports = e = function() {
      return t;
    }, i.exports.__esModule = !0, i.exports.default = i.exports;
    var t = {}, r = Object.prototype, a = r.hasOwnProperty, o = typeof Symbol == "function" ? Symbol : {}, u = o.iterator || "@@iterator", s = o.asyncIterator || "@@asyncIterator", l = o.toStringTag || "@@toStringTag";
    function f(y, v, w) {
      return Object.defineProperty(y, v, {
        value: w,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), y[v];
    }
    try {
      f({}, "");
    } catch {
      f = function(w, k, I) {
        return w[k] = I;
      };
    }
    function c(y, v, w, k) {
      var I = v && v.prototype instanceof b ? v : b, B = Object.create(I.prototype), K = new se(k || []);
      return B._invoke = function(le, he, $) {
        var X = "suspendedStart";
        return function(ge, fr) {
          if (X === "executing")
            throw new Error("Generator is already running");
          if (X === "completed") {
            if (ge === "throw")
              throw fr;
            return ve();
          }
          for ($.method = ge, $.arg = fr; ; ) {
            var dr = $.delegate;
            if (dr) {
              var at = J(dr, $);
              if (at) {
                if (at === m)
                  continue;
                return at;
              }
            }
            if ($.method === "next")
              $.sent = $._sent = $.arg;
            else if ($.method === "throw") {
              if (X === "suspendedStart")
                throw X = "completed", $.arg;
              $.dispatchException($.arg);
            } else
              $.method === "return" && $.abrupt("return", $.arg);
            X = "executing";
            var Re = g(le, he, $);
            if (Re.type === "normal") {
              if (X = $.done ? "completed" : "suspendedYield", Re.arg === m)
                continue;
              return {
                value: Re.arg,
                done: $.done
              };
            }
            Re.type === "throw" && (X = "completed", $.method = "throw", $.arg = Re.arg);
          }
        };
      }(y, w, K), B;
    }
    function g(y, v, w) {
      try {
        return {
          type: "normal",
          arg: y.call(v, w)
        };
      } catch (k) {
        return {
          type: "throw",
          arg: k
        };
      }
    }
    t.wrap = c;
    var m = {};
    function b() {
    }
    function C() {
    }
    function A() {
    }
    var _ = {};
    f(_, u, function() {
      return this;
    });
    var S = Object.getPrototypeOf, V = S && S(S(Q([])));
    V && V !== r && a.call(V, u) && (_ = V);
    var p = A.prototype = b.prototype = Object.create(_);
    function U(y) {
      ["next", "throw", "return"].forEach(function(v) {
        f(y, v, function(w) {
          return this._invoke(v, w);
        });
      });
    }
    function H(y, v) {
      function w(I, B, K, le) {
        var he = g(y[I], y, B);
        if (he.type !== "throw") {
          var $ = he.arg, X = $.value;
          return X && n(X) == "object" && a.call(X, "__await") ? v.resolve(X.__await).then(function(ge) {
            w("next", ge, K, le);
          }, function(ge) {
            w("throw", ge, K, le);
          }) : v.resolve(X).then(function(ge) {
            $.value = ge, K($);
          }, function(ge) {
            return w("throw", ge, K, le);
          });
        }
        le(he.arg);
      }
      var k;
      this._invoke = function(I, B) {
        function K() {
          return new v(function(le, he) {
            w(I, B, le, he);
          });
        }
        return k = k ? k.then(K, K) : K();
      };
    }
    function J(y, v) {
      var w = y.iterator[v.method];
      if (w === void 0) {
        if (v.delegate = null, v.method === "throw") {
          if (y.iterator.return && (v.method = "return", v.arg = void 0, J(y, v), v.method === "throw"))
            return m;
          v.method = "throw", v.arg = new TypeError("The iterator does not provide a 'throw' method");
        }
        return m;
      }
      var k = g(w, y.iterator, v.arg);
      if (k.type === "throw")
        return v.method = "throw", v.arg = k.arg, v.delegate = null, m;
      var I = k.arg;
      return I ? I.done ? (v[y.resultName] = I.value, v.next = y.nextLoc, v.method !== "return" && (v.method = "next", v.arg = void 0), v.delegate = null, m) : I : (v.method = "throw", v.arg = new TypeError("iterator result is not an object"), v.delegate = null, m);
    }
    function de(y) {
      var v = {
        tryLoc: y[0]
      };
      1 in y && (v.catchLoc = y[1]), 2 in y && (v.finallyLoc = y[2], v.afterLoc = y[3]), this.tryEntries.push(v);
    }
    function ue(y) {
      var v = y.completion || {};
      v.type = "normal", delete v.arg, y.completion = v;
    }
    function se(y) {
      this.tryEntries = [{
        tryLoc: "root"
      }], y.forEach(de, this), this.reset(!0);
    }
    function Q(y) {
      if (y) {
        var v = y[u];
        if (v)
          return v.call(y);
        if (typeof y.next == "function")
          return y;
        if (!isNaN(y.length)) {
          var w = -1, k = function I() {
            for (; ++w < y.length; )
              if (a.call(y, w))
                return I.value = y[w], I.done = !1, I;
            return I.value = void 0, I.done = !0, I;
          };
          return k.next = k;
        }
      }
      return {
        next: ve
      };
    }
    function ve() {
      return {
        value: void 0,
        done: !0
      };
    }
    return C.prototype = A, f(p, "constructor", A), f(A, "constructor", C), C.displayName = f(A, l, "GeneratorFunction"), t.isGeneratorFunction = function(y) {
      var v = typeof y == "function" && y.constructor;
      return !!v && (v === C || (v.displayName || v.name) === "GeneratorFunction");
    }, t.mark = function(y) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(y, A) : (y.__proto__ = A, f(y, l, "GeneratorFunction")), y.prototype = Object.create(p), y;
    }, t.awrap = function(y) {
      return {
        __await: y
      };
    }, U(H.prototype), f(H.prototype, s, function() {
      return this;
    }), t.AsyncIterator = H, t.async = function(y, v, w, k, I) {
      I === void 0 && (I = Promise);
      var B = new H(c(y, v, w, k), I);
      return t.isGeneratorFunction(v) ? B : B.next().then(function(K) {
        return K.done ? K.value : B.next();
      });
    }, U(p), f(p, l, "Generator"), f(p, u, function() {
      return this;
    }), f(p, "toString", function() {
      return "[object Generator]";
    }), t.keys = function(y) {
      var v = [];
      for (var w in y)
        v.push(w);
      return v.reverse(), function k() {
        for (; v.length; ) {
          var I = v.pop();
          if (I in y)
            return k.value = I, k.done = !1, k;
        }
        return k.done = !0, k;
      };
    }, t.values = Q, se.prototype = {
      constructor: se,
      reset: function(v) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(ue), !v)
          for (var w in this)
            w.charAt(0) === "t" && a.call(this, w) && !isNaN(+w.slice(1)) && (this[w] = void 0);
      },
      stop: function() {
        this.done = !0;
        var v = this.tryEntries[0].completion;
        if (v.type === "throw")
          throw v.arg;
        return this.rval;
      },
      dispatchException: function(v) {
        if (this.done)
          throw v;
        var w = this;
        function k($, X) {
          return K.type = "throw", K.arg = v, w.next = $, X && (w.method = "next", w.arg = void 0), !!X;
        }
        for (var I = this.tryEntries.length - 1; I >= 0; --I) {
          var B = this.tryEntries[I], K = B.completion;
          if (B.tryLoc === "root")
            return k("end");
          if (B.tryLoc <= this.prev) {
            var le = a.call(B, "catchLoc"), he = a.call(B, "finallyLoc");
            if (le && he) {
              if (this.prev < B.catchLoc)
                return k(B.catchLoc, !0);
              if (this.prev < B.finallyLoc)
                return k(B.finallyLoc);
            } else if (le) {
              if (this.prev < B.catchLoc)
                return k(B.catchLoc, !0);
            } else {
              if (!he)
                throw new Error("try statement without catch or finally");
              if (this.prev < B.finallyLoc)
                return k(B.finallyLoc);
            }
          }
        }
      },
      abrupt: function(v, w) {
        for (var k = this.tryEntries.length - 1; k >= 0; --k) {
          var I = this.tryEntries[k];
          if (I.tryLoc <= this.prev && a.call(I, "finallyLoc") && this.prev < I.finallyLoc) {
            var B = I;
            break;
          }
        }
        B && (v === "break" || v === "continue") && B.tryLoc <= w && w <= B.finallyLoc && (B = null);
        var K = B ? B.completion : {};
        return K.type = v, K.arg = w, B ? (this.method = "next", this.next = B.finallyLoc, m) : this.complete(K);
      },
      complete: function(v, w) {
        if (v.type === "throw")
          throw v.arg;
        return v.type === "break" || v.type === "continue" ? this.next = v.arg : v.type === "return" ? (this.rval = this.arg = v.arg, this.method = "return", this.next = "end") : v.type === "normal" && w && (this.next = w), m;
      },
      finish: function(v) {
        for (var w = this.tryEntries.length - 1; w >= 0; --w) {
          var k = this.tryEntries[w];
          if (k.finallyLoc === v)
            return this.complete(k.completion, k.afterLoc), ue(k), m;
        }
      },
      catch: function(v) {
        for (var w = this.tryEntries.length - 1; w >= 0; --w) {
          var k = this.tryEntries[w];
          if (k.tryLoc === v) {
            var I = k.completion;
            if (I.type === "throw") {
              var B = I.arg;
              ue(k);
            }
            return B;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function(v, w, k) {
        return this.delegate = {
          iterator: Q(v),
          resultName: w,
          nextLoc: k
        }, this.method === "next" && (this.arg = void 0), m;
      }
    }, t;
  }
  i.exports = e, i.exports.__esModule = !0, i.exports.default = i.exports;
})(kn);
var Ue = kn.exports(), L = Ue;
try {
  regeneratorRuntime = Ue;
} catch {
  (typeof globalThis > "u" ? "undefined" : ne(globalThis)) === "object" ? globalThis.regeneratorRuntime = Ue : Function("r", "regeneratorRuntime = r")(Ue);
}
function $t(i) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 16, e = arguments.length > 2 ? arguments[2] : void 0, t, r, a = function() {
    var u = this, s = arguments;
    return e ? (t ? clearTimeout(t) : r = i.apply(u, s), t = setTimeout(function() {
      t = null;
    }, n)) : (clearTimeout(t), t = setTimeout(function() {
      i.apply(u, s);
    }, n)), r;
  };
  return a.cancel = function() {
    clearInterval(t), t = null;
  }, a;
}
function En(i, n, e) {
  var t, r, a, o = 0;
  e = e || {
    leading: !1,
    trailing: !0
  };
  var u = function() {
    o = e.leading ? +new Date() : 0, t = null, i.apply(r, a), t || (r = a = null);
  }, s = function() {
    var f = +new Date();
    !o && !e.leading && (o = f), r = this, a = arguments;
    var c = n - (f - o);
    c <= 0 || c > n ? (t && (clearTimeout(t), t = null), o = f, i.apply(r, a), t || (r = a = null)) : !t && e.trailing && (t = setTimeout(u, c));
  };
  return s.cancel = function() {
    clearTimeout(t), t = null, o = 0;
  }, s;
}
var vi = function() {
  var n = document.documentElement, e = n.requestFullScreen || n.webkitRequestFullScreen || n.mozRequestFullScreen || n.msRequestFullscreen;
  if (e)
    e.call(n);
  else if (typeof window.ActiveXObject < "u") {
    var t = new ActiveXObject("WScript.Shell");
    t != null && t.SendKeys("{F11}");
  }
}, hi = function() {
  var n = document, e = n.cancelFullScreen || n.mozCancelFullScreen || n.msExitFullscreen || n.webkitExitFullscreen || n.exitFullscreen;
  if (e)
    e.call(n);
  else if (typeof window.ActiveXObject < "u") {
    var t = new ActiveXObject("WScript.Shell");
    t != null && t.SendKeys("{F11}");
  }
};
function gi(i) {
  if (Array.isArray(i))
    return i;
}
function pi(i, n) {
  var e = i == null ? null : typeof Symbol < "u" && i[Symbol.iterator] || i["@@iterator"];
  if (e != null) {
    var t = [], r = !0, a = !1, o, u;
    try {
      for (e = e.call(i); !(r = (o = e.next()).done) && (t.push(o.value), !(n && t.length === n)); r = !0)
        ;
    } catch (s) {
      a = !0, u = s;
    } finally {
      try {
        !r && e.return != null && e.return();
      } finally {
        if (a)
          throw u;
      }
    }
    return t;
  }
}
function Lt(i, n) {
  (n == null || n > i.length) && (n = i.length);
  for (var e = 0, t = new Array(n); e < n; e++)
    t[e] = i[e];
  return t;
}
function Sn(i, n) {
  if (!!i) {
    if (typeof i == "string")
      return Lt(i, n);
    var e = Object.prototype.toString.call(i).slice(8, -1);
    if (e === "Object" && i.constructor && (e = i.constructor.name), e === "Map" || e === "Set")
      return Array.from(i);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return Lt(i, n);
  }
}
function mi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ht(i, n) {
  return gi(i) || pi(i, n) || Sn(i, n) || mi();
}
function yi(i, n) {
  var e = typeof Symbol < "u" && i[Symbol.iterator] || i["@@iterator"];
  if (!e) {
    if (Array.isArray(i) || (e = bi(i)) || n && i && typeof i.length == "number") {
      e && (i = e);
      var t = 0, r = function() {
      };
      return { s: r, n: function() {
        return t >= i.length ? { done: !0 } : { done: !1, value: i[t++] };
      }, e: function(l) {
        throw l;
      }, f: r };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, o = !1, u;
  return { s: function() {
    e = e.call(i);
  }, n: function() {
    var l = e.next();
    return a = l.done, l;
  }, e: function(l) {
    o = !0, u = l;
  }, f: function() {
    try {
      !a && e.return != null && e.return();
    } finally {
      if (o)
        throw u;
    }
  } };
}
function bi(i, n) {
  if (!!i) {
    if (typeof i == "string")
      return gr(i, n);
    var e = Object.prototype.toString.call(i).slice(8, -1);
    if (e === "Object" && i.constructor && (e = i.constructor.name), e === "Map" || e === "Set")
      return Array.from(i);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return gr(i, n);
  }
}
function gr(i, n) {
  (n == null || n > i.length) && (n = i.length);
  for (var e = 0, t = new Array(n); e < n; e++)
    t[e] = i[e];
  return t;
}
var wi = /* @__PURE__ */ function() {
  function i() {
    R(this, i), this.events = /* @__PURE__ */ new Map();
  }
  return D(i, [{
    key: "_add",
    value: function(e, t, r) {
      var a = this, o = this.events.get(e), u = o || this.events.set(e, /* @__PURE__ */ new Map()).get(e);
      u.set(e, function() {
        t.apply(void 0, arguments), r && a.off(e, t);
      });
    }
  }, {
    key: "on",
    value: function(e, t) {
      if (!t) {
        console.error("No callback for key: ", e);
        return;
      }
      this._add(e, t, !1);
    }
  }, {
    key: "off",
    value: function(e, t) {
      var r = this.events.get(e);
      r && r.delete(t);
    }
  }, {
    key: "dispatch",
    value: function(e) {
      var t = this.events.get(e);
      if (!t) {
        console.error("No callback for key: ", e);
        return;
      }
      for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
        a[o - 1] = arguments[o];
      var u = yi(t.entries()), s;
      try {
        for (u.s(); !(s = u.n()).done; ) {
          var l = Ht(s.value, 2), f = l[1];
          f.apply(void 0, a);
        }
      } catch (c) {
        u.e(c);
      } finally {
        u.f();
      }
    }
  }, {
    key: "once",
    value: function(e, t) {
      this._add(e, t, !0);
    }
  }]), i;
}();
const Ci = new wi();
function Ut() {
  this.locked = null;
}
Ut.prototype.lock = /* @__PURE__ */ W(/* @__PURE__ */ L.mark(function i() {
  var n = this;
  return L.wrap(function(t) {
    for (; ; )
      switch (t.prev = t.next) {
        case 0:
          if (this.locked !== null) {
            t.next = 4;
            break;
          }
          this.locked = [], t.next = 6;
          break;
        case 4:
          return t.next = 6, new Promise(function(r) {
            return n.locked.push(r);
          });
        case 6:
        case "end":
          return t.stop();
      }
  }, i, this);
}));
Ut.prototype.unlock = function() {
  this.locked.length ? this.locked.shift()() : this.locked = null;
};
const Oi = {
  captureVideo: function(n) {
    var e = document.createElement("canvas");
    return e.width = n.videoWidth, e.height = n.videoHeight, e.getContext("2d").drawImage(n, 0, 0, e.width, e.height), e.toDataURL();
  }
};
var ki = function() {
  var i = navigator.userAgent, n = /(?:Windows Phone)/.test(i), e = /(?:SymbianOS)/.test(i) || n, t = /(?:Android)/.test(i), r = /(?:Firefox)/.test(i);
  /(?:Chrome|CriOS)/.test(i);
  var a = /(?:iPad|PlayBook)/.test(i) || t && !/(?:Mobile)/.test(i) || r && /(?:Tablet)/.test(i), o = /(?:iPhone)/.test(i) && !a, u = !o && !t && !e;
  return {
    isTablet: a,
    isPhone: o,
    isAndroid: t,
    isPc: u
  };
}(), In = {
  treeDfs: function(n, e) {
    n.forEach(function(t) {
      e(t), t.children && In.treeDfs(t.children, e);
    });
  },
  treeToList: function(n) {
    var e = [], t = function r(a) {
      a.forEach(function(o) {
        e.push(o), o.children && o.children.length > 0 && r(o.children);
      });
    };
    return t(n), e;
  },
  list2Tree: function(n) {
    return n.forEach(function(e) {
      n.forEach(function(t) {
        t.pid === e.id && (e.children || (e.children = []), e.children.push(t));
      });
    }), n = n.filter(function(e) {
      return e.pid === null;
    }), n;
  }
};
function d(i, n, e) {
  return n in i ? Object.defineProperty(i, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : i[n] = e, i;
}
var An = { exports: {} }, xt = { exports: {} }, Ln = function(n, e) {
  return function() {
    for (var r = new Array(arguments.length), a = 0; a < r.length; a++)
      r[a] = arguments[a];
    return n.apply(e, r);
  };
}, _i = Ln, Ce = Object.prototype.toString;
function Kt(i) {
  return Array.isArray(i);
}
function Rt(i) {
  return typeof i > "u";
}
function Ei(i) {
  return i !== null && !Rt(i) && i.constructor !== null && !Rt(i.constructor) && typeof i.constructor.isBuffer == "function" && i.constructor.isBuffer(i);
}
function Rn(i) {
  return Ce.call(i) === "[object ArrayBuffer]";
}
function Si(i) {
  return Ce.call(i) === "[object FormData]";
}
function Ii(i) {
  var n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(i) : n = i && i.buffer && Rn(i.buffer), n;
}
function Ai(i) {
  return typeof i == "string";
}
function Li(i) {
  return typeof i == "number";
}
function Dn(i) {
  return i !== null && ne(i) === "object";
}
function xe(i) {
  if (Ce.call(i) !== "[object Object]")
    return !1;
  var n = Object.getPrototypeOf(i);
  return n === null || n === Object.prototype;
}
function Ri(i) {
  return Ce.call(i) === "[object Date]";
}
function Di(i) {
  return Ce.call(i) === "[object File]";
}
function Bi(i) {
  return Ce.call(i) === "[object Blob]";
}
function Bn(i) {
  return Ce.call(i) === "[object Function]";
}
function Mi(i) {
  return Dn(i) && Bn(i.pipe);
}
function Pi(i) {
  return Ce.call(i) === "[object URLSearchParams]";
}
function ji(i) {
  return i.trim ? i.trim() : i.replace(/^\s+|\s+$/g, "");
}
function Ni() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function Gt(i, n) {
  if (!(i === null || typeof i > "u"))
    if (ne(i) !== "object" && (i = [i]), Kt(i))
      for (var e = 0, t = i.length; e < t; e++)
        n.call(null, i[e], e, i);
    else
      for (var r in i)
        Object.prototype.hasOwnProperty.call(i, r) && n.call(null, i[r], r, i);
}
function Dt() {
  var i = {};
  function n(r, a) {
    xe(i[a]) && xe(r) ? i[a] = Dt(i[a], r) : xe(r) ? i[a] = Dt({}, r) : Kt(r) ? i[a] = r.slice() : i[a] = r;
  }
  for (var e = 0, t = arguments.length; e < t; e++)
    Gt(arguments[e], n);
  return i;
}
function Ti(i, n, e) {
  return Gt(n, function(r, a) {
    e && typeof r == "function" ? i[a] = _i(r, e) : i[a] = r;
  }), i;
}
function Fi(i) {
  return i.charCodeAt(0) === 65279 && (i = i.slice(1)), i;
}
var ie = {
  isArray: Kt,
  isArrayBuffer: Rn,
  isBuffer: Ei,
  isFormData: Si,
  isArrayBufferView: Ii,
  isString: Ai,
  isNumber: Li,
  isObject: Dn,
  isPlainObject: xe,
  isUndefined: Rt,
  isDate: Ri,
  isFile: Di,
  isBlob: Bi,
  isFunction: Bn,
  isStream: Mi,
  isURLSearchParams: Pi,
  isStandardBrowserEnv: Ni,
  forEach: Gt,
  merge: Dt,
  extend: Ti,
  trim: ji,
  stripBOM: Fi
}, _e = ie;
function pr(i) {
  return encodeURIComponent(i).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Mn = function(n, e, t) {
  if (!e)
    return n;
  var r;
  if (t)
    r = t(e);
  else if (_e.isURLSearchParams(e))
    r = e.toString();
  else {
    var a = [];
    _e.forEach(e, function(s, l) {
      s === null || typeof s > "u" || (_e.isArray(s) ? l = l + "[]" : s = [s], _e.forEach(s, function(c) {
        _e.isDate(c) ? c = c.toISOString() : _e.isObject(c) && (c = JSON.stringify(c)), a.push(pr(l) + "=" + pr(c));
      }));
    }), r = a.join("&");
  }
  if (r) {
    var o = n.indexOf("#");
    o !== -1 && (n = n.slice(0, o)), n += (n.indexOf("?") === -1 ? "?" : "&") + r;
  }
  return n;
}, Vi = ie;
function Ye() {
  this.handlers = [];
}
Ye.prototype.use = function(n, e, t) {
  return this.handlers.push({
    fulfilled: n,
    rejected: e,
    synchronous: t ? t.synchronous : !1,
    runWhen: t ? t.runWhen : null
  }), this.handlers.length - 1;
};
Ye.prototype.eject = function(n) {
  this.handlers[n] && (this.handlers[n] = null);
};
Ye.prototype.forEach = function(n) {
  Vi.forEach(this.handlers, function(t) {
    t !== null && n(t);
  });
};
var $i = Ye, Hi = ie, Ui = function(n, e) {
  Hi.forEach(n, function(r, a) {
    a !== e && a.toUpperCase() === e.toUpperCase() && (n[e] = r, delete n[a]);
  });
}, Pn = function(n, e, t, r, a) {
  return n.config = e, t && (n.code = t), n.request = r, n.response = a, n.isAxiosError = !0, n.toJSON = function() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }, n;
}, jn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ot, mr;
function Nn() {
  if (mr)
    return ot;
  mr = 1;
  var i = Pn;
  return ot = function(e, t, r, a, o) {
    var u = new Error(e);
    return i(u, t, r, a, o);
  }, ot;
}
var ut, yr;
function xi() {
  if (yr)
    return ut;
  yr = 1;
  var i = Nn();
  return ut = function(e, t, r) {
    var a = r.config.validateStatus;
    !r.status || !a || a(r.status) ? e(r) : t(i("Request failed with status code " + r.status, r.config, null, r.request, r));
  }, ut;
}
var st, br;
function Ki() {
  if (br)
    return st;
  br = 1;
  var i = ie;
  return st = i.isStandardBrowserEnv() ? function() {
    return {
      write: function(t, r, a, o, u, s) {
        var l = [];
        l.push(t + "=" + encodeURIComponent(r)), i.isNumber(a) && l.push("expires=" + new Date(a).toGMTString()), i.isString(o) && l.push("path=" + o), i.isString(u) && l.push("domain=" + u), s === !0 && l.push("secure"), document.cookie = l.join("; ");
      },
      read: function(t) {
        var r = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
        return r ? decodeURIComponent(r[3]) : null;
      },
      remove: function(t) {
        this.write(t, "", Date.now() - 864e5);
      }
    };
  }() : function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }(), st;
}
var lt, wr;
function Gi() {
  return wr || (wr = 1, lt = function(n) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
  }), lt;
}
var ct, Cr;
function qi() {
  return Cr || (Cr = 1, ct = function(n, e) {
    return e ? n.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : n;
  }), ct;
}
var ft, Or;
function Wi() {
  if (Or)
    return ft;
  Or = 1;
  var i = Gi(), n = qi();
  return ft = function(t, r) {
    return t && !i(r) ? n(t, r) : r;
  }, ft;
}
var dt, kr;
function zi() {
  if (kr)
    return dt;
  kr = 1;
  var i = ie, n = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
  return dt = function(t) {
    var r = {}, a, o, u;
    return t && i.forEach(t.split(`
`), function(l) {
      if (u = l.indexOf(":"), a = i.trim(l.substr(0, u)).toLowerCase(), o = i.trim(l.substr(u + 1)), a) {
        if (r[a] && n.indexOf(a) >= 0)
          return;
        a === "set-cookie" ? r[a] = (r[a] ? r[a] : []).concat([o]) : r[a] = r[a] ? r[a] + ", " + o : o;
      }
    }), r;
  }, dt;
}
var vt, _r;
function Yi() {
  if (_r)
    return vt;
  _r = 1;
  var i = ie;
  return vt = i.isStandardBrowserEnv() ? function() {
    var e = /(msie|trident)/i.test(navigator.userAgent), t = document.createElement("a"), r;
    function a(o) {
      var u = o;
      return e && (t.setAttribute("href", u), u = t.href), t.setAttribute("href", u), {
        href: t.href,
        protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
        host: t.host,
        search: t.search ? t.search.replace(/^\?/, "") : "",
        hash: t.hash ? t.hash.replace(/^#/, "") : "",
        hostname: t.hostname,
        port: t.port,
        pathname: t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname
      };
    }
    return r = a(window.location.href), function(u) {
      var s = i.isString(u) ? a(u) : u;
      return s.protocol === r.protocol && s.host === r.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), vt;
}
var ht, Er;
function Je() {
  if (Er)
    return ht;
  Er = 1;
  function i(n) {
    this.message = n;
  }
  return i.prototype.toString = function() {
    return "Cancel" + (this.message ? ": " + this.message : "");
  }, i.prototype.__CANCEL__ = !0, ht = i, ht;
}
var gt, Sr;
function Ir() {
  if (Sr)
    return gt;
  Sr = 1;
  var i = ie, n = xi(), e = Ki(), t = Mn, r = Wi(), a = zi(), o = Yi(), u = Nn(), s = jn, l = Je();
  return gt = function(c) {
    return new Promise(function(m, b) {
      var C = c.data, A = c.headers, _ = c.responseType, S;
      function V() {
        c.cancelToken && c.cancelToken.unsubscribe(S), c.signal && c.signal.removeEventListener("abort", S);
      }
      i.isFormData(C) && delete A["Content-Type"];
      var p = new XMLHttpRequest();
      if (c.auth) {
        var U = c.auth.username || "", H = c.auth.password ? unescape(encodeURIComponent(c.auth.password)) : "";
        A.Authorization = "Basic " + btoa(U + ":" + H);
      }
      var J = r(c.baseURL, c.url);
      p.open(c.method.toUpperCase(), t(J, c.params, c.paramsSerializer), !0), p.timeout = c.timeout;
      function de() {
        if (!!p) {
          var se = "getAllResponseHeaders" in p ? a(p.getAllResponseHeaders()) : null, Q = !_ || _ === "text" || _ === "json" ? p.responseText : p.response, ve = {
            data: Q,
            status: p.status,
            statusText: p.statusText,
            headers: se,
            config: c,
            request: p
          };
          n(function(v) {
            m(v), V();
          }, function(v) {
            b(v), V();
          }, ve), p = null;
        }
      }
      if ("onloadend" in p ? p.onloadend = de : p.onreadystatechange = function() {
        !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(de);
      }, p.onabort = function() {
        !p || (b(u("Request aborted", c, "ECONNABORTED", p)), p = null);
      }, p.onerror = function() {
        b(u("Network Error", c, null, p)), p = null;
      }, p.ontimeout = function() {
        var Q = c.timeout ? "timeout of " + c.timeout + "ms exceeded" : "timeout exceeded", ve = c.transitional || s;
        c.timeoutErrorMessage && (Q = c.timeoutErrorMessage), b(u(Q, c, ve.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", p)), p = null;
      }, i.isStandardBrowserEnv()) {
        var ue = (c.withCredentials || o(J)) && c.xsrfCookieName ? e.read(c.xsrfCookieName) : void 0;
        ue && (A[c.xsrfHeaderName] = ue);
      }
      "setRequestHeader" in p && i.forEach(A, function(Q, ve) {
        typeof C > "u" && ve.toLowerCase() === "content-type" ? delete A[ve] : p.setRequestHeader(ve, Q);
      }), i.isUndefined(c.withCredentials) || (p.withCredentials = !!c.withCredentials), _ && _ !== "json" && (p.responseType = c.responseType), typeof c.onDownloadProgress == "function" && p.addEventListener("progress", c.onDownloadProgress), typeof c.onUploadProgress == "function" && p.upload && p.upload.addEventListener("progress", c.onUploadProgress), (c.cancelToken || c.signal) && (S = function(Q) {
        !p || (b(!Q || Q && Q.type ? new l("canceled") : Q), p.abort(), p = null);
      }, c.cancelToken && c.cancelToken.subscribe(S), c.signal && (c.signal.aborted ? S() : c.signal.addEventListener("abort", S))), C || (C = null), p.send(C);
    });
  }, gt;
}
var Y = ie, Ar = Ui, Ji = Pn, Xi = jn, Zi = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Lr(i, n) {
  !Y.isUndefined(i) && Y.isUndefined(i["Content-Type"]) && (i["Content-Type"] = n);
}
function Qi() {
  var i;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (i = Ir()), i;
}
function ea(i, n, e) {
  if (Y.isString(i))
    try {
      return (n || JSON.parse)(i), Y.trim(i);
    } catch (t) {
      if (t.name !== "SyntaxError")
        throw t;
    }
  return (e || JSON.stringify)(i);
}
var Xe = {
  transitional: Xi,
  adapter: Qi(),
  transformRequest: [function(n, e) {
    return Ar(e, "Accept"), Ar(e, "Content-Type"), Y.isFormData(n) || Y.isArrayBuffer(n) || Y.isBuffer(n) || Y.isStream(n) || Y.isFile(n) || Y.isBlob(n) ? n : Y.isArrayBufferView(n) ? n.buffer : Y.isURLSearchParams(n) ? (Lr(e, "application/x-www-form-urlencoded;charset=utf-8"), n.toString()) : Y.isObject(n) || e && e["Content-Type"] === "application/json" ? (Lr(e, "application/json"), ea(n)) : n;
  }],
  transformResponse: [function(n) {
    var e = this.transitional || Xe.transitional, t = e && e.silentJSONParsing, r = e && e.forcedJSONParsing, a = !t && this.responseType === "json";
    if (a || r && Y.isString(n) && n.length)
      try {
        return JSON.parse(n);
      } catch (o) {
        if (a)
          throw o.name === "SyntaxError" ? Ji(o, this, "E_JSON_PARSE") : o;
      }
    return n;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function(n) {
    return n >= 200 && n < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
Y.forEach(["delete", "get", "head"], function(n) {
  Xe.headers[n] = {};
});
Y.forEach(["post", "put", "patch"], function(n) {
  Xe.headers[n] = Y.merge(Zi);
});
var qt = Xe, ta = ie, ra = qt, na = function(n, e, t) {
  var r = this || ra;
  return ta.forEach(t, function(o) {
    n = o.call(r, n, e);
  }), n;
}, pt, Rr;
function Tn() {
  return Rr || (Rr = 1, pt = function(n) {
    return !!(n && n.__CANCEL__);
  }), pt;
}
var Dr = ie, mt = na, ia = Tn(), aa = qt, oa = Je();
function yt(i) {
  if (i.cancelToken && i.cancelToken.throwIfRequested(), i.signal && i.signal.aborted)
    throw new oa("canceled");
}
var ua = function(n) {
  yt(n), n.headers = n.headers || {}, n.data = mt.call(n, n.data, n.headers, n.transformRequest), n.headers = Dr.merge(n.headers.common || {}, n.headers[n.method] || {}, n.headers), Dr.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(r) {
    delete n.headers[r];
  });
  var e = n.adapter || aa.adapter;
  return e(n).then(function(r) {
    return yt(n), r.data = mt.call(n, r.data, r.headers, n.transformResponse), r;
  }, function(r) {
    return ia(r) || (yt(n), r && r.response && (r.response.data = mt.call(n, r.response.data, r.response.headers, n.transformResponse))), Promise.reject(r);
  });
}, ae = ie, Fn = function(n, e) {
  e = e || {};
  var t = {};
  function r(f, c) {
    return ae.isPlainObject(f) && ae.isPlainObject(c) ? ae.merge(f, c) : ae.isPlainObject(c) ? ae.merge({}, c) : ae.isArray(c) ? c.slice() : c;
  }
  function a(f) {
    if (ae.isUndefined(e[f])) {
      if (!ae.isUndefined(n[f]))
        return r(void 0, n[f]);
    } else
      return r(n[f], e[f]);
  }
  function o(f) {
    if (!ae.isUndefined(e[f]))
      return r(void 0, e[f]);
  }
  function u(f) {
    if (ae.isUndefined(e[f])) {
      if (!ae.isUndefined(n[f]))
        return r(void 0, n[f]);
    } else
      return r(void 0, e[f]);
  }
  function s(f) {
    if (f in e)
      return r(n[f], e[f]);
    if (f in n)
      return r(void 0, n[f]);
  }
  var l = {
    url: o,
    method: o,
    data: o,
    baseURL: u,
    transformRequest: u,
    transformResponse: u,
    paramsSerializer: u,
    timeout: u,
    timeoutMessage: u,
    withCredentials: u,
    adapter: u,
    responseType: u,
    xsrfCookieName: u,
    xsrfHeaderName: u,
    onUploadProgress: u,
    onDownloadProgress: u,
    decompress: u,
    maxContentLength: u,
    maxBodyLength: u,
    transport: u,
    httpAgent: u,
    httpsAgent: u,
    cancelToken: u,
    socketPath: u,
    responseEncoding: u,
    validateStatus: s
  };
  return ae.forEach(Object.keys(n).concat(Object.keys(e)), function(c) {
    var g = l[c] || a, m = g(c);
    ae.isUndefined(m) && g !== s || (t[c] = m);
  }), t;
}, bt, Br;
function Vn() {
  return Br || (Br = 1, bt = {
    version: "0.26.1"
  }), bt;
}
var sa = Vn().version, Wt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(i, n) {
  Wt[i] = function(t) {
    return ne(t) === i || "a" + (n < 1 ? "n " : " ") + i;
  };
});
var Mr = {};
Wt.transitional = function(n, e, t) {
  function r(a, o) {
    return "[Axios v" + sa + "] Transitional option '" + a + "'" + o + (t ? ". " + t : "");
  }
  return function(a, o, u) {
    if (n === !1)
      throw new Error(r(o, " has been removed" + (e ? " in " + e : "")));
    return e && !Mr[o] && (Mr[o] = !0, console.warn(r(o, " has been deprecated since v" + e + " and will be removed in the near future"))), n ? n(a, o, u) : !0;
  };
};
function la(i, n, e) {
  if (ne(i) !== "object")
    throw new TypeError("options must be an object");
  for (var t = Object.keys(i), r = t.length; r-- > 0; ) {
    var a = t[r], o = n[a];
    if (o) {
      var u = i[a], s = u === void 0 || o(u, a, i);
      if (s !== !0)
        throw new TypeError("option " + a + " must be " + s);
      continue;
    }
    if (e !== !0)
      throw Error("Unknown option " + a);
  }
}
var ca = {
  assertOptions: la,
  validators: Wt
}, $n = ie, fa = Mn, Pr = $i, jr = ua, Ze = Fn, Hn = ca, Ee = Hn.validators;
function Ne(i) {
  this.defaults = i, this.interceptors = {
    request: new Pr(),
    response: new Pr()
  };
}
Ne.prototype.request = function(n, e) {
  typeof n == "string" ? (e = e || {}, e.url = n) : e = n || {}, e = Ze(this.defaults, e), e.method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
  var t = e.transitional;
  t !== void 0 && Hn.assertOptions(t, {
    silentJSONParsing: Ee.transitional(Ee.boolean),
    forcedJSONParsing: Ee.transitional(Ee.boolean),
    clarifyTimeoutError: Ee.transitional(Ee.boolean)
  }, !1);
  var r = [], a = !0;
  this.interceptors.request.forEach(function(m) {
    typeof m.runWhen == "function" && m.runWhen(e) === !1 || (a = a && m.synchronous, r.unshift(m.fulfilled, m.rejected));
  });
  var o = [];
  this.interceptors.response.forEach(function(m) {
    o.push(m.fulfilled, m.rejected);
  });
  var u;
  if (!a) {
    var s = [jr, void 0];
    for (Array.prototype.unshift.apply(s, r), s = s.concat(o), u = Promise.resolve(e); s.length; )
      u = u.then(s.shift(), s.shift());
    return u;
  }
  for (var l = e; r.length; ) {
    var f = r.shift(), c = r.shift();
    try {
      l = f(l);
    } catch (g) {
      c(g);
      break;
    }
  }
  try {
    u = jr(l);
  } catch (g) {
    return Promise.reject(g);
  }
  for (; o.length; )
    u = u.then(o.shift(), o.shift());
  return u;
};
Ne.prototype.getUri = function(n) {
  return n = Ze(this.defaults, n), fa(n.url, n.params, n.paramsSerializer).replace(/^\?/, "");
};
$n.forEach(["delete", "get", "head", "options"], function(n) {
  Ne.prototype[n] = function(e, t) {
    return this.request(Ze(t || {}, {
      method: n,
      url: e,
      data: (t || {}).data
    }));
  };
});
$n.forEach(["post", "put", "patch"], function(n) {
  Ne.prototype[n] = function(e, t, r) {
    return this.request(Ze(r || {}, {
      method: n,
      url: e,
      data: t
    }));
  };
});
var da = Ne, wt, Nr;
function va() {
  if (Nr)
    return wt;
  Nr = 1;
  var i = Je();
  function n(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    var t;
    this.promise = new Promise(function(o) {
      t = o;
    });
    var r = this;
    this.promise.then(function(a) {
      if (!!r._listeners) {
        var o, u = r._listeners.length;
        for (o = 0; o < u; o++)
          r._listeners[o](a);
        r._listeners = null;
      }
    }), this.promise.then = function(a) {
      var o, u = new Promise(function(s) {
        r.subscribe(s), o = s;
      }).then(a);
      return u.cancel = function() {
        r.unsubscribe(o);
      }, u;
    }, e(function(o) {
      r.reason || (r.reason = new i(o), t(r.reason));
    });
  }
  return n.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, n.prototype.subscribe = function(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }, n.prototype.unsubscribe = function(t) {
    if (!!this._listeners) {
      var r = this._listeners.indexOf(t);
      r !== -1 && this._listeners.splice(r, 1);
    }
  }, n.source = function() {
    var t, r = new n(function(o) {
      t = o;
    });
    return {
      token: r,
      cancel: t
    };
  }, wt = n, wt;
}
var Ct, Tr;
function ha() {
  return Tr || (Tr = 1, Ct = function(n) {
    return function(t) {
      return n.apply(null, t);
    };
  }), Ct;
}
var Ot, Fr;
function ga() {
  if (Fr)
    return Ot;
  Fr = 1;
  var i = ie;
  return Ot = function(e) {
    return i.isObject(e) && e.isAxiosError === !0;
  }, Ot;
}
var Vr = ie, pa = Ln, Ke = da, ma = Fn, ya = qt;
function Un(i) {
  var n = new Ke(i), e = pa(Ke.prototype.request, n);
  return Vr.extend(e, Ke.prototype, n), Vr.extend(e, n), e.create = function(r) {
    return Un(ma(i, r));
  }, e;
}
var pe = Un(ya);
pe.Axios = Ke;
pe.Cancel = Je();
pe.CancelToken = va();
pe.isCancel = Tn();
pe.VERSION = Vn().version;
pe.all = function(n) {
  return Promise.all(n);
};
pe.spread = ha();
pe.isAxiosError = ga();
xt.exports = pe;
xt.exports.default = pe;
(function(i) {
  i.exports = xt.exports;
})(An);
const xn = /* @__PURE__ */ di(An.exports);
function $r(i, n) {
  var e = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(i);
    n && (t = t.filter(function(r) {
      return Object.getOwnPropertyDescriptor(i, r).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function Hr(i) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? $r(Object(e), !0).forEach(function(t) {
      d(i, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : $r(Object(e)).forEach(function(t) {
      Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return i;
}
var zt = xn.create({
  baseURL: "",
  timeout: 1e4
});
zt.interceptors.request.use(function(i) {
  return i;
}, function(i) {
  return Promise.reject(i);
});
zt.interceptors.response.use(function(i) {
  return i.data;
}, function(i) {
  return Promise.reject(i);
});
var ba = xn.CancelToken;
function wa() {
  return ba.source();
}
function Ca() {
  return function() {
    var n = wa();
    return {
      http: function() {
        var e = W(/* @__PURE__ */ L.mark(function r(a) {
          return L.wrap(function(u) {
            for (; ; )
              switch (u.prev = u.next) {
                case 0:
                  return u.abrupt("return", zt.request(Hr(Hr({}, a), {}, {
                    cancelToken: n.token
                  })));
                case 1:
                case "end":
                  return u.stop();
              }
          }, r);
        }));
        function t(r) {
          return e.apply(this, arguments);
        }
        return t;
      }(),
      cancel: function(t) {
        n.cancel(t);
      }
    };
  };
}
const Oa = Ca();
function Ur(i, n) {
  var e = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(i);
    n && (t = t.filter(function(r) {
      return Object.getOwnPropertyDescriptor(i, r).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function ka(i) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Ur(Object(e), !0).forEach(function(t) {
      d(i, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : Ur(Object(e)).forEach(function(t) {
      Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return i;
}
function _a() {
  return Bt.apply(this, arguments);
}
function Bt() {
  return Bt = W(/* @__PURE__ */ L.mark(function i() {
    var n, e, t, r;
    return L.wrap(function(o) {
      for (; ; )
        switch (o.prev = o.next) {
          case 0:
            return n = Oa(), e = n.http, o.next = 3, e({
              url: "./config.json"
            });
          case 3:
            return t = o.sent, r = window.location.host, console.log("%c config.json\u914D\u7F6E:", "color: red;font-size:13px", t), console.log("%c \u672C\u673AIP:", "color: blue;font-size:13px", r), o.abrupt("return", ka({
              environments: t.environments
            }, t[t.environments || "PRD"]) || {});
          case 8:
          case "end":
            return o.stop();
        }
    }, i);
  })), Bt.apply(this, arguments);
}
var Kn = Jt, Gn = tt, Ea = {
  code: 400,
  msg: "invalid parameter"
}, Sa = {
  code: 401,
  msg: "view3d uninitialized "
};
function Ie() {
  var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "error";
  Kn(i) && console.error(i), Gn(i) && console.log(i.msg);
}
function Qe(i) {
  Kn(i) && console.warn(i), Gn(i) && console.warn(i.msg);
}
function h(i, n) {
  if (!!i)
    return !n in i ? (Ie("".concat(n, " dose not exist.")), !1) : !0;
}
const Vu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  InvalidParameter: Ea,
  View3dUnInitialized: Sa,
  logError: Ie,
  warn: Qe,
  functionExist: h
}, Symbol.toStringTag, { value: "Module" }));
var fe = function() {
  return null;
}, qn = function() {
  return !1;
}, et = /* @__PURE__ */ Object.create(null), Wn = Object.prototype.toString, Yt = function(n) {
  return Wn.call(n);
}, tt = function(n) {
  return Yt(n) === "[object Object]";
}, zn = function(n) {
  return Jn(n) && ce(n.then) && ce(n.catch);
}, Ia = function(n) {
  return n === !0 || n === !1;
};
function Aa(i) {
  return i == null || i === "" || i === "undefined";
}
function La(i) {
  return !(i == null || i === "" || i === "undefined");
}
function Ae(i) {
  return typeof Array.isArray == "export function" ? Array.isArray(i) : Object.prototype.toString.call(i) === "[object Array]";
}
function Jt(i) {
  return typeof i == "string" && i.constructor === String;
}
function Ra(i) {
  return typeof obj == "number" && obj.constructor === Number;
}
function Yn(i) {
  return ne(i) === "object" && i.constructor === Date;
}
function ce(i) {
  return typeof i == "export function" || typeof i == "function";
}
function Jn(i) {
  return i !== null && ne(i) == "object";
}
function Mt(i, n) {
  if (i === null || ne(i) != "object")
    return i;
  if (n == null && (n = ["_parent", "_class"]), Yn(i)) {
    var e = new Date();
    return e.setTime(i.getTime()), e;
  }
  if (Ae(i)) {
    for (var e = [], t = 0, r = i.length; t < r; ++t)
      e[t] = Mt(i[t], n);
    return e;
  }
  if (ne(i) === "object") {
    var e = {};
    for (var a in i)
      typeof a != "export function" && n.indexOf(a) == -1 && i.hasOwnProperty(a) && (e[a] = Mt(i[a], n));
    return e;
  }
  return i;
}
function Da(i) {
  for (var n = document.scripts || document.getElementsByTagName("script"), e, t = n.length; t > 0; t--)
    n[t - 1].src.indexOf(i) > -1 && (e = n[t - 1].src.substring(0, n[t - 1].src.lastIndexOf("/") + 1));
  return e;
}
function Xn(i) {
  return i && Jt(i) && i.toLowerCase();
}
function Xt(i) {
  return Object.keys(i).reduce(function(n, e) {
    return n[Xn(e)] = i[e], n;
  }, {});
}
function Ba(i) {
  function n(e) {
    return "_" + e.toLowerCase();
  }
  return Object.keys(i).reduce(function(e, t) {
    return e[t.replace(/[A-Z]/, n)] = i[t], e;
  }, {});
}
function Ma(i) {
  function n(e) {
    return e = e.slice(1), e = e[0].toUpperCase() + e.slice(1), e;
  }
  return Object.keys(i).reduce(function(e, t) {
    return e[t.replace(/_\w/g, n)] = i[t], e;
  }, {});
}
var Pa = function(n, e) {
  var t = {};
  return n.forEach(function(r) {
    var a = e(r);
    typeof a != "string" && (a = JSON.stringify(a)), t[a] = t[a] || [], t[a].push(r);
  }), t;
}, ja = function(n) {
  return n.sort(function() {
    return Math.random() - 0.5;
  });
};
function me() {
  return Math.floor(Math.random() * 16777215).toString(16);
}
function Zt() {
  return "".concat(me()).concat(me()).concat(me().slice(2));
}
function Na() {
  return "".concat(me()).concat(me()).concat(me()).concat(me()).concat(me().slice(2));
}
function Ta(i, n) {
  var e = null, t = "", r = 0, a = "    ";
  return n = n || {}, n.newlineAfterColonIfBeforeBraceOrBracket = n.newlineAfterColonIfBeforeBraceOrBracket === !0, n.spaceAfterColon = n.spaceAfterColon === !1, typeof i != "string" || (i = JSON.parse(i)), i = JSON.stringify(i), e = /([{}])/g, i = i.replace(e, `\r
$1\r
`), e = /([\[\]])/g, i = i.replace(e, `\r
$1\r
`), e = /(\,)/g, i = i.replace(e, `$1\r
`), e = /(\r\n\r\n)/g, i = i.replace(e, `\r
`), e = /\r\n\,/g, i = i.replace(e, ","), n.newlineAfterColonIfBeforeBraceOrBracket || (e = /\:\r\n\{/g, i = i.replace(e, ":{"), e = /\:\r\n\[/g, i = i.replace(e, ":[")), n.spaceAfterColon && (e = /\:/g, i = i.replace(e, ":")), i.split(`\r
`).forEach(function(o, u) {
    var s = 0, l = 0, f = "";
    for (o.match(/\{$/) || o.match(/\[$/) ? l = 1 : o.match(/\}/) || o.match(/\]/) ? r !== 0 && (r -= 1) : l = 0, s = 0; s < r; s++)
      f += a;
    o !== "" && (t += f + o + `\r
`), r += l;
  }), t.replace(/\r\n$/, "");
}
var Qt = 1920, er = 1080;
function Fa(i, n) {
  Qt = i, er = n;
}
function Va() {
  var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return typeof i != "number" ? i : "".concat(i / Qt * 100, "vw");
}
function $a() {
  var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return typeof i != "number" ? i : "".concat(i / er * 100, "vh");
}
function Ha(i) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qt;
  if (typeof i != "number")
    return i;
  var e = window.innerWidth;
  return Math.ceil(e / n * i);
}
function Ua(i) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : er;
  if (typeof i != "number")
    return i;
  var e = window.innerHeight;
  return Math.ceil(e / n * i);
}
var Zn = ki, xa = {
  sim_arraw: "sim_arraw",
  sim_dot: "sim_dot",
  sim_dashed: "sim_dashed",
  sim_flash: "sim_flash",
  sim_scan: "sim_scan",
  red: "red"
};
function Ka(i, n) {
}
function Ga(i, n) {
  if (!!i)
    return !n in i ? (Ie("".concat(n, " dose not exist.")), !1) : !0;
}
const $u = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  lock: Ut,
  debounce: $t,
  throttle: En,
  enterFullScreen: vi,
  exitFullScreen: hi,
  captureUtil: Oi,
  EventBus: Ci,
  treeUtil: In,
  fetchConfig: _a,
  NOOP: fe,
  FALSE_FUNC: qn,
  EMPTY_OBJ: et,
  objectToString: Wn,
  toTypeString: Yt,
  isPlainObject: tt,
  isPromise: zn,
  isBoolean: Ia,
  isEmpty: Aa,
  isNotEmpty: La,
  isArray: Ae,
  isString: Jt,
  isNumber: Ra,
  isDate: Yn,
  isFunction: ce,
  isObject: Jn,
  clone: Mt,
  getPath: Da,
  toLowerCase: Xn,
  objectKeyToLowerCase: Xt,
  objectKeyToUnderline: Ba,
  objectKeyUnderlineToUppercase: Ma,
  groupBy: Pa,
  shuffledArray: ja,
  createHex: me,
  createUUID: Zt,
  createUUID32: Na,
  beautifyJSON: Ta,
  setBaseLayout: Fa,
  formatPxToVw: Va,
  formatPxToVh: $a,
  pxFromVw: Ha,
  pxFromVh: Ua,
  osUtil: Zn,
  STYLES: xa,
  isInViewBox: Ka,
  functionExist: Ga
}, Symbol.toStringTag, { value: "Module" }));
function qa(i) {
  if (Array.isArray(i))
    return Lt(i);
}
function Wa(i) {
  if (typeof Symbol < "u" && i[Symbol.iterator] != null || i["@@iterator"] != null)
    return Array.from(i);
}
function za() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function je(i) {
  return qa(i) || Wa(i) || Sn(i) || za();
}
var Ya = fe, xr = Ae, ye = ce, Ja = tt, Xa = zn, Me = [], Pt = !1;
function Qn() {
  for (var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 100, n = arguments.length > 1 ? arguments[1] : void 0, e = arguments.length > 2 ? arguments[2] : void 0, t = arguments.length, r = new Array(t > 3 ? t - 3 : 0), a = 3; a < t; a++)
    r[a - 3] = arguments[a];
  return new Promise(function(o) {
    ye(n) && (e = n, n = null), e && e.apply(n, [].concat(r)), setTimeout(function() {
      var u = Ya;
      r.length === 1 && ye(r[0]) ? u = r[0] : r.length > 1 && ye(r[r.length - 1]) && (u = r[r.length - 1]), u(), o();
    }, i);
  });
}
function ei(i, n) {
  for (var e = arguments.length, t = new Array(e > 2 ? e - 2 : 0), r = 2; r < e; r++)
    t[r - 2] = arguments[r];
  return new Promise(function(a) {
    if (ye(n)) {
      var o = function() {
        a.apply(void 0, arguments);
      };
      if (xr(t) && t.length === 1 && ye(t[0])) {
        var u = t[0];
        o = function() {
          for (var f = arguments.length, c = new Array(f), g = 0; g < f; g++)
            c[g] = arguments[g];
          u.apply(i, [].concat(c)), a.apply(void 0, c);
        }, t = [];
      } else if (xr(t) && t.length > 1 && ye(t[t.length - 1])) {
        var s = t.pop();
        o = function() {
          for (var f = arguments.length, c = new Array(f), g = 0; g < f; g++)
            c[g] = arguments[g];
          s.apply(null, [].concat(c)), a.apply(void 0, c);
        };
      }
      n.apply(i, [].concat(je(t), [o]));
    }
  });
}
function rt(i, n) {
  for (var e = arguments.length, t = new Array(e > 2 ? e - 2 : 0), r = 2; r < e; r++)
    t[r - 2] = arguments[r];
  return /* @__PURE__ */ W(/* @__PURE__ */ L.mark(function a() {
    return L.wrap(function(u) {
      for (; ; )
        switch (u.prev = u.next) {
          case 0:
            return u.abrupt("return", ei.apply(void 0, [i, n].concat(t)));
          case 1:
          case "end":
            return u.stop();
        }
    }, a);
  }));
}
function ti(i, n, e) {
  for (var t = arguments.length, r = new Array(t > 3 ? t - 3 : 0), a = 3; a < t; a++)
    r[a - 3] = arguments[a];
  return /* @__PURE__ */ W(/* @__PURE__ */ L.mark(function o() {
    return L.wrap(function(s) {
      for (; ; )
        switch (s.prev = s.next) {
          case 0:
            return s.abrupt("return", Qn.apply(void 0, [i, n, e].concat(r)));
          case 1:
          case "end":
            return s.stop();
        }
    }, o);
  }));
}
function Te(i) {
  return new Promise(/* @__PURE__ */ function() {
    var n = W(/* @__PURE__ */ L.mark(function e(t, r) {
      return L.wrap(function(o) {
        for (; ; )
          switch (o.prev = o.next) {
            case 0:
              try {
                ri({
                  task: i.task,
                  complete: function() {
                    t.apply(void 0, arguments);
                  }
                });
              } catch (u) {
                r(u);
              }
            case 1:
            case "end":
              return o.stop();
          }
      }, e);
    }));
    return function(e, t) {
      return n.apply(this, arguments);
    };
  }());
}
function Za(i) {
  return /* @__PURE__ */ function() {
    var n = W(/* @__PURE__ */ L.mark(function e(t, r) {
      var a, o, u, s = arguments;
      return L.wrap(function(f) {
        for (; ; )
          switch (f.prev = f.next) {
            case 0:
              for (a = s.length, o = new Array(a > 2 ? a - 2 : 0), u = 2; u < a; u++)
                o[u - 2] = s[u];
              return f.abrupt("return", Te({
                task: function() {
                  return ye(i) && i && i(), rt.apply(void 0, [t, r].concat(o));
                }
              }));
            case 2:
            case "end":
              return f.stop();
          }
      }, e);
    }));
    return function(e, t) {
      return n.apply(this, arguments);
    };
  }();
}
function G(i, n) {
  for (var e = arguments.length, t = new Array(e > 2 ? e - 2 : 0), r = 2; r < e; r++)
    t[r - 2] = arguments[r];
  return Te({
    task: rt.apply(void 0, [i, n].concat(t))
  });
}
function j() {
  for (var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10, n = arguments.length > 1 ? arguments[1] : void 0, e = arguments.length > 2 ? arguments[2] : void 0, t = arguments.length, r = new Array(t > 3 ? t - 3 : 0), a = 3; a < t; a++)
    r[a - 3] = arguments[a];
  return Te({
    task: ti.apply(void 0, [i, n, e].concat(r))
  });
}
function ri(i) {
  Ja(i) && ni(Me, i), !Pt && Qa();
}
function jt(i) {
  return i.length === 0 ? null : i[0];
}
function ni(i, n) {
  i.push(n);
}
function ii(i) {
  return i.length === 0 ? null : i.splice(0, 1);
}
function Qa() {
  return Nt.apply(this, arguments);
}
function Nt() {
  return Nt = W(/* @__PURE__ */ L.mark(function i() {
    var n, e, t, r;
    return L.wrap(function(o) {
      for (; ; )
        switch (o.prev = o.next) {
          case 0:
            Pt = !0, n = jt(Me);
          case 2:
            if (n === null) {
              o.next = 21;
              break;
            }
            if (e = n.task(), t = void 0, !ye(e)) {
              o.next = 11;
              break;
            }
            return o.next = 8, e();
          case 8:
            t = o.sent, o.next = 15;
            break;
          case 11:
            if (!Xa(e)) {
              o.next = 15;
              break;
            }
            return o.next = 14, e;
          case 14:
            t = o.sent;
          case 15:
            r = n.complete, ye(r) && r(t), ii(Me), n = jt(Me), o.next = 2;
            break;
          case 21:
            Pt = !1;
          case 22:
          case "end":
            return o.stop();
        }
    }, i);
  })), Nt.apply(this, arguments);
}
window.$taskQueue = Me;
const eo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  sleep: Qn,
  until: ei,
  curry: rt,
  wait: ti,
  doSchedule: Te,
  preSchedule: Za,
  schedule: G,
  waitSchedule: j,
  performAsyncWork: ri,
  peek: jt,
  push: ni,
  pop: ii
}, Symbol.toStringTag, { value: "Module" }));
var to = ce, ro = et, no = $t, io = /* @__PURE__ */ function() {
  function i() {
    R(this, i), this._view3d = null, this.config = ro;
  }
  return D(i, [{
    key: "view3d",
    get: function() {
      return this._view3d;
    },
    set: function(e) {
      this._view3d = e;
    }
  }, {
    key: "createMap",
    value: function() {
      var n = W(/* @__PURE__ */ L.mark(function t(r) {
        var a = this, o, u;
        return L.wrap(function(l) {
          for (; ; )
            switch (l.prev = l.next) {
              case 0:
                if (this.config = r, o = {}, u = this, !(!window.MapVision || !window.MapVision.View3d)) {
                  l.next = 6;
                  break;
                }
                return r.error && to(r.error) && r.error({
                  code: 1,
                  msg: "mapvision3d.min.js file was not include."
                }), l.abrupt("return");
              case 6:
                return l.abrupt("return", Te({
                  task: function() {
                    var c = {
                      id: r.id,
                      url: r.url,
                      projectId: r.projectId,
                      mapkey: r.mapkey,
                      token: r.token
                    };
                    return o = new MapVision.View3d(c), rt(o, o.Open, function(g) {
                      if (g.code === 200)
                        u._view3d = o;
                      else {
                        Ie({
                          msg: "connection fail! check if MapVisionPServer is running!"
                        }), r.error(g);
                        return;
                      }
                      r.autoResize && ao(u, r.autoResizeTicker), a._view3d.OverLayerRemoveAll(), r.resetBuildings && a._view3d.ResetAllBuildings(), a.setNorthControl(r.northControl), r.defaultSetResolution && a.setResolution(r.id), a.setParameters(), a.setMouseEnable(r.enableMouse), a.setKeyBoardEnable(r.enableKeyboard), a._view3d.Stop(), a._view3d.Clear(), a.setMouseCursorVisible(r.internalMouseVisible), a._insertMask(), r.defaultLocate && o.ResetHome();
                    });
                  }
                }));
              case 7:
              case "end":
                return l.stop();
            }
        }, t, this);
      }));
      function e(t) {
        return n.apply(this, arguments);
      }
      return e;
    }()
  }, {
    key: "destroy",
    value: function() {
      oo(), this.view3d = null;
    }
  }, {
    key: "_insertMask",
    value: function() {
      var e = this.config.id, t = document.getElementById(e);
      if (t) {
        var r = t.parentNode;
        if (r) {
          var a = document.createElement("div");
          a.id = e + "_mask", a.style.position = "absolute", a.style.left = "0", a.style.top = "0", a.style.width = "100%", a.style.height = "100%", a.style.zIndex = "1", a.style.display = "none", a.style.backgroundColor = "transparent", a.style.opacity = "0", r.appendChild(a);
        }
      }
    }
  }, {
    key: "_removeMask",
    value: function() {
      var e = this.config.id, t = document.getElementById(e);
      if (t) {
        var r = t.parentNode;
        r && r.removeChild(t);
      }
    }
  }, {
    key: "showCover",
    value: function() {
      var e = this.config.id, t = document.getElementById(e + "_mask");
      t && (t.style.display = "block");
    }
  }, {
    key: "hideCover",
    value: function() {
      var e = this.config.id, t = document.getElementById(e + "_mask");
      t && (t.style.display = "none");
    }
  }, {
    key: "setResolution",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "mapVision3d", t = this.config, r = this._view3d, a = document.getElementById(e);
      if (a && h(r, "SetResolution")) {
        var o = window.devicePixelRatio * (Zn.isPc ? 1 : 3);
        r.SetResolution(a.clientWidth * o * t.resolutionScale, a.clientHeight * o * t.resolutionScale);
      }
    }
  }, {
    key: "openMap",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "default";
      h(this._view3d, "OpenMap") && this._view3d.OpenMap(e);
    }
  }, {
    key: "setMouseEnable",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      this._view3d.enableMouse = e;
    }
  }, {
    key: "setKeyBoardEnable",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      this._view3d.enableKeyboard = e;
    }
  }, {
    key: "setTreeVisible",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, t = this._view3d;
      if (h(t, "UpdateObjectVisible"))
        return j(10, t, t.UpdateObjectVisible, "InstancedFoliageActor", e);
    }
  }, {
    key: "setDirectionalLightVisible",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, t = this._view3d;
      if (h(t, "UpdateObjectVisible"))
        return j(10, t, t.UpdateObjectVisible, "DirectionalLight", e);
    }
  }, {
    key: "setDynamicSkyVisible",
    value: function(e) {
      var t = this._view3d;
      if (h(t, "UpdateObjectVisible"))
        return j(10, t, t.UpdateObjectVisible, "Ultra_Dynamic_Sky", e);
    }
  }, {
    key: "setSkySphereVisible",
    value: function(e) {
      var t = this._view3d;
      if (h(t, "UpdateObjectVisible"))
        return j(10, t, t.UpdateObjectVisible, "BP_Sky_Sphere", e);
    }
  }, {
    key: "getKeyBoardEnable",
    value: function() {
      return this._view3d.enableKeyboard;
    }
  }, {
    key: "setMouseCursorVisible",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
      h(this._view3d, "SetParameters") && this.setParameters({
        showmouse: e
      });
    }
  }, {
    key: "getSceneSunInfo",
    value: function() {
      var n = W(/* @__PURE__ */ L.mark(function t() {
        var r;
        return L.wrap(function(o) {
          for (; ; )
            switch (o.prev = o.next) {
              case 0:
                if (r = this._view3d, !h(r, "GetScenceSunInfo")) {
                  o.next = 3;
                  break;
                }
                return o.abrupt("return", G(r, r.GetScenceSunInfo));
              case 3:
              case "end":
                return o.stop();
            }
        }, t, this);
      }));
      function e() {
        return n.apply(this, arguments);
      }
      return e;
    }()
  }, {
    key: "setSceneSunInfo",
    value: function(e) {
      var t = this._view3d;
      if (h(t, "SetScenceSunInfo"))
        return j(10, t, t.SetScenceSunInfo, e);
    }
  }, {
    key: "setNorthControl",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
      this._view3d.SetNorthControl(e, t, r, a);
    }
  }, {
    key: "close",
    value: function() {
      var e = this._view3d;
      h(e, "Close") && (e.Close(), this.destroy());
    }
  }, {
    key: "setParameters",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, t = this._view3d;
      t.SetParameters(e);
    }
  }, {
    key: "clear",
    value: function() {
      var e = this._view3d;
      h(e, "Clear") && e.Clear();
    }
  }, {
    key: "stop",
    value: function() {
      var e = this._view3d;
      h(e, "Stop") && e.Stop();
    }
  }, {
    key: "isClose",
    value: function() {
      var e = this._view3d;
      if (h(e, "IsClose"))
        return e.IsClose();
    }
  }, {
    key: "setMapStatus",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, t = this._view3d;
      h(t, "SetMapStatus") && t.SetMapStatus(e);
    }
  }]), i;
}(), ze;
function ao(i) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 300;
  ze = no(function() {
    i.setResolution(i.config.id);
  }, n), window.addEventListener("resize", ze);
}
function oo() {
  ze && window.removeEventListener("resize", ze);
}
function Kr(i, n) {
  var e = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(i);
    n && (t = t.filter(function(r) {
      return Object.getOwnPropertyDescriptor(i, r).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function be(i) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Kr(Object(e), !0).forEach(function(t) {
      d(i, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : Kr(Object(e)).forEach(function(t) {
      Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return i;
}
var kt = tt, uo = ce, $e = fe, so = /* @__PURE__ */ function() {
  function i(n, e) {
    R(this, i), this.view3d = n, this.viewer = e, this.duration = 3, this.timer = null;
  }
  return D(i, [{
    key: "init",
    value: function() {
      this.resetHome();
    }
  }, {
    key: "resetHome",
    value: function() {
      var e = this.view3d;
      h(e, "ResetHome") && e.ResetHome();
    }
  }, {
    key: "setPosition",
    value: function(e) {
      var t = this.view3d;
      kt(e) && h(t, "SetPosition") && t.SetPosition(e);
    }
  }, {
    key: "flyToPosition",
    value: function(e) {
      var t, r, a, o, u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.duration, l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, f = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : $e, c = this.view3d;
      (t = this.viewer) === null || t === void 0 || (r = t.core) === null || r === void 0 || r.showCover(), (a = this.viewer) === null || a === void 0 || (o = a.event) === null || o === void 0 || o.silent();
      var g = this;
      this.timer && clearTimeout(this.timer);
      var m = function(S) {
        var V, p, U, H;
        (V = g.viewer) === null || V === void 0 || (p = V.core) === null || p === void 0 || p.hideCover(), (U = g.viewer) === null || U === void 0 || (H = U.event) === null || H === void 0 || H.reBind(), uo(f) && setTimeout(function() {
          f(S);
        }, 100);
      };
      if (!e) {
        m();
        return;
      }
      if (kt(e))
        h(c, "FlyToPosition") && (c.FlyToPosition(e, u, s, l, function(_) {
          g.timer && (clearTimeout(g.timer), g.timer = null), m(_);
        }), this.timer = setTimeout(function() {
          m(null);
        }, this.duration + 0.5));
      else if (Array.isArray(e)) {
        var b = 0, C = null, A = function _() {
          var S = e[b], V = S.duration || s, p = function(H) {
            C && clearTimeout(C), b++, b === e.length ? (C = null, m(H)) : _();
          };
          c.FlyToPosition(S, u, V, l, p), C = setTimeout(p, (V + 0.2) * 1e3);
        };
        A();
      }
    }
  }, {
    key: "flyToPositionByOptions",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = {
        position: null,
        duration: 3,
        enableCurve: !1,
        showLocation: !1,
        onFinish: $e
      }, r = Object.assign({}, t, e);
      this.flyToPosition(r.position, r.showLocation, r.duration, r.enableCurve, r.onFinish);
    }
  }, {
    key: "flyToObject",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.duration, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, a = this.view3d;
      kt(e) && !!e.gid && h(a, "FlyToObject") && a.FlyToObject(e, r, t);
    }
  }, {
    key: "flyToObjectById",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = {
        gid: "",
        showLocation: !1,
        pitch: 90,
        yaw: 0,
        distance: null,
        duration: this.duration,
        enableCurve: !1,
        onFinish: function() {
          return null;
        }
      };
      if (e = be(be({}, t), e), !e.gid) {
        console.warn("object gid is undefined or ''.");
        return;
      }
      var r = this.view3d;
      h(r, "FlyToObjectById") && r.FlyToObjectById(e.gid, e.showLocation, e.pitch, e.distance, e.duration);
    }
  }, {
    key: "setNorth",
    value: function() {
      var e = this.view3d;
      h(e, "SetNorth") && e.SetNorth();
    }
  }, {
    key: "getHomePosition",
    value: function() {
      var e = this.view3d;
      if (h(e, "GetHomePosition"))
        return G(e, e.GetHomePosition);
    }
  }, {
    key: "getCurrentPosition",
    value: function() {
      var e = this.view3d;
      if (h(e, "GetCurrentPosition"))
        return G(e, e.GetCurrentPosition);
    }
  }, {
    key: "getScreenPosition",
    value: function(e) {
      var t = this.view3d;
      if (h(t, "GetScreenPosition"))
        return G(t, t.GetScrrenPosition, e);
    }
  }, {
    key: "flyToObjectByType",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = {
        type: 10102,
        pitch: 90,
        yaw: 0,
        distance: 100,
        duration: this.duration,
        heightRadio: 1,
        enableCurve: !1,
        onFinish: $e
      };
      e = be(be({}, t), e);
      var r = this.view3d;
      if (h(r, "FlyToObjectByType"))
        return j.apply(void 0, [10, r, r.FlyToObjectByType].concat(je(e)));
    }
  }, {
    key: "flyToObjectByIds",
    value: function(e) {
      var t = {
        ids: [],
        pitch: 90,
        yaw: 0,
        distance: 100,
        duration: this.duration,
        heightRadio: 1,
        enableCurve: !1,
        onFinish: $e
      };
      e = be(be({}, t), e);
      var r = this.view3d;
      if (h(r, "FlyToObjectByIds"))
        return j.apply(void 0, [10, r, r.FlyToObjectByIds].concat(je(e)));
    }
  }, {
    key: "zoomIn",
    value: function() {
      var n = W(/* @__PURE__ */ L.mark(function t() {
        var r;
        return L.wrap(function(o) {
          for (; ; )
            switch (o.prev = o.next) {
              case 0:
                if (r = this.view3d, !h(r, "ZoomIn")) {
                  o.next = 3;
                  break;
                }
                return o.abrupt("return", j(10, r, r.ZoomIn));
              case 3:
              case "end":
                return o.stop();
            }
        }, t, this);
      }));
      function e() {
        return n.apply(this, arguments);
      }
      return e;
    }()
  }, {
    key: "zoomOut",
    value: function() {
      var n = W(/* @__PURE__ */ L.mark(function t() {
        var r;
        return L.wrap(function(o) {
          for (; ; )
            switch (o.prev = o.next) {
              case 0:
                if (r = this.view3d, !h(r, "ZoomOut")) {
                  o.next = 3;
                  break;
                }
                return o.abrupt("return", j(10, r, r.ZoomOut));
              case 3:
              case "end":
                return o.stop();
            }
        }, t, this);
      }));
      function e() {
        return n.apply(this, arguments);
      }
      return e;
    }()
  }, {
    key: "setPitchAngle",
    value: function() {
      var n = W(/* @__PURE__ */ L.mark(function t(r) {
        var a;
        return L.wrap(function(u) {
          for (; ; )
            switch (u.prev = u.next) {
              case 0:
                if (a = this.view3d, !h(a, "SetPitchAngle")) {
                  u.next = 3;
                  break;
                }
                return u.abrupt("return", j(100, a, a.SetPitchAngle, r));
              case 3:
              case "end":
                return u.stop();
            }
        }, t, this);
      }));
      function e(t) {
        return n.apply(this, arguments);
      }
      return e;
    }()
  }, {
    key: "getPitchAngle",
    value: function() {
      var n = W(/* @__PURE__ */ L.mark(function t(r) {
        var a;
        return L.wrap(function(u) {
          for (; ; )
            switch (u.prev = u.next) {
              case 0:
                if (a = this.view3d, !h(a, "GetPitchAngle")) {
                  u.next = 3;
                  break;
                }
                return u.abrupt("return", G(a, a.GetPitchAngle));
              case 3:
              case "end":
                return u.stop();
            }
        }, t, this);
      }));
      function e(t) {
        return n.apply(this, arguments);
      }
      return e;
    }()
  }, {
    key: "setRotateAngle",
    value: function() {
      var n = W(/* @__PURE__ */ L.mark(function t(r) {
        var a;
        return L.wrap(function(u) {
          for (; ; )
            switch (u.prev = u.next) {
              case 0:
                if (a = this.view3d, !h(a, "SetRotateAngle")) {
                  u.next = 3;
                  break;
                }
                return u.abrupt("return", j(100, a, a.SetRotateAngle, r));
              case 3:
              case "end":
                return u.stop();
            }
        }, t, this);
      }));
      function e(t) {
        return n.apply(this, arguments);
      }
      return e;
    }()
  }, {
    key: "getRotateAngle",
    value: function() {
      var n = W(/* @__PURE__ */ L.mark(function t(r) {
        var a;
        return L.wrap(function(u) {
          for (; ; )
            switch (u.prev = u.next) {
              case 0:
                if (a = this.view3d, !h(a, "GetRotateAngle")) {
                  u.next = 3;
                  break;
                }
                return u.abrupt("return", G(a, a.GetRotateAngle));
              case 3:
              case "end":
                return u.stop();
            }
        }, t, this);
      }));
      function e(t) {
        return n.apply(this, arguments);
      }
      return e;
    }()
  }, {
    key: "rotate",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = {
        gid: "",
        pitch: 90,
        radio: 1,
        distance: 10,
        highlight: !0
      };
      e = be(be({}, t), e);
      var r = this.view3d;
      h(r, "Rotate") && r.Rotate(e.pitch, e.radio, e.distance, e.gid, e.highlight);
    }
  }]), i;
}();
function Gr(i, n) {
  var e = typeof Symbol < "u" && i[Symbol.iterator] || i["@@iterator"];
  if (!e) {
    if (Array.isArray(i) || (e = lo(i)) || n && i && typeof i.length == "number") {
      e && (i = e);
      var t = 0, r = function() {
      };
      return { s: r, n: function() {
        return t >= i.length ? { done: !0 } : { done: !1, value: i[t++] };
      }, e: function(l) {
        throw l;
      }, f: r };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, o = !1, u;
  return { s: function() {
    e = e.call(i);
  }, n: function() {
    var l = e.next();
    return a = l.done, l;
  }, e: function(l) {
    o = !0, u = l;
  }, f: function() {
    try {
      !a && e.return != null && e.return();
    } finally {
      if (o)
        throw u;
    }
  } };
}
function lo(i, n) {
  if (!!i) {
    if (typeof i == "string")
      return qr(i, n);
    var e = Object.prototype.toString.call(i).slice(8, -1);
    if (e === "Object" && i.constructor && (e = i.constructor.name), e === "Map" || e === "Set")
      return Array.from(i);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return qr(i, n);
  }
}
function qr(i, n) {
  (n == null || n > i.length) && (n = i.length);
  for (var e = 0, t = new Array(n); e < n; e++)
    t[e] = i[e];
  return t;
}
var co = Ae, Wr = ce, x = fe, fo = /* @__PURE__ */ function() {
  function i(n, e) {
    R(this, i), this._view3d = n, this._drawCtl = e, this.config = e.config, this.mapViewer = e._mapView;
  }
  return D(i, [{
    key: "_draw",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        isOnce: !1,
        onDraw: x,
        onFinish: x,
        drawPoints: !0,
        pointsVisible: !0
      }, r = this.mapViewer, a = t.onDraw, o = t.onFinish, u = t.drawPoints;
      t.pointsVisible;
      var s = t.isOnce, l = this, f = null, c = [];
      r.event.silent();
      var g = this._drawCtl, m = function b() {
        if (g.overLayerStopEdit(), window.removeEventListener("contextmenu", b), u) {
          var C = Gr(c), A;
          try {
            for (C.s(); !(A = C.n()).done; ) {
              var _ = A.value;
              g.overLayerRemoveObject(_);
            }
          } catch (S) {
            C.e(S);
          } finally {
            C.f();
          }
        }
        r.event.reBind(), Wr(o) && o(f);
      };
      window.addEventListener("contextmenu", m), g.overLayerStartEdit(e, function(b) {
        if (f = b, co(b.points) && u) {
          var C = Gr(b.points.slice(c.length)), A;
          try {
            for (C.s(); !(A = C.n()).done; ) {
              var _ = A.value;
              l.point({
                radius: 5,
                color: e.color,
                location: _
              }, !1).then(function(S) {
                c.push(S);
              });
            }
          } catch (S) {
            C.e(S);
          } finally {
            C.f();
          }
        }
        Wr(a) && a(b), s && m();
      });
    }
  }, {
    key: "text",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = this._drawCtl, a = this.config.text(e);
      return r.overLayerCreateObject(a, t);
    }
  }, {
    key: "drawText",
    value: function(e) {
      var t = this.config.text(e), r = {
        isOnce: !0,
        onFinish: e.onFinish || x
      };
      this._draw(t, r);
    }
  }, {
    key: "model",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = this._drawCtl;
      return r.overLayerCreateObject(this.config.model(e), t);
    }
  }, {
    key: "drawModel",
    value: function(e) {
      var t = this.config.model(e), r = {
        isOnce: !0,
        onFinish: e.onFinish || x
      };
      this._draw(t, r);
    }
  }, {
    key: "image",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = this._drawCtl;
      return r.overLayerCreateObject(this.config.image(e), t);
    }
  }, {
    key: "drawImage",
    value: function(e) {
      var t = this.config.image(e), r = {
        isOnce: !0,
        onFinish: e.onFinish || x
      };
      this._draw(t, r);
    }
  }, {
    key: "point",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return this.circle(this.config.point(e), t);
    }
  }, {
    key: "drawPoint",
    value: function(e) {
      var t = this.config.point(e), r = {
        isOnce: !0,
        onFinish: e.onFinish || x
      };
      this._draw(t, r);
    }
  }, {
    key: "line",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return (!e.points || e.points.length < 2) && Qe("\u521B\u5EFA\u7EBF\uFF0C\u5FC5\u987B\u63D0\u4F9B points \u53C2\u6570\uFF0C\u4E14\u81F3\u5C11\u5305\u542B\u4E24\u4E2A\u53CA\u4EE5\u4E0A\u4E2A\u70B9\uFF01"), this._drawCtl.overLayerCreateObject(this.config.line(e), t);
    }
  }, {
    key: "drawLine",
    value: function(e) {
      var t = this.config.line(e), r = {
        isOnce: !0,
        onDraw: e.onDraw || x,
        onFinish: e.onFinish || x,
        drawPoints: e.drawPoints || !1,
        pointsVisible: e.pointsVisible || !1
      };
      this._draw(t, r);
    }
  }, {
    key: "polygon",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return this._drawCtl.overLayerCreateObject(this.config.polygon(e), t);
    }
  }, {
    key: "drawPolygon",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = this.config.polygon(e), r = {
        onDraw: e.onDraw || x,
        onFinish: e.onFinish || x,
        drawPoints: e.drawPoints || !0,
        pointsVisible: e.pointsVisible || !0
      };
      this._draw(t, r);
    }
  }, {
    key: "circle",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return this._drawCtl.overLayerCreateObject(this.config.circle(e), t);
    }
  }, {
    key: "imageLabel",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return this._drawCtl.overLayerCreateObject(this.config.imageLabel(e), t);
    }
  }, {
    key: "drawImageLabel",
    value: function(e) {
      var t = this.config.imageLabel(e), r = {
        isOnce: !0,
        onFinish: e.onFinish || x
      };
      this._draw(t, r);
    }
  }, {
    key: "polygon3d",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return this._drawCtl.overLayerCreateObject(this.config.polygon3d(e), t);
    }
  }, {
    key: "drawPolygon3d",
    value: function(e) {
      var t = this.config.polygon3d(e), r = {
        isOnce: !0,
        onFinish: e.onFinish || x
      };
      this._draw(t, r);
    }
  }, {
    key: "triangle",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return this._drawCtl.overLayerCreateObject(this.config.triangle(e), t);
    }
  }, {
    key: "drawTriangle",
    value: function(e) {
      var t = this.config.triangle(e), r = {
        isOnce: !0,
        onFinish: e.onFinish || x
      };
      this._draw(t, r);
    }
  }, {
    key: "rect",
    value: function(e, t) {
      return this._drawCtl.overLayerCreateObject(this.config.rect(e), t);
    }
  }, {
    key: "drawRect",
    value: function(e) {
      var t = this.config.rect(e), r = {
        isOnce: !0,
        onFinish: e.onFinish || x
      };
      this._draw(t, r);
    }
  }, {
    key: "regularPolygon",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return this._drawCtl.overLayerCreateObject(this.config.regularPolygon(e), t);
    }
  }, {
    key: "drawRegularPolygon",
    value: function(e) {
      var t = this.config.regularPolygon(e), r = {
        isOnce: !0,
        onFinish: e.onFinish || x
      };
      this._draw(t, r);
    }
  }, {
    key: "shape",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return this._drawCtl.overLayerCreateObject(this.config.shape(e), t);
    }
  }, {
    key: "drawShape",
    value: function(e) {
      var t = this.config.shape(e), r = {
        isOnce: !0,
        onFinish: e.onFinish || x
      };
      this._draw(t, r);
    }
  }, {
    key: "box",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return this._drawCtl.overLayerCreateObject(this.config.box(e), t);
    }
  }, {
    key: "drawBox",
    value: function(e) {
      var t = this.config.box(e), r = {
        isOnce: !0,
        onFinish: e.onFinish || x
      };
      this._draw(t, r);
    }
  }, {
    key: "pyramid",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return this._drawCtl.overLayerCreateObject(this.config.pyramid(e), t);
    }
  }, {
    key: "drawPyramid",
    value: function(e) {
      var t = this.config.pyramid(e), r = {
        isOnce: !0,
        onFinish: e.onFinish || x
      };
      this._draw(t, r);
    }
  }, {
    key: "cone",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return this._drawCtl.overLayerCreateObject(this.config.cone(e), t);
    }
  }, {
    key: "drawCone",
    value: function(e) {
      var t = this.config.cone(e), r = {
        isOnce: !0,
        onFinish: e.onFinish || x
      };
      this._draw(t, r);
    }
  }, {
    key: "cylinder",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return this._drawCtl.overLayerCreateObject(this.config.cylinder(e), t);
    }
  }, {
    key: "drawCylinder",
    value: function(e) {
      var t = this.config.cylinder(e), r = {
        isOnce: !0,
        onFinish: e.onFinish || x
      };
      this._draw(t, r);
    }
  }, {
    key: "sphere",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return this._drawCtl.overLayerCreateObject(this.config.sphere, t);
    }
  }, {
    key: "drawSphere",
    value: function(e) {
      var t = this.config.sphere(e), r = {
        isOnce: !0,
        onFinish: e.onFinish || x
      };
      this._draw(t, r);
    }
  }, {
    key: "skeleton",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return this._drawCtl.overLayerCreateObject(this.config.skeleton, t);
    }
  }, {
    key: "billBoard",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return this._drawCtl.overLayerCreateObject(this.config.billBoard(e), t);
    }
  }, {
    key: "vlcMedia",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return this._drawCtl.overLayerCreateObject(this.config.vlcMedia(e), t);
    }
  }, {
    key: "routeModel",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return this._drawCtl.overLayerCreateObject(this.config.routeModel(e), t);
    }
  }, {
    key: "layer",
    value: function(e) {
      return this._drawCtl.layerLoadAsync(this.config.layer(e));
    }
  }, {
    key: "layerDynamic",
    value: function(e) {
      return this._drawCtl.layerLoadAsync(this.config.layerDynamic(e));
    }
  }, {
    key: "route",
    value: function(e) {
      return this._drawCtl.createRoute(this.config.route(e));
    }
  }]), i;
}(), vo = /* @__PURE__ */ function() {
  function i(n, e) {
    R(this, i), this._view3d = n, this._drawCtl = e;
  }
  return D(i, [{
    key: "one",
    value: function(e) {
      return this._drawCtl.findObjectById(e);
    }
  }, {
    key: "all",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "*";
      return this._drawCtl.findObjectByPrefix(e);
    }
  }]), i;
}(), ho = /* @__PURE__ */ D(function i(n) {
  R(this, i), this._view3d = n;
}), go = /* @__PURE__ */ function() {
  function i(n, e) {
    R(this, i), this._view3d = n, this._drawCtl = e;
  }
  return D(i, [{
    key: "all",
    value: function() {
      this._drawCtl.overLayerRemoveAll();
    }
  }, {
    key: "one",
    value: function(e) {
      this._drawCtl.overLayerRemoveObject(e);
    }
  }, {
    key: "oneById",
    value: function(e) {
      return this._drawCtl.overLayerRemoveObjectById(e);
    }
  }]), i;
}(), po = /* @__PURE__ */ D(function i() {
  R(this, i), this.LINE = {
    SIM_ARRAW: "sim_arraw",
    SIM_DOT: "sim_dot",
    SIM_DASHED: "sim_dashed",
    SIM_FLASH: "sim_flash",
    SIM_CAN: "sim_scan"
  };
});
const mo = new po();
var tr = "10001", rr = "10001_01", nr = "10001_02", ir = "10001_03", ar = "10001_05", nt = "10002", or = "10002_01", yo = "10003", ai = "10004", ur = "10004_01", sr = "10004_02", bo = "10005", wo = "10006", Co = "10007", Oo = "10008", ko = "10009", lr = "10010", _o = "10010_01", Eo = "10012", So = "10013", Io = "10014", it = {
  text: {
    type: 10002,
    typeName: "label"
  },
  model: {
    type: 10002,
    typeName: "model"
  },
  image: {
    type: 10102,
    typeName: "image"
  },
  point: {
    type: 10002,
    typeName: "circle"
  },
  line: {
    type: 10002,
    typeName: "linestring"
  },
  polygon: {
    type: 10002,
    typeName: "polygon"
  },
  circle: {
    type: 10002,
    typeName: "circle"
  },
  imageLabel: {
    type: 10002,
    typeName: "imageLabel"
  },
  polygon3d: {
    type: 10002,
    typeName: "polygon3d"
  },
  triangle: {
    type: 10002,
    typeName: "triangle"
  },
  rect: {
    type: 10002,
    typeName: "rect"
  },
  regularPolygon: {
    type: 10002,
    typeName: "regularPolygon"
  },
  shape: {
    type: 10002,
    typeName: "shape"
  },
  box: {
    type: 10002,
    typeName: "box"
  },
  pyramid: {
    type: 10002,
    typeName: "pyramid"
  },
  cone: {
    type: 10002,
    typeName: "cone"
  },
  cylinder: {
    type: 10002,
    typeName: "cylinder"
  },
  sphere: {
    type: 10002,
    typeName: "sphere"
  },
  skeleton: {
    type: 10002,
    typeName: "skeleton"
  },
  billBoard: {
    type: 10002,
    typeName: "webbrowser"
  },
  media: {
    type: 10002,
    typeName: "media"
  },
  dynamicModel: {
    type: 10002,
    typeName: "dynamicModel"
  },
  routeModel: {
    type: 10002,
    typeName: "routeModel"
  },
  layer: {
    type: 10002,
    typeName: "MLT_LAYER_SHAPE"
  },
  layerDynamic: {
    type: 10002,
    typeName: "MLT_LAYER_POS_DYNAMIC"
  },
  route: {
    type: 10002,
    typeName: "route_patrol"
  },
  videoSequence: {
    type: 10002,
    typeName: "video_sequence"
  },
  video: {
    type: 10002,
    typeName: "video_rtsp"
  },
  videoProjection: {
    type: 10002,
    typeName: "media2"
  },
  region: {
    type: 10002,
    typeName: "region"
  },
  heatmap: {
    type: 10002,
    typeName: "heatmap_rect"
  }
};
const oi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CATEGORY_CAMERA: tr,
  CAMERA_TYPE_BOX: rr,
  CAMERA_TYPE_SPEED_DOME: nr,
  CAMERA_TYPE_DOME: ir,
  CATEGORY_BAYONET: ar,
  CATEGORY_DOOR: nt,
  CATEGORY_DOOR_HK_FACE_ACCESS_TERMINAL: or,
  CATEGORY_FIRE_EXTINGUISHING: yo,
  CATEGORY_INTERCOM: ai,
  CATEGORY_INTERCOM_HK_INDOOR: ur,
  CATEGORY_INTERCOM_HK_OUTDOOR: sr,
  CATEGORY_BROADCAST: bo,
  CATEGORY_ALARM: wo,
  CATEGORY_LIGAN: Co,
  CATEGORY_WINDOW: Oo,
  CATEGORY_BED: ko,
  CATEGORY_FACE: lr,
  CATEGORY_FACE_HK_400: _o,
  CATEGORY_AGV: Eo,
  CATEGORY_CAR: So,
  CATEGORY_ROBOT: Io,
  TYPE: it
}, Symbol.toStringTag, { value: "Module" }));
function zr(i, n) {
  var e = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(i);
    n && (t = t.filter(function(r) {
      return Object.getOwnPropertyDescriptor(i, r).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function M(i) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? zr(Object(e), !0).forEach(function(t) {
      d(i, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : zr(Object(e)).forEach(function(t) {
      Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return i;
}
var P = it, N = Xt, Ao = /* @__PURE__ */ function() {
  function i() {
    R(this, i);
  }
  return D(i, [{
    key: "getTypeName",
    value: function(e) {
      return e.typeName;
    }
  }, {
    key: "mergeConfig",
    value: function(e) {
      return e.id || (e.id = Zt()), e.gid || (e.gid = e.id), M(M({}, e), {}, {
        attr: M(M({}, e.attr), {}, {
          gid: e.gid || e.id
        })
      });
    }
  }, {
    key: "text",
    value: function(e) {
      return this.mergeConfig(M({
        type: this.getTypeName(P.text),
        text: "",
        font: "\u9ED1\u4F53",
        fontcolor: "#ffffff",
        fontsize: 24,
        halign: "center",
        valign: "bottom",
        location: null
      }, N(e)));
    }
  }, {
    key: "model",
    value: function(e) {
      return this.mergeConfig(M({
        type: this.getTypeName(P.model),
        filename: "default",
        scale: 1,
        style: "red",
        location: null
      }, N(e)));
    }
  }, {
    key: "image",
    value: function(e) {
      return this.mergeConfig(M({
        type: this.getTypeName(P.image),
        style: "default",
        scale: 1,
        screen: !0,
        location: null
      }, N(e)));
    }
  }, {
    key: "point",
    value: function(e) {
      return this.mergeConfig(M({
        type: this.getTypeName(P.point),
        radius: 10,
        color: "red",
        location: null
      }, N(e)));
    }
  }, {
    key: "line",
    value: function(e) {
      return this.mergeConfig(M({
        type: this.getTypeName(P.line),
        style: "red",
        linewidth: 10,
        points: []
      }, N(e)));
    }
  }, {
    key: "polygon",
    value: function(e) {
      return this.mergeConfig(M({
        type: this.getTypeName(P.polygon),
        points: [],
        color: "#00ff00",
        linecolor: "#00ff00",
        lineWidth: 1,
        linevisible: !0
      }, N(e)));
    }
  }, {
    key: "circle",
    value: function(e) {
      return this.mergeConfig(M({
        type: this.getTypeName(P.circle),
        radius: 10,
        color: "red",
        location: null
      }, N(e)));
    }
  }, {
    key: "imageLabel",
    value: function(e) {
      return this.mergeConfig(M({
        type: this.getTypeName(P.imageLabel),
        lighting: !0,
        iconstyle: "default.png",
        text: "\u6D4B\u8BD5\u6587\u672C",
        fontcolor: "#ffffff",
        fontbg: "",
        fontsize: 32,
        style: "white",
        pwidth: 1,
        pheight: 50,
        scale: 1,
        screen: !1,
        offsetx: 0,
        offsety: 0,
        location: null
      }, N(e)));
    }
  }, {
    key: "polygon3d",
    value: function(e) {
      return this.mergeConfig(M({
        type: this.getTypeName(P.polygon3d),
        style: "green",
        color: "#0000ff",
        linewidth: 5,
        linestyle: "green",
        linecolor: "#0000ff",
        linevisible: !0,
        roofvisible: !1,
        roofheight: 400,
        edgestyle: "green",
        edgecolor: "#0000ff",
        edgeheight: 400,
        points: []
      }, N(e)));
    }
  }, {
    key: "triangle",
    value: function(e) {
      return this.mergeConfig(M({
        type: this.getTypeName(P.triangle),
        color: "#ffffff",
        points: []
      }, N(e)));
    }
  }, {
    key: "rect",
    value: function(e) {
      return this.mergeConfig(M({
        type: this.getTypeName(P.rect),
        length: 100,
        width: 100,
        color: "#ffffff",
        location: null
      }, N(e)));
    }
  }, {
    key: "regularPolygon",
    value: function(e) {
      return this.mergeConfig(M({
        type: this.getTypeName(P.regularPolygon),
        radius: 100,
        num: 5,
        color: "#ffffff",
        location: null
      }, N(e)));
    }
  }, {
    key: "shape",
    value: function(e) {
      return this.mergeConfig(M({
        type: this.getTypeName(P.shape),
        scale: 1,
        style: "box",
        color: "#ffffff",
        location: null
      }, N(e)));
    }
  }, {
    key: "box",
    value: function(e) {
      return this.mergeConfig(M({
        type: this.getTypeName(P.box),
        length: 100,
        width: 100,
        height: 100,
        color: "#ffffff",
        location: null
      }, N(e)));
    }
  }, {
    key: "pyramid",
    value: function(e) {
      return this.mergeConfig(M({
        type: this.getTypeName(P.pyramid),
        radius: 100,
        height: 100,
        color: "#ffffff",
        location: null
      }, N(e)));
    }
  }, {
    key: "cone",
    value: function(e) {
      return this.mergeConfig(M({
        type: this.getTypeName(P.cone),
        radius: 100,
        height: 100,
        color: "#ffffff",
        location: null
      }, N(e)));
    }
  }, {
    key: "cylinder",
    value: function(e) {
      return this.mergeConfig(M({
        type: this.getTypeName(P.cylinder),
        radius: 100,
        height: 100,
        color: "#ffffff",
        location: null
      }, N(e)));
    }
  }, {
    key: "sphere",
    value: function(e) {
      return this.mergeConfig(M({
        type: this.getTypeName(P.sphere),
        scale: 1,
        radius: 100,
        color: "#ffffff",
        location: null
      }, N(e)));
    }
  }, {
    key: "skeleton",
    value: function(e) {
      return this.mergeConfig(M({
        type: this.getTypeName(P.skeleton),
        filename: "person",
        scale: 1,
        color: "#ffffff",
        location: null
      }, N(e)));
    }
  }, {
    key: "billBoard",
    value: function(e) {
      return this.mergeConfig(M({
        type: this.getTypeName(P.billBoard),
        url: "",
        width: 100,
        height: 100,
        screen: !0,
        location: null
      }, N(e)));
    }
  }, {
    key: "media",
    value: function(e) {
      return this.mergeConfig(M({
        type: this.getTypeName(P.media),
        url: "",
        screen: !0,
        scale: 1,
        width: 100,
        height: 100,
        location: null
      }, N(e)));
    }
  }, {
    key: "dynamicModel",
    value: function(e) {
      return this.mergeConfig(M({
        type: this.getTypeName(P.dynamicModel),
        scale: 1,
        filename: "",
        location: null
      }, N(e)));
    }
  }, {
    key: "routeModel",
    value: function(e) {
      return this.mergeConfig(M({
        type: this.getTypeName(P.routeModel),
        scale: 1,
        speed: 20,
        filename: "default",
        points: [],
        location: null
      }, N(e)));
    }
  }, {
    key: "layer",
    value: function(e) {
      return this.mergeConfig(M({
        type: this.getTypeName(P.layer),
        shapes: []
      }, N(e)));
    }
  }, {
    key: "layerDynamic",
    value: function(e) {
      return this.mergeConfig(M({
        type: this.getTypeName(P.layerDynamic),
        speed: 10,
        shapes: []
      }, N(e)));
    }
  }, {
    key: "route",
    value: function(e) {
      return this.mergeConfig(M({
        type: this.getTypeName(P.route),
        visible: !0,
        style: "sim_arraw",
        showloc: !0,
        width: 100,
        speed: 2e3,
        distance: 1e3,
        pitch: 35,
        iselev: !0,
        geom: []
      }, N(e)));
    }
  }, {
    key: "videoSequence",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return {
        type: this.getTypeName(P.videoSequence),
        id: e
      };
    }
  }, {
    key: "video",
    value: function(e) {
      return M({
        type: this.getTypeName(P.video),
        url: "",
        width: 10,
        height: 10,
        position: null
      }, N(e));
    }
  }, {
    key: "videoProjection",
    value: function(e) {
      return this.mergeConfig(M({
        type: this.getTypeName(P.videoProjection),
        url: "",
        width: 50,
        height: 45,
        bwidth: 10,
        barch: 5,
        points: [],
        location: null
      }, N(e)));
    }
  }, {
    key: "region",
    value: function(e) {
      return M({
        type: this.getTypeName(P.region),
        style: "default",
        geom: null
      }, N(e));
    }
  }, {
    key: "heatmap",
    value: function(e) {
      return M({
        type: this.getTypeName(P.heatmap),
        pheight: 100,
        minx: 0,
        miny: 0,
        maxx: 0,
        maxy: 0,
        gradient: {},
        points: []
      }, N(e));
    }
  }]), i;
}();
const Lo = new Ao();
function Yr(i, n) {
  var e = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(i);
    n && (t = t.filter(function(r) {
      return Object.getOwnPropertyDescriptor(i, r).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function Ro(i) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Yr(Object(e), !0).forEach(function(t) {
      d(i, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : Yr(Object(e)).forEach(function(t) {
      Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return i;
}
var Do = et, De = fe, Bo = Xt, Mo = /* @__PURE__ */ function() {
  function i(n, e) {
    R(this, i), this._view3d = n, this._event = e.event, this._mapView = e, this.config = Lo, this.create = new fo(n, this), this.find = new vo(n, this), this.remove = new go(n, this), this.update = new ho(n, this), this.ACTOR = mo;
  }
  return D(i, [{
    key: "overLayerSelectObjectEdit",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : De, t = this._view3d, r = this;
      if (h(t, "OverLayerSelectObjectEdit")) {
        var a = function o() {
          r.overLayerStopEdit(), window.removeEventListener("contextmenu", o);
        };
        window.addEventListener("contextmenu", a), t.OverLayerSelectObjectEdit(function(o) {
          e && e(o);
        });
      }
    }
  }, {
    key: "overLayerStartEdit",
    value: function(e, t) {
      var r = this._view3d;
      if (h(r, "OverLayerStartEdit"))
        return j(10, r, r.OverLayerStartEdit, function() {
          r.OverLayerStartEdit(e, t);
        });
    }
  }, {
    key: "overLayerStopEdit",
    value: function() {
      var e = this, t = this._view3d;
      if (h(t, "OverLayerStopEdit"))
        return j(10, t, t.OverLayerStopEdit, function() {
          e._event.reBind();
        });
    }
  }, {
    key: "overLayerCreateObject",
    value: function() {
      var e = this, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Do, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, a = this._view3d;
      if (h(a, "OverLayerCreateObject"))
        return G(a, a.OverLayerCreateObject, t, function(o) {
          r && e._event.reBind();
        });
    }
  }, {
    key: "overLayerCreateObjects",
    value: function() {
      var e = this, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      t.length > 200 && console.warn("OverLayerCreateObjects \u4E00\u6B21\u521B\u5EFA\u5BF9\u8C61\u7684\u6570\u91CF\u4E0D\u5E94\u8D85\u8FC7200\u4E2A\uFF0C\u4E0D\u7136\u6709\u5931\u8D25\u7684\u98CE\u9669\u3002");
      var a = this._view3d;
      if (h(a, "OverLayerCreateObjects"))
        return G(a, a.OverLayerCreateObjects, t, function() {
          r && e._event.reBind();
        });
    }
  }, {
    key: "findObjectById",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = this._view3d;
      if (h(t, "FindObjectById"))
        return G(t, t.FindObjectById, e);
    }
  }, {
    key: "findObjectByPrefix",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 200, r = this._view3d;
      if (h(r, "FindObjectByPrefix"))
        return G(r, r.FindObjectByPrefix, e, t);
    }
  }, {
    key: "overLayerUpdateObject",
    value: function(e) {
      var t = this._view3d;
      h(t, "OverLayerUpdateObject") && t.OverLayerUpdateObject(e);
    }
  }, {
    key: "overLayerUpdateObjectAsync",
    value: function(e) {
      var t = this._view3d;
      if (h(t, "OverLayerUpdateObject"))
        return j(20, t, t.OverLayerUpdateObject, e);
    }
  }, {
    key: "updateObjectStyle",
    value: function(e, t) {
      var r = this._view3d;
      h(r, "UpdateObjectStyle") && r.UpdateObjectStyle(e, t);
    }
  }, {
    key: "updateObjectStyleAsync",
    value: function(e, t) {
      var r = this._view3d;
      if (h(r, "UpdateObjectStyle"))
        return j(20, r, r.UpdateObjectStyle, e, t);
    }
  }, {
    key: "updateObject",
    value: function(e) {
      var t = this._view3d;
      h(t, "UpdateObject") && t.UpdateObject(e);
    }
  }, {
    key: "updateObjectAsync",
    value: function(e) {
      var t = this._view3d;
      if (h(t, "UpdateObject"))
        return j(20, t, t.UpdateObject, e);
    }
  }, {
    key: "updateObjects",
    value: function(e) {
      var t = this._view3d;
      h(t, "UpdateObjects") && t.UpdateObjects(e);
    }
  }, {
    key: "resetObjects",
    value: function() {
      var e = this._view3d;
      h(e, "ResetObjects") && e.ResetObjects();
    }
  }, {
    key: "updateObjectsAsync",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100, r = this._view3d;
      if (h(r, "UpdateObjects"))
        return j(t, r, r.UpdateObjects, e);
    }
  }, {
    key: "clearObjectStyle",
    value: function() {
      var e = this._view3d;
      h(e, "ClearObjectStyle") && e.ClearObjectStyle();
    }
  }, {
    key: "getObjectsVisible",
    value: function() {
      var e = this._view3d;
      if (h(e, "GetObjectsVisible"))
        return G(e, e.GetObjectsVisible);
    }
  }, {
    key: "setObjectsVisible",
    value: function(e) {
      var t = this._view3d;
      h(t, "SetObjectsVisible") && t.SetObjectsVisible(e);
    }
  }, {
    key: "setObjectsVisibleAsync",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100, r = this._view3d;
      if (h(r, "SetObjectsVisible"))
        return j(t, r, r.SetObjectsVisible, e);
    }
  }, {
    key: "updateObjectVisible",
    value: function(e, t) {
      var r = this._view3d;
      h(r, "UpdateObjectVisible") && r.UpdateObjectVisible(e, t);
    }
  }, {
    key: "updateObjectVisibleAsync",
    value: function(e, t) {
      var r = this._view3d;
      if (h(r, "UpdateObjectVisible"))
        return j(10, r, r.UpdateObjectVisible, e, t);
    }
  }, {
    key: "overLayerRemoveObject",
    value: function(e) {
      var t = this._view3d;
      h(t, "OverLayerRemoveObject") && t.OverLayerRemoveObject(e);
    }
  }, {
    key: "overLayerRemoveObjectById",
    value: function(e) {
      var t = this._view3d;
      if (h(t, "OverLayerRemoveObjectById"))
        return j(20, t, t.OverLayerRemoveObjectById, e);
    }
  }, {
    key: "overLayerRemoveObjectsById",
    value: function(e) {
      var t = this._view3d;
      if (h(t, "OverLayerRemoveObjectsById"))
        return j(20, t, t.OverLayerRemoveObjectsById, e);
    }
  }, {
    key: "overLayerRemoveAll",
    value: function() {
      var e = this._view3d;
      h(e, "OverLayerRemoveAll") && e.OverLayerRemoveAll();
    }
  }, {
    key: "setObjectHighlight",
    value: function(e) {
      var t = this._view3d;
      if (h(t, "SetObjectHighlight"))
        return j(20, t, t.SetObjectHighlight, e);
    }
  }, {
    key: "setObjectsHighlightByPrefix",
    value: function(e) {
      if (!!e) {
        var t = this._view3d;
        h(t, "SetObjectsHighlightByPrefix") && t.SetObjectsHighlightByPrefix(e);
      }
    }
  }, {
    key: "clearHighlight",
    value: function() {
      var e = this, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 20, a = this._view3d;
      if (h(a, "ClearHighlight"))
        return j(r, a, a.ClearHighlight, function() {
          t && e._event.reBind();
        });
    }
  }, {
    key: "layerLoad",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : De, r = this._view3d;
      h(r, "LayerLoad") && r.LayerLoad(e, function(a) {
        t(a);
      });
    }
  }, {
    key: "layerLoadAsync",
    value: function(e) {
      var t = this._view3d;
      if (h(t, "LayerLoad"))
        return G(t, t.LayerLoad, e);
    }
  }, {
    key: "layerSetVisible",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = this._view3d;
      h(r, "LayerSetVisible") && r.LayerSetVisible(e, t);
    }
  }, {
    key: "layerSetVisibleAsync",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = this._view3d;
      if (h(r, "LayerSetVisible"))
        return j(20, r, r.LayerSetVisible, e, t);
    }
  }, {
    key: "layerRemove",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = this._view3d;
      h(t, "LayerRemove") && t.LayerRemove(e);
    }
  }, {
    key: "layerRemoveAsync",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = this._view3d;
      if (h(t, "LayerRemove"))
        return j(20, t, t.LayerRemove, e);
    }
  }, {
    key: "layerReLoad",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : De, r = this._view3d;
      h(r, "LayerReLoad") && r.LayerReLoad(e, t);
    }
  }, {
    key: "layerReLoadAsync",
    value: function(e) {
      var t = this._view3d;
      if (h(t, "LayerReLoad"))
        return G(t, t.LayerReLoad, e);
    }
  }, {
    key: "createRoute",
    value: function(e) {
      var t = this._view3d;
      if (h(t, "CreateRoute"))
        return G(t, t.CreateRoute, e);
    }
  }, {
    key: "playRoute",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : De, t = this._view3d;
      h(t, "CreateRoute") && t.PlayRoute(function(r) {
        e(r);
      });
    }
  }, {
    key: "pauseRoute",
    value: function() {
      var e = this._view3d;
      h(e, "PauseRoute") && e.PauseRoute();
    }
  }, {
    key: "resumeRoute",
    value: function(e) {
      var t = this._view3d;
      h(t, "resumeRoute") && t.ResumeRoute(e);
    }
  }, {
    key: "stopRoute",
    value: function() {
      var e = this._view3d;
      h(e, "StopRoute") && e.StopRoute();
    }
  }, {
    key: "playSequence",
    value: function(e) {
      var t = this._view3d;
      h(t, "PlaySequence") && t.PlaySequence(e);
    }
  }, {
    key: "pauseSequence",
    value: function(e) {
      var t = this._view3d;
      h(t, "PlaySequence") && t.PlaySequence(e);
    }
  }, {
    key: "stopSequence",
    value: function(e) {
      var t = this._view3d;
      h(t, "StopSequence") && t.StopSequence(e);
    }
  }, {
    key: "isPlayingSequence",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : De, r = this._view3d;
      h(r, "IsPlayingSequence") && r.IsPlayingSequence(e, t);
    }
  }, {
    key: "isPausedSequence",
    value: function(e, t) {
      var r = this._view3d;
      h(r, "IsPausedSequence") && r.IsPausedSequence(e, t);
    }
  }, {
    key: "streamVideoOpen",
    value: function(e) {
      var t = this._view3d, r = Ro({
        url: "",
        width: 10,
        height: 9,
        position: null
      }, Bo(e));
      h(t, "StreamVideoOpen") && t.StreamVideoOpen(r);
    }
  }, {
    key: "streamVideoClose",
    value: function() {
      var e = this._view3d;
      h(e, "StreamVideoClose") && e.StreamVideoClose();
    }
  }, {
    key: "setHighlightRegion",
    value: function(e) {
      var t = this._view3d, r = {
        style: "default",
        geom: e
      };
      h(t, "SetHighlightRegion") && t.SetHighlightRegion(r);
    }
  }, {
    key: "clearHighlightRegion",
    value: function() {
      var e = this._view3d;
      h(e, "ClearHighlightRegion") && e.ClearHighlightRegion();
    }
  }]), i;
}(), Jr = fe, Po = /* @__PURE__ */ D(
  function i(n, e) {
    var t = this;
    R(this, i), d(this, "selectIds", function() {
      return Array.from(t.entity.ids);
    }), d(this, "selectEntities", function() {
      return Array.from(t.entity.data.values());
    }), d(this, "selectAll", function() {
      var r = t.selectIds();
      return r.reduce(function(a, o) {
        var u = t.selectDataById(o);
        return u && a.push(u), a;
      }, []);
    }), d(this, "selectTotal", function() {
      return t.selectIds().length;
    }), d(this, "selectDataById", function(r) {
      var a = t.entity.data.get(r);
      return a ? a.getState() : (console.warn("cannot find entity for id: ".concat(r, ".")), null);
    }), d(this, "selectEntityById", function(r) {
      var a = t.entity.data.get(r);
      return a || (console.warn("cannot find entity for id: ".concat(r, ".")), null);
    }), d(this, "selectByCategory", function(r) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "category_id";
      return t.selectAll().filter(function(o) {
        return o[a] === r;
      });
    }), d(this, "selectEntitiesByCategory", function(r) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "category";
      return t.selectEntities().filter(function(o) {
        return o[a] === r;
      });
    }), d(this, "selectMapEntityById", function(r) {
      return t.selectEntityById(r).getEntityData();
    }), d(this, "selectMapEntity", function(r) {
      return r.reduce(function(a, o) {
        return a.push.apply(a, je(o.getEntityData())), a;
      }, []);
    }), d(this, "filter", function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Jr;
      return t.selectAll().filter(r);
    }), d(this, "filterEntities", function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Jr;
      return t.selectEntities().filter(r);
    }), d(this, "filterOutDoor", function() {
      return t.filter(function(r) {
        return !r.indoor;
      });
    }), d(this, "filterOutDoorEntities", function() {
      return t.filterEntities(function(r) {
        return !r.data.indoor;
      });
    }), d(this, "filterByBuilding", function(r) {
      return t.filter(function(a) {
        return a.build_id === r;
      });
    }), d(this, "filterEntityByBuilding", function(r) {
      return t.filterEntities(function(a) {
        return a.data.build_id === r;
      });
    }), d(this, "filterByFloor", function(r, a) {
      return t.filter(function(o) {
        return o.indoor && o.build_id === r && o.floor_id === a;
      });
    }), d(this, "filterEntityByFloor", function(r, a) {
      return t.filterEntities(function(o) {
        return o.data.indoor && o.data.build_id === r && o.data.floor_id === a;
      });
    }), this.entity = n, this.mapViewer = e;
  }
), Se = fe, Tt = {
  isFirst: !1,
  size: 200,
  onMap: !0,
  instance: !0,
  onSuccess: Se,
  onProgress: Se,
  onError: Se
}, Pe = {
  draw: !1,
  onMap: !0,
  scale: 1,
  image: !0,
  imageScale: 1,
  imageVisible: !0,
  modelVisible: !0,
  modelScale: 1,
  textVisible: !0,
  textScale: 1,
  visibleDistance: 1e5,
  visibleInViewBox: !1,
  onSuccess: Se,
  onError: Se,
  onVisibleStatusChange: Se
};
function Xr(i, n) {
  var e = typeof Symbol < "u" && i[Symbol.iterator] || i["@@iterator"];
  if (!e) {
    if (Array.isArray(i) || (e = jo(i)) || n && i && typeof i.length == "number") {
      e && (i = e);
      var t = 0, r = function() {
      };
      return { s: r, n: function() {
        return t >= i.length ? { done: !0 } : { done: !1, value: i[t++] };
      }, e: function(l) {
        throw l;
      }, f: r };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, o = !1, u;
  return { s: function() {
    e = e.call(i);
  }, n: function() {
    var l = e.next();
    return a = l.done, l;
  }, e: function(l) {
    o = !0, u = l;
  }, f: function() {
    try {
      !a && e.return != null && e.return();
    } finally {
      if (o)
        throw u;
    }
  } };
}
function jo(i, n) {
  if (!!i) {
    if (typeof i == "string")
      return Zr(i, n);
    var e = Object.prototype.toString.call(i).slice(8, -1);
    if (e === "Object" && i.constructor && (e = i.constructor.name), e === "Map" || e === "Set")
      return Array.from(i);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return Zr(i, n);
  }
}
function Zr(i, n) {
  (n == null || n > i.length) && (n = i.length);
  for (var e = 0, t = new Array(n); e < n; e++)
    t[e] = i[e];
  return t;
}
function Qr(i, n) {
  var e = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(i);
    n && (t = t.filter(function(r) {
      return Object.getOwnPropertyDescriptor(i, r).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function en(i) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Qr(Object(e), !0).forEach(function(t) {
      d(i, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : Qr(Object(e)).forEach(function(t) {
      Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return i;
}
var tn = Zt, ui = "MODEL_INSTANCE_TYPE", Le = /* @__PURE__ */ function() {
  function i(n, e, t) {
    R(this, i), this.$$typeof = ui, this.config = t, this.data = null, this.id = null, this.entity = /* @__PURE__ */ new Map(), this.type = e.category_id, this.typeName = "\u6A21\u578B\u57FA\u7C7B", this.visible = !1, this.created = !1, this.mapViewer = n, this.setData(e);
  }
  return D(i, [{
    key: "_concatGid",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : tn(), t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : tn();
      return "".concat(e, "_").concat(t);
    }
  }, {
    key: "setState",
    value: function(e, t) {
      this[e] = t;
    }
  }, {
    key: "getData",
    value: function() {
      return this.data;
    }
  }, {
    key: "setData",
    value: function(e) {
      e && (this.data = e, this.id = e.id);
    }
  }, {
    key: "getEntity",
    value: function(e) {
      return e ? this.entity.get(e) : this.entity;
    }
  }, {
    key: "getAllEntities",
    value: function() {
      return Array.from(this.entity.values());
    }
  }, {
    key: "getEntityData",
    value: function() {
      return Array.from(this.entity.values()).map(function(e) {
        return e.data;
      });
    }
  }, {
    key: "setEntity",
    value: function(e, t) {
      this.entity.set(e, {
        gid: t.gid || t.attr.id,
        type: t.type,
        data: t,
        visible: t.visible
      });
    }
  }, {
    key: "deleteEntity",
    value: function(e) {
      this.entity.delete(e);
    }
  }, {
    key: "getModel",
    value: function() {
      return this.entity.get("model");
    }
  }, {
    key: "getIcon",
    value: function() {
      return this.entity.get("icon");
    }
  }, {
    key: "setModel",
    value: function(e) {
      this.setEntity("model", e);
    }
  }, {
    key: "setIcon",
    value: function(e) {
      this.setEntity("icon", e);
    }
  }, {
    key: "getIconLocation",
    value: function(e) {
      return e ? en(en({}, e), {}, {
        z: e.z + 20
      }) : null;
    }
  }, {
    key: "setVisible",
    value: function(e) {
      var t = this.mapViewer.drawer;
      if (e !== this.visible) {
        var r = Xr(this.entity.values()), a;
        try {
          for (r.s(); !(a = r.n()).done; ) {
            var o = a.value;
            t.updateObjectVisible(o.gid, e);
          }
        } catch (u) {
          r.e(u);
        } finally {
          r.f();
        }
        this.markVisible(e);
      }
    }
  }, {
    key: "markVisible",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
      this.visible = e;
    }
  }, {
    key: "markCreated",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
      this.created = e;
    }
  }, {
    key: "clearEntity",
    value: function() {
      this.entity.clear();
    }
  }, {
    key: "flyTo",
    value: function(e) {
      if (this.data.center) {
        var t = this.data.center, r = {
          x: t.x,
          y: t.y,
          z: t.z,
          pitch: t.pitch,
          yaw: t.yaw,
          roll: t.roll
        };
        this.mapViewer.camera.flyToPositionByOptions({
          position: r,
          duration: e.duration
        });
      }
      if (this.data.indoor) {
        var a = this.data.build_id, o = this.data.floor_id, u = this.mapViewer.model, s = u.getAdapter();
        s.setVisible(a, o);
      }
    }
  }, {
    key: "highlight",
    value: function() {
      var e = this.getModel(), t = this.mapViewer;
      return this.clearHighlight().then(function() {
        e && t.drawer.setObjectHighlight(e == null ? void 0 : e.gid);
      }), this;
    }
  }, {
    key: "clearHighlight",
    value: function() {
      var e = this.mapViewer, t = e.drawer;
      return t.clearHighlight();
    }
  }, {
    key: "create",
    value: function() {
      var e = this, t = this.config, r = this.data || {}, a = this.mapViewer.drawer, o = this.mapViewer.event, u = JSON.parse(JSON.stringify(r)), s = function(f, c) {
        c && e.setModel(r), e.markCreated(!0), e.markVisible(!0), t.onSuccess(f);
      };
      t.draw ? o.setMousePositionCallback(function(l) {
        u.location = l, a.overLayerCreateObject(u).then(function(f) {
          s(f, !0);
        });
      }) : (e.setModel(u), t.onMap && a.overLayerCreateObject(u).then(function(l) {
        s(l, !1);
      }));
    }
  }, {
    key: "update",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.config, r = e.changes, a = e.data, o = this.mapViewer.drawer;
      if (t && this.setState("config", t), a && this.setState("data", a), r) {
        var u = this.getModel(), s = this.getIcon();
        s && (s.data.location = this.getIconLocation(r), o.overLayerUpdateObject(s.data)), u.data.location = r, o.overLayerUpdateObject(u.data);
      }
    }
  }, {
    key: "destroy",
    value: function() {
      var e = this.entity, t = this.mapViewer.drawer, r = Xr(e.entries()), a;
      try {
        for (r.s(); !(a = r.n()).done; ) {
          var o = Ht(a.value, 2), u = o[0], s = o[1];
          t.remove.one(s.data);
        }
      } catch (l) {
        r.e(l);
      } finally {
        r.f();
      }
      this.clearEntity();
    }
  }]), i;
}();
d(Le, "CATEGORY", "MODEL");
function O(i) {
  return O = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, O(i);
}
function No(i, n) {
  for (; !Object.prototype.hasOwnProperty.call(i, n) && (i = O(i), i !== null); )
    ;
  return i;
}
function Z() {
  return typeof Reflect < "u" && Reflect.get ? Z = Reflect.get.bind() : Z = function(n, e, t) {
    var r = No(n, e);
    if (!!r) {
      var a = Object.getOwnPropertyDescriptor(r, e);
      return a.get ? a.get.call(arguments.length < 3 ? n : t) : a.value;
    }
  }, Z.apply(this, arguments);
}
function Ft(i, n) {
  return Ft = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
    return t.__proto__ = r, t;
  }, Ft(i, n);
}
function te(i, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Super expression must either be null or a function");
  i.prototype = Object.create(n && n.prototype, {
    constructor: {
      value: i,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(i, "prototype", {
    writable: !1
  }), n && Ft(i, n);
}
function q(i) {
  if (i === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return i;
}
function re(i, n) {
  if (n && (ne(n) === "object" || typeof n == "function"))
    return n;
  if (n !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return q(i);
}
function rn(i, n) {
  var e = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(i);
    n && (t = t.filter(function(r) {
      return Object.getOwnPropertyDescriptor(i, r).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function nn(i) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? rn(Object(e), !0).forEach(function(t) {
      d(i, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : rn(Object(e)).forEach(function(t) {
      Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return i;
}
function To(i) {
  var n = Fo();
  return function() {
    var t = O(i), r;
    if (n) {
      var a = O(this).constructor;
      r = Reflect.construct(t, arguments, a);
    } else
      r = t.apply(this, arguments);
    return re(this, r);
  };
}
function Fo() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var an = et, Vo = fe, E = /* @__PURE__ */ function(i) {
  te(e, i);
  var n = To(e);
  function e(t) {
    var r;
    R(this, e);
    for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++)
      o[u - 1] = arguments[u];
    return r = n.call.apply(n, [this, t].concat(o)), e.mapViewer = t, r.category = e.model, r.categoryName = "\u76D1\u63A7", r.type = tr, r.typeName = "\u76D1\u63A7", r.fileName = "qiangji", r;
  }
  return D(e, [{
    key: "setModelVisible",
    value: function() {
    }
  }, {
    key: "setIconVisible",
    value: function() {
    }
  }, {
    key: "getArea",
    value: function() {
      return this.entity.get("area");
    }
  }, {
    key: "setArea",
    value: function(r) {
      this.setEntity("area", r);
    }
  }, {
    key: "flyTo",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        speed: 40,
        showLocation: !1
      };
      return Z(O(e.prototype), "flyTo", this).call(this, r), this;
    }
  }, {
    key: "create",
    value: function() {
      var r, a = this, o = this.config, u = this.data || an, s = this.mapViewer.drawer, l = this.mapViewer.event, f = s.config.model({
        attr: {
          id: u.id,
          gid: this._concatGid(e.model, u.id)
        },
        gid: this._concatGid(e.model, u.id),
        fileName: this.fileName,
        scale: 1,
        location: (u == null || (r = u.options) === null || r === void 0 ? void 0 : r.location) || null
      }), c = s.config.image({
        attr: {
          id: u.id,
          gid: this._concatGid(e.icon, u.id)
        },
        gid: this._concatGid(e.icon, u.id),
        style: this.fileName + "_icon",
        location: a.getIconLocation(f == null ? void 0 : f.location)
      }), g = function(b, C) {
        C && (a.setModel(f), a.setIcon(c)), a.markVisible(!0), a.markCreated(!0), o.onSuccess(b);
      };
      return o.draw ? l.setMousePositionCallback(function(m) {
        f.location = m, c.location = a.getIconLocation(m), s.create.image(c), s.create.model(f, !0).then(function(b) {
          g(b, !0);
        });
      }) : (a.setModel(f), a.setIcon(c), o.onMap && (s.create.model(f), s.create.image(c, !0).then(function(m) {
        g(m, !1);
      }))), this;
    }
  }, {
    key: "update",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Z(O(e.prototype), "update", this).call(this, r), this;
    }
  }, {
    key: "destroy",
    value: function() {
      Z(O(e.prototype), "destroy", this).call(this);
    }
  }, {
    key: "updateImage",
    value: function() {
    }
  }, {
    key: "updateText",
    value: function() {
    }
  }, {
    key: "updateVisibleArea",
    value: function() {
    }
  }, {
    key: "createArea",
    value: function() {
      var r = this.data || an, a = this.mapViewer.drawer, o = this;
      if (r.camera_area) {
        var u = this.getEntity("area");
        if (u)
          this.setAreaVisible(!0);
        else {
          var s = a.config.polygon(nn(nn({
            attr: {
              id: r.id
            }
          }, r.camera_area), {}, {
            gid: this._concatGid(e.area, r.id)
          }));
          a.create.polygon(s, !0).then(function(l) {
            o.setArea(l);
          });
        }
      }
    }
  }, {
    key: "drawArea",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Vo, a = this.mapViewer, o = this, u = this._concatGid(e.area, this.data.id);
      a.drawer.create.drawPolygon({
        gid: u,
        attr: {
          id: this.data.id
        },
        onFinish: function(l) {
          l && o.setArea(l), r(l);
        }
      });
    }
  }, {
    key: "clearArea",
    value: function() {
      var r = this.mapViewer.drawer, a = this.getArea();
      this.deleteEntity("area"), r.remove.one(a.data);
    }
  }, {
    key: "setVisible",
    value: function(r) {
      return Z(O(e.prototype), "setVisible", this).call(this, r), this;
    }
  }, {
    key: "setAreaVisible",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, a = this.mapViewer.drawer, o = this.getEntity("area");
      o && a.updateObjectVisible(o.gid, r);
    }
  }]), e;
}(Le);
d(E, "mapViewer", null);
d(E, "model", "$CAMERA");
d(E, "icon", "$ICON_CAMERA");
d(E, "area", "$AREA_CAMERA");
d(E, "_getModelInstance", function(i) {
  if (!i)
    return null;
  if (!!E.mapViewer) {
    var n = E.mapViewer.model, e = n.getAdapter(), t = e.getSelector();
    return t.selectEntityById(i.attr.id);
  }
});
d(E, "modelClickHandler", function(i) {
  var n = E._getModelInstance(i);
  n && n.flyTo();
});
d(E, "modelDoubleClickHandler", function(i) {
  var n = E._getModelInstance(i);
  n && n.flyTo();
});
d(E, "iconClickHandler", function(i) {
  var n = E._getModelInstance(i);
  n && n.flyTo();
});
d(E, "iconDoubleClickHandler", function(i) {
  var n = E._getModelInstance(i);
  n && n.flyTo();
});
d(E, "areaClickHandler", function(i) {
  var n = E._getModelInstance(i);
  n && n.flyTo();
});
d(E, "areaDoubleClickHandler", function(i) {
  var n = E._getModelInstance(i);
  n && n.flyTo();
});
function $o(i) {
  var n = Ho();
  return function() {
    var t = O(i), r;
    if (n) {
      var a = O(this).constructor;
      r = Reflect.construct(t, arguments, a);
    } else
      r = t.apply(this, arguments);
    return re(this, r);
  };
}
function Ho() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var Uo = /* @__PURE__ */ function(i) {
  te(e, i);
  var n = $o(e);
  function e(t) {
    var r;
    R(this, e);
    for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++)
      o[u - 1] = arguments[u];
    return r = n.call.apply(n, [this, t].concat(o)), r.category = "CAMERA", r.categoryName = "\u76D1\u63A7", r.type = rr, r.typeName = "\u67AA\u673A", r.fileName = "qiangji", r.create(), r;
  }
  return D(e);
}(E);
function xo(i) {
  var n = Ko();
  return function() {
    var t = O(i), r;
    if (n) {
      var a = O(this).constructor;
      r = Reflect.construct(t, arguments, a);
    } else
      r = t.apply(this, arguments);
    return re(this, r);
  };
}
function Ko() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var Go = /* @__PURE__ */ function(i) {
  te(e, i);
  var n = xo(e);
  function e(t) {
    var r;
    R(this, e);
    for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++)
      o[u - 1] = arguments[u];
    return r = n.call.apply(n, [this, t].concat(o)), r.category = "CAMERA", r.categoryName = "\u76D1\u63A7", r.type = nr, r.typeName = "\u7403\u673A", r.fileName = "qiuji", r.create(), r;
  }
  return D(e);
}(E);
function qo(i) {
  var n = Wo();
  return function() {
    var t = O(i), r;
    if (n) {
      var a = O(this).constructor;
      r = Reflect.construct(t, arguments, a);
    } else
      r = t.apply(this, arguments);
    return re(this, r);
  };
}
function Wo() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var zo = /* @__PURE__ */ function(i) {
  te(e, i);
  var n = qo(e);
  function e(t) {
    var r;
    R(this, e);
    for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++)
      o[u - 1] = arguments[u];
    return r = n.call.apply(n, [this, t].concat(o)), r.category = "CAMERA", r.categoryName = "\u76D1\u63A7", r.type = ir, r.typeName = "\u534A\u7403", r.fileName = "banqiu", r.create(), r;
  }
  return D(e);
}(E);
function Yo(i) {
  var n = Jo();
  return function() {
    var t = O(i), r;
    if (n) {
      var a = O(this).constructor;
      r = Reflect.construct(t, arguments, a);
    } else
      r = t.apply(this, arguments);
    return re(this, r);
  };
}
function Jo() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var Xo = /* @__PURE__ */ function(i) {
  te(e, i);
  var n = Yo(e);
  function e(t) {
    var r;
    R(this, e);
    for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++)
      o[u - 1] = arguments[u];
    return r = n.call.apply(n, [this, t].concat(o)), r.category = "CAMERA", r.categoryName = "\u76D1\u63A7", r.type = lr, r.typeName = "\u4EBA\u8138", r.fileName = "qiangji", r.create(), r;
  }
  return D(e);
}(E);
function Zo(i) {
  var n = Qo();
  return function() {
    var t = O(i), r;
    if (n) {
      var a = O(this).constructor;
      r = Reflect.construct(t, arguments, a);
    } else
      r = t.apply(this, arguments);
    return re(this, r);
  };
}
function Qo() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var eu = /* @__PURE__ */ function(i) {
  te(e, i);
  var n = Zo(e);
  function e(t) {
    var r;
    R(this, e);
    for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++)
      o[u - 1] = arguments[u];
    return r = n.call.apply(n, [this, t].concat(o)), r.category = "CAMERA", r.categoryName = "\u76D1\u63A7", r.type = ar, r.typeName = "\u5361\u53E3", r.fileName = "qiangji", r.create(), r;
  }
  return D(e);
}(E);
function tu(i) {
  var n = ru();
  return function() {
    var t = O(i), r;
    if (n) {
      var a = O(this).constructor;
      r = Reflect.construct(t, arguments, a);
    } else
      r = t.apply(this, arguments);
    return re(this, r);
  };
}
function ru() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var F = /* @__PURE__ */ function(i) {
  te(e, i);
  var n = tu(e);
  function e(t) {
    var r;
    R(this, e);
    for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++)
      o[u - 1] = arguments[u];
    return r = n.call.apply(n, [this, t].concat(o)), e.mapViewer = t, r.category = e.model, r.categoryName = "\u95E8\u7981", r.type = nt, r.typeName = "\u95E8\u7981", r.fileName = "menjin", r.create(), r;
  }
  return D(e, [{
    key: "create",
    value: function() {
      var r, a = this, o = this, u = this.config, s = this.data || {}, l = this.mapViewer.drawer, f = this.mapViewer.event, c = l.config.model({
        attr: {
          id: s.id
        },
        gid: this._concatGid(e.model, s.id),
        fileName: this.fileName,
        scale: 1,
        location: (s == null || (r = s.options) === null || r === void 0 ? void 0 : r.location) || null
      }), g = l.config.image({
        attr: {
          id: s.id
        },
        gid: this._concatGid(e.icon, s.id),
        style: this.fileName + "_icon",
        location: o.getIconLocation(c == null ? void 0 : c.location)
      });
      u.draw ? f.setMousePositionCallback(function(m) {
        c.location = m, g.location = o.getIconLocation(m), l.create.image(g), l.create.model(c, !0).then(function(b) {
          u.onSuccess(b);
        }), o.setModel(c), o.setIcon(g), a.markVisible(!0);
      }) : (o.setModel(c), o.setIcon(g), u.onMap && (l.create.model(c), l.create.image(g, !0), this.markVisible(!0)));
    }
  }, {
    key: "flyTo",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        speed: 40,
        showLocation: !1
      };
      return Z(O(e.prototype), "flyTo", this).call(this, r), this;
    }
  }, {
    key: "update",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Z(O(e.prototype), "update", this).call(this, r), this;
    }
  }, {
    key: "setVisible",
    value: function(r) {
      return Z(O(e.prototype), "setVisible", this).call(this, r), this;
    }
  }]), e;
}(Le);
d(F, "mapViewer", null);
d(F, "model", "$DOOR");
d(F, "icon", "$ICON_DOOR");
d(F, "_getModelInstance", function(i) {
  if (!i)
    return null;
  if (!!F.mapViewer) {
    var n = F.mapViewer.model, e = n.getDeviceAdapter(), t = e.getSelector();
    return t.selectEntityById(i.attr.id);
  }
});
d(F, "modelClickHandler", function(i) {
  console.log(i);
  var n = F._getModelInstance(i);
  n && n.flyTo();
});
d(F, "modelDoubleClickHandler", function(i) {
  console.log(i);
  var n = F._getModelInstance(i);
  n && n.flyTo();
});
d(F, "iconClickHandler", function(i) {
  console.log(i);
  var n = F._getModelInstance(i);
  n && n.flyTo();
});
d(F, "iconDoubleClickHandler", function(i) {
  console.log(i);
  var n = F._getModelInstance(i);
  n && n.flyTo();
});
function nu(i) {
  var n = iu();
  return function() {
    var t = O(i), r;
    if (n) {
      var a = O(this).constructor;
      r = Reflect.construct(t, arguments, a);
    } else
      r = t.apply(this, arguments);
    return re(this, r);
  };
}
function iu() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var au = /* @__PURE__ */ function(i) {
  te(e, i);
  var n = nu(e);
  function e(t) {
    var r;
    R(this, e);
    for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++)
      o[u - 1] = arguments[u];
    return r = n.call.apply(n, [this, t].concat(o)), r.category = "DOOR", r.categoryName = "\u95E8\u7981", r.type = or, r.typeName = "\u6D77\u5EB7\u4EBA\u8138\u8BC6\u522B\u4E00\u4F53\u673A", r.fileName = "menjin", r.create(), r;
  }
  return D(e);
}(F);
function ou(i) {
  var n = uu();
  return function() {
    var t = O(i), r;
    if (n) {
      var a = O(this).constructor;
      r = Reflect.construct(t, arguments, a);
    } else
      r = t.apply(this, arguments);
    return re(this, r);
  };
}
function uu() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var T = /* @__PURE__ */ function(i) {
  te(e, i);
  var n = ou(e);
  function e(t) {
    var r;
    R(this, e);
    for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++)
      o[u - 1] = arguments[u];
    return r = n.call.apply(n, [this, t].concat(o)), e.mapViewer = t, r.category = e.model, r.categoryName = "\u5BF9\u8BB2", r.type = nt, r.typeName = "\u5BF9\u8BB2", r.fileName = "duijiang", r.create(), r;
  }
  return D(e, [{
    key: "create",
    value: function() {
      var r, a = this, o = this, u = this.config, s = this.data || {}, l = this.mapViewer.drawer, f = this.mapViewer.event, c = l.config.model({
        attr: {
          id: s.id
        },
        gid: this._concatGid(e.model, s.id),
        fileName: this.fileName,
        scale: 1,
        location: (s == null || (r = s.options) === null || r === void 0 ? void 0 : r.location) || null
      }), g = l.config.image({
        attr: {
          id: s.id
        },
        gid: this._concatGid(e.icon, s.id),
        style: this.fileName + "_icon",
        location: o.getIconLocation(c == null ? void 0 : c.location)
      });
      u.draw ? f.setMousePositionCallback(function(m) {
        c.location = m, g.location = o.getIconLocation(m), l.create.image(g), l.create.model(c, !0).then(function(b) {
          u.onSuccess(b);
        }), o.setModel(c), o.setIcon(g), a.markVisible(!0);
      }) : (o.setModel(c), o.setIcon(g), u.onMap && (l.create.model(c), l.create.image(g, !0), this.markVisible(!0)));
    }
  }, {
    key: "flyTo",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        speed: 40,
        showLocation: !1
      };
      return Z(O(e.prototype), "flyTo", this).call(this, r), this;
    }
  }, {
    key: "update",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Z(O(e.prototype), "update", this).call(this, r), this;
    }
  }, {
    key: "setVisible",
    value: function(r) {
      return Z(O(e.prototype), "setVisible", this).call(this, r), this;
    }
  }]), e;
}(Le);
d(T, "mapViewer", null);
d(T, "model", "$INTERCOM");
d(T, "icon", "$ICON_INTERCOM");
d(T, "_getModelInstance", function(i) {
  if (!i)
    return null;
  if (!!T.mapViewer) {
    var n = T.mapViewer.model, e = n.getDeviceAdapter(), t = e.getSelector();
    return t.selectEntityById(i.attr.id);
  }
});
d(T, "modelClickHandler", function(i) {
  console.log(i);
  var n = T._getModelInstance(i);
  n && n.flyTo();
});
d(T, "modelDoubleClickHandler", function(i) {
  console.log(i);
  var n = T._getModelInstance(i);
  n && n.flyTo();
});
d(T, "iconClickHandler", function(i) {
  console.log(i);
  var n = T._getModelInstance(i);
  n && n.flyTo();
});
d(T, "iconDoubleClickHandler", function(i) {
  console.log(i);
  var n = T._getModelInstance(i);
  n && n.flyTo();
});
function su(i) {
  var n = lu();
  return function() {
    var t = O(i), r;
    if (n) {
      var a = O(this).constructor;
      r = Reflect.construct(t, arguments, a);
    } else
      r = t.apply(this, arguments);
    return re(this, r);
  };
}
function lu() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var cu = /* @__PURE__ */ function(i) {
  te(e, i);
  var n = su(e);
  function e(t) {
    var r;
    R(this, e);
    for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++)
      o[u - 1] = arguments[u];
    return r = n.call.apply(n, [this, t].concat(o)), r.category = "INTERCOM", r.categoryName = "\u5BF9\u8BB2", r.type = ur, r.typeName = "\u6D77\u5EB7\u5BF9\u8BB2\u5BA4\u5185\u7EC8\u7AEF", r.fileName = "duijiang", r.create(), r;
  }
  return D(e);
}(T);
function fu(i) {
  var n = du();
  return function() {
    var t = O(i), r;
    if (n) {
      var a = O(this).constructor;
      r = Reflect.construct(t, arguments, a);
    } else
      r = t.apply(this, arguments);
    return re(this, r);
  };
}
function du() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var vu = /* @__PURE__ */ function(i) {
  te(e, i);
  var n = fu(e);
  function e(t) {
    var r;
    R(this, e);
    for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++)
      o[u - 1] = arguments[u];
    return r = n.call.apply(n, [this, t].concat(o)), r.category = "INTERCOM", r.categoryName = "\u5BF9\u8BB2", r.type = sr, r.typeName = "\u6D77\u5EB7\u5BF9\u8BB2\u5BA4\u5916\u7EC8\u7AEF", r.fileName = "duijiang", r.create(), r;
  }
  return D(e);
}(T);
function hu(i) {
  var n = gu();
  return function() {
    var t = O(i), r;
    if (n) {
      var a = O(this).constructor;
      r = Reflect.construct(t, arguments, a);
    } else
      r = t.apply(this, arguments);
    return re(this, r);
  };
}
function gu() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var pu = /* @__PURE__ */ function(i) {
  te(e, i);
  var n = hu(e);
  function e(t) {
    var r;
    R(this, e);
    for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++)
      o[u - 1] = arguments[u];
    return r = n.call.apply(n, [this, t].concat(o)), r.type = it.image.typeName, r;
  }
  return D(e, [{
    key: "create",
    value: function() {
      Z(O(e.prototype), "create", this).call(this);
    }
  }, {
    key: "flyTo",
    value: function(r) {
      Z(O(e.prototype), "flyTo", this).call(this, r);
    }
  }, {
    key: "setVisible",
    value: function(r) {
      Z(O(e.prototype), "setVisible", this).call(this, r);
    }
  }]), e;
}(Le), mu = function(n) {
  var e = Le, t = n.category_id, r = n.type;
  if (t !== void 0)
    switch (t) {
      case tr:
        e = E;
        break;
      case rr:
        e = Uo;
        break;
      case nr:
        e = Go;
        break;
      case ir:
        e = zo;
        break;
      case lr:
        e = Xo;
        break;
      case ar:
        e = eu;
        break;
      case nt:
        e = F;
        break;
      case ai:
        e = T;
        break;
      case ur:
        e = cu;
        break;
      case sr:
        e = vu;
        break;
      case or:
        e = au;
        break;
    }
  else if (r !== void 0)
    switch (r) {
      case it.image.typeName:
        e = pu;
        break;
    }
  return e;
}, yu = /* @__PURE__ */ function() {
  function i(n) {
    R(this, i), this.mapViewer = n;
  }
  return D(i, [{
    key: "create",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Pe, r = mu(e);
      if (r)
        return new r(this.mapViewer, e, t);
      console.warn("device category of ".concat(e.categoryId, ", is not support yet."));
    }
  }]), i;
}();
function on(i, n) {
  var e = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(i);
    n && (t = t.filter(function(r) {
      return Object.getOwnPropertyDescriptor(i, r).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function un(i) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? on(Object(e), !0).forEach(function(t) {
      d(i, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : on(Object(e)).forEach(function(t) {
      Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return i;
}
var bu = Ae, sn = fe, wu = Yt, si = /* @__PURE__ */ D(
  function i(n) {
    var e = this;
    R(this, i), d(this, "addOne", function(t) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Pe;
      return new yu(e.mapViewer).create(t, r);
    }), d(this, "updateOne", function(t) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      t == null || t.update(r);
    }), d(this, "deleteOne", function(t) {
      t == null || t.destroy();
    }), d(this, "addMany", function(t) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Tt, a = e.mapViewer, o = a.drawer;
      r = Object.assign({}, {
        size: 200,
        onSuccess: sn,
        onProgress: sn
      }, r);
      var u = r, s = u.size, l = u.onSuccess, f = u.onProgress;
      if (!bu(t)) {
        console.error("type source must be an array, got " + wu(t));
        return;
      }
      var c = +new Date(), g = t.length, m = function b(C) {
        var A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, _ = t.slice(C, A);
        if (C > g - 1) {
          var S = +new Date();
          f && f({
            progress: 100
          }), console.log("\u52A0\u8F7D ".concat(g, " \u4E2A\u6A21\u578B,\u5171\u8017\u65F6: ").concat((S - c) / 1e3, "s. ")), l && l();
          return;
        }
        o.overLayerCreateObjects(_).then(function() {
          C < g && (f && f({
            progress: Math.floor(Math.pow(10, 4) * (C / g) / 100)
          }), b(A, A + s));
        }).catch(function(V) {
          console.error(V);
        });
      };
      m(0, s);
    }), d(this, "updateMany", function(t, r) {
      var a = t.reduce(function(o, u) {
        return o.push.apply(o, je(u.getAllEntities().map(function(s) {
          return un(un({}, s.data), r);
        }))), u.markVisible(r.visible), o;
      }, []);
      e.mapViewer.core.view3d.SetObjectsVisible(a);
    }), d(this, "deleteMany", function() {
    }), this.mapViewer = n;
  }
);
function Oe(i, n) {
  var e = typeof Symbol < "u" && i[Symbol.iterator] || i["@@iterator"];
  if (!e) {
    if (Array.isArray(i) || (e = Cu(i)) || n && i && typeof i.length == "number") {
      e && (i = e);
      var t = 0, r = function() {
      };
      return { s: r, n: function() {
        return t >= i.length ? { done: !0 } : { done: !1, value: i[t++] };
      }, e: function(l) {
        throw l;
      }, f: r };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, o = !1, u;
  return { s: function() {
    e = e.call(i);
  }, n: function() {
    var l = e.next();
    return a = l.done, l;
  }, e: function(l) {
    o = !0, u = l;
  }, f: function() {
    try {
      !a && e.return != null && e.return();
    } finally {
      if (o)
        throw u;
    }
  } };
}
function Cu(i, n) {
  if (!!i) {
    if (typeof i == "string")
      return ln(i, n);
    var e = Object.prototype.toString.call(i).slice(8, -1);
    if (e === "Object" && i.constructor && (e = i.constructor.name), e === "Map" || e === "Set")
      return Array.from(i);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return ln(i, n);
  }
}
function ln(i, n) {
  (n == null || n > i.length) && (n = i.length);
  for (var e = 0, t = new Array(n); e < n; e++)
    t[e] = i[e];
  return t;
}
function cn(i, n) {
  var e = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(i);
    n && (t = t.filter(function(r) {
      return Object.getOwnPropertyDescriptor(i, r).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function oe(i) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? cn(Object(e), !0).forEach(function(t) {
      d(i, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : cn(Object(e)).forEach(function(t) {
      Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return i;
}
var He = Ae, Ou = /* @__PURE__ */ function() {
  function i(n) {
    var e = this;
    R(this, i), d(this, "getSelector", function() {
      return e.selector;
    }), d(this, "getController", function() {
      return e.controller;
    }), d(this, "getInitialState", function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
      return Object.assign({}, e.entity, t);
    }), d(this, "addOne", function(t) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      r = oe(oe({}, Pe), r);
      var a = t.id;
      e.entity.ids.add(t.id);
      var o = e.getController().addOne(t, r);
      return e.entity.data.set(a, o), o;
    }), d(this, "addMany", function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (!He(t)) {
        console.warn("addMany take array  as only argument.");
        return;
      }
      r = oe(oe({}, Tt), r);
      var a = [];
      if (r.instance) {
        var o = Oe(t), u;
        try {
          for (o.s(); !(u = o.n()).done; ) {
            var s = u.value, l = e.addOne(s, oe(oe({}, Pe), {}, {
              onMap: !1
            }));
            a.push(l);
          }
        } catch (m) {
          o.e(m);
        } finally {
          o.f();
        }
      } else
        a = t;
      if (r.onMap) {
        var f = e.getSelector(), c = f.selectMapEntity, g = c(a);
        e.controller.addMany(g, oe(oe({}, r), {}, {
          onSuccess: function() {
            if (!r.instance) {
              var b = Oe(t), C;
              try {
                for (b.s(); !(C = b.n()).done; ) {
                  var A = C.value;
                  A.$$typeof === ui && (A.markVisible(!0), A.markCreated(!0));
                }
              } catch (_) {
                b.e(_);
              } finally {
                b.f();
              }
            }
          }
        }));
      }
      return e;
    }), d(this, "setAll", function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (!He(t)) {
        console.warn("setAll take array  as only argument.");
        return;
      }
      var a = oe(oe(oe({}, Tt), r), {}, {
        isFirst: !0
      });
      return e.removeAll(), e.addMany(t, a), e;
    }), d(this, "removeOne", function(t) {
      if (!!t) {
        var r = e.getSelector().selectEntityById(t);
        return e.getController().deleteOne(r), e.entity.ids.delete(t), e.entity.data.delete(t), e;
      }
    }), d(this, "removeMany", function(t) {
      if (!He(t)) {
        console.warn("removeMany take array  as only argument.");
        return;
      }
      var r = Oe(t), a;
      try {
        for (r.s(); !(a = r.n()).done; ) {
          var o = a.value;
          e.removeOne(o);
        }
      } catch (u) {
        r.e(u);
      } finally {
        r.f();
      }
      return e;
    }), d(this, "removeAll", function() {
      return e.removeMany(Array.from(e.entity.ids)), e.entity.ids.clear(), e.entity.data.clear(), e;
    }), d(this, "upsertOne", function(t) {
      return e.getSelector().selectDataById(t.id) ? e.updateOne(t) : e.addOne(t), e;
    }), d(this, "upsertMany", function(t) {
      var r = Oe(t), a;
      try {
        for (r.s(); !(a = r.n()).done; ) {
          var o = a.value;
          e.upsertOne(o);
        }
      } catch (u) {
        r.e(u);
      } finally {
        r.f();
      }
      return e;
    }), d(this, "updateOne", function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        data: null,
        config: {},
        changes: null
      }, r = t.data, a = t.config;
      if (!(!r || !r.id)) {
        a = oe(oe({}, Pe), a);
        var o = e.getSelector().selectEntityById(r.id);
        if (o)
          if (o.data.category_id === r.category_id)
            e.getController().updateOne(o, t);
          else
            return e.removeOne(r.id), e.addOne(r, a);
        else
          console.warn("Can not update for Id: ".concat(r.id, ", because it's instance don't exist."));
      }
    }), d(this, "updateMany", function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      if (!He(t)) {
        console.warn("updateMany take Array as only argument.");
        return;
      }
      var r = Oe(t), a;
      try {
        for (r.s(); !(a = r.n()).done; ) {
          var o = a.value;
          e.updateOne(o);
        }
      } catch (u) {
        r.e(u);
      } finally {
        r.f();
      }
      return e;
    }), this.entity = {
      ids: /* @__PURE__ */ new Set(),
      data: /* @__PURE__ */ new Map()
    }, this.mapViewer = n, this.selector = new Po(this.entity), this.controller = new si(this.mapViewer);
  }
  return D(i, [{
    key: "setVisible",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = {
        visible: !0,
        outdoor: !0,
        buildId: "",
        floorId: ""
      }, r = Object.assign({}, t, e), a = r.outdoor, o = r.buildId, u = r.floorId, s = this.getSelector(), l = [];
      o && !u ? l = s.filterEntityByBuilding(o) : o && u && (l = s.filterEntityByFloor(o, u)), a && (l = l.concat(s.filterOutDoorEntities())), l = l.filter(function(p) {
        return p.data.on_map;
      });
      var f = [], c = [], g = [], m = this.getVisible(), b = Oe(m), C;
      try {
        var A = function() {
          var U = C.value, H = l.find(function(J) {
            return J.id === U.id;
          });
          H || g.push(U);
        };
        for (b.s(); !(C = b.n()).done; )
          A();
      } catch (p) {
        b.e(p);
      } finally {
        b.f();
      }
      var _ = Oe(l), S;
      try {
        var V = function() {
          var U = S.value;
          if (U.created) {
            var H = m.find(function(J) {
              return J.id === U.id;
            });
            H || c.push(U);
          }
        };
        for (_.s(); !(S = _.n()).done; )
          V();
      } catch (p) {
        _.e(p);
      } finally {
        _.f();
      }
      return l.forEach(function(p) {
        p.created || f.push(p);
      }), f && f.length > 0 && this.addMany(f, {
        onMap: !0,
        instance: !1
      }), c && c.length > 0 && this.getController().updateMany(c, {
        visible: !0
      }), g && g.length > 0 && this.getController().updateMany(g, {
        visible: !1
      }), this;
    }
  }, {
    key: "getVisible",
    value: function() {
      var e = this.getSelector();
      return e.selectEntities().filter(function(t) {
        return t.visible;
      });
    }
  }]), i;
}();
function fn(i, n) {
  var e = typeof Symbol < "u" && i[Symbol.iterator] || i["@@iterator"];
  if (!e) {
    if (Array.isArray(i) || (e = ku(i)) || n && i && typeof i.length == "number") {
      e && (i = e);
      var t = 0, r = function() {
      };
      return { s: r, n: function() {
        return t >= i.length ? { done: !0 } : { done: !1, value: i[t++] };
      }, e: function(l) {
        throw l;
      }, f: r };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, o = !1, u;
  return { s: function() {
    e = e.call(i);
  }, n: function() {
    var l = e.next();
    return a = l.done, l;
  }, e: function(l) {
    o = !0, u = l;
  }, f: function() {
    try {
      !a && e.return != null && e.return();
    } finally {
      if (o)
        throw u;
    }
  } };
}
function ku(i, n) {
  if (!!i) {
    if (typeof i == "string")
      return dn(i, n);
    var e = Object.prototype.toString.call(i).slice(8, -1);
    if (e === "Object" && i.constructor && (e = i.constructor.name), e === "Map" || e === "Set")
      return Array.from(i);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return dn(i, n);
  }
}
function dn(i, n) {
  (n == null || n > i.length) && (n = i.length);
  for (var e = 0, t = new Array(n); e < n; e++)
    t[e] = i[e];
  return t;
}
function vn(i, n) {
  var e = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(i);
    n && (t = t.filter(function(r) {
      return Object.getOwnPropertyDescriptor(i, r).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function _t(i) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? vn(Object(e), !0).forEach(function(t) {
      d(i, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : vn(Object(e)).forEach(function(t) {
      Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return i;
}
var _u = ce, z = {
  isOnce: !1,
  defaultAction: !0
}, cr = /* @__PURE__ */ function() {
  function i(n) {
    R(this, i), d(this, "listen", function() {
    }), this.mapViewer = n, this.events = /* @__PURE__ */ new Map(), this.config = _t({}, z);
  }
  return D(i, [{
    key: "config",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : z;
      this.config = _t(_t({}, z), e);
    }
  }, {
    key: "getConfig",
    value: function(e) {
      var t = this.events.get(e);
      return t ? t.get("config") : null;
    }
  }, {
    key: "subscribe",
    value: function(e, t) {
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : z, a = this.events.get(e), o = /* @__PURE__ */ new Map();
      if (o.set("callback", t), o.set("config", r), a) {
        var u = a.get("queue");
        u.add(o), a.set("config", r);
      } else {
        var s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Set();
        l.add(o), s.set("queue", l), s.set("config", r), this.events.set(e, s);
      }
    }
  }, {
    key: "unsubscribe",
    value: function(e, t) {
      var r = this.events.get(e);
      if (r) {
        var a = r.get("queue"), o = fn(a.values()), u;
        try {
          for (o.s(); !(u = o.n()).done; ) {
            var s = u.value;
            s.get("callback") === t && a.delete(s);
          }
        } catch (l) {
          o.e(l);
        } finally {
          o.f();
        }
        a.size === 0 && this.events.delete(e);
      }
    }
  }, {
    key: "dispatch",
    value: function(e) {
      var t = this.events.get(e);
      if (t) {
        for (var r = t.get("queue"), a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++)
          o[u - 1] = arguments[u];
        var s = fn(r.values()), l;
        try {
          for (s.s(); !(l = s.n()).done; ) {
            var f = l.value, c = f.get("callback"), g = f.get("config");
            _u(c) && c.apply(void 0, o), g && g.isOnce && this.unsubscribe(e, c);
          }
        } catch (m) {
          s.e(m);
        } finally {
          s.f();
        }
      }
    }
  }, {
    key: "clear",
    value: function() {
      this.events.clear();
    }
  }, {
    key: "onClick",
    value: function(e) {
    }
  }, {
    key: "offClick",
    value: function(e) {
    }
  }, {
    key: "onDoubleClick",
    value: function(e) {
    }
  }, {
    key: "offDoubleClick",
    value: function(e) {
    }
  }, {
    key: "onIconClick",
    value: function(e) {
    }
  }, {
    key: "offIconClick",
    value: function(e) {
    }
  }, {
    key: "onIconDoubleClick",
    value: function(e) {
    }
  }, {
    key: "offIconDoubleClick",
    value: function(e) {
    }
  }, {
    key: "_modelClickHandler",
    value: function() {
    }
  }, {
    key: "_modelDoubleClickHandler",
    value: function() {
    }
  }, {
    key: "_iconClickHandler",
    value: function() {
    }
  }, {
    key: "_iconDoubleClickHandler",
    value: function() {
    }
  }]), i;
}();
function Eu(i) {
  var n = Su();
  return function() {
    var t = O(i), r;
    if (n) {
      var a = O(this).constructor;
      r = Reflect.construct(t, arguments, a);
    } else
      r = t.apply(this, arguments);
    return re(this, r);
  };
}
function Su() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var ke = /* @__PURE__ */ function(i) {
  te(e, i);
  var n = Eu(e);
  function e(t) {
    var r;
    return R(this, e), r = n.call(this, t), d(q(r), "listen", function() {
      var a = r.mapViewer.event;
      a.onClick(E.model, r._modelClickHandler.bind(q(r)), {
        compare: function(u, s) {
          return s.startsWith(E.model);
        }
      }), a.onDoubleClick(E.model, r._modelDoubleClickHandler.bind(q(r)), {
        compare: function(u, s) {
          return s.startsWith(E.model);
        }
      }), a.onClick(E.icon, r._iconClickHandler.bind(q(r)), {
        compare: function(u, s) {
          return s.startsWith(E.icon);
        }
      }), a.onDoubleClick(E.icon, r._iconDoubleClickHandler.bind(q(r)), {
        compare: function(u, s) {
          return s.startsWith(E.icon);
        }
      }), a.onClick(E.area, r._areaClickHandler.bind(q(r)), {
        compare: function(u, s) {
          return s.startsWith(E.area);
        }
      }), a.onDoubleClick(E.area, r._areaDoubleClickHandler.bind(q(r)), {
        compare: function(u, s) {
          return s.startsWith(E.area);
        }
      });
    }), r.listen(), r;
  }
  return D(e, [{
    key: "_modelClickHandler",
    value: function(r) {
      var a = this.getConfig(e.MODEL_CLICK);
      if (a) {
        var o = a.defaultAction;
        o && E.modelClickHandler(r), this.dispatch(e.MODEL_CLICK, r);
      }
    }
  }, {
    key: "_modelDoubleClickHandler",
    value: function(r) {
      var a = this.getConfig(e.MODEL_DOUBLE_CLICK);
      if (a) {
        var o = a.defaultAction;
        o && E.modelDoubleClickHandler(r), this.dispatch(e.MODEL_DOUBLE_CLICK, r);
      }
    }
  }, {
    key: "_iconClickHandler",
    value: function(r) {
      var a = this.getConfig(e.ICON_CLICK);
      if (a) {
        var o = a.defaultAction;
        o && E.iconClickHandler(r), this.dispatch(e.ICON_CLICK, r);
      }
    }
  }, {
    key: "_iconDoubleClickHandler",
    value: function(r) {
      var a = this.getConfig(e.ICON_DOUBLE_CLICK);
      if (a) {
        var o = a.defaultAction;
        o && E.iconDoubleClickHandler(r), this.dispatch(e.ICON_DOUBLE_CLICK, r);
      }
    }
  }, {
    key: "_areaClickHandler",
    value: function(r) {
      var a = this.getConfig(e.AREA_CLICK);
      if (a) {
        var o = a.defaultAction;
        o && E.areaClickHandler(r), this.dispatch(e.AREA_CLICK, r);
      }
    }
  }, {
    key: "_areaDoubleClickHandler",
    value: function(r) {
      var a = this.getConfig(e.AREA_DOUBLE_CLICK);
      if (a) {
        var o = a.defaultAction;
        o && E.areaDoubleClickHandler(r), this.dispatch(e.AREA_DOUBLE_CLICK, r);
      }
    }
  }, {
    key: "clear",
    value: function() {
    }
  }, {
    key: "onClick",
    value: function(r) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : z;
      this.subscribe(e.MODEL_CLICK, r, a);
    }
  }, {
    key: "offClick",
    value: function(r) {
      this.unsubscribe(e.MODEL_CLICK, r);
    }
  }, {
    key: "onDoubleClick",
    value: function(r) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : z;
      this.subscribe(e.MODEL_DOUBLE_CLICK, r, a);
    }
  }, {
    key: "offDoubleClick",
    value: function(r) {
      this.unsubscribe(e.MODEL_DOUBLE_CLICK, r);
    }
  }, {
    key: "onIconClick",
    value: function(r) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : z;
      this.subscribe(e.ICON_CLICK, r, a);
    }
  }, {
    key: "offIconClick",
    value: function(r) {
      this.unsubscribe(e.ICON_DOUBLE_CLICK, r);
    }
  }, {
    key: "onIconDoubleClick",
    value: function(r) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : z;
      this.subscribe(e.ICON_DOUBLE_CLICK, r, a);
    }
  }, {
    key: "offIconDoubleClick",
    value: function(r) {
      this.unsubscribe(e.ICON_DOUBLE_CLICK, r);
    }
  }, {
    key: "onAreaClick",
    value: function(r) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : z;
      this.subscribe(e.AREA_CLICK, r, a);
    }
  }, {
    key: "offAreaClick",
    value: function(r) {
      this.unsubscribe(e.AREA_CLICK, r);
    }
  }, {
    key: "onAreaDoubleClick",
    value: function(r) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : z;
      this.subscribe(e.AREA_DOUBLE_CLICK, r, a);
    }
  }, {
    key: "offAreaDoubleClick",
    value: function(r) {
      this.unsubscribe(e.AREA_DOUBLE_CLICK, r);
    }
  }]), e;
}(cr);
d(ke, "MODEL_CLICK", "MODEL_CLICK");
d(ke, "MODEL_DOUBLE_CLICK", "MODEL_DOUBLE_CLICK");
d(ke, "ICON_CLICK", "ICON_CLICK");
d(ke, "ICON_DOUBLE_CLICK", "ICON_DOUBLE_CLICK");
d(ke, "AREA_CLICK", "AREA_CLICK");
d(ke, "AREA_DOUBLE_CLICK", "AREA_DOUBLE_CLICK");
function Iu(i) {
  var n = Au();
  return function() {
    var t = O(i), r;
    if (n) {
      var a = O(this).constructor;
      r = Reflect.construct(t, arguments, a);
    } else
      r = t.apply(this, arguments);
    return re(this, r);
  };
}
function Au() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var Fe = /* @__PURE__ */ function(i) {
  te(e, i);
  var n = Iu(e);
  function e(t) {
    var r;
    return R(this, e), r = n.call(this, t), d(q(r), "listen", function() {
      var a = r.mapViewer.event;
      a.onClick(F.model, r._modelClickHandler.bind(q(r)), {
        compare: function(u, s) {
          return s.startsWith(F.model);
        }
      }), a.onDoubleClick(F.model, r._modelDoubleClickHandler.bind(q(r)), {
        compare: function(u, s) {
          return s.startsWith(F.model);
        }
      }), a.onClick(F.icon, r._iconClickHandler.bind(q(r)), {
        compare: function(u, s) {
          return s.startsWith(F.icon);
        }
      }), a.onDoubleClick(F.icon, r._iconDoubleClickHandler.bind(q(r)), {
        compare: function(u, s) {
          return s.startsWith(F.icon);
        }
      });
    }), r.listen(), r;
  }
  return D(e, [{
    key: "_modelClickHandler",
    value: function(r) {
      var a = this.getConfig(e.MODEL_CLICK);
      if (a) {
        var o = a.defaultAction;
        o && F.modelClickHandler(r), this.dispatch(e.MODEL_CLICK, r);
      }
    }
  }, {
    key: "_modelDoubleClickHandler",
    value: function(r) {
      var a = this.getConfig(e.MODEL_DOUBLE_CLICK);
      if (a) {
        var o = a.defaultAction;
        o && F.modelDoubleClickHandler(r), this.dispatch(e.MODEL_DOUBLE_CLICK, r);
      }
    }
  }, {
    key: "_iconClickHandler",
    value: function(r) {
      var a = this.getConfig(e.ICON_CLICK);
      if (a) {
        var o = a == null ? void 0 : a.defaultAction;
        o && F.iconClickHandler(r), this.dispatch(e.ICON_CLICK, r);
      }
    }
  }, {
    key: "_iconDoubleClickHandler",
    value: function(r) {
      var a = this.getConfig(e.ICON_DOUBLE_CLICK);
      if (a) {
        var o = a.defaultAction;
        o && F.iconDoubleClickHandler(r), this.dispatch(e.ICON_DOUBLE_CLICK, r);
      }
    }
  }, {
    key: "onClick",
    value: function(r) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : z;
      this.subscribe(e.MODEL_CLICK, r, a);
    }
  }, {
    key: "offClick",
    value: function(r) {
      this.unsubscribe(e.MODEL_CLICK, r);
    }
  }, {
    key: "onDoubleClick",
    value: function(r) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : z;
      this.subscribe(e.MODEL_DOUBLE_CLICK, r, a);
    }
  }, {
    key: "offDoubleClick",
    value: function(r) {
      this.unsubscribe(e.MODEL_DOUBLE_CLICK, r);
    }
  }, {
    key: "onIconClick",
    value: function(r) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : z;
      this.subscribe(e.ICON_CLICK, r, a);
    }
  }, {
    key: "offIconClick",
    value: function(r) {
      this.unsubscribe(e.ICON_DOUBLE_CLICK, r);
    }
  }, {
    key: "onIconDoubleClick",
    value: function(r) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : z;
      this.subscribe(e.ICON_DOUBLE_CLICK, r, a);
    }
  }, {
    key: "offIconDoubleClick",
    value: function(r) {
      this.unsubscribe(e.ICON_DOUBLE_CLICK, r);
    }
  }]), e;
}(cr);
d(Fe, "MODEL_CLICK", "MODEL_CLICK");
d(Fe, "MODEL_DOUBLE_CLICK", "MODEL_DOUBLE_CLICK");
d(Fe, "ICON_CLICK", "ICON_CLICK");
d(Fe, "ICON_DOUBLE_CLICK", "ICON_DOUBLE_CLICK");
function Lu(i) {
  var n = Ru();
  return function() {
    var t = O(i), r;
    if (n) {
      var a = O(this).constructor;
      r = Reflect.construct(t, arguments, a);
    } else
      r = t.apply(this, arguments);
    return re(this, r);
  };
}
function Ru() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var Ve = /* @__PURE__ */ function(i) {
  te(e, i);
  var n = Lu(e);
  function e(t) {
    var r;
    return R(this, e), r = n.call(this, t), d(q(r), "listen", function() {
      var a = r.mapViewer.event;
      a.onClick(T.model, r._modelClickHandler.bind(q(r)), {
        compare: function(u, s) {
          return s.startsWith(T.model);
        }
      }), a.onDoubleClick(T.model, r._modelDoubleClickHandler.bind(q(r)), {
        compare: function(u, s) {
          return s.startsWith(T.model);
        }
      }), a.onClick(T.icon, r._iconClickHandler.bind(q(r)), {
        compare: function(u, s) {
          return s.startsWith(T.icon);
        }
      }), a.onDoubleClick(T.icon, r._iconDoubleClickHandler.bind(q(r)), {
        compare: function(u, s) {
          return s.startsWith(T.icon);
        }
      });
    }), r.listen(), r;
  }
  return D(e, [{
    key: "_modelClickHandler",
    value: function(r) {
      var a = this.getConfig(e.MODEL_CLICK);
      if (a) {
        var o = a.defaultAction;
        o && T.modelClickHandler(r), this.dispatch(e.MODEL_CLICK, r);
      }
    }
  }, {
    key: "_modelDoubleClickHandler",
    value: function(r) {
      var a = this.getConfig(e.MODEL_DOUBLE_CLICK);
      if (a) {
        var o = a.defaultAction;
        o && T.modelDoubleClickHandler(r), this.dispatch(e.MODEL_DOUBLE_CLICK, r);
      }
    }
  }, {
    key: "_iconClickHandler",
    value: function(r) {
      var a = this.getConfig(e.ICON_CLICK);
      if (a) {
        var o = a.defaultAction;
        o && T.iconClickHandler(r), this.dispatch(e.ICON_CLICK, r);
      }
    }
  }, {
    key: "_iconDoubleClickHandler",
    value: function(r) {
      var a = this.getConfig(e.ICON_DOUBLE_CLICK);
      if (a) {
        var o = a.defaultAction;
        o && T.iconDoubleClickHandler(r), this.dispatch(e.ICON_DOUBLE_CLICK, r);
      }
    }
  }, {
    key: "onClick",
    value: function(r) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : z;
      this.subscribe(e.MODEL_CLICK, r, a);
    }
  }, {
    key: "offClick",
    value: function(r) {
      this.unsubscribe(e.MODEL_CLICK, r);
    }
  }, {
    key: "onDoubleClick",
    value: function(r) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : z;
      this.subscribe(e.MODEL_DOUBLE_CLICK, r, a);
    }
  }, {
    key: "offDoubleClick",
    value: function(r) {
      this.unsubscribe(e.MODEL_DOUBLE_CLICK, r);
    }
  }, {
    key: "onIconClick",
    value: function(r) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : z;
      this.subscribe(e.ICON_CLICK, r, a);
    }
  }, {
    key: "offIconClick",
    value: function(r) {
      this.unsubscribe(e.ICON_DOUBLE_CLICK, r);
    }
  }, {
    key: "onIconDoubleClick",
    value: function(r) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : z;
      this.subscribe(e.ICON_DOUBLE_CLICK, r, a);
    }
  }, {
    key: "offIconDoubleClick",
    value: function(r) {
      this.unsubscribe(e.ICON_DOUBLE_CLICK, r);
    }
  }]), e;
}(cr);
d(Ve, "MODEL_CLICK", "MODEL_CLICK");
d(Ve, "MODEL_DOUBLE_CLICK", "MODEL_DOUBLE_CLICK");
d(Ve, "ICON_CLICK", "ICON_CLICK");
d(Ve, "ICON_DOUBLE_CLICK", "ICON_DOUBLE_CLICK");
var Du = /* @__PURE__ */ D(function i(n) {
  R(this, i), this.mapViewer = n, this.camera = new ke(n), this.door = new Fe(n), this.intercom = new Ve(n);
}), Bu = /* @__PURE__ */ D(
  function i(n, e) {
    var t = this;
    R(this, i), d(this, "getEvent", function() {
      return t.event;
    }), d(this, "getController", function() {
      return t.controller;
    }), d(this, "getAdapter", function() {
      return t.adapter;
    }), this.view3d = n, this.mapViewer = e, this.adapter = new Ou(this.mapViewer), this.event = new Du(e), this.category = oi, this.controller = new si(e);
  }
), we = ce, Mu = /* @__PURE__ */ function() {
  function i(n) {
    R(this, i), this.view3d = n;
  }
  return D(i, [{
    key: "isBuildWK",
    value: function(e) {
      return /^V[\d]+_JZ[\d]+_WK$/.test(e);
    }
  }, {
    key: "isBuildTitle",
    value: function(e) {
      return /^MP_V[\d]+_JZ[\d]+_WK_?[\d]?$/.test(e) && this.isBuildFloor(e) === !1;
    }
  }, {
    key: "isBuildFloor",
    value: function(e) {
      return /^V[0]+[\d]+_JZ[0]+[\d]+_WK_[FWMB][\d]+$/.test(e);
    }
  }, {
    key: "isBuildXP",
    value: function(e) {
      return /^V[0]+[\d]+_JZ[0]+[\d]+_WK_XP[\d]*$/.test(e);
    }
  }, {
    key: "isFloorXP",
    value: function(e) {
      return /^V[0]+[\d]+_JZ[0]+[\d]+_WK_[FWMB][\d]+_XP[\d]*$/.test(e);
    }
  }, {
    key: "isFloorRoom",
    value: function(e) {
      return /^V[0]+[\d]+_JZ[0]+[\d]+_WK_[FWMB][\d]+_[U][\d]+_[H][\d]+$/.test(e);
    }
  }, {
    key: "getBuildIdByWKGid",
    value: function(e) {
      return e.replace(/_WK.*/, "");
    }
  }, {
    key: "getBuildGidByBuildId",
    value: function(e) {
      return e.replace(/JZ([\d]+)(_?)/, "JZ$1_WK$2");
    }
  }, {
    key: "getBuildIdByTitleGid",
    value: function(e) {
      return e.replace(/_WK.*/, "").replace(/MP_/, "");
    }
  }, {
    key: "getBuildIdByFloorGid",
    value: function(e) {
      return e.replace(/_WK.*/, "");
    }
  }, {
    key: "getBuildIdByRoomGid",
    value: function(e) {
      return e.split("_WK")[0];
    }
  }, {
    key: "getFloorIdByRoomGid",
    value: function(e) {
      var t = e.split("_");
      return "".concat(t[0], "_").concat(t[1], "_").concat(t[3]);
    }
  }, {
    key: "getFloorIdByFloorGid",
    value: function(e) {
      return e.replace(/_WK/, "");
    }
  }, {
    key: "getFloorNameByFloorId",
    value: function(e) {
      return e.split("_")[2];
    }
  }, {
    key: "getFloorNameSmallByFloorGId",
    value: function(e) {
      var t = this.getFloorIdByFloorGid(e);
      return this.getFloorNameSmallByFloorId(t);
    }
  }, {
    key: "getFloorNameSmallByFloorId",
    value: function(e) {
      return this.getFloorNameByFloorId(e).replace(/([A-Z]*)[0]*([1-9][\d]*)/, "$1$2");
    }
  }, {
    key: "getF001toF1",
    value: function(e) {
      return e.replace(/([\w])[0]*([\d]+)/, "$1$2");
    }
  }, {
    key: "resetBuild",
    value: function(e) {
      this.splitBuildingResetSync(e), this.view3d.ResetObjects();
    }
  }, {
    key: "splitFloor",
    value: function(e, t, r) {
      this.view3d && this.view3d.SplitDynamicFloor(e, t, r);
    }
  }, {
    key: "getBuildingNum",
    value: function(e) {
      we(e) === !0 ? this.view3d.GetBuildingNum(function(t) {
        e && e(t);
      }) : console.error("cb \u4E0D\u662F\u51FD\u6570");
    }
  }, {
    key: "getBuildingNames",
    value: function(e) {
      we(e) === !0 ? this.view3d.GetBuildingNames(function(t) {
        e && e(t);
      }) : console.error("cb \u4E0D\u662F\u51FD\u6570");
    }
  }, {
    key: "getBuildingNamesSync",
    value: function() {
      return G(this.view3d, this.view3d.GetBuildingNames);
    }
  }, {
    key: "getBuildingVisible",
    value: function(e, t) {
      we(t) === !0 ? this.view3d.GetBuildingVisible(e, function(r) {
        t && t(r);
      }) : console.error("cb \u4E0D\u662F\u51FD\u6570");
    }
  }, {
    key: "setBuildingVisible",
    value: function(e, t, r) {
      return j(100, this.view3d, this.view3d.SetBuildingVisible, e, t, r);
    }
  }, {
    key: "setBuildingWKVisible",
    value: function(e, t, r) {
      this.view3d.SetBuildingWkVisible(e, t, r);
    }
  }, {
    key: "resetAllBuildings",
    value: function() {
      return j(10, this.view3d, this.view3d.ResetAllBuildings);
    }
  }, {
    key: "splitBuilding",
    value: function(e, t) {
      this.view3d.SplitBuilding(e, t);
    }
  }, {
    key: "splitBuildingReset",
    value: function(e) {
      this.view3d.SplitBuildingReset(e);
    }
  }, {
    key: "splitBuildingResetSync",
    value: function(e) {
      return j(20, this.view3d, this.view3d.SplitBuildingReset, e);
    }
  }, {
    key: "splitDynamicBuilding",
    value: function(e, t) {
      this.view3d.SplitDynamicBuilding(e, t);
    }
  }, {
    key: "splitDynamicFloor",
    value: function(e, t, r) {
      this.view3d.SplitDynamicFloor(e, t, r);
    }
  }, {
    key: "splitFloorReset",
    value: function(e, t) {
      return this.view3d.SplitFloorReset(e, t);
    }
  }, {
    key: "getFloorNum",
    value: function(e, t) {
      we(t) === !0 ? this.view3d.GetFloorNum(function(r) {
        t && t(r);
      }) : console.error("cb \u4E0D\u662F\u51FD\u6570");
    }
  }, {
    key: "getFloorNames",
    value: function(e, t) {
      console.log("call getFloorNames: ", e), console.log(we(t)), we(t) ? this.view3d.GetFloorNames(e, t) : console.error("cb \u4E0D\u662F\u51FD\u6570");
    }
  }, {
    key: "getFloorNamesSync",
    value: function(e) {
      return G(this.view3d, this.view3d.GetFloorNames, e);
    }
  }, {
    key: "getFloorVisible",
    value: function(e, t, r) {
      we(r) === !0 ? this.view3d.GetFloorVisible(e, t, function(a) {
        r && r(a);
      }) : console.error("cb \u4E0D\u662F\u51FD\u6570");
    }
  }, {
    key: "setFloorVisible",
    value: function(e, t, r, a) {
      return j(10, this.view3d, this.view3d.SetFloorVisible, e, t, r, a);
    }
  }, {
    key: "getUpFloorNum",
    value: function(e, t, r) {
      we(r) === !0 ? this.view3d.GetUpFloorNum(e, t, function(a) {
        r && r(a);
      }) : console.error("cb \u4E0D\u662F\u51FD\u6570");
    }
  }, {
    key: "getUpFloorNames",
    value: function(e, t, r) {
      this.view3d.GetUpFloorNames(e, t, function(a) {
        r && r(a);
      });
    }
  }, {
    key: "getDownFloorNum",
    value: function(e, t, r) {
      this.view3d.GetDownFloorNum(e, t, function(a) {
        r && r(a);
      });
    }
  }, {
    key: "GetDownFloorNames",
    value: function(e, t, r) {
      this.view3d.GetDownFloorNum(e, t, function(a) {
        r && r(a);
      });
    }
  }, {
    key: "getFloorRoomNum",
    value: function(e, t, r) {
      this.view3d.GetFloorRoomNum(e, t, function(a) {
        r && r(a);
      });
    }
  }, {
    key: "getFloorRoomNames",
    value: function(e, t, r) {
      return G(this.view3d, this.view3d.GetFloorRoomNames, e, t);
    }
  }, {
    key: "getFloorRoomVisible",
    value: function(e, t, r, a) {
      this.view3d.GetFloorRoomVisible(e, t, r, function(o) {
        a && a(o);
      });
    }
  }, {
    key: "setFloorRoomVisible",
    value: function(e, t, r, a) {
      this.view3d.SetFloorRoomVisible(e, t, r, a);
    }
  }, {
    key: "setGroundVisible",
    value: function() {
      var n = W(/* @__PURE__ */ L.mark(function t(r) {
        return L.wrap(function(o) {
          for (; ; )
            switch (o.prev = o.next) {
              case 0:
                return o.abrupt("return", j(10, this.view3d, this.view3d.SetGroundVisible, r));
              case 1:
              case "end":
                return o.stop();
            }
        }, t, this);
      }));
      function e(t) {
        return n.apply(this, arguments);
      }
      return e;
    }()
  }]), i;
}();
function hn(i, n) {
  var e = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(i);
    n && (t = t.filter(function(r) {
      return Object.getOwnPropertyDescriptor(i, r).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function gn(i) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? hn(Object(e), !0).forEach(function(t) {
      d(i, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : hn(Object(e)).forEach(function(t) {
      Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return i;
}
function Et(i, n) {
  var e = typeof Symbol < "u" && i[Symbol.iterator] || i["@@iterator"];
  if (!e) {
    if (Array.isArray(i) || (e = Pu(i)) || n && i && typeof i.length == "number") {
      e && (i = e);
      var t = 0, r = function() {
      };
      return { s: r, n: function() {
        return t >= i.length ? { done: !0 } : { done: !1, value: i[t++] };
      }, e: function(l) {
        throw l;
      }, f: r };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, o = !1, u;
  return { s: function() {
    e = e.call(i);
  }, n: function() {
    var l = e.next();
    return a = l.done, l;
  }, e: function(l) {
    o = !0, u = l;
  }, f: function() {
    try {
      !a && e.return != null && e.return();
    } finally {
      if (o)
        throw u;
    }
  } };
}
function Pu(i, n) {
  if (!!i) {
    if (typeof i == "string")
      return pn(i, n);
    var e = Object.prototype.toString.call(i).slice(8, -1);
    if (e === "Object" && i.constructor && (e = i.constructor.name), e === "Map" || e === "Set")
      return Array.from(i);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return pn(i, n);
  }
}
function pn(i, n) {
  (n == null || n > i.length) && (n = i.length);
  for (var e = 0, t = new Array(n); e < n; e++)
    t[e] = i[e];
  return t;
}
var ee = ce, mn = fe, li = qn, yn = $t, ju = En, Vt = 1, St = 2, Ge = "zoomIn", qe = "zoomOut", We = "mousemove", Be = Vt, It = null, At = [Ge, qe, We], bn = {
  prefix: "",
  isDouble: !1,
  compare: li,
  isOnce: !1,
  internal: !1,
  key: +new Date()
}, Nu = /* @__PURE__ */ function() {
  function i(n, e) {
    R(this, i), d(this, "_flushDragCallback", function(t, r) {
      t.size > 0 && t.forEach(function(a) {
        a(r);
      });
    }), this._view3d = n, this.mapViewer = e, this.prefix = "*", this.prefixAndCallbackMap = /* @__PURE__ */ new Map(), this._lastClickTimestamp = +new Date(), this._emitMouseUp = !1, this._addMouseMoveEvent(), this._addMouseUpEvent(), this._addMouseDownEvent(), this._hasRegisterMouseWheelHandler = !1, this.cleanupCallback = null, this._clickCallbackTimer = /* @__PURE__ */ new Map(), this._onDragHandler = /* @__PURE__ */ new Set(), this._onDragStartHandler = /* @__PURE__ */ new Set(), this._onDragEndHandler = /* @__PURE__ */ new Set(), this._dragTicker = 150;
  }
  return D(i, [{
    key: "_handleMouseMove",
    value: function(e) {
      var t = this;
      Be === Vt && this._flushDragCallback(this._onDragStartHandler, e), Be = St, It && clearTimeout(It), this._flushDragCallback(this._onDragHandler, e), It = setTimeout(function() {
        t._emitMouseUp || t._handleMouseUp();
      }, 100);
    }
  }, {
    key: "_handleMouseDown",
    value: function() {
    }
  }, {
    key: "_handleMouseUp",
    value: function() {
      Be === St && this._flushDragCallback(this._onDragEndHandler), Be = Vt;
    }
  }, {
    key: "_registerMouseEvent",
    value: function(e, t) {
      var r = this.mapViewer.core.config.id, a = document.getElementById(r);
      a.addEventListener(e, t);
    }
  }, {
    key: "_removeMouseEvent",
    value: function(e, t) {
      var r = At.filter(function(l) {
        return l === e;
      })[0];
      if (r) {
        var a = this.prefixAndCallbackMap.get(r);
        if (a) {
          var o = this.getCallbacks(e)[0].callback;
          if (this._removeCacheCallback(e, t), !this.prefixAndCallbackMap.get(Ge) && !this.prefixAndCallbackMap.get(qe) || e === We) {
            var u = this.mapViewer.core.config.id, s = document.getElementById(u);
            s.removeEventListener(e, o);
          }
        }
      }
    }
  }, {
    key: "_registerMouseWheelCallback",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "mousewheel", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : mn;
      this._hasRegisterMouseWheelHandler || (this._registerMouseEvent(e, t), this._hasRegisterMouseWheelHandler = !0);
    }
  }, {
    key: "_mouseWheelHandler",
    value: function() {
      var n = W(/* @__PURE__ */ L.mark(function t(r) {
        var a = this, o, u;
        return L.wrap(function(l) {
          for (; ; )
            switch (l.prev = l.next) {
              case 0:
                o = r.wheelDelta, u = "", o > 0 ? u = Ge : o < 0 && (u = qe), u && this.mapViewer.camera && this.mapViewer.camera.getCurrentPosition && this.mapViewer.camera.getCurrentPosition().then(function(f) {
                  var c = a.prefixAndCallbackMap.get(u);
                  if (c) {
                    var g = c.get("callback"), m = g.get("click");
                    m.forEach(function(b) {
                      b.get("config").compare && b.get("config").compare(r, f);
                    });
                  }
                });
              case 4:
              case "end":
                return l.stop();
            }
        }, t, this);
      }));
      function e(t) {
        return n.apply(this, arguments);
      }
      return e;
    }()
  }, {
    key: "getCallbacks",
    value: function(e) {
      var t = this.prefixAndCallbackMap.get(e);
      if (t)
        return Array.from(t.get("callback").click).map(function(r) {
          return Object.fromEntries(r);
        });
    }
  }, {
    key: "setDragTicker",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 150;
      this._dragTicker = e;
    }
  }, {
    key: "zoomIn",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        debounce: !0,
        debounceTime: 300
      };
      if (ee(e)) {
        var r = this._mouseWheelHandler.bind(this);
        t.debounce && (r = yn(this._mouseWheelHandler.bind(this), t.debounceTime || 300, !1)), this._cacheCallback(Ge, r, {
          isOnce: !1,
          compare: e,
          internal: !1
        }), this._registerMouseWheelCallback("mousewheel", r);
      }
    }
  }, {
    key: "zoomOut",
    value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        debounce: !0,
        debounceTime: 300
      };
      if (ee(e)) {
        var r = this._mouseWheelHandler.bind(this);
        t.debounce && (r = yn(this._mouseWheelHandler.bind(this), t.debounceTime || 300, !1)), this._cacheCallback(qe, r, {
          isOnce: !1,
          compare: e,
          internal: !1
        }), this._registerMouseWheelCallback("mousewheel", r);
      }
    }
  }, {
    key: "onMouseMove",
    value: function(e) {
      var t = ju(function(r) {
        console.log(r);
      }, 500);
      this._cacheCallback(We, t, {
        isOnce: !1,
        compare: e,
        internal: !1
      }), this._registerMouseEvent(We, t);
    }
  }, {
    key: "onDrag",
    value: function(e) {
      ee(e) && this._onDragHandler.add(e);
    }
  }, {
    key: "onDragStart",
    value: function(e) {
      ee(e) && this._onDragStartHandler.add(e);
    }
  }, {
    key: "onDragEnd",
    value: function(e) {
      ee(e) && this._onDragEndHandler.add(e);
    }
  }, {
    key: "removeDrag",
    value: function(e) {
      ee(e) && this._onDragHandler.delete(e);
    }
  }, {
    key: "removeDragStart",
    value: function(e) {
      ee(e) && this._onDragStartHandler.delete(e);
    }
  }, {
    key: "removeDragEnd",
    value: function(e) {
      ee(e) && this._onDragEndHandler.delete(e);
    }
  }, {
    key: "removeMouseEvent",
    value: function() {
      this._view3d && h(this._view3d, "UnRegisterEvent") && this._view3d.UnRegisterEvent();
    }
  }, {
    key: "_addMouseMoveEvent",
    value: function() {
      var e = this._view3d;
      h(e, "RegisterEvent") && e.RegisterEvent("onmousemove", this._handleMouseMove.bind(this));
    }
  }, {
    key: "_addMouseDownEvent",
    value: function() {
      var e = this._view3d;
      h(e, "RegisterEvent") && e.RegisterEvent("onmousedown", this._handleMouseDown.bind(this));
    }
  }, {
    key: "_addMouseUpEvent",
    value: function() {
      var e = this._view3d;
      h(e, "RegisterEvent") && e.RegisterEvent("onmouseup", this._handleMouseUp.bind(this));
    }
  }, {
    key: "_resetMouseCallback",
    value: function() {
      this.prefix = "*";
      var e = Et(this.prefixAndCallbackMap.keys()), t;
      try {
        for (e.s(); !(t = e.n()).done; ) {
          var r = t.value;
          this.prefixAndCallbackMap.delete(r);
        }
      } catch (a) {
        e.e(a);
      } finally {
        e.f();
      }
    }
  }, {
    key: "_cacheCallback",
    value: function(e, t, r) {
      if (!!e) {
        var a = e.split(",").map(function(S) {
          return S.trim();
        }), o = Et(a), u;
        try {
          for (o.s(); !(u = o.n()).done; ) {
            var s = u.value, l = this.prefixAndCallbackMap.get(s);
            if (l) {
              if (l.has("callback")) {
                var f = l.get("callback"), c = /* @__PURE__ */ new Map();
                c.set("config", r), c.set("callback", t);
                var g = void 0;
                r.isDouble ? g = f.get("double") : g = f.get("click"), g.add(c);
              }
            } else {
              var m = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Set(), A = /* @__PURE__ */ new Set(), _ = /* @__PURE__ */ new Map();
              _.set("config", r), _.set("callback", t), r.isDouble ? A.add(_) : C.add(_), b.set("click", C), b.set("double", A), m.set("prefix", s), m.set("callback", b), this.prefixAndCallbackMap.set(s, m);
            }
          }
        } catch (S) {
          o.e(S);
        } finally {
          o.f();
        }
      }
    }
  }, {
    key: "_removeCacheCallback",
    value: function(e, t) {
      var r = this;
      if (!!e) {
        var a = e.split(","), o = Et(a), u;
        try {
          var s = function() {
            var f = u.value;
            if (r.prefixAndCallbackMap.has(f)) {
              var c = r.prefixAndCallbackMap.get(f);
              if (c) {
                var g = c.get("callback"), m = g.get("click"), b = g.get("double"), C = function(_) {
                  _.forEach(function(S) {
                    var V = S.get("callback");
                    At.includes(f) ? S.get("config").compare === t && _.delete(S) : V === t && _.delete(S);
                  });
                };
                m.size > 0 && C(m), b.size > 0 && C(b), m.size === 0 && b.size === 0 && r.prefixAndCallbackMap.delete(f);
              }
            }
          };
          for (o.s(); !(u = o.n()).done; )
            s();
        } catch (l) {
          o.e(l);
        } finally {
          o.f();
        }
      }
    }
  }, {
    key: "_addMouseClickCallback",
    value: function() {
      var e = this, t = this._view3d, r = this;
      if (this.mapViewer.core.setParameters({
        prefix: "*"
      }), h(t, "SetMouseCallback")) {
        var a = function(u) {
          r._lastClickCallbackTimer = setTimeout(function() {
            if (Be !== St) {
              var s = u.gid, l = u.attr && u.attr.gid || "", f = +new Date();
              s || l ? function() {
                for (var c = !1, g = Array.from(e.prefixAndCallbackMap.entries()), m = function(_, S) {
                  S.forEach(function(V) {
                    var p = V.get("config"), U = V.get("callback"), H = p.compare, J = p.isOnce;
                    if (H !== li) {
                      if (H(s, l)) {
                        var de = U(u);
                        ee(de) && (r.cleanupCallback = de), c = !0;
                      }
                    } else if (s && s.toLocaleLowerCase().startsWith(_.toLocaleLowerCase()) || l && l.toLocaleLowerCase().startsWith(_.toLocaleLowerCase()) || _ === "*") {
                      c = !0;
                      var ue = U(u);
                      ee(ue) && (r.cleanupCallback = ue);
                    }
                    J && setTimeout(function() {
                      r.remove(_, U);
                    });
                  });
                }, b = function(_) {
                  var S = Ht(g[_], 2);
                  S[0];
                  var V = S[1], p = V.get("prefix"), U = V.get("callback"), H = U.get("click"), J = U.get("double");
                  if (H.size > 0 && J.size === 0)
                    m(p, H);
                  else if (H.size === 0 && J.size > 0)
                    f - r._lastClickTimestamp <= 300 && m(p, J);
                  else {
                    var de = !1;
                    if (f - r._lastClickTimestamp <= 300 && (clearTimeout(r._clickCallbackTimer.get(p)), r._clickCallbackTimer.delete(p), de = !0, m(p, J)), !de) {
                      var ue = setTimeout(function() {
                        m(p, H);
                      }, 300);
                      r._clickCallbackTimer.set(p, ue);
                    }
                  }
                }, C = 0; C < g.length; C++)
                  b(C);
                !c && ee(r.cleanupCallback) && (r.cleanupCallback(), r.cleanupCallback = null);
              }() : ee(r.cleanupCallback) && (r.cleanupCallback(), r.cleanupCallback = null), r._lastClickTimestamp = f;
            }
          }, r._dragTicker);
        };
        setTimeout(function() {
          t.SetMouseCallback(a);
        }, 10);
      }
    }
  }, {
    key: "setMousePositionCallback",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : mn, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = this._view3d;
      if (!ee(e)) {
        Ie(" callback must be a function, but got: ".concat(ne(e), "."));
        return;
      }
      h(r, "SetMousePositionCallback") && r.SetMousePositionCallback(function(a) {
        e(a), t && r.SetMousePositionCallback(null);
      });
    }
  }, {
    key: "onClick",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "*", t = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : bn;
      r = Object.assign({}, bn, r);
      var a = r;
      if (a.isOnce, ee(e) && (t = e), !ee(t)) {
        Ie(" callback must be a function, but got: ".concat(ne(t), "."));
        return;
      }
      this._cacheCallback(e, t, r), this._addMouseClickCallback();
    }
  }, {
    key: "reBind",
    value: function() {
      this._addMouseClickCallback();
    }
  }, {
    key: "onDoubleClick",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "*", t = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0;
      this.onClick(
        e,
        t,
        gn(gn({}, r), {}, {
          isDouble: !0,
          prefix: e
        })
      );
    }
  }, {
    key: "remove",
    value: function(e, t) {
      if (!e) {
        Qe("prefix is not defined, or is ''.");
        return;
      }
      At.includes(e) ? this._removeMouseEvent(e, t) : this._removeCacheCallback(e, t);
    }
  }, {
    key: "removeDouble",
    value: function(e, t) {
      this.remove(e, t);
    }
  }, {
    key: "removeMousePositionCallback",
    value: function() {
      var e = this._view3d;
      h(e, "SetMousePositionCallback") && e.SetMousePositionCallback(null);
    }
  }, {
    key: "clear",
    value: function() {
      var e = this._view3d;
      this.mapViewer.core.setParameters(null), h(e, "SetMouseCallback") && (e.SetMouseCallback(null), this._resetMouseCallback());
    }
  }, {
    key: "silent",
    value: function() {
      var e = this._view3d;
      e.Clear(), e.SetParameters(null), e.SetMouseCallback(null);
    }
  }]), i;
}(), Tu = ce, wn = fe, Fu = {
  id: "mapv3d-container",
  url: "",
  projectId: "",
  token: "",
  mapkey: "",
  manual: !1,
  loading: !0,
  northControl: !1,
  enableKeyboard: !0,
  enableMouse: !0,
  defaultLocate: !0,
  autoResize: !0,
  autoResizeTicker: 300,
  defaultSetResolution: !1,
  resolutionScale: 1,
  resetBuildings: !0,
  internalMouseVisible: !1,
  complete: wn,
  error: wn
}, Hu = /* @__PURE__ */ function() {
  function i(n) {
    R(this, i), this._initFinished = !1, this.core = new io(), this.config = Object.assign({}, Fu, n), this.config.manual || this._init(), this.event = null, this.build = null, this.camera = null, this.drawer = null, this.model = null, this.scheduler = eo, fi();
  }
  return D(i, [{
    key: "create",
    value: function() {
      if (this._initFinished) {
        Qe("MapViewer is already initialize.");
        return;
      }
      this._init();
    }
  }, {
    key: "_init",
    value: function() {
      var e = this;
      this.core.createMap(this.config).then(function() {
        var t = e.core.view3d;
        t && (e.event = new Nu(t, e), e.build = new Mu(t, e), e.camera = new so(t, e), e.drawer = new Mo(t, e), e.model = new Bu(t, e), e._initFinished = !0, e.config.complete && Tu(e.config.complete) && e.config.complete(t));
      });
    }
  }]), i;
}(), Uu = "MapV3D \u4E09\u7EF4\u5730\u7403\u6846\u67B6", xu = "http://www.aimapvision.com/", Ku = "\u56FE\u6D0B\u79D1\u6280", Gu = Cn(), qu = On(), Wu = ci, zu = oi;
export {
  zu as CATEGORY,
  Hu as MapViewer,
  Ku as author,
  Wu as env,
  Vu as error,
  Uu as name,
  eo as scheduler,
  qu as update,
  $u as utils,
  Gu as version,
  xu as website
};
//# sourceMappingURL=mapv3d-src.es.js.map
