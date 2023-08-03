import React from 'react'
import { titleStyles } from './Navbar.styles'


const Navbar = () => {

    const titulos = ['Home', 'Shop', 'Contact', 'About']

  return (
    <div style={{display: 'flex'}}>
        {titulos.map((titulo, indice) => <h4 style={titleStyles} key={indice}>{titulo}</h4>)}
    </div>
  )
}

export default Navbar