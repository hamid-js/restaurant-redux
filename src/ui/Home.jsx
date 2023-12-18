import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-10 text-center">
      <h1 className="mb-8 text-center text-xl font-semibold text-gray-500">
      رستوران خوش طعم
        <br />
        <span className="text-orange-500 leading-10">
        احساس بهترین طعم با رستوران خوش طعم
        </span>
      </h1>
   { username === "" ? (<CreateUser />) :(<Button to="menu" type="primary" >
    ادامه سفارش {username}
   </Button>)

    
       }
    </div>
  );
}

export default Home;
