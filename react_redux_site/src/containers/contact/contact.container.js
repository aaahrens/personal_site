import React, {Component} from 'react'
import Button from "react-toolbox/lib/button/Button";
import FontIcon from "react-toolbox/lib/font_icon/FontIcon";


class ContactBody extends Component {


	render = () =>
		<div className="contact-container">
			<h1>Quick Links</h1>
			<div className="copy-item">
				<div>
					adam@adamahrens.me
				</div>
				<Button raised className="black-icon-contact" icon="content_copy"/>
			</div>

			<div className="copy-item">
				Link to resume
				<Button raised className="black-icon-contact" icon="content_copy"/>

			</div>

			<div className="copy-item">
				Github
				<Button raised className="black-icon-contact" icon="content_copy"/>
			</div>

			<div className="copy-item">
				Linkedin
				<Button raised className="black-icon-contact" icon="content_copy"/>
			</div>

		</div>
}


export default ContactBody