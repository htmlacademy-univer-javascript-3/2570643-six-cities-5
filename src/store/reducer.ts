import { createReducer } from '@reduxjs/toolkit';
import {
  setCurrentCity,
  loadOffers,
  requireAuthorization,
  setOffersDataLoadingStatus,
  setUserData
} from './action';
import { Offer } from '../types/offer';
import { AuthorizationStatus, Cities, CityName } from '../const';
import { UserData } from '../types/user-data';

const initialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null as UserData | null,
  offers: [] as Offer[],
  isOffersDataLoading: false,
  activeCity: Cities[CityName.Paris]
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setCurrentCity, (state, action) => {
      state.activeCity = action.payload;
    });
});
