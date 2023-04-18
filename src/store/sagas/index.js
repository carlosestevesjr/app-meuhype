import { all } from 'redux-saga/effects';
import authSagas from './authentication';
import feedSagas from './feed';
import tagsSagas from './tags';
import channelsSagas from './channels';

export default function* rootSaga() {
  yield all([
    authSagas(),
    feedSagas(),
    tagsSagas(),
    channelsSagas()
  ]);
}
