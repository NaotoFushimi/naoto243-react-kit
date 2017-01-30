import * as React from 'react';
import * as ReactDom from 'react-dom';

//require("babel-polyfill")

import { HashRouter, Match, Miss, Link } from 'react-router'

import SimpleDrawer from "../../src/ts/SimpleDrawer/SimpleDrawer";
import Playground0 from "./Pages/Playground0";
import Playground1 from "./Pages/Playground1";
const style = require("./Pages/PageStyle.css");

const Ink = require("react-ink");

console.log(style)

const header = ({onTouchMenu})=>{
    return (
        <div
            style={{
            position : "fixed",
            top : 0,
            left : 0,
            width : "100%",
            minHeight : "56px",
            backgroundColor : "#A0A0A0",
            display : "flex",
            flexDirection : "row",
            alignItems : "center",
            justifyContent : "space-around",
            zIndex : 100,
        }}>
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
                    className={style.navLink}
                    to={link}
                >
                    <Ink />
                    {name} vv
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
            <HashRouter>
                <div>
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
                        width : "300px",
                        boxShadow: "0 0 14px rgba(0,0,0,0.50),0 0px 0px 0px rgba(0,0,0,0.24)",
                    }}

                    closeOffset="-320px"
                />
                    {header({
                        onTouchMenu : ()=> this.toggleOpen()
                    })}
                    <div style={{
                        paddingTop : "56px"
                    }}>
                        <div className={style.container}>
                            <Match exactly pattern="/" component={Playground0} />
                            <Match exactly pattern="/pl1" component={Playground1} />
                            <Miss component={NoMatch}/>
                        </div>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

ReactDom.render(<SampleApp /> , document.getElementById("app"));


