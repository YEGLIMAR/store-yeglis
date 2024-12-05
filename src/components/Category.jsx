import "../estilos/Category.css";
import { FaShoppingCart, FaSignOutAlt, FaUserTie, FaSearch, FaSlidersH } from "react-icons/fa";
import PropTypes from 'prop-types';
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import FiltersDropdown from "./FiltersDropdown";
import { getAuth, signOut } from "firebase/auth";
import { useState } from "react";

const handleLogout = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log("Sesión cerrada exitosamente.");
      window.location.href = "/Login"; // Redirige a l
    })
    .catch((error) => {
      console.error("Error al cerrar sesión:", error);
    });
};

const Category= ({ title, products }) => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters((prevState) => !prevState);
  };


  return (
    <div className="category-container">
      {/* Header */}
      <header className="category-header">
        <Link to ="/" className="logo">
          <img src="/logo.png" alt="Brillanté" />
        </Link>

        <nav className="category-nav">
          <Dropdown /> 


          <div className="search-bar">
            <input type="text" placeholder="¿Qué estás buscando?" />
            <button className="search-icon">
              <FaSearch />
            </button>
          </div>

          <div className="icons">
            <button>
              <FaUserTie className="icon" />
            </button>
            <button>
              <FaShoppingCart className="icon" />
            </button>
            <button onClick = {handleLogout}>
              <FaSignOutAlt className="icon" />
            </button>
          </div>
        </nav>
      </header>

      {/* Título de la categoría */}
      <div className="category-title">
        <div className="filters-container" onClick={toggleFilters}>
          <FaSlidersH className="filter-icon" />
          <span>Todos los filtros</span>
        </div>
        <h1>{title}</h1>
      </div>

      {showFilters && <FiltersDropdown />}


      {/* Grid de productos */}
      <main className="category-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <span>{product.price}</span>
            <button>+</button>
          </div>
        ))}
      </main>
    </div>
  );
};
Category.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Category;

