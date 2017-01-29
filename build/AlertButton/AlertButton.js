import * as React from 'react';
//import SampleButton from "../SampleButton/SampleButton";
import SampleButton from "@root/src/ts/SampleButton";
export default () => {
    return (React.createElement("div", { style: {
            backgroundColor: "black",
            color: "white"
        }, onClick: () => alert(2000) },
        React.createElement(SampleButton, { hoge: true }, "sdsd")));
};
