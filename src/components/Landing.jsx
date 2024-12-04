import './Landing.css'; // Archivo de estilos
import Header from './Header'; // Componente del header

const Landing = () => {
  return (
    <div className="landing-container">
      {/* Header */}
      <Header />

      {/* Contenido principal */}
      <main className="landing-content">
        <h1>Lo más popular en:</h1>

        {/* Categoría: Collares */}
        <section className="category-section">
          <h2>Collares</h2>
          <div className="category-grid">
            <img src="/images/collares1.jpg" alt="Collar 1" />
            <img src="/images/collares2.jpg" alt="Collar 2" />
            <img src="/images/collares3.jpg" alt="Collar 3" />
          </div>
        </section>

        {/* Categoría: Anillos */}
        <section className="category-section">
          <h2>Anillos</h2>
          <div className="category-grid">
            <img src="/images/anillo1.jpg" alt="Anillo 1" />
            <img src="/images/anillo2.jpg" alt="Anillo 2" />
            <img src="/images/anillo3.jpg" alt="Anillo 3" />
          </div>
        </section>

        {/* Categoría: Tobilleras */}
        <section className="category-section">
          <h2>Tobilleras</h2>
          <div className="category-grid">
            <img src="/images/tobillera1.jpg" alt="Tobillera 1" />
            <img src="/images/tobillera2.jpg" alt="Tobillera 2" />
            <img src="/images/tobillera3.jpg" alt="Tobillera 3" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Landing;
