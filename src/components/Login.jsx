import '../estilos/Login.css'; // Archivo de estilos
import { auth } from "../firebase-config"; // Importa Firebase Auth
import { signInWithEmailAndPassword } from "firebase/auth"; // Método de Firebase
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState(""); // Estado para el correo electrónico
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const [error, setError] = useState(""); // Estado para los errores
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    try {
      await signInWithEmailAndPassword(auth, email, password); // Intenta iniciar sesión
      navigate("/landing"); // Redirige a la tienda si el inicio de sesión es exitoso
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setError("El usuario no está registrado. Por favor, regístrese primero.");
      } else if (err.code === "auth/wrong-password") {
        setError("La contraseña es incorrecta. Inténtalo de nuevo.");
      } else {
        setError("Ocurrió un error al intentar iniciar sesión.");
      }
    }
  };


  return (
    <div className="login-container">
      <div className="login-image">
        <img src="/loginbg.jpg" alt="Jewelry" />
      </div>

      {/* Columna del formulario */}
      <div className="login-form">
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            placeholder="Ingresa tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Actualiza el estado del correo
          />

          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />

          <button type="submit">Login</button>
          {/* Mensaje de error */}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
        <p>
          ¿Aún no tienes cuenta? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;