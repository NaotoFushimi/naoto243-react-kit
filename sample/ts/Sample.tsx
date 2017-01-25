import * as React from 'react';
import * as ReactDom from 'react-dom';
const SampleButton = require("../../build/lib/SampleButton/SampleButton.js");

class  SampleApp extends React.Component<any, any>{
    constructor(props) {
        super(props);
    }

    componentWillMount() : void {
    }
    componentDidMount() : void {
    }

    componentWillUpdate() : void {
    }

    componentDidUpdate() : void {
    }

    componentWillUnmount() : void {
        //viewのデストラクタ
    }
    render() {
        return (
            <div >
                <SampleButton />
            </div>
        );
    }
}

ReactDom.render(<SampleApp /> , document.getElementById("app"));


