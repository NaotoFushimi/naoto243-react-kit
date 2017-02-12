import * as React from 'react';
import {SimpleDropDownMenuProps, SimpleDropDownItemProps} from "./SimpleDropDownProps";
import {menuCss} from "./SimpleDropDownStyle";

export class SimpleDropDownMenu extends React.Component<SimpleDropDownMenuProps, {}>{
    constructor(props) {
        super(props);
    }

    render() {

        const menuClassName = [menuCss].join(" ")

        return (
            <div className={menuClassName}>
                {this.props.children}
            </div>
        );
    }
}

export class SimpleDropDownItem extends React.Component<SimpleDropDownItemProps, {}>{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <span>
                    <div>

                    </div>
                </span>
            </div>
        );
    }
}
