(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    15: function(e, t, a) {
      e.exports = a.p + "static/media/error.22389cf4.jpg";
    },
    18: function(e, t, a) {
      e.exports = a(44);
    },
    23: function(e, t, a) {},
    25: function(e, t, a) {},
    29: function(e, t, a) {},
    31: function(e, t, a) {},
    33: function(e, t, a) {},
    35: function(e, t, a) {},
    42: function(e, t, a) {},
    44: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        c = a(14),
        l = a.n(c),
        s = a(4),
        u = a(5),
        o = a(7),
        i = a(6),
        m = a(8),
        h = a(46),
        f = a(47),
        d = a(48),
        p = (a(23),
        function() {
          return r.a.createElement(
            "div",
            { className: "header" },
            r.a.createElement(
              "h3",
              { className: "header-title" },
              r.a.createElement("a", { href: "#" }, "Game of Thrones DB")
            ),
            r.a.createElement(
              "ul",
              { className: "header-list" },
              r.a.createElement(
                "li",
                null,
                r.a.createElement("a", { href: "#" }, "Characters")
              ),
              r.a.createElement(
                "li",
                null,
                r.a.createElement("a", { href: "#" }, "Houses")
              ),
              r.a.createElement(
                "li",
                null,
                r.a.createElement("a", { href: "#" }, "Books")
              )
            )
          );
        }),
        v = (a(25), a(2)),
        E = a.n(v),
        g = a(9),
        b = (function() {
          function e() {
            var t = this;
            Object(s.a)(this, e),
              (this._extractId = function(e) {
                return e.url.match(/\/([0-9]*)$/)[1];
              }),
              (this._transformCharacter = function(e) {
                return {
                  id: t._extractId(e),
                  name: t.isSet(e.name),
                  gender: t.isSet(e.gender),
                  born: t.isSet(e.born),
                  died: t.isSet(e.died),
                  culture: t.isSet(e.culture),
                };
              }),
              (this._transformHouse = function(e) {
                return {
                  id: t._extractId(e),
                  name: t.isSet(e.name),
                  region: t.isSet(e.region),
                  words: t.isSet(e.words),
                  titles: t.isSet(e.titles),
                  ancestralWeapons: t.isSet(e.ancestralWeapons),
                };
              }),
              (this._transformBook = function(e) {
                return {
                  id: t._extractId(e),
                  name: t.isSet(e.name),
                  numberOfPages: t.isSet(e.numberOfPages),
                  publisher: t.isSet(e.publisher),
                  released: t.isSet(e.released),
                };
              }),
              (this._apiBase = "https://www.anapioficeandfire.com/api");
          }
          return (
            Object(u.a)(e, [
              {
                key: "getResource",
                value: (function() {
                  var e = Object(g.a)(
                    E.a.mark(function e(t) {
                      var a;
                      return E.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  fetch("".concat(this._apiBase).concat(t))
                                );
                              case 2:
                                if ((a = e.sent).ok) {
                                  e.next = 5;
                                  break;
                                }
                                throw new Error(
                                  "Could not fetch ".concat(t) +
                                    ", received ".concat(a.status)
                                );
                              case 5:
                                return (e.next = 7), a.json();
                              case 7:
                                return e.abrupt("return", e.sent);
                              case 8:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getAllBooks",
                value: (function() {
                  var e = Object(g.a)(
                    E.a.mark(function e() {
                      var t;
                      return E.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), this.getResource("/books/")
                                );
                              case 2:
                                return (
                                  (t = e.sent),
                                  e.abrupt("return", t.map(this._transformBook))
                                );
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getBook",
                value: (function() {
                  var e = Object(g.a)(
                    E.a.mark(function e(t) {
                      var a;
                      return E.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.getResource("/books/".concat(t, "/"))
                                );
                              case 2:
                                return (
                                  (a = e.sent),
                                  e.abrupt("return", this._transformBook(a))
                                );
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getAllCharacters",
                value: (function() {
                  var e = Object(g.a)(
                    E.a.mark(function e() {
                      var t;
                      return E.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.getResource(
                                    "/characters?page=5&pageSize=10"
                                  )
                                );
                              case 2:
                                return (
                                  (t = e.sent),
                                  e.abrupt(
                                    "return",
                                    t.map(this._transformCharacter)
                                  )
                                );
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getCharacter",
                value: (function() {
                  var e = Object(g.a)(
                    E.a.mark(function e(t) {
                      var a;
                      return E.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.getResource("/characters/".concat(t))
                                );
                              case 2:
                                return (
                                  (a = e.sent),
                                  e.abrupt(
                                    "return",
                                    this._transformCharacter(a)
                                  )
                                );
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getAllHouses",
                value: (function() {
                  var e = Object(g.a)(
                    E.a.mark(function e() {
                      var t;
                      return E.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), this.getResource("/houses/")
                                );
                              case 2:
                                return (
                                  (t = e.sent),
                                  e.abrupt(
                                    "return",
                                    t.map(this._transformHouse)
                                  )
                                );
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getHouse",
                value: (function() {
                  var e = Object(g.a)(
                    E.a.mark(function e(t) {
                      var a;
                      return E.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (a = this.getResource(
                                    "/houses/".concat(t, "/")
                                  )),
                                  e.abrupt("return", this._transformHouse(a))
                                );
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "isSet",
                value: function(e) {
                  return e || "no data :(";
                },
              },
            ]),
            e
          );
        })(),
        w = (a(29),
        function() {
          return r.a.createElement(
            "div",
            { className: "lds-css ng-scope" },
            r.a.createElement(
              "div",
              { className: "lds-spin" },
              r.a.createElement("div", null, r.a.createElement("div", null)),
              r.a.createElement("div", null, r.a.createElement("div", null)),
              r.a.createElement("div", null, r.a.createElement("div", null)),
              r.a.createElement("div", null, r.a.createElement("div", null)),
              r.a.createElement("div", null, r.a.createElement("div", null)),
              r.a.createElement("div", null, r.a.createElement("div", null)),
              r.a.createElement("div", null, r.a.createElement("div", null)),
              r.a.createElement("div", null, r.a.createElement("div", null))
            )
          );
        }),
        y = a(15),
        k = a.n(y),
        C = function() {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement("img", { src: k.a }),
            r.a.createElement("span", null, "Something goes wrong :(")
          );
        },
        j = (function(e) {
          function t() {
            var e, a;
            Object(s.a)(this, t);
            for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++)
              r[c] = arguments[c];
            return (
              ((a = Object(o.a)(
                this,
                (e = Object(i.a)(t)).call.apply(e, [this].concat(r))
              )).gotService = new b()),
              (a.state = { char: {}, loading: !0, error: !1 }),
              (a.onCharLoaded = function(e) {
                a.setState({ char: e, loading: !1 });
              }),
              (a.onError = function(e) {
                a.setState({ error: !0, loading: !1 });
              }),
              (a.updateChar = function() {
                var e = Math.floor(140 * Math.random() + 25);
                a.gotService
                  .getCharacter(e)
                  .then(a.onCharLoaded)
                  .catch(a.onError);
              }),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(u.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  console.log("did mount"),
                    this.updateChar(),
                    (this.timerID = setInterval(this.updateChar, 5e3));
                },
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  console.log("will  unmount"), clearInterval(this.timerID);
                },
              },
              {
                key: "render",
                value: function() {
                  console.log("render");
                  var e = this.state,
                    t = e.char,
                    a = e.loading,
                    n = e.error,
                    c = n ? r.a.createElement(C, null) : null,
                    l = a ? r.a.createElement(w, null) : null,
                    s = a || n ? null : r.a.createElement(S, { char: t });
                  return r.a.createElement(
                    "div",
                    { className: "random-block rounded" },
                    c,
                    l,
                    s
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        S = function(e) {
          var t = e.char,
            a = t.name,
            n = t.gender,
            c = t.born,
            l = t.died,
            s = t.culture;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement("h4", null, "Random Character: ", a),
            r.a.createElement(
              "ul",
              { className: "list-group list-group-flush" },
              r.a.createElement(
                "li",
                { className: "list-group-item d-flex justify-content-between" },
                r.a.createElement("span", { className: "term" }, "Gender "),
                r.a.createElement("span", null, n)
              ),
              r.a.createElement(
                "li",
                { className: "list-group-item d-flex justify-content-between" },
                r.a.createElement("span", { className: "term" }, "Born "),
                r.a.createElement("span", null, c)
              ),
              r.a.createElement(
                "li",
                { className: "list-group-item d-flex justify-content-between" },
                r.a.createElement("span", { className: "term" }, "Died "),
                r.a.createElement("span", null, l)
              ),
              r.a.createElement(
                "li",
                { className: "list-group-item d-flex justify-content-between" },
                r.a.createElement("span", { className: "term" }, "Culture "),
                r.a.createElement("span", null, s)
              )
            )
          );
        },
        O = j,
        x = (a(31), C),
        N = (function(e) {
          function t() {
            var e, a;
            Object(s.a)(this, t);
            for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++)
              r[c] = arguments[c];
            return (
              ((a = Object(o.a)(
                this,
                (e = Object(i.a)(t)).call.apply(e, [this].concat(r))
              )).gotService = new b()),
              (a.state = { charList: null, error: !1 }),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(u.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this;
                  this.gotService
                    .getAllCharacters()
                    .then(function(t) {
                      e.setState({ charList: t, error: !1 });
                    })
                    .catch(function() {
                      e.onError();
                    });
                },
              },
              {
                key: "componentDidCatch",
                value: function() {
                  this.setState({ charList: null, error: !0 });
                },
              },
              {
                key: "onError",
                value: function(e) {
                  this.setState({ charList: null, error: !0 });
                },
              },
              {
                key: "renderItems",
                value: function(e) {
                  var t = this;
                  return e.map(function(e) {
                    var a = e.id,
                      n = e.name;
                    return r.a.createElement(
                      "li",
                      {
                        key: a,
                        className: "list-group-item",
                        onClick: function() {
                          return t.props.onItemSelected(a);
                        },
                      },
                      n
                    );
                  });
                },
              },
              {
                key: "render",
                value: function() {
                  var e = this.state,
                    t = e.charList;
                  if (e.error) return r.a.createElement(x, null);
                  if (!t) return r.a.createElement(w, null);
                  var a = this.renderItems(t);
                  return r.a.createElement(
                    "ul",
                    { className: "item-list list-group" },
                    a
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        I = (a(33),
        (function(e) {
          function t() {
            var e, a;
            Object(s.a)(this, t);
            for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++)
              r[c] = arguments[c];
            return (
              ((a = Object(o.a)(
                this,
                (e = Object(i.a)(t)).call.apply(e, [this].concat(r))
              )).gotServise = new b()),
              (a.state = { char: null }),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(u.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  this.updateChar();
                },
              },
              {
                key: "componentDidUpdate",
                value: function(e) {
                  this.props.charId !== e.charId && this.updateChar();
                },
              },
              {
                key: "updateChar",
                value: function() {
                  var e = this,
                    t = this.props.charId;
                  t &&
                    this.gotServise.getCharacter(t).then(function(t) {
                      e.setState({ char: t });
                    });
                },
              },
              {
                key: "render",
                value: function() {
                  if (!this.state.char)
                    return r.a.createElement(
                      "span",
                      { className: "select-error" },
                      "Please select a character"
                    );
                  var e = this.state.char,
                    t = e.name,
                    a = e.gender,
                    n = e.born,
                    c = e.died,
                    l = e.culture;
                  return r.a.createElement(
                    "div",
                    { className: "char-details rounded" },
                    r.a.createElement("h4", null, t),
                    r.a.createElement(
                      "ul",
                      { className: "list-group list-group-flush" },
                      r.a.createElement(
                        "li",
                        {
                          className:
                            "list-group-item d-flex justify-content-between",
                        },
                        r.a.createElement(
                          "span",
                          { className: "term" },
                          "Gender"
                        ),
                        r.a.createElement("span", null, a)
                      ),
                      r.a.createElement(
                        "li",
                        {
                          className:
                            "list-group-item d-flex justify-content-between",
                        },
                        r.a.createElement(
                          "span",
                          { className: "term" },
                          "Born"
                        ),
                        r.a.createElement("span", null, n)
                      ),
                      r.a.createElement(
                        "li",
                        {
                          className:
                            "list-group-item d-flex justify-content-between",
                        },
                        r.a.createElement(
                          "span",
                          { className: "term" },
                          "Died"
                        ),
                        r.a.createElement("span", null, c)
                      ),
                      r.a.createElement(
                        "li",
                        {
                          className:
                            "list-group-item d-flex justify-content-between",
                        },
                        r.a.createElement(
                          "span",
                          { className: "term" },
                          "Culture"
                        ),
                        r.a.createElement("span", null, l)
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component)),
        _ = (a(35),
        (function(e) {
          function t() {
            var e, a;
            Object(s.a)(this, t);
            for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++)
              r[c] = arguments[c];
            return (
              ((a = Object(o.a)(
                this,
                (e = Object(i.a)(t)).call.apply(e, [this].concat(r))
              )).state = { showRandomChar: !0, error: !1, selectedChar: 130 }),
              (a.toggleRandomChar = function() {
                a.setState(function(e) {
                  return { showRandomChar: !e.showRandomChar };
                });
              }),
              (a.onItemSelected = function(e) {
                a.setState({ selectedChar: e });
              }),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(u.a)(t, [
              {
                key: "render",
                value: function() {
                  if (this.state.error) return r.a.createElement(x, null);
                  var e = this.state.showRandomChar
                    ? r.a.createElement(O, null)
                    : null;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(h.a, null, r.a.createElement(p, null)),
                    r.a.createElement(
                      h.a,
                      null,
                      r.a.createElement(
                        f.a,
                        null,
                        r.a.createElement(
                          d.a,
                          { lg: { size: 5, offset: 0 } },
                          e,
                          r.a.createElement(
                            "button",
                            {
                              className: "toggle-btn",
                              onClick: this.toggleRandomChar,
                            },
                            "Toggle random character"
                          )
                        )
                      ),
                      r.a.createElement(
                        f.a,
                        null,
                        r.a.createElement(
                          d.a,
                          { md: "6" },
                          r.a.createElement(N, {
                            onItemSelected: this.onItemSelected,
                          })
                        ),
                        r.a.createElement(
                          d.a,
                          { md: "6" },
                          r.a.createElement(I, {
                            charId: this.state.selectedChar,
                          })
                        )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component));
      a(40), a(42);
      l.a.render(r.a.createElement(_, null), document.getElementById("root"));
    },
  },
  [[18, 2, 1]],
]);
//# sourceMappingURL=main.71bee3a0.chunk.js.map
