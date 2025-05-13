import React from "react";


const Cta = () => {
  return (
    <div className="lg:top-[60px] md:top-[70px] top-[60px] w-full  h-[60vh] md:h-[75vh] lg:h-[100vh] relative">
      <div className="flex w-full h-[5%]  bg-[#2c003b] items-center  relative">
        <div className="letreiro flex w-full h-[5%] justify-around items-center text-white  tracking-[3px] font-bold lg:text-[16px] md:text-[20px] text-[13px] ">
          <h3> EXPERIMENTE O MELHOR AÇAÍ DO VALE! </h3>
        </div>
      </div>
      <div className=" bg-[url('./assets/banner1.png')] bg-cover bg-center  w-full h-[100%]  flex justify-center items-center relative">
        <div className="monte md:w-[570px] md:h-[110px]  h-[60px] w-[300px] md:text-[40px] text-[25px] text-[#2c003b] shadow-[0px_3px_0px_7px_rgba(0,0,0,0.9)] shadow-[#2c003b] rounded-[100px] bg-[#ffd427] absolute top-[60%] justify-around items-center flex  cursor-pointer font-bold ">
          <a
            href="https://api.whatsapp.com/send?phone=5574999840828&text=Vim%20pelo%20Site!%20Me%20encaminha%20o%20card%C3%A1pio,%20por%20favor!"
           
          >
            <h2>Monte Seu Copo!</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cta;
