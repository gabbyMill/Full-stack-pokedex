(() => {
  var t = {
      264: (t, e, n) => {
        t.exports = n(588);
      },
      588: t => {
        var e = (function (t) {
          "use strict";
          var e,
            n = Object.prototype,
            r = n.hasOwnProperty,
            o = "function" == typeof Symbol ? Symbol : {},
            a = o.iterator || "@@iterator",
            i = o.asyncIterator || "@@asyncIterator",
            c = o.toStringTag || "@@toStringTag";
          function u(t, e, n) {
            return (
              Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            u({}, "");
          } catch (t) {
            u = function (t, e, n) {
              return (t[e] = n);
            };
          }
          function s(t, e, n, r) {
            var o = e && e.prototype instanceof v ? e : v,
              a = Object.create(o.prototype),
              i = new q(r || []);
            return (
              (a._invoke = (function (t, e, n) {
                var r = p;
                return function (o, a) {
                  if (r === h) throw new Error("Generator is already running");
                  if (r === d) {
                    if ("throw" === o) throw a;
                    return O();
                  }
                  for (n.method = o, n.arg = a; ; ) {
                    var i = n.delegate;
                    if (i) {
                      var c = S(i, n);
                      if (c) {
                        if (c === y) continue;
                        return c;
                      }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg;
                    else if ("throw" === n.method) {
                      if (r === p) throw ((r = d), n.arg);
                      n.dispatchException(n.arg);
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    r = h;
                    var u = l(t, e, n);
                    if ("normal" === u.type) {
                      if (((r = n.done ? d : f), u.arg === y)) continue;
                      return { value: u.arg, done: n.done };
                    }
                    "throw" === u.type &&
                      ((r = d), (n.method = "throw"), (n.arg = u.arg));
                  }
                };
              })(t, n, i)),
              a
            );
          }
          function l(t, e, n) {
            try {
              return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          t.wrap = s;
          var p = "suspendedStart",
            f = "suspendedYield",
            h = "executing",
            d = "completed",
            y = {};
          function v() {}
          function m() {}
          function g() {}
          var x = {};
          u(x, a, function () {
            return this;
          });
          var w = Object.getPrototypeOf,
            b = w && w(w(_([])));
          b && b !== n && r.call(b, a) && (x = b);
          var L = (g.prototype = v.prototype = Object.create(x));
          function k(t) {
            ["next", "throw", "return"].forEach(function (e) {
              u(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function E(t, e) {
            function n(o, a, i, c) {
              var u = l(t[o], t, a);
              if ("throw" !== u.type) {
                var s = u.arg,
                  p = s.value;
                return p && "object" == typeof p && r.call(p, "__await")
                  ? e.resolve(p.__await).then(
                      function (t) {
                        n("next", t, i, c);
                      },
                      function (t) {
                        n("throw", t, i, c);
                      }
                    )
                  : e.resolve(p).then(
                      function (t) {
                        (s.value = t), i(s);
                      },
                      function (t) {
                        return n("throw", t, i, c);
                      }
                    );
              }
              c(u.arg);
            }
            var o;
            this._invoke = function (t, r) {
              function a() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (o = o ? o.then(a, a) : a());
            };
          }
          function S(t, n) {
            var r = t.iterator[n.method];
            if (r === e) {
              if (((n.delegate = null), "throw" === n.method)) {
                if (
                  t.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = e),
                  S(t, n),
                  "throw" === n.method)
                )
                  return y;
                (n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return y;
            }
            var o = l(r, t.iterator, n.arg);
            if ("throw" === o.type)
              return (
                (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), y
              );
            var a = o.arg;
            return a
              ? a.done
                ? ((n[t.resultName] = a.value),
                  (n.next = t.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                  (n.delegate = null),
                  y)
                : a
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                y);
          }
          function j(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function C(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function q(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(j, this),
              this.reset(!0);
          }
          function _(t) {
            if (t) {
              var n = t[a];
              if (n) return n.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var o = -1,
                  i = function n() {
                    for (; ++o < t.length; )
                      if (r.call(t, o))
                        return (n.value = t[o]), (n.done = !1), n;
                    return (n.value = e), (n.done = !0), n;
                  };
                return (i.next = i);
              }
            }
            return { next: O };
          }
          function O() {
            return { value: e, done: !0 };
          }
          return (
            (m.prototype = g),
            u(L, "constructor", g),
            u(g, "constructor", m),
            (m.displayName = u(g, c, "GeneratorFunction")),
            (t.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === m || "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (t.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, g)
                  : ((t.__proto__ = g), u(t, c, "GeneratorFunction")),
                (t.prototype = Object.create(L)),
                t
              );
            }),
            (t.awrap = function (t) {
              return { __await: t };
            }),
            k(E.prototype),
            u(E.prototype, i, function () {
              return this;
            }),
            (t.AsyncIterator = E),
            (t.async = function (e, n, r, o, a) {
              void 0 === a && (a = Promise);
              var i = new E(s(e, n, r, o), a);
              return t.isGeneratorFunction(n)
                ? i
                : i.next().then(function (t) {
                    return t.done ? t.value : i.next();
                  });
            }),
            k(L),
            u(L, c, "Generator"),
            u(L, a, function () {
              return this;
            }),
            u(L, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (t) {
              var e = [];
              for (var n in t) e.push(n);
              return (
                e.reverse(),
                function n() {
                  for (; e.length; ) {
                    var r = e.pop();
                    if (r in t) return (n.value = r), (n.done = !1), n;
                  }
                  return (n.done = !0), n;
                }
              );
            }),
            (t.values = _),
            (q.prototype = {
              constructor: q,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = e),
                  this.tryEntries.forEach(C),
                  !t)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      r.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = e);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var n = this;
                function o(r, o) {
                  return (
                    (c.type = "throw"),
                    (c.arg = t),
                    (n.next = r),
                    o && ((n.method = "next"), (n.arg = e)),
                    !!o
                  );
                }
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                  var i = this.tryEntries[a],
                    c = i.completion;
                  if ("root" === i.tryLoc) return o("end");
                  if (i.tryLoc <= this.prev) {
                    var u = r.call(i, "catchLoc"),
                      s = r.call(i, "finallyLoc");
                    if (u && s) {
                      if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                    } else if (u) {
                      if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    } else {
                      if (!s)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var o = this.tryEntries[n];
                  if (
                    o.tryLoc <= this.prev &&
                    r.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var a = o;
                    break;
                  }
                }
                a &&
                  ("break" === t || "continue" === t) &&
                  a.tryLoc <= e &&
                  e <= a.finallyLoc &&
                  (a = null);
                var i = a ? a.completion : {};
                return (
                  (i.type = t),
                  (i.arg = e),
                  a
                    ? ((this.method = "next"), (this.next = a.finallyLoc), y)
                    : this.complete(i)
                );
              },
              complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.finallyLoc === t)
                    return this.complete(n.completion, n.afterLoc), C(n), y;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.tryLoc === t) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var o = r.arg;
                      C(n);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, n, r) {
                return (
                  (this.delegate = {
                    iterator: _(t),
                    resultName: n,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = e),
                  y
                );
              },
            }),
            t
          );
        })(t.exports);
        try {
          regeneratorRuntime = e;
        } catch (t) {
          "object" == typeof globalThis
            ? (globalThis.regeneratorRuntime = e)
            : Function("r", "regeneratorRuntime = r")(e);
        }
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var a = (e[r] = { exports: {} });
    return t[r](a, a.exports, n), a.exports;
  }
  (n.n = t => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      "use strict";
      function t(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function e(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return t(e);
          })(e) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(e) ||
          (function (e, n) {
            if (e) {
              if ("string" == typeof e) return t(e, n);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(e)
                  : "Arguments" === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? t(e, n)
                  : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function r(t, e, n, r, o, a, i) {
        try {
          var c = t[a](i),
            u = c.value;
        } catch (t) {
          return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function o(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (o, a) {
            var i = t.apply(e, n);
            function c(t) {
              r(i, o, a, c, u, "next", t);
            }
            function u(t) {
              r(i, o, a, c, u, "throw", t);
            }
            c(void 0);
          });
        };
      }
      var a = n(264),
        i = n.n(a),
        c = document.querySelector(".welcome"),
        u =
          (document.querySelector(".btn1"),
          document.querySelector(".btn2"),
          document.querySelector(".btn3")),
        s = [document.querySelector(".btn1"), document.querySelector(".btn2")],
        l = [
          document.querySelector(".dropdown-menu1"),
          document.querySelector(".dropdown-menu2"),
          document.querySelector(".dropdown-menu3"),
        ],
        p = document.querySelector(".display"),
        f = document.querySelector(".search-bar"),
        h = document.querySelector(".username");
      document
        .querySelector(".search-button")
        .addEventListener("click", function () {
          d(f.value, h.value);
        }),
        f.addEventListener("keydown", function (t) {
          "Enter" === t.key && d(f.value, h.value);
        }),
        h.addEventListener("keydown", function (t) {
          "Enter" === t.key && d(f.value, h.value);
        });
      var d = (function () {
        var t = o(
          i().mark(function t(n, r, o) {
            var a, u, s, f, d, y, v, g, x, L, k, E, S;
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (a = document.querySelector(".catch")) &&
                          e(a.classList).includes("caught") &&
                          a.classList.remove("caught"),
                        c.classList.remove("alert"),
                        (c.textContent = "Good to see you ".concat(
                          r,
                          "\nEnjoy the Pokédex"
                        )),
                        (u = +n ? n : n.toLowerCase()),
                        (t.next = 8),
                        axios.get(
                          "https://infinite-wildwood-48742.herokuapp.com/pokemon/get/".concat(
                            u
                          ),
                          {
                            headers: {
                              "Content-Type": "application/json",
                              username: r,
                            },
                          }
                        )
                      );
                    case 8:
                      if (
                        ((s = t.sent),
                        e(l[2].classList).includes("displaying") ||
                          b(s.data.id, h.value),
                        (f = s.data),
                        (d = f.name),
                        (y = f.height),
                        (v = f.weight),
                        (g = f.types),
                        f.back_pic,
                        (x = f.front_pic),
                        !(g.length < 2))
                      ) {
                        t.next = 17;
                        break;
                      }
                      return (t.next = 14), w(g[0].name);
                    case 14:
                      (L = t.sent), (t.next = 20);
                      break;
                    case 17:
                      return (t.next = 19), w(g[0].name, g[1].name);
                    case 19:
                      L = t.sent;
                    case 20:
                      for (
                        document.querySelector(".catch") ||
                          document
                            .querySelector(".buttons")
                            .append(
                              m("catch", "button", [s.data, r]),
                              m("release", "button", [s.data, r])
                            ),
                          p.append(
                            m(d, "div", s.data),
                            m(y, "div", s.data),
                            m(v, "div", s.data),
                            m(x, "img", s.data),
                            m(g, "div", L)
                          ),
                          k = document.querySelector(".dropdown-menu3"),
                          E = k.children,
                          S = 0;
                        S < E.length;
                        S++
                      )
                        E[S].textContent === d && console.log("equals to n");
                      t.next = 33;
                      break;
                    case 27:
                      (t.prev = 27),
                        (t.t0 = t.catch(0)),
                        (p.textContent = ""),
                        console.log(t.t0),
                        c.classList.add("alert"),
                        (c.textContent =
                          "Wrong pokemon name/number \nTry again");
                    case 33:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[0, 27]]
            );
          })
        );
        return function (e, n, r) {
          return t.apply(this, arguments);
        };
      })();
      function y(t, e, n) {
        return v.apply(this, arguments);
      }
      function v() {
        return (v = o(
          i().mark(function t(n, r, o) {
            var a;
            return i().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (!e(n.target.classList).includes("catch")) {
                      t.next = 11;
                      break;
                    }
                    return (
                      n.target.classList.add("caught"),
                      (t.next = 4),
                      axios.get(
                        "https://infinite-wildwood-48742.herokuapp.com/pokemon/get/".concat(
                          f.value
                        ),
                        {
                          headers: {
                            "Content-Type": "application/json",
                            username: h.value,
                          },
                        }
                      )
                    );
                  case 4:
                    return (
                      (a = t.sent),
                      (t.next = 7),
                      axios.put(
                        "https://infinite-wildwood-48742.herokuapp.com/pokemon/catch/".concat(
                          "" + f.value
                        ),
                        { pokemon: { pokemonName: a.data.name } },
                        {
                          headers: {
                            "Content-Type": "application/json",
                            username: h.value,
                          },
                        }
                      )
                    );
                  case 7:
                    t.sent, b(r, h.value), (t.next = 15);
                    break;
                  case 11:
                    return (
                      document
                        .querySelector(".catch")
                        .classList.remove("caught"),
                      (t.next = 14),
                      axios.delete(
                        "https://infinite-wildwood-48742.herokuapp.com/pokemon/release/".concat(
                          "" + r
                        ),
                        {
                          headers: {
                            "Content-Type": "application/json",
                            username: o,
                          },
                        }
                      )
                    );
                  case 14:
                    t.sent;
                  case 15:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function m(t, n, r) {
        var a;
        for (var c in ((p.textContent = ""), r))
          r[c] === t && (a = c[0].toUpperCase() + c.slice(1));
        var f = document.createElement(n);
        return (
          s.forEach(function (t) {
            e(t.classList).includes("d-none") || t.classList.toggle("d-none");
          }),
          a || "string" == typeof t
            ? a
              ? "img" === n
                ? ((f.src = t),
                  (f.alt = r.back_pic),
                  f.addEventListener("mouseover", g),
                  f.addEventListener("mouseleave", g))
                : ("Name" === a
                    ? (f.classList.add("name"),
                      (f.textContent = t[0].toUpperCase() + t.slice(1)))
                    : (f.textContent = "".concat(a, ": ").concat(t)),
                  f.classList.add("info"))
              : ((f.textContent = t),
                f.classList.add("info", t),
                f.addEventListener(
                  "click",
                  (function () {
                    var t = o(
                      i().mark(function t(e) {
                        return i().wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                y(e, r[0].id, r[1]);
                              case 1:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })()
                ),
                document.querySelector(".buttons").append(f))
            : (u.classList.remove("d-none"),
              (u.textContent = "Caught"),
              (a = "Types"),
              t.forEach(function (t, e) {
                if (
                  (s[e].classList.remove("d-none"),
                  (s[e].textContent = t.name),
                  "string" == typeof r[0])
                )
                  r.forEach(function (t) {
                    l[e].append(x(t));
                  });
                else
                  for (
                    var n = function (t) {
                        r[t].forEach(function (e) {
                          l[t].append(x(e));
                        });
                      },
                      o = 0;
                    o < r.length;
                    o++
                  )
                    n(o);
              })),
          f
        );
      }
      var g = function (t) {
          var e = t.target.src,
            n = t.target.alt;
          t.target.setAttribute("src", n), t.target.setAttribute("alt", e);
        },
        x = function (t) {
          var e = document.createElement("a");
          return (
            e.setAttribute("class", "dropdown-item"),
            e.setAttribute("href", "#"),
            (e.textContent = t),
            e
          );
        },
        w = (function () {
          var t = o(
            i().mark(function t(e, n) {
              var r, o, a, c, u, s;
              return i().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        axios.get(
                          "https://pokeapi.co/api/v2/type/".concat(
                            document.querySelector(".search-bar").value
                          )
                        )
                        // name
                      );
                    case 2:
                      if (
                        ((o = t.sent),
                        (a = o.data.pokemon),
                        (c = a.map(function (t) {
                          return t.pokemon.name;
                        })),
                        n)
                      ) {
                        t.next = 9;
                        break;
                      }
                      return t.abrupt("return", c);
                    case 9:
                      return (
                        (t.next = 11),
                        axios.get("https://pokeapi.co/api/v2/type/".concat(n))
                        // type ?
                      );
                    case 11:
                      return (
                        (r = t.sent),
                        (u = r.data.pokemon),
                        (s = u.map(function (t) {
                          return t.pokemon.name;
                        })),
                        t.abrupt("return", [c, s])
                      );
                    case 15:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e, n) {
            return t.apply(this, arguments);
          };
        })();
      function b(t, e) {
        return L.apply(this, arguments);
      }
      function L() {
        return (L = o(
          i().mark(function t(n, r) {
            var o, a, c, u;
            return i().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      e(l[2].classList).includes("displaying")
                        ? l[2].classList.add("displaying")
                        : (l[2].textContent = ""),
                      (t.next = 3),
                      axios.get(
                        "https://infinite-wildwood-48742.herokuapp.com/pokemon/",
                        {
                          headers: {
                            "Content-Type": "application/json",
                            username: r,
                          },
                        }
                      )
                    );
                  case 3:
                    (o = t.sent), (a = []), (c = 0);
                  case 6:
                    if (!(c < o.data.length)) {
                      t.next = 14;
                      break;
                    }
                    return (
                      (t.next = 9),
                      axios.get(
                        "https://infinite-wildwood-48742.herokuapp.com/pokemon/get/".concat(
                          o.data[c]
                        ),
                        {
                          headers: {
                            "Content-Type": "application/json",
                            username: r,
                          },
                        }
                      )
                    );
                  case 9:
                    (u = t.sent), a.push(u.data.name);
                  case 11:
                    c++, (t.next = 6);
                    break;
                  case 14:
                    return (
                      a.forEach(function (t) {
                        l[2].append(x(t));
                      }),
                      t.abrupt("return")
                    );
                  case 16:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      l.forEach(function (t) {
        t.addEventListener("click", function (t) {
          d(t.target.textContent);
        });
      });
    })();
})();
