import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-14  text-center">
      <h1 className="mb-10 text-center text-xl font-semibold text-gray-500">
      رستوران خوش طعم
        <br />
        
      </h1>
      <div className="text-orange-500 mb-16 text-xl font-semibold   ">
        احساس بهترین طعم با رستوران خوش طعم
        </div>
   { username === "" ? (<CreateUser />) :(<Button to="menu" type="primary" >
    ادامه سفارش {username}
   </Button>)

    
       }
    </div>
  );
}

export default Home;
