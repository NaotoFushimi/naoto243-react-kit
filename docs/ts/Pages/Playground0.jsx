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
var style = require("./PageStyle.css");
var Dummy = function () {
    return (<div>Hoge</div>);
};
var createDummy = function () {
    var u = [];
    for (var i = 0; i < 100; i++) {
        u.push(<Dummy />);
    }
    return u;
};
var Playground0 = (function (_super) {
    __extends(Playground0, _super);
    function Playground0(props) {
        return _super.call(this, props) || this;
    }
    Playground0.prototype.render = function () {
        return (<SimpleCard_1.default className={style.page_card}>
                <div>
                    <div>
                        Component Test
                    </div>
                    <div>
                        {createDummy()}
                    </div>
                </div>
            </SimpleCard_1.default>);
    };
    return Playground0;
}(React.Component));
Playground0 = __decorate([
    PageDecorator_1.PageDecorater
], Playground0);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Playground0;
