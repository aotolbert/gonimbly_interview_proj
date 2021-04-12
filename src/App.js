// import logo from './logo.svg';
import React, { Component } from 'react';
import { Col, Row, Container, Jumbotron , Header} from "./components/Grid";
// import Image from "./Images";
import Weather from "./components/Weather";
import Pwnd from "./components/Pwnd";
import Calculator from "./components/Calculator";

import ImgLinks from "./Images/imglinks";
import './App.css';

class App extends Component {

  state = {
    links: [],
    currentScore: 0,
    highScore: 0,
    guessed: ["Item"],
    badGuess: false,
    latitude: 0.0000,
    longitude: 0.0000,
    metaWeatherWOE: 0
  };

  


  componentDidMount() {
    this.loadImages();
    if ("geolocation" in navigator) {
      console.log("Available");

      console.log(navigator.geolocation);

      navigator.geolocation.getCurrentPosition(this.queryMetaWeatherWOEId);



    } else {
      console.log("Not Available");
    }
  }

  queryMetaWeatherWOEId = (position) => {
    console.log("Latitude is :", position.coords.latitude);
    console.log("Longitude is :", position.coords.longitude);
    let latVal = position.coords.latitude;
    let longVal = position.coords.longitude;

    this.setState({latitude: latVal});
    this.setState({longitude: longVal});
    

    console.log(this.state);

    if(this.state.latitude !== 0.0000 && this.state.longitude !== 0.0000) {
      console.log('located a lat and a long');
      
      let queryString = 'san%20fra';
      fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${queryString}`)

      // fetch(`https://www.metaweather.com/api/location/search/?lattlong=${this.state.latitude},${this.state.longitude}`)
      .then(res => res.json())
      .then((data) => {
        console.log(data);

        if(data !== null) {
          console.log(data[0].woeid);
          this.setState({metaWeatherWOE: data[0].woeid})
        }
        this.setState({ contacts: data })
      })
      .catch(console.log)


    } else {
      console.log('Lat and Long info appear to be missing');
      console.log(this.state);
    
    }
  };

  shuffleArray = (ImgLinks) => {
    for (let i = 0; i < ImgLinks.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = ImgLinks[i];
      ImgLinks[i] = ImgLinks[j];
      ImgLinks[j] = temp;
    }
    this.setState({ links: ImgLinks });
  };

  loadImages = () => {
   this.shuffleArray(ImgLinks);
   console.log("Welcome")
  };

  badGuess = () => {
    if (this.state.currentScore > this.state.highScore) {
      this.setState({ highScore: this.state.currentScore })
    }
    this.setState({ guessed: ["Item"] });
    this.setState({ currentScore: 0 })
    // this.alertLose();
  };

  // alertLose = () => {
  //   alert("Whoops! You've already selected him, try again!!")
  // }

  handleImageClick = event => {
    console.log(event.target.id)
    let userGuess = event.target.id;
    console.log(`${userGuess} was clicked`)
    console.log(this.state.guessed)
    for (let l=-1; l<this.state.guessed.length; l++) {
      if (userGuess === this.state.guessed[l]) {
        this.badGuess();
        return;
      } else {
        this.setState({currentScore: this.state.currentScore + 1})
        var joined = this.state.guessed.concat(userGuess);
        this.setState({ guessed: joined })
        this.loadImages();
      }
    }
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

          <Col size="4">
            <Weather id="weatherApp"/>
          </Col>

          <Col size="4">
            <Pwnd id="pwndApp"/>
          </Col>

          <Col size="4">
            <Calculator id = "calcApp"/>
          </Col>

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