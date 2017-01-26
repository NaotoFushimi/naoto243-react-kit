"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var SampleButton = (function (_super) {
    __extends(SampleButton, _super);
    function SampleButton(props) {
        return _super.call(this, props) || this;
    }
    SampleButton.prototype.render = function () {
        return (<div>
                test
            </div>);
    };
    return SampleButton;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SampleButton;
