import {} from 'react'
import Nav from '../components/Nav'
import ReactPlayer from 'react-player'

const Home = () => {
  return (
    <div>
            <Nav 
        
        />
       <div className='content'>
        <h1>Productos Tecnologicos</h1>
        <img src="https://www.muycanal.com/wp-content/uploads/2014/01/Tecnologia.jpg" alt="" />
        </div>
        <section>
          <h2 className='text-video'>Comercial de Productos</h2>
          <div className='player-wrapper' >
         
          <ReactPlayer  url='https://www.youtube.com/watch?v=fv_KQaCeigA' 
         width='93%'
          controls
          />
         <ReactPlayer url='https://www.youtube.com/watch?v=U1nVhFoQjyw'
              width='93%'
         controls
         />
          </div>
        </section>
    </div>
  )
}

export default Home
