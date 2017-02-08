import HTMLProps = React.HTMLProps;
interface SimpleModalProps extends HTMLProps<any> {
    onOverlayTap?: () => any;
    open: boolean;
    overlayClassName?: string;
    overlayStyle?: any;
    modalClassName?: any;
    modalStyle?: any;
    fade?: boolean;
}
export default SimpleModalProps;
