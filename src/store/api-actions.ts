import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { Offer, OfferPreview } from '../types/offer';
import { AppDispatch, State } from '../types/state';
import {
  requireAuthorization,
  setUserData,
  redirectToRoute,
  loadOffers,
  setOffersDataLoadingStatus,
  loadOfferDetails,
  loadOffersNearby,
  loadOfferReviews,
  setOfferPageDataLoadingStatus,
  addOfferReview
} from './action';
import { saveToken, dropToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { Review } from '../types/review';

export const checkAuth = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserData(data));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

export const login = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUserData(data));
    dispatch(redirectToRoute(AppRoute.Root));
  }
);

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(setUserData(null));
  }
);

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus(true));
    try {
      const {data} = await api.get<OfferPreview[]>(APIRoute.Offers);
      dispatch(loadOffers(data));
    } finally {
      dispatch(setOffersDataLoadingStatus(false));
    }
  }
);

export const fetchOfferPageInformation = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferDetails',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setOfferPageDataLoadingStatus(true));
    try {
      const [offerDetails, offersNearby, offerReviews] = await Promise.all([
        api.get<Offer>(`${APIRoute.Offers}/${offerId}`),
        api.get<OfferPreview[]>(`${APIRoute.Offers}/${offerId}/nearby`),
        api.get<Review[]>(`${APIRoute.Comments}/${offerId}`)
      ]);
      dispatch(loadOfferDetails(offerDetails.data));
      dispatch(loadOffersNearby(offersNearby.data));
      dispatch(loadOfferReviews(offerReviews.data));
    } catch (error) {
      dispatch(redirectToRoute(AppRoute.OfferNotFound));
    } finally {
      dispatch(setOfferPageDataLoadingStatus(false));
    }
  },
);

export const sendReview = createAsyncThunk<void, {
  offerId: string;
  comment: string;
  rating: number;
}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendReview',
  async ({offerId, comment, rating}, {dispatch, extra: api}) => {
    const {data} = await api.post<Review>(`${APIRoute.Comments}/${offerId}`, {comment, rating});
    dispatch(addOfferReview(data));
  },
);
