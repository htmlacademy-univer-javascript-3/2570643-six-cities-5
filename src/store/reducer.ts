import { createReducer } from '@reduxjs/toolkit';
import {
  setCurrentCity,
  loadOffers,
  requireAuthorization,
  setOffersDataLoadingStatus,
  setUserData,
  loadOfferDetails,
  loadOffersNearby,
  loadOfferReviews,
  setOfferPageDataLoadingStatus,
  addOfferReview
} from './action';
import { Offer, OfferPreview } from '../types/offer';
import { AuthorizationStatus, Cities, CityName } from '../const';
import { UserData } from '../types/user-data';
import { Review } from '../types/review';

const initialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null as UserData | null,
  offers: [] as OfferPreview[],
  isOffersDataLoading: false,
  offerDetails: null as Offer | null,
  offersNearby: [] as OfferPreview[],
  offerReviews: [] as Review[],
  isOfferPageDataLoading: false,
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
    .addCase(loadOfferDetails, (state, action) => {
      state.offerDetails = action.payload;
    })
    .addCase(loadOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(loadOfferReviews, (state, action) => {
      state.offerReviews = action.payload;
    })
    .addCase(setOfferPageDataLoadingStatus, (state, action) => {
      state.isOfferPageDataLoading = action.payload;
    })
    .addCase(addOfferReview, (state, action) => {
      state.offerReviews.push(action.payload);
    })
    .addCase(setCurrentCity, (state, action) => {
      state.activeCity = action.payload;
    });
});
