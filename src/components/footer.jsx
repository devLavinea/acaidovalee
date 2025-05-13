import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { SiIfood } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


function Footer() {
  return (
    <>
    <footer id="footer" className='w-full h-[80vh] flex flex-col items-center justify-around bg-[#2c003b] text-white'>
  <div className="font-semibold text-[30px]">
      <h2>CONTATOS E LOCALIZAÇÃO</h2>
   </div>
   <div className="flex justify-around items-center w-[95vw]">
       <div className=" gap-[25px] flex flex-col justify-around align-text-left h-[70%] w-[43%] text-[25px] font-normal"> 
         <div className='div-text'> 
            <IoLogoWhatsapp />
            <a href="https://api.whatsapp.com/send?phone=5574999840828&text=Vim%20pelo%20Site!%20Me%20encaminha%20o%20card%C3%A1pio,%20por%20favor!"> (74) 9 9984-0828</a>
         </div>
         <div className='div-text'> 
            <SiIfood />
            <a href="https://www.ifood.com.br/delivery/juazeiro-ba/acai-do-vale-dom-jose-rodrigues/fd6f1b76-44ea-40c3-9fe4-fb3616b952e3"> Açaí do Vale</a>
        </div>
         <div className='div-text'> 
            <MdEmail />
            <a href='mailto:acaidovalee@gmail.com'>acaidovalee@gmail.com</a>
        </div>
         <div className='div-text'>
            <FaLocationDot /> 
            <a href='https://maps.app.goo.gl/nQmVQaQE4JE2aWLW8'>Avenida Beta, Caminho 65, 05, Dom José Rodrigues,<br></br>Juazeiro-Ba 48903-645 </a>
        </div>
         
       </div>
       <div >
        <iframe id="map-canvas" className="map_part w-[40vw] h-[45vh] rounded-[10px]"   frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=caminho sessenta e cinco&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">Powered by <a href="https://www.googlemapsgenerator.com/">embed google maps</a> and <a href="cancelgamstop.com/">gamstop cancel</a></iframe>
       </div>
     </div>
   
    </footer>
    </>
  )
}

export default Footer