import React from "react";
import axios from "axios";
import "./Weather.css";
class Wheather extends React.Component {
  constructor() {
    super();
    this.state = {
      lang: 0,
      lat: 0,
      temp: 0,
      humidity: 0,
      weather: undefined,
      feelslike: 0,
      visibility: "",
      windspeed: "",
      cloud: 0,
      sunRise: "",
      sunSet: "",
    };
  }
  render() {
    return (
      <div className="container">
        <div className="search">
          <input type="search" />
          <button type="submit">Search</button> <br />
        </div>

        <div className="row">
          {/* First Column */}
          <div className="column">
            <i
              class="fas fa-cloud-sun"
              style={{
                fontSize: "110px",
                paddingBottom: "10px",
                color: "gray",
              }}
            ></i>{" "}
            ,
            <br />
            {this.state.lat > 0 &&
            new Date().getMonth() > 3 &&
            new Date().getMonth() < 9
              ? "Summer"
              : "Winter"}
            <h3 style={{ fontSize: "40px" }}>
              Temperature: {Math.round(this.state.temp)}
              <sup>o</sup>C
            </h3>
            <p>
              Feels like: {Math.round(this.state.feelslike)}
              <sup>o</sup>C
            </p>
          </div>
          {/* Second Column */}
          <div className="column" id="secondCol">
            <h1 style={{ borderBottom: "1px solid gray" }}>Peshawar</h1>
            <h4>Humidity: {this.state.humidity}</h4>
            <h4>Weather: {this.state.weather}</h4>
            <h4>Wind Speed: {this.state.wind}</h4>
            <h4>Visibility: {this.state.visibility}</h4>
            <h4>Sun Rise: {this.state.sunRise}</h4>
            <h4>Sun set: {this.state.sunSet}</h4>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition((location) => {
      this.setState({
        lat: location.coords.latitude,
        lang: location.coords.longitude,
      });
    });

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lang}&appid=3dd9a7f341c33d36438aad0580bf1108`
      )
      .then((res) => {
        this.setState({
          temp: res.data.main.temp - 273.15,
          humidity: res.data.main.humidity,
          feelslike: res.data.main.feels_like - 273,
          weather: res.data.weather[0].main,
          wind: res.data.wind.speed,
          visibility: res.data.visibility,
        });

        const unix = res.data.sys.sunrise;
        const date = new Date(unix * 1000).toLocaleTimeString();
        this.setState({ sunRise: date + "" });

        const set = res.data.sys.sunset;
        const setdate = new Date(set * 1000);
        this.setState({ sunSet: setdate.toLocaleTimeString() + "" });
        console.log(res);
      });
  }
}

export default Wheather;
