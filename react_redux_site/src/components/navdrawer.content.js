import React, {Component} from 'react'
import List from "react-toolbox/lib/list/List";
import ListItem from "react-toolbox/lib/list/ListItem";
import ListDivider from "react-toolbox/lib/list/ListDivider";
import {GithubButton, LinkedinButton} from "./custom-buttons/logo.button";
import {connect} from "react-redux";
import {push} from 'react-router-redux'
import Logo from '../assets/logos/personal.png'
import * as HomeActions from "../containers/home/home.actions";
import FontIcon from "react-toolbox/lib/font_icon/FontIcon";

class NavDrawerContent extends Component {
	constructor(props) {
		super(props);
	}

	isSelected(name) {
		if (name === this.props.local.pathname) return "selected";
		return ""
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

				<ListItem caption='Home'
						  className="drawer-nav-content"
						  rightIcon={<span className={"fa fa-home " + this.isSelected("/")}/>}
						  onClick={() => {
							  this.props.pushRoute("/");
							  this.props.hide()
						  }}/>

				<ListItem rightIcon={<FontIcon className={this.isSelected("/projects")}>code</FontIcon>}
						  caption='Projects/Startups'
						  className="drawer-nav-content"
						  onClick={() => {
							  this.props.pushRoute("/projects");
							  this.props.hide()
						  }}/>

				<ListItem caption='About'
						  className="drawer-nav-content"
						  rightIcon={<FontIcon className={this.isSelected("/about")}>description</FontIcon>}
						  onClick={() => {
							  this.props.pushRoute("/about");
							  this.props.hide()
						  }}/>

				<ListItem caption='Contact'
						  className="drawer-nav-content"
						  rightIcon={<FontIcon className={this.isSelected("/contact")}>room_service</FontIcon>}
						  onClick={() => {
							  this.props.pushRoute("/contact");
							  this.props.hide()
						  }}/>
			</List>
		)
	}
}


export default connect(
	(state) => ({
		local: state.router.location
	}),
	(dispatch) => ({
		pushRoute: (route) => dispatch(push(route)),
		hide: () => dispatch(HomeActions.hideDrawer()),
		show: () => dispatch(HomeActions.showDrawer())
	})
)(NavDrawerContent)