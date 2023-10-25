import { useEffect, useState } from "react";

import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import equipamentos from "./data/data.js";

function App() {
  type Equipamento = {
    id: number;
    name: string;
    img: string;
  };

  const [bodyMT, setBodyMT] = useState("");

  useEffect(() => {
    const navbarHeight = document.getElementById("navbar")?.clientHeight;
    if (navbarHeight) {
      setBodyMT(navbarHeight + 10 + "px");
    }
  }, []);

  return (
    <>
      <Navbar id="navbar" />
      <div
        style={{ marginTop: bodyMT }}
        className="justify-items-center grid md:grid-cols-4 grid-cols-2 gap-x-10 gap-y-5 mx-5"
      >
        {equipamentos.map((item: Equipamento) => (
          <Card key={item.id} name={item.name} img={item.img} />
        ))}
      </div>
    </>
  );
}

export default App;
