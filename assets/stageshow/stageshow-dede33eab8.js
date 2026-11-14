var Co = { exports: {} }, gs = {}, Eo = { exports: {} }, xe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pc;
function Uf() {
  if (pc) return xe;
  pc = 1;
  var o = Symbol.for("react.element"), c = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), S = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), z = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), W = Symbol.iterator;
  function H(d) {
    return d === null || typeof d != "object" ? null : (d = W && d[W] || d["@@iterator"], typeof d == "function" ? d : null);
  }
  var K = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, D = Object.assign, X = {};
  function q(d, m, j) {
    this.props = d, this.context = m, this.refs = X, this.updater = j || K;
  }
  q.prototype.isReactComponent = {}, q.prototype.setState = function(d, m) {
    if (typeof d != "object" && typeof d != "function" && d != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, d, m, "setState");
  }, q.prototype.forceUpdate = function(d) {
    this.updater.enqueueForceUpdate(this, d, "forceUpdate");
  };
  function I() {
  }
  I.prototype = q.prototype;
  function re(d, m, j) {
    this.props = d, this.context = m, this.refs = X, this.updater = j || K;
  }
  var de = re.prototype = new I();
  de.constructor = re, D(de, q.prototype), de.isPureReactComponent = !0;
  var U = Array.isArray, _ = Object.prototype.hasOwnProperty, se = { current: null }, G = { key: !0, ref: !0, __self: !0, __source: !0 };
  function B(d, m, j) {
    var N, C = {}, V = null, le = null;
    if (m != null) for (N in m.ref !== void 0 && (le = m.ref), m.key !== void 0 && (V = "" + m.key), m) _.call(m, N) && !G.hasOwnProperty(N) && (C[N] = m[N]);
    var oe = arguments.length - 2;
    if (oe === 1) C.children = j;
    else if (1 < oe) {
      for (var Z = Array(oe), ie = 0; ie < oe; ie++) Z[ie] = arguments[ie + 2];
      C.children = Z;
    }
    if (d && d.defaultProps) for (N in oe = d.defaultProps, oe) C[N] === void 0 && (C[N] = oe[N]);
    return { $$typeof: o, type: d, key: V, ref: le, props: C, _owner: se.current };
  }
  function ke(d, m) {
    return { $$typeof: o, type: d.type, key: m, ref: d.ref, props: d.props, _owner: d._owner };
  }
  function he(d) {
    return typeof d == "object" && d !== null && d.$$typeof === o;
  }
  function pe(d) {
    var m = { "=": "=0", ":": "=2" };
    return "$" + d.replace(/[=:]/g, function(j) {
      return m[j];
    });
  }
  var fe = /\/+/g;
  function ve(d, m) {
    return typeof d == "object" && d !== null && d.key != null ? pe("" + d.key) : m.toString(36);
  }
  function we(d, m, j, N, C) {
    var V = typeof d;
    (V === "undefined" || V === "boolean") && (d = null);
    var le = !1;
    if (d === null) le = !0;
    else switch (V) {
      case "string":
      case "number":
        le = !0;
        break;
      case "object":
        switch (d.$$typeof) {
          case o:
          case c:
            le = !0;
        }
    }
    if (le) return le = d, C = C(le), d = N === "" ? "." + ve(le, 0) : N, U(C) ? (j = "", d != null && (j = d.replace(fe, "$&/") + "/"), we(C, m, j, "", function(ie) {
      return ie;
    })) : C != null && (he(C) && (C = ke(C, j + (!C.key || le && le.key === C.key ? "" : ("" + C.key).replace(fe, "$&/") + "/") + d)), m.push(C)), 1;
    if (le = 0, N = N === "" ? "." : N + ":", U(d)) for (var oe = 0; oe < d.length; oe++) {
      V = d[oe];
      var Z = N + ve(V, oe);
      le += we(V, m, j, Z, C);
    }
    else if (Z = H(d), typeof Z == "function") for (d = Z.call(d), oe = 0; !(V = d.next()).done; ) V = V.value, Z = N + ve(V, oe++), le += we(V, m, j, Z, C);
    else if (V === "object") throw m = String(d), Error("Objects are not valid as a React child (found: " + (m === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : m) + "). If you meant to render a collection of children, use an array instead.");
    return le;
  }
  function Re(d, m, j) {
    if (d == null) return d;
    var N = [], C = 0;
    return we(d, N, "", "", function(V) {
      return m.call(j, V, C++);
    }), N;
  }
  function Se(d) {
    if (d._status === -1) {
      var m = d._result;
      m = m(), m.then(function(j) {
        (d._status === 0 || d._status === -1) && (d._status = 1, d._result = j);
      }, function(j) {
        (d._status === 0 || d._status === -1) && (d._status = 2, d._result = j);
      }), d._status === -1 && (d._status = 0, d._result = m);
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var me = { current: null }, F = { transition: null }, te = { ReactCurrentDispatcher: me, ReactCurrentBatchConfig: F, ReactCurrentOwner: se };
  function Q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return xe.Children = { map: Re, forEach: function(d, m, j) {
    Re(d, function() {
      m.apply(this, arguments);
    }, j);
  }, count: function(d) {
    var m = 0;
    return Re(d, function() {
      m++;
    }), m;
  }, toArray: function(d) {
    return Re(d, function(m) {
      return m;
    }) || [];
  }, only: function(d) {
    if (!he(d)) throw Error("React.Children.only expected to receive a single React element child.");
    return d;
  } }, xe.Component = q, xe.Fragment = u, xe.Profiler = v, xe.PureComponent = re, xe.StrictMode = y, xe.Suspense = A, xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = te, xe.act = Q, xe.cloneElement = function(d, m, j) {
    if (d == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + d + ".");
    var N = D({}, d.props), C = d.key, V = d.ref, le = d._owner;
    if (m != null) {
      if (m.ref !== void 0 && (V = m.ref, le = se.current), m.key !== void 0 && (C = "" + m.key), d.type && d.type.defaultProps) var oe = d.type.defaultProps;
      for (Z in m) _.call(m, Z) && !G.hasOwnProperty(Z) && (N[Z] = m[Z] === void 0 && oe !== void 0 ? oe[Z] : m[Z]);
    }
    var Z = arguments.length - 2;
    if (Z === 1) N.children = j;
    else if (1 < Z) {
      oe = Array(Z);
      for (var ie = 0; ie < Z; ie++) oe[ie] = arguments[ie + 2];
      N.children = oe;
    }
    return { $$typeof: o, type: d.type, key: C, ref: V, props: N, _owner: le };
  }, xe.createContext = function(d) {
    return d = { $$typeof: S, _currentValue: d, _currentValue2: d, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, d.Provider = { $$typeof: w, _context: d }, d.Consumer = d;
  }, xe.createElement = B, xe.createFactory = function(d) {
    var m = B.bind(null, d);
    return m.type = d, m;
  }, xe.createRef = function() {
    return { current: null };
  }, xe.forwardRef = function(d) {
    return { $$typeof: E, render: d };
  }, xe.isValidElement = he, xe.lazy = function(d) {
    return { $$typeof: P, _payload: { _status: -1, _result: d }, _init: Se };
  }, xe.memo = function(d, m) {
    return { $$typeof: z, type: d, compare: m === void 0 ? null : m };
  }, xe.startTransition = function(d) {
    var m = F.transition;
    F.transition = {};
    try {
      d();
    } finally {
      F.transition = m;
    }
  }, xe.unstable_act = Q, xe.useCallback = function(d, m) {
    return me.current.useCallback(d, m);
  }, xe.useContext = function(d) {
    return me.current.useContext(d);
  }, xe.useDebugValue = function() {
  }, xe.useDeferredValue = function(d) {
    return me.current.useDeferredValue(d);
  }, xe.useEffect = function(d, m) {
    return me.current.useEffect(d, m);
  }, xe.useId = function() {
    return me.current.useId();
  }, xe.useImperativeHandle = function(d, m, j) {
    return me.current.useImperativeHandle(d, m, j);
  }, xe.useInsertionEffect = function(d, m) {
    return me.current.useInsertionEffect(d, m);
  }, xe.useLayoutEffect = function(d, m) {
    return me.current.useLayoutEffect(d, m);
  }, xe.useMemo = function(d, m) {
    return me.current.useMemo(d, m);
  }, xe.useReducer = function(d, m, j) {
    return me.current.useReducer(d, m, j);
  }, xe.useRef = function(d) {
    return me.current.useRef(d);
  }, xe.useState = function(d) {
    return me.current.useState(d);
  }, xe.useSyncExternalStore = function(d, m, j) {
    return me.current.useSyncExternalStore(d, m, j);
  }, xe.useTransition = function() {
    return me.current.useTransition();
  }, xe.version = "18.3.1", xe;
}
var hc;
function Io() {
  return hc || (hc = 1, Eo.exports = Uf()), Eo.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mc;
function Xf() {
  if (mc) return gs;
  mc = 1;
  var o = Io(), c = Symbol.for("react.element"), u = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, v = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(E, A, z) {
    var P, W = {}, H = null, K = null;
    z !== void 0 && (H = "" + z), A.key !== void 0 && (H = "" + A.key), A.ref !== void 0 && (K = A.ref);
    for (P in A) y.call(A, P) && !w.hasOwnProperty(P) && (W[P] = A[P]);
    if (E && E.defaultProps) for (P in A = E.defaultProps, A) W[P] === void 0 && (W[P] = A[P]);
    return { $$typeof: c, type: E, key: H, ref: K, props: W, _owner: v.current };
  }
  return gs.Fragment = u, gs.jsx = S, gs.jsxs = S, gs;
}
var vc;
function _f() {
  return vc || (vc = 1, Co.exports = Xf()), Co.exports;
}
var l = _f(), Tl = {}, Po = { exports: {} }, wt = {}, Ro = { exports: {} }, Lo = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yc;
function Kf() {
  return yc || (yc = 1, (function(o) {
    function c(F, te) {
      var Q = F.length;
      F.push(te);
      e: for (; 0 < Q; ) {
        var d = Q - 1 >>> 1, m = F[d];
        if (0 < v(m, te)) F[d] = te, F[Q] = m, Q = d;
        else break e;
      }
    }
    function u(F) {
      return F.length === 0 ? null : F[0];
    }
    function y(F) {
      if (F.length === 0) return null;
      var te = F[0], Q = F.pop();
      if (Q !== te) {
        F[0] = Q;
        e: for (var d = 0, m = F.length, j = m >>> 1; d < j; ) {
          var N = 2 * (d + 1) - 1, C = F[N], V = N + 1, le = F[V];
          if (0 > v(C, Q)) V < m && 0 > v(le, C) ? (F[d] = le, F[V] = Q, d = V) : (F[d] = C, F[N] = Q, d = N);
          else if (V < m && 0 > v(le, Q)) F[d] = le, F[V] = Q, d = V;
          else break e;
        }
      }
      return te;
    }
    function v(F, te) {
      var Q = F.sortIndex - te.sortIndex;
      return Q !== 0 ? Q : F.id - te.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var w = performance;
      o.unstable_now = function() {
        return w.now();
      };
    } else {
      var S = Date, E = S.now();
      o.unstable_now = function() {
        return S.now() - E;
      };
    }
    var A = [], z = [], P = 1, W = null, H = 3, K = !1, D = !1, X = !1, q = typeof setTimeout == "function" ? setTimeout : null, I = typeof clearTimeout == "function" ? clearTimeout : null, re = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function de(F) {
      for (var te = u(z); te !== null; ) {
        if (te.callback === null) y(z);
        else if (te.startTime <= F) y(z), te.sortIndex = te.expirationTime, c(A, te);
        else break;
        te = u(z);
      }
    }
    function U(F) {
      if (X = !1, de(F), !D) if (u(A) !== null) D = !0, Se(_);
      else {
        var te = u(z);
        te !== null && me(U, te.startTime - F);
      }
    }
    function _(F, te) {
      D = !1, X && (X = !1, I(B), B = -1), K = !0;
      var Q = H;
      try {
        for (de(te), W = u(A); W !== null && (!(W.expirationTime > te) || F && !pe()); ) {
          var d = W.callback;
          if (typeof d == "function") {
            W.callback = null, H = W.priorityLevel;
            var m = d(W.expirationTime <= te);
            te = o.unstable_now(), typeof m == "function" ? W.callback = m : W === u(A) && y(A), de(te);
          } else y(A);
          W = u(A);
        }
        if (W !== null) var j = !0;
        else {
          var N = u(z);
          N !== null && me(U, N.startTime - te), j = !1;
        }
        return j;
      } finally {
        W = null, H = Q, K = !1;
      }
    }
    var se = !1, G = null, B = -1, ke = 5, he = -1;
    function pe() {
      return !(o.unstable_now() - he < ke);
    }
    function fe() {
      if (G !== null) {
        var F = o.unstable_now();
        he = F;
        var te = !0;
        try {
          te = G(!0, F);
        } finally {
          te ? ve() : (se = !1, G = null);
        }
      } else se = !1;
    }
    var ve;
    if (typeof re == "function") ve = function() {
      re(fe);
    };
    else if (typeof MessageChannel < "u") {
      var we = new MessageChannel(), Re = we.port2;
      we.port1.onmessage = fe, ve = function() {
        Re.postMessage(null);
      };
    } else ve = function() {
      q(fe, 0);
    };
    function Se(F) {
      G = F, se || (se = !0, ve());
    }
    function me(F, te) {
      B = q(function() {
        F(o.unstable_now());
      }, te);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(F) {
      F.callback = null;
    }, o.unstable_continueExecution = function() {
      D || K || (D = !0, Se(_));
    }, o.unstable_forceFrameRate = function(F) {
      0 > F || 125 < F ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ke = 0 < F ? Math.floor(1e3 / F) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return H;
    }, o.unstable_getFirstCallbackNode = function() {
      return u(A);
    }, o.unstable_next = function(F) {
      switch (H) {
        case 1:
        case 2:
        case 3:
          var te = 3;
          break;
        default:
          te = H;
      }
      var Q = H;
      H = te;
      try {
        return F();
      } finally {
        H = Q;
      }
    }, o.unstable_pauseExecution = function() {
    }, o.unstable_requestPaint = function() {
    }, o.unstable_runWithPriority = function(F, te) {
      switch (F) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          F = 3;
      }
      var Q = H;
      H = F;
      try {
        return te();
      } finally {
        H = Q;
      }
    }, o.unstable_scheduleCallback = function(F, te, Q) {
      var d = o.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? d + Q : d) : Q = d, F) {
        case 1:
          var m = -1;
          break;
        case 2:
          m = 250;
          break;
        case 5:
          m = 1073741823;
          break;
        case 4:
          m = 1e4;
          break;
        default:
          m = 5e3;
      }
      return m = Q + m, F = { id: P++, callback: te, priorityLevel: F, startTime: Q, expirationTime: m, sortIndex: -1 }, Q > d ? (F.sortIndex = Q, c(z, F), u(A) === null && F === u(z) && (X ? (I(B), B = -1) : X = !0, me(U, Q - d))) : (F.sortIndex = m, c(A, F), D || K || (D = !0, Se(_))), F;
    }, o.unstable_shouldYield = pe, o.unstable_wrapCallback = function(F) {
      var te = H;
      return function() {
        var Q = H;
        H = te;
        try {
          return F.apply(this, arguments);
        } finally {
          H = Q;
        }
      };
    };
  })(Lo)), Lo;
}
var gc;
function Gf() {
  return gc || (gc = 1, Ro.exports = Kf()), Ro.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xc;
function Vf() {
  if (xc) return wt;
  xc = 1;
  var o = Io(), c = Gf();
  function u(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var y = /* @__PURE__ */ new Set(), v = {};
  function w(e, t) {
    S(e, t), S(e + "Capture", t);
  }
  function S(e, t) {
    for (v[e] = t, e = 0; e < t.length; e++) y.add(t[e]);
  }
  var E = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), A = Object.prototype.hasOwnProperty, z = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, P = {}, W = {};
  function H(e) {
    return A.call(W, e) ? !0 : A.call(P, e) ? !1 : z.test(e) ? W[e] = !0 : (P[e] = !0, !1);
  }
  function K(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function D(e, t, n, r) {
    if (t === null || typeof t > "u" || K(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return !1;
  }
  function X(e, t, n, r, s, i, a) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a;
  }
  var q = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    q[e] = new X(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    q[t] = new X(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    q[e] = new X(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    q[e] = new X(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    q[e] = new X(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    q[e] = new X(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    q[e] = new X(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    q[e] = new X(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    q[e] = new X(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var I = /[\-:]([a-z])/g;
  function re(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      I,
      re
    );
    q[t] = new X(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(I, re);
    q[t] = new X(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(I, re);
    q[t] = new X(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    q[e] = new X(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), q.xlinkHref = new X("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    q[e] = new X(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function de(e, t, n, r) {
    var s = q.hasOwnProperty(t) ? q[t] : null;
    (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (D(t, n, s, r) && (n = null), r || s === null ? H(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName, r = s.attributeNamespace, n === null ? e.removeAttribute(t) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var U = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _ = Symbol.for("react.element"), se = Symbol.for("react.portal"), G = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), ke = Symbol.for("react.profiler"), he = Symbol.for("react.provider"), pe = Symbol.for("react.context"), fe = Symbol.for("react.forward_ref"), ve = Symbol.for("react.suspense"), we = Symbol.for("react.suspense_list"), Re = Symbol.for("react.memo"), Se = Symbol.for("react.lazy"), me = Symbol.for("react.offscreen"), F = Symbol.iterator;
  function te(e) {
    return e === null || typeof e != "object" ? null : (e = F && e[F] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Q = Object.assign, d;
  function m(e) {
    if (d === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      d = t && t[1] || "";
    }
    return `
` + d + e;
  }
  var j = !1;
  function N(e, t) {
    if (!e || j) return "";
    j = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (k) {
          var r = k;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (k) {
          r = k;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (k) {
          r = k;
        }
        e();
      }
    } catch (k) {
      if (k && r && typeof k.stack == "string") {
        for (var s = k.stack.split(`
`), i = r.stack.split(`
`), a = s.length - 1, f = i.length - 1; 1 <= a && 0 <= f && s[a] !== i[f]; ) f--;
        for (; 1 <= a && 0 <= f; a--, f--) if (s[a] !== i[f]) {
          if (a !== 1 || f !== 1)
            do
              if (a--, f--, 0 > f || s[a] !== i[f]) {
                var p = `
` + s[a].replace(" at new ", " at ");
                return e.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", e.displayName)), p;
              }
            while (1 <= a && 0 <= f);
          break;
        }
      }
    } finally {
      j = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? m(e) : "";
  }
  function C(e) {
    switch (e.tag) {
      case 5:
        return m(e.type);
      case 16:
        return m("Lazy");
      case 13:
        return m("Suspense");
      case 19:
        return m("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = N(e.type, !1), e;
      case 11:
        return e = N(e.type.render, !1), e;
      case 1:
        return e = N(e.type, !0), e;
      default:
        return "";
    }
  }
  function V(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case G:
        return "Fragment";
      case se:
        return "Portal";
      case ke:
        return "Profiler";
      case B:
        return "StrictMode";
      case ve:
        return "Suspense";
      case we:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case pe:
        return (e.displayName || "Context") + ".Consumer";
      case he:
        return (e._context.displayName || "Context") + ".Provider";
      case fe:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Re:
        return t = e.displayName || null, t !== null ? t : V(e.type) || "Memo";
      case Se:
        t = e._payload, e = e._init;
        try {
          return V(e(t));
        } catch {
        }
    }
    return null;
  }
  function le(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return V(t);
      case 8:
        return t === B ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function oe(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Z(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ie(e) {
    var t = Z(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var s = n.get, i = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return s.call(this);
      }, set: function(a) {
        r = "" + a, i.call(this, a);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(a) {
        r = "" + a;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Te(e) {
    e._valueTracker || (e._valueTracker = ie(e));
  }
  function Ce(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = Z(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function De(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ye(e, t) {
    var n = t.checked;
    return Q({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Ge(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = oe(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function en(e, t) {
    t = t.checked, t != null && de(e, "checked", t, !1);
  }
  function je(e, t) {
    en(e, t);
    var n = oe(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Pe(e, t.type, n) : t.hasOwnProperty("defaultValue") && Pe(e, t.type, oe(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Ve(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Pe(e, t, n) {
    (t !== "number" || De(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Oe = Array.isArray;
  function kt(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
      for (n = 0; n < e.length; n++) s = t.hasOwnProperty("$" + e[n].value), e[n].selected !== s && (e[n].selected = s), s && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + oe(n), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === n) {
          e[s].selected = !0, r && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function tn(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(u(91));
    return Q({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function jt(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(u(92));
        if (Oe(n)) {
          if (1 < n.length) throw Error(u(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: oe(n) };
  }
  function nn(e, t) {
    var n = oe(t.value), r = oe(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Dn(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function On(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Vt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? On(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var hn, er = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, s) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, s);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (hn = hn || document.createElement("div"), hn.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = hn.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Nt(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var In = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Ul = ["Webkit", "ms", "Moz", "O"];
  Object.keys(In).forEach(function(e) {
    Ul.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), In[t] = In[e];
    });
  });
  function Mr(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || In.hasOwnProperty(e) && In[e] ? ("" + t).trim() : t + "px";
  }
  function rn(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, s = Mr(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : e[n] = s;
    }
  }
  var Bn = Q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function sn(e, t) {
    if (t) {
      if (Bn[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(u(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(u(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(u(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(u(62));
    }
  }
  function Wn(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var qt = null;
  function It(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Fn = null, pt = null, Bt = null;
  function tr(e) {
    if (e = rs(e)) {
      if (typeof Fn != "function") throw Error(u(280));
      var t = e.stateNode;
      t && (t = qs(t), Fn(e.stateNode, e.type, t));
    }
  }
  function Tr(e) {
    pt ? Bt ? Bt.push(e) : Bt = [e] : pt = e;
  }
  function As() {
    if (pt) {
      var e = pt, t = Bt;
      if (Bt = pt = null, tr(e), t) for (e = 0; e < t.length; e++) tr(t[e]);
    }
  }
  function Cs(e, t) {
    return e(t);
  }
  function Y() {
  }
  var ye = !1;
  function Ne(e, t, n) {
    if (ye) return e(t, n);
    ye = !0;
    try {
      return Cs(e, t, n);
    } finally {
      ye = !1, (pt !== null || Bt !== null) && (Y(), As());
    }
  }
  function ge(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = qs(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(u(231, t, typeof n));
    return n;
  }
  var Le = !1;
  if (E) try {
    var rt = {};
    Object.defineProperty(rt, "passive", { get: function() {
      Le = !0;
    } }), window.addEventListener("test", rt, rt), window.removeEventListener("test", rt, rt);
  } catch {
    Le = !1;
  }
  function Rt(e, t, n, r, s, i, a, f, p) {
    var k = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, k);
    } catch (L) {
      this.onError(L);
    }
  }
  var ut = !1, ct = null, st = !1, Dr = null, Xl = { onError: function(e) {
    ut = !0, ct = e;
  } };
  function Or(e, t, n, r, s, i, a, f, p) {
    ut = !1, ct = null, Rt.apply(Xl, arguments);
  }
  function _l(e, t, n, r, s, i, a, f, p) {
    if (Or.apply(this, arguments), ut) {
      if (ut) {
        var k = ct;
        ut = !1, ct = null;
      } else throw Error(u(198));
      st || (st = !0, Dr = k);
    }
  }
  function Wt(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function nr(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function rr(e) {
    if (Wt(e) !== e) throw Error(u(188));
  }
  function Es(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Wt(e), t === null) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var s = n.return;
      if (s === null) break;
      var i = s.alternate;
      if (i === null) {
        if (r = s.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (s.child === i.child) {
        for (i = s.child; i; ) {
          if (i === n) return rr(s), e;
          if (i === r) return rr(s), t;
          i = i.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== r.return) n = s, r = i;
      else {
        for (var a = !1, f = s.child; f; ) {
          if (f === n) {
            a = !0, n = s, r = i;
            break;
          }
          if (f === r) {
            a = !0, r = s, n = i;
            break;
          }
          f = f.sibling;
        }
        if (!a) {
          for (f = i.child; f; ) {
            if (f === n) {
              a = !0, n = i, r = s;
              break;
            }
            if (f === r) {
              a = !0, r = i, n = s;
              break;
            }
            f = f.sibling;
          }
          if (!a) throw Error(u(189));
        }
      }
      if (n.alternate !== r) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? e : t;
  }
  function Ir(e) {
    return e = Es(e), e !== null ? Br(e) : null;
  }
  function Br(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Br(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Wr = c.unstable_scheduleCallback, Fe = c.unstable_cancelCallback, ht = c.unstable_shouldYield, sr = c.unstable_requestPaint, _e = c.unstable_now, ed = c.unstable_getCurrentPriorityLevel, Kl = c.unstable_ImmediatePriority, Uo = c.unstable_UserBlockingPriority, Ps = c.unstable_NormalPriority, td = c.unstable_LowPriority, Xo = c.unstable_IdlePriority, Rs = null, Yt = null;
  function nd(e) {
    if (Yt && typeof Yt.onCommitFiberRoot == "function") try {
      Yt.onCommitFiberRoot(Rs, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Ft = Math.clz32 ? Math.clz32 : ld, rd = Math.log, sd = Math.LN2;
  function ld(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (rd(e) / sd | 0) | 0;
  }
  var Ls = 64, zs = 4194304;
  function Fr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Ms(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, s = e.suspendedLanes, i = e.pingedLanes, a = n & 268435455;
    if (a !== 0) {
      var f = a & ~s;
      f !== 0 ? r = Fr(f) : (i &= a, i !== 0 && (r = Fr(i)));
    } else a = n & ~s, a !== 0 ? r = Fr(a) : i !== 0 && (r = Fr(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & s) === 0 && (s = r & -r, i = t & -t, s >= i || s === 16 && (i & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Ft(t), s = 1 << n, r |= e[n], t &= ~s;
    return r;
  }
  function id(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function od(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
      var a = 31 - Ft(i), f = 1 << a, p = s[a];
      p === -1 ? ((f & n) === 0 || (f & r) !== 0) && (s[a] = id(f, t)) : p <= t && (e.expiredLanes |= f), i &= ~f;
    }
  }
  function Gl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function _o() {
    var e = Ls;
    return Ls <<= 1, (Ls & 4194240) === 0 && (Ls = 64), e;
  }
  function Vl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Hr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ft(t), e[t] = n;
  }
  function ad(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var s = 31 - Ft(n), i = 1 << s;
      t[s] = 0, r[s] = -1, e[s] = -1, n &= ~i;
    }
  }
  function ql(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - Ft(n), s = 1 << r;
      s & t | e[r] & t && (e[r] |= t), n &= ~s;
    }
  }
  var ze = 0;
  function Ko(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Go, Yl, Vo, qo, Yo, Jl = !1, Ts = [], mn = null, vn = null, yn = null, Qr = /* @__PURE__ */ new Map(), Ur = /* @__PURE__ */ new Map(), gn = [], ud = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Jo(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        mn = null;
        break;
      case "dragenter":
      case "dragleave":
        vn = null;
        break;
      case "mouseover":
      case "mouseout":
        yn = null;
        break;
      case "pointerover":
      case "pointerout":
        Qr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ur.delete(t.pointerId);
    }
  }
  function Xr(e, t, n, r, s, i) {
    return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [s] }, t !== null && (t = rs(t), t !== null && Yl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
  }
  function cd(e, t, n, r, s) {
    switch (t) {
      case "focusin":
        return mn = Xr(mn, e, t, n, r, s), !0;
      case "dragenter":
        return vn = Xr(vn, e, t, n, r, s), !0;
      case "mouseover":
        return yn = Xr(yn, e, t, n, r, s), !0;
      case "pointerover":
        var i = s.pointerId;
        return Qr.set(i, Xr(Qr.get(i) || null, e, t, n, r, s)), !0;
      case "gotpointercapture":
        return i = s.pointerId, Ur.set(i, Xr(Ur.get(i) || null, e, t, n, r, s)), !0;
    }
    return !1;
  }
  function Zo(e) {
    var t = Hn(e.target);
    if (t !== null) {
      var n = Wt(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = nr(n), t !== null) {
            e.blockedOn = t, Yo(e.priority, function() {
              Vo(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ds(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = bl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        qt = r, n.target.dispatchEvent(r), qt = null;
      } else return t = rs(n), t !== null && Yl(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function bo(e, t, n) {
    Ds(e) && n.delete(t);
  }
  function dd() {
    Jl = !1, mn !== null && Ds(mn) && (mn = null), vn !== null && Ds(vn) && (vn = null), yn !== null && Ds(yn) && (yn = null), Qr.forEach(bo), Ur.forEach(bo);
  }
  function _r(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Jl || (Jl = !0, c.unstable_scheduleCallback(c.unstable_NormalPriority, dd)));
  }
  function Kr(e) {
    function t(s) {
      return _r(s, e);
    }
    if (0 < Ts.length) {
      _r(Ts[0], e);
      for (var n = 1; n < Ts.length; n++) {
        var r = Ts[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (mn !== null && _r(mn, e), vn !== null && _r(vn, e), yn !== null && _r(yn, e), Qr.forEach(t), Ur.forEach(t), n = 0; n < gn.length; n++) r = gn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < gn.length && (n = gn[0], n.blockedOn === null); ) Zo(n), n.blockedOn === null && gn.shift();
  }
  var lr = U.ReactCurrentBatchConfig, Os = !0;
  function fd(e, t, n, r) {
    var s = ze, i = lr.transition;
    lr.transition = null;
    try {
      ze = 1, Zl(e, t, n, r);
    } finally {
      ze = s, lr.transition = i;
    }
  }
  function pd(e, t, n, r) {
    var s = ze, i = lr.transition;
    lr.transition = null;
    try {
      ze = 4, Zl(e, t, n, r);
    } finally {
      ze = s, lr.transition = i;
    }
  }
  function Zl(e, t, n, r) {
    if (Os) {
      var s = bl(e, t, n, r);
      if (s === null) mi(e, t, r, Is, n), Jo(e, r);
      else if (cd(s, e, t, n, r)) r.stopPropagation();
      else if (Jo(e, r), t & 4 && -1 < ud.indexOf(e)) {
        for (; s !== null; ) {
          var i = rs(s);
          if (i !== null && Go(i), i = bl(e, t, n, r), i === null && mi(e, t, r, Is, n), i === s) break;
          s = i;
        }
        s !== null && r.stopPropagation();
      } else mi(e, t, r, null, n);
    }
  }
  var Is = null;
  function bl(e, t, n, r) {
    if (Is = null, e = It(r), e = Hn(e), e !== null) if (t = Wt(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = nr(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Is = e, null;
  }
  function $o(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ed()) {
          case Kl:
            return 1;
          case Uo:
            return 4;
          case Ps:
          case td:
            return 16;
          case Xo:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var xn = null, $l = null, Bs = null;
  function ea() {
    if (Bs) return Bs;
    var e, t = $l, n = t.length, r, s = "value" in xn ? xn.value : xn.textContent, i = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++) ;
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === s[i - r]; r++) ;
    return Bs = s.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Ws(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Fs() {
    return !0;
  }
  function ta() {
    return !1;
  }
  function St(e) {
    function t(n, r, s, i, a) {
      this._reactName = n, this._targetInst = s, this.type = r, this.nativeEvent = i, this.target = a, this.currentTarget = null;
      for (var f in e) e.hasOwnProperty(f) && (n = e[f], this[f] = n ? n(i) : i[f]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Fs : ta, this.isPropagationStopped = ta, this;
    }
    return Q(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Fs);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Fs);
    }, persist: function() {
    }, isPersistent: Fs }), t;
  }
  var ir = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ei = St(ir), Gr = Q({}, ir, { view: 0, detail: 0 }), hd = St(Gr), ti, ni, Vr, Hs = Q({}, Gr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: si, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Vr && (Vr && e.type === "mousemove" ? (ti = e.screenX - Vr.screenX, ni = e.screenY - Vr.screenY) : ni = ti = 0, Vr = e), ti);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : ni;
  } }), na = St(Hs), md = Q({}, Hs, { dataTransfer: 0 }), vd = St(md), yd = Q({}, Gr, { relatedTarget: 0 }), ri = St(yd), gd = Q({}, ir, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), xd = St(gd), wd = Q({}, ir, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), kd = St(wd), jd = Q({}, ir, { data: 0 }), ra = St(jd), Nd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Sd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Ad = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Cd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ad[e]) ? !!t[e] : !1;
  }
  function si() {
    return Cd;
  }
  var Ed = Q({}, Gr, { key: function(e) {
    if (e.key) {
      var t = Nd[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Ws(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Sd[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: si, charCode: function(e) {
    return e.type === "keypress" ? Ws(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ws(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Pd = St(Ed), Rd = Q({}, Hs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), sa = St(Rd), Ld = Q({}, Gr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: si }), zd = St(Ld), Md = Q({}, ir, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Td = St(Md), Dd = Q({}, Hs, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Od = St(Dd), Id = [9, 13, 27, 32], li = E && "CompositionEvent" in window, qr = null;
  E && "documentMode" in document && (qr = document.documentMode);
  var Bd = E && "TextEvent" in window && !qr, la = E && (!li || qr && 8 < qr && 11 >= qr), ia = " ", oa = !1;
  function aa(e, t) {
    switch (e) {
      case "keyup":
        return Id.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ua(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var or = !1;
  function Wd(e, t) {
    switch (e) {
      case "compositionend":
        return ua(t);
      case "keypress":
        return t.which !== 32 ? null : (oa = !0, ia);
      case "textInput":
        return e = t.data, e === ia && oa ? null : e;
      default:
        return null;
    }
  }
  function Fd(e, t) {
    if (or) return e === "compositionend" || !li && aa(e, t) ? (e = ea(), Bs = $l = xn = null, or = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return la && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Hd = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function ca(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Hd[e.type] : t === "textarea";
  }
  function da(e, t, n, r) {
    Tr(r), t = Ks(t, "onChange"), 0 < t.length && (n = new ei("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Yr = null, Jr = null;
  function Qd(e) {
    Ra(e, 0);
  }
  function Qs(e) {
    var t = fr(e);
    if (Ce(t)) return e;
  }
  function Ud(e, t) {
    if (e === "change") return t;
  }
  var fa = !1;
  if (E) {
    var ii;
    if (E) {
      var oi = "oninput" in document;
      if (!oi) {
        var pa = document.createElement("div");
        pa.setAttribute("oninput", "return;"), oi = typeof pa.oninput == "function";
      }
      ii = oi;
    } else ii = !1;
    fa = ii && (!document.documentMode || 9 < document.documentMode);
  }
  function ha() {
    Yr && (Yr.detachEvent("onpropertychange", ma), Jr = Yr = null);
  }
  function ma(e) {
    if (e.propertyName === "value" && Qs(Jr)) {
      var t = [];
      da(t, Jr, e, It(e)), Ne(Qd, t);
    }
  }
  function Xd(e, t, n) {
    e === "focusin" ? (ha(), Yr = t, Jr = n, Yr.attachEvent("onpropertychange", ma)) : e === "focusout" && ha();
  }
  function _d(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Qs(Jr);
  }
  function Kd(e, t) {
    if (e === "click") return Qs(t);
  }
  function Gd(e, t) {
    if (e === "input" || e === "change") return Qs(t);
  }
  function Vd(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ht = typeof Object.is == "function" ? Object.is : Vd;
  function Zr(e, t) {
    if (Ht(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var s = n[r];
      if (!A.call(t, s) || !Ht(e[s], t[s])) return !1;
    }
    return !0;
  }
  function va(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ya(e, t) {
    var n = va(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = va(n);
    }
  }
  function ga(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ga(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function xa() {
    for (var e = window, t = De(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = De(e.document);
    }
    return t;
  }
  function ai(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function qd(e) {
    var t = xa(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && ga(n.ownerDocument.documentElement, n)) {
      if (r !== null && ai(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var s = n.textContent.length, i = Math.min(r.start, s);
          r = r.end === void 0 ? i : Math.min(r.end, s), !e.extend && i > r && (s = r, r = i, i = s), s = ya(n, i);
          var a = ya(
            n,
            r
          );
          s && a && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(s.node, s.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Yd = E && "documentMode" in document && 11 >= document.documentMode, ar = null, ui = null, br = null, ci = !1;
  function wa(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ci || ar == null || ar !== De(r) || (r = ar, "selectionStart" in r && ai(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), br && Zr(br, r) || (br = r, r = Ks(ui, "onSelect"), 0 < r.length && (t = new ei("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = ar)));
  }
  function Us(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var ur = { animationend: Us("Animation", "AnimationEnd"), animationiteration: Us("Animation", "AnimationIteration"), animationstart: Us("Animation", "AnimationStart"), transitionend: Us("Transition", "TransitionEnd") }, di = {}, ka = {};
  E && (ka = document.createElement("div").style, "AnimationEvent" in window || (delete ur.animationend.animation, delete ur.animationiteration.animation, delete ur.animationstart.animation), "TransitionEvent" in window || delete ur.transitionend.transition);
  function Xs(e) {
    if (di[e]) return di[e];
    if (!ur[e]) return e;
    var t = ur[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in ka) return di[e] = t[n];
    return e;
  }
  var ja = Xs("animationend"), Na = Xs("animationiteration"), Sa = Xs("animationstart"), Aa = Xs("transitionend"), Ca = /* @__PURE__ */ new Map(), Ea = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function wn(e, t) {
    Ca.set(e, t), w(t, [e]);
  }
  for (var fi = 0; fi < Ea.length; fi++) {
    var pi = Ea[fi], Jd = pi.toLowerCase(), Zd = pi[0].toUpperCase() + pi.slice(1);
    wn(Jd, "on" + Zd);
  }
  wn(ja, "onAnimationEnd"), wn(Na, "onAnimationIteration"), wn(Sa, "onAnimationStart"), wn("dblclick", "onDoubleClick"), wn("focusin", "onFocus"), wn("focusout", "onBlur"), wn(Aa, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), w("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), w("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), w("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), w("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), w("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), w("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var $r = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), bd = new Set("cancel close invalid load scroll toggle".split(" ").concat($r));
  function Pa(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, _l(r, t, void 0, e), e.currentTarget = null;
  }
  function Ra(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], s = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t) for (var a = r.length - 1; 0 <= a; a--) {
          var f = r[a], p = f.instance, k = f.currentTarget;
          if (f = f.listener, p !== i && s.isPropagationStopped()) break e;
          Pa(s, f, k), i = p;
        }
        else for (a = 0; a < r.length; a++) {
          if (f = r[a], p = f.instance, k = f.currentTarget, f = f.listener, p !== i && s.isPropagationStopped()) break e;
          Pa(s, f, k), i = p;
        }
      }
    }
    if (st) throw e = Dr, st = !1, Dr = null, e;
  }
  function Be(e, t) {
    var n = t[ki];
    n === void 0 && (n = t[ki] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (La(t, e, 2, !1), n.add(r));
  }
  function hi(e, t, n) {
    var r = 0;
    t && (r |= 4), La(n, e, r, t);
  }
  var _s = "_reactListening" + Math.random().toString(36).slice(2);
  function es(e) {
    if (!e[_s]) {
      e[_s] = !0, y.forEach(function(n) {
        n !== "selectionchange" && (bd.has(n) || hi(n, !1, e), hi(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[_s] || (t[_s] = !0, hi("selectionchange", !1, t));
    }
  }
  function La(e, t, n, r) {
    switch ($o(t)) {
      case 1:
        var s = fd;
        break;
      case 4:
        s = pd;
        break;
      default:
        s = Zl;
    }
    n = s.bind(null, t, n, e), s = void 0, !Le || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), r ? s !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: s }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, { passive: s }) : e.addEventListener(t, n, !1);
  }
  function mi(e, t, n, r, s) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var f = r.stateNode.containerInfo;
        if (f === s || f.nodeType === 8 && f.parentNode === s) break;
        if (a === 4) for (a = r.return; a !== null; ) {
          var p = a.tag;
          if ((p === 3 || p === 4) && (p = a.stateNode.containerInfo, p === s || p.nodeType === 8 && p.parentNode === s)) return;
          a = a.return;
        }
        for (; f !== null; ) {
          if (a = Hn(f), a === null) return;
          if (p = a.tag, p === 5 || p === 6) {
            r = i = a;
            continue e;
          }
          f = f.parentNode;
        }
      }
      r = r.return;
    }
    Ne(function() {
      var k = i, L = It(n), T = [];
      e: {
        var R = Ca.get(e);
        if (R !== void 0) {
          var J = ei, $ = e;
          switch (e) {
            case "keypress":
              if (Ws(n) === 0) break e;
            case "keydown":
            case "keyup":
              J = Pd;
              break;
            case "focusin":
              $ = "focus", J = ri;
              break;
            case "focusout":
              $ = "blur", J = ri;
              break;
            case "beforeblur":
            case "afterblur":
              J = ri;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              J = na;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              J = vd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              J = zd;
              break;
            case ja:
            case Na:
            case Sa:
              J = xd;
              break;
            case Aa:
              J = Td;
              break;
            case "scroll":
              J = hd;
              break;
            case "wheel":
              J = Od;
              break;
            case "copy":
            case "cut":
            case "paste":
              J = kd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              J = sa;
          }
          var ee = (t & 4) !== 0, Ke = !ee && e === "scroll", g = ee ? R !== null ? R + "Capture" : null : R;
          ee = [];
          for (var h = k, x; h !== null; ) {
            x = h;
            var O = x.stateNode;
            if (x.tag === 5 && O !== null && (x = O, g !== null && (O = ge(h, g), O != null && ee.push(ts(h, O, x)))), Ke) break;
            h = h.return;
          }
          0 < ee.length && (R = new J(R, $, null, n, L), T.push({ event: R, listeners: ee }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (R = e === "mouseover" || e === "pointerover", J = e === "mouseout" || e === "pointerout", R && n !== qt && ($ = n.relatedTarget || n.fromElement) && (Hn($) || $[ln])) break e;
          if ((J || R) && (R = L.window === L ? L : (R = L.ownerDocument) ? R.defaultView || R.parentWindow : window, J ? ($ = n.relatedTarget || n.toElement, J = k, $ = $ ? Hn($) : null, $ !== null && (Ke = Wt($), $ !== Ke || $.tag !== 5 && $.tag !== 6) && ($ = null)) : (J = null, $ = k), J !== $)) {
            if (ee = na, O = "onMouseLeave", g = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (ee = sa, O = "onPointerLeave", g = "onPointerEnter", h = "pointer"), Ke = J == null ? R : fr(J), x = $ == null ? R : fr($), R = new ee(O, h + "leave", J, n, L), R.target = Ke, R.relatedTarget = x, O = null, Hn(L) === k && (ee = new ee(g, h + "enter", $, n, L), ee.target = x, ee.relatedTarget = Ke, O = ee), Ke = O, J && $) t: {
              for (ee = J, g = $, h = 0, x = ee; x; x = cr(x)) h++;
              for (x = 0, O = g; O; O = cr(O)) x++;
              for (; 0 < h - x; ) ee = cr(ee), h--;
              for (; 0 < x - h; ) g = cr(g), x--;
              for (; h--; ) {
                if (ee === g || g !== null && ee === g.alternate) break t;
                ee = cr(ee), g = cr(g);
              }
              ee = null;
            }
            else ee = null;
            J !== null && za(T, R, J, ee, !1), $ !== null && Ke !== null && za(T, Ke, $, ee, !0);
          }
        }
        e: {
          if (R = k ? fr(k) : window, J = R.nodeName && R.nodeName.toLowerCase(), J === "select" || J === "input" && R.type === "file") var ne = Ud;
          else if (ca(R)) if (fa) ne = Gd;
          else {
            ne = _d;
            var ae = Xd;
          }
          else (J = R.nodeName) && J.toLowerCase() === "input" && (R.type === "checkbox" || R.type === "radio") && (ne = Kd);
          if (ne && (ne = ne(e, k))) {
            da(T, ne, n, L);
            break e;
          }
          ae && ae(e, R, k), e === "focusout" && (ae = R._wrapperState) && ae.controlled && R.type === "number" && Pe(R, "number", R.value);
        }
        switch (ae = k ? fr(k) : window, e) {
          case "focusin":
            (ca(ae) || ae.contentEditable === "true") && (ar = ae, ui = k, br = null);
            break;
          case "focusout":
            br = ui = ar = null;
            break;
          case "mousedown":
            ci = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ci = !1, wa(T, n, L);
            break;
          case "selectionchange":
            if (Yd) break;
          case "keydown":
          case "keyup":
            wa(T, n, L);
        }
        var ue;
        if (li) e: {
          switch (e) {
            case "compositionstart":
              var ce = "onCompositionStart";
              break e;
            case "compositionend":
              ce = "onCompositionEnd";
              break e;
            case "compositionupdate":
              ce = "onCompositionUpdate";
              break e;
          }
          ce = void 0;
        }
        else or ? aa(e, n) && (ce = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ce = "onCompositionStart");
        ce && (la && n.locale !== "ko" && (or || ce !== "onCompositionStart" ? ce === "onCompositionEnd" && or && (ue = ea()) : (xn = L, $l = "value" in xn ? xn.value : xn.textContent, or = !0)), ae = Ks(k, ce), 0 < ae.length && (ce = new ra(ce, e, null, n, L), T.push({ event: ce, listeners: ae }), ue ? ce.data = ue : (ue = ua(n), ue !== null && (ce.data = ue)))), (ue = Bd ? Wd(e, n) : Fd(e, n)) && (k = Ks(k, "onBeforeInput"), 0 < k.length && (L = new ra("onBeforeInput", "beforeinput", null, n, L), T.push({ event: L, listeners: k }), L.data = ue));
      }
      Ra(T, t);
    });
  }
  function ts(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ks(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var s = e, i = s.stateNode;
      s.tag === 5 && i !== null && (s = i, i = ge(e, n), i != null && r.unshift(ts(e, i, s)), i = ge(e, t), i != null && r.push(ts(e, i, s))), e = e.return;
    }
    return r;
  }
  function cr(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function za(e, t, n, r, s) {
    for (var i = t._reactName, a = []; n !== null && n !== r; ) {
      var f = n, p = f.alternate, k = f.stateNode;
      if (p !== null && p === r) break;
      f.tag === 5 && k !== null && (f = k, s ? (p = ge(n, i), p != null && a.unshift(ts(n, p, f))) : s || (p = ge(n, i), p != null && a.push(ts(n, p, f)))), n = n.return;
    }
    a.length !== 0 && e.push({ event: t, listeners: a });
  }
  var $d = /\r\n?/g, ef = /\u0000|\uFFFD/g;
  function Ma(e) {
    return (typeof e == "string" ? e : "" + e).replace($d, `
`).replace(ef, "");
  }
  function Gs(e, t, n) {
    if (t = Ma(t), Ma(e) !== t && n) throw Error(u(425));
  }
  function Vs() {
  }
  var vi = null, yi = null;
  function gi(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var xi = typeof setTimeout == "function" ? setTimeout : void 0, tf = typeof clearTimeout == "function" ? clearTimeout : void 0, Ta = typeof Promise == "function" ? Promise : void 0, nf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ta < "u" ? function(e) {
    return Ta.resolve(null).then(e).catch(rf);
  } : xi;
  function rf(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function wi(e, t) {
    var n = t, r = 0;
    do {
      var s = n.nextSibling;
      if (e.removeChild(n), s && s.nodeType === 8) if (n = s.data, n === "/$") {
        if (r === 0) {
          e.removeChild(s), Kr(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = s;
    } while (n);
    Kr(t);
  }
  function kn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Da(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var dr = Math.random().toString(36).slice(2), Jt = "__reactFiber$" + dr, ns = "__reactProps$" + dr, ln = "__reactContainer$" + dr, ki = "__reactEvents$" + dr, sf = "__reactListeners$" + dr, lf = "__reactHandles$" + dr;
  function Hn(e) {
    var t = e[Jt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[ln] || n[Jt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Da(e); e !== null; ) {
          if (n = e[Jt]) return n;
          e = Da(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function rs(e) {
    return e = e[Jt] || e[ln], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function fr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(u(33));
  }
  function qs(e) {
    return e[ns] || null;
  }
  var ji = [], pr = -1;
  function jn(e) {
    return { current: e };
  }
  function We(e) {
    0 > pr || (e.current = ji[pr], ji[pr] = null, pr--);
  }
  function Ie(e, t) {
    pr++, ji[pr] = e.current, e.current = t;
  }
  var Nn = {}, lt = jn(Nn), mt = jn(!1), Qn = Nn;
  function hr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Nn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var s = {}, i;
    for (i in n) s[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = s), s;
  }
  function vt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Ys() {
    We(mt), We(lt);
  }
  function Oa(e, t, n) {
    if (lt.current !== Nn) throw Error(u(168));
    Ie(lt, t), Ie(mt, n);
  }
  function Ia(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var s in r) if (!(s in t)) throw Error(u(108, le(e) || "Unknown", s));
    return Q({}, n, r);
  }
  function Js(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Nn, Qn = lt.current, Ie(lt, e), Ie(mt, mt.current), !0;
  }
  function Ba(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(u(169));
    n ? (e = Ia(e, t, Qn), r.__reactInternalMemoizedMergedChildContext = e, We(mt), We(lt), Ie(lt, e)) : We(mt), Ie(mt, n);
  }
  var on = null, Zs = !1, Ni = !1;
  function Wa(e) {
    on === null ? on = [e] : on.push(e);
  }
  function of(e) {
    Zs = !0, Wa(e);
  }
  function Sn() {
    if (!Ni && on !== null) {
      Ni = !0;
      var e = 0, t = ze;
      try {
        var n = on;
        for (ze = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        on = null, Zs = !1;
      } catch (s) {
        throw on !== null && (on = on.slice(e + 1)), Wr(Kl, Sn), s;
      } finally {
        ze = t, Ni = !1;
      }
    }
    return null;
  }
  var mr = [], vr = 0, bs = null, $s = 0, Lt = [], zt = 0, Un = null, an = 1, un = "";
  function Xn(e, t) {
    mr[vr++] = $s, mr[vr++] = bs, bs = e, $s = t;
  }
  function Fa(e, t, n) {
    Lt[zt++] = an, Lt[zt++] = un, Lt[zt++] = Un, Un = e;
    var r = an;
    e = un;
    var s = 32 - Ft(r) - 1;
    r &= ~(1 << s), n += 1;
    var i = 32 - Ft(t) + s;
    if (30 < i) {
      var a = s - s % 5;
      i = (r & (1 << a) - 1).toString(32), r >>= a, s -= a, an = 1 << 32 - Ft(t) + s | n << s | r, un = i + e;
    } else an = 1 << i | n << s | r, un = e;
  }
  function Si(e) {
    e.return !== null && (Xn(e, 1), Fa(e, 1, 0));
  }
  function Ai(e) {
    for (; e === bs; ) bs = mr[--vr], mr[vr] = null, $s = mr[--vr], mr[vr] = null;
    for (; e === Un; ) Un = Lt[--zt], Lt[zt] = null, un = Lt[--zt], Lt[zt] = null, an = Lt[--zt], Lt[zt] = null;
  }
  var At = null, Ct = null, He = !1, Qt = null;
  function Ha(e, t) {
    var n = Ot(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Qa(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, At = e, Ct = kn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, At = e, Ct = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Un !== null ? { id: an, overflow: un } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ot(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, At = e, Ct = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ci(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ei(e) {
    if (He) {
      var t = Ct;
      if (t) {
        var n = t;
        if (!Qa(e, t)) {
          if (Ci(e)) throw Error(u(418));
          t = kn(n.nextSibling);
          var r = At;
          t && Qa(e, t) ? Ha(r, n) : (e.flags = e.flags & -4097 | 2, He = !1, At = e);
        }
      } else {
        if (Ci(e)) throw Error(u(418));
        e.flags = e.flags & -4097 | 2, He = !1, At = e;
      }
    }
  }
  function Ua(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    At = e;
  }
  function el(e) {
    if (e !== At) return !1;
    if (!He) return Ua(e), He = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !gi(e.type, e.memoizedProps)), t && (t = Ct)) {
      if (Ci(e)) throw Xa(), Error(u(418));
      for (; t; ) Ha(e, t), t = kn(t.nextSibling);
    }
    if (Ua(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Ct = kn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Ct = null;
      }
    } else Ct = At ? kn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Xa() {
    for (var e = Ct; e; ) e = kn(e.nextSibling);
  }
  function yr() {
    Ct = At = null, He = !1;
  }
  function Pi(e) {
    Qt === null ? Qt = [e] : Qt.push(e);
  }
  var af = U.ReactCurrentBatchConfig;
  function ss(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(u(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(u(147, e));
        var s = r, i = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
          var f = s.refs;
          a === null ? delete f[i] : f[i] = a;
        }, t._stringRef = i, t);
      }
      if (typeof e != "string") throw Error(u(284));
      if (!n._owner) throw Error(u(290, e));
    }
    return e;
  }
  function tl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function _a(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Ka(e) {
    function t(g, h) {
      if (e) {
        var x = g.deletions;
        x === null ? (g.deletions = [h], g.flags |= 16) : x.push(h);
      }
    }
    function n(g, h) {
      if (!e) return null;
      for (; h !== null; ) t(g, h), h = h.sibling;
      return null;
    }
    function r(g, h) {
      for (g = /* @__PURE__ */ new Map(); h !== null; ) h.key !== null ? g.set(h.key, h) : g.set(h.index, h), h = h.sibling;
      return g;
    }
    function s(g, h) {
      return g = Mn(g, h), g.index = 0, g.sibling = null, g;
    }
    function i(g, h, x) {
      return g.index = x, e ? (x = g.alternate, x !== null ? (x = x.index, x < h ? (g.flags |= 2, h) : x) : (g.flags |= 2, h)) : (g.flags |= 1048576, h);
    }
    function a(g) {
      return e && g.alternate === null && (g.flags |= 2), g;
    }
    function f(g, h, x, O) {
      return h === null || h.tag !== 6 ? (h = wo(x, g.mode, O), h.return = g, h) : (h = s(h, x), h.return = g, h);
    }
    function p(g, h, x, O) {
      var ne = x.type;
      return ne === G ? L(g, h, x.props.children, O, x.key) : h !== null && (h.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === Se && _a(ne) === h.type) ? (O = s(h, x.props), O.ref = ss(g, h, x), O.return = g, O) : (O = Al(x.type, x.key, x.props, null, g.mode, O), O.ref = ss(g, h, x), O.return = g, O);
    }
    function k(g, h, x, O) {
      return h === null || h.tag !== 4 || h.stateNode.containerInfo !== x.containerInfo || h.stateNode.implementation !== x.implementation ? (h = ko(x, g.mode, O), h.return = g, h) : (h = s(h, x.children || []), h.return = g, h);
    }
    function L(g, h, x, O, ne) {
      return h === null || h.tag !== 7 ? (h = Zn(x, g.mode, O, ne), h.return = g, h) : (h = s(h, x), h.return = g, h);
    }
    function T(g, h, x) {
      if (typeof h == "string" && h !== "" || typeof h == "number") return h = wo("" + h, g.mode, x), h.return = g, h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case _:
            return x = Al(h.type, h.key, h.props, null, g.mode, x), x.ref = ss(g, null, h), x.return = g, x;
          case se:
            return h = ko(h, g.mode, x), h.return = g, h;
          case Se:
            var O = h._init;
            return T(g, O(h._payload), x);
        }
        if (Oe(h) || te(h)) return h = Zn(h, g.mode, x, null), h.return = g, h;
        tl(g, h);
      }
      return null;
    }
    function R(g, h, x, O) {
      var ne = h !== null ? h.key : null;
      if (typeof x == "string" && x !== "" || typeof x == "number") return ne !== null ? null : f(g, h, "" + x, O);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case _:
            return x.key === ne ? p(g, h, x, O) : null;
          case se:
            return x.key === ne ? k(g, h, x, O) : null;
          case Se:
            return ne = x._init, R(
              g,
              h,
              ne(x._payload),
              O
            );
        }
        if (Oe(x) || te(x)) return ne !== null ? null : L(g, h, x, O, null);
        tl(g, x);
      }
      return null;
    }
    function J(g, h, x, O, ne) {
      if (typeof O == "string" && O !== "" || typeof O == "number") return g = g.get(x) || null, f(h, g, "" + O, ne);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case _:
            return g = g.get(O.key === null ? x : O.key) || null, p(h, g, O, ne);
          case se:
            return g = g.get(O.key === null ? x : O.key) || null, k(h, g, O, ne);
          case Se:
            var ae = O._init;
            return J(g, h, x, ae(O._payload), ne);
        }
        if (Oe(O) || te(O)) return g = g.get(x) || null, L(h, g, O, ne, null);
        tl(h, O);
      }
      return null;
    }
    function $(g, h, x, O) {
      for (var ne = null, ae = null, ue = h, ce = h = 0, et = null; ue !== null && ce < x.length; ce++) {
        ue.index > ce ? (et = ue, ue = null) : et = ue.sibling;
        var Ee = R(g, ue, x[ce], O);
        if (Ee === null) {
          ue === null && (ue = et);
          break;
        }
        e && ue && Ee.alternate === null && t(g, ue), h = i(Ee, h, ce), ae === null ? ne = Ee : ae.sibling = Ee, ae = Ee, ue = et;
      }
      if (ce === x.length) return n(g, ue), He && Xn(g, ce), ne;
      if (ue === null) {
        for (; ce < x.length; ce++) ue = T(g, x[ce], O), ue !== null && (h = i(ue, h, ce), ae === null ? ne = ue : ae.sibling = ue, ae = ue);
        return He && Xn(g, ce), ne;
      }
      for (ue = r(g, ue); ce < x.length; ce++) et = J(ue, g, ce, x[ce], O), et !== null && (e && et.alternate !== null && ue.delete(et.key === null ? ce : et.key), h = i(et, h, ce), ae === null ? ne = et : ae.sibling = et, ae = et);
      return e && ue.forEach(function(Tn) {
        return t(g, Tn);
      }), He && Xn(g, ce), ne;
    }
    function ee(g, h, x, O) {
      var ne = te(x);
      if (typeof ne != "function") throw Error(u(150));
      if (x = ne.call(x), x == null) throw Error(u(151));
      for (var ae = ne = null, ue = h, ce = h = 0, et = null, Ee = x.next(); ue !== null && !Ee.done; ce++, Ee = x.next()) {
        ue.index > ce ? (et = ue, ue = null) : et = ue.sibling;
        var Tn = R(g, ue, Ee.value, O);
        if (Tn === null) {
          ue === null && (ue = et);
          break;
        }
        e && ue && Tn.alternate === null && t(g, ue), h = i(Tn, h, ce), ae === null ? ne = Tn : ae.sibling = Tn, ae = Tn, ue = et;
      }
      if (Ee.done) return n(
        g,
        ue
      ), He && Xn(g, ce), ne;
      if (ue === null) {
        for (; !Ee.done; ce++, Ee = x.next()) Ee = T(g, Ee.value, O), Ee !== null && (h = i(Ee, h, ce), ae === null ? ne = Ee : ae.sibling = Ee, ae = Ee);
        return He && Xn(g, ce), ne;
      }
      for (ue = r(g, ue); !Ee.done; ce++, Ee = x.next()) Ee = J(ue, g, ce, Ee.value, O), Ee !== null && (e && Ee.alternate !== null && ue.delete(Ee.key === null ? ce : Ee.key), h = i(Ee, h, ce), ae === null ? ne = Ee : ae.sibling = Ee, ae = Ee);
      return e && ue.forEach(function(Qf) {
        return t(g, Qf);
      }), He && Xn(g, ce), ne;
    }
    function Ke(g, h, x, O) {
      if (typeof x == "object" && x !== null && x.type === G && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case _:
            e: {
              for (var ne = x.key, ae = h; ae !== null; ) {
                if (ae.key === ne) {
                  if (ne = x.type, ne === G) {
                    if (ae.tag === 7) {
                      n(g, ae.sibling), h = s(ae, x.props.children), h.return = g, g = h;
                      break e;
                    }
                  } else if (ae.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === Se && _a(ne) === ae.type) {
                    n(g, ae.sibling), h = s(ae, x.props), h.ref = ss(g, ae, x), h.return = g, g = h;
                    break e;
                  }
                  n(g, ae);
                  break;
                } else t(g, ae);
                ae = ae.sibling;
              }
              x.type === G ? (h = Zn(x.props.children, g.mode, O, x.key), h.return = g, g = h) : (O = Al(x.type, x.key, x.props, null, g.mode, O), O.ref = ss(g, h, x), O.return = g, g = O);
            }
            return a(g);
          case se:
            e: {
              for (ae = x.key; h !== null; ) {
                if (h.key === ae) if (h.tag === 4 && h.stateNode.containerInfo === x.containerInfo && h.stateNode.implementation === x.implementation) {
                  n(g, h.sibling), h = s(h, x.children || []), h.return = g, g = h;
                  break e;
                } else {
                  n(g, h);
                  break;
                }
                else t(g, h);
                h = h.sibling;
              }
              h = ko(x, g.mode, O), h.return = g, g = h;
            }
            return a(g);
          case Se:
            return ae = x._init, Ke(g, h, ae(x._payload), O);
        }
        if (Oe(x)) return $(g, h, x, O);
        if (te(x)) return ee(g, h, x, O);
        tl(g, x);
      }
      return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x, h !== null && h.tag === 6 ? (n(g, h.sibling), h = s(h, x), h.return = g, g = h) : (n(g, h), h = wo(x, g.mode, O), h.return = g, g = h), a(g)) : n(g, h);
    }
    return Ke;
  }
  var gr = Ka(!0), Ga = Ka(!1), nl = jn(null), rl = null, xr = null, Ri = null;
  function Li() {
    Ri = xr = rl = null;
  }
  function zi(e) {
    var t = nl.current;
    We(nl), e._currentValue = t;
  }
  function Mi(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function wr(e, t) {
    rl = e, Ri = xr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (yt = !0), e.firstContext = null);
  }
  function Mt(e) {
    var t = e._currentValue;
    if (Ri !== e) if (e = { context: e, memoizedValue: t, next: null }, xr === null) {
      if (rl === null) throw Error(u(308));
      xr = e, rl.dependencies = { lanes: 0, firstContext: e };
    } else xr = xr.next = e;
    return t;
  }
  var _n = null;
  function Ti(e) {
    _n === null ? _n = [e] : _n.push(e);
  }
  function Va(e, t, n, r) {
    var s = t.interleaved;
    return s === null ? (n.next = n, Ti(t)) : (n.next = s.next, s.next = n), t.interleaved = n, cn(e, r);
  }
  function cn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var An = !1;
  function Di(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function qa(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function dn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Cn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (Ae & 2) !== 0) {
      var s = r.pending;
      return s === null ? t.next = t : (t.next = s.next, s.next = t), r.pending = t, cn(e, n);
    }
    return s = r.interleaved, s === null ? (t.next = t, Ti(r)) : (t.next = s.next, s.next = t), r.interleaved = t, cn(e, n);
  }
  function sl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ql(e, n);
    }
  }
  function Ya(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var s = null, i = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          i === null ? s = i = a : i = i.next = a, n = n.next;
        } while (n !== null);
        i === null ? s = i = t : i = i.next = t;
      } else s = i = t;
      n = { baseState: r.baseState, firstBaseUpdate: s, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function ll(e, t, n, r) {
    var s = e.updateQueue;
    An = !1;
    var i = s.firstBaseUpdate, a = s.lastBaseUpdate, f = s.shared.pending;
    if (f !== null) {
      s.shared.pending = null;
      var p = f, k = p.next;
      p.next = null, a === null ? i = k : a.next = k, a = p;
      var L = e.alternate;
      L !== null && (L = L.updateQueue, f = L.lastBaseUpdate, f !== a && (f === null ? L.firstBaseUpdate = k : f.next = k, L.lastBaseUpdate = p));
    }
    if (i !== null) {
      var T = s.baseState;
      a = 0, L = k = p = null, f = i;
      do {
        var R = f.lane, J = f.eventTime;
        if ((r & R) === R) {
          L !== null && (L = L.next = {
            eventTime: J,
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          });
          e: {
            var $ = e, ee = f;
            switch (R = t, J = n, ee.tag) {
              case 1:
                if ($ = ee.payload, typeof $ == "function") {
                  T = $.call(J, T, R);
                  break e;
                }
                T = $;
                break e;
              case 3:
                $.flags = $.flags & -65537 | 128;
              case 0:
                if ($ = ee.payload, R = typeof $ == "function" ? $.call(J, T, R) : $, R == null) break e;
                T = Q({}, T, R);
                break e;
              case 2:
                An = !0;
            }
          }
          f.callback !== null && f.lane !== 0 && (e.flags |= 64, R = s.effects, R === null ? s.effects = [f] : R.push(f));
        } else J = { eventTime: J, lane: R, tag: f.tag, payload: f.payload, callback: f.callback, next: null }, L === null ? (k = L = J, p = T) : L = L.next = J, a |= R;
        if (f = f.next, f === null) {
          if (f = s.shared.pending, f === null) break;
          R = f, f = R.next, R.next = null, s.lastBaseUpdate = R, s.shared.pending = null;
        }
      } while (!0);
      if (L === null && (p = T), s.baseState = p, s.firstBaseUpdate = k, s.lastBaseUpdate = L, t = s.shared.interleaved, t !== null) {
        s = t;
        do
          a |= s.lane, s = s.next;
        while (s !== t);
      } else i === null && (s.shared.lanes = 0);
      Vn |= a, e.lanes = a, e.memoizedState = T;
    }
  }
  function Ja(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], s = r.callback;
      if (s !== null) {
        if (r.callback = null, r = n, typeof s != "function") throw Error(u(191, s));
        s.call(r);
      }
    }
  }
  var ls = {}, Zt = jn(ls), is = jn(ls), os = jn(ls);
  function Kn(e) {
    if (e === ls) throw Error(u(174));
    return e;
  }
  function Oi(e, t) {
    switch (Ie(os, t), Ie(is, e), Ie(Zt, ls), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Vt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Vt(t, e);
    }
    We(Zt), Ie(Zt, t);
  }
  function kr() {
    We(Zt), We(is), We(os);
  }
  function Za(e) {
    Kn(os.current);
    var t = Kn(Zt.current), n = Vt(t, e.type);
    t !== n && (Ie(is, e), Ie(Zt, n));
  }
  function Ii(e) {
    is.current === e && (We(Zt), We(is));
  }
  var Qe = jn(0);
  function il(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Bi = [];
  function Wi() {
    for (var e = 0; e < Bi.length; e++) Bi[e]._workInProgressVersionPrimary = null;
    Bi.length = 0;
  }
  var ol = U.ReactCurrentDispatcher, Fi = U.ReactCurrentBatchConfig, Gn = 0, Ue = null, Je = null, be = null, al = !1, as = !1, us = 0, uf = 0;
  function it() {
    throw Error(u(321));
  }
  function Hi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ht(e[n], t[n])) return !1;
    return !0;
  }
  function Qi(e, t, n, r, s, i) {
    if (Gn = i, Ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ol.current = e === null || e.memoizedState === null ? pf : hf, e = n(r, s), as) {
      i = 0;
      do {
        if (as = !1, us = 0, 25 <= i) throw Error(u(301));
        i += 1, be = Je = null, t.updateQueue = null, ol.current = mf, e = n(r, s);
      } while (as);
    }
    if (ol.current = dl, t = Je !== null && Je.next !== null, Gn = 0, be = Je = Ue = null, al = !1, t) throw Error(u(300));
    return e;
  }
  function Ui() {
    var e = us !== 0;
    return us = 0, e;
  }
  function bt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return be === null ? Ue.memoizedState = be = e : be = be.next = e, be;
  }
  function Tt() {
    if (Je === null) {
      var e = Ue.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Je.next;
    var t = be === null ? Ue.memoizedState : be.next;
    if (t !== null) be = t, Je = e;
    else {
      if (e === null) throw Error(u(310));
      Je = e, e = { memoizedState: Je.memoizedState, baseState: Je.baseState, baseQueue: Je.baseQueue, queue: Je.queue, next: null }, be === null ? Ue.memoizedState = be = e : be = be.next = e;
    }
    return be;
  }
  function cs(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Xi(e) {
    var t = Tt(), n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = Je, s = r.baseQueue, i = n.pending;
    if (i !== null) {
      if (s !== null) {
        var a = s.next;
        s.next = i.next, i.next = a;
      }
      r.baseQueue = s = i, n.pending = null;
    }
    if (s !== null) {
      i = s.next, r = r.baseState;
      var f = a = null, p = null, k = i;
      do {
        var L = k.lane;
        if ((Gn & L) === L) p !== null && (p = p.next = { lane: 0, action: k.action, hasEagerState: k.hasEagerState, eagerState: k.eagerState, next: null }), r = k.hasEagerState ? k.eagerState : e(r, k.action);
        else {
          var T = {
            lane: L,
            action: k.action,
            hasEagerState: k.hasEagerState,
            eagerState: k.eagerState,
            next: null
          };
          p === null ? (f = p = T, a = r) : p = p.next = T, Ue.lanes |= L, Vn |= L;
        }
        k = k.next;
      } while (k !== null && k !== i);
      p === null ? a = r : p.next = f, Ht(r, t.memoizedState) || (yt = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = p, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      s = e;
      do
        i = s.lane, Ue.lanes |= i, Vn |= i, s = s.next;
      while (s !== e);
    } else s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function _i(e) {
    var t = Tt(), n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, s = n.pending, i = t.memoizedState;
    if (s !== null) {
      n.pending = null;
      var a = s = s.next;
      do
        i = e(i, a.action), a = a.next;
      while (a !== s);
      Ht(i, t.memoizedState) || (yt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, r];
  }
  function ba() {
  }
  function $a(e, t) {
    var n = Ue, r = Tt(), s = t(), i = !Ht(r.memoizedState, s);
    if (i && (r.memoizedState = s, yt = !0), r = r.queue, Ki(nu.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || be !== null && be.memoizedState.tag & 1) {
      if (n.flags |= 2048, ds(9, tu.bind(null, n, r, s, t), void 0, null), $e === null) throw Error(u(349));
      (Gn & 30) !== 0 || eu(n, t, s);
    }
    return s;
  }
  function eu(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ue.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function tu(e, t, n, r) {
    t.value = n, t.getSnapshot = r, ru(t) && su(e);
  }
  function nu(e, t, n) {
    return n(function() {
      ru(t) && su(e);
    });
  }
  function ru(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ht(e, n);
    } catch {
      return !0;
    }
  }
  function su(e) {
    var t = cn(e, 1);
    t !== null && Kt(t, e, 1, -1);
  }
  function lu(e) {
    var t = bt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: cs, lastRenderedState: e }, t.queue = e, e = e.dispatch = ff.bind(null, Ue, e), [t.memoizedState, e];
  }
  function ds(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ue.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function iu() {
    return Tt().memoizedState;
  }
  function ul(e, t, n, r) {
    var s = bt();
    Ue.flags |= e, s.memoizedState = ds(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function cl(e, t, n, r) {
    var s = Tt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Je !== null) {
      var a = Je.memoizedState;
      if (i = a.destroy, r !== null && Hi(r, a.deps)) {
        s.memoizedState = ds(t, n, i, r);
        return;
      }
    }
    Ue.flags |= e, s.memoizedState = ds(1 | t, n, i, r);
  }
  function ou(e, t) {
    return ul(8390656, 8, e, t);
  }
  function Ki(e, t) {
    return cl(2048, 8, e, t);
  }
  function au(e, t) {
    return cl(4, 2, e, t);
  }
  function uu(e, t) {
    return cl(4, 4, e, t);
  }
  function cu(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function du(e, t, n) {
    return n = n != null ? n.concat([e]) : null, cl(4, 4, cu.bind(null, t, e), n);
  }
  function Gi() {
  }
  function fu(e, t) {
    var n = Tt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Hi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function pu(e, t) {
    var n = Tt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Hi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function hu(e, t, n) {
    return (Gn & 21) === 0 ? (e.baseState && (e.baseState = !1, yt = !0), e.memoizedState = n) : (Ht(n, t) || (n = _o(), Ue.lanes |= n, Vn |= n, e.baseState = !0), t);
  }
  function cf(e, t) {
    var n = ze;
    ze = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Fi.transition;
    Fi.transition = {};
    try {
      e(!1), t();
    } finally {
      ze = n, Fi.transition = r;
    }
  }
  function mu() {
    return Tt().memoizedState;
  }
  function df(e, t, n) {
    var r = Ln(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, vu(e)) yu(t, n);
    else if (n = Va(e, t, n, r), n !== null) {
      var s = ft();
      Kt(n, e, r, s), gu(n, t, r);
    }
  }
  function ff(e, t, n) {
    var r = Ln(e), s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (vu(e)) yu(t, s);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
        var a = t.lastRenderedState, f = i(a, n);
        if (s.hasEagerState = !0, s.eagerState = f, Ht(f, a)) {
          var p = t.interleaved;
          p === null ? (s.next = s, Ti(t)) : (s.next = p.next, p.next = s), t.interleaved = s;
          return;
        }
      } catch {
      } finally {
      }
      n = Va(e, t, s, r), n !== null && (s = ft(), Kt(n, e, r, s), gu(n, t, r));
    }
  }
  function vu(e) {
    var t = e.alternate;
    return e === Ue || t !== null && t === Ue;
  }
  function yu(e, t) {
    as = al = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function gu(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ql(e, n);
    }
  }
  var dl = { readContext: Mt, useCallback: it, useContext: it, useEffect: it, useImperativeHandle: it, useInsertionEffect: it, useLayoutEffect: it, useMemo: it, useReducer: it, useRef: it, useState: it, useDebugValue: it, useDeferredValue: it, useTransition: it, useMutableSource: it, useSyncExternalStore: it, useId: it, unstable_isNewReconciler: !1 }, pf = { readContext: Mt, useCallback: function(e, t) {
    return bt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Mt, useEffect: ou, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ul(
      4194308,
      4,
      cu.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return ul(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return ul(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = bt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = bt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = df.bind(null, Ue, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = bt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: lu, useDebugValue: Gi, useDeferredValue: function(e) {
    return bt().memoizedState = e;
  }, useTransition: function() {
    var e = lu(!1), t = e[0];
    return e = cf.bind(null, e[1]), bt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Ue, s = bt();
    if (He) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else {
      if (n = t(), $e === null) throw Error(u(349));
      (Gn & 30) !== 0 || eu(r, t, n);
    }
    s.memoizedState = n;
    var i = { value: n, getSnapshot: t };
    return s.queue = i, ou(nu.bind(
      null,
      r,
      i,
      e
    ), [e]), r.flags |= 2048, ds(9, tu.bind(null, r, i, n, t), void 0, null), n;
  }, useId: function() {
    var e = bt(), t = $e.identifierPrefix;
    if (He) {
      var n = un, r = an;
      n = (r & ~(1 << 32 - Ft(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = us++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = uf++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, hf = {
    readContext: Mt,
    useCallback: fu,
    useContext: Mt,
    useEffect: Ki,
    useImperativeHandle: du,
    useInsertionEffect: au,
    useLayoutEffect: uu,
    useMemo: pu,
    useReducer: Xi,
    useRef: iu,
    useState: function() {
      return Xi(cs);
    },
    useDebugValue: Gi,
    useDeferredValue: function(e) {
      var t = Tt();
      return hu(t, Je.memoizedState, e);
    },
    useTransition: function() {
      var e = Xi(cs)[0], t = Tt().memoizedState;
      return [e, t];
    },
    useMutableSource: ba,
    useSyncExternalStore: $a,
    useId: mu,
    unstable_isNewReconciler: !1
  }, mf = { readContext: Mt, useCallback: fu, useContext: Mt, useEffect: Ki, useImperativeHandle: du, useInsertionEffect: au, useLayoutEffect: uu, useMemo: pu, useReducer: _i, useRef: iu, useState: function() {
    return _i(cs);
  }, useDebugValue: Gi, useDeferredValue: function(e) {
    var t = Tt();
    return Je === null ? t.memoizedState = e : hu(t, Je.memoizedState, e);
  }, useTransition: function() {
    var e = _i(cs)[0], t = Tt().memoizedState;
    return [e, t];
  }, useMutableSource: ba, useSyncExternalStore: $a, useId: mu, unstable_isNewReconciler: !1 };
  function Ut(e, t) {
    if (e && e.defaultProps) {
      t = Q({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Vi(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : Q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var fl = { isMounted: function(e) {
    return (e = e._reactInternals) ? Wt(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = ft(), s = Ln(e), i = dn(r, s);
    i.payload = t, n != null && (i.callback = n), t = Cn(e, i, s), t !== null && (Kt(t, e, s, r), sl(t, e, s));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = ft(), s = Ln(e), i = dn(r, s);
    i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Cn(e, i, s), t !== null && (Kt(t, e, s, r), sl(t, e, s));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = ft(), r = Ln(e), s = dn(n, r);
    s.tag = 2, t != null && (s.callback = t), t = Cn(e, s, r), t !== null && (Kt(t, e, r, n), sl(t, e, r));
  } };
  function xu(e, t, n, r, s, i, a) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, a) : t.prototype && t.prototype.isPureReactComponent ? !Zr(n, r) || !Zr(s, i) : !0;
  }
  function wu(e, t, n) {
    var r = !1, s = Nn, i = t.contextType;
    return typeof i == "object" && i !== null ? i = Mt(i) : (s = vt(t) ? Qn : lt.current, r = t.contextTypes, i = (r = r != null) ? hr(e, s) : Nn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = fl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = i), t;
  }
  function ku(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && fl.enqueueReplaceState(t, t.state, null);
  }
  function qi(e, t, n, r) {
    var s = e.stateNode;
    s.props = n, s.state = e.memoizedState, s.refs = {}, Di(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? s.context = Mt(i) : (i = vt(t) ? Qn : lt.current, s.context = hr(e, i)), s.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Vi(e, t, i, n), s.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), t !== s.state && fl.enqueueReplaceState(s, s.state, null), ll(e, n, s, r), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function jr(e, t) {
    try {
      var n = "", r = t;
      do
        n += C(r), r = r.return;
      while (r);
      var s = n;
    } catch (i) {
      s = `
Error generating stack: ` + i.message + `
` + i.stack;
    }
    return { value: e, source: t, stack: s, digest: null };
  }
  function Yi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ji(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var vf = typeof WeakMap == "function" ? WeakMap : Map;
  function ju(e, t, n) {
    n = dn(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      xl || (xl = !0, fo = r), Ji(e, t);
    }, n;
  }
  function Nu(e, t, n) {
    n = dn(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var s = t.value;
      n.payload = function() {
        return r(s);
      }, n.callback = function() {
        Ji(e, t);
      };
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
      Ji(e, t), typeof r != "function" && (Pn === null ? Pn = /* @__PURE__ */ new Set([this]) : Pn.add(this));
      var a = t.stack;
      this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
    }), n;
  }
  function Su(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new vf();
      var s = /* @__PURE__ */ new Set();
      r.set(t, s);
    } else s = r.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), r.set(t, s));
    s.has(n) || (s.add(n), e = Lf.bind(null, e, t, n), t.then(e, e));
  }
  function Au(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Cu(e, t, n, r, s) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = dn(-1, 1), t.tag = 2, Cn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = s, e);
  }
  var yf = U.ReactCurrentOwner, yt = !1;
  function dt(e, t, n, r) {
    t.child = e === null ? Ga(t, null, n, r) : gr(t, e.child, n, r);
  }
  function Eu(e, t, n, r, s) {
    n = n.render;
    var i = t.ref;
    return wr(t, s), r = Qi(e, t, n, r, i, s), n = Ui(), e !== null && !yt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, fn(e, t, s)) : (He && n && Si(t), t.flags |= 1, dt(e, t, r, s), t.child);
  }
  function Pu(e, t, n, r, s) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !xo(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Ru(e, t, i, r, s)) : (e = Al(n.type, null, r, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, (e.lanes & s) === 0) {
      var a = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Zr, n(a, r) && e.ref === t.ref) return fn(e, t, s);
    }
    return t.flags |= 1, e = Mn(i, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Ru(e, t, n, r, s) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Zr(i, r) && e.ref === t.ref) if (yt = !1, t.pendingProps = r = i, (e.lanes & s) !== 0) (e.flags & 131072) !== 0 && (yt = !0);
      else return t.lanes = e.lanes, fn(e, t, s);
    }
    return Zi(e, t, n, r, s);
  }
  function Lu(e, t, n) {
    var r = t.pendingProps, s = r.children, i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ie(Sr, Et), Et |= n;
    else {
      if ((n & 1073741824) === 0) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ie(Sr, Et), Et |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Ie(Sr, Et), Et |= r;
    }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Ie(Sr, Et), Et |= r;
    return dt(e, t, s, n), t.child;
  }
  function zu(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Zi(e, t, n, r, s) {
    var i = vt(n) ? Qn : lt.current;
    return i = hr(t, i), wr(t, s), n = Qi(e, t, n, r, i, s), r = Ui(), e !== null && !yt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, fn(e, t, s)) : (He && r && Si(t), t.flags |= 1, dt(e, t, n, s), t.child);
  }
  function Mu(e, t, n, r, s) {
    if (vt(n)) {
      var i = !0;
      Js(t);
    } else i = !1;
    if (wr(t, s), t.stateNode === null) hl(e, t), wu(t, n, r), qi(t, n, r, s), r = !0;
    else if (e === null) {
      var a = t.stateNode, f = t.memoizedProps;
      a.props = f;
      var p = a.context, k = n.contextType;
      typeof k == "object" && k !== null ? k = Mt(k) : (k = vt(n) ? Qn : lt.current, k = hr(t, k));
      var L = n.getDerivedStateFromProps, T = typeof L == "function" || typeof a.getSnapshotBeforeUpdate == "function";
      T || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (f !== r || p !== k) && ku(t, a, r, k), An = !1;
      var R = t.memoizedState;
      a.state = R, ll(t, r, a, s), p = t.memoizedState, f !== r || R !== p || mt.current || An ? (typeof L == "function" && (Vi(t, n, L, r), p = t.memoizedState), (f = An || xu(t, n, f, r, R, p, k)) ? (T || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = k, r = f) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      a = t.stateNode, qa(e, t), f = t.memoizedProps, k = t.type === t.elementType ? f : Ut(t.type, f), a.props = k, T = t.pendingProps, R = a.context, p = n.contextType, typeof p == "object" && p !== null ? p = Mt(p) : (p = vt(n) ? Qn : lt.current, p = hr(t, p));
      var J = n.getDerivedStateFromProps;
      (L = typeof J == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (f !== T || R !== p) && ku(t, a, r, p), An = !1, R = t.memoizedState, a.state = R, ll(t, r, a, s);
      var $ = t.memoizedState;
      f !== T || R !== $ || mt.current || An ? (typeof J == "function" && (Vi(t, n, J, r), $ = t.memoizedState), (k = An || xu(t, n, k, r, R, $, p) || !1) ? (L || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, $, p), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, $, p)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || f === e.memoizedProps && R === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && R === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = $), a.props = r, a.state = $, a.context = p, r = k) : (typeof a.componentDidUpdate != "function" || f === e.memoizedProps && R === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && R === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return bi(e, t, n, r, i, s);
  }
  function bi(e, t, n, r, s, i) {
    zu(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a) return s && Ba(t, n, !1), fn(e, t, i);
    r = t.stateNode, yf.current = t;
    var f = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && a ? (t.child = gr(t, e.child, null, i), t.child = gr(t, null, f, i)) : dt(e, t, f, i), t.memoizedState = r.state, s && Ba(t, n, !0), t.child;
  }
  function Tu(e) {
    var t = e.stateNode;
    t.pendingContext ? Oa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Oa(e, t.context, !1), Oi(e, t.containerInfo);
  }
  function Du(e, t, n, r, s) {
    return yr(), Pi(s), t.flags |= 256, dt(e, t, n, r), t.child;
  }
  var $i = { dehydrated: null, treeContext: null, retryLane: 0 };
  function eo(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ou(e, t, n) {
    var r = t.pendingProps, s = Qe.current, i = !1, a = (t.flags & 128) !== 0, f;
    if ((f = a) || (f = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0), f ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1), Ie(Qe, s & 1), e === null)
      return Ei(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (a = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, a = { mode: "hidden", children: a }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = Cl(a, r, 0, null), e = Zn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = eo(n), t.memoizedState = $i, e) : to(t, a));
    if (s = e.memoizedState, s !== null && (f = s.dehydrated, f !== null)) return gf(e, t, a, r, f, s, n);
    if (i) {
      i = r.fallback, a = t.mode, s = e.child, f = s.sibling;
      var p = { mode: "hidden", children: r.children };
      return (a & 1) === 0 && t.child !== s ? (r = t.child, r.childLanes = 0, r.pendingProps = p, t.deletions = null) : (r = Mn(s, p), r.subtreeFlags = s.subtreeFlags & 14680064), f !== null ? i = Mn(f, i) : (i = Zn(i, a, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, a = e.child.memoizedState, a = a === null ? eo(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, i.memoizedState = a, i.childLanes = e.childLanes & ~n, t.memoizedState = $i, r;
    }
    return i = e.child, e = i.sibling, r = Mn(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function to(e, t) {
    return t = Cl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function pl(e, t, n, r) {
    return r !== null && Pi(r), gr(t, e.child, null, n), e = to(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function gf(e, t, n, r, s, i, a) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Yi(Error(u(422))), pl(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, s = t.mode, r = Cl({ mode: "visible", children: r.children }, s, 0, null), i = Zn(i, s, a, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && gr(t, e.child, null, a), t.child.memoizedState = eo(a), t.memoizedState = $i, i);
    if ((t.mode & 1) === 0) return pl(e, t, a, null);
    if (s.data === "$!") {
      if (r = s.nextSibling && s.nextSibling.dataset, r) var f = r.dgst;
      return r = f, i = Error(u(419)), r = Yi(i, r, void 0), pl(e, t, a, r);
    }
    if (f = (a & e.childLanes) !== 0, yt || f) {
      if (r = $e, r !== null) {
        switch (a & -a) {
          case 4:
            s = 2;
            break;
          case 16:
            s = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            s = 32;
            break;
          case 536870912:
            s = 268435456;
            break;
          default:
            s = 0;
        }
        s = (s & (r.suspendedLanes | a)) !== 0 ? 0 : s, s !== 0 && s !== i.retryLane && (i.retryLane = s, cn(e, s), Kt(r, e, s, -1));
      }
      return go(), r = Yi(Error(u(421))), pl(e, t, a, r);
    }
    return s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = zf.bind(null, e), s._reactRetry = t, null) : (e = i.treeContext, Ct = kn(s.nextSibling), At = t, He = !0, Qt = null, e !== null && (Lt[zt++] = an, Lt[zt++] = un, Lt[zt++] = Un, an = e.id, un = e.overflow, Un = t), t = to(t, r.children), t.flags |= 4096, t);
  }
  function Iu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Mi(e.return, t, n);
  }
  function no(e, t, n, r, s) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: s } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = s);
  }
  function Bu(e, t, n) {
    var r = t.pendingProps, s = r.revealOrder, i = r.tail;
    if (dt(e, t, r.children, n), r = Qe.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Iu(e, n, t);
        else if (e.tag === 19) Iu(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (Ie(Qe, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; ) e = n.alternate, e !== null && il(e) === null && (s = n), n = n.sibling;
        n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), no(t, !1, s, n, i);
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (e = s.alternate, e !== null && il(e) === null) {
            t.child = s;
            break;
          }
          e = s.sibling, s.sibling = n, n = s, s = e;
        }
        no(t, !0, n, null, i);
        break;
      case "together":
        no(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function hl(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function fn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Vn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (e = t.child, n = Mn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Mn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function xf(e, t, n) {
    switch (t.tag) {
      case 3:
        Tu(t), yr();
        break;
      case 5:
        Za(t);
        break;
      case 1:
        vt(t.type) && Js(t);
        break;
      case 4:
        Oi(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, s = t.memoizedProps.value;
        Ie(nl, r._currentValue), r._currentValue = s;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Ie(Qe, Qe.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Ou(e, t, n) : (Ie(Qe, Qe.current & 1), e = fn(e, t, n), e !== null ? e.sibling : null);
        Ie(Qe, Qe.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return Bu(e, t, n);
          t.flags |= 128;
        }
        if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Ie(Qe, Qe.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Lu(e, t, n);
    }
    return fn(e, t, n);
  }
  var Wu, ro, Fu, Hu;
  Wu = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, ro = function() {
  }, Fu = function(e, t, n, r) {
    var s = e.memoizedProps;
    if (s !== r) {
      e = t.stateNode, Kn(Zt.current);
      var i = null;
      switch (n) {
        case "input":
          s = Ye(e, s), r = Ye(e, r), i = [];
          break;
        case "select":
          s = Q({}, s, { value: void 0 }), r = Q({}, r, { value: void 0 }), i = [];
          break;
        case "textarea":
          s = tn(e, s), r = tn(e, r), i = [];
          break;
        default:
          typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Vs);
      }
      sn(n, r);
      var a;
      n = null;
      for (k in s) if (!r.hasOwnProperty(k) && s.hasOwnProperty(k) && s[k] != null) if (k === "style") {
        var f = s[k];
        for (a in f) f.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
      } else k !== "dangerouslySetInnerHTML" && k !== "children" && k !== "suppressContentEditableWarning" && k !== "suppressHydrationWarning" && k !== "autoFocus" && (v.hasOwnProperty(k) ? i || (i = []) : (i = i || []).push(k, null));
      for (k in r) {
        var p = r[k];
        if (f = s?.[k], r.hasOwnProperty(k) && p !== f && (p != null || f != null)) if (k === "style") if (f) {
          for (a in f) !f.hasOwnProperty(a) || p && p.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
          for (a in p) p.hasOwnProperty(a) && f[a] !== p[a] && (n || (n = {}), n[a] = p[a]);
        } else n || (i || (i = []), i.push(
          k,
          n
        )), n = p;
        else k === "dangerouslySetInnerHTML" ? (p = p ? p.__html : void 0, f = f ? f.__html : void 0, p != null && f !== p && (i = i || []).push(k, p)) : k === "children" ? typeof p != "string" && typeof p != "number" || (i = i || []).push(k, "" + p) : k !== "suppressContentEditableWarning" && k !== "suppressHydrationWarning" && (v.hasOwnProperty(k) ? (p != null && k === "onScroll" && Be("scroll", e), i || f === p || (i = [])) : (i = i || []).push(k, p));
      }
      n && (i = i || []).push("style", n);
      var k = i;
      (t.updateQueue = k) && (t.flags |= 4);
    }
  }, Hu = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function fs(e, t) {
    if (!He) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function ot(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags & 14680064, r |= s.flags & 14680064, s.return = e, s = s.sibling;
    else for (s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags, r |= s.flags, s.return = e, s = s.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function wf(e, t, n) {
    var r = t.pendingProps;
    switch (Ai(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ot(t), null;
      case 1:
        return vt(t.type) && Ys(), ot(t), null;
      case 3:
        return r = t.stateNode, kr(), We(mt), We(lt), Wi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (el(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Qt !== null && (mo(Qt), Qt = null))), ro(e, t), ot(t), null;
      case 5:
        Ii(t);
        var s = Kn(os.current);
        if (n = t.type, e !== null && t.stateNode != null) Fu(e, t, n, r, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(u(166));
            return ot(t), null;
          }
          if (e = Kn(Zt.current), el(t)) {
            r = t.stateNode, n = t.type;
            var i = t.memoizedProps;
            switch (r[Jt] = t, r[ns] = i, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Be("cancel", r), Be("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Be("load", r);
                break;
              case "video":
              case "audio":
                for (s = 0; s < $r.length; s++) Be($r[s], r);
                break;
              case "source":
                Be("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Be(
                  "error",
                  r
                ), Be("load", r);
                break;
              case "details":
                Be("toggle", r);
                break;
              case "input":
                Ge(r, i), Be("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!i.multiple }, Be("invalid", r);
                break;
              case "textarea":
                jt(r, i), Be("invalid", r);
            }
            sn(n, i), s = null;
            for (var a in i) if (i.hasOwnProperty(a)) {
              var f = i[a];
              a === "children" ? typeof f == "string" ? r.textContent !== f && (i.suppressHydrationWarning !== !0 && Gs(r.textContent, f, e), s = ["children", f]) : typeof f == "number" && r.textContent !== "" + f && (i.suppressHydrationWarning !== !0 && Gs(
                r.textContent,
                f,
                e
              ), s = ["children", "" + f]) : v.hasOwnProperty(a) && f != null && a === "onScroll" && Be("scroll", r);
            }
            switch (n) {
              case "input":
                Te(r), Ve(r, i, !0);
                break;
              case "textarea":
                Te(r), Dn(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = Vs);
            }
            r = s, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            a = s.nodeType === 9 ? s : s.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = On(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[Jt] = t, e[ns] = r, Wu(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (a = Wn(n, r), n) {
                case "dialog":
                  Be("cancel", e), Be("close", e), s = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Be("load", e), s = r;
                  break;
                case "video":
                case "audio":
                  for (s = 0; s < $r.length; s++) Be($r[s], e);
                  s = r;
                  break;
                case "source":
                  Be("error", e), s = r;
                  break;
                case "img":
                case "image":
                case "link":
                  Be(
                    "error",
                    e
                  ), Be("load", e), s = r;
                  break;
                case "details":
                  Be("toggle", e), s = r;
                  break;
                case "input":
                  Ge(e, r), s = Ye(e, r), Be("invalid", e);
                  break;
                case "option":
                  s = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, s = Q({}, r, { value: void 0 }), Be("invalid", e);
                  break;
                case "textarea":
                  jt(e, r), s = tn(e, r), Be("invalid", e);
                  break;
                default:
                  s = r;
              }
              sn(n, s), f = s;
              for (i in f) if (f.hasOwnProperty(i)) {
                var p = f[i];
                i === "style" ? rn(e, p) : i === "dangerouslySetInnerHTML" ? (p = p ? p.__html : void 0, p != null && er(e, p)) : i === "children" ? typeof p == "string" ? (n !== "textarea" || p !== "") && Nt(e, p) : typeof p == "number" && Nt(e, "" + p) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (v.hasOwnProperty(i) ? p != null && i === "onScroll" && Be("scroll", e) : p != null && de(e, i, p, a));
              }
              switch (n) {
                case "input":
                  Te(e), Ve(e, r, !1);
                  break;
                case "textarea":
                  Te(e), Dn(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + oe(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, i = r.value, i != null ? kt(e, !!r.multiple, i, !1) : r.defaultValue != null && kt(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof s.onClick == "function" && (e.onclick = Vs);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return ot(t), null;
      case 6:
        if (e && t.stateNode != null) Hu(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(u(166));
          if (n = Kn(os.current), Kn(Zt.current), el(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Jt] = t, (i = r.nodeValue !== n) && (e = At, e !== null)) switch (e.tag) {
              case 3:
                Gs(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Gs(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            i && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Jt] = t, t.stateNode = r;
        }
        return ot(t), null;
      case 13:
        if (We(Qe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (He && Ct !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Xa(), yr(), t.flags |= 98560, i = !1;
          else if (i = el(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(u(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(u(317));
              i[Jt] = t;
            } else yr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ot(t), i = !1;
          } else Qt !== null && (mo(Qt), Qt = null), i = !0;
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Qe.current & 1) !== 0 ? Ze === 0 && (Ze = 3) : go())), t.updateQueue !== null && (t.flags |= 4), ot(t), null);
      case 4:
        return kr(), ro(e, t), e === null && es(t.stateNode.containerInfo), ot(t), null;
      case 10:
        return zi(t.type._context), ot(t), null;
      case 17:
        return vt(t.type) && Ys(), ot(t), null;
      case 19:
        if (We(Qe), i = t.memoizedState, i === null) return ot(t), null;
        if (r = (t.flags & 128) !== 0, a = i.rendering, a === null) if (r) fs(i, !1);
        else {
          if (Ze !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (a = il(e), a !== null) {
              for (t.flags |= 128, fs(i, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Ie(Qe, Qe.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          i.tail !== null && _e() > Ar && (t.flags |= 128, r = !0, fs(i, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = il(a), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), fs(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !He) return ot(t), null;
          } else 2 * _e() - i.renderingStartTime > Ar && n !== 1073741824 && (t.flags |= 128, r = !0, fs(i, !1), t.lanes = 4194304);
          i.isBackwards ? (a.sibling = t.child, t.child = a) : (n = i.last, n !== null ? n.sibling = a : t.child = a, i.last = a);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = _e(), t.sibling = null, n = Qe.current, Ie(Qe, r ? n & 1 | 2 : n & 1), t) : (ot(t), null);
      case 22:
      case 23:
        return yo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (Et & 1073741824) !== 0 && (ot(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ot(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function kf(e, t) {
    switch (Ai(t), t.tag) {
      case 1:
        return vt(t.type) && Ys(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return kr(), We(mt), We(lt), Wi(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Ii(t), null;
      case 13:
        if (We(Qe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(u(340));
          yr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return We(Qe), null;
      case 4:
        return kr(), null;
      case 10:
        return zi(t.type._context), null;
      case 22:
      case 23:
        return yo(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ml = !1, at = !1, jf = typeof WeakSet == "function" ? WeakSet : Set, b = null;
  function Nr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Xe(e, t, r);
    }
    else n.current = null;
  }
  function so(e, t, n) {
    try {
      n();
    } catch (r) {
      Xe(e, t, r);
    }
  }
  var Qu = !1;
  function Nf(e, t) {
    if (vi = Os, e = xa(), ai(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset, i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0, f = -1, p = -1, k = 0, L = 0, T = e, R = null;
          t: for (; ; ) {
            for (var J; T !== n || s !== 0 && T.nodeType !== 3 || (f = a + s), T !== i || r !== 0 && T.nodeType !== 3 || (p = a + r), T.nodeType === 3 && (a += T.nodeValue.length), (J = T.firstChild) !== null; )
              R = T, T = J;
            for (; ; ) {
              if (T === e) break t;
              if (R === n && ++k === s && (f = a), R === i && ++L === r && (p = a), (J = T.nextSibling) !== null) break;
              T = R, R = T.parentNode;
            }
            T = J;
          }
          n = f === -1 || p === -1 ? null : { start: f, end: p };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (yi = { focusedElem: e, selectionRange: n }, Os = !1, b = t; b !== null; ) if (t = b, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, b = e;
    else for (; b !== null; ) {
      t = b;
      try {
        var $ = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if ($ !== null) {
              var ee = $.memoizedProps, Ke = $.memoizedState, g = t.stateNode, h = g.getSnapshotBeforeUpdate(t.elementType === t.type ? ee : Ut(t.type, ee), Ke);
              g.__reactInternalSnapshotBeforeUpdate = h;
            }
            break;
          case 3:
            var x = t.stateNode.containerInfo;
            x.nodeType === 1 ? x.textContent = "" : x.nodeType === 9 && x.documentElement && x.removeChild(x.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(u(163));
        }
      } catch (O) {
        Xe(t, t.return, O);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, b = e;
        break;
      }
      b = t.return;
    }
    return $ = Qu, Qu = !1, $;
  }
  function ps(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var s = r = r.next;
      do {
        if ((s.tag & e) === e) {
          var i = s.destroy;
          s.destroy = void 0, i !== void 0 && so(t, n, i);
        }
        s = s.next;
      } while (s !== r);
    }
  }
  function vl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function lo(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Uu(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Uu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Jt], delete t[ns], delete t[ki], delete t[sf], delete t[lf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Xu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function _u(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Xu(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function io(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Vs));
    else if (r !== 4 && (e = e.child, e !== null)) for (io(e, t, n), e = e.sibling; e !== null; ) io(e, t, n), e = e.sibling;
  }
  function oo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (oo(e, t, n), e = e.sibling; e !== null; ) oo(e, t, n), e = e.sibling;
  }
  var tt = null, Xt = !1;
  function En(e, t, n) {
    for (n = n.child; n !== null; ) Ku(e, t, n), n = n.sibling;
  }
  function Ku(e, t, n) {
    if (Yt && typeof Yt.onCommitFiberUnmount == "function") try {
      Yt.onCommitFiberUnmount(Rs, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        at || Nr(n, t);
      case 6:
        var r = tt, s = Xt;
        tt = null, En(e, t, n), tt = r, Xt = s, tt !== null && (Xt ? (e = tt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : tt.removeChild(n.stateNode));
        break;
      case 18:
        tt !== null && (Xt ? (e = tt, n = n.stateNode, e.nodeType === 8 ? wi(e.parentNode, n) : e.nodeType === 1 && wi(e, n), Kr(e)) : wi(tt, n.stateNode));
        break;
      case 4:
        r = tt, s = Xt, tt = n.stateNode.containerInfo, Xt = !0, En(e, t, n), tt = r, Xt = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!at && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          s = r = r.next;
          do {
            var i = s, a = i.destroy;
            i = i.tag, a !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && so(n, t, a), s = s.next;
          } while (s !== r);
        }
        En(e, t, n);
        break;
      case 1:
        if (!at && (Nr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (f) {
          Xe(n, t, f);
        }
        En(e, t, n);
        break;
      case 21:
        En(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (at = (r = at) || n.memoizedState !== null, En(e, t, n), at = r) : En(e, t, n);
        break;
      default:
        En(e, t, n);
    }
  }
  function Gu(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new jf()), t.forEach(function(r) {
        var s = Mf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      });
    }
  }
  function _t(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var i = e, a = t, f = a;
        e: for (; f !== null; ) {
          switch (f.tag) {
            case 5:
              tt = f.stateNode, Xt = !1;
              break e;
            case 3:
              tt = f.stateNode.containerInfo, Xt = !0;
              break e;
            case 4:
              tt = f.stateNode.containerInfo, Xt = !0;
              break e;
          }
          f = f.return;
        }
        if (tt === null) throw Error(u(160));
        Ku(i, a, s), tt = null, Xt = !1;
        var p = s.alternate;
        p !== null && (p.return = null), s.return = null;
      } catch (k) {
        Xe(s, t, k);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Vu(t, e), t = t.sibling;
  }
  function Vu(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (_t(t, e), $t(e), r & 4) {
          try {
            ps(3, e, e.return), vl(3, e);
          } catch (ee) {
            Xe(e, e.return, ee);
          }
          try {
            ps(5, e, e.return);
          } catch (ee) {
            Xe(e, e.return, ee);
          }
        }
        break;
      case 1:
        _t(t, e), $t(e), r & 512 && n !== null && Nr(n, n.return);
        break;
      case 5:
        if (_t(t, e), $t(e), r & 512 && n !== null && Nr(n, n.return), e.flags & 32) {
          var s = e.stateNode;
          try {
            Nt(s, "");
          } catch (ee) {
            Xe(e, e.return, ee);
          }
        }
        if (r & 4 && (s = e.stateNode, s != null)) {
          var i = e.memoizedProps, a = n !== null ? n.memoizedProps : i, f = e.type, p = e.updateQueue;
          if (e.updateQueue = null, p !== null) try {
            f === "input" && i.type === "radio" && i.name != null && en(s, i), Wn(f, a);
            var k = Wn(f, i);
            for (a = 0; a < p.length; a += 2) {
              var L = p[a], T = p[a + 1];
              L === "style" ? rn(s, T) : L === "dangerouslySetInnerHTML" ? er(s, T) : L === "children" ? Nt(s, T) : de(s, L, T, k);
            }
            switch (f) {
              case "input":
                je(s, i);
                break;
              case "textarea":
                nn(s, i);
                break;
              case "select":
                var R = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!i.multiple;
                var J = i.value;
                J != null ? kt(s, !!i.multiple, J, !1) : R !== !!i.multiple && (i.defaultValue != null ? kt(
                  s,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : kt(s, !!i.multiple, i.multiple ? [] : "", !1));
            }
            s[ns] = i;
          } catch (ee) {
            Xe(e, e.return, ee);
          }
        }
        break;
      case 6:
        if (_t(t, e), $t(e), r & 4) {
          if (e.stateNode === null) throw Error(u(162));
          s = e.stateNode, i = e.memoizedProps;
          try {
            s.nodeValue = i;
          } catch (ee) {
            Xe(e, e.return, ee);
          }
        }
        break;
      case 3:
        if (_t(t, e), $t(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Kr(t.containerInfo);
        } catch (ee) {
          Xe(e, e.return, ee);
        }
        break;
      case 4:
        _t(t, e), $t(e);
        break;
      case 13:
        _t(t, e), $t(e), s = e.child, s.flags & 8192 && (i = s.memoizedState !== null, s.stateNode.isHidden = i, !i || s.alternate !== null && s.alternate.memoizedState !== null || (co = _e())), r & 4 && Gu(e);
        break;
      case 22:
        if (L = n !== null && n.memoizedState !== null, e.mode & 1 ? (at = (k = at) || L, _t(t, e), at = k) : _t(t, e), $t(e), r & 8192) {
          if (k = e.memoizedState !== null, (e.stateNode.isHidden = k) && !L && (e.mode & 1) !== 0) for (b = e, L = e.child; L !== null; ) {
            for (T = b = L; b !== null; ) {
              switch (R = b, J = R.child, R.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ps(4, R, R.return);
                  break;
                case 1:
                  Nr(R, R.return);
                  var $ = R.stateNode;
                  if (typeof $.componentWillUnmount == "function") {
                    r = R, n = R.return;
                    try {
                      t = r, $.props = t.memoizedProps, $.state = t.memoizedState, $.componentWillUnmount();
                    } catch (ee) {
                      Xe(r, n, ee);
                    }
                  }
                  break;
                case 5:
                  Nr(R, R.return);
                  break;
                case 22:
                  if (R.memoizedState !== null) {
                    Ju(T);
                    continue;
                  }
              }
              J !== null ? (J.return = R, b = J) : Ju(T);
            }
            L = L.sibling;
          }
          e: for (L = null, T = e; ; ) {
            if (T.tag === 5) {
              if (L === null) {
                L = T;
                try {
                  s = T.stateNode, k ? (i = s.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (f = T.stateNode, p = T.memoizedProps.style, a = p != null && p.hasOwnProperty("display") ? p.display : null, f.style.display = Mr("display", a));
                } catch (ee) {
                  Xe(e, e.return, ee);
                }
              }
            } else if (T.tag === 6) {
              if (L === null) try {
                T.stateNode.nodeValue = k ? "" : T.memoizedProps;
              } catch (ee) {
                Xe(e, e.return, ee);
              }
            } else if ((T.tag !== 22 && T.tag !== 23 || T.memoizedState === null || T === e) && T.child !== null) {
              T.child.return = T, T = T.child;
              continue;
            }
            if (T === e) break e;
            for (; T.sibling === null; ) {
              if (T.return === null || T.return === e) break e;
              L === T && (L = null), T = T.return;
            }
            L === T && (L = null), T.sibling.return = T.return, T = T.sibling;
          }
        }
        break;
      case 19:
        _t(t, e), $t(e), r & 4 && Gu(e);
        break;
      case 21:
        break;
      default:
        _t(
          t,
          e
        ), $t(e);
    }
  }
  function $t(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Xu(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(u(160));
        }
        switch (r.tag) {
          case 5:
            var s = r.stateNode;
            r.flags & 32 && (Nt(s, ""), r.flags &= -33);
            var i = _u(e);
            oo(e, i, s);
            break;
          case 3:
          case 4:
            var a = r.stateNode.containerInfo, f = _u(e);
            io(e, f, a);
            break;
          default:
            throw Error(u(161));
        }
      } catch (p) {
        Xe(e, e.return, p);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Sf(e, t, n) {
    b = e, qu(e);
  }
  function qu(e, t, n) {
    for (var r = (e.mode & 1) !== 0; b !== null; ) {
      var s = b, i = s.child;
      if (s.tag === 22 && r) {
        var a = s.memoizedState !== null || ml;
        if (!a) {
          var f = s.alternate, p = f !== null && f.memoizedState !== null || at;
          f = ml;
          var k = at;
          if (ml = a, (at = p) && !k) for (b = s; b !== null; ) a = b, p = a.child, a.tag === 22 && a.memoizedState !== null ? Zu(s) : p !== null ? (p.return = a, b = p) : Zu(s);
          for (; i !== null; ) b = i, qu(i), i = i.sibling;
          b = s, ml = f, at = k;
        }
        Yu(e);
      } else (s.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = s, b = i) : Yu(e);
    }
  }
  function Yu(e) {
    for (; b !== null; ) {
      var t = b;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              at || vl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !at) if (n === null) r.componentDidMount();
              else {
                var s = t.elementType === t.type ? n.memoizedProps : Ut(t.type, n.memoizedProps);
                r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var i = t.updateQueue;
              i !== null && Ja(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Ja(t, a, n);
              }
              break;
            case 5:
              var f = t.stateNode;
              if (n === null && t.flags & 4) {
                n = f;
                var p = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    p.autoFocus && n.focus();
                    break;
                  case "img":
                    p.src && (n.src = p.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var k = t.alternate;
                if (k !== null) {
                  var L = k.memoizedState;
                  if (L !== null) {
                    var T = L.dehydrated;
                    T !== null && Kr(T);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(u(163));
          }
          at || t.flags & 512 && lo(t);
        } catch (R) {
          Xe(t, t.return, R);
        }
      }
      if (t === e) {
        b = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, b = n;
        break;
      }
      b = t.return;
    }
  }
  function Ju(e) {
    for (; b !== null; ) {
      var t = b;
      if (t === e) {
        b = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, b = n;
        break;
      }
      b = t.return;
    }
  }
  function Zu(e) {
    for (; b !== null; ) {
      var t = b;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              vl(4, t);
            } catch (p) {
              Xe(t, n, p);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var s = t.return;
              try {
                r.componentDidMount();
              } catch (p) {
                Xe(t, s, p);
              }
            }
            var i = t.return;
            try {
              lo(t);
            } catch (p) {
              Xe(t, i, p);
            }
            break;
          case 5:
            var a = t.return;
            try {
              lo(t);
            } catch (p) {
              Xe(t, a, p);
            }
        }
      } catch (p) {
        Xe(t, t.return, p);
      }
      if (t === e) {
        b = null;
        break;
      }
      var f = t.sibling;
      if (f !== null) {
        f.return = t.return, b = f;
        break;
      }
      b = t.return;
    }
  }
  var Af = Math.ceil, yl = U.ReactCurrentDispatcher, ao = U.ReactCurrentOwner, Dt = U.ReactCurrentBatchConfig, Ae = 0, $e = null, qe = null, nt = 0, Et = 0, Sr = jn(0), Ze = 0, hs = null, Vn = 0, gl = 0, uo = 0, ms = null, gt = null, co = 0, Ar = 1 / 0, pn = null, xl = !1, fo = null, Pn = null, wl = !1, Rn = null, kl = 0, vs = 0, po = null, jl = -1, Nl = 0;
  function ft() {
    return (Ae & 6) !== 0 ? _e() : jl !== -1 ? jl : jl = _e();
  }
  function Ln(e) {
    return (e.mode & 1) === 0 ? 1 : (Ae & 2) !== 0 && nt !== 0 ? nt & -nt : af.transition !== null ? (Nl === 0 && (Nl = _o()), Nl) : (e = ze, e !== 0 || (e = window.event, e = e === void 0 ? 16 : $o(e.type)), e);
  }
  function Kt(e, t, n, r) {
    if (50 < vs) throw vs = 0, po = null, Error(u(185));
    Hr(e, n, r), ((Ae & 2) === 0 || e !== $e) && (e === $e && ((Ae & 2) === 0 && (gl |= n), Ze === 4 && zn(e, nt)), xt(e, r), n === 1 && Ae === 0 && (t.mode & 1) === 0 && (Ar = _e() + 500, Zs && Sn()));
  }
  function xt(e, t) {
    var n = e.callbackNode;
    od(e, t);
    var r = Ms(e, e === $e ? nt : 0);
    if (r === 0) n !== null && Fe(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Fe(n), t === 1) e.tag === 0 ? of($u.bind(null, e)) : Wa($u.bind(null, e)), nf(function() {
        (Ae & 6) === 0 && Sn();
      }), n = null;
      else {
        switch (Ko(r)) {
          case 1:
            n = Kl;
            break;
          case 4:
            n = Uo;
            break;
          case 16:
            n = Ps;
            break;
          case 536870912:
            n = Xo;
            break;
          default:
            n = Ps;
        }
        n = oc(n, bu.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function bu(e, t) {
    if (jl = -1, Nl = 0, (Ae & 6) !== 0) throw Error(u(327));
    var n = e.callbackNode;
    if (Cr() && e.callbackNode !== n) return null;
    var r = Ms(e, e === $e ? nt : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Sl(e, r);
    else {
      t = r;
      var s = Ae;
      Ae |= 2;
      var i = tc();
      ($e !== e || nt !== t) && (pn = null, Ar = _e() + 500, Yn(e, t));
      do
        try {
          Pf();
          break;
        } catch (f) {
          ec(e, f);
        }
      while (!0);
      Li(), yl.current = i, Ae = s, qe !== null ? t = 0 : ($e = null, nt = 0, t = Ze);
    }
    if (t !== 0) {
      if (t === 2 && (s = Gl(e), s !== 0 && (r = s, t = ho(e, s))), t === 1) throw n = hs, Yn(e, 0), zn(e, r), xt(e, _e()), n;
      if (t === 6) zn(e, r);
      else {
        if (s = e.current.alternate, (r & 30) === 0 && !Cf(s) && (t = Sl(e, r), t === 2 && (i = Gl(e), i !== 0 && (r = i, t = ho(e, i))), t === 1)) throw n = hs, Yn(e, 0), zn(e, r), xt(e, _e()), n;
        switch (e.finishedWork = s, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            Jn(e, gt, pn);
            break;
          case 3:
            if (zn(e, r), (r & 130023424) === r && (t = co + 500 - _e(), 10 < t)) {
              if (Ms(e, 0) !== 0) break;
              if (s = e.suspendedLanes, (s & r) !== r) {
                ft(), e.pingedLanes |= e.suspendedLanes & s;
                break;
              }
              e.timeoutHandle = xi(Jn.bind(null, e, gt, pn), t);
              break;
            }
            Jn(e, gt, pn);
            break;
          case 4:
            if (zn(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, s = -1; 0 < r; ) {
              var a = 31 - Ft(r);
              i = 1 << a, a = t[a], a > s && (s = a), r &= ~i;
            }
            if (r = s, r = _e() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Af(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = xi(Jn.bind(null, e, gt, pn), r);
              break;
            }
            Jn(e, gt, pn);
            break;
          case 5:
            Jn(e, gt, pn);
            break;
          default:
            throw Error(u(329));
        }
      }
    }
    return xt(e, _e()), e.callbackNode === n ? bu.bind(null, e) : null;
  }
  function ho(e, t) {
    var n = ms;
    return e.current.memoizedState.isDehydrated && (Yn(e, t).flags |= 256), e = Sl(e, t), e !== 2 && (t = gt, gt = n, t !== null && mo(t)), e;
  }
  function mo(e) {
    gt === null ? gt = e : gt.push.apply(gt, e);
  }
  function Cf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var s = n[r], i = s.getSnapshot;
          s = s.value;
          try {
            if (!Ht(i(), s)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function zn(e, t) {
    for (t &= ~uo, t &= ~gl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Ft(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function $u(e) {
    if ((Ae & 6) !== 0) throw Error(u(327));
    Cr();
    var t = Ms(e, 0);
    if ((t & 1) === 0) return xt(e, _e()), null;
    var n = Sl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Gl(e);
      r !== 0 && (t = r, n = ho(e, r));
    }
    if (n === 1) throw n = hs, Yn(e, 0), zn(e, t), xt(e, _e()), n;
    if (n === 6) throw Error(u(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Jn(e, gt, pn), xt(e, _e()), null;
  }
  function vo(e, t) {
    var n = Ae;
    Ae |= 1;
    try {
      return e(t);
    } finally {
      Ae = n, Ae === 0 && (Ar = _e() + 500, Zs && Sn());
    }
  }
  function qn(e) {
    Rn !== null && Rn.tag === 0 && (Ae & 6) === 0 && Cr();
    var t = Ae;
    Ae |= 1;
    var n = Dt.transition, r = ze;
    try {
      if (Dt.transition = null, ze = 1, e) return e();
    } finally {
      ze = r, Dt.transition = n, Ae = t, (Ae & 6) === 0 && Sn();
    }
  }
  function yo() {
    Et = Sr.current, We(Sr);
  }
  function Yn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, tf(n)), qe !== null) for (n = qe.return; n !== null; ) {
      var r = n;
      switch (Ai(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Ys();
          break;
        case 3:
          kr(), We(mt), We(lt), Wi();
          break;
        case 5:
          Ii(r);
          break;
        case 4:
          kr();
          break;
        case 13:
          We(Qe);
          break;
        case 19:
          We(Qe);
          break;
        case 10:
          zi(r.type._context);
          break;
        case 22:
        case 23:
          yo();
      }
      n = n.return;
    }
    if ($e = e, qe = e = Mn(e.current, null), nt = Et = t, Ze = 0, hs = null, uo = gl = Vn = 0, gt = ms = null, _n !== null) {
      for (t = 0; t < _n.length; t++) if (n = _n[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var s = r.next, i = n.pending;
        if (i !== null) {
          var a = i.next;
          i.next = s, r.next = a;
        }
        n.pending = r;
      }
      _n = null;
    }
    return e;
  }
  function ec(e, t) {
    do {
      var n = qe;
      try {
        if (Li(), ol.current = dl, al) {
          for (var r = Ue.memoizedState; r !== null; ) {
            var s = r.queue;
            s !== null && (s.pending = null), r = r.next;
          }
          al = !1;
        }
        if (Gn = 0, be = Je = Ue = null, as = !1, us = 0, ao.current = null, n === null || n.return === null) {
          Ze = 1, hs = t, qe = null;
          break;
        }
        e: {
          var i = e, a = n.return, f = n, p = t;
          if (t = nt, f.flags |= 32768, p !== null && typeof p == "object" && typeof p.then == "function") {
            var k = p, L = f, T = L.tag;
            if ((L.mode & 1) === 0 && (T === 0 || T === 11 || T === 15)) {
              var R = L.alternate;
              R ? (L.updateQueue = R.updateQueue, L.memoizedState = R.memoizedState, L.lanes = R.lanes) : (L.updateQueue = null, L.memoizedState = null);
            }
            var J = Au(a);
            if (J !== null) {
              J.flags &= -257, Cu(J, a, f, i, t), J.mode & 1 && Su(i, k, t), t = J, p = k;
              var $ = t.updateQueue;
              if ($ === null) {
                var ee = /* @__PURE__ */ new Set();
                ee.add(p), t.updateQueue = ee;
              } else $.add(p);
              break e;
            } else {
              if ((t & 1) === 0) {
                Su(i, k, t), go();
                break e;
              }
              p = Error(u(426));
            }
          } else if (He && f.mode & 1) {
            var Ke = Au(a);
            if (Ke !== null) {
              (Ke.flags & 65536) === 0 && (Ke.flags |= 256), Cu(Ke, a, f, i, t), Pi(jr(p, f));
              break e;
            }
          }
          i = p = jr(p, f), Ze !== 4 && (Ze = 2), ms === null ? ms = [i] : ms.push(i), i = a;
          do {
            switch (i.tag) {
              case 3:
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var g = ju(i, p, t);
                Ya(i, g);
                break e;
              case 1:
                f = p;
                var h = i.type, x = i.stateNode;
                if ((i.flags & 128) === 0 && (typeof h.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (Pn === null || !Pn.has(x)))) {
                  i.flags |= 65536, t &= -t, i.lanes |= t;
                  var O = Nu(i, f, t);
                  Ya(i, O);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        rc(n);
      } catch (ne) {
        t = ne, qe === n && n !== null && (qe = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function tc() {
    var e = yl.current;
    return yl.current = dl, e === null ? dl : e;
  }
  function go() {
    (Ze === 0 || Ze === 3 || Ze === 2) && (Ze = 4), $e === null || (Vn & 268435455) === 0 && (gl & 268435455) === 0 || zn($e, nt);
  }
  function Sl(e, t) {
    var n = Ae;
    Ae |= 2;
    var r = tc();
    ($e !== e || nt !== t) && (pn = null, Yn(e, t));
    do
      try {
        Ef();
        break;
      } catch (s) {
        ec(e, s);
      }
    while (!0);
    if (Li(), Ae = n, yl.current = r, qe !== null) throw Error(u(261));
    return $e = null, nt = 0, Ze;
  }
  function Ef() {
    for (; qe !== null; ) nc(qe);
  }
  function Pf() {
    for (; qe !== null && !ht(); ) nc(qe);
  }
  function nc(e) {
    var t = ic(e.alternate, e, Et);
    e.memoizedProps = e.pendingProps, t === null ? rc(e) : qe = t, ao.current = null;
  }
  function rc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = wf(n, t, Et), n !== null) {
          qe = n;
          return;
        }
      } else {
        if (n = kf(n, t), n !== null) {
          n.flags &= 32767, qe = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Ze = 6, qe = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        qe = t;
        return;
      }
      qe = t = e;
    } while (t !== null);
    Ze === 0 && (Ze = 5);
  }
  function Jn(e, t, n) {
    var r = ze, s = Dt.transition;
    try {
      Dt.transition = null, ze = 1, Rf(e, t, n, r);
    } finally {
      Dt.transition = s, ze = r;
    }
    return null;
  }
  function Rf(e, t, n, r) {
    do
      Cr();
    while (Rn !== null);
    if ((Ae & 6) !== 0) throw Error(u(327));
    n = e.finishedWork;
    var s = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(u(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (ad(e, i), e === $e && (qe = $e = null, nt = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || wl || (wl = !0, oc(Ps, function() {
      return Cr(), null;
    })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
      i = Dt.transition, Dt.transition = null;
      var a = ze;
      ze = 1;
      var f = Ae;
      Ae |= 4, ao.current = null, Nf(e, n), Vu(n, e), qd(yi), Os = !!vi, yi = vi = null, e.current = n, Sf(n), sr(), Ae = f, ze = a, Dt.transition = i;
    } else e.current = n;
    if (wl && (wl = !1, Rn = e, kl = s), i = e.pendingLanes, i === 0 && (Pn = null), nd(n.stateNode), xt(e, _e()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) s = t[n], r(s.value, { componentStack: s.stack, digest: s.digest });
    if (xl) throw xl = !1, e = fo, fo = null, e;
    return (kl & 1) !== 0 && e.tag !== 0 && Cr(), i = e.pendingLanes, (i & 1) !== 0 ? e === po ? vs++ : (vs = 0, po = e) : vs = 0, Sn(), null;
  }
  function Cr() {
    if (Rn !== null) {
      var e = Ko(kl), t = Dt.transition, n = ze;
      try {
        if (Dt.transition = null, ze = 16 > e ? 16 : e, Rn === null) var r = !1;
        else {
          if (e = Rn, Rn = null, kl = 0, (Ae & 6) !== 0) throw Error(u(331));
          var s = Ae;
          for (Ae |= 4, b = e.current; b !== null; ) {
            var i = b, a = i.child;
            if ((b.flags & 16) !== 0) {
              var f = i.deletions;
              if (f !== null) {
                for (var p = 0; p < f.length; p++) {
                  var k = f[p];
                  for (b = k; b !== null; ) {
                    var L = b;
                    switch (L.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ps(8, L, i);
                    }
                    var T = L.child;
                    if (T !== null) T.return = L, b = T;
                    else for (; b !== null; ) {
                      L = b;
                      var R = L.sibling, J = L.return;
                      if (Uu(L), L === k) {
                        b = null;
                        break;
                      }
                      if (R !== null) {
                        R.return = J, b = R;
                        break;
                      }
                      b = J;
                    }
                  }
                }
                var $ = i.alternate;
                if ($ !== null) {
                  var ee = $.child;
                  if (ee !== null) {
                    $.child = null;
                    do {
                      var Ke = ee.sibling;
                      ee.sibling = null, ee = Ke;
                    } while (ee !== null);
                  }
                }
                b = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && a !== null) a.return = i, b = a;
            else e: for (; b !== null; ) {
              if (i = b, (i.flags & 2048) !== 0) switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  ps(9, i, i.return);
              }
              var g = i.sibling;
              if (g !== null) {
                g.return = i.return, b = g;
                break e;
              }
              b = i.return;
            }
          }
          var h = e.current;
          for (b = h; b !== null; ) {
            a = b;
            var x = a.child;
            if ((a.subtreeFlags & 2064) !== 0 && x !== null) x.return = a, b = x;
            else e: for (a = h; b !== null; ) {
              if (f = b, (f.flags & 2048) !== 0) try {
                switch (f.tag) {
                  case 0:
                  case 11:
                  case 15:
                    vl(9, f);
                }
              } catch (ne) {
                Xe(f, f.return, ne);
              }
              if (f === a) {
                b = null;
                break e;
              }
              var O = f.sibling;
              if (O !== null) {
                O.return = f.return, b = O;
                break e;
              }
              b = f.return;
            }
          }
          if (Ae = s, Sn(), Yt && typeof Yt.onPostCommitFiberRoot == "function") try {
            Yt.onPostCommitFiberRoot(Rs, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        ze = n, Dt.transition = t;
      }
    }
    return !1;
  }
  function sc(e, t, n) {
    t = jr(n, t), t = ju(e, t, 1), e = Cn(e, t, 1), t = ft(), e !== null && (Hr(e, 1, t), xt(e, t));
  }
  function Xe(e, t, n) {
    if (e.tag === 3) sc(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        sc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Pn === null || !Pn.has(r))) {
          e = jr(n, e), e = Nu(t, e, 1), t = Cn(t, e, 1), e = ft(), t !== null && (Hr(t, 1, e), xt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Lf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = ft(), e.pingedLanes |= e.suspendedLanes & n, $e === e && (nt & n) === n && (Ze === 4 || Ze === 3 && (nt & 130023424) === nt && 500 > _e() - co ? Yn(e, 0) : uo |= n), xt(e, t);
  }
  function lc(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = zs, zs <<= 1, (zs & 130023424) === 0 && (zs = 4194304)));
    var n = ft();
    e = cn(e, t), e !== null && (Hr(e, t, n), xt(e, n));
  }
  function zf(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), lc(e, n);
  }
  function Mf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, s = e.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(u(314));
    }
    r !== null && r.delete(t), lc(e, n);
  }
  var ic;
  ic = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || mt.current) yt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return yt = !1, xf(e, t, n);
      yt = (e.flags & 131072) !== 0;
    }
    else yt = !1, He && (t.flags & 1048576) !== 0 && Fa(t, $s, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        hl(e, t), e = t.pendingProps;
        var s = hr(t, lt.current);
        wr(t, n), s = Qi(null, t, r, e, s, n);
        var i = Ui();
        return t.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, vt(r) ? (i = !0, Js(t)) : i = !1, t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, Di(t), s.updater = fl, t.stateNode = s, s._reactInternals = t, qi(t, r, e, n), t = bi(null, t, r, !0, i, n)) : (t.tag = 0, He && i && Si(t), dt(null, t, s, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (hl(e, t), e = t.pendingProps, s = r._init, r = s(r._payload), t.type = r, s = t.tag = Df(r), e = Ut(r, e), s) {
            case 0:
              t = Zi(null, t, r, e, n);
              break e;
            case 1:
              t = Mu(null, t, r, e, n);
              break e;
            case 11:
              t = Eu(null, t, r, e, n);
              break e;
            case 14:
              t = Pu(null, t, r, Ut(r.type, e), n);
              break e;
          }
          throw Error(u(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : Ut(r, s), Zi(e, t, r, s, n);
      case 1:
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : Ut(r, s), Mu(e, t, r, s, n);
      case 3:
        e: {
          if (Tu(t), e === null) throw Error(u(387));
          r = t.pendingProps, i = t.memoizedState, s = i.element, qa(e, t), ll(t, r, null, n);
          var a = t.memoizedState;
          if (r = a.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            s = jr(Error(u(423)), t), t = Du(e, t, r, n, s);
            break e;
          } else if (r !== s) {
            s = jr(Error(u(424)), t), t = Du(e, t, r, n, s);
            break e;
          } else for (Ct = kn(t.stateNode.containerInfo.firstChild), At = t, He = !0, Qt = null, n = Ga(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (yr(), r === s) {
              t = fn(e, t, n);
              break e;
            }
            dt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Za(t), e === null && Ei(t), r = t.type, s = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = s.children, gi(r, s) ? a = null : i !== null && gi(r, i) && (t.flags |= 32), zu(e, t), dt(e, t, a, n), t.child;
      case 6:
        return e === null && Ei(t), null;
      case 13:
        return Ou(e, t, n);
      case 4:
        return Oi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = gr(t, null, r, n) : dt(e, t, r, n), t.child;
      case 11:
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : Ut(r, s), Eu(e, t, r, s, n);
      case 7:
        return dt(e, t, t.pendingProps, n), t.child;
      case 8:
        return dt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return dt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, s = t.pendingProps, i = t.memoizedProps, a = s.value, Ie(nl, r._currentValue), r._currentValue = a, i !== null) if (Ht(i.value, a)) {
            if (i.children === s.children && !mt.current) {
              t = fn(e, t, n);
              break e;
            }
          } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
            var f = i.dependencies;
            if (f !== null) {
              a = i.child;
              for (var p = f.firstContext; p !== null; ) {
                if (p.context === r) {
                  if (i.tag === 1) {
                    p = dn(-1, n & -n), p.tag = 2;
                    var k = i.updateQueue;
                    if (k !== null) {
                      k = k.shared;
                      var L = k.pending;
                      L === null ? p.next = p : (p.next = L.next, L.next = p), k.pending = p;
                    }
                  }
                  i.lanes |= n, p = i.alternate, p !== null && (p.lanes |= n), Mi(
                    i.return,
                    n,
                    t
                  ), f.lanes |= n;
                  break;
                }
                p = p.next;
              }
            } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
            else if (i.tag === 18) {
              if (a = i.return, a === null) throw Error(u(341));
              a.lanes |= n, f = a.alternate, f !== null && (f.lanes |= n), Mi(a, n, t), a = i.sibling;
            } else a = i.child;
            if (a !== null) a.return = i;
            else for (a = i; a !== null; ) {
              if (a === t) {
                a = null;
                break;
              }
              if (i = a.sibling, i !== null) {
                i.return = a.return, a = i;
                break;
              }
              a = a.return;
            }
            i = a;
          }
          dt(e, t, s.children, n), t = t.child;
        }
        return t;
      case 9:
        return s = t.type, r = t.pendingProps.children, wr(t, n), s = Mt(s), r = r(s), t.flags |= 1, dt(e, t, r, n), t.child;
      case 14:
        return r = t.type, s = Ut(r, t.pendingProps), s = Ut(r.type, s), Pu(e, t, r, s, n);
      case 15:
        return Ru(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : Ut(r, s), hl(e, t), t.tag = 1, vt(r) ? (e = !0, Js(t)) : e = !1, wr(t, n), wu(t, r, s), qi(t, r, s, n), bi(null, t, r, !0, e, n);
      case 19:
        return Bu(e, t, n);
      case 22:
        return Lu(e, t, n);
    }
    throw Error(u(156, t.tag));
  };
  function oc(e, t) {
    return Wr(e, t);
  }
  function Tf(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ot(e, t, n, r) {
    return new Tf(e, t, n, r);
  }
  function xo(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Df(e) {
    if (typeof e == "function") return xo(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === fe) return 11;
      if (e === Re) return 14;
    }
    return 2;
  }
  function Mn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ot(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Al(e, t, n, r, s, i) {
    var a = 2;
    if (r = e, typeof e == "function") xo(e) && (a = 1);
    else if (typeof e == "string") a = 5;
    else e: switch (e) {
      case G:
        return Zn(n.children, s, i, t);
      case B:
        a = 8, s |= 8;
        break;
      case ke:
        return e = Ot(12, n, t, s | 2), e.elementType = ke, e.lanes = i, e;
      case ve:
        return e = Ot(13, n, t, s), e.elementType = ve, e.lanes = i, e;
      case we:
        return e = Ot(19, n, t, s), e.elementType = we, e.lanes = i, e;
      case me:
        return Cl(n, s, i, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case he:
            a = 10;
            break e;
          case pe:
            a = 9;
            break e;
          case fe:
            a = 11;
            break e;
          case Re:
            a = 14;
            break e;
          case Se:
            a = 16, r = null;
            break e;
        }
        throw Error(u(130, e == null ? e : typeof e, ""));
    }
    return t = Ot(a, n, t, s), t.elementType = e, t.type = r, t.lanes = i, t;
  }
  function Zn(e, t, n, r) {
    return e = Ot(7, e, r, t), e.lanes = n, e;
  }
  function Cl(e, t, n, r) {
    return e = Ot(22, e, r, t), e.elementType = me, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function wo(e, t, n) {
    return e = Ot(6, e, null, t), e.lanes = n, e;
  }
  function ko(e, t, n) {
    return t = Ot(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Of(e, t, n, r, s) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Vl(0), this.expirationTimes = Vl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vl(0), this.identifierPrefix = r, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null;
  }
  function jo(e, t, n, r, s, i, a, f, p) {
    return e = new Of(e, t, n, f, p), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ot(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Di(i), e;
  }
  function If(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: se, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function ac(e) {
    if (!e) return Nn;
    e = e._reactInternals;
    e: {
      if (Wt(e) !== e || e.tag !== 1) throw Error(u(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (vt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(u(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (vt(n)) return Ia(e, n, t);
    }
    return t;
  }
  function uc(e, t, n, r, s, i, a, f, p) {
    return e = jo(n, r, !0, e, s, i, a, f, p), e.context = ac(null), n = e.current, r = ft(), s = Ln(n), i = dn(r, s), i.callback = t ?? null, Cn(n, i, s), e.current.lanes = s, Hr(e, s, r), xt(e, r), e;
  }
  function El(e, t, n, r) {
    var s = t.current, i = ft(), a = Ln(s);
    return n = ac(n), t.context === null ? t.context = n : t.pendingContext = n, t = dn(i, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Cn(s, t, a), e !== null && (Kt(e, s, a, i), sl(e, s, a)), a;
  }
  function Pl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function cc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function No(e, t) {
    cc(e, t), (e = e.alternate) && cc(e, t);
  }
  function Bf() {
    return null;
  }
  var dc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function So(e) {
    this._internalRoot = e;
  }
  Rl.prototype.render = So.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(u(409));
    El(e, t, null, null);
  }, Rl.prototype.unmount = So.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      qn(function() {
        El(null, e, null, null);
      }), t[ln] = null;
    }
  };
  function Rl(e) {
    this._internalRoot = e;
  }
  Rl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = qo();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < gn.length && t !== 0 && t < gn[n].priority; n++) ;
      gn.splice(n, 0, e), n === 0 && Zo(e);
    }
  };
  function Ao(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Ll(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function fc() {
  }
  function Wf(e, t, n, r, s) {
    if (s) {
      if (typeof r == "function") {
        var i = r;
        r = function() {
          var k = Pl(a);
          i.call(k);
        };
      }
      var a = uc(t, r, e, 0, null, !1, !1, "", fc);
      return e._reactRootContainer = a, e[ln] = a.current, es(e.nodeType === 8 ? e.parentNode : e), qn(), a;
    }
    for (; s = e.lastChild; ) e.removeChild(s);
    if (typeof r == "function") {
      var f = r;
      r = function() {
        var k = Pl(p);
        f.call(k);
      };
    }
    var p = jo(e, 0, !1, null, null, !1, !1, "", fc);
    return e._reactRootContainer = p, e[ln] = p.current, es(e.nodeType === 8 ? e.parentNode : e), qn(function() {
      El(t, p, n, r);
    }), p;
  }
  function zl(e, t, n, r, s) {
    var i = n._reactRootContainer;
    if (i) {
      var a = i;
      if (typeof s == "function") {
        var f = s;
        s = function() {
          var p = Pl(a);
          f.call(p);
        };
      }
      El(t, a, e, s);
    } else a = Wf(n, t, e, s, r);
    return Pl(a);
  }
  Go = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Fr(t.pendingLanes);
          n !== 0 && (ql(t, n | 1), xt(t, _e()), (Ae & 6) === 0 && (Ar = _e() + 500, Sn()));
        }
        break;
      case 13:
        qn(function() {
          var r = cn(e, 1);
          if (r !== null) {
            var s = ft();
            Kt(r, e, 1, s);
          }
        }), No(e, 1);
    }
  }, Yl = function(e) {
    if (e.tag === 13) {
      var t = cn(e, 134217728);
      if (t !== null) {
        var n = ft();
        Kt(t, e, 134217728, n);
      }
      No(e, 134217728);
    }
  }, Vo = function(e) {
    if (e.tag === 13) {
      var t = Ln(e), n = cn(e, t);
      if (n !== null) {
        var r = ft();
        Kt(n, e, t, r);
      }
      No(e, t);
    }
  }, qo = function() {
    return ze;
  }, Yo = function(e, t) {
    var n = ze;
    try {
      return ze = e, t();
    } finally {
      ze = n;
    }
  }, Fn = function(e, t, n) {
    switch (t) {
      case "input":
        if (je(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var s = qs(r);
              if (!s) throw Error(u(90));
              Ce(r), je(r, s);
            }
          }
        }
        break;
      case "textarea":
        nn(e, n);
        break;
      case "select":
        t = n.value, t != null && kt(e, !!n.multiple, t, !1);
    }
  }, Cs = vo, Y = qn;
  var Ff = { usingClientEntryPoint: !1, Events: [rs, fr, qs, Tr, As, vo] }, ys = { findFiberByHostInstance: Hn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Hf = { bundleType: ys.bundleType, version: ys.version, rendererPackageName: ys.rendererPackageName, rendererConfig: ys.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: U.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Ir(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: ys.findFiberByHostInstance || Bf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ml = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ml.isDisabled && Ml.supportsFiber) try {
      Rs = Ml.inject(Hf), Yt = Ml;
    } catch {
    }
  }
  return wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ff, wt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ao(t)) throw Error(u(200));
    return If(e, t, null, n);
  }, wt.createRoot = function(e, t) {
    if (!Ao(e)) throw Error(u(299));
    var n = !1, r = "", s = dc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = jo(e, 1, !1, null, null, n, !1, r, s), e[ln] = t.current, es(e.nodeType === 8 ? e.parentNode : e), new So(t);
  }, wt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = Ir(t), e = e === null ? null : e.stateNode, e;
  }, wt.flushSync = function(e) {
    return qn(e);
  }, wt.hydrate = function(e, t, n) {
    if (!Ll(t)) throw Error(u(200));
    return zl(null, e, t, !0, n);
  }, wt.hydrateRoot = function(e, t, n) {
    if (!Ao(e)) throw Error(u(405));
    var r = n != null && n.hydratedSources || null, s = !1, i = "", a = dc;
    if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = uc(t, null, e, 1, n ?? null, s, !1, i, a), e[ln] = t.current, es(e), r) for (e = 0; e < r.length; e++) n = r[e], s = n._getVersion, s = s(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(
      n,
      s
    );
    return new Rl(t);
  }, wt.render = function(e, t, n) {
    if (!Ll(t)) throw Error(u(200));
    return zl(null, e, t, !1, n);
  }, wt.unmountComponentAtNode = function(e) {
    if (!Ll(e)) throw Error(u(40));
    return e._reactRootContainer ? (qn(function() {
      zl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[ln] = null;
      });
    }), !0) : !1;
  }, wt.unstable_batchedUpdates = vo, wt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Ll(n)) throw Error(u(200));
    if (e == null || e._reactInternals === void 0) throw Error(u(38));
    return zl(e, t, n, !1, r);
  }, wt.version = "18.3.1-next-f1338f8080-20240426", wt;
}
var wc;
function Fc() {
  if (wc) return Po.exports;
  wc = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (c) {
        console.error(c);
      }
  }
  return o(), Po.exports = Vf(), Po.exports;
}
var kc;
function qf() {
  if (kc) return Tl;
  kc = 1;
  var o = Fc();
  return Tl.createRoot = o.createRoot, Tl.hydrateRoot = o.hydrateRoot, Tl;
}
var Yf = qf(), M = Io(), jc = Fc();
const Jf = { cmd: "⌘", shift: "⇧", alt: "⌥", option: "⌥", ctrl: "⌃", enter: "↵", return: "↵", esc: "esc", tab: "⇥", up: "↑", down: "↓", left: "←", right: "→", backspace: "⌫" }, Zf = (o) => o.split("+").map((c) => Jf[c.trim().toLowerCase()] ?? c.trim().toUpperCase());
function bf({ rows: o, at: c }) {
  return /* @__PURE__ */ l.jsx(l.Fragment, { children: o.map(
    (u) => u && /* @__PURE__ */ l.jsx("div", { className: "ss-keys", "data-show": u.show, "data-at": c, "aria-hidden": !0, children: u.caps.map((y, v) => /* @__PURE__ */ l.jsx("kbd", { className: "ss-key", "data-down": u.down, children: y }, v)) }, u.id)
  ) });
}
const Hc = { x: 0, y: 0, width: 0, height: 0 }, Qc = (o) => typeof o == "string" ? o : "at" in o ? o.at : null, $f = (o, c) => o?.offsetWidth && o.getBoundingClientRect().width / o.offsetWidth || c || 1;
function Bo(o, c) {
  const u = o.getBoundingClientRect();
  return { left: u.left, top: u.top, scale: o.offsetWidth && u.width / o.offsetWidth || c || 1, borderX: o.clientLeft, borderY: o.clientTop };
}
function Ns(o, c, u, y = Bo(o, u)) {
  const v = c.getBoundingClientRect(), { scale: w } = y;
  return { x: (v.left - y.left) / w - y.borderX, y: (v.top - y.top) / w - y.borderY, width: v.width / w, height: v.height / w };
}
function e0(o, c, u, y = Bo(o, u)) {
  const v = Ns(o, c, u, y), w = getComputedStyle(c), S = w.transform, E = S && S !== "none" ? S.match(/^matrix\(([^)]+)\)$/) : null;
  if (!E) return v;
  const [A, z, P, W, H, K] = E[1].split(",").map(Number);
  if (z || P || H || K || !A || !W) return v;
  const D = v.width / A, X = v.height / W, [q, I] = w.transformOrigin.split(" ").map(parseFloat);
  return { x: v.x - q * (1 - A), y: v.y - I * (1 - W), width: D, height: X };
}
const t0 = (o) => {
  const c = getComputedStyle(o);
  return c.transform !== "none" || c.translate && c.translate !== "none" || c.scale && c.scale !== "none" || c.rotate && c.rotate !== "none";
};
function n0(o, c) {
  let u = !0;
  for (let S = c; S && S !== o; S = S.parentElement) if (t0(S)) {
    u = !1;
    break;
  }
  if (u) return Ns(o, c, 1);
  let y = 0, v = 0, w = c;
  for (; w && w !== o; ) {
    y += w.offsetLeft, v += w.offsetTop;
    const S = w.offsetParent;
    if (!S || !o.contains(S)) break;
    w = S, w !== o && (y += w.clientLeft - w.scrollLeft, v += w.clientTop - w.scrollTop);
  }
  return { x: y, y: v, width: c.offsetWidth, height: c.offsetHeight };
}
function Nc(o, c) {
  const u = Object.keys(o);
  return u.length !== Object.keys(c).length ? !1 : u.every((y) => {
    const v = o[y], w = c[y];
    return w && Math.abs(v.x - w.x) < 0.5 && Math.abs(v.y - w.y) < 0.5 && Math.abs(v.width - w.width) < 0.5 && Math.abs(v.height - w.height) < 0.5;
  });
}
function Uc(o) {
  const c = o.parentElement;
  if (!c?.classList.contains("ss-scroller")) return;
  const u = o.clientHeight, y = o.scrollHeight, v = y > u ? Math.max(24, u / y * u) : 0, w = y > u ? o.scrollTop / (y - u) * (u - v) : 0;
  c.style.setProperty("--ss-thumb-h", `${v}px`), c.style.setProperty("--ss-thumb-y", `${w}px`);
}
const r0 = {
  /** Moves inside a shot (push-in, pan, a long cursor trip): peak at about 40%, long soft tail. 1.4 to 2.7 s. */
  house: [0.65, 0, 0.1, 1],
  /** The outgoing half of a move that ends in a cut: accelerates into it. */
  through: [0.8, 0, 0.1, 1],
  /** The incoming half after a cut: arrives at speed, settles. 0.6 to 0.8 s (1.6 s for a big pull-out). */
  settle: [0.05, 0.85, 0.3, 1],
  /** A cursor arriving from off-frame, already moving. */
  enter: [0.1, 0.8, 0.3, 0.95],
  /** One long cursor trip across the frame. */
  trip: [0.78, 0, 0.17, 1],
  /** The kit's camera push-in (Camera). */
  camera: [0.45, 0, 0.1, 1]
};
function s0(o) {
  const [c, u, y, v] = r0[o], w = 3 * c, S = 3 * (y - c) - w, E = 1 - w - S, A = 3 * u, z = 3 * (v - u) - A, P = 1 - A - z, W = (K) => ((E * K + S) * K + w) * K, H = (K) => (3 * E * K + 2 * S) * K + w;
  return (K) => {
    if (K <= 0) return 0;
    if (K >= 1) return 1;
    let D = K;
    for (let X = 0; X < 8; X++) {
      const q = H(D);
      if (Math.abs(q) < 1e-6) break;
      const I = D - (W(D) - K) / q;
      if (I < 0 || I > 1) break;
      D = I;
    }
    if (Math.abs(W(D) - K) > 1e-6) {
      let X = 0, q = 1;
      for (let I = 0; I < 40; I++)
        D = (X + q) / 2, W(D) < K ? X = D : q = D;
    }
    return ((P * D + z) * D + A) * D;
  };
}
function Xc() {
  try {
    return !1;
  } catch {
    return !0;
  }
}
function Lr(o) {
  Xc() && console.warn(`[stageshow] ${o}`);
}
const Er = (o, c, u) => Math.min(u, Math.max(c, o)), Bl = (o) => o < 0.5 ? 4 * o * o * o : 1 - Math.pow(-2 * o + 2, 3) / 2, l0 = (o) => {
  const c = Math.sin(o * 12.9898) * 43758.5453;
  return c - Math.floor(c);
}, Sc = (o) => {
  o && window.setTimeout(() => o.removeAttribute("data-touching"), 240);
};
class Pr extends Error {
}
function i0(o, c) {
  const { rootRef: u, cursorRef: y, pos: v, hovered: w, kindRef: S, keysRef: E, dragging: A, autoUsed: z, autoRef: P, scaleRef: W, speed: H, layout: K, cursor: D, resolve: X, place: q, remeasure: I, ripple: re, setState: de, setKind: U, setKeys: _, setLastKeys: se } = c, G = s0("enter"), B = () => {
    if (o.aborted) throw new Pr();
  }, ke = (d, m) => new Promise((j, N) => {
    B();
    const C = () => {
      m(V), o.removeEventListener("abort", C), N(new Pr());
    }, V = d(() => {
      o.removeEventListener("abort", C), o.aborted ? N(new Pr()) : j();
    });
    o.addEventListener("abort", C, { once: !0 });
  }), he = () => ke((d) => requestAnimationFrame(d), cancelAnimationFrame), pe = (d) => ke((m) => setTimeout(m, d / H), clearTimeout), fe = (d) => {
    let m = !0;
    const j = () => {
      m && (m = !1, o.removeEventListener("abort", j), d());
    };
    return o.addEventListener("abort", j, { once: !0 }), j;
  }, ve = async (d, m) => {
    const j = performance.now(), N = d / H;
    for (; ; ) {
      B();
      const C = Math.min(1, (performance.now() - j) / N);
      if (m(C), C === 1) return;
      await he();
    }
  }, we = (d) => {
    const m = [];
    for (let j = d; j && j !== u.current; j = j.parentElement) j.hasAttribute("data-target") && m.push(j);
    return m;
  }, Re = (d) => {
    const m = u.current;
    if (!m) return;
    const j = m.querySelectorAll("[data-cursor]");
    if (!j.length && !z.current) return;
    j.length && (z.current = !0);
    const N = m.getBoundingClientRect(), C = N.width / m.offsetWidth || 1, V = m.dataset.cursorBase ?? "pointer";
    let le = V;
    m.setAttribute("data-hit", "");
    const oe = document.elementsFromPoint(N.left + d.x * C, N.top + d.y * C);
    m.removeAttribute("data-hit");
    const Z = oe.find((ie) => {
      if (!m.contains(ie) || ie.closest(".ss-cursor, .ss-keys, .ss-ripple") || getComputedStyle(ie).pointerEvents === "none" && !ie.closest('[data-cursor], [data-target], button, a[href], [role="button"], [role="menuitem"], [role="option"], [role="tab"]')) return !1;
      let Te = 1;
      for (let Ce = ie; Ce && Ce !== m.parentElement; Ce = Ce.parentElement) {
        const De = getComputedStyle(Ce);
        if (De.visibility === "hidden") return !1;
        Te *= Number(De.opacity);
      }
      return Te > 0.15;
    });
    if (Z) {
      const ie = Z.closest('[data-cursor], button, a[href], [role="button"], [role="menuitem"], [role="option"], [role="tab"]');
      le = ie && m.contains(ie) && ie.dataset.cursor ? ie.dataset.cursor : V, le !== S.current && U(le);
      return;
    }
    j.forEach((ie) => {
      const Te = ie.getBoundingClientRect(), Ce = (Te.left - N.left) / C, De = (Te.top - N.top) / C;
      d.x >= Ce && d.x <= Ce + Te.width / C && d.y >= De && d.y <= De + Te.height / C && (le = ie.dataset.cursor);
    }), le !== S.current && U(le);
  };
  P.current = Re, A.current || Re(v.current);
  const Se = (d) => {
    if (w.current === d) return;
    const m = we(d);
    we(w.current).forEach((j) => m.includes(j) || j.removeAttribute("data-hover")), m.forEach((j) => j.setAttribute("data-hover", "")), w.current = d;
  };
  let me = E.current.id, F = 0;
  const te = (d) => {
    const m = Qc(d);
    return m === null ? null : u.current?.querySelector(`[data-target="${m}"]`) ?? null;
  }, Q = {
    get signal() {
      return o;
    },
    put(d) {
      o.aborted || de((m) => ({ ...m, ...typeof d == "function" ? d(m) : d }));
    },
    async set(d) {
      B(), Q.put(d), await he(), await he(), P.current?.(v.current), B();
    },
    wait: async (d) => {
      B(), await pe(d);
    },
    rect: (d, m) => {
      const j = u.current, N = j?.querySelector(`[data-target="${d}"]`);
      return !j || !N ? (Lr(`no element with data-target="${d}"`), Hc) : m?.layout ? n0(j, N) : Ns(j, N, W.current);
    },
    center: (d) => X(d),
    caret(d, m) {
      F++;
      const j = te(d), N = u.current;
      if (!j || !N) return 0;
      const C = N.getBoundingClientRect(), V = C.width / N.offsetWidth || 1, le = C.left + m.x * V, oe = C.top + m.y * V, Z = [], ie = document.createTreeWalker(j, NodeFilter.SHOW_TEXT), Te = document.createRange();
      let Ce = 0;
      const De = (je) => {
        for (let Ve = je.parentElement; Ve; Ve = Ve === j ? null : Ve.parentElement) {
          const Pe = getComputedStyle(Ve);
          if (Pe.opacity === "0" || Pe.visibility === "hidden" || Pe.display === "none") return !0;
        }
        return !1;
      };
      for (let je = ie.nextNode(); je; je = ie.nextNode()) {
        const Ve = je.textContent ?? "";
        if (!De(je)) {
          for (let Pe = 0; Pe < Ve.length; Pe++) {
            Te.setStart(je, Pe), Te.setEnd(je, Pe + 1);
            const Oe = Te.getBoundingClientRect();
            (Oe.width || Oe.height) && Z.push({ left: Oe.left, right: Oe.right, mid: (Oe.left + Oe.right) / 2, top: Oe.top, bottom: Oe.bottom, at: Ce + Pe });
          }
          Ce += Ve.length;
        }
      }
      if (!Z.length || oe < Z[0].top) return 0;
      if (oe > Z[Z.length - 1].bottom) return Ce;
      let Ye = Z[0];
      for (const je of Z) Math.abs((je.top + je.bottom) / 2 - oe) < Math.abs((Ye.top + Ye.bottom) / 2 - oe) && (Ye = je);
      const Ge = Z.filter((je) => Math.abs(je.top - Ye.top) < (Ye.bottom - Ye.top) / 2), en = Ge.find((je) => je.mid > le);
      return en ? en.at : Ge[Ge.length - 1].at + 1;
    },
    async move(d, m) {
      B();
      const j = { ...v.current }, N = X(d), C = Math.hypot(N.x - j.x, N.y - j.y);
      if (C < 0.5) return Se(te(d));
      const V = we(te(d));
      Se(we(w.current).find((Ce) => V.includes(Ce)) ?? null);
      const le = m?.duration ?? Er(260 + C * 0.9, 300, 650), oe = Bl, Z = Math.min(C * 0.08, 24), ie = -(N.y - j.y) / C, Te = (N.x - j.x) / C;
      await ve(le, (Ce) => {
        const De = oe(Ce), Ye = Math.sin(Math.PI * De) * Z, Ge = m?.path ? m.path(De, j, N) : { x: j.x + (N.x - j.x) * De + ie * Ye, y: j.y + (N.y - j.y) * De + Te * Ye };
        q(Ge), Re(Ge), m?.onMove && jc.flushSync(() => m.onMove(Ge, j, Ce));
      }), B(), Se(te(d));
    },
    async click(d, m) {
      B(), d !== void 0 && (await Q.move(d), await pe(120)), B();
      const j = d !== void 0 ? te(d) : w.current, N = y.current, C = D?.style === "touch", V = fe(() => {
        N?.removeAttribute("data-pressed"), j?.removeAttribute("data-pressed"), C && Sc(N);
      });
      try {
        C && (N?.setAttribute("data-touching", ""), await pe(140), B());
        for (let le = 0; le < (m?.double ? 2 : 1); le++)
          le && await pe(70), B(), N?.setAttribute("data-pressed", "true"), D?.ripple && re(v.current), j?.setAttribute("data-pressed", m?.right ? "right" : ""), await pe(m?.double ? 80 : 100), B(), N?.removeAttribute("data-pressed"), j?.removeAttribute("data-pressed");
      } finally {
        V();
      }
    },
    async scroll(d, m, j) {
      B();
      const N = te(d);
      if (!N) return;
      const C = N.scrollTop;
      let V = typeof m == "number" ? m : C;
      if (typeof m == "string") {
        const Z = te(m);
        Z && (V = C + (Z.getBoundingClientRect().top - N.getBoundingClientRect().top) / $f(u.current, W.current) - (j?.offset ?? 0));
      }
      if (V = Er(V, 0, N.scrollHeight - N.clientHeight), D) {
        const Z = Ns(u.current, N, W.current || 1), ie = v.current;
        ie.x >= Z.x + 8 && ie.x <= Z.x + Z.width - 8 && ie.y >= Z.y + 8 && ie.y <= Z.y + Z.height - 8 || (await this.move({ x: Z.x + Z.width * 0.6, y: Z.y + Z.height * 0.55 }), await this.wait(120));
      }
      const le = N.parentElement?.classList.contains("ss-scroller") ? N.parentElement : null;
      le?.setAttribute("data-scrolling", "");
      const oe = fe(() => le?.removeAttribute("data-scrolling"));
      try {
        await ve(j?.duration ?? Er(420 + Math.abs(V - C) * 1.2, 500, 1400), (Z) => {
          N.scrollTop = C + (V - C) * Bl(Z), N.toggleAttribute("data-scrolled", N.scrollTop > 0.5), Uc(N);
        }), B();
      } finally {
        oe();
      }
      I(), P.current?.(v.current);
    },
    async snap(d, m) {
      B();
      const j = m ? u.current?.querySelector(`[data-target="${m}"]`) : u.current;
      j?.setAttribute("data-instant", "");
      const N = fe(() => j?.removeAttribute("data-instant"));
      try {
        Q.put(d), await he(), await he(), B();
      } finally {
        N();
      }
    },
    async key(d) {
      B();
      const m = Zf(d), j = ++me, N = E.current;
      se(N.caps.length ? { ...N, show: !1, down: !1 } : null), _({ id: j, caps: m, show: !1, down: !1 }), await he(), await he(), B(), _({ id: j, caps: m, show: !0, down: !1 }), await pe(180), B(), _({ id: j, caps: m, show: !0, down: !0 }), await pe(140), B(), _({ id: j, caps: m, show: !0, down: !1 }), pe(600).then(() => {
        me === j && !o.aborted && _({ id: j, caps: m, show: !1, down: !1 });
      }, (C) => {
        C instanceof Pr || console.error("[stageshow] script error", C);
      });
    },
    async stagger(d, m, j = 60) {
      await Promise.all(
        d.map(async (N, C) => {
          C && await pe(j * C), B(), await m(N, C);
        })
      );
    },
    mark(d) {
      o.aborted || u.current?.setAttribute("data-mark", d);
    },
    async cursor(d) {
      B(), U(d), await he();
    },
    async type(d, m, j) {
      const N = j?.interval ?? 35;
      for (let C = 0; C <= m.length; C++)
        B(), de((V) => ({ ...V, [d]: m.slice(0, C) })), await pe(N * (0.7 + 0.6 * l0(C)));
    },
    place(d) {
      if (o.aborted) return;
      const m = X(d);
      q(m), P.current?.(m);
    },
    async enter(d, m) {
      B();
      const j = X(d), N = u.current, C = { x: 0, y: 0, w: N.offsetWidth, h: N.offsetHeight }, V = 40, le = [j.x - C.x, C.x + C.w - j.x, j.y - C.y, C.y + C.h - j.y], oe = le.indexOf(Math.min(...le)), Z = oe === 0 ? { x: C.x - V, y: j.y + C.h * 0.12 } : oe === 1 ? { x: C.x + C.w + V * 0.4, y: j.y + C.h * 0.12 } : oe === 2 ? { x: j.x - C.w * 0.06, y: C.y - V } : { x: j.x + C.w * 0.06, y: C.y + C.h + V * 0.4 };
      q(Z), Se(null), await ve(m?.duration ?? 700, (ie) => {
        const Te = G(ie), Ce = { x: Z.x + (j.x - Z.x) * Te, y: Z.y + (j.y - Z.y) * Te };
        q(Ce), Re(Ce);
      }), B(), Se(te(d));
    },
    async drag(d, m, j) {
      B();
      const N = { ...v.current }, C = X(d), V = Math.hypot(C.x - N.x, C.y - N.y);
      Se(null);
      const le = S.current, oe = le === "ibeam" || le === "crosshair", Z = !oe && j?.cursor !== "preserve", ie = D?.style === "touch", Te = (je) => {
        const Pe = 1.1428571428571428;
        return je < 0.25 ? je * je / (2 * 0.25) * Pe : (je - 0.25 / 2) * Pe;
      };
      ie && (y.current?.setAttribute("data-touching", ""), await pe(140), B());
      const Ce = ie ? y.current?.querySelector(".ss-cursor__streak") ?? null : null, De = [], Ye = (je) => {
        De.unshift({ ...je }), De.length > 9 && De.pop();
        const Ve = De[De.length - 1], Pe = je.x - Ve.x, Oe = je.y - Ve.y, kt = Math.min(Math.hypot(Pe, Oe), 100);
        Ce && (Ce.style.width = `${kt}px`, Ce.style.left = `${-kt}px`, Ce.style.transform = `rotate(${Math.atan2(Oe, Pe)}rad)`);
      };
      A.current = !0;
      const Ge = y.current, en = fe(() => {
        A.current = !1, Ge?.removeAttribute("data-pressed"), Ge?.removeAttribute("data-swiping"), ie && Sc(Ge);
      });
      try {
        Ge?.setAttribute("data-pressed", "true"), await pe(ie ? 170 : 60), ie && (Ce && (Ce.style.width = "0px"), Ge?.setAttribute("data-swiping", "")), B(), Z && !ie && U("grab"), ie || await pe(70), B(), Ge?.removeAttribute("data-pressed");
        const je = oe ? 0 : Math.min(V * 0.06, 18), Ve = V ? -(C.y - N.y) / V : 0, Pe = V ? (C.x - N.x) / V : 0, Oe = oe && Math.abs(C.y - N.y) > 6;
        Oe && C.y > N.y && C.x < N.x - 2 && Lr("a text selection that ends left of where it starts overshoots and shrinks back; select text that starts a line, or fits on one");
        const kt = F;
        await ve(ie ? j?.duration ?? Er(180 + V * 0.5, 240, 300) : j?.duration ?? Er(360 + V * 1.1, 450, 900), (tn) => {
          const jt = ie ? Te(tn) : Bl(tn), nn = Math.sin(Math.PI * jt) * je, Dn = Oe ? 1 - (1 - jt) * (1 - jt) : jt, On = Oe ? jt * jt : jt, Vt = j?.path?.(jt, N, C) ?? { x: N.x + (C.x - N.x) * On + Ve * nn, y: N.y + (C.y - N.y) * Dn + Pe * nn };
          jc.flushSync(() => m?.(Vt, N, tn)), q(Vt), ie && Ye(Vt);
        }), oe && m && F === kt && Lr("selection drift: a text selection drag never read a.caret(), so the highlight is not under the I-beam; set it from a.caret(name, at) in onMove"), B(), Z && !ie && U(le === "grab" ? "pointer" : le);
      } finally {
        en();
      }
      P.current?.(C);
    },
    layout: K
  };
  for (const d of Object.keys(Q)) {
    const m = Q[d];
    typeof m == "function" && (Q[d] = (...j) => {
      const N = m.apply(Q, j);
      return N instanceof Promise && N.catch((C) => {
        C instanceof Pr || console.error("[stageshow] script error", C);
      }), N;
    });
  }
  return Q;
}
function o0(o, c, u, y) {
  const v = Object.keys(c).filter(
    (w) => JSON.stringify(o[w]) !== JSON.stringify(c[w])
  );
  v.length && Lr(`loop seam: state still differs from initial at the end of the script (${v.join(", ")})`), y && Math.hypot(u.x - y.x, u.y - y.y) > 1 && Lr("loop seam: cursor does not end where it starts");
}
function a0() {
  return /* @__PURE__ */ l.jsx("svg", { height: "24", width: "24", viewBox: "0 0 32 32", fill: "none", children: /* @__PURE__ */ l.jsxs("g", { transform: "translate(10 7)", children: [
    /* @__PURE__ */ l.jsx("path", { d: "m6.148 18.473 1.863-1.003 1.615-.839-2.568-4.816h4.332l-11.379-11.408v16.015l3.316-3.221z", fill: "#fff" }),
    /* @__PURE__ */ l.jsx("path", { d: "m6.431 17 1.765-.941-2.775-5.202h3.604l-8.025-8.043v11.188l2.53-2.442z", fill: "#000" })
  ] }) });
}
function u0() {
  return /* @__PURE__ */ l.jsxs("svg", { width: "10", height: "16", viewBox: "0 0 10 16", fill: "none", overflow: "visible", children: [
    /* @__PURE__ */ l.jsx("path", { d: "M3 1H7M3 15H7M5 1V15", style: { stroke: "var(--ss-cursor-edge, #fff)" }, strokeWidth: "2.6", strokeLinecap: "round" }),
    /* @__PURE__ */ l.jsx("path", { d: "M3 1H7M3 15H7M5 1V15", style: { stroke: "var(--ss-cursor-line, #000)" }, strokeWidth: "1", strokeLinecap: "round" })
  ] });
}
function c0() {
  return /* @__PURE__ */ l.jsxs("svg", { width: "17", height: "17", viewBox: "0 0 17 17", fill: "none", overflow: "visible", children: [
    /* @__PURE__ */ l.jsx("path", { d: "M8.5 0V17M0 8.5H17", style: { stroke: "var(--ss-cursor-edge, #fff)" }, strokeWidth: "2.6" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8.5 0V17M0 8.5H17", style: { stroke: "var(--ss-cursor-line, #000)" }, strokeWidth: "1" })
  ] });
}
function d0() {
  return /* @__PURE__ */ l.jsxs("svg", { width: "26", height: "26", viewBox: "0 0 32 32", fill: "none", children: [
    /* @__PURE__ */ l.jsx(
      "path",
      {
        d: "M10.6 6a1.7 1.7 0 0 1 3.4 0v6.6a1.3 1.3 0 0 1 2.6 0v.7a1.3 1.3 0 0 1 2.6 0v.7a1.3 1.3 0 0 1 2.6 0V19c0 3.1-2 5.6-5 5.6h-2.6c-2 0-3.3-.9-4.4-2.4l-3.1-4.1c-.6-.9-.4-2 .5-2.5.8-.4 1.7-.2 2.3.5l1.1 1.4V6Z",
        fill: "#fff",
        stroke: "#000",
        strokeWidth: "1.1",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ l.jsx("path", { d: "M14 12.6v3.6M16.6 13.3v3M19.2 14v2.6", stroke: "#000", strokeWidth: "1", strokeLinecap: "round" })
  ] });
}
function f0() {
  return /* @__PURE__ */ l.jsx("svg", { width: "26", height: "26", viewBox: "0 0 32 32", fill: "none", children: /* @__PURE__ */ l.jsxs("g", { transform: "translate(7 6)", children: [
    /* @__PURE__ */ l.jsx("path", { d: "m4.5557 8.5742c-.098-.375-.196-.847-.406-1.552-.167-.557-.342-.859-.47-1.233-.155-.455-.303-.721-.496-1.181-.139-.329-.364-1.048-.457-1.44-.119-.509.033-.924.244-1.206.253-.339.962-.49 1.357-.351.371.13.744.512.916.788.288.46.357.632.717 1.542.393.992.564 1.918.611 2.231l.085.452c-.001-.04-.043-1.122-.044-1.162-.035-1.029-.06-1.823-.038-2.939.002-.126.064-.587.084-.715.078-.5.305-.8.673-.979.412-.201.926-.215 1.401-.017.423.173.626.55.687 1.022.014.109.094.987.093 1.107-.013 1.025.006 1.641.015 2.174.004.231.003 1.625.017 1.469.061-.656.094-3.189.344-3.942.144-.433.405-.746.794-.929.431-.203 1.113-.07 1.404.243.285.305.446.692.482 1.153.032.405-.019.897-.02 1.245 0 .867-.021 1.324-.037 2.121-.001.038-.015.298.023.182.094-.28.188-.542.266-.745.049-.125.241-.614.359-.859.114-.234.211-.369.415-.688.2-.313.415-.448.668-.561.54-.235 1.109.112 1.301.591.086.215.009.713-.028 1.105-.061.647-.254 1.306-.352 1.648-.128.447-.274 1.235-.34 1.601-.072.394-.234 1.382-.359 1.82-.086.301-.371.978-.652 1.384 0 0-1.074 1.25-1.192 1.812-.117.563-.078.567-.101.965-.024.399.121.923.121.923s-.802.104-1.234.034c-.391-.062-.875-.841-1-1.078-.172-.328-.539-.265-.682-.023-.225.383-.709 1.07-1.051 1.113-.668.084-2.054.03-3.139.02 0 0 .185-1.011-.227-1.358-.305-.26-.83-.784-1.144-1.06l-.832-.921c-.284-.36-.629-1.093-1.243-1.985-.348-.504-1.027-1.085-1.284-1.579-.223-.425-.331-.954-.19-1.325.225-.594.675-.897 1.362-.832.519.05.848.206 1.238.537.225.19.573.534.75.748.163.195.203.276.377.509.23.307.302.459.214.121", fill: "#fff" }),
    /* @__PURE__ */ l.jsxs("g", { stroke: "#000", strokeLinecap: "round", strokeWidth: ".75", children: [
      /* @__PURE__ */ l.jsx("path", { d: "m4.5557 8.5742c-.098-.375-.196-.847-.406-1.552-.167-.557-.342-.859-.47-1.233-.155-.455-.303-.721-.496-1.181-.139-.329-.364-1.048-.457-1.44-.119-.509.033-.924.244-1.206.253-.339.962-.49 1.357-.351.371.13.744.512.916.788.288.46.357.632.717 1.542.393.992.564 1.918.611 2.231l.085.452c-.001-.04-.043-1.122-.044-1.162-.035-1.029-.06-1.823-.038-2.939.002-.126.064-.587.084-.715.078-.5.305-.8.673-.979.412-.201.926-.215 1.401-.017.423.173.626.55.687 1.022.014.109.094.987.093 1.107-.013 1.025.006 1.641.015 2.174.004.231.003 1.625.017 1.469.061-.656.094-3.189.344-3.942.144-.433.405-.746.794-.929.431-.203 1.113-.07 1.404.243.285.305.446.692.482 1.153.032.405-.019.897-.02 1.245 0 .867-.021 1.324-.037 2.121-.001.038-.015.298.023.182.094-.28.188-.542.266-.745.049-.125.241-.614.359-.859.114-.234.211-.369.415-.688.2-.313.415-.448.668-.561.54-.235 1.109.112 1.301.591.086.215.009.713-.028 1.105-.061.647-.254 1.306-.352 1.648-.128.447-.274 1.235-.34 1.601-.072.394-.234 1.382-.359 1.82-.086.301-.371.978-.652 1.384 0 0-1.074 1.25-1.192 1.812-.117.563-.078.567-.101.965-.024.399.121.923.121.923s-.802.104-1.234.034c-.391-.062-.875-.841-1-1.078-.172-.328-.539-.265-.682-.023-.225.383-.709 1.07-1.051 1.113-.668.084-2.054.03-3.139.02 0 0 .185-1.011-.227-1.358-.305-.26-.83-.784-1.144-1.06l-.832-.921c-.284-.36-.629-1.093-1.243-1.985-.348-.504-1.027-1.085-1.284-1.579-.223-.425-.331-.954-.19-1.325.225-.594.675-.897 1.362-.832.519.05.848.206 1.238.537.225.19.573.534.75.748.163.195.203.276.377.509.23.307.302.459.214.121", strokeLinejoin: "round" }),
      /* @__PURE__ */ l.jsx("path", { d: "m11.566 12.734v-3.459" }),
      /* @__PURE__ */ l.jsx("path", { d: "m9.551 12.746-.016-3.473" }),
      /* @__PURE__ */ l.jsx("path", { d: "m7.555 9.305.021 3.426" })
    ] })
  ] }) });
}
function p0() {
  return /* @__PURE__ */ l.jsx("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", children: /* @__PURE__ */ l.jsxs("g", { transform: "translate(8 9)", children: [
    /* @__PURE__ */ l.jsx("path", { d: "m3.44281398 1.68449726c-.74326136.27630142-1.05584685.8131257-1.07636853 1.38003696-.01344897.37336893.06665513.72649286.23114214 1.18694303-.02596219-.07267623.09676488.29282004.12116236.37362273.05052942.16918921-.4865367-.05865774-.81377307.00741883-.36363321.07113868-.84783757.38332307-1.10006887.79754775-.29643467.48542737-.3109609 1.04368567-.08235979 2.04824266.12491868.54736183.36572145 1.00836814.71076689 1.44594879.15329951.1944118.5713628.64726015.60307236.6875974l.84854343.94062339c.15080214.1358526.25794954.2361946.57590427.5380259.3147558.2987762.4647038.4380078.60308951.555976.05846214.0492474.10784267.1797116.12740685.3736249.01609788.1595565.01049553.3375341-.0090192.5090254-.00674888.0593077-.01325791.1020883-.01698742.1224696-.04189161.228932.13269563.4403386.36541902.4424835.21585671.0019894.38528595.0046546.82216479.0123538.09483476.0016698.09483476.0016698.18993053.0033129 1.16876447.0200186 1.75308289.0147904 2.17807912-.0385723.45429894-.0572869.92650915-.6110188 1.32698393-1.2957591.34289141.6108338.81859723 1.2057867 1.2995685 1.2820532.1510118.0244148.3353555.0322555.548787.0275887.1606725-.0035131.3307029-.0140241.5021961-.0293376.1276907-.0114022.2293359-.0228648.29003-.0307451.2258836-.0293282.373669-.251611.3133108-.4712481-.0130351-.0474332-.0339838-.1345011-.0551094-.2441635-.0245945-.1276687-.0423383-.2523857-.0503381-.365988-.0050217-.0713101-.0059948-.1359317-.0027687-.1918983.0059157-.0980798.0077938-.1530073.0108033-.281125.0010795-.0448938.0010795-.0448938.0024606-.0845172.0054208-.1364475.0233824-.2649146.0815132-.544638.0250088-.1201275.1473169-.352189.3398902-.639435.0571394-.0852302.1195783-.1742239.1864664-.26609712.1272143-.17473362.2641361-.35131772.4011075-.52030772.082051-.10123129.145482-.17695689.1808122-.21807676.2967593-.42378347.612817-1.11823437.7291396-1.52536348.1117407-.39153936.202351-1.12501196.254373-1.81690429.029923-.39968605.0410555-.72381216.0410555-1.23011613.0000742-.09758414.0000742-.09758414.0002975-.17670236.0003569-.11115478.0003569-.11115478.000115-.20711835-.0008934-.15683883-.0055282-.31323355-.0207085-.69507578-.0313109-.81293139-.4771727-1.33911388-1.1344906-1.44058831-.559108-.08631314-1.0586051.08188477-1.2779293.31625977-.0755526.08073733.0036753-.2781823-.2159489-.62316278-.1644465-.25841586-.593184-.58905957-.9209287-.65355552-.335487-.06535532-.73539548-.05811715-1.1017193.00667481-.32093157.05742909-.68608434.33741751-.87176225.64688068-.12411885.20686477.03884667-.00592296-.09368743-.23401341-.18231052-.31422641-.60754287-.59486422-1.01411454-.67799709-.34643562-.07139428-.74182572-.04452925-1.09945614.0633873-.43336319.1291117-1.01795827.61460976-.94899189 1.15552627-.34375-.54091651-1.25026717-.691379-1.97906097-.42111797z", fill: "#000" }),
    /* @__PURE__ */ l.jsx("path", { d: "m7.31951013 1.62138197c.20710357.04234751.44724204.20083012.51632974.31990811.08404358.1446387.15562749.36413806.21048667.6366124.02933373.14569467.12179446 1.2125285.29383112 1.32370243.41279229.04533731.41279229.04533731.52658055-.12364345.03545705-.07383858.03545705-.07383858.04226523-.1029106.01416796-.06009544.02463332-.12677987.0351322-.21754028l.00854738-.07915386.00047673-.00942804.00327525-.03167185c.01085148-.11424313.04184125-.4312127.05388392-.53034902.03788792-.31189663.08766449-.52757784.13944093-.6138719.0713024-.11883734.31942298-.28274442.43149612-.30279961.2804398-.04960082.58940103-.05519288.82623993-.00905543.1084394.02134018.3709471.22378689.432331.32024744.1291079.20279957.2524316.84889766.3225486 1.4970065-.0102194.04624251-.0102194.04624251.1640069.28984194.5843296-.06677889.5843296-.06677889.5703629-.17490247.0159511-.03856429.0284824-.08294031.045969-.15118961.0423876-.16089067.0697594-.25204451.111066-.35549917.0288558-.07227096.0592914-.13391873.0904889-.18278042.1209187-.19031132.4335712-.319392.7077174-.27707028.2943447.04543991.4816904.26653537.4994912.72869815.0148821.37434892.0193146.5239164.0201469.6700184l-.0004247.37954865c0 .48831141-.0104951.79388164-.0389535 1.17400348-.0480918.63962116-.1348512 1.34192123-.227649 1.66708484-.0946325.33121345-.3766371.95084197-.6003915 1.27298482-.0161892.01580846-.0841508.09694273-.1710333.20413492-.1445842.17838247-.2892181.36491271-.4247891.5511244-.0723398.09936149-.1402862.19620479-.2030964.2898938-.2440054.36396314-.400553.66098894-.4512157.90434304-.0659304.3172546-.0893838.4850003-.0966379.6675968-.0017072.0490782-.0017072.0490782-.002845.096677-.0028064.119476-.004437.1671639-.0097087.2545848-.0052654.091322-.0038193.187354.00332.2887353.0103318.1467182.1058713.3478531.1058713.3478531s-.2321503-.0119819-.3742084-.0088758c-.1718098.0037567-.3147843-.0023244-.4138162-.0183342-.1440353-.0228411-.53014068-.5057331-.7278511-.8821737-.30227042-.5764228-1.03604858-.5484427-1.33684295-.0394061-.26854779.4591613-.65918083.9172326-.7740684.9317199-.37404082.0469647-.94643778.0520862-2.07160079.0328144-.09480875-.0016381-.46003446-.0128683-.64600494-.0157445-.18597048-.0028763.05008807-.1790283.02786486-.399297-.03726222-.36933-.15125405-.6704984-.38877094-.8705429-.12241569-.1043631-.26774964-.2393104-.56509654-.5215613-.33323493-.3163366-.44236499-.4185353-.57290215-.533275l-.80130455-.89071892c-.03955779-.05174211-.45812831-.5051399-.5872217-.6688539-.28069963-.35597842-.47062947-.71959073-.56844755-1.14820437-.18921973-.83150113-.1793328-1.21146622-.00855589-1.49112273.13743587-.2257023.43815377-.4195862.60596039-.45241793.17165981-.03465512.55153059-.01648617.62179422.02229321.09902279.05401056.13357243.07300285.16379074.09097645.03572494.02124891.05965747.03799198.08182912.05708809.03426437.02951139.07235014.07170412.12420211.14044502.03611591.04821025.07806642.1053997.1423779.19304882.06054643.0816627.09183576.12069421.13369221.1590035.28038907.25662728.68391532.03238058.65052057-.32606956-.00567036-.06086415-.02203766-.12694598-.05458621-.23708502-.04356824-.15021272.00433013-.05284275-.26002629-.56642281-.08720664-.16942124-.13955864-.28835362-.17428227-.4046158l-.03412852-.10219113c-.03838756-.11059767-.09558223-.26854489-.12612861-.35199347l-.02009957-.05467087.002.008-.05974804-.17751191c-.09232236-.28807194-.13413567-.51358087-.12645475-.72681781.01040781-.28751553.16037753-.54506871.58790983-.70400047.40142488-.1488616 1.07786076.00117106 1.20581167.27856864.04319814.09369738.08927466.21199471.13900415.35457792l.03930997.11680217c.05539717.16759437.13470873.41493582.13860471.42816881.02724222.08344874.0471839.13860719.06943813.18441246.00217869.06301886.00217869.06301886.35429398.23177937.41699479-.29154152.41699479-.29154152.38019201-.37525838.00571063-.08773482.00758408-.17356287.00965287-.37317647.00242546-.23402898.00423842-.33154773.00994479-.45966208.01316411-.29554918.0437926-.51142116.09291227-.63864415.09160418-.23801371.25279279-.40993649.4432431-.46667832.24458613-.07380253.51465245-.09215236.73323569-.04710649zm1.21356228 4.27672201c-.20710459.00095412-.37422255.16961903-.37326843.37672361l.016 3.473c.00095412.20710459.16961903.37422251.37672361.37326841.20710459-.0009541.37422255-.16961901.37326843-.37672359l-.016-3.473c-.00095412-.20710459-.16961903-.37422255-.37672361-.37326843zm2.03332759.00229602c-.2071068 0-.375.16789322-.375.375v3.459c0 .20710678.1678932.375.375.375s.375-.16789322.375-.375v-3.459c0-.20710678-.1678932-.375-.375-.375zm-4.01399856.02930704c-.20710289.00126946-.37396385.17018863-.3726944.37729152l.021 3.426c.00126946.20710289.17018863.37396384.37729152.37269444.20710289-.0012695.37396385-.17018867.3726944-.37729156l-.021-3.426c-.00126946-.20710289-.17018863-.37396385-.37729152-.3726944z", fill: "#fff" })
  ] }) });
}
function h0() {
  return /* @__PURE__ */ l.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ l.jsx("circle", { cx: "10", cy: "10", r: "8", stroke: "rgba(0,0,0,0.15)", strokeWidth: "2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M10 2A8 8 0 0 1 18 10", stroke: "black", strokeWidth: "2", strokeLinecap: "round" })
  ] });
}
const Ac = "M0-8.4 2.55-3.65H-2.55ZM0 8.4 2.55 3.65H-2.55Z";
function Wl({ turn: o }) {
  return /* @__PURE__ */ l.jsx("svg", { width: "21", height: "21", viewBox: "-14 -14 28 28", overflow: "visible", children: /* @__PURE__ */ l.jsxs("g", { transform: `rotate(${o})`, strokeLinejoin: "round", children: [
    /* @__PURE__ */ l.jsx("path", { d: Ac, style: { fill: "var(--ss-cursor-edge, #fff)", stroke: "var(--ss-cursor-edge, #fff)" }, strokeWidth: "3.2" }),
    /* @__PURE__ */ l.jsx("path", { d: Ac, style: { fill: "var(--ss-cursor-line, #000)", stroke: "var(--ss-cursor-line, #000)" }, strokeWidth: "1.2" })
  ] }) });
}
const m0 = () => /* @__PURE__ */ l.jsx(Wl, { turn: 0 }), v0 = () => /* @__PURE__ */ l.jsx(Wl, { turn: 90 }), y0 = () => /* @__PURE__ */ l.jsx(Wl, { turn: -45 }), g0 = () => /* @__PURE__ */ l.jsx(Wl, { turn: 45 }), Cc = {
  pointer: a0,
  ibeam: u0,
  crosshair: c0,
  hand: d0,
  open: f0,
  grab: p0,
  wait: h0,
  "resize-ns": m0,
  "resize-ew": v0,
  "resize-nwse": y0,
  "resize-nesw": g0
}, x0 = {
  pointer: { x: 7.5, y: 5.25 },
  ibeam: { x: 5, y: 8 },
  crosshair: { x: 8.5, y: 8.5 },
  hand: { x: 9.75, y: 3.25 },
  open: { x: 11.7, y: 10.4 },
  grab: { x: 12, y: 12 },
  wait: { x: 8, y: 8 },
  "resize-ns": { x: 10.5, y: 10.5 },
  "resize-ew": { x: 10.5, y: 10.5 },
  "resize-nwse": { x: 10.5, y: 10.5 },
  "resize-nesw": { x: 10.5, y: 10.5 }
}, w0 = { x: 4, y: 3 };
function k0() {
  return /* @__PURE__ */ l.jsx("svg", { width: "22", height: "22", viewBox: "0 0 22 22", className: "ss-cursor__arrow", "aria-hidden": !0, children: /* @__PURE__ */ l.jsx("path", { d: "M4 3 18.5 9.6 11.8 11.8 9.6 18.5Z" }) });
}
function j0({ cursorRef: o, style: c = "real", kind: u }) {
  return /* @__PURE__ */ l.jsxs("div", { ref: o, className: "ss-cursor", "data-style": c, "data-kind": u, "aria-hidden": !0, children: [
    c === "touch" && /* @__PURE__ */ l.jsx("span", { className: "ss-cursor__streak" }),
    /* @__PURE__ */ l.jsxs("div", { className: "ss-cursor__press", children: [
      (c === "circle" || c === "touch") && /* @__PURE__ */ l.jsx("span", { className: "ss-cursor__dot" }),
      c !== "circle" && c !== "touch" && Object.keys(Cc).map((y) => {
        const v = c === "arrow";
        if (v && y !== "pointer" && y !== "ibeam") return null;
        const w = v && y === "pointer" ? k0 : Cc[y], S = v && y === "pointer" ? w0 : x0[y], E = v && u !== "ibeam" ? "pointer" : u;
        return /* @__PURE__ */ l.jsx(
          "div",
          {
            className: "ss-cursor__glyph",
            "data-glyph": y,
            "data-active": y === E,
            style: { marginLeft: -S.x, marginTop: -S.y, transformOrigin: `${S.x}px ${S.y}px` },
            children: /* @__PURE__ */ l.jsx(w, {})
          },
          y
        );
      })
    ] })
  ] });
}
function N0(o, c) {
  const u = document.createElement("span");
  u.className = "ss-ripple", u.style.left = `${c.x}px`, u.style.top = `${c.y}px`, o.appendChild(u), u.addEventListener("animationend", () => u.remove());
}
const _c = M.createContext({
  theme: "light",
  palette: "accent",
  fidelity: "standard",
  layout: "wide"
}), Wo = () => M.useContext(_c), Kc = M.createContext(!1);
function Fo() {
  const o = M.useContext(Kc), [c, u] = M.useState(!1);
  return M.useEffect(() => {
    const y = window.matchMedia("(prefers-reduced-motion: reduce)"), v = () => u(y.matches);
    return v(), y.addEventListener("change", v), () => y.removeEventListener("change", v);
  }, []), o || c;
}
const bn = {
  now: () => performance.now(),
  raf: (o) => requestAnimationFrame(o),
  cancelRaf: (o) => cancelAnimationFrame(o),
  // Layout must finish even when a preview is paused. Keep these callbacks
  // separate: running arbitrary motion RAFs at a frozen timestamp can still
  // advance a spring that integrates once per callback.
  layoutRaf: (o) => bn.recording?.requestLayoutFrame(o) ?? requestAnimationFrame(o),
  cancelLayoutRaf: (o) => {
    const c = bn.recording;
    c ? c.cancelLayoutFrame(o) : cancelAnimationFrame(o);
  },
  timeout: (o, c) => window.setTimeout(o, c),
  clearTimeout: (o) => window.clearTimeout(o),
  /** The recorder's control while one drives the page, else null. */
  get recording() {
    return typeof window > "u" ? null : window.__stageshow?.clock ?? null;
  }
}, S0 = {};
function Fl({
  width: o,
  height: c,
  initial: u = S0,
  script: y,
  poster: v,
  cursor: w,
  hover: S,
  play: E = "loop",
  compact: A,
  keys: z = "bottom",
  palette: P = "accent",
  greys: W,
  fidelity: H = "standard",
  specimen: K,
  unframed: D,
  speed: X = 1,
  accent: q,
  tokens: I,
  ground: re,
  fill: de = !1,
  theme: U = "light",
  className: _,
  children: se
}) {
  const G = E === "hover" && typeof window < "u" && window.matchMedia("(hover: none)").matches ? "once" : E, [B, ke] = M.useState("wide"), he = M.useRef(B);
  he.current = B;
  const pe = () => {
    const Y = w.at;
    return typeof Y == "object" && "wide" in Y ? Y[he.current] : Y;
  }, [fe, ve] = M.useState(!1), we = B === "compact" && A ? A.width : o, Re = B === "compact" && A ? A.height : c, Se = M.useRef(null), me = M.useRef(null), F = M.useRef(null), te = Fo(), Q = !y || te, [d, m] = M.useState(() => Q && v ? v : u), j = M.useRef(d);
  j.current = d;
  const [N, C] = M.useState(1), V = M.useRef(1);
  V.current = N;
  const le = typeof window > "u" ? {} : window.__stageshow ?? {}, oe = X / (le.slow ?? 1), Z = le.theme ?? U, [ie, Te] = M.useState(w?.kind ?? "pointer"), Ce = (Y) => {
    const ye = me.current;
    !ye || te || N0(ye, Y);
  }, De = M.useRef(ie);
  De.current = ie;
  const [Ye, Ge] = M.useState({ id: 0, caps: [], show: !1, down: !1 }), [en, je] = M.useState(null), Ve = M.useRef(Ye);
  Ve.current = Ye;
  const Pe = M.useRef({ x: 0, y: 0 }), Oe = M.useRef(null), [kt, tn] = M.useState(0), jt = M.useRef(!1), nn = M.useRef(!1), Dn = M.useRef(null);
  M.useLayoutEffect(() => {
    const Y = Se.current;
    if (!Y) return;
    const ye = () => {
      const Le = Y.clientWidth, rt = !!Y.parentElement?.closest("[data-ss-wide]"), Rt = A && !rt && Le < A.below ? "compact" : "wide";
      ke(Rt);
      const ut = de || !!Y.parentElement?.closest("[data-ss-fill]");
      ve(ut);
      const ct = Rt === "compact" ? A.width : o, st = Math.min(ut ? 2 : 1, Le / ct);
      C(st), tn(Math.max(0, (Le - ct * st) / 2));
    };
    ye();
    const Ne = new ResizeObserver(ye);
    Ne.observe(Y);
    const ge = new MutationObserver(ye);
    for (let Le = Y.parentElement; Le; Le = Le.parentElement)
      ge.observe(Le, { attributes: !0, attributeFilter: ["data-ss-wide", "data-ss-fill"] });
    return () => {
      Ne.disconnect(), ge.disconnect();
    };
  }, [o, A?.below, A?.width, de]);
  const [On, Vt] = M.useState({}), hn = M.useCallback(() => {
    const Y = me.current;
    if (!Y) return {};
    const ye = {}, Ne = Y.querySelectorAll("[data-target]");
    if (!Ne.length) return ye;
    const ge = Bo(Y, V.current);
    return Ne.forEach((Le) => {
      ye[Le.dataset.target] = e0(Y, Le, V.current, ge);
    }), ye;
  }, []), er = M.useRef({ n: 0, frame: 0, owed: !1 }), Nt = M.useCallback(() => {
    const Y = er.current;
    if (Y.frame || (Y.frame = bn.layoutRaf(() => {
      if (Y.n = 0, Y.frame = 0, !Y.owed) return;
      Y.owed = !1;
      const Ne = hn();
      Vt((ge) => Nc(ge, Ne) ? ge : Ne);
    })), Y.n >= 4) {
      Y.owed = !0;
      return;
    }
    Y.n++;
    const ye = hn();
    Vt((Ne) => Nc(Ne, ye) ? Ne : ye);
  }, [hn]);
  M.useLayoutEffect(Nt), M.useLayoutEffect(() => () => {
    bn.cancelLayoutRaf(er.current.frame), er.current = { n: 0, frame: 0, owed: !1 };
  }, []), M.useEffect(() => {
    const Y = me.current;
    if (Y)
      return Y.addEventListener("transitionend", Nt), Y.addEventListener("animationend", Nt), () => {
        Y.removeEventListener("transitionend", Nt), Y.removeEventListener("animationend", Nt);
      };
  }, [Nt]);
  const In = M.useCallback((Y) => On[Y] ?? Hc, [On]), [Ul, Mr] = M.useState(!0);
  M.useLayoutEffect(() => {
    Mr(!0);
    let Y = !0, ye = 0;
    const Ne = () => {
      ye = bn.layoutRaf(() => {
        ye = bn.layoutRaf(() => Y && Mr(!1));
      });
    };
    return !document.fonts || document.fonts.status === "loaded" ? Ne() : document.fonts.ready.then(() => Y && Ne()), () => {
      Y = !1, bn.cancelLayoutRaf(ye);
    };
  }, [B]);
  const rn = M.useRef(0), Bn = M.useRef(0), sn = M.useRef(!1), Wn = M.useRef(null), qt = M.useCallback((Y) => {
    Bn.current && !sn.current && Math.hypot(Y.x - Pe.current.x, Y.y - Pe.current.y) > 0.5 && (sn.current = !0, Wn.current ??= performance.now() - Bn.current), Pe.current = Y, rn.current = performance.now();
    const ye = F.current;
    ye && (ye.style.transform = `translate(${Y.x}px, ${Y.y}px)`, ye.removeAttribute("data-idle"));
  }, []), It = M.useCallback((Y) => {
    typeof Y == "object" && Y !== null && "wide" in Y && (Y = he.current === "compact" ? Y.compact : Y.wide);
    const ye = Qc(Y);
    if (ye === null) return Y;
    const Ne = me.current, ge = Ne?.querySelector(`[data-target="${ye}"]`);
    if (!Ne || !ge)
      return Lr(`no element with data-target="${ye}"`), Pe.current;
    const Le = Ns(Ne, ge, V.current), rt = typeof Y == "string" ? { x: 0.5, y: 0.5 } : Y;
    return { x: Le.x + Le.width * rt.x, y: Le.y + Le.height * rt.y };
  }, []);
  M.useLayoutEffect(() => {
    if (!Q || !S) return;
    const Y = me.current;
    S.forEach((ye) => Y?.querySelector(`[data-target="${ye}"]`)?.setAttribute("data-hover", ""));
  }), M.useLayoutEffect(() => {
    w && !Bn.current && qt(It(pe()));
  }, [N, B]);
  const Fn = M.useRef(0), pt = M.useRef(0), Bt = M.useCallback(() => {
    ++Fn.current, cancelAnimationFrame(pt.current), pt.current = 0, me.current?.removeAttribute("data-settling");
  }, []), tr = M.useCallback((Y = !1) => {
    Bt();
    const ye = Fn.current;
    if (nn.current = !1, m(u), Te(w?.kind ?? "pointer"), Ge((ge) => ({ ...ge, show: !1, down: !1 })), je(null), me.current?.querySelectorAll("[data-hover],[data-pressed]").forEach((ge) => {
      ge.removeAttribute("data-hover"), ge.removeAttribute("data-pressed");
    }), me.current?.removeAttribute("data-mark"), me.current?.querySelectorAll("[data-scrolled]").forEach((ge) => {
      ge.scrollTop = 0, ge.removeAttribute("data-scrolled"), Uc(ge);
    }), me.current?.querySelectorAll("[data-scrolling]").forEach((ge) => ge.removeAttribute("data-scrolling")), F.current?.removeAttribute("data-pressed"), Dn.current = null, !w) return;
    if (!Y) {
      pt.current = requestAnimationFrame(() => {
        pt.current = 0, qt(It(pe())), Oe.current?.(Pe.current);
      });
      return;
    }
    const Ne = me.current;
    Ne?.setAttribute("data-settling", ""), pt.current = requestAnimationFrame(() => {
      const ge = { ...Pe.current }, Le = It(pe()), rt = Er(320 + Math.hypot(Le.x - ge.x, Le.y - ge.y) * 0.7, 380, 700), Rt = performance.now(), ut = () => {
        if (Fn.current !== ye) return;
        const ct = Math.min(1, (performance.now() - Rt) / rt), st = Bl(ct);
        qt({ x: ge.x + (Le.x - ge.x) * st, y: ge.y + (Le.y - ge.y) * st }), ct < 1 ? pt.current = requestAnimationFrame(ut) : (pt.current = 0, Ne?.removeAttribute("data-settling"));
      };
      ut();
    });
  }, [B]), Tr = M.useMemo(
    () => (Y) => i0(Y, {
      rootRef: me,
      cursorRef: F,
      pos: Pe,
      hovered: Dn,
      kindRef: De,
      keysRef: Ve,
      dragging: nn,
      autoUsed: jt,
      autoRef: Oe,
      scaleRef: V,
      speed: oe,
      layout: B,
      cursor: w,
      resolve: It,
      place: qt,
      remeasure: Nt,
      ripple: Ce,
      setState: m,
      setKind: Te,
      setKeys: Ge,
      setLastKeys: je
    }),
    [It, qt, oe, B]
    // eslint-disable-line react-hooks/exhaustive-deps
  );
  M.useEffect(() => {
    const Y = me.current;
    if (Q || !y)
      return tr(), Y.removeAttribute("data-offscreen"), m(v ?? u), Bt;
    tr();
    const ye = Se.current;
    let Ne = null, ge = !1, Le = !1, rt = !1;
    const Rt = w?.idle ?? 4e3, ut = 1200;
    let ct = 0, st = 0;
    const Dr = () => {
      window.clearInterval(ct), !(!w || Rt === !1) && (rn.current = performance.now(), ct = window.setInterval(() => {
        const Fe = F.current;
        if (!Fe) return;
        const ht = performance.now();
        if (!sn.current) {
          Wn.current === null && ht - rn.current > ut && Fe.setAttribute("data-idle", "");
          return;
        }
        Fe.hasAttribute("data-pressed") || me.current?.querySelector("[data-hover]") ? rn.current = ht : ht - rn.current > Rt && Fe.setAttribute("data-idle", "");
      }, 150));
    }, Xl = () => {
      Bn.current = performance.now(), sn.current = !1, window.clearTimeout(st);
      const Fe = F.current, ht = Wn.current;
      Rt === !1 || !Fe || ht === null || ht <= ut || (Fe.setAttribute("data-idle", ""), st = window.setTimeout(() => Fe.removeAttribute("data-idle"), ht - 400));
    }, Or = () => {
      window.clearInterval(ct), window.clearTimeout(st), Bn.current = 0, F.current?.removeAttribute("data-idle");
    }, _l = () => {
      window.clearInterval(ct), window.clearTimeout(st);
      const Fe = F.current, ht = () => Fe?.hasAttribute("data-pressed") || Y.querySelector("[data-hover]");
      if (!w || Rt === !1 || !Fe || Fe.hasAttribute("data-idle") || ht()) return;
      const sr = (sn.current ? Rt : ut) - (performance.now() - rn.current);
      st = window.setTimeout(() => {
        ht() || Fe.setAttribute("data-idle", "");
      }, Math.max(0, sr));
    }, Wt = () => {
      if (Ne || rt || !ge || document.hidden || G === "hover" && !Le) return;
      Bt(), w && qt(It(pe())), Ne = new AbortController();
      const Fe = Ne.signal;
      Dr();
      const ht = Tr(Fe);
      (async () => {
        do {
          Xl();
          try {
            await y(ht);
          } catch (sr) {
            if (sr instanceof Pr) return;
            console.error("[stageshow] script error", sr), Ne = null, Or();
            return;
          }
          G === "loop" && Xc() && o0(j.current, u, Pe.current, w ? It(pe()) : null);
        } while (G === "loop" && !Fe.aborted);
        G === "once" && !Fe.aborted && (rt = !0, _l());
      })();
    }, nr = (Fe = !1) => {
      Or(), Ne && (Ne.abort(), Ne = null, rt || tr(Fe));
    }, rr = () => Y.toggleAttribute("data-offscreen", !ge || document.hidden);
    rr();
    const Es = new IntersectionObserver(([Fe]) => {
      ge = Fe.isIntersecting, rr(), ge ? Wt() : nr();
    });
    Es.observe(ye);
    const Ir = () => {
      rr(), document.hidden ? nr() : Wt();
    };
    document.addEventListener("visibilitychange", Ir);
    const Br = () => {
      Le = !0, Wt();
    }, Wr = () => {
      Le = !1, nr(!0);
    };
    return G === "hover" && (ye.addEventListener("pointerenter", Br), ye.addEventListener("pointerleave", Wr)), () => {
      Es.disconnect(), document.removeEventListener("visibilitychange", Ir), ye.removeEventListener("pointerenter", Br), ye.removeEventListener("pointerleave", Wr), Or(), Ne?.abort(), Ne = null, Oe.current = null, Bt();
    };
  }, [Q, y, Tr, G, B]), M.useLayoutEffect(() => {
    w && !Q && !nn.current && Oe.current?.(Pe.current);
  }, [d]);
  const As = M.useMemo(() => ({ theme: Z, palette: P, fidelity: H, layout: B }), [Z, P, H, B]), Cs = w && (!y || !Q || w.still);
  return /* @__PURE__ */ l.jsx("div", { ref: Se, className: `ss-fit${_ ? ` ${_}` : ""}`, style: { maxWidth: fe ? void 0 : o, height: Re * N }, children: /* @__PURE__ */ l.jsxs(
    "div",
    {
      ref: me,
      className: "ss-stage",
      "data-specimen": K || void 0,
      "data-unframed": D || void 0,
      "data-still": Q || void 0,
      "data-placing": Ul || void 0,
      "data-theme": Z,
      "data-palette": P,
      "data-greys": W === "cool" ? "cool" : void 0,
      "data-fidelity": H,
      "data-layout": B,
      style: {
        width: we,
        height: Re,
        marginLeft: kt || void 0,
        transform: `scale(${N})`,
        ...I,
        ...q ? { "--ss-accent": q, "--ss-accent-2": q, "--ss-accent-soft": `color-mix(in srgb, ${q} 14%, transparent)` } : null
      },
      children: [
        re && /* @__PURE__ */ l.jsx(
          "div",
          {
            className: "ss-ground",
            "aria-hidden": !0,
            style: Array.isArray(re) ? { "--ss-orb-1": re[0], "--ss-orb-2": re[1], ...re[2] ? { "--ss-orb-3": re[2] } : null } : void 0
          }
        ),
        /* @__PURE__ */ l.jsx(Kc.Provider, { value: Q, children: /* @__PURE__ */ l.jsx(_c.Provider, { value: As, children: se(d, In, B) }) }),
        y && /* @__PURE__ */ l.jsx(bf, { rows: [en, Ye], at: typeof z == "string" ? z : z[B] }),
        Cs && /* @__PURE__ */ l.jsx(j0, { cursorRef: F, style: w.style, kind: ie })
      ]
    }
  ) });
}
function xs() {
  return /* @__PURE__ */ l.jsxs("span", { className: "ss-window__lights", children: [
    /* @__PURE__ */ l.jsx("span", { className: "ss-window__dot" }),
    /* @__PURE__ */ l.jsx("span", { className: "ss-window__dot" }),
    /* @__PURE__ */ l.jsx("span", { className: "ss-window__dot" })
  ] });
}
function A0() {
  return /* @__PURE__ */ l.jsxs("svg", { className: "ss-window__lock", width: "7", height: "8", viewBox: "0 0 7 8", "aria-hidden": !0, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M1.5 3.3V2.4a2 2 0 0 1 4 0v.9", fill: "none", stroke: "currentColor", strokeWidth: "1.1" }),
    /* @__PURE__ */ l.jsx("rect", { x: "0", y: "3.3", width: "7", height: "4.7", rx: "1.2", fill: "currentColor" })
  ] });
}
function Ec({ back: o }) {
  return /* @__PURE__ */ l.jsx("svg", { className: "ss-window__chev", width: "10", height: "10", viewBox: "0 0 10 10", "aria-hidden": !0, children: /* @__PURE__ */ l.jsx("path", { d: o ? "M6.5 1.5 3 5l3.5 3.5" : "M3.5 1.5 7 5 3.5 8.5", fill: "none", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function C0({ url: o, urlShape: c, tabs: u, nav: y, title: v, sidebar: w, sidebarWidth: S = 180, sidebarStyle: E, toolbar: A, lead: z, body: P, className: W, receded: H, chrome: K, lights: D, lightsSize: X, barSize: q, children: I, ...re }) {
  const de = `ss-window ss-recede${W ? ` ${W}` : ""}`, U = X === "large" ? "large" : void 0, _ = q === "tall" ? "tall" : void 0;
  if (K === "terminal")
    return /* @__PURE__ */ l.jsxs("div", { ...re, className: de, "data-chrome": "terminal", "data-lights": D === "grey" ? "grey" : void 0, "data-lights-size": U, "data-receded": H || void 0, children: [
      /* @__PURE__ */ l.jsxs("div", { className: "ss-window__bar", children: [
        /* @__PURE__ */ l.jsx(xs, {}),
        v !== void 0 && /* @__PURE__ */ l.jsx("span", { className: "ss-term__title", children: v })
      ] }),
      /* @__PURE__ */ l.jsx("div", { ...P, className: `ss-window__body ss-term${P?.className ? ` ${P.className}` : ""}`, children: I })
    ] });
  if (K === "glass" || K === "card" || K === "hairline")
    return /* @__PURE__ */ l.jsxs("div", { ...re, className: de, "data-chrome": K, "data-lights": D === "color" || D === "white" ? D : K === "glass" ? "grey" : void 0, "data-receded": H || void 0, children: [
      /* @__PURE__ */ l.jsxs("div", { className: "ss-window__bar", children: [
        /* @__PURE__ */ l.jsx(xs, {}),
        o !== void 0 && /* @__PURE__ */ l.jsxs("span", { className: "ss-window__url", children: [
          K === "glass" && /* @__PURE__ */ l.jsx(A0, {}),
          /* @__PURE__ */ l.jsx("span", { className: "ss-window__url-text", children: o })
        ] }),
        /* @__PURE__ */ l.jsx("span", { className: "ss-window__end", children: A })
      ] }),
      /* @__PURE__ */ l.jsx("div", { ...P, className: `ss-window__body${P?.className ? ` ${P.className}` : ""}`, children: I })
    ] });
  const se = o !== void 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    y && /* @__PURE__ */ l.jsxs("span", { className: "ss-window__nav", children: [
      /* @__PURE__ */ l.jsx(Ec, { back: !0 }),
      /* @__PURE__ */ l.jsx(Ec, {})
    ] }),
    /* @__PURE__ */ l.jsx("span", { className: "ss-window__url", children: o })
  ] });
  return w !== void 0 ? /* @__PURE__ */ l.jsxs("div", { ...re, className: de, "data-kind": "sidebar", "data-side": E === "floating" ? "floating" : void 0, "data-lights": D === "grey" ? "grey" : void 0, "data-lights-size": U, "data-bar": _, "data-receded": H || void 0, "data-url-shape": c, children: [
    /* @__PURE__ */ l.jsxs("aside", { className: "ss-window__side", style: { width: S }, children: [
      /* @__PURE__ */ l.jsx("div", { className: "ss-window__side-top", children: /* @__PURE__ */ l.jsx(xs, {}) }),
      w
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "ss-window__main", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "ss-window__bar", children: [
        v !== void 0 && /* @__PURE__ */ l.jsx("span", { className: "ss-window__heading", children: v }),
        z,
        se,
        /* @__PURE__ */ l.jsx("span", { className: "ss-window__spacer" }),
        A
      ] }),
      /* @__PURE__ */ l.jsx("div", { ...P, className: `ss-window__body${P?.className ? ` ${P.className}` : ""}`, children: I })
    ] })
  ] }) : u?.length ? /* @__PURE__ */ l.jsxs("div", { ...re, className: de, "data-kind": "tabs", "data-lights": D === "grey" ? "grey" : void 0, "data-lights-size": U, "data-receded": H || void 0, "data-url-shape": c, children: [
    /* @__PURE__ */ l.jsxs("div", { className: "ss-window__tabs", children: [
      /* @__PURE__ */ l.jsx(xs, {}),
      u.map((G, B) => /* @__PURE__ */ l.jsxs("span", { className: "ss-window__tab", "data-active": B === 0 || void 0, children: [
        /* @__PURE__ */ l.jsx("span", { className: "ss-window__favicon" }),
        /* @__PURE__ */ l.jsx("span", { className: "ss-window__tab-label", children: G })
      ] }, B))
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "ss-window__bar", children: [
      se,
      A
    ] }),
    /* @__PURE__ */ l.jsx("div", { ...P, className: `ss-window__body${P?.className ? ` ${P.className}` : ""}`, children: I })
  ] }) : /* @__PURE__ */ l.jsxs("div", { ...re, className: de, "data-receded": H || void 0, "data-url-shape": c, "data-lights": D === "grey" ? "grey" : void 0, "data-lights-size": U, "data-bar": _, children: [
    /* @__PURE__ */ l.jsxs("div", { className: "ss-window__bar", children: [
      /* @__PURE__ */ l.jsx(xs, {}),
      se,
      v !== void 0 && /* @__PURE__ */ l.jsx("span", { className: "ss-window__title", "data-toolbar": A ? !0 : void 0, children: v }),
      z,
      o === void 0 && v === void 0 && /* @__PURE__ */ l.jsx("span", { className: "ss-window__spacer" }),
      A
    ] }),
    /* @__PURE__ */ l.jsx("div", { ...P, className: `ss-window__body${P?.className ? ` ${P.className}` : ""}`, children: I })
  ] });
}
const E0 = ["var(--ss-ink-1)", "var(--ss-ink-2)", "var(--ss-ink-3)", "var(--ss-ink-4)", "var(--ss-ink-5)"];
function js({ w: o, h: c = 6, tone: u = 3, r: y = 2, shrink: v, className: w, style: S, ...E }) {
  const A = v ?? (typeof o == "number" && o > c * 3);
  return /* @__PURE__ */ l.jsx("span", { ...E, className: `ss-bar${w ? ` ${w}` : ""}`, "data-shrink": A || void 0, style: { width: o, height: c, borderRadius: y, background: E0[u - 1], ...S } });
}
const P0 = { w: 402, h: 874, r: 64 }, Pc = { a: 71, n: 2.31 }, R0 = { w: 393, h: 829, r: 42 }, L0 = { w: 412, h: 915, r: 38 }, z0 = {
  pro: { band: 3, glass: 10 },
  // Apple's photograph of the iPhone 18 Pro (its product bezel): the body runs
  // 16pt past the screen on every side; the image itself is drawn over it
  photo: { band: 0, glass: 16 },
  bezel: { band: 0, glass: 12 },
  soft: { band: 0, glass: 12.5 },
  bare: { band: 0, glass: 0 },
  silver: { band: 4, glass: 9 },
  clay: { band: 0, glass: 16 },
  outline: { band: 0, glass: 8 },
  android: { band: 2, glass: 9 }
}, M0 = {
  pro: [[13, "band"], [10, "var(--ss-phone-rim)"], [9.25, "var(--ss-phone-glass)"]],
  silver: [[13, "band"], [9, "var(--ss-phone-glass)"]],
  bezel: [[12, "var(--ss-phone-glass)"]],
  clay: [[16, "clay"], [1, "var(--ss-phone-seam)"]]
};
function T0(o, c, u, y) {
  const w = 2 / y, S = [];
  return [
    [o - u, u, 1, -1],
    [o - u, c - u, 1, 1],
    [u, c - u, -1, 1],
    [u, u, -1, -1]
  ].forEach(([A, z, P, W], H) => {
    for (let K = 0; K <= 32; K++) {
      const D = K / 32 * (Math.PI / 2), X = H % 2 === 0 ? Math.sin(D) : Math.cos(D), q = H % 2 === 0 ? Math.cos(D) : Math.sin(D);
      S.push(`${(A + P * u * Math.pow(X, w)).toFixed(2)} ${(z + W * u * Math.pow(q, w)).toFixed(2)}`);
    }
  }), `M${S.join("L")}Z`;
}
function Hl({ width: o, frame: c = "pro", time: u = "9:41", island: y, status: v, dark: w, wallpaper: S, className: E, style: A, children: z, ...P }) {
  const W = M.useRef(null), [H, K] = M.useState(!0);
  M.useEffect(() => {
    if (c !== "photo" || !W.current) return;
    const we = getComputedStyle(W.current).backgroundImage.match(/url\(["']?([^"')]+)["']?\)/)?.[1];
    if (!we) return void K(!1);
    let Re = !0;
    const Se = new Image();
    return Se.onerror = () => Re && K(!1), Se.src = we, () => {
      Re = !1;
    };
  }, [c, w]);
  const D = c === "photo" && !H ? "pro" : c, { band: X, glass: q } = z0[D], { fidelity: I } = Wo(), re = D === "android" ? L0 : D === "soft" ? R0 : P0, de = X + q, U = o / (re.w + de * 2), _ = (ve) => ve * U, se = M.useId().replace(/:/g, ""), B = D !== "android" && D !== "soft" ? T0(_(re.w), _(re.h), _(Pc.a), Pc.n) : null, ke = M0[D], he = D === "pro" || D === "photo" || D === "bezel" || D === "silver" || D === "android", pe = y ?? (he && D !== "photo"), fe = v ?? he;
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      ...P,
      className: `ss-phone${E ? ` ${E}` : ""}`,
      "data-frame": D,
      "data-dark": w || void 0,
      style: {
        width: o,
        height: _(re.h + de * 2),
        padding: _(X),
        borderRadius: _(re.r + de),
        "--ps": `${U}px`,
        ...A
      },
      children: [
        (ke || D === "outline") && B && /* @__PURE__ */ l.jsxs("svg", { className: "ss-phone__bands", width: "100%", height: "100%", "aria-hidden": !0, children: [
          /* @__PURE__ */ l.jsxs("defs", { children: [
            /* @__PURE__ */ l.jsx("linearGradient", { id: `${se}-band`, x1: "0.2", y1: "0", x2: "0.8", y2: "1", children: [0, 0.22, 0.48, 0.74, 1].map((ve, we) => /* @__PURE__ */ l.jsx("stop", { offset: ve, style: { stopColor: `var(--ss-phone-band-${we + 1})` } }, ve)) }),
            /* @__PURE__ */ l.jsxs("linearGradient", { id: `${se}-clay`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
              /* @__PURE__ */ l.jsx("stop", { offset: "0", style: { stopColor: "var(--ss-phone-clay-top)" } }),
              /* @__PURE__ */ l.jsx("stop", { offset: "1", style: { stopColor: "var(--ss-phone-clay-bottom)" } })
            ] }),
            D === "outline" && // Line art: a ring between 7 and 8pt out, cut from a mask so it is one hairline
            /* @__PURE__ */ l.jsxs("mask", { id: `${se}-ring`, maskUnits: "userSpaceOnUse", x: "-50%", y: "-50%", width: "200%", height: "200%", children: [
              /* @__PURE__ */ l.jsx("path", { d: B, fill: "none", stroke: "#fff", strokeWidth: _(16) }),
              /* @__PURE__ */ l.jsx("path", { d: B, fill: "none", stroke: "#000", strokeWidth: _(16) - 2 })
            ] })
          ] }),
          /* @__PURE__ */ l.jsx("g", { transform: `translate(${_(de)} ${_(de)})`, strokeLinejoin: "round", children: D === "outline" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            /* @__PURE__ */ l.jsx("rect", { x: -_(9), y: -_(9), width: _(re.w + 18), height: _(re.h + 18), mask: `url(#${se}-ring)`, style: { fill: "var(--ss-phone-line)" } }),
            /* @__PURE__ */ l.jsx("path", { d: B, fill: "none", strokeWidth: "2", style: { stroke: "var(--ss-line, rgba(0, 0, 0, 0.06))" } })
          ] }) : ke.map(([ve, we]) => /* @__PURE__ */ l.jsx(
            "path",
            {
              d: B,
              fill: "none",
              strokeWidth: _(ve * 2),
              stroke: we === "band" || we === "clay" ? `url(#${se}-${we})` : void 0,
              style: we === "band" || we === "clay" ? void 0 : { stroke: we }
            },
            ve
          )) })
        ] }),
        /* @__PURE__ */ l.jsx("div", { className: "ss-phone__glass", style: { padding: _(q), borderRadius: _(re.r + q) }, children: /* @__PURE__ */ l.jsx(
          "div",
          {
            className: "ss-phone__window",
            style: {
              width: _(re.w),
              height: _(re.h),
              borderRadius: B ? void 0 : _(re.r),
              clipPath: B ? `path('${B}')` : void 0
            },
            children: /* @__PURE__ */ l.jsxs(
              "div",
              {
                className: "ss-phone__screen",
                style: { width: re.w, height: re.h, transform: `scale(${U})`, "--ss-screen-r": `${re.r}px`, ...S ? { background: S } : null },
                children: [
                  fe && /* @__PURE__ */ l.jsxs("div", { className: "ss-phone__status", children: [
                    /* @__PURE__ */ l.jsx("span", { className: "ss-phone__time", children: I === "minimal" ? /* @__PURE__ */ l.jsx("span", { className: "ss-phone__time-bar" }) : u }),
                    /* @__PURE__ */ l.jsxs("span", { className: "ss-phone__glyphs", children: [
                      /* @__PURE__ */ l.jsx(D0, {}),
                      /* @__PURE__ */ l.jsx(O0, {}),
                      /* @__PURE__ */ l.jsx(I0, {})
                    ] })
                  ] }),
                  pe && /* @__PURE__ */ l.jsx("span", { className: "ss-phone__island" }),
                  /* @__PURE__ */ l.jsx("div", { className: "ss-phone__content", "data-status": fe || void 0, children: z }),
                  he && /* @__PURE__ */ l.jsx("span", { className: "ss-phone__home" })
                ]
              }
            )
          }
        ) }),
        D === "photo" && // The bezel image is 450 × 920pt with the screen at (24, 23): laid over
        // the body so its cut-out frames the screen exactly
        /* @__PURE__ */ l.jsx("span", { ref: W, className: "ss-phone__photo", style: { left: _(-8), top: _(-7), width: _(450), height: _(920) } })
      ]
    }
  );
}
function D0() {
  return /* @__PURE__ */ l.jsx("svg", { viewBox: "0 0 20.33 13.67", width: "20.33", height: "13.67", className: "ss-phone__glyph ss-phone__signal", children: [6.33, 8.67, 11, 13.67].map((o, c) => /* @__PURE__ */ l.jsx("rect", { x: c * 5.667, y: 13.67 - o, width: 3.333, height: o, rx: 1.667, fill: "currentColor" }, c)) });
}
function O0() {
  return /* @__PURE__ */ l.jsx("svg", { viewBox: "0 0 19.33 14.33", width: "19.33", height: "14.33", className: "ss-phone__glyph ss-phone__wifi", children: /* @__PURE__ */ l.jsx("path", { fillRule: "evenodd", fill: "currentColor", d: "M0.415933 5.54283C0.902185 6.04412 1.66017 5.95818 2.27513 5.41393C4.30595 3.58064 6.83731 2.63535 9.66901 2.63535C12.5007 2.63535 15.0464 3.60928 17.0629 5.41393C17.6636 5.97251 18.4215 6.0298 18.9221 5.54283C19.4226 5.02722 19.4942 4.2538 18.9793 3.70954C16.8341 1.51819 13.3302 0 9.66901 0C6.00783 0 2.48965 1.53251 0.358727 3.72387C-0.156127 4.2538 -0.0989213 5.02722 0.415933 5.55715L0.415933 5.54283ZM3.94841 9.13779C4.50617 9.68205 5.22124 9.62476 5.85051 9.10915C6.88022 8.29276 8.25316 7.73418 9.66901 7.7485C11.0706 7.7485 12.4435 8.29276 13.4875 9.12347C14.1168 9.63908 14.8605 9.66773 15.4039 9.12347C15.9331 8.57921 16.0189 7.7485 15.4611 7.23289C14.0739 5.98683 11.9859 5.11315 9.68332 5.11315C7.38077 5.11315 5.27845 5.98683 3.9055 7.23289C3.41925 7.69121 3.31914 8.47896 3.96271 9.13779L3.94841 9.13779ZM8.72511 13.8929C9.34008 14.4801 9.98365 14.4801 10.5986 13.8929L11.757 12.7757C12.372 12.1742 12.5007 11.4151 11.7999 10.8995C11.2136 10.4841 10.4699 10.212 9.66901 10.212C8.86813 10.212 8.11015 10.4841 7.53809 10.9138C6.83731 11.4151 6.98033 12.1885 7.59529 12.7757L8.73942 13.8929L8.72511 13.8929Z" }) });
}
function I0() {
  return /* @__PURE__ */ l.jsxs("svg", { viewBox: "0 0 29.33 13.67", width: "29.33", height: "13.67", className: "ss-phone__glyph ss-phone__battery", children: [
    /* @__PURE__ */ l.jsx("path", { fill: "currentColor", d: "M0 6.4C0 4.15979 0 3.03969 0.435974 2.18404C0.819467 1.43139 1.43139 0.819467 2.18404 0.435974C3.03969 0 4.15979 0 6.4 0L19.933 0C22.1732 0 23.2933 0 24.149 0.435974C24.9016 0.819467 25.5135 1.43139 25.897 2.18404C26.333 3.03969 26.333 4.15979 26.333 6.4L26.333 7.26666C26.333 9.50687 26.333 10.627 25.897 11.4826C25.5135 12.2353 24.9016 12.8472 24.149 13.2307C23.2933 13.6667 22.1732 13.6667 19.933 13.6667L6.4 13.6667C4.15979 13.6667 3.03969 13.6667 2.18404 13.2307C1.43139 12.8472 0.819467 12.2353 0.435974 11.4826C0 10.627 0 9.50687 0 7.26666L0 6.4Z" }),
    /* @__PURE__ */ l.jsx("path", { fillRule: "evenodd", fill: "currentColor", transform: "translate(27.33 4.33)", d: "M0 0L0 5C0.601505 4.8625 2 3.75 2 2.5C2 1.25 0.601505 0.1375 0 0Z" })
  ] });
}
const Gc = M.createContext({ current: !0 });
function Rc(o) {
  const c = getComputedStyle(o), u = c.boxSizing === "border-box" ? 0 : [c.paddingLeft, c.paddingRight, c.borderLeftWidth, c.borderRightWidth].reduce((S, E) => S + (parseFloat(E) || 0), 0), y = parseFloat(c.width) + u, v = y && o.getBoundingClientRect().width / y || 1, w = /* @__PURE__ */ new Map();
  return new Map(Array.from(o.children, (S) => {
    const E = S.offsetParent;
    return E && !w.has(E) && w.set(E, E.getBoundingClientRect().top), [S, (S.getBoundingClientRect().top - (E ? w.get(E) : 0)) / v];
  }));
}
function B0({ app: o = "imessage", className: c, style: u, children: y }) {
  const v = M.useRef(null), w = M.useRef(!1), S = v.current ? Rc(v.current) : /* @__PURE__ */ new Map();
  M.useEffect(() => {
    w.current = !0;
  }, []), M.useLayoutEffect(() => {
    const P = v.current;
    if (!P) return;
    const W = Rc(P);
    for (const [H, K] of Array.from(W)) {
      const D = H, X = S.get(D);
      if (X === void 0 || Math.abs(X - K) < 1e-3) continue;
      const q = parseFloat(getComputedStyle(D).top) || 0;
      D.style.transition = "none", D.style.top = `${X + q - K}px`, D.offsetWidth, D.style.transition = "", D.style.top = "";
    }
  });
  const E = M.Children.toArray(y).filter(M.isValidElement), A = (P) => P.type === zr ? P.props.from : null, z = E.map((P, W) => {
    if (P.type !== zr || P.props.tail !== void 0) return P;
    const H = E.slice(W + 1).find((K) => K.type === zr);
    return M.cloneElement(P, { tail: !H || A(H) !== P.props.from });
  });
  return /* @__PURE__ */ l.jsx(Gc.Provider, { value: w, children: /* @__PURE__ */ l.jsx("div", { ref: v, className: `ss-thread${c ? ` ${c}` : ""}`, "data-app": o, style: u, children: z }) });
}
function zr({ avatar: o, from: c, typing: u = !1, tail: y, source: v, tapback: w, className: S, style: E, children: A, ...z }) {
  const { fidelity: P } = Wo(), W = M.useRef(M.useContext(Gc).current).current, H = M.useRef(null), K = M.useRef(null), D = M.useRef(u), X = M.useRef(!1);
  D.current && !u && (X.current = !0), D.current = u, M.useLayoutEffect(() => {
    const I = H.current;
    if (!I) return;
    const re = K.current;
    I.style.width = "", I.style.height = "";
    const de = getComputedStyle(I), U = { w: parseFloat(de.width), h: parseFloat(de.height) };
    if (K.current = U, !re || re.w === U.w && re.h === U.h) return;
    const _ = I.querySelector(".ss-bubble__text");
    _ && (_.style.width = getComputedStyle(_).width), I.style.transition = "none", I.style.width = `${re.w}px`, I.style.height = `${re.h}px`, I.offsetWidth, I.style.transition = "", I.style.width = `${U.w}px`, I.style.height = `${U.h}px`;
    const se = () => {
      I.style.width = "", I.style.height = "", _ && (_.style.width = "");
    };
    return I.addEventListener("transitionend", se, { once: !0 }), () => I.removeEventListener("transitionend", se);
  }, [u, A]), M.useLayoutEffect(() => {
    const I = H.current;
    if (!I || !W || !v) return;
    const re = I.closest(".ss-stage") ?? document, de = re.querySelector(`[data-target="${v}"]`) ?? re.querySelector(v), U = I.querySelector(".ss-bubble__text");
    if (!de || !U || window.matchMedia("(prefers-reduced-motion: reduce)").matches || I.closest("[data-still]")) return;
    I.style.transition = "none", I.style.left = I.style.top = "0px";
    const _ = I.getBoundingClientRect().width / I.offsetWidth || 1, se = de.getBoundingClientRect(), G = U.getBoundingClientRect(), B = (se.left - G.left) / _, ke = (se.top + se.height / 2 - (G.top + G.height / 2)) / _, he = "cubic-bezier(0.22, 1, 0.36, 1)";
    I.style.transition = "none", I.style.left = `${B}px`, I.style.top = `${ke}px`, I.setAttribute("data-flying", ""), I.style.color = getComputedStyle(de).color, I.offsetWidth, I.style.transition = `left 0.5s ${he}, top 0.5s ${he}, color 0.3s ease 0.06s`, I.style.left = I.style.top = "", I.removeAttribute("data-flying"), I.style.color = "";
    const pe = (fe) => {
      fe.target !== I || fe.propertyName !== "top" || (I.style.transition = "", I.removeEventListener("transitionend", pe));
    };
    return I.addEventListener("transitionend", pe), () => I.removeEventListener("transitionend", pe);
  }, []);
  let q = A;
  return P === "minimal" && typeof A == "string" && (q = /* @__PURE__ */ l.jsx("span", { className: "ss-bar ss-bubble__bar", style: { width: Math.min(180, A.length * 5.5) } })), /* @__PURE__ */ l.jsxs("div", { className: `ss-bubble-row${S ? ` ${S}` : ""}`, "data-from": c, "data-avatar": o ? "" : void 0, style: E, children: [
    o && c !== "me" && /* @__PURE__ */ l.jsx("span", { className: "ss-bubble__avatar", "aria-hidden": !0, children: o }),
    /* @__PURE__ */ l.jsxs("div", { ...z, ref: H, className: "ss-bubble", "data-arrived": W || void 0, "data-source": v ? "" : void 0, "data-tail": y || void 0, "data-typing": u || void 0, "data-grew": X.current || void 0, "data-tapback": w && w.show !== !1 ? "" : void 0, children: [
      w && /* @__PURE__ */ l.jsx("span", { className: "ss-tapback", "data-show": w.show !== !1 || void 0, "aria-hidden": !0, children: /* @__PURE__ */ l.jsx("span", { className: "ss-tapback__emoji", children: w.emoji }) }),
      u ? /* @__PURE__ */ l.jsxs("span", { className: "ss-bubble__dots", "aria-label": "typing", children: [
        /* @__PURE__ */ l.jsx("i", {}),
        /* @__PURE__ */ l.jsx("i", {}),
        /* @__PURE__ */ l.jsx("i", {})
      ] }) : /* @__PURE__ */ l.jsx("span", { className: "ss-bubble__text", children: q }),
      /* @__PURE__ */ l.jsx("svg", { className: "ss-bubble__tail", viewBox: "0 0 18 16", "aria-hidden": !0, children: /* @__PURE__ */ l.jsx("path", { d: c === "me" ? "M0 0H12V8.5C12 12.6 14 15 17.5 16C15 16.7 12.2 16.5 9.8 15.3L0 15Z" : "M18 0H6V8.5C6 12.6 4 15 0.5 16C3 16.7 5.8 16.5 8.2 15.3L18 15Z" }) })
    ] })
  ] });
}
function W0({ children: o, className: c }) {
  return /* @__PURE__ */ l.jsx("div", { className: `ss-stamp${c ? ` ${c}` : ""}`, children: o });
}
function Gt({ from: o, to: c, route: u = "h", show: y, radius: v = 8, dots: w, arrow: S, label: E, labelAt: A = 0.5, dashed: z, className: P }) {
  const W = S && u === "curve" ? { x: c.x - Math.sign(c.x - o.x) * Math.min(8, Math.abs(c.x - o.x) / 3), y: c.y } : c, H = W === c ? zc(o, c, u, v) : `${zc(o, W, u, v)}L${c.x} ${c.y}`, K = w ?? (S ? "none" : "end"), D = M.useRef(null), X = M.useRef(null), q = `ss-connector-${M.useId().replace(/:/g, "")}`, [I, re] = M.useState(!1);
  M.useLayoutEffect(() => {
    const fe = D.current;
    if (!fe) return;
    if (!z) {
      fe.style.removeProperty("stroke-dasharray");
      return;
    }
    const ve = fe.getTotalLength(), we = Math.max(1, Math.round((ve + 4) / 8)), Re = (ve / (we * 2 - 1)).toFixed(3);
    fe.style.strokeDasharray = `${Re} ${Re}`;
  }, [H, z]), M.useLayoutEffect(() => {
    const fe = z ? X.current : D.current;
    if (re(!1), !y || !fe) return;
    const ve = "stroke-dashoffset", we = () => {
      const Se = getComputedStyle(fe);
      Math.abs(parseFloat(Se.strokeDashoffset)) < 1e-4 && re(!0);
    }, Re = (Se) => {
      Se.target === fe && Se.propertyName === ve && we();
    };
    return fe.addEventListener("transitionend", Re), fe.addEventListener("transitioncancel", Re), we(), () => {
      fe.removeEventListener("transitionend", Re), fe.removeEventListener("transitioncancel", Re);
    };
  }, [H, z, y]);
  const de = W === c ? Lc(o, c, u) : [...Lc(o, W, u), c], U = de[de.length - 1], _ = de.slice(0, -1).reverse().find((fe) => Math.hypot(U.x - fe.x, U.y - fe.y) > 1e-3) ?? U, se = Math.hypot(U.x - _.x, U.y - _.y), G = se || 1, B = (U.x - _.x) / G, ke = (U.y - _.y) / G, he = `M${U.x - B * 6 - ke * 4} ${U.y - ke * 6 + B * 4}L${U.x} ${U.y}L${U.x - B * 6 + ke * 4} ${U.y - ke * 6 - B * 4}`, pe = F0(de, A);
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsxs("svg", { className: `ss-connector${P ? ` ${P}` : ""}`, "data-show": y || void 0, "data-arrived": y && I || void 0, "data-dashed": z || void 0, "aria-hidden": !0, children: [
      z && /* @__PURE__ */ l.jsx("defs", { children: /* @__PURE__ */ l.jsx("mask", { id: q, maskUnits: "userSpaceOnUse", children: /* @__PURE__ */ l.jsx("path", { ref: X, className: "ss-connector__reveal", d: H, pathLength: "1", style: { fill: "none", stroke: "#fff", strokeWidth: 8 } }) }) }),
      /* @__PURE__ */ l.jsx("path", { ref: D, className: "ss-connector__line", d: H, pathLength: z ? void 0 : 1, mask: z ? `url(#${q})` : void 0 }),
      S && se > 1e-3 && /* @__PURE__ */ l.jsx("path", { d: he, className: "ss-connector__arrow" }),
      K === "both" && /* @__PURE__ */ l.jsx("circle", { cx: o.x, cy: o.y, r: 3, className: "ss-connector__dot ss-connector__dot--start" }),
      K !== "none" && /* @__PURE__ */ l.jsx("circle", { cx: c.x, cy: c.y, r: 3, className: "ss-connector__dot" })
    ] }),
    E !== void 0 && /* @__PURE__ */ l.jsx("span", { className: "ss-connector__label", "data-show": y || void 0, "data-arrived": y && I || void 0, "data-step": typeof E == "number" || void 0, style: { left: pe.x, top: pe.y }, children: E })
  ] });
}
function Vc(o, c) {
  const u = (o.x + c.x) / 2;
  return [{ x: u, y: o.y }, { x: u, y: c.y }];
}
function Lc(o, c, u) {
  if (u === "straight") return [o, c];
  if (u === "curve") {
    const [y, v] = Vc(o, c);
    return Array.from({ length: 25 }, (w, S) => {
      const E = S / 24, A = 1 - E;
      return {
        x: A * A * A * o.x + 3 * A * A * E * y.x + 3 * A * E * E * v.x + E * E * E * c.x,
        y: A * A * A * o.y + 3 * A * A * E * y.y + 3 * A * E * E * v.y + E * E * E * c.y
      };
    });
  }
  if (u === "step") {
    const y = (o.x + c.x) / 2;
    return [o, { x: y, y: o.y }, { x: y, y: c.y }, c];
  }
  return u === "h" ? [o, { x: c.x, y: o.y }, c] : [o, { x: o.x, y: c.y }, c];
}
function F0(o, c) {
  const u = o.slice(1).map((v, w) => Math.hypot(v.x - o[w].x, v.y - o[w].y));
  let y = u.reduce((v, w) => v + w, 0) * Math.max(0, Math.min(1, c));
  for (let v = 0; v < u.length; v++) {
    if (y <= u[v] || v === u.length - 1) {
      const w = u[v] ? Math.min(1, y / u[v]) : 0;
      return { x: o[v].x + (o[v + 1].x - o[v].x) * w, y: o[v].y + (o[v + 1].y - o[v].y) * w };
    }
    y -= u[v];
  }
  return o[0];
}
function zc(o, c, u, y) {
  if (u === "straight") return `M${o.x} ${o.y}L${c.x} ${c.y}`;
  if (u === "curve") {
    const [z, P] = Vc(o, c);
    return `M${o.x} ${o.y}C${z.x} ${z.y} ${P.x} ${P.y} ${c.x} ${c.y}`;
  }
  const v = c.x - o.x, w = c.y - o.y;
  if (u === "step") {
    const z = (o.x + c.x) / 2, P = Math.min(y, Math.abs(v) / 2, Math.abs(w) / 2), W = Math.sign(v) || 1, H = Math.sign(w) || 1;
    return P ? `M${o.x} ${o.y}H${z - W * P}Q${z} ${o.y} ${z} ${o.y + H * P}V${c.y - H * P}Q${z} ${c.y} ${z + W * P} ${c.y}H${c.x}` : `M${o.x} ${o.y}H${z}V${c.y}H${c.x}`;
  }
  const S = Math.min(y, Math.abs(v), Math.abs(w)), E = Math.sign(v) || 1, A = Math.sign(w) || 1;
  return u === "h" ? `M${o.x} ${o.y}H${c.x - E * S}Q${c.x} ${o.y} ${c.x} ${o.y + A * S}V${c.y}` : `M${o.x} ${o.y}V${c.y - A * S}Q${o.x} ${c.y} ${o.x + E * S} ${c.y}H${c.x}`;
}
const H0 = "012345678901234567890123456789".split(""), Dl = 10, Q0 = (o) => {
  const c = /^(.*\d)(\s*)([^\d\s.,]+)$/.exec(o);
  return c ? { head: c[1], space: c[2].length > 0, unit: c[3] } : { head: o, space: !1, unit: "" };
}, Mc = (o) => {
  const c = [];
  for (let u = o.length - 1; u >= 0; u--) {
    const y = o[u];
    y >= "0" && y <= "9" && c.push(Number(y));
  }
  return c;
};
function $n({ value: o, format: c = (E) => Math.round(E).toLocaleString("en-US"), duration: u = 700, stagger: y = 45, className: v, style: w, ...S }) {
  const E = Fo(), A = M.useRef(null), z = c(o), { head: P, space: W, unit: H } = Q0(z), K = P.split(""), D = Mc(z), [X, q] = M.useState(() => D.map((U) => Dl + U)), I = M.useRef({ text: z, value: o, idx: X });
  I.current.idx = X;
  const re = M.useRef(!1);
  M.useLayoutEffect(() => {
    const U = A.current;
    if (!U) return;
    const _ = I.current;
    if (_.text === z) return;
    const se = E || u <= 0 || !!U.closest("[data-instant], [data-offscreen]"), G = Mc(_.text), B = o >= _.value, ke = D.map((he, pe) => {
      const fe = G[pe], ve = _.idx[pe];
      return fe === void 0 || ve === void 0 || se ? Dl + he : fe === he ? ve : B ? ve + (he - fe + 10) % 10 : ve - (fe - he + 10) % 10;
    });
    if (U.toggleAttribute("data-snap", se), !se) {
      for (const he of Array.from(U.querySelectorAll(".ss-count__strip"))) getComputedStyle(he).transform;
      U.setAttribute("data-rolling", "");
    }
    I.current = { text: z, value: o, idx: ke }, q(ke);
  }, [z, o, E, u]), M.useEffect(() => {
    const U = A.current;
    if (!U || !U.hasAttribute("data-rolling")) return;
    const _ = window.setTimeout(() => {
      U.setAttribute("data-snap", ""), re.current = !0;
      const se = D.map((G) => Dl + G);
      I.current.idx = se, q(se), U.removeAttribute("data-rolling");
    }, u + y * D.length + 60);
    return () => window.clearTimeout(_);
  }, [X]), M.useLayoutEffect(() => {
    const U = A.current;
    if (!(!U || !re.current)) {
      re.current = !1;
      for (const _ of Array.from(U.querySelectorAll(".ss-count__strip"))) getComputedStyle(_).transform;
      U.removeAttribute("data-snap");
    }
  }, [X]);
  let de = D.length;
  return /* @__PURE__ */ l.jsxs("span", { ...S, ref: A, className: `ss-count${v ? ` ${v}` : ""}`, style: w, "aria-label": z, children: [
    K.map((U, _) => {
      if (U < "0" || U > "9") return /* @__PURE__ */ l.jsx("span", { className: "ss-count__char", "aria-hidden": !0, children: U }, `s${_}-${U}`);
      const se = --de, G = X[se] ?? Dl + Number(U);
      return /* @__PURE__ */ l.jsx("span", { className: "ss-count__digit", "data-crop": !0, "aria-hidden": !0, children: /* @__PURE__ */ l.jsx(
        "span",
        {
          className: "ss-count__strip",
          style: { transform: `translateY(${-G}em)`, transitionDuration: `${u}ms`, transitionDelay: `${se * y}ms` },
          children: H0.map((B, ke) => /* @__PURE__ */ l.jsx("span", { children: B }, ke))
        }
      ) }, `d${se}`);
    }),
    H && /* @__PURE__ */ l.jsx("span", { className: "ss-count__unit", "data-space": W || void 0, "aria-hidden": !0, children: H })
  ] });
}
function Pt({ open: o, reveal: c = "clip", from: u = "above", solid: y = !1, children: v, className: w, ...S }) {
  const [E, A] = M.useState(!1), [z, P] = M.useState(!1), W = M.useRef(null), H = M.useRef(!0);
  return M.useLayoutEffect(() => {
    const K = W.current?.scrollHeight ?? 0;
    if (K && P(K > 44), H.current) return void (H.current = !1);
    A(!0);
    const D = setTimeout(() => A(!1), 900);
    return () => clearTimeout(D);
  }, [o]), /* @__PURE__ */ l.jsx(
    "div",
    {
      ...S,
      className: `ss-collapse${w ? ` ${w}` : ""}`,
      "data-open": o || void 0,
      "data-reveal": c,
      "data-solid": y || void 0,
      "data-from": c === "drop" ? u : void 0,
      "data-moving": E || void 0,
      "data-tall": z || void 0,
      onTransitionEnd: (K) => {
        K.target === K.currentTarget && K.propertyName === "grid-template-rows" && A(!1), S.onTransitionEnd?.(K);
      },
      children: /* @__PURE__ */ l.jsx("div", { ref: W, className: "ss-collapse__inner", "data-crop": c === "clip" || void 0, children: v })
    }
  );
}
function Ho({ value: o, states: c, align: u = "center", className: y, style: v, ...w }) {
  const S = Fo();
  return /* @__PURE__ */ l.jsx("span", { ...w, className: `ss-states${y ? ` ${y}` : ""}`, "data-align": u, "data-reduced": S || void 0, style: v, children: Object.keys(c).map((E) => /* @__PURE__ */ l.jsx("span", { className: "ss-states__item", "data-on": E === o || void 0, "aria-hidden": E !== o || void 0, children: c[E] }, E)) });
}
function qc({ text: o, count: c, mark: u, className: y, style: v, ...w }) {
  const S = o.split(" "), E = S.map((A, z) => !!u?.(A, z));
  return /* @__PURE__ */ l.jsx("span", { ...w, className: `ss-stream${y ? ` ${y}` : ""}`, style: v, children: S.map((A, z) => {
    const P = E[z] && E[z + 1];
    return /* @__PURE__ */ l.jsxs("span", { children: [
      /* @__PURE__ */ l.jsxs("span", { className: "ss-stream__w", "data-on": z < c || void 0, "data-mark": E[z] || void 0, "data-join": P || void 0, "data-joined": E[z] && E[z - 1] || void 0, children: [
        A,
        P ? " " : ""
      ] }),
      !P && z < S.length - 1 ? " " : ""
    ] }, z);
  }) });
}
const Tc = ["#c98f6e", "#6f9b7d", "#7b86c7", "#c47a9e", "#8c9ab0", "#c2a35a"], U0 = (o) => {
  let c = 0;
  for (const u of o) c = (c * 31 + u.charCodeAt(0)) % 9973;
  return Tc[c % Tc.length];
};
function Rr({ name: o = "", plain: c = !1, size: u = 24, tone: y = o ? "person" : "ink", src: v, ring: w, className: S, style: E, ...A }) {
  const { fidelity: z } = Wo(), P = c || z === "minimal", W = y === "person" && !P ? { background: U0(o), color: "#fff" } : void 0, H = o.trim().split(/\s+/).filter(Boolean), K = y === "ios" ? (H[0]?.[0] ?? "") + (H.length > 1 ? H[H.length - 1][0] : "") : o.trim()[0] ?? "";
  return /* @__PURE__ */ l.jsx(
    "span",
    {
      ...A,
      className: `ss-avatar${S ? ` ${S}` : ""}`,
      "data-tone": y,
      "data-ring": w,
      style: { width: u, height: u, fontSize: Math.round(u * (y === "ios" ? 0.4 : u < 24 ? 0.5 : 0.42)), ...W, ...E },
      children: v && !P ? /* @__PURE__ */ l.jsx("img", { src: v, alt: "" }) : P ? null : /* @__PURE__ */ l.jsx("span", { className: "ss-avatar__initial", children: K.toUpperCase() })
    }
  );
}
function Ql({ on: o, pending: c, size: u = 16, className: y, ...v }) {
  return /* @__PURE__ */ l.jsx("span", { ...v, className: `ss-check${y ? ` ${y}` : ""}`, "data-on": o || void 0, "data-pending": c && !o || void 0, style: { width: u, height: u, ...v.style }, children: /* @__PURE__ */ l.jsxs("svg", { viewBox: "0 0 16 16", width: u, height: u, "aria-hidden": !0, children: [
    /* @__PURE__ */ l.jsx("circle", { className: "ss-check__ring", cx: "8", cy: "8", r: "7.25" }),
    /* @__PURE__ */ l.jsx("circle", { className: "ss-check__arc", cx: "8", cy: "8", r: "7.25", pathLength: 1 }),
    /* @__PURE__ */ l.jsx("circle", { className: "ss-check__fill", cx: "8", cy: "8", r: "8" }),
    /* @__PURE__ */ l.jsx("path", { className: "ss-check__tick", d: "M4.5 8.2 7 10.6l4.6-5", pathLength: 1 })
  ] }) });
}
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X0 = (o) => o.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Yc = (...o) => o.filter((c, u, y) => !!c && c.trim() !== "" && y.indexOf(c) === u).join(" ").trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var _0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K0 = M.forwardRef(
  ({
    color: o = "currentColor",
    size: c = 24,
    strokeWidth: u = 2,
    absoluteStrokeWidth: y,
    className: v = "",
    children: w,
    iconNode: S,
    ...E
  }, A) => M.createElement(
    "svg",
    {
      ref: A,
      ..._0,
      width: c,
      height: c,
      stroke: o,
      strokeWidth: y ? Number(u) * 24 / Number(c) : u,
      className: Yc("lucide", v),
      ...E
    },
    [
      ...S.map(([z, P]) => M.createElement(z, P)),
      ...Array.isArray(w) ? w : [w]
    ]
  )
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Me = (o, c) => {
  const u = M.forwardRef(
    ({ className: y, ...v }, w) => M.createElement(K0, {
      ref: w,
      iconNode: c,
      className: Yc(`lucide-${X0(o)}`, y),
      ...v
    })
  );
  return u.displayName = `${o}`, u;
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jc = Me("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G0 = Me("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V0 = Me("Banknote", [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M6 12h.01M18 12h.01", key: "113zkx" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q0 = Me("BatteryFull", [
  ["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2", key: "1w10f2" }],
  ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }],
  ["line", { x1: "6", x2: "6", y1: "11", y2: "13", key: "1wd6dw" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "13", key: "haxvl5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "13", key: "c6fn6x" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y0 = Me("Bell", [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J0 = Me("CalendarCheck", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "m9 16 2 2 4-4", key: "19s6y9" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ss = Me("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z0 = Me("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qo = Me("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b0 = Me("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $0 = Me("Database", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e1 = Me("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t1 = Me("Landmark", [
  ["line", { x1: "3", x2: "21", y1: "22", y2: "22", key: "j8o0r" }],
  ["line", { x1: "6", x2: "6", y1: "18", y2: "11", key: "10tf0k" }],
  ["line", { x1: "10", x2: "10", y1: "18", y2: "11", key: "54lgf6" }],
  ["line", { x1: "14", x2: "14", y1: "18", y2: "11", key: "380y" }],
  ["line", { x1: "18", x2: "18", y1: "18", y2: "11", key: "1kevvc" }],
  ["polygon", { points: "12 2 20 7 4 7", key: "jkujk7" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n1 = Me("ListChecks", [
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }],
  ["path", { d: "M13 6h8", key: "15sg57" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 18h8", key: "oe0vm4" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r1 = Me("Lock", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s1 = Me("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l1 = Me("RefreshCw", [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i1 = Me("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o1 = Me("Share2", [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a1 = Me("Signal", [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }],
  ["path", { d: "M12 20v-8", key: "i3yub9" }],
  ["path", { d: "M17 20V8", key: "1tkaf5" }],
  ["path", { d: "M22 4v16", key: "sih9yq" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u1 = Me("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c1 = Me("Split", [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M8 3H3v5", key: "15dfkv" }],
  ["path", { d: "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3", key: "1qrqzj" }],
  ["path", { d: "m15 9 6-6", key: "ko1vev" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d1 = Me("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dc = Me("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f1 = Me("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p1 = Me("Wallet", [
  [
    "path",
    {
      d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
      key: "18etb6"
    }
  ],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h1 = Me("Wifi", [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m1 = Me("Workflow", [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v1 = Me("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function y1({ size: o = 14, className: c, style: u, ...y }) {
  return /* @__PURE__ */ l.jsxs("svg", { ...y, className: `ss-spinner${c ? ` ${c}` : ""}`, viewBox: "0 0 16 16", width: o, height: o, style: u, "aria-hidden": !0, children: [
    /* @__PURE__ */ l.jsx("circle", { cx: "8", cy: "8", r: "6.25", fill: "none", stroke: "currentColor", strokeOpacity: "0.18", strokeWidth: "1.5" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 1.75a6.25 6.25 0 0 1 6.25 6.25", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
  ] });
}
function g1({ value: o, tone: c = "accent", className: u, style: y, ...v }) {
  return /* @__PURE__ */ l.jsx("span", { ...v, className: `ss-meter${u ? ` ${u}` : ""}`, "data-tone": c, style: y, children: /* @__PURE__ */ l.jsx("span", { className: "ss-meter__fill", style: { clipPath: `inset(0 ${(1 - Math.max(0, Math.min(1, o))) * 100}% 0 0 round 3px)` } }) });
}
function zo({ lead: o, title: c, subtitle: u, meta: y, preview: v, unread: w, selected: S, pad: E = 12, className: A, style: z, children: P, ...W }) {
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      ...W,
      className: `ss-row${A ? ` ${A}` : ""}`,
      "data-selected": S || void 0,
      "data-unread": w || void 0,
      "data-lead": o ? "" : void 0,
      style: { "--ss-row-pad": `${E}px`, ...z },
      children: [
        w && /* @__PURE__ */ l.jsx("span", { className: "ss-row__dot", "aria-hidden": !0 }),
        o && /* @__PURE__ */ l.jsx("span", { className: "ss-row__lead", children: o }),
        /* @__PURE__ */ l.jsxs("span", { className: "ss-row__body", children: [
          /* @__PURE__ */ l.jsxs("span", { className: "ss-row__head", children: [
            /* @__PURE__ */ l.jsx("span", { className: "ss-row__title", children: c }),
            y && /* @__PURE__ */ l.jsx("span", { className: "ss-row__meta", children: y })
          ] }),
          u && /* @__PURE__ */ l.jsx("span", { className: "ss-row__subtitle", children: u })
        ] }),
        v && (Array.isArray(v) && v.every((H) => typeof H == "number") ? /* @__PURE__ */ l.jsx("span", { className: "ss-row__preview", "aria-hidden": !0, children: v.map((H, K) => /* @__PURE__ */ l.jsx(js, { w: H, h: 6, tone: 2 }, K)) }) : /* @__PURE__ */ l.jsx("span", { className: "ss-row__preview", "data-text": !0, children: v })),
        P
      ]
    }
  );
}
const x1 = "data:image/webp;base64,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", w1 = "data:image/webp;base64,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", k1 = "data:image/webp;base64,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", j1 = "data:image/webp;base64,UklGRggNAABXRUJQVlA4WAoAAAAQAAAAgAAAgAAAQUxQSKIDAAABDrrb/pn1pmQO1jYq8z+w0Zudzcrl2739eitWqljZRm/be3JyXb8kB8l85trtPpPPzCQiXMu2Ujcc6QGiJk83hX4A24UZj0gy7n7CZZseeeO1z8u5JK+hT4+Ey07YvX5RY0NboZST3Pnoax5777tyNXzHdM3RO2ektzLgoyd52HWPf19WmBezRPqGeDKlxlXEx687rH6dtlkk000vzkqp+DdxrtXgmQIlpf6mKmCTYSK5/UVPh1IKs7nWhU+16xvi9uTI2NNj3zs/XRxpKfDpnfva0cGPySPu+1maNSOtBZIUeETGcddGJPe572+pGWk5IP3NmHHUadRweuvXTasj4+uhp8m7jJ7+fql/a1ZXRpDe78nY2Zx7P7S4R4cduHc3UxryrM/LguoepIazMpoOuk02lwqyA0Ea2HqvyANf0KyQLWDSCwe23MY89ftm1JpgHJhavedeLM1kF5LkGfP27jqbq7PZBlJDZnxb9l1lmss++KR+w2xL/yntxD/tNG82NMhWBPXrH/Tjulrd0potcWgetfbgwLSmXqwwt1p80MVrtciTVNitkqf6Ne7FJt/vu4Kl7SC/87lZ+YTxlXIm+5E0xOhXnyEIAWHlCSLPqBSkncG4Uqfdv5kXIEL/TVilT+SjzU4QfeIKFHlKpUAtLm3eTD+px2BC/dTky/iWiqHoliVk/J7fF3Mo8Yx75mYxP1AxGIWFZHjwXxWD0XBwtoAiH6wYjuICyrnHb/MNRiP/W2Le5DsrBqQ7G+T9tl9pg/FIMeQ1GvPciiEpclwbredh5XkjkuJB/9ZiiKEw0FT+zeW/oBJ0MxNp8toLIKg7eEPxkL9Rfcn/fQjNJLuu8mHd6zgZZU9VPqwbOeIuPwnYUT+QR/pCuKDvM16lACxBkXwUXCK3/FDQjuKWe/4oDyxe3PPoAlklz3Q5tC9Rl2/SDFqSwsPwP/5deEkvwctLn5fgwzQIH94B+h8A/wvCDrj/OOAO7IBnkAOewg54D3HAm5gD3kUd8DbugO8R/C8yB3yTuuCr3AHrEg5YmXHA2pQDVufg1yddsELrgDVq/FV6B+xTOGCnBn+vygG7dfj7lQ7YscXfs3bArj1+3oIDMjfwc1fws3cckL+En8GFn8PmgCw+/DxG/ExO/FxW/GxeB+Qz42d04+e042f149c14Fd2wNe24Ff34Nc34Vd44de4wVf54dc5wld64te6wlf7wtc7w1d8w9e8u7PqH/9/DwhWUDggQAkAALAxAJ0BKoEAgQA+PRyLRKIhikQuwhAB4ljANHwzNIe4Do+ehZX71jnT/MflL/jO1d+j/YA/Uj/K/k728/Mb+0f+w/rvvH9IB/Lv6z1mfoGftV6ZHszfuF+1Xsv5sT/nus7wy+VW/HcOO1f/gPyV/LHlReYf0r/f/aBz4aWjQA/jH9m9E7/c81X0h/2vcF/lX9P/53rK9SL+rxxigUrebE13QNnBZjc5zHIAdLsNXoKz1QRfxFoZkoac5N8KNDavqsDLGaYB5F0WAaKBegiph4lDclfd8ArVHHwnP4GgeAOl4gXYOx4v9OfcskMio2ZFKpC6IyWzrL1YV0Z6ewUaF2juzqB9Aw3uQPuIF//8YAf9eRe0nDegwWKOW3XqACiB8c5WR8nAEjOGPJHnTjtO27oQFXlkf64SLLNKXHHb+9eR6tmbwOM5s5OPAiSbwb35Tv+6lAfFPLwwRiVi13Ds2LY/mdvZ+XKrWpDxlIMnlwFH9/WWOSG5BLWlgUCnrrwDK89eCly3t5ZS2CygA4Og3OOOebcNaAAA/v6JG9Bql6ZDnHVTeNWFyHUvXrFiClrxgJYJGuW3gmbXKXmcl2fnyJLzKECQnr8zxxpp/XannVGNwhnABMzhCz+BXXlf9h7+ZPGfxxhZa4UDtTy0/oO26YEiwO5dIFINLdwSz/xZ/9yKgOQmT4Q0Sx5tc1+OAmbOb0SrHmEr3pA2xD1i8cdFEHtfs7FCtf/ZKusUv9XshSKlEavhLCaI4fczmRlifohUAbqOORGdaNPm3R7QWTclWk+bRUAH1BT5Uqr2dQ0Ztujd+he+9QudhHe9rCR4WH27L+B76WwwRG6laW2UcKJCC5TXZtK7L1X1IOVMnsPqasGH/uczjDFvuo8yWiBeYwPWs5Xm2pLGeXgmSGpA/C9gbEr9VOGT3uIh46G7a/8hjvo26WadvQKu0D/VnpAw+e/zZ87+oqqC8R7f2p7G9KRpIfJMjC2CV/8uw+avxnMOh8JyYgahHF4D7knIedWg9I3UB69ATwGY2Y/CYbS/zB7oIA/DDO2VkcT7L/jla2GVcZf7TuV6Wkj+kf9zYhkTSuqk6xclrfFpxD6vrnqRtu07KOQSgbmQDmY8lIFY6eap9f2JeyTw0beLnhHx6jKDe/LTBrgFZwgebpHtBsgUEjNSCi6pnG3vuTiF9e1YUX3fwJk150RnIPq2l7AYZtHyGSIsvX5vbhlwO9sr/wB5wfT+SRRObeTjw5AWQ63afk/o5UGvBbkJoA6KzOzgkXknTapciuE82DDRtphCgDTSJnNTzFMMoz0KiDjX6T4pEHF4Rhv9+0SUo6Mz53bWT4oWBEeJR3e2HXarBOi5Ar/SA7rLZ/i3yI6G0u62JGgaCxV0TdGGC2PJSeLngyRvnGsivwD/rnp08veq8nJTFNBtTO6g86C5zT9v2i/6pZrKotQz7+WDGAUcYiD0d+zgZTDyeK9qJB0CqPdN/R2OT6pLO5QfXjb7XyCgtZ3fG+XzOs9dHfDTYQEUJ4W1p3B+psZHSWbJrqfNNyBRZEEKo+DtyJuJyGPW0YAuvISbwNqIGks+OvDYr8O8FVvyu+L9fiWjjZNmRgSTkdC54u29FdqjhJ1rBcVAqvLkpSWRnkgzqXZYTeX6b7ICA0cuJpD7dgX82eonFSaLTO63/MivdxugLn3GSaGZ2iO9UJvpcBrwDMZsWT5JKfwht+vcKbH4+NoGVsQP7K/jWMmHEh75qFo8ys0/mdoYWDPykc5lPBqC9Y3U8RHULX/dn9NqCfP0jFmFvu8OhsTKxNnWFpBrRCewB/Guzb/Aj3muh/8MoUZcPy544IPWHl6tRaeYItx/9mIzjw/i+hWafw3b2q8i/6Cg62kbtc5ihATiPsw5DUv989C4kwN/hH/lF3ShGaXDN8WuF2w8sQOQA/Ne97+lqPUlfITUbEAOlqY00xl0srzSpCRVdFk9GA0Mv7h6TStjSAlQSWAaxdDhp+6iVRW5/42Ootka960XZcWdCQl2V55zfi3VskNJ1n7bhz1ZekQ1hRfBytq1oR0j7sNJtAlQgUIKX8LcWJmXf1hUJl9h8HYVtnpkhousGozgeTMRKOv3k4FhY8icrQowU6fd13PX04wOcAwdKIk6EgSRmW2KdmPL8YE/Ku1+n7hWyJblwIxyDnBviUBtPe/cLihJDPpYV/B54zFGSrbl7mt1bem30tLmaB9ipDWwVrPGvuOU8sxD/o7W4+uGny3b9JgK9vGp0IJXtiT2B1cyPPuxHRB64H3IcNfQIyIb6SyP/b+NQ3fmcD+FEbJC+2PU81G4Yj5luf3M/zbfI/yW954b1m/g7ar/RQNiTcZz6Mv0Ywu6XBngnSMNrejhFGMwHZXbgYAAzhSXxVkuZtjsDa8FrJ2C74WAV3z+sErjJ8lnoc+45YibuvLE09LuaSRu1mnyAWEkT+sr7Uc7Fi8mS0DIAnjr7ZKTsQV2woT28q/nJsqu1JbZGow5AVRlvrHr6J8HTpT1e9ro7/HrYqLuznJRp/KilW8KKXMviU9Ku+0bisNBQ/MX/yGmi+cdsoElAldgdQ3WPu/jVqZ6xsVArIHd1E2A8y4us/5PuJ4+YoEB9zbBYbTTr1viBk0PnmjzcHfyYGo+dkniIkglwNm/wQJqwtXzX9kScEd0VvsEzZKNjIDF4S8VS/sQCa1cpvgtcH5TGKnD4WwVR0fjy2qleBqUICiibdda7nHNSlNue1oWC80oWNLuHaE+DuFJzqV3W8E4qRuvFqqpydLjk9osPiLFzPLqSqnvuurhtSJZk8uMYzd02GvSwJ8B/UmuS3ngpQpgOluFZRXWyXVAdDWu9sEHve1CmOpEHbYT+LLyOzCvjCM2IKzK/m33mlaavToC4v0PjrbkhMzoT84cWWJ4AcjP3H9AUYSh0G5SVn8CSBW1ybhwLAFAiZH0QbU3b66WWUM6BuZRmkoNdWTxS5vAe0FujcKgQmR6mtqPsDnuhBBW+mc8sibzuAGP/gG5lazUoS+wSvvXkUeEh9v93iLhztXkK8err8daehyH65Xn2DPMKfME7xW17PqjvsYNRe679rfvXi9Giak7D2wkjupSCbzL77UlemcLjPSU+aijkneBAzkEuOkL4bxitva5QAdqbWU+oMKAAAAC/yAAAAA=", N1 = { greet: !1, card: !1, pick: !1, me: !1, chip: !1, reply: !1, typing: !0, agent: !1, queue: !1, att: 0, link: !1 }, S1 = { greet: !0, card: !0, pick: !0, me: !0, chip: !0, reply: !0, typing: !1, agent: !0, queue: !0, att: 3, link: !0 }, To = { wide: { x: 500, y: 430 }, compact: { x: 300, y: 410 } };
async function A1(o) {
  await o.wait(700), o.mark("greet"), await o.set({ greet: !0 }), await o.wait(800), o.mark("card"), await o.set({ card: !0 }), await o.wait(1100), o.mark("tap"), await o.click("trx"), o.put({ pick: !0 }), await o.wait(350), await o.set({ me: !0 }), await o.wait(650), o.mark("intent"), await o.set({ chip: !0 }), await o.wait(700), await o.set({ reply: !0 }), await o.wait(1e3), o.mark("reply"), await o.set({ typing: !1 }), await o.wait(900), o.mark("handoff"), await o.set({ queue: !0 }), await o.wait(700), await o.stagger([1, 2, 3], (c) => o.put({ att: c }), 110), await o.wait(800), o.mark("join"), await o.set({ agent: !0 }), await o.wait(900), await o.set({ link: !0 }), await o.wait(2600), o.mark("exit"), await o.set({ link: !1 }), await o.move(o.layout === "wide" ? To.wide : To.compact), await o.wait(300), await o.stagger(["agent", "queue", "reply", "chip", "me", "card", "greet"], (c) => o.put({ [c]: !1 }), 55), await o.wait(700), await o.snap({ att: 0, typing: !0, pick: !1 }), await o.wait(100);
}
const C1 = [
  { id: "info", label: "Informasi seputar LinkAja", src: x1 },
  { id: "trx", label: "Keluhan mengenai transaksi", src: w1 },
  { id: "non", label: "Keluhan mengenai non-transaksi", src: k1 },
  { id: "req", label: "Permintaan", src: j1 }
];
function E1() {
  return /* @__PURE__ */ l.jsx(
    Fl,
    {
      width: 598,
      height: 470,
      compact: { below: 560, width: 358, height: 450 },
      initial: N1,
      poster: S1,
      script: A1,
      cursor: { at: To, style: "touch" },
      play: "loop",
      theme: "dark",
      className: "lr",
      children: (o, c, u) => {
        const y = u === "wide", v = y ? c("agent") : null, w = y ? c("case") : null;
        return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsxs(Hl, { width: y ? 340 : 326, frame: "android", status: !1, wallpaper: "#f3f4fa", className: "lr-phone", children: [
            /* @__PURE__ */ l.jsxs(B0, { className: "lr-thread", children: [
              /* @__PURE__ */ l.jsx(W0, { children: "Obrolan dimulai at 20:49" }),
              /* @__PURE__ */ l.jsx(Pt, { open: o.greet, reveal: "drop", from: "below", children: /* @__PURE__ */ l.jsx("div", { className: "lr-gap", children: /* @__PURE__ */ l.jsxs(zr, { from: "them", tail: !1, children: [
                "Hai ",
                /* @__PURE__ */ l.jsx("b", { children: "DENNY RYANTO" }),
                ", mohon maaf atas kendala yang kamu alami, berikut adalah beberapa informasi kendala yang bisa kamu pilih."
              ] }) }) }),
              /* @__PURE__ */ l.jsx(Pt, { open: o.card, reveal: "drop", from: "below", children: /* @__PURE__ */ l.jsx("div", { className: "lr-gap", children: /* @__PURE__ */ l.jsx("div", { className: "lr-menu", children: C1.map((S) => /* @__PURE__ */ l.jsxs("div", { className: "lr-opt", "data-picked": S.id === "trx" && o.pick || void 0, "data-target": S.id === "trx" ? "trx" : void 0, "data-cursor": S.id === "trx" ? "pointer" : void 0, children: [
                /* @__PURE__ */ l.jsx("img", { src: S.src, alt: "" }),
                /* @__PURE__ */ l.jsx("span", { children: S.label }),
                /* @__PURE__ */ l.jsx(Qo, { size: 18, strokeWidth: 2.4 })
              ] }, S.id)) }) }) }),
              /* @__PURE__ */ l.jsx(Pt, { open: o.me, reveal: "drop", from: "below", children: /* @__PURE__ */ l.jsx("div", { className: "lr-gap", children: /* @__PURE__ */ l.jsx(zr, { from: "me", tail: !0, children: "Keluhan mengenai transaksi" }) }) }),
              /* @__PURE__ */ l.jsx(Pt, { open: o.chip, reveal: "drop", from: "below", children: /* @__PURE__ */ l.jsx("div", { className: "lr-intent lr-gap", children: "Intent · Keluhan transaksi" }) }),
              /* @__PURE__ */ l.jsx(Pt, { open: o.reply, reveal: "drop", from: "below", children: /* @__PURE__ */ l.jsx("div", { className: "lr-gap", children: /* @__PURE__ */ l.jsx(zr, { from: "them", tail: !0, typing: o.typing, children: "Kami teruskan ke tim transaksi." }) }) }),
              /* @__PURE__ */ l.jsx(Pt, { open: o.agent, reveal: "drop", from: "below", children: /* @__PURE__ */ l.jsxs("div", { className: "lr-agent lr-gap", children: [
                /* @__PURE__ */ l.jsx(Rr, { name: "Rina", size: 26 }),
                /* @__PURE__ */ l.jsx("span", { "data-target": "agent", children: "Rina, agen transaksi, bergabung" })
              ] }) })
            ] }),
            /* @__PURE__ */ l.jsx("div", { className: "lr-compose", children: /* @__PURE__ */ l.jsx("span", { className: "lr-field", children: "Silakan klik menu yang tersedia" }) })
          ] }),
          y && /* @__PURE__ */ l.jsxs("div", { className: "lr-queue", children: [
            /* @__PURE__ */ l.jsx("div", { className: "lr-queue__head", children: "Agent queue" }),
            /* @__PURE__ */ l.jsx(zo, { lead: /* @__PURE__ */ l.jsx(Rr, { plain: !0, size: 28 }), title: /* @__PURE__ */ l.jsx(js, { w: 92, h: 8 }), subtitle: /* @__PURE__ */ l.jsx(js, { w: 64, h: 6, tone: 2 }), pad: 0 }),
            /* @__PURE__ */ l.jsx(zo, { lead: /* @__PURE__ */ l.jsx(Rr, { plain: !0, size: 28 }), title: /* @__PURE__ */ l.jsx(js, { w: 78, h: 8 }), subtitle: /* @__PURE__ */ l.jsx(js, { w: 52, h: 6, tone: 2 }), pad: 0 }),
            /* @__PURE__ */ l.jsx(Pt, { open: o.queue, reveal: "drop", children: /* @__PURE__ */ l.jsxs("div", { className: "lr-case", "data-target": "case", children: [
              /* @__PURE__ */ l.jsx(zo, { lead: /* @__PURE__ */ l.jsx(Rr, { name: "Rina", size: 28 }), title: "Transaction case", subtitle: "Handled by Rina", pad: 0 }),
              /* @__PURE__ */ l.jsx("div", { className: "lr-att", children: ["Chat history", "Transactions", "Account status"].map((S, E) => /* @__PURE__ */ l.jsxs("div", { className: "lr-att__row", "data-on": o.att > E || void 0, children: [
                /* @__PURE__ */ l.jsx(Ql, { on: o.att > E, size: 14 }),
                S
              ] }, S)) })
            ] }) })
          ] }),
          y && v && w && /* @__PURE__ */ l.jsx(Gt, { from: { x: v.x + v.width, y: v.y + v.height / 2 }, to: { x: w.x, y: w.y + 22 }, route: "curve", show: o.link })
        ] });
      }
    }
  );
}
const P1 = { step: 0, cover: !1, focus: !1, n: 0, warn: !1, rails: !1, cta: !1, sec: 17112, found: !1, total: 0 }, R1 = { step: 2, cover: !0, focus: !0, n: 9, warn: !0, rails: !0, cta: !0, sec: 17108, found: !0, total: 7905e5 }, Do = { wide: { x: 620, y: 650 }, compact: { x: 200, y: 690 } }, L1 = "750000000", z1 = [
  ["Pick a product", "A tap on the 12-month product of BPR Artha Sejahtera opens the amount screen."],
  ["Enter the amount", "It is checked as it is typed: over Rp500 jt raises a warning."],
  ["One rail recommended", "RTGS fits Rp750 jt and the other three drop out. Nothing is locked while it waits for the funds."],
  ["Deposit active", "The funds are detected on their own and the deposit starts."]
], M1 = (o) => o.found || o.cover ? 3 : o.step === 2 ? 2 : o.step === 1 ? 1 : 0, Oc = (o) => o.replace(/\B(?=(\d{3})+(?!\d))/g, "."), T1 = (o) => String(o).padStart(2, "0");
async function D1(o) {
  await o.wait(600), o.mark("pick"), await o.click("card"), o.put({ step: 1 }), await o.wait(700), o.mark("amount"), await o.click("field"), o.put({ focus: !0 }), await o.wait(150);
  for (let c = 1; c <= 9; c++)
    o.put({ n: c }), await o.wait(60);
  await o.wait(150), o.mark("check"), o.put({ warn: !0 }), await o.wait(350), o.put({ rails: !0 }), await o.wait(450), o.put({ cta: !0 }), await o.wait(700), o.mark("next"), await o.click("cta"), o.put({ step: 2 }), await o.wait(1e3), o.put((c) => ({ sec: c.sec - 1 })), await o.wait(1e3), o.put((c) => ({ sec: c.sec - 1 })), await o.wait(400), o.mark("found"), o.put({ found: !0 }), await o.wait(650), o.mark("success"), o.put({ cover: !0 }), await o.wait(700), o.put({ total: 7905e5 }), await o.wait(2100), o.mark("back"), await o.click("back"), await o.snap({ step: 0, focus: !1, n: 0, warn: !1, rails: !1, cta: !1, sec: 17112, found: !1 }), await o.wait(120), o.put({ cover: !1 }), await o.wait(550), await o.snap({ total: 0 }), await o.move(o.layout === "wide" ? Do.wide : Do.compact), await o.wait(150);
}
function Ol({ time: o }) {
  return /* @__PURE__ */ l.jsxs("div", { className: "kd-sb", children: [
    /* @__PURE__ */ l.jsx("span", { children: o }),
    /* @__PURE__ */ l.jsxs("span", { className: "kd-sb__g", children: [
      /* @__PURE__ */ l.jsx(h1, { size: 16, strokeWidth: 2.2 }),
      /* @__PURE__ */ l.jsx(a1, { size: 16, strokeWidth: 2.2 }),
      /* @__PURE__ */ l.jsx(q0, { size: 19, strokeWidth: 2 })
    ] })
  ] });
}
function Ic({ title: o, step: c }) {
  return /* @__PURE__ */ l.jsxs("div", { className: "kd-nav", children: [
    /* @__PURE__ */ l.jsx(Jc, { size: 24, strokeWidth: 2.2 }),
    /* @__PURE__ */ l.jsx("span", { className: "kd-nav__t", children: o }),
    /* @__PURE__ */ l.jsx("span", { className: "kd-nav__s", children: c })
  ] });
}
function Bc({ on: o }) {
  return /* @__PURE__ */ l.jsx("div", { className: "kd-prog", children: [0, 1, 2].map((c) => /* @__PURE__ */ l.jsx("i", { "data-on": c < o || void 0 }, c)) });
}
function Mo({ name: o, sub: c, aside: u, size: y = "m" }) {
  return /* @__PURE__ */ l.jsxs("div", { className: "kd-bank", "data-size": y, children: [
    /* @__PURE__ */ l.jsx("span", { className: "kd-bank__ic", children: /* @__PURE__ */ l.jsx(t1, { size: y === "l" ? 28 : 22, strokeWidth: 1.8 }) }),
    /* @__PURE__ */ l.jsxs("span", { className: "kd-bank__t", children: [
      /* @__PURE__ */ l.jsx("b", { children: o }),
      c && /* @__PURE__ */ l.jsx("small", { children: c })
    ] }),
    u
  ] });
}
function Wc({ icon: o, children: c }) {
  return /* @__PURE__ */ l.jsxs("span", { className: "kd-tag", children: [
    /* @__PURE__ */ l.jsx("i", { children: o }),
    c
  ] });
}
function Il({ min: o, term: c, rate: u, target: y }) {
  return /* @__PURE__ */ l.jsxs("div", { className: "kd-prod", "data-target": y, "data-cursor": y ? "pointer" : void 0, children: [
    /* @__PURE__ */ l.jsxs("div", { className: "kd-prod__band", children: [
      /* @__PURE__ */ l.jsxs("div", { children: [
        /* @__PURE__ */ l.jsx("span", { className: "kd-prod__amt", children: o }),
        /* @__PURE__ */ l.jsx("span", { className: "kd-prod__min", children: "minimum penempatan" })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "kd-prod__kv", children: [
        /* @__PURE__ */ l.jsxs("span", { children: [
          /* @__PURE__ */ l.jsx("small", { children: "Bunga" }),
          /* @__PURE__ */ l.jsx("b", { className: "kd-rate", children: u })
        ] }),
        /* @__PURE__ */ l.jsxs("span", { children: [
          /* @__PURE__ */ l.jsx("small", { children: "Tenor" }),
          /* @__PURE__ */ l.jsx("b", { children: c })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "kd-prod__tags", children: [
      /* @__PURE__ */ l.jsx(Wc, { icon: /* @__PURE__ */ l.jsx(V0, { size: 15, strokeWidth: 2 }), children: "E-Deposito" }),
      /* @__PURE__ */ l.jsx(Wc, { icon: /* @__PURE__ */ l.jsx(l1, { size: 14, strokeWidth: 2.4 }), children: "ARO" })
    ] })
  ] });
}
function O1() {
  return /* @__PURE__ */ l.jsx(
    Fl,
    {
      width: 820,
      height: 750,
      compact: { below: 620, width: 358, height: 736 },
      initial: P1,
      poster: R1,
      script: D1,
      cursor: { at: Do, style: "touch" },
      play: "loop",
      theme: "dark",
      className: "kd",
      children: (o, c, u) => {
        const y = Oc(L1.slice(0, o.n)), v = Math.floor(o.sec / 3600), w = Math.floor(o.sec % 3600 / 60), S = o.sec % 60, E = u !== "compact", A = M1(o);
        return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          E && /* @__PURE__ */ l.jsx("ol", { className: "kd-rail", children: z1.map(([z, P], W) => /* @__PURE__ */ l.jsxs("li", { className: "kd-beat", "data-state": W < A ? "done" : W === A ? "on" : "next", "data-last": W === 3 || void 0, children: [
            /* @__PURE__ */ l.jsx("span", { className: "kd-beat__n", children: W < A || W === 3 && A === 3 ? /* @__PURE__ */ l.jsx(Ss, { size: 18, strokeWidth: 2.8 }) : W + 1 }),
            /* @__PURE__ */ l.jsx("b", { children: z }),
            /* @__PURE__ */ l.jsx("p", { children: P })
          ] }, z)) }),
          /* @__PURE__ */ l.jsx(Hl, { width: u === "compact" ? 326 : 340, frame: "android", status: !1, className: "kd-phone", children: /* @__PURE__ */ l.jsxs("div", { className: "kd-app", children: [
            /* @__PURE__ */ l.jsxs("section", { className: "kd-screen kd-list", "data-back": o.step > 0 || void 0, children: [
              /* @__PURE__ */ l.jsx(Ol, { time: "10:41" }),
              /* @__PURE__ */ l.jsxs("div", { className: "kd-top", children: [
                /* @__PURE__ */ l.jsxs("div", { className: "kd-nav kd-nav--d", children: [
                  /* @__PURE__ */ l.jsx(Jc, { size: 24, strokeWidth: 2.2 }),
                  /* @__PURE__ */ l.jsx("span", { className: "kd-nav__t", children: "Detail BPR" }),
                  /* @__PURE__ */ l.jsxs("span", { className: "kd-nav__ic", children: [
                    /* @__PURE__ */ l.jsx(e1, { size: 24, strokeWidth: 2.2 }),
                    /* @__PURE__ */ l.jsx(o1, { size: 22, strokeWidth: 2.2 })
                  ] })
                ] }),
                /* @__PURE__ */ l.jsx(
                  Mo,
                  {
                    size: "l",
                    name: "BPR Artha Sejahtera",
                    sub: "Semarang",
                    aside: /* @__PURE__ */ l.jsx("span", { className: "kd-chev", children: /* @__PURE__ */ l.jsx(Qo, { size: 22, strokeWidth: 2.4 }) })
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "kd-hours", children: [
                /* @__PURE__ */ l.jsx("span", { className: "kd-lb", children: "Jam Operasional" }),
                /* @__PURE__ */ l.jsxs("div", { className: "kd-hours__r", children: [
                  /* @__PURE__ */ l.jsx("span", { className: "kd-hours__ic", children: /* @__PURE__ */ l.jsx(b0, { size: 22, strokeWidth: 2 }) }),
                  /* @__PURE__ */ l.jsxs("span", { className: "kd-hours__t", children: [
                    /* @__PURE__ */ l.jsx("b", { children: "Senin - Jumat" }),
                    /* @__PURE__ */ l.jsx("b", { className: "kd-hours__h", children: "07:00 - 15:00" })
                  ] }),
                  /* @__PURE__ */ l.jsx("span", { className: "kd-open", children: "Buka" })
                ] })
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "kd-sheet", children: [
                /* @__PURE__ */ l.jsx("h3", { className: "kd-h", children: "Produk BPR ini" }),
                /* @__PURE__ */ l.jsxs("div", { className: "kd-cards", children: [
                  /* @__PURE__ */ l.jsx(Il, { min: "Rp5.000.000", term: "3 Bulan", rate: "6,25%" }),
                  /* @__PURE__ */ l.jsx(Il, { min: "Rp10.000.000", term: "12 Bulan", rate: "6,75%", target: "card" }),
                  /* @__PURE__ */ l.jsx(Il, { min: "Rp25.000.000", term: "24 Bulan", rate: "7,00%" }),
                  /* @__PURE__ */ l.jsx(Il, { min: "Rp50.000.000", term: "36 Bulan", rate: "7,25%" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ l.jsxs("section", { className: "kd-screen kd-push", "data-at": o.step === 0 ? "right" : o.step === 1 ? "in" : "left", children: [
              /* @__PURE__ */ l.jsx(Ol, { time: "10:41" }),
              /* @__PURE__ */ l.jsx(Ic, { title: "Penempatan", step: "Langkah 2 dari 3" }),
              /* @__PURE__ */ l.jsx(Bc, { on: 2 }),
              /* @__PURE__ */ l.jsxs("div", { className: "kd-body", children: [
                /* @__PURE__ */ l.jsx("div", { className: "kd-card kd-pr", children: /* @__PURE__ */ l.jsx(Mo, { name: "BPR Artha Sejahtera", sub: "Deposito 12 bulan · 6,75% p.a." }) }),
                /* @__PURE__ */ l.jsxs("div", { className: "kd-card kd-amt", children: [
                  /* @__PURE__ */ l.jsx("span", { className: "kd-lb", children: "Nominal penempatan" }),
                  /* @__PURE__ */ l.jsxs("div", { className: "kd-amt__v", "data-focus": o.focus || void 0, "data-target": "field", "data-cursor": "ibeam", children: [
                    o.n === 0 ? /* @__PURE__ */ l.jsx("span", { className: "kd-amt__ph", children: "Rp" }) : /* @__PURE__ */ l.jsxs("span", { children: [
                      "Rp ",
                      y
                    ] }),
                    /* @__PURE__ */ l.jsx("i", { className: "kd-caret", "data-on": o.focus && o.n < 9 || void 0 })
                  ] }),
                  /* @__PURE__ */ l.jsxs("div", { className: "kd-src", children: [
                    "Dari ",
                    /* @__PURE__ */ l.jsx("b", { children: "Mandiri ···· 4821" }),
                    /* @__PURE__ */ l.jsx("span", { className: "kd-chg", children: "Ubah" })
                  ] }),
                  /* @__PURE__ */ l.jsx(Pt, { open: o.warn, children: /* @__PURE__ */ l.jsxs("div", { className: "kd-warn", children: [
                    /* @__PURE__ */ l.jsx(Dc, { size: 18, strokeWidth: 2.2 }),
                    /* @__PURE__ */ l.jsx("span", { children: "Nominal di atas Rp500 jt. Pastikan limit transfer Anda mencukupi." })
                  ] }) })
                ] }),
                /* @__PURE__ */ l.jsx("div", { className: "kd-lb kd-lb--out", children: "Cara transfer" }),
                /* @__PURE__ */ l.jsxs("div", { className: "kd-opt", "data-on": o.rails || void 0, children: [
                  /* @__PURE__ */ l.jsx("span", { className: "kd-rd" }),
                  /* @__PURE__ */ l.jsxs("span", { className: "kd-opt__t", children: [
                    /* @__PURE__ */ l.jsxs("b", { children: [
                      "RTGS",
                      /* @__PURE__ */ l.jsx("em", { "data-on": o.rails || void 0, children: "Direkomendasikan" })
                    ] }),
                    /* @__PURE__ */ l.jsx("small", { children: "Rp100 jt ke atas · masuk hari ini" }),
                    /* @__PURE__ */ l.jsx(Pt, { open: o.rails, children: /* @__PURE__ */ l.jsx("small", { className: "kd-opt__more", children: "Kirim sebelum 15:00 WIB" }) })
                  ] })
                ] }),
                /* @__PURE__ */ l.jsxs("div", { className: "kd-na", "data-dim": o.rails || void 0, children: [
                  /* @__PURE__ */ l.jsx(Pt, { open: o.rails, children: /* @__PURE__ */ l.jsx("div", { className: "kd-nah", children: "Tidak tersedia untuk Rp750 jt" }) }),
                  [
                    ["BI-FAST", "Maks. Rp250 jt / transfer"],
                    ["VA Mandiri", "Maks. Rp30 jt / hari"],
                    ["VA Permata", "Antarbank maks. Rp25 jt"]
                  ].map(([z, P]) => /* @__PURE__ */ l.jsxs("div", { className: "kd-nar", children: [
                    /* @__PURE__ */ l.jsx("b", { children: z }),
                    /* @__PURE__ */ l.jsx("span", { children: P })
                  ] }, z))
                ] })
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "kd-foot", children: [
                /* @__PURE__ */ l.jsxs("div", { className: "kd-free", children: [
                  /* @__PURE__ */ l.jsx(r1, { size: 16, strokeWidth: 2.2 }),
                  "Belum ada dana yang dikunci"
                ] }),
                /* @__PURE__ */ l.jsx("div", { className: "kd-cta", "data-ready": o.cta || void 0, "data-target": "cta", children: "Lanjut ke instruksi" })
              ] })
            ] }),
            /* @__PURE__ */ l.jsxs("section", { className: "kd-screen kd-push", "data-at": o.step < 2 ? "right" : "in", children: [
              /* @__PURE__ */ l.jsx(Ol, { time: "10:41" }),
              /* @__PURE__ */ l.jsx(Ic, { title: "Transfer via RTGS", step: "Langkah 3 dari 3" }),
              /* @__PURE__ */ l.jsx(Bc, { on: 3 }),
              /* @__PURE__ */ l.jsxs("div", { className: "kd-body", children: [
                /* @__PURE__ */ l.jsxs("div", { className: "kd-card kd-cd", children: [
                  /* @__PURE__ */ l.jsxs("div", { className: "kd-cd__row", children: [
                    /* @__PURE__ */ l.jsxs("div", { children: [
                      /* @__PURE__ */ l.jsx("span", { className: "kd-lb", children: "Batas kirim RTGS" }),
                      /* @__PURE__ */ l.jsx("b", { className: "kd-cd__d", children: "Hari ini, 15:00 WIB" })
                    ] }),
                    /* @__PURE__ */ l.jsx("div", { className: "kd-cd__t", children: [
                      [v, "jam"],
                      [w, "menit"],
                      [S, "detik"]
                    ].map(([z, P], W) => /* @__PURE__ */ l.jsxs("span", { className: "kd-cd__u", children: [
                      W > 0 && /* @__PURE__ */ l.jsx("i", { children: ":" }),
                      /* @__PURE__ */ l.jsxs("span", { children: [
                        /* @__PURE__ */ l.jsx("b", { children: /* @__PURE__ */ l.jsx($n, { value: z, format: (H) => T1(Math.round(H)), duration: 450 }) }),
                        /* @__PURE__ */ l.jsx("small", { children: P })
                      ] })
                    ] }, P)) })
                  ] }),
                  /* @__PURE__ */ l.jsx("div", { className: "kd-cd__bar", children: /* @__PURE__ */ l.jsx("i", { style: { width: `${o.sec / 25200 * 100}%` } }) })
                ] }),
                /* @__PURE__ */ l.jsxs("div", { className: "kd-card kd-inst", children: [
                  /* @__PURE__ */ l.jsxs("div", { className: "kd-irow", children: [
                    /* @__PURE__ */ l.jsxs("div", { children: [
                      /* @__PURE__ */ l.jsx("span", { className: "kd-lb", children: "Nominal" }),
                      /* @__PURE__ */ l.jsx("span", { className: "kd-v2", children: "Rp 750.000.000" })
                    ] }),
                    /* @__PURE__ */ l.jsx("span", { className: "kd-copy", children: "Salin" })
                  ] }),
                  /* @__PURE__ */ l.jsxs("div", { className: "kd-irow", children: [
                    /* @__PURE__ */ l.jsxs("div", { children: [
                      /* @__PURE__ */ l.jsx("span", { className: "kd-lb", children: "Rekening tujuan" }),
                      /* @__PURE__ */ l.jsx("b", { children: "PT BPR Artha Sejahtera" }),
                      /* @__PURE__ */ l.jsx("small", { children: "0123 4567 890" })
                    ] }),
                    /* @__PURE__ */ l.jsx("span", { className: "kd-copy", children: "Salin" })
                  ] }),
                  /* @__PURE__ */ l.jsxs("div", { className: "kd-irow", children: [
                    /* @__PURE__ */ l.jsxs("div", { children: [
                      /* @__PURE__ */ l.jsx("span", { className: "kd-lb", children: "Berita transfer" }),
                      /* @__PURE__ */ l.jsx("b", { className: "kd-code", children: "DEP-7F3K" }),
                      /* @__PURE__ */ l.jsx("small", { children: "Wajib, agar dana langsung tercocokkan" })
                    ] }),
                    /* @__PURE__ */ l.jsx("span", { className: "kd-copy", children: "Salin" })
                  ] })
                ] }),
                /* @__PURE__ */ l.jsxs("div", { className: "kd-card kd-steps", children: [
                  /* @__PURE__ */ l.jsx("b", { children: "Cara transfer" }),
                  ["Di aplikasi Mandiri, pilih Transfer › RTGS", "Isi nominal dan rekening tujuan persis", "Tulis kode DEP-7F3K di berita transfer"].map((z, P) => /* @__PURE__ */ l.jsxs("div", { className: "kd-st", children: [
                    /* @__PURE__ */ l.jsx("i", { children: P + 1 }),
                    z
                  ] }, z))
                ] }),
                /* @__PURE__ */ l.jsxs("div", { className: "kd-warn kd-warn--static", children: [
                  /* @__PURE__ */ l.jsx(Dc, { size: 18, strokeWidth: 2.2 }),
                  /* @__PURE__ */ l.jsx("span", { children: "Pastikan limit transfer harian Anda minimal Rp750 jt." })
                ] })
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "kd-foot", children: [
                /* @__PURE__ */ l.jsxs("div", { className: "kd-auto", children: [
                  /* @__PURE__ */ l.jsx("span", { className: "kd-auto__mark", children: /* @__PURE__ */ l.jsx(Ql, { on: o.found, pending: !o.found, size: 26 }) }),
                  /* @__PURE__ */ l.jsxs("span", { children: [
                    /* @__PURE__ */ l.jsx("b", { children: "Menunggu dana masuk" }),
                    /* @__PURE__ */ l.jsx("small", { children: "Terdeteksi otomatis · tidak ada yang dikunci" })
                  ] })
                ] }),
                /* @__PURE__ */ l.jsx("div", { className: "kd-ghost", children: "Ganti cara transfer" })
              ] })
            ] }),
            /* @__PURE__ */ l.jsxs("section", { className: "kd-screen kd-cover", "data-up": o.cover || void 0, children: [
              /* @__PURE__ */ l.jsx(Ol, { time: "10:42" }),
              /* @__PURE__ */ l.jsxs("div", { className: "kd-ok", children: [
                /* @__PURE__ */ l.jsx("span", { className: "kd-ok__disc", children: /* @__PURE__ */ l.jsx(Ss, { size: 34, strokeWidth: 3 }) }),
                /* @__PURE__ */ l.jsx("b", { children: "Penempatan Berhasil" }),
                /* @__PURE__ */ l.jsx("small", { children: "Dana diterima via RTGS · 10:42 WIB" })
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "kd-body kd-body--ok", children: [
                /* @__PURE__ */ l.jsxs("div", { className: "kd-card kd-sum", children: [
                  /* @__PURE__ */ l.jsx(Mo, { name: "BPR Artha Sejahtera", sub: "Deposito 12 bulan", aside: /* @__PURE__ */ l.jsx("span", { className: "kd-active", children: "Aktif" }) }),
                  /* @__PURE__ */ l.jsx("div", { className: "kd-sum__row", children: /* @__PURE__ */ l.jsxs("div", { children: [
                    /* @__PURE__ */ l.jsx("span", { className: "kd-lb", children: "Pokok Deposito" }),
                    /* @__PURE__ */ l.jsx("span", { className: "kd-v2", children: "Rp 750.000.000" })
                  ] }) }),
                  /* @__PURE__ */ l.jsxs("div", { className: "kd-sum__due", children: [
                    /* @__PURE__ */ l.jsx("span", { children: "Jatuh tempo" }),
                    /* @__PURE__ */ l.jsx("b", { children: "14 Jul 2026" })
                  ] })
                ] }),
                /* @__PURE__ */ l.jsxs("div", { className: "kd-mat", children: [
                  /* @__PURE__ */ l.jsx("div", { className: "kd-mh", children: "Estimasi saat jatuh tempo" }),
                  /* @__PURE__ */ l.jsxs("div", { className: "kd-mr", children: [
                    /* @__PURE__ */ l.jsx("span", { children: "Pokok deposito" }),
                    /* @__PURE__ */ l.jsx("b", { children: "Rp 750.000.000" })
                  ] }),
                  /* @__PURE__ */ l.jsxs("div", { className: "kd-mr", children: [
                    /* @__PURE__ */ l.jsx("span", { children: "Bunga 6,75% · 12 bulan" }),
                    /* @__PURE__ */ l.jsx("b", { children: "+ Rp 50.625.000" })
                  ] }),
                  /* @__PURE__ */ l.jsxs("div", { className: "kd-mr", children: [
                    /* @__PURE__ */ l.jsx("span", { children: "Pajak bunga 20%" }),
                    /* @__PURE__ */ l.jsx("b", { className: "kd-neg", children: "− Rp 10.125.000" })
                  ] }),
                  /* @__PURE__ */ l.jsxs("div", { className: "kd-mt", children: [
                    /* @__PURE__ */ l.jsx("span", { children: "Total diterima" }),
                    /* @__PURE__ */ l.jsxs("b", { children: [
                      /* @__PURE__ */ l.jsx("span", { className: "kd-rp2", children: "Rp" }),
                      /* @__PURE__ */ l.jsx($n, { value: o.total, format: (z) => Oc(String(Math.round(z))), duration: 900, stagger: 40 })
                    ] })
                  ] }),
                  /* @__PURE__ */ l.jsx("div", { className: "kd-mn", children: "Bunga bersih Rp 40.500.000 setelah pajak" })
                ] }),
                /* @__PURE__ */ l.jsxs("div", { className: "kd-card kd-next", children: [
                  /* @__PURE__ */ l.jsx("b", { children: "Langkah selanjutnya" }),
                  /* @__PURE__ */ l.jsxs("div", { className: "kd-next__r", children: [
                    /* @__PURE__ */ l.jsx("span", { className: "kd-next__ic", children: /* @__PURE__ */ l.jsx(s1, { size: 20, strokeWidth: 1.8 }) }),
                    "Sertifikat dikirim ke email Anda"
                  ] }),
                  /* @__PURE__ */ l.jsxs("div", { className: "kd-next__r", children: [
                    /* @__PURE__ */ l.jsx("span", { className: "kd-next__ic", children: /* @__PURE__ */ l.jsx(p1, { size: 20, strokeWidth: 1.8 }) }),
                    "Kelola aktif di menu Depositoku"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "kd-foot", children: [
                /* @__PURE__ */ l.jsx("div", { className: "kd-cta", children: "Lihat Portofolio" }),
                /* @__PURE__ */ l.jsx("div", { className: "kd-alt", "data-target": "back", children: "Kembali ke Beranda" })
              ] })
            ] })
          ] }) })
        ] });
      }
    }
  );
}
const Zc = {
  src: "idle",
  clean: "idle",
  llm: "idle",
  gate: "idle",
  dec: "idle",
  rev: "idle",
  tags: 0,
  dupesOk: !1,
  n1: 0,
  n2: 0,
  n3: 47,
  words: 0,
  conf: 0,
  chosen: !1,
  e1: !1,
  e2: !1,
  e3: !1,
  e4: !1,
  card: !1,
  cv: 0,
  label: "Ready",
  hid: 0
}, I1 = {
  src: "done",
  clean: "done",
  llm: "done",
  gate: "done",
  dec: "done",
  rev: "skip",
  tags: 4,
  dupesOk: !0,
  n1: 312,
  n2: 1840,
  n3: 0,
  words: 99,
  conf: 0.86,
  chosen: !0,
  e1: !0,
  e2: !0,
  e3: !0,
  e4: !0,
  card: !0,
  cv: 0.86,
  label: "Ran in 2.4s",
  hid: 0
}, bc = "Compares cover against lead time and the sales trend for each SKU.", B1 = bc.split(" ").length;
async function W1(o) {
  await o.wait(900), o.mark("sources"), o.put({ src: "run", label: "Running…" });
  for (let c = 1; c <= 4; c++)
    await o.wait(190), o.put({ tags: c });
  await o.wait(260), o.put({ src: "done", e1: !0 }), await o.wait(620), o.mark("clean"), o.put({ clean: "run", n1: 312, n2: 1840, n3: 0 }), await o.wait(620), o.put({ dupesOk: !0 }), await o.wait(560), o.put({ clean: "done", e2: !0 }), await o.wait(640), o.mark("signals"), o.put({ llm: "run", conf: 0.86 });
  for (let c = 1; c <= B1; c++)
    await o.wait(88), o.put({ words: c });
  await o.wait(240), o.put({ llm: "done", e3: !0 }), await o.wait(640), o.mark("gate"), o.put({ gate: "run" }), await o.wait(450), o.put({ chosen: !0 }), await o.wait(300), o.put({ gate: "done", rev: "skip", e4: !0 }), await o.wait(750), o.mark("decision"), o.put({ dec: "run" }), await o.wait(380), o.put({ dec: "done", card: !0, cv: 0.86, label: "Ran in 2.4s" }), await o.wait(3e3), o.mark("exit"), o.put({ card: !1, dec: "idle", rev: "idle", chosen: !1, e4: !1, e3: !1, e2: !1, e1: !1, label: "Ready" }), await o.wait(300), await o.stagger([1, 2, 3, 4, 5], (c) => o.put({ hid: c }), 70), await o.wait(550), await o.snap({ ...Zc, hid: 5 }), await o.wait(150), await o.set({ hid: 0 }), await o.wait(500);
}
const F1 = [
  ["Legacy ERP", "orders"],
  ["Sales CRM", "accounts"],
  ["Warehouse sheets", null],
  ["POS exports", "daily"]
];
function H1({ state: o, fix: c }) {
  const u = c ? { wait: "…", ok: "OK", fix: "DUPES" } : { wait: "…", ok: "OK", fix: "OK" };
  return /* @__PURE__ */ l.jsx("span", { className: "dd-tag dd-dyn", "data-tone": o, children: /* @__PURE__ */ l.jsx(Ho, { value: o, states: u, align: "center" }) });
}
function Q1({ st: o, time: c, big: u }) {
  return /* @__PURE__ */ l.jsxs("span", { className: "dd-st dd-dyn", children: [
    /* @__PURE__ */ l.jsx("span", { className: "dd-st__t", "data-on": o === "done" && !!c || void 0, children: c }),
    /* @__PURE__ */ l.jsx(Ql, { on: o === "done", pending: o === "run", size: u ? 18 : 14 })
  ] });
}
function ws({ tile: o, icon: c, title: u, st: y, time: v, big: w }) {
  return /* @__PURE__ */ l.jsxs("div", { className: "dd-nh", children: [
    /* @__PURE__ */ l.jsx("span", { className: "dd-ico", style: { background: o }, children: c }),
    /* @__PURE__ */ l.jsx("span", { className: "dd-nt", children: u }),
    /* @__PURE__ */ l.jsx(Q1, { st: y, time: v, big: w })
  ] });
}
function U1() {
  return /* @__PURE__ */ l.jsx(
    Fl,
    {
      width: 1064,
      height: 520,
      compact: { below: 640, width: 358, height: 560 },
      initial: Zc,
      poster: I1,
      script: W1,
      play: "loop",
      theme: "dark",
      className: "dd",
      children: (o, c, u) => {
        const y = u === "wide", v = { size: y ? 14 : 17, strokeWidth: 2 }, w = (G) => o.hid > 4 - G || void 0, S = /* @__PURE__ */ l.jsx("div", { className: "dd-nb", children: F1.map(([G, B], ke) => {
          const he = ke === 2, pe = ke >= o.tags ? "wait" : he && !o.dupesOk ? "fix" : "ok";
          return /* @__PURE__ */ l.jsxs("div", { className: "dd-row", children: [
            /* @__PURE__ */ l.jsxs("span", { children: [
              /* @__PURE__ */ l.jsx("b", { children: G }),
              B ? ` · ${B}` : ""
            ] }),
            /* @__PURE__ */ l.jsx(H1, { state: pe, fix: he })
          ] }, G);
        }) }), E = /* @__PURE__ */ l.jsxs("div", { className: "dd-nb", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "dd-row", children: [
            /* @__PURE__ */ l.jsx("span", { children: "Duplicates removed" }),
            /* @__PURE__ */ l.jsx("b", { className: "dd-dyn", children: /* @__PURE__ */ l.jsx($n, { value: o.n1, duration: 900 }) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "dd-row", children: [
            /* @__PURE__ */ l.jsx("span", { children: "SKUs reconciled" }),
            /* @__PURE__ */ l.jsx("b", { className: "dd-dyn", children: /* @__PURE__ */ l.jsx($n, { value: o.n2, duration: 900 }) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "dd-row", children: [
            /* @__PURE__ */ l.jsx("span", { children: "Rows failing checks" }),
            /* @__PURE__ */ l.jsx("b", { className: "dd-dyn", children: /* @__PURE__ */ l.jsx($n, { value: o.n3, duration: 900 }) })
          ] })
        ] }), A = /* @__PURE__ */ l.jsxs("div", { className: "dd-nb", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "dd-row", children: [
            /* @__PURE__ */ l.jsx("span", { children: "Step" }),
            /* @__PURE__ */ l.jsx("code", { children: "LLM" })
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "dd-note dd-dyn", children: /* @__PURE__ */ l.jsx(qc, { text: bc, count: o.words }) }),
          /* @__PURE__ */ l.jsxs("div", { className: "dd-row", children: [
            /* @__PURE__ */ l.jsx("span", { children: "Confidence" }),
            /* @__PURE__ */ l.jsx("b", { className: "dd-dyn", children: /* @__PURE__ */ l.jsx($n, { value: o.conf, format: (G) => G.toFixed(2), duration: 1e3 }) })
          ] })
        ] }), z = /* @__PURE__ */ l.jsx("div", { className: "dd-nb", children: /* @__PURE__ */ l.jsxs("div", { className: "dd-ports", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "dd-port", "data-chosen": o.chosen || void 0, "data-target": "port-true", children: [
            /* @__PURE__ */ l.jsx("i", { className: "dd-hl dd-dyn" }),
            /* @__PURE__ */ l.jsx("span", { children: "IF" }),
            /* @__PURE__ */ l.jsx("span", { children: "confidence ≥ 0.80" })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "dd-port", "data-passed": o.chosen || void 0, "data-target": "port-false", children: [
            /* @__PURE__ */ l.jsx("span", { children: "ELSE" }),
            /* @__PURE__ */ l.jsx("span", { children: "to a planner" })
          ] })
        ] }) }), P = /* @__PURE__ */ l.jsx("div", { className: "dd-nb", children: /* @__PURE__ */ l.jsxs("div", { className: "dd-dec", "data-on": o.card || void 0, children: [
          /* @__PURE__ */ l.jsx("small", { children: "INVENTORY · HIGH CONFIDENCE" }),
          /* @__PURE__ */ l.jsx("strong", { children: "Reorder top-selling SKUs, east warehouse" }),
          /* @__PURE__ */ l.jsx("p", { children: "4 days of cover against a 6-day lead time." }),
          /* @__PURE__ */ l.jsxs("div", { className: "dd-conf dd-dyn", children: [
            /* @__PURE__ */ l.jsx("span", { children: "Confidence" }),
            /* @__PURE__ */ l.jsx("b", { children: /* @__PURE__ */ l.jsx($n, { value: o.cv, format: (G) => G.toFixed(2), duration: 900 }) }),
            /* @__PURE__ */ l.jsxs("div", { className: "dd-conf__bar", children: [
              /* @__PURE__ */ l.jsx(g1, { value: o.cv }),
              /* @__PURE__ */ l.jsx("i", { className: "dd-conf__tick" })
            ] })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "dd-btns", children: [
            /* @__PURE__ */ l.jsx("span", { className: "yes", "data-target": "approve", children: "Approve" }),
            /* @__PURE__ */ l.jsx("span", { className: "no", children: "Review" })
          ] })
        ] }) }), W = (G, B, ke, he, pe, fe = "") => /* @__PURE__ */ l.jsxs("div", { className: `dd-node dd-n-${G}${fe}`, "data-st": ke, "data-hid": w(B), "data-target": `n-${G}`, children: [
          he,
          y ? pe : /* @__PURE__ */ l.jsx(Pt, { open: ke === "run" || G === "dec", children: pe })
        ] }, G), H = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          W("src", 0, o.src, /* @__PURE__ */ l.jsx(ws, { tile: "#155eef", icon: /* @__PURE__ */ l.jsx($0, { ...v }), title: "Sources", st: o.src, time: "0.2s", big: !y }), S),
          W("clean", 1, o.clean, /* @__PURE__ */ l.jsx(ws, { tile: "#2e90fa", icon: /* @__PURE__ */ l.jsx(n1, { ...v }), title: "Clean & validate", st: o.clean, time: "0.6s", big: !y }), E),
          W("llm", 2, o.llm, /* @__PURE__ */ l.jsx(ws, { tile: "#6172f3", icon: /* @__PURE__ */ l.jsx(d1, { ...v }), title: "Demand signals", st: o.llm, time: "1.1s", big: !y }), A),
          W("gate", 3, o.gate, /* @__PURE__ */ l.jsx(ws, { tile: "#06aed4", icon: /* @__PURE__ */ l.jsx(c1, { ...v }), title: "IF/ELSE", st: o.gate, time: "0.1s", big: !y }), z),
          W("dec", 4, o.dec, /* @__PURE__ */ l.jsx(ws, { tile: "#f79009", icon: /* @__PURE__ */ l.jsx(Ss, { ...v }), title: "Decision", st: o.dec, time: "0.4s", big: !y }), P, " dd-out")
        ] }), K = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsxs("span", { className: "dd-crumb", children: [
            /* @__PURE__ */ l.jsx(m1, { size: 15, strokeWidth: 2 }),
            /* @__PURE__ */ l.jsx("span", { children: "Ops copilot" }),
            /* @__PURE__ */ l.jsx("small", { children: "/ Weekly replenishment" })
          ] }),
          y && /* @__PURE__ */ l.jsxs("span", { className: "dd-tabs", children: [
            /* @__PURE__ */ l.jsx("span", { "data-on": !0, children: "Orchestrate" }),
            /* @__PURE__ */ l.jsx("span", { children: "Logs" }),
            /* @__PURE__ */ l.jsx("span", { children: "Monitoring" })
          ] })
        ] }), D = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsxs("span", { className: "dd-run", children: [
            /* @__PURE__ */ l.jsx("i", {}),
            /* @__PURE__ */ l.jsx(Ho, { value: o.label, states: { Ready: "Ready", "Running…": "Running…", "Ran in 2.4s": "Ran in 2.4s" }, align: "start" })
          ] }),
          y && /* @__PURE__ */ l.jsx("span", { className: "dd-pub", children: "Publish" })
        ] });
        if (!y)
          return /* @__PURE__ */ l.jsxs(Hl, { width: 326, dark: !0, wallpaper: "#1f2025", className: "dd-phone", children: [
            /* @__PURE__ */ l.jsxs("div", { className: "dd-appbar", children: [
              K,
              D
            ] }),
            /* @__PURE__ */ l.jsx("div", { className: "dd-canvas dd-canvas--c", children: H })
          ] });
        const X = (G) => c(`n-${G}`), q = (G) => ({ x: X(G).x + X(G).width, y: X(G).y + 22 }), I = (G) => ({ x: X(G).x, y: X(G).y + 22 }), re = (G) => ({ x: X(G).x + X(G).width / 2, y: X(G).y + X(G).height }), de = (G) => ({ x: X(G).x + X(G).width / 2, y: X(G).y }), U = (G) => ({ x: X("gate").x + X("gate").width, y: c(G).y + c(G).height / 2 }), _ = { route: "curve", dots: "none", dashed: !0, show: !0, className: "dd-base" }, se = { route: "curve", className: "dd-e" };
        return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsxs(C0, { className: "dd-win", lead: K, toolbar: D, body: { className: "dd-canvas" }, children: [
            H,
            /* @__PURE__ */ l.jsxs("div", { className: "dd-node dd-n-rev", "data-st": o.rev, "data-hid": w(4), "data-target": "n-rev", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "dd-nh", children: [
                /* @__PURE__ */ l.jsx("span", { className: "dd-ico", style: { background: "#667085" }, children: /* @__PURE__ */ l.jsx(f1, { ...v }) }),
                /* @__PURE__ */ l.jsx("span", { className: "dd-nt", children: "Planner review" }),
                /* @__PURE__ */ l.jsxs("span", { className: "dd-st dd-dyn", children: [
                  /* @__PURE__ */ l.jsx("span", { className: "dd-st__t" }),
                  o.rev === "skip" ? /* @__PURE__ */ l.jsx("i", { className: "dd-dash" }) : /* @__PURE__ */ l.jsx(Ql, { on: !1, size: 14 })
                ] })
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "dd-nb", children: /* @__PURE__ */ l.jsxs("div", { className: "dd-note", children: [
                "Low-confidence calls wait here for a person.",
                /* @__PURE__ */ l.jsx("span", { className: "dd-dyn", "data-on": o.rev === "skip" || void 0, children: " Skipped this run." })
              ] }) })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "dd-rail", "aria-hidden": !0, children: [
              /* @__PURE__ */ l.jsx("span", { "data-on": !0, children: "Select" }),
              /* @__PURE__ */ l.jsx("span", { children: "Hand" }),
              /* @__PURE__ */ l.jsx("span", { children: "100%" })
            ] })
          ] }),
          /* @__PURE__ */ l.jsx(Gt, { ..._, from: q("src"), to: I("clean") }),
          /* @__PURE__ */ l.jsx(Gt, { ..._, route: "straight", from: re("clean"), to: de("llm") }),
          /* @__PURE__ */ l.jsx(Gt, { ..._, from: q("llm"), to: I("gate") }),
          /* @__PURE__ */ l.jsx(Gt, { ..._, from: U("port-false"), to: I("rev") }),
          /* @__PURE__ */ l.jsx(Gt, { ...se, from: q("src"), to: I("clean"), show: o.e1 }),
          /* @__PURE__ */ l.jsx(Gt, { ...se, route: "straight", from: re("clean"), to: de("llm"), show: o.e2 }),
          /* @__PURE__ */ l.jsx(Gt, { ...se, from: q("llm"), to: I("gate"), show: o.e3 }),
          /* @__PURE__ */ l.jsx(Gt, { ...se, className: "dd-e dd-e--lime", from: U("port-true"), to: I("dec"), show: o.e4 })
        ] });
      }
    }
  );
}
const X1 = "data:image/webp;base64,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", _1 = "data:image/webp;base64,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", K1 = "data:image/webp;base64,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", G1 = "data:image/webp;base64,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", V1 = { open: !1, words: 0, btn: "plan", sat: !1, link: !1 }, q1 = { open: !0, words: 99, btn: "sent", sat: !0, link: !0 }, $c = "Aulia turns 30 on Saturday. Birthday brunch, 11:00–13:00?", Y1 = $c.split(" ").length;
async function J1(o) {
  await o.wait(1100), o.mark("plan"), await o.click({ at: "btn", x: 0.9, y: 0.5 }), o.put({ open: !0, btn: "send" }), await o.wait(700);
  for (let c = 1; c <= Y1; c++)
    await o.wait(110), o.put({ words: c });
  await o.wait(900), o.mark("send"), await o.click({ at: "btn", x: 0.9, y: 0.5 }), o.put({ btn: "sending" }), await o.wait(900), o.mark("sent"), o.put({ btn: "sent" }), await o.wait(300), o.put({ sat: !0 }), await o.wait(900), o.put({ link: !0 }), await o.wait(2800), o.mark("exit"), o.put({ link: !1 }), await o.wait(250), o.put({ sat: !1 }), await o.wait(350), o.put({ open: !1, btn: "plan" }), await o.wait(900), await o.snap({ words: 0 }), await o.move(o.layout === "wide" ? Oo.wide : Oo.compact), await o.wait(300);
}
const Z1 = [
  { name: "Aulia", line: "turns 30", src: X1 },
  { name: "Laurens", line: "free 11:00–13:00", src: _1 },
  { name: "Putri", line: "free all day", src: K1 }
], ks = { strokeWidth: 2 }, Oo = { wide: { x: 500, y: 560 }, compact: { x: 342, y: 330 } };
function b1() {
  return /* @__PURE__ */ l.jsx(
    Fl,
    {
      width: 560,
      height: 790,
      compact: { below: 540, width: 358, height: 570 },
      initial: V1,
      poster: q1,
      script: J1,
      play: "loop",
      cursor: { style: "touch", at: Oo },
      theme: "dark",
      className: "cr",
      children: (o, c, u) => {
        const y = u === "wide", v = c("btn"), w = c("sat");
        return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsxs(Hl, { width: y ? 360 : 326, className: "cr-phone", children: [
            /* @__PURE__ */ l.jsxs("div", { className: "cr-app", children: [
              /* @__PURE__ */ l.jsxs("header", { className: "cr-head", children: [
                /* @__PURE__ */ l.jsxs("span", { className: "cr-bell", children: [
                  /* @__PURE__ */ l.jsx(Y0, { size: 21, ...ks }),
                  /* @__PURE__ */ l.jsx("i", {})
                ] }),
                /* @__PURE__ */ l.jsx("span", { className: "cr-month", children: "October 2026" }),
                /* @__PURE__ */ l.jsx(Rr, { size: 34, src: G1, name: "Denny" })
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "cr-seg", children: [
                /* @__PURE__ */ l.jsx("span", { "data-on": !0, children: "Day" }),
                /* @__PURE__ */ l.jsx("span", { children: "Week" }),
                /* @__PURE__ */ l.jsx("span", { children: "Month" })
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "cr-date", children: [
                /* @__PURE__ */ l.jsx(Z0, { size: 20, strokeWidth: 2, className: "cr-chev" }),
                /* @__PURE__ */ l.jsx("b", { children: "Wed, Oct 7" }),
                /* @__PURE__ */ l.jsx("span", { children: "· 2026" }),
                /* @__PURE__ */ l.jsx(Qo, { size: 20, strokeWidth: 2, className: "cr-chev" }),
                /* @__PURE__ */ l.jsx("i", { children: "TODAY" })
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "cr-aura", "data-aura": o.btn === "sent" ? "rest" : "on", children: [
                /* @__PURE__ */ l.jsx("span", { className: "cr-aura__halo", "aria-hidden": !0, children: /* @__PURE__ */ l.jsx("i", {}) }),
                /* @__PURE__ */ l.jsxs("div", { className: "cr-card", "data-target": "card", "data-open": o.open || void 0, children: [
                  /* @__PURE__ */ l.jsxs("div", { className: "cr-eyebrow", children: [
                    /* @__PURE__ */ l.jsx(u1, { size: 18, ...ks }),
                    /* @__PURE__ */ l.jsx("span", { children: "SATURDAY" }),
                    /* @__PURE__ */ l.jsx("em", { children: /* @__PURE__ */ l.jsx(v1, { size: 16, strokeWidth: 2.2 }) })
                  ] }),
                  /* @__PURE__ */ l.jsx("div", { className: "cr-title", children: "Aulia turns 30 on Saturday, and the crew looks free. Birthday brunch?" }),
                  /* @__PURE__ */ l.jsx("div", { className: "cr-chips", children: Z1.map((S) => /* @__PURE__ */ l.jsxs("span", { className: "cr-chip", children: [
                    /* @__PURE__ */ l.jsx(Rr, { size: 34, src: S.src, name: S.name }),
                    /* @__PURE__ */ l.jsxs("span", { children: [
                      /* @__PURE__ */ l.jsx("b", { children: S.name }),
                      /* @__PURE__ */ l.jsx("small", { children: S.line })
                    ] })
                  ] }, S.name)) }),
                  /* @__PURE__ */ l.jsx(Pt, { open: o.open, children: /* @__PURE__ */ l.jsxs("div", { className: "cr-plan", children: [
                    /* @__PURE__ */ l.jsxs("div", { className: "cr-when", children: [
                      /* @__PURE__ */ l.jsx("small", { children: "When" }),
                      /* @__PURE__ */ l.jsx("b", { children: "Sat 11:00–13:00" })
                    ] }),
                    /* @__PURE__ */ l.jsxs("div", { className: "cr-msg", children: [
                      /* @__PURE__ */ l.jsx("small", { children: "Message" }),
                      /* @__PURE__ */ l.jsx("p", { children: /* @__PURE__ */ l.jsx(qc, { text: $c, count: o.words }) })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ l.jsx("div", { className: "cr-btn", "data-state": o.btn, "data-target": "btn", children: /* @__PURE__ */ l.jsx(
                    Ho,
                    {
                      value: o.btn,
                      states: {
                        plan: /* @__PURE__ */ l.jsxs("span", { className: "cr-btn__l", children: [
                          /* @__PURE__ */ l.jsx(G0, { size: 18, ...ks }),
                          "Plan brunch with Aulia, Laurens and Putri"
                        ] }),
                        send: /* @__PURE__ */ l.jsxs("span", { className: "cr-btn__l", style: { width: 126, justifyContent: "center" }, children: [
                          /* @__PURE__ */ l.jsx(i1, { size: 18, ...ks }),
                          "Send invite"
                        ] }),
                        sending: /* @__PURE__ */ l.jsxs("span", { className: "cr-btn__l", style: { width: 126, justifyContent: "center" }, children: [
                          /* @__PURE__ */ l.jsx(y1, { size: 18 }),
                          "Sending"
                        ] }),
                        sent: /* @__PURE__ */ l.jsxs("span", { className: "cr-btn__l", style: { width: 126, justifyContent: "center" }, children: [
                          /* @__PURE__ */ l.jsx(Ss, { size: 18, strokeWidth: 2.6 }),
                          "Invite sent"
                        ] })
                      }
                    }
                  ) })
                ] }),
                /* @__PURE__ */ l.jsx("span", { className: "cr-aura__ring", "aria-hidden": !0 })
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "cr-hours", children: ["00.00", "01.00", "02.00", "03.00", "04.00", "05.00"].map((S) => /* @__PURE__ */ l.jsxs("div", { children: [
                /* @__PURE__ */ l.jsx("span", { children: S }),
                /* @__PURE__ */ l.jsx("i", {})
              ] }, S)) })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "cr-fab", "data-hide": o.open || void 0, children: [
              /* @__PURE__ */ l.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": !0, children: /* @__PURE__ */ l.jsx("path", { d: "M12 5v14M5 12h14" }) }),
              /* @__PURE__ */ l.jsx("span", { children: "New plan" })
            ] }),
            /* @__PURE__ */ l.jsxs("nav", { className: "cr-tabs", "aria-hidden": !0, children: [
              /* @__PURE__ */ l.jsxs("span", { "data-on": !0, children: [
                /* @__PURE__ */ l.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                  /* @__PURE__ */ l.jsx("rect", { x: "3", y: "4", width: "18", height: "18", rx: "3" }),
                  /* @__PURE__ */ l.jsx("path", { d: "M16 2v4M8 2v4M3 10h18" })
                ] }),
                "Today"
              ] }),
              /* @__PURE__ */ l.jsxs("span", { children: [
                /* @__PURE__ */ l.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                  /* @__PURE__ */ l.jsx("circle", { cx: "9", cy: "8", r: "3.5" }),
                  /* @__PURE__ */ l.jsx("circle", { cx: "17", cy: "10", r: "2.5" }),
                  /* @__PURE__ */ l.jsx("path", { d: "M3 20c0-3 2.7-5 6-5s6 2 6 5" }),
                  /* @__PURE__ */ l.jsx("path", { d: "M14.5 20c0-2 1.7-3.5 3.5-3.5s3.5 1.5 3.5 3.5" })
                ] }),
                "Circle"
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "cr-tabs__fab", children: /* @__PURE__ */ l.jsx("i", { children: /* @__PURE__ */ l.jsxs("svg", { viewBox: "0 0 100 100", "aria-hidden": !0, children: [
                /* @__PURE__ */ l.jsx("rect", { width: "100", height: "100", fill: "#D2592F" }),
                /* @__PURE__ */ l.jsx("circle", { cx: "50", cy: "50", r: "28", fill: "#DD7E5A" }),
                /* @__PURE__ */ l.jsx("circle", { cx: "50", cy: "50", r: "15", fill: "#fff" }),
                /* @__PURE__ */ l.jsx("rect", { x: "50", y: "45", width: "50", height: "10", fill: "#fff" })
              ] }) }) }),
              /* @__PURE__ */ l.jsxs("span", { children: [
                /* @__PURE__ */ l.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                  /* @__PURE__ */ l.jsx("rect", { x: "3", y: "5", width: "18", height: "14", rx: "3" }),
                  /* @__PURE__ */ l.jsx("path", { d: "M3 8l9 6 9-6" })
                ] }),
                "Invites"
              ] }),
              /* @__PURE__ */ l.jsxs("span", { children: [
                /* @__PURE__ */ l.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ l.jsx("path", { d: "M3 12h4l2-7 4 14 2-7h6" }) }),
                "Pulse"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "cr-sat-slot", style: y ? { top: Math.max(0, v.y + v.height / 2 - 118) } : void 0, children: /* @__PURE__ */ l.jsx(Pt, { open: o.sat, reveal: "drop", children: /* @__PURE__ */ l.jsxs("div", { className: "cr-sat", "data-target": "sat", children: [
            /* @__PURE__ */ l.jsxs("div", { className: "cr-sat__top", children: [
              /* @__PURE__ */ l.jsx("span", { className: "cr-sat__tick", children: /* @__PURE__ */ l.jsx(Ss, { size: 16, strokeWidth: 3 }) }),
              /* @__PURE__ */ l.jsx("b", { children: "Invite sent" }),
              /* @__PURE__ */ l.jsx("small", { children: "in under 120 seconds" })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "cr-sat__row", children: [
              /* @__PURE__ */ l.jsx(J0, { size: 16, ...ks }),
              "Plan on the calendar"
            ] })
          ] }) }) }),
          y ? /* @__PURE__ */ l.jsx(Gt, { route: "curve", from: { x: v.x + v.width, y: v.y + v.height / 2 }, to: { x: w.x, y: w.y + 30 }, show: o.link }) : /* @__PURE__ */ l.jsx(Gt, { route: "straight", from: { x: v.x + v.width / 2, y: v.y + v.height }, to: { x: w.x + w.width / 2, y: w.y }, show: o.link })
        ] });
      }
    }
  );
}
const $1 = {
  "linkaja-routing": E1,
  "komunal-shipped-flow": O1,
  "ai-decision-desk": U1,
  "ai-chrona": b1
};
function ep(o) {
  const c = $1[o.dataset.ss ?? ""];
  !c || o.dataset.ssOn || (o.dataset.ssOn = "1", Yf.createRoot(o).render(/* @__PURE__ */ l.jsx(c, {})), o.classList.add("ss-ready"));
}
export {
  ep as mount
};
