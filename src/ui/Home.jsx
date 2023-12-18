import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-14  text-center">
      <h1 className="mb-7 text-center text-xl font-semibold text-gray-500">
      رستوران خوش طعم
        
      </h1>
      <h2 className="text-orange-500 mb-24 text-xl font-semibold   ">
        احساس بهترین طعم با رستوران خوش طعم
        </h2>
   { username === "" ? (<CreateUser />) :(<Button to="menu" type="primary" >
    ادامه سفارش {username}
   </Button>)

    
       }
    </div>
  );
}

export default Home;
