// import { number } from "prop-types";
import { Component } from "react";

export default class Contador extends Component{
    state = {
        numero : this.props.valorInicial ?? 0,
        passo: this.props.passo ?? 1
    }
    // constructor(props) {
    //     super(props)
    //         this.inc = this.inc.bind(this)
        
    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }
      dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }
    renderForm(){
        return(
            <>
              <input type="number" min={1} max={1000}value={this.state.passo} onChange={ev => this.setState({passo: +ev.target.value})} />
              <button onClick={this.inc}> + </button>
              <button onClick={this.dec}> - </button>
            </>
        )
    }
    render(){
        return(
            <div>
                <h1>contador</h1>
              <h2> Número inicial: {this.props.valorInicial} </h2> 
              <h3> Número parcial:  {this.state.numero}</h3>
             {this.renderForm()}


            </div>
        )
    }
}