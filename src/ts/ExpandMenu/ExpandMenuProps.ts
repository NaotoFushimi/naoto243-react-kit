import HTMLProps = React.HTMLProps;
import ExpandMenu from "./ExpandMenu";

export interface ExpandMenuProps extends HTMLProps<any>{
    initialOpen? : boolean;
    childList? : Array<any>
    render : (open : boolean)=> any;
    key? : any
}

