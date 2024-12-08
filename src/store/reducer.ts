import { createReducer } from '@reduxjs/toolkit';
import {
  setCurrentCity,
  setOffers,
  loadOffers,
  requireAuthorization,
  setOffersDataLoadingStatus
} from './action';
import { Offer } from '../types/offer';
import { AuthorizationStatus, Cities, CityName } from '../const';

const initialState = {
  activeCity: Cities[CityName.Paris],
  offers: [] as Offer[],
  isOffersDataLoading: false,
  AuthorizationStatus: AuthorizationStatus.Unknown
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.AuthorizationStatus = action.payload;
    });
});
