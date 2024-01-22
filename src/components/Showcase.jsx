import React from "react";
import TypeWriter from 'typewriter-effect';
import Part from "./Particles.jsx";
import Navbar from "./Navbar.jsx";

function Showcase() {
  
  return (
    <div>
      <div className="m-0 w-full md:h-[35rem] bg-center bg-cover">
        <div className="flex md:flex-row items-center p-6 mx-auto space-y-0 text-white ">
          <div className="mt-10 z-20 flex flex-col ml-5 md:mb-32 space-y-8 md:w-2/3">
            <Part className="z-0" />
            <h1 className="w-full text-3xl m-0 md:p-1 md:mt-10 md:text-5xl font-bold text-white">Kushagra Sahay</h1>
            <p className="text-4xl md:text-7xl mt-9 pb-3 font-bold overflow-hidden">
              <TypeWriter
                options={{
                  strings: ['Web Developer', 'Programmer', 'Film Buff'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
            <div>
              <button className="text-2xl border-2 border-white p-4 md:px-8 hover:bg-white hover:border-black hover:text-black">See Portfolio</button>
            </div>
          </div>
          <div className="w-1/2 relative">
            <img className="h-[33rem] w-full" src="/static/images/mypicgreen.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
