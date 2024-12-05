import '../estilos/Header.css'; // Estilos del header

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="/logo.png" alt="Brillanté" />
      </div>
      <nav className="header-nav">
        <a href="/categories">Categorías</a>
        <a href="/cart">Carrito</a>
      </nav>
      <div className="header-search">
        <input type="text" placeholder="¿Qué estás buscando?" />
        <button>🔍</button>
      </div>
    </header>
  );
};

export default Header;
