import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const.ts';
import { UserData } from '../../types/state.ts';
import { UserInfo } from '../../types/user-info.ts';

const initialState: UserData = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: null
};

const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    requireAuthorization: (state, action: PayloadAction<AuthorizationStatus>) => {
      state.authorizationStatus = action.payload;
    },
    setUserInfo: (state, action: PayloadAction<UserInfo | null>) => {
      state.userInfo = action.payload;
    }
  }
});

export const userReducer = userSlice.reducer;
export const { requireAuthorization, setUserInfo } = userSlice.actions;
