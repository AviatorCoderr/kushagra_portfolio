import React from "react";
import skillsdet from "../skillsdet";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3, // Adjust this value
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

function Skills(props) {
  return (
    <div className="bg-gray-100 relative z-20">
      <div>
        <div className="pt-32 mx-8 grid grid-cols-2">
          <div className="mx-8">
            <h3 className="text-3xl font-bold">
              I have high skills in developing and programming
            </h3>
            <p className="mt-6 leading-8 text-gray-600">
              Continuously seeking to expand my skill set, I am dedicated to
              staying updated on emerging technologies. Aspiring to become a
              software developer, I am committed to acquiring the foundational
              skills essential for future success in the field.
            </p>
          </div>
          <div className="">
            <div className="mx-8">
              {skillsdet.map((ele, index) => (
                <div className="mb-8" key={index}>
                  <span className="">{ele.name}</span>
                  <span className="float-right">{ele.percent}</span>
                  <div className="w-full mt-2 bg-gray-200 rounded-full h-1 dark:bg-gray-200">
                    <div
                      className="bg-black h-1 rounded-full"
                      style={{ width: `${ele.percent}` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default Skills;
