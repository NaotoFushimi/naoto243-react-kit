"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDom = require("react-dom");
var SimpleCard_1 = require("../../src/ts/SimpleCard/SimpleCard");
var SimpleButton_1 = require("../../src/ts/SimpleButton/SimpleButton");
var SampleApp = (function (_super) {
    __extends(SampleApp, _super);
    function SampleApp(props) {
        return _super.call(this, props) || this;
    }
    SampleApp.prototype.componentWillMount = function () {
    };
    SampleApp.prototype.componentDidMount = function () {
    };
    SampleApp.prototype.componentWillUpdate = function () {
    };
    SampleApp.prototype.componentDidUpdate = function () {
    };
    SampleApp.prototype.componentWillUnmount = function () {
        //viewのデストラクタ
    };
    SampleApp.prototype.render = function () {
        return (<div>
                <SimpleCard_1.default style={{
            width: "320px",
            height: "400px",
            margin: "24px",
        }}>
                    <div>
                        Card
                        <SimpleCard_1.default hover={true}>
                            hoge
                        </SimpleCard_1.default>
                    </div>

                </SimpleCard_1.default>
                <SimpleButton_1.default>
                    click
                </SimpleButton_1.default>
            </div>);
    };
    return SampleApp;
}(React.Component));
var dom = document.createElement("div");
dom.style.webkitTapHighlightColor;
ReactDom.render(<SampleApp />, document.getElementById("app"));
