import React,{useEffect} from 'react'
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState([]);

  const [heading,setheading]=useState('')

  useEffect(()=>{
  axios.get('https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=a1992989f4cf41598c0a68aea85129eb')
  .then((res) => {
  console.log(res.data.articles)
  setData(res.data.articles);
  setheading("general")
  });
  },[])
  const categoryChangeToI = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=a1992989f4cf41598c0a68aea85129eb')
     .then((res) => {
        setData(res.data.articles);
        setheading("India")
      });
  };
  const categoryChangeToU = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=a1992989f4cf41598c0a68aea85129eb' )
      .then((res) => {
        setData(res.data.articles);
        setheading("USA")
      });
  };

  const categoryChangeToC = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=ca&apiKey=a1992989f4cf41598c0a68aea85129eb' )
      .then((res) => {
        setData(res.data.articles);
        setheading("canada")
      });
  };
  const categoryChangeToG = () => {
    axios.get( 'https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=a1992989f4cf41598c0a68aea85129eb')
    .then((res) => 
    { setData(res.data.articles);
      setheading("general")
      });
  };
  const categoryChangeToSp = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=a1992989f4cf41598c0a68aea85129eb' )
      .then((res) => {
        setData(res.data.articles);
        setheading("sports")
      });
  };

  const categoryChangeToS = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=a1992989f4cf41598c0a68aea85129eb')
      .then((res) => {
        setData(res.data.articles);
        setheading("science")
      });
  };
  const categoryChangeToE = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=a1992989f4cf41598c0a68aea85129eb')
      .then((res) => {
        setData(res.data.articles);
        setheading("entertainment")
      });
  };
  const categoryChangeToT = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=a1992989f4cf41598c0a68aea85129eb')
      .then((res) => {
        setData(res.data.articles);
        setheading("technology")
      });
  };
  const categoryChangeToB = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a1992989f4cf41598c0a68aea85129eb1')
      .then((res) => {
        setData(res.data.articles);
        setheading("business")
      });
  };

  const news= data.map((value,index) => {
    return (
      <div key={index} className="card">
        <img src={value.urlToImage} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{value.title}</h5>
          <p className="card-text">{value.description} </p>

          <a href={value.url} className="btn-primary">
            READ MORE
          </a>
        </div>
      </div>
    )
  })
  

  return (
    <div>
      <div className="bigbox">
        <div className="side1">
          <div className="category">
            <h4>Category</h4>
            <button onClick={categoryChangeToG}>General</button>
            <br />
            <button onClick={categoryChangeToSp}>Sports</button>
            <br />
            <button onClick={categoryChangeToS}>Science</button>
            <br />
            <button onClick={categoryChangeToE}>Entertainment</button>
            <br />
            <button onClick={categoryChangeToT}>Technology</button>
            <br />
            <button onClick={categoryChangeToB}>Business</button>
            <br />
          </div>
          <div className="category2">
            <h4>Country</h4>
            <button onClick={categoryChangeToI}>India</button>
            <br />
            <button onClick={categoryChangeToU}>USA</button>
            <br />
            <button onClick={categoryChangeToC}>Canada</button>
            <br />
          </div>
        </div>
        
        
        
        < div className="cardbord">
        <div className='heading'>
 {heading}
  </div>
  <div className='cardshow'>
         {news}  
         </div>
        </div>
      </div>
    </div>
  );
}
