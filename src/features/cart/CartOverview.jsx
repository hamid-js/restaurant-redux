import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartPrice) return null;
  return (
    <div className="flex flex-row-reverse md:w-4/5 md:mx-auto md:my-5 md:rounded-xl items-center justify-between bg-stone-800 p-4 uppercase text-stone-200 md:py-5 md:text-xl  md:px-16  ">
      <p className="space-x-8 md:space-x-32 font-semibold text-stone-300">
        <span  className='md:font-bold md:px-16 md:text-orange-300'> تعداد {totalCartQuantity}</span>
        <span> </span>
        <span  className='md:font-bold  md:text-orange-400'>مبلغ کل : ${totalCartPrice}</span>
      </p>
      <Link className='md:bg-orange-400 md:p-2 md:rounded-lg md:text-black' to="/cart"> سبد خرید &rarr;</Link>
    </div>
  );
}

export default CartOverview;
