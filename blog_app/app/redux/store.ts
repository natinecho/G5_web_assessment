
import { configureStore } from '@reduxjs/toolkit';
import { api } from './Api/blogApi'; // This will be your RTK Query API slice
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    // Add other slices here if needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
