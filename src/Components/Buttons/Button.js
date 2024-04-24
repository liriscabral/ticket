import { Fragment } from "react";
import './button.css'

const Button = (props) =>{

    let background = props.action === 'Salvar' ? 'bt-salvar' : 'bt-cancelar';
    background = props.noAction ? 'noAction' : background;
    let size = 'p';

    if(props.size === 'm'){
        size = 'm';
    }else if(props.size === 'g'){
        size = 'g';
    }

   return(
        <Fragment>     
        <button className={`${background} ${size}`}>{props.action}</button>            
        </Fragment>
    );

}

export default Button;