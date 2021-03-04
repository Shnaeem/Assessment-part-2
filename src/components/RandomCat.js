import axios from "axios";
import React, { useState, useEffect } from "react";
import "./css/cat.css"


function RandomCat(props) {

  const [randomcat, setRandomCat] = useState([]);

  const fetchData = async () => {
		const output = await axios.get("https://api.thecatapi.com/v1/images/search");
    console.log(output)
		setRandomCat(output.data[0]);
	};

	useEffect(() => {
		fetchData();
	}, []);

  return (
    <div className="cats">
      <h1>Random Cat</h1>
      <button className="catsbutton" onClick={fetchData}> Random Button</button>
      
      <img src ={randomcat.url} alt={randomcat.id}></img>
    </div>
  )
}

export default RandomCat