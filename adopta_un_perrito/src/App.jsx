import "./App.css";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <Header titulo="Adopta un perrito" />
      <div className="card__container">
        <MyCard
          url="./src/assets/beto.jpg"
          name="Beto"
          description="Este perrito siempre está lleno de energía y es muy cariñoso, dale el hogar que se merece!"
          color="succes"
          text="Huski"
        />
        <MyCard
          url="./src/assets/beto.jpg"
          name="Beto"
          description="Este perrito siempre está lleno de energía y es muy cariñoso, dale el hogar que se merece!"
          color="succes"
          text="Huski"
        />
        <MyCard
          url="./src/assets/beto.jpg"
          name="Beto"
          description="Este perrito siempre está lleno de energía y es muy cariñoso, dale el hogar que se merece!"
          color="succes"
          text="Huski"
        />
        <MyCard
          url="./src/assets/beto.jpg"
          name="Beto"
          description="Este perrito siempre está lleno de energía y es muy cariñoso, dale el hogar que se merece!"
          color="succes"
          text="Huski"
        />
        <MyCard
          url="./src/assets/beto.jpg"
          name="Beto"
          description="Este perrito siempre está lleno de energía y es muy cariñoso, dale el hogar que se merece!"
          color="succes"
          text="Huski"
        />
        <MyCard
          url="./src/assets/beto.jpg"
          name="Beto"
          description="Este perrito siempre está lleno de energía y es muy cariñoso, dale el hogar que se merece!"
          color="succes"
          text="Huski"
        />
      </div>
    </div>
  );
}

export default App;
