import React, {Component} from 'react'
import table from '../../assets/imgs/adam_table.svg'
import circle from '../../assets/imgs/subwoofer_circles.svg'
import base from '../../assets/imgs/subwoofer_base.svg'

const adjustedVolume = (volume) => {
	let input = Math.round(volume / 100);
	switch (input) {
		case 1:
			return '1.1s';
		case 2:
			return '1s';
		case 3:
			return '.9s';
		case 4:
			return '.8s';
		case 5:
			return '.7s';
		case 6:
			return '.6s';
		case 7:
			return '.5s';
		case 8:
			return '.4s';
		case 9:
			return '.3s';
	}
	if (input < 1) return '1.1s';
	if (input > 9) return '.3s';
};


class SpeakersCard extends Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.state = {
			elements: document.getElementsByClassName("pulsating"),
		};

	}

	changeVolume(volume) {
		for (let i = 0; i < this.state.elements.length; i++) {
			this.state.elements[i].style.animationDuration = adjustedVolume(volume)
		}
	}


	render(){
		return (
			<div className="content-container" onMouseMove={(e) => this.changeVolume(e.clientX)}>
				<div className={"text"}>
					Full Stack Applications
					<br/>
					<div className={"sub-header"}>
						powered by pain and suffering
					</div>
				</div>

				<div className="home-table">
					<div className="background"/>
					<img src={table}/>

					<img src={base} className="teeny left"/>
					<img src={circle} className="teeny pulsating left"/>

					<img src={base} className="teeny right"/>
					<img src={circle} className="teeny pulsating right"/>
				</div>
			</div>
		)
	}
}



export default SpeakersCard
