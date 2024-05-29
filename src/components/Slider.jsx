import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '../components/styles/slider.css'
const Slider = () => {
    const videoPropi=[{
        id:1,
        title:"Video 1",
        src:"https://mistore.com.ec/web/image/144685-08754072/%5B29297%5D%20Redmi%209C%20%28Azul%20Crep%C3%BAsculo%2C%203GB%2C%2064GB%2C%20EU%29%20-%20copia.jpg",
        credir:"Video by cottombro from Pexels"
      },
      {
        id:2,
        title:"Video 2",
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-moy-C_VawOXYZR_ULehDZYWmTOeqAyb4-wSVbmOI-33NocYRgi15QMb5QkSd8nFeCQs&usqp=CAU",
        credir:"Video by cottombro from Pexels"
      },
      {
        id:3,
        title:"Video 3",
        src:'https://fdn.gsmarena.com/imgroot/news/22/10/xiaomi-redmi-a1-plus-india/popup/-x279/gsmarena_001.jpg',
        credir:"Video by cottombro from Pexels"
      }
    
    
    ]
  return (
    <div className='slider'>
        
      <Splide
      options={ {
        rewind: true,
        gap   : '1rem',
      } }
      aria-label="My Favorite Images"
    >
        {
            videoPropi.map(viddeo =>(
                <SplideSlide  key={viddeo.id}>
           <img src={viddeo.src} alt={`Video ${viddeo.src}`}/>
      </SplideSlide>
      

            ) )
        }
      
    </Splide>
    </div>
  )
}

export default Slider
