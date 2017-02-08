import * as React from 'react';
import SimpleModalProps from "@root/src/ts/SimpleModal/SimpleModalProps";
export default class SimpleModal extends React.Component<SimpleModalProps, {}> {
    prevOpen: boolean | null;
    isAnimationNow: boolean;
    constructor(props: any);
    createAnimation(): void;
    render(): JSX.Element;
}
