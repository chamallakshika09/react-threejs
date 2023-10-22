import { configureStore } from '@reduxjs/toolkit';
import transformSlice from './transform-slice';

export const store = configureStore({
  reducer: {
    transform: transformSlice,
  },
});
