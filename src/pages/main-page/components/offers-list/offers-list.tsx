import { useState } from 'react';
import { OfferPreview } from '../../../../types/offer';
import { getWordEndingByCount } from '../../../../utils/common';
import PlaceCard from '../../../../components/place-card/place-card';
import { CityName } from '../../../../const';
import OffersFilter from '../offers-filter/offers-filter';

type OffersListProps = {
  offers: OfferPreview[];
};

function OffersList({ offers }: OffersListProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<OfferPreview['id'] | null>(null);
  const activeCityName = CityName.Amsterdam;

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} place{getWordEndingByCount(offers.length)} to stay in {activeCityName}</b>
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
          <section className="cities__map map"></section>
        </div>
      </div>
    </div>
  );
}

export default OffersList;
