import { all, call, takeLatest, put, fork } from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../services/api';
import {
  Creators as ChannelsActions,
  Types as ChannelsTypes,
} from '../../reducers/channels';

function* channels({ payload }) {
  try {
    const {
      data,
    } = yield call(api.get, `lista-channels?page=${payload.page}&qtd=${payload.quantity}`);
    yield put(ChannelsActions.channelsRequestSuccess(data.content.dados));
  } catch (error) {
    yield put(ChannelsActions.channelsRequestFail());
  }
}

export function* channelsWatcher() {
  yield takeLatest(ChannelsTypes.CHANNELS_REQUEST, channels);
}

export default function* rootSaga() {
  yield all([
    fork(channelsWatcher),
  ]);
}
