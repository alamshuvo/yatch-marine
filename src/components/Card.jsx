import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
const Card = () => {
    const [state, toggle] = useState(true);
    const { x } = useSpring({
      from: { x: 0 },
      x: state ? 1 : 0,
      config: { duration: 1000 },
    });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      <div className="flex flex-col justify-center items-center bg-white space-y-5 p-2 rounded-lg">
        <img
          className="w-full"
          src="https://i.ibb.co.com/f8Sy66n/fy1.jpg"
          alt=""
        />
        <h1 className="mt-4 mb-2 text-2xl font-bold">Sunseeker Marine</h1>
        <p className="mt-2 mb-2 text-hover font-bold">$245,000 / week</p>
        <animated.div
          style={{
            opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
            scale: x.to({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            }),
          }}
        >
           <button className="bg-current hover:bg-hover p-3 rounded-lg text-white">
          Read More
        </button>
        </animated.div>
      </div>
      <div className="flex flex-col justify-center items-center bg-white space-y-5 p-2 rounded-lg">
        <img
          className="w-full"
          src="https://i.ibb.co.com/KwMcDdN/fy2.jpg"
          alt=""
        />
        <h1 className="mt-4 mb-2 text-2xl font-bold">Pearl Noire</h1>
        <p className="mt-2 mb-2 text-hover font-bold">$245,000 / week</p>
        <animated.div
          style={{
            opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
            scale: x.to({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            }),
          }}
        >
           <button className="bg-current hover:bg-hover p-3 rounded-lg text-white">
          Read More
        </button>
        </animated.div>
      </div>
      <div className="flex flex-col justify-center items-center bg-white space-y-5 p-2 rounded-lg">
        <img
          className="w-full"
          src="https://i.ibb.co.com/r7C961c/fy3.jpg"
          alt=""
        />
        <h1 className="mt-4 mb-2 text-2xl font-bold">Iceman X-Zone</h1>
        <p className="mt-2 mb-2 text-hover font-bold">$245,000 / week</p>
        <animated.div
          style={{
            opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
            scale: x.to({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            }),
          }}
        >
           <button className="bg-current hover:bg-hover p-3 rounded-lg text-white">
          Read More
        </button>
        </animated.div>
      </div>
      <div className="flex flex-col justify-center items-center bg-white space-y-5 p-2 rounded-lg">
        <img
          className="w-full"
          src="https://i.ibb.co.com/r7C961c/fy3.jpg"
          alt=""
        />
        <h1 className="mt-4 mb-2 text-2xl font-bold">Iceman X-Zone</h1>
        <p className="mt-2 mb-2 text-hover font-bold">$245,000 / week</p>
       
        <animated.div
          style={{
            opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
            scale: x.to({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            }),
          }}
        >
           <button className="bg-current hover:bg-hover p-3 rounded-lg text-white">
          Read More
        </button>
        </animated.div>
      </div>
    </div>
  );
};

export default Card;
