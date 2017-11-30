/**
 * Created by drunkengranite on 7/4/17.
 */
import React, {Component} from 'react'
import {connect} from "react-redux";

import * as HomeActions from './home.actions'
import SpeakersCard from "../../components/card/speakers.card";
import BeaverCard from "../../components/card/beaver.card";

class HomeBody extends Component {


	render = () =>

		<div className="home-body-container">
			<SpeakersCard/>
			<BeaverCard />
		</div>
}


export default connect(
	(state) => ({

	}),
	(dispatch) => ({

	})
)(HomeBody)