const Total = (props) => {
    
    const total = props.ejercicios.reduce((s, p) => 
        s+p,0
    )


    return(
        <>Total: {total}</>
    )
    
}

export default Total