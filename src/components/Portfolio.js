import React from 'react'
import FullPage, {FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage'
import '../styles/Portfolio.css'

function Portfolio() {

  return (
    <FullPage>
      <FullpageNavigation />
      <FullPageSections>
        <FullpageSection className="sections">
          <h1>Screen 1</h1>
        </FullpageSection>
        <FullpageSection className="sections">
          <h1>Screen 2</h1>
        </FullpageSection>
        <FullpageSection className="sections">
          <h1>Screen 3</h1>
        </FullpageSection>
      </FullPageSections>
    </FullPage>
  )
}

export default Portfolio