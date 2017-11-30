/**
 * Created by drunkengranite on 6/19/17.
 */
import React from 'react'
import {connect} from "react-redux";


const Footer = (props) => {


	return (
		<div className="footer-container">
			<div className="copyright">
				© Adam Ahrens {JSON.stringify(new Date().getFullYear())}
			</div>
		</div>
	)
};


export default connect(
	(state) => ({}),
	(dispatch) => ({})
)(Footer)