import '../estilos/Home.css';

const Home = () => {
  const handleClick = () => {
    window.location.href = '/login';
  };

  return (
    <div className="home-container">
      <div className="home-background">
        <div className="home-content">
          <img src="/logo.png" alt="Brillanté Logo" className="home-logo" />
          <p className="home-description">
            Descubre piezas diseñadas para resaltar tu estilo, porque cada mujer
            merece un toque especial que la haga sentir auténtica y poderosa.
          </p>
          <button className="home-button" onClick={handleClick}>
            Comenzar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
