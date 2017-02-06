import * as React from 'react';
import ToyButton from "../../../src/ts/ToyButton/ToyButton";
import {PageDecorater} from "./PageDecorator";
import SimpleCard from "../../../src/ts/SimpleCard/SimpleCard";
const style = require("./PageStyle.pcss");

interface Props {

}

interface State {

}

const Highlight = require('react-highlight');

const codeBlock = `
    <ToyButton>
        click
    </ToyButton>
    
    <ToyButton
        buttonColor="#F09090"
        shadowColor="#A07070">
        click
    </ToyButton>
`

@PageDecorater
export default class ToyButtonPage extends React.Component<Props, State>{
    constructor(props) {
        super(props);
    }

    render() {
        return (


            <SimpleCard className={style.page_card} >
                <h1>ToyButton</h1>
                <Highlight className='html hljs xml' style={{fontSize:"10px"}}>
                    {codeBlock}
                </Highlight>
                <p>
                    <ToyButton>
                        click
                    </ToyButton>
                </p>
                <p>
                    <ToyButton
                        buttonColor="#F09090"
                        shadowColor="#A07070">
                        click
                    </ToyButton>

                </p>

            </SimpleCard>
        );
    }
}
