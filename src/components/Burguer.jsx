import {} from 'react'
import '../components/styles/nav.css'
const Burguer = (props) => {
  return (
    <div>
      <div >
        <button className='crp' onClick={props.handleClick}  aria-label="abrir menu" type="button">
        <i className="fa-solid fa-bars"></i></button>
        </div>
    </div>
  )
}

export default Burguer
