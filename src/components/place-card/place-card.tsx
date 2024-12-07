import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { OfferPreview } from '../../types/offer';
import { capitalize } from '../../utils/common';
import { getRatingPercentage } from '../../utils/offer';

type PlaceCardImageSize = 'little' | 'big';

type PlaceCardProps = {
  offer: OfferPreview;
  block: string;
  imageSize?: PlaceCardImageSize;
  onMouseOver?: () => void;
  onMouseLeave?: () => void;
};

const sizeMap: Record<PlaceCardImageSize, { width: string; height: string }> = {
  little: { width: '150', height: '110' },
  big: { width: '260', height: '200' }
};

function PlaceCard({ offer, block, imageSize = 'big', onMouseOver, onMouseLeave }: PlaceCardProps): JSX.Element {
  const { id, title, type, price, isPremium, rating, previewImage } = offer;

  return (
    <article
      className={`${block}__card place-card`}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${block}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            alt={title}
            {...sizeMap[imageSize]}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingPercentage(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{capitalize(type)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
