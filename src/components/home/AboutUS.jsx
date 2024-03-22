import React from "react";

const AboutUS = () => {
  return (
    <div className="bg-red-500">
      <section className="flex justify-between items-center px-10">
        <div className="">
          <img src="./images/aboutImage-1.png" alt="" className=""/>
        </div>
        <div className="">
          <div>
            <img src="./images/aboutImage-2.png" alt="" />
          </div>
          <div>
            <img src="./images/aboutImage-3.png" alt="" />
          </div>
        </div>
      </section>

      <section>
        <div>
          <p>About Us</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUS;
