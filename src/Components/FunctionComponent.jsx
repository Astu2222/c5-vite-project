const FunctionComponent = ({texto, amount}) => {
    console.log(amount)
    return(
        <>
        <h1> Este es el componente de Funcion {texto}</h1>
        {amount}
        </>
    )
}

export default FunctionComponent;

// const FunctionComponent = (props) => {
//     console.log(props)
//     return(
//         <>
//         <h1> Este es el componente de Funcion </h1>
        
//         </>
//     )
// }

// export default FunctionComponent;