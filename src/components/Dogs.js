import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/dog.css"

function Dogs(props) {

  const [data, setData] = useState([]);

  const getDogData = async() =>{
    const output = await axios.get ("https://api.thedogapi.com/v1/breeds");
    console.log(output)
    setData(output.data)
  };

  useEffect( ()=>{
    getDogData();
}, []);

  return (
    <div>
      <h1>List of Dog Breeds</h1>

    <div className="dogs">
			{data.map((breedArgument, index) => {
				
				return (
					<li key={index} className="list">
					  <Link
							to={{
                pathname: "/Dogsdetail",

                props: {
                  name: breedArgument.name,
                  image: breedArgument.image.url,
                  lifespan: breedArgument.life_span
							}
							}}>

              <div className="dogname">{breedArgument.name}</div>

					  </Link>
					</li>
				)
			})}
		</div>

    </div>
  )
}

export default Dogs;