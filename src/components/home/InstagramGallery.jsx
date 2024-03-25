import React from "react";

const InstagramGallery = () => {
  return (
    <div>
      <section className="flex justify-center items-center">
      <div className="flex justify-start items-start flex-col  gap-2">
            <p className="text-3xl font-bold">Instagram Gallery</p>
            <div className="w-3/4 h-1 bg-[#FF9426]"></div>
          </div>
      </section>
      <div className="flex justify-between items-center flex-col lg:flex-row  lg:px-16 px-4 py-8 w-full ">
      <section className="py-4 px-2">
        <div>
          <div className="">
            <img src="./images/InstagramGallery-1.png" alt="" className="object-contain w-full"/>
          </div>
          <div className="py-4">
            <img src="./images/InstagramGallery-2.png" alt="" className="object-contain w-full"/>
          </div>
        </div>
      </section>
      <section className="py-4 px-2">
        <div>
          <div>
            <img src="./images/InstagramGallery-3.png" alt="" className="object-contain w-full"/>
          </div>
          <div className="py-6">
            <img src="./images/InstagramGallery-4.png" alt="" className="object-contain w-full"/>
          </div>
          <div className="py-6">
            <img src="./images/InstagramGallery-5.png" alt="" className="object-contain w-full"/>
          </div>
        </div>
      </section>
      <section className="py-4 px-2">
        <div>
          <div>
            <img src="./images/InstagramGallery-6.png" alt="" />
          </div>
          <div className="py-4">
            <img src="./images/InstagramGallery-7.png" alt="" />
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default InstagramGallery;
