import { all, call, takeLatest, put, fork } from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../services/api';
import {
  Creators as FeedActions,
  Types as FeedTypes,
} from '../../reducers/feed';

function* feed({ payload }) {

  try {
    const {
      data,
    } = yield call(api.get, `lista-news?page=${payload.page}&qtd=${payload.quantity}`);
    if (payload.data && payload.data.length > 0) {
      let dados = payload.data
      dados = dados.concat(data.content.dados)
      yield put(FeedActions.feedRequestSuccess(dados));
    } else {
      yield put(FeedActions.feedRequestSuccess(data.content.dados));
    }

  } catch (error) {
    yield put(FeedActions.feedRequestFail());
  }

}

export function* feedWatcher() {
  yield takeLatest(FeedTypes.FEED_REQUEST, feed);
}

export default function* rootSaga() {
  yield all([
    fork(feedWatcher),
  ]);
}
