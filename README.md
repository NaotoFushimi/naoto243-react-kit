# My React Library

es6 module or TypeScript friendly

install 
```$xslt
yarn add naoto243-react-kit
    or 
npm install naoto243-react-kit --save 

```


## Components

---
### SimpleCard

#### Usage
```$xslt
import {SimpleCard} from "naoto243-react-kit";

<SimpleCard hover={true} />
```
#### Props
hover : boolean (default : false)
 
---
### SimpleButton

#### Usage

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

#### Usage
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

#### Props
overlayStyle : object;  
overlayClassName : string;  
navStyle : object;  
navClassName :string;  
open : boolean (default : false);  
navRender : ()=> component;   
onOverlayTap : ()=> func;   
closeOffset : number|string  (default : "-220px")  
openSpeedSec : number(Seconds);    

