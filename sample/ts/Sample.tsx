import * as React from 'react';
import * as ReactDom from 'react-dom';
import SampleButton from "../../build/SampleButton/SampleButton"

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
                <SampleButton hoge={true} />
            </div>
        );
    }
}

ReactDom.render(<SampleApp /> , document.getElementById("app"));


