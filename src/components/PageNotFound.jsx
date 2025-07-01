import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Go to Homepage</Link>
    </div>
  );
}

export default PageNotFound;