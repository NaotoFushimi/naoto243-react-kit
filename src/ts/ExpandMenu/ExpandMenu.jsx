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
var ExpandMenu = (function (_super) {
    __extends(ExpandMenu, _super);
    function ExpandMenu(props) {
        var _this = _super.call(this, props) || this;
        var component = props.component, initialOpen = props.initialOpen, childList = props.childList, other = __rest(props, ["component", "initialOpen", "childList"]);
        _this.state = {
            open: initialOpen ? initialOpen : false
        };
        return _this;
    }
    ExpandMenu.prototype.getChild = function () {
        if (this.props.childList != null) {
            if (this.state.open) {
                return (<div>
                        {this.props.childList}
                    </div>);
            }
        }
    };
    ExpandMenu.prototype._onClick = function (e) {
        if (this.props.childList != null) {
            this.setState(__assign({}, this.state, { open: !this.state.open }));
        }
        if (this.props.onClick) {
            this.props.onClick(e);
        }
    };
    ExpandMenu.prototype.render = function () {
        var _a = this.props, render = _a.render, initialOpen = _a.initialOpen, childList = _a.childList, onClick = _a.onClick, other = __rest(_a, ["render", "initialOpen", "childList", "onClick"]);
        return (<div {...other}>
                <div onClick={this._onClick.bind(this)}>{render(this.state.open)}</div>
                {this.getChild()}
            </div>);
    };
    return ExpandMenu;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ExpandMenu;
