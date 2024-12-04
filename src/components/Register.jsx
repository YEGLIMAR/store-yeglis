import '../estilos/Register.css'; // Archivo de estilos compartido

const Register = () => {
  return (
    <div className="register-container">
      {/* Columna de la imagen */}
      <div className="register-image">
        <img src="/loginbg.jpg" alt="Jewelry" />
      </div>

      {/* Columna del formulario */}
      <div className="register-form">
        <h2>Crea tu cuenta</h2>
        <form>
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            placeholder="Ingresa tu correo electrónico"
          />

          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Ingresa tu contraseña"
          />

          <button type="submit">Registrarse</button>
        </form>
        <p>
          ¿Ya tienes cuenta? <a href="/login">Iniciar Sesión</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
