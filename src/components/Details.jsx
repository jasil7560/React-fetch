import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const [data, setData] = useState({});
  const [mainImg, setMainImg] = useState("");
  const params = useParams();
  const id = params.id;

  const fetchData = async () => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    setData(response.data);
    setMainImg(response.data.thumbnail); 
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main1">
      <div className="right">
        <img className="img" src={mainImg} alt={data.title} />
        <div className="thumb-container">
          {data.images?.slice(0, 3).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`thumb-${index}`}
              className="thumb"
              onClick={() => setMainImg(img)}
            />
          ))}
        </div>
      </div>

      <div className="left">
        <h1 className="h1">{data.title}</h1>
        <h2 className="h2">Price: ${data.price}</h2>
        <p className="p">{data.description}</p>
        <p className="brand">Brand: {data.brand}</p>
        <p className="category">Category: {data.category}</p>
      </div>
    </div>
  );
};

export default Details;
