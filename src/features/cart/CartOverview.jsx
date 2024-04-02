import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const location = useLocation();
  const isInCart = totalCartPrice > 0 && location.pathname === '/menu';

  return (
    <>
      {isInCart ? (
        <div className="sticky bottom-0 right-0 lg:bottom-2  flex w-full flex-row-reverse items-center justify-between bg-stone-800 p-4 uppercase text-stone-200 lg:right-[10%] lg:mx-auto lg:my-5 lg:w-4/5 lg:rounded-xl lg:px-16 lg:py-5  lg:text-xl  ">
          <p className="space-x-8 font-semibold text-stone-300 lg:space-x-32">
            <span className="lg:px-16 lg:font-bold lg:text-orange-300">
              {' '}
              تعداد {totalCartQuantity}
            </span>
            <span> </span>
            <span className="lg:font-bold  lg:text-orange-400">
              مبلغ کل : ${totalCartPrice}
            </span>
          </p>
          <Link
            className="lg:rounded-lg lg:bg-orange-400 lg:p-2 lg:text-black"
            to="/cart"
          >
            {' '}
            سبد خرید &rarr;
          </Link>
        </div>
      ) : (
        <div> </div>
      )}
    </>
  );
}

export default CartOverview;
