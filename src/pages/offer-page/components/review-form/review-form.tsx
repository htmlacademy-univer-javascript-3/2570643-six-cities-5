import { ChangeEvent, Fragment, useState } from 'react';
import { MAX_COMMENT_LENGTH, MIN_COMMENT_LENGTH } from '../../../../const';

const ratingMap = {
  '1': 'terribly',
  '2': 'badly',
  '3': 'not bad',
  '4': 'good',
  '5': 'perfect'
};

function ReviewForm(): JSX.Element {
  const [data, setData] = useState({comment: '', rating: ''});
  const isValid =
    data.comment.length >= MIN_COMMENT_LENGTH &&
    data.comment.length <= MAX_COMMENT_LENGTH &&
    data.rating !== '';

  function handleTextareaChange(evt: ChangeEvent<HTMLTextAreaElement>) {
    setData((state) => ({ ...state, comment: evt.target.value }));
  }

  function handleInputChange(evt: ChangeEvent<HTMLInputElement>) {
    setData((state) => ({ ...state, rating: evt.target.value }));
  }

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(ratingMap)
          .map(([score, title]) => (
            <Fragment key={score}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={score}
                id={`${score}-stars`}
                type="radio"
                checked={data.rating === score}
                onChange={handleInputChange}
              />
              <label
                htmlFor={`${score}-stars`}
                className="reviews__rating-label form__rating-label"
                title={title}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={data.comment}
        onChange={handleTextareaChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay{' '}
          with at least{' '}
          <b className="reviews__text-amount">
            {MIN_COMMENT_LENGTH} characters
          </b>
          .
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
