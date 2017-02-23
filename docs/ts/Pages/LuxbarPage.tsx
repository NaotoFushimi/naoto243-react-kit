import * as React from 'react';
import {PageDecorater} from "./PageDecorator";
import SimpleCard from "../../../src/ts/SimpleCard/SimpleCard";
import Luxbar from "../../../src/ts/Luxbar/Luxbar";
const style = require("./PageStyle.pcss");

interface Props {

}

interface State {

}

@PageDecorater
export default class LuxbarPage extends React.Component<Props, State>{
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <SimpleCard className={style.page_card} >
                    <div>
                        <h1>Luxbar</h1>
                        <hr />
                        <Luxbar />
                    </div>
                </SimpleCard>
        );
    }
}
