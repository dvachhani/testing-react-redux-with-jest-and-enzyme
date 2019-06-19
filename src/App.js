import React from 'react';
import './app.scss';

import Header from './components/header/Header';
import Headline from './components/headline/Headline';

function App() {
  return (
    <div>
      <Header />
      <section className="main">
        <Headline headline="Posts" desc="Click the button to render posts!" />
      </section>
    </div>
  );
}

export default App;
