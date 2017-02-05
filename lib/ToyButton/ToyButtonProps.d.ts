import * as React from 'react';
import HTMLProps = React.HTMLProps;
export interface ToyButtonProps extends HTMLProps<any> {
    href?: string;
    buttonColor?: string;
    shadowColor?: string;
}
