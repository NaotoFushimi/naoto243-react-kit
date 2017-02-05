import * as React from 'react';
import {ExpandMenuProps} from "./ExpandMenuProps";

export default class ExpandMenu extends React.Component<ExpandMenuProps, any>{
    constructor(props) {
        super(props);
        const {component , initialOpen , childList , ...other} = props;
        this.state = {
            open : initialOpen ? initialOpen : false
        }
    }

    getChild(){
        if (this.props.childList != null){
            if (this.state.open){
                return (
                    <div>
                        {this.props.childList}
                    </div>
                )
            }
        }
    }

    _onClick(e){
        if (this.props.childList != null){
            this.setState({...this.state, open : !this.state.open})
        }

        if (this.props.onClick){
            this.props.onClick(e);
        }
    }

    render() {
        const {render , initialOpen , childList , onClick , ...other} = this.props;
        return (
            <div {...other} >
                <div onClick={this._onClick.bind(this)}  >{render(this.state.open)}</div>
                {this.getChild()}
            </div>
        );
    }
}
