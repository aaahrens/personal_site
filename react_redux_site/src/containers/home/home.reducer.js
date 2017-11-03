import {handleActions} from "redux-actions";
import {HIDE_DRAWER, SHOW_DRAWER} from "./home.constants";

const initialState = {
	drawerOpen: false,
}
const HomeReducer = handleActions({

	//HEADER TAB REDUCERS BLOW
	[HIDE_DRAWER]: (state, action) => {

		return {
			...state,
			drawerOpen: false,
		}
	},
	[SHOW_DRAWER]: (state, action) => {

		return {
			...state,
			drawerOpen: true,
		}
	}


}, initialState);

export default HomeReducer;