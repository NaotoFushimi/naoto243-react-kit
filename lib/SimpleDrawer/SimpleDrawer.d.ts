import * as React from 'react';
import SimpleDrawerProps from "./SimpleDrawerProps";
export default class SimpleDrawer extends React.Component<SimpleDrawerProps, any> {
    constructor(props: any);
    getDrawerStyle(openSpeedSec: any, closeOffset: any): any;
    componentWillUpdate(): void;
    prevCloseOffset: string;
    prevOpenSpeed: number;
    prevOpen: boolean | undefined;
    overlayComponent: any;
    render(): JSX.Element;
}
