import * as React from 'react';
import * as ReactDom from 'react-dom';

require("./style/global.pcss")

//require("babel-polyfill")

import { HashRouter, Switch , Route ,Link } from 'react-router-dom'

import SimpleDrawer from "../../src/ts/SimpleDrawer/SimpleDrawer";
import Playground0 from "./Pages/Playground0";
import Playground1 from "./Pages/Playground1";
const style = require("./Pages/PageStyle.pcss");

const Ink = require("react-ink");

console.log(style)

const header = ({onTouchMenu})=>{
    return (
        <div className={style.header}>
            <div
                className={style.navButton}
                onClick={()=> onTouchMenu()}
            >show menu</div>
            <a href="https://github.com/NaotoFushimi/naoto243-react-kit">to GitHub</a>
        </div>
    );
}

const NoMatch = ()=>{
    return (
        <div>
            404
        </div>
    );
}

class SampleApp extends React.Component<any, any>{
    constructor(props) {
        super(props);
        console.log("hoge")
        this.state = {
            open : false
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

    toggleOpen(){
        this.setState({
            open : !this.state.open
        })
    }

    getMenu = (link , name)=>{
        return (
            <li key={name + "__link"}>
                <Link
                    onClick={()=> this.toggleOpen()}
                    to={link}
                >
                    <Ink />
                    {name}
                </Link>
            </li>
        );
    }

    getLeftMenu =()=>{
        return (
            <div className={style.leftNavLinks}>
                {this.getMenu("/" , "Home")}
                {this.getMenu("/pl1" , "playground1")}
            </div>
        );
    }


    render() {
        console.log(window.location.hash)
        return (
            <HashRouter hashType="slash">
                <div >
                    <SimpleDrawer
                        onOverlayTap={(e)=> this.toggleOpen()}
                        open={this.state.open}
                        navRender={()=>{
                        return (
                            <div>
                                {this.getLeftMenu()}
                            </div>
                        );
                    }}
                        navStyle={{
                        width : "250px",
                        boxShadow: "0 0 14px rgba(0,0,0,0.50),0 0px 0px 0px rgba(0,0,0,0.24)",
                    }}

                        closeOffset="-270px"
                    />
                    {header({
                        onTouchMenu : ()=> this.toggleOpen()
                    })}
                    <div style={{
                        paddingTop : "56px"
                    }}>
                        <div className={style.container}>
                            <Switch>
                                <Route path="/"    exact component={Playground0} />
                                <Route path="/pl1" exact component={Playground1} />
                                <Route component={NoMatch}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

ReactDom.render(<SampleApp /> , document.getElementById("app"));


