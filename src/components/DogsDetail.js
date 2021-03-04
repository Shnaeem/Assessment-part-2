import "./css/dog.css"

// accessing the props through planets.js
function DogsDetail(props) {
  return (
    <div className="dogdetails">

      <h1>Dog Details</h1>
      <h1>{props.location.props.name}</h1>
      {/* <a href={props.location.props.image}> Click here for image!</a> */}
      <img src={props.location.props.image} alt={props.location.props.name}/>
      <p> lifespan: {props.location.props.lifespan}</p>
    </div>
  )
}

export default DogsDetail;