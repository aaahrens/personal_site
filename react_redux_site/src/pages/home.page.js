import React, {Component} from 'react'
import Footer from '../components/footer'
import Layout from "react-toolbox/lib/layout/Layout";
import Panel from "react-toolbox/lib/layout/Panel";
import NavDrawer from "react-toolbox/lib/layout/NavDrawer";
import List from "react-toolbox/lib/list/List";
import ListItem from "react-toolbox/lib/list/ListItem";
import ListDivider from "react-toolbox/lib/list/ListDivider";
import {connect} from "react-redux";
import {Route, Switch} from "react-router";
import Logo from '../assets/logos/adam_logo.png'
import {push} from 'react-router-redux'
import HomeBody from '../containers/home/home.container'
import ContactBody from "../containers/contact/contact.container";
import AboutBody from "../containers/about/about.container";
import ProjectBody from "../containers/projects/projects.container";
import * as HomeActions from "../containers/home/home.actions";
import IconMenu from "react-toolbox/lib/menu/IconMenu";
import MenuItem from "react-toolbox/lib/menu/MenuItem";
import AppBar from "react-toolbox/lib/app_bar/AppBar";
import Navigation from "react-toolbox/lib/navigation/Navigation";
import Button from "react-toolbox/lib/button/Button";

let FetchTitle = () => {
	return "hello hello"
};


let MenuTest = () =>
	<IconMenu icon='more_vert' position='topRight' menuRipple className='actionMenu'>
		<MenuItem value='download' icon='get_app' caption='Resume'
				  onClick={() => window.open("https://s3-us-west-1.amazonaws.com/person-website-resume/Resume+(1).pdf")}/>

		<MenuItem value='email' icon='email' caption='Email' onClick={() => document.getElementById("mail").click()}/>
	</IconMenu>;


class HomePage extends Component {

	handleClick(route) {
		this.props.pushRoute(route);
		this.props.hideDrawer()
	}


	render = () =>

		<div>
			<Layout>
				<NavDrawer permanentAt='lgTablet' active={this.props.drawerOpen}
						   onOverlayClick={() => this.props.hideDrawer()}>
					<List>
						<ListItem legend='@drunkengranite' caption={"Adam Ahrens"} ripple={false}
								  rightIcon={<img className={"goop"} src={Logo}/>}/>
						<ListDivider/>
						<ListItem caption='Home' rightIcon={<span className="fa fa-home"/>}
								  onClick={() => this.handleClick("/")}/>

						<ListItem rightIcon={'code'} caption='Projects/Startups'
								  onClick={() => this.handleClick("/projects")}/>

						<ListItem caption='About' rightIcon={'description'}
								  onClick={() => this.handleClick("/about")}/>

						<ListItem caption='Contact' rightIcon={'room_service'}
								  onClick={() => this.handleClick("/contact")}/>

					</List>
				</NavDrawer>
				<Panel>
					<AppBar title={"hello hello"} leftIcon='menu'
							onLeftIconClick={() => this.props.showDrawer()} className="appBar">
						<Navigation type="horizontal">
							<MenuTest/>
						</Navigation>
					</AppBar>

					<Switch>
						<Route path={"/projects"} component={ProjectBody}/>
						<Route exact path={"/contact"} component={ContactBody}/>
						<Route exact path={"/about"} component={AboutBody}/>
						<Route exact path={"/"} component={HomeBody}/>
						<Route render={() => <div>404 not found</div>}/>

					</Switch>
					<Footer/>
				</Panel>
			</Layout>

		</div>
}


export default connect(
	(state) => ({
		drawerOpen: state.home.drawerOpen
	}),
	(dispatch) => ({
		pushRoute: (route) => dispatch(push(route)),
		hideDrawer: () => dispatch(HomeActions.hideDrawer()),
		showDrawer: () => dispatch(HomeActions.showDrawer()),

	})
)(HomePage)