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
export default class ExpandMenu extends React.Component {
    constructor(props) {
        super(props);
        const { component, initialOpen, childList } = props, other = __rest(props, ["component", "initialOpen", "childList"]);
        this.state = {
            open: initialOpen ? initialOpen : false
        };
    }
    getChild() {
        if (this.props.childList != null) {
            if (this.state.open) {
                return (React.createElement("div", null, this.props.childList));
            }
        }
    }
    _onClick(e) {
        if (this.props.childList != null) {
            this.setState(__assign({}, this.state, { open: !this.state.open }));
        }
        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }
    render() {
        const _a = this.props, { render, initialOpen, childList, onClick } = _a, other = __rest(_a, ["render", "initialOpen", "childList", "onClick"]);
        return (React.createElement("div", __assign({}, other),
            React.createElement("div", { onClick: this._onClick.bind(this) }, render(this.state.open)),
            this.getChild()));
    }
}
