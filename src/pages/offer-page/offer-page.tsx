import { Helmet } from 'react-helmet-async';
import { AppRoute, MAX_NEARBY_OFFERS_COUNT } from '../../const';
import { Navigate, useParams } from 'react-router-dom';
import OfferDetails from './components/offer-details/offer-details';
import Header from '../../components/header/header';
import NearbyOffersList from './components/nearby-offers-list/nearby-offers-list';
import { useAppSelector } from '../../hooks/use-app-selector';

function OfferPage(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const { offerId } = useParams();
  const offer = offers.find((item) => item.id === offerId);

  if (!offer) {
    return <Navigate to={AppRoute.OfferNotFound} />;
  }

  const offersNearby = offers
    .filter((item) => item.id !== offerId)
    .slice(0, MAX_NEARBY_OFFERS_COUNT);

  return (
    <div className="page">
      <Helmet>
        <title>{`6 cities. ${offer.title}.`}</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--offer">
        <OfferDetails
          offer={offer}
          offersNearby={offersNearby}
        />
        <div className="container">
          <NearbyOffersList offers={offersNearby}/>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
