import * as React from 'react';
import {PageDecorater} from "./PageDecorator";
import {SimpleButton} from "../../../src/ts/index";
import SimpleCard from "../../../src/ts/SimpleCard/SimpleCard";
const style = require("./PageStyle.css");

var Ink = require("react-ink");

interface Props {

}

interface State {

}


const Highlight = require('react-highlight');

const codeBlock = `
<SimpleButton>
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
            <SimpleCard style={{
            }}>
                <div className="figa">
                    <Highlight className='jsx'>
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
