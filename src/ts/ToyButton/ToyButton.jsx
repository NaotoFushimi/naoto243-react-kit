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
var aphrodite_1 = require("glamor/aphrodite");
var styles = aphrodite_1.StyleSheet.create({
    blue: {
        backgroundColor: '#55acee',
        boxShadow: "0px 5px 0px 0px #3C93D5"
    },
    active: {
        ':active': {
            transform: 'translate(0px, 5px)',
            boxShadow: "0px 1px 0px 0px"
        }
    },
    button: {
        borderRadius: "5px",
        padding: "15px 25px",
        textDecoration: "none",
        color: "#FFF",
        position: "relative",
        display: "inline-block",
        cursor: "pointer"
    }
});
/*
* .btn {
  border-radius: 5px;
  padding: 15px 25px;
  font-size: 22px;
  text-decoration: none;
  margin: 20px;
  color: #fff;
  position: relative;
  display: inline-block;
}
*
* */
var ToyButton = (function (_super) {
    __extends(ToyButton, _super);
    function ToyButton(props) {
        return _super.call(this, props) || this;
    }
    ToyButton.prototype.render = function () {
        var _a = this.props, className = _a.className, buttonColor = _a.buttonColor, shadowColor = _a.shadowColor, otherProps = __rest(_a, ["className", "buttonColor", "shadowColor"]);
        var colorMe = aphrodite_1.StyleSheet.create({
            color: {
                backgroundColor: buttonColor ? buttonColor : '#55acee',
                boxShadow: "0px 5px 0px 0px " + (shadowColor ? shadowColor : "#3C93D5")
            }
        });
        var baseClassName = aphrodite_1.css(styles.active, styles.button, colorMe.color);
        var lastClassName = [baseClassName, className].join(" ");
        return (<a className={lastClassName} {...otherProps}>
                {this.props.children}
            </a>);
    };
    return ToyButton;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ToyButton;
