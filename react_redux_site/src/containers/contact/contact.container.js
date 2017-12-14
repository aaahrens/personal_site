import React, {Component} from 'react'
import Button from "react-toolbox/lib/button/Button";
import Snackbar from "react-toolbox/lib/snackbar/Snackbar";
import {EMAIL, GITHUB_LINK, LINKEDIN_LINK, RESUME_LINK} from "../../constants/constants";
import {CopyToClipboard} from "react-copy-to-clipboard";


class ContactBody extends Component {

	constructor(props) {
		super(props)
		this.state = {
			active: false
		}
	}

	componentWillMount() {
		if (typeof window !== 'undefined') {
			window.scrollTo(0, 0)
		}
	}

	handleClick = (name) => {
		this.setState({
			...this.state,
			active: true,
			name: name
		})
	};

	handleSnackbarClick = () => {
		this.setState({
			...this.state,
			active: false
		})
	};


	render = () =>
		<div className="contact-container">
			<h1>Quick Links</h1>


			<div className="copy-item">
				Email
				<Button label={"Open in Client"}
						primary
						className="copy-button-override"
						onClick={() => document.getElementById("mail").click()}/>
				<CopyToClipboard text={EMAIL}>
					<Button raised className="black-icon-contact" icon="content_copy"
							onClick={() => this.handleClick(EMAIL)}/>
				</CopyToClipboard>
			</div>

			<div className="copy-item">
				Link to resume
				<CopyToClipboard text={RESUME_LINK}>
					<Button raised className="black-icon-contact" icon="content_copy"
							onClick={() => this.handleClick(RESUME_LINK)}/>
				</CopyToClipboard>
			</div>

			<div className="copy-item">
				Github
				<CopyToClipboard text={GITHUB_LINK}>

					<Button raised className="black-icon-contact" icon="content_copy"
							onClick={() => this.handleClick(GITHUB_LINK)}/>
				</CopyToClipboard>
			</div>

			<div className="copy-item">
				Linkedin
				<CopyToClipboard text={LINKEDIN_LINK}>

					<Button raised className="black-icon-contact" icon="content_copy"
							onClick={() => this.handleClick(LINKEDIN_LINK)}/>
				</CopyToClipboard>
			</div>
			<Snackbar
				label={"Copied " + this.state.name + " to clipboard"}
				active={this.state.active}
				timeout={2000}
				onTimeout={this.handleSnackbarClick}
				type='accept'
			/>
		</div>
}


export default ContactBody