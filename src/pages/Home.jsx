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
         
          <ReactPlayer className='react-player' url='https://www.youtube.com/watch?v=W13xlgEkurQ' width='90%'/>
         
          </div>
        </section>
    </div>
  )
}

export default Home
