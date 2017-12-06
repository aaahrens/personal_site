import {handleActions} from "redux-actions";
import {

} from "../../constants/constants";
import {AGGRE_DESCRIPTIONS} from "../../constants/constants";
import {SKILLETS_DESCRIPTION} from "../../constants/constants";
import {SCRAPING_DESCRIPTION} from "../../constants/constants";
import {BOILERPLATE_DESCRIPTION} from "../../constants/constants";
import {SYNONYMITY_DESCRIPTION} from "../../constants/constants";
import {HALLA_DESCRIPTION} from "../../constants/constants";
import {ADAM_DESCRIPTION} from "../../constants/constants";

const aggre = {
	description: AGGRE_DESCRIPTIONS,
	title: "Aggre.tv",
	link: "https://aggre.tv/feeds/browse",
	github: null,
	className: "aggre",
	aspectRatio: "square",
	logo: require("../../assets/logos/aggre.svg"),
	coauthors: [{
		name: "Jonas Rothman",
		link: null
	}],
};


const beaverjobs = {
	description: "A startup that lets workers leverage their experiences, field and valid date their references and auto generate their resume. " +
	"We plan to actually be able to tangibly prove a person is a superior worker based on their extracurriculars and references, not just their degree",
	title: "kangaroojobs.io",
	link: "https://kangaroojobs.io",
	github: null,
	className: "kangaroo",
	logo: null,
};


const skilletscafe = {
	description: SKILLETS_DESCRIPTION,
	title: "Skillets Cafe",
	link: "http://skilletscafewindsor.com",
	github: {
		link: "https://github.com/drunkengranite/skillet_website"
	},
	logo: require("../../assets/logos/skillets.svg"),
	className: "skillets",
	coauthors: [],
};


const thiswebsite = {
	description: ADAM_DESCRIPTION,
	title: "This website",
	link: "",
	github: {
		link: "https://github.com/drunkengranite/personal_site"
	},
	logo: require("../../assets/logos/coffee_black.png"),
	className: "adamahrens",
	coauthors: [],
};

const halla = {
	description: HALLA_DESCRIPTION,
	title: "Halla.co",
	link: "http://halla.co",
	logo: require("../../assets/logos/halla.png"),
	className: "halla",
	coauthors: [],
};

const Synonymity = {
	description: SYNONYMITY_DESCRIPTION,
	title: "Synonymity",
	github: {
		link: "https://github.com/drunkengranite/synonymity"
	},
	logo: "https://developer.android.com/images/brand/Android_Robot_200.png",
	className: "synonymity"
}

const Web_Scrapers = {
	description: SCRAPING_DESCRIPTION,
	title: "Web Scrapers",
	github: {
		link: "https://github.com/drunkengranite/srjc-scraper"
	},
	logo: "https://www.python.org/static/img/python-logo@2x.png",
	className: "scrapers"
}


const Boilerplates = {
	description: BOILERPLATE_DESCRIPTION,
	title: "Isomorphic Boilerplate",
	github: {
		link: "https://github.com/drunkengranite/isomorphic-boilerplate"
	},
	logo: require("../../assets/logos/nodejs-logo.svg"),
	className: "boilerplates"
}

const initialState = {
	projects: [
		aggre,
		thiswebsite,
		Synonymity,
		// beaverjobs,
		halla,
		skilletscafe,
		Boilerplates,
		Web_Scrapers
	]
};

const ProjectsReducer = handleActions({


}, initialState);

export default ProjectsReducer;


