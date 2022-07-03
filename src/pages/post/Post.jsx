import React from "react";
import { useParams, } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Post from "../../components/Post";
import NavBar from "../../components/NavBar";

import SideBar from "../../components/SideBar";

const PostPage = () => {
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

  return (
    <div>
      <NavBar navToHome={navToHome} />
      <SideBar sideToHome={sideToHome} homeToSide={dataHome} />
      <Post id={id}> </Post>
    </div>
  );
};

export default PostPage;
