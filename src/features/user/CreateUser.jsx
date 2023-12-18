import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate =  useNavigate()


  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username))
    navigate("/menu")
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
         خوش اومدی! لطفا با وارد کردن اسم خودت شروع کن👋
      </p>

      <input
        type="text"
        placeholder="اسم کامل شما :"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72"
      />

      {username !== '' && (
        <div>
          <Button type="primary">شروع سفارش</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
