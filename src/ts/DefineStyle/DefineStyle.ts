const uniqName = "naoto243-defineStyle-inline-xxxxxxx";

let styled : HTMLElement;

if (!window[uniqName]){
    window[uniqName] = true;

    const head = document.getElementsByTagName("head")[0];
    styled = document.createElement("style");
    styled.id = uniqName;
    styled["type"]= "text/css"
    head.appendChild(styled);
}

let counter : number = 0;

export const compileInit = ( input : { [key : string]: string }) =>{

    const keyMap : { [key : string]: string } = {}

    Object.keys(input)
        .map((key)=>{
            const  m  : string = "naoto243-define-style---" + key + "---" + Math.round(Math.random() * 1000000) + "___" + counter;
            keyMap[key] = m;
            styled["innerHTML"] += `\n .${m} { \n`;
            styled["innerHTML"] += input[key];
            styled["innerHTML"] += `\n } \n`;
        })
    counter++;
    return keyMap;
}










