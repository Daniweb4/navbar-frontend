import { useState } from 'react';
import '../components/styles/nav.css'
import Burguer from './Burguer';
import { Link } from 'react-router-dom';
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
        <a><Link to='/'>Home</Link></a>
        <a><Link to='/about'>About</Link></a>
        <a><Link to='/product'>Product</Link></a>
        <a><Link to='/contact'>Contact</Link></a>
        <a><Link to='/services'>Services</Link></a>
     
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
