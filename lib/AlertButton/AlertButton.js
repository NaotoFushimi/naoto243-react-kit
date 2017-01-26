import * as React from 'react';
export default () => {
    return (React.createElement("div", { style: {
            backgroundColor: "black",
            color: "white"
        }, onClick: () => alert(2000) }, "Click"));
};
