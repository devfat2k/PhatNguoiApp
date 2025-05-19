import { all } from 'redux-saga/effects';
export default function* rootSaga() {
  try {
    yield all([]);
  } catch (error) {
    console.error('Saga error:', error);
  }
}
