import React, {Component} from 'react'
import IconMenu from "react-toolbox/lib/menu/IconMenu";
import MenuItem from "react-toolbox/lib/menu/MenuItem";
import Button from "react-toolbox/lib/button/Button";
import FontIcon from "react-toolbox/lib/font_icon/FontIcon";
import {RESUME_LINK} from "../constants/constants";


const isMobile = () => {
	//isomorphic check
	if (typeof window === 'undefined') {
		return false
	}
	return ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
};

class TopRightContextMenu extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		if (isMobile()) {
			return (
				<IconMenu icon={<FontIcon className="white-override">more_vert</FontIcon>} position='topRight'
						  menuRipple className="context-menu-override">
					<MenuItem value='download' icon='get_app' caption='Resume' className="context-menu-override"
							  onClick={() => window.open(RESUME_LINK)}/>

				</IconMenu>
			)
		}


		return (
			<div>
				<Button label={"resume"} className={"white-override"}
						onClick={() => window.open(RESUME_LINK)}/>

			</div>
		)
	}
}


export default TopRightContextMenu