import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Post from "../../components/Post";
import NavBar from "../../components/NavBar";

import SideBar from "../../components/SideBar";

const PostPage = () => {

  const [options, setOptions] = useState("?grayscale");
  const [width, setWidth] = useState("600");
  const [height, setHeight] = useState("600");

  const url = "https://picsum.photos";
  const { id } = useParams();
  const isInitialMount = useRef(true);

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

  // useEffect(() => {
  //   setOptions()
  // },[options])

  return (
    <div>
      <NavBar navToHome={navToHome} />
      <SideBar sideToHome={sideToHome} homeToSide={dataHome} />
      <div id="post" className="d-flex justify-content-center">
        <img src={`${url}/id/${id}/${width}/${height}${options}`}></img>
      </div>

      <button
        onClick={() => {
          setOptions("");
        }}
      >
        Color
      </button>

      <button
        onClick={() => {
          setOptions("?grayscale");
        }}
      >
        Gray
      </button>
      <button
        onClick={() => {
          setWidth(width + 100);
        }}
      >
        +w
      </button>
      <button
        onClick={() => {
          setWidth(width-100);
        }}
      >
        -w
      </button>
      <button
        onClick={() => {
          setHeight(height + 100);
        }}
      >
        +h
      </button>
      <button
        onClick={() => {
          setHeight(height-100);
        }}
      >
        -h
      </button>
    </div>
  );
};

export default PostPage;
