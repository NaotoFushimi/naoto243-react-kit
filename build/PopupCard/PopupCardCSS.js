const css = require("glamor").css;
const keyframes = require("glamor").keyframes;
export const card = css({
    width: "100%",
    height: "100%",
    position: "fixed",
    backgroundColor: "#FFF",
    zIndex: 100,
    top: 0,
    left: 0,
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
});
export const cardInline = css({
    position: "relative"
});
export const openAnimation = keyframes({
    '0%': {
        opacity: 0,
        transform: "translateY(100%)"
    },
    '100%': {
        opacity: 1,
        transform: "translateY(0%)"
    }
});
export const closeAnimation = keyframes({
    'from': {
        opacity: 1,
        transform: "translateY(0%)"
    },
    'to': {
        opacity: 0,
        transform: "translateY(100%)"
    }
});
export function createAnimation(open) {
    const animationType = open ? openAnimation : closeAnimation;
    return css({
        animation: `${animationType} 0.25s forwards`,
    });
}
