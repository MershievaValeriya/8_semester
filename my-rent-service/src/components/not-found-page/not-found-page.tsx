import { JSX } from "react";

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray page--not-found">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
              <img className="header__logo" src="img/logo.svg" alt="Rent service logo" width="81" height="41" />
          </div>
        </div>
   </div>
    </header>
    <main className="page__main page__main--not-found">
      <div className="container">
        <section className="not-found">
          <h1 className="not-found__title">404 - Page Not Found</h1>
          <p className="not-found__message">Oops! The page you are looking for does not exist.</p>
          <a className="error-page__link" href="index.html">Return to Homepage</a>
        </section>
      </div>
    </main>
  </div> 
);
}

export default NotFoundPage;