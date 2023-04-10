export const Types = {
  FEED_REQUEST: 'FEED_REQUEST',
  FEED_SUCCESS: 'FEED_SUCCESS',
  FEED_FAIL: 'FEED_FAIL',
};

const INITIAL_STATE = {
  data: null,
  loading: true,
  error: false,
};

export default function getFeed(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.FEED_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case Types.FEED_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };
    case Types.FEED_FAIL:
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
  feedRequest: (payload) => ({
    type: Types.FEED_REQUEST,
    payload,
  }),
  feedRequestSuccess: (payload) => ({
    type: Types.FEED_SUCCESS,
    payload,
  }),
  feedRequestFail: (payload) => ({
    type: Types.FEED_FAIL,
    payload,
  }),
};
