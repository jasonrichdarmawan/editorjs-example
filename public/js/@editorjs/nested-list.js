/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/@editorjs/nested-list@1.3.0/dist/nested-list.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.NestedList = t())
    : (e.NestedList = t());
})(self, function () {
  return (() => {
    "use strict";
    var e = {
        384: (e, t, n) => {
          n.d(t, { Z: () => s });
          var r = n(645),
            i = n.n(r)()(function (e) {
              return e[1];
            });
          i.push([
            e.id,
            '.cdx-nested-list {\n  margin: 0;\n  padding: 0;\n  outline: none;\n  counter-reset: item;\n  list-style: none;\n}\n\n  .cdx-nested-list__item {\n    line-height: 1.6em;\n    display: flex;\n    margin: 2px 0;\n  }\n\n  .cdx-nested-list__item [contenteditable]{\n      outline: none;\n    }\n\n  .cdx-nested-list__item-body {\n      flex-grow: 2;\n    }\n\n  .cdx-nested-list__item-content,\n    .cdx-nested-list__item-children {\n      flex-basis: 100%;\n    }\n\n  .cdx-nested-list__item-content {\n      word-break: break-word;\n      white-space: pre-wrap;\n    }\n\n  .cdx-nested-list__item-children {}\n\n  .cdx-nested-list__item::before {\n      counter-increment: item;\n      margin-right: 5px;\n      white-space: nowrap;\n    }\n\n  .cdx-nested-list--ordered > .cdx-nested-list__item::before {\n    content: counters(item, ".") ". ";\n  }\n\n  .cdx-nested-list--ordered--lower-alpha > .cdx-nested-list__item::before {\n    content: counters(item, ".", lower-alpha) ". ";\n  }\n\n  .cdx-nested-list--unordered > .cdx-nested-list__item::before {\n    content: "•";\n  }\n\n  .cdx-nested-list__settings {\n    display: flex;\n  }\n\n  .cdx-nested-list__settings .cdx-settings-button {\n      width: 50%;\n    }\n',
            "",
          ]);
          const s = i;
        },
        645: (e) => {
          e.exports = function (e) {
            var t = [];
            return (
              (t.toString = function () {
                return this.map(function (t) {
                  var n = e(t);
                  return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
                }).join("");
              }),
              (t.i = function (e, n, r) {
                "string" == typeof e && (e = [[null, e, ""]]);
                var i = {};
                if (r)
                  for (var s = 0; s < this.length; s++) {
                    var o = this[s][0];
                    null != o && (i[o] = !0);
                  }
                for (var a = 0; a < e.length; a++) {
                  var d = [].concat(e[a]);
                  (r && i[d[0]]) ||
                    (n &&
                      (d[2]
                        ? (d[2] = "".concat(n, " and ").concat(d[2]))
                        : (d[2] = n)),
                    t.push(d));
                }
              }),
              t
            );
          };
        },
        379: (e, t, n) => {
          var r,
            i = (function () {
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
            s = [];
          function o(e) {
            for (var t = -1, n = 0; n < s.length; n++)
              if (s[n].identifier === e) {
                t = n;
                break;
              }
            return t;
          }
          function a(e, t) {
            for (var n = {}, r = [], i = 0; i < e.length; i++) {
              var a = e[i],
                d = t.base ? a[0] + t.base : a[0],
                c = n[d] || 0,
                l = "".concat(d, " ").concat(c);
              n[d] = c + 1;
              var u = o(l),
                h = { css: a[1], media: a[2], sourceMap: a[3] };
              -1 !== u
                ? (s[u].references++, s[u].updater(h))
                : s.push({ identifier: l, updater: f(h, t), references: 1 }),
                r.push(l);
            }
            return r;
          }
          function d(e) {
            var t = document.createElement("style"),
              r = e.attributes || {};
            if (void 0 === r.nonce) {
              var s = n.nc;
              s && (r.nonce = s);
            }
            if (
              (Object.keys(r).forEach(function (e) {
                t.setAttribute(e, r[e]);
              }),
              "function" == typeof e.insert)
            )
              e.insert(t);
            else {
              var o = i(e.insert || "head");
              if (!o)
                throw new Error(
                  "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                );
              o.appendChild(t);
            }
            return t;
          }
          var c,
            l =
              ((c = []),
              function (e, t) {
                return (c[e] = t), c.filter(Boolean).join("\n");
              });
          function u(e, t, n, r) {
            var i = n
              ? ""
              : r.media
              ? "@media ".concat(r.media, " {").concat(r.css, "}")
              : r.css;
            if (e.styleSheet) e.styleSheet.cssText = l(t, i);
            else {
              var s = document.createTextNode(i),
                o = e.childNodes;
              o[t] && e.removeChild(o[t]),
                o.length ? e.insertBefore(s, o[t]) : e.appendChild(s);
            }
          }
          function h(e, t, n) {
            var r = n.css,
              i = n.media,
              s = n.sourceMap;
            if (
              (i ? e.setAttribute("media", i) : e.removeAttribute("media"),
              s &&
                "undefined" != typeof btoa &&
                (r +=
                  "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(s)))),
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
          var p = null,
            m = 0;
          function f(e, t) {
            var n, r, i;
            if (t.singleton) {
              var s = m++;
              (n = p || (p = d(t))),
                (r = u.bind(null, n, s, !1)),
                (i = u.bind(null, n, s, !0));
            } else
              (n = d(t)),
                (r = h.bind(null, n, t)),
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
              (t.singleton =
                (void 0 === r &&
                  (r = Boolean(
                    window && document && document.all && !window.atob
                  )),
                r));
            var n = a((e = e || []), t);
            return function (e) {
              if (
                ((e = e || []),
                "[object Array]" === Object.prototype.toString.call(e))
              ) {
                for (var r = 0; r < n.length; r++) {
                  var i = o(n[r]);
                  s[i].references--;
                }
                for (var d = a(e, t), c = 0; c < n.length; c++) {
                  var l = o(n[c]);
                  0 === s[l].references && (s[l].updater(), s.splice(l, 1));
                }
                n = d;
              }
            };
          };
        },
      },
      t = {};
    function n(r) {
      var i = t[r];
      if (void 0 !== i) return i.exports;
      var s = (t[r] = { id: r, exports: {} });
      return e[r](s, s.exports, n), s.exports;
    }
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
      (n.d = (e, t) => {
        for (var r in t)
          n.o(t, r) &&
            !n.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
      (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
    var r = {};
    return (
      (() => {
        function e(e, t = null, n = {}) {
          const r = document.createElement(e);
          Array.isArray(t) ? r.classList.add(...t) : t && r.classList.add(t);
          for (const e in n) r[e] = n[e];
          return r;
        }
        function t(t) {
          const n = e("div");
          return n.appendChild(t), n.innerHTML;
        }
        function i(e) {
          let t;
          return (
            e.nodeType !== Node.ELEMENT_NODE
              ? (t = e.textContent)
              : ((t = e.innerHTML), (t = t.replaceAll("<br>", ""))),
            0 === t.trim().length
          );
        }
        n.d(r, { default: () => l });
        class s {
          constructor() {
            this.savedFakeCaret = void 0;
          }
          save() {
            const t = s.range,
              n = e("span");
            (n.hidden = !0), t.insertNode(n), (this.savedFakeCaret = n);
          }
          restore() {
            if (!this.savedFakeCaret) return;
            const e = window.getSelection(),
              t = new Range();
            t.setStartAfter(this.savedFakeCaret),
              t.setEndAfter(this.savedFakeCaret),
              e.removeAllRanges(),
              e.addRange(t),
              setTimeout(() => {
                this.savedFakeCaret.remove();
              }, 150);
          }
          static get range() {
            const e = window.getSelection();
            return e && e.rangeCount ? e.getRangeAt(0) : null;
          }
          static extractFragmentFromCaretPositionTillTheEnd() {
            const e = window.getSelection();
            if (!e.rangeCount) return;
            const t = e.getRangeAt(0);
            let n = t.startContainer;
            n.nodeType !== Node.ELEMENT_NODE && (n = n.parentNode);
            const r = n.closest("[contenteditable]");
            t.deleteContents();
            const i = t.cloneRange();
            return (
              i.selectNodeContents(r),
              i.setStart(t.endContainer, t.endOffset),
              i.extractContents()
            );
          }
          static focus(e, t = !0) {
            const n = document.createRange(),
              r = window.getSelection();
            n.selectNodeContents(e),
              n.collapse(t),
              r.removeAllRanges(),
              r.addRange(n);
          }
          static isAtStart() {
            const e = window.getSelection();
            if (e.focusOffset > 0) return !1;
            const t = e.focusNode;
            return s.getHigherLevelSiblings(t, "left").every((e) => i(e));
          }
          static getHigherLevelSiblings(e, t = "left") {
            let n = e;
            const r = [];
            for (; n.parentNode && "true" !== n.parentNode.contentEditable; )
              n = n.parentNode;
            const i = "left" === t ? "previousSibling" : "nextSibling";
            for (; n[i]; ) (n = n[i]), r.push(n);
            return r;
          }
        }
        const o =
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="12" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.79999 14L7.79999 7.2135C7.79999 7.12872 7.7011 7.0824 7.63597 7.13668L4.79999 9.5"/></svg>';
        var a = n(379),
          d = n.n(a),
          c = n(384);
        d()(c.Z, { insert: "head", singleton: !1 }), c.Z.locals;
        class l {
          static get isReadOnlySupported() {
            return !0;
          }
          static get enableLineBreaks() {
            return !0;
          }
          static get toolbox() {
            return { icon: o, title: "Nested List" };
          }
          constructor({ data: e, config: t, api: n, readOnly: r }) {
            (this.nodes = { wrapper: null }),
              (this.api = n),
              (this.readOnly = r),
              (this.config = t),
              (this.defaultListStyle =
                "ordered" === this.config.defaultStyle
                  ? "ordered"
                  : "unordered");
            const i = { style: this.defaultListStyle, items: [] };
            (this.data = e && Object.keys(e).length ? e : i),
              (this.caret = new s());
          }
          render() {
            return (
              (this.nodes.wrapper = this.makeListWrapper(this.data.style, [
                this.CSS.baseBlock,
              ])),
              this.data.items.length
                ? this.appendItems(this.data.items, this.nodes.wrapper)
                : this.appendItems(
                    [{ content: "", items: [] }],
                    this.nodes.wrapper
                  ),
              this.readOnly ||
                this.nodes.wrapper.addEventListener(
                  "keydown",
                  (e) => {
                    switch (e.key) {
                      case "Enter":
                        this.enterPressed(e);
                        break;
                      case "Backspace":
                        this.backspace(e);
                        break;
                      case "Tab":
                        e.shiftKey ? this.shiftTab(e) : this.addTab(e);
                    }
                  },
                  !1
                ),
              this.nodes.wrapper
            );
          }
          renderSettings() {
            return [
              {
                name: "unordered",
                label: this.api.i18n.t("Unordered"),
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="9" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 17H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 12H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 7H4.99002"/></svg>',
              },
              { name: "ordered", label: this.api.i18n.t("Ordered"), icon: o },
              { name: "ordered--lower-alpha", label: this.api.i18n.t("Ordered Lower Alpha"), icon: o },
            ].map((e) => ({
              name: e.name,
              icon: e.icon,
              label: e.label,
              isActive: this.data.style === e.name,
              closeOnActivate: !0,
              onActivate: () => {
                this.listStyle = e.name;
              },
            }));
          }
          static get pasteConfig() {
            return { tags: ["OL", "UL", "LI"] };
          }
          onPaste(e) {
            const t = e.detail.data;
            this.data = this.pasteHandler(t);
            const n = this.nodes.wrapper;
            n && n.parentNode.replaceChild(this.render(), n);
          }
          pasteHandler(e) {
            const { tagName: t } = e;
            let n, r;
            switch (t) {
              case "OL":
                (n = "ordered"), (r = "ol");
                break;
              case "UL":
              case "LI":
                (n = "unordered"), (r = "ul");
            }
            const i = { style: n, items: [] },
              s = (e) =>
                Array.from(e.querySelectorAll(":scope > li")).map((e) => {
                  const t = e.querySelector(`:scope > ${r}`),
                    n = t ? s(t) : [];
                  return {
                    content: e?.firstChild?.textContent || "",
                    items: n,
                  };
                });
            return (i.items = s(e)), i;
          }
          appendItems(e, t) {
            e.forEach((e) => {
              const n = this.createItem(e.content, e.items);
              t.appendChild(n);
            });
          }
          createItem(t, n = []) {
            const r = e("li", this.CSS.item),
              i = e("div", this.CSS.itemBody),
              s = e("div", this.CSS.itemContent, {
                innerHTML: t,
                contentEditable: !this.readOnly,
              });
            return (
              i.appendChild(s),
              r.appendChild(i),
              n && n.length > 0 && this.addChildrenList(r, n),
              r
            );
          }
          save() {
            const e = (t) =>
              Array.from(t.querySelectorAll(`:scope > .${this.CSS.item}`)).map(
                (t) => {
                  const n = t.querySelector(`.${this.CSS.itemChildren}`);
                  return {
                    content: this.getItemContent(t),
                    items: n ? e(n) : [],
                  };
                }
              );
            return { style: this.data.style, items: e(this.nodes.wrapper) };
          }
          addChildrenList(e, t) {
            const n = e.querySelector(`.${this.CSS.itemBody}`),
              r = this.makeListWrapper(void 0, [this.CSS.itemChildren]);
            this.appendItems(t, r), n.appendChild(r);
          }
          makeListWrapper(t = this.listStyle, n = []) {
            var i;
            var r;
            switch (t) {
                case "ordered":
                    i = this.CSS.wrapperOrdered;
                    r = "ol";
                    break;
                case "ordered--lower-alpha":
                    i = this.CSS.wrapperOrderedLowerAlpha;
                    r = "ol";
                    break;
                default:
                    i = this.CSS.wrapperUnordered;
                    r = "ul";
            }
            return n.push(i), e(r, [this.CSS.wrapper, ...n]);
          }
          get CSS() {
            return {
              baseBlock: this.api.styles.block,
              wrapper: "cdx-nested-list",
              wrapperOrdered: "cdx-nested-list--ordered",
              wrapperOrderedLowerAlpha: "cdx-nested-list--ordered--lower-alpha",
              wrapperUnordered: "cdx-nested-list--unordered",
              item: "cdx-nested-list__item",
              itemBody: "cdx-nested-list__item-body",
              itemContent: "cdx-nested-list__item-content",
              itemChildren: "cdx-nested-list__item-children",
              settingsWrapper: "cdx-nested-list__settings",
              settingsButton: this.api.styles.settingsButton,
              settingsButtonActive: this.api.styles.settingsButtonActive,
            };
          }
          get listStyle() {
            return this.data.style || this.defaultListStyle;
          }
          set listStyle(e) {
            const t = Array.from(
              this.nodes.wrapper.querySelectorAll(`.${this.CSS.wrapper}`)
            );
            t.push(this.nodes.wrapper),
              t.forEach((t) => {
                t.classList.toggle(
                  this.CSS.wrapperUnordered,
                  "unordered" === e
                ),
                  t.classList.toggle(this.CSS.wrapperOrdered, "ordered" === e);
                  t.classList.toggle(this.CSS.wrapperOrderedLowerAlpha, "ordered--lower-alpha" === e);
              }),
              (this.data.style = e);
          }
          get currentItem() {
            let e = window.getSelection().anchorNode;
            return (
              e.nodeType !== Node.ELEMENT_NODE && (e = e.parentNode),
              e.closest(`.${this.CSS.item}`)
            );
          }
          enterPressed(e) {
            const n = this.currentItem;
            e.stopPropagation(), e.preventDefault();
            const r = 0 === this.getItemContent(n).trim().length,
              i = n.parentNode === this.nodes.wrapper,
              o = null === n.nextElementSibling;
            if (i && o && r) return void this.getOutOfList();
            if (o && r) return void this.unshiftItem();
            const a = t(s.extractFragmentFromCaretPositionTillTheEnd()),
              d = n.querySelector(`.${this.CSS.itemChildren}`),
              c = this.createItem(a, void 0);
            d && Array.from(d.querySelectorAll(`.${this.CSS.item}`)).length > 0
              ? d.prepend(c)
              : n.after(c),
              this.focusItem(c);
          }
          unshiftItem() {
            const e = this.currentItem,
              t = e.parentNode.closest(`.${this.CSS.item}`);
            if (!t) return;
            this.caret.save(), t.after(e), this.caret.restore();
            const n = t.querySelector(`.${this.CSS.itemChildren}`);
            0 === n.children.length && n.remove();
          }
          getItemContent(e) {
            const t = e.querySelector(`.${this.CSS.itemContent}`);
            return i(t) ? "" : t.innerHTML;
          }
          focusItem(e, t = !0) {
            const n = e.querySelector(`.${this.CSS.itemContent}`);
            s.focus(n, t);
          }
          getOutOfList() {
            this.currentItem.remove(),
              this.api.blocks.insert(),
              this.api.caret.setToBlock(this.api.blocks.getCurrentBlockIndex());
          }
          backspace(e) {
            if (!s.isAtStart()) return;
            e.preventDefault();
            const n = this.currentItem,
              r = n.previousSibling,
              i = n.parentNode.closest(`.${this.CSS.item}`);
            if (!r && !i) return;
            let o;
            if ((e.stopPropagation(), r)) {
              const e = r.querySelectorAll(`.${this.CSS.item}`);
              o = Array.from(e).pop() || r;
            } else o = i;
            const a = t(s.extractFragmentFromCaretPositionTillTheEnd()),
              d = o.querySelector(`.${this.CSS.itemContent}`);
            s.focus(d, !1),
              this.caret.save(),
              d.insertAdjacentHTML("beforeend", a);
            let c = n.querySelectorAll(
              `.${this.CSS.itemChildren} > .${this.CSS.item}`
            );
            (c = Array.from(c)),
              (c = c.filter(
                (e) => e.parentNode.closest(`.${this.CSS.item}`) === n
              )),
              c.reverse().forEach((e) => {
                r ? o.after(e) : n.after(e);
              }),
              n.remove(),
              this.caret.restore();
          }
          addTab(e) {
            e.stopPropagation(), e.preventDefault();
            const t = this.currentItem,
              n = t.previousSibling;
            if (!n) return;
            const r = n.querySelector(`.${this.CSS.itemChildren}`);
            if ((this.caret.save(), r)) r.appendChild(t);
            else {
              const e = this.makeListWrapper(void 0, [this.CSS.itemChildren]),
                r = n.querySelector(`.${this.CSS.itemBody}`);
              e.appendChild(t), r.appendChild(e);
            }
            this.caret.restore();
          }
          shiftTab(e) {
            e.stopPropagation(), e.preventDefault(), this.unshiftItem();
          }
          static joinRecursive(e) {
            return e.items
              .map((e) => `${e.content} ${l.joinRecursive(e)}`)
              .join("");
          }
          static get conversionConfig() {
            return {
              export: (e) => l.joinRecursive(e),
              import: (e) => ({
                items: [{ content: e, items: [] }],
                style: "unordered",
              }),
            };
          }
        }
      })(),
      r.default
    );
  })();
});
