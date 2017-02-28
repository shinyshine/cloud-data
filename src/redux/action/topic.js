import axios from "axios"

export const showAllText = (index) => ({
	type: "SHOW_ALL_TEXT",
	index: index
});

export const hideAllText = (index) => ({
	type: "HIDE_ALL_TEXT",
	index: index
})
