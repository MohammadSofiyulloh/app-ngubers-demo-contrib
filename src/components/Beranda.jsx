import React from 'react';
import motor1 from './assets/motor1.png';

function Beranda() {
  return (
    <div id="beranda" className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center w-full px-2 py-1">
          <h1 className="py-3 text-5xl md:text-5xl text-center font-bold">Tentang Kami</h1>
          <p className="text-2xl text-justify">Selamat Datang di nguber! Apasih itu nguber? nguber adalah jasa layanan pemesanan nomer satu di Indonesia. Yuk langsung pakai jasa kita!</p>
        </div>

        <div>
          <img className="w-full" src={motor1} alt="motor1" />
        </div>
      </div>
    </div>
  );
}

export default Beranda;
