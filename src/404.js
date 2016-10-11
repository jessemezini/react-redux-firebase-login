import React from 'react';
import { Link } from 'react-router';

function PageNotFound() {
  return (
    <div>
      <h2>404 - Page not found.</h2>
      <Link className="btn btn-xs btn-default" to={{ pathname: "/" }} >Home</Link>
    </div>
  );
}

export default PageNotFound;
