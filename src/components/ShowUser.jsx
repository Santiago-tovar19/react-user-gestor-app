import { useEffect, useMemo, useState } from "react";
import "../estilos/styles.css";

import {
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link, NavLink } from "react-router-dom";

const MySwal = withReactContent(Swal);

let num = 2;

export const ShowUser = () => {
  const [users, setUsers] = useState([]);

  const usersCollection = collection(db, "users");

  const getUsers = async () => {
    const data = await getDocs(usersCollection);

    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    getUsers();
  };

  const confirmDelete = (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "Una vez eliminado los datos se perderan...",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  useEffect(() => {
    getUsers();
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-grid gap-2">
              <h2 className="title-h2">
                Gestor de Usuarios: Firebase + ApiFetch
              </h2>
              <NavLink to="/create" className="btn-agregar">
                Crear nuevo usuario
              </NavLink>

              <table className="crud-table">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Username</th>
                    <th>Correo</th>
                    <th>Celular</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => {
                    return (
                      <tr key={user.key}>
                        <td>{user.Nombre}</td>
                        <td>{user.Username}</td>
                        <td>{user.Correo}</td>
                        <td>{user.Celular}</td>
                        <td>
                          <Link
                            to={`edit/${user.id}`}
                            className="btn btn-light"
                          >
                            <i class="fa-solid fa-user-pen"></i>
                          </Link>
                          <button
                            className="btn btn-danger button-create "
                            onClick={() => confirmDelete(user.id)}
                          >
                            <i class="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
