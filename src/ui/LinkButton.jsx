import { Link, Navigate, useNavigate } from 'react-router-dom';
const className = 'text-sm text-blue-500 hover:text-blue-600 hover:underline';
function LinkButton({ children, to }) {
  const navigate = useNavigate();

  if (to === '-1')
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
