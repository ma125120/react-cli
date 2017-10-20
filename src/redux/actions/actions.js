/*
* action 类型
*/
import * as types from '../constant/index.js'
/*
* action 创建函数
*/
export function addTodo(text) {
	return { type: types.TODO_ADD, text }
}

export function delTodo(i) {
	return { type: types.TODO_DELETE, i }
}

export function addUser(users) {
	return { type: types.USER_ADD, data: users }
}

