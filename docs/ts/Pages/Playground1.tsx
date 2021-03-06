import * as React from 'react';
import {PageDecorater} from "./PageDecorator";
import {SimpleButton} from "../../../src/ts/index";
import SimpleCard from "../../../src/ts/SimpleCard/SimpleCard";
const style = require("./PageStyle.pcss");

var Ink = require("react-ink");

interface Props {

}

interface State {

}

const Highlight = require('react-highlight');

const codeBlock = `
<SimpleButton>
    <div>
        <div className={style.componentArea}>
            <SimpleButton style={{width : "180px"}} >
                <Ink />
                with react-ink
            </SimpleButton>
        </div>
    </div>
    you can click
</SimpleButton>
`

@PageDecorater
export default class Playground1 extends React.Component<Props, State>{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SimpleCard className={style.page_card} >
                <div className="figa">
                    <h1>SimpleButton</h1>
                    <Highlight className='html hljs xml' style={{fontSize:"10px"}}>
                        {codeBlock}
                    </Highlight>
                    <hr />
                    <div className={style.componentArea}>
                        <SimpleButton style={{
                            width : "180px"
                        }}>
                            <Ink />
                            with react-ink
                        </SimpleButton>
                    </div>
                    <div className={style.componentArea}>
                        <SimpleButton>
                            you can click
                        </SimpleButton>
                    </div>
                    <div className={style.componentArea}>
                        <SimpleButton>
                            you can click
                        </SimpleButton>
                    </div>
                </div>

            </SimpleCard>
        );
    }
}
