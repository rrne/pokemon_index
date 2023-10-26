import { Routes, BrowserRouter, Route } from "react-router-dom";
import PokemonList from "./components/pokemon-list";
import PokemonDetail from "./components/pokemon-detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonList />}/>
        <Route path="/detail/:id" element={<PokemonDetail/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
