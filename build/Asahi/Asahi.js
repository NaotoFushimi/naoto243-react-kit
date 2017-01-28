const uniqName = "Asahi-styled-comp1219------xxxxxxx";
const styledPush = {};
let styled;
if (!window[uniqName]) {
    window[uniqName] = true;
    const head = document.getElementsByTagName("head")[0];
    styled = document.createElement("style");
    styled.id = uniqName;
    styled["type"] = "text/css";
    head.appendChild(styled);
}
export const compileInit = (input) => {
    const keyMap = {};
    console.log(input);
    Object.keys(input)
        .map((key) => {
        const m = "asahi__" + Math.round(Math.random() * 1000000) + "___";
        keyMap[key] = m;
        styled["innerHTML"] += `\n .${m} { \n`;
        styled["innerHTML"] += input[key];
        styled["innerHTML"] += `\n } \n`;
    });
    return keyMap;
};
