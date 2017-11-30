/**
 * Created by drunkengranite on 5/29/17.
 */
import {handleActions} from 'redux-actions'
import {SELECT_TAB} from '../constants/constants'
import Immutable from 'immutable'

let initialState = {
	currentTab: null,
	tabs: Immutable.fromJS([
			{
				name: "Projects",
				content: [
					"penis"
				]
			},
			{
				name: "Experience",
				content: [
					"penis"
				]
			},
			{
				name: "About",
				content: [
					"penis"
				]
			},
			{
				name: "Contact",
				content: [
					"penis",
					"penis",
				]
			},
		]
	)
};


const dataReducer = handleActions({

	//HEADER TAB REDUCERS BLOW
	[SELECT_TAB]: (state, action) => {

		return {
			...state,
			currentTab: state.tabs.filter(tab => tab.get("name") === action.payload).get(0),
		}
	}


}, initialState);

export default dataReducer;