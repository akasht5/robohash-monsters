import { Component } from 'react';
import './App.css';
import { CardList } from './components/cardlist/cardlist.component'
import { Searchbox } from './components/searchbox/searchbox.component'

class App extends Component{
  constructor(){
      super();
      this.state = {
        monsters : [],
        searchField : ''
      };
  }

  async componentDidMount(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    this.setState({monsters:data});
    console.log(this.state);
  }

  onChange = (e) => {
      this.setState({searchField : e.target.value })
  }

  render(){
    const { monsters,searchField } = this.state;
    const filteredmonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log({filteredmonsters});

    return (
      <div className="App">
        <div className="container">
            <h2>RoboHash Monsters !</h2>
            <Searchbox placeholder="Search monsters" onChange={this.onChange} />
        </div>
        <CardList monsters={filteredmonsters} />
      </div>
    );
  }
}

export default App;
