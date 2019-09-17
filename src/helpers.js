import {API_KEY} from "../API_KEY/API_KEY"

//temporary YYYY-MM-DD
const firstDayOfMonth = "2019-09-01"
const currentDayOfMonth = "2019-09-17"

export const getFullMonth = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${firstDayOfMonth}&end_date=${currentDayOfMonth}`;