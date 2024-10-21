export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  OfferId = '/offer/:offerId',
  Offer = '/offer',
  OfferNotFound = '/offer-not-found'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export const MAX_COMMENT_LENGTH = 300;

export const MIN_COMMENT_LENGTH = 50;
