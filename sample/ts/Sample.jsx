"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDom = require("react-dom");
var SampleButton_1 = require("../../build/SampleButton/SampleButton");
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
                <SampleButton_1.default hoge={true}/>
            </div>);
    };
    return SampleApp;
}(React.Component));
ReactDom.render(<SampleApp />, document.getElementById("app"));
