import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth"; 
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../estilos/Register.css"; 

const Register = () => {
  const [email, setEmail] = useState(""); // Estado para el correo electrónico
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const [error, setError] = useState(""); // Estado para los errores
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password); // Registra al usuario en Firebase
      alert("Registro exitoso"); // Muestra un mensaje de éxito
      navigate("/login"); // Redirige al login después de registrar
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("El correo ya está registrado. Por favor, use otro.");
      } else if (err.code === "auth/invalid-email") {
        setError("El correo electrónico no es válido.");
      } else {
        setError("Ocurrió un error. Inténtalo nuevamente.");
      }
    }
  };

  return (
    <div className="register-container">
      {/* Columna de la imagen */}
      <div className="register-image">
        <img src="/loginbg.jpg" alt="Jewelry" />
      </div>

      {/* Columna del formulario */}
      <div className="register-form">
        <h2>Crea tu cuenta</h2>
        <form onSubmit={handleRegister}>
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
            onChange={(e) => setPassword(e.target.value)} // Actualiza el estado de la contraseña
          />

          <button type="submit">Registrarse</button>
          {/* Mensaje de error */}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
        <p>
          ¿Ya tienes cuenta? <a href="/login">Iniciar Sesión</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
