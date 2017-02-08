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
import { keyframes } from 'glamor';
const openBackAnim = keyframes({
    'from': {
        opacity: 0,
    },
    'to': {
        opacity: 1,
    }
});
const closeBackAnim = keyframes({
    'from': {
        opacity: 1,
    },
    'to': {
        opacity: 0,
    }
});
const openModalAnim = keyframes({
    'from': {
        transform: "translate(0,50px)"
    },
    'to': {
        transform: "translate(0,0px)"
    }
});
const closeModalAnim = keyframes({
    'from': {
        transform: "translate(0,0px)",
    },
    'to': {
        transform: "translate(0,50px)"
    }
});
let styles = StyleSheet.create({
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
        minHeight: "20%",
        userSelect: "none",
        boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
    },
    navOpen: {
        animationName: [openBackAnim],
        animationDuration: `0.15s`,
        animationFillMode: "forwards",
    },
    navClose: {
        animationName: [closeBackAnim],
        animationDuration: `0.15s`,
        animationFillMode: "forwards",
    },
    modalOpen: {
        animationName: [openModalAnim],
        animationDuration: `0.15s`,
        animationFillMode: "forwards",
    },
    modalClose: {
        animationName: [closeModalAnim],
        animationDuration: `0.15s`,
        animationFillMode: "forwards",
    },
});
export default class SimpleModal extends React.Component {
    constructor(props) {
        super(props);
        this.prevOpen = null;
        this.isAnimationNow = false;
        this.prevOpen = this.props.open != null ? this.props.open : null;
        this.state = {};
    }
    createAnimation() {
        if (this.props.fade || this.props.fade == null) {
            this.isAnimationNow = true;
            setTimeout(() => {
                this.isAnimationNow = false;
                this.setState(this.state);
            }, 160);
        }
    }
    render() {
        const _a = this.props, { className, overlayClassName, overlayStyle, onOverlayTap, open, modalStyle, modalClassName, fade } = _a, other = __rest(_a, ["className", "overlayClassName", "overlayStyle", "onOverlayTap", "open", "modalStyle", "modalClassName", "fade"]);
        let animBackClass;
        let animModalClass;
        if (fade == true || fade == null) {
            animBackClass = open ? styles.navOpen : styles.navClose;
            animModalClass = open ? styles.modalOpen : styles.modalClose;
        }
        else {
            animBackClass = {};
            animModalClass = {};
        }
        const lastOverlayClassName = [css([styles.back, animBackClass]), overlayClassName].join(" ");
        const lastModalClassName = [css(styles.modal, animModalClass), modalClassName].join(" ");
        if (open != this.prevOpen) {
            this.createAnimation();
        }
        let lastOverlayStyle = open ? __assign({}, overlayStyle) : { width: 0, height: 0, opacity: 0, overflow: "hidden" };
        if (this.isAnimationNow) {
            lastOverlayStyle = __assign({}, overlayStyle);
        }
        this.prevOpen = open;
        return (React.createElement("div", { className: lastOverlayClassName, onClick: (e) => {
                if (onOverlayTap != null) {
                    onOverlayTap();
                }
                e.preventDefault();
            }, style: lastOverlayStyle },
            React.createElement("div", { className: lastModalClassName, onClick: e => {
                    e.preventDefault();
                    try {
                        e.stopPropagation();
                    }
                    catch (err) { }
                    return false;
                } }, this.props.children)));
    }
}
