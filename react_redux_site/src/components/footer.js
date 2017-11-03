/**
 * Created by drunkengranite on 6/19/17.
 */
import React from 'react'
import {connect} from "react-redux";
import GitLogo from '../assets/github.png'
import LinkedinLogo from '../assets/ln-logo.png'


const Footer = (props) => {


	return (
		<div className="footer-container">
			<img src={GitLogo} className="footer-item">
			</img>
			<img src={LinkedinLogo} className="footer-item">
			</img>
		</div>
	)
}


export default connect(
	(state) => ({}),
	(dispatch) => ({})
)(Footer)