import "./css/dog.css"

function DogsDetail(props) {
  return (
    <div className="dogdetails">

      <h1>Dog Details</h1>
      <h1>{props.location.props.name}</h1>
      <img src={props.location.props.image} alt={props.location.props.name}/>
      <p> lifespan: {props.location.props.lifespan}</p>
    </div>
  )
}

export default DogsDetail;