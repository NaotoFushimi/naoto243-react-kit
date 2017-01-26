import * as React from 'react';
import * as ReactDom from 'react-dom';
import HTMLProps = React.HTMLProps;

export interface SimpleCardProps extends HTMLProps<any>{
    hover? : boolean;
}