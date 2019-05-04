import React,{Component} from 'react';
import '../css/App.css';
import {primeraMayuscula} from './Helper.js'
export class Resumen extends Component {
   
    mostrarResumen = () => {
        if(!this.props.datos) return null;
        const {marca,plan,year} = this.props.datos;
        return (
            <div className="resumen">
                <h2>Resumen cotización</h2>
                <li>Marca: {primeraMayuscula(marca)}</li>
                <li>Año: {primeraMayuscula(year)}</li>
                <li>Plan: {primeraMayuscula(plan)}</li>
            </div>
        );
    }
    render (){
        const resumen = this.mostrarResumen();
        return resumen;
    }
}