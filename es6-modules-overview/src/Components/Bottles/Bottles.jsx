import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import { addToLS } from "../../Utilities/localstorage";

const Bottles = () => {
  const [waterBottles, setWaterBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setWaterBottles(data));
  }, []);

  const handleAddToCart = bottle => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLS(bottle.id);

  }

  return (
    <>
       <h1>Bottles: {waterBottles.length}</h1>
       <h2>cart: {cart.length} </h2>
    <div className="grid grid-cols-4 gap-3">
      {waterBottles.map(bottle => (
        <Bottle
         bottle={bottle}
         key={bottle.id}
         handleAddToCart = {handleAddToCart}
         ></Bottle>
      ))}
    </div>
    </>
   
  );
};

export default Bottles;
