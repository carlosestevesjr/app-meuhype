import { all } from 'redux-saga/effects';
import authSagas from './authentication';
import feedSagas from './feed';

export default function* rootSaga() {
  yield all([
    authSagas(),
    feedSagas()
  ]);
}
