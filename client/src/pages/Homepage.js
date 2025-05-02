import React from 'react'
import { useNavigate } from "react-router-dom"
import { useEffect } from 'react'

import img from "../image/oakseed2.png"
import domain from "../image/slider6.webp"
import machineLearning from "../image/slider7.webp"
import Networking from "../image/slider1.webp"
import dataAnalysis from "../image/slider2.webp"
import security from "../image/slider3.webp"
import webDevelopment from "../image/slider4.webp"
import gamedev from "../image/slider5.webp"
import minilogo from "../image/minlogow.png"


import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.min.css';

function Homepage() {

  // $(window).on("load", function () {
  //   // $("profile_inner").hide();
  //   // $("#hi ").hide();
  //   // $("#femi").hide();

  //   // $("#hi").toggle(1000, function () {
  //   //   $(".profile_inner").show();

  //   //   $("#femi").toggle(1000, function () {
  //   //     setTimeout(() => {
  //   //       // callnext();
  //   //     }, 100);
  //   //   });
  //   // });


  //   // setInterval(() => {
  //   //   $(".profile #hi").effect("bounce", { times: 8, distance: -60 }, 10000);
  //   //   $(".profile  #femi").effect("bounce", { times: 10, distance: -20 }, 10000);
  //   // }, 6000);



  // });


  useEffect(() => {

    $(".profile_inner").hide();
    $("#hi ").hide();
    $("#femi").hide();

    $("#hi").toggle(1000, function () {
      $(".profile_inner").show();

      $("#femi").toggle(1000, function () {
        setTimeout(() => {
          // callnext();
        }, 100);
      });
    });

    const bounceInterval= setInterval(() => {

      $(".profile #hi").effect("bounce", { times: 5, distance: 20 }, 400);
      $(".profile  #femi").effect("bounce", { times: 5, distance: 20 }, 400);
    }, 6000);

    return () => clearInterval(bounceInterval);
  }, [])

  $(document).ready(() => {
    $("#dkmodebutton").click(() => {
      $(".body1, .body2, .body3, .foot, .welcomemessage").toggleClass("dkmode");

      if ($(".body1").hasClass("dkmode")) {
        $("#dkmodebutton").text("Switch to default");
        $("#dkmodebutton").css("background-color", "#000000d2");
        $("#dkmodebutton").css("color", "white");
        $("#dkmodebutton").css("border", "1px solid white");
      } else {
        $("#dkmodebutton").text("Switch to darkmode");
        $("#dkmodebutton").css("background-color", "#6a4e3083");
      }
    });
  });





  const navigate = useNavigate();
  return (


    <div className="body1">
      <div className="nav">

        <div className="navbar">
          <div className="logoname">
            <span style={{ fontSize: "4rem", color: "white" }} className="logosection">O</span><span className='ackrigs'
              style={{ color: "whitesmoke", fontSize: "2rem" }}
            >akrigs</span>

            <img src={img} className="oakseed" style={{ width: "50px", height: "60px" }} alt='oakseedlogo' />

          </div>
          <div className="navbarulist">
            <ul>
              <li className="middle">
                <a className="loginbut" onClick={() => navigate("login")} >Login</a>
              </li>
            </ul>
            <ul>
              <li className="serbut">
                <a className="serdrop" href="#">Services</a>
                <div className="drop">
                  <a onClick={() => navigate("/software-tra")}>Software Training</a>
                  <a onClick={() => navigate("/software-dev")}>Software Development</a>
                  <a onClick={() => navigate("/projects")}>Projects</a>

                  <a onClick={() => navigate("/machine-dev")}>Machine learning</a>
                  <a onClick={() => navigate("/datans")}>Data Analysis</a>
                  <a onClick={() => navigate("/underdevelopment")}>Domain registration</a>
                  <a onClick={() => navigate("/underdevelopment")}>Networking</a>




                </div>
              </li>
            </ul>
          </div>


        </div>
      </div>

      <div className="welcomemessage">
        <div className="welcome" style={{ color: 'white' }} >
          <div className="profile">
            <div className="profile_inner" style={{ display: "none" }}  >
              <h4 id="hi"><b><span style={{ fontSize: "3em" }}>W</span>elcome to Oakrigs!</b></h4>
              <h4 id="femi">Explore our community and wealth of
                resources</h4>
            </div>
          </div>

        </div>

      </div>



      <div className="body2">
        <div className="gallery">

          <img id="domain" src={domain} alt="Domain Registration"></img>
          <img id="ml" src={machineLearning} alt="Machine Learning" />
          <img id="network" src={Networking} alt="Networking" />
          <img id="data" src={dataAnalysis} alt="Data Analysis" />
          <img id="security" src={security} alt="securitz"></img>
          <img id="web" src={webDevelopment} alt="Web Development" />
          <img id="gamedev" src={gamedev} alt="Game Development" />

        </div>
      </div>


      <div className="body3">
        <div>
          <h1 style={{ color: "whitesmoke" }}>Join our community</h1>
        </div>
        <div>
          <a className="regbut" onClick={() => navigate("register")}>Register</a>
        </div>
        <div>
          <a className="bdbut dow" href="#">Download our application</a>
        </div>
        <div>
          <a className="bdbut wat" href="#">Watch our tutorial videos</a>
        </div>
      </div>


      <div id="footer" className="foot">


        <div>
          Our policies: <br /><br />
          <ul className="proj">
            <li><a onClick={() => navigate("about")} >About</a></li>
            <li><a href="#footer">Privacy</a></li>
            <li><a href="#footer">Licenses</a></li>
            <li><a href="#footer">Terms and conditions</a></li>
            <li><a href="#footer">Investors</a></li>
          </ul>
        </div>


        <div>
          Our resources: <br /><br />
          <ul className="proj">
            <li><a href="#footer">Community</a></li>
            <li><a href="#footer">Blog</a></li>
            <li><a href="#footer">Feedback</a></li>
            <li><a href="#footer">FAQ</a></li>
          </ul>
        </div>

        <div>
          Our products: <br /><br />
          <ul className="proj">
            <li><a href="#footer">Download</a></li>
            <li><a href="#footer">Marketplace</a></li>
          </ul>
        </div>

        <div className="blogot">
          <div>All rights reserved. 2025</div>

          <img id="gamed" className="" src={minilogo} alt="minilogo" />
          <button id="dkmodebutton">Switch to darkmode</button>
        </div>

      </div>





    </div>





  )







}





export default Homepage