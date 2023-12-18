import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartPrice) return null;
  return (
    <div className="flex flex-row-reverse items-center justify-between bg-stone-800 p-4 uppercase text-stone-200  ">
      <p className="space-x-8 font-semibold text-stone-300">
        <span> تعداد {totalCartQuantity}</span>
        <span> </span>
        <span>مبلغ کل : ${totalCartPrice}</span>
      </p>
      <Link to="/cart"> سبد خرید &rarr;</Link>
    </div>
  );
}

export default CartOverview;
