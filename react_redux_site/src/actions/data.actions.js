/**
 * Created by drunkengranite on 6/20/17.
 */
import axios from 'axios'


export const showLoading = () => {
	return {
		type: ""
	}
}


export const stopLoading = () => {
	return {
		type: ""
	}
}


export const getContent = () => {
	return (dispatch, getState) => {
		axios.get("www.example.com")
			.then((response) => {
				console.log(response)
			})
			.catch((error) => {
				console.log(error)
			})
	};
};


