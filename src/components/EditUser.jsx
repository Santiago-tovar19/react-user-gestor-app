import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

export const EditUser = () => {
  const [nombre, setNombre] = useState("");
  const [username, setUserName] = useState("");
  const [correo, setCorreo] = useState("");
  const [celular, setCelular] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  const update = async () => {
    event.preventDefault();
    const user = doc(db, "users", id);
    const data = {
      Nombre: nombre,
      Username: username,
      Correo: correo,
      Celular: celular,
    };
    await updateDoc(user, data);
    navigate("/");
  };

  const getUserById = async (id) => {
    const user = await getDoc(doc(db, "users", id));
    if (user.exists()) {
      setNombre(user.data().Nombre);
      setUserName(user.data().Username);
      setCorreo(user.data().Correo);
      setCelular(user.data().Celular);
    } else {
      console.log("El usuario no existe");
    }
  };

  useEffect(() => {
    getUserById(id);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className="title-h2">Actualizar Usuario</h2>
          <form onSubmit={update}>
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

            <div className="mb-3 label">
              <label className="form-label">Correo</label>
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
              Actualizar Usuario
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
