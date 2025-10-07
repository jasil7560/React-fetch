import axios from "axios";
import React, {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import "./Details.css";

 const Details =()=>{
    const[data,setData]=useState([]);

    const parems = useParams();
    const id = parems.id;

    const fetchdata = async ()=>{
        const response = await axios.get(`https://dummyjson.com/products/${id}`);

        setData(response.data);
        console.log(response.data);
        
    };

    useEffect(()=>{
    fetchdata();
    },[]);

    return (
        <div className="main1">
            <div className="main2">
            <img className="img" src={`${data.thumbnail}`} alt="" />
            <h1 className="h1">{data.title}</h1>
            <h2 className="h2">price:=${data.price}</h2>
            <p className="p">{data.description}</p>
            </div>
        </div>
    );
};

export default Details

