import * as React from 'react';
import {LoadingButtonProps} from "./LoadingButtonProps";

import { css } from 'glamor'
import {compileInit} from "../DefineStyle/DefineStyle";

let box  : any= css({ backgroundColor: 'red' })

const compiled : any = compileInit({
    base : `
        background-color : yellow;
        width : 100%;
    `,
    fuka : `
        background-color : #202020;
    `,
    btn : `
  display: block;
  height: 60px;
  padding: 0;
  width: 191px;
  background: none;
  margin: auto;
  border: 2px solid #1ECD97;
  font-size: 18px;
  font-family: "Lato";
  color: #1ECD97;
  cursor: pointer;
  outline: none;
  text-align: center;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -moz-border-radius: 30px;
  -webkit-border-radius: 30px;
  border-radius: 30px;
  -moz-transition: background 0.4s, color 0.4s, font-size 0.05s, width 0.4s, border 0.4s;
  -o-transition: background 0.4s, color 0.4s, font-size 0.05s, width 0.4s, border 0.4s;
  -webkit-transition: background 0.4s, color 0.4s, font-size 0.05s, width 0.4s, border 0.4s;
  transition: background 0.4s, color 0.4s, font-size 0.05s, width 0.4s, border 0.4s;
    `
});

export default class LoadingButton extends React.Component<LoadingButtonProps, any>{
    constructor(props) {
        super(props);
    }

    render() {
        const {className,style , ...other} = this.props;
        const classNames = [compiled.btn , className].join(" ")

        return (
            <div className={classNames}  {...other}>
                {this.props.children}
                    <svg width="66px" height="66px">
                        <circle className="circle_2"  strokeWidth="3" fill="none" cx="34" cy="33" r="29" stroke="#1ECD97"></circle>
                    </svg>
            </ div>
        );
    }
}
