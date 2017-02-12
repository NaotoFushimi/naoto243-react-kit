import * as React from 'react';
import { menuCss } from "./SimpleDropDownStyle";
export class SimpleDropDownMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const menuClassName = [menuCss].join(" ");
        return (React.createElement("div", { className: menuClassName }, this.props.children));
    }
}
export class SimpleDropDownItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("span", null,
                React.createElement("div", null))));
    }
}
