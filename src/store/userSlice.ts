import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from 'services/reduxStore';

export interface UserState {
  userId: string;
}

const initialState: UserState = {
  userId: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
      localStorage.setItem('userId', action.payload);
    },
  },
});

export const selectUserConfiguration = (state: RootState) => state.user;

export const {
  actions: {setUserId},
} = userSlice;

export default userSlice.reducer;
