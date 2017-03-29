import * as React from 'react';
import {PageDecorater} from "./PageDecorator";
import SimpleCard from "../../../src/ts/SimpleCard/SimpleCard";
import Luxbar from "../../../src/ts/Luxbar/Luxbar";
const style = require("./PageStyle.pcss");

interface Props {

}

interface State {
    isFixed : boolean;
}

const Highlight = require('react-highlight');


const code = `
        <Luxbar
            barMode={this.state.isFixed ? "fixed" : "static"}
        />
`;

@PageDecorater
export default class LuxbarPage extends React.Component<Props, State>{
    constructor(props) {
        super(props);

        this.state  = {
            isFixed : false
        }
    }

    onCheck(e){
        this.setState(
            {...this.state ,
                isFixed : !this.state.isFixed
            })
    }

    render() {
        return (
                <SimpleCard className={style.page_card} >
                    <div style={{height : "420px"}}>
                        <h1>Luxbar</h1>

                        <Highlight className='html hljs xml' style={{fontSize:"10px"}}>
                            {code}
                        </Highlight>
                        <hr />
                        mode fixed  <input type="checkbox" onChange={this.onCheck.bind(this)} />
                        <hr />
                        <div style={{position : "relative"}}>
                            <Luxbar
                                barMode={this.state.isFixed ? "fixed" : "static"}
                            />
                        </div>
                    </div>
                </SimpleCard>
        );
    }
}
