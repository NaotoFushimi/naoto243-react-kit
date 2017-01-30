"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDom = require("react-dom");
//require("babel-polyfill")
var react_router_1 = require("react-router");
var SimpleDrawer_1 = require("../../src/ts/SimpleDrawer/SimpleDrawer");
var Playground0_1 = require("./Pages/Playground0");
var Playground1_1 = require("./Pages/Playground1");
var style = require("./Pages/PageStyle.css");
console.log(style);
var header = function (_a) {
    var onTouchMenu = _a.onTouchMenu;
    return (<div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "56px",
        backgroundColor: "#A0A0A0",
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }}>
            <div style={{
        cursor: "pointer"
    }} onClick={function () { return onTouchMenu(); }}>show menu</div>
        </div>);
};
var NoMatch = function () {
    return (<div>
            404
        </div>);
};
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
    SampleApp.prototype.renderLinkRow = function () {
    };
    SampleApp.prototype.toggleOpen = function () {
        this.setState({
            open: !this.state.open
        });
    };
    SampleApp.prototype.render = function () {
        var _this = this;
        return (<react_router_1.HashRouter>
                <div>

                <SimpleDrawer_1.default onOverlayTap={function (e) { return _this.toggleOpen(); }} open={this.state.open} navRender={function () {
            return (<div onClick={function () { return _this.toggleOpen(); }}>
                                 <li><react_router_1.Link to="/">Home</react_router_1.Link></li>
                                 <li><react_router_1.Link to="/pl1">Playground1</react_router_1.Link></li>
                            </div>);
        }} navStyle={{
            width: "300px",
            boxShadow: "0 0 14px rgba(0,0,0,0.50),0 0px 0px 0px rgba(0,0,0,0.24)",
        }} closeOffset="-320px"/>
                    {header({
            onTouchMenu: function () { return _this.toggleOpen(); }
        })}
                    <div style={{
            paddingTop: "56px"
        }}>
                        <div className={style.container}>
                            <react_router_1.Match exactly pattern="/" component={Playground0_1.default}/>
                            <react_router_1.Match exactly pattern="/pl1" component={Playground1_1.default}/>
                            <react_router_1.Miss component={NoMatch}/>
                        </div>
                    </div>
                </div>
            </react_router_1.HashRouter>);
    };
    return SampleApp;
}(React.Component));
ReactDom.render(<SampleApp />, document.getElementById("app"));
