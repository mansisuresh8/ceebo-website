import React from "react";

const InstagramGallery = () => {
  return (
    <div>
      <section className="flex justify-center items-center">
        <div className="text-3xl font-bold underline underline-offset-8">
          <p>Instagram Gallery</p>
        </div>
      </section>
      <div className="flex justify-between items-center px-28 py-20 w-full ">
      <section className="py-4 px-2">
        <div>
          <div className="">
            <img src="./images/InstagramGallery-1.png" alt="" />
          </div>
          <div className="py-4">
            <img src="./images/InstagramGallery-2.png" alt="" />
          </div>
        </div>
      </section>
      <section className="py-4 px-2">
        <div>
          <div>
            <img src="./images/InstagramGallery-3.png" alt="" />
          </div>
          <div className="py-6">
            <img src="./images/InstagramGallery-4.png" alt="" />
          </div>
          <div className="py-6">
            <img src="./images/InstagramGallery-5.png" alt="" />
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
