!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.Paragraph = e())
    : (t.Paragraph = e());
})(window, function () {
  return (function (t) {
    var e = {};
    function n(a) {
      if (e[a]) return e[a].exports;
      var i = (e[a] = { i: a, l: !1, exports: {} });
      return t[a].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, a) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
      }),
      (n.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (
          (n.r(a),
          Object.defineProperty(a, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var i in t)
            n.d(
              a,
              i,
              function (e) {
                return t[e];
              }.bind(null, i)
            );
        return a;
      }),
      (n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return n.d(e, "a", e), e;
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = "/"),
      n((n.s = 0))
    );
  })([
    function (t, e, n) {
      function a(t, e) {
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(t, a.key, a);
        }
      }
      function i(t, e, n) {
        return e && a(t.prototype, e), n && a(t, n), t;
      }
      n(1).toString();
      var r = (function () {
        function t(e) {
          var n = e.data,
            a = e.config,
            i = e.api,
            r = e.readOnly;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.api = i),
            (this.config = a),
            (this.readOnly = r),
            (this._CSS = {
              block: this.api.styles.block,
              wrapper: "ce-paragraph",
              alignment: {
                left: "ce-paragraph--left",
                center: "ce-paragraph--center",
                right: "ce-paragraph--right",
                justify: "ce-paragraph--justify",
              },
            }),
            (this.CSS = {
              baseClass: this.api.styles.block,
              loading: this.api.styles.loader,
              input: this.api.styles.input,
              settingsButton: this.api.styles.settingsButton,
              settingsButtonActive: this.api.styles.settingsButtonActive,
            }),
            (this.settings = [
              {
                name: "left",
                icon: '<svg xmlns="http://www.w3.org/2000/svg" id="Layer" enable-background="new 0 0 64 64" height="20" viewBox="0 0 64 64" width="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m10 23h28c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m10 45h28c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/></svg>',
              },
              {
                name: "center",
                icon: '<svg xmlns="http://www.w3.org/2000/svg" id="Layer" enable-background="new 0 0 64 64" height="20" viewBox="0 0 64 64" width="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m46 23c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m46 45c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/></svg>',
              },
              {
                name: "right",
                icon: '<svg xmlns="http://www.w3.org/2000/svg" id="Layer" enable-background="new 0 0 64 64" height="20" viewBox="0 0 64 64" width="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 19h-28c-1.104 0-2 .896-2 2s.896 2 2 2h28c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 41h-28c-1.104 0-2 .896-2 2s.896 2 2 2h28c1.104 0 2-.896 2-2s-.896-2-2-2z"/></svg>',
              },
              {
                name: "justify",
                icon: '<svg viewBox="0 0 64 64" width="20" height="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"></path><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"></path><path d="M 52.867 19 L 10.914 19 C 9.26 19 7.918 19.896 7.918 21 C 7.918 22.104 9.26 23 10.914 23 L 52.867 23 C 54.522 23 55.863 22.104 55.863 21 C 55.863 19.896 54.522 19 52.867 19 Z" style=""></path><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"></path><path d="M 52.779 41 L 11.113 41 C 9.469 41 8.136 41.896 8.136 43 C 8.136 44.104 9.469 45 11.113 45 L 52.779 45 C 54.421 45 55.754 44.104 55.754 43 C 55.754 41.896 54.421 41 52.779 41 Z" style=""></path></svg>',
              },
            ]),
            (this.onKeyUp = this.onKeyUp.bind(this)),
            (this._placeholder = a.placeholder
              ? a.placeholder
              : t.DEFAULT_PLACEHOLDER),
            (this._data = {
              text: n.text || "",
              alignment:
                n.alignment || a.defaultAlignment || t.DEFAULT_ALIGNMENT,
            }),
            (this._element = this.drawView()),
            (this.data = n),
            (this._preserveBlank =
              void 0 !== a.preserveBlank && a.preserveBlank);
        }
        return (
          i(t, null, [
            {
              key: "DEFAULT_PLACEHOLDER",
              get: function () {
                return "";
              },
            },
            {
              key: "ALIGNMENTS",
              get: function () {
                return {
                  left: "left",
                  center: "center",
                  right: "right",
                  justify: "justify",
                };
              },
            },
            {
              key: "isReadOnlySupported",
              get: function () {
                return !0;
              },
            },
            {
              key: "DEFAULT_ALIGNMENT",
              get: function () {
                return t.ALIGNMENTS.left;
              },
            },
          ]),
          i(
            t,
            [
              {
                key: "onKeyUp",
                value: function (t) {
                  ("Backspace" !== t.code && "Delete" !== t.code) ||
                    ("" === this._element.textContent &&
                      (this._element.innerHTML = ""));
                },
              },
              {
                key: "drawView",
                value: function () {
                  var t = document.createElement("DIV");
                  return (
                    t.classList.add(
                      this._CSS.wrapper,
                      this._CSS.block,
                      this._CSS.alignment[this.data.alignment]
                    ),
                    (t.contentEditable = !this.readOnly),
                    (t.dataset.placeholder = this.api.i18n.t(
                      this._placeholder
                    )),
                    (t.innerHTML = this.data.text),
                    t.addEventListener("keyup", this.onKeyUp),
                    t
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  return this._element;
                },
              },
              {
                key: "merge",
                value: function (t) {
                  var e = {
                    text: (this.data.text += t.text),
                    alignment: this.data.alignment,
                  };
                  (this._element.innerHTML = this.data.text), (this.data = e);
                },
              },
              {
                key: "validate",
                value: function (t) {
                  return !("" === t.text.trim() && !this._preserveBlank);
                },
              },
              {
                key: "save",
                value: function (t) {
                  return Object.assign(this.data, { text: t.innerHTML });
                },
              },
              {
                key: "onPaste",
                value: function (e) {
                  var n = {
                    text: e.detail.data.innerHTML,
                    alignment:
                      this.config.defaultAlignment || t.DEFAULT_ALIGNMENT,
                  };
                  this.data = n;
                },
              },
              {
                key: "renderSettings",
                value: function () {
                  var t = this,
                    e = document.createElement("div");
                  return (
                    this.settings
                      .map(function (n) {
                        var a = document.createElement("div");
                        return (
                          a.classList.add("cdx-settings-button"),
                          (a.innerHTML = n.icon),
                          a.classList.toggle(
                            t.CSS.settingsButtonActive,
                            n.name === t.data.alignment
                          ),
                          e.appendChild(a),
                          a
                        );
                      })
                      .forEach(function (e, n, a) {
                        e.addEventListener("click", function () {
                          t._toggleTune(t.settings[n].name),
                            a.forEach(function (e, n) {
                              var a = t.settings[n].name;
                              e.classList.toggle(
                                t.CSS.settingsButtonActive,
                                a === t.data.alignment
                              ),
                                t._element.classList.toggle(
                                  t._CSS.alignment[a],
                                  a === t.data.alignment
                                );
                            });
                        });
                      }),
                    e
                  );
                },
              },
              {
                key: "_toggleTune",
                value: function (t) {
                  this.data.alignment = t;
                },
              },
              {
                key: "data",
                get: function () {
                  return this._data;
                },
                set: function (e) {
                  (this._data = {
                    text: e.text || "",
                    alignment:
                      e.alignment ||
                      this.config.defaultAlignment ||
                      t.DEFAULT_ALIGNMENT,
                  }),
                    (this._element.innerHTML = this._data.text || "");
                },
              },
            ],
            [
              {
                key: "conversionConfig",
                get: function () {
                  return { export: "text", import: "text" };
                },
              },
              {
                key: "sanitize",
                get: function () {
                  return { text: { br: !0 }, alignment: {} };
                },
              },
              {
                key: "pasteConfig",
                get: function () {
                  return { tags: ["P"] };
                },
              },
              {
                key: "toolbox",
                get: function () {
                  return { icon: n(5).default, title: "Text" };
                },
              },
            ]
          ),
          t
        );
      })();
      t.exports = r;
    },
    function (t, e, n) {
      var a = n(2),
        i = n(3);
      "string" == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[t.i, i, ""]]);
      var r = { insert: "head", singleton: !1 };
      a(i, r);
      t.exports = i.locals || {};
    },
    function (t, e, n) {
      "use strict";
      var a,
        i = function () {
          return (
            void 0 === a &&
              (a = Boolean(window && document && document.all && !window.atob)),
            a
          );
        },
        r = (function () {
          var t = {};
          return function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          };
        })(),
        o = [];
      function c(t) {
        for (var e = -1, n = 0; n < o.length; n++)
          if (o[n].identifier === t) {
            e = n;
            break;
          }
        return e;
      }
      function s(t, e) {
        for (var n = {}, a = [], i = 0; i < t.length; i++) {
          var r = t[i],
            s = e.base ? r[0] + e.base : r[0],
            l = n[s] || 0,
            u = "".concat(s, " ").concat(l);
          n[s] = l + 1;
          var h = c(u),
            d = { css: r[1], media: r[2], sourceMap: r[3] };
          -1 !== h
            ? (o[h].references++, o[h].updater(d))
            : o.push({ identifier: u, updater: m(d, e), references: 1 }),
            a.push(u);
        }
        return a;
      }
      function l(t) {
        var e = document.createElement("style"),
          a = t.attributes || {};
        if (void 0 === a.nonce) {
          var i = n.nc;
          i && (a.nonce = i);
        }
        if (
          (Object.keys(a).forEach(function (t) {
            e.setAttribute(t, a[t]);
          }),
          "function" == typeof t.insert)
        )
          t.insert(e);
        else {
          var o = r(t.insert || "head");
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(e);
        }
        return e;
      }
      var u,
        h =
          ((u = []),
          function (t, e) {
            return (u[t] = e), u.filter(Boolean).join("\n");
          });
      function d(t, e, n, a) {
        var i = n
          ? ""
          : a.media
          ? "@media ".concat(a.media, " {").concat(a.css, "}")
          : a.css;
        if (t.styleSheet) t.styleSheet.cssText = h(e, i);
        else {
          var r = document.createTextNode(i),
            o = t.childNodes;
          o[e] && t.removeChild(o[e]),
            o.length ? t.insertBefore(r, o[e]) : t.appendChild(r);
        }
      }
      function p(t, e, n) {
        var a = n.css,
          i = n.media,
          r = n.sourceMap;
        if (
          (i ? t.setAttribute("media", i) : t.removeAttribute("media"),
          r &&
            "undefined" != typeof btoa &&
            (a += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
              btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
              " */"
            )),
          t.styleSheet)
        )
          t.styleSheet.cssText = a;
        else {
          for (; t.firstChild; ) t.removeChild(t.firstChild);
          t.appendChild(document.createTextNode(a));
        }
      }
      var f = null,
        g = 0;
      function m(t, e) {
        var n, a, i;
        if (e.singleton) {
          var r = g++;
          (n = f || (f = l(e))),
            (a = d.bind(null, n, r, !1)),
            (i = d.bind(null, n, r, !0));
        } else
          (n = l(e)),
            (a = p.bind(null, n, e)),
            (i = function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(n);
            });
        return (
          a(t),
          function (e) {
            if (e) {
              if (
                e.css === t.css &&
                e.media === t.media &&
                e.sourceMap === t.sourceMap
              )
                return;
              a((t = e));
            } else i();
          }
        );
      }
      t.exports = function (t, e) {
        (e = e || {}).singleton ||
          "boolean" == typeof e.singleton ||
          (e.singleton = i());
        var n = s((t = t || []), e);
        return function (t) {
          if (
            ((t = t || []),
            "[object Array]" === Object.prototype.toString.call(t))
          ) {
            for (var a = 0; a < n.length; a++) {
              var i = c(n[a]);
              o[i].references--;
            }
            for (var r = s(t, e), l = 0; l < n.length; l++) {
              var u = c(n[l]);
              0 === o[u].references && (o[u].updater(), o.splice(u, 1));
            }
            n = r;
          }
        };
      };
    },
    function (t, e, n) {
      (e = n(4)(!1)).push([
        t.i,
        ".ce-paragraph {\n    line-height: 1.6em;\n    outline: none;\n}\n.ce-paragraph--right {\n    text-align: right;\n}\n.ce-paragraph--center {\n    text-align: center;\n}\n.ce-paragraph--left {\n    text-align: left;\n}\n\n.ce-paragraph--justify {\n    text-align: justify;\n}\n\n.ce-paragraph[data-placeholder]:empty::before{\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n/** Show placeholder at the first paragraph if Editor is empty */\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n.ce-paragraph p:first-of-type{\n    margin-top: 0;\n}\n\n.ce-paragraph p:last-of-type{\n    margin-bottom: 0;\n}\n\n\n.svg-icon {\n    width: 1em;\n    height: 1em;\n}\n\n.svg-icon path,\n.svg-icon polygon,\n.svg-icon rect {\n    fill: #4691f6;\n}\n\n.svg-icon circle {\n    stroke: #4691f6;\n    stroke-width: 1;\n}",
        "",
      ]),
        (t.exports = e);
    },
    function (t, e, n) {
      "use strict";
      t.exports = function (t) {
        var e = [];
        return (
          (e.toString = function () {
            return this.map(function (e) {
              var n = (function (t, e) {
                var n = t[1] || "",
                  a = t[3];
                if (!a) return n;
                if (e && "function" == typeof btoa) {
                  var i =
                      ((o = a),
                      (c = btoa(
                        unescape(encodeURIComponent(JSON.stringify(o)))
                      )),
                      (s =
                        "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                          c
                        )),
                      "/*# ".concat(s, " */")),
                    r = a.sources.map(function (t) {
                      return "/*# sourceURL="
                        .concat(a.sourceRoot || "")
                        .concat(t, " */");
                    });
                  return [n].concat(r).concat([i]).join("\n");
                }
                var o, c, s;
                return [n].join("\n");
              })(e, t);
              return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n;
            }).join("");
          }),
          (e.i = function (t, n, a) {
            "string" == typeof t && (t = [[null, t, ""]]);
            var i = {};
            if (a)
              for (var r = 0; r < this.length; r++) {
                var o = this[r][0];
                null != o && (i[o] = !0);
              }
            for (var c = 0; c < t.length; c++) {
              var s = [].concat(t[c]);
              (a && i[s[0]]) ||
                (n &&
                  (s[2]
                    ? (s[2] = "".concat(n, " and ").concat(s[2]))
                    : (s[2] = n)),
                e.push(s));
            }
          }),
          e
        );
      };
    },
    function (t, e, n) {
      "use strict";
      n.r(e),
        (e.default =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0.2 -0.3 9 11.4" width="12" height="14">\n  <path d="M0 2.77V.92A1 1 0 01.2.28C.35.1.56 0 .83 0h7.66c.28.01.48.1.63.28.14.17.21.38.21.64v1.85c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26a1 1 0 01-.21-.66V1.69H5.6v7.58h.5c.25 0 .45.08.6.23.17.16.25.35.25.6s-.08.45-.24.6a.87.87 0 01-.62.22H3.21a.87.87 0 01-.61-.22.78.78 0 01-.24-.6c0-.25.08-.44.24-.6a.85.85 0 01.61-.23h.5V1.7H1.73v1.08c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26A1 1 0 010 2.77z"/>\n</svg>\n');
    },
  ]);
});
