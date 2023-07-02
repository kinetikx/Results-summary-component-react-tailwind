import React from "react";
import Reaction from "./Assets/asset 0.svg";
import Memory from "./Assets/asset 1.svg";
import Verbal from "./Assets/asset 2.svg";
import Visual from "./Assets/asset 3.svg";
import Button from "./button";
const Summary = () => {
  return (
    <div className=" h-[48vh]  shadow-2xl  rounded-r-3xl ">
      <div className=" mx-10  ">
        <p className="py-5 text-summaryText font-bold text-lg">Summary</p>
        <div className="py-4 mb-4 rouded-xl bg-reactionBg rounded-xl px-3 flex flex-row justify-between text-reactionText ">
          <i className="flex flex-row font-semibold">
            <img className="mr-3" src={Reaction} /> Reaction
          </i>
          <span className="text-black font-bold">
            80 <span className="text-circleGray"> /100 </span>
          </span>
        </div>

        <div className="py-4 rouded-xl mb-4 bg-memoryBg rounded-xl px-3 flex flex-row justify-between text-memoryText ">
          <i className="flex flex-row font-semibold">
            <img className="mr-3" src={Memory} /> Reaction
          </i>
          <span className="text-black font-bold">
            92 <span className="text-circleGray"> /100 </span>
          </span>
        </div>
        <div className="py-4 rouded-xl mb-4 bg-verbalBg rounded-xl px-3 flex flex-row justify-between text-verbalText ">
          <i className="flex flex-row font-semibold">
            <img className="mr-3" src={Verbal} /> Reaction
          </i>
          <span className="text-black font-bold">
            61 <span className="text-circleGray"> /100 </span>
          </span>
        </div>
        <div className="py-4 rouded-xl  bg-visualBg rounded-xl px-3 flex flex-row justify-between text-visualText ">
        <i className="flex flex-row font-semibold">
          <img className="mr-3" src={Visual} /> Reaction
        </i>
        <span className="text-black font-bold">
          72 <span className="text-circleGray "> /100 </span>
        </span>
      </div>
      <div className="mt-5">
      <Button/>

      </div>
      </div>
    </div>
  );
};

export default Summary;
