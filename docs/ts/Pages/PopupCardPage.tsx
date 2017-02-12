import * as React from 'react';
import {PageDecorater} from "./PageDecorator";
import SimpleCard from "../../../src/ts/SimpleCard/SimpleCard";
import SimpleButton from "../../../src/ts/SimpleButton/SimpleButton";
import PopupCard from "../../../src/ts/PopupCard/PopupCard";
const style = require("./PageStyle.pcss");

const Ink = require("react-ink");

interface Props {
    
}

interface State {
    page0 : {
        open : boolean;
    }
}

@PageDecorater
export default class PopupCardPage extends React.Component<Props, State>{
    constructor(props) {
        super(props);
        this.state = {
            page0 : {
                open : false
            }
        }
    }

    onPage0ShowChange(){
        const page0 = this.state.page0;
        page0.open = !page0.open;
        this.setState({...this.state , page0})
    }

    testModal(){
        return (
            <PopupCard show={this.state.page0.open}>
                <SimpleButton onClick={()=> this.onPage0ShowChange()}>
                    close
                </SimpleButton>
            </PopupCard>
        );
    }

    render() {
        return (

            <SimpleCard className={style.page_card} >
                <div>
                    <h1>Simple Popup Card</h1>
                    <hr />
                    <SimpleButton onClick={()=> this.onPage0ShowChange()}>
                        <Ink />
                        Show New Page
                    </SimpleButton>
                    <SimpleButton>
                        Jack
                    </SimpleButton>
                </div>
                {this.testModal()}
            </SimpleCard>

        );
    }
}
