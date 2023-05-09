import { Route, Routes } from "react-router-dom";
import { CreateUser } from "./components/CreateUser";
import { EditUser } from "./components/EditUser";
import { ShowUser } from "./components/ShowUser";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ShowUser />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        
      </Routes>
    </>
  );
};
