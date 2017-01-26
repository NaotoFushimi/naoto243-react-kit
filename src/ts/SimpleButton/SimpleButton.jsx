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
var aphrodite_1 = require("aphrodite");
var Ink = require("react-ink");
var styles = aphrodite_1.StyleSheet.create({
    base: {
        boxShadow: "0 2px 4px rgba(0,0,0,0.20),0 1px 1px 0px rgba(0,0,0,0.24)",
        WebkitTapHighlightColor: "rgba(0,0,0,0)",
        padding: "4px 12px 4px 12px",
        transition: "all 0.2s cubic-bezier(.25,.8,.25,1)",
        borderRadius: "4px",
        display: "inline-block",
        position: "relative",
        userSelect: "none",
        textAlign: "center",
        cursor: "pointer",
    },
    hover: {
        ':hover': {
            boxShadow: "0 10px 10px rgba(0,0,0,0.15), 0 6px 6px rgba(0,0,0,0.16)"
        },
    },
    click: {
        boxShadow: "0 2px 4px rgba(0,0,0,0.20),0 1px 1px 0px rgba(0,0,0,0.24)"
    }
});
var SimpleButton = (function (_super) {
    __extends(SimpleButton, _super);
    function SimpleButton(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isAnimate: false
        };
        return _this;
    }
    SimpleButton.prototype.setTap = function () {
        var _this = this;
        this.setState({ isAnimate: true });
        setTimeout(function () {
            _this.setState({ isAnimate: false });
        }, 120);
    };
    SimpleButton.prototype.render = function () {
        var _this = this;
        var styleBase = [styles.base];
        if (this.state.isAnimate) {
            styleBase.push(styles.click);
        }
        else {
            styleBase.push(styles.hover);
        }
        var lastClassName = [aphrodite_1.css(styleBase.concat([this.props.className]))].join(" ");
        var other = __rest(this.props, []);
        return (<div onClick={function (e) {
            if (_this.props.onClick != null) {
                _this.props.onClick(e);
            }
            _this.setTap();
        }} className={lastClassName} {...other}>
                {this.props.children}
            </div>);
    };
    return SimpleButton;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SimpleButton;
