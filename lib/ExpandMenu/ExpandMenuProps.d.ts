import HTMLProps = React.HTMLProps;
export interface ExpandMenuProps extends HTMLProps<any> {
    initialOpen?: boolean;
    childList?: Array<any>;
    render: (open: boolean) => any;
    key?: any;
}
