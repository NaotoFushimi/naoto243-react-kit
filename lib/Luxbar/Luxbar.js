import * as React from 'react';
require("./LuxbarCSS");
export default class Luxbar extends React.Component {
    constructor(props) {
        super(props);
    }
    getBarClassName() {
        const { barMode } = this.props;
        let barClassName = "naoto243-luxbar-fixed";
        switch (barMode) {
            case "static": {
                barClassName = "naoto243-luxbar-static";
                break;
            }
            case "fixed": {
                barClassName = "naoto243-luxbar-fixed";
                break;
            }
            default: {
                barClassName = "naoto243-luxbar-static";
                break;
            }
        }
        return barClassName;
    }
    render() {
        return (React.createElement("div", { className: `naoto243-luxbar ${this.getBarClassName()}` },
            React.createElement("input", { type: "checkbox", id: "naoto243-luxbar-checkbox", className: "naoto243-luxbar-checkbox" }),
            React.createElement("div", { className: "naoto243-luxbar-menu naoto243-luxbar-menu-right naoto243-luxbar-menu-dark" },
                React.createElement("ul", { className: "naoto243-luxbar-navigation" },
                    React.createElement("li", { className: "naoto243-luxbar-header" },
                        React.createElement("a", { className: "naoto243-luxbar-brand" }, "Brand"),
                        React.createElement("label", { className: "naoto243-luxbar-hamburger naoto243-luxbar-hamburger-doublespin", htmlFor: "naoto243-luxbar-checkbox" },
                            React.createElement("span", null))),
                    React.createElement("li", { className: "naoto243-luxbar-item active" },
                        React.createElement("a", null, "Home")),
                    React.createElement("li", { className: "naoto243-luxbar-item naoto243-lux-dropdown" },
                        React.createElement("a", null, "Users"),
                        React.createElement("ul", null,
                            React.createElement("li", { className: "naoto243-luxbar-item" },
                                React.createElement("a", null, "Max")),
                            React.createElement("li", { className: "naoto243-luxbar-item" },
                                React.createElement("a", null, "Edgar")),
                            React.createElement("li", { className: "naoto243-luxbar-item" },
                                React.createElement("a", null, "John"))))))));
    }
}
