import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {SimpleButtonProps} from "./SimpleButtonProps";

var styles = StyleSheet.create({
    base: {
        boxShadow: "0 2px 4px rgba(0,0,0,0.20),0 1px 1px 0px rgba(0,0,0,0.24)",
        WebkitTapHighlightColor : "rgba(0,0,0,0)",
        padding : "4px 12px 4px 12px",
        transition: "all 0.2s cubic-bezier(.25,.8,.25,1)",
        borderRadius: "4px",
        display: "inline-block",
        position : "relative",
        userSelect  : "none",
        textAlign : "center",
        cursor : "pointer"
    },
    hover : {
        ':hover': {
            boxShadow: "0 10px 10px rgba(0,0,0,0.15), 0 6px 6px rgba(0,0,0,0.16)"
        },
    },
    click : {
        boxShadow: "0 2px 4px rgba(0,0,0,0.20),0 1px 1px 0px rgba(0,0,0,0.24)"
    }
});

export default class SimpleButton extends React.Component<SimpleButtonProps, any>{
    constructor(props) {
        super(props);
        this.state = {
            isAnimate : false
        }
    }

    setTap(){
        this.setState({isAnimate : true});
        setTimeout(()=>{
            this.setState({isAnimate : false});
        },120)
    }

    onClicked(e){
        if (this.props.onClick != null){
            this.props.onClick(e);
        }
        this.setTap()
    }

    render() {
        const styleBase = [styles.base];
        const {onHoverClassName , className, ...other} = this.props;


        if (this.state.isAnimate == true) {
            styleBase.push(styles.click)
        } else {
            styleBase.push(styles.hover);
            onHoverClassName && styleBase.push(onHoverClassName);
        }

        const lastClassName = [css([...styleBase , this.props.className])].join(" ");
        return (
            <div onClick={this.onClicked.bind(this)}
                 className={lastClassName} {...other}
            >
                {this.state.isAnimate}
                {this.props.children}
            </div>
        );
    }
}
