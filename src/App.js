import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { PureCompo, PureCompoProps } from './Components/PureCompo';
import StateCompo from './Components/StateCompo';
/*import CompoCycleDeVie from './Components/CompoCycleDeVie';*/
import FilterableJeuxTable from './Components/Jeux/FilterableJeuxTable';
import Contacts from './Components/Jeux/contacts';
import Images from './Components/Jeux/images';
import Posts from './Components/Jeux/posts';
import Users from './Components/Jeux/users';
import Countries from './Components/Jeux/covidCountries';
import Comics from './Components/Jeux/charactComics';
import Totalcovid from './Components/Jeux/covidWorld';

const myheader = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded',
});
const init = {
  method: 'GET',
  headers: myheader,
  mode: 'cors',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateApp: "",
      contacts: [],
      images: [],
      posts: [],
      users: [],
      countries: [],
      allworlds: [],
      comics: [],
      myComics: []
    }
  }

  /* onInputChange(val) {
      console.log("val dans APP ->" + val)
      this.setState({stateApp:val});
   }*/
  onInputChange = (val) => {
    this.setState({ stateApp: val });
    console.log("val dans APP ->" + val)
  }


  componentDidMount() {
    const url = `https://gateway.marvel.com:443/v1/public/events?&apikey=04ddb3bee1b32fc932fb3f736f1c389d`;
    fetch(url, init)
      .then(response => response.json())
      .then(json => {
        const data = json;
        console.log('data api2', data.data.results);
        const comics = data.data.results;
        this.setState({ comics: comics });
        console.log("mycomics", comics);
      })
      .catch(error => console.log(error)) // error json
      .catch(error => console.log(error)); // error API
  };
  render() {
    let mesLabels = [];
    // mesLabels.push("elisa");
    // mesLabels.push("elisa")
    // mesLabels.push("léna")
    // mesLabels.push("thibault")
    // mesLabels.push("féleen")

    const JEUX = [];

    JEUX.push({ category: 'Sport', name: 'Beijing', Année: '2008', stocked: true, genre: 'DiversSports', age: '3+', console: 'Ps3' });
    JEUX.push({ category: 'Sport', name: 'ShaunWhite', Année: '2010', stocked: true, genre: 'SkateBoard', age: '12+', console: 'Ps3' });
    JEUX.push({ category: 'Sport', name: 'NBA2K010', Année: '2009', stocked: true, genre: 'Basket', age: '3+', console: 'Ps3' });
    JEUX.push({ category: 'Sport', name: 'SSX', Année: '2012', stocked: true, genre: 'Snowboard', age: '3+', console: 'Ps3' });
    JEUX.push({ category: 'Sport', name: 'Fifa09', Année: '2008', stocked: true, genre: 'Football', age: '3+', console: 'Ps3' });
    JEUX.push({ category: 'Sport', name: 'Fifa13', Année: '2012', stocked: true, genre: 'Football', age: '3+', console: 'Ps3' });
    JEUX.push({ category: 'Sport', name: 'FIFA20', Année: '2019', stocked: true, genre: 'Football', age: '3+', console: 'Ps4' });
    JEUX.push({ category: 'Sport', name: 'FIFA18', Année: '2017', stocked: true, genre: 'Football', age: '3+', console: 'Ps4' });
    JEUX.push({ category: 'Sport', name: 'FarmingSimulator17', Année: '2016', stocked: true, genre: 'Simulator', age: '3+', console: 'Ps4' });
    JEUX.push({ category: 'Sport', name: 'SoccerBrawl', Année: '1991', stocked: true, genre: 'Arcade', age: '12+', console: 'NeoGeo' });
    JEUX.push({ category: 'Sport', name: 'NeoTurfMaster', Année: '1996', stocked: true, genre: 'Arcade', age: '7+', console: 'NeoGeo' });
    JEUX.push({ category: 'Sport', name: 'TopSpin3', Année: '2008', stocked: true, genre: 'Tennis', age: '3+', console: 'Ps3' });
    JEUX.push({ category: 'Aventure', name: 'TombRaider', Année: '2008', stocked: true, genre: 'Action', age: '18+', console: 'Ps3' });
    JEUX.push({ category: 'Aventure', name: 'DeadSpace3', Année: '2013', stocked: true, genre: 'Action', age: '18+', console: 'Ps3' });
    JEUX.push({ category: 'Aventure', name: 'RedDeadR', Année: '2010', stocked: true, genre: 'Action', age: '18+', console: 'Ps3' });
    JEUX.push({ category: 'Aventure', name: 'Uncharted3', Année: '2011', stocked: true, genre: 'Action', age: '16+', console: 'Ps3' });
    JEUX.push({ category: 'Aventure', name: 'Batman ArkamCity', Année: '2011', stocked: true, genre: 'Action', age: '16+', console: 'Ps3' });
    JEUX.push({ category: 'Aventure', name: 'Condemned2', Année: '2008', stocked: true, genre: 'Action', age: '18+', console: 'Ps3' });
    JEUX.push({ category: 'Aventure', name: 'DukeNukem ', Année: '2011', stocked: true, genre: 'Action', age: '18+', console: 'Ps3' });
    JEUX.push({ category: 'Aventure', name: 'Ratatouille', Année: '2007', stocked: true, genre: 'Action', age: '3+', console: 'Ps3' });
    JEUX.push({ category: 'Aventure', name: 'Sonic Unleashed', Année: '2008', stocked: true, genre: 'Action', age: '7+', console: 'Ps3' });
    JEUX.push({ category: 'Aventure', name: 'Lego Batman2', Année: '2012', stocked: true, genre: 'Action', age: '12+', console: 'Ps3' });
    JEUX.push({ category: 'Aventure', name: 'Ratchet&Clank', Année: '2016', stocked: true, genre: 'Action', age: '3+', console: 'Ps4' });
    JEUX.push({ category: 'Aventure', name: 'Fallout4', Année: '2015', stocked: true, genre: 'Action', age: '18+', console: 'Ps4' });
    JEUX.push({ category: 'Aventure', name: 'HorizonZeroDawn', Année: '2017', stocked: true, genre: 'Action', age: '16+', console: 'Ps4' });
    JEUX.push({ category: 'Aventure', name: 'Knack2', Année: '2017', stocked: true, genre: 'Action', age: '7+', console: 'Ps4' });
    JEUX.push({ category: 'Aventure', name: 'Toki', Année: '1989', stocked: true, genre: 'Arcade', age: '3+', console: 'NeoGeo' });
    JEUX.push({ category: 'Aventure', name: 'GoldenAxe', Année: '1995', stocked: true, genre: 'Arcade', age: '12+', console: 'NeoGeo' });
    JEUX.push({ category: 'Aventure', name: 'Astérix', Année: '1996', stocked: true, genre: 'Arcade', age: '3+', console: 'NeoGeo' });
    JEUX.push({ category: 'Course', name: 'DriveClub', Année: '2014', stocked: true, genre: 'Simulator', age: '3+', console: 'Ps4' });
    JEUX.push({ category: 'Course', name: 'WipEoutOmega', Année: '2017', stocked: true, genre: 'Simulator', age: '7+', console: 'Ps4' });
    JEUX.push({ category: 'Course', name: 'GranTurismo5', Année: '2010', stocked: true, genre: 'Simulator', age: '3+', console: 'Ps3' });
    JEUX.push({ category: 'Course', name: 'DirtColinMcRae', Année: '2006', stocked: true, genre: 'rallye', age: '12+', console: 'Ps3' });
    JEUX.push({ category: 'Course', name: 'MotorStorm', Année: '2006', stocked: true, genre: 'Crash', age: '12+', console: 'Ps3' });
    JEUX.push({ category: 'Guerre', name: 'MetalSlug', Année: '1996', stocked: true, genre: 'Arcade', age: '12+', console: 'NeoGeo' });
    JEUX.push({ category: 'Guerre', name: 'MetalSlug2', Année: '1998', stocked: true, genre: 'Arcade', age: '12+', console: 'NeoGeo' });
    JEUX.push({ category: 'Guerre', name: 'MetalSlug3', Année: '2000', stocked: true, genre: 'Arcade', age: '12+', console: 'NeoGeo' });
    JEUX.push({ category: 'Guerre', name: 'ShockTrooper2', Année: '1998', stocked: true, genre: 'Arcade', age: '7+', console: 'NeoGeo' });
    JEUX.push({ category: 'Guerre', name: 'TimeCrisis RazingStorm', Année: '2005', stocked: true, genre: 'Action', age: '16+', console: 'Ps3' });
    JEUX.push({ category: 'Combat', name: 'Doubledragon', Année: '1995', stocked: true, genre: 'Arcade', age: '7+', console: 'NeoGeo' });
    JEUX.push({ category: 'Combat', name: 'FatalFury3', Année: '1995', stocked: true, genre: 'Arcade', age: '12+', console: 'NeoGeo' });
    JEUX.push({ category: 'Combat', name: 'DragonballFighterZ', Année: '2018', stocked: true, genre: 'Manga', age: '12+', console: 'Ps4' });
    JEUX.push({ category: 'Combat', name: 'Marvel-VS-Capcom', Année: '2011', stocked: true, genre: 'Manga', age: '12+', console: 'Ps3' });



    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <PureCompo />
          <Comics comics={this.state.comics} />
          <Totalcovid allworlds={this.state.allworlds} />
          <Countries countries={this.state.countries} />
          <Users users={this.state.users} />
          <Contacts contacts={this.state.contacts} />
          <Posts posts={this.state.posts} />
          <Images images={this.state.images} />
          <FilterableJeuxTable
            jeux={JEUX}
          />

          {/*<CompoCycleDeVie/>*/}
          {mesLabels.map((libellé) =>
            <StateCompo key={libellé} label={libellé} onInputChange={this.onInputChange}

            />
          )}


          {this.state.stateApp ? <PureCompoProps label={this.state.stateApp} age={37} /> : <div>Aucun Resultat</div>}




          <p>
            ludo_Code 2020<code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://ludovic-mouly.com"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
        </a>

        </header>
      </div>
    )
  }
}
export default App;