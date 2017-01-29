"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var React = require("react");
var no_important_1 = require("aphrodite/no-important");
var cssClass;
var opacityKeyframes = {
    'from': {
        opacity: 0,
    },
    'to': {
        opacity: 1,
    }
};
var opacityKeyframesErase = {
    'from': {
        opacity: 1,
    },
    'to': {
        opacity: 0,
    }
};
var openOnce = false;
var SimpleDrawer = (function (_super) {
    __extends(SimpleDrawer, _super);
    function SimpleDrawer(props) {
        var _this = _super.call(this, props) || this;
        _this.prevCloseOffset = "-220px";
        _this.prevOpenSpeed = 0.2;
        _this.prevOpen = _this.props.open;
        return _this;
    }
    SimpleDrawer.prototype.getDrawerStyle = function (openSpeedSec, closeOffset) {
        if (cssClass) {
            return cssClass;
        }
        cssClass = no_important_1.StyleSheet.create({
            overlay: {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 10000,
                userSelect: "none",
                backgroundColor: "rgba(140,140,140 , 0.5)",
            },
            nav: {
                width: "200px",
                height: "100%",
                backgroundColor: "#FFF",
                zIndex: 10001,
                position: "fixed",
                top: 0,
                WebkitTapHighlightColor: "rgba(0,0,0,0)",
                transition: "all " + openSpeedSec + "s cubic-bezier(.25,.8,.25,1)",
            },
            open: {
                left: 0
            },
            close: {
                left: closeOffset
            },
            overlayOpenInit: {
                opacity: 1
            },
            overlayCloseInit: {
                opacity: 0
            },
            overlayOpen: {
                animationName: [opacityKeyframes],
                animationDuration: openSpeedSec + "s",
            },
            overlayClose: {
                animationName: [opacityKeyframesErase],
                animationDuration: openSpeedSec + "s",
            }
        });
        return cssClass;
    };
    SimpleDrawer.prototype.componentWillUpdate = function () {
    };
    SimpleDrawer.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, style = _a.style, overlayClassName = _a.overlayClassName, overlayStyle = _a.overlayStyle, navClassName = _a.navClassName, navStyle = _a.navStyle, open = _a.open, navRender = _a.navRender, onOverlayTap = _a.onOverlayTap, closeOffset = _a.closeOffset, openSpeedSec = _a.openSpeedSec, other = __rest(_a, ["className", "style", "overlayClassName", "overlayStyle", "navClassName", "navStyle", "open", "navRender", "onOverlayTap", "closeOffset", "openSpeedSec"]);
        if (openSpeedSec != null && openSpeedSec != this.prevOpenSpeed) {
            this.prevOpenSpeed = openSpeedSec;
            cssClass = null;
        }
        if (closeOffset != null && closeOffset != this.prevCloseOffset) {
            this.prevCloseOffset = closeOffset;
            cssClass = null;
        }
        var overlayClassNameBase = [this.getDrawerStyle(this.prevOpenSpeed, this.prevCloseOffset).overlay];
        overlayClassName && overlayClassNameBase.push(overlayClassName);
        var navClassNameBase = [this.getDrawerStyle(this.prevOpenSpeed, this.prevCloseOffset).nav];
        navClassName && navClassNameBase.push(navClassName);
        if (open) {
            navClassNameBase.push(this.getDrawerStyle(this.prevOpenSpeed, this.prevCloseOffset).open);
            if (openOnce) {
                overlayClassNameBase.push(this.getDrawerStyle(this.prevOpenSpeed, this.prevCloseOffset).overlayOpen);
                this.overlayComponent.style.width = "100%";
            }
            else {
                overlayClassNameBase.push(this.getDrawerStyle(this.prevOpenSpeed, this.prevCloseOffset).overlayOpenInit);
            }
            openOnce = true;
        }
        else {
            navClassNameBase.push(this.getDrawerStyle(this.prevOpenSpeed, this.prevCloseOffset).close);
            if (openOnce) {
                overlayClassNameBase.push(this.getDrawerStyle(this.prevOpenSpeed, this.prevCloseOffset).overlayClose);
            }
            else
                [
                    overlayClassNameBase.push(this.getDrawerStyle(this.prevOpenSpeed, this.prevCloseOffset).overlayCloseInit)
                ];
            setTimeout(function () {
                if (!_this.prevOpen) {
                    _this.overlayComponent.style.width = "0%";
                }
            }, this.prevOpenSpeed * 1000);
        }
        openOnce = true;
        this.prevOpen = open ? open : false;
        var lastOverlayClassName = [no_important_1.css(overlayClassNameBase.slice())].join(" ");
        var lastNavClassName = [no_important_1.css(navClassNameBase.slice())].join(" ");
        var navStyleBase = navStyle ? navStyle : {};
        console.log(navStyleBase);
        return (<div>
                <div className={lastNavClassName} style={navStyleBase}>
                    {navRender && navRender()}
                </div>
                <div className={lastOverlayClassName} onClick={function (e) {
            if (!open) {
                return true;
            }
            if (_this.props.onOverlayTap) {
                _this.props.onOverlayTap(e);
                e.preventDefault();
            }
        }} ref={function (ref) { return _this.overlayComponent = ref; }}/>
            </div>);
    };
    return SimpleDrawer;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SimpleDrawer;
