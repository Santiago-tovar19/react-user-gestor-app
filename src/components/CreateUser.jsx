import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig/firebase";

export const CreateUser = () => {
  const [nombre, setNombre] = useState("");
  const [username, setUserName] = useState("");
  const [correo, setCorreo] = useState("");
  const [celular, setCelular] = useState("");

  const navigate = useNavigate();

  const usersColletcion = collection(db, "users");

  const store = async (e) => {
    event.preventDefault();
    await addDoc(usersColletcion, {
      Nombre: nombre,
      Username: username,
      Correo: correo,
      Celular: celular,
    });
    navigate("/");
    console.log(e.target);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="title-h2">Crear Usuario</h1>
            <form onSubmit={store}>
              <div className="mb-3">
                <label className="form-label label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setNombre(e.target.value)}
                  value={nombre}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setUserName(e.target.value)}
                  value={username}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label label">Correo</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setCorreo(e.target.value)}
                  value={correo}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label label">Celular</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setCelular(e.target.value)}
                  value={celular}
                  required
                />
              </div>
              <button className="btn btn-primary mt-2" type="submit">
                Crear Usuario
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
