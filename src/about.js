import React, {Component} from 'react';
import './App.css';
import './burger-menu.css';
import YouTube from 'react-youtube';


class About extends Component {

  showSettings (event) {
    event.preventDefault();
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      width: '320px',
      height: '155px',
      
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <div className="About page-component">
        <div className="about-container">
          <div className="page-title-container"><h1>Vår resa</h1></div>
          <div className="about-text-container box-750">
            <p>Pasta & Parmesan är en foodtruck som just nu finns i Markaryd i södra Sverige där vi lagar schysst pasta med goda pastasåser från grunden. Här finns något för alla - en vegetarisk pasta pesto med svamp eller en oxfilépasta för finsmakaren eller kanske en räkpasta med handpillade räkor till dig som inte gillar kött eller inte är förtjust i gräddiga såser.</p>
            <p>Pasta Parmesan startades i april 2020 av mig, Olivia Fritiofsson, som spontant åkte och köpte foodtrucken i Hässleholm en solig söndag i oktober. Det hela filmades och klipptes ihop till korta videor som går att se på min YouTube-kanal "Olivia Fritiofsson". På kanalen publicerar jag även nya videos där man får följa med i min vardag som foodtrucker och möta problemen som uppstår för att sedan se hur allting går även om det verkar omöjligt ibland.</p>
            <p>Hoppas vi ses, i foodtrucken eller på YouTube </p>
            <p>MÅNGA KRAMAR</p>
            <p>från Olivia</p>
          </div>

          <div className="youtube-container box-900">
            <YouTube
              videoId="MmRTVYj04dA"
              opts={opts}
              onReady={this._onReady}
            />
            <YouTube
              videoId="ffqLFFXPFEg"
              opts={opts}
              onReady={this._onReady}
            />
            <YouTube
              videoId="ZBX4TFXoDMc"
              opts={opts}
              onReady={this._onReady}
            />
          </div>
        </div>
      </div>
    );    
  }

}

export default About;