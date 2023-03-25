import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from "./components/Layout";
import { Home } from "./components/pages/Home";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { DeleteAccount } from "./components/DeleteAccount";
import { Account } from "./components/pages/Account";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/delete-account" element={<DeleteAccount/>}/>
          <Route path="/account" element={<Account/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
