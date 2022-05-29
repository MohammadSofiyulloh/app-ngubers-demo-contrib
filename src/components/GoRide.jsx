import React from 'react';

function GoRide() {
  return (
    <div>
      <div id="goride" className="bg-gradient-to-br from-zinc-200 to-zinc-200 shadow-md">
        <div className="h-15 mx-auto flex w-full items-center justify-between px-20 text-black">
          <div className="flex flex-col lg:flex-row">
            <h1 className="block py-3 pl-3 text-2xl font-bold text-black hover:text-green-400 lg:py-3">Back</h1>
          </div>
          <div className="flex w-1/2 flex-col justify-between py-4 lg:flex-row lg:py-0">
            <div className="flex flex-col lg:flex-row">
              <h1 className="text-green block px-4 py-3 text-3xl font-bold text-green-400 hover:text-green-700 lg:py-3">GoCar</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-green-600 to-green-600 shadow-md">
        <div className="mx-auto flex h-24 w-full items-center justify-between px-20">
          <div className="flex flex-col lg:flex-row">
            <h1 className="block px-4 py-3 text-xl font-bold text-white lg:py-3">
              Pesan GoCar <br />
              Nikmati Perjalananmu dengan aman dan nyaman
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div></div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-between">
        <div className="g-6 flex h-screen flex-wrap items-center justify-center text-black">
          <div className="xl:w-10/12">
            <div className="g-0 lg:flex lg:flex-wrap">
              <div className="px-4 md:px-0 lg:w-full">
                <div className="md:mx-6 md:p-12">
                  <form>
                    <h1 className="mb-4 text-3xl">Titik Penjemputan</h1>
                    <div className="mb-4">
                      <input
                        type="text"
                        className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                        id="lokasiPenjemputan"
                        placeholder="Titik Penjemputan"
                      />
                    </div>
                    <h1 className="mb-4 text-3xl">Titik Pengantaran</h1>
                    <div className="mb-4">
                      <input
                        type="text"
                        className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                        id="lokasiPengantaran"
                        placeholder="Titik Pengantaran"
                      />
                    </div>
                    <h1 className="mb-4 text-3xl">Deskripsi</h1>
                    <div className="mb-4">
                      <input
                        type="text"
                        className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                        id="deskripsi"
                        placeholder="Deskripsi"
                      />
                    </div>
                    <h1 className="mb-4 text-3xl">Metode Pembayaran</h1>
                    <div className="mb-4">
                      <input
                        type="text"
                        className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                        id="metodePembayaran"
                        placeholder="Metode Pembayaran"
                      />
                    </div>
                  </form>
                  <div className="mb-12 pt-1 pb-1 text-center">
                    <button
                      className="mb-3 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out bg-green-500 hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                      type="button"
                    >
                      Pesan Sekarang
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoRide;
