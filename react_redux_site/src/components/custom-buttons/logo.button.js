import React from 'react'
import Ripple from "react-toolbox/lib/ripple/Ripple";
import {GITHUB_LINK, LINKEDIN_LINK} from "../../constants/constants";


const Linkedin = ({theme, ...props}) =>
	<a {...props} className="logo-button" href={LINKEDIN_LINK} target="_blank">
		{props.children}
		<span className="linkedin">Linked</span>
		<i className="fa fa-linkedin-square fa-2x"/>
	</a>;


const Github = ({theme, ...props}) =>
	<a {...props} className="logo-button" target="_blank" href={GITHUB_LINK}>
		{props.children}
		<i className="fa fa-github fa-2x"/>
		<span className="github">Github</span>
	</a>;


export const GithubButton = Ripple({spread: 3})(Github);
export const LinkedinButton = Ripple({spread: 3})(Linkedin);

