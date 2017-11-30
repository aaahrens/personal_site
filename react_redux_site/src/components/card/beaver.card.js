import React, {Component} from 'react'
import {connect} from "react-redux";
import Beaver from '../../assets/imgs/beever.svg'

class BeaverCard extends Component {


	render() {
		return (
			<div className="beaver-banner-wrapper">
				<img className="beaver" src={Beaver}/>
				<div className="beaver-text">
					<h4 className="beaver-text-header">
						UI/UX: Reusable and standardized
					</h4>
					<ul>
						<li>
							Material Design
						</li>
						<li>
							Responsive Styling
						</li>
						<li>
							Cost effective Scalability
						</li>
						<li>
							SEO Baked in
						</li>
						<li>
							Universal icons and <br/> navigation patterns
						</li>
					</ul>
				</div>
			</div>
		)
	}
}


export default connect(
	(state) => ({}),
	(dispatch) => ({})
)(BeaverCard)