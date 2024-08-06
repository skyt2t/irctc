import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import MainSection from './Components/MainSection';

class Home extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <MainSection />
      </div>
    );
  }

}

export default Home;
