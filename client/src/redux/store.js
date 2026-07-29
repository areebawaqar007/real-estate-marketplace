import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storageModule from 'redux-persist/lib/storage';

// Get the actual storage object
const storage = storageModule.default;

console.log(storage);

// Combine all reducers
const rootReducer = combineReducers({
  user: userReducer,
});

// Redux Persist configuration
const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

// Make Redux state persistent
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create Redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Create persistor
export const persistor = persistStore(store);