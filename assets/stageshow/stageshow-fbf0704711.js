var Ni = { exports: {} }, gr = {}, Pi = { exports: {} }, xe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var po;
function qc() {
  if (po) return xe;
  po = 1;
  var a = Symbol.for("react.element"), c = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), S = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), R = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), I = Symbol.iterator;
  function U(d) {
    return d === null || typeof d != "object" ? null : (d = I && d[I] || d["@@iterator"], typeof d == "function" ? d : null);
  }
  var J = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, T = Object.assign, X = {};
  function K(d, m, k) {
    this.props = d, this.context = m, this.refs = X, this.updater = k || J;
  }
  K.prototype.isReactComponent = {}, K.prototype.setState = function(d, m) {
    if (typeof d != "object" && typeof d != "function" && d != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, d, m, "setState");
  }, K.prototype.forceUpdate = function(d) {
    this.updater.enqueueForceUpdate(this, d, "forceUpdate");
  };
  function Q() {
  }
  Q.prototype = K.prototype;
  function re(d, m, k) {
    this.props = d, this.context = m, this.refs = X, this.updater = k || J;
  }
  var de = re.prototype = new Q();
  de.constructor = re, T(de, K.prototype), de.isPureReactComponent = !0;
  var F = Array.isArray, V = Object.prototype.hasOwnProperty, le = { current: null }, G = { key: !0, ref: !0, __self: !0, __source: !0 };
  function H(d, m, k) {
    var j, P = {}, q = null, se = null;
    if (m != null) for (j in m.ref !== void 0 && (se = m.ref), m.key !== void 0 && (q = "" + m.key), m) V.call(m, j) && !G.hasOwnProperty(j) && (P[j] = m[j]);
    var ae = arguments.length - 2;
    if (ae === 1) P.children = k;
    else if (1 < ae) {
      for (var b = Array(ae), ie = 0; ie < ae; ie++) b[ie] = arguments[ie + 2];
      P.children = b;
    }
    if (d && d.defaultProps) for (j in ae = d.defaultProps, ae) P[j] === void 0 && (P[j] = ae[j]);
    return { $$typeof: a, type: d, key: q, ref: se, props: P, _owner: le.current };
  }
  function Ae(d, m) {
    return { $$typeof: a, type: d.type, key: m, ref: d.ref, props: d.props, _owner: d._owner };
  }
  function pe(d) {
    return typeof d == "object" && d !== null && d.$$typeof === a;
  }
  function he(d) {
    var m = { "=": "=0", ":": "=2" };
    return "$" + d.replace(/[=:]/g, function(k) {
      return m[k];
    });
  }
  var fe = /\/+/g;
  function ve(d, m) {
    return typeof d == "object" && d !== null && d.key != null ? he("" + d.key) : m.toString(36);
  }
  function we(d, m, k, j, P) {
    var q = typeof d;
    (q === "undefined" || q === "boolean") && (d = null);
    var se = !1;
    if (d === null) se = !0;
    else switch (q) {
      case "string":
      case "number":
        se = !0;
        break;
      case "object":
        switch (d.$$typeof) {
          case a:
          case c:
            se = !0;
        }
    }
    if (se) return se = d, P = P(se), d = j === "" ? "." + ve(se, 0) : j, F(P) ? (k = "", d != null && (k = d.replace(fe, "$&/") + "/"), we(P, m, k, "", function(ie) {
      return ie;
    })) : P != null && (pe(P) && (P = Ae(P, k + (!P.key || se && se.key === P.key ? "" : ("" + P.key).replace(fe, "$&/") + "/") + d)), m.push(P)), 1;
    if (se = 0, j = j === "" ? "." : j + ":", F(d)) for (var ae = 0; ae < d.length; ae++) {
      q = d[ae];
      var b = j + ve(q, ae);
      se += we(q, m, k, b, P);
    }
    else if (b = U(d), typeof b == "function") for (d = b.call(d), ae = 0; !(q = d.next()).done; ) q = q.value, b = j + ve(q, ae++), se += we(q, m, k, b, P);
    else if (q === "object") throw m = String(d), Error("Objects are not valid as a React child (found: " + (m === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : m) + "). If you meant to render a collection of children, use an array instead.");
    return se;
  }
  function Le(d, m, k) {
    if (d == null) return d;
    var j = [], P = 0;
    return we(d, j, "", "", function(q) {
      return m.call(k, q, P++);
    }), j;
  }
  function Se(d) {
    if (d._status === -1) {
      var m = d._result;
      m = m(), m.then(function(k) {
        (d._status === 0 || d._status === -1) && (d._status = 1, d._result = k);
      }, function(k) {
        (d._status === 0 || d._status === -1) && (d._status = 2, d._result = k);
      }), d._status === -1 && (d._status = 0, d._result = m);
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var me = { current: null }, O = { transition: null }, te = { ReactCurrentDispatcher: me, ReactCurrentBatchConfig: O, ReactCurrentOwner: le };
  function W() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return xe.Children = { map: Le, forEach: function(d, m, k) {
    Le(d, function() {
      m.apply(this, arguments);
    }, k);
  }, count: function(d) {
    var m = 0;
    return Le(d, function() {
      m++;
    }), m;
  }, toArray: function(d) {
    return Le(d, function(m) {
      return m;
    }) || [];
  }, only: function(d) {
    if (!pe(d)) throw Error("React.Children.only expected to receive a single React element child.");
    return d;
  } }, xe.Component = K, xe.Fragment = u, xe.Profiler = v, xe.PureComponent = re, xe.StrictMode = y, xe.Suspense = N, xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = te, xe.act = W, xe.cloneElement = function(d, m, k) {
    if (d == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + d + ".");
    var j = T({}, d.props), P = d.key, q = d.ref, se = d._owner;
    if (m != null) {
      if (m.ref !== void 0 && (q = m.ref, se = le.current), m.key !== void 0 && (P = "" + m.key), d.type && d.type.defaultProps) var ae = d.type.defaultProps;
      for (b in m) V.call(m, b) && !G.hasOwnProperty(b) && (j[b] = m[b] === void 0 && ae !== void 0 ? ae[b] : m[b]);
    }
    var b = arguments.length - 2;
    if (b === 1) j.children = k;
    else if (1 < b) {
      ae = Array(b);
      for (var ie = 0; ie < b; ie++) ae[ie] = arguments[ie + 2];
      j.children = ae;
    }
    return { $$typeof: a, type: d.type, key: P, ref: q, props: j, _owner: se };
  }, xe.createContext = function(d) {
    return d = { $$typeof: S, _currentValue: d, _currentValue2: d, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, d.Provider = { $$typeof: w, _context: d }, d.Consumer = d;
  }, xe.createElement = H, xe.createFactory = function(d) {
    var m = H.bind(null, d);
    return m.type = d, m;
  }, xe.createRef = function() {
    return { current: null };
  }, xe.forwardRef = function(d) {
    return { $$typeof: C, render: d };
  }, xe.isValidElement = pe, xe.lazy = function(d) {
    return { $$typeof: z, _payload: { _status: -1, _result: d }, _init: Se };
  }, xe.memo = function(d, m) {
    return { $$typeof: R, type: d, compare: m === void 0 ? null : m };
  }, xe.startTransition = function(d) {
    var m = O.transition;
    O.transition = {};
    try {
      d();
    } finally {
      O.transition = m;
    }
  }, xe.unstable_act = W, xe.useCallback = function(d, m) {
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
  }, xe.useImperativeHandle = function(d, m, k) {
    return me.current.useImperativeHandle(d, m, k);
  }, xe.useInsertionEffect = function(d, m) {
    return me.current.useInsertionEffect(d, m);
  }, xe.useLayoutEffect = function(d, m) {
    return me.current.useLayoutEffect(d, m);
  }, xe.useMemo = function(d, m) {
    return me.current.useMemo(d, m);
  }, xe.useReducer = function(d, m, k) {
    return me.current.useReducer(d, m, k);
  }, xe.useRef = function(d) {
    return me.current.useRef(d);
  }, xe.useState = function(d) {
    return me.current.useState(d);
  }, xe.useSyncExternalStore = function(d, m, k) {
    return me.current.useSyncExternalStore(d, m, k);
  }, xe.useTransition = function() {
    return me.current.useTransition();
  }, xe.version = "18.3.1", xe;
}
var mo;
function Qi() {
  return mo || (mo = 1, Pi.exports = qc()), Pi.exports;
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
var vo;
function Kc() {
  if (vo) return gr;
  vo = 1;
  var a = Qi(), c = Symbol.for("react.element"), u = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, v = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(C, N, R) {
    var z, I = {}, U = null, J = null;
    R !== void 0 && (U = "" + R), N.key !== void 0 && (U = "" + N.key), N.ref !== void 0 && (J = N.ref);
    for (z in N) y.call(N, z) && !w.hasOwnProperty(z) && (I[z] = N[z]);
    if (C && C.defaultProps) for (z in N = C.defaultProps, N) I[z] === void 0 && (I[z] = N[z]);
    return { $$typeof: c, type: C, key: U, ref: J, props: I, _owner: v.current };
  }
  return gr.Fragment = u, gr.jsx = S, gr.jsxs = S, gr;
}
var yo;
function Yc() {
  return yo || (yo = 1, Ni.exports = Kc()), Ni.exports;
}
var l = Yc(), Bl = {}, Ci = { exports: {} }, w0 = {}, zi = { exports: {} }, Ei = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var go;
function Zc() {
  return go || (go = 1, (function(a) {
    function c(O, te) {
      var W = O.length;
      O.push(te);
      e: for (; 0 < W; ) {
        var d = W - 1 >>> 1, m = O[d];
        if (0 < v(m, te)) O[d] = te, O[W] = m, W = d;
        else break e;
      }
    }
    function u(O) {
      return O.length === 0 ? null : O[0];
    }
    function y(O) {
      if (O.length === 0) return null;
      var te = O[0], W = O.pop();
      if (W !== te) {
        O[0] = W;
        e: for (var d = 0, m = O.length, k = m >>> 1; d < k; ) {
          var j = 2 * (d + 1) - 1, P = O[j], q = j + 1, se = O[q];
          if (0 > v(P, W)) q < m && 0 > v(se, P) ? (O[d] = se, O[q] = W, d = q) : (O[d] = P, O[j] = W, d = j);
          else if (q < m && 0 > v(se, W)) O[d] = se, O[q] = W, d = q;
          else break e;
        }
      }
      return te;
    }
    function v(O, te) {
      var W = O.sortIndex - te.sortIndex;
      return W !== 0 ? W : O.id - te.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var w = performance;
      a.unstable_now = function() {
        return w.now();
      };
    } else {
      var S = Date, C = S.now();
      a.unstable_now = function() {
        return S.now() - C;
      };
    }
    var N = [], R = [], z = 1, I = null, U = 3, J = !1, T = !1, X = !1, K = typeof setTimeout == "function" ? setTimeout : null, Q = typeof clearTimeout == "function" ? clearTimeout : null, re = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function de(O) {
      for (var te = u(R); te !== null; ) {
        if (te.callback === null) y(R);
        else if (te.startTime <= O) y(R), te.sortIndex = te.expirationTime, c(N, te);
        else break;
        te = u(R);
      }
    }
    function F(O) {
      if (X = !1, de(O), !T) if (u(N) !== null) T = !0, Se(V);
      else {
        var te = u(R);
        te !== null && me(F, te.startTime - O);
      }
    }
    function V(O, te) {
      T = !1, X && (X = !1, Q(H), H = -1), J = !0;
      var W = U;
      try {
        for (de(te), I = u(N); I !== null && (!(I.expirationTime > te) || O && !he()); ) {
          var d = I.callback;
          if (typeof d == "function") {
            I.callback = null, U = I.priorityLevel;
            var m = d(I.expirationTime <= te);
            te = a.unstable_now(), typeof m == "function" ? I.callback = m : I === u(N) && y(N), de(te);
          } else y(N);
          I = u(N);
        }
        if (I !== null) var k = !0;
        else {
          var j = u(R);
          j !== null && me(F, j.startTime - te), k = !1;
        }
        return k;
      } finally {
        I = null, U = W, J = !1;
      }
    }
    var le = !1, G = null, H = -1, Ae = 5, pe = -1;
    function he() {
      return !(a.unstable_now() - pe < Ae);
    }
    function fe() {
      if (G !== null) {
        var O = a.unstable_now();
        pe = O;
        var te = !0;
        try {
          te = G(!0, O);
        } finally {
          te ? ve() : (le = !1, G = null);
        }
      } else le = !1;
    }
    var ve;
    if (typeof re == "function") ve = function() {
      re(fe);
    };
    else if (typeof MessageChannel < "u") {
      var we = new MessageChannel(), Le = we.port2;
      we.port1.onmessage = fe, ve = function() {
        Le.postMessage(null);
      };
    } else ve = function() {
      K(fe, 0);
    };
    function Se(O) {
      G = O, le || (le = !0, ve());
    }
    function me(O, te) {
      H = K(function() {
        O(a.unstable_now());
      }, te);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, a.unstable_continueExecution = function() {
      T || J || (T = !0, Se(V));
    }, a.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ae = 0 < O ? Math.floor(1e3 / O) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return U;
    }, a.unstable_getFirstCallbackNode = function() {
      return u(N);
    }, a.unstable_next = function(O) {
      switch (U) {
        case 1:
        case 2:
        case 3:
          var te = 3;
          break;
        default:
          te = U;
      }
      var W = U;
      U = te;
      try {
        return O();
      } finally {
        U = W;
      }
    }, a.unstable_pauseExecution = function() {
    }, a.unstable_requestPaint = function() {
    }, a.unstable_runWithPriority = function(O, te) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var W = U;
      U = O;
      try {
        return te();
      } finally {
        U = W;
      }
    }, a.unstable_scheduleCallback = function(O, te, W) {
      var d = a.unstable_now();
      switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? d + W : d) : W = d, O) {
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
      return m = W + m, O = { id: z++, callback: te, priorityLevel: O, startTime: W, expirationTime: m, sortIndex: -1 }, W > d ? (O.sortIndex = W, c(R, O), u(N) === null && O === u(R) && (X ? (Q(H), H = -1) : X = !0, me(F, W - d))) : (O.sortIndex = m, c(N, O), T || J || (T = !0, Se(V))), O;
    }, a.unstable_shouldYield = he, a.unstable_wrapCallback = function(O) {
      var te = U;
      return function() {
        var W = U;
        U = te;
        try {
          return O.apply(this, arguments);
        } finally {
          U = W;
        }
      };
    };
  })(Ei)), Ei;
}
var xo;
function bc() {
  return xo || (xo = 1, zi.exports = Zc()), zi.exports;
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
var wo;
function _c() {
  if (wo) return w0;
  wo = 1;
  var a = Qi(), c = bc();
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
  var C = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), N = Object.prototype.hasOwnProperty, R = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, z = {}, I = {};
  function U(e) {
    return N.call(I, e) ? !0 : N.call(z, e) ? !1 : R.test(e) ? I[e] = !0 : (z[e] = !0, !1);
  }
  function J(e, t, n, r) {
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
  function T(e, t, n, r) {
    if (t === null || typeof t > "u" || J(e, t, n, r)) return !0;
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
  function X(e, t, n, r, s, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
  }
  var K = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    K[e] = new X(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    K[t] = new X(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    K[e] = new X(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    K[e] = new X(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    K[e] = new X(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    K[e] = new X(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    K[e] = new X(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    K[e] = new X(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    K[e] = new X(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var Q = /[\-:]([a-z])/g;
  function re(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      Q,
      re
    );
    K[t] = new X(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Q, re);
    K[t] = new X(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Q, re);
    K[t] = new X(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    K[e] = new X(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), K.xlinkHref = new X("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    K[e] = new X(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function de(e, t, n, r) {
    var s = K.hasOwnProperty(t) ? K[t] : null;
    (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (T(t, n, s, r) && (n = null), r || s === null ? U(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName, r = s.attributeNamespace, n === null ? e.removeAttribute(t) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var F = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, V = Symbol.for("react.element"), le = Symbol.for("react.portal"), G = Symbol.for("react.fragment"), H = Symbol.for("react.strict_mode"), Ae = Symbol.for("react.profiler"), pe = Symbol.for("react.provider"), he = Symbol.for("react.context"), fe = Symbol.for("react.forward_ref"), ve = Symbol.for("react.suspense"), we = Symbol.for("react.suspense_list"), Le = Symbol.for("react.memo"), Se = Symbol.for("react.lazy"), me = Symbol.for("react.offscreen"), O = Symbol.iterator;
  function te(e) {
    return e === null || typeof e != "object" ? null : (e = O && e[O] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var W = Object.assign, d;
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
  var k = !1;
  function j(e, t) {
    if (!e || k) return "";
    k = !0;
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
        } catch (A) {
          var r = A;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (A) {
          r = A;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (A) {
          r = A;
        }
        e();
      }
    } catch (A) {
      if (A && r && typeof A.stack == "string") {
        for (var s = A.stack.split(`
`), i = r.stack.split(`
`), o = s.length - 1, f = i.length - 1; 1 <= o && 0 <= f && s[o] !== i[f]; ) f--;
        for (; 1 <= o && 0 <= f; o--, f--) if (s[o] !== i[f]) {
          if (o !== 1 || f !== 1)
            do
              if (o--, f--, 0 > f || s[o] !== i[f]) {
                var h = `
` + s[o].replace(" at new ", " at ");
                return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), h;
              }
            while (1 <= o && 0 <= f);
          break;
        }
      }
    } finally {
      k = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? m(e) : "";
  }
  function P(e) {
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
        return e = j(e.type, !1), e;
      case 11:
        return e = j(e.type.render, !1), e;
      case 1:
        return e = j(e.type, !0), e;
      default:
        return "";
    }
  }
  function q(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case G:
        return "Fragment";
      case le:
        return "Portal";
      case Ae:
        return "Profiler";
      case H:
        return "StrictMode";
      case ve:
        return "Suspense";
      case we:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case he:
        return (e.displayName || "Context") + ".Consumer";
      case pe:
        return (e._context.displayName || "Context") + ".Provider";
      case fe:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Le:
        return t = e.displayName || null, t !== null ? t : q(e.type) || "Memo";
      case Se:
        t = e._payload, e = e._init;
        try {
          return q(e(t));
        } catch {
        }
    }
    return null;
  }
  function se(e) {
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
        return q(t);
      case 8:
        return t === H ? "StrictMode" : "Mode";
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
  function ae(e) {
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
  function b(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ie(e) {
    var t = b(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var s = n.get, i = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return s.call(this);
      }, set: function(o) {
        r = "" + o, i.call(this, o);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(o) {
        r = "" + o;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function De(e) {
    e._valueTracker || (e._valueTracker = ie(e));
  }
  function Pe(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = b(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Te(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ye(e, t) {
    var n = t.checked;
    return W({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Ge(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = ae(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function et(e, t) {
    t = t.checked, t != null && de(e, "checked", t, !1);
  }
  function ke(e, t) {
    et(e, t);
    var n = ae(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? ze(e, t.type, n) : t.hasOwnProperty("defaultValue") && ze(e, t.type, ae(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function qe(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function ze(e, t, n) {
    (t !== "number" || Te(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Be = Array.isArray;
  function A0(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
      for (n = 0; n < e.length; n++) s = t.hasOwnProperty("$" + e[n].value), e[n].selected !== s && (e[n].selected = s), s && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ae(n), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === n) {
          e[s].selected = !0, r && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function tt(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(u(91));
    return W({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function k0(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(u(92));
        if (Be(n)) {
          if (1 < n.length) throw Error(u(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: ae(n) };
  }
  function nt(e, t) {
    var n = ae(t.value), r = ae(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Dt(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Tt(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function q0(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Tt(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var ht, $t = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, s) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, s);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (ht = ht || document.createElement("div"), ht.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ht.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function j0(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Bt = {
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
  }, Fl = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Bt).forEach(function(e) {
    Fl.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Bt[t] = Bt[e];
    });
  });
  function Mn(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Bt.hasOwnProperty(e) && Bt[e] ? ("" + t).trim() : t + "px";
  }
  function rt(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, s = Mn(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : e[n] = s;
    }
  }
  var Qt = W({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function lt(e, t) {
    if (t) {
      if (Qt[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(u(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(u(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(u(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(u(62));
    }
  }
  function Ht(e, t) {
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
  var K0 = null;
  function Q0(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var It = null, h0 = null, H0 = null;
  function en(e) {
    if (e = rr(e)) {
      if (typeof It != "function") throw Error(u(280));
      var t = e.stateNode;
      t && (t = Zr(t), It(e.stateNode, e.type, t));
    }
  }
  function Dn(e) {
    h0 ? H0 ? H0.push(e) : H0 = [e] : h0 = e;
  }
  function Cr() {
    if (h0) {
      var e = h0, t = H0;
      if (H0 = h0 = null, en(e), t) for (e = 0; e < t.length; e++) en(t[e]);
    }
  }
  function zr(e, t) {
    return e(t);
  }
  function Y() {
  }
  var ye = !1;
  function je(e, t, n) {
    if (ye) return e(t, n);
    ye = !0;
    try {
      return zr(e, t, n);
    } finally {
      ye = !1, (h0 !== null || H0 !== null) && (Y(), Cr());
    }
  }
  function ge(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Zr(n);
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
  var Re = !1;
  if (C) try {
    var r0 = {};
    Object.defineProperty(r0, "passive", { get: function() {
      Re = !0;
    } }), window.addEventListener("test", r0, r0), window.removeEventListener("test", r0, r0);
  } catch {
    Re = !1;
  }
  function E0(e, t, n, r, s, i, o, f, h) {
    var A = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, A);
    } catch (L) {
      this.onError(L);
    }
  }
  var u0 = !1, c0 = null, l0 = !1, Tn = null, Xl = { onError: function(e) {
    u0 = !0, c0 = e;
  } };
  function Bn(e, t, n, r, s, i, o, f, h) {
    u0 = !1, c0 = null, E0.apply(Xl, arguments);
  }
  function Vl(e, t, n, r, s, i, o, f, h) {
    if (Bn.apply(this, arguments), u0) {
      if (u0) {
        var A = c0;
        u0 = !1, c0 = null;
      } else throw Error(u(198));
      l0 || (l0 = !0, Tn = A);
    }
  }
  function I0(e) {
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
  function tn(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function nn(e) {
    if (I0(e) !== e) throw Error(u(188));
  }
  function Er(e) {
    var t = e.alternate;
    if (!t) {
      if (t = I0(e), t === null) throw Error(u(188));
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
          if (i === n) return nn(s), e;
          if (i === r) return nn(s), t;
          i = i.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== r.return) n = s, r = i;
      else {
        for (var o = !1, f = s.child; f; ) {
          if (f === n) {
            o = !0, n = s, r = i;
            break;
          }
          if (f === r) {
            o = !0, r = s, n = i;
            break;
          }
          f = f.sibling;
        }
        if (!o) {
          for (f = i.child; f; ) {
            if (f === n) {
              o = !0, n = i, r = s;
              break;
            }
            if (f === r) {
              o = !0, r = i, n = s;
              break;
            }
            f = f.sibling;
          }
          if (!o) throw Error(u(189));
        }
      }
      if (n.alternate !== r) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? e : t;
  }
  function Qn(e) {
    return e = Er(e), e !== null ? Hn(e) : null;
  }
  function Hn(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Hn(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var In = c.unstable_scheduleCallback, Oe = c.unstable_cancelCallback, p0 = c.unstable_shouldYield, rn = c.unstable_requestPaint, Ve = c.unstable_now, iu = c.unstable_getCurrentPriorityLevel, Jl = c.unstable_ImmediatePriority, Fi = c.unstable_UserBlockingPriority, Lr = c.unstable_NormalPriority, au = c.unstable_LowPriority, Xi = c.unstable_IdlePriority, Rr = null, Y0 = null;
  function ou(e) {
    if (Y0 && typeof Y0.onCommitFiberRoot == "function") try {
      Y0.onCommitFiberRoot(Rr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var O0 = Math.clz32 ? Math.clz32 : du, uu = Math.log, cu = Math.LN2;
  function du(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (uu(e) / cu | 0) | 0;
  }
  var Mr = 64, Dr = 4194304;
  function On(e) {
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
  function Tr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, s = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
    if (o !== 0) {
      var f = o & ~s;
      f !== 0 ? r = On(f) : (i &= o, i !== 0 && (r = On(i)));
    } else o = n & ~s, o !== 0 ? r = On(o) : i !== 0 && (r = On(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & s) === 0 && (s = r & -r, i = t & -t, s >= i || s === 16 && (i & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - O0(t), s = 1 << n, r |= e[n], t &= ~s;
    return r;
  }
  function fu(e, t) {
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
  function hu(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
      var o = 31 - O0(i), f = 1 << o, h = s[o];
      h === -1 ? ((f & n) === 0 || (f & r) !== 0) && (s[o] = fu(f, t)) : h <= t && (e.expiredLanes |= f), i &= ~f;
    }
  }
  function Gl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Vi() {
    var e = Mr;
    return Mr <<= 1, (Mr & 4194240) === 0 && (Mr = 64), e;
  }
  function ql(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Un(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - O0(t), e[t] = n;
  }
  function pu(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var s = 31 - O0(n), i = 1 << s;
      t[s] = 0, r[s] = -1, e[s] = -1, n &= ~i;
    }
  }
  function Kl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - O0(n), s = 1 << r;
      s & t | e[r] & t && (e[r] |= t), n &= ~s;
    }
  }
  var Me = 0;
  function Ji(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Gi, Yl, qi, Ki, Yi, Zl = !1, Br = [], pt = null, mt = null, vt = null, Wn = /* @__PURE__ */ new Map(), Fn = /* @__PURE__ */ new Map(), yt = [], mu = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Zi(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        pt = null;
        break;
      case "dragenter":
      case "dragleave":
        mt = null;
        break;
      case "mouseover":
      case "mouseout":
        vt = null;
        break;
      case "pointerover":
      case "pointerout":
        Wn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Fn.delete(t.pointerId);
    }
  }
  function Xn(e, t, n, r, s, i) {
    return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [s] }, t !== null && (t = rr(t), t !== null && Yl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
  }
  function vu(e, t, n, r, s) {
    switch (t) {
      case "focusin":
        return pt = Xn(pt, e, t, n, r, s), !0;
      case "dragenter":
        return mt = Xn(mt, e, t, n, r, s), !0;
      case "mouseover":
        return vt = Xn(vt, e, t, n, r, s), !0;
      case "pointerover":
        var i = s.pointerId;
        return Wn.set(i, Xn(Wn.get(i) || null, e, t, n, r, s)), !0;
      case "gotpointercapture":
        return i = s.pointerId, Fn.set(i, Xn(Fn.get(i) || null, e, t, n, r, s)), !0;
    }
    return !1;
  }
  function bi(e) {
    var t = Ot(e.target);
    if (t !== null) {
      var n = I0(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = tn(n), t !== null) {
            e.blockedOn = t, Yi(e.priority, function() {
              qi(n);
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
  function Qr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = _l(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        K0 = r, n.target.dispatchEvent(r), K0 = null;
      } else return t = rr(n), t !== null && Yl(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function _i(e, t, n) {
    Qr(e) && n.delete(t);
  }
  function yu() {
    Zl = !1, pt !== null && Qr(pt) && (pt = null), mt !== null && Qr(mt) && (mt = null), vt !== null && Qr(vt) && (vt = null), Wn.forEach(_i), Fn.forEach(_i);
  }
  function Vn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Zl || (Zl = !0, c.unstable_scheduleCallback(c.unstable_NormalPriority, yu)));
  }
  function Jn(e) {
    function t(s) {
      return Vn(s, e);
    }
    if (0 < Br.length) {
      Vn(Br[0], e);
      for (var n = 1; n < Br.length; n++) {
        var r = Br[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (pt !== null && Vn(pt, e), mt !== null && Vn(mt, e), vt !== null && Vn(vt, e), Wn.forEach(t), Fn.forEach(t), n = 0; n < yt.length; n++) r = yt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < yt.length && (n = yt[0], n.blockedOn === null); ) bi(n), n.blockedOn === null && yt.shift();
  }
  var ln = F.ReactCurrentBatchConfig, Hr = !0;
  function gu(e, t, n, r) {
    var s = Me, i = ln.transition;
    ln.transition = null;
    try {
      Me = 1, bl(e, t, n, r);
    } finally {
      Me = s, ln.transition = i;
    }
  }
  function xu(e, t, n, r) {
    var s = Me, i = ln.transition;
    ln.transition = null;
    try {
      Me = 4, bl(e, t, n, r);
    } finally {
      Me = s, ln.transition = i;
    }
  }
  function bl(e, t, n, r) {
    if (Hr) {
      var s = _l(e, t, n, r);
      if (s === null) ms(e, t, r, Ir, n), Zi(e, r);
      else if (vu(s, e, t, n, r)) r.stopPropagation();
      else if (Zi(e, r), t & 4 && -1 < mu.indexOf(e)) {
        for (; s !== null; ) {
          var i = rr(s);
          if (i !== null && Gi(i), i = _l(e, t, n, r), i === null && ms(e, t, r, Ir, n), i === s) break;
          s = i;
        }
        s !== null && r.stopPropagation();
      } else ms(e, t, r, null, n);
    }
  }
  var Ir = null;
  function _l(e, t, n, r) {
    if (Ir = null, e = Q0(r), e = Ot(e), e !== null) if (t = I0(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = tn(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Ir = e, null;
  }
  function $i(e) {
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
        switch (iu()) {
          case Jl:
            return 1;
          case Fi:
            return 4;
          case Lr:
          case au:
            return 16;
          case Xi:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var gt = null, $l = null, Or = null;
  function e2() {
    if (Or) return Or;
    var e, t = $l, n = t.length, r, s = "value" in gt ? gt.value : gt.textContent, i = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++) ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === s[i - r]; r++) ;
    return Or = s.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Ur(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Wr() {
    return !0;
  }
  function t2() {
    return !1;
  }
  function S0(e) {
    function t(n, r, s, i, o) {
      this._reactName = n, this._targetInst = s, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
      for (var f in e) e.hasOwnProperty(f) && (n = e[f], this[f] = n ? n(i) : i[f]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Wr : t2, this.isPropagationStopped = t2, this;
    }
    return W(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Wr);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Wr);
    }, persist: function() {
    }, isPersistent: Wr }), t;
  }
  var sn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, es = S0(sn), Gn = W({}, sn, { view: 0, detail: 0 }), wu = S0(Gn), ts, ns, qn, Fr = W({}, Gn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ls, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== qn && (qn && e.type === "mousemove" ? (ts = e.screenX - qn.screenX, ns = e.screenY - qn.screenY) : ns = ts = 0, qn = e), ts);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : ns;
  } }), n2 = S0(Fr), Au = W({}, Fr, { dataTransfer: 0 }), ku = S0(Au), ju = W({}, Gn, { relatedTarget: 0 }), rs = S0(ju), Su = W({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Nu = S0(Su), Pu = W({}, sn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Cu = S0(Pu), zu = W({}, sn, { data: 0 }), r2 = S0(zu), Eu = {
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
  }, Lu = {
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
  }, Ru = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Mu(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ru[e]) ? !!t[e] : !1;
  }
  function ls() {
    return Mu;
  }
  var Du = W({}, Gn, { key: function(e) {
    if (e.key) {
      var t = Eu[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Ur(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Lu[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ls, charCode: function(e) {
    return e.type === "keypress" ? Ur(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ur(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Tu = S0(Du), Bu = W({}, Fr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), l2 = S0(Bu), Qu = W({}, Gn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ls }), Hu = S0(Qu), Iu = W({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ou = S0(Iu), Uu = W({}, Fr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Wu = S0(Uu), Fu = [9, 13, 27, 32], ss = C && "CompositionEvent" in window, Kn = null;
  C && "documentMode" in document && (Kn = document.documentMode);
  var Xu = C && "TextEvent" in window && !Kn, s2 = C && (!ss || Kn && 8 < Kn && 11 >= Kn), i2 = " ", a2 = !1;
  function o2(e, t) {
    switch (e) {
      case "keyup":
        return Fu.indexOf(t.keyCode) !== -1;
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
  function u2(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var an = !1;
  function Vu(e, t) {
    switch (e) {
      case "compositionend":
        return u2(t);
      case "keypress":
        return t.which !== 32 ? null : (a2 = !0, i2);
      case "textInput":
        return e = t.data, e === i2 && a2 ? null : e;
      default:
        return null;
    }
  }
  function Ju(e, t) {
    if (an) return e === "compositionend" || !ss && o2(e, t) ? (e = e2(), Or = $l = gt = null, an = !1, e) : null;
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
        return s2 && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Gu = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function c2(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Gu[e.type] : t === "textarea";
  }
  function d2(e, t, n, r) {
    Dn(r), t = qr(t, "onChange"), 0 < t.length && (n = new es("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Yn = null, Zn = null;
  function qu(e) {
    E2(e, 0);
  }
  function Xr(e) {
    var t = fn(e);
    if (Pe(t)) return e;
  }
  function Ku(e, t) {
    if (e === "change") return t;
  }
  var f2 = !1;
  if (C) {
    var is;
    if (C) {
      var as = "oninput" in document;
      if (!as) {
        var h2 = document.createElement("div");
        h2.setAttribute("oninput", "return;"), as = typeof h2.oninput == "function";
      }
      is = as;
    } else is = !1;
    f2 = is && (!document.documentMode || 9 < document.documentMode);
  }
  function p2() {
    Yn && (Yn.detachEvent("onpropertychange", m2), Zn = Yn = null);
  }
  function m2(e) {
    if (e.propertyName === "value" && Xr(Zn)) {
      var t = [];
      d2(t, Zn, e, Q0(e)), je(qu, t);
    }
  }
  function Yu(e, t, n) {
    e === "focusin" ? (p2(), Yn = t, Zn = n, Yn.attachEvent("onpropertychange", m2)) : e === "focusout" && p2();
  }
  function Zu(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Xr(Zn);
  }
  function bu(e, t) {
    if (e === "click") return Xr(t);
  }
  function _u(e, t) {
    if (e === "input" || e === "change") return Xr(t);
  }
  function $u(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var U0 = typeof Object.is == "function" ? Object.is : $u;
  function bn(e, t) {
    if (U0(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var s = n[r];
      if (!N.call(t, s) || !U0(e[s], t[s])) return !1;
    }
    return !0;
  }
  function v2(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function y2(e, t) {
    var n = v2(e);
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
      n = v2(n);
    }
  }
  function g2(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? g2(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function x2() {
    for (var e = window, t = Te(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Te(e.document);
    }
    return t;
  }
  function os(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function ec(e) {
    var t = x2(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && g2(n.ownerDocument.documentElement, n)) {
      if (r !== null && os(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var s = n.textContent.length, i = Math.min(r.start, s);
          r = r.end === void 0 ? i : Math.min(r.end, s), !e.extend && i > r && (s = r, r = i, i = s), s = y2(n, i);
          var o = y2(
            n,
            r
          );
          s && o && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(s.node, s.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var tc = C && "documentMode" in document && 11 >= document.documentMode, on = null, us = null, _n = null, cs = !1;
  function w2(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    cs || on == null || on !== Te(r) || (r = on, "selectionStart" in r && os(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), _n && bn(_n, r) || (_n = r, r = qr(us, "onSelect"), 0 < r.length && (t = new es("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = on)));
  }
  function Vr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var un = { animationend: Vr("Animation", "AnimationEnd"), animationiteration: Vr("Animation", "AnimationIteration"), animationstart: Vr("Animation", "AnimationStart"), transitionend: Vr("Transition", "TransitionEnd") }, ds = {}, A2 = {};
  C && (A2 = document.createElement("div").style, "AnimationEvent" in window || (delete un.animationend.animation, delete un.animationiteration.animation, delete un.animationstart.animation), "TransitionEvent" in window || delete un.transitionend.transition);
  function Jr(e) {
    if (ds[e]) return ds[e];
    if (!un[e]) return e;
    var t = un[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in A2) return ds[e] = t[n];
    return e;
  }
  var k2 = Jr("animationend"), j2 = Jr("animationiteration"), S2 = Jr("animationstart"), N2 = Jr("transitionend"), P2 = /* @__PURE__ */ new Map(), C2 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function xt(e, t) {
    P2.set(e, t), w(t, [e]);
  }
  for (var fs = 0; fs < C2.length; fs++) {
    var hs = C2[fs], nc = hs.toLowerCase(), rc = hs[0].toUpperCase() + hs.slice(1);
    xt(nc, "on" + rc);
  }
  xt(k2, "onAnimationEnd"), xt(j2, "onAnimationIteration"), xt(S2, "onAnimationStart"), xt("dblclick", "onDoubleClick"), xt("focusin", "onFocus"), xt("focusout", "onBlur"), xt(N2, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), w("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), w("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), w("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), w("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), w("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), w("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var $n = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), lc = new Set("cancel close invalid load scroll toggle".split(" ").concat($n));
  function z2(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Vl(r, t, void 0, e), e.currentTarget = null;
  }
  function E2(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], s = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t) for (var o = r.length - 1; 0 <= o; o--) {
          var f = r[o], h = f.instance, A = f.currentTarget;
          if (f = f.listener, h !== i && s.isPropagationStopped()) break e;
          z2(s, f, A), i = h;
        }
        else for (o = 0; o < r.length; o++) {
          if (f = r[o], h = f.instance, A = f.currentTarget, f = f.listener, h !== i && s.isPropagationStopped()) break e;
          z2(s, f, A), i = h;
        }
      }
    }
    if (l0) throw e = Tn, l0 = !1, Tn = null, e;
  }
  function He(e, t) {
    var n = t[As];
    n === void 0 && (n = t[As] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (L2(t, e, 2, !1), n.add(r));
  }
  function ps(e, t, n) {
    var r = 0;
    t && (r |= 4), L2(n, e, r, t);
  }
  var Gr = "_reactListening" + Math.random().toString(36).slice(2);
  function er(e) {
    if (!e[Gr]) {
      e[Gr] = !0, y.forEach(function(n) {
        n !== "selectionchange" && (lc.has(n) || ps(n, !1, e), ps(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Gr] || (t[Gr] = !0, ps("selectionchange", !1, t));
    }
  }
  function L2(e, t, n, r) {
    switch ($i(t)) {
      case 1:
        var s = gu;
        break;
      case 4:
        s = xu;
        break;
      default:
        s = bl;
    }
    n = s.bind(null, t, n, e), s = void 0, !Re || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), r ? s !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: s }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, { passive: s }) : e.addEventListener(t, n, !1);
  }
  function ms(e, t, n, r, s) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var f = r.stateNode.containerInfo;
        if (f === s || f.nodeType === 8 && f.parentNode === s) break;
        if (o === 4) for (o = r.return; o !== null; ) {
          var h = o.tag;
          if ((h === 3 || h === 4) && (h = o.stateNode.containerInfo, h === s || h.nodeType === 8 && h.parentNode === s)) return;
          o = o.return;
        }
        for (; f !== null; ) {
          if (o = Ot(f), o === null) return;
          if (h = o.tag, h === 5 || h === 6) {
            r = i = o;
            continue e;
          }
          f = f.parentNode;
        }
      }
      r = r.return;
    }
    je(function() {
      var A = i, L = Q0(n), D = [];
      e: {
        var E = P2.get(e);
        if (E !== void 0) {
          var Z = es, $ = e;
          switch (e) {
            case "keypress":
              if (Ur(n) === 0) break e;
            case "keydown":
            case "keyup":
              Z = Tu;
              break;
            case "focusin":
              $ = "focus", Z = rs;
              break;
            case "focusout":
              $ = "blur", Z = rs;
              break;
            case "beforeblur":
            case "afterblur":
              Z = rs;
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
              Z = n2;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Z = ku;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Z = Hu;
              break;
            case k2:
            case j2:
            case S2:
              Z = Nu;
              break;
            case N2:
              Z = Ou;
              break;
            case "scroll":
              Z = wu;
              break;
            case "wheel":
              Z = Wu;
              break;
            case "copy":
            case "cut":
            case "paste":
              Z = Cu;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Z = l2;
          }
          var ee = (t & 4) !== 0, Je = !ee && e === "scroll", g = ee ? E !== null ? E + "Capture" : null : E;
          ee = [];
          for (var p = A, x; p !== null; ) {
            x = p;
            var B = x.stateNode;
            if (x.tag === 5 && B !== null && (x = B, g !== null && (B = ge(p, g), B != null && ee.push(tr(p, B, x)))), Je) break;
            p = p.return;
          }
          0 < ee.length && (E = new Z(E, $, null, n, L), D.push({ event: E, listeners: ee }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (E = e === "mouseover" || e === "pointerover", Z = e === "mouseout" || e === "pointerout", E && n !== K0 && ($ = n.relatedTarget || n.fromElement) && (Ot($) || $[st])) break e;
          if ((Z || E) && (E = L.window === L ? L : (E = L.ownerDocument) ? E.defaultView || E.parentWindow : window, Z ? ($ = n.relatedTarget || n.toElement, Z = A, $ = $ ? Ot($) : null, $ !== null && (Je = I0($), $ !== Je || $.tag !== 5 && $.tag !== 6) && ($ = null)) : (Z = null, $ = A), Z !== $)) {
            if (ee = n2, B = "onMouseLeave", g = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (ee = l2, B = "onPointerLeave", g = "onPointerEnter", p = "pointer"), Je = Z == null ? E : fn(Z), x = $ == null ? E : fn($), E = new ee(B, p + "leave", Z, n, L), E.target = Je, E.relatedTarget = x, B = null, Ot(L) === A && (ee = new ee(g, p + "enter", $, n, L), ee.target = x, ee.relatedTarget = Je, B = ee), Je = B, Z && $) t: {
              for (ee = Z, g = $, p = 0, x = ee; x; x = cn(x)) p++;
              for (x = 0, B = g; B; B = cn(B)) x++;
              for (; 0 < p - x; ) ee = cn(ee), p--;
              for (; 0 < x - p; ) g = cn(g), x--;
              for (; p--; ) {
                if (ee === g || g !== null && ee === g.alternate) break t;
                ee = cn(ee), g = cn(g);
              }
              ee = null;
            }
            else ee = null;
            Z !== null && R2(D, E, Z, ee, !1), $ !== null && Je !== null && R2(D, Je, $, ee, !0);
          }
        }
        e: {
          if (E = A ? fn(A) : window, Z = E.nodeName && E.nodeName.toLowerCase(), Z === "select" || Z === "input" && E.type === "file") var ne = Ku;
          else if (c2(E)) if (f2) ne = _u;
          else {
            ne = Zu;
            var oe = Yu;
          }
          else (Z = E.nodeName) && Z.toLowerCase() === "input" && (E.type === "checkbox" || E.type === "radio") && (ne = bu);
          if (ne && (ne = ne(e, A))) {
            d2(D, ne, n, L);
            break e;
          }
          oe && oe(e, E, A), e === "focusout" && (oe = E._wrapperState) && oe.controlled && E.type === "number" && ze(E, "number", E.value);
        }
        switch (oe = A ? fn(A) : window, e) {
          case "focusin":
            (c2(oe) || oe.contentEditable === "true") && (on = oe, us = A, _n = null);
            break;
          case "focusout":
            _n = us = on = null;
            break;
          case "mousedown":
            cs = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            cs = !1, w2(D, n, L);
            break;
          case "selectionchange":
            if (tc) break;
          case "keydown":
          case "keyup":
            w2(D, n, L);
        }
        var ue;
        if (ss) e: {
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
        else an ? o2(e, n) && (ce = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ce = "onCompositionStart");
        ce && (s2 && n.locale !== "ko" && (an || ce !== "onCompositionStart" ? ce === "onCompositionEnd" && an && (ue = e2()) : (gt = L, $l = "value" in gt ? gt.value : gt.textContent, an = !0)), oe = qr(A, ce), 0 < oe.length && (ce = new r2(ce, e, null, n, L), D.push({ event: ce, listeners: oe }), ue ? ce.data = ue : (ue = u2(n), ue !== null && (ce.data = ue)))), (ue = Xu ? Vu(e, n) : Ju(e, n)) && (A = qr(A, "onBeforeInput"), 0 < A.length && (L = new r2("onBeforeInput", "beforeinput", null, n, L), D.push({ event: L, listeners: A }), L.data = ue));
      }
      E2(D, t);
    });
  }
  function tr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function qr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var s = e, i = s.stateNode;
      s.tag === 5 && i !== null && (s = i, i = ge(e, n), i != null && r.unshift(tr(e, i, s)), i = ge(e, t), i != null && r.push(tr(e, i, s))), e = e.return;
    }
    return r;
  }
  function cn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function R2(e, t, n, r, s) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
      var f = n, h = f.alternate, A = f.stateNode;
      if (h !== null && h === r) break;
      f.tag === 5 && A !== null && (f = A, s ? (h = ge(n, i), h != null && o.unshift(tr(n, h, f))) : s || (h = ge(n, i), h != null && o.push(tr(n, h, f)))), n = n.return;
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var sc = /\r\n?/g, ic = /\u0000|\uFFFD/g;
  function M2(e) {
    return (typeof e == "string" ? e : "" + e).replace(sc, `
`).replace(ic, "");
  }
  function Kr(e, t, n) {
    if (t = M2(t), M2(e) !== t && n) throw Error(u(425));
  }
  function Yr() {
  }
  var vs = null, ys = null;
  function gs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var xs = typeof setTimeout == "function" ? setTimeout : void 0, ac = typeof clearTimeout == "function" ? clearTimeout : void 0, D2 = typeof Promise == "function" ? Promise : void 0, oc = typeof queueMicrotask == "function" ? queueMicrotask : typeof D2 < "u" ? function(e) {
    return D2.resolve(null).then(e).catch(uc);
  } : xs;
  function uc(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ws(e, t) {
    var n = t, r = 0;
    do {
      var s = n.nextSibling;
      if (e.removeChild(n), s && s.nodeType === 8) if (n = s.data, n === "/$") {
        if (r === 0) {
          e.removeChild(s), Jn(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = s;
    } while (n);
    Jn(t);
  }
  function wt(e) {
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
  function T2(e) {
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
  var dn = Math.random().toString(36).slice(2), Z0 = "__reactFiber$" + dn, nr = "__reactProps$" + dn, st = "__reactContainer$" + dn, As = "__reactEvents$" + dn, cc = "__reactListeners$" + dn, dc = "__reactHandles$" + dn;
  function Ot(e) {
    var t = e[Z0];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[st] || n[Z0]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = T2(e); e !== null; ) {
          if (n = e[Z0]) return n;
          e = T2(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function rr(e) {
    return e = e[Z0] || e[st], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function fn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(u(33));
  }
  function Zr(e) {
    return e[nr] || null;
  }
  var ks = [], hn = -1;
  function At(e) {
    return { current: e };
  }
  function Ie(e) {
    0 > hn || (e.current = ks[hn], ks[hn] = null, hn--);
  }
  function Qe(e, t) {
    hn++, ks[hn] = e.current, e.current = t;
  }
  var kt = {}, s0 = At(kt), m0 = At(!1), Ut = kt;
  function pn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return kt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var s = {}, i;
    for (i in n) s[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = s), s;
  }
  function v0(e) {
    return e = e.childContextTypes, e != null;
  }
  function br() {
    Ie(m0), Ie(s0);
  }
  function B2(e, t, n) {
    if (s0.current !== kt) throw Error(u(168));
    Qe(s0, t), Qe(m0, n);
  }
  function Q2(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var s in r) if (!(s in t)) throw Error(u(108, se(e) || "Unknown", s));
    return W({}, n, r);
  }
  function _r(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || kt, Ut = s0.current, Qe(s0, e), Qe(m0, m0.current), !0;
  }
  function H2(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(u(169));
    n ? (e = Q2(e, t, Ut), r.__reactInternalMemoizedMergedChildContext = e, Ie(m0), Ie(s0), Qe(s0, e)) : Ie(m0), Qe(m0, n);
  }
  var it = null, $r = !1, js = !1;
  function I2(e) {
    it === null ? it = [e] : it.push(e);
  }
  function fc(e) {
    $r = !0, I2(e);
  }
  function jt() {
    if (!js && it !== null) {
      js = !0;
      var e = 0, t = Me;
      try {
        var n = it;
        for (Me = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        it = null, $r = !1;
      } catch (s) {
        throw it !== null && (it = it.slice(e + 1)), In(Jl, jt), s;
      } finally {
        Me = t, js = !1;
      }
    }
    return null;
  }
  var mn = [], vn = 0, el = null, tl = 0, L0 = [], R0 = 0, Wt = null, at = 1, ot = "";
  function Ft(e, t) {
    mn[vn++] = tl, mn[vn++] = el, el = e, tl = t;
  }
  function O2(e, t, n) {
    L0[R0++] = at, L0[R0++] = ot, L0[R0++] = Wt, Wt = e;
    var r = at;
    e = ot;
    var s = 32 - O0(r) - 1;
    r &= ~(1 << s), n += 1;
    var i = 32 - O0(t) + s;
    if (30 < i) {
      var o = s - s % 5;
      i = (r & (1 << o) - 1).toString(32), r >>= o, s -= o, at = 1 << 32 - O0(t) + s | n << s | r, ot = i + e;
    } else at = 1 << i | n << s | r, ot = e;
  }
  function Ss(e) {
    e.return !== null && (Ft(e, 1), O2(e, 1, 0));
  }
  function Ns(e) {
    for (; e === el; ) el = mn[--vn], mn[vn] = null, tl = mn[--vn], mn[vn] = null;
    for (; e === Wt; ) Wt = L0[--R0], L0[R0] = null, ot = L0[--R0], L0[R0] = null, at = L0[--R0], L0[R0] = null;
  }
  var N0 = null, P0 = null, Ue = !1, W0 = null;
  function U2(e, t) {
    var n = B0(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function W2(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, N0 = e, P0 = wt(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, N0 = e, P0 = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Wt !== null ? { id: at, overflow: ot } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = B0(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, N0 = e, P0 = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ps(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Cs(e) {
    if (Ue) {
      var t = P0;
      if (t) {
        var n = t;
        if (!W2(e, t)) {
          if (Ps(e)) throw Error(u(418));
          t = wt(n.nextSibling);
          var r = N0;
          t && W2(e, t) ? U2(r, n) : (e.flags = e.flags & -4097 | 2, Ue = !1, N0 = e);
        }
      } else {
        if (Ps(e)) throw Error(u(418));
        e.flags = e.flags & -4097 | 2, Ue = !1, N0 = e;
      }
    }
  }
  function F2(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    N0 = e;
  }
  function nl(e) {
    if (e !== N0) return !1;
    if (!Ue) return F2(e), Ue = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !gs(e.type, e.memoizedProps)), t && (t = P0)) {
      if (Ps(e)) throw X2(), Error(u(418));
      for (; t; ) U2(e, t), t = wt(t.nextSibling);
    }
    if (F2(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                P0 = wt(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        P0 = null;
      }
    } else P0 = N0 ? wt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function X2() {
    for (var e = P0; e; ) e = wt(e.nextSibling);
  }
  function yn() {
    P0 = N0 = null, Ue = !1;
  }
  function zs(e) {
    W0 === null ? W0 = [e] : W0.push(e);
  }
  var hc = F.ReactCurrentBatchConfig;
  function lr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(u(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(u(147, e));
        var s = r, i = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
          var f = s.refs;
          o === null ? delete f[i] : f[i] = o;
        }, t._stringRef = i, t);
      }
      if (typeof e != "string") throw Error(u(284));
      if (!n._owner) throw Error(u(290, e));
    }
    return e;
  }
  function rl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function V2(e) {
    var t = e._init;
    return t(e._payload);
  }
  function J2(e) {
    function t(g, p) {
      if (e) {
        var x = g.deletions;
        x === null ? (g.deletions = [p], g.flags |= 16) : x.push(p);
      }
    }
    function n(g, p) {
      if (!e) return null;
      for (; p !== null; ) t(g, p), p = p.sibling;
      return null;
    }
    function r(g, p) {
      for (g = /* @__PURE__ */ new Map(); p !== null; ) p.key !== null ? g.set(p.key, p) : g.set(p.index, p), p = p.sibling;
      return g;
    }
    function s(g, p) {
      return g = Rt(g, p), g.index = 0, g.sibling = null, g;
    }
    function i(g, p, x) {
      return g.index = x, e ? (x = g.alternate, x !== null ? (x = x.index, x < p ? (g.flags |= 2, p) : x) : (g.flags |= 2, p)) : (g.flags |= 1048576, p);
    }
    function o(g) {
      return e && g.alternate === null && (g.flags |= 2), g;
    }
    function f(g, p, x, B) {
      return p === null || p.tag !== 6 ? (p = xi(x, g.mode, B), p.return = g, p) : (p = s(p, x), p.return = g, p);
    }
    function h(g, p, x, B) {
      var ne = x.type;
      return ne === G ? L(g, p, x.props.children, B, x.key) : p !== null && (p.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === Se && V2(ne) === p.type) ? (B = s(p, x.props), B.ref = lr(g, p, x), B.return = g, B) : (B = Cl(x.type, x.key, x.props, null, g.mode, B), B.ref = lr(g, p, x), B.return = g, B);
    }
    function A(g, p, x, B) {
      return p === null || p.tag !== 4 || p.stateNode.containerInfo !== x.containerInfo || p.stateNode.implementation !== x.implementation ? (p = wi(x, g.mode, B), p.return = g, p) : (p = s(p, x.children || []), p.return = g, p);
    }
    function L(g, p, x, B, ne) {
      return p === null || p.tag !== 7 ? (p = Zt(x, g.mode, B, ne), p.return = g, p) : (p = s(p, x), p.return = g, p);
    }
    function D(g, p, x) {
      if (typeof p == "string" && p !== "" || typeof p == "number") return p = xi("" + p, g.mode, x), p.return = g, p;
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case V:
            return x = Cl(p.type, p.key, p.props, null, g.mode, x), x.ref = lr(g, null, p), x.return = g, x;
          case le:
            return p = wi(p, g.mode, x), p.return = g, p;
          case Se:
            var B = p._init;
            return D(g, B(p._payload), x);
        }
        if (Be(p) || te(p)) return p = Zt(p, g.mode, x, null), p.return = g, p;
        rl(g, p);
      }
      return null;
    }
    function E(g, p, x, B) {
      var ne = p !== null ? p.key : null;
      if (typeof x == "string" && x !== "" || typeof x == "number") return ne !== null ? null : f(g, p, "" + x, B);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case V:
            return x.key === ne ? h(g, p, x, B) : null;
          case le:
            return x.key === ne ? A(g, p, x, B) : null;
          case Se:
            return ne = x._init, E(
              g,
              p,
              ne(x._payload),
              B
            );
        }
        if (Be(x) || te(x)) return ne !== null ? null : L(g, p, x, B, null);
        rl(g, x);
      }
      return null;
    }
    function Z(g, p, x, B, ne) {
      if (typeof B == "string" && B !== "" || typeof B == "number") return g = g.get(x) || null, f(p, g, "" + B, ne);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case V:
            return g = g.get(B.key === null ? x : B.key) || null, h(p, g, B, ne);
          case le:
            return g = g.get(B.key === null ? x : B.key) || null, A(p, g, B, ne);
          case Se:
            var oe = B._init;
            return Z(g, p, x, oe(B._payload), ne);
        }
        if (Be(B) || te(B)) return g = g.get(x) || null, L(p, g, B, ne, null);
        rl(p, B);
      }
      return null;
    }
    function $(g, p, x, B) {
      for (var ne = null, oe = null, ue = p, ce = p = 0, e0 = null; ue !== null && ce < x.length; ce++) {
        ue.index > ce ? (e0 = ue, ue = null) : e0 = ue.sibling;
        var Ce = E(g, ue, x[ce], B);
        if (Ce === null) {
          ue === null && (ue = e0);
          break;
        }
        e && ue && Ce.alternate === null && t(g, ue), p = i(Ce, p, ce), oe === null ? ne = Ce : oe.sibling = Ce, oe = Ce, ue = e0;
      }
      if (ce === x.length) return n(g, ue), Ue && Ft(g, ce), ne;
      if (ue === null) {
        for (; ce < x.length; ce++) ue = D(g, x[ce], B), ue !== null && (p = i(ue, p, ce), oe === null ? ne = ue : oe.sibling = ue, oe = ue);
        return Ue && Ft(g, ce), ne;
      }
      for (ue = r(g, ue); ce < x.length; ce++) e0 = Z(ue, g, ce, x[ce], B), e0 !== null && (e && e0.alternate !== null && ue.delete(e0.key === null ? ce : e0.key), p = i(e0, p, ce), oe === null ? ne = e0 : oe.sibling = e0, oe = e0);
      return e && ue.forEach(function(Mt) {
        return t(g, Mt);
      }), Ue && Ft(g, ce), ne;
    }
    function ee(g, p, x, B) {
      var ne = te(x);
      if (typeof ne != "function") throw Error(u(150));
      if (x = ne.call(x), x == null) throw Error(u(151));
      for (var oe = ne = null, ue = p, ce = p = 0, e0 = null, Ce = x.next(); ue !== null && !Ce.done; ce++, Ce = x.next()) {
        ue.index > ce ? (e0 = ue, ue = null) : e0 = ue.sibling;
        var Mt = E(g, ue, Ce.value, B);
        if (Mt === null) {
          ue === null && (ue = e0);
          break;
        }
        e && ue && Mt.alternate === null && t(g, ue), p = i(Mt, p, ce), oe === null ? ne = Mt : oe.sibling = Mt, oe = Mt, ue = e0;
      }
      if (Ce.done) return n(
        g,
        ue
      ), Ue && Ft(g, ce), ne;
      if (ue === null) {
        for (; !Ce.done; ce++, Ce = x.next()) Ce = D(g, Ce.value, B), Ce !== null && (p = i(Ce, p, ce), oe === null ? ne = Ce : oe.sibling = Ce, oe = Ce);
        return Ue && Ft(g, ce), ne;
      }
      for (ue = r(g, ue); !Ce.done; ce++, Ce = x.next()) Ce = Z(ue, g, ce, Ce.value, B), Ce !== null && (e && Ce.alternate !== null && ue.delete(Ce.key === null ? ce : Ce.key), p = i(Ce, p, ce), oe === null ? ne = Ce : oe.sibling = Ce, oe = Ce);
      return e && ue.forEach(function(Gc) {
        return t(g, Gc);
      }), Ue && Ft(g, ce), ne;
    }
    function Je(g, p, x, B) {
      if (typeof x == "object" && x !== null && x.type === G && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case V:
            e: {
              for (var ne = x.key, oe = p; oe !== null; ) {
                if (oe.key === ne) {
                  if (ne = x.type, ne === G) {
                    if (oe.tag === 7) {
                      n(g, oe.sibling), p = s(oe, x.props.children), p.return = g, g = p;
                      break e;
                    }
                  } else if (oe.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === Se && V2(ne) === oe.type) {
                    n(g, oe.sibling), p = s(oe, x.props), p.ref = lr(g, oe, x), p.return = g, g = p;
                    break e;
                  }
                  n(g, oe);
                  break;
                } else t(g, oe);
                oe = oe.sibling;
              }
              x.type === G ? (p = Zt(x.props.children, g.mode, B, x.key), p.return = g, g = p) : (B = Cl(x.type, x.key, x.props, null, g.mode, B), B.ref = lr(g, p, x), B.return = g, g = B);
            }
            return o(g);
          case le:
            e: {
              for (oe = x.key; p !== null; ) {
                if (p.key === oe) if (p.tag === 4 && p.stateNode.containerInfo === x.containerInfo && p.stateNode.implementation === x.implementation) {
                  n(g, p.sibling), p = s(p, x.children || []), p.return = g, g = p;
                  break e;
                } else {
                  n(g, p);
                  break;
                }
                else t(g, p);
                p = p.sibling;
              }
              p = wi(x, g.mode, B), p.return = g, g = p;
            }
            return o(g);
          case Se:
            return oe = x._init, Je(g, p, oe(x._payload), B);
        }
        if (Be(x)) return $(g, p, x, B);
        if (te(x)) return ee(g, p, x, B);
        rl(g, x);
      }
      return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x, p !== null && p.tag === 6 ? (n(g, p.sibling), p = s(p, x), p.return = g, g = p) : (n(g, p), p = xi(x, g.mode, B), p.return = g, g = p), o(g)) : n(g, p);
    }
    return Je;
  }
  var gn = J2(!0), G2 = J2(!1), ll = At(null), sl = null, xn = null, Es = null;
  function Ls() {
    Es = xn = sl = null;
  }
  function Rs(e) {
    var t = ll.current;
    Ie(ll), e._currentValue = t;
  }
  function Ms(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function wn(e, t) {
    sl = e, Es = xn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (y0 = !0), e.firstContext = null);
  }
  function M0(e) {
    var t = e._currentValue;
    if (Es !== e) if (e = { context: e, memoizedValue: t, next: null }, xn === null) {
      if (sl === null) throw Error(u(308));
      xn = e, sl.dependencies = { lanes: 0, firstContext: e };
    } else xn = xn.next = e;
    return t;
  }
  var Xt = null;
  function Ds(e) {
    Xt === null ? Xt = [e] : Xt.push(e);
  }
  function q2(e, t, n, r) {
    var s = t.interleaved;
    return s === null ? (n.next = n, Ds(t)) : (n.next = s.next, s.next = n), t.interleaved = n, ut(e, r);
  }
  function ut(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var St = !1;
  function Ts(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function K2(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function ct(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Nt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (Ne & 2) !== 0) {
      var s = r.pending;
      return s === null ? t.next = t : (t.next = s.next, s.next = t), r.pending = t, ut(e, n);
    }
    return s = r.interleaved, s === null ? (t.next = t, Ds(r)) : (t.next = s.next, s.next = t), r.interleaved = t, ut(e, n);
  }
  function il(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Kl(e, n);
    }
  }
  function Y2(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var s = null, i = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          i === null ? s = i = o : i = i.next = o, n = n.next;
        } while (n !== null);
        i === null ? s = i = t : i = i.next = t;
      } else s = i = t;
      n = { baseState: r.baseState, firstBaseUpdate: s, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function al(e, t, n, r) {
    var s = e.updateQueue;
    St = !1;
    var i = s.firstBaseUpdate, o = s.lastBaseUpdate, f = s.shared.pending;
    if (f !== null) {
      s.shared.pending = null;
      var h = f, A = h.next;
      h.next = null, o === null ? i = A : o.next = A, o = h;
      var L = e.alternate;
      L !== null && (L = L.updateQueue, f = L.lastBaseUpdate, f !== o && (f === null ? L.firstBaseUpdate = A : f.next = A, L.lastBaseUpdate = h));
    }
    if (i !== null) {
      var D = s.baseState;
      o = 0, L = A = h = null, f = i;
      do {
        var E = f.lane, Z = f.eventTime;
        if ((r & E) === E) {
          L !== null && (L = L.next = {
            eventTime: Z,
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          });
          e: {
            var $ = e, ee = f;
            switch (E = t, Z = n, ee.tag) {
              case 1:
                if ($ = ee.payload, typeof $ == "function") {
                  D = $.call(Z, D, E);
                  break e;
                }
                D = $;
                break e;
              case 3:
                $.flags = $.flags & -65537 | 128;
              case 0:
                if ($ = ee.payload, E = typeof $ == "function" ? $.call(Z, D, E) : $, E == null) break e;
                D = W({}, D, E);
                break e;
              case 2:
                St = !0;
            }
          }
          f.callback !== null && f.lane !== 0 && (e.flags |= 64, E = s.effects, E === null ? s.effects = [f] : E.push(f));
        } else Z = { eventTime: Z, lane: E, tag: f.tag, payload: f.payload, callback: f.callback, next: null }, L === null ? (A = L = Z, h = D) : L = L.next = Z, o |= E;
        if (f = f.next, f === null) {
          if (f = s.shared.pending, f === null) break;
          E = f, f = E.next, E.next = null, s.lastBaseUpdate = E, s.shared.pending = null;
        }
      } while (!0);
      if (L === null && (h = D), s.baseState = h, s.firstBaseUpdate = A, s.lastBaseUpdate = L, t = s.shared.interleaved, t !== null) {
        s = t;
        do
          o |= s.lane, s = s.next;
        while (s !== t);
      } else i === null && (s.shared.lanes = 0);
      Gt |= o, e.lanes = o, e.memoizedState = D;
    }
  }
  function Z2(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], s = r.callback;
      if (s !== null) {
        if (r.callback = null, r = n, typeof s != "function") throw Error(u(191, s));
        s.call(r);
      }
    }
  }
  var sr = {}, b0 = At(sr), ir = At(sr), ar = At(sr);
  function Vt(e) {
    if (e === sr) throw Error(u(174));
    return e;
  }
  function Bs(e, t) {
    switch (Qe(ar, t), Qe(ir, e), Qe(b0, sr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : q0(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = q0(t, e);
    }
    Ie(b0), Qe(b0, t);
  }
  function An() {
    Ie(b0), Ie(ir), Ie(ar);
  }
  function b2(e) {
    Vt(ar.current);
    var t = Vt(b0.current), n = q0(t, e.type);
    t !== n && (Qe(ir, e), Qe(b0, n));
  }
  function Qs(e) {
    ir.current === e && (Ie(b0), Ie(ir));
  }
  var We = At(0);
  function ol(e) {
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
  var Hs = [];
  function Is() {
    for (var e = 0; e < Hs.length; e++) Hs[e]._workInProgressVersionPrimary = null;
    Hs.length = 0;
  }
  var ul = F.ReactCurrentDispatcher, Os = F.ReactCurrentBatchConfig, Jt = 0, Fe = null, Ze = null, _e = null, cl = !1, or = !1, ur = 0, pc = 0;
  function i0() {
    throw Error(u(321));
  }
  function Us(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!U0(e[n], t[n])) return !1;
    return !0;
  }
  function Ws(e, t, n, r, s, i) {
    if (Jt = i, Fe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ul.current = e === null || e.memoizedState === null ? gc : xc, e = n(r, s), or) {
      i = 0;
      do {
        if (or = !1, ur = 0, 25 <= i) throw Error(u(301));
        i += 1, _e = Ze = null, t.updateQueue = null, ul.current = wc, e = n(r, s);
      } while (or);
    }
    if (ul.current = hl, t = Ze !== null && Ze.next !== null, Jt = 0, _e = Ze = Fe = null, cl = !1, t) throw Error(u(300));
    return e;
  }
  function Fs() {
    var e = ur !== 0;
    return ur = 0, e;
  }
  function _0() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return _e === null ? Fe.memoizedState = _e = e : _e = _e.next = e, _e;
  }
  function D0() {
    if (Ze === null) {
      var e = Fe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ze.next;
    var t = _e === null ? Fe.memoizedState : _e.next;
    if (t !== null) _e = t, Ze = e;
    else {
      if (e === null) throw Error(u(310));
      Ze = e, e = { memoizedState: Ze.memoizedState, baseState: Ze.baseState, baseQueue: Ze.baseQueue, queue: Ze.queue, next: null }, _e === null ? Fe.memoizedState = _e = e : _e = _e.next = e;
    }
    return _e;
  }
  function cr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Xs(e) {
    var t = D0(), n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = Ze, s = r.baseQueue, i = n.pending;
    if (i !== null) {
      if (s !== null) {
        var o = s.next;
        s.next = i.next, i.next = o;
      }
      r.baseQueue = s = i, n.pending = null;
    }
    if (s !== null) {
      i = s.next, r = r.baseState;
      var f = o = null, h = null, A = i;
      do {
        var L = A.lane;
        if ((Jt & L) === L) h !== null && (h = h.next = { lane: 0, action: A.action, hasEagerState: A.hasEagerState, eagerState: A.eagerState, next: null }), r = A.hasEagerState ? A.eagerState : e(r, A.action);
        else {
          var D = {
            lane: L,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          };
          h === null ? (f = h = D, o = r) : h = h.next = D, Fe.lanes |= L, Gt |= L;
        }
        A = A.next;
      } while (A !== null && A !== i);
      h === null ? o = r : h.next = f, U0(r, t.memoizedState) || (y0 = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = h, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      s = e;
      do
        i = s.lane, Fe.lanes |= i, Gt |= i, s = s.next;
      while (s !== e);
    } else s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Vs(e) {
    var t = D0(), n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, s = n.pending, i = t.memoizedState;
    if (s !== null) {
      n.pending = null;
      var o = s = s.next;
      do
        i = e(i, o.action), o = o.next;
      while (o !== s);
      U0(i, t.memoizedState) || (y0 = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, r];
  }
  function _2() {
  }
  function $2(e, t) {
    var n = Fe, r = D0(), s = t(), i = !U0(r.memoizedState, s);
    if (i && (r.memoizedState = s, y0 = !0), r = r.queue, Js(na.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || _e !== null && _e.memoizedState.tag & 1) {
      if (n.flags |= 2048, dr(9, ta.bind(null, n, r, s, t), void 0, null), $e === null) throw Error(u(349));
      (Jt & 30) !== 0 || ea(n, t, s);
    }
    return s;
  }
  function ea(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Fe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Fe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function ta(e, t, n, r) {
    t.value = n, t.getSnapshot = r, ra(t) && la(e);
  }
  function na(e, t, n) {
    return n(function() {
      ra(t) && la(e);
    });
  }
  function ra(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !U0(e, n);
    } catch {
      return !0;
    }
  }
  function la(e) {
    var t = ut(e, 1);
    t !== null && J0(t, e, 1, -1);
  }
  function sa(e) {
    var t = _0();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: cr, lastRenderedState: e }, t.queue = e, e = e.dispatch = yc.bind(null, Fe, e), [t.memoizedState, e];
  }
  function dr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Fe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Fe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function ia() {
    return D0().memoizedState;
  }
  function dl(e, t, n, r) {
    var s = _0();
    Fe.flags |= e, s.memoizedState = dr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function fl(e, t, n, r) {
    var s = D0();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Ze !== null) {
      var o = Ze.memoizedState;
      if (i = o.destroy, r !== null && Us(r, o.deps)) {
        s.memoizedState = dr(t, n, i, r);
        return;
      }
    }
    Fe.flags |= e, s.memoizedState = dr(1 | t, n, i, r);
  }
  function aa(e, t) {
    return dl(8390656, 8, e, t);
  }
  function Js(e, t) {
    return fl(2048, 8, e, t);
  }
  function oa(e, t) {
    return fl(4, 2, e, t);
  }
  function ua(e, t) {
    return fl(4, 4, e, t);
  }
  function ca(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function da(e, t, n) {
    return n = n != null ? n.concat([e]) : null, fl(4, 4, ca.bind(null, t, e), n);
  }
  function Gs() {
  }
  function fa(e, t) {
    var n = D0();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Us(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function ha(e, t) {
    var n = D0();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Us(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function pa(e, t, n) {
    return (Jt & 21) === 0 ? (e.baseState && (e.baseState = !1, y0 = !0), e.memoizedState = n) : (U0(n, t) || (n = Vi(), Fe.lanes |= n, Gt |= n, e.baseState = !0), t);
  }
  function mc(e, t) {
    var n = Me;
    Me = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Os.transition;
    Os.transition = {};
    try {
      e(!1), t();
    } finally {
      Me = n, Os.transition = r;
    }
  }
  function ma() {
    return D0().memoizedState;
  }
  function vc(e, t, n) {
    var r = Et(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, va(e)) ya(t, n);
    else if (n = q2(e, t, n, r), n !== null) {
      var s = f0();
      J0(n, e, r, s), ga(n, t, r);
    }
  }
  function yc(e, t, n) {
    var r = Et(e), s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (va(e)) ya(t, s);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
        var o = t.lastRenderedState, f = i(o, n);
        if (s.hasEagerState = !0, s.eagerState = f, U0(f, o)) {
          var h = t.interleaved;
          h === null ? (s.next = s, Ds(t)) : (s.next = h.next, h.next = s), t.interleaved = s;
          return;
        }
      } catch {
      } finally {
      }
      n = q2(e, t, s, r), n !== null && (s = f0(), J0(n, e, r, s), ga(n, t, r));
    }
  }
  function va(e) {
    var t = e.alternate;
    return e === Fe || t !== null && t === Fe;
  }
  function ya(e, t) {
    or = cl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function ga(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Kl(e, n);
    }
  }
  var hl = { readContext: M0, useCallback: i0, useContext: i0, useEffect: i0, useImperativeHandle: i0, useInsertionEffect: i0, useLayoutEffect: i0, useMemo: i0, useReducer: i0, useRef: i0, useState: i0, useDebugValue: i0, useDeferredValue: i0, useTransition: i0, useMutableSource: i0, useSyncExternalStore: i0, useId: i0, unstable_isNewReconciler: !1 }, gc = { readContext: M0, useCallback: function(e, t) {
    return _0().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: M0, useEffect: aa, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, dl(
      4194308,
      4,
      ca.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return dl(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return dl(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = _0();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = _0();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = vc.bind(null, Fe, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = _0();
    return e = { current: e }, t.memoizedState = e;
  }, useState: sa, useDebugValue: Gs, useDeferredValue: function(e) {
    return _0().memoizedState = e;
  }, useTransition: function() {
    var e = sa(!1), t = e[0];
    return e = mc.bind(null, e[1]), _0().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Fe, s = _0();
    if (Ue) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else {
      if (n = t(), $e === null) throw Error(u(349));
      (Jt & 30) !== 0 || ea(r, t, n);
    }
    s.memoizedState = n;
    var i = { value: n, getSnapshot: t };
    return s.queue = i, aa(na.bind(
      null,
      r,
      i,
      e
    ), [e]), r.flags |= 2048, dr(9, ta.bind(null, r, i, n, t), void 0, null), n;
  }, useId: function() {
    var e = _0(), t = $e.identifierPrefix;
    if (Ue) {
      var n = ot, r = at;
      n = (r & ~(1 << 32 - O0(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ur++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = pc++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, xc = {
    readContext: M0,
    useCallback: fa,
    useContext: M0,
    useEffect: Js,
    useImperativeHandle: da,
    useInsertionEffect: oa,
    useLayoutEffect: ua,
    useMemo: ha,
    useReducer: Xs,
    useRef: ia,
    useState: function() {
      return Xs(cr);
    },
    useDebugValue: Gs,
    useDeferredValue: function(e) {
      var t = D0();
      return pa(t, Ze.memoizedState, e);
    },
    useTransition: function() {
      var e = Xs(cr)[0], t = D0().memoizedState;
      return [e, t];
    },
    useMutableSource: _2,
    useSyncExternalStore: $2,
    useId: ma,
    unstable_isNewReconciler: !1
  }, wc = { readContext: M0, useCallback: fa, useContext: M0, useEffect: Js, useImperativeHandle: da, useInsertionEffect: oa, useLayoutEffect: ua, useMemo: ha, useReducer: Vs, useRef: ia, useState: function() {
    return Vs(cr);
  }, useDebugValue: Gs, useDeferredValue: function(e) {
    var t = D0();
    return Ze === null ? t.memoizedState = e : pa(t, Ze.memoizedState, e);
  }, useTransition: function() {
    var e = Vs(cr)[0], t = D0().memoizedState;
    return [e, t];
  }, useMutableSource: _2, useSyncExternalStore: $2, useId: ma, unstable_isNewReconciler: !1 };
  function F0(e, t) {
    if (e && e.defaultProps) {
      t = W({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function qs(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : W({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var pl = { isMounted: function(e) {
    return (e = e._reactInternals) ? I0(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = f0(), s = Et(e), i = ct(r, s);
    i.payload = t, n != null && (i.callback = n), t = Nt(e, i, s), t !== null && (J0(t, e, s, r), il(t, e, s));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = f0(), s = Et(e), i = ct(r, s);
    i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Nt(e, i, s), t !== null && (J0(t, e, s, r), il(t, e, s));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = f0(), r = Et(e), s = ct(n, r);
    s.tag = 2, t != null && (s.callback = t), t = Nt(e, s, r), t !== null && (J0(t, e, r, n), il(t, e, r));
  } };
  function xa(e, t, n, r, s, i, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !bn(n, r) || !bn(s, i) : !0;
  }
  function wa(e, t, n) {
    var r = !1, s = kt, i = t.contextType;
    return typeof i == "object" && i !== null ? i = M0(i) : (s = v0(t) ? Ut : s0.current, r = t.contextTypes, i = (r = r != null) ? pn(e, s) : kt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = pl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = i), t;
  }
  function Aa(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && pl.enqueueReplaceState(t, t.state, null);
  }
  function Ks(e, t, n, r) {
    var s = e.stateNode;
    s.props = n, s.state = e.memoizedState, s.refs = {}, Ts(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? s.context = M0(i) : (i = v0(t) ? Ut : s0.current, s.context = pn(e, i)), s.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (qs(e, t, i, n), s.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), t !== s.state && pl.enqueueReplaceState(s, s.state, null), al(e, n, s, r), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function kn(e, t) {
    try {
      var n = "", r = t;
      do
        n += P(r), r = r.return;
      while (r);
      var s = n;
    } catch (i) {
      s = `
Error generating stack: ` + i.message + `
` + i.stack;
    }
    return { value: e, source: t, stack: s, digest: null };
  }
  function Ys(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Zs(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Ac = typeof WeakMap == "function" ? WeakMap : Map;
  function ka(e, t, n) {
    n = ct(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      Al || (Al = !0, di = r), Zs(e, t);
    }, n;
  }
  function ja(e, t, n) {
    n = ct(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var s = t.value;
      n.payload = function() {
        return r(s);
      }, n.callback = function() {
        Zs(e, t);
      };
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
      Zs(e, t), typeof r != "function" && (Ct === null ? Ct = /* @__PURE__ */ new Set([this]) : Ct.add(this));
      var o = t.stack;
      this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
    }), n;
  }
  function Sa(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Ac();
      var s = /* @__PURE__ */ new Set();
      r.set(t, s);
    } else s = r.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), r.set(t, s));
    s.has(n) || (s.add(n), e = Bc.bind(null, e, t, n), t.then(e, e));
  }
  function Na(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Pa(e, t, n, r, s) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ct(-1, 1), t.tag = 2, Nt(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = s, e);
  }
  var kc = F.ReactCurrentOwner, y0 = !1;
  function d0(e, t, n, r) {
    t.child = e === null ? G2(t, null, n, r) : gn(t, e.child, n, r);
  }
  function Ca(e, t, n, r, s) {
    n = n.render;
    var i = t.ref;
    return wn(t, s), r = Ws(e, t, n, r, i, s), n = Fs(), e !== null && !y0 ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, dt(e, t, s)) : (Ue && n && Ss(t), t.flags |= 1, d0(e, t, r, s), t.child);
  }
  function za(e, t, n, r, s) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !gi(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Ea(e, t, i, r, s)) : (e = Cl(n.type, null, r, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, (e.lanes & s) === 0) {
      var o = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : bn, n(o, r) && e.ref === t.ref) return dt(e, t, s);
    }
    return t.flags |= 1, e = Rt(i, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Ea(e, t, n, r, s) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (bn(i, r) && e.ref === t.ref) if (y0 = !1, t.pendingProps = r = i, (e.lanes & s) !== 0) (e.flags & 131072) !== 0 && (y0 = !0);
      else return t.lanes = e.lanes, dt(e, t, s);
    }
    return bs(e, t, n, r, s);
  }
  function La(e, t, n) {
    var r = t.pendingProps, s = r.children, i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Qe(Sn, C0), C0 |= n;
    else {
      if ((n & 1073741824) === 0) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Qe(Sn, C0), C0 |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Qe(Sn, C0), C0 |= r;
    }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Qe(Sn, C0), C0 |= r;
    return d0(e, t, s, n), t.child;
  }
  function Ra(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function bs(e, t, n, r, s) {
    var i = v0(n) ? Ut : s0.current;
    return i = pn(t, i), wn(t, s), n = Ws(e, t, n, r, i, s), r = Fs(), e !== null && !y0 ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, dt(e, t, s)) : (Ue && r && Ss(t), t.flags |= 1, d0(e, t, n, s), t.child);
  }
  function Ma(e, t, n, r, s) {
    if (v0(n)) {
      var i = !0;
      _r(t);
    } else i = !1;
    if (wn(t, s), t.stateNode === null) vl(e, t), wa(t, n, r), Ks(t, n, r, s), r = !0;
    else if (e === null) {
      var o = t.stateNode, f = t.memoizedProps;
      o.props = f;
      var h = o.context, A = n.contextType;
      typeof A == "object" && A !== null ? A = M0(A) : (A = v0(n) ? Ut : s0.current, A = pn(t, A));
      var L = n.getDerivedStateFromProps, D = typeof L == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      D || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (f !== r || h !== A) && Aa(t, o, r, A), St = !1;
      var E = t.memoizedState;
      o.state = E, al(t, r, o, s), h = t.memoizedState, f !== r || E !== h || m0.current || St ? (typeof L == "function" && (qs(t, n, L, r), h = t.memoizedState), (f = St || xa(t, n, f, r, E, h, A)) ? (D || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = h), o.props = r, o.state = h, o.context = A, r = f) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      o = t.stateNode, K2(e, t), f = t.memoizedProps, A = t.type === t.elementType ? f : F0(t.type, f), o.props = A, D = t.pendingProps, E = o.context, h = n.contextType, typeof h == "object" && h !== null ? h = M0(h) : (h = v0(n) ? Ut : s0.current, h = pn(t, h));
      var Z = n.getDerivedStateFromProps;
      (L = typeof Z == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (f !== D || E !== h) && Aa(t, o, r, h), St = !1, E = t.memoizedState, o.state = E, al(t, r, o, s);
      var $ = t.memoizedState;
      f !== D || E !== $ || m0.current || St ? (typeof Z == "function" && (qs(t, n, Z, r), $ = t.memoizedState), (A = St || xa(t, n, A, r, E, $, h) || !1) ? (L || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, $, h), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, $, h)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || f === e.memoizedProps && E === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && E === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = $), o.props = r, o.state = $, o.context = h, r = A) : (typeof o.componentDidUpdate != "function" || f === e.memoizedProps && E === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && E === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return _s(e, t, n, r, i, s);
  }
  function _s(e, t, n, r, s, i) {
    Ra(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return s && H2(t, n, !1), dt(e, t, i);
    r = t.stateNode, kc.current = t;
    var f = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = gn(t, e.child, null, i), t.child = gn(t, null, f, i)) : d0(e, t, f, i), t.memoizedState = r.state, s && H2(t, n, !0), t.child;
  }
  function Da(e) {
    var t = e.stateNode;
    t.pendingContext ? B2(e, t.pendingContext, t.pendingContext !== t.context) : t.context && B2(e, t.context, !1), Bs(e, t.containerInfo);
  }
  function Ta(e, t, n, r, s) {
    return yn(), zs(s), t.flags |= 256, d0(e, t, n, r), t.child;
  }
  var $s = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ei(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ba(e, t, n) {
    var r = t.pendingProps, s = We.current, i = !1, o = (t.flags & 128) !== 0, f;
    if ((f = o) || (f = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0), f ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1), Qe(We, s & 1), e === null)
      return Cs(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = zl(o, r, 0, null), e = Zt(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = ei(n), t.memoizedState = $s, e) : ti(t, o));
    if (s = e.memoizedState, s !== null && (f = s.dehydrated, f !== null)) return jc(e, t, o, r, f, s, n);
    if (i) {
      i = r.fallback, o = t.mode, s = e.child, f = s.sibling;
      var h = { mode: "hidden", children: r.children };
      return (o & 1) === 0 && t.child !== s ? (r = t.child, r.childLanes = 0, r.pendingProps = h, t.deletions = null) : (r = Rt(s, h), r.subtreeFlags = s.subtreeFlags & 14680064), f !== null ? i = Rt(f, i) : (i = Zt(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? ei(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = $s, r;
    }
    return i = e.child, e = i.sibling, r = Rt(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function ti(e, t) {
    return t = zl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function ml(e, t, n, r) {
    return r !== null && zs(r), gn(t, e.child, null, n), e = ti(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function jc(e, t, n, r, s, i, o) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Ys(Error(u(422))), ml(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, s = t.mode, r = zl({ mode: "visible", children: r.children }, s, 0, null), i = Zt(i, s, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && gn(t, e.child, null, o), t.child.memoizedState = ei(o), t.memoizedState = $s, i);
    if ((t.mode & 1) === 0) return ml(e, t, o, null);
    if (s.data === "$!") {
      if (r = s.nextSibling && s.nextSibling.dataset, r) var f = r.dgst;
      return r = f, i = Error(u(419)), r = Ys(i, r, void 0), ml(e, t, o, r);
    }
    if (f = (o & e.childLanes) !== 0, y0 || f) {
      if (r = $e, r !== null) {
        switch (o & -o) {
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
        s = (s & (r.suspendedLanes | o)) !== 0 ? 0 : s, s !== 0 && s !== i.retryLane && (i.retryLane = s, ut(e, s), J0(r, e, s, -1));
      }
      return yi(), r = Ys(Error(u(421))), ml(e, t, o, r);
    }
    return s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Qc.bind(null, e), s._reactRetry = t, null) : (e = i.treeContext, P0 = wt(s.nextSibling), N0 = t, Ue = !0, W0 = null, e !== null && (L0[R0++] = at, L0[R0++] = ot, L0[R0++] = Wt, at = e.id, ot = e.overflow, Wt = t), t = ti(t, r.children), t.flags |= 4096, t);
  }
  function Qa(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ms(e.return, t, n);
  }
  function ni(e, t, n, r, s) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: s } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = s);
  }
  function Ha(e, t, n) {
    var r = t.pendingProps, s = r.revealOrder, i = r.tail;
    if (d0(e, t, r.children, n), r = We.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Qa(e, n, t);
        else if (e.tag === 19) Qa(e, n, t);
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
    if (Qe(We, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; ) e = n.alternate, e !== null && ol(e) === null && (s = n), n = n.sibling;
        n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), ni(t, !1, s, n, i);
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (e = s.alternate, e !== null && ol(e) === null) {
            t.child = s;
            break;
          }
          e = s.sibling, s.sibling = n, n = s, s = e;
        }
        ni(t, !0, n, null, i);
        break;
      case "together":
        ni(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function vl(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function dt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Gt |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (e = t.child, n = Rt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Rt(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Sc(e, t, n) {
    switch (t.tag) {
      case 3:
        Da(t), yn();
        break;
      case 5:
        b2(t);
        break;
      case 1:
        v0(t.type) && _r(t);
        break;
      case 4:
        Bs(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, s = t.memoizedProps.value;
        Qe(ll, r._currentValue), r._currentValue = s;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Qe(We, We.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Ba(e, t, n) : (Qe(We, We.current & 1), e = dt(e, t, n), e !== null ? e.sibling : null);
        Qe(We, We.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return Ha(e, t, n);
          t.flags |= 128;
        }
        if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Qe(We, We.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, La(e, t, n);
    }
    return dt(e, t, n);
  }
  var Ia, ri, Oa, Ua;
  Ia = function(e, t) {
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
  }, ri = function() {
  }, Oa = function(e, t, n, r) {
    var s = e.memoizedProps;
    if (s !== r) {
      e = t.stateNode, Vt(b0.current);
      var i = null;
      switch (n) {
        case "input":
          s = Ye(e, s), r = Ye(e, r), i = [];
          break;
        case "select":
          s = W({}, s, { value: void 0 }), r = W({}, r, { value: void 0 }), i = [];
          break;
        case "textarea":
          s = tt(e, s), r = tt(e, r), i = [];
          break;
        default:
          typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Yr);
      }
      lt(n, r);
      var o;
      n = null;
      for (A in s) if (!r.hasOwnProperty(A) && s.hasOwnProperty(A) && s[A] != null) if (A === "style") {
        var f = s[A];
        for (o in f) f.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
      } else A !== "dangerouslySetInnerHTML" && A !== "children" && A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && A !== "autoFocus" && (v.hasOwnProperty(A) ? i || (i = []) : (i = i || []).push(A, null));
      for (A in r) {
        var h = r[A];
        if (f = s?.[A], r.hasOwnProperty(A) && h !== f && (h != null || f != null)) if (A === "style") if (f) {
          for (o in f) !f.hasOwnProperty(o) || h && h.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
          for (o in h) h.hasOwnProperty(o) && f[o] !== h[o] && (n || (n = {}), n[o] = h[o]);
        } else n || (i || (i = []), i.push(
          A,
          n
        )), n = h;
        else A === "dangerouslySetInnerHTML" ? (h = h ? h.__html : void 0, f = f ? f.__html : void 0, h != null && f !== h && (i = i || []).push(A, h)) : A === "children" ? typeof h != "string" && typeof h != "number" || (i = i || []).push(A, "" + h) : A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && (v.hasOwnProperty(A) ? (h != null && A === "onScroll" && He("scroll", e), i || f === h || (i = [])) : (i = i || []).push(A, h));
      }
      n && (i = i || []).push("style", n);
      var A = i;
      (t.updateQueue = A) && (t.flags |= 4);
    }
  }, Ua = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function fr(e, t) {
    if (!Ue) switch (e.tailMode) {
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
  function a0(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags & 14680064, r |= s.flags & 14680064, s.return = e, s = s.sibling;
    else for (s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags, r |= s.flags, s.return = e, s = s.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Nc(e, t, n) {
    var r = t.pendingProps;
    switch (Ns(t), t.tag) {
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
        return a0(t), null;
      case 1:
        return v0(t.type) && br(), a0(t), null;
      case 3:
        return r = t.stateNode, An(), Ie(m0), Ie(s0), Is(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (nl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, W0 !== null && (pi(W0), W0 = null))), ri(e, t), a0(t), null;
      case 5:
        Qs(t);
        var s = Vt(ar.current);
        if (n = t.type, e !== null && t.stateNode != null) Oa(e, t, n, r, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(u(166));
            return a0(t), null;
          }
          if (e = Vt(b0.current), nl(t)) {
            r = t.stateNode, n = t.type;
            var i = t.memoizedProps;
            switch (r[Z0] = t, r[nr] = i, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                He("cancel", r), He("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                He("load", r);
                break;
              case "video":
              case "audio":
                for (s = 0; s < $n.length; s++) He($n[s], r);
                break;
              case "source":
                He("error", r);
                break;
              case "img":
              case "image":
              case "link":
                He(
                  "error",
                  r
                ), He("load", r);
                break;
              case "details":
                He("toggle", r);
                break;
              case "input":
                Ge(r, i), He("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!i.multiple }, He("invalid", r);
                break;
              case "textarea":
                k0(r, i), He("invalid", r);
            }
            lt(n, i), s = null;
            for (var o in i) if (i.hasOwnProperty(o)) {
              var f = i[o];
              o === "children" ? typeof f == "string" ? r.textContent !== f && (i.suppressHydrationWarning !== !0 && Kr(r.textContent, f, e), s = ["children", f]) : typeof f == "number" && r.textContent !== "" + f && (i.suppressHydrationWarning !== !0 && Kr(
                r.textContent,
                f,
                e
              ), s = ["children", "" + f]) : v.hasOwnProperty(o) && f != null && o === "onScroll" && He("scroll", r);
            }
            switch (n) {
              case "input":
                De(r), qe(r, i, !0);
                break;
              case "textarea":
                De(r), Dt(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = Yr);
            }
            r = s, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            o = s.nodeType === 9 ? s : s.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Tt(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Z0] = t, e[nr] = r, Ia(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (o = Ht(n, r), n) {
                case "dialog":
                  He("cancel", e), He("close", e), s = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  He("load", e), s = r;
                  break;
                case "video":
                case "audio":
                  for (s = 0; s < $n.length; s++) He($n[s], e);
                  s = r;
                  break;
                case "source":
                  He("error", e), s = r;
                  break;
                case "img":
                case "image":
                case "link":
                  He(
                    "error",
                    e
                  ), He("load", e), s = r;
                  break;
                case "details":
                  He("toggle", e), s = r;
                  break;
                case "input":
                  Ge(e, r), s = Ye(e, r), He("invalid", e);
                  break;
                case "option":
                  s = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, s = W({}, r, { value: void 0 }), He("invalid", e);
                  break;
                case "textarea":
                  k0(e, r), s = tt(e, r), He("invalid", e);
                  break;
                default:
                  s = r;
              }
              lt(n, s), f = s;
              for (i in f) if (f.hasOwnProperty(i)) {
                var h = f[i];
                i === "style" ? rt(e, h) : i === "dangerouslySetInnerHTML" ? (h = h ? h.__html : void 0, h != null && $t(e, h)) : i === "children" ? typeof h == "string" ? (n !== "textarea" || h !== "") && j0(e, h) : typeof h == "number" && j0(e, "" + h) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (v.hasOwnProperty(i) ? h != null && i === "onScroll" && He("scroll", e) : h != null && de(e, i, h, o));
              }
              switch (n) {
                case "input":
                  De(e), qe(e, r, !1);
                  break;
                case "textarea":
                  De(e), Dt(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ae(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, i = r.value, i != null ? A0(e, !!r.multiple, i, !1) : r.defaultValue != null && A0(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof s.onClick == "function" && (e.onclick = Yr);
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
        return a0(t), null;
      case 6:
        if (e && t.stateNode != null) Ua(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(u(166));
          if (n = Vt(ar.current), Vt(b0.current), nl(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Z0] = t, (i = r.nodeValue !== n) && (e = N0, e !== null)) switch (e.tag) {
              case 3:
                Kr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Kr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            i && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Z0] = t, t.stateNode = r;
        }
        return a0(t), null;
      case 13:
        if (Ie(We), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Ue && P0 !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) X2(), yn(), t.flags |= 98560, i = !1;
          else if (i = nl(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(u(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(u(317));
              i[Z0] = t;
            } else yn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            a0(t), i = !1;
          } else W0 !== null && (pi(W0), W0 = null), i = !0;
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (We.current & 1) !== 0 ? be === 0 && (be = 3) : yi())), t.updateQueue !== null && (t.flags |= 4), a0(t), null);
      case 4:
        return An(), ri(e, t), e === null && er(t.stateNode.containerInfo), a0(t), null;
      case 10:
        return Rs(t.type._context), a0(t), null;
      case 17:
        return v0(t.type) && br(), a0(t), null;
      case 19:
        if (Ie(We), i = t.memoizedState, i === null) return a0(t), null;
        if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) fr(i, !1);
        else {
          if (be !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (o = ol(e), o !== null) {
              for (t.flags |= 128, fr(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Qe(We, We.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          i.tail !== null && Ve() > Nn && (t.flags |= 128, r = !0, fr(i, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = ol(o), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), fr(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !Ue) return a0(t), null;
          } else 2 * Ve() - i.renderingStartTime > Nn && n !== 1073741824 && (t.flags |= 128, r = !0, fr(i, !1), t.lanes = 4194304);
          i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ve(), t.sibling = null, n = We.current, Qe(We, r ? n & 1 | 2 : n & 1), t) : (a0(t), null);
      case 22:
      case 23:
        return vi(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (C0 & 1073741824) !== 0 && (a0(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : a0(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function Pc(e, t) {
    switch (Ns(t), t.tag) {
      case 1:
        return v0(t.type) && br(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return An(), Ie(m0), Ie(s0), Is(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Qs(t), null;
      case 13:
        if (Ie(We), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(u(340));
          yn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Ie(We), null;
      case 4:
        return An(), null;
      case 10:
        return Rs(t.type._context), null;
      case 22:
      case 23:
        return vi(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var yl = !1, o0 = !1, Cc = typeof WeakSet == "function" ? WeakSet : Set, _ = null;
  function jn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Xe(e, t, r);
    }
    else n.current = null;
  }
  function li(e, t, n) {
    try {
      n();
    } catch (r) {
      Xe(e, t, r);
    }
  }
  var Wa = !1;
  function zc(e, t) {
    if (vs = Hr, e = x2(), os(e)) {
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
          var o = 0, f = -1, h = -1, A = 0, L = 0, D = e, E = null;
          t: for (; ; ) {
            for (var Z; D !== n || s !== 0 && D.nodeType !== 3 || (f = o + s), D !== i || r !== 0 && D.nodeType !== 3 || (h = o + r), D.nodeType === 3 && (o += D.nodeValue.length), (Z = D.firstChild) !== null; )
              E = D, D = Z;
            for (; ; ) {
              if (D === e) break t;
              if (E === n && ++A === s && (f = o), E === i && ++L === r && (h = o), (Z = D.nextSibling) !== null) break;
              D = E, E = D.parentNode;
            }
            D = Z;
          }
          n = f === -1 || h === -1 ? null : { start: f, end: h };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (ys = { focusedElem: e, selectionRange: n }, Hr = !1, _ = t; _ !== null; ) if (t = _, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, _ = e;
    else for (; _ !== null; ) {
      t = _;
      try {
        var $ = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if ($ !== null) {
              var ee = $.memoizedProps, Je = $.memoizedState, g = t.stateNode, p = g.getSnapshotBeforeUpdate(t.elementType === t.type ? ee : F0(t.type, ee), Je);
              g.__reactInternalSnapshotBeforeUpdate = p;
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
      } catch (B) {
        Xe(t, t.return, B);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, _ = e;
        break;
      }
      _ = t.return;
    }
    return $ = Wa, Wa = !1, $;
  }
  function hr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var s = r = r.next;
      do {
        if ((s.tag & e) === e) {
          var i = s.destroy;
          s.destroy = void 0, i !== void 0 && li(t, n, i);
        }
        s = s.next;
      } while (s !== r);
    }
  }
  function gl(e, t) {
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
  function si(e) {
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
  function Fa(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Fa(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Z0], delete t[nr], delete t[As], delete t[cc], delete t[dc])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Xa(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Va(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Xa(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ii(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Yr));
    else if (r !== 4 && (e = e.child, e !== null)) for (ii(e, t, n), e = e.sibling; e !== null; ) ii(e, t, n), e = e.sibling;
  }
  function ai(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (ai(e, t, n), e = e.sibling; e !== null; ) ai(e, t, n), e = e.sibling;
  }
  var t0 = null, X0 = !1;
  function Pt(e, t, n) {
    for (n = n.child; n !== null; ) Ja(e, t, n), n = n.sibling;
  }
  function Ja(e, t, n) {
    if (Y0 && typeof Y0.onCommitFiberUnmount == "function") try {
      Y0.onCommitFiberUnmount(Rr, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        o0 || jn(n, t);
      case 6:
        var r = t0, s = X0;
        t0 = null, Pt(e, t, n), t0 = r, X0 = s, t0 !== null && (X0 ? (e = t0, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : t0.removeChild(n.stateNode));
        break;
      case 18:
        t0 !== null && (X0 ? (e = t0, n = n.stateNode, e.nodeType === 8 ? ws(e.parentNode, n) : e.nodeType === 1 && ws(e, n), Jn(e)) : ws(t0, n.stateNode));
        break;
      case 4:
        r = t0, s = X0, t0 = n.stateNode.containerInfo, X0 = !0, Pt(e, t, n), t0 = r, X0 = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!o0 && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          s = r = r.next;
          do {
            var i = s, o = i.destroy;
            i = i.tag, o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && li(n, t, o), s = s.next;
          } while (s !== r);
        }
        Pt(e, t, n);
        break;
      case 1:
        if (!o0 && (jn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (f) {
          Xe(n, t, f);
        }
        Pt(e, t, n);
        break;
      case 21:
        Pt(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (o0 = (r = o0) || n.memoizedState !== null, Pt(e, t, n), o0 = r) : Pt(e, t, n);
        break;
      default:
        Pt(e, t, n);
    }
  }
  function Ga(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Cc()), t.forEach(function(r) {
        var s = Hc.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      });
    }
  }
  function V0(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var i = e, o = t, f = o;
        e: for (; f !== null; ) {
          switch (f.tag) {
            case 5:
              t0 = f.stateNode, X0 = !1;
              break e;
            case 3:
              t0 = f.stateNode.containerInfo, X0 = !0;
              break e;
            case 4:
              t0 = f.stateNode.containerInfo, X0 = !0;
              break e;
          }
          f = f.return;
        }
        if (t0 === null) throw Error(u(160));
        Ja(i, o, s), t0 = null, X0 = !1;
        var h = s.alternate;
        h !== null && (h.return = null), s.return = null;
      } catch (A) {
        Xe(s, t, A);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) qa(t, e), t = t.sibling;
  }
  function qa(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (V0(t, e), $0(e), r & 4) {
          try {
            hr(3, e, e.return), gl(3, e);
          } catch (ee) {
            Xe(e, e.return, ee);
          }
          try {
            hr(5, e, e.return);
          } catch (ee) {
            Xe(e, e.return, ee);
          }
        }
        break;
      case 1:
        V0(t, e), $0(e), r & 512 && n !== null && jn(n, n.return);
        break;
      case 5:
        if (V0(t, e), $0(e), r & 512 && n !== null && jn(n, n.return), e.flags & 32) {
          var s = e.stateNode;
          try {
            j0(s, "");
          } catch (ee) {
            Xe(e, e.return, ee);
          }
        }
        if (r & 4 && (s = e.stateNode, s != null)) {
          var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, f = e.type, h = e.updateQueue;
          if (e.updateQueue = null, h !== null) try {
            f === "input" && i.type === "radio" && i.name != null && et(s, i), Ht(f, o);
            var A = Ht(f, i);
            for (o = 0; o < h.length; o += 2) {
              var L = h[o], D = h[o + 1];
              L === "style" ? rt(s, D) : L === "dangerouslySetInnerHTML" ? $t(s, D) : L === "children" ? j0(s, D) : de(s, L, D, A);
            }
            switch (f) {
              case "input":
                ke(s, i);
                break;
              case "textarea":
                nt(s, i);
                break;
              case "select":
                var E = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!i.multiple;
                var Z = i.value;
                Z != null ? A0(s, !!i.multiple, Z, !1) : E !== !!i.multiple && (i.defaultValue != null ? A0(
                  s,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : A0(s, !!i.multiple, i.multiple ? [] : "", !1));
            }
            s[nr] = i;
          } catch (ee) {
            Xe(e, e.return, ee);
          }
        }
        break;
      case 6:
        if (V0(t, e), $0(e), r & 4) {
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
        if (V0(t, e), $0(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Jn(t.containerInfo);
        } catch (ee) {
          Xe(e, e.return, ee);
        }
        break;
      case 4:
        V0(t, e), $0(e);
        break;
      case 13:
        V0(t, e), $0(e), s = e.child, s.flags & 8192 && (i = s.memoizedState !== null, s.stateNode.isHidden = i, !i || s.alternate !== null && s.alternate.memoizedState !== null || (ci = Ve())), r & 4 && Ga(e);
        break;
      case 22:
        if (L = n !== null && n.memoizedState !== null, e.mode & 1 ? (o0 = (A = o0) || L, V0(t, e), o0 = A) : V0(t, e), $0(e), r & 8192) {
          if (A = e.memoizedState !== null, (e.stateNode.isHidden = A) && !L && (e.mode & 1) !== 0) for (_ = e, L = e.child; L !== null; ) {
            for (D = _ = L; _ !== null; ) {
              switch (E = _, Z = E.child, E.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  hr(4, E, E.return);
                  break;
                case 1:
                  jn(E, E.return);
                  var $ = E.stateNode;
                  if (typeof $.componentWillUnmount == "function") {
                    r = E, n = E.return;
                    try {
                      t = r, $.props = t.memoizedProps, $.state = t.memoizedState, $.componentWillUnmount();
                    } catch (ee) {
                      Xe(r, n, ee);
                    }
                  }
                  break;
                case 5:
                  jn(E, E.return);
                  break;
                case 22:
                  if (E.memoizedState !== null) {
                    Za(D);
                    continue;
                  }
              }
              Z !== null ? (Z.return = E, _ = Z) : Za(D);
            }
            L = L.sibling;
          }
          e: for (L = null, D = e; ; ) {
            if (D.tag === 5) {
              if (L === null) {
                L = D;
                try {
                  s = D.stateNode, A ? (i = s.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (f = D.stateNode, h = D.memoizedProps.style, o = h != null && h.hasOwnProperty("display") ? h.display : null, f.style.display = Mn("display", o));
                } catch (ee) {
                  Xe(e, e.return, ee);
                }
              }
            } else if (D.tag === 6) {
              if (L === null) try {
                D.stateNode.nodeValue = A ? "" : D.memoizedProps;
              } catch (ee) {
                Xe(e, e.return, ee);
              }
            } else if ((D.tag !== 22 && D.tag !== 23 || D.memoizedState === null || D === e) && D.child !== null) {
              D.child.return = D, D = D.child;
              continue;
            }
            if (D === e) break e;
            for (; D.sibling === null; ) {
              if (D.return === null || D.return === e) break e;
              L === D && (L = null), D = D.return;
            }
            L === D && (L = null), D.sibling.return = D.return, D = D.sibling;
          }
        }
        break;
      case 19:
        V0(t, e), $0(e), r & 4 && Ga(e);
        break;
      case 21:
        break;
      default:
        V0(
          t,
          e
        ), $0(e);
    }
  }
  function $0(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Xa(n)) {
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
            r.flags & 32 && (j0(s, ""), r.flags &= -33);
            var i = Va(e);
            ai(e, i, s);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo, f = Va(e);
            ii(e, f, o);
            break;
          default:
            throw Error(u(161));
        }
      } catch (h) {
        Xe(e, e.return, h);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Ec(e, t, n) {
    _ = e, Ka(e);
  }
  function Ka(e, t, n) {
    for (var r = (e.mode & 1) !== 0; _ !== null; ) {
      var s = _, i = s.child;
      if (s.tag === 22 && r) {
        var o = s.memoizedState !== null || yl;
        if (!o) {
          var f = s.alternate, h = f !== null && f.memoizedState !== null || o0;
          f = yl;
          var A = o0;
          if (yl = o, (o0 = h) && !A) for (_ = s; _ !== null; ) o = _, h = o.child, o.tag === 22 && o.memoizedState !== null ? ba(s) : h !== null ? (h.return = o, _ = h) : ba(s);
          for (; i !== null; ) _ = i, Ka(i), i = i.sibling;
          _ = s, yl = f, o0 = A;
        }
        Ya(e);
      } else (s.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = s, _ = i) : Ya(e);
    }
  }
  function Ya(e) {
    for (; _ !== null; ) {
      var t = _;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              o0 || gl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !o0) if (n === null) r.componentDidMount();
              else {
                var s = t.elementType === t.type ? n.memoizedProps : F0(t.type, n.memoizedProps);
                r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var i = t.updateQueue;
              i !== null && Z2(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Z2(t, o, n);
              }
              break;
            case 5:
              var f = t.stateNode;
              if (n === null && t.flags & 4) {
                n = f;
                var h = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    h.autoFocus && n.focus();
                    break;
                  case "img":
                    h.src && (n.src = h.src);
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
                var A = t.alternate;
                if (A !== null) {
                  var L = A.memoizedState;
                  if (L !== null) {
                    var D = L.dehydrated;
                    D !== null && Jn(D);
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
          o0 || t.flags & 512 && si(t);
        } catch (E) {
          Xe(t, t.return, E);
        }
      }
      if (t === e) {
        _ = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, _ = n;
        break;
      }
      _ = t.return;
    }
  }
  function Za(e) {
    for (; _ !== null; ) {
      var t = _;
      if (t === e) {
        _ = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, _ = n;
        break;
      }
      _ = t.return;
    }
  }
  function ba(e) {
    for (; _ !== null; ) {
      var t = _;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              gl(4, t);
            } catch (h) {
              Xe(t, n, h);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var s = t.return;
              try {
                r.componentDidMount();
              } catch (h) {
                Xe(t, s, h);
              }
            }
            var i = t.return;
            try {
              si(t);
            } catch (h) {
              Xe(t, i, h);
            }
            break;
          case 5:
            var o = t.return;
            try {
              si(t);
            } catch (h) {
              Xe(t, o, h);
            }
        }
      } catch (h) {
        Xe(t, t.return, h);
      }
      if (t === e) {
        _ = null;
        break;
      }
      var f = t.sibling;
      if (f !== null) {
        f.return = t.return, _ = f;
        break;
      }
      _ = t.return;
    }
  }
  var Lc = Math.ceil, xl = F.ReactCurrentDispatcher, oi = F.ReactCurrentOwner, T0 = F.ReactCurrentBatchConfig, Ne = 0, $e = null, Ke = null, n0 = 0, C0 = 0, Sn = At(0), be = 0, pr = null, Gt = 0, wl = 0, ui = 0, mr = null, g0 = null, ci = 0, Nn = 1 / 0, ft = null, Al = !1, di = null, Ct = null, kl = !1, zt = null, jl = 0, vr = 0, fi = null, Sl = -1, Nl = 0;
  function f0() {
    return (Ne & 6) !== 0 ? Ve() : Sl !== -1 ? Sl : Sl = Ve();
  }
  function Et(e) {
    return (e.mode & 1) === 0 ? 1 : (Ne & 2) !== 0 && n0 !== 0 ? n0 & -n0 : hc.transition !== null ? (Nl === 0 && (Nl = Vi()), Nl) : (e = Me, e !== 0 || (e = window.event, e = e === void 0 ? 16 : $i(e.type)), e);
  }
  function J0(e, t, n, r) {
    if (50 < vr) throw vr = 0, fi = null, Error(u(185));
    Un(e, n, r), ((Ne & 2) === 0 || e !== $e) && (e === $e && ((Ne & 2) === 0 && (wl |= n), be === 4 && Lt(e, n0)), x0(e, r), n === 1 && Ne === 0 && (t.mode & 1) === 0 && (Nn = Ve() + 500, $r && jt()));
  }
  function x0(e, t) {
    var n = e.callbackNode;
    hu(e, t);
    var r = Tr(e, e === $e ? n0 : 0);
    if (r === 0) n !== null && Oe(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Oe(n), t === 1) e.tag === 0 ? fc($a.bind(null, e)) : I2($a.bind(null, e)), oc(function() {
        (Ne & 6) === 0 && jt();
      }), n = null;
      else {
        switch (Ji(r)) {
          case 1:
            n = Jl;
            break;
          case 4:
            n = Fi;
            break;
          case 16:
            n = Lr;
            break;
          case 536870912:
            n = Xi;
            break;
          default:
            n = Lr;
        }
        n = ao(n, _a.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function _a(e, t) {
    if (Sl = -1, Nl = 0, (Ne & 6) !== 0) throw Error(u(327));
    var n = e.callbackNode;
    if (Pn() && e.callbackNode !== n) return null;
    var r = Tr(e, e === $e ? n0 : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Pl(e, r);
    else {
      t = r;
      var s = Ne;
      Ne |= 2;
      var i = to();
      ($e !== e || n0 !== t) && (ft = null, Nn = Ve() + 500, Kt(e, t));
      do
        try {
          Dc();
          break;
        } catch (f) {
          eo(e, f);
        }
      while (!0);
      Ls(), xl.current = i, Ne = s, Ke !== null ? t = 0 : ($e = null, n0 = 0, t = be);
    }
    if (t !== 0) {
      if (t === 2 && (s = Gl(e), s !== 0 && (r = s, t = hi(e, s))), t === 1) throw n = pr, Kt(e, 0), Lt(e, r), x0(e, Ve()), n;
      if (t === 6) Lt(e, r);
      else {
        if (s = e.current.alternate, (r & 30) === 0 && !Rc(s) && (t = Pl(e, r), t === 2 && (i = Gl(e), i !== 0 && (r = i, t = hi(e, i))), t === 1)) throw n = pr, Kt(e, 0), Lt(e, r), x0(e, Ve()), n;
        switch (e.finishedWork = s, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            Yt(e, g0, ft);
            break;
          case 3:
            if (Lt(e, r), (r & 130023424) === r && (t = ci + 500 - Ve(), 10 < t)) {
              if (Tr(e, 0) !== 0) break;
              if (s = e.suspendedLanes, (s & r) !== r) {
                f0(), e.pingedLanes |= e.suspendedLanes & s;
                break;
              }
              e.timeoutHandle = xs(Yt.bind(null, e, g0, ft), t);
              break;
            }
            Yt(e, g0, ft);
            break;
          case 4:
            if (Lt(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, s = -1; 0 < r; ) {
              var o = 31 - O0(r);
              i = 1 << o, o = t[o], o > s && (s = o), r &= ~i;
            }
            if (r = s, r = Ve() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Lc(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = xs(Yt.bind(null, e, g0, ft), r);
              break;
            }
            Yt(e, g0, ft);
            break;
          case 5:
            Yt(e, g0, ft);
            break;
          default:
            throw Error(u(329));
        }
      }
    }
    return x0(e, Ve()), e.callbackNode === n ? _a.bind(null, e) : null;
  }
  function hi(e, t) {
    var n = mr;
    return e.current.memoizedState.isDehydrated && (Kt(e, t).flags |= 256), e = Pl(e, t), e !== 2 && (t = g0, g0 = n, t !== null && pi(t)), e;
  }
  function pi(e) {
    g0 === null ? g0 = e : g0.push.apply(g0, e);
  }
  function Rc(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var s = n[r], i = s.getSnapshot;
          s = s.value;
          try {
            if (!U0(i(), s)) return !1;
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
  function Lt(e, t) {
    for (t &= ~ui, t &= ~wl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - O0(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function $a(e) {
    if ((Ne & 6) !== 0) throw Error(u(327));
    Pn();
    var t = Tr(e, 0);
    if ((t & 1) === 0) return x0(e, Ve()), null;
    var n = Pl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Gl(e);
      r !== 0 && (t = r, n = hi(e, r));
    }
    if (n === 1) throw n = pr, Kt(e, 0), Lt(e, t), x0(e, Ve()), n;
    if (n === 6) throw Error(u(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Yt(e, g0, ft), x0(e, Ve()), null;
  }
  function mi(e, t) {
    var n = Ne;
    Ne |= 1;
    try {
      return e(t);
    } finally {
      Ne = n, Ne === 0 && (Nn = Ve() + 500, $r && jt());
    }
  }
  function qt(e) {
    zt !== null && zt.tag === 0 && (Ne & 6) === 0 && Pn();
    var t = Ne;
    Ne |= 1;
    var n = T0.transition, r = Me;
    try {
      if (T0.transition = null, Me = 1, e) return e();
    } finally {
      Me = r, T0.transition = n, Ne = t, (Ne & 6) === 0 && jt();
    }
  }
  function vi() {
    C0 = Sn.current, Ie(Sn);
  }
  function Kt(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, ac(n)), Ke !== null) for (n = Ke.return; n !== null; ) {
      var r = n;
      switch (Ns(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && br();
          break;
        case 3:
          An(), Ie(m0), Ie(s0), Is();
          break;
        case 5:
          Qs(r);
          break;
        case 4:
          An();
          break;
        case 13:
          Ie(We);
          break;
        case 19:
          Ie(We);
          break;
        case 10:
          Rs(r.type._context);
          break;
        case 22:
        case 23:
          vi();
      }
      n = n.return;
    }
    if ($e = e, Ke = e = Rt(e.current, null), n0 = C0 = t, be = 0, pr = null, ui = wl = Gt = 0, g0 = mr = null, Xt !== null) {
      for (t = 0; t < Xt.length; t++) if (n = Xt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var s = r.next, i = n.pending;
        if (i !== null) {
          var o = i.next;
          i.next = s, r.next = o;
        }
        n.pending = r;
      }
      Xt = null;
    }
    return e;
  }
  function eo(e, t) {
    do {
      var n = Ke;
      try {
        if (Ls(), ul.current = hl, cl) {
          for (var r = Fe.memoizedState; r !== null; ) {
            var s = r.queue;
            s !== null && (s.pending = null), r = r.next;
          }
          cl = !1;
        }
        if (Jt = 0, _e = Ze = Fe = null, or = !1, ur = 0, oi.current = null, n === null || n.return === null) {
          be = 1, pr = t, Ke = null;
          break;
        }
        e: {
          var i = e, o = n.return, f = n, h = t;
          if (t = n0, f.flags |= 32768, h !== null && typeof h == "object" && typeof h.then == "function") {
            var A = h, L = f, D = L.tag;
            if ((L.mode & 1) === 0 && (D === 0 || D === 11 || D === 15)) {
              var E = L.alternate;
              E ? (L.updateQueue = E.updateQueue, L.memoizedState = E.memoizedState, L.lanes = E.lanes) : (L.updateQueue = null, L.memoizedState = null);
            }
            var Z = Na(o);
            if (Z !== null) {
              Z.flags &= -257, Pa(Z, o, f, i, t), Z.mode & 1 && Sa(i, A, t), t = Z, h = A;
              var $ = t.updateQueue;
              if ($ === null) {
                var ee = /* @__PURE__ */ new Set();
                ee.add(h), t.updateQueue = ee;
              } else $.add(h);
              break e;
            } else {
              if ((t & 1) === 0) {
                Sa(i, A, t), yi();
                break e;
              }
              h = Error(u(426));
            }
          } else if (Ue && f.mode & 1) {
            var Je = Na(o);
            if (Je !== null) {
              (Je.flags & 65536) === 0 && (Je.flags |= 256), Pa(Je, o, f, i, t), zs(kn(h, f));
              break e;
            }
          }
          i = h = kn(h, f), be !== 4 && (be = 2), mr === null ? mr = [i] : mr.push(i), i = o;
          do {
            switch (i.tag) {
              case 3:
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var g = ka(i, h, t);
                Y2(i, g);
                break e;
              case 1:
                f = h;
                var p = i.type, x = i.stateNode;
                if ((i.flags & 128) === 0 && (typeof p.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (Ct === null || !Ct.has(x)))) {
                  i.flags |= 65536, t &= -t, i.lanes |= t;
                  var B = ja(i, f, t);
                  Y2(i, B);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        ro(n);
      } catch (ne) {
        t = ne, Ke === n && n !== null && (Ke = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function to() {
    var e = xl.current;
    return xl.current = hl, e === null ? hl : e;
  }
  function yi() {
    (be === 0 || be === 3 || be === 2) && (be = 4), $e === null || (Gt & 268435455) === 0 && (wl & 268435455) === 0 || Lt($e, n0);
  }
  function Pl(e, t) {
    var n = Ne;
    Ne |= 2;
    var r = to();
    ($e !== e || n0 !== t) && (ft = null, Kt(e, t));
    do
      try {
        Mc();
        break;
      } catch (s) {
        eo(e, s);
      }
    while (!0);
    if (Ls(), Ne = n, xl.current = r, Ke !== null) throw Error(u(261));
    return $e = null, n0 = 0, be;
  }
  function Mc() {
    for (; Ke !== null; ) no(Ke);
  }
  function Dc() {
    for (; Ke !== null && !p0(); ) no(Ke);
  }
  function no(e) {
    var t = io(e.alternate, e, C0);
    e.memoizedProps = e.pendingProps, t === null ? ro(e) : Ke = t, oi.current = null;
  }
  function ro(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Nc(n, t, C0), n !== null) {
          Ke = n;
          return;
        }
      } else {
        if (n = Pc(n, t), n !== null) {
          n.flags &= 32767, Ke = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          be = 6, Ke = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Ke = t;
        return;
      }
      Ke = t = e;
    } while (t !== null);
    be === 0 && (be = 5);
  }
  function Yt(e, t, n) {
    var r = Me, s = T0.transition;
    try {
      T0.transition = null, Me = 1, Tc(e, t, n, r);
    } finally {
      T0.transition = s, Me = r;
    }
    return null;
  }
  function Tc(e, t, n, r) {
    do
      Pn();
    while (zt !== null);
    if ((Ne & 6) !== 0) throw Error(u(327));
    n = e.finishedWork;
    var s = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(u(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (pu(e, i), e === $e && (Ke = $e = null, n0 = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || kl || (kl = !0, ao(Lr, function() {
      return Pn(), null;
    })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
      i = T0.transition, T0.transition = null;
      var o = Me;
      Me = 1;
      var f = Ne;
      Ne |= 4, oi.current = null, zc(e, n), qa(n, e), ec(ys), Hr = !!vs, ys = vs = null, e.current = n, Ec(n), rn(), Ne = f, Me = o, T0.transition = i;
    } else e.current = n;
    if (kl && (kl = !1, zt = e, jl = s), i = e.pendingLanes, i === 0 && (Ct = null), ou(n.stateNode), x0(e, Ve()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) s = t[n], r(s.value, { componentStack: s.stack, digest: s.digest });
    if (Al) throw Al = !1, e = di, di = null, e;
    return (jl & 1) !== 0 && e.tag !== 0 && Pn(), i = e.pendingLanes, (i & 1) !== 0 ? e === fi ? vr++ : (vr = 0, fi = e) : vr = 0, jt(), null;
  }
  function Pn() {
    if (zt !== null) {
      var e = Ji(jl), t = T0.transition, n = Me;
      try {
        if (T0.transition = null, Me = 16 > e ? 16 : e, zt === null) var r = !1;
        else {
          if (e = zt, zt = null, jl = 0, (Ne & 6) !== 0) throw Error(u(331));
          var s = Ne;
          for (Ne |= 4, _ = e.current; _ !== null; ) {
            var i = _, o = i.child;
            if ((_.flags & 16) !== 0) {
              var f = i.deletions;
              if (f !== null) {
                for (var h = 0; h < f.length; h++) {
                  var A = f[h];
                  for (_ = A; _ !== null; ) {
                    var L = _;
                    switch (L.tag) {
                      case 0:
                      case 11:
                      case 15:
                        hr(8, L, i);
                    }
                    var D = L.child;
                    if (D !== null) D.return = L, _ = D;
                    else for (; _ !== null; ) {
                      L = _;
                      var E = L.sibling, Z = L.return;
                      if (Fa(L), L === A) {
                        _ = null;
                        break;
                      }
                      if (E !== null) {
                        E.return = Z, _ = E;
                        break;
                      }
                      _ = Z;
                    }
                  }
                }
                var $ = i.alternate;
                if ($ !== null) {
                  var ee = $.child;
                  if (ee !== null) {
                    $.child = null;
                    do {
                      var Je = ee.sibling;
                      ee.sibling = null, ee = Je;
                    } while (ee !== null);
                  }
                }
                _ = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && o !== null) o.return = i, _ = o;
            else e: for (; _ !== null; ) {
              if (i = _, (i.flags & 2048) !== 0) switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  hr(9, i, i.return);
              }
              var g = i.sibling;
              if (g !== null) {
                g.return = i.return, _ = g;
                break e;
              }
              _ = i.return;
            }
          }
          var p = e.current;
          for (_ = p; _ !== null; ) {
            o = _;
            var x = o.child;
            if ((o.subtreeFlags & 2064) !== 0 && x !== null) x.return = o, _ = x;
            else e: for (o = p; _ !== null; ) {
              if (f = _, (f.flags & 2048) !== 0) try {
                switch (f.tag) {
                  case 0:
                  case 11:
                  case 15:
                    gl(9, f);
                }
              } catch (ne) {
                Xe(f, f.return, ne);
              }
              if (f === o) {
                _ = null;
                break e;
              }
              var B = f.sibling;
              if (B !== null) {
                B.return = f.return, _ = B;
                break e;
              }
              _ = f.return;
            }
          }
          if (Ne = s, jt(), Y0 && typeof Y0.onPostCommitFiberRoot == "function") try {
            Y0.onPostCommitFiberRoot(Rr, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        Me = n, T0.transition = t;
      }
    }
    return !1;
  }
  function lo(e, t, n) {
    t = kn(n, t), t = ka(e, t, 1), e = Nt(e, t, 1), t = f0(), e !== null && (Un(e, 1, t), x0(e, t));
  }
  function Xe(e, t, n) {
    if (e.tag === 3) lo(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        lo(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ct === null || !Ct.has(r))) {
          e = kn(n, e), e = ja(t, e, 1), t = Nt(t, e, 1), e = f0(), t !== null && (Un(t, 1, e), x0(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Bc(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = f0(), e.pingedLanes |= e.suspendedLanes & n, $e === e && (n0 & n) === n && (be === 4 || be === 3 && (n0 & 130023424) === n0 && 500 > Ve() - ci ? Kt(e, 0) : ui |= n), x0(e, t);
  }
  function so(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Dr, Dr <<= 1, (Dr & 130023424) === 0 && (Dr = 4194304)));
    var n = f0();
    e = ut(e, t), e !== null && (Un(e, t, n), x0(e, n));
  }
  function Qc(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), so(e, n);
  }
  function Hc(e, t) {
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
    r !== null && r.delete(t), so(e, n);
  }
  var io;
  io = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || m0.current) y0 = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return y0 = !1, Sc(e, t, n);
      y0 = (e.flags & 131072) !== 0;
    }
    else y0 = !1, Ue && (t.flags & 1048576) !== 0 && O2(t, tl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        vl(e, t), e = t.pendingProps;
        var s = pn(t, s0.current);
        wn(t, n), s = Ws(null, t, r, e, s, n);
        var i = Fs();
        return t.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, v0(r) ? (i = !0, _r(t)) : i = !1, t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, Ts(t), s.updater = pl, t.stateNode = s, s._reactInternals = t, Ks(t, r, e, n), t = _s(null, t, r, !0, i, n)) : (t.tag = 0, Ue && i && Ss(t), d0(null, t, s, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (vl(e, t), e = t.pendingProps, s = r._init, r = s(r._payload), t.type = r, s = t.tag = Oc(r), e = F0(r, e), s) {
            case 0:
              t = bs(null, t, r, e, n);
              break e;
            case 1:
              t = Ma(null, t, r, e, n);
              break e;
            case 11:
              t = Ca(null, t, r, e, n);
              break e;
            case 14:
              t = za(null, t, r, F0(r.type, e), n);
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
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : F0(r, s), bs(e, t, r, s, n);
      case 1:
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : F0(r, s), Ma(e, t, r, s, n);
      case 3:
        e: {
          if (Da(t), e === null) throw Error(u(387));
          r = t.pendingProps, i = t.memoizedState, s = i.element, K2(e, t), al(t, r, null, n);
          var o = t.memoizedState;
          if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            s = kn(Error(u(423)), t), t = Ta(e, t, r, n, s);
            break e;
          } else if (r !== s) {
            s = kn(Error(u(424)), t), t = Ta(e, t, r, n, s);
            break e;
          } else for (P0 = wt(t.stateNode.containerInfo.firstChild), N0 = t, Ue = !0, W0 = null, n = G2(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (yn(), r === s) {
              t = dt(e, t, n);
              break e;
            }
            d0(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return b2(t), e === null && Cs(t), r = t.type, s = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = s.children, gs(r, s) ? o = null : i !== null && gs(r, i) && (t.flags |= 32), Ra(e, t), d0(e, t, o, n), t.child;
      case 6:
        return e === null && Cs(t), null;
      case 13:
        return Ba(e, t, n);
      case 4:
        return Bs(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = gn(t, null, r, n) : d0(e, t, r, n), t.child;
      case 11:
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : F0(r, s), Ca(e, t, r, s, n);
      case 7:
        return d0(e, t, t.pendingProps, n), t.child;
      case 8:
        return d0(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return d0(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, s = t.pendingProps, i = t.memoizedProps, o = s.value, Qe(ll, r._currentValue), r._currentValue = o, i !== null) if (U0(i.value, o)) {
            if (i.children === s.children && !m0.current) {
              t = dt(e, t, n);
              break e;
            }
          } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
            var f = i.dependencies;
            if (f !== null) {
              o = i.child;
              for (var h = f.firstContext; h !== null; ) {
                if (h.context === r) {
                  if (i.tag === 1) {
                    h = ct(-1, n & -n), h.tag = 2;
                    var A = i.updateQueue;
                    if (A !== null) {
                      A = A.shared;
                      var L = A.pending;
                      L === null ? h.next = h : (h.next = L.next, L.next = h), A.pending = h;
                    }
                  }
                  i.lanes |= n, h = i.alternate, h !== null && (h.lanes |= n), Ms(
                    i.return,
                    n,
                    t
                  ), f.lanes |= n;
                  break;
                }
                h = h.next;
              }
            } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
            else if (i.tag === 18) {
              if (o = i.return, o === null) throw Error(u(341));
              o.lanes |= n, f = o.alternate, f !== null && (f.lanes |= n), Ms(o, n, t), o = i.sibling;
            } else o = i.child;
            if (o !== null) o.return = i;
            else for (o = i; o !== null; ) {
              if (o === t) {
                o = null;
                break;
              }
              if (i = o.sibling, i !== null) {
                i.return = o.return, o = i;
                break;
              }
              o = o.return;
            }
            i = o;
          }
          d0(e, t, s.children, n), t = t.child;
        }
        return t;
      case 9:
        return s = t.type, r = t.pendingProps.children, wn(t, n), s = M0(s), r = r(s), t.flags |= 1, d0(e, t, r, n), t.child;
      case 14:
        return r = t.type, s = F0(r, t.pendingProps), s = F0(r.type, s), za(e, t, r, s, n);
      case 15:
        return Ea(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : F0(r, s), vl(e, t), t.tag = 1, v0(r) ? (e = !0, _r(t)) : e = !1, wn(t, n), wa(t, r, s), Ks(t, r, s, n), _s(null, t, r, !0, e, n);
      case 19:
        return Ha(e, t, n);
      case 22:
        return La(e, t, n);
    }
    throw Error(u(156, t.tag));
  };
  function ao(e, t) {
    return In(e, t);
  }
  function Ic(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function B0(e, t, n, r) {
    return new Ic(e, t, n, r);
  }
  function gi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Oc(e) {
    if (typeof e == "function") return gi(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === fe) return 11;
      if (e === Le) return 14;
    }
    return 2;
  }
  function Rt(e, t) {
    var n = e.alternate;
    return n === null ? (n = B0(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Cl(e, t, n, r, s, i) {
    var o = 2;
    if (r = e, typeof e == "function") gi(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
      case G:
        return Zt(n.children, s, i, t);
      case H:
        o = 8, s |= 8;
        break;
      case Ae:
        return e = B0(12, n, t, s | 2), e.elementType = Ae, e.lanes = i, e;
      case ve:
        return e = B0(13, n, t, s), e.elementType = ve, e.lanes = i, e;
      case we:
        return e = B0(19, n, t, s), e.elementType = we, e.lanes = i, e;
      case me:
        return zl(n, s, i, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case pe:
            o = 10;
            break e;
          case he:
            o = 9;
            break e;
          case fe:
            o = 11;
            break e;
          case Le:
            o = 14;
            break e;
          case Se:
            o = 16, r = null;
            break e;
        }
        throw Error(u(130, e == null ? e : typeof e, ""));
    }
    return t = B0(o, n, t, s), t.elementType = e, t.type = r, t.lanes = i, t;
  }
  function Zt(e, t, n, r) {
    return e = B0(7, e, r, t), e.lanes = n, e;
  }
  function zl(e, t, n, r) {
    return e = B0(22, e, r, t), e.elementType = me, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function xi(e, t, n) {
    return e = B0(6, e, null, t), e.lanes = n, e;
  }
  function wi(e, t, n) {
    return t = B0(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Uc(e, t, n, r, s) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ql(0), this.expirationTimes = ql(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ql(0), this.identifierPrefix = r, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null;
  }
  function Ai(e, t, n, r, s, i, o, f, h) {
    return e = new Uc(e, t, n, f, h), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = B0(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ts(i), e;
  }
  function Wc(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: le, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function oo(e) {
    if (!e) return kt;
    e = e._reactInternals;
    e: {
      if (I0(e) !== e || e.tag !== 1) throw Error(u(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (v0(t.type)) {
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
      if (v0(n)) return Q2(e, n, t);
    }
    return t;
  }
  function uo(e, t, n, r, s, i, o, f, h) {
    return e = Ai(n, r, !0, e, s, i, o, f, h), e.context = oo(null), n = e.current, r = f0(), s = Et(n), i = ct(r, s), i.callback = t ?? null, Nt(n, i, s), e.current.lanes = s, Un(e, s, r), x0(e, r), e;
  }
  function El(e, t, n, r) {
    var s = t.current, i = f0(), o = Et(s);
    return n = oo(n), t.context === null ? t.context = n : t.pendingContext = n, t = ct(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Nt(s, t, o), e !== null && (J0(e, s, o, i), il(e, s, o)), o;
  }
  function Ll(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function co(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ki(e, t) {
    co(e, t), (e = e.alternate) && co(e, t);
  }
  function Fc() {
    return null;
  }
  var fo = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function ji(e) {
    this._internalRoot = e;
  }
  Rl.prototype.render = ji.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(u(409));
    El(e, t, null, null);
  }, Rl.prototype.unmount = ji.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      qt(function() {
        El(null, e, null, null);
      }), t[st] = null;
    }
  };
  function Rl(e) {
    this._internalRoot = e;
  }
  Rl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ki();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < yt.length && t !== 0 && t < yt[n].priority; n++) ;
      yt.splice(n, 0, e), n === 0 && bi(e);
    }
  };
  function Si(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Ml(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function ho() {
  }
  function Xc(e, t, n, r, s) {
    if (s) {
      if (typeof r == "function") {
        var i = r;
        r = function() {
          var A = Ll(o);
          i.call(A);
        };
      }
      var o = uo(t, r, e, 0, null, !1, !1, "", ho);
      return e._reactRootContainer = o, e[st] = o.current, er(e.nodeType === 8 ? e.parentNode : e), qt(), o;
    }
    for (; s = e.lastChild; ) e.removeChild(s);
    if (typeof r == "function") {
      var f = r;
      r = function() {
        var A = Ll(h);
        f.call(A);
      };
    }
    var h = Ai(e, 0, !1, null, null, !1, !1, "", ho);
    return e._reactRootContainer = h, e[st] = h.current, er(e.nodeType === 8 ? e.parentNode : e), qt(function() {
      El(t, h, n, r);
    }), h;
  }
  function Dl(e, t, n, r, s) {
    var i = n._reactRootContainer;
    if (i) {
      var o = i;
      if (typeof s == "function") {
        var f = s;
        s = function() {
          var h = Ll(o);
          f.call(h);
        };
      }
      El(t, o, e, s);
    } else o = Xc(n, t, e, s, r);
    return Ll(o);
  }
  Gi = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = On(t.pendingLanes);
          n !== 0 && (Kl(t, n | 1), x0(t, Ve()), (Ne & 6) === 0 && (Nn = Ve() + 500, jt()));
        }
        break;
      case 13:
        qt(function() {
          var r = ut(e, 1);
          if (r !== null) {
            var s = f0();
            J0(r, e, 1, s);
          }
        }), ki(e, 1);
    }
  }, Yl = function(e) {
    if (e.tag === 13) {
      var t = ut(e, 134217728);
      if (t !== null) {
        var n = f0();
        J0(t, e, 134217728, n);
      }
      ki(e, 134217728);
    }
  }, qi = function(e) {
    if (e.tag === 13) {
      var t = Et(e), n = ut(e, t);
      if (n !== null) {
        var r = f0();
        J0(n, e, t, r);
      }
      ki(e, t);
    }
  }, Ki = function() {
    return Me;
  }, Yi = function(e, t) {
    var n = Me;
    try {
      return Me = e, t();
    } finally {
      Me = n;
    }
  }, It = function(e, t, n) {
    switch (t) {
      case "input":
        if (ke(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var s = Zr(r);
              if (!s) throw Error(u(90));
              Pe(r), ke(r, s);
            }
          }
        }
        break;
      case "textarea":
        nt(e, n);
        break;
      case "select":
        t = n.value, t != null && A0(e, !!n.multiple, t, !1);
    }
  }, zr = mi, Y = qt;
  var Vc = { usingClientEntryPoint: !1, Events: [rr, fn, Zr, Dn, Cr, mi] }, yr = { findFiberByHostInstance: Ot, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Jc = { bundleType: yr.bundleType, version: yr.version, rendererPackageName: yr.rendererPackageName, rendererConfig: yr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: F.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Qn(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: yr.findFiberByHostInstance || Fc, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Tl.isDisabled && Tl.supportsFiber) try {
      Rr = Tl.inject(Jc), Y0 = Tl;
    } catch {
    }
  }
  return w0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vc, w0.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Si(t)) throw Error(u(200));
    return Wc(e, t, null, n);
  }, w0.createRoot = function(e, t) {
    if (!Si(e)) throw Error(u(299));
    var n = !1, r = "", s = fo;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = Ai(e, 1, !1, null, null, n, !1, r, s), e[st] = t.current, er(e.nodeType === 8 ? e.parentNode : e), new ji(t);
  }, w0.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = Qn(t), e = e === null ? null : e.stateNode, e;
  }, w0.flushSync = function(e) {
    return qt(e);
  }, w0.hydrate = function(e, t, n) {
    if (!Ml(t)) throw Error(u(200));
    return Dl(null, e, t, !0, n);
  }, w0.hydrateRoot = function(e, t, n) {
    if (!Si(e)) throw Error(u(405));
    var r = n != null && n.hydratedSources || null, s = !1, i = "", o = fo;
    if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = uo(t, null, e, 1, n ?? null, s, !1, i, o), e[st] = t.current, er(e), r) for (e = 0; e < r.length; e++) n = r[e], s = n._getVersion, s = s(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(
      n,
      s
    );
    return new Rl(t);
  }, w0.render = function(e, t, n) {
    if (!Ml(t)) throw Error(u(200));
    return Dl(null, e, t, !1, n);
  }, w0.unmountComponentAtNode = function(e) {
    if (!Ml(e)) throw Error(u(40));
    return e._reactRootContainer ? (qt(function() {
      Dl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[st] = null;
      });
    }), !0) : !1;
  }, w0.unstable_batchedUpdates = mi, w0.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Ml(n)) throw Error(u(200));
    if (e == null || e._reactInternals === void 0) throw Error(u(38));
    return Dl(e, t, n, !1, r);
  }, w0.version = "18.3.1-next-f1338f8080-20240426", w0;
}
var Ao;
function Uo() {
  if (Ao) return Ci.exports;
  Ao = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (c) {
        console.error(c);
      }
  }
  return a(), Ci.exports = _c(), Ci.exports;
}
var ko;
function $c() {
  if (ko) return Bl;
  ko = 1;
  var a = Uo();
  return Bl.createRoot = a.createRoot, Bl.hydrateRoot = a.hydrateRoot, Bl;
}
var e1 = $c(), M = Qi(), jo = Uo();
const t1 = { cmd: "⌘", shift: "⇧", alt: "⌥", option: "⌥", ctrl: "⌃", enter: "↵", return: "↵", esc: "esc", tab: "⇥", up: "↑", down: "↓", left: "←", right: "→", backspace: "⌫" }, n1 = (a) => a.split("+").map((c) => t1[c.trim().toLowerCase()] ?? c.trim().toUpperCase());
function r1({ rows: a, at: c }) {
  return /* @__PURE__ */ l.jsx(l.Fragment, { children: a.map(
    (u) => u && /* @__PURE__ */ l.jsx("div", { className: "ss-keys", "data-show": u.show, "data-at": c, "aria-hidden": !0, children: u.caps.map((y, v) => /* @__PURE__ */ l.jsx("kbd", { className: "ss-key", "data-down": u.down, children: y }, v)) }, u.id)
  ) });
}
const Wo = { x: 0, y: 0, width: 0, height: 0 }, Fo = (a) => typeof a == "string" ? a : "at" in a ? a.at : null, l1 = (a, c) => a?.offsetWidth && a.getBoundingClientRect().width / a.offsetWidth || c || 1;
function Hi(a, c) {
  const u = a.getBoundingClientRect();
  return { left: u.left, top: u.top, scale: a.offsetWidth && u.width / a.offsetWidth || c || 1, borderX: a.clientLeft, borderY: a.clientTop };
}
function jr(a, c, u, y = Hi(a, u)) {
  const v = c.getBoundingClientRect(), { scale: w } = y;
  return { x: (v.left - y.left) / w - y.borderX, y: (v.top - y.top) / w - y.borderY, width: v.width / w, height: v.height / w };
}
function s1(a, c, u, y = Hi(a, u)) {
  const v = jr(a, c, u, y), w = getComputedStyle(c), S = w.transform, C = S && S !== "none" ? S.match(/^matrix\(([^)]+)\)$/) : null;
  if (!C) return v;
  const [N, R, z, I, U, J] = C[1].split(",").map(Number);
  if (R || z || U || J || !N || !I) return v;
  const T = v.width / N, X = v.height / I, [K, Q] = w.transformOrigin.split(" ").map(parseFloat);
  return { x: v.x - K * (1 - N), y: v.y - Q * (1 - I), width: T, height: X };
}
const i1 = (a) => {
  const c = getComputedStyle(a);
  return c.transform !== "none" || c.translate && c.translate !== "none" || c.scale && c.scale !== "none" || c.rotate && c.rotate !== "none";
};
function a1(a, c) {
  let u = !0;
  for (let S = c; S && S !== a; S = S.parentElement) if (i1(S)) {
    u = !1;
    break;
  }
  if (u) return jr(a, c, 1);
  let y = 0, v = 0, w = c;
  for (; w && w !== a; ) {
    y += w.offsetLeft, v += w.offsetTop;
    const S = w.offsetParent;
    if (!S || !a.contains(S)) break;
    w = S, w !== a && (y += w.clientLeft - w.scrollLeft, v += w.clientTop - w.scrollTop);
  }
  return { x: y, y: v, width: c.offsetWidth, height: c.offsetHeight };
}
function So(a, c) {
  const u = Object.keys(a);
  return u.length !== Object.keys(c).length ? !1 : u.every((y) => {
    const v = a[y], w = c[y];
    return w && Math.abs(v.x - w.x) < 0.5 && Math.abs(v.y - w.y) < 0.5 && Math.abs(v.width - w.width) < 0.5 && Math.abs(v.height - w.height) < 0.5;
  });
}
function Xo(a) {
  const c = a.parentElement;
  if (!c?.classList.contains("ss-scroller")) return;
  const u = a.clientHeight, y = a.scrollHeight, v = y > u ? Math.max(24, u / y * u) : 0, w = y > u ? a.scrollTop / (y - u) * (u - v) : 0;
  c.style.setProperty("--ss-thumb-h", `${v}px`), c.style.setProperty("--ss-thumb-y", `${w}px`);
}
const o1 = {
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
function u1(a) {
  const [c, u, y, v] = o1[a], w = 3 * c, S = 3 * (y - c) - w, C = 1 - w - S, N = 3 * u, R = 3 * (v - u) - N, z = 1 - N - R, I = (J) => ((C * J + S) * J + w) * J, U = (J) => (3 * C * J + 2 * S) * J + w;
  return (J) => {
    if (J <= 0) return 0;
    if (J >= 1) return 1;
    let T = J;
    for (let X = 0; X < 8; X++) {
      const K = U(T);
      if (Math.abs(K) < 1e-6) break;
      const Q = T - (I(T) - J) / K;
      if (Q < 0 || Q > 1) break;
      T = Q;
    }
    if (Math.abs(I(T) - J) > 1e-6) {
      let X = 0, K = 1;
      for (let Q = 0; Q < 40; Q++)
        T = (X + K) / 2, I(T) < J ? X = T : K = T;
    }
    return ((z * T + R) * T + N) * T;
  };
}
function Vo() {
  try {
    return !1;
  } catch {
    return !0;
  }
}
function Ln(a) {
  Vo() && console.warn(`[stageshow] ${a}`);
}
const Cn = (a, c, u) => Math.min(u, Math.max(c, a)), Ol = (a) => a < 0.5 ? 4 * a * a * a : 1 - Math.pow(-2 * a + 2, 3) / 2, c1 = (a) => {
  const c = Math.sin(a * 12.9898) * 43758.5453;
  return c - Math.floor(c);
}, No = (a) => {
  a && window.setTimeout(() => a.removeAttribute("data-touching"), 240);
};
class zn extends Error {
}
function d1(a, c) {
  const { rootRef: u, cursorRef: y, pos: v, hovered: w, kindRef: S, keysRef: C, dragging: N, autoUsed: R, autoRef: z, scaleRef: I, speed: U, layout: J, cursor: T, resolve: X, place: K, remeasure: Q, ripple: re, setState: de, setKind: F, setKeys: V, setLastKeys: le } = c, G = u1("enter"), H = () => {
    if (a.aborted) throw new zn();
  }, Ae = (d, m) => new Promise((k, j) => {
    H();
    const P = () => {
      m(q), a.removeEventListener("abort", P), j(new zn());
    }, q = d(() => {
      a.removeEventListener("abort", P), a.aborted ? j(new zn()) : k();
    });
    a.addEventListener("abort", P, { once: !0 });
  }), pe = () => Ae((d) => requestAnimationFrame(d), cancelAnimationFrame), he = (d) => Ae((m) => setTimeout(m, d / U), clearTimeout), fe = (d) => {
    let m = !0;
    const k = () => {
      m && (m = !1, a.removeEventListener("abort", k), d());
    };
    return a.addEventListener("abort", k, { once: !0 }), k;
  }, ve = async (d, m) => {
    const k = performance.now(), j = d / U;
    for (; ; ) {
      H();
      const P = Math.min(1, (performance.now() - k) / j);
      if (m(P), P === 1) return;
      await pe();
    }
  }, we = (d) => {
    const m = [];
    for (let k = d; k && k !== u.current; k = k.parentElement) k.hasAttribute("data-target") && m.push(k);
    return m;
  }, Le = (d) => {
    const m = u.current;
    if (!m) return;
    const k = m.querySelectorAll("[data-cursor]");
    if (!k.length && !R.current) return;
    k.length && (R.current = !0);
    const j = m.getBoundingClientRect(), P = j.width / m.offsetWidth || 1, q = m.dataset.cursorBase ?? "pointer";
    let se = q;
    m.setAttribute("data-hit", "");
    const ae = document.elementsFromPoint(j.left + d.x * P, j.top + d.y * P);
    m.removeAttribute("data-hit");
    const b = ae.find((ie) => {
      if (!m.contains(ie) || ie.closest(".ss-cursor, .ss-keys, .ss-ripple") || getComputedStyle(ie).pointerEvents === "none" && !ie.closest('[data-cursor], [data-target], button, a[href], [role="button"], [role="menuitem"], [role="option"], [role="tab"]')) return !1;
      let De = 1;
      for (let Pe = ie; Pe && Pe !== m.parentElement; Pe = Pe.parentElement) {
        const Te = getComputedStyle(Pe);
        if (Te.visibility === "hidden") return !1;
        De *= Number(Te.opacity);
      }
      return De > 0.15;
    });
    if (b) {
      const ie = b.closest('[data-cursor], button, a[href], [role="button"], [role="menuitem"], [role="option"], [role="tab"]');
      se = ie && m.contains(ie) && ie.dataset.cursor ? ie.dataset.cursor : q, se !== S.current && F(se);
      return;
    }
    k.forEach((ie) => {
      const De = ie.getBoundingClientRect(), Pe = (De.left - j.left) / P, Te = (De.top - j.top) / P;
      d.x >= Pe && d.x <= Pe + De.width / P && d.y >= Te && d.y <= Te + De.height / P && (se = ie.dataset.cursor);
    }), se !== S.current && F(se);
  };
  z.current = Le, N.current || Le(v.current);
  const Se = (d) => {
    if (w.current === d) return;
    const m = we(d);
    we(w.current).forEach((k) => m.includes(k) || k.removeAttribute("data-hover")), m.forEach((k) => k.setAttribute("data-hover", "")), w.current = d;
  };
  let me = C.current.id, O = 0;
  const te = (d) => {
    const m = Fo(d);
    return m === null ? null : u.current?.querySelector(`[data-target="${m}"]`) ?? null;
  }, W = {
    get signal() {
      return a;
    },
    put(d) {
      a.aborted || de((m) => ({ ...m, ...typeof d == "function" ? d(m) : d }));
    },
    async set(d) {
      H(), W.put(d), await pe(), await pe(), z.current?.(v.current), H();
    },
    wait: async (d) => {
      H(), await he(d);
    },
    rect: (d, m) => {
      const k = u.current, j = k?.querySelector(`[data-target="${d}"]`);
      return !k || !j ? (Ln(`no element with data-target="${d}"`), Wo) : m?.layout ? a1(k, j) : jr(k, j, I.current);
    },
    center: (d) => X(d),
    caret(d, m) {
      O++;
      const k = te(d), j = u.current;
      if (!k || !j) return 0;
      const P = j.getBoundingClientRect(), q = P.width / j.offsetWidth || 1, se = P.left + m.x * q, ae = P.top + m.y * q, b = [], ie = document.createTreeWalker(k, NodeFilter.SHOW_TEXT), De = document.createRange();
      let Pe = 0;
      const Te = (ke) => {
        for (let qe = ke.parentElement; qe; qe = qe === k ? null : qe.parentElement) {
          const ze = getComputedStyle(qe);
          if (ze.opacity === "0" || ze.visibility === "hidden" || ze.display === "none") return !0;
        }
        return !1;
      };
      for (let ke = ie.nextNode(); ke; ke = ie.nextNode()) {
        const qe = ke.textContent ?? "";
        if (!Te(ke)) {
          for (let ze = 0; ze < qe.length; ze++) {
            De.setStart(ke, ze), De.setEnd(ke, ze + 1);
            const Be = De.getBoundingClientRect();
            (Be.width || Be.height) && b.push({ left: Be.left, right: Be.right, mid: (Be.left + Be.right) / 2, top: Be.top, bottom: Be.bottom, at: Pe + ze });
          }
          Pe += qe.length;
        }
      }
      if (!b.length || ae < b[0].top) return 0;
      if (ae > b[b.length - 1].bottom) return Pe;
      let Ye = b[0];
      for (const ke of b) Math.abs((ke.top + ke.bottom) / 2 - ae) < Math.abs((Ye.top + Ye.bottom) / 2 - ae) && (Ye = ke);
      const Ge = b.filter((ke) => Math.abs(ke.top - Ye.top) < (Ye.bottom - Ye.top) / 2), et = Ge.find((ke) => ke.mid > se);
      return et ? et.at : Ge[Ge.length - 1].at + 1;
    },
    async move(d, m) {
      H();
      const k = { ...v.current }, j = X(d), P = Math.hypot(j.x - k.x, j.y - k.y);
      if (P < 0.5) return Se(te(d));
      const q = we(te(d));
      Se(we(w.current).find((Pe) => q.includes(Pe)) ?? null);
      const se = m?.duration ?? Cn(260 + P * 0.9, 300, 650), ae = Ol, b = Math.min(P * 0.08, 24), ie = -(j.y - k.y) / P, De = (j.x - k.x) / P;
      await ve(se, (Pe) => {
        const Te = ae(Pe), Ye = Math.sin(Math.PI * Te) * b, Ge = m?.path ? m.path(Te, k, j) : { x: k.x + (j.x - k.x) * Te + ie * Ye, y: k.y + (j.y - k.y) * Te + De * Ye };
        K(Ge), Le(Ge), m?.onMove && jo.flushSync(() => m.onMove(Ge, k, Pe));
      }), H(), Se(te(d));
    },
    async click(d, m) {
      H(), d !== void 0 && (await W.move(d), await he(120)), H();
      const k = d !== void 0 ? te(d) : w.current, j = y.current, P = T?.style === "touch", q = fe(() => {
        j?.removeAttribute("data-pressed"), k?.removeAttribute("data-pressed"), P && No(j);
      });
      try {
        P && (j?.setAttribute("data-touching", ""), await he(140), H());
        for (let se = 0; se < (m?.double ? 2 : 1); se++)
          se && await he(70), H(), j?.setAttribute("data-pressed", "true"), T?.ripple && re(v.current), k?.setAttribute("data-pressed", m?.right ? "right" : ""), await he(m?.double ? 80 : 100), H(), j?.removeAttribute("data-pressed"), k?.removeAttribute("data-pressed");
      } finally {
        q();
      }
    },
    async scroll(d, m, k) {
      H();
      const j = te(d);
      if (!j) return;
      const P = j.scrollTop;
      let q = typeof m == "number" ? m : P;
      if (typeof m == "string") {
        const b = te(m);
        b && (q = P + (b.getBoundingClientRect().top - j.getBoundingClientRect().top) / l1(u.current, I.current) - (k?.offset ?? 0));
      }
      if (q = Cn(q, 0, j.scrollHeight - j.clientHeight), T) {
        const b = jr(u.current, j, I.current || 1), ie = v.current;
        ie.x >= b.x + 8 && ie.x <= b.x + b.width - 8 && ie.y >= b.y + 8 && ie.y <= b.y + b.height - 8 || (await this.move({ x: b.x + b.width * 0.6, y: b.y + b.height * 0.55 }), await this.wait(120));
      }
      const se = j.parentElement?.classList.contains("ss-scroller") ? j.parentElement : null;
      se?.setAttribute("data-scrolling", "");
      const ae = fe(() => se?.removeAttribute("data-scrolling"));
      try {
        await ve(k?.duration ?? Cn(420 + Math.abs(q - P) * 1.2, 500, 1400), (b) => {
          j.scrollTop = P + (q - P) * Ol(b), j.toggleAttribute("data-scrolled", j.scrollTop > 0.5), Xo(j);
        }), H();
      } finally {
        ae();
      }
      Q(), z.current?.(v.current);
    },
    async snap(d, m) {
      H();
      const k = m ? u.current?.querySelector(`[data-target="${m}"]`) : u.current;
      k?.setAttribute("data-instant", "");
      const j = fe(() => k?.removeAttribute("data-instant"));
      try {
        W.put(d), await pe(), await pe(), H();
      } finally {
        j();
      }
    },
    async key(d) {
      H();
      const m = n1(d), k = ++me, j = C.current;
      le(j.caps.length ? { ...j, show: !1, down: !1 } : null), V({ id: k, caps: m, show: !1, down: !1 }), await pe(), await pe(), H(), V({ id: k, caps: m, show: !0, down: !1 }), await he(180), H(), V({ id: k, caps: m, show: !0, down: !0 }), await he(140), H(), V({ id: k, caps: m, show: !0, down: !1 }), he(600).then(() => {
        me === k && !a.aborted && V({ id: k, caps: m, show: !1, down: !1 });
      }, (P) => {
        P instanceof zn || console.error("[stageshow] script error", P);
      });
    },
    async stagger(d, m, k = 60) {
      await Promise.all(
        d.map(async (j, P) => {
          P && await he(k * P), H(), await m(j, P);
        })
      );
    },
    mark(d) {
      a.aborted || u.current?.setAttribute("data-mark", d);
    },
    async cursor(d) {
      H(), F(d), await pe();
    },
    async type(d, m, k) {
      const j = k?.interval ?? 35;
      for (let P = 0; P <= m.length; P++)
        H(), de((q) => ({ ...q, [d]: m.slice(0, P) })), await he(j * (0.7 + 0.6 * c1(P)));
    },
    place(d) {
      if (a.aborted) return;
      const m = X(d);
      K(m), z.current?.(m);
    },
    async enter(d, m) {
      H();
      const k = X(d), j = u.current, P = { x: 0, y: 0, w: j.offsetWidth, h: j.offsetHeight }, q = 40, se = [k.x - P.x, P.x + P.w - k.x, k.y - P.y, P.y + P.h - k.y], ae = se.indexOf(Math.min(...se)), b = ae === 0 ? { x: P.x - q, y: k.y + P.h * 0.12 } : ae === 1 ? { x: P.x + P.w + q * 0.4, y: k.y + P.h * 0.12 } : ae === 2 ? { x: k.x - P.w * 0.06, y: P.y - q } : { x: k.x + P.w * 0.06, y: P.y + P.h + q * 0.4 };
      K(b), Se(null), await ve(m?.duration ?? 700, (ie) => {
        const De = G(ie), Pe = { x: b.x + (k.x - b.x) * De, y: b.y + (k.y - b.y) * De };
        K(Pe), Le(Pe);
      }), H(), Se(te(d));
    },
    async drag(d, m, k) {
      H();
      const j = { ...v.current }, P = X(d), q = Math.hypot(P.x - j.x, P.y - j.y);
      Se(null);
      const se = S.current, ae = se === "ibeam" || se === "crosshair", b = !ae && k?.cursor !== "preserve", ie = T?.style === "touch", De = (ke) => {
        const ze = 1.1428571428571428;
        return ke < 0.25 ? ke * ke / (2 * 0.25) * ze : (ke - 0.25 / 2) * ze;
      };
      ie && (y.current?.setAttribute("data-touching", ""), await he(140), H());
      const Pe = ie ? y.current?.querySelector(".ss-cursor__streak") ?? null : null, Te = [], Ye = (ke) => {
        Te.unshift({ ...ke }), Te.length > 9 && Te.pop();
        const qe = Te[Te.length - 1], ze = ke.x - qe.x, Be = ke.y - qe.y, A0 = Math.min(Math.hypot(ze, Be), 100);
        Pe && (Pe.style.width = `${A0}px`, Pe.style.left = `${-A0}px`, Pe.style.transform = `rotate(${Math.atan2(Be, ze)}rad)`);
      };
      N.current = !0;
      const Ge = y.current, et = fe(() => {
        N.current = !1, Ge?.removeAttribute("data-pressed"), Ge?.removeAttribute("data-swiping"), ie && No(Ge);
      });
      try {
        Ge?.setAttribute("data-pressed", "true"), await he(ie ? 170 : 60), ie && (Pe && (Pe.style.width = "0px"), Ge?.setAttribute("data-swiping", "")), H(), b && !ie && F("grab"), ie || await he(70), H(), Ge?.removeAttribute("data-pressed");
        const ke = ae ? 0 : Math.min(q * 0.06, 18), qe = q ? -(P.y - j.y) / q : 0, ze = q ? (P.x - j.x) / q : 0, Be = ae && Math.abs(P.y - j.y) > 6;
        Be && P.y > j.y && P.x < j.x - 2 && Ln("a text selection that ends left of where it starts overshoots and shrinks back; select text that starts a line, or fits on one");
        const A0 = O;
        await ve(ie ? k?.duration ?? Cn(180 + q * 0.5, 240, 300) : k?.duration ?? Cn(360 + q * 1.1, 450, 900), (tt) => {
          const k0 = ie ? De(tt) : Ol(tt), nt = Math.sin(Math.PI * k0) * ke, Dt = Be ? 1 - (1 - k0) * (1 - k0) : k0, Tt = Be ? k0 * k0 : k0, q0 = k?.path?.(k0, j, P) ?? { x: j.x + (P.x - j.x) * Tt + qe * nt, y: j.y + (P.y - j.y) * Dt + ze * nt };
          jo.flushSync(() => m?.(q0, j, tt)), K(q0), ie && Ye(q0);
        }), ae && m && O === A0 && Ln("selection drift: a text selection drag never read a.caret(), so the highlight is not under the I-beam; set it from a.caret(name, at) in onMove"), H(), b && !ie && F(se === "grab" ? "pointer" : se);
      } finally {
        et();
      }
      z.current?.(P);
    },
    layout: J
  };
  for (const d of Object.keys(W)) {
    const m = W[d];
    typeof m == "function" && (W[d] = (...k) => {
      const j = m.apply(W, k);
      return j instanceof Promise && j.catch((P) => {
        P instanceof zn || console.error("[stageshow] script error", P);
      }), j;
    });
  }
  return W;
}
function f1(a, c, u, y) {
  const v = Object.keys(c).filter(
    (w) => JSON.stringify(a[w]) !== JSON.stringify(c[w])
  );
  v.length && Ln(`loop seam: state still differs from initial at the end of the script (${v.join(", ")})`), y && Math.hypot(u.x - y.x, u.y - y.y) > 1 && Ln("loop seam: cursor does not end where it starts");
}
function h1() {
  return /* @__PURE__ */ l.jsx("svg", { height: "24", width: "24", viewBox: "0 0 32 32", fill: "none", children: /* @__PURE__ */ l.jsxs("g", { transform: "translate(10 7)", children: [
    /* @__PURE__ */ l.jsx("path", { d: "m6.148 18.473 1.863-1.003 1.615-.839-2.568-4.816h4.332l-11.379-11.408v16.015l3.316-3.221z", fill: "#fff" }),
    /* @__PURE__ */ l.jsx("path", { d: "m6.431 17 1.765-.941-2.775-5.202h3.604l-8.025-8.043v11.188l2.53-2.442z", fill: "#000" })
  ] }) });
}
function p1() {
  return /* @__PURE__ */ l.jsxs("svg", { width: "10", height: "16", viewBox: "0 0 10 16", fill: "none", overflow: "visible", children: [
    /* @__PURE__ */ l.jsx("path", { d: "M3 1H7M3 15H7M5 1V15", style: { stroke: "var(--ss-cursor-edge, #fff)" }, strokeWidth: "2.6", strokeLinecap: "round" }),
    /* @__PURE__ */ l.jsx("path", { d: "M3 1H7M3 15H7M5 1V15", style: { stroke: "var(--ss-cursor-line, #000)" }, strokeWidth: "1", strokeLinecap: "round" })
  ] });
}
function m1() {
  return /* @__PURE__ */ l.jsxs("svg", { width: "17", height: "17", viewBox: "0 0 17 17", fill: "none", overflow: "visible", children: [
    /* @__PURE__ */ l.jsx("path", { d: "M8.5 0V17M0 8.5H17", style: { stroke: "var(--ss-cursor-edge, #fff)" }, strokeWidth: "2.6" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8.5 0V17M0 8.5H17", style: { stroke: "var(--ss-cursor-line, #000)" }, strokeWidth: "1" })
  ] });
}
function v1() {
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
function y1() {
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
function g1() {
  return /* @__PURE__ */ l.jsx("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", children: /* @__PURE__ */ l.jsxs("g", { transform: "translate(8 9)", children: [
    /* @__PURE__ */ l.jsx("path", { d: "m3.44281398 1.68449726c-.74326136.27630142-1.05584685.8131257-1.07636853 1.38003696-.01344897.37336893.06665513.72649286.23114214 1.18694303-.02596219-.07267623.09676488.29282004.12116236.37362273.05052942.16918921-.4865367-.05865774-.81377307.00741883-.36363321.07113868-.84783757.38332307-1.10006887.79754775-.29643467.48542737-.3109609 1.04368567-.08235979 2.04824266.12491868.54736183.36572145 1.00836814.71076689 1.44594879.15329951.1944118.5713628.64726015.60307236.6875974l.84854343.94062339c.15080214.1358526.25794954.2361946.57590427.5380259.3147558.2987762.4647038.4380078.60308951.555976.05846214.0492474.10784267.1797116.12740685.3736249.01609788.1595565.01049553.3375341-.0090192.5090254-.00674888.0593077-.01325791.1020883-.01698742.1224696-.04189161.228932.13269563.4403386.36541902.4424835.21585671.0019894.38528595.0046546.82216479.0123538.09483476.0016698.09483476.0016698.18993053.0033129 1.16876447.0200186 1.75308289.0147904 2.17807912-.0385723.45429894-.0572869.92650915-.6110188 1.32698393-1.2957591.34289141.6108338.81859723 1.2057867 1.2995685 1.2820532.1510118.0244148.3353555.0322555.548787.0275887.1606725-.0035131.3307029-.0140241.5021961-.0293376.1276907-.0114022.2293359-.0228648.29003-.0307451.2258836-.0293282.373669-.251611.3133108-.4712481-.0130351-.0474332-.0339838-.1345011-.0551094-.2441635-.0245945-.1276687-.0423383-.2523857-.0503381-.365988-.0050217-.0713101-.0059948-.1359317-.0027687-.1918983.0059157-.0980798.0077938-.1530073.0108033-.281125.0010795-.0448938.0010795-.0448938.0024606-.0845172.0054208-.1364475.0233824-.2649146.0815132-.544638.0250088-.1201275.1473169-.352189.3398902-.639435.0571394-.0852302.1195783-.1742239.1864664-.26609712.1272143-.17473362.2641361-.35131772.4011075-.52030772.082051-.10123129.145482-.17695689.1808122-.21807676.2967593-.42378347.612817-1.11823437.7291396-1.52536348.1117407-.39153936.202351-1.12501196.254373-1.81690429.029923-.39968605.0410555-.72381216.0410555-1.23011613.0000742-.09758414.0000742-.09758414.0002975-.17670236.0003569-.11115478.0003569-.11115478.000115-.20711835-.0008934-.15683883-.0055282-.31323355-.0207085-.69507578-.0313109-.81293139-.4771727-1.33911388-1.1344906-1.44058831-.559108-.08631314-1.0586051.08188477-1.2779293.31625977-.0755526.08073733.0036753-.2781823-.2159489-.62316278-.1644465-.25841586-.593184-.58905957-.9209287-.65355552-.335487-.06535532-.73539548-.05811715-1.1017193.00667481-.32093157.05742909-.68608434.33741751-.87176225.64688068-.12411885.20686477.03884667-.00592296-.09368743-.23401341-.18231052-.31422641-.60754287-.59486422-1.01411454-.67799709-.34643562-.07139428-.74182572-.04452925-1.09945614.0633873-.43336319.1291117-1.01795827.61460976-.94899189 1.15552627-.34375-.54091651-1.25026717-.691379-1.97906097-.42111797z", fill: "#000" }),
    /* @__PURE__ */ l.jsx("path", { d: "m7.31951013 1.62138197c.20710357.04234751.44724204.20083012.51632974.31990811.08404358.1446387.15562749.36413806.21048667.6366124.02933373.14569467.12179446 1.2125285.29383112 1.32370243.41279229.04533731.41279229.04533731.52658055-.12364345.03545705-.07383858.03545705-.07383858.04226523-.1029106.01416796-.06009544.02463332-.12677987.0351322-.21754028l.00854738-.07915386.00047673-.00942804.00327525-.03167185c.01085148-.11424313.04184125-.4312127.05388392-.53034902.03788792-.31189663.08766449-.52757784.13944093-.6138719.0713024-.11883734.31942298-.28274442.43149612-.30279961.2804398-.04960082.58940103-.05519288.82623993-.00905543.1084394.02134018.3709471.22378689.432331.32024744.1291079.20279957.2524316.84889766.3225486 1.4970065-.0102194.04624251-.0102194.04624251.1640069.28984194.5843296-.06677889.5843296-.06677889.5703629-.17490247.0159511-.03856429.0284824-.08294031.045969-.15118961.0423876-.16089067.0697594-.25204451.111066-.35549917.0288558-.07227096.0592914-.13391873.0904889-.18278042.1209187-.19031132.4335712-.319392.7077174-.27707028.2943447.04543991.4816904.26653537.4994912.72869815.0148821.37434892.0193146.5239164.0201469.6700184l-.0004247.37954865c0 .48831141-.0104951.79388164-.0389535 1.17400348-.0480918.63962116-.1348512 1.34192123-.227649 1.66708484-.0946325.33121345-.3766371.95084197-.6003915 1.27298482-.0161892.01580846-.0841508.09694273-.1710333.20413492-.1445842.17838247-.2892181.36491271-.4247891.5511244-.0723398.09936149-.1402862.19620479-.2030964.2898938-.2440054.36396314-.400553.66098894-.4512157.90434304-.0659304.3172546-.0893838.4850003-.0966379.6675968-.0017072.0490782-.0017072.0490782-.002845.096677-.0028064.119476-.004437.1671639-.0097087.2545848-.0052654.091322-.0038193.187354.00332.2887353.0103318.1467182.1058713.3478531.1058713.3478531s-.2321503-.0119819-.3742084-.0088758c-.1718098.0037567-.3147843-.0023244-.4138162-.0183342-.1440353-.0228411-.53014068-.5057331-.7278511-.8821737-.30227042-.5764228-1.03604858-.5484427-1.33684295-.0394061-.26854779.4591613-.65918083.9172326-.7740684.9317199-.37404082.0469647-.94643778.0520862-2.07160079.0328144-.09480875-.0016381-.46003446-.0128683-.64600494-.0157445-.18597048-.0028763.05008807-.1790283.02786486-.399297-.03726222-.36933-.15125405-.6704984-.38877094-.8705429-.12241569-.1043631-.26774964-.2393104-.56509654-.5215613-.33323493-.3163366-.44236499-.4185353-.57290215-.533275l-.80130455-.89071892c-.03955779-.05174211-.45812831-.5051399-.5872217-.6688539-.28069963-.35597842-.47062947-.71959073-.56844755-1.14820437-.18921973-.83150113-.1793328-1.21146622-.00855589-1.49112273.13743587-.2257023.43815377-.4195862.60596039-.45241793.17165981-.03465512.55153059-.01648617.62179422.02229321.09902279.05401056.13357243.07300285.16379074.09097645.03572494.02124891.05965747.03799198.08182912.05708809.03426437.02951139.07235014.07170412.12420211.14044502.03611591.04821025.07806642.1053997.1423779.19304882.06054643.0816627.09183576.12069421.13369221.1590035.28038907.25662728.68391532.03238058.65052057-.32606956-.00567036-.06086415-.02203766-.12694598-.05458621-.23708502-.04356824-.15021272.00433013-.05284275-.26002629-.56642281-.08720664-.16942124-.13955864-.28835362-.17428227-.4046158l-.03412852-.10219113c-.03838756-.11059767-.09558223-.26854489-.12612861-.35199347l-.02009957-.05467087.002.008-.05974804-.17751191c-.09232236-.28807194-.13413567-.51358087-.12645475-.72681781.01040781-.28751553.16037753-.54506871.58790983-.70400047.40142488-.1488616 1.07786076.00117106 1.20581167.27856864.04319814.09369738.08927466.21199471.13900415.35457792l.03930997.11680217c.05539717.16759437.13470873.41493582.13860471.42816881.02724222.08344874.0471839.13860719.06943813.18441246.00217869.06301886.00217869.06301886.35429398.23177937.41699479-.29154152.41699479-.29154152.38019201-.37525838.00571063-.08773482.00758408-.17356287.00965287-.37317647.00242546-.23402898.00423842-.33154773.00994479-.45966208.01316411-.29554918.0437926-.51142116.09291227-.63864415.09160418-.23801371.25279279-.40993649.4432431-.46667832.24458613-.07380253.51465245-.09215236.73323569-.04710649zm1.21356228 4.27672201c-.20710459.00095412-.37422255.16961903-.37326843.37672361l.016 3.473c.00095412.20710459.16961903.37422251.37672361.37326841.20710459-.0009541.37422255-.16961901.37326843-.37672359l-.016-3.473c-.00095412-.20710459-.16961903-.37422255-.37672361-.37326843zm2.03332759.00229602c-.2071068 0-.375.16789322-.375.375v3.459c0 .20710678.1678932.375.375.375s.375-.16789322.375-.375v-3.459c0-.20710678-.1678932-.375-.375-.375zm-4.01399856.02930704c-.20710289.00126946-.37396385.17018863-.3726944.37729152l.021 3.426c.00126946.20710289.17018863.37396384.37729152.37269444.20710289-.0012695.37396385-.17018867.3726944-.37729156l-.021-3.426c-.00126946-.20710289-.17018863-.37396385-.37729152-.3726944z", fill: "#fff" })
  ] }) });
}
function x1() {
  return /* @__PURE__ */ l.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ l.jsx("circle", { cx: "10", cy: "10", r: "8", stroke: "rgba(0,0,0,0.15)", strokeWidth: "2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M10 2A8 8 0 0 1 18 10", stroke: "black", strokeWidth: "2", strokeLinecap: "round" })
  ] });
}
const Po = "M0-8.4 2.55-3.65H-2.55ZM0 8.4 2.55 3.65H-2.55Z";
function Ul({ turn: a }) {
  return /* @__PURE__ */ l.jsx("svg", { width: "21", height: "21", viewBox: "-14 -14 28 28", overflow: "visible", children: /* @__PURE__ */ l.jsxs("g", { transform: `rotate(${a})`, strokeLinejoin: "round", children: [
    /* @__PURE__ */ l.jsx("path", { d: Po, style: { fill: "var(--ss-cursor-edge, #fff)", stroke: "var(--ss-cursor-edge, #fff)" }, strokeWidth: "3.2" }),
    /* @__PURE__ */ l.jsx("path", { d: Po, style: { fill: "var(--ss-cursor-line, #000)", stroke: "var(--ss-cursor-line, #000)" }, strokeWidth: "1.2" })
  ] }) });
}
const w1 = () => /* @__PURE__ */ l.jsx(Ul, { turn: 0 }), A1 = () => /* @__PURE__ */ l.jsx(Ul, { turn: 90 }), k1 = () => /* @__PURE__ */ l.jsx(Ul, { turn: -45 }), j1 = () => /* @__PURE__ */ l.jsx(Ul, { turn: 45 }), Co = {
  pointer: h1,
  ibeam: p1,
  crosshair: m1,
  hand: v1,
  open: y1,
  grab: g1,
  wait: x1,
  "resize-ns": w1,
  "resize-ew": A1,
  "resize-nwse": k1,
  "resize-nesw": j1
}, S1 = {
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
}, N1 = { x: 4, y: 3 };
function P1() {
  return /* @__PURE__ */ l.jsx("svg", { width: "22", height: "22", viewBox: "0 0 22 22", className: "ss-cursor__arrow", "aria-hidden": !0, children: /* @__PURE__ */ l.jsx("path", { d: "M4 3 18.5 9.6 11.8 11.8 9.6 18.5Z" }) });
}
function C1({ cursorRef: a, style: c = "real", kind: u }) {
  return /* @__PURE__ */ l.jsxs("div", { ref: a, className: "ss-cursor", "data-style": c, "data-kind": u, "aria-hidden": !0, children: [
    c === "touch" && /* @__PURE__ */ l.jsx("span", { className: "ss-cursor__streak" }),
    /* @__PURE__ */ l.jsxs("div", { className: "ss-cursor__press", children: [
      (c === "circle" || c === "touch") && /* @__PURE__ */ l.jsx("span", { className: "ss-cursor__dot" }),
      c !== "circle" && c !== "touch" && Object.keys(Co).map((y) => {
        const v = c === "arrow";
        if (v && y !== "pointer" && y !== "ibeam") return null;
        const w = v && y === "pointer" ? P1 : Co[y], S = v && y === "pointer" ? N1 : S1[y], C = v && u !== "ibeam" ? "pointer" : u;
        return /* @__PURE__ */ l.jsx(
          "div",
          {
            className: "ss-cursor__glyph",
            "data-glyph": y,
            "data-active": y === C,
            style: { marginLeft: -S.x, marginTop: -S.y, transformOrigin: `${S.x}px ${S.y}px` },
            children: /* @__PURE__ */ l.jsx(w, {})
          },
          y
        );
      })
    ] })
  ] });
}
function z1(a, c) {
  const u = document.createElement("span");
  u.className = "ss-ripple", u.style.left = `${c.x}px`, u.style.top = `${c.y}px`, a.appendChild(u), u.addEventListener("animationend", () => u.remove());
}
const Jo = M.createContext({
  theme: "light",
  palette: "accent",
  fidelity: "standard",
  layout: "wide"
}), Ii = () => M.useContext(Jo), Go = M.createContext(!1);
function Oi() {
  const a = M.useContext(Go), [c, u] = M.useState(!1);
  return M.useEffect(() => {
    const y = window.matchMedia("(prefers-reduced-motion: reduce)"), v = () => u(y.matches);
    return v(), y.addEventListener("change", v), () => y.removeEventListener("change", v);
  }, []), a || c;
}
const bt = {
  now: () => performance.now(),
  raf: (a) => requestAnimationFrame(a),
  cancelRaf: (a) => cancelAnimationFrame(a),
  // Layout must finish even when a preview is paused. Keep these callbacks
  // separate: running arbitrary motion RAFs at a frozen timestamp can still
  // advance a spring that integrates once per callback.
  layoutRaf: (a) => bt.recording?.requestLayoutFrame(a) ?? requestAnimationFrame(a),
  cancelLayoutRaf: (a) => {
    const c = bt.recording;
    c ? c.cancelLayoutFrame(a) : cancelAnimationFrame(a);
  },
  timeout: (a, c) => window.setTimeout(a, c),
  clearTimeout: (a) => window.clearTimeout(a),
  /** The recorder's control while one drives the page, else null. */
  get recording() {
    return typeof window > "u" ? null : window.__stageshow?.clock ?? null;
  }
}, E1 = {};
function Nr({
  width: a,
  height: c,
  initial: u = E1,
  script: y,
  poster: v,
  cursor: w,
  hover: S,
  play: C = "loop",
  compact: N,
  keys: R = "bottom",
  palette: z = "accent",
  greys: I,
  fidelity: U = "standard",
  specimen: J,
  unframed: T,
  speed: X = 1,
  accent: K,
  tokens: Q,
  ground: re,
  fill: de = !1,
  theme: F = "light",
  className: V,
  children: le
}) {
  const G = C === "hover" && typeof window < "u" && window.matchMedia("(hover: none)").matches ? "once" : C, [H, Ae] = M.useState("wide"), pe = M.useRef(H);
  pe.current = H;
  const he = () => {
    const Y = w.at;
    return typeof Y == "object" && "wide" in Y ? Y[pe.current] : Y;
  }, [fe, ve] = M.useState(!1), we = H === "compact" && N ? N.width : a, Le = H === "compact" && N ? N.height : c, Se = M.useRef(null), me = M.useRef(null), O = M.useRef(null), te = Oi(), W = !y || te, [d, m] = M.useState(() => W && v ? v : u), k = M.useRef(d);
  k.current = d;
  const [j, P] = M.useState(1), q = M.useRef(1);
  q.current = j;
  const se = typeof window > "u" ? {} : window.__stageshow ?? {}, ae = X / (se.slow ?? 1), b = se.theme ?? F, [ie, De] = M.useState(w?.kind ?? "pointer"), Pe = (Y) => {
    const ye = me.current;
    !ye || te || z1(ye, Y);
  }, Te = M.useRef(ie);
  Te.current = ie;
  const [Ye, Ge] = M.useState({ id: 0, caps: [], show: !1, down: !1 }), [et, ke] = M.useState(null), qe = M.useRef(Ye);
  qe.current = Ye;
  const ze = M.useRef({ x: 0, y: 0 }), Be = M.useRef(null), [A0, tt] = M.useState(0), k0 = M.useRef(!1), nt = M.useRef(!1), Dt = M.useRef(null);
  M.useLayoutEffect(() => {
    const Y = Se.current;
    if (!Y) return;
    const ye = () => {
      const Re = Y.clientWidth, r0 = !!Y.parentElement?.closest("[data-ss-wide]"), E0 = N && !r0 && Re < N.below ? "compact" : "wide";
      Ae(E0);
      const u0 = de || !!Y.parentElement?.closest("[data-ss-fill]");
      ve(u0);
      const c0 = E0 === "compact" ? N.width : a, l0 = Math.min(u0 ? 2 : 1, Re / c0);
      P(l0), tt(Math.max(0, (Re - c0 * l0) / 2));
    };
    ye();
    const je = new ResizeObserver(ye);
    je.observe(Y);
    const ge = new MutationObserver(ye);
    for (let Re = Y.parentElement; Re; Re = Re.parentElement)
      ge.observe(Re, { attributes: !0, attributeFilter: ["data-ss-wide", "data-ss-fill"] });
    return () => {
      je.disconnect(), ge.disconnect();
    };
  }, [a, N?.below, N?.width, de]);
  const [Tt, q0] = M.useState({}), ht = M.useCallback(() => {
    const Y = me.current;
    if (!Y) return {};
    const ye = {}, je = Y.querySelectorAll("[data-target]");
    if (!je.length) return ye;
    const ge = Hi(Y, q.current);
    return je.forEach((Re) => {
      ye[Re.dataset.target] = s1(Y, Re, q.current, ge);
    }), ye;
  }, []), $t = M.useRef({ n: 0, frame: 0, owed: !1 }), j0 = M.useCallback(() => {
    const Y = $t.current;
    if (Y.frame || (Y.frame = bt.layoutRaf(() => {
      if (Y.n = 0, Y.frame = 0, !Y.owed) return;
      Y.owed = !1;
      const je = ht();
      q0((ge) => So(ge, je) ? ge : je);
    })), Y.n >= 4) {
      Y.owed = !0;
      return;
    }
    Y.n++;
    const ye = ht();
    q0((je) => So(je, ye) ? je : ye);
  }, [ht]);
  M.useLayoutEffect(j0), M.useLayoutEffect(() => () => {
    bt.cancelLayoutRaf($t.current.frame), $t.current = { n: 0, frame: 0, owed: !1 };
  }, []), M.useEffect(() => {
    const Y = me.current;
    if (Y)
      return Y.addEventListener("transitionend", j0), Y.addEventListener("animationend", j0), () => {
        Y.removeEventListener("transitionend", j0), Y.removeEventListener("animationend", j0);
      };
  }, [j0]);
  const Bt = M.useCallback((Y) => Tt[Y] ?? Wo, [Tt]), [Fl, Mn] = M.useState(!0);
  M.useLayoutEffect(() => {
    Mn(!0);
    let Y = !0, ye = 0;
    const je = () => {
      ye = bt.layoutRaf(() => {
        ye = bt.layoutRaf(() => Y && Mn(!1));
      });
    };
    return !document.fonts || document.fonts.status === "loaded" ? je() : document.fonts.ready.then(() => Y && je()), () => {
      Y = !1, bt.cancelLayoutRaf(ye);
    };
  }, [H]);
  const rt = M.useRef(0), Qt = M.useRef(0), lt = M.useRef(!1), Ht = M.useRef(null), K0 = M.useCallback((Y) => {
    Qt.current && !lt.current && Math.hypot(Y.x - ze.current.x, Y.y - ze.current.y) > 0.5 && (lt.current = !0, Ht.current ??= performance.now() - Qt.current), ze.current = Y, rt.current = performance.now();
    const ye = O.current;
    ye && (ye.style.transform = `translate(${Y.x}px, ${Y.y}px)`, ye.removeAttribute("data-idle"));
  }, []), Q0 = M.useCallback((Y) => {
    typeof Y == "object" && Y !== null && "wide" in Y && (Y = pe.current === "compact" ? Y.compact : Y.wide);
    const ye = Fo(Y);
    if (ye === null) return Y;
    const je = me.current, ge = je?.querySelector(`[data-target="${ye}"]`);
    if (!je || !ge)
      return Ln(`no element with data-target="${ye}"`), ze.current;
    const Re = jr(je, ge, q.current), r0 = typeof Y == "string" ? { x: 0.5, y: 0.5 } : Y;
    return { x: Re.x + Re.width * r0.x, y: Re.y + Re.height * r0.y };
  }, []);
  M.useLayoutEffect(() => {
    if (!W || !S) return;
    const Y = me.current;
    S.forEach((ye) => Y?.querySelector(`[data-target="${ye}"]`)?.setAttribute("data-hover", ""));
  }), M.useLayoutEffect(() => {
    w && !Qt.current && K0(Q0(he()));
  }, [j, H]);
  const It = M.useRef(0), h0 = M.useRef(0), H0 = M.useCallback(() => {
    ++It.current, cancelAnimationFrame(h0.current), h0.current = 0, me.current?.removeAttribute("data-settling");
  }, []), en = M.useCallback((Y = !1) => {
    H0();
    const ye = It.current;
    if (nt.current = !1, m(u), De(w?.kind ?? "pointer"), Ge((ge) => ({ ...ge, show: !1, down: !1 })), ke(null), me.current?.querySelectorAll("[data-hover],[data-pressed]").forEach((ge) => {
      ge.removeAttribute("data-hover"), ge.removeAttribute("data-pressed");
    }), me.current?.removeAttribute("data-mark"), me.current?.querySelectorAll("[data-scrolled]").forEach((ge) => {
      ge.scrollTop = 0, ge.removeAttribute("data-scrolled"), Xo(ge);
    }), me.current?.querySelectorAll("[data-scrolling]").forEach((ge) => ge.removeAttribute("data-scrolling")), O.current?.removeAttribute("data-pressed"), Dt.current = null, !w) return;
    if (!Y) {
      h0.current = requestAnimationFrame(() => {
        h0.current = 0, K0(Q0(he())), Be.current?.(ze.current);
      });
      return;
    }
    const je = me.current;
    je?.setAttribute("data-settling", ""), h0.current = requestAnimationFrame(() => {
      const ge = { ...ze.current }, Re = Q0(he()), r0 = Cn(320 + Math.hypot(Re.x - ge.x, Re.y - ge.y) * 0.7, 380, 700), E0 = performance.now(), u0 = () => {
        if (It.current !== ye) return;
        const c0 = Math.min(1, (performance.now() - E0) / r0), l0 = Ol(c0);
        K0({ x: ge.x + (Re.x - ge.x) * l0, y: ge.y + (Re.y - ge.y) * l0 }), c0 < 1 ? h0.current = requestAnimationFrame(u0) : (h0.current = 0, je?.removeAttribute("data-settling"));
      };
      u0();
    });
  }, [H]), Dn = M.useMemo(
    () => (Y) => d1(Y, {
      rootRef: me,
      cursorRef: O,
      pos: ze,
      hovered: Dt,
      kindRef: Te,
      keysRef: qe,
      dragging: nt,
      autoUsed: k0,
      autoRef: Be,
      scaleRef: q,
      speed: ae,
      layout: H,
      cursor: w,
      resolve: Q0,
      place: K0,
      remeasure: j0,
      ripple: Pe,
      setState: m,
      setKind: De,
      setKeys: Ge,
      setLastKeys: ke
    }),
    [Q0, K0, ae, H]
    // eslint-disable-line react-hooks/exhaustive-deps
  );
  M.useEffect(() => {
    const Y = me.current;
    if (W || !y)
      return en(), Y.removeAttribute("data-offscreen"), m(v ?? u), H0;
    en();
    const ye = Se.current;
    let je = null, ge = !1, Re = !1, r0 = !1;
    const E0 = w?.idle ?? 4e3, u0 = 1200;
    let c0 = 0, l0 = 0;
    const Tn = () => {
      window.clearInterval(c0), !(!w || E0 === !1) && (rt.current = performance.now(), c0 = window.setInterval(() => {
        const Oe = O.current;
        if (!Oe) return;
        const p0 = performance.now();
        if (!lt.current) {
          Ht.current === null && p0 - rt.current > u0 && Oe.setAttribute("data-idle", "");
          return;
        }
        Oe.hasAttribute("data-pressed") || me.current?.querySelector("[data-hover]") ? rt.current = p0 : p0 - rt.current > E0 && Oe.setAttribute("data-idle", "");
      }, 150));
    }, Xl = () => {
      Qt.current = performance.now(), lt.current = !1, window.clearTimeout(l0);
      const Oe = O.current, p0 = Ht.current;
      E0 === !1 || !Oe || p0 === null || p0 <= u0 || (Oe.setAttribute("data-idle", ""), l0 = window.setTimeout(() => Oe.removeAttribute("data-idle"), p0 - 400));
    }, Bn = () => {
      window.clearInterval(c0), window.clearTimeout(l0), Qt.current = 0, O.current?.removeAttribute("data-idle");
    }, Vl = () => {
      window.clearInterval(c0), window.clearTimeout(l0);
      const Oe = O.current, p0 = () => Oe?.hasAttribute("data-pressed") || Y.querySelector("[data-hover]");
      if (!w || E0 === !1 || !Oe || Oe.hasAttribute("data-idle") || p0()) return;
      const rn = (lt.current ? E0 : u0) - (performance.now() - rt.current);
      l0 = window.setTimeout(() => {
        p0() || Oe.setAttribute("data-idle", "");
      }, Math.max(0, rn));
    }, I0 = () => {
      if (je || r0 || !ge || document.hidden || G === "hover" && !Re) return;
      H0(), w && K0(Q0(he())), je = new AbortController();
      const Oe = je.signal;
      Tn();
      const p0 = Dn(Oe);
      (async () => {
        do {
          Xl();
          try {
            await y(p0);
          } catch (rn) {
            if (rn instanceof zn) return;
            console.error("[stageshow] script error", rn), je = null, Bn();
            return;
          }
          G === "loop" && Vo() && f1(k.current, u, ze.current, w ? Q0(he()) : null);
        } while (G === "loop" && !Oe.aborted);
        G === "once" && !Oe.aborted && (r0 = !0, Vl());
      })();
    }, tn = (Oe = !1) => {
      Bn(), je && (je.abort(), je = null, r0 || en(Oe));
    }, nn = () => Y.toggleAttribute("data-offscreen", !ge || document.hidden);
    nn();
    const Er = new IntersectionObserver(([Oe]) => {
      ge = Oe.isIntersecting, nn(), ge ? I0() : tn();
    });
    Er.observe(ye);
    const Qn = () => {
      nn(), document.hidden ? tn() : I0();
    };
    document.addEventListener("visibilitychange", Qn);
    const Hn = () => {
      Re = !0, I0();
    }, In = () => {
      Re = !1, tn(!0);
    };
    return G === "hover" && (ye.addEventListener("pointerenter", Hn), ye.addEventListener("pointerleave", In)), () => {
      Er.disconnect(), document.removeEventListener("visibilitychange", Qn), ye.removeEventListener("pointerenter", Hn), ye.removeEventListener("pointerleave", In), Bn(), je?.abort(), je = null, Be.current = null, H0();
    };
  }, [W, y, Dn, G, H]), M.useLayoutEffect(() => {
    w && !W && !nt.current && Be.current?.(ze.current);
  }, [d]);
  const Cr = M.useMemo(() => ({ theme: b, palette: z, fidelity: U, layout: H }), [b, z, U, H]), zr = w && (!y || !W || w.still);
  return /* @__PURE__ */ l.jsx("div", { ref: Se, className: `ss-fit${V ? ` ${V}` : ""}`, style: { maxWidth: fe ? void 0 : a, height: Le * j }, children: /* @__PURE__ */ l.jsxs(
    "div",
    {
      ref: me,
      className: "ss-stage",
      "data-specimen": J || void 0,
      "data-unframed": T || void 0,
      "data-still": W || void 0,
      "data-placing": Fl || void 0,
      "data-theme": b,
      "data-palette": z,
      "data-greys": I === "cool" ? "cool" : void 0,
      "data-fidelity": U,
      "data-layout": H,
      style: {
        width: we,
        height: Le,
        marginLeft: A0 || void 0,
        transform: `scale(${j})`,
        ...Q,
        ...K ? { "--ss-accent": K, "--ss-accent-2": K, "--ss-accent-soft": `color-mix(in srgb, ${K} 14%, transparent)` } : null
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
        /* @__PURE__ */ l.jsx(Go.Provider, { value: W, children: /* @__PURE__ */ l.jsx(Jo.Provider, { value: Cr, children: le(d, Bt, H) }) }),
        y && /* @__PURE__ */ l.jsx(r1, { rows: [et, Ye], at: typeof R == "string" ? R : R[H] }),
        zr && /* @__PURE__ */ l.jsx(C1, { cursorRef: O, style: w.style, kind: ie })
      ]
    }
  ) });
}
function xr() {
  return /* @__PURE__ */ l.jsxs("span", { className: "ss-window__lights", children: [
    /* @__PURE__ */ l.jsx("span", { className: "ss-window__dot" }),
    /* @__PURE__ */ l.jsx("span", { className: "ss-window__dot" }),
    /* @__PURE__ */ l.jsx("span", { className: "ss-window__dot" })
  ] });
}
function L1() {
  return /* @__PURE__ */ l.jsxs("svg", { className: "ss-window__lock", width: "7", height: "8", viewBox: "0 0 7 8", "aria-hidden": !0, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M1.5 3.3V2.4a2 2 0 0 1 4 0v.9", fill: "none", stroke: "currentColor", strokeWidth: "1.1" }),
    /* @__PURE__ */ l.jsx("rect", { x: "0", y: "3.3", width: "7", height: "4.7", rx: "1.2", fill: "currentColor" })
  ] });
}
function zo({ back: a }) {
  return /* @__PURE__ */ l.jsx("svg", { className: "ss-window__chev", width: "10", height: "10", viewBox: "0 0 10 10", "aria-hidden": !0, children: /* @__PURE__ */ l.jsx("path", { d: a ? "M6.5 1.5 3 5l3.5 3.5" : "M3.5 1.5 7 5 3.5 8.5", fill: "none", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function R1({ url: a, urlShape: c, tabs: u, nav: y, title: v, sidebar: w, sidebarWidth: S = 180, sidebarStyle: C, toolbar: N, lead: R, body: z, className: I, receded: U, chrome: J, lights: T, lightsSize: X, barSize: K, children: Q, ...re }) {
  const de = `ss-window ss-recede${I ? ` ${I}` : ""}`, F = X === "large" ? "large" : void 0, V = K === "tall" ? "tall" : void 0;
  if (J === "terminal")
    return /* @__PURE__ */ l.jsxs("div", { ...re, className: de, "data-chrome": "terminal", "data-lights": T === "grey" ? "grey" : void 0, "data-lights-size": F, "data-receded": U || void 0, children: [
      /* @__PURE__ */ l.jsxs("div", { className: "ss-window__bar", children: [
        /* @__PURE__ */ l.jsx(xr, {}),
        v !== void 0 && /* @__PURE__ */ l.jsx("span", { className: "ss-term__title", children: v })
      ] }),
      /* @__PURE__ */ l.jsx("div", { ...z, className: `ss-window__body ss-term${z?.className ? ` ${z.className}` : ""}`, children: Q })
    ] });
  if (J === "glass" || J === "card" || J === "hairline")
    return /* @__PURE__ */ l.jsxs("div", { ...re, className: de, "data-chrome": J, "data-lights": T === "color" || T === "white" ? T : J === "glass" ? "grey" : void 0, "data-receded": U || void 0, children: [
      /* @__PURE__ */ l.jsxs("div", { className: "ss-window__bar", children: [
        /* @__PURE__ */ l.jsx(xr, {}),
        a !== void 0 && /* @__PURE__ */ l.jsxs("span", { className: "ss-window__url", children: [
          J === "glass" && /* @__PURE__ */ l.jsx(L1, {}),
          /* @__PURE__ */ l.jsx("span", { className: "ss-window__url-text", children: a })
        ] }),
        /* @__PURE__ */ l.jsx("span", { className: "ss-window__end", children: N })
      ] }),
      /* @__PURE__ */ l.jsx("div", { ...z, className: `ss-window__body${z?.className ? ` ${z.className}` : ""}`, children: Q })
    ] });
  const le = a !== void 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    y && /* @__PURE__ */ l.jsxs("span", { className: "ss-window__nav", children: [
      /* @__PURE__ */ l.jsx(zo, { back: !0 }),
      /* @__PURE__ */ l.jsx(zo, {})
    ] }),
    /* @__PURE__ */ l.jsx("span", { className: "ss-window__url", children: a })
  ] });
  return w !== void 0 ? /* @__PURE__ */ l.jsxs("div", { ...re, className: de, "data-kind": "sidebar", "data-side": C === "floating" ? "floating" : void 0, "data-lights": T === "grey" ? "grey" : void 0, "data-lights-size": F, "data-bar": V, "data-receded": U || void 0, "data-url-shape": c, children: [
    /* @__PURE__ */ l.jsxs("aside", { className: "ss-window__side", style: { width: S }, children: [
      /* @__PURE__ */ l.jsx("div", { className: "ss-window__side-top", children: /* @__PURE__ */ l.jsx(xr, {}) }),
      w
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "ss-window__main", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "ss-window__bar", children: [
        v !== void 0 && /* @__PURE__ */ l.jsx("span", { className: "ss-window__heading", children: v }),
        R,
        le,
        /* @__PURE__ */ l.jsx("span", { className: "ss-window__spacer" }),
        N
      ] }),
      /* @__PURE__ */ l.jsx("div", { ...z, className: `ss-window__body${z?.className ? ` ${z.className}` : ""}`, children: Q })
    ] })
  ] }) : u?.length ? /* @__PURE__ */ l.jsxs("div", { ...re, className: de, "data-kind": "tabs", "data-lights": T === "grey" ? "grey" : void 0, "data-lights-size": F, "data-receded": U || void 0, "data-url-shape": c, children: [
    /* @__PURE__ */ l.jsxs("div", { className: "ss-window__tabs", children: [
      /* @__PURE__ */ l.jsx(xr, {}),
      u.map((G, H) => /* @__PURE__ */ l.jsxs("span", { className: "ss-window__tab", "data-active": H === 0 || void 0, children: [
        /* @__PURE__ */ l.jsx("span", { className: "ss-window__favicon" }),
        /* @__PURE__ */ l.jsx("span", { className: "ss-window__tab-label", children: G })
      ] }, H))
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "ss-window__bar", children: [
      le,
      N
    ] }),
    /* @__PURE__ */ l.jsx("div", { ...z, className: `ss-window__body${z?.className ? ` ${z.className}` : ""}`, children: Q })
  ] }) : /* @__PURE__ */ l.jsxs("div", { ...re, className: de, "data-receded": U || void 0, "data-url-shape": c, "data-lights": T === "grey" ? "grey" : void 0, "data-lights-size": F, "data-bar": V, children: [
    /* @__PURE__ */ l.jsxs("div", { className: "ss-window__bar", children: [
      /* @__PURE__ */ l.jsx(xr, {}),
      le,
      v !== void 0 && /* @__PURE__ */ l.jsx("span", { className: "ss-window__title", "data-toolbar": N ? !0 : void 0, children: v }),
      R,
      a === void 0 && v === void 0 && /* @__PURE__ */ l.jsx("span", { className: "ss-window__spacer" }),
      N
    ] }),
    /* @__PURE__ */ l.jsx("div", { ...z, className: `ss-window__body${z?.className ? ` ${z.className}` : ""}`, children: Q })
  ] });
}
const M1 = ["var(--ss-ink-1)", "var(--ss-ink-2)", "var(--ss-ink-3)", "var(--ss-ink-4)", "var(--ss-ink-5)"];
function kr({ w: a, h: c = 6, tone: u = 3, r: y = 2, shrink: v, className: w, style: S, ...C }) {
  const N = v ?? (typeof a == "number" && a > c * 3);
  return /* @__PURE__ */ l.jsx("span", { ...C, className: `ss-bar${w ? ` ${w}` : ""}`, "data-shrink": N || void 0, style: { width: a, height: c, borderRadius: y, background: M1[u - 1], ...S } });
}
const D1 = { w: 402, h: 874, r: 64 }, Eo = { a: 71, n: 2.31 }, T1 = { w: 393, h: 829, r: 42 }, B1 = { w: 412, h: 915, r: 38 }, Q1 = {
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
}, H1 = {
  pro: [[13, "band"], [10, "var(--ss-phone-rim)"], [9.25, "var(--ss-phone-glass)"]],
  silver: [[13, "band"], [9, "var(--ss-phone-glass)"]],
  bezel: [[12, "var(--ss-phone-glass)"]],
  clay: [[16, "clay"], [1, "var(--ss-phone-seam)"]]
};
function I1(a, c, u, y) {
  const w = 2 / y, S = [];
  return [
    [a - u, u, 1, -1],
    [a - u, c - u, 1, 1],
    [u, c - u, -1, 1],
    [u, u, -1, -1]
  ].forEach(([N, R, z, I], U) => {
    for (let J = 0; J <= 32; J++) {
      const T = J / 32 * (Math.PI / 2), X = U % 2 === 0 ? Math.sin(T) : Math.cos(T), K = U % 2 === 0 ? Math.cos(T) : Math.sin(T);
      S.push(`${(N + z * u * Math.pow(X, w)).toFixed(2)} ${(R + I * u * Math.pow(K, w)).toFixed(2)}`);
    }
  }), `M${S.join("L")}Z`;
}
function Pr({ width: a, frame: c = "pro", time: u = "9:41", island: y, status: v, dark: w, wallpaper: S, className: C, style: N, children: R, ...z }) {
  const I = M.useRef(null), [U, J] = M.useState(!0);
  M.useEffect(() => {
    if (c !== "photo" || !I.current) return;
    const we = getComputedStyle(I.current).backgroundImage.match(/url\(["']?([^"')]+)["']?\)/)?.[1];
    if (!we) return void J(!1);
    let Le = !0;
    const Se = new Image();
    return Se.onerror = () => Le && J(!1), Se.src = we, () => {
      Le = !1;
    };
  }, [c, w]);
  const T = c === "photo" && !U ? "pro" : c, { band: X, glass: K } = Q1[T], { fidelity: Q } = Ii(), re = T === "android" ? B1 : T === "soft" ? T1 : D1, de = X + K, F = a / (re.w + de * 2), V = (ve) => ve * F, le = M.useId().replace(/:/g, ""), H = T !== "android" && T !== "soft" ? I1(V(re.w), V(re.h), V(Eo.a), Eo.n) : null, Ae = H1[T], pe = T === "pro" || T === "photo" || T === "bezel" || T === "silver" || T === "android", he = y ?? (pe && T !== "photo"), fe = v ?? pe;
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      ...z,
      className: `ss-phone${C ? ` ${C}` : ""}`,
      "data-frame": T,
      "data-dark": w || void 0,
      style: {
        width: a,
        height: V(re.h + de * 2),
        padding: V(X),
        borderRadius: V(re.r + de),
        "--ps": `${F}px`,
        ...N
      },
      children: [
        (Ae || T === "outline") && H && /* @__PURE__ */ l.jsxs("svg", { className: "ss-phone__bands", width: "100%", height: "100%", "aria-hidden": !0, children: [
          /* @__PURE__ */ l.jsxs("defs", { children: [
            /* @__PURE__ */ l.jsx("linearGradient", { id: `${le}-band`, x1: "0.2", y1: "0", x2: "0.8", y2: "1", children: [0, 0.22, 0.48, 0.74, 1].map((ve, we) => /* @__PURE__ */ l.jsx("stop", { offset: ve, style: { stopColor: `var(--ss-phone-band-${we + 1})` } }, ve)) }),
            /* @__PURE__ */ l.jsxs("linearGradient", { id: `${le}-clay`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
              /* @__PURE__ */ l.jsx("stop", { offset: "0", style: { stopColor: "var(--ss-phone-clay-top)" } }),
              /* @__PURE__ */ l.jsx("stop", { offset: "1", style: { stopColor: "var(--ss-phone-clay-bottom)" } })
            ] }),
            T === "outline" && // Line art: a ring between 7 and 8pt out, cut from a mask so it is one hairline
            /* @__PURE__ */ l.jsxs("mask", { id: `${le}-ring`, maskUnits: "userSpaceOnUse", x: "-50%", y: "-50%", width: "200%", height: "200%", children: [
              /* @__PURE__ */ l.jsx("path", { d: H, fill: "none", stroke: "#fff", strokeWidth: V(16) }),
              /* @__PURE__ */ l.jsx("path", { d: H, fill: "none", stroke: "#000", strokeWidth: V(16) - 2 })
            ] })
          ] }),
          /* @__PURE__ */ l.jsx("g", { transform: `translate(${V(de)} ${V(de)})`, strokeLinejoin: "round", children: T === "outline" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            /* @__PURE__ */ l.jsx("rect", { x: -V(9), y: -V(9), width: V(re.w + 18), height: V(re.h + 18), mask: `url(#${le}-ring)`, style: { fill: "var(--ss-phone-line)" } }),
            /* @__PURE__ */ l.jsx("path", { d: H, fill: "none", strokeWidth: "2", style: { stroke: "var(--ss-line, rgba(0, 0, 0, 0.06))" } })
          ] }) : Ae.map(([ve, we]) => /* @__PURE__ */ l.jsx(
            "path",
            {
              d: H,
              fill: "none",
              strokeWidth: V(ve * 2),
              stroke: we === "band" || we === "clay" ? `url(#${le}-${we})` : void 0,
              style: we === "band" || we === "clay" ? void 0 : { stroke: we }
            },
            ve
          )) })
        ] }),
        /* @__PURE__ */ l.jsx("div", { className: "ss-phone__glass", style: { padding: V(K), borderRadius: V(re.r + K) }, children: /* @__PURE__ */ l.jsx(
          "div",
          {
            className: "ss-phone__window",
            style: {
              width: V(re.w),
              height: V(re.h),
              borderRadius: H ? void 0 : V(re.r),
              clipPath: H ? `path('${H}')` : void 0
            },
            children: /* @__PURE__ */ l.jsxs(
              "div",
              {
                className: "ss-phone__screen",
                style: { width: re.w, height: re.h, transform: `scale(${F})`, "--ss-screen-r": `${re.r}px`, ...S ? { background: S } : null },
                children: [
                  fe && /* @__PURE__ */ l.jsxs("div", { className: "ss-phone__status", children: [
                    /* @__PURE__ */ l.jsx("span", { className: "ss-phone__time", children: Q === "minimal" ? /* @__PURE__ */ l.jsx("span", { className: "ss-phone__time-bar" }) : u }),
                    /* @__PURE__ */ l.jsxs("span", { className: "ss-phone__glyphs", children: [
                      /* @__PURE__ */ l.jsx(O1, {}),
                      /* @__PURE__ */ l.jsx(U1, {}),
                      /* @__PURE__ */ l.jsx(W1, {})
                    ] })
                  ] }),
                  he && /* @__PURE__ */ l.jsx("span", { className: "ss-phone__island" }),
                  /* @__PURE__ */ l.jsx("div", { className: "ss-phone__content", "data-status": fe || void 0, children: R }),
                  pe && /* @__PURE__ */ l.jsx("span", { className: "ss-phone__home" })
                ]
              }
            )
          }
        ) }),
        T === "photo" && // The bezel image is 450 × 920pt with the screen at (24, 23): laid over
        // the body so its cut-out frames the screen exactly
        /* @__PURE__ */ l.jsx("span", { ref: I, className: "ss-phone__photo", style: { left: V(-8), top: V(-7), width: V(450), height: V(920) } })
      ]
    }
  );
}
function O1() {
  return /* @__PURE__ */ l.jsx("svg", { viewBox: "0 0 20.33 13.67", width: "20.33", height: "13.67", className: "ss-phone__glyph ss-phone__signal", children: [6.33, 8.67, 11, 13.67].map((a, c) => /* @__PURE__ */ l.jsx("rect", { x: c * 5.667, y: 13.67 - a, width: 3.333, height: a, rx: 1.667, fill: "currentColor" }, c)) });
}
function U1() {
  return /* @__PURE__ */ l.jsx("svg", { viewBox: "0 0 19.33 14.33", width: "19.33", height: "14.33", className: "ss-phone__glyph ss-phone__wifi", children: /* @__PURE__ */ l.jsx("path", { fillRule: "evenodd", fill: "currentColor", d: "M0.415933 5.54283C0.902185 6.04412 1.66017 5.95818 2.27513 5.41393C4.30595 3.58064 6.83731 2.63535 9.66901 2.63535C12.5007 2.63535 15.0464 3.60928 17.0629 5.41393C17.6636 5.97251 18.4215 6.0298 18.9221 5.54283C19.4226 5.02722 19.4942 4.2538 18.9793 3.70954C16.8341 1.51819 13.3302 0 9.66901 0C6.00783 0 2.48965 1.53251 0.358727 3.72387C-0.156127 4.2538 -0.0989213 5.02722 0.415933 5.55715L0.415933 5.54283ZM3.94841 9.13779C4.50617 9.68205 5.22124 9.62476 5.85051 9.10915C6.88022 8.29276 8.25316 7.73418 9.66901 7.7485C11.0706 7.7485 12.4435 8.29276 13.4875 9.12347C14.1168 9.63908 14.8605 9.66773 15.4039 9.12347C15.9331 8.57921 16.0189 7.7485 15.4611 7.23289C14.0739 5.98683 11.9859 5.11315 9.68332 5.11315C7.38077 5.11315 5.27845 5.98683 3.9055 7.23289C3.41925 7.69121 3.31914 8.47896 3.96271 9.13779L3.94841 9.13779ZM8.72511 13.8929C9.34008 14.4801 9.98365 14.4801 10.5986 13.8929L11.757 12.7757C12.372 12.1742 12.5007 11.4151 11.7999 10.8995C11.2136 10.4841 10.4699 10.212 9.66901 10.212C8.86813 10.212 8.11015 10.4841 7.53809 10.9138C6.83731 11.4151 6.98033 12.1885 7.59529 12.7757L8.73942 13.8929L8.72511 13.8929Z" }) });
}
function W1() {
  return /* @__PURE__ */ l.jsxs("svg", { viewBox: "0 0 29.33 13.67", width: "29.33", height: "13.67", className: "ss-phone__glyph ss-phone__battery", children: [
    /* @__PURE__ */ l.jsx("path", { fill: "currentColor", d: "M0 6.4C0 4.15979 0 3.03969 0.435974 2.18404C0.819467 1.43139 1.43139 0.819467 2.18404 0.435974C3.03969 0 4.15979 0 6.4 0L19.933 0C22.1732 0 23.2933 0 24.149 0.435974C24.9016 0.819467 25.5135 1.43139 25.897 2.18404C26.333 3.03969 26.333 4.15979 26.333 6.4L26.333 7.26666C26.333 9.50687 26.333 10.627 25.897 11.4826C25.5135 12.2353 24.9016 12.8472 24.149 13.2307C23.2933 13.6667 22.1732 13.6667 19.933 13.6667L6.4 13.6667C4.15979 13.6667 3.03969 13.6667 2.18404 13.2307C1.43139 12.8472 0.819467 12.2353 0.435974 11.4826C0 10.627 0 9.50687 0 7.26666L0 6.4Z" }),
    /* @__PURE__ */ l.jsx("path", { fillRule: "evenodd", fill: "currentColor", transform: "translate(27.33 4.33)", d: "M0 0L0 5C0.601505 4.8625 2 3.75 2 2.5C2 1.25 0.601505 0.1375 0 0Z" })
  ] });
}
const qo = M.createContext({ current: !0 });
function Lo(a) {
  const c = getComputedStyle(a), u = c.boxSizing === "border-box" ? 0 : [c.paddingLeft, c.paddingRight, c.borderLeftWidth, c.borderRightWidth].reduce((S, C) => S + (parseFloat(C) || 0), 0), y = parseFloat(c.width) + u, v = y && a.getBoundingClientRect().width / y || 1, w = /* @__PURE__ */ new Map();
  return new Map(Array.from(a.children, (S) => {
    const C = S.offsetParent;
    return C && !w.has(C) && w.set(C, C.getBoundingClientRect().top), [S, (S.getBoundingClientRect().top - (C ? w.get(C) : 0)) / v];
  }));
}
function F1({ app: a = "imessage", className: c, style: u, children: y }) {
  const v = M.useRef(null), w = M.useRef(!1), S = v.current ? Lo(v.current) : /* @__PURE__ */ new Map();
  M.useEffect(() => {
    w.current = !0;
  }, []), M.useLayoutEffect(() => {
    const z = v.current;
    if (!z) return;
    const I = Lo(z);
    for (const [U, J] of Array.from(I)) {
      const T = U, X = S.get(T);
      if (X === void 0 || Math.abs(X - J) < 1e-3) continue;
      const K = parseFloat(getComputedStyle(T).top) || 0;
      T.style.transition = "none", T.style.top = `${X + K - J}px`, T.offsetWidth, T.style.transition = "", T.style.top = "";
    }
  });
  const C = M.Children.toArray(y).filter(M.isValidElement), N = (z) => z.type === Rn ? z.props.from : null, R = C.map((z, I) => {
    if (z.type !== Rn || z.props.tail !== void 0) return z;
    const U = C.slice(I + 1).find((J) => J.type === Rn);
    return M.cloneElement(z, { tail: !U || N(U) !== z.props.from });
  });
  return /* @__PURE__ */ l.jsx(qo.Provider, { value: w, children: /* @__PURE__ */ l.jsx("div", { ref: v, className: `ss-thread${c ? ` ${c}` : ""}`, "data-app": a, style: u, children: R }) });
}
function Rn({ avatar: a, from: c, typing: u = !1, tail: y, source: v, tapback: w, className: S, style: C, children: N, ...R }) {
  const { fidelity: z } = Ii(), I = M.useRef(M.useContext(qo).current).current, U = M.useRef(null), J = M.useRef(null), T = M.useRef(u), X = M.useRef(!1);
  T.current && !u && (X.current = !0), T.current = u, M.useLayoutEffect(() => {
    const Q = U.current;
    if (!Q) return;
    const re = J.current;
    Q.style.width = "", Q.style.height = "";
    const de = getComputedStyle(Q), F = { w: parseFloat(de.width), h: parseFloat(de.height) };
    if (J.current = F, !re || re.w === F.w && re.h === F.h) return;
    const V = Q.querySelector(".ss-bubble__text");
    V && (V.style.width = getComputedStyle(V).width), Q.style.transition = "none", Q.style.width = `${re.w}px`, Q.style.height = `${re.h}px`, Q.offsetWidth, Q.style.transition = "", Q.style.width = `${F.w}px`, Q.style.height = `${F.h}px`;
    const le = () => {
      Q.style.width = "", Q.style.height = "", V && (V.style.width = "");
    };
    return Q.addEventListener("transitionend", le, { once: !0 }), () => Q.removeEventListener("transitionend", le);
  }, [u, N]), M.useLayoutEffect(() => {
    const Q = U.current;
    if (!Q || !I || !v) return;
    const re = Q.closest(".ss-stage") ?? document, de = re.querySelector(`[data-target="${v}"]`) ?? re.querySelector(v), F = Q.querySelector(".ss-bubble__text");
    if (!de || !F || window.matchMedia("(prefers-reduced-motion: reduce)").matches || Q.closest("[data-still]")) return;
    Q.style.transition = "none", Q.style.left = Q.style.top = "0px";
    const V = Q.getBoundingClientRect().width / Q.offsetWidth || 1, le = de.getBoundingClientRect(), G = F.getBoundingClientRect(), H = (le.left - G.left) / V, Ae = (le.top + le.height / 2 - (G.top + G.height / 2)) / V, pe = "cubic-bezier(0.22, 1, 0.36, 1)";
    Q.style.transition = "none", Q.style.left = `${H}px`, Q.style.top = `${Ae}px`, Q.setAttribute("data-flying", ""), Q.style.color = getComputedStyle(de).color, Q.offsetWidth, Q.style.transition = `left 0.5s ${pe}, top 0.5s ${pe}, color 0.3s ease 0.06s`, Q.style.left = Q.style.top = "", Q.removeAttribute("data-flying"), Q.style.color = "";
    const he = (fe) => {
      fe.target !== Q || fe.propertyName !== "top" || (Q.style.transition = "", Q.removeEventListener("transitionend", he));
    };
    return Q.addEventListener("transitionend", he), () => Q.removeEventListener("transitionend", he);
  }, []);
  let K = N;
  return z === "minimal" && typeof N == "string" && (K = /* @__PURE__ */ l.jsx("span", { className: "ss-bar ss-bubble__bar", style: { width: Math.min(180, N.length * 5.5) } })), /* @__PURE__ */ l.jsxs("div", { className: `ss-bubble-row${S ? ` ${S}` : ""}`, "data-from": c, "data-avatar": a ? "" : void 0, style: C, children: [
    a && c !== "me" && /* @__PURE__ */ l.jsx("span", { className: "ss-bubble__avatar", "aria-hidden": !0, children: a }),
    /* @__PURE__ */ l.jsxs("div", { ...R, ref: U, className: "ss-bubble", "data-arrived": I || void 0, "data-source": v ? "" : void 0, "data-tail": y || void 0, "data-typing": u || void 0, "data-grew": X.current || void 0, "data-tapback": w && w.show !== !1 ? "" : void 0, children: [
      w && /* @__PURE__ */ l.jsx("span", { className: "ss-tapback", "data-show": w.show !== !1 || void 0, "aria-hidden": !0, children: /* @__PURE__ */ l.jsx("span", { className: "ss-tapback__emoji", children: w.emoji }) }),
      u ? /* @__PURE__ */ l.jsxs("span", { className: "ss-bubble__dots", "aria-label": "typing", children: [
        /* @__PURE__ */ l.jsx("i", {}),
        /* @__PURE__ */ l.jsx("i", {}),
        /* @__PURE__ */ l.jsx("i", {})
      ] }) : /* @__PURE__ */ l.jsx("span", { className: "ss-bubble__text", children: K }),
      /* @__PURE__ */ l.jsx("svg", { className: "ss-bubble__tail", viewBox: "0 0 18 16", "aria-hidden": !0, children: /* @__PURE__ */ l.jsx("path", { d: c === "me" ? "M0 0H12V8.5C12 12.6 14 15 17.5 16C15 16.7 12.2 16.5 9.8 15.3L0 15Z" : "M18 0H6V8.5C6 12.6 4 15 0.5 16C3 16.7 5.8 16.5 8.2 15.3L18 15Z" }) })
    ] })
  ] });
}
function X1({ children: a, className: c }) {
  return /* @__PURE__ */ l.jsx("div", { className: `ss-stamp${c ? ` ${c}` : ""}`, children: a });
}
function G0({ from: a, to: c, route: u = "h", show: y, radius: v = 8, dots: w, arrow: S, label: C, labelAt: N = 0.5, dashed: R, className: z }) {
  const I = S && u === "curve" ? { x: c.x - Math.sign(c.x - a.x) * Math.min(8, Math.abs(c.x - a.x) / 3), y: c.y } : c, U = I === c ? Mo(a, c, u, v) : `${Mo(a, I, u, v)}L${c.x} ${c.y}`, J = w ?? (S ? "none" : "end"), T = M.useRef(null), X = M.useRef(null), K = `ss-connector-${M.useId().replace(/:/g, "")}`, [Q, re] = M.useState(!1);
  M.useLayoutEffect(() => {
    const fe = T.current;
    if (!fe) return;
    if (!R) {
      fe.style.removeProperty("stroke-dasharray");
      return;
    }
    const ve = fe.getTotalLength(), we = Math.max(1, Math.round((ve + 4) / 8)), Le = (ve / (we * 2 - 1)).toFixed(3);
    fe.style.strokeDasharray = `${Le} ${Le}`;
  }, [U, R]), M.useLayoutEffect(() => {
    const fe = R ? X.current : T.current;
    if (re(!1), !y || !fe) return;
    const ve = "stroke-dashoffset", we = () => {
      const Se = getComputedStyle(fe);
      Math.abs(parseFloat(Se.strokeDashoffset)) < 1e-4 && re(!0);
    }, Le = (Se) => {
      Se.target === fe && Se.propertyName === ve && we();
    };
    return fe.addEventListener("transitionend", Le), fe.addEventListener("transitioncancel", Le), we(), () => {
      fe.removeEventListener("transitionend", Le), fe.removeEventListener("transitioncancel", Le);
    };
  }, [U, R, y]);
  const de = I === c ? Ro(a, c, u) : [...Ro(a, I, u), c], F = de[de.length - 1], V = de.slice(0, -1).reverse().find((fe) => Math.hypot(F.x - fe.x, F.y - fe.y) > 1e-3) ?? F, le = Math.hypot(F.x - V.x, F.y - V.y), G = le || 1, H = (F.x - V.x) / G, Ae = (F.y - V.y) / G, pe = `M${F.x - H * 6 - Ae * 4} ${F.y - Ae * 6 + H * 4}L${F.x} ${F.y}L${F.x - H * 6 + Ae * 4} ${F.y - Ae * 6 - H * 4}`, he = V1(de, N);
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsxs("svg", { className: `ss-connector${z ? ` ${z}` : ""}`, "data-show": y || void 0, "data-arrived": y && Q || void 0, "data-dashed": R || void 0, "aria-hidden": !0, children: [
      R && /* @__PURE__ */ l.jsx("defs", { children: /* @__PURE__ */ l.jsx("mask", { id: K, maskUnits: "userSpaceOnUse", children: /* @__PURE__ */ l.jsx("path", { ref: X, className: "ss-connector__reveal", d: U, pathLength: "1", style: { fill: "none", stroke: "#fff", strokeWidth: 8 } }) }) }),
      /* @__PURE__ */ l.jsx("path", { ref: T, className: "ss-connector__line", d: U, pathLength: R ? void 0 : 1, mask: R ? `url(#${K})` : void 0 }),
      S && le > 1e-3 && /* @__PURE__ */ l.jsx("path", { d: pe, className: "ss-connector__arrow" }),
      J === "both" && /* @__PURE__ */ l.jsx("circle", { cx: a.x, cy: a.y, r: 3, className: "ss-connector__dot ss-connector__dot--start" }),
      J !== "none" && /* @__PURE__ */ l.jsx("circle", { cx: c.x, cy: c.y, r: 3, className: "ss-connector__dot" })
    ] }),
    C !== void 0 && /* @__PURE__ */ l.jsx("span", { className: "ss-connector__label", "data-show": y || void 0, "data-arrived": y && Q || void 0, "data-step": typeof C == "number" || void 0, style: { left: he.x, top: he.y }, children: C })
  ] });
}
function Ko(a, c) {
  const u = (a.x + c.x) / 2;
  return [{ x: u, y: a.y }, { x: u, y: c.y }];
}
function Ro(a, c, u) {
  if (u === "straight") return [a, c];
  if (u === "curve") {
    const [y, v] = Ko(a, c);
    return Array.from({ length: 25 }, (w, S) => {
      const C = S / 24, N = 1 - C;
      return {
        x: N * N * N * a.x + 3 * N * N * C * y.x + 3 * N * C * C * v.x + C * C * C * c.x,
        y: N * N * N * a.y + 3 * N * N * C * y.y + 3 * N * C * C * v.y + C * C * C * c.y
      };
    });
  }
  if (u === "step") {
    const y = (a.x + c.x) / 2;
    return [a, { x: y, y: a.y }, { x: y, y: c.y }, c];
  }
  return u === "h" ? [a, { x: c.x, y: a.y }, c] : [a, { x: a.x, y: c.y }, c];
}
function V1(a, c) {
  const u = a.slice(1).map((v, w) => Math.hypot(v.x - a[w].x, v.y - a[w].y));
  let y = u.reduce((v, w) => v + w, 0) * Math.max(0, Math.min(1, c));
  for (let v = 0; v < u.length; v++) {
    if (y <= u[v] || v === u.length - 1) {
      const w = u[v] ? Math.min(1, y / u[v]) : 0;
      return { x: a[v].x + (a[v + 1].x - a[v].x) * w, y: a[v].y + (a[v + 1].y - a[v].y) * w };
    }
    y -= u[v];
  }
  return a[0];
}
function Mo(a, c, u, y) {
  if (u === "straight") return `M${a.x} ${a.y}L${c.x} ${c.y}`;
  if (u === "curve") {
    const [R, z] = Ko(a, c);
    return `M${a.x} ${a.y}C${R.x} ${R.y} ${z.x} ${z.y} ${c.x} ${c.y}`;
  }
  const v = c.x - a.x, w = c.y - a.y;
  if (u === "step") {
    const R = (a.x + c.x) / 2, z = Math.min(y, Math.abs(v) / 2, Math.abs(w) / 2), I = Math.sign(v) || 1, U = Math.sign(w) || 1;
    return z ? `M${a.x} ${a.y}H${R - I * z}Q${R} ${a.y} ${R} ${a.y + U * z}V${c.y - U * z}Q${R} ${c.y} ${R + I * z} ${c.y}H${c.x}` : `M${a.x} ${a.y}H${R}V${c.y}H${c.x}`;
  }
  const S = Math.min(y, Math.abs(v), Math.abs(w)), C = Math.sign(v) || 1, N = Math.sign(w) || 1;
  return u === "h" ? `M${a.x} ${a.y}H${c.x - C * S}Q${c.x} ${a.y} ${c.x} ${a.y + N * S}V${c.y}` : `M${a.x} ${a.y}V${c.y - N * S}Q${a.x} ${c.y} ${a.x + C * S} ${c.y}H${c.x}`;
}
const J1 = "012345678901234567890123456789".split(""), Ql = 10, G1 = (a) => {
  const c = /^(.*\d)(\s*)([^\d\s.,]+)$/.exec(a);
  return c ? { head: c[1], space: c[2].length > 0, unit: c[3] } : { head: a, space: !1, unit: "" };
}, Do = (a) => {
  const c = [];
  for (let u = a.length - 1; u >= 0; u--) {
    const y = a[u];
    y >= "0" && y <= "9" && c.push(Number(y));
  }
  return c;
};
function _t({ value: a, format: c = (C) => Math.round(C).toLocaleString("en-US"), duration: u = 700, stagger: y = 45, className: v, style: w, ...S }) {
  const C = Oi(), N = M.useRef(null), R = c(a), { head: z, space: I, unit: U } = G1(R), J = z.split(""), T = Do(R), [X, K] = M.useState(() => T.map((F) => Ql + F)), Q = M.useRef({ text: R, value: a, idx: X });
  Q.current.idx = X;
  const re = M.useRef(!1);
  M.useLayoutEffect(() => {
    const F = N.current;
    if (!F) return;
    const V = Q.current;
    if (V.text === R) return;
    const le = C || u <= 0 || !!F.closest("[data-instant], [data-offscreen]"), G = Do(V.text), H = a >= V.value, Ae = T.map((pe, he) => {
      const fe = G[he], ve = V.idx[he];
      return fe === void 0 || ve === void 0 || le ? Ql + pe : fe === pe ? ve : H ? ve + (pe - fe + 10) % 10 : ve - (fe - pe + 10) % 10;
    });
    if (F.toggleAttribute("data-snap", le), !le) {
      for (const pe of Array.from(F.querySelectorAll(".ss-count__strip"))) getComputedStyle(pe).transform;
      F.setAttribute("data-rolling", "");
    }
    Q.current = { text: R, value: a, idx: Ae }, K(Ae);
  }, [R, a, C, u]), M.useEffect(() => {
    const F = N.current;
    if (!F || !F.hasAttribute("data-rolling")) return;
    const V = window.setTimeout(() => {
      F.setAttribute("data-snap", ""), re.current = !0;
      const le = T.map((G) => Ql + G);
      Q.current.idx = le, K(le), F.removeAttribute("data-rolling");
    }, u + y * T.length + 60);
    return () => window.clearTimeout(V);
  }, [X]), M.useLayoutEffect(() => {
    const F = N.current;
    if (!(!F || !re.current)) {
      re.current = !1;
      for (const V of Array.from(F.querySelectorAll(".ss-count__strip"))) getComputedStyle(V).transform;
      F.removeAttribute("data-snap");
    }
  }, [X]);
  let de = T.length;
  return /* @__PURE__ */ l.jsxs("span", { ...S, ref: N, className: `ss-count${v ? ` ${v}` : ""}`, style: w, "aria-label": R, children: [
    J.map((F, V) => {
      if (F < "0" || F > "9") return /* @__PURE__ */ l.jsx("span", { className: "ss-count__char", "aria-hidden": !0, children: F }, `s${V}-${F}`);
      const le = --de, G = X[le] ?? Ql + Number(F);
      return /* @__PURE__ */ l.jsx("span", { className: "ss-count__digit", "data-crop": !0, "aria-hidden": !0, children: /* @__PURE__ */ l.jsx(
        "span",
        {
          className: "ss-count__strip",
          style: { transform: `translateY(${-G}em)`, transitionDuration: `${u}ms`, transitionDelay: `${le * y}ms` },
          children: J1.map((H, Ae) => /* @__PURE__ */ l.jsx("span", { children: H }, Ae))
        }
      ) }, `d${le}`);
    }),
    U && /* @__PURE__ */ l.jsx("span", { className: "ss-count__unit", "data-space": I || void 0, "aria-hidden": !0, children: U })
  ] });
}
function z0({ open: a, reveal: c = "clip", from: u = "above", solid: y = !1, children: v, className: w, ...S }) {
  const [C, N] = M.useState(!1), [R, z] = M.useState(!1), I = M.useRef(null), U = M.useRef(!0);
  return M.useLayoutEffect(() => {
    const J = I.current?.scrollHeight ?? 0;
    if (J && z(J > 44), U.current) return void (U.current = !1);
    N(!0);
    const T = setTimeout(() => N(!1), 900);
    return () => clearTimeout(T);
  }, [a]), /* @__PURE__ */ l.jsx(
    "div",
    {
      ...S,
      className: `ss-collapse${w ? ` ${w}` : ""}`,
      "data-open": a || void 0,
      "data-reveal": c,
      "data-solid": y || void 0,
      "data-from": c === "drop" ? u : void 0,
      "data-moving": C || void 0,
      "data-tall": R || void 0,
      onTransitionEnd: (J) => {
        J.target === J.currentTarget && J.propertyName === "grid-template-rows" && N(!1), S.onTransitionEnd?.(J);
      },
      children: /* @__PURE__ */ l.jsx("div", { ref: I, className: "ss-collapse__inner", "data-crop": c === "clip" || void 0, children: v })
    }
  );
}
function Ui({ value: a, states: c, align: u = "center", className: y, style: v, ...w }) {
  const S = Oi();
  return /* @__PURE__ */ l.jsx("span", { ...w, className: `ss-states${y ? ` ${y}` : ""}`, "data-align": u, "data-reduced": S || void 0, style: v, children: Object.keys(c).map((C) => /* @__PURE__ */ l.jsx("span", { className: "ss-states__item", "data-on": C === a || void 0, "aria-hidden": C !== a || void 0, children: c[C] }, C)) });
}
function Yo({ text: a, count: c, mark: u, className: y, style: v, ...w }) {
  const S = a.split(" "), C = S.map((N, R) => !!u?.(N, R));
  return /* @__PURE__ */ l.jsx("span", { ...w, className: `ss-stream${y ? ` ${y}` : ""}`, style: v, children: S.map((N, R) => {
    const z = C[R] && C[R + 1];
    return /* @__PURE__ */ l.jsxs("span", { children: [
      /* @__PURE__ */ l.jsxs("span", { className: "ss-stream__w", "data-on": R < c || void 0, "data-mark": C[R] || void 0, "data-join": z || void 0, "data-joined": C[R] && C[R - 1] || void 0, children: [
        N,
        z ? " " : ""
      ] }),
      !z && R < S.length - 1 ? " " : ""
    ] }, R);
  }) });
}
const To = ["#c98f6e", "#6f9b7d", "#7b86c7", "#c47a9e", "#8c9ab0", "#c2a35a"], q1 = (a) => {
  let c = 0;
  for (const u of a) c = (c * 31 + u.charCodeAt(0)) % 9973;
  return To[c % To.length];
};
function En({ name: a = "", plain: c = !1, size: u = 24, tone: y = a ? "person" : "ink", src: v, ring: w, className: S, style: C, ...N }) {
  const { fidelity: R } = Ii(), z = c || R === "minimal", I = y === "person" && !z ? { background: q1(a), color: "#fff" } : void 0, U = a.trim().split(/\s+/).filter(Boolean), J = y === "ios" ? (U[0]?.[0] ?? "") + (U.length > 1 ? U[U.length - 1][0] : "") : a.trim()[0] ?? "";
  return /* @__PURE__ */ l.jsx(
    "span",
    {
      ...N,
      className: `ss-avatar${S ? ` ${S}` : ""}`,
      "data-tone": y,
      "data-ring": w,
      style: { width: u, height: u, fontSize: Math.round(u * (y === "ios" ? 0.4 : u < 24 ? 0.5 : 0.42)), ...I, ...C },
      children: v && !z ? /* @__PURE__ */ l.jsx("img", { src: v, alt: "" }) : z ? null : /* @__PURE__ */ l.jsx("span", { className: "ss-avatar__initial", children: J.toUpperCase() })
    }
  );
}
function Wl({ on: a, pending: c, size: u = 16, className: y, ...v }) {
  return /* @__PURE__ */ l.jsx("span", { ...v, className: `ss-check${y ? ` ${y}` : ""}`, "data-on": a || void 0, "data-pending": c && !a || void 0, style: { width: u, height: u, ...v.style }, children: /* @__PURE__ */ l.jsxs("svg", { viewBox: "0 0 16 16", width: u, height: u, "aria-hidden": !0, children: [
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
const K1 = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Zo = (...a) => a.filter((c, u, y) => !!c && c.trim() !== "" && y.indexOf(c) === u).join(" ").trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Y1 = {
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
const Z1 = M.forwardRef(
  ({
    color: a = "currentColor",
    size: c = 24,
    strokeWidth: u = 2,
    absoluteStrokeWidth: y,
    className: v = "",
    children: w,
    iconNode: S,
    ...C
  }, N) => M.createElement(
    "svg",
    {
      ref: N,
      ...Y1,
      width: c,
      height: c,
      stroke: a,
      strokeWidth: y ? Number(u) * 24 / Number(c) : u,
      className: Zo("lucide", v),
      ...C
    },
    [
      ...S.map(([R, z]) => M.createElement(R, z)),
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
const Ee = (a, c) => {
  const u = M.forwardRef(
    ({ className: y, ...v }, w) => M.createElement(Z1, {
      ref: w,
      iconNode: c,
      className: Zo(`lucide-${K1(a)}`, y),
      ...v
    })
  );
  return u.displayName = `${a}`, u;
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bo = Ee("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _o = Ee("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b1 = Ee("Banknote", [
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
const _1 = Ee("BatteryFull", [
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
const $1 = Ee("Bell", [
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
const ed = Ee("CalendarCheck", [
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
const Sr = Ee("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const td = Ee("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wi = Ee("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nd = Ee("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rd = Ee("Database", [
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
const ld = Ee("FileText", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sd = Ee("Heart", [
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
const id = Ee("Landmark", [
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
const ad = Ee("ListChecks", [
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
const od = Ee("Lock", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $o = Ee("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ud = Ee("RefreshCw", [
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
const cd = Ee("Send", [
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
const dd = Ee("Share2", [
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
const eu = Ee("Signal", [
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
const fd = Ee("Sparkles", [
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
const hd = Ee("Split", [
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
const pd = Ee("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bo = Ee("TriangleAlert", [
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
const tu = Ee("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const md = Ee("Wallet", [
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
const nu = Ee("Wifi", [
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
const vd = Ee("Workflow", [
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
const yd = Ee("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function gd({ size: a = 14, className: c, style: u, ...y }) {
  return /* @__PURE__ */ l.jsxs("svg", { ...y, className: `ss-spinner${c ? ` ${c}` : ""}`, viewBox: "0 0 16 16", width: a, height: a, style: u, "aria-hidden": !0, children: [
    /* @__PURE__ */ l.jsx("circle", { cx: "8", cy: "8", r: "6.25", fill: "none", stroke: "currentColor", strokeOpacity: "0.18", strokeWidth: "1.5" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 1.75a6.25 6.25 0 0 1 6.25 6.25", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
  ] });
}
function xd({ value: a, tone: c = "accent", className: u, style: y, ...v }) {
  return /* @__PURE__ */ l.jsx("span", { ...v, className: `ss-meter${u ? ` ${u}` : ""}`, "data-tone": c, style: y, children: /* @__PURE__ */ l.jsx("span", { className: "ss-meter__fill", style: { clipPath: `inset(0 ${(1 - Math.max(0, Math.min(1, a))) * 100}% 0 0 round 3px)` } }) });
}
function Li({ lead: a, title: c, subtitle: u, meta: y, preview: v, unread: w, selected: S, pad: C = 12, className: N, style: R, children: z, ...I }) {
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      ...I,
      className: `ss-row${N ? ` ${N}` : ""}`,
      "data-selected": S || void 0,
      "data-unread": w || void 0,
      "data-lead": a ? "" : void 0,
      style: { "--ss-row-pad": `${C}px`, ...R },
      children: [
        w && /* @__PURE__ */ l.jsx("span", { className: "ss-row__dot", "aria-hidden": !0 }),
        a && /* @__PURE__ */ l.jsx("span", { className: "ss-row__lead", children: a }),
        /* @__PURE__ */ l.jsxs("span", { className: "ss-row__body", children: [
          /* @__PURE__ */ l.jsxs("span", { className: "ss-row__head", children: [
            /* @__PURE__ */ l.jsx("span", { className: "ss-row__title", children: c }),
            y && /* @__PURE__ */ l.jsx("span", { className: "ss-row__meta", children: y })
          ] }),
          u && /* @__PURE__ */ l.jsx("span", { className: "ss-row__subtitle", children: u })
        ] }),
        v && (Array.isArray(v) && v.every((U) => typeof U == "number") ? /* @__PURE__ */ l.jsx("span", { className: "ss-row__preview", "aria-hidden": !0, children: v.map((U, J) => /* @__PURE__ */ l.jsx(kr, { w: U, h: 6, tone: 2 }, J)) }) : /* @__PURE__ */ l.jsx("span", { className: "ss-row__preview", "data-text": !0, children: v })),
        z
      ]
    }
  );
}
const wd = "data:image/webp;base64,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", Ad = "data:image/webp;base64,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", kd = "data:image/webp;base64,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", jd = "data:image/webp;base64,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", Sd = { greet: !1, card: !1, pick: !1, me: !1, chip: !1, reply: !1, typing: !0, agent: !1, queue: !1, att: 0, link: !1 }, Nd = { greet: !0, card: !0, pick: !0, me: !0, chip: !0, reply: !0, typing: !1, agent: !0, queue: !0, att: 3, link: !0 }, Di = { wide: { x: 500, y: 430 }, compact: { x: 300, y: 410 } };
async function Pd(a) {
  await a.wait(700), a.mark("greet"), await a.set({ greet: !0 }), await a.wait(800), a.mark("card"), await a.set({ card: !0 }), await a.wait(1100), a.mark("tap"), await a.click("trx"), a.put({ pick: !0 }), await a.wait(350), await a.set({ me: !0 }), await a.wait(650), a.mark("intent"), await a.set({ chip: !0 }), await a.wait(700), await a.set({ reply: !0 }), await a.wait(1e3), a.mark("reply"), await a.set({ typing: !1 }), await a.wait(900), a.mark("handoff"), await a.set({ queue: !0 }), await a.wait(700), await a.stagger([1, 2, 3], (c) => a.put({ att: c }), 110), await a.wait(800), a.mark("join"), await a.set({ agent: !0 }), await a.wait(900), await a.set({ link: !0 }), await a.wait(2600), a.mark("exit"), await a.set({ link: !1 }), await a.move(a.layout === "wide" ? Di.wide : Di.compact), await a.wait(300), await a.stagger(["agent", "queue", "reply", "chip", "me", "card", "greet"], (c) => a.put({ [c]: !1 }), 55), await a.wait(700), await a.snap({ att: 0, typing: !0, pick: !1 }), await a.wait(100);
}
const Cd = [
  { id: "info", label: "Informasi seputar LinkAja", src: wd },
  { id: "trx", label: "Keluhan mengenai transaksi", src: Ad },
  { id: "non", label: "Keluhan mengenai non-transaksi", src: kd },
  { id: "req", label: "Permintaan", src: jd }
];
function zd() {
  return /* @__PURE__ */ l.jsx(
    Nr,
    {
      width: 598,
      height: 470,
      compact: { below: 560, width: 358, height: 450 },
      initial: Sd,
      poster: Nd,
      script: Pd,
      cursor: { at: Di, style: "touch" },
      play: "loop",
      theme: "dark",
      className: "lr",
      children: (a, c, u) => {
        const y = u === "wide", v = y ? c("agent") : null, w = y ? c("case") : null;
        return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsxs(Pr, { width: y ? 340 : 326, frame: "android", status: !1, wallpaper: "#f3f4fa", className: "lr-phone", children: [
            /* @__PURE__ */ l.jsxs(F1, { className: "lr-thread", children: [
              /* @__PURE__ */ l.jsx(X1, { children: "Obrolan dimulai at 20:49" }),
              /* @__PURE__ */ l.jsx(z0, { open: a.greet, reveal: "drop", from: "below", children: /* @__PURE__ */ l.jsx("div", { className: "lr-gap", children: /* @__PURE__ */ l.jsxs(Rn, { from: "them", tail: !1, children: [
                "Hai ",
                /* @__PURE__ */ l.jsx("b", { children: "DENNY RYANTO" }),
                ", mohon maaf atas kendala yang kamu alami, berikut adalah beberapa informasi kendala yang bisa kamu pilih."
              ] }) }) }),
              /* @__PURE__ */ l.jsx(z0, { open: a.card, reveal: "drop", from: "below", children: /* @__PURE__ */ l.jsx("div", { className: "lr-gap", children: /* @__PURE__ */ l.jsx("div", { className: "lr-menu", children: Cd.map((S) => /* @__PURE__ */ l.jsxs("div", { className: "lr-opt", "data-picked": S.id === "trx" && a.pick || void 0, "data-target": S.id === "trx" ? "trx" : void 0, "data-cursor": S.id === "trx" ? "pointer" : void 0, children: [
                /* @__PURE__ */ l.jsx("img", { src: S.src, alt: "" }),
                /* @__PURE__ */ l.jsx("span", { children: S.label }),
                /* @__PURE__ */ l.jsx(Wi, { size: 18, strokeWidth: 2.4 })
              ] }, S.id)) }) }) }),
              /* @__PURE__ */ l.jsx(z0, { open: a.me, reveal: "drop", from: "below", children: /* @__PURE__ */ l.jsx("div", { className: "lr-gap", children: /* @__PURE__ */ l.jsx(Rn, { from: "me", tail: !0, children: "Keluhan mengenai transaksi" }) }) }),
              /* @__PURE__ */ l.jsx(z0, { open: a.chip, reveal: "drop", from: "below", children: /* @__PURE__ */ l.jsx("div", { className: "lr-intent lr-gap", children: "Intent · Keluhan transaksi" }) }),
              /* @__PURE__ */ l.jsx(z0, { open: a.reply, reveal: "drop", from: "below", children: /* @__PURE__ */ l.jsx("div", { className: "lr-gap", children: /* @__PURE__ */ l.jsx(Rn, { from: "them", tail: !0, typing: a.typing, children: "Kami teruskan ke tim transaksi." }) }) }),
              /* @__PURE__ */ l.jsx(z0, { open: a.agent, reveal: "drop", from: "below", children: /* @__PURE__ */ l.jsxs("div", { className: "lr-agent lr-gap", children: [
                /* @__PURE__ */ l.jsx(En, { name: "Rina", size: 26 }),
                /* @__PURE__ */ l.jsx("span", { "data-target": "agent", children: "Rina, agen transaksi, bergabung" })
              ] }) })
            ] }),
            /* @__PURE__ */ l.jsx("div", { className: "lr-compose", children: /* @__PURE__ */ l.jsx("span", { className: "lr-field", children: "Silakan klik menu yang tersedia" }) })
          ] }),
          y && /* @__PURE__ */ l.jsxs("div", { className: "lr-queue", children: [
            /* @__PURE__ */ l.jsx("div", { className: "lr-queue__head", children: "Agent queue" }),
            /* @__PURE__ */ l.jsx(Li, { lead: /* @__PURE__ */ l.jsx(En, { plain: !0, size: 28 }), title: /* @__PURE__ */ l.jsx(kr, { w: 92, h: 8 }), subtitle: /* @__PURE__ */ l.jsx(kr, { w: 64, h: 6, tone: 2 }), pad: 0 }),
            /* @__PURE__ */ l.jsx(Li, { lead: /* @__PURE__ */ l.jsx(En, { plain: !0, size: 28 }), title: /* @__PURE__ */ l.jsx(kr, { w: 78, h: 8 }), subtitle: /* @__PURE__ */ l.jsx(kr, { w: 52, h: 6, tone: 2 }), pad: 0 }),
            /* @__PURE__ */ l.jsx(z0, { open: a.queue, reveal: "drop", children: /* @__PURE__ */ l.jsxs("div", { className: "lr-case", "data-target": "case", children: [
              /* @__PURE__ */ l.jsx(Li, { lead: /* @__PURE__ */ l.jsx(En, { name: "Rina", size: 28 }), title: "Transaction case", subtitle: "Handled by Rina", pad: 0 }),
              /* @__PURE__ */ l.jsx("div", { className: "lr-att", children: ["Chat history", "Transactions", "Account status"].map((S, C) => /* @__PURE__ */ l.jsxs("div", { className: "lr-att__row", "data-on": a.att > C || void 0, children: [
                /* @__PURE__ */ l.jsx(Wl, { on: a.att > C, size: 14 }),
                S
              ] }, S)) })
            ] }) })
          ] }),
          y && v && w && /* @__PURE__ */ l.jsx(G0, { from: { x: v.x + v.width, y: v.y + v.height / 2 }, to: { x: w.x, y: w.y + 22 }, route: "curve", show: a.link })
        ] });
      }
    }
  );
}
const Ed = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20xmlns:svg='http://www.w3.org/2000/svg'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2046.6%2017.41'%20version='1.1'%20id='svg845'%20%3e%3cdefs%20id='defs839'%3e%3cclipPath%20clipPathUnits='userSpaceOnUse'%20id='clipPath96'%3e%3cpath%20d='M%20-1.2207e-4,2.4414e-4%20H%20959.99988%20V%20540.00024%20H%20-1.2207e-4%20Z'%20clip-rule='evenodd'%20id='path94'%20/%3e%3c/clipPath%3e%3cclipPath%20clipPathUnits='userSpaceOnUse'%20id='clipPath106'%3e%3cpath%20d='M%200,0%20H%20130.46%20V%2023.577%20H%200%20Z'%20id='path104'%20/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20id='layer1'%20transform='translate(-31.991243,-118.40059)'%3e%3cg%20id='g90'%20transform='matrix(0.7313755,0,0,-0.7313755,-550.54458,504.98281)'%20style='fill:%23000000'%3e%3cg%20id='g92'%20clip-path='url(%23clipPath96)'%20style='fill:%23000000'%3e%3cg%20id='g98'%20transform='matrix(2.1033,-7.54e-7,-7.54e-7,0.375,795.24,502.8)'%20style='fill:%23000000'%3e%3cg%20id='g100'%20transform='scale(0.55189,3.0538)'%20style='fill:%23000000'%3e%3cg%20id='g102'%20clip-path='url(%23clipPath106)'%20style='fill:%23000000'%3e%3cg%20id='g108'%20style='fill:%23000000'%3e%3cg%20id='g110'%20style='fill:%23000000'%3e%3cg%20id='g112'%20style='fill:%23000000'%20/%3e%3c/g%3e%3cpath%20d='M%2018.813,19.108%20H%2032.767%20V%2010.622%20H%2026.913%20L%2032.767,5.1912%20H%2027.794%20L%2022.053,10.622%20V%205.1912%20h%20-3.24%20v%208.6268%20h%2010.231%20v%202.065%20H%2018.813%20Z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path114'%20/%3e%3cpath%20d='m%2034.216,5.1912%20h%203.4103%20v%2013.945%20H%2034.216%20Z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path116'%20/%3e%3cpath%20d='M%206.9058,8.5572%20V%2019.108%20H%204.2344%20c%20-0.4831,0%20-0.8526,-0.368%20-0.8526,-0.82%200,-2.49%20-0.0284,-9.8157%20-0.0284,-12.2482%200,-0.4526%200.3695,-0.8486%200.8242,-0.8486%201.8472,0%207.1614,0%207.9284,0%20v%203.366%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path118'%20/%3e%3cpath%20d='m%2013.868,1.712%20c%200.313,0%202.7,0%203.496,0%200,0%200,6.8735%200,6.9866%20-1.137,0%20-2.33,0%20-3.496,0%200,-2.3194%200,-4.6388%200,-6.9866%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path120'%20/%3e%3cpath%20d='m%208.6109,19.108%20c%200,-0.057%200,-3.479%200,-3.479%201.5631,0%203.5521,0%205.2571,0%200,-2.405%200,-5.205%200,-5.205%200.796,0%203.183,0%203.496,0%20v%207.835%20c%200,0.453%20-0.37,0.821%20-0.824,0.849%20-1.705,0%20-5.741,0%20-7.9291,0%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path122'%20/%3e%3cpath%20d='m%208.6109,13.932%20c%200,-1.16%200,-2.32%200,-3.536%200.2842,0%200.5968,0%200.881,0%200.7961,0%201.7901,0%202.5861,0%200,0%200,3.479%200,3.536%20-1.137,0%20-2.3019,0%20-3.4671,0%20z%20m%202.4441,-2.461%20v%200%20c%20-0.341,0%20-0.739,0%20-1.052,0%20-0.1132,0%20-0.2269,0%20-0.369,0%200,0.481%200,0.933%200,1.414%200.483,0%200.938,0%201.421,0%200,-0.028%200,-1.414%200,-1.414%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path124'%20/%3e%3cpath%20d='M%2054.365,8.6986%20V%203.494%20c%200,-0.4525%20-0.398,-0.8203%20-0.852,-0.8203%20H%2048.284%20V%201.8252%20h%206.081%200.029%20c%200.426,0%200.795,0.3677%200.795,0.8203%20v%200.0282%206.0249%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path126'%20/%3e%3cpath%20d='m%201.9325,15.657%20v%205.205%20c%200,0.452%200.341,0.792%200.7957,0.792%20h%205.2291%20c%200.0284,0%200.0284,0.028%200.0284,0.028%20v%200.792%20c%200,0%200,0.028%20-0.0284,0.028%20H%201.9325%20c%20-0.4831,0%20-0.8526,-0.368%20-0.8526,-0.848%20v%20-5.997%20c%200,-0.028%200.0284,-0.028%200.0284,-0.028%20h%200.7958%20c%200,0%200.0284,0%200.0284,0.028%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path128'%20/%3e%3cpath%20d='m%2052.887,15.657%20v%203.451%20H%2039.104%20v%20-5.176%20-3.48%20h%209.18%20V%208.7269%20h%20-9.18%20V%205.2478%20h%2013.783%20v%208.6552%20h%20-9.179%20v%201.754%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path130'%20/%3e%3cpath%20d='m%2062.834,14.101%20h%20-3.041%20c%20-0.369,0%20-0.71,0.057%20-1.051,0.198%20-0.313,0.113%20-0.625,0.311%20-0.853,0.538%20-0.256,0.254%20-0.454,0.537%20-0.597,0.848%20-0.142,0.34%20-0.227,0.679%20-0.227,1.075%200,0.396%200.085,0.736%200.227,1.075%200.143,0.311%200.313,0.622%200.569,0.849%200.256,0.254%200.54,0.424%200.852,0.565%200.341,0.142%200.682,0.198%201.08,0.198%200.37,0%200.711,-0.056%201.052,-0.198%200.312,-0.141%200.597,-0.311%200.852,-0.537%200.228,-0.255%200.427,-0.509%200.569,-0.849%200.142,-0.311%200.199,-0.65%200.199,-1.018%200,-0.226%20-0.029,-0.453%20-0.057,-0.651%20-0.057,-0.226%20-0.142,-0.424%20-0.256,-0.622%20-0.085,-0.17%20-0.227,-0.339%20-0.369,-0.481%20-0.142,-0.169%20-0.313,-0.283%20-0.512,-0.367%20v%200%20h%201.563%20z%20m%20-3.069,0.651%20v%200%20c%200.284,0%200.568,0.056%200.796,0.17%200.227,0.113%200.454,0.254%200.625,0.424%200.17,0.198%200.284,0.396%200.398,0.65%200.085,0.255%200.142,0.538%200.142,0.821%200,0.254%20-0.057,0.537%20-0.142,0.763%20-0.114,0.255%20-0.256,0.453%20-0.427,0.623%20-0.17,0.198%20-0.369,0.339%20-0.596,0.424%20-0.256,0.113%20-0.512,0.17%20-0.796,0.17%20-0.284,0%20-0.54,-0.057%20-0.767,-0.17%20-0.228,-0.085%20-0.427,-0.226%20-0.597,-0.424%20-0.171,-0.17%20-0.313,-0.368%20-0.427,-0.623%20-0.085,-0.226%20-0.142,-0.48%20-0.142,-0.763%200,-0.283%200.057,-0.538%200.142,-0.792%200.086,-0.255%200.228,-0.481%200.398,-0.651%200.171,-0.198%200.37,-0.339%200.626,-0.452%200.227,-0.114%200.483,-0.17%200.767,-0.17%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path132'%20/%3e%3cpath%20d='m%2063.573,19.334%20h%201.847%20c%200.341,0%200.625,-0.056%200.824,-0.141%200.228,-0.113%200.398,-0.227%200.54,-0.368%200.114,-0.141%200.199,-0.283%200.256,-0.453%200.057,-0.169%200.057,-0.339%200.057,-0.509%200,-0.169%20-0.028,-0.339%20-0.085,-0.481%20-0.057,-0.169%20-0.142,-0.311%20-0.256,-0.424%20-0.114,-0.141%20-0.227,-0.226%20-0.398,-0.311%20-0.17,-0.085%20-0.341,-0.141%20-0.54,-0.17%20l%201.506,-2.376%20h%20-0.909%20l%20-1.336,2.291%20h%20-0.796%20v%20-2.291%20h%20-0.71%20z%20m%200.71,-2.319%20v%200%20h%200.938%20c%200.142,0%200.284,0%200.427,0.028%200.113,0.028%200.255,0.057%200.341,0.141%200.113,0.057%200.199,0.142%200.255,0.255%200.086,0.085%200.114,0.255%200.114,0.424%200,0.17%20-0.028,0.311%20-0.114,0.425%20-0.056,0.113%20-0.142,0.198%20-0.255,0.254%20-0.086,0.057%20-0.228,0.113%20-0.341,0.113%20-0.143,0.029%20-0.285,0.057%20-0.427,0.057%20h%20-0.938%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path134'%20/%3e%3cpath%20d='m%2073.832,18.203%20c%20-0.142,0.169%20-0.341,0.339%20-0.568,0.424%20-0.228,0.113%20-0.455,0.17%20-0.711,0.17%20-0.284,0%20-0.568,-0.057%20-0.795,-0.17%20-0.228,-0.113%20-0.455,-0.255%20-0.626,-0.453%20-0.17,-0.198%20-0.284,-0.424%20-0.397,-0.678%20-0.086,-0.255%20-0.143,-0.538%20-0.143,-0.821%200,-0.283%200.057,-0.537%200.143,-0.792%200.085,-0.254%200.227,-0.481%200.397,-0.65%200.171,-0.198%200.37,-0.34%200.597,-0.453%200.256,-0.113%200.54,-0.17%200.824,-0.17%200.313,0%200.569,0.085%200.796,0.198%200.227,0.114%200.426,0.283%200.597,0.51%20l%200.597,-0.453%20c%20-0.057,-0.057%20-0.114,-0.113%20-0.228,-0.226%20-0.085,-0.085%20-0.227,-0.198%20-0.369,-0.311%20-0.171,-0.085%20-0.37,-0.17%20-0.597,-0.255%20-0.227,-0.085%20-0.511,-0.113%20-0.796,-0.113%20-0.426,0%20-0.795,0.085%20-1.136,0.226%20-0.313,0.17%20-0.597,0.368%20-0.853,0.622%20-0.227,0.255%20-0.398,0.566%20-0.54,0.877%20-0.114,0.311%20-0.17,0.651%20-0.17,0.99%200,0.396%200.056,0.764%200.198,1.103%200.143,0.34%200.313,0.651%200.569,0.877%200.227,0.255%200.511,0.453%200.852,0.594%200.341,0.142%200.711,0.198%201.109,0.198%200.341,0%200.682,-0.056%201.023,-0.198%200.341,-0.141%200.597,-0.339%200.824,-0.622%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path136'%20/%3e%3cpath%20d='m%2075.054,15.855%20c%200,0.255%200.057,0.481%200.142,0.707%200.114,0.226%200.228,0.424%200.398,0.566%200.171,0.17%200.37,0.311%200.597,0.396%200.227,0.113%200.483,0.17%200.739,0.17%200.256,0%200.511,-0.057%200.739,-0.17%200.227,-0.085%200.426,-0.226%200.597,-0.396%200.17,-0.142%200.284,-0.34%200.397,-0.566%200.086,-0.226%200.142,-0.452%200.142,-0.707%200,-0.283%20-0.056,-0.509%20-0.142,-0.735%20-0.113,-0.227%20-0.227,-0.425%20-0.397,-0.594%20-0.171,-0.142%20-0.37,-0.283%20-0.597,-0.368%20-0.228,-0.113%20-0.483,-0.142%20-0.739,-0.142%20-0.256,0%20-0.512,0.029%20-0.739,0.142%20-0.227,0.085%20-0.426,0.226%20-0.597,0.368%20-0.17,0.169%20-0.284,0.367%20-0.398,0.594%20-0.085,0.226%20-0.142,0.452%20-0.142,0.735%20z%20m%200.711,0%20v%200%20c%200,-0.198%200.028,-0.368%200.085,-0.509%200.057,-0.142%200.142,-0.283%200.227,-0.368%200.114,-0.113%200.228,-0.198%200.37,-0.254%200.142,-0.057%200.312,-0.114%200.483,-0.114%200.17,0%200.341,0.057%200.483,0.114%200.142,0.056%200.256,0.141%200.369,0.254%200.086,0.085%200.171,0.226%200.228,0.368%200.057,0.141%200.085,0.311%200.085,0.509%200,0.17%20-0.028,0.339%20-0.085,0.481%20-0.057,0.141%20-0.142,0.283%20-0.228,0.368%20-0.113,0.113%20-0.227,0.198%20-0.369,0.254%20-0.142,0.085%20-0.313,0.113%20-0.483,0.113%20-0.171,0%20-0.341,-0.028%20-0.483,-0.113%20-0.142,-0.056%20-0.256,-0.141%20-0.37,-0.254%20-0.085,-0.085%20-0.17,-0.227%20-0.227,-0.368%20-0.057,-0.142%20-0.085,-0.311%20-0.085,-0.481%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path138'%20/%3e%3cpath%20d='M%2083.154,14.101%20H%2082.5%20v%200.481%20h%20-0.028%20c%20-0.114,-0.17%20-0.313,-0.311%20-0.54,-0.424%20-0.199,-0.113%20-0.455,-0.142%20-0.682,-0.142%20-0.256,0%20-0.512,0.029%20-0.739,0.114%20-0.228,0.113%20-0.398,0.226%20-0.569,0.396%20-0.142,0.169%20-0.256,0.367%20-0.341,0.594%20-0.085,0.226%20-0.142,0.452%20-0.142,0.735%200,0.255%200.057,0.481%200.142,0.707%200.085,0.226%200.199,0.424%200.341,0.594%200.171,0.17%200.341,0.283%200.569,0.396%200.227,0.085%200.483,0.142%200.739,0.142%200.255,0%200.483,-0.057%200.71,-0.17%200.227,-0.113%200.398,-0.255%200.512,-0.424%20H%2082.5%20v%202.574%20h%200.654%20z%20m%20-1.819,0.509%20v%200%20c%200.17,0%200.341,0.057%200.483,0.114%200.142,0.056%200.256,0.141%200.369,0.254%200.086,0.085%200.171,0.226%200.228,0.368%200.057,0.141%200.085,0.311%200.085,0.509%200,0.17%20-0.028,0.339%20-0.085,0.481%20-0.057,0.141%20-0.142,0.283%20-0.228,0.368%20-0.113,0.113%20-0.227,0.198%20-0.369,0.254%20-0.142,0.085%20-0.313,0.113%20-0.483,0.113%20-0.171,0%20-0.341,-0.028%20-0.483,-0.113%20-0.142,-0.056%20-0.256,-0.141%20-0.37,-0.254%20-0.085,-0.085%20-0.17,-0.227%20-0.227,-0.368%20-0.057,-0.142%20-0.085,-0.311%20-0.085,-0.481%200,-0.198%200.028,-0.368%200.085,-0.509%200.057,-0.142%200.142,-0.283%200.227,-0.368%200.114,-0.113%200.228,-0.198%200.37,-0.254%200.142,-0.057%200.312,-0.114%200.483,-0.114%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path140'%20/%3e%3cpath%20d='m%2084.66,15.6%20c%200,-0.141%200.057,-0.282%200.113,-0.424%200.057,-0.113%200.143,-0.226%200.256,-0.311%200.114,-0.085%200.256,-0.17%200.398,-0.226%200.142,-0.029%200.284,-0.057%200.426,-0.057%200.228,0%200.398,0.057%200.54,0.142%200.171,0.084%200.313,0.226%200.427,0.367%20l%200.511,-0.367%20c%20-0.369,-0.481%20-0.881,-0.708%20-1.563,-0.708%20-0.284,0%20-0.511,0.029%20-0.739,0.114%20-0.227,0.113%20-0.426,0.226%20-0.597,0.396%20-0.142,0.169%20-0.255,0.367%20-0.341,0.594%20-0.085,0.226%20-0.142,0.452%20-0.142,0.735%200,0.255%200.057,0.481%200.142,0.707%200.086,0.226%200.228,0.424%200.398,0.594%200.142,0.17%200.341,0.283%200.569,0.396%200.227,0.085%200.454,0.142%200.71,0.142%200.313,0%200.597,-0.057%200.796,-0.17%200.227,-0.113%200.398,-0.255%200.54,-0.424%200.142,-0.17%200.227,-0.368%200.284,-0.594%200.085,-0.227%200.114,-0.453%200.114,-0.679%20V%2015.6%20Z%20m%202.131,0.538%20v%200%20c%20-0.028,0.141%20-0.028,0.283%20-0.085,0.396%20-0.028,0.113%20-0.114,0.226%20-0.199,0.311%20-0.085,0.113%20-0.171,0.17%20-0.313,0.226%20-0.113,0.057%20-0.255,0.085%20-0.426,0.085%20-0.17,0%20-0.312,-0.028%20-0.455,-0.113%20-0.142,-0.057%20-0.255,-0.141%20-0.341,-0.226%20-0.085,-0.085%20-0.17,-0.198%20-0.227,-0.34%20-0.057,-0.113%20-0.085,-0.226%20-0.085,-0.339%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path142'%20/%3e%3cpath%20d='m%2090.685,15.176%20c%200.113,-0.17%200.284,-0.311%200.483,-0.424%200.199,-0.085%200.426,-0.142%200.625,-0.142%200.114,0%200.256,0.029%200.369,0.057%200.114,0.057%200.228,0.113%200.341,0.17%200.086,0.085%200.171,0.169%200.228,0.283%200.085,0.113%200.113,0.226%200.113,0.367%200,0.198%20-0.056,0.368%20-0.199,0.481%20-0.113,0.085%20-0.284,0.17%20-0.483,0.255%20-0.17,0.085%20-0.398,0.141%20-0.625,0.198%20-0.227,0.085%20-0.426,0.169%20-0.625,0.283%20-0.171,0.113%20-0.341,0.282%20-0.455,0.48%20-0.142,0.198%20-0.199,0.453%20-0.199,0.821%200,0.141%200.029,0.311%200.086,0.481%200.085,0.169%200.17,0.311%200.312,0.452%200.142,0.17%200.341,0.283%200.569,0.368%200.227,0.113%200.483,0.141%200.795,0.141%200.313,0%200.569,-0.028%200.824,-0.113%200.285,-0.085%200.512,-0.226%200.711,-0.481%20l%20-0.597,-0.509%20c%20-0.085,0.113%20-0.199,0.226%20-0.369,0.311%20-0.171,0.085%20-0.341,0.142%20-0.569,0.142%20-0.199,0%20-0.341,-0.029%20-0.483,-0.085%20-0.142,-0.057%20-0.227,-0.113%20-0.312,-0.198%20-0.086,-0.085%20-0.143,-0.17%20-0.171,-0.255%20-0.028,-0.113%20-0.057,-0.198%20-0.057,-0.254%200,-0.227%200.085,-0.396%200.199,-0.538%200.142,-0.113%200.284,-0.198%200.483,-0.283%200.199,-0.056%200.398,-0.141%200.625,-0.198%200.228,-0.056%200.427,-0.141%200.626,-0.226%200.199,-0.113%200.341,-0.254%200.483,-0.452%200.113,-0.17%200.17,-0.425%200.17,-0.736%200,-0.254%20-0.028,-0.481%20-0.142,-0.679%20-0.085,-0.198%20-0.227,-0.367%20-0.369,-0.509%20-0.171,-0.141%20-0.37,-0.254%20-0.597,-0.311%20-0.199,-0.085%20-0.455,-0.113%20-0.711,-0.113%20-0.341,0%20-0.653,0.056%20-0.937,0.17%20-0.313,0.113%20-0.54,0.311%20-0.739,0.565%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path144'%20/%3e%3cpath%20d='m%2096.368,17.015%20h%20-0.966%20v%20-1.584%20c%200,-0.113%200,-0.198%200,-0.283%200.029,-0.113%200.029,-0.198%200.057,-0.283%200.057,-0.057%200.085,-0.113%200.17,-0.17%200.057,-0.056%200.143,-0.085%200.285,-0.085%200.085,0%200.17,0.029%200.255,0.029%200.086,0.028%200.143,0.056%200.228,0.085%20V%2014.13%20c%20-0.085,-0.057%20-0.199,-0.085%20-0.313,-0.114%20-0.142,0%20-0.227,0%20-0.284,0%20-0.284,0%20-0.483,0.029%20-0.597,0.085%20-0.142,0.085%20-0.256,0.17%20-0.312,0.283%20-0.086,0.113%20-0.114,0.255%20-0.143,0.396%200,0.142%200,0.283%200,0.424%20v%201.811%20h%20-0.767%20v%200.565%20h%200.767%20v%200.99%20h%200.654%20v%20-0.99%20h%200.966%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path146'%20/%3e%3cpath%20d='m%2097.249,17.156%20c%200.171,0.17%200.398,0.311%200.654,0.396%200.227,0.085%200.483,0.142%200.739,0.142%200.256,0%200.483,-0.057%200.653,-0.114%200.199,-0.056%200.342,-0.141%200.455,-0.254%200.114,-0.113%200.228,-0.226%200.28,-0.368%200.03,-0.141%200.06,-0.283%200.06,-0.452%20v%20-1.782%20c%200,-0.114%200.03,-0.227%200.03,-0.34%200,-0.113%200,-0.198%200.03,-0.283%20h%20-0.599%20c%20-0.028,0.17%20-0.028,0.34%20-0.028,0.509%20h%20-0.029%20c%20-0.142,-0.226%20-0.312,-0.367%20-0.511,-0.48%20-0.199,-0.085%20-0.455,-0.114%20-0.711,-0.114%20-0.17,0%20-0.312,0%20-0.454,0.057%20-0.171,0.028%20-0.284,0.113%20-0.398,0.198%20-0.114,0.085%20-0.199,0.198%20-0.256,0.339%20-0.085,0.114%20-0.114,0.283%20-0.114,0.453%200,0.226%200.057,0.396%200.171,0.566%200.085,0.141%200.227,0.283%200.398,0.367%200.17,0.085%200.398,0.17%200.625,0.198%200.227,0.057%200.483,0.057%200.739,0.057%20h%200.511%20v%200.17%20c%200,0.085%20-0.028,0.169%20-0.056,0.254%20-0.029,0.085%20-0.086,0.17%20-0.171,0.255%20-0.057,0.056%20-0.142,0.113%20-0.256,0.17%20-0.113,0.028%20-0.227,0.056%20-0.369,0.056%20-0.114,0%20-0.227,-0.028%20-0.341,-0.056%20-0.085,0%20-0.171,-0.057%20-0.256,-0.085%20C%2097.96,16.986%2097.903,16.93%2097.818,16.902%2097.761,16.845%2097.704,16.788%2097.647,16.76%20Z%20m%201.876,-1.386%20v%200%20c%20-0.171,0%20-0.313,0%20-0.483,-0.028%20-0.171,0%20-0.313,-0.057%20-0.455,-0.085%20-0.142,-0.057%20-0.256,-0.113%20-0.341,-0.226%20-0.085,-0.085%20-0.114,-0.198%20-0.114,-0.34%200,-0.198%200.057,-0.339%200.199,-0.424%200.142,-0.085%200.313,-0.141%200.54,-0.141%200.199,0%200.341,0.028%200.483,0.113%200.114,0.056%200.228,0.141%200.313,0.226%200.085,0.113%200.142,0.198%200.171,0.339%200.028,0.114%200.056,0.227%200.056,0.34%20v%200.226%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path148'%20/%3e%3cpath%20d='m%20101.09,17.58%20h%200.65%20v%20-0.537%20h%200.03%20c%200.08,0.198%200.23,0.339%200.42,0.453%200.2,0.141%200.46,0.198%200.71,0.198%200.18,0%200.35,-0.029%200.52,-0.085%200.14,-0.057%200.28,-0.142%200.39,-0.255%200.12,-0.085%200.2,-0.226%200.29,-0.396%200.06,-0.17%200.08,-0.396%200.08,-0.622%20v%20-2.235%20h%20-0.65%20v%202.065%20c%200,0.17%20-0.03,0.283%20-0.09,0.424%20-0.02,0.114%20-0.08,0.198%20-0.17,0.255%20-0.05,0.085%20-0.14,0.141%20-0.25,0.17%20-0.09,0.028%20-0.2,0.056%20-0.29,0.056%20-0.14,0%20-0.28,-0.028%20-0.39,-0.085%20-0.12,-0.028%20-0.23,-0.113%20-0.32,-0.198%20-0.08,-0.113%20-0.14,-0.226%20-0.2,-0.367%20-0.05,-0.142%20-0.08,-0.311%20-0.08,-0.538%20v%20-1.782%20h%20-0.65%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path150'%20/%3e%3cpath%20d='m%20108.73,14.101%20h%20-0.68%20v%200.481%200%20c%20-0.14,-0.17%20-0.31,-0.311%20-0.54,-0.424%20-0.23,-0.113%20-0.46,-0.142%20-0.68,-0.142%20-0.29,0%20-0.52,0.029%20-0.74,0.114%20-0.23,0.113%20-0.43,0.226%20-0.57,0.396%20-0.17,0.169%20-0.28,0.367%20-0.37,0.594%20-0.09,0.226%20-0.11,0.452%20-0.11,0.735%200,0.255%200.02,0.481%200.11,0.707%200.09,0.226%200.2,0.424%200.37,0.594%200.14,0.17%200.34,0.283%200.57,0.396%200.22,0.085%200.45,0.142%200.74,0.142%200.25,0%200.48,-0.057%200.71,-0.17%200.22,-0.113%200.39,-0.255%200.51,-0.424%20v%200%202.574%20h%200.68%20z%20m%20-1.82,0.509%20v%200%20c%200.17,0%200.34,0.057%200.48,0.114%200.15,0.056%200.26,0.141%200.35,0.254%200.11,0.085%200.19,0.226%200.22,0.368%200.06,0.141%200.09,0.311%200.09,0.509%200,0.17%20-0.03,0.339%20-0.09,0.481%20-0.03,0.141%20-0.11,0.283%20-0.22,0.368%20-0.09,0.113%20-0.2,0.198%20-0.35,0.254%20-0.14,0.085%20-0.31,0.113%20-0.48,0.113%20-0.2,0%20-0.34,-0.028%20-0.48,-0.113%20-0.14,-0.056%20-0.29,-0.141%20-0.37,-0.254%20-0.11,-0.085%20-0.17,-0.227%20-0.23,-0.368%20-0.06,-0.142%20-0.08,-0.311%20-0.08,-0.481%200,-0.198%200.02,-0.368%200.08,-0.509%200.06,-0.142%200.12,-0.283%200.23,-0.368%200.08,-0.113%200.23,-0.198%200.37,-0.254%200.14,-0.057%200.28,-0.114%200.48,-0.114%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path152'%20/%3e%3cpath%20d='m%20109.75,17.156%20c%200.2,0.17%200.4,0.311%200.66,0.396%200.25,0.085%200.48,0.142%200.74,0.142%200.25,0%200.48,-0.057%200.65,-0.114%200.2,-0.056%200.34,-0.141%200.45,-0.254%200.15,-0.113%200.23,-0.226%200.29,-0.368%200.06,-0.141%200.08,-0.283%200.08,-0.452%20v%20-1.782%20c%200,-0.114%200,-0.227%200,-0.34%200,-0.113%200,-0.198%200.03,-0.283%20h%20-0.59%20c%20-0.03,0.17%20-0.03,0.34%20-0.03,0.509%20v%200%20c%20-0.17,-0.226%20-0.34,-0.367%20-0.54,-0.48%20-0.2,-0.085%20-0.43,-0.114%20-0.71,-0.114%20-0.17,0%20-0.32,0%20-0.46,0.057%20-0.14,0.028%20-0.28,0.113%20-0.4,0.198%20-0.11,0.085%20-0.19,0.198%20-0.25,0.339%20-0.06,0.114%20-0.12,0.283%20-0.12,0.453%200,0.226%200.06,0.396%200.18,0.566%200.08,0.141%200.22,0.283%200.39,0.367%200.2,0.085%200.4,0.17%200.63,0.198%200.23,0.057%200.48,0.057%200.77,0.057%20H%20112%20v%200.17%20c%200,0.085%20-0.03,0.169%20-0.06,0.254%20-0.03,0.085%20-0.08,0.17%20-0.17,0.255%20-0.06,0.056%20-0.14,0.113%20-0.25,0.17%20-0.09,0.028%20-0.23,0.056%20-0.37,0.056%20-0.12,0%20-0.23,-0.028%20-0.34,-0.056%20-0.09,0%20-0.18,-0.057%20-0.26,-0.085%20-0.09,-0.029%20-0.14,-0.085%20-0.2,-0.113%20-0.08,-0.057%20-0.14,-0.114%20-0.2,-0.142%20z%20m%201.88,-1.386%20v%200%20c%20-0.14,0%20-0.31,0%20-0.48,-0.028%20-0.17,0%20-0.32,-0.057%20-0.46,-0.085%20-0.14,-0.057%20-0.23,-0.113%20-0.34,-0.226%20-0.08,-0.085%20-0.11,-0.198%20-0.11,-0.34%200,-0.198%200.05,-0.339%200.2,-0.424%200.14,-0.085%200.31,-0.141%200.56,-0.141%200.17,0%200.32,0.028%200.46,0.113%200.14,0.056%200.23,0.141%200.31,0.226%200.09,0.113%200.14,0.198%200.17,0.339%200.03,0.114%200.06,0.227%200.06,0.34%20v%200.226%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path154'%20/%3e%3cpath%20d='m%20113.59,17.58%20h%200.65%20v%20-0.537%20h%200.03%20c%200.03,0.113%200.12,0.198%200.17,0.255%200.09,0.084%200.17,0.141%200.26,0.198%200.08,0.056%200.2,0.113%200.31,0.141%200.09,0.028%200.2,0.057%200.31,0.057%200.12,0%200.2,-0.029%200.29,-0.057%20l%20-0.03,-0.707%20c%20-0.06,0%20-0.09,0.028%20-0.14,0.028%20-0.06,0%20-0.12,0%20-0.17,0%20-0.34,0%20-0.57,-0.085%20-0.74,-0.254%20-0.2,-0.198%20-0.29,-0.481%20-0.29,-0.849%20v%20-1.754%20h%20-0.65%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path156'%20/%3e%3cpath%20d='m%2057.406,10.452%20h%201.847%20c%200.341,0%200.626,-0.028%200.824,-0.141%200.228,-0.085%200.398,-0.198%200.512,-0.3395%20C%2060.731,9.8301%2060.816,9.6886%2060.873,9.4906%2060.902,9.3209%2060.93,9.1512%2060.93,8.9815%2060.93,8.8401%2060.902,8.6703%2060.873,8.5006%2060.816,8.3026%2060.731,8.1612%2060.589,8.0198%2060.475,7.8783%2060.305,7.7652%2060.077,7.6803%2059.879,7.5672%2059.594,7.5389%2059.253,7.5389%20H%2058.117%20V%205.2195%20h%20-0.711%20z%20m%200.711,-2.2908%20v%200%20h%200.937%20c%200.142,0%200.285,0%200.398,0.0283%200.142,0.0283%200.256,0.0566%200.37,0.1131%200.113,0.0566%200.199,0.1415%200.255,0.2546%200.057,0.1131%200.114,0.2546%200.114,0.4243%200,0.198%20-0.057,0.3394%20-0.114,0.4526%20-0.056,0.1131%20-0.142,0.198%20-0.255,0.2545%20-0.114,0.0566%20-0.228,0.0849%20-0.37,0.1132%20-0.113,0.0283%20-0.256,0.0283%20-0.398,0.0283%20h%20-0.937%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path158'%20/%3e%3cpath%20d='m%2062.152,6.7469%20c%200,-0.1697%200.028,-0.3111%200.085,-0.4243%200.057,-0.1414%200.142,-0.2263%200.256,-0.3394%200.114,-0.0849%200.256,-0.1414%200.398,-0.198%200.142,-0.0566%200.284,-0.0566%200.426,-0.0566%200.228,0%200.398,0.0283%200.54,0.1414%200.171,0.0849%200.313,0.2263%200.426,0.3678%20L%2064.795,5.87%20C%2064.426,5.3892%2063.914,5.1346%2063.232,5.1346%20c%20-0.284,0%20-0.512,0.0566%20-0.739,0.1414%20-0.227,0.0849%20-0.426,0.2263%20-0.568,0.396%20-0.171,0.1698%20-0.284,0.3678%20-0.37,0.5941%20-0.085,0.198%20-0.142,0.4525%20-0.142,0.7071%200,0.2546%200.057,0.5091%200.142,0.7354%200.086,0.2263%200.228,0.4243%200.398,0.594%200.142,0.1415%200.341,0.2829%200.568,0.3677%200.228,0.1132%200.455,0.1415%200.711,0.1415%200.313,0%200.597,-0.0566%200.796,-0.1697%200.227,-0.0849%200.398,-0.2263%200.54,-0.4243%200.142,-0.1697%200.227,-0.3677%200.284,-0.5657%200.085,-0.2263%200.114,-0.4526%200.114,-0.6789%20V%206.7469%20Z%20m%202.103,0.5092%20v%200%20C%2064.227,7.4258%2064.227,7.5389%2064.17,7.6803%2064.141,7.7935%2064.056,7.9066%2063.999,7.9915%2063.914,8.0763%2063.8,8.1612%2063.658,8.2178%2063.545,8.2743%2063.402,8.2743%2063.232,8.2743%2063.061,8.2743%2062.919,8.2461%2062.777,8.1895%2062.635,8.1329%2062.521,8.0481%2062.436,7.9632%2062.351,7.8501%2062.266,7.7369%2062.209,7.6238%2062.152,7.5106%2062.152,7.3975%2062.152,7.2561%20Z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path160'%20/%3e%3cpath%20d='m%2065.761,8.7269%20h%200.625%20v%20-0.5374%200%20c%200.029,0.0566%200.057,0.1131%200.114,0.1697%200.085,0.0849%200.142,0.1414%200.256,0.2263%200.085,0.0566%200.199,0.1131%200.341,0.1697%200.114,0.0283%200.256,0.0566%200.426,0.0566%200.256,0%200.483,-0.0566%200.654,-0.1697%200.199,-0.0849%200.341,-0.2546%200.455,-0.4809%200.113,0.2263%200.255,0.396%200.483,0.4809%200.199,0.1131%200.398,0.1697%200.625,0.1697%200.256,0%200.483,-0.0283%200.654,-0.1132%200.17,-0.1131%200.312,-0.2263%200.426,-0.3677%200.085,-0.1414%200.17,-0.3111%200.199,-0.4808%200.028,-0.198%200.057,-0.396%200.057,-0.594%20V%205.2195%20h%20-0.682%20v%201.9517%20c%200,0.1414%200,0.2829%20-0.029,0.396%200,0.1131%20-0.028,0.2263%20-0.085,0.3111%20-0.057,0.1132%20-0.142,0.1698%20-0.228,0.2263%20-0.113,0.0566%20-0.255,0.0849%20-0.397,0.0849%20-0.341,0%20-0.569,-0.0849%20-0.711,-0.2829%20C%2068.83,7.7086%2068.745,7.4541%2068.745,7.1429%20V%205.2195%20h%20-0.653%20v%201.8386%20c%200,0.1697%20-0.029,0.3111%20-0.029,0.4525%20-0.028,0.1415%20-0.057,0.2546%20-0.114,0.3677%20-0.056,0.1132%20-0.113,0.1698%20-0.227,0.2263%20-0.085,0.0566%20-0.227,0.0849%20-0.369,0.0849%20-0.142,0%20-0.256,-0.0283%20-0.37,-0.0566%20C%2066.87,8.0763%2066.784,8.0198%2066.699,7.9066%2066.614,7.8218%2066.557,7.7086%2066.5,7.5672%2066.443,7.4258%2066.415,7.2561%2066.415,7.0581%20V%205.2195%20h%20-0.654%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path162'%20/%3e%3cpath%20d='m%2072.07,10.82%20h%200.682%20v%20-2.6022%200%20c%200.142,0.198%200.313,0.3394%200.512,0.4525%200.227,0.0849%200.483,0.1415%200.71,0.1415%200.284,0%200.54,-0.0283%200.739,-0.1415%200.228,-0.0848%200.426,-0.2262%200.569,-0.3677%200.17,-0.1697%200.284,-0.3677%200.369,-0.594%200.085,-0.2263%200.114,-0.4808%200.114,-0.7354%200,-0.2546%20-0.029,-0.5091%20-0.114,-0.7071%20C%2075.566,6.0398%2075.452,5.8418%2075.282,5.672%2075.139,5.5023%2074.941,5.3609%2074.713,5.276%2074.514,5.1912%2074.258,5.1346%2073.974,5.1346%20c%20-0.227,0%20-0.454,0.0566%20-0.682,0.1697%20-0.227,0.0849%20-0.398,0.2263%20-0.54,0.4243%20v%200%20-0.5091%20H%2072.07%20Z%20m%201.847,-5.0631%20v%200%20c%200.171,0%200.341,0.0283%200.484,0.0849%200.142,0.0848%200.255,0.1697%200.341,0.2545%200.113,0.1132%200.199,0.2546%200.227,0.396%200.057,0.1415%200.085,0.3112%200.085,0.4809%200,0.1697%20-0.028,0.3394%20-0.085,0.5091%20-0.028,0.1415%20-0.114,0.2546%20-0.227,0.3678%20-0.086,0.1131%20-0.199,0.198%20-0.341,0.2545%20-0.143,0.0566%20-0.313,0.0849%20-0.484,0.0849%20-0.198,0%20-0.341,-0.0283%20-0.483,-0.0849%20C%2073.292,8.0481%2073.15,7.9632%2073.065,7.8501%2072.951,7.7369%2072.894,7.6238%2072.838,7.4823%2072.781,7.3126%2072.752,7.1429%2072.752,6.9732%20c%200,-0.1697%200.029,-0.3394%200.086,-0.4809%200.056,-0.1414%200.113,-0.2828%200.227,-0.396%200.085,-0.0848%200.227,-0.1697%200.369,-0.2545%200.142,-0.0566%200.285,-0.0849%200.483,-0.0849%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path164'%20/%3e%3cpath%20d='m%2076.617,8.3026%20c%200.199,0.1697%200.427,0.3112%200.654,0.396%200.256,0.0849%200.511,0.1132%200.767,0.1132%200.256,0%200.455,-0.0283%200.654,-0.0849%200.17,-0.0566%200.341,-0.1414%200.455,-0.2546%200.113,-0.1131%200.198,-0.2545%200.255,-0.3677%200.057,-0.1414%200.086,-0.3111%200.086,-0.4525%20V%205.87%20c%200,-0.1414%200,-0.2545%200,-0.3394%200.028,-0.1131%200.028,-0.198%200.028,-0.3111%20h%20-0.597%20c%200,0.198%200,0.3677%200,0.5374%20H%2078.891%20C%2078.749,5.5306%2078.578,5.3609%2078.379,5.276%2078.152,5.1912%2077.925,5.1346%2077.669,5.1346%20c%20-0.171,0%20-0.341,0.0283%20-0.483,0.0849%20-0.142,0.0283%20-0.285,0.0848%20-0.37,0.198%20-0.113,0.0848%20-0.199,0.198%20-0.284,0.3111%20-0.057,0.1414%20-0.085,0.2829%20-0.085,0.4526%200,0.2263%200.057,0.4243%200.142,0.5657%200.114,0.1697%200.256,0.2829%200.426,0.396%200.171,0.0849%200.37,0.1414%200.625,0.198%200.228,0.0283%200.483,0.0566%200.739,0.0566%20h%200.483%20v%200.1414%20c%200,0.0849%200,0.198%20-0.057,0.2829%20-0.028,0.0848%20-0.085,0.1697%20-0.142,0.2263%20-0.056,0.0848%20-0.17,0.1414%20-0.255,0.1697%20-0.114,0.0565%20-0.228,0.0565%20-0.37,0.0565%20-0.142,0%20-0.256,0%20-0.341,-0.0282%20C%2077.583,8.2178%2077.498,8.1895%2077.441,8.1612%2077.356,8.1329%2077.271,8.0763%2077.214,8.0198%2077.157,7.9915%2077.1,7.9349%2077.015,7.8783%20Z%20m%201.904,-1.386%20v%200%20c%20-0.17,0%20-0.341,0%20-0.483,-0.0283%20C%2077.868,6.8601%2077.726,6.8318%2077.583,6.7752%2077.441,6.7469%2077.328,6.6621%2077.242,6.5772%2077.157,6.4923%2077.1,6.3792%2077.1,6.2378%20c%200,-0.198%200.086,-0.3395%200.228,-0.4243%200.113,-0.0849%200.312,-0.1415%200.54,-0.1415%200.17,0%200.341,0.0283%200.454,0.0849%200.142,0.0566%200.256,0.1414%200.313,0.2546%200.085,0.0848%200.142,0.198%200.17,0.3111%200.057,0.1415%200.057,0.2546%200.057,0.3677%20v%200.2263%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path166'%20/%3e%3cpath%20d='m%2080.056,8.7269%20h%200.767%20l%201.052,-2.7437%20v%200%20l%200.994,2.7437%20H%2083.58%20L%2081.932,4.484%20C%2081.875,4.3143%2081.789,4.1729%2081.733,4.0598%2081.676,3.9466%2081.591,3.8335%2081.505,3.7486%2081.42,3.6355%2081.306,3.5789%2081.193,3.5223%2081.051,3.494%2080.908,3.4658%2080.71,3.4658%20c%20-0.086,0%20-0.199,0%20-0.285,0%20-0.113,0.0282%20-0.199,0.0565%20-0.284,0.0848%20l%200.085,0.594%20C%2080.34,4.1163%2080.482,4.088%2080.624,4.088%20c%200.086,0%200.171,0%200.256,0.0283%200.057,0.0283%200.114,0.0566%200.171,0.1132%200.056,0.0565%200.113,0.1131%200.142,0.198%200.028,0.0565%200.057,0.1414%200.085,0.2263%20l%200.227,0.5657%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path168'%20/%3e%3cpath%20d='m%2084.177,8.3026%20c%200.199,0.1697%200.426,0.3112%200.653,0.396%200.256,0.0849%200.512,0.1132%200.768,0.1132%200.255,0%200.454,-0.0283%200.653,-0.0849%200.171,-0.0566%200.341,-0.1414%200.455,-0.2546%200.114,-0.1131%200.199,-0.2545%200.256,-0.3677%200.057,-0.1414%200.085,-0.3111%200.085,-0.4525%20V%205.87%20c%200,-0.1414%200,-0.2545%200.028,-0.3394%200,-0.1131%200,-0.198%200,-0.3111%20h%20-0.596%20c%200,0.198%200,0.3677%200,0.5374%20H%2086.45%20C%2086.308,5.5306%2086.138,5.3609%2085.939,5.276%2085.711,5.1912%2085.484,5.1346%2085.228,5.1346%20c%20-0.17,0%20-0.341,0.0283%20-0.483,0.0849%20-0.142,0.0283%20-0.256,0.0848%20-0.369,0.198%20-0.114,0.0848%20-0.199,0.198%20-0.285,0.3111%20-0.056,0.1414%20-0.085,0.2829%20-0.085,0.4526%200,0.2263%200.057,0.4243%200.142,0.5657%200.114,0.1697%200.256,0.2829%200.427,0.396%200.17,0.0849%200.369,0.1414%200.625,0.198%200.227,0.0283%200.483,0.0566%200.739,0.0566%20h%200.483%20v%200.1414%20c%200,0.0849%200,0.198%20-0.057,0.2829%20-0.029,0.0848%20-0.085,0.1697%20-0.142,0.2263%20-0.057,0.0848%20-0.171,0.1414%20-0.256,0.1697%20-0.114,0.0565%20-0.227,0.0565%20-0.369,0.0565%20-0.142,0%20-0.256,0%20-0.341,-0.0282%20C%2085.171,8.2178%2085.058,8.1895%2085.001,8.1612%2084.916,8.1329%2084.83,8.0763%2084.773,8.0198%2084.717,7.9915%2084.66,7.9349%2084.603,7.8783%20Z%20m%201.904,-1.386%20v%200%20c%20-0.171,0%20-0.341,0%20-0.483,-0.0283%20C%2085.427,6.8601%2085.285,6.8318%2085.143,6.7752%2085.001,6.7469%2084.887,6.6621%2084.802,6.5772%2084.717,6.4923%2084.66,6.3792%2084.66,6.2378%20c%200,-0.198%200.085,-0.3395%200.227,-0.4243%200.114,-0.0849%200.313,-0.1415%200.54,-0.1415%200.199,0%200.341,0.0283%200.483,0.0849%200.114,0.0566%200.228,0.1414%200.284,0.2546%200.086,0.0848%200.142,0.198%200.171,0.3111%200.057,0.1415%200.057,0.2546%200.057,0.3677%20v%200.2263%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path170'%20/%3e%3cpath%20d='m%2088.013,8.7269%20h%200.682%20v%20-0.5374%200%20c%200.057,0.0848%200.114,0.1697%200.199,0.2546%200.057,0.0848%200.142,0.1414%200.228,0.198%200.113,0.0565%200.198,0.0848%200.312,0.1414%200.114,0.0283%200.227,0.0283%200.341,0.0283%200.085,0%200.199,0%200.284,-0.0283%20L%2090.031,8.0481%20c%20-0.057,0.0282%20-0.114,0.0282%20-0.171,0.0565%20-0.056,0%20-0.113,0%20-0.17,0%20-0.313,0%20-0.568,-0.0848%20-0.739,-0.2545%20-0.17,-0.198%20-0.256,-0.4809%20-0.256,-0.8769%20V%205.2195%20h%20-0.682%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path172'%20/%3e%3cpath%20d='m%2090.798,8.3026%20c%200.171,0.1697%200.398,0.3112%200.654,0.396%200.227,0.0849%200.483,0.1132%200.739,0.1132%200.256,0%200.454,-0.0283%200.653,-0.0849%20C%2093.043,8.6703%2093.185,8.5855%2093.299,8.4723%2093.413,8.3592%2093.498,8.2178%2093.555,8.1046%2093.612,7.9632%2093.64,7.7935%2093.64,7.6521%20V%205.87%20c%200,-0.1414%200,-0.2545%200.029,-0.3394%200,-0.1131%200,-0.198%200,-0.3111%20H%2093.1%20c%20-0.028,0.198%20-0.028,0.3677%20-0.028,0.5374%20H%2093.043%20C%2092.901,5.5306%2092.731,5.3609%2092.532,5.276%2092.333,5.1912%2092.077,5.1346%2091.821,5.1346%20c%20-0.17,0%20-0.312,0.0283%20-0.483,0.0849%20-0.142,0.0283%20-0.256,0.0848%20-0.369,0.198%20-0.114,0.0848%20-0.199,0.198%20-0.284,0.3111%20-0.057,0.1414%20-0.086,0.2829%20-0.086,0.4526%200,0.2263%200.057,0.4243%200.142,0.5657%200.114,0.1697%200.256,0.2829%200.427,0.396%200.17,0.0849%200.369,0.1414%200.625,0.198%200.227,0.0283%200.483,0.0566%200.739,0.0566%20h%200.483%20v%200.1414%20c%200,0.0849%200,0.198%20-0.028,0.2829%20-0.057,0.0848%20-0.086,0.1697%20-0.171,0.2263%20-0.057,0.0848%20-0.142,0.1414%20-0.256,0.1697%20-0.113,0.0565%20-0.227,0.0565%20-0.369,0.0565%20-0.142,0%20-0.256,0%20-0.341,-0.0282%20C%2091.764,8.2178%2091.679,8.1895%2091.594,8.1612%2091.509,8.1329%2091.423,8.0763%2091.367,8.0198%2091.31,7.9915%2091.253,7.9349%2091.196,7.8783%20Z%20m%201.876,-1.386%20v%200%20c%20-0.171,0%20-0.313,0%20-0.483,-0.0283%20C%2092.02,6.8601%2091.878,6.8318%2091.736,6.7752%2091.594,6.7469%2091.48,6.6621%2091.395,6.5772%2091.31,6.4923%2091.281,6.3792%2091.281,6.2378%20c%200,-0.198%200.057,-0.3395%200.199,-0.4243%200.142,-0.0849%200.313,-0.1415%200.54,-0.1415%200.199,0%200.341,0.0283%200.483,0.0849%200.114,0.0566%200.228,0.1414%200.313,0.2546%200.057,0.0848%200.114,0.198%200.171,0.3111%200.028,0.1415%200.028,0.2546%200.028,0.3677%20v%200.2263%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path174'%20/%3e%3cpath%20d='m%2094.635,8.7269%20h%200.653%20V%208.1895%20h%200.029%20c%200.085,0.198%200.227,0.3394%200.426,0.4526%200.199,0.1131%200.455,0.1697%200.711,0.1697%200.17,0%200.341,-0.0283%200.483,-0.0566%200.17,-0.0566%200.312,-0.1414%200.426,-0.2546%200.114,-0.1131%200.199,-0.2545%200.284,-0.4243%200.057,-0.1697%200.085,-0.3677%200.085,-0.594%20V%205.2195%20h%20-0.653%20v%202.0648%20c%200,0.1698%20-0.029,0.3112%20-0.085,0.4243%20-0.029,0.1132%20-0.086,0.2263%20-0.171,0.2829%20-0.085,0.0848%20-0.17,0.1131%20-0.256,0.1697%20-0.085,0.0283%20-0.199,0.0283%20-0.284,0.0283%20-0.142,0%20-0.284,0%20-0.398,-0.0566%20C%2095.772,8.0763%2095.658,8.0198%2095.573,7.9349%2095.487,7.8218%2095.402,7.7086%2095.374,7.5672%2095.317,7.3975%2095.288,7.2278%2095.288,7.0298%20V%205.2195%20h%20-0.653%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path176'%20/%3e%3cpath%20d='m%20100.97,10.452%20h%200.94%20l%202.9,-4.2991%20h%200.03%20v%204.2991%20h%200.71%20V%205.2195%20h%20-0.91%20l%20-2.93,4.2994%20h%20-0.03%20V%205.2195%20h%20-0.71%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path178'%20/%3e%3cpath%20d='m%20106.74,8.3026%20c%200.17,0.1697%200.4,0.3112%200.65,0.396%200.23,0.0849%200.49,0.1132%200.74,0.1132%200.26,0%200.49,-0.0283%200.66,-0.0849%200.2,-0.0566%200.34,-0.1414%200.45,-0.2546%200.12,-0.1131%200.2,-0.2545%200.26,-0.3677%200.05,-0.1414%200.08,-0.3111%200.08,-0.4525%20V%205.87%20c%200,-0.1414%200,-0.2545%200.03,-0.3394%200,-0.1131%200,-0.198%200,-0.3111%20h%20-0.57%20c%20-0.03,0.198%20-0.03,0.3677%20-0.03,0.5374%20h%20-0.02%20c%20-0.15,-0.2263%20-0.32,-0.396%20-0.52,-0.4809%20-0.19,-0.0848%20-0.45,-0.1414%20-0.71,-0.1414%20-0.17,0%20-0.31,0.0283%20-0.48,0.0849%20-0.14,0.0283%20-0.25,0.0848%20-0.37,0.198%20-0.11,0.0848%20-0.2,0.198%20-0.25,0.3111%20-0.09,0.1414%20-0.12,0.2829%20-0.12,0.4526%200,0.2263%200.06,0.4243%200.14,0.5657%200.12,0.1697%200.26,0.2829%200.43,0.396%200.17,0.0849%200.37,0.1414%200.63,0.198%200.22,0.0283%200.48,0.0566%200.73,0.0566%20h%200.49%20v%200.1414%20c%200,0.0849%200,0.198%20-0.03,0.2829%20-0.06,0.0848%20-0.09,0.1697%20-0.17,0.2263%20-0.06,0.0848%20-0.14,0.1414%20-0.26,0.1697%20-0.11,0.0565%20-0.22,0.0565%20-0.37,0.0565%20-0.14,0%20-0.22,0%20-0.34,-0.0282%20-0.08,-0.0283%20-0.17,-0.0566%20-0.25,-0.0849%20-0.09,-0.0283%20-0.15,-0.0849%20-0.23,-0.1414%20-0.06,-0.0283%20-0.11,-0.0849%20-0.17,-0.1415%20z%20m%201.88,-1.386%20v%200%20c%20-0.17,0%20-0.32,0%20-0.49,-0.0283%20-0.17,-0.0282%20-0.31,-0.0565%20-0.45,-0.1131%20-0.14,-0.0283%20-0.26,-0.1131%20-0.34,-0.198%20-0.09,-0.0849%20-0.12,-0.198%20-0.12,-0.3394%200,-0.198%200.06,-0.3395%200.2,-0.4243%200.15,-0.0849%200.32,-0.1415%200.54,-0.1415%200.2,0%200.34,0.0283%200.49,0.0849%200.11,0.0566%200.22,0.1414%200.31,0.2546%200.06,0.0848%200.11,0.198%200.17,0.3111%200.03,0.1415%200.03,0.2546%200.03,0.3677%20v%200.2263%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path180'%20/%3e%3cpath%20d='m%20112.43,7.8501%20c%20-0.06,0.1131%20-0.18,0.1697%20-0.29,0.2545%20-0.11,0.0566%20-0.25,0.0849%20-0.43,0.0849%20-0.14,0%20-0.28,-0.0283%20-0.39,-0.0849%20-0.12,-0.0848%20-0.2,-0.1697%20-0.2,-0.3111%200,-0.0849%200.05,-0.1697%200.11,-0.2263%200.06,-0.0849%200.14,-0.1131%200.23,-0.1697%200.11,-0.0283%200.2,-0.0566%200.31,-0.0849%200.09,-0.0283%200.17,-0.0283%200.26,-0.0565%200.14,-0.0283%200.28,-0.0849%200.4,-0.1132%200.14,-0.0566%200.25,-0.1131%200.34,-0.198%200.08,-0.0848%200.17,-0.1697%200.19,-0.2828%200.06,-0.1132%200.09,-0.2546%200.09,-0.4243%200,-0.198%20-0.03,-0.3678%20-0.11,-0.5092%20-0.09,-0.1414%20-0.2,-0.2546%20-0.34,-0.3394%20-0.12,-0.0849%20-0.29,-0.1414%20-0.46,-0.198%20-0.17,-0.0283%20-0.34,-0.0566%20-0.51,-0.0566%20-0.28,0%20-0.54,0.0566%20-0.77,0.1414%20-0.23,0.0849%20-0.42,0.2546%20-0.59,0.4809%20l%200.51,0.4243%20c%200.11,-0.1132%200.22,-0.198%200.37,-0.2829%200.11,-0.0848%200.28,-0.1414%200.48,-0.1414%200.08,0%200.17,0%200.26,0.0283%200.08,0.0283%200.17,0.0566%200.22,0.0848%200.06,0.0283%200.12,0.0849%200.17,0.1415%200.03,0.0565%200.06,0.1131%200.06,0.198%200,0.0848%20-0.03,0.1697%20-0.09,0.2263%20-0.05,0.0848%20-0.14,0.1131%20-0.22,0.1697%20-0.09,0.0283%20-0.17,0.0566%20-0.29,0.0848%20-0.08,0.0283%20-0.17,0.0283%20-0.25,0.0566%20-0.14,0.0283%20-0.29,0.0566%20-0.4,0.1132%20-0.14,0.0565%20-0.26,0.1131%20-0.34,0.1697%20-0.12,0.0848%20-0.17,0.1697%20-0.23,0.2828%20-0.08,0.1132%20-0.11,0.2546%20-0.11,0.4243%200,0.198%200.05,0.3394%200.11,0.4809%200.09,0.1414%200.2,0.2545%200.31,0.3394%200.15,0.0849%200.29,0.1414%200.43,0.198%200.17,0.0283%200.34,0.0566%200.48,0.0566%200.26,0%200.49,-0.0283%200.69,-0.1132%200.22,-0.1131%200.39,-0.2545%200.53,-0.4525%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path182'%20/%3e%3cpath%20d='m%20113.76,9.9715%20c%200,0.1415%200.06,0.2545%200.14,0.3675%200.09,0.085%200.2,0.142%200.34,0.142%200.15,0%200.26,-0.057%200.34,-0.142%200.12,-0.113%200.15,-0.226%200.15,-0.3675%200,-0.1131%20-0.03,-0.2263%20-0.15,-0.3394%20-0.08,-0.0849%20-0.19,-0.1415%20-0.34,-0.1415%20-0.14,0%20-0.25,0.0566%20-0.34,0.1415%20-0.08,0.1131%20-0.14,0.2263%20-0.14,0.3394%20z%20m%200.14,-1.2446%20v%200%20h%200.68%20V%205.2195%20h%20-0.68%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path184'%20/%3e%3cpath%20d='m%20115.47,6.9732%20c%200,0.2546%200.05,0.5091%200.14,0.7354%200.11,0.198%200.23,0.396%200.4,0.5657%200.17,0.1698%200.37,0.3112%200.59,0.396%200.23,0.1132%200.49,0.1415%200.74,0.1415%200.26,0%200.51,-0.0283%200.74,-0.1415%200.23,-0.0848%200.43,-0.2262%200.6,-0.396%200.17,-0.1697%200.28,-0.3677%200.4,-0.5657%200.08,-0.2263%200.14,-0.4808%200.14,-0.7354%200,-0.2546%20-0.06,-0.4809%20-0.14,-0.7071%20-0.12,-0.2263%20-0.23,-0.4243%20-0.4,-0.5941%20-0.17,-0.1697%20-0.37,-0.2828%20-0.6,-0.396%20-0.23,-0.0848%20-0.48,-0.1414%20-0.74,-0.1414%20-0.25,0%20-0.51,0.0566%20-0.74,0.1414%20-0.22,0.1132%20-0.42,0.2263%20-0.59,0.396%20-0.17,0.1698%20-0.29,0.3678%20-0.4,0.5941%20-0.09,0.2262%20-0.14,0.4525%20-0.14,0.7071%20z%20m%200.71,0%20v%200%20c%200,-0.1697%200.02,-0.3394%200.08,-0.4809%200.06,-0.1414%200.14,-0.2828%200.23,-0.396%200.11,-0.0848%200.23,-0.1697%200.37,-0.2545%200.14,-0.0566%200.31,-0.0849%200.48,-0.0849%200.17,0%200.34,0.0283%200.48,0.0849%200.15,0.0848%200.26,0.1697%200.37,0.2545%200.09,0.1132%200.17,0.2546%200.23,0.396%200.06,0.1415%200.09,0.3112%200.09,0.4809%200,0.1697%20-0.03,0.3394%20-0.09,0.5091%20-0.06,0.1415%20-0.14,0.2546%20-0.23,0.3678%20-0.11,0.1131%20-0.22,0.198%20-0.37,0.2545%20-0.14,0.0566%20-0.31,0.0849%20-0.48,0.0849%20-0.17,0%20-0.34,-0.0283%20-0.48,-0.0849%20C%20116.72,8.0481%20116.6,7.9632%20116.49,7.8501%20116.4,7.7369%20116.32,7.6238%20116.26,7.4823%20116.2,7.3126%20116.18,7.1429%20116.18,6.9732%20Z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path186'%20/%3e%3cpath%20d='m%20120.04,8.7269%20h%200.68%20v%20-0.5374%200%20c%200.09,0.198%200.23,0.3394%200.46,0.4526%200.2,0.1131%200.42,0.1697%200.71,0.1697%200.17,0%200.34,-0.0283%200.48,-0.0566%200.17,-0.0566%200.29,-0.1414%200.43,-0.2546%200.11,-0.1131%200.2,-0.2545%200.25,-0.4243%200.09,-0.1697%200.12,-0.3677%200.12,-0.594%20V%205.2195%20h%20-0.68%20v%202.0648%20c%200,0.1698%200,0.3112%20-0.06,0.4243%20-0.03,0.1132%20-0.12,0.2263%20-0.17,0.2829%20-0.09,0.0848%20-0.17,0.1131%20-0.26,0.1697%20-0.11,0.0283%20-0.2,0.0283%20-0.31,0.0283%20-0.14,0%20-0.26,0%20-0.37,-0.0566%20-0.11,-0.0566%20-0.23,-0.1131%20-0.31,-0.198%20-0.09,-0.1131%20-0.17,-0.2263%20-0.23,-0.3677%20-0.03,-0.1697%20-0.06,-0.3394%20-0.06,-0.5374%20V%205.2195%20h%20-0.68%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path188'%20/%3e%3cpath%20d='m%20124.19,8.3026%20c%200.2,0.1697%200.4,0.3112%200.65,0.396%200.26,0.0849%200.49,0.1132%200.74,0.1132%200.26,0%200.49,-0.0283%200.66,-0.0849%200.2,-0.0566%200.34,-0.1414%200.48,-0.2546%200.11,-0.1131%200.2,-0.2545%200.26,-0.3677%200.05,-0.1414%200.08,-0.3111%200.08,-0.4525%20V%205.87%20c%200,-0.1414%200,-0.2545%200,-0.3394%200,-0.1131%200,-0.198%200.03,-0.3111%20h%20-0.6%20c%20-0.03,0.198%20-0.03,0.3677%20-0.03,0.5374%20v%200%20c%20-0.17,-0.2263%20-0.34,-0.396%20-0.54,-0.4809%20-0.19,-0.0848%20-0.42,-0.1414%20-0.71,-0.1414%20-0.14,0%20-0.31,0.0283%20-0.45,0.0849%20-0.14,0.0283%20-0.29,0.0848%20-0.4,0.198%20-0.11,0.0848%20-0.2,0.198%20-0.25,0.3111%20-0.06,0.1414%20-0.12,0.2829%20-0.12,0.4526%200,0.2263%200.06,0.4243%200.17,0.5657%200.09,0.1697%200.23,0.2829%200.4,0.396%200.2,0.0849%200.4,0.1414%200.63,0.198%200.22,0.0283%200.48,0.0566%200.76,0.0566%20h%200.49%20v%200.1414%20c%200,0.0849%20-0.03,0.198%20-0.06,0.2829%20-0.03,0.0848%20-0.09,0.1697%20-0.14,0.2263%20-0.09,0.0848%20-0.17,0.1414%20-0.29,0.1697%20-0.08,0.0565%20-0.22,0.0565%20-0.37,0.0565%20-0.11,0%20-0.22,0%20-0.34,-0.0282%20-0.08,-0.0283%20-0.17,-0.0566%20-0.25,-0.0849%20-0.09,-0.0283%20-0.15,-0.0849%20-0.2,-0.1414%20-0.09,-0.0283%20-0.14,-0.0849%20-0.2,-0.1415%20z%20m%201.88,-1.386%20v%200%20c%20-0.15,0%20-0.32,0%20-0.49,-0.0283%20-0.17,-0.0282%20-0.31,-0.0565%20-0.45,-0.1131%20-0.14,-0.0283%20-0.23,-0.1131%20-0.31,-0.198%20-0.12,-0.0849%20-0.15,-0.198%20-0.15,-0.3394%200,-0.198%200.06,-0.3395%200.2,-0.4243%200.14,-0.0849%200.32,-0.1415%200.57,-0.1415%200.17,0%200.34,0.0283%200.46,0.0849%200.14,0.0566%200.22,0.1414%200.31,0.2546%200.08,0.0848%200.14,0.198%200.17,0.3111%200.03,0.1415%200.06,0.2546%200.06,0.3677%20v%200.2263%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path190'%20/%3e%3cpath%20d='m%20128.08,5.2195%20h%200.65363%20v%205.6006%20H%20128.08%20Z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path192'%20/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e", Ld = '<svg xmlns="http://www.w3.org/2000/svg" width="375" height="160" viewBox="0 0 375 160"><defs><linearGradient id="f" x1="0" y1="0" x2="0" y2="1"><stop offset=".55" stop-color="#f6f7f9" stop-opacity="0"/><stop offset="1" stop-color="#f6f7f9" stop-opacity="1"/></linearGradient></defs><g transform="translate(0,-18)"><rect x="138" y="30" width="34" height="130" rx="2" fill="#dfe2ec"/><rect x="206" y="14" width="40" height="150" rx="2" fill="#d6dae7"/><rect x="282" y="38" width="38" height="122" rx="2" fill="#dfe2ec"/><rect x="330" y="26" width="45" height="134" rx="2" fill="#d6dae7"/><g fill="#f6f7fb" opacity=".7"><rect x="214" y="26" width="8" height="5" rx="1"/><rect x="228" y="26" width="8" height="5" rx="1"/><rect x="214" y="40" width="8" height="5" rx="1"/><rect x="228" y="40" width="8" height="5" rx="1"/><rect x="338" y="40" width="8" height="5" rx="1"/><rect x="352" y="40" width="8" height="5" rx="1"/><rect x="290" y="52" width="8" height="5" rx="1"/><rect x="304" y="52" width="8" height="5" rx="1"/></g><rect x="120" y="76" width="190" height="5" rx="2" fill="#cdd2e1"/><rect x="152" y="62" width="104" height="14" rx="7" fill="#f6f7fb" stroke="#cdd2e1" stroke-width="1.5"/><rect x="162" y="66" width="84" height="4" rx="2" fill="#d6dae7"/><rect x="156" y="81" width="4" height="40" fill="#d6dae7"/><rect x="262" y="81" width="4" height="40" fill="#d6dae7"/><path d="M14 54 30 40h110l8 14z" fill="#cdd2e1"/><rect x="14" y="54" width="134" height="8" fill="#d6dae7"/><rect x="82" y="22" width="44" height="18" rx="2" fill="#d6dae7"/><text x="104" y="36" text-anchor="middle" font-family="Archivo,sans-serif" font-weight="800" font-size="13" fill="#f6f7fb">L</text><rect x="22" y="62" width="6" height="98" fill="#d6dae7"/><rect x="138" y="62" width="6" height="98" fill="#d6dae7"/><rect x="28" y="108" width="110" height="52" fill="#dfe2ec"/><rect x="28" y="106" width="110" height="5" rx="1" fill="#cdd2e1"/><circle cx="104" cy="86" r="5.1" fill="#cdd2e1"/><rect x="98.3" y="92.0" width="11.4" height="18.6" rx="4.2" fill="#cdd2e1"/><circle cx="126" cy="88" r="5.1" fill="#d6dae7"/><rect x="120.3" y="94.0" width="11.4" height="18.6" rx="4.2" fill="#d6dae7"/><rect x="164" y="112" width="30" height="4" rx="2" fill="#cdd2e1"/><rect x="176" y="116" width="3" height="20" fill="#cdd2e1"/><circle cx="172" cy="96" r="4.4" fill="#d6dae7"/><rect x="167.1" y="101.2" width="9.9" height="16.1" rx="3.6" fill="#d6dae7"/><circle cx="226" cy="140" r="9" fill="none" stroke="#cdd2e1" stroke-width="3"/><circle cx="262" cy="140" r="9" fill="none" stroke="#cdd2e1" stroke-width="3"/><path d="M226 140h12l6-18h12l6 18" fill="none" stroke="#cdd2e1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><rect x="236" y="104" width="14" height="14" rx="3" fill="#d6dae7"/><circle cx="244" cy="94" r="5.1" fill="#cdd2e1"/><rect x="238.3" y="100.0" width="11.4" height="18.6" rx="4.2" fill="#cdd2e1"/><circle cx="204" cy="100" r="5.8" fill="#d6dae7"/><rect x="197.5" y="106.8" width="12.9" height="21.1" rx="4.8" fill="#d6dae7"/><path d="M30 14l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#f6f7fb"/><path d="M318 20l1.5 3.5 3.5 1.5-3.5 1.5-1.5 3.5-1.5-3.5-3.5-1.5 3.5-1.5z" fill="#f6f7fb"/></g><rect width="375" height="160" fill="url(#f)"/></svg>', Rd = "data:image/webp;base64,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", Md = "data:image/webp;base64,UklGRpwFAABXRUJQVlA4WAoAAAAQAAAAdgAAcwAAQUxQSO8AAAABgFTb1vLmfjAOVQPKyYqbgoCsKCj5IAcMBlDBN6V3y6P/liEiDKRt035XsRnAcyPQn2wcJhq7qTEdbkz6QMSrOo+F6RW779V0Ad69ggfWE2m1WYexVo1M64B/JcNdshi7rxVydwj/IsunzEYNLfN0+dk5N3fJTB0zL+ecA4I/eIrUHfiAiJWniN0KoptPzcSwluYdZixUs3CG3p2ZHGZ3vTEb9Wwc77AKUrlzJPqOEk0QY6Kq9q6G/Peff//5ickHuQwnW3SUrXXKllhlK7uyBWXZOrZs+Vy2aq86LJCdUaiORlQnMqqDIOn5k+rYCwBWUDgghgQAAJAcAJ0BKncAdAA+PR6MRCIhoRTKHCwgA8SgDT1hZ/K65P3T8peZV5q8H5SHz0/pvy3/s3au8wD9If891M/MB+wHkgdgR/Kv9P1l3oYeWv+2PwuftN6J2q2MJ/0UiV2W1t8x5nIfMv8d7A3SS/XL2Of23Juic7uhqJ2yo5SicbULQ1Au/Zhbt8JZXu9dQEcjnf+XL+IrzUcRQJDfsnIvdg9nLFVjQabUBSdpRaPNqDvamJ6uTI13NrlvfiizIOYS+8PctVzeCF/yNxZqUrtKaGvga19juahegywvF4w1Zj45Uk5rGbnBMDsjsRWmAAD+/+BxSc9VrykIyJTSebXEEwrcGQ3eoG8XCtwoeG9G7wWE70I0YC4lGx3b996VKnC/BC3/q2FQe9uUtR6ckHybpaRsPf3U487WPIBdU5/5Y9NRfwd95zU/y8ZMm0XRlb/5UGqj2jCo2GlHoSIKs2ok+MH+iwGAlJYPkU626zydk6qtuYvnUyjZH5EaDO1eYZafHQx7pR/yLUVg4C+Z9krAVYnecdw3hr6vqgLdob8q/DZM6cvmop57pJ4uJhL7eoMs0We0UnqlURA/q4fDf63wJK5KvJ9GD7gMTvjfNDAND8f9AF8DiHHhFqD/h+5+bs+DtH/fBdJZGs0wgWTl6ccHBprvBOaS6G+Nm7LwR+GY7Cv0UtXd8R208Xq6OceU69/DUR5fzRW7Z/elaQUcvN3nvTENCr4Pn4CUif8uNZGp4DdRp/x+Xuua9FuzE3Opo2nVqDgBz/nC9NCHt+FLdsCpkYR2wcVGNDmsmGQVOfgNmDz8Lfzt1/Kmpz3Hqe5jq71JYGuHdkJfyNEsuu/etdw79VDv9l/kpOtiwZvPPsbbNDtXHzG58o4AISQOn9/VL7b+2WtO5R7ikWUWFeCdrp/Q5JB5VX8rQ5pHnJNJYHpmR/eDdTWwDC1dIAByYubvNwk9BndB1hcZkAZRPyxgk11/NPwG0djBF7EXyXAIDtBdvh3yvpKqFIeZhi2ds5oLHBBwcfPFQNaNUpxjfbqys4Ovgj5jF3SSsHAOv2RwwxkaG7soFDSALsaww5tzgk6bnD2BsjyXPO05PrgsONBIQ70ZwqjOGjHqzXf//bu294u+wYdpvmTmol9nHHlHCF/LEWlb46bcBDPjMxp8FNER14rYPsrh4eiUb7QPO+rfjtMJktSB6bGlMCgjsdV0i4pR52C+KAF8Qqzm5Q87XY7xifG0khrriHic/cfZFWn7pl/03v7eiuvzzWGNfqI0dlUCSzNVRXYUvmOOYyUJO+1O2g1T2p9TW3Z5eET+RMBIQmx4H5UkDcLAfR94Y5wpotT/Z8PPf4aYbTR5RP0gJPaBuUg399JwL/ZkStmsGRr5CPpwDZGBuAukFTGcPBz6JY6fYBwtK/gLwUaZ10CCnjoo3LzbQUonJC9KIVjVMaLTcX3UN3bwqzMSHCP2wABNCcRbngIHmd5Jx9Ln3Hp+yOU8VyEXfDt55ImnOYdz7dKcCBRgAHgBlgkZTjseIW/ScmXoiXIM1B41augAAA==", Dd = "data:image/webp;base64,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", Td = "data:image/webp;base64,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", Bd = "data:image/webp;base64,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", Qd = "data:image/webp;base64,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", Hd = "data:image/webp;base64,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", Id = "data:image/webp;base64,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", Od = "data:image/webp;base64,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", Ud = "data:image/webp;base64,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", Wd = "data:image/webp;base64,UklGRk4HAABXRUJQVlA4WAoAAAAQAAAAeAAAeAAAQUxQSE4BAAABgNzItqvoXN7PYLyPAxEI7L/+CpEDCSDSQSxtDJDASN5t/3v3jLf/jDcRoTAAEYZ2L/AAHqRlAPaavdmc1eJ81mvuAcgMT2UAVvPRBavJi1G+CoSnwQxr3QOSKSavGDzFRPKguwazp107B+SDv+q9yIMOEJ6QGwOydFaZXpKDjUcjQ2P/3lT1Yb+B7JEsSkYqMLIsHoyAgp6oweQsEB7IuieVJFPy+r2o2dqB30mZ8WDNanf7kJFKjBwi3Mk2S2qxZBsBZsunycXg6XTZLEP3tsu1LjJbOnaXg/vxkiFnpB4jc4SpS8KnYeeSLgjn5U6LiYpMbPVvP5KP/li2jBd0STgX1OW///j3H9/tEFZVCevIhJVzwlpBYXWksB5UWAGrq/lVVjkL67p1ley62n1ht4KuP0PXkaLrwdF1Hen6rHSdZbpeujfAPQhdvyQAVlA4INoFAADQHwCdASp5AHkAPj0cjEOiIaGTit2sIAPEsgBm3IVKC+M83eyf1f8Gfi514ZwuwH839yH0G9E3mDfqN/aOqz5h/2e/Wb3cOkA/UDro/QA8tT9oPhc/cH9h/adzUzsr/u3K5yl7Cv3T3eFw3G9pWZmXjl+i+mq9jJqNPKIHEezQlHCrIZAGHhdhTF6yvvF5WdZEmXssk3gUW0v5KHtWunvVX/ItR0Po5q//qIvzBPGdmftR6uKwFIdHsYpcJ29V1ihmXtjk4vrOC9eFP9EXDVY7wY/nQkXKe+O1ZhHxfnTyYsUoYoWaxHbfM5WUwRTtUDjm/G+v70SL1HSkX7vy5Sr3Y6xUrWphGAD+/Y2GP8Xb+MXC1eaNPuUVS+V8/8DdqCvKTZoUhN9NVAzSuDhMVmrGLIyWW4BZHUrwDNxb9s/kr//x39+Ufvcj5VcF3UPPtAVrgVlvy/m+jzQ2dWuWC0WEcKnRLmA2nL3eBI1jNBV4uINIQd3NrgAb71/hjss478N0c/Ln5YKRwjKc97j4F+sV9C5ZHmx1v198xl9eLhfsYkdehdDjqytb1vN9//HJWjsxo7eNf+OqVDwKIxamFtCP+qDLnbpuF9f+6/m7j1NDOv4aF1bufaHgSfDeCEZkGbOfuk2DSelwm728XaqRGIQxHuesLctDatlemUEqGhWg3qQ4rE7wiSr7LwU84CdpcEeqivs/18/QLRfPCLLZtxM2wDqrq+CUzMLo1lfMu/dh4yYoZlN44En0T/bQdXXS4pDTKWZXjn6wRENmyghVtgFwH/BJN0ulvFHMrtXaFHz2Fqw1EJrkn+UNS4x+iDdfaw3obAquVml9lb0dwIo87ucziiq7l8sNkQN5/t88ZLsaP5nSzyzVy/mk4cbi6Qo7VnZJT8APYcV2bqrQn4yiIdE5G3TP3VcFLFvbO/PvCzgW1IszJFXWzCf+5RKoASPWVOgoOqEQtuMHeCNtvLD8QSDrUKW99D72mjlggeAs8pkMvazTfP+b2YJ0XL/78/+MjTVz0adpmGF+R7At+F+D06jDFz/SE+SRTIB47YK5lIMTLpXmuAN/fsr27nsh3M7Rcr9liox4ztt+XS21hFDfKNkA9gc+QVfzUILt525FmqVwhrUinBqbfV+3tBw2+fhaIJzj4XwRucqXNUtp9oT9zzdhwW3m51xhs5mcHdcvtO6bc4j7FChI4RigMN81keV6Czdc8AEzZeujMRmwvqzSGPCbQW2lZNAt/nxKd7aFimo3VCZB6ZkR26lYgXimsHf1KTnpej5PXdkwv2tcD7mucX++B4XV6q9xvfhP4h187y/xjokZjxvpdqGizn+TIAc3/wje6a3kTAwMoPHdEWSPvFkmf/gpAQ66Y+YIOB4F2uOmGYRyvzGGeZ9zTThBVkcXb68xCnuQpHICcCE1RzkPSJC4dpQZC0tQSiegEv6NQ4NarKoOgIAZ7t2j+B+NfiM/v+fnbjL5fBtHXkHVXuEb45NHCtXD+GVm2eTPTnVusAhzZ2kg0Kaz4grKQi9J7yynUowsTwE5T3QIi4kVdmGQ1EaulUTiEFOkM4D7heYy7xs7EuUyvdHdMAiwvuHjonn0suEnhZw/nQSQH7RCTLnaGR6OCUXvd1X/2tFh33qpIgnpK4engvxJlEp/G3gqHNUm/pVp7Ds8YPv0/GELVf/AjmPrdM0/iSnGfWrZGhsocOAr15t+3H9XRZZfCyJfPuo3WdqhbGLneyGv+CFfw5TDVqTV/wY6pEWvYdr5j+NxACF8WJUQHBJ8BYDrFhOqJipRaxd4d0EC+9cuLgwgc9kMDOCosr3Hh6ZUTjwps+W4/uZBVvFHe++//4e/Uxm05JOBmCV9mko9tdgCzT03OOGLmjdx/JaWfDwZtF29AbCDuOxIKven/6qKCvj2zjCyviQ+A6vXuYc8DLtrXbiXcoSoUFBFrl09UN4wY1wrCmdHn0BTapTvSBdgecNXQcydW4nJickMvtB+feZAgAAA", Fd = "data:image/webp;base64,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", Xd = "data:image/webp;base64,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", Vd = "data:image/webp;base64,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", Jd = "data:image/webp;base64,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", Gd = "data:image/webp;base64,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", qd = "data:image/webp;base64,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", Kd = [
  { label: "Isi Saldo", src: Td, x: 132 },
  { label: "Kirim Saldo", src: Bd, x: 344 },
  { label: "Tarik Saldo", src: Qd, x: 556 },
  { label: "Semua", src: Hd, x: 768 }
], Yd = [
  { label: ["Pulsa/Data"], src: Id },
  { label: ["Listrik"], src: Od },
  { label: ["Kartu Uang", "Elektronik"], src: Ud },
  { label: ["Pinjaman", "Easycash"], src: Wd },
  { label: ["Voucher &", "E-Wallet"], src: Fd },
  { label: ["Infaq"], src: Xd },
  { label: ["TV Kabel &", "Internet"], src: Vd },
  { label: ["Lainnya"], src: Jd }
], Zd = [126, 342, 558, 774];
function Ri() {
  return /* @__PURE__ */ l.jsx("span", { className: "lh-go", "aria-hidden": !0, children: /* @__PURE__ */ l.jsx(_o, { size: 10, strokeWidth: 3.4 }) });
}
function bd() {
  return /* @__PURE__ */ l.jsxs("svg", { className: "lh-homeicon", viewBox: "0 0 48 48", "aria-hidden": !0, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M24 5 6 20v22h13V30h10v12h13V20z", fill: "currentColor", opacity: ".25" }),
    /* @__PURE__ */ l.jsx("path", { d: "M24 7 8 21v19h11V29h10v11h11V21z", fill: "currentColor" }),
    /* @__PURE__ */ l.jsx("circle", { cx: "24", cy: "21", r: "4", fill: "#fff" })
  ] });
}
function _d() {
  return /* @__PURE__ */ l.jsx(Nr, { width: 400, height: 755, compact: { below: 560, width: 358, height: 736 }, theme: "dark", className: "lh", children: (a, c, u) => /* @__PURE__ */ l.jsx(Pr, { width: u === "compact" ? 326 : 340, frame: "android", status: !1, className: "lh-phone", children: /* @__PURE__ */ l.jsxs("div", { className: "lh-app", children: [
    /* @__PURE__ */ l.jsx("div", { className: "lh-street", style: { backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(Ld)}")` } }),
    /* @__PURE__ */ l.jsxs("div", { className: "lh-sb", children: [
      /* @__PURE__ */ l.jsx("span", { children: "20:47" }),
      /* @__PURE__ */ l.jsxs("span", { className: "lh-sb__g", children: [
        /* @__PURE__ */ l.jsx(nu, { size: 15, strokeWidth: 2.2 }),
        /* @__PURE__ */ l.jsx(eu, { size: 15, strokeWidth: 2.2 }),
        /* @__PURE__ */ l.jsx("span", { className: "lh-batt", children: "51" })
      ] })
    ] }),
    /* @__PURE__ */ l.jsx("img", { className: "lh-logo", src: Rd, alt: "LinkAja" }),
    /* @__PURE__ */ l.jsx("img", { className: "lh-ibtn lh-ibtn--1", src: Md, alt: "" }),
    /* @__PURE__ */ l.jsx("img", { className: "lh-ibtn lh-ibtn--2", src: Dd, alt: "" }),
    /* @__PURE__ */ l.jsxs("div", { className: "lh-hero", children: [
      /* @__PURE__ */ l.jsx("div", { className: "lh-hero__hi", children: "Hai, DENNY RYANTO" }),
      /* @__PURE__ */ l.jsxs("div", { className: "lh-bal lh-bal--1", children: [
        /* @__PURE__ */ l.jsx("span", { className: "lh-bal__k", children: "Saldo Kamu" }),
        /* @__PURE__ */ l.jsxs("span", { className: "lh-bal__v", children: [
          "Rp2.150.000",
          /* @__PURE__ */ l.jsx(Ri, {})
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "lh-bal lh-bal--2", children: [
        /* @__PURE__ */ l.jsx("span", { className: "lh-bal__k", children: "Saldo Bonus" }),
        /* @__PURE__ */ l.jsxs("span", { className: "lh-bal__v", children: [
          /* @__PURE__ */ l.jsx("span", { className: "lh-coin", "aria-hidden": !0, children: "L" }),
          "0",
          /* @__PURE__ */ l.jsx(Ri, {})
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "lh-bal lh-bal--3", children: [
        /* @__PURE__ */ l.jsxs("span", { className: "lh-bal__k", children: [
          /* @__PURE__ */ l.jsxs("svg", { className: "lh-ec", viewBox: "0 0 24 24", "aria-hidden": !0, children: [
            /* @__PURE__ */ l.jsx("rect", { width: "24", height: "24", rx: "6", fill: "#19c25f" }),
            /* @__PURE__ */ l.jsx("path", { d: "M8 7.2l1.2 2.4M15.5 7l-.5 2.6M6.8 12.4c2.4 4 8.4 4 10.4 0", fill: "none", stroke: "#fff", strokeWidth: "2.2", strokeLinecap: "round" })
          ] }),
          "Easycash"
        ] }),
        /* @__PURE__ */ l.jsxs("span", { className: "lh-bal__v lh-bal__v--cta", children: [
          "Cek di Sini",
          /* @__PURE__ */ l.jsx(Ri, {})
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "lh-quick", children: Kd.map((y) => /* @__PURE__ */ l.jsxs("span", { className: "lh-quick__i", style: { "--x": y.x - 35 }, children: [
      /* @__PURE__ */ l.jsx("img", { src: y.src, alt: "" }),
      /* @__PURE__ */ l.jsx("span", { children: y.label })
    ] }, y.label)) }),
    Yd.map((y, v) => /* @__PURE__ */ l.jsxs("span", { className: "lh-svc", style: { "--x": Zd[v % 4], "--y": v < 4 ? 846 : 1067 }, children: [
      /* @__PURE__ */ l.jsx("img", { src: y.src, alt: "" }),
      /* @__PURE__ */ l.jsx("span", { className: "lh-svc__l", children: y.label.map((w) => /* @__PURE__ */ l.jsx("span", { children: w }, w)) })
    ] }, y.label.join(" "))),
    /* @__PURE__ */ l.jsx("img", { className: "lh-banner", src: Gd, alt: "Berbagi di setiap transaksi" }),
    /* @__PURE__ */ l.jsxs("div", { className: "lh-special", children: [
      /* @__PURE__ */ l.jsx("div", { className: "lh-special__t", children: "Spesial Hanya Untukmu!" }),
      /* @__PURE__ */ l.jsx("img", { className: "lh-promo", src: qd, alt: "Easycash: cek limit sampai 100 juta" })
    ] }),
    /* @__PURE__ */ l.jsxs("nav", { className: "lh-tabs", children: [
      /* @__PURE__ */ l.jsxs("span", { className: "lh-tab lh-tab--on", style: { "--x": 97 }, children: [
        /* @__PURE__ */ l.jsx(bd, {}),
        /* @__PURE__ */ l.jsx("span", { children: "Beranda" })
      ] }),
      /* @__PURE__ */ l.jsxs("span", { className: "lh-tab", style: { "--x": 274 }, children: [
        /* @__PURE__ */ l.jsx(ld, { size: 26, strokeWidth: 1.6 }),
        /* @__PURE__ */ l.jsx("span", { children: "Riwayat" })
      ] }),
      /* @__PURE__ */ l.jsx("span", { className: "lh-tab lh-tab--pay", style: { "--x": 450 }, children: /* @__PURE__ */ l.jsx("span", { children: "Bayar" }) }),
      /* @__PURE__ */ l.jsxs("span", { className: "lh-tab", style: { "--x": 627 }, children: [
        /* @__PURE__ */ l.jsx($o, { size: 26, strokeWidth: 1.6 }),
        /* @__PURE__ */ l.jsx("span", { children: "Pesan" })
      ] }),
      /* @__PURE__ */ l.jsxs("span", { className: "lh-tab", style: { "--x": 803 }, children: [
        /* @__PURE__ */ l.jsx(tu, { size: 26, strokeWidth: 1.6 }),
        /* @__PURE__ */ l.jsx("span", { children: "Profil" })
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("span", { className: "lh-fab", children: [
      /* @__PURE__ */ l.jsx("span", { className: "lh-fab__frame", "aria-hidden": !0 }),
      /* @__PURE__ */ l.jsx("img", { className: "lh-qris", src: Ed, alt: "QRIS" })
    ] })
  ] }) }) });
}
const $d = { step: 0, cover: !1, focus: !1, n: 0, warn: !1, rails: !1, cta: !1, sec: 17112, found: !1, total: 0 }, ef = { step: 2, cover: !0, focus: !0, n: 9, warn: !0, rails: !0, cta: !0, sec: 17108, found: !0, total: 7905e5 }, Ti = { wide: { x: 620, y: 650 }, compact: { x: 200, y: 690 } }, tf = "750000000", nf = [
  ["Pick a product", "A tap on the 12-month product of BPR Artha Sejahtera opens the amount screen."],
  ["Enter the amount", "It is checked as it is typed: over Rp500 jt raises a warning."],
  ["One rail recommended", "RTGS fits Rp750 jt and the other three drop out. Nothing is locked while it waits for the funds."],
  ["Deposit active", "The funds are detected on their own and the deposit starts."]
], rf = (a) => a.found || a.cover ? 3 : a.step === 2 ? 2 : a.step === 1 ? 1 : 0, Qo = (a) => a.replace(/\B(?=(\d{3})+(?!\d))/g, "."), lf = (a) => String(a).padStart(2, "0");
async function sf(a) {
  await a.wait(600), a.mark("pick"), await a.click("card"), a.put({ step: 1 }), await a.wait(700), a.mark("amount"), await a.click("field"), a.put({ focus: !0 }), await a.wait(150);
  for (let c = 1; c <= 9; c++)
    a.put({ n: c }), await a.wait(60);
  await a.wait(150), a.mark("check"), a.put({ warn: !0 }), await a.wait(350), a.put({ rails: !0 }), await a.wait(450), a.put({ cta: !0 }), await a.wait(700), a.mark("next"), await a.click("cta"), a.put({ step: 2 }), await a.wait(1e3), a.put((c) => ({ sec: c.sec - 1 })), await a.wait(1e3), a.put((c) => ({ sec: c.sec - 1 })), await a.wait(400), a.mark("found"), a.put({ found: !0 }), await a.wait(650), a.mark("success"), a.put({ cover: !0 }), await a.wait(700), a.put({ total: 7905e5 }), await a.wait(2100), a.mark("back"), await a.click("back"), await a.snap({ step: 0, focus: !1, n: 0, warn: !1, rails: !1, cta: !1, sec: 17112, found: !1 }), await a.wait(120), a.put({ cover: !1 }), await a.wait(550), await a.snap({ total: 0 }), await a.move(a.layout === "wide" ? Ti.wide : Ti.compact), await a.wait(150);
}
function Hl({ time: a }) {
  return /* @__PURE__ */ l.jsxs("div", { className: "kd-sb", children: [
    /* @__PURE__ */ l.jsx("span", { children: a }),
    /* @__PURE__ */ l.jsxs("span", { className: "kd-sb__g", children: [
      /* @__PURE__ */ l.jsx(nu, { size: 16, strokeWidth: 2.2 }),
      /* @__PURE__ */ l.jsx(eu, { size: 16, strokeWidth: 2.2 }),
      /* @__PURE__ */ l.jsx(_1, { size: 19, strokeWidth: 2 })
    ] })
  ] });
}
function Ho({ title: a, step: c }) {
  return /* @__PURE__ */ l.jsxs("div", { className: "kd-nav", children: [
    /* @__PURE__ */ l.jsx(bo, { size: 24, strokeWidth: 2.2 }),
    /* @__PURE__ */ l.jsx("span", { className: "kd-nav__t", children: a }),
    /* @__PURE__ */ l.jsx("span", { className: "kd-nav__s", children: c })
  ] });
}
function Io({ on: a }) {
  return /* @__PURE__ */ l.jsx("div", { className: "kd-prog", children: [0, 1, 2].map((c) => /* @__PURE__ */ l.jsx("i", { "data-on": c < a || void 0 }, c)) });
}
function Mi({ name: a, sub: c, aside: u, size: y = "m" }) {
  return /* @__PURE__ */ l.jsxs("div", { className: "kd-bank", "data-size": y, children: [
    /* @__PURE__ */ l.jsx("span", { className: "kd-bank__ic", children: /* @__PURE__ */ l.jsx(id, { size: y === "l" ? 28 : 22, strokeWidth: 1.8 }) }),
    /* @__PURE__ */ l.jsxs("span", { className: "kd-bank__t", children: [
      /* @__PURE__ */ l.jsx("b", { children: a }),
      c && /* @__PURE__ */ l.jsx("small", { children: c })
    ] }),
    u
  ] });
}
function Oo({ icon: a, children: c }) {
  return /* @__PURE__ */ l.jsxs("span", { className: "kd-tag", children: [
    /* @__PURE__ */ l.jsx("i", { children: a }),
    c
  ] });
}
function Il({ min: a, term: c, rate: u, target: y }) {
  return /* @__PURE__ */ l.jsxs("div", { className: "kd-prod", "data-target": y, "data-cursor": y ? "pointer" : void 0, children: [
    /* @__PURE__ */ l.jsxs("div", { className: "kd-prod__band", children: [
      /* @__PURE__ */ l.jsxs("div", { children: [
        /* @__PURE__ */ l.jsx("span", { className: "kd-prod__amt", children: a }),
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
      /* @__PURE__ */ l.jsx(Oo, { icon: /* @__PURE__ */ l.jsx(b1, { size: 15, strokeWidth: 2 }), children: "E-Deposito" }),
      /* @__PURE__ */ l.jsx(Oo, { icon: /* @__PURE__ */ l.jsx(ud, { size: 14, strokeWidth: 2.4 }), children: "ARO" })
    ] })
  ] });
}
function af() {
  return /* @__PURE__ */ l.jsx(
    Nr,
    {
      width: 820,
      height: 750,
      compact: { below: 620, width: 358, height: 736 },
      initial: $d,
      poster: ef,
      script: sf,
      cursor: { at: Ti, style: "touch" },
      play: "loop",
      theme: "dark",
      className: "kd",
      children: (a, c, u) => {
        const y = Qo(tf.slice(0, a.n)), v = Math.floor(a.sec / 3600), w = Math.floor(a.sec % 3600 / 60), S = a.sec % 60, C = u !== "compact", N = rf(a);
        return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          C && /* @__PURE__ */ l.jsx("ol", { className: "kd-rail", children: nf.map(([R, z], I) => /* @__PURE__ */ l.jsxs("li", { className: "kd-beat", "data-state": I < N ? "done" : I === N ? "on" : "next", "data-last": I === 3 || void 0, children: [
            /* @__PURE__ */ l.jsx("span", { className: "kd-beat__n", children: I < N || I === 3 && N === 3 ? /* @__PURE__ */ l.jsx(Sr, { size: 18, strokeWidth: 2.8 }) : I + 1 }),
            /* @__PURE__ */ l.jsx("b", { children: R }),
            /* @__PURE__ */ l.jsx("p", { children: z })
          ] }, R)) }),
          /* @__PURE__ */ l.jsx(Pr, { width: u === "compact" ? 326 : 340, frame: "android", status: !1, className: "kd-phone", children: /* @__PURE__ */ l.jsxs("div", { className: "kd-app", children: [
            /* @__PURE__ */ l.jsxs("section", { className: "kd-screen kd-list", "data-back": a.step > 0 || void 0, children: [
              /* @__PURE__ */ l.jsx(Hl, { time: "10:41" }),
              /* @__PURE__ */ l.jsxs("div", { className: "kd-top", children: [
                /* @__PURE__ */ l.jsxs("div", { className: "kd-nav kd-nav--d", children: [
                  /* @__PURE__ */ l.jsx(bo, { size: 24, strokeWidth: 2.2 }),
                  /* @__PURE__ */ l.jsx("span", { className: "kd-nav__t", children: "Detail BPR" }),
                  /* @__PURE__ */ l.jsxs("span", { className: "kd-nav__ic", children: [
                    /* @__PURE__ */ l.jsx(sd, { size: 24, strokeWidth: 2.2 }),
                    /* @__PURE__ */ l.jsx(dd, { size: 22, strokeWidth: 2.2 })
                  ] })
                ] }),
                /* @__PURE__ */ l.jsx(
                  Mi,
                  {
                    size: "l",
                    name: "BPR Artha Sejahtera",
                    sub: "Semarang",
                    aside: /* @__PURE__ */ l.jsx("span", { className: "kd-chev", children: /* @__PURE__ */ l.jsx(Wi, { size: 22, strokeWidth: 2.4 }) })
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "kd-hours", children: [
                /* @__PURE__ */ l.jsx("span", { className: "kd-lb", children: "Jam Operasional" }),
                /* @__PURE__ */ l.jsxs("div", { className: "kd-hours__r", children: [
                  /* @__PURE__ */ l.jsx("span", { className: "kd-hours__ic", children: /* @__PURE__ */ l.jsx(nd, { size: 22, strokeWidth: 2 }) }),
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
            /* @__PURE__ */ l.jsxs("section", { className: "kd-screen kd-push", "data-at": a.step === 0 ? "right" : a.step === 1 ? "in" : "left", children: [
              /* @__PURE__ */ l.jsx(Hl, { time: "10:41" }),
              /* @__PURE__ */ l.jsx(Ho, { title: "Penempatan", step: "Langkah 2 dari 3" }),
              /* @__PURE__ */ l.jsx(Io, { on: 2 }),
              /* @__PURE__ */ l.jsxs("div", { className: "kd-body", children: [
                /* @__PURE__ */ l.jsx("div", { className: "kd-card kd-pr", children: /* @__PURE__ */ l.jsx(Mi, { name: "BPR Artha Sejahtera", sub: "Deposito 12 bulan · 6,75% p.a." }) }),
                /* @__PURE__ */ l.jsxs("div", { className: "kd-card kd-amt", children: [
                  /* @__PURE__ */ l.jsx("span", { className: "kd-lb", children: "Nominal penempatan" }),
                  /* @__PURE__ */ l.jsxs("div", { className: "kd-amt__v", "data-focus": a.focus || void 0, "data-target": "field", "data-cursor": "ibeam", children: [
                    a.n === 0 ? /* @__PURE__ */ l.jsx("span", { className: "kd-amt__ph", children: "Rp" }) : /* @__PURE__ */ l.jsxs("span", { children: [
                      "Rp ",
                      y
                    ] }),
                    /* @__PURE__ */ l.jsx("i", { className: "kd-caret", "data-on": a.focus && a.n < 9 || void 0 })
                  ] }),
                  /* @__PURE__ */ l.jsxs("div", { className: "kd-src", children: [
                    "Dari ",
                    /* @__PURE__ */ l.jsx("b", { children: "Mandiri ···· 4821" }),
                    /* @__PURE__ */ l.jsx("span", { className: "kd-chg", children: "Ubah" })
                  ] }),
                  /* @__PURE__ */ l.jsx(z0, { open: a.warn, children: /* @__PURE__ */ l.jsxs("div", { className: "kd-warn", children: [
                    /* @__PURE__ */ l.jsx(Bo, { size: 18, strokeWidth: 2.2 }),
                    /* @__PURE__ */ l.jsx("span", { children: "Nominal di atas Rp500 jt. Pastikan limit transfer Anda mencukupi." })
                  ] }) })
                ] }),
                /* @__PURE__ */ l.jsx("div", { className: "kd-lb kd-lb--out", children: "Cara transfer" }),
                /* @__PURE__ */ l.jsxs("div", { className: "kd-opt", "data-on": a.rails || void 0, children: [
                  /* @__PURE__ */ l.jsx("span", { className: "kd-rd" }),
                  /* @__PURE__ */ l.jsxs("span", { className: "kd-opt__t", children: [
                    /* @__PURE__ */ l.jsxs("b", { children: [
                      "RTGS",
                      /* @__PURE__ */ l.jsx("em", { "data-on": a.rails || void 0, children: "Direkomendasikan" })
                    ] }),
                    /* @__PURE__ */ l.jsx("small", { children: "Rp100 jt ke atas · masuk hari ini" }),
                    /* @__PURE__ */ l.jsx(z0, { open: a.rails, children: /* @__PURE__ */ l.jsx("small", { className: "kd-opt__more", children: "Kirim sebelum 15:00 WIB" }) })
                  ] })
                ] }),
                /* @__PURE__ */ l.jsxs("div", { className: "kd-na", "data-dim": a.rails || void 0, children: [
                  /* @__PURE__ */ l.jsx(z0, { open: a.rails, children: /* @__PURE__ */ l.jsx("div", { className: "kd-nah", children: "Tidak tersedia untuk Rp750 jt" }) }),
                  [
                    ["BI-FAST", "Maks. Rp250 jt / transfer"],
                    ["VA Mandiri", "Maks. Rp30 jt / hari"],
                    ["VA Permata", "Antarbank maks. Rp25 jt"]
                  ].map(([R, z]) => /* @__PURE__ */ l.jsxs("div", { className: "kd-nar", children: [
                    /* @__PURE__ */ l.jsx("b", { children: R }),
                    /* @__PURE__ */ l.jsx("span", { children: z })
                  ] }, R))
                ] })
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "kd-foot", children: [
                /* @__PURE__ */ l.jsxs("div", { className: "kd-free", children: [
                  /* @__PURE__ */ l.jsx(od, { size: 16, strokeWidth: 2.2 }),
                  "Belum ada dana yang dikunci"
                ] }),
                /* @__PURE__ */ l.jsx("div", { className: "kd-cta", "data-ready": a.cta || void 0, "data-target": "cta", children: "Lanjut ke instruksi" })
              ] })
            ] }),
            /* @__PURE__ */ l.jsxs("section", { className: "kd-screen kd-push", "data-at": a.step < 2 ? "right" : "in", children: [
              /* @__PURE__ */ l.jsx(Hl, { time: "10:41" }),
              /* @__PURE__ */ l.jsx(Ho, { title: "Transfer via RTGS", step: "Langkah 3 dari 3" }),
              /* @__PURE__ */ l.jsx(Io, { on: 3 }),
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
                    ].map(([R, z], I) => /* @__PURE__ */ l.jsxs("span", { className: "kd-cd__u", children: [
                      I > 0 && /* @__PURE__ */ l.jsx("i", { children: ":" }),
                      /* @__PURE__ */ l.jsxs("span", { children: [
                        /* @__PURE__ */ l.jsx("b", { children: /* @__PURE__ */ l.jsx(_t, { value: R, format: (U) => lf(Math.round(U)), duration: 450 }) }),
                        /* @__PURE__ */ l.jsx("small", { children: z })
                      ] })
                    ] }, z)) })
                  ] }),
                  /* @__PURE__ */ l.jsx("div", { className: "kd-cd__bar", children: /* @__PURE__ */ l.jsx("i", { style: { width: `${a.sec / 25200 * 100}%` } }) })
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
                  ["Di aplikasi Mandiri, pilih Transfer › RTGS", "Isi nominal dan rekening tujuan persis", "Tulis kode DEP-7F3K di berita transfer"].map((R, z) => /* @__PURE__ */ l.jsxs("div", { className: "kd-st", children: [
                    /* @__PURE__ */ l.jsx("i", { children: z + 1 }),
                    R
                  ] }, R))
                ] }),
                /* @__PURE__ */ l.jsxs("div", { className: "kd-warn kd-warn--static", children: [
                  /* @__PURE__ */ l.jsx(Bo, { size: 18, strokeWidth: 2.2 }),
                  /* @__PURE__ */ l.jsx("span", { children: "Pastikan limit transfer harian Anda minimal Rp750 jt." })
                ] })
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "kd-foot", children: [
                /* @__PURE__ */ l.jsxs("div", { className: "kd-auto", children: [
                  /* @__PURE__ */ l.jsx("span", { className: "kd-auto__mark", children: /* @__PURE__ */ l.jsx(Wl, { on: a.found, pending: !a.found, size: 26 }) }),
                  /* @__PURE__ */ l.jsxs("span", { children: [
                    /* @__PURE__ */ l.jsx("b", { children: "Menunggu dana masuk" }),
                    /* @__PURE__ */ l.jsx("small", { children: "Terdeteksi otomatis · tidak ada yang dikunci" })
                  ] })
                ] }),
                /* @__PURE__ */ l.jsx("div", { className: "kd-ghost", children: "Ganti cara transfer" })
              ] })
            ] }),
            /* @__PURE__ */ l.jsxs("section", { className: "kd-screen kd-cover", "data-up": a.cover || void 0, children: [
              /* @__PURE__ */ l.jsx(Hl, { time: "10:42" }),
              /* @__PURE__ */ l.jsxs("div", { className: "kd-ok", children: [
                /* @__PURE__ */ l.jsx("span", { className: "kd-ok__disc", children: /* @__PURE__ */ l.jsx(Sr, { size: 34, strokeWidth: 3 }) }),
                /* @__PURE__ */ l.jsx("b", { children: "Penempatan Berhasil" }),
                /* @__PURE__ */ l.jsx("small", { children: "Dana diterima via RTGS · 10:42 WIB" })
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "kd-body kd-body--ok", children: [
                /* @__PURE__ */ l.jsxs("div", { className: "kd-card kd-sum", children: [
                  /* @__PURE__ */ l.jsx(Mi, { name: "BPR Artha Sejahtera", sub: "Deposito 12 bulan", aside: /* @__PURE__ */ l.jsx("span", { className: "kd-active", children: "Aktif" }) }),
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
                      /* @__PURE__ */ l.jsx(_t, { value: a.total, format: (R) => Qo(String(Math.round(R))), duration: 900, stagger: 40 })
                    ] })
                  ] }),
                  /* @__PURE__ */ l.jsx("div", { className: "kd-mn", children: "Bunga bersih Rp 40.500.000 setelah pajak" })
                ] }),
                /* @__PURE__ */ l.jsxs("div", { className: "kd-card kd-next", children: [
                  /* @__PURE__ */ l.jsx("b", { children: "Langkah selanjutnya" }),
                  /* @__PURE__ */ l.jsxs("div", { className: "kd-next__r", children: [
                    /* @__PURE__ */ l.jsx("span", { className: "kd-next__ic", children: /* @__PURE__ */ l.jsx($o, { size: 20, strokeWidth: 1.8 }) }),
                    "Sertifikat dikirim ke email Anda"
                  ] }),
                  /* @__PURE__ */ l.jsxs("div", { className: "kd-next__r", children: [
                    /* @__PURE__ */ l.jsx("span", { className: "kd-next__ic", children: /* @__PURE__ */ l.jsx(md, { size: 20, strokeWidth: 1.8 }) }),
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
const ru = {
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
}, of = {
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
}, lu = "Compares cover against lead time and the sales trend for each SKU.", uf = lu.split(" ").length;
async function cf(a) {
  await a.wait(900), a.mark("sources"), a.put({ src: "run", label: "Running…" });
  for (let c = 1; c <= 4; c++)
    await a.wait(190), a.put({ tags: c });
  await a.wait(260), a.put({ src: "done", e1: !0 }), await a.wait(620), a.mark("clean"), a.put({ clean: "run", n1: 312, n2: 1840, n3: 0 }), await a.wait(620), a.put({ dupesOk: !0 }), await a.wait(560), a.put({ clean: "done", e2: !0 }), await a.wait(640), a.mark("signals"), a.put({ llm: "run", conf: 0.86 });
  for (let c = 1; c <= uf; c++)
    await a.wait(88), a.put({ words: c });
  await a.wait(240), a.put({ llm: "done", e3: !0 }), await a.wait(640), a.mark("gate"), a.put({ gate: "run" }), await a.wait(450), a.put({ chosen: !0 }), await a.wait(300), a.put({ gate: "done", rev: "skip", e4: !0 }), await a.wait(750), a.mark("decision"), a.put({ dec: "run" }), await a.wait(380), a.put({ dec: "done", card: !0, cv: 0.86, label: "Ran in 2.4s" }), await a.wait(3e3), a.mark("exit"), a.put({ card: !1, dec: "idle", rev: "idle", chosen: !1, e4: !1, e3: !1, e2: !1, e1: !1, label: "Ready" }), await a.wait(300), await a.stagger([1, 2, 3, 4, 5], (c) => a.put({ hid: c }), 70), await a.wait(550), await a.snap({ ...ru, hid: 5 }), await a.wait(150), await a.set({ hid: 0 }), await a.wait(500);
}
const df = [
  ["Legacy ERP", "orders"],
  ["Sales CRM", "accounts"],
  ["Warehouse sheets", null],
  ["POS exports", "daily"]
];
function ff({ state: a, fix: c }) {
  const u = c ? { wait: "…", ok: "OK", fix: "DUPES" } : { wait: "…", ok: "OK", fix: "OK" };
  return /* @__PURE__ */ l.jsx("span", { className: "dd-tag dd-dyn", "data-tone": a, children: /* @__PURE__ */ l.jsx(Ui, { value: a, states: u, align: "center" }) });
}
function hf({ st: a, time: c, big: u }) {
  return /* @__PURE__ */ l.jsxs("span", { className: "dd-st dd-dyn", children: [
    /* @__PURE__ */ l.jsx("span", { className: "dd-st__t", "data-on": a === "done" && !!c || void 0, children: c }),
    /* @__PURE__ */ l.jsx(Wl, { on: a === "done", pending: a === "run", size: u ? 18 : 14 })
  ] });
}
function wr({ tile: a, icon: c, title: u, st: y, time: v, big: w }) {
  return /* @__PURE__ */ l.jsxs("div", { className: "dd-nh", children: [
    /* @__PURE__ */ l.jsx("span", { className: "dd-ico", style: { background: a }, children: c }),
    /* @__PURE__ */ l.jsx("span", { className: "dd-nt", children: u }),
    /* @__PURE__ */ l.jsx(hf, { st: y, time: v, big: w })
  ] });
}
function pf() {
  return /* @__PURE__ */ l.jsx(
    Nr,
    {
      width: 1064,
      height: 520,
      compact: { below: 640, width: 358, height: 560 },
      initial: ru,
      poster: of,
      script: cf,
      play: "loop",
      theme: "dark",
      className: "dd",
      children: (a, c, u) => {
        const y = u === "wide", v = { size: y ? 14 : 17, strokeWidth: 2 }, w = (G) => a.hid > 4 - G || void 0, S = /* @__PURE__ */ l.jsx("div", { className: "dd-nb", children: df.map(([G, H], Ae) => {
          const pe = Ae === 2, he = Ae >= a.tags ? "wait" : pe && !a.dupesOk ? "fix" : "ok";
          return /* @__PURE__ */ l.jsxs("div", { className: "dd-row", children: [
            /* @__PURE__ */ l.jsxs("span", { children: [
              /* @__PURE__ */ l.jsx("b", { children: G }),
              H ? ` · ${H}` : ""
            ] }),
            /* @__PURE__ */ l.jsx(ff, { state: he, fix: pe })
          ] }, G);
        }) }), C = /* @__PURE__ */ l.jsxs("div", { className: "dd-nb", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "dd-row", children: [
            /* @__PURE__ */ l.jsx("span", { children: "Duplicates removed" }),
            /* @__PURE__ */ l.jsx("b", { className: "dd-dyn", children: /* @__PURE__ */ l.jsx(_t, { value: a.n1, duration: 900 }) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "dd-row", children: [
            /* @__PURE__ */ l.jsx("span", { children: "SKUs reconciled" }),
            /* @__PURE__ */ l.jsx("b", { className: "dd-dyn", children: /* @__PURE__ */ l.jsx(_t, { value: a.n2, duration: 900 }) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "dd-row", children: [
            /* @__PURE__ */ l.jsx("span", { children: "Rows failing checks" }),
            /* @__PURE__ */ l.jsx("b", { className: "dd-dyn", children: /* @__PURE__ */ l.jsx(_t, { value: a.n3, duration: 900 }) })
          ] })
        ] }), N = /* @__PURE__ */ l.jsxs("div", { className: "dd-nb", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "dd-row", children: [
            /* @__PURE__ */ l.jsx("span", { children: "Step" }),
            /* @__PURE__ */ l.jsx("code", { children: "LLM" })
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "dd-note dd-dyn", children: /* @__PURE__ */ l.jsx(Yo, { text: lu, count: a.words }) }),
          /* @__PURE__ */ l.jsxs("div", { className: "dd-row", children: [
            /* @__PURE__ */ l.jsx("span", { children: "Confidence" }),
            /* @__PURE__ */ l.jsx("b", { className: "dd-dyn", children: /* @__PURE__ */ l.jsx(_t, { value: a.conf, format: (G) => G.toFixed(2), duration: 1e3 }) })
          ] })
        ] }), R = /* @__PURE__ */ l.jsx("div", { className: "dd-nb", children: /* @__PURE__ */ l.jsxs("div", { className: "dd-ports", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "dd-port", "data-chosen": a.chosen || void 0, "data-target": "port-true", children: [
            /* @__PURE__ */ l.jsx("i", { className: "dd-hl dd-dyn" }),
            /* @__PURE__ */ l.jsx("span", { children: "IF" }),
            /* @__PURE__ */ l.jsx("span", { children: "confidence ≥ 0.80" })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "dd-port", "data-passed": a.chosen || void 0, "data-target": "port-false", children: [
            /* @__PURE__ */ l.jsx("span", { children: "ELSE" }),
            /* @__PURE__ */ l.jsx("span", { children: "to a planner" })
          ] })
        ] }) }), z = /* @__PURE__ */ l.jsx("div", { className: "dd-nb", children: /* @__PURE__ */ l.jsxs("div", { className: "dd-dec", "data-on": a.card || void 0, children: [
          /* @__PURE__ */ l.jsx("small", { children: "INVENTORY · HIGH CONFIDENCE" }),
          /* @__PURE__ */ l.jsx("strong", { children: "Reorder top-selling SKUs, east warehouse" }),
          /* @__PURE__ */ l.jsx("p", { children: "4 days of cover against a 6-day lead time." }),
          /* @__PURE__ */ l.jsxs("div", { className: "dd-conf dd-dyn", children: [
            /* @__PURE__ */ l.jsx("span", { children: "Confidence" }),
            /* @__PURE__ */ l.jsx("b", { children: /* @__PURE__ */ l.jsx(_t, { value: a.cv, format: (G) => G.toFixed(2), duration: 900 }) }),
            /* @__PURE__ */ l.jsxs("div", { className: "dd-conf__bar", children: [
              /* @__PURE__ */ l.jsx(xd, { value: a.cv }),
              /* @__PURE__ */ l.jsx("i", { className: "dd-conf__tick" })
            ] })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "dd-btns", children: [
            /* @__PURE__ */ l.jsx("span", { className: "yes", "data-target": "approve", children: "Approve" }),
            /* @__PURE__ */ l.jsx("span", { className: "no", children: "Review" })
          ] })
        ] }) }), I = (G, H, Ae, pe, he, fe = "") => /* @__PURE__ */ l.jsxs("div", { className: `dd-node dd-n-${G}${fe}`, "data-st": Ae, "data-hid": w(H), "data-target": `n-${G}`, children: [
          pe,
          y ? he : /* @__PURE__ */ l.jsx(z0, { open: Ae === "run" || G === "dec", children: he })
        ] }, G), U = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          I("src", 0, a.src, /* @__PURE__ */ l.jsx(wr, { tile: "#155eef", icon: /* @__PURE__ */ l.jsx(rd, { ...v }), title: "Sources", st: a.src, time: "0.2s", big: !y }), S),
          I("clean", 1, a.clean, /* @__PURE__ */ l.jsx(wr, { tile: "#2e90fa", icon: /* @__PURE__ */ l.jsx(ad, { ...v }), title: "Clean & validate", st: a.clean, time: "0.6s", big: !y }), C),
          I("llm", 2, a.llm, /* @__PURE__ */ l.jsx(wr, { tile: "#6172f3", icon: /* @__PURE__ */ l.jsx(pd, { ...v }), title: "Demand signals", st: a.llm, time: "1.1s", big: !y }), N),
          I("gate", 3, a.gate, /* @__PURE__ */ l.jsx(wr, { tile: "#06aed4", icon: /* @__PURE__ */ l.jsx(hd, { ...v }), title: "IF/ELSE", st: a.gate, time: "0.1s", big: !y }), R),
          I("dec", 4, a.dec, /* @__PURE__ */ l.jsx(wr, { tile: "#f79009", icon: /* @__PURE__ */ l.jsx(Sr, { ...v }), title: "Decision", st: a.dec, time: "0.4s", big: !y }), z, " dd-out")
        ] }), J = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsxs("span", { className: "dd-crumb", children: [
            /* @__PURE__ */ l.jsx(vd, { size: 15, strokeWidth: 2 }),
            /* @__PURE__ */ l.jsx("span", { children: "Ops copilot" }),
            /* @__PURE__ */ l.jsx("small", { children: "/ Weekly replenishment" })
          ] }),
          y && /* @__PURE__ */ l.jsxs("span", { className: "dd-tabs", children: [
            /* @__PURE__ */ l.jsx("span", { "data-on": !0, children: "Orchestrate" }),
            /* @__PURE__ */ l.jsx("span", { children: "Logs" }),
            /* @__PURE__ */ l.jsx("span", { children: "Monitoring" })
          ] })
        ] }), T = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsxs("span", { className: "dd-run", children: [
            /* @__PURE__ */ l.jsx("i", {}),
            /* @__PURE__ */ l.jsx(Ui, { value: a.label, states: { Ready: "Ready", "Running…": "Running…", "Ran in 2.4s": "Ran in 2.4s" }, align: "start" })
          ] }),
          y && /* @__PURE__ */ l.jsx("span", { className: "dd-pub", children: "Publish" })
        ] });
        if (!y)
          return /* @__PURE__ */ l.jsxs(Pr, { width: 326, dark: !0, wallpaper: "#1f2025", className: "dd-phone", children: [
            /* @__PURE__ */ l.jsxs("div", { className: "dd-appbar", children: [
              J,
              T
            ] }),
            /* @__PURE__ */ l.jsx("div", { className: "dd-canvas dd-canvas--c", children: U })
          ] });
        const X = (G) => c(`n-${G}`), K = (G) => ({ x: X(G).x + X(G).width, y: X(G).y + 22 }), Q = (G) => ({ x: X(G).x, y: X(G).y + 22 }), re = (G) => ({ x: X(G).x + X(G).width / 2, y: X(G).y + X(G).height }), de = (G) => ({ x: X(G).x + X(G).width / 2, y: X(G).y }), F = (G) => ({ x: X("gate").x + X("gate").width, y: c(G).y + c(G).height / 2 }), V = { route: "curve", dots: "none", dashed: !0, show: !0, className: "dd-base" }, le = { route: "curve", className: "dd-e" };
        return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsxs(R1, { className: "dd-win", lead: J, toolbar: T, body: { className: "dd-canvas" }, children: [
            U,
            /* @__PURE__ */ l.jsxs("div", { className: "dd-node dd-n-rev", "data-st": a.rev, "data-hid": w(4), "data-target": "n-rev", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "dd-nh", children: [
                /* @__PURE__ */ l.jsx("span", { className: "dd-ico", style: { background: "#667085" }, children: /* @__PURE__ */ l.jsx(tu, { ...v }) }),
                /* @__PURE__ */ l.jsx("span", { className: "dd-nt", children: "Planner review" }),
                /* @__PURE__ */ l.jsxs("span", { className: "dd-st dd-dyn", children: [
                  /* @__PURE__ */ l.jsx("span", { className: "dd-st__t" }),
                  a.rev === "skip" ? /* @__PURE__ */ l.jsx("i", { className: "dd-dash" }) : /* @__PURE__ */ l.jsx(Wl, { on: !1, size: 14 })
                ] })
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "dd-nb", children: /* @__PURE__ */ l.jsxs("div", { className: "dd-note", children: [
                "Low-confidence calls wait here for a person.",
                /* @__PURE__ */ l.jsx("span", { className: "dd-dyn", "data-on": a.rev === "skip" || void 0, children: " Skipped this run." })
              ] }) })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "dd-rail", "aria-hidden": !0, children: [
              /* @__PURE__ */ l.jsx("span", { "data-on": !0, children: "Select" }),
              /* @__PURE__ */ l.jsx("span", { children: "Hand" }),
              /* @__PURE__ */ l.jsx("span", { children: "100%" })
            ] })
          ] }),
          /* @__PURE__ */ l.jsx(G0, { ...V, from: K("src"), to: Q("clean") }),
          /* @__PURE__ */ l.jsx(G0, { ...V, route: "straight", from: re("clean"), to: de("llm") }),
          /* @__PURE__ */ l.jsx(G0, { ...V, from: K("llm"), to: Q("gate") }),
          /* @__PURE__ */ l.jsx(G0, { ...V, from: F("port-false"), to: Q("rev") }),
          /* @__PURE__ */ l.jsx(G0, { ...le, from: K("src"), to: Q("clean"), show: a.e1 }),
          /* @__PURE__ */ l.jsx(G0, { ...le, route: "straight", from: re("clean"), to: de("llm"), show: a.e2 }),
          /* @__PURE__ */ l.jsx(G0, { ...le, from: K("llm"), to: Q("gate"), show: a.e3 }),
          /* @__PURE__ */ l.jsx(G0, { ...le, className: "dd-e dd-e--lime", from: F("port-true"), to: Q("dec"), show: a.e4 })
        ] });
      }
    }
  );
}
const mf = "data:image/webp;base64,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", vf = "data:image/webp;base64,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", yf = "data:image/webp;base64,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", gf = "data:image/webp;base64,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", xf = { open: !1, words: 0, btn: "plan", sat: !1, link: !1 }, wf = { open: !0, words: 99, btn: "sent", sat: !0, link: !0 }, su = "Aulia turns 30 on Saturday. Birthday brunch, 11:00–13:00?", Af = su.split(" ").length;
async function kf(a) {
  await a.wait(1100), a.mark("plan"), await a.click({ at: "btn", x: 0.9, y: 0.5 }), a.put({ open: !0, btn: "send" }), await a.wait(700);
  for (let c = 1; c <= Af; c++)
    await a.wait(110), a.put({ words: c });
  await a.wait(900), a.mark("send"), await a.click({ at: "btn", x: 0.9, y: 0.5 }), a.put({ btn: "sending" }), await a.wait(900), a.mark("sent"), a.put({ btn: "sent" }), await a.wait(300), a.put({ sat: !0 }), await a.wait(900), a.put({ link: !0 }), await a.wait(2800), a.mark("exit"), a.put({ link: !1 }), await a.wait(250), a.put({ sat: !1 }), await a.wait(350), a.put({ open: !1, btn: "plan" }), await a.wait(900), await a.snap({ words: 0 }), await a.move(a.layout === "wide" ? Bi.wide : Bi.compact), await a.wait(300);
}
const jf = [
  { name: "Aulia", line: "turns 30", src: mf },
  { name: "Laurens", line: "free 11:00–13:00", src: vf },
  { name: "Putri", line: "free all day", src: yf }
], Ar = { strokeWidth: 2 }, Bi = { wide: { x: 500, y: 560 }, compact: { x: 342, y: 330 } };
function Sf() {
  return /* @__PURE__ */ l.jsx(
    Nr,
    {
      width: 560,
      height: 790,
      compact: { below: 540, width: 358, height: 570 },
      initial: xf,
      poster: wf,
      script: kf,
      play: "loop",
      cursor: { style: "touch", at: Bi },
      theme: "dark",
      className: "cr",
      children: (a, c, u) => {
        const y = u === "wide", v = c("btn"), w = c("sat");
        return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsxs(Pr, { width: y ? 360 : 326, className: "cr-phone", children: [
            /* @__PURE__ */ l.jsxs("div", { className: "cr-app", children: [
              /* @__PURE__ */ l.jsxs("header", { className: "cr-head", children: [
                /* @__PURE__ */ l.jsxs("span", { className: "cr-bell", children: [
                  /* @__PURE__ */ l.jsx($1, { size: 21, ...Ar }),
                  /* @__PURE__ */ l.jsx("i", {})
                ] }),
                /* @__PURE__ */ l.jsx("span", { className: "cr-month", children: "October 2026" }),
                /* @__PURE__ */ l.jsx(En, { size: 34, src: gf, name: "Denny" })
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "cr-seg", children: [
                /* @__PURE__ */ l.jsx("span", { "data-on": !0, children: "Day" }),
                /* @__PURE__ */ l.jsx("span", { children: "Week" }),
                /* @__PURE__ */ l.jsx("span", { children: "Month" })
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "cr-date", children: [
                /* @__PURE__ */ l.jsx(td, { size: 20, strokeWidth: 2, className: "cr-chev" }),
                /* @__PURE__ */ l.jsx("b", { children: "Wed, Oct 7" }),
                /* @__PURE__ */ l.jsx("span", { children: "· 2026" }),
                /* @__PURE__ */ l.jsx(Wi, { size: 20, strokeWidth: 2, className: "cr-chev" }),
                /* @__PURE__ */ l.jsx("i", { children: "TODAY" })
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "cr-aura", "data-aura": a.btn === "sent" ? "rest" : "on", children: [
                /* @__PURE__ */ l.jsx("span", { className: "cr-aura__halo", "aria-hidden": !0, children: /* @__PURE__ */ l.jsx("i", {}) }),
                /* @__PURE__ */ l.jsxs("div", { className: "cr-card", "data-target": "card", "data-open": a.open || void 0, children: [
                  /* @__PURE__ */ l.jsxs("div", { className: "cr-eyebrow", children: [
                    /* @__PURE__ */ l.jsx(fd, { size: 18, ...Ar }),
                    /* @__PURE__ */ l.jsx("span", { children: "SATURDAY" }),
                    /* @__PURE__ */ l.jsx("em", { children: /* @__PURE__ */ l.jsx(yd, { size: 16, strokeWidth: 2.2 }) })
                  ] }),
                  /* @__PURE__ */ l.jsx("div", { className: "cr-title", children: "Aulia turns 30 on Saturday, and the crew looks free. Birthday brunch?" }),
                  /* @__PURE__ */ l.jsx("div", { className: "cr-chips", children: jf.map((S) => /* @__PURE__ */ l.jsxs("span", { className: "cr-chip", children: [
                    /* @__PURE__ */ l.jsx(En, { size: 34, src: S.src, name: S.name }),
                    /* @__PURE__ */ l.jsxs("span", { children: [
                      /* @__PURE__ */ l.jsx("b", { children: S.name }),
                      /* @__PURE__ */ l.jsx("small", { children: S.line })
                    ] })
                  ] }, S.name)) }),
                  /* @__PURE__ */ l.jsx(z0, { open: a.open, children: /* @__PURE__ */ l.jsxs("div", { className: "cr-plan", children: [
                    /* @__PURE__ */ l.jsxs("div", { className: "cr-when", children: [
                      /* @__PURE__ */ l.jsx("small", { children: "When" }),
                      /* @__PURE__ */ l.jsx("b", { children: "Sat 11:00–13:00" })
                    ] }),
                    /* @__PURE__ */ l.jsxs("div", { className: "cr-msg", children: [
                      /* @__PURE__ */ l.jsx("small", { children: "Message" }),
                      /* @__PURE__ */ l.jsx("p", { children: /* @__PURE__ */ l.jsx(Yo, { text: su, count: a.words }) })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ l.jsx("div", { className: "cr-btn", "data-state": a.btn, "data-target": "btn", children: /* @__PURE__ */ l.jsx(
                    Ui,
                    {
                      value: a.btn,
                      states: {
                        plan: /* @__PURE__ */ l.jsxs("span", { className: "cr-btn__l", children: [
                          /* @__PURE__ */ l.jsx(_o, { size: 18, ...Ar }),
                          "Plan brunch with Aulia, Laurens and Putri"
                        ] }),
                        send: /* @__PURE__ */ l.jsxs("span", { className: "cr-btn__l", style: { width: 126, justifyContent: "center" }, children: [
                          /* @__PURE__ */ l.jsx(cd, { size: 18, ...Ar }),
                          "Send invite"
                        ] }),
                        sending: /* @__PURE__ */ l.jsxs("span", { className: "cr-btn__l", style: { width: 126, justifyContent: "center" }, children: [
                          /* @__PURE__ */ l.jsx(gd, { size: 18 }),
                          "Sending"
                        ] }),
                        sent: /* @__PURE__ */ l.jsxs("span", { className: "cr-btn__l", style: { width: 126, justifyContent: "center" }, children: [
                          /* @__PURE__ */ l.jsx(Sr, { size: 18, strokeWidth: 2.6 }),
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
            /* @__PURE__ */ l.jsxs("div", { className: "cr-fab", "data-hide": a.open || void 0, children: [
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
          /* @__PURE__ */ l.jsx("div", { className: "cr-sat-slot", style: y ? { top: Math.max(0, v.y + v.height / 2 - 118) } : void 0, children: /* @__PURE__ */ l.jsx(z0, { open: a.sat, reveal: "drop", children: /* @__PURE__ */ l.jsxs("div", { className: "cr-sat", "data-target": "sat", children: [
            /* @__PURE__ */ l.jsxs("div", { className: "cr-sat__top", children: [
              /* @__PURE__ */ l.jsx("span", { className: "cr-sat__tick", children: /* @__PURE__ */ l.jsx(Sr, { size: 16, strokeWidth: 3 }) }),
              /* @__PURE__ */ l.jsx("b", { children: "Invite sent" }),
              /* @__PURE__ */ l.jsx("small", { children: "in under 120 seconds" })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "cr-sat__row", children: [
              /* @__PURE__ */ l.jsx(ed, { size: 16, ...Ar }),
              "Plan on the calendar"
            ] })
          ] }) }) }),
          y ? /* @__PURE__ */ l.jsx(G0, { route: "curve", from: { x: v.x + v.width, y: v.y + v.height / 2 }, to: { x: w.x, y: w.y + 30 }, show: a.link }) : /* @__PURE__ */ l.jsx(G0, { route: "straight", from: { x: v.x + v.width / 2, y: v.y + v.height }, to: { x: w.x + w.width / 2, y: w.y }, show: a.link })
        ] });
      }
    }
  );
}
const Nf = {
  "linkaja-routing": zd,
  "linkaja-home": _d,
  "komunal-shipped-flow": af,
  "ai-decision-desk": pf,
  "ai-chrona": Sf
};
function Pf(a) {
  const c = Nf[a.dataset.ss ?? ""];
  !c || a.dataset.ssOn || (a.dataset.ssOn = "1", e1.createRoot(a).render(/* @__PURE__ */ l.jsx(c, {})), a.classList.add("ss-ready"));
}
export {
  Pf as mount
};
