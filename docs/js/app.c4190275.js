(function (e) { function t(t) { for (var r, o, i = t[0], u = t[1], c = t[2], f = 0, h = []; f < i.length; f++)o = i[f], Object.prototype.hasOwnProperty.call(a, o) && a[o] && h.push(a[o][0]), a[o] = 0; for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]); l && l(t); while (h.length) h.shift()(); return s.push.apply(s, c || []), n() } function n() { for (var e, t = 0; t < s.length; t++) { for (var n = s[t], r = !0, i = 1; i < n.length; i++) { var u = n[i]; 0 !== a[u] && (r = !1) } r && (s.splice(t--, 1), e = o(o.s = n[0])) } return e } var r = {}, a = { app: 0 }, s = []; function o(t) { if (r[t]) return r[t].exports; var n = r[t] = { i: t, l: !1, exports: {} }; return e[t].call(n.exports, n, n.exports, o), n.l = !0, n.exports } o.m = e, o.c = r, o.d = function (e, t, n) { o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, o.r = function (e) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, o.t = function (e, t) { if (1 & t && (e = o(e)), 8 & t) return e; if (4 & t && "object" === typeof e && e && e.__esModule) return e; var n = Object.create(null); if (o.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var r in e) o.d(n, r, function (t) { return e[t] }.bind(null, r)); return n }, o.n = function (e) { var t = e && e.__esModule ? function () { return e["default"] } : function () { return e }; return o.d(t, "a", t), t }, o.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, o.p = "/"; var i = window["webpackJsonp"] = window["webpackJsonp"] || [], u = i.push.bind(i); i.push = t, i = i.slice(); for (var c = 0; c < i.length; c++)t(i[c]); var l = u; s.push([0, "chunk-vendors"]), n() })({ 0: function (e, t, n) { e.exports = n("56d7") }, "201b": function (e, t, n) { }, "4a21": function (e, t, n) { e.exports = n.p + "/jeanjouliacode.github.io/randomizer/partyTime.7f9f1678.gif" }, "56d7": function (e, t, n) { "use strict"; n.r(t); n("e260"), n("e6cf"), n("cca6"), n("a79d"); var r = n("2b0e"), a = function () { var e = this, t = e.$createElement, n = e._self._c || t; return n("div", { attrs: { id: "app" } }, [n("router-view")], 1) }, s = [], o = (n("5c0b"), n("2877")), i = {}, u = Object(o["a"])(i, a, s, !1, null, null, null), c = u.exports, l = n("8c4f"), f = function () { var e = this, t = e.$createElement, r = e._self._c || t; return r("BoilerPlateHome", { scopedSlots: e._u([{ key: "header", fn: function () { return [r("h1", [e._v("Random wheel")]), r("span", { staticClass: "home__answer" }, [e._v(e._s(e.answer))]), e.showPartyFavors ? r("img", { staticClass: "home__party_favors", attrs: { src: n("4a21"), alt: "" } }) : e._e()] }, proxy: !0 }, { key: "main", fn: function () { return [r("SpinningWheel", { ref: "wheel", staticClass: "home__spiningWheel", attrs: { values: e.wheelValues, font: "Balsamiq Sans" }, on: { answer: e.handleWheelResponse } })] }, proxy: !0 }, { key: "form", fn: function () { return [r("div", { staticClass: "home__form" }, [r("Select", { staticClass: "home__selecy", attrs: { options: e.selectOption }, model: { value: e.selectedOption, callback: function (t) { e.selectedOption = t }, expression: "selectedOption" } }), r("TextArea", { staticClass: "home__textArea", attrs: { content: e.testAreaContent }, on: { input: e.handleTextAreaChange } }), e._v(" "), r("div", { staticClass: "home__action-container" }, ["Strength" === e.selectedOption.value ? r("StrengthBar", { attrs: { disabled: e.buttonDisabled }, on: { result: e.handleStengthResult } }) : r("Button", { staticClass: "home__spin-button", attrs: { label: "Spin the wheel", disabled: e.buttonDisabled }, on: { click: e.spinTheWheel } }), r("Button", { staticClass: "home__spin-button", attrs: { label: "Remove answer", disabled: e.buttonDisabled || "" === e.answer, secondary: !0 }, on: { click: e.removeAnswer } })], 1)], 1)] }, proxy: !0 }]) }) }, h = [], p = n("1da1"), d = (n("4de4"), n("d3b7"), n("ac1f"), n("1276"), n("00b4"), n("159b"), n("99af"), n("96cf"), n("f432")), b = function () { var e = this, t = e.$createElement, n = e._self._c || t; return n("div", { staticClass: "home" }, [n("div", { staticClass: "home__header" }, [e._t("header")], 2), n("div", { staticClass: "home__main" }, [e._t("main")], 2), n("div", { staticClass: "home__form" }, [e._t("form")], 2)]) }, m = [], v = (n("e4f1"), {}), w = Object(o["a"])(v, b, m, !1, null, "1103ea7e", null), g = w.exports, _ = "https://www.random.org/integers/?num=1&min=1&max=10000&col=1&base=10&format=plain&rnd=new"; function y() { return x.apply(this, arguments) } function x() { return x = Object(p["a"])(regeneratorRuntime.mark((function e() { var t, n; return regeneratorRuntime.wrap((function (e) { while (1) switch (e.prev = e.next) { case 0: return e.next = 2, fetch(_); case 2: if (t = e.sent, 200 !== t.status) { e.next = 10; break } return e.next = 6, t.text(); case 6: return n = e.sent, e.abrupt("return", { success: !0, data: parseInt(n) / 1e4 }); case 10: return e.abrupt("return", { success: !1, error: "error while calling the API" }); case 11: case "end": return e.stop() } }), e) }))), x.apply(this, arguments) } var O = { getRandomNumberFromAPI: y }, S = "key_textarea_storage"; function C(e) { localStorage.setItem(S, e) } function P() { return localStorage.getItem(S) } var A = { name: "Home", components: { Button: d["Button"], TextArea: d["TextArea"], Select: d["Select"], SpinningWheel: d["SpinningWheel"], BoilerPlateHome: g, StrengthBar: d["StrengthBar"] }, data: function () { return { wheelValues: [], answer: "", answerIndex: null, selectOption: ["Regular", "API", "Strength"], selectedOption: { index: 0, value: "Regular" }, buttonDisabled: !1, showPartyFavors: !1, testAreaContent: "", showStrengthBar: !1 } }, methods: { spinTheWheel: function () { var e = this; return Object(p["a"])(regeneratorRuntime.mark((function t() { var n, r; return regeneratorRuntime.wrap((function (t) { while (1) switch (t.prev = t.next) { case 0: n = 0, e.buttonDisabled = !0, t.t0 = e.selectedOption.value, t.next = "Regular" === t.t0 ? 5 : "API" === t.t0 ? 7 : 15; break; case 5: return n = e.getNumberOfTurn(Math.random()), t.abrupt("break", 17); case 7: return t.next = 9, O.getRandomNumberFromAPI(); case 9: if (r = t.sent, !r.success) { t.next = 13; break } return n = e.getNumberOfTurn(r.data), t.abrupt("break", 17); case 13: return e.buttonDisabled = !1, t.abrupt("return"); case 15: return e.buttonDisabled = !1, t.abrupt("return"); case 17: e.$refs.wheel.spin(n); case 18: case "end": return t.stop() } }), t) })))() }, handleStengthResult: function (e) { this.buttonDisabled = !0, this.$refs.wheel.spin(10 * e) }, handleTextAreaChange: function (e) { this.testAreaContent = e; var t = e.split("\n").filter((function (e) { return !/^\s+$/.test(e) && "" !== e })); this.wheelValues = t, C(e) }, getNumberOfTurn: function (e) { return 5 * e + 3 }, handleWheelResponse: function (e) { this.answer = e.answer, this.answerIndex = e.index, this.buttonDisabled = !1, this.displayPartyFavors() }, removeAnswer: function () { var e = this, t = this.testAreaContent.split("\n"), n = !1, r = null, a = 0; t.forEach((function (t) { /^\s+$/.test(t) || "" == t || a++, a - 1 !== e.answerIndex || n ? r = null === r ? t : "".concat(r, "\n").concat(t) : n = !0 })), this.testAreaContent = r, this.answer = "" }, displayPartyFavors: function () { var e = this; this.showPartyFavors = !0, setTimeout((function () { return e.showPartyFavors = !1 }), 2e3) } }, mounted: function () { var e = P(); this.testAreaContent = null !== e && void 0 !== e ? e : "" } }, k = A, R = (n("609b"), Object(o["a"])(k, f, h, !1, null, "cc1e2ad2", null)), T = R.exports; r["a"].use(l["a"]); var j = [{ path: "/", name: "Home", component: T }], B = new l["a"]({ routes: j }), I = B, D = n("2f62"); r["a"].use(D["a"]); var F = new D["a"].Store({ state: {}, mutations: {}, actions: {}, modules: {} }); r["a"].config.productionTip = !1, new r["a"]({ router: I, store: F, render: function (e) { return e(c) } }).$mount("#app") }, "5c0b": function (e, t, n) { "use strict"; n("9c0c") }, "609b": function (e, t, n) { "use strict"; n("fa2e") }, "9c0c": function (e, t, n) { }, e4f1: function (e, t, n) { "use strict"; n("201b") }, fa2e: function (e, t, n) { } });
//# sourceMappingURL=app.c4190275.js.map