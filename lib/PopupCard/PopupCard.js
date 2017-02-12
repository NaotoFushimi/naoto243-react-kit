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
const cssClass = require("./PopupCardCSS");
export default class PopupCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialShow: this.props.show != null ? this.props.show : false
        };
    }
    _onClick(e) {
        if (this.props.onClick != null) {
            this.props.onClick(e);
        }
        try {
            e.preventDefault();
            e.stopPropagation();
        }
        catch (err) {
        }
    }
    _onTouchStart(e) {
        if (this.props.onTouchStart != null) {
            this.props.onTouchStart(e);
        }
        try {
            e.preventDefault();
            e.stopPropagation();
        }
        catch (err) {
        }
    }
    render() {
        const _a = this.props, { show, onClick, className, onTouchStart, style } = _a, otherProps = __rest(_a, ["show", "onClick", "className", "onTouchStart", "style"]);
        if (!this.state.initialShow) {
        }
        const masterStyle = __assign({ zIndex: 100 }, style);
        const masterClassName = [cssClass.card, cssClass.createAnimation(show), className].join(" ");
        return (React.createElement("div", __assign({ className: masterClassName, onClick: this._onClick.bind(this), onTouchStart: this._onTouchStart.bind(this), style: masterStyle }, otherProps),
            React.createElement("div", { className: cssClass.cardInline }, this.props.children)));
    }
}
