import * as React from 'react';
import ToyButton from "../../../src/ts/ToyButton/ToyButton";
import {PageDecorater} from "./PageDecorator";
import SimpleCard from "../../../src/ts/SimpleCard/SimpleCard";
import SimpleButton from "../../../src/ts/SimpleButton/SimpleButton";
import SimpleModal from "../../../src/ts/SimpleModal/SimpleModal";
const style = require("./PageStyle.pcss");

interface Props {

}

interface State {

}

const Highlight = require('react-highlight');

const codeBlock = `
    <ToyButton>
        click
    </ToyButton>
    
    <ToyButton
        buttonColor="#F09090"
        shadowColor="#A07070">
        click
    </ToyButton>
`

@PageDecorater
export default class SimpleModalPage extends React.Component<Props, any>{
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen : false
        }
    }

    toggleModal(){
        this.setState({...this.state , isModalOpen : !this.state.isModalOpen})
    }

    render() {
        /*
        <Highlight className='html hljs xml' style={{fontSize:"10px"}}>
            {codeBlock}
        </Highlight>
        */
        return (

            <SimpleCard className={style.page_card} >
                <h1>SimpleModal</h1>

                <SimpleButton onClick={this.toggleModal.bind(this)}>
                    ShowModal
                </SimpleButton>
                <SimpleModal
                    fade={true}
                    onOverlayTap={()=>{
                        this.toggleModal();
                    }}
                    open={this.state.isModalOpen}>
                    <div className={style.modal}>
                        <div>
                            Modal Content!------------------------ascasc--------------ascasc---------------------------------acacs
                        </div>
                        <hr />
                        <div className={style.modal_under_menu}>
                            <SimpleButton onClick={this.toggleModal.bind(this)}>
                                close
                            </SimpleButton>
                        </div>
                    </div>
                </SimpleModal>
            </SimpleCard>
        );
    }
}
