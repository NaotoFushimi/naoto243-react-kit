import * as React from 'react';
import * as ReactDom from 'react-dom';
import { SampleButton } from "../../src/ts/index";
class SampleApp extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
    }
    componentDidMount() {
    }
    componentWillUpdate() {
    }
    componentDidUpdate() {
    }
    componentWillUnmount() {
        //viewのデストラクタ
    }
    render() {
        return (<div>
                <SampleButton />
            </div>);
    }
}
ReactDom.render(<SampleApp />, document.getElementById("app"));
