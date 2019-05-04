import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import '../css/App.css';
import {obtenerDiferenciaAnio,calcularMarca,obtenerPlan} from './Helper.js'
import { Resumen } from './Resumen';
import { Resultado } from './Resultado';
export class Principal extends Component {
    state = {
        resultado:null,
        datos:null
    }
    cotizarSeguro = (datos) => {
        console.log(datos);

        let {marca , plan , year} = datos;

        let resultado = 2000;

        const diferencia = obtenerDiferenciaAnio(year);

        resultado -= ((diferencia*3)*resultado)/100;

        resultado = calcularMarca(marca)*resultado;

        resultado = resultado*obtenerPlan(plan);

        this.setState({
            resultado:resultado,
            datos:datos
        });

    }
    render() {
        return (
        <div className="contenedor">
            <Header titulo="Cotizador de seguros" />
            <div className="contenedor-formulario">
                <Formulario
                    cotizarSeguro={this.cotizarSeguro}
                />
                <Resumen datos={this.state.datos}/>
                <Resultado resultado={this.state.resultado}/>
            </div>
        </div>
        );
    }


}