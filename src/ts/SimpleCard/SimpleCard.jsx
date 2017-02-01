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
var styles = no_important_1.StyleSheet.create({
    base: {
        boxShadow: "0 2px 1px rgba(0,0,0,0.08),0px 1px 2px 0px rgba(0,0,0,0.18)",
        WebkitTapHighlightColor: "rgba(0,0,0,0)",
        padding: "16px",
        transition: "all 0.2s cubic-bezier(.25,.8,.25,1)",
        borderRadius: "2px",
        display: "inline-block",
        position: "relative",
        userSelect: "none",
        backgroundColor: "#FFFFFF"
    },
    hover: {
        ':hover': {
            boxShadow: "0 10px 18px rgba(0,0,0,0.25), 0 6px 6px rgba(0,0,0,0.22)"
        },
    }
});
var SimpleCard = (function (_super) {
    __extends(SimpleCard, _super);
    function SimpleCard(props) {
        return _super.call(this, props) || this;
    }
    SimpleCard.prototype.render = function () {
        var _a = this.props, hover = _a.hover, className = _a.className, other = __rest(_a, ["hover", "className"]);
        var styleBase = [styles.base];
        if (this.props.hover)
            styleBase.push(styles.hover);
        console.log(className);
        var lastClassName = [no_important_1.css(styleBase.slice()), className].join(" ");
        console.log(lastClassName);
        return (<div className={lastClassName} {...other}>
                {this.props.children}
            </div>);
    };
    return SimpleCard;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SimpleCard;
