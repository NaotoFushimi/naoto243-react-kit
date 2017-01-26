import * as React from 'react';
import * as ReactDom from 'react-dom';

export default ()=>{
    return (
        <div style={{
            backgroundColor : "black",
            color : "white"
        }}
            onClick={()=>alert(2000)}
        >
            Click
        </div>
    );
}