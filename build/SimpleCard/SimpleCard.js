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
import { StyleSheet, css } from 'aphrodite/no-important';
const styles = StyleSheet.create({
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
export default class SimpleCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const _a = this.props, { hover, className } = _a, other = __rest(_a, ["hover", "className"]);
        const styleBase = [styles.base];
        if (this.props.hover)
            styleBase.push(styles.hover);
        const lastClassName = [css([...styleBase]), className].join(" ");
        return (React.createElement("div", __assign({ className: lastClassName }, other), this.props.children));
    }
}
