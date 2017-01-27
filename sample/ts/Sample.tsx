import * as React from 'react';
import * as ReactDom from 'react-dom';
//import SampleButton from "../../src/ts/SampleButton/SampleButton";
import {SampleButton , AlertButton} from "naoto243-react-kit";
import SimpleCard from "../../src/ts/SimpleCard/SimpleCard";
import SimpleButton from "../../src/ts/SimpleButton/SimpleButton";


class SampleApp extends React.Component<any, any>{
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
                <SimpleCard style={{
                    width: "320px",
                    height : "400px",
                    margin : "24px",
                }}>
                    <div >
                        Card
                        <SimpleCard hover={true}>
                            hoge
                        </SimpleCard>
                    </div>

                </SimpleCard>
                <SimpleButton>
                    click
                </SimpleButton>
            </div>
        );
    }
}
const dom = document.createElement("div");
dom.style.webkitTapHighlightColor

ReactDom.render(<SampleApp /> , document.getElementById("app"));


