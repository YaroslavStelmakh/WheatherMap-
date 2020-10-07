import React, {Component} from "react";


class Weather extends Component {


    render() {
        return (
            <div className="infoWeath">
                { this.props.city &&
                    <div>
                    <p>City, Country: {this.props.city}, {this.props.country}</p>
                        <p>Temperature: {this.props.temp}</p>
                    <p>Sunrise: {this.props.sunrise}</p>
                    <p>Sunset: {this.props.sunset}</p>
                    </div>
                }
                <p className="error">{this.props.error}</p>
            </div>
        )
    }
}



export default Weather;
