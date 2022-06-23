import { Carrusel1 } from "./components/Carrusel1";

function App() {

  const images = [
    "/gallery/02.jpg",
    "/gallery/03.jpg",
    "/gallery/04.jpg",
    "/gallery/05.jpg",
    "/gallery/06.jpg",
  ]

  return (
    <div className="App">
      <Carrusel1 images={images}/>

      <img src={"/gallery/02.jpg"} />


    </div>
  );
}

export default App;
