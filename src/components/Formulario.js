import React, { Component } from 'react';

class Formulario extends Component {

    // refs son para leer los valores de los campos de un formulario
    marcaRef = React.createRef();
    yearRef = React.createRef();
    planBasicoRef = React.createRef();
    planCompletoRef = React.createRef();
    state = {
        marcas: [],
        years: []
    };
    componentDidMount() {
        const marcas = [{ value: "americano", label: "Americano" }, { value: "europeo", label: "Europeo" }, { value: "asiatico", label: "Asiatico" }];
        const years = [];
        const todayYear = Number(new Date().getFullYear());
        for (let i = todayYear; i >= 2008; i--)years.push(i);
        this.setState({
            marcas: marcas,
            years: years
        });
        this.planBasicoRef.current.checked = true;
    }
    cotizarSeguro = (e) => {
        e.preventDefault();

        // leer el plan
        const plan = this.planBasicoRef.current.checked ? 'basico' : 'completo';

        // obtener los datos
        // console.log(this.marcaRef.current.value);

        // crear el objeto
        const infoAuto = {
            marca: this.marcaRef.current.value,
            year: this.yearRef.current.value,
            plan: plan
        }

        // enviarlo al componente principal
        this.props.cotizarSeguro(infoAuto);

        // resetear el formulario (opcional)
        // e.currentTarget.reset() 
    }

    render() {
        return (
            <div className="cotizar-auto">
                <form onSubmit={this.cotizarSeguro} >
                    <div className="campo">
                        <label>Marca</label>
                        <select name="marca" ref={this.marcaRef} >
                            {this.state.marcas.map((item, index) => {
                                return (<option key={index} value={item.value}>{item.label}</option>)
                            })}
                        </select>
                    </div>

                    <div className="campo">
                        <label>Año</label>
                        <select name="year" ref={this.yearRef} >
                            {this.state.years.map(item => {
                                return (<option key={item} value={item}>{item}</option>)
                            })}
                        </select>
                    </div>
                    <div className="campo">
                        <label>Plan:</label>
                        <input type="radio" ref={this.planBasicoRef} name="plan" value="basico" /> Básico
                      <input type="radio" ref={this.planCompletoRef} name="plan" value="completo" /> Completo
                  </div>

                    <button type="submit" className="boton">Cotizar</button>
                </form>
            </div>
        );
    }
}
export default Formulario;