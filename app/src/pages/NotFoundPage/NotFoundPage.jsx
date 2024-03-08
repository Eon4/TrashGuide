import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Ups! siden ikke fundet.</h1>
      <Link to="/">Tilbage til forsiden</Link>
    </div>
  );
};

