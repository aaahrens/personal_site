/**
 * Created by drunkengranite on 5/29/17.
 */
import {SELECT_TAB} from '../constants/constants'

export const selectTab = (name) => {


	return {
		type: SELECT_TAB,
		payload: name
	}
};