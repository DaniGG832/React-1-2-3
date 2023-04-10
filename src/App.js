import logo from './logo.svg';
import './App.css';
import { Contacto } from './models/contacto.class';



import ComponenteA from './component/container/componenteA';


function App() {
  const contacto = new Contacto("Dani", "González", "dani@gmail.com", true);

  console.log(contacto);
  return (
    <div className="App">
      
      <header className="App-header">
      
      <h1>Contacto:</h1>

      <ComponenteA contacto={contacto}></ComponenteA>
           
        
      </header>
    </div>
  );
}

export default App;