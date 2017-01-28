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
import { css } from 'glamor';
import { compileInit } from "../Asahi/Asahi";
let box = css({ backgroundColor: 'red' });
const compiled = compileInit({
    base: `
        background-color : yellow;
        width : 100%;
    `,
    fuka: `
        background-color : #202020;
    `,
    btn: `
  display: block;
  height: 60px;
  padding: 0;
  width: 191px;
  background: none;
  margin: auto;
  border: 2px solid #1ECD97;
  font-size: 18px;
  font-family: "Lato";
  color: #1ECD97;
  cursor: pointer;
  outline: none;
  text-align: center;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -moz-border-radius: 30px;
  -webkit-border-radius: 30px;
  border-radius: 30px;
  -moz-transition: background 0.4s, color 0.4s, font-size 0.05s, width 0.4s, border 0.4s;
  -o-transition: background 0.4s, color 0.4s, font-size 0.05s, width 0.4s, border 0.4s;
  -webkit-transition: background 0.4s, color 0.4s, font-size 0.05s, width 0.4s, border 0.4s;
  transition: background 0.4s, color 0.4s, font-size 0.05s, width 0.4s, border 0.4s;
    `
});
export default class LoadingButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const _a = this.props, { className, style } = _a, other = __rest(_a, ["className", "style"]);
        const classNames = [compiled.btn, className].join(" ");
        return (React.createElement("div", __assign({ className: classNames }, other),
            this.props.children,
            React.createElement("svg", { width: "66px", height: "66px" },
                React.createElement("circle", { className: "circle_2", strokeWidth: "3", fill: "none", cx: "34", cy: "33", r: "29", stroke: "#1ECD97" }))));
    }
}
