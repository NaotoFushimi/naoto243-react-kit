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
const onClickKeyframes = {
    '0%': {
        boxShadow: "0 2px 4px rgba(0,0,0,0.20),0 1px 1px 0px rgba(0,0,0,0.24)"
    },
    '50%': {
        boxShadow: "0 10px 10px rgba(0,0,0,0.15), 0 6px 6px rgba(0,0,0,0.16)"
    },
    '100%': {
        boxShadow: "0 2px 4px rgba(0,0,0,0.20),0 1px 1px 0px rgba(0,0,0,0.24)"
    },
};
var styles = StyleSheet.create({
    base: {
        boxShadow: "0 2px 4px rgba(0,0,0,0.20),0 1px 1px 0px rgba(0,0,0,0.24)",
        padding: "4px 12px 4px 12px",
        WebkitTapHighlightColor: "rgba(0,0,0,0)",
        //transition: "all 0.2s cubic-bezier(.25,.8,.25,1)",
        borderRadius: "4px",
        display: "inline-block",
        position: "relative",
        userSelect: "none",
        textAlign: "center",
        cursor: "pointer",
        backgroundColor: "#FFFFFF",
    },
    clickAnimation: {
        animationName: [onClickKeyframes],
        animationDuration: '210ms',
    },
});
export default class SimpleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAnimate: false
        };
    }
    setTap() {
        this.setState({ isAnimate: true });
        setTimeout(() => {
            this.setState({ isAnimate: false });
        }, 210);
    }
    onClicked(e) {
        if (this.props.onClick != null) {
            this.props.onClick(e);
        }
        this.setTap();
    }
    render() {
        const styleBase = [styles.base];
        const _a = this.props, { onHoverClassName, className, onClick } = _a, other = __rest(_a, ["onHoverClassName", "className", "onClick"]);
        if (this.state.isAnimate == true) {
            styleBase.push(styles.clickAnimation);
        }
        else {
            onHoverClassName && styleBase.push(onHoverClassName);
        }
        const lastClassName = [css([...styleBase, this.props.className])].join(" ");
        return (React.createElement("div", Object.assign({ onClick: this.onClicked.bind(this), className: lastClassName }, other),
            this.state.isAnimate,
            this.props.children));
    }
}
