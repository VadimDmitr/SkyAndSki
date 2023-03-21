import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from "./components/Layout";
import { Home } from "./components/pages/Home";
import { Register } from "./components/Register";
import { Signin } from "./components/Signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/signin" element={<Signin/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
