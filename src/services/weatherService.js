// https://api.openweathermap.org/data/2.5/weather?q=london&appid=ca91caf61ed46aee2c6042821949686b

const API_KEY = 'ca91caf61ed46aee2c6042821949686b'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/'

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY })

    return fetch(url)
        .then((res) => res.json())
        .then((data) => data);
}

export default getWeatherData