import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';

function NotFound(): JSX.Element {
  return (
    <section className="page__main page__main--not-found">
      <Helmet>
        <title>6 cities. Page not found.</title>
      </Helmet>
      <section className="not-found-message">
        <h1>404. Page not found</h1>
        <Link to="/">Return to the main page</Link>
      </section>
    </section>
  );
}

export default NotFound;
