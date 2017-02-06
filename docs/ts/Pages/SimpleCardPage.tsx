import * as React from 'react';
import {PageDecorater} from "./PageDecorator";
import SimpleCard from "../../../src/ts/SimpleCard/SimpleCard";
const style = require("./PageStyle.pcss");

const Dummy = ({c})=> {
    return (
        <div key={c} > Hoge </div>
    );
}

const createDummy = ()=>{
    const u  : any = []
    for (let i=0; i< 100; i++){
        u.push(<Dummy key={i} c={"hoge_" + i}  />);
    }
    return u;
}

const Highlight = require('react-highlight');

const codeBlock = `
import {SimpleCard} from "naoto243-react-kit";

<SimpleCard>
    ...yourcontent
</SimpleCard>
`

@PageDecorater
export default class SimpleCardPage extends React.Component<{},{}>{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SimpleCard className={style.page_card} >
                <div >
                    <h1>SimpleCard</h1>

                    <Highlight className='html hljs xml' style={{fontSize:"10px"}}>
                        {codeBlock}
                    </Highlight>
                    <SimpleCard
                        style={{
                            width : "50%",
                            height : "320px"
                        }}
                    />
                    <SimpleCard
                        style={{
                            width : "10%",
                            height : "320px",
                            marginLeft : "8px"
                        }}
                    />
                </div>
            </SimpleCard>
        );
    }
}
