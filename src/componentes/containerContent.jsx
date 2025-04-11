import Content from "./content"
import ContentMain from "./contentMain"
import SectionRecetas from "./SectionRecetas"

export default function ContainerContent() {
    return (
        <div className="col-lg-8 text-center">
          
          <ContentMain/>
    
          <div className="row">
            <div className="col-lg-6">
              <Content/>
              <Content/>
              <Content/>
            </div>

            <div className="col-lg-6">
              <Content/>
              <Content/>
              <Content/>
            </div>
            <SectionRecetas/>
          </div>
    
    
        </div>
      
    )
  }