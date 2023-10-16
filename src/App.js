import "./App.css";
import equipamentos from "./data/data";
import Card from "./components/Card";

/**
 * Renders the App component.
 *
 * @return {JSX.Element} The rendered component.
 */
function App() {
  return (
    <>
      <a href="https://painel.hosteclab.com">
        <button className="painel">Acessar Painel</button>
      </a>
      <h1 className="title">Loja Hostec Lab</h1>
      <div className="cards">
        {equipamentos.map((item) => (
          <Card key={item.id} name={item.name} img={item.img} />
        ))}
      </div>
    </>
  );
}

export default App;
