/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/@editorjs/list@1.8.0/dist/bundle.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.List = t())
    : (e.List = t());
})(window, function () {
  return (function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var i = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var i in e)
            n.d(
              r,
              i,
              function (t) {
                return e[t];
              }.bind(null, i)
            );
        return r;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = "/"),
      n((n.s = 4))
    );
  })([
    function (e, t, n) {
      var r = n(1),
        i = n(2);
      "string" == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[e.i, i, ""]]);
      var o = { insert: "head", singleton: !1 };
      r(i, o);
      e.exports = i.locals || {};
    },
    function (e, t, n) {
      "use strict";
      var r,
        i = function () {
          return (
            void 0 === r &&
              (r = Boolean(window && document && document.all && !window.atob)),
            r
          );
        },
        o = (function () {
          var e = {};
          return function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          };
        })(),
        a = [];
      function s(e) {
        for (var t = -1, n = 0; n < a.length; n++)
          if (a[n].identifier === e) {
            t = n;
            break;
          }
        return t;
      }
      function c(e, t) {
        for (var n = {}, r = [], i = 0; i < e.length; i++) {
          var o = e[i],
            c = t.base ? o[0] + t.base : o[0],
            l = n[c] || 0,
            u = "".concat(c, " ").concat(l);
          n[c] = l + 1;
          var d = s(u),
            f = { css: o[1], media: o[2], sourceMap: o[3] };
          -1 !== d
            ? (a[d].references++, a[d].updater(f))
            : a.push({ identifier: u, updater: y(f, t), references: 1 }),
            r.push(u);
        }
        return r;
      }
      function l(e) {
        var t = document.createElement("style"),
          r = e.attributes || {};
        if (void 0 === r.nonce) {
          var i = n.nc;
          i && (r.nonce = i);
        }
        if (
          (Object.keys(r).forEach(function (e) {
            t.setAttribute(e, r[e]);
          }),
          "function" == typeof e.insert)
        )
          e.insert(t);
        else {
          var a = o(e.insert || "head");
          if (!a)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          a.appendChild(t);
        }
        return t;
      }
      var u,
        d =
          ((u = []),
          function (e, t) {
            return (u[e] = t), u.filter(Boolean).join("\n");
          });
      function f(e, t, n, r) {
        var i = n
          ? ""
          : r.media
          ? "@media ".concat(r.media, " {").concat(r.css, "}")
          : r.css;
        if (e.styleSheet) e.styleSheet.cssText = d(t, i);
        else {
          var o = document.createTextNode(i),
            a = e.childNodes;
          a[t] && e.removeChild(a[t]),
            a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
        }
      }
      function p(e, t, n) {
        var r = n.css,
          i = n.media,
          o = n.sourceMap;
        if (
          (i ? e.setAttribute("media", i) : e.removeAttribute("media"),
          o &&
            btoa &&
            (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
              btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
              " */"
            )),
          e.styleSheet)
        )
          e.styleSheet.cssText = r;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(r));
        }
      }
      var h = null,
        m = 0;
      function y(e, t) {
        var n, r, i;
        if (t.singleton) {
          var o = m++;
          (n = h || (h = l(t))),
            (r = f.bind(null, n, o, !1)),
            (i = f.bind(null, n, o, !0));
        } else
          (n = l(t)),
            (r = p.bind(null, n, t)),
            (i = function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            });
        return (
          r(e),
          function (t) {
            if (t) {
              if (
                t.css === e.css &&
                t.media === e.media &&
                t.sourceMap === e.sourceMap
              )
                return;
              r((e = t));
            } else i();
          }
        );
      }
      e.exports = function (e, t) {
        (t = t || {}).singleton ||
          "boolean" == typeof t.singleton ||
          (t.singleton = i());
        var n = c((e = e || []), t);
        return function (e) {
          if (
            ((e = e || []),
            "[object Array]" === Object.prototype.toString.call(e))
          ) {
            for (var r = 0; r < n.length; r++) {
              var i = s(n[r]);
              a[i].references--;
            }
            for (var o = c(e, t), l = 0; l < n.length; l++) {
              var u = s(n[l]);
              0 === a[u].references && (a[u].updater(), a.splice(u, 1));
            }
            n = o;
          }
        };
      };
    },
    function (e, t, n) {
      (t = n(3)(!1)).push([
        e.i,
        ".cdx-list {\n    margin: 0;\n    padding-left: 40px;\n    outline: none;\n}\n\n    .cdx-list__item {\n        padding: 5.5px 0 5.5px 3px;\n        line-height: 1.6em;\n    }\n\n    .cdx-list--unordered {\n        list-style: disc;\n    }\n\n    .cdx-list--ordered {\n        list-style: decimal;\n    }\n\n    .cdx-list--ordered--lower-alpha {\n        list-style: lower-alpha;\n    }\n\n    .cdx-list-settings {\n        display: flex;\n    }\n\n    .cdx-list-settings .cdx-settings-button {\n            width: 50%;\n        }\n",
        "",
      ]),
        (e.exports = t);
    },
    function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        var t = [];
        return (
          (t.toString = function () {
            return this.map(function (t) {
              var n = (function (e, t) {
                var n = e[1] || "",
                  r = e[3];
                if (!r) return n;
                if (t && "function" == typeof btoa) {
                  var i =
                      ((a = r),
                      (s = btoa(
                        unescape(encodeURIComponent(JSON.stringify(a)))
                      )),
                      (c =
                        "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                          s
                        )),
                      "/*# ".concat(c, " */")),
                    o = r.sources.map(function (e) {
                      return "/*# sourceURL="
                        .concat(r.sourceRoot || "")
                        .concat(e, " */");
                    });
                  return [n].concat(o).concat([i]).join("\n");
                }
                var a, s, c;
                return [n].join("\n");
              })(t, e);
              return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
            }).join("");
          }),
          (t.i = function (e, n, r) {
            "string" == typeof e && (e = [[null, e, ""]]);
            var i = {};
            if (r)
              for (var o = 0; o < this.length; o++) {
                var a = this[o][0];
                null != a && (i[a] = !0);
              }
            for (var s = 0; s < e.length; s++) {
              var c = [].concat(e[s]);
              (r && i[c[0]]) ||
                (n &&
                  (c[2]
                    ? (c[2] = "".concat(n, " and ").concat(c[2]))
                    : (c[2] = n)),
                t.push(c));
            }
          }),
          t
        );
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "default", function () {
          return d;
        });
      n(0);
      const r =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="9" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 17H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 12H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 7H4.99002"/></svg>';
      function i(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return o(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return o(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                c(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function c(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function u(e, t, n) {
        return t && l(e.prototype, t), n && l(e, n), e;
      }
      var d = (function () {
        function e(t) {
          var n = t.data,
            i = t.config,
            o = t.api,
            a = t.readOnly;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this._elements = { wrapper: null }),
            (this.api = o),
            (this.readOnly = a),
            (this.settings = [
              {
                name: "unordered",
                label: this.api.i18n.t("Unordered"),
                icon: r,
                default: "unordered" === i.defaultStyle || !1,
              },
              {
                name: "ordered",
                label: this.api.i18n.t("Ordered decimal"),
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="12" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.79999 14L7.79999 7.2135C7.79999 7.12872 7.7011 7.0824 7.63597 7.13668L4.79999 9.5"/></svg>',
                default: "ordered" === i.defaultStyle || !0,
              },
              {
                name: "ordered-lower-alpha",
                label: this.api.i18n.t("Ordered lower alpha"),
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="12" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.79999 14L7.79999 7.2135C7.79999 7.12872 7.7011 7.0824 7.63597 7.13668L4.79999 9.5"/></svg>',
                default: "ordered-lower-alpha" === i.defaultStyle || !0,
              },
            ]),
            (this._data = {
              style: this.settings.find(function (e) {
                return !0 === e.default;
              }).name,
              items: [],
            }),
            (this.data = n);
        }
        return (
          u(e, null, [
            {
              key: "isReadOnlySupported",
              get: function () {
                return !0;
              },
            },
            {
              key: "enableLineBreaks",
              get: function () {
                return !0;
              },
            },
            {
              key: "toolbox",
              get: function () {
                return { icon: r, title: "List" };
              },
            },
          ]),
          u(
            e,
            [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return (
                    (this._elements.wrapper = this.makeMainTag(
                      this._data.style
                    )),
                    this._data.items.length
                      ? this._data.items.forEach(function (t) {
                          e._elements.wrapper.appendChild(
                            e._make("li", e.CSS.item, { innerHTML: t })
                          );
                        })
                      : this._elements.wrapper.appendChild(
                          this._make("li", this.CSS.item)
                        ),
                    this.readOnly ||
                      this._elements.wrapper.addEventListener(
                        "keydown",
                        function (t) {
                          switch (t.keyCode) {
                            case 13:
                              e.getOutofList(t);
                              break;
                            case 8:
                              e.backspace(t);
                          }
                        },
                        !1
                      ),
                    this._elements.wrapper
                  );
                },
              },
              {
                key: "save",
                value: function () {
                  return this.data;
                },
              },
              {
                key: "renderSettings",
                value: function () {
                  var e = this;
                  return this.settings.map(function (t) {
                    return s(
                      s({}, t),
                      {},
                      {
                        isActive: e._data.style === t.name,
                        closeOnActivate: !0,
                        onActivate: function () {
                          return e.toggleTune(t.name);
                        },
                      }
                    );
                  });
                },
              },
              {
                key: "onPaste",
                value: function (e) {
                  var t = e.detail.data;
                  this.data = this.pasteHandler(t);
                },
              },
              {
                key: "makeMainTag",
                value: function (e) {
                  var t;
                  switch (e) {
                    case "ordered":
                        t = this.CSS.wrapperOrdered;
                        n = "ol";
                        break;
                    case "ordered-lower-alpha":
                        t = this.CSS.wrapperOrderedLowerAlpha;
                        n = "ol";
                        break;
                    default:
                        t = this.CSS.wrapperUnordered;
                        n = "ul";
                  }
                  return this._make(
                    n,
                    [this.CSS.baseBlock, this.CSS.wrapper, t],
                    { contentEditable: !this.readOnly }
                  );
                },
              },
              {
                key: "toggleTune",
                value: function (e) {
                  for (
                    var t = this.makeMainTag(e);
                    this._elements.wrapper.hasChildNodes();

                  )
                    t.appendChild(this._elements.wrapper.firstChild);
                  this._elements.wrapper.replaceWith(t),
                    (this._elements.wrapper = t),
                    (this._data.style = e);
                },
              },
              {
                key: "_make",
                value: function (e) {
                  var t,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null,
                    r =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    o = document.createElement(e);
                  Array.isArray(n)
                    ? (t = o.classList).add.apply(t, i(n))
                    : n && o.classList.add(n);
                  for (var a in r) o[a] = r[a];
                  return o;
                },
              },
              {
                key: "getOutofList",
                value: function (e) {
                  var t = this._elements.wrapper.querySelectorAll(
                    "." + this.CSS.item
                  );
                  if (!(t.length < 2)) {
                    var n = t[t.length - 1],
                      r = this.currentItem;
                    r !== n ||
                      n.textContent.trim().length ||
                      (r.parentElement.removeChild(r),
                      this.api.blocks.insert(),
                      this.api.caret.setToBlock(
                        this.api.blocks.getCurrentBlockIndex()
                      ),
                      e.preventDefault(),
                      e.stopPropagation());
                  }
                },
              },
              {
                key: "backspace",
                value: function (e) {
                  var t = this._elements.wrapper.querySelectorAll(
                      "." + this.CSS.item
                    ),
                    n = t[0];
                  n &&
                    t.length < 2 &&
                    !n.innerHTML.replace("<br>", " ").trim() &&
                    e.preventDefault();
                },
              },
              {
                key: "selectItem",
                value: function (e) {
                  e.preventDefault();
                  var t = window.getSelection(),
                    n = t.anchorNode.parentNode.closest("." + this.CSS.item),
                    r = new Range();
                  r.selectNodeContents(n), t.removeAllRanges(), t.addRange(r);
                },
              },
              {
                key: "pasteHandler",
                value: function (e) {
                  var t,
                    n = e.tagName;
                  switch (n) {
                    case "OL":
                      t = "ordered";
                      break;
                    case "UL":
                    case "LI":
                      t = "unordered";
                  }
                  var r = { style: t, items: [] };
                  if ("LI" === n) r.items = [e.innerHTML];
                  else {
                    var i = Array.from(e.querySelectorAll("LI"));
                    r.items = i
                      .map(function (e) {
                        return e.innerHTML;
                      })
                      .filter(function (e) {
                        return !!e.trim();
                      });
                  }
                  return r;
                },
              },
              {
                key: "CSS",
                get: function () {
                  return {
                    baseBlock: this.api.styles.block,
                    wrapper: "cdx-list",
                    wrapperOrdered: "cdx-list--ordered",
                    wrapperOrderedLowerAlpha: "cdx-list--ordered--lower-alpha",
                    wrapperUnordered: "cdx-list--unordered",
                    item: "cdx-list__item",
                  };
                },
              },
              {
                key: "data",
                set: function (e) {
                  e || (e = {}),
                    (this._data.style =
                      e.style ||
                      this.settings.find(function (e) {
                        return !0 === e.default;
                      }).name),
                    (this._data.items = e.items || []);
                  var t = this._elements.wrapper;
                  t && t.parentNode.replaceChild(this.render(), t);
                },
                get: function () {
                  this._data.items = [];
                  for (
                    var e = this._elements.wrapper.querySelectorAll(
                        ".".concat(this.CSS.item)
                      ),
                      t = 0;
                    t < e.length;
                    t++
                  ) {
                    e[t].innerHTML.replace("<br>", " ").trim() &&
                      this._data.items.push(e[t].innerHTML);
                  }
                  return this._data;
                },
              },
              {
                key: "currentItem",
                get: function () {
                  var e = window.getSelection().anchorNode;
                  return (
                    e.nodeType !== Node.ELEMENT_NODE && (e = e.parentNode),
                    e.closest(".".concat(this.CSS.item))
                  );
                },
              },
            ],
            [
              {
                key: "conversionConfig",
                get: function () {
                  return {
                    export: function (e) {
                      return e.items.join(". ");
                    },
                    import: function (e) {
                      return { items: [e], style: "unordered" };
                    },
                  };
                },
              },
              {
                key: "sanitize",
                get: function () {
                  return { style: {}, items: { br: !0 } };
                },
              },
              {
                key: "pasteConfig",
                get: function () {
                  return { tags: ["OL", "UL", "LI"] };
                },
              },
            ]
          ),
          e
        );
      })();
    },
  ]).default;
});
