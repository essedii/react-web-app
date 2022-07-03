import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import Post from "./Post";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const Posts = () => {
  const url = "https://picsum.photos";
  //Page starts from 2 for purely aestetical reason (first page has ugly images)
  const [page, setPage] = useState(2);
  const [limit, setLimit] = useState(8);
  const [id, setId] = useState();
  const [size, setSize] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [imageListUrl, setImageListUrl] = useState();
  const [image, setImage] = useState();
  const [imagesList, setImagesList] = useState([]);
  const [filtered, setFiltered] = useState([]);

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

  useEffect(() => {
    axios
      .get(`${url}/v2/list?page=${page}&limit=${limit}`)
      .then((res) => {
        setImagesList(res.data);
        console.log(res.data, "resdata");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {});

  return (
    <div>
      <NavBar navToHome={navToHome} />
      <SideBar sideToHome={sideToHome} homeToSide={dataHome} />
      <div className="d-flex row align-items-center m-0 w-100">
        {imagesList.map((image) => {
          return (
            <div className="col-12 col-md-6 col-xl-3 col-3 col-md-6 p-0">
              <Post id={image.id}></Post>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
