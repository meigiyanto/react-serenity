import { Link } from 'react-router-dom';

function NoMatch() {
  return (
    <main id="main">
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </main>
  );
}

export default NoMatch;
