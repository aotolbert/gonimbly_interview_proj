// import logo from './logo.svg';
import React, { Component } from 'react';
import { Col, Row, Container, Jumbotron , Header} from "./components/Grid";
// import Image from "./Images";
import Weather from "./components/Weather";
import Pwnd from "./components/Pwnd";
import Calculator from "./components/Calculator";
import API from "./utils/API.js";
import ImgLinks from "./Images/imglinks";
import './App.css';

class App extends Component {

  state = {
      latitude: 0.0000,
      longitude: 0.0000,
      metaWeatherWOE: 0,
      searchTerm: "Seattl"
  };

  


  componentDidMount() {
    // this.loadImages();
    if ("geolocation" in navigator) {
      console.log("Available");

      console.log(navigator.geolocation);

      navigator.geolocation.getCurrentPosition(this.queryMetaWeatherWOEIdWithPosition);



    } else {
      console.log("Not Available");
    }
  }

  queryMetaWeatherWOEIdWithPosition = (position) => {
    console.log("Latitude is :", position.coords.latitude);
    console.log("Longitude is :", position.coords.longitude);
    let latVal = position.coords.latitude;
    let longVal = position.coords.longitude;

    this.setState({latitude: latVal});
    this.setState({longitude: longVal});
    

    console.log(this.state);

    if(this.state.latitude !== 0.0000 && this.state.longitude !== 0.0000) {
      console.log('located a lat and a long');
      

      // let queryString = 'san%20fra';
      // fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${queryString}`)
      API.getWOEIdWithLatLong(this.state.latitude, this.state.longitude)
      .then(res  => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
      // fetch(`/api/weather/location/search/latlong/?lat=${this.state.latitude}&long=${this.state.longitude}`)
      // .then(res => {
      //   console.log(res);
      //   // return res.json();
      // }).catch(err => {
      //   console.log(err);
      // })
      // .then((data) => {
      //   console.log(data);

      //   if(data !== null) {
      //     console.log(data[0].woeid);
      //     this.setState({metaWeatherWOE: data[0].woeid})
      //   }
      //   this.setState({ contacts: data })
      // })
      // .catch(console.log)


    } else {
      console.log('Lat and Long info appear to be missing');
      console.log(this.state);
    
    }
  };

  handlePhoneClick = () => {
    let phone = this.state.currentTruck.phone
    window.open(`tel: ${phone}`)
}
  onClickSearchWeather = () => {
    let searchTerm = this.state.searchTerm;
    API.getWOEIdWithQueryString(searchTerm)
    .then(res  => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });

  };


  render() {
    return ( 

      <Container fluid>
        <Header 
        current={this.state.currentScore}
        high={this.state.highScore}
        />
        <Jumbotron>
          <h2>Adam Tolbert's GoNimbly Interview Project</h2>
          {/* <h2 className="mx-auto">Click on a Player to select them for your squad. But don't select the same player twice!!</h2> */}
        </Jumbotron>
        <Row width="100" id="background">

          <Col size="8">
            <Weather id="weatherApp" onClickSearchWeather={this.onClickSearchWeather}/>
          </Col>

          {/* <Col size="4">
            <Pwnd id="pwndApp"/>
          </Col>

          <Col size="4">
            <Calculator id = "calcApp"/>
          </Col> */}

        </Row>

      </Container>

    );
  }
}

export default App;



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;