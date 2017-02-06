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

@PageDecorater
export default class Playground0 extends React.Component<{},{}>{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SimpleCard className={style.page_card} >
                <div >
                    <div>
                        Component Test
                    </div>
                    <div>
                        {createDummy()}
                    </div>
                </div>
            </SimpleCard>
        );
    }
}
