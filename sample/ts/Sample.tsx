import * as React from 'react';
import * as ReactDom from 'react-dom';
import SimpleCard from "../../src/ts/SimpleCard/SimpleCard";
import LoadingButton from "../../lib/LoadingButton/LoadingButton";
import SimpleDrawer from "../../src/ts/SimpleDrawer/SimpleDrawer";


class SampleApp extends React.Component<any, any>{
    constructor(props) {
        super(props);
        this.state = {
            open : true
        }
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
                <SimpleDrawer
                    onOverlayTap={(e)=>{
                        this.setState({
                            open : !this.state.open
                        })
                    }}
                    open={this.state.open}
                    navRender={()=><div>hoge</div>}
                    navStyle={{
                        backgroundColor : "#F0F0F0",
                        boxShadow: "0 0 14px rgba(0,0,0,0.50),0 0px 0px 0px rgba(0,0,0,0.24)",

                    }}

                />
                <SimpleCard style={{
                    width: "320px",
                    height : "400px",
                    margin : "24px",
                }}
                    onClick={()=>{
                        this.setState({
                            open : !this.state.open
                        })

                    }}
                >
                    <div >
                        Card
                        <SimpleCard hover={true}>
                            hoge
                        </SimpleCard>
                    </div>

                </SimpleCard>
                <LoadingButton />
            </div>
        );
    }
}
const dom = document.createElement("div");
dom.style.webkitTapHighlightColor

ReactDom.render(<SampleApp /> , document.getElementById("app"));


