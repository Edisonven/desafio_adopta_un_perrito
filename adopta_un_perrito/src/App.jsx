import "./App.css";
import Header from "./components/Header";
import MyCard from "./components/MyCard";

function App() {
  return (
    <>
      <Header titulo="Adopta un perrito" />
      <MyCard
        url="./src/assets/beto.jpg"
        name="Beto"
        description="Este perrito siempre está lleno de energía y es muy cariñoso, dale el hogar que se merece!"
      />
    </>
  );
}

export default App;
