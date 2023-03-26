import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from "./components/Layout";
import { Home } from "./components/pages/Home";
import { About } from './components/About';
import { Account } from "./components/pages/Account";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { Register } from "./components/Register";
import { DeleteAccount } from "./components/DeleteAccount";
import { UpdateAccount } from "./components/UpdateAccount";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<Account />} />
          {/*<Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/update-account" element={<UpdateAccount />} />*/}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
