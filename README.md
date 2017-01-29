# My React Library

es6 module or TypeScript friendly

## Components

---
### SimpleCard
```$xslt
import {SimpleCard} from "naoto243-react-kit";

<SimpleCard hover={true} />
```
#### Props
hover : boolean (default : false)
 
---
### SimpleButton
```$xslt
import {SimpleButton} from "naoto243-react-kit";

<SimpleButton >
    ...
</SimpleButton>
```
#### Props
none
  
---
### SimpleDrawer

```
import {SimpleDrawer} from "naoto243-react-kit";

<SimpleDrawer
    onOverlayTap={(e)=>{
        this.setState({
            open : !this.state.open
        })
    }}
    open={this.state.open}
    navRender={()=><div>hoge</div>}
    navStyle={{
        backgroundColor : "#F0F0F0",
        boxShadow: "0 0 14px rgba(0,0,0,0.50),0 0px 0px 0px rgba(0,0,0,0.24)",
    }}
/>
```  

### Props
overlayStyle : object;  
overlayClassName : string;  
navStyle : object;  
navClassName :string;  
open : boolean (default : false);  
navRender : ()=> component;   
onOverlayTap : ()=> func;   
closeOffset : number|string  (default : "-220px")  
openSpeedSec : number(Seconds);    

