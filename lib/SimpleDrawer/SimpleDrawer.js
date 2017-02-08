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
let cssClass;
const opacityKeyframes = {
    'from': {
        opacity: 0,
    },
    'to': {
        opacity: 1,
    }
};
const opacityKeyframesErase = {
    'from': {
        opacity: 1,
    },
    'to': {
        opacity: 0,
    }
};
let openOnce = false;
export default class SimpleDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.prevCloseOffset = "-220px";
        this.prevOpenSpeed = 0.2;
        this.prevOpen = this.props.open;
    }
    getDrawerStyle(openSpeedSec, closeOffset) {
        if (cssClass) {
            return cssClass;
        }
        const navOpenAnim = {
            'from': {
                left: closeOffset,
            },
            'to': {
                left: 0,
            }
        };
        const navCloseAnim = {
            'from': {
                left: 0,
            },
            'to': {
                left: closeOffset,
            }
        };
        cssClass = StyleSheet.create({
            overlay: {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 10000,
                userSelect: "none",
                backgroundColor: "rgba(140,140,140 , 0.5)",
            },
            nav: {
                width: "200px",
                height: "100%",
                backgroundColor: "#FFF",
                zIndex: 10001,
                position: "fixed",
                top: 0,
                WebkitTapHighlightColor: "rgba(0,0,0,0)",
            },
            open: {
                left: 0
            },
            close: {
                left: closeOffset
            },
            navOpen: {
                animationName: [navOpenAnim],
                animationDuration: `${openSpeedSec}s`,
                animationFillMode: "forwards",
            },
            navClose: {
                animationName: [navCloseAnim],
                animationDuration: `${openSpeedSec}s`,
                animationFillMode: "forwards",
            },
            overlayOpenInit: {
                opacity: 1
            },
            overlayCloseInit: {
                opacity: 0
            },
            overlayOpen: {
                animationName: [opacityKeyframes],
                animationDuration: `${openSpeedSec}s`,
                animationFillMode: "forwards",
            },
            overlayClose: {
                animationName: [opacityKeyframesErase],
                animationDuration: `${openSpeedSec}s`,
                animationFillMode: "forwards",
            }
        });
        return cssClass;
    }
    componentWillUpdate() {
    }
    render() {
        const _a = this.props, { className, style, overlayClassName, overlayStyle, navClassName, navStyle, open, navRender, onOverlayTap, closeOffset, openSpeedSec } = _a, other = __rest(_a, ["className", "style", "overlayClassName", "overlayStyle", "navClassName", "navStyle", "open", "navRender", "onOverlayTap", "closeOffset", "openSpeedSec"]);
        if (openSpeedSec != null && openSpeedSec != this.prevOpenSpeed) {
            this.prevOpenSpeed = openSpeedSec;
            cssClass = null;
        }
        if (closeOffset != null && closeOffset != this.prevCloseOffset) {
            this.prevCloseOffset = closeOffset;
            cssClass = null;
        }
        const overlayClassNameBase = [this.getDrawerStyle(this.prevOpenSpeed, this.prevCloseOffset).overlay];
        overlayClassName && overlayClassNameBase.push(overlayClassName);
        const navClassNameBase = [this.getDrawerStyle(this.prevOpenSpeed, this.prevCloseOffset).nav];
        navClassName && navClassNameBase.push(navClassName);
        if (open) {
            navClassNameBase.push(this.getDrawerStyle(this.prevOpenSpeed, this.prevCloseOffset).open);
            if (openOnce) {
                overlayClassNameBase.push(this.getDrawerStyle(this.prevOpenSpeed, this.prevCloseOffset).overlayOpen);
                this.overlayComponent.style.width = "100%";
                this.overlayComponent.style.height = "100%";
                navClassNameBase.push(this.getDrawerStyle(this.prevOpenSpeed, this.prevCloseOffset).navOpen);
            }
            else {
                overlayClassNameBase.push(this.getDrawerStyle(this.prevOpenSpeed, this.prevCloseOffset).overlayOpenInit);
            }
            openOnce = true;
        }
        else {
            navClassNameBase.push(this.getDrawerStyle(this.prevOpenSpeed, this.prevCloseOffset).close);
            if (openOnce) {
                overlayClassNameBase.push(this.getDrawerStyle(this.prevOpenSpeed, this.prevCloseOffset).overlayClose);
                navClassNameBase.push(this.getDrawerStyle(this.prevOpenSpeed, this.prevCloseOffset).navClose);
            }
            else {
                overlayClassNameBase.push(this.getDrawerStyle(this.prevOpenSpeed, this.prevCloseOffset).overlayCloseInit);
            }
            setTimeout(() => {
                if (!this.prevOpen) {
                    this.overlayComponent.style.width = "0px";
                    this.overlayComponent.style.height = "0px";
                }
            }, this.prevOpenSpeed * 1050);
        }
        openOnce = true;
        this.prevOpen = open ? open : false;
        const lastOverlayClassName = [css([...overlayClassNameBase])].join(" ");
        const lastNavClassName = [css([...navClassNameBase])].join(" ");
        const navStyleBase = navStyle ? navStyle : {};
        return (React.createElement("div", null,
            React.createElement("div", { className: lastNavClassName, style: navStyleBase }, navRender && navRender()),
            React.createElement("div", { className: lastOverlayClassName, onClick: (e) => {
                    if (!open) {
                        return true;
                    }
                    if (onOverlayTap) {
                        onOverlayTap(e);
                        e.preventDefault();
                    }
                }, ref: ref => this.overlayComponent = ref })));
    }
}
