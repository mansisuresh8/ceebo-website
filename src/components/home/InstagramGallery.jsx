import React from "react";

const InstagramGallery = () => {
  return (
    <div>
      <section className="flex justify-center items-center">
        <div className="flex justify-start items-start flex-col  gap-2">
          <p className="text-3xl font-bold">Instagram Gallery</p>
          <div className="flex justify-center items-center w-full">
            <div className="w-3/4 h-1 bg-[#FF9426]"></div>
          </div>
        </div>
      </section>
      <div className="flex justify-between items-center flex-col lg:flex-row  lg:px-16 px-4 py-8 w-full ">
        <section className="py-4 px-2">
          <div>
            <div className="">
              <img
                src="./images/instagram-gallery-1.png"
                alt=""
                className="object-contain w-full"
              />
            </div>
            <div className="py-4">
              <img
                src="./images/instagram-gallery-2.png"
                alt=""
                className="object-contain w-full"
              />
            </div>
          </div>
        </section>
        <section className="py-4 px-2">
          <div>
            <div>
              <img
                src="./images/instagram-gallery-3.png"
                alt=""
                className="object-contain w-full"
              />
            </div>
            <div className="py-6">
              <img
                src="./images/instagram-gallery-4.png"
                alt=""
                className="object-contain w-full"
              />
            </div>
            <div className="py-6">
              <img
                src="./images/instagram-gallery-5.png"
                alt=""
                className="object-contain w-full"
              />
            </div>
          </div>
        </section>
        <section className="py-4 px-2">
          <div>
            <div>
              <img src="./images/instagram-gallery-6.png" alt="" />
            </div>
            <div className="py-4">
              <img src="./images/instagram-gallery-7.png" alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InstagramGallery;
