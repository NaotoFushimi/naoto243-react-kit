import * as React from 'react';
import {SimpleCardProps} from "./SimpleCardProps";
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
    base: {
        boxShadow: "0 2px 1px rgba(0,0,0,0.08),0px 1px 2px 0px rgba(0,0,0,0.18)",
        WebkitTapHighlightColor : "rgba(0,0,0,0)",
        padding : "16px",
        transition: "all 0.2s cubic-bezier(.25,.8,.25,1)",
        borderRadius: "2px",
        display: "inline-block",
        position : "relative",
        userSelect  : "none",
        backgroundColor : "#FFFFFF"
    },
    hover : {
        ':hover': {
            boxShadow: "0 10px 18px rgba(0,0,0,0.25), 0 6px 6px rgba(0,0,0,0.22)"
        },
    }
});

export default class SimpleCard extends React.Component<SimpleCardProps, {}>{
    constructor(props) {
        super(props);
    }

    render() {
        const styleBase = [styles.base];
        if (this.props.hover) styleBase.push(styles.hover)
        const lastClassName = [css([...styleBase , this.props.className])].join(" ");

        const {hover ,className ,...other} = this.props;

        return (
            <div className={lastClassName} {...other}>
                {this.props.children}
            </div>
        );
    }
}
