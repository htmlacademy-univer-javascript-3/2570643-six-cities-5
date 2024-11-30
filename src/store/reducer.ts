import { createReducer } from '@reduxjs/toolkit';
import {
  setCurrentCity,
  setOffers
} from './action';
import { Offer } from '../types/offer';
import { Cities, CityName } from '../const';

const initialState = {
  activeCity: Cities[CityName.Paris],
  offers: [] as Offer[]
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});
