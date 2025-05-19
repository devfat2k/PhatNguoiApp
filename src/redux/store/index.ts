import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
// import createSagaMiddleware from 'redux-saga'; // Use ES module import
import rootSaga from '../saga';
import logger from 'redux-logger'; // Use redux-logger instead of redux-logger for consistency
import loadingSlice from '../slice/loadingSlice';

// Combine reducers
export const rootReducer = combineReducers({
  loadingSlice,
});

// Create saga middleware instance
// const sagaMiddleware = createSagaMiddleware();
const createSagaMiddleware = require('redux-saga');
const sagaMiddleware = createSagaMiddleware.default();
// Configure store
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware, logger),
});

// Run the root saga
sagaMiddleware.run(rootSaga);

// Persist store
export const persistor = persistStore(store);

// Export types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
