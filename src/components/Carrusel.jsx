import {} from 'react';
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 

import '../components/styles/carousel.css'
import ReactPlayer from 'react-player';


const Carrusel = () => {
  const videoPropi=[{
    id:1,
    title:"Video 1",
    src:"https://www.youtube.com/watch?v=y_KCJH_TH8Y",
    credir:"Video by cottombro from Pexels"
  },
  {
    id:2,
    title:"Video 2",
    src:"https://www.youtube.com/watch?v=M1rtjhmtY5Q&t=9s",
    credir:"Video by cottombro from Pexels"
  },
  {
    id:3,
    title:"Video 3",
    src:'${https://www.youtube.com/watch?v=CerWVONJcTY}',
    credir:"Video by cottombro from Pexels"
  }


]
  return(
  <div className='App'>
    <Carousel>
        {
          videoPropi.map((viddeo) =>{
            return(
              <Carousel.Item key={viddeo.id}>
                  <ReactPlayer url={viddeo.src}
                               width='100%'
                               pip={true}
                               controls={true}
                               playing={true}
                  />
                
              </Carousel.Item>
            )
          })
        }
      </Carousel>
     
      
    
    </div>
  )
}


export default Carrusel
