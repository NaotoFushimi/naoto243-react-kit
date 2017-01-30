"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var React = require("react");
var style = require("./PageStyle.css");
var getDisplayName = function (Component) { return Component.displayName || Component.name || 'Component'; };
function PageDecorater(Component) {
    var clazz = (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super.apply(this, arguments) || this;
        }
        class_1.prototype.render = function () {
            var props = __rest(this.props, []);
            return (<div className={style.page}>
                    <Component {...props}/>
                </div>);
        };
        ;
        return class_1;
    }(Component));
    return clazz;
}
exports.PageDecorater = PageDecorater;
