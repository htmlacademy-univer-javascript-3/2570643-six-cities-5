import { Helmet } from 'react-helmet-async';
import { OfferPreview } from '../../types/offer';
import OffersList from './components/offers-list/offers-list';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import { useState } from 'react';
import OffersFilter from './components/offers-filter/offers-filter';
import { getWordEndingByCount } from '../../utils/common';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { setCurrentCity } from '../../store/action';
import { Cities, CityName } from '../../const';
import { CitiesList } from './components/cities-list/cities-list';

function MainPage(): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<OfferPreview['id'] | null>(null);
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector((state) => state.activeCity);
  const offers = useAppSelector((state) => state.offers);

  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity.name);

  const handleChangeCity = (cityName: CityName) => {
    dispatch(setCurrentCity(Cities[cityName]));
  };

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities.</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList
            cities={Object.values(CityName)}
            activeCityName={activeCity.name}
            onChangeCity={handleChangeCity}
          />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffers.length} place{getWordEndingByCount(filteredOffers.length)} to stay in {activeCity.name}</b>
              <OffersFilter />
              <div className="cities__places-list places__list tabs__content">
                <OffersList
                  offers={filteredOffers}
                  block="cities"
                  onMouseOver={setActiveOfferId}
                  onMouseLeave={() => setActiveOfferId(null)}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <Map
                block="cities"
                offers={filteredOffers}
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