import * as React from 'react';
import {LuxbarProps} from "./LuxbarProps";

require("./LuxbarCSS")

export default class Luxbar extends React.Component<LuxbarProps  ,{}>{
    constructor(props) {
        super(props);
    }

    getBarClassName() : string{

        const {
            barMode
        } = this.props;

        let barClassName = "naoto243-luxbar-fixed"
        switch (barMode){
            case "static": {
                barClassName = "naoto243-luxbar-static";
                break;
            }
            case "fixed": {
                barClassName = "naoto243-luxbar-fixed"
                break;
            }
            default : {
                barClassName = "naoto243-luxbar-static"
                break;
            }
        }

        return barClassName;

    }

    render() {

        return (
            <div className={`naoto243-luxbar ${this.getBarClassName()}`}>
                <input type="checkbox" id="naoto243-luxbar-checkbox" className="naoto243-luxbar-checkbox" />
                    <div className="naoto243-luxbar-menu naoto243-luxbar-menu-right naoto243-luxbar-menu-dark">
                        <ul className="naoto243-luxbar-navigation">
                            <li className="naoto243-luxbar-header">
                                <a className="naoto243-luxbar-brand" >Brand</a>
                                <label className="naoto243-luxbar-hamburger naoto243-luxbar-hamburger-doublespin"
                                       htmlFor="naoto243-luxbar-checkbox">
                                    <span></span>
                                </label>
                            </li>
                            <li className="naoto243-luxbar-item active"><a>Home</a></li>
                            <li className="naoto243-luxbar-item naoto243-lux-dropdown"><a >Users</a>
                                <ul>
                                    <li className="naoto243-luxbar-item" ><a >Max</a></li>
                                    <li className="naoto243-luxbar-item" ><a >Edgar</a></li>
                                    <li className="naoto243-luxbar-item" ><a >John</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
            </div>
        );
    }
}
