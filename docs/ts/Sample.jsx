"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDom = require("react-dom");
require("./style/global.pcss");
//require("babel-polyfill")
var react_router_dom_1 = require("react-router-dom");
var SimpleDrawer_1 = require("../../src/ts/SimpleDrawer/SimpleDrawer");
var Playground0_1 = require("./Pages/Playground0");
var Playground1_1 = require("./Pages/Playground1");
var style = require("./Pages/PageStyle.pcss");
var Ink = require("react-ink");
console.log(style);
var header = function (_a) {
    var onTouchMenu = _a.onTouchMenu;
    return (<div className={style.header}>
            <div className={style.navButton} onClick={function () { return onTouchMenu(); }}>show menu</div>
            <a href="https://github.com/NaotoFushimi/naoto243-react-kit">to GitHub</a>
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
        _this.getMenu = function (link, name) {
            return (<li key={name + "__link"}>
                <react_router_dom_1.Link onClick={function () { return _this.toggleOpen(); }} to={link}>
                    <Ink />
                    {name}
                </react_router_dom_1.Link>
            </li>);
        };
        _this.getLeftMenu = function () {
            return (<div className={style.leftNavLinks}>
                {_this.getMenu("/", "Home")}
                {_this.getMenu("/pl1", "playground1")}
            </div>);
        };
        console.log("hoge");
        _this.state = {
            open: false
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
    SampleApp.prototype.toggleOpen = function () {
        this.setState({
            open: !this.state.open
        });
    };
    SampleApp.prototype.render = function () {
        var _this = this;
        console.log(window.location.hash);
        return (<react_router_dom_1.HashRouter hashType="slash">
                <div>
                    <SimpleDrawer_1.default onOverlayTap={function (e) { return _this.toggleOpen(); }} open={this.state.open} navRender={function () {
            return (<div>
                                {_this.getLeftMenu()}
                            </div>);
        }} navStyle={{
            width: "250px",
            boxShadow: "0 0 14px rgba(0,0,0,0.50),0 0px 0px 0px rgba(0,0,0,0.24)",
        }} closeOffset="-270px"/>
                    {header({
            onTouchMenu: function () { return _this.toggleOpen(); }
        })}
                    <div style={{
            paddingTop: "56px"
        }}>
                        <div className={style.container}>
                            <react_router_dom_1.Switch>
                                <react_router_dom_1.Route path="/" exact component={Playground0_1.default}/>
                                <react_router_dom_1.Route path="/pl1" exact component={Playground1_1.default}/>
                                <react_router_dom_1.Route component={NoMatch}/>
                            </react_router_dom_1.Switch>
                        </div>
                    </div>
                </div>
            </react_router_dom_1.HashRouter>);
    };
    return SampleApp;
}(React.Component));
ReactDom.render(<SampleApp />, document.getElementById("app"));
