import React, {Component} from 'react'
import Footer from '../components/footer'
import Layout from "react-toolbox/lib/layout/Layout";
import Panel from "react-toolbox/lib/layout/Panel";
import NavDrawer from "react-toolbox/lib/layout/NavDrawer";
import {connect} from "react-redux";
import {Route, Switch} from "react-router";
import {push} from 'react-router-redux'
import HomeBody from '../containers/home/home.container'
import ContactBody from "../containers/contact/contact.container";
import AboutBody from "../containers/about/about.container";
import ProjectBody from "../containers/projects/projects.container";
import * as HomeActions from "../containers/home/home.actions";
import AppBar from "react-toolbox/lib/app_bar/AppBar";
import Navigation from "react-toolbox/lib/navigation/Navigation";
import TopRightContextMenu from "../components/context.menu.header";
import FontIcon from "react-toolbox/lib/font_icon/FontIcon";
import NavDrawerContent from '../components/navdrawer.content'

class HomePage extends Component {


	constructor(props) {
		super(props);


		let Hamburger = <FontIcon>menu</FontIcon>;
		//I have to do it like this instead of having a component return null because of how render() => null
		//affects the appbar i.e it will still render the Ripple

		if (typeof window !== 'undefined') {
			window.addEventListener("resize", (event) => {
				if (window.innerWidth > 1024) {
					this.setState({...this.state, hamburger: null})
				} else {
					this.setState({...this.state, hamburger: <FontIcon>menu</FontIcon>})
				}
			});

			if (window.innerWidth > 1024) {
				Hamburger = null;
			}
		}


		this.state = {
			hamburger: Hamburger
		}

	}

	handleClick(route) {
		this.props.pushRoute(route);
		this.props.hideDrawer()
	}

	render = () =>

		<div>
			<Layout>
				<NavDrawer permanentAt='lgTablet' active={this.props.drawerOpen}
						   onOverlayClick={() => this.props.hideDrawer()}>
					<NavDrawerContent />
				</NavDrawer>

				<Panel>
					<AppBar title={"hello hello"} leftIcon={this.state.hamburger}
							onLeftIconClick={() => this.props.showDrawer()} className="appBar">
						<Navigation type="horizontal">
							<TopRightContextMenu/>
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