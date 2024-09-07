import React from  "react";
import { CounterContext } from "./CounterContext";


class CComponent extends React.Component {
    render(){
        return(
            <div className="border">
            <h1>Class Component</h1>
            <h2>{this.props.counter}</h2>
            <CounterContext.Consumer>
                {(value) =>{
                    return  <h2>{value}</h2>;
                }}
            </CounterContext.Consumer>

            <hr></hr>
            </div>
        );

    }

}

export default CComponent;