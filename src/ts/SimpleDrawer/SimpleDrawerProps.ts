import HTMLProps = React.HTMLProps;
interface SimpleDrawerProps extends HTMLProps<any>{
    overlayStyle? : any;
    overlayClassName? : string;
    navStyle? : any;
    navClassName? :string;
    open? : boolean;
    navRender? : Function;
    onOverlayTap? : any;
    closeOffset? : any;
    openSpeedSec? : any;

}

export default SimpleDrawerProps;