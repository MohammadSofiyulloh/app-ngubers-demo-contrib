import React from 'react';
import motor2 from './assets/motor2.png';

function Login() {
  return (
    <div id="login" className="w-full h-full bg-zinc-200 flex flex-col justify-between">
      <div className="g-6 flex h-full flex-wrap items-center justify-center text-gray-800">
        <div className="xl:w-10/12">
          <div className="g-0 lg:flex lg:flex-wrap">
            <div className="px-4 md:px-0 lg:w-6/12">
              <div className="md:mx-6 md:p-12">
                <form>
                  <p className="mb-4 text-center text-3xl">Login</p>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="Username"
                    ></input>
                  </div>

                  <div className="mb-4">
                    <input
                      type="password"
                      className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="Password"
                    ></input>
                  </div>

                  <div className="mb-12 pt-1 pb-1 text-center">
                    <button
                      className="mb-3 inline-block w-full rounded px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out bg-green-500 hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                      type="button"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none">
              <img className="w-full" src={motor2} alt="motor2"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
