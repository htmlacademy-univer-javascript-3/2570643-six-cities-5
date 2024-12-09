import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const.ts';
import { OffersData } from '../../types/state.ts';
import { OfferPreview } from '../../types/offer.ts';

const initialState: OffersData = {
  offers: [],
  isLoading: false
};

const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setOffers: (state, action: PayloadAction<OfferPreview[]>) => {
      state.offers = action.payload;
    },
    setOffersDataLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }
  }
});

export const offersReducer = offersSlice.reducer;
export const { setOffers, setOffersDataLoadingStatus } = offersSlice.actions;
