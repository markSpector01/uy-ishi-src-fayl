import "./App.css";
import Layout from "./components/layout/layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Products from "./pages/products/products";
import { useState } from "react";
import About from "./pages/about/about";
import Karzina from "./pages/karzina";
import Footer from "./components/footer/footer";
import Cald from "./components/cald/cald";
import Comment from "./components/comments/comment";

function App() {
  const [theme, setTheme] = useState("dark");
  const [karzina, setKarzina] = useState([]);
  console.log(theme);
  return (
    <div className="App">
      <Layout mode={theme} theme={setTheme} karzina={karzina}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products set={setKarzina} />} />
          <Route
            path="/car"
            element={<Karzina products={karzina} set={setKarzina} />}
          />
          <Route path="/footer" element={<Footer />} />
          <Route path="/cald" element={<Cald />} />
          <Route path="/comment" element={<Comment />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
