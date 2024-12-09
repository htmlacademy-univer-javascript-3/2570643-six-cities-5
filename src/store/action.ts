import { createAction } from '@reduxjs/toolkit';
import { Offer, OfferPreview } from '../types/offer';
import { City } from '../types/city';
import { AppRoute, AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';
import { Review } from '../types/review';

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setUserData = createAction<UserData | null>('user/setUserEmail');

export const loadOffers = createAction<OfferPreview[]>('offers/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('offers/setOffersDataLoadingStatus');

export const loadOfferDetails = createAction<Offer>('offers/loadOfferDetails');

export const loadOffersNearby = createAction<OfferPreview[]>('offers/loadOffersNearby');

export const loadOfferReviews = createAction<Review[]>('offers/loadOfferReviews');

export const setOfferPageDataLoadingStatus = createAction<boolean>('offers/setOfferPageDataLoadingStatus');

export const addOfferReview = createAction<Review>('offers/addOfferReview');

export const setCurrentCity = createAction<City>('city/setCurrentCity');
