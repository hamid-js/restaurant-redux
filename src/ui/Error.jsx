import { useNavigate, useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function NotFound() {
  const navigate = useNavigate();
  const error = useRouteError()
  console.log("NotFound ~ error:", error)

  return (
    <div>
      <h1>مشکلی پیش اومده 😢</h1>
      <p>{error.data ||  error.message}</p>
      <LinkButton to={"-1"}>
      &larr; Go back
      </LinkButton>
   
    </div>
  );
}

export default NotFound;
