import { REVIEWS_MOCK } from '../../../../mocks/reviews-mock';
import { Offer } from '../../../../types/offer';
import { capitalize } from '../../../../utils/common';
import { getRatingPercentage } from '../../../../utils/offer';
import ReviewForm from '../review-form/review-form';
import ReviewList from '../review-list/review-list';
import Map from '../../../../components/map/map';

type OffersDetailsProps = {
  offer: Offer;
  offersNearby: Offer[];
};

function OffersDetails({ offer, offersNearby }: OffersDetailsProps): JSX.Element {
  const host = offer.host;

  return (
    <section className="offer">
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {offer.images.map((image, index) => (
            // eslint-disable-next-line
            <div className="offer__image-wrapper" key={index}>
              <img className="offer__image" src={image} alt="Photo studio" />
            </div>
          ))}
        </div>
      </div>
      <div className="offer__container container">
        <div className="offer__wrapper">
          {offer.isPremium && (
            <div className="offer__mark">
              <span>Premium</span>
            </div>
          )}
          <div className="offer__name-wrapper">
            <h1 className="offer__name">
              {offer.title}
            </h1>
            <button className="offer__bookmark-button button" type="button">
              <svg className="offer__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span style={{width: getRatingPercentage(offer.rating)}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="offer__rating-value rating__value">{offer.rating}</span>
          </div>
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">
              {capitalize(offer.type)}
            </li>
            <li className="offer__feature offer__feature--bedrooms">
              {`${offer.bedrooms} Bedrooms`}
            </li>
            <li className="offer__feature offer__feature--adults">
              {`Max ${offer.maxAdults} adults`}
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">&euro;{offer.price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <ul className="offer__inside-list">
              {offer.goods.map((good) => (
                <li className="offer__inside-item" key={good}>
                  {good}
                </li>
              ))}
            </ul>
          </div>
          <div className="offer__host">
            <h2 className="offer__host-title">Meet the host</h2>
            <div className="offer__host-user user">
              <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
              </div>
              <span className="offer__user-name">
                {host.name}
              </span>
              {host.isPro && (
                <span className="offer__user-status">
                  Pro
                </span>
              )}
            </div>
            <div className="offer__description">
              <p className="offer__text" dangerouslySetInnerHTML={{ __html: offer.description }} />
            </div>
          </div>
          <section className="offer__reviews reviews">
            <h2 className="reviews__title">
              Reviews &middot; <span className="reviews__amount">{REVIEWS_MOCK.length}</span>
            </h2>
            <ReviewList reviews={REVIEWS_MOCK}/>
            <ReviewForm />
          </section>
        </div>
      </div>
      <section className="offer__map map">
        <Map
          block="offer"
          location={offer.city.location}
          offers={offersNearby}
          activeOfferId={null}
        />
      </section>
    </section>
  );
}

export default OffersDetails;
