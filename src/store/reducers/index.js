import { combineReducers } from 'redux';
import authentication from './authentication';
import feed from './feed';
import tags from './tags';

const rootReducer = combineReducers({
  authentication,
  feed,
  tags
});

export default rootReducer;
