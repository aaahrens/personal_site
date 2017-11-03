/**
 * Created by drunkengranite on 6/2/17.
 */
import React from "react";
import {Route, Switch} from "react-router";
import HomePage from './pages/home.page'


const Routes = (props) => {

	return (
		<div>
			<Switch>
				<Route path={"/"} component={HomePage}/>
			</Switch>
			<a href="mailto:someone@example.com?Subject=Hello%20again" target="_top" id="mail"></a>
		</div>
	)
};

export default Routes




