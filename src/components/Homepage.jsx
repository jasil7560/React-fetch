import axios from "axios";
import React,{useEffect,useState} from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"
import Footer from "./Footer";



const Homepage=()=>{
    const[data,setData]=useState([]);
    const [filterdata, setFilterdata]=useState([]);
     const[inp,setInp]=useState("")

    async function FetchData() {
        const res=await axios.get("https://dummyjson.com/products");
        // console.log(res.data.products);
        setData(res.data.products);
    }
useEffect(()=>{
    FetchData();
},[]);

useEffect(()=>{
    setFilterdata(
        data.filter((val)=>val.title.toLowerCase().includes(inp.toLowerCase()))
    );
    console.log(filterdata);
},[inp,data]);



return(
<div >

    <Navbar setInp={setInp}/>
        <div className="main">
   {filterdata.map((val,i)=>(
    <Link to={`/details/${val.id}`}className="box" key={i}>
    <div>
        <img src={val.thumbnail} alt="" />
        <h1>{val.title}</h1>
        <p>{val.brand}</p>
        <p>{val.category}</p>
    </div>
    </Link>
   ))} 
   </div>
   <Footer />

 </div>
);
};

export default Homepage;