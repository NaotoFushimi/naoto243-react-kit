import * as React from 'react';
import SimpleDrawerProps from "./SimpleDrawerProps";

import { StyleSheet, css } from 'aphrodite/no-important';

let cssClass : any;

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

export default class SimpleDrawer extends React.Component<SimpleDrawerProps, any>{
    constructor(props) {
        super(props);
    }

    getDrawerStyle (openSpeedSec , closeOffset){
        if (cssClass){
            return cssClass;
        }

        const navOpenAnim = {
            'from': {
                left : closeOffset,
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
            overlay  :{
                position : "fixed",
                top : 0,
                left  : 0 ,
                width : "100%",
                height : "100%",
                zIndex : 10000,
                userSelect : "none",
                backgroundColor : "rgba(140,140,140 , 0.5)",
            },
            nav : {
                width: "200px",
                height: "100%",
                backgroundColor: "#FFF",
                zIndex: 10001,
                position: "fixed",
                top: 0,
                WebkitTapHighlightColor: "rgba(0,0,0,0)",

        //transition: `left ${openSpeedSec}s cubic-bezier(.25,.8,.25,1)`,
            },
            open :  {
                left : 0
            },
            close : {
                left : closeOffset
            },
            navOpen : {
                animationName: [navOpenAnim],
                animationDuration: `${openSpeedSec}s`,
                animationFillMode : "forwards",
            },
            navClose : {
                animationName: [navCloseAnim],
                animationDuration: `${openSpeedSec}s`,
                animationFillMode : "forwards",
            },
            overlayOpenInit : {
                opacity : 1
            },
            overlayCloseInit : {
                opacity : 0
            },
            overlayOpen :{
                animationName: [opacityKeyframes],
                animationDuration: `${openSpeedSec}s`,
                animationFillMode : "forwards",
            },
            overlayClose : {
                animationName: [opacityKeyframesErase],
                animationDuration: `${openSpeedSec}s`,
                animationFillMode : "forwards",
            }
        });
        return cssClass;
    }

    componentWillUpdate(){

    }

    prevCloseOffset = "-220px";
    prevOpenSpeed = 0.2;
    prevOpen  = this.props.open
    overlayComponent;

    render() {

        const {className ,
            style ,
            overlayClassName ,
            overlayStyle ,
            navClassName ,
            navStyle ,
            open ,
            navRender,
            onOverlayTap,
            closeOffset,
            openSpeedSec,
            ...other
        } = this.props;

        if (openSpeedSec != null &&  openSpeedSec != this.prevOpenSpeed){
            this.prevOpenSpeed = openSpeedSec;
            cssClass = null;
        }

        if (closeOffset != null && closeOffset != this.prevCloseOffset){
            this.prevCloseOffset = closeOffset;
            cssClass = null;
        }

        const overlayClassNameBase = [this.getDrawerStyle(this.prevOpenSpeed , this.prevCloseOffset).overlay];
        overlayClassName && overlayClassNameBase.push(overlayClassName);

        const navClassNameBase = [this.getDrawerStyle(this.prevOpenSpeed , this.prevCloseOffset).nav];
        navClassName && navClassNameBase.push(navClassName);

        if (open){
            navClassNameBase.push(this.getDrawerStyle(this.prevOpenSpeed , this.prevCloseOffset).open);

            if (openOnce){
                overlayClassNameBase.push(this.getDrawerStyle(this.prevOpenSpeed , this.prevCloseOffset).overlayOpen)
                this.overlayComponent.style.width = "100%";
                this.overlayComponent.style.height = "100%";
                navClassNameBase.push(this.getDrawerStyle(this.prevOpenSpeed , this.prevCloseOffset).navOpen);

            } else {
                overlayClassNameBase.push(this.getDrawerStyle(this.prevOpenSpeed , this.prevCloseOffset).overlayOpenInit)
            }

            openOnce = true;

        } else {
            navClassNameBase.push(this.getDrawerStyle(this.prevOpenSpeed , this.prevCloseOffset).close);

            if (openOnce){
                overlayClassNameBase.push(this.getDrawerStyle(this.prevOpenSpeed , this.prevCloseOffset).overlayClose)
                navClassNameBase.push(this.getDrawerStyle(this.prevOpenSpeed , this.prevCloseOffset).navClose);
            } else {
                overlayClassNameBase.push(this.getDrawerStyle(this.prevOpenSpeed, this.prevCloseOffset).overlayCloseInit)
            }

            setTimeout(()=>{
                if (!this.prevOpen){
                    this.overlayComponent.style.width = "0px";
                    this.overlayComponent.style.height = "0px";
                }
            } , this.prevOpenSpeed * 1050)

        }
        openOnce = true;

        this.prevOpen = open ? open : false;
        const lastOverlayClassName  : string = [css([...overlayClassNameBase])].join(" ");
        const lastNavClassName  : string = [css([...navClassNameBase])].join(" ");

        const navStyleBase = navStyle ? navStyle : {};

        return (
            <div >
                <div className={lastNavClassName} style={navStyleBase}>
                    {navRender && navRender()}
                </div>
                <div className={lastOverlayClassName}
                    onClick={(e)=>{
                        if (!open){
                            return true;
                        }
                        if (onOverlayTap){
                            onOverlayTap(e)
                            e.preventDefault();
                        }
                    }}
                     ref={ref => this.overlayComponent = ref}
                />
            </div>
        );
    }
}
