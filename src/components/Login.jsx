import '../estilos/Login.css'; // Archivo de estilos

const Login = () => {
    return (
      <div className="login-container">
        {/* Columna de la imagen */}
        <div className="login-image">
          <img src="/loginbg.jpg" alt="Jewelry" />
        </div>
  
        {/* Columna del formulario */}
        <div className="login-form">
          <h2>Iniciar sesión</h2>
          <form>
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" placeholder="Ingresa tu correo electrónico" />
  
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="Ingresa tu contraseña" />
  
            <button type="submit">Login</button>
          </form>
          <p>
            ¿Aún no tienes cuenta? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    );
  };
  
  export default Login;