import * as React from 'react';
import {PopupCardProps, PopupCardState} from "./PopupCardProps";

const cssClass = require("./PopupCardCSS");

export default class PopupCard extends React.Component<PopupCardProps , PopupCardState>{
    constructor(props) {
        super(props);
        this.state = {
            initialShow : this.props.show != null ? this.props.show : false
        }
    }

    _onClick(e){
        if (this.props.onClick != null){
            this.props.onClick(e);
        }
        try {
            e.preventDefault();
            e.stopPropagation();
        } catch (err){

        }
    }

    render() {

        const {show , onClick , className  ,onTouchStart , style ,...otherProps} = this.props;

        if (!this.state.initialShow){

        }

        const masterStyle = {zIndex : 100  , ...style}
        const masterClassName = [cssClass.card , cssClass.createAnimation(show) , className].join(" ")

        return (
            <div
                className={masterClassName}
                onClick={this._onClick.bind(this)}
                style={masterStyle}
                {...otherProps}
            >
                <div className={cssClass.cardInline}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
