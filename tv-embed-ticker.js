! function() {
    "use strict";
    var t = "/static/bundles/",
        e = "https://s3.tradingview.com/",
        i = {
            events: "external-embedding/embed-widget-events.js",
            hotlists: "external-embedding/embed-widget-hotlists.js",
            marketoverview: "external-embedding/embed-widget-market-overview.js",
            tickers: "external-embedding/embed-widget-tickers.js",
            forex_cross_rates: "external-embedding/embed-widget-forex-cross-rates.js",
            market_quotes: "external-embedding/embed-widget-market-quotes.js",
            forex_heat_map: "external-embedding/embed-widget-forex-heat-map.js",
            screener: "external-embedding/embed-widget-screener.js"
        };
    var r = function(e, i) {
            var r = this;
            void 0 === i && (i = "json"), this.pathname = ("battle" === this._environment() ? "/" : t) + e, this.settingsFormat = i, this._findScripts().forEach(function(t) {
                return r._replaceScript(t)
            })
        },
        n = {
            embedWidgetSitePath: {
                configurable: !0
            },
            widgetName: {
                configurable: !0
            },
            propertiesToWorkWith: {
                configurable: !0
            },
            utmInfo: {
                configurable: !0
            },
            iframeSrcBase: {
                configurable: !0
            },
            propertiesToSkipInHash: {
                configurable: !0
            },
            propertiesToGetParams: {
                configurable: !0
            },
            cloudfrontHost: {
                configurable: !0
            }
        };
    n.embedWidgetSitePath.get = function() {
        throw new Error("Method must be overridden")
    }, n.widgetName.get = function() {
        throw new Error("Method must be overridden")
    }, n.propertiesToWorkWith.get = function() {
        return []
    }, n.utmInfo.get = function() {
        return {
            utm_source: location.hostname,
            utm_medium: "widget",
            utm_campaign: this.widgetName
        }
    }, r.prototype._environment = function() {
        var t = "www.tradingview.com" === location.host || "wwwcn.tradingview.com" === location.host || "dwq4do82y8xi7.cloudfront.net" === location.host || "s.tradingview.com" === location.host || "i18n.tradingview.com" === location.host || "partial.tradingview.com" === location.host || location.host.match(/^[a-z]{2}\.tradingview\.com/) || location.host.match(/prod-[^.]+.tradingview.com/) ? "battle" : -1 !== location.href.indexOf("tradingview.com") ? "staging" : location.host.match(/webcharts/) ? "staging_local" : (location.host.match(/^localhost(:\d+)?$/), "local");
        return "local" === t && null === location.host.match(/^localhost(:\d+)?$/) && (t = "battle"), t
    }, r.prototype.filterRawSettings = function(t) {
        var e = this.propertiesToSkipInHash.concat(this.propertiesToWorkWith),
            i = {};
        return Object.keys(t).forEach(function(r) {
            -1 !== e.indexOf(r) && (i[r] = t[r])
        }), i
    }, n.iframeSrcBase.get = function() {
        var t = "";
        return "battle" === this._environment() ? t = "https://s.tradingview.com" : "staging" === this._environment() && -1 !== location.hostname.indexOf("beta.tradingview.com") && (t = "https://betacdn.tradingview.com"), this.settings.customer && -1 !== this.propertiesToSkipInHash.indexOf("customer") && (t += "/" + this.settings.customer), t + this.embedWidgetSitePath
    }, n.propertiesToSkipInHash.get = function() {
        return []
    }, n.propertiesToGetParams.get = function() {
        return ["locale", "whitelabel"]
    }, n.cloudfrontHost.get = function() {
        var t = document.createElement("a");
        return t.href = e, t.host
    }, r.prototype._findScripts = function() {
        var t, e = document.getElementsByTagName("script"),
            i = [],
            r = null;
        for (t = e.length; t--;) {
            var n = e[t].src;
            if (n) {
                r || (r = document.createElement("a")), r.href = n;
                var o = ("/" === r.pathname[0] ? "" : "/") + r.pathname,
                    a = r.host === this.cloudfrontHost || "d33t3vvu2t2yu5.cloudfront.net" === r.host;
                o !== this.pathname || "battle" === this._environment() && !a || i.push(e[t])
            }
        }
        return i
    }, r.prototype._replaceScript = function(t) {
        var e, i, r;
        if (this.script = t, "json" === this.settingsFormat ? e = this._scriptContentToJSON() : "stroke" === this.settingsFormat && (e = t.innerHTML.trim()), e)
            if (this.settings = this.filterRawSettings(e), i = this.settings, r = this.utmInfo, Object.keys(r).forEach(function(t) {
                    i[t] = r[t]
                }), this._isValidSettings()) {
                var n, o = isNaN(this.settings.height) ? this.settings.height : this.settings.height + "px",
                    a = isNaN(this.settings.width) ? this.settings.width : this.settings.width + "px";
                this.script.parentNode && this.script.parentNode.classList.contains("tradingview-widget-container") ? this.iframeContainer = this.script.parentNode : this.iframeContainer = document.createElement("div"), this.iframeContainer.style.width = a, this.iframeContainer.style.height = o, this.iframeContainer.appendChild(((n = document.createElement("style")).innerHTML = "\n\t.tradingview-widget-copyright {\n\t\tfont-size: 13px !important;\n\t\tline-height: 32px !important;\n\t\ttext-align: center !important;\n\t\tvertical-align: middle !important;\n\t\tfont-family: 'Trebuchet MS', Tahoma, Arial, sans-serif !important;\n\t\tcolor: #9db2bd !important;\n\t}\n\n\t.tradingview-widget-copyright .blue-text {\n\t\tcolor: #3bb3e4 !important;\n\t}\n\n\t.tradingview-widget-copyright a {\n\t\ttext-decoration: none !important;\n\t\tcolor: #9db2bd !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited {\n\t\tcolor: #9db2bd !important;\n\t}\n\n\t.tradingview-widget-copyright a:hover .blue-text {\n\t\tcolor: #38acdb !important;\n\t}\n\n\t.tradingview-widget-copyright a:active .blue-text {\n\t\tcolor: #299dcd !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited .blue-text {\n\t\tcolor: #3bb3e4 !important;\n\t}\n\t", n));
                var s = this._extractOldStyleEmbedCopyrightFromDOM(),
                    c = s && !this.settings.whitelabel,
                    h = s || this.iframeContainer.querySelector(".tradingview-widget-copyright") ? "calc(" + o + " - 32px)" : o;
                this.iframe = this._createIframe(h, a, t.id);
                var d = this.iframeContainer.querySelector(".tradingview-widget-container__widget");
                if (d ? (this.script.parentNode.replaceChild(this.iframe, d), this.script.parentNode.removeChild(this.script)) : (this.iframeContainer.appendChild(this.iframe), this.script.parentNode.replaceChild(this.iframeContainer, this.script)), c) {
                    var l = document.createElement("div");
                    l.style.height = "32px", l.style.lineHeight = "32px", l.style.width = a, l.style.textAlign = "center", l.style.verticalAlign = "middle", l.innerHTML = s.innerHTML, this.iframeContainer.appendChild(l)
                }
            } else this._doEmergencyReplacement("Settings is not valid")
    }, r.prototype._isValidSettings = function() {
        var t = function(t) {
            if (void 0 === t) return !0;
            var e = parseInt(t) + "%" == t + "";
            return parseInt(t) + "" == t + "" || e
        };
        return t(this.settings.width) && t(this.settings.height)
    }, r.prototype._buildGetQueryString = function() {
        var t = this,
            e = this.propertiesToGetParams.filter(function(e) {
                return t.settings[e]
            }).map(function(e) {
                return e + "=" + t.settings[e]
            }).join("&");
        return e ? "?" + e : ""
    }, r.prototype._buildHashString = function(t) {
        var e = this,
            i = {};
        return t && (i.frameElementId = t), Object.keys(this.settings).forEach(function(t) {
            -1 === e.propertiesToSkipInHash.indexOf(t) && (i[t] = e.settings[t])
        }), Object.keys(i).length > 0 ? "#" + encodeURIComponent(JSON.stringify(i)) : ""
    }, r.prototype._scriptContentToJSON = function() {
        var t = this.script.innerHTML.trim();
        try {
            return JSON.parse(t)
        } catch (t) {
            return this._doEmergencyReplacement(), console.warn("Embed widget settings parse error: ", t), null
        }
    }, r.prototype._createIframe = function(t, e, i) {
        var r = document.createElement("iframe");
        i && (r.id = i), this.settings.enableScrolling || r.setAttribute("scrolling", "no"), r.setAttribute("allowtransparency", !0), r.setAttribute("frameborder", 0), r.style.boxSizing = "border-box", r.style.height = t, r.style.width = e;
        var n = this.iframeSrcBase + this._buildGetQueryString() + this._buildHashString(i);
        return r.setAttribute("src", n), r
    }, r.prototype._doEmergencyReplacement = function(t) {
        var e = document.createElement("div");
        e.innerHTML = t || "Something gone wrong", this.script.parentNode.replaceChild(e, this.script), this._extractOldStyleEmbedCopyrightFromDOM()
    }, r.prototype._extractOldStyleEmbedCopyrightFromDOM = function() {
        return function(t) {
            if (null === t) return null;
            var e = t.querySelector("#tradingview-copyright"),
                i = t.querySelector("#tradingview-quotes"),
                r = e || i;
            return r && t.removeChild(r), r
        }(this.script.parentNode)
    }, Object.defineProperties(r.prototype, n), new(function(t) {
        function e() {
            t.apply(this, arguments)
        }
        t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
        var i = {
            widgetName: {
                configurable: !0
            },
            embedWidgetSitePath: {
                configurable: !0
            },
            propertiesToWorkWith: {
                configurable: !0
            },
            propertiesToGetParams: {
                configurable: !0
            }
        };
        return i.widgetName.get = function() {
            return "tickers"
        }, i.embedWidgetSitePath.get = function() {
            return "/tickerswidgetembed/"
        }, i.propertiesToWorkWith.get = function() {
            return ["symbols", "linkPageTemplate", "timeframe", "locale", "whitelabel", "customer"]
        }, e.prototype.filterRawSettings = function(e) {
            var i = t.prototype.filterRawSettings.call(this, e);
            return i.width = "100%", i.height = this._calculateHeight(e.whitelabel), i
        }, e.prototype._calculateHeight = function(t) {
            var e = 0,
                i = this.script.parentNode.querySelector(".tradingview-widget-copyright"),
                r = this.script.parentNode.querySelector("#tradingview-copyright");
            if (!t && (i || r)) {
                e += 32
            }
            return e += 72
        }, i.propertiesToGetParams.get = function() {
            return ["whitelabel"]
        }, Object.defineProperties(e.prototype, i), e
    }(r))(i.tickers)
}();