import { combineReducers } from 'redux';
import page from './page';
import users from './users';

export default combineReducers({
  page,
  users
})