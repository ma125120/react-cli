import { combineReducers } from 'redux';
import * as types from '../constant/index.js'

export const opeTodo=function (state=['123'],action) {
	switch(action.type) {
		case types.TODO_ADD:
			return [...state,action.text];
		case types.TODO_DELETE:
			let i=action.i;
			var new_text=state.slice(0,i).concat(state.slice(i+1));
			return [...new_text];
		default:
			return state;
	}
}

/*用户reducer*/
export const opeUser=function (state=[],action) {
	switch(action.type) {
		case types.USER_ADD:
			return [...state,...action.data];
		default:
			return state;
	}
}

export const someApp = combineReducers({
  TODO: opeTodo,
  USER:opeUser
});
