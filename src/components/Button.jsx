import React from "react";
import './Button.css'

const buttonComponent = props => {
    let classProps = 'button '
    classProps += props.operation ? 'operation' : ''
    classProps += props.double ? 'double' : ''
    classProps += props.triple ? 'triple' : ''

    return (
        <button 
        onClick={e => props.click && props.click(props.label)}
        className={classProps}>
        {props.label}

        </button>


    )
}
export default buttonComponent