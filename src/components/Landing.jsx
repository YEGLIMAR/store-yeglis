import "../estilos/Landing.css"; // Archivo CSS
import {
  FaShoppingCart,
  FaSignOutAlt,
  FaUserTie,
  FaSearch,
} from "react-icons/fa";
//import { useNavigate } from "react-router-dom";
//import  { useState } from "react";
import Dropdown from "./Dropdown";
import { getAuth, signOut } from "firebase/auth";

const handleLogout = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log("Sesión cerrada exitosamente.");
      window.location.href = "/Login";
    })
    .catch((error) => {
      console.error("Error al cerrar sesión:", error);
    });
};

const Landing = () => {

  const productos = {
    Collares: [
      { id: 1, image: "/images/collares1.jpg", title: "Set de collar - dorado", price: "$1,20" },
      { id: 2, image: "/images/collares2.jpg", title: "Collar - rojo", price: "$7" },
      { id: 3, image: "/images/collares3.jpg", title: "Collar  - dorado", price: "$7" },
    ],
    Anillos: [
      { id: 4, image: "/images/anillo1.jpg", title: "Anillo corazón - dorado", price: "$1,20" },
      { id: 5, image: "/images/anillo2.jpg", title: "Anillo corazón - dorado", price: "$7" },
      { id: 6, image: "/images/anillo3.jpg", title: "Anillo sencillo - dorado", price: "$7" },
    ],
    Tobilleras: [
      { id: 7, image: "/images/tobillera1.jpg", title: "Tobillera - dorado", price: "$1,20" },
      { id: 8, image: "/images/tobillera2.jpg", title: "Tobillera triple - dorado", price: "$7" },
      { id: 9, image: "/images/tobillera3.jpg", title: "Tobillera - dorado", price: "$8" },
    ],
  };

  return (
    <div className="landing-container">
      <header className="landing-header">
        <div className="logo"></div>
        <div className="logo">
          <img src="/logo.png" alt="Brillanté" />
        </div>
        <nav className="landing-nav">
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


      {/* Contenido principal */}
      <main className="landing-content">
        <h1>Lo más popular en:</h1>
        {Object.keys(productos).map((categoria) => (
          <section key={categoria} className="category-section">
            <h2>{categoria}</h2>
            <div className="category-grid">
              {productos[categoria].map((producto) => (
                <div key={producto.id} className="product-card">
                  <img src={producto.image} alt={producto.title} />
                  <p>{producto.title}</p>
                  <span>{producto.price}</span>
                  <button>+</button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Landing;
