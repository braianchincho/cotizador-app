import React, {Component} from 'react';
import '../css/App.css';
export class Resultado extends Component {

    render(){
        let resultado = this.props.resultado;
        if(resultado){
            resultado = resultado.toFixed(2);
            return (
                <div className = "resumen">
                    <h4>El costo es ${resultado}</h4>
                </div>
            );
        }else{
            return null;
        }
       
    }
}