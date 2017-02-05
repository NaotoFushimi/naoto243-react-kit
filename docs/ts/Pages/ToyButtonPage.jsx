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
var ToyButton_1 = require("../../../src/ts/ToyButton/ToyButton");
var PageDecorator_1 = require("./PageDecorator");
var SimpleCard_1 = require("../../../src/ts/SimpleCard/SimpleCard");
var style = require("./PageStyle.pcss");
var ToyButtonPage = (function (_super) {
    __extends(ToyButtonPage, _super);
    function ToyButtonPage(props) {
        return _super.call(this, props) || this;
    }
    ToyButtonPage.prototype.render = function () {
        return (<SimpleCard_1.default className={style.page_card}>
                <h1>ToyButton</h1>
                <p>
                    <ToyButton_1.default>
                        click
                    </ToyButton_1.default>
                </p>
                <p>
                    <ToyButton_1.default buttonColor="#F09090" shadowColor="#A07070">
                        click
                    </ToyButton_1.default>

                </p>

            </SimpleCard_1.default>);
    };
    return ToyButtonPage;
}(React.Component));
ToyButtonPage = __decorate([
    PageDecorator_1.PageDecorater
], ToyButtonPage);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ToyButtonPage;
