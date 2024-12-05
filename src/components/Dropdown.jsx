import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../estilos/Dropdown.css";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/categorias/${category}`);
    setIsOpen(false); 
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        Categorías
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li onClick={() => handleCategoryClick("anillos")}>Anillos</li>
          <li onClick={() => handleCategoryClick("pulseras")}>Pulseras</li>
          <li onClick={() => handleCategoryClick("collares")}>Collares</li>
          <li onClick={() => handleCategoryClick("tobilleras")}>Tobilleras</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
