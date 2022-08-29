import axios from "axios";
import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display_name: "",
      lat: "",
      lon: "",
      srcImg: "",
      nURL: "",
      erorrFlag: false,
      mapFlag: false,
      dis: "",
      date: "",
    };
  }

  getWeather = async (event) => {
    event.preventDefault();
    // let newURL = `${process.env.REACT_APP_URL}weather?lat=${this.state.lat}&lon=${this.state.lon}`

    try {
      let newWeather = await axios.get(this.state.nURL);
      this.setState({
        dis: newWeather.data.description,
        date :newWeather.data.date
      });
    } catch { this.setState({
      erorrFlag: true,
    });}
  };

  getLocation = async (event) => {
    event.preventDefault();
    let cityName = event.target.city.value;
    let key = "pk.b920badf452c49c3e0c637da3545efc0";
    let URL = `https://eu1.locationiq.com/v1/search?key=${key}&q=${cityName}&format=json`;
    // let newURL = `${process.env.REACT_APP_URL}weather?lat=${name}`

    try {
      let Result = await axios.get(URL);
      this.setState({
        display_name: Result.data[0].display_name,
        lat: Result.data[0].lat,
        lon: Result.data[0].lon,
        nURL: `${process.env.REACT_APP_URL}weather?lat=${Result.data[0].lat}&lon=${Result.data[0].lon}`,
        srcImg: `https://maps.locationiq.com/v3/staticmap?key=pk.b920badf452c49c3e0c637da3545efc0&center=${Result.data[0].lat},${Result.data[0].lon}`,
        mapFlag: true,
      });
    } catch {
      this.setState({
        erorrFlag: true,
      });
    }
    // this.getWeather();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.getLocation}>
          <input
            type="text"
            name="city"
            palceholder="plaese enter the city "
          ></input>
          <button type="submit">Submit</button>
        </form>
        <button type="button" onClick={this.getWeather}>
          weather 
        </button>
        <h4> The name : {this.state.display_name}</h4>
        <h1>weather : {this.state.dis}</h1>
        <h1>Date : {this.state.date}</h1>
        <h4>lat :{this.state.lat}</h4>
        <h4> lon : {this.state.lon}</h4>
        {/* <h4> dis:{this.state.nURL}</h4> */}
        {this.state.mapFlag && <img src={this.state.srcImg} alt="map" />}
        {this.state.erorrFlag && <h4>error : Somthing went wrong </h4>}
      </div>
    );
  }
}

export default Main;
