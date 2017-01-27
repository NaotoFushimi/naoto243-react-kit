import * as React from 'react';
import {LoadingButtonProps} from "./LoadingButtonProps";

import { css } from 'glamor'


let box  : any= css({ backgroundColor: 'red' })

let b2 : any = css`
    background-color : #505050;
    

`;


export default class LoadingButton extends React.Component<LoadingButtonProps, any>{
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className={b2} >
                <button type="submit">{this.props.children}</button>
                    <svg width="66px" height="66px">
                        <circle className="circle_2"  strokeWidth="3" fill="none" cx="34" cy="33" r="29" stroke="#1ECD97"></circle>
                    </svg>
            </ div>
        );
    }
}
