import { all, call, takeLatest, put, fork } from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../services/api';
import {
  Creators as TagsActions,
  Types as TagsTypes,
} from '../../reducers/tags';

function* tagsRecents({ payload }) {
  console.log('tagsRecents')
  try {
    const {
      data,
    } = yield call(api.get, `lista-tags-recentes?page=${payload.page}&qtd=${payload.quantity}`);
    yield put(TagsActions.tagsRecentsRequestSuccess(data.content.dados));
  } catch (error) {
    yield put(TagsActions.tagsRecentsRequestFail());
  }
}

export function* tagsRecentsWatcher() {
  yield takeLatest(TagsTypes.TAGS_RECENTS_REQUEST, tagsRecents);
}

export default function* rootSaga() {
  yield all([
    fork(tagsRecentsWatcher),
  ]);
}
