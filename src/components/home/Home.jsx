import React from "react";
import HeroSection from "./HeroSection";
import AboutUS from "./AboutUS";
import MealPlans from "./MealPlans";
import CustomerTestimonials from './CustomerTestimonials';
import InstagramGallery from './InstagramGallery';
import OrderNow from './OrderNow';

function Home() {
  return (
    <div className="space-y-20">
      {/* <HeroSection /> */}
      <AboutUS />
      {/* <MealPlans /> */}
      <CustomerTestimonials />
      <InstagramGallery />
      <OrderNow />
    </div>
  );
}

export default Home;
