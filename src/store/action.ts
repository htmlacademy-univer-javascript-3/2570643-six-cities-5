import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { City } from '../types/city';
import { AppRoute, AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setUserData = createAction<UserData | null>('user/setUserEmail');

export const loadOffers = createAction<Offer[]>('offers/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('offers/setOffersDataLoadingStatus');

export const setCurrentCity = createAction<City>('city/setCurrentCity');
