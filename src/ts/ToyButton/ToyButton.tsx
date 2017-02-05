import * as React from 'react';
import { StyleSheet, css } from 'glamor/aphrodite'
import {ToyButtonProps} from "@root/src/ts/ToyButton/ToyButtonProps";

let styles = StyleSheet.create({
    blue: {
        backgroundColor: '#55acee',
        boxShadow : "0px 5px 0px 0px #3C93D5"
    },
    active: {
        ':active': {
            transform: 'translate(0px, 5px)',
            boxShadow : "0px 1px 0px 0px"
        }
    },
    button : {
        borderRadius : "5px",
        padding : "15px 25px",
        textDecoration : "none",
        color : "#FFF",
        position : "relative",
        display : "inline-block",
        cursor : "pointer"
    }
})

/*
* .btn {
  border-radius: 5px;
  padding: 15px 25px;
  font-size: 22px;
  text-decoration: none;
  margin: 20px;
  color: #fff;
  position: relative;
  display: inline-block;
}
*
* */


export default class ToyButton extends React.Component<ToyButtonProps, {}>{
    constructor(props) {
        super(props);
    }

    render() {

        const {className , buttonColor,shadowColor , ...otherProps} = this.props;

        const colorMe = StyleSheet.create({
            color: {
                backgroundColor: buttonColor? buttonColor :  '#55acee',
                boxShadow : `0px 5px 0px 0px ${shadowColor? shadowColor : "#3C93D5"}`
            }
        });

        const baseClassName = css(styles.active, styles.button  , colorMe.color);
        const lastClassName = [baseClassName , className].join(" ");




        return (
            <a className={lastClassName}
                {...otherProps}
            >
                {this.props.children}
            </a>
        );
    }
}
