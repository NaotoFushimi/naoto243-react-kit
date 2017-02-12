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
var aphrodite_1 = require("glamor/aphrodite");
var glamor_1 = require("glamor");
var openBackAnim = glamor_1.keyframes({
    'from': {
        opacity: 0,
    },
    'to': {
        opacity: 1,
    }
});
var closeBackAnim = glamor_1.keyframes({
    'from': {
        opacity: 1,
    },
    'to': {
        opacity: 0,
    }
});
var openModalAnim = glamor_1.keyframes({
    'from': {
        transform: "translate(0,50px)"
    },
    'to': {
        transform: "translate(0,0px)"
    }
});
var closeModalAnim = glamor_1.keyframes({
    'from': {
        transform: "translate(0,0px)",
    },
    'to': {
        transform: "translate(0,50px)"
    }
});
var styles = aphrodite_1.StyleSheet.create({
    back: {
        backgroundColor: "rgba(0,0,0,0.4)",
        position: "fixed",
        width: "100%",
        height: "100%",
        zIndex: 10000,
        userSelect: "none",
        top: 0,
        left: 0
    },
    modal: {
        position: "relative",
        backgroundColor: "#FFF",
        top: "20%",
        left: "10%",
        width: "80%",
        userSelect: "none",
        boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
    },
    navOpen: {
        animationName: [openBackAnim],
        animationDuration: "0.15s",
        animationFillMode: "forwards",
    },
    navClose: {
        animationName: [closeBackAnim],
        animationDuration: "0.15s",
        animationFillMode: "forwards",
    },
    modalOpen: {
        animationName: [openModalAnim],
        animationDuration: "0.15s",
        animationFillMode: "forwards",
    },
    modalClose: {
        animationName: [closeModalAnim],
        animationDuration: "0.15s",
        animationFillMode: "forwards",
    },
});
var SimpleModal = (function (_super) {
    __extends(SimpleModal, _super);
    function SimpleModal(props) {
        var _this = _super.call(this, props) || this;
        _this.prevOpen = null;
        _this.isAnimationNow = false;
        _this.prevOpen = _this.props.open != null ? _this.props.open : null;
        _this.state = {};
        return _this;
    }
    SimpleModal.prototype.createAnimation = function () {
        var _this = this;
        if (this.props.fade || this.props.fade == null) {
            this.isAnimationNow = true;
            setTimeout(function () {
                _this.isAnimationNow = false;
                if (!_this.props.open) {
                    _this.setState(_this.state);
                }
            }, 160);
        }
    };
    SimpleModal.prototype.render = function () {
        var _a = this.props, className = _a.className, overlayClassName = _a.overlayClassName, overlayStyle = _a.overlayStyle, onOverlayTap = _a.onOverlayTap, open = _a.open, modalStyle = _a.modalStyle, modalClassName = _a.modalClassName, fade = _a.fade, other = __rest(_a, ["className", "overlayClassName", "overlayStyle", "onOverlayTap", "open", "modalStyle", "modalClassName", "fade"]);
        var animBackClass;
        var animModalClass;
        if (fade == true || fade == null) {
            animBackClass = open ? styles.navOpen : styles.navClose;
            animModalClass = open ? styles.modalOpen : styles.modalClose;
        }
        else {
            animBackClass = {};
            animModalClass = {};
        }
        var lastOverlayClassName = [aphrodite_1.css([styles.back, animBackClass]), overlayClassName].join(" ");
        var lastModalClassName = [aphrodite_1.css(styles.modal, animModalClass), modalClassName].join(" ");
        if (open != this.prevOpen) {
            this.createAnimation();
        }
        var lastOverlayStyle = open ? __assign({}, overlayStyle) : { width: 0, height: 0, overflow: "hidden" };
        if (this.isAnimationNow) {
            lastOverlayStyle = __assign({}, overlayStyle);
        }
        this.prevOpen = open;
        return (<div className={lastOverlayClassName} onClick={function (e) {
            if (onOverlayTap != null) {
                onOverlayTap();
            }
            e.preventDefault();
        }} style={lastOverlayStyle}>
                <div className={lastModalClassName} onClick={function (e) {
            e.preventDefault();
            try {
                e.stopPropagation();
            }
            catch (err) { }
            return false;
        }}>
                    {this.props.children}
                </div>
            </div>);
    };
    return SimpleModal;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SimpleModal;
