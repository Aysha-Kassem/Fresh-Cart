import React from "react";
import { Button } from "../../../components/ui/button";


const ButtonCart = () => {
  return (
    <Button className="bg-green-600 text-white px-4 py-1 rounded-lg hover:bg-green-700 transition absolute bottom-0 left-0">
      Add to cart
    </Button>
  );
};

export default ButtonCart;
