import {HIDE_DRAWER, SHOW_DRAWER} from "./home.constants";

export const showDrawer = () => {
	return {
		type: SHOW_DRAWER
	}
}

export const hideDrawer = () => {
	return {
		type: HIDE_DRAWER
	}
}