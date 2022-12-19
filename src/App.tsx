import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Formulario from "./componentes/Formulario";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Formulario />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
