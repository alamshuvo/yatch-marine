import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
const Hero = () => {
  const [state, toggle] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  });
  return (
    <div>
      <div className="bg-hero-pattern bg-cover w-full h-[80vh] bg-no-repeat font-railway">
        <div className="flex flex-col justify-center items-center h-full lg:space-y-10 md:space-y-6 space-y-4">
          <img src="https://i.ibb.co.com/v3bjRsc/h3.png" alt="" />
          <h1 className="lg:text-4xl md:text-2xl text-xl text-white text-center font-bold">
            We have exclusive yachts for exclusive <br />
            customers with Charter Offers
          </h1>
         
          <animated.div
          style={{
            opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
            scale: x.to({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            }),
          }}
        >
           <button className="btn lg:p-3 p-2 text-center text-white bg-current hover:bg-hover rounded-2xl">
            Get More Offer
          </button>
        </animated.div>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
