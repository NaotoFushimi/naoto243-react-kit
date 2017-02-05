import * as React from 'react';
export default class ExpandMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("p", null, this.props.children)));
    }
}
