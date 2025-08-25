// import { number } from "prop-types";
import { Component } from "react";

export default class Contador extends Component{
    state = {
        numero : 7
    }
    render(){
        return(
            <div>
                <h1>contador</h1>
              <h2>{this.props.valorInicial} </h2> 
              <h3>{this.state.numero}</h3>
            </div>
        )
    }
}