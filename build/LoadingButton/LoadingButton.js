import * as React from 'react';
import { css } from 'glamor';
let box = css({ backgroundColor: 'red' });
let b2 = css `
    background-color : #505050;
    

`;
export default class LoadingButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: b2 },
            React.createElement("button", { type: "submit" }, this.props.children),
            React.createElement("svg", { width: "66px", height: "66px" },
                React.createElement("circle", { className: "circle_2", strokeWidth: "3", fill: "none", cx: "34", cy: "33", r: "29", stroke: "#1ECD97" }))));
    }
}
