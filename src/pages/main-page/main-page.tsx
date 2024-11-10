import { Helmet } from 'react-helmet-async';
import { Offer, OfferPreview } from '../../types/offer';
import OffersList from './components/offers-list/offers-list';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import { Cities } from '../../const';
import { useState } from 'react';
import OffersFilter from './components/offers-filter/offers-filter';
import { getWordEndingByCount } from '../../utils/common';

type MainPageProps = {
    offers: Offer[];
}

function MainPage({ offers }: MainPageProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<OfferPreview['id'] | null>(null);
  const activeCity = Cities.Amsterdam;

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities.</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} place{getWordEndingByCount(offers.length)} to stay in {activeCity.name}</b>
              <OffersFilter />
              <div className="cities__places-list places__list tabs__content">
                <OffersList
                  offers={offers}
                  block="cities"
                  onMouseOver={setActiveOfferId}
                  onMouseLeave={() => setActiveOfferId(null)}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <Map
                block="cities"
                offers={offers}
                location={activeCity.location}
                activeOfferId={activeOfferId}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
