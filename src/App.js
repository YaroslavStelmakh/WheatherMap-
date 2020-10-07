import React, {Component} from 'react';

import Clock from "./components/Clock"
import Form from "./components/Form";
import Weather from "./components/Weather";

const Api_Key = "71007b1062de15483e836c338a9d9942";

class App extends Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined
    };

    gettingWeather = async (e) => {
        e.preventDefault();
        var city = e.target.elements.city.value;

        if (city) {
            const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`);
            var data = await api_url.json();

            var sunset = data.sys.sunset;
            var date = new Date();
            date.setTime(sunset);
            var sunset_date = date.getHours() + ":0" + date.getMinutes() + ":" + date.getSeconds();

            var sunrise = data.sys.sunrise;
            var date = new Date();
            date.setTime(sunrise);
            var sunrise_date = date.getHours() + ":0" + date.getMinutes() + ":" + date.getSeconds();

            var temp = data.main.temp - 273.15 + " C";


            this.setState({
                temp: temp,
                city: data.name,
                country: data.sys.country,
                sunrise: sunrise_date ,
                sunset: sunset_date,
                error: undefined
            });
        }else {
            this.setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                sunrise: undefined,
                sunset: undefined,
                error: 'Please, write city name'
            });
        }
    };

    render() {
        return (
            <div className="wrapper">
                <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5  "  >
                            <Clock/>
                            <Form weatherMethod ={this.gettingWeather} />
                        </div>
                        <div className="col-sm-7 info">
                            <Weather
                                temp={this.state.temp}
                                city={this.state.city}
                                country={this.state.country}
                                sunrise={this.state.sunrise}
                                sunset={this.state.sunset}
                                error={this.state.error}
                            /></div>
                    </div>
                </div>
                </div>


            </div>
        )
    }
}



export default App;
