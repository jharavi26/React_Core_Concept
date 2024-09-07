import React from  "react";


class CComponent extends React.Component {
    render(){
        return(
            <div className="border">
            <h1>Class Component</h1>
            <h2>{this.props.counter}</h2>

            <hr></hr>
            </div>
        );

    }

}

export default CComponent;