import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import rootSaga from '../saga';
import logger from 'redux-logger';
import loadingSlice from '../slice/loadingSlice';
import licensesSlice from '../slice/licenses';

export const rootReducer = combineReducers({
  loadingSlice,
  licensesSlice,
});

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
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
