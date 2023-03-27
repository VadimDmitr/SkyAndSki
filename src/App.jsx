import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from "./components/Layout";
import { Home } from "./components/pages/Home";
import { Account } from "./components/pages/account/Account";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
