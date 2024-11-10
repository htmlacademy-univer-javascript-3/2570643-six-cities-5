import { useState } from 'react';
import { OfferPreview } from '../../../../types/offer';
import { getWordEndingByCount } from '../../../../utils/common';
import PlaceCard from '../../../../components/place-card/place-card';
import { Cities } from '../../../../const';
import OffersFilter from '../offers-filter/offers-filter';
import Map from '../../../../components/map/map';

type OffersListProps = {
  offers: OfferPreview[];
};

function OffersList({ offers }: OffersListProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<OfferPreview['id'] | null>(null);
  const activeCity = Cities.Amsterdam;

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} place{getWordEndingByCount(offers.length)} to stay in {activeCity.name}</b>
          <OffersFilter />
          <div className="cities__places-list places__list tabs__content">
            {offers.map((offer) => (
              <PlaceCard
                key={offer.id}
                offer={offer}
                block="cities"
                onMouseOver={() => setActiveOfferId(offer.id)}
                onMouseLeave={() => setActiveOfferId(null)}
              />
            ))}
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
  );
}

export default OffersList;
