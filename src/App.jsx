import Header from "./componentes/header"
import Menu from "./componentes/menu"
import Aside from "./componentes/aside"
import Content from "./componentes/content"
import Footer from "./componentes/footer"

function App() {

  return (
    <>
      <Header/>
      <Menu/>
      <div class="container mt-5">
        <div class="row">
          <Aside/>
          <Content/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
