var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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
import * as React from 'react';
import { StyleSheet, css } from 'glamor/aphrodite';
let styles = StyleSheet.create({
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
export default class ToyButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const _a = this.props, { className, buttonColor, shadowColor } = _a, otherProps = __rest(_a, ["className", "buttonColor", "shadowColor"]);
        const colorMe = StyleSheet.create({
            color: {
                backgroundColor: buttonColor ? buttonColor : '#55acee',
                boxShadow: `0px 5px 0px 0px ${shadowColor ? shadowColor : "#3C93D5"}`
            }
        });
        const baseClassName = css(styles.active, styles.button, colorMe.color);
        const lastClassName = [baseClassName, className].join(" ");
        return (React.createElement("a", __assign({ className: lastClassName }, otherProps), this.props.children));
    }
}
