import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = () => {
  const [waterBottles, setWaterBottles] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setWaterBottles(data));
  }, []);

  return (
    <>
       <h1>Bottles: {waterBottles.length}</h1>
    <div className="grid grid-cols-4 gap-3">
      {waterBottles.map(bottle => (
        <Bottle bottle={bottle}></Bottle>
      ))}
    </div>
    </>
   
  );
};

export default Bottles;
