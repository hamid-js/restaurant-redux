import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";

import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";


function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between sm:gap-6 ">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className=" flex justify-center items-center ">
        <p className="text-sm font-bold  ">{formatCurrency(totalPrice)}</p>
        <span> </span>
        <UpdateItemQuantity  pizzaId={pizzaId} />
        <DeleteItem pizzaId={pizzaId}/>
      </div>
    </li>
  );
}

export default CartItem;
