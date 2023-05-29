import './App.css'
import ClassComponent from './Components/ClassComponent'
import Ejercicio from './Components/Ejercicio';
import FunctionComponent from './Components/FunctionComponent'


function App() {

let salario = 150000;
return (
  <>
  <ClassComponent texto = 'Clase N° 1' amount={salario*6} />
  <FunctionComponent texto = 'Funcion N° 1' amount={salario}/>
  <FunctionComponent texto = 'Funcion N° 2' amount={300000}/>
  <Ejercicio nombre = 'Nahuel'/>
  </>
)
}

export default App