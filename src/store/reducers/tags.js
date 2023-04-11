export const Types = {
  TAGS_RECENTS_REQUEST: 'TAGS_RECENTS_REQUEST',
  TAGS_RECENTS_SUCCESS: 'TAGS_RECENTS_SUCCESS',
  TAGS_RECENTS_FAIL: 'TAGS_RECENTS_FAIL',
};

const INITIAL_STATE = {
  data: null,
  loading: true,
  error: false,
};

export default function getTags(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.TAGS_RECENTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case Types.TAGS_RECENTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };
    case Types.TAGS_RECENTS_FAIL:
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
  tagsRecentsRequest: (payload) => ({
    type: Types.TAGS_RECENTS_REQUEST,
    payload,
  }),
  tagsRecentsRequestSuccess: (payload) => ({
    type: Types.TAGS_RECENTS_SUCCESS,
    payload,
  }),
  tagsRecentsRequestFail: (payload) => ({
    type: Types.TAGS_RECENTS_FAIL,
    payload,
  }),
};
