import { createStore } from 'redux';
import {someApp} from '../reducers/index.js';
let store = createStore(someApp);
export default store