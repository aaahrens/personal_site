import React, {Component} from 'react'
import List from "react-toolbox/lib/list/List";
import ListItem from "react-toolbox/lib/list/ListItem";
import ListDivider from "react-toolbox/lib/list/ListDivider";
import {GithubButton, LinkedinButton} from "./custom-buttons/logo.button";
import {connect} from "react-redux";
import {push} from 'react-router-redux'
import Logo from '../assets/logos/personal.png'
import * as HomeActions from "../containers/home/home.actions";

class NavDrawerContent extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<List className={"list-overide"}>
				<ListItem legend='@drunkengranite' caption={"Adam Ahrens"} ripple={false}
						  rightIcon={<img className={"personal-logo"} src={Logo}/>}/>

				<ListDivider/>
				<div className="logo-button-wrapper">
					<LinkedinButton/>
					<GithubButton/>
				</div>

				<ListDivider/>
				<ListItem caption='Home' rightIcon={<span className="fa fa-home"/>}
						  onClick={() => {
							  this.props.pushRoute("/");
							  this.props.hide()
						  }}/>

				<ListItem rightIcon={'code'} caption='Projects/Startups'
						  onClick={() => {
							  this.props.pushRoute("/projects");
							  this.props.hide()
						  }}/>

				<ListItem caption='About' rightIcon={'description'}
						  onClick={() => {
							  this.props.pushRoute("/about");
							  this.props.hide()
						  }}/>

				<ListItem caption='Contact' rightIcon={'room_service'}
						  onClick={() => {
							  this.props.pushRoute("/contact");
							  this.props.hide()
						  }}/>
			</List>
		)
	}
}


export default connect(
	(state) => ({}),
	(dispatch) => ({
		pushRoute: (route) => dispatch(push(route)),
		hide: () => dispatch(HomeActions.hideDrawer()),
		show: () => dispatch(HomeActions.showDrawer())
	})
)(NavDrawerContent)