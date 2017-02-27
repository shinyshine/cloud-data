import axios from "axios"

export const slideToNext = (current, total) => ({
	type: 'SLIDE_TO_NEXT',
	current: current + 1

});


export const slideToPre = (current, total) => ({
	type: 'SLIDE_TO_PRE',
	current: current - 1
});