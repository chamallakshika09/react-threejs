import { configureStore } from '@reduxjs/toolkit';
import cubeSlice from './cube-slice';

export const store = configureStore({
  reducer: {
    cube: cubeSlice,
  },
});
