"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var React = require("react");
var cssClass = require("./PopupCardCSS");
var PopupCard = (function (_super) {
    __extends(PopupCard, _super);
    function PopupCard(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            initialShow: _this.props.show != null ? _this.props.show : false
        };
        return _this;
    }
    PopupCard.prototype._onClick = function (e) {
        if (this.props.onClick != null) {
            this.props.onClick(e);
        }
        try {
            e.preventDefault();
            e.stopPropagation();
        }
        catch (err) {
        }
    };
    PopupCard.prototype.render = function () {
        var _a = this.props, show = _a.show, onClick = _a.onClick, className = _a.className, onTouchStart = _a.onTouchStart, style = _a.style, otherProps = __rest(_a, ["show", "onClick", "className", "onTouchStart", "style"]);
        if (!this.state.initialShow) {
        }
        var masterStyle = __assign({ zIndex: 100 }, style);
        var masterClassName = [cssClass.card, cssClass.createAnimation(show), className].join(" ");
        return (<div className={masterClassName} onClick={this._onClick.bind(this)} style={masterStyle} {...otherProps}>
                <div className={cssClass.cardInline}>
                    {this.props.children}
                </div>
            </div>);
    };
    return PopupCard;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PopupCard;
