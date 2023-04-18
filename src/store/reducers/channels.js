export const Types = {
  CHANNELS_REQUEST: 'CHANNELS_REQUEST',
  CHANNELS_SUCCESS: 'CHANNELS_SUCCESS',
  CHANNELS_FAIL: 'CHANNELS_FAIL',
};

const INITIAL_STATE = {
  data: null,
  loading: true,
  error: false,
};

export default function getChannels(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CHANNELS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case Types.CHANNELS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };
    case Types.CHANNELS_FAIL:
      return {
        ...state,
        data: null,
        loginErrorData: action.payload,
        loading: false,
        error: true,
      };
    
    default:
      return state;
  }
}

export const Creators = {
  channelsRequest: (payload) => ({
    type: Types.CHANNELS_REQUEST,
    payload,
  }),
  channelsRequestSuccess: (payload) => ({
    type: Types.CHANNELS_SUCCESS,
    payload,
  }),
  channelsRequestFail: (payload) => ({
    type: Types.CHANNELS_FAIL,
    payload,
  }),
};
