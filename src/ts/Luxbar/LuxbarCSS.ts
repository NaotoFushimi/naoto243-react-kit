const css = require("glamor").css;
const keyframes  = require("glamor").keyframes;

export const luxbarFixed = css({
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)"
})
