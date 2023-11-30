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
    link: string;
  };

  const [bodyMarginTop, setBodyMarginTop] = useState("");

  useEffect(() => {
    function handleResize() {
      let navbarHeight = document.getElementById("navbar")?.clientHeight;
      if (navbarHeight) {
        setBodyMarginTop(navbarHeight + 10 + "px");
      }
    }

    handleResize();

    window.addEventListener("resize", () => handleResize());
  }, []);

  return (
    <>
      <Navbar id="navbar" />
      <div
        style={{ marginTop: bodyMarginTop }}
        className="justify-items-center grid cols5:grid-cols-5 cols4:grid-cols-4 cols3:grid-cols-3 grid-cols-2 gap-x-10 gap-y-5 mx-5"
      >
        {equipamentos.map(({id, name, img, link}: Equipamento) => (
          <Card key={id} name={name} img={img} link={link} />
        ))}
      </div>
    </>
  );
}

export default App;
