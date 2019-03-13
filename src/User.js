import React, { Component } from 'react';
import userimg from './images/userimg.png';
import {Link} from 'react-router-dom';
import './userone.css';

export default class User extends Component {
  render() {
    return (
      <div>
        <div className="Headdesign">
        <div className="row">
            <div className="col-md-2">
                <div>
                  <Link to='/test'> <img className="imageset1" src= {userimg}/> </Link> 
            
                </div>
            </div>
            <div className="col-md-10">
                <div className="outerdiv">
                <div className="userset">
                <Link to="/test">    <h1 className="name">Jhon Doe</h1> </Link>
                </div>
                <div className="btnset">
              <span className="btnst">  <button type="button" class="btn btn-primary">Copy</button></span>
              <span className="btnst">  <button type="button" class="btn btn-primary">Message</button></span>
               <span className="btnst"> <button type="button" class="btn btn-primary">Follow</button></span>

              </div>
            <div className="iconset">
                <div className="iconsettt">
                <span className="iconstyle"><i class="far fa-clock"></i><span className="icon">Last Visit 1 hour ago</span></span>
                </div>
                <div className="iconsettt">
              <span className="iconstyle" ><i class="fas fa-calendar-alt"></i><span className="icon">Joined 2 Years ago</span></span>
              </div>
              <div className="iconsettt">
              <span className="iconstyle" ><i class="fas fa-map-marker-alt"></i><span className="icon">India</span></span>
              </div>
              <div className="iconsettt">
              <span  className="iconstyle1"><i class="fab fa-twitter"></i><span className="icon">JhonDoeNvest</span></span> 
              </div>

              </div>

              <div className="iconhead">

                <div className="iconheadset">
                <span className="iconstylee">425862 <span className="iconstyle2"><i class="fas fa-signal"></i></span></span>
                <p className="iconstyle3">Reputation</p>
                </div>
                <div className="iconheadset">
                <span className="iconstylee">425862 <span className="iconstyle2"><i class="far fa-eye"></i></span></span>
                <p className="iconstyle3">Views</p>
                </div>
                <div className="iconheadset">
                <span className="iconstylee">425862 <span className="iconstyle2"><i class="far fa-comment-alt"></i></span></span>
                <p className="iconstyle3">Published</p>
                </div>

                <div className="iconheadset">
                <span className="iconstylee">425862 <span className="iconstyle2"><i class="far fa-thumbs-up"></i></span></span>
                <p className="iconstyle3">Liked</p>
                </div>
                <div className="iconheadset">
                <span className="iconstylee">425862 <span className="iconstyle2"><i class="fas fa-users"></i></span></span>
                <p className="iconstyle3">Followers</p>
                </div>
                <div className="iconheadset">
                <span className="iconstylee">425862 <span className="iconstyle2"><i class="far fa-copy"></i></span></span>
                <p className="iconstyle3">Copied</p>
                </div>

              </div>
            </div>
            </div>
            </div>
        </div>
      </div>
    )
  }
}
