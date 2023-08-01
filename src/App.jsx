import './App.css'
import ClassComponent from './Components/ClassComponent'
import FuncComponent from './Components/FuncComponent'
// import ClassComponent, {OtroComponent} from './Components/ClassComponent'  //Ejemplo de como importar con export común

function App() {

  let titulo1 = 'Inicio'
  let titulo2 = 'Shop'

  return (
    <>
      <ClassComponent/>
      {/* <OtroComponent/> */}
      <FuncComponent titulo={titulo1} descripcion={'Esta es la descripción del inicio'}/>
      <FuncComponent titulo={titulo2} descripcion={'Vea todas las ofertas que tenemos para ofrecerle'}/>
    </>
  )
}

export default App
