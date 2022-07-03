import React from "react";
import { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import NavBar from "../../components/NavBar";
import Posts from "../../components/Posts";
import SideBar from "../../components/SideBar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const isInitialMount = useRef(true);
  const navigate = useNavigate()

  const [sideButton, setSideButton] = useState("");
  const [dataHome, setDataHome] = useState(false);

  const navToHome = (navdata) => {
    setSideButton(navdata);
  };
  const sideToHome = (sidedata) => {
    setSideButton(sidedata);
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      console.log("NavBar updated");
    }
    setDataHome(sideButton);
    return () => {
      console.log("NavBar finished update");
    };
  }, [sideButton]);

  return (
    <div className="w-100">
      {/* <NavBar navToHome={navToHome} />

      <SideBar sideToHome={sideToHome} homeToSide={dataHome} /> */}

      <div id="post" className=" d-flex flex-column justify-content-between ">
        <div id="title" className="d-flex flex-column align-items-center mb-5">
          <h1> React Web App</h1>
          <h4>Axios, Bootstrap, FortAwesome and React Router, </h4>
        </div>

        <div className="d-flex flex-column align-items-start ms-5 m-5">
          <h2> Random Gallery </h2>
          <h5>
            Generate a page with some random pictures.
            <br /> Later you can decide how many picture you want inside the
            gallery or generate a new one.
          </h5>
        </div>

        <div className=" ">
          <button onClick={ ()=> navigate(`/posts/`)}  type="button" className="btn-lg btn-primary ms-5">
            Random Gallery
          </button>
        </div>
      </div>

      <div className="d-flex flex-column align-items-end me-5 mt-5">
        <div className="d-flex flex-column align-items-end ">
          <h2 className="text-end"> Random Image</h2>
          <h5 className="text-end">
            Generate a random page with a picture from. <br></br> Then you can
            modify its size or make it black and white.
          </h5>
        </div>
        <div className="">
          <button onClick={ ()=> navigate(`/posts/1`)} type="button" className="btn-lg btn-success">
            {" "}
            Random picture
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
