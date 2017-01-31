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
var index_1 = require("../../../src/ts/index");
var SimpleCard_1 = require("../../../src/ts/SimpleCard/SimpleCard");
var style = require("./PageStyle.css");
var Ink = require("react-ink");
var Highlight = require('react-highlight');
var codeBlock = "\n<SimpleButton>\n    you can click\n</SimpleButton>\n";
var Playground1 = (function (_super) {
    __extends(Playground1, _super);
    function Playground1(props) {
        return _super.call(this, props) || this;
    }
    Playground1.prototype.render = function () {
        return (<SimpleCard_1.default style={{}}>
                <div className="figa">
                    <Highlight className='jsx'>
                        {codeBlock}
                    </Highlight>
                    <hr />
                    <div className={style.componentArea}>
                        <index_1.SimpleButton style={{
            width: "180px"
        }}>
                            <Ink />
                            with react-ink
                        </index_1.SimpleButton>
                    </div>
                    <div className={style.componentArea}>
                        <index_1.SimpleButton>
                            you can click
                        </index_1.SimpleButton>
                    </div>
                    <div className={style.componentArea}>
                        <index_1.SimpleButton>
                            you can click
                        </index_1.SimpleButton>
                    </div>
                </div>

            </SimpleCard_1.default>);
    };
    return Playground1;
}(React.Component));
Playground1 = __decorate([
    PageDecorator_1.PageDecorater
], Playground1);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Playground1;
