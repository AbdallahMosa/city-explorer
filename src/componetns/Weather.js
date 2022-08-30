import Card from 'react-bootstrap/Card';
import React from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';


class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            getWeatherArray:[]
        }
    }



    getWeather = async (event) => {
        event.preventDefault();
        var wURL=`${process.env.REACT_APP_URL}weather?lat=${this.props.lat}&lon=${this.props.lon}`
        try {
            let newWeather = await axios.get(wURL);
            this.setState({
                getWeatherArray: newWeather.data

            });
        } catch {
            this.setState({
                erorrFlag: true,
            });
        }
    };


    render() {
        return (
            <div style={{ padding: '30px', justifyContent: "center" }}>
    <Button variant="danger" type="submit" onClick={this.getWeather}>
        weather
    </Button>
    <Card>
        <Card.Body>
            <Card.Text>
            {this.state.getWeatherArray.map(item =>{
        return(
          <div>
            <h3>new weather = {item.description} </h3>
            <h3>date = {item.valid_date}</h3>
          </div>
        )
      })
      }
            </Card.Text>
        </Card.Body>
    </Card>
</div >
               
        );
    }
}
export default Weather;
