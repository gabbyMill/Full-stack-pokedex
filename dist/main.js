var p = (function () {
  var t = r(
    regeneratorRuntime.mark(function t(n, r, o) {
      var c, i, p, d, m, h, v, x, b, k, w, L, C;
      return regeneratorRuntime.wrap(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (t.prev = 0),
                  (c = document.querySelector(".catch")) &&
                    e(c.classList).includes("caught") &&
                    c.classList.remove("caught"),
                  a.classList.remove("alert"),
                  (a.textContent = "Good to see you ".concat(
                    r,
                    "\nEnjoy the Pokédex"
                  )),
                  (i = +n ? n : n.toLowerCase()),
                  (t.next = 8),
                  axios.get(
                    "https://infinite-wildwood-48742.herokuapp.com/pokemon/get/".concat(
                      i
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
                  ((p = t.sent),
                  e(s[2].classList).includes("displaying") ||
                    g(p.data.id, l.value),
                  (d = p.data),
                  (m = d.name),
                  (h = d.height),
                  (v = d.weight),
                  (x = d.types),
                  d.back_pic,
                  (b = d.front_pic),
                  !(x.length < 2))
                ) {
                  t.next = 17;
                  break;
                }
                return (t.next = 14), y(x[0].name);
              case 14:
                (k = t.sent), (t.next = 20);
                break;
              case 17:
                return (t.next = 19), y(x[0].name, x[1].name);
              case 19:
                k = t.sent;
              case 20:
                for (
                  document.querySelector(".catch") ||
                    document
                      .querySelector(".buttons")
                      .append(
                        f("catch", "button", [p.data, r]),
                        f("release", "button", [p.data, r])
                      ),
                    u.append(
                      f(m, "div", p.data),
                      f(h, "div", p.data),
                      f(v, "div", p.data),
                      f(b, "img", p.data),
                      f(x, "div", k)
                    ),
                    w = document.querySelector(".dropdown-menu3"),
                    L = w.children,
                    C = 0;
                  C < L.length;
                  C++
                )
                  L[C].textContent === m && console.log("equals to n");
                t.next = 33;
                break;
              case 27:
                (t.prev = 27),
                  (t.t0 = t.catch(0)),
                  (u.textContent = ""),
                  console.log(t.t0),
                  a.classList.add("alert"),
                  (a.textContent = "Wrong pokemon name/number \nTry again");
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
(() => {
  function e(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return t(e);
      })(e) ||
      (function (e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
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
  function t(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function n(e, t, n, r, a, o, c) {
    try {
      var s = e[o](c),
        u = s.value;
    } catch (e) {
      return void n(e);
    }
    s.done ? t(u) : Promise.resolve(u).then(r, a);
  }
  function r(e) {
    return function () {
      var t = this,
        r = arguments;
      return new Promise(function (a, o) {
        var c = e.apply(t, r);
        function s(e) {
          n(c, a, o, s, u, "next", e);
        }
        function u(e) {
          n(c, a, o, s, u, "throw", e);
        }
        s(void 0);
      });
    };
  }
  var a = document.querySelector(".welcome"),
    o =
      (document.querySelector(".btn1"),
      document.querySelector(".btn2"),
      document.querySelector(".btn3")),
    c = [document.querySelector(".btn1"), document.querySelector(".btn2")],
    s = [
      document.querySelector(".dropdown-menu1"),
      document.querySelector(".dropdown-menu2"),
      document.querySelector(".dropdown-menu3"),
    ],
    u = document.querySelector(".display"),
    i = document.querySelector(".search-bar"),
    l = document.querySelector(".username");
  document
    .querySelector(".search-button")
    .addEventListener("click", function () {
      p(i.value, l.value);
    }),
    i.addEventListener("keydown", function (e) {
      "Enter" === e.key && p(i.value, l.value);
    }),
    l.addEventListener("keydown", function (e) {
      "Enter" === e.key && p(i.value, l.value);
    });
  function d(e, t, n) {
    return m.apply(this, arguments);
  }
  function m() {
    return (m = r(
      regeneratorRuntime.mark(function t(n, r, a) {
        var o;
        return regeneratorRuntime.wrap(function (t) {
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
                      i.value
                    ),
                    {
                      headers: {
                        "Content-Type": "application/json",
                        username: l.value,
                      },
                    }
                  )
                );
              case 4:
                return (
                  (o = t.sent),
                  (t.next = 7),
                  axios.put(
                    "https://infinite-wildwood-48742.herokuapp.com/pokemon/catch/".concat(
                      "" + i.value
                    ),
                    { pokemon: { pokemonName: o.data.name } },
                    {
                      headers: {
                        "Content-Type": "application/json",
                        username: l.value,
                      },
                    }
                  )
                );
              case 7:
                t.sent, g(r, l.value), (t.next = 15);
                break;
              case 11:
                return (
                  document.querySelector(".catch").classList.remove("caught"),
                  (t.next = 14),
                  axios.delete(
                    "https://infinite-wildwood-48742.herokuapp.com/pokemon/release/".concat(
                      "" + r
                    ),
                    {
                      headers: {
                        "Content-Type": "application/json",
                        username: a,
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
  function f(t, n, a) {
    var i;
    for (var l in ((u.textContent = ""), a))
      a[l] === t && (i = l[0].toUpperCase() + l.slice(1));
    var p = document.createElement(n);
    return (
      c.forEach(function (t) {
        e(t.classList).includes("d-none") || t.classList.toggle("d-none");
      }),
      i || "string" == typeof t
        ? i
          ? "img" === n
            ? ((p.src = t),
              (p.alt = a.back_pic),
              p.addEventListener("mouseover", h),
              p.addEventListener("mouseleave", h))
            : ("Name" === i
                ? (p.classList.add("name"),
                  (p.textContent = t[0].toUpperCase() + t.slice(1)))
                : (p.textContent = "".concat(i, ": ").concat(t)),
              p.classList.add("info"))
          : ((p.textContent = t),
            p.classList.add("info", t),
            p.addEventListener(
              "click",
              (function () {
                var e = r(
                  regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            d(t, a[0].id, a[1]);
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()
            ),
            document.querySelector(".buttons").append(p))
        : (o.classList.remove("d-none"),
          (o.textContent = "Caught"),
          (i = "Types"),
          t.forEach(function (e, t) {
            if (
              (c[t].classList.remove("d-none"),
              (c[t].textContent = e.name),
              "string" == typeof a[0])
            )
              a.forEach(function (e) {
                s[t].append(v(e));
              });
            else
              for (
                var n = function (e) {
                    a[e].forEach(function (t) {
                      s[e].append(v(t));
                    });
                  },
                  r = 0;
                r < a.length;
                r++
              )
                n(r);
          })),
      p
    );
  }
  var h = function (e) {
      var t = e.target.src,
        n = e.target.alt;
      e.target.setAttribute("src", n), e.target.setAttribute("alt", t);
    },
    v = function (e) {
      var t = document.createElement("a");
      return (
        t.setAttribute("class", "dropdown-item"),
        t.setAttribute("href", "#"),
        (t.textContent = e),
        t
      );
    },
    y = (function () {
      var e = r(
        regeneratorRuntime.mark(function e(t, n) {
          var r, a, o, c, s, u;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.next = 2),
                    axios.get("https://pokeapi.co/api/v2/type/".concat(t))
                  );
                case 2:
                  if (
                    ((a = e.sent),
                    (o = a.data.pokemon),
                    (c = o.map(function (e) {
                      return e.pokemon.name;
                    })),
                    n)
                  ) {
                    e.next = 9;
                    break;
                  }
                  return e.abrupt("return", c);
                case 9:
                  return (
                    (e.next = 11),
                    axios.get("https://pokeapi.co/api/v2/type/".concat(n))
                  );
                case 11:
                  return (
                    (r = e.sent),
                    (s = r.data.pokemon),
                    (u = s.map(function (e) {
                      return e.pokemon.name;
                    })),
                    e.abrupt("return", [c, u])
                  );
                case 15:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
      return function (t, n) {
        return e.apply(this, arguments);
      };
    })();
  function g(e, t) {
    return x.apply(this, arguments);
  }
  function x() {
    return (x = r(
      regeneratorRuntime.mark(function t(n, r) {
        var a, o, c, u;
        return regeneratorRuntime.wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  e(s[2].classList).includes("displaying")
                    ? s[2].classList.add("displaying")
                    : (s[2].textContent = ""),
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
                (a = t.sent), (o = []), (c = 0);
              case 6:
                if (!(c < a.data.length)) {
                  t.next = 14;
                  break;
                }
                return (
                  (t.next = 9),
                  axios.get(
                    "https://infinite-wildwood-48742.herokuapp.com/pokemon/get/".concat(
                      a.data[c]
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
                (u = t.sent), o.push(u.data.name);
              case 11:
                c++, (t.next = 6);
                break;
              case 14:
                return (
                  o.forEach(function (e) {
                    s[2].append(v(e));
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
  s.forEach(function (e) {
    e.addEventListener("click", function (e) {
      p(e.target.textContent);
    });
  });
})();
