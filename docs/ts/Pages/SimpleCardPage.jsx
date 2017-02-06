"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var React = require("react");
var PageDecorator_1 = require("./PageDecorator");
var SimpleCard_1 = require("../../../src/ts/SimpleCard/SimpleCard");
var style = require("./PageStyle.pcss");
var Dummy = function (_a) {
    var c = _a.c;
    return (<div key={c}> Hoge </div>);
};
var createDummy = function () {
    var u = [];
    for (var i = 0; i < 100; i++) {
        u.push(<Dummy key={i} c={"hoge_" + i}/>);
    }
    return u;
};
var Highlight = require('react-highlight');
var codeBlock = "\nimport {SimpleCard} from \"naoto243-react-kit\";\n\n<SimpleCard>\n    ...yourcontent\n</SimpleCard>\n";
var SimpleCardPage = (function (_super) {
    __extends(SimpleCardPage, _super);
    function SimpleCardPage(props) {
        return _super.call(this, props) || this;
    }
    SimpleCardPage.prototype.render = function () {
        return (<SimpleCard_1.default className={style.page_card}>
                <div>
                    <h1>SimpleCard</h1>

                    <Highlight className='html hljs xml' style={{ fontSize: "10px" }}>
                        {codeBlock}
                    </Highlight>
                    <SimpleCard_1.default style={{
            width: "50%",
            height: "320px"
        }}/>
                    <SimpleCard_1.default style={{
            width: "10%",
            height: "320px",
            marginLeft: "8px"
        }}/>
                </div>
            </SimpleCard_1.default>);
    };
    return SimpleCardPage;
}(React.Component));
SimpleCardPage = __decorate([
    PageDecorator_1.PageDecorater
], SimpleCardPage);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SimpleCardPage;
