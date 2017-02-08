"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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
var SimpleButton_1 = require("../../../lib/SimpleButton/SimpleButton");
var SimpleModal_1 = require("../../../lib/SimpleModal/SimpleModal");
var style = require("./PageStyle.pcss");
var Highlight = require('react-highlight');
var codeBlock = "\n    <ToyButton>\n        click\n    </ToyButton>\n    \n    <ToyButton\n        buttonColor=\"#F09090\"\n        shadowColor=\"#A07070\">\n        click\n    </ToyButton>\n";
var SimpleModalPage = (function (_super) {
    __extends(SimpleModalPage, _super);
    function SimpleModalPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isModalOpen: false
        };
        return _this;
    }
    SimpleModalPage.prototype.toggleModal = function () {
        this.setState(__assign({}, this.state, { isModalOpen: !this.state.isModalOpen }));
    };
    SimpleModalPage.prototype.render = function () {
        var _this = this;
        return (<SimpleCard_1.default className={style.page_card}>
                <h1>SimpleModal</h1>
                <Highlight className='html hljs xml' style={{ fontSize: "10px" }}>
                    {codeBlock}
                </Highlight>
                <SimpleButton_1.default onClick={this.toggleModal.bind(this)}>
                    ShowModal
                </SimpleButton_1.default>
                <SimpleModal_1.default fade={true} onOverlayTap={function () {
            _this.toggleModal();
        }} open={this.state.isModalOpen}>
                    <div>
                        うんこ
                    </div>
                </SimpleModal_1.default>
            </SimpleCard_1.default>);
    };
    return SimpleModalPage;
}(React.Component));
SimpleModalPage = __decorate([
    PageDecorator_1.PageDecorater
], SimpleModalPage);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SimpleModalPage;
