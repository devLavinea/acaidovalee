import React from "react";

function order() {
  return (
    <>
      <div className="  top-0 fixed w-full h-full opacity-90 bg-[#2c003b] z-10"></div>
      <div className="flex justify-center bg-white w-[90%] h-[90%] top-[5%] left-[5%] fixed z-15 overflow-y-auto">
        <div className="w-[60vw] flex flex-col items-center h-auto  ">
          <h1 className="text-[#2c003b] m-[20px] text-[35px] font-semibold">
            Monte Seu Copo
          </h1>

          <div className="pl-[20px] pr-[20px] w-[100%] h-[120px] bg-[#5c0361] text-white flex  justify-between items-center">
            <div className="flex h-[90%] pb-[15px]  flex-col  items-start">
              <h2 className="  text-[25px] font-normal pt-[20px]">
                Escolha o copo!
              </h2>
              <p>Escolha 1 opção.</p>
            </div>
            <div className="pl-[20px] pr-[20px] pt-[7px] pb-[7px] bg-gray-400 rounded ">
              Obrigatório
            </div>
          </div>
          <div className="border-gray-300 border-3 w-[100%] h-[100%] bg-gray-50"></div>
        </div>
      </div>
    </>
  );
}

export default order;
