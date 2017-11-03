/**
 * Created by drunkengranite on 6/2/17.
 */
/**
 * Created by drunkengranite on 5/29/17.
 */

import allReducers from '../reducers/all.reducers'
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';


const middleware = applyMiddleware(
	routerMiddleware(),
	thunk
);

const store = createStore(allReducers, middleware);


export default store;

