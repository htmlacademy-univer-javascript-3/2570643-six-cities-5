import { OfferPreview } from '../../../../types/offer';
import OffersList from '../../../main-page/components/offers-list/offers-list';

type NearbyOffersListProps = {
  offers: OfferPreview[];
};

function NearbyOffersList({ offers }: NearbyOffersListProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        <OffersList
          offers={offers}
          block="near-places"
        />
      </div>
    </section>
  );
}

export default NearbyOffersList;
