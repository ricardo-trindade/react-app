import logo from './logo.svg';
import './App.css';

function App() {

  // var name = 'Lucas'
  // let lastName = "Correa"
  // const middle_name = "Espírito Santo Nunes Jonas"
  // let fatia_texto = middle_name.split(" ")
  // console.log(fatia_texto);
  // console.table(fatia_texto);
  let full_name = "Maria Clara de Jose"
  let array_string = full_name.split(" ")
  let name = array_string[0]
  console.log(name);
  let lastName = array_string[array_string.length - 1]
  console.log(lastName)
  
  // let lastName = array_string[]
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          {`Olá, ${name} do ${middle_name} ${lastName}`}
        </p>
        <p>{fatia_texto}</p> */}
        <p>{`Olá, ${name} ${lastName}`}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
