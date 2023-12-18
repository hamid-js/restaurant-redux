import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/username';

function Header() {
  return (
    <header className="uppercasr flex items-center justify-between border-b border-stone-200 bg-orange-300 px-4 py-3">
      <Link to="/" className="-tracking-widest">
        رستوران خوش طعم
      </Link>
        <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
