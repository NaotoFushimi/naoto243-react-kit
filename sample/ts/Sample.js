"use strict";
const React = require("react");
const ReactDom = require("react-dom");
const SampleButton = require("../../build/lib/SampleButton/SampleButton.js");
class SampleApp extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
    }
    componentDidMount() {
    }
    componentWillUpdate() {
    }
    componentDidUpdate() {
    }
    componentWillUnmount() {
        //viewのデストラクタ
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(SampleButton, null)));
    }
}
ReactDom.render(React.createElement(SampleApp, null), document.getElementById("app"));
//# sourceMappingURL=Sample.js.map