// import React from 'react'

// class ClassComponent extends React.Component {
 
// }

//--------------------------------------------------------------

//import React from 'react'
//import {Component} from 'react'

// class ClassComponent extends React.Component {}

//

import React, { Component } from "react";

const funcion = () => {
    let a = '1';
    a = 'palabra'
    return a;
}

export default // agregarle despues el export default para explicarle a santi
class ClassComponent extends Component{

    render(){
        let textoFuncion = funcion();
        console.log(this.props)

        //CON esta forma evitas estar todo el tiempo this.props. tanto
        let {texto, amount} = this.props;

        // NO ES EN ORDEN, SI CON ARRAYS
        let arr = [1,2,3,4]
        let [a,b,c,d] = arr
        console.log(a)
        
        return (
            <>
                <h1>Este es un componente {texto}</h1>
                <p>{textoFuncion}{amount}</p>
            </>
        )
    }
}

