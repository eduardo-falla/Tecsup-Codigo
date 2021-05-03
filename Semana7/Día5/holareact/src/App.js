import logo from './assets/img/logo.svg';
import './assets/css/App.css';
import './componentes/MiComponente';
import MiComponente from './componentes/MiComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         HOLA!!!
        </p>
        <section className="componentes">
          <MiComponente/>
        </section>
      </header>

    </div>
  );
}

export default App;
