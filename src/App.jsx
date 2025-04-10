import Header from "./componentes/header"
import Menu from "./componentes/menu"
import Aside from "./componentes/aside"
import ContainerContent from "./componentes/containerContent"
import Footer from "./componentes/footer"

function App() {

  return (
    <>
      <div className="container-principal">
        <Header/>
        <Menu/>
        <div className="container mt-5" >
          <div className="row">
            <ContainerContent/>
            <Aside/>
          </div>
          
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
