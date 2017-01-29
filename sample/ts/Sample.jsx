"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDom = require("react-dom");
var SimpleCard_1 = require("../../src/ts/SimpleCard/SimpleCard");
var LoadingButton_1 = require("../../lib/LoadingButton/LoadingButton");
var SimpleDrawer_1 = require("../../src/ts/SimpleDrawer/SimpleDrawer");
var SampleApp = (function (_super) {
    __extends(SampleApp, _super);
    function SampleApp(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            open: true
        };
        return _this;
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
        var _this = this;
        return (<div>
                <SimpleDrawer_1.default onOverlayTap={function (e) {
            _this.setState({
                open: !_this.state.open
            });
        }} open={this.state.open} navRender={function () { return <div>hoge</div>; }} navStyle={{
            backgroundColor: "#F0F0F0",
            boxShadow: "0 0 14px rgba(0,0,0,0.50),0 0px 0px 0px rgba(0,0,0,0.24)",
        }}/>
                <SimpleCard_1.default style={{
            width: "320px",
            height: "400px",
            margin: "24px",
        }} onClick={function () {
            _this.setState({
                open: !_this.state.open
            });
        }}>
                    <div>
                        Card
                        <SimpleCard_1.default hover={true}>
                            hoge
                        </SimpleCard_1.default>
                    </div>

                </SimpleCard_1.default>
                <LoadingButton_1.default />
            </div>);
    };
    return SampleApp;
}(React.Component));
var dom = document.createElement("div");
dom.style.webkitTapHighlightColor;
ReactDom.render(<SampleApp />, document.getElementById("app"));
