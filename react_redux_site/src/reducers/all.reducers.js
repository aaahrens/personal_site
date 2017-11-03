/**
 * Created by drunkengranite on 5/29/17.
 */
import dataReducer from './data.reducer'
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import HomeReducer from "../containers/home/home.reducer";
import ProjectsReducer from "../containers/projects/project.reducers";

const allReducers = combineReducers({
	data: dataReducer,
	router: routerReducer,
	home: HomeReducer,
	projects: ProjectsReducer
});

export default allReducers;
