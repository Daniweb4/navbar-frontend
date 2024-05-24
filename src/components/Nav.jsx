import { useState } from 'react';
import '../components/styles/nav.css'
import Burguer from './Burguer';
const Nav = () => {

  const[cliked, setClicked]=useState(false)
  const handleClick=()=>{
    setClicked(!cliked)
    //console.log(cliked)
  }
  return (
    <>
    <div className='container'>
      <h2>Navbar</h2>
      <div className={`link ${cliked ? 'active': ''}`}>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Producto</a>
        <a href="">Contacto</a>
        <a href="">Servicio</a>
     
      </div>
      <div className="btn">
      <Burguer cliked={cliked} handleClick={handleClick}/>
      </div>
      <div className={`initial ${cliked? ' active' : ''}`}></div>
     
     
    </div>
    </>
  )
}

export default Nav
