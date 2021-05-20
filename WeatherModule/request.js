const key = 'cbe3dd267a18f6c89943b3eff94f1ed7';

// const baseURL = 'http://api.lopenweathermap.org/data/2.5/weather?q=Lagos&appid=2c1bc99d8ca693f70d486339db8b276e';

// fetch(baseURL)
//     .then((data) => { console.log('response', data.json()) })
//     .catch((error) => {
//         console.log(error);
//     });

const requestCity = async (city) => {
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}`;

    //make fetch call (promise call)
    const response = await fetch(baseURL + query);

    //promise data
    const data = await response.json();
    return data;

}
