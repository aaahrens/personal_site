import React, {Component} from 'react'


const ProjectLogo = (props) =>
	<img src={props.logo} className={"project-logo " + props.className}>

	</img>;

export default ProjectLogo

