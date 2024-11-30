import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { City } from '../types/city';

export const setCurrentCity = createAction<City>('city/setCurrentCity');

export const setOffers = createAction<Offer[]>('offers/setOffers');
