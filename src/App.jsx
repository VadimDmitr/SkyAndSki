import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from "./components/Layout";
import { Home } from "./components/pages/Home";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { DeleteAccount } from "./components/DeleteAccount";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/delete-account" element={<DeleteAccount/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
