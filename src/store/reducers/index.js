import { combineReducers } from 'redux';
import authentication from './authentication';
import feed from './feed';
import tags from './tags';
import channels from './channels';

const rootReducer = combineReducers({
  authentication,
  feed,
  tags,
  channels
});

export default rootReducer;
