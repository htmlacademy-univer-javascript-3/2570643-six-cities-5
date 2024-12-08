import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { City } from '../types/city';
import { AuthorizationStatus } from '../const';

export const loadOffers = createAction<Offer[]>('offers/loadOffers');

export const setCurrentCity = createAction<City>('city/setCurrentCity');

export const setOffers = createAction<Offer[]>('offers/setOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('offers/setOffersDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
