import React from "react";

const CustomerSaying = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-full">
        <h1 className="text-xl md:text-2xl lg:text-5xl leading-10 font-railway font-bold mb-5">
          What Customers Saying
        </h1>
      </div>

      <div className=" mt-32 lg:p-10 flex flex-col md:flex-row gap-10  justify-between items-center">
        <div className="shadow-lg mb-10 md:mb-1 rounded-lg relative">
          <div className="absolute bottom-[100%] left-[40%]">
            <img
              className="lg:w-[100px] w-[50px] h-[50px] border border-1-black lg:h-[100px] rounded-full"
              src="https://i.ibb.co.com/qj3zVVF/85.jpg"
              alt=""
            />
          </div>
          <div className="p-5 flex flex-col justify-center items-center gap-5">
            <p className="text-justify text-xs">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
              rem numquam, alias culpa assumenda nobis animi, veritatis aliquid
              iste porro illum ut itaque similique perferendis officia, aliquam
              doloremque? A, harum.
            </p>
            <h2 className="text-xl font-semibold">Keyle Joshp</h2>
            <p>customer</p>
          </div>
        </div>

        <div className="shadow-lg mb-10 md:mb-1 rounded-lg relative">
          <div className="absolute bottom-[100%] left-[40%]">
            <img
              className="lg:w-[100px] w-[50px] h-[50px] border border-1-black lg:h-[100px] rounded-full"
              src="https://i.ibb.co.com/DWV31Hj/75.jpg"
              alt=""
            />
          </div>
          <div className="p-5 flex flex-col justify-center items-center gap-5">
            <p className="text-justify text-xs">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
              rem numquam, alias culpa assumenda nobis animi, veritatis aliquid
              iste porro illum ut itaque similique perferendis officia, aliquam
              doloremque? A, harum.
            </p>
            <h2 className="text-xl font-semibold">Keyle Joshp</h2>
            <p>customer</p>
          </div>
        </div>

        <div className="shadow-lg mb-10 md:mb-1  rounded-lg relative">
          <div className="absolute bottom-[100%] left-[40%]">
            <img
              className="lg:w-[100px] w-[50px] h-[50px] border border-1-black lg:h-[100px] rounded-full"
              src="https://i.ibb.co.com/nfpjXMZ/65.jpg"
              alt=""
            />
          </div>
          <div className="p-5 flex flex-col justify-center items-center gap-5">
            <p className="text-justify text-xs">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
              rem numquam, alias culpa assumenda nobis animi, veritatis aliquid
              iste porro illum ut itaque similique perferendis officia, aliquam
              doloremque? A, harum.
            </p>
            <h2 className="text-xl font-semibold">Keyle Joshp</h2>
            <p>customer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSaying;
