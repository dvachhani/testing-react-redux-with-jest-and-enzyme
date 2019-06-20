import React, { Component } from 'react';
import './app.scss';
import Header from './components/header/Header';
import Headline from './components/headline/Headline';

const tempArr = [
  {
    fName: 'John',
    lName: 'Doe',
    email: 'johndoe@gmail.com',
    age: 24,
    onlineStatus: true
  }
];

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="main">
          <Headline
            headline="Posts"
            desc="Click the button to render posts!"
            tempArr={tempArr}
          />
        </section>
      </div>
    );
  }
}

export default App;
