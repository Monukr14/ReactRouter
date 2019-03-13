import React, { Component } from 'react';
import './navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navdesign">
      <ul>
  <li><a class="active" href="#home">Ideas</a></li>
  <li><a href="#news">Stats</a></li>
  <li><a href="#contact">Portfolio</a></li>
  <li><a href="#about">Charts</a></li>
</ul>
</div>



      </div>
    )
  }
}
