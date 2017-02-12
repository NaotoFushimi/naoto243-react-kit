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
var SimpleButton_1 = require("../../../src/ts/SimpleButton/SimpleButton");
var PopupCard_1 = require("../../../src/ts/PopupCard/PopupCard");
var style = require("./PageStyle.pcss");
var Ink = require("react-ink");
var PopupCardPage = (function (_super) {
    __extends(PopupCardPage, _super);
    function PopupCardPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            page0: {
                open: false
            }
        };
        return _this;
    }
    PopupCardPage.prototype.onPage0ShowChange = function () {
        var page0 = this.state.page0;
        page0.open = !page0.open;
        this.setState(__assign({}, this.state, { page0: page0 }));
    };
    PopupCardPage.prototype.testModal = function () {
        var _this = this;
        return (<PopupCard_1.default show={this.state.page0.open}>
                <SimpleButton_1.default onClick={function () { return _this.onPage0ShowChange(); }}>
                    close
                </SimpleButton_1.default>
            </PopupCard_1.default>);
    };
    PopupCardPage.prototype.render = function () {
        var _this = this;
        return (<SimpleCard_1.default className={style.page_card}>
                <div>
                    <h1>Simple Popup Card</h1>
                    <hr />
                    <SimpleButton_1.default onClick={function () { return _this.onPage0ShowChange(); }}>
                        <Ink />
                        Show New Page
                    </SimpleButton_1.default>
                    <SimpleButton_1.default>
                        Jack
                    </SimpleButton_1.default>
                </div>
                {this.testModal()}
            </SimpleCard_1.default>);
    };
    return PopupCardPage;
}(React.Component));
PopupCardPage = __decorate([
    PageDecorator_1.PageDecorater
], PopupCardPage);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PopupCardPage;
