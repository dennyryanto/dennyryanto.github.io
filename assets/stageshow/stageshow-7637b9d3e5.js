var Ei = { exports: {} }, wr = {}, Ai = { exports: {} }, we = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yo;
function oc() {
  if (yo) return we;
  yo = 1;
  var a = Symbol.for("react.element"), c = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), C = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), I = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), V = Symbol.iterator;
  function W(d) {
    return d === null || typeof d != "object" ? null : (d = V && d[V] || d["@@iterator"], typeof d == "function" ? d : null);
  }
  var K = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, P = Object.assign, U = {};
  function Z(d, y, j) {
    this.props = d, this.context = y, this.refs = U, this.updater = j || K;
  }
  Z.prototype.isReactComponent = {}, Z.prototype.setState = function(d, y) {
    if (typeof d != "object" && typeof d != "function" && d != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, d, y, "setState");
  }, Z.prototype.forceUpdate = function(d) {
    this.updater.enqueueForceUpdate(this, d, "forceUpdate");
  };
  function O() {
  }
  O.prototype = Z.prototype;
  function re(d, y, j) {
    this.props = d, this.context = y, this.refs = U, this.updater = j || K;
  }
  var fe = re.prototype = new O();
  fe.constructor = re, P(fe, Z.prototype), fe.isPureReactComponent = !0;
  var F = Array.isArray, Q = Object.prototype.hasOwnProperty, le = { current: null }, G = { key: !0, ref: !0, __self: !0, __source: !0 };
  function D(d, y, j) {
    var S, A = {}, X = null, se = null;
    if (y != null) for (S in y.ref !== void 0 && (se = y.ref), y.key !== void 0 && (X = "" + y.key), y) Q.call(y, S) && !G.hasOwnProperty(S) && (A[S] = y[S]);
    var oe = arguments.length - 2;
    if (oe === 1) A.children = j;
    else if (1 < oe) {
      for (var b = Array(oe), ie = 0; ie < oe; ie++) b[ie] = arguments[ie + 2];
      A.children = b;
    }
    if (d && d.defaultProps) for (S in oe = d.defaultProps, oe) A[S] === void 0 && (A[S] = oe[S]);
    return { $$typeof: a, type: d, key: X, ref: se, props: A, _owner: le.current };
  }
  function je(d, y) {
    return { $$typeof: a, type: d.type, key: y, ref: d.ref, props: d.props, _owner: d._owner };
  }
  function me(d) {
    return typeof d == "object" && d !== null && d.$$typeof === a;
  }
  function pe(d) {
    var y = { "=": "=0", ":": "=2" };
    return "$" + d.replace(/[=:]/g, function(j) {
      return y[j];
    });
  }
  var he = /\/+/g;
  function ye(d, y) {
    return typeof d == "object" && d !== null && d.key != null ? pe("" + d.key) : y.toString(36);
  }
  function ke(d, y, j, S, A) {
    var X = typeof d;
    (X === "undefined" || X === "boolean") && (d = null);
    var se = !1;
    if (d === null) se = !0;
    else switch (X) {
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
    if (se) return se = d, A = A(se), d = S === "" ? "." + ye(se, 0) : S, F(A) ? (j = "", d != null && (j = d.replace(he, "$&/") + "/"), ke(A, y, j, "", function(ie) {
      return ie;
    })) : A != null && (me(A) && (A = je(A, j + (!A.key || se && se.key === A.key ? "" : ("" + A.key).replace(he, "$&/") + "/") + d)), y.push(A)), 1;
    if (se = 0, S = S === "" ? "." : S + ":", F(d)) for (var oe = 0; oe < d.length; oe++) {
      X = d[oe];
      var b = S + ye(X, oe);
      se += ke(X, y, j, b, A);
    }
    else if (b = W(d), typeof b == "function") for (d = b.call(d), oe = 0; !(X = d.next()).done; ) X = X.value, b = S + ye(X, oe++), se += ke(X, y, j, b, A);
    else if (X === "object") throw y = String(d), Error("Objects are not valid as a React child (found: " + (y === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : y) + "). If you meant to render a collection of children, use an array instead.");
    return se;
  }
  function ze(d, y, j) {
    if (d == null) return d;
    var S = [], A = 0;
    return ke(d, S, "", "", function(X) {
      return y.call(j, X, A++);
    }), S;
  }
  function Ce(d) {
    if (d._status === -1) {
      var y = d._result;
      y = y(), y.then(function(j) {
        (d._status === 0 || d._status === -1) && (d._status = 1, d._result = j);
      }, function(j) {
        (d._status === 0 || d._status === -1) && (d._status = 2, d._result = j);
      }), d._status === -1 && (d._status = 0, d._result = y);
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var ve = { current: null }, B = { transition: null }, te = { ReactCurrentDispatcher: ve, ReactCurrentBatchConfig: B, ReactCurrentOwner: le };
  function H() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return we.Children = { map: ze, forEach: function(d, y, j) {
    ze(d, function() {
      y.apply(this, arguments);
    }, j);
  }, count: function(d) {
    var y = 0;
    return ze(d, function() {
      y++;
    }), y;
  }, toArray: function(d) {
    return ze(d, function(y) {
      return y;
    }) || [];
  }, only: function(d) {
    if (!me(d)) throw Error("React.Children.only expected to receive a single React element child.");
    return d;
  } }, we.Component = Z, we.Fragment = u, we.Profiler = v, we.PureComponent = re, we.StrictMode = p, we.Suspense = E, we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = te, we.act = H, we.cloneElement = function(d, y, j) {
    if (d == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + d + ".");
    var S = P({}, d.props), A = d.key, X = d.ref, se = d._owner;
    if (y != null) {
      if (y.ref !== void 0 && (X = y.ref, se = le.current), y.key !== void 0 && (A = "" + y.key), d.type && d.type.defaultProps) var oe = d.type.defaultProps;
      for (b in y) Q.call(y, b) && !G.hasOwnProperty(b) && (S[b] = y[b] === void 0 && oe !== void 0 ? oe[b] : y[b]);
    }
    var b = arguments.length - 2;
    if (b === 1) S.children = j;
    else if (1 < b) {
      oe = Array(b);
      for (var ie = 0; ie < b; ie++) oe[ie] = arguments[ie + 2];
      S.children = oe;
    }
    return { $$typeof: a, type: d.type, key: A, ref: X, props: S, _owner: se };
  }, we.createContext = function(d) {
    return d = { $$typeof: C, _currentValue: d, _currentValue2: d, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, d.Provider = { $$typeof: x, _context: d }, d.Consumer = d;
  }, we.createElement = D, we.createFactory = function(d) {
    var y = D.bind(null, d);
    return y.type = d, y;
  }, we.createRef = function() {
    return { current: null };
  }, we.forwardRef = function(d) {
    return { $$typeof: N, render: d };
  }, we.isValidElement = me, we.lazy = function(d) {
    return { $$typeof: R, _payload: { _status: -1, _result: d }, _init: Ce };
  }, we.memo = function(d, y) {
    return { $$typeof: I, type: d, compare: y === void 0 ? null : y };
  }, we.startTransition = function(d) {
    var y = B.transition;
    B.transition = {};
    try {
      d();
    } finally {
      B.transition = y;
    }
  }, we.unstable_act = H, we.useCallback = function(d, y) {
    return ve.current.useCallback(d, y);
  }, we.useContext = function(d) {
    return ve.current.useContext(d);
  }, we.useDebugValue = function() {
  }, we.useDeferredValue = function(d) {
    return ve.current.useDeferredValue(d);
  }, we.useEffect = function(d, y) {
    return ve.current.useEffect(d, y);
  }, we.useId = function() {
    return ve.current.useId();
  }, we.useImperativeHandle = function(d, y, j) {
    return ve.current.useImperativeHandle(d, y, j);
  }, we.useInsertionEffect = function(d, y) {
    return ve.current.useInsertionEffect(d, y);
  }, we.useLayoutEffect = function(d, y) {
    return ve.current.useLayoutEffect(d, y);
  }, we.useMemo = function(d, y) {
    return ve.current.useMemo(d, y);
  }, we.useReducer = function(d, y, j) {
    return ve.current.useReducer(d, y, j);
  }, we.useRef = function(d) {
    return ve.current.useRef(d);
  }, we.useState = function(d) {
    return ve.current.useState(d);
  }, we.useSyncExternalStore = function(d, y, j) {
    return ve.current.useSyncExternalStore(d, y, j);
  }, we.useTransition = function() {
    return ve.current.useTransition();
  }, we.version = "18.3.1", we;
}
var go;
function Oi() {
  return go || (go = 1, Ai.exports = oc()), Ai.exports;
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
var xo;
function uc() {
  if (xo) return wr;
  xo = 1;
  var a = Oi(), c = Symbol.for("react.element"), u = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, v = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(N, E, I) {
    var R, V = {}, W = null, K = null;
    I !== void 0 && (W = "" + I), E.key !== void 0 && (W = "" + E.key), E.ref !== void 0 && (K = E.ref);
    for (R in E) p.call(E, R) && !x.hasOwnProperty(R) && (V[R] = E[R]);
    if (N && N.defaultProps) for (R in E = N.defaultProps, E) V[R] === void 0 && (V[R] = E[R]);
    return { $$typeof: c, type: N, key: W, ref: K, props: V, _owner: v.current };
  }
  return wr.Fragment = u, wr.jsx = C, wr.jsxs = C, wr;
}
var wo;
function cc() {
  return wo || (wo = 1, Ei.exports = uc()), Ei.exports;
}
var l = cc(), Ol = {}, Mi = { exports: {} }, k0 = {}, Li = { exports: {} }, zi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ko;
function dc() {
  return ko || (ko = 1, (function(a) {
    function c(B, te) {
      var H = B.length;
      B.push(te);
      e: for (; 0 < H; ) {
        var d = H - 1 >>> 1, y = B[d];
        if (0 < v(y, te)) B[d] = te, B[H] = y, H = d;
        else break e;
      }
    }
    function u(B) {
      return B.length === 0 ? null : B[0];
    }
    function p(B) {
      if (B.length === 0) return null;
      var te = B[0], H = B.pop();
      if (H !== te) {
        B[0] = H;
        e: for (var d = 0, y = B.length, j = y >>> 1; d < j; ) {
          var S = 2 * (d + 1) - 1, A = B[S], X = S + 1, se = B[X];
          if (0 > v(A, H)) X < y && 0 > v(se, A) ? (B[d] = se, B[X] = H, d = X) : (B[d] = A, B[S] = H, d = S);
          else if (X < y && 0 > v(se, H)) B[d] = se, B[X] = H, d = X;
          else break e;
        }
      }
      return te;
    }
    function v(B, te) {
      var H = B.sortIndex - te.sortIndex;
      return H !== 0 ? H : B.id - te.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var x = performance;
      a.unstable_now = function() {
        return x.now();
      };
    } else {
      var C = Date, N = C.now();
      a.unstable_now = function() {
        return C.now() - N;
      };
    }
    var E = [], I = [], R = 1, V = null, W = 3, K = !1, P = !1, U = !1, Z = typeof setTimeout == "function" ? setTimeout : null, O = typeof clearTimeout == "function" ? clearTimeout : null, re = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function fe(B) {
      for (var te = u(I); te !== null; ) {
        if (te.callback === null) p(I);
        else if (te.startTime <= B) p(I), te.sortIndex = te.expirationTime, c(E, te);
        else break;
        te = u(I);
      }
    }
    function F(B) {
      if (U = !1, fe(B), !P) if (u(E) !== null) P = !0, Ce(Q);
      else {
        var te = u(I);
        te !== null && ve(F, te.startTime - B);
      }
    }
    function Q(B, te) {
      P = !1, U && (U = !1, O(D), D = -1), K = !0;
      var H = W;
      try {
        for (fe(te), V = u(E); V !== null && (!(V.expirationTime > te) || B && !pe()); ) {
          var d = V.callback;
          if (typeof d == "function") {
            V.callback = null, W = V.priorityLevel;
            var y = d(V.expirationTime <= te);
            te = a.unstable_now(), typeof y == "function" ? V.callback = y : V === u(E) && p(E), fe(te);
          } else p(E);
          V = u(E);
        }
        if (V !== null) var j = !0;
        else {
          var S = u(I);
          S !== null && ve(F, S.startTime - te), j = !1;
        }
        return j;
      } finally {
        V = null, W = H, K = !1;
      }
    }
    var le = !1, G = null, D = -1, je = 5, me = -1;
    function pe() {
      return !(a.unstable_now() - me < je);
    }
    function he() {
      if (G !== null) {
        var B = a.unstable_now();
        me = B;
        var te = !0;
        try {
          te = G(!0, B);
        } finally {
          te ? ye() : (le = !1, G = null);
        }
      } else le = !1;
    }
    var ye;
    if (typeof re == "function") ye = function() {
      re(he);
    };
    else if (typeof MessageChannel < "u") {
      var ke = new MessageChannel(), ze = ke.port2;
      ke.port1.onmessage = he, ye = function() {
        ze.postMessage(null);
      };
    } else ye = function() {
      Z(he, 0);
    };
    function Ce(B) {
      G = B, le || (le = !0, ye());
    }
    function ve(B, te) {
      D = Z(function() {
        B(a.unstable_now());
      }, te);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, a.unstable_continueExecution = function() {
      P || K || (P = !0, Ce(Q));
    }, a.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : je = 0 < B ? Math.floor(1e3 / B) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return W;
    }, a.unstable_getFirstCallbackNode = function() {
      return u(E);
    }, a.unstable_next = function(B) {
      switch (W) {
        case 1:
        case 2:
        case 3:
          var te = 3;
          break;
        default:
          te = W;
      }
      var H = W;
      W = te;
      try {
        return B();
      } finally {
        W = H;
      }
    }, a.unstable_pauseExecution = function() {
    }, a.unstable_requestPaint = function() {
    }, a.unstable_runWithPriority = function(B, te) {
      switch (B) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          B = 3;
      }
      var H = W;
      W = B;
      try {
        return te();
      } finally {
        W = H;
      }
    }, a.unstable_scheduleCallback = function(B, te, H) {
      var d = a.unstable_now();
      switch (typeof H == "object" && H !== null ? (H = H.delay, H = typeof H == "number" && 0 < H ? d + H : d) : H = d, B) {
        case 1:
          var y = -1;
          break;
        case 2:
          y = 250;
          break;
        case 5:
          y = 1073741823;
          break;
        case 4:
          y = 1e4;
          break;
        default:
          y = 5e3;
      }
      return y = H + y, B = { id: R++, callback: te, priorityLevel: B, startTime: H, expirationTime: y, sortIndex: -1 }, H > d ? (B.sortIndex = H, c(I, B), u(E) === null && B === u(I) && (U ? (O(D), D = -1) : U = !0, ve(F, H - d))) : (B.sortIndex = y, c(E, B), P || K || (P = !0, Ce(Q))), B;
    }, a.unstable_shouldYield = pe, a.unstable_wrapCallback = function(B) {
      var te = W;
      return function() {
        var H = W;
        W = te;
        try {
          return B.apply(this, arguments);
        } finally {
          W = H;
        }
      };
    };
  })(zi)), zi;
}
var jo;
function fc() {
  return jo || (jo = 1, Li.exports = dc()), Li.exports;
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
var No;
function hc() {
  if (No) return k0;
  No = 1;
  var a = Oi(), c = fc();
  function u(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var p = /* @__PURE__ */ new Set(), v = {};
  function x(e, t) {
    C(e, t), C(e + "Capture", t);
  }
  function C(e, t) {
    for (v[e] = t, e = 0; e < t.length; e++) p.add(t[e]);
  }
  var N = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), E = Object.prototype.hasOwnProperty, I = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, R = {}, V = {};
  function W(e) {
    return E.call(V, e) ? !0 : E.call(R, e) ? !1 : I.test(e) ? V[e] = !0 : (R[e] = !0, !1);
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
  function P(e, t, n, r) {
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
  function U(e, t, n, r, s, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
  }
  var Z = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Z[e] = new U(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Z[t] = new U(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Z[e] = new U(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Z[e] = new U(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Z[e] = new U(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Z[e] = new U(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    Z[e] = new U(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    Z[e] = new U(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    Z[e] = new U(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var O = /[\-:]([a-z])/g;
  function re(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      O,
      re
    );
    Z[t] = new U(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(O, re);
    Z[t] = new U(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(O, re);
    Z[t] = new U(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    Z[e] = new U(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), Z.xlinkHref = new U("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    Z[e] = new U(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function fe(e, t, n, r) {
    var s = Z.hasOwnProperty(t) ? Z[t] : null;
    (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (P(t, n, s, r) && (n = null), r || s === null ? W(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName, r = s.attributeNamespace, n === null ? e.removeAttribute(t) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var F = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Q = Symbol.for("react.element"), le = Symbol.for("react.portal"), G = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), je = Symbol.for("react.profiler"), me = Symbol.for("react.provider"), pe = Symbol.for("react.context"), he = Symbol.for("react.forward_ref"), ye = Symbol.for("react.suspense"), ke = Symbol.for("react.suspense_list"), ze = Symbol.for("react.memo"), Ce = Symbol.for("react.lazy"), ve = Symbol.for("react.offscreen"), B = Symbol.iterator;
  function te(e) {
    return e === null || typeof e != "object" ? null : (e = B && e[B] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var H = Object.assign, d;
  function y(e) {
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
  function S(e, t) {
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
      j = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? y(e) : "";
  }
  function A(e) {
    switch (e.tag) {
      case 5:
        return y(e.type);
      case 16:
        return y("Lazy");
      case 13:
        return y("Suspense");
      case 19:
        return y("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = S(e.type, !1), e;
      case 11:
        return e = S(e.type.render, !1), e;
      case 1:
        return e = S(e.type, !0), e;
      default:
        return "";
    }
  }
  function X(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case G:
        return "Fragment";
      case le:
        return "Portal";
      case je:
        return "Profiler";
      case D:
        return "StrictMode";
      case ye:
        return "Suspense";
      case ke:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case pe:
        return (e.displayName || "Context") + ".Consumer";
      case me:
        return (e._context.displayName || "Context") + ".Provider";
      case he:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ze:
        return t = e.displayName || null, t !== null ? t : X(e.type) || "Memo";
      case Ce:
        t = e._payload, e = e._init;
        try {
          return X(e(t));
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
        return X(t);
      case 8:
        return t === D ? "StrictMode" : "Mode";
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
  function Pe(e) {
    e._valueTracker || (e._valueTracker = ie(e));
  }
  function Ae(e) {
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
  function qe(e, t) {
    var n = t.checked;
    return H({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Ge(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = oe(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function et(e, t) {
    t = t.checked, t != null && fe(e, "checked", t, !1);
  }
  function Ne(e, t) {
    et(e, t);
    var n = oe(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Le(e, t.type, n) : t.hasOwnProperty("defaultValue") && Le(e, t.type, oe(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Xe(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Le(e, t, n) {
    (t !== "number" || Te(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Ie = Array.isArray;
  function j0(e, t, n, r) {
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
  function tt(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(u(91));
    return H({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function N0(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(u(92));
        if (Ie(n)) {
          if (1 < n.length) throw Error(u(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: oe(n) };
  }
  function nt(e, t) {
    var n = oe(t.value), r = oe(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Pt(e) {
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
  function X0(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Tt(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var ht, tn = (function(e) {
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
  function S0(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var It = {
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
  }, Ql = ["Webkit", "ms", "Moz", "O"];
  Object.keys(It).forEach(function(e) {
    Ql.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), It[t] = It[e];
    });
  });
  function Tn(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || It.hasOwnProperty(e) && It[e] ? ("" + t).trim() : t + "px";
  }
  function rt(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, s = Tn(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : e[n] = s;
    }
  }
  var Ot = H({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function lt(e, t) {
    if (t) {
      if (Ot[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(u(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(u(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(u(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(u(62));
    }
  }
  function Dt(e, t) {
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
  var Z0 = null;
  function O0(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Bt = null, p0 = null, D0 = null;
  function nn(e) {
    if (e = sr(e)) {
      if (typeof Bt != "function") throw Error(u(280));
      var t = e.stateNode;
      t && (t = br(t), Bt(e.stateNode, e.type, t));
    }
  }
  function In(e) {
    p0 ? D0 ? D0.push(e) : D0 = [e] : p0 = e;
  }
  function Mr() {
    if (p0) {
      var e = p0, t = D0;
      if (D0 = p0 = null, nn(e), t) for (e = 0; e < t.length; e++) nn(t[e]);
    }
  }
  function Lr(e, t) {
    return e(t);
  }
  function q() {
  }
  var ge = !1;
  function Se(e, t, n) {
    if (ge) return e(t, n);
    ge = !0;
    try {
      return Lr(e, t, n);
    } finally {
      ge = !1, (p0 !== null || D0 !== null) && (q(), Mr());
    }
  }
  function xe(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = br(n);
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
  if (N) try {
    var r0 = {};
    Object.defineProperty(r0, "passive", { get: function() {
      Re = !0;
    } }), window.addEventListener("test", r0, r0), window.removeEventListener("test", r0, r0);
  } catch {
    Re = !1;
  }
  function L0(e, t, n, r, s, i, o, f, h) {
    var k = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, k);
    } catch (L) {
      this.onError(L);
    }
  }
  var u0 = !1, c0 = null, l0 = !1, On = null, Vl = { onError: function(e) {
    u0 = !0, c0 = e;
  } };
  function Dn(e, t, n, r, s, i, o, f, h) {
    u0 = !1, c0 = null, L0.apply(Vl, arguments);
  }
  function Kl(e, t, n, r, s, i, o, f, h) {
    if (Dn.apply(this, arguments), u0) {
      if (u0) {
        var k = c0;
        u0 = !1, c0 = null;
      } else throw Error(u(198));
      l0 || (l0 = !0, On = k);
    }
  }
  function B0(e) {
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
  function rn(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function ln(e) {
    if (B0(e) !== e) throw Error(u(188));
  }
  function zr(e) {
    var t = e.alternate;
    if (!t) {
      if (t = B0(e), t === null) throw Error(u(188));
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
          if (i === n) return ln(s), e;
          if (i === r) return ln(s), t;
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
  function Bn(e) {
    return e = zr(e), e !== null ? Hn(e) : null;
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
  var Fn = c.unstable_scheduleCallback, He = c.unstable_cancelCallback, m0 = c.unstable_shouldYield, sn = c.unstable_requestPaint, Ve = c.unstable_now, k1 = c.unstable_getCurrentPriorityLevel, Gl = c.unstable_ImmediatePriority, Ki = c.unstable_UserBlockingPriority, Rr = c.unstable_NormalPriority, j1 = c.unstable_LowPriority, Gi = c.unstable_IdlePriority, _r = null, q0 = null;
  function N1(e) {
    if (q0 && typeof q0.onCommitFiberRoot == "function") try {
      q0.onCommitFiberRoot(_r, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var H0 = Math.clz32 ? Math.clz32 : E1, S1 = Math.log, C1 = Math.LN2;
  function E1(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (S1(e) / C1 | 0) | 0;
  }
  var Pr = 64, Tr = 4194304;
  function Wn(e) {
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
  function Ir(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, s = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
    if (o !== 0) {
      var f = o & ~s;
      f !== 0 ? r = Wn(f) : (i &= o, i !== 0 && (r = Wn(i)));
    } else o = n & ~s, o !== 0 ? r = Wn(o) : i !== 0 && (r = Wn(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & s) === 0 && (s = r & -r, i = t & -t, s >= i || s === 16 && (i & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - H0(t), s = 1 << n, r |= e[n], t &= ~s;
    return r;
  }
  function A1(e, t) {
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
  function M1(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
      var o = 31 - H0(i), f = 1 << o, h = s[o];
      h === -1 ? ((f & n) === 0 || (f & r) !== 0) && (s[o] = A1(f, t)) : h <= t && (e.expiredLanes |= f), i &= ~f;
    }
  }
  function Xl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Xi() {
    var e = Pr;
    return Pr <<= 1, (Pr & 4194240) === 0 && (Pr = 64), e;
  }
  function Zl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Un(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - H0(t), e[t] = n;
  }
  function L1(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var s = 31 - H0(n), i = 1 << s;
      t[s] = 0, r[s] = -1, e[s] = -1, n &= ~i;
    }
  }
  function ql(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - H0(n), s = 1 << r;
      s & t | e[r] & t && (e[r] |= t), n &= ~s;
    }
  }
  var _e = 0;
  function Zi(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var qi, Jl, Ji, bi, Yi, bl = !1, Or = [], pt = null, mt = null, vt = null, Qn = /* @__PURE__ */ new Map(), Vn = /* @__PURE__ */ new Map(), yt = [], z1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function $i(e, t) {
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
        Qn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Vn.delete(t.pointerId);
    }
  }
  function Kn(e, t, n, r, s, i) {
    return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [s] }, t !== null && (t = sr(t), t !== null && Jl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
  }
  function R1(e, t, n, r, s) {
    switch (t) {
      case "focusin":
        return pt = Kn(pt, e, t, n, r, s), !0;
      case "dragenter":
        return mt = Kn(mt, e, t, n, r, s), !0;
      case "mouseover":
        return vt = Kn(vt, e, t, n, r, s), !0;
      case "pointerover":
        var i = s.pointerId;
        return Qn.set(i, Kn(Qn.get(i) || null, e, t, n, r, s)), !0;
      case "gotpointercapture":
        return i = s.pointerId, Vn.set(i, Kn(Vn.get(i) || null, e, t, n, r, s)), !0;
    }
    return !1;
  }
  function e2(e) {
    var t = Ht(e.target);
    if (t !== null) {
      var n = B0(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = rn(n), t !== null) {
            e.blockedOn = t, Yi(e.priority, function() {
              Ji(n);
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
  function Dr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = $l(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Z0 = r, n.target.dispatchEvent(r), Z0 = null;
      } else return t = sr(n), t !== null && Jl(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function t2(e, t, n) {
    Dr(e) && n.delete(t);
  }
  function _1() {
    bl = !1, pt !== null && Dr(pt) && (pt = null), mt !== null && Dr(mt) && (mt = null), vt !== null && Dr(vt) && (vt = null), Qn.forEach(t2), Vn.forEach(t2);
  }
  function Gn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, bl || (bl = !0, c.unstable_scheduleCallback(c.unstable_NormalPriority, _1)));
  }
  function Xn(e) {
    function t(s) {
      return Gn(s, e);
    }
    if (0 < Or.length) {
      Gn(Or[0], e);
      for (var n = 1; n < Or.length; n++) {
        var r = Or[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (pt !== null && Gn(pt, e), mt !== null && Gn(mt, e), vt !== null && Gn(vt, e), Qn.forEach(t), Vn.forEach(t), n = 0; n < yt.length; n++) r = yt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < yt.length && (n = yt[0], n.blockedOn === null); ) e2(n), n.blockedOn === null && yt.shift();
  }
  var an = F.ReactCurrentBatchConfig, Br = !0;
  function P1(e, t, n, r) {
    var s = _e, i = an.transition;
    an.transition = null;
    try {
      _e = 1, Yl(e, t, n, r);
    } finally {
      _e = s, an.transition = i;
    }
  }
  function T1(e, t, n, r) {
    var s = _e, i = an.transition;
    an.transition = null;
    try {
      _e = 4, Yl(e, t, n, r);
    } finally {
      _e = s, an.transition = i;
    }
  }
  function Yl(e, t, n, r) {
    if (Br) {
      var s = $l(e, t, n, r);
      if (s === null) vs(e, t, r, Hr, n), $i(e, r);
      else if (R1(s, e, t, n, r)) r.stopPropagation();
      else if ($i(e, r), t & 4 && -1 < z1.indexOf(e)) {
        for (; s !== null; ) {
          var i = sr(s);
          if (i !== null && qi(i), i = $l(e, t, n, r), i === null && vs(e, t, r, Hr, n), i === s) break;
          s = i;
        }
        s !== null && r.stopPropagation();
      } else vs(e, t, r, null, n);
    }
  }
  var Hr = null;
  function $l(e, t, n, r) {
    if (Hr = null, e = O0(r), e = Ht(e), e !== null) if (t = B0(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = rn(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Hr = e, null;
  }
  function n2(e) {
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
        switch (k1()) {
          case Gl:
            return 1;
          case Ki:
            return 4;
          case Rr:
          case j1:
            return 16;
          case Gi:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var gt = null, es = null, Fr = null;
  function r2() {
    if (Fr) return Fr;
    var e, t = es, n = t.length, r, s = "value" in gt ? gt.value : gt.textContent, i = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++) ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === s[i - r]; r++) ;
    return Fr = s.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Wr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ur() {
    return !0;
  }
  function l2() {
    return !1;
  }
  function C0(e) {
    function t(n, r, s, i, o) {
      this._reactName = n, this._targetInst = s, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
      for (var f in e) e.hasOwnProperty(f) && (n = e[f], this[f] = n ? n(i) : i[f]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ur : l2, this.isPropagationStopped = l2, this;
    }
    return H(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ur);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ur);
    }, persist: function() {
    }, isPersistent: Ur }), t;
  }
  var on = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ts = C0(on), Zn = H({}, on, { view: 0, detail: 0 }), I1 = C0(Zn), ns, rs, qn, Qr = H({}, Zn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ss, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== qn && (qn && e.type === "mousemove" ? (ns = e.screenX - qn.screenX, rs = e.screenY - qn.screenY) : rs = ns = 0, qn = e), ns);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : rs;
  } }), s2 = C0(Qr), O1 = H({}, Qr, { dataTransfer: 0 }), D1 = C0(O1), B1 = H({}, Zn, { relatedTarget: 0 }), ls = C0(B1), H1 = H({}, on, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), F1 = C0(H1), W1 = H({}, on, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), U1 = C0(W1), Q1 = H({}, on, { data: 0 }), i2 = C0(Q1), V1 = {
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
  }, K1 = {
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
  }, G1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function X1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = G1[e]) ? !!t[e] : !1;
  }
  function ss() {
    return X1;
  }
  var Z1 = H({}, Zn, { key: function(e) {
    if (e.key) {
      var t = V1[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Wr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? K1[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ss, charCode: function(e) {
    return e.type === "keypress" ? Wr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Wr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), q1 = C0(Z1), J1 = H({}, Qr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), a2 = C0(J1), b1 = H({}, Zn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ss }), Y1 = C0(b1), $1 = H({}, on, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), eu = C0($1), tu = H({}, Qr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), nu = C0(tu), ru = [9, 13, 27, 32], is = N && "CompositionEvent" in window, Jn = null;
  N && "documentMode" in document && (Jn = document.documentMode);
  var lu = N && "TextEvent" in window && !Jn, o2 = N && (!is || Jn && 8 < Jn && 11 >= Jn), u2 = " ", c2 = !1;
  function d2(e, t) {
    switch (e) {
      case "keyup":
        return ru.indexOf(t.keyCode) !== -1;
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
  function f2(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var un = !1;
  function su(e, t) {
    switch (e) {
      case "compositionend":
        return f2(t);
      case "keypress":
        return t.which !== 32 ? null : (c2 = !0, u2);
      case "textInput":
        return e = t.data, e === u2 && c2 ? null : e;
      default:
        return null;
    }
  }
  function iu(e, t) {
    if (un) return e === "compositionend" || !is && d2(e, t) ? (e = r2(), Fr = es = gt = null, un = !1, e) : null;
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
        return o2 && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var au = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function h2(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!au[e.type] : t === "textarea";
  }
  function p2(e, t, n, r) {
    In(r), t = Zr(t, "onChange"), 0 < t.length && (n = new ts("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var bn = null, Yn = null;
  function ou(e) {
    _2(e, 0);
  }
  function Vr(e) {
    var t = pn(e);
    if (Ae(t)) return e;
  }
  function uu(e, t) {
    if (e === "change") return t;
  }
  var m2 = !1;
  if (N) {
    var as;
    if (N) {
      var os = "oninput" in document;
      if (!os) {
        var v2 = document.createElement("div");
        v2.setAttribute("oninput", "return;"), os = typeof v2.oninput == "function";
      }
      as = os;
    } else as = !1;
    m2 = as && (!document.documentMode || 9 < document.documentMode);
  }
  function y2() {
    bn && (bn.detachEvent("onpropertychange", g2), Yn = bn = null);
  }
  function g2(e) {
    if (e.propertyName === "value" && Vr(Yn)) {
      var t = [];
      p2(t, Yn, e, O0(e)), Se(ou, t);
    }
  }
  function cu(e, t, n) {
    e === "focusin" ? (y2(), bn = t, Yn = n, bn.attachEvent("onpropertychange", g2)) : e === "focusout" && y2();
  }
  function du(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Vr(Yn);
  }
  function fu(e, t) {
    if (e === "click") return Vr(t);
  }
  function hu(e, t) {
    if (e === "input" || e === "change") return Vr(t);
  }
  function pu(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var F0 = typeof Object.is == "function" ? Object.is : pu;
  function $n(e, t) {
    if (F0(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var s = n[r];
      if (!E.call(t, s) || !F0(e[s], t[s])) return !1;
    }
    return !0;
  }
  function x2(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function w2(e, t) {
    var n = x2(e);
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
      n = x2(n);
    }
  }
  function k2(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? k2(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function j2() {
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
  function us(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function mu(e) {
    var t = j2(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && k2(n.ownerDocument.documentElement, n)) {
      if (r !== null && us(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var s = n.textContent.length, i = Math.min(r.start, s);
          r = r.end === void 0 ? i : Math.min(r.end, s), !e.extend && i > r && (s = r, r = i, i = s), s = w2(n, i);
          var o = w2(
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
  var vu = N && "documentMode" in document && 11 >= document.documentMode, cn = null, cs = null, er = null, ds = !1;
  function N2(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ds || cn == null || cn !== Te(r) || (r = cn, "selectionStart" in r && us(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), er && $n(er, r) || (er = r, r = Zr(cs, "onSelect"), 0 < r.length && (t = new ts("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = cn)));
  }
  function Kr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var dn = { animationend: Kr("Animation", "AnimationEnd"), animationiteration: Kr("Animation", "AnimationIteration"), animationstart: Kr("Animation", "AnimationStart"), transitionend: Kr("Transition", "TransitionEnd") }, fs = {}, S2 = {};
  N && (S2 = document.createElement("div").style, "AnimationEvent" in window || (delete dn.animationend.animation, delete dn.animationiteration.animation, delete dn.animationstart.animation), "TransitionEvent" in window || delete dn.transitionend.transition);
  function Gr(e) {
    if (fs[e]) return fs[e];
    if (!dn[e]) return e;
    var t = dn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in S2) return fs[e] = t[n];
    return e;
  }
  var C2 = Gr("animationend"), E2 = Gr("animationiteration"), A2 = Gr("animationstart"), M2 = Gr("transitionend"), L2 = /* @__PURE__ */ new Map(), z2 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function xt(e, t) {
    L2.set(e, t), x(t, [e]);
  }
  for (var hs = 0; hs < z2.length; hs++) {
    var ps = z2[hs], yu = ps.toLowerCase(), gu = ps[0].toUpperCase() + ps.slice(1);
    xt(yu, "on" + gu);
  }
  xt(C2, "onAnimationEnd"), xt(E2, "onAnimationIteration"), xt(A2, "onAnimationStart"), xt("dblclick", "onDoubleClick"), xt("focusin", "onFocus"), xt("focusout", "onBlur"), xt(M2, "onTransitionEnd"), C("onMouseEnter", ["mouseout", "mouseover"]), C("onMouseLeave", ["mouseout", "mouseover"]), C("onPointerEnter", ["pointerout", "pointerover"]), C("onPointerLeave", ["pointerout", "pointerover"]), x("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), x("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), x("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), x("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), x("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), x("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var tr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), xu = new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));
  function R2(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Kl(r, t, void 0, e), e.currentTarget = null;
  }
  function _2(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], s = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t) for (var o = r.length - 1; 0 <= o; o--) {
          var f = r[o], h = f.instance, k = f.currentTarget;
          if (f = f.listener, h !== i && s.isPropagationStopped()) break e;
          R2(s, f, k), i = h;
        }
        else for (o = 0; o < r.length; o++) {
          if (f = r[o], h = f.instance, k = f.currentTarget, f = f.listener, h !== i && s.isPropagationStopped()) break e;
          R2(s, f, k), i = h;
        }
      }
    }
    if (l0) throw e = On, l0 = !1, On = null, e;
  }
  function De(e, t) {
    var n = t[js];
    n === void 0 && (n = t[js] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (P2(t, e, 2, !1), n.add(r));
  }
  function ms(e, t, n) {
    var r = 0;
    t && (r |= 4), P2(n, e, r, t);
  }
  var Xr = "_reactListening" + Math.random().toString(36).slice(2);
  function nr(e) {
    if (!e[Xr]) {
      e[Xr] = !0, p.forEach(function(n) {
        n !== "selectionchange" && (xu.has(n) || ms(n, !1, e), ms(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Xr] || (t[Xr] = !0, ms("selectionchange", !1, t));
    }
  }
  function P2(e, t, n, r) {
    switch (n2(t)) {
      case 1:
        var s = P1;
        break;
      case 4:
        s = T1;
        break;
      default:
        s = Yl;
    }
    n = s.bind(null, t, n, e), s = void 0, !Re || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), r ? s !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: s }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, { passive: s }) : e.addEventListener(t, n, !1);
  }
  function vs(e, t, n, r, s) {
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
          if (o = Ht(f), o === null) return;
          if (h = o.tag, h === 5 || h === 6) {
            r = i = o;
            continue e;
          }
          f = f.parentNode;
        }
      }
      r = r.return;
    }
    Se(function() {
      var k = i, L = O0(n), _ = [];
      e: {
        var M = L2.get(e);
        if (M !== void 0) {
          var J = ts, $ = e;
          switch (e) {
            case "keypress":
              if (Wr(n) === 0) break e;
            case "keydown":
            case "keyup":
              J = q1;
              break;
            case "focusin":
              $ = "focus", J = ls;
              break;
            case "focusout":
              $ = "blur", J = ls;
              break;
            case "beforeblur":
            case "afterblur":
              J = ls;
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
              J = s2;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              J = D1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              J = Y1;
              break;
            case C2:
            case E2:
            case A2:
              J = F1;
              break;
            case M2:
              J = eu;
              break;
            case "scroll":
              J = I1;
              break;
            case "wheel":
              J = nu;
              break;
            case "copy":
            case "cut":
            case "paste":
              J = U1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              J = a2;
          }
          var ee = (t & 4) !== 0, Ke = !ee && e === "scroll", g = ee ? M !== null ? M + "Capture" : null : M;
          ee = [];
          for (var m = k, w; m !== null; ) {
            w = m;
            var T = w.stateNode;
            if (w.tag === 5 && T !== null && (w = T, g !== null && (T = xe(m, g), T != null && ee.push(rr(m, T, w)))), Ke) break;
            m = m.return;
          }
          0 < ee.length && (M = new J(M, $, null, n, L), _.push({ event: M, listeners: ee }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (M = e === "mouseover" || e === "pointerover", J = e === "mouseout" || e === "pointerout", M && n !== Z0 && ($ = n.relatedTarget || n.fromElement) && (Ht($) || $[st])) break e;
          if ((J || M) && (M = L.window === L ? L : (M = L.ownerDocument) ? M.defaultView || M.parentWindow : window, J ? ($ = n.relatedTarget || n.toElement, J = k, $ = $ ? Ht($) : null, $ !== null && (Ke = B0($), $ !== Ke || $.tag !== 5 && $.tag !== 6) && ($ = null)) : (J = null, $ = k), J !== $)) {
            if (ee = s2, T = "onMouseLeave", g = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (ee = a2, T = "onPointerLeave", g = "onPointerEnter", m = "pointer"), Ke = J == null ? M : pn(J), w = $ == null ? M : pn($), M = new ee(T, m + "leave", J, n, L), M.target = Ke, M.relatedTarget = w, T = null, Ht(L) === k && (ee = new ee(g, m + "enter", $, n, L), ee.target = w, ee.relatedTarget = Ke, T = ee), Ke = T, J && $) t: {
              for (ee = J, g = $, m = 0, w = ee; w; w = fn(w)) m++;
              for (w = 0, T = g; T; T = fn(T)) w++;
              for (; 0 < m - w; ) ee = fn(ee), m--;
              for (; 0 < w - m; ) g = fn(g), w--;
              for (; m--; ) {
                if (ee === g || g !== null && ee === g.alternate) break t;
                ee = fn(ee), g = fn(g);
              }
              ee = null;
            }
            else ee = null;
            J !== null && T2(_, M, J, ee, !1), $ !== null && Ke !== null && T2(_, Ke, $, ee, !0);
          }
        }
        e: {
          if (M = k ? pn(k) : window, J = M.nodeName && M.nodeName.toLowerCase(), J === "select" || J === "input" && M.type === "file") var ne = uu;
          else if (h2(M)) if (m2) ne = hu;
          else {
            ne = du;
            var ue = cu;
          }
          else (J = M.nodeName) && J.toLowerCase() === "input" && (M.type === "checkbox" || M.type === "radio") && (ne = fu);
          if (ne && (ne = ne(e, k))) {
            p2(_, ne, n, L);
            break e;
          }
          ue && ue(e, M, k), e === "focusout" && (ue = M._wrapperState) && ue.controlled && M.type === "number" && Le(M, "number", M.value);
        }
        switch (ue = k ? pn(k) : window, e) {
          case "focusin":
            (h2(ue) || ue.contentEditable === "true") && (cn = ue, cs = k, er = null);
            break;
          case "focusout":
            er = cs = cn = null;
            break;
          case "mousedown":
            ds = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ds = !1, N2(_, n, L);
            break;
          case "selectionchange":
            if (vu) break;
          case "keydown":
          case "keyup":
            N2(_, n, L);
        }
        var ce;
        if (is) e: {
          switch (e) {
            case "compositionstart":
              var de = "onCompositionStart";
              break e;
            case "compositionend":
              de = "onCompositionEnd";
              break e;
            case "compositionupdate":
              de = "onCompositionUpdate";
              break e;
          }
          de = void 0;
        }
        else un ? d2(e, n) && (de = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (de = "onCompositionStart");
        de && (o2 && n.locale !== "ko" && (un || de !== "onCompositionStart" ? de === "onCompositionEnd" && un && (ce = r2()) : (gt = L, es = "value" in gt ? gt.value : gt.textContent, un = !0)), ue = Zr(k, de), 0 < ue.length && (de = new i2(de, e, null, n, L), _.push({ event: de, listeners: ue }), ce ? de.data = ce : (ce = f2(n), ce !== null && (de.data = ce)))), (ce = lu ? su(e, n) : iu(e, n)) && (k = Zr(k, "onBeforeInput"), 0 < k.length && (L = new i2("onBeforeInput", "beforeinput", null, n, L), _.push({ event: L, listeners: k }), L.data = ce));
      }
      _2(_, t);
    });
  }
  function rr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Zr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var s = e, i = s.stateNode;
      s.tag === 5 && i !== null && (s = i, i = xe(e, n), i != null && r.unshift(rr(e, i, s)), i = xe(e, t), i != null && r.push(rr(e, i, s))), e = e.return;
    }
    return r;
  }
  function fn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function T2(e, t, n, r, s) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
      var f = n, h = f.alternate, k = f.stateNode;
      if (h !== null && h === r) break;
      f.tag === 5 && k !== null && (f = k, s ? (h = xe(n, i), h != null && o.unshift(rr(n, h, f))) : s || (h = xe(n, i), h != null && o.push(rr(n, h, f)))), n = n.return;
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var wu = /\r\n?/g, ku = /\u0000|\uFFFD/g;
  function I2(e) {
    return (typeof e == "string" ? e : "" + e).replace(wu, `
`).replace(ku, "");
  }
  function qr(e, t, n) {
    if (t = I2(t), I2(e) !== t && n) throw Error(u(425));
  }
  function Jr() {
  }
  var ys = null, gs = null;
  function xs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ws = typeof setTimeout == "function" ? setTimeout : void 0, ju = typeof clearTimeout == "function" ? clearTimeout : void 0, O2 = typeof Promise == "function" ? Promise : void 0, Nu = typeof queueMicrotask == "function" ? queueMicrotask : typeof O2 < "u" ? function(e) {
    return O2.resolve(null).then(e).catch(Su);
  } : ws;
  function Su(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ks(e, t) {
    var n = t, r = 0;
    do {
      var s = n.nextSibling;
      if (e.removeChild(n), s && s.nodeType === 8) if (n = s.data, n === "/$") {
        if (r === 0) {
          e.removeChild(s), Xn(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = s;
    } while (n);
    Xn(t);
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
  function D2(e) {
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
  var hn = Math.random().toString(36).slice(2), J0 = "__reactFiber$" + hn, lr = "__reactProps$" + hn, st = "__reactContainer$" + hn, js = "__reactEvents$" + hn, Cu = "__reactListeners$" + hn, Eu = "__reactHandles$" + hn;
  function Ht(e) {
    var t = e[J0];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[st] || n[J0]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = D2(e); e !== null; ) {
          if (n = e[J0]) return n;
          e = D2(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function sr(e) {
    return e = e[J0] || e[st], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function pn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(u(33));
  }
  function br(e) {
    return e[lr] || null;
  }
  var Ns = [], mn = -1;
  function kt(e) {
    return { current: e };
  }
  function Be(e) {
    0 > mn || (e.current = Ns[mn], Ns[mn] = null, mn--);
  }
  function Oe(e, t) {
    mn++, Ns[mn] = e.current, e.current = t;
  }
  var jt = {}, s0 = kt(jt), v0 = kt(!1), Ft = jt;
  function vn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return jt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var s = {}, i;
    for (i in n) s[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = s), s;
  }
  function y0(e) {
    return e = e.childContextTypes, e != null;
  }
  function Yr() {
    Be(v0), Be(s0);
  }
  function B2(e, t, n) {
    if (s0.current !== jt) throw Error(u(168));
    Oe(s0, t), Oe(v0, n);
  }
  function H2(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var s in r) if (!(s in t)) throw Error(u(108, se(e) || "Unknown", s));
    return H({}, n, r);
  }
  function $r(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || jt, Ft = s0.current, Oe(s0, e), Oe(v0, v0.current), !0;
  }
  function F2(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(u(169));
    n ? (e = H2(e, t, Ft), r.__reactInternalMemoizedMergedChildContext = e, Be(v0), Be(s0), Oe(s0, e)) : Be(v0), Oe(v0, n);
  }
  var it = null, el = !1, Ss = !1;
  function W2(e) {
    it === null ? it = [e] : it.push(e);
  }
  function Au(e) {
    el = !0, W2(e);
  }
  function Nt() {
    if (!Ss && it !== null) {
      Ss = !0;
      var e = 0, t = _e;
      try {
        var n = it;
        for (_e = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        it = null, el = !1;
      } catch (s) {
        throw it !== null && (it = it.slice(e + 1)), Fn(Gl, Nt), s;
      } finally {
        _e = t, Ss = !1;
      }
    }
    return null;
  }
  var yn = [], gn = 0, tl = null, nl = 0, z0 = [], R0 = 0, Wt = null, at = 1, ot = "";
  function Ut(e, t) {
    yn[gn++] = nl, yn[gn++] = tl, tl = e, nl = t;
  }
  function U2(e, t, n) {
    z0[R0++] = at, z0[R0++] = ot, z0[R0++] = Wt, Wt = e;
    var r = at;
    e = ot;
    var s = 32 - H0(r) - 1;
    r &= ~(1 << s), n += 1;
    var i = 32 - H0(t) + s;
    if (30 < i) {
      var o = s - s % 5;
      i = (r & (1 << o) - 1).toString(32), r >>= o, s -= o, at = 1 << 32 - H0(t) + s | n << s | r, ot = i + e;
    } else at = 1 << i | n << s | r, ot = e;
  }
  function Cs(e) {
    e.return !== null && (Ut(e, 1), U2(e, 1, 0));
  }
  function Es(e) {
    for (; e === tl; ) tl = yn[--gn], yn[gn] = null, nl = yn[--gn], yn[gn] = null;
    for (; e === Wt; ) Wt = z0[--R0], z0[R0] = null, ot = z0[--R0], z0[R0] = null, at = z0[--R0], z0[R0] = null;
  }
  var E0 = null, A0 = null, Fe = !1, W0 = null;
  function Q2(e, t) {
    var n = I0(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function V2(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, E0 = e, A0 = wt(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, E0 = e, A0 = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Wt !== null ? { id: at, overflow: ot } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = I0(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, E0 = e, A0 = null, !0) : !1;
      default:
        return !1;
    }
  }
  function As(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ms(e) {
    if (Fe) {
      var t = A0;
      if (t) {
        var n = t;
        if (!V2(e, t)) {
          if (As(e)) throw Error(u(418));
          t = wt(n.nextSibling);
          var r = E0;
          t && V2(e, t) ? Q2(r, n) : (e.flags = e.flags & -4097 | 2, Fe = !1, E0 = e);
        }
      } else {
        if (As(e)) throw Error(u(418));
        e.flags = e.flags & -4097 | 2, Fe = !1, E0 = e;
      }
    }
  }
  function K2(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    E0 = e;
  }
  function rl(e) {
    if (e !== E0) return !1;
    if (!Fe) return K2(e), Fe = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !xs(e.type, e.memoizedProps)), t && (t = A0)) {
      if (As(e)) throw G2(), Error(u(418));
      for (; t; ) Q2(e, t), t = wt(t.nextSibling);
    }
    if (K2(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                A0 = wt(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        A0 = null;
      }
    } else A0 = E0 ? wt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function G2() {
    for (var e = A0; e; ) e = wt(e.nextSibling);
  }
  function xn() {
    A0 = E0 = null, Fe = !1;
  }
  function Ls(e) {
    W0 === null ? W0 = [e] : W0.push(e);
  }
  var Mu = F.ReactCurrentBatchConfig;
  function ir(e, t, n) {
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
  function ll(e, t) {
    throw e = Object.prototype.toString.call(t), Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function X2(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Z2(e) {
    function t(g, m) {
      if (e) {
        var w = g.deletions;
        w === null ? (g.deletions = [m], g.flags |= 16) : w.push(m);
      }
    }
    function n(g, m) {
      if (!e) return null;
      for (; m !== null; ) t(g, m), m = m.sibling;
      return null;
    }
    function r(g, m) {
      for (g = /* @__PURE__ */ new Map(); m !== null; ) m.key !== null ? g.set(m.key, m) : g.set(m.index, m), m = m.sibling;
      return g;
    }
    function s(g, m) {
      return g = Rt(g, m), g.index = 0, g.sibling = null, g;
    }
    function i(g, m, w) {
      return g.index = w, e ? (w = g.alternate, w !== null ? (w = w.index, w < m ? (g.flags |= 2, m) : w) : (g.flags |= 2, m)) : (g.flags |= 1048576, m);
    }
    function o(g) {
      return e && g.alternate === null && (g.flags |= 2), g;
    }
    function f(g, m, w, T) {
      return m === null || m.tag !== 6 ? (m = wi(w, g.mode, T), m.return = g, m) : (m = s(m, w), m.return = g, m);
    }
    function h(g, m, w, T) {
      var ne = w.type;
      return ne === G ? L(g, m, w.props.children, T, w.key) : m !== null && (m.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === Ce && X2(ne) === m.type) ? (T = s(m, w.props), T.ref = ir(g, m, w), T.return = g, T) : (T = Ml(w.type, w.key, w.props, null, g.mode, T), T.ref = ir(g, m, w), T.return = g, T);
    }
    function k(g, m, w, T) {
      return m === null || m.tag !== 4 || m.stateNode.containerInfo !== w.containerInfo || m.stateNode.implementation !== w.implementation ? (m = ki(w, g.mode, T), m.return = g, m) : (m = s(m, w.children || []), m.return = g, m);
    }
    function L(g, m, w, T, ne) {
      return m === null || m.tag !== 7 ? (m = Jt(w, g.mode, T, ne), m.return = g, m) : (m = s(m, w), m.return = g, m);
    }
    function _(g, m, w) {
      if (typeof m == "string" && m !== "" || typeof m == "number") return m = wi("" + m, g.mode, w), m.return = g, m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Q:
            return w = Ml(m.type, m.key, m.props, null, g.mode, w), w.ref = ir(g, null, m), w.return = g, w;
          case le:
            return m = ki(m, g.mode, w), m.return = g, m;
          case Ce:
            var T = m._init;
            return _(g, T(m._payload), w);
        }
        if (Ie(m) || te(m)) return m = Jt(m, g.mode, w, null), m.return = g, m;
        ll(g, m);
      }
      return null;
    }
    function M(g, m, w, T) {
      var ne = m !== null ? m.key : null;
      if (typeof w == "string" && w !== "" || typeof w == "number") return ne !== null ? null : f(g, m, "" + w, T);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case Q:
            return w.key === ne ? h(g, m, w, T) : null;
          case le:
            return w.key === ne ? k(g, m, w, T) : null;
          case Ce:
            return ne = w._init, M(
              g,
              m,
              ne(w._payload),
              T
            );
        }
        if (Ie(w) || te(w)) return ne !== null ? null : L(g, m, w, T, null);
        ll(g, w);
      }
      return null;
    }
    function J(g, m, w, T, ne) {
      if (typeof T == "string" && T !== "" || typeof T == "number") return g = g.get(w) || null, f(m, g, "" + T, ne);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case Q:
            return g = g.get(T.key === null ? w : T.key) || null, h(m, g, T, ne);
          case le:
            return g = g.get(T.key === null ? w : T.key) || null, k(m, g, T, ne);
          case Ce:
            var ue = T._init;
            return J(g, m, w, ue(T._payload), ne);
        }
        if (Ie(T) || te(T)) return g = g.get(w) || null, L(m, g, T, ne, null);
        ll(m, T);
      }
      return null;
    }
    function $(g, m, w, T) {
      for (var ne = null, ue = null, ce = m, de = m = 0, e0 = null; ce !== null && de < w.length; de++) {
        ce.index > de ? (e0 = ce, ce = null) : e0 = ce.sibling;
        var Me = M(g, ce, w[de], T);
        if (Me === null) {
          ce === null && (ce = e0);
          break;
        }
        e && ce && Me.alternate === null && t(g, ce), m = i(Me, m, de), ue === null ? ne = Me : ue.sibling = Me, ue = Me, ce = e0;
      }
      if (de === w.length) return n(g, ce), Fe && Ut(g, de), ne;
      if (ce === null) {
        for (; de < w.length; de++) ce = _(g, w[de], T), ce !== null && (m = i(ce, m, de), ue === null ? ne = ce : ue.sibling = ce, ue = ce);
        return Fe && Ut(g, de), ne;
      }
      for (ce = r(g, ce); de < w.length; de++) e0 = J(ce, g, de, w[de], T), e0 !== null && (e && e0.alternate !== null && ce.delete(e0.key === null ? de : e0.key), m = i(e0, m, de), ue === null ? ne = e0 : ue.sibling = e0, ue = e0);
      return e && ce.forEach(function(_t) {
        return t(g, _t);
      }), Fe && Ut(g, de), ne;
    }
    function ee(g, m, w, T) {
      var ne = te(w);
      if (typeof ne != "function") throw Error(u(150));
      if (w = ne.call(w), w == null) throw Error(u(151));
      for (var ue = ne = null, ce = m, de = m = 0, e0 = null, Me = w.next(); ce !== null && !Me.done; de++, Me = w.next()) {
        ce.index > de ? (e0 = ce, ce = null) : e0 = ce.sibling;
        var _t = M(g, ce, Me.value, T);
        if (_t === null) {
          ce === null && (ce = e0);
          break;
        }
        e && ce && _t.alternate === null && t(g, ce), m = i(_t, m, de), ue === null ? ne = _t : ue.sibling = _t, ue = _t, ce = e0;
      }
      if (Me.done) return n(
        g,
        ce
      ), Fe && Ut(g, de), ne;
      if (ce === null) {
        for (; !Me.done; de++, Me = w.next()) Me = _(g, Me.value, T), Me !== null && (m = i(Me, m, de), ue === null ? ne = Me : ue.sibling = Me, ue = Me);
        return Fe && Ut(g, de), ne;
      }
      for (ce = r(g, ce); !Me.done; de++, Me = w.next()) Me = J(ce, g, de, Me.value, T), Me !== null && (e && Me.alternate !== null && ce.delete(Me.key === null ? de : Me.key), m = i(Me, m, de), ue === null ? ne = Me : ue.sibling = Me, ue = Me);
      return e && ce.forEach(function(ac) {
        return t(g, ac);
      }), Fe && Ut(g, de), ne;
    }
    function Ke(g, m, w, T) {
      if (typeof w == "object" && w !== null && w.type === G && w.key === null && (w = w.props.children), typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case Q:
            e: {
              for (var ne = w.key, ue = m; ue !== null; ) {
                if (ue.key === ne) {
                  if (ne = w.type, ne === G) {
                    if (ue.tag === 7) {
                      n(g, ue.sibling), m = s(ue, w.props.children), m.return = g, g = m;
                      break e;
                    }
                  } else if (ue.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === Ce && X2(ne) === ue.type) {
                    n(g, ue.sibling), m = s(ue, w.props), m.ref = ir(g, ue, w), m.return = g, g = m;
                    break e;
                  }
                  n(g, ue);
                  break;
                } else t(g, ue);
                ue = ue.sibling;
              }
              w.type === G ? (m = Jt(w.props.children, g.mode, T, w.key), m.return = g, g = m) : (T = Ml(w.type, w.key, w.props, null, g.mode, T), T.ref = ir(g, m, w), T.return = g, g = T);
            }
            return o(g);
          case le:
            e: {
              for (ue = w.key; m !== null; ) {
                if (m.key === ue) if (m.tag === 4 && m.stateNode.containerInfo === w.containerInfo && m.stateNode.implementation === w.implementation) {
                  n(g, m.sibling), m = s(m, w.children || []), m.return = g, g = m;
                  break e;
                } else {
                  n(g, m);
                  break;
                }
                else t(g, m);
                m = m.sibling;
              }
              m = ki(w, g.mode, T), m.return = g, g = m;
            }
            return o(g);
          case Ce:
            return ue = w._init, Ke(g, m, ue(w._payload), T);
        }
        if (Ie(w)) return $(g, m, w, T);
        if (te(w)) return ee(g, m, w, T);
        ll(g, w);
      }
      return typeof w == "string" && w !== "" || typeof w == "number" ? (w = "" + w, m !== null && m.tag === 6 ? (n(g, m.sibling), m = s(m, w), m.return = g, g = m) : (n(g, m), m = wi(w, g.mode, T), m.return = g, g = m), o(g)) : n(g, m);
    }
    return Ke;
  }
  var wn = Z2(!0), q2 = Z2(!1), sl = kt(null), il = null, kn = null, zs = null;
  function Rs() {
    zs = kn = il = null;
  }
  function _s(e) {
    var t = sl.current;
    Be(sl), e._currentValue = t;
  }
  function Ps(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function jn(e, t) {
    il = e, zs = kn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (g0 = !0), e.firstContext = null);
  }
  function _0(e) {
    var t = e._currentValue;
    if (zs !== e) if (e = { context: e, memoizedValue: t, next: null }, kn === null) {
      if (il === null) throw Error(u(308));
      kn = e, il.dependencies = { lanes: 0, firstContext: e };
    } else kn = kn.next = e;
    return t;
  }
  var Qt = null;
  function Ts(e) {
    Qt === null ? Qt = [e] : Qt.push(e);
  }
  function J2(e, t, n, r) {
    var s = t.interleaved;
    return s === null ? (n.next = n, Ts(t)) : (n.next = s.next, s.next = n), t.interleaved = n, ut(e, r);
  }
  function ut(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var St = !1;
  function Is(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function b2(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function ct(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Ct(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (Ee & 2) !== 0) {
      var s = r.pending;
      return s === null ? t.next = t : (t.next = s.next, s.next = t), r.pending = t, ut(e, n);
    }
    return s = r.interleaved, s === null ? (t.next = t, Ts(r)) : (t.next = s.next, s.next = t), r.interleaved = t, ut(e, n);
  }
  function al(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ql(e, n);
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
  function ol(e, t, n, r) {
    var s = e.updateQueue;
    St = !1;
    var i = s.firstBaseUpdate, o = s.lastBaseUpdate, f = s.shared.pending;
    if (f !== null) {
      s.shared.pending = null;
      var h = f, k = h.next;
      h.next = null, o === null ? i = k : o.next = k, o = h;
      var L = e.alternate;
      L !== null && (L = L.updateQueue, f = L.lastBaseUpdate, f !== o && (f === null ? L.firstBaseUpdate = k : f.next = k, L.lastBaseUpdate = h));
    }
    if (i !== null) {
      var _ = s.baseState;
      o = 0, L = k = h = null, f = i;
      do {
        var M = f.lane, J = f.eventTime;
        if ((r & M) === M) {
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
            switch (M = t, J = n, ee.tag) {
              case 1:
                if ($ = ee.payload, typeof $ == "function") {
                  _ = $.call(J, _, M);
                  break e;
                }
                _ = $;
                break e;
              case 3:
                $.flags = $.flags & -65537 | 128;
              case 0:
                if ($ = ee.payload, M = typeof $ == "function" ? $.call(J, _, M) : $, M == null) break e;
                _ = H({}, _, M);
                break e;
              case 2:
                St = !0;
            }
          }
          f.callback !== null && f.lane !== 0 && (e.flags |= 64, M = s.effects, M === null ? s.effects = [f] : M.push(f));
        } else J = { eventTime: J, lane: M, tag: f.tag, payload: f.payload, callback: f.callback, next: null }, L === null ? (k = L = J, h = _) : L = L.next = J, o |= M;
        if (f = f.next, f === null) {
          if (f = s.shared.pending, f === null) break;
          M = f, f = M.next, M.next = null, s.lastBaseUpdate = M, s.shared.pending = null;
        }
      } while (!0);
      if (L === null && (h = _), s.baseState = h, s.firstBaseUpdate = k, s.lastBaseUpdate = L, t = s.shared.interleaved, t !== null) {
        s = t;
        do
          o |= s.lane, s = s.next;
        while (s !== t);
      } else i === null && (s.shared.lanes = 0);
      Gt |= o, e.lanes = o, e.memoizedState = _;
    }
  }
  function $2(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], s = r.callback;
      if (s !== null) {
        if (r.callback = null, r = n, typeof s != "function") throw Error(u(191, s));
        s.call(r);
      }
    }
  }
  var ar = {}, b0 = kt(ar), or = kt(ar), ur = kt(ar);
  function Vt(e) {
    if (e === ar) throw Error(u(174));
    return e;
  }
  function Os(e, t) {
    switch (Oe(ur, t), Oe(or, e), Oe(b0, ar), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : X0(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = X0(t, e);
    }
    Be(b0), Oe(b0, t);
  }
  function Nn() {
    Be(b0), Be(or), Be(ur);
  }
  function ea(e) {
    Vt(ur.current);
    var t = Vt(b0.current), n = X0(t, e.type);
    t !== n && (Oe(or, e), Oe(b0, n));
  }
  function Ds(e) {
    or.current === e && (Be(b0), Be(or));
  }
  var We = kt(0);
  function ul(e) {
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
  var Bs = [];
  function Hs() {
    for (var e = 0; e < Bs.length; e++) Bs[e]._workInProgressVersionPrimary = null;
    Bs.length = 0;
  }
  var cl = F.ReactCurrentDispatcher, Fs = F.ReactCurrentBatchConfig, Kt = 0, Ue = null, Je = null, Ye = null, dl = !1, cr = !1, dr = 0, Lu = 0;
  function i0() {
    throw Error(u(321));
  }
  function Ws(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!F0(e[n], t[n])) return !1;
    return !0;
  }
  function Us(e, t, n, r, s, i) {
    if (Kt = i, Ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, cl.current = e === null || e.memoizedState === null ? Pu : Tu, e = n(r, s), cr) {
      i = 0;
      do {
        if (cr = !1, dr = 0, 25 <= i) throw Error(u(301));
        i += 1, Ye = Je = null, t.updateQueue = null, cl.current = Iu, e = n(r, s);
      } while (cr);
    }
    if (cl.current = pl, t = Je !== null && Je.next !== null, Kt = 0, Ye = Je = Ue = null, dl = !1, t) throw Error(u(300));
    return e;
  }
  function Qs() {
    var e = dr !== 0;
    return dr = 0, e;
  }
  function Y0() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ye === null ? Ue.memoizedState = Ye = e : Ye = Ye.next = e, Ye;
  }
  function P0() {
    if (Je === null) {
      var e = Ue.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Je.next;
    var t = Ye === null ? Ue.memoizedState : Ye.next;
    if (t !== null) Ye = t, Je = e;
    else {
      if (e === null) throw Error(u(310));
      Je = e, e = { memoizedState: Je.memoizedState, baseState: Je.baseState, baseQueue: Je.baseQueue, queue: Je.queue, next: null }, Ye === null ? Ue.memoizedState = Ye = e : Ye = Ye.next = e;
    }
    return Ye;
  }
  function fr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Vs(e) {
    var t = P0(), n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = Je, s = r.baseQueue, i = n.pending;
    if (i !== null) {
      if (s !== null) {
        var o = s.next;
        s.next = i.next, i.next = o;
      }
      r.baseQueue = s = i, n.pending = null;
    }
    if (s !== null) {
      i = s.next, r = r.baseState;
      var f = o = null, h = null, k = i;
      do {
        var L = k.lane;
        if ((Kt & L) === L) h !== null && (h = h.next = { lane: 0, action: k.action, hasEagerState: k.hasEagerState, eagerState: k.eagerState, next: null }), r = k.hasEagerState ? k.eagerState : e(r, k.action);
        else {
          var _ = {
            lane: L,
            action: k.action,
            hasEagerState: k.hasEagerState,
            eagerState: k.eagerState,
            next: null
          };
          h === null ? (f = h = _, o = r) : h = h.next = _, Ue.lanes |= L, Gt |= L;
        }
        k = k.next;
      } while (k !== null && k !== i);
      h === null ? o = r : h.next = f, F0(r, t.memoizedState) || (g0 = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = h, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      s = e;
      do
        i = s.lane, Ue.lanes |= i, Gt |= i, s = s.next;
      while (s !== e);
    } else s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ks(e) {
    var t = P0(), n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, s = n.pending, i = t.memoizedState;
    if (s !== null) {
      n.pending = null;
      var o = s = s.next;
      do
        i = e(i, o.action), o = o.next;
      while (o !== s);
      F0(i, t.memoizedState) || (g0 = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, r];
  }
  function ta() {
  }
  function na(e, t) {
    var n = Ue, r = P0(), s = t(), i = !F0(r.memoizedState, s);
    if (i && (r.memoizedState = s, g0 = !0), r = r.queue, Gs(sa.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Ye !== null && Ye.memoizedState.tag & 1) {
      if (n.flags |= 2048, hr(9, la.bind(null, n, r, s, t), void 0, null), $e === null) throw Error(u(349));
      (Kt & 30) !== 0 || ra(n, t, s);
    }
    return s;
  }
  function ra(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ue.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function la(e, t, n, r) {
    t.value = n, t.getSnapshot = r, ia(t) && aa(e);
  }
  function sa(e, t, n) {
    return n(function() {
      ia(t) && aa(e);
    });
  }
  function ia(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !F0(e, n);
    } catch {
      return !0;
    }
  }
  function aa(e) {
    var t = ut(e, 1);
    t !== null && K0(t, e, 1, -1);
  }
  function oa(e) {
    var t = Y0();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: fr, lastRenderedState: e }, t.queue = e, e = e.dispatch = _u.bind(null, Ue, e), [t.memoizedState, e];
  }
  function hr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ue.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function ua() {
    return P0().memoizedState;
  }
  function fl(e, t, n, r) {
    var s = Y0();
    Ue.flags |= e, s.memoizedState = hr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function hl(e, t, n, r) {
    var s = P0();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Je !== null) {
      var o = Je.memoizedState;
      if (i = o.destroy, r !== null && Ws(r, o.deps)) {
        s.memoizedState = hr(t, n, i, r);
        return;
      }
    }
    Ue.flags |= e, s.memoizedState = hr(1 | t, n, i, r);
  }
  function ca(e, t) {
    return fl(8390656, 8, e, t);
  }
  function Gs(e, t) {
    return hl(2048, 8, e, t);
  }
  function da(e, t) {
    return hl(4, 2, e, t);
  }
  function fa(e, t) {
    return hl(4, 4, e, t);
  }
  function ha(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function pa(e, t, n) {
    return n = n != null ? n.concat([e]) : null, hl(4, 4, ha.bind(null, t, e), n);
  }
  function Xs() {
  }
  function ma(e, t) {
    var n = P0();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ws(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function va(e, t) {
    var n = P0();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ws(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function ya(e, t, n) {
    return (Kt & 21) === 0 ? (e.baseState && (e.baseState = !1, g0 = !0), e.memoizedState = n) : (F0(n, t) || (n = Xi(), Ue.lanes |= n, Gt |= n, e.baseState = !0), t);
  }
  function zu(e, t) {
    var n = _e;
    _e = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Fs.transition;
    Fs.transition = {};
    try {
      e(!1), t();
    } finally {
      _e = n, Fs.transition = r;
    }
  }
  function ga() {
    return P0().memoizedState;
  }
  function Ru(e, t, n) {
    var r = Lt(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, xa(e)) wa(t, n);
    else if (n = J2(e, t, n, r), n !== null) {
      var s = f0();
      K0(n, e, r, s), ka(n, t, r);
    }
  }
  function _u(e, t, n) {
    var r = Lt(e), s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (xa(e)) wa(t, s);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
        var o = t.lastRenderedState, f = i(o, n);
        if (s.hasEagerState = !0, s.eagerState = f, F0(f, o)) {
          var h = t.interleaved;
          h === null ? (s.next = s, Ts(t)) : (s.next = h.next, h.next = s), t.interleaved = s;
          return;
        }
      } catch {
      } finally {
      }
      n = J2(e, t, s, r), n !== null && (s = f0(), K0(n, e, r, s), ka(n, t, r));
    }
  }
  function xa(e) {
    var t = e.alternate;
    return e === Ue || t !== null && t === Ue;
  }
  function wa(e, t) {
    cr = dl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function ka(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ql(e, n);
    }
  }
  var pl = { readContext: _0, useCallback: i0, useContext: i0, useEffect: i0, useImperativeHandle: i0, useInsertionEffect: i0, useLayoutEffect: i0, useMemo: i0, useReducer: i0, useRef: i0, useState: i0, useDebugValue: i0, useDeferredValue: i0, useTransition: i0, useMutableSource: i0, useSyncExternalStore: i0, useId: i0, unstable_isNewReconciler: !1 }, Pu = { readContext: _0, useCallback: function(e, t) {
    return Y0().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: _0, useEffect: ca, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, fl(
      4194308,
      4,
      ha.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return fl(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return fl(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Y0();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Y0();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Ru.bind(null, Ue, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Y0();
    return e = { current: e }, t.memoizedState = e;
  }, useState: oa, useDebugValue: Xs, useDeferredValue: function(e) {
    return Y0().memoizedState = e;
  }, useTransition: function() {
    var e = oa(!1), t = e[0];
    return e = zu.bind(null, e[1]), Y0().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Ue, s = Y0();
    if (Fe) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else {
      if (n = t(), $e === null) throw Error(u(349));
      (Kt & 30) !== 0 || ra(r, t, n);
    }
    s.memoizedState = n;
    var i = { value: n, getSnapshot: t };
    return s.queue = i, ca(sa.bind(
      null,
      r,
      i,
      e
    ), [e]), r.flags |= 2048, hr(9, la.bind(null, r, i, n, t), void 0, null), n;
  }, useId: function() {
    var e = Y0(), t = $e.identifierPrefix;
    if (Fe) {
      var n = ot, r = at;
      n = (r & ~(1 << 32 - H0(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = dr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Lu++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Tu = {
    readContext: _0,
    useCallback: ma,
    useContext: _0,
    useEffect: Gs,
    useImperativeHandle: pa,
    useInsertionEffect: da,
    useLayoutEffect: fa,
    useMemo: va,
    useReducer: Vs,
    useRef: ua,
    useState: function() {
      return Vs(fr);
    },
    useDebugValue: Xs,
    useDeferredValue: function(e) {
      var t = P0();
      return ya(t, Je.memoizedState, e);
    },
    useTransition: function() {
      var e = Vs(fr)[0], t = P0().memoizedState;
      return [e, t];
    },
    useMutableSource: ta,
    useSyncExternalStore: na,
    useId: ga,
    unstable_isNewReconciler: !1
  }, Iu = { readContext: _0, useCallback: ma, useContext: _0, useEffect: Gs, useImperativeHandle: pa, useInsertionEffect: da, useLayoutEffect: fa, useMemo: va, useReducer: Ks, useRef: ua, useState: function() {
    return Ks(fr);
  }, useDebugValue: Xs, useDeferredValue: function(e) {
    var t = P0();
    return Je === null ? t.memoizedState = e : ya(t, Je.memoizedState, e);
  }, useTransition: function() {
    var e = Ks(fr)[0], t = P0().memoizedState;
    return [e, t];
  }, useMutableSource: ta, useSyncExternalStore: na, useId: ga, unstable_isNewReconciler: !1 };
  function U0(e, t) {
    if (e && e.defaultProps) {
      t = H({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Zs(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : H({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var ml = { isMounted: function(e) {
    return (e = e._reactInternals) ? B0(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = f0(), s = Lt(e), i = ct(r, s);
    i.payload = t, n != null && (i.callback = n), t = Ct(e, i, s), t !== null && (K0(t, e, s, r), al(t, e, s));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = f0(), s = Lt(e), i = ct(r, s);
    i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Ct(e, i, s), t !== null && (K0(t, e, s, r), al(t, e, s));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = f0(), r = Lt(e), s = ct(n, r);
    s.tag = 2, t != null && (s.callback = t), t = Ct(e, s, r), t !== null && (K0(t, e, r, n), al(t, e, r));
  } };
  function ja(e, t, n, r, s, i, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !$n(n, r) || !$n(s, i) : !0;
  }
  function Na(e, t, n) {
    var r = !1, s = jt, i = t.contextType;
    return typeof i == "object" && i !== null ? i = _0(i) : (s = y0(t) ? Ft : s0.current, r = t.contextTypes, i = (r = r != null) ? vn(e, s) : jt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ml, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = i), t;
  }
  function Sa(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ml.enqueueReplaceState(t, t.state, null);
  }
  function qs(e, t, n, r) {
    var s = e.stateNode;
    s.props = n, s.state = e.memoizedState, s.refs = {}, Is(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? s.context = _0(i) : (i = y0(t) ? Ft : s0.current, s.context = vn(e, i)), s.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Zs(e, t, i, n), s.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), t !== s.state && ml.enqueueReplaceState(s, s.state, null), ol(e, n, s, r), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Sn(e, t) {
    try {
      var n = "", r = t;
      do
        n += A(r), r = r.return;
      while (r);
      var s = n;
    } catch (i) {
      s = `
Error generating stack: ` + i.message + `
` + i.stack;
    }
    return { value: e, source: t, stack: s, digest: null };
  }
  function Js(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function bs(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Ou = typeof WeakMap == "function" ? WeakMap : Map;
  function Ca(e, t, n) {
    n = ct(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      jl || (jl = !0, fi = r), bs(e, t);
    }, n;
  }
  function Ea(e, t, n) {
    n = ct(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var s = t.value;
      n.payload = function() {
        return r(s);
      }, n.callback = function() {
        bs(e, t);
      };
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
      bs(e, t), typeof r != "function" && (At === null ? At = /* @__PURE__ */ new Set([this]) : At.add(this));
      var o = t.stack;
      this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
    }), n;
  }
  function Aa(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Ou();
      var s = /* @__PURE__ */ new Set();
      r.set(t, s);
    } else s = r.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), r.set(t, s));
    s.has(n) || (s.add(n), e = Ju.bind(null, e, t, n), t.then(e, e));
  }
  function Ma(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function La(e, t, n, r, s) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ct(-1, 1), t.tag = 2, Ct(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = s, e);
  }
  var Du = F.ReactCurrentOwner, g0 = !1;
  function d0(e, t, n, r) {
    t.child = e === null ? q2(t, null, n, r) : wn(t, e.child, n, r);
  }
  function za(e, t, n, r, s) {
    n = n.render;
    var i = t.ref;
    return jn(t, s), r = Us(e, t, n, r, i, s), n = Qs(), e !== null && !g0 ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, dt(e, t, s)) : (Fe && n && Cs(t), t.flags |= 1, d0(e, t, r, s), t.child);
  }
  function Ra(e, t, n, r, s) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !xi(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, _a(e, t, i, r, s)) : (e = Ml(n.type, null, r, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, (e.lanes & s) === 0) {
      var o = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : $n, n(o, r) && e.ref === t.ref) return dt(e, t, s);
    }
    return t.flags |= 1, e = Rt(i, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function _a(e, t, n, r, s) {
    if (e !== null) {
      var i = e.memoizedProps;
      if ($n(i, r) && e.ref === t.ref) if (g0 = !1, t.pendingProps = r = i, (e.lanes & s) !== 0) (e.flags & 131072) !== 0 && (g0 = !0);
      else return t.lanes = e.lanes, dt(e, t, s);
    }
    return Ys(e, t, n, r, s);
  }
  function Pa(e, t, n) {
    var r = t.pendingProps, s = r.children, i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Oe(En, M0), M0 |= n;
    else {
      if ((n & 1073741824) === 0) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Oe(En, M0), M0 |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Oe(En, M0), M0 |= r;
    }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Oe(En, M0), M0 |= r;
    return d0(e, t, s, n), t.child;
  }
  function Ta(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Ys(e, t, n, r, s) {
    var i = y0(n) ? Ft : s0.current;
    return i = vn(t, i), jn(t, s), n = Us(e, t, n, r, i, s), r = Qs(), e !== null && !g0 ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, dt(e, t, s)) : (Fe && r && Cs(t), t.flags |= 1, d0(e, t, n, s), t.child);
  }
  function Ia(e, t, n, r, s) {
    if (y0(n)) {
      var i = !0;
      $r(t);
    } else i = !1;
    if (jn(t, s), t.stateNode === null) yl(e, t), Na(t, n, r), qs(t, n, r, s), r = !0;
    else if (e === null) {
      var o = t.stateNode, f = t.memoizedProps;
      o.props = f;
      var h = o.context, k = n.contextType;
      typeof k == "object" && k !== null ? k = _0(k) : (k = y0(n) ? Ft : s0.current, k = vn(t, k));
      var L = n.getDerivedStateFromProps, _ = typeof L == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      _ || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (f !== r || h !== k) && Sa(t, o, r, k), St = !1;
      var M = t.memoizedState;
      o.state = M, ol(t, r, o, s), h = t.memoizedState, f !== r || M !== h || v0.current || St ? (typeof L == "function" && (Zs(t, n, L, r), h = t.memoizedState), (f = St || ja(t, n, f, r, M, h, k)) ? (_ || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = h), o.props = r, o.state = h, o.context = k, r = f) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      o = t.stateNode, b2(e, t), f = t.memoizedProps, k = t.type === t.elementType ? f : U0(t.type, f), o.props = k, _ = t.pendingProps, M = o.context, h = n.contextType, typeof h == "object" && h !== null ? h = _0(h) : (h = y0(n) ? Ft : s0.current, h = vn(t, h));
      var J = n.getDerivedStateFromProps;
      (L = typeof J == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (f !== _ || M !== h) && Sa(t, o, r, h), St = !1, M = t.memoizedState, o.state = M, ol(t, r, o, s);
      var $ = t.memoizedState;
      f !== _ || M !== $ || v0.current || St ? (typeof J == "function" && (Zs(t, n, J, r), $ = t.memoizedState), (k = St || ja(t, n, k, r, M, $, h) || !1) ? (L || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, $, h), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, $, h)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || f === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = $), o.props = r, o.state = $, o.context = h, r = k) : (typeof o.componentDidUpdate != "function" || f === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return $s(e, t, n, r, i, s);
  }
  function $s(e, t, n, r, s, i) {
    Ta(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return s && F2(t, n, !1), dt(e, t, i);
    r = t.stateNode, Du.current = t;
    var f = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = wn(t, e.child, null, i), t.child = wn(t, null, f, i)) : d0(e, t, f, i), t.memoizedState = r.state, s && F2(t, n, !0), t.child;
  }
  function Oa(e) {
    var t = e.stateNode;
    t.pendingContext ? B2(e, t.pendingContext, t.pendingContext !== t.context) : t.context && B2(e, t.context, !1), Os(e, t.containerInfo);
  }
  function Da(e, t, n, r, s) {
    return xn(), Ls(s), t.flags |= 256, d0(e, t, n, r), t.child;
  }
  var ei = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ti(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ba(e, t, n) {
    var r = t.pendingProps, s = We.current, i = !1, o = (t.flags & 128) !== 0, f;
    if ((f = o) || (f = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0), f ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1), Oe(We, s & 1), e === null)
      return Ms(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = Ll(o, r, 0, null), e = Jt(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = ti(n), t.memoizedState = ei, e) : ni(t, o));
    if (s = e.memoizedState, s !== null && (f = s.dehydrated, f !== null)) return Bu(e, t, o, r, f, s, n);
    if (i) {
      i = r.fallback, o = t.mode, s = e.child, f = s.sibling;
      var h = { mode: "hidden", children: r.children };
      return (o & 1) === 0 && t.child !== s ? (r = t.child, r.childLanes = 0, r.pendingProps = h, t.deletions = null) : (r = Rt(s, h), r.subtreeFlags = s.subtreeFlags & 14680064), f !== null ? i = Rt(f, i) : (i = Jt(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? ti(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = ei, r;
    }
    return i = e.child, e = i.sibling, r = Rt(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function ni(e, t) {
    return t = Ll({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function vl(e, t, n, r) {
    return r !== null && Ls(r), wn(t, e.child, null, n), e = ni(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Bu(e, t, n, r, s, i, o) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Js(Error(u(422))), vl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, s = t.mode, r = Ll({ mode: "visible", children: r.children }, s, 0, null), i = Jt(i, s, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && wn(t, e.child, null, o), t.child.memoizedState = ti(o), t.memoizedState = ei, i);
    if ((t.mode & 1) === 0) return vl(e, t, o, null);
    if (s.data === "$!") {
      if (r = s.nextSibling && s.nextSibling.dataset, r) var f = r.dgst;
      return r = f, i = Error(u(419)), r = Js(i, r, void 0), vl(e, t, o, r);
    }
    if (f = (o & e.childLanes) !== 0, g0 || f) {
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
        s = (s & (r.suspendedLanes | o)) !== 0 ? 0 : s, s !== 0 && s !== i.retryLane && (i.retryLane = s, ut(e, s), K0(r, e, s, -1));
      }
      return gi(), r = Js(Error(u(421))), vl(e, t, o, r);
    }
    return s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = bu.bind(null, e), s._reactRetry = t, null) : (e = i.treeContext, A0 = wt(s.nextSibling), E0 = t, Fe = !0, W0 = null, e !== null && (z0[R0++] = at, z0[R0++] = ot, z0[R0++] = Wt, at = e.id, ot = e.overflow, Wt = t), t = ni(t, r.children), t.flags |= 4096, t);
  }
  function Ha(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ps(e.return, t, n);
  }
  function ri(e, t, n, r, s) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: s } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = s);
  }
  function Fa(e, t, n) {
    var r = t.pendingProps, s = r.revealOrder, i = r.tail;
    if (d0(e, t, r.children, n), r = We.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ha(e, n, t);
        else if (e.tag === 19) Ha(e, n, t);
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
    if (Oe(We, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; ) e = n.alternate, e !== null && ul(e) === null && (s = n), n = n.sibling;
        n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), ri(t, !1, s, n, i);
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (e = s.alternate, e !== null && ul(e) === null) {
            t.child = s;
            break;
          }
          e = s.sibling, s.sibling = n, n = s, s = e;
        }
        ri(t, !0, n, null, i);
        break;
      case "together":
        ri(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function yl(e, t) {
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
  function Hu(e, t, n) {
    switch (t.tag) {
      case 3:
        Oa(t), xn();
        break;
      case 5:
        ea(t);
        break;
      case 1:
        y0(t.type) && $r(t);
        break;
      case 4:
        Os(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, s = t.memoizedProps.value;
        Oe(sl, r._currentValue), r._currentValue = s;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Oe(We, We.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Ba(e, t, n) : (Oe(We, We.current & 1), e = dt(e, t, n), e !== null ? e.sibling : null);
        Oe(We, We.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return Fa(e, t, n);
          t.flags |= 128;
        }
        if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Oe(We, We.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Pa(e, t, n);
    }
    return dt(e, t, n);
  }
  var Wa, li, Ua, Qa;
  Wa = function(e, t) {
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
  }, li = function() {
  }, Ua = function(e, t, n, r) {
    var s = e.memoizedProps;
    if (s !== r) {
      e = t.stateNode, Vt(b0.current);
      var i = null;
      switch (n) {
        case "input":
          s = qe(e, s), r = qe(e, r), i = [];
          break;
        case "select":
          s = H({}, s, { value: void 0 }), r = H({}, r, { value: void 0 }), i = [];
          break;
        case "textarea":
          s = tt(e, s), r = tt(e, r), i = [];
          break;
        default:
          typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Jr);
      }
      lt(n, r);
      var o;
      n = null;
      for (k in s) if (!r.hasOwnProperty(k) && s.hasOwnProperty(k) && s[k] != null) if (k === "style") {
        var f = s[k];
        for (o in f) f.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
      } else k !== "dangerouslySetInnerHTML" && k !== "children" && k !== "suppressContentEditableWarning" && k !== "suppressHydrationWarning" && k !== "autoFocus" && (v.hasOwnProperty(k) ? i || (i = []) : (i = i || []).push(k, null));
      for (k in r) {
        var h = r[k];
        if (f = s?.[k], r.hasOwnProperty(k) && h !== f && (h != null || f != null)) if (k === "style") if (f) {
          for (o in f) !f.hasOwnProperty(o) || h && h.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
          for (o in h) h.hasOwnProperty(o) && f[o] !== h[o] && (n || (n = {}), n[o] = h[o]);
        } else n || (i || (i = []), i.push(
          k,
          n
        )), n = h;
        else k === "dangerouslySetInnerHTML" ? (h = h ? h.__html : void 0, f = f ? f.__html : void 0, h != null && f !== h && (i = i || []).push(k, h)) : k === "children" ? typeof h != "string" && typeof h != "number" || (i = i || []).push(k, "" + h) : k !== "suppressContentEditableWarning" && k !== "suppressHydrationWarning" && (v.hasOwnProperty(k) ? (h != null && k === "onScroll" && De("scroll", e), i || f === h || (i = [])) : (i = i || []).push(k, h));
      }
      n && (i = i || []).push("style", n);
      var k = i;
      (t.updateQueue = k) && (t.flags |= 4);
    }
  }, Qa = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function pr(e, t) {
    if (!Fe) switch (e.tailMode) {
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
  function Fu(e, t, n) {
    var r = t.pendingProps;
    switch (Es(t), t.tag) {
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
        return y0(t.type) && Yr(), a0(t), null;
      case 3:
        return r = t.stateNode, Nn(), Be(v0), Be(s0), Hs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (rl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, W0 !== null && (mi(W0), W0 = null))), li(e, t), a0(t), null;
      case 5:
        Ds(t);
        var s = Vt(ur.current);
        if (n = t.type, e !== null && t.stateNode != null) Ua(e, t, n, r, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(u(166));
            return a0(t), null;
          }
          if (e = Vt(b0.current), rl(t)) {
            r = t.stateNode, n = t.type;
            var i = t.memoizedProps;
            switch (r[J0] = t, r[lr] = i, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                De("cancel", r), De("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                De("load", r);
                break;
              case "video":
              case "audio":
                for (s = 0; s < tr.length; s++) De(tr[s], r);
                break;
              case "source":
                De("error", r);
                break;
              case "img":
              case "image":
              case "link":
                De(
                  "error",
                  r
                ), De("load", r);
                break;
              case "details":
                De("toggle", r);
                break;
              case "input":
                Ge(r, i), De("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!i.multiple }, De("invalid", r);
                break;
              case "textarea":
                N0(r, i), De("invalid", r);
            }
            lt(n, i), s = null;
            for (var o in i) if (i.hasOwnProperty(o)) {
              var f = i[o];
              o === "children" ? typeof f == "string" ? r.textContent !== f && (i.suppressHydrationWarning !== !0 && qr(r.textContent, f, e), s = ["children", f]) : typeof f == "number" && r.textContent !== "" + f && (i.suppressHydrationWarning !== !0 && qr(
                r.textContent,
                f,
                e
              ), s = ["children", "" + f]) : v.hasOwnProperty(o) && f != null && o === "onScroll" && De("scroll", r);
            }
            switch (n) {
              case "input":
                Pe(r), Xe(r, i, !0);
                break;
              case "textarea":
                Pe(r), Pt(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = Jr);
            }
            r = s, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            o = s.nodeType === 9 ? s : s.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Tt(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[J0] = t, e[lr] = r, Wa(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (o = Dt(n, r), n) {
                case "dialog":
                  De("cancel", e), De("close", e), s = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  De("load", e), s = r;
                  break;
                case "video":
                case "audio":
                  for (s = 0; s < tr.length; s++) De(tr[s], e);
                  s = r;
                  break;
                case "source":
                  De("error", e), s = r;
                  break;
                case "img":
                case "image":
                case "link":
                  De(
                    "error",
                    e
                  ), De("load", e), s = r;
                  break;
                case "details":
                  De("toggle", e), s = r;
                  break;
                case "input":
                  Ge(e, r), s = qe(e, r), De("invalid", e);
                  break;
                case "option":
                  s = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, s = H({}, r, { value: void 0 }), De("invalid", e);
                  break;
                case "textarea":
                  N0(e, r), s = tt(e, r), De("invalid", e);
                  break;
                default:
                  s = r;
              }
              lt(n, s), f = s;
              for (i in f) if (f.hasOwnProperty(i)) {
                var h = f[i];
                i === "style" ? rt(e, h) : i === "dangerouslySetInnerHTML" ? (h = h ? h.__html : void 0, h != null && tn(e, h)) : i === "children" ? typeof h == "string" ? (n !== "textarea" || h !== "") && S0(e, h) : typeof h == "number" && S0(e, "" + h) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (v.hasOwnProperty(i) ? h != null && i === "onScroll" && De("scroll", e) : h != null && fe(e, i, h, o));
              }
              switch (n) {
                case "input":
                  Pe(e), Xe(e, r, !1);
                  break;
                case "textarea":
                  Pe(e), Pt(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + oe(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, i = r.value, i != null ? j0(e, !!r.multiple, i, !1) : r.defaultValue != null && j0(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof s.onClick == "function" && (e.onclick = Jr);
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
        if (e && t.stateNode != null) Qa(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(u(166));
          if (n = Vt(ur.current), Vt(b0.current), rl(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[J0] = t, (i = r.nodeValue !== n) && (e = E0, e !== null)) switch (e.tag) {
              case 3:
                qr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && qr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            i && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[J0] = t, t.stateNode = r;
        }
        return a0(t), null;
      case 13:
        if (Be(We), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Fe && A0 !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) G2(), xn(), t.flags |= 98560, i = !1;
          else if (i = rl(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(u(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(u(317));
              i[J0] = t;
            } else xn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            a0(t), i = !1;
          } else W0 !== null && (mi(W0), W0 = null), i = !0;
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (We.current & 1) !== 0 ? be === 0 && (be = 3) : gi())), t.updateQueue !== null && (t.flags |= 4), a0(t), null);
      case 4:
        return Nn(), li(e, t), e === null && nr(t.stateNode.containerInfo), a0(t), null;
      case 10:
        return _s(t.type._context), a0(t), null;
      case 17:
        return y0(t.type) && Yr(), a0(t), null;
      case 19:
        if (Be(We), i = t.memoizedState, i === null) return a0(t), null;
        if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) pr(i, !1);
        else {
          if (be !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (o = ul(e), o !== null) {
              for (t.flags |= 128, pr(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Oe(We, We.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          i.tail !== null && Ve() > An && (t.flags |= 128, r = !0, pr(i, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = ul(o), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), pr(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !Fe) return a0(t), null;
          } else 2 * Ve() - i.renderingStartTime > An && n !== 1073741824 && (t.flags |= 128, r = !0, pr(i, !1), t.lanes = 4194304);
          i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ve(), t.sibling = null, n = We.current, Oe(We, r ? n & 1 | 2 : n & 1), t) : (a0(t), null);
      case 22:
      case 23:
        return yi(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (M0 & 1073741824) !== 0 && (a0(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : a0(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function Wu(e, t) {
    switch (Es(t), t.tag) {
      case 1:
        return y0(t.type) && Yr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Nn(), Be(v0), Be(s0), Hs(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Ds(t), null;
      case 13:
        if (Be(We), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(u(340));
          xn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Be(We), null;
      case 4:
        return Nn(), null;
      case 10:
        return _s(t.type._context), null;
      case 22:
      case 23:
        return yi(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var gl = !1, o0 = !1, Uu = typeof WeakSet == "function" ? WeakSet : Set, Y = null;
  function Cn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Qe(e, t, r);
    }
    else n.current = null;
  }
  function si(e, t, n) {
    try {
      n();
    } catch (r) {
      Qe(e, t, r);
    }
  }
  var Va = !1;
  function Qu(e, t) {
    if (ys = Br, e = j2(), us(e)) {
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
          var o = 0, f = -1, h = -1, k = 0, L = 0, _ = e, M = null;
          t: for (; ; ) {
            for (var J; _ !== n || s !== 0 && _.nodeType !== 3 || (f = o + s), _ !== i || r !== 0 && _.nodeType !== 3 || (h = o + r), _.nodeType === 3 && (o += _.nodeValue.length), (J = _.firstChild) !== null; )
              M = _, _ = J;
            for (; ; ) {
              if (_ === e) break t;
              if (M === n && ++k === s && (f = o), M === i && ++L === r && (h = o), (J = _.nextSibling) !== null) break;
              _ = M, M = _.parentNode;
            }
            _ = J;
          }
          n = f === -1 || h === -1 ? null : { start: f, end: h };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (gs = { focusedElem: e, selectionRange: n }, Br = !1, Y = t; Y !== null; ) if (t = Y, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Y = e;
    else for (; Y !== null; ) {
      t = Y;
      try {
        var $ = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if ($ !== null) {
              var ee = $.memoizedProps, Ke = $.memoizedState, g = t.stateNode, m = g.getSnapshotBeforeUpdate(t.elementType === t.type ? ee : U0(t.type, ee), Ke);
              g.__reactInternalSnapshotBeforeUpdate = m;
            }
            break;
          case 3:
            var w = t.stateNode.containerInfo;
            w.nodeType === 1 ? w.textContent = "" : w.nodeType === 9 && w.documentElement && w.removeChild(w.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(u(163));
        }
      } catch (T) {
        Qe(t, t.return, T);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, Y = e;
        break;
      }
      Y = t.return;
    }
    return $ = Va, Va = !1, $;
  }
  function mr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var s = r = r.next;
      do {
        if ((s.tag & e) === e) {
          var i = s.destroy;
          s.destroy = void 0, i !== void 0 && si(t, n, i);
        }
        s = s.next;
      } while (s !== r);
    }
  }
  function xl(e, t) {
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
  function ii(e) {
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
  function Ka(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Ka(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[J0], delete t[lr], delete t[js], delete t[Cu], delete t[Eu])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Ga(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Xa(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ga(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ai(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Jr));
    else if (r !== 4 && (e = e.child, e !== null)) for (ai(e, t, n), e = e.sibling; e !== null; ) ai(e, t, n), e = e.sibling;
  }
  function oi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (oi(e, t, n), e = e.sibling; e !== null; ) oi(e, t, n), e = e.sibling;
  }
  var t0 = null, Q0 = !1;
  function Et(e, t, n) {
    for (n = n.child; n !== null; ) Za(e, t, n), n = n.sibling;
  }
  function Za(e, t, n) {
    if (q0 && typeof q0.onCommitFiberUnmount == "function") try {
      q0.onCommitFiberUnmount(_r, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        o0 || Cn(n, t);
      case 6:
        var r = t0, s = Q0;
        t0 = null, Et(e, t, n), t0 = r, Q0 = s, t0 !== null && (Q0 ? (e = t0, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : t0.removeChild(n.stateNode));
        break;
      case 18:
        t0 !== null && (Q0 ? (e = t0, n = n.stateNode, e.nodeType === 8 ? ks(e.parentNode, n) : e.nodeType === 1 && ks(e, n), Xn(e)) : ks(t0, n.stateNode));
        break;
      case 4:
        r = t0, s = Q0, t0 = n.stateNode.containerInfo, Q0 = !0, Et(e, t, n), t0 = r, Q0 = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!o0 && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          s = r = r.next;
          do {
            var i = s, o = i.destroy;
            i = i.tag, o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && si(n, t, o), s = s.next;
          } while (s !== r);
        }
        Et(e, t, n);
        break;
      case 1:
        if (!o0 && (Cn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (f) {
          Qe(n, t, f);
        }
        Et(e, t, n);
        break;
      case 21:
        Et(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (o0 = (r = o0) || n.memoizedState !== null, Et(e, t, n), o0 = r) : Et(e, t, n);
        break;
      default:
        Et(e, t, n);
    }
  }
  function qa(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Uu()), t.forEach(function(r) {
        var s = Yu.bind(null, e, r);
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
              t0 = f.stateNode, Q0 = !1;
              break e;
            case 3:
              t0 = f.stateNode.containerInfo, Q0 = !0;
              break e;
            case 4:
              t0 = f.stateNode.containerInfo, Q0 = !0;
              break e;
          }
          f = f.return;
        }
        if (t0 === null) throw Error(u(160));
        Za(i, o, s), t0 = null, Q0 = !1;
        var h = s.alternate;
        h !== null && (h.return = null), s.return = null;
      } catch (k) {
        Qe(s, t, k);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Ja(t, e), t = t.sibling;
  }
  function Ja(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (V0(t, e), $0(e), r & 4) {
          try {
            mr(3, e, e.return), xl(3, e);
          } catch (ee) {
            Qe(e, e.return, ee);
          }
          try {
            mr(5, e, e.return);
          } catch (ee) {
            Qe(e, e.return, ee);
          }
        }
        break;
      case 1:
        V0(t, e), $0(e), r & 512 && n !== null && Cn(n, n.return);
        break;
      case 5:
        if (V0(t, e), $0(e), r & 512 && n !== null && Cn(n, n.return), e.flags & 32) {
          var s = e.stateNode;
          try {
            S0(s, "");
          } catch (ee) {
            Qe(e, e.return, ee);
          }
        }
        if (r & 4 && (s = e.stateNode, s != null)) {
          var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, f = e.type, h = e.updateQueue;
          if (e.updateQueue = null, h !== null) try {
            f === "input" && i.type === "radio" && i.name != null && et(s, i), Dt(f, o);
            var k = Dt(f, i);
            for (o = 0; o < h.length; o += 2) {
              var L = h[o], _ = h[o + 1];
              L === "style" ? rt(s, _) : L === "dangerouslySetInnerHTML" ? tn(s, _) : L === "children" ? S0(s, _) : fe(s, L, _, k);
            }
            switch (f) {
              case "input":
                Ne(s, i);
                break;
              case "textarea":
                nt(s, i);
                break;
              case "select":
                var M = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!i.multiple;
                var J = i.value;
                J != null ? j0(s, !!i.multiple, J, !1) : M !== !!i.multiple && (i.defaultValue != null ? j0(
                  s,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : j0(s, !!i.multiple, i.multiple ? [] : "", !1));
            }
            s[lr] = i;
          } catch (ee) {
            Qe(e, e.return, ee);
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
            Qe(e, e.return, ee);
          }
        }
        break;
      case 3:
        if (V0(t, e), $0(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Xn(t.containerInfo);
        } catch (ee) {
          Qe(e, e.return, ee);
        }
        break;
      case 4:
        V0(t, e), $0(e);
        break;
      case 13:
        V0(t, e), $0(e), s = e.child, s.flags & 8192 && (i = s.memoizedState !== null, s.stateNode.isHidden = i, !i || s.alternate !== null && s.alternate.memoizedState !== null || (di = Ve())), r & 4 && qa(e);
        break;
      case 22:
        if (L = n !== null && n.memoizedState !== null, e.mode & 1 ? (o0 = (k = o0) || L, V0(t, e), o0 = k) : V0(t, e), $0(e), r & 8192) {
          if (k = e.memoizedState !== null, (e.stateNode.isHidden = k) && !L && (e.mode & 1) !== 0) for (Y = e, L = e.child; L !== null; ) {
            for (_ = Y = L; Y !== null; ) {
              switch (M = Y, J = M.child, M.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  mr(4, M, M.return);
                  break;
                case 1:
                  Cn(M, M.return);
                  var $ = M.stateNode;
                  if (typeof $.componentWillUnmount == "function") {
                    r = M, n = M.return;
                    try {
                      t = r, $.props = t.memoizedProps, $.state = t.memoizedState, $.componentWillUnmount();
                    } catch (ee) {
                      Qe(r, n, ee);
                    }
                  }
                  break;
                case 5:
                  Cn(M, M.return);
                  break;
                case 22:
                  if (M.memoizedState !== null) {
                    $a(_);
                    continue;
                  }
              }
              J !== null ? (J.return = M, Y = J) : $a(_);
            }
            L = L.sibling;
          }
          e: for (L = null, _ = e; ; ) {
            if (_.tag === 5) {
              if (L === null) {
                L = _;
                try {
                  s = _.stateNode, k ? (i = s.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (f = _.stateNode, h = _.memoizedProps.style, o = h != null && h.hasOwnProperty("display") ? h.display : null, f.style.display = Tn("display", o));
                } catch (ee) {
                  Qe(e, e.return, ee);
                }
              }
            } else if (_.tag === 6) {
              if (L === null) try {
                _.stateNode.nodeValue = k ? "" : _.memoizedProps;
              } catch (ee) {
                Qe(e, e.return, ee);
              }
            } else if ((_.tag !== 22 && _.tag !== 23 || _.memoizedState === null || _ === e) && _.child !== null) {
              _.child.return = _, _ = _.child;
              continue;
            }
            if (_ === e) break e;
            for (; _.sibling === null; ) {
              if (_.return === null || _.return === e) break e;
              L === _ && (L = null), _ = _.return;
            }
            L === _ && (L = null), _.sibling.return = _.return, _ = _.sibling;
          }
        }
        break;
      case 19:
        V0(t, e), $0(e), r & 4 && qa(e);
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
            if (Ga(n)) {
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
            r.flags & 32 && (S0(s, ""), r.flags &= -33);
            var i = Xa(e);
            oi(e, i, s);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo, f = Xa(e);
            ai(e, f, o);
            break;
          default:
            throw Error(u(161));
        }
      } catch (h) {
        Qe(e, e.return, h);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Vu(e, t, n) {
    Y = e, ba(e);
  }
  function ba(e, t, n) {
    for (var r = (e.mode & 1) !== 0; Y !== null; ) {
      var s = Y, i = s.child;
      if (s.tag === 22 && r) {
        var o = s.memoizedState !== null || gl;
        if (!o) {
          var f = s.alternate, h = f !== null && f.memoizedState !== null || o0;
          f = gl;
          var k = o0;
          if (gl = o, (o0 = h) && !k) for (Y = s; Y !== null; ) o = Y, h = o.child, o.tag === 22 && o.memoizedState !== null ? eo(s) : h !== null ? (h.return = o, Y = h) : eo(s);
          for (; i !== null; ) Y = i, ba(i), i = i.sibling;
          Y = s, gl = f, o0 = k;
        }
        Ya(e);
      } else (s.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = s, Y = i) : Ya(e);
    }
  }
  function Ya(e) {
    for (; Y !== null; ) {
      var t = Y;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              o0 || xl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !o0) if (n === null) r.componentDidMount();
              else {
                var s = t.elementType === t.type ? n.memoizedProps : U0(t.type, n.memoizedProps);
                r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var i = t.updateQueue;
              i !== null && $2(t, i, r);
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
                $2(t, o, n);
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
                var k = t.alternate;
                if (k !== null) {
                  var L = k.memoizedState;
                  if (L !== null) {
                    var _ = L.dehydrated;
                    _ !== null && Xn(_);
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
          o0 || t.flags & 512 && ii(t);
        } catch (M) {
          Qe(t, t.return, M);
        }
      }
      if (t === e) {
        Y = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, Y = n;
        break;
      }
      Y = t.return;
    }
  }
  function $a(e) {
    for (; Y !== null; ) {
      var t = Y;
      if (t === e) {
        Y = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, Y = n;
        break;
      }
      Y = t.return;
    }
  }
  function eo(e) {
    for (; Y !== null; ) {
      var t = Y;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              xl(4, t);
            } catch (h) {
              Qe(t, n, h);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var s = t.return;
              try {
                r.componentDidMount();
              } catch (h) {
                Qe(t, s, h);
              }
            }
            var i = t.return;
            try {
              ii(t);
            } catch (h) {
              Qe(t, i, h);
            }
            break;
          case 5:
            var o = t.return;
            try {
              ii(t);
            } catch (h) {
              Qe(t, o, h);
            }
        }
      } catch (h) {
        Qe(t, t.return, h);
      }
      if (t === e) {
        Y = null;
        break;
      }
      var f = t.sibling;
      if (f !== null) {
        f.return = t.return, Y = f;
        break;
      }
      Y = t.return;
    }
  }
  var Ku = Math.ceil, wl = F.ReactCurrentDispatcher, ui = F.ReactCurrentOwner, T0 = F.ReactCurrentBatchConfig, Ee = 0, $e = null, Ze = null, n0 = 0, M0 = 0, En = kt(0), be = 0, vr = null, Gt = 0, kl = 0, ci = 0, yr = null, x0 = null, di = 0, An = 1 / 0, ft = null, jl = !1, fi = null, At = null, Nl = !1, Mt = null, Sl = 0, gr = 0, hi = null, Cl = -1, El = 0;
  function f0() {
    return (Ee & 6) !== 0 ? Ve() : Cl !== -1 ? Cl : Cl = Ve();
  }
  function Lt(e) {
    return (e.mode & 1) === 0 ? 1 : (Ee & 2) !== 0 && n0 !== 0 ? n0 & -n0 : Mu.transition !== null ? (El === 0 && (El = Xi()), El) : (e = _e, e !== 0 || (e = window.event, e = e === void 0 ? 16 : n2(e.type)), e);
  }
  function K0(e, t, n, r) {
    if (50 < gr) throw gr = 0, hi = null, Error(u(185));
    Un(e, n, r), ((Ee & 2) === 0 || e !== $e) && (e === $e && ((Ee & 2) === 0 && (kl |= n), be === 4 && zt(e, n0)), w0(e, r), n === 1 && Ee === 0 && (t.mode & 1) === 0 && (An = Ve() + 500, el && Nt()));
  }
  function w0(e, t) {
    var n = e.callbackNode;
    M1(e, t);
    var r = Ir(e, e === $e ? n0 : 0);
    if (r === 0) n !== null && He(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && He(n), t === 1) e.tag === 0 ? Au(no.bind(null, e)) : W2(no.bind(null, e)), Nu(function() {
        (Ee & 6) === 0 && Nt();
      }), n = null;
      else {
        switch (Zi(r)) {
          case 1:
            n = Gl;
            break;
          case 4:
            n = Ki;
            break;
          case 16:
            n = Rr;
            break;
          case 536870912:
            n = Gi;
            break;
          default:
            n = Rr;
        }
        n = co(n, to.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function to(e, t) {
    if (Cl = -1, El = 0, (Ee & 6) !== 0) throw Error(u(327));
    var n = e.callbackNode;
    if (Mn() && e.callbackNode !== n) return null;
    var r = Ir(e, e === $e ? n0 : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Al(e, r);
    else {
      t = r;
      var s = Ee;
      Ee |= 2;
      var i = lo();
      ($e !== e || n0 !== t) && (ft = null, An = Ve() + 500, Zt(e, t));
      do
        try {
          Zu();
          break;
        } catch (f) {
          ro(e, f);
        }
      while (!0);
      Rs(), wl.current = i, Ee = s, Ze !== null ? t = 0 : ($e = null, n0 = 0, t = be);
    }
    if (t !== 0) {
      if (t === 2 && (s = Xl(e), s !== 0 && (r = s, t = pi(e, s))), t === 1) throw n = vr, Zt(e, 0), zt(e, r), w0(e, Ve()), n;
      if (t === 6) zt(e, r);
      else {
        if (s = e.current.alternate, (r & 30) === 0 && !Gu(s) && (t = Al(e, r), t === 2 && (i = Xl(e), i !== 0 && (r = i, t = pi(e, i))), t === 1)) throw n = vr, Zt(e, 0), zt(e, r), w0(e, Ve()), n;
        switch (e.finishedWork = s, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            qt(e, x0, ft);
            break;
          case 3:
            if (zt(e, r), (r & 130023424) === r && (t = di + 500 - Ve(), 10 < t)) {
              if (Ir(e, 0) !== 0) break;
              if (s = e.suspendedLanes, (s & r) !== r) {
                f0(), e.pingedLanes |= e.suspendedLanes & s;
                break;
              }
              e.timeoutHandle = ws(qt.bind(null, e, x0, ft), t);
              break;
            }
            qt(e, x0, ft);
            break;
          case 4:
            if (zt(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, s = -1; 0 < r; ) {
              var o = 31 - H0(r);
              i = 1 << o, o = t[o], o > s && (s = o), r &= ~i;
            }
            if (r = s, r = Ve() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ku(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = ws(qt.bind(null, e, x0, ft), r);
              break;
            }
            qt(e, x0, ft);
            break;
          case 5:
            qt(e, x0, ft);
            break;
          default:
            throw Error(u(329));
        }
      }
    }
    return w0(e, Ve()), e.callbackNode === n ? to.bind(null, e) : null;
  }
  function pi(e, t) {
    var n = yr;
    return e.current.memoizedState.isDehydrated && (Zt(e, t).flags |= 256), e = Al(e, t), e !== 2 && (t = x0, x0 = n, t !== null && mi(t)), e;
  }
  function mi(e) {
    x0 === null ? x0 = e : x0.push.apply(x0, e);
  }
  function Gu(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var s = n[r], i = s.getSnapshot;
          s = s.value;
          try {
            if (!F0(i(), s)) return !1;
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
  function zt(e, t) {
    for (t &= ~ci, t &= ~kl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - H0(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function no(e) {
    if ((Ee & 6) !== 0) throw Error(u(327));
    Mn();
    var t = Ir(e, 0);
    if ((t & 1) === 0) return w0(e, Ve()), null;
    var n = Al(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Xl(e);
      r !== 0 && (t = r, n = pi(e, r));
    }
    if (n === 1) throw n = vr, Zt(e, 0), zt(e, t), w0(e, Ve()), n;
    if (n === 6) throw Error(u(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, qt(e, x0, ft), w0(e, Ve()), null;
  }
  function vi(e, t) {
    var n = Ee;
    Ee |= 1;
    try {
      return e(t);
    } finally {
      Ee = n, Ee === 0 && (An = Ve() + 500, el && Nt());
    }
  }
  function Xt(e) {
    Mt !== null && Mt.tag === 0 && (Ee & 6) === 0 && Mn();
    var t = Ee;
    Ee |= 1;
    var n = T0.transition, r = _e;
    try {
      if (T0.transition = null, _e = 1, e) return e();
    } finally {
      _e = r, T0.transition = n, Ee = t, (Ee & 6) === 0 && Nt();
    }
  }
  function yi() {
    M0 = En.current, Be(En);
  }
  function Zt(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, ju(n)), Ze !== null) for (n = Ze.return; n !== null; ) {
      var r = n;
      switch (Es(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Yr();
          break;
        case 3:
          Nn(), Be(v0), Be(s0), Hs();
          break;
        case 5:
          Ds(r);
          break;
        case 4:
          Nn();
          break;
        case 13:
          Be(We);
          break;
        case 19:
          Be(We);
          break;
        case 10:
          _s(r.type._context);
          break;
        case 22:
        case 23:
          yi();
      }
      n = n.return;
    }
    if ($e = e, Ze = e = Rt(e.current, null), n0 = M0 = t, be = 0, vr = null, ci = kl = Gt = 0, x0 = yr = null, Qt !== null) {
      for (t = 0; t < Qt.length; t++) if (n = Qt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var s = r.next, i = n.pending;
        if (i !== null) {
          var o = i.next;
          i.next = s, r.next = o;
        }
        n.pending = r;
      }
      Qt = null;
    }
    return e;
  }
  function ro(e, t) {
    do {
      var n = Ze;
      try {
        if (Rs(), cl.current = pl, dl) {
          for (var r = Ue.memoizedState; r !== null; ) {
            var s = r.queue;
            s !== null && (s.pending = null), r = r.next;
          }
          dl = !1;
        }
        if (Kt = 0, Ye = Je = Ue = null, cr = !1, dr = 0, ui.current = null, n === null || n.return === null) {
          be = 1, vr = t, Ze = null;
          break;
        }
        e: {
          var i = e, o = n.return, f = n, h = t;
          if (t = n0, f.flags |= 32768, h !== null && typeof h == "object" && typeof h.then == "function") {
            var k = h, L = f, _ = L.tag;
            if ((L.mode & 1) === 0 && (_ === 0 || _ === 11 || _ === 15)) {
              var M = L.alternate;
              M ? (L.updateQueue = M.updateQueue, L.memoizedState = M.memoizedState, L.lanes = M.lanes) : (L.updateQueue = null, L.memoizedState = null);
            }
            var J = Ma(o);
            if (J !== null) {
              J.flags &= -257, La(J, o, f, i, t), J.mode & 1 && Aa(i, k, t), t = J, h = k;
              var $ = t.updateQueue;
              if ($ === null) {
                var ee = /* @__PURE__ */ new Set();
                ee.add(h), t.updateQueue = ee;
              } else $.add(h);
              break e;
            } else {
              if ((t & 1) === 0) {
                Aa(i, k, t), gi();
                break e;
              }
              h = Error(u(426));
            }
          } else if (Fe && f.mode & 1) {
            var Ke = Ma(o);
            if (Ke !== null) {
              (Ke.flags & 65536) === 0 && (Ke.flags |= 256), La(Ke, o, f, i, t), Ls(Sn(h, f));
              break e;
            }
          }
          i = h = Sn(h, f), be !== 4 && (be = 2), yr === null ? yr = [i] : yr.push(i), i = o;
          do {
            switch (i.tag) {
              case 3:
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var g = Ca(i, h, t);
                Y2(i, g);
                break e;
              case 1:
                f = h;
                var m = i.type, w = i.stateNode;
                if ((i.flags & 128) === 0 && (typeof m.getDerivedStateFromError == "function" || w !== null && typeof w.componentDidCatch == "function" && (At === null || !At.has(w)))) {
                  i.flags |= 65536, t &= -t, i.lanes |= t;
                  var T = Ea(i, f, t);
                  Y2(i, T);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        io(n);
      } catch (ne) {
        t = ne, Ze === n && n !== null && (Ze = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function lo() {
    var e = wl.current;
    return wl.current = pl, e === null ? pl : e;
  }
  function gi() {
    (be === 0 || be === 3 || be === 2) && (be = 4), $e === null || (Gt & 268435455) === 0 && (kl & 268435455) === 0 || zt($e, n0);
  }
  function Al(e, t) {
    var n = Ee;
    Ee |= 2;
    var r = lo();
    ($e !== e || n0 !== t) && (ft = null, Zt(e, t));
    do
      try {
        Xu();
        break;
      } catch (s) {
        ro(e, s);
      }
    while (!0);
    if (Rs(), Ee = n, wl.current = r, Ze !== null) throw Error(u(261));
    return $e = null, n0 = 0, be;
  }
  function Xu() {
    for (; Ze !== null; ) so(Ze);
  }
  function Zu() {
    for (; Ze !== null && !m0(); ) so(Ze);
  }
  function so(e) {
    var t = uo(e.alternate, e, M0);
    e.memoizedProps = e.pendingProps, t === null ? io(e) : Ze = t, ui.current = null;
  }
  function io(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Fu(n, t, M0), n !== null) {
          Ze = n;
          return;
        }
      } else {
        if (n = Wu(n, t), n !== null) {
          n.flags &= 32767, Ze = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          be = 6, Ze = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Ze = t;
        return;
      }
      Ze = t = e;
    } while (t !== null);
    be === 0 && (be = 5);
  }
  function qt(e, t, n) {
    var r = _e, s = T0.transition;
    try {
      T0.transition = null, _e = 1, qu(e, t, n, r);
    } finally {
      T0.transition = s, _e = r;
    }
    return null;
  }
  function qu(e, t, n, r) {
    do
      Mn();
    while (Mt !== null);
    if ((Ee & 6) !== 0) throw Error(u(327));
    n = e.finishedWork;
    var s = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(u(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (L1(e, i), e === $e && (Ze = $e = null, n0 = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Nl || (Nl = !0, co(Rr, function() {
      return Mn(), null;
    })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
      i = T0.transition, T0.transition = null;
      var o = _e;
      _e = 1;
      var f = Ee;
      Ee |= 4, ui.current = null, Qu(e, n), Ja(n, e), mu(gs), Br = !!ys, gs = ys = null, e.current = n, Vu(n), sn(), Ee = f, _e = o, T0.transition = i;
    } else e.current = n;
    if (Nl && (Nl = !1, Mt = e, Sl = s), i = e.pendingLanes, i === 0 && (At = null), N1(n.stateNode), w0(e, Ve()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) s = t[n], r(s.value, { componentStack: s.stack, digest: s.digest });
    if (jl) throw jl = !1, e = fi, fi = null, e;
    return (Sl & 1) !== 0 && e.tag !== 0 && Mn(), i = e.pendingLanes, (i & 1) !== 0 ? e === hi ? gr++ : (gr = 0, hi = e) : gr = 0, Nt(), null;
  }
  function Mn() {
    if (Mt !== null) {
      var e = Zi(Sl), t = T0.transition, n = _e;
      try {
        if (T0.transition = null, _e = 16 > e ? 16 : e, Mt === null) var r = !1;
        else {
          if (e = Mt, Mt = null, Sl = 0, (Ee & 6) !== 0) throw Error(u(331));
          var s = Ee;
          for (Ee |= 4, Y = e.current; Y !== null; ) {
            var i = Y, o = i.child;
            if ((Y.flags & 16) !== 0) {
              var f = i.deletions;
              if (f !== null) {
                for (var h = 0; h < f.length; h++) {
                  var k = f[h];
                  for (Y = k; Y !== null; ) {
                    var L = Y;
                    switch (L.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mr(8, L, i);
                    }
                    var _ = L.child;
                    if (_ !== null) _.return = L, Y = _;
                    else for (; Y !== null; ) {
                      L = Y;
                      var M = L.sibling, J = L.return;
                      if (Ka(L), L === k) {
                        Y = null;
                        break;
                      }
                      if (M !== null) {
                        M.return = J, Y = M;
                        break;
                      }
                      Y = J;
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
                Y = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && o !== null) o.return = i, Y = o;
            else e: for (; Y !== null; ) {
              if (i = Y, (i.flags & 2048) !== 0) switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  mr(9, i, i.return);
              }
              var g = i.sibling;
              if (g !== null) {
                g.return = i.return, Y = g;
                break e;
              }
              Y = i.return;
            }
          }
          var m = e.current;
          for (Y = m; Y !== null; ) {
            o = Y;
            var w = o.child;
            if ((o.subtreeFlags & 2064) !== 0 && w !== null) w.return = o, Y = w;
            else e: for (o = m; Y !== null; ) {
              if (f = Y, (f.flags & 2048) !== 0) try {
                switch (f.tag) {
                  case 0:
                  case 11:
                  case 15:
                    xl(9, f);
                }
              } catch (ne) {
                Qe(f, f.return, ne);
              }
              if (f === o) {
                Y = null;
                break e;
              }
              var T = f.sibling;
              if (T !== null) {
                T.return = f.return, Y = T;
                break e;
              }
              Y = f.return;
            }
          }
          if (Ee = s, Nt(), q0 && typeof q0.onPostCommitFiberRoot == "function") try {
            q0.onPostCommitFiberRoot(_r, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        _e = n, T0.transition = t;
      }
    }
    return !1;
  }
  function ao(e, t, n) {
    t = Sn(n, t), t = Ca(e, t, 1), e = Ct(e, t, 1), t = f0(), e !== null && (Un(e, 1, t), w0(e, t));
  }
  function Qe(e, t, n) {
    if (e.tag === 3) ao(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        ao(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (At === null || !At.has(r))) {
          e = Sn(n, e), e = Ea(t, e, 1), t = Ct(t, e, 1), e = f0(), t !== null && (Un(t, 1, e), w0(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Ju(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = f0(), e.pingedLanes |= e.suspendedLanes & n, $e === e && (n0 & n) === n && (be === 4 || be === 3 && (n0 & 130023424) === n0 && 500 > Ve() - di ? Zt(e, 0) : ci |= n), w0(e, t);
  }
  function oo(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Tr, Tr <<= 1, (Tr & 130023424) === 0 && (Tr = 4194304)));
    var n = f0();
    e = ut(e, t), e !== null && (Un(e, t, n), w0(e, n));
  }
  function bu(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), oo(e, n);
  }
  function Yu(e, t) {
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
    r !== null && r.delete(t), oo(e, n);
  }
  var uo;
  uo = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || v0.current) g0 = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return g0 = !1, Hu(e, t, n);
      g0 = (e.flags & 131072) !== 0;
    }
    else g0 = !1, Fe && (t.flags & 1048576) !== 0 && U2(t, nl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        yl(e, t), e = t.pendingProps;
        var s = vn(t, s0.current);
        jn(t, n), s = Us(null, t, r, e, s, n);
        var i = Qs();
        return t.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, y0(r) ? (i = !0, $r(t)) : i = !1, t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, Is(t), s.updater = ml, t.stateNode = s, s._reactInternals = t, qs(t, r, e, n), t = $s(null, t, r, !0, i, n)) : (t.tag = 0, Fe && i && Cs(t), d0(null, t, s, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (yl(e, t), e = t.pendingProps, s = r._init, r = s(r._payload), t.type = r, s = t.tag = ec(r), e = U0(r, e), s) {
            case 0:
              t = Ys(null, t, r, e, n);
              break e;
            case 1:
              t = Ia(null, t, r, e, n);
              break e;
            case 11:
              t = za(null, t, r, e, n);
              break e;
            case 14:
              t = Ra(null, t, r, U0(r.type, e), n);
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
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : U0(r, s), Ys(e, t, r, s, n);
      case 1:
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : U0(r, s), Ia(e, t, r, s, n);
      case 3:
        e: {
          if (Oa(t), e === null) throw Error(u(387));
          r = t.pendingProps, i = t.memoizedState, s = i.element, b2(e, t), ol(t, r, null, n);
          var o = t.memoizedState;
          if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            s = Sn(Error(u(423)), t), t = Da(e, t, r, n, s);
            break e;
          } else if (r !== s) {
            s = Sn(Error(u(424)), t), t = Da(e, t, r, n, s);
            break e;
          } else for (A0 = wt(t.stateNode.containerInfo.firstChild), E0 = t, Fe = !0, W0 = null, n = q2(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (xn(), r === s) {
              t = dt(e, t, n);
              break e;
            }
            d0(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return ea(t), e === null && Ms(t), r = t.type, s = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = s.children, xs(r, s) ? o = null : i !== null && xs(r, i) && (t.flags |= 32), Ta(e, t), d0(e, t, o, n), t.child;
      case 6:
        return e === null && Ms(t), null;
      case 13:
        return Ba(e, t, n);
      case 4:
        return Os(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = wn(t, null, r, n) : d0(e, t, r, n), t.child;
      case 11:
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : U0(r, s), za(e, t, r, s, n);
      case 7:
        return d0(e, t, t.pendingProps, n), t.child;
      case 8:
        return d0(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return d0(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, s = t.pendingProps, i = t.memoizedProps, o = s.value, Oe(sl, r._currentValue), r._currentValue = o, i !== null) if (F0(i.value, o)) {
            if (i.children === s.children && !v0.current) {
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
                    var k = i.updateQueue;
                    if (k !== null) {
                      k = k.shared;
                      var L = k.pending;
                      L === null ? h.next = h : (h.next = L.next, L.next = h), k.pending = h;
                    }
                  }
                  i.lanes |= n, h = i.alternate, h !== null && (h.lanes |= n), Ps(
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
              o.lanes |= n, f = o.alternate, f !== null && (f.lanes |= n), Ps(o, n, t), o = i.sibling;
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
        return s = t.type, r = t.pendingProps.children, jn(t, n), s = _0(s), r = r(s), t.flags |= 1, d0(e, t, r, n), t.child;
      case 14:
        return r = t.type, s = U0(r, t.pendingProps), s = U0(r.type, s), Ra(e, t, r, s, n);
      case 15:
        return _a(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : U0(r, s), yl(e, t), t.tag = 1, y0(r) ? (e = !0, $r(t)) : e = !1, jn(t, n), Na(t, r, s), qs(t, r, s, n), $s(null, t, r, !0, e, n);
      case 19:
        return Fa(e, t, n);
      case 22:
        return Pa(e, t, n);
    }
    throw Error(u(156, t.tag));
  };
  function co(e, t) {
    return Fn(e, t);
  }
  function $u(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function I0(e, t, n, r) {
    return new $u(e, t, n, r);
  }
  function xi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ec(e) {
    if (typeof e == "function") return xi(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === he) return 11;
      if (e === ze) return 14;
    }
    return 2;
  }
  function Rt(e, t) {
    var n = e.alternate;
    return n === null ? (n = I0(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Ml(e, t, n, r, s, i) {
    var o = 2;
    if (r = e, typeof e == "function") xi(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
      case G:
        return Jt(n.children, s, i, t);
      case D:
        o = 8, s |= 8;
        break;
      case je:
        return e = I0(12, n, t, s | 2), e.elementType = je, e.lanes = i, e;
      case ye:
        return e = I0(13, n, t, s), e.elementType = ye, e.lanes = i, e;
      case ke:
        return e = I0(19, n, t, s), e.elementType = ke, e.lanes = i, e;
      case ve:
        return Ll(n, s, i, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case me:
            o = 10;
            break e;
          case pe:
            o = 9;
            break e;
          case he:
            o = 11;
            break e;
          case ze:
            o = 14;
            break e;
          case Ce:
            o = 16, r = null;
            break e;
        }
        throw Error(u(130, e == null ? e : typeof e, ""));
    }
    return t = I0(o, n, t, s), t.elementType = e, t.type = r, t.lanes = i, t;
  }
  function Jt(e, t, n, r) {
    return e = I0(7, e, r, t), e.lanes = n, e;
  }
  function Ll(e, t, n, r) {
    return e = I0(22, e, r, t), e.elementType = ve, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function wi(e, t, n) {
    return e = I0(6, e, null, t), e.lanes = n, e;
  }
  function ki(e, t, n) {
    return t = I0(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function tc(e, t, n, r, s) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Zl(0), this.expirationTimes = Zl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zl(0), this.identifierPrefix = r, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null;
  }
  function ji(e, t, n, r, s, i, o, f, h) {
    return e = new tc(e, t, n, f, h), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = I0(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Is(i), e;
  }
  function nc(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: le, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function fo(e) {
    if (!e) return jt;
    e = e._reactInternals;
    e: {
      if (B0(e) !== e || e.tag !== 1) throw Error(u(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (y0(t.type)) {
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
      if (y0(n)) return H2(e, n, t);
    }
    return t;
  }
  function ho(e, t, n, r, s, i, o, f, h) {
    return e = ji(n, r, !0, e, s, i, o, f, h), e.context = fo(null), n = e.current, r = f0(), s = Lt(n), i = ct(r, s), i.callback = t ?? null, Ct(n, i, s), e.current.lanes = s, Un(e, s, r), w0(e, r), e;
  }
  function zl(e, t, n, r) {
    var s = t.current, i = f0(), o = Lt(s);
    return n = fo(n), t.context === null ? t.context = n : t.pendingContext = n, t = ct(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ct(s, t, o), e !== null && (K0(e, s, o, i), al(e, s, o)), o;
  }
  function Rl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function po(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ni(e, t) {
    po(e, t), (e = e.alternate) && po(e, t);
  }
  function rc() {
    return null;
  }
  var mo = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Si(e) {
    this._internalRoot = e;
  }
  _l.prototype.render = Si.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(u(409));
    zl(e, t, null, null);
  }, _l.prototype.unmount = Si.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Xt(function() {
        zl(null, e, null, null);
      }), t[st] = null;
    }
  };
  function _l(e) {
    this._internalRoot = e;
  }
  _l.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = bi();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < yt.length && t !== 0 && t < yt[n].priority; n++) ;
      yt.splice(n, 0, e), n === 0 && e2(e);
    }
  };
  function Ci(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Pl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function vo() {
  }
  function lc(e, t, n, r, s) {
    if (s) {
      if (typeof r == "function") {
        var i = r;
        r = function() {
          var k = Rl(o);
          i.call(k);
        };
      }
      var o = ho(t, r, e, 0, null, !1, !1, "", vo);
      return e._reactRootContainer = o, e[st] = o.current, nr(e.nodeType === 8 ? e.parentNode : e), Xt(), o;
    }
    for (; s = e.lastChild; ) e.removeChild(s);
    if (typeof r == "function") {
      var f = r;
      r = function() {
        var k = Rl(h);
        f.call(k);
      };
    }
    var h = ji(e, 0, !1, null, null, !1, !1, "", vo);
    return e._reactRootContainer = h, e[st] = h.current, nr(e.nodeType === 8 ? e.parentNode : e), Xt(function() {
      zl(t, h, n, r);
    }), h;
  }
  function Tl(e, t, n, r, s) {
    var i = n._reactRootContainer;
    if (i) {
      var o = i;
      if (typeof s == "function") {
        var f = s;
        s = function() {
          var h = Rl(o);
          f.call(h);
        };
      }
      zl(t, o, e, s);
    } else o = lc(n, t, e, s, r);
    return Rl(o);
  }
  qi = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Wn(t.pendingLanes);
          n !== 0 && (ql(t, n | 1), w0(t, Ve()), (Ee & 6) === 0 && (An = Ve() + 500, Nt()));
        }
        break;
      case 13:
        Xt(function() {
          var r = ut(e, 1);
          if (r !== null) {
            var s = f0();
            K0(r, e, 1, s);
          }
        }), Ni(e, 1);
    }
  }, Jl = function(e) {
    if (e.tag === 13) {
      var t = ut(e, 134217728);
      if (t !== null) {
        var n = f0();
        K0(t, e, 134217728, n);
      }
      Ni(e, 134217728);
    }
  }, Ji = function(e) {
    if (e.tag === 13) {
      var t = Lt(e), n = ut(e, t);
      if (n !== null) {
        var r = f0();
        K0(n, e, t, r);
      }
      Ni(e, t);
    }
  }, bi = function() {
    return _e;
  }, Yi = function(e, t) {
    var n = _e;
    try {
      return _e = e, t();
    } finally {
      _e = n;
    }
  }, Bt = function(e, t, n) {
    switch (t) {
      case "input":
        if (Ne(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var s = br(r);
              if (!s) throw Error(u(90));
              Ae(r), Ne(r, s);
            }
          }
        }
        break;
      case "textarea":
        nt(e, n);
        break;
      case "select":
        t = n.value, t != null && j0(e, !!n.multiple, t, !1);
    }
  }, Lr = vi, q = Xt;
  var sc = { usingClientEntryPoint: !1, Events: [sr, pn, br, In, Mr, vi] }, xr = { findFiberByHostInstance: Ht, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ic = { bundleType: xr.bundleType, version: xr.version, rendererPackageName: xr.rendererPackageName, rendererConfig: xr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: F.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Bn(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: xr.findFiberByHostInstance || rc, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Il = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Il.isDisabled && Il.supportsFiber) try {
      _r = Il.inject(ic), q0 = Il;
    } catch {
    }
  }
  return k0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sc, k0.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ci(t)) throw Error(u(200));
    return nc(e, t, null, n);
  }, k0.createRoot = function(e, t) {
    if (!Ci(e)) throw Error(u(299));
    var n = !1, r = "", s = mo;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = ji(e, 1, !1, null, null, n, !1, r, s), e[st] = t.current, nr(e.nodeType === 8 ? e.parentNode : e), new Si(t);
  }, k0.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = Bn(t), e = e === null ? null : e.stateNode, e;
  }, k0.flushSync = function(e) {
    return Xt(e);
  }, k0.hydrate = function(e, t, n) {
    if (!Pl(t)) throw Error(u(200));
    return Tl(null, e, t, !0, n);
  }, k0.hydrateRoot = function(e, t, n) {
    if (!Ci(e)) throw Error(u(405));
    var r = n != null && n.hydratedSources || null, s = !1, i = "", o = mo;
    if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = ho(t, null, e, 1, n ?? null, s, !1, i, o), e[st] = t.current, nr(e), r) for (e = 0; e < r.length; e++) n = r[e], s = n._getVersion, s = s(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(
      n,
      s
    );
    return new _l(t);
  }, k0.render = function(e, t, n) {
    if (!Pl(t)) throw Error(u(200));
    return Tl(null, e, t, !1, n);
  }, k0.unmountComponentAtNode = function(e) {
    if (!Pl(e)) throw Error(u(40));
    return e._reactRootContainer ? (Xt(function() {
      Tl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[st] = null;
      });
    }), !0) : !1;
  }, k0.unstable_batchedUpdates = vi, k0.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Pl(n)) throw Error(u(200));
    if (e == null || e._reactInternals === void 0) throw Error(u(38));
    return Tl(e, t, n, !1, r);
  }, k0.version = "18.3.1-next-f1338f8080-20240426", k0;
}
var So;
function Go() {
  if (So) return Mi.exports;
  So = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (c) {
        console.error(c);
      }
  }
  return a(), Mi.exports = hc(), Mi.exports;
}
var Co;
function pc() {
  if (Co) return Ol;
  Co = 1;
  var a = Go();
  return Ol.createRoot = a.createRoot, Ol.hydrateRoot = a.hydrateRoot, Ol;
}
var mc = pc(), z = Oi(), Eo = Go();
const vc = { cmd: "⌘", shift: "⇧", alt: "⌥", option: "⌥", ctrl: "⌃", enter: "↵", return: "↵", esc: "esc", tab: "⇥", up: "↑", down: "↓", left: "←", right: "→", backspace: "⌫" }, yc = (a) => a.split("+").map((c) => vc[c.trim().toLowerCase()] ?? c.trim().toUpperCase());
function gc({ rows: a, at: c }) {
  return /* @__PURE__ */ l.jsx(l.Fragment, { children: a.map(
    (u) => u && /* @__PURE__ */ l.jsx("div", { className: "ss-keys", "data-show": u.show, "data-at": c, "aria-hidden": !0, children: u.caps.map((p, v) => /* @__PURE__ */ l.jsx("kbd", { className: "ss-key", "data-down": u.down, children: p }, v)) }, u.id)
  ) });
}
const Xo = { x: 0, y: 0, width: 0, height: 0 }, Zo = (a) => typeof a == "string" ? a : "at" in a ? a.at : null, xc = (a, c) => a?.offsetWidth && a.getBoundingClientRect().width / a.offsetWidth || c || 1;
function Di(a, c) {
  const u = a.getBoundingClientRect();
  return { left: u.left, top: u.top, scale: a.offsetWidth && u.width / a.offsetWidth || c || 1, borderX: a.clientLeft, borderY: a.clientTop };
}
function Cr(a, c, u, p = Di(a, u)) {
  const v = c.getBoundingClientRect(), { scale: x } = p;
  return { x: (v.left - p.left) / x - p.borderX, y: (v.top - p.top) / x - p.borderY, width: v.width / x, height: v.height / x };
}
function wc(a, c, u, p = Di(a, u)) {
  const v = Cr(a, c, u, p), x = getComputedStyle(c), C = x.transform, N = C && C !== "none" ? C.match(/^matrix\(([^)]+)\)$/) : null;
  if (!N) return v;
  const [E, I, R, V, W, K] = N[1].split(",").map(Number);
  if (I || R || W || K || !E || !V) return v;
  const P = v.width / E, U = v.height / V, [Z, O] = x.transformOrigin.split(" ").map(parseFloat);
  return { x: v.x - Z * (1 - E), y: v.y - O * (1 - V), width: P, height: U };
}
const kc = (a) => {
  const c = getComputedStyle(a);
  return c.transform !== "none" || c.translate && c.translate !== "none" || c.scale && c.scale !== "none" || c.rotate && c.rotate !== "none";
};
function jc(a, c) {
  let u = !0;
  for (let C = c; C && C !== a; C = C.parentElement) if (kc(C)) {
    u = !1;
    break;
  }
  if (u) return Cr(a, c, 1);
  let p = 0, v = 0, x = c;
  for (; x && x !== a; ) {
    p += x.offsetLeft, v += x.offsetTop;
    const C = x.offsetParent;
    if (!C || !a.contains(C)) break;
    x = C, x !== a && (p += x.clientLeft - x.scrollLeft, v += x.clientTop - x.scrollTop);
  }
  return { x: p, y: v, width: c.offsetWidth, height: c.offsetHeight };
}
function Ao(a, c) {
  const u = Object.keys(a);
  return u.length !== Object.keys(c).length ? !1 : u.every((p) => {
    const v = a[p], x = c[p];
    return x && Math.abs(v.x - x.x) < 0.5 && Math.abs(v.y - x.y) < 0.5 && Math.abs(v.width - x.width) < 0.5 && Math.abs(v.height - x.height) < 0.5;
  });
}
function qo(a) {
  const c = a.parentElement;
  if (!c?.classList.contains("ss-scroller")) return;
  const u = a.clientHeight, p = a.scrollHeight, v = p > u ? Math.max(24, u / p * u) : 0, x = p > u ? a.scrollTop / (p - u) * (u - v) : 0;
  c.style.setProperty("--ss-thumb-h", `${v}px`), c.style.setProperty("--ss-thumb-y", `${x}px`);
}
const Nc = {
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
function Sc(a) {
  const [c, u, p, v] = Nc[a], x = 3 * c, C = 3 * (p - c) - x, N = 1 - x - C, E = 3 * u, I = 3 * (v - u) - E, R = 1 - E - I, V = (K) => ((N * K + C) * K + x) * K, W = (K) => (3 * N * K + 2 * C) * K + x;
  return (K) => {
    if (K <= 0) return 0;
    if (K >= 1) return 1;
    let P = K;
    for (let U = 0; U < 8; U++) {
      const Z = W(P);
      if (Math.abs(Z) < 1e-6) break;
      const O = P - (V(P) - K) / Z;
      if (O < 0 || O > 1) break;
      P = O;
    }
    if (Math.abs(V(P) - K) > 1e-6) {
      let U = 0, Z = 1;
      for (let O = 0; O < 40; O++)
        P = (U + Z) / 2, V(P) < K ? U = P : Z = P;
    }
    return ((R * P + I) * P + E) * P;
  };
}
function Jo() {
  try {
    return !1;
  } catch {
    return !0;
  }
}
function _n(a) {
  Jo() && console.warn(`[stageshow] ${a}`);
}
const Ln = (a, c, u) => Math.min(u, Math.max(c, a)), Hl = (a) => a < 0.5 ? 4 * a * a * a : 1 - Math.pow(-2 * a + 2, 3) / 2, Cc = (a) => {
  const c = Math.sin(a * 12.9898) * 43758.5453;
  return c - Math.floor(c);
}, Mo = (a) => {
  a && window.setTimeout(() => a.removeAttribute("data-touching"), 240);
};
class zn extends Error {
}
function Ec(a, c) {
  const { rootRef: u, cursorRef: p, pos: v, hovered: x, kindRef: C, keysRef: N, dragging: E, autoUsed: I, autoRef: R, scaleRef: V, speed: W, layout: K, cursor: P, resolve: U, place: Z, remeasure: O, ripple: re, setState: fe, setKind: F, setKeys: Q, setLastKeys: le } = c, G = Sc("enter"), D = () => {
    if (a.aborted) throw new zn();
  }, je = (d, y) => new Promise((j, S) => {
    D();
    const A = () => {
      y(X), a.removeEventListener("abort", A), S(new zn());
    }, X = d(() => {
      a.removeEventListener("abort", A), a.aborted ? S(new zn()) : j();
    });
    a.addEventListener("abort", A, { once: !0 });
  }), me = () => je((d) => requestAnimationFrame(d), cancelAnimationFrame), pe = (d) => je((y) => setTimeout(y, d / W), clearTimeout), he = (d) => {
    let y = !0;
    const j = () => {
      y && (y = !1, a.removeEventListener("abort", j), d());
    };
    return a.addEventListener("abort", j, { once: !0 }), j;
  }, ye = async (d, y) => {
    const j = performance.now(), S = d / W;
    for (; ; ) {
      D();
      const A = Math.min(1, (performance.now() - j) / S);
      if (y(A), A === 1) return;
      await me();
    }
  }, ke = (d) => {
    const y = [];
    for (let j = d; j && j !== u.current; j = j.parentElement) j.hasAttribute("data-target") && y.push(j);
    return y;
  }, ze = (d) => {
    const y = u.current;
    if (!y) return;
    const j = y.querySelectorAll("[data-cursor]");
    if (!j.length && !I.current) return;
    j.length && (I.current = !0);
    const S = y.getBoundingClientRect(), A = S.width / y.offsetWidth || 1, X = y.dataset.cursorBase ?? "pointer";
    let se = X;
    y.setAttribute("data-hit", "");
    const oe = document.elementsFromPoint(S.left + d.x * A, S.top + d.y * A);
    y.removeAttribute("data-hit");
    const b = oe.find((ie) => {
      if (!y.contains(ie) || ie.closest(".ss-cursor, .ss-keys, .ss-ripple") || getComputedStyle(ie).pointerEvents === "none" && !ie.closest('[data-cursor], [data-target], button, a[href], [role="button"], [role="menuitem"], [role="option"], [role="tab"]')) return !1;
      let Pe = 1;
      for (let Ae = ie; Ae && Ae !== y.parentElement; Ae = Ae.parentElement) {
        const Te = getComputedStyle(Ae);
        if (Te.visibility === "hidden") return !1;
        Pe *= Number(Te.opacity);
      }
      return Pe > 0.15;
    });
    if (b) {
      const ie = b.closest('[data-cursor], button, a[href], [role="button"], [role="menuitem"], [role="option"], [role="tab"]');
      se = ie && y.contains(ie) && ie.dataset.cursor ? ie.dataset.cursor : X, se !== C.current && F(se);
      return;
    }
    j.forEach((ie) => {
      const Pe = ie.getBoundingClientRect(), Ae = (Pe.left - S.left) / A, Te = (Pe.top - S.top) / A;
      d.x >= Ae && d.x <= Ae + Pe.width / A && d.y >= Te && d.y <= Te + Pe.height / A && (se = ie.dataset.cursor);
    }), se !== C.current && F(se);
  };
  R.current = ze, E.current || ze(v.current);
  const Ce = (d) => {
    if (x.current === d) return;
    const y = ke(d);
    ke(x.current).forEach((j) => y.includes(j) || j.removeAttribute("data-hover")), y.forEach((j) => j.setAttribute("data-hover", "")), x.current = d;
  };
  let ve = N.current.id, B = 0;
  const te = (d) => {
    const y = Zo(d);
    return y === null ? null : u.current?.querySelector(`[data-target="${y}"]`) ?? null;
  }, H = {
    get signal() {
      return a;
    },
    put(d) {
      a.aborted || fe((y) => ({ ...y, ...typeof d == "function" ? d(y) : d }));
    },
    async set(d) {
      D(), H.put(d), await me(), await me(), R.current?.(v.current), D();
    },
    wait: async (d) => {
      D(), await pe(d);
    },
    rect: (d, y) => {
      const j = u.current, S = j?.querySelector(`[data-target="${d}"]`);
      return !j || !S ? (_n(`no element with data-target="${d}"`), Xo) : y?.layout ? jc(j, S) : Cr(j, S, V.current);
    },
    center: (d) => U(d),
    caret(d, y) {
      B++;
      const j = te(d), S = u.current;
      if (!j || !S) return 0;
      const A = S.getBoundingClientRect(), X = A.width / S.offsetWidth || 1, se = A.left + y.x * X, oe = A.top + y.y * X, b = [], ie = document.createTreeWalker(j, NodeFilter.SHOW_TEXT), Pe = document.createRange();
      let Ae = 0;
      const Te = (Ne) => {
        for (let Xe = Ne.parentElement; Xe; Xe = Xe === j ? null : Xe.parentElement) {
          const Le = getComputedStyle(Xe);
          if (Le.opacity === "0" || Le.visibility === "hidden" || Le.display === "none") return !0;
        }
        return !1;
      };
      for (let Ne = ie.nextNode(); Ne; Ne = ie.nextNode()) {
        const Xe = Ne.textContent ?? "";
        if (!Te(Ne)) {
          for (let Le = 0; Le < Xe.length; Le++) {
            Pe.setStart(Ne, Le), Pe.setEnd(Ne, Le + 1);
            const Ie = Pe.getBoundingClientRect();
            (Ie.width || Ie.height) && b.push({ left: Ie.left, right: Ie.right, mid: (Ie.left + Ie.right) / 2, top: Ie.top, bottom: Ie.bottom, at: Ae + Le });
          }
          Ae += Xe.length;
        }
      }
      if (!b.length || oe < b[0].top) return 0;
      if (oe > b[b.length - 1].bottom) return Ae;
      let qe = b[0];
      for (const Ne of b) Math.abs((Ne.top + Ne.bottom) / 2 - oe) < Math.abs((qe.top + qe.bottom) / 2 - oe) && (qe = Ne);
      const Ge = b.filter((Ne) => Math.abs(Ne.top - qe.top) < (qe.bottom - qe.top) / 2), et = Ge.find((Ne) => Ne.mid > se);
      return et ? et.at : Ge[Ge.length - 1].at + 1;
    },
    async move(d, y) {
      D();
      const j = { ...v.current }, S = U(d), A = Math.hypot(S.x - j.x, S.y - j.y);
      if (A < 0.5) return Ce(te(d));
      const X = ke(te(d));
      Ce(ke(x.current).find((Ae) => X.includes(Ae)) ?? null);
      const se = y?.duration ?? Ln(260 + A * 0.9, 300, 650), oe = Hl, b = Math.min(A * 0.08, 24), ie = -(S.y - j.y) / A, Pe = (S.x - j.x) / A;
      await ye(se, (Ae) => {
        const Te = oe(Ae), qe = Math.sin(Math.PI * Te) * b, Ge = y?.path ? y.path(Te, j, S) : { x: j.x + (S.x - j.x) * Te + ie * qe, y: j.y + (S.y - j.y) * Te + Pe * qe };
        Z(Ge), ze(Ge), y?.onMove && Eo.flushSync(() => y.onMove(Ge, j, Ae));
      }), D(), Ce(te(d));
    },
    async click(d, y) {
      D(), d !== void 0 && (await H.move(d), await pe(120)), D();
      const j = d !== void 0 ? te(d) : x.current, S = p.current, A = P?.style === "touch", X = he(() => {
        S?.removeAttribute("data-pressed"), j?.removeAttribute("data-pressed"), A && Mo(S);
      });
      try {
        A && (S?.setAttribute("data-touching", ""), await pe(140), D());
        for (let se = 0; se < (y?.double ? 2 : 1); se++)
          se && await pe(70), D(), S?.setAttribute("data-pressed", "true"), P?.ripple && re(v.current), j?.setAttribute("data-pressed", y?.right ? "right" : ""), await pe(y?.double ? 80 : 100), D(), S?.removeAttribute("data-pressed"), j?.removeAttribute("data-pressed");
      } finally {
        X();
      }
    },
    async scroll(d, y, j) {
      D();
      const S = te(d);
      if (!S) return;
      const A = S.scrollTop;
      let X = typeof y == "number" ? y : A;
      if (typeof y == "string") {
        const b = te(y);
        b && (X = A + (b.getBoundingClientRect().top - S.getBoundingClientRect().top) / xc(u.current, V.current) - (j?.offset ?? 0));
      }
      if (X = Ln(X, 0, S.scrollHeight - S.clientHeight), P) {
        const b = Cr(u.current, S, V.current || 1), ie = v.current;
        ie.x >= b.x + 8 && ie.x <= b.x + b.width - 8 && ie.y >= b.y + 8 && ie.y <= b.y + b.height - 8 || (await this.move({ x: b.x + b.width * 0.6, y: b.y + b.height * 0.55 }), await this.wait(120));
      }
      const se = S.parentElement?.classList.contains("ss-scroller") ? S.parentElement : null;
      se?.setAttribute("data-scrolling", "");
      const oe = he(() => se?.removeAttribute("data-scrolling"));
      try {
        await ye(j?.duration ?? Ln(420 + Math.abs(X - A) * 1.2, 500, 1400), (b) => {
          S.scrollTop = A + (X - A) * Hl(b), S.toggleAttribute("data-scrolled", S.scrollTop > 0.5), qo(S);
        }), D();
      } finally {
        oe();
      }
      O(), R.current?.(v.current);
    },
    async snap(d, y) {
      D();
      const j = y ? u.current?.querySelector(`[data-target="${y}"]`) : u.current;
      j?.setAttribute("data-instant", "");
      const S = he(() => j?.removeAttribute("data-instant"));
      try {
        H.put(d), await me(), await me(), D();
      } finally {
        S();
      }
    },
    async key(d) {
      D();
      const y = yc(d), j = ++ve, S = N.current;
      le(S.caps.length ? { ...S, show: !1, down: !1 } : null), Q({ id: j, caps: y, show: !1, down: !1 }), await me(), await me(), D(), Q({ id: j, caps: y, show: !0, down: !1 }), await pe(180), D(), Q({ id: j, caps: y, show: !0, down: !0 }), await pe(140), D(), Q({ id: j, caps: y, show: !0, down: !1 }), pe(600).then(() => {
        ve === j && !a.aborted && Q({ id: j, caps: y, show: !1, down: !1 });
      }, (A) => {
        A instanceof zn || console.error("[stageshow] script error", A);
      });
    },
    async stagger(d, y, j = 60) {
      await Promise.all(
        d.map(async (S, A) => {
          A && await pe(j * A), D(), await y(S, A);
        })
      );
    },
    mark(d) {
      a.aborted || u.current?.setAttribute("data-mark", d);
    },
    async cursor(d) {
      D(), F(d), await me();
    },
    async type(d, y, j) {
      const S = j?.interval ?? 35;
      for (let A = 0; A <= y.length; A++)
        D(), fe((X) => ({ ...X, [d]: y.slice(0, A) })), await pe(S * (0.7 + 0.6 * Cc(A)));
    },
    place(d) {
      if (a.aborted) return;
      const y = U(d);
      Z(y), R.current?.(y);
    },
    async enter(d, y) {
      D();
      const j = U(d), S = u.current, A = { x: 0, y: 0, w: S.offsetWidth, h: S.offsetHeight }, X = 40, se = [j.x - A.x, A.x + A.w - j.x, j.y - A.y, A.y + A.h - j.y], oe = se.indexOf(Math.min(...se)), b = oe === 0 ? { x: A.x - X, y: j.y + A.h * 0.12 } : oe === 1 ? { x: A.x + A.w + X * 0.4, y: j.y + A.h * 0.12 } : oe === 2 ? { x: j.x - A.w * 0.06, y: A.y - X } : { x: j.x + A.w * 0.06, y: A.y + A.h + X * 0.4 };
      Z(b), Ce(null), await ye(y?.duration ?? 700, (ie) => {
        const Pe = G(ie), Ae = { x: b.x + (j.x - b.x) * Pe, y: b.y + (j.y - b.y) * Pe };
        Z(Ae), ze(Ae);
      }), D(), Ce(te(d));
    },
    async drag(d, y, j) {
      D();
      const S = { ...v.current }, A = U(d), X = Math.hypot(A.x - S.x, A.y - S.y);
      Ce(null);
      const se = C.current, oe = se === "ibeam" || se === "crosshair", b = !oe && j?.cursor !== "preserve", ie = P?.style === "touch", Pe = (Ne) => {
        const Le = 1.1428571428571428;
        return Ne < 0.25 ? Ne * Ne / (2 * 0.25) * Le : (Ne - 0.25 / 2) * Le;
      };
      ie && (p.current?.setAttribute("data-touching", ""), await pe(140), D());
      const Ae = ie ? p.current?.querySelector(".ss-cursor__streak") ?? null : null, Te = [], qe = (Ne) => {
        Te.unshift({ ...Ne }), Te.length > 9 && Te.pop();
        const Xe = Te[Te.length - 1], Le = Ne.x - Xe.x, Ie = Ne.y - Xe.y, j0 = Math.min(Math.hypot(Le, Ie), 100);
        Ae && (Ae.style.width = `${j0}px`, Ae.style.left = `${-j0}px`, Ae.style.transform = `rotate(${Math.atan2(Ie, Le)}rad)`);
      };
      E.current = !0;
      const Ge = p.current, et = he(() => {
        E.current = !1, Ge?.removeAttribute("data-pressed"), Ge?.removeAttribute("data-swiping"), ie && Mo(Ge);
      });
      try {
        Ge?.setAttribute("data-pressed", "true"), await pe(ie ? 170 : 60), ie && (Ae && (Ae.style.width = "0px"), Ge?.setAttribute("data-swiping", "")), D(), b && !ie && F("grab"), ie || await pe(70), D(), Ge?.removeAttribute("data-pressed");
        const Ne = oe ? 0 : Math.min(X * 0.06, 18), Xe = X ? -(A.y - S.y) / X : 0, Le = X ? (A.x - S.x) / X : 0, Ie = oe && Math.abs(A.y - S.y) > 6;
        Ie && A.y > S.y && A.x < S.x - 2 && _n("a text selection that ends left of where it starts overshoots and shrinks back; select text that starts a line, or fits on one");
        const j0 = B;
        await ye(ie ? j?.duration ?? Ln(180 + X * 0.5, 240, 300) : j?.duration ?? Ln(360 + X * 1.1, 450, 900), (tt) => {
          const N0 = ie ? Pe(tt) : Hl(tt), nt = Math.sin(Math.PI * N0) * Ne, Pt = Ie ? 1 - (1 - N0) * (1 - N0) : N0, Tt = Ie ? N0 * N0 : N0, X0 = j?.path?.(N0, S, A) ?? { x: S.x + (A.x - S.x) * Tt + Xe * nt, y: S.y + (A.y - S.y) * Pt + Le * nt };
          Eo.flushSync(() => y?.(X0, S, tt)), Z(X0), ie && qe(X0);
        }), oe && y && B === j0 && _n("selection drift: a text selection drag never read a.caret(), so the highlight is not under the I-beam; set it from a.caret(name, at) in onMove"), D(), b && !ie && F(se === "grab" ? "pointer" : se);
      } finally {
        et();
      }
      R.current?.(A);
    },
    layout: K
  };
  for (const d of Object.keys(H)) {
    const y = H[d];
    typeof y == "function" && (H[d] = (...j) => {
      const S = y.apply(H, j);
      return S instanceof Promise && S.catch((A) => {
        A instanceof zn || console.error("[stageshow] script error", A);
      }), S;
    });
  }
  return H;
}
function Ac(a, c, u, p) {
  const v = Object.keys(c).filter(
    (x) => JSON.stringify(a[x]) !== JSON.stringify(c[x])
  );
  v.length && _n(`loop seam: state still differs from initial at the end of the script (${v.join(", ")})`), p && Math.hypot(u.x - p.x, u.y - p.y) > 1 && _n("loop seam: cursor does not end where it starts");
}
function Mc() {
  return /* @__PURE__ */ l.jsx("svg", { height: "24", width: "24", viewBox: "0 0 32 32", fill: "none", children: /* @__PURE__ */ l.jsxs("g", { transform: "translate(10 7)", children: [
    /* @__PURE__ */ l.jsx("path", { d: "m6.148 18.473 1.863-1.003 1.615-.839-2.568-4.816h4.332l-11.379-11.408v16.015l3.316-3.221z", fill: "#fff" }),
    /* @__PURE__ */ l.jsx("path", { d: "m6.431 17 1.765-.941-2.775-5.202h3.604l-8.025-8.043v11.188l2.53-2.442z", fill: "#000" })
  ] }) });
}
function Lc() {
  return /* @__PURE__ */ l.jsxs("svg", { width: "10", height: "16", viewBox: "0 0 10 16", fill: "none", overflow: "visible", children: [
    /* @__PURE__ */ l.jsx("path", { d: "M3 1H7M3 15H7M5 1V15", style: { stroke: "var(--ss-cursor-edge, #fff)" }, strokeWidth: "2.6", strokeLinecap: "round" }),
    /* @__PURE__ */ l.jsx("path", { d: "M3 1H7M3 15H7M5 1V15", style: { stroke: "var(--ss-cursor-line, #000)" }, strokeWidth: "1", strokeLinecap: "round" })
  ] });
}
function zc() {
  return /* @__PURE__ */ l.jsxs("svg", { width: "17", height: "17", viewBox: "0 0 17 17", fill: "none", overflow: "visible", children: [
    /* @__PURE__ */ l.jsx("path", { d: "M8.5 0V17M0 8.5H17", style: { stroke: "var(--ss-cursor-edge, #fff)" }, strokeWidth: "2.6" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8.5 0V17M0 8.5H17", style: { stroke: "var(--ss-cursor-line, #000)" }, strokeWidth: "1" })
  ] });
}
function Rc() {
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
function _c() {
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
function Pc() {
  return /* @__PURE__ */ l.jsx("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", children: /* @__PURE__ */ l.jsxs("g", { transform: "translate(8 9)", children: [
    /* @__PURE__ */ l.jsx("path", { d: "m3.44281398 1.68449726c-.74326136.27630142-1.05584685.8131257-1.07636853 1.38003696-.01344897.37336893.06665513.72649286.23114214 1.18694303-.02596219-.07267623.09676488.29282004.12116236.37362273.05052942.16918921-.4865367-.05865774-.81377307.00741883-.36363321.07113868-.84783757.38332307-1.10006887.79754775-.29643467.48542737-.3109609 1.04368567-.08235979 2.04824266.12491868.54736183.36572145 1.00836814.71076689 1.44594879.15329951.1944118.5713628.64726015.60307236.6875974l.84854343.94062339c.15080214.1358526.25794954.2361946.57590427.5380259.3147558.2987762.4647038.4380078.60308951.555976.05846214.0492474.10784267.1797116.12740685.3736249.01609788.1595565.01049553.3375341-.0090192.5090254-.00674888.0593077-.01325791.1020883-.01698742.1224696-.04189161.228932.13269563.4403386.36541902.4424835.21585671.0019894.38528595.0046546.82216479.0123538.09483476.0016698.09483476.0016698.18993053.0033129 1.16876447.0200186 1.75308289.0147904 2.17807912-.0385723.45429894-.0572869.92650915-.6110188 1.32698393-1.2957591.34289141.6108338.81859723 1.2057867 1.2995685 1.2820532.1510118.0244148.3353555.0322555.548787.0275887.1606725-.0035131.3307029-.0140241.5021961-.0293376.1276907-.0114022.2293359-.0228648.29003-.0307451.2258836-.0293282.373669-.251611.3133108-.4712481-.0130351-.0474332-.0339838-.1345011-.0551094-.2441635-.0245945-.1276687-.0423383-.2523857-.0503381-.365988-.0050217-.0713101-.0059948-.1359317-.0027687-.1918983.0059157-.0980798.0077938-.1530073.0108033-.281125.0010795-.0448938.0010795-.0448938.0024606-.0845172.0054208-.1364475.0233824-.2649146.0815132-.544638.0250088-.1201275.1473169-.352189.3398902-.639435.0571394-.0852302.1195783-.1742239.1864664-.26609712.1272143-.17473362.2641361-.35131772.4011075-.52030772.082051-.10123129.145482-.17695689.1808122-.21807676.2967593-.42378347.612817-1.11823437.7291396-1.52536348.1117407-.39153936.202351-1.12501196.254373-1.81690429.029923-.39968605.0410555-.72381216.0410555-1.23011613.0000742-.09758414.0000742-.09758414.0002975-.17670236.0003569-.11115478.0003569-.11115478.000115-.20711835-.0008934-.15683883-.0055282-.31323355-.0207085-.69507578-.0313109-.81293139-.4771727-1.33911388-1.1344906-1.44058831-.559108-.08631314-1.0586051.08188477-1.2779293.31625977-.0755526.08073733.0036753-.2781823-.2159489-.62316278-.1644465-.25841586-.593184-.58905957-.9209287-.65355552-.335487-.06535532-.73539548-.05811715-1.1017193.00667481-.32093157.05742909-.68608434.33741751-.87176225.64688068-.12411885.20686477.03884667-.00592296-.09368743-.23401341-.18231052-.31422641-.60754287-.59486422-1.01411454-.67799709-.34643562-.07139428-.74182572-.04452925-1.09945614.0633873-.43336319.1291117-1.01795827.61460976-.94899189 1.15552627-.34375-.54091651-1.25026717-.691379-1.97906097-.42111797z", fill: "#000" }),
    /* @__PURE__ */ l.jsx("path", { d: "m7.31951013 1.62138197c.20710357.04234751.44724204.20083012.51632974.31990811.08404358.1446387.15562749.36413806.21048667.6366124.02933373.14569467.12179446 1.2125285.29383112 1.32370243.41279229.04533731.41279229.04533731.52658055-.12364345.03545705-.07383858.03545705-.07383858.04226523-.1029106.01416796-.06009544.02463332-.12677987.0351322-.21754028l.00854738-.07915386.00047673-.00942804.00327525-.03167185c.01085148-.11424313.04184125-.4312127.05388392-.53034902.03788792-.31189663.08766449-.52757784.13944093-.6138719.0713024-.11883734.31942298-.28274442.43149612-.30279961.2804398-.04960082.58940103-.05519288.82623993-.00905543.1084394.02134018.3709471.22378689.432331.32024744.1291079.20279957.2524316.84889766.3225486 1.4970065-.0102194.04624251-.0102194.04624251.1640069.28984194.5843296-.06677889.5843296-.06677889.5703629-.17490247.0159511-.03856429.0284824-.08294031.045969-.15118961.0423876-.16089067.0697594-.25204451.111066-.35549917.0288558-.07227096.0592914-.13391873.0904889-.18278042.1209187-.19031132.4335712-.319392.7077174-.27707028.2943447.04543991.4816904.26653537.4994912.72869815.0148821.37434892.0193146.5239164.0201469.6700184l-.0004247.37954865c0 .48831141-.0104951.79388164-.0389535 1.17400348-.0480918.63962116-.1348512 1.34192123-.227649 1.66708484-.0946325.33121345-.3766371.95084197-.6003915 1.27298482-.0161892.01580846-.0841508.09694273-.1710333.20413492-.1445842.17838247-.2892181.36491271-.4247891.5511244-.0723398.09936149-.1402862.19620479-.2030964.2898938-.2440054.36396314-.400553.66098894-.4512157.90434304-.0659304.3172546-.0893838.4850003-.0966379.6675968-.0017072.0490782-.0017072.0490782-.002845.096677-.0028064.119476-.004437.1671639-.0097087.2545848-.0052654.091322-.0038193.187354.00332.2887353.0103318.1467182.1058713.3478531.1058713.3478531s-.2321503-.0119819-.3742084-.0088758c-.1718098.0037567-.3147843-.0023244-.4138162-.0183342-.1440353-.0228411-.53014068-.5057331-.7278511-.8821737-.30227042-.5764228-1.03604858-.5484427-1.33684295-.0394061-.26854779.4591613-.65918083.9172326-.7740684.9317199-.37404082.0469647-.94643778.0520862-2.07160079.0328144-.09480875-.0016381-.46003446-.0128683-.64600494-.0157445-.18597048-.0028763.05008807-.1790283.02786486-.399297-.03726222-.36933-.15125405-.6704984-.38877094-.8705429-.12241569-.1043631-.26774964-.2393104-.56509654-.5215613-.33323493-.3163366-.44236499-.4185353-.57290215-.533275l-.80130455-.89071892c-.03955779-.05174211-.45812831-.5051399-.5872217-.6688539-.28069963-.35597842-.47062947-.71959073-.56844755-1.14820437-.18921973-.83150113-.1793328-1.21146622-.00855589-1.49112273.13743587-.2257023.43815377-.4195862.60596039-.45241793.17165981-.03465512.55153059-.01648617.62179422.02229321.09902279.05401056.13357243.07300285.16379074.09097645.03572494.02124891.05965747.03799198.08182912.05708809.03426437.02951139.07235014.07170412.12420211.14044502.03611591.04821025.07806642.1053997.1423779.19304882.06054643.0816627.09183576.12069421.13369221.1590035.28038907.25662728.68391532.03238058.65052057-.32606956-.00567036-.06086415-.02203766-.12694598-.05458621-.23708502-.04356824-.15021272.00433013-.05284275-.26002629-.56642281-.08720664-.16942124-.13955864-.28835362-.17428227-.4046158l-.03412852-.10219113c-.03838756-.11059767-.09558223-.26854489-.12612861-.35199347l-.02009957-.05467087.002.008-.05974804-.17751191c-.09232236-.28807194-.13413567-.51358087-.12645475-.72681781.01040781-.28751553.16037753-.54506871.58790983-.70400047.40142488-.1488616 1.07786076.00117106 1.20581167.27856864.04319814.09369738.08927466.21199471.13900415.35457792l.03930997.11680217c.05539717.16759437.13470873.41493582.13860471.42816881.02724222.08344874.0471839.13860719.06943813.18441246.00217869.06301886.00217869.06301886.35429398.23177937.41699479-.29154152.41699479-.29154152.38019201-.37525838.00571063-.08773482.00758408-.17356287.00965287-.37317647.00242546-.23402898.00423842-.33154773.00994479-.45966208.01316411-.29554918.0437926-.51142116.09291227-.63864415.09160418-.23801371.25279279-.40993649.4432431-.46667832.24458613-.07380253.51465245-.09215236.73323569-.04710649zm1.21356228 4.27672201c-.20710459.00095412-.37422255.16961903-.37326843.37672361l.016 3.473c.00095412.20710459.16961903.37422251.37672361.37326841.20710459-.0009541.37422255-.16961901.37326843-.37672359l-.016-3.473c-.00095412-.20710459-.16961903-.37422255-.37672361-.37326843zm2.03332759.00229602c-.2071068 0-.375.16789322-.375.375v3.459c0 .20710678.1678932.375.375.375s.375-.16789322.375-.375v-3.459c0-.20710678-.1678932-.375-.375-.375zm-4.01399856.02930704c-.20710289.00126946-.37396385.17018863-.3726944.37729152l.021 3.426c.00126946.20710289.17018863.37396384.37729152.37269444.20710289-.0012695.37396385-.17018867.3726944-.37729156l-.021-3.426c-.00126946-.20710289-.17018863-.37396385-.37729152-.3726944z", fill: "#fff" })
  ] }) });
}
function Tc() {
  return /* @__PURE__ */ l.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ l.jsx("circle", { cx: "10", cy: "10", r: "8", stroke: "rgba(0,0,0,0.15)", strokeWidth: "2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M10 2A8 8 0 0 1 18 10", stroke: "black", strokeWidth: "2", strokeLinecap: "round" })
  ] });
}
const Lo = "M0-8.4 2.55-3.65H-2.55ZM0 8.4 2.55 3.65H-2.55Z";
function Fl({ turn: a }) {
  return /* @__PURE__ */ l.jsx("svg", { width: "21", height: "21", viewBox: "-14 -14 28 28", overflow: "visible", children: /* @__PURE__ */ l.jsxs("g", { transform: `rotate(${a})`, strokeLinejoin: "round", children: [
    /* @__PURE__ */ l.jsx("path", { d: Lo, style: { fill: "var(--ss-cursor-edge, #fff)", stroke: "var(--ss-cursor-edge, #fff)" }, strokeWidth: "3.2" }),
    /* @__PURE__ */ l.jsx("path", { d: Lo, style: { fill: "var(--ss-cursor-line, #000)", stroke: "var(--ss-cursor-line, #000)" }, strokeWidth: "1.2" })
  ] }) });
}
const Ic = () => /* @__PURE__ */ l.jsx(Fl, { turn: 0 }), Oc = () => /* @__PURE__ */ l.jsx(Fl, { turn: 90 }), Dc = () => /* @__PURE__ */ l.jsx(Fl, { turn: -45 }), Bc = () => /* @__PURE__ */ l.jsx(Fl, { turn: 45 }), zo = {
  pointer: Mc,
  ibeam: Lc,
  crosshair: zc,
  hand: Rc,
  open: _c,
  grab: Pc,
  wait: Tc,
  "resize-ns": Ic,
  "resize-ew": Oc,
  "resize-nwse": Dc,
  "resize-nesw": Bc
}, Hc = {
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
}, Fc = { x: 4, y: 3 };
function Wc() {
  return /* @__PURE__ */ l.jsx("svg", { width: "22", height: "22", viewBox: "0 0 22 22", className: "ss-cursor__arrow", "aria-hidden": !0, children: /* @__PURE__ */ l.jsx("path", { d: "M4 3 18.5 9.6 11.8 11.8 9.6 18.5Z" }) });
}
function Uc({ cursorRef: a, style: c = "real", kind: u }) {
  return /* @__PURE__ */ l.jsxs("div", { ref: a, className: "ss-cursor", "data-style": c, "data-kind": u, "aria-hidden": !0, children: [
    c === "touch" && /* @__PURE__ */ l.jsx("span", { className: "ss-cursor__streak" }),
    /* @__PURE__ */ l.jsxs("div", { className: "ss-cursor__press", children: [
      (c === "circle" || c === "touch") && /* @__PURE__ */ l.jsx("span", { className: "ss-cursor__dot" }),
      c !== "circle" && c !== "touch" && Object.keys(zo).map((p) => {
        const v = c === "arrow";
        if (v && p !== "pointer" && p !== "ibeam") return null;
        const x = v && p === "pointer" ? Wc : zo[p], C = v && p === "pointer" ? Fc : Hc[p], N = v && u !== "ibeam" ? "pointer" : u;
        return /* @__PURE__ */ l.jsx(
          "div",
          {
            className: "ss-cursor__glyph",
            "data-glyph": p,
            "data-active": p === N,
            style: { marginLeft: -C.x, marginTop: -C.y, transformOrigin: `${C.x}px ${C.y}px` },
            children: /* @__PURE__ */ l.jsx(x, {})
          },
          p
        );
      })
    ] })
  ] });
}
function Qc(a, c) {
  const u = document.createElement("span");
  u.className = "ss-ripple", u.style.left = `${c.x}px`, u.style.top = `${c.y}px`, a.appendChild(u), u.addEventListener("animationend", () => u.remove());
}
const bo = z.createContext({
  theme: "light",
  palette: "accent",
  fidelity: "standard",
  layout: "wide"
}), Bi = () => z.useContext(bo), Yo = z.createContext(!1);
function Hi() {
  const a = z.useContext(Yo), [c, u] = z.useState(!1);
  return z.useEffect(() => {
    const p = window.matchMedia("(prefers-reduced-motion: reduce)"), v = () => u(p.matches);
    return v(), p.addEventListener("change", v), () => p.removeEventListener("change", v);
  }, []), a || c;
}
const Yt = {
  now: () => performance.now(),
  raf: (a) => requestAnimationFrame(a),
  cancelRaf: (a) => cancelAnimationFrame(a),
  // Layout must finish even when a preview is paused. Keep these callbacks
  // separate: running arbitrary motion RAFs at a frozen timestamp can still
  // advance a spring that integrates once per callback.
  layoutRaf: (a) => Yt.recording?.requestLayoutFrame(a) ?? requestAnimationFrame(a),
  cancelLayoutRaf: (a) => {
    const c = Yt.recording;
    c ? c.cancelLayoutFrame(a) : cancelAnimationFrame(a);
  },
  timeout: (a, c) => window.setTimeout(a, c),
  clearTimeout: (a) => window.clearTimeout(a),
  /** The recorder's control while one drives the page, else null. */
  get recording() {
    return typeof window > "u" ? null : window.__stageshow?.clock ?? null;
  }
}, Vc = {};
function Er({
  width: a,
  height: c,
  initial: u = Vc,
  script: p,
  poster: v,
  cursor: x,
  hover: C,
  play: N = "loop",
  compact: E,
  keys: I = "bottom",
  palette: R = "accent",
  greys: V,
  fidelity: W = "standard",
  specimen: K,
  unframed: P,
  speed: U = 1,
  accent: Z,
  tokens: O,
  ground: re,
  fill: fe = !1,
  theme: F = "light",
  className: Q,
  children: le
}) {
  const G = N === "hover" && typeof window < "u" && window.matchMedia("(hover: none)").matches ? "once" : N, [D, je] = z.useState("wide"), me = z.useRef(D);
  me.current = D;
  const pe = () => {
    const q = x.at;
    return typeof q == "object" && "wide" in q ? q[me.current] : q;
  }, [he, ye] = z.useState(!1), ke = D === "compact" && E ? E.width : a, ze = D === "compact" && E ? E.height : c, Ce = z.useRef(null), ve = z.useRef(null), B = z.useRef(null), te = Hi(), H = !p || te, [d, y] = z.useState(() => H && v ? v : u), j = z.useRef(d);
  j.current = d;
  const [S, A] = z.useState(1), X = z.useRef(1);
  X.current = S;
  const se = typeof window > "u" ? {} : window.__stageshow ?? {}, oe = U / (se.slow ?? 1), b = se.theme ?? F, [ie, Pe] = z.useState(x?.kind ?? "pointer"), Ae = (q) => {
    const ge = ve.current;
    !ge || te || Qc(ge, q);
  }, Te = z.useRef(ie);
  Te.current = ie;
  const [qe, Ge] = z.useState({ id: 0, caps: [], show: !1, down: !1 }), [et, Ne] = z.useState(null), Xe = z.useRef(qe);
  Xe.current = qe;
  const Le = z.useRef({ x: 0, y: 0 }), Ie = z.useRef(null), [j0, tt] = z.useState(0), N0 = z.useRef(!1), nt = z.useRef(!1), Pt = z.useRef(null);
  z.useLayoutEffect(() => {
    const q = Ce.current;
    if (!q) return;
    const ge = () => {
      const Re = q.clientWidth, r0 = !!q.parentElement?.closest("[data-ss-wide]"), L0 = E && !r0 && Re < E.below ? "compact" : "wide";
      je(L0);
      const u0 = fe || !!q.parentElement?.closest("[data-ss-fill]");
      ye(u0);
      const c0 = L0 === "compact" ? E.width : a, l0 = Math.min(u0 ? 2 : 1, Re / c0);
      A(l0), tt(Math.max(0, (Re - c0 * l0) / 2));
    };
    ge();
    const Se = new ResizeObserver(ge);
    Se.observe(q);
    const xe = new MutationObserver(ge);
    for (let Re = q.parentElement; Re; Re = Re.parentElement)
      xe.observe(Re, { attributes: !0, attributeFilter: ["data-ss-wide", "data-ss-fill"] });
    return () => {
      Se.disconnect(), xe.disconnect();
    };
  }, [a, E?.below, E?.width, fe]);
  const [Tt, X0] = z.useState({}), ht = z.useCallback(() => {
    const q = ve.current;
    if (!q) return {};
    const ge = {}, Se = q.querySelectorAll("[data-target]");
    if (!Se.length) return ge;
    const xe = Di(q, X.current);
    return Se.forEach((Re) => {
      ge[Re.dataset.target] = wc(q, Re, X.current, xe);
    }), ge;
  }, []), tn = z.useRef({ n: 0, frame: 0, owed: !1 }), S0 = z.useCallback(() => {
    const q = tn.current;
    if (q.frame || (q.frame = Yt.layoutRaf(() => {
      if (q.n = 0, q.frame = 0, !q.owed) return;
      q.owed = !1;
      const Se = ht();
      X0((xe) => Ao(xe, Se) ? xe : Se);
    })), q.n >= 4) {
      q.owed = !0;
      return;
    }
    q.n++;
    const ge = ht();
    X0((Se) => Ao(Se, ge) ? Se : ge);
  }, [ht]);
  z.useLayoutEffect(S0), z.useLayoutEffect(() => () => {
    Yt.cancelLayoutRaf(tn.current.frame), tn.current = { n: 0, frame: 0, owed: !1 };
  }, []), z.useEffect(() => {
    const q = ve.current;
    if (q)
      return q.addEventListener("transitionend", S0), q.addEventListener("animationend", S0), () => {
        q.removeEventListener("transitionend", S0), q.removeEventListener("animationend", S0);
      };
  }, [S0]);
  const It = z.useCallback((q) => Tt[q] ?? Xo, [Tt]), [Ql, Tn] = z.useState(!0);
  z.useLayoutEffect(() => {
    Tn(!0);
    let q = !0, ge = 0;
    const Se = () => {
      ge = Yt.layoutRaf(() => {
        ge = Yt.layoutRaf(() => q && Tn(!1));
      });
    };
    return !document.fonts || document.fonts.status === "loaded" ? Se() : document.fonts.ready.then(() => q && Se()), () => {
      q = !1, Yt.cancelLayoutRaf(ge);
    };
  }, [D]);
  const rt = z.useRef(0), Ot = z.useRef(0), lt = z.useRef(!1), Dt = z.useRef(null), Z0 = z.useCallback((q) => {
    Ot.current && !lt.current && Math.hypot(q.x - Le.current.x, q.y - Le.current.y) > 0.5 && (lt.current = !0, Dt.current ??= performance.now() - Ot.current), Le.current = q, rt.current = performance.now();
    const ge = B.current;
    ge && (ge.style.transform = `translate(${q.x}px, ${q.y}px)`, ge.removeAttribute("data-idle"));
  }, []), O0 = z.useCallback((q) => {
    typeof q == "object" && q !== null && "wide" in q && (q = me.current === "compact" ? q.compact : q.wide);
    const ge = Zo(q);
    if (ge === null) return q;
    const Se = ve.current, xe = Se?.querySelector(`[data-target="${ge}"]`);
    if (!Se || !xe)
      return _n(`no element with data-target="${ge}"`), Le.current;
    const Re = Cr(Se, xe, X.current), r0 = typeof q == "string" ? { x: 0.5, y: 0.5 } : q;
    return { x: Re.x + Re.width * r0.x, y: Re.y + Re.height * r0.y };
  }, []);
  z.useLayoutEffect(() => {
    if (!H || !C) return;
    const q = ve.current;
    C.forEach((ge) => q?.querySelector(`[data-target="${ge}"]`)?.setAttribute("data-hover", ""));
  }), z.useLayoutEffect(() => {
    x && !Ot.current && Z0(O0(pe()));
  }, [S, D]);
  const Bt = z.useRef(0), p0 = z.useRef(0), D0 = z.useCallback(() => {
    ++Bt.current, cancelAnimationFrame(p0.current), p0.current = 0, ve.current?.removeAttribute("data-settling");
  }, []), nn = z.useCallback((q = !1) => {
    D0();
    const ge = Bt.current;
    if (nt.current = !1, y(u), Pe(x?.kind ?? "pointer"), Ge((xe) => ({ ...xe, show: !1, down: !1 })), Ne(null), ve.current?.querySelectorAll("[data-hover],[data-pressed]").forEach((xe) => {
      xe.removeAttribute("data-hover"), xe.removeAttribute("data-pressed");
    }), ve.current?.removeAttribute("data-mark"), ve.current?.querySelectorAll("[data-scrolled]").forEach((xe) => {
      xe.scrollTop = 0, xe.removeAttribute("data-scrolled"), qo(xe);
    }), ve.current?.querySelectorAll("[data-scrolling]").forEach((xe) => xe.removeAttribute("data-scrolling")), B.current?.removeAttribute("data-pressed"), Pt.current = null, !x) return;
    if (!q) {
      p0.current = requestAnimationFrame(() => {
        p0.current = 0, Z0(O0(pe())), Ie.current?.(Le.current);
      });
      return;
    }
    const Se = ve.current;
    Se?.setAttribute("data-settling", ""), p0.current = requestAnimationFrame(() => {
      const xe = { ...Le.current }, Re = O0(pe()), r0 = Ln(320 + Math.hypot(Re.x - xe.x, Re.y - xe.y) * 0.7, 380, 700), L0 = performance.now(), u0 = () => {
        if (Bt.current !== ge) return;
        const c0 = Math.min(1, (performance.now() - L0) / r0), l0 = Hl(c0);
        Z0({ x: xe.x + (Re.x - xe.x) * l0, y: xe.y + (Re.y - xe.y) * l0 }), c0 < 1 ? p0.current = requestAnimationFrame(u0) : (p0.current = 0, Se?.removeAttribute("data-settling"));
      };
      u0();
    });
  }, [D]), In = z.useMemo(
    () => (q) => Ec(q, {
      rootRef: ve,
      cursorRef: B,
      pos: Le,
      hovered: Pt,
      kindRef: Te,
      keysRef: Xe,
      dragging: nt,
      autoUsed: N0,
      autoRef: Ie,
      scaleRef: X,
      speed: oe,
      layout: D,
      cursor: x,
      resolve: O0,
      place: Z0,
      remeasure: S0,
      ripple: Ae,
      setState: y,
      setKind: Pe,
      setKeys: Ge,
      setLastKeys: Ne
    }),
    [O0, Z0, oe, D]
    // eslint-disable-line react-hooks/exhaustive-deps
  );
  z.useEffect(() => {
    const q = ve.current;
    if (H || !p)
      return nn(), q.removeAttribute("data-offscreen"), y(v ?? u), D0;
    nn();
    const ge = Ce.current;
    let Se = null, xe = !1, Re = !1, r0 = !1;
    const L0 = x?.idle ?? 4e3, u0 = 1200;
    let c0 = 0, l0 = 0;
    const On = () => {
      window.clearInterval(c0), !(!x || L0 === !1) && (rt.current = performance.now(), c0 = window.setInterval(() => {
        const He = B.current;
        if (!He) return;
        const m0 = performance.now();
        if (!lt.current) {
          Dt.current === null && m0 - rt.current > u0 && He.setAttribute("data-idle", "");
          return;
        }
        He.hasAttribute("data-pressed") || ve.current?.querySelector("[data-hover]") ? rt.current = m0 : m0 - rt.current > L0 && He.setAttribute("data-idle", "");
      }, 150));
    }, Vl = () => {
      Ot.current = performance.now(), lt.current = !1, window.clearTimeout(l0);
      const He = B.current, m0 = Dt.current;
      L0 === !1 || !He || m0 === null || m0 <= u0 || (He.setAttribute("data-idle", ""), l0 = window.setTimeout(() => He.removeAttribute("data-idle"), m0 - 400));
    }, Dn = () => {
      window.clearInterval(c0), window.clearTimeout(l0), Ot.current = 0, B.current?.removeAttribute("data-idle");
    }, Kl = () => {
      window.clearInterval(c0), window.clearTimeout(l0);
      const He = B.current, m0 = () => He?.hasAttribute("data-pressed") || q.querySelector("[data-hover]");
      if (!x || L0 === !1 || !He || He.hasAttribute("data-idle") || m0()) return;
      const sn = (lt.current ? L0 : u0) - (performance.now() - rt.current);
      l0 = window.setTimeout(() => {
        m0() || He.setAttribute("data-idle", "");
      }, Math.max(0, sn));
    }, B0 = () => {
      if (Se || r0 || !xe || document.hidden || G === "hover" && !Re) return;
      D0(), x && Z0(O0(pe())), Se = new AbortController();
      const He = Se.signal;
      On();
      const m0 = In(He);
      (async () => {
        do {
          Vl();
          try {
            await p(m0);
          } catch (sn) {
            if (sn instanceof zn) return;
            console.error("[stageshow] script error", sn), Se = null, Dn();
            return;
          }
          G === "loop" && Jo() && Ac(j.current, u, Le.current, x ? O0(pe()) : null);
        } while (G === "loop" && !He.aborted);
        G === "once" && !He.aborted && (r0 = !0, Kl());
      })();
    }, rn = (He = !1) => {
      Dn(), Se && (Se.abort(), Se = null, r0 || nn(He));
    }, ln = () => q.toggleAttribute("data-offscreen", !xe || document.hidden);
    ln();
    const zr = new IntersectionObserver(([He]) => {
      xe = He.isIntersecting, ln(), xe ? B0() : rn();
    });
    zr.observe(ge);
    const Bn = () => {
      ln(), document.hidden ? rn() : B0();
    };
    document.addEventListener("visibilitychange", Bn);
    const Hn = () => {
      Re = !0, B0();
    }, Fn = () => {
      Re = !1, rn(!0);
    };
    return G === "hover" && (ge.addEventListener("pointerenter", Hn), ge.addEventListener("pointerleave", Fn)), () => {
      zr.disconnect(), document.removeEventListener("visibilitychange", Bn), ge.removeEventListener("pointerenter", Hn), ge.removeEventListener("pointerleave", Fn), Dn(), Se?.abort(), Se = null, Ie.current = null, D0();
    };
  }, [H, p, In, G, D]), z.useLayoutEffect(() => {
    x && !H && !nt.current && Ie.current?.(Le.current);
  }, [d]);
  const Mr = z.useMemo(() => ({ theme: b, palette: R, fidelity: W, layout: D }), [b, R, W, D]), Lr = x && (!p || !H || x.still);
  return /* @__PURE__ */ l.jsx("div", { ref: Ce, className: `ss-fit${Q ? ` ${Q}` : ""}`, style: { maxWidth: he ? void 0 : a, height: ze * S }, children: /* @__PURE__ */ l.jsxs(
    "div",
    {
      ref: ve,
      className: "ss-stage",
      "data-specimen": K || void 0,
      "data-unframed": P || void 0,
      "data-still": H || void 0,
      "data-placing": Ql || void 0,
      "data-theme": b,
      "data-palette": R,
      "data-greys": V === "cool" ? "cool" : void 0,
      "data-fidelity": W,
      "data-layout": D,
      style: {
        width: ke,
        height: ze,
        marginLeft: j0 || void 0,
        transform: `scale(${S})`,
        ...O,
        ...Z ? { "--ss-accent": Z, "--ss-accent-2": Z, "--ss-accent-soft": `color-mix(in srgb, ${Z} 14%, transparent)` } : null
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
        /* @__PURE__ */ l.jsx(Yo.Provider, { value: H, children: /* @__PURE__ */ l.jsx(bo.Provider, { value: Mr, children: le(d, It, D) }) }),
        p && /* @__PURE__ */ l.jsx(gc, { rows: [et, qe], at: typeof I == "string" ? I : I[D] }),
        Lr && /* @__PURE__ */ l.jsx(Uc, { cursorRef: B, style: x.style, kind: ie })
      ]
    }
  ) });
}
function kr() {
  return /* @__PURE__ */ l.jsxs("span", { className: "ss-window__lights", children: [
    /* @__PURE__ */ l.jsx("span", { className: "ss-window__dot" }),
    /* @__PURE__ */ l.jsx("span", { className: "ss-window__dot" }),
    /* @__PURE__ */ l.jsx("span", { className: "ss-window__dot" })
  ] });
}
function Kc() {
  return /* @__PURE__ */ l.jsxs("svg", { className: "ss-window__lock", width: "7", height: "8", viewBox: "0 0 7 8", "aria-hidden": !0, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M1.5 3.3V2.4a2 2 0 0 1 4 0v.9", fill: "none", stroke: "currentColor", strokeWidth: "1.1" }),
    /* @__PURE__ */ l.jsx("rect", { x: "0", y: "3.3", width: "7", height: "4.7", rx: "1.2", fill: "currentColor" })
  ] });
}
function Ro({ back: a }) {
  return /* @__PURE__ */ l.jsx("svg", { className: "ss-window__chev", width: "10", height: "10", viewBox: "0 0 10 10", "aria-hidden": !0, children: /* @__PURE__ */ l.jsx("path", { d: a ? "M6.5 1.5 3 5l3.5 3.5" : "M3.5 1.5 7 5 3.5 8.5", fill: "none", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function Gc({ url: a, urlShape: c, tabs: u, nav: p, title: v, sidebar: x, sidebarWidth: C = 180, sidebarStyle: N, toolbar: E, lead: I, body: R, className: V, receded: W, chrome: K, lights: P, lightsSize: U, barSize: Z, children: O, ...re }) {
  const fe = `ss-window ss-recede${V ? ` ${V}` : ""}`, F = U === "large" ? "large" : void 0, Q = Z === "tall" ? "tall" : void 0;
  if (K === "terminal")
    return /* @__PURE__ */ l.jsxs("div", { ...re, className: fe, "data-chrome": "terminal", "data-lights": P === "grey" ? "grey" : void 0, "data-lights-size": F, "data-receded": W || void 0, children: [
      /* @__PURE__ */ l.jsxs("div", { className: "ss-window__bar", children: [
        /* @__PURE__ */ l.jsx(kr, {}),
        v !== void 0 && /* @__PURE__ */ l.jsx("span", { className: "ss-term__title", children: v })
      ] }),
      /* @__PURE__ */ l.jsx("div", { ...R, className: `ss-window__body ss-term${R?.className ? ` ${R.className}` : ""}`, children: O })
    ] });
  if (K === "glass" || K === "card" || K === "hairline")
    return /* @__PURE__ */ l.jsxs("div", { ...re, className: fe, "data-chrome": K, "data-lights": P === "color" || P === "white" ? P : K === "glass" ? "grey" : void 0, "data-receded": W || void 0, children: [
      /* @__PURE__ */ l.jsxs("div", { className: "ss-window__bar", children: [
        /* @__PURE__ */ l.jsx(kr, {}),
        a !== void 0 && /* @__PURE__ */ l.jsxs("span", { className: "ss-window__url", children: [
          K === "glass" && /* @__PURE__ */ l.jsx(Kc, {}),
          /* @__PURE__ */ l.jsx("span", { className: "ss-window__url-text", children: a })
        ] }),
        /* @__PURE__ */ l.jsx("span", { className: "ss-window__end", children: E })
      ] }),
      /* @__PURE__ */ l.jsx("div", { ...R, className: `ss-window__body${R?.className ? ` ${R.className}` : ""}`, children: O })
    ] });
  const le = a !== void 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    p && /* @__PURE__ */ l.jsxs("span", { className: "ss-window__nav", children: [
      /* @__PURE__ */ l.jsx(Ro, { back: !0 }),
      /* @__PURE__ */ l.jsx(Ro, {})
    ] }),
    /* @__PURE__ */ l.jsx("span", { className: "ss-window__url", children: a })
  ] });
  return x !== void 0 ? /* @__PURE__ */ l.jsxs("div", { ...re, className: fe, "data-kind": "sidebar", "data-side": N === "floating" ? "floating" : void 0, "data-lights": P === "grey" ? "grey" : void 0, "data-lights-size": F, "data-bar": Q, "data-receded": W || void 0, "data-url-shape": c, children: [
    /* @__PURE__ */ l.jsxs("aside", { className: "ss-window__side", style: { width: C }, children: [
      /* @__PURE__ */ l.jsx("div", { className: "ss-window__side-top", children: /* @__PURE__ */ l.jsx(kr, {}) }),
      x
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "ss-window__main", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "ss-window__bar", children: [
        v !== void 0 && /* @__PURE__ */ l.jsx("span", { className: "ss-window__heading", children: v }),
        I,
        le,
        /* @__PURE__ */ l.jsx("span", { className: "ss-window__spacer" }),
        E
      ] }),
      /* @__PURE__ */ l.jsx("div", { ...R, className: `ss-window__body${R?.className ? ` ${R.className}` : ""}`, children: O })
    ] })
  ] }) : u?.length ? /* @__PURE__ */ l.jsxs("div", { ...re, className: fe, "data-kind": "tabs", "data-lights": P === "grey" ? "grey" : void 0, "data-lights-size": F, "data-receded": W || void 0, "data-url-shape": c, children: [
    /* @__PURE__ */ l.jsxs("div", { className: "ss-window__tabs", children: [
      /* @__PURE__ */ l.jsx(kr, {}),
      u.map((G, D) => /* @__PURE__ */ l.jsxs("span", { className: "ss-window__tab", "data-active": D === 0 || void 0, children: [
        /* @__PURE__ */ l.jsx("span", { className: "ss-window__favicon" }),
        /* @__PURE__ */ l.jsx("span", { className: "ss-window__tab-label", children: G })
      ] }, D))
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "ss-window__bar", children: [
      le,
      E
    ] }),
    /* @__PURE__ */ l.jsx("div", { ...R, className: `ss-window__body${R?.className ? ` ${R.className}` : ""}`, children: O })
  ] }) : /* @__PURE__ */ l.jsxs("div", { ...re, className: fe, "data-receded": W || void 0, "data-url-shape": c, "data-lights": P === "grey" ? "grey" : void 0, "data-lights-size": F, "data-bar": Q, children: [
    /* @__PURE__ */ l.jsxs("div", { className: "ss-window__bar", children: [
      /* @__PURE__ */ l.jsx(kr, {}),
      le,
      v !== void 0 && /* @__PURE__ */ l.jsx("span", { className: "ss-window__title", "data-toolbar": E ? !0 : void 0, children: v }),
      I,
      a === void 0 && v === void 0 && /* @__PURE__ */ l.jsx("span", { className: "ss-window__spacer" }),
      E
    ] }),
    /* @__PURE__ */ l.jsx("div", { ...R, className: `ss-window__body${R?.className ? ` ${R.className}` : ""}`, children: O })
  ] });
}
const Xc = ["var(--ss-ink-1)", "var(--ss-ink-2)", "var(--ss-ink-3)", "var(--ss-ink-4)", "var(--ss-ink-5)"];
function Sr({ w: a, h: c = 6, tone: u = 3, r: p = 2, shrink: v, className: x, style: C, ...N }) {
  const E = v ?? (typeof a == "number" && a > c * 3);
  return /* @__PURE__ */ l.jsx("span", { ...N, className: `ss-bar${x ? ` ${x}` : ""}`, "data-shrink": E || void 0, style: { width: a, height: c, borderRadius: p, background: Xc[u - 1], ...C } });
}
const Zc = { w: 402, h: 874, r: 64 }, _o = { a: 71, n: 2.31 }, qc = { w: 393, h: 829, r: 42 }, Jc = { w: 412, h: 915, r: 38 }, bc = {
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
}, Yc = {
  pro: [[13, "band"], [10, "var(--ss-phone-rim)"], [9.25, "var(--ss-phone-glass)"]],
  silver: [[13, "band"], [9, "var(--ss-phone-glass)"]],
  bezel: [[12, "var(--ss-phone-glass)"]],
  clay: [[16, "clay"], [1, "var(--ss-phone-seam)"]]
};
function $c(a, c, u, p) {
  const x = 2 / p, C = [];
  return [
    [a - u, u, 1, -1],
    [a - u, c - u, 1, 1],
    [u, c - u, -1, 1],
    [u, u, -1, -1]
  ].forEach(([E, I, R, V], W) => {
    for (let K = 0; K <= 32; K++) {
      const P = K / 32 * (Math.PI / 2), U = W % 2 === 0 ? Math.sin(P) : Math.cos(P), Z = W % 2 === 0 ? Math.cos(P) : Math.sin(P);
      C.push(`${(E + R * u * Math.pow(U, x)).toFixed(2)} ${(I + V * u * Math.pow(Z, x)).toFixed(2)}`);
    }
  }), `M${C.join("L")}Z`;
}
function Ar({ width: a, frame: c = "pro", time: u = "9:41", island: p, status: v, dark: x, wallpaper: C, className: N, style: E, children: I, ...R }) {
  const V = z.useRef(null), [W, K] = z.useState(!0);
  z.useEffect(() => {
    if (c !== "photo" || !V.current) return;
    const ke = getComputedStyle(V.current).backgroundImage.match(/url\(["']?([^"')]+)["']?\)/)?.[1];
    if (!ke) return void K(!1);
    let ze = !0;
    const Ce = new Image();
    return Ce.onerror = () => ze && K(!1), Ce.src = ke, () => {
      ze = !1;
    };
  }, [c, x]);
  const P = c === "photo" && !W ? "pro" : c, { band: U, glass: Z } = bc[P], { fidelity: O } = Bi(), re = P === "android" ? Jc : P === "soft" ? qc : Zc, fe = U + Z, F = a / (re.w + fe * 2), Q = (ye) => ye * F, le = z.useId().replace(/:/g, ""), D = P !== "android" && P !== "soft" ? $c(Q(re.w), Q(re.h), Q(_o.a), _o.n) : null, je = Yc[P], me = P === "pro" || P === "photo" || P === "bezel" || P === "silver" || P === "android", pe = p ?? (me && P !== "photo"), he = v ?? me;
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      ...R,
      className: `ss-phone${N ? ` ${N}` : ""}`,
      "data-frame": P,
      "data-dark": x || void 0,
      style: {
        width: a,
        height: Q(re.h + fe * 2),
        padding: Q(U),
        borderRadius: Q(re.r + fe),
        "--ps": `${F}px`,
        ...E
      },
      children: [
        (je || P === "outline") && D && /* @__PURE__ */ l.jsxs("svg", { className: "ss-phone__bands", width: "100%", height: "100%", "aria-hidden": !0, children: [
          /* @__PURE__ */ l.jsxs("defs", { children: [
            /* @__PURE__ */ l.jsx("linearGradient", { id: `${le}-band`, x1: "0.2", y1: "0", x2: "0.8", y2: "1", children: [0, 0.22, 0.48, 0.74, 1].map((ye, ke) => /* @__PURE__ */ l.jsx("stop", { offset: ye, style: { stopColor: `var(--ss-phone-band-${ke + 1})` } }, ye)) }),
            /* @__PURE__ */ l.jsxs("linearGradient", { id: `${le}-clay`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
              /* @__PURE__ */ l.jsx("stop", { offset: "0", style: { stopColor: "var(--ss-phone-clay-top)" } }),
              /* @__PURE__ */ l.jsx("stop", { offset: "1", style: { stopColor: "var(--ss-phone-clay-bottom)" } })
            ] }),
            P === "outline" && // Line art: a ring between 7 and 8pt out, cut from a mask so it is one hairline
            /* @__PURE__ */ l.jsxs("mask", { id: `${le}-ring`, maskUnits: "userSpaceOnUse", x: "-50%", y: "-50%", width: "200%", height: "200%", children: [
              /* @__PURE__ */ l.jsx("path", { d: D, fill: "none", stroke: "#fff", strokeWidth: Q(16) }),
              /* @__PURE__ */ l.jsx("path", { d: D, fill: "none", stroke: "#000", strokeWidth: Q(16) - 2 })
            ] })
          ] }),
          /* @__PURE__ */ l.jsx("g", { transform: `translate(${Q(fe)} ${Q(fe)})`, strokeLinejoin: "round", children: P === "outline" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            /* @__PURE__ */ l.jsx("rect", { x: -Q(9), y: -Q(9), width: Q(re.w + 18), height: Q(re.h + 18), mask: `url(#${le}-ring)`, style: { fill: "var(--ss-phone-line)" } }),
            /* @__PURE__ */ l.jsx("path", { d: D, fill: "none", strokeWidth: "2", style: { stroke: "var(--ss-line, rgba(0, 0, 0, 0.06))" } })
          ] }) : je.map(([ye, ke]) => /* @__PURE__ */ l.jsx(
            "path",
            {
              d: D,
              fill: "none",
              strokeWidth: Q(ye * 2),
              stroke: ke === "band" || ke === "clay" ? `url(#${le}-${ke})` : void 0,
              style: ke === "band" || ke === "clay" ? void 0 : { stroke: ke }
            },
            ye
          )) })
        ] }),
        /* @__PURE__ */ l.jsx("div", { className: "ss-phone__glass", style: { padding: Q(Z), borderRadius: Q(re.r + Z) }, children: /* @__PURE__ */ l.jsx(
          "div",
          {
            className: "ss-phone__window",
            style: {
              width: Q(re.w),
              height: Q(re.h),
              borderRadius: D ? void 0 : Q(re.r),
              clipPath: D ? `path('${D}')` : void 0
            },
            children: /* @__PURE__ */ l.jsxs(
              "div",
              {
                className: "ss-phone__screen",
                style: { width: re.w, height: re.h, transform: `scale(${F})`, "--ss-screen-r": `${re.r}px`, ...C ? { background: C } : null },
                children: [
                  he && /* @__PURE__ */ l.jsxs("div", { className: "ss-phone__status", children: [
                    /* @__PURE__ */ l.jsx("span", { className: "ss-phone__time", children: O === "minimal" ? /* @__PURE__ */ l.jsx("span", { className: "ss-phone__time-bar" }) : u }),
                    /* @__PURE__ */ l.jsxs("span", { className: "ss-phone__glyphs", children: [
                      /* @__PURE__ */ l.jsx(ed, {}),
                      /* @__PURE__ */ l.jsx(td, {}),
                      /* @__PURE__ */ l.jsx(nd, {})
                    ] })
                  ] }),
                  pe && /* @__PURE__ */ l.jsx("span", { className: "ss-phone__island" }),
                  /* @__PURE__ */ l.jsx("div", { className: "ss-phone__content", "data-status": he || void 0, children: I }),
                  me && /* @__PURE__ */ l.jsx("span", { className: "ss-phone__home" })
                ]
              }
            )
          }
        ) }),
        P === "photo" && // The bezel image is 450 × 920pt with the screen at (24, 23): laid over
        // the body so its cut-out frames the screen exactly
        /* @__PURE__ */ l.jsx("span", { ref: V, className: "ss-phone__photo", style: { left: Q(-8), top: Q(-7), width: Q(450), height: Q(920) } })
      ]
    }
  );
}
function ed() {
  return /* @__PURE__ */ l.jsx("svg", { viewBox: "0 0 20.33 13.67", width: "20.33", height: "13.67", className: "ss-phone__glyph ss-phone__signal", children: [6.33, 8.67, 11, 13.67].map((a, c) => /* @__PURE__ */ l.jsx("rect", { x: c * 5.667, y: 13.67 - a, width: 3.333, height: a, rx: 1.667, fill: "currentColor" }, c)) });
}
function td() {
  return /* @__PURE__ */ l.jsx("svg", { viewBox: "0 0 19.33 14.33", width: "19.33", height: "14.33", className: "ss-phone__glyph ss-phone__wifi", children: /* @__PURE__ */ l.jsx("path", { fillRule: "evenodd", fill: "currentColor", d: "M0.415933 5.54283C0.902185 6.04412 1.66017 5.95818 2.27513 5.41393C4.30595 3.58064 6.83731 2.63535 9.66901 2.63535C12.5007 2.63535 15.0464 3.60928 17.0629 5.41393C17.6636 5.97251 18.4215 6.0298 18.9221 5.54283C19.4226 5.02722 19.4942 4.2538 18.9793 3.70954C16.8341 1.51819 13.3302 0 9.66901 0C6.00783 0 2.48965 1.53251 0.358727 3.72387C-0.156127 4.2538 -0.0989213 5.02722 0.415933 5.55715L0.415933 5.54283ZM3.94841 9.13779C4.50617 9.68205 5.22124 9.62476 5.85051 9.10915C6.88022 8.29276 8.25316 7.73418 9.66901 7.7485C11.0706 7.7485 12.4435 8.29276 13.4875 9.12347C14.1168 9.63908 14.8605 9.66773 15.4039 9.12347C15.9331 8.57921 16.0189 7.7485 15.4611 7.23289C14.0739 5.98683 11.9859 5.11315 9.68332 5.11315C7.38077 5.11315 5.27845 5.98683 3.9055 7.23289C3.41925 7.69121 3.31914 8.47896 3.96271 9.13779L3.94841 9.13779ZM8.72511 13.8929C9.34008 14.4801 9.98365 14.4801 10.5986 13.8929L11.757 12.7757C12.372 12.1742 12.5007 11.4151 11.7999 10.8995C11.2136 10.4841 10.4699 10.212 9.66901 10.212C8.86813 10.212 8.11015 10.4841 7.53809 10.9138C6.83731 11.4151 6.98033 12.1885 7.59529 12.7757L8.73942 13.8929L8.72511 13.8929Z" }) });
}
function nd() {
  return /* @__PURE__ */ l.jsxs("svg", { viewBox: "0 0 29.33 13.67", width: "29.33", height: "13.67", className: "ss-phone__glyph ss-phone__battery", children: [
    /* @__PURE__ */ l.jsx("path", { fill: "currentColor", d: "M0 6.4C0 4.15979 0 3.03969 0.435974 2.18404C0.819467 1.43139 1.43139 0.819467 2.18404 0.435974C3.03969 0 4.15979 0 6.4 0L19.933 0C22.1732 0 23.2933 0 24.149 0.435974C24.9016 0.819467 25.5135 1.43139 25.897 2.18404C26.333 3.03969 26.333 4.15979 26.333 6.4L26.333 7.26666C26.333 9.50687 26.333 10.627 25.897 11.4826C25.5135 12.2353 24.9016 12.8472 24.149 13.2307C23.2933 13.6667 22.1732 13.6667 19.933 13.6667L6.4 13.6667C4.15979 13.6667 3.03969 13.6667 2.18404 13.2307C1.43139 12.8472 0.819467 12.2353 0.435974 11.4826C0 10.627 0 9.50687 0 7.26666L0 6.4Z" }),
    /* @__PURE__ */ l.jsx("path", { fillRule: "evenodd", fill: "currentColor", transform: "translate(27.33 4.33)", d: "M0 0L0 5C0.601505 4.8625 2 3.75 2 2.5C2 1.25 0.601505 0.1375 0 0Z" })
  ] });
}
const $o = z.createContext({ current: !0 });
function Po(a) {
  const c = getComputedStyle(a), u = c.boxSizing === "border-box" ? 0 : [c.paddingLeft, c.paddingRight, c.borderLeftWidth, c.borderRightWidth].reduce((C, N) => C + (parseFloat(N) || 0), 0), p = parseFloat(c.width) + u, v = p && a.getBoundingClientRect().width / p || 1, x = /* @__PURE__ */ new Map();
  return new Map(Array.from(a.children, (C) => {
    const N = C.offsetParent;
    return N && !x.has(N) && x.set(N, N.getBoundingClientRect().top), [C, (C.getBoundingClientRect().top - (N ? x.get(N) : 0)) / v];
  }));
}
function rd({ app: a = "imessage", className: c, style: u, children: p }) {
  const v = z.useRef(null), x = z.useRef(!1), C = v.current ? Po(v.current) : /* @__PURE__ */ new Map();
  z.useEffect(() => {
    x.current = !0;
  }, []), z.useLayoutEffect(() => {
    const R = v.current;
    if (!R) return;
    const V = Po(R);
    for (const [W, K] of Array.from(V)) {
      const P = W, U = C.get(P);
      if (U === void 0 || Math.abs(U - K) < 1e-3) continue;
      const Z = parseFloat(getComputedStyle(P).top) || 0;
      P.style.transition = "none", P.style.top = `${U + Z - K}px`, P.offsetWidth, P.style.transition = "", P.style.top = "";
    }
  });
  const N = z.Children.toArray(p).filter(z.isValidElement), E = (R) => R.type === en ? R.props.from : null, I = N.map((R, V) => {
    if (R.type !== en || R.props.tail !== void 0) return R;
    const W = N.slice(V + 1).find((K) => K.type === en);
    return z.cloneElement(R, { tail: !W || E(W) !== R.props.from });
  });
  return /* @__PURE__ */ l.jsx($o.Provider, { value: x, children: /* @__PURE__ */ l.jsx("div", { ref: v, className: `ss-thread${c ? ` ${c}` : ""}`, "data-app": a, style: u, children: I }) });
}
function en({ avatar: a, from: c, typing: u = !1, tail: p, source: v, tapback: x, className: C, style: N, children: E, ...I }) {
  const { fidelity: R } = Bi(), V = z.useRef(z.useContext($o).current).current, W = z.useRef(null), K = z.useRef(null), P = z.useRef(u), U = z.useRef(!1);
  P.current && !u && (U.current = !0), P.current = u, z.useLayoutEffect(() => {
    const O = W.current;
    if (!O) return;
    const re = K.current;
    O.style.width = "", O.style.height = "";
    const fe = getComputedStyle(O), F = { w: parseFloat(fe.width), h: parseFloat(fe.height) };
    if (K.current = F, !re || re.w === F.w && re.h === F.h) return;
    const Q = O.querySelector(".ss-bubble__text");
    Q && (Q.style.width = getComputedStyle(Q).width), O.style.transition = "none", O.style.width = `${re.w}px`, O.style.height = `${re.h}px`, O.offsetWidth, O.style.transition = "", O.style.width = `${F.w}px`, O.style.height = `${F.h}px`;
    const le = () => {
      O.style.width = "", O.style.height = "", Q && (Q.style.width = "");
    };
    return O.addEventListener("transitionend", le, { once: !0 }), () => O.removeEventListener("transitionend", le);
  }, [u, E]), z.useLayoutEffect(() => {
    const O = W.current;
    if (!O || !V || !v) return;
    const re = O.closest(".ss-stage") ?? document, fe = re.querySelector(`[data-target="${v}"]`) ?? re.querySelector(v), F = O.querySelector(".ss-bubble__text");
    if (!fe || !F || window.matchMedia("(prefers-reduced-motion: reduce)").matches || O.closest("[data-still]")) return;
    O.style.transition = "none", O.style.left = O.style.top = "0px";
    const Q = O.getBoundingClientRect().width / O.offsetWidth || 1, le = fe.getBoundingClientRect(), G = F.getBoundingClientRect(), D = (le.left - G.left) / Q, je = (le.top + le.height / 2 - (G.top + G.height / 2)) / Q, me = "cubic-bezier(0.22, 1, 0.36, 1)";
    O.style.transition = "none", O.style.left = `${D}px`, O.style.top = `${je}px`, O.setAttribute("data-flying", ""), O.style.color = getComputedStyle(fe).color, O.offsetWidth, O.style.transition = `left 0.5s ${me}, top 0.5s ${me}, color 0.3s ease 0.06s`, O.style.left = O.style.top = "", O.removeAttribute("data-flying"), O.style.color = "";
    const pe = (he) => {
      he.target !== O || he.propertyName !== "top" || (O.style.transition = "", O.removeEventListener("transitionend", pe));
    };
    return O.addEventListener("transitionend", pe), () => O.removeEventListener("transitionend", pe);
  }, []);
  let Z = E;
  return R === "minimal" && typeof E == "string" && (Z = /* @__PURE__ */ l.jsx("span", { className: "ss-bar ss-bubble__bar", style: { width: Math.min(180, E.length * 5.5) } })), /* @__PURE__ */ l.jsxs("div", { className: `ss-bubble-row${C ? ` ${C}` : ""}`, "data-from": c, "data-avatar": a ? "" : void 0, style: N, children: [
    a && c !== "me" && /* @__PURE__ */ l.jsx("span", { className: "ss-bubble__avatar", "aria-hidden": !0, children: a }),
    /* @__PURE__ */ l.jsxs("div", { ...I, ref: W, className: "ss-bubble", "data-arrived": V || void 0, "data-source": v ? "" : void 0, "data-tail": p || void 0, "data-typing": u || void 0, "data-grew": U.current || void 0, "data-tapback": x && x.show !== !1 ? "" : void 0, children: [
      x && /* @__PURE__ */ l.jsx("span", { className: "ss-tapback", "data-show": x.show !== !1 || void 0, "aria-hidden": !0, children: /* @__PURE__ */ l.jsx("span", { className: "ss-tapback__emoji", children: x.emoji }) }),
      u ? /* @__PURE__ */ l.jsxs("span", { className: "ss-bubble__dots", "aria-label": "typing", children: [
        /* @__PURE__ */ l.jsx("i", {}),
        /* @__PURE__ */ l.jsx("i", {}),
        /* @__PURE__ */ l.jsx("i", {})
      ] }) : /* @__PURE__ */ l.jsx("span", { className: "ss-bubble__text", children: Z }),
      /* @__PURE__ */ l.jsx("svg", { className: "ss-bubble__tail", viewBox: "0 0 18 16", "aria-hidden": !0, children: /* @__PURE__ */ l.jsx("path", { d: c === "me" ? "M0 0H12V8.5C12 12.6 14 15 17.5 16C15 16.7 12.2 16.5 9.8 15.3L0 15Z" : "M18 0H6V8.5C6 12.6 4 15 0.5 16C3 16.7 5.8 16.5 8.2 15.3L18 15Z" }) })
    ] })
  ] });
}
function ld({ children: a, className: c }) {
  return /* @__PURE__ */ l.jsx("div", { className: `ss-stamp${c ? ` ${c}` : ""}`, children: a });
}
function G0({ from: a, to: c, route: u = "h", show: p, radius: v = 8, dots: x, arrow: C, label: N, labelAt: E = 0.5, dashed: I, className: R }) {
  const V = C && u === "curve" ? { x: c.x - Math.sign(c.x - a.x) * Math.min(8, Math.abs(c.x - a.x) / 3), y: c.y } : c, W = V === c ? Io(a, c, u, v) : `${Io(a, V, u, v)}L${c.x} ${c.y}`, K = x ?? (C ? "none" : "end"), P = z.useRef(null), U = z.useRef(null), Z = `ss-connector-${z.useId().replace(/:/g, "")}`, [O, re] = z.useState(!1);
  z.useLayoutEffect(() => {
    const he = P.current;
    if (!he) return;
    if (!I) {
      he.style.removeProperty("stroke-dasharray");
      return;
    }
    const ye = he.getTotalLength(), ke = Math.max(1, Math.round((ye + 4) / 8)), ze = (ye / (ke * 2 - 1)).toFixed(3);
    he.style.strokeDasharray = `${ze} ${ze}`;
  }, [W, I]), z.useLayoutEffect(() => {
    const he = I ? U.current : P.current;
    if (re(!1), !p || !he) return;
    const ye = "stroke-dashoffset", ke = () => {
      const Ce = getComputedStyle(he);
      Math.abs(parseFloat(Ce.strokeDashoffset)) < 1e-4 && re(!0);
    }, ze = (Ce) => {
      Ce.target === he && Ce.propertyName === ye && ke();
    };
    return he.addEventListener("transitionend", ze), he.addEventListener("transitioncancel", ze), ke(), () => {
      he.removeEventListener("transitionend", ze), he.removeEventListener("transitioncancel", ze);
    };
  }, [W, I, p]);
  const fe = V === c ? To(a, c, u) : [...To(a, V, u), c], F = fe[fe.length - 1], Q = fe.slice(0, -1).reverse().find((he) => Math.hypot(F.x - he.x, F.y - he.y) > 1e-3) ?? F, le = Math.hypot(F.x - Q.x, F.y - Q.y), G = le || 1, D = (F.x - Q.x) / G, je = (F.y - Q.y) / G, me = `M${F.x - D * 6 - je * 4} ${F.y - je * 6 + D * 4}L${F.x} ${F.y}L${F.x - D * 6 + je * 4} ${F.y - je * 6 - D * 4}`, pe = sd(fe, E);
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsxs("svg", { className: `ss-connector${R ? ` ${R}` : ""}`, "data-show": p || void 0, "data-arrived": p && O || void 0, "data-dashed": I || void 0, "aria-hidden": !0, children: [
      I && /* @__PURE__ */ l.jsx("defs", { children: /* @__PURE__ */ l.jsx("mask", { id: Z, maskUnits: "userSpaceOnUse", children: /* @__PURE__ */ l.jsx("path", { ref: U, className: "ss-connector__reveal", d: W, pathLength: "1", style: { fill: "none", stroke: "#fff", strokeWidth: 8 } }) }) }),
      /* @__PURE__ */ l.jsx("path", { ref: P, className: "ss-connector__line", d: W, pathLength: I ? void 0 : 1, mask: I ? `url(#${Z})` : void 0 }),
      C && le > 1e-3 && /* @__PURE__ */ l.jsx("path", { d: me, className: "ss-connector__arrow" }),
      K === "both" && /* @__PURE__ */ l.jsx("circle", { cx: a.x, cy: a.y, r: 3, className: "ss-connector__dot ss-connector__dot--start" }),
      K !== "none" && /* @__PURE__ */ l.jsx("circle", { cx: c.x, cy: c.y, r: 3, className: "ss-connector__dot" })
    ] }),
    N !== void 0 && /* @__PURE__ */ l.jsx("span", { className: "ss-connector__label", "data-show": p || void 0, "data-arrived": p && O || void 0, "data-step": typeof N == "number" || void 0, style: { left: pe.x, top: pe.y }, children: N })
  ] });
}
function e1(a, c) {
  const u = (a.x + c.x) / 2;
  return [{ x: u, y: a.y }, { x: u, y: c.y }];
}
function To(a, c, u) {
  if (u === "straight") return [a, c];
  if (u === "curve") {
    const [p, v] = e1(a, c);
    return Array.from({ length: 25 }, (x, C) => {
      const N = C / 24, E = 1 - N;
      return {
        x: E * E * E * a.x + 3 * E * E * N * p.x + 3 * E * N * N * v.x + N * N * N * c.x,
        y: E * E * E * a.y + 3 * E * E * N * p.y + 3 * E * N * N * v.y + N * N * N * c.y
      };
    });
  }
  if (u === "step") {
    const p = (a.x + c.x) / 2;
    return [a, { x: p, y: a.y }, { x: p, y: c.y }, c];
  }
  return u === "h" ? [a, { x: c.x, y: a.y }, c] : [a, { x: a.x, y: c.y }, c];
}
function sd(a, c) {
  const u = a.slice(1).map((v, x) => Math.hypot(v.x - a[x].x, v.y - a[x].y));
  let p = u.reduce((v, x) => v + x, 0) * Math.max(0, Math.min(1, c));
  for (let v = 0; v < u.length; v++) {
    if (p <= u[v] || v === u.length - 1) {
      const x = u[v] ? Math.min(1, p / u[v]) : 0;
      return { x: a[v].x + (a[v + 1].x - a[v].x) * x, y: a[v].y + (a[v + 1].y - a[v].y) * x };
    }
    p -= u[v];
  }
  return a[0];
}
function Io(a, c, u, p) {
  if (u === "straight") return `M${a.x} ${a.y}L${c.x} ${c.y}`;
  if (u === "curve") {
    const [I, R] = e1(a, c);
    return `M${a.x} ${a.y}C${I.x} ${I.y} ${R.x} ${R.y} ${c.x} ${c.y}`;
  }
  const v = c.x - a.x, x = c.y - a.y;
  if (u === "step") {
    const I = (a.x + c.x) / 2, R = Math.min(p, Math.abs(v) / 2, Math.abs(x) / 2), V = Math.sign(v) || 1, W = Math.sign(x) || 1;
    return R ? `M${a.x} ${a.y}H${I - V * R}Q${I} ${a.y} ${I} ${a.y + W * R}V${c.y - W * R}Q${I} ${c.y} ${I + V * R} ${c.y}H${c.x}` : `M${a.x} ${a.y}H${I}V${c.y}H${c.x}`;
  }
  const C = Math.min(p, Math.abs(v), Math.abs(x)), N = Math.sign(v) || 1, E = Math.sign(x) || 1;
  return u === "h" ? `M${a.x} ${a.y}H${c.x - N * C}Q${c.x} ${a.y} ${c.x} ${a.y + E * C}V${c.y}` : `M${a.x} ${a.y}V${c.y - E * C}Q${a.x} ${c.y} ${a.x + N * C} ${c.y}H${c.x}`;
}
const id = "012345678901234567890123456789".split(""), Dl = 10, ad = (a) => {
  const c = /^(.*\d)(\s*)([^\d\s.,]+)$/.exec(a);
  return c ? { head: c[1], space: c[2].length > 0, unit: c[3] } : { head: a, space: !1, unit: "" };
}, Oo = (a) => {
  const c = [];
  for (let u = a.length - 1; u >= 0; u--) {
    const p = a[u];
    p >= "0" && p <= "9" && c.push(Number(p));
  }
  return c;
};
function $t({ value: a, format: c = (N) => Math.round(N).toLocaleString("en-US"), duration: u = 700, stagger: p = 45, className: v, style: x, ...C }) {
  const N = Hi(), E = z.useRef(null), I = c(a), { head: R, space: V, unit: W } = ad(I), K = R.split(""), P = Oo(I), [U, Z] = z.useState(() => P.map((F) => Dl + F)), O = z.useRef({ text: I, value: a, idx: U });
  O.current.idx = U;
  const re = z.useRef(!1);
  z.useLayoutEffect(() => {
    const F = E.current;
    if (!F) return;
    const Q = O.current;
    if (Q.text === I) return;
    const le = N || u <= 0 || !!F.closest("[data-instant], [data-offscreen]"), G = Oo(Q.text), D = a >= Q.value, je = P.map((me, pe) => {
      const he = G[pe], ye = Q.idx[pe];
      return he === void 0 || ye === void 0 || le ? Dl + me : he === me ? ye : D ? ye + (me - he + 10) % 10 : ye - (he - me + 10) % 10;
    });
    if (F.toggleAttribute("data-snap", le), !le) {
      for (const me of Array.from(F.querySelectorAll(".ss-count__strip"))) getComputedStyle(me).transform;
      F.setAttribute("data-rolling", "");
    }
    O.current = { text: I, value: a, idx: je }, Z(je);
  }, [I, a, N, u]), z.useEffect(() => {
    const F = E.current;
    if (!F || !F.hasAttribute("data-rolling")) return;
    const Q = window.setTimeout(() => {
      F.setAttribute("data-snap", ""), re.current = !0;
      const le = P.map((G) => Dl + G);
      O.current.idx = le, Z(le), F.removeAttribute("data-rolling");
    }, u + p * P.length + 60);
    return () => window.clearTimeout(Q);
  }, [U]), z.useLayoutEffect(() => {
    const F = E.current;
    if (!(!F || !re.current)) {
      re.current = !1;
      for (const Q of Array.from(F.querySelectorAll(".ss-count__strip"))) getComputedStyle(Q).transform;
      F.removeAttribute("data-snap");
    }
  }, [U]);
  let fe = P.length;
  return /* @__PURE__ */ l.jsxs("span", { ...C, ref: E, className: `ss-count${v ? ` ${v}` : ""}`, style: x, "aria-label": I, children: [
    K.map((F, Q) => {
      if (F < "0" || F > "9") return /* @__PURE__ */ l.jsx("span", { className: "ss-count__char", "aria-hidden": !0, children: F }, `s${Q}-${F}`);
      const le = --fe, G = U[le] ?? Dl + Number(F);
      return /* @__PURE__ */ l.jsx("span", { className: "ss-count__digit", "data-crop": !0, "aria-hidden": !0, children: /* @__PURE__ */ l.jsx(
        "span",
        {
          className: "ss-count__strip",
          style: { transform: `translateY(${-G}em)`, transitionDuration: `${u}ms`, transitionDelay: `${le * p}ms` },
          children: id.map((D, je) => /* @__PURE__ */ l.jsx("span", { children: D }, je))
        }
      ) }, `d${le}`);
    }),
    W && /* @__PURE__ */ l.jsx("span", { className: "ss-count__unit", "data-space": V || void 0, "aria-hidden": !0, children: W })
  ] });
}
function h0({ open: a, reveal: c = "clip", from: u = "above", solid: p = !1, children: v, className: x, ...C }) {
  const [N, E] = z.useState(!1), [I, R] = z.useState(!1), V = z.useRef(null), W = z.useRef(!0);
  return z.useLayoutEffect(() => {
    const K = V.current?.scrollHeight ?? 0;
    if (K && R(K > 44), W.current) return void (W.current = !1);
    E(!0);
    const P = setTimeout(() => E(!1), 900);
    return () => clearTimeout(P);
  }, [a]), /* @__PURE__ */ l.jsx(
    "div",
    {
      ...C,
      className: `ss-collapse${x ? ` ${x}` : ""}`,
      "data-open": a || void 0,
      "data-reveal": c,
      "data-solid": p || void 0,
      "data-from": c === "drop" ? u : void 0,
      "data-moving": N || void 0,
      "data-tall": I || void 0,
      onTransitionEnd: (K) => {
        K.target === K.currentTarget && K.propertyName === "grid-template-rows" && E(!1), C.onTransitionEnd?.(K);
      },
      children: /* @__PURE__ */ l.jsx("div", { ref: V, className: "ss-collapse__inner", "data-crop": c === "clip" || void 0, children: v })
    }
  );
}
function Fi({ value: a, states: c, align: u = "center", className: p, style: v, ...x }) {
  const C = Hi();
  return /* @__PURE__ */ l.jsx("span", { ...x, className: `ss-states${p ? ` ${p}` : ""}`, "data-align": u, "data-reduced": C || void 0, style: v, children: Object.keys(c).map((N) => /* @__PURE__ */ l.jsx("span", { className: "ss-states__item", "data-on": N === a || void 0, "aria-hidden": N !== a || void 0, children: c[N] }, N)) });
}
function t1({ text: a, count: c, mark: u, className: p, style: v, ...x }) {
  const C = a.split(" "), N = C.map((E, I) => !!u?.(E, I));
  return /* @__PURE__ */ l.jsx("span", { ...x, className: `ss-stream${p ? ` ${p}` : ""}`, style: v, children: C.map((E, I) => {
    const R = N[I] && N[I + 1];
    return /* @__PURE__ */ l.jsxs("span", { children: [
      /* @__PURE__ */ l.jsxs("span", { className: "ss-stream__w", "data-on": I < c || void 0, "data-mark": N[I] || void 0, "data-join": R || void 0, "data-joined": N[I] && N[I - 1] || void 0, children: [
        E,
        R ? " " : ""
      ] }),
      !R && I < C.length - 1 ? " " : ""
    ] }, I);
  }) });
}
const Do = ["#c98f6e", "#6f9b7d", "#7b86c7", "#c47a9e", "#8c9ab0", "#c2a35a"], od = (a) => {
  let c = 0;
  for (const u of a) c = (c * 31 + u.charCodeAt(0)) % 9973;
  return Do[c % Do.length];
};
function Rn({ name: a = "", plain: c = !1, size: u = 24, tone: p = a ? "person" : "ink", src: v, ring: x, className: C, style: N, ...E }) {
  const { fidelity: I } = Bi(), R = c || I === "minimal", V = p === "person" && !R ? { background: od(a), color: "#fff" } : void 0, W = a.trim().split(/\s+/).filter(Boolean), K = p === "ios" ? (W[0]?.[0] ?? "") + (W.length > 1 ? W[W.length - 1][0] : "") : a.trim()[0] ?? "";
  return /* @__PURE__ */ l.jsx(
    "span",
    {
      ...E,
      className: `ss-avatar${C ? ` ${C}` : ""}`,
      "data-tone": p,
      "data-ring": x,
      style: { width: u, height: u, fontSize: Math.round(u * (p === "ios" ? 0.4 : u < 24 ? 0.5 : 0.42)), ...V, ...N },
      children: v && !R ? /* @__PURE__ */ l.jsx("img", { src: v, alt: "" }) : R ? null : /* @__PURE__ */ l.jsx("span", { className: "ss-avatar__initial", children: K.toUpperCase() })
    }
  );
}
function Wl({ on: a, pending: c, size: u = 16, className: p, ...v }) {
  return /* @__PURE__ */ l.jsx("span", { ...v, className: `ss-check${p ? ` ${p}` : ""}`, "data-on": a || void 0, "data-pending": c && !a || void 0, style: { width: u, height: u, ...v.style }, children: /* @__PURE__ */ l.jsxs("svg", { viewBox: "0 0 16 16", width: u, height: u, "aria-hidden": !0, children: [
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
const ud = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), n1 = (...a) => a.filter((c, u, p) => !!c && c.trim() !== "" && p.indexOf(c) === u).join(" ").trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var cd = {
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
const dd = z.forwardRef(
  ({
    color: a = "currentColor",
    size: c = 24,
    strokeWidth: u = 2,
    absoluteStrokeWidth: p,
    className: v = "",
    children: x,
    iconNode: C,
    ...N
  }, E) => z.createElement(
    "svg",
    {
      ref: E,
      ...cd,
      width: c,
      height: c,
      stroke: a,
      strokeWidth: p ? Number(u) * 24 / Number(c) : u,
      className: n1("lucide", v),
      ...N
    },
    [
      ...C.map(([I, R]) => z.createElement(I, R)),
      ...Array.isArray(x) ? x : [x]
    ]
  )
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ae = (a, c) => {
  const u = z.forwardRef(
    ({ className: p, ...v }, x) => z.createElement(dd, {
      ref: x,
      iconNode: c,
      className: n1(`lucide-${ud(a)}`, p),
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
const fd = ae("Archive", [
  ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
  ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
  ["path", { d: "M10 12h4", key: "a56b0p" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hd = ae("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r1 = ae("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pd = ae("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l1 = ae("Bell", [
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
const md = ae("Bus", [
  ["path", { d: "M8 6v6", key: "18i7km" }],
  ["path", { d: "M15 6v6", key: "1sg6z9" }],
  ["path", { d: "M2 12h19.6", key: "de5uta" }],
  [
    "path",
    {
      d: "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",
      key: "1wwztk"
    }
  ],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }],
  ["path", { d: "M9 18h5", key: "lrx6i" }],
  ["circle", { cx: "16", cy: "18", r: "2", key: "1v4tcr" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vd = ae("CalendarCheck", [
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
const yd = ae("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pn = ae("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s1 = ae("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gd = ae("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xd = ae("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wd = ae("CreditCard", [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kd = ae("Database", [
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
const jd = ae("Ellipsis", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nd = ae("FileText", [
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
const Sd = ae("File", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cd = ae("Gamepad2", [
  ["line", { x1: "6", x2: "10", y1: "11", y2: "11", key: "1gktln" }],
  ["line", { x1: "8", x2: "8", y1: "9", y2: "13", key: "qnk9ow" }],
  ["line", { x1: "15", x2: "15.01", y1: "12", y2: "12", key: "krot7o" }],
  ["line", { x1: "18", x2: "18.01", y1: "10", y2: "10", key: "1lcuu1" }],
  [
    "path",
    {
      d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
      key: "mfqc10"
    }
  ]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ed = ae("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ad = ae("GripVertical", [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Md = ae("Headset", [
  [
    "path",
    {
      d: "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",
      key: "12oyoe"
    }
  ],
  ["path", { d: "M21 16v2a4 4 0 0 1-4 4h-5", key: "1x7m43" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i1 = ae("Heart", [
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
const Wi = ae("House", [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt"
    }
  ]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ld = ae("Landmark", [
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
const a1 = ae("LayoutGrid", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zd = ae("ListChecks", [
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
const o1 = ae("Lock", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ui = ae("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u1 = ae("MoveRight", [
  ["path", { d: "M18 8L22 12L18 16", key: "1r0oui" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rd = ae("Pause", [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _d = ae("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qi = ae("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c1 = ae("ReceiptText", [
  [
    "path",
    { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }
  ],
  ["path", { d: "M14 8H8", key: "1l3xfs" }],
  ["path", { d: "M16 12H8", key: "1fr5h0" }],
  ["path", { d: "M13 16H8", key: "wsln4y" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pd = ae("RefreshCw", [
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
const Td = ae("ScanFace", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
  ["path", { d: "M9 9h.01", key: "1q5me6" }],
  ["path", { d: "M15 9h.01", key: "x1ddxp" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d1 = ae("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vi = ae("Send", [
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
const Id = ae("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Od = ae("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bo = ae("ShoppingBag", [
  ["path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", key: "hou9p0" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dd = ae("Smartphone", [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bd = ae("Sparkles", [
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
const Hd = ae("Split", [
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
const Fd = ae("Star", [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wd = ae("Ticket", [
  [
    "path",
    {
      d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      key: "qn84l0"
    }
  ],
  ["path", { d: "M13 5v2", key: "dyzc3o" }],
  ["path", { d: "M13 17v2", key: "1ont0d" }],
  ["path", { d: "M13 11v2", key: "1wjjxi" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ud = ae("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f1 = ae("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ho = ae("TriangleAlert", [
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
const Ul = ae("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pi = ae("Wallet", [
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
const h1 = ae("Wifi", [
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
const Qd = ae("Workflow", [
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
const p1 = ae("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m1 = ae("Zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
]), Fo = {
  check: Pn,
  plus: Qi,
  close: p1,
  "chevron-right": gd,
  "chevron-down": s1,
  search: d1,
  globe: Ed,
  external: pd,
  clock: xd,
  archive: fd,
  trash: Ud,
  more: jd,
  arrow: r1,
  file: Sd,
  user: Ul,
  bell: l1,
  card: wd,
  bolt: m1,
  lock: o1,
  play: _d,
  pause: Rd,
  faceid: Td,
  wifi: h1,
  heart: i1,
  star: Fd,
  calendar: yd,
  mail: Ui,
  send: Vi,
  home: Wi,
  gear: Id,
  grip: Ad
}, Vd = {
  chip: "M3.5 2.5h9a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 12V4a1.5 1.5 0 0 1 1.5-1.5zM2 6h4M2 10h4M10 6h4M10 10h4M6 2.5v11M10 2.5v11M6 8h4",
  contactless: "M6.8 6.2a2.5 2.5 0 0 1 0 3.6M8.5 4.5a5 5 0 0 1 0 7M10.3 2.7a7.5 7.5 0 0 1 0 10.6"
}, Kd = {
  bolt: "M9.6 1.2 3.2 8.9a.6.6 0 0 0 .5 1H7.4l-1 4.9a.4.4 0 0 0 .7.3l6.4-7.7a.6.6 0 0 0-.5-1H9.3l1-4.9a.4.4 0 0 0-.7-.3Z",
  card: "M3 3h10a1.75 1.75 0 0 1 1.75 1.75V5.6H1.25v-.85A1.75 1.75 0 0 1 3 3Zm-1.75 4.4h13.5v3.85A1.75 1.75 0 0 1 13 13H3a1.75 1.75 0 0 1-1.75-1.75Zm2.25 2.6v1h3v-1Z",
  bell: "M8 1.25a4.25 4.25 0 0 0-4.25 4.25v3.1l-1.3 2.1a.6.6 0 0 0 .5.9h10.1a.6.6 0 0 0 .5-.9l-1.3-2.1V5.5A4.25 4.25 0 0 0 8 1.25ZM6.2 13.1a1.9 1.9 0 0 0 3.6 0Z",
  user: "M8 1.5a3.1 3.1 0 1 1 0 6.2 3.1 3.1 0 0 1 0-6.2Zm0 7.4c3.1 0 5.4 1.8 5.9 4.6a.7.7 0 0 1-.7.8H2.8a.7.7 0 0 1-.7-.8C2.6 10.7 4.9 8.9 8 8.9Z",
  clock: "M8 1.25a6.75 6.75 0 1 1 0 13.5 6.75 6.75 0 0 1 0-13.5Zm-.75 3v4.2l2.9 1.75.75-1.25-2.15-1.3V4.25Z",
  check: "M8 1.25a6.75 6.75 0 1 1 0 13.5 6.75 6.75 0 0 1 0-13.5Zm3 4.3-.95-.8-3.3 3.95-1.85-1.8-.85.9 2.8 2.75Z",
  // SF Symbols-style solids for Apple-native demos
  lock: "M8 1.25A3.25 3.25 0 0 0 4.75 4.5v2H4.5A1.5 1.5 0 0 0 3 8v5.25a1.5 1.5 0 0 0 1.5 1.5h7a1.5 1.5 0 0 0 1.5-1.5V8a1.5 1.5 0 0 0-1.5-1.5h-.25v-2A3.25 3.25 0 0 0 8 1.25Zm-1.75 5.25v-2a1.75 1.75 0 0 1 3.5 0v2Z",
  play: "M4.5 2.6v10.8a.8.8 0 0 0 1.2.7l8.6-5.4a.8.8 0 0 0 0-1.4L5.7 1.9a.8.8 0 0 0-1.2.7Z",
  pause: "M4 2.5h2.6a.6.6 0 0 1 .6.6v9.8a.6.6 0 0 1-.6.6H4a.6.6 0 0 1-.6-.6V3.1a.6.6 0 0 1 .6-.6Zm5.4 0H12a.6.6 0 0 1 .6.6v9.8a.6.6 0 0 1-.6.6H9.4a.6.6 0 0 1-.6-.6V3.1a.6.6 0 0 1 .6-.6Z",
  heart: "M8 14.2c-.2 0-6.6-3.7-6.6-8.4a3.6 3.6 0 0 1 6.6-2 3.6 3.6 0 0 1 6.6 2c0 4.7-6.4 8.4-6.6 8.4Z",
  star: "M8 1.2a.6.6 0 0 1 .55.35l1.75 3.6 3.95.55a.6.6 0 0 1 .33 1.03l-2.86 2.8.68 3.94a.6.6 0 0 1-.87.63L8 12.25 4.47 14.1a.6.6 0 0 1-.87-.63l.68-3.94-2.86-2.8a.6.6 0 0 1 .33-1.03l3.95-.55 1.75-3.6A.6.6 0 0 1 8 1.2Z",
  home: "M7.5 1.6a.8.8 0 0 1 1 0l5.7 4.6a.8.8 0 0 1 .3.6v6.7a1 1 0 0 1-1 1H10V10.3H6v4.2H2.5a1 1 0 0 1-1-1V6.8a.8.8 0 0 1 .3-.6Z",
  gear: "M6.67 2.46L7.03 0.81L8.97 0.81L9.33 2.46L10.98 3.14L12.40 2.24L13.76 3.60L12.86 5.02L13.54 6.67L15.19 7.03L15.19 8.97L13.54 9.33L12.86 10.98L13.76 12.40L12.40 13.76L10.98 12.86L9.33 13.54L8.97 15.19L7.03 15.19L6.67 13.54L5.02 12.86L3.60 13.76L2.24 12.40L3.14 10.98L2.46 9.33L0.81 8.97L0.81 7.03L2.46 6.67L3.14 5.02L2.24 3.60L3.60 2.24L5.02 3.14ZM5.60 8.00a2.40 2.40 0 1 0 4.80 0a2.40 2.40 0 1 0 -4.80 0Z",
  calendar: "M3.5 2h9A2 2 0 0 1 14.5 4v8.5a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm-.5 4.5v6a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-6ZM4.2 7.6h1.6v1.6h-1.6ZM7.2 7.6h1.6v1.6h-1.6ZM10.2 7.6h1.6v1.6h-1.6ZM4.2 10.2h1.6v1.6h-1.6ZM7.2 10.2h1.6v1.6h-1.6ZM10.2 10.2h1.6v1.6h-1.6Z",
  send: "M14.3 1.7a.55.55 0 0 0-.6-.12L1.75 6.4a.55.55 0 0 0 0 1.02l4.6 1.85 4.9-4.13a.2.2 0 0 1 .28.28L7.4 10.3l1.84 4.6a.55.55 0 0 0 1.02 0l4.83-11.95a.55.55 0 0 0-.12-.6Z",
  mail: "M2.5 3h11A1.5 1.5 0 0 1 15 4.4L8 8.9 1 4.4A1.5 1.5 0 0 1 2.5 3ZM1 6.1v5.4A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.1l-6.6 4.2a.8.8 0 0 1-.8 0Z"
};
function Wo({ name: a, size: c = 16, stroke: u = 1.5, filled: p, className: v, style: x }) {
  const C = p ? Kd[a] : void 0, N = `ss-icon${v ? ` ${v}` : ""}`;
  if (!C && a in Fo) {
    const E = Fo[a];
    return /* @__PURE__ */ l.jsx(E, { size: c, strokeWidth: u, absoluteStrokeWidth: !0, className: N, style: x, "aria-hidden": !0 });
  }
  return /* @__PURE__ */ l.jsx("svg", { viewBox: "0 0 16 16", width: c, height: c, className: N, style: x, "aria-hidden": !0, children: C ? /* @__PURE__ */ l.jsx("path", { d: C, fill: "currentColor", fillRule: "evenodd" }) : /* @__PURE__ */ l.jsx("path", { d: Vd[a], fill: "none", stroke: "currentColor", strokeWidth: u, strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function Gd({ size: a = 14, className: c, style: u, ...p }) {
  return /* @__PURE__ */ l.jsxs("svg", { ...p, className: `ss-spinner${c ? ` ${c}` : ""}`, viewBox: "0 0 16 16", width: a, height: a, style: u, "aria-hidden": !0, children: [
    /* @__PURE__ */ l.jsx("circle", { cx: "8", cy: "8", r: "6.25", fill: "none", stroke: "currentColor", strokeOpacity: "0.18", strokeWidth: "1.5" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 1.75a6.25 6.25 0 0 1 6.25 6.25", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
  ] });
}
function Xd({ value: a, tone: c = "accent", className: u, style: p, ...v }) {
  return /* @__PURE__ */ l.jsx("span", { ...v, className: `ss-meter${u ? ` ${u}` : ""}`, "data-tone": c, style: p, children: /* @__PURE__ */ l.jsx("span", { className: "ss-meter__fill", style: { clipPath: `inset(0 ${(1 - Math.max(0, Math.min(1, a))) * 100}% 0 0 round 3px)` } }) });
}
function Ri({ lead: a, title: c, subtitle: u, meta: p, preview: v, unread: x, selected: C, pad: N = 12, className: E, style: I, children: R, ...V }) {
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      ...V,
      className: `ss-row${E ? ` ${E}` : ""}`,
      "data-selected": C || void 0,
      "data-unread": x || void 0,
      "data-lead": a ? "" : void 0,
      style: { "--ss-row-pad": `${N}px`, ...I },
      children: [
        x && /* @__PURE__ */ l.jsx("span", { className: "ss-row__dot", "aria-hidden": !0 }),
        a && /* @__PURE__ */ l.jsx("span", { className: "ss-row__lead", children: a }),
        /* @__PURE__ */ l.jsxs("span", { className: "ss-row__body", children: [
          /* @__PURE__ */ l.jsxs("span", { className: "ss-row__head", children: [
            /* @__PURE__ */ l.jsx("span", { className: "ss-row__title", children: c }),
            p && /* @__PURE__ */ l.jsx("span", { className: "ss-row__meta", children: p })
          ] }),
          u && /* @__PURE__ */ l.jsx("span", { className: "ss-row__subtitle", children: u })
        ] }),
        v && (Array.isArray(v) && v.every((W) => typeof W == "number") ? /* @__PURE__ */ l.jsx("span", { className: "ss-row__preview", "aria-hidden": !0, children: v.map((W, K) => /* @__PURE__ */ l.jsx(Sr, { w: W, h: 6, tone: 2 }, K)) }) : /* @__PURE__ */ l.jsx("span", { className: "ss-row__preview", "data-text": !0, children: v })),
        R
      ]
    }
  );
}
const Zd = { me1: !1, chip1: !1, reply1: !1, typing1: !0, done1: !1, me: !1, chip: !1, reply: !1, typing: !0, agent: !1, queue: !1, att: 0, link: !1 }, qd = { me1: !0, chip1: !0, reply1: !0, typing1: !1, done1: !0, me: !0, chip: !0, reply: !0, typing: !1, agent: !0, queue: !0, att: 3, link: !0 };
async function Jd(a) {
  await a.wait(700), a.mark("ask1"), await a.set({ me1: !0 }), await a.wait(650), a.mark("intent1"), await a.set({ chip1: !0 }), await a.wait(650), await a.set({ reply1: !0 }), await a.wait(1e3), await a.set({ typing1: !1 }), await a.wait(800), a.mark("resolved"), await a.set({ done1: !0 }), await a.wait(1100), a.mark("ask"), await a.set({ me: !0 }), await a.wait(700), a.mark("intent"), await a.set({ chip: !0 }), await a.wait(700), await a.set({ reply: !0 }), await a.wait(1e3), a.mark("reply"), await a.set({ typing: !1 }), await a.wait(900), a.mark("handoff"), await a.set({ queue: !0 }), await a.wait(700), await a.stagger([1, 2, 3], (c) => a.put({ att: c }), 110), await a.wait(800), a.mark("join"), await a.set({ agent: !0 }), await a.wait(900), await a.set({ link: !0 }), await a.wait(2600), a.mark("exit"), await a.set({ link: !1 }), await a.wait(600), await a.stagger(["agent", "queue", "reply", "chip", "me", "done1", "reply1", "chip1", "me1"], (c) => a.put({ [c]: !1 }), 55), await a.wait(700), await a.snap({ att: 0, typing: !0, typing1: !0 }), await a.wait(100);
}
const bd = "Ada transaksi yang bukan saya";
function Yd() {
  return /* @__PURE__ */ l.jsx(
    Er,
    {
      width: 598,
      height: 380,
      compact: { below: 560, width: 358, height: 340 },
      initial: Zd,
      poster: qd,
      script: Jd,
      play: "loop",
      theme: "dark",
      className: "lr",
      children: (a, c, u) => {
        const p = u === "wide", v = p ? c("agent") : null, x = p ? c("case") : null;
        return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsxs(Ar, { width: p ? 340 : 326, className: "lr-phone", wallpaper: "#eef0f3", children: [
            /* @__PURE__ */ l.jsxs(rd, { className: "lr-thread", children: [
              /* @__PURE__ */ l.jsx(ld, { children: "Hari ini 09.41" }),
              /* @__PURE__ */ l.jsx(h0, { open: a.me1, reveal: "drop", from: "below", children: /* @__PURE__ */ l.jsx("div", { className: "lr-gap", children: /* @__PURE__ */ l.jsx(en, { from: "me", tail: !0, children: "Limit PayLater saya kok belum naik?" }) }) }),
              /* @__PURE__ */ l.jsx(h0, { open: a.chip1, reveal: "drop", from: "below", children: /* @__PURE__ */ l.jsx("div", { className: "lr-intent lr-gap", children: "Intent · Limit" }) }),
              /* @__PURE__ */ l.jsx(h0, { open: a.reply1, reveal: "drop", from: "below", children: /* @__PURE__ */ l.jsx("div", { className: "lr-gap", children: /* @__PURE__ */ l.jsx(en, { from: "them", tail: !0, typing: a.typing1, children: "Limit dievaluasi tiap bulan." }) }) }),
              /* @__PURE__ */ l.jsx(h0, { open: a.done1, reveal: "drop", from: "below", children: /* @__PURE__ */ l.jsxs("div", { className: "lr-done", children: [
                /* @__PURE__ */ l.jsx(Wo, { name: "check", size: 14, stroke: 2.4 }),
                "Selesai tanpa agen"
              ] }) }),
              /* @__PURE__ */ l.jsx(h0, { open: a.me, reveal: "drop", from: "below", children: /* @__PURE__ */ l.jsx("div", { className: "lr-gap", children: /* @__PURE__ */ l.jsx(en, { from: "me", tail: !0, children: bd }) }) }),
              /* @__PURE__ */ l.jsx(h0, { open: a.chip, reveal: "drop", from: "below", children: /* @__PURE__ */ l.jsx("div", { className: "lr-intent lr-gap", children: "Intent · Indikasi fraud" }) }),
              /* @__PURE__ */ l.jsx(h0, { open: a.reply, reveal: "drop", from: "below", children: /* @__PURE__ */ l.jsx("div", { className: "lr-gap", children: /* @__PURE__ */ l.jsx(en, { from: "them", tail: !0, typing: a.typing, children: "Akunmu kami amankan dulu." }) }) }),
              /* @__PURE__ */ l.jsx(h0, { open: a.agent, reveal: "drop", from: "below", children: /* @__PURE__ */ l.jsxs("div", { className: "lr-agent lr-gap", children: [
                /* @__PURE__ */ l.jsx(Rn, { name: "Rina", size: 26 }),
                /* @__PURE__ */ l.jsx("span", { "data-target": "agent", children: "Rina, agen keamanan, bergabung" })
              ] }) })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "lr-compose", children: [
              /* @__PURE__ */ l.jsx("span", { className: "lr-field", children: "Tulis pesan" }),
              /* @__PURE__ */ l.jsx("span", { className: "lr-send", "aria-hidden": !0, children: /* @__PURE__ */ l.jsx(Wo, { name: "send", size: 16, filled: !0 }) })
            ] })
          ] }),
          p && /* @__PURE__ */ l.jsxs("div", { className: "lr-queue", children: [
            /* @__PURE__ */ l.jsx("div", { className: "lr-queue__head", children: "Agent queue" }),
            /* @__PURE__ */ l.jsx(Ri, { lead: /* @__PURE__ */ l.jsx(Rn, { plain: !0, size: 28 }), title: /* @__PURE__ */ l.jsx(Sr, { w: 92, h: 8 }), subtitle: /* @__PURE__ */ l.jsx(Sr, { w: 64, h: 6, tone: 2 }), pad: 0 }),
            /* @__PURE__ */ l.jsx(Ri, { lead: /* @__PURE__ */ l.jsx(Rn, { plain: !0, size: 28 }), title: /* @__PURE__ */ l.jsx(Sr, { w: 78, h: 8 }), subtitle: /* @__PURE__ */ l.jsx(Sr, { w: 52, h: 6, tone: 2 }), pad: 0 }),
            /* @__PURE__ */ l.jsx(h0, { open: a.queue, reveal: "drop", children: /* @__PURE__ */ l.jsxs("div", { className: "lr-case", "data-target": "case", children: [
              /* @__PURE__ */ l.jsx(Ri, { lead: /* @__PURE__ */ l.jsx(Rn, { name: "Rina", size: 28 }), title: "Fraud suspected", subtitle: "Handled by Rina", pad: 0 }),
              /* @__PURE__ */ l.jsx("div", { className: "lr-att", children: ["Chat history", "Transactions", "Account status"].map((C, N) => /* @__PURE__ */ l.jsxs("div", { className: "lr-att__row", "data-on": a.att > N || void 0, children: [
                /* @__PURE__ */ l.jsx(Wl, { on: a.att > N, size: 14 }),
                C
              ] }, C)) })
            ] }) })
          ] }),
          p && v && x && /* @__PURE__ */ l.jsx(G0, { from: { x: v.x + v.width, y: v.y + v.height / 2 }, to: { x: x.x, y: x.y + 22 }, route: "curve", show: a.link })
        ] });
      }
    }
  );
}
const $d = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20xmlns:svg='http://www.w3.org/2000/svg'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2046.6%2017.41'%20version='1.1'%20id='svg845'%20%3e%3cdefs%20id='defs839'%3e%3cclipPath%20clipPathUnits='userSpaceOnUse'%20id='clipPath96'%3e%3cpath%20d='M%20-1.2207e-4,2.4414e-4%20H%20959.99988%20V%20540.00024%20H%20-1.2207e-4%20Z'%20clip-rule='evenodd'%20id='path94'%20/%3e%3c/clipPath%3e%3cclipPath%20clipPathUnits='userSpaceOnUse'%20id='clipPath106'%3e%3cpath%20d='M%200,0%20H%20130.46%20V%2023.577%20H%200%20Z'%20id='path104'%20/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20id='layer1'%20transform='translate(-31.991243,-118.40059)'%3e%3cg%20id='g90'%20transform='matrix(0.7313755,0,0,-0.7313755,-550.54458,504.98281)'%20style='fill:%23000000'%3e%3cg%20id='g92'%20clip-path='url(%23clipPath96)'%20style='fill:%23000000'%3e%3cg%20id='g98'%20transform='matrix(2.1033,-7.54e-7,-7.54e-7,0.375,795.24,502.8)'%20style='fill:%23000000'%3e%3cg%20id='g100'%20transform='scale(0.55189,3.0538)'%20style='fill:%23000000'%3e%3cg%20id='g102'%20clip-path='url(%23clipPath106)'%20style='fill:%23000000'%3e%3cg%20id='g108'%20style='fill:%23000000'%3e%3cg%20id='g110'%20style='fill:%23000000'%3e%3cg%20id='g112'%20style='fill:%23000000'%20/%3e%3c/g%3e%3cpath%20d='M%2018.813,19.108%20H%2032.767%20V%2010.622%20H%2026.913%20L%2032.767,5.1912%20H%2027.794%20L%2022.053,10.622%20V%205.1912%20h%20-3.24%20v%208.6268%20h%2010.231%20v%202.065%20H%2018.813%20Z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path114'%20/%3e%3cpath%20d='m%2034.216,5.1912%20h%203.4103%20v%2013.945%20H%2034.216%20Z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path116'%20/%3e%3cpath%20d='M%206.9058,8.5572%20V%2019.108%20H%204.2344%20c%20-0.4831,0%20-0.8526,-0.368%20-0.8526,-0.82%200,-2.49%20-0.0284,-9.8157%20-0.0284,-12.2482%200,-0.4526%200.3695,-0.8486%200.8242,-0.8486%201.8472,0%207.1614,0%207.9284,0%20v%203.366%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path118'%20/%3e%3cpath%20d='m%2013.868,1.712%20c%200.313,0%202.7,0%203.496,0%200,0%200,6.8735%200,6.9866%20-1.137,0%20-2.33,0%20-3.496,0%200,-2.3194%200,-4.6388%200,-6.9866%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path120'%20/%3e%3cpath%20d='m%208.6109,19.108%20c%200,-0.057%200,-3.479%200,-3.479%201.5631,0%203.5521,0%205.2571,0%200,-2.405%200,-5.205%200,-5.205%200.796,0%203.183,0%203.496,0%20v%207.835%20c%200,0.453%20-0.37,0.821%20-0.824,0.849%20-1.705,0%20-5.741,0%20-7.9291,0%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path122'%20/%3e%3cpath%20d='m%208.6109,13.932%20c%200,-1.16%200,-2.32%200,-3.536%200.2842,0%200.5968,0%200.881,0%200.7961,0%201.7901,0%202.5861,0%200,0%200,3.479%200,3.536%20-1.137,0%20-2.3019,0%20-3.4671,0%20z%20m%202.4441,-2.461%20v%200%20c%20-0.341,0%20-0.739,0%20-1.052,0%20-0.1132,0%20-0.2269,0%20-0.369,0%200,0.481%200,0.933%200,1.414%200.483,0%200.938,0%201.421,0%200,-0.028%200,-1.414%200,-1.414%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path124'%20/%3e%3cpath%20d='M%2054.365,8.6986%20V%203.494%20c%200,-0.4525%20-0.398,-0.8203%20-0.852,-0.8203%20H%2048.284%20V%201.8252%20h%206.081%200.029%20c%200.426,0%200.795,0.3677%200.795,0.8203%20v%200.0282%206.0249%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path126'%20/%3e%3cpath%20d='m%201.9325,15.657%20v%205.205%20c%200,0.452%200.341,0.792%200.7957,0.792%20h%205.2291%20c%200.0284,0%200.0284,0.028%200.0284,0.028%20v%200.792%20c%200,0%200,0.028%20-0.0284,0.028%20H%201.9325%20c%20-0.4831,0%20-0.8526,-0.368%20-0.8526,-0.848%20v%20-5.997%20c%200,-0.028%200.0284,-0.028%200.0284,-0.028%20h%200.7958%20c%200,0%200.0284,0%200.0284,0.028%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path128'%20/%3e%3cpath%20d='m%2052.887,15.657%20v%203.451%20H%2039.104%20v%20-5.176%20-3.48%20h%209.18%20V%208.7269%20h%20-9.18%20V%205.2478%20h%2013.783%20v%208.6552%20h%20-9.179%20v%201.754%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path130'%20/%3e%3cpath%20d='m%2062.834,14.101%20h%20-3.041%20c%20-0.369,0%20-0.71,0.057%20-1.051,0.198%20-0.313,0.113%20-0.625,0.311%20-0.853,0.538%20-0.256,0.254%20-0.454,0.537%20-0.597,0.848%20-0.142,0.34%20-0.227,0.679%20-0.227,1.075%200,0.396%200.085,0.736%200.227,1.075%200.143,0.311%200.313,0.622%200.569,0.849%200.256,0.254%200.54,0.424%200.852,0.565%200.341,0.142%200.682,0.198%201.08,0.198%200.37,0%200.711,-0.056%201.052,-0.198%200.312,-0.141%200.597,-0.311%200.852,-0.537%200.228,-0.255%200.427,-0.509%200.569,-0.849%200.142,-0.311%200.199,-0.65%200.199,-1.018%200,-0.226%20-0.029,-0.453%20-0.057,-0.651%20-0.057,-0.226%20-0.142,-0.424%20-0.256,-0.622%20-0.085,-0.17%20-0.227,-0.339%20-0.369,-0.481%20-0.142,-0.169%20-0.313,-0.283%20-0.512,-0.367%20v%200%20h%201.563%20z%20m%20-3.069,0.651%20v%200%20c%200.284,0%200.568,0.056%200.796,0.17%200.227,0.113%200.454,0.254%200.625,0.424%200.17,0.198%200.284,0.396%200.398,0.65%200.085,0.255%200.142,0.538%200.142,0.821%200,0.254%20-0.057,0.537%20-0.142,0.763%20-0.114,0.255%20-0.256,0.453%20-0.427,0.623%20-0.17,0.198%20-0.369,0.339%20-0.596,0.424%20-0.256,0.113%20-0.512,0.17%20-0.796,0.17%20-0.284,0%20-0.54,-0.057%20-0.767,-0.17%20-0.228,-0.085%20-0.427,-0.226%20-0.597,-0.424%20-0.171,-0.17%20-0.313,-0.368%20-0.427,-0.623%20-0.085,-0.226%20-0.142,-0.48%20-0.142,-0.763%200,-0.283%200.057,-0.538%200.142,-0.792%200.086,-0.255%200.228,-0.481%200.398,-0.651%200.171,-0.198%200.37,-0.339%200.626,-0.452%200.227,-0.114%200.483,-0.17%200.767,-0.17%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path132'%20/%3e%3cpath%20d='m%2063.573,19.334%20h%201.847%20c%200.341,0%200.625,-0.056%200.824,-0.141%200.228,-0.113%200.398,-0.227%200.54,-0.368%200.114,-0.141%200.199,-0.283%200.256,-0.453%200.057,-0.169%200.057,-0.339%200.057,-0.509%200,-0.169%20-0.028,-0.339%20-0.085,-0.481%20-0.057,-0.169%20-0.142,-0.311%20-0.256,-0.424%20-0.114,-0.141%20-0.227,-0.226%20-0.398,-0.311%20-0.17,-0.085%20-0.341,-0.141%20-0.54,-0.17%20l%201.506,-2.376%20h%20-0.909%20l%20-1.336,2.291%20h%20-0.796%20v%20-2.291%20h%20-0.71%20z%20m%200.71,-2.319%20v%200%20h%200.938%20c%200.142,0%200.284,0%200.427,0.028%200.113,0.028%200.255,0.057%200.341,0.141%200.113,0.057%200.199,0.142%200.255,0.255%200.086,0.085%200.114,0.255%200.114,0.424%200,0.17%20-0.028,0.311%20-0.114,0.425%20-0.056,0.113%20-0.142,0.198%20-0.255,0.254%20-0.086,0.057%20-0.228,0.113%20-0.341,0.113%20-0.143,0.029%20-0.285,0.057%20-0.427,0.057%20h%20-0.938%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path134'%20/%3e%3cpath%20d='m%2073.832,18.203%20c%20-0.142,0.169%20-0.341,0.339%20-0.568,0.424%20-0.228,0.113%20-0.455,0.17%20-0.711,0.17%20-0.284,0%20-0.568,-0.057%20-0.795,-0.17%20-0.228,-0.113%20-0.455,-0.255%20-0.626,-0.453%20-0.17,-0.198%20-0.284,-0.424%20-0.397,-0.678%20-0.086,-0.255%20-0.143,-0.538%20-0.143,-0.821%200,-0.283%200.057,-0.537%200.143,-0.792%200.085,-0.254%200.227,-0.481%200.397,-0.65%200.171,-0.198%200.37,-0.34%200.597,-0.453%200.256,-0.113%200.54,-0.17%200.824,-0.17%200.313,0%200.569,0.085%200.796,0.198%200.227,0.114%200.426,0.283%200.597,0.51%20l%200.597,-0.453%20c%20-0.057,-0.057%20-0.114,-0.113%20-0.228,-0.226%20-0.085,-0.085%20-0.227,-0.198%20-0.369,-0.311%20-0.171,-0.085%20-0.37,-0.17%20-0.597,-0.255%20-0.227,-0.085%20-0.511,-0.113%20-0.796,-0.113%20-0.426,0%20-0.795,0.085%20-1.136,0.226%20-0.313,0.17%20-0.597,0.368%20-0.853,0.622%20-0.227,0.255%20-0.398,0.566%20-0.54,0.877%20-0.114,0.311%20-0.17,0.651%20-0.17,0.99%200,0.396%200.056,0.764%200.198,1.103%200.143,0.34%200.313,0.651%200.569,0.877%200.227,0.255%200.511,0.453%200.852,0.594%200.341,0.142%200.711,0.198%201.109,0.198%200.341,0%200.682,-0.056%201.023,-0.198%200.341,-0.141%200.597,-0.339%200.824,-0.622%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path136'%20/%3e%3cpath%20d='m%2075.054,15.855%20c%200,0.255%200.057,0.481%200.142,0.707%200.114,0.226%200.228,0.424%200.398,0.566%200.171,0.17%200.37,0.311%200.597,0.396%200.227,0.113%200.483,0.17%200.739,0.17%200.256,0%200.511,-0.057%200.739,-0.17%200.227,-0.085%200.426,-0.226%200.597,-0.396%200.17,-0.142%200.284,-0.34%200.397,-0.566%200.086,-0.226%200.142,-0.452%200.142,-0.707%200,-0.283%20-0.056,-0.509%20-0.142,-0.735%20-0.113,-0.227%20-0.227,-0.425%20-0.397,-0.594%20-0.171,-0.142%20-0.37,-0.283%20-0.597,-0.368%20-0.228,-0.113%20-0.483,-0.142%20-0.739,-0.142%20-0.256,0%20-0.512,0.029%20-0.739,0.142%20-0.227,0.085%20-0.426,0.226%20-0.597,0.368%20-0.17,0.169%20-0.284,0.367%20-0.398,0.594%20-0.085,0.226%20-0.142,0.452%20-0.142,0.735%20z%20m%200.711,0%20v%200%20c%200,-0.198%200.028,-0.368%200.085,-0.509%200.057,-0.142%200.142,-0.283%200.227,-0.368%200.114,-0.113%200.228,-0.198%200.37,-0.254%200.142,-0.057%200.312,-0.114%200.483,-0.114%200.17,0%200.341,0.057%200.483,0.114%200.142,0.056%200.256,0.141%200.369,0.254%200.086,0.085%200.171,0.226%200.228,0.368%200.057,0.141%200.085,0.311%200.085,0.509%200,0.17%20-0.028,0.339%20-0.085,0.481%20-0.057,0.141%20-0.142,0.283%20-0.228,0.368%20-0.113,0.113%20-0.227,0.198%20-0.369,0.254%20-0.142,0.085%20-0.313,0.113%20-0.483,0.113%20-0.171,0%20-0.341,-0.028%20-0.483,-0.113%20-0.142,-0.056%20-0.256,-0.141%20-0.37,-0.254%20-0.085,-0.085%20-0.17,-0.227%20-0.227,-0.368%20-0.057,-0.142%20-0.085,-0.311%20-0.085,-0.481%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path138'%20/%3e%3cpath%20d='M%2083.154,14.101%20H%2082.5%20v%200.481%20h%20-0.028%20c%20-0.114,-0.17%20-0.313,-0.311%20-0.54,-0.424%20-0.199,-0.113%20-0.455,-0.142%20-0.682,-0.142%20-0.256,0%20-0.512,0.029%20-0.739,0.114%20-0.228,0.113%20-0.398,0.226%20-0.569,0.396%20-0.142,0.169%20-0.256,0.367%20-0.341,0.594%20-0.085,0.226%20-0.142,0.452%20-0.142,0.735%200,0.255%200.057,0.481%200.142,0.707%200.085,0.226%200.199,0.424%200.341,0.594%200.171,0.17%200.341,0.283%200.569,0.396%200.227,0.085%200.483,0.142%200.739,0.142%200.255,0%200.483,-0.057%200.71,-0.17%200.227,-0.113%200.398,-0.255%200.512,-0.424%20H%2082.5%20v%202.574%20h%200.654%20z%20m%20-1.819,0.509%20v%200%20c%200.17,0%200.341,0.057%200.483,0.114%200.142,0.056%200.256,0.141%200.369,0.254%200.086,0.085%200.171,0.226%200.228,0.368%200.057,0.141%200.085,0.311%200.085,0.509%200,0.17%20-0.028,0.339%20-0.085,0.481%20-0.057,0.141%20-0.142,0.283%20-0.228,0.368%20-0.113,0.113%20-0.227,0.198%20-0.369,0.254%20-0.142,0.085%20-0.313,0.113%20-0.483,0.113%20-0.171,0%20-0.341,-0.028%20-0.483,-0.113%20-0.142,-0.056%20-0.256,-0.141%20-0.37,-0.254%20-0.085,-0.085%20-0.17,-0.227%20-0.227,-0.368%20-0.057,-0.142%20-0.085,-0.311%20-0.085,-0.481%200,-0.198%200.028,-0.368%200.085,-0.509%200.057,-0.142%200.142,-0.283%200.227,-0.368%200.114,-0.113%200.228,-0.198%200.37,-0.254%200.142,-0.057%200.312,-0.114%200.483,-0.114%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path140'%20/%3e%3cpath%20d='m%2084.66,15.6%20c%200,-0.141%200.057,-0.282%200.113,-0.424%200.057,-0.113%200.143,-0.226%200.256,-0.311%200.114,-0.085%200.256,-0.17%200.398,-0.226%200.142,-0.029%200.284,-0.057%200.426,-0.057%200.228,0%200.398,0.057%200.54,0.142%200.171,0.084%200.313,0.226%200.427,0.367%20l%200.511,-0.367%20c%20-0.369,-0.481%20-0.881,-0.708%20-1.563,-0.708%20-0.284,0%20-0.511,0.029%20-0.739,0.114%20-0.227,0.113%20-0.426,0.226%20-0.597,0.396%20-0.142,0.169%20-0.255,0.367%20-0.341,0.594%20-0.085,0.226%20-0.142,0.452%20-0.142,0.735%200,0.255%200.057,0.481%200.142,0.707%200.086,0.226%200.228,0.424%200.398,0.594%200.142,0.17%200.341,0.283%200.569,0.396%200.227,0.085%200.454,0.142%200.71,0.142%200.313,0%200.597,-0.057%200.796,-0.17%200.227,-0.113%200.398,-0.255%200.54,-0.424%200.142,-0.17%200.227,-0.368%200.284,-0.594%200.085,-0.227%200.114,-0.453%200.114,-0.679%20V%2015.6%20Z%20m%202.131,0.538%20v%200%20c%20-0.028,0.141%20-0.028,0.283%20-0.085,0.396%20-0.028,0.113%20-0.114,0.226%20-0.199,0.311%20-0.085,0.113%20-0.171,0.17%20-0.313,0.226%20-0.113,0.057%20-0.255,0.085%20-0.426,0.085%20-0.17,0%20-0.312,-0.028%20-0.455,-0.113%20-0.142,-0.057%20-0.255,-0.141%20-0.341,-0.226%20-0.085,-0.085%20-0.17,-0.198%20-0.227,-0.34%20-0.057,-0.113%20-0.085,-0.226%20-0.085,-0.339%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path142'%20/%3e%3cpath%20d='m%2090.685,15.176%20c%200.113,-0.17%200.284,-0.311%200.483,-0.424%200.199,-0.085%200.426,-0.142%200.625,-0.142%200.114,0%200.256,0.029%200.369,0.057%200.114,0.057%200.228,0.113%200.341,0.17%200.086,0.085%200.171,0.169%200.228,0.283%200.085,0.113%200.113,0.226%200.113,0.367%200,0.198%20-0.056,0.368%20-0.199,0.481%20-0.113,0.085%20-0.284,0.17%20-0.483,0.255%20-0.17,0.085%20-0.398,0.141%20-0.625,0.198%20-0.227,0.085%20-0.426,0.169%20-0.625,0.283%20-0.171,0.113%20-0.341,0.282%20-0.455,0.48%20-0.142,0.198%20-0.199,0.453%20-0.199,0.821%200,0.141%200.029,0.311%200.086,0.481%200.085,0.169%200.17,0.311%200.312,0.452%200.142,0.17%200.341,0.283%200.569,0.368%200.227,0.113%200.483,0.141%200.795,0.141%200.313,0%200.569,-0.028%200.824,-0.113%200.285,-0.085%200.512,-0.226%200.711,-0.481%20l%20-0.597,-0.509%20c%20-0.085,0.113%20-0.199,0.226%20-0.369,0.311%20-0.171,0.085%20-0.341,0.142%20-0.569,0.142%20-0.199,0%20-0.341,-0.029%20-0.483,-0.085%20-0.142,-0.057%20-0.227,-0.113%20-0.312,-0.198%20-0.086,-0.085%20-0.143,-0.17%20-0.171,-0.255%20-0.028,-0.113%20-0.057,-0.198%20-0.057,-0.254%200,-0.227%200.085,-0.396%200.199,-0.538%200.142,-0.113%200.284,-0.198%200.483,-0.283%200.199,-0.056%200.398,-0.141%200.625,-0.198%200.228,-0.056%200.427,-0.141%200.626,-0.226%200.199,-0.113%200.341,-0.254%200.483,-0.452%200.113,-0.17%200.17,-0.425%200.17,-0.736%200,-0.254%20-0.028,-0.481%20-0.142,-0.679%20-0.085,-0.198%20-0.227,-0.367%20-0.369,-0.509%20-0.171,-0.141%20-0.37,-0.254%20-0.597,-0.311%20-0.199,-0.085%20-0.455,-0.113%20-0.711,-0.113%20-0.341,0%20-0.653,0.056%20-0.937,0.17%20-0.313,0.113%20-0.54,0.311%20-0.739,0.565%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path144'%20/%3e%3cpath%20d='m%2096.368,17.015%20h%20-0.966%20v%20-1.584%20c%200,-0.113%200,-0.198%200,-0.283%200.029,-0.113%200.029,-0.198%200.057,-0.283%200.057,-0.057%200.085,-0.113%200.17,-0.17%200.057,-0.056%200.143,-0.085%200.285,-0.085%200.085,0%200.17,0.029%200.255,0.029%200.086,0.028%200.143,0.056%200.228,0.085%20V%2014.13%20c%20-0.085,-0.057%20-0.199,-0.085%20-0.313,-0.114%20-0.142,0%20-0.227,0%20-0.284,0%20-0.284,0%20-0.483,0.029%20-0.597,0.085%20-0.142,0.085%20-0.256,0.17%20-0.312,0.283%20-0.086,0.113%20-0.114,0.255%20-0.143,0.396%200,0.142%200,0.283%200,0.424%20v%201.811%20h%20-0.767%20v%200.565%20h%200.767%20v%200.99%20h%200.654%20v%20-0.99%20h%200.966%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path146'%20/%3e%3cpath%20d='m%2097.249,17.156%20c%200.171,0.17%200.398,0.311%200.654,0.396%200.227,0.085%200.483,0.142%200.739,0.142%200.256,0%200.483,-0.057%200.653,-0.114%200.199,-0.056%200.342,-0.141%200.455,-0.254%200.114,-0.113%200.228,-0.226%200.28,-0.368%200.03,-0.141%200.06,-0.283%200.06,-0.452%20v%20-1.782%20c%200,-0.114%200.03,-0.227%200.03,-0.34%200,-0.113%200,-0.198%200.03,-0.283%20h%20-0.599%20c%20-0.028,0.17%20-0.028,0.34%20-0.028,0.509%20h%20-0.029%20c%20-0.142,-0.226%20-0.312,-0.367%20-0.511,-0.48%20-0.199,-0.085%20-0.455,-0.114%20-0.711,-0.114%20-0.17,0%20-0.312,0%20-0.454,0.057%20-0.171,0.028%20-0.284,0.113%20-0.398,0.198%20-0.114,0.085%20-0.199,0.198%20-0.256,0.339%20-0.085,0.114%20-0.114,0.283%20-0.114,0.453%200,0.226%200.057,0.396%200.171,0.566%200.085,0.141%200.227,0.283%200.398,0.367%200.17,0.085%200.398,0.17%200.625,0.198%200.227,0.057%200.483,0.057%200.739,0.057%20h%200.511%20v%200.17%20c%200,0.085%20-0.028,0.169%20-0.056,0.254%20-0.029,0.085%20-0.086,0.17%20-0.171,0.255%20-0.057,0.056%20-0.142,0.113%20-0.256,0.17%20-0.113,0.028%20-0.227,0.056%20-0.369,0.056%20-0.114,0%20-0.227,-0.028%20-0.341,-0.056%20-0.085,0%20-0.171,-0.057%20-0.256,-0.085%20C%2097.96,16.986%2097.903,16.93%2097.818,16.902%2097.761,16.845%2097.704,16.788%2097.647,16.76%20Z%20m%201.876,-1.386%20v%200%20c%20-0.171,0%20-0.313,0%20-0.483,-0.028%20-0.171,0%20-0.313,-0.057%20-0.455,-0.085%20-0.142,-0.057%20-0.256,-0.113%20-0.341,-0.226%20-0.085,-0.085%20-0.114,-0.198%20-0.114,-0.34%200,-0.198%200.057,-0.339%200.199,-0.424%200.142,-0.085%200.313,-0.141%200.54,-0.141%200.199,0%200.341,0.028%200.483,0.113%200.114,0.056%200.228,0.141%200.313,0.226%200.085,0.113%200.142,0.198%200.171,0.339%200.028,0.114%200.056,0.227%200.056,0.34%20v%200.226%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path148'%20/%3e%3cpath%20d='m%20101.09,17.58%20h%200.65%20v%20-0.537%20h%200.03%20c%200.08,0.198%200.23,0.339%200.42,0.453%200.2,0.141%200.46,0.198%200.71,0.198%200.18,0%200.35,-0.029%200.52,-0.085%200.14,-0.057%200.28,-0.142%200.39,-0.255%200.12,-0.085%200.2,-0.226%200.29,-0.396%200.06,-0.17%200.08,-0.396%200.08,-0.622%20v%20-2.235%20h%20-0.65%20v%202.065%20c%200,0.17%20-0.03,0.283%20-0.09,0.424%20-0.02,0.114%20-0.08,0.198%20-0.17,0.255%20-0.05,0.085%20-0.14,0.141%20-0.25,0.17%20-0.09,0.028%20-0.2,0.056%20-0.29,0.056%20-0.14,0%20-0.28,-0.028%20-0.39,-0.085%20-0.12,-0.028%20-0.23,-0.113%20-0.32,-0.198%20-0.08,-0.113%20-0.14,-0.226%20-0.2,-0.367%20-0.05,-0.142%20-0.08,-0.311%20-0.08,-0.538%20v%20-1.782%20h%20-0.65%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path150'%20/%3e%3cpath%20d='m%20108.73,14.101%20h%20-0.68%20v%200.481%200%20c%20-0.14,-0.17%20-0.31,-0.311%20-0.54,-0.424%20-0.23,-0.113%20-0.46,-0.142%20-0.68,-0.142%20-0.29,0%20-0.52,0.029%20-0.74,0.114%20-0.23,0.113%20-0.43,0.226%20-0.57,0.396%20-0.17,0.169%20-0.28,0.367%20-0.37,0.594%20-0.09,0.226%20-0.11,0.452%20-0.11,0.735%200,0.255%200.02,0.481%200.11,0.707%200.09,0.226%200.2,0.424%200.37,0.594%200.14,0.17%200.34,0.283%200.57,0.396%200.22,0.085%200.45,0.142%200.74,0.142%200.25,0%200.48,-0.057%200.71,-0.17%200.22,-0.113%200.39,-0.255%200.51,-0.424%20v%200%202.574%20h%200.68%20z%20m%20-1.82,0.509%20v%200%20c%200.17,0%200.34,0.057%200.48,0.114%200.15,0.056%200.26,0.141%200.35,0.254%200.11,0.085%200.19,0.226%200.22,0.368%200.06,0.141%200.09,0.311%200.09,0.509%200,0.17%20-0.03,0.339%20-0.09,0.481%20-0.03,0.141%20-0.11,0.283%20-0.22,0.368%20-0.09,0.113%20-0.2,0.198%20-0.35,0.254%20-0.14,0.085%20-0.31,0.113%20-0.48,0.113%20-0.2,0%20-0.34,-0.028%20-0.48,-0.113%20-0.14,-0.056%20-0.29,-0.141%20-0.37,-0.254%20-0.11,-0.085%20-0.17,-0.227%20-0.23,-0.368%20-0.06,-0.142%20-0.08,-0.311%20-0.08,-0.481%200,-0.198%200.02,-0.368%200.08,-0.509%200.06,-0.142%200.12,-0.283%200.23,-0.368%200.08,-0.113%200.23,-0.198%200.37,-0.254%200.14,-0.057%200.28,-0.114%200.48,-0.114%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path152'%20/%3e%3cpath%20d='m%20109.75,17.156%20c%200.2,0.17%200.4,0.311%200.66,0.396%200.25,0.085%200.48,0.142%200.74,0.142%200.25,0%200.48,-0.057%200.65,-0.114%200.2,-0.056%200.34,-0.141%200.45,-0.254%200.15,-0.113%200.23,-0.226%200.29,-0.368%200.06,-0.141%200.08,-0.283%200.08,-0.452%20v%20-1.782%20c%200,-0.114%200,-0.227%200,-0.34%200,-0.113%200,-0.198%200.03,-0.283%20h%20-0.59%20c%20-0.03,0.17%20-0.03,0.34%20-0.03,0.509%20v%200%20c%20-0.17,-0.226%20-0.34,-0.367%20-0.54,-0.48%20-0.2,-0.085%20-0.43,-0.114%20-0.71,-0.114%20-0.17,0%20-0.32,0%20-0.46,0.057%20-0.14,0.028%20-0.28,0.113%20-0.4,0.198%20-0.11,0.085%20-0.19,0.198%20-0.25,0.339%20-0.06,0.114%20-0.12,0.283%20-0.12,0.453%200,0.226%200.06,0.396%200.18,0.566%200.08,0.141%200.22,0.283%200.39,0.367%200.2,0.085%200.4,0.17%200.63,0.198%200.23,0.057%200.48,0.057%200.77,0.057%20H%20112%20v%200.17%20c%200,0.085%20-0.03,0.169%20-0.06,0.254%20-0.03,0.085%20-0.08,0.17%20-0.17,0.255%20-0.06,0.056%20-0.14,0.113%20-0.25,0.17%20-0.09,0.028%20-0.23,0.056%20-0.37,0.056%20-0.12,0%20-0.23,-0.028%20-0.34,-0.056%20-0.09,0%20-0.18,-0.057%20-0.26,-0.085%20-0.09,-0.029%20-0.14,-0.085%20-0.2,-0.113%20-0.08,-0.057%20-0.14,-0.114%20-0.2,-0.142%20z%20m%201.88,-1.386%20v%200%20c%20-0.14,0%20-0.31,0%20-0.48,-0.028%20-0.17,0%20-0.32,-0.057%20-0.46,-0.085%20-0.14,-0.057%20-0.23,-0.113%20-0.34,-0.226%20-0.08,-0.085%20-0.11,-0.198%20-0.11,-0.34%200,-0.198%200.05,-0.339%200.2,-0.424%200.14,-0.085%200.31,-0.141%200.56,-0.141%200.17,0%200.32,0.028%200.46,0.113%200.14,0.056%200.23,0.141%200.31,0.226%200.09,0.113%200.14,0.198%200.17,0.339%200.03,0.114%200.06,0.227%200.06,0.34%20v%200.226%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path154'%20/%3e%3cpath%20d='m%20113.59,17.58%20h%200.65%20v%20-0.537%20h%200.03%20c%200.03,0.113%200.12,0.198%200.17,0.255%200.09,0.084%200.17,0.141%200.26,0.198%200.08,0.056%200.2,0.113%200.31,0.141%200.09,0.028%200.2,0.057%200.31,0.057%200.12,0%200.2,-0.029%200.29,-0.057%20l%20-0.03,-0.707%20c%20-0.06,0%20-0.09,0.028%20-0.14,0.028%20-0.06,0%20-0.12,0%20-0.17,0%20-0.34,0%20-0.57,-0.085%20-0.74,-0.254%20-0.2,-0.198%20-0.29,-0.481%20-0.29,-0.849%20v%20-1.754%20h%20-0.65%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path156'%20/%3e%3cpath%20d='m%2057.406,10.452%20h%201.847%20c%200.341,0%200.626,-0.028%200.824,-0.141%200.228,-0.085%200.398,-0.198%200.512,-0.3395%20C%2060.731,9.8301%2060.816,9.6886%2060.873,9.4906%2060.902,9.3209%2060.93,9.1512%2060.93,8.9815%2060.93,8.8401%2060.902,8.6703%2060.873,8.5006%2060.816,8.3026%2060.731,8.1612%2060.589,8.0198%2060.475,7.8783%2060.305,7.7652%2060.077,7.6803%2059.879,7.5672%2059.594,7.5389%2059.253,7.5389%20H%2058.117%20V%205.2195%20h%20-0.711%20z%20m%200.711,-2.2908%20v%200%20h%200.937%20c%200.142,0%200.285,0%200.398,0.0283%200.142,0.0283%200.256,0.0566%200.37,0.1131%200.113,0.0566%200.199,0.1415%200.255,0.2546%200.057,0.1131%200.114,0.2546%200.114,0.4243%200,0.198%20-0.057,0.3394%20-0.114,0.4526%20-0.056,0.1131%20-0.142,0.198%20-0.255,0.2545%20-0.114,0.0566%20-0.228,0.0849%20-0.37,0.1132%20-0.113,0.0283%20-0.256,0.0283%20-0.398,0.0283%20h%20-0.937%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path158'%20/%3e%3cpath%20d='m%2062.152,6.7469%20c%200,-0.1697%200.028,-0.3111%200.085,-0.4243%200.057,-0.1414%200.142,-0.2263%200.256,-0.3394%200.114,-0.0849%200.256,-0.1414%200.398,-0.198%200.142,-0.0566%200.284,-0.0566%200.426,-0.0566%200.228,0%200.398,0.0283%200.54,0.1414%200.171,0.0849%200.313,0.2263%200.426,0.3678%20L%2064.795,5.87%20C%2064.426,5.3892%2063.914,5.1346%2063.232,5.1346%20c%20-0.284,0%20-0.512,0.0566%20-0.739,0.1414%20-0.227,0.0849%20-0.426,0.2263%20-0.568,0.396%20-0.171,0.1698%20-0.284,0.3678%20-0.37,0.5941%20-0.085,0.198%20-0.142,0.4525%20-0.142,0.7071%200,0.2546%200.057,0.5091%200.142,0.7354%200.086,0.2263%200.228,0.4243%200.398,0.594%200.142,0.1415%200.341,0.2829%200.568,0.3677%200.228,0.1132%200.455,0.1415%200.711,0.1415%200.313,0%200.597,-0.0566%200.796,-0.1697%200.227,-0.0849%200.398,-0.2263%200.54,-0.4243%200.142,-0.1697%200.227,-0.3677%200.284,-0.5657%200.085,-0.2263%200.114,-0.4526%200.114,-0.6789%20V%206.7469%20Z%20m%202.103,0.5092%20v%200%20C%2064.227,7.4258%2064.227,7.5389%2064.17,7.6803%2064.141,7.7935%2064.056,7.9066%2063.999,7.9915%2063.914,8.0763%2063.8,8.1612%2063.658,8.2178%2063.545,8.2743%2063.402,8.2743%2063.232,8.2743%2063.061,8.2743%2062.919,8.2461%2062.777,8.1895%2062.635,8.1329%2062.521,8.0481%2062.436,7.9632%2062.351,7.8501%2062.266,7.7369%2062.209,7.6238%2062.152,7.5106%2062.152,7.3975%2062.152,7.2561%20Z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path160'%20/%3e%3cpath%20d='m%2065.761,8.7269%20h%200.625%20v%20-0.5374%200%20c%200.029,0.0566%200.057,0.1131%200.114,0.1697%200.085,0.0849%200.142,0.1414%200.256,0.2263%200.085,0.0566%200.199,0.1131%200.341,0.1697%200.114,0.0283%200.256,0.0566%200.426,0.0566%200.256,0%200.483,-0.0566%200.654,-0.1697%200.199,-0.0849%200.341,-0.2546%200.455,-0.4809%200.113,0.2263%200.255,0.396%200.483,0.4809%200.199,0.1131%200.398,0.1697%200.625,0.1697%200.256,0%200.483,-0.0283%200.654,-0.1132%200.17,-0.1131%200.312,-0.2263%200.426,-0.3677%200.085,-0.1414%200.17,-0.3111%200.199,-0.4808%200.028,-0.198%200.057,-0.396%200.057,-0.594%20V%205.2195%20h%20-0.682%20v%201.9517%20c%200,0.1414%200,0.2829%20-0.029,0.396%200,0.1131%20-0.028,0.2263%20-0.085,0.3111%20-0.057,0.1132%20-0.142,0.1698%20-0.228,0.2263%20-0.113,0.0566%20-0.255,0.0849%20-0.397,0.0849%20-0.341,0%20-0.569,-0.0849%20-0.711,-0.2829%20C%2068.83,7.7086%2068.745,7.4541%2068.745,7.1429%20V%205.2195%20h%20-0.653%20v%201.8386%20c%200,0.1697%20-0.029,0.3111%20-0.029,0.4525%20-0.028,0.1415%20-0.057,0.2546%20-0.114,0.3677%20-0.056,0.1132%20-0.113,0.1698%20-0.227,0.2263%20-0.085,0.0566%20-0.227,0.0849%20-0.369,0.0849%20-0.142,0%20-0.256,-0.0283%20-0.37,-0.0566%20C%2066.87,8.0763%2066.784,8.0198%2066.699,7.9066%2066.614,7.8218%2066.557,7.7086%2066.5,7.5672%2066.443,7.4258%2066.415,7.2561%2066.415,7.0581%20V%205.2195%20h%20-0.654%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path162'%20/%3e%3cpath%20d='m%2072.07,10.82%20h%200.682%20v%20-2.6022%200%20c%200.142,0.198%200.313,0.3394%200.512,0.4525%200.227,0.0849%200.483,0.1415%200.71,0.1415%200.284,0%200.54,-0.0283%200.739,-0.1415%200.228,-0.0848%200.426,-0.2262%200.569,-0.3677%200.17,-0.1697%200.284,-0.3677%200.369,-0.594%200.085,-0.2263%200.114,-0.4808%200.114,-0.7354%200,-0.2546%20-0.029,-0.5091%20-0.114,-0.7071%20C%2075.566,6.0398%2075.452,5.8418%2075.282,5.672%2075.139,5.5023%2074.941,5.3609%2074.713,5.276%2074.514,5.1912%2074.258,5.1346%2073.974,5.1346%20c%20-0.227,0%20-0.454,0.0566%20-0.682,0.1697%20-0.227,0.0849%20-0.398,0.2263%20-0.54,0.4243%20v%200%20-0.5091%20H%2072.07%20Z%20m%201.847,-5.0631%20v%200%20c%200.171,0%200.341,0.0283%200.484,0.0849%200.142,0.0848%200.255,0.1697%200.341,0.2545%200.113,0.1132%200.199,0.2546%200.227,0.396%200.057,0.1415%200.085,0.3112%200.085,0.4809%200,0.1697%20-0.028,0.3394%20-0.085,0.5091%20-0.028,0.1415%20-0.114,0.2546%20-0.227,0.3678%20-0.086,0.1131%20-0.199,0.198%20-0.341,0.2545%20-0.143,0.0566%20-0.313,0.0849%20-0.484,0.0849%20-0.198,0%20-0.341,-0.0283%20-0.483,-0.0849%20C%2073.292,8.0481%2073.15,7.9632%2073.065,7.8501%2072.951,7.7369%2072.894,7.6238%2072.838,7.4823%2072.781,7.3126%2072.752,7.1429%2072.752,6.9732%20c%200,-0.1697%200.029,-0.3394%200.086,-0.4809%200.056,-0.1414%200.113,-0.2828%200.227,-0.396%200.085,-0.0848%200.227,-0.1697%200.369,-0.2545%200.142,-0.0566%200.285,-0.0849%200.483,-0.0849%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path164'%20/%3e%3cpath%20d='m%2076.617,8.3026%20c%200.199,0.1697%200.427,0.3112%200.654,0.396%200.256,0.0849%200.511,0.1132%200.767,0.1132%200.256,0%200.455,-0.0283%200.654,-0.0849%200.17,-0.0566%200.341,-0.1414%200.455,-0.2546%200.113,-0.1131%200.198,-0.2545%200.255,-0.3677%200.057,-0.1414%200.086,-0.3111%200.086,-0.4525%20V%205.87%20c%200,-0.1414%200,-0.2545%200,-0.3394%200.028,-0.1131%200.028,-0.198%200.028,-0.3111%20h%20-0.597%20c%200,0.198%200,0.3677%200,0.5374%20H%2078.891%20C%2078.749,5.5306%2078.578,5.3609%2078.379,5.276%2078.152,5.1912%2077.925,5.1346%2077.669,5.1346%20c%20-0.171,0%20-0.341,0.0283%20-0.483,0.0849%20-0.142,0.0283%20-0.285,0.0848%20-0.37,0.198%20-0.113,0.0848%20-0.199,0.198%20-0.284,0.3111%20-0.057,0.1414%20-0.085,0.2829%20-0.085,0.4526%200,0.2263%200.057,0.4243%200.142,0.5657%200.114,0.1697%200.256,0.2829%200.426,0.396%200.171,0.0849%200.37,0.1414%200.625,0.198%200.228,0.0283%200.483,0.0566%200.739,0.0566%20h%200.483%20v%200.1414%20c%200,0.0849%200,0.198%20-0.057,0.2829%20-0.028,0.0848%20-0.085,0.1697%20-0.142,0.2263%20-0.056,0.0848%20-0.17,0.1414%20-0.255,0.1697%20-0.114,0.0565%20-0.228,0.0565%20-0.37,0.0565%20-0.142,0%20-0.256,0%20-0.341,-0.0282%20C%2077.583,8.2178%2077.498,8.1895%2077.441,8.1612%2077.356,8.1329%2077.271,8.0763%2077.214,8.0198%2077.157,7.9915%2077.1,7.9349%2077.015,7.8783%20Z%20m%201.904,-1.386%20v%200%20c%20-0.17,0%20-0.341,0%20-0.483,-0.0283%20C%2077.868,6.8601%2077.726,6.8318%2077.583,6.7752%2077.441,6.7469%2077.328,6.6621%2077.242,6.5772%2077.157,6.4923%2077.1,6.3792%2077.1,6.2378%20c%200,-0.198%200.086,-0.3395%200.228,-0.4243%200.113,-0.0849%200.312,-0.1415%200.54,-0.1415%200.17,0%200.341,0.0283%200.454,0.0849%200.142,0.0566%200.256,0.1414%200.313,0.2546%200.085,0.0848%200.142,0.198%200.17,0.3111%200.057,0.1415%200.057,0.2546%200.057,0.3677%20v%200.2263%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path166'%20/%3e%3cpath%20d='m%2080.056,8.7269%20h%200.767%20l%201.052,-2.7437%20v%200%20l%200.994,2.7437%20H%2083.58%20L%2081.932,4.484%20C%2081.875,4.3143%2081.789,4.1729%2081.733,4.0598%2081.676,3.9466%2081.591,3.8335%2081.505,3.7486%2081.42,3.6355%2081.306,3.5789%2081.193,3.5223%2081.051,3.494%2080.908,3.4658%2080.71,3.4658%20c%20-0.086,0%20-0.199,0%20-0.285,0%20-0.113,0.0282%20-0.199,0.0565%20-0.284,0.0848%20l%200.085,0.594%20C%2080.34,4.1163%2080.482,4.088%2080.624,4.088%20c%200.086,0%200.171,0%200.256,0.0283%200.057,0.0283%200.114,0.0566%200.171,0.1132%200.056,0.0565%200.113,0.1131%200.142,0.198%200.028,0.0565%200.057,0.1414%200.085,0.2263%20l%200.227,0.5657%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path168'%20/%3e%3cpath%20d='m%2084.177,8.3026%20c%200.199,0.1697%200.426,0.3112%200.653,0.396%200.256,0.0849%200.512,0.1132%200.768,0.1132%200.255,0%200.454,-0.0283%200.653,-0.0849%200.171,-0.0566%200.341,-0.1414%200.455,-0.2546%200.114,-0.1131%200.199,-0.2545%200.256,-0.3677%200.057,-0.1414%200.085,-0.3111%200.085,-0.4525%20V%205.87%20c%200,-0.1414%200,-0.2545%200.028,-0.3394%200,-0.1131%200,-0.198%200,-0.3111%20h%20-0.596%20c%200,0.198%200,0.3677%200,0.5374%20H%2086.45%20C%2086.308,5.5306%2086.138,5.3609%2085.939,5.276%2085.711,5.1912%2085.484,5.1346%2085.228,5.1346%20c%20-0.17,0%20-0.341,0.0283%20-0.483,0.0849%20-0.142,0.0283%20-0.256,0.0848%20-0.369,0.198%20-0.114,0.0848%20-0.199,0.198%20-0.285,0.3111%20-0.056,0.1414%20-0.085,0.2829%20-0.085,0.4526%200,0.2263%200.057,0.4243%200.142,0.5657%200.114,0.1697%200.256,0.2829%200.427,0.396%200.17,0.0849%200.369,0.1414%200.625,0.198%200.227,0.0283%200.483,0.0566%200.739,0.0566%20h%200.483%20v%200.1414%20c%200,0.0849%200,0.198%20-0.057,0.2829%20-0.029,0.0848%20-0.085,0.1697%20-0.142,0.2263%20-0.057,0.0848%20-0.171,0.1414%20-0.256,0.1697%20-0.114,0.0565%20-0.227,0.0565%20-0.369,0.0565%20-0.142,0%20-0.256,0%20-0.341,-0.0282%20C%2085.171,8.2178%2085.058,8.1895%2085.001,8.1612%2084.916,8.1329%2084.83,8.0763%2084.773,8.0198%2084.717,7.9915%2084.66,7.9349%2084.603,7.8783%20Z%20m%201.904,-1.386%20v%200%20c%20-0.171,0%20-0.341,0%20-0.483,-0.0283%20C%2085.427,6.8601%2085.285,6.8318%2085.143,6.7752%2085.001,6.7469%2084.887,6.6621%2084.802,6.5772%2084.717,6.4923%2084.66,6.3792%2084.66,6.2378%20c%200,-0.198%200.085,-0.3395%200.227,-0.4243%200.114,-0.0849%200.313,-0.1415%200.54,-0.1415%200.199,0%200.341,0.0283%200.483,0.0849%200.114,0.0566%200.228,0.1414%200.284,0.2546%200.086,0.0848%200.142,0.198%200.171,0.3111%200.057,0.1415%200.057,0.2546%200.057,0.3677%20v%200.2263%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path170'%20/%3e%3cpath%20d='m%2088.013,8.7269%20h%200.682%20v%20-0.5374%200%20c%200.057,0.0848%200.114,0.1697%200.199,0.2546%200.057,0.0848%200.142,0.1414%200.228,0.198%200.113,0.0565%200.198,0.0848%200.312,0.1414%200.114,0.0283%200.227,0.0283%200.341,0.0283%200.085,0%200.199,0%200.284,-0.0283%20L%2090.031,8.0481%20c%20-0.057,0.0282%20-0.114,0.0282%20-0.171,0.0565%20-0.056,0%20-0.113,0%20-0.17,0%20-0.313,0%20-0.568,-0.0848%20-0.739,-0.2545%20-0.17,-0.198%20-0.256,-0.4809%20-0.256,-0.8769%20V%205.2195%20h%20-0.682%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path172'%20/%3e%3cpath%20d='m%2090.798,8.3026%20c%200.171,0.1697%200.398,0.3112%200.654,0.396%200.227,0.0849%200.483,0.1132%200.739,0.1132%200.256,0%200.454,-0.0283%200.653,-0.0849%20C%2093.043,8.6703%2093.185,8.5855%2093.299,8.4723%2093.413,8.3592%2093.498,8.2178%2093.555,8.1046%2093.612,7.9632%2093.64,7.7935%2093.64,7.6521%20V%205.87%20c%200,-0.1414%200,-0.2545%200.029,-0.3394%200,-0.1131%200,-0.198%200,-0.3111%20H%2093.1%20c%20-0.028,0.198%20-0.028,0.3677%20-0.028,0.5374%20H%2093.043%20C%2092.901,5.5306%2092.731,5.3609%2092.532,5.276%2092.333,5.1912%2092.077,5.1346%2091.821,5.1346%20c%20-0.17,0%20-0.312,0.0283%20-0.483,0.0849%20-0.142,0.0283%20-0.256,0.0848%20-0.369,0.198%20-0.114,0.0848%20-0.199,0.198%20-0.284,0.3111%20-0.057,0.1414%20-0.086,0.2829%20-0.086,0.4526%200,0.2263%200.057,0.4243%200.142,0.5657%200.114,0.1697%200.256,0.2829%200.427,0.396%200.17,0.0849%200.369,0.1414%200.625,0.198%200.227,0.0283%200.483,0.0566%200.739,0.0566%20h%200.483%20v%200.1414%20c%200,0.0849%200,0.198%20-0.028,0.2829%20-0.057,0.0848%20-0.086,0.1697%20-0.171,0.2263%20-0.057,0.0848%20-0.142,0.1414%20-0.256,0.1697%20-0.113,0.0565%20-0.227,0.0565%20-0.369,0.0565%20-0.142,0%20-0.256,0%20-0.341,-0.0282%20C%2091.764,8.2178%2091.679,8.1895%2091.594,8.1612%2091.509,8.1329%2091.423,8.0763%2091.367,8.0198%2091.31,7.9915%2091.253,7.9349%2091.196,7.8783%20Z%20m%201.876,-1.386%20v%200%20c%20-0.171,0%20-0.313,0%20-0.483,-0.0283%20C%2092.02,6.8601%2091.878,6.8318%2091.736,6.7752%2091.594,6.7469%2091.48,6.6621%2091.395,6.5772%2091.31,6.4923%2091.281,6.3792%2091.281,6.2378%20c%200,-0.198%200.057,-0.3395%200.199,-0.4243%200.142,-0.0849%200.313,-0.1415%200.54,-0.1415%200.199,0%200.341,0.0283%200.483,0.0849%200.114,0.0566%200.228,0.1414%200.313,0.2546%200.057,0.0848%200.114,0.198%200.171,0.3111%200.028,0.1415%200.028,0.2546%200.028,0.3677%20v%200.2263%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path174'%20/%3e%3cpath%20d='m%2094.635,8.7269%20h%200.653%20V%208.1895%20h%200.029%20c%200.085,0.198%200.227,0.3394%200.426,0.4526%200.199,0.1131%200.455,0.1697%200.711,0.1697%200.17,0%200.341,-0.0283%200.483,-0.0566%200.17,-0.0566%200.312,-0.1414%200.426,-0.2546%200.114,-0.1131%200.199,-0.2545%200.284,-0.4243%200.057,-0.1697%200.085,-0.3677%200.085,-0.594%20V%205.2195%20h%20-0.653%20v%202.0648%20c%200,0.1698%20-0.029,0.3112%20-0.085,0.4243%20-0.029,0.1132%20-0.086,0.2263%20-0.171,0.2829%20-0.085,0.0848%20-0.17,0.1131%20-0.256,0.1697%20-0.085,0.0283%20-0.199,0.0283%20-0.284,0.0283%20-0.142,0%20-0.284,0%20-0.398,-0.0566%20C%2095.772,8.0763%2095.658,8.0198%2095.573,7.9349%2095.487,7.8218%2095.402,7.7086%2095.374,7.5672%2095.317,7.3975%2095.288,7.2278%2095.288,7.0298%20V%205.2195%20h%20-0.653%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path176'%20/%3e%3cpath%20d='m%20100.97,10.452%20h%200.94%20l%202.9,-4.2991%20h%200.03%20v%204.2991%20h%200.71%20V%205.2195%20h%20-0.91%20l%20-2.93,4.2994%20h%20-0.03%20V%205.2195%20h%20-0.71%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path178'%20/%3e%3cpath%20d='m%20106.74,8.3026%20c%200.17,0.1697%200.4,0.3112%200.65,0.396%200.23,0.0849%200.49,0.1132%200.74,0.1132%200.26,0%200.49,-0.0283%200.66,-0.0849%200.2,-0.0566%200.34,-0.1414%200.45,-0.2546%200.12,-0.1131%200.2,-0.2545%200.26,-0.3677%200.05,-0.1414%200.08,-0.3111%200.08,-0.4525%20V%205.87%20c%200,-0.1414%200,-0.2545%200.03,-0.3394%200,-0.1131%200,-0.198%200,-0.3111%20h%20-0.57%20c%20-0.03,0.198%20-0.03,0.3677%20-0.03,0.5374%20h%20-0.02%20c%20-0.15,-0.2263%20-0.32,-0.396%20-0.52,-0.4809%20-0.19,-0.0848%20-0.45,-0.1414%20-0.71,-0.1414%20-0.17,0%20-0.31,0.0283%20-0.48,0.0849%20-0.14,0.0283%20-0.25,0.0848%20-0.37,0.198%20-0.11,0.0848%20-0.2,0.198%20-0.25,0.3111%20-0.09,0.1414%20-0.12,0.2829%20-0.12,0.4526%200,0.2263%200.06,0.4243%200.14,0.5657%200.12,0.1697%200.26,0.2829%200.43,0.396%200.17,0.0849%200.37,0.1414%200.63,0.198%200.22,0.0283%200.48,0.0566%200.73,0.0566%20h%200.49%20v%200.1414%20c%200,0.0849%200,0.198%20-0.03,0.2829%20-0.06,0.0848%20-0.09,0.1697%20-0.17,0.2263%20-0.06,0.0848%20-0.14,0.1414%20-0.26,0.1697%20-0.11,0.0565%20-0.22,0.0565%20-0.37,0.0565%20-0.14,0%20-0.22,0%20-0.34,-0.0282%20-0.08,-0.0283%20-0.17,-0.0566%20-0.25,-0.0849%20-0.09,-0.0283%20-0.15,-0.0849%20-0.23,-0.1414%20-0.06,-0.0283%20-0.11,-0.0849%20-0.17,-0.1415%20z%20m%201.88,-1.386%20v%200%20c%20-0.17,0%20-0.32,0%20-0.49,-0.0283%20-0.17,-0.0282%20-0.31,-0.0565%20-0.45,-0.1131%20-0.14,-0.0283%20-0.26,-0.1131%20-0.34,-0.198%20-0.09,-0.0849%20-0.12,-0.198%20-0.12,-0.3394%200,-0.198%200.06,-0.3395%200.2,-0.4243%200.15,-0.0849%200.32,-0.1415%200.54,-0.1415%200.2,0%200.34,0.0283%200.49,0.0849%200.11,0.0566%200.22,0.1414%200.31,0.2546%200.06,0.0848%200.11,0.198%200.17,0.3111%200.03,0.1415%200.03,0.2546%200.03,0.3677%20v%200.2263%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path180'%20/%3e%3cpath%20d='m%20112.43,7.8501%20c%20-0.06,0.1131%20-0.18,0.1697%20-0.29,0.2545%20-0.11,0.0566%20-0.25,0.0849%20-0.43,0.0849%20-0.14,0%20-0.28,-0.0283%20-0.39,-0.0849%20-0.12,-0.0848%20-0.2,-0.1697%20-0.2,-0.3111%200,-0.0849%200.05,-0.1697%200.11,-0.2263%200.06,-0.0849%200.14,-0.1131%200.23,-0.1697%200.11,-0.0283%200.2,-0.0566%200.31,-0.0849%200.09,-0.0283%200.17,-0.0283%200.26,-0.0565%200.14,-0.0283%200.28,-0.0849%200.4,-0.1132%200.14,-0.0566%200.25,-0.1131%200.34,-0.198%200.08,-0.0848%200.17,-0.1697%200.19,-0.2828%200.06,-0.1132%200.09,-0.2546%200.09,-0.4243%200,-0.198%20-0.03,-0.3678%20-0.11,-0.5092%20-0.09,-0.1414%20-0.2,-0.2546%20-0.34,-0.3394%20-0.12,-0.0849%20-0.29,-0.1414%20-0.46,-0.198%20-0.17,-0.0283%20-0.34,-0.0566%20-0.51,-0.0566%20-0.28,0%20-0.54,0.0566%20-0.77,0.1414%20-0.23,0.0849%20-0.42,0.2546%20-0.59,0.4809%20l%200.51,0.4243%20c%200.11,-0.1132%200.22,-0.198%200.37,-0.2829%200.11,-0.0848%200.28,-0.1414%200.48,-0.1414%200.08,0%200.17,0%200.26,0.0283%200.08,0.0283%200.17,0.0566%200.22,0.0848%200.06,0.0283%200.12,0.0849%200.17,0.1415%200.03,0.0565%200.06,0.1131%200.06,0.198%200,0.0848%20-0.03,0.1697%20-0.09,0.2263%20-0.05,0.0848%20-0.14,0.1131%20-0.22,0.1697%20-0.09,0.0283%20-0.17,0.0566%20-0.29,0.0848%20-0.08,0.0283%20-0.17,0.0283%20-0.25,0.0566%20-0.14,0.0283%20-0.29,0.0566%20-0.4,0.1132%20-0.14,0.0565%20-0.26,0.1131%20-0.34,0.1697%20-0.12,0.0848%20-0.17,0.1697%20-0.23,0.2828%20-0.08,0.1132%20-0.11,0.2546%20-0.11,0.4243%200,0.198%200.05,0.3394%200.11,0.4809%200.09,0.1414%200.2,0.2545%200.31,0.3394%200.15,0.0849%200.29,0.1414%200.43,0.198%200.17,0.0283%200.34,0.0566%200.48,0.0566%200.26,0%200.49,-0.0283%200.69,-0.1132%200.22,-0.1131%200.39,-0.2545%200.53,-0.4525%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path182'%20/%3e%3cpath%20d='m%20113.76,9.9715%20c%200,0.1415%200.06,0.2545%200.14,0.3675%200.09,0.085%200.2,0.142%200.34,0.142%200.15,0%200.26,-0.057%200.34,-0.142%200.12,-0.113%200.15,-0.226%200.15,-0.3675%200,-0.1131%20-0.03,-0.2263%20-0.15,-0.3394%20-0.08,-0.0849%20-0.19,-0.1415%20-0.34,-0.1415%20-0.14,0%20-0.25,0.0566%20-0.34,0.1415%20-0.08,0.1131%20-0.14,0.2263%20-0.14,0.3394%20z%20m%200.14,-1.2446%20v%200%20h%200.68%20V%205.2195%20h%20-0.68%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path184'%20/%3e%3cpath%20d='m%20115.47,6.9732%20c%200,0.2546%200.05,0.5091%200.14,0.7354%200.11,0.198%200.23,0.396%200.4,0.5657%200.17,0.1698%200.37,0.3112%200.59,0.396%200.23,0.1132%200.49,0.1415%200.74,0.1415%200.26,0%200.51,-0.0283%200.74,-0.1415%200.23,-0.0848%200.43,-0.2262%200.6,-0.396%200.17,-0.1697%200.28,-0.3677%200.4,-0.5657%200.08,-0.2263%200.14,-0.4808%200.14,-0.7354%200,-0.2546%20-0.06,-0.4809%20-0.14,-0.7071%20-0.12,-0.2263%20-0.23,-0.4243%20-0.4,-0.5941%20-0.17,-0.1697%20-0.37,-0.2828%20-0.6,-0.396%20-0.23,-0.0848%20-0.48,-0.1414%20-0.74,-0.1414%20-0.25,0%20-0.51,0.0566%20-0.74,0.1414%20-0.22,0.1132%20-0.42,0.2263%20-0.59,0.396%20-0.17,0.1698%20-0.29,0.3678%20-0.4,0.5941%20-0.09,0.2262%20-0.14,0.4525%20-0.14,0.7071%20z%20m%200.71,0%20v%200%20c%200,-0.1697%200.02,-0.3394%200.08,-0.4809%200.06,-0.1414%200.14,-0.2828%200.23,-0.396%200.11,-0.0848%200.23,-0.1697%200.37,-0.2545%200.14,-0.0566%200.31,-0.0849%200.48,-0.0849%200.17,0%200.34,0.0283%200.48,0.0849%200.15,0.0848%200.26,0.1697%200.37,0.2545%200.09,0.1132%200.17,0.2546%200.23,0.396%200.06,0.1415%200.09,0.3112%200.09,0.4809%200,0.1697%20-0.03,0.3394%20-0.09,0.5091%20-0.06,0.1415%20-0.14,0.2546%20-0.23,0.3678%20-0.11,0.1131%20-0.22,0.198%20-0.37,0.2545%20-0.14,0.0566%20-0.31,0.0849%20-0.48,0.0849%20-0.17,0%20-0.34,-0.0283%20-0.48,-0.0849%20C%20116.72,8.0481%20116.6,7.9632%20116.49,7.8501%20116.4,7.7369%20116.32,7.6238%20116.26,7.4823%20116.2,7.3126%20116.18,7.1429%20116.18,6.9732%20Z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path186'%20/%3e%3cpath%20d='m%20120.04,8.7269%20h%200.68%20v%20-0.5374%200%20c%200.09,0.198%200.23,0.3394%200.46,0.4526%200.2,0.1131%200.42,0.1697%200.71,0.1697%200.17,0%200.34,-0.0283%200.48,-0.0566%200.17,-0.0566%200.29,-0.1414%200.43,-0.2546%200.11,-0.1131%200.2,-0.2545%200.25,-0.4243%200.09,-0.1697%200.12,-0.3677%200.12,-0.594%20V%205.2195%20h%20-0.68%20v%202.0648%20c%200,0.1698%200,0.3112%20-0.06,0.4243%20-0.03,0.1132%20-0.12,0.2263%20-0.17,0.2829%20-0.09,0.0848%20-0.17,0.1131%20-0.26,0.1697%20-0.11,0.0283%20-0.2,0.0283%20-0.31,0.0283%20-0.14,0%20-0.26,0%20-0.37,-0.0566%20-0.11,-0.0566%20-0.23,-0.1131%20-0.31,-0.198%20-0.09,-0.1131%20-0.17,-0.2263%20-0.23,-0.3677%20-0.03,-0.1697%20-0.06,-0.3394%20-0.06,-0.5374%20V%205.2195%20h%20-0.68%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path188'%20/%3e%3cpath%20d='m%20124.19,8.3026%20c%200.2,0.1697%200.4,0.3112%200.65,0.396%200.26,0.0849%200.49,0.1132%200.74,0.1132%200.26,0%200.49,-0.0283%200.66,-0.0849%200.2,-0.0566%200.34,-0.1414%200.48,-0.2546%200.11,-0.1131%200.2,-0.2545%200.26,-0.3677%200.05,-0.1414%200.08,-0.3111%200.08,-0.4525%20V%205.87%20c%200,-0.1414%200,-0.2545%200,-0.3394%200,-0.1131%200,-0.198%200.03,-0.3111%20h%20-0.6%20c%20-0.03,0.198%20-0.03,0.3677%20-0.03,0.5374%20v%200%20c%20-0.17,-0.2263%20-0.34,-0.396%20-0.54,-0.4809%20-0.19,-0.0848%20-0.42,-0.1414%20-0.71,-0.1414%20-0.14,0%20-0.31,0.0283%20-0.45,0.0849%20-0.14,0.0283%20-0.29,0.0848%20-0.4,0.198%20-0.11,0.0848%20-0.2,0.198%20-0.25,0.3111%20-0.06,0.1414%20-0.12,0.2829%20-0.12,0.4526%200,0.2263%200.06,0.4243%200.17,0.5657%200.09,0.1697%200.23,0.2829%200.4,0.396%200.2,0.0849%200.4,0.1414%200.63,0.198%200.22,0.0283%200.48,0.0566%200.76,0.0566%20h%200.49%20v%200.1414%20c%200,0.0849%20-0.03,0.198%20-0.06,0.2829%20-0.03,0.0848%20-0.09,0.1697%20-0.14,0.2263%20-0.09,0.0848%20-0.17,0.1414%20-0.29,0.1697%20-0.08,0.0565%20-0.22,0.0565%20-0.37,0.0565%20-0.11,0%20-0.22,0%20-0.34,-0.0282%20-0.08,-0.0283%20-0.17,-0.0566%20-0.25,-0.0849%20-0.09,-0.0283%20-0.15,-0.0849%20-0.2,-0.1414%20-0.09,-0.0283%20-0.14,-0.0849%20-0.2,-0.1415%20z%20m%201.88,-1.386%20v%200%20c%20-0.15,0%20-0.32,0%20-0.49,-0.0283%20-0.17,-0.0282%20-0.31,-0.0565%20-0.45,-0.1131%20-0.14,-0.0283%20-0.23,-0.1131%20-0.31,-0.198%20-0.12,-0.0849%20-0.15,-0.198%20-0.15,-0.3394%200,-0.198%200.06,-0.3395%200.2,-0.4243%200.14,-0.0849%200.32,-0.1415%200.57,-0.1415%200.17,0%200.34,0.0283%200.46,0.0849%200.14,0.0566%200.22,0.1414%200.31,0.2546%200.08,0.0848%200.14,0.198%200.17,0.3111%200.03,0.1415%200.06,0.2546%200.06,0.3677%20v%200.2263%20z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path190'%20/%3e%3cpath%20d='m%20128.08,5.2195%20h%200.65363%20v%205.6006%20H%20128.08%20Z'%20style='fill:%23000000;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path192'%20/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e", ef = '<svg xmlns="http://www.w3.org/2000/svg" width="375" height="160" viewBox="0 0 375 160"><defs><linearGradient id="f" x1="0" y1="0" x2="0" y2="1"><stop offset=".55" stop-color="#f6f7f9" stop-opacity="0"/><stop offset="1" stop-color="#f6f7f9" stop-opacity="1"/></linearGradient></defs><g transform="translate(0,-18)"><rect x="138" y="30" width="34" height="130" rx="2" fill="#dfe2ec"/><rect x="206" y="14" width="40" height="150" rx="2" fill="#d6dae7"/><rect x="282" y="38" width="38" height="122" rx="2" fill="#dfe2ec"/><rect x="330" y="26" width="45" height="134" rx="2" fill="#d6dae7"/><g fill="#f6f7fb" opacity=".7"><rect x="214" y="26" width="8" height="5" rx="1"/><rect x="228" y="26" width="8" height="5" rx="1"/><rect x="214" y="40" width="8" height="5" rx="1"/><rect x="228" y="40" width="8" height="5" rx="1"/><rect x="338" y="40" width="8" height="5" rx="1"/><rect x="352" y="40" width="8" height="5" rx="1"/><rect x="290" y="52" width="8" height="5" rx="1"/><rect x="304" y="52" width="8" height="5" rx="1"/></g><rect x="120" y="76" width="190" height="5" rx="2" fill="#cdd2e1"/><rect x="152" y="62" width="104" height="14" rx="7" fill="#f6f7fb" stroke="#cdd2e1" stroke-width="1.5"/><rect x="162" y="66" width="84" height="4" rx="2" fill="#d6dae7"/><rect x="156" y="81" width="4" height="40" fill="#d6dae7"/><rect x="262" y="81" width="4" height="40" fill="#d6dae7"/><path d="M14 54 30 40h110l8 14z" fill="#cdd2e1"/><rect x="14" y="54" width="134" height="8" fill="#d6dae7"/><rect x="82" y="22" width="44" height="18" rx="2" fill="#d6dae7"/><text x="104" y="36" text-anchor="middle" font-family="Archivo,sans-serif" font-weight="800" font-size="13" fill="#f6f7fb">L</text><rect x="22" y="62" width="6" height="98" fill="#d6dae7"/><rect x="138" y="62" width="6" height="98" fill="#d6dae7"/><rect x="28" y="108" width="110" height="52" fill="#dfe2ec"/><rect x="28" y="106" width="110" height="5" rx="1" fill="#cdd2e1"/><circle cx="104" cy="86" r="5.1" fill="#cdd2e1"/><rect x="98.3" y="92.0" width="11.4" height="18.6" rx="4.2" fill="#cdd2e1"/><circle cx="126" cy="88" r="5.1" fill="#d6dae7"/><rect x="120.3" y="94.0" width="11.4" height="18.6" rx="4.2" fill="#d6dae7"/><rect x="164" y="112" width="30" height="4" rx="2" fill="#cdd2e1"/><rect x="176" y="116" width="3" height="20" fill="#cdd2e1"/><circle cx="172" cy="96" r="4.4" fill="#d6dae7"/><rect x="167.1" y="101.2" width="9.9" height="16.1" rx="3.6" fill="#d6dae7"/><circle cx="226" cy="140" r="9" fill="none" stroke="#cdd2e1" stroke-width="3"/><circle cx="262" cy="140" r="9" fill="none" stroke="#cdd2e1" stroke-width="3"/><path d="M226 140h12l6-18h12l6 18" fill="none" stroke="#cdd2e1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><rect x="236" y="104" width="14" height="14" rx="3" fill="#d6dae7"/><circle cx="244" cy="94" r="5.1" fill="#cdd2e1"/><rect x="238.3" y="100.0" width="11.4" height="18.6" rx="4.2" fill="#cdd2e1"/><circle cx="204" cy="100" r="5.8" fill="#d6dae7"/><rect x="197.5" y="106.8" width="12.9" height="21.1" rx="4.8" fill="#d6dae7"/><path d="M30 14l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#f6f7fb"/><path d="M318 20l1.5 3.5 3.5 1.5-3.5 1.5-1.5 3.5-1.5-3.5-3.5-1.5 3.5-1.5z" fill="#f6f7fb"/></g><rect width="375" height="160" fill="url(#f)"/></svg>', v1 = (a) => `<svg xmlns="http://www.w3.org/2000/svg" width="342" height="140" viewBox="0 0 342 140">${a}</svg>`, tf = v1(
  '<circle cx="272" cy="40" r="33" fill="#f4934b"/><circle cx="272" cy="40" r="23" fill="none" stroke="#f59b58" stroke-width="5"/><circle cx="320" cy="118" r="24" fill="#f4934b"/><circle cx="320" cy="118" r="15" fill="none" stroke="#f59b58" stroke-width="4"/><circle cx="240" cy="110" r="15" fill="#f59b58"/>'
), nf = v1(
  '<g transform="rotate(-12 282 41)"><rect x="236" y="14" width="92" height="54" rx="9" fill="#ec444b"/><rect x="246" y="48" width="44" height="8" rx="4" fill="#ed5157"/></g><g transform="rotate(9 307 112)"><rect x="270" y="90" width="74" height="44" rx="9" fill="#ed5157"/></g><g transform="rotate(14 239 113)"><rect x="222" y="96" width="34" height="34" rx="8" fill="#ec444b"/></g>'
), rf = { i: 0 }, lf = { i: 0 }, sf = 352;
async function af(a) {
  await a.wait(1500), a.mark("next1"), await a.set({ i: 1 }), await a.wait(2400), a.mark("next2"), await a.set({ i: 2 }), await a.wait(2400), a.mark("wrap"), await a.set({ i: 3 }), await a.wait(1100), await a.snap({ i: 0 }), await a.wait(200);
}
const Bl = { size: 28, strokeWidth: 1.7 }, bt = { size: 26, strokeWidth: 1.8 }, of = [
  { label: "Isi Saldo", icon: /* @__PURE__ */ l.jsx(c1, { ...Bl }), badge: /* @__PURE__ */ l.jsx(Qi, { size: 9, strokeWidth: 3.4 }) },
  { label: "Kirim Saldo", icon: /* @__PURE__ */ l.jsx(Dd, { ...Bl }), badge: /* @__PURE__ */ l.jsx(u1, { size: 9, strokeWidth: 3.2 }) },
  { label: "Kode Tiket", icon: /* @__PURE__ */ l.jsx(Wd, { ...Bl }) },
  { label: "Semua", icon: /* @__PURE__ */ l.jsx(a1, { ...Bl }) }
], uf = [
  { label: "Pulsa/Data", icon: /* @__PURE__ */ l.jsx(h1, { ...bt }), c: "#e8232b", bg: "#fde7e7" },
  { label: "Listrik", icon: /* @__PURE__ */ l.jsx(m1, { ...bt }), c: "#1196b0", bg: "#dcf5fa" },
  { label: "Bis", icon: /* @__PURE__ */ l.jsx(md, { ...bt }), c: "#2f9d4a", bg: "#e0f4e6" },
  { label: "Kirim ke E-Wallet", node: /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    "Kirim ke ",
    /* @__PURE__ */ l.jsx("span", { className: "lh-nb", children: "E-Wallet" })
  ] }), icon: /* @__PURE__ */ l.jsx(Vi, { ...bt }), c: "#2b59c3", bg: "#e3eafc", tag: "Baru" },
  { label: "Mgames", icon: /* @__PURE__ */ l.jsx(Cd, { ...bt }), c: "#d9791c", bg: "#fff0dc" },
  { label: "Infaq", icon: /* @__PURE__ */ l.jsx("span", { className: "lh-rp", children: "Rp" }), c: "#1c8a7a", bg: "#dbf3ee" },
  { label: "Samsat", icon: /* @__PURE__ */ l.jsx(Od, { ...bt }), c: "#c32a86", bg: "#fce4f2" },
  { label: "Lainnya", icon: /* @__PURE__ */ l.jsx(a1, { ...bt }), c: "#4b5563", bg: "#eceef3" }
], cf = [
  { label: "Beranda", icon: /* @__PURE__ */ l.jsx(Wi, { size: 24, strokeWidth: 2 }), on: !0 },
  { label: "Riwayat", icon: /* @__PURE__ */ l.jsx(Nd, { size: 24, strokeWidth: 1.7 }) },
  null,
  { label: "Pesan", icon: /* @__PURE__ */ l.jsx(Ui, { size: 24, strokeWidth: 1.7 }) },
  { label: "Akun", icon: /* @__PURE__ */ l.jsx(Ul, { size: 24, strokeWidth: 1.7 }) }
];
function Uo() {
  return /* @__PURE__ */ l.jsx("span", { className: "lh-go", "aria-hidden": !0, children: /* @__PURE__ */ l.jsx(u1, { size: 11, strokeWidth: 3.2 }) });
}
function df() {
  return /* @__PURE__ */ l.jsx(
    Er,
    {
      width: 400,
      height: 755,
      compact: { below: 560, width: 358, height: 718 },
      initial: rf,
      poster: lf,
      script: af,
      play: "loop",
      theme: "dark",
      className: "lh",
      children: (a, c, u) => /* @__PURE__ */ l.jsx(Ar, { width: u === "compact" ? 326 : 340, className: "lh-phone", children: /* @__PURE__ */ l.jsxs("div", { className: "lh-app", children: [
        /* @__PURE__ */ l.jsx("div", { className: "lh-street", style: { backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(ef)}")` } }),
        /* @__PURE__ */ l.jsxs("div", { className: "lh-top", children: [
          /* @__PURE__ */ l.jsxs("span", { className: "lh-logo", children: [
            /* @__PURE__ */ l.jsx("span", { children: "Link" }),
            /* @__PURE__ */ l.jsx("span", { children: "Aja!" })
          ] }),
          /* @__PURE__ */ l.jsxs("span", { className: "lh-icons", children: [
            /* @__PURE__ */ l.jsx("span", { className: "lh-ibtn", children: /* @__PURE__ */ l.jsx(i1, { size: 22, strokeWidth: 1.6, fill: "currentColor" }) }),
            /* @__PURE__ */ l.jsx("span", { className: "lh-ibtn", children: /* @__PURE__ */ l.jsx(Md, { size: 24, strokeWidth: 1.8 }) })
          ] })
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "lh-hero", children: [
          /* @__PURE__ */ l.jsx("div", { className: "lh-hero__hi", children: "Hai, Linka Jadid" }),
          /* @__PURE__ */ l.jsxs("div", { className: "lh-hero__cards", children: [
            /* @__PURE__ */ l.jsxs("div", { className: "lh-bal", children: [
              /* @__PURE__ */ l.jsx("span", { className: "lh-bal__k", children: "Saldo Kamu" }),
              /* @__PURE__ */ l.jsxs("span", { className: "lh-bal__v", children: [
                "Rp1.000.000",
                /* @__PURE__ */ l.jsx(Uo, {})
              ] })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "lh-bal", children: [
              /* @__PURE__ */ l.jsx("span", { className: "lh-bal__k", children: "AKHLAK Poin" }),
              /* @__PURE__ */ l.jsxs("span", { className: "lh-bal__v", children: [
                /* @__PURE__ */ l.jsx("span", { className: "lh-coin", "aria-hidden": !0 }),
                "150.000",
                /* @__PURE__ */ l.jsx(Uo, {})
              ] })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "lh-bal", children: [
              /* @__PURE__ */ l.jsx("span", { className: "lh-bal__k", children: "MyPaylater" }),
              /* @__PURE__ */ l.jsx("span", { className: "lh-bal__v lh-bal__v--cta", children: "Aktifkan" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ l.jsx("div", { className: "lh-quick", children: of.map((p) => /* @__PURE__ */ l.jsxs("span", { className: "lh-quick__i", children: [
          /* @__PURE__ */ l.jsxs("span", { className: "lh-quick__ic", children: [
            p.icon,
            p.badge && /* @__PURE__ */ l.jsx("span", { className: "lh-badge", children: p.badge })
          ] }),
          /* @__PURE__ */ l.jsx("span", { children: p.label })
        ] }, p.label)) }),
        /* @__PURE__ */ l.jsx("div", { className: "lh-grid", children: uf.map((p) => /* @__PURE__ */ l.jsxs("span", { className: "lh-svc", children: [
          /* @__PURE__ */ l.jsxs("span", { className: "lh-svc__ic", style: { background: p.bg, color: p.c }, children: [
            p.icon,
            p.tag && /* @__PURE__ */ l.jsx("span", { className: "lh-new", children: p.tag })
          ] }),
          /* @__PURE__ */ l.jsx("span", { className: "lh-svc__l", children: "node" in p ? p.node : p.label })
        ] }, p.label)) }),
        /* @__PURE__ */ l.jsx("div", { className: "lh-promo__title", children: "Spesial Hanya Untukmu!" }),
        /* @__PURE__ */ l.jsx("div", { className: "lh-promo", children: /* @__PURE__ */ l.jsxs("div", { className: "lh-track", style: { transform: `translateX(${-a.i * sf}px)` }, children: [
          /* @__PURE__ */ l.jsxs("div", { className: "lh-ban lh-ban--1", children: [
            /* @__PURE__ */ l.jsxs("span", { className: "lh-ban__h", children: [
              "Bayar apa aja &",
              /* @__PURE__ */ l.jsx("br", {}),
              "di mana aja"
            ] }),
            /* @__PURE__ */ l.jsx("span", { className: "lh-ban__s", children: "praktis selalu ada LinkAja!" }),
            /* @__PURE__ */ l.jsx("span", { className: "lh-ban__tile", children: /* @__PURE__ */ l.jsx(Bo, { size: 26, strokeWidth: 1.8 }) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "lh-ban lh-ban--2", style: { backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(tf)}"), linear-gradient(115deg, var(--b0), var(--b1))` }, children: [
            /* @__PURE__ */ l.jsxs("span", { className: "lh-ban__h", children: [
              "Isi saldo kapan aja,",
              /* @__PURE__ */ l.jsx("br", {}),
              "langsung dari HP"
            ] }),
            /* @__PURE__ */ l.jsx("span", { className: "lh-ban__s", children: "top up jadi gampang" }),
            /* @__PURE__ */ l.jsxs("span", { className: "lh-ban__tile", children: [
              /* @__PURE__ */ l.jsx(Pi, { size: 26, strokeWidth: 1.8 }),
              /* @__PURE__ */ l.jsx("span", { className: "lh-ban__badge", children: /* @__PURE__ */ l.jsx(Qi, { size: 11, strokeWidth: 3.4 }) })
            ] })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "lh-ban lh-ban--3", style: { backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(nf)}"), linear-gradient(115deg, var(--b0), var(--b1))` }, children: [
            /* @__PURE__ */ l.jsxs("span", { className: "lh-ban__h", children: [
              "Semua tagihan",
              /* @__PURE__ */ l.jsx("br", {}),
              "di satu tempat"
            ] }),
            /* @__PURE__ */ l.jsx("span", { className: "lh-ban__s", children: "dari listrik sampai internet" }),
            /* @__PURE__ */ l.jsxs("span", { className: "lh-ban__tile", children: [
              /* @__PURE__ */ l.jsx(c1, { size: 26, strokeWidth: 1.8 }),
              /* @__PURE__ */ l.jsx("span", { className: "lh-ban__badge", children: /* @__PURE__ */ l.jsx(Pn, { size: 11, strokeWidth: 3.4 }) })
            ] })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "lh-ban lh-ban--1", "aria-hidden": !0, children: [
            /* @__PURE__ */ l.jsxs("span", { className: "lh-ban__h", children: [
              "Bayar apa aja &",
              /* @__PURE__ */ l.jsx("br", {}),
              "di mana aja"
            ] }),
            /* @__PURE__ */ l.jsx("span", { className: "lh-ban__s", children: "praktis selalu ada LinkAja!" }),
            /* @__PURE__ */ l.jsx("span", { className: "lh-ban__tile", children: /* @__PURE__ */ l.jsx(Bo, { size: 26, strokeWidth: 1.8 }) })
          ] })
        ] }) }),
        /* @__PURE__ */ l.jsx("div", { className: "lh-dots", children: [0, 1, 2].map((p) => /* @__PURE__ */ l.jsx("span", { className: "lh-dot", "data-on": a.i % 3 === p || void 0 }, p)) }),
        /* @__PURE__ */ l.jsx("nav", { className: "lh-tabs", children: cf.map(
          (p, v) => p ? /* @__PURE__ */ l.jsxs("span", { className: "lh-tab", "data-on": p.on || void 0, children: [
            p.icon,
            /* @__PURE__ */ l.jsx("span", { children: p.label })
          ] }, p.label) : /* @__PURE__ */ l.jsxs("span", { className: "lh-tab lh-tab--pay", children: [
            /* @__PURE__ */ l.jsx("span", { className: "lh-tab__gap" }),
            /* @__PURE__ */ l.jsx("span", { children: "Bayar" })
          ] }, v)
        ) }),
        /* @__PURE__ */ l.jsx("span", { className: "lh-fab", children: /* @__PURE__ */ l.jsx("img", { className: "lh-qris", src: $d, alt: "QRIS" }) })
      ] }) })
    }
  );
}
const ff = { step: 0, cover: !1, focus: !1, n: 0, warn: !1, rails: !1, cta: !1, sec: 17112, found: !1, total: 0 }, hf = { step: 2, cover: !0, focus: !0, n: 9, warn: !0, rails: !0, cta: !0, sec: 17108, found: !0, total: 7905e5 }, y1 = { x: 200, y: 690 }, pf = "750000000", Qo = (a) => a.replace(/\B(?=(\d{3})+(?!\d))/g, "."), mf = (a) => String(a).padStart(2, "0");
async function vf(a) {
  await a.wait(600), a.mark("pick"), await a.click("card"), a.put({ step: 1 }), await a.wait(700), a.mark("amount"), await a.click("field"), a.put({ focus: !0 }), await a.wait(150);
  for (let c = 1; c <= 9; c++)
    a.put({ n: c }), await a.wait(60);
  await a.wait(150), a.mark("check"), a.put({ warn: !0 }), await a.wait(350), a.put({ rails: !0 }), await a.wait(450), a.put({ cta: !0 }), await a.wait(700), a.mark("next"), await a.click("cta"), a.put({ step: 2 }), await a.wait(1e3), a.put((c) => ({ sec: c.sec - 1 })), await a.wait(1e3), a.put((c) => ({ sec: c.sec - 1 })), await a.wait(400), a.mark("found"), a.put({ found: !0 }), await a.wait(650), a.mark("success"), a.put({ cover: !0 }), await a.wait(700), a.put({ total: 7905e5 }), await a.wait(2100), a.mark("back"), await a.click("back"), await a.snap({ step: 0, focus: !1, n: 0, warn: !1, rails: !1, cta: !1, sec: 17112, found: !1 }), await a.wait(120), a.put({ cover: !1 }), await a.wait(550), await a.snap({ total: 0 }), await a.move(y1), await a.wait(150);
}
function Vo({ title: a, step: c }) {
  return /* @__PURE__ */ l.jsxs("div", { className: "kd-nav", children: [
    /* @__PURE__ */ l.jsx(hd, { size: 22, strokeWidth: 2.2 }),
    /* @__PURE__ */ l.jsx("span", { className: "kd-nav__t", children: a }),
    /* @__PURE__ */ l.jsx("span", { className: "kd-nav__s", children: c })
  ] });
}
function Ko({ on: a }) {
  return /* @__PURE__ */ l.jsx("div", { className: "kd-prog", children: [0, 1, 2].map((c) => /* @__PURE__ */ l.jsx("i", { "data-on": c < a || void 0 }, c)) });
}
function Ti({ name: a, sub: c, aside: u, plain: p }) {
  return /* @__PURE__ */ l.jsxs("div", { className: "kd-bank", children: [
    /* @__PURE__ */ l.jsx("span", { className: "kd-bank__ic", children: /* @__PURE__ */ l.jsx(Ld, { size: 22, strokeWidth: 1.8 }) }),
    /* @__PURE__ */ l.jsxs("span", { className: "kd-bank__t", children: [
      /* @__PURE__ */ l.jsx("b", { children: a }),
      c ? /* @__PURE__ */ l.jsx("small", { children: c }) : p ? null : /* @__PURE__ */ l.jsx("span", { className: "kd-ph", style: { width: 120 } })
    ] }),
    u
  ] });
}
function _i({ min: a, term: c, rate: u, tag: p, bank: v, sub: x, target: C, bars: N }) {
  return /* @__PURE__ */ l.jsxs("div", { className: "kd-prod", "data-target": C, "data-cursor": C ? "pointer" : void 0, children: [
    p && /* @__PURE__ */ l.jsx("span", { className: "kd-tag", children: p }),
    /* @__PURE__ */ l.jsxs("div", { className: "kd-prod__top", children: [
      /* @__PURE__ */ l.jsxs("div", { children: [
        /* @__PURE__ */ l.jsxs("div", { className: "kd-prod__k", children: [
          /* @__PURE__ */ l.jsxs("span", { children: [
            "Minimum",
            /* @__PURE__ */ l.jsx("br", {}),
            "Penempatan"
          ] }),
          /* @__PURE__ */ l.jsx("span", { children: c })
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "kd-prod__v", children: [
          N ? /* @__PURE__ */ l.jsx("span", { className: "kd-ph kd-ph--l", style: { width: 118 } }) : /* @__PURE__ */ l.jsx("span", { className: "kd-prod__amt", children: a }),
          /* @__PURE__ */ l.jsxs("span", { className: "kd-rate", children: [
            /* @__PURE__ */ l.jsx(f1, { size: 17, strokeWidth: 2.4 }),
            u
          ] })
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("span", { className: "kd-aro", children: [
        /* @__PURE__ */ l.jsx(Pd, { size: 14, strokeWidth: 2.4 }),
        "ARO"
      ] })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "kd-hr" }),
    /* @__PURE__ */ l.jsx(
      Ti,
      {
        name: v,
        sub: N ? void 0 : x,
        aside: /* @__PURE__ */ l.jsx("span", { className: "kd-chev", children: /* @__PURE__ */ l.jsx(s1, { size: 16, strokeWidth: 2.4 }) })
      }
    )
  ] });
}
function yf() {
  return /* @__PURE__ */ l.jsx(
    Er,
    {
      width: 400,
      height: 755,
      compact: { below: 560, width: 358, height: 718 },
      initial: ff,
      poster: hf,
      script: vf,
      cursor: { at: y1, style: "touch" },
      play: "loop",
      theme: "dark",
      className: "kd",
      children: (a, c, u) => {
        const p = Qo(pf.slice(0, a.n)), v = Math.floor(a.sec / 3600), x = Math.floor(a.sec % 3600 / 60), C = a.sec % 60;
        return /* @__PURE__ */ l.jsx(Ar, { width: u === "compact" ? 326 : 340, className: "kd-phone", children: /* @__PURE__ */ l.jsxs("div", { className: "kd-app", children: [
          /* @__PURE__ */ l.jsxs("section", { className: "kd-screen kd-list", "data-back": a.step > 0 || void 0, children: [
            /* @__PURE__ */ l.jsxs("div", { className: "kd-list__head", children: [
              /* @__PURE__ */ l.jsx("span", { className: "kd-list__t", children: "Produk" }),
              /* @__PURE__ */ l.jsxs("span", { className: "kd-list__search", children: [
                /* @__PURE__ */ l.jsx(d1, { size: 20, strokeWidth: 2.2 }),
                "Cari Produk"
              ] })
            ] }),
            /* @__PURE__ */ l.jsx("div", { className: "kd-chips", children: ["Bilyet Fisik", "E-Deposito", "Bunga Bulanan", "BPRS Sya"].map((N) => /* @__PURE__ */ l.jsx("span", { children: N }, N)) }),
            /* @__PURE__ */ l.jsxs("div", { className: "kd-cards", children: [
              /* @__PURE__ */ l.jsx(_i, { min: "Rp5.000.000", term: "3 Bulan", rate: "6%", bank: "BPR Mitra Usaha Anda", sub: "Madiun · 120 Transaksi" }),
              /* @__PURE__ */ l.jsx(_i, { term: "12 Bulan", rate: "6,75%", bank: "BPR Artha Sejahtera", target: "card", bars: !0 }),
              /* @__PURE__ */ l.jsx(_i, { tag: "Bagi Hasil Bulanan", min: "Rp100.000.000", term: "3 Bulan", rate: "5,75%", bank: "BPRS Sahabat UMKM", sub: "Bali · 115 Transaksi" })
            ] }),
            /* @__PURE__ */ l.jsxs("nav", { className: "kd-tabs", children: [
              /* @__PURE__ */ l.jsxs("span", { className: "kd-tab", children: [
                /* @__PURE__ */ l.jsx(Wi, { size: 22, strokeWidth: 1.8 }),
                "Beranda"
              ] }),
              /* @__PURE__ */ l.jsxs("span", { className: "kd-tab", "data-on": !0, children: [
                /* @__PURE__ */ l.jsx("span", { className: "kd-rp", children: "Rp" }),
                "Produk"
              ] }),
              /* @__PURE__ */ l.jsxs("span", { className: "kd-tab", children: [
                /* @__PURE__ */ l.jsx(Pi, { size: 22, strokeWidth: 1.8 }),
                "Depositoku"
              ] }),
              /* @__PURE__ */ l.jsxs("span", { className: "kd-tab", children: [
                /* @__PURE__ */ l.jsx(Ul, { size: 22, strokeWidth: 1.8 }),
                "Profil"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ l.jsxs("section", { className: "kd-screen kd-push", "data-at": a.step === 0 ? "right" : a.step === 1 ? "in" : "left", children: [
            /* @__PURE__ */ l.jsx(Vo, { title: "Penempatan", step: "Langkah 2 dari 3" }),
            /* @__PURE__ */ l.jsx(Ko, { on: 2 }),
            /* @__PURE__ */ l.jsxs("div", { className: "kd-body", children: [
              /* @__PURE__ */ l.jsx("div", { className: "kd-card kd-pr", children: /* @__PURE__ */ l.jsx(Ti, { name: "BPR Artha Sejahtera", sub: "Deposito 12 bulan · 6,75% p.a." }) }),
              /* @__PURE__ */ l.jsxs("div", { className: "kd-card kd-amt", children: [
                /* @__PURE__ */ l.jsx("span", { className: "kd-lb", children: "Nominal penempatan" }),
                /* @__PURE__ */ l.jsxs("div", { className: "kd-amt__v", "data-focus": a.focus || void 0, "data-target": "field", "data-cursor": "ibeam", children: [
                  a.n === 0 ? /* @__PURE__ */ l.jsx("span", { className: "kd-amt__ph", children: "Rp" }) : /* @__PURE__ */ l.jsxs("span", { children: [
                    "Rp ",
                    p
                  ] }),
                  /* @__PURE__ */ l.jsx("i", { className: "kd-caret", "data-on": a.focus && a.n < 9 || void 0 })
                ] }),
                /* @__PURE__ */ l.jsxs("div", { className: "kd-src", children: [
                  "Dari ",
                  /* @__PURE__ */ l.jsx("b", { children: "Mandiri ···· 4821" }),
                  /* @__PURE__ */ l.jsx("span", { className: "kd-chg", children: "Ubah" })
                ] }),
                /* @__PURE__ */ l.jsx(h0, { open: a.warn, children: /* @__PURE__ */ l.jsxs("div", { className: "kd-warn", children: [
                  /* @__PURE__ */ l.jsx(Ho, { size: 18, strokeWidth: 2.2 }),
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
                  /* @__PURE__ */ l.jsx(h0, { open: a.rails, children: /* @__PURE__ */ l.jsx("small", { className: "kd-opt__more", children: "Kirim sebelum 15:00 WIB" }) })
                ] })
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "kd-na", "data-dim": a.rails || void 0, children: [
                /* @__PURE__ */ l.jsx(h0, { open: a.rails, children: /* @__PURE__ */ l.jsx("div", { className: "kd-nah", children: "Tidak tersedia untuk Rp750 jt" }) }),
                [
                  ["BI-FAST", "Maks. Rp250 jt / transfer"],
                  ["VA Mandiri", "Maks. Rp30 jt / hari"],
                  ["VA Permata", "Antarbank maks. Rp25 jt"]
                ].map(([N, E]) => /* @__PURE__ */ l.jsxs("div", { className: "kd-nar", children: [
                  /* @__PURE__ */ l.jsx("b", { children: N }),
                  /* @__PURE__ */ l.jsx("span", { children: E })
                ] }, N))
              ] })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "kd-foot", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "kd-free", children: [
                /* @__PURE__ */ l.jsx(o1, { size: 16, strokeWidth: 2.2 }),
                "Belum ada dana yang dikunci"
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "kd-cta", "data-ready": a.cta || void 0, "data-target": "cta", children: "Lanjut ke instruksi" })
            ] })
          ] }),
          /* @__PURE__ */ l.jsxs("section", { className: "kd-screen kd-push", "data-at": a.step < 2 ? "right" : "in", children: [
            /* @__PURE__ */ l.jsx(Vo, { title: "Transfer via RTGS", step: "Langkah 3 dari 3" }),
            /* @__PURE__ */ l.jsx(Ko, { on: 3 }),
            /* @__PURE__ */ l.jsxs("div", { className: "kd-body", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "kd-card kd-cd", children: [
                /* @__PURE__ */ l.jsxs("div", { className: "kd-cd__row", children: [
                  /* @__PURE__ */ l.jsxs("div", { children: [
                    /* @__PURE__ */ l.jsx("span", { className: "kd-lb", children: "Batas kirim RTGS" }),
                    /* @__PURE__ */ l.jsx("b", { className: "kd-cd__d", children: "Hari ini, 15:00 WIB" })
                  ] }),
                  /* @__PURE__ */ l.jsx("div", { className: "kd-cd__t", children: [
                    [v, "jam"],
                    [x, "menit"],
                    [C, "detik"]
                  ].map(([N, E], I) => /* @__PURE__ */ l.jsxs("span", { className: "kd-cd__u", children: [
                    I > 0 && /* @__PURE__ */ l.jsx("i", { children: ":" }),
                    /* @__PURE__ */ l.jsxs("span", { children: [
                      /* @__PURE__ */ l.jsx("b", { children: /* @__PURE__ */ l.jsx($t, { value: N, format: (R) => mf(Math.round(R)), duration: 450 }) }),
                      /* @__PURE__ */ l.jsx("small", { children: E })
                    ] })
                  ] }, E)) })
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
                ["Di aplikasi Mandiri, pilih Transfer › RTGS", "Isi nominal dan rekening tujuan persis", "Tulis kode DEP-7F3K di berita transfer"].map((N, E) => /* @__PURE__ */ l.jsxs("div", { className: "kd-st", children: [
                  /* @__PURE__ */ l.jsx("i", { children: E + 1 }),
                  N
                ] }, N))
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "kd-warn kd-warn--static", children: [
                /* @__PURE__ */ l.jsx(Ho, { size: 18, strokeWidth: 2.2 }),
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
            /* @__PURE__ */ l.jsxs("div", { className: "kd-ok", children: [
              /* @__PURE__ */ l.jsx("span", { className: "kd-ok__disc", children: /* @__PURE__ */ l.jsx(Pn, { size: 34, strokeWidth: 3 }) }),
              /* @__PURE__ */ l.jsx("b", { children: "Penempatan Berhasil" }),
              /* @__PURE__ */ l.jsx("small", { children: "Dana diterima via RTGS · 10:42 WIB" })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "kd-body kd-body--ok", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "kd-card kd-sum", children: [
                /* @__PURE__ */ l.jsx(Ti, { name: "BPR Artha Sejahtera", plain: !0, aside: /* @__PURE__ */ l.jsx("span", { className: "kd-active", children: "Aktif" }) }),
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
                    /* @__PURE__ */ l.jsx($t, { value: a.total, format: (N) => Qo(String(Math.round(N))), duration: 900, stagger: 40 })
                  ] })
                ] }),
                /* @__PURE__ */ l.jsx("div", { className: "kd-mn", children: "Bunga bersih Rp 40.500.000 setelah pajak" })
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "kd-card kd-next", children: [
                /* @__PURE__ */ l.jsx("b", { children: "Langkah selanjutnya" }),
                /* @__PURE__ */ l.jsxs("div", { className: "kd-next__r", children: [
                  /* @__PURE__ */ l.jsx("span", { className: "kd-next__ic", children: /* @__PURE__ */ l.jsx(Ui, { size: 20, strokeWidth: 1.8 }) }),
                  "Sertifikat dikirim ke email Anda"
                ] }),
                /* @__PURE__ */ l.jsxs("div", { className: "kd-next__r", children: [
                  /* @__PURE__ */ l.jsx("span", { className: "kd-next__ic", children: /* @__PURE__ */ l.jsx(Pi, { size: 20, strokeWidth: 1.8 }) }),
                  "Kelola aktif di menu Depositoku"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "kd-foot", children: [
              /* @__PURE__ */ l.jsx("div", { className: "kd-cta", children: "Lihat Portofolio" }),
              /* @__PURE__ */ l.jsx("div", { className: "kd-alt", "data-target": "back", children: "Kembali ke Beranda" })
            ] })
          ] })
        ] }) });
      }
    }
  );
}
const g1 = {
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
}, gf = {
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
}, x1 = "Compares cover against lead time and the sales trend for each SKU.", xf = x1.split(" ").length;
async function wf(a) {
  await a.wait(900), a.mark("sources"), a.put({ src: "run", label: "Running…" });
  for (let c = 1; c <= 4; c++)
    await a.wait(190), a.put({ tags: c });
  await a.wait(260), a.put({ src: "done", e1: !0 }), await a.wait(620), a.mark("clean"), a.put({ clean: "run", n1: 312, n2: 1840, n3: 0 }), await a.wait(620), a.put({ dupesOk: !0 }), await a.wait(560), a.put({ clean: "done", e2: !0 }), await a.wait(640), a.mark("signals"), a.put({ llm: "run", conf: 0.86 });
  for (let c = 1; c <= xf; c++)
    await a.wait(88), a.put({ words: c });
  await a.wait(240), a.put({ llm: "done", e3: !0 }), await a.wait(640), a.mark("gate"), a.put({ gate: "run" }), await a.wait(450), a.put({ chosen: !0 }), await a.wait(300), a.put({ gate: "done", rev: "skip", e4: !0 }), await a.wait(750), a.mark("decision"), a.put({ dec: "run" }), await a.wait(380), a.put({ dec: "done", card: !0, cv: 0.86, label: "Ran in 2.4s" }), await a.wait(3e3), a.mark("exit"), a.put({ card: !1, dec: "idle", rev: "idle", chosen: !1, e4: !1, e3: !1, e2: !1, e1: !1, label: "Ready" }), await a.wait(300), await a.stagger([1, 2, 3, 4, 5], (c) => a.put({ hid: c }), 70), await a.wait(550), await a.snap({ ...g1, hid: 5 }), await a.wait(150), await a.set({ hid: 0 }), await a.wait(500);
}
const kf = [
  ["Legacy ERP", "orders"],
  ["Sales CRM", "accounts"],
  ["Warehouse sheets", null],
  ["POS exports", "daily"]
];
function jf({ state: a, fix: c }) {
  const u = c ? { wait: "…", ok: "OK", fix: "DUPES" } : { wait: "…", ok: "OK", fix: "OK" };
  return /* @__PURE__ */ l.jsx("span", { className: "dd-tag dd-dyn", "data-tone": a, children: /* @__PURE__ */ l.jsx(Fi, { value: a, states: u, align: "center" }) });
}
function Nf({ st: a, time: c, big: u }) {
  return /* @__PURE__ */ l.jsxs("span", { className: "dd-st dd-dyn", children: [
    /* @__PURE__ */ l.jsx("span", { className: "dd-st__t", "data-on": a === "done" && !!c || void 0, children: c }),
    /* @__PURE__ */ l.jsx(Wl, { on: a === "done", pending: a === "run", size: u ? 18 : 14 })
  ] });
}
function jr({ tile: a, icon: c, title: u, st: p, time: v, big: x }) {
  return /* @__PURE__ */ l.jsxs("div", { className: "dd-nh", children: [
    /* @__PURE__ */ l.jsx("span", { className: "dd-ico", style: { background: a }, children: c }),
    /* @__PURE__ */ l.jsx("span", { className: "dd-nt", children: u }),
    /* @__PURE__ */ l.jsx(Nf, { st: p, time: v, big: x })
  ] });
}
function Sf() {
  return /* @__PURE__ */ l.jsx(
    Er,
    {
      width: 1064,
      height: 520,
      compact: { below: 640, width: 358, height: 560 },
      initial: g1,
      poster: gf,
      script: wf,
      play: "loop",
      theme: "dark",
      className: "dd",
      children: (a, c, u) => {
        const p = u === "wide", v = { size: p ? 14 : 17, strokeWidth: 2 }, x = (G) => a.hid > 4 - G || void 0, C = /* @__PURE__ */ l.jsx("div", { className: "dd-nb", children: kf.map(([G, D], je) => {
          const me = je === 2, pe = je >= a.tags ? "wait" : me && !a.dupesOk ? "fix" : "ok";
          return /* @__PURE__ */ l.jsxs("div", { className: "dd-row", children: [
            /* @__PURE__ */ l.jsxs("span", { children: [
              /* @__PURE__ */ l.jsx("b", { children: G }),
              D ? ` · ${D}` : ""
            ] }),
            /* @__PURE__ */ l.jsx(jf, { state: pe, fix: me })
          ] }, G);
        }) }), N = /* @__PURE__ */ l.jsxs("div", { className: "dd-nb", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "dd-row", children: [
            /* @__PURE__ */ l.jsx("span", { children: "Duplicates removed" }),
            /* @__PURE__ */ l.jsx("b", { className: "dd-dyn", children: /* @__PURE__ */ l.jsx($t, { value: a.n1, duration: 900 }) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "dd-row", children: [
            /* @__PURE__ */ l.jsx("span", { children: "SKUs reconciled" }),
            /* @__PURE__ */ l.jsx("b", { className: "dd-dyn", children: /* @__PURE__ */ l.jsx($t, { value: a.n2, duration: 900 }) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "dd-row", children: [
            /* @__PURE__ */ l.jsx("span", { children: "Rows failing checks" }),
            /* @__PURE__ */ l.jsx("b", { className: "dd-dyn", children: /* @__PURE__ */ l.jsx($t, { value: a.n3, duration: 900 }) })
          ] })
        ] }), E = /* @__PURE__ */ l.jsxs("div", { className: "dd-nb", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "dd-row", children: [
            /* @__PURE__ */ l.jsx("span", { children: "Step" }),
            /* @__PURE__ */ l.jsx("code", { children: "LLM" })
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "dd-note dd-dyn", children: /* @__PURE__ */ l.jsx(t1, { text: x1, count: a.words }) }),
          /* @__PURE__ */ l.jsxs("div", { className: "dd-row", children: [
            /* @__PURE__ */ l.jsx("span", { children: "Confidence" }),
            /* @__PURE__ */ l.jsx("b", { className: "dd-dyn", children: /* @__PURE__ */ l.jsx($t, { value: a.conf, format: (G) => G.toFixed(2), duration: 1e3 }) })
          ] })
        ] }), I = /* @__PURE__ */ l.jsx("div", { className: "dd-nb", children: /* @__PURE__ */ l.jsxs("div", { className: "dd-ports", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "dd-port", "data-chosen": a.chosen || void 0, "data-target": "port-true", children: [
            /* @__PURE__ */ l.jsx("i", { className: "dd-hl dd-dyn" }),
            /* @__PURE__ */ l.jsx("span", { children: "IF" }),
            /* @__PURE__ */ l.jsx("span", { children: "confidence ≥ 0.80" })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "dd-port", "data-passed": a.chosen || void 0, "data-target": "port-false", children: [
            /* @__PURE__ */ l.jsx("span", { children: "ELSE" }),
            /* @__PURE__ */ l.jsx("span", { children: "to a planner" })
          ] })
        ] }) }), R = /* @__PURE__ */ l.jsx("div", { className: "dd-nb", children: /* @__PURE__ */ l.jsxs("div", { className: "dd-dec", "data-on": a.card || void 0, children: [
          /* @__PURE__ */ l.jsx("small", { children: "INVENTORY · HIGH CONFIDENCE" }),
          /* @__PURE__ */ l.jsx("strong", { children: "Reorder top-selling SKUs, east warehouse" }),
          /* @__PURE__ */ l.jsx("p", { children: "4 days of cover against a 6-day lead time." }),
          /* @__PURE__ */ l.jsxs("div", { className: "dd-conf dd-dyn", children: [
            /* @__PURE__ */ l.jsx("span", { children: "Confidence" }),
            /* @__PURE__ */ l.jsx("b", { children: /* @__PURE__ */ l.jsx($t, { value: a.cv, format: (G) => G.toFixed(2), duration: 900 }) }),
            /* @__PURE__ */ l.jsxs("div", { className: "dd-conf__bar", children: [
              /* @__PURE__ */ l.jsx(Xd, { value: a.cv }),
              /* @__PURE__ */ l.jsx("i", { className: "dd-conf__tick" })
            ] })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "dd-btns", children: [
            /* @__PURE__ */ l.jsx("span", { className: "yes", "data-target": "approve", children: "Approve" }),
            /* @__PURE__ */ l.jsx("span", { className: "no", children: "Review" })
          ] })
        ] }) }), V = (G, D, je, me, pe, he = "") => /* @__PURE__ */ l.jsxs("div", { className: `dd-node dd-n-${G}${he}`, "data-st": je, "data-hid": x(D), "data-target": `n-${G}`, children: [
          me,
          p ? pe : /* @__PURE__ */ l.jsx(h0, { open: je === "run" || G === "dec", children: pe })
        ] }, G), W = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          V("src", 0, a.src, /* @__PURE__ */ l.jsx(jr, { tile: "#155eef", icon: /* @__PURE__ */ l.jsx(kd, { ...v }), title: "Sources", st: a.src, time: "0.2s", big: !p }), C),
          V("clean", 1, a.clean, /* @__PURE__ */ l.jsx(jr, { tile: "#2e90fa", icon: /* @__PURE__ */ l.jsx(zd, { ...v }), title: "Clean & validate", st: a.clean, time: "0.6s", big: !p }), N),
          V("llm", 2, a.llm, /* @__PURE__ */ l.jsx(jr, { tile: "#6172f3", icon: /* @__PURE__ */ l.jsx(f1, { ...v }), title: "Demand signals", st: a.llm, time: "1.1s", big: !p }), E),
          V("gate", 3, a.gate, /* @__PURE__ */ l.jsx(jr, { tile: "#06aed4", icon: /* @__PURE__ */ l.jsx(Hd, { ...v }), title: "IF/ELSE", st: a.gate, time: "0.1s", big: !p }), I),
          V("dec", 4, a.dec, /* @__PURE__ */ l.jsx(jr, { tile: "#f79009", icon: /* @__PURE__ */ l.jsx(Pn, { ...v }), title: "Decision", st: a.dec, time: "0.4s", big: !p }), R, " dd-out")
        ] }), K = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsxs("span", { className: "dd-crumb", children: [
            /* @__PURE__ */ l.jsx(Qd, { size: 15, strokeWidth: 2 }),
            /* @__PURE__ */ l.jsx("span", { children: "Ops copilot" }),
            /* @__PURE__ */ l.jsx("small", { children: "/ Weekly replenishment" })
          ] }),
          p && /* @__PURE__ */ l.jsxs("span", { className: "dd-tabs", children: [
            /* @__PURE__ */ l.jsx("span", { "data-on": !0, children: "Orchestrate" }),
            /* @__PURE__ */ l.jsx("span", { children: "Logs" }),
            /* @__PURE__ */ l.jsx("span", { children: "Monitoring" })
          ] })
        ] }), P = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsxs("span", { className: "dd-run", children: [
            /* @__PURE__ */ l.jsx("i", {}),
            /* @__PURE__ */ l.jsx(Fi, { value: a.label, states: { Ready: "Ready", "Running…": "Running…", "Ran in 2.4s": "Ran in 2.4s" }, align: "start" })
          ] }),
          p && /* @__PURE__ */ l.jsx("span", { className: "dd-pub", children: "Publish" })
        ] });
        if (!p)
          return /* @__PURE__ */ l.jsxs(Ar, { width: 326, dark: !0, wallpaper: "#1f2025", className: "dd-phone", children: [
            /* @__PURE__ */ l.jsxs("div", { className: "dd-appbar", children: [
              K,
              P
            ] }),
            /* @__PURE__ */ l.jsx("div", { className: "dd-canvas dd-canvas--c", children: W })
          ] });
        const U = (G) => c(`n-${G}`), Z = (G) => ({ x: U(G).x + U(G).width, y: U(G).y + 22 }), O = (G) => ({ x: U(G).x, y: U(G).y + 22 }), re = (G) => ({ x: U(G).x + U(G).width / 2, y: U(G).y + U(G).height }), fe = (G) => ({ x: U(G).x + U(G).width / 2, y: U(G).y }), F = (G) => ({ x: U("gate").x + U("gate").width, y: c(G).y + c(G).height / 2 }), Q = { route: "curve", dots: "none", dashed: !0, show: !0, className: "dd-base" }, le = { route: "curve", className: "dd-e" };
        return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsxs(Gc, { className: "dd-win", lead: K, toolbar: P, body: { className: "dd-canvas" }, children: [
            W,
            /* @__PURE__ */ l.jsxs("div", { className: "dd-node dd-n-rev", "data-st": a.rev, "data-hid": x(4), "data-target": "n-rev", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "dd-nh", children: [
                /* @__PURE__ */ l.jsx("span", { className: "dd-ico", style: { background: "#667085" }, children: /* @__PURE__ */ l.jsx(Ul, { ...v }) }),
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
          /* @__PURE__ */ l.jsx(G0, { ...Q, from: Z("src"), to: O("clean") }),
          /* @__PURE__ */ l.jsx(G0, { ...Q, route: "straight", from: re("clean"), to: fe("llm") }),
          /* @__PURE__ */ l.jsx(G0, { ...Q, from: Z("llm"), to: O("gate") }),
          /* @__PURE__ */ l.jsx(G0, { ...Q, from: F("port-false"), to: O("rev") }),
          /* @__PURE__ */ l.jsx(G0, { ...le, from: Z("src"), to: O("clean"), show: a.e1 }),
          /* @__PURE__ */ l.jsx(G0, { ...le, route: "straight", from: re("clean"), to: fe("llm"), show: a.e2 }),
          /* @__PURE__ */ l.jsx(G0, { ...le, from: Z("llm"), to: O("gate"), show: a.e3 }),
          /* @__PURE__ */ l.jsx(G0, { ...le, className: "dd-e dd-e--lime", from: F("port-true"), to: O("dec"), show: a.e4 })
        ] });
      }
    }
  );
}
const Cf = "data:image/webp;base64,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", Ef = "data:image/webp;base64,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", Af = "data:image/webp;base64,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", Mf = "data:image/webp;base64,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", Lf = { open: !1, words: 0, btn: "plan", sat: !1, link: !1 }, zf = { open: !0, words: 99, btn: "sent", sat: !0, link: !0 }, w1 = "Aulia turns 30 on Saturday. Birthday brunch, 11:00–13:00?", Rf = w1.split(" ").length;
async function _f(a) {
  await a.wait(1100), a.mark("plan"), await a.click({ at: "btn", x: 0.9, y: 0.5 }), a.put({ open: !0, btn: "send" }), await a.wait(700);
  for (let c = 1; c <= Rf; c++)
    await a.wait(110), a.put({ words: c });
  await a.wait(900), a.mark("send"), await a.click({ at: "btn", x: 0.9, y: 0.5 }), a.put({ btn: "sending" }), await a.wait(900), a.mark("sent"), a.put({ btn: "sent" }), await a.wait(300), a.put({ sat: !0 }), await a.wait(900), a.put({ link: !0 }), await a.wait(2800), a.mark("exit"), a.put({ link: !1 }), await a.wait(250), a.put({ sat: !1 }), await a.wait(350), a.put({ open: !1, btn: "plan" }), await a.wait(900), await a.snap({ words: 0 }), await a.move(a.layout === "wide" ? Ii.wide : Ii.compact), await a.wait(300);
}
const Pf = [
  { name: "Aulia", line: "turns 30", src: Cf },
  { name: "Laurens", line: "free 11:00–13:00", src: Ef },
  { name: "Putri", line: "free all day", src: Af }
], Nr = { strokeWidth: 2 }, Ii = { wide: { x: 500, y: 560 }, compact: { x: 342, y: 330 } };
function Tf() {
  return /* @__PURE__ */ l.jsx(
    Er,
    {
      width: 560,
      height: 790,
      compact: { below: 540, width: 358, height: 570 },
      initial: Lf,
      poster: zf,
      script: _f,
      play: "loop",
      cursor: { style: "touch", at: Ii },
      theme: "dark",
      className: "cr",
      children: (a, c, u) => {
        const p = u === "wide", v = c("btn"), x = c("sat");
        return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(Ar, { width: p ? 360 : 326, className: "cr-phone", children: /* @__PURE__ */ l.jsxs("div", { className: "cr-app", children: [
            /* @__PURE__ */ l.jsxs("header", { className: "cr-head", children: [
              /* @__PURE__ */ l.jsxs("span", { className: "cr-bell", children: [
                /* @__PURE__ */ l.jsx(l1, { size: 21, ...Nr }),
                /* @__PURE__ */ l.jsx("i", {})
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "cr-month", children: "October 2026" }),
              /* @__PURE__ */ l.jsx(Rn, { size: 34, src: Mf, name: "Denny" })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "cr-seg", children: [
              /* @__PURE__ */ l.jsx("span", { "data-on": !0, children: "Day" }),
              /* @__PURE__ */ l.jsx("span", { children: "Week" }),
              /* @__PURE__ */ l.jsx("span", { children: "Month" })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "cr-date", children: [
              /* @__PURE__ */ l.jsx("b", { children: "Wed, Oct 7" }),
              /* @__PURE__ */ l.jsx("span", { children: "· 2026" }),
              /* @__PURE__ */ l.jsx("i", { children: "TODAY" })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "cr-aura", "data-aura": a.btn === "sent" ? "rest" : "on", children: [
              /* @__PURE__ */ l.jsx("span", { className: "cr-aura__halo", "aria-hidden": !0, children: /* @__PURE__ */ l.jsx("i", {}) }),
              /* @__PURE__ */ l.jsxs("div", { className: "cr-card", "data-target": "card", "data-open": a.open || void 0, children: [
                /* @__PURE__ */ l.jsxs("div", { className: "cr-eyebrow", children: [
                  /* @__PURE__ */ l.jsx(Bd, { size: 18, ...Nr }),
                  /* @__PURE__ */ l.jsx("span", { children: "SATURDAY" }),
                  /* @__PURE__ */ l.jsx("em", { children: /* @__PURE__ */ l.jsx(p1, { size: 16, strokeWidth: 2.2 }) })
                ] }),
                /* @__PURE__ */ l.jsx("div", { className: "cr-title", children: "Aulia turns 30 on Saturday, and the crew looks free. Birthday brunch?" }),
                /* @__PURE__ */ l.jsx("div", { className: "cr-chips", children: Pf.map((C) => /* @__PURE__ */ l.jsxs("span", { className: "cr-chip", children: [
                  /* @__PURE__ */ l.jsx(Rn, { size: 34, src: C.src, name: C.name }),
                  /* @__PURE__ */ l.jsxs("span", { children: [
                    /* @__PURE__ */ l.jsx("b", { children: C.name }),
                    /* @__PURE__ */ l.jsx("small", { children: C.line })
                  ] })
                ] }, C.name)) }),
                /* @__PURE__ */ l.jsx(h0, { open: a.open, children: /* @__PURE__ */ l.jsxs("div", { className: "cr-plan", children: [
                  /* @__PURE__ */ l.jsxs("div", { className: "cr-when", children: [
                    /* @__PURE__ */ l.jsx("small", { children: "When" }),
                    /* @__PURE__ */ l.jsx("b", { children: "Sat 11:00–13:00" })
                  ] }),
                  /* @__PURE__ */ l.jsxs("div", { className: "cr-msg", children: [
                    /* @__PURE__ */ l.jsx("small", { children: "Message" }),
                    /* @__PURE__ */ l.jsx("p", { children: /* @__PURE__ */ l.jsx(t1, { text: w1, count: a.words }) })
                  ] })
                ] }) }),
                /* @__PURE__ */ l.jsx("div", { className: "cr-btn", "data-state": a.btn, "data-target": "btn", children: /* @__PURE__ */ l.jsx(
                  Fi,
                  {
                    value: a.btn,
                    states: {
                      plan: /* @__PURE__ */ l.jsxs("span", { className: "cr-btn__l", children: [
                        /* @__PURE__ */ l.jsx(r1, { size: 18, ...Nr }),
                        "Plan brunch with Aulia, Laurens and Putri"
                      ] }),
                      send: /* @__PURE__ */ l.jsxs("span", { className: "cr-btn__l", style: { width: 126, justifyContent: "center" }, children: [
                        /* @__PURE__ */ l.jsx(Vi, { size: 18, ...Nr }),
                        "Send invite"
                      ] }),
                      sending: /* @__PURE__ */ l.jsxs("span", { className: "cr-btn__l", style: { width: 126, justifyContent: "center" }, children: [
                        /* @__PURE__ */ l.jsx(Gd, { size: 18 }),
                        "Sending"
                      ] }),
                      sent: /* @__PURE__ */ l.jsxs("span", { className: "cr-btn__l", style: { width: 126, justifyContent: "center" }, children: [
                        /* @__PURE__ */ l.jsx(Pn, { size: 18, strokeWidth: 2.6 }),
                        "Invite sent"
                      ] })
                    }
                  }
                ) })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "cr-aura__ring", "aria-hidden": !0 })
            ] }),
            /* @__PURE__ */ l.jsx("div", { className: "cr-hours", children: ["00.00", "01.00", "02.00", "03.00", "04.00", "05.00"].map((C) => /* @__PURE__ */ l.jsxs("div", { children: [
              /* @__PURE__ */ l.jsx("span", { children: C }),
              /* @__PURE__ */ l.jsx("i", {})
            ] }, C)) })
          ] }) }),
          /* @__PURE__ */ l.jsx("div", { className: "cr-sat-slot", style: p ? { top: Math.max(0, v.y + v.height / 2 - 118) } : void 0, children: /* @__PURE__ */ l.jsx(h0, { open: a.sat, reveal: "drop", children: /* @__PURE__ */ l.jsxs("div", { className: "cr-sat", "data-target": "sat", children: [
            /* @__PURE__ */ l.jsxs("div", { className: "cr-sat__top", children: [
              /* @__PURE__ */ l.jsx("span", { className: "cr-sat__tick", children: /* @__PURE__ */ l.jsx(Pn, { size: 16, strokeWidth: 3 }) }),
              /* @__PURE__ */ l.jsx("b", { children: "Invite sent" }),
              /* @__PURE__ */ l.jsx("small", { children: "in under 120 seconds" })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "cr-sat__row", children: [
              /* @__PURE__ */ l.jsx(vd, { size: 16, ...Nr }),
              "Plan on the calendar"
            ] })
          ] }) }) }),
          p ? /* @__PURE__ */ l.jsx(G0, { route: "curve", from: { x: v.x + v.width, y: v.y + v.height / 2 }, to: { x: x.x, y: x.y + 30 }, show: a.link }) : /* @__PURE__ */ l.jsx(G0, { route: "straight", from: { x: v.x + v.width / 2, y: v.y + v.height }, to: { x: x.x + x.width / 2, y: x.y }, show: a.link })
        ] });
      }
    }
  );
}
const If = {
  "linkaja-routing": Yd,
  "linkaja-home": df,
  "komunal-shipped-flow": yf,
  "ai-decision-desk": Sf,
  "ai-chrona": Tf
};
function Of(a) {
  const c = If[a.dataset.ss ?? ""];
  !c || a.dataset.ssOn || (a.dataset.ssOn = "1", mc.createRoot(a).render(/* @__PURE__ */ l.jsx(c, {})), a.classList.add("ss-ready"));
}
export {
  Of as mount
};
