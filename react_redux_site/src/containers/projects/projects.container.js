import React, {Component} from 'react'
import Card from "react-toolbox/lib/card/Card";
import CardMedia from "react-toolbox/lib/card/CardMedia";
import CardTitle from "react-toolbox/lib/card/CardTitle";
import CardText from "react-toolbox/lib/card/CardText";
import CardActions from "react-toolbox/lib/card/CardActions";
import Button from "react-toolbox/lib/button/Button";
import {connect} from "react-redux";

class ProjectBody extends Component {

	constructor(props) {
		super(props)
	}


	render() {
		return (
			<div className="project-container">
				<div className="project-list">
					{
						this.props.projects.map((item, index) =>
							<Card className="project-card" key={index} raised>

								<CardMedia
									className={item.className}
									aspectRatio='wide'
									image={item.logo}
								/>

								<CardTitle
									title={item.title}
									subtitle={item.subtitle}
								/>

								<CardText>{item.description}</CardText>

								<CardActions className="project-card-actions">
									{
										item.github &&
										<Button icon={<span className="fa fa-github-square fa-2x"/>}
												label="github" href={item.github.link} target="_blank"/>
									}
									{
										item.link &&
										<Button icon="link" label="Website" href={item.link} target="_blank"/>
									}
								</CardActions>
							</Card>
						)
					}
					<div className="project-ghost" />
					<div className="project-ghost" />
					<div className="project-ghost" />
					<div className="project-ghost" />
					<div className="project-ghost" />
					<div className="project-ghost" />

				</div>

			</div>

		)
	}
}

export default connect(
	(state) => ({
		projects: state.projects.projects
	}),
	(dispatch) => ({
		hide: () => dispatch(),
		show: () => dispatch()
	})
)(ProjectBody)