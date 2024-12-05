import "../estilos/FiltersDropdown.css";
import { useState } from "react";

const FiltersDropdown = () => {
  const [price, setPrice] = useState(1);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <div className="filters-dropdown">
      <h3>Precio</h3>
      <div className="price-slider">
        <span>${price}</span>
        <input
          type="range"
          min="1"
          max="100"
          step="1"
          value={price}
          onChange={handlePriceChange}
        />
      </div>

      <h3>Material</h3>
      <ul>
        <li>Oro</li>
        <li>Plata</li>
        <li>Acero</li>
      </ul>

      <h3>Color</h3>
      <ul>
        <li>Dorado</li>
        <li>Plateado</li>
        <li>Negro</li>
      </ul>
    </div>
  );
};

export default FiltersDropdown;

