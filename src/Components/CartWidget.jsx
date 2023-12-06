import React from 'react'

const CartWidget = () => {
    const estiloCarrito = {
        width: '40px',
        height: '40px'
    }
    const estiloBoton = {
        border: 'none',
        background: 'transparent',
        display: 'flex',
        alignItems: 'flex-end',
        cursor: 'pointer', 
        outline: 'none'
    }
    const estiloContador = {
        backgroundColor: 'red',
        borderRadius: '10px', 
        border: '2px solid red', 
        padding: '0.1px'
    }
  return (
    <button style={estiloBoton}>
        <span style={estiloContador}> 0 </span>
        <img style={estiloCarrito} src="./sack.png" alt=""/>
        
    </button>
  )
}

export default CartWidget
