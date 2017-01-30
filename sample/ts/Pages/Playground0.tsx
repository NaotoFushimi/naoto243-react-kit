import * as React from 'react';
import {PageDecorater} from "./PageDecorator";

interface Props {

}

interface State {

}

@PageDecorater
export default class Playground0 extends React.Component<Props, State>{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <div>
                    コングロマリット
                </div>
                <div>
                    コングロマリット
                </div>
                <div>
                    コングロマリット
                </div>
                <div>
                    コングロマリット
                </div>
                <div>
                    コングロマリット
                </div>
            </div>
        );
    }
}
