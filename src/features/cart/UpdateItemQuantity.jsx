import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantity, getCurrentQuantityById, increaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({ pizzaId }) {
    const dispatch = useDispatch()
    const currentQuantity = useSelector(getCurrentQuantityById(pizzaId))

  return (
    <div className="flex items-center gap-1 md:gap-3 ">
       {/* { currentQuantity > 1 ? <Button type="round" onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>
        -
      </Button>: ""} */}
        <Button type="round" onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>
        -
      </Button>
      <span>{currentQuantity !== 0 && currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(increaseItemQuantity(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
