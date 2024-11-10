import { Review } from '../types/review';

export const REVIEWS_MOCK: Review[] = [
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/avatar/1.jpg',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4
  },
  {
    id: 'a67frfd5-b953-4a30-8c8d-bd083cd6b62g',
    date: '2019-06-09T11:27:10.123Z',
    user: {
      name: 'John Olah',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/avatar/2.jpg',
      isPro: false
    },
    comment: 'Perfect place to stay in Amsterdam!',
    rating: 5
  },
  {
    id: 't54frfd5-b953-4a30-8c8d-bd083cd61432',
    date: '2020-01-02T20:47:11.505Z',
    user: {
      name: 'Lydia Barrett',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/avatar/6.jpg',
      isPro: false
    },
    comment: 'TV is broken, and the view is not that good to be honest...',
    rating: 3
  },
];
