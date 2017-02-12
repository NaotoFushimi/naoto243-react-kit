
import * as React from 'react';
import HTMLProps = React.HTMLProps;

export interface PopupCardState {
    initialShow : boolean;
}

export interface  PopupCardProps extends HTMLProps<any>{
    show : boolean;
}
