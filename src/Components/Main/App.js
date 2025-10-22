import './App.css';
import MiLista from '../Lista/MiLista.js';
//import Header from '../Components/Header/Header.js';
//import Footer from '../Footer/Footer.js';

function App() {
  return (
    <>
      <h2>Mi aplicación</h2>
      <div id="parrafo">
        <p>Esta aplicacion muestra el contenido almacenado de mi app:</p>
        <MiLista/>
      </div>
    </>
  );
}
export default App;

