import React from "react";

function About(){
    return (
        <div className="md:grid grid-cols-2 py-36 relative z-20">
        <div className="">
            <img className="w-[80%] m-auto shadow-xl shadow-gray-400" src="/static/images/mypic2.jpg" alt="" />
        </div>
        <div>
            <div className="">
                <div className="m-10">
                    <div className="flex">
                        <span className="mb-5 p-3 text-xs bg-gray-100 text-gray-800 font-bold">ABOUT ME</span>
                    </div>
                    <h3 className="text-3xl font-bold">Computer Science Student at BIT Mesra Ranchi</h3>
                    <p className="mt-6 leading-8 text-gray-700">
                    Hello, I'm Kushagra Sahay, a sophomore studying Computer Science at Birla Institute of Technology, Mesra. As a web developer, I enjoy finding creative ways to blend design and functionality for engaging websites. I have a solid understanding of Data Structures and Algorithms, which helps me approach problem-solving with efficiency. Let's connect and explore the exciting possibilities that technology offers
                    </p>
                    <div className="mt-10">
                        <button className="p-5 px-16 text-white bg-black hover:border-2 hover:border-black hover:bg-white hover:text-black hover:animate-bounce">Download CV</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default About