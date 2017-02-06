"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDom = require("react-dom");
require("./style/global.pcss");
var react_router_dom_1 = require("react-router-dom");
var SimpleDrawer_1 = require("../../src/ts/SimpleDrawer/SimpleDrawer");
var Playground0_1 = require("./Pages/Playground0");
var Playground1_1 = require("./Pages/Playground1");
var ToyButtonPage_1 = require("./Pages/ToyButtonPage");
var ExpandMenu_1 = require("../../src/ts/ExpandMenu/ExpandMenu");
var SimpleCardPage_1 = require("./Pages/SimpleCardPage");
var style = require("./Pages/PageStyle.pcss");
var Ink = require("react-ink");
var FontAwesome = require('react-fontawesome');
var header = function (_a) {
    var onTouchMenu = _a.onTouchMenu;
    return (<div className={style.header}>
            <div className={style.header_contents}>
                <div className={style.navButton} onClick={function () { return onTouchMenu(); }}>
                    <FontAwesome size="2x" name="bars"/>
                </div>
                <div>
                    <strong>naoto243-react-kit</strong>
                </div>
                <a href="https://github.com/NaotoFushimi/naoto243-react-kit">
                    <FontAwesome size="2x" name="github"/>
                </a>
            </div>
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
        _this.ChildMenu = function (_a) {
            var name = _a.name, open = _a.open;
            return (<div key={name} className={style.list_item}>
                <Ink />
                <p>
                    <span>{name}</span>
                </p>
                <FontAwesome name={open ? "chevron-up" : "chevron-down"}/>
            </div>);
        };
        _this.ChildMenuLink = function (_a) {
            var name = _a.name, location = _a.location;
            return (<div key={name} className={style.list_item} onClick={function () {
                console.log(_this.router);
                _this.router.history.push(location);
                _this.toggleOpen();
            }}>
                <Ink />
                <p>
                    <span>{name}</span>
                </p>
            </div>);
        };
        _this.GrandChildMenu = function (_a) {
            var location = _a.location, name = _a.name;
            return (<div onClick={function () {
                console.log(_this.router);
                _this.router.history.push(location);
                _this.toggleOpen();
            }} key={location + name} className={style.nested_item}>
                <div className={style.nested_item_in}>
                    <Ink />
                    {name}
                </div>
            </div>);
        };
        _this.AllMenu = function () {
            return (<div className={style.leftNavLinks}>
                <ExpandMenu_1.default key={1} render={function () { return <_this.ChildMenuLink name="Home" location={"/"}/>; }}/>
                <ExpandMenu_1.default key={2} render={function (op) { return <_this.ChildMenu name="Buttons" open={op}/>; }} childList={[
                <ExpandMenu_1.default key={1} render={function () { return <_this.GrandChildMenu location="/simplebutton" name="SimpleButton"/>; }}/>,
                <ExpandMenu_1.default key={2} render={function () { return <_this.GrandChildMenu location="/toybutton" name="toybutton"/>; }}/>,
            ]} className={style.list_item_parent}/>
                <ExpandMenu_1.default key={3} render={function (op) { return <_this.ChildMenu name="Cards & List" open={op}/>; }} childList={[
                <ExpandMenu_1.default key={1} render={function () { return <_this.GrandChildMenu location="/simplecard" name="SimpleCard"/>; }}/>,
            ]} className={style.list_item_parent}/>
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
        return (<react_router_dom_1.HashRouter hashType="slash" ref={function (ref) {
            _this.router = ref;
        }}>
                <div>
                    <SimpleDrawer_1.default onOverlayTap={function (e) { return _this.toggleOpen(); }} open={this.state.open} navRender={function () {
            return (<_this.AllMenu />);
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
                                <react_router_dom_1.Route path="/simplebutton" exact component={Playground1_1.default}/>
                                <react_router_dom_1.Route path="/toybutton" exact component={ToyButtonPage_1.default}/>
                                <react_router_dom_1.Route path="/simplecard" exact component={SimpleCardPage_1.default}/>
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
