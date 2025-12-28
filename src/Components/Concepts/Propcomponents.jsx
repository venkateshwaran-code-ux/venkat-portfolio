import "../Concepts/Propcomponents.css";
function Propcomponents({ name, image }) {
  return (
    <div className="tech-area">
      <div className="Technologies-included">
        <p className="Technologies">{name}</p>
        <img src={image} alt="" className="Technologies-images" />
      </div>
    </div>
  );
}

export default Propcomponents;
