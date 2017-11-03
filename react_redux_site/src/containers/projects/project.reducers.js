import {handleActions} from "redux-actions";

const aggre = {
	description: "A website designed to aggregate a fractured live-streaming market. Currently working with twitch, and youtube, includes a " +
	"full stack golang api, python web scrapers and universal react client. Email me for a look at the repos",
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
	title: "beaverjobs.io",
	link: "https://beaverjobs.io",
	github: null,
	className: "beaver",
	logo: require("../../assets/logos/beaverLogo.svg"),
	// coauthors: [{
	// 	name: "Jonas Rothman",
	// 	link: null
	// }],
};


const skilletscafe = {
	description: "Thw website of a cafe I regular at, and use a tech guinea pig. This uses google sheets as a CMS, SSR's and hydrates the" +
	" redux store with data spreadsheet. Note I am working making it prettier :)",
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
	description: "...you're kinda looking at it. Includes the React-Redux version of this site, the Elm version (might be not working)" +
	"and the short Go API used for content",
	title: "This website",
	link: "",
	github: {
		link: "https://github.com/drunkengranite/personal_site_react_redux"
	},
	logo: require("../../assets/logos/adam_logo.png"),
	className: "adamahrens",
	coauthors: [],
};

const halla = {
	description: "Back when I worked for these guys they were still a food recommendation platform. I created datascrapers based in both java and python and " +
	"build an alpha-version android app",
	title: "Halla.co",
	link: "http://halla.co",
	logo: require("../../assets/logos/halla.png"),
	className: "halla",
	coauthors: [],
}

const initialState = {
	projects: [
		aggre,
		skilletscafe,
		beaverjobs,
		thiswebsite,
		halla
	]
};

const ProjectsReducer = handleActions({}, initialState);

export default ProjectsReducer;


