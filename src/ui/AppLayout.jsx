import { Outlet, useNavigate, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className="grid h-screen   grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />

      <div className=' py-28 px-7 bg-gradient-to-tr from-stone-200 via-cyan-200 to-stone-300'>

      <main className="mx-auto max-w-3xl ">
        
        <Outlet />
      </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
