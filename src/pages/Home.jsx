import {} from 'react'
import Nav from '../components/Nav'
import Slider from '../components/Slider'
import '@splidejs/react-splide/css';

const Home = () => {
  return (
    <div>
            <Nav />
            <h1 className='text'>Productos Tecnologicos</h1>
       <section className='content'>
        <div className='txt'>   
        <p>¡Bienvenido a nuestra tienda de teléfonos tecnológicos!
           Explora la última y más emocionante selección de teléfonos
           inteligentes en nuestra tienda. Desde dispositivos emblemáticos 
           hasta opciones asequibles, tenemos algo para todos los usuarios, 
           ya sea que busques potencia, estilo o una excelente relación calidad-precio.
       </p> 
       </div>
        <div className='rotate-vert-center'><img src="https://www.muycanal.com/wp-content/uploads/2014/01/Tecnologia.jpg" alt="" /></div>
        
        </section> 
        <div className='txt2'><h1>Comercial de Productos</h1>
        <section className='slider1'>
         
          
        
          <Slider/>
        </section>
        </div>
    </div>
  )
}

export default Home
