import * as React from 'react';
import * as ReactDom from 'react-dom';
require("./style/global.pcss")

import { HashRouter, Switch , Route ,Link } from 'react-router-dom'

import SimpleDrawer from "../../src/ts/SimpleDrawer/SimpleDrawer";
import Playground0 from "./Pages/Playground0";
import Playground1 from "./Pages/Playground1";
import ToyButtonPage from "./Pages/ToyButtonPage";
import ExpandMenu from "../../src/ts/ExpandMenu/ExpandMenu";
import SimpleCardPage from "./Pages/SimpleCardPage";
const style = require("./Pages/PageStyle.pcss");


const Ink = require("react-ink");
const FontAwesome = require('react-fontawesome');

const header = ({onTouchMenu})=>{
    return (
        <div className={style.header}>
            <div className={style.header_contents}>
                <div
                    className={style.navButton}
                    onClick={()=> onTouchMenu()}>
                    <FontAwesome
                        size="2x"
                        name="bars"
                    />
                </div>
                <div>
                    <strong>naoto243-react-kit</strong>
                </div>
                <a href="https://github.com/NaotoFushimi/naoto243-react-kit">
                    <FontAwesome
                        size="2x"
                        name="github"
                    />
                </a>
            </div>
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

    ChildMenu = ({name , open})=>{
        return (
            <div key={name} className={style.list_item}>
                <Ink />
                <p>
                    <span>{name}</span>
                </p>
                <FontAwesome
                    name={open ? "chevron-up" : "chevron-down"}
                />
            </div>
        );
    }

    ChildMenuLink = ({name , location})=>{
        return (
            <div key={name} className={style.list_item}
                 onClick={()=>{
                    console.log(this.router)
                    this.router.history.push(location);
                    this.toggleOpen()
                }}
            >
                <Ink />
                <p>
                    <span>{name}</span>
                </p>
            </div>
        );
    }

    GrandChildMenu = ({location , name})=>{
        return (
            <div
                onClick={()=>{
                    console.log(this.router)
                    this.router.history.push(location);
                    this.toggleOpen()
                }}
                key={location + name} className={style.nested_item}>
                <div  className={style.nested_item_in}>
                    <Ink />
                    {name}
                </div>
            </div>
        );
    }

    AllMenu = ()=> {
        return (
            <div className={style.leftNavLinks}>
                <ExpandMenu key={1} render={()=><this.ChildMenuLink name="Home" location={"/"} />}/>
                <ExpandMenu key={2} render={(op)=><this.ChildMenu name="Buttons" open={op} />}
                            childList={[
                        <ExpandMenu key={1} render={()=><this.GrandChildMenu location="/simplebutton" name="SimpleButton" />} />,
                        <ExpandMenu key={2} render={()=><this.GrandChildMenu location="/toybutton" name="toybutton" />} />,
                    ]}
                            className={style.list_item_parent}
                />
                <ExpandMenu
                    key={3}
                    render={(op)=><this.ChildMenu name="Cards & List" open={op} />}
                    childList={[
                        <ExpandMenu key={1} render={()=><this.GrandChildMenu location="/simplecard" name="SimpleCard" />} />,
                    ]}
                    className={style.list_item_parent}
                />
            </div>
        );
    }

    router;

    render() {
        console.log(window.location.hash)
        return (
            <HashRouter hashType="slash" ref={ref => {
                this.router = ref;
            }}>
                <div >
                    <SimpleDrawer
                        onOverlayTap={(e)=> this.toggleOpen()}
                        open={this.state.open}
                        navRender={()=>{
                        return (
                            <this.AllMenu />
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
                                <Route path="/simplebutton" exact component={Playground1} />
                                <Route path="/toybutton" exact component={ToyButtonPage} />
                                <Route path="/simplecard" exact component={SimpleCardPage} />
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


