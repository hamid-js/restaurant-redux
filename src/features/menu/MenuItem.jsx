import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInQuantity = currentQuantity >= 1;
  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }
  return (
    <li className="items-center justify-between flex gap-4 lg:gap-20 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24  ${soldOut ? 'opacity-70 grayscale ' : ''}`}
      />
      <div className="flex flex-wrap grow flex-col pt-0.5">
        <p className="font-medium text-sm md:text-xl">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="my-5 flex items-center justify-between  ">
          {!soldOut ? (
            <p className="text-sm first-line: md:text-xl">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm md:text-xl font-medium uppercase text-stone-800">
              ناموجود
            </p>
          )}
          {isInQuantity && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity pizzaId={id} />
              <DeleteItem pizzaId={id} />
            </div>
          )}
          {!soldOut && !isInQuantity && (
            <Button type="small" onClick={handleAddToCart}>
              افزودن
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
